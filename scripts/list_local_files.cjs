const fs = require('fs');
const path = require('path');

const campusesDir = path.join(__dirname, '../public/images/campuses');
const files = fs.readdirSync(campusesDir);
console.log(`Total local images in public/images/campuses: ${files.length}`);
files.forEach((f, idx) => {
  const stat = fs.statSync(path.join(campusesDir, f));
  console.log(`${idx + 1}. ${f} (${(stat.size / 1024).toFixed(1)} KB)`);
});
