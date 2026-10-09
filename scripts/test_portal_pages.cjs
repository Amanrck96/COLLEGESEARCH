const https = require('https');
const http = require('http');
const cheerio = require('cheerio');

function fetchPage(url) {
  return new Promise((resolve) => {
    const mod = url.startsWith('https') ? https : http;
    const req = mod.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
      },
      timeout: 10000
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    });
    req.on('error', () => resolve(''));
    req.on('timeout', () => { req.destroy(); resolve(''); });
  });
}

async function run() {
  const urls = [
    'https://collegedunia.com/college/17030-abs-academy-of-science-technology-and-management-bardhaman',
    'https://collegedunia.com/college/62633-abbas-khan-college-for-women-bangalore',
    'http://www.arbcollege.com/'
  ];
  for (const u of urls) {
    console.log('=== Fetching:', u);
    const html = await fetchPage(u);
    const $ = cheerio.load(html);
    const og = $('meta[property="og:image"]').attr('content') || $('meta[name="og:image"]').attr('content');
    console.log(' og:image ->', og);
    $('img').slice(0, 5).each((_, el) => {
      console.log(' img src ->', $(el).attr('src') || $(el).attr('data-src'));
    });
  }
}
run();
