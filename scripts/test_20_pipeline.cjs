const fs = require('fs');
const https = require('https');
const path = require('path');

const backup = JSON.parse(fs.readFileSync(path.resolve('public/siteData.backup.json'), 'utf8'));
const master = JSON.parse(fs.readFileSync(path.resolve('scripts/siteData.master_all_38k.json'), 'utf8'));
const allBk = [...(backup.colleges || backup), ...(master.colleges || master)];

function norm(s) {
  return String(s || '').toLowerCase().replace(/[^a-z0-9]/g, '');
}

function cleanCollegeName(name) {
  return String(name || '')
    .replace(/^\d+[-_ ]+/, '') // remove prefix numbers like 168-
    .replace(/\b(Course Admissions|Course Admission|Admissions|Admission|Ranking|Rankings|Fee Structure|Fees|Cutoff|Cutoffs|Courses|Placement|Placements|2024|2025|2026|2027)\b/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function isStrictlyValidCampusImage(url) {
  if (!url || typeof url !== 'string') return false;
  const u = url.toLowerCase();
  if (!u.startsWith('http://') && !u.startsWith('https://')) return false;
  if (u.startsWith('x-raw-image')) return false;

  const badPatterns = [
    'vector', 'freepik', 'clipart', 'alphabet', 'letter', 'tracing', 'worksheet',
    'cartoon', 'illustration', 'jewelry', 'jewellery', 'diamond', 'necklace', 'earring',
    'drone', 'fitness', 'abs-', 'workout', 'bodybuilding', 'actor', 'actress', 'bachchan',
    'alamy.com', 'shutterstock', 'istockphoto', 'depositphotos', 'dreamstime', '123rf',
    'vecteezy', 'etsy.com', 'made-in-china', 'alibaba', 'aliexpress', 'amazon.', 'flipkart',
    '.svg', '.gif', 'lookaside.fbsbx.com', 'bingo.icbse.com', 'mah-b.ed', 'merkur.de', 'pressassociation'
  ];

  if (badPatterns.some(p => u.includes(p))) return false;
  return true;
}

// Map of backup images
const bkMap = new Map();
allBk.forEach(b => {
  if (b && b.name && isStrictlyValidCampusImage(b.img)) {
    const k = norm(b.name);
    if (!bkMap.has(k)) {
      bkMap.set(k, { img: b.img, gallery: b.gallery });
    }
  }
});

function searchWebCampusImage(name, loc) {
  const cleanName = cleanCollegeName(name);
  const q = encodeURIComponent(`"${cleanName}" ${loc || ''} college campus building`);
  const url = `https://www.bing.com/images/search?q=${q}&qft=+filterui:imagesize-large`;

  return new Promise((resolve) => {
    const req = https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9'
      },
      timeout: 10000
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const matches = [...data.matchAll(/murl&quot;:&quot;(http[^&]+?)&quot;/g)].map(m => m[1]);
        const valid = [];
        for (const u of matches) {
          if (isStrictlyValidCampusImage(u)) {
            valid.push(u);
          }
        }
        resolve(valid);
      });
    });
    req.on('error', () => resolve([]));
    req.on('timeout', () => { req.destroy(); resolve([]); });
  });
}

const testColleges = [
  { name: '168-GOVT POLYTECHNIC HOSADURGA', loc: 'CHITRADURGA, KARNATAKA' },
  { name: 'A J COLLEGE OF SCIENCE AND TECHNOLOGY', loc: 'THIRUVANANTHAPURAM, KERALA' },
  { name: 'A R BHATT COMPUTER SCIENCE COLLEGE UNA', loc: 'GIR SOMNATH, GUJARAT' },
  { name: 'A. J. INSTITUTE OF ENGINEERING AND TECHNOLOGY MANGALURU', loc: 'DAKSHINA KANNADA, KARNATAKA' },
  { name: 'A. J. INSTITUTE OF MANAGEMENT', loc: 'DAKSHINA KANNADA, KARNATAKA' },
  { name: 'A.D.PATEL INSTITUTE OF TECHNOLOGY', loc: 'ANAND, GUJARAT' },
  { name: 'A.C.KUNHIMON HAJI MEMORIAL I.C.A COLLEGE THOZHIYUR', loc: 'THRISSUR, KERALA' },
  { name: 'A.G.B FIRST GRADE COLLEGE', loc: 'DAVANAGERE, KARNATAKA' },
  { name: 'A.G.M.RURAL POLYTECHNIC', loc: 'DHARWAD, KARNATAKA' },
  { name: 'A.K.M.POLYTECHNIC COLLEGE', loc: 'KOLLAM, KERALA' },
  { name: 'ACADEMY OF COMPUTER SCIENCE AND TECHNOLOGY', loc: 'JABALPUR, MADHYA PRADESH' },
  { name: 'ACADEMY OF BUSINESS ADMINISTRATION', loc: 'BALASORE, ODISHA' },
  { name: 'A.V. ABDURAHIMAN HAJI ARTS AND SCIENCE COLLEGE', loc: 'KOZHIKODE, KERALA' },
  { name: 'ABS ACADEMY OF MANAGEMENT AND HEALTH SCIENCE', loc: 'BARDHAMAN, WEST BENGAL' },
  { name: 'ABR COLLEGE OF ARTS SCIENCE AND COMMERCE', loc: 'PATHANAMTHITTA, KERALA' },
  { name: 'ABHISHEK POLYTECHNIC COLLEGE', loc: 'FIROZPUR, PUNJAB' },
  { name: 'ABHYUDAY UNIVERSITY', loc: 'KHARGONE, MADHYA PRADESH' },
  { name: 'AACHARYA FIRST GRADE COLLEGE HASSAN', loc: 'HASSAN, KARNATAKA' },
  { name: 'ABBAS KHAN COLLEGE FOR WOMEN', loc: 'BANGALORE URBAN, KARNATAKA' },
  { name: 'AADYA AVIATION COLLEGE', loc: 'BANGALORE URBAN, KARNATAKA' }
];

async function run() {
  for (const tc of testColleges) {
    const k = norm(tc.name);
    const cleanK = norm(cleanCollegeName(tc.name));
    let img = null;
    let source = '';

    if (bkMap.has(k)) {
      img = bkMap.get(k).img;
      source = 'Direct Backup';
    } else if (bkMap.has(cleanK)) {
      img = bkMap.get(cleanK).img;
      source = 'Cleaned Backup';
    }

    if (!img) {
      const searched = await searchWebCampusImage(tc.name, tc.loc);
      if (searched.length > 0) {
        img = searched[0];
        source = 'Live Campus Search';
      }
    }

    console.log(`[${source || 'FALLBACK'}] ${tc.name} -> ${img}`);
  }
}

run();
