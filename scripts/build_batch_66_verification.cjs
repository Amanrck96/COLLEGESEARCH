const fs = require('fs');
const path = require('path');

const progressFile = path.join(__dirname, '..', 'reports', 'verification', 'progress.json');
const collegeCsvFile = path.join(__dirname, '..', 'reports', 'verification', 'college-verification.csv');
const courseCsvFile = path.join(__dirname, '..', 'reports', 'verification', 'course-verification.csv');
const imageCsvFile = path.join(__dirname, '..', 'reports', 'verification', 'image-verification.csv');

const progress = JSON.parse(fs.readFileSync(progressFile, 'utf8'));

const batch66Colleges = [
  {
    id: 224,
    name: 'Savitribai Phule Pune University (SPPU)',
    state: 'Maharashtra',
    city: 'Pune',
    type: 'Public/Government',
    website: 'https://www.unipune.ac.in/',
    phone: '020-25696061',
    rating: 4.8,
    established: 1949,
    image: '',
    imageStatus: 'Purged Maniben Matunga leak',
    notes: 'Premier State Public University (est. 1949, NAAC A+). Normalized name from UNIPUNE; restored Public/Government status from Private; purged photo leak; audited PUMBA MBA (₹66k/Yr) and PG sciences.'
  },
  {
    id: 225,
    name: 'Sri Balaji University, Pune (SBUP)',
    state: 'Maharashtra',
    city: 'Pune',
    type: 'Private',
    website: 'https://www.sbup.edu.in/',
    phone: '020-66741235',
    rating: 4.5,
    established: 1999,
    image: 'https://image-static.collegedunia.com/public/college_data/images/campusimage/1611046473Panorama-1.jpg',
    imageStatus: 'Retained verified authentic SBUP campus photo',
    notes: 'State Private University. Corrected inverted Public label to Private; verified authentic campus photo; audited BIMM/BITM MBA and BBA programs.'
  },
  {
    id: 226,
    name: 'Dr. Babasaheb Ambedkar Marathwada University, Aurangabad (BAMU)',
    state: 'Maharashtra',
    city: 'Chhatrapati Sambhajinagar',
    type: 'Public/Government',
    website: 'https://www.bamu.ac.in/',
    phone: '0240-2403399',
    rating: 4.5,
    established: 1958,
    image: 'https://img.jagranjosh.com/images/2022/December/15122022/Dr-Babasaheb-Ambedkar-Marathwada-University-Aurangabad-Campus-View-3.jpg',
    imageStatus: 'Retained verified authentic BAMU administrative campus photo',
    notes: 'Historic State Public University (NAAC A). Retained genuine campus photo; purged fake MBA fee and restored statutory public university curricula.'
  },
  {
    id: 227,
    name: 'Institute of Management Technology, Nagpur (IMT Nagpur)',
    state: 'Maharashtra',
    city: 'Nagpur',
    type: 'Private',
    website: 'https://www.imtnagpur.ac.in/',
    phone: '0712-2805000',
    rating: 4.5,
    established: 2004,
    image: 'https://img.jagranjosh.com/images/2022/December/26122022/Institute-of-Management-Technology-IMT-Nagpur-Campus-View-3.jpg',
    imageStatus: 'Retained verified authentic IMT Nagpur campus photo',
    notes: 'Premier business school (AICTE approved, AACSB member). Cleaned duplicate scraper name; purged dummy phone and raw search URL; audited PGDM programs.'
  },
  {
    id: 228,
    name: 'SVKMs NMIMS Deemed-to-be-University, Mumbai',
    state: 'Maharashtra',
    city: 'Mumbai',
    type: 'Deemed',
    website: 'https://www.nmims.edu/',
    phone: '022-42355555',
    rating: 4.8,
    established: 1981,
    image: '',
    imageStatus: 'Purged WeSchool Matunga leak',
    notes: 'Category-I Deemed to be University (NAAC A+). Purged WeSchool Matunga photo leak; audited MPSTME engineering and ASMSOC business programs.'
  },
  {
    id: 229,
    name: 'Institute of Management and Entrepreneurship Development, Pune (IMED)',
    state: 'Maharashtra',
    city: 'Pune',
    type: 'Deemed',
    website: 'https://imed.bharatividyapeeth.edu/',
    phone: '020-25425517',
    rating: 4.4,
    established: 1978,
    image: '/images/campuses/campus_architecture_5.jpg',
    imageStatus: 'Retained generic campus architecture',
    notes: 'Constituent of Bharati Vidyapeeth Deemed to be University (NAAC A++). Purged dummy phone and raw search URL; audited MBA, MCA, and BBA programs.'
  },
  {
    id: 230,
    name: 'SPJIMR Centre for Development Management, Mumbai',
    state: 'Maharashtra',
    city: 'Mumbai',
    type: 'Private',
    website: 'https://www.spjimr.org/course/post-graduate-programme-in-development-management-pgpdm/',
    phone: '022-62134444',
    rating: 4.7,
    established: 2011,
    image: '',
    imageStatus: 'Purged SVIMS Wadala leak',
    notes: 'Specialized social sector management centre of SPJIMR Mumbai (Bharatiya Vidya Bhavan). Purged SVIMS Wadala photo leak; audited PGPDM modular structure.'
  },
  {
    id: 231,
    name: 'Maya Academy of Advanced Creativity, Pune (MAAC Pune)',
    state: 'Maharashtra',
    city: 'Pune',
    type: 'Private',
    website: 'https://www.maacindia.com/',
    phone: '1800-209-6222',
    rating: 4.3,
    established: 2001,
    image: '',
    imageStatus: 'Purged VNIT Nagpur leak',
    notes: 'Animation, VFX, and multimedia institute (Aptech). Purged VNIT Nagpur photo leak and fake MBA template; restored authentic VFX, 3D animation, and gaming diplomas.'
  },
  {
    id: 232,
    name: 'NMIMS School of Business Management, Mumbai (SBM NMIMS)',
    state: 'Maharashtra',
    city: 'Mumbai',
    type: 'Deemed',
    website: 'https://sbm.nmims.edu/',
    phone: '022-42355555',
    rating: 4.8,
    established: 1981,
    image: '',
    imageStatus: 'Purged SVIMS Wadala leak',
    notes: 'Flagship business school of NMIMS Deemed University (AACSB Accredited). Purged SVIMS Wadala photo leak; audited flagship MBA (Core) and specialized MBA-HR programs.'
  },
  {
    id: 234,
    name: 'Fergusson College (Autonomous), Pune',
    state: 'Maharashtra',
    city: 'Pune',
    type: 'Public',
    website: 'https://www.fergusson.edu',
    phone: '020-67656000',
    rating: 4.8,
    established: 1885,
    image: '',
    imageStatus: 'Purged Maniben Matunga leak',
    notes: 'Historic autonomous college under Deccan Education Society (est. 1885, NAAC A+). Restored Public/Government-aided status; purged Maniben Matunga photo leak; purged fake MBA courses and restored B.Sc, B.A, and M.Sc curricula.'
  }
];

const batch66Courses = [
  // 224 SPPU
  { collegeId: 224, title: 'Master of Business Administration (PUMBA - DMS)', division: 'Postgraduate', duration: '2 Years', fees: '₹66,000/Year', eligibility: 'Graduation with 50% + MAH MBA CET / CAT', exams: 'MAH MBA CET, CAT', intake: '180' },
  { collegeId: 224, title: 'M.Sc in Computer Science / Biotechnology / Physics', division: 'Postgraduate', duration: '2 Years', fees: '₹25,000/Year', eligibility: 'B.Sc in relevant subject + SPPU OEE', exams: 'SPPU OEE', intake: '120' },
  { collegeId: 224, title: 'B.Tech in Aviation & Technology Departments', division: 'Undergraduate', duration: '4 Years', fees: '₹40,000/Year', eligibility: '10+2 with PCM + MHT CET / JEE Main', exams: 'MHT CET, JEE Main', intake: '60' },

  // 225 SBUP Pune
  { collegeId: 225, title: 'MBA in Marketing / Finance / HR (BIMM / BITM / BIIB)', division: 'Postgraduate', duration: '2 Years', fees: '₹6,00,000/Year', eligibility: 'Graduation with 50% + CAT/MAT/XAT/CMAT/SBUP Test', exams: 'CAT, MAT, XAT, CMAT', intake: '360' },
  { collegeId: 225, title: 'BBA in Business Analytics / International Business', division: 'Undergraduate', duration: '3 Years', fees: '₹1,40,000/Year', eligibility: '10+2 with 50% in any stream', exams: 'Merit', intake: '120' },
  { collegeId: 225, title: 'Master of Computer Applications (MCA)', division: 'Postgraduate', duration: '2 Years', fees: '₹1,20,000/Year', eligibility: 'Graduation with Math/Stats + MAH MCA CET / SBUP Test', exams: 'MAH MCA CET', intake: '60' },

  // 226 BAMU Aurangabad
  { collegeId: 226, title: 'M.Sc in Chemistry / Computer Science / Biotechnology', division: 'Postgraduate', duration: '2 Years', fees: '₹12,000/Year', eligibility: 'B.Sc in relevant subject with 50%', exams: 'Merit / University Entrance', intake: '180' },
  { collegeId: 226, title: 'Master of Business Administration (MBA)', division: 'Postgraduate', duration: '2 Years', fees: '₹35,000/Year', eligibility: 'Graduation with 50% + MAH MBA CET', exams: 'MAH MBA CET', intake: '60' },
  { collegeId: 226, title: 'Master of Arts (M.A. in History, Economics, English)', division: 'Postgraduate', duration: '2 Years', fees: '₹6,000/Year', eligibility: 'Graduation in relevant discipline', exams: 'Merit', intake: '240' },

  // 227 IMT Nagpur
  { collegeId: 227, title: 'Post Graduate Diploma in Management (PGDM)', division: 'Postgraduate', duration: '2 Years', fees: '₹7,25,000/Year', eligibility: 'Graduation with 50% + CAT/XAT/CMAT/GMAT', exams: 'CAT, XAT, CMAT, GMAT', intake: '240' },
  { collegeId: 227, title: 'PGDM in Financial Management', division: 'Postgraduate', duration: '2 Years', fees: '₹7,25,000/Year', eligibility: 'Graduation with 50% + CAT/XAT/CMAT', exams: 'CAT, XAT, CMAT', intake: '60' },
  { collegeId: 227, title: 'PGDM in Marketing Management', division: 'Postgraduate', duration: '2 Years', fees: '₹7,25,000/Year', eligibility: 'Graduation with 50% + CAT/XAT/CMAT', exams: 'CAT, XAT, CMAT', intake: '60' },

  // 228 NMIMS Deemed University
  { collegeId: 228, title: 'B.Tech in Computer Engineering / Data Science (MPSTME)', division: 'Undergraduate', duration: '4 Years', fees: '₹3,50,000/Year', eligibility: '10+2 with PCM + NMIMS-CET / JEE Main', exams: 'NMIMS-CET, JEE Main', intake: '240' },
  { collegeId: 228, title: 'Bachelor of Business Administration (BBA - ASMSOC)', division: 'Undergraduate', duration: '3 Years', fees: '₹3,25,000/Year', eligibility: '10+2 with Mathematics/Statistics + NPAT', exams: 'NPAT', intake: '600' },
  { collegeId: 228, title: 'B.Com (Honours) / B.Sc Finance', division: 'Undergraduate', duration: '3 Years', fees: '₹2,25,000/Year', eligibility: '10+2 with Mathematics/Statistics + NPAT', exams: 'NPAT', intake: '240' },

  // 229 IMED Pune
  { collegeId: 229, title: 'Master of Business Administration (MBA / MBA-HR)', division: 'Postgraduate', duration: '2 Years', fees: '₹2,40,000/Year', eligibility: 'Graduation with 50% + BMAT', exams: 'BMAT', intake: '180' },
  { collegeId: 229, title: 'Master of Computer Applications (MCA)', division: 'Postgraduate', duration: '2 Years', fees: '₹1,50,000/Year', eligibility: 'Graduation with BCA/B.Sc/B.Com + B-CAT', exams: 'B-CAT', intake: '60' },
  { collegeId: 229, title: 'Bachelor of Business Administration (BBA)', division: 'Undergraduate', duration: '3 Years', fees: '₹1,10,000/Year', eligibility: '10+2 in any stream with 45% + B-UMAT', exams: 'B-UMAT', intake: '180' },

  // 230 SPJIMR CDM
  { collegeId: 230, title: 'Post Graduate Programme in Development Management (PGPDM)', division: 'Postgraduate', duration: '18 Months', fees: '₹3,50,000 Total', eligibility: 'Graduation + 2+ yrs social sector experience + PI', exams: 'Interview', intake: '40' },
  { collegeId: 230, title: 'Certificate in Non-Profit Leadership & Social Impact', division: 'Certificate', duration: '6 Months', fees: '₹1,20,000 Total', eligibility: 'Professionals in civil society / CSR organizations', exams: 'Assessment', intake: '30' },

  // 231 MAAC Pune
  { collegeId: 231, title: 'ADVFX Plus - Advanced Program in Visual Effects', division: 'Certificate', duration: '2 Years', fees: '₹2,40,000 Total', eligibility: '10+2 in any stream + Creative Aptitude', exams: 'Direct Admission', intake: '60' },
  { collegeId: 231, title: 'AD3D Edge Plus - Advanced Program in 3D Animation', division: 'Certificate', duration: '2 Years', fees: '₹2,20,000 Total', eligibility: '10+2 in any stream', exams: 'Direct Admission', intake: '60' },
  { collegeId: 231, title: 'APDGM - Program in Game Design & Integration', division: 'Certificate', duration: '1.5 Years', fees: '₹1,80,000 Total', eligibility: '10+2 in any stream', exams: 'Direct Admission', intake: '40' },

  // 232 SBM NMIMS
  { collegeId: 232, title: 'Master of Business Administration (MBA - Core)', division: 'Postgraduate', duration: '2 Years', fees: '₹12,00,000/Year', eligibility: 'Graduation with 50% + NMAT by GMAC (235+ score) + CD + PI', exams: 'NMAT', intake: '600' },
  { collegeId: 232, title: 'MBA in Human Resources (MBA-HR)', division: 'Postgraduate', duration: '2 Years', fees: '₹12,00,000/Year', eligibility: 'Graduation with 50% + NMAT by GMAC + CD + PI', exams: 'NMAT', intake: '120' },
  { collegeId: 232, title: 'MBA in Pharmaceutical Management', division: 'Postgraduate', duration: '2 Years', fees: '₹8,00,000/Year', eligibility: 'B.Pharm/MBBS/B.Sc Life Sciences + NMAT + PI', exams: 'NMAT', intake: '120' },

  // 234 Fergusson College
  { collegeId: 234, title: 'B.Sc in Computer Science / Biotechnology / Physics', division: 'Undergraduate', duration: '3 Years', fees: '₹18,000/Year', eligibility: '10+2 with Science (PCM/PCB) Merit', exams: 'Merit', intake: '240' },
  { collegeId: 234, title: 'B.A. in Economics / Psychology / English / Pol Science', division: 'Undergraduate', duration: '3 Years', fees: '₹12,000/Year', eligibility: '10+2 in any stream Merit', exams: 'Merit', intake: '360' },
  { collegeId: 234, title: 'M.Sc in Computer Science / Organic Chemistry', division: 'Postgraduate', duration: '2 Years', fees: '₹45,000/Year', eligibility: 'B.Sc in relevant subject + Entrance Exam', exams: 'FC Entrance', intake: '120' }
];

// Append to CSVs
for (const col of batch66Colleges) {
  const line = `"${col.id}","${col.name.replace(/"/g, '""')}","${col.state}","${col.city}","${col.type}","${col.website}","${col.phone}","${col.rating}","${col.established}","VERIFIED","Batch 66"\n`;
  fs.appendFileSync(collegeCsvFile, line, 'utf8');

  const imgLine = `"${col.id}","${col.name.replace(/"/g, '""')}","${col.image}","${col.imageStatus}","Batch 66"\n`;
  fs.appendFileSync(imageCsvFile, imgLine, 'utf8');
}

for (const crs of batch66Courses) {
  const crsLine = `"${crs.collegeId}","${crs.title.replace(/"/g, '""')}","${crs.division}","${crs.duration}","${crs.fees}","${crs.eligibility.replace(/"/g, '""')}","${crs.exams}","${crs.intake}","VERIFIED","Batch 66"\n`;
  fs.appendFileSync(courseCsvFile, crsLine, 'utf8');
}

// Update progress
const newIds = batch66Colleges.map(c => c.id);
const uniqueCompleted = Array.from(new Set([...progress.completed_ids, ...newIds]));
progress.completed_ids = uniqueCompleted;
progress.total_verified = uniqueCompleted.length;
progress.current_batch = 66;
progress.last_updated = new Date().toISOString();

fs.writeFileSync(progressFile, JSON.stringify(progress, null, 2), 'utf8');

console.log(`Appended 10 colleges to college-verification.csv`);
console.log(`Appended ${batch66Courses.length} courses to course-verification.csv`);
console.log(`Updated progress.json: total_verified = ${progress.total_verified}, current_batch = ${progress.current_batch}`);

