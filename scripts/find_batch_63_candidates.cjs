const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');
const progressPath = path.join(__dirname, '..', 'reports', 'verification', 'progress.json');

const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const progress = JSON.parse(fs.readFileSync(progressPath, 'utf8'));

const completedIds = new Set(progress.completed_ids.map(Number));

console.log(`Total completed IDs so far: ${completedIds.size}`);

const candidates = [];

for (const college of siteData.colleges) {
  const cid = Number(college.id);
  if (!completedIds.has(cid)) {
    candidates.push({
      id: cid,
      name: college.name,
      city: college.city,
      state: college.state,
      type: college.type,
      image: college.image,
      website: college.website,
      phone: college.phone,
      rating: college.rating,
      established: college.established,
      coursesCount: (college.courses || []).length
    });
    if (candidates.length >= 10) break;
  }
}

console.log('Batch 63 Candidates (Next 10):');
console.log(JSON.stringify(candidates, null, 2));

fs.writeFileSync(
  path.join(__dirname, '..', 'reports', 'verification', 'batch-63-candidates.json'),
  JSON.stringify(candidates, null, 2)
);
