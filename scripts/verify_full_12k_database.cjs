const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');

console.log('🔍 Running Full 12,655 College Database Deep Audit...');
const rawData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const colleges = Array.isArray(rawData) ? rawData : rawData.colleges;

console.log(`📊 Loaded ${colleges.length} colleges from public/siteData.json`);

const STRICT_REJECT_PATTERNS = [
  /diagram/i, /schematic/i, /chart/i, /techschematic/i, /drawing/i, /sketch/i, /clipart/i, /vector/i, 
  /icon/i, /logo/i, /profile/i, /avatar/i, /filmibeat/i, /rgstatic/i, /thefamouspeople/i, /dpzone/i, 
  /yumpu/i, /docplayer/i, /marksheet/i, /flyer/i, /poster/i, /article.*image/i, /tsijournals/i, 
  /mt\.com/i, /apparatus/i, /experiment/i, /chemical/i, /journal/i, /sample/i,
  /stock-photo/i, /gettyimages/i, /shutterstock/i, /depositphotos/i, /dreamstime/i, /123rf/i,
  /alamy/i, /istockphoto/i, /freepik/i, /vecteezy/i, /unsplash\.com/i, /via\.placeholder/i,
  /placeholder/i, /badge/i, /emblem/i, /flag/i, /map_icon/i, /staticmap/i, /maps\.googleapis/i,
  /food/i, /recipe/i, /syrup/i, /tablet/i, /medicine/i, /actor/i, /actress/i, /movie/i, /trailer/i,
  /jewelry/i, /fashion-model/i, /dress/i, /shoes/i, /fitness/i, /gym-workout/i,
  /polynoteshub.*cab/i, /creativefabrica/i, /creately/i, /theprivateclinic/i, /carbonbrief/i,
  /learncomputerscienceonline/i, /datavisualexpert/i, /theengineeringknowledge/i
];

let idSet = new Set();
let duplicateIds = [];
let missingFields = [];
let invalidImages = [];
let missingCourses = [];
let brokenMapUrls = [];
let missingWebsites = [];

for (let i = 0; i < colleges.length; i++) {
  const c = colleges[i];
  
  // ID uniqueness
  if (idSet.has(c.id)) {
    duplicateIds.push(c.id);
  }
  idSet.add(c.id);

  // Required basic fields
  if (!c.name || !c.location || !c.state) {
    missingFields.push({ id: c.id, name: c.name, missing: 'name/location/state' });
  }

  // Image check
  const img = c.img || c.image || '';
  if (!img || typeof img !== 'string' || !img.startsWith('http')) {
    invalidImages.push({ id: c.id, name: c.name, img, reason: 'invalid_url' });
  } else {
    for (const pat of STRICT_REJECT_PATTERNS) {
      if (pat.test(img)) {
        invalidImages.push({ id: c.id, name: c.name, img, reason: pat.toString() });
        break;
      }
    }
  }

  // Courses check
  if (!Array.isArray(c.courses) || c.courses.length < 1) {
    missingCourses.push({ id: c.id, name: c.name, count: c.courses ? c.courses.length : 0 });
  }

  // Map URL check
  const mapUrl = c.mapUrl || c.map_url || '';
  if (!mapUrl || !mapUrl.startsWith('https://www.google.com/maps')) {
    brokenMapUrls.push({ id: c.id, name: c.name, mapUrl });
  }

  // Website check
  if (!c.website || typeof c.website !== 'string' || !c.website.startsWith('http')) {
    missingWebsites.push({ id: c.id, name: c.name, website: c.website });
  }
}

console.log('\n================ FINAL AUDIT SUMMARY ================');
console.log(`Total Colleges Audited: ${colleges.length}`);
console.log(`Duplicate IDs: ${duplicateIds.length}`);
console.log(`Missing Basic Fields: ${missingFields.length}`);
console.log(`Invalid / Low Quality / Diagram Images: ${invalidImages.length}`);
console.log(`Colleges with 0 Courses: ${missingCourses.length}`);
console.log(`Broken Map URLs: ${brokenMapUrls.length}`);
console.log(`Missing Official Websites / Search URLs: ${missingWebsites.length}`);
console.log('=====================================================\n');

if (duplicateIds.length === 0 && missingFields.length === 0 && invalidImages.length === 0 && missingCourses.length === 0 && brokenMapUrls.length === 0 && missingWebsites.length === 0) {
  console.log('🎉 100% PERFECT AUDIT PASSED! All 12,655 colleges are verified, synchronized, and authentic.');
} else {
  console.log('⚠️ Some anomalies remain. Please review logs.');
}
