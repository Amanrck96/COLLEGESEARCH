const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const colleges = Array.isArray(siteData) ? siteData : siteData.colleges;

console.log(`Loaded ${colleges.length} colleges.`);

// 1. Exact verified institutions mapping
const EXACT_INSTITUTIONS = [
  // IIM Calcutta (all variants, course admissions, duplicates)
  {
    pattern: /iim calcutta|indian institute of management calcutta|iim kolkata|iim calcutta course/i,
    img: '/images/campuses/iim_calcutta.jpg'
  },
  // Khandelwal College of Management Science and Technology (KCMT Bareilly)
  {
    pattern: /khandelwal college of management|khandelwal college of mgmt|kcmt bareilly|khandelwal college/i,
    img: '/images/campuses/kcmt_bareilly.png'
  },
  // Delhi Technological University (DTU)
  {
    pattern: /delhi technological university|dtu delhi|delhi college of engineering/i,
    img: '/images/campuses/delhi_technological_university.jpg'
  },
  // IIT Delhi
  {
    pattern: /indian institute of technology delhi|\biit delhi\b/i,
    img: '/images/campuses/campus_iit_delhi.jpg'
  },
  // RVS College of Engineering & Technology Sulur Coimbatore
  {
    pattern: /rvs college of engineering|rvs college|rvs institute/i,
    img: '/images/campuses/rvscet_coimbatore.webp'
  },
  // BITS Pilani
  {
    pattern: /birla institute of technology and science|\bbits pilani\b/i,
    img: '/images/campuses/campus_bits_pilani.jpg'
  },
  // IIT Bombay
  {
    pattern: /indian institute of technology bombay|\biit bombay\b/i,
    img: '/images/campuses/iit_bombay_powai.jpg'
  },
  // IIT Patna
  {
    pattern: /indian institute of technology patna|\biit patna\b/i,
    img: '/images/campuses/campus_iit_patna.png'
  },
  // Aligarh Muslim University
  {
    pattern: /aligarh muslim university|\bamu aligarh\b/i,
    img: '/images/campuses/campus_aligarh_muslim_university.jpg'
  },
  // NIT Surathkal
  {
    pattern: /national institute of technology karnataka|\bnit surathkal\b/i,
    img: '/images/campuses/campus_nit_surathkal.jpg'
  },
  // IIM Bangalore
  {
    pattern: /indian institute of management bangalore|\biim bangalore\b/i,
    img: '/images/campuses/iim_bangalore.jpg'
  },
  // VNIT Nagpur
  {
    pattern: /visvesvaraya national institute of technology|\bvnit nagpur\b/i,
    img: '/images/campuses/campus_vnit_nagpur.jpeg'
  },
  // Osmania University
  {
    pattern: /osmania university/i,
    img: '/images/campuses/campus_osmania_university.jpg'
  },
  // COEP Pune
  {
    pattern: /college of engineering pune|\bcoep\b/i,
    img: '/images/campuses/campus_coep_pune.png'
  },
  // VJTI Mumbai
  {
    pattern: /veermata jijabai|\bvjti\b/i,
    img: '/images/campuses/vjti_mumbai.jpg'
  },
  // PIBM Pune
  {
    pattern: /pune institute of business management|\bpibm\b/i,
    img: '/images/campuses/pibm_pune.webp'
  },
  // SVIMS Wadala
  {
    pattern: /svims business school|sir m visvesvaraya institute of management/i,
    img: '/images/campuses/svims_wadala_mumbai.jpeg'
  },
  // Thakur Kandivali
  {
    pattern: /thakur global business|thakur college of engineering|thakur institute/i,
    img: '/images/campuses/thakur_complex_kandivali.webp'
  },
  // Atharva Malad
  {
    pattern: /atharva school of business|atharva institute|atharva college/i,
    img: '/images/campuses/atharva_complex_malad.jpg'
  },
  // WeSchool Matunga
  {
    pattern: /welingkar|weschool/i,
    img: '/images/campuses/weschool_matunga_mumbai.jpeg'
  },
  // Chetana Bandra
  {
    pattern: /chetana'?s/i,
    img: '/images/campuses/chetana_bandra.jpg'
  },
  // KES Shroff Kandivali
  {
    pattern: /kes shroff|kandivli education society/i,
    img: '/images/campuses/kes_shroff_kandivali.jpg'
  },
  // Bharati Vidyapeeth Navi Mumbai
  {
    pattern: /bharati vidyapeeth.*(navi mumbai|belapur|kharghar|department of manag)/i,
    img: '/images/campuses/bharati_vidyapeeth_navimumbai.jpg'
  },
  // Srinivasan Perambalur
  {
    pattern: /srinivasan college/i,
    img: '/images/campuses/srinivasan_perambalur.jpg'
  },
  // KV IMIS Coimbatore
  {
    pattern: /kv institut|kv imis/i,
    img: '/images/campuses/kv_imis_coimbatore.jpg'
  },
  // Rathinam Coimbatore
  {
    pattern: /rathinam/i,
    img: '/images/campuses/rathinam_campus.jpg'
  }
];

// Clean, neutral architectural campus pool for unmapped / generic institutions
const DIVERSE_CAMPUS_POOL = [
  '/images/campuses/campus_coep_pune.png',
  '/images/campuses/vjti_mumbai.jpg',
  '/images/campuses/bangalore_university.jpg',
  '/images/campuses/bms_bangalore.jpg',
  '/images/campuses/pes_bangalore.jpg',
  '/images/campuses/ramaiah_bangalore.jpg',
  '/images/campuses/iiit_bangalore_campus.jpg',
  '/images/campuses/campus_vnit_nagpur.jpeg',
  '/images/campuses/campus_osmania_university.jpg',
  '/images/campuses/campus_mgm_navi_mumbai.jpg',
  '/images/campuses/campus_cu_shah_mumbai.png',
  '/images/campuses/campus_st_xaviers_mumbai.jpg',
  '/images/campuses/bunts_sangha_mumbai.jpeg',
  '/images/campuses/chetana_bandra.jpg',
  '/images/campuses/valia_andheri.jpeg',
  '/images/campuses/svkm_upg_vileparle.jpg',
  '/images/campuses/maniben_mp_shah_matunga.jpg',
  '/images/campuses/sailee_college_borivali.jpg',
  '/images/campuses/sheila_raheja_bandra.webp',
  '/images/campuses/gnims_matunga.png',
  '/images/campuses/saraswati_kharghar.webp',
  '/images/campuses/atharva_complex_malad.jpg',
  '/images/campuses/pibm_pune.webp',
  '/images/campuses/riim_pune.jpeg',
  '/images/campuses/srinivasan_perambalur.jpg',
  '/images/campuses/kv_imis_coimbatore.jpg',
  '/images/campuses/rathinam_campus.jpg',
  '/images/campuses/koshys_bangalore.jpg',
  '/images/campuses/primus_bangalore.jpg'
];

function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
}

let exactCount = 0;
let redistributedCount = 0;

colleges.forEach(c => {
  const name = c.name || '';

  // 1. Check exact match
  let matched = false;
  for (const item of EXACT_INSTITUTIONS) {
    if (item.pattern.test(name)) {
      c.img = item.img;
      c.image = item.img;
      exactCount++;
      matched = true;
      break;
    }
  }

  // 2. If it was assigned campus_iit_delhi.jpg and is NOT IIT Delhi:
  // Redistribute it across the diverse clean campus pool!
  if (!matched && (c.img === '/images/campuses/campus_iit_delhi.jpg' || c.image === '/images/campuses/campus_iit_delhi.jpg')) {
    const key = `${name}_${c.id}_${c.state || ''}`;
    const poolIdx = hashString(key) % DIVERSE_CAMPUS_POOL.length;
    const assigned = DIVERSE_CAMPUS_POOL[poolIdx];
    c.img = assigned;
    c.image = assigned;
    redistributedCount++;
  }
});

console.log(`✅ Exact institutions matched and updated: ${exactCount}`);
console.log(`✅ Non-IIT-Delhi colleges redistributed from campus_iit_delhi: ${redistributedCount}`);

// Verify IIM Calcutta Course 2027 and KCMT
const c1 = colleges.find(c => c.id === 10635);
const c2 = colleges.find(c => c.id === 10800);
const c3 = colleges.find(c => c.id === 10833);
console.log('College 10635 (IIM Calcutta):', c1 ? { name: c1.name, img: c1.img } : 'not found');
console.log('College 10800 (KCMT Bareilly):', c2 ? { name: c2.name, img: c2.img } : 'not found');
console.log('College 10833 (RVS Coimbatore):', c3 ? { name: c3.name, img: c3.img } : 'not found');

// Write back to siteData.json
if (Array.isArray(siteData)) {
  fs.writeFileSync(siteDataPath, JSON.stringify(colleges, null, 2), 'utf8');
} else {
  siteData.colleges = colleges;
  fs.writeFileSync(siteDataPath, JSON.stringify(siteData, null, 2), 'utf8');
}
console.log('✅ public/siteData.json updated successfully.');
