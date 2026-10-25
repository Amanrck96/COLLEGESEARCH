const fs = require('fs');
const path = require('path');

const d = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'public', 'siteData.json'), 'utf8')).colleges;

const targets = [
  'KANDIVLI EDUCATION SOCIETY',
  'SARASWATI COLLEGE OF ENGINEERING',
  'MANIBEN M.P. SHAH',
  'SHEILA RAHEJA',
  'GNIMS',
  'KOHINOOR MANAGEMENT',
  'USHA PRAVIN GANDHI'
];

targets.forEach((t, i) => {
  const found = d.filter(c => c.name.toLowerCase().includes(t.toLowerCase()));
  console.log(`\n=== ${i + 1}. Target: ${t} ===`);
  found.forEach(f => {
    console.log(`[ID ${f.id}] ${f.name}`);
    console.log(`  Location: ${f.location}, ${f.state}`);
    console.log(`  Image: ${f.img}`);
  });
});
