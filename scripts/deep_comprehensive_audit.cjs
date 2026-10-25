const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');
const publicDir = path.join(__dirname, '..', 'public');

if (!fs.existsSync(siteDataPath)) {
  console.error("siteData.json not found!");
  process.exit(1);
}

const raw = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const colleges = Array.isArray(raw) ? raw : (raw.colleges || []);
console.log(`Total colleges loaded: ${colleges.length}`);

let missingImages = [];
let localFileNotFound = [];
let suspiciousImages = [];
let urlUsageMap = new Map();

const badKeywords = [
  'drawing', 'sketch', 'clipart', 'vector', 'cartoon', 'illustration', 
  'flag', 'coat_of_arms', 'emblem', 'map', 'locator', 'diagram', 'chart',
  'stamp', 'seal', 'logo', 'crest', 'icon', 'portrait', 'statue',
  'player', 'cricket', 'soccer', 'football', 'animal', 'bird', 'flower',
  'food', 'recipe', 'hotel_room', 'bedroom', 'bed', 'bathroom', 'kitchen',
  'tattoo', 'mehndi', 'cylinder', 'gas', 'car', 'bike', 'motorcycle'
];

colleges.forEach((col, idx) => {
  const img = col.image || col.imageUrl || col.img;
  if (!img || typeof img !== 'string' || img.trim() === '') {
    missingImages.push({ id: col.id, name: col.name, index: idx });
    return;
  }

  const cleanImg = img.trim();

  // Check if local file exists
  if (cleanImg.startsWith('/images/')) {
    const localRel = cleanImg.replace(/^\//, '').replace(/\//g, path.sep);
    const fullPath = path.join(publicDir, localRel);
    if (!fs.existsSync(fullPath)) {
      localFileNotFound.push({ id: col.id, name: col.name, img: cleanImg, path: fullPath });
    }
  }

  // Check suspicious keywords in filename or url
  const lower = cleanImg.toLowerCase();
  for (const kw of badKeywords) {
    if (lower.includes(kw) && !lower.includes('campus') && !lower.includes('college') && !lower.includes('university') && !lower.includes('institute')) {
      suspiciousImages.push({ id: col.id, name: col.name, img: cleanImg, keyword: kw });
      break;
    }
  }

  // Count usage
  if (!urlUsageMap.has(cleanImg)) {
    urlUsageMap.set(cleanImg, []);
  }
  urlUsageMap.get(cleanImg).push({ id: col.id, name: col.name, state: col.state || col.location });
});

console.log("\n--- AUDIT RESULTS ---");
console.log(`Missing images: ${missingImages.length}`);
if (missingImages.length > 0) {
  console.log("Missing image entries:", missingImages);
}

console.log(`Local files referenced but NOT found on disk: ${localFileNotFound.length}`);
if (localFileNotFound.length > 0) {
  console.log("Missing local files on disk:", localFileNotFound);
}

console.log(`Suspicious keyword matches: ${suspiciousImages.length}`);
if (suspiciousImages.length > 0) {
  console.log("Suspicious matches:", suspiciousImages);
}

console.log(`Total unique image URLs/paths in database: ${urlUsageMap.size}`);

// Check for broken external URLs or unsecure patterns
let httpCount = 0;
let httpsCount = 0;
let localCount = 0;

for (const [url, list] of urlUsageMap.entries()) {
  if (url.startsWith('/images/')) {
    localCount += list.length;
  } else if (url.startsWith('https://')) {
    httpsCount += list.length;
  } else if (url.startsWith('http://')) {
    httpCount += list.length;
  }
}

console.log(`Local static images: ${localCount}`);
console.log(`HTTPS external images: ${httpsCount}`);
console.log(`HTTP external images (needs fix if any): ${httpCount}`);
