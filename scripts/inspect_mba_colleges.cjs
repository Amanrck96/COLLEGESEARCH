const fs = require('fs');
const path = require('path');

const siteData = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'public', 'siteData.json'), 'utf8'));
const colleges = Array.isArray(siteData) ? siteData : siteData.colleges;

const mbaColleges = colleges.filter(c => {
  const name = (c.name || '').toLowerCase();
  const type = (c.type || '').toLowerCase();
  const about = (c.about || '').toLowerCase();
  const courses = (c.courses || []).map(co => (co.title || '') + ' ' + (co.type || '')).join(' ').toLowerCase();
  return name.includes('mba') || name.includes('management') || name.includes('business school') || name.includes('pgdm') ||
         type.includes('management') || type.includes('mba') ||
         courses.includes('mba') || courses.includes('pgdm');
});

console.log(`Total MBA / Management colleges in database: ${mbaColleges.length}`);

// Inspect the specific ones from user prompt:
const specific = [
  'SRINIVASAN COLLEGE OF ARTS',
  'KV INSTITUE OF MANAGEMENT',
  'KV INSTITUTE OF MANAGEMENT',
  'RAMACHANDRAN INTERNATIONAL INSTITUTE',
  'RIIM',
  'SAS INSTITUTE OF MANAGEMENT',
  'MATOSHRI USHATAI JADHAV'
];

specific.forEach(s => {
  const matches = colleges.filter(c => c.name.toUpperCase().includes(s.toUpperCase()));
  console.log(`\n=== "${s}" (${matches.length} matches) ===`);
  matches.forEach(m => {
    console.log(`[ID ${m.id}] ${m.name} (${m.state || ''})`);
    console.log(`  Img: ${m.img || m.image}`);
  });
});
