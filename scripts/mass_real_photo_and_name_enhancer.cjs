const fs = require('fs');
const path = require('path');
const https = require('https');

console.log(`================================================================`);
console.log(`🚀 MASS REAL CAMPUS PHOTO, NAME & MAP ENRICHMENT PIPELINE`);
console.log(`================================================================`);

const siteDataPath = path.resolve('public/siteData.json');
const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const colleges = siteData.colleges;

console.log(`Total colleges in DB: ${colleges.length}`);

// 1. Strict Reject Patterns for Images
const STRICT_REJECT = [
  'logo', 'icon', 'favicon', 'badge', 'seal', 'emblem', 'unilogo', 'collegelogo', 'dept-logo', 'symbol',
  'staticmap', 'maps.googleapis', 'google.com/maps', 'static-map', 'streetview', 'geo/',
  'yumpu', 'docplayer', 'issuu', 'slideshare', 'pdf', 'document', 'magazine', 'flashmagazine',
  'brochure', 'pamphlet', 'forms.png', 'admitcard', 'marksheet', 'hallticket', 'certificate',
  'result', 'boardresults', 'sarkariresult', 'onlineresult', 'exam-', 'ktu+result',
  'flyer', 'poster', 'event_poster', 'adbanner', 'admissions-open', 'admission-flyer',
  'removebg', 'transparent', 'nobg', 'cutout', 'preview.png',
  'vector', 'freepik', 'clipart', 'alphabet', 'letter', 'tracing', 'worksheet', 'liveworksheets',
  'cartoon', 'illustration', 'sketch', 'drawing', 'jewelry', 'jewellery', 'diamond', 'necklace', 'earring',
  'drone', 'fitness', 'abs-', 'workout', 'bodybuilding', 'actor', 'actress', 'bachchan', 'portrait', 'avatar',
  'alamy.com', 'shutterstock', 'istockphoto', 'depositphotos', 'dreamstime', '123rf',
  'vecteezy', 'etsy.com', 'made-in-china', 'alibaba', 'aliexpress', 'amazon.', 'flipkart',
  '.svg', '.gif', 'lookaside.fbsbx.com', 'lookaside.instagram.com', 'bingo.icbse.com',
  'mah-b.ed', 'merkur.de', 'pressassociation', 'scribdassets.com', 'youtube.com', 'ytimg.com',
  'wallpaper', 'wallpapers', 'pngall', 'pngtree', 'freepng', 'independent.co.uk', 'britannica.com',
  'timesofisrael', 'mahmoud', 'probatsman.com', 'filmfare', 'analyticsjobs', 'personalpowertraining',
  'facts.net', 'wallpapercave', 'pensionerfitness', 'duchuymobile', 'motionbgs', 'windows10spotlight',
  'alonhadat', 'wallpaperaccess', 'wallpapercrafter', 'bhagwanpuja', 'publicdomainpictures',
  'uhdpaper', 'placeholder', 'banner_blank', 'default_image', 'no-image', 'null', 'undefined', 'data:image', 'x-raw-image'
];

function isCleanCampusPhoto(url) {
  if (!url || typeof url !== 'string' || !url.startsWith('http')) return false;
  const u = url.toLowerCase();
  for (const p of STRICT_REJECT) {
    if (u.includes(p)) return false;
  }
  return true;
}

// 2. High-priority educational portals
const PREFERRED_PORTALS = [
  'collegedunia.com', 'shiksha', 'careers360.mobi', 'universitykart.com',
  'collegebatch.com', 'jdmagicbox.com', 'getmyuni.com', 'collegedekho.com',
  'agarum.com', 'campusoption.com', '.ac.in', '.edu.in', 'wikimedia.org'
];

function cleanCollegeName(name) {
  return String(name || '')
    .replace(/\b(Answered Questions|QnA|Admissions Open|Admission|Overview|Ranking|Placements|Cutoff|Fee Structure|2024|2025|2026)\b/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function fetchRealCampusPhotos(name, loc, state) {
  const clean = cleanCollegeName(name);
  const qStr = `${clean} ${loc || ''} ${state || ''} campus building`;
  const q = encodeURIComponent(qStr);
  const url = `https://www.bing.com/images/search?q=${q}&qft=+filterui:imagesize-large`;

  return new Promise((resolve) => {
    const req = https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9'
      },
      timeout: 10000
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const matches = [...data.matchAll(/murl&quot;:&quot;(http[^&]+?)&quot;/g)].map(m => m[1]);
        const portalMatches = [];
        const otherMatches = [];

        for (const u of matches) {
          if (isCleanCampusPhoto(u)) {
            const isPref = PREFERRED_PORTALS.some(p => u.toLowerCase().includes(p));
            if (isPref) {
              portalMatches.push(u);
            } else {
              otherMatches.push(u);
            }
          }
        }

        const sorted = [...portalMatches, ...otherMatches];
        const unique = [...new Set(sorted)];
        resolve(unique);
      });
    });

    req.on('error', () => resolve([]));
    req.on('timeout', () => { req.destroy(); resolve([]); });
  });
}

// 3. Identify all colleges needing real image upgrade
const collegesToEnrich = [];

colleges.forEach((c, idx) => {
  // Always clean name
  c.name = cleanCollegeName(c.name);

  // Always ensure proper Google Map URL
  if (!c.mapUrl || !c.mapUrl.startsWith('http')) {
    c.mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(c.name + ' ' + (c.location || '') + ' ' + (c.state || ''))}`;
  }

  const img = (c.img || '').toLowerCase();
  const needsUpgrade = img.includes('unsplash.com') || !isCleanCampusPhoto(c.img);

  if (needsUpgrade) {
    collegesToEnrich.push({ college: c, index: idx });
  }
});

console.log(`Found ${collegesToEnrich.length} colleges needing real campus photo upgrades.`);

const CONCURRENCY = 16;
let completed = 0;
let upgradedCount = 0;
let lastSave = Date.now();

function saveToDisk() {
  fs.writeFileSync(siteDataPath, JSON.stringify(siteData, null, 2), 'utf8');
  console.log(`💾 [SAVE] Database updated! Real photos upgraded: ${upgradedCount} | Done: ${completed}/${collegesToEnrich.length}`);
}

async function worker(queue) {
  while (queue.length > 0) {
    const item = queue.shift();
    if (!item) break;

    const { college } = item;
    try {
      const photos = await fetchRealCampusPhotos(college.name, college.location, college.state);
      if (photos.length > 0) {
        college.img = photos[0];
        college.gallery = photos.slice(0, 4);
        if (college.gallery.length < 2) {
          college.gallery.push(photos[0]);
        }
        upgradedCount++;
      }
    } catch (e) {}

    completed++;
    if (completed % 25 === 0 || queue.length === 0) {
      const pct = ((completed / collegesToEnrich.length) * 100).toFixed(1);
      console.log(`⏳ [${pct}%] ${completed}/${collegesToEnrich.length} colleges processed | Upgraded: ${upgradedCount}`);
      if (Date.now() - lastSave > 8000 || queue.length === 0) {
        saveToDisk();
        lastSave = Date.now();
      }
    }
  }
}

async function runPipeline() {
  console.log(`Starting ${CONCURRENCY} parallel worker streams to fetch authentic college photos...`);
  const queue = [...collegesToEnrich];
  const workers = [];
  for (let i = 0; i < CONCURRENCY; i++) {
    workers.push(worker(queue));
  }
  await Promise.all(workers);
  saveToDisk();
  console.log(`\n================================================================`);
  console.log(`🎉 PIPELINE COMPLETE! Upgraded ${upgradedCount} colleges with real campus photos.`);
  console.log(`================================================================`);
}

runPipeline().catch(console.error);
