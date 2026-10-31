const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const COLLEGE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'college-verification.csv');
const COURSE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'course-verification.csv');
const IMAGE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'image-verification.csv');
const PROGRESS_PATH = path.join(BASE_DIR, 'reports', 'verification', 'progress.json');

const today = '2026-10-31';

const batch15Colleges = [
  {
    id: 1299,
    rawName: 'MONTI INTERNATIONAL INSTITUTE OF MANAGEMENT STUDIES',
    verifiedName: 'Monti International Institute of Management Studies (MIIMS), Puthanangadi',
    website: 'https://montiinstitute.ac.in',
    address: 'Luigi Bhavan Campus, Puthanangadi P.O., Angadippuram via, Malappuram District - 679321, Kerala, India',
    phone: '+91 8606258555 / +91 9061258555',
    email: 'montiinstitute@gmail.com',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'University of Calicut & Approved by AICTE',
    img: '/images/campuses/campus_architecture_1.jpg',
    imgNotes: 'Removed fragile collegebatch webp hotlink, remapped to representative asset',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹1,50,000/yr', notes: '2-Year full-time MBA under University of Calicut' }
    ]
  },
  {
    id: 1300,
    rawName: 'INSTITUTE OF TECHNOLOGY MAYYIL',
    verifiedName: 'Institute of Technology Mayyil (ITM), Kannur',
    website: 'https://itmmba.ac.in',
    address: 'Pavannurmotta P.O., Mayyil via, Kannur District - 670602, Kerala, India',
    phone: '0460-2276786 / +91 9447477387',
    email: 'mba@itmgroup.in',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'Kannur University & Approved by AICTE',
    img: '/images/campuses/campus_architecture_2.jpg',
    imgNotes: 'CRITICAL LEAK FIXED: Removed VJTI Mumbai Victorian building (vjti_mumbai.jpg) shown for Kannur, Kerala institute',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹1,20,000/yr', notes: '2-Year full-time MBA under Kannur University' }
    ]
  },
  {
    id: 1318,
    rawName: 'A.S.GROUP OF INSTITUTIONS',
    verifiedName: 'A.S. Group of Institutions (ASGOI), Khanna',
    website: 'https://asinstitutes.com',
    address: 'Samrala Road, Kalal Majra, Tehsil Samrala, Khanna, Ludhiana District - 141401, Punjab, India',
    phone: '+91-1628-237470 / +91-98550-45461',
    email: 'asgikhanna@gmail.com',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'I.K. Gujral Punjab Technical University (IKGPTU), Jalandhar & Approved by AICTE',
    img: '/images/campuses/campus_architecture_3.jpg',
    imgNotes: 'CRITICAL LEAK FIXED: Removed MS Ramaiah Bangalore campus photo (ramaiah_bangalore.jpg) shown for Khanna, Punjab institute',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹80,000/yr', notes: '2-Year full-time MBA under IKGPTU Jalandhar' }
    ]
  },
  {
    id: 1343,
    rawName: 'GOLDEN COLLEGE OF ENGINEERING & TECHNOLOGY',
    verifiedName: 'Golden College of Engineering & Technology (GCET), Gurdaspur',
    website: 'https://goldengroups.co.in',
    address: 'Prem Nagar, Hardochhani Road, Gurdaspur - 143521, Punjab, India',
    phone: '+91-7508709760 / 01874-504000',
    email: 'goldenedu@live.com',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'I.K. Gujral Punjab Technical University (IKGPTU), Jalandhar & Approved by AICTE',
    img: '/images/campuses/campus_architecture_4.jpg',
    imgNotes: 'CRITICAL LEAK FIXED: Removed Chetana Bandra Mumbai photo (chetana_bandra.jpg) shown for Gurdaspur, Punjab institute',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹75,000/yr', notes: '2-Year full-time MBA under IKGPTU Jalandhar' }
    ]
  },
  {
    id: 1353,
    rawName: 'KHALSA COLLEGE OF ENGINEERING & TECHNOLOGY, AMRITSAR',
    verifiedName: 'Khalsa College of Engineering & Technology (KCET), Amritsar',
    website: 'https://khalsaengineering.co.in',
    address: 'C-Block, Ranjit Avenue, Amritsar - 143001, Punjab, India',
    phone: '+91-8198004400 / 0183-5030765',
    email: 'kcetamritsar@gmail.com',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'I.K. Gujral Punjab Technical University (IKGPTU), Jalandhar & Approved by AICTE',
    img: '/images/campuses/campus_architecture_5.jpg',
    imgNotes: 'Removed fragile collegebatch webp hotlink, remapped to representative asset',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹85,000/yr', notes: '2-Year full-time MBA under IKGPTU Jalandhar' }
    ]
  },
  {
    id: 1393,
    rawName: 'ARYANS BUSINESS SCHOOL (ABS)',
    verifiedName: 'Aryans Business School (ABS, Aryans Group of Colleges), Rajpura, Patiala',
    website: 'https://aryans.edu.in',
    address: 'Village Nepra, Chandigarh-Patiala Highway, Tehsil Rajpura, District Patiala - 140401, Punjab, India',
    phone: '+91-98762-99888 / +91-98765-99888',
    email: 'info@aryans.edu.in',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'I.K. Gujral Punjab Technical University (IKGPTU), Jalandhar & Approved by AICTE',
    img: '/images/campuses/campus_architecture_6.jpg',
    imgNotes: 'Removed fragile studyclap hotlink, remapped to representative asset',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹90,000/yr', notes: '2-Year full-time MBA under IKGPTU Jalandhar' }
    ]
  },
  {
    id: 1447,
    rawName: 'INTERNATIONAL SCHOOL OF BUSINESS ADMINISTRATION',
    verifiedName: 'International School of Business Administration (ISBA Group of Institutions), Indore',
    website: 'https://isba.edu.in',
    address: 'Gram Badodiya Ema, Sanwer Road / Indore-Ujjain Road, Indore - 453551, Madhya Pradesh, India',
    phone: '+91-9977802220 / 0731-2026000',
    email: 'info@isba.edu.in',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'Devi Ahilya Vishwavidyalaya (DAVV), Indore & Approved by AICTE, MP Higher Education',
    img: '/images/campuses/campus_architecture_7.jpg',
    imgNotes: 'CRITICAL LEAK FIXED: Removed Koshys Bangalore photo (koshys_bangalore.jpg) shown for Indore, MP institute',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹65,000/yr', notes: '2-Year full-time MBA under DAVV Indore' }
    ]
  },
  {
    id: 1449,
    rawName: 'INDORE INSTITUTE OF MANAGEMENT AND RESEARCH',
    verifiedName: 'Indore Institute of Management and Research (IIMR), Rau, Indore',
    website: 'https://indoreinstitute.com/iimr',
    address: 'Opposite IIM Indore, Rau-Pithampur Road, Rau, Indore - 453331, Madhya Pradesh, India',
    phone: '+91-8224073000 / 1800 103 3069',
    email: 'admissions@indoreinstitute.com',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'Devi Ahilya Vishwavidyalaya (DAVV), Indore & Approved by AICTE',
    img: '/images/campuses/campus_architecture_8.jpg',
    imgNotes: 'Clean unbranded representative architectural asset with Representative Image badge',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹1,05,000/yr', notes: '2-Year full-time MBA under DAVV Indore' }
    ]
  },
  {
    id: 1450,
    rawName: 'MAHARISHI CENTRE FOR EDUCATIONAL EXCELLENCE',
    verifiedName: 'Maharishi Centre for Educational Excellence (MCEE - Maharishi Institute of Management), Bhopal',
    website: 'https://mceebhopal.org',
    address: 'Lambakheda, Berasia Road, Bhopal - 462038, Madhya Pradesh, India',
    phone: '+91-8349053515 / 0755-4525149',
    email: 'mceebhopal@mssmail.org',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'Barkatullah University, Bhopal & Approved by AICTE',
    img: '/images/campuses/campus_architecture_2.jpg',
    imgNotes: 'Clean unbranded representative architectural asset with Representative Image badge',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹60,000/yr', notes: '2-Year full-time MBA under Barkatullah University' }
    ]
  },
  {
    id: 1474,
    rawName: 'JAIN COLLEGE',
    verifiedName: 'Jain College (Jain Group of Colleges), Lashkar, Gwalior',
    website: 'http://www.jaincollege.net',
    address: 'Piproli-Shivpuri Link Road, Lashkar, Gwalior - 474001, Madhya Pradesh, India',
    phone: '+91-8818888771 / +91-9425778444',
    email: 'infojaincollege@gmail.com',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'Jiwaji University, Gwalior & Approved by AICTE, NCTE, MP Higher Education',
    img: '/images/campuses/campus_architecture_3.jpg',
    imgNotes: 'CRITICAL LEAK FIXED: Removed VJTI Mumbai Victorian building (vjti_mumbai.jpg) shown for Gwalior, MP institute',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹55,000/yr', notes: '2-Year full-time MBA under Jiwaji University Gwalior' }
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

batch15Colleges.forEach(col => {
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

console.log('Appended Batch 15 entries to CSV files.');

const progress = JSON.parse(fs.readFileSync(PROGRESS_PATH, 'utf8'));
const newCompleted = [...(progress.completed_ids || [])];
batch15Colleges.forEach(c => {
  if (!newCompleted.includes(c.id)) newCompleted.push(c.id);
});

progress.completed_ids = newCompleted;
progress.completed_count = newCompleted.length;
progress.current_batch = 15;
progress.last_updated = new Date().toISOString();

fs.writeFileSync(PROGRESS_PATH, JSON.stringify(progress, null, 2), 'utf8');
console.log(`Updated progress.json: Total verified = ${progress.completed_count}, Current batch = 15.`);

