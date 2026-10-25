import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const prisma = new PrismaClient();

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const colleges = siteData.colleges || [];

async function syncToSqlite() {
  console.log(`Starting synchronization of ${colleges.length} colleges to Prisma SQLite database...`);

  await prisma.review.deleteMany();
  await prisma.bookmark.deleteMany();
  await prisma.course.deleteMany();
  await prisma.college.deleteMany();

  console.log('Cleared existing partial college tables.');

  const seenIds = new Set();
  const safeColleges = [];
  let nextId = 1;

  for (const c of colleges) {
    let cleanId = parseInt(c.id);
    if (!cleanId || isNaN(cleanId) || seenIds.has(cleanId)) {
      while (seenIds.has(nextId)) nextId++;
      cleanId = nextId;
    }
    seenIds.add(cleanId);
    nextId = Math.max(nextId, cleanId + 1);

    safeColleges.push({
      id: cleanId,
      name: String(c.name || 'Unknown College'),
      shortName: String(c.shortName || (c.name ? c.name.substring(0, 8) : 'COLLEGE')),
      location: String(c.location || 'India'),
      state: String(c.state || 'India'),
      address: String(c.address || `${c.location || ''}, ${c.state || ''}`),
      phone: String(c.phone || '+91 11-2659-7135'),
      email: String(c.email || 'admissions@college.edu.in'),
      website: String(c.website || 'https://www.college.edu.in'),
      rating: parseFloat(c.rating) || 4.5,
      reviewsCount: parseInt(c.reviewsCount || c.reviews) || 0,
      type: String(c.type || 'Private'),
      about: String(c.about || 'Comprehensive institution details.'),
      ranking: parseInt(c.ranking) || 100,
      facebook: String(c.facebook || '#'),
      instagram: String(c.instagram || '#'),
      linkedin: String(c.linkedin || '#'),
      mapUrl: String(c.mapUrl || `https://maps.google.com/?q=${encodeURIComponent(c.name || 'college')}`),
      fees: String(c.fees || 'Contact for details'),
      exams: String(c.exams || 'Direct Admission'),
      img: String(c.img || 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=600'),
      gallery: typeof c.gallery === 'string' ? c.gallery : JSON.stringify(c.gallery || []),
      affiliation: String(c.affiliation || ''),
      highestPackage: String(c.highestPackage || 'Contact for details'),
      averagePackage: String(c.averagePackage || c.average_package || 'Contact for details'),
      placements: String(c.placements || 'N/A'),
      highlights: typeof c.highlights === 'string' ? c.highlights : JSON.stringify(c.highlights || []),
      facilities: Array.isArray(c.facilities) ? c.facilities.join(', ') : String(c.facilities || ''),
      admissionProcess: String(c.admissionProcess || ''),
      topRecruiters: Array.isArray(c.topRecruiters) ? c.topRecruiters.join(', ') : String(c.topRecruiters || ''),
      brochureLink: String(c.brochureLink || ''),
      logo: String(c.logo || ''),
      published: c.published !== false,
      featured: c.featured === true
    });
  }

  const batchSize = 1000;
  let inserted = 0;

  for (let i = 0; i < safeColleges.length; i += batchSize) {
    const batch = safeColleges.slice(i, i + batchSize);
    await prisma.college.createMany({
      data: batch
    });
    inserted += batch.length;
    console.log(`Synced ${inserted} / ${safeColleges.length} colleges into SQLite...`);
  }

  const finalCount = await prisma.college.count();
  console.log(`\n✅ SYNCHRONIZATION COMPLETE: SQLite Prisma database now contains ${finalCount} colleges!`);
  await prisma.$disconnect();
}

syncToSqlite().catch(async (err) => {
  console.error('Sync failed:', err);
  await prisma.$disconnect();
  process.exit(1);
});
