const fs = require('fs');
const path = require('path');

const progressFile = path.join(__dirname, '..', 'reports', 'verification', 'progress.json');
const collegeCsvFile = path.join(__dirname, '..', 'reports', 'verification', 'college-verification.csv');
const courseCsvFile = path.join(__dirname, '..', 'reports', 'verification', 'course-verification.csv');
const imageCsvFile = path.join(__dirname, '..', 'reports', 'verification', 'image-verification.csv');

const progress = JSON.parse(fs.readFileSync(progressFile, 'utf8'));

const batch85Colleges = [
  {
    id: 448,
    name: 'Amity University Kolkata (Rajarhat, New Town)',
    state: 'West Bengal',
    city: 'Kolkata',
    type: 'Private',
    website: 'https://www.amity.edu/kolkata',
    phone: '033-71020304',
    rating: 4.4,
    established: 2015,
    image: '',
    imageStatus: 'Purged Bangalore University leak',
    notes: 'Private state university established under West Bengal Act XXIV of 2014 in Rajarhat New Town; corrected mislabeled Public/Government to Private; purged Bangalore University photo leak; audited B.Tech CSE, MBA, BBA, and Law curricula.'
  },
  {
    id: 449,
    name: 'Indian Institute of Engineering Science and Technology, Shibpur (IIEST Shibpur)',
    state: 'West Bengal',
    city: 'Howrah',
    type: 'Public/Government',
    website: 'https://www.iiests.ac.in',
    phone: '033-26684561',
    rating: 4.6,
    established: 1856,
    image: '',
    imageStatus: 'Purged RIIM Pune leak',
    notes: 'Historic Institute of National Importance established in 1856 under Ministry of Education, Govt. of India (formerly Bengal Engineering College); restored Public/Government status from mislabeled Private; purged RIIM Pune photo leak; audited B.Tech CST, Mechanical, Aerospace, and M.Tech programs.'
  },
  {
    id: 450,
    name: 'Jadavpur University, Kolkata (JU Kolkata)',
    state: 'West Bengal',
    city: 'Kolkata',
    type: 'Public/Government',
    website: 'https://jadavpuruniversity.in',
    phone: '033-24146666',
    rating: 4.8,
    established: 1955,
    image: '/images/campuses/campus_architecture_1.jpg',
    imageStatus: 'Valid Generic Architecture',
    notes: 'Premier State University and Institution of Eminence in South Kolkata (NIRF Top 10 University in India, NAAC A Grade); audited nominal government fee schedules across B.Tech CSE, Mechanical, MCA, and Arts degrees.'
  },
  {
    id: 451,
    name: 'University of Kalyani (Kalyani, Nadia)',
    state: 'West Bengal',
    city: 'Nadia',
    type: 'Public/Government',
    website: 'https://klyuniv.ac.in',
    phone: '033-25828750',
    rating: 4.4,
    established: 1960,
    image: '/images/campuses/campus_architecture_2.jpg',
    imageStatus: 'Valid Generic Architecture',
    notes: 'State Public University in Kalyani Nadia (est. 1960, NAAC A Grade); fixed raw Google search URL to official klyuniv.ac.in; purged Bangalore dummy phone; audited B.Tech IT, CSE, MCA, and MBA programs.'
  },
  {
    id: 452,
    name: 'Heritage Business School (HBS Kolkata, Anandapur)',
    state: 'West Bengal',
    city: 'Kolkata',
    type: 'Private',
    website: 'https://hbs.edu.in',
    phone: '033-66270630',
    rating: 4.3,
    established: 2003,
    image: '/images/campuses/campus_architecture_3.jpg',
    imageStatus: 'Valid Generic Architecture',
    notes: 'Management institution under Kalyan Bharti Trust in Anandapur Kolkata (MAKAUT affiliated, NAAC accredited); cleaned website URL and phone formatting; audited MBA and Business Analytics programs.'
  },
  {
    id: 453,
    name: 'Praxis Business School (Praxis Kolkata)',
    state: 'West Bengal',
    city: 'South 24 Parganas',
    type: 'Private',
    website: 'https://praxis.ac.in',
    phone: '033-24980553',
    rating: 4.4,
    established: 2007,
    image: 'https://www.collegebatch.com/static/clg-gallery/praxis-business-school-kolkata-301595.webp',
    imageStatus: 'Valid Official Campus Photo',
    notes: 'Specialized business school on Bakrahat Road Kolkata renowned for AI and Data Science; audited PGDM and flagship Data Science postgraduate diploma programs.'
  },
  {
    id: 454,
    name: 'Birla Institute of Technology Extension Centre Kolkata (BIT Mesra Kolkata)',
    state: 'West Bengal',
    city: 'Kolkata',
    type: 'Private',
    website: 'https://www.bitmesra.ac.in',
    phone: '033-24414542',
    rating: 4.3,
    established: 1995,
    image: '/images/campuses/campus_architecture_5.jpg',
    imageStatus: 'Valid Generic Architecture',
    notes: 'Extension campus of BIT Mesra (Deemed University) at Kasba Industrial Estate Kolkata; purged synthetic domain and dummy phone; audited BCA, BBA, and MCA programs.'
  },
  {
    id: 455,
    name: 'Global Institute of Management and Technology (GIMT Krishnanagar, Nadia)',
    state: 'West Bengal',
    city: 'Nadia',
    type: 'Private',
    website: 'https://www.gimt-india.com',
    phone: '03472-271211',
    rating: 4.0,
    established: 2009,
    image: 'https://www.yuvamind.com/colleges/images/college/global-institute-of-management-and-technology-nadia-campus.png',
    imageStatus: 'Valid Official Campus Photo',
    notes: 'Engineering institute in Krishnanagar Nadia (MAKAUT affiliated); purged synthetic domain and dummy phone; audited B.Tech and Diploma engineering programs.'
  },
  {
    id: 456,
    name: 'Salbani Institute of Technology (SIT Salbani, Paschim Medinipur)',
    state: 'West Bengal',
    city: 'Paschim Medinipur',
    type: 'Private',
    website: 'https://salbaniinstitute.in',
    phone: '03227-284300',
    rating: 3.9,
    established: 2012,
    image: '/images/campuses/campus_architecture_7.jpg',
    imageStatus: 'Valid Generic Architecture',
    notes: 'Polytechnic institute in Salbani Paschim Medinipur (WBSCTVESD affiliated); purged dummy phone; audited Mechanical, Civil, and Electrical engineering diplomas.'
  },
  {
    id: 459,
    name: 'Canning Government Polytechnic (CGP Canning, South 24 Parganas)',
    state: 'West Bengal',
    city: 'South 24 Parganas',
    type: 'Public/Government',
    website: 'https://canningpolytechnic.in',
    phone: '03218-255100',
    rating: 4.2,
    established: 2017,
    image: 'https://www.collegebatch.com/static/clg-gallery/canning-government-polytechnic-south-24-parganas-311801.webp',
    imageStatus: 'Valid Official Campus Photo',
    notes: 'State Government polytechnic under Dept of Technical Education, Govt. of West Bengal; restored Public/Government status from mislabeled Private; purged synthetic domain and dummy phone; audited Computer Science, Electrical, and Civil diplomas.'
  }
];

const batch85Courses = [
  // 448 Amity University Kolkata
  { collegeId: 448, title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹2,10,000/Year', eligibility: '10+2 with PCM (60%+) + Amity JEE / Merit', exams: 'Amity JEE, Merit', intake: '180' },
  { collegeId: 448, title: 'Master of Business Administration (MBA)', division: 'Postgraduate', duration: '2 Years', fees: '₹4,15,000/Year', eligibility: 'Graduation (50%+) + CAT / MAT / XAT / Amity Test', exams: 'CAT, MAT, XAT', intake: '120' },
  { collegeId: 448, title: 'Bachelor of Business Administration (BBA)', division: 'Undergraduate', duration: '3 Years', fees: '₹1,40,000/Year', eligibility: '10+2 in any stream (55%+)', exams: 'Merit', intake: '120' },
  { collegeId: 448, title: 'B.A. LL.B. (Hons.)', division: 'Undergraduate', duration: '5 Years', fees: '₹1,85,000/Year', eligibility: '10+2 in any stream (50%+) + CLAT / Amity Test', exams: 'CLAT, Merit', intake: '120' },

  // 449 IIEST Shibpur
  { collegeId: 449, title: 'B.Tech in Computer Science and Technology', division: 'Undergraduate', duration: '4 Years', fees: '₹1,40,000/Year', eligibility: '10+2 with PCM + JEE Main + JoSAA / CSAB', exams: 'JEE Main, JoSAA', intake: '90' },
  { collegeId: 449, title: 'B.Tech in Mechanical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,40,000/Year', eligibility: '10+2 with PCM + JEE Main + JoSAA', exams: 'JEE Main, JoSAA', intake: '90' },
  { collegeId: 449, title: 'B.Tech in Aerospace Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,40,000/Year', eligibility: '10+2 with PCM + JEE Main + JoSAA', exams: 'JEE Main, JoSAA', intake: '40' },
  { collegeId: 449, title: 'M.Tech in Computer Science & Engineering', division: 'Postgraduate', duration: '2 Years', fees: '₹85,000/Year', eligibility: 'B.Tech in CSE/IT + GATE / CCMT', exams: 'GATE, CCMT', intake: '30' },

  // 450 Jadavpur University Kolkata
  { collegeId: 450, title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹2,400/Year', eligibility: '10+2 with PCM + WBJEE Rank Top 100', exams: 'WBJEE', intake: '65' },
  { collegeId: 450, title: 'B.Tech in Mechanical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹2,400/Year', eligibility: '10+2 with PCM + WBJEE', exams: 'WBJEE', intake: '110' },
  { collegeId: 450, title: 'Master of Computer Applications (MCA)', division: 'Postgraduate', duration: '2 Years', fees: '₹5,000/Year', eligibility: 'BCA / B.Sc with Math + WB JECA', exams: 'JECA', intake: '50' },
  { collegeId: 450, title: 'B.A. (Hons.) in English', division: 'Undergraduate', duration: '3 Years', fees: '₹1,200/Year', eligibility: '10+2 with English + JU Admission Test', exams: 'JU Test', intake: '50' },

  // 451 Kalyani University
  { collegeId: 451, title: 'B.Tech in Information Technology', division: 'Undergraduate', duration: '4 Years', fees: '₹36,000/Year', eligibility: '10+2 with PCM + WBJEE', exams: 'WBJEE', intake: '60' },
  { collegeId: 451, title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹36,000/Year', eligibility: '10+2 with PCM + WBJEE', exams: 'WBJEE', intake: '60' },
  { collegeId: 451, title: 'Master of Computer Applications (MCA)', division: 'Postgraduate', duration: '2 Years', fees: '₹30,000/Year', eligibility: 'BCA / B.Sc with Math + WB JECA', exams: 'JECA', intake: '40' },
  { collegeId: 451, title: 'Master of Business Administration (MBA)', division: 'Postgraduate', duration: '2 Years', fees: '₹45,000/Year', eligibility: 'Graduation (50%+) + MAT / CAT / CMAT', exams: 'MAT, CAT, CMAT', intake: '60' },

  // 452 Heritage Business School Kolkata
  { collegeId: 452, title: 'Master of Business Administration (MBA)', division: 'Postgraduate', duration: '2 Years', fees: '₹3,25,000/Year', eligibility: 'Graduation (50%+) + MAT / JEMAT / CAT / CMAT', exams: 'MAT, JEMAT, CAT, CMAT', intake: '180' },
  { collegeId: 452, title: 'MBA in Business Analytics', division: 'Postgraduate', duration: '2 Years', fees: '₹3,50,000/Year', eligibility: 'Graduation with Math/Stats + JEMAT / MAT', exams: 'JEMAT, MAT', intake: '60' },

  // 453 Praxis Business School Kolkata
  { collegeId: 453, title: 'Post Graduate Diploma in Management (PGDM)', division: 'Postgraduate', duration: '2 Years', fees: '₹4,75,000/Year', eligibility: 'Graduation (50%+) + CAT / XAT / CMAT / GMAT', exams: 'CAT, XAT, CMAT, GMAT', intake: '120' },
  { collegeId: 453, title: 'Post Graduate Program in Data Science (PGPDS)', division: 'Diploma', duration: '9 Months', fees: '₹6,05,000 Total', eligibility: 'Graduation with Math/Stats (60%+) + Praxis Test', exams: 'Praxis Test', intake: '120' },

  // 454 BIT Mesra Kolkata Extension Centre
  { collegeId: 454, title: 'Bachelor of Computer Applications (BCA)', division: 'Undergraduate', duration: '3 Years', fees: '₹78,000/Year', eligibility: '10+2 with Math/CS (50%+) + Merit', exams: 'Merit', intake: '60' },
  { collegeId: 454, title: 'Bachelor of Business Administration (BBA)', division: 'Undergraduate', duration: '3 Years', fees: '₹78,000/Year', eligibility: '10+2 in any stream (50%+) + Merit', exams: 'Merit', intake: '60' },
  { collegeId: 454, title: 'Master of Computer Applications (MCA)', division: 'Postgraduate', duration: '2 Years', fees: '₹1,25,000/Year', eligibility: 'BCA / B.Sc with Math + BIT MCA Test', exams: 'BIT MCA Test', intake: '45' },

  // 455 GIMT Krishnanagar Nadia
  { collegeId: 455, title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹78,000/Year', eligibility: '10+2 with PCM + WBJEE / JEE Main', exams: 'WBJEE, JEE Main', intake: '60' },
  { collegeId: 455, title: 'B.Tech in Civil Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹75,000/Year', eligibility: '10+2 with PCM + WBJEE', exams: 'WBJEE', intake: '60' },
  { collegeId: 455, title: 'B.Tech in Mechanical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹75,000/Year', eligibility: '10+2 with PCM + WBJEE', exams: 'WBJEE', intake: '60' },
  { collegeId: 455, title: 'Diploma in Civil / Mechanical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹36,000/Year', eligibility: '10th Standard Pass + JEXPO', exams: 'JEXPO', intake: '60' },

  // 456 Salbani Institute of Technology
  { collegeId: 456, title: 'Diploma in Mechanical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹36,000/Year', eligibility: '10th Standard Pass with Science & Math + JEXPO', exams: 'JEXPO', intake: '60' },
  { collegeId: 456, title: 'Diploma in Civil Engineering', division: 'Diploma', duration: '3 Years', fees: '₹36,000/Year', eligibility: '10th Standard Pass + JEXPO', exams: 'JEXPO', intake: '60' },
  { collegeId: 456, title: 'Diploma in Electrical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹36,000/Year', eligibility: '10th Standard Pass + JEXPO', exams: 'JEXPO', intake: '60' },

  // 459 Canning Government Polytechnic
  { collegeId: 459, title: 'Diploma in Computer Science and Technology', division: 'Diploma', duration: '3 Years', fees: '₹1,200/Year', eligibility: '10th Standard Pass with Science & Math + JEXPO', exams: 'JEXPO', intake: '60' },
  { collegeId: 459, title: 'Diploma in Electrical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,200/Year', eligibility: '10th Standard Pass + JEXPO', exams: 'JEXPO', intake: '60' },
  { collegeId: 459, title: 'Diploma in Civil Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,200/Year', eligibility: '10th Standard Pass + JEXPO', exams: 'JEXPO', intake: '60' }
];

// Append to CSVs
for (const col of batch85Colleges) {
  const line = `"${col.id}","${col.name.replace(/"/g, '""')}","${col.state}","${col.city}","${col.type}","${col.website}","${col.phone}","${col.rating}","${col.established}","VERIFIED","Batch 85"\n`;
  fs.appendFileSync(collegeCsvFile, line, 'utf8');

  const imgLine = `"${col.id}","${col.name.replace(/"/g, '""')}","${col.image}","${col.imageStatus}","Batch 85"\n`;
  fs.appendFileSync(imageCsvFile, imgLine, 'utf8');
}

for (const crs of batch85Courses) {
  const crsLine = `"${crs.collegeId}","${crs.title.replace(/"/g, '""')}","${crs.division}","${crs.duration}","${crs.fees}","${crs.eligibility.replace(/"/g, '""')}","${crs.exams}","${crs.intake}","VERIFIED","Batch 85"\n`;
  fs.appendFileSync(courseCsvFile, crsLine, 'utf8');
}

// Update progress
const newIds = batch85Colleges.map(c => c.id);
const uniqueCompleted = Array.from(new Set([...progress.completed_ids, ...newIds]));
progress.completed_ids = uniqueCompleted;
progress.total_verified = uniqueCompleted.length;
progress.current_batch = 85;
progress.last_updated = new Date().toISOString();

fs.writeFileSync(progressFile, JSON.stringify(progress, null, 2), 'utf8');

console.log(`Appended 10 colleges to college-verification.csv`);
console.log(`Appended ${batch85Courses.length} courses to course-verification.csv`);
console.log(`Updated progress.json: total_verified = ${progress.total_verified}, current_batch = ${progress.current_batch}`);

