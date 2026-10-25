const fs = require('fs');
const path = require('path');

const siteDataPath = path.resolve('public/siteData.json');
const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
let colleges = siteData.colleges || [];

console.log(`Original count: ${colleges.length}`);

const seenNames = new Set();
const uniqueColleges = [];

colleges.forEach(c => {
  const norm = (c.name || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  if (!seenNames.has(norm)) {
    seenNames.add(norm);
    uniqueColleges.push(c);
  }
});

console.log(`Unique colleges after deduplication: ${uniqueColleges.length}`);

// Renumber IDs sequentially 1 to N
uniqueColleges.forEach((c, idx) => {
  c.id = idx + 1;
});

siteData.colleges = uniqueColleges;
fs.writeFileSync(siteDataPath, JSON.stringify(siteData, null, 2), 'utf8');
console.log(`✅ Database saved with exactly ${uniqueColleges.length} strictly unique colleges (0 duplicates)!`);
