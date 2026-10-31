const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const COLLEGE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'college-verification.csv');
const COURSE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'course-verification.csv');
const IMAGE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'image-verification.csv');
const PROGRESS_PATH = path.join(BASE_DIR, 'reports', 'verification', 'progress.json');

const today = '2026-10-31';

const batch12Colleges = [
  {
    id: 906,
    rawName: 'VINAYAK INSTITUTE OF MANAGEMENT',
    verifiedName: 'Vinayak Institute of Management (VIPM), Kachwa, Karnal',
    website: 'https://www.vipmknl.com',
    address: 'VPO Kachwa, Main Patiala Road, Karnal - 132001, Haryana, India',
    phone: '+91-9215060456',
    email: 'vcpknl@gmail.com',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'Kurukshetra University (KUK) & Approved by AICTE',
    img: '/images/campuses/campus_architecture_8.jpg',
    imgNotes: 'Removed fragile collegedekho hotlink and fixed raw Google search URL',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹55,000/yr', notes: '2-Year full-time MBA under Kurukshetra University' }
    ]
  },
  {
    id: 985,
    rawName: 'XAVIER INSTITUTE OF MANAGEMENT AND INFORMATICS',
    verifiedName: 'Xavier Institute of Management and Informatics (XIMI), Jaipur',
    website: 'https://ximi.ac.in',
    address: 'Nevta-Mahapura Road, Nevta, Jaipur - 302029, Rajasthan, India',
    phone: '+91 73000 72736 / +91 73000 42736',
    email: 'admission.mba@ximi.ac.in',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'Rajasthan Technical University (RTU), Kota & Approved by AICTE',
    img: '/images/campuses/campus_architecture_5.jpg',
    imgNotes: 'Remapped to unbranded representative asset with Representative Image badge',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹1,20,000/yr', notes: '2-Year full-time MBA under RTU Kota' }
    ]
  },
  {
    id: 995,
    rawName: 'PODDAR BUSINESS SCHOOL',
    verifiedName: 'Poddar Business School, Sitapura, Jaipur',
    website: 'https://www.poddarbschool.com',
    address: 'Plot No. IS-2017, Ramchandrapura Industrial Area, Sitapura Extension, Jaipur - 302022, Rajasthan, India',
    phone: '+91-8905995970 / +91-9116038880',
    email: 'admissions@poddarbschool.com',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'Rajasthan Technical University (RTU), Kota & Approved by AICTE',
    img: '/images/campuses/campus_architecture_5.jpg',
    imgNotes: 'Retained clean representative architectural asset',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹2,75,000/yr', notes: '2-Year full-time PGDM / MBA under RTU & AICTE' }
    ]
  },
  {
    id: 1039,
    rawName: 'TAXILA BUSINESS SCHOOL',
    verifiedName: 'Taxila Business School, Mansarovar, Jaipur',
    website: 'https://taxila.in',
    address: 'Sector 9, Mandir Marg, Patel Marg, Mansarovar, Jaipur - 302020, Rajasthan, India',
    phone: '+91 8404040404',
    email: 'info@taxila.in',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'Approved by AICTE, Ministry of Education, Govt of India',
    img: '/images/campuses/campus_architecture_6.jpg',
    imgNotes: 'CRITICAL LEAK FIXED: Removed GNIMS Matunga Mumbai photo (gnims_matunga.png) shown for Jaipur business school',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹4,50,000/yr', notes: '2-Year full-time AICTE-approved PGDM with triple specialization' }
    ]
  },
  {
    id: 1051,
    rawName: 'SHANKARA INTERNATIONAL SCHOOL OF MANAGEMENT AND RESEARCH',
    verifiedName: 'Shankara International School of Management & Research (SISMR), Kukas, Jaipur',
    website: 'https://shankaragroup.org',
    address: 'SP-41-C, RIICO Industrial Area, Kukas, Delhi-Jaipur Highway (NH-8), Jaipur - 302028, Rajasthan, India',
    phone: '+91-9829269277 / 1800-300-20-177',
    email: 'info@shankaratechnology.org',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'Rajasthan Technical University (RTU), Kota & Approved by AICTE',
    img: '/images/campuses/campus_architecture_7.jpg',
    imgNotes: 'CRITICAL LEAK FIXED: Removed Bangalore University photo (bangalore_university.jpg) shown for Jaipur institute',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹75,000/yr', notes: '2-Year full-time MBA under RTU Kota' }
    ]
  },
  {
    id: 1060,
    rawName: 'CH. CHARAN SINGH NATIONAL INSTITUTE OF AGRICULTURAL MARKETING',
    verifiedName: 'Chaudhary Charan Singh National Institute of Agricultural Marketing (CCS NIAM), Jaipur',
    website: 'https://ccsniam.gov.in',
    address: 'Kota Road, Bambala, Pratap Nagar, Sanganer, Jaipur - 302033, Rajasthan, India',
    phone: '0141-2770027 / 0141-2771938',
    email: 'info@ccsniam.ac.in',
    type: 'Public/Government (Autonomous Central Government Institute)',
    ownership: 'Government',
    affiliation: 'Ministry of Agriculture & Farmers Welfare, Govt of India & Approved by AICTE',
    img: '/images/campuses/campus_architecture_8.jpg',
    imgNotes: 'CRITICAL RESTORATION: Restored Central Government status; removed 403-blocked collegedunia hotlink',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹2,25,000/yr', notes: '2-Year AICTE-approved PGDM (Agri-Business Management)' }
    ]
  },
  {
    id: 1093,
    rawName: 'CHAMPARAN COLLEGE OF PROFESSIONAL EDUCATION',
    verifiedName: 'Champaran College of Professional Education (CCPE), Ghorasahan',
    website: 'https://ccpeus.com',
    address: 'Purnahiya, Ghorasahan, Dhaka, East Champaran - 845303, Bihar, India',
    phone: '+91-9115557000 / +91-8292913129',
    email: 'collegeccpe@gmail.com',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'Aryabhatta Knowledge University (AKU), Patna & Approved by AICTE, PCI',
    img: '/images/campuses/campus_architecture_1.jpg',
    imgNotes: 'CRITICAL LEAK FIXED: Removed CU Shah College Mumbai photo (campus_cu_shah_mumbai.png) shown for East Champaran college',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹50,000/yr', notes: '2-Year full-time MBA under AKU Patna' }
    ]
  },
  {
    id: 1100,
    rawName: 'RUNGTA INSTITUTE OF TECHNOLOGY AND MANAGEMENT',
    verifiedName: 'Rungta Institute of Technology and Management (RITM), Forbesganj',
    website: 'https://www.ritm.ac.in',
    address: 'Near Block Office, Forbesganj, Araria District - 854318, Bihar, India',
    phone: '+91-8539984499 / 06455-222006',
    email: 'admissions@ritm.ac.in',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'Bihar Engineering University (BEU), Patna & SBTE Bihar, Approved by AICTE',
    img: '/images/campuses/campus_architecture_2.jpg',
    imgNotes: 'CRITICAL LEAK FIXED: Removed CU Shah College Mumbai photo (campus_cu_shah_mumbai.png) shown for Forbesganj institute',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹50,000/yr', notes: '2-Year full-time MBA / technical programs' }
    ]
  },
  {
    id: 1125,
    rawName: 'MAMTA INSTITUTE OF EDUCATION',
    verifiedName: 'Mamta Institute of Education (MIE), Daraundha, Siwan',
    website: 'https://mieedu.in',
    address: 'Chintamanpur, Daraundha, Siwan - 841404, Bihar, India',
    phone: '+91-8102916973 / +91-9386806864',
    email: 'aihepatna@gmail.com',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'Aryabhatta Knowledge University (AKU) / SBTE Bihar & Approved by AICTE',
    img: '/images/campuses/campus_architecture_3.jpg',
    imgNotes: 'Removed fragile collegedunia hotlink, remapped to representative asset',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹50,000/yr', notes: '2-Year full-time MBA under AKU Patna' },
      { name: 'BHM & CT / Technical', duration: '4 Years', fee: '₹60,000/yr', notes: '4-Year undergraduate technical/professional degree' }
    ]
  },
  {
    id: 1128,
    rawName: 'INSTITUTE OF MANAGEMENT AND PLANNING AND ADVANCED COMPUTER TRAINING',
    verifiedName: 'Institute of Management and Planning and Advanced Computer Training (IMPACT College), Patna',
    website: 'https://www.impactcollege.edu.in',
    address: 'Gaurichak, Sampatchak / Shyam Arcade, Bailey Road, Patna - 800007, Bihar, India',
    phone: '+91-9570383838 / +91-7280043230',
    email: 'info@impactcollege.in',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'Aryabhatta Knowledge University (AKU), Patna & Approved by AICTE, Govt of Bihar',
    img: '/images/campuses/campus_architecture_4.jpg',
    imgNotes: 'Removed fragile studyclap hotlink, remapped to representative asset',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹75,000/yr', notes: '2-Year full-time MBA under AKU Patna' }
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

batch12Colleges.forEach(col => {
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

console.log('Appended Batch 12 entries to CSV files.');

const progress = JSON.parse(fs.readFileSync(PROGRESS_PATH, 'utf8'));
const newCompleted = [...(progress.completed_ids || [])];
batch12Colleges.forEach(c => {
  if (!newCompleted.includes(c.id)) newCompleted.push(c.id);
});

progress.completed_ids = newCompleted;
progress.completed_count = newCompleted.length;
progress.current_batch = 12;
progress.last_updated = new Date().toISOString();

fs.writeFileSync(PROGRESS_PATH, JSON.stringify(progress, null, 2), 'utf8');
console.log(`Updated progress.json: Total verified = ${progress.completed_count}, Current batch = 12.`);

