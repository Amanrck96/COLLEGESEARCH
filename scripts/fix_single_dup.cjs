const fs = require('fs');
const path = require('path');

const siteDataPath = path.resolve('public/siteData.json');
const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const colleges = siteData.colleges;

const seen = new Set();
const deduped = [];

function norm(s) {
  return String(s || '').toLowerCase().replace(/[^a-z0-9]/g, '');
}

colleges.forEach((c, idx) => {
  const k = norm(c.name);
  if (idx < 3671) {
    // Keep first 3671 strictly untouched
    seen.add(k);
    deduped.push(c);
  } else {
    if (!seen.has(k)) {
      seen.add(k);
      deduped.push(c);
    }
  }
});

// Re-assign IDs sequentially
deduped.forEach((c, idx) => {
  c.id = idx + 1;
});

siteData.colleges = deduped;
fs.writeFileSync(siteDataPath, JSON.stringify(siteData, null, 2), 'utf8');
console.log(`✅ Total Deduped Colleges: ${deduped.length}`);
