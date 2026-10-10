const https = require('https');

function fetchWithRedirect(url) {
  return new Promise((resolve) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        console.log(`Redirecting [${res.statusCode}] to: ${res.headers.location}`);
        https.get(res.headers.location, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
          }
        }, (res2) => {
          console.log(`Final [${res2.statusCode}] content-type: ${res2.headers['content-type']}`);
          resolve(res2.statusCode);
        });
      } else {
        console.log(`Direct [${res.statusCode}] content-type: ${res.headers['content-type']}`);
        resolve(res.statusCode);
      }
    });
  });
}

fetchWithRedirect('https://commons.wikimedia.org/wiki/Special:FilePath/IIT_Delhi_Main_Building.jpg?width=1000');
