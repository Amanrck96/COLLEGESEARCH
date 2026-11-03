const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const colleges = Array.isArray(siteData) ? siteData : (siteData.colleges || []);

console.log('==================================================================');
console.log(`  COMPREHENSIVE QUALITY AUDIT ACROSS ALL ${colleges.length} COLLEGES`);
console.log('==================================================================\n');

let genericFallbacks = 0;
let realCampusImages = 0;
let placeholderShortNames = 0;
let boilerplateAbout = 0;
let mismatchedGalleries = 0;
let missingCity = 0;

const fallbackPool = new Set([
  '/images/campuses/campus_architecture_1.jpg',
  '/images/campuses/campus_architecture_2.jpg',
  '/images/campuses/campus_architecture_3.jpg',
  '/images/campuses/campus_architecture_4.jpg',
  '/images/campuses/campus_architecture_5.jpg',
  '/images/campuses/campus_architecture_6.jpg',
  '/images/campuses/campus_architecture_7.jpg',
  '/images/campuses/campus_architecture_8.jpg',
  '/images/campuses/campus_architecture_9.jpg',
  '/images/campuses/campus_architecture_10.jpg'
]);

const collegesNeedingEnhancement = [];

colleges.forEach((c, idx) => {
  const isGenericImg = !c.img || fallbackPool.has(c.img) || c.img.includes('campus_architecture_');
  if (isGenericImg) genericFallbacks++;
  else realCampusImages++;

  const isPlaceholderShort = !c.shortName || 
    c.shortName.startsWith('Course Institute') || 
    c.shortName.startsWith('COLLEGE') || 
    c.shortName.length > 25 ||
    c.shortName === c.name;
  if (isPlaceholderShort) placeholderShortNames++;

  const isBoilerplateAbout = !c.about || c.about.startsWith('Welcome to ') || c.about.includes('premier institute located in');
  if (isBoilerplateAbout) boilerplateAbout++;

  const galleryStr = Array.isArray(c.gallery) ? c.gallery.join(' ') : String(c.gallery || '');
  const hasMismatchedGallery = (galleryStr.includes('IIM_Ahmedabad') && !c.name.includes('IIM')) ||
    (galleryStr.includes('AIIMS_New_Delhi') && !c.name.includes('AIIMS'));
  if (hasMismatchedGallery) mismatchedGalleries++;

  if (!c.city) missingCity++;

  if (isGenericImg || isPlaceholderShort || isBoilerplateAbout || hasMismatchedGallery) {
    collegesNeedingEnhancement.push({
      id: c.id,
      name: c.name,
      shortName: c.shortName,
      img: c.img,
      state: c.state,
      isGenericImg,
      isPlaceholderShort,
      isBoilerplateAbout,
      hasMismatchedGallery
    });
  }
});

console.log(`1. Image Distribution:`);
console.log(`   - Authentic / Curated Campus Images: ${realCampusImages} (${((realCampusImages / colleges.length) * 100).toFixed(1)}%)`);
console.log(`   - Generic Architectural Fallbacks:   ${genericFallbacks} (${((genericFallbacks / colleges.length) * 100).toFixed(1)}%)`);
console.log(`\n2. Metadata Quality:`);
console.log(`   - Placeholder Short Names:           ${placeholderShortNames}`);
console.log(`   - Boilerplate Descriptions:          ${boilerplateAbout}`);
console.log(`   - Cross-Institution Gallery Links:   ${mismatchedGalleries}`);
console.log(`   - Missing Structured City:           ${missingCity}`);
console.log(`\nTotal Colleges Flagged for Automated Perfection: ${collegesNeedingEnhancement.length}`);

console.log('\nTop 10 Sample Colleges Needing Enhancement:');
collegesNeedingEnhancement.slice(0, 10).forEach(c => {
  console.log(`- [ID ${c.id}] ${c.name} (${c.state}): genericImg=${c.isGenericImg}, placeholderShort=${c.isPlaceholderShort}`);
});
