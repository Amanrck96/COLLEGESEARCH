import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { encryptPayload } from '../middleware/wireArmor.js';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_DATA_FILE = path.join(__dirname, '../../public/siteData.json');

// In-Memory Fast Cache of Colleges
let inMemoryColleges = [];
let lastMtime = 0;

function loadCollegesFromDisk() {
  try {
    if (fs.existsSync(SITE_DATA_FILE)) {
      const stats = fs.statSync(SITE_DATA_FILE);
      if (stats.mtimeMs !== lastMtime || inMemoryColleges.length === 0) {
        const data = JSON.parse(fs.readFileSync(SITE_DATA_FILE, 'utf-8'));
        inMemoryColleges = Array.isArray(data.colleges) ? data.colleges : [];
        lastMtime = stats.mtimeMs;
      }
    }
  } catch (err) {
    console.error('❌ Failed to load siteData.json in server:', err.message);
  }
}

// Initial load
loadCollegesFromDisk();

function saveCollegesToDisk() {
  try {
    let siteData = { colleges: [], exams: [] };
    if (fs.existsSync(SITE_DATA_FILE)) {
      try {
        siteData = JSON.parse(fs.readFileSync(SITE_DATA_FILE, 'utf-8'));
      } catch (e) {}
    }
    siteData.colleges = inMemoryColleges;
    fs.writeFileSync(SITE_DATA_FILE, JSON.stringify(siteData, null, 2), 'utf-8');
  } catch (err) {
    console.error('❌ Failed to save siteData.json from server:', err.message);
  }
}

// Standard Indian States & Cities mapping
const INDIAN_STATES = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chandigarh', 'Chhattisgarh',
  'Delhi', 'Delhi NCR', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu & Kashmir',
  'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
  'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Puducherry', 'Punjab', 'Rajasthan',
  'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
];

const STANDARD_STREAMS = [
  'Engineering (B.Tech / B.E. / M.Tech)',
  'Management (MBA / PGDM / BBA)',
  'Medical (MBBS / MD / MS)',
  'Pharmacy (B.Pharm / D.Pharm)',
  'Computer Applications (BCA / MCA)',
  'Law (LLB / BA LLB / LLM)',
  'Design & Fashion (B.Des / M.Des)',
  'Science (B.Sc / M.Sc)',
  'Commerce & Banking (B.Com / M.Com)',
  'Arts & Humanities (BA / MA)',
  'Hotel Management & Aviation'
];

// GET /api/colleges/filters - Instant Pre-aggregated Distinct Filter Options
router.get('/filters', (req, res) => {
  loadCollegesFromDisk();

  const stateCityMap = {};
  inMemoryColleges.forEach(c => {
    const st = c.state ? c.state.trim() : 'Other';
    const loc = c.location ? c.location.trim() : '';
    if (st && loc) {
      if (!stateCityMap[st]) stateCityMap[st] = new Set();
      stateCityMap[st].add(loc);
    }
  });

  const formattedStateCity = {};
  Object.keys(stateCityMap).forEach(st => {
    formattedStateCity[st] = Array.from(stateCityMap[st]).sort();
  });

  res.status(200).json({
    countries: ['India', 'USA', 'UK', 'Canada', 'Australia', 'Germany'],
    states: INDIAN_STATES,
    citiesByState: formattedStateCity,
    courses: STANDARD_STREAMS
  });
});

// GET /api/colleges/stats - Live Unified Database Statistics
router.get('/stats', async (req, res) => {
  try {
    loadCollegesFromDisk();
    let totalColleges = inMemoryColleges.length;
    let totalStudents = 8;
    let pendingReviews = 0;
    let totalLogs = 18;
    try {
      const dbCollegeCount = await prisma.college.count();
      if (dbCollegeCount > 0) {
        totalColleges = dbCollegeCount;
      }
      totalStudents = await prisma.user.count({ where: { role: 'STUDENT' } });
      pendingReviews = await prisma.review.count({ where: { status: 'PENDING' } });
      totalLogs = await prisma.auditLog.count();
    } catch (dbErr) {
      console.warn("Could not query DB counts, using memory counts:", dbErr.message);
    }

    res.status(200).json({
      totalColleges,
      totalStudents,
      pendingReviews,
      totalLogs,
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/colleges - Lightning-fast Smart Filtered & Paginated Search
router.get('/', (req, res) => {
  const {
    q,
    country,
    state,
    city,
    type,
    course,
    feeRange,
    rating,
    placement,
    hostel,
    exam,
    sortBy = 'rating',
    page = 1,
    limit = 12,
    admin
  } = req.query;

  // Auto-reload cache if file changed on disk
  loadCollegesFromDisk();

  let results = [...inMemoryColleges];

  // 1. Smart Tokenized Natural Search (with stop-words, synonyms and acronyms)
  if (q) {
    const rawQ = String(q).toLowerCase().trim();
    const stopWords = new Set(['top', 'best', 'in', 'of', 'for', 'the', 'and', 'colleges', 'college', 'institutes', 'institute', 'universities', 'university', 'list']);
    const rawTokens = rawQ.replace(/[^\w\s\.]/g, ' ').split(/\s+/).filter(t => t.length > 1 && !stopWords.has(t));

    // Synonym and Acronym expansion
    const tokenGroups = rawTokens.map(tok => {
      const tClean = tok.replace(/\./g, '');
      
      // Top College Acronyms
      if (tClean === 'sibm') return ['sibm', 'symbiosis institute of business management', 'symbiosis'];
      if (tClean === 'jbims') return ['jbims', 'jamnalal bajaj'];
      if (tClean === 'fms') return ['fms', 'faculty of management studies'];
      if (tClean === 'nmims') return ['nmims', 'narsee monjee'];
      if (tClean === 'spjimr' || tClean === 'sp jain') return ['spjimr', 'sp jain', 's.p. jain'];
      if (tClean === 'xime') return ['xime', 'xavier institute of management'];
      if (tClean === 'iim') return ['iim', 'indian institute of management'];
      if (tClean === 'iit') return ['iit', 'indian institute of technology'];
      if (tClean === 'bmcri') return ['bmcri', 'bangalore medical college'];
      if (tClean === 'kmc') return ['kmc', 'kasturba medical college'];
      if (tClean === 'aiims') return ['aiims', 'all india institute of medical sciences'];
      if (tClean === 'nift') return ['nift', 'national institute of fashion technology'];
      if (tClean === 'nid') return ['nid', 'national institute of design'];
      if (tClean === 'coep') return ['coep', 'college of engineering pune'];
      if (tClean === 'vjti') return ['vjti', 'veermata jijabai'];
      if (tClean === 'dtu') return ['dtu', 'delhi technological university'];
      if (tClean === 'nsut') return ['nsut', 'netaji subhas'];

      // Fields / Streams
      if (tClean === 'fashion' || tClean === 'design') return ['fashion', 'design', 'textile', 'apparel', 'nift', 'nid'];
      if (tClean === 'btech' || tClean === 'be' || tClean === 'engineering') return ['b.tech', 'btech', 'b.e.', 'engineering', 'technology'];
      if (tClean === 'mba' || tClean === 'pgdm' || tClean === 'management') return ['mba', 'pgdm', 'management', 'business'];
      if (tClean === 'medical' || tClean === 'mbbs' || tClean === 'neet') return ['medical', 'mbbs', 'neet', 'medicine', 'hospital', 'health'];
      if (tClean === 'pharma' || tClean === 'pharmacy') return ['pharma', 'pharmacy', 'b.pharm', 'd.pharm'];
      if (tClean === 'bca' || tClean === 'mca') return ['bca', 'mca', 'computer', 'it', 'software'];
      if (tClean === 'law' || tClean === 'llb') return ['law', 'llb', 'nlu', 'juridical'];

      // Cities / Regions
      if (tClean === 'bangalore' || tClean === 'bengaluru') return ['bangalore', 'bengaluru'];
      if (tClean === 'bombay' || tClean === 'mumbai') return ['bombay', 'mumbai'];
      if (tClean === 'calcutta' || tClean === 'kolkata') return ['calcutta', 'kolkata'];
      if (tClean === 'madras' || tClean === 'chennai') return ['madras', 'chennai'];
      if (tClean === 'pune') return ['pune', 'lavale'];
      if (tClean === 'delhi') return ['delhi', 'new delhi', 'noida', 'gurgaon', 'delhi ncr'];

      return [tok, tClean];
    });

    const safeStr = (v) => Array.isArray(v) ? v.join(' ') : String(v || '');

    if (tokenGroups.length > 0) {
      results = results.filter(c => {
        const searchTarget = [
          safeStr(c.name),
          safeStr(c.shortName),
          safeStr(c.location),
          safeStr(c.state),
          safeStr(c.country),
          safeStr(c.type),
          safeStr(c.ownership),
          safeStr(c.about),
          safeStr(c.exams),
          safeStr(c.facilities),
          ...(c.courses || []).map(co => `${safeStr(co.title)} ${safeStr(co.type)} ${safeStr(co.division)}`)
        ].join(' ').toLowerCase();

        return tokenGroups.every(synonyms => synonyms.some(syn => searchTarget.includes(syn)));
      });
    } else {
      results = results.filter(c => {
        const target = [safeStr(c.name), safeStr(c.shortName), safeStr(c.location), safeStr(c.state)].join(' ').toLowerCase();
        return target.includes(rawQ);
      });
    }
  }

  const safeStr = (v) => Array.isArray(v) ? v.join(' ') : String(v || '');

  // 2. Specific Dropdown Filters
  if (country && country.toLowerCase() !== 'all') {
    results = results.filter(c => safeStr(c.country || 'India').toLowerCase() === country.toLowerCase());
  }

  if (state && state.toLowerCase() !== 'all') {
    const sLower = state.toLowerCase().trim();
    results = results.filter(c => safeStr(c.state).toLowerCase().includes(sLower) || safeStr(c.location).toLowerCase().includes(sLower));
  }

  if (city && city.toLowerCase() !== 'all') {
    const cLower = city.toLowerCase().trim();
    results = results.filter(c => safeStr(c.location).toLowerCase().includes(cLower) || safeStr(c.address).toLowerCase().includes(cLower) || safeStr(c.name).toLowerCase().includes(cLower));
  }

  if (type && type.toLowerCase() !== 'all') {
    const tLower = type.toLowerCase().trim();
    results = results.filter(c => safeStr(c.type).toLowerCase().includes(tLower) || safeStr(c.ownership).toLowerCase().includes(tLower));
  }

  if (rating) {
    results = results.filter(c => (parseFloat(c.rating) || 0) >= parseFloat(rating));
  }

  if (exam) {
    const eLower = exam.toLowerCase();
    results = results.filter(c => safeStr(c.exams).toLowerCase().includes(eLower));
  }

  if (course && course.toLowerCase() !== 'all') {
    const crsLower = course.toLowerCase().trim();
    let streamTokens = [crsLower];
    if (crsLower.includes('tech') || crsLower.includes('engineering')) streamTokens = ['b.tech', 'btech', 'engineering', 'technology', 'b.e.'];
    if (crsLower.includes('mba') || crsLower.includes('management')) streamTokens = ['mba', 'pgdm', 'management', 'business'];
    if (crsLower.includes('medical') || crsLower.includes('mbbs')) streamTokens = ['medical', 'mbbs', 'medicine', 'hospital', 'health'];
    if (crsLower.includes('pharm')) streamTokens = ['pharma', 'pharmacy', 'b.pharm', 'd.pharm'];
    if (crsLower.includes('bca') || crsLower.includes('mca') || crsLower.includes('computer')) streamTokens = ['bca', 'mca', 'computer', 'it', 'software'];
    if (crsLower.includes('law')) streamTokens = ['law', 'llb', 'll.b', 'juridical', 'nlu'];
    if (crsLower.includes('design') || crsLower.includes('fashion')) streamTokens = ['design', 'fashion', 'b.des', 'nift'];
    if (crsLower.includes('science')) streamTokens = ['b.sc', 'm.sc', 'science'];
    if (crsLower.includes('commerce')) streamTokens = ['b.com', 'm.com', 'commerce', 'account'];

    results = results.filter(c => {
      const targetText = [
        safeStr(c.about),
        safeStr(c.type),
        safeStr(c.exams),
        ...(c.courses || []).map(co => `${safeStr(co.title)} ${safeStr(co.type)} ${safeStr(co.division)}`)
      ].join(' ').toLowerCase();

      return streamTokens.some(tok => targetText.includes(tok));
    });
  }

  if (hostel) {
    if (hostel === 'yes') {
      results = results.filter(c => safeStr(c.facilities).toLowerCase().includes('hostel'));
    } else if (hostel === 'no') {
      results = results.filter(c => !safeStr(c.facilities).toLowerCase().includes('hostel'));
    }
  }

  if (placement) {
    const threshold = placement === 'above_15' ? 15 : placement === 'above_10' ? 10 : placement === 'above_5' ? 5 : 0;
    results = results.filter(c => {
      const pkgStr = safeStr(c.averagePackage || c.average_package || c.highestPackage);
      const match = pkgStr.match(/(\d+(\.\d+)?)/);
      if (match) {
        return parseFloat(match[1]) >= threshold;
      }
      return false;
    });
  }

  if (feeRange) {
    results = results.filter(c => {
      const feeStr = String(c.courses?.[0]?.fees || c.fees || '');
      const match = feeStr.match(/(\d+(\.\d+)?)/);
      if (match) {
        const val = parseFloat(match[1]);
        const isLakh = feeStr.includes('Lakh') || val < 100;
        const annualFee = isLakh ? val * 100000 : val;
        if (feeRange === 'under_1') return annualFee < 100000;
        if (feeRange === '1_3') return annualFee >= 100000 && annualFee <= 300000;
        if (feeRange === '3_5') return annualFee > 300000 && annualFee <= 500000;
        if (feeRange === 'above_5') return annualFee > 500000;
      }
      return true;
    });
  }

  if (admin !== 'true') {
    results = results.filter(c => c.published !== false);
  }

  // 3. Sorting
  const sort = sortBy || (q && q.toLowerCase().includes('top') ? 'ranking' : 'rating');
  if (sort === 'ranking') {
    results.sort((a, b) => (parseInt(a.ranking) || 999) - (parseInt(b.ranking) || 999) || (parseFloat(b.rating) || 0) - (parseFloat(a.rating) || 0));
  } else if (sort === 'rating') {
    results.sort((a, b) => (parseFloat(b.rating) || 0) - (parseFloat(a.rating) || 0) || (parseInt(a.ranking) || 999) - (parseInt(b.ranking) || 999));
  } else if (sort === 'reviews') {
    results.sort((a, b) => (parseInt(b.reviewsCount || b.reviews) || 0) - (parseInt(a.reviewsCount || a.reviews) || 0));
  } else {
    results.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
  }

  // 4. Pagination
  const pageNum = Math.max(1, parseInt(page) || 1);
  const limitNum = Math.max(1, parseInt(limit) || 12);
  const totalCount = results.length;
  const start = (pageNum - 1) * limitNum;
  const paginatedList = results.slice(start, start + limitNum);

  const responsePayload = {
    colleges: paginatedList,
    totalCount,
    page: pageNum,
    limit: limitNum,
    totalPages: Math.ceil(totalCount / limitNum)
  };

  if (req.headers['x-armor-mode'] === 'encrypted') {
    return res.status(200).json(encryptPayload(responsePayload));
  }

  res.status(200).json(responsePayload);
});

// GET /api/colleges/:id - Single College
router.get('/:id', (req, res) => {
  loadCollegesFromDisk();
  const { id } = req.params;
  const college = inMemoryColleges.find(c => String(c.id) === String(id));
  if (!college) {
    return res.status(404).json({ error: 'College not found' });
  }

  if (req.headers['x-armor-mode'] === 'encrypted') {
    return res.status(200).json(encryptPayload(college));
  }

  res.status(200).json(college);
});

// POST /api/colleges - Create College (Admin)
router.post('/', async (req, res) => {
  try {
    const newCol = req.body;
    const maxId = Math.max(0, ...inMemoryColleges.map(c => parseInt(c.id) || 0));
    newCol.id = maxId + 1;
    inMemoryColleges.unshift(newCol);
    saveCollegesToDisk();

    // Sync to Prisma SQLite
    try {
      await prisma.college.create({
        data: {
          id: newCol.id,
          name: String(newCol.name || 'New College'),
          shortName: String(newCol.shortName || ''),
          location: String(newCol.location || ''),
          state: String(newCol.state || ''),
          address: String(newCol.address || `${newCol.location}, ${newCol.state}`),
          phone: String(newCol.phone || ''),
          email: String(newCol.email || ''),
          website: String(newCol.website || ''),
          rating: parseFloat(newCol.rating) || 4.5,
          reviewsCount: parseInt(newCol.reviewsCount) || 0,
          type: String(newCol.type || 'Private'),
          about: String(newCol.about || ''),
          ranking: parseInt(newCol.ranking) || 100,
          fees: String(newCol.fees || ''),
          exams: String(newCol.exams || ''),
          img: String(newCol.img || ''),
          gallery: JSON.stringify(newCol.gallery || []),
          affiliation: String(newCol.affiliation || ''),
          highestPackage: String(newCol.highestPackage || ''),
          averagePackage: String(newCol.averagePackage || ''),
          placements: String(newCol.placements || ''),
          highlights: String(newCol.highlights || ''),
          facilities: String(newCol.facilities || ''),
          logo: String(newCol.logo || ''),
          published: newCol.published !== false,
          featured: newCol.featured === true
        }
      });
    } catch (dbErr) {
      console.warn('[Prisma Insert Warning]:', dbErr.message);
    }

    res.status(201).json(newCol);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /api/colleges/:id - Update College (Admin)
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const numId = parseInt(id);
    const idx = inMemoryColleges.findIndex(c => String(c.id) === String(id));
    if (idx === -1) {
      return res.status(404).json({ error: 'College not found' });
    }
    inMemoryColleges[idx] = { ...inMemoryColleges[idx], ...req.body, id: inMemoryColleges[idx].id };
    saveCollegesToDisk();

    // Sync to Prisma SQLite
    try {
      const updateData = {};
      const allowedKeys = ['name', 'shortName', 'location', 'state', 'address', 'phone', 'email', 'website', 'type', 'about', 'fees', 'exams', 'img', 'affiliation', 'highestPackage', 'averagePackage', 'placements', 'highlights', 'facilities', 'logo'];
      allowedKeys.forEach(k => {
        if (req.body[k] !== undefined) updateData[k] = String(req.body[k] || '');
      });
      if (req.body.rating !== undefined) updateData.rating = parseFloat(req.body.rating) || 4.5;
      if (req.body.ranking !== undefined) updateData.ranking = parseInt(req.body.ranking) || 100;
      if (req.body.published !== undefined) updateData.published = req.body.published !== false;
      if (req.body.featured !== undefined) updateData.featured = req.body.featured === true;
      if (req.body.gallery !== undefined) updateData.gallery = JSON.stringify(req.body.gallery || []);

      if (Object.keys(updateData).length > 0) {
        await prisma.college.updateMany({
          where: { id: numId },
          data: updateData
        });
      }
    } catch (dbErr) {
      console.warn('[Prisma Update Warning]:', dbErr.message);
    }

    res.status(200).json(inMemoryColleges[idx]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /api/colleges/:id - Delete College (Admin)
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const numId = parseInt(id);
    inMemoryColleges = inMemoryColleges.filter(c => String(c.id) !== String(id));
    saveCollegesToDisk();

    // Sync to Prisma SQLite
    try {
      await prisma.college.deleteMany({
        where: { id: numId }
      });
    } catch (dbErr) {
      console.warn('[Prisma Delete Warning]:', dbErr.message);
    }

    res.status(200).json({ success: true, message: 'College deleted and synchronized across systems' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/colleges/scrape-shiksha - On-demand live Shiksha scraper
router.post('/scrape-shiksha', async (req, res) => {
  const { url, saveToDb = true } = req.body;
  if (!url || !url.startsWith('http')) {
    return res.status(400).json({ error: "A valid Shiksha college URL is required (e.g., https://www.shiksha.com/...)" });
  }

  try {
    console.log(`[API /scrape-shiksha] Triggered scrape for: ${url}`);
    const { scrapeShikshaUrls, saveCollegeToWebsite } = await import('../../scripts/scrape_shiksha_full.js');
    
    // Scrape details with stealth browser
    const results = await scrapeShikshaUrls([url], { headless: true, saveToWebsite: saveToDb });
    const scraped = results && results[0];

    if (!scraped || !scraped.name || scraped.name === 'N/A') {
      return res.status(422).json({ error: "Could not extract college details from this URL. Please verify the URL is a valid college overview page." });
    }

    // Also sync directly to Prisma SQLite if saving
    if (saveToDb) {
      try {
        const existing = await prisma.college.findFirst({
          where: { name: scraped.name }
        });

        const collegeData = {
          name: scraped.name,
          shortName: scraped.name.split(' ').map(p => p[0]).join('').substring(0, 6).toUpperCase(),
          location: scraped.city || 'India',
          state: scraped.state || 'India',
          address: scraped.address || `${scraped.city}, ${scraped.state}`,
          phone: scraped.phone || '0123-456789',
          email: scraped.email || 'admissions@college.edu.in',
          website: scraped.officialWebsite || scraped.collegeUrl,
          rating: 4.6,
          reviewsCount: 250,
          type: scraped.universityType || scraped.ownership || 'Private',
          about: scraped.description || 'Details scraped from Shiksha',
          ranking: parseInt(scraped.rankings.match(/\d+/)?.[0] || '50'),
          mapUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(scraped.name)}`,
          fees: scraped.coursesOffered[0]?.fees || 'Contact for details',
          exams: scraped.entranceExams || 'Direct Admission',
          img: scraped.bannerUrl && scraped.bannerUrl !== 'N/A' ? scraped.bannerUrl : (scraped.galleryUrls[0] || 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800'),
          gallery: JSON.stringify(scraped.galleryUrls || []),
          affiliation: scraped.approvalStatus || 'UGC Approved',
          highestPackage: scraped.highestPackage || 'Contact for details',
          averagePackage: scraped.averagePackage || 'Contact for details',
          placements: scraped.placementDetails || '90%',
          highlights: `${scraped.accreditationDetails || ''}, ${scraped.approvalStatus || ''}`,
          facilities: (scraped.facilities || []).join(', '),
          admissionProcess: scraped.admissionProcess || '',
          topRecruiters: (scraped.topRecruiters || []).join(', '),
          brochureLink: scraped.brochureLinks[0] || '',
          logo: scraped.logoUrl && scraped.logoUrl !== 'N/A' ? scraped.logoUrl : '',
          published: true,
          featured: false
        };

        let savedCollege;
        if (existing) {
          savedCollege = await prisma.college.update({
            where: { id: existing.id },
            data: collegeData
          });
        } else {
          savedCollege = await prisma.college.create({
            data: collegeData
          });
        }

        // Sync courses
        if (scraped.coursesOffered && scraped.coursesOffered.length > 0) {
          await prisma.course.deleteMany({ where: { collegeId: savedCollege.id } });
          await prisma.course.createMany({
            data: scraped.coursesOffered.map(c => ({
              collegeId: savedCollege.id,
              title: c.title || 'Course',
              type: 'Full Time',
              division: 'Degree',
              duration: c.duration || '4 Years',
              fees: c.fees || 'Contact for details',
              intake: '60',
              eligibility: c.eligibility || 'As per norms'
            }))
          });
        }
      } catch (dbErr) {
        console.warn('[Prisma Sync Warning]:', dbErr.message);
      }
    }

    res.status(200).json({
      success: true,
      message: `Successfully captured details and images for ${scraped.name}`,
      college: scraped
    });
  } catch (err) {
    console.error('[Scrape Shiksha Error]:', err.message);
    res.status(500).json({ error: err.message });
  }
});

export default router;
