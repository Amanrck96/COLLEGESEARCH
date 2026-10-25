const fs = require('fs');
const path = require('path');

console.log('🔍 Starting Comprehensive Health & Relevance Audit across all 12,656 colleges...');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const rawData = fs.readFileSync(siteDataPath, 'utf8');
const data = JSON.parse(rawData);

const isArray = Array.isArray(data);
const colleges = isArray ? data : (data.colleges || []);

// 1. Audit categories
const issues = {
  missingImage: [],
  nonLocalUnverified: [],
  suspiciousKeywords: [],
  crossStateMismatch: []
};

const SUSPICIOUS_WORDS = [
  'logo', 'icon', 'seal', 'emblem', 'avatar', 'banner', 'slider',
  'lab', 'laboratory', 'library_inside', 'classroom', 'auditorium',
  'sports', 'ground', 'hostel_room', 'cafeteria', 'canteen', 'bus',
  'transport', 'certificate', 'brochure', 'admission', 'event', 'annual',
  'festival', 'celebration', 'seminar', 'conference', 'meeting', 'office',
  'director', 'principal', 'dean', 'faculty_member', 'staff', 'student',
  'drawing', 'wallpaper', 'animal', 'bird', 'flower', 'map', 'flag',
  'chart', 'graph', 'diagram', 'cartoon', 'anime', 'meme', 'tattoo'
];

colleges.forEach(c => {
  const img = (c.image || '').toLowerCase();
  const name = c.name || '';
  const state = (c.state || '').toLowerCase();
  const city = (c.city || '').toLowerCase();

  // Missing
  if (!img) {
    issues.missingImage.push({ id: c.id, name });
    return;
  }

  // Check suspicious keywords
  if (!img.startsWith('/images/campuses/')) {
    for (const sw of SUSPICIOUS_WORDS) {
      if (img.includes(sw) && !img.includes('campus') && !img.includes('college') && !img.includes('university') && !img.includes('building')) {
        issues.suspiciousKeywords.push({ id: c.id, name, city, state, img: c.image, keyword: sw });
        break;
      }
    }
  }
});

console.log(`\nAudit Results:`);
console.log(`- Total Missing Images: ${issues.missingImage.length}`);
console.log(`- Suspicious Non-Building Keyword Hits: ${issues.suspiciousKeywords.length}`);

if (issues.suspiciousKeywords.length > 0) {
  console.log('\nTop 30 Suspicious Keyword Hits:');
  issues.suspiciousKeywords.slice(0, 30).forEach(s => {
    console.log(`- ID ${s.id} | ${s.name} [${s.city}, ${s.state}] | KW: ${s.keyword} | URL: ${s.img}`);
  });
}
