const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const rawData = fs.readFileSync(siteDataPath, 'utf8');
const data = JSON.parse(rawData);

const isArray = Array.isArray(data);
const colleges = isArray ? data : (data.colleges || []);

// 8 Specific Target Institutions mapping
const targetMap = [
  {
    // Valia School of Management, Andheri
    nameMatch: 'VALIA SCHOOL OF MANAGEMENT',
    img: '/images/campuses/valia_andheri.jpeg'
  },
  {
    // Bunts Sangha Anna Leela College, Kurla/Powai
    nameMatch: 'BUNTS SANGHA MUMBAI ANNNA LEELA',
    img: '/images/campuses/bunts_sangha_mumbai.jpeg'
  },
  {
    // PSSVMS Sailee Degree College, Borivali
    nameMatch: 'PSSVMS SAILEE DEGREE COLLEGE',
    img: '/images/campuses/sailee_college_borivali.jpg'
  },
  {
    // SVKM Usha Pravin Gandhi College, Vile Parle
    nameMatch: 'USHA PRAVIN GANDHI',
    img: '/images/campuses/svkm_upg_vileparle.jpg'
  },
  {
    // GNIMS Business School, Matunga
    nameMatch: 'GNIMS BUSINESS SCHOOL',
    img: '/images/campuses/gnims_matunga.png'
  },
  {
    // Nagindas Khandwala College, Malad
    nameMatch: 'NAGINDAS KHANDWALA COLLEGE',
    img: '/images/campuses/kes_shroff_kandivali.jpg'
  },
  {
    // Sir M Visvesvaraya Institute of Management Studies (SVIMS Wadala)
    nameMatch: 'SIR M VISVESVARAYA INSTITUTE OF MANAGEMENT',
    img: '/images/campuses/svims_wadala_mumbai.jpeg'
  },
  {
    // SVIMS Business School
    nameMatch: 'SVIMS BUSINESS SCHOOL',
    img: '/images/campuses/svims_wadala_mumbai.jpeg'
  },
  {
    // Smt Parmeshwaridevi Durgadutt Tibrewala (SPDT)
    nameMatch: 'TIBREWALA',
    img: '/images/campuses/campus_cu_shah_mumbai.png'
  }
];

let updatedCount = 0;
colleges.forEach(c => {
  const name = (c.name || '').toLowerCase();
  for (const t of targetMap) {
    if (name.includes(t.nameMatch.toLowerCase())) {
      c.image = t.img;
      c.img = t.img;
      updatedCount++;
      console.log(`✅ [UPDATED] ID ${c.id} | ${c.name} -> ${t.img}`);
      break;
    }
  }
});

console.log(`Total target colleges updated: ${updatedCount}`);

if (isArray) {
  fs.writeFileSync(siteDataPath, JSON.stringify(colleges, null, 2), 'utf8');
} else {
  data.colleges = colleges;
  fs.writeFileSync(siteDataPath, JSON.stringify(data, null, 2), 'utf8');
}

console.log('✅ siteData.json saved successfully!');
