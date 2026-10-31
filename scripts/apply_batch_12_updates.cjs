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
  if (col.id === 906) {
    col.name = 'Vinayak Institute of Management (VIPM), Kachwa, Karnal';
    col.website = 'https://www.vipmknl.com';
    col.address = 'VPO Kachwa, Main Patiala Road, Karnal - 132001, Haryana, India';
    col.phone = '+91-9215060456';
    col.email = 'vcpknl@gmail.com';
    col.affiliation = 'Kurukshetra University (KUK) & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_8.jpg';
    col.image = '/images/campuses/campus_architecture_8.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 906: VIPM Karnal (Fixed Google search URL & collegedekho hotlink)');
  }

  else if (col.id === 985) {
    col.name = 'Xavier Institute of Management and Informatics (XIMI), Jaipur';
    col.website = 'https://ximi.ac.in';
    col.address = 'Nevta-Mahapura Road, Nevta, Jaipur - 302029, Rajasthan, India';
    col.phone = '+91 73000 72736 / +91 73000 42736';
    col.email = 'admission.mba@ximi.ac.in';
    col.affiliation = 'Rajasthan Technical University (RTU), Kota & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_5.jpg';
    col.image = '/images/campuses/campus_architecture_5.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 985: XIMI Jaipur');
  }

  else if (col.id === 995) {
    col.name = 'Poddar Business School, Sitapura, Jaipur';
    col.website = 'https://www.poddarbschool.com';
    col.address = 'Plot No. IS-2017, Ramchandrapura Industrial Area, Sitapura Extension, Jaipur - 302022, Rajasthan, India';
    col.phone = '+91-8905995970 / +91-9116038880';
    col.email = 'admissions@poddarbschool.com';
    col.affiliation = 'Rajasthan Technical University (RTU), Kota & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_5.jpg';
    col.image = '/images/campuses/campus_architecture_5.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 995: Poddar Business School Jaipur');
  }

  else if (col.id === 1039) {
    col.name = 'Taxila Business School, Mansarovar, Jaipur';
    col.website = 'https://taxila.in';
    col.address = 'Sector 9, Mandir Marg, Patel Marg, Mansarovar, Jaipur - 302020, Rajasthan, India';
    col.phone = '+91 8404040404';
    col.email = 'info@taxila.in';
    col.affiliation = 'Approved by AICTE, Ministry of Education, Govt of India';
    col.img = '/images/campuses/campus_architecture_6.jpg';
    col.image = '/images/campuses/campus_architecture_6.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 1039: Taxila Business School Jaipur (Removed GNIMS Matunga Mumbai photo)');
  }

  else if (col.id === 1051) {
    col.name = 'Shankara International School of Management & Research (SISMR), Kukas, Jaipur';
    col.website = 'https://shankaragroup.org';
    col.address = 'SP-41-C, RIICO Industrial Area, Kukas, Delhi-Jaipur Highway (NH-8), Jaipur - 302028, Rajasthan, India';
    col.phone = '+91-9829269277 / 1800-300-20-177';
    col.email = 'info@shankaratechnology.org';
    col.affiliation = 'Rajasthan Technical University (RTU), Kota & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_7.jpg';
    col.image = '/images/campuses/campus_architecture_7.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 1051: SISMR Kukas Jaipur (Removed Bangalore University photo)');
  }

  else if (col.id === 1060) {
    col.name = 'Chaudhary Charan Singh National Institute of Agricultural Marketing (CCS NIAM), Jaipur';
    col.type = 'Public/Government (Autonomous Central Government Institute)';
    col.ownership = 'Government';
    col.website = 'https://ccsniam.gov.in';
    col.address = 'Kota Road, Bambala, Pratap Nagar, Sanganer, Jaipur - 302033, Rajasthan, India';
    col.phone = '0141-2770027 / 0141-2771938';
    col.email = 'info@ccsniam.ac.in';
    col.affiliation = 'Ministry of Agriculture & Farmers Welfare, Govt of India & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_8.jpg';
    col.image = '/images/campuses/campus_architecture_8.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 1060: CCS NIAM Jaipur (Restored Central Govt Institute status & removed blocked collegedunia hotlink)');
  }

  else if (col.id === 1093) {
    col.name = 'Champaran College of Professional Education (CCPE), Ghorasahan';
    col.website = 'https://ccpeus.com';
    col.address = 'Purnahiya, Ghorasahan, Dhaka, East Champaran - 845303, Bihar, India';
    col.phone = '+91-9115557000 / +91-8292913129';
    col.email = 'collegeccpe@gmail.com';
    col.affiliation = 'Aryabhatta Knowledge University (AKU), Patna & Approved by AICTE, PCI';
    col.img = '/images/campuses/campus_architecture_1.jpg';
    col.image = '/images/campuses/campus_architecture_1.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 1093: CCPE East Champaran (Removed CU Shah Mumbai photo)');
  }

  else if (col.id === 1100) {
    col.name = 'Rungta Institute of Technology and Management (RITM), Forbesganj';
    col.website = 'https://www.ritm.ac.in';
    col.address = 'Near Block Office, Forbesganj, Araria District - 854318, Bihar, India';
    col.phone = '+91-8539984499 / 06455-222006';
    col.email = 'admissions@ritm.ac.in';
    col.affiliation = 'Bihar Engineering University (BEU), Patna & SBTE Bihar, Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_2.jpg';
    col.image = '/images/campuses/campus_architecture_2.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 1100: RITM Forbesganj (Removed CU Shah Mumbai photo)');
  }

  else if (col.id === 1125) {
    col.name = 'Mamta Institute of Education (MIE), Daraundha, Siwan';
    col.website = 'https://mieedu.in';
    col.address = 'Chintamanpur, Daraundha, Siwan - 841404, Bihar, India';
    col.phone = '+91-8102916973 / +91-9386806864';
    col.email = 'aihepatna@gmail.com';
    col.affiliation = 'Aryabhatta Knowledge University (AKU) / SBTE Bihar & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_3.jpg';
    col.image = '/images/campuses/campus_architecture_3.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 1125: MIE Siwan (Removed collegedunia hotlink)');
  }

  else if (col.id === 1128) {
    col.name = 'Institute of Management and Planning and Advanced Computer Training (IMPACT College), Patna';
    col.website = 'https://www.impactcollege.edu.in';
    col.address = 'Gaurichak, Sampatchak / Shyam Arcade, Bailey Road, Patna - 800007, Bihar, India';
    col.phone = '+91-9570383838 / +91-7280043230';
    col.email = 'info@impactcollege.in';
    col.affiliation = 'Aryabhatta Knowledge University (AKU), Patna & Approved by AICTE, Govt of Bihar';
    col.img = '/images/campuses/campus_architecture_4.jpg';
    col.image = '/images/campuses/campus_architecture_4.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 1128: IMPACT College Patna (Removed studyclap hotlink)');
  }
});

console.log(`\nModified ${modifiedCount} colleges in Batch 12.`);
const outputData = isWrapped ? { ...data, colleges } : colleges;
fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(outputData, null, 2), 'utf8');
console.log('Successfully wrote updates to public/siteData.json');

