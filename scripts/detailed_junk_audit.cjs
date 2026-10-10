const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');
const raw = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const colleges = raw.colleges || [];

const badList = [];

colleges.forEach(c => {
  const img = (c.image || c.imageUrl || '').trim();
  const lower = img.toLowerCase();
  
  // 1. News websites or news paths
  if (
    lower.includes('news18.com') ||
    lower.includes('indianexpress.com') ||
    lower.includes('timesofindia') ||
    lower.includes('thehindu.com') ||
    lower.includes('ndtv.com') ||
    lower.includes('/news/') ||
    lower.includes('/article_images/') ||
    lower.includes('/articles/')
  ) {
    badList.push({ id: c.id, name: c.name, img, reason: 'News/Article source' });
    return;
  }

  // 2. People, faculty, staff, events, festivals
  if (
    lower.includes('faculty') ||
    lower.includes('staff') ||
    lower.includes('principal') ||
    lower.includes('chancellor') ||
    lower.includes('director') ||
    lower.includes('chairman') ||
    lower.includes('teacher') ||
    lower.includes('alumni') ||
    lower.includes('event') ||
    lower.includes('farewell') ||
    lower.includes('republic') ||
    lower.includes('independence') ||
    lower.includes('sports') ||
    lower.includes('workshop') ||
    lower.includes('seminar') ||
    lower.includes('conference') ||
    lower.includes('celebration') ||
    lower.includes('prize') ||
    lower.includes('medal') ||
    lower.includes('conquest') ||
    lower.includes('cricket') ||
    lower.includes('football')
  ) {
    badList.push({ id: c.id, name: c.name, img, reason: 'Person/Event/Festival' });
    return;
  }

  // 3. Low quality / temporary / review screenshots / social media
  if (
    lower.includes('reviewphotos') ||
    lower.includes('screenshot') ||
    lower.includes('whatsapp') ||
    lower.includes('download_') ||
    lower.includes('download%20_') ||
    lower.includes('career-topbg') ||
    lower.includes('social-media') ||
    lower.includes('480x330') ||
    lower.includes('demo') ||
    lower.includes('placeholder')
  ) {
    badList.push({ id: c.id, name: c.name, img, reason: 'Review/Screenshot/Social Media/Placeholder' });
    return;
  }

  // 4. Insecure HTTP
  if (img.startsWith('http://')) {
    badList.push({ id: c.id, name: c.name, img, reason: 'Insecure HTTP' });
    return;
  }

  // 5. Drawings, vectors, maps, logos, flags
  if (
    lower.includes('drawing') ||
    lower.includes('sketch') ||
    lower.includes('vector') ||
    lower.includes('clipart') ||
    lower.includes('cartoon') ||
    lower.includes('illustration') ||
    lower.includes('map') ||
    lower.includes('locator') ||
    lower.includes('diagram') ||
    lower.includes('chart') ||
    lower.includes('flag') ||
    lower.includes('coat_of_arms') ||
    lower.includes('emblem') ||
    lower.includes('stamp') ||
    lower.includes('seal') ||
    lower.includes('logo') ||
    lower.includes('crest')
  ) {
    badList.push({ id: c.id, name: c.name, img, reason: 'Drawing/Map/Logo/Flag' });
    return;
  }
});

console.log(`Total colleges flagged with non-campus/junk/broken images: ${badList.length}`);
console.log("\nBreakdown by reason:");
const reasonMap = {};
badList.forEach(b => {
  reasonMap[b.reason] = (reasonMap[b.reason] || 0) + 1;
});
console.table(reasonMap);

console.log("\nSample of flagged entries:");
badList.slice(0, 20).forEach(b => {
  console.log(`[${b.id}] ${b.name} -> (${b.reason}) ${b.img}`);
});
