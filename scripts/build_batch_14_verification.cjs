const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const COLLEGE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'college-verification.csv');
const COURSE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'course-verification.csv');
const IMAGE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'image-verification.csv');
const PROGRESS_PATH = path.join(BASE_DIR, 'reports', 'verification', 'progress.json');

const today = '2026-10-31';

const batch14Colleges = [
  {
    id: 1246,
    rawName: 'LEAD COLLEGE',
    verifiedName: 'LEAD College (Autonomous), Dhoni, Palakkad',
    website: 'https://www.lead.ac.in',
    address: 'Dhoni P.O., Palakkad - 678009, Kerala, India',
    phone: '+91 9497713693 / 0491-3036600',
    email: 'info@lead.ac.in',
    type: 'Private (Autonomous Institute)',
    ownership: 'Private',
    affiliation: 'University of Calicut & Approved by AICTE, NAAC A+ Accredited',
    img: '/images/campuses/campus_architecture_1.jpg',
    imgNotes: 'Removed fragile collegebatch webp hotlink, remapped to representative asset',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹3,50,000/yr', notes: '2-Year full-time Autonomous MBA under Calicut University' }
    ]
  },
  {
    id: 1253,
    rawName: 'G KARUNAKARAN MEMORIAL CO-OPERATIVE COLLEGE OF MANAGEMENT AND TECHNOLOGY',
    verifiedName: 'G. Karunakaran Memorial Co-operative College of Management and Technology (GKMCCMT), Karakulam',
    website: 'https://gkmccmt.in',
    address: 'P.B. No. 5, Kakkode, Karakulam P.O., Aruvikkara Road, Thiruvananthapuram - 695564, Kerala, India',
    phone: '+91 7559887399 / 0472-2887399',
    email: 'directorgkmccmt@gmail.com',
    type: 'Private (Co-operative Sector Managed)',
    ownership: 'Private',
    affiliation: 'University of Kerala & Approved by AICTE',
    img: '/images/campuses/campus_architecture_2.jpg',
    imgNotes: 'CRITICAL LEAK FIXED: Removed Chetana Bandra Mumbai photo (chetana_bandra.jpg) shown for a Trivandrum college',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹1,20,000/yr', notes: '2-Year full-time MBA under University of Kerala' }
    ]
  },
  {
    id: 1259,
    rawName: 'RAMS KUZHUPPILLY',
    verifiedName: 'Rural Academy for Management Studies (RAMS by CRAFT), Kuzhuppilly, Kochi',
    website: 'https://ramsbschool.org',
    address: 'Kuzhuppilly, Ayyampilly P.O., Kochi, Ernakulam District - 682501, Kerala, India',
    phone: '+91 9061519222 / 0484-2417444',
    email: 'admin@ramsbschool.org',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'Mahatma Gandhi University (MGU), Kottayam & Approved by AICTE',
    img: '/images/campuses/campus_architecture_9.jpg',
    imgNotes: 'Clean unbranded representative architectural asset with Representative Image badge',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹1,15,000/yr', notes: '2-Year full-time MBA under MG University Kottayam' }
    ]
  },
  {
    id: 1272,
    rawName: 'GURUDEV INSTITUTE OF MANAGEMENT STUDIES',
    verifiedName: 'Gurudev Institute of Management Studies (GIMS), Kadakkal, Kollam',
    website: 'http://gimskerala.in',
    address: 'Kottapuram, Kadakkal, Elampazhannoor P.O., Kollam District - 691536, Kerala, India',
    phone: '+91 70127 01752 / 0474-2424594',
    email: 'gimdskdl@gmail.com',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'University of Kerala & Approved by AICTE',
    img: '/images/campuses/campus_architecture_3.jpg',
    imgNotes: 'Removed fragile collegedunia campus image hotlink, remapped to representative asset',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹95,000/yr', notes: '2-Year full-time MBA under University of Kerala' }
    ]
  },
  {
    id: 1276,
    rawName: 'MARIAN ACADEMY OF MANAGEMENT STUDIES',
    verifiedName: 'Marian Academy of Management Studies (MAMS), Kothamangalam',
    website: 'https://www.mams.ac.in',
    address: 'Marian Village, Puthuppady P.O., Kothamangalam, Ernakulam District - 686673, Kerala, India',
    phone: '0485-2816247 / +91 9446209878',
    email: 'info@mams.ac.in',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'Mahatma Gandhi University (MGU), Kottayam & Approved by AICTE',
    img: '/images/campuses/campus_architecture_4.jpg',
    imgNotes: 'CRITICAL LEAK FIXED: Removed COEP Pune Victorian heritage photo (campus_coep_pune.png) shown for an Ernakulam Kerala college',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹1,10,000/yr', notes: '2-Year full-time MBA under MG University Kottayam' }
    ]
  },
  {
    id: 1277,
    rawName: 'KMCT INSTITUTE OF EMERGING TECHNOLOGY AND MANAGEMENT',
    verifiedName: 'KMCT Institute of Emerging Technology and Management (KMCT IETM), Mukkam, Kozhikode',
    website: 'https://www.kmctemergingtechnology.org',
    address: 'Near Thoongumpuram Vayanashala, Muthalam, Manassery P.O., Mukkam, Kozhikode - 673602, Kerala, India',
    phone: '+91 89430 72000 / 0495-2294700',
    email: 'ceet@kmct.org',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'APJ Abdul Kalam Technological University (KTU) & Approved by AICTE',
    img: '/images/campuses/campus_architecture_6.jpg',
    imgNotes: 'Removed fragile collegebatch webp hotlink, remapped to representative asset',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹1,25,000/yr', notes: '2-Year full-time MBA under APJ Abdul Kalam Technological University' }
    ]
  },
  {
    id: 1286,
    rawName: 'SIRAJUL HUDA INSTITUTE OF MANAGEMENT STUDIES',
    verifiedName: 'Sirajul Huda Institute of Management Studies (SHIMS), Kuttiadi, Kozhikode',
    website: 'https://shims.ac.in',
    address: 'Sirajul Huda Educational Complex, Kuttiadi, Kozhikode District - 673508, Kerala, India',
    phone: '+91 83300 22588 / +91 83048 84588',
    email: 'info@shims.ac.in',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'University of Calicut & Approved by AICTE',
    img: '/images/campuses/campus_architecture_5.jpg',
    imgNotes: 'Clean unbranded representative architectural asset with Representative Image badge',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹1,00,000/yr', notes: '2-Year full-time MBA under University of Calicut' }
    ]
  },
  {
    id: 1287,
    rawName: 'LEADERS COLLEGE',
    verifiedName: 'Leaders College (Leaders Academy of Business), Kadalayi, Kannur',
    website: 'https://leaderscollege.in',
    address: 'No. 38/1609-1, Leaders College Building, Adikadalayi Road, Kadalayi P.O., Kannur - 670003, Kerala, India',
    phone: '+91 90614 31111 / +91 98468 10934',
    email: 'info@leaderscollege.in',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'Approved by AICTE & Kannur University',
    img: '/images/campuses/campus_architecture_7.jpg',
    imgNotes: 'CRITICAL LEAK FIXED: Removed RIIM Pune photo (riim_pune.jpeg) shown for a Kannur, Kerala college',
    courses: [
      { name: 'MBA / PGDM', duration: '2 Years', fee: '₹1,30,000/yr', notes: '2-Year full-time AICTE-approved PGDM / MBA' }
    ]
  },
  {
    id: 1292,
    rawName: 'MARTHOMA COLLEGE OF MANAGEMENT AND TECHNOLOGY',
    verifiedName: 'Mar Thoma College of Management and Technology (MCMAT), Perumbavoor',
    website: 'https://www.mcmat.edu.in',
    address: 'Asramam Campus, Perumbavoor, Ernakulam District - 683542, Kerala, India',
    phone: '+91 9388616626 / +91 9961775991',
    email: 'admin@mcmat.edu.in',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'Mahatma Gandhi University (MGU), Kottayam & Approved by AICTE',
    img: '/images/campuses/campus_architecture_8.jpg',
    imgNotes: 'Removed old external WordPress hotlink, remapped to representative asset',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹1,25,000/yr', notes: '2-Year full-time MBA under MG University Kottayam' }
    ]
  },
  {
    id: 1294,
    rawName: 'SNES INSTITUTE OF MANAGEMENT STUDIES AND RESEARCH',
    verifiedName: 'SNES Institute of Management Studies and Research (SNES IMSAR), Kunnamangalam, Calicut',
    website: 'https://imsar.ac.in',
    address: 'Chethukadave, Kunnamangalam, Calicut (Kozhikode) - 673571, Kerala, India',
    phone: '+91 9496939922 / 0495-2802022',
    email: 'snesimsar@gmail.com',
    type: 'Private',
    ownership: 'Private',
    affiliation: 'University of Calicut & Approved by AICTE',
    img: '/images/campuses/campus_architecture_1.jpg',
    imgNotes: 'Removed fragile kollegeapply hotlink, remapped to representative asset',
    courses: [
      { name: 'MBA', duration: '2 Years', fee: '₹1,20,000/yr', notes: '2-Year full-time MBA under University of Calicut' }
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

batch14Colleges.forEach(col => {
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

console.log('Appended Batch 14 entries to CSV files.');

const progress = JSON.parse(fs.readFileSync(PROGRESS_PATH, 'utf8'));
const newCompleted = [...(progress.completed_ids || [])];
batch14Colleges.forEach(c => {
  if (!newCompleted.includes(c.id)) newCompleted.push(c.id);
});

progress.completed_ids = newCompleted;
progress.completed_count = newCompleted.length;
progress.current_batch = 14;
progress.last_updated = new Date().toISOString();

fs.writeFileSync(PROGRESS_PATH, JSON.stringify(progress, null, 2), 'utf8');
console.log(`Updated progress.json: Total verified = ${progress.completed_count}, Current batch = 14.`);

