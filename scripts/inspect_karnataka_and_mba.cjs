const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const data = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const colleges = Array.isArray(data) ? data : (data.colleges || []);

const flagged = [
  'Koshys',
  'Bangalore Institute of Management Science',
  'Sri Krishna International Business School',
  'Krupanidhi College of Management',
  'Hal Management Academy',
  'Primus School of Management Studies'
];

console.log('=== TARGET COLLEGES INSPECTION ===');
flagged.forEach(f => {
  const matches = colleges.filter(c => c.name && c.name.toLowerCase().includes(f.toLowerCase()));
  matches.forEach(m => {
    console.log(`ID: ${m.id} | Name: ${m.name} | City: ${m.city} | State: ${m.state}`);
    console.log(`   Image: ${m.image}`);
    console.log(`   Banner: ${m.bannerImage}`);
  });
});

console.log('\n=== ALL KARNATAKA COLLEGES WITH EXTERNAL (NON-LOCAL) URLS ===');
const karnatakaExternal = colleges.filter(c => {
  const st = (c.state || '').toLowerCase();
  const img = c.image || '';
  return st.includes('karnataka') && !img.startsWith('/images/campuses/');
});
console.log(`Found ${karnatakaExternal.length} Karnataka colleges with external image URLs.`);
karnatakaExternal.slice(0, 30).forEach(c => {
  console.log(`- ID ${c.id} | ${c.name} | ${c.image}`);
});
