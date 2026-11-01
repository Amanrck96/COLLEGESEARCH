const fs = require('fs');
const path = require('path');

const progressFile = path.join(__dirname, '..', 'reports', 'verification', 'progress.json');
const collegeCsvFile = path.join(__dirname, '..', 'reports', 'verification', 'college-verification.csv');
const courseCsvFile = path.join(__dirname, '..', 'reports', 'verification', 'course-verification.csv');
const imageCsvFile = path.join(__dirname, '..', 'reports', 'verification', 'image-verification.csv');

const progress = JSON.parse(fs.readFileSync(progressFile, 'utf8'));

const batch78Colleges = [
  {
    id: 361,
    name: 'Shree Valiba BCA College, Malpur',
    state: 'Gujarat',
    city: 'Aravalli',
    type: 'Private',
    website: 'https://www.valibacollege.org',
    phone: '02773-222400',
    rating: 4.0,
    established: 2008,
    image: '',
    imageStatus: 'Purged Bangalore University leak',
    notes: 'Computer application college in Malpur Aravalli (HNGU Patan affiliated); purged Bangalore University photo leak, synthetic domain, and dummy phone; audited BCA and PGDCA programs.'
  },
  {
    id: 362,
    name: 'Smt. V. S. Lakhani College of Computer Science, Bhavnagar',
    state: 'Gujarat',
    city: 'Bhavnagar',
    type: 'Private',
    website: 'https://www.spst.org.in',
    phone: '0278-2567222',
    rating: 4.1,
    established: 2001,
    image: '/images/campuses/campus_architecture_3.jpg',
    imageStatus: 'Valid Generic Architecture',
    notes: 'Sardar Patel Seva Trust computer institute in Kaliyabid Bhavnagar (MKBU affiliated); purged synthetic domain and dummy phone; audited BCA, B.Sc IT, and PGDCA programs.'
  },
  {
    id: 365,
    name: 'Bhagwan Mahavir College of Hotel Management (BMU Surat)',
    state: 'Gujarat',
    city: 'Surat',
    type: 'Private',
    website: 'https://bmusurat.ac.in',
    phone: '0261-6770100',
    rating: 4.2,
    established: 2009,
    image: '/images/campuses/campus_architecture_1.jpg',
    imageStatus: 'Valid Generic Architecture',
    notes: 'Hospitality institute under Bhagwan Mahavir University in Vesu-Bharthana Surat; purged synthetic domain and dummy phone; audited BHMCT, B.Sc Hospitality, and diploma courses.'
  },
  {
    id: 366,
    name: 'Laxmi Institute of Technology (LIT Sarigam, Valsad)',
    state: 'Gujarat',
    city: 'Valsad',
    type: 'Private',
    website: 'https://lit.laxmi.edu.in',
    phone: '0260-2405300',
    rating: 4.2,
    established: 2010,
    image: 'https://www.collegebatch.com/static/clg-gallery/laxmi-institute-of-technology-valsad-279469.webp',
    imageStatus: 'Valid Official Campus Photo',
    notes: 'Laxmi Vidyapeeth engineering campus in Sarigam Valsad (GTU affiliated); purged synthetic domain and dummy phone; audited B.Tech and diploma courses.'
  },
  {
    id: 367,
    name: 'SAL Institute of Diploma Studies (SIDS Ahmedabad)',
    state: 'Gujarat',
    city: 'Ahmedabad',
    type: 'Private',
    website: 'https://sal.edu.in',
    phone: '079-67129000',
    rating: 4.1,
    established: 2013,
    image: '',
    imageStatus: 'Purged Koshys Bangalore leak',
    notes: 'SAL Education campus diploma institute opposite Science City Sola; purged Koshys Bangalore photo leak, synthetic domain, and dummy phone; audited engineering diploma programs.'
  },
  {
    id: 368,
    name: 'Diwaliba Polytechnic, Uka Tarsadia University (Mahuva, Surat)',
    state: 'Gujarat',
    city: 'Surat',
    type: 'Private',
    website: 'http://dp.utu.ac.in',
    phone: '02625-255882',
    rating: 4.3,
    established: 2013,
    image: '',
    imageStatus: 'Purged Maniben Mumbai leak',
    notes: 'Constituent polytechnic of Uka Tarsadia University at Maliba Campus Mahuva; purged Maniben Mumbai photo leak, synthetic domain, and dummy phone; audited Chemical and Computer diploma courses.'
  },
  {
    id: 369,
    name: 'Prime Institute of Engineering and Technology (PIET Navsari)',
    state: 'Gujarat',
    city: 'Navsari',
    type: 'Private',
    website: 'http://primeiet.in',
    phone: '02637-234200',
    rating: 4.0,
    established: 2014,
    image: '',
    imageStatus: 'Purged Koshys Bangalore leak',
    notes: 'Engineering college in Jalalpore Navsari (GTU affiliated); purged Koshys Bangalore photo leak, synthetic domain, and dummy phone; audited B.Tech and diploma engineering curricula.'
  },
  {
    id: 370,
    name: 'Vidyabharti Trust College of MCA (Umrakh, Bardoli)',
    state: 'Gujarat',
    city: 'Surat',
    type: 'Private',
    website: 'http://vbtcollegeofmca.ac.in',
    phone: '02622-224581',
    rating: 4.3,
    established: 2004,
    image: '/images/campuses/campus_architecture_2.jpg',
    imageStatus: 'Valid Generic Architecture',
    notes: 'Vidyabharti Trust post-graduate IT institution in Umrakh Bardoli; purged synthetic domain and dummy phone; audited MCA and Integrated MCA programs.'
  },
  {
    id: 371,
    name: 'Veerayatan Institute of Engineering (VIE Mandvi, Kutch)',
    state: 'Gujarat',
    city: 'Kutch',
    type: 'Private',
    website: 'https://veerayataninstitutes.org',
    phone: '02834-275241',
    rating: 4.2,
    established: 2010,
    image: 'https://media.getmyuni.com/azure/college-images-test/veerayatan-institute-of-engineering-and-management-kachchh/4c7bd58362dd4c17a2a9a69dbc5c2ec8.jpeg',
    imageStatus: 'Valid Official Campus Photo',
    notes: 'Engineering institute on Bhuj-Mandvi Road Kutch (GTU affiliated); purged synthetic domain and dummy phone; audited B.Tech Computer, Chemical, and Mechanical engineering fees.'
  },
  {
    id: 372,
    name: 'Asia Pacific Institute of Hotel Management (APIHM Bhoyani)',
    state: 'Gujarat',
    city: 'Ahmedabad',
    type: 'Private',
    website: 'https://www.apihm.com',
    phone: '02764-286200',
    rating: 4.1,
    established: 2012,
    image: 'https://www.campusoption.com/images/colleges/gallery/04_04_17_065552_College2.jpg',
    imageStatus: 'Valid Official Campus Photo',
    notes: 'Hotel management and hospitality academy in Bhoyani on Ahmedabad-Mehsana Highway; purged synthetic domain and dummy phone; audited BHM and culinary diploma programs.'
  }
];

const batch78Courses = [
  // 361 Valiba BCA College
  { collegeId: 361, title: 'Bachelor of Computer Applications (BCA)', division: 'Undergraduate', duration: '3 Years', fees: '₹28,000/Year', eligibility: '10+2 in any stream + Merit', exams: 'Merit', intake: '120' },
  { collegeId: 361, title: 'Bachelor of Science in Information Technology (B.Sc. IT)', division: 'Undergraduate', duration: '3 Years', fees: '₹26,000/Year', eligibility: '10+2 with Science/Math', exams: 'Merit', intake: '60' },
  { collegeId: 361, title: 'Post Graduate Diploma in Computer Applications (PGDCA)', division: 'Diploma', duration: '1 Year', fees: '₹20,000 Total', eligibility: 'Graduation in any stream', exams: 'Merit', intake: '60' },

  // 362 VS Lakhani Bhavnagar
  { collegeId: 362, title: 'Bachelor of Computer Applications (BCA)', division: 'Undergraduate', duration: '3 Years', fees: '₹30,000/Year', eligibility: '10+2 in any stream + MKBU Centralized Admission', exams: 'MKBU Merit', intake: '120' },
  { collegeId: 362, title: 'Bachelor of Science in Information Technology (B.Sc. IT)', division: 'Undergraduate', duration: '3 Years', fees: '₹28,000/Year', eligibility: '10+2 with Science', exams: 'MKBU Merit', intake: '60' },
  { collegeId: 362, title: 'Post Graduate Diploma in Computer Applications (PGDCA)', division: 'Diploma', duration: '1 Year', fees: '₹22,000 Total', eligibility: 'Graduation in any stream', exams: 'Direct Admission', intake: '60' },

  // 365 BMU Hotel Management Surat
  { collegeId: 365, title: 'Bachelor of Hotel Management & Catering Technology (BHMCT)', division: 'Undergraduate', duration: '4 Years', fees: '₹85,000/Year', eligibility: '10+2 in any stream (45%+) + ACPC / BMU Aptitude', exams: 'ACPC, BMU Test', intake: '60' },
  { collegeId: 365, title: 'B.Sc. in Hospitality & Hotel Administration', division: 'Undergraduate', duration: '3 Years', fees: '₹75,000/Year', eligibility: '10+2 in any stream', exams: 'Merit', intake: '60' },
  { collegeId: 365, title: 'Diploma in Hotel Operations and Food Production', division: 'Diploma', duration: '1 Year', fees: '₹45,000 Total', eligibility: '10th or 10+2 Pass', exams: 'Direct Admission', intake: '40' },

  // 366 Laxmi Institute of Technology Sarigam
  { collegeId: 366, title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹73,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC Gujarat', exams: 'GUJCET, ACPC', intake: '120' },
  { collegeId: 366, title: 'B.Tech in Mechanical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹73,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
  { collegeId: 366, title: 'B.Tech in Civil Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹73,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
  { collegeId: 366, title: 'Diploma in Mechanical / Civil Engineering', division: 'Diploma', duration: '3 Years', fees: '₹40,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '120' },

  // 367 SAL Institute of Diploma Studies
  { collegeId: 367, title: 'Diploma in Computer Engineering', division: 'Diploma', duration: '3 Years', fees: '₹45,000/Year', eligibility: '10th Standard Pass with Science & Math + ACPDC Gujarat', exams: 'ACPDC', intake: '120' },
  { collegeId: 367, title: 'Diploma in Information Technology', division: 'Diploma', duration: '3 Years', fees: '₹45,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },
  { collegeId: 367, title: 'Diploma in Mechanical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹45,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '120' },
  { collegeId: 367, title: 'Diploma in Civil Engineering', division: 'Diploma', duration: '3 Years', fees: '₹45,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },

  // 368 Diwaliba Polytechnic Mahuva
  { collegeId: 368, title: 'Diploma in Chemical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹44,000/Year', eligibility: '10th Standard with Science & Math + ACPDC / UTU', exams: 'ACPDC', intake: '60' },
  { collegeId: 368, title: 'Diploma in Computer Engineering', division: 'Diploma', duration: '3 Years', fees: '₹44,000/Year', eligibility: '10th Standard with Science & Math', exams: 'ACPDC', intake: '60' },
  { collegeId: 368, title: 'Diploma in Mechanical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹44,000/Year', eligibility: '10th Standard Pass', exams: 'ACPDC', intake: '60' },
  { collegeId: 368, title: 'Diploma in Information Technology', division: 'Diploma', duration: '3 Years', fees: '₹44,000/Year', eligibility: '10th Standard Pass', exams: 'ACPDC', intake: '60' },

  // 369 Prime Institute of Engineering Navsari
  { collegeId: 369, title: 'B.Tech in Mechanical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹68,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC Gujarat', exams: 'GUJCET, ACPC', intake: '60' },
  { collegeId: 369, title: 'B.Tech in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹68,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
  { collegeId: 369, title: 'B.Tech in Civil Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹68,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
  { collegeId: 369, title: 'Diploma in Mechanical / Civil Engineering', division: 'Diploma', duration: '3 Years', fees: '₹38,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },

  // 370 Vidyabharti Trust MCA Umrakh
  { collegeId: 370, title: 'Master of Computer Applications (MCA)', division: 'Postgraduate', duration: '2 Years', fees: '₹74,000/Year', eligibility: 'BCA / B.Sc with Math/CS + CMAT / ACPC Gujarat', exams: 'CMAT, ACPC', intake: '120' },
  { collegeId: 370, title: 'Integrated MCA', division: 'Undergraduate', duration: '5 Years', fees: '₹55,000/Year', eligibility: '10+2 with Mathematics/Stats + ACPC Gujarat', exams: 'ACPC', intake: '60' },
  { collegeId: 370, title: 'Post Graduate Diploma in Computer Applications (PGDCA)', division: 'Diploma', duration: '1 Year', fees: '₹25,000 Total', eligibility: 'Graduation in any stream', exams: 'Direct Admission', intake: '60' },

  // 371 Veerayatan Institute of Engineering Mandvi
  { collegeId: 371, title: 'B.Tech in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹71,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC Gujarat', exams: 'GUJCET, ACPC', intake: '60' },
  { collegeId: 371, title: 'B.Tech in Chemical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹71,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
  { collegeId: 371, title: 'B.Tech in Mechanical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹71,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
  { collegeId: 371, title: 'Diploma in Mechanical / Civil Engineering', division: 'Diploma', duration: '3 Years', fees: '₹38,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },

  // 372 APIHM Bhoyani
  { collegeId: 372, title: 'Bachelor of Hotel Management (BHM)', division: 'Undergraduate', duration: '3 Years', fees: '₹85,000/Year', eligibility: '10+2 in any stream + Merit / Personal Interview', exams: 'Merit, PI', intake: '60' },
  { collegeId: 372, title: 'B.Sc. in Hospitality & Tourism Management', division: 'Undergraduate', duration: '3 Years', fees: '₹80,000/Year', eligibility: '10+2 in any stream', exams: 'Merit', intake: '60' },
  { collegeId: 372, title: 'Diploma in Food & Beverage Service / Culinary Arts', division: 'Diploma', duration: '1 Year', fees: '₹50,000 Total', eligibility: '10th or 10+2 Pass', exams: 'Direct Admission', intake: '40' }
];

// Append to CSVs
for (const col of batch78Colleges) {
  const line = `"${col.id}","${col.name.replace(/"/g, '""')}","${col.state}","${col.city}","${col.type}","${col.website}","${col.phone}","${col.rating}","${col.established}","VERIFIED","Batch 78"\n`;
  fs.appendFileSync(collegeCsvFile, line, 'utf8');

  const imgLine = `"${col.id}","${col.name.replace(/"/g, '""')}","${col.image}","${col.imageStatus}","Batch 78"\n`;
  fs.appendFileSync(imageCsvFile, imgLine, 'utf8');
}

for (const crs of batch78Courses) {
  const crsLine = `"${crs.collegeId}","${crs.title.replace(/"/g, '""')}","${crs.division}","${crs.duration}","${crs.fees}","${crs.eligibility.replace(/"/g, '""')}","${crs.exams}","${crs.intake}","VERIFIED","Batch 78"\n`;
  fs.appendFileSync(courseCsvFile, crsLine, 'utf8');
}

// Update progress
const newIds = batch78Colleges.map(c => c.id);
const uniqueCompleted = Array.from(new Set([...progress.completed_ids, ...newIds]));
progress.completed_ids = uniqueCompleted;
progress.total_verified = uniqueCompleted.length;
progress.current_batch = 78;
progress.last_updated = new Date().toISOString();

fs.writeFileSync(progressFile, JSON.stringify(progress, null, 2), 'utf8');

console.log(`Appended 10 colleges to college-verification.csv`);
console.log(`Appended ${batch78Courses.length} courses to course-verification.csv`);
console.log(`Updated progress.json: total_verified = ${progress.total_verified}, current_batch = ${progress.current_batch}`);

