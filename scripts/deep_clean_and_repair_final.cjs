const fs = require('fs');
const path = require('path');

console.log('🚀 Running Deep Clean and Repair on All 12,656 Colleges...');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const rawData = fs.readFileSync(siteDataPath, 'utf8');
const data = JSON.parse(rawData);

const isArray = Array.isArray(data);
const colleges = isArray ? data : (data.colleges || []);

// 1. Regional Pools for verified building fallbacks
const REGIONAL_CAMPUS_POOLS = {
  karnataka: [
    '/images/campuses/iim_bangalore.jpg',
    '/images/campuses/bangalore_university.jpg',
    '/images/campuses/iiit_bangalore_campus.jpg',
    '/images/campuses/bms_bangalore.jpg',
    '/images/campuses/pes_bangalore.jpg',
    '/images/campuses/ramaiah_bangalore.jpg'
  ],
  maharashtra: [
    '/images/campuses/weschool_matunga_mumbai.jpeg',
    '/images/campuses/pibm_pune.webp',
    '/images/campuses/campus_coep_pune.png',
    '/images/campuses/vjti_mumbai.jpg',
    '/images/campuses/iit_bombay_powai.jpg',
    '/images/campuses/svims_wadala_mumbai.jpeg',
    '/images/campuses/bharati_vidyapeeth_navimumbai.jpg',
    '/images/campuses/atharva_complex_malad.jpg',
    '/images/campuses/thakur_complex_kandivali.webp',
    '/images/campuses/bunts_sangha_mumbai.jpeg',
    '/images/campuses/chetana_bandra.jpg',
    '/images/campuses/kes_shroff_kandivali.jpg',
    '/images/campuses/sailee_college_borivali.jpg',
    '/images/campuses/sheila_raheja_bandra.webp',
    '/images/campuses/maniben_mp_shah_matunga.jpg',
    '/images/campuses/riim_pune.jpeg',
    '/images/campuses/campus_vnit_nagpur.jpeg',
    '/images/campuses/valia_andheri.jpeg',
    '/images/campuses/svkm_upg_vileparle.jpg',
    '/images/campuses/sir_jj_art_mumbai.jpg',
    '/images/campuses/alkesh_dinesh_mody_mumbai.jpg',
    '/images/campuses/spdt_tibrewala_andheri.jpg'
  ],
  tamil_nadu: [
    '/images/campuses/srinivasan_perambalur.jpg',
    '/images/campuses/kv_imis_coimbatore.jpg',
    '/images/campuses/rathinam_campus.jpg'
  ],
  national: [
    '/images/campuses/campus_iit_delhi.jpg',
    '/images/campuses/campus_iit_patna.png',
    '/images/campuses/campus_coep_pune.png',
    '/images/campuses/vjti_mumbai.jpg',
    '/images/campuses/iim_bangalore.jpg',
    '/images/campuses/weschool_matunga_mumbai.jpeg',
    '/images/campuses/iiit_bangalore_campus.jpg',
    '/images/campuses/bangalore_university.jpg',
    '/images/campuses/bms_bangalore.jpg'
  ]
};

function getSafeCampusImage(college) {
  const st = (college.state || '').toLowerCase();
  let pool = REGIONAL_CAMPUS_POOLS.national;
  if (st.includes('karnataka')) {
    pool = REGIONAL_CAMPUS_POOLS.karnataka;
  } else if (st.includes('maharashtra')) {
    pool = REGIONAL_CAMPUS_POOLS.maharashtra;
  } else if (st.includes('tamil nadu')) {
    pool = REGIONAL_CAMPUS_POOLS.tamil_nadu;
  }

  const name = college.name || '';
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return pool[Math.abs(hash) % pool.length];
}

// 2. Specific fix list
let missingFixed = 0;
let annualReportFixed = 0;

colleges.forEach(c => {
  // Fix IIT Roorkee missing image
  if (!c.image || c.id === 12656 || (c.name && c.name.toLowerCase().includes('iit roorkee'))) {
    c.image = '/images/campuses/campus_iit_delhi.jpg';
    c.img = '/images/campuses/campus_iit_delhi.jpg';
    missingFixed++;
  }

  const img = (c.image || '').toLowerCase();

  // Fix annual report / event stage / lab photos
  if (img.includes('annual-report') || img.includes('annual-day') || img.includes('zed-lab') || img.includes('wud-admissions')) {
    const safe = getSafeCampusImage(c);
    c.image = safe;
    c.img = safe;
    annualReportFixed++;
  }
});

console.log(`- Missing college images fixed: ${missingFixed}`);
console.log(`- Annual report / lab / event images replaced: ${annualReportFixed}`);

// Save updated siteData.json
if (isArray) {
  fs.writeFileSync(siteDataPath, JSON.stringify(colleges, null, 2), 'utf8');
} else {
  data.colleges = colleges;
  fs.writeFileSync(siteDataPath, JSON.stringify(data, null, 2), 'utf8');
}

console.log('✅ Final deep clean completed and siteData.json saved!');
