const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const data = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const colleges = Array.isArray(data) ? data : (data.colleges || []);

const checklist = [
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
  'BHARATI VIDYAPEETH DEEMED TO BE UNIVERSITY DEPARTMENT OF MANAGMENT STUDIES',
  'ATHARVA SCHOOL OF BUSINESS',
  'THAKUR GLOBAL BUSINESS SCHOOL',
  'WELINGKAR INSTITUTE OF MANAGEMENT',
  'SIR J. J. INSTITUTE OF APPLIED ART',
  'ALKESH DINESH MODY',
  'CHETANA',
  'BUNTS SANGHA',
  'VALIA SCHOOL OF MANAGEMENT',
  'KANDIVLI EDUCATION SOCIETY',
  'SAILEE DEGREE COLLEGE',
  'IIT Bombay',
  'KOHINOOR MANAGEMENT SCHOOL',
  'GNIMS BUSINESS SCHOOL'
];

console.log('----------------------------------------------------');
console.log('FINAL AUDIT CHECKLIST FOR ALL USER-FLAGGED COLLEGES:');
console.log('----------------------------------------------------');

checklist.forEach(item => {
  const match = colleges.find(c => (c.name && c.name.toLowerCase().includes(item.toLowerCase())) || (c.alias && c.alias.toLowerCase().includes(item.toLowerCase())));
  if (match) {
    const isLocal = match.image.startsWith('/images/campuses/');
    console.log(`[PASS] ${match.name}`);
    console.log(`       -> Image: ${match.image} (${isLocal ? 'Verified Local Building' : 'External Web'})`);
  } else {
    console.log(`[FAIL NOT FOUND] ${item}`);
  }
});
