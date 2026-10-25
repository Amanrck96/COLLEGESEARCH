import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getExactRealCampusPhoto } from './bing_real_campus_extractor.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_SITE_DATA = path.join(__dirname, '../public/siteData.json');
const MASTER_FILE = path.join(__dirname, 'siteData.master_all_38k.json');

const siteData = JSON.parse(fs.readFileSync(PUBLIC_SITE_DATA, 'utf8'));
const colleges = siteData.colleges || [];

console.log('===============================================================');
console.log('🔍 RUNNING LIVE HTTP 200 VERIFICATION ON ALL 3,671 COLLEGE IMAGES');
console.log('===============================================================\n');

async function isLiveUrl(url) {
  if (!url || typeof url !== 'string' || !url.startsWith('http')) return false;
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);
    const res = await fetch(url, {
      method: 'HEAD',
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
      }
    });
    clearTimeout(timeout);
    return res.status >= 200 && res.status < 400;
  } catch (e) {
    return false;
  }
}

async function fixBrokenImages() {
  let brokenCount = 0;
  let fixedCount = 0;

  for (let i = 0; i < colleges.length; i++) {
    const col = colleges[i];
    const isGood = await isLiveUrl(col.img);

    if (!isGood) {
      brokenCount++;
      console.log(`[${i+1}/${colleges.length}] ❌ Broken / 404 Image for: "${col.name}" (${col.location || col.state})`);
      
      // Fetch fresh live real campus building
      const freshPhoto = await getExactRealCampusPhoto(col.name, col.location);
      if (freshPhoto) {
        col.img = freshPhoto;
        col.gallery = [freshPhoto];
        fixedCount++;
        console.log(`   ✅ REPLACED WITH LIVE REAL BUILDING: ${freshPhoto}`);
      }

      // Save every 20 fixes
      if (brokenCount % 20 === 0) {
        fs.writeFileSync(PUBLIC_SITE_DATA, JSON.stringify(siteData), 'utf8');
        if (fs.existsSync(MASTER_FILE)) {
          fs.writeFileSync(MASTER_FILE, JSON.stringify(siteData), 'utf8');
        }
        console.log(`💾 Saved progress to disk.`);
      }
    }
  }

  // Final Save
  fs.writeFileSync(PUBLIC_SITE_DATA, JSON.stringify(siteData), 'utf8');
  if (fs.existsSync(MASTER_FILE)) {
    fs.writeFileSync(MASTER_FILE, JSON.stringify(siteData), 'utf8');
  }

  console.log(`\n🎉 HTTP 200 Image Verification Finished!`);
  console.log(`   - Broken 404 Images Found: ${brokenCount}`);
  console.log(`   - Successfully Repaired with Live Photos: ${fixedCount}`);
}

fixBrokenImages().catch(console.error);
