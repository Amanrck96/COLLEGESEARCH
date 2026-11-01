const fs = require('fs');
const path = require('path');

const progressFile = path.join(__dirname, '..', 'reports', 'verification', 'progress.json');
const collegeCsvFile = path.join(__dirname, '..', 'reports', 'verification', 'college-verification.csv');
const courseCsvFile = path.join(__dirname, '..', 'reports', 'verification', 'course-verification.csv');
const imageCsvFile = path.join(__dirname, '..', 'reports', 'verification', 'image-verification.csv');

const progress = JSON.parse(fs.readFileSync(progressFile, 'utf8'));

const batch71Colleges = [
  {
    id: 280,
    name: 'FORE School of Management (FSM New Delhi)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Private',
    website: 'https://www.fsm.ac.in',
    phone: '011-41242415',
    rating: 4.3,
    established: 1981,
    image: '/images/campuses/campus_architecture_2.jpg',
    imageStatus: 'Valid Generic Architecture',
    notes: 'Premier autonomous business school in Qutab Institutional Area, New Delhi; AICTE approved, SAQS/NBA accredited; audited PGDM fees.'
  },
  {
    id: 281,
    name: 'SOIL Institute of Management, Gurugram',
    state: 'Haryana',
    city: 'Gurugram',
    type: 'Private',
    website: 'https://www.soil.edu.in',
    phone: '0124-4302222',
    rating: 4.1,
    established: 2008,
    image: 'https://www.soil.edu.in/wp-content/themes/soil/image/about-soil-1.jpg',
    imageStatus: 'Valid Official Campus Photo',
    notes: 'Innovative B-school in Sector 44 Gurugram; corrected state to Haryana; audited PGPM and PGDM programs.'
  },
  {
    id: 282,
    name: 'UEI Global, Rohini, New Delhi',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Private',
    website: 'https://www.uei-global.com',
    phone: '011-44151515',
    rating: 3.9,
    established: 2007,
    image: '/images/campuses/campus_architecture_4.jpg',
    imageStatus: 'Valid Generic Architecture',
    notes: 'Hospitality and vocational institute in Rohini; purged dummy 080 phone and raw search URL; restored official website and fees.'
  },
  {
    id: 283,
    name: 'Jamia Millia Islamia (JMI New Delhi)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Public/Government',
    website: 'https://jmi.ac.in',
    phone: '011-26981717',
    rating: 4.8,
    established: 1920,
    image: '',
    imageStatus: 'Purged Koshys Bangalore leak',
    notes: 'Premier Central University (NAAC A++, NIRF Top 3); restored Public/Government status from Private; purged Koshys Bangalore photo leak; audited statutory central university fees.'
  },
  {
    id: 284,
    name: 'GNIOT Institute of Management Studies (GIMS Greater Noida)',
    state: 'Uttar Pradesh',
    city: 'Greater Noida',
    type: 'Private',
    website: 'https://www.gims.net.in',
    phone: '0120-2323854',
    rating: 4.0,
    established: 2001,
    image: 'https://drupal.mbauniverse.com/sites/default/files/collegerightsidebar/GNIOT-1-Campus.jpg',
    imageStatus: 'Valid Official Campus Photo',
    notes: 'Management institute in Knowledge Park II Greater Noida; corrected state to Uttar Pradesh; audited PGDM fees.'
  },
  {
    id: 285,
    name: 'Institute of Management Technology (IMT Ghaziabad)',
    state: 'Uttar Pradesh',
    city: 'Ghaziabad',
    type: 'Private',
    website: 'https://www.imt.edu',
    phone: '0120-4083200',
    rating: 4.6,
    established: 1980,
    image: 'https://drupal.mbauniverse.com/sites/default/files/collegebanner/college_gallery_47871721194333.jpg',
    imageStatus: 'Valid Official Campus Photo',
    notes: 'Premier AACSB-accredited B-school; normalized duplicate name; purged dummy 080 phone and raw search URL; corrected state to Uttar Pradesh.'
  },
  {
    id: 286,
    name: 'Jaipuria Institute of Management, Noida',
    state: 'Uttar Pradesh',
    city: 'Noida',
    type: 'Private',
    website: 'https://www.jaipuria.ac.in/campuses/jaipuria-noida/',
    phone: '0120-4638300',
    rating: 4.2,
    established: 2004,
    image: 'https://www.jaipuria.ac.in/wp-content/uploads/2022/09/Noida-campus-banner-About-us-Page.jpg',
    imageStatus: 'Valid Official Campus Photo',
    notes: 'Leading private management institute in Sector 62 Noida; corrected state to Uttar Pradesh; audited PGDM fees.'
  },
  {
    id: 287,
    name: 'Indian Institute of Foreign Trade (IIFT New Delhi)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Public/Government',
    website: 'https://www.iift.ac.in',
    phone: '011-39147200',
    rating: 4.7,
    established: 1963,
    image: 'https://image-static.collegedunia.com/public/college_data/images/appImage/25453_IIFTD_NEW.jpg',
    imageStatus: 'Valid Official Campus Photo',
    notes: 'Autonomous Deemed University under Ministry of Commerce and Industry, Govt of India; normalized duplicate name; restored Public/Government status from Private; purged dummy 080 phone and raw search URL.'
  },
  {
    id: 288,
    name: 'Lady Irwin College, University of Delhi',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Public/Government',
    website: 'https://ladyirwin.edu.in',
    phone: '011-23711222',
    rating: 4.7,
    established: 1932,
    image: 'https://www.careerindia.com/img/2018/03/10-ladyirwincollege-universityofdelhi-1520655097.jpg',
    imageStatus: 'Valid Official Campus Photo',
    notes: 'Premier constituent college of DU (NAAC A++); purged fake B.Tech course template; restored Home Science, Food Technology, and Education courses; updated official website.'
  },
  {
    id: 289,
    name: 'Frankfinn Institute of Air Hostess Training, New Delhi',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Private',
    website: 'https://www.frankfinn.com',
    phone: '011-45664300',
    rating: 4.0,
    established: 1993,
    image: '/images/campuses/campus_architecture_2.jpg',
    imageStatus: 'Valid Generic Architecture',
    notes: 'Aviation and hospitality training academy; purged fake B.Tech course template; restored aviation diploma and certificate programs.'
  }
];

const batch71Courses = [
  // 280 FSM Delhi
  { collegeId: 280, title: 'Post Graduate Diploma in Management (PGDM - General)', division: 'Postgraduate', duration: '2 Years', fees: '₹8,50,000/Year', eligibility: 'Graduation with 50% + CAT / XAT / GMAT', exams: 'CAT, XAT, GMAT', intake: '180' },
  { collegeId: 280, title: 'PGDM in International Business (PGDM-IB)', division: 'Postgraduate', duration: '2 Years', fees: '₹8,50,000/Year', eligibility: 'Graduation with 50% + CAT / XAT / GMAT', exams: 'CAT, XAT, GMAT', intake: '120' },
  { collegeId: 280, title: 'PGDM in Financial Management (PGDM-FM)', division: 'Postgraduate', duration: '2 Years', fees: '₹8,50,000/Year', eligibility: 'Graduation with 50% + CAT / XAT / GMAT', exams: 'CAT, XAT, GMAT', intake: '120' },
  { collegeId: 280, title: 'Executive PGDM', division: 'Postgraduate', duration: '15 Months', fees: '₹6,00,000 Total', eligibility: 'Graduation + 5 Years Work Experience', exams: 'CAT, XAT, GMAT', intake: '60' },

  // 281 SOIL Gurugram
  { collegeId: 281, title: 'Post Graduate Program in Management (PGPM - Business Leadership)', division: 'Postgraduate', duration: '1 Year', fees: '₹15,30,000 Total', eligibility: 'Graduation + 2 yrs work exp + CAT/XAT/GMAT/SOIL-MAT', exams: 'CAT, XAT, GMAT, SOIL-MAT', intake: '120' },
  { collegeId: 281, title: 'Post Graduate Diploma in Management (PGDM)', division: 'Postgraduate', duration: '2 Years', fees: '₹6,50,000/Year', eligibility: 'Graduation with 50% + CAT / XAT / GMAT / MAT', exams: 'CAT, XAT, GMAT, MAT', intake: '120' },
  { collegeId: 281, title: 'PGPM Human Resources (HR)', division: 'Postgraduate', duration: '1 Year', fees: '₹13,80,000 Total', eligibility: 'Graduation + Work Experience + Interview', exams: 'Work Exp + PI', intake: '60' },

  // 282 UEI Global Rohini
  { collegeId: 282, title: 'Bachelor in Hotel Management (BHM)', division: 'Undergraduate', duration: '3 Years', fees: '₹1,10,000/Year', eligibility: '10+2 in any stream', exams: 'Merit', intake: '60' },
  { collegeId: 282, title: 'Bachelor of Business Administration (BBA)', division: 'Undergraduate', duration: '3 Years', fees: '₹95,000/Year', eligibility: '10+2 in any stream', exams: 'Merit', intake: '60' },
  { collegeId: 282, title: 'Grand Chef Diploma in Culinary Arts', division: 'Diploma', duration: '1 Year', fees: '₹1,35,000 Total', eligibility: '10th or 10+2 Pass', exams: 'Direct Admission', intake: '30' },

  // 283 Jamia Millia Islamia
  { collegeId: 283, title: 'B.Tech in Computer Engineering / Mechanical / Civil / Electrical', division: 'Undergraduate', duration: '4 Years', fees: '₹16,150/Year', eligibility: '10+2 with PCM (55%+) + JEE Main', exams: 'JEE Main', intake: '350' },
  { collegeId: 283, title: 'Master of Business Administration (MBA)', division: 'Postgraduate', duration: '2 Years', fees: '₹23,500/Year', eligibility: 'Graduation with 50% + JMI Entrance Exam', exams: 'JMI Entrance', intake: '140' },
  { collegeId: 283, title: 'B.A. (Hons) / B.Sc. (Hons) Multidisciplinary Programs', division: 'Undergraduate', duration: '3 Years', fees: '₹7,200/Year', eligibility: '10+2 with 50% + CUET UG', exams: 'CUET UG', intake: '600' },
  { collegeId: 283, title: 'Bachelor of Architecture (B.Arch)', division: 'Undergraduate', duration: '5 Years', fees: '₹16,150/Year', eligibility: '10+2 with PCM + NATA / JEE Main Paper 2', exams: 'NATA, JEE Main Paper 2', intake: '80' },

  // 284 GIMS Greater Noida
  { collegeId: 284, title: 'Post Graduate Diploma in Management (PGDM - Dual Specialization)', division: 'Postgraduate', duration: '2 Years', fees: '₹3,85,000/Year', eligibility: 'Graduation with 50% + CAT/XAT/MAT/CMAT', exams: 'CAT, XAT, MAT, CMAT', intake: '180' },
  { collegeId: 284, title: 'PGDM in Business Analytics & Emerging Technologies', division: 'Postgraduate', duration: '2 Years', fees: '₹3,85,000/Year', eligibility: 'Graduation with 50% + CAT/XAT/MAT/CMAT', exams: 'CAT, XAT, MAT, CMAT', intake: '60' },

  // 285 IMT Ghaziabad
  { collegeId: 285, title: 'Post Graduate Diploma in Management (PGDM - Two Year Flagship)', division: 'Postgraduate', duration: '2 Years', fees: '₹10,75,000/Year', eligibility: 'Graduation with 50% + CAT / XAT / GMAT', exams: 'CAT, XAT, GMAT', intake: '480' },
  { collegeId: 285, title: 'PGDM in Marketing', division: 'Postgraduate', duration: '2 Years', fees: '₹10,75,000/Year', eligibility: 'Graduation with 50% + CAT / XAT / GMAT', exams: 'CAT, XAT, GMAT', intake: '180' },
  { collegeId: 285, title: 'PGDM in Financial Management', division: 'Postgraduate', duration: '2 Years', fees: '₹10,75,000/Year', eligibility: 'Graduation with 50% + CAT / XAT / GMAT', exams: 'CAT, XAT, GMAT', intake: '60' },
  { collegeId: 285, title: 'PGDM Banking and Financial Services (BFS)', division: 'Postgraduate', duration: '2 Years', fees: '₹10,75,000/Year', eligibility: 'Graduation with 50% + CAT / XAT / GMAT', exams: 'CAT, XAT, GMAT', intake: '60' },

  // 286 Jaipuria Noida
  { collegeId: 286, title: 'Post Graduate Diploma in Management (PGDM)', division: 'Postgraduate', duration: '2 Years', fees: '₹6,75,000/Year', eligibility: 'Graduation with 50% + CAT / XAT / CMAT / MAT', exams: 'CAT, XAT, CMAT, MAT', intake: '300' },
  { collegeId: 286, title: 'PGDM in Service Management', division: 'Postgraduate', duration: '2 Years', fees: '₹6,50,000/Year', eligibility: 'Graduation with 50% + CAT / XAT / CMAT / MAT', exams: 'CAT, XAT, CMAT, MAT', intake: '60' },
  { collegeId: 286, title: 'PGDM in Marketing', division: 'Postgraduate', duration: '2 Years', fees: '₹6,75,000/Year', eligibility: 'Graduation with 50% + CAT / XAT / CMAT / MAT', exams: 'CAT, XAT, CMAT, MAT', intake: '60' },

  // 287 IIFT New Delhi
  { collegeId: 287, title: 'MBA in International Business (MBA-IB)', division: 'Postgraduate', duration: '2 Years', fees: '₹11,00,000/Year', eligibility: 'Graduation with 50% + CAT', exams: 'CAT', intake: '250' },
  { collegeId: 287, title: 'MBA in Business Analytics', division: 'Postgraduate', duration: '2 Years', fees: '₹9,50,000/Year', eligibility: 'Graduation with 50% + CAT', exams: 'CAT', intake: '60' },
  { collegeId: 287, title: 'M.A. in Economics (Specialization in Trade & Finance)', division: 'Postgraduate', duration: '2 Years', fees: '₹1,80,000/Year', eligibility: 'Bachelor degree in Economics/Math + Entrance', exams: 'IIFT Entrance', intake: '50' },
  { collegeId: 287, title: 'Executive Post Graduate Diploma in International Business (EPGDIB)', division: 'Executive', duration: '18 Months', fees: '₹4,50,000 Total', eligibility: 'Graduation + 5 Years Work Experience', exams: 'Work Exp + PI', intake: '50' },

  // 288 Lady Irwin College DU
  { collegeId: 288, title: 'B.Sc. (Hons) Home Science', division: 'Undergraduate', duration: '3 Years', fees: '₹31,240/Year', eligibility: '10+2 with Science/Home Science + CUET UG', exams: 'CUET UG', intake: '260' },
  { collegeId: 288, title: 'B.Sc. (Hons) Food Technology', division: 'Undergraduate', duration: '3 Years', fees: '₹35,240/Year', eligibility: '10+2 with PCM/PCB + CUET UG', exams: 'CUET UG', intake: '60' },
  { collegeId: 288, title: 'Bachelor of Education (B.Ed.)', division: 'Postgraduate', duration: '2 Years', fees: '₹37,500/Year', eligibility: 'Graduation with 50% + CUET PG', exams: 'CUET PG', intake: '125' },
  { collegeId: 288, title: 'M.Sc. in Food and Nutrition', division: 'Postgraduate', duration: '2 Years', fees: '₹29,800/Year', eligibility: 'B.Sc Home Science/Food Tech + CUET PG', exams: 'CUET PG', intake: '40' },

  // 289 Frankfinn Delhi
  { collegeId: 289, title: 'Certificate in Aviation, Hospitality & Travel Management', division: 'Certificate', duration: '1 Year', fees: '₹1,50,000 Total', eligibility: '10+2 in any stream + Personal Interview', exams: 'PI', intake: '100' },
  { collegeId: 289, title: 'Diploma in Aviation & Hospitality Services', division: 'Diploma', duration: '1 Year', fees: '₹1,40,000 Total', eligibility: '10+2 in any stream + Aptitude & Grooming Test', exams: 'Aptitude Test', intake: '80' },
  { collegeId: 289, title: 'Certificate in Airport Ground Services', division: 'Certificate', duration: '6 Months', fees: '₹85,000 Total', eligibility: '10+2 in any stream', exams: 'Direct Admission', intake: '60' }
];

// Append to CSVs
for (const col of batch71Colleges) {
  const line = `"${col.id}","${col.name.replace(/"/g, '""')}","${col.state}","${col.city}","${col.type}","${col.website}","${col.phone}","${col.rating}","${col.established}","VERIFIED","Batch 71"\n`;
  fs.appendFileSync(collegeCsvFile, line, 'utf8');

  const imgLine = `"${col.id}","${col.name.replace(/"/g, '""')}","${col.image}","${col.imageStatus}","Batch 71"\n`;
  fs.appendFileSync(imageCsvFile, imgLine, 'utf8');
}

for (const crs of batch71Courses) {
  const crsLine = `"${crs.collegeId}","${crs.title.replace(/"/g, '""')}","${crs.division}","${crs.duration}","${crs.fees}","${crs.eligibility.replace(/"/g, '""')}","${crs.exams}","${crs.intake}","VERIFIED","Batch 71"\n`;
  fs.appendFileSync(courseCsvFile, crsLine, 'utf8');
}

// Update progress
const newIds = batch71Colleges.map(c => c.id);
const uniqueCompleted = Array.from(new Set([...progress.completed_ids, ...newIds]));
progress.completed_ids = uniqueCompleted;
progress.total_verified = uniqueCompleted.length;
progress.current_batch = 71;
progress.last_updated = new Date().toISOString();

fs.writeFileSync(progressFile, JSON.stringify(progress, null, 2), 'utf8');

console.log(`Appended 10 colleges to college-verification.csv`);
console.log(`Appended ${batch71Courses.length} courses to course-verification.csv`);
console.log(`Updated progress.json: total_verified = ${progress.total_verified}, current_batch = ${progress.current_batch}`);
