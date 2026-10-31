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
  if (col.id === 457) {
    col.name = 'NSHM Knowledge Campus, Kolkata - Group of Institutions';
    col.website = 'https://www.nshm.com';
    col.address = 'Kolkata Knowledge Campus, 124 B. L. Saha Road, Tollygunge, Kolkata - 700053, West Bengal, India';
    col.phone = '033-2403 2300 / 033-2403 2301';
    col.email = 'contactus@nshm.com';
    col.affiliation = 'Maulana Abul Kalam Azad University of Technology (MAKAUT) & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_7.jpg';
    col.image = '/images/campuses/campus_architecture_7.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 457: NSHM Kolkata (Removed RIIM Pune photo)');
  }

  else if (col.id === 458) {
    col.name = 'Praxis Business School, Kolkata';
    col.website = 'https://praxis.ac.in';
    col.address = 'Bakrahat Road, Rasapunja, 24 Parganas South, Kolkata - 700104, West Bengal, India';
    col.phone = '+91-7676160161 / 033-24980553';
    col.email = 'pgdm.admissions@praxis.ac.in';
    col.affiliation = 'Approved by AICTE, Accredited by NBA & Recognized by AIU';
    col.img = '/images/campuses/campus_architecture_8.jpg';
    col.image = '/images/campuses/campus_architecture_8.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 458: Praxis Business School (Removed Bangalore Univ photo)');
  }

  else if (col.id === 465) {
    col.name = "St. Xavier's University, Kolkata";
    col.type = 'Private University (State Act)';
    col.website = 'https://www.sxuk.edu.in';
    col.address = 'Plot No. III - B/1, Action Area III B, Newtown, Kolkata - 700160, West Bengal, India';
    col.phone = '033-66249881 / +91 70443 45040';
    col.email = 'enquiry@sxuk.edu.in';
    col.affiliation = 'Approved by UGC & AICTE (Xavier Business School)';
    col.img = '/images/campuses/campus_architecture_6.jpg';
    col.image = '/images/campuses/campus_architecture_6.jpg';
    modifiedCount++;
    console.log("✓ Updated ID 465: St. Xavier's University (Removed St. Xavier's Mumbai photo)");
  }

  else if (col.id === 473) {
    col.name = 'Department of Management Studies, JIS University';
    col.type = 'Private University Department';
    col.website = 'https://www.jisuniversity.ac.in';
    col.address = 'JIS University, 81, Nilgunj Road, Agarpara, Kolkata - 700109, West Bengal, India';
    col.phone = '033-2563 6677 / +91 86977 43361';
    col.email = 'admissions@jisuniversity.ac.in';
    col.affiliation = 'JIS University, Approved by UGC & AICTE';
    col.img = '/images/campuses/campus_architecture_6.jpg';
    col.image = '/images/campuses/campus_architecture_6.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 473: JIS University');
  }

  else if (col.id === 483) {
    col.name = 'Kazi Nazrul University, Asansol';
    col.type = 'Public/Government (State University)';
    col.ownership = 'Government';
    col.website = 'https://www.knu.ac.in';
    col.address = 'Plot No. 3172, Administrative Building, Nazrul Road, P.O. Kalla C.H., Asansol (North), Dist. Paschim Bardhaman - 713340, West Bengal, India';
    col.phone = '+91-8116428990 / 0341-2270456';
    col.email = 'contact@knu.ac.in';
    col.affiliation = 'State University of West Bengal, Recognized by UGC under Section 2(f) & 12(B)';
    col.img = '/images/campuses/campus_architecture_7.jpg';
    col.image = '/images/campuses/campus_architecture_7.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 483: Kazi Nazrul University (Restored State University status)');
  }

  else if (col.id === 493) {
    col.name = 'NSHM Knowledge Campus, Durgapur - Group of Institutions';
    col.website = 'https://www.nshm.com';
    col.address = 'Arrah, Shibtala, Via Muchipara, Durgapur - 713212, West Bengal, India';
    col.phone = '0343-2533813 / +91 99330 49448';
    col.email = 'contactus@nshm.com';
    col.affiliation = 'Maulana Abul Kalam Azad University of Technology (MAKAUT) & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_8.jpg';
    col.image = '/images/campuses/campus_architecture_8.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 493: NSHM Durgapur');
  }

  else if (col.id === 499) {
    col.name = 'Globsyn Business School (GBS), Kolkata';
    col.website = 'https://www.globsyn.edu.in';
    col.address = 'Globsyn Knowledge Campus, Mouza Chandi, PS Bishnupur, JL No. 101, Dist. 24 Parganas (South), Kolkata - 743503, West Bengal, India';
    col.phone = '+91 62937 58660';
    col.email = 'gbsdirect@globsyn.edu.in';
    col.affiliation = 'Approved by AICTE, Accredited by NBA';
    col.img = '/images/campuses/campus_architecture_5.jpg';
    col.image = '/images/campuses/campus_architecture_5.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 499: Globsyn Business School');
  }

  else if (col.id === 501) {
    col.name = 'International School of Business & Media (ISB&M), Kolkata';
    col.website = 'https://isbmk.ac.in';
    col.address = '330/2 Pujali Trunk Road, P.S. Budge Budge, Kolkata - 700138, West Bengal, India';
    col.phone = '+91 9804866596 / +91 7605007185';
    col.email = 'admissions.kolkata@isbm.ac.in';
    col.affiliation = 'Approved by AICTE, Ministry of Education, Govt. of India';
    col.img = '/images/campuses/campus_architecture_1.jpg';
    col.image = '/images/campuses/campus_architecture_1.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 501: ISB&M Kolkata (Removed 403-blocked Collegedunia hotlink)');
  }

  else if (col.id === 540) {
    col.name = 'Department of Business Management, Satavahana University';
    col.type = 'Public/Government (State University Department)';
    col.ownership = 'Government';
    col.website = 'https://satavahana.ac.in';
    col.address = 'Satavahana University Campus, Malkapur Road, Chinta Kunta, Karimnagar - 505001, Telangana, India';
    col.phone = '+91 9491804500 / 0878-2255811';
    col.email = 'registrarsatavahana@gmail.com';
    col.affiliation = 'Satavahana University & Approved by UGC / AICTE';
    col.img = '/images/campuses/campus_architecture_2.jpg';
    col.image = '/images/campuses/campus_architecture_2.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 540: Satavahana University Karimnagar (Restored Government status & removed Chetana Bandra photo)');
  }

  else if (col.id === 578) {
    col.name = 'School of Commerce and Business Management, Maulana Azad National Urdu University (MANUU)';
    col.type = 'Public/Government (Central University Department)';
    col.ownership = 'Government';
    col.website = 'https://manuu.edu.in';
    col.address = 'School of Commerce and Business Management, Maulana Azad National Urdu University, Gachibowli, Hyderabad - 500032, Telangana, India';
    col.phone = '040-23120600 (Extn: 3410 / 3401)';
    col.email = 'dean.bmc@manuu.edu.in / hod.bmc@manuu.edu.in';
    col.affiliation = 'Maulana Azad National Urdu University & Approved by UGC / AICTE, NAAC A+ Grade';
    col.img = '/images/campuses/campus_architecture_9.jpg';
    col.image = '/images/campuses/campus_architecture_9.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 578: MANUU Hyderabad (Restored Central University status)');
  }
});

console.log(`\nModified ${modifiedCount} colleges in Batch 6.`);
const outputData = isWrapped ? { ...data, colleges } : colleges;
fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(outputData, null, 2), 'utf8');
console.log('Successfully wrote updates to public/siteData.json');

