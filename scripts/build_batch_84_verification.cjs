const fs = require('fs');
const path = require('path');

const progressFile = path.join(__dirname, '..', 'reports', 'verification', 'progress.json');
const collegeCsvFile = path.join(__dirname, '..', 'reports', 'verification', 'college-verification.csv');
const courseCsvFile = path.join(__dirname, '..', 'reports', 'verification', 'course-verification.csv');
const imageCsvFile = path.join(__dirname, '..', 'reports', 'verification', 'image-verification.csv');

const progress = JSON.parse(fs.readFileSync(progressFile, 'utf8'));

const batch84Colleges = [
  {
    id: 438,
    name: 'Techno India University (Salt Lake, Sector V, Kolkata)',
    state: 'West Bengal',
    city: 'Kolkata',
    type: 'Private',
    website: 'https://www.technoindiauniversity.ac.in',
    phone: '033-23576163',
    rating: 4.4,
    established: 2012,
    image: '',
    imageStatus: 'Purged Bangalore University leak',
    notes: 'First private university in West Bengal established by Techno India Group in Salt Lake Sector V; purged Bangalore University photo leak, synthetic domain, and dummy phone; audited B.Tech CSE, AI&DS, and BCA curricula.'
  },
  {
    id: 439,
    name: 'Central Institute of Petrochemicals Engineering and Technology (CIPET: IPT Haldia)',
    state: 'West Bengal',
    city: 'Purba Medinipur',
    type: 'Public/Government',
    website: 'https://www.cipet.gov.in',
    phone: '03224-255424',
    rating: 4.4,
    established: 2002,
    image: '',
    imageStatus: 'Purged Primus Bangalore leak',
    notes: 'Premier Central Government petrochemicals institute under Dept of Chemicals & Petrochemicals, Ministry of Chemicals & Fertilizers; restored Public/Government status from mislabeled Private; purged Primus Bangalore photo leak and dummy phone; audited B.Tech and M.Tech Plastics Engineering.'
  },
  {
    id: 440,
    name: 'International Management Institute Kolkata (IMI Kolkata, Alipore)',
    state: 'West Bengal',
    city: 'Kolkata',
    type: 'Private',
    website: 'https://www.imi-k.edu.in',
    phone: '033-66529618',
    rating: 4.6,
    established: 2010,
    image: '',
    imageStatus: 'Purged BMS Bangalore leak',
    notes: 'Premier RP-Sanjiv Goenka Group B-school in Alipore Kolkata (AMBA/NBA accredited, NIRF Top 60); purged BMS Bangalore photo leak, truncated domain, and dummy phone; audited PGDM and FPM doctoral programs.'
  },
  {
    id: 441,
    name: 'Calcutta Business School (CBS Kolkata, South 24 Parganas)',
    state: 'West Bengal',
    city: 'South 24 Parganas',
    type: 'Private',
    website: 'https://calcuttabusinessschool.org',
    phone: '033-24205200',
    rating: 4.2,
    established: 2008,
    image: '/images/campuses/campus_architecture_1.jpg',
    imageStatus: 'Valid Generic Architecture',
    notes: 'Autonomous management institute founded by Shikshayatan Foundation in Bishnupur; purged synthetic domain and dummy phone; audited PGDM and Business Analytics programs.'
  },
  {
    id: 442,
    name: 'Guru Nanak Institute of Technology (GNIT Kolkata, Sodepur)',
    state: 'West Bengal',
    city: 'Kolkata',
    type: 'Private',
    website: 'https://gnit.ac.in',
    phone: '033-25233900',
    rating: 4.3,
    established: 2003,
    image: 'https://assets.kollegeapply.com/images/1751563790634-1652252517phpfEBcxg.jpeg',
    imageStatus: 'Valid Official Campus Photo',
    notes: 'JIS Group autonomous engineering college in Panihati Sodepur (MAKAUT affiliated); fixed raw Google search URL to official gnit.ac.in; purged Bangalore dummy phone; audited B.Tech CSE, IT, and MCA programs.'
  },
  {
    id: 443,
    name: 'Indian Institute of Information Technology, Kalyani (IIIT Kalyani)',
    state: 'West Bengal',
    city: 'Nadia',
    type: 'Public/Government',
    website: 'https://iiitkalyani.ac.in',
    phone: '033-25822240',
    rating: 4.5,
    established: 2014,
    image: '',
    imageStatus: 'Purged Bangalore University leak',
    notes: 'Institute of National Importance established by Ministry of Education, Govt. of India and Govt. of West Bengal; restored Public/Government status from mislabeled Private; purged Bangalore University photo leak and malformed website URL; audited B.Tech CSE and ECE JoSAA curricula.'
  },
  {
    id: 444,
    name: 'Maulana Abul Kalam Azad University of Technology Main Campus (MAKAUT Haringhata)',
    state: 'West Bengal',
    city: 'Nadia',
    type: 'Public/Government',
    website: 'https://makautwb.ac.in',
    phone: '033-23210731',
    rating: 4.5,
    established: 2001,
    image: '',
    imageStatus: 'Purged BMS Bangalore leak',
    notes: 'Main campus of West Bengal State Public University at Haringhata; restored Public/Government status from mislabeled Private; purged BMS Bangalore photo leak, raw Google search URL, and dummy phone; audited B.Tech AI, Data Science, and VLSI programs.'
  },
  {
    id: 445,
    name: 'Narula Institute of Technology (NiT Agarpara, Kolkata)',
    state: 'West Bengal',
    city: 'Kolkata',
    type: 'Private',
    website: 'https://www.nit.ac.in',
    phone: '033-25638888',
    rating: 4.4,
    established: 2001,
    image: '/images/campuses/campus_architecture_5.jpg',
    imageStatus: 'Valid Generic Architecture',
    notes: 'JIS Group NAAC A Grade autonomous engineering college in Agarpara Kolkata; fixed raw Google search URL to official nit.ac.in; purged Bangalore dummy phone; audited B.Tech CSE, ECE, IT, and MCA programs.'
  },
  {
    id: 446,
    name: 'JIS College of Engineering (JISCE Kalyani, Nadia)',
    state: 'West Bengal',
    city: 'Nadia',
    type: 'Private',
    website: 'https://www.jiscollege.ac.in',
    phone: '033-25822865',
    rating: 4.4,
    established: 2000,
    image: 'https://www.jiscollege.ac.in/assets/images/slider/2.jpg',
    imageStatus: 'Valid Official Campus Photo',
    notes: 'JIS Group flagship autonomous engineering college in Kalyani Nadia; corrected city misallocation from Kolkata to Nadia; cleaned phone formatting; audited B.Tech CSE, IT, Biomedical, and MBA curricula.'
  },
  {
    id: 447,
    name: 'Haldia Institute of Technology (HIT Haldia, Purba Medinipur)',
    state: 'West Bengal',
    city: 'Purba Medinipur',
    type: 'Private',
    website: 'https://hithaldia.ac.in',
    phone: '03224-252900',
    rating: 4.5,
    established: 1996,
    image: '/images/campuses/campus_architecture_7.jpg',
    imageStatus: 'Valid Generic Architecture',
    notes: 'Pioneer private engineering institute in West Bengal (ICARE, NAAC A Grade); fixed raw Google search URL to official hithaldia.ac.in; purged Bangalore dummy phone; audited B.Tech CSE, Chemical, and ECE programs.'
  }
];

const batch84Courses = [
  // 438 Techno India University Kolkata
  { collegeId: 438, title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,25,000/Year', eligibility: '10+2 with PCM + WBJEE / JEE Main', exams: 'WBJEE, JEE Main', intake: '180' },
  { collegeId: 438, title: 'B.Tech in Artificial Intelligence & Data Science', division: 'Undergraduate', duration: '4 Years', fees: '₹1,25,000/Year', eligibility: '10+2 with PCM + WBJEE / JEE Main', exams: 'WBJEE, JEE Main', intake: '60' },
  { collegeId: 438, title: 'Bachelor of Computer Applications (BCA)', division: 'Undergraduate', duration: '3 Years', fees: '₹80,000/Year', eligibility: '10+2 with Math/CS', exams: 'Merit', intake: '120' },
  { collegeId: 438, title: 'Master of Business Administration (MBA)', division: 'Postgraduate', duration: '2 Years', fees: '₹2,25,000/Year', eligibility: 'Graduation (50%+) + CAT / MAT / JEMAT', exams: 'CAT, MAT, JEMAT', intake: '60' },

  // 439 CIPET Haldia
  { collegeId: 439, title: 'B.Tech in Plastics Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹55,000/Year', eligibility: '10+2 with PCM + WBJEE / JEE Main', exams: 'WBJEE, JEE Main', intake: '60' },
  { collegeId: 439, title: 'B.Tech in Manufacturing Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹55,000/Year', eligibility: '10+2 with PCM + WBJEE', exams: 'WBJEE', intake: '60' },
  { collegeId: 439, title: 'M.Tech in Plastics Engineering', division: 'Postgraduate', duration: '2 Years', fees: '₹60,000/Year', eligibility: 'B.Tech in relevant branch + GATE / PGET', exams: 'GATE, PGET', intake: '18' },
  { collegeId: 439, title: 'Diploma in Plastics Technology (DPT)', division: 'Diploma', duration: '3 Years', fees: '₹25,000/Year', eligibility: '10th Standard with Science & Math + CIPET JEE', exams: 'CIPET JEE', intake: '60' },

  // 440 IMI Kolkata
  { collegeId: 440, title: 'Post Graduate Diploma in Management (PGDM)', division: 'Postgraduate', duration: '2 Years', fees: '₹5,80,000/Year', eligibility: 'Graduation (50%+) + CAT / XAT / GMAT', exams: 'CAT, XAT, GMAT', intake: '180' },
  { collegeId: 440, title: 'Fellow Programme in Management (FPM / Ph.D.)', division: 'Doctoral', duration: '4 Years', fees: 'Fully Funded (Stipend ₹35,000/Month)', eligibility: 'Master degree (60%+) + CAT / GMAT / NET', exams: 'CAT, GMAT, NET', intake: '10' },

  // 441 Calcutta Business School
  { collegeId: 441, title: 'Post Graduate Diploma in Management (PGDM)', division: 'Postgraduate', duration: '2 Years', fees: '₹3,40,000/Year', eligibility: 'Graduation (50%+) + CAT / MAT / XAT / CMAT', exams: 'CAT, MAT, XAT, CMAT', intake: '120' },
  { collegeId: 441, title: 'PGDM in Business Analytics', division: 'Postgraduate', duration: '2 Years', fees: '₹3,40,000/Year', eligibility: 'Graduation with Math/Stats + Entrance Exam', exams: 'CAT, MAT, CMAT', intake: '60' },

  // 442 Guru Nanak Institute of Technology Kolkata
  { collegeId: 442, title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,12,000/Year', eligibility: '10+2 with PCM + WBJEE / JEE Main', exams: 'WBJEE, JEE Main', intake: '180' },
  { collegeId: 442, title: 'B.Tech in Information Technology', division: 'Undergraduate', duration: '4 Years', fees: '₹1,12,000/Year', eligibility: '10+2 with PCM + WBJEE', exams: 'WBJEE', intake: '60' },
  { collegeId: 442, title: 'B.Tech in Electronics & Communication', division: 'Undergraduate', duration: '4 Years', fees: '₹1,12,000/Year', eligibility: '10+2 with PCM + WBJEE', exams: 'WBJEE', intake: '120' },
  { collegeId: 442, title: 'Master of Computer Applications (MCA)', division: 'Postgraduate', duration: '2 Years', fees: '₹1,00,000/Year', eligibility: 'BCA / B.Sc with Math + WB JECA', exams: 'JECA', intake: '60' },

  // 443 IIIT Kalyani
  { collegeId: 443, title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,80,000/Year', eligibility: '10+2 with PCM + JEE Main + JoSAA / CSAB', exams: 'JEE Main, JoSAA', intake: '120' },
  { collegeId: 443, title: 'B.Tech in Electronics and Communication Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,80,000/Year', eligibility: '10+2 with PCM + JEE Main + JoSAA', exams: 'JEE Main, JoSAA', intake: '60' },
  { collegeId: 443, title: 'Ph.D. in Computer Science / Engineering', division: 'Doctoral', duration: '3 Years', fees: '₹40,000/Year', eligibility: 'M.Tech / ME in relevant discipline + GATE / NET', exams: 'GATE, UGC NET', intake: '15' },

  // 444 MAKAUT Main Campus Haringhata
  { collegeId: 444, title: 'B.Tech in Computer Science (Artificial Intelligence)', division: 'Undergraduate', duration: '4 Years', fees: '₹35,000/Year', eligibility: '10+2 with PCM + WBJEE', exams: 'WBJEE', intake: '60' },
  { collegeId: 444, title: 'B.Tech in Information Technology', division: 'Undergraduate', duration: '4 Years', fees: '₹35,000/Year', eligibility: '10+2 with PCM + WBJEE', exams: 'WBJEE', intake: '60' },
  { collegeId: 444, title: 'B.Sc. in Data Science', division: 'Undergraduate', duration: '3 Years', fees: '₹30,000/Year', eligibility: '10+2 with Math/Stats + MAKAUT CET', exams: 'CET', intake: '60' },
  { collegeId: 444, title: 'M.Tech in Microelectronics & VLSI Design', division: 'Postgraduate', duration: '2 Years', fees: '₹40,000/Year', eligibility: 'B.Tech in ECE/EE + GATE / PGET', exams: 'GATE, PGET', intake: '18' },

  // 445 Narula Institute of Technology Kolkata
  { collegeId: 445, title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,15,000/Year', eligibility: '10+2 with PCM + WBJEE / JEE Main', exams: 'WBJEE, JEE Main', intake: '180' },
  { collegeId: 445, title: 'B.Tech in Electronics and Communication Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,15,000/Year', eligibility: '10+2 with PCM + WBJEE', exams: 'WBJEE', intake: '120' },
  { collegeId: 445, title: 'B.Tech in Information Technology', division: 'Undergraduate', duration: '4 Years', fees: '₹1,15,000/Year', eligibility: '10+2 with PCM + WBJEE', exams: 'WBJEE', intake: '60' },
  { collegeId: 445, title: 'Master of Computer Applications (MCA)', division: 'Postgraduate', duration: '2 Years', fees: '₹1,05,000/Year', eligibility: 'BCA / B.Sc with Math + WB JECA', exams: 'JECA', intake: '60' },

  // 446 JIS College of Engineering Kalyani
  { collegeId: 446, title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,15,000/Year', eligibility: '10+2 with PCM + WBJEE / JEE Main', exams: 'WBJEE, JEE Main', intake: '180' },
  { collegeId: 446, title: 'B.Tech in Information Technology', division: 'Undergraduate', duration: '4 Years', fees: '₹1,15,000/Year', eligibility: '10+2 with PCM + WBJEE', exams: 'WBJEE', intake: '120' },
  { collegeId: 446, title: 'B.Tech in Biomedical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,05,000/Year', eligibility: '10+2 with PCM/PCB + WBJEE', exams: 'WBJEE', intake: '60' },
  { collegeId: 446, title: 'Master of Business Administration (MBA)', division: 'Postgraduate', duration: '2 Years', fees: '₹1,25,000/Year', eligibility: 'Graduation (50%+) + MAT / JEMAT', exams: 'MAT, JEMAT', intake: '60' },

  // 447 Haldia Institute of Technology
  { collegeId: 447, title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹95,000/Year', eligibility: '10+2 with PCM + WBJEE / JEE Main', exams: 'WBJEE, JEE Main', intake: '180' },
  { collegeId: 447, title: 'B.Tech in Chemical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹90,000/Year', eligibility: '10+2 with PCM + WBJEE', exams: 'WBJEE', intake: '60' },
  { collegeId: 447, title: 'B.Tech in Electronics & Communication', division: 'Undergraduate', duration: '4 Years', fees: '₹90,000/Year', eligibility: '10+2 with PCM + WBJEE', exams: 'WBJEE', intake: '120' },
  { collegeId: 447, title: 'Master of Computer Applications (MCA)', division: 'Postgraduate', duration: '2 Years', fees: '₹85,000/Year', eligibility: 'BCA / B.Sc with Math + WB JECA', exams: 'JECA', intake: '60' }
];

// Append to CSVs
for (const col of batch84Colleges) {
  const line = `"${col.id}","${col.name.replace(/"/g, '""')}","${col.state}","${col.city}","${col.type}","${col.website}","${col.phone}","${col.rating}","${col.established}","VERIFIED","Batch 84"\n`;
  fs.appendFileSync(collegeCsvFile, line, 'utf8');

  const imgLine = `"${col.id}","${col.name.replace(/"/g, '""')}","${col.image}","${col.imageStatus}","Batch 84"\n`;
  fs.appendFileSync(imageCsvFile, imgLine, 'utf8');
}

for (const crs of batch84Courses) {
  const crsLine = `"${crs.collegeId}","${crs.title.replace(/"/g, '""')}","${crs.division}","${crs.duration}","${crs.fees}","${crs.eligibility.replace(/"/g, '""')}","${crs.exams}","${crs.intake}","VERIFIED","Batch 84"\n`;
  fs.appendFileSync(courseCsvFile, crsLine, 'utf8');
}

// Update progress
const newIds = batch84Colleges.map(c => c.id);
const uniqueCompleted = Array.from(new Set([...progress.completed_ids, ...newIds]));
progress.completed_ids = uniqueCompleted;
progress.total_verified = uniqueCompleted.length;
progress.current_batch = 84;
progress.last_updated = new Date().toISOString();

fs.writeFileSync(progressFile, JSON.stringify(progress, null, 2), 'utf8');

console.log(`Appended 10 colleges to college-verification.csv`);
console.log(`Appended ${batch84Courses.length} courses to course-verification.csv`);
console.log(`Updated progress.json: total_verified = ${progress.total_verified}, current_batch = ${progress.current_batch}`);
