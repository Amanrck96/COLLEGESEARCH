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
  if (col.id === 601) {
    col.name = 'Sri Shivani Institute of Management, Gangadhara';
    col.website = 'https://satavahana.ac.in';
    col.address = 'Islampoor Village, Gangadhara Mandal, Karimnagar District - 505445, Telangana, India';
    col.phone = '0878-2287400 / +91-9440061234';
    col.email = 'srishivani.mba@gmail.com';
    col.affiliation = 'Satavahana University, Karimnagar & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_6.jpg';
    col.image = '/images/campuses/campus_architecture_6.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 601: Sri Shivani Institute Karimnagar');
  }

  else if (col.id === 602) {
    col.name = 'University College of Management Hyderabad (UCMH), JNTU Hyderabad';
    col.type = 'Public/Government (State University Constituent College)';
    col.ownership = 'Government';
    col.website = 'https://sms.jntuh.ac.in';
    col.address = 'JNTUH Campus, Kukatpally, Hyderabad - 500085, Telangana, India';
    col.phone = '+91-40-23158661 / +91-40-23158664';
    col.email = 'smsdir@jntuh.ac.in';
    col.affiliation = 'Jawaharlal Nehru Technological University Hyderabad (JNTUH) & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_4.jpg';
    col.image = '/images/campuses/campus_architecture_4.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 602: UCMH JNTUH (Restored State University status)');
  }

  else if (col.id === 603) {
    col.name = 'University College of Commerce and Business Management (UCCBM), Osmania University';
    col.type = 'Public/Government (State University Constituent College)';
    col.ownership = 'Government';
    col.website = 'https://uccbm.osmania.ac.in';
    col.address = 'Osmania University Main Road, Osmania University Campus, Hyderabad - 500007, Telangana, India';
    col.phone = '+91 8331997240 / 040-27097693';
    col.email = 'head.businessmgmt@osmania.ac.in';
    col.affiliation = 'Osmania University & Approved by AICTE, NAAC A+ Grade';
    col.img = '/images/campuses/campus_architecture_5.jpg';
    col.image = '/images/campuses/campus_architecture_5.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 603: UCCBM Osmania University (Restored State University status)');
  }

  else if (col.id === 605) {
    col.name = 'Sri Gaayathri College of Management Sciences, Warangal';
    col.website = 'https://www.srigaayathricolleges.in';
    col.address = 'Opp. Government ITI, Mulugu X Roads, Hanamkonda, Warangal - 506002, Telangana, India';
    col.phone = '0870-2558080 / +91-9849285080';
    col.email = 'srigaayathri@gmail.com';
    col.affiliation = 'Kakatiya University (KU, Warangal) & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_2.jpg';
    col.image = '/images/campuses/campus_architecture_2.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 605: Sri Gaayathri College Warangal (Removed Jagran Josh hotlink)');
  }

  else if (col.id === 609) {
    col.name = 'National Institute of Rural Development and Panchayati Raj (NIRDPR), Hyderabad';
    col.type = 'Public/Government (Autonomous Central Apex Institution)';
    col.ownership = 'Government';
    col.website = 'https://nirdpr.org.in';
    col.address = 'National Institute of Rural Development and Panchayati Raj, Rajendranagar, Hyderabad - 500030, Telangana, India';
    col.phone = '+91-40-24008526 / 040-24008441';
    col.email = 'dec@nird.gov.in';
    col.affiliation = 'Ministry of Rural Development, Govt. of India & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_9.jpg';
    col.image = '/images/campuses/campus_architecture_9.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 609: NIRDPR Hyderabad (Restored Central Govt status & removed VJTI Mumbai image)');
  }

  else if (col.id === 614) {
    col.name = 'RKLK PG College, Suryapet';
    col.website = 'http://www.rklkpgcollege.com';
    col.address = 'Behind Gandhi Park, Suryapet, Suryapet District (formerly Nalgonda) - 508213, Telangana, India';
    col.phone = '+91 9963298283 / 08684-221382';
    col.email = 'rklk.mba@gmail.com';
    col.affiliation = 'Approved by AICTE, affiliated with JNTUH / MGU Nalgonda, ICET Code: RKLK';
    col.img = '/images/campuses/campus_architecture_1.jpg';
    col.image = '/images/campuses/campus_architecture_1.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 614: RKLK PG College (Removed Nagarjuna Govt College photo)');
  }

  else if (col.id === 630) {
    col.name = "Aurora's PG College (MBA), Bandlaguda, Hyderabad";
    col.website = 'https://www.apgcc.edu.in';
    col.address = "Aurora's PG College, Bandlaguda, Chandrayangutta, Hyderabad - 500005, Telangana, India";
    col.phone = '040-24440056 / +91-9100000256';
    col.email = 'info@aurora.edu.in';
    col.affiliation = 'Osmania University & Approved by AICTE, ICET Code: APGB';
    col.img = '/images/campuses/campus_architecture_3.jpg';
    col.image = '/images/campuses/campus_architecture_3.jpg';
    modifiedCount++;
    console.log("✓ Updated ID 630: Aurora's PG College Bandlaguda");
  }

  else if (col.id === 631) {
    col.name = 'Mesco Institute of Management and Computer Sciences (MIMCS), Hyderabad';
    col.website = 'https://www.mesco.org.in';
    col.address = 'MESCO Educational Complex, Mustaidpura, Karwan Road, Hyderabad - 500006, Telangana, India';
    col.phone = '040-24828434 / +91 9059060991';
    col.email = 'mescomba@gmail.com';
    col.affiliation = 'Osmania University & Approved by AICTE, ICET Code: MEST';
    col.img = '/images/campuses/campus_architecture_4.jpg';
    col.image = '/images/campuses/campus_architecture_4.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 631: MESCO Institute Hyderabad');
  }

  else if (col.id === 634) {
    col.name = 'Gauthami PG College, Nizamabad';
    col.website = 'https://www.gauthamidegreeandpgcollege.com';
    col.address = 'Pangra (V), Near Madhava Nagar, Hyderabad Road, Nizamabad - 503230, Telangana, India';
    col.phone = '08462-234600 / 08462-220340';
    col.email = 'gauthamidegreecollege@rediffmail.com';
    col.affiliation = 'Telangana University, Nizamabad & Approved by AICTE, ICET Code: GAUM';
    col.img = '/images/campuses/campus_architecture_5.jpg';
    col.image = '/images/campuses/campus_architecture_5.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 634: Gauthami PG College (Removed GITAM drone image)');
  }

  else if (col.id === 649) {
    col.name = 'Presidency College (Autonomous), Chennai';
    col.type = 'Public/Government (Autonomous Government Arts College)';
    col.ownership = 'Government';
    col.website = 'https://www.pcc.ac.in';
    col.address = '#100, Kamarajar Salai, Chepauk, Chennai - 600005, Tamil Nadu, India';
    col.phone = '044-28544894 / 044-28586401';
    col.email = 'contactus@pcc.ac.in';
    col.affiliation = 'University of Madras (Autonomous), NAAC A+ Grade, NIRF Top 3 College in India';
    col.img = '/images/campuses/campus_architecture_6.jpg';
    col.image = '/images/campuses/campus_architecture_6.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 649: Presidency College Chennai (Restored Govt College NIRF #3 status)');
  }
});

console.log(`\nModified ${modifiedCount} colleges in Batch 8.`);
const outputData = isWrapped ? { ...data, colleges } : colleges;
fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(outputData, null, 2), 'utf8');
console.log('Successfully wrote updates to public/siteData.json');

