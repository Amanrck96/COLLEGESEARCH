import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SCRAPED_FILE = path.join(__dirname, 'scraped_colleges_raw.json');
const SITE_DATA_FILE = path.join(__dirname, '../public/siteData.json');

function cleanCollegeName(name, slugUrl) {
  let str = String(name || '');
  if (!str || str.toLowerCase().includes('404') || str.toLowerCase().includes('error')) {
    const slug = (slugUrl || '').split('/').pop().replace(/-\d+$/, '');
    return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  }
  let clean = str.split(':')[0].trim();
  clean = clean.split(' - ')[0].trim();
  return clean;
}

function syncData() {
  console.log('==================================================');
  console.log('🔄 Syncing Scraped Data to Website siteData.json...');
  console.log('==================================================');

  if (!fs.existsSync(SCRAPED_FILE)) {
    console.error(`Scraped file not found at: ${SCRAPED_FILE}`);
    return;
  }

  const scrapedColleges = JSON.parse(fs.readFileSync(SCRAPED_FILE, 'utf-8'));
  console.log(`📥 Loaded ${scrapedColleges.length} scraped colleges.`);

  let siteData = { colleges: [], exams: [] };
  if (fs.existsSync(SITE_DATA_FILE)) {
    try {
      siteData = JSON.parse(fs.readFileSync(SITE_DATA_FILE, 'utf-8'));
      console.log(`📁 Current siteData.json contains ${siteData.colleges?.length || 0} colleges.`);
    } catch (e) {
      console.warn('siteData.json parse error, initializing fresh structure.');
    }
  }

  if (!Array.isArray(siteData.colleges)) {
    siteData.colleges = [];
  }

  let maxId = 0;
  siteData.colleges.forEach(c => {
    const idNum = parseInt(c?.id);
    if (!isNaN(idNum) && idNum > maxId) {
      maxId = idNum;
    }
  });

  const existingNameMap = new Map();
  siteData.colleges.forEach((c, idx) => {
    if (c && c.name) {
      const n = String(c.name).toLowerCase().trim();
      if (n) existingNameMap.set(n, idx);
    }
  });

  let addedCount = 0;
  let updatedCount = 0;

  for (const rawItem of scrapedColleges) {
    const item = { ...rawItem };
    item.name = cleanCollegeName(item.name, item.shikshaUrl);

    if (item.name.toLowerCase().includes('404') || item.name.length < 3) {
      continue;
    }

    const normName = String(item.name).toLowerCase().trim();
    if (existingNameMap.has(normName)) {
      // Update existing record
      const existingIdx = existingNameMap.get(normName);
      siteData.colleges[existingIdx] = {
        ...siteData.colleges[existingIdx],
        ...item,
        id: siteData.colleges[existingIdx].id
      };
      updatedCount++;
    } else {
      // Insert new college at the beginning
      maxId++;
      const newCollege = {
        ...item,
        id: maxId
      };
      siteData.colleges.unshift(newCollege);
      existingNameMap.set(normName, siteData.colleges.length - 1);
      addedCount++;
    }
  }

  // Backup original siteData once
  const backupPath = path.join(__dirname, '../public/siteData.backup.json');
  if (fs.existsSync(SITE_DATA_FILE) && !fs.existsSync(backupPath)) {
    fs.copyFileSync(SITE_DATA_FILE, backupPath);
  }

  fs.writeFileSync(SITE_DATA_FILE, JSON.stringify(siteData, null, 2), 'utf-8');
  console.log(`\n✅ Sync Completed Successfully!`);
  console.log(`✨ Added: ${addedCount} new colleges`);
  console.log(`🔄 Updated: ${updatedCount} existing colleges`);
  console.log(`📊 Total Colleges on Site: ${siteData.colleges.length}`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  syncData();
}

export { syncData };
