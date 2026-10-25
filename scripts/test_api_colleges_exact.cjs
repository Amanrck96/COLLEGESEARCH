const http = require('http');

async function checkCollegeApi(query) {
  return new Promise((resolve) => {
    http.get(`http://localhost:5000/api/colleges?q=${encodeURIComponent(query)}`, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const colleges = json.colleges || [];
          if (colleges.length > 0) {
            console.log(`✅ [FOUND] "${query}" -> [ID ${colleges[0].id}] ${colleges[0].name}`);
            console.log(`   Img: ${colleges[0].img || colleges[0].image}`);
          } else {
            console.log(`❌ [NOT FOUND] "${query}"`);
          }
          resolve();
        } catch (e) {
          console.log(`❌ [ERR] "${query}": ${e.message}`);
          resolve();
        }
      });
    }).on('error', (e) => {
      console.log(`❌ [CONN ERR] ${e.message}`);
      resolve();
    });
  });
}

async function run() {
  console.log('Testing live backend API on port 5000...');
  const tests = [
    'KANDIVLI EDUCATION SOCIETY',
    'SAILEE DEGREE COLLEGE',
    'IIT Bombay',
    'KOHINOOR MANAGEMENT SCHOOL',
    'GNIMS BUSINESS SCHOOL',
    'THAKUR SHYAMNARAYAN',
    "CHETANA'S INSTITUTE OF MANAGEMENT",
    'THAKUR INSTITUTE OF MANAGEMENT STUDIES, CAREER'
  ];

  for (const t of tests) {
    await checkCollegeApi(t);
  }
}

run();
