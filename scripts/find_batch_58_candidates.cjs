const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const PROGRESS_PATH = path.join(BASE_DIR, 'reports', 'verification', 'progress.json');
const SITE_DATA_PATH = path.join(BASE_DIR, 'public', 'siteData.json');

const progress = JSON.parse(fs.readFileSync(PROGRESS_PATH, 'utf8'));
const verifiedIds = new Set(progress.completed_ids || []);

const siteData = JSON.parse(fs.readFileSync(SITE_DATA_PATH, 'utf8'));
const colleges = siteData.colleges || [];

const candidates = [];
for (const col of colleges) {
  if (!verifiedIds.has(col.id) && col.verified !== true) {
    candidates.push({
      id: col.id,
      name: col.name,
      city: col.city,
      state: col.state,
      type: col.type,
      image: col.image || col.img,
      website: col.website,
      phone: col.phone,
      email: col.email
    });
    if (candidates.length === 10) break;
  }
}

console.log('Batch 58 Candidates Found:', candidates.length);
fs.writeFileSync(
  path.join(BASE_DIR, 'reports', 'verification', 'batch-58-candidates.json'),
  JSON.stringify(candidates, null, 2)
);
console.log(JSON.stringify(candidates.map(c => ({ id: c.id, name: c.name, city: c.city, state: c.state })), null, 2));
