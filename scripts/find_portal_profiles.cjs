const https = require('https');
const http = require('http');

function fetchPortalPage(url) {
  return new Promise((resolve) => {
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
      },
      timeout: 10000
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, body: data }));
    });
    req.on('error', () => resolve({ status: 0, body: '' }));
    req.on('timeout', () => { req.destroy(); resolve({ status: 408, body: '' }); });
  });
}

function searchBingForEducationalPortals(query) {
  const q = encodeURIComponent(query);
  const url = `https://www.bing.com/search?q=${q}`;

  return new Promise((resolve) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      },
      timeout: 10000
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const matches = [...data.matchAll(/href="(https:\/\/(www\.)?(shiksha\.com\/college|collegedunia\.com\/college|careers360\.com\/colleges|justdial\.com\/[^\/]+\/[^\/]+-colleges)[^"]+?)"/gi)].map(m => m[1]);
        resolve([...new Set(matches)]);
      });
    }).on('error', () => resolve([]));
  });
}

const targets = [
  'PUNE INSTITUTE OF BUSINESS MANAGEMENT Pune',
  'SVIMS BUSINESS SCHOOL Wadala Mumbai',
  'BHARATI VIDYAPEETH DEEMED TO BE UNIVERSITY DEPARTMENT OF MANAGMENT STUDIES Navi Mumbai',
  'ATHARVA SCHOOL OF BUSINESS Malad Mumbai',
  'THAKUR GLOBAL BUSINESS SCHOOL Kandivali Mumbai',
  'WELINGKAR INSTITUTE OF MANAGEMENT DEVELOPMENT AND RESEARCH Matunga Mumbai',
  'SIR J. J. INSTITUTE OF APPLIED ART Fort Mumbai',
  'ALKESH DINESH MODY INSTITUTE Mumbai',
  'ATHARVA INSTITUTE OF MANAGEMENT STUDIES Malad Mumbai',
  "CHETANA'S RAMPRASAD KHANDELWAL INSTITUTE OF MANAGEMENT Bandra Mumbai",
  'VALIA SCHOOL OF MANAGEMENT Andheri Mumbai',
  'BUNTS SANGHA MUMBAI ANNNA LEELA COLLEGE Kurla Mumbai'
];

async function run() {
  for (const t of targets) {
    console.log(`\n🏫 Target: ${t}`);
    const urls = await searchBingForEducationalPortals(t);
    console.log(`   Found ${urls.length} educational portal profiles:`);
    urls.slice(0, 4).forEach(u => console.log(`   - ${u}`));
    await new Promise(r => setTimeout(r, 600));
  }
}

run();
