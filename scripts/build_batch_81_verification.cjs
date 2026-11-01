const fs = require('fs');
const path = require('path');

const progressFile = path.join(__dirname, '..', 'reports', 'verification', 'progress.json');
const collegeCsvFile = path.join(__dirname, '..', 'reports', 'verification', 'college-verification.csv');
const courseCsvFile = path.join(__dirname, '..', 'reports', 'verification', 'course-verification.csv');
const imageCsvFile = path.join(__dirname, '..', 'reports', 'verification', 'image-verification.csv');

const progress = JSON.parse(fs.readFileSync(progressFile, 'utf8'));

const batch81Colleges = [
  {
    id: 401,
    name: 'Shanti Business School (SBS Ahmedabad)',
    state: 'Gujarat',
    city: 'Ahmedabad',
    type: 'Private',
    website: 'https://shantibschool.edu.in',
    phone: '079-66779999',
    rating: 4.3,
    established: 2010,
    image: 'https://shantibschool.edu.in/bca/assets/img/bca1.png',
    imageStatus: 'Valid Official Campus Photo',
    notes: 'Autonomous AICTE-approved B-school in Shela Bopal Ahmedabad; purged synthetic domain and dummy phone; audited PGDM and BCA programs.'
  },
  {
    id: 402,
    name: 'Vivekanand Institute of Management (VIM Ahmedabad)',
    state: 'Gujarat',
    city: 'Ahmedabad',
    type: 'Private',
    website: 'http://www.vimanand.org',
    phone: '079-26861214',
    rating: 4.0,
    established: 2008,
    image: '/images/campuses/campus_architecture_7.jpg',
    imageStatus: 'Valid Generic Architecture',
    notes: 'Management institute in Memnagar Ahmedabad (GTU affiliated); purged synthetic domain and dummy phone; audited MBA and Integrated MBA programs.'
  },
  {
    id: 403,
    name: 'Shree Parekh Engineering College (SPEC Mahuva, Bhavnagar)',
    state: 'Gujarat',
    city: 'Bhavnagar',
    type: 'Private',
    website: 'http://spec.edu.in',
    phone: '02844-228300',
    rating: 3.9,
    established: 2012,
    image: '',
    imageStatus: 'Purged RIIM Pune leak',
    notes: 'Engineering institute in Mahuva Bhavnagar (GTU affiliated); purged RIIM Pune photo leak, synthetic domain, and dummy phone; audited B.Tech and Diploma engineering curricula.'
  },
  {
    id: 406,
    name: "Shri Satsangi Saketdham 'Ram Ashram' Group of Institutions (Vadasma, Mehsana)",
    state: 'Gujarat',
    city: 'Mehsana',
    type: 'Private',
    website: 'http://www.saketdham.org',
    phone: '02762-282400',
    rating: 4.0,
    established: 2009,
    image: '',
    imageStatus: 'Purged Primus Bangalore leak',
    notes: 'Technical campus in Vadasma Mehsana (GTU affiliated); purged Primus Bangalore photo leak, synthetic domain, and dummy phone; audited B.Tech, Pharmacy, and MBA programs.'
  },
  {
    id: 408,
    name: 'Dr. Jivraj Mehta Institute of Technology (DJMIT Mogar, Anand)',
    state: 'Gujarat',
    city: 'Anand',
    type: 'Private',
    website: 'https://www.djmit.ac.in',
    phone: '02692-280105',
    rating: 4.1,
    established: 2010,
    image: '/images/campuses/campus_architecture_4.jpg',
    imageStatus: 'Valid Generic Architecture',
    notes: 'Engineering institute on NH 8 Mogar Anand (GTU affiliated); purged synthetic domain and dummy phone; audited B.Tech Computer, IT, Mechanical, and Civil engineering courses.'
  },
  {
    id: 409,
    name: 'Bhagwan Arihant Institute of Technology (BAIT BMU Surat)',
    state: 'Gujarat',
    city: 'Surat',
    type: 'Private',
    website: 'https://bmusurat.ac.in',
    phone: '0261-6770100',
    rating: 4.2,
    established: 2019,
    image: '/images/campuses/campus_architecture_5.jpg',
    imageStatus: 'Valid Generic Architecture',
    notes: 'Constituent engineering institute of Bhagwan Mahavir University in Vesu Surat; purged dummy phone; audited B.Tech Computer, Aeronautical, Chemical, and IT engineering courses.'
  },
  {
    id: 410,
    name: 'Shri Labhubhai Trivedi Institute of Engineering and Technology (SLTIET Rajkot)',
    state: 'Gujarat',
    city: 'Rajkot',
    type: 'Private',
    website: 'https://sltiet.edu.in',
    phone: '0281-2924151',
    rating: 4.3,
    established: 2010,
    image: 'https://img.jagranjosh.com/images/2024/March/1432024/Campus view of Shri Labhubhai Trivedi Institute of Engineering and Technology Rajkot_Campus-view.jpg',
    imageStatus: 'Valid Official Campus Photo',
    notes: 'Engineering college in Munjka Rajkot (GTU affiliated); fixed wrong BHU website URL (bhu.ac.in) to official sltiet.edu.in; purged dummy phone; audited B.Tech and Diploma engineering curricula.'
  },
  {
    id: 413,
    name: 'S. S. Agrawal Institute of Management and Technology (SSAITM Navsari)',
    state: 'Gujarat',
    city: 'Navsari',
    type: 'Private',
    website: 'https://ssagrawal.org',
    phone: '02637-232667',
    rating: 4.2,
    established: 2010,
    image: 'https://www.collegebatch.com/static/clg-gallery/ss-agrawal-institute-of-management-technology-navsari-203346.webp',
    imageStatus: 'Valid Official Campus Photo',
    notes: 'Agrawal Vidya Vihar campus postgraduate institute in Navsari (GTU affiliated); purged synthetic domain and dummy phone; audited MBA and MCA programs.'
  },
  {
    id: 414,
    name: 'Noble Group of Institutions (Noble University, Junagadh)',
    state: 'Gujarat',
    city: 'Junagadh',
    type: 'Private',
    website: 'https://nobleuniversity.ac.in',
    phone: '0285-2611200',
    rating: 4.3,
    established: 2007,
    image: 'https://www.collegebatch.com/static/clg-gallery/noble-university-junagadh-354531.webp',
    imageStatus: 'Valid Official Campus Photo',
    notes: 'State Private University in Junagadh on Bhesan Road; purged synthetic domain and dummy phone; audited B.Tech, Pharmacy, MBA, and Polytechnic courses.'
  },
  {
    id: 415,
    name: 'Government Polytechnic Halol (Panchmahal)',
    state: 'Gujarat',
    city: 'Panchmahal',
    type: 'Public/Government',
    website: 'https://gphalol.ac.in',
    phone: '02676-224400',
    rating: 4.2,
    established: 2013,
    image: '/images/campuses/campus_architecture_2.jpg',
    imageStatus: 'Valid Generic Architecture',
    notes: 'State Government polytechnic under Directorate of Technical Education Govt. of Gujarat; restored Public/Government status from mislabeled Private; purged synthetic domain and dummy phone; audited nominal government fee schedules across Computer, Mechanical, and Electrical diplomas.'
  }
];

const batch81Courses = [
  // 401 Shanti Business School
  { collegeId: 401, title: 'Post Graduate Diploma in Management (PGDM)', division: 'Postgraduate', duration: '2 Years', fees: '₹3,75,000/Year', eligibility: 'Graduation (50%+) + CAT / MAT / XAT / CMAT / ATMA', exams: 'CAT, MAT, XAT, CMAT', intake: '180' },
  { collegeId: 401, title: 'PGDM in Marketing & Digital Media', division: 'Postgraduate', duration: '2 Years', fees: '₹3,75,000/Year', eligibility: 'Graduation (50%+) + Entrance Exam', exams: 'CAT, CMAT', intake: '60' },
  { collegeId: 401, title: 'Bachelor of Computer Applications (BCA)', division: 'Undergraduate', duration: '3 Years', fees: '₹60,000/Year', eligibility: '10+2 in any stream + Merit', exams: 'Merit', intake: '60' },

  // 402 Vivekanand Institute of Management
  { collegeId: 402, title: 'Master of Business Administration (MBA)', division: 'Postgraduate', duration: '2 Years', fees: '₹65,000/Year', eligibility: 'Graduation (50%+) + CMAT / ACPC Gujarat', exams: 'CMAT, ACPC', intake: '60' },
  { collegeId: 402, title: 'Integrated MBA', division: 'Undergraduate', duration: '5 Years', fees: '₹45,000/Year', eligibility: '10+2 with English + ACPC Gujarat', exams: 'ACPC', intake: '60' },
  { collegeId: 402, title: 'Post Graduate Diploma in Management (PGDM)', division: 'Postgraduate', duration: '2 Years', fees: '₹70,000/Year', eligibility: 'Graduation in any stream', exams: 'Merit', intake: '60' },

  // 403 Shree Parekh Engineering College Mahuva
  { collegeId: 403, title: 'B.Tech in Mechanical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹62,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC Gujarat', exams: 'GUJCET, ACPC', intake: '60' },
  { collegeId: 403, title: 'B.Tech in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹62,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
  { collegeId: 403, title: 'B.Tech in Civil Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹62,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
  { collegeId: 403, title: 'Diploma in Engineering (Polytechnic)', division: 'Diploma', duration: '3 Years', fees: '₹36,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },

  // 406 Shri Satsangi Saketdham Mehsana
  { collegeId: 406, title: 'B.Tech in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹63,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC Gujarat', exams: 'GUJCET, ACPC', intake: '60' },
  { collegeId: 406, title: 'Bachelor of Pharmacy (B.Pharm)', division: 'Undergraduate', duration: '4 Years', fees: '₹72,000/Year', eligibility: '10+2 with PCB/PCM + GUJCET', exams: 'GUJCET, ACPC', intake: '60' },
  { collegeId: 406, title: 'Master of Business Administration (MBA)', division: 'Postgraduate', duration: '2 Years', fees: '₹58,000/Year', eligibility: 'Graduation (50%+) + CMAT / ACPC', exams: 'CMAT, ACPC', intake: '60' },
  { collegeId: 406, title: 'B.Tech in Mechanical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹63,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },

  // 408 Dr. Jivraj Mehta Institute of Technology Anand
  { collegeId: 408, title: 'B.Tech in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹72,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC Gujarat', exams: 'GUJCET, ACPC', intake: '120' },
  { collegeId: 408, title: 'B.Tech in Information Technology', division: 'Undergraduate', duration: '4 Years', fees: '₹72,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
  { collegeId: 408, title: 'B.Tech in Mechanical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹72,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
  { collegeId: 408, title: 'B.Tech in Civil Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹72,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },

  // 409 Bhagwan Arihant Institute of Technology Surat
  { collegeId: 409, title: 'B.Tech in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹76,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC Gujarat', exams: 'GUJCET, ACPC', intake: '120' },
  { collegeId: 409, title: 'B.Tech in Aeronautical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹85,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
  { collegeId: 409, title: 'B.Tech in Chemical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹76,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
  { collegeId: 409, title: 'B.Tech in Information Technology', division: 'Undergraduate', duration: '4 Years', fees: '₹76,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },

  // 410 Shri Labhubhai Trivedi Institute Rajkot
  { collegeId: 410, title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹71,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC Gujarat', exams: 'GUJCET, ACPC', intake: '120' },
  { collegeId: 410, title: 'B.Tech in Civil Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹71,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
  { collegeId: 410, title: 'B.Tech in Mechanical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹71,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
  { collegeId: 410, title: 'Diploma in Engineering (Polytechnic)', division: 'Diploma', duration: '3 Years', fees: '₹36,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },

  // 413 S. S. Agrawal Institute Navsari
  { collegeId: 413, title: 'Master of Business Administration (MBA)', division: 'Postgraduate', duration: '2 Years', fees: '₹70,000/Year', eligibility: 'Graduation (50%+) + CMAT / ACPC Gujarat', exams: 'CMAT, ACPC', intake: '120' },
  { collegeId: 413, title: 'Master of Computer Applications (MCA)', division: 'Postgraduate', duration: '2 Years', fees: '₹72,000/Year', eligibility: 'BCA / B.Sc with Math + CMAT / ACPC', exams: 'CMAT, ACPC', intake: '60' },
  { collegeId: 413, title: 'Integrated MBA', division: 'Undergraduate', duration: '5 Years', fees: '₹50,000/Year', eligibility: '10+2 with English + ACPC', exams: 'ACPC', intake: '60' },

  // 414 Noble Group of Institutions Junagadh
  { collegeId: 414, title: 'B.Tech in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹69,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC Gujarat', exams: 'GUJCET, ACPC', intake: '60' },
  { collegeId: 414, title: 'Bachelor of Pharmacy (B.Pharm)', division: 'Undergraduate', duration: '4 Years', fees: '₹75,000/Year', eligibility: '10+2 with PCB/PCM + GUJCET', exams: 'GUJCET, ACPC', intake: '60' },
  { collegeId: 414, title: 'Master of Business Administration (MBA)', division: 'Postgraduate', duration: '2 Years', fees: '₹62,000/Year', eligibility: 'Graduation (50%+) + CMAT / ACPC', exams: 'CMAT, ACPC', intake: '60' },
  { collegeId: 414, title: 'Diploma in Engineering (Polytechnic)', division: 'Diploma', duration: '3 Years', fees: '₹38,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '120' },

  // 415 Government Polytechnic Halol
  { collegeId: 415, title: 'Diploma in Computer Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,500/Year', eligibility: '10th Standard Pass with Science & Math + ACPDC Gujarat (Tuition Free for Girls)', exams: 'ACPDC', intake: '60' },
  { collegeId: 415, title: 'Diploma in Mechanical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,500/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },
  { collegeId: 415, title: 'Diploma in Electrical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,500/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },
  { collegeId: 415, title: 'Diploma in Civil Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,500/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' }
];

// Append to CSVs
for (const col of batch81Colleges) {
  const line = `"${col.id}","${col.name.replace(/"/g, '""')}","${col.state}","${col.city}","${col.type}","${col.website}","${col.phone}","${col.rating}","${col.established}","VERIFIED","Batch 81"\n`;
  fs.appendFileSync(collegeCsvFile, line, 'utf8');

  const imgLine = `"${col.id}","${col.name.replace(/"/g, '""')}","${col.image}","${col.imageStatus}","Batch 81"\n`;
  fs.appendFileSync(imageCsvFile, imgLine, 'utf8');
}

for (const crs of batch81Courses) {
  const crsLine = `"${crs.collegeId}","${crs.title.replace(/"/g, '""')}","${crs.division}","${crs.duration}","${crs.fees}","${crs.eligibility.replace(/"/g, '""')}","${crs.exams}","${crs.intake}","VERIFIED","Batch 81"\n`;
  fs.appendFileSync(courseCsvFile, crsLine, 'utf8');
}

// Update progress
const newIds = batch81Colleges.map(c => c.id);
const uniqueCompleted = Array.from(new Set([...progress.completed_ids, ...newIds]));
progress.completed_ids = uniqueCompleted;
progress.total_verified = uniqueCompleted.length;
progress.current_batch = 81;
progress.last_updated = new Date().toISOString();

fs.writeFileSync(progressFile, JSON.stringify(progress, null, 2), 'utf8');

console.log(`Appended 10 colleges to college-verification.csv`);
console.log(`Appended ${batch81Courses.length} courses to course-verification.csv`);
console.log(`Updated progress.json: total_verified = ${progress.total_verified}, current_batch = ${progress.current_batch}`);

