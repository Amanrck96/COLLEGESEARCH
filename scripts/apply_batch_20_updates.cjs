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
  if (col.id === 1542) {
    col.name = 'Acharya Rajendra Suri Shiksha Mahavidyalaya, Mandsaur';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'https://vikramuniv.ac.in';
    col.address = 'Mandsaur Bypass, Near Guradiya Balaji Temple, Mandsaur - 458001, Madhya Pradesh, India';
    col.phone = '+91-7422-240100 / +91-94251-22110';
    col.email = 'arssm.mandsaur@gmail.com';
    col.affiliation = 'Vikram University, Ujjain & Higher Education Dept MP';
    col.img = '/images/campuses/campus_architecture_4.jpg';
    col.image = '/images/campuses/campus_architecture_4.jpg';
    col.courses = [
      { name: 'MBA', title: 'MBA', duration: '2 Years', fee: '₹40,000/yr', fees: '₹40,000/yr', seats: 120, eligibility: 'Graduation with min 50%' }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1542: Acharya Rajendra Suri College Mandsaur');
  }

  else if (col.id === 1543) {
    col.name = 'Gurukul College of Management, Berasia, Bhopal';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'https://bubhopal.ac.in';
    col.address = '19/2/2 (S)M Tanda, Berasia, District Bhopal - 463106, Madhya Pradesh, India';
    col.phone = '+91-755-2898100 / +91-98260-44221';
    col.email = 'gurukulberasia@gmail.com';
    col.affiliation = 'Barkatullah University (BU), Bhopal, Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_1.jpg';
    col.image = '/images/campuses/campus_architecture_1.jpg';
    col.courses = [
      { name: 'MBA', title: 'MBA', duration: '2 Years', fee: '₹42,000/yr', fees: '₹42,000/yr', seats: 180, eligibility: 'Graduation with min 50%' }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1543: Gurukul College Berasia (CRITICAL FIX: Purged RIIM Pune photo leak & raw Google query)');
  }

  else if (col.id === 1546) {
    col.name = 'AISECT University, Hazaribagh';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'https://aisectuniversityjharkhand.ac.in';
    col.address = 'Village Jonhiya, Post Daru, Hazaribagh - 825313, Jharkhand, India';
    col.phone = '+91-6546-291100 / +91-82522-99990';
    col.email = 'info@aisectuniversityjharkhand.ac.in';
    col.affiliation = 'State Private University under Jharkhand State Legislature, UGC Recognized';
    col.img = '/images/campuses/campus_architecture_2.jpg';
    col.image = '/images/campuses/campus_architecture_2.jpg';
    col.courses = [
      { name: 'MCA', title: 'MCA', duration: '2 Years', fee: '₹48,000/yr', fees: '₹48,000/yr', seats: 60, eligibility: 'Graduation with Mathematics/BCA' },
      { name: 'MBA', title: 'MBA', duration: '2 Years', fee: '₹48,000/yr', fees: '₹48,000/yr', seats: 60, eligibility: 'Graduation with min 50%' }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1546: AISECT University Hazaribagh (Purged collegedunia png)');
  }

  else if (col.id === 1612) {
    col.name = 'Xavier Institute of Social Service (XISS), Ranchi';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'https://www.xiss.ac.in';
    col.address = 'Dr. Camil Bulcke Path (Purulia Road), Post Box No. 7, Ranchi - 834001, Jharkhand, India';
    col.phone = '+91-651-2200873 / +91-89868-80909';
    col.email = 'ranchi@xiss.ac.in';
    col.affiliation = 'Autonomous Jesuit Management Institute (Estd 1955), Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_3.jpg';
    col.image = '/images/campuses/campus_architecture_3.jpg';
    col.courses = [
      { name: 'PGDM (Human Resource Management)', title: 'PGDM (Human Resource Management)', duration: '2 Years', fee: '₹4,45,000/yr', fees: '₹4,45,000/yr', seats: 75, eligibility: 'Graduation with min 50% + CAT/XAT/CMAT' },
      { name: 'PGDM (Rural Management)', title: 'PGDM (Rural Management)', duration: '2 Years', fee: '₹4,45,000/yr', fees: '₹4,45,000/yr', seats: 75, eligibility: 'Graduation with min 50% + CAT/XAT/CMAT' }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1612: XISS Ranchi (Purged collegebatch webp; synced official portal xiss.ac.in)');
  }

  else if (col.id === 1613) {
    col.name = 'Kejriwal Institute of Management and Development Studies (KIMDS), Ranchi';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'https://kimds.ac.in';
    col.address = 'Pindarkom, Namkum, Ranchi - 834010, Jharkhand, India';
    col.phone = '+91-651-2260100 / +91-94311-05566';
    col.email = 'info@kimds.ac.in';
    col.affiliation = 'Approved by AICTE, Ministry of Education, Govt. of India';
    col.img = '/images/campuses/campus_architecture_5.jpg';
    col.image = '/images/campuses/campus_architecture_5.jpg';
    col.courses = [
      { name: 'PGDM', title: 'PGDM', duration: '2 Years', fee: '₹1,50,000/yr', fees: '₹1,50,000/yr', seats: 60, eligibility: 'Graduation with min 50% + MAT/CAT' }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1613: KIMDS Ranchi (Purged collegebatch webp; synced official portal kimds.ac.in)');
  }

  else if (col.id === 1615) {
    col.name = 'Satyendra Narayan Sinha Institute of Business Management (SNSIBM), Ranchi';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'http://www.snsibm.ac.in';
    col.address = 'Hawai Nagar, Road No. 6, Dhurwa, Ranchi - 834003, Jharkhand, India';
    col.phone = '+91-651-2408907 / 0651-2505031';
    col.email = 'snsibm@rediffmail.com';
    col.affiliation = 'Jharkhand University of Technology (JUT), Ranchi, Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_6.jpg';
    col.image = '/images/campuses/campus_architecture_6.jpg';
    col.courses = [
      { name: 'MBA', title: 'MBA', duration: '2 Years', fee: '₹65,000/yr', fees: '₹65,000/yr', seats: 60, eligibility: 'Graduation with min 50%' }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1615: SNSIBM Ranchi (Purged campusoption hotlink & cleaned messy address headers)');
  }

  else if (col.id === 1618) {
    col.name = 'Srinath University, Jamshedpur';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'https://www.srinathuniversity.ac.in';
    col.address = 'Dindli, Adityapur, Jamshedpur - 831013, Jharkhand, India';
    col.phone = '+91-657-2383112 / +91-99343-44444';
    col.email = 'info@srinathuniversity.ac.in';
    col.affiliation = 'State Private University under Jharkhand State Legislature, UGC Recognized';
    col.img = '/images/campuses/campus_architecture_7.jpg';
    col.image = '/images/campuses/campus_architecture_7.jpg';
    col.courses = [
      { name: 'MCA', title: 'MCA', duration: '2 Years', fee: '₹70,000/yr', fees: '₹70,000/yr', seats: 60, eligibility: 'Graduation with min 50%' },
      { name: 'MBA', title: 'MBA', duration: '2 Years', fee: '₹70,000/yr', fees: '₹70,000/yr', seats: 120, eligibility: 'Graduation with min 50%' }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1618: Srinath University Jamshedpur (CRITICAL FIX: Purged Maniben Matunga Mumbai photo leak)');
  }

  else if (col.id === 1619) {
    col.name = 'Netaji Subhas University (NSU), Jamshedpur';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'https://nsuniv.ac.in';
    col.address = 'Pokhari, PO Bhilai Pahari, PS MGM, East Singhbhum, Jamshedpur - 831012, Jharkhand, India';
    col.phone = '+91-657-2233022 / +91-93868-17850';
    col.email = 'info@nsuniv.ac.in';
    col.affiliation = 'State Private University under Jharkhand State Legislature, Approved by AICTE & UGC';
    col.img = '/images/campuses/campus_architecture_8.jpg';
    col.image = '/images/campuses/campus_architecture_8.jpg';
    col.courses = [
      { name: 'MBA', title: 'MBA', duration: '2 Years', fee: '₹75,000/yr', fees: '₹75,000/yr', seats: 120, eligibility: 'Graduation with min 50%' }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1619: Netaji Subhas University Jamshedpur (Purged vidyavision hotlink)');
  }

  else if (col.id === 1620) {
    col.name = 'XLRI - Xavier School of Management, Jamshedpur';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'https://xlri.ac.in';
    col.address = 'C.H. Area (East), Jamshedpur - 831001, Jharkhand, India';
    col.phone = '+91-657-6653333 / 0657-3983333';
    col.email = 'admissions@xlri.ac.in';
    col.affiliation = 'Premier Autonomous Jesuit Management Institute (Estd 1949), Approved by AICTE, Accredited by AACSB & AMBA';
    col.img = '/images/campuses/campus_architecture_9.jpg';
    col.image = '/images/campuses/campus_architecture_9.jpg';
    col.courses = [
      { name: 'PGDM (Human Resource Management)', title: 'PGDM (Human Resource Management)', duration: '2 Years', fee: '₹14,00,000/yr', fees: '₹14,00,000/yr', seats: 180, eligibility: 'Graduation + XAT/GMAT' },
      { name: 'PGDM (Business Management)', title: 'PGDM (Business Management)', duration: '2 Years', fee: '₹14,00,000/yr', fees: '₹14,00,000/yr', seats: 180, eligibility: 'Graduation + XAT/GMAT' }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1620: XLRI Jamshedpur (Synced official domain xlri.ac.in, contacts, and flagship PGDM programs)');
  }

  else if (col.id === 1645) {
    col.name = 'Department of Computer Science and Engineering, Rajiv Gandhi University (RGU), Itanagar';
    col.type = 'Public/Government (Central University Department)';
    col.ownership = 'Government';
    col.website = 'https://rgu.ac.in';
    col.address = 'Rajiv Gandhi University, Rono Hills, Doimukh, Itanagar - 791112, Arunachal Pradesh, India';
    col.phone = '+91-360-2277252 / 0360-2277253';
    col.email = 'registrar@rgu.ac.in';
    col.affiliation = 'Central University established by an Act of Parliament (Act No. 8 of 2006), UGC Recognized';
    col.img = '/images/campuses/campus_architecture_10.jpg';
    col.image = '/images/campuses/campus_architecture_10.jpg';
    col.courses = [
      { name: 'MCA', title: 'MCA', duration: '2 Years', fee: '₹18,000/yr', fees: '₹18,000/yr', seats: 40, eligibility: 'BCA/B.Sc Computer Science or Mathematics' },
      { name: 'M.Tech (Computer Science & Engineering)', title: 'M.Tech (Computer Science & Engineering)', duration: '2 Years', fee: '₹22,000/yr', fees: '₹22,000/yr', seats: 20, eligibility: 'B.Tech/B.E in CSE/IT or MCA/M.Sc with GATE' }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1645: RGU Itanagar (MAJOR STATUS RESTORATION: Restored Central Government University Department status)');
  }
});

console.log(`\nModified ${modifiedCount} colleges in Batch 20.`);
if (modifiedCount === 10) {
  fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(data, null, 2), 'utf8');
  console.log('Successfully saved updates to public/siteData.json');
} else {
  console.error(`ERROR: Expected 10 modifications, got ${modifiedCount}. Aborting save.`);
  process.exit(1);
}
