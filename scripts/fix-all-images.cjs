/**
 * fix-all-images.cjs
 * Fixes all image issues in siteData.json:
 * A) kohinoor_kurla.jpg -> campus_architecture_3.jpg (34 colleges)
 * B) rathinam_campus.jpg -> generic for non-Rathinam
 * C) valia_andheri.jpeg -> generic for non-Valia
 * D) campus_iit_patna.png -> generic for non-IIT-Patna
 * E) srinivasan_perambalur.jpg -> generic for non-Srinivasan
 */

const fs = require('fs');
const path = require('path');

const DATA_PATH = path.join(__dirname, '..', 'public', 'siteData.json');
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

function getGenericImage(id) {
  // Deterministic round-robin by college id
  const numId = parseInt(String(id).replace(/\D/g, ''), 10) || 0;
  return GENERIC_IMAGES[numId % GENERIC_IMAGES.length];
}

console.log('Loading siteData.json...');
const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
const colleges = data.colleges || data;
const collegeArray = Array.isArray(colleges) ? colleges : Object.values(colleges);
console.log(`Loaded ${collegeArray.length} colleges`);

const stats = {
  kohinoor: 0,
  rathinam: 0,
  valia: 0,
  iitPatna: 0,
  srinivasan: 0,
};

// Identify protected colleges (case-insensitive substring match)
function isRathinam(c) {
  const name = (c.name || c.college_name || '').toLowerCase();
  return name.includes('rathinam') && (name.includes('coimbatore') || name.includes('rathinam college'));
}
function isValia(c) {
  const name = (c.name || c.college_name || '').toLowerCase();
  return name.includes('valia') && name.includes('andheri');
}
function isIITPatna(c) {
  const name = (c.name || c.college_name || '').toLowerCase();
  return name.includes('iit patna') || name.includes('indian institute of technology patna') || name.includes('i.i.t. patna');
}
function isSrinivasan(c) {
  const name = (c.name || c.college_name || '').toLowerCase();
  return name.includes('srinivasan') && (name.includes('perambalur') || name.includes('arts & science') || name.includes('arts and science'));
}

function getImageField(c) {
  // Find whichever field holds the image
  if (c.image !== undefined) return 'image';
  if (c.campus_image !== undefined) return 'campus_image';
  if (c.imageUrl !== undefined) return 'imageUrl';
  if (c.img !== undefined) return 'img';
  return null;
}

function getImageValue(c) {
  const field = getImageField(c);
  return field ? c[field] : null;
}

function setImageValue(c, val) {
  const field = getImageField(c);
  if (field) c[field] = val;
}

// Determine college ID for round-robin
function getCollegeId(c) {
  return c.id || c.college_id || c.code || c.name || '';
}

let idx = 0;
for (const c of collegeArray) {
  const img = getImageValue(c);
  if (!img) { idx++; continue; }

  // Task A: kohinoor_kurla.jpg
  if (img.includes('kohinoor_kurla')) {
    setImageValue(c, '/images/campuses/campus_architecture_3.jpg');
    stats.kohinoor++;
  }
  // Task B: rathinam_campus.jpg (skip actual Rathinam)
  else if (img.includes('rathinam_campus') && !isRathinam(c)) {
    setImageValue(c, getGenericImage(getCollegeId(c)));
    stats.rathinam++;
  }
  // Task C: valia_andheri.jpeg (skip actual Valia)
  else if (img.includes('valia_andheri') && !isValia(c)) {
    setImageValue(c, getGenericImage(getCollegeId(c)));
    stats.valia++;
  }
  // Task D: campus_iit_patna.png (skip IIT Patna itself)
  else if (img.includes('campus_iit_patna') && !isIITPatna(c)) {
    setImageValue(c, getGenericImage(getCollegeId(c)));
    stats.iitPatna++;
  }
  // Task E: srinivasan_perambalur.jpg (skip actual Srinivasan)
  else if (img.includes('srinivasan_perambalur') && !isSrinivasan(c)) {
    setImageValue(c, getGenericImage(getCollegeId(c)));
    stats.srinivasan++;
  }

  idx++;
}

console.log('Writing updated siteData.json...');
// Preserve original structure
if (Array.isArray(data.colleges)) {
  data.colleges = collegeArray;
} else if (!Array.isArray(data)) {
  // data is the array directly
}
fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), 'utf-8');

console.log('\n=== FIX RESULTS ===');
console.log(`Task A (kohinoor_kurla):     ${stats.kohinoor} colleges fixed`);
console.log(`Task B (rathinam_campus):    ${stats.rathinam} colleges fixed`);
console.log(`Task C (valia_andheri):      ${stats.valia} colleges fixed`);
console.log(`Task D (campus_iit_patna):   ${stats.iitPatna} colleges fixed`);
console.log(`Task E (srinivasan_perambalur): ${stats.srinivasan} colleges fixed`);
console.log(`Total:                       ${stats.kohinoor + stats.rathinam + stats.valia + stats.iitPatna + stats.srinivasan} colleges updated`);
