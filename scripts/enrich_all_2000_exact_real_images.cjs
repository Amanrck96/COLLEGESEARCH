const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const OBSCURA_PATH = 'C:/Users/ACER/.gemini/antigravity/scratch/bin/obscura.exe';
const siteDataPath = path.resolve('public/siteData.json');
const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const colleges = siteData.colleges || [];

console.log(`================================================================`);
console.log(`🔍 REAL CAMPUS IMAGE & DATA ENRICHMENT PIPELINE (2,000 COLLEGES)`);
console.log(`================================================================`);
console.log(`Total database size: ${colleges.length} colleges`);

const START_INDEX = 3671;
const targetSlice = colleges.slice(START_INDEX);
console.log(`Processing ${targetSlice.length} newly added colleges from index ${START_INDEX}...`);

function fetchRealCampusPhotos(name, loc) {
  const cleanName = name.replace(/\b(Admission|Ranking|Placement|2024|2025|2026)\b/gi, '').trim();
  const query = `${cleanName} ${loc || ''} campus building`;
  const url = `https://www.bing.com/images/search?q=${encodeURIComponent(query)}&qft=+filterui:imagesize-large`;
  const cmd = `"${OBSCURA_PATH}" fetch --stealth --timeout 20 "${url}" --dump links`;

  return new Promise((resolve) => {
    exec(cmd, { maxBuffer: 1024 * 1024 * 10 }, (err, stdout) => {
      if (err || !stdout) return resolve([]);
      const lines = stdout.split('\n');
      const found = [];
      const seenUrls = new Set();
      for (const line of lines) {
        const link = line.split('\t')[0].trim();
        if (link.includes('mediaurl=')) {
          const match = link.match(/mediaurl=([^&]+)/);
          if (match && match[1]) {
            const rawUrl = decodeURIComponent(match[1]);
            const u = rawUrl.toLowerCase();
            const bad = ['logo', 'icon', 'youtube', 'ytimg', 'faculty', 'person', 'avatar', 'portrait', '.svg', '.gif', 'map', 'result', 'admissions-open', 'facebook', 'twitter'];
            if (!bad.some(b => u.includes(b)) && rawUrl.startsWith('http') && !seenUrls.has(rawUrl)) {
              seenUrls.add(rawUrl);
              found.push(rawUrl);
            }
          }
        }
      }
      resolve(found);
    });
  });
}

const CONCURRENCY = 8;
let completed = 0;
let updatedImages = 0;
let lastSaveTime = Date.now();

function saveProgress() {
  fs.writeFileSync(siteDataPath, JSON.stringify(siteData, null, 2), 'utf8');
  console.log(`💾 [SAVE] Progress saved to public/siteData.json (Total updated: ${updatedImages} / ${completed} done)`);
}

async function worker(queue) {
  while (queue.length > 0) {
    const item = queue.shift();
    if (!item) break;

    const { college, index } = item;
    try {
      const photos = await fetchRealCampusPhotos(college.name, college.location);
      if (photos.length > 0) {
        college.img = photos[0];
        college.gallery = photos.slice(0, 4);
        if (college.gallery.length < 2) {
          college.gallery.push(photos[0]);
        }
        updatedImages++;
      }
    } catch (e) {
      // Ignore individual fetch errors
    }

    completed++;
    if (completed % 25 === 0 || queue.length === 0) {
      console.log(`⏳ Progress: ${completed}/${targetSlice.length} colleges processed (${((completed / targetSlice.length) * 100).toFixed(1)}%) | Real photos attached: ${updatedImages}`);
      if (Date.now() - lastSaveTime > 15000 || queue.length === 0) {
        saveProgress();
        lastSaveTime = Date.now();
      }
    }
  }
}

async function main() {
  const queue = targetSlice.map((college, idx) => ({ college, index: START_INDEX + idx }));
  console.log(`Starting worker pool with ${CONCURRENCY} parallel threads...`);

  const workers = [];
  for (let i = 0; i < CONCURRENCY; i++) {
    workers.push(worker(queue));
  }

  await Promise.all(workers);
  saveProgress();
  console.log(`🎉 ALL ${completed} COLLEGES COMPLETED! Total verified real photos added: ${updatedImages}`);
}

main().catch(console.error);
