const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');
const raw = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const colleges = raw.colleges || [];

// Group by domain
const byDomain = new Map();

colleges.forEach(c => {
  const img = (c.image || '').trim();
  if (!img.startsWith('http')) return;
  try {
    const u = new URL(img);
    const domain = u.hostname;
    if (!byDomain.has(domain)) byDomain.set(domain, []);
    byDomain.get(domain).push({ id: c.id, name: c.name, img });
  } catch (e) {}
});

console.log(`Unique external domains: ${byDomain.size}`);
for (const [domain, list] of Array.from(byDomain.entries()).sort((a,b) => b[1].length - a[1].length)) {
  console.log(`\n--- ${domain} (${list.length} colleges) ---`);
  list.slice(0, 3).forEach(c => {
    console.log(`  [${c.id}] ${c.name} -> ${c.img}`);
  });
}
