const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const data = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const colleges = Array.isArray(data) ? data : (data.colleges || []);

const wikiItems = [];

colleges.forEach(c => {
  const img = (c.image || '');
  if (img.includes('wikimedia.org') || img.includes('wikipedia.org')) {
    wikiItems.push({ id: c.id, name: c.name, img });
  }
});

console.log(`Total Wikimedia items: ${wikiItems.length}`);
console.log('Sample of 35 Wikimedia URLs:');
wikiItems.slice(0, 35).forEach(w => console.log(`- ID ${w.id} | ${w.name} | ${w.img}`));
