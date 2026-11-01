const fs = require('fs');
const path = require('path');

const progressFile = path.join(__dirname, '..', 'reports', 'verification', 'progress.json');
const collegeCsvFile = path.join(__dirname, '..', 'reports', 'verification', 'college-verification.csv');
const courseCsvFile = path.join(__dirname, '..', 'reports', 'verification', 'course-verification.csv');
const imageCsvFile = path.join(__dirname, '..', 'reports', 'verification', 'image-verification.csv');

const progress = JSON.parse(fs.readFileSync(progressFile, 'utf8'));

const batch82Colleges = [
  {
    id: 416,
    name: 'Dr. Jivraj Mehta Institute of Polytechnic (DJMIP Mogar, Anand)',
    state: 'Gujarat',
    city: 'Anand',
    type: 'Private',
    website: 'https://www.djmit.ac.in',
    phone: '02692-280105',
    rating: 4.0,
    established: 2013,
    image: 'https://image-static.collegedunia.com/public/college_data/images/campusimage/1596192323107765455_676458639601751_339142948502097216_o.jpg',
    imageStatus: 'Valid Official Campus Photo',
    notes: 'Polytechnic institute on NH 8 Mogar Anand (GTU affiliated); purged synthetic domain and dummy phone; audited Computer, Mechanical, Electrical, and Civil diploma courses.'
  },
  {
    id: 417,
    name: 'Khyati School of Design (Khyati Foundation, Ahmedabad)',
    state: 'Gujarat',
    city: 'Ahmedabad',
    type: 'Private',
    website: 'https://khyatischoolofdesign.com',
    phone: '079-27770000',
    rating: 4.1,
    established: 2018,
    image: '',
    imageStatus: 'Purged C.U. Shah Mumbai leak',
    notes: 'Design institution under Khyati Foundation in Shilaj Ahmedabad; purged C.U. Shah Mumbai photo leak, synthetic domain, and dummy phone; audited B.Des and graphic design diploma programs.'
  },
  {
    id: 418,
    name: 'HJD Institute of Technical Education and Research (Kera-Kutch)',
    state: 'Gujarat',
    city: 'Kutch',
    type: 'Private',
    website: 'https://hjdinstitute.org',
    phone: '02832-281085',
    rating: 4.2,
    established: 2010,
    image: '',
    imageStatus: 'Purged GNIMS Mumbai leak',
    notes: 'Technical education institute in Kera Kutch (GTU affiliated); purged GNIMS Matunga Mumbai photo leak, synthetic domain, and dummy phone; corrected spelling defect in raw record.'
  },
  {
    id: 419,
    name: 'Parul Institute of Technology (Parul University, Vadodara)',
    state: 'Gujarat',
    city: 'Vadodara',
    type: 'Private',
    website: 'https://paruluniversity.ac.in',
    phone: '02668-260300',
    rating: 4.5,
    established: 2003,
    image: '/images/campuses/campus_architecture_6.jpg',
    imageStatus: 'Valid Generic Architecture',
    notes: 'Flagship engineering constituent of Parul University at Limda Waghodia; purged synthetic domain and dummy phone; audited B.Tech and M.Tech engineering programs.'
  },
  {
    id: 421,
    name: 'Dadhichi Diploma Polytechnic College (Sukhsar, Dahod)',
    state: 'Gujarat',
    city: 'Dahod',
    type: 'Private',
    website: 'http://dadhichipolytechnic.com',
    phone: '02677-224100',
    rating: 3.8,
    established: 2014,
    image: '',
    imageStatus: 'Purged Bangalore University leak',
    notes: 'Polytechnic institute in Sukhsar Fatepura Dahod (GTU affiliated); purged Bangalore University photo leak, synthetic domain, and dummy phone; audited engineering diploma programs.'
  },
  {
    id: 422,
    name: 'Dr. Natubhai P. Patel Polytechnic (DNPP Visnagar, Mehsana)',
    state: 'Gujarat',
    city: 'Mehsana',
    type: 'Private',
    website: 'https://spu.ac.in',
    phone: '02765-224400',
    rating: 4.1,
    established: 2000,
    image: '',
    imageStatus: 'Purged GNIMS Mumbai leak',
    notes: 'Constituent polytechnic of Sankalchand Patel University in Visnagar; purged GNIMS Matunga Mumbai photo leak, synthetic domain, and dummy phone; audited engineering diploma courses.'
  },
  {
    id: 423,
    name: 'Government Polytechnic for Girls (GPG Ahmedabad)',
    state: 'Gujarat',
    city: 'Ahmedabad',
    type: 'Public/Government',
    website: 'https://gpgahmedabad.ac.in',
    phone: '079-27912440',
    rating: 4.4,
    established: 1964,
    image: '/images/campuses/campus_architecture_1.jpg',
    imageStatus: 'Valid Generic Architecture',
    notes: 'Historic State Government girls polytechnic near Helmet Crossroads Ahmedabad (est. 1964); restored Public/Government status from mislabeled Private; purged synthetic domain and dummy phone; audited 100% tuition-free government diploma programs for girls.'
  },
  {
    id: 424,
    name: 'A. Y. Dadabhai Technical Institute (AYDTI Kosamba, Surat)',
    state: 'Gujarat',
    city: 'Surat',
    type: 'Private',
    website: 'http://aydti.ac.in',
    phone: '0261-286280',
    rating: 4.1,
    established: 2008,
    image: 'https://www.collegebatch.com/static/clg-gallery/ay-dadabhai-technical-institute-surat-347935.webp',
    imageStatus: 'Valid Official Campus Photo',
    notes: 'Technical institute on Kosamba Road Surat (GTU affiliated); purged synthetic domain and dummy phone; audited Mechanical, Electrical, Civil, and Computer diploma programs.'
  },
  {
    id: 425,
    name: 'Indo-German Tool Room (IGTR Ahmedabad)',
    state: 'Gujarat',
    city: 'Ahmedabad',
    type: 'Public/Government',
    website: 'https://www.igtrahd.com',
    phone: '079-25843159',
    rating: 4.5,
    established: 1990,
    image: '/images/campuses/campus_architecture_3.jpg',
    imageStatus: 'Valid Generic Architecture',
    notes: 'Premier Central Government MSME Technology Centre established in collaboration with Govt. of Germany at GIDC Vatva Ahmedabad; restored Public/Government status from mislabeled Private; purged synthetic domain and dummy phone; audited specialized Tool & Die Making and Mechatronics diplomas.'
  },
  {
    id: 426,
    name: 'Government Polytechnic, Kheda (GP Kheda)',
    state: 'Gujarat',
    city: 'Kheda',
    type: 'Public/Government',
    website: 'https://gpkheda.ac.in',
    phone: '02694-224400',
    rating: 4.2,
    established: 2013,
    image: 'https://img.studyclap.com/img/institute/college/773x343/15660/gpk-kheda-ae4c936e58.jpg',
    imageStatus: 'Valid Official Campus Photo',
    notes: 'State Government polytechnic in Matar Kheda under Directorate of Technical Education; restored Public/Government status from mislabeled Private; purged synthetic domain and dummy phone; audited nominal government fee schedules across engineering diplomas.'
  }
];

const batch82Courses = [
  // 416 Dr. Jivraj Mehta Polytechnic Anand
  { collegeId: 416, title: 'Diploma in Computer Engineering', division: 'Diploma', duration: '3 Years', fees: '₹38,000/Year', eligibility: '10th Standard Pass with Science & Math + ACPDC Gujarat', exams: 'ACPDC', intake: '60' },
  { collegeId: 416, title: 'Diploma in Mechanical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹38,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },
  { collegeId: 416, title: 'Diploma in Electrical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹38,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },
  { collegeId: 416, title: 'Diploma in Civil Engineering', division: 'Diploma', duration: '3 Years', fees: '₹38,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },

  // 417 Khyati School of Design Ahmedabad
  { collegeId: 417, title: 'Bachelor of Design (B.Des) in Communication Design', division: 'Undergraduate', duration: '4 Years', fees: '₹1,20,000/Year', eligibility: '10+2 in any stream + Design Aptitude Test', exams: 'DAT, Merit', intake: '60' },
  { collegeId: 417, title: 'Bachelor of Design (B.Des) in Interior Design', division: 'Undergraduate', duration: '4 Years', fees: '₹1,20,000/Year', eligibility: '10+2 in any stream + Aptitude Test', exams: 'DAT, Merit', intake: '60' },
  { collegeId: 417, title: 'Bachelor of Design (B.Des) in Fashion Design', division: 'Undergraduate', duration: '4 Years', fees: '₹1,20,000/Year', eligibility: '10+2 in any stream + Aptitude Test', exams: 'DAT, Merit', intake: '60' },
  { collegeId: 417, title: 'Diploma in Graphic Design & Animation', division: 'Diploma', duration: '1 Year', fees: '₹45,000 Total', eligibility: '10th or 10+2 Pass', exams: 'Direct Admission', intake: '30' },

  // 418 HJD Institute Kutch
  { collegeId: 418, title: 'B.Tech in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹63,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC Gujarat', exams: 'GUJCET, ACPC', intake: '60' },
  { collegeId: 418, title: 'B.Tech in Mechanical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹63,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
  { collegeId: 418, title: 'B.Tech in Civil Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹63,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
  { collegeId: 418, title: 'Diploma in Engineering (Polytechnic)', division: 'Diploma', duration: '3 Years', fees: '₹36,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },

  // 419 Parul Institute of Technology Vadodara
  { collegeId: 419, title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,49,000/Year', eligibility: '10+2 with PCM + GUJCET / JEE Main', exams: 'GUJCET, JEE Main', intake: '180' },
  { collegeId: 419, title: 'B.Tech in Information Technology', division: 'Undergraduate', duration: '4 Years', fees: '₹1,49,000/Year', eligibility: '10+2 with PCM + GUJCET / JEE Main', exams: 'GUJCET, JEE Main', intake: '120' },
  { collegeId: 419, title: 'B.Tech in Artificial Intelligence & Data Science', division: 'Undergraduate', duration: '4 Years', fees: '₹1,49,000/Year', eligibility: '10+2 with PCM + GUJCET / JEE Main', exams: 'GUJCET, JEE Main', intake: '60' },
  { collegeId: 419, title: 'M.Tech in Computer Engineering', division: 'Postgraduate', duration: '2 Years', fees: '₹1,10,000/Year', eligibility: 'B.Tech in CSE/IT + GATE / PGCET', exams: 'GATE, PGCET', intake: '18' },

  // 421 Dadhichi Diploma Polytechnic Dahod
  { collegeId: 421, title: 'Diploma in Mechanical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹36,000/Year', eligibility: '10th Standard Pass + ACPDC Gujarat', exams: 'ACPDC', intake: '60' },
  { collegeId: 421, title: 'Diploma in Civil Engineering', division: 'Diploma', duration: '3 Years', fees: '₹36,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },
  { collegeId: 421, title: 'Diploma in Electrical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹36,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },
  { collegeId: 421, title: 'Diploma in Computer Engineering', division: 'Diploma', duration: '3 Years', fees: '₹36,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },

  // 422 Dr. Natubhai P. Patel Polytechnic Visnagar
  { collegeId: 422, title: 'Diploma in Computer Engineering', division: 'Diploma', duration: '3 Years', fees: '₹42,000/Year', eligibility: '10th Standard Pass with Science & Math + ACPDC', exams: 'ACPDC', intake: '60' },
  { collegeId: 422, title: 'Diploma in Information Technology', division: 'Diploma', duration: '3 Years', fees: '₹42,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },
  { collegeId: 422, title: 'Diploma in Mechanical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹42,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },
  { collegeId: 422, title: 'Diploma in Civil Engineering', division: 'Diploma', duration: '3 Years', fees: '₹42,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },

  // 423 Government Polytechnic for Girls Ahmedabad
  { collegeId: 423, title: 'Diploma in Computer Engineering', division: 'Diploma', duration: '3 Years', fees: '₹500/Year', eligibility: '10th Standard Pass with Science & Math + ACPDC Gujarat (Tuition Free for Girls)', exams: 'ACPDC', intake: '120' },
  { collegeId: 423, title: 'Diploma in Information Technology', division: 'Diploma', duration: '3 Years', fees: '₹500/Year', eligibility: '10th Standard Pass + ACPDC (Tuition Free for Girls)', exams: 'ACPDC', intake: '60' },
  { collegeId: 423, title: 'Diploma in Biomedical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹500/Year', eligibility: '10th Standard Pass + ACPDC (Tuition Free for Girls)', exams: 'ACPDC', intake: '60' },
  { collegeId: 423, title: 'Diploma in Commercial Practice', division: 'Diploma', duration: '3 Years', fees: '₹500/Year', eligibility: '10th Standard Pass + ACPDC (Tuition Free for Girls)', exams: 'ACPDC', intake: '60' },

  // 424 A. Y. Dadabhai Technical Institute Surat
  { collegeId: 424, title: 'Diploma in Mechanical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹38,000/Year', eligibility: '10th Standard Pass with Science & Math + ACPDC', exams: 'ACPDC', intake: '60' },
  { collegeId: 424, title: 'Diploma in Electrical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹38,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },
  { collegeId: 424, title: 'Diploma in Civil Engineering', division: 'Diploma', duration: '3 Years', fees: '₹38,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },
  { collegeId: 424, title: 'Diploma in Computer Engineering', division: 'Diploma', duration: '3 Years', fees: '₹38,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },

  // 425 Indo-German Tool Room Ahmedabad
  { collegeId: 425, title: 'Diploma in Tool & Die Making', division: 'Diploma', duration: '4 Years', fees: '₹42,000/Year', eligibility: '10th Standard with Science & Math (50%+) + IGTR Entrance Exam', exams: 'IGTR Test', intake: '60' },
  { collegeId: 425, title: 'Diploma in Mechatronics', division: 'Diploma', duration: '3 Years', fees: '₹42,000/Year', eligibility: '10th Standard with Science & Math + IGTR Entrance', exams: 'IGTR Test', intake: '60' },
  { collegeId: 425, title: 'Post Diploma in Tool Design & CAD/CAM', division: 'Diploma', duration: '1 Year', fees: '₹50,000 Total', eligibility: 'Diploma in Mechanical / Production Engineering', exams: 'Merit', intake: '40' },
  { collegeId: 425, title: 'Certificate in CNC Machining & MasterCAM', division: 'Certificate', duration: '6 Months', fees: '₹25,000 Total', eligibility: 'ITI / 10th Standard Pass', exams: 'Direct Admission', intake: '30' },

  // 426 Government Polytechnic Kheda
  { collegeId: 426, title: 'Diploma in Computer Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,500/Year', eligibility: '10th Standard Pass with Science & Math + ACPDC Gujarat (Tuition Free for Girls)', exams: 'ACPDC', intake: '60' },
  { collegeId: 426, title: 'Diploma in Mechanical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,500/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },
  { collegeId: 426, title: 'Diploma in Civil Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,500/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },
  { collegeId: 426, title: 'Diploma in Electrical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,500/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' }
];

// Append to CSVs
for (const col of batch82Colleges) {
  const line = `"${col.id}","${col.name.replace(/"/g, '""')}","${col.state}","${col.city}","${col.type}","${col.website}","${col.phone}","${col.rating}","${col.established}","VERIFIED","Batch 82"\n`;
  fs.appendFileSync(collegeCsvFile, line, 'utf8');

  const imgLine = `"${col.id}","${col.name.replace(/"/g, '""')}","${col.image}","${col.imageStatus}","Batch 82"\n`;
  fs.appendFileSync(imageCsvFile, imgLine, 'utf8');
}

for (const crs of batch82Courses) {
  const crsLine = `"${crs.collegeId}","${crs.title.replace(/"/g, '""')}","${crs.division}","${crs.duration}","${crs.fees}","${crs.eligibility.replace(/"/g, '""')}","${crs.exams}","${crs.intake}","VERIFIED","Batch 82"\n`;
  fs.appendFileSync(courseCsvFile, crsLine, 'utf8');
}

// Update progress
const newIds = batch82Colleges.map(c => c.id);
const uniqueCompleted = Array.from(new Set([...progress.completed_ids, ...newIds]));
progress.completed_ids = uniqueCompleted;
progress.total_verified = uniqueCompleted.length;
progress.current_batch = 82;
progress.last_updated = new Date().toISOString();

fs.writeFileSync(progressFile, JSON.stringify(progress, null, 2), 'utf8');

console.log(`Appended 10 colleges to college-verification.csv`);
console.log(`Appended ${batch82Courses.length} courses to course-verification.csv`);
console.log(`Updated progress.json: total_verified = ${progress.total_verified}, current_batch = ${progress.current_batch}`);
