const fs = require('fs');
const path = require('path');

const siteData = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'public', 'siteData.json'), 'utf8'));
const colleges = Array.isArray(siteData) ? siteData : siteData.colleges;

const targets = [
  'KANDIVLI EDUCATION SOCIETY',
  'SAILEE',
  'IIT BOMBAY',
  'INDIAN INSTITUTE OF TECHNOLOGY BOMBAY',
  'KOHINOOR MANAGEMENT SCHOOL',
  'GNIMS BUSINESS SCHOOL',
  'THAKUR SHYAMNARAYAN',
  "CHETANA'S INSTITUTE OF MANAGEMENT AND RESEARCH",
  'THAKUR INSTITUTE OF MANAGEMENT STUDIES, CAREER'
];

targets.forEach(t => {
  const matches = colleges.filter(c => c.name.toUpperCase().includes(t.toUpperCase()));
  console.log(`\n=== TARGET: "${t}" (${matches.length} matches) ===`);
  matches.forEach(m => {
    console.log(`[ID ${m.id}] ${m.name}`);
    console.log(`  Img: ${m.img || m.image}`);
  });
});
