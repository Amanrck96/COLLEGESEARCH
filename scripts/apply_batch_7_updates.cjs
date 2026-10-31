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
  if (col.id === 579) {
    col.name = 'Department of Management Studies (DoMS), NALSAR University of Law';
    col.type = 'Public/Government (State University / National Law University)';
    col.ownership = 'Government';
    col.website = 'https://doms.nalsar.ac.in';
    col.address = 'Justice City, Shameerpet, Medchal-Malkajgiri District, Hyderabad - 500101, Telangana, India';
    col.phone = '040-2349 8409 / 040-2349 8100';
    col.email = 'mbaadmissions@nalsar.ac.in';
    col.affiliation = 'Statutory National Law University, Approved by UGC & BCI, NAAC A++ Grade';
    col.img = '/images/campuses/campus_architecture_1.jpg';
    col.image = '/images/campuses/campus_architecture_1.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 579: NALSAR University (Restored State/NLU Government status)');
  }

  else if (col.id === 582) {
    col.name = 'Fortune School of Business (FSB), Hyderabad';
    col.website = 'https://www.fsb.org.in';
    col.address = 'Kothari Solitaire, 1st Floor, Beside Govt Degree College, NH-65, Kukatpally, Hyderabad - 500072, Telangana, India';
    col.phone = '+91 9246582901 / +91 7661804099';
    col.email = 'fsb.org.in@gmail.com';
    col.affiliation = 'Osmania University & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_8.jpg';
    col.image = '/images/campuses/campus_architecture_8.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 582: Fortune School of Business (Removed SVKM Vile Parle photo)');
  }

  else if (col.id === 583) {
    col.name = 'Pannala Ram Reddy College of Business Management (PRRCBM)';
    col.website = 'https://www.prrcbm.com';
    col.address = 'Ram Reddy Nagar Colony, Beside Pallavi Model School, Boduppal (Near Uppal Bus Depot), Hyderabad - 500092, Telangana, India';
    col.phone = '+91 9000200222 / 040-64643900';
    col.email = 'prcb.boduppal@gmail.com';
    col.affiliation = 'Osmania University & Approved by AICTE, ICET Code: PRRB';
    col.img = '/images/campuses/campus_architecture_5.jpg';
    col.image = '/images/campuses/campus_architecture_5.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 583: Pannala Ram Reddy College (Removed GNIMS Matunga photo)');
  }

  else if (col.id === 584) {
    col.name = 'School of Innovation and Management (SOIM), Hyderabad';
    col.website = 'https://soim.edu.in';
    col.address = 'GNITS Campus, Shaikpet, Hyderabad - 500008, Telangana, India';
    col.phone = '+91 91549 84801 / +91 91549 84802';
    col.email = 'admissions@soim.edu.in';
    col.affiliation = 'Approved by AICTE, New Delhi';
    col.img = '/images/campuses/campus_architecture_6.jpg';
    col.image = '/images/campuses/campus_architecture_6.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 584: SOIM Hyderabad (Removed fragile collegebatch hotlink)');
  }

  else if (col.id === 586) {
    col.name = 'Omega Business School, Hyderabad';
    col.website = 'https://omegabusinessschool.ac.in';
    col.address = 'Sy. No. 15, Edulabad (V), Ghatkesar (M), Medchal-Malkajgiri District, Hyderabad - 501301, Telangana, India';
    col.phone = '+91 9246805933 / +91 9912988863';
    col.email = 'obs.pgdm@omegacolleges.com';
    col.affiliation = 'Osmania University & Approved by AICTE, New Delhi';
    col.img = '/images/campuses/campus_architecture_3.jpg';
    col.image = '/images/campuses/campus_architecture_3.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 586: Omega Business School');
  }

  else if (col.id === 587) {
    col.name = "Aurora's Business School, Hyderabad";
    col.website = 'https://www.absi.edu.in';
    col.address = '6-3-456/18 & 19, Dwarakapuri Colony, Punjagutta, Hyderabad - 500082, Telangana, India';
    col.phone = '040-2335 0062 / +91-9100222222';
    col.email = 'info@absi.edu.in';
    col.affiliation = 'Approved by AICTE, Ministry of Education, Govt. of India';
    col.img = '/images/campuses/campus_architecture_4.jpg';
    col.image = '/images/campuses/campus_architecture_4.jpg';
    modifiedCount++;
    console.log("✓ Updated ID 587: Aurora's Business School (Removed Atharva Malad photo)");
  }

  else if (col.id === 590) {
    col.name = 'Aradhana School of Business Management (ASBM), Hyderabad';
    col.website = 'http://www.asbm.in';
    col.address = 'Near Pillar No. 216, Mehdipatnam Expressway, Kismatpur, Rajendranagar, Hyderabad - 500086, Telangana, India';
    col.phone = '040-2970 3251 / +91-8008557312';
    col.email = 'Principal.ASBM@gmail.com';
    col.affiliation = 'Osmania University & Approved by AICTE, ICET Code: ARDH';
    col.img = '/images/campuses/campus_architecture_2.jpg';
    col.image = '/images/campuses/campus_architecture_2.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 590: Aradhana School of Business Management');
  }

  else if (col.id === 592) {
    col.name = 'Bharathi Institute of Business Management (BIBM), Warangal';
    col.website = 'https://kakatiya.ac.in';
    col.address = 'Survey No. 437, Gangadevipally Village, Geesugonda Mandal, Warangal District - 506370, Telangana, India';
    col.phone = '0870-2425212 / +91-7702089255';
    col.email = 'bibmwarangal@gmail.com';
    col.affiliation = 'Kakatiya University (KU, Warangal) & Approved by AICTE, ICET Code: BIBM';
    col.img = '/images/campuses/campus_architecture_3.jpg';
    col.image = '/images/campuses/campus_architecture_3.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 592: Bharathi Institute Warangal (Removed fragile getmyuni hotlink)');
  }

  else if (col.id === 595) {
    col.name = "St. Mary's Centenary College of Management, Secunderabad";
    col.website = 'https://smccom.ac.in';
    col.address = 'P.R. No. 9-1-257/1, St. Francis Street, Secunderabad - 500003, Telangana, India';
    col.phone = '+91-7989856725 / 040-3516 4325';
    col.email = 'stmarysccom@gmail.com';
    col.affiliation = 'Osmania University & Approved by AICTE, ICET Code: SMBA';
    col.img = '/images/campuses/campus_architecture_7.jpg';
    col.image = '/images/campuses/campus_architecture_7.jpg';
    modifiedCount++;
    console.log("✓ Updated ID 595: St. Mary's Centenary College");
  }

  else if (col.id === 599) {
    col.name = 'Institute of Insurance and Risk Management (IIRM), Hyderabad';
    col.type = 'Autonomous Statutory Institution (IRDAI & Govt of Telangana)';
    col.ownership = 'Government / Statutory Regulatory Body';
    col.website = 'https://theiirm.ac.in';
    col.address = 'Financial District, Survey No. 111/1 & 115/1, Road No. 2, Nanakramguda, Gachibowli, Hyderabad - 500032, Telangana, India';
    col.phone = '040-2300 0005 / +91-96527 40909 / 1800 425 2041';
    col.email = 'admissions@theiirm.ac.in';
    col.affiliation = 'Approved by AICTE, Accredited by NBA';
    col.img = '/images/campuses/campus_architecture_8.jpg';
    col.image = '/images/campuses/campus_architecture_8.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 599: IIRM Hyderabad (Restored IRDAI Statutory Body status)');
  }
});

console.log(`\nModified ${modifiedCount} colleges in Batch 7.`);
const outputData = isWrapped ? { ...data, colleges } : colleges;
fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(outputData, null, 2), 'utf8');
console.log('Successfully wrote updates to public/siteData.json');

