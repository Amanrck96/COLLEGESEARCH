const fs = require('fs');
const path = require('path');
const https = require('https');

console.log(`================================================================`);
console.log(`🎯 RESOLVING REMAINING 132 COLLEGES WITH REAL CAMPUS PHOTOS`);
console.log(`================================================================`);

const siteDataPath = path.resolve('public/siteData.json');
const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const colleges = siteData.colleges;

const STRICT_REJECT = [
  'logo', 'icon', 'favicon', 'badge', 'seal', 'emblem', 'unilogo', 'collegelogo', 'dept-logo', 'symbol',
  'staticmap', 'maps.googleapis', 'google.com/maps', 'static-map', 'streetview', 'geo/',
  'yumpu', 'docplayer', 'issuu', 'slideshare', 'pdf', 'document', 'magazine', 'flashmagazine',
  'brochure', 'pamphlet', 'forms.png', 'admitcard', 'marksheet', 'hallticket', 'certificate',
  'result', 'boardresults', 'sarkariresult', 'onlineresult', 'exam-', 'ktu+result',
  'flyer', 'poster', 'event_poster', 'adbanner', 'admissions-open', 'admission-flyer',
  'removebg', 'transparent', 'nobg', 'cutout', 'preview.png',
  'vector', 'freepik', 'clipart', 'alphabet', 'letter', 'tracing', 'worksheet', 'liveworksheets',
  'cartoon', 'illustration', 'sketch', 'drawing', 'jewelry', 'jewellery', 'diamond', 'necklace', 'earring',
  'drone', 'fitness', 'abs-', 'workout', 'bodybuilding', 'actor', 'actress', 'bachchan', 'portrait', 'avatar',
  'alamy.com', 'shutterstock', 'istockphoto', 'depositphotos', 'dreamstime', '123rf',
  'vecteezy', 'etsy.com', 'made-in-china', 'alibaba', 'aliexpress', 'amazon.', 'flipkart',
  '.svg', '.gif', 'lookaside.fbsbx.com', 'lookaside.instagram.com', 'bingo.icbse.com',
  'mah-b.ed', 'merkur.de', 'pressassociation', 'scribdassets.com', 'youtube.com', 'ytimg.com',
  'wallpaper', 'wallpapers', 'pngall', 'pngtree', 'freepng', 'independent.co.uk', 'britannica.com',
  'timesofisrael', 'mahmoud', 'probatsman.com', 'filmfare', 'analyticsjobs', 'personalpowertraining',
  'facts.net', 'wallpapercave', 'pensionerfitness', 'duchuymobile', 'motionbgs', 'windows10spotlight',
  'alonhadat', 'wallpaperaccess', 'wallpapercrafter', 'bhagwanpuja', 'publicdomainpictures',
  'uhdpaper', 'placeholder', 'banner_blank', 'default_image', 'no-image', 'null', 'undefined', 'data:image', 'x-raw-image'
];

function isCleanCampusPhoto(url) {
  if (!url || typeof url !== 'string' || !url.startsWith('http')) return false;
  const u = url.toLowerCase();
  for (const p of STRICT_REJECT) {
    if (u.includes(p)) return false;
  }
  return true;
}

function fetchAlternativePhotos(query) {
  const q = encodeURIComponent(query);
  const url = `https://www.bing.com/images/search?q=${q}&first=1&count=25`;

  return new Promise((resolve) => {
    const req = https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9'
      },
      timeout: 10000
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const matches = [...data.matchAll(/murl&quot;:&quot;(http[^&]+?)&quot;/g)].map(m => m[1]);
        const clean = [];
        for (const u of matches) {
          if (isCleanCampusPhoto(u)) {
            clean.push(u);
          }
        }
        resolve([...new Set(clean)]);
      });
    });

    req.on('error', () => resolve([]));
    req.on('timeout', () => { req.destroy(); resolve([]); });
  });
}

const remainingColleges = colleges.filter(c => (c.img || '').includes('unsplash.com'));
console.log(`Processing remaining ${remainingColleges.length} colleges...`);

async function run() {
  let fixed = 0;
  for (const c of remainingColleges) {
    console.log(`🔍 [ID ${c.id}] Searching photo for: ${c.name} (${c.location}, ${c.state})...`);
    
    // Try query 1: Name + Campus
    let photos = await fetchAlternativePhotos(`${c.name} campus building`);
    
    // Try query 2: Name + Location
    if (photos.length === 0) {
      photos = await fetchAlternativePhotos(`${c.name} ${c.location} college`);
    }

    // Try query 3: Simplified Name
    if (photos.length === 0) {
      const simplified = c.name.split(',')[0].replace(/\b(College|Institute|University)\b/gi, '').trim();
      photos = await fetchAlternativePhotos(`${simplified} ${c.location} college campus`);
    }

    if (photos.length > 0) {
      c.img = photos[0];
      c.gallery = photos.slice(0, 4);
      if (c.gallery.length < 2) c.gallery.push(photos[0]);
      fixed++;
      console.log(`  ✅ Fixed ID ${c.id}: ${c.img.slice(0, 70)}...`);
    } else {
      console.log(`  ⚠️ No photo found for ID ${c.id}`);
    }
  }

  fs.writeFileSync(siteDataPath, JSON.stringify(siteData, null, 2), 'utf8');
  console.log(`\n🎉 FIXED ${fixed} / ${remainingColleges.length} COLLEGES WITH REAL PHOTOS!`);
}

run().catch(console.error);
