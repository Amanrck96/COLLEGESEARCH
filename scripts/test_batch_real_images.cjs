const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const OBSCURA_PATH = 'C:/Users/ACER/.gemini/antigravity/scratch/bin/obscura.exe';
const siteDataPath = path.resolve('public/siteData.json');
const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const colleges = siteData.colleges || [];

console.log(`Total colleges in database: ${colleges.length}`);

// We want to process the newly added 2,000 colleges (index 3671 to 5670)
const startIndex = 3671;
const targetColleges = colleges.slice(startIndex);
console.log(`Target colleges to verify & fetch real images for: ${targetColleges.length}`);

function fetchRealCampusPhotos(name, loc) {
  const cleanName = name.replace(/\b(Admission|Ranking|Placement|2024|2025|2026)\b/gi, '').trim();
  const query = `${cleanName} ${loc || ''} campus building`;
  const url = `https://www.bing.com/images/search?q=${encodeURIComponent(query)}&qft=+filterui:imagesize-large`;
  const cmd = `"${OBSCURA_PATH}" fetch --stealth --timeout 15 "${url}" --dump links`;

  return new Promise((resolve) => {
    exec(cmd, { maxBuffer: 1024 * 1024 * 10 }, (err, stdout) => {
      if (err || !stdout) return resolve([]);
      const lines = stdout.split('\n');
      const found = [];
      for (const line of lines) {
        const link = line.split('\t')[0].trim();
        if (link.includes('mediaurl=')) {
          const match = link.match(/mediaurl=([^&]+)/);
          if (match && match[1]) {
            const rawUrl = decodeURIComponent(match[1]);
            const u = rawUrl.toLowerCase();
            const bad = ['logo', 'icon', 'youtube', 'ytimg', 'faculty', 'person', 'avatar', 'portrait', '.svg', '.gif', 'map', 'result', 'admissions-open'];
            if (!bad.some(b => u.includes(b)) && rawUrl.startsWith('http')) {
              found.push(rawUrl);
            }
          }
        }
      }
      resolve(found);
    });
  });
}

// Test with 5 colleges first
(async () => {
  console.log('Testing batch of 5 colleges...');
  for (let i = 0; i < 5; i++) {
    const col = targetColleges[i];
    const photos = await fetchRealCampusPhotos(col.name, col.location);
    console.log(`[${i + 1}/5] ${col.name} (${col.location}) => Found ${photos.length} real photos`);
    if (photos.length > 0) {
      console.log(`   Sample: ${photos[0]}`);
    }
  }
})();
