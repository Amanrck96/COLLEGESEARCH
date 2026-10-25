const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');
const rawData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const colleges = Array.isArray(rawData) ? rawData : rawData.colleges;

const testIds = [1, 2806, 2937, 3741, 10634, 10635, 11001, 12655];
testIds.forEach(id => {
  const c = colleges.find(x => x.id === id);
  if (c) {
    console.log(`\n--- College ID ${c.id}: ${c.name} ---`);
    console.log(`Location: ${c.location}, ${c.state}`);
    console.log(`Image: ${c.img}`);
    console.log(`Gallery Count: ${c.gallery ? c.gallery.length : 0}`);
    console.log(`Map: ${c.mapUrl}`);
    console.log(`Courses Count: ${c.courses ? c.courses.length : 0}`);
    console.log(`Rating: ${c.rating} (${c.reviewsCount} reviews) | Fees: ${c.fees}`);
  } else {
    console.log(`College ID ${id} not found!`);
  }
});
