const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const data = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const colleges = Array.isArray(data) ? data : (data.colleges || []);

const externalMap = {};

colleges.forEach(c => {
  const img = c.image || '';
  if (img.startsWith('/images/campuses/')) return;
  try {
    const host = new URL(img).hostname.toLowerCase().replace('www.', '');
    externalMap[host] = (externalMap[host] || 0) + 1;
  } catch(e) {
    externalMap['INVALID'] = (externalMap['INVALID'] || 0) + 1;
  }
});

const sorted = Object.entries(externalMap).sort((a,b) => b[1] - a[1]);
console.log('Unique external domains count:', sorted.length);
console.log('ALL external domains present:');
console.log(sorted);
