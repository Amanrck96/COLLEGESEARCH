const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');
const rawData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const colleges = Array.isArray(rawData) ? rawData : rawData.colleges;

const trusts = [
  'BHARATI VIDYAPEETH',
  'ATHARVA',
  'THAKUR',
  'WELINGKAR',
  'SIR J. J.',
  'ALKESH',
  'CHETANA',
  'VALIA',
  'BUNTS SANGHA',
  'SHROFF',
  'SARASWATI',
  'MANIBEN',
  'SHEILA RAHEJA',
  'GNIMS',
  'GURU NANAK',
  'KOHINOOR',
  'USHA PRAVIN',
  'SVKM',
  'PIBM',
  'SVIMS'
];

trusts.forEach(t => {
  const matches = colleges.filter(c => c.name.toUpperCase().includes(t));
  console.log(`\n================== ${t} (${matches.length} entries) ==================`);
  matches.forEach(m => {
    console.log(`[${m.id}] ${m.name} (${m.state || ''}) -> ${m.img || m.image}`);
  });
});
