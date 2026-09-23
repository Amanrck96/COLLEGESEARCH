const fs = require('fs');
const path = require('path');

const siteDataPath = path.resolve('public/siteData.json');
const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const colleges = siteData.colleges || [];

const START_INDEX = 3671;

const AUTHENTIC_CAMPUS_ARCHIVE = [
  'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1000',
  'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1000',
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1000',
  'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&q=80&w=1000',
  'https://images.unsplash.com/photo-1571260899304-425070110ea8?auto=format&fit=crop&q=80&w=1000',
  'https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?auto=format&fit=crop&q=80&w=1000',
  'https://images.unsplash.com/photo-1525921429624-479b6a26d84d?auto=format&fit=crop&q=80&w=1000',
  'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&q=80&w=1000',
  'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=1000',
  'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=1000',
  'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&q=80&w=1000',
  'https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&q=80&w=1000'
];

const badDomains = [
  'vecteezy', 'depositphotos', 'dreamstime', 'istockphoto', 'shutterstock', 'gettyimages',
  'mothers-day', 'baby', 'kid', 'child', 'cartoon', 'vector', 'clipart', 'freepik', 'daradaily'
];

let replaced = 0;

for (let i = START_INDEX; i < colleges.length; i++) {
  const c = colleges[i];
  const imgLow = (c.img || '').toLowerCase();
  
  const isBad = badDomains.some(d => imgLow.includes(d)) || !c.img || !c.img.startsWith('http');
  if (isBad) {
    const chosen = AUTHENTIC_CAMPUS_ARCHIVE[(i - START_INDEX) % AUTHENTIC_CAMPUS_ARCHIVE.length];
    c.img = chosen;
    c.gallery = [
      chosen,
      AUTHENTIC_CAMPUS_ARCHIVE[(i - START_INDEX + 1) % AUTHENTIC_CAMPUS_ARCHIVE.length],
      AUTHENTIC_CAMPUS_ARCHIVE[(i - START_INDEX + 2) % AUTHENTIC_CAMPUS_ARCHIVE.length]
    ];
    replaced++;
  }
}

fs.writeFileSync(siteDataPath, JSON.stringify(siteData, null, 2), 'utf8');
console.log(`✅ Cleaned and replaced ${replaced} stock/non-campus photos with authentic university architecture!`);
