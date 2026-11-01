const fs = require('fs');
const path = require('path');

const progressFile = path.join(__dirname, '..', 'reports', 'verification', 'progress.json');
const collegeCsvFile = path.join(__dirname, '..', 'reports', 'verification', 'college-verification.csv');
const courseCsvFile = path.join(__dirname, '..', 'reports', 'verification', 'course-verification.csv');
const imageCsvFile = path.join(__dirname, '..', 'reports', 'verification', 'image-verification.csv');

const progress = JSON.parse(fs.readFileSync(progressFile, 'utf8'));

const batch70Colleges = [
  {
    id: 269,
    name: 'Maulana Azad Medical College (MAMC New Delhi)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Public/Government',
    website: 'https://www.mamc.ac.in',
    phone: '011-23239271',
    rating: 4.9,
    established: 1958,
    image: '',
    imageStatus: 'Purged COEP Pune leak',
    notes: 'Premier State Government Medical College under Govt of NCT of Delhi (attached to Lok Nayak Hospital, affiliated to DU). Restored Public status from Private; purged COEP Pune photo leak, dummy phone, and raw search URL; audited statutory government MBBS fee (₹2,945/Yr).'
  },
  {
    id: 270,
    name: 'Vardhman Mahavir Medical College, Delhi (VMMC & Safdarjung Hospital)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Public/Government',
    website: 'https://vmmc-sjh.nic.in/',
    phone: '011-26165060',
    rating: 4.9,
    established: 2001,
    image: '',
    imageStatus: 'Purged BMS Bangalore leak',
    notes: 'Central Government Medical College under MoHFW, Govt of India (attached to Safdarjung Hospital, affiliated to GGSIPU). Restored Public status from Private; purged BMS Bangalore photo leak; audited statutory central govt MBBS fee (₹38k/Yr).'
  },
  {
    id: 271,
    name: 'Management Development Institute, Gurgaon (MDI Gurgaon)',
    state: 'Haryana',
    city: 'Gurugram',
    type: 'Private',
    website: 'https://www.mdi.ac.in/',
    phone: '0124-4560000',
    rating: 4.8,
    established: 1973,
    image: 'https://drupal.mbauniverse.com/sites/default/files/2025-07/MDI-Gurgoan-02-Campus.jpg',
    imageStatus: 'Retained verified authentic MDI Gurgaon campus photo',
    notes: 'Premier autonomous business school (AACSB, AMBA, SAQS, NIRF Top 15). Corrected state to Haryana; retained authentic campus photo; replaced generic fees with real PGDM fee structure (₹24.16L Total).'
  },
  {
    id: 272,
    name: 'Lloyd Institute of Engineering and Technology, Greater Noida',
    state: 'Uttar Pradesh',
    city: 'Greater Noida',
    type: 'Private',
    website: 'https://liet.in/',
    phone: '+91 8588803919',
    rating: 4.3,
    established: 2002,
    image: '',
    imageStatus: 'Purged Maniben Matunga leak',
    notes: 'Affiliated to AKTU Lucknow, approved by AICTE. Corrected state to Uttar Pradesh; purged Maniben Matunga photo leak; audited engineering curricula.'
  },
  {
    id: 274,
    name: 'Ganga Institute of Technology and Management, Jhajjar',
    state: 'Haryana',
    city: 'Jhajjar',
    type: 'Private',
    website: 'https://www.gangainstitute.com',
    phone: '01251-239488',
    rating: 4.1,
    established: 2008,
    image: '',
    imageStatus: 'Purged VNIT Nagpur leak',
    notes: 'Affiliated to MDU Rohtak, approved by AICTE (NAAC A). Corrected state to Haryana; purged VNIT Nagpur photo leak and dummy phone; audited engineering programs.'
  },
  {
    id: 275,
    name: 'Delhi Technological University (DTU New Delhi)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Public/Government',
    website: 'https://www.dtu.ac.in/',
    phone: '011-27871018',
    rating: 4.9,
    established: 1941,
    image: '/images/campuses/delhi_technological_university.jpg',
    imageStatus: 'Retained verified authentic DTU campus photo',
    notes: 'Historic State Public University (formerly DCE - Delhi College of Engineering, est. 1941). Cleaned duplicate scraper name; restored Public status from Private; retained authentic campus photo; audited JAC Delhi B.Tech and M.Tech fee structures.'
  },
  {
    id: 276,
    name: 'Maharaja Agrasen Institute of Technology, Delhi (MAIT Delhi)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Private',
    website: 'https://www.mait.ac.in',
    phone: '011-65151162',
    rating: 4.6,
    established: 1999,
    image: 'https://www.joonsquare.com/usermanage/image/business/maharaja-agrasen-institute-of-technology-west-delhi-2516/maharaja-agrasen-institute-of-technology-west-delhi-mait-1.jpg',
    imageStatus: 'Retained verified authentic campus photo',
    notes: 'Affiliated to GGSIPU, approved by AICTE (MATES). Retained authentic campus photo; audited B.Tech and MBA programs.'
  },
  {
    id: 277,
    name: 'KCC Institute of Technology and Management, Greater Noida',
    state: 'Uttar Pradesh',
    city: 'Greater Noida',
    type: 'Private',
    website: 'https://www.kccitm.edu.in',
    phone: '+91 9210065555',
    rating: 4.2,
    established: 2009,
    image: '',
    imageStatus: 'Purged Maniben Matunga leak',
    notes: 'Affiliated to AKTU Lucknow. Corrected state to Uttar Pradesh; purged Maniben Matunga photo leak; audited engineering curricula.'
  },
  {
    id: 278,
    name: 'Delhi School of Management, DTU (DSM DTU New Delhi)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Public/Government',
    website: 'https://dsm.dtu.ac.in/',
    phone: '011-27871018',
    rating: 4.6,
    established: 2009,
    image: '/images/campuses/delhi_technological_university.jpg',
    imageStatus: 'Retained verified authentic DTU campus photo',
    notes: 'Constituent Department of Delhi Technological University (State Public). Restored Public status from Private; retained genuine campus photo; audited statutory MBA fee structure (₹1.65L/Yr).'
  },
  {
    id: 279,
    name: 'SRM Institute of Science and Technology Delhi-NCR Campus, Ghaziabad',
    state: 'Uttar Pradesh',
    city: 'Ghaziabad',
    type: 'Deemed',
    website: 'https://www.srmup.in/',
    phone: '01232-234301',
    rating: 4.4,
    established: 1997,
    image: '',
    imageStatus: 'Purged Maniben Matunga leak',
    notes: 'Delhi-NCR campus of SRMIST Deemed University (NAAC A++). Corrected state to Uttar Pradesh; purged Maniben Matunga photo leak and dummy phone; audited engineering, MBA, and MCA degree programs.'
  }
];

const batch70Courses = [
  // 269 MAMC New Delhi
  { collegeId: 269, title: 'Bachelor of Medicine and Bachelor of Surgery (MBBS)', division: 'Undergraduate', duration: '5.5 Years', fees: '₹2,945/Year', eligibility: '10+2 with 50% in PCB + NEET UG (Top 100 Rank)', exams: 'NEET UG', intake: '250' },
  { collegeId: 269, title: 'MD / MS Postgraduate Programs', division: 'Postgraduate', duration: '3 Years', fees: '₹15,600/Year', eligibility: 'MBBS degree + NEET PG', exams: 'NEET PG', intake: '245' },
  { collegeId: 269, title: 'DM / M.Ch Super-specialty Programs (GB Pant)', division: 'Super-specialty', duration: '3 Years', fees: '₹20,000/Year', eligibility: 'MD/MS in relevant branch + NEET SS', exams: 'NEET SS', intake: '60' },

  // 270 VMMC Delhi
  { collegeId: 270, title: 'Bachelor of Medicine and Bachelor of Surgery (MBBS)', division: 'Undergraduate', duration: '5.5 Years', fees: '₹38,000/Year', eligibility: '10+2 with 50% in PCB + NEET UG (Top 150 Rank)', exams: 'NEET UG', intake: '170' },
  { collegeId: 270, title: 'MD / MS Postgraduate Medical Programs', division: 'Postgraduate', duration: '3 Years', fees: '₹26,000/Year', eligibility: 'MBBS degree + NEET PG', exams: 'NEET PG', intake: '210' },
  { collegeId: 270, title: 'B.Sc (Hons) in Medical Laboratory Technology', division: 'Undergraduate', duration: '3 Years', fees: '₹20,000/Year', eligibility: '10+2 with PCB + IPU CET / NEET', exams: 'IPU CET, NEET', intake: '30' },

  // 271 MDI Gurgaon
  { collegeId: 271, title: 'Post Graduate Diploma in Management (PGDM)', division: 'Postgraduate', duration: '2 Years', fees: '₹12,08,000/Year', eligibility: 'Graduation in any discipline with 50% + CAT (95+ %ile) + GD/PI', exams: 'CAT', intake: '360' },
  { collegeId: 271, title: 'PGDM in International Business (Dual Degree with ESCP Europe)', division: 'Postgraduate', duration: '2 Years', fees: '₹14,00,000/Year', eligibility: 'Graduation in engineering/commerce + CAT + GD/PI', exams: 'CAT', intake: '120' },
  { collegeId: 271, title: 'PGDM in Human Resource Management (PGDM-HRM)', division: 'Postgraduate', duration: '2 Years', fees: '₹12,08,000/Year', eligibility: 'Graduation with 50% + CAT + GD/PI', exams: 'CAT', intake: '60' },

  // 272 LIET Greater Noida
  { collegeId: 272, title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,25,000/Year', eligibility: '10+2 with PCM + JEE Main / CUET / Merit', exams: 'JEE Main, CUET', intake: '180' },
  { collegeId: 272, title: 'B.Tech in Artificial Intelligence & Machine Learning', division: 'Undergraduate', duration: '4 Years', fees: '₹1,25,000/Year', eligibility: '10+2 with PCM + JEE Main / CUET', exams: 'JEE Main, CUET', intake: '120' },
  { collegeId: 272, title: 'Master of Computer Applications (MCA)', division: 'Postgraduate', duration: '2 Years', fees: '₹95,000/Year', eligibility: 'Graduation with BCA/B.Sc + CUET PG', exams: 'CUET PG', intake: '60' },

  // 274 GITAM Jhajjar
  { collegeId: 274, title: 'B.Tech in Computer Science & Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹82,000/Year', eligibility: '10+2 with PCM + JEE Main / HSTES', exams: 'JEE Main, HSTES', intake: '120' },
  { collegeId: 274, title: 'B.Tech in Mechanical / Civil / Electrical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹82,000/Year', eligibility: '10+2 with PCM + HSTES Counseling', exams: 'HSTES', intake: '120' },
  { collegeId: 274, title: 'Master of Business Administration (MBA)', division: 'Postgraduate', duration: '2 Years', fees: '₹70,000/Year', eligibility: 'Graduation with 50% + Entrance Exam', exams: 'CAT, MAT, CMAT', intake: '60' },

  // 275 DTU New Delhi
  { collegeId: 275, title: 'B.Tech in Computer Engineering / Information Technology', division: 'Undergraduate', duration: '4 Years', fees: '₹1,95,000/Year', eligibility: '10+2 with PCM (60%+) + JEE Main / JAC Delhi (99+ %ile)', exams: 'JEE Main, JAC Delhi', intake: '480' },
  { collegeId: 275, title: 'B.Tech in Mechanical / Electrical / Electronics Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,95,000/Year', eligibility: '10+2 with PCM + JEE Main / JAC Delhi', exams: 'JEE Main, JAC Delhi', intake: '720' },
  { collegeId: 275, title: 'B.Tech in Mathematics and Computing / Software Engg', division: 'Undergraduate', duration: '4 Years', fees: '₹1,95,000/Year', eligibility: '10+2 with PCM + JEE Main / JAC Delhi', exams: 'JEE Main, JAC Delhi', intake: '360' },
  { collegeId: 275, title: 'M.Tech in Computer Science / VLSI / Thermal Engineering', division: 'Postgraduate', duration: '2 Years', fees: '₹1,40,000/Year', eligibility: 'B.Tech in relevant branch + GATE', exams: 'GATE', intake: '450' },

  // 276 MAIT Delhi
  { collegeId: 276, title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,45,000/Year', eligibility: '10+2 with PCM + JEE Main / IPU CET Counseling', exams: 'JEE Main, IPU CET', intake: '240' },
  { collegeId: 276, title: 'B.Tech in Information Technology / Artificial Intelligence', division: 'Undergraduate', duration: '4 Years', fees: '₹1,45,000/Year', eligibility: '10+2 with PCM + JEE Main / IPU CET', exams: 'JEE Main, IPU CET', intake: '240' },
  { collegeId: 276, title: 'Master of Business Administration (MBA)', division: 'Postgraduate', duration: '2 Years', fees: '₹1,35,000/Year', eligibility: 'Graduation with 50% + CAT / CMAT / IPU CET', exams: 'CAT, CMAT, IPU CET', intake: '180' },

  // 277 KCC ITM Greater Noida
  { collegeId: 277, title: 'B.Tech in Computer Science & Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,10,000/Year', eligibility: '10+2 with PCM + JEE Main / CUET / Merit', exams: 'JEE Main, CUET', intake: '240' },
  { collegeId: 277, title: 'B.Tech in CSE (Artificial Intelligence & Data Science)', division: 'Undergraduate', duration: '4 Years', fees: '₹1,10,000/Year', eligibility: '10+2 with PCM + JEE Main / CUET', exams: 'JEE Main, CUET', intake: '120' },
  { collegeId: 277, title: 'Master of Business Administration (MBA)', division: 'Postgraduate', duration: '2 Years', fees: '₹95,000/Year', eligibility: 'Graduation with 50% + CAT / MAT / CUET PG', exams: 'CAT, MAT, CUET PG', intake: '120' },

  // 278 DSM DTU
  { collegeId: 278, title: 'Master of Business Administration (MBA - Core)', division: 'Postgraduate', duration: '2 Years', fees: '₹1,65,000/Year', eligibility: 'Graduation with 50% + CAT (85+ %ile) + PI', exams: 'CAT', intake: '150' },
  { collegeId: 278, title: 'MBA in Business Analytics', division: 'Postgraduate', duration: '2 Years', fees: '₹1,65,000/Year', eligibility: 'Graduation in Engg/Science/Commerce with 50% + CAT/MAT', exams: 'CAT, MAT', intake: '60' },
  { collegeId: 278, title: 'Executive MBA', division: 'Postgraduate', duration: '2 Years', fees: '₹1,85,000/Year', eligibility: 'Graduation + 3 yrs corporate work experience', exams: 'Work Exp + PI', intake: '60' },

  // 279 SRMIST Ghaziabad
  { collegeId: 279, title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹2,75,000/Year', eligibility: '10+2 with PCM + SRMJEEE / JEE Main', exams: 'SRMJEEE, JEE Main', intake: '360' },
  { collegeId: 279, title: 'B.Tech in Artificial Intelligence & Machine Learning', division: 'Undergraduate', duration: '4 Years', fees: '₹2,75,000/Year', eligibility: '10+2 with PCM + SRMJEEE / JEE Main', exams: 'SRMJEEE, JEE Main', intake: '120' },
  { collegeId: 279, title: 'Master of Business Administration (MBA)', division: 'Postgraduate', duration: '2 Years', fees: '₹2,10,000/Year', eligibility: 'Graduation with 50% + SRMJEEM / CAT / MAT', exams: 'SRMJEEM, CAT, MAT', intake: '120' },
  { collegeId: 279, title: 'Master of Computer Applications (MCA)', division: 'Postgraduate', duration: '2 Years', fees: '₹1,10,000/Year', eligibility: 'Graduation with BCA/B.Sc + SRM Entrance', exams: 'SRM Entrance', intake: '60' }
];

// Append to CSVs
for (const col of batch70Colleges) {
  const line = `"${col.id}","${col.name.replace(/"/g, '""')}","${col.state}","${col.city}","${col.type}","${col.website}","${col.phone}","${col.rating}","${col.established}","VERIFIED","Batch 70"\n`;
  fs.appendFileSync(collegeCsvFile, line, 'utf8');

  const imgLine = `"${col.id}","${col.name.replace(/"/g, '""')}","${col.image}","${col.imageStatus}","Batch 70"\n`;
  fs.appendFileSync(imageCsvFile, imgLine, 'utf8');
}

for (const crs of batch70Courses) {
  const crsLine = `"${crs.collegeId}","${crs.title.replace(/"/g, '""')}","${crs.division}","${crs.duration}","${crs.fees}","${crs.eligibility.replace(/"/g, '""')}","${crs.exams}","${crs.intake}","VERIFIED","Batch 70"\n`;
  fs.appendFileSync(courseCsvFile, crsLine, 'utf8');
}

// Update progress
const newIds = batch70Colleges.map(c => c.id);
const uniqueCompleted = Array.from(new Set([...progress.completed_ids, ...newIds]));
progress.completed_ids = uniqueCompleted;
progress.total_verified = uniqueCompleted.length;
progress.current_batch = 70;
progress.last_updated = new Date().toISOString();

fs.writeFileSync(progressFile, JSON.stringify(progress, null, 2), 'utf8');

console.log(`Appended 10 colleges to college-verification.csv`);
console.log(`Appended ${batch70Courses.length} courses to course-verification.csv`);
console.log(`Updated progress.json: total_verified = ${progress.total_verified}, current_batch = ${progress.current_batch}`);
