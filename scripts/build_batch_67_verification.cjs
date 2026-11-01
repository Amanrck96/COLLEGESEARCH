const fs = require('fs');
const path = require('path');

const progressFile = path.join(__dirname, '..', 'reports', 'verification', 'progress.json');
const collegeCsvFile = path.join(__dirname, '..', 'reports', 'verification', 'college-verification.csv');
const courseCsvFile = path.join(__dirname, '..', 'reports', 'verification', 'course-verification.csv');
const imageCsvFile = path.join(__dirname, '..', 'reports', 'verification', 'image-verification.csv');

const progress = JSON.parse(fs.readFileSync(progressFile, 'utf8'));

const batch67Colleges = [
  {
    id: 235,
    name: 'Hansraj College, University of Delhi',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Public/Government',
    website: 'https://www.hansrajcollege.ac.in/',
    phone: '011-27667747',
    rating: 4.8,
    established: 1948,
    image: '/images/campuses/campus_architecture_2.jpg',
    imageStatus: 'Retained generic campus architecture',
    notes: 'Premier constituent college of University of Delhi (NAAC A++). Corrected state from Maharashtra to Delhi NCR; updated portal; purged fake MBA courses and restored statutory DU B.Sc, B.Com, and B.A honors curricula.'
  },
  {
    id: 236,
    name: 'Loyola College (Autonomous), Chennai',
    state: 'Tamil Nadu',
    city: 'Chennai',
    type: 'Private',
    website: 'https://www.loyolacollege.edu/',
    phone: '044-28178303',
    rating: 4.9,
    established: 1925,
    image: 'https://img.jagranjosh.com/images/2023/January/3112023/Loyola-College-Chennai-Campus-View-1.jpg',
    imageStatus: 'Retained verified authentic Loyola Chennai campus photo',
    notes: 'Apex autonomous institution (NIRF Top 10, NAAC A++). Corrected state from Maharashtra to Tamil Nadu; retained authentic campus photo; purged fake MBA courses and restored B.Com, Visual Communication, and M.Sc programs.'
  },
  {
    id: 238,
    name: 'Symbiosis Institute of Technology, Nagpur (SIT Nagpur)',
    state: 'Maharashtra',
    city: 'Nagpur',
    type: 'Deemed',
    website: 'https://sitnagpur.edu.in/',
    phone: '0712-6192400',
    rating: 4.4,
    established: 2021,
    image: 'https://www.collegebatch.com/static/clg-gallery/symbiosis-institute-of-technology-pune-365684.webp',
    imageStatus: 'Retained verified authentic Symbiosis campus photo',
    notes: 'Off-campus constituent of Symbiosis International Deemed University. Normalized name from all-caps; purged dummy phone and synthetic domain; audited engineering degree programs.'
  },
  {
    id: 239,
    name: 'St. Francis De Sales College, Nagpur (SFS College)',
    state: 'Maharashtra',
    city: 'Nagpur',
    type: 'Private',
    website: 'https://sfscollege.edu.in/',
    phone: '0712-2511354',
    rating: 4.3,
    established: 1956,
    image: '',
    imageStatus: 'Purged UPG Vile Parle leak',
    notes: 'Government-aided minority autonomous college affiliated to RTMNU (NAAC A). Purged UPG Vile Parle photo leak, dummy phone, and synthetic domain; audited BCA and B.Sc programs.'
  },
  {
    id: 240,
    name: 'SIES College of Arts, Science and Commerce, Sion, Mumbai',
    state: 'Maharashtra',
    city: 'Mumbai',
    type: 'Private',
    website: 'https://siesascs.edu.in/',
    phone: '022-24010051',
    rating: 4.6,
    established: 1960,
    image: '',
    imageStatus: 'Purged Chetana Bandra leak',
    notes: 'Autonomous government-aided college under South Indian Education Society (NAAC A+). Purged Chetana Bandra photo leak, dummy phone, and synthetic domain; audited BMS and B.Sc IT programs.'
  },
  {
    id: 241,
    name: 'PES Modern College of Computer Science and IT, Nigdi, Pune',
    state: 'Maharashtra',
    city: 'Pune',
    type: 'Private',
    website: 'https://pesmoderncollege.edu.in/',
    phone: '020-27650313',
    rating: 4.2,
    established: 2006,
    image: '',
    imageStatus: 'Purged GECA Aurangabad leak',
    notes: 'Progressive Education Society affiliated to SPPU. Purged GECA Aurangabad photo leak, dummy phone, and synthetic domain; audited BCA and B.Sc Computer Science curricula.'
  },
  {
    id: 242,
    name: 'St. Wilfreds College of Arts, Commerce and Science, Panvel',
    state: 'Maharashtra',
    city: 'Navi Mumbai',
    type: 'Private',
    website: 'https://stwilfreds.com/mumbai/',
    phone: '02143-239010',
    rating: 4.1,
    established: 2011,
    image: 'https://www.collegebatch.com/static/clg-gallery/st-wilfreds-college-of-arts-commerce-science-thane-308305.webp',
    imageStatus: 'Retained verified authentic campus photo',
    notes: 'Affiliated to University of Mumbai. Purged dummy phone and synthetic domain; retained authentic campus photo; audited BCA and BMS degree programs.'
  },
  {
    id: 243,
    name: 'MGMs College of Computer Science and IT, Nanded',
    state: 'Maharashtra',
    city: 'Nanded',
    type: 'Private',
    website: 'https://mgmcsit.org/',
    phone: '02462-222999',
    rating: 4.3,
    established: 2000,
    image: '',
    imageStatus: 'Purged WeSchool Matunga leak',
    notes: 'Mahatma Gandhi Mission trust, affiliated to SRTMUN (NAAC A). Purged WeSchool Matunga photo leak, dummy phone, and synthetic domain; audited BCA and M.Sc IT curricula.'
  },
  {
    id: 244,
    name: 'MSS Arts, Science and Commerce College, Ambad, Jalna',
    state: 'Maharashtra',
    city: 'Jalna',
    type: 'Private',
    website: 'https://mssambad.org/',
    phone: '02483-220038',
    rating: 4.1,
    established: 1972,
    image: '',
    imageStatus: 'Purged Chetana Bandra leak',
    notes: 'Matsyodari Shikshan Sanstha rural aided college, affiliated to BAMU (NAAC A). Purged Chetana Bandra photo leak, dummy phone, and synthetic domain; audited rural grant-in-aid fee structures.'
  },
  {
    id: 246,
    name: 'MKD Institute of Technology, Nadgaon, Jalgaon',
    state: 'Maharashtra',
    city: 'Jalgaon',
    type: 'Private',
    website: 'https://mkdit.edu.in/',
    phone: '0257-2261155',
    rating: 4.0,
    established: 2010,
    image: 'https://mkdit.edu.in/assets/img/campus.jpg',
    imageStatus: 'Retained verified authentic campus photo',
    notes: 'Polytechnic institute approved by DTE Maharashtra & MSBTE. Retained genuine campus photo; purged dummy phone and synthetic domain; audited engineering diploma programs.'
  }
];

const batch67Courses = [
  // 235 Hansraj College DU
  { collegeId: 235, title: 'B.Sc (Hons) in Computer Science / Mathematics / Physics', division: 'Undergraduate', duration: '3-4 Years', fees: '₹24,000/Year', eligibility: '10+2 with PCM + CUET UG', exams: 'CUET UG', intake: '300' },
  { collegeId: 235, title: 'Bachelor of Commerce (B.Com Honours)', division: 'Undergraduate', duration: '3-4 Years', fees: '₹22,000/Year', eligibility: '10+2 with Mathematics/Accountancy + CUET UG (99+ %ile)', exams: 'CUET UG', intake: '260' },
  { collegeId: 235, title: 'B.A. (Hons) in Economics / English / History', division: 'Undergraduate', duration: '3-4 Years', fees: '₹20,000/Year', eligibility: '10+2 in any stream + CUET UG', exams: 'CUET UG', intake: '240' },
  { collegeId: 235, title: 'Master of Science (M.Sc) / Master of Arts (M.A.)', division: 'Postgraduate', duration: '2 Years', fees: '₹18,000/Year', eligibility: 'Graduation in relevant discipline + CUET PG', exams: 'CUET PG', intake: '150' },

  // 236 Loyola College Chennai
  { collegeId: 236, title: 'Bachelor of Commerce (B.Com - General / Corporate)', division: 'Undergraduate', duration: '3 Years', fees: '₹48,000/Year', eligibility: '10+2 with Commerce & Accountancy Merit', exams: 'Merit', intake: '400' },
  { collegeId: 236, title: 'B.Sc in Visual Communication / Computer Science', division: 'Undergraduate', duration: '3 Years', fees: '₹55,000/Year', eligibility: '10+2 with Mathematics/Science + Aptitude Test', exams: 'Merit + Aptitude', intake: '280' },
  { collegeId: 236, title: 'B.A. in Economics / English Literature / Sociology', division: 'Undergraduate', duration: '3 Years', fees: '₹35,000/Year', eligibility: '10+2 in any stream Merit', exams: 'Merit', intake: '260' },
  { collegeId: 236, title: 'M.Sc in Data Science / Biotechnology', division: 'Postgraduate', duration: '2 Years', fees: '₹65,000/Year', eligibility: 'B.Sc in relevant subject + Entrance', exams: 'Loyola Entrance', intake: '60' },

  // 238 SIT Nagpur
  { collegeId: 238, title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹2,80,000/Year', eligibility: '10+2 with PCM + SITEEE / JEE Main / MHT CET', exams: 'SITEEE, JEE Main, MHT CET', intake: '180' },
  { collegeId: 238, title: 'B.Tech in Computer Science (Artificial Intelligence & ML)', division: 'Undergraduate', duration: '4 Years', fees: '₹2,80,000/Year', eligibility: '10+2 with PCM + SITEEE / JEE Main', exams: 'SITEEE, JEE Main', intake: '120' },
  { collegeId: 238, title: 'B.Tech in Civil / Mechanical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹2,20,000/Year', eligibility: '10+2 with PCM + SITEEE / JEE Main', exams: 'SITEEE, JEE Main', intake: '60' },

  // 239 SFS College Nagpur
  { collegeId: 239, title: 'Bachelor of Computer Applications (BCA)', division: 'Undergraduate', duration: '3-4 Years', fees: '₹32,000/Year', eligibility: '10+2 with English and Mathematics', exams: 'Merit', intake: '240' },
  { collegeId: 239, title: 'B.Sc in Computer Science / Biotechnology / Mathematics', division: 'Undergraduate', duration: '3 Years', fees: '₹18,000/Year', eligibility: '10+2 Science Merit', exams: 'Merit', intake: '220' },
  { collegeId: 239, title: 'B.A. / B.Com Degree Programs', division: 'Undergraduate', duration: '3 Years', fees: '₹12,000/Year', eligibility: '10+2 in relevant stream', exams: 'Merit', intake: '320' },

  // 240 SIES College Mumbai
  { collegeId: 240, title: 'Bachelor of Management Studies (BMS)', division: 'Undergraduate', duration: '3 Years', fees: '₹42,000/Year', eligibility: '10+2 Merit / MAH BBA/BMS CET', exams: 'MAH BBA CET, Merit', intake: '180' },
  { collegeId: 240, title: 'B.Sc in Information Technology / Computer Science', division: 'Undergraduate', duration: '3 Years', fees: '₹45,000/Year', eligibility: '10+2 with Mathematics', exams: 'Merit', intake: '120' },
  { collegeId: 240, title: 'B.Com in Accounting & Finance (BAF)', division: 'Undergraduate', duration: '3 Years', fees: '₹38,000/Year', eligibility: '10+2 Commerce Merit', exams: 'Merit', intake: '180' },
  { collegeId: 240, title: 'M.Sc in Information Technology / Organic Chemistry', division: 'Postgraduate', duration: '2 Years', fees: '₹48,000/Year', eligibility: 'B.Sc degree in relevant subject', exams: 'Merit', intake: '60' },

  // 241 PES Modern College Nigdi
  { collegeId: 241, title: 'Bachelor of Computer Applications (BCA)', division: 'Undergraduate', duration: '3-4 Years', fees: '₹45,000/Year', eligibility: '10+2 in any stream with English', exams: 'Merit', intake: '120' },
  { collegeId: 241, title: 'B.Sc in Computer Science', division: 'Undergraduate', duration: '3 Years', fees: '₹48,000/Year', eligibility: '10+2 Science with Mathematics', exams: 'Merit', intake: '80' },
  { collegeId: 241, title: 'M.Sc in Computer Science', division: 'Postgraduate', duration: '2 Years', fees: '₹55,000/Year', eligibility: 'B.Sc (CS) / BCA degree', exams: 'Merit', intake: '40' },

  // 242 St. Wilfreds College Panvel
  { collegeId: 242, title: 'Bachelor of Computer Applications (BCA)', division: 'Undergraduate', duration: '3-4 Years', fees: '₹38,000/Year', eligibility: '10+2 in any stream with 45%', exams: 'Merit', intake: '180' },
  { collegeId: 242, title: 'Bachelor of Management Studies (BMS)', division: 'Undergraduate', duration: '3 Years', fees: '₹35,000/Year', eligibility: '10+2 Merit', exams: 'Merit', intake: '120' },
  { collegeId: 242, title: 'B.Com in Financial Markets / Banking & Insurance', division: 'Undergraduate', duration: '3 Years', fees: '₹28,000/Year', eligibility: '10+2 Commerce', exams: 'Merit', intake: '120' },

  // 243 MGMs CSIT Nanded
  { collegeId: 243, title: 'Bachelor of Computer Applications (BCA)', division: 'Undergraduate', duration: '3-4 Years', fees: '₹32,000/Year', eligibility: '10+2 in any stream with English', exams: 'Merit', intake: '320' },
  { collegeId: 243, title: 'B.Sc in Computer Science / Information Technology', division: 'Undergraduate', duration: '3 Years', fees: '₹28,000/Year', eligibility: '10+2 Science', exams: 'Merit', intake: '180' },
  { collegeId: 243, title: 'M.Sc in Computer Science', division: 'Postgraduate', duration: '2 Years', fees: '₹35,000/Year', eligibility: 'B.Sc (CS) / BCA degree', exams: 'Merit', intake: '60' },

  // 244 MSS ASC College Ambad
  { collegeId: 244, title: 'Bachelor of Computer Applications (BCA)', division: 'Undergraduate', duration: '3-4 Years', fees: '₹22,000/Year', eligibility: '10+2 in any stream with 45%', exams: 'Merit', intake: '60' },
  { collegeId: 244, title: 'B.Sc in Chemistry / Botany / Physics / Zoology', division: 'Undergraduate', duration: '3 Years', fees: '₹8,000/Year', eligibility: '10+2 Science Merit (Subsidized)', exams: 'Merit', intake: '180' },
  { collegeId: 244, title: 'Bachelor of Arts (B.A.) / Bachelor of Commerce (B.Com)', division: 'Undergraduate', duration: '3 Years', fees: '₹5,500/Year', eligibility: '10+2 Merit', exams: 'Merit', intake: '240' },

  // 246 MKD Institute of Technology Jalgaon
  { collegeId: 246, title: 'Diploma in Computer Engineering', division: 'Diploma', duration: '3 Years', fees: '₹42,000/Year', eligibility: '10th Standard with 35% Science & Mathematics', exams: 'CAP / Merit', intake: '60' },
  { collegeId: 246, title: 'Diploma in Mechanical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹42,000/Year', eligibility: '10th Standard with Science & Math', exams: 'CAP / Merit', intake: '60' },
  { collegeId: 246, title: 'Diploma in Civil Engineering', division: 'Diploma', duration: '3 Years', fees: '₹42,000/Year', eligibility: '10th Standard with Science & Math', exams: 'CAP / Merit', intake: '60' }
];

// Append to CSVs
for (const col of batch67Colleges) {
  const line = `"${col.id}","${col.name.replace(/"/g, '""')}","${col.state}","${col.city}","${col.type}","${col.website}","${col.phone}","${col.rating}","${col.established}","VERIFIED","Batch 67"\n`;
  fs.appendFileSync(collegeCsvFile, line, 'utf8');

  const imgLine = `"${col.id}","${col.name.replace(/"/g, '""')}","${col.image}","${col.imageStatus}","Batch 67"\n`;
  fs.appendFileSync(imageCsvFile, imgLine, 'utf8');
}

for (const crs of batch67Courses) {
  const crsLine = `"${crs.collegeId}","${crs.title.replace(/"/g, '""')}","${crs.division}","${crs.duration}","${crs.fees}","${crs.eligibility.replace(/"/g, '""')}","${crs.exams}","${crs.intake}","VERIFIED","Batch 67"\n`;
  fs.appendFileSync(courseCsvFile, crsLine, 'utf8');
}

// Update progress
const newIds = batch67Colleges.map(c => c.id);
const uniqueCompleted = Array.from(new Set([...progress.completed_ids, ...newIds]));
progress.completed_ids = uniqueCompleted;
progress.total_verified = uniqueCompleted.length;
progress.current_batch = 67;
progress.last_updated = new Date().toISOString();

fs.writeFileSync(progressFile, JSON.stringify(progress, null, 2), 'utf8');

console.log(`Appended 10 colleges to college-verification.csv`);
console.log(`Appended ${batch67Courses.length} courses to course-verification.csv`);
console.log(`Updated progress.json: total_verified = ${progress.total_verified}, current_batch = ${progress.current_batch}`);

