const fs = require('fs');
const path = require('path');

const SITE_DATA_PATH = path.join(__dirname, '..', 'public', 'siteData.json');
const data = JSON.parse(fs.readFileSync(SITE_DATA_PATH, 'utf8'));
const colleges = Array.isArray(data.colleges) ? data.colleges : data;

const ids = [1476, 1479, 1483, 1484, 1485, 1486, 1487, 1490, 1492, 1494];
const map = new Map();
colleges.forEach(c => {
  if (ids.includes(c.id)) map.set(c.id, c);
});

ids.forEach(id => {
  const c = map.get(id);
  console.log(`\n========================================`);
  console.log(`ID: ${id}`);
  console.log(`Name: ${c.name}`);
  console.log(`Type: ${c.type} | Ownership: ${c.ownership}`);
  console.log(`Address: ${c.address}`);
  console.log(`Phone: ${c.phone} | Email: ${c.email}`);
  console.log(`Website: ${c.website}`);
  console.log(`Affiliation: ${c.affiliation}`);
  console.log(`Image: ${c.image || c.img}`);
  console.log(`Courses (${(c.courses || []).length}):`);
  (c.courses || []).forEach(cr => {
    console.log(`  - ${cr.name}: ${cr.duration} (fee: ${cr.fee})`);
  });
});

