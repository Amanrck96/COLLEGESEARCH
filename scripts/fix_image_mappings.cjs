/**
 * CollegeSearch360 - Image Mapping Fix Script
 * 
 * Fixes:
 * 1. kohinoor_kurla.jpg (HTML file, not image) → generic fallback for 34 colleges
 * 2. rathinam_campus.jpg (koshys duplicate) → generic fallback for non-Rathinam colleges
 * 3. valia_andheri.jpeg (bunts_sangha duplicate) → generic fallback for non-Valia colleges
 * 4. campus_iit_patna.png → generic fallback for non-IIT Patna colleges
 * 5. srinivasan_perambalur.jpg → generic fallback for non-Srinivasan colleges
 */

const fs = require('fs');
const path = require('path');

const SITE_DATA = path.join(__dirname, '..', 'public', 'siteData.json');
const BACKUP_PATH = path.join(__dirname, '..', 'public', 'siteData.json.backup');

// Generic unbranded architecture images (no visible institution signage)
const GENERIC_IMAGES = [
  '/images/campuses/campus_architecture_1.jpg',
  '/images/campuses/campus_architecture_2.jpg',
  '/images/campuses/campus_architecture_3.jpg',
  '/images/campuses/campus_architecture_4.jpg',
  '/images/campuses/campus_architecture_5.jpg',
  '/images/campuses/campus_architecture_6.jpg',
  '/images/campuses/campus_architecture_7.jpg',
  '/images/campuses/campus_architecture_8.jpg',
  '/images/campuses/campus_architecture_9.jpg',
];

function getGenericImage(collegeId) {
  // Deterministic but distributed: use college ID modulo pool size
  const idx = Math.abs(Number(collegeId) || 0) % GENERIC_IMAGES.length;
  return GENERIC_IMAGES[idx];
}

console.log('\n=== CollegeSearch360 Image Mapping Fix ===\n');

// Step 1: Backup
if (!fs.existsSync(BACKUP_PATH)) {
  fs.copyFileSync(SITE_DATA, BACKUP_PATH);
  console.log('✓ Backup created:', BACKUP_PATH);
} else {
  console.log('ℹ Backup already exists, skipping backup step');
}

// Step 2: Load data
console.log('Loading siteData.json...');
const data = JSON.parse(fs.readFileSync(SITE_DATA, 'utf-8'));
const colleges = Array.isArray(data.colleges) ? data.colleges : [];
console.log(`Loaded ${colleges.length} college records\n`);

// Track changes
const changes = {
  kohinoor: { fixed: 0, colleges: [] },
  rathinam: { fixed: 0, colleges: [] },
  valia: { fixed: 0, colleges: [] },
  iitPatna: { fixed: 0, colleges: [] },
  srinivasan: { fixed: 0, colleges: [] },
};

// Step 3: Apply fixes
colleges.forEach(college => {
  const img = college.img || college.image || '';
  const name = college.name || '';
  const id = college.id;

  // FIX 1: kohinoor_kurla.jpg — Always replace (it's a corrupted HTML file)
  if (img.includes('kohinoor_kurla')) {
    const newImg = getGenericImage(id);
    college.img = newImg;
    if (college.image) college.image = newImg;
    changes.kohinoor.fixed++;
    changes.kohinoor.colleges.push({ id, name, newImg });
  }

  // FIX 2: rathinam_campus.jpg — Only keep for actual Rathinam College Coimbatore
  else if (img.includes('rathinam_campus')) {
    const isActualRathinam = /rathinam/i.test(name);
    if (!isActualRathinam) {
      const newImg = getGenericImage(id);
      college.img = newImg;
      if (college.image) college.image = newImg;
      changes.rathinam.fixed++;
      changes.rathinam.colleges.push({ id, name, newImg });
    }
  }

  // FIX 3: valia_andheri.jpeg — Only keep for actual Valia College Andheri
  else if (img.includes('valia_andheri')) {
    const isActualValia = /valia/i.test(name);
    if (!isActualValia) {
      const newImg = getGenericImage(id);
      college.img = newImg;
      if (college.image) college.image = newImg;
      changes.valia.fixed++;
      changes.valia.colleges.push({ id, name, newImg });
    }
  }

  // FIX 4: campus_iit_patna.png — Only keep for IIT Patna
  else if (img.includes('campus_iit_patna')) {
    const isActualIITPatna = /iit patna|indian institute of technology.*patna/i.test(name);
    if (!isActualIITPatna) {
      const newImg = getGenericImage(id);
      college.img = newImg;
      if (college.image) college.image = newImg;
      changes.iitPatna.fixed++;
      changes.iitPatna.colleges.push({ id, name, newImg });
    }
  }

  // FIX 5: srinivasan_perambalur.jpg — Only keep for Srinivasan College of Arts & Science
  else if (img.includes('srinivasan_perambalur')) {
    const isActualSrinivasan = /srinivasan/i.test(name);
    if (!isActualSrinivasan) {
      const newImg = getGenericImage(id);
      college.img = newImg;
      if (college.image) college.image = newImg;
      changes.srinivasan.fixed++;
      changes.srinivasan.colleges.push({ id, name, newImg });
    }
  }
});

// Step 4: Save updated data
console.log('Saving updated siteData.json...');
fs.writeFileSync(SITE_DATA, JSON.stringify(data, null, 2), 'utf-8');
console.log('✓ siteData.json saved\n');

// Step 5: Report
const totalFixed = changes.kohinoor.fixed + changes.rathinam.fixed + 
                   changes.valia.fixed + changes.iitPatna.fixed + changes.srinivasan.fixed;

console.log('=== FIX SUMMARY ===\n');
console.log(`FIX 1 - kohinoor_kurla.jpg (corrupted HTML):  ${changes.kohinoor.fixed} colleges updated`);
console.log(`FIX 2 - rathinam_campus.jpg (koshys duplicate): ${changes.rathinam.fixed} colleges updated`);
console.log(`FIX 3 - valia_andheri.jpeg (bunts duplicate):  ${changes.valia.fixed} colleges updated`);
console.log(`FIX 4 - campus_iit_patna.png (overused):       ${changes.iitPatna.fixed} colleges updated`);
console.log(`FIX 5 - srinivasan_perambalur.jpg (overused):  ${changes.srinivasan.fixed} colleges updated`);
console.log(`\nTOTAL FIXES APPLIED: ${totalFixed} college records updated`);

// Step 6: Verify — re-read and confirm fix counts
console.log('\n=== VERIFICATION ===');
const verify = JSON.parse(fs.readFileSync(SITE_DATA, 'utf-8'));
const verifyCols = verify.colleges || [];

const stillKohinoor = verifyCols.filter(c => (c.img||'').includes('kohinoor_kurla')).length;
const stillRathinamBad = verifyCols.filter(c => (c.img||'').includes('rathinam_campus') && !/rathinam/i.test(c.name || '')).length;
const stillValiaBad = verifyCols.filter(c => (c.img||'').includes('valia_andheri') && !/valia/i.test(c.name || '')).length;
const stillIITPatnaBad = verifyCols.filter(c => (c.img||'').includes('campus_iit_patna') && !/iit patna|indian institute of technology.*patna/i.test(c.name || '')).length;
const stillSrinivasanBad = verifyCols.filter(c => (c.img||'').includes('srinivasan_perambalur') && !/srinivasan/i.test(c.name || '')).length;

console.log(`Remaining kohinoor references:         ${stillKohinoor} (expected: 0)`);
console.log(`Remaining bad rathinam references:     ${stillRathinamBad} (expected: 0)`);
console.log(`Remaining bad valia references:        ${stillValiaBad} (expected: 0)`);
console.log(`Remaining bad IIT Patna references:    ${stillIITPatnaBad} (expected: 0)`);
console.log(`Remaining bad Srinivasan references:   ${stillSrinivasanBad} (expected: 0)`);

const allPassed = stillKohinoor === 0 && stillRathinamBad === 0 && stillValiaBad === 0 && 
                  stillIITPatnaBad === 0 && stillSrinivasanBad === 0;

if (allPassed) {
  console.log('\n✅ ALL VERIFICATIONS PASSED — Image mappings are clean');
} else {
  console.log('\n⚠ Some issues remain — manual inspection required');
}

// Save change log for reports
const changeLog = {
  timestamp: new Date().toISOString(),
  totalFixed,
  changes: {
    kohinoor: changes.kohinoor,
    rathinam: changes.rathinam,
    valia: changes.valia,
    iitPatna: changes.iitPatna,
    srinivasan: changes.srinivasan,
  }
};

const logPath = path.join(__dirname, '..', 'reports', 'college-audit', 'image-fix-log.json');
fs.mkdirSync(path.dirname(logPath), { recursive: true });
fs.writeFileSync(logPath, JSON.stringify(changeLog, null, 2), 'utf-8');
console.log('\n✓ Change log saved to reports/college-audit/image-fix-log.json');
console.log('\n=== Script Complete ===\n');

