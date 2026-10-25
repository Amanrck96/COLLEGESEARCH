const http = require('http');

const testAssets = [
  'http://localhost:5173/images/campuses/pibm_pune.webp',
  'http://localhost:5173/images/campuses/svims_wadala_mumbai.jpeg',
  'http://localhost:5173/images/campuses/weschool_matunga_mumbai.jpeg',
  'http://localhost:5173/images/campuses/atharva_complex_malad.jpg',
  'http://localhost:5173/images/campuses/thakur_complex_kandivali.webp',
  'http://localhost:5173/images/campuses/sir_jj_art_mumbai.jpg',
  'http://localhost:5173/images/campuses/alkesh_dinesh_mody_mumbai.jpg',
  'http://localhost:5173/images/campuses/chetana_bandra.jpg',
  'http://localhost:5173/images/campuses/valia_andheri.jpeg',
  'http://localhost:5173/images/campuses/bunts_sangha_mumbai.jpeg',
  'http://localhost:5173/images/campuses/kes_shroff_kandivali.jpg',
  'http://localhost:5173/images/campuses/saraswati_kharghar.webp',
  'http://localhost:5173/images/campuses/maniben_mp_shah_matunga.jpg',
  'http://localhost:5173/images/campuses/sheila_raheja_bandra.webp',
  'http://localhost:5173/images/campuses/gnims_matunga.png',
  'http://localhost:5173/images/campuses/kohinoor_kurla.jpg',
  'http://localhost:5173/images/campuses/svkm_upg_vileparle.jpg'
];

async function check(url) {
  return new Promise((resolve) => {
    http.get(url, (res) => {
      console.log(`[${res.statusCode}] ${res.headers['content-type']} -> ${url}`);
      resolve(res.statusCode === 200);
    }).on('error', (e) => {
      console.log(`❌ Error: ${e.message} -> ${url}`);
      resolve(false);
    });
  });
}

async function run() {
  console.log('Testing localhost asset serving...');
  let ok = 0;
  for (const u of testAssets) {
    if (await check(u)) ok++;
  }
  console.log(`\nLocalhost check: ${ok}/${testAssets.length} assets served successfully!`);
}

run();
