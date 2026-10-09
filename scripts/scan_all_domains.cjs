const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');
const rawData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const colleges = Array.isArray(rawData) ? rawData : rawData.colleges;

const domains = {};
const suspiciousImages = [];

const TRUSTED_PORTAL_KEYWORDS = [
  'shiksha', 'collegedunia', 'careers360', 'wikimedia', 'admissionnotification',
  'collegebatch', 'vidyavision', 'jagranjosh', 'targetstudy', 'getmyuni',
  'collegedekho', 'highereducationdigest', 'educationtoday', 'mbauniverse',
  'careerandcampus', 'jdmagicbox', 'justdial', 'licdn', 'facebook', 'fbcdn',
  'googleusercontent', 'wp-content', 'edu', 'ac.in', 'org', 'nic.in', 'gov.in'
];

const KNOWN_JUNK_PATTERNS = [
  /outfit/i, /dress/i, /style/i, /fashion/i, /hair/i, /salon/i, /makeup/i, /beauty/i,
  /recipe/i, /food/i, /dish/i, /cake/i, /restaurant/i, /menu/i,
  /car\b/i, /bike\b/i, /auto\b/i, /cab\b/i, /taxi/i, /mechanic/i,
  /film/i, /movie/i, /song/i, /lyrics/i, /actor/i, /actress/i, /trailer/i, /cinema/i,
  /schematic/i, /diagram/i, /chart/i, /vector/i, /clipart/i, /drawing/i, /sketch/i,
  /jewelry/i, /jewel/i, /necklace/i, /ring\b/i, /watch\b/i, /shoes/i, /shirt/i, /pants/i,
  /wallpaper/i, /background/i, /aesthetic/i, /quote/i, /greeting/i, /wishes/i,
  /sheforstyle/i, /pinterest/i, /instagram\.com/i, /tiktok/i
];

colleges.forEach(c => {
  const img = c.img || c.image || '';
  try {
    const u = new URL(img);
    domains[u.hostname] = (domains[u.hostname] || 0) + 1;
    for (const pat of KNOWN_JUNK_PATTERNS) {
      if (pat.test(img)) {
        suspiciousImages.push({ id: c.id, name: c.name, img, pattern: pat.toString() });
        break;
      }
    }
  } catch (e) {
    suspiciousImages.push({ id: c.id, name: c.name, img, pattern: 'invalid_url' });
  }
});

const sorted = Object.entries(domains).sort((a,b) => b[1] - a[1]);
console.log('Total distinct domains:', sorted.length);
console.log('\nTop 25 domains:');
sorted.slice(0, 25).forEach(([dom, cnt]) => console.log(`  ${dom}: ${cnt}`));

console.log(`\nSuspicious / Junk Images Found: ${suspiciousImages.length}`);
if (suspiciousImages.length > 0) {
  console.log('Sample 15 suspicious:');
  suspiciousImages.slice(0, 15).forEach(s => console.log(`  [ID ${s.id}] ${s.name}: ${s.img} (${s.pattern})`));
}
