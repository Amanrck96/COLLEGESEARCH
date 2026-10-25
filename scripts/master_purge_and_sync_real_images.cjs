const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');
const rawData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const isArray = Array.isArray(rawData);
const colleges = isArray ? rawData : rawData.colleges;

console.log(`Loaded ${colleges.length} colleges from siteData.json`);

// 1. EXACT USER FLAGGED INSTITUTIONS & SIBLINGS MAPPING
const EXACT_INSTITUTION_MAP = [
  // PIBM Pune
  { match: /PUNE INSTITUTE OF BUSINESS MANAGEMENT/i, img: '/images/campuses/pibm_pune.webp' },
  
  // SVIMS Wadala Mumbai
  { match: /SVIMS BUSINESS SCHOOL|SIR M VISVESVARAYA INSTITUTE OF MANAGEMENT STUDIES/i, img: '/images/campuses/svims_wadala_mumbai.jpeg' },
  
  // Bharati Vidyapeeth Belapur / Navi Mumbai
  { match: /BHARATI VIDYAPEETH.*(DEPARTMENT OF MANAG|MANAGEMENT STUDIES.*OFF CAMPUS|NAVI MUMBAI|BELAPUR|KHARGHAR)/i, img: '/images/campuses/bharati_vidyapeeth_navimumbai.jpg' },
  
  // Atharva Educational Complex Malad Mumbai
  { match: /ATHARVA (SCHOOL OF BUSINESS|INSTITUTE OF MANAGEMENT|COLLEGE OF ENGINEERING)/i, img: '/images/campuses/atharva_complex_malad.jpg' },
  
  // Thakur Educational Campus Kandivali Mumbai
  { match: /THAKUR (GLOBAL BUSINESS SCHOOL|INSTITUTE OF MANAGEMENT|COLLEGE OF ENGINEERING)/i, img: '/images/campuses/thakur_complex_kandivali.webp' },
  
  // Welingkar Institute of Management Matunga Mumbai
  { match: /WELINGKAR INSTITUTE OF MANAGEMENT|PRIN\.? L\.?\s?N\.? WELINGKAR/i, img: '/images/campuses/weschool_matunga_mumbai.jpeg' },
  
  // Sir J. J. Institute of Applied Art & School of Art Mumbai
  { match: /SIR J\.?\s?J\.?\s?(INSTITUTE OF APPLIED ART|SCHOOL OF ART)/i, img: '/images/campuses/sir_jj_art_mumbai.jpg' },
  
  // Alkesh Dinesh Mody Institute Kalina Mumbai
  { match: /ALKESH DINESH MODY/i, img: '/images/campuses/alkesh_dinesh_mody_mumbai.jpg' },
  
  // Chetana's Ramprasad Khandelwal Institute Bandra Mumbai
  { match: /CHETANA'?S (RAMPRASAD|INSTITUTE OF MANAGEMENT)/i, img: '/images/campuses/chetana_bandra.jpg' },
  
  // Valia School of Management / Valia College Andheri Mumbai
  { match: /VALIA (SCHOOL OF MANAGEMENT|COLLEGE|C\.L\. COLLEGE)/i, img: '/images/campuses/valia_andheri.jpeg' },
  
  // Bunts Sangha Mumbai Institutions
  { match: /BUNTS SANGHA/i, img: '/images/campuses/bunts_sangha_mumbai.jpeg' },
  
  // Kandivli Education Society BK Shroff / KES Shroff Kandivali Mumbai
  { match: /KANDIVLI EDUCATION SOCIETY|KES SHROFF/i, img: '/images/campuses/kes_shroff_kandivali.jpg' },
  
  // Saraswati College of Engineering Kharghar Navi Mumbai
  { match: /SARASWATI COLLEGE OF ENGINEERING/i, img: '/images/campuses/saraswati_kharghar.webp' },
  
  // Smt. Maniben M.P. Shah Women's College Matunga Mumbai
  { match: /SMT\.?\s?MANIBEN M\.?P\.?\s?SHAH/i, img: '/images/campuses/maniben_mp_shah_matunga.jpg' },
  
  // Sheila Raheja School of Business / Hotel Management Bandra Mumbai
  { match: /SHEILA RAHEJA/i, img: '/images/campuses/sheila_raheja_bandra.webp' },
  
  // GNIMS Business School / Guru Nanak Institutions Matunga Mumbai
  { match: /GNIMS|GURU NANAK INSTITUTE OF MANAGEMENT|GURU NANAK KHALSA COLLEGE/i, img: '/images/campuses/gnims_matunga.png' },
  
  // Kohinoor Management School & Kohinoor Business School Kurla Mumbai
  { match: /KOHINOOR (MANAGEMENT SCHOOL|BUSINESS SCHOOL)/i, img: '/images/campuses/kohinoor_kurla.jpg' },
  
  // SVKM Institutions (UPG College, NMIMS Mumbai, Mithibai, Bhagubhai)
  { match: /USHA PRAVIN GANDHI|SVKM|SHRI VILE PARLE KELAVANI MANDAL/i, img: '/images/campuses/svkm_upg_vileparle.jpg' },

  // VJTI Mumbai
  { match: /VEERMATA JIJABAI TECHNOLOGICAL|VJTI/i, img: '/images/campuses/vjti_mumbai.jpg' },

  // COEP Pune
  { match: /COLLEGE OF ENGINEERING PUNE|COEP TECHNOLOGICAL/i, img: '/images/campuses/campus_coep_pune.png' },

  // VNIT Nagpur
  { match: /VISVESVARAYA NATIONAL INSTITUTE OF TECHNOLOGY|VNIT NAGPUR/i, img: '/images/campuses/campus_vnit_nagpur.jpeg' },

  // MGM Navi Mumbai
  { match: /MGM'?S COLLEGE OF ENGINEERING/i, img: '/images/campuses/campus_mgm_navi_mumbai.jpg' },

  // C.U. Shah Mumbai
  { match: /C\.U\.\s?SHAH COLLEGE OF PHARMACY/i, img: '/images/campuses/campus_cu_shah_mumbai.png' },

  // Trinity Pune
  { match: /TRINITY COLLEGE OF ENGINEERING/i, img: '/images/campuses/campus_trinity_pune.png' },

  // IIT Patna
  { match: /INDIAN INSTITUTE OF TECHNOLOGY PATNA|IIT PATNA/i, img: '/images/campuses/campus_iit_patna.png' }
];

// 2. DISALLOWED JUNK DOMAINS
const JUNK_DOMAINS = [
  'pixabay.com',
  'ftcdn.net',
  'fotor.com',
  'raketcontent.com',
  'englishilm.com',
  'walmartimages.com',
  'imagist3ds.com',
  'dollsofindia.com',
  'speridian.com',
  'sachishiksha.com',
  'vexels.com',
  'pinterest.com',
  'hdqwalls.com',
  'educatecomputer.com',
  'montforthydprovince.org',
  'pinimg.com',
  'dreamstime.com',
  'shutterstock.com',
  'freepik.com',
  '123rf.com',
  'istockphoto.com',
  'stock.adobe.com',
  'imagekit.io'
];

// 3. DISALLOWED JUNK KEYWORDS IN URL
const JUNK_URL_PATTERNS = [
  /Shardul/i,
  /flower/i,
  /dog/i,
  /breed/i,
  /\bcat\b/i,
  /animal/i,
  /snake/i,
  /ladder/i,
  /outfit/i,
  /dress/i,
  /oil-change/i,
  /\btable\b/i,
  /passport/i,
  /hawai/i,
  /diamond/i,
  /\bgirl\b/i,
  /Astor/i,
  /luffy/i,
  /anime/i,
  /goddess/i,
  /painting/i,
  /clipart/i,
  /vector/i,
  /drawing/i,
  /diagram/i,
  /recipe/i,
  /bedside/i,
  /Drain-Pan/i,
  /5th-gen/i,
  /Fifth-Generation/i,
  /snakesladders/i,
  /Breeds-of-dogs/i
];

// Curated verified campus fallback pool (all valid local images)
const LOCAL_CAMPUS_POOL = [
  '/images/campuses/campus_coep_pune.png',
  '/images/campuses/campus_iit_delhi.jpg',
  '/images/campuses/campus_iit_patna.png',
  '/images/campuses/campus_vnit_nagpur.jpeg',
  '/images/campuses/campus_mgm_navi_mumbai.jpg',
  '/images/campuses/vjti_mumbai.jpg',
  '/images/campuses/weschool_matunga_mumbai.jpeg',
  '/images/campuses/pibm_pune.webp',
  '/images/campuses/svims_wadala_mumbai.jpeg',
  '/images/campuses/atharva_complex_malad.jpg',
  '/images/campuses/thakur_complex_kandivali.webp',
  '/images/campuses/bharati_vidyapeeth_navimumbai.jpg',
  '/images/campuses/kes_shroff_kandivali.jpg',
  '/images/campuses/saraswati_kharghar.webp',
  '/images/campuses/sheila_raheja_bandra.webp',
  '/images/campuses/gnims_matunga.png',
  '/images/campuses/chetana_bandra.jpg',
  '/images/campuses/maniben_mp_shah_matunga.jpg',
  '/images/campuses/valia_andheri.jpeg',
  '/images/campuses/svkm_upg_vileparle.jpg'
];

function isJunk(img) {
  if (!img || typeof img !== 'string') return true;
  for (const dom of JUNK_DOMAINS) {
    if (img.toLowerCase().includes(dom)) return true;
  }
  for (const pat of JUNK_URL_PATTERNS) {
    if (pat.test(img)) return true;
  }
  return false;
}

let exactAssigned = 0;
let junkPurged = 0;

colleges.forEach((c, index) => {
  const currentImg = c.img || c.image || '';
  
  // Step 1: Check Exact Institution Mapping
  let assignedExact = false;
  for (const item of EXACT_INSTITUTION_MAP) {
    if (item.match.test(c.name)) {
      c.img = item.img;
      c.image = item.img;
      exactAssigned++;
      assignedExact = true;
      break;
    }
  }

  // Step 2: If not matched exact, check if current image is junk
  if (!assignedExact) {
    if (isJunk(currentImg)) {
      junkPurged++;
      // Assign deterministic local campus building based on college ID
      const chosen = LOCAL_CAMPUS_POOL[c.id % LOCAL_CAMPUS_POOL.length];
      c.img = chosen;
      c.image = chosen;
    }
  }
});

// Save updated siteData.json
if (isArray) {
  fs.writeFileSync(siteDataPath, JSON.stringify(colleges, null, 2), 'utf8');
} else {
  rawData.colleges = colleges;
  fs.writeFileSync(siteDataPath, JSON.stringify(rawData, null, 2), 'utf8');
}

console.log(`\n================ SUMMARY ================`);
console.log(`✅ Exact Institutions Assigned: ${exactAssigned}`);
console.log(`🧹 Junk Images Purged & Replaced: ${junkPurged}`);
console.log(`💾 Saved updated database to public/siteData.json`);
