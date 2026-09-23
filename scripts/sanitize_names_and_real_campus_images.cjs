const fs = require('fs');
const path = require('path');

const siteDataPath = path.resolve('public/siteData.json');
const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const colleges = siteData.colleges || [];

const START_INDEX = 3671;
let cleanedNames = 0;
let cleanedImages = 0;

// High-definition authentic Indian university & college campus buildings
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

for (let i = START_INDEX; i < colleges.length; i++) {
  const c = colleges[i];

  // 1. Clean Name
  const origName = c.name;
  let clean = origName
    .replace(/\b(Course Admissions|Course Admission|Admissions|Admission|Ranking|Rankings|Fee Structure|Fees|Cutoff|Cutoffs|Courses|Placement|Placements|2024|2025|2026)\b/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
  
  if (clean.length > 3 && clean !== origName) {
    c.name = clean;
    c.shortName = clean.split(' ').slice(0, 3).join(' ');
    cleanedNames++;
  }

  // 2. Validate Image (remove vectors/freepik/cartoons)
  const imgUrl = (c.img || '').toLowerCase();
  const badImage = imgUrl.includes('vector') || imgUrl.includes('freepik') || imgUrl.includes('cartoon') || imgUrl.includes('illustration') || imgUrl.includes('clipart') || imgUrl.includes('placeholder') || imgUrl.includes('.svg');

  if (badImage || !c.img || !c.img.startsWith('http')) {
    const fallbackImg = AUTHENTIC_CAMPUS_ARCHIVE[(i - START_INDEX) % AUTHENTIC_CAMPUS_ARCHIVE.length];
    c.img = fallbackImg;
    c.gallery = [
      fallbackImg,
      AUTHENTIC_CAMPUS_ARCHIVE[(i - START_INDEX + 1) % AUTHENTIC_CAMPUS_ARCHIVE.length],
      AUTHENTIC_CAMPUS_ARCHIVE[(i - START_INDEX + 2) % AUTHENTIC_CAMPUS_ARCHIVE.length]
    ];
    cleanedImages++;
  } else if (Array.isArray(c.gallery)) {
    // Also clean gallery
    c.gallery = c.gallery.map((g, gIdx) => {
      const gl = (g || '').toLowerCase();
      if (gl.includes('vector') || gl.includes('freepik') || gl.includes('cartoon') || gl.includes('illustration')) {
        return AUTHENTIC_CAMPUS_ARCHIVE[(i - START_INDEX + gIdx) % AUTHENTIC_CAMPUS_ARCHIVE.length];
      }
      return g;
    });
  }
}

fs.writeFileSync(siteDataPath, JSON.stringify(siteData, null, 2), 'utf8');
console.log(`✅ Cleaned ${cleanedNames} college names and replaced ${cleanedImages} non-building images!`);
