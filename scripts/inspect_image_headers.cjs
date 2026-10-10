const fs = require('fs');
const path = require('path');

const campusesDir = path.join(__dirname, '../public/images/campuses');
const files = [
  'valia_andheri.jpeg',
  'bunts_sangha_mumbai.jpeg',
  'sailee_college_borivali.jpg',
  'svkm_upg_vileparle.jpg',
  'gnims_matunga.png',
  'kes_shroff_kandivali.jpg',
  'nagindas_khandwala_malad.jpg',
  'svims_wadala_mumbai.jpeg'
];

files.forEach(f => {
  const p = path.join(campusesDir, f);
  if (fs.existsSync(p)) {
    const buf = fs.readFileSync(p);
    console.log(`File: ${f} | Size: ${(buf.length / 1024).toFixed(1)} KB | First 20 bytes: ${buf.slice(0, 20).toString('hex')}`);
  } else {
    console.log(`Missing: ${f}`);
  }
});
