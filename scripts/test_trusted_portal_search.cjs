const https = require('https');

const TRUSTED_PORTAL_DOMAINS = [
  'collegedunia.com',
  'shiksha.com',
  'images.shiksha.com',
  'cache.careers360.mobi',
  'careers360.com',
  'universitykart.com',
  'collegebatch.com',
  'jdmagicbox.com',
  'content.jdmagicbox.com',
  'getmyuni.com',
  'collegedekho.com',
  'vidyavision.com',
  'kollegeapply.com',
  'assets.kollegeapply.com',
  'targetstudy.com',
  'campusoption.com',
  'wikimedia.org',
  'upload.wikimedia.org'
];

function isTrustedPortal(url) {
  if (!url || typeof url !== 'string') return false;
  const u = url.toLowerCase();
  // Must match trusted educational domain OR .ac.in / .edu.in
  const isEduDomain = u.includes('.ac.in/') || u.includes('.edu.in/') || u.includes('.edu/');
  const isTrustedPortal = TRUSTED_PORTAL_DOMAINS.some(d => u.includes(d));
  if (!isEduDomain && !isTrustedPortal) return false;

  // Strict disqualification even within portals if contains bad tokens
  const bad = ['logo', 'icon', 'favicon', 'badge', 'seal', 'profile', 'avatar', 'actor', 'cricket', 'drawing', 'vector', 'clipart', 'form', 'marksheet', 'result', 'admitcard'];
  return !bad.some(b => u.includes(b));
}

function cleanCollegeName(name) {
  return String(name || '')
    .replace(/\(.*?\)/g, ' ')
    .replace(/\[.*?\]/g, ' ')
    .replace(/\b(Answered Questions|QnA|Admissions Open|Admission|Overview|Ranking|Placements|Cutoff|Fee Structure|2024|2025|2026)\b/gi, '')
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function searchPortalCampusPhoto(name, loc, state) {
  const clean = cleanCollegeName(name);
  const qStr = `${clean} ${loc || ''} ${state || ''} campus building`;
  const q = encodeURIComponent(qStr);
  const url = `https://www.bing.com/images/search?q=${q}&qft=+filterui:imagesize-large`;

  return new Promise((resolve) => {
    const req = https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9'
      },
      timeout: 8000
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const matches = [...data.matchAll(/murl&quot;:&quot;(http[^&]+?)&quot;/g)].map(m => m[1]);
        const trusted = matches.filter(isTrustedPortal);
        resolve(trusted[0] || null);
      });
    });

    req.on('error', () => resolve(null));
    req.on('timeout', () => { req.destroy(); resolve(null); });
  });
}

async function test() {
  const list = [
    { name: 'KANDIVLI EDUCATION SOCIETY B K SHROFF COLLEGE OF ARTS AND M H SHROFF COLLEGE OF COMMERCE', location: 'MUMBAI SUBURBAN', state: 'MAHARASHTRA' },
    { name: 'PSSVMS SAILEE DEGREE COLLEGE', location: 'MUMBAI SUBURBAN', state: 'MAHARASHTRA' },
    { name: 'THAKUR SHYAMNARAYAN ENGINEERING COLLEGE', location: 'MUMBAI SUBURBAN', state: 'MAHARASHTRA' },
    { name: 'CHETANA\'S INSTITUTE OF MANAGEMENT AND RESEARCH', location: 'MUMBAI SUBURBAN', state: 'MAHARASHTRA' },
    { name: 'THAKUR INSTITUTE OF MANAGEMENT STUDIES, CAREER DEVELOPMENT AND RESEARCH', location: 'MUMBAI SUBURBAN', state: 'MAHARASHTRA' },
    { name: 'KOHINOOR MANAGEMENT SCHOOL', location: 'MUMBAI CITY', state: 'MAHARASHTRA' },
    { name: 'GNIMS BUSINESS SCHOOL', location: 'MUMBAI CITY', state: 'MAHARASHTRA' },
    { name: 'GOVERNMENT POLYTECHNIC NAGPUR', location: 'NAGPUR', state: 'MAHARASHTRA' },
    { name: 'DY PATIL COLLEGE OF ENGINEERING AKURDI', location: 'PUNE', state: 'MAHARASHTRA' },
    { name: 'SINHGAD COLLEGE OF ENGINEERING VADGAON', location: 'PUNE', state: 'MAHARASHTRA' }
  ];

  for (const item of list) {
    const photo = await searchPortalCampusPhoto(item.name, item.location, item.state);
    console.log(`\n🏫 ${item.name}`);
    console.log(`   🌐 Trusted Portal Photo: ${photo || 'NONE'}`);
  }
}

test();
