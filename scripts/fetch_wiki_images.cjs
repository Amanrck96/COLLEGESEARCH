const https = require('https');

async function getWikiArticleImages(title) {
  return new Promise((resolve) => {
    const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&generator=images&gimlimit=10&prop=imageinfo&iiprop=url|size&format=json`;
    https.get(url, {
      headers: {
        'User-Agent': 'CollegeCampusBot/1.0 (info@collegesearch.com)'
      }
    }, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const pages = json.query ? Object.values(json.query.pages) : [];
          const images = pages.map(p => {
            const ii = p.imageinfo ? p.imageinfo[0] : null;
            return {
              title: p.title,
              url: ii ? ii.url : null,
              width: ii ? ii.width : null,
              height: ii ? ii.height : null
            };
          }).filter(r => r.url && (r.url.endsWith('.jpg') || r.url.endsWith('.jpeg') || r.url.endsWith('.png') || r.url.endsWith('.webp')) && !r.title.includes('Icon') && !r.title.includes('Logo') && !r.title.includes('Flag') && !r.title.includes('Map'));
          resolve(images);
        } catch (e) {
          resolve([]);
        }
      });
    }).on('error', () => resolve([]));
  });
}

async function run() {
  const titles = [
    'Alkesh Dinesh Mody Institute',
    'Sir Jamsetjee Jeejebhoy School of Art',
    'SVKM\'s NMIMS',
    'Veermata Jijabai Technological Institute',
    'St. Xavier\'s College, Mumbai',
    'University of Mumbai',
    'K. J. Somaiya College of Engineering',
    'Atharva College of Engineering',
    'Thakur College of Engineering and Technology',
    'Saraswati College of Engineering',
    'Guru Nanak Khalsa College of Arts, Science & Commerce',
    'SNDT Women\'s University',
    'Symbiosis International University',
    'Prin. L. N. Welingkar Institute of Management Development & Research',
    'College of Engineering, Pune',
    'Fergusson College'
  ];

  for (const t of titles) {
    const images = await getWikiArticleImages(t);
    console.log(`\n=== ${t} ===`);
    images.forEach(img => console.log(`  📸 ${img.title} -> ${img.url}`));
  }
}

run();
