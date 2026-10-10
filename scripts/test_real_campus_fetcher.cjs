const fs = require('fs');
const path = require('path');
const https = require('https');

// Strict reject keywords
const STRICT_REJECT = [
  'logo', 'icon', 'favicon', 'badge', 'seal', 'emblem', 'unilogo', 'collegelogo', 'dept-logo', 'symbol',
  'staticmap', 'maps.googleapis', 'google.com/maps', 'static-map', 'streetview', 'geo/',
  'yumpu', 'docplayer', 'issuu', 'slideshare', 'pdf', 'document', 'magazine', 'flashmagazine',
  'brochure', 'pamphlet', 'forms.png', 'admitcard', 'marksheet', 'hallticket', 'certificate',
  'result', 'boardresults', 'sarkariresult', 'onlineresult', 'exam-',
  'flyer', 'poster', 'event_poster', 'adbanner', 'admissions-open', 'admission-flyer',
  'removebg', 'transparent', 'nobg', 'cutout', 'preview.png',
  'vector', 'freepik', 'clipart', 'alphabet', 'letter', 'tracing', 'worksheet', 'liveworksheets',
  'cartoon', 'illustration', 'sketch', 'drawing', 'jewelry', 'jewellery', 'diamond', 'necklace', 'earring',
  'drone', 'fitness', 'abs-', 'workout', 'bodybuilding', 'actor', 'actress', 'bachchan', 'portrait', 'avatar',
  'alamy.com', 'shutterstock', 'istockphoto', 'depositphotos', 'dreamstime', '123rf',
  'vecteezy', 'etsy.com', 'made-in-china', 'alibaba', 'aliexpress', 'amazon.', 'flipkart',
  '.svg', '.gif', 'lookaside.fbsbx.com', 'lookaside.instagram.com', 'bingo.icbse.com',
  'youtube.com', 'ytimg.com', 'wallpaper', 'wallpapers', 'pngall', 'pngtree', 'freepng',
  'dog', 'breed', 'puppy', 'cat', 'animal', 'cricket', 'shardul', 'snake', 'ladder',
  'recipe', 'food', 'dish', 'cake', 'oil-pan', 'drain-pan', 'bedside', 'table', 'goddess',
  'passport', 'hawai', 'luffy', 'anime', 'null', 'undefined', 'data:image'
];

function isCleanCampusPhoto(url) {
  if (!url || typeof url !== 'string' || !url.startsWith('http')) return false;
  const u = url.toLowerCase();
  for (const p of STRICT_REJECT) {
    if (u.includes(p)) return false;
  }
  return true;
}

const PREFERRED_PORTALS = [
  'collegedunia.com', 'shiksha', 'careers360.mobi', 'universitykart.com',
  'collegebatch.com', 'jdmagicbox.com', 'getmyuni.com', 'collegedekho.com',
  'vidyavision.com', 'kollegeapply.com', 'targetstudy.com',
  'agarum.com', 'campusoption.com', '.ac.in', '.edu.in', 'wikimedia.org'
];

function cleanCollegeName(name) {
  return String(name || '')
    .replace(/\(.*?\)/g, ' ')
    .replace(/\[.*?\]/g, ' ')
    .replace(/\b(Answered Questions|QnA|Admissions Open|Admission|Overview|Ranking|Placements|Cutoff|Fee Structure|2024|2025|2026)\b/gi, '')
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function fetchRealCampusPhoto(name, loc, state) {
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
        const portalMatches = [];
        const otherMatches = [];

        for (const u of matches) {
          if (isCleanCampusPhoto(u)) {
            const isPref = PREFERRED_PORTALS.some(p => u.toLowerCase().includes(p));
            if (isPref) {
              portalMatches.push(u);
            } else {
              otherMatches.push(u);
            }
          }
        }

        const candidate = portalMatches[0] || otherMatches[0] || null;
        resolve(candidate);
      });
    });

    req.on('error', () => resolve(null));
    req.on('timeout', () => { req.destroy(); resolve(null); });
  });
}

// Test on sample colleges from user's list
const testList = [
  { name: 'KANDIVLI EDUCATION SOCIETY B K SHROFF COLLEGE OF ARTS AND M H SHROFF COLLEGE OF COMMERCE', location: 'MUMBAI SUBURBAN', state: 'MAHARASHTRA' },
  { name: 'PSSVMS SAILEE DEGREE COLLEGE', location: 'MUMBAI SUBURBAN', state: 'MAHARASHTRA' },
  { name: 'THAKUR SHYAMNARAYAN ENGINEERING COLLEGE', location: 'MUMBAI SUBURBAN', state: 'MAHARASHTRA' },
  { name: 'CHETANA\'S INSTITUTE OF MANAGEMENT AND RESEARCH', location: 'MUMBAI SUBURBAN', state: 'MAHARASHTRA' },
  { name: 'THAKUR INSTITUTE OF MANAGEMENT STUDIES, CAREER DEVELOPMENT AND RESEARCH', location: 'MUMBAI SUBURBAN', state: 'MAHARASHTRA' },
  { name: 'KOHINOOR MANAGEMENT SCHOOL', location: 'MUMBAI CITY', state: 'MAHARASHTRA' },
  { name: 'GNIMS BUSINESS SCHOOL', location: 'MUMBAI CITY', state: 'MAHARASHTRA' }
];

async function runTest() {
  console.log('Testing real campus photo fetcher...');
  for (const c of testList) {
    const photo = await fetchRealCampusPhoto(c.name, c.location, c.state);
    console.log(`\n🏫 ${c.name}`);
    console.log(`   📸 Real Campus Photo: ${photo || 'NONE FOUND'}`);
  }
}

runTest();
