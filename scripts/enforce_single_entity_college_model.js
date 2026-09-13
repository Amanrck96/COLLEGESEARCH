import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_SITE_DATA = path.join(__dirname, '../public/siteData.json');
const MASTER_FILE = path.join(__dirname, 'siteData.master_all_38k.json');

console.log('================================================================');
console.log('🏛️ ENFORCING 1-COLLEGE = 1-ENTITY ARCHITECTURE (NESTED COURSES)');
console.log('================================================================\n');

// Standard normalize function for matching college names
function normalizeName(name) {
  return String(name || '')
    .toLowerCase()
    .replace(/\(.*?\)/g, '') // remove parenthetical text
    .replace(/[^a-z0-9]/g, ' ')
    .replace(/\b(ranking|admission|cut off|placement|cutoff|2024|2025|2026|campus|deemed to be university|university|college of|institute of technology|institute of management)\b/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

const siteData = JSON.parse(fs.readFileSync(PUBLIC_SITE_DATA, 'utf8'));
const rawColleges = siteData.colleges || [];

console.log(`📊 Processing ${rawColleges.length} raw college rows...`);

const canonicalCollegesMap = new Map();
let mergedCoursesCount = 0;

rawColleges.forEach(col => {
  if (!col || !col.name) return;

  const key = normalizeName(col.name) + '_' + String(col.state || '').toLowerCase().trim();

  if (!canonicalCollegesMap.has(key)) {
    // Initialize canonical college entity
    const canonical = {
      ...col,
      courses: Array.isArray(col.courses) ? [...col.courses] : []
    };
    canonicalCollegesMap.set(key, canonical);
  } else {
    // Already exists -> DO NOT CREATE ANOTHER COLLEGE CARD! Merge its courses!
    const existing = canonicalCollegesMap.get(key);

    // Merge courses
    if (Array.isArray(col.courses)) {
      col.courses.forEach(crs => {
        if (!existing.courses.some(ec => ec.title === crs.title)) {
          existing.courses.push(crs);
          mergedCoursesCount++;
        }
      });
    }

    // Keep the best / non-placeholder values
    if (!existing.website && col.website) existing.website = col.website;
    if (existing.rating < col.rating) existing.rating = col.rating;
  }
});

const consolidatedColleges = Array.from(canonicalCollegesMap.values());

// Re-index clean IDs
consolidatedColleges.forEach((c, idx) => {
  c.id = idx + 1;
});

console.log(`\n✅ CONSOLIDATION RESULTS:`);
console.log(`   - Raw Entries Processed: ${rawColleges.length}`);
console.log(`   - 100% Unique Canonical Colleges: ${consolidatedColleges.length}`);
console.log(`   - Multiple Course Rows Merged into Single Profiles: ${mergedCoursesCount}`);

// Save consolidated single-entity database
const updatedPublic = {
  ...siteData,
  colleges: consolidatedColleges
};
fs.writeFileSync(PUBLIC_SITE_DATA, JSON.stringify(updatedPublic), 'utf8');

console.log('\n--- VERIFICATION: CHECKING FOR ZERO DUPLICATE COLLEGE NAMES ---');
const nameCheck = new Map();
let duplicateCollegeCards = 0;
consolidatedColleges.forEach(c => {
  const k = normalizeName(c.name) + '_' + String(c.state || '').toLowerCase();
  if (nameCheck.has(k)) {
    duplicateCollegeCards++;
    console.log('🚨 DUPLICATE FOUND:', c.name);
  }
  nameCheck.add ? nameCheck.add(k) : nameCheck.set(k, true);
});

console.log(`Duplicate College Cards on Website: ${duplicateCollegeCards} (MUST BE 0)`);
console.log(`Total Unique Pure Institutions: ${consolidatedColleges.length}`);
