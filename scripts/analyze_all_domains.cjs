const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const data = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const colleges = Array.isArray(data) ? data : (data.colleges || []);

// Check which domains appear in siteData.json
const domainMap = {};
colleges.forEach(c => {
  const url = c.image || '';
  if (!url) return;
  if (url.startsWith('/images/campuses/')) {
    domainMap['LOCAL_CAMPUS'] = (domainMap['LOCAL_CAMPUS'] || 0) + 1;
    return;
  }
  try {
    const host = new URL(url).hostname.toLowerCase().replace('www.', '');
    domainMap[host] = (domainMap[host] || 0) + 1;
  } catch (e) {
    domainMap['INVALID_URL'] = (domainMap['INVALID_URL'] || 0) + 1;
  }
});

const sorted = Object.entries(domainMap).sort((a,b) => b[1] - a[1]);
console.log(`Total Colleges: ${colleges.length}`);
console.log(`Total Unique Domains: ${sorted.length}`);
console.log('\nTop 40 Domains:');
console.log(sorted.slice(0, 40));
