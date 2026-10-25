const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const data = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const colleges = Array.isArray(data) ? data : (data.colleges || []);

const rangeColleges = colleges.filter(c => c.id >= 4630 && c.id <= 4760);
console.log(`Found ${rangeColleges.length} colleges in ID range 4630-4760:`);

rangeColleges.forEach(c => {
  console.log(`ID: ${c.id} | ${c.name} | Image: ${c.image}`);
});
