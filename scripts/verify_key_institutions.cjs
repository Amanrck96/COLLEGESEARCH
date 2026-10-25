const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');
const raw = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const colleges = raw.colleges || [];

const targetKeywords = [
  'VALIA',
  'BUNTS SANGHA',
  'SAILEE',
  'USHA PRAVIN GANDHI',
  'GNIMS',
  'NAGINDAS KHANDWALA',
  'VISVESVARAYA',
  'TIBREWALA',
  'Koshys',
  'Canara Bank',
  'Primus',
  'IIT Kanpur',
  'IIT Roorkee',
  'IIT Jodhpur'
];

console.log("Checking key user-mentioned colleges:\n");
targetKeywords.forEach(kw => {
  const matches = colleges.filter(c => (c.name || '').toLowerCase().includes(kw.toLowerCase()));
  console.log(`=== Matches for "${kw}" (${matches.length}) ===`);
  matches.forEach(m => {
    console.log(`[${m.id}] ${m.name} (${m.location || m.state}) -> ${m.image}`);
  });
  console.log();
});
