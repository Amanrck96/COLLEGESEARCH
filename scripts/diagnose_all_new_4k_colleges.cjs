const fs = require('fs');
const path = require('path');

const siteData = JSON.parse(fs.readFileSync(path.resolve('public/siteData.json'), 'utf8'));
const colleges = siteData.colleges || [];

const START_INDEX = 3671;
const newColleges = colleges.slice(START_INDEX);

console.log(`Analyzing ${newColleges.length} newly added colleges (indices ${START_INDEX} to ${colleges.length - 1})...`);

const badWords = [
  'vector', 'freepik', 'clipart', 'alphabet', 'letter', 'tracing', 'worksheet',
  'cartoon', 'illustration', 'jewelry', 'jewellery', 'diamond', 'necklace', 'earring',
  'drone', 'fitness', 'abs-', 'workout', 'bodybuilding', 'actor', 'actress', 'bachchan',
  'alamy.com', 'shutterstock', 'istockphoto', 'depositphotos', 'dreamstime', '123rf',
  'vecteezy', 'etsy.com', 'made-in-china', 'alibaba', 'aliexpress', 'amazon.', 'flipkart',
  '.svg', '.gif', 'lookaside.fbsbx.com', 'bingo.icbse.com', 'mah-b.ed', 'merkur.de', 'pressassociation',
  'wallpaper', 'wallpapers', 'pngall', 'pngtree', 'freepng', 'independent.co.uk', 'britannica.com',
  'timesofisrael', 'wikimedia.org/wikipedia/commons/6/6f/Mahmoud', 'probatsman.com', 'filmfare',
  'analyticsjobs', 'personalpowertraining', 'facts.net', 'wallpapercave', 'pensionerfitness',
  'duchuymobile', 'motionbgs', 'windows10spotlight', 'alonhadat'
];

let suspiciousCount = 0;
let cleanCount = 0;
const suspiciousList = [];

newColleges.forEach((c, idx) => {
  const img = String(c.img || '').toLowerCase();
  const name = String(c.name || '').toLowerCase();
  let isBad = false;
  let reason = '';

  if (!c.img || !c.img.startsWith('http')) {
    isBad = true;
    reason = 'Missing or non-http image';
  } else if (c.img.startsWith('x-raw-image')) {
    isBad = true;
    reason = 'x-raw-image internal path';
  } else {
    for (const bw of badWords) {
      if (img.includes(bw)) {
        isBad = true;
        reason = `Matched bad keyword: "${bw}"`;
        break;
      }
    }
  }

  if (isBad) {
    suspiciousCount++;
    suspiciousList.push({ id: c.id, name: c.name, img: c.img, reason });
  } else {
    cleanCount++;
  }
});

console.log(`\nDiagnostic Summary:`);
console.log(`Total New Colleges: ${newColleges.length}`);
console.log(`Clean/Acceptable Images: ${cleanCount}`);
console.log(`Flagged/Bad Images: ${suspiciousCount}`);
console.log(`\nSample Flagged Colleges (first 25):`);
suspiciousList.slice(0, 25).forEach(s => {
  console.log(`[ID ${s.id}] ${s.name} -> ${s.reason}`);
  console.log(`   URL: ${s.img}`);
});
