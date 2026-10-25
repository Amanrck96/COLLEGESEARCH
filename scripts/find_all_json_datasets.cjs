const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');

function getJsonFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (file === 'node_modules' || file === '.git' || file === 'dist' || file === '.vercel') continue;
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getJsonFiles(filePath, fileList);
    } else if (file.endsWith('.json')) {
      fileList.push({ path: filePath, size: stat.size, name: file });
    }
  }
  return fileList;
}

const jsonFiles = getJsonFiles(rootDir);
console.log(`Found ${jsonFiles.length} JSON data files in workspace.\n`);

const mainDb = JSON.parse(fs.readFileSync(path.join(rootDir, 'public', 'siteData.json'), 'utf8')).colleges;
const mainNameSet = new Set(mainDb.map(c => (c.name || '').toLowerCase().replace(/[^a-z0-9]/g, '')));

jsonFiles.forEach(f => {
  try {
    const raw = JSON.parse(fs.readFileSync(f.path, 'utf8'));
    let arr = null;
    if (Array.isArray(raw)) arr = raw;
    else if (raw && Array.isArray(raw.colleges)) arr = raw.colleges;

    if (arr && arr.length > 0 && typeof arr[0] === 'object' && arr[0].name) {
      let matched = 0;
      let missingList = [];
      arr.forEach(c => {
        const k = (c.name || '').toLowerCase().replace(/[^a-z0-9]/g, '');
        if (mainNameSet.has(k)) matched++;
        else missingList.push(c.name);
      });

      console.log(`📁 File: ${path.relative(rootDir, f.path)}`);
      console.log(`   Total Entries: ${arr.length} | Already in DB: ${matched} | Unmatched: ${missingList.length}`);
      if (missingList.length > 0) {
        console.log(`   Sample Unmatched (first 3):`, missingList.slice(0, 3));
      }
      console.log('------------------------------------------------------------');
    }
  } catch (e) {}
});
