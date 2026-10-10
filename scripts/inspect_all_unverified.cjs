const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');
const raw = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const colleges = raw.colleges || [];

// Trusted external CDNs where images are known to be clean campus photos (excluding news/review/staff paths)
const trustedCDNs = [
  'images.shiksha.com',
  'cache.careers360.mobi',
  'image-static.collegedunia.com',
  'www.collegebatch.com',
  'media.getmyuni.com',
  'img.jagranjosh.com',
  'www.vidyavision.com',
  'cdn.universitykart.com',
  'assets.kollegeapply.com',
  'upload.wikimedia.org'
];

const badKeywords = [
  'news', 'article', 'cutoff', 'exam', 'admission', 'syllabus', 'result',
  'faculty', 'staff', 'principal', 'chancellor', 'director', 'chairman', 'teacher',
  'person', 'people', 'alumni', 'student', 'author', 'avatar', 'profile', 'member',
  'event', 'farewell', 'republic', 'independence', 'sports', 'workshop', 'seminar',
  'prize', 'medal', 'trophy', 'award', 'cricket', 'football', 'yoga', 'conquest',
  'reviewphotos', 'screenshot', 'whatsapp', 'download_', 'download%20_', 'career-topbg',
  'social-media', '480x330', 'demo', 'placeholder', 'dummy', 'sample', 'test',
  'drawing', 'sketch', 'vector', 'clipart', 'cartoon', 'illustration', 'map', 'locator',
  'diagram', 'chart', 'flag', 'coat_of_arms', 'emblem', 'stamp', 'seal', 'logo', 'crest',
  'hotel-room', 'hostel-room', 'bedroom', 'bathroom', 'kitchen', 'food', 'dish',
  'tattoo', 'mehndi', 'cylinder', 'gas', 'car', 'bike', 'motorcycle', 'bus'
];

let cleanCount = 0;
let needsReplacement = [];

colleges.forEach(c => {
  const img = (c.image || c.imageUrl || '').trim();
  
  if (!img) {
    needsReplacement.push({ id: c.id, name: c.name, state: c.state || c.location, reason: 'Empty image' });
    return;
  }

  // Local verified images are always trusted
  if (img.startsWith('/images/campuses/')) {
    cleanCount++;
    return;
  }

  // Check insecure HTTP
  if (img.startsWith('http://')) {
    needsReplacement.push({ id: c.id, name: c.name, state: c.state || c.location, img, reason: 'Insecure HTTP' });
    return;
  }

  const lower = img.toLowerCase();

  // Check bad keywords
  for (const kw of badKeywords) {
    if (lower.includes(kw)) {
      needsReplacement.push({ id: c.id, name: c.name, state: c.state || c.location, img, reason: `Keyword match: ${kw}` });
      return;
    }
  }

  // Check domain trust
  try {
    const u = new URL(img);
    const domain = u.hostname;
    
    // If domain is not in trusted CDNs or is a random personal/faculty/unverified subdomain
    const isTrusted = trustedCDNs.some(t => domain.endsWith(t));
    if (!isTrusted) {
      needsReplacement.push({ id: c.id, name: c.name, state: c.state || c.location, img, reason: `Untrusted / unverified domain: ${domain}` });
      return;
    }
  } catch (e) {
    needsReplacement.push({ id: c.id, name: c.name, state: c.state || c.location, img, reason: 'Invalid URL format' });
    return;
  }

  cleanCount++;
});

console.log(`Total colleges: ${colleges.length}`);
console.log(`Clean, verified campus images: ${cleanCount}`);
console.log(`Colleges needing replacement: ${needsReplacement.length}`);

const reasons = {};
needsReplacement.forEach(r => {
  reasons[r.reason] = (reasons[r.reason] || 0) + 1;
});
console.log("\nTop reasons for replacement:");
console.table(Object.entries(reasons).sort((a,b) => b[1] - a[1]).slice(0, 15));
