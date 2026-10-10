const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');
const rawData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const colleges = Array.isArray(rawData) ? rawData : rawData.colleges;

console.log(`Total colleges in siteData.json: ${colleges.length}`);

// Group by ID range to show legacy vs newly added
const legacy = colleges.filter(c => c.id <= 7640);
const newlyAdded = colleges.filter(c => c.id > 7640);

console.log(`\nLegacy / Base Colleges (ID <= 7640): ${legacy.length}`);
console.log(`Newly Added Colleges (ID > 7640): ${newlyAdded.length}`);

// Check local campus images vs verified educational CDNs
function categorizeImages(list) {
  let localCount = 0;
  let wikimediaCount = 0;
  let trustedPortalCount = 0;
  let otherCount = 0;

  list.forEach(c => {
    const img = c.img || c.image || '';
    if (img.startsWith('/images/campuses/')) localCount++;
    else if (img.includes('wikimedia.org')) wikimediaCount++;
    else if (img.includes('shiksha') || img.includes('careers360') || img.includes('collegebatch') || img.includes('collegedekho') || img.includes('jdmagicbox') || img.includes('vidyavision') || img.includes('getmyuni') || img.includes('jagranjosh')) trustedPortalCount++;
    else otherCount++;
  });

  return { localCount, wikimediaCount, trustedPortalCount, otherCount };
}

console.log('\n--- Newly Added Colleges (ID 7641 - 12656) Image Stats ---');
console.log(categorizeImages(newlyAdded));

console.log('\n--- All 12,656 Colleges Image Stats ---');
console.log(categorizeImages(colleges));
