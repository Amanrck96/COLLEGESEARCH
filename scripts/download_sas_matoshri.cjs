const fs = require('fs');
const path = require('path');
const https = require('https');

function download(url, filename) {
  return new Promise((resolve) => {
    const dest = path.join(__dirname, '..', 'public', 'images', 'campuses', filename);
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8'
      }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, filename).then(resolve);
      }
      if (res.statusCode !== 200) {
        console.log(`❌ Failed ${res.statusCode} for ${url}`);
        return resolve(false);
      }
      const stream = fs.createWriteStream(dest);
      res.pipe(stream);
      stream.on('finish', () => {
        stream.close();
        console.log(`✅ Downloaded ${filename} (${fs.statSync(dest).size} bytes)`);
        resolve(true);
      });
    }).on('error', (e) => {
      console.log(`❌ Error: ${e.message}`);
      resolve(false);
    });
  });
}

async function run() {
  await download('https://content.jdmagicbox.com/v2/comp/mumbai/u9/022pxx22.xx22.110804153912.u9n6/catalogue/sas-institute-of-management-studies-saravali-mumbai-management-institutes-10s8k.jpg', 'sas_institute_boisar.jpg');
  await download('https://content.jdmagicbox.com/v2/comp/thane/t5/022pxx22.xx22.120531020105.n5t5/catalogue/matoshri-ushatai-jadhav-institute-of-management-studies-and-research-centre-bhiwandi-thane-institutes-for-mms-1cer80y2q3.jpg', 'matoshri_ushatai_jadhav.jpg');
}

run();
