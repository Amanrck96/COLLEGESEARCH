/**
 * fix-srinivasan-dhanalakshmi.cjs
 * Dhanalakshmi Srinivasan is a different institution — fix those references.
 * Also fix any remaining valia_andheri misses.
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
  const numId = parseInt(String(id).replace(/\D/g, ''), 10) || 0;
  return GENERIC_IMAGES[numId % GENERIC_IMAGES.length];
}

const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
const colleges = data.colleges || data;
const collegeArray = Array.isArray(colleges) ? colleges : Object.values(colleges);

function getImageValue(c) {
  if (c.image !== undefined) return { field: 'image', val: c.image };
  if (c.campus_image !== undefined) return { field: 'campus_image', val: c.campus_image };
  if (c.imageUrl !== undefined) return { field: 'imageUrl', val: c.imageUrl };
  if (c.img !== undefined) return { field: 'img', val: c.img };
  return null;
}

function getCollegeId(c) {
  return c.id || c.college_id || c.code || c.name || '';
}

let fixed = 0;
for (const c of collegeArray) {
  const imgObj = getImageValue(c);
  if (!imgObj) continue;
  const { field, val } = imgObj;
  const name = (c.name || c.college_name || '').toLowerCase();

  // Fix Dhanalakshmi Srinivasan (different institution using srinivasan image)
  if (val.includes('srinivasan_perambalur') && name.includes('dhanalakshmi')) {
    c[field] = getGenericImage(getCollegeId(c));
    console.log(`Fixed Dhanalakshmi: ${c.name || c.college_name}`);
    fixed++;
  }

  // Fix Valia Andheri miss (if valia_andheri still present and not actual Valia CFL)
  if (val.includes('valia_andheri')) {
    const isActualValia = name.includes('valia') && (name.includes('andheri') || name.includes('mumbai'));
    if (!isActualValia) {
      c[field] = getGenericImage(getCollegeId(c));
      console.log(`Fixed valia: ${c.name || c.college_name}`);
      fixed++;
    }
  }
}

fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), 'utf-8');
console.log(`\nFixed ${fixed} additional colleges`);
