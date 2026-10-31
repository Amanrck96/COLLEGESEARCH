const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const COLLEGE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'college-verification.csv');
const COURSE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'course-verification.csv');
const IMAGE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'image-verification.csv');
const PROGRESS_PATH = path.join(BASE_DIR, 'reports', 'verification', 'progress.json');

const today = '2026-10-31';

const batch11Colleges = [
  {
    id: 858,
    rawName: 'RMS BUSINESS SCHOOL GURGAON',
    verifiedName: 'RMS Business School, Gurugram',
    website: 'https://rmsbusinessschool.org',
    address: 'Village Turkapur, Post Baspadamka, Pataudi / Sector 32 City Campus, Gurugram - 122001, Haryana, India',
    phone: '+91-9091454647 / +91-9810112877',
    email: 'info@rmsbusinessschool.org',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'Gurugram University & Approved by AICTE',
    img: '/images/campuses/campus_architecture_9.jpg',
    imgNotes: 'Retained clean representative architectural asset',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹1,50,000/yr', notes: '2-Year full-time MBA under Gurugram University' }
    ]
  },
  {
    id: 859,
    rawName: 'RATTAN INSTITUTE OF MANAGEMENT',
    verifiedName: 'Rattan Institute of Management (RIM), Seekri, Faridabad',
    website: 'https://rimseekri.org.in',
    address: 'Seekri, Harphala Road, Ballabgarh, Faridabad - 121004, Haryana, India',
    phone: '+91-8810676939 / +91-8810676551',
    email: 'info@rimseekri.org.in',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'Maharshi Dayanand University (MDU), Rohtak & Approved by AICTE',
    img: '/images/campuses/campus_architecture_8.jpg',
    imgNotes: 'CRITICAL LEAK FIXED: Removed CU Shah College Mumbai photo (campus_cu_shah_mumbai.png) shown for Faridabad institute',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹60,000/yr', notes: '2-Year full-time MBA under MDU Rohtak' }
    ]
  },
  {
    id: 863,
    rawName: 'DELHI INSTITUTE OF MANAGEMENT',
    verifiedName: 'Delhi Institute of Technology, Management & Research (FCEM), Faridabad',
    website: 'https://www.fcem.in',
    address: 'Sohna Road, Village Firozpur Kalan, Ballabgarh, Faridabad - 121004, Haryana, India',
    phone: '+91-9205129827 / +91-8851440031',
    email: 'fcemfbd@gmail.com',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'J.C. Bose University of Science and Technology, YMCA / MDU & Approved by AICTE',
    img: '/images/campuses/campus_architecture_7.jpg',
    imgNotes: 'Removed fragile collegedekho hotlink, remapped to representative asset',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹60,000/yr', notes: '2-Year full-time MBA under university guidelines' }
    ]
  },
  {
    id: 868,
    rawName: 'MAA OMWATI INSTITUTE OF MANAGEMENT & TECHNOLOGY',
    verifiedName: 'Maa Omwati Institute of Management & Technology (MOIMT), Hassanpur, Palwal',
    website: 'https://www.maaomwati.com',
    address: 'VPO Hassanpur, Tehsil Hodal, Palwal District - 121107, Haryana, India',
    phone: '+91-9050654655 / +91-7838381380',
    email: 'administrator1@maaomwati.com',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'Maharshi Dayanand University (MDU), Rohtak & Approved by AICTE',
    img: '/images/campuses/campus_architecture_4.jpg',
    imgNotes: 'Retained clean representative architectural asset',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹55,000/yr', notes: '2-Year full-time MBA under MDU Rohtak' }
    ]
  },
  {
    id: 869,
    rawName: 'SOIL SCHOOL OF BUSINESS DESIGN',
    verifiedName: 'SOIL School of Business Design (SOIL Institute of Management), Manesar, Gurugram',
    website: 'https://www.soil.edu.in',
    address: 'Plot 23, Sector 2, Phase 1, Institutional Area, IMT Manesar, Gurugram - 122050, Haryana, India',
    phone: '+91-9717280018 / +91-9870256660',
    email: 'pgdm@schoolofbusinessdesign.com',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'Approved by AICTE, Ministry of Education, Govt of India',
    img: '/images/campuses/campus_architecture_3.jpg',
    imgNotes: 'CRITICAL LEAK FIXED: Removed MGM Navi Mumbai photo (campus_mgm_navi_mumbai.jpg) shown for SOIL Business School Manesar',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹7,00,000/yr', notes: '2-Year full-time AICTE-approved PGDM in Business Design' }
    ]
  },
  {
    id: 870,
    rawName: 'JK INSTITUTE OF MANAGEMENT TECHNOLOGY',
    verifiedName: 'JK Institute of Management & Technology (JKIMT), Karnal',
    website: 'https://jkinstitutes.com',
    address: 'Indri Road, Near Ramba Chowk (24/11 Mile Stone), Karnal - 132001, Haryana, India',
    phone: '+91-9355562120 / +91-9355208000',
    email: 'info@jkinstitutes.com',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'Kurukshetra University (KUK) & Approved by AICTE',
    img: '/images/campuses/campus_architecture_6.jpg',
    imgNotes: 'CRITICAL LEAK FIXED: Removed Sheila Raheja Bandra Mumbai photo (sheila_raheja_bandra.webp) shown for Karnal institute',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹55,000/yr', notes: '2-Year full-time MBA under Kurukshetra University' }
    ]
  },
  {
    id: 893,
    rawName: 'SARASWATI MAHILA MAHAVIDYALAYA',
    verifiedName: 'Saraswati Mahila Mahavidyalaya (SMM), Palwal',
    website: 'https://www.smmpalwal.com',
    address: 'Bye Pass Road / Nuh Road (NH-71B), Palwal - 121102, Haryana, India',
    phone: '01275-253319 / +91-9466285533',
    email: 'saraswatipalwal@gmail.com',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'Maharshi Dayanand University (MDU), Rohtak & NAAC Accredited B+ Grade, UGC',
    img: '/images/campuses/campus_architecture_8.jpg',
    imgNotes: 'CRITICAL LEAK FIXED: Removed SVKM Vile Parle Mumbai photo (svkm_upg_vileparle.jpg) shown for Palwal women\'s college',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹30,000/yr', notes: '2-Year PG management / commerce program under MDU' }
    ]
  },
  {
    id: 894,
    rawName: 'PT. L.R. COLLEGE OF MANAGEMENT',
    verifiedName: 'Pt. L.R. College of Management, Ballabgarh, Faridabad',
    website: 'https://ptlrcollege.com',
    address: 'Kaboolpur Bangar, Samaypur Sohna Road, Ballabgarh, Faridabad - 121004, Haryana, India',
    phone: '+91-9540028827 / +91-9540028828',
    email: 'ptlrcm@gmail.com',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'Maharshi Dayanand University (MDU), Rohtak & Approved by AICTE',
    img: '/images/campuses/campus_architecture_1.jpg',
    imgNotes: 'Removed fragile jagranjosh hotlink, remapped to representative asset',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹70,000/yr', notes: '2-Year full-time MBA under MDU Rohtak' }
    ]
  },
  {
    id: 899,
    rawName: 'SHAHEED CAPT D K KHOLA COLLEGE OF MANAGEMENT AND TECHNOLOGY',
    verifiedName: 'Shaheed Capt. D.K. Khola College of Management and Technology, Zainabad, Rewari',
    website: 'https://www.kholacollege.com',
    address: 'VPO Zainabad, Rewari District - 123411, Haryana, India',
    phone: '+91-9416382959 / 01281-248530',
    email: 'khola.satish@gmail.com',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'Indira Gandhi University (IGU), Meerpur, Rewari & Approved by AICTE, NCTE',
    img: '/images/campuses/campus_architecture_2.jpg',
    imgNotes: 'Removed fragile studyclap hotlink, remapped to representative asset',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹50,000/yr', notes: '2-Year full-time MBA under IGU Meerpur' },
      { name: 'B.Tech / Pharmacy', duration: '4 Years', fee: '₹60,000/yr', notes: '4-Year undergraduate technical program' }
    ]
  },
  {
    id: 900,
    rawName: 'INDRAPRASTH INSTITUTE OF MANAGEMENT',
    verifiedName: 'Indraprasth Institute of Management (IIMG), Gurugram',
    website: 'http://www.iimgurgaon.com',
    address: 'Indraprasth Aerospace & Knowledge Park, Near Aapno Ghar, Delhi-Jaipur Expressway (NH-8), Sector 77, Gurugram - 122004, Haryana, India',
    phone: '+91-8448894230 / +91-8448894231 / +91-9319208927',
    email: 'admission@iimgurgaon.com',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'Approved by AICTE, Ministry of Education, Govt of India',
    img: '/images/campuses/campus_architecture_9.jpg',
    imgNotes: 'Removed 403-blocked collegedunia hotlink, remapped to representative asset',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹2,75,000/yr', notes: '2-Year full-time AICTE-approved PGDM' }
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

batch11Colleges.forEach(col => {
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

console.log('Appended Batch 11 entries to CSV files.');

const progress = JSON.parse(fs.readFileSync(PROGRESS_PATH, 'utf8'));
const newCompleted = [...(progress.completed_ids || [])];
batch11Colleges.forEach(c => {
  if (!newCompleted.includes(c.id)) newCompleted.push(c.id);
});

progress.completed_ids = newCompleted;
progress.completed_count = newCompleted.length;
progress.current_batch = 11;
progress.last_updated = new Date().toISOString();

fs.writeFileSync(PROGRESS_PATH, JSON.stringify(progress, null, 2), 'utf8');
console.log(`Updated progress.json: Total verified = ${progress.completed_count}, Current batch = 11.`);

