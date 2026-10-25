const fs = require('fs');
const path = require('path');

const siteData = JSON.parse(fs.readFileSync('public/siteData.json', 'utf8'));
const colleges = Array.isArray(siteData) ? siteData : siteData.colleges;

const targets = [
  'VALIA SCHOOL OF MANAGEMENT',
  'BUNTS SANGHA MUMBAI ANNNA LEELA',
  'PSSVMS SAILEE DEGREE COLLEGE',
  'USHA PRAVIN GANDHI',
  'GNIMS BUSINESS SCHOOL',
  'NAGINDAS KHANDWALA',
  'SIR M VISVESVARAYA',
  'TIBREWALA'
];

targets.forEach(t => {
  const match = colleges.find(c => c.name && c.name.toLowerCase().includes(t.toLowerCase()));
  if (match) {
    console.log(`ID: ${match.id} | Name: ${match.name}`);
    console.log(`  -> Image: ${match.image}`);
    if (match.image && match.image.startsWith('/images/campuses/')) {
      const p = path.join(__dirname, '../public', match.image);
      if (fs.existsSync(p)) {
        const stat = fs.statSync(p);
        console.log(`  -> File on disk exists: size ${(stat.size / 1024).toFixed(1)} KB`);
      } else {
        console.log(`  ❌ FILE DOES NOT EXIST ON DISK: ${p}`);
      }
    }
  } else {
    console.log(`❌ Not found in siteData: ${t}`);
  }
});
