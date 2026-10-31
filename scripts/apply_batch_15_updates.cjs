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
  if (col.id === 1299) {
    col.name = 'Monti International Institute of Management Studies (MIIMS), Puthanangadi';
    col.website = 'https://montiinstitute.ac.in';
    col.address = 'Luigi Bhavan Campus, Puthanangadi P.O., Angadippuram via, Malappuram District - 679321, Kerala, India';
    col.phone = '+91 8606258555 / +91 9061258555';
    col.email = 'montiinstitute@gmail.com';
    col.affiliation = 'University of Calicut & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_1.jpg';
    col.image = '/images/campuses/campus_architecture_1.jpg';
    col.courses = [
      { name: 'MBA', duration: '2 Years', fee: '₹1,50,000/yr', seats: 60 }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1299: MIIMS Puthanangadi (Removed collegebatch webp hotlink & synthetic domain)');
  }

  else if (col.id === 1300) {
    col.name = 'Institute of Technology Mayyil (ITM), Kannur';
    col.website = 'https://itmmba.ac.in';
    col.address = 'Pavannurmotta P.O., Mayyil via, Kannur District - 670602, Kerala, India';
    col.phone = '0460-2276786 / +91 9447477387';
    col.email = 'mba@itmgroup.in';
    col.affiliation = 'Kannur University & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_2.jpg';
    col.image = '/images/campuses/campus_architecture_2.jpg';
    col.courses = [
      { name: 'MBA', duration: '2 Years', fee: '₹1,20,000/yr', seats: 120 }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1300: ITM Mayyil Kannur (CRITICAL FIX: Purged VJTI Mumbai photo leak)');
  }

  else if (col.id === 1318) {
    col.name = 'A.S. Group of Institutions (ASGOI), Khanna';
    col.website = 'https://asinstitutes.com';
    col.address = 'Samrala Road, Kalal Majra, Tehsil Samrala, Khanna, Ludhiana District - 141401, Punjab, India';
    col.phone = '+91-1628-237470 / +91-98550-45461';
    col.email = 'asgikhanna@gmail.com';
    col.affiliation = 'I.K. Gujral Punjab Technical University (IKGPTU), Jalandhar & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_3.jpg';
    col.image = '/images/campuses/campus_architecture_3.jpg';
    col.courses = [
      { name: 'MBA', duration: '2 Years', fee: '₹80,000/yr', seats: 60 }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1318: ASGOI Khanna (CRITICAL FIX: Purged MS Ramaiah Bangalore photo leak)');
  }

  else if (col.id === 1343) {
    col.name = 'Golden College of Engineering & Technology (GCET), Gurdaspur';
    col.website = 'https://goldengroups.co.in';
    col.address = 'Prem Nagar, Hardochhani Road, Gurdaspur - 143521, Punjab, India';
    col.phone = '+91-7508709760 / 01874-504000';
    col.email = 'goldenedu@live.com';
    col.affiliation = 'I.K. Gujral Punjab Technical University (IKGPTU), Jalandhar & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_4.jpg';
    col.image = '/images/campuses/campus_architecture_4.jpg';
    col.courses = [
      { name: 'MBA', duration: '2 Years', fee: '₹75,000/yr', seats: 60 }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1343: GCET Gurdaspur (CRITICAL FIX: Purged Chetana Bandra Mumbai photo leak)');
  }

  else if (col.id === 1353) {
    col.name = 'Khalsa College of Engineering & Technology (KCET), Amritsar';
    col.website = 'https://khalsaengineering.co.in';
    col.address = 'C-Block, Ranjit Avenue, Amritsar - 143001, Punjab, India';
    col.phone = '+91-8198004400 / 0183-5030765';
    col.email = 'kcetamritsar@gmail.com';
    col.affiliation = 'I.K. Gujral Punjab Technical University (IKGPTU), Jalandhar & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_5.jpg';
    col.image = '/images/campuses/campus_architecture_5.jpg';
    col.courses = [
      { name: 'MBA', duration: '2 Years', fee: '₹85,000/yr', seats: 60 }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1353: KCET Amritsar (Removed collegebatch webp hotlink & synthetic domain)');
  }

  else if (col.id === 1393) {
    col.name = 'Aryans Business School (ABS, Aryans Group of Colleges), Rajpura, Patiala';
    col.website = 'https://aryans.edu.in';
    col.address = 'Village Nepra, Chandigarh-Patiala Highway, Tehsil Rajpura, District Patiala - 140401, Punjab, India';
    col.phone = '+91-98762-99888 / +91-98765-99888';
    col.email = 'info@aryans.edu.in';
    col.affiliation = 'I.K. Gujral Punjab Technical University (IKGPTU), Jalandhar & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_6.jpg';
    col.image = '/images/campuses/campus_architecture_6.jpg';
    col.courses = [
      { name: 'MBA', duration: '2 Years', fee: '₹90,000/yr', seats: 120 }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1393: ABS Rajpura (Removed studyclap hotlink & synthetic domain)');
  }

  else if (col.id === 1447) {
    col.name = 'International School of Business Administration (ISBA Group of Institutions), Indore';
    col.website = 'https://isba.edu.in';
    col.address = 'Gram Badodiya Ema, Sanwer Road / Indore-Ujjain Road, Indore - 453551, Madhya Pradesh, India';
    col.phone = '+91-9977802220 / 0731-2026000';
    col.email = 'info@isba.edu.in';
    col.affiliation = 'Devi Ahilya Vishwavidyalaya (DAVV), Indore & Approved by AICTE, MP Higher Education';
    col.img = '/images/campuses/campus_architecture_7.jpg';
    col.image = '/images/campuses/campus_architecture_7.jpg';
    col.courses = [
      { name: 'MBA', duration: '2 Years', fee: '₹65,000/yr', seats: 180 }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1447: ISBA Indore (CRITICAL FIX: Purged Koshys Bangalore photo leak)');
  }

  else if (col.id === 1449) {
    col.name = 'Indore Institute of Management and Research (IIMR), Rau, Indore';
    col.website = 'https://indoreinstitute.com/iimr';
    col.address = 'Opposite IIM Indore, Rau-Pithampur Road, Rau, Indore - 453331, Madhya Pradesh, India';
    col.phone = '+91-8224073000 / 1800 103 3069';
    col.email = 'admissions@indoreinstitute.com';
    col.affiliation = 'Devi Ahilya Vishwavidyalaya (DAVV), Indore & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_8.jpg';
    col.image = '/images/campuses/campus_architecture_8.jpg';
    col.courses = [
      { name: 'MBA', duration: '2 Years', fee: '₹1,05,000/yr', seats: 180 }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1449: IIMR Rau Indore (Fixed synthetic domain & undefined course)');
  }

  else if (col.id === 1450) {
    col.name = 'Maharishi Centre for Educational Excellence (MCEE - Maharishi Institute of Management), Bhopal';
    col.website = 'https://mceebhopal.org';
    col.address = 'Lambakheda, Berasia Road, Bhopal - 462038, Madhya Pradesh, India';
    col.phone = '+91-8349053515 / 0755-4525149';
    col.email = 'mceebhopal@mssmail.org';
    col.affiliation = 'Barkatullah University, Bhopal & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_2.jpg';
    col.image = '/images/campuses/campus_architecture_2.jpg';
    col.courses = [
      { name: 'MBA', duration: '2 Years', fee: '₹60,000/yr', seats: 120 }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1450: MCEE Bhopal (Fixed synthetic domain & undefined course)');
  }

  else if (col.id === 1474) {
    col.name = 'Jain College (Jain Group of Colleges), Lashkar, Gwalior';
    col.website = 'http://www.jaincollege.net';
    col.address = 'Piproli-Shivpuri Link Road, Lashkar, Gwalior - 474001, Madhya Pradesh, India';
    col.phone = '+91-8818888771 / +91-9425778444';
    col.email = 'infojaincollege@gmail.com';
    col.affiliation = 'Jiwaji University, Gwalior & Approved by AICTE, NCTE, MP Higher Education';
    col.img = '/images/campuses/campus_architecture_3.jpg';
    col.image = '/images/campuses/campus_architecture_3.jpg';
    col.courses = [
      { name: 'MBA', duration: '2 Years', fee: '₹55,000/yr', seats: 120 }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1474: Jain College Gwalior (CRITICAL FIX: Purged VJTI Mumbai photo leak & raw search URL)');
  }
});

console.log(`\nModified ${modifiedCount} colleges in Batch 15.`);
const outputData = isWrapped ? { ...data, colleges } : colleges;
fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(outputData, null, 2), 'utf8');
console.log('Successfully wrote updates to public/siteData.json');

