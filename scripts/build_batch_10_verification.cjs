const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const COLLEGE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'college-verification.csv');
const COURSE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'course-verification.csv');
const IMAGE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'image-verification.csv');
const PROGRESS_PATH = path.join(BASE_DIR, 'reports', 'verification', 'progress.json');

const today = '2026-10-31';

const batch10Colleges = [
  {
    id: 739,
    rawName: 'INSTITUTE OF TECHNOLOGY AND MANAGEMENT',
    verifiedName: 'Institute of Technology and Management (ITM), GIDA, Gorakhpur',
    website: 'https://itmgkp.edu.in',
    address: 'AL-1, Sector-7, GIDA, Gorakhpur - 273209, Uttar Pradesh, India',
    phone: '+91-8081209500 / +91-7607777650',
    email: 'director@itmgkp.edu.in',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'Dr. A.P.J. Abdul Kalam Technical University (AKTU) & Approved by AICTE, BTEUP',
    img: '/images/campuses/campus_architecture_8.jpg',
    imgNotes: 'Remapped to unbranded representative asset with Representative Image badge',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹90,000/yr', notes: '2-Year full-time MBA under AKTU' }
    ]
  },
  {
    id: 745,
    rawName: 'MODERN INSTITUTE OF TECHNOLOGY AND MANAGEMENT',
    verifiedName: 'Modern Institute of Technology and Management (MITM), Ghaziabad',
    website: 'https://mitmgzb.com',
    address: 'Near RapidX Metro Station (Duhai), Delhi-Meerut Road, Duhai, Ghaziabad - 201206, Uttar Pradesh, India',
    phone: '+91-7291982148 / +91-8958115424',
    email: 'mitmghaziabad@gmail.com',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'Dr. A.P.J. Abdul Kalam Technical University (AKTU) & Approved by AICTE',
    img: '/images/campuses/campus_architecture_5.jpg',
    imgNotes: 'Retained clean representative architectural asset',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹55,000/yr', notes: '2-Year full-time MBA under AKTU' }
    ]
  },
  {
    id: 777,
    rawName: 'INSTITUTE OF PROFESSIONAL EXCELLENCE & MANAGEMENT',
    verifiedName: 'Institute of Professional Excellence & Management (IPEM), Ghaziabad',
    website: 'https://www.ipemgzb.ac.in',
    address: 'A-13/1, South Side G.T. Road Industrial Area, NH-9 Bypass, Ghaziabad - 201010, Uttar Pradesh, India',
    phone: '+91-9910491472 / +91-9910491474',
    email: 'info@ipemgzb.ac.in',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'Dr. A.P.J. Abdul Kalam Technical University (AKTU) & CCSU Meerut, Approved by AICTE, NAAC',
    img: '/images/campuses/campus_architecture_6.jpg',
    imgNotes: 'Removed fragile collegebatch webp hotlink, remapped to representative asset',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹1,45,000/yr', notes: '2-Year full-time MBA under AKTU' }
    ]
  },
  {
    id: 782,
    rawName: 'MOTI LAL RASTOGI SCHOOL OF MANAGEMENT',
    verifiedName: 'Moti Lal Rastogi School of Management (MLRSM), Lucknow',
    website: 'https://mlrsmihm.com',
    address: 'D-22 / D-23, UPSIDC Industrial Area, Sarojini Nagar, Kanpur Road, Lucknow - 226008, Uttar Pradesh, India',
    phone: '+91-9450650965 / 0522-2476174',
    email: 'mlrsm.edu@gmail.com',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'National Council for Hotel Management and Catering Technology (NCHMCT) & IGNOU / AKTU',
    img: '/images/campuses/campus_architecture_8.jpg',
    imgNotes: 'Removed fragile getmyuni hotlink, remapped to representative asset',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹60,000/yr', notes: '2-Year management / hospitality management program' }
    ]
  },
  {
    id: 784,
    rawName: 'DR. BHIMRAO AMBEDKAR UNIVERSITY',
    verifiedName: 'Dr. Bhimrao Ambedkar University (DBRAU), Khandari Campus, Agra',
    website: 'https://dbrau.ac.in',
    address: 'Khandari Campus, Dr. Bhimrao Ambedkar University, Agra - 282002, Uttar Pradesh, India',
    phone: '+91-562-2856446 / 0562-2858669',
    email: 'registrar@dbrau.ac.in',
    type: 'Public/Government (State University)',
    ownership: 'Government',
    affiliation: 'State University established in 1927, Approved by UGC & AICTE, Accredited by NAAC',
    img: '/images/campuses/campus_architecture_1.jpg',
    imgNotes: 'CRITICAL LEAK FIXED: Removed BMS College Bangalore photo (bms_bangalore.jpg) shown for historic Agra State University',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹40,000/yr', notes: '2-Year MBA at Seth Padam Chand Jain Institute, Khandari Campus' }
    ]
  },
  {
    id: 785,
    rawName: 'CHHATRAPATI SHAHU JI MAHARAJ UNIVERSITY',
    verifiedName: 'Chhatrapati Shahu Ji Maharaj University (CSJMU), Kanpur',
    website: 'https://csjmu.ac.in',
    address: 'Kalyanpur, Kanpur - 208024, Uttar Pradesh, India',
    phone: '0512-2246608 / 0512-2246609',
    email: 'info@csjmu.ac.in',
    type: 'Public/Government (State University)',
    ownership: 'Government',
    affiliation: 'State University established in 1966, UGC Category-I, NAAC A++ Grade',
    img: '/images/campuses/campus_architecture_2.jpg',
    imgNotes: 'CRITICAL LEAK FIXED: Removed Sheila Raheja Bandra Mumbai photo (sheila_raheja_bandra.webp) shown for CSJM University Kanpur',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹45,000/yr', notes: '2-Year full-time MBA under University Department of Business Management' }
    ]
  },
  {
    id: 786,
    rawName: 'SPARSH GLOBAL BUSINESS SCHOOL',
    verifiedName: 'Sparsh Global Business School (SGBS), Greater Noida',
    website: 'https://www.sparshgbs.in',
    address: 'Plot No. 29/2, Knowledge Park-III, Greater Noida - 201310, Uttar Pradesh, India',
    phone: '+91-7669933416 / 1800-121-4800',
    email: 'admission@sparshgbs.in',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'Approved by AICTE, Ministry of Education, Govt of India',
    img: '/images/campuses/campus_architecture_3.jpg',
    imgNotes: 'Retained clean representative architectural asset',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹4,50,000/yr', notes: '2-Year full-time PGDM / Global MBA dual degree pathway' }
    ]
  },
  {
    id: 797,
    rawName: 'IIF BUSINESS SCHOOL',
    verifiedName: 'IIF Business School / Indian Institute of Finance (IIF), Greater Noida',
    website: 'https://www.iif.edu',
    address: 'Plot No. 45A, Knowledge Park III, Greater Noida - 201308, Delhi-NCR, Uttar Pradesh, India',
    phone: '+91-9811971002 / 0120-6471004',
    email: 'admission@iif.edu',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'Approved by AICTE, Ministry of Education, Govt of India',
    img: '/images/campuses/campus_architecture_4.jpg',
    imgNotes: 'Removed fragile careerindia hotlink, remapped to representative asset',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹2,50,000/yr', notes: '2-Year Master in Business Finance (MBF) / PGP program' }
    ]
  },
  {
    id: 808,
    rawName: 'ADHUNIK INSTITUTE OF PRODUCTIVITY MANAGEMENT & RESEARCH',
    verifiedName: 'Adhunik Institute of Productivity Management & Research (AGOI), Ghaziabad',
    website: 'https://adhunikgroup.org',
    address: '9th Km Stone, Delhi-Meerut Road, Opposite Bank of India, Near Bus Stand Duhai, Ghaziabad - 201206, Uttar Pradesh, India',
    phone: '+91-9818592787 / +91-9897698822',
    email: 'info@adhunikgroup.org',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'Dr. A.P.J. Abdul Kalam Technical University (AKTU) & Approved by AICTE',
    img: '/images/campuses/campus_architecture_5.jpg',
    imgNotes: 'CRITICAL LEAK FIXED: Removed IIIT Bangalore campus photograph (iiit_bangalore_campus.jpg) shown for Ghaziabad institute',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹60,000/yr', notes: '2-Year full-time MBA under AKTU' }
    ]
  },
  {
    id: 814,
    rawName: 'S.R.M. BUSINESS SCHOOL',
    verifiedName: 'S.R.M. Business School (SRMBS), Lucknow',
    website: 'https://srmbs.in',
    address: 'NH-24, Sitapur Road, Bakshi ka Talab, Lucknow - 226201, Uttar Pradesh, India',
    phone: '+91 9793000004 / +91 9793000005',
    email: 'info@srgi.in',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'Dr. A.P.J. Abdul Kalam Technical University (AKTU) & Approved by AICTE',
    img: '/images/campuses/campus_architecture_7.jpg',
    imgNotes: 'Removed fragile collegebatch webp hotlink, remapped to representative asset',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹70,000/yr', notes: '2-Year full-time MBA under AKTU' }
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

batch10Colleges.forEach(col => {
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

console.log('Appended Batch 10 entries to CSV files.');

const progress = JSON.parse(fs.readFileSync(PROGRESS_PATH, 'utf8'));
const newCompleted = [...(progress.completed_ids || [])];
batch10Colleges.forEach(c => {
  if (!newCompleted.includes(c.id)) newCompleted.push(c.id);
});

progress.completed_ids = newCompleted;
progress.completed_count = newCompleted.length;
progress.current_batch = 10;
progress.last_updated = new Date().toISOString();

fs.writeFileSync(PROGRESS_PATH, JSON.stringify(progress, null, 2), 'utf8');
console.log(`Updated progress.json: Total verified = ${progress.completed_count}, Current batch = 10.`);

