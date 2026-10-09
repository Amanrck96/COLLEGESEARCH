const http = require('http');

function check(url) {
  return new Promise((resolve) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const j = JSON.parse(data);
          console.log(`[${res.statusCode}] ${url} -> totalCount: ${j.totalCount || 'N/A'}, name: ${j.name || (j.colleges ? 'Returned ' + j.colleges.length + ' colleges' : 'N/A')}`);
        } catch(e) {
          console.log(`[${res.statusCode}] ${url} -> Non-JSON response`);
        }
        resolve();
      });
    }).on('error', (e) => {
      console.log(`[ERR] ${url} -> ${e.message}`);
      resolve();
    });
  });
}

async function run() {
  await check('http://localhost:5000/api/colleges?limit=5');
  await check('http://localhost:5000/api/colleges/1');
  await check('http://localhost:5000/api/colleges/10634');
  await check('http://localhost:5000/api/colleges/10635');
  await check('http://localhost:5000/api/colleges/12655');
}
run();
