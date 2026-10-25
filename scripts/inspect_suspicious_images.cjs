const fs = require('fs');
const path = require('path');
const siteData = JSON.parse(fs.readFileSync(path.resolve('public/siteData.json'), 'utf8'));
const colleges = siteData.colleges;

const START_INDEX = 3671;
const newColleges = colleges.slice(START_INDEX);

const SUSPICIOUS_PATTERNS = [
  'staticmap', 'maps.googleapis', 'static-map', 'streetview',
  'yumpu', 'docplayer', 'issuu', 'slideshare', 'pdf', 'document',
  'magazine', 'epaper', 'brochure', 'pamphlet', 'flyer',
  'avatar', 'logo', 'icon', 'symbol', 'vector', 'clipart',
  'sketch', 'drawing', 'illustration', 'badge', 'emblem',
  'certificate', 'hallticket', 'admitcard', 'result', 'marksheet',
  'cutout', 'transparent', 'nobg', 'removebg', 'stock-vector',
  'stock-photo', 'depositphotos', 'shutterstock', 'alamy', 'dreamstime',
  'gettyimages', '123rf', 'vecteezy', 'freepik', 'canva'
];

const flagged = [];

newColleges.forEach(c => {
  const u = (c.img || '').toLowerCase();
  for (const pat of SUSPICIOUS_PATTERNS) {
    if (u.includes(pat)) {
      flagged.push({ id: c.id, name: c.name, pat, img: c.img });
      break;
    }
  }
});

console.log(`Found ${flagged.length} suspicious images in newly added colleges.`);
if (flagged.length > 0) {
  console.log('Sample flagged colleges:');
  console.log(JSON.stringify(flagged.slice(0, 20), null, 2));
}
