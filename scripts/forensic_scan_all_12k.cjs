const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const data = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const colleges = Array.isArray(data) ? data : (data.colleges || []);

console.log(`Starting Forensic Scan of all ${colleges.length} colleges...`);

// Let's check the distribution of all images:
let localCampusCount = 0;
let externalEduCount = 0;
let suspiciousList = [];

// Strictest list of non-campus keywords
const JUNK_KEYWORDS = [
  'drawing', 'wallpaper', 'animal', 'bird', 'dog', 'cat', 'fish', 'whale',
  'dolphin', 'pelican', 'flower', 'plant', 'tree', 'sunset', 'sunrise',
  'beach', 'river', 'mountain', 'hill', 'forest', 'sky', 'car', 'bike',
  'truck', 'motorcycle', 'vehicle', 'toy', 'game', 'cartoon', 'anime',
  'manga', 'comic', 'meme', 'tattoo', 'laptop', 'mobile', 'phone',
  'cylinder', 'tank', 'pipe', 'cable', 'wire', 'diagram', 'chart',
  'graph', 'map', 'flag', 'seal', 'symbol', 'icon', 'logo', 'avatar',
  'person', 'portrait', 'student', 'girl', 'boy', 'woman', 'man',
  'cricket', 'football', 'soccer', 'tennis', 'stadium', 'ground',
  'trophy', 'medal', 'certificate', 'book', 'pen', 'pencil', 'board',
  'food', 'cake', 'plate', 'dish', 'cup', 'bottle', 'box', 'fashion',
  'dress', 'shoe', 'shirt', 'cloth', 'actor', 'actress', 'movie',
  'poster', 'banner', 'sign', 'board', 'letter', 'alphabet', 'font',
  'pattern', 'texture', 'background', 'abstract', 'render', '3d',
  'illustration', 'clipart', 'vector', 'stock', 'shutter', 'deposit',
  'getty', 'alamy', 'freepik', 'pixabay', 'unsplash', 'pexels'
];

colleges.forEach(c => {
  const img = (c.image || '').toLowerCase();
  if (img.startsWith('/images/campuses/')) {
    localCampusCount++;
    return;
  }
  
  externalEduCount++;
  for (const kw of JUNK_KEYWORDS) {
    if (img.includes(kw)) {
      suspiciousList.push({ id: c.id, name: c.name, img, kw });
      break;
    }
  }
});

console.log(`\nLocal Verified Campuses: ${localCampusCount}`);
console.log(`External Images: ${externalEduCount}`);
console.log(`Suspicious Keyword Hits in External Images: ${suspiciousList.length}`);

if (suspiciousList.length > 0) {
  console.log('\nSample Suspicious Hits:');
  suspiciousList.slice(0, 20).forEach(s => {
    console.log(`- ID ${s.id} | ${s.name} | Keyword: ${s.kw}`);
    console.log(`  URL: ${s.img}`);
  });
}
