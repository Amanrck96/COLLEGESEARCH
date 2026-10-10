const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const data = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const colleges = Array.isArray(data) ? data : (data.colleges || []);

// List of strictly trusted educational domains
const TRUSTED_DOMAINS = [
  'collegedunia.com',
  'careers360.mobi',
  'careers360.com',
  'shiksha.com',
  'collegedekho.com',
  'jagranjosh.com',
  'getmyuni.com',
  'careerindia.com',
  'collegebatch.com',
  'universitykart.com',
  'kollegeapply.com',
  'campusoption.com',
  'vidyavision.com',
  'joonsquare.com',
  'studyclap.com',
  'studyplaces.co.in',
  'yuvamind.com',
  'admissionnotification.in',
  'edufever.in',
  'comedk.org',
  'indianexpress.com',
  'thehindu.com',
  'news18.com',
  'ndtv.com',
  'educationpost.in',
  'getmycollege.com',
  'obcrights.org',
  'after10thwhat.com',
  'hexallt.com',
  'campusways.com'
];

function isTrustedUrl(url) {
  if (!url || typeof url !== 'string') return false;
  if (url.startsWith('/images/campuses/')) return true; // Local verified photo!

  try {
    const parsed = new URL(url);
    const host = parsed.hostname.toLowerCase().replace('www.', '');

    // Official Indian educational / government domains
    if (host.endsWith('.ac.in') || host.endsWith('.edu.in') || host.endsWith('.res.in') || host.endsWith('.gov.in') || host.endsWith('.nic.in')) {
      return true;
    }

    // Official trusted portals
    for (const td of TRUSTED_DOMAINS) {
      if (host.includes(td)) return true;
    }

    // Wikimedia only if it actually looks like an educational / campus building file
    if (host.includes('wikimedia.org') || host.includes('wikipedia.org')) {
      const lowerPath = parsed.pathname.toLowerCase();
      // reject coats of arms, flags, logos, maps, animals, symbols
      const wmBad = ['flag', 'coat_of_arms', 'logo', 'seal', 'emblem', 'map', 'drawing', 'chart', 'symbol', 'vector', 'icon'];
      if (wmBad.some(b => lowerPath.includes(b))) return false;
      return true;
    }

    return false;
  } catch (e) {
    return false;
  }
}

let trustedCount = 0;
let untrustedCount = 0;
const untrustedSamples = [];

colleges.forEach(c => {
  const img = c.image || '';
  if (isTrustedUrl(img)) {
    trustedCount++;
  } else {
    untrustedCount++;
    if (untrustedSamples.length < 30) {
      untrustedSamples.push({ id: c.id, name: c.name, img });
    }
  }
});

console.log(`Trusted URLs (Local / Portal / Edu): ${trustedCount}`);
console.log(`Untrusted / Random Third-Party URLs: ${untrustedCount}`);
console.log('\nSample of untrusted URLs that would be replaced with verified campus buildings:');
untrustedSamples.forEach(s => console.log(`- ID ${s.id} | ${s.name} | ${s.img}`));
