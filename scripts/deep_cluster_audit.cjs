const fs = require('fs');
const path = require('path');

const siteData = JSON.parse(fs.readFileSync('public/siteData.json', 'utf8'));
const colleges = Array.isArray(siteData) ? siteData : siteData.colleges;

console.log(`Auditing 12,656 colleges for any potential remaining anomalies...`);

const suspiciousPatterns = [
  'banner', 'logo', 'avatar', 'icon', 'seal', 'unknown', 'default',
  'placeholder', 'sample', 'temp', 'test'
];

const suspiciousList = [];

colleges.forEach(c => {
  const img = (c.image || '').toLowerCase();
  for (const pat of suspiciousPatterns) {
    if (img.includes(pat) && !img.includes('campus') && !img.includes('college') && !img.includes('university') && !img.includes('iit') && !img.includes('iim')) {
      suspiciousList.push({ id: c.id, name: c.name, city: c.city, state: c.state, img: c.image, pattern: pat });
      break;
    }
  }
});

console.log(`Potential anomalies found: ${suspiciousList.length}`);
if (suspiciousList.length > 0) {
  console.log('Sample:');
  suspiciousList.slice(0, 20).forEach(s => {
    console.log(`ID ${s.id} | ${s.name} (${s.city || s.state}) | ${s.img}`);
  });
}
