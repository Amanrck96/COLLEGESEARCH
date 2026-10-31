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
  if (col.id === 739) {
    col.name = 'Institute of Technology and Management (ITM), GIDA, Gorakhpur';
    col.website = 'https://itmgkp.edu.in';
    col.address = 'AL-1, Sector-7, GIDA, Gorakhpur - 273209, Uttar Pradesh, India';
    col.phone = '+91-8081209500 / +91-7607777650';
    col.email = 'director@itmgkp.edu.in';
    col.affiliation = 'Dr. A.P.J. Abdul Kalam Technical University (AKTU) & Approved by AICTE, BTEUP';
    col.img = '/images/campuses/campus_architecture_8.jpg';
    col.image = '/images/campuses/campus_architecture_8.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 739: ITM Gorakhpur');
  }

  else if (col.id === 745) {
    col.name = 'Modern Institute of Technology and Management (MITM), Ghaziabad';
    col.website = 'https://mitmgzb.com';
    col.address = 'Near RapidX Metro Station (Duhai), Delhi-Meerut Road, Duhai, Ghaziabad - 201206, Uttar Pradesh, India';
    col.phone = '+91-7291982148 / +91-8958115424';
    col.email = 'mitmghaziabad@gmail.com';
    col.affiliation = 'Dr. A.P.J. Abdul Kalam Technical University (AKTU) & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_5.jpg';
    col.image = '/images/campuses/campus_architecture_5.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 745: MITM Ghaziabad');
  }

  else if (col.id === 777) {
    col.name = 'Institute of Professional Excellence & Management (IPEM), Ghaziabad';
    col.website = 'https://www.ipemgzb.ac.in';
    col.address = 'A-13/1, South Side G.T. Road Industrial Area, NH-9 Bypass, Ghaziabad - 201010, Uttar Pradesh, India';
    col.phone = '+91-9910491472 / +91-9910491474';
    col.email = 'info@ipemgzb.ac.in';
    col.affiliation = 'Dr. A.P.J. Abdul Kalam Technical University (AKTU) & CCSU Meerut, Approved by AICTE, NAAC';
    col.img = '/images/campuses/campus_architecture_6.jpg';
    col.image = '/images/campuses/campus_architecture_6.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 777: IPEM Ghaziabad (Removed fragile collegebatch webp hotlink)');
  }

  else if (col.id === 782) {
    col.name = 'Moti Lal Rastogi School of Management (MLRSM), Lucknow';
    col.website = 'https://mlrsmihm.com';
    col.address = 'D-22 / D-23, UPSIDC Industrial Area, Sarojini Nagar, Kanpur Road, Lucknow - 226008, Uttar Pradesh, India';
    col.phone = '+91-9450650965 / 0522-2476174';
    col.email = 'mlrsm.edu@gmail.com';
    col.affiliation = 'National Council for Hotel Management and Catering Technology (NCHMCT) & IGNOU / AKTU';
    col.img = '/images/campuses/campus_architecture_8.jpg';
    col.image = '/images/campuses/campus_architecture_8.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 782: MLRSM Lucknow (Removed fragile getmyuni hotlink)');
  }

  else if (col.id === 784) {
    col.name = 'Dr. Bhimrao Ambedkar University (DBRAU), Khandari Campus, Agra';
    col.type = 'Public/Government (State University)';
    col.ownership = 'Government';
    col.website = 'https://dbrau.ac.in';
    col.address = 'Khandari Campus, Dr. Bhimrao Ambedkar University, Agra - 282002, Uttar Pradesh, India';
    col.phone = '+91-562-2856446 / 0562-2858669';
    col.email = 'registrar@dbrau.ac.in';
    col.affiliation = 'State University established in 1927, Approved by UGC & AICTE, Accredited by NAAC';
    col.img = '/images/campuses/campus_architecture_1.jpg';
    col.image = '/images/campuses/campus_architecture_1.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 784: DBRAU Agra (Restored State Govt University status & removed BMS College Bangalore photo)');
  }

  else if (col.id === 785) {
    col.name = 'Chhatrapati Shahu Ji Maharaj University (CSJMU), Kanpur';
    col.type = 'Public/Government (State University)';
    col.ownership = 'Government';
    col.website = 'https://csjmu.ac.in';
    col.address = 'Kalyanpur, Kanpur - 208024, Uttar Pradesh, India';
    col.phone = '0512-2246608 / 0512-2246609';
    col.email = 'info@csjmu.ac.in';
    col.affiliation = 'State University established in 1966, UGC Category-I, NAAC A++ Grade';
    col.img = '/images/campuses/campus_architecture_2.jpg';
    col.image = '/images/campuses/campus_architecture_2.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 785: CSJMU Kanpur (Restored State Govt University status & removed Sheila Raheja Bandra photo)');
  }

  else if (col.id === 786) {
    col.name = 'Sparsh Global Business School (SGBS), Greater Noida';
    col.website = 'https://www.sparshgbs.in';
    col.address = 'Plot No. 29/2, Knowledge Park-III, Greater Noida - 201310, Uttar Pradesh, India';
    col.phone = '+91-7669933416 / 1800-121-4800';
    col.email = 'admission@sparshgbs.in';
    col.affiliation = 'Approved by AICTE, Ministry of Education, Govt of India';
    col.img = '/images/campuses/campus_architecture_3.jpg';
    col.image = '/images/campuses/campus_architecture_3.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 786: Sparsh Global Business School Greater Noida');
  }

  else if (col.id === 797) {
    col.name = 'IIF Business School / Indian Institute of Finance (IIF), Greater Noida';
    col.website = 'https://www.iif.edu';
    col.address = 'Plot No. 45A, Knowledge Park III, Greater Noida - 201308, Delhi-NCR, Uttar Pradesh, India';
    col.phone = '+91-9811971002 / 0120-6471004';
    col.email = 'admission@iif.edu';
    col.affiliation = 'Approved by AICTE, Ministry of Education, Govt of India';
    col.img = '/images/campuses/campus_architecture_4.jpg';
    col.image = '/images/campuses/campus_architecture_4.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 797: IIF Business School Greater Noida (Removed fragile careerindia hotlink)');
  }

  else if (col.id === 808) {
    col.name = 'Adhunik Institute of Productivity Management & Research (AGOI), Ghaziabad';
    col.website = 'https://adhunikgroup.org';
    col.address = '9th Km Stone, Delhi-Meerut Road, Opposite Bank of India, Near Bus Stand Duhai, Ghaziabad - 201206, Uttar Pradesh, India';
    col.phone = '+91-9818592787 / +91-9897698822';
    col.email = 'info@adhunikgroup.org';
    col.affiliation = 'Dr. A.P.J. Abdul Kalam Technical University (AKTU) & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_5.jpg';
    col.image = '/images/campuses/campus_architecture_5.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 808: Adhunik Institute Ghaziabad (Fixed Google search URL & removed IIIT Bangalore photo)');
  }

  else if (col.id === 814) {
    col.name = 'S.R.M. Business School (SRMBS), Lucknow';
    col.website = 'https://srmbs.in';
    col.address = 'NH-24, Sitapur Road, Bakshi ka Talab, Lucknow - 226201, Uttar Pradesh, India';
    col.phone = '+91 9793000004 / +91 9793000005';
    col.email = 'info@srgi.in';
    col.affiliation = 'Dr. A.P.J. Abdul Kalam Technical University (AKTU) & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_7.jpg';
    col.image = '/images/campuses/campus_architecture_7.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 814: SRM Business School Lucknow (Removed fragile collegebatch webp hotlink)');
  }
});

console.log(`\nModified ${modifiedCount} colleges in Batch 10.`);
const outputData = isWrapped ? { ...data, colleges } : colleges;
fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(outputData, null, 2), 'utf8');
console.log('Successfully wrote updates to public/siteData.json');

