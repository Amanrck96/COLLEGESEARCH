const fs = require('fs');
const path = require('path');

const data = JSON.parse(fs.readFileSync('public/siteData.json', 'utf8'));
const colleges = Array.isArray(data) ? data : data.colleges || [];

const queries = ['rcm', 'regional college of management', 'bangalore tech', 'bti', 'sindhi', 'canara bank', 'central college', 'bangalore university'];

queries.forEach(q => {
  console.log(`\n=== Matches for: ${q} ===`);
  const matches = colleges.filter(c => c.name && c.name.toLowerCase().includes(q.toLowerCase()));
  matches.slice(0, 5).forEach(m => {
    console.log(`ID: ${m.id} | ${m.name} | Image: ${m.image}`);
  });
});
