import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MASTER_FILE = path.join(__dirname, 'siteData.master_all_38k.json');
const OUTPUT_FILE = path.join(__dirname, '../public/siteData.json');

const masterData = JSON.parse(fs.readFileSync(MASTER_FILE, 'utf8'));
const allColleges = masterData.colleges || [];

console.log('--- BUILDING EXACT 5,000 CURATED PREMIER DEMO DATASET ---');
console.log('Total Colleges in Master Pool:', allColleges.length);

const safeStr = (v) => Array.isArray(v) ? v.join(' ') : String(v || '');

// Normalize State Names
function cleanState(st) {
  const s = safeStr(st).toUpperCase().trim();
  if (s.includes('ANDAMAN')) return 'Andaman & Nicobar';
  if (s.includes('ANDHRA')) return 'Andhra Pradesh';
  if (s.includes('ARUNACHAL')) return 'Arunachal Pradesh';
  if (s.includes('ASSAM')) return 'Assam';
  if (s.includes('BIHAR')) return 'Bihar';
  if (s.includes('CHANDIGARH')) return 'Chandigarh';
  if (s.includes('CHHATISGARH') || s.includes('CHHATTISGARH')) return 'Chhattisgarh';
  if (s.includes('DADRA') || s.includes('DAMAN')) return 'Dadra & Nagar Haveli and Daman & Diu';
  if (s.includes('DELHI')) return 'Delhi NCR';
  if (s.includes('GOA')) return 'Goa';
  if (s.includes('GUJARAT')) return 'Gujarat';
  if (s.includes('HARYANA')) return 'Haryana';
  if (s.includes('HIMACHAL')) return 'Himachal Pradesh';
  if (s.includes('JAMMU') || s.includes('KASHMIR')) return 'Jammu & Kashmir';
  if (s.includes('JHARKHAND')) return 'Jharkhand';
  if (s.includes('KARNATAKA')) return 'Karnataka';
  if (s.includes('KERALA')) return 'Kerala';
  if (s.includes('LADAKH')) return 'Ladakh';
  if (s.includes('LAKSHADWEEP')) return 'Lakshadweep';
  if (s.includes('MADHYA')) return 'Madhya Pradesh';
  if (s.includes('MAHARASHTRA')) return 'Maharashtra';
  if (s.includes('MANIPUR')) return 'Manipur';
  if (s.includes('MEGHALAYA')) return 'Meghalaya';
  if (s.includes('MIZORAM')) return 'Mizoram';
  if (s.includes('NAGALAND')) return 'Nagaland';
  if (s.includes('ODISHA') || s.includes('ORISSA')) return 'Odisha';
  if (s.includes('PUDUCHERRY') || s.includes('PONDICHERRY')) return 'Puducherry';
  if (s.includes('PUNJAB')) return 'Punjab';
  if (s.includes('RAJASTHAN')) return 'Rajasthan';
  if (s.includes('SIKKIM')) return 'Sikkim';
  if (s.includes('TAMIL')) return 'Tamil Nadu';
  if (s.includes('TELANGANA')) return 'Telangana';
  if (s.includes('TRIPURA')) return 'Tripura';
  if (s.includes('UTTAR PRADESH') || s.includes('UTTARPRADESH')) return 'Uttar Pradesh';
  if (s.includes('UTTARAKHAND') || s.includes('UTTARANCHAL')) return 'Uttarakhand';
  if (s.includes('WEST BENGAL') || s.includes('BENGAL')) return 'West Bengal';
  return s.length > 2 ? s : 'Other';
}

const stateGroups = new Map();
allColleges.forEach(c => {
  if (!c || !c.name) return;
  const st = cleanState(c.state);
  if (!stateGroups.has(st)) stateGroups.set(st, []);
  stateGroups.get(st).push(c);
});

console.log(`Grouped into ${stateGroups.size} clean Indian States & UTs.`);

const selectedSet = new Set();
const curated = [];

function addCollege(c) {
  if (!c || !c.name || curated.length >= 5000) return false;
  const idStr = String(c.id);
  if (!selectedSet.has(idStr)) {
    selectedSet.add(idStr);
    const stClean = cleanState(c.state);
    
    const formatted = {
      ...c,
      name: safeStr(c.name),
      location: safeStr(c.location) || stClean,
      state: stClean,
      country: 'India',
      rating: parseFloat(c.rating) || 4.3,
      reviewsCount: parseInt(c.reviewsCount || c.reviews) || 54,
      fees: (c.fees && c.fees !== 'Contact for details') ? safeStr(c.fees) : '₹1.5 Lakhs - ₹5.5 Lakhs',
      averagePackage: (c.averagePackage && c.averagePackage !== 'Contact for details') ? safeStr(c.averagePackage) : '₹6.5 LPA',
      highestPackage: (c.highestPackage && c.highestPackage !== 'Contact for details') ? safeStr(c.highestPackage) : '₹18 LPA',
      exams: (c.exams && c.exams !== 'Direct Admission') ? safeStr(c.exams) : 'State CET, JEE / CAT / NEET',
      facilities: (c.facilities && c.facilities.length > 0) ? c.facilities : ['Hostel', 'Library', 'Wi-Fi Campus', 'Sports Complex', 'Labs', 'Cafeteria'],
      courses: (c.courses && c.courses.length > 0) ? c.courses : [
        { title: 'Bachelor Degree Course', division: 'Undergraduate', duration: '3-4 Years', fees: '₹1.5 Lakhs/yr' },
        { title: 'Master Degree Course', division: 'Postgraduate', duration: '2 Years', fees: '₹1.8 Lakhs/yr' }
      ]
    };
    curated.push(formatted);
    return true;
  }
  return false;
}

// Pass 1: Premier Apex Institutes (IITs, IIMs, AIIMS, NITs, BITS, IISc, NLUs, NIFTs)
allColleges.forEach(c => {
  if (!c) return;
  const n = safeStr(c.name).toLowerCase();
  const isApex = n.includes('indian institute of technology') ||
    n.startsWith('iit ') || n.startsWith('iit-') ||
    n.includes('indian institute of management') ||
    n.startsWith('iim ') || n.startsWith('iim-') ||
    n.includes('all india institute of medical') ||
    n.includes('aiims') ||
    n.includes('national institute of technology') ||
    n.startsWith('nit ') ||
    n.includes('bits pilani') ||
    n.includes('indian institute of science') ||
    n.includes('national law university') ||
    n.includes('nift');

  if (isApex) {
    addCollege(c);
  }
});

console.log(`Pass 1 (Apex Premier Institutions): ${curated.length} colleges.`);

// Pass 2: Balanced Regional Coverage (Pick top ~100 colleges from EVERY State/UT)
stateGroups.forEach((list, stName) => {
  const sorted = [...list].sort((a, b) => (parseFloat(b.rating) || 0) - (parseFloat(a.rating) || 0));
  const quota = Math.min(sorted.length, 120);
  for (let i = 0; i < quota; i++) {
    addCollege(sorted[i]);
  }
});

console.log(`Pass 2 (State Balanced Quota): ${curated.length} colleges.`);

// Pass 3: Fill up to exactly 5,000 with the best rated remaining colleges
const remaining = allColleges.filter(c => c && c.id && !selectedSet.has(String(c.id)));
remaining.sort((a, b) => (parseFloat(b.rating) || 0) - (parseFloat(a.rating) || 0));

for (const c of remaining) {
  if (curated.length >= 5000) break;
  addCollege(c);
}

console.log(`Pass 3 (Final Target): Exactly ${curated.length} colleges curated.`);

// Update Master Object for Vercel
const outputSiteData = {
  ...masterData,
  colleges: curated
};

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(outputSiteData), 'utf8');
console.log(`\n🎉 Successfully generated public/siteData.json with EXACTLY ${curated.length} premier colleges!`);

// Summary of State Coverage
const coverage = {};
curated.forEach(c => {
  const st = c.state;
  coverage[st] = (coverage[st] || 0) + 1;
});
console.log('\n📍 State & Region Coverage Count:');
console.log(coverage);
