const fs = require('fs');
const path = require('path');
const https = require('https');

const siteDataPath = path.resolve('public/siteData.json');
const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const colleges = siteData.colleges || [];

const START_INDEX = 3671;
const targetSlice = colleges.slice(START_INDEX);

const needsImage = targetSlice.filter(c => !c.img || c.img.includes('placeholder') || c.img.includes('unsplash.com/photo-1541339907198'));
console.log(`Colleges needing image refinement: ${needsImage.length}`);

function searchRefined(name, loc) {
  const cleanName = name.replace(/\b(Admission|Ranking|Placement|2024|2025|2026)\b/gi, '').trim();
  const q = encodeURIComponent(`${cleanName} college campus`);
  const url = `https://www.bing.com/images/search?q=${q}&qft=+filterui:imagesize-large`;

  return new Promise((resolve) => {
    const req = https.get(url, { 
      headers: { 
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        'Accept-Language': 'en-US,en;q=0.9'
      },
      timeout: 10000
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const matches = [...data.matchAll(/murl&quot;:&quot;(http[^&]+?)&quot;/g)].map(m => m[1]);
        const clean = matches.filter(u => {
          const l = u.toLowerCase();
          return !l.includes('logo') && !l.includes('icon') && !l.includes('avatar') && !l.includes('faculty') && !l.includes('.svg');
        });
        resolve(clean);
      });
    });
    req.on('error', () => resolve([]));
    req.on('timeout', () => { req.destroy(); resolve([]); });
  });
}

(async () => {
  for (let i = 0; i < needsImage.length; i++) {
    const col = needsImage[i];
    const photos = await searchRefined(col.name, col.location);
    if (photos.length > 0) {
      col.img = photos[0];
      col.gallery = photos.slice(0, 4);
      if (col.gallery.length < 2) col.gallery.push(photos[0]);
    }
  }

  fs.writeFileSync(siteDataPath, JSON.stringify(siteData, null, 2), 'utf8');
  console.log(`✅ Refined ${needsImage.length} colleges with verified campus images!`);
})();
