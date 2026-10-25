const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));

// Exact verified pairings of college names to authentic campus photos
const EXACT_CAMPUS_MAP = [
  { match: 'bits pilani', file: '/images/campuses/campus_bits_pilani.jpg' },
  { match: 'nit surathkal', file: '/images/campuses/campus_nit_surathkal.jpg' },
  { match: 'national institute of technology karnataka', file: '/images/campuses/campus_nit_surathkal.jpg' },
  { match: 'iit bombay', file: '/images/campuses/iit_bombay_powai.jpg' },
  { match: 'indian institute of technology bombay', file: '/images/campuses/iit_bombay_powai.jpg' },
  { match: 'iit delhi', file: '/images/campuses/campus_iit_delhi.jpg' },
  { match: 'indian institute of technology delhi', file: '/images/campuses/campus_iit_delhi.jpg' },
  { match: 'iit patna', file: '/images/campuses/campus_iit_patna.png' },
  { match: 'indian institute of technology patna', file: '/images/campuses/campus_iit_patna.png' },
  { match: 'aligarh muslim university', file: '/images/campuses/campus_aligarh_muslim_university.jpg' },
  { match: 'iim bangalore', file: '/images/campuses/iim_bangalore.jpg' },
  { match: 'indian institute of management bangalore', file: '/images/campuses/iim_bangalore.jpg' },
  { match: 'iiit bangalore', file: '/images/campuses/iiit_bangalore_campus.jpg' },
  { match: 'bms college of engineering', file: '/images/campuses/bms_bangalore.jpg' },
  { match: 'pes university', file: '/images/campuses/pes_bangalore.jpg' },
  { match: 'ramaiah institute of technology', file: '/images/campuses/ramaiah_bangalore.jpg' },
  { match: 'coep', file: '/images/campuses/campus_coep_pune.png' },
  { match: 'college of engineering pune', file: '/images/campuses/campus_coep_pune.png' },
  { match: 'vjti', file: '/images/campuses/vjti_mumbai.jpg' },
  { match: 'veermata jijabai', file: '/images/campuses/vjti_mumbai.jpg' },
  { match: 'st. xavier', file: '/images/campuses/campus_st_xaviers_mumbai.jpg' },
  { match: 'st xavier', file: '/images/campuses/campus_st_xaviers_mumbai.jpg' },
  { match: 'vnit nagpur', file: '/images/campuses/campus_vnit_nagpur.jpeg' },
  { match: 'visvesvaraya national institute of technology', file: '/images/campuses/campus_vnit_nagpur.jpeg' },
  { match: 'bangalore university', file: '/images/campuses/bangalore_university.jpg' },
  { match: 'osmania university', file: '/images/campuses/campus_osmania_university.jpg' },
  { match: 'spdt', file: '/images/campuses/spdt_tibrewala_andheri.jpg' },
  { match: 'thakur college', file: '/images/campuses/thakur_complex_kandivali.webp' },
  { match: 'welingkar', file: '/images/campuses/weschool_matunga_mumbai.jpeg' },
  { match: 'weschool', file: '/images/campuses/weschool_matunga_mumbai.jpeg' },
  { match: 'chetana', file: '/images/campuses/chetana_bandra.jpg' },
  { match: 'kes shroff', file: '/images/campuses/kes_shroff_kandivali.jpg' },
  { match: 'atharva college', file: '/images/campuses/atharva_complex_malad.jpg' },
  { match: 'nagindas khandwala', file: '/images/campuses/nagindas_khandwala_malad.jpg' },
  { match: 'bharati vidyapeeth navi mumbai', file: '/images/campuses/bharati_vidyapeeth_navimumbai.jpg' },
  { match: 'bunts sangha', file: '/images/campuses/bunts_sangha_mumbai.jpeg' },
  { match: 'pibm pune', file: '/images/campuses/pibm_pune.webp' },
  { match: 'riim pune', file: '/images/campuses/riim_pune.jpeg' },
  { match: 'rathinam', file: '/images/campuses/rathinam_campus.jpg' },
  { match: 'srinivasan college', file: '/images/campuses/srinivasan_perambalur.jpg' }
];

let updatedCount = 0;
siteData.colleges.forEach(c => {
  const cName = (c.name || '').toLowerCase();
  for (const pair of EXACT_CAMPUS_MAP) {
    if (cName.includes(pair.match)) {
      if (c.img !== pair.file) {
        c.img = pair.file;
        updatedCount++;
      }
      break;
    }
  }
});

console.log(`Updated ${updatedCount} colleges to their exact authentic verified campus image.`);
fs.writeFileSync(siteDataPath, JSON.stringify(siteData, null, 2), 'utf8');
console.log('Saved siteData.json successfully.');
