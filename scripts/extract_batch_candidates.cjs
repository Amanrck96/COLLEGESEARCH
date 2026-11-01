const fs = require('fs');

const progress = JSON.parse(fs.readFileSync('reports/verification/progress.json', 'utf8'));
const completedSet = new Set(progress.completed_ids);
const data = JSON.parse(fs.readFileSync('public/siteData.json', 'utf8'));
const colleges = Array.isArray(data) ? data : data.colleges;
const unverified = colleges.filter(c => !completedSet.has(c.id));

console.log('Total unverified:', unverified.length);
console.log('Current verified count:', progress.completed_ids.length);

const next10 = unverified.slice(0, 10);
console.log('\nNext 10 candidates (Batch ' + (progress.current_batch + 1) + '):');
next10.forEach((c, idx) => {
  console.log(`${idx + 1}. ID: ${c.id} | ${c.name} | City: ${c.city || 'N/A'}, State: ${c.state || 'N/A'} | Type: ${c.type} | Web: ${c.website} | Phone: ${c.phone}`);
});

fs.writeFileSync(`reports/verification/batch-${progress.current_batch + 1}-candidates.json`, JSON.stringify(next10, null, 2));
console.log(`\nSaved candidates to reports/verification/batch-${progress.current_batch + 1}-candidates.json`);

