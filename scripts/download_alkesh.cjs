const fs = require('fs');
const path = require('path');
const https = require('https');

function download(url, dest) {
  return new Promise((resolve) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8'
      }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve);
      }
      if (res.statusCode !== 200) {
        console.log(`Failed ${res.statusCode} for ${url}`);
        return resolve(false);
      }
      const stream = fs.createWriteStream(dest);
      res.pipe(stream);
      stream.on('finish', () => {
        stream.close();
        console.log(`✅ Downloaded ${dest} (${fs.statSync(dest).size} bytes)`);
        resolve(true);
      });
    }).on('error', (e) => {
      console.log(`Error ${e.message}`);
      resolve(false);
    });
  });
}

async function run() {
  const dest = path.join(__dirname, '..', 'public', 'images', 'campuses', 'alkesh_dinesh_mody_mumbai.jpg');
  await download('https://content.jdmagicbox.com/v2/comp/mumbai/45/022p4500945/catalogue/alkesh-dinesh-mody-institute-for-financial-and-management-studies-vidyanagri-kalina-mumbai-institutes-tknv4q.jpg', dest);
}

run();
