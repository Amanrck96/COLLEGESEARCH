const fs = require('fs');
const path = require('path');
const https = require('https');

const siteDataPath = path.resolve('public/siteData.json');
const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const colleges = siteData.colleges || [];

console.log(`================================================================`);
console.log(`⚡ HIGH-SPEED REAL CAMPUS IMAGE & DATA PIPELINE (2,000 COLLEGES)`);
console.log(`================================================================`);
console.log(`Total database size: ${colleges.length} colleges`);

const START_INDEX = 3671;
const targetSlice = colleges.slice(START_INDEX);
console.log(`Processing ${targetSlice.length} newly added colleges from index ${START_INDEX}...`);

function fetchFastCampusPhotos(name, loc) {
  const cleanName = name.replace(/\b(Admission|Ranking|Placement|2024|2025|2026)\b/gi, '').trim();
  const q = encodeURIComponent(`${cleanName} ${loc || ''} campus building`);
  const url = `https://www.bing.com/images/search?q=${q}&qft=+filterui:imagesize-large`;

  return new Promise((resolve) => {
    const req = https.get(url, { 
      headers: { 
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9'
      },
      timeout: 10000
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const matches = [...data.matchAll(/murl&quot;:&quot;(http[^&]+?)&quot;/g)].map(m => m[1]);
        const seen = new Set();
        const clean = [];
        const badWords = ['logo', 'icon', 'youtube', 'ytimg', 'faculty', 'person', 'avatar', 'portrait', '.svg', '.gif', 'map', 'result', 'admissions-open', 'facebook', 'twitter', 'button', 'badge'];

        for (const u of matches) {
          const l = u.toLowerCase();
          if (!badWords.some(b => l.includes(b)) && u.startsWith('http') && !seen.has(u)) {
            seen.add(u);
            clean.push(u);
          }
        }
        resolve(clean);
      });
    });

    req.on('error', () => resolve([]));
    req.on('timeout', () => { req.destroy(); resolve([]); });
  });
}

const CONCURRENCY = 12;
let completed = 0;
let updatedImages = 0;
let lastSave = Date.now();

function saveToDisk() {
  fs.writeFileSync(siteDataPath, JSON.stringify(siteData, null, 2), 'utf8');
  console.log(`💾 [SAVE] Progress saved to public/siteData.json | Total real photos attached: ${updatedImages} / ${completed} done`);
}

async function worker(queue) {
  while (queue.length > 0) {
    const item = queue.shift();
    if (!item) break;

    const { college } = item;
    try {
      const photos = await fetchFastCampusPhotos(college.name, college.location);
      if (photos.length > 0) {
        college.img = photos[0];
        college.gallery = photos.slice(0, 4);
        if (college.gallery.length < 2) {
          college.gallery.push(photos[0]);
        }
        updatedImages++;
      }
    } catch (e) {}

    completed++;
    if (completed % 50 === 0 || queue.length === 0) {
      const pct = ((completed / targetSlice.length) * 100).toFixed(1);
      console.log(`⏳ Progress: ${completed}/${targetSlice.length} colleges (${pct}%) | Real Photos Attached: ${updatedImages}`);
      if (Date.now() - lastSave > 10000 || queue.length === 0) {
        saveToDisk();
        lastSave = Date.now();
      }
    }
  }
}

async function main() {
  const queue = targetSlice.map((college, idx) => ({ college, index: START_INDEX + idx }));
  console.log(`Launching ${CONCURRENCY} parallel worker streams...`);

  const workers = [];
  for (let i = 0; i < CONCURRENCY; i++) {
    workers.push(worker(queue));
  }

  await Promise.all(workers);
  saveToDisk();
  console.log(`\n🎉 COMPLETE! All ${completed} colleges processed. Exactly ${updatedImages} real campus building photos attached.`);
}

main().catch(console.error);
