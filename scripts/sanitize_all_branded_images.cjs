const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const colleges = Array.isArray(siteData) ? siteData : siteData.colleges;

console.log(`Loaded ${colleges.length} colleges.`);

// Rules for strictly branded institution photos that must ONLY appear for their respective institution:
const STRICT_BRANDED_RULES = [
  {
    img: '/images/campuses/delhi_technological_university.jpg',
    allowedPattern: /delhi technological university|\bdtu\b/i
  },
  {
    img: '/images/campuses/campus_iit_delhi.jpg',
    allowedPattern: /indian institute of technology delhi|\biit delhi\b/i
  },
  {
    img: '/images/campuses/campus_bits_pilani.jpg',
    allowedPattern: /birla institute of technology and science|\bbits pilani\b/i
  },
  {
    img: '/images/campuses/campus_aligarh_muslim_university.jpg',
    allowedPattern: /aligarh muslim university|\bamu\b/i
  },
  {
    img: '/images/campuses/campus_osmania_university.jpg',
    allowedPattern: /osmania university/i
  },
  {
    img: '/images/campuses/campus_nit_surathkal.jpg',
    allowedPattern: /national institute of technology karnataka|\bnit surathkal\b/i
  },
  {
    img: '/images/campuses/kv_imis_coimbatore.jpg',
    allowedPattern: /kv institut|kv imis/i
  },
  {
    img: '/images/campuses/iim_calcutta.jpg',
    allowedPattern: /iim calcutta|indian institute of management calcutta|iim kolkata/i
  },
  {
    img: '/images/campuses/kcmt_bareilly.png',
    allowedPattern: /khandelwal college|kcmt/i
  },
  {
    img: '/images/campuses/rvscet_coimbatore.webp',
    allowedPattern: /rvs college|rvs institute/i
  },
  {
    img: '/images/campuses/mpitm_kanina.jpg',
    allowedPattern: /maharana pratap institute of technology/i
  }
];

// Clean, 100% unbranded university campus architecture pool
// These images show beautiful university buildings, quadrangles, libraries, and courtyards
// with ZERO college names or conflicting signage on the facade.
const NEUTRAL_ARCHITECTURE_POOL = [
  '/images/campuses/campus_architecture_1.jpg',
  '/images/campuses/campus_architecture_2.jpg',
  '/images/campuses/campus_architecture_3.jpg',
  '/images/campuses/campus_architecture_4.jpg',
  '/images/campuses/campus_architecture_5.jpg',
  '/images/campuses/campus_architecture_6.jpg',
  '/images/campuses/campus_architecture_7.jpg',
  '/images/campuses/campus_architecture_8.jpg',
  '/images/campuses/campus_architecture_9.jpg',
  '/images/campuses/campus_coep_pune.png',
  '/images/campuses/vjti_mumbai.jpg',
  '/images/campuses/bangalore_university.jpg',
  '/images/campuses/bms_bangalore.jpg',
  '/images/campuses/pes_bangalore.jpg',
  '/images/campuses/ramaiah_bangalore.jpg',
  '/images/campuses/iiit_bangalore_campus.jpg',
  '/images/campuses/campus_vnit_nagpur.jpeg',
  '/images/campuses/campus_mgm_navi_mumbai.jpg',
  '/images/campuses/campus_cu_shah_mumbai.png',
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
  '/images/campuses/riim_pune.jpeg'
];

function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
}

// 1. Explicitly assign authentic photos to known matching colleges
let explicitAssigned = 0;
colleges.forEach(c => {
  const name = c.name || '';
  if (/maharana pratap institute of technology/i.test(name)) {
    c.img = '/images/campuses/mpitm_kanina.jpg';
    c.image = '/images/campuses/mpitm_kanina.jpg';
    explicitAssigned++;
  } else if (/delhi technological university|\bdtu\b/i.test(name)) {
    c.img = '/images/campuses/delhi_technological_university.jpg';
    c.image = '/images/campuses/delhi_technological_university.jpg';
    explicitAssigned++;
  } else if (/indian institute of technology delhi|\biit delhi\b/i.test(name)) {
    c.img = '/images/campuses/campus_iit_delhi.jpg';
    c.image = '/images/campuses/campus_iit_delhi.jpg';
    explicitAssigned++;
  } else if (/iim calcutta|indian institute of management calcutta|iim kolkata/i.test(name)) {
    c.img = '/images/campuses/iim_calcutta.jpg';
    c.image = '/images/campuses/iim_calcutta.jpg';
    explicitAssigned++;
  } else if (/khandelwal college|kcmt/i.test(name)) {
    c.img = '/images/campuses/kcmt_bareilly.png';
    c.image = '/images/campuses/kcmt_bareilly.png';
    explicitAssigned++;
  } else if (/rvs college|rvs institute/i.test(name)) {
    c.img = '/images/campuses/rvscet_coimbatore.webp';
    c.image = '/images/campuses/rvscet_coimbatore.webp';
    explicitAssigned++;
  }
});
console.log(`Explicitly assigned authentic photos: ${explicitAssigned}`);

// 2. Sanitize any college displaying a strictly branded image that does not belong to that institution
let sanitizedCount = 0;
colleges.forEach(c => {
  const name = c.name || '';
  const currentImg = c.img || c.image || '';

  for (const rule of STRICT_BRANDED_RULES) {
    if (currentImg === rule.img) {
      if (!rule.allowedPattern.test(name)) {
        // Mismatch! Replace with clean, unbranded neutral campus architecture
        const key = `${name}_${c.id}_${c.state || ''}`;
        const poolIdx = hashString(key) % NEUTRAL_ARCHITECTURE_POOL.length;
        const newImg = NEUTRAL_ARCHITECTURE_POOL[poolIdx];
        c.img = newImg;
        c.image = newImg;
        sanitizedCount++;
        break;
      }
    }
  }
});

console.log(`Sanitized ${sanitizedCount} colleges that had mismatched branded college images.`);

// Write back to siteData.json
if (Array.isArray(siteData)) {
  fs.writeFileSync(siteDataPath, JSON.stringify(colleges, null, 2), 'utf8');
} else {
  siteData.colleges = colleges;
  fs.writeFileSync(siteDataPath, JSON.stringify(siteData, null, 2), 'utf8');
}
console.log('✅ public/siteData.json successfully updated and sanitized.');

