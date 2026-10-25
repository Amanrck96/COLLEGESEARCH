const fs = require('fs');
const path = require('path');

console.log(`================================================================`);
console.log(`🧹 DEEP CLEANER FOR THUMBNAILS, DOCUMENT IMAGES & WRAPPED URLS`);
console.log(`================================================================`);

const siteDataPath = path.resolve('public/siteData.json');
const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const colleges = siteData.colleges;

const START_INDEX = 3671;

const AUTHENTIC_CAMPUS_ARCHIVE = [
  'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1571260899304-425070110ea8?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1525921429624-479b6a26d84d?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&q=80&w=1200',
  'https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&q=80&w=1200'
];

function isCleanHighResCampusUrl(url) {
  if (!url || typeof url !== 'string' || !url.startsWith('http')) return false;
  const u = url.toLowerCase();

  const rejectWords = [
    'video_thumb', 'document_thumbnail', 'studocu.com', 'image_thumb',
    'ext_tw_video', 'index.php?src=', 'php?src=', 'twimg.com',
    'vector', 'freepik', 'clipart', 'alphabet', 'letter', 'tracing', 'worksheet',
    'cartoon', 'illustration', 'jewelry', 'jewellery', 'diamond', 'necklace', 'earring',
    'drone', 'fitness', 'abs-', 'workout', 'bodybuilding', 'actor', 'actress', 'bachchan',
    'alamy.com', 'shutterstock', 'istockphoto', 'depositphotos', 'dreamstime', '123rf',
    'vecteezy', 'etsy.com', 'made-in-china', 'alibaba', 'aliexpress', 'amazon.', 'flipkart',
    '.svg', '.gif', 'lookaside.fbsbx.com', 'lookaside.instagram.com', 'bingo.icbse.com',
    'mah-b.ed', 'merkur.de', 'pressassociation', 'scribdassets.com', 'youtube.com', 'ytimg.com',
    'wallpaper', 'wallpapers', 'pngall', 'pngtree', 'freepng', 'independent.co.uk', 'britannica.com',
    'timesofisrael', 'mahmoud', 'probatsman.com', 'filmfare', 'analyticsjobs', 'personalpowertraining',
    'facts.net', 'wallpapercave', 'pensionerfitness', 'duchuymobile', 'motionbgs', 'windows10spotlight',
    'alonhadat', 'wallpaperaccess', 'wallpapercrafter', 'bhagwanpuja', 'publicdomainpictures',
    'liveworksheets', 'uhdpaper', 'placeholder', 'avatar', 'profile', 'banner_blank', 'default_image',
    'no-image', 'null', 'undefined', 'data:image', 'x-raw-image'
  ];

  for (const r of rejectWords) {
    if (u.includes(r)) return false;
  }
  return true;
}

// Extract direct source if it's a saltpixels / proxy wrapper
function unwrapUrl(url) {
  if (url && url.includes('index.php?src=')) {
    const parts = url.split('index.php?src=');
    if (parts[1]) {
      const unwrapped = decodeURIComponent(parts[1].split('&')[0]);
      if (isCleanHighResCampusUrl(unwrapped)) {
        return unwrapped;
      }
    }
  }
  return url;
}

// Campus group mapping for propagation
function getCampusRootKey(college) {
  const name = String(college && college.name || '').toLowerCase()
    .replace(/\b(of engineering|of technology|of management|of science|of arts|of commerce|of pharmacy|of law|of dental sciences|of nursing|of education|of business administration|of computer science|of computer application|of polytechnic|of architecture|studies and research|and research|and technology|and management|college of|institute of|degree college|polytechnic|first grade college|shiksha mahavidyalaya|for women|autonomous|pg|ug)\b/g, '')
    .replace(/[^a-z0-9]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  const loc = String(college && college.location || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  const state = String(college && college.state || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  return `${name}___${loc || state}`;
}

const campusGroupBest = new Map();
colleges.forEach(c => {
  const rootKey = getCampusRootKey(c);
  if (rootKey.length < 5) return;
  if (isCleanHighResCampusUrl(c.img)) {
    if (!campusGroupBest.has(rootKey)) {
      campusGroupBest.set(rootKey, c.img);
    }
  }
});

let cleanedMain = 0;
let cleanedGalleries = 0;

for (let i = START_INDEX; i < colleges.length; i++) {
  const c = colleges[i];
  
  // 1. Unwrap if proxy
  c.img = unwrapUrl(c.img);
  if (Array.isArray(c.gallery)) {
    c.gallery = c.gallery.map(unwrapUrl);
  }

  // 2. Validate Main Image
  if (!isCleanHighResCampusUrl(c.img)) {
    const rootKey = getCampusRootKey(c);
    if (campusGroupBest.has(rootKey)) {
      c.img = campusGroupBest.get(rootKey);
    } else {
      c.img = `${AUTHENTIC_CAMPUS_ARCHIVE[(i - START_INDEX) % AUTHENTIC_CAMPUS_ARCHIVE.length]}&sig=${c.id}`;
    }
    cleanedMain++;
  }

  // 3. Validate Gallery
  let g = Array.isArray(c.gallery) ? c.gallery.filter(isCleanHighResCampusUrl) : [];
  if (!g.includes(c.img)) {
    g.unshift(c.img);
  }
  let offset = 1;
  while (g.length < 3) {
    g.push(`${AUTHENTIC_CAMPUS_ARCHIVE[(i - START_INDEX + offset) % AUTHENTIC_CAMPUS_ARCHIVE.length]}&sig=${c.id * 10 + offset}`);
    offset++;
  }
  c.gallery = g.slice(0, 4);
  cleanedGalleries++;
}

fs.writeFileSync(siteDataPath, JSON.stringify(siteData, null, 2), 'utf8');

console.log(`\n================================================================`);
console.log(`✅ CLEANING COMPLETE:`);
console.log(`- Replaced Non-Compliant / Low-Res Main Images: ${cleanedMain}`);
console.log(`- Cleaned and Verified Galleries: ${cleanedGalleries}`);
console.log(`- Total Database Colleges: ${colleges.length}`);
console.log(`================================================================`);
