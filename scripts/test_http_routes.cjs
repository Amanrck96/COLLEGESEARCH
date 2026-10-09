const http = require('http');

function testUrl(url) {
  return new Promise((resolve) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({ status: res.statusCode, length: data.length });
      });
    }).on('error', (err) => resolve({ error: err.message }));
  });
}

async function run() {
  const urls = [
    'http://localhost:5173/',
    'http://localhost:5173/colleges',
    'http://localhost:5173/college/5011',
    'http://localhost:5173/college/6346',
    'http://localhost:5173/college/3889',
    'http://localhost:5173/college/5527',
    'http://localhost:5173/college/5660',
    'http://localhost:5173/college/7609'
  ];

  for (const u of urls) {
    const res = await testUrl(u);
    console.log(`[${res.status || 'ERR'}] ${u} (HTML bytes: ${res.length || res.error})`);
  }
}

run();
