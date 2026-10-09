const https = require('https');
const cheerio = require('cheerio');

function searchDDG(query) {
  return new Promise((resolve) => {
    const postData = 'q=' + encodeURIComponent(query);
    const req = https.request('https://html.duckduckgo.com/html/', {
      method: 'POST',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
      },
      timeout: 10000
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const $ = cheerio.load(data);
        const links = [];
        $('.result__url').each((_, el) => {
          const href = $(el).attr('href') || $(el).text().trim();
          if (href) links.push(href);
        });
        $('.result__snippet').each((_, el) => {
          const parent = $(el).closest('.result');
          const link = parent.find('.result__url').text().trim();
          if (link) links.push(link);
        });
        resolve(links);
      });
    });
    req.on('error', () => resolve([]));
    req.on('timeout', () => { req.destroy(); resolve([]); });
    req.write(postData);
    req.end();
  });
}

async function run() {
  const tests = [
    'ABS Academy of Management and Health Science Bardhaman',
    'Abbas Khan College for Women Bangalore',
    'Abhishek Polytechnic College Firozpur',
    'Government Polytechnic Hosadurga Chitradurga',
    'A R Bhatt Computer Science College Una Gujarat',
    'Aadya Aviation Academy Bangalore'
  ];
  for (const t of tests) {
    console.log('Query:', t);
    const links = await searchDDG(t);
    console.log('Links:', links.slice(0, 3));
  }
}
run();
