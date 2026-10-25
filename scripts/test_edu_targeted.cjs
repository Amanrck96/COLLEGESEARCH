const https = require('https');

function searchBingEduTargeted(query) {
  const q = encodeURIComponent(query);
  const url = 'https://www.bing.com/images/search?q=' + q;
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
        const matches = [...data.matchAll(/murl&quot;:&quot;(http[^&]+?)&quot;/g)].map(m => m[1]);
        resolve(matches);
      });
    }).on('error', () => resolve([]));
  });
}

const tests = [
  'site:collegedunia.com "A R Bhatt Computer Science College"',
  'site:collegedunia.com "ABS Academy" Bardhaman',
  'site:collegedunia.com "Abbas Khan College for Women"',
  'site:careers360.com "Abhishek Polytechnic"',
  'site:targetstudy.com "Government Polytechnic" Hosadurga',
  'site:collegedunia.com "Aadya Academy"'
];

async function run() {
  for (const t of tests) {
    console.log('=== TEST:', t);
    const results = await searchBingEduTargeted(t);
    results.slice(0, 5).forEach((r, idx) => console.log(` ${idx + 1}: ${r}`));
  }
}
run();
