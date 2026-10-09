const fs = require('fs');
const path = require('path');

const siteDataPath = path.resolve('public/siteData.json');
const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const colleges = siteData.colleges;

console.log('Updating the 3 specific colleges requested by the user...\n');

// 1. Aditya College of Engineering (Chittoor, Andhra Pradesh)
const aditya = colleges.find(c => c.id === 3741 || (c.name && c.name.toLowerCase() === 'aditya college of engineering' && (c.location || '').toLowerCase().includes('chittoor')));
if (aditya) {
  console.log(`Found Aditya College of Engineering (ID ${aditya.id})`);
  aditya.name = 'Aditya College of Engineering';
  aditya.location = 'CHITTOOR';
  aditya.state = 'ANDHRA PRADESH';
  aditya.img = 'https://content.jdmagicbox.com/comp/madanapalle/q5/9999p8571.8571.181113202146.u3q5/catalogue/aditya-college-of-engineering-madanapalle-ho-madanapalle-mechanical-engineering-colleges-szqjxgqozr.jpg';
  aditya.gallery = [
    'https://content.jdmagicbox.com/comp/madanapalle/q5/9999p8571.8571.181113202146.u3q5/catalogue/aditya-college-of-engineering-madanapalle-ho-madanapalle-mechanical-engineering-colleges-szqjxgqozr.jpg',
    'https://www.collegebatch.com/static/clg-gallery/aditya-college-of-engineering-chittoor-286681.webp'
  ];
  aditya.website = 'https://acem.ac.in';
  aditya.mapUrl = 'https://www.google.com/maps/search/?api=1&query=Aditya%20College%20of%20Engineering%20Valasapalle%20Madanapalle%20Chittoor%20Andhra%20Pradesh';
  console.log(`✅ Updated Aditya College of Engineering (ID ${aditya.id})`);
}

// 2. Alliance College of Hotel Management Visakhapatnam
const alliance = colleges.find(c => c.id === 2937 || (c.name && c.name.toLowerCase().includes('alliance college of hotel management')));
if (alliance) {
  console.log(`Found Alliance College of Hotel Management (ID ${alliance.id})`);
  alliance.name = 'ALLIANCE COLLEGE OF HOTEL MANAGEMENT VISAKHAPATNAM';
  alliance.location = '54-11-40/1 KRISHNA COLLEGE, MADDILAPALEM, VISAKHAPATNAM';
  alliance.state = 'Andhra Pradesh';
  alliance.img = 'https://content.jdmagicbox.com/comp/visakhapatnam/e9/0891px891.x891.140605121101.f2e9/catalogue/alliance-college-of-hotel-management-maddilapalem-visakhapatnam-institutes-gee21ygmab.jpg';
  alliance.gallery = [
    'https://content.jdmagicbox.com/comp/visakhapatnam/e9/0891px891.x891.140605121101.f2e9/catalogue/alliance-college-of-hotel-management-maddilapalem-visakhapatnam-institutes-gee21ygmab.jpg',
    'https://image-static.collegedunia.com/public/college_data/images/campusimage/1632121094Screenshot%202021-09-20%20122550.png'
  ];
  alliance.website = 'https://alliancemgt.org';
  alliance.mapUrl = 'https://www.google.com/maps/search/?api=1&query=Alliance%20College%20of%20Hotel%20Management%20Maddilapalem%20Visakhapatnam%20Andhra%20Pradesh';
  console.log(`✅ Updated Alliance College of Hotel Management (ID ${alliance.id})`);
}

// 3. Alwar College of Engineering (MVP Colony Visakhapatnam)
const alwar = colleges.find(c => c.id === 2806 || (c.name && c.name.toLowerCase().includes('alwar college of engineering')));
if (alwar) {
  console.log(`Found Alwar College of Engineering (ID ${alwar.id})`);
  alwar.name = 'ALWAR COLLEGE OF ENGINEERING';
  alwar.location = 'MVP COLONY, PLOT NO-10, SECTOR-7, VISAKHAPATNAM';
  alwar.state = 'Andhra Pradesh';
  alwar.img = 'https://content.jdmagicbox.com/v2/comp/visakhapatnam/g9/0891px891.x891.240619180220.m1g9/catalogue/alwar-college-of-engineering-mvp-colony-visakhapatnam-colleges-5g99ls9umd.jpg';
  alwar.gallery = [
    'https://content.jdmagicbox.com/v2/comp/visakhapatnam/g9/0891px891.x891.240619180220.m1g9/catalogue/alwar-college-of-engineering-mvp-colony-visakhapatnam-colleges-5g99ls9umd.jpg',
    'https://res.cloudinary.com/dglxb6hg1/image/upload/f_auto,q_auto/v1771404870/mvp_adc_cbelu4.png'
  ];
  alwar.website = 'https://ace.edu.in';
  alwar.mapUrl = 'https://www.google.com/maps/search/?api=1&query=Alwar%20College%20of%20Engineering%20MVP%20Colony%20Visakhapatnam%20Andhra%20Pradesh';
  console.log(`✅ Updated Alwar College of Engineering (ID ${alwar.id})`);
}

fs.writeFileSync(siteDataPath, JSON.stringify(siteData, null, 2), 'utf8');
console.log('\nSaved updated siteData.json successfully!');
