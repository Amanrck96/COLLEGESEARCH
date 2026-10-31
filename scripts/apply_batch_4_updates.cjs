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
  if (col.id === 320) {
    col.website = 'https://www.fostiima.org';
    col.address = 'Plot No. HAF-1, Sector 9, Institutional Area, Dwarka, New Delhi - 110077';
    col.phone = '+91-76783 91245';
    col.email = 'admissions@fostiima.org';
    col.affiliation = 'Approved by AICTE, Ministry of Education, Govt. of India';
    col.img = '/images/campuses/campus_architecture_9.jpg';
    col.image = '/images/campuses/campus_architecture_9.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 320: FOSTIIMA Business School');
  }

  else if (col.id === 327) {
    col.website = 'https://iilm.edu/lodhi-road';
    col.address = 'Rai School Complex, Institutional Area, Lodhi Road, New Delhi - 110003, India';
    col.phone = '+91-8065905223';
    col.email = 'pgdm@iilm.edu';
    col.affiliation = 'Approved by AICTE, Accredited by NBA & SAQS';
    col.img = '/images/campuses/campus_architecture_8.jpg';
    col.image = '/images/campuses/campus_architecture_8.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 327: IILM Lodhi Road (Removed Sailee Borivali)');
  }

  else if (col.id === 328) {
    col.website = 'https://www.spec.edu.in';
    col.address = 'Sardar Patel Education Campus, Vidyanagar - Vadtal Road, Bakrol, Anand - 388315, Gujarat';
    col.phone = '+91-79848 88427';
    col.email = 'spcam2008@gmail.com';
    col.affiliation = 'Gujarat Technological University (GTU) & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_5.jpg';
    col.image = '/images/campuses/campus_architecture_5.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 328: Sardar Patel College Anand');
  }

  else if (col.id === 363) {
    col.website = 'https://rngpit.ac.in';
    col.address = 'Bardoli - Navsari Road, At: Isroli (Tajpore), PO: Afwa, Bardoli, Surat - 394620, Gujarat';
    col.phone = '+91-8160671202';
    col.email = 'info@rngpit.ac.in';
    col.affiliation = 'Gujarat Technological University (GTU) & Approved by AICTE, NAAC A Grade';
    col.img = '/images/campuses/campus_architecture_1.jpg';
    col.image = '/images/campuses/campus_architecture_1.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 363: RNG Patel Institute (Removed VNIT Nagpur)');
  }

  else if (col.id === 364) {
    col.website = 'https://kadakiaeducation.edu.in';
    col.address = 'Kadakia Educational Campus, Kadakia Vidya Gram, Hansot Road, Ankleshwar, Dist. Bharuch - 393001, Gujarat';
    col.phone = '+91-96625 34664';
    col.email = 'kadakiacampus@gmail.com';
    col.affiliation = 'Gujarat Technological University (GTU) & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_2.jpg';
    col.image = '/images/campuses/campus_architecture_2.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 364: Smt. Kusumben Kadakia Institute');
  }

  else if (col.id === 382) {
    col.website = 'https://paramimr.com';
    col.address = 'Adi Shankaracharya Shikshan Vikas Sankul, Okha State Highway, Lakhabaval Road, Jamnagar - 361006, Gujarat';
    col.phone = '+91-9106771315';
    col.email = 'paramimr@gmail.com';
    col.affiliation = 'Gujarat Technological University (GTU) & Approved by AICTE, GTU Code 795';
    col.img = '/images/campuses/campus_architecture_3.jpg';
    col.image = '/images/campuses/campus_architecture_3.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 382: Param Institute Jamnagar');
  }

  else if (col.id === 383) {
    col.website = 'https://www.metasofsda.in';
    col.address = 'Metas of Seventh-Day Adventists, P.O. Box No. 24, Athwalines, Surat - 395001, Gujarat, India';
    col.phone = '0261-7160215';
    col.email = 'registrarsurat@metasofsda.in';
    col.affiliation = 'Veer Narmad South Gujarat University (VNSGU) & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_4.jpg';
    col.image = '/images/campuses/campus_architecture_4.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 383: Metas Adventist College Surat');
  }

  else if (col.id === 385) {
    col.website = 'https://rhpim.org';
    col.address = 'Near Toll Plaza, Goblaj, Taluka Kheda, District Kheda - 387540, Gujarat, India';
    col.phone = '+91-9099063467';
    col.email = 'rhpim_managment@yahoo.com';
    col.affiliation = 'Gujarat Technological University (GTU) & Approved by AICTE, GTU Code 750';
    col.img = '/images/campuses/campus_architecture_3.jpg';
    col.image = '/images/campuses/campus_architecture_3.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 385: R. H. Patel Institute of Management');
  }

  else if (col.id === 387) {
    col.website = 'https://www.nbs.edu.in';
    col.address = 'Sarkhej - Bavla Road, Near Sanathal Circle, Sanathal, Ahmedabad - 382210, Gujarat, India';
    col.phone = '+91 844 8444 981';
    col.email = 'info@nbs.edu.in';
    col.affiliation = 'Approved by AICTE & Accredited by NBA';
    col.img = '/images/campuses/campus_architecture_6.jpg';
    col.image = '/images/campuses/campus_architecture_6.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 387: Narayana Business School');
  }

  else if (col.id === 388) {
    col.website = 'https://gmit.edu.in';
    col.address = 'Survey No. 30, Sidsar Road, Near Iscon Eleven, Bhavnagar - 364060, Gujarat, India';
    col.phone = '+91 90999 51160';
    col.email = 'info@gmit.edu.in';
    col.affiliation = 'Gyanmanjari Innovative University / GTU & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_7.jpg';
    col.image = '/images/campuses/campus_architecture_7.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 388: Gyanmanjari Institute of Technology');
  }
});

console.log(`Writing verified Batch 4 updates back to ${SITE_DATA_PATH}...`);
fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(data, null, 2), 'utf8');
console.log(`Successfully updated ${modifiedCount} colleges in siteData.json!`);

