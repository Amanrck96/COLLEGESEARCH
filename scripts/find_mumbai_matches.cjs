const fs = require('fs');
const path = require('path');

const siteData = JSON.parse(fs.readFileSync('public/siteData.json', 'utf8'));
const colleges = Array.isArray(siteData) ? siteData : siteData.colleges;

const mumbaiTerms = [
  'valia', 'bunts', 'sailee', 'usha pravin', 'gnims', 'nagindas', 'visvesvaraya', 'tibrewala',
  'mithibai', 'nmims', 'somaiya', 'ruia', 'ruparel', 'jai hind', 'hr college', 'kc college',
  'sies', 'st. xavier', 'wilson', 'national college', 'hinduja', 'mithibai'
];

mumbaiTerms.forEach(term => {
  const matches = colleges.filter(c => c.name && c.name.toLowerCase().includes(term));
  console.log(`\n=== Matches for: ${term} (${matches.length}) ===`);
  matches.forEach(m => {
    console.log(`ID ${m.id} | ${m.name} | Image: ${m.image}`);
  });
});
