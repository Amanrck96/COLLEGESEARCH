import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import https from 'https';
import crypto from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataPath = path.join(__dirname, '../public/siteData.json');
const uploadsDir = path.join(__dirname, '../public/uploads/colleges');
const reportsDir = path.join(__dirname, '../public/uploads/reports');

// Ensure base directories exist
fs.mkdirSync(uploadsDir, { recursive: true });
fs.mkdirSync(reportsDir, { recursive: true });

// Load env variables manually from .env file
function loadEnv() {
  const envPath = path.join(__dirname, '../.env');
  if (fs.existsSync(envPath)) {
    const content = fs.readFileSync(envPath, 'utf8');
    const lines = content.split('\n');
    for (const line of lines) {
      const match = line.match(/^\s*([^#=]+)\s*=\s*(.*)\s*$/);
      if (match) {
        const key = match[1].trim();
        let val = match[2].trim();
        if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
          val = val.substring(1, val.length - 1);
        }
        process.env[key] = val;
      }
    }
  }
}
loadEnv();

const GEMINI_API_KEY = process.env.VITE_GEMINI_API_KEY;

// High-quality fallback images (Unsplash)
const SAMPLE_CAMPUS_IMAGES = [
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1571260899304-425070110ea8?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1607237138185-eedd996e5b09?auto=format&fit=crop&q=80&w=1000"
];

// Helper to delay execution (respect rate limits)
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Helper for HTTP/HTTPS GET requests with timeout
function fetchBuffer(url, options = {}) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : null;
    if (!client) {
      reject(new Error("Unsupported protocol (must be HTTPS)"));
      return;
    }
    
    const requestOptions = {
      timeout: 10000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        ...options.headers
      }
    };

    const req = client.get(url, requestOptions, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        // Handle redirect
        const redirectUrl = res.headers.location.startsWith('http') 
          ? res.headers.location 
          : new URL(res.headers.location, url).href;
        fetchBuffer(redirectUrl, options).then(resolve).catch(reject);
        return;
      }

      if (res.statusCode !== 200) {
        reject(new Error(`Failed to fetch: HTTP ${res.statusCode}`));
        return;
      }

      const chunks = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    });

    req.on('error', reject);
    req.on('timeout', () => {
      req.destroy();
      reject(new Error("Request timeout"));
    });
  });
}

// Check if a field is missing, null, or placeholder
function isFieldEmpty(value, fieldName) {
  if (value === undefined || value === null) return true;
  
  if (Array.isArray(value)) {
    return value.length === 0;
  }
  
  if (typeof value === 'string') {
    const val = value.trim();
    if (val === "" || val.toUpperCase() === "N/A" || val.toLowerCase() === "unknown") return true;
    
    // Check specific placeholders
    if (fieldName === 'phone' && (val === '0123-456789' || val === '0123456789' || val.length < 5)) return true;
    if (fieldName === 'website' && (val.includes('college.edu') || val.includes('example.edu'))) return true;
    if (fieldName === 'email' && (!val.includes('@') || val.includes('email@') || val.includes('admin@college'))) return true;
    if (fieldName === 'highestPackage' && val.includes('Contact for details')) return true;
    if (fieldName === 'averagePackage' && val.includes('Contact for details')) return true;
    if (fieldName === 'placements' && val.includes('N/A')) return true;
    if (fieldName === 'img' && (val.includes('unsplash.com/photo-1541339907198') || val.includes('images.unsplash.com/photo-1562774053-701939374585'))) return true;
    if (fieldName === 'about' && val.includes('a premier institute located in')) return true;
  }
  
  return false;
}

// Call Gemini API to retrieve factual information
async function fetchFactualInfoFromGemini(collegeName, location, missingFields) {
  if (!GEMINI_API_KEY) {
    throw new Error("Gemini API key (VITE_GEMINI_API_KEY) is missing in .env");
  }

  const prompt = `
You are an expert college data enrichment assistant. Your task is to find real, factual, and verified information for the following college:
College Name: "${collegeName}"
Location: "${location}"

The following fields are missing or have placeholders that need real data:
${missingFields.join(", ")}

Provide a JSON object where the keys are the missing fields and the values are the enriched, real, and factual data.
If any field cannot be found or is not publicly available, set its value to null.
Do NOT fabricate any information. Do NOT use fake placeholders. Use only factual public information.
For descriptive fields (like description/about, admissionProcess, hostel, scholarships), write professional, unique descriptions of 40-80 words in your own original wording.

JSON response schema (output only valid JSON, no markdown code block, no backticks, no wrap, just the raw JSON):
{
  "logo": "URL or null (a suggested official logo search query or wiki page logo url)",
  "banner": "URL or null",
  "country": "string (e.g. India)",
  "pinCode": "string",
  "ownership": "string (Private, Public, Government, or Government-aided)",
  "approval": "string (e.g. AICTE, UGC, NBA, MCI approved)",
  "accreditation": "string (e.g. NAAC A++)",
  "universityType": "string (State, Central, Deemed, Private, Affiliate)",
  "fees": "string (estimated annual fees or range)",
  "eligibility": "string",
  "admissionProcess": "string (admission criteria overview)",
  "exams": "string (accepted exams e.g. JEE Main, CAT, GATE)",
  "cutoffs": "string (typical cutoff ranges or info)",
  "highestPackage": "string (e.g. ₹45 LPA)",
  "averagePackage": "string (e.g. ₹7.5 LPA)",
  "placements": "string (e.g. 92% placement rate)",
  "topRecruiters": "string (comma-separated list of top recruiters)",
  "facilities": "string (comma-separated list of amenities)",
  "hostel": "string (hostel capacity, fees, or description)",
  "scholarships": "string (available scholarship programs)",
  "ranking": "number (NIRF or other verified ranking rank, or null)",
  "phone": "string (valid official contact number)",
  "email": "string (valid official email address)",
  "website": "string (official website starting with http/https)",
  "brochureLink": "string (official brochure URL or null)",
  "faqs": [
    { "question": "string", "answer": "string" }
  ]
}
`;

  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: { temperature: 0.2, responseMimeType: "application/json" }
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Gemini API returned status ${response.statusCode || response.status}: ${errorText}`);
  }

  const data = await response.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) {
    throw new Error("Empty response from Gemini API");
  }

  try {
    return JSON.parse(text.trim());
  } catch (err) {
    // If JSON parsing fails, try to clean potential markdown wrapper
    const cleanedText = text.replace(/```json/gi, '').replace(/```/gi, '').trim();
    return JSON.parse(cleanedText);
  }
}

// Download and optimize an image using Jimp
async function downloadAndProcessImage(url, collegeId, filename, imageLog) {
  const collegeDir = path.join(uploadsDir, String(collegeId));
  fs.mkdirSync(collegeDir, { recursive: true });
  
  const relativeSubpath = `uploads/colleges/${collegeId}/${filename}`;
  const absoluteDest = path.join(__dirname, '../public', relativeSubpath);
  
  let tempBuffer;
  try {
    tempBuffer = await fetchBuffer(url);
  } catch (err) {
    imageLog.errors.push({ url, filename, error: err.message });
    throw err;
  }

  const originalSize = tempBuffer.length;
  const hash = crypto.createHash('md5').update(tempBuffer).digest('hex');

  // Check for duplicate images in our logs
  if (imageLog.hashes.has(hash)) {
    imageLog.duplicates++;
    throw new Error(`Duplicate image detected (MD5 hash: ${hash})`);
  }
  imageLog.hashes.add(hash);

  // Try optimizing with Jimp
  let JimpModule;
  try {
    JimpModule = (await import('jimp')).default;
  } catch (e) {
    // Fall back to saving directly if Jimp is not loaded
  }

  if (JimpModule) {
    try {
      const img = await JimpModule.read(tempBuffer);
      // Resize to high-quality standard
      if (filename.includes('logo')) {
        img.resize(200, JimpModule.AUTO);
      } else {
        img.resize(1000, JimpModule.AUTO);
      }
      
      // Save as webp if Jimp supports it, otherwise write output buffer
      // Jimp doesn't natively support WebP output in older versions, so we fall back gracefully
      try {
        img.quality(80);
        await img.writeAsync(absoluteDest);
      } catch (writeErr) {
        // If writeAsync fails (e.g. unsupported extension webp), write the original buffer
        fs.writeFileSync(absoluteDest, tempBuffer);
      }
    } catch (jimpErr) {
      // If Jimp fails to read/write, save buffer directly
      fs.writeFileSync(absoluteDest, tempBuffer);
    }
  } else {
    fs.writeFileSync(absoluteDest, tempBuffer);
  }

  const optimizedSize = fs.existsSync(absoluteDest) ? fs.statSync(absoluteDest).size : originalSize;
  imageLog.optimized.push({
    collegeId,
    filename,
    url,
    originalSizeKB: (originalSize / 1024).toFixed(1),
    optimizedSizeKB: (optimizedSize / 1024).toFixed(1),
    savingsPercent: (((originalSize - optimizedSize) / originalSize) * 100).toFixed(1)
  });

  return `/${relativeSubpath}`;
}

async function runEnricherAgent() {
  console.log("==================================================");
  console.log("🌟 STARTING AUTONOMOUS COLLEGE ENRICHMENT AGENT");
  console.log("==================================================");

  if (!fs.existsSync(dataPath)) {
    console.error(`Database not found at ${dataPath}. Please initialize it first.`);
    process.exit(1);
  }

  const siteData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  const colleges = siteData.colleges || [];
  const totalColleges = colleges.length;
  console.log(`Loaded ${totalColleges} colleges from database.`);

  const listFieldsToVerify = [
    'name', 'logo', 'banner', 'gallery', 'location', 'state', 'country', 'address', 'pinCode',
    'about', 'established', 'ownership', 'approval', 'accreditation', 'universityType',
    'courses', 'fees', 'eligibility', 'admissionProcess', 'exams', 'cutoffs', 'placements',
    'highestPackage', 'averagePackage', 'topRecruiters', 'facilities', 'hostel', 'scholarships',
    'ranking', 'phone', 'email', 'website', 'brochureLink', 'faqs'
  ];

  let collegesProcessed = 0;
  let collegesUpdated = 0;
  let fieldsCompleted = 0;
  let imagesDownloaded = 0;
  let errorsCount = 0;

  const errorLog = [];
  const duplicateColleges = [];
  const duplicateCourses = [];
  const brokenImages = [];
  const missingCoordinates = [];
  const invalidPhones = [];
  const invalidEmails = [];
  const brokenWebsites = [];
  const duplicateRankings = [];
  const duplicateFacilities = [];

  const imageLog = {
    hashes: new Set(),
    optimized: [],
    duplicates: 0,
    errors: []
  };

  const missingFieldReport = {};
  const updatedCollegesSummary = [];

  // Helper patterns
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?[0-9\s\-()]{7,20}$/;

  const seenColleges = {};
  const seenRankings = {};

  colleges.forEach(c => {
    // 1. Duplicate Colleges
    const key = `${c.name.toLowerCase().trim()}-${c.location.toLowerCase().trim()}`;
    if (seenColleges[key]) {
      duplicateColleges.push({
        name: c.name,
        location: c.location,
        collegeId1: seenColleges[key].id,
        collegeId2: c.id
      });
    } else {
      seenColleges[key] = c;
    }

    // 2. Duplicate Courses
    if (c.courses && Array.isArray(c.courses)) {
      const seenCourses = new Set();
      c.courses.forEach(cr => {
        const title = cr.title.toLowerCase().trim();
        if (seenCourses.has(title)) {
          duplicateCourses.push({
            collegeId: c.id,
            collegeName: c.name,
            courseTitle: cr.title
          });
        } else {
          seenCourses.add(title);
        }
      });
    }

    // 3. Broken/Missing Local Images or Invalid URLs
    const checkImage = (imgUrl, type) => {
      if (!imgUrl) {
        brokenImages.push({ collegeId: c.id, collegeName: c.name, type, error: "Missing image path" });
        return;
      }
      if (imgUrl.startsWith('/uploads/')) {
        const localPath = path.join(__dirname, '../public', imgUrl);
        if (!fs.existsSync(localPath)) {
          brokenImages.push({ collegeId: c.id, collegeName: c.name, type, error: `Local file does not exist: ${imgUrl}` });
        }
      } else if (!imgUrl.startsWith('http://') && !imgUrl.startsWith('https://')) {
        brokenImages.push({ collegeId: c.id, collegeName: c.name, type, error: `Invalid image URL structure: ${imgUrl}` });
      }
    };
    checkImage(c.img, 'main_image');
    if (c.gallery && Array.isArray(c.gallery)) {
      c.gallery.forEach((g, idx) => checkImage(g, `gallery_image_${idx}`));
    }

    // 4. Missing geographical coordinates
    if (!c.latitude && !c.longitude && !c.coordinates) {
      missingCoordinates.push({ collegeId: c.id, collegeName: c.name });
    }

    // 5. Invalid Phone numbers
    if (c.phone) {
      const isPlaceholder = c.phone === '0123-456789' || c.phone === '0123456789' || c.phone.length < 5;
      if (isPlaceholder || !phoneRegex.test(c.phone.trim())) {
        invalidPhones.push({ collegeId: c.id, collegeName: c.name, value: c.phone });
      }
    } else {
      invalidPhones.push({ collegeId: c.id, collegeName: c.name, value: null });
    }

    // 6. Invalid Emails
    if (c.email) {
      const isPlaceholder = c.email.includes('email@') || c.email.includes('admin@college');
      if (isPlaceholder || !emailRegex.test(c.email.trim())) {
        invalidEmails.push({ collegeId: c.id, collegeName: c.name, value: c.email });
      }
    } else {
      invalidEmails.push({ collegeId: c.id, collegeName: c.name, value: null });
    }

    // 7. Broken website URLs
    if (c.website) {
      const isPlaceholder = c.website.includes('college.edu') || c.website.includes('example.edu');
      const isInvalidUrl = !c.website.startsWith('http://') && !c.website.startsWith('https://');
      if (isPlaceholder || isInvalidUrl) {
        brokenWebsites.push({ collegeId: c.id, collegeName: c.name, value: c.website });
      }
    } else {
      brokenWebsites.push({ collegeId: c.id, collegeName: c.name, value: null });
    }

    // 8. Duplicate Rankings
    if (c.ranking) {
      const rank = parseInt(c.ranking);
      if (seenRankings[rank]) {
        duplicateRankings.push({
          rank,
          collegeId1: seenRankings[rank].id,
          collegeName1: seenRankings[rank].name,
          collegeId2: c.id,
          collegeName2: c.name
        });
      } else {
        seenRankings[rank] = c;
      }
    }

    // 9. Duplicate Facilities
    if (c.facilities) {
      const facilitiesList = typeof c.facilities === 'string' 
        ? c.facilities.split(',').map(f => f.trim().toLowerCase()) 
        : (Array.isArray(c.facilities) ? c.facilities.map(f => f.toLowerCase()) : []);
      const seenFac = new Set();
      const dupFac = new Set();
      facilitiesList.forEach(f => {
        if (f) {
          if (seenFac.has(f)) {
            dupFac.add(f);
          } else {
            seenFac.add(f);
          }
        }
      });
      if (dupFac.size > 0) {
        duplicateFacilities.push({
          collegeId: c.id,
          collegeName: c.name,
          duplicateTerms: Array.from(dupFac)
        });
      }
    }
  });

  // Limit processing batch size to avoid hitting rate limits or spending too many resources in a single run
  // We can process 10 colleges per session. The user can run it continuously to process more.
  const MAX_BATCH_SIZE = 10;
  let batchCounter = 0;

  for (const college of colleges) {
    collegesProcessed++;
    const missingFields = [];
    
    // Scan missing fields
    listFieldsToVerify.forEach(field => {
      // Handle mapping to siteData structure
      let value = college[field];
      if (field === 'about') value = college.about || college.description;
      if (field === 'banner') value = college.banner || college.img;
      if (field === 'ranking') value = college.ranking || college.rankings;

      if (isFieldEmpty(value, field)) {
        missingFields.push(field);
      }
    });

    if (missingFields.length > 0) {
      missingFieldReport[college.id] = {
        name: college.name,
        missingFields: [...missingFields]
      };

      if (batchCounter >= MAX_BATCH_SIZE) {
        continue; // Log missing fields for all but don't enrich past batch limit
      }

      console.log(`\n--------------------------------------------------`);
      console.log(`[${batchCounter + 1}/${MAX_BATCH_SIZE}] Enriched College: ${college.name} (ID: ${college.id})`);
      console.log(`Missing fields detected: ${missingFields.join(', ')}`);
      
      try {
        batchCounter++;
        
        // Fetch missing fields via Gemini API
        const locationStr = `${college.location || 'India'}, ${college.state || ''}`;
        const enrichedData = await fetchFactualInfoFromGemini(college.name, locationStr, missingFields);
        
        let updateSummary = {
          collegeId: college.id,
          collegeName: college.name,
          updatedFields: []
        };

        // Merge enriched fields
        for (const [key, val] of Object.entries(enrichedData)) {
          if (val !== null && val !== undefined) {
            // Apply mapped field values
            if (key === 'about' || key === 'description') {
              college.about = val;
            } else if (key === 'banner' || key === 'img') {
              college.img = val;
            } else if (key === 'ranking' || key === 'rankings') {
              college.ranking = parseInt(val) || college.ranking;
            } else if (key === 'faqs') {
              college.faqs = val;
            } else {
              college[key] = val;
            }
            fieldsCompleted++;
            updateSummary.updatedFields.push(key);
          }
        }

        // Image Handling
        // 1. Download official logo if logo website is available and logo field was empty
        if (missingFields.includes('logo') && college.website) {
          try {
            const domain = new URL(college.website).hostname.replace('www.', '');
            const clearbitLogoUrl = `https://logo.clearbit.com/${domain}`;
            console.log(` -> Attempting to download logo from Clearbit for domain: ${domain}`);
            const savedLogoPath = await downloadAndProcessImage(clearbitLogoUrl, college.id, 'logo.webp', imageLog);
            college.logo = savedLogoPath;
            imagesDownloaded++;
            updateSummary.updatedFields.push('logo_file');
          } catch (logoErr) {
            // Fallback or skip
            console.log(` -> Clearbit Logo download failed: ${logoErr.message}`);
          }
        }

        // 2. Download and replace placeholder/missing campus images
        if (missingFields.includes('banner') || missingFields.includes('gallery')) {
          try {
            console.log(` -> Attempting to harvest campus images...`);
            // Choose a fallback image from our list or search
            const sampleImgUrl = SAMPLE_CAMPUS_IMAGES[college.id % SAMPLE_CAMPUS_IMAGES.length];
            const savedBannerPath = await downloadAndProcessImage(sampleImgUrl, college.id, 'banner.webp', imageLog);
            college.img = savedBannerPath;
            
            // Generate gallery entries
            college.gallery = [savedBannerPath];
            for (let i = 1; i <= 2; i++) {
              const galleryImgUrl = SAMPLE_CAMPUS_IMAGES[(college.id + i) % SAMPLE_CAMPUS_IMAGES.length];
              try {
                const savedGalleryPath = await downloadAndProcessImage(galleryImgUrl, college.id, `gallery/${i}.webp`, imageLog);
                college.gallery.push(savedGalleryPath);
                imagesDownloaded++;
              } catch (galleryErr) {
                // Ignore single gallery errors
              }
            }
            imagesDownloaded++;
            updateSummary.updatedFields.push('images_downloaded');
          } catch (imgErr) {
            console.log(` -> Campus image download failed: ${imgErr.message}`);
          }
        }

        collegesUpdated++;
        updatedCollegesSummary.push(updateSummary);
        
        // Save database progressively
        fs.writeFileSync(dataPath, JSON.stringify(siteData, null, 2));
        console.log(` -> Enriched fields successfully saved for ${college.name}.`);

        // Small delay to avoid API rate limits
        await delay(3000);

      } catch (err) {
        errorsCount++;
        console.error(` -> Error enriching ${college.name}: ${err.message}`);
        errorLog.push({
          collegeId: college.id,
          collegeName: college.name,
          error: err.message,
          timestamp: new Date().toISOString()
        });
      }
    }
  }

  // Generate Reports
  fs.writeFileSync(path.join(reportsDir, 'missing_field_report.json'), JSON.stringify(missingFieldReport, null, 2));
  fs.writeFileSync(path.join(reportsDir, 'error_log.json'), JSON.stringify(errorLog, null, 2));
  fs.writeFileSync(path.join(reportsDir, 'duplicate_report.json'), JSON.stringify({ duplicateColleges, duplicateCourses }, null, 2));
  fs.writeFileSync(path.join(reportsDir, 'image_optimization_report.json'), JSON.stringify(imageLog.optimized, null, 2));
  fs.writeFileSync(path.join(reportsDir, 'updated_colleges_summary.json'), JSON.stringify(updatedCollegesSummary, null, 2));
  fs.writeFileSync(path.join(reportsDir, 'download_report.json'), JSON.stringify({
    totalDownloaded: imagesDownloaded,
    successfulDownloads: imageLog.optimized,
    duplicateImagesSkipped: imageLog.duplicates,
    failedDownloads: imageLog.errors
  }, null, 2));
  fs.writeFileSync(path.join(reportsDir, 'data_quality_report.json'), JSON.stringify({
    duplicateColleges,
    duplicateCourses,
    brokenImages,
    missingCoordinates,
    invalidPhones,
    invalidEmails,
    brokenWebsites,
    duplicateRankings,
    duplicateFacilities
  }, null, 2));

  console.log("\n==================================================");
  console.log("🎉 ENRICHMENT RUN COMPLETED");
  console.log("==================================================");
  console.log(`Colleges Processed: ${collegesProcessed}`);
  console.log(`Colleges Updated: ${collegesUpdated}`);
  console.log(`Fields Completed: ${fieldsCompleted}`);
  console.log(`Images Downloaded: ${imagesDownloaded}`);
  console.log(`Errors Encountered: ${errorsCount}`);
  console.log(`All reports generated under public/uploads/reports/`);
  console.log("==================================================");
}

runEnricherAgent();
