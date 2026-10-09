const fs = require('fs');
const path = require('path');
const siteData = JSON.parse(fs.readFileSync(path.resolve('public/siteData.json'), 'utf8'));
const colleges = siteData.colleges;

function getCampusRootKey(college) {
  const name = String(college && college.name || '').toLowerCase()
    .replace(/\b(of engineering|of technology|of management|of science|of arts|of commerce|of pharmacy|of law|of dental sciences|of nursing|of education|of business administration|of computer science|of computer application|of polytechnic|of architecture|studies and research|and research|and technology|and management|college of|institute of|degree college|polytechnic|first grade college|shiksha mahavidyalaya|for women|autonomous|pg|ug|affiliated|centre)\b/g, ' ')
    .replace(/[^a-z0-9]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  const loc = String(college && college.location || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  const state = String(college && college.state || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  return `${name}___${loc || state}`;
}

const groups = new Map();
colleges.forEach((c, idx) => {
  const k = getCampusRootKey(c);
  if (k.length < 5) return;
  if (!groups.has(k)) groups.set(k, []);
  groups.get(k).push({ id: c.id, name: c.name, img: c.img, idx });
});

let newRangeMismatches = [];

for (const [key, list] of groups.entries()) {
  if (list.length > 1) {
    const hasNewRange = list.some(item => item.idx >= 3671);
    if (hasNewRange) {
      const firstImg = list[0].img;
      const hasDiff = list.some(item => item.img !== firstImg);
      if (hasDiff) {
        newRangeMismatches.push({ key, members: list });
      }
    }
  }
}

console.log('Mismatches involving new range additions:', newRangeMismatches.length);
if (newRangeMismatches.length > 0) {
  console.log(JSON.stringify(newRangeMismatches, null, 2));
}
