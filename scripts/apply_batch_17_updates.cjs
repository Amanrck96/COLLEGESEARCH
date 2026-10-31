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
  if (col.id === 1495) {
    col.name = 'BM Professional Institute (BM Group of Colleges), Indore';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'https://www.bmcollege.ac.in';
    col.address = 'Village Gokanya, Tehsil Mhow (Dr. Ambedkar Nagar), Indore - 453441, Madhya Pradesh, India';
    col.phone = '+91-731-4206500 / +91-98260-26463';
    col.email = 'info@bmcollege.ac.in';
    col.affiliation = 'Devi Ahilya Vishwavidyalaya (DAVV), Indore, Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_8.jpg';
    col.image = '/images/campuses/campus_architecture_8.jpg';
    col.courses = [
      { name: 'MBA', title: 'MBA', duration: '2 Years', fee: '₹50,000/yr', fees: '₹50,000/yr', seats: 120, eligibility: 'Graduation with min 50%' }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1495: BM Professional Institute Indore');
  }

  else if (col.id === 1496) {
    col.name = 'Aspire Institute of Management (AIM), Indore';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'http://aspireinstitute.co.in';
    col.address = '453 Khandwa Road, Near Bilawali Lake, Indore - 452020, Madhya Pradesh, India';
    col.phone = '+91-731-2877000 / +91-98263-22223';
    col.email = 'info@aspireinstitute.co.in';
    col.affiliation = 'Devi Ahilya Vishwavidyalaya (DAVV), Indore, Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_3.jpg';
    col.image = '/images/campuses/campus_architecture_3.jpg';
    col.courses = [
      { name: 'MBA', title: 'MBA', duration: '2 Years', fee: '₹45,000/yr', fees: '₹45,000/yr', seats: 60, eligibility: 'Graduation with min 50%' }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1496: Aspire Institute of Management Indore (Purged aggregator hotlink)');
  }

  else if (col.id === 1497) {
    col.name = 'Idyllic Institute of Management, Indore';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'https://www.idyllicinstituteofmanagement.com';
    col.address = 'Gendalal Bam Parisar, Rau-Pithampur Road, Rau, Indore - 453331, Madhya Pradesh, India';
    col.phone = '+91-731-2856600 / +91-88899-97424';
    col.email = 'info@idyllicinstituteofmanagement.com';
    col.affiliation = 'Devi Ahilya Vishwavidyalaya (DAVV), Indore, Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_1.jpg';
    col.image = '/images/campuses/campus_architecture_1.jpg';
    col.courses = [
      { name: 'MBA', title: 'MBA', duration: '2 Years', fee: '₹65,000/yr', fees: '₹65,000/yr', seats: 120, eligibility: 'Graduation with min 50%' }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1497: Idyllic Institute Indore (Purged raw Google query & collegebatch webp)');
  }

  else if (col.id === 1498) {
    col.name = 'Gyansagar Academy College, Gadarwara, Narsinghpur';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'https://gyansagaracademy.in';
    col.address = 'Khasra No. 211/8 & 211/9, Village Bhamori, Tehsil Gadarwara, Narsinghpur - 487551, Madhya Pradesh, India';
    col.phone = '+91-7791-252555 / +91-94251-68361';
    col.email = 'gyansagaracademy@gmail.com';
    col.affiliation = 'Rani Durgavati Vishwavidyalaya (RDVV), Jabalpur';
    col.img = '/images/campuses/campus_architecture_5.jpg';
    col.image = '/images/campuses/campus_architecture_5.jpg';
    col.courses = [
      { name: 'MBA', title: 'MBA', duration: '2 Years', fee: '₹40,000/yr', fees: '₹40,000/yr', seats: 60, eligibility: 'Graduation with min 50%' }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1498: Gyansagar Academy College Narsinghpur');
  }

  else if (col.id === 1499) {
    col.name = 'Adarsh College of Management, Phanda, Bhopal';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'https://bubhopal.ac.in';
    col.address = 'Khasra No. 343/2, 343/3, 345/1/2K, Janpad Panchayat Phanda, Bhopal - 462030, Madhya Pradesh, India';
    col.phone = '+91-755-2896345 / +91-98260-55667';
    col.email = 'info@adarsh.ac.in';
    col.affiliation = 'Barkatullah University (BU), Bhopal, Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_7.jpg';
    col.image = '/images/campuses/campus_architecture_7.jpg';
    col.courses = [
      { name: 'MBA', title: 'MBA', duration: '2 Years', fee: '₹45,000/yr', fees: '₹45,000/yr', seats: 60, eligibility: 'Graduation with min 50%' }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1499: Adarsh College of Management Bhopal');
  }

  else if (col.id === 1500) {
    col.name = 'Indore Mahavidyalaya Institute of Management, Indore';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'https://indoremahavidyalaya.in';
    col.address = 'Gram Jambudi Hapsi, Airport Road, Indore - 453112, Madhya Pradesh, India';
    col.phone = '+91-731-2892222 / +91-98260-12345';
    col.email = 'info@indoremahavidyalaya.in';
    col.affiliation = 'Devi Ahilya Vishwavidyalaya (DAVV), Indore, Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_2.jpg';
    col.image = '/images/campuses/campus_architecture_2.jpg';
    col.courses = [
      { name: 'MBA', title: 'MBA', duration: '2 Years', fee: '₹48,000/yr', fees: '₹48,000/yr', seats: 60, eligibility: 'Graduation with min 50%' }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1500: Indore Mahavidyalaya (CRITICAL FIX: Purged Chetana Bandra Mumbai photo leak)');
  }

  else if (col.id === 1501) {
    col.name = 'Shri Guru Sandipani Institute of Management, Ujjain';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'https://www.sgsitsujjain.com';
    col.address = 'Village Surasa, Agar Road, Ujjain - 456006, Madhya Pradesh, India';
    col.phone = '+91-734-2525111 / +91-98263-44555';
    col.email = 'info@sgsitsujjain.com';
    col.affiliation = 'Vikram University, Ujjain, Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_4.jpg';
    col.image = '/images/campuses/campus_architecture_4.jpg';
    col.courses = [
      { name: 'MBA', title: 'MBA', duration: '2 Years', fee: '₹45,000/yr', fees: '₹45,000/yr', seats: 60, eligibility: 'Graduation with min 50%' }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1501: Shri Guru Sandipani Institute Ujjain (CRITICAL FIX: Purged Sheila Raheja Bandra Mumbai photo leak)');
  }

  else if (col.id === 1502) {
    col.name = 'Veer College of Management, Vidisha';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'https://bubhopal.ac.in';
    col.address = 'Gram Dholkhedi, Vidisha - 464001, Madhya Pradesh, India';
    col.phone = '+91-7592-250100 / +91-94254-33211';
    col.email = 'veercollegevidisha@gmail.com';
    col.affiliation = 'Barkatullah University (BU), Bhopal, Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_9.jpg';
    col.image = '/images/campuses/campus_architecture_9.jpg';
    col.courses = [
      { name: 'MBA', title: 'MBA', duration: '2 Years', fee: '₹40,000/yr', fees: '₹40,000/yr', seats: 60, eligibility: 'Graduation with min 50%' }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1502: Veer College of Management Vidisha');
  }

  else if (col.id === 1503) {
    col.name = 'Neotech Institute of Management Studies, Bhopal';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'https://bubhopal.ac.in';
    col.address = 'Village Amla, Near Badjhiri, Ratibad, Tehsil Huzur, Bhopal - 462044, Madhya Pradesh, India';
    col.phone = '+91-755-2740500';
    col.email = 'nimsbhopal@gmail.com';
    col.affiliation = 'Barkatullah University (BU), Bhopal, Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_6.jpg';
    col.image = '/images/campuses/campus_architecture_6.jpg';
    col.courses = [
      { name: 'MBA', title: 'MBA', duration: '2 Years', fee: '₹42,000/yr', fees: '₹42,000/yr', seats: 60, eligibility: 'Graduation with min 50%' }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1503: Neotech Institute Bhopal (Purged raw Google query & collegedekho hotlink)');
  }

  else if (col.id === 1504) {
    col.name = 'Sir Atma Ram Institute of Management and Technology, Jabalpur';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'http://sariptjbp.com';
    col.address = 'Mouza Manegaon, P.H.N. 30, N.B. 379, R.N.M., Jabalpur - 482051, Madhya Pradesh, India';
    col.phone = '+91-761-2675000 / +91-94251-51200';
    col.email = 'info@sariptjbp.com';
    col.affiliation = 'Rani Durgavati Vishwavidyalaya (RDVV), Jabalpur, Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_10.jpg';
    col.image = '/images/campuses/campus_architecture_10.jpg';
    col.courses = [
      { name: 'MBA', title: 'MBA', duration: '2 Years', fee: '₹45,000/yr', fees: '₹45,000/yr', seats: 60, eligibility: 'Graduation with min 50%' }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1504: Sir Atma Ram Institute Jabalpur (CRITICAL FIX: Purged PIBM Pune photo leak & fixed mojibake)');
  }
});

console.log(`\nModified ${modifiedCount} colleges in Batch 17.`);
if (modifiedCount === 10) {
  fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(data, null, 2), 'utf8');
  console.log('Successfully saved updates to public/siteData.json');
} else {
  console.error(`ERROR: Expected 10 modifications, got ${modifiedCount}. Aborting save.`);
  process.exit(1);
}
