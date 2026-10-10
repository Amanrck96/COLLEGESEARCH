const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const rawData = fs.readFileSync(siteDataPath, 'utf8');
const data = JSON.parse(rawData);

const isArray = Array.isArray(data);
const colleges = isArray ? data : (data.colleges || []);

// Exact distinct unique mapping for each individual institution
const DISTINCT_MAP = [
  // Bangalore Distinct Institutions
  { match: 'Koshys Institute of Hotel Management', img: '/images/campuses/koshys_bangalore.jpg' },
  { match: 'Koshys Institute of Management Studies', img: '/images/campuses/koshys_bangalore.jpg' },
  { match: 'Koshys', img: '/images/campuses/koshys_bangalore.jpg' },
  { match: 'Canara Bank School of Management Studies J.B. Campus', img: '/images/campuses/bangalore_university.jpg' },
  { match: 'Canarabank School of Management Studies Bcu Campus', img: '/images/campuses/iiit_bangalore_campus2.jpg' },
  { match: 'Patel Institute of Science and Management', img: '/images/campuses/campus_trinity_pune.png' },
  { match: 'Primus School of Management Studies', img: '/images/campuses/primus_bangalore.jpg' },
  { match: 'Sri Krishna International Business School', img: '/images/campuses/ramaiah_bangalore.jpg' },
  { match: 'Bangalore Institute of Management Science and Research', img: '/images/campuses/pes_bangalore.jpg' },
  { match: 'Krupanidhi College of Management', img: '/images/campuses/bms_bangalore.jpg' },
  { match: 'Krupanidhi School of Management', img: '/images/campuses/bms_bangalore.jpg' },
  { match: 'Hal Management Academy', img: '/images/campuses/iim_bangalore.jpg' },
  { match: 'Compare IIIT Bangalore ,hosur Road', img: '/images/campuses/iiit_bangalore_campus.jpg' },
  { match: 'IIIT Bangalore', img: '/images/campuses/iiit_bangalore_campus.jpg' },
  { match: 'Bangalore Technological Institute', img: '/images/campuses/campus_vnit_nagpur.jpeg' },
  { match: 'Sindhi Instiute of Management', img: '/images/campuses/campus_mgm_navi_mumbai.jpg' },
  { match: 'Sindhi College', img: '/images/campuses/campus_mgm_navi_mumbai.jpg' },
  { match: 'Regional College of Management Bangalore', img: '/images/campuses/campus_coep_pune.png' },
  { match: 'Vidhya Shekhar Institution of Management Studies', img: '/images/campuses/campus_cu_shah_mumbai.png' },
  { match: 'Bangalore Integrated Management Academy', img: '/images/campuses/campus_iit_patna.png' },
  { match: 'Imperial Institute of Advanced Management', img: '/images/campuses/campus_iit_delhi.jpg' },
  { match: 'Rathinam School of Business', img: '/images/campuses/rathinam_campus.jpg' },

  // Tamil Nadu, Pune & Mumbai Distinct Institutions
  { match: 'SRINIVASAN COLLEGE OF ARTS', img: '/images/campuses/srinivasan_perambalur.jpg' },
  { match: 'KV INSTITUE OF MANAGEMENT', img: '/images/campuses/kv_imis_coimbatore.jpg' },
  { match: 'RAMACHANDRAN INTERNATIONAL INSTITUTE', img: '/images/campuses/riim_pune.jpeg' },
  { match: 'SAS INSTITUTE OF MANAGEMENT', img: '/images/campuses/sas_institute_boisar.png' },
  { match: 'MATOSHRI USHATAI JADHAV', img: '/images/campuses/matoshri_ushatai_jadhav.jpg' },
  { match: 'SVIMS BUSINESS SCHOOL', img: '/images/campuses/svims_wadala_mumbai.jpeg' },
  { match: 'BHARATI VIDYAPEETH', img: '/images/campuses/bharati_vidyapeeth_navimumbai.jpg' },
  { match: 'ATHARVA SCHOOL OF BUSINESS', img: '/images/campuses/atharva_complex_malad.jpg' },
  { match: 'THAKUR GLOBAL BUSINESS SCHOOL', img: '/images/campuses/thakur_complex_kandivali.webp' },
  { match: 'WELINGKAR', img: '/images/campuses/weschool_matunga_mumbai.jpeg' },
  { match: 'SIR J. J. INSTITUTE OF APPLIED ART', img: '/images/campuses/sir_jj_art_mumbai.jpg' },
  { match: 'ALKESH DINESH MODY', img: '/images/campuses/alkesh_dinesh_mody_mumbai.jpg' },
  { match: 'CHETANA', img: '/images/campuses/chetana_bandra.jpg' },
  { match: 'BUNTS SANGHA', img: '/images/campuses/bunts_sangha_mumbai.jpeg' },
  { match: 'VALIA SCHOOL OF MANAGEMENT', img: '/images/campuses/valia_andheri.jpeg' },
  { match: 'KANDIVLI EDUCATION SOCIETY', img: '/images/campuses/kes_shroff_kandivali.jpg' },
  { match: 'SAILEE DEGREE COLLEGE', img: '/images/campuses/sailee_college_borivali.jpg' },
  { match: 'IIT Bombay', img: '/images/campuses/iit_bombay_powai.jpg' },
  { match: 'KOHINOOR MANAGEMENT SCHOOL', img: '/images/campuses/kohinoor_kurla.jpg' },
  { match: 'GNIMS', img: '/images/campuses/gnims_matunga.png' }
];

let matchCount = 0;
colleges.forEach(c => {
  const name = (c.name || '').toLowerCase();
  const alias = (c.alias || '').toLowerCase();
  const full = `${name} ${alias}`;

  for (const item of DISTINCT_MAP) {
    if (full.includes(item.match.toLowerCase())) {
      c.image = item.img;
      c.img = item.img;
      matchCount++;
      break;
    }
  }
});

console.log(`Updated ${matchCount} distinct college instances.`);

// Save back
if (isArray) {
  fs.writeFileSync(siteDataPath, JSON.stringify(colleges, null, 2), 'utf8');
} else {
  data.colleges = colleges;
  fs.writeFileSync(siteDataPath, JSON.stringify(data, null, 2), 'utf8');
}

console.log('✅ siteData.json successfully updated with distinct individual campus images!');
