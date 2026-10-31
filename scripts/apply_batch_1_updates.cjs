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
  if (col.id === 1439) {
    col.website = 'https://gyanodayanmh.in';
    col.phone = '+91-9827550959';
    col.email = 'gyanodayanmh@gmail.com';
    col.address = 'Village Kanawati, Mhow-Nasirabad Road, Neemuch - 458441, MP';
    col.affiliation = 'Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal & AICTE';
    col.img = '/images/campuses/campus_architecture_9.jpg';
    col.image = '/images/campuses/campus_architecture_9.jpg';
    if (Array.isArray(col.courses)) {
      col.courses.forEach(c => {
        if (/mca|master of computer/i.test(c.title || '')) {
          c.duration = '2 Years';
          c.fees = '₹44,000/Year';
        }
      });
    }
    modifiedCount++;
    console.log('✓ Updated ID 1439: Gyanodaya Neemuch');
  }

  else if (col.id === 165) {
    col.ownership = 'Private';
    col.type = 'Private Deemed-to-be-University';
    col.isDuplicate = true;
    col.canonicalId = 233;
    col.website = 'https://www.sibm.edu/';
    modifiedCount++;
    console.log('✓ Updated ID 165: SIBM Pune (Marked Duplicate)');
  }

  else if (col.id === 233) {
    col.ownership = 'Private';
    col.type = 'Private Deemed-to-be-University';
    col.isCanonical = true;
    col.website = 'https://www.sibm.edu/';
    col.address = 'Gram Lavale, Tal Mulshi, Pune - 412115, Maharashtra';
    col.phone = '020-28116000';
    col.email = 'symbiosis@sibm.edu';
    col.img = '/images/campuses/campus_architecture_4.jpg';
    col.image = '/images/campuses/campus_architecture_4.jpg';
    if (Array.isArray(col.courses)) {
      col.courses.forEach(c => {
        if (/mba/i.test(c.title || '')) {
          c.duration = '2 Years';
        }
      });
    }
    modifiedCount++;
    console.log('✓ Updated ID 233: SIBM Pune (Canonical)');
  }

  else if (col.id === 12660) {
    col.state = 'Delhi';
    col.location = 'Delhi';
    col.address = 'Shahbad Daulatpur, Main Bawana Road, Delhi - 110042';
    col.website = 'https://www.dtu.ac.in';
    col.img = '/images/campuses/delhi_technological_university.jpg';
    col.image = '/images/campuses/delhi_technological_university.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 12660: DTU Delhi');
  }

  else if (col.id === 821) {
    col.website = 'http://mpitmkanina.com/';
    col.address = 'VPO Dhanaunda, Kanina - Ch. Dadri Road, Mahendergarh, Haryana - 123027';
    col.phone = '+91-9812981215';
    col.email = 'mpitm.kanina@gmail.com';
    col.affiliation = 'Maharshi Dayanand University (MDU), Rohtak & AICTE';
    col.img = '/images/campuses/campus_architecture_8.jpg';
    col.image = '/images/campuses/campus_architecture_8.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 821: MPITM Kanina');
  }

  else if (col.id === 10811) {
    col.website = 'https://www.scas.ac.in';
    col.address = 'Thuraiyur Road, Perambalur - 621212, Tamil Nadu';
    col.phone = '04328-220672';
    col.email = 'principal.scas@dsgroupmail.com';
    col.affiliation = 'Bharathidasan University, Tiruchirappalli & AICTE';
    col.img = '/images/campuses/srinivasan_perambalur.jpg';
    col.image = '/images/campuses/srinivasan_perambalur.jpg';
    if (Array.isArray(col.courses)) {
      col.courses.forEach(c => {
        if (/mba/i.test(c.title || '')) {
          c.duration = '2 Years';
        }
      });
    }
    modifiedCount++;
    console.log('✓ Updated ID 10811: Srinivasan College MBA');
  }

  else if (col.id === 10800) {
    col.website = 'https://kcmt.in';
    col.address = '14th KM Stone, Pilibhit Road, Bareilly - 243122, Uttar Pradesh';
    col.phone = '+91-8081332211';
    col.email = 'admission@kcmt.in';
    col.affiliation = 'Dr. A.P.J. Abdul Kalam Technical University (AKTU) / MJPRU Bareilly & AICTE';
    col.img = '/images/campuses/campus_architecture_6.jpg';
    col.image = '/images/campuses/campus_architecture_6.jpg';
    if (Array.isArray(col.courses)) {
      col.courses.forEach(c => {
        if (/mba|mca/i.test(c.title || '')) {
          c.duration = '2 Years';
        }
      });
    }
    modifiedCount++;
    console.log('✓ Updated ID 10800: KCMT Bareilly');
  }

  else if (col.id === 12) {
    col.state = 'Delhi';
    col.location = 'Hauz Khas, New Delhi';
    col.address = 'Hauz Khas, New Delhi - 110016, Delhi, India';
    col.affiliation = 'Autonomous Institute of National Importance (Institutes of Technology Act)';
    col.img = '/images/campuses/campus_iit_delhi.jpg';
    col.image = '/images/campuses/campus_iit_delhi.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 12: IIT Delhi');
  }

  else if (col.id === 56) {
    col.website = 'https://www.iimcal.ac.in';
    col.address = 'Diamond Harbour Road, Joka, Kolkata - 700104, West Bengal';
    col.phone = '+91-33-2467-8300';
    col.img = '/images/campuses/iim_calcutta.jpg';
    col.image = '/images/campuses/iim_calcutta.jpg';
    if (Array.isArray(col.courses)) {
      col.courses.forEach(c => {
        if (/mba/i.test(c.title || '')) {
          c.duration = '2 Years';
        }
      });
    }
    modifiedCount++;
    console.log('✓ Updated ID 56: IIM Calcutta');
  }

  else if (col.id === 79) {
    col.website = 'https://www.tjohncollege.com/';
    col.phone = '+91-80-4903 0555';
    col.email = 'info@tjohngroup.com';
    col.affiliation = 'Bangalore University & AICTE';
    col.address = 'No. 88/1, Kammanahalli, Gottigere, Bannerghatta Road, Bengaluru - 560083, Karnataka';
    col.img = '/images/campuses/campus_architecture_3.jpg';
    col.image = '/images/campuses/campus_architecture_3.jpg';
    if (Array.isArray(col.courses)) {
      col.courses.forEach(c => {
        if (/mba/i.test(c.title || '')) {
          c.duration = '2 Years';
        }
      });
    }
    modifiedCount++;
    console.log('✓ Updated ID 79: T John College');
  }
});

console.log(`Writing verified updates back to ${SITE_DATA_PATH}...`);
fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(data, null, 2), 'utf8');
console.log(`Successfully updated ${modifiedCount} colleges in siteData.json!`);

