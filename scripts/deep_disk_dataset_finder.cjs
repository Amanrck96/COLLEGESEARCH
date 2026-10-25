const fs = require('fs');
const path = require('path');
const os = require('os');

const searchDirs = [
  path.join(os.homedir(), '.gemini', 'antigravity', 'scratch'),
  path.join(os.homedir(), 'Downloads'),
  path.join(os.homedir(), 'Desktop'),
  path.join(os.homedir(), 'Documents')
];

console.log('🔍 Searching user directories for any college datasets (JSON, CSV, XLSX)...');

const foundFiles = [];

function search(dir, depth = 0) {
  if (depth > 3) return;
  try {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      if (item.startsWith('.') || item === 'node_modules' || item === '$RECYCLE.BIN') continue;
      const fullPath = path.join(dir, item);
      try {
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          search(fullPath, depth + 1);
        } else if (/\.(json|csv|xlsx)$/i.test(item) && (item.toLowerCase().includes('college') || item.toLowerCase().includes('shiksha') || item.toLowerCase().includes('site') || item.toLowerCase().includes('scrap') || stat.size > 1024 * 1024)) {
          foundFiles.push({ path: fullPath, sizeMb: (stat.size / (1024 * 1024)).toFixed(2), name: item });
        }
      } catch (e) {}
    }
  } catch (e) {}
}

searchDirs.forEach(d => {
  if (fs.existsSync(d)) search(d);
});

console.log(`\nFound ${foundFiles.length} dataset files:\n`);
foundFiles.sort((a, b) => parseFloat(b.sizeMb) - parseFloat(a.sizeMb));
foundFiles.forEach(f => {
  console.log(`📄 [${f.sizeMb} MB] ${f.name} -> ${f.path}`);
  if (f.name.endsWith('.json')) {
    try {
      const data = JSON.parse(fs.readFileSync(f.path, 'utf8'));
      let len = 0;
      if (Array.isArray(data)) len = data.length;
      else if (data && Array.isArray(data.colleges)) len = data.colleges.length;
      else if (typeof data === 'object') len = Object.keys(data).length;
      console.log(`   Count of records: ${len}`);
    } catch(e) {
      console.log(`   (Unable to parse JSON length)`);
    }
  }
  console.log('---');
});
