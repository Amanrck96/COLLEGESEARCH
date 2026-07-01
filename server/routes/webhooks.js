import express from 'express';
import crypto from 'crypto';
import { PrismaClient } from '@prisma/client';
import path from 'path';
import { fileURLToPath } from 'url';

// Resolve dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();
const prisma = new PrismaClient();

// Helper to verify HMAC-SHA256 signature
function verifySignature(headers, body, secret) {
  const signature = headers['signature'] || headers['x-webscraper-signature'];
  if (!signature) {
    console.log('[Webhook Verification] Missing signature header');
    return false;
  }

  const { scrapingjob_id, status, sitemap_id, sitemap_name, custom_id } = body;
  if (!scrapingjob_id || !status || !sitemap_id || !sitemap_name) {
    console.log('[Webhook Verification] Missing required body fields for payload signature');
    return false;
  }

  // Construct payload signature exactly like webscraper.io
  let payloadParts = [
    `scrapingjob_id=${scrapingjob_id}`,
    `status=${status}`,
    `sitemap_id=${sitemap_id}`,
    `sitemap_name=${sitemap_name}`
  ];
  if (custom_id) {
    payloadParts.push(`custom_id=${custom_id}`);
  }
  const payload = payloadParts.join('&');

  const hmac = crypto.createHmac('sha256', secret);
  const computed = hmac.update(payload).digest('hex');

  const signatureBuffer = Buffer.from(signature, 'utf8');
  const computedBuffer = Buffer.from(computed, 'utf8');

  const match = signatureBuffer.length === computedBuffer.length && 
                crypto.timingSafeEqual(signatureBuffer, computedBuffer);

  if (!match) {
    console.log(`[Webhook Verification] Signature mismatch. Payload: "${payload}". Expected signature: "${computed}". Received: "${signature}"`);
  }
  return match;
}

// POST endpoint for Web Scraper Cloud notifications
router.post('/webscraper', async (req, res) => {
  const secret = process.env.WEBSCRAPER_NOTIFICATION_SECRET;
  const apiToken = process.env.WEBSCRAPER_API_TOKEN;

  console.log('[Webhook] Received notification body:', req.body);

  // 1. Verify Signature
  if (!verifySignature(req.headers, req.body, secret)) {
    return res.status(401).json({ error: 'Unauthorized. Invalid request signature.' });
  }

  const { scrapingjob_id, status, sitemap_name } = req.body;

  // Web Scraper expects a prompt 2XX response. We acknowledge receipt.
  res.status(200).json({ status: 'received', scrapingjob_id });

  // 2. Process finished scraping jobs asynchronously
  if (status === 'finished') {
    console.log(`[Webhook] Job ${scrapingjob_id} finished. Downloading data...`);
    try {
      let dataText;
      if (String(scrapingjob_id) === '9999') {
        console.log('[Webhook] Test Job ID 9999 detected. Using mock data...');
        dataText = `{"id": 9990, "college_name": "Test University of Engineering", "short_name": "TUE", "location": "Dehradun", "state": "Uttarakhand", "rating": 4.8, "reviews_count": 120, "type": "Private", "about": "A premier mock university for testing the webhook importer.", "ranking": 15, "average_package": "7.5 LPA", "highest_package": "24 LPA", "placements": "92%", "website": "https://www.testue.edu.in", "brochureLink": "http://www.testue.edu.in/brochure.pdf", "highlights": "NAAC A++ Accredited, Top Placements", "facilities": "Hostel, Gym, Smart Classrooms, Library", "admissionProcess": "Based on JEE Main score / direct admission", "topRecruiters": "Google, Microsoft, Infosys", "courses": [{"title": "B.Tech Computer Science", "type": "Full Time", "division": "Degree", "duration": "4 Years", "fees": "₹2.2 Lakhs/Year", "intake": "180", "eligibility": "10+2 with 60%"}, {"title": "M.Tech Software Engineering", "type": "Full Time", "division": "Degree", "duration": "2 Years", "fees": "₹1.5 Lakhs/Year", "intake": "30", "eligibility": "B.Tech/B.E."}]}\n{"id": 9991, "college_name": "National Institute of Management Mock", "short_name": "NIMM", "location": "Ahmedabad", "state": "Gujarat", "rating": 4.9, "reviews_count": 340, "type": "Government", "about": "Top level mock management institute.", "ranking": 5, "average_package": "19.5 LPA", "highest_package": "45 LPA", "placements": "100%", "website": "https://www.nimmock.edu.in", "brochureLink": "http://www.nimmock.edu.in/admission_brochure.pdf", "highlights": "Global Immersion, Excellent Placement", "facilities": "AC Rooms, Library, Swimming Pool, Labs", "admissionProcess": "Based on CAT scores and personal interview", "topRecruiters": "BCG, McKinsey, Goldman Sachs", "courses": [{"title": "MBA Finance", "type": "Full Time", "division": "Degree", "duration": "2 Years", "fees": "₹8 Lakhs/Year", "intake": "120", "eligibility": "Graduation with 50%"}, {"title": "Executive MBA", "type": "Part Time", "division": "Degree", "duration": "1 Year", "fees": "₹12 Lakhs/Year", "intake": "45", "eligibility": "3+ years work exp"}]}`;
      } else {
        const url = `https://api.webscraper.io/api/v1/scraping-job/${scrapingjob_id}/json?api_token=${apiToken}`;
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch scraping data: ${response.statusText}`);
        }

        dataText = await response.text();
      }
      const lines = dataText.split('\n').map(l => l.trim()).filter(l => l.length > 0);
      const records = lines.map(line => JSON.parse(line));
      
      console.log(`[Webhook] Successfully downloaded ${records.length} records. Syncing with database...`);

      // 3. Sync to Database
      for (const record of records) {
        // Dynamic mapping of fields with fallbacks
        const collegeName = (record.college_name || record.name || record.title || '').trim();
        if (!collegeName) continue;

        const location = (record.location || record.city || 'India').trim();
        const state = (record.state || 'India').trim();
        const address = (record.address || location).trim();
        const phone = (record.phone || record.phone_number || record.contact || '0123-456789').trim();
        const email = record.email ? String(record.email).trim() : null;
        const website = (record.website || record.website_url || record.official_website || 'http://www.college.edu').trim();
        
        let rating = 4.5;
        if (record.rating) {
          const parsed = parseFloat(String(record.rating).replace(/[^0-9.]/g, ''));
          if (!isNaN(parsed)) rating = parsed;
        }

        let reviewsCount = 0;
        if (record.reviews_count || record.reviews) {
          const parsed = parseInt(String(record.reviews_count || record.reviews).replace(/\D/g, ''));
          if (!isNaN(parsed)) reviewsCount = parsed;
        }

        const type = (record.type || record.category || 'Private').trim();
        const about = (record.about || record.overview || record.description || `Welcome to ${collegeName}, a premier institute located in ${location}.`).trim();
        
        let ranking = 100;
        if (record.ranking) {
          const parsed = parseInt(String(record.ranking).replace(/\D/g, ''));
          if (!isNaN(parsed)) ranking = parsed;
        }

        const facebook = record.facebook || '#';
        const instagram = record.instagram || '#';
        const linkedin = record.linkedin || '#';
        
        // Parse gallery and img
        let img = record.img || record.image || 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=400';
        let gallery = [];
        if (record.gallery) {
          if (Array.isArray(record.gallery)) {
            gallery = record.gallery;
          } else if (typeof record.gallery === 'string') {
            gallery = record.gallery.split(',').map(s => s.trim()).filter(s => s.startsWith('http'));
          }
        }
        if (gallery.length > 0 && !record.img) {
          img = gallery[0];
        }
        if (gallery.length === 0) {
          gallery = [img];
        }

        const highestPackage = (record.highest_package || record.highestPackage || 'Contact for details').trim();
        const averagePackage = (record.average_package || record.averagePackage || 'Contact for details').trim();
        const placements = (record.placements || record.placement_percentage || 'N/A').trim();
        const mapUrl = record.map_url || record.mapUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(collegeName + ' ' + location)}`;
        const exams = record.exams || record.entrance_exams || 'Direct Admission';

        // Extract newly requested fields
        const brochureLink = (record.brochureLink || record.brochure_link || record.brochure || '').trim();
        const highlights = (record.highlights || '').trim();
        const facilities = (record.facilities || '').trim();
        const admissionProcess = (record.admissionProcess || record.admission_process || record.admission || '').trim();
        const topRecruiters = (record.topRecruiters || record.top_recruiters || record.recruiters || '').trim();

        // Upsert College record
        const college = await prisma.college.upsert({
          where: { id: record.id ? parseInt(record.id) : undefined, name: collegeName },
          update: {
            shortName: record.short_name || record.shortName || collegeName.substring(0, 5).toUpperCase(),
            location,
            state,
            address,
            phone,
            email,
            website,
            rating,
            reviewsCount,
            type,
            about,
            ranking,
            facebook,
            instagram,
            linkedin,
            mapUrl,
            img,
            gallery: JSON.stringify(gallery),
            highestPackage,
            averagePackage,
            placements,
            exams,
            brochureLink,
            highlights,
            facilities,
            admissionProcess,
            topRecruiters
          },
          create: {
            name: collegeName,
            shortName: record.short_name || record.shortName || collegeName.substring(0, 5).toUpperCase(),
            location,
            state,
            address,
            phone,
            email,
            website,
            rating,
            reviewsCount,
            type,
            about,
            ranking,
            facebook,
            instagram,
            linkedin,
            mapUrl,
            img,
            gallery: JSON.stringify(gallery),
            highestPackage,
            averagePackage,
            placements,
            exams,
            brochureLink,
            highlights,
            facilities,
            admissionProcess,
            topRecruiters
          }
        });

        // 4. Parse & Sync Courses
        let courses = [];
        if (record.courses) {
          if (Array.isArray(record.courses)) {
            courses = record.courses.map(c => ({
              title: c.title || c.name || 'Course',
              type: c.type || 'Full Time',
              division: c.division || 'Degree',
              duration: c.duration || '4 Years',
              fees: c.fees || 'Contact for details',
              intake: c.intake || 'N/A',
              eligibility: c.eligibility || 'As per norms'
            }));
          } else if (typeof record.courses === 'string') {
            courses = record.courses.split(',').map(title => ({
              title: title.trim(),
              type: 'Full Time',
              division: 'Degree',
              duration: '4 Years',
              fees: 'Contact for details',
              intake: 'N/A',
              eligibility: 'As per norms'
            }));
          }
        } else {
          // Dynamic backup parsing if there are flat course fields in the CSV/JSON row
          // e.g. course_name_1, course_fee_1, etc.
          for (let k = 1; k <= 15; k++) {
            const courseTitle = record[`Course Name ${k}`] || record[`course_name_${k}`];
            if (courseTitle) {
              courses.push({
                title: String(courseTitle).trim(),
                type: record[`Course Type ${k}`] || record[`course_type_${k}`] || 'Full Time',
                division: record[`Division ${k}`] || record[`course_division_${k}`] || 'Degree',
                duration: record[`Duration ${k}`] || record[`course_duration_${k}`] || '4 Years',
                fees: record[`Fees Course Name ${k}`] || record[`course_fees_${k}`] || 'Contact for details',
                intake: record[`Intake ${k}`] || record[`course_intake_${k}`] || 'N/A',
                eligibility: record[`Eligibility ${k}`] || record[`course_eligibility_${k}`] || 'As per norms'
              });
            }
          }
        }

        // If courses found, recreate them for this college
        if (courses.length > 0) {
          await prisma.course.deleteMany({ where: { collegeId: college.id } });
          await prisma.course.createMany({
            data: courses.map(c => ({
              collegeId: college.id,
              title: c.title,
              type: c.type,
              division: c.division,
              duration: c.duration,
              fees: c.fees,
              intake: c.intake,
              eligibility: c.eligibility
            }))
          });
        }
      }

      console.log(`[Webhook] Successfully processed and updated database for sitemap "${sitemap_name}".`);

      // 5. Trigger auto Excel export if the exporter script is present
      try {
        const { exportToExcel } = await import('../scripts/export_db_excel.js');
        await exportToExcel();
      } catch (err) {
        console.error('[Webhook] Auto Excel export failed or exporter not found:', err.message);
      }

    } catch (err) {
      console.error(`[Webhook Error] Processing job ${scrapingjob_id} failed:`, err.message);
    }
  }
});

export default router;
