const https = require('https');
const http = require('http');
const { EXACT_USER_COLLEGE_PHOTOS } = require('./exact_user_college_photos.cjs');

async function testAll() {
  const urls = [...new Set(Object.values(EXACT_USER_COLLEGE_PHOTOS))];
  console.log('Testing', urls.length, 'unique URLs...');
  for (const u of urls) {
    const client = u.startsWith('https') ? https : http;
    await new Promise((resolve) => {
      const req = client.get(u, { headers: { 'User-Agent': 'Mozilla/5.0' }, timeout: 8000 }, (res) => {
        console.log(`[${res.statusCode}] ${res.headers['content-type']} -> ${u}`);
        resolve();
      });
      req.on('error', (e) => { console.log(`[ERR] ${e.message} -> ${u}`); resolve(); });
      req.on('timeout', () => { req.destroy(); console.log(`[TIMEOUT] ${u}`); resolve(); });
    });
  }
}
testAll();
