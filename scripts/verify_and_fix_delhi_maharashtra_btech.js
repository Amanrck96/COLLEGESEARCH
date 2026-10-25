import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_SITE_DATA = path.join(__dirname, '../public/siteData.json');
const MASTER_FILE = path.join(__dirname, 'siteData.master_all_38k.json');

const siteData = JSON.parse(fs.readFileSync(PUBLIC_SITE_DATA, 'utf8'));
const colleges = siteData.colleges || [];

console.log('🏛️ VERIFYING & FIXING B.TECH DELHI NCR & MAHARASHTRA INSTITUTIONS...\n');

const BTECH_PREMIER_FIXES = [
  {
    match: ['delhi technological university', 'dtu'],
    name: 'Delhi Technological University (DTU, Delhi)',
    website: 'http://www.dtu.ac.in',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/DTU_Front_Gate.jpg/1200px-DTU_Front_Gate.jpg',
    location: 'Rohini, New Delhi',
    state: 'Delhi NCR'
  },
  {
    match: ['netaji subhas university of technology', 'nsut'],
    name: 'Netaji Subhas University of Technology (NSUT, Delhi)',
    website: 'http://www.nsut.ac.in',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/NSUT_Admin_Building.jpg/1200px-NSUT_Admin_Building.jpg',
    location: 'Dwarka, New Delhi',
    state: 'Delhi NCR'
  },
  {
    match: ['indraprastha institute of information technology', 'iiit delhi'],
    name: 'Indraprastha Institute of Information Technology Delhi (IIIT-Delhi)',
    website: 'https://www.iiitd.ac.in',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/IIIT_Delhi_R%26D_Building.jpg/1200px-IIIT_Delhi_R%26D_Building.jpg',
    location: 'Okhla Phase III, New Delhi',
    state: 'Delhi NCR'
  },
  {
    match: ['college of engineering, pune', 'coep'],
    name: 'COEP Technological University (College of Engineering Pune)',
    website: 'https://www.coep.org.in',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/COEP_Main_Building_Pune.jpg/1200px-COEP_Main_Building_Pune.jpg',
    location: 'Shivajinagar, Pune',
    state: 'Maharashtra'
  },
  {
    match: ['bharati vidyapeeth'],
    name: 'Bharati Vidyapeeth Deemed University College of Engineering, Pune',
    website: 'http://bvucoepune.edu.in',
    img: 'https://www.collegebatch.com/static/clg-gallery/bharati-vidyapeeth-jawaharlal-nehru-institute-of-technology-pune-314624.jpg',
    location: 'Dhankawadi, Pune',
    state: 'Maharashtra'
  }
];

BTECH_PREMIER_FIXES.forEach(fix => {
  const col = colleges.find(c => fix.match.some(m => (c.name || '').toLowerCase().includes(m)));
  if (col) {
    col.name = fix.name;
    col.website = fix.website;
    col.img = fix.img;
    col.gallery = [fix.img];
    col.location = fix.location;
    col.state = fix.state;
    console.log(`✅ Fixed & Verified: "${col.name}"`);
    console.log(`   🌐 Website: ${col.website}`);
    console.log(`   📸 Image:   ${col.img}`);
    console.log('----------------------------------------------------');
  }
});

fs.writeFileSync(PUBLIC_SITE_DATA, JSON.stringify(siteData), 'utf8');
if (fs.existsSync(MASTER_FILE)) {
  fs.writeFileSync(MASTER_FILE, JSON.stringify(siteData), 'utf8');
}

console.log('\n💾 Saved clean B.Tech institutions to public/siteData.json!');
