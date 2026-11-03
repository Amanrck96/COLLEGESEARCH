const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const colleges = Array.isArray(siteData) ? siteData : (siteData.colleges || []);

const FLAGSHIP_MAPPINGS = [
  {
    nameMatch: 'XLRI',
    shortName: 'XLRI Jamshedpur',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Xlri_Campus%2C_Jamshedpur.jpg/1200px-Xlri_Campus%2C_Jamshedpur.jpg'
  },
  {
    nameMatch: 'National Institute of Technology Tiruchirappalli',
    shortName: 'NIT Trichy',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/National_Institute_of_Technology%2C_Trichy.jpg/1200px-National_Institute_of_Technology%2C_Trichy.jpg'
  },
  {
    nameMatch: 'Indian Institute of Management Lucknow',
    shortName: 'IIM Lucknow',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/IIM_Lucknow_Campus.jpg/1200px-IIM_Lucknow_Campus.jpg'
  },
  {
    nameMatch: 'National Law University Delhi',
    shortName: 'NLU Delhi',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/NLU_Delhi_Campus.jpg/1200px-NLU_Delhi_Campus.jpg'
  },
  {
    nameMatch: 'All India Institute of Medical Sciences Jodhpur',
    shortName: 'AIIMS Jodhpur',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/AIIMS_Jodhpur_Main_Building.jpg/1200px-AIIMS_Jodhpur_Main_Building.jpg'
  },
  {
    nameMatch: 'Andaman & Nicobar Islands Institute of Medical Sciences',
    shortName: 'ANIIMS Port Blair',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Grant_Medical_College_JJ_Hospital.jpg/1200px-Grant_Medical_College_JJ_Hospital.jpg'
  },
  {
    nameMatch: 'Dr. B.R. Ambedkar Institute of Technology',
    shortName: 'DBRAIT Port Blair',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/NIT_Trichy_Admin_Block.jpg/1200px-NIT_Trichy_Admin_Block.jpg'
  },
  {
    nameMatch: 'Jawaharlal Nehru Rajkeeya Mahavidyalaya',
    shortName: 'JNRM Port Blair',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/St._Stephen%27s_College%2C_Delhi_campus.jpg/1200px-St._Stephen%27s_College%2C_Delhi_campus.jpg'
  }
];

let updatedCount = 0;
FLAGSHIP_MAPPINGS.forEach(m => {
  const match = colleges.find(c => (c.name || '').toLowerCase().includes(m.nameMatch.toLowerCase()));
  if (match) {
    match.shortName = m.shortName;
    match.img = m.img;
    match.image = m.img;
    updatedCount++;
    console.log(`✓ Mapped flagship [ID ${match.id}] ${match.name} -> ${m.shortName}`);
  }
});

siteData.colleges = colleges;
siteData.lastUpdated = new Date().toISOString();
fs.writeFileSync(siteDataPath, JSON.stringify(siteData, null, 2), 'utf8');

console.log(`\nUpdated ${updatedCount} flagship colleges in public/siteData.json`);
