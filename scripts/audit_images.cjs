const fs = require('fs');
const path = require('path');

const campusesDir = path.join(__dirname, '../public/images/campuses');
if (fs.existsSync(campusesDir)) {
  const files = fs.readdirSync(campusesDir);
  console.log('Total local campus images:', files.length);
  files.forEach(f => {
    const stat = fs.statSync(path.join(campusesDir, f));
    console.log(`- ${f} (${(stat.size / 1024).toFixed(1)} KB)`);
  });
} else {
  console.log('Directory not found:', campusesDir);
}
