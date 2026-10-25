const fs = require('fs');
const path = require('path');
const https = require('https');

const CAMPUSES_DIR = path.join(__dirname, '..', 'public', 'images', 'campuses');

// Reliable educational CDNs / Wikipedia image mirrors / verified URLs
const ADDITIONAL_CAMPUS_VAULT = [
  { filename: 'campus_iit_bombay.jpg', url: 'https://top10sense.com/wp-content/uploads/2025/05/Main-campus-building-of-IIT-Bombay-one-of-the-top-engineering-colleges-in-India-1181x675.webp' },
  { filename: 'campus_iit_delhi.jpg', url: 'https://top10sense.com/wp-content/uploads/2025/05/Main-campus-building-of-Delhi-Technological-University-one-of-the-top-engineering-colleges-in--1181x675.webp' },
  { filename: 'campus_iit_madras.jpg', url: 'https://images.collegedunia.com/public/college_data/images/appImage/1509431448p1.jpg?mode=stretch' },
  { filename: 'campus_iim_ahmedabad.jpg', url: 'https://theacademicinsights.com/wp-content/uploads/2021/11/IIM-Ahmedabad.jpg' },
  { filename: 'campus_iim_bangalore.jpg', url: 'https://theacademicinsights.com/wp-content/uploads/2021/11/IIM-Bangalore.jpg' },
  { filename: 'campus_iim_calcutta.jpg', url: 'https://theacademicinsights.com/wp-content/uploads/2021/11/IIM-Calcutta.jpg' },
  { filename: 'campus_iim_lucknow.jpg', url: 'https://theacademicinsights.com/wp-content/uploads/2021/11/IIM-Lucknow.jpg' },
  { filename: 'campus_coep_pune.png', url: 'https://static.wixstatic.com/media/21ca59_66691aea4d624e1ebd4afb1155e59497~mv2.png' },
  { filename: 'campus_vnit_nagpur.jpeg', url: 'https://static.wixstatic.com/media/46ae6b_b24582e12f4a408da0aa463d7bebef31~mv2.jpeg' },
  { filename: 'campus_trinity_pune.png', url: 'https://static.wixstatic.com/media/9565f1_d7543d5b992b48d7b0e5b541c13a286b~mv2.png' },
  { filename: 'campus_iit_patna.png', url: 'https://static.wixstatic.com/media/6519cf_d6a8d0f8a0684de3bba8a7fbb11d3842~mv2.png' },
  { filename: 'campus_mgm_navi_mumbai.jpg', url: 'https://static.wixstatic.com/media/50456a_a479533676ef42a4964508c9571209d1~mv2.jpg' },
  { filename: 'campus_cu_shah_mumbai.png', url: 'https://static.wixstatic.com/media/846103_c95252602353469d9e999a74e5f63286~mv2.png' }
];

function download(url, dest) {
  return new Promise((resolve) => {
    https.get(url, {
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
    }).on('error', () => resolve(false));
  });
}

async function run() {
  console.log('Downloading additional Indian campus vault photos...');
  for (const c of ADDITIONAL_CAMPUS_VAULT) {
    const dest = path.join(CAMPUSES_DIR, c.filename);
    if (!fs.existsSync(dest)) {
      await download(c.url, dest);
    }
  }
}

run();
