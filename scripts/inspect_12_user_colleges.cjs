const fs = require('fs');
const path = require('path');

const d = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'public', 'siteData.json'), 'utf8')).colleges;

const targets = [
  'PUNE INSTITUTE OF BUSINESS MANAGEMENT',
  'SVIMS BUSINESS SCHOOL',
  'BHARATI VIDYAPEETH DEEMED TO BE UNIVERSITY DEPARTMENT OF MANAGMENT STUDIES OFF CAMPUS',
  'ATHARVA SCHOOL OF BUSINESS',
  'THAKUR GLOBAL BUSINESS SCHOOL',
  'WELINGKAR INSTITUTE OF MANAGEMENT DEVELOPMENT AND RESEARCH',
  'SIR J. J. INSTITUTE OF APPLIED ART',
  'ALKESH DINESH MODY INSTITUTE FOR FINANCIAL AND MANAGEMENT STUDIES',
  'ATHARVA INSTITUTE OF MANAGEMENT STUDIES',
  "CHETANA'S RAMPRASAD KHANDELWAL INSTITUTE OF MANAGEMENT & RESEARCH",
  'VALIA SCHOOL OF MANAGEMENT',
  'BUNTS SANGHA MUMBAI ANNNA LEELA COLLEGE OF COMMERCE AND ECONOMICS SHOBHA JAYARAM SHETTY COLLEGE FOR BMS'
];

targets.forEach((t, i) => {
  const norm = t.toLowerCase().replace(/[^a-z0-9]/g, '');
  const found = d.filter(c => {
    const cNorm = c.name.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cNorm.includes(norm) || norm.includes(cNorm);
  });
  console.log(`\n=== ${i + 1}. Target: ${t} ===`);
  if (found.length === 0) {
    const firstWord = t.split(' ')[0].toLowerCase();
    const pFound = d.filter(c => c.name.toLowerCase().includes(firstWord));
    console.log(`❌ No exact norm match, candidates with '${firstWord}':`);
    pFound.slice(0, 5).forEach(p => console.log(`   [ID ${p.id}] ${p.name} (${p.location})`));
  } else {
    found.forEach(f => {
      console.log(`[ID ${f.id}] ${f.name}`);
      console.log(`  Location: ${f.location}, ${f.state}`);
      console.log(`  Image: ${f.img}`);
      console.log(`  Gallery:`, f.gallery);
    });
  }
});
