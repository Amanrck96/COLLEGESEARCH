const https = require('https');

async function queryWikimedia(searchQuery) {
  return new Promise((resolve) => {
    const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(searchQuery)}&gsrlimit=3&prop=imageinfo&iiprop=url|size|extmetadata&format=json`;
    https.get(url, {
      headers: {
        'User-Agent': 'CollegeCampusBot/1.0 (https://collegesearch-live.vercel.app; info@collegesearch.com)'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const pages = json.query ? Object.values(json.query.pages) : [];
          const results = pages.map(p => {
            const ii = p.imageinfo ? p.imageinfo[0] : null;
            return {
              title: p.title,
              url: ii ? ii.url : null,
              width: ii ? ii.width : null,
              height: ii ? ii.height : null
            };
          }).filter(r => r.url && (r.url.endsWith('.jpg') || r.url.endsWith('.jpeg') || r.url.endsWith('.png') || r.url.endsWith('.webp')));
          resolve(results);
        } catch (e) {
          resolve([]);
        }
      });
    }).on('error', () => resolve([]));
  });
}

async function run() {
  const queries = [
    'IIT Bombay main building',
    'College of Engineering Pune main building',
    'St. Xavier\'s College Mumbai building',
    'Fergusson College Pune building',
    'University of Mumbai Fort Campus',
    'Sir JJ School of Art building Mumbai',
    'IIM Ahmedabad building',
    'IIM Bangalore campus building',
    'Indian Institute of Science Bangalore building',
    'Anna University Chennai main building',
    'Loyola College Chennai building',
    'Banaras Hindu University main gate',
    'Presidency University Kolkata building',
    'BITS Pilani clock tower building'
  ];

  console.log('Querying Wikimedia API for Indian college campus buildings...');
  for (const q of queries) {
    const results = await queryWikimedia(q);
    console.log(`\n=== Query: "${q}" ===`);
    results.forEach(r => console.log(`  📸 ${r.title} -> ${r.url}`));
  }
}

run();
