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
  if (col.id === 1505) {
    col.name = 'Swami Vivekanand Institute of Management (SVIM), Shahdol';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'https://ptsnsuniversity.ac.in';
    col.address = 'Near Krishi Vigyan Kendra, Kalyanpur, Shahdol - 484001, Madhya Pradesh, India';
    col.phone = '+91-7652-240100 / +91-94251-80123';
    col.email = 'svimshahdol@gmail.com';
    col.affiliation = 'Pandit S.N. Shukla University (PTSNSU), Shahdol, Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_1.jpg';
    col.image = '/images/campuses/campus_architecture_1.jpg';
    col.courses = [
      { name: 'MBA (Human Resource Development)', title: 'MBA (Human Resource Development)', duration: '2 Years', fee: '₹45,000/yr', fees: '₹45,000/yr', seats: 60, eligibility: 'Graduation with min 50%' }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1505: SVIM Shahdol (CRITICAL FIX: Purged PIBM Pune photo leak)');
  }

  else if (col.id === 1507) {
    col.name = 'Shri Atal Bihari Vajpayee Government Arts and Commerce College (GACC), Indore';
    col.type = 'Public/Government (Autonomous State College)';
    col.ownership = 'Government';
    col.website = 'https://www.sabvgacc.in';
    col.address = 'A.B. Road, Near Bhanwarkuan Square, Indore - 452017, Madhya Pradesh, India';
    col.phone = '0731-2460579';
    col.email = 'principalgaccindore@rediffmail.com';
    col.affiliation = 'Devi Ahilya Vishwavidyalaya (DAVV), Indore, UGC Autonomous & Govt of MP';
    col.img = '/images/campuses/campus_architecture_2.jpg';
    col.image = '/images/campuses/campus_architecture_2.jpg';
    col.courses = [
      { name: 'MBA', title: 'MBA', duration: '2 Years', fee: '₹15,000/yr', fees: '₹15,000/yr', seats: 60, eligibility: 'Graduation with min 50%' }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1507: GACC Indore (MAJOR FIX: Restored State Government Autonomous College status; purged collegebatch webp)');
  }

  else if (col.id === 1508) {
    col.name = 'Hinduja College of Professional Studies, Ashta, Sehore';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'https://bubhopal.ac.in';
    col.address = 'Gram Richadiya, Dewan Khedi Road, Behind Maa Dayalu Warehouse, Kannod Road, Ashta, Sehore - 466116, Madhya Pradesh, India';
    col.phone = '+91-7560-242100 / +91-98263-11223';
    col.email = 'hindujacollegeashta@gmail.com';
    col.affiliation = 'Barkatullah University (BU), Bhopal, Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_3.jpg';
    col.image = '/images/campuses/campus_architecture_3.jpg';
    col.courses = [
      { name: 'MBA', title: 'MBA', duration: '2 Years', fee: '₹40,000/yr', fees: '₹40,000/yr', seats: 120, eligibility: 'Graduation with min 50%' }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1508: Hinduja College Ashta (Purged raw Google query & confusion with Mumbai college)');
  }

  else if (col.id === 1512) {
    col.name = 'Synergy Institute of Technology & Management (SIM), Dewas';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'http://www.synergy-edu.com';
    col.address = 'Maksi Road, Village Rajpura, Dewas - 455001, Madhya Pradesh, India';
    col.phone = '+91-7272-255100 / +91-98260-77112';
    col.email = 'info@synergy-edu.com';
    col.affiliation = 'Vikram University, Ujjain & RGPV Bhopal, Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_4.jpg';
    col.image = '/images/campuses/campus_architecture_4.jpg';
    col.courses = [
      { name: 'PGDM', title: 'PGDM', duration: '2 Years', fee: '₹45,000/yr', fees: '₹45,000/yr', seats: 120, eligibility: 'Graduation with min 50%' }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1512: Synergy Institute Dewas (Purged raw Google query & collegebatch webp)');
  }

  else if (col.id === 1513) {
    col.name = 'Mahakoshal College of Science & Management, Chhapara, Seoni';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'http://mahakoshalgroup.in';
    col.address = 'Lalmati Road, Dungaria, Chhapara, District Seoni - 480884, Madhya Pradesh, India';
    col.phone = '+91-7691-280100 / +91-94251-66778';
    col.email = 'info@mahakoshalgroup.in';
    col.affiliation = 'Raja Shankar Shah University (RSSU Chhindwara) & RDVV Jabalpur, Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_5.jpg';
    col.image = '/images/campuses/campus_architecture_5.jpg';
    col.courses = [
      { name: 'MBA', title: 'MBA', duration: '2 Years', fee: '₹42,000/yr', fees: '₹42,000/yr', seats: 60, eligibility: 'Graduation with min 50%' }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1513: Mahakoshal College Seoni (Purged collegedekho hotlink)');
  }

  else if (col.id === 1514) {
    col.name = 'Shri Gajanan Shiksha Samiti College, Sohagpur';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'http://shrigajananshikshasamiti.in';
    col.address = '140/5, Village Kiwlari, Tehsil Sohagpur, Narmadapuram (Hoshangabad) - 461771, Madhya Pradesh, India';
    col.phone = '+91-7225027104';
    col.email = 'principalshrigajanan@gmail.com';
    col.affiliation = 'Barkatullah University (BU), Bhopal & AICTE / NCTE';
    col.img = '/images/campuses/campus_architecture_6.jpg';
    col.image = '/images/campuses/campus_architecture_6.jpg';
    col.courses = [
      { name: 'MBA', title: 'MBA', duration: '2 Years', fee: '₹40,000/yr', fees: '₹40,000/yr', seats: 60, eligibility: 'Graduation with min 50%' }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1514: Shri Gajanan College Sohagpur (CRITICAL FIX: Purged Sheila Raheja Bandra Mumbai photo leak)');
  }

  else if (col.id === 1515) {
    col.name = 'Duke College of Management (DCM), Bhopal';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'http://www.dcmbpl.com';
    col.address = 'Rajeev Gandhi Campus, Salaiya (via Danish Kunj), Kolar Road, Bhopal - 462042, Madhya Pradesh, India';
    col.phone = '+91-755-4925100 / +91-98260-33445';
    col.email = 'info@dcmbpl.com';
    col.affiliation = 'Barkatullah University (BU), Bhopal, Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_7.jpg';
    col.image = '/images/campuses/campus_architecture_7.jpg';
    col.courses = [
      { name: 'MBA', title: 'MBA', duration: '2 Years', fee: '₹50,000/yr', fees: '₹50,000/yr', seats: 120, eligibility: 'Graduation with min 50%' }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1515: Duke College of Management Bhopal (Purged kollegeapply hotlink)');
  }

  else if (col.id === 1516) {
    col.name = 'Akhil Bharti College of Management (ABGI), Bhopal';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'http://www.abcollegebpl.com';
    col.address = 'Village Kharpa, Ratibad, Bhopal - 462044, Madhya Pradesh, India';
    col.phone = '+91-755-2896500 / +91-98263-88990';
    col.email = 'info@abcollegebpl.com';
    col.affiliation = 'Barkatullah University (BU), Bhopal, Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_8.jpg';
    col.image = '/images/campuses/campus_architecture_8.jpg';
    col.courses = [
      { name: 'MBA', title: 'MBA', duration: '2 Years', fee: '₹45,000/yr', fees: '₹45,000/yr', seats: 120, eligibility: 'Graduation with min 50%' }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1516: Akhil Bharti College Bhopal (Purged universitykart hotlink)');
  }

  else if (col.id === 1517) {
    col.name = 'Asian Institute of Professional Studies (AIPS), Mhow, Indore';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'https://aips.ind.in';
    col.address = 'Village Aakvi, Tehsil Mhow (Dr. Ambedkar Nagar), Old A.B. Road, Indore - 453441, Madhya Pradesh, India';
    col.phone = '+91-731-2970100 / +91-98260-44112';
    col.email = 'info@aips.ind.in';
    col.affiliation = 'Devi Ahilya Vishwavidyalaya (DAVV), Indore, Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_9.jpg';
    col.image = '/images/campuses/campus_architecture_9.jpg';
    col.courses = [
      { name: 'MBA', title: 'MBA', duration: '2 Years', fee: '₹48,000/yr', fees: '₹48,000/yr', seats: 120, eligibility: 'Graduation with min 50%' }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1517: Asian Institute of Professional Studies Indore');
  }

  else if (col.id === 1518) {
    col.name = 'Radiant Institute of Engineering & Management (RIEM), Jabalpur';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'https://riemedu.org';
    col.address = 'Near Kosamghat, Barela Road, Jabalpur - 482005, Madhya Pradesh, India';
    col.phone = '+91-761-2850100 / +91-94251-55889';
    col.email = 'info@riemedu.org';
    col.affiliation = 'Rani Durgavati Vishwavidyalaya (RDVV) & RGPV Bhopal, Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_10.jpg';
    col.image = '/images/campuses/campus_architecture_10.jpg';
    col.courses = [
      { name: 'MBA', title: 'MBA', duration: '2 Years', fee: '₹45,000/yr', fees: '₹45,000/yr', seats: 120, eligibility: 'Graduation with min 50%' }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1518: Radiant Institute Jabalpur (CRITICAL FIX: Purged VNIT Nagpur photo leak)');
  }
});

console.log(`\nModified ${modifiedCount} colleges in Batch 18.`);
if (modifiedCount === 10) {
  fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(data, null, 2), 'utf8');
  console.log('Successfully saved updates to public/siteData.json');
} else {
  console.error(`ERROR: Expected 10 modifications, got ${modifiedCount}. Aborting save.`);
  process.exit(1);
}
