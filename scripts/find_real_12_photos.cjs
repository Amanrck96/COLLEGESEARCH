const fs = require('fs');
const path = require('path');
const https = require('https');

function searchCampusImage(query) {
  const q = encodeURIComponent(query);
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
        const rejectedPatterns = [
          /celebrity/i, /actor/i, /actress/i, /cricket/i, /player/i, /shardul/i, /astor/i,
          /dog/i, /breed/i, /animal/i, /flower/i, /rose/i, /game/i, /snake/i, /ladder/i,
          /diagram/i, /schematic/i, /chart/i, /sketch/i, /drawing/i, /vector/i, /clipart/i,
          /recipe/i, /food/i, /dress/i, /outfit/i, /jewelry/i, /headshot/i, /portrait/i, /profile/i
        ];

        const valid = [];
        for (const u of matches) {
          const isBad = rejectedPatterns.some(p => p.test(u));
          if (!isBad && u.startsWith('http')) {
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

const targetColleges = [
  { name: 'PUNE INSTITUTE OF BUSINESS MANAGEMENT', loc: 'Pune' },
  { name: 'SVIMS BUSINESS SCHOOL', loc: 'Wadala Mumbai' },
  { name: 'BHARATI VIDYAPEETH DEEMED TO BE UNIVERSITY DEPARTMENT OF MANAGMENT STUDIES', loc: 'Navi Mumbai' },
  { name: 'ATHARVA SCHOOL OF BUSINESS', loc: 'Malad Mumbai' },
  { name: 'THAKUR GLOBAL BUSINESS SCHOOL', loc: 'Kandivali Mumbai' },
  { name: 'WELINGKAR INSTITUTE OF MANAGEMENT DEVELOPMENT AND RESEARCH', loc: 'Matunga Mumbai' },
  { name: 'SIR J. J. INSTITUTE OF APPLIED ART', loc: 'Fort Mumbai' },
  { name: 'ALKESH DINESH MODY INSTITUTE FOR FINANCIAL AND MANAGEMENT STUDIES', loc: 'Kalina Santacruz Mumbai' },
  { name: 'ATHARVA INSTITUTE OF MANAGEMENT STUDIES', loc: 'Malad Mumbai' },
  { name: "CHETANA'S RAMPRASAD KHANDELWAL INSTITUTE OF MANAGEMENT & RESEARCH", loc: 'Bandra Mumbai' },
  { name: 'VALIA SCHOOL OF MANAGEMENT', loc: 'Andheri Mumbai' },
  { name: 'BUNTS SANGHA MUMBAI ANNNA LEELA COLLEGE', loc: 'Kurla Mumbai' }
];

async function run() {
  console.log('🔍 Searching targeted verified campus photos for 12 user colleges...\n');
  for (const c of targetColleges) {
    const query = `"${c.name}" ${c.loc} college campus building architecture exterior -cricket -actor -dog -flower -diagram`;
    const results = await searchCampusImage(query);
    console.log(`🏫 College: ${c.name}`);
    console.log(`   Found ${results.length} clean candidates.`);
    if (results.length > 0) {
      console.log(`   Best candidate 1: ${results[0]}`);
      if (results.length > 1) console.log(`   Candidate 2: ${results[1]}`);
    }
    console.log('------------------------------------------------------------');
    await new Promise(r => setTimeout(r, 600));
  }
}

run();
