const fs = require('fs');
const path = require('path');

console.log('🚀 Purging all maps, portraits, event photos, vehicle photos, and non-exterior images...');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const rawData = fs.readFileSync(siteDataPath, 'utf8');
const data = JSON.parse(rawData);

const isArray = Array.isArray(data);
const colleges = isArray ? data : (data.colleges || []);

// 1. Regional Campus Building Pools
const REGIONAL_CAMPUS_POOLS = {
  karnataka_mba: [
    '/images/campuses/iim_bangalore.jpg',
    '/images/campuses/bangalore_university.jpg',
    '/images/campuses/iiit_bangalore_campus.jpg',
    '/images/campuses/pes_bangalore.jpg'
  ],
  karnataka_tech: [
    '/images/campuses/bms_bangalore.jpg',
    '/images/campuses/ramaiah_bangalore.jpg',
    '/images/campuses/pes_bangalore.jpg',
    '/images/campuses/iiit_bangalore_campus.jpg'
  ],
  karnataka_general: [
    '/images/campuses/bangalore_university.jpg',
    '/images/campuses/iim_bangalore.jpg',
    '/images/campuses/bms_bangalore.jpg',
    '/images/campuses/pes_bangalore.jpg',
    '/images/campuses/ramaiah_bangalore.jpg'
  ],
  maharashtra_mba: [
    '/images/campuses/weschool_matunga_mumbai.jpeg',
    '/images/campuses/pibm_pune.webp',
    '/images/campuses/svims_wadala_mumbai.jpeg',
    '/images/campuses/riim_pune.jpeg',
    '/images/campuses/chetana_bandra.jpg',
    '/images/campuses/kohinoor_kurla.jpg',
    '/images/campuses/gnims_matunga.png'
  ],
  maharashtra_tech: [
    '/images/campuses/campus_coep_pune.png',
    '/images/campuses/vjti_mumbai.jpg',
    '/images/campuses/iit_bombay_powai.jpg',
    '/images/campuses/campus_vnit_nagpur.jpeg',
    '/images/campuses/atharva_complex_malad.jpg',
    '/images/campuses/thakur_complex_kandivali.webp',
    '/images/campuses/bharati_vidyapeeth_navimumbai.jpg',
    '/images/campuses/saraswati_kharghar.webp'
  ],
  maharashtra_general: [
    '/images/campuses/bunts_sangha_mumbai.jpeg',
    '/images/campuses/kes_shroff_kandivali.jpg',
    '/images/campuses/sailee_college_borivali.jpg',
    '/images/campuses/sheila_raheja_bandra.webp',
    '/images/campuses/maniben_mp_shah_matunga.jpg',
    '/images/campuses/valia_andheri.jpeg',
    '/images/campuses/svkm_upg_vileparle.jpg',
    '/images/campuses/sir_jj_art_mumbai.jpg',
    '/images/campuses/alkesh_dinesh_mody_mumbai.jpg'
  ],
  tamil_nadu: [
    '/images/campuses/srinivasan_perambalur.jpg',
    '/images/campuses/kv_imis_coimbatore.jpg',
    '/images/campuses/rathinam_campus.jpg'
  ],
  national_mba: [
    '/images/campuses/iim_bangalore.jpg',
    '/images/campuses/weschool_matunga_mumbai.jpeg',
    '/images/campuses/pibm_pune.webp',
    '/images/campuses/riim_pune.jpeg'
  ],
  national_tech: [
    '/images/campuses/campus_iit_delhi.jpg',
    '/images/campuses/campus_iit_patna.png',
    '/images/campuses/campus_coep_pune.png',
    '/images/campuses/vjti_mumbai.jpg',
    '/images/campuses/iit_bombay_powai.jpg',
    '/images/campuses/iiit_bangalore_campus.jpg'
  ],
  national_general: [
    '/images/campuses/campus_iit_delhi.jpg',
    '/images/campuses/bangalore_university.jpg',
    '/images/campuses/campus_iit_patna.png',
    '/images/campuses/weschool_matunga_mumbai.jpeg',
    '/images/campuses/iim_bangalore.jpg'
  ]
};

function assignCampusImage(college) {
  const st = (college.state || '').toLowerCase();
  const ct = (college.city || '').toLowerCase();
  const nm = (college.name || '').toLowerCase();
  const cr = (college.course || college.courses || '').toString().toLowerCase();

  const isMBA = nm.includes('management') || nm.includes('business') || nm.includes('mba') || nm.includes('pgdm') || nm.includes('bba') || cr.includes('mba') || cr.includes('management');
  const isTech = nm.includes('engineering') || nm.includes('technology') || nm.includes('tech') || nm.includes('polytechnic') || nm.includes('computer') || nm.includes('b.tech') || nm.includes('bca') || nm.includes('mca');

  let pool;
  if (st.includes('karnataka') || ct.includes('bangalore') || ct.includes('bengaluru')) {
    if (isMBA) pool = REGIONAL_CAMPUS_POOLS.karnataka_mba;
    else if (isTech) pool = REGIONAL_CAMPUS_POOLS.karnataka_tech;
    else pool = REGIONAL_CAMPUS_POOLS.karnataka_general;
  } else if (st.includes('maharashtra') || ct.includes('mumbai') || ct.includes('pune') || ct.includes('thane') || ct.includes('nagpur')) {
    if (isMBA) pool = REGIONAL_CAMPUS_POOLS.maharashtra_mba;
    else if (isTech) pool = REGIONAL_CAMPUS_POOLS.maharashtra_tech;
    else pool = REGIONAL_CAMPUS_POOLS.maharashtra_general;
  } else if (st.includes('tamil nadu') || ct.includes('chennai') || ct.includes('coimbatore')) {
    pool = REGIONAL_CAMPUS_POOLS.tamil_nadu;
  } else {
    if (isMBA) pool = REGIONAL_CAMPUS_POOLS.national_mba;
    else if (isTech) pool = REGIONAL_CAMPUS_POOLS.national_tech;
    else pool = REGIONAL_CAMPUS_POOLS.national_general;
  }

  const name = college.name || '';
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return pool[Math.abs(hash) % pool.length];
}

const NON_BUILDING_URL_PATTERNS = [
  '-map.', '_map.', '/map.', 'karnataka-map', 'about-ims-with-map', 'secretary.',
  '_events.', '-events.', 'laboratory.', 'transport-scaled', 'cafeteria_',
  'sports_', '_sports.', 'college-banner-wap', 'it-lab.', '_it-lab.',
  'dr-rizvi-springfield-school', 'medical-centre-01', 'postoffice_',
  'hostel.', '_hostel.'
];

let purgedCount = 0;

colleges.forEach(c => {
  const img = (c.image || '').toLowerCase();
  if (img.startsWith('/images/campuses/')) return;

  for (const pattern of NON_BUILDING_URL_PATTERNS) {
    if (img.includes(pattern)) {
      const cleanImg = assignCampusImage(c);
      c.image = cleanImg;
      c.img = cleanImg;
      purgedCount++;
      break;
    }
  }
});

console.log(`Purged ${purgedCount} non-exterior/map/lab/secretary images.`);

// Save back
if (isArray) {
  fs.writeFileSync(siteDataPath, JSON.stringify(colleges, null, 2), 'utf8');
} else {
  data.colleges = colleges;
  fs.writeFileSync(siteDataPath, JSON.stringify(data, null, 2), 'utf8');
}

console.log('✅ Final Database Saved!');
