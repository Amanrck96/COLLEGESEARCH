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
      city: col.city || '',
      type: col.type,
      image: col.image,
      website: col.website,
      phone: col.phone,
      rating: col.rating,
      coursesCount: Array.isArray(col.courses) ? col.courses.length : 0
    });
  }
  if (candidates.length === 10) break;
}

const outputPath = path.join(__dirname, '..', 'reports', 'verification', 'batch-83-candidates.json');
fs.writeFileSync(outputPath, JSON.stringify(candidates, null, 2), 'utf8');
console.log(`Found ${candidates.length} candidates for Batch 83. Saved to ${outputPath}`);
console.log(JSON.stringify(candidates.map(c => ({ id: c.id, name: c.name, state: c.state, type: c.type, website: c.website, phone: c.phone, image: c.image })), null, 2));
