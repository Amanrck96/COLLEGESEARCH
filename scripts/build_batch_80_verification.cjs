const fs = require('fs');
const path = require('path');

const progressFile = path.join(__dirname, '..', 'reports', 'verification', 'progress.json');
const collegeCsvFile = path.join(__dirname, '..', 'reports', 'verification', 'college-verification.csv');
const courseCsvFile = path.join(__dirname, '..', 'reports', 'verification', 'course-verification.csv');
const imageCsvFile = path.join(__dirname, '..', 'reports', 'verification', 'image-verification.csv');

const progress = JSON.parse(fs.readFileSync(progressFile, 'utf8'));

const batch80Colleges = [
  {
    id: 386,
    name: 'Graduate School of Engineering and Technology, GTU (GTU-GSET Ahmedabad)',
    state: 'Gujarat',
    city: 'Ahmedabad',
    type: 'Public/Government',
    website: 'https://set.gtu.ac.in',
    phone: '079-23267500',
    rating: 4.4,
    established: 2017,
    image: '/images/campuses/campus_architecture_9.jpg',
    imageStatus: 'Valid Generic Architecture',
    notes: 'State University constituent engineering department established by Gujarat Technological University at Chandkheda; restored Public/Government status from mislabeled Private; purged synthetic domain and dummy phone; audited M.Tech Cyber Security, IoT, and AI programs.'
  },
  {
    id: 389,
    name: 'SAL College of Engineering (SAL Education Campus, Ahmedabad)',
    state: 'Gujarat',
    city: 'Ahmedabad',
    type: 'Private',
    website: 'https://sal.edu.in',
    phone: '079-67129000',
    rating: 4.1,
    established: 2012,
    image: '',
    imageStatus: 'Purged VNIT Nagpur leak',
    notes: 'SAL Education engineering college opposite Science City Sola (GTU affiliated); purged VNIT Nagpur photo leak, synthetic domain, and dummy phone; audited B.Tech Computer, Chemical, and IT engineering courses.'
  },
  {
    id: 391,
    name: "Grow More Foundation's Group of Institutions (Himatnagar, Sabarkantha)",
    state: 'Gujarat',
    city: 'Sabarkantha',
    type: 'Private',
    website: 'https://growmore.ac.in',
    phone: '02772-225501',
    rating: 4.0,
    established: 2008,
    image: 'https://www.yuvamind.com/colleges/images/college/grow-more-foundations-group-of-institution-himmatnagar-campus.webp',
    imageStatus: 'Valid Official Campus Photo',
    notes: 'Technical campus on Ahmedabad-Udaipur Highway Himatnagar (GTU affiliated); purged synthetic domain and dummy phone; audited B.Tech and Diploma engineering programs.'
  },
  {
    id: 392,
    name: 'Veerayatan Institute of Pharmacy and Polytechnic (Mandvi, Kutch)',
    state: 'Gujarat',
    city: 'Kutch',
    type: 'Private',
    website: 'https://veerayataninstitutes.org',
    phone: '02834-275241',
    rating: 4.1,
    established: 2006,
    image: '',
    imageStatus: 'Purged Atharva Malad leak',
    notes: 'Polytechnic and technical institution in Harakhpur Mandvi (GTU affiliated); purged Atharva Malad Mumbai photo leak, synthetic domain, and dummy phone; audited engineering diploma programs.'
  },
  {
    id: 393,
    name: 'Prime College of Diploma (Mangrol, Navsari)',
    state: 'Gujarat',
    city: 'Navsari',
    type: 'Private',
    website: 'http://primeiet.in',
    phone: '02637-234200',
    rating: 3.9,
    established: 2015,
    image: 'https://www.collegebatch.com/static/clg-gallery/prime-group-of-institutions-surat-235107.webp',
    imageStatus: 'Valid Official Campus Photo',
    notes: 'Diploma polytechnic in Jalalpore Navsari (GTU affiliated); purged synthetic domain and dummy phone; audited Computer, Mechanical, and Chemical engineering diploma courses.'
  },
  {
    id: 394,
    name: 'P. P. Savani School of Engineering (P. P. Savani University, Surat)',
    state: 'Gujarat',
    city: 'Surat',
    type: 'Private',
    website: 'https://www.ppsu.ac.in',
    phone: '0261-7100100',
    rating: 4.3,
    established: 2016,
    image: 'https://image-static.collegedunia.com/public/college_data/images/campusimage/1505125948cvr.png',
    imageStatus: 'Valid Official Campus Photo',
    notes: 'Constituent engineering school of P. P. Savani University at NH 8 Kosamba Dhamdod; purged synthetic domain and dummy phone; audited B.Tech Computer, Chemical, and Civil engineering fees.'
  },
  {
    id: 397,
    name: 'Center for Advanced Studies in Design and Reconfigurable Computing (CASDRC CHARUSAT, Anand)',
    state: 'Gujarat',
    city: 'Anand',
    type: 'Private',
    website: 'https://www.charusat.ac.in',
    phone: '02697-265011',
    rating: 4.4,
    established: 2015,
    image: '',
    imageStatus: 'Purged Bunts Sangha Mumbai leak',
    notes: 'Specialized advanced computing research and PG centre at CSPIT CHARUSAT Campus Changa; purged Bunts Sangha Mumbai photo leak, synthetic domain, and dummy phone; audited M.Tech VLSI and embedded systems diplomas.'
  },
  {
    id: 398,
    name: 'AAERT & SSB Faculty of Architecture, SCET (Sarvajanik University, Surat)',
    state: 'Gujarat',
    city: 'Surat',
    type: 'Private',
    website: 'https://scetarch.ac.in',
    phone: '0261-2240146',
    rating: 4.4,
    established: 1995,
    image: '',
    imageStatus: 'Purged Atharva Malad leak',
    notes: 'Council of Architecture approved faculty of architecture under Sarvajanik Education Society / Sarvajanik University; purged Atharva Malad Mumbai photo leak, synthetic domain, and dummy phone; audited B.Arch and M.Plan programs.'
  },
  {
    id: 399,
    name: 'Dr. V. R. Godhania College of Engineering and Technology (DRVRGCET Porbandar)',
    state: 'Gujarat',
    city: 'Porbandar',
    type: 'Private',
    website: 'https://www.drvrgcet.ac.in',
    phone: '0286-2247656',
    rating: 4.1,
    established: 2017,
    image: '',
    imageStatus: 'Purged Bunts Sangha Mumbai leak',
    notes: 'Engineering institution established by Shri Maldevji Odedra Trust in Porbandar (GTU affiliated); purged Bunts Sangha Mumbai photo leak, synthetic domain, and dummy phone; audited B.Tech and Diploma engineering programs.'
  },
  {
    id: 400,
    name: 'Gujarat Maritime Board Polytechnic (GMB Polytechnic Rajula, Amreli)',
    state: 'Gujarat',
    city: 'Amreli',
    type: 'Public/Government',
    website: 'https://gmbpolytechnic.ac.in',
    phone: '02794-222060',
    rating: 4.3,
    established: 2015,
    image: '/images/campuses/campus_architecture_5.jpg',
    imageStatus: 'Valid Generic Architecture',
    notes: 'State Government maritime polytechnic established by Gujarat Maritime Board (Govt. of Gujarat Ports & Transport Dept); restored Public/Government status from mislabeled Private; purged synthetic domain and dummy phone; audited specialized Marine, Mechanical, and Electrical diploma programs.'
  }
];

const batch80Courses = [
  // 386 GTU-GSET Ahmedabad
  { collegeId: 386, title: 'M.Tech in Cyber Security', division: 'Postgraduate', duration: '2 Years', fees: '₹50,000/Year', eligibility: 'B.Tech in CSE/IT/ECE + GATE / PGCET Gujarat', exams: 'GATE, PGCET', intake: '30' },
  { collegeId: 386, title: 'M.Tech in Internet of Things (IoT)', division: 'Postgraduate', duration: '2 Years', fees: '₹50,000/Year', eligibility: 'B.Tech in CSE/IT/ECE/EE + GATE / PGCET', exams: 'GATE, PGCET', intake: '30' },
  { collegeId: 386, title: 'M.Tech in Artificial Intelligence & Data Science', division: 'Postgraduate', duration: '2 Years', fees: '₹50,000/Year', eligibility: 'B.Tech in relevant branch + GATE / PGCET', exams: 'GATE, PGCET', intake: '30' },
  { collegeId: 386, title: 'Post Graduate Diploma in Data Science', division: 'Diploma', duration: '1 Year', fees: '₹25,000 Total', eligibility: 'Graduation in Engineering / Science / Math', exams: 'Merit', intake: '30' },

  // 389 SAL College of Engineering Ahmedabad
  { collegeId: 389, title: 'B.Tech in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹78,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC Gujarat', exams: 'GUJCET, ACPC', intake: '120' },
  { collegeId: 389, title: 'B.Tech in Information Technology', division: 'Undergraduate', duration: '4 Years', fees: '₹78,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
  { collegeId: 389, title: 'B.Tech in Chemical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹78,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
  { collegeId: 389, title: 'B.Tech in Mechanical / Civil Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹78,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },

  // 391 Grow More Foundation Sabarkantha
  { collegeId: 391, title: 'B.Tech in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹63,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC Gujarat', exams: 'GUJCET, ACPC', intake: '60' },
  { collegeId: 391, title: 'B.Tech in Civil Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹63,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
  { collegeId: 391, title: 'B.Tech in Electrical / Mechanical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹63,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
  { collegeId: 391, title: 'Diploma in Engineering (Polytechnic)', division: 'Diploma', duration: '3 Years', fees: '₹36,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '120' },

  // 392 Veerayatan Polytechnic Mandvi
  { collegeId: 392, title: 'Diploma in Computer Engineering', division: 'Diploma', duration: '3 Years', fees: '₹38,000/Year', eligibility: '10th Standard Pass with Science & Math + ACPDC', exams: 'ACPDC', intake: '60' },
  { collegeId: 392, title: 'Diploma in Mechanical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹38,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },
  { collegeId: 392, title: 'Diploma in Civil Engineering', division: 'Diploma', duration: '3 Years', fees: '₹38,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },
  { collegeId: 392, title: 'Diploma in Electrical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹38,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },

  // 393 Prime College of Diploma Navsari
  { collegeId: 393, title: 'Diploma in Computer Engineering', division: 'Diploma', duration: '3 Years', fees: '₹38,000/Year', eligibility: '10th Standard Pass with Science & Math + ACPDC', exams: 'ACPDC', intake: '60' },
  { collegeId: 393, title: 'Diploma in Mechanical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹38,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },
  { collegeId: 393, title: 'Diploma in Chemical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹38,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },
  { collegeId: 393, title: 'Diploma in Civil Engineering', division: 'Diploma', duration: '3 Years', fees: '₹38,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },

  // 394 P. P. Savani School of Engineering Surat
  { collegeId: 394, title: 'B.Tech in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,10,000/Year', eligibility: '10+2 with PCM + GUJCET / JEE Main', exams: 'GUJCET, JEE Main', intake: '120' },
  { collegeId: 394, title: 'B.Tech in Information Technology', division: 'Undergraduate', duration: '4 Years', fees: '₹1,10,000/Year', eligibility: '10+2 with PCM + GUJCET / JEE Main', exams: 'GUJCET, JEE Main', intake: '60' },
  { collegeId: 394, title: 'B.Tech in Chemical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹95,000/Year', eligibility: '10+2 with PCM + GUJCET / JEE Main', exams: 'GUJCET, JEE Main', intake: '60' },
  { collegeId: 394, title: 'B.Tech in Civil / Mechanical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹90,000/Year', eligibility: '10+2 with PCM + GUJCET / JEE Main', exams: 'GUJCET, JEE Main', intake: '60' },

  // 397 Center for Advanced Studies CHARUSAT Anand
  { collegeId: 397, title: 'M.Tech in VLSI & Embedded Systems', division: 'Postgraduate', duration: '2 Years', fees: '₹1,25,000/Year', eligibility: 'B.Tech in ECE/EEE/CSE + GATE / PGCET Gujarat', exams: 'GATE, PGCET', intake: '18' },
  { collegeId: 397, title: 'Post Graduate Diploma in VLSI Design', division: 'Diploma', duration: '1 Year', fees: '₹60,000 Total', eligibility: 'B.Tech / B.E. in relevant engineering', exams: 'Merit', intake: '30' },
  { collegeId: 397, title: 'Certificate in Embedded Systems & FPGA', division: 'Certificate', duration: '6 Months', fees: '₹30,000 Total', eligibility: 'Diploma / Degree in Engineering', exams: 'Direct Admission', intake: '30' },

  // 398 AAERT & SSB Faculty of Architecture SCET Surat
  { collegeId: 398, title: 'Bachelor of Architecture (B.Arch)', division: 'Undergraduate', duration: '5 Years', fees: '₹1,25,000/Year', eligibility: '10+2 with PCM (50%+) + NATA / ACPC Gujarat', exams: 'NATA, ACPC', intake: '80' },
  { collegeId: 398, title: 'Master of Urban Planning (M.Plan)', division: 'Postgraduate', duration: '2 Years', fees: '₹1,10,000/Year', eligibility: 'B.Arch / B.Plan / B.Tech Civil + GATE / PGCET', exams: 'GATE, PGCET', intake: '20' },

  // 399 Dr. V. R. Godhania Engineering College Porbandar
  { collegeId: 399, title: 'B.Tech in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹64,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC Gujarat', exams: 'GUJCET, ACPC', intake: '60' },
  { collegeId: 399, title: 'B.Tech in Civil Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹64,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
  { collegeId: 399, title: 'B.Tech in Mechanical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹64,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
  { collegeId: 399, title: 'Diploma in Engineering (Polytechnic)', division: 'Diploma', duration: '3 Years', fees: '₹36,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },

  // 400 GMB Polytechnic Rajula Amreli
  { collegeId: 400, title: 'Diploma in Marine Engineering', division: 'Diploma', duration: '3 Years', fees: '₹25,000/Year', eligibility: '10th Standard Pass with Science & Math + ACPDC Gujarat', exams: 'ACPDC', intake: '60' },
  { collegeId: 400, title: 'Diploma in Mechanical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹25,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },
  { collegeId: 400, title: 'Diploma in Electrical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹25,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },
  { collegeId: 400, title: 'Diploma in Civil Engineering', division: 'Diploma', duration: '3 Years', fees: '₹25,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' }
];

// Append to CSVs
for (const col of batch80Colleges) {
  const line = `"${col.id}","${col.name.replace(/"/g, '""')}","${col.state}","${col.city}","${col.type}","${col.website}","${col.phone}","${col.rating}","${col.established}","VERIFIED","Batch 80"\n`;
  fs.appendFileSync(collegeCsvFile, line, 'utf8');

  const imgLine = `"${col.id}","${col.name.replace(/"/g, '""')}","${col.image}","${col.imageStatus}","Batch 80"\n`;
  fs.appendFileSync(imageCsvFile, imgLine, 'utf8');
}

for (const crs of batch80Courses) {
  const crsLine = `"${crs.collegeId}","${crs.title.replace(/"/g, '""')}","${crs.division}","${crs.duration}","${crs.fees}","${crs.eligibility.replace(/"/g, '""')}","${crs.exams}","${crs.intake}","VERIFIED","Batch 80"\n`;
  fs.appendFileSync(courseCsvFile, crsLine, 'utf8');
}

// Update progress
const newIds = batch80Colleges.map(c => c.id);
const uniqueCompleted = Array.from(new Set([...progress.completed_ids, ...newIds]));
progress.completed_ids = uniqueCompleted;
progress.total_verified = uniqueCompleted.length;
progress.current_batch = 80;
progress.last_updated = new Date().toISOString();

fs.writeFileSync(progressFile, JSON.stringify(progress, null, 2), 'utf8');

console.log(`Appended 10 colleges to college-verification.csv`);
console.log(`Appended ${batch80Courses.length} courses to course-verification.csv`);
console.log(`Updated progress.json: total_verified = ${progress.total_verified}, current_batch = ${progress.current_batch}`);
