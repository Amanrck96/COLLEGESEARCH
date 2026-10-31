const fs = require('fs');
const path = require('path');

const SITE_DATA_PATH = path.join(__dirname, '..', 'public', 'siteData.json');

const data = JSON.parse(fs.readFileSync(SITE_DATA_PATH, 'utf8'));
const isWrapped = Array.isArray(data.colleges);
const colleges = isWrapped ? data.colleges : data;

const ids = [1495, 1496, 1497, 1498, 1499, 1500, 1501, 1502, 1503, 1504];

console.log('BATCH 17 DIFF PREVIEW:');
console.log('====================================');

ids.forEach(id => {
  const c = colleges.find(item => item.id === id);
  if (!c) {
    console.log(`ID ${id} NOT FOUND!`);
    return;
  }
  console.log(`\nID: ${id}`);
  console.log(`  CURRENT:`);
  console.log(`    Name:        ${c.name}`);
  console.log(`    Address:     ${c.address}`);
  console.log(`    Website:     ${c.website}`);
  console.log(`    Phone:       ${c.phone}`);
  console.log(`    Email:       ${c.email}`);
  console.log(`    Affiliation: ${c.affiliation}`);
  console.log(`    Image:       ${c.image || c.img}`);
  console.log(`    Courses:     ${JSON.stringify(c.courses)}`);
});

