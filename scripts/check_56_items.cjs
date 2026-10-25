const fs = require('fs');
const path = require('path');

const siteData = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'public', 'siteData.json'), 'utf8')).colleges;
const amanData = JSON.parse(fs.readFileSync(path.join(__dirname, 'categorized_scraped_colleges.json'), 'utf8'));

function clean(n) {
  return (n || '').toLowerCase().replace(/[^a-z0-9]/g, '').trim();
}
const siteNameMap = new Set(siteData.map(c => clean(c.name)));

const rem = amanData.filter(c => !siteNameMap.has(clean(c.name)));
console.log('Total non-exact matched items:', rem.length);
rem.forEach((r, idx) => console.log(`${idx + 1}. ${r.name}`));
