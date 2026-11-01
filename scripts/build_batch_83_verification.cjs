const fs = require('fs');
const path = require('path');

const progressFile = path.join(__dirname, '..', 'reports', 'verification', 'progress.json');
const collegeCsvFile = path.join(__dirname, '..', 'reports', 'verification', 'college-verification.csv');
const courseCsvFile = path.join(__dirname, '..', 'reports', 'verification', 'course-verification.csv');
const imageCsvFile = path.join(__dirname, '..', 'reports', 'verification', 'image-verification.csv');

const progress = JSON.parse(fs.readFileSync(progressFile, 'utf8'));

const batch83Colleges = [
  {
    id: 427,
    name: 'The Mandvi Education Society Institute of Computer Studies (TMESICS Mandvi, Surat)',
    state: 'Gujarat',
    city: 'Surat',
    type: 'Private',
    website: 'https://mandviedusociety.org',
    phone: '02623-221085',
    rating: 4.0,
    established: 2008,
    image: '',
    imageStatus: 'Purged VJTI Mumbai leak',
    notes: 'Computer studies institute in Mandvi Surat (VNSGU affiliated); purged VJTI Mumbai photo leak, synthetic domain, and dummy phone; audited BCA and PGDCA programs.'
  },
  {
    id: 428,
    name: 'Smt. R. S. Patel Institute of Diploma Engineering (Shelavi, Patan)',
    state: 'Gujarat',
    city: 'Patan',
    type: 'Private',
    website: 'http://srspide.org',
    phone: '02766-261200',
    rating: 3.9,
    established: 2013,
    image: '/images/campuses/campus_architecture_2.jpg',
    imageStatus: 'Valid Generic Architecture',
    notes: 'Polytechnic institute in Shelavi Patan (GTU affiliated); purged synthetic domain and dummy phone; audited engineering diploma programs.'
  },
  {
    id: 429,
    name: 'D. A. Degree Engineering and Technology (DADET Mahemdavad, Kheda)',
    state: 'Gujarat',
    city: 'Kheda',
    type: 'Private',
    website: 'https://dadet.org',
    phone: '02694-222300',
    rating: 4.1,
    established: 2014,
    image: 'https://www.joonsquare.com/usermanage/image/business/d-a-degree-engineering-and-technology-kheda-14215/d-a-degree-engineering-and-technology-kheda-d-a-degree-engineering-and-technology-1.jpg',
    imageStatus: 'Valid Official Campus Photo',
    notes: 'Engineering college in Mahemdavad Kheda (GTU affiliated); purged synthetic domain and dummy phone; audited B.Tech and Diploma engineering curricula.'
  },
  {
    id: 431,
    name: 'GIDC Degree Engineering College (GDEC Abrama, Navsari)',
    state: 'Gujarat',
    city: 'Navsari',
    type: 'Public/Government',
    website: 'https://gdec.in',
    phone: '02637-229040',
    rating: 4.3,
    established: 2012,
    image: '',
    imageStatus: 'Purged Saraswati Kharghar leak',
    notes: 'Govt. of Gujarat initiative established by GIDC Education Society; restored Public/Government status from mislabeled Private; purged Saraswati Kharghar photo leak, synthetic domain, and dummy phone; corrected spelling defect in raw record.'
  },
  {
    id: 432,
    name: 'Government Polytechnic, Palanpur (GP Palanpur, Banaskantha)',
    state: 'Gujarat',
    city: 'Banaskantha',
    type: 'Public/Government',
    website: 'https://gppalanpur.ac.in',
    phone: '02742-262100',
    rating: 4.2,
    established: 1984,
    image: '',
    imageStatus: 'Purged COEP Pune leak',
    notes: 'State Government polytechnic in Palanpur Banaskantha (est. 1984); restored Public/Government status from mislabeled Private; purged COEP Pune photo leak, synthetic domain, and dummy phone; audited nominal government fee schedules.'
  },
  {
    id: 433,
    name: 'A. V. Parekh Technical Institute (AVPTI Rajkot)',
    state: 'Gujarat',
    city: 'Rajkot',
    type: 'Public/Government',
    website: 'https://avpti.ac.in',
    phone: '0281-2480175',
    rating: 4.4,
    established: 1948,
    image: 'https://images.careerindia.com/college-photos/6845/01-main-building_1654511892.JPG',
    imageStatus: 'Valid Official Campus Photo',
    notes: 'Historic State Government technical institute near Dharmendra College Rajkot (est. 1948); restored Public/Government status from mislabeled Private; purged synthetic domain and dummy phone; audited Computer, Biomedical, and EC diplomas.'
  },
  {
    id: 434,
    name: 'Government Polytechnic, Dahod (GP Dahod)',
    state: 'Gujarat',
    city: 'Dahod',
    type: 'Public/Government',
    website: 'https://gpdahod.ac.in',
    phone: '02673-241500',
    rating: 4.2,
    established: 1958,
    image: 'https://img.jagranjosh.com/images/2024/March/1832024/Campus View of Government Polytechnic Dahod_Campus-View.png',
    imageStatus: 'Valid Official Campus Photo',
    notes: 'Historic State Government polytechnic in Dahod (est. 1958); restored Public/Government status from mislabeled Private; purged synthetic domain and dummy phone; audited Civil, Mechanical, Electrical, and Computer diplomas.'
  },
  {
    id: 435,
    name: 'Saroj Mohan Institute of Technology (SMIT Hooghly, West Bengal)',
    state: 'West Bengal',
    city: 'Hooghly',
    type: 'Private',
    website: 'https://smitgp.edu.in',
    phone: '03213-261541',
    rating: 4.0,
    established: 2003,
    image: 'https://www.collegebatch.com/static/clg-gallery/saroj-mohan-institute-of-technology-hooghly-294740.webp',
    imageStatus: 'Valid Official Campus Photo',
    notes: 'Engineering institute in Guptipara Hooghly (MAKAUT affiliated); purged synthetic domain and dummy phone; audited B.Tech and Diploma engineering programs.'
  },
  {
    id: 436,
    name: 'Maulana Abul Kalam Azad University of Technology (MAKAUT, West Bengal)',
    state: 'West Bengal',
    city: 'Nadia',
    type: 'Public/Government',
    website: 'https://makautwb.ac.in',
    phone: '033-23210731',
    rating: 4.5,
    established: 2001,
    image: '/images/campuses/campus_architecture_5.jpg',
    imageStatus: 'Valid Generic Architecture',
    notes: 'Premier State Public University of West Bengal (formerly WBUT, NAAC A Grade); restored Public/Government status from mislabeled Private; purged synthetic domain and dummy phone; audited B.Tech CSE, IT, MCA, and MBA curricula.'
  },
  {
    id: 437,
    name: 'The West Bengal National University of Juridical Sciences (WBNUJS Kolkata)',
    state: 'West Bengal',
    city: 'Kolkata',
    type: 'Public/Government',
    website: 'https://www.nujs.edu',
    phone: '033-23357379',
    rating: 4.8,
    established: 1999,
    image: '',
    imageStatus: 'Purged PIBM Pune leak',
    notes: 'Premier National Law University in Salt Lake Kolkata (NIRF Top 4 Law in India); purged PIBM Pune photo leak; restored verified official phone numbers; audited B.A. LL.B., B.Sc. LL.B., LL.M., and Ph.D. law programs.'
  }
];

const batch83Courses = [
  // 427 Mandvi Education Society Surat
  { collegeId: 427, title: 'Bachelor of Computer Applications (BCA)', division: 'Undergraduate', duration: '3 Years', fees: '₹28,000/Year', eligibility: '10+2 in any stream + VNSGU Centralized Admission', exams: 'Merit', intake: '120' },
  { collegeId: 427, title: 'B.Sc. in Information Technology (B.Sc. IT)', division: 'Undergraduate', duration: '3 Years', fees: '₹30,000/Year', eligibility: '10+2 with Science/Math', exams: 'Merit', intake: '60' },
  { collegeId: 427, title: 'Post Graduate Diploma in Computer Applications (PGDCA)', division: 'Diploma', duration: '1 Year', fees: '₹20,000 Total', eligibility: 'Graduation in any stream', exams: 'Merit', intake: '60' },

  // 428 Smt. RS Patel Polytechnic Patan
  { collegeId: 428, title: 'Diploma in Computer Engineering', division: 'Diploma', duration: '3 Years', fees: '₹36,000/Year', eligibility: '10th Standard Pass with Science & Math + ACPDC', exams: 'ACPDC', intake: '60' },
  { collegeId: 428, title: 'Diploma in Mechanical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹36,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },
  { collegeId: 428, title: 'Diploma in Civil Engineering', division: 'Diploma', duration: '3 Years', fees: '₹36,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },
  { collegeId: 428, title: 'Diploma in Electrical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹36,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },

  // 429 DA Degree Engineering Kheda
  { collegeId: 429, title: 'B.Tech in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹63,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC Gujarat', exams: 'GUJCET, ACPC', intake: '60' },
  { collegeId: 429, title: 'B.Tech in Civil Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹63,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
  { collegeId: 429, title: 'B.Tech in Mechanical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹63,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
  { collegeId: 429, title: 'Diploma in Engineering (Polytechnic)', division: 'Diploma', duration: '3 Years', fees: '₹36,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },

  // 431 GIDC Degree Engineering College Navsari
  { collegeId: 431, title: 'B.Tech in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹61,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC Gujarat', exams: 'GUJCET, ACPC', intake: '60' },
  { collegeId: 431, title: 'B.Tech in Mechanical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹61,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
  { collegeId: 431, title: 'B.Tech in Civil Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹61,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
  { collegeId: 431, title: 'B.Tech in Electrical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹61,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },

  // 432 Government Polytechnic Palanpur
  { collegeId: 432, title: 'Diploma in Computer Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,500/Year', eligibility: '10th Standard Pass with Science & Math + ACPDC Gujarat (Tuition Free for Girls)', exams: 'ACPDC', intake: '60' },
  { collegeId: 432, title: 'Diploma in Civil Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,500/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '120' },
  { collegeId: 432, title: 'Diploma in Mechanical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,500/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '120' },
  { collegeId: 432, title: 'Diploma in Electrical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,500/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '120' },

  // 433 A. V. Parekh Technical Institute Rajkot
  { collegeId: 433, title: 'Diploma in Computer Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,500/Year', eligibility: '10th Standard Pass with Science & Math + ACPDC Gujarat (Tuition Free for Girls)', exams: 'ACPDC', intake: '120' },
  { collegeId: 433, title: 'Diploma in Biomedical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,500/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },
  { collegeId: 433, title: 'Diploma in Electronics & Communication', division: 'Diploma', duration: '3 Years', fees: '₹1,500/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '120' },
  { collegeId: 433, title: 'Diploma in Instrumentation & Control', division: 'Diploma', duration: '3 Years', fees: '₹1,500/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },

  // 434 Government Polytechnic Dahod
  { collegeId: 434, title: 'Diploma in Civil Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,500/Year', eligibility: '10th Standard Pass with Science & Math + ACPDC Gujarat (Tuition Free for Girls)', exams: 'ACPDC', intake: '120' },
  { collegeId: 434, title: 'Diploma in Mechanical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,500/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '120' },
  { collegeId: 434, title: 'Diploma in Electrical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,500/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '120' },
  { collegeId: 434, title: 'Diploma in Computer Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,500/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },

  // 435 Saroj Mohan Institute of Technology Hooghly
  { collegeId: 435, title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹85,000/Year', eligibility: '10+2 with PCM + WBJEE / JEE Main', exams: 'WBJEE, JEE Main', intake: '120' },
  { collegeId: 435, title: 'B.Tech in Electronics & Communication', division: 'Undergraduate', duration: '4 Years', fees: '₹80,000/Year', eligibility: '10+2 with PCM + WBJEE', exams: 'WBJEE', intake: '60' },
  { collegeId: 435, title: 'B.Tech in Mechanical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹80,000/Year', eligibility: '10+2 with PCM + WBJEE', exams: 'WBJEE', intake: '60' },
  { collegeId: 435, title: 'Diploma in Civil / Mechanical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹40,000/Year', eligibility: '10th Standard Pass + JEXPO', exams: 'JEXPO', intake: '60' },

  // 436 MAKAUT West Bengal
  { collegeId: 436, title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹35,000/Year', eligibility: '10+2 with PCM + WBJEE', exams: 'WBJEE', intake: '60' },
  { collegeId: 436, title: 'B.Tech in Information Technology', division: 'Undergraduate', duration: '4 Years', fees: '₹35,000/Year', eligibility: '10+2 with PCM + WBJEE', exams: 'WBJEE', intake: '60' },
  { collegeId: 436, title: 'Master of Computer Applications (MCA)', division: 'Postgraduate', duration: '2 Years', fees: '₹40,000/Year', eligibility: 'BCA / B.Sc with Math + WB JECA', exams: 'JECA', intake: '60' },
  { collegeId: 436, title: 'MBA in Business Analytics', division: 'Postgraduate', duration: '2 Years', fees: '₹75,000/Year', eligibility: 'Graduation (50%+) + JEMAT / CAT / MAT', exams: 'JEMAT, CAT, MAT', intake: '60' },

  // 437 WBNUJS Kolkata
  { collegeId: 437, title: 'B.A. LL.B. (Hons.)', division: 'Undergraduate', duration: '5 Years', fees: '₹2,75,000/Year', eligibility: '10+2 in any stream (45%+) + CLAT UG', exams: 'CLAT', intake: '132' },
  { collegeId: 437, title: 'B.Sc. LL.B. (Hons.)', division: 'Undergraduate', duration: '5 Years', fees: '₹2,75,000/Year', eligibility: '10+2 with Science (45%+) + CLAT UG', exams: 'CLAT', intake: '50' },
  { collegeId: 437, title: 'Master of Laws (LL.M.)', division: 'Postgraduate', duration: '1 Year', fees: '₹1,65,000 Total', eligibility: 'LL.B. degree (50%+) + CLAT PG', exams: 'CLAT PG', intake: '100' },
  { collegeId: 437, title: 'Ph.D. in Law', division: 'Doctoral', duration: '3 Years', fees: '₹50,000/Year', eligibility: 'Master degree in Law (55%+) + NUJS Entrance / UGC NET', exams: 'NUJS RET, UGC NET', intake: '20' }
];

// Append to CSVs
for (const col of batch83Colleges) {
  const line = `"${col.id}","${col.name.replace(/"/g, '""')}","${col.state}","${col.city}","${col.type}","${col.website}","${col.phone}","${col.rating}","${col.established}","VERIFIED","Batch 83"\n`;
  fs.appendFileSync(collegeCsvFile, line, 'utf8');

  const imgLine = `"${col.id}","${col.name.replace(/"/g, '""')}","${col.image}","${col.imageStatus}","Batch 83"\n`;
  fs.appendFileSync(imageCsvFile, imgLine, 'utf8');
}

for (const crs of batch83Courses) {
  const crsLine = `"${crs.collegeId}","${crs.title.replace(/"/g, '""')}","${crs.division}","${crs.duration}","${crs.fees}","${crs.eligibility.replace(/"/g, '""')}","${crs.exams}","${crs.intake}","VERIFIED","Batch 83"\n`;
  fs.appendFileSync(courseCsvFile, crsLine, 'utf8');
}

// Update progress
const newIds = batch83Colleges.map(c => c.id);
const uniqueCompleted = Array.from(new Set([...progress.completed_ids, ...newIds]));
progress.completed_ids = uniqueCompleted;
progress.total_verified = uniqueCompleted.length;
progress.current_batch = 83;
progress.last_updated = new Date().toISOString();

fs.writeFileSync(progressFile, JSON.stringify(progress, null, 2), 'utf8');

console.log(`Appended 10 colleges to college-verification.csv`);
console.log(`Appended ${batch83Courses.length} courses to course-verification.csv`);
console.log(`Updated progress.json: total_verified = ${progress.total_verified}, current_batch = ${progress.current_batch}`);
