const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const rawData = fs.readFileSync(siteDataPath, 'utf8');
const data = JSON.parse(rawData);

const isArray = Array.isArray(data);
const colleges = isArray ? data : (data.colleges || []);

let count = 0;
colleges.forEach(c => {
  const name = (c.name || '').toLowerCase();
  if (name.includes('tibrewala') || name.includes('parmeshwaridevi') || name.includes('durgadutt')) {
    c.image = '/images/campuses/spdt_tibrewala_andheri.jpg';
    c.img = '/images/campuses/spdt_tibrewala_andheri.jpg';
    count++;
    console.log(`✅ [APPLIED SPDT PHOTO] ID ${c.id} | ${c.name} -> /images/campuses/spdt_tibrewala_andheri.jpg`);
  }
});

console.log(`Total Tibrewala institutions updated: ${count}`);

if (isArray) {
  fs.writeFileSync(siteDataPath, JSON.stringify(colleges, null, 2), 'utf8');
} else {
  data.colleges = colleges;
  fs.writeFileSync(siteDataPath, JSON.stringify(data, null, 2), 'utf8');
}

console.log('✅ siteData.json updated successfully!');
