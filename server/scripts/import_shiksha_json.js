import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { exportToExcel } from './export_db_excel.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const prisma = new PrismaClient();

// Clean college name from formats like "Course at College Name"
function cleanCollegeName(rawName) {
  let name = rawName.trim();
  if (name.includes('at')) {
    const parts = name.split('at');
    name = parts[parts.length - 1].trim();
  }
  // Remove trailing city or location if duplicated, e.g. "College Name, Delhi, Rohini"
  return name;
}

// Filter out long script tags or irrelevant texts from recruiter lists
function cleanRecruiters(recruitersArr) {
  if (!Array.isArray(recruitersArr)) return '';
  const filtered = recruitersArr.map(r => String(r).trim()).filter(r => {
    return r.length > 0 && 
           r.length < 100 && 
           !r.includes('window.') && 
           !r.includes('function') && 
           !r.includes('{') &&
           !r.toLowerCase().includes('placed');
  });
  return filtered.join(', ');
}

async function importShikshaData() {
  console.log('--------------------------------------------------');
  console.log('🚀 IMPORTING SCRAPED SHIKSHA.COM JSON DATA');
  console.log('--------------------------------------------------');

  const jsonPath = 'C:\\Users\\amanr\\shiksha_batch_20260613\\colleges_data.json';

  if (!fs.existsSync(jsonPath)) {
    console.error(`❌ Scraped JSON file not found at: ${jsonPath}`);
    return;
  }

  try {
    const rawData = fs.readFileSync(jsonPath, 'utf8');
    const records = JSON.parse(rawData);

    console.log(`[Importer] Found ${records.length} colleges in JSON. Upserting into SQLite database...`);

    for (const record of records) {
      const name = cleanCollegeName(record.college_name || record.name || 'Unknown College');
      if (!name) continue;

      const location = (record.location?.city || 'India').trim();
      const state = (record.location?.state || 'India').trim();
      const address = (record.contact_details?.address || record.location?.full_address || `${location}, ${state}`).trim();
      const phone = (record.contact_details?.phone || '0123-456789').trim();
      
      // Clean email
      let email = (record.contact_details?.email || '').trim();
      if (email.toLowerCase().includes('email')) {
        email = email.substring(email.toLowerCase().indexOf('email') + 5).trim();
      }
      if (!email) email = null;

      const website = (record.contact_details?.website || 'https://www.shiksha.com').trim();
      
      let rating = 4.5;
      if (record.ratings?.placements) {
        const parsed = parseFloat(record.ratings.placements);
        if (!isNaN(parsed)) rating = parsed / 20; // convert 100 max to 5.0 scale
      } else if (record.ratings?.overall) {
        const parsed = parseFloat(record.ratings.overall);
        if (!isNaN(parsed)) rating = parsed;
      }

      const type = (record.institute_type || 'Private').trim();
      const about = (record.seoData?.metaDescription || `Welcome to ${name}. We offer top-quality programs and placement opportunities.`).trim();
      const mapUrl = (record.contact_details?.map_url || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name + ' ' + location)}`).trim();

      const highestPackage = (record.placements?.highest_package || 'Contact for details').trim();
      const averagePackage = (record.placements?.average_package || 'Contact for details').trim();
      const topRecruiters = cleanRecruiters(record.placements?.top_recruiters);

      // Collect images
      let gallery = [];
      if (Array.isArray(record.images)) {
        gallery = record.images.map(img => img.original_url).filter(url => url && url.startsWith('http'));
      }
      let img = gallery[0] || 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=400';
      if (gallery.length === 0) {
        gallery = [img];
      }

      const brochureLink = (record.brochureLink || record.courses_widget?.allCourses?.[record.courses_widget?.flagshipCourseId]?.brochure_url || '').trim();
      const highlights = Array.isArray(record.highlights) ? record.highlights.map(h => h.description || h).join(', ') : '';
      const facilities = Array.isArray(record.facilities) ? record.facilities.join(', ') : '';
      const admissionProcess = (record.admission_criteria || '').trim();
      const shortName = name.split(/[,\s]+/).map(w => w[0]).join('').toUpperCase().substring(0, 5);

      console.log(`[Importer] Processing: ${name}`);

      const college = await prisma.college.upsert({
        where: { name: name },
        update: {
          shortName,
          location,
          state,
          address,
          phone,
          email,
          website,
          rating,
          type,
          about,
          mapUrl,
          img,
          gallery: JSON.stringify(gallery),
          highestPackage,
          averagePackage,
          topRecruiters,
          brochureLink,
          highlights,
          facilities,
          admissionProcess
        },
        create: {
          name,
          shortName,
          location,
          state,
          address,
          phone,
          email,
          website,
          rating,
          type,
          about,
          mapUrl,
          img,
          gallery: JSON.stringify(gallery),
          highestPackage,
          averagePackage,
          topRecruiters,
          brochureLink,
          highlights,
          facilities,
          admissionProcess
        }
      });

      // Import courses
      let courses = [];
      if (Array.isArray(record.courses)) {
        courses = record.courses.map(co => ({
          collegeId: college.id,
          title: co.name || 'Course',
          type: co.type || 'Full Time',
          division: co.division || 'Degree',
          duration: co.duration || '2 Years',
          fees: co.fees || 'Contact for details',
          intake: co.intake || 'N/A',
          eligibility: co.eligibility || 'As per norms'
        }));
      }

      if (courses.length > 0) {
        await prisma.course.deleteMany({ where: { collegeId: college.id } });
        await prisma.course.createMany({
          data: courses
        });
      }
    }

    console.log('[Importer] DB Sync complete. Restructuring Excel sheets...');
    await exportToExcel();

    console.log('--------------------------------------------------');
    console.log('✅ IMPORT AND EXPORT COMPLETED SUCCESSFULLY!');
    console.log('--------------------------------------------------');

  } catch (error) {
    console.error('❌ Import failed:', error.message);
  } finally {
    await prisma.$disconnect();
  }
}

importShikshaData();
