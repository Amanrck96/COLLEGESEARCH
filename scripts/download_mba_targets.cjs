const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const CAMPUSES_DIR = path.join(__dirname, '..', 'public', 'images', 'campuses');

const MBA_TARGETS = [
  { filename: 'srinivasan_perambalur.jpg', url: 'https://www.scas.ac.in/images/md1.jpg' },
  { filename: 'kv_imis_coimbatore.jpg', url: 'https://media.getmyuni.com/azure/college-image/big/kv-institute-of-management-and-informations-studies-kvimis-coimbatore.jpg' },
  { filename: 'riim_pune.jpeg', url: 'https://assets.kollegeapply.com/images/1751569564451-1705383060phpu32WDC.jpeg' },
  { filename: 'sas_institute_boisar.jpg', url: 'http://www.sasmba.in/imgs/sas_scroll_img_2.jpg' },
  { filename: 'matoshri_ushatai_jadhav.jpg', url: 'https://mujimsrc.org/web-assets/img/about-clg.jpg' }
];

function download(url, dest) {
  return new Promise((resolve) => {
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Referer': 'https://www.google.com/'
      },
      timeout: 10000
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve);
      }
      if (res.statusCode !== 200) {
        console.log(`❌ Failed [${res.statusCode}] for ${url}`);
        return resolve(false);
      }
      const stream = fs.createWriteStream(dest);
      res.pipe(stream);
      stream.on('finish', () => {
        stream.close();
        if (fs.statSync(dest).size > 1000) {
          console.log(`✅ Downloaded ${path.basename(dest)} (${Math.round(fs.statSync(dest).size / 1024)} KB)`);
          resolve(true);
        } else {
          fs.unlinkSync(dest);
          resolve(false);
        }
      });
    });
    req.on('error', (e) => {
      console.log(`❌ Error: ${e.message} for ${url}`);
      resolve(false);
    });
  });
}

async function run() {
  for (const item of MBA_TARGETS) {
    const dest = path.join(CAMPUSES_DIR, item.filename);
    await download(item.url, dest);
  }
}

run();
