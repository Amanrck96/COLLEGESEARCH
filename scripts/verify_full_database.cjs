const fs = require('fs');
const path = require('path');

const siteData = JSON.parse(fs.readFileSync(path.resolve('public/siteData.json'), 'utf8'));
const colleges = siteData.colleges || [];

console.log(`================================================================`);
console.log(`🔍 COMPLETE DATABASE INTEGRITY & IMAGE AUDIT (7,640 COLLEGES)`);
console.log(`================================================================`);
console.log(`Total colleges in DB: ${colleges.length}`);

// 1. Audit the 20 User-Reported Colleges
console.log(`\n--- 1. AUDITING 20 USER SPECIFIED TEST COLLEGES ---`);
const testColleges = [
  '168-GOVT POLYTECHNIC HOSADURGA',
  'GOVT POLYTECHNIC HOSADURGA',
  'Government Polytechnic Hosadurga',
  'A J COLLEGE OF SCIENCE AND TECHNOLOGY',
  'A R BHATT COMPUTER SCIENCE COLLEGE UNA',
  'A. J. INSTITUTE OF ENGINEERING AND TECHNOLOGY MANGALURU',
  'A. J. INSTITUTE OF MANAGEMENT',
  'A.D.PATEL INSTITUTE OF TECHNOLOGY',
  'A.C.KUNHIMON HAJI MEMORIAL I.C.A COLLEGE THOZHIYUR',
  'A.G.B FIRST GRADE COLLEGE',
  'A.G.M.RURAL POLYTECHNIC',
  'A.K.M.POLYTECHNIC COLLEGE',
  'ACADEMY OF COMPUTER SCIENCE AND TECHNOLOGY',
  'ACADEMY OF BUSINESS ADMINISTRATION',
  'A.V. ABDURAHIMAN HAJI ARTS AND SCIENCE COLLEGE',
  'ABS ACADEMY OF MANAGEMENT AND HEALTH SCIENCE',
  'ABR COLLEGE OF ARTS SCIENCE AND COMMERCE',
  'ABHISHEK POLYTECHNIC COLLEGE',
  'ABHYUDAY UNIVERSITY',
  'AACHARYA FIRST GRADE COLLEGE HASSAN',
  'ABBAS KHAN COLLEGE FOR WOMEN',
  'AADYA AVIATION COLLEGE'
];

testColleges.forEach(tn => {
  const norm = tn.toLowerCase().replace(/[^a-z0-9]/g, '');
  const match = colleges.find(c => {
    const cn = (c.name || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    return cn.includes(norm) || norm.includes(cn);
  });
  if (match) {
    console.log(`[PASS] ID ${match.id} | ${match.name}`);
    console.log(`       Location: ${match.location}, ${match.state}`);
    console.log(`       Image: ${match.img}`);
    console.log(`       Gallery: [${(match.gallery || []).length} photos]`);
    console.log(`       Courses: ${(match.courses || []).length} courses`);
  } else {
    console.log(`[FAIL] NOT FOUND: ${tn}`);
  }
});

// 2. Scan entire 7,640 database for bad image keywords
console.log(`\n--- 2. SCANNING ALL 7,640 COLLEGES FOR BAD/IRRELEVANT IMAGES ---`);
const badWords = [
  'vector', 'freepik', 'clipart', 'alphabet', 'letter', 'tracing', 'worksheet',
  'cartoon', 'illustration', 'jewelry', 'jewellery', 'diamond', 'necklace', 'earring',
  'drone', 'fitness', 'abs-', 'workout', 'bodybuilding', 'actor', 'actress', 'bachchan',
  'alamy.com', 'shutterstock', 'istockphoto', 'depositphotos', 'dreamstime', '123rf',
  'vecteezy', 'etsy.com', 'made-in-china', 'alibaba', 'aliexpress', 'amazon.', 'flipkart',
  '.svg', '.gif', 'lookaside.fbsbx.com', 'bingo.icbse.com', 'mah-b.ed', 'merkur.de', 'pressassociation',
  'wallpaper', 'wallpapers', 'pngall', 'pngtree', 'freepng', 'independent.co.uk', 'britannica.com',
  'timesofisrael', 'mahmoud', 'probatsman.com', 'filmfare', 'analyticsjobs', 'personalpowertraining',
  'facts.net', 'wallpapercave', 'pensionerfitness', 'duchuymobile', 'motionbgs', 'windows10spotlight',
  'alonhadat', 'wallpaperaccess', 'wallpapercrafter', 'bhagwanpuja', 'publicdomainpictures',
  'liveworksheets', 'uhdpaper'
];

let totalBad = 0;
colleges.forEach((c, idx) => {
  const img = String(c.img || '').toLowerCase();
  for (const bw of badWords) {
    if (img.includes(bw)) {
      console.log(`[ALERT] ID ${c.id} (${c.name}) has bad image: ${c.img} (matched ${bw})`);
      totalBad++;
      break;
    }
  }
});

console.log(`Total Flagged Bad Images in DB: ${totalBad}`);

// 3. Course count check
console.log(`\n--- 3. CHECKING COURSES INTEGRITY ---`);
let lessThan5Courses = 0;
colleges.forEach(c => {
  if (!Array.isArray(c.courses) || c.courses.length < 5) {
    lessThan5Courses++;
  }
});
console.log(`Colleges with < 5 courses: ${lessThan5Courses}`);

// 4. Untouchable Check (IDs 1 to 3671)
console.log(`\n--- 4. VERIFYING ORIGINAL LIVE 3,671 UNTOUCHED RECORD INTEGRITY ---`);
const origMaster = JSON.parse(fs.readFileSync(path.resolve('scripts/siteData.master_all_38k.json'), 'utf8'));
const origColleges = origMaster.colleges || origMaster;
let origDiffs = 0;
for (let i = 0; i < 3671; i++) {
  if (colleges[i].id !== origColleges[i].id || colleges[i].name !== origColleges[i].name) {
    origDiffs++;
  }
}
console.log(`Differences in first 3,671 records vs master: ${origDiffs} (0 expected)`);

console.log(`\n================================================================`);
console.log(`ALL INTEGRITY CHECKS COMPLETE!`);
console.log(`================================================================`);
