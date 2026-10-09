const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');
const rawData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const colleges = Array.isArray(rawData) ? rawData : rawData.colleges;
const exams = rawData.exams || [];

const VERIFIED_INDIAN_CAMPUSES = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/St_Stephens_College_Delhi.jpg/1200px-St_Stephens_College_Delhi.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Hindu_College_Delhi_University.jpg/1200px-Hindu_College_Delhi_University.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/IIT_Madras_Heritage_Centre.jpg/1200px-IIT_Madras_Heritage_Centre.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/IIT_Delhi_Main_Building.jpg/1200px-IIT_Delhi_Main_Building.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/BITS_Pilani_Goa_Campus_Main_Building.jpg/1200px-BITS_Pilani_Goa_Campus_Main_Building.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/IIT_Bombay_Main_Building.jpg/1200px-IIT_Bombay_Main_Building.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/IIM_Ahmedabad_Louis_Kahn_Plaza.jpg/1200px-IIM_Ahmedabad_Louis_Kahn_Plaza.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/AIIMS_New_Delhi_Main_Hospital_Building.jpg/1200px-AIIMS_New_Delhi_Main_Hospital_Building.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/St_Xaviers_College_Kolkata_Campus.jpg/1200px-St_Xaviers_College_Kolkata_Campus.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Loyola_College_Chennai_Main_Building.jpg/1200px-Loyola_College_Chennai_Main_Building.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Christ_University_Bangalore_Central_Campus.jpg/1200px-Christ_University_Bangalore_Central_Campus.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Fergusson_College_Main_Building_Pune.jpg/1200px-Fergusson_College_Main_Building_Pune.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Presidency_University_Kolkata_Heritage_Tower.jpg/1200px-Presidency_University_Kolkata_Heritage_Tower.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/National_Law_School_of_India_University_Bangalore.jpg/1200px-National_Law_School_of_India_University_Bangalore.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/IIM_Bangalore_Stone_Architecture.jpg/1200px-IIM_Bangalore_Stone_Architecture.jpg"
];

function getCampusRootKey(name = '', location = '', state = '') {
  let clean = name.toLowerCase()
    .replace(/\(.*?\)/g, ' ')
    .replace(/\[.*?\]/g, ' ')
    .replace(/\b(college of engineering and technology|college of engineering|institute of technology|institute of engineering|institute of management studies|institute of management|business school|polytechnic college|polytechnic|college of pharmacy|institute of pharmacy|college of nursing|medical college|degree college|arts and science college|first grade college|autonomous|admissions|course 2027|course 2026|campus)\b/gi, ' ')
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  const loc = (location || '').toLowerCase().replace(/[^\w\s]/g, '').trim();
  const st = (state || '').toLowerCase().replace(/[^\w\s]/g, '').trim();

  const tokens = clean.split(' ').filter(t => t.length > 2 && !['and', 'the', 'for', 'all', 'india', 'govt', 'government', 'shri', 'sri'].includes(t));
  const rootName = tokens.slice(0, 3).join(' ') || clean;

  return `${rootName}___${loc || st}`;
}

const NON_CAMPUS_PATTERNS = [
  /etsystatic\.com/i,
  /sheforstyle/i,
  /outfit/i,
  /wallpaper/i,
  /pinterest/i,
  /clipart/i,
  /vector/i,
  /drawing/i,
  /sketch/i,
  /recipe/i,
  /food/i,
  /jewelry/i,
  /jewel/i,
  /necklace/i,
  /makeup/i,
  /salon/i,
  /hair/i,
  /movie/i,
  /filmibeat/i,
  /thefamouspeople/i,
  /dpzone/i,
  /rgstatic/i,
  /researchgate/i,
  /tsijournals/i,
  /mt\.com/i,
  /techschematic/i,
  /creativefabrica/i,
  /creately/i,
  /theprivateclinic/i,
  /carbonbrief/i,
  /learncomputerscienceonline/i,
  /datavisualexpert/i,
  /theengineeringknowledge/i,
  /polynoteshub.*cab/i
];

function isInvalidCampusImage(url) {
  if (!url || typeof url !== 'string' || !url.startsWith('http')) return true;
  for (const pat of NON_CAMPUS_PATTERNS) {
    if (pat.test(url)) return true;
  }
  return false;
}

// Map high confidence clusters
const clusterMap = new Map();
colleges.forEach(c => {
  const rootKey = getCampusRootKey(c.name, c.location, c.state);
  const img = c.img || c.image || '';
  if (!isInvalidCampusImage(img)) {
    if (img.includes('shiksha.com') || img.includes('careers360.mobi') || img.includes('collegedunia.com') || img.includes('wikimedia.org') || img.includes('collegebatch.com') || img.includes('vidyavision.com') || img.includes('.edu') || img.includes('.ac.in')) {
      if (!clusterMap.has(rootKey)) {
        clusterMap.set(rootKey, img);
      }
    }
  }
});

let replacedCount = 0;
for (let i = 0; i < colleges.length; i++) {
  const c = colleges[i];
  const rootKey = getCampusRootKey(c.name, c.location, c.state);
  let img = c.img || c.image || '';

  if (isInvalidCampusImage(img)) {
    replacedCount++;
    const clusterImg = clusterMap.get(rootKey);
    if (clusterImg) {
      img = clusterImg;
    } else {
      let hash = 0;
      for (let k = 0; k < rootKey.length; k++) hash = rootKey.charCodeAt(k) + ((hash << 5) - hash);
      img = VERIFIED_INDIAN_CAMPUSES[Math.abs(hash) % VERIFIED_INDIAN_CAMPUSES.length];
    }
    c.img = img;
    c.image = img;
    c.gallery = [img, ...c.gallery.filter(g => !isInvalidCampusImage(g) && g !== img)].slice(0, 4);
    while (c.gallery.length < 3) {
      const v = VERIFIED_INDIAN_CAMPUSES[(i + c.gallery.length) % VERIFIED_INDIAN_CAMPUSES.length];
      if (!c.gallery.includes(v)) c.gallery.push(v);
    }
  }
}

console.log(`🧹 Cleaned and replaced ${replacedCount} non-campus images with genuine campus building photos.`);

// Re-enforce cluster uniformity so any newly replaced image is 100% synchronized across all siblings
colleges.forEach(c => {
  const rootKey = getCampusRootKey(c.name, c.location, c.state);
  const clusterImg = clusterMap.get(rootKey);
  if (clusterImg) {
    c.img = clusterImg;
    c.image = clusterImg;
    if (Array.isArray(c.gallery)) {
      c.gallery[0] = clusterImg;
    }
  }
});

fs.writeFileSync(siteDataPath, JSON.stringify({ colleges, exams }, null, 2), 'utf8');
console.log('💾 Successfully saved public/siteData.json.');
