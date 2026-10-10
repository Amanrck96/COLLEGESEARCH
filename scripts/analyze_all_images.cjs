const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');
const raw = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const colleges = raw.colleges || [];

const domainMap = new Map();
const patternIssues = [];

colleges.forEach((c, idx) => {
  const img = (c.image || c.imageUrl || '').trim();
  let domain = 'local';
  if (img.startsWith('http://') || img.startsWith('https://')) {
    try {
      const u = new URL(img);
      domain = u.hostname;
    } catch (e) {
      domain = 'invalid-url';
    }
  }

  domainMap.set(domain, (domainMap.get(domain) || 0) + 1);
});

console.log("Domain breakdown of images across all 12,656 colleges:");
const sortedDomains = Array.from(domainMap.entries()).sort((a, b) => b[1] - a[1]);
sortedDomains.slice(0, 30).forEach(([d, cnt]) => {
  console.log(`  ${d.padEnd(35)} : ${cnt}`);
});
console.log(`Total domains: ${domainMap.size}`);
