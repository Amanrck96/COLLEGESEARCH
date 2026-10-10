const fs = require('fs');
const path = require('path');

const d = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'public', 'siteData.json'), 'utf8')).colleges;

const targets = [
  'PUNE INSTITUTE OF BUSINESS MANAGEMENT',
  'SVIMS BUSINESS SCHOOL',
  'BHARATI VIDYAPEETH DEEMED TO BE UNIVERSITY DEPARTMENT OF MANAGMENT STUDIES OFF CAMPUS',
  'ATHARVA SCHOOL OF BUSINESS',
  'THAKUR GLOBAL BUSINESS SCHOOL',
  'WELINGKAR INSTITUTE OF MANAGEMENT DEVELOPMENT AND RESEARCH'
];

targets.forEach((t, i) => {
  const norm = t.toLowerCase().replace(/[^a-z0-9]/g, '');
  const found = d.filter(c => {
    const cNorm = c.name.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cNorm.includes(norm) || norm.includes(cNorm);
  });
  console.log(`\n=== ${i + 1}. Target: ${t} ===`);
  found.forEach(f => {
    console.log(`[ID ${f.id}] ${f.name}`);
    console.log(`  Location: ${f.location}, ${f.state}`);
    console.log(`  Image: ${f.img}`);
    console.log(`  Gallery:`, f.gallery);
  });
});
