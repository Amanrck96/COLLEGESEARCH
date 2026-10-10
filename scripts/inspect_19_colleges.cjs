const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');
const rawData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const colleges = Array.isArray(rawData) ? rawData : rawData.colleges;

const TARGET_KEYWORDS = [
  'PUNE INSTITUTE OF BUSINESS MANAGEMENT',
  'SVIMS BUSINESS SCHOOL',
  'BHARATI VIDYAPEETH DEEMED TO BE UNIVERSITY DEPARTMENT OF MANAGMENT',
  'ATHARVA SCHOOL OF BUSINESS',
  'THAKUR GLOBAL BUSINESS SCHOOL',
  'WELINGKAR INSTITUTE OF MANAGEMENT',
  'SIR J. J. INSTITUTE OF APPLIED ART',
  'ALKESH DINESH MODY INSTITUTE',
  'ATHARVA INSTITUTE OF MANAGEMENT',
  "CHETANA'S RAMPRASAD",
  'VALIA SCHOOL OF MANAGEMENT',
  'BUNTS SANGHA',
  'KANDIVLI EDUCATION SOCIETY B K SHROFF',
  'SARASWATI COLLEGE OF ENGINEERING',
  'SMT. MANIBEN M.P. SHAH',
  'SHEILA RAHEJA SCHOOL OF BUSINESS',
  'GNIMS BUSINESS SCHOOL',
  'KOHINOOR MANAGEMENT SCHOOL',
  'USHA PRAVIN GANDHI'
];

console.log('Searching for target colleges in database...');
TARGET_KEYWORDS.forEach(kw => {
  const matches = colleges.filter(c => c.name.toUpperCase().includes(kw.toUpperCase()));
  console.log(`\n=== KEYWORD: ${kw} (Found: ${matches.length}) ===`);
  matches.forEach(m => {
    console.log(`  ID: ${m.id} | Name: ${m.name} | City: ${m.city} | State: ${m.state}`);
    console.log(`  Current Img: ${m.img || m.image}`);
  });
});
