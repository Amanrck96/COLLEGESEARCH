const fs = require('fs');
const path = require('path');

const progressFile = path.join(__dirname, '..', 'reports', 'verification', 'progress.json');
const collegeCsvFile = path.join(__dirname, '..', 'reports', 'verification', 'college-verification.csv');
const courseCsvFile = path.join(__dirname, '..', 'reports', 'verification', 'course-verification.csv');
const imageCsvFile = path.join(__dirname, '..', 'reports', 'verification', 'image-verification.csv');

const progress = JSON.parse(fs.readFileSync(progressFile, 'utf8'));

const batch73Colleges = [
  {
    id: 300,
    name: 'Xavier Institute of Management and Entrepreneurship (XIME Bengaluru)',
    state: 'Karnataka',
    city: 'Bengaluru',
    type: 'Private',
    website: 'https://xime.org',
    phone: '080-28528597',
    rating: 4.3,
    established: 1991,
    image: '',
    imageStatus: 'Purged BMS Bangalore leak',
    notes: 'Premier autonomous B-school in Electronics City Phase II Bengaluru; corrected state from Delhi NCR to Karnataka; purged BMS Bangalore photo leak; audited flagship PGDM fees.'
  },
  {
    id: 301,
    name: 'All India Management Association - Centre for Management Education (AIMA New Delhi)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Private',
    website: 'https://www.aima.in',
    phone: '011-24645100',
    rating: 4.2,
    established: 1957,
    image: 'https://media.collegedekho.com/media/img/institute/crawled_images/None/AIMA_Building-Lodhi_Road.jpg?width=640',
    imageStatus: 'Valid Official Campus Photo',
    notes: 'National apex body for management profession in Lodhi Road; purged dummy 080 phone and raw search URL; audited blended/distance PGDM and executive management programs.'
  },
  {
    id: 302,
    name: 'Indian Aviation Academy (IAA New Delhi)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Public/Government',
    website: 'https://iaa.edu.in',
    phone: '011-26134314',
    rating: 4.4,
    established: 2010,
    image: '',
    imageStatus: 'Purged Maniben Mumbai leak',
    notes: 'Apex joint aviation training academy of AAI, DGCA, and BCAS under Ministry of Civil Aviation; restored Public/Government status from Private; purged Maniben Mumbai photo leak, dummy phone, and search URL.'
  },
  {
    id: 303,
    name: 'Indian School of Business and Finance (ISBF New Delhi)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Private',
    website: 'https://www.isbf.edu.in',
    phone: '011-40430000',
    rating: 4.3,
    established: 2006,
    image: 'https://media.getmyuni.com/azure/college-image/big/indian-school-of-business-and-finance-isbf-new-delhi.jpg',
    imageStatus: 'Valid Official Campus Photo',
    notes: 'Affiliate Centre of the University of London with academic direction from LSE; audited international undergraduate degrees in Economics, Management, and Finance.'
  },
  {
    id: 304,
    name: 'Amity University, Noida',
    state: 'Uttar Pradesh',
    city: 'Noida',
    type: 'Private',
    website: 'https://www.amity.edu',
    phone: '0120-2445252',
    rating: 4.4,
    established: 2005,
    image: '/images/campuses/campus_architecture_8.jpg',
    imageStatus: 'Valid Generic Architecture',
    notes: 'Leading multi-disciplinary private university in Sector 125 Noida (NAAC A+); corrected state to Uttar Pradesh; restored Private status from inverted Public/Government label; audited B.Tech, MBA, and Law fees.'
  },
  {
    id: 305,
    name: 'School of Engineering, Jawaharlal Nehru University (JNU SE New Delhi)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Public/Government',
    website: 'https://www.jnu.ac.in/se',
    phone: '011-26704054',
    rating: 4.6,
    established: 2018,
    image: '',
    imageStatus: 'Purged St. Xaviers Mumbai leak',
    notes: 'Engineering faculty of Central University JNU; disambiguated from main university entity; restored Public/Government status from Private; purged St. Xaviers Mumbai photo leak and dummy phone.'
  },
  {
    id: 309,
    name: 'Jagan Institute of Management Studies (JIMS Rohini Sector-5, New Delhi)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Private',
    website: 'https://www.jimsindia.org',
    phone: '011-45184000',
    rating: 4.3,
    established: 1993,
    image: '/images/campuses/campus_architecture_3.jpg',
    imageStatus: 'Valid Generic Architecture',
    notes: 'Premier management institute in Rohini Sector-5 (NAAC A, NBA, GGSIPU); purged dummy 0123-456789 phone; corrected MCA duration from 4 years to 2 years; audited PGDM, BBA, and BCA programs.'
  },
  {
    id: 310,
    name: 'Delhi School of Business (DSB VIPS-TC Pitampura, New Delhi)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Private',
    website: 'https://dsb.edu.in',
    phone: '011-27343401',
    rating: 4.2,
    established: 2012,
    image: '',
    imageStatus: 'Purged Maniben Mumbai leak',
    notes: 'AICTE-approved business school in Pitampura; purged truncated fake website domain and dummy phone; purged Maniben Mumbai photo leak; audited PGDM curricula.'
  },
  {
    id: 312,
    name: 'Maharaja Surajmal Institute (MSI Janakpuri, New Delhi)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Private',
    website: 'https://www.msi-ggsip.org',
    phone: '011-25552649',
    rating: 4.4,
    established: 1999,
    image: 'https://image-static.collegedunia.com/public/college_data/images/appImage/1492770486cvr.png',
    imageStatus: 'Valid Official Campus Photo',
    notes: 'Premier GGSIPU affiliated institute in Janakpuri (NAAC A+); purged truncated fake website domain and dummy phone; audited BBA, BCA, B.Com, and B.Ed programs.'
  },
  {
    id: 313,
    name: 'TERI School of Advanced Studies (TERI SAS New Delhi)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Deemed',
    website: 'https://www.terisas.ac.in',
    phone: '011-71800222',
    rating: 4.5,
    established: 1998,
    image: '',
    imageStatus: 'Purged Koshys Bangalore leak',
    notes: 'Pioneering Deemed University for sustainable development, climate policy, and renewable energy in Vasant Kunj; purged truncated fake domain and dummy phone; purged Koshys Bangalore photo leak.'
  }
];

const batch73Courses = [
  // 300 XIME Bengaluru
  { collegeId: 300, title: 'Post Graduate Diploma in Management (PGDM - Flagship)', division: 'Postgraduate', duration: '2 Years', fees: '₹6,00,000/Year', eligibility: 'Graduation with 50% + CAT / XAT / GMAT / MAT / CMAT', exams: 'CAT, XAT, GMAT, MAT, CMAT', intake: '180' },
  { collegeId: 300, title: 'PGDM in Business Analytics', division: 'Postgraduate', duration: '2 Years', fees: '₹6,00,000/Year', eligibility: 'Graduation with 50% + CAT / XAT / GMAT / MAT', exams: 'CAT, XAT, GMAT, MAT', intake: '60' },
  { collegeId: 300, title: 'Executive PGDM', division: 'Postgraduate', duration: '1 Year', fees: '₹4,50,000 Total', eligibility: 'Graduation + 3 Years Work Experience', exams: 'Interview', intake: '30' },

  // 301 AIMA New Delhi
  { collegeId: 301, title: 'Post Graduate Diploma in Management (PGDM - Blended / Distance)', division: 'Postgraduate', duration: '2 Years', fees: '₹63,000/Year', eligibility: 'Graduation with 50% + MAT / Direct', exams: 'MAT, Direct Admission', intake: '500' },
  { collegeId: 301, title: 'Post Graduate Diploma in IT Management (PGDITM)', division: 'Postgraduate', duration: '2 Years', fees: '₹63,000/Year', eligibility: 'Graduation with 50% + MAT', exams: 'MAT', intake: '120' },
  { collegeId: 301, title: 'Professional Diploma in Digital Marketing & Business Analytics', division: 'Diploma', duration: '1 Year', fees: '₹45,000 Total', eligibility: 'Graduation in any discipline', exams: 'Direct Admission', intake: '100' },

  // 302 IAA New Delhi
  { collegeId: 302, title: 'Advanced Diploma in Airport Operations and Management', division: 'Diploma', duration: '1 Year', fees: '₹1,20,000 Total', eligibility: 'Graduation in any discipline', exams: 'Merit & Interview', intake: '60' },
  { collegeId: 302, title: 'Executive Certificate in Aviation Safety and Security', division: 'Certificate', duration: '6 Months', fees: '₹65,000 Total', eligibility: 'Graduation + Aviation / Industry Experience', exams: 'Industry Sponsorship', intake: '40' },
  { collegeId: 302, title: 'Certificate Course in Air Cargo and Logistics Management', division: 'Certificate', duration: '6 Months', fees: '₹55,000 Total', eligibility: '10+2 / Graduation', exams: 'Direct Admission', intake: '40' },

  // 303 ISBF New Delhi
  { collegeId: 303, title: 'B.Sc. (Hons) in Economics & Finance (University of London / LSE)', division: 'Undergraduate', duration: '3 Years', fees: '₹7,50,000/Year', eligibility: '10+2 with Mathematics + iMET Entrance Test', exams: 'iMET', intake: '120' },
  { collegeId: 303, title: 'B.Sc. (Hons) in Business & Management', division: 'Undergraduate', duration: '3 Years', fees: '₹7,25,000/Year', eligibility: '10+2 with Mathematics + iMET Entrance Test', exams: 'iMET', intake: '80' },
  { collegeId: 303, title: 'Graduate Diploma in Finance (University of London)', division: 'Postgraduate', duration: '1 Year', fees: '₹3,50,000 Total', eligibility: 'Graduation in Math / Economics / Commerce', exams: 'Merit & PI', intake: '40' },

  // 304 Amity Noida
  { collegeId: 304, title: 'B.Tech in Computer Science & Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹3,95,000/Year', eligibility: '10+2 with PCM (60%+) + Amity JEE / JEE Main', exams: 'Amity JEE, JEE Main', intake: '720' },
  { collegeId: 304, title: 'Master of Business Administration (MBA - Core)', division: 'Postgraduate', duration: '2 Years', fees: '₹5,40,000/Year', eligibility: 'Graduation with 50% + CAT / MAT / XAT / Amity Test', exams: 'CAT, MAT, XAT', intake: '360' },
  { collegeId: 304, title: 'Bachelor of Business Administration (BBA)', division: 'Undergraduate', duration: '3 Years', fees: '₹3,20,000/Year', eligibility: '10+2 with 60%+', exams: 'Merit', intake: '480' },
  { collegeId: 304, title: 'B.A. LL.B. (Hons) Integrated Law', division: 'Undergraduate', duration: '5 Years', fees: '₹2,75,000/Year', eligibility: '10+2 with 60%+ + CLAT / Amity Law Test', exams: 'CLAT, Amity Law Test', intake: '240' },

  // 305 JNU SE New Delhi
  { collegeId: 305, title: 'B.Tech in Computer Science & Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,25,000/Year', eligibility: '10+2 with PCM (75%+) + JEE Main (JoSAA/CSAB)', exams: 'JEE Main', intake: '60' },
  { collegeId: 305, title: 'B.Tech in Electronics and Communication Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,25,000/Year', eligibility: '10+2 with PCM (75%+) + JEE Main', exams: 'JEE Main', intake: '60' },
  { collegeId: 305, title: 'M.Tech in Computer Science & Technology', division: 'Postgraduate', duration: '2 Years', fees: '₹40,000/Year', eligibility: 'B.Tech in CSE/IT + GATE', exams: 'GATE', intake: '30' },

  // 309 JIMS Rohini
  { collegeId: 309, title: 'Post Graduate Diploma in Management (PGDM - AICTE)', division: 'Postgraduate', duration: '2 Years', fees: '₹4,85,000/Year', eligibility: 'Graduation with 50% + CAT/XAT/MAT/CMAT', exams: 'CAT, XAT, MAT, CMAT', intake: '180' },
  { collegeId: 309, title: 'Master of Computer Applications (MCA - GGSIPU)', division: 'Postgraduate', duration: '2 Years', fees: '₹1,45,000/Year', eligibility: 'Graduation with BCA/B.Sc Math + NIMCET / IPU CET', exams: 'NIMCET, IPU CET', intake: '120' },
  { collegeId: 309, title: 'Bachelor of Business Administration (BBA - GGSIPU)', division: 'Undergraduate', duration: '3 Years', fees: '₹1,15,000/Year', eligibility: '10+2 with 50% + IPU CET / CUET UG', exams: 'IPU CET, CUET UG', intake: '240' },
  { collegeId: 309, title: 'Bachelor of Computer Applications (BCA - GGSIPU)', division: 'Undergraduate', duration: '3 Years', fees: '₹1,10,000/Year', eligibility: '10+2 with Math/IT + IPU CET / CUET UG', exams: 'IPU CET, CUET UG', intake: '120' },

  // 310 DSB Pitampura
  { collegeId: 310, title: 'Post Graduate Diploma in Management (PGDM - General)', division: 'Postgraduate', duration: '2 Years', fees: '₹4,75,000/Year', eligibility: 'Graduation with 50% + CAT/XAT/CMAT/MAT', exams: 'CAT, XAT, CMAT, MAT', intake: '180' },
  { collegeId: 310, title: 'PGDM in Financial Management', division: 'Postgraduate', duration: '2 Years', fees: '₹4,75,000/Year', eligibility: 'Graduation with 50% + CAT/XAT/CMAT', exams: 'CAT, XAT, CMAT', intake: '60' },
  { collegeId: 310, title: 'Executive PGDM', division: 'Postgraduate', duration: '15 Months', fees: '₹3,50,000 Total', eligibility: 'Graduation + 3 Years Corporate Experience', exams: 'Work Exp + PI', intake: '30' },

  // 312 MSI Janakpuri
  { collegeId: 312, title: 'Bachelor of Business Administration (BBA - Morning & Evening)', division: 'Undergraduate', duration: '3 Years', fees: '₹1,10,000/Year', eligibility: '10+2 with 50% + IPU CET / CUET UG', exams: 'IPU CET, CUET UG', intake: '360' },
  { collegeId: 312, title: 'Bachelor of Computer Applications (BCA)', division: 'Undergraduate', duration: '3 Years', fees: '₹1,05,000/Year', eligibility: '10+2 with Math/CS + IPU CET / CUET UG', exams: 'IPU CET, CUET UG', intake: '180' },
  { collegeId: 312, title: 'B.Com (Hons)', division: 'Undergraduate', duration: '3 Years', fees: '₹98,000/Year', eligibility: '10+2 with 50% in Commerce + IPU CET / CUET UG', exams: 'IPU CET, CUET UG', intake: '120' },
  { collegeId: 312, title: 'Bachelor of Education (B.Ed.)', division: 'Postgraduate', duration: '2 Years', fees: '₹85,000/Year', eligibility: 'Graduation with 50% + IPU CET / CUET PG', exams: 'IPU CET, CUET PG', intake: '100' },

  // 313 TERI SAS New Delhi
  { collegeId: 313, title: 'M.Sc. in Renewable Energy Engineering and Management', division: 'Postgraduate', duration: '2 Years', fees: '₹1,45,000/Year', eligibility: 'B.Tech / B.Sc with 55% + TERI SAS Entrance', exams: 'TERI Entrance', intake: '40' },
  { collegeId: 313, title: 'M.Sc. in Environmental Studies and Resource Management', division: 'Postgraduate', duration: '2 Years', fees: '₹1,40,000/Year', eligibility: 'Bachelor degree in Science/Economics + Entrance', exams: 'TERI Entrance', intake: '40' },
  { collegeId: 313, title: 'MBA in Sustainability Management', division: 'Postgraduate', duration: '2 Years', fees: '₹2,90,000/Year', eligibility: 'Graduation with 50% + CAT/MAT/GMAT/TERI Test', exams: 'CAT, MAT, GMAT, TERI Test', intake: '60' },
  { collegeId: 313, title: 'B.Sc. (Hons) in Data Science & Sustainable Systems', division: 'Undergraduate', duration: '3 Years', fees: '₹1,20,000/Year', eligibility: '10+2 with Mathematics (60%+)', exams: 'Merit & Interview', intake: '40' }
];

// Append to CSVs
for (const col of batch73Colleges) {
  const line = `"${col.id}","${col.name.replace(/"/g, '""')}","${col.state}","${col.city}","${col.type}","${col.website}","${col.phone}","${col.rating}","${col.established}","VERIFIED","Batch 73"\n`;
  fs.appendFileSync(collegeCsvFile, line, 'utf8');

  const imgLine = `"${col.id}","${col.name.replace(/"/g, '""')}","${col.image}","${col.imageStatus}","Batch 73"\n`;
  fs.appendFileSync(imageCsvFile, imgLine, 'utf8');
}

for (const crs of batch73Courses) {
  const crsLine = `"${crs.collegeId}","${crs.title.replace(/"/g, '""')}","${crs.division}","${crs.duration}","${crs.fees}","${crs.eligibility.replace(/"/g, '""')}","${crs.exams}","${crs.intake}","VERIFIED","Batch 73"\n`;
  fs.appendFileSync(courseCsvFile, crsLine, 'utf8');
}

// Update progress
const newIds = batch73Colleges.map(c => c.id);
const uniqueCompleted = Array.from(new Set([...progress.completed_ids, ...newIds]));
progress.completed_ids = uniqueCompleted;
progress.total_verified = uniqueCompleted.length;
progress.current_batch = 73;
progress.last_updated = new Date().toISOString();

fs.writeFileSync(progressFile, JSON.stringify(progress, null, 2), 'utf8');

console.log(`Appended 10 colleges to college-verification.csv`);
console.log(`Appended ${batch73Courses.length} courses to course-verification.csv`);
console.log(`Updated progress.json: total_verified = ${progress.total_verified}, current_batch = ${progress.current_batch}`);

