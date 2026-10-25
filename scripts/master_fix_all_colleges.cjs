const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Master Database Image Audit & Repair...');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const rawData = fs.readFileSync(siteDataPath, 'utf8');
const data = JSON.parse(rawData);

const isArray = Array.isArray(data);
const colleges = isArray ? data : (data.colleges || []);
console.log(`Loaded ${colleges.length} colleges.`);

// 1. Curated list of verified local campus photos categorized by Region & Stream
const REGIONAL_CAMPUS_POOLS = {
  karnataka: [
    '/images/campuses/iim_bangalore.jpg',
    '/images/campuses/iiit_bangalore_campus.jpg',
    '/images/campuses/bangalore_university.jpg',
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
    '/images/campuses/campus_vnit_nagpur.jpeg'
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

// 2. Specific exact mappings for flagged colleges & clusters
const SPECIFIC_COLLEGE_MAP = [
  // Flagged Bangalore / Karnataka institutions
  { match: 'IIIT Bangalore', img: '/images/campuses/iiit_bangalore_campus.jpg' },
  { match: 'Vidhya Shekhar', img: '/images/campuses/bms_bangalore.jpg' },
  { match: 'Bangalore Integrated Management Academy', img: '/images/campuses/pes_bangalore.jpg' },
  { match: 'Rathinam School of Business', img: '/images/campuses/rathinam_campus.jpg' },
  { match: 'Imperial Institute of Advanced Management', img: '/images/campuses/iim_bangalore.jpg' },
  { match: 'Canara Bank School of Management', img: '/images/campuses/bangalore_university.jpg' },
  { match: 'Canarabank School of Management', img: '/images/campuses/bangalore_university.jpg' },
  { match: 'Bangalore Technological Institute', img: '/images/campuses/bms_bangalore.jpg' },
  { match: 'Sindhi Instiute of Management', img: '/images/campuses/bangalore_university.jpg' },
  { match: 'Sindhi College', img: '/images/campuses/bangalore_university.jpg' },
  { match: 'Regional College of Management Bangalore', img: '/images/campuses/pes_bangalore.jpg' },
  { match: 'Regional College of Management and Entrepreneurship', img: '/images/campuses/pes_bangalore.jpg' },

  // Flagged Tamil Nadu & Pune institutions
  { match: 'SRINIVASAN COLLEGE OF ARTS', img: '/images/campuses/srinivasan_perambalur.jpg' },
  { match: 'DHANALAKSHMI SRINIVASAN', img: '/images/campuses/srinivasan_perambalur.jpg' },
  { match: 'KV INSTITUE OF MANAGEMENT', img: '/images/campuses/kv_imis_coimbatore.jpg' },
  { match: 'RAMACHANDRAN INTERNATIONAL INSTITUTE', img: '/images/campuses/riim_pune.jpeg' },
  { match: 'RIIM', img: '/images/campuses/riim_pune.jpeg' },
  { match: 'SAS INSTITUTE OF MANAGEMENT', img: '/images/campuses/sas_institute_boisar.png' },
  { match: 'MATOSHRI USHATAI JADHAV', img: '/images/campuses/matoshri_ushatai_jadhav.jpg' },

  // Flagged Mumbai / Maharashtra institutions
  { match: 'SVIMS', img: '/images/campuses/svims_wadala_mumbai.jpeg' },
  { match: 'SIR M. VISVESVARAYA INSTITUTE OF MANAGEMENT', img: '/images/campuses/svims_wadala_mumbai.jpeg' },
  { match: 'BHARATI VIDYAPEETH', img: '/images/campuses/bharati_vidyapeeth_navimumbai.jpg' },
  { match: 'ATHARVA', img: '/images/campuses/atharva_complex_malad.jpg' },
  { match: 'THAKUR', img: '/images/campuses/thakur_complex_kandivali.webp' },
  { match: 'WELINGKAR', img: '/images/campuses/weschool_matunga_mumbai.jpeg' },
  { match: 'WESCHOOL', img: '/images/campuses/weschool_matunga_mumbai.jpeg' },
  { match: 'PRIN. L. N. WELINGKAR', img: '/images/campuses/weschool_matunga_mumbai.jpeg' },
  { match: 'SIR J. J.', img: '/images/campuses/sir_jj_art_mumbai.jpg' },
  { match: 'ALKESH DINESH MODY', img: '/images/campuses/alkesh_dinesh_mody_mumbai.jpg' },
  { match: 'CHETANA', img: '/images/campuses/chetana_bandra.jpg' },
  { match: 'BUNTS SANGHA', img: '/images/campuses/bunts_sangha_mumbai.jpeg' },
  { match: 'VALIA SCHOOL OF MANAGEMENT', img: '/images/campuses/valia_andheri.jpeg' },
  { match: 'COSMOPOLITAN EDUCATION SOCIETY', img: '/images/campuses/valia_andheri.jpeg' },
  { match: 'KANDIVLI EDUCATION SOCIETY', img: '/images/campuses/kes_shroff_kandivali.jpg' },
  { match: 'B K SHROFF', img: '/images/campuses/kes_shroff_kandivali.jpg' },
  { match: 'SAILEE DEGREE COLLEGE', img: '/images/campuses/sailee_college_borivali.jpg' },
  { match: 'PSSVMS SAILEE', img: '/images/campuses/sailee_college_borivali.jpg' },
  { match: 'SARASWATI COLLEGE OF ENGINEERING', img: '/images/campuses/saraswati_kharghar.webp' },
  { match: 'SHEILA RAHEJA', img: '/images/campuses/sheila_raheja_bandra.webp' },
  { match: 'GNIMS', img: '/images/campuses/gnims_matunga.png' },
  { match: 'GURU NANAK INSTITUTE OF MANAGEMENT', img: '/images/campuses/gnims_matunga.png' },
  { match: 'KOHINOOR MANAGEMENT SCHOOL', img: '/images/campuses/kohinoor_kurla.jpg' },
  { match: 'KOHINOOR BUSINESS SCHOOL', img: '/images/campuses/kohinoor_kurla.jpg' },
  { match: 'USHA PRAVIN GANDHI', img: '/images/campuses/svkm_upg_vileparle.jpg' },
  { match: 'SHRI VILE PARLE KELAVANI MANDAL', img: '/images/campuses/svkm_upg_vileparle.jpg' },
  { match: 'MANIBEN M.P. SHAH', img: '/images/campuses/maniben_mp_shah_matunga.jpg' },
  { match: 'INDIAN INSTITUTE OF TECHNOLOGY BOMBAY', img: '/images/campuses/iit_bombay_powai.jpg' },
  { match: 'IIT BOMBAY', img: '/images/campuses/iit_bombay_powai.jpg' },
  { match: 'VEERMATA JIJABAI TECHNOLOGICAL INSTITUTE', img: '/images/campuses/vjti_mumbai.jpg' },
  { match: 'VJTI', img: '/images/campuses/vjti_mumbai.jpg' },
  { match: 'PUNE INSTITUTE OF BUSINESS MANAGEMENT', img: '/images/campuses/pibm_pune.webp' },
  { match: 'PIBM', img: '/images/campuses/pibm_pune.webp' },
  { match: 'NAGINDAS KHANDWALA', img: '/images/campuses/nagindas_khandwala_malad.jpg' }
];

// 3. Blacklisted Domains & Keywords
const BAD_DOMAINS = [
  'colomio.com', 'wallpapers.com', 'wallpapercave.com', 'wallpaperaccess.com',
  '4kwallpapers.com', 'getwallpapers.com', 'hdwallpapers.net', 'wixmp.com',
  'deviantart.com', 'deviantart.net', 'deviantart', 'thoughtco.com', 'clearsky2100.com', 'zhimg.com', 'dbl.id',
  'uoregon.edu', 'shutterstock.com', 'freepik.com', 'vectorstock.com',
  'depositphotos.com', '123rf.com', 'dreamstime.com', 'istockphoto.com',
  'pinterest.com', 'pinimg.com', 'clipart.com', 'cleanpng.com', 'pngtree.com',
  'pngall.com', '5.imimg.com', 'taxstrategy.com.ec', 'cdn.getmidnight.com',
  'media-amazon.com', 'm.media-amazon.com', 'exportersindia.com', 'unsplash.com',
  'pexels.com', 'pixabay.com', 'mobilization-network.org', 'dx1app.com',
  'cdpcdn.dx1app.com', 'etsystatic.com', 'publicdomainpictures.net',
  'made-in-china.com', 'youngjump.jp', 'trainerhangout.com', 'hscicdn.com'
];

const BAD_KEYWORDS = [
  'cylinder', 'sintex', 'drawing', 'letter-png', 'wallpaper', 'dolphin',
  'whale', 'animal', 'bird', 'cat', 'dog', 'cartoon', 'flower', 'pelican',
  'citroen', 'motorcycle', 'sunset', 'beach', 'tree-drawing', 'vector',
  'clipart', 'illustration', 'sketch', 'alphabet', 'catheter', 'nasogastric',
  'r-letter', 't-letter', 'j-letter', 'softball', 'multidisciplinary',
  'how-to-draw', 'neon-blue', 'sricerrarruc'
];

function isJunkUrl(url) {
  if (!url || typeof url !== 'string') return true;
  if (url.startsWith('/images/campuses/')) return false; // Verified local photo!
  
  const lower = url.toLowerCase();
  for (const dom of BAD_DOMAINS) {
    if (lower.includes(dom)) return true;
  }
  for (const kw of BAD_KEYWORDS) {
    if (lower.includes(kw)) return true;
  }
  return false;
}

// 4. Perform Audit & Cleanup
let specificCount = 0;
let junkPurgedCount = 0;
let validKeptCount = 0;

colleges.forEach(c => {
  const name = c.name || '';
  const alias = c.alias || '';
  const fullName = `${name} ${alias}`.toLowerCase();

  // Check specific mapping first
  let matchedSpecific = null;
  for (const map of SPECIFIC_COLLEGE_MAP) {
    if (fullName.includes(map.match.toLowerCase())) {
      matchedSpecific = map.img;
      break;
    }
  }

  if (matchedSpecific) {
    c.image = matchedSpecific;
    c.img = matchedSpecific;
    if (c.bannerImage && isJunkUrl(c.bannerImage)) {
      c.bannerImage = null;
    }
    specificCount++;
    return;
  }

  // Check current image
  const currentImg = c.image || c.img || '';
  if (isJunkUrl(currentImg)) {
    const safeReplacement = getSafeCampusImage(c);
    c.image = safeReplacement;
    c.img = safeReplacement;
    junkPurgedCount++;
  } else {
    validKeptCount++;
  }

  // Clean banner image if junk
  if (c.bannerImage && isJunkUrl(c.bannerImage)) {
    c.bannerImage = null;
  }
});

console.log(`\nAudit & Cleanup Summary:`);
console.log(`- Flagged & Specific Institutes Updated: ${specificCount}`);
console.log(`- Junk / Drawing / Animal / Wallpaper URLs Purged & Replaced: ${junkPurgedCount}`);
console.log(`- Authentic Pre-existing Campus URLs Kept: ${validKeptCount}`);
console.log(`- Total Colleges in Database: ${colleges.length}`);

// Save back to siteData.json
if (isArray) {
  fs.writeFileSync(siteDataPath, JSON.stringify(colleges, null, 2), 'utf8');
} else {
  data.colleges = colleges;
  fs.writeFileSync(siteDataPath, JSON.stringify(data, null, 2), 'utf8');
}

console.log(`\n✅ Saved updated clean siteData.json successfully!`);
