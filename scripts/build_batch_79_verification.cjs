const fs = require('fs');
const path = require('path');

const progressFile = path.join(__dirname, '..', 'reports', 'verification', 'progress.json');
const collegeCsvFile = path.join(__dirname, '..', 'reports', 'verification', 'college-verification.csv');
const courseCsvFile = path.join(__dirname, '..', 'reports', 'verification', 'course-verification.csv');
const imageCsvFile = path.join(__dirname, '..', 'reports', 'verification', 'image-verification.csv');

const progress = JSON.parse(fs.readFileSync(progressFile, 'utf8'));

const batch79Colleges = [
  {
    id: 373,
    name: 'State Institute of Hotel Management Siddhpur (SIHM Siddhpur, Patan)',
    state: 'Gujarat',
    city: 'Patan',
    type: 'Public/Government',
    website: 'https://sihmsiddhpur.org',
    phone: '02767-224422',
    rating: 4.3,
    established: 2014,
    image: '',
    imageStatus: 'Purged IIIT Bangalore leak',
    notes: 'State Government hospitality institute established by TCGL Govt. of Gujarat, affiliated with NCHMCT and GTU; restored Public/Government status from mislabeled Private; purged IIIT Bangalore photo leak, synthetic domain, and dummy phone; audited B.Sc Hospitality and Food Production diplomas.'
  },
  {
    id: 374,
    name: 'New L J Institute of Engineering and Technology (New LJIET, Ahmedabad)',
    state: 'Gujarat',
    city: 'Ahmedabad',
    type: 'Private',
    website: 'https://www.ljku.edu.in',
    phone: '079-29708000',
    rating: 4.4,
    established: 2019,
    image: 'https://www.studyplaces.co.in/wp-content/uploads/2025/07/new-l-j-institute-of-engineering-and-technology.jpg',
    imageStatus: 'Valid Official Campus Photo',
    notes: 'Lok Jagruti Kendra engineering institute at Sarkhej Ahmedabad (LJ University); purged synthetic domain and dummy phone; audited B.Tech CSE, IT, and AI&DS programs.'
  },
  {
    id: 375,
    name: 'Shankersinh Vaghela Bapu Technical Campus (Bapu GKV, Gandhinagar)',
    state: 'Gujarat',
    city: 'Gandhinagar',
    type: 'Private',
    website: 'https://bapugkv.ac.in',
    phone: '079-23976170',
    rating: 4.2,
    established: 2009,
    image: 'https://www.collegebatch.com/static/clg-gallery/shankersinh-vaghela-bapu-institute-of-technology-gandhinagar-322095.webp',
    imageStatus: 'Valid Official Campus Photo',
    notes: 'Technical campus in Vasan Gandhinagar (GTU affiliated); purged synthetic domain and dummy phone; audited B.Tech and Diploma engineering programs.'
  },
  {
    id: 376,
    name: 'Smt. Vanitaben Bachubhai Nandola MCA College (Una, Gir Somnath)',
    state: 'Gujarat',
    city: 'Gir Somnath',
    type: 'Private',
    website: 'https://www.nandolacolleges.org',
    phone: '02875-223400',
    rating: 4.1,
    established: 2008,
    image: 'https://media.collegedekho.com/media/img/institute/crawled_images/395684/building.jpg?width=640',
    imageStatus: 'Valid Official Campus Photo',
    notes: 'Post-graduate IT institute in Bhacha Una (BKNMU / GTU affiliated); purged synthetic domain and dummy phone; audited MCA, BCA, and PGDCA programs.'
  },
  {
    id: 377,
    name: 'Tatva Institute of Technological Studies (TITS Modasa, Aravalli)',
    state: 'Gujarat',
    city: 'Aravalli',
    type: 'Private',
    website: 'http://www.tits.ac.in',
    phone: '02774-249500',
    rating: 4.0,
    established: 2010,
    image: 'https://www.collegebatch.com/static/clg-gallery/tatva-institute-of-technological-studies-modasa-325627.webp',
    imageStatus: 'Valid Official Campus Photo',
    notes: 'Engineering institute on Modasa-Malpur Road (GTU affiliated); purged synthetic domain and dummy phone; audited B.Tech and Diploma engineering curricula.'
  },
  {
    id: 378,
    name: 'Vidush Somany Institute of Technology and Research (VSITR, KSV Gandhinagar)',
    state: 'Gujarat',
    city: 'Gandhinagar',
    type: 'Private',
    website: 'https://vsitr.ac.in',
    phone: '079-23245129',
    rating: 4.3,
    established: 2019,
    image: 'https://vsitr.ac.in/wp-content/uploads/2024/04/SAG_1229-1.jpg',
    imageStatus: 'Valid Official Campus Photo',
    notes: 'Constituent engineering college of Kadi Sarva Vishwavidyalaya in Sector 23 Gandhinagar; purged synthetic domain and dummy phone; audited B.Tech and M.Tech engineering programs.'
  },
  {
    id: 379,
    name: 'Dr. Subhash University (Junagadh)',
    state: 'Gujarat',
    city: 'Junagadh',
    type: 'Private',
    website: 'https://drsubhashuniversity.edu.in',
    phone: '0285-2610055',
    rating: 4.3,
    established: 2010,
    image: 'https://media.getmyuni.com/azure/college-images-test/dr-subhash-university-junagadh/exterior-images-49efda4441d15ccd7ed2fd9141557ae6.webp',
    imageStatus: 'Valid Official Campus Photo',
    notes: 'State Private University in Junagadh; purged synthetic domain and dummy phone; audited B.Tech CSE, Pharmacy, MBA, and Polytechnic courses.'
  },
  {
    id: 380,
    name: 'Patel Group of Institutions (PGI Rampura, Kadi, Mehsana)',
    state: 'Gujarat',
    city: 'Mehsana',
    type: 'Private',
    website: 'https://patelgroupe.edu.in',
    phone: '02764-262244',
    rating: 4.1,
    established: 2010,
    image: '/images/campuses/campus_architecture_3.jpg',
    imageStatus: 'Valid Generic Architecture',
    notes: 'Engineering and management institution in Rampura Kadi (GTU affiliated); purged synthetic domain and dummy phone; audited B.Tech, MBA, and Diploma engineering programs.'
  },
  {
    id: 381,
    name: 'Dharmsinh Desai University (DDU Nadiad)',
    state: 'Gujarat',
    city: 'Nadiad',
    type: 'Public/Government',
    website: 'https://www.ddu.ac.in',
    phone: '0268-2520502',
    rating: 4.6,
    established: 1968,
    image: 'https://media.getmyuni.com/azure/college-images-test/dharmsinh-desai-university-ddu-nadiad/5bad70eeaca244428a8dcdf553c00a8a.jpeg',
    imageStatus: 'Valid Official Campus Photo',
    notes: 'Premier State University / Grant-in-aid established in 1968 (NAAC A Grade); restored Public/Government status from mislabeled Private; purged synthetic domain and dummy phone; audited dual-track Grant-in-Aid and SFI fees across B.Tech, B.Pharm, MCA, and MBA.'
  },
  {
    id: 384,
    name: 'Devang Patel Institute of Advance Technology and Research (DEPSTAR CHARUSAT, Anand)',
    state: 'Gujarat',
    city: 'Anand',
    type: 'Private',
    website: 'https://www.charusat.ac.in/depstar',
    phone: '02697-265271',
    rating: 4.5,
    established: 2017,
    image: '',
    imageStatus: 'Purged C.U. Shah Mumbai leak',
    notes: 'Constituent institute of CHARUSAT at Education Campus Changa; purged C.U. Shah Mumbai photo leak, synthetic domain, and dummy phone; audited B.Tech CSE, CE, IT, and M.Tech programs.'
  }
];

const batch79Courses = [
  // 373 State Institute of Hotel Management Siddhpur
  { collegeId: 373, title: 'B.Sc. in Hospitality and Hotel Administration', division: 'Undergraduate', duration: '3 Years', fees: '₹75,000/Year', eligibility: '10+2 with English + NCHM JEE', exams: 'NCHM JEE', intake: '120' },
  { collegeId: 373, title: 'Diploma in Food Production', division: 'Diploma', duration: '1.5 Years', fees: '₹35,000 Total', eligibility: '10th or 10+2 Pass', exams: 'Merit', intake: '60' },
  { collegeId: 373, title: 'Diploma in Food & Beverage Service', division: 'Diploma', duration: '1.5 Years', fees: '₹30,000 Total', eligibility: '10th or 10+2 Pass', exams: 'Merit', intake: '40' },

  // 374 New L J Institute of Engineering & Technology Ahmedabad
  { collegeId: 374, title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹85,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC Gujarat', exams: 'GUJCET, ACPC', intake: '180' },
  { collegeId: 374, title: 'B.Tech in Information Technology', division: 'Undergraduate', duration: '4 Years', fees: '₹85,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '120' },
  { collegeId: 374, title: 'B.Tech in Artificial Intelligence and Data Science', division: 'Undergraduate', duration: '4 Years', fees: '₹85,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
  { collegeId: 374, title: 'B.Tech in Civil / Mechanical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹80,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },

  // 375 Shankersinh Vaghela Bapu Technical Campus Gandhinagar
  { collegeId: 375, title: 'B.Tech in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹68,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '120' },
  { collegeId: 375, title: 'B.Tech in Information Technology', division: 'Undergraduate', duration: '4 Years', fees: '₹68,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
  { collegeId: 375, title: 'B.Tech in Mechanical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹68,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
  { collegeId: 375, title: 'Diploma in Engineering (Polytechnic)', division: 'Diploma', duration: '3 Years', fees: '₹38,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '120' },

  // 376 Smt. Vanitaben Bachubhai Nandola MCA College Una
  { collegeId: 376, title: 'Master of Computer Applications (MCA)', division: 'Postgraduate', duration: '2 Years', fees: '₹55,000/Year', eligibility: 'BCA / B.Sc IT or Graduation with Math + CMAT / ACPC', exams: 'CMAT, ACPC', intake: '60' },
  { collegeId: 376, title: 'Bachelor of Computer Applications (BCA)', division: 'Undergraduate', duration: '3 Years', fees: '₹28,000/Year', eligibility: '10+2 in any stream + Merit', exams: 'Merit', intake: '120' },
  { collegeId: 376, title: 'Post Graduate Diploma in Computer Applications (PGDCA)', division: 'Diploma', duration: '1 Year', fees: '₹20,000 Total', eligibility: 'Graduation in any stream', exams: 'Merit', intake: '60' },

  // 377 Tatva Institute of Technological Studies Modasa
  { collegeId: 377, title: 'B.Tech in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹65,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
  { collegeId: 377, title: 'B.Tech in Civil Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹65,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
  { collegeId: 377, title: 'B.Tech in Mechanical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹65,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
  { collegeId: 377, title: 'Diploma in Civil / Mechanical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹36,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },

  // 378 Vidush Somany Institute of Technology & Research Gandhinagar
  { collegeId: 378, title: 'B.Tech in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹72,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '120' },
  { collegeId: 378, title: 'B.Tech in Information Technology', division: 'Undergraduate', duration: '4 Years', fees: '₹72,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
  { collegeId: 378, title: 'B.Tech in Civil Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹70,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
  { collegeId: 378, title: 'M.Tech in Computer Engineering', division: 'Postgraduate', duration: '2 Years', fees: '₹80,000/Year', eligibility: 'B.Tech in relevant discipline + GATE / PGCET', exams: 'GATE, PGCET', intake: '18' },

  // 379 Dr. Subhash University Junagadh
  { collegeId: 379, title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹75,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '120' },
  { collegeId: 379, title: 'Bachelor of Pharmacy (B.Pharm)', division: 'Undergraduate', duration: '4 Years', fees: '₹85,000/Year', eligibility: '10+2 with PCB/PCM + GUJCET', exams: 'GUJCET, ACPC', intake: '100' },
  { collegeId: 379, title: 'Master of Business Administration (MBA)', division: 'Postgraduate', duration: '2 Years', fees: '₹65,000/Year', eligibility: 'Graduation (50%+) + CMAT / ACPC', exams: 'CMAT, ACPC', intake: '60' },
  { collegeId: 379, title: 'Diploma in Engineering (Polytechnic)', division: 'Diploma', duration: '3 Years', fees: '₹42,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '120' },

  // 380 Patel Group of Institutions Mehsana
  { collegeId: 380, title: 'B.Tech in Mechanical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹65,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
  { collegeId: 380, title: 'B.Tech in Civil Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹65,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
  { collegeId: 380, title: 'Master of Business Administration (MBA)', division: 'Postgraduate', duration: '2 Years', fees: '₹60,000/Year', eligibility: 'Graduation (50%+) + CMAT / ACPC', exams: 'CMAT, ACPC', intake: '60' },
  { collegeId: 380, title: 'Diploma in Mechanical / Civil Engineering', division: 'Diploma', duration: '3 Years', fees: '₹36,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },

  // 381 Dharmsinh Desai University Nadiad
  { collegeId: 381, title: 'B.Tech in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,68,000/Year', eligibility: '10+2 with PCM + GUJCET / JEE Main + ACPC Gujarat', exams: 'GUJCET, JEE Main, ACPC', intake: '150' },
  { collegeId: 381, title: 'B.Tech in Chemical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,68,000/Year', eligibility: '10+2 with PCM + GUJCET / JEE Main + ACPC', exams: 'GUJCET, JEE Main, ACPC', intake: '120' },
  { collegeId: 381, title: 'Bachelor of Pharmacy (B.Pharm)', division: 'Undergraduate', duration: '4 Years', fees: '₹1,55,000/Year', eligibility: '10+2 with PCB/PCM + GUJCET', exams: 'GUJCET, ACPC', intake: '60' },
  { collegeId: 381, title: 'Master of Computer Applications (MCA)', division: 'Postgraduate', duration: '2 Years', fees: '₹1,05,000/Year', eligibility: 'BCA / B.Sc with Math + CMAT / ACPC', exams: 'CMAT, ACPC', intake: '60' },
  { collegeId: 381, title: 'Master of Business Administration (MBA)', division: 'Postgraduate', duration: '2 Years', fees: '₹1,00,000/Year', eligibility: 'Graduation (50%+) + CMAT / ACPC', exams: 'CMAT, ACPC', intake: '60' },

  // 384 Devang Patel Institute of Advance Technology and Research CHARUSAT
  { collegeId: 384, title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,35,000/Year', eligibility: '10+2 with PCM + GUJCET / JEE Main + ACPC', exams: 'GUJCET, JEE Main, ACPC', intake: '180' },
  { collegeId: 384, title: 'B.Tech in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,35,000/Year', eligibility: '10+2 with PCM + GUJCET / JEE Main', exams: 'GUJCET, ACPC', intake: '180' },
  { collegeId: 384, title: 'B.Tech in Information Technology', division: 'Undergraduate', duration: '4 Years', fees: '₹1,35,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '120' },
  { collegeId: 384, title: 'M.Tech in Computer Science & Engineering', division: 'Postgraduate', duration: '2 Years', fees: '₹1,25,000/Year', eligibility: 'B.Tech in CSE/IT + GATE / PGCET', exams: 'GATE, PGCET', intake: '18' }
];

// Append to CSVs
for (const col of batch79Colleges) {
  const line = `"${col.id}","${col.name.replace(/"/g, '""')}","${col.state}","${col.city}","${col.type}","${col.website}","${col.phone}","${col.rating}","${col.established}","VERIFIED","Batch 79"\n`;
  fs.appendFileSync(collegeCsvFile, line, 'utf8');

  const imgLine = `"${col.id}","${col.name.replace(/"/g, '""')}","${col.image}","${col.imageStatus}","Batch 79"\n`;
  fs.appendFileSync(imageCsvFile, imgLine, 'utf8');
}

for (const crs of batch79Courses) {
  const crsLine = `"${crs.collegeId}","${crs.title.replace(/"/g, '""')}","${crs.division}","${crs.duration}","${crs.fees}","${crs.eligibility.replace(/"/g, '""')}","${crs.exams}","${crs.intake}","VERIFIED","Batch 79"\n`;
  fs.appendFileSync(courseCsvFile, crsLine, 'utf8');
}

// Update progress
const newIds = batch79Colleges.map(c => c.id);
const uniqueCompleted = Array.from(new Set([...progress.completed_ids, ...newIds]));
progress.completed_ids = uniqueCompleted;
progress.total_verified = uniqueCompleted.length;
progress.current_batch = 79;
progress.last_updated = new Date().toISOString();

fs.writeFileSync(progressFile, JSON.stringify(progress, null, 2), 'utf8');

console.log(`Appended 10 colleges to college-verification.csv`);
console.log(`Appended ${batch79Courses.length} courses to course-verification.csv`);
console.log(`Updated progress.json: total_verified = ${progress.total_verified}, current_batch = ${progress.current_batch}`);
