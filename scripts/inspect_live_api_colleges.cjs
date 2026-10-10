const http = require('http');

const queries = [
  'SVIMS BUSINESS SCHOOL',
  'BHARATI VIDYAPEETH',
  'ATHARVA SCHOOL OF BUSINESS',
  'THAKUR GLOBAL BUSINESS SCHOOL',
  'WELINGKAR INSTITUTE OF MANAGEMENT',
  'SIR J. J. INSTITUTE OF APPLIED ART',
  'ALKESH DINESH MODY',
  'ATHARVA INSTITUTE OF MANAGEMENT',
  "CHETANA'S RAMPRASAD",
  'BUNTS SANGHA',
  'VALIA SCHOOL OF MANAGEMENT'
];

async function checkApi(q) {
  return new Promise((resolve) => {
    http.get(`http://localhost:5000/api/colleges?q=${encodeURIComponent(q)}`, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const cols = json.colleges || [];
          console.log(`\n======================================================`);
          console.log(`QUERY: "${q}" (Total: ${json.totalCount || cols.length})`);
          cols.slice(0, 2).forEach(c => {
            console.log(`[ID ${c.id}] ${c.name}`);
            console.log(`  img:   "${c.img}"`);
            console.log(`  image: "${c.image}"`);
          });
          resolve();
        } catch (e) {
          console.log(`Error parsing for "${q}":`, e.message);
          resolve();
        }
      });
    }).on('error', (e) => {
      console.log(`Connection error for "${q}":`, e.message);
      resolve();
    });
  });
}

async function run() {
  for (const q of queries) {
    await checkApi(q);
  }
}

run();
