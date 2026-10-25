const fs = require('fs');
const path = require('path');

const siteData = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'public', 'siteData.json'), 'utf8'));
const colleges = Array.isArray(siteData) ? siteData : siteData.colleges;

const targets = [
  'IIIT Bangalore',
  'Vidhya Shekhar',
  'Bangalore Integrated Management Academy',
  'Rathinam School of Business',
  'Imperial Institute of Advanced Management',
  'Canara Bank School of Management',
  'Canarabank School of Management',
  'Bangalore Technological Institute',
  'Sindhi Instiute of Management',
  'Sindhi Institute of Management',
  'Regional College of Management Bangalore'
];

targets.forEach(t => {
  const matches = colleges.filter(c => c.name.toUpperCase().includes(t.toUpperCase()));
  console.log(`\n=== "${t}" (${matches.length} matches) ===`);
  matches.forEach(m => {
    console.log(`[ID ${m.id}] ${m.name} (${m.state || ''})`);
    console.log(`  Img: ${m.img || m.image}`);
  });
});
