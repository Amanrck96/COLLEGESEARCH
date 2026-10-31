const fs = require('fs');
const path = require('path');

const SITE_DATA_PATH = path.join(__dirname, '..', 'public', 'siteData.json');
const data = JSON.parse(fs.readFileSync(SITE_DATA_PATH, 'utf8'));
const colleges = Array.isArray(data.colleges) ? data.colleges : data;

const ids = [1505, 1507, 1508, 1512, 1513, 1514, 1515, 1516, 1517, 1518];
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
  console.log(`Courses: ${JSON.stringify(c.courses)}`);
});
