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
  if (col.id === 858) {
    col.name = 'RMS Business School, Gurugram';
    col.website = 'https://rmsbusinessschool.org';
    col.address = 'Village Turkapur, Post Baspadamka, Pataudi / Sector 32 City Campus, Gurugram - 122001, Haryana, India';
    col.phone = '+91-9091454647 / +91-9810112877';
    col.email = 'info@rmsbusinessschool.org';
    col.affiliation = 'Gurugram University & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_9.jpg';
    col.image = '/images/campuses/campus_architecture_9.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 858: RMS Business School Gurugram');
  }

  else if (col.id === 859) {
    col.name = 'Rattan Institute of Management (RIM), Seekri, Faridabad';
    col.website = 'https://rimseekri.org.in';
    col.address = 'Seekri, Harphala Road, Ballabgarh, Faridabad - 121004, Haryana, India';
    col.phone = '+91-8810676939 / +91-8810676551';
    col.email = 'info@rimseekri.org.in';
    col.affiliation = 'Maharshi Dayanand University (MDU), Rohtak & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_8.jpg';
    col.image = '/images/campuses/campus_architecture_8.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 859: RIM Faridabad (Removed CU Shah Mumbai photo)');
  }

  else if (col.id === 863) {
    col.name = 'Delhi Institute of Technology, Management & Research (FCEM), Faridabad';
    col.website = 'https://www.fcem.in';
    col.address = 'Sohna Road, Village Firozpur Kalan, Ballabgarh, Faridabad - 121004, Haryana, India';
    col.phone = '+91-9205129827 / +91-8851440031';
    col.email = 'fcemfbd@gmail.com';
    col.affiliation = 'J.C. Bose University of Science and Technology, YMCA / MDU & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_7.jpg';
    col.image = '/images/campuses/campus_architecture_7.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 863: FCEM / DITMR Faridabad (Removed collegedekho hotlink)');
  }

  else if (col.id === 868) {
    col.name = 'Maa Omwati Institute of Management & Technology (MOIMT), Hassanpur, Palwal';
    col.website = 'https://www.maaomwati.com';
    col.address = 'VPO Hassanpur, Tehsil Hodal, Palwal District - 121107, Haryana, India';
    col.phone = '+91-9050654655 / +91-7838381380';
    col.email = 'administrator1@maaomwati.com';
    col.affiliation = 'Maharshi Dayanand University (MDU), Rohtak & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_4.jpg';
    col.image = '/images/campuses/campus_architecture_4.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 868: MOIMT Palwal');
  }

  else if (col.id === 869) {
    col.name = 'SOIL School of Business Design (SOIL Institute of Management), Manesar, Gurugram';
    col.website = 'https://www.soil.edu.in';
    col.address = 'Plot 23, Sector 2, Phase 1, Institutional Area, IMT Manesar, Gurugram - 122050, Haryana, India';
    col.phone = '+91-9717280018 / +91-9870256660';
    col.email = 'pgdm@schoolofbusinessdesign.com';
    col.affiliation = 'Approved by AICTE, Ministry of Education, Govt of India';
    col.img = '/images/campuses/campus_architecture_3.jpg';
    col.image = '/images/campuses/campus_architecture_3.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 869: SOIL School of Business Design Manesar (Removed MGM Navi Mumbai photo)');
  }

  else if (col.id === 870) {
    col.name = 'JK Institute of Management & Technology (JKIMT), Karnal';
    col.website = 'https://jkinstitutes.com';
    col.address = 'Indri Road, Near Ramba Chowk (24/11 Mile Stone), Karnal - 132001, Haryana, India';
    col.phone = '+91-9355562120 / +91-9355208000';
    col.email = 'info@jkinstitutes.com';
    col.affiliation = 'Kurukshetra University (KUK) & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_6.jpg';
    col.image = '/images/campuses/campus_architecture_6.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 870: JKIMT Karnal (Removed Sheila Raheja Bandra Mumbai photo)');
  }

  else if (col.id === 893) {
    col.name = 'Saraswati Mahila Mahavidyalaya (SMM), Palwal';
    col.website = 'https://www.smmpalwal.com';
    col.address = 'Bye Pass Road / Nuh Road (NH-71B), Palwal - 121102, Haryana, India';
    col.phone = '01275-253319 / +91-9466285533';
    col.email = 'saraswatipalwal@gmail.com';
    col.affiliation = 'Maharshi Dayanand University (MDU), Rohtak & NAAC Accredited B+ Grade, UGC';
    col.img = '/images/campuses/campus_architecture_8.jpg';
    col.image = '/images/campuses/campus_architecture_8.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 893: SMM Palwal (Removed SVKM Vile Parle Mumbai photo)');
  }

  else if (col.id === 894) {
    col.name = 'Pt. L.R. College of Management, Ballabgarh, Faridabad';
    col.website = 'https://ptlrcollege.com';
    col.address = 'Kaboolpur Bangar, Samaypur Sohna Road, Ballabgarh, Faridabad - 121004, Haryana, India';
    col.phone = '+91-9540028827 / +91-9540028828';
    col.email = 'ptlrcm@gmail.com';
    col.affiliation = 'Maharshi Dayanand University (MDU), Rohtak & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_1.jpg';
    col.image = '/images/campuses/campus_architecture_1.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 894: Pt. LR College Faridabad (Removed jagranjosh hotlink)');
  }

  else if (col.id === 899) {
    col.name = 'Shaheed Capt. D.K. Khola College of Management and Technology, Zainabad, Rewari';
    col.website = 'https://www.kholacollege.com';
    col.address = 'VPO Zainabad, Rewari District - 123411, Haryana, India';
    col.phone = '+91-9416382959 / 01281-248530';
    col.email = 'khola.satish@gmail.com';
    col.affiliation = 'Indira Gandhi University (IGU), Meerpur, Rewari & Approved by AICTE, NCTE';
    col.img = '/images/campuses/campus_architecture_2.jpg';
    col.image = '/images/campuses/campus_architecture_2.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 899: Shaheed Capt D K Khola College Rewari (Removed studyclap hotlink)');
  }

  else if (col.id === 900) {
    col.name = 'Indraprasth Institute of Management (IIMG), Gurugram';
    col.website = 'http://www.iimgurgaon.com';
    col.address = 'Indraprasth Aerospace & Knowledge Park, Near Aapno Ghar, Delhi-Jaipur Expressway (NH-8), Sector 77, Gurugram - 122004, Haryana, India';
    col.phone = '+91-8448894230 / +91-8448894231 / +91-9319208927';
    col.email = 'admission@iimgurgaon.com';
    col.affiliation = 'Approved by AICTE, Ministry of Education, Govt of India';
    col.img = '/images/campuses/campus_architecture_9.jpg';
    col.image = '/images/campuses/campus_architecture_9.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 900: IIMG Gurugram (Removed 403-blocked collegedunia hotlink)');
  }
});

console.log(`\nModified ${modifiedCount} colleges in Batch 11.`);
const outputData = isWrapped ? { ...data, colleges } : colleges;
fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(outputData, null, 2), 'utf8');
console.log('Successfully wrote updates to public/siteData.json');

