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
  if (col.id === 390) {
    col.name = 'Graduate School of Management Studies (GSMS), Gujarat Technological University';
    col.type = 'Public/Government (State University Department)';
    col.ownership = 'Government';
    col.website = 'https://www.gsms.gtu.ac.in';
    col.address = 'Academic Block - IV, GTU Chandkheda Campus, Nr. Visat Three Roads, Visat - Gandhinagar Highway, Chandkheda, Ahmedabad - 382424, Gujarat';
    col.phone = '079-23267542 / 079-23267534';
    col.email = 'gsms@gtu.edu.in';
    col.affiliation = 'Gujarat Technological University (GTU) & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_8.jpg';
    col.image = '/images/campuses/campus_architecture_8.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 390: GSMS GTU (Restored Government status & removed Bangalore Univ image)');
  }

  else if (col.id === 395) {
    col.name = 'Narayana Business School (Duplicate of ID 387)';
    col.duplicate_of = 387;
    col.website = 'https://www.nbs.edu.in';
    col.address = 'Sarkhej-Bavla Highway, Sanathal, Ahmedabad - 382210, Gujarat';
    col.phone = '+91 844 8444 981';
    col.email = 'info@nbs.edu.in';
    col.img = '/images/campuses/campus_architecture_6.jpg';
    col.image = '/images/campuses/campus_architecture_6.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 395: Narayana Business School (Canonicalized to ID 387)');
  }

  else if (col.id === 396) {
    col.website = 'https://www.naranlala.edu.in/';
    col.address = 'Naran Lala College Campus, Bhagwati Sankul, Near Eru Char Rasta, Eru, Navsari - 396450, Gujarat, India';
    col.phone = '02637-283687 / +91-9099063468';
    col.email = 'naranlalamba@gmail.com';
    col.affiliation = 'Gujarat Technological University (GTU) & Approved by AICTE, GTU Code 738';
    col.img = '/images/campuses/campus_architecture_5.jpg';
    col.image = '/images/campuses/campus_architecture_5.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 396: Naran Lala Navsari (Removed RIIM Pune image)');
  }

  else if (col.id === 404) {
    col.website = 'https://silveroakuni.ac.in';
    col.address = 'Silver Oak University, Opp. Bhagwat Vidyapith, S.G. Highway, Gota, Ahmedabad - 382481, Gujarat';
    col.phone = '079-66046300 / +91-9099063464';
    col.email = 'info@silveroakuni.ac.in';
    col.affiliation = 'Constituent of Silver Oak University, Approved by UGC & AICTE';
    col.img = '/images/campuses/campus_architecture_8.jpg';
    col.image = '/images/campuses/campus_architecture_8.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 404: Silver Oak Institute (Removed MGM Navi Mumbai image)');
  }

  else if (col.id === 405) {
    col.name = 'School of Management (SoM), Pandit Deendayal Energy University';
    col.website = 'https://www.pdpu.ac.in';
    col.address = 'Knowledge Corridor, Raisan Village, Gandhinagar - 382426, Gujarat, India';
    col.phone = '079-23275109 / 079-23275060';
    col.email = 'admissions@spm.pdpu.ac.in';
    col.affiliation = 'Pandit Deendayal Energy University, Approved by UGC & AICTE, NAAC A++ Grade';
    col.img = '/images/campuses/campus_architecture_9.jpg';
    col.image = '/images/campuses/campus_architecture_9.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 405: SoM PDEU Gandhinagar (Removed MGM Navi Mumbai image)');
  }

  else if (col.id === 407) {
    col.name = 'Tolani Motwane Institute of Management Studies (TMIMS), Adipur';
    col.website = 'https://tims.ac.in';
    col.address = 'Tolani Vidya Mandir Campus, Lilashah Ashram Road, Adipur (Kutch) - 370205, Gujarat';
    col.phone = '02836-261466 / +91-9925317710';
    col.email = 'info@tims.ac.in';
    col.affiliation = 'Gujarat Technological University (GTU) & Approved by AICTE, GTU Code 758';
    col.img = '/images/campuses/campus_architecture_1.jpg';
    col.image = '/images/campuses/campus_architecture_1.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 407: Tolani Motwane Institute (Removed fragile collegebatch hotlink)');
  }

  else if (col.id === 411) {
    col.website = 'http://www.swamisahajanand.mba';
    col.address = 'Phase-II, Plot No. 639, ISCON Mega City, Near M.K. Bhavnagar University Office, Bhavnagar - 364002, Gujarat';
    col.phone = '0278-2512252 / 0278-2516999';
    col.email = 'swamisahajanand.mba@gmail.com';
    col.affiliation = 'Maharaja Krishnakumarsinhji Bhavnagar University (MKBU) / GTU & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_7.jpg';
    col.image = '/images/campuses/campus_architecture_7.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 411: Swami Sahajanand Bhavnagar');
  }

  else if (col.id === 412) {
    col.website = 'https://www.mestech.ac.in';
    col.address = 'The Mandvi Education Society Technical Campus, Near Bus Stand, Mandvi, Surat - 394160, Gujarat';
    col.phone = '+91 9327365853 / 02623-221015';
    col.email = 'mgmtmes@gmail.com';
    col.affiliation = 'Gujarat Technological University (GTU) & Approved by AICTE, GTU Code 732';
    col.img = '/images/campuses/campus_architecture_2.jpg';
    col.image = '/images/campuses/campus_architecture_2.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 412: Mandvi Education Society (Removed Chetana Bandra Mumbai image)');
  }

  else if (col.id === 420) {
    col.website = 'https://www.cimrajkot.edu.in/';
    col.address = 'Christ Campus, Vidya Niketan, Saurashtra University P.O., Rajkot - 360005, Gujarat, India';
    col.phone = '0281-2572091 / +91-9825199264';
    col.email = 'cimrajkot@gmail.com';
    col.affiliation = 'Saurashtra University & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_3.jpg';
    col.image = '/images/campuses/campus_architecture_3.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 420: Christ Institute Rajkot (Removed fragile external slider hotlink)');
  }

  else if (col.id === 430) {
    col.website = 'https://sibm.shayonainstitute.edu.in';
    col.address = 'Shayona City, Shayona Complex Road, Behind Vandana Park, Ghatlodia, Ahmedabad - 380061, Gujarat';
    col.phone = '+91 9227076799 / 079-27665354';
    col.email = 'admission@shayonainstitute.edu.in';
    col.affiliation = 'Gujarat Technological University (GTU) & Approved by AICTE, GTU Code 801';
    col.img = '/images/campuses/campus_architecture_4.jpg';
    col.image = '/images/campuses/campus_architecture_4.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 430: Shayona Institute Ahmedabad (Removed fragile upload hotlink)');
  }
});

console.log(`\nModified ${modifiedCount} colleges in Batch 5.`);
const outputData = isWrapped ? { ...data, colleges } : colleges;
fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(outputData, null, 2), 'utf8');
console.log('Successfully wrote updates to public/siteData.json');

