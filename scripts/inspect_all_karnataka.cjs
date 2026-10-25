const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const data = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const colleges = Array.isArray(data) ? data : (data.colleges || []);

// Inspect all colleges with Karnataka state or Bangalore city
const karnatakaColleges = colleges.filter(c => {
  const st = (c.state || '').toLowerCase();
  const ct = (c.city || '').toLowerCase();
  const nm = (c.name || '').toLowerCase();
  return st.includes('karnataka') || ct.includes('bangalore') || ct.includes('bengaluru') || nm.includes('bangalore') || nm.includes('bengaluru');
});

console.log(`Total Karnataka/Bangalore colleges: ${karnatakaColleges.length}`);

// Check which ones have local vs external images
let localCount = 0;
let externalCount = 0;
const externalList = [];

karnatakaColleges.forEach(c => {
  const img = c.image || '';
  if (img.startsWith('/images/campuses/')) {
    localCount++;
  } else {
    externalCount++;
    externalList.push({ id: c.id, name: c.name, img });
  }
});

console.log(`Local Verified: ${localCount}`);
console.log(`External URLs: ${externalCount}`);
console.log('\nFirst 40 External Karnataka URLs:');
externalList.slice(0, 40).forEach(e => console.log(`- ID ${e.id} | ${e.name} | ${e.img}`));
