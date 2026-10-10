const https = require('https');

function getCleanSearchQuery(name, loc, state) {
  let q = name
    .replace(/\[.*?\]/g, ' ')
    .replace(/\(.*?\)/g, ' ')
    .replace(/\b(MAHARASHTRA|KARNATAKA|TAMIL NADU|UTTAR PRADESH|DELHI|PUNJAB|GUJARAT|RAJASTHAN|INDIA)\b/gi, '')
    .replace(/\b(DEPARTMENT OF MANAGMENT STUDIES|DEPARTMENT OF MANAGEMENT|DEEMED TO BE UNIVERSITY|AFFILIATED TO|COLLEGE OF ARTS AND|COLLEGE OF COMMERCE AND|SCIENCE AND COMMERCE|DEGREE COLLEGE)\b/gi, ' ')
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  
  const tokens = q.split(' ').filter(t => t.length > 2);
  const shortQ = tokens.slice(0, 4).join(' ');
  return `${shortQ} ${loc || ''} campus building`.trim();
}

function search(name, loc, state) {
  const query = getCleanSearchQuery(name, loc, state);
  const url = `https://www.bing.com/images/search?q=${encodeURIComponent(query)}&qft=+filterui:imagesize-large`;

  return new Promise((resolve) => {
    const req = https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9'
      },
      timeout: 8000
    }, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        const matches = [...data.matchAll(/murl&quot;:&quot;(http[^&]+?)&quot;/g)].map(m => m[1]);
        resolve({ query, matches: matches.slice(0, 5) });
      });
    });
    req.on('error', () => resolve({ query, matches: [] }));
  });
}

async function test() {
  const list = [
    { name: 'KANDIVLI EDUCATION SOCIETY B K SHROFF COLLEGE OF ARTS AND M H SHROFF COLLEGE OF COMMERCE', location: 'MUMBAI', state: 'MAHARASHTRA' },
    { name: 'PSSVMS SAILEE DEGREE COLLEGE', location: 'MUMBAI', state: 'MAHARASHTRA' },
    { name: 'THAKUR SHYAMNARAYAN ENGINEERING COLLEGE', location: 'MUMBAI', state: 'MAHARASHTRA' },
    { name: 'CHETANA\'S INSTITUTE OF MANAGEMENT AND RESEARCH', location: 'MUMBAI', state: 'MAHARASHTRA' },
    { name: 'DY PATIL COLLEGE OF ENGINEERING AKURDI', location: 'PUNE', state: 'MAHARASHTRA' },
    { name: 'SINHGAD COLLEGE OF ENGINEERING VADGAON', location: 'PUNE', state: 'MAHARASHTRA' }
  ];

  for (const c of list) {
    const res = await search(c.name, c.location, c.state);
    console.log(`\n🏫 ${c.name}`);
    console.log(`   🔎 Query: "${res.query}"`);
    console.log(`   📸 Top URLs:`, res.matches);
  }
}

test();
