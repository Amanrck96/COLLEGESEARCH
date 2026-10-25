const fs = require('fs');
const path = require('path');

const files = [
  'public/siteData.json',
  'server/db.json',
  'server/data/colleges.json',
  'src/data/colleges.json'
];

files.forEach(f => {
  if (fs.existsSync(f)) {
    const stat = fs.statSync(f);
    console.log(`File exists: ${f} (${(stat.size / 1024 / 1024).toFixed(2)} MB)`);
  } else {
    console.log(`File not found: ${f}`);
  }
});
