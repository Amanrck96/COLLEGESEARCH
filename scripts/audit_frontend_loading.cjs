const fs = require('fs');
const path = require('path');

// Search for all references to siteData or colleges in src/
function findInDir(dir, filter, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        findInDir(filePath, filter, fileList);
      }
    } else if (filter.test(file)) {
      fileList.push(filePath);
    }
  });
  return fileList;
}

const srcFiles = findInDir(path.join(__dirname, '../src'), /\.(jsx?|tsx?)$/);
console.log(`Found ${srcFiles.length} source files.`);

srcFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('siteData.json') || content.includes('/api/colleges') || content.includes('localStorage') || content.includes('CollegeImg')) {
    console.log(`\n--- File: ${path.relative(path.join(__dirname, '..'), f)} ---`);
    const lines = content.split('\n');
    lines.forEach((line, idx) => {
      if (line.includes('siteData') || line.includes('/api/colleges') || line.includes('localStorage') || line.includes('CollegeImg') || line.includes('fetch(') || line.includes('axios.')) {
        console.log(`  L${idx + 1}: ${line.trim().slice(0, 100)}`);
      }
    });
  }
});
