const https = require('https');

async function testWikimedia(url) {
  return new Promise((resolve) => {
    const req = https.get(url, {
      headers: {
        'User-Agent': 'CollegePortalBot/1.0 (https://collegesearch-live.vercel.app; admin@collegesearch.com) Node.js/18.0'
      }
    }, (res) => {
      console.log(`[${res.statusCode}] ${res.headers['content-type']} -> ${url}`);
      resolve(res.statusCode);
    });
    req.on('error', (e) => {
      console.log(`[ERR] ${e.message}`);
      resolve(0);
    });
  });
}

async function run() {
  await testWikimedia('https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/IIT_Delhi_Main_Building.jpg/1200px-IIT_Delhi_Main_Building.jpg');
  await testWikimedia('https://commons.wikimedia.org/wiki/Special:FilePath/IIT_Delhi_Main_Building.jpg?width=1200');
  await testWikimedia('https://upload.wikimedia.org/wikipedia/commons/1/1b/IIT_Delhi_Main_Building.jpg');
}

run();
