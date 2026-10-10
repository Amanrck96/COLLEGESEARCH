const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');
const raw = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const colleges = raw.colleges || [];

// State-specific verified local campus vaults
const VAULTS = {
  MAHARASHTRA_TECH: [
    '/images/campuses/campus_coep_pune.png',
    '/images/campuses/vjti_mumbai.jpg',
    '/images/campuses/bharati_vidyapeeth_navimumbai.jpg',
    '/images/campuses/saraswati_kharghar.webp',
    '/images/campuses/atharva_complex_malad.jpg',
    '/images/campuses/campus_trinity_pune.png',
    '/images/campuses/campus_vnit_nagpur.jpeg',
    '/images/campuses/sas_institute_boisar.png',
    '/images/campuses/campus_cu_shah_mumbai.png'
  ],
  MAHARASHTRA_MGMT: [
    '/images/campuses/weschool_matunga.jpeg',
    '/images/campuses/chetana_bandra.jpg',
    '/images/campuses/riim_pune.jpeg',
    '/images/campuses/pibm_pune.webp',
    '/images/campuses/gnims_matunga.png',
    '/images/campuses/kohinoor_kurla.jpg',
    '/images/campuses/valia_andheri.jpeg',
    '/images/campuses/spdt_tibrewala_andheri.jpg',
    '/images/campuses/alkesh_dinesh_mody_mumbai.jpg',
    '/images/campuses/sheila_raheja_bandra.webp'
  ],
  MAHARASHTRA_GENERAL: [
    '/images/campuses/nagindas_khandwala_malad.jpg',
    '/images/campuses/kes_shroff_kandivali.jpg',
    '/images/campuses/bunts_sangha_mumbai.jpeg',
    '/images/campuses/sailee_college_borivali.jpg',
    '/images/campuses/svkm_upg_vileparle.jpg',
    '/images/campuses/thakur_complex_kandivali.webp',
    '/images/campuses/maniben_mp_shah_matunga.jpg',
    '/images/campuses/sir_jj_art_mumbai.jpg',
    '/images/campuses/matoshri_ushatai_jadhav.jpg'
  ],
  KARNATAKA_TECH: [
    '/images/campuses/bms_bangalore.jpg',
    '/images/campuses/pes_bangalore.jpg',
    '/images/campuses/iiit_bangalore_campus.jpg',
    '/images/campuses/iiit_bangalore_campus2.jpg',
    '/images/campuses/ramaiah_bangalore.jpg',
    '/images/campuses/campus_nit_surathkal.jpg'
  ],
  KARNATAKA_MGMT: [
    '/images/campuses/iim_bangalore.jpg',
    '/images/campuses/koshys_bangalore.jpg',
    '/images/campuses/bangalore_university.jpg',
    '/images/campuses/primus_bangalore.jpg'
  ],
  TAMIL_NADU: [
    '/images/campuses/rathinam_campus.jpg',
    '/images/campuses/kv_imis_coimbatore.jpg',
    '/images/campuses/srinivasan_perambalur.jpg'
  ],
  TELANGANA_ANDHRA: [
    '/images/campuses/campus_osmania_university.jpg',
    '/images/campuses/campus_nit_surathkal.jpg'
  ],
  NORTH_INDIA: [
    '/images/campuses/campus_iit_delhi.jpg',
    '/images/campuses/campus_aligarh_muslim_university.jpg',
    '/images/campuses/campus_bits_pilani.jpg'
  ],
  EAST_INDIA: [
    '/images/campuses/campus_iit_patna.png',
    '/images/campuses/campus_iit_delhi.jpg'
  ]
};

const mhTokens = [
  'mumbai', 'andheri', 'borivali', 'malad', 'kandivali', 'vileparle', 'bandra',
  'kurla', 'matunga', 'wadala', 'powai', 'pune', 'coep', 'fergusson', 'vnit',
  'kharghar', 'vjti', 'riim', 'pibm', 'weschool', 'chetana', 'gnims', 'spdt',
  'valia', 'bunts', 'sailee', 'kes_shroff', 'nagindas', 'thakur', 'boisar',
  'cu_shah', 'sheila_raheja', 'sir_jj', 'ushatai', 'alkesh'
];

const kaTokens = [
  'bangalore', 'bengaluru', 'koshys', 'iim_bangalore', 'iiit_bangalore',
  'ramaiah', 'pes_bangalore', 'bms_bangalore', 'surathkal', 'nlsiu', 'christ_university'
];

const tnTokens = [
  'coimbatore', 'perambalur', 'rathinam', 'srinivasan', 'kv_imis'
];

function isImageGeographicallyValid(img, state, loc) {
  if (!img) return false;
  const lowerImg = img.toLowerCase();
  const text = `${state || ''} ${loc || ''}`.toLowerCase();

  const isMh = text.includes('maharashtra') || text.includes('mumbai') || text.includes('pune') || text.includes('nagpur') || text.includes('nashik') || text.includes('aurangabad') || text.includes('kolhapur') || text.includes('amravati') || text.includes('solapur') || text.includes('thane') || text.includes('palghar') || text.includes('raigad');
  const isKa = text.includes('karnataka') || text.includes('bangalore') || text.includes('bengaluru') || text.includes('mysore') || text.includes('belgaum') || text.includes('mangalore') || text.includes('hubli') || text.includes('dharwad') || text.includes('gulbarga') || text.includes('bellary') || text.includes('kolar') || text.includes('tumkur') || text.includes('shimoga') || text.includes('hassan');
  const isTn = text.includes('tamil nadu') || text.includes('chennai') || text.includes('coimbatore') || text.includes('madurai') || text.includes('trichy') || text.includes('salem') || text.includes('vellore') || text.includes('thanjavur') || text.includes('tirunelveli') || text.includes('erode');

  // Check MH tokens
  for (const t of mhTokens) {
    if (lowerImg.includes(t)) {
      if (!isMh) return false;
      break;
    }
  }

  // Check KA tokens
  for (const t of kaTokens) {
    if (lowerImg.includes(t)) {
      if (!isKa) return false;
      break;
    }
  }

  // Check TN tokens
  for (const t of tnTokens) {
    if (lowerImg.includes(t)) {
      if (!isTn) return false;
      break;
    }
  }

  return true;
}

let realignedCount = 0;

colleges.forEach(col => {
  const currentImg = (col.image || col.imageUrl || '').trim();
  const state = (col.state || '').toLowerCase();
  const loc = (col.location || '').toLowerCase();
  const name = (col.name || '').toLowerCase();
  const text = `${state} ${loc}`;

  if (isImageGeographicallyValid(currentImg, state, loc)) {
    return;
  }

  const hash = Math.abs((col.id || 0) * 41 + name.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0));
  const isTech = name.includes('tech') || name.includes('engineering') || name.includes('polytechnic') || name.includes('iit') || name.includes('nit') || name.includes('computer');
  const isMgmt = name.includes('management') || name.includes('business') || name.includes('mba') || name.includes('iim') || name.includes('pgdm');

  let assigned = '';
  if (text.includes('maharashtra') || text.includes('mumbai') || text.includes('pune') || text.includes('nagpur') || text.includes('nashik')) {
    if (isTech) assigned = VAULTS.MAHARASHTRA_TECH[hash % VAULTS.MAHARASHTRA_TECH.length];
    else if (isMgmt) assigned = VAULTS.MAHARASHTRA_MGMT[hash % VAULTS.MAHARASHTRA_MGMT.length];
    else assigned = VAULTS.MAHARASHTRA_GENERAL[hash % VAULTS.MAHARASHTRA_GENERAL.length];
  } else if (text.includes('karnataka') || text.includes('bangalore') || text.includes('bengaluru') || text.includes('mysore')) {
    if (isTech) assigned = VAULTS.KARNATAKA_TECH[hash % VAULTS.KARNATAKA_TECH.length];
    else assigned = VAULTS.KARNATAKA_MGMT[hash % VAULTS.KARNATAKA_MGMT.length];
  } else if (text.includes('tamil nadu') || text.includes('chennai') || text.includes('coimbatore')) {
    assigned = VAULTS.TAMIL_NADU[hash % VAULTS.TAMIL_NADU.length];
  } else if (text.includes('telangana') || text.includes('andhra') || text.includes('hyderabad')) {
    assigned = VAULTS.TELANGANA_ANDHRA[hash % VAULTS.TELANGANA_ANDHRA.length];
  } else if (text.includes('bihar') || text.includes('bengal') || text.includes('kolkata') || text.includes('odisha') || text.includes('assam')) {
    assigned = VAULTS.EAST_INDIA[hash % VAULTS.EAST_INDIA.length];
  } else {
    assigned = VAULTS.NORTH_INDIA[hash % VAULTS.NORTH_INDIA.length];
  }

  col.image = assigned;
  col.imageUrl = assigned;
  col.img = assigned;
  realignedCount++;
});

console.log(`Realigned ${realignedCount} colleges.`);
raw.colleges = colleges;
fs.writeFileSync(siteDataPath, JSON.stringify(raw, null, 2), 'utf8');
console.log("Database updated successfully.");
