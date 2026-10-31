/**
 * verify-image-fixes.cjs
 * Verifies all image fixes were applied correctly
 */
const fs = require('fs');
const path = require('path');

const DATA_PATH = path.join(__dirname, '..', 'public', 'siteData.json');
const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
const colleges = data.colleges || data;
const collegeArray = Array.isArray(colleges) ? colleges : Object.values(colleges);

function getImageValue(c) {
  return c.image || c.campus_image || c.imageUrl || c.img || null;
}

let kohinoor = 0, rathinam = 0, valia = 0, iitPatna = 0, srinivasan = 0;
for (const c of collegeArray) {
  const img = getImageValue(c);
  if (!img) continue;
  if (img.includes('kohinoor_kurla')) kohinoor++;
  if (img.includes('rathinam_campus')) rathinam++;
  if (img.includes('valia_andheri')) valia++;
  if (img.includes('campus_iit_patna')) iitPatna++;
  if (img.includes('srinivasan_perambalur')) srinivasan++;
}

console.log('=== VERIFICATION (should be 0 for fixed issues, 1 for protected) ===');
console.log(`kohinoor_kurla remaining:      ${kohinoor} (expected: 0)`);
console.log(`rathinam_campus remaining:     ${rathinam} (expected: 1 — Rathinam College only)`);
console.log(`valia_andheri remaining:       ${valia} (expected: 1 — Valia Andheri only)`);
console.log(`campus_iit_patna remaining:    ${iitPatna} (expected: 1 — IIT Patna only)`);
console.log(`srinivasan_perambalur remaining: ${srinivasan} (expected: 1 — Srinivasan College only)`);

// Show which colleges still use protected images
for (const c of collegeArray) {
  const img = getImageValue(c);
  if (!img) continue;
  const name = c.name || c.college_name || '';
  if (img.includes('rathinam_campus')) console.log(`  rathinam still: ${name}`);
  if (img.includes('valia_andheri')) console.log(`  valia still: ${name}`);
  if (img.includes('campus_iit_patna')) console.log(`  iit_patna still: ${name}`);
  if (img.includes('srinivasan_perambalur')) console.log(`  srinivasan still: ${name}`);
}
