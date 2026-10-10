const https = require('https');

async function getWikipediaLeadImage(articleTitle) {
  return new Promise((resolve) => {
    const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(articleTitle)}&prop=pageimages&format=json&pithumbsize=1000`;
    https.get(url, {
      headers: {
        'User-Agent': 'CollegeCampusBot/1.0 (admin@collegesearch.com)'
      }
    }, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const pages = Object.values(json.query.pages);
          if (pages.length && pages[0].thumbnail) {
            resolve({ title: pages[0].title, url: pages[0].thumbnail.source, width: pages[0].thumbnail.width, height: pages[0].thumbnail.height });
          } else {
            resolve(null);
          }
        } catch (e) {
          resolve(null);
        }
      });
    }).on('error', () => resolve(null));
  });
}

async function testAll() {
  const articles = [
    'Indian Institute of Technology Bombay',
    'College of Engineering, Pune',
    'Fergusson College',
    'University of Mumbai',
    'Sir Jamsetjee Jeejebhoy School of Art',
    'Veermata Jijabai Technological Institute',
    'Prin. L. N. Welingkar Institute of Management Development & Research',
    'St. Xavier\'s College, Mumbai',
    'Indian Institute of Technology Delhi',
    'Indian Institute of Management Ahmedabad',
    'Indian Institute of Science',
    'Anna University',
    'Banaras Hindu University',
    'BITS Pilani',
    'Indian Institute of Technology Madras',
    'Indian Institute of Technology Kharagpur',
    'Aligarh Muslim University',
    'Loyola College, Chennai',
    'Miranda House, University of Delhi',
    'St. Stephen\'s College, Delhi'
  ];

  console.log('Fetching lead images from English Wikipedia for Indian institutions...');
  for (const a of articles) {
    const res = await getWikipediaLeadImage(a);
    if (res) {
      console.log(`✅ ${res.title} -> ${res.url}`);
    } else {
      console.log(`❌ Not found: ${a}`);
    }
  }
}

testAll();
