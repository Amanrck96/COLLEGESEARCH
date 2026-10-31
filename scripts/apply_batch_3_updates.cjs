const fs = require('fs');
const path = require('path');

const SITE_DATA_PATH = path.join(__dirname, '..', 'public', 'siteData.json');

console.log('Loading siteData.json...');
const data = JSON.parse(fs.readFileSync(SITE_DATA_PATH, 'utf8'));
const isWrapped = Array.isArray(data.colleges);
const colleges = isWrapped ? data.colleges : data;

console.log(`Loaded ${colleges.length} colleges.`);

let modifiedCount = 0;

colleges.forEach(col => {
  if (col.id === 247) {
    col.website = 'https://www.fuelbschool.com/';
    col.address = 'Sector A4, Forest Trails Township, Matalwadi Road, Bhugaon, Paud Road, Pune - 412115, Maharashtra';
    col.phone = '+91-7709005498 / +91-8600035498';
    col.email = 'admissions@fuelbschool.com';
    col.affiliation = 'Approved by AICTE, Ministry of Education, Govt. of India';
    col.img = '/images/campuses/campus_architecture_8.jpg';
    col.image = '/images/campuses/campus_architecture_8.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 247: FUEL Business School');
  }

  else if (col.id === 251) {
    col.type = 'Government Supported / Deemed-to-be-University';
    col.ownership = 'Deemed University (Govt. Supported)';
    col.address = 'Mehrauli - Badarpur Road, Hamdard Nagar, New Delhi - 110062, India';
    col.phone = '011-26059688';
    col.email = 'counselling@jamiahamdard.ac.in';
    col.img = '/images/campuses/campus_architecture_9.jpg';
    col.image = '/images/campuses/campus_architecture_9.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 251: Jamia Hamdard');
  }

  else if (col.id === 306) {
    col.website = 'https://mabs.ac.in';
    col.address = 'Maharaja Agrasen Chowk, Sector 22, Rohini, Delhi - 110086';
    col.phone = '+91-9311924828';
    col.email = 'admissionhead@mabs.ac.in';
    col.affiliation = 'Approved by AICTE, Ministry of Education, Govt. of India';
    col.img = '/images/campuses/campus_architecture_3.jpg';
    col.image = '/images/campuses/campus_architecture_3.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 306: Maharaja Agrasen Business School');
  }

  else if (col.id === 307) {
    col.location = 'Rohini, North West Delhi';
    col.state = 'Delhi';
    col.website = 'https://cdl.tecnia.in';
    col.address = 'Institutional Area, Madhuban Chowk, Sector 14, Rohini, Delhi - 110085';
    col.phone = '011-27555124';
    col.email = 'directorcdl@tecnia.in';
    col.affiliation = 'Approved by AICTE & UGC-DEB';
    col.img = '/images/campuses/campus_architecture_6.jpg';
    col.image = '/images/campuses/campus_architecture_6.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 307: Tecnia Institute CDL (Geographic Defect Resolved)');
  }

  else if (col.id === 308) {
    col.website = 'https://www.ndiit.org';
    col.address = '105, Mor Pocket, Nehru Place Road, Kalkaji, New Delhi - 110019';
    col.phone = '+91-9810479477';
    col.email = 'admissions@ndiit.org';
    col.affiliation = 'Approved by AICTE, Ministry of Education, Govt. of India';
    col.img = '/images/campuses/campus_architecture_4.jpg';
    col.image = '/images/campuses/campus_architecture_4.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 308: NDIIT Delhi');
  }

  else if (col.id === 311) {
    col.website = 'https://gnim.ac.in';
    col.address = 'Road No. 75, West Punjabi Bagh, New Delhi - 110026';
    col.phone = '+91-9654537084';
    col.email = 'admission.gnim@gmail.com';
    col.affiliation = 'Guru Gobind Singh Indraprastha University (GGSIPU) & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_6.jpg';
    col.image = '/images/campuses/campus_architecture_6.jpg';
    if (Array.isArray(col.courses)) {
      col.courses.forEach(c => {
        if (/mca|master.*computer/i.test(c.title || '')) {
          c.duration = '2 Years';
        }
      });
    }
    modifiedCount++;
    console.log('✓ Updated ID 311: Guru Nanak Institute of Management (MCA 2 Years Corrected)');
  }

  else if (col.id === 314) {
    col.website = 'https://ssimdelhi.org';
    col.address = 'Plot No. 2, Sector 8, Near Dwarka Sector 9 Metro Station, Dwarka, New Delhi - 110075';
    col.phone = '+91-9910339814';
    col.email = 'ssimgt@gmail.com';
    col.affiliation = 'Approved by AICTE, Ministry of Education, Govt. of India';
    col.img = '/images/campuses/campus_architecture_1.jpg';
    col.image = '/images/campuses/campus_architecture_1.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 314: Sri Sukhmani Institute of Management');
  }

  else if (col.id === 315) {
    col.website = 'https://www.apeejay.edu/aimc';
    col.address = 'Institutional Area, Sector 8, Dwarka, New Delhi - 110075';
    col.phone = '+91-9910-222-777';
    col.email = 'aimc.del@apj.edu';
    col.affiliation = 'Approved by AICTE & Accredited by NBA';
    col.img = '/images/campuses/campus_architecture_2.jpg';
    col.image = '/images/campuses/campus_architecture_2.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 315: Apeejay Institute of Mass Communication');
  }

  else if (col.id === 316) {
    col.type = 'Public/Government (State University)';
    col.ownership = 'Government';
    col.website = 'https://dpsru.edu.in';
    col.address = 'Mehrauli - Badarpur Road, Pusp Vihar, Sector 3, New Delhi - 110017';
    col.phone = '011-29552055';
    col.email = 'admissions@dpsru.edu.in';
    col.affiliation = 'State University under Govt of NCT of Delhi, Approved by UGC & PCI';
    col.img = '/images/campuses/campus_architecture_5.jpg';
    col.image = '/images/campuses/campus_architecture_5.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 316: DPSRU (Public State University Restored)');
  }

  else if (col.id === 321) {
    col.name = 'Indian Institute of Foreign Trade (IIFT), New Delhi';
    col.type = 'Public/Government (Autonomous Institution / Deemed University)';
    col.ownership = 'Government';
    col.website = 'https://www.iift.ac.in';
    col.address = 'IIFT Bhawan, B-21, Qutab Institutional Area, New Delhi - 110016, India';
    col.phone = '+91-11-39147200';
    col.email = 'registrar@iift.ac.in';
    col.affiliation = 'Autonomous Institution under Ministry of Commerce, Govt of India; AACSB & NAAC A+ Accredited';
    col.img = '/images/campuses/campus_architecture_7.jpg';
    col.image = '/images/campuses/campus_architecture_7.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 321: IIFT New Delhi (Public Apex Status Restored)');
  }
});

console.log(`Writing verified Batch 3 updates back to ${SITE_DATA_PATH}...`);
fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(data, null, 2), 'utf8');
console.log(`Successfully updated ${modifiedCount} colleges in siteData.json!`);

