const https = require('https');

function fetchWikiImage(title) {
  return new Promise((resolve) => {
    const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&format=json&pithumbsize=1000`;
    https.get(url, {
      headers: { 'User-Agent': 'CollegeSearchBot/2.0 (contact@collegesearch.org)' }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const pages = json.query && json.query.pages ? Object.values(json.query.pages) : [];
          if (pages.length > 0 && pages[0].thumbnail) {
            resolve({ title, thumbnail: pages[0].thumbnail.source, pageImage: pages[0].pageimage });
          } else {
            resolve({ title, error: 'No thumbnail found' });
          }
        } catch (e) {
          resolve({ title, error: e.message });
        }
      });
    }).on('error', (e) => resolve({ title, error: e.message }));
  });
}

async function test() {
  const colleges = [
    'Indian Institute of Technology Kanpur',
    'Indian Institute of Technology Kharagpur',
    'Indian Institute of Technology Madras',
    'Indian Institute of Technology Roorkee',
    'Indian Institute of Technology Jodhpur',
    'Indian Institute of Management Ahmedabad',
    'Indian Institute of Management Calcutta',
    'Indian Institute of Management Lucknow',
    'National Institute of Technology, Tiruchirappalli',
    'National Institute of Technology Karnataka',
    'National Institute of Technology, Rourkela',
    'BITS Pilani',
    'Anna University',
    'Jadavpur University',
    'Banaras Hindu University',
    'Aligarh Muslim University',
    'University of Delhi',
    'St. Xavier\'s College, Mumbai',
    'Fergusson University',
    'Loyola College, Chennai',
    'Christ University'
  ];

  for (const c of colleges) {
    const res = await fetchWikiImage(c);
    console.log(c, '->', res.thumbnail || res.error);
  }
}

test();
