const fs = require('fs');
const path = require('path');

const progressFile = path.join(__dirname, '..', 'reports', 'verification', 'progress.json');
const collegeCsvFile = path.join(__dirname, '..', 'reports', 'verification', 'college-verification.csv');
const courseCsvFile = path.join(__dirname, '..', 'reports', 'verification', 'course-verification.csv');
const imageCsvFile = path.join(__dirname, '..', 'reports', 'verification', 'image-verification.csv');

const progress = JSON.parse(fs.readFileSync(progressFile, 'utf8'));

const batch64Colleges = [
  {
    id: 204,
    name: 'Datta Meghe Institute of Higher Education and Research, Wardha',
    state: 'Maharashtra',
    city: 'Wardha',
    type: 'Deemed',
    website: 'https://dmiher.edu.in/',
    phone: '07152-287701',
    rating: 4.6,
    established: 2005,
    image: '',
    imageStatus: 'Purged IIT Bombay leak',
    notes: 'Category-I Deemed to be University (NAAC A++). Corrected mislabel Public to Deemed. Purged IIT Bombay photo leak. Audited MBBS (JNMC), Dental, and Engineering degrees.'
  },
  {
    id: 205,
    name: 'Dr. D.Y. Patil Vidyapeeth, Pune',
    state: 'Maharashtra',
    city: 'Pune',
    type: 'Deemed',
    website: 'https://dpu.edu.in/',
    phone: '020-67116412',
    rating: 4.7,
    established: 2003,
    image: 'https://dpu.edu.in/img/compression/buildings3.jpg',
    imageStatus: 'Retained verified authentic DPU campus photo',
    notes: 'NAAC A++ Deemed to be University. Audited MBBS, Dental, and Biotechnology faculties.'
  },
  {
    id: 206,
    name: 'Dr. D. Y. Patil Institute Of Technology, Pimpri, Pune',
    state: 'Maharashtra',
    city: 'Pune',
    type: 'Private',
    website: 'https://www.engg.dypvp.edu.in/',
    phone: '020-27805298',
    rating: 4.4,
    established: 1998,
    image: '',
    imageStatus: 'Purged Thakur Kandivali leak',
    notes: 'Affiliated to SPPU, approved by AICTE. Purged Thakur Kandivali photo leak. Audited engineering fees.'
  },
  {
    id: 207,
    name: 'Veermata Jijabai Technological Institute (VJTI Mumbai)',
    state: 'Maharashtra',
    city: 'Mumbai',
    type: 'Public',
    website: 'https://vjti.ac.in',
    phone: '022-24198101',
    rating: 4.8,
    established: 1887,
    image: '/images/campuses/vjti_mumbai.jpg',
    imageStatus: 'Retained authentic historic VJTI Matunga campus photo',
    notes: 'Iconic government autonomous engineering college (est. 1887). Restored Public status from Private; purged dummy phone and raw search URL; audited statutory state engineering fees (₹84k/Yr).'
  },
  {
    id: 208,
    name: 'Vishwakarma Institute of Technology, Pune (VIT Pune)',
    state: 'Maharashtra',
    city: 'Pune',
    type: 'Private',
    website: 'https://www.vit.edu',
    phone: '020-24202180',
    rating: 4.6,
    established: 1983,
    image: 'https://img.jagranjosh.com/images/2024/January/312024/Vishwakarma.jpg',
    imageStatus: 'Retained verified authentic VIT Pune campus photo',
    notes: 'Autonomous institute affiliated to SPPU (NAAC A++). Purged dummy phone and raw search URL; verified engineering fee structure.'
  },
  {
    id: 209,
    name: 'SNBP University, Pune',
    state: 'Maharashtra',
    city: 'Pune',
    type: 'Private',
    website: 'https://snbpu.edu.in/',
    phone: '020-27470404',
    rating: 4.1,
    established: 2023,
    image: '',
    imageStatus: 'Purged Matoshri leak',
    notes: 'State Private University under Maharashtra Act. Corrected inverted Public label to Private; purged Matoshri photo leak, dummy phone, and raw search URL.'
  },
  {
    id: 210,
    name: 'G.H. Raisoni SkillTech University, Nagpur',
    state: 'Maharashtra',
    city: 'Nagpur',
    type: 'Private',
    website: 'https://ghrstu.edu.in/',
    phone: '+91 7887886726',
    rating: 4.2,
    established: 2023,
    image: '',
    imageStatus: 'Purged Atharva Malad leak',
    notes: 'State Skills University. Corrected inverted Public label to Private; purged Atharva Malad photo leak; audited skill-integrated engineering & business degrees.'
  },
  {
    id: 211,
    name: 'COEP Technological University (College of Engineering Pune)',
    state: 'Maharashtra',
    city: 'Pune',
    type: 'Public/Government',
    website: 'https://www.coep.org.in',
    phone: '020-25507000',
    rating: 4.9,
    established: 1854,
    image: '/images/campuses/campus_coep_pune.png',
    imageStatus: 'Retained authentic historic COEP Shivajinagar campus photo',
    notes: 'Historic State Unitary Technological University (est. 1854). Restored Public/Government status from Private; purged dummy phone; audited statutory state university fees (₹1.3L/Yr).'
  },
  {
    id: 212,
    name: 'Universal SkillTech University, Mumbai',
    state: 'Maharashtra',
    city: 'Mumbai',
    type: 'Private',
    website: 'https://ustu.edu.in/',
    phone: '+91 7738992638',
    rating: 4.1,
    established: 2023,
    image: '',
    imageStatus: 'Purged SVIMS Wadala leak',
    notes: 'State Skills University. Corrected inverted Public label to Private; purged SVIMS Wadala photo leak and raw search URL; audited design & technology curricula.'
  },
  {
    id: 213,
    name: 'Symbiosis Institute of Technology, Pune (SIT Pune)',
    state: 'Maharashtra',
    city: 'Pune',
    type: 'Deemed',
    website: 'https://www.sitpune.edu.in/',
    phone: '020-61936300',
    rating: 4.5,
    established: 2008,
    image: '',
    imageStatus: 'Purged Bunts Sangha leak',
    notes: 'Constituent institute of Symbiosis International. Purged Bunts Sangha photo leak, dummy phone, and raw search URL; audited engineering degree offerings.'
  }
];

const batch64Courses = [
  // 204 DMIHER Wardha
  { collegeId: 204, title: 'Bachelor of Medicine and Bachelor of Surgery (MBBS - JNMC)', division: 'Undergraduate', duration: '5.5 Years', fees: '₹21,50,000/Year', eligibility: '10+2 with 50% in PCB + NEET UG', exams: 'NEET UG', intake: '250' },
  { collegeId: 204, title: 'Bachelor of Dental Surgery (BDS - SPDC)', division: 'Undergraduate', duration: '5 Years', fees: '₹4,50,000/Year', eligibility: '10+2 with 50% in PCB + NEET UG', exams: 'NEET UG', intake: '100' },
  { collegeId: 204, title: 'B.Tech in Artificial Intelligence and Data Science', division: 'Undergraduate', duration: '4 Years', fees: '₹1,40,000/Year', eligibility: '10+2 with PCM + MHT CET / JEE Main', exams: 'MHT CET, JEE Main', intake: '120' },

  // 205 DPU Pune
  { collegeId: 205, title: 'Bachelor of Medicine and Bachelor of Surgery (MBBS)', division: 'Undergraduate', duration: '5.5 Years', fees: '₹25,00,000/Year', eligibility: '10+2 with 50% in PCB + NEET UG', exams: 'NEET UG', intake: '250' },
  { collegeId: 205, title: 'Bachelor of Dental Surgery (BDS)', division: 'Undergraduate', duration: '5 Years', fees: '₹7,00,000/Year', eligibility: '10+2 with 50% in PCB + NEET UG', exams: 'NEET UG', intake: '100' },
  { collegeId: 205, title: 'B.Tech in Biotechnology / Bioinformatics', division: 'Undergraduate', duration: '4 Years', fees: '₹1,95,000/Year', eligibility: '10+2 with PCM/PCB + DYPBET / NEET', exams: 'DYPBET, NEET', intake: '90' },

  // 206 DYPIT Pimpri Pune
  { collegeId: 206, title: 'B.E. in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,30,000/Year', eligibility: '10+2 with PCM + MHT CET / JEE Main', exams: 'MHT CET, JEE Main', intake: '240' },
  { collegeId: 206, title: 'B.E. in Artificial Intelligence & Data Science', division: 'Undergraduate', duration: '4 Years', fees: '₹1,30,000/Year', eligibility: '10+2 with PCM + MHT CET / JEE Main', exams: 'MHT CET, JEE Main', intake: '180' },
  { collegeId: 206, title: 'M.E. in Mechanical / Civil / Computer Engineering', division: 'Postgraduate', duration: '2 Years', fees: '₹95,000/Year', eligibility: 'B.E./B.Tech + GATE', exams: 'GATE', intake: '36' },

  // 207 VJTI Mumbai
  { collegeId: 207, title: 'B.Tech in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹84,000/Year', eligibility: '10+2 with PCM + MHT CET (99.8+ %ile) / JEE Main', exams: 'MHT CET, JEE Main', intake: '60' },
  { collegeId: 207, title: 'B.Tech in Information Technology', division: 'Undergraduate', duration: '4 Years', fees: '₹84,000/Year', eligibility: '10+2 with PCM + MHT CET / JEE Main', exams: 'MHT CET, JEE Main', intake: '60' },
  { collegeId: 207, title: 'B.Tech in Electrical / Electronics Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹84,000/Year', eligibility: '10+2 with PCM + MHT CET / JEE Main', exams: 'MHT CET, JEE Main', intake: '120' },
  { collegeId: 207, title: 'M.Tech in Computer / Structural / Power Systems', division: 'Postgraduate', duration: '2 Years', fees: '₹88,000/Year', eligibility: 'B.Tech in relevant branch + GATE', exams: 'GATE', intake: '150' },

  // 208 VIT Pune
  { collegeId: 208, title: 'B.Tech in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,92,000/Year', eligibility: '10+2 with PCM + MHT CET / JEE Main', exams: 'MHT CET, JEE Main', intake: '240' },
  { collegeId: 208, title: 'B.Tech in Artificial Intelligence & Data Science', division: 'Undergraduate', duration: '4 Years', fees: '₹1,92,000/Year', eligibility: '10+2 with PCM + MHT CET / JEE Main', exams: 'MHT CET, JEE Main', intake: '180' },
  { collegeId: 208, title: 'M.Tech in Computer / Design Engineering', division: 'Postgraduate', duration: '2 Years', fees: '₹95,000/Year', eligibility: 'B.Tech/B.E. + GATE', exams: 'GATE', intake: '36' },

  // 209 SNBP University Pune
  { collegeId: 209, title: 'B.Tech in Computer Science & Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,50,000/Year', eligibility: '10+2 with PCM + MHT CET / JEE Main / SNBPU Entrance', exams: 'MHT CET, JEE Main', intake: '120' },
  { collegeId: 209, title: 'Bachelor of Computer Applications (BCA)', division: 'Undergraduate', duration: '3 Years', fees: '₹75,000/Year', eligibility: '10+2 in any stream with 45%', exams: 'Merit', intake: '60' },
  { collegeId: 209, title: 'Master of Business Administration (MBA)', division: 'Postgraduate', duration: '2 Years', fees: '₹1,20,000/Year', eligibility: 'Graduation with 50% + CAT/CET/MAT', exams: 'CAT, MAH MBA CET, MAT', intake: '60' },

  // 210 GHRSTU Nagpur
  { collegeId: 210, title: 'B.Tech in Computer Science (Cloud & AI Integration)', division: 'Undergraduate', duration: '4 Years', fees: '₹1,35,000/Year', eligibility: '10+2 with PCM + MHT CET / JEE Main', exams: 'MHT CET, JEE Main', intake: '120' },
  { collegeId: 210, title: 'BBA in Digital Marketing & Supply Chain', division: 'Undergraduate', duration: '3 Years', fees: '₹65,000/Year', eligibility: '10+2 in any stream with 45%', exams: 'Merit', intake: '60' },
  { collegeId: 210, title: 'BCA in Cyber Security & Forensic Sciences', division: 'Undergraduate', duration: '3 Years', fees: '₹70,000/Year', eligibility: '10+2 in any stream', exams: 'Merit', intake: '60' },

  // 211 COEP Pune
  { collegeId: 211, title: 'B.Tech in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,30,000/Year', eligibility: '10+2 with PCM + MHT CET (99.8+ %ile) / JEE Main', exams: 'MHT CET, JEE Main', intake: '120' },
  { collegeId: 211, title: 'B.Tech in Mechanical / Electrical / Civil Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,30,000/Year', eligibility: '10+2 with PCM + MHT CET / JEE Main', exams: 'MHT CET, JEE Main', intake: '300' },
  { collegeId: 211, title: 'B.Tech in Artificial Intelligence & Robotics', division: 'Undergraduate', duration: '4 Years', fees: '₹1,30,000/Year', eligibility: '10+2 with PCM + MHT CET / JEE Main', exams: 'MHT CET, JEE Main', intake: '60' },
  { collegeId: 211, title: 'M.Tech in Advanced Manufacturing / VLSI / Power Electronics', division: 'Postgraduate', duration: '2 Years', fees: '₹1,15,000/Year', eligibility: 'B.Tech with 60% + GATE', exams: 'GATE', intake: '180' },

  // 212 USTU Mumbai
  { collegeId: 212, title: 'B.Tech in Emerging Technologies & AI', division: 'Undergraduate', duration: '4 Years', fees: '₹1,65,000/Year', eligibility: '10+2 with PCM + MHT CET / JEE Main / USTU Entrance', exams: 'MHT CET, JEE Main', intake: '120' },
  { collegeId: 212, title: 'BBA in FinTech & Business Analytics', division: 'Undergraduate', duration: '3 Years', fees: '₹1,10,000/Year', eligibility: '10+2 with 50%', exams: 'Merit', intake: '60' },
  { collegeId: 212, title: 'B.Des in User Experience & Interaction Design', division: 'Undergraduate', duration: '4 Years', fees: '₹1,80,000/Year', eligibility: '10+2 in any stream + Design Aptitude Test', exams: 'DAT', intake: '60' },

  // 213 SIT Pune
  { collegeId: 213, title: 'B.Tech in Computer Science & Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹3,20,000/Year', eligibility: '10+2 with PCM + SITEEE / JEE Main / MHT CET', exams: 'SITEEE, JEE Main, MHT CET', intake: '180' },
  { collegeId: 213, title: 'B.Tech in Artificial Intelligence and Machine Learning', division: 'Undergraduate', duration: '4 Years', fees: '₹3,20,000/Year', eligibility: '10+2 with PCM + SITEEE / JEE Main', exams: 'SITEEE, JEE Main', intake: '120' },
  { collegeId: 213, title: 'B.Tech in Robotics & Automation', division: 'Undergraduate', duration: '4 Years', fees: '₹2,80,000/Year', eligibility: '10+2 with PCM + SITEEE / JEE Main', exams: 'SITEEE, JEE Main', intake: '60' },
  { collegeId: 213, title: 'M.Tech in Artificial Intelligence & Engineering', division: 'Postgraduate', duration: '2 Years', fees: '₹1,80,000/Year', eligibility: 'B.Tech + GATE / SIT Entrance', exams: 'GATE', intake: '30' }
];

// Append to CSVs
for (const col of batch64Colleges) {
  const line = `"${col.id}","${col.name.replace(/"/g, '""')}","${col.state}","${col.city}","${col.type}","${col.website}","${col.phone}","${col.rating}","${col.established}","VERIFIED","Batch 64"\n`;
  fs.appendFileSync(collegeCsvFile, line, 'utf8');

  const imgLine = `"${col.id}","${col.name.replace(/"/g, '""')}","${col.image}","${col.imageStatus}","Batch 64"\n`;
  fs.appendFileSync(imageCsvFile, imgLine, 'utf8');
}

for (const crs of batch64Courses) {
  const crsLine = `"${crs.collegeId}","${crs.title.replace(/"/g, '""')}","${crs.division}","${crs.duration}","${crs.fees}","${crs.eligibility.replace(/"/g, '""')}","${crs.exams}","${crs.intake}","VERIFIED","Batch 64"\n`;
  fs.appendFileSync(courseCsvFile, crsLine, 'utf8');
}

// Update progress
const newIds = batch64Colleges.map(c => c.id);
const uniqueCompleted = Array.from(new Set([...progress.completed_ids, ...newIds]));
progress.completed_ids = uniqueCompleted;
progress.total_verified = uniqueCompleted.length;
progress.current_batch = 64;
progress.last_updated = new Date().toISOString();

fs.writeFileSync(progressFile, JSON.stringify(progress, null, 2), 'utf8');

console.log(`Appended 10 colleges to college-verification.csv`);
console.log(`Appended ${batch64Courses.length} courses to course-verification.csv`);
console.log(`Updated progress.json: total_verified = ${progress.total_verified}, current_batch = ${progress.current_batch}`);

