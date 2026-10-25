const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');
const d = JSON.parse(fs.readFileSync(siteDataPath, 'utf8')).colleges;

const TRUSTED_DOMAINS = [
  'images.shiksha.com',
  'shiksha.com',
  'image-static.collegedunia.com',
  'collegedunia.com',
  'cache.careers360.mobi',
  'careers360.com',
  'www.collegebatch.com',
  'collegebatch.com',
  'www.vidyavision.com',
  'vidyavision.com',
  'media.collegedekho.com',
  'collegedekho.com',
  'media.getmyuni.com',
  'getmyuni.com',
  'img.jagranjosh.com',
  'jagranjosh.com',
  'admissionnotification.in',
  'content.jdmagicbox.com',
  'images.jdmagicbox.com',
  'jdmagicbox.com',
  'upload.wikimedia.org',
  'wikimedia.org',
  'campuspro.co.in',
  'targetstudy.com',
  'highereducationdigest.com',
  'educationtoday.com',
  'mbauniverse.com',
  'careerandcampus.com'
];

function isTrustedEducationUrl(url = '') {
  if (!url || typeof url !== 'string' || !url.startsWith('http')) return false;
  try {
    const hostname = new URL(url).hostname.toLowerCase();
    if (hostname.endsWith('.ac.in') || hostname.endsWith('.edu.in') || hostname.endsWith('.edu') || hostname.endsWith('.gov.in')) {
      return true;
    }
    return TRUSTED_DOMAINS.some(td => hostname === td || hostname.endsWith('.' + td));
  } catch (e) {
    return false;
  }
}

let trustedCount = 0;
let untrustedCount = 0;
const untrustedSamples = [];

d.forEach(c => {
  const img = c.img || c.image || '';
  if (isTrustedEducationUrl(img)) {
    trustedCount++;
  } else {
    untrustedCount++;
    untrustedSamples.push({ id: c.id, name: c.name, img });
  }
});

console.log('================ AUDIT OF IMAGE SOURCES ================');
console.log(`Total Colleges: ${d.length}`);
console.log(`Trusted Educational / Campus Domains: ${trustedCount} (${((trustedCount/d.length)*100).toFixed(1)}%)`);
console.log(`Untrusted / Random Web Domains: ${untrustedCount} (${((untrustedCount/d.length)*100).toFixed(1)}%)`);
console.log('=========================================================\n');

console.log('Sample 20 untrusted domain images to be purged:');
untrustedSamples.slice(0, 20).forEach((s, i) => {
  console.log(`${i+1}. [ID ${s.id}] ${s.name} -> ${s.img}`);
});
