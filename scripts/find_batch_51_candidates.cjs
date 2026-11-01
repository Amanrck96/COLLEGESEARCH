const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const PROGRESS_PATH = path.join(BASE_DIR, 'reports', 'verification', 'progress.json');
const SITE_DATA_PATH = path.join(BASE_DIR, 'public', 'siteData.json');
const OUTPUT_PATH = path.join(BASE_DIR, 'reports', 'verification', 'batch-51-candidates.json');

const progress = JSON.parse(fs.readFileSync(PROGRESS_PATH, 'utf8'));
const completedIds = new Set(progress.completed_ids || []);

const data = JSON.parse(fs.readFileSync(SITE_DATA_PATH, 'utf8'));
const colleges = Array.isArray(data.colleges) ? data.colleges : data;

const candidates = [];
for (const col of colleges) {
  if (candidates.length >= 10) break;
  if (!completedIds.has(col.id)) {
    candidates.push({
      id: col.id,
      name: col.name,
      address: col.address,
      city: col.city,
      state: col.state,
      img: col.img || col.image,
      website: col.website,
      type: col.type,
      ownership: col.ownership,
      courses: (col.courses || []).map(c => ({ name: c.name, title: c.title, duration: c.duration, fee: c.fee || c.fees }))
    });
  }
}

console.log(`Found ${candidates.length} candidates for Batch 51:`);
candidates.forEach((c, idx) => {
  console.log(`${idx + 1}. [ID: ${c.id}] ${c.name} | State: ${c.state || 'N/A'} | City: ${c.city || 'N/A'} | Current img: ${c.img}`);
});

fs.writeFileSync(OUTPUT_PATH, JSON.stringify(candidates, null, 2), 'utf8');

