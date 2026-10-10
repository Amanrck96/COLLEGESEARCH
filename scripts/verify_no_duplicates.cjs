const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const data = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const colleges = Array.isArray(data) ? data : (data.colleges || []);

const testList = [
  'Koshys Institute of Hotel Management',
  'Canara Bank School of Management Studies J.B. Campus',
  'Canarabank School of Management Studies Bcu Campus',
  'Patel Institute of Science and Management',
  'Primus School of Management Studies',
  'Sri Krishna International Business School',
  'Bangalore Institute of Management Science and Research',
  'Krupanidhi College of Management',
  'Hal Management Academy',
  'Compare IIIT Bangalore',
  'Bangalore Technological Institute',
  'Sindhi Instiute of Management',
  'Regional College of Management Bangalore',
  'Vidhya Shekhar Institution of Management Studies',
  'Bangalore Integrated Management Academy',
  'Imperial Institute of Advanced Management',
  'Rathinam School of Business'
];

console.log('----------------------------------------------------');
console.log('CHECKING UNIQUE IMAGE ASSIGNMENT ACROSS COLLEGES:');
console.log('----------------------------------------------------');

const imageMap = {};

testList.forEach(name => {
  const match = colleges.find(c => (c.name && c.name.toLowerCase().includes(name.toLowerCase())) || (c.alias && c.alias.toLowerCase().includes(name.toLowerCase())));
  if (match) {
    const img = match.image;
    console.log(`College: ${match.name}`);
    console.log(`Image:   ${img}`);
    if (imageMap[img]) {
      console.log(`❌ DUPLICATE DETECTED with: ${imageMap[img]}`);
    } else {
      imageMap[img] = match.name;
      console.log(`✅ UNIQUE`);
    }
    console.log('----------------------------------------------------');
  }
});
