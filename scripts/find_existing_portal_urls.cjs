const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const data = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const colleges = Array.isArray(data) ? data : (data.colleges || []);

const searchTerms = [
  'krupanidhi',
  'koshys',
  'patel',
  'hal management',
  'sri krishna',
  'bims',
  'bangalore institute of management',
  'primus',
  'technological institute',
  'sindhi',
  'regional college of management',
  'vidhya shekhar',
  'imperial'
];

searchTerms.forEach(term => {
  const matches = colleges.filter(c => c.name && c.name.toLowerCase().includes(term));
  console.log(`\n=== Matches for: ${term} (${matches.length}) ===`);
  matches.forEach(m => {
    console.log(`ID ${m.id} | ${m.name} | Image: ${m.image}`);
  });
});
