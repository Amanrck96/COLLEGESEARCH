const fs = require('fs');
const path = require('path');

const siteData = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'public', 'siteData.json'), 'utf8')).colleges;
const backup = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'public', 'siteData.backup.json'), 'utf8'));
const backupList = Array.isArray(backup) ? backup : backup.colleges;

console.log('📊 COMPARING 38,636 RAW ROWS vs CURRENT 12,656 UNIQUE COLLEGES');
console.log('-------------------------------------------------------------');
console.log(`Current Clean Unique Colleges in DB: ${siteData.length}`);
console.log(`Raw Rows in Backup: ${backupList.length}\n`);

function normalizeName(n = '') {
  return String(n || '').toLowerCase()
    .replace(/\(.*?\)/g, ' ')
    .replace(/\[.*?\]/g, ' ')
    .replace(/\b(college of engineering|institute of technology|institute|college|polytechnic|university)\b/gi, ' ')
    .replace(/[^a-z0-9]/g, '')
    .trim();
}

const currentSet = new Set(siteData.map(c => normalizeName(c.name)));

// Group backup by unique college names
const uniqueBackupEntities = new Map();
backupList.forEach(c => {
  const k = normalizeName(c.name);
  if (k) {
    if (!uniqueBackupEntities.has(k)) {
      uniqueBackupEntities.set(k, []);
    }
    uniqueBackupEntities.get(k).push(c);
  }
});

console.log(`Total Unique College Entities in the 38,636 raw rows: ${uniqueBackupEntities.size}`);

let matchedEntities = 0;
let unmatchedEntities = [];

for (const [key, list] of uniqueBackupEntities.entries()) {
  if (currentSet.has(key)) {
    matchedEntities++;
  } else {
    unmatchedEntities.push(list[0]);
  }
}

console.log(`Unique Entities represented in our current 12,656 DB: ${matchedEntities}`);
console.log(`Unmatched raw entities: ${unmatchedEntities.length}`);

if (unmatchedEntities.length > 0) {
  console.log(`\nSample 5 unmatched raw entities from 38k backup:`);
  unmatchedEntities.slice(0, 5).forEach(c => {
    console.log(`  - [ID ${c.id}] ${c.name} (${c.location}, ${c.state})`);
  });
}
