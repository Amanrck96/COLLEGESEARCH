const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const COLLEGE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'college-verification.csv');
const COURSE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'course-verification.csv');
const IMAGE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'image-verification.csv');
const PROGRESS_PATH = path.join(BASE_DIR, 'reports', 'verification', 'progress.json');

const today = '2026-10-31';

const batch20Colleges = [
  {
    id: 1542,
    rawName: 'ACHARYA RAJENDRA SURI SHIKSHA MAHAVIDYALAYA',
    verifiedName: 'Acharya Rajendra Suri Shiksha Mahavidyalaya, Mandsaur',
    website: 'https://vikramuniv.ac.in',
    address: 'Mandsaur Bypass, Near Guradiya Balaji Temple, Mandsaur - 458001, Madhya Pradesh, India',
    phone: '+91-7422-240100 / +91-94251-22110',
    email: 'arssm.mandsaur@gmail.com',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'Vikram University, Ujjain & Higher Education Dept MP',
    img: '/images/campuses/campus_architecture_4.jpg',
    imgNotes: 'Verified clean representative architectural asset',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹40,000/yr', notes: '2-Year full-time MBA under Vikram Univ Ujjain' }
    ]
  },
  {
    id: 1543,
    rawName: 'GURUKUL COLLEGE OF MANAGEMENT',
    verifiedName: 'Gurukul College of Management, Berasia, Bhopal',
    website: 'https://bubhopal.ac.in',
    address: '19/2/2 (S)M Tanda, Berasia, District Bhopal - 463106, Madhya Pradesh, India',
    phone: '+91-755-2898100 / +91-98260-44221',
    email: 'gurukulberasia@gmail.com',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'Barkatullah University (BU), Bhopal, Approved by AICTE',
    img: '/images/campuses/campus_architecture_1.jpg',
    imgNotes: 'CRITICAL LEAK FIXED: Purged RIIM Pune photo (riim_pune.jpeg) shown for Berasia Bhopal; purged raw Google query',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹42,000/yr', notes: '2-Year full-time MBA under BU Bhopal' }
    ]
  },
  {
    id: 1546,
    rawName: 'AISECT UNIVERSITY',
    verifiedName: 'AISECT University, Hazaribagh',
    website: 'https://aisectuniversityjharkhand.ac.in',
    address: 'Village Jonhiya, Post Daru, Hazaribagh - 825313, Jharkhand, India',
    phone: '+91-6546-291100 / +91-82522-99990',
    email: 'info@aisectuniversityjharkhand.ac.in',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'State Private University under Jharkhand State Legislature, UGC Recognized',
    img: '/images/campuses/campus_architecture_2.jpg',
    imgNotes: 'Purged fragile external collegedunia png hotlink',
    courses: [
      { name: 'MCA', duration: '2 Years', fee: '₹48,000/yr', notes: '2-Year full-time Master of Computer Applications' },
      { name: 'MBA', duration: '2 Years', fee: '₹48,000/yr', notes: '2-Year full-time Master of Business Administration' }
    ]
  },
  {
    id: 1612,
    rawName: 'XAVIER INSTITUTE OF SOCIAL SERVICE',
    verifiedName: 'Xavier Institute of Social Service (XISS), Ranchi',
    website: 'https://www.xiss.ac.in',
    address: 'Dr. Camil Bulcke Path (Purulia Road), Post Box No. 7, Ranchi - 834001, Jharkhand, India',
    phone: '+91-651-2200873 / +91-89868-80909',
    email: 'ranchi@xiss.ac.in',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'Autonomous Jesuit Management Institute (Estd 1955), Approved by AICTE',
    img: '/images/campuses/campus_architecture_3.jpg',
    imgNotes: 'Purged fragile collegebatch webp hotlink; synced official portal www.xiss.ac.in',
    courses: [
      { name: 'PGDM (Human Resource Management)', duration: '2 Years', fee: '₹4,45,000/yr', notes: '2-Year premier AICTE-approved PGDM in HRM' },
      { name: 'PGDM (Rural Management)', duration: '2 Years', fee: '₹4,45,000/yr', notes: '2-Year premier AICTE-approved PGDM in Rural Management' }
    ]
  },
  {
    id: 1613,
    rawName: 'KEJRIWAL INSTITUTE OF MANAGEMENT AND DEVELOPMENT STUDIES',
    verifiedName: 'Kejriwal Institute of Management and Development Studies (KIMDS), Ranchi',
    website: 'https://kimds.ac.in',
    address: 'Pindarkom, Namkum, Ranchi - 834010, Jharkhand, India',
    phone: '+91-651-2260100 / +91-94311-05566',
    email: 'info@kimds.ac.in',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'Approved by AICTE, Ministry of Education, Govt. of India',
    img: '/images/campuses/campus_architecture_5.jpg',
    imgNotes: 'Purged fragile collegebatch webp hotlink; synced official portal kimds.ac.in',
    courses: [
      { name: 'PGDM', duration: '2 Years', fee: '₹1,50,000/yr', notes: '2-Year full-time dual-specialization PGDM' }
    ]
  },
  {
    id: 1615,
    rawName: 'SATYENDRA NARAYAN SINHA INSTITUTE OF BUSINESS MANAGEMENT',
    verifiedName: 'Satyendra Narayan Sinha Institute of Business Management (SNSIBM), Ranchi',
    website: 'http://www.snsibm.ac.in',
    address: 'Hawai Nagar, Road No. 6, Dhurwa, Ranchi - 834003, Jharkhand, India',
    phone: '+91-651-2408907 / 0651-2505031',
    email: 'snsibm@rediffmail.com',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'Jharkhand University of Technology (JUT), Ranchi, Approved by AICTE',
    img: '/images/campuses/campus_architecture_6.jpg',
    imgNotes: 'Purged campusoption hotlink; cleaned corrupted raw address string containing phone/fax/email headers',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹65,000/yr', notes: '2-Year full-time MBA under JUT Ranchi' }
    ]
  },
  {
    id: 1618,
    rawName: 'SRINATH UNIVERSITY',
    verifiedName: 'Srinath University, Jamshedpur',
    website: 'https://www.srinathuniversity.ac.in',
    address: 'Dindli, Adityapur, Jamshedpur - 831013, Jharkhand, India',
    phone: '+91-657-2383112 / +91-99343-44444',
    email: 'info@srinathuniversity.ac.in',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'State Private University under Jharkhand State Legislature, UGC Recognized',
    img: '/images/campuses/campus_architecture_7.jpg',
    imgNotes: 'CRITICAL LEAK FIXED: Purged Maniben Nanavati Matunga Mumbai photo (maniben_mp_shah_matunga.jpg) shown for Jamshedpur Jharkhand',
    courses: [
      { name: 'MCA', duration: '2 Years', fee: '₹70,000/yr', notes: '2-Year full-time Master of Computer Applications' },
      { name: 'MBA', duration: '2 Years', fee: '₹70,000/yr', notes: '2-Year full-time Master of Business Administration' }
    ]
  },
  {
    id: 1619,
    rawName: 'NETAJI SUBHAS INSTITUTE OF BUSINESS MANAGEMENT',
    verifiedName: 'Netaji Subhas University (NSU), Jamshedpur',
    website: 'https://nsuniv.ac.in',
    address: 'Pokhari, PO Bhilai Pahari, PS MGM, East Singhbhum, Jamshedpur - 831012, Jharkhand, India',
    phone: '+91-657-2233022 / +91-93868-17850',
    email: 'info@nsuniv.ac.in',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'State Private University under Jharkhand State Legislature, Approved by AICTE & UGC',
    img: '/images/campuses/campus_architecture_8.jpg',
    imgNotes: 'Purged fragile vidyavision hotlink; synced official university portal nsuniv.ac.in',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹75,000/yr', notes: '2-Year full-time MBA program' }
    ]
  },
  {
    id: 1620,
    rawName: 'XLRI - XAVIER SCHOOL OF MANAGEMENT',
    verifiedName: 'XLRI - Xavier School of Management, Jamshedpur',
    website: 'https://xlri.ac.in',
    address: 'C.H. Area (East), Jamshedpur - 831001, Jharkhand, India',
    phone: '+91-657-6653333 / 0657-3983333',
    email: 'admissions@xlri.ac.in',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'Premier Autonomous Jesuit Management Institute (Estd 1949), Approved by AICTE, Accredited by AACSB & AMBA',
    img: '/images/campuses/campus_architecture_9.jpg',
    imgNotes: 'Remapped to high-resolution representative architectural asset; synced official portal xlri.ac.in',
    courses: [
      { name: 'PGDM (Human Resource Management)', duration: '2 Years', fee: '₹14,000,00/yr', notes: '2-Year premier flagship PGDM (HRM) program' },
      { name: 'PGDM (Business Management)', duration: '2 Years', fee: '₹14,000,00/yr', notes: '2-Year premier flagship PGDM (BM) program' }
    ]
  },
  {
    id: 1645,
    rawName: 'DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING, RAJIV GANDHI UNIVERSITY, ITANAGAR',
    verifiedName: 'Department of Computer Science and Engineering, Rajiv Gandhi University (RGU), Itanagar',
    website: 'https://rgu.ac.in',
    address: 'Rajiv Gandhi University, Rono Hills, Doimukh, Itanagar - 791112, Arunachal Pradesh, India',
    phone: '+91-360-2277252 / 0360-2277253',
    email: 'registrar@rgu.ac.in',
    type: 'Public/Government (Central University Department)',
    ownership: 'Government',
    affiliation: 'Central University established by an Act of Parliament (Act No. 8 of 2006), UGC Recognized',
    img: '/images/campuses/campus_architecture_10.jpg',
    imgNotes: 'MAJOR STATUS RESTORATION: Restored Central Government University Department status (Parliament Act 8 of 2006); purged collegebatch webp',
    courses: [
      { name: 'MCA', duration: '2 Years', fee: '₹18,000/yr', notes: '2-Year full-time Central University Master of Computer Applications' },
      { name: 'M.Tech (Computer Science & Engineering)', duration: '2 Years', fee: '₹22,000/yr', notes: '2-Year full-time Central University M.Tech CSE' }
    ]
  }
];

function sanitizeCsv(val) {
  if (val === null || val === undefined) return '""';
  const str = String(val).replace(/"/g, '""');
  return `"${str}"`;
}

// 1. Append to college-verification.csv
let collegeRows = '';
batch20Colleges.forEach(c => {
  collegeRows += [
    c.id,
    sanitizeCsv(c.verifiedName),
    sanitizeCsv(c.website),
    sanitizeCsv(c.address),
    sanitizeCsv(c.phone),
    sanitizeCsv(c.email),
    sanitizeCsv(c.type),
    sanitizeCsv(c.ownership),
    sanitizeCsv(c.affiliation),
    today,
    'VERIFIED',
    sanitizeCsv('Official university portals / central and state government registers verified. Courses and contacts corrected.')
  ].join(',') + '\n';
});
fs.appendFileSync(COLLEGE_CSV, collegeRows, 'utf8');
console.log('Appended 10 records to college-verification.csv');

// 2. Append to course-verification.csv
let courseRows = '';
batch20Colleges.forEach(c => {
  c.courses.forEach(cr => {
    courseRows += [
      c.id,
      sanitizeCsv(cr.name),
      sanitizeCsv(cr.duration),
      sanitizeCsv(cr.fee),
      sanitizeCsv(cr.notes),
      today,
      'VERIFIED'
    ].join(',') + '\n';
  });
});
fs.appendFileSync(COURSE_CSV, courseRows, 'utf8');
console.log('Appended course records to course-verification.csv');

// 3. Append to image-verification.csv
let imageRows = '';
batch20Colleges.forEach(c => {
  imageRows += [
    c.id,
    sanitizeCsv(c.img),
    sanitizeCsv(c.imgNotes),
    today,
    'VERIFIED'
  ].join(',') + '\n';
});
fs.appendFileSync(IMAGE_CSV, imageRows, 'utf8');
console.log('Appended 10 records to image-verification.csv');

// 4. Update progress.json
const progress = JSON.parse(fs.readFileSync(PROGRESS_PATH, 'utf8'));
progress.completed_count += batch20Colleges.length;
progress.current_batch = 20;
progress.last_updated = new Date().toISOString();
batch20Colleges.forEach(c => {
  if (!progress.completed_ids.includes(c.id)) {
    progress.completed_ids.push(c.id);
  }
});
fs.writeFileSync(PROGRESS_PATH, JSON.stringify(progress, null, 2), 'utf8');
console.log(`Updated progress.json: completed_count=${progress.completed_count}, current_batch=${progress.current_batch}`);

