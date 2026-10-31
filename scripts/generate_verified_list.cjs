const fs = require('fs');
const path = require('path');

const SITE_DATA_PATH = path.join(__dirname, '..', 'public', 'siteData.json');
const PROGRESS_PATH = path.join(__dirname, '..', 'reports', 'verification', 'progress.json');

const progress = JSON.parse(fs.readFileSync(PROGRESS_PATH, 'utf8'));
const data = JSON.parse(fs.readFileSync(SITE_DATA_PATH, 'utf8'));
const colleges = Array.isArray(data.colleges) ? data.colleges : data;

const collegeMap = new Map();
colleges.forEach(c => collegeMap.set(c.id, c));

console.log(`Total verified IDs in progress.json: ${progress.completed_ids.length}`);

const totalBatches = Math.ceil(progress.completed_ids.length / 10);
const summary = [];

for (let b = 0; b < totalBatches; b++) {
  const batchNum = b + 1;
  const batchIds = progress.completed_ids.slice(b * 10, (b + 1) * 10);

  const items = batchIds.map(id => {
    const col = collegeMap.get(id);
    if (!col) return { id, name: 'Unknown' };
    return {
      id: col.id,
      name: col.name,
      type: col.type,
      location: col.address ? col.address.split(',').slice(-2).join(',').trim() : '',
      website: col.website
    };
  });

  summary.push({ batch: batchNum, items });
}

fs.writeFileSync(path.join(__dirname, '..', 'reports', 'verification', 'all_verified_colleges.json'), JSON.stringify(summary, null, 2), 'utf8');
console.log(`Saved all_verified_colleges.json with ${totalBatches} batches.`);
