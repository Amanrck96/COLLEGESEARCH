const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');
const rawData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const colleges = Array.isArray(rawData) ? rawData : rawData.colleges;

function getCampusRootKey(name = '', location = '', state = '') {
  let clean = name.toLowerCase()
    .replace(/\(.*?\)/g, ' ')
    .replace(/\[.*?\]/g, ' ')
    .replace(/\b(college of engineering and technology|college of engineering|institute of technology|institute of engineering|institute of management studies|institute of management|business school|polytechnic college|polytechnic|college of pharmacy|institute of pharmacy|college of nursing|medical college|degree college|arts and science college|first grade college|autonomous|admissions|course 2027|course 2026|campus)\b/gi, ' ')
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  const loc = (location || '').toLowerCase().replace(/[^\w\s]/g, '').trim();
  const st = (state || '').toLowerCase().replace(/[^\w\s]/g, '').trim();

  const tokens = clean.split(' ').filter(t => t.length > 2 && !['and', 'the', 'for', 'all', 'india', 'govt', 'government', 'shri', 'sri'].includes(t));
  const rootName = tokens.slice(0, 3).join(' ') || clean;

  return `${rootName}___${loc || st}`;
}

const clusters = new Map();
for (const c of colleges) {
  const rootKey = getCampusRootKey(c.name, c.location, c.state);
  if (!clusters.has(rootKey)) {
    clusters.set(rootKey, []);
  }
  clusters.get(rootKey).push(c);
}

let multiCollegesClusters = 0;
let mismatchedClusters = 0;
const mismatchedSamples = [];

for (const [key, list] of clusters.entries()) {
  if (list.length > 1) {
    multiCollegesClusters++;
    const firstImg = list[0].img || list[0].image;
    const hasMismatch = list.some(c => (c.img || c.image) !== firstImg);
    if (hasMismatch) {
      mismatchedClusters++;
      mismatchedSamples.push({
        clusterKey: key,
        colleges: list.map(c => ({ id: c.id, name: c.name, img: c.img || c.image }))
      });
    }
  }
}

console.log('\n================ SIBLING CLUSTER VERIFICATION ================');
console.log(`Total Sibling Clusters with 2+ Colleges: ${multiCollegesClusters}`);
console.log(`Mismatched Sibling Clusters: ${mismatchedClusters}`);
console.log('===============================================================\n');

if (mismatchedClusters === 0) {
  console.log('✅ ALL SIBLING CLUSTERS ARE 100% SYNCHRONIZED AND COHESIVE!');
} else {
  console.log('❌ Sample mismatched clusters:', JSON.stringify(mismatchedSamples.slice(0, 3), null, 2));
}
