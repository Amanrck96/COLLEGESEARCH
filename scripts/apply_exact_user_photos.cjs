const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');
const rawData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const isArray = Array.isArray(rawData);
const colleges = isArray ? rawData : rawData.colleges;

console.log(`Updating siteData.json with exact photos for all user-reported colleges...`);

const EXACT_RULES = [
  // 1. All IIT Bombay entries
  {
    match: /INDIAN INSTITUTE OF TECHNOLOGY BOMBAY|IIT BOMBAY|SHAILESH J\.? MEHTA/i,
    img: '/images/campuses/iit_bombay_powai.jpg'
  },
  // 2. All Thakur institutions (Kandivali East)
  {
    match: /THAKUR/i,
    img: '/images/campuses/thakur_complex_kandivali.webp'
  },
  // 3. PSSVMS Sailee Degree College (Borivali)
  {
    match: /SAILEE/i,
    img: '/images/campuses/sailee_college_borivali.jpg'
  },
  // 4. Nagindas Khandwala College (Malad)
  {
    match: /NAGINDAS KHANDWALA/i,
    img: '/images/campuses/nagindas_khandwala_malad.jpg'
  },
  // 5. KES BK Shroff & MH Shroff College (Kandivali)
  {
    match: /KANDIVLI EDUCATION SOCIETY|B\s?K\s?SHROFF|M\s?H\s?SHROFF/i,
    img: '/images/campuses/kes_shroff_kandivali.jpg'
  },
  // 6. Kohinoor Management School & Kohinoor Business School (Kurla)
  {
    match: /KOHINOOR/i,
    img: '/images/campuses/kohinoor_kurla.jpg'
  },
  // 7. GNIMS Business School & Guru Nanak Institutions (Matunga)
  {
    match: /GNIMS|GURU NANAK INSTITUTE OF MANAGEMENT|GURU NANAK KHALSA/i,
    img: '/images/campuses/gnims_matunga.png'
  },
  // 8. All Chetana's Institutions (Bandra)
  {
    match: /CHETANA/i,
    img: '/images/campuses/chetana_bandra.jpg'
  },
  // 9. All Atharva Institutions (Malad)
  {
    match: /ATHARVA/i,
    img: '/images/campuses/atharva_complex_malad.jpg'
  },
  // 10. PIBM Pune
  {
    match: /PUNE INSTITUTE OF BUSINESS MANAGEMENT|PIBM/i,
    img: '/images/campuses/pibm_pune.webp'
  },
  // 11. SVIMS Wadala
  {
    match: /SVIMS/i,
    img: '/images/campuses/svims_wadala_mumbai.jpeg'
  },
  // 12. Valia Andheri
  {
    match: /VALIA/i,
    img: '/images/campuses/valia_andheri.jpeg'
  },
  // 13. Bunts Sangha Mumbai
  {
    match: /BUNTS SANGHA/i,
    img: '/images/campuses/bunts_sangha_mumbai.jpeg'
  },
  // 14. Saraswati Kharghar
  {
    match: /SARASWATI COLLEGE OF ENGINEERING/i,
    img: '/images/campuses/saraswati_kharghar.webp'
  },
  // 15. Smt Maniben MP Shah Matunga
  {
    match: /SMT\.?\s?MANIBEN M\.?P\.?\s?SHAH/i,
    img: '/images/campuses/maniben_mp_shah_matunga.jpg'
  },
  // 16. Sheila Raheja Bandra
  {
    match: /SHEILA RAHEJA/i,
    img: '/images/campuses/sheila_raheja_bandra.webp'
  },
  // 17. SVKM UPG / SVKM NMIMS Mumbai
  {
    match: /USHA PRAVIN GANDHI|SVKM|SHRI VILE PARLE KELAVANI MANDAL/i,
    img: '/images/campuses/svkm_upg_vileparle.jpg'
  },
  // 18. Bharati Vidyapeeth Belapur / Navi Mumbai
  {
    match: /BHARATI VIDYAPEETH.*(DEPARTMENT OF MANAG|MANAGEMENT STUDIES.*OFF CAMPUS|NAVI MUMBAI|BELAPUR|KHARGHAR)/i,
    img: '/images/campuses/bharati_vidyapeeth_navimumbai.jpg'
  },
  // 19. Sir JJ School of Art & Applied Art
  {
    match: /SIR J\.?\s?J\.?/i,
    img: '/images/campuses/sir_jj_art_mumbai.jpg'
  },
  // 20. Alkesh Dinesh Mody Kalina
  {
    match: /ALKESH DINESH MODY/i,
    img: '/images/campuses/alkesh_dinesh_mody_mumbai.jpg'
  }
];

let matchCount = 0;
colleges.forEach(c => {
  for (const rule of EXACT_RULES) {
    if (rule.match.test(c.name)) {
      c.img = rule.img;
      c.image = rule.img;
      matchCount++;
      break;
    }
  }
});

if (isArray) {
  fs.writeFileSync(siteDataPath, JSON.stringify(colleges, null, 2), 'utf8');
} else {
  rawData.colleges = colleges;
  fs.writeFileSync(siteDataPath, JSON.stringify(rawData, null, 2), 'utf8');
}

console.log(`✅ Successfully updated ${matchCount} matching colleges in public/siteData.json!`);
