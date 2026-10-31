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
  if (col.id === 78) {
    col.name = 'Department of Business Administration, Mangalore University';
    col.type = 'Public/Government (State University Department)';
    col.ownership = 'Government';
    col.website = 'https://mangaloreuniversity.ac.in';
    col.address = 'Mangalagangotri - 574199, Konaje, Mangalore, Dakshina Kannada, Karnataka';
    col.phone = '0824-2287209';
    col.email = 'businessadministration@mangaloreuniversity.ac.in';
    col.affiliation = 'Mangalore University & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_1.jpg';
    col.image = '/images/campuses/campus_architecture_1.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 78: Dept of Business Admin, Mangalore Univ');
  }

  else if (col.id === 155) {
    col.website = 'https://www.pibm.in';
    col.address = 'Gut No. 605/1, Mukaiwadi Road, Pirangut, Tal - Mulshi, Pune - 412115, Maharashtra';
    col.phone = '+91-9175656222';
    col.email = 'admission@pibm.in';
    col.affiliation = 'Savitribai Phule Pune University (SPPU) & Approved by AICTE, NBA & NAAC';
    col.img = '/images/campuses/pibm_pune.webp';
    col.image = '/images/campuses/pibm_pune.webp';
    modifiedCount++;
    console.log('✓ Updated ID 155: PIBM Pune');
  }

  else if (col.id === 168) {
    col.name = 'School of Management Studies, KBC North Maharashtra University';
    col.type = 'Public/Government (State University Department)';
    col.ownership = 'Government';
    col.website = 'https://www.nmu.ac.in';
    col.address = 'P.O. Box No. 80, Umavi Nagar, KBC North Maharashtra University, Jalgaon - 425001, Maharashtra';
    col.phone = '0257-2257463';
    col.email = 'somgt@nmu.ac.in';
    col.img = '/images/campuses/campus_architecture_2.jpg';
    col.image = '/images/campuses/campus_architecture_2.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 168: School of Mgmt Studies, KBCNMU Jalgaon');
  }

  else if (col.id === 171) {
    col.name = 'University Institute of Technology (UIT), Gondwana University';
    col.type = 'Public/Government (Conducted University Institute)';
    col.ownership = 'Government';
    col.website = 'https://uitgug.ac.in';
    col.address = 'MIDC Road, Complex, Adpalli, Gadchiroli - 442605, Maharashtra';
    col.phone = '07132-223106';
    col.affiliation = 'Gondwana University, Gadchiroli & Approved by AICTE, DTE Code 4022';
    col.img = '/images/campuses/campus_architecture_5.jpg';
    col.image = '/images/campuses/campus_architecture_5.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 171: UIT Gondwana University');
  }

  else if (col.id === 179) {
    col.name = "Shri Shivaji Maratha Society's Institute of Management & Research (SSMS IMR)";
    col.website = 'https://www.ssmsimr.edu.in';
    col.address = 'Survey No. 74/1A, 74/1B, Parvati, Aranyeshwar, Pune - 411009, Maharashtra';
    col.phone = '020-24222612';
    col.email = 'ssms.imr@gmail.com';
    col.affiliation = 'Savitribai Phule Pune University (SPPU) & Approved by AICTE, DTE Code 6116';
    col.img = '/images/campuses/campus_architecture_7.jpg';
    col.image = '/images/campuses/campus_architecture_7.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 179: SSMS IMR Pune');
  }

  else if (col.id === 237) {
    col.name = 'Global Institute of Management (GIOM), Sangamner';
    col.website = 'https://giom.edu.in';
    col.address = 'Sr. No. 132/1, Pune-Nashik Highway, Velhale, Taluka Sangamner, Dist. Ahmednagar - 422605, Maharashtra';
    col.phone = '+91-8698925530';
    col.email = 'globalsangamner@gmail.com';
    col.affiliation = 'Savitribai Phule Pune University (SPPU) & Approved by AICTE, DTE Code 5384';
    col.img = '/images/campuses/campus_architecture_4.jpg';
    col.image = '/images/campuses/campus_architecture_4.jpg';
    if (col.imageUrl) delete col.imageUrl;
    modifiedCount++;
    console.log('✓ Updated ID 237: GIOM Sangamner');
  }

  else if (col.id === 245) {
    col.name = 'Dr. D. Y. Patil Technical Campus, Talegaon, Pune';
    col.website = 'https://www.dypatiltcs.com';
    col.address = 'Sr. No. 32/1/A/7, Near Talegaon Railway Station, A/P Varale, Talegaon Dabhade, Pune - 410507, Maharashtra';
    col.phone = '+91-7666829653';
    col.email = 'info@dypatiltcs.com';
    col.affiliation = 'Savitribai Phule Pune University (SPPU) & Approved by AICTE, DTE Code 6780';
    col.img = '/images/campuses/campus_architecture_7.jpg';
    col.image = '/images/campuses/campus_architecture_7.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 245: Dr. D. Y. Patil Technical Campus');
  }

  else if (col.id === 273) {
    col.ownership = 'Government';
    col.type = 'Public/Government State University';
    col.phone = '011-27871018';
    col.email = 'academic@dtu.ac.in';
    col.isDuplicate = true;
    col.canonicalId = 12660;
    col.duplicateOf = 12660;
    col.img = '/images/campuses/delhi_technological_university.jpg';
    col.image = '/images/campuses/delhi_technological_university.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 273: DTU Delhi (Duplicate Linked to ID 12660)');
  }

  else if (col.id === 13) {
    col.address = 'Main Gate Road, IIT Area, Powai, Mumbai - 400076, Maharashtra, India';
    col.phone = '+91-22-2572 2545';
    col.email = 'pro@iitb.ac.in';
    col.affiliation = 'Autonomous Institute of National Importance (Institutes of Technology Act)';
    col.img = '/images/campuses/iit_bombay_powai.jpg';
    col.image = '/images/campuses/iit_bombay_powai.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 13: IIT Bombay');
  }

  else if (col.id === 15) {
    col.address = 'Bannerghatta Main Road, Bilekahalli, Bengaluru - 560076, Karnataka, India';
    col.phone = '+91-80-2699 3000';
    col.email = 'info@iimb.ac.in';
    col.affiliation = 'Autonomous Institute of National Importance (IIM Act 2017)';
    col.img = '/images/campuses/iim_bangalore.jpg';
    col.image = '/images/campuses/iim_bangalore.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 15: IIM Bangalore');
  }
});

console.log(`Writing verified Batch 2 updates back to ${SITE_DATA_PATH}...`);
fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(data, null, 2), 'utf8');
console.log(`Successfully updated ${modifiedCount} colleges in siteData.json!`);

