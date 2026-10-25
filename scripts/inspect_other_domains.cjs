const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');
const rawData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const colleges = Array.isArray(rawData) ? rawData : rawData.colleges;

const domains = {};
colleges.forEach(c => {
  const img = c.img || c.image || '';
  if (img.startsWith('/')) {
    domains['[LOCAL_ASSETS]'] = (domains['[LOCAL_ASSETS]'] || 0) + 1;
    return;
  }
  try {
    const u = new URL(img);
    domains[u.hostname] = (domains[u.hostname] || 0) + 1;
  } catch (e) {
    domains['[INVALID_URL]'] = (domains['[INVALID_URL]'] || 0) + 1;
  }
});

const sorted = Object.entries(domains).sort((a,b) => b[1] - a[1]);
console.log('Top 40 domains in database:');
sorted.slice(0, 40).forEach(([d, c]) => console.log(`  ${d}: ${c}`));
