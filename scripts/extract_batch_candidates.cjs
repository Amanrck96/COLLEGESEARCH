const fs = require('fs');
const path = require('path');

const batchNum = process.argv[2] ? parseInt(process.argv[2], 10) : 128;
const count = process.argv[3] ? parseInt(process.argv[3], 10) : 10;

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');
const progressPath = path.join(__dirname, '..', 'reports', 'verification', 'progress.json');

const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const progress = JSON.parse(fs.readFileSync(progressPath, 'utf8'));
const completedSet = new Set(progress.completed_ids.map(Number));
const collegeList = Array.isArray(siteData) ? siteData : siteData.colleges;

const candidates = [];
for (const c of collegeList) {
  if (!completedSet.has(Number(c.id))) {
    candidates.push(c);
    if (candidates.length === count) break;
  }
}

console.log(`Extracted ${candidates.length} candidates for Batch ${batchNum}:`);
candidates.forEach((c, idx) => {
  console.log(`${idx + 1}. ID: ${c.id} | Name: ${c.name} | City: ${c.city} | State: ${c.state} | Type: ${c.type} | Web: ${c.website}`);
});

const outPath = path.join(__dirname, '..', 'reports', 'verification', `batch-${batchNum}-candidates.json`);
fs.writeFileSync(outPath, JSON.stringify(candidates, null, 2), 'utf8');
console.log(`Saved candidates to ${outPath}`);
