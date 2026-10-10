const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');
const raw = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const colleges = raw.colleges || [];

const junkPatterns = [
  /alumni/i,
  /principal/i,
  /faculty/i,
  /event/i,
  /news/i,
  /prospectus/i,
  /republic/i,
  /independence/i,
  /demo/i,
  /480x330/i,
  /whatsapp/i,
  /screenshot/i,
  /career-topbg/i,
  /download\s*_\d+_/i,
  /staff/i,
  /teacher/i,
  /director/i,
  /chancellor/i,
  /avatar/i,
  /profile/i,
  /badge/i,
  /certificate/i,
  /placement/i,
  /wire/i,
  /notice/i
];

const flagged = [];

colleges.forEach(c => {
  const img = (c.image || c.imageUrl || '').trim();
  for (const pat of junkPatterns) {
    if (pat.test(img)) {
      flagged.push({ id: c.id, name: c.name, state: c.state || c.location, img, pattern: pat.toString() });
      break;
    }
  }
});

console.log(`Total flagged colleges with junk/non-campus patterns: ${flagged.length}`);
flagged.forEach(f => {
  console.log(`[${f.id}] ${f.name} (${f.state}) -> ${f.pattern}: ${f.img}`);
});
