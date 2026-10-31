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
  if (col.id === 1667) {
    col.name = 'Centre for Management Studies (CMS), Dibrugarh University';
    col.type = 'Public/Government (State University Department)';
    col.ownership = 'Government';
    col.website = 'https://cmsdu.org';
    col.address = 'Dibrugarh University Campus, NH-37, Dibrugarh - 786004, Assam, India';
    col.phone = '+91-373-2370045 / 0373-2370243';
    col.email = 'contact@cmsdu.org';
    col.affiliation = 'Dibrugarh University (Act VIII of 1965, Assam Legislative Assembly), Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_1.jpg';
    col.image = '/images/campuses/campus_architecture_1.jpg';
    col.courses = [
      { name: 'MBA (Full Time)', title: 'MBA (Full Time)', duration: '2 Years', fee: '₹75,000/yr', fees: '₹75,000/yr', seats: 60, eligibility: 'Graduation with min 50% + MAT/CAT/CMAT' }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1667: CMS Dibrugarh University (MAJOR FIX: Restored State Govt University Dept status; purged Chetana Bandra photo leak)');
  }

  else if (col.id === 1692) {
    col.name = 'GCC Centre of Management Studies, Gauhati Commerce College';
    col.type = 'Public/Government-Aided (Provincialized College)';
    col.ownership = 'Government-Aided';
    col.website = 'https://gauhaticommercecollege.in';
    col.address = 'Gauhati Commerce College, R.G. Baruah Road, Guwahati - 781021, Assam, India';
    col.phone = '+91-361-2410064 / +91-98640-23456';
    col.email = 'gccmanagement@gmail.com';
    col.affiliation = 'Gauhati University, Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_2.jpg';
    col.image = '/images/campuses/campus_architecture_2.jpg';
    col.courses = [
      { name: 'MBA', title: 'MBA', duration: '2 Years', fee: '₹60,000/yr', fees: '₹60,000/yr', seats: 60, eligibility: 'Graduation with min 50%' }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1692: GCC CMS Guwahati (CRITICAL FIX: Purged PES Bangalore photo leak)');
  }

  else if (col.id === 1697) {
    col.name = 'Don Bosco Institute of Management (DBIM), Guwahati';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'https://dbim.ac.in';
    col.address = 'Joypur, Kharghuli, Guwahati - 781004, Assam, India';
    col.phone = '+91-361-2600005 / +91-86383-44991';
    col.email = 'admin@dbim.ac.in';
    col.affiliation = 'Assam Don Bosco University & AICTE Approved';
    col.img = '/images/campuses/campus_architecture_3.jpg';
    col.image = '/images/campuses/campus_architecture_3.jpg';
    col.courses = [
      { name: 'MBA', title: 'MBA', duration: '2 Years', fee: '₹1,10,000/yr', fees: '₹1,10,000/yr', seats: 60, eligibility: 'Graduation with min 50% + National Entrance' }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1697: DBIM Guwahati (CRITICAL FIX: Purged BMS Bangalore photo leak)');
  }

  else if (col.id === 1701) {
    col.name = 'Assam Institute of Management (AIM), Guwahati';
    col.type = 'Public/Government (Autonomous State Government Institute)';
    col.ownership = 'Government';
    col.website = 'https://aimguwahati.edu.in';
    col.address = 'Vigyan Path, Paschim Boragaon, Near Judicial Academy, Guwahati - 781035, Assam, India';
    col.phone = '+91-361-2972230 / +91-94351-46487';
    col.email = 'director@aimguwahati.edu.in';
    col.affiliation = 'Government of Assam Autonomous Society, Affiliated with Assam Science & Technology University (ASTU), Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_4.jpg';
    col.image = '/images/campuses/campus_architecture_4.jpg';
    col.courses = [
      { name: 'MBA', title: 'MBA', duration: '2 Years', fee: '₹1,25,000/yr', fees: '₹1,25,000/yr', seats: 60, eligibility: 'Graduation with min 50% + CAT/MAT/CMAT' }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1701: AIM Guwahati (MAJOR FIX: Restored State Govt Autonomous status; purged Bunts Sangha Mumbai leak)');
  }

  else if (col.id === 1709) {
    col.name = 'North Eastern Regional Institute of Management (NERIM), Guwahati';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'https://nerimindia.org';
    col.address = 'Padma Nath Sarmah Bhawan, Joyanagar, Khanapara, Guwahati - 781022, Assam, India';
    col.phone = '+91-361-2234990 / +91-98640-51111';
    col.email = 'info@nerimindia.org';
    col.affiliation = 'Dibrugarh University & Gauhati University, Approved by AICTE & BCI';
    col.img = '/images/campuses/campus_architecture_9.jpg';
    col.image = '/images/campuses/campus_architecture_9.jpg';
    col.courses = [
      { name: 'MBA', title: 'MBA', duration: '2 Years', fee: '₹95,000/yr', fees: '₹95,000/yr', seats: 120, eligibility: 'Graduation with min 50%' }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1709: NERIM Guwahati (Synced official portal nerimindia.org)');
  }

  else if (col.id === 1746) {
    col.name = 'Pt. Mohan Lal SD Business School (PML SD BS), Chandigarh';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'https://pmlsdbs.ac.in';
    col.address = 'Sector 32-C, Chandigarh - 160030, India';
    col.phone = '+91-172-4912400 / 0172-4912401';
    col.email = 'info@pmlsdbs.ac.in';
    col.affiliation = 'Approved by AICTE, Ministry of Education, Govt. of India';
    col.img = '/images/campuses/campus_architecture_5.jpg';
    col.image = '/images/campuses/campus_architecture_5.jpg';
    col.courses = [
      { name: 'PGDM', title: 'PGDM', duration: '2 Years', fee: '₹2,50,000/yr', fees: '₹2,50,000/yr', seats: 120, eligibility: 'Graduation with min 50% + CAT/MAT/CMAT' }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1746: PML SD BS Chandigarh (Purged collegebatch webp; synced pmlsdbs.ac.in)');
  }

  else if (col.id === 1763) {
    col.name = 'Regional Institute of Cooperative Management (RICM), Chandigarh';
    col.type = 'Public/Government (Central Government Autonomous Institute)';
    col.ownership = 'Government';
    col.website = 'https://ricmchd.org';
    col.address = 'Sector 32-C, Chandigarh - 160030, India';
    col.phone = '+91-172-2600557 / 0172-2609071';
    col.email = 'ricmchd@gmail.com';
    col.affiliation = 'National Council for Cooperative Training (NCCT), Ministry of Cooperation, Government of India, Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_6.jpg';
    col.image = '/images/campuses/campus_architecture_6.jpg';
    col.courses = [
      { name: 'PGDM (Agri-Business Management)', title: 'PGDM (Agri-Business Management)', duration: '2 Years', fee: '₹60,000/yr', fees: '₹60,000/yr', seats: 30, eligibility: 'Graduation in Agriculture / Allied or Any Stream' }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1763: RICM Chandigarh (MAJOR FIX: Restored Central Government status; purged Bunts Sangha Mumbai photo leak)');
  }

  else if (col.id === 1767) {
    col.name = 'Department of Management Studies, Islamia College of Science and Commerce, Srinagar';
    col.type = 'Public/Government (Autonomous State College)';
    col.ownership = 'Government';
    col.website = 'https://www.islamiacollege.edu.in';
    col.address = 'Islamia College Campus, Hawal, Srinagar - 190002, Jammu & Kashmir, India';
    col.phone = '+91-194-2426819 / 0194-2429014';
    col.email = 'principal@islamiacollege.edu.in';
    col.affiliation = 'Higher Education Department, Government of Jammu & Kashmir, UGC Autonomous College, Affiliated with University of Kashmir';
    col.img = '/images/campuses/campus_architecture_7.jpg';
    col.image = '/images/campuses/campus_architecture_7.jpg';
    col.courses = [
      { name: 'MBA (General Management)', title: 'MBA (General Management)', duration: '2 Years', fee: '₹35,000/yr', fees: '₹35,000/yr', seats: 60, eligibility: 'Graduation with min 50%' }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1767: Islamia College Srinagar (MAJOR FIX: Restored J&K State Govt Autonomous status; purged Bunts Sangha Mumbai leak)');
  }

  else if (col.id === 1771) {
    col.name = 'Department of Computer Sciences, University of Kashmir, Srinagar';
    col.type = 'Public/Government (State University Department)';
    col.ownership = 'Government';
    col.website = 'https://kashmiruniversity.net';
    col.address = 'Hazratbal, Srinagar - 190006, Jammu & Kashmir, India';
    col.phone = '+91-194-2272006 / 0194-2272317';
    col.email = 'cs@kashmiruniversity.ac.in';
    col.affiliation = 'University of Kashmir (NAAC Grade A+ State Government University), Approved by UGC & AICTE';
    col.img = '/images/campuses/campus_architecture_8.jpg';
    col.image = '/images/campuses/campus_architecture_8.jpg';
    col.courses = [
      { name: 'MCA', title: 'MCA', duration: '2 Years', fee: '₹22,000/yr', fees: '₹22,000/yr', seats: 60, eligibility: 'BCA/B.Sc IT or Computer Science with min 50%' }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1771: University of Kashmir Dept of CS (MAJOR FIX: Restored State Govt status; purged NIT Srinagar photo hotlink)');
  }

  else if (col.id === 1793) {
    col.name = 'The Business School (TBS), University of Jammu';
    col.type = 'Public/Government (State University Department)';
    col.ownership = 'Government';
    col.website = 'https://tbs.jammuuniversity.ac.in';
    col.address = 'Baba Saheb Ambedkar Road, New Campus, University of Jammu, Jammu - 180006, Jammu & Kashmir, India';
    col.phone = '+91-191-2452827 / 0191-2435248';
    col.email = 'director.tbsju@gmail.com';
    col.affiliation = 'University of Jammu (NAAC Grade A+ State Government University), Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_10.jpg';
    col.image = '/images/campuses/campus_architecture_10.jpg';
    col.courses = [
      { name: 'MBA', title: 'MBA', duration: '2 Years', fee: '₹45,000/yr', fees: '₹45,000/yr', seats: 60, eligibility: 'Graduation with min 50% + CAT/AIMA MAT' }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1793: The Business School University of Jammu (MAJOR FIX: Restored State Govt status; purged collegedunia hotlink)');
  }
});

console.log(`\nModified ${modifiedCount} colleges in Batch 21.`);
if (modifiedCount === 10) {
  fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(data, null, 2), 'utf8');
  console.log('Successfully saved updates to public/siteData.json');
} else {
  console.error(`ERROR: Expected 10 modifications, got ${modifiedCount}. Aborting save.`);
  process.exit(1);
}

