const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');
const rawData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const colleges = Array.isArray(rawData) ? rawData : rawData.colleges;

const susDomains = [
  'radiopichincha.com',
  'yt3.googleusercontent.com',
  'th.bing.com',
  'maximizestrategies.com',
  'gkseries.com'
];

susDomains.forEach(dom => {
  const matches = colleges.filter(c => (c.img || c.image || '').includes(dom));
  console.log(`\n=== Domain: ${dom} (${matches.length} colleges) ===`);
  matches.slice(0, 5).forEach(m => console.log(`  [ID ${m.id}] ${m.name} -> ${m.img || m.image}`));
});
