const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const CAMPUSES_DIR = path.join(__dirname, '..', 'public', 'images', 'campuses');

const NEW_PHOTOS = [
  { filename: 'iit_bombay_powai.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Main_building_in_IIT_Bombay.jpg' },
  { filename: 'sailee_college_borivali.jpg', url: 'https://content.jdmagicbox.com/v2/comp/mumbai/p2/022pxx22.xx22.241225201432.f9p2/catalogue/sailee-degree-college-science-and-commerce-mumbai-colleges-jf4nh25t2b.jpg' },
  { filename: 'nagindas_khandwala_malad.jpg', url: 'https://content.jdmagicbox.com/v2/comp/mumbai/x2/022pxx22.xx22.210819094024.p1x2/catalogue/nagindas-khandwala-college-autonomous-malad-west-mumbai-science-colleges-EWRilQM4ZJ.jpg' }
];

function download(url, dest) {
  return new Promise((resolve) => {
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8'
      },
      timeout: 10000
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve);
      }
      if (res.statusCode !== 200) {
        console.log(`❌ Failed ${res.statusCode} for ${url}`);
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
      console.log(`❌ Error: ${e.message}`);
      resolve(false);
    });
  });
}

async function run() {
  for (const item of NEW_PHOTOS) {
    const dest = path.join(CAMPUSES_DIR, item.filename);
    await download(item.url, dest);
  }
}

run();
