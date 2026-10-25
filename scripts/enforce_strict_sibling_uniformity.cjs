const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');
const rawData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const colleges = Array.isArray(rawData) ? rawData : rawData.colleges;
const exams = rawData.exams || [];

console.log('🚀 Enforcing Strict Sibling Uniformity across 12,655 colleges...');

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

// Group into clusters
const clusters = new Map();
for (const c of colleges) {
  const rootKey = getCampusRootKey(c.name, c.location, c.state);
  if (!clusters.has(rootKey)) {
    clusters.set(rootKey, []);
  }
  clusters.get(rootKey).push(c);
}

let synchronizedClusters = 0;
let updatedCollegesCount = 0;

for (const [key, list] of clusters.entries()) {
  if (list.length > 1) {
    // Determine the premier photo for this cluster
    let bestPhoto = null;

    // Preference hierarchy
    for (const c of list) {
      const img = c.img || c.image || '';
      if (img.includes('shiksha.com') || img.includes('careers360.mobi') || img.includes('collegedunia.com') || img.includes('wikimedia.org')) {
        bestPhoto = img;
        break;
      }
    }

    if (!bestPhoto) {
      for (const c of list) {
        const img = c.img || c.image || '';
        if (img.includes('collegebatch.com') || img.includes('vidyavision.com') || img.includes('.edu') || img.includes('.ac.in')) {
          bestPhoto = img;
          break;
        }
      }
    }

    if (!bestPhoto) {
      bestPhoto = list[0].img || list[0].image;
    }

    // Apply bestPhoto to all members in this cluster
    let clusterModified = false;
    for (const c of list) {
      if ((c.img || c.image) !== bestPhoto) {
        c.img = bestPhoto;
        c.image = bestPhoto;
        // ensure bestPhoto is at index 0 in gallery
        if (Array.isArray(c.gallery)) {
          c.gallery = [bestPhoto, ...c.gallery.filter(g => g !== bestPhoto)].slice(0, 4);
        } else {
          c.gallery = [bestPhoto];
        }
        updatedCollegesCount++;
        clusterModified = true;
      }
    }
    if (clusterModified) synchronizedClusters++;
  }
}

console.log('\n================ UNIFORMITY SYNC SUMMARY ================');
console.log(`Clusters Processed: ${clusters.size}`);
console.log(`Sibling Clusters Synchronized: ${synchronizedClusters}`);
console.log(`Total College Records Updated: ${updatedCollegesCount}`);
console.log('==========================================================\n');

fs.writeFileSync(siteDataPath, JSON.stringify({ colleges, exams }, null, 2), 'utf8');
console.log('💾 Successfully saved public/siteData.json with 100% sibling cohesion!');
