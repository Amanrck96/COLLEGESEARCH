const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');
const raw = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const colleges = raw.colleges || [];

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

// Precise bad keywords (only matches real junk paths)
const badPathRegexes = [
  /\/news\//i,
  /\/article_images\//i,
  /\/articles\//i,
  /\/reviewphotos\//i,
  /\/social-media\//i,
  /\/events?\//i,
  /\/faculty(?:_images)?\//i,
  /\/staff\//i,
  /\/people\//i,
  /\/team-member\//i,
  /\/alumni\//i,
  /\/prospectus\//i,
  /\/notice\//i,
  /\/placement\//i,
  /\/gallery\/.*(?:wire|farewell|republic|independence|cricket|prize|medal)/i,
  /whatsapp/i,
  /screenshot/i,
  /download\s*_\d+_/i,
  /career-topbg/i,
  /480x330/i,
  /(?:drawing|sketch|clipart|cartoon|illustration)/i,
  /(?:logo|crest|flag|coat_of_arms|emblem|stamp|seal)\.(?:png|jpg|jpeg|svg|webp)/i,
  /(?:tattoo|mehndi|cylinder)/i,
  /hostel-room|hostel_room|bed_room|bedroom/i,
  /principal|chancellor|director|chairman|hod-/i
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

  // Check bad path patterns
  for (const rx of badPathRegexes) {
    if (rx.test(img)) {
      needsReplacement.push({ id: c.id, name: c.name, state: c.state || c.location, img, reason: `Pattern match: ${rx.toString()}` });
      return;
    }
  }

  // Check domain trust
  try {
    const u = new URL(img);
    const domain = u.hostname;
    
    // News sites or personal subdomains
    if (
      domain.includes('news18') ||
      domain.includes('indianexpress') ||
      domain.includes('timesofindia') ||
      domain.includes('thehindu') ||
      domain.includes('ndtv') ||
      domain.startsWith('buildclub.') ||
      domain.startsWith('civil.') ||
      domain.startsWith('facweb.') ||
      domain.startsWith('students.') ||
      domain.startsWith('smail.') ||
      domain.startsWith('project.')
    ) {
      needsReplacement.push({ id: c.id, name: c.name, state: c.state || c.location, img, reason: `Untrusted/News/Student domain: ${domain}` });
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
console.log("\nReasons breakdown:");
console.table(Object.entries(reasons).sort((a,b) => b[1] - a[1]).slice(0, 15));
