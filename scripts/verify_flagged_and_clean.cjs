const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const rawData = fs.readFileSync(siteDataPath, 'utf8');
const data = JSON.parse(rawData);
const colleges = Array.isArray(data) ? data : (data.colleges || []);

const flagged = [
  'Compare IIIT Bangalore',
  'Vidhya Shekhar',
  'Bangalore Integrated Management Academy',
  'Rathinam School of Business',
  'Imperial Institute of Advanced Management',
  'Canara Bank School of Management Studies J.B. Campus',
  'Canarabank School of Management Studies Bcu Campus',
  'Bangalore Technological Institute',
  'Sindhi Instiute of Management',
  'Regional College of Management Bangalore',
  'SRINIVASAN COLLEGE OF ARTS',
  'KV INSTITUE OF MANAGEMENT',
  'RAMACHANDRAN INTERNATIONAL INSTITUTE',
  'SAS INSTITUTE OF MANAGEMENT',
  'MATOSHRI USHATAI JADHAV',
  'SVIMS BUSINESS SCHOOL',
  'BHARATI VIDYAPEETH',
  'ATHARVA SCHOOL OF BUSINESS',
  'THAKUR GLOBAL BUSINESS SCHOOL',
  'WELINGKAR',
  'SIR J. J. INSTITUTE OF APPLIED ART',
  'ALKESH DINESH MODY',
  'CHETANA',
  'BUNTS SANGHA',
  'VALIA SCHOOL OF MANAGEMENT',
  'KANDIVLI EDUCATION SOCIETY',
  'SAILEE DEGREE COLLEGE',
  'IIT Bombay',
  'KOHINOOR MANAGEMENT SCHOOL',
  'GNIMS'
];

console.log('=== VERIFYING FLAGGED COLLEGES ===');
flagged.forEach(q => {
  const matches = colleges.filter(c => (c.name && c.name.toLowerCase().includes(q.toLowerCase())) || (c.alias && c.alias.toLowerCase().includes(q.toLowerCase())));
  console.log(`\nQuery [${q}] (${matches.length} matches):`);
  matches.forEach(m => {
    console.log(`- ID ${m.id} | ${m.name} | Image: ${m.image}`);
  });
});

console.log('\n=== CHECKING FOR ANY RESIDUAL JUNK STRINGS IN ENTIRE DATABASE ===');
const residualJunkKeywords = [
  'colomio', 'thoughtco', 'wallpaper', 'deviantart', 'wixmp', 'dolphin', 'whale',
  'pelican', 'citroen', 'motorcycle', 'cylinder', 'sintex', 'taxstrategy', 'cdpcdn',
  'etsystatic', 'pngall', 'how-to-draw', 'clearsky2100', 'zhimg'
];

let junkHits = 0;
colleges.forEach(c => {
  const img = (c.image || '').toLowerCase();
  for (const kw of residualJunkKeywords) {
    if (img.includes(kw)) {
      console.log(`⚠️ Residual found in ID ${c.id} (${c.name}): ${c.image}`);
      junkHits++;
      break;
    }
  }
});

console.log(`Total Residual Junk URLs in Database: ${junkHits}`);
