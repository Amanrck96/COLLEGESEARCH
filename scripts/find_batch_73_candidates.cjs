const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');
const progressPath = path.join(__dirname, '..', 'reports', 'verification', 'progress.json');

const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const progress = JSON.parse(fs.readFileSync(progressPath, 'utf8'));

const completedIds = new Set(progress.completed_ids.map(Number));

const candidates = [];
for (const col of siteData.colleges) {
  const cid = Number(col.id);
  if (!completedIds.has(cid)) {
    candidates.push({
      id: cid,
      name: col.name,
      state: col.state,
      type: col.type,
      image: col.image,
      website: col.website,
      phone: col.phone,
      rating: col.rating,
      coursesCount: Array.isArray(col.courses) ? col.courses.length : 0
    });
    if (candidates.length === 10) break;
  }
}

fs.writeFileSync(path.join(__dirname, '..', 'reports', 'verification', 'batch-73-candidates.json'), JSON.stringify(candidates, null, 2), 'utf8');
console.log(`Found ${candidates.length} candidates for Batch 73:`);
candidates.forEach(c => console.log(`[${c.id}] ${c.name} (${c.state}, ${c.type})`));
