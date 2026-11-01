const fs = require('fs');
const path = require('path');

const progressFile = path.join(__dirname, '..', 'reports', 'verification', 'progress.json');
const collegeCsvFile = path.join(__dirname, '..', 'reports', 'verification', 'college-verification.csv');
const courseCsvFile = path.join(__dirname, '..', 'reports', 'verification', 'course-verification.csv');
const imageCsvFile = path.join(__dirname, '..', 'reports', 'verification', 'image-verification.csv');

const progress = JSON.parse(fs.readFileSync(progressFile, 'utf8'));

const batch65Colleges = [
  {
    id: 214,
    name: 'Pillai College of Engineering, Panvel',
    state: 'Maharashtra',
    city: 'Navi Mumbai',
    type: 'Private',
    website: 'https://pce.ac.in',
    phone: '022-27456030',
    rating: 4.4,
    established: 1999,
    image: '/images/campuses/campus_architecture_8.jpg',
    imageStatus: 'Retained generic campus architecture',
    notes: 'Autonomous institute affiliated to University of Mumbai (NAAC A+). Purged dummy phone and raw search URL; audited engineering curricula.'
  },
  {
    id: 215,
    name: 'RC Patel Institute of Technology, Shirpur, Dhule',
    state: 'Maharashtra',
    city: 'Dhule',
    type: 'Private',
    website: 'https://www.rcpit.ac.in',
    phone: '02563-259600',
    rating: 4.3,
    established: 2001,
    image: 'https://www.rcpcoep.ac.in/images/about.jpg',
    imageStatus: 'Retained verified authentic Shirpur campus photo',
    notes: 'Autonomous engineering college affiliated to DBATU Lonere. Purged dummy phone and raw search URL; verified engineering fee structure.'
  },
  {
    id: 216,
    name: 'Trinity College of Engineering and Research, Pune',
    state: 'Maharashtra',
    city: 'Pune',
    type: 'Private',
    website: 'https://www.kjei.edu.in/tcoer/',
    phone: '020-26934422',
    rating: 4.2,
    established: 2008,
    image: '/images/campuses/campus_trinity_pune.png',
    imageStatus: 'Retained verified genuine campus photo',
    notes: 'KJ Educational Institutes (NAAC A+). Corrected inverted Public label to Private; purged dummy phone and raw search URL; audited engineering and MBA curricula.'
  },
  {
    id: 217,
    name: 'Sardar Patel Institute of Technology, Andheri West, Mumbai',
    state: 'Maharashtra',
    city: 'Mumbai',
    type: 'Private',
    website: 'https://www.spit.ac.in',
    phone: '022-26707440',
    rating: 4.7,
    established: 2005,
    image: '',
    imageStatus: 'Purged VJTI Mumbai leak',
    notes: 'Autonomous college under Bharatiya Vidya Bhavan (NAAC A+). Purged VJTI Mumbai photo leak, dummy phone, and raw search URL; audited premier engineering curricula.'
  },
  {
    id: 218,
    name: 'Institute of Chemical Technology, Mumbai',
    state: 'Maharashtra',
    city: 'Mumbai',
    type: 'Public/Government',
    website: 'https://www.ictmumbai.edu.in/',
    phone: '022-33611111',
    rating: 4.9,
    established: 1933,
    image: '',
    imageStatus: 'Purged PIBM Pune leak',
    notes: 'Premier State Deemed University / Public Autonomous Institute (formerly UDCT, NAAC A++). Corrected mislabel Private to Public/Government; purged PIBM Pune photo leak; purged fake MBBS courses and restored statutory Chemical Engineering degrees.'
  },
  {
    id: 219,
    name: 'Visvesvaraya National Institute of Technology, Nagpur (VNIT Nagpur)',
    state: 'Maharashtra',
    city: 'Nagpur',
    type: 'Public/Government',
    website: 'https://www.vnit.ac.in',
    phone: '0712-2801423',
    rating: 4.8,
    established: 1960,
    image: '/images/campuses/campus_vnit_nagpur.jpeg',
    imageStatus: 'Retained verified authentic VNIT Nagpur campus photo',
    notes: 'Institute of National Importance under Ministry of Education. Retained genuine campus photo; replaced generic fees with statutory Central Govt INI tuition structure.'
  },
  {
    id: 220,
    name: 'Prin. L. N. Welingkar Institute of Management Development and Research, Mumbai',
    state: 'Maharashtra',
    city: 'Mumbai',
    type: 'Private',
    website: 'https://www.welingkar.org/',
    phone: '022-24198300',
    rating: 4.6,
    established: 1977,
    image: '/images/campuses/weschool_matunga_mumbai.jpeg',
    imageStatus: 'Retained verified authentic WeSchool Matunga campus photo',
    notes: 'Premier autonomous business school under Shikshana Prasaraka Mandali. Retained genuine campus image; audited PGDM and MMS degree structures.'
  },
  {
    id: 221,
    name: 'Faculty of Management Studies, University of Delhi (FMS Delhi)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Public/Government',
    website: 'https://fms.edu',
    phone: '011-27666382',
    rating: 4.9,
    established: 1954,
    image: '',
    imageStatus: 'Purged PIBM Pune leak',
    notes: 'Legendary business school under Central University of Delhi. Corrected state from Maharashtra to Delhi NCR; corrected URL to fms.edu; purged PIBM Pune photo leak; audited iconic high-ROI statutory MBA fee (₹2 Lakhs Total).'
  },
  {
    id: 222,
    name: 'National Institute of Bank Management, Pune (NIBM Pune)',
    state: 'Maharashtra',
    city: 'Pune',
    type: 'Private',
    website: 'https://www.nibmindia.org/',
    phone: '020-69046000',
    rating: 4.6,
    established: 1969,
    image: '',
    imageStatus: 'Purged Chetana Bandra leak',
    notes: 'Apex banking institute established by Reserve Bank of India (RBI). Purged Chetana Bandra photo leak; audited specialized PGDM in Banking & Financial Services.'
  },
  {
    id: 223,
    name: 'Amity University Mumbai',
    state: 'Maharashtra',
    city: 'Mumbai',
    type: 'Private',
    website: 'https://www.amity.edu/mumbai/',
    phone: '02143-205037',
    rating: 4.3,
    established: 2014,
    image: '',
    imageStatus: 'Purged WeSchool Matunga leak',
    notes: 'State Private University under Maharashtra Act. Corrected inverted Public label to Private; purged WeSchool Matunga photo leak, dummy phone, and generic URL; audited multidisciplinary degree programs.'
  }
];

const batch65Courses = [
  // 214 PCE Panvel
  { collegeId: 214, title: 'B.Tech in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,45,000/Year', eligibility: '10+2 with PCM + MHT CET / JEE Main', exams: 'MHT CET, JEE Main', intake: '180' },
  { collegeId: 214, title: 'B.Tech in Information Technology', division: 'Undergraduate', duration: '4 Years', fees: '₹1,45,000/Year', eligibility: '10+2 with PCM + MHT CET / JEE Main', exams: 'MHT CET, JEE Main', intake: '120' },
  { collegeId: 214, title: 'B.Tech in Electronics & Computer Science', division: 'Undergraduate', duration: '4 Years', fees: '₹1,45,000/Year', eligibility: '10+2 with PCM + MHT CET / JEE Main', exams: 'MHT CET, JEE Main', intake: '60' },

  // 215 RCPIT Shirpur
  { collegeId: 215, title: 'B.Tech in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,15,000/Year', eligibility: '10+2 with PCM + MHT CET / JEE Main', exams: 'MHT CET, JEE Main', intake: '180' },
  { collegeId: 215, title: 'B.Tech in Data Science & Artificial Intelligence', division: 'Undergraduate', duration: '4 Years', fees: '₹1,15,000/Year', eligibility: '10+2 with PCM + MHT CET / JEE Main', exams: 'MHT CET, JEE Main', intake: '120' },
  { collegeId: 215, title: 'B.Tech in Electrical / Mechanical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,15,000/Year', eligibility: '10+2 with PCM + MHT CET / JEE Main', exams: 'MHT CET, JEE Main', intake: '120' },

  // 216 Trinity College Pune
  { collegeId: 216, title: 'B.E. in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹98,000/Year', eligibility: '10+2 with PCM + MHT CET / JEE Main', exams: 'MHT CET, JEE Main', intake: '120' },
  { collegeId: 216, title: 'B.E. in Information Technology', division: 'Undergraduate', duration: '4 Years', fees: '₹98,000/Year', eligibility: '10+2 with PCM + MHT CET / JEE Main', exams: 'MHT CET, JEE Main', intake: '60' },
  { collegeId: 216, title: 'Master of Business Administration (MBA)', division: 'Postgraduate', duration: '2 Years', fees: '₹85,000/Year', eligibility: 'Graduation with 50% + MAH MBA CET / CMAT', exams: 'MAH MBA CET, CMAT', intake: '60' },

  // 217 SPIT Mumbai
  { collegeId: 217, title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,72,000/Year', eligibility: '10+2 with PCM + MHT CET (99.6+ %ile) / JEE Main', exams: 'MHT CET, JEE Main', intake: '120' },
  { collegeId: 217, title: 'B.Tech in Computer Science and Engineering (Data Science)', division: 'Undergraduate', duration: '4 Years', fees: '₹1,72,000/Year', eligibility: '10+2 with PCM + MHT CET / JEE Main', exams: 'MHT CET, JEE Main', intake: '60' },
  { collegeId: 217, title: 'B.Tech in Electronics & Telecommunication Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,72,000/Year', eligibility: '10+2 with PCM + MHT CET / JEE Main', exams: 'MHT CET, JEE Main', intake: '60' },
  { collegeId: 217, title: 'Master of Computer Applications (MCA)', division: 'Postgraduate', duration: '2 Years', fees: '₹1,40,000/Year', eligibility: 'Graduation with BCA/B.Sc/B.Com + MAH MCA CET', exams: 'MAH MCA CET', intake: '60' },

  // 218 ICT Mumbai
  { collegeId: 218, title: 'Bachelor of Chemical Engineering (B.Chem.Engg.)', division: 'Undergraduate', duration: '4 Years', fees: '₹89,000/Year', eligibility: '10+2 with PCM + MHT CET / JEE Main', exams: 'MHT CET, JEE Main', intake: '75' },
  { collegeId: 218, title: 'B.Tech in Food Engineering and Technology', division: 'Undergraduate', duration: '4 Years', fees: '₹89,000/Year', eligibility: '10+2 with PCM + MHT CET / JEE Main', exams: 'MHT CET, JEE Main', intake: '30' },
  { collegeId: 218, title: 'B.Tech in Pharmaceutical Chemistry & Technology', division: 'Undergraduate', duration: '4 Years', fees: '₹89,000/Year', eligibility: '10+2 with PCM + MHT CET / JEE Main', exams: 'MHT CET, JEE Main', intake: '30' },
  { collegeId: 218, title: 'M.Chem.Engg. / M.Tech in Chemical Engineering', division: 'Postgraduate', duration: '2 Years', fees: '₹70,000/Year', eligibility: 'B.Chem.Engg / B.Tech in Chemical branch + GATE', exams: 'GATE', intake: '60' },

  // 219 VNIT Nagpur
  { collegeId: 219, title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,45,000/Year', eligibility: '10+2 with PCM + JEE Main / JoSAA Counseling', exams: 'JEE Main', intake: '115' },
  { collegeId: 219, title: 'B.Tech in Mechanical / Electrical / Civil Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,45,000/Year', eligibility: '10+2 with PCM + JEE Main / JoSAA', exams: 'JEE Main', intake: '340' },
  { collegeId: 219, title: 'Bachelor of Architecture (B.Arch)', division: 'Undergraduate', duration: '5 Years', fees: '₹1,45,000/Year', eligibility: '10+2 with PCM + JEE Main Paper 2', exams: 'JEE Main Paper 2', intake: '60' },
  { collegeId: 219, title: 'M.Tech in Structural Dynamics / CAD-CAM / VLSI', division: 'Postgraduate', duration: '2 Years', fees: '₹90,000/Year', eligibility: 'B.Tech in relevant branch + GATE / CCMT', exams: 'GATE', intake: '250' },

  // 220 WeSchool Mumbai
  { collegeId: 220, title: 'Post Graduate Diploma in Management (PGDM)', division: 'Postgraduate', duration: '2 Years', fees: '₹7,00,000/Year', eligibility: 'Bachelor degree with minimum 50% + CAT/XAT/CMAT', exams: 'CAT, XAT, CMAT, ATMA, GMAT', intake: '180' },
  { collegeId: 220, title: 'PGDM in E-Business / Business Design', division: 'Postgraduate', duration: '2 Years', fees: '₹7,00,000/Year', eligibility: 'Bachelor degree with minimum 50% + Entrance', exams: 'CAT, XAT, CMAT', intake: '120' },
  { collegeId: 220, title: 'Masters in Management Studies (MMS)', division: 'Postgraduate', duration: '2 Years', fees: '₹3,45,000/Year', eligibility: 'Graduation with 50% + MAH MBA CET', exams: 'MAH MBA CET', intake: '120' },

  // 221 FMS Delhi
  { collegeId: 221, title: 'Master of Business Administration (MBA - Full Time)', division: 'Postgraduate', duration: '2 Years', fees: '₹1,00,000/Year', eligibility: 'Graduation in any discipline with 50% + CAT (99.2+ %ile) + PI', exams: 'CAT', intake: '251' },
  { collegeId: 221, title: 'MBA in Healthcare Administration (Executive)', division: 'Postgraduate', duration: '2 Years', fees: '₹1,25,000/Year', eligibility: 'Graduation with 5 yrs experience + Assessment', exams: 'Work Experience + PI', intake: '53' },
  { collegeId: 221, title: 'Ph.D in Management Studies', division: 'Doctoral', duration: '3-5 Years', fees: '₹15,000/Year', eligibility: 'Master degree with 55% + UGC-NET (JRF)', exams: 'UGC NET', intake: '20' },

  // 222 NIBM Pune
  { collegeId: 222, title: 'PGDM in Banking and Financial Services (PGDM-B&FS)', division: 'Postgraduate', duration: '2 Years', fees: '₹8,00,000/Year', eligibility: 'Graduation with 50% + CAT/XAT/CMAT/GMAT + WAT/PI', exams: 'CAT, XAT, CMAT, GMAT', intake: '120' },
  { collegeId: 222, title: 'Executive Program in Banking Technology', division: 'Postgraduate', duration: '1 Year', fees: '₹3,50,000 Total', eligibility: 'Graduation + Banking sector experience', exams: 'Direct Assessment', intake: '45' },

  // 223 Amity University Mumbai
  { collegeId: 223, title: 'B.Tech in Computer Science & Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹2,40,000/Year', eligibility: '10+2 with PCM + Amity JEE / JEE Main / MHT CET', exams: 'Amity JEE, JEE Main, MHT CET', intake: '180' },
  { collegeId: 223, title: 'Master of Business Administration (MBA)', division: 'Postgraduate', duration: '2 Years', fees: '₹3,60,000/Year', eligibility: 'Graduation with 50% + CAT/MAT/XAT/Amity Test', exams: 'CAT, MAT, XAT', intake: '120' },
  { collegeId: 223, title: 'B.Des in Fashion Design / Interior Design', division: 'Undergraduate', duration: '4 Years', fees: '₹1,60,000/Year', eligibility: '10+2 with 50% + Design Aptitude Test', exams: 'Design Test', intake: '60' }
];

// Append to CSVs
for (const col of batch65Colleges) {
  const line = `"${col.id}","${col.name.replace(/"/g, '""')}","${col.state}","${col.city}","${col.type}","${col.website}","${col.phone}","${col.rating}","${col.established}","VERIFIED","Batch 65"\n`;
  fs.appendFileSync(collegeCsvFile, line, 'utf8');

  const imgLine = `"${col.id}","${col.name.replace(/"/g, '""')}","${col.image}","${col.imageStatus}","Batch 65"\n`;
  fs.appendFileSync(imageCsvFile, imgLine, 'utf8');
}

for (const crs of batch65Courses) {
  const crsLine = `"${crs.collegeId}","${crs.title.replace(/"/g, '""')}","${crs.division}","${crs.duration}","${crs.fees}","${crs.eligibility.replace(/"/g, '""')}","${crs.exams}","${crs.intake}","VERIFIED","Batch 65"\n`;
  fs.appendFileSync(courseCsvFile, crsLine, 'utf8');
}

// Update progress
const newIds = batch65Colleges.map(c => c.id);
const uniqueCompleted = Array.from(new Set([...progress.completed_ids, ...newIds]));
progress.completed_ids = uniqueCompleted;
progress.total_verified = uniqueCompleted.length;
progress.current_batch = 65;
progress.last_updated = new Date().toISOString();

fs.writeFileSync(progressFile, JSON.stringify(progress, null, 2), 'utf8');

console.log(`Appended 10 colleges to college-verification.csv`);
console.log(`Appended ${batch65Courses.length} courses to course-verification.csv`);
console.log(`Updated progress.json: total_verified = ${progress.total_verified}, current_batch = ${progress.current_batch}`);

