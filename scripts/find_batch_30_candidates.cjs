const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const PROGRESS_PATH = path.join(BASE_DIR, 'reports', 'verification', 'progress.json');
const DURATION_ERRORS_CSV = path.join(BASE_DIR, 'reports', 'college-audit', 'course-duration-errors.csv');
const SITE_DATA_PATH = path.join(BASE_DIR, 'public', 'siteData.json');

const progress = JSON.parse(fs.readFileSync(PROGRESS_PATH, 'utf8'));
const completedIds = new Set(progress.completed_ids || []);
console.log(`Current completed verified IDs: ${completedIds.size}`);

const data = JSON.parse(fs.readFileSync(SITE_DATA_PATH, 'utf8'));
const colleges = Array.isArray(data.colleges) ? data.colleges : data;
const colMap = new Map();
colleges.forEach(c => colMap.set(c.id, c));

const lines = fs.readFileSync(DURATION_ERRORS_CSV, 'utf8').split('\n').filter(Boolean);

const candidates = [];
for (let i = 1; i < lines.length; i++) {
  const match = lines[i].match(/^"([^"]+)",/);
  if (!match) continue;
  const id = parseInt(match[1], 10);
  if (!completedIds.has(id) && !candidates.some(c => c.id === id)) {
    const col = colMap.get(id);
    if (col) {
      candidates.push({
        id,
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
      if (candidates.length >= 10) break;
    }
  }
}

console.log(`Found ${candidates.length} candidates for Batch 30:`);
candidates.forEach((c, idx) => {
  console.log(`${idx + 1}. [ID: ${c.id}] ${c.name} | State: ${c.state || 'N/A'} | Current img: ${c.img}`);
});

fs.writeFileSync(path.join(BASE_DIR, 'reports', 'verification', 'batch-30-candidates.json'), JSON.stringify(candidates, null, 2));

