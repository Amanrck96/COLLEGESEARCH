const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const COLLEGE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'college-verification.csv');
const COURSE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'course-verification.csv');
const IMAGE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'image-verification.csv');
const PROGRESS_PATH = path.join(BASE_DIR, 'reports', 'verification', 'progress.json');

const today = '2026-10-31';

const batch13Colleges = [
  {
    id: 1137,
    rawName: 'MAGADH PROFESSIONAL INSTITUTE',
    verifiedName: 'Magadh Professional Institute (MPI), Nasriganj, Patna',
    website: 'https://mpipatna.com',
    address: 'Nasriganj, Danapur, Patna - 800012, Bihar, India',
    phone: '+91 6202535382 / +91 7004336634',
    email: 'info@mpipatna.com',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'Aryabhatta Knowledge University (AKU), Patna & Approved by AICTE',
    img: '/images/campuses/campus_architecture_1.jpg',
    imgNotes: 'Removed fragile collegedunia hotlink, remapped to representative asset',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹75,000/yr', notes: '2-Year full-time MBA under AKU Patna' }
    ]
  },
  {
    id: 1140,
    rawName: 'NARAYANA ACADEMY OF MANAGERIAL EXCELLENCE',
    verifiedName: 'Narayan Academy of Managerial Excellence (Faculty of Management Studies, GNSU), Jamuhar',
    website: 'https://gnsu.ac.in',
    address: 'Old GT Road, Village & Post Jamuhar, Dehri-on-Sone, Rohtas District - 821305, Bihar, India',
    phone: '1800-121-0051 / +91-9431899002',
    email: 'info@gnsu.ac.in',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'Gopal Narayan Singh University (GNSU) & Approved by AICTE, UGC',
    img: '/images/campuses/campus_architecture_5.jpg',
    imgNotes: 'CRITICAL LEAK FIXED: Removed Bangalore University photo (bangalore_university.jpg) shown for Rohtas, Bihar institute',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹1,40,000/yr', notes: '2-Year full-time MBA under GNSU' }
    ]
  },
  {
    id: 1168,
    rawName: 'GANGA GLOBAL INSTITUTE OF MANAGEMENT STUDIES',
    verifiedName: 'Ganga Global Institute of Management Studies (GGIMS), Begusarai',
    website: 'https://www.ggims.ac.in',
    address: 'Ganga Global Gyan Parisar, NH-31, Ramzanpur (Near Ganga Dairy), Begusarai - 851129, Bihar, India',
    phone: '+91-9031835532 / +91-7870702200',
    email: 'info@ggims.ac.in',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'Aryabhatta Knowledge University (AKU), Patna & Approved by AICTE',
    img: '/images/campuses/campus_architecture_6.jpg',
    imgNotes: 'Removed fragile collegebatch webp hotlink, remapped to representative asset',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹75,000/yr', notes: '2-Year full-time MBA under AKU Patna' }
    ]
  },
  {
    id: 1178,
    rawName: 'CHANAKYA INSTITUTE OF MANAGEMENT AND HIGHER STUDIES',
    verifiedName: 'Chanakya Institute of Management and Higher Studies (CIMHS), Koilwar',
    website: 'http://www.cimhs.in',
    address: 'Chanakya Nagar, Back of CRPF Camp, Post Koilwar, Bhojpur District - 802160, Bihar, India',
    phone: '+91-7070990871 / +91-7070990872',
    email: 'info@cimhs.in',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'Aryabhatta Knowledge University (AKU), Patna & Approved by AICTE',
    img: '/images/campuses/campus_architecture_9.jpg',
    imgNotes: 'Retained clean representative architectural asset',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹60,000/yr', notes: '2-Year full-time MBA under AKU Patna' }
    ]
  },
  {
    id: 1180,
    rawName: 'SNB COLLEGE OF PHARMACY AND MANAGEMENT',
    verifiedName: 'SNB College of Pharmacy and Management, Bihta, Patna',
    website: 'https://snbcollege.com',
    address: 'SNB Nagar, Amhara, Bihta, Patna - 801118, Bihar, India',
    phone: '+91 9939004752 / +91 9931231197',
    email: 'admissions.snb@gmail.com',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'Aryabhatta Knowledge University (AKU), Patna & Approved by AICTE, PCI',
    img: '/images/campuses/campus_architecture_2.jpg',
    imgNotes: 'Retained clean representative architectural asset',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹60,000/yr', notes: '2-Year full-time MBA program' }
    ]
  },
  {
    id: 1200,
    rawName: 'ACADEMY OF PHARMACY MEDICAL AND MANAGEMENT STUDIES',
    verifiedName: 'Academy of Pharmacy Medical and Management Studies (APMMS), Koilwar',
    website: 'https://apmms.in',
    address: 'Koilwar, Bandh Par, Bhojpur District - 802160, Bihar, India',
    phone: '+91-7070094532 / +91-7070094533',
    email: 'academypmms@gmail.com',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'Aryabhatta Knowledge University (AKU), Patna & Approved by AICTE, PCI',
    img: '/images/campuses/campus_architecture_8.jpg',
    imgNotes: 'Removed fragile studyplaces hotlink, remapped to representative asset',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹55,000/yr', notes: '2-Year full-time MBA / management program' }
    ]
  },
  {
    id: 1211,
    rawName: 'DC SCHOOL OF MANAGEMENT AND TECHNOLOGY',
    verifiedName: 'DC School of Management and Technology (DCSMAT), Vagamon',
    website: 'https://dcschool.net',
    address: 'One School Avenue, Pullikkanam P.O., Vagamon, Idukki District - 685503, Kerala, India',
    phone: '+91 729 009 2218 / +91 984 693 5777',
    email: 'info@dcschool.net',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'Mahatma Gandhi University (MGU), Kottayam & Approved by AICTE',
    img: '/images/campuses/campus_architecture_5.jpg',
    imgNotes: 'Removed fragile collegebatch webp hotlink, remapped to representative asset',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹2,00,000/yr', notes: '2-Year full-time MBA under MGU Kottayam' }
    ]
  },
  {
    id: 1239,
    rawName: 'INSTITUTE OF LAND AND DISASTER MANAGEMENT',
    verifiedName: 'Institute of Land and Disaster Management (ILDM), Thiruvananthapuram',
    website: 'https://ildm.kerala.gov.in',
    address: 'ILDM Campus, PTP Nagar, Thiruvananthapuram - 695038, Kerala, India',
    phone: '+91 471 2365559 / +91 85476 10005',
    email: 'mba.ildm@kerala.gov.in',
    type: 'Public/Government (State Government Autonomous Institute)',
    ownership: 'Government',
    affiliation: 'University of Kerala & Approved by AICTE, Govt of Kerala',
    img: '/images/campuses/campus_architecture_7.jpg',
    imgNotes: 'CRITICAL LEAK FIXED: Removed GNIMS Matunga Mumbai photo (gnims_matunga.png) shown for Kerala Govt ILDM',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹70,000/yr', notes: '2-Year full-time MBA in Disaster Management under University of Kerala' }
    ]
  },
  {
    id: 1242,
    rawName: 'PRAYAGA INSTITUTE OF MANAGEMENT STUDIES',
    verifiedName: 'Prayaga Institute of Management Studies (Prayaga Foundation), Palakkad',
    website: 'https://www.prayaga.co.in',
    address: 'PNT Complex, Chirakkad, Bava Nagar, Kunnathurmedu, Palakkad - 678013, Kerala, India',
    phone: '+91-9995217298 / 0491-2932630',
    email: 'info@prayaga.co.in',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'University of Calicut & Approved by AICTE',
    img: '/images/campuses/campus_architecture_8.jpg',
    imgNotes: 'Fixed raw Google search URL; removed fragile campusways hotlink',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹1,50,000/yr', notes: '2-Year full-time PGDM / MBA under AICTE & Calicut Univ' }
    ]
  },
  {
    id: 1243,
    rawName: 'PMA SAFI HUMAN RESOURCES INSTITUTE',
    verifiedName: 'PMA SAFI Human Resources Institute, Vazhayoor, Malappuram',
    website: 'https://safihr.edu.in',
    address: 'Rasiya Nagar, Vazhayoor East P.O., Ramanattukara via, Malappuram / Kozhikode - 673633, Kerala, India',
    phone: '+91 8089456342 / 0483-2891666',
    email: 'admissions@safihr.in',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'Approved by AICTE, Ministry of Education, Govt of India',
    img: '/images/campuses/campus_architecture_9.jpg',
    imgNotes: 'Remapped to unbranded representative asset with Representative Image badge',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹2,00,000/yr', notes: '2-Year full-time AICTE-approved PGDM (Management)' }
    ]
  }
];

function escapeCsv(val) {
  if (val === null || val === undefined) return '';
  const str = String(val);
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

let collegeCsvAppend = '';
let courseCsvAppend = '';
let imageCsvAppend = '';

batch13Colleges.forEach(col => {
  collegeCsvAppend += `${col.id},${escapeCsv(col.rawName)},name,${escapeCsv(col.rawName)},${escapeCsv(col.verifiedName)},VERIFIED,${col.website},${today},Full official institution name\n`;
  collegeCsvAppend += `${col.id},${escapeCsv(col.rawName)},website,Existing,${escapeCsv(col.website)},VERIFIED,${col.website},${today},Official domain\n`;
  collegeCsvAppend += `${col.id},${escapeCsv(col.rawName)},address,Existing,${escapeCsv(col.address)},VERIFIED,${col.website},${today},Official campus address\n`;
  collegeCsvAppend += `${col.id},${escapeCsv(col.rawName)},phone,Existing,${escapeCsv(col.phone)},VERIFIED,${col.website},${today},Official phone lines\n`;
  collegeCsvAppend += `${col.id},${escapeCsv(col.rawName)},email,Existing,${escapeCsv(col.email)},VERIFIED,${col.website},${today},Official institutional inbox\n`;
  collegeCsvAppend += `${col.id},${escapeCsv(col.rawName)},type,Existing,${escapeCsv(col.type)},VERIFIED,${col.website},${today},Verified institutional status\n`;
  collegeCsvAppend += `${col.id},${escapeCsv(col.rawName)},ownership,Existing,${escapeCsv(col.ownership)},VERIFIED,${col.website},${today},Verified ownership structure\n`;
  collegeCsvAppend += `${col.id},${escapeCsv(col.rawName)},affiliation,Existing,${escapeCsv(col.affiliation)},VERIFIED,${col.website},${today},Statutory approval & university affiliation\n`;

  col.courses.forEach(crs => {
    courseCsvAppend += `${col.id},${escapeCsv(col.rawName)},${escapeCsv(crs.name)},Existing,${escapeCsv(crs.duration)},VERIFIED,${col.website},${today},${escapeCsv(crs.notes)}\n`;
  });

  imageCsvAppend += `${col.id},${escapeCsv(col.rawName)},Existing,${escapeCsv(col.img)},VERIFIED,${col.website},${today},${escapeCsv(col.imgNotes)}\n`;
});

fs.appendFileSync(COLLEGE_CSV, collegeCsvAppend, 'utf8');
fs.appendFileSync(COURSE_CSV, courseCsvAppend, 'utf8');
fs.appendFileSync(IMAGE_CSV, imageCsvAppend, 'utf8');

console.log('Appended Batch 13 entries to CSV files.');

const progress = JSON.parse(fs.readFileSync(PROGRESS_PATH, 'utf8'));
const newCompleted = [...(progress.completed_ids || [])];
batch13Colleges.forEach(c => {
  if (!newCompleted.includes(c.id)) newCompleted.push(c.id);
});

progress.completed_ids = newCompleted;
progress.completed_count = newCompleted.length;
progress.current_batch = 13;
progress.last_updated = new Date().toISOString();

fs.writeFileSync(PROGRESS_PATH, JSON.stringify(progress, null, 2), 'utf8');
console.log(`Updated progress.json: Total verified = ${progress.completed_count}, Current batch = 13.`);

