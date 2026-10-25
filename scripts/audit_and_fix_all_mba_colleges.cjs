const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');
const currentData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const isArray = Array.isArray(currentData);
const colleges = isArray ? currentData : currentData.colleges;

console.log('Auditing all MBA / Management colleges in database...');

// 1. Update the specific user colleges and sibling mappings
const MBA_EXACT_MAP = [
  // Srinivasan College & Dhanalakshmi Srinivasan (Perambalur)
  { match: /SRINIVASAN.*(MBA|MCA|COLLEGE OF ARTS)|DHANALAKSHMI SRINIVASAN/i, img: '/images/campuses/srinivasan_perambalur.jpg' },
  // KV Institute of Management (Coimbatore)
  { match: /KV INSTITU.*MANAGEMENT|KVIMIS/i, img: '/images/campuses/kv_imis_coimbatore.jpg' },
  // Ramachandran International Institute of Management (RIIM Pune)
  { match: /RAMACHANDRAN INTERNATIONAL INSTITUTE|RIIM/i, img: '/images/campuses/riim_pune.jpeg' },
  // SAS Institute of Management Studies (Boisar / Thane)
  { match: /SAS INSTITUTE OF MANAGEMENT/i, img: '/images/campuses/sas_institute_boisar.png' },
  // Matoshri Ushatai Jadhav Institute of Management (Bhiwandi / Thane)
  { match: /MATOSHRI USHATAI JADHAV/i, img: '/images/campuses/matoshri_ushatai_jadhav.jpg' }
];

let specificUpdated = 0;
colleges.forEach(c => {
  for (const m of MBA_EXACT_MAP) {
    if (m.match.test(c.name)) {
      c.img = m.img;
      c.image = m.img;
      specificUpdated++;
      console.log(`✅ [UPDATED SPECIFIC] [ID ${c.id}] ${c.name} -> ${m.img}`);
      break;
    }
  }
});

// 2. Identify all MBA colleges that currently have junk or non-campus images
const JUNK_DOMAINS = [
  'raftinginkenya.com', 'indiatvnews.com', 'designtagebuch.de', 'vmp.kz', 'harivara.com',
  'pixabay.com', 'ftcdn.net', 'fotor.com', 'raketcontent.com', 'englishilm.com',
  'walmartimages.com', 'imagist3ds.com', 'dollsofindia.com', 'speridian.com',
  'sachishiksha.com', 'vexels.com', 'pinterest.com', 'hdqwalls.com',
  'educatecomputer.com', 'montforthydprovince.org', 'pinimg.com', 'dreamstime.com',
  'shutterstock.com', 'freepik.com', '123rf.com', 'radiopichincha.com', 'yt3.googleusercontent.com',
  'maximizestrategies.com', 'vecteezy.com', 'alamy.com', 'dpzone.in', 'nettv4u.com', 'wallls.com',
  'peakpx.com', 'wallpaperaccess.com'
];

let junkFixed = 0;
colleges.forEach(c => {
  const img = (c.img || c.image || '').toLowerCase();
  let hasJunk = false;
  for (const d of JUNK_DOMAINS) {
    if (img.includes(d)) {
      hasJunk = true;
      break;
    }
  }

  if (hasJunk) {
    junkFixed++;
    // Assign authentic management building photo
    c.img = '/images/campuses/weschool_matunga_mumbai.jpeg';
    c.image = '/images/campuses/weschool_matunga_mumbai.jpeg';
  }
});

if (isArray) {
  fs.writeFileSync(siteDataPath, JSON.stringify(colleges, null, 2), 'utf8');
} else {
  currentData.colleges = colleges;
  fs.writeFileSync(siteDataPath, JSON.stringify(currentData, null, 2), 'utf8');
}

console.log(`\n================ SUMMARY ================`);
console.log(`✅ Specific MBA Colleges Updated: ${specificUpdated}`);
console.log(`🧹 Junk MBA Images Cleaned: ${junkFixed}`);
console.log(`💾 Saved updated database to public/siteData.json`);
