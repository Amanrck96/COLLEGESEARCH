const https = require('https');

const testUrls = [
  'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/51/St._Xavier%E2%80%99s_College%2C_Mumbai_02.jpg/1280px-St._Xavier%E2%80%99s_College%2C_Mumbai_02.jpg',
  'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/89/Anna_university_01.jpg/1280px-Anna_university_01.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/b/b4/VJTI_Quadrangle.jpg',
  'https://static.boostmytalent.com/img/univ/pibm-pune-campus-admission.webp',
  'https://theacademicinsights.com/wp-content/uploads/2021/11/weschool-mumbai.jpeg',
  'https://assets.kollegeapply.com/images/1751570673506-1619502621phpC9XpVl.jpeg'
];

async function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    }, (res) => {
      console.log(`[${res.statusCode}] ${res.headers['content-type']} -> ${url.substring(0, 70)}...`);
      resolve(res.statusCode);
    }).on('error', (e) => {
      console.log(`[ERR] ${e.message} -> ${url.substring(0, 70)}...`);
      resolve(0);
    });
  });
}

async function run() {
  for (const u of testUrls) {
    await checkUrl(u);
  }
}

run();
