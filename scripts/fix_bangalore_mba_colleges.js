import { getExactRealCampusPhoto } from './bing_real_campus_extractor.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_SITE_DATA = path.join(__dirname, '../public/siteData.json');

const siteData = JSON.parse(fs.readFileSync(PUBLIC_SITE_DATA, 'utf8'));

const collegesToFix = [
  { name: 'Xavier Institute of Management and Entrepreneurship', location: 'Electronics City Bangalore' },
  { name: 'Jain Deemed-to-be University', location: 'Bangalore' },
  { name: 'Symbiosis Centre for Distance Learning', location: 'Bangalore' },
  { name: 'ICFAI University', location: 'Bangalore' },
  { name: 'MIT School of Distance Education', location: 'Bangalore' },
  { name: 'Indian Institute of Materials Management', location: 'Bangalore' },
  { name: 'East Point Group of Institutions', location: 'Bangalore' },
  { name: 'T John College', location: 'Bangalore' },
  { name: 'Vivekananda Institute of Management', location: 'Bangalore' },
  { name: 'SJES College of Management Studies', location: 'Bangalore' }
];

async function fixBangaloreColleges() {
  console.log('🔍 Fetching EXACT REAL CAMPUS BUILDINGS for Bangalore MBA Colleges...\n');

  for (const item of collegesToFix) {
    const col = siteData.colleges.find(c => (c.name || '').toLowerCase().includes(item.name.toLowerCase()));
    if (col) {
      console.log(`Searching real building for: "${col.name}"...`);
      const realPhoto = await getExactRealCampusPhoto(col.name, item.location);
      if (realPhoto) {
        col.img = realPhoto;
        col.gallery = [realPhoto];
        console.log(`✅ ATTACHED REAL BUILDING: ${realPhoto}`);
      } else {
        console.log(`❌ Photo search failed for: ${col.name}`);
      }
      console.log('----------------------------------------------------');
    }
  }

  fs.writeFileSync(PUBLIC_SITE_DATA, JSON.stringify(siteData), 'utf8');
  console.log('\n💾 Saved exact real buildings to public/siteData.json!');
}

fixBangaloreColleges().catch(console.error);
