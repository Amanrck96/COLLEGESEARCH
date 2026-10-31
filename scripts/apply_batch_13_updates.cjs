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
  if (col.id === 1137) {
    col.name = 'Magadh Professional Institute (MPI), Nasriganj, Patna';
    col.website = 'https://mpipatna.com';
    col.address = 'Nasriganj, Danapur, Patna - 800012, Bihar, India';
    col.phone = '+91 6202535382 / +91 7004336634';
    col.email = 'info@mpipatna.com';
    col.affiliation = 'Aryabhatta Knowledge University (AKU), Patna & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_1.jpg';
    col.image = '/images/campuses/campus_architecture_1.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 1137: MPI Patna (Removed collegedunia hotlink)');
  }

  else if (col.id === 1140) {
    col.name = 'Narayan Academy of Managerial Excellence (Faculty of Management Studies, GNSU), Jamuhar';
    col.website = 'https://gnsu.ac.in';
    col.address = 'Old GT Road, Village & Post Jamuhar, Dehri-on-Sone, Rohtas District - 821305, Bihar, India';
    col.phone = '1800-121-0051 / +91-9431899002';
    col.email = 'info@gnsu.ac.in';
    col.affiliation = 'Gopal Narayan Singh University (GNSU) & Approved by AICTE, UGC';
    col.img = '/images/campuses/campus_architecture_5.jpg';
    col.image = '/images/campuses/campus_architecture_5.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 1140: GNSU Rohtas (Removed Bangalore University photo)');
  }

  else if (col.id === 1168) {
    col.name = 'Ganga Global Institute of Management Studies (GGIMS), Begusarai';
    col.website = 'https://www.ggims.ac.in';
    col.address = 'Ganga Global Gyan Parisar, NH-31, Ramzanpur (Near Ganga Dairy), Begusarai - 851129, Bihar, India';
    col.phone = '+91-9031835532 / +91-7870702200';
    col.email = 'info@ggims.ac.in';
    col.affiliation = 'Aryabhatta Knowledge University (AKU), Patna & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_6.jpg';
    col.image = '/images/campuses/campus_architecture_6.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 1168: GGIMS Begusarai (Removed collegebatch webp hotlink)');
  }

  else if (col.id === 1178) {
    col.name = 'Chanakya Institute of Management and Higher Studies (CIMHS), Koilwar';
    col.website = 'http://www.cimhs.in';
    col.address = 'Chanakya Nagar, Back of CRPF Camp, Post Koilwar, Bhojpur District - 802160, Bihar, India';
    col.phone = '+91-7070990871 / +91-7070990872';
    col.email = 'info@cimhs.in';
    col.affiliation = 'Aryabhatta Knowledge University (AKU), Patna & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_9.jpg';
    col.image = '/images/campuses/campus_architecture_9.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 1178: CIMHS Koilwar');
  }

  else if (col.id === 1180) {
    col.name = 'SNB College of Pharmacy and Management, Bihta, Patna';
    col.website = 'https://snbcollege.com';
    col.address = 'SNB Nagar, Amhara, Bihta, Patna - 801118, Bihar, India';
    col.phone = '+91 9939004752 / +91 9931231197';
    col.email = 'admissions.snb@gmail.com';
    col.affiliation = 'Aryabhatta Knowledge University (AKU), Patna & Approved by AICTE, PCI';
    col.img = '/images/campuses/campus_architecture_2.jpg';
    col.image = '/images/campuses/campus_architecture_2.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 1180: SNB College Bihta Patna');
  }

  else if (col.id === 1200) {
    col.name = 'Academy of Pharmacy Medical and Management Studies (APMMS), Koilwar';
    col.website = 'https://apmms.in';
    col.address = 'Koilwar, Bandh Par, Bhojpur District - 802160, Bihar, India';
    col.phone = '+91-7070094532 / +91-7070094533';
    col.email = 'academypmms@gmail.com';
    col.affiliation = 'Aryabhatta Knowledge University (AKU), Patna & Approved by AICTE, PCI';
    col.img = '/images/campuses/campus_architecture_8.jpg';
    col.image = '/images/campuses/campus_architecture_8.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 1200: APMMS Koilwar (Removed studyplaces hotlink)');
  }

  else if (col.id === 1211) {
    col.name = 'DC School of Management and Technology (DCSMAT), Vagamon';
    col.website = 'https://dcschool.net';
    col.address = 'One School Avenue, Pullikkanam P.O., Vagamon, Idukki District - 685503, Kerala, India';
    col.phone = '+91 729 009 2218 / +91 984 693 5777';
    col.email = 'info@dcschool.net';
    col.affiliation = 'Mahatma Gandhi University (MGU), Kottayam & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_5.jpg';
    col.image = '/images/campuses/campus_architecture_5.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 1211: DCSMAT Vagamon (Removed collegebatch webp hotlink)');
  }

  else if (col.id === 1239) {
    col.name = 'Institute of Land and Disaster Management (ILDM), Thiruvananthapuram';
    col.type = 'Public/Government (State Government Autonomous Institute)';
    col.ownership = 'Government';
    col.website = 'https://ildm.kerala.gov.in';
    col.address = 'ILDM Campus, PTP Nagar, Thiruvananthapuram - 695038, Kerala, India';
    col.phone = '+91 471 2365559 / +91 85476 10005';
    col.email = 'mba.ildm@kerala.gov.in';
    col.affiliation = 'University of Kerala & Approved by AICTE, Govt of Kerala';
    col.img = '/images/campuses/campus_architecture_7.jpg';
    col.image = '/images/campuses/campus_architecture_7.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 1239: ILDM Thiruvananthapuram (Restored Kerala Govt status & removed GNIMS Mumbai photo)');
  }

  else if (col.id === 1242) {
    col.name = 'Prayaga Institute of Management Studies (Prayaga Foundation), Palakkad';
    col.website = 'https://www.prayaga.co.in';
    col.address = 'PNT Complex, Chirakkad, Bava Nagar, Kunnathurmedu, Palakkad - 678013, Kerala, India';
    col.phone = '+91-9995217298 / 0491-2932630';
    col.email = 'info@prayaga.co.in';
    col.affiliation = 'University of Calicut & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_8.jpg';
    col.image = '/images/campuses/campus_architecture_8.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 1242: Prayaga Institute Palakkad (Fixed Google search URL & campusways hotlink)');
  }

  else if (col.id === 1243) {
    col.name = 'PMA SAFI Human Resources Institute, Vazhayoor, Malappuram';
    col.website = 'https://safihr.edu.in';
    col.address = 'Rasiya Nagar, Vazhayoor East P.O., Ramanattukara via, Malappuram / Kozhikode - 673633, Kerala, India';
    col.phone = '+91 8089456342 / 0483-2891666';
    col.email = 'admissions@safihr.in';
    col.affiliation = 'Approved by AICTE, Ministry of Education, Govt of India';
    col.img = '/images/campuses/campus_architecture_9.jpg';
    col.image = '/images/campuses/campus_architecture_9.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 1243: PMA SAFI HR Institute Vazhayoor');
  }
});

console.log(`\nModified ${modifiedCount} colleges in Batch 13.`);
const outputData = isWrapped ? { ...data, colleges } : colleges;
fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(outputData, null, 2), 'utf8');
console.log('Successfully wrote updates to public/siteData.json');

