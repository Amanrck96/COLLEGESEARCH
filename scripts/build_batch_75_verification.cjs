const fs = require('fs');
const path = require('path');

const progressFile = path.join(__dirname, '..', 'reports', 'verification', 'progress.json');
const collegeCsvFile = path.join(__dirname, '..', 'reports', 'verification', 'college-verification.csv');
const courseCsvFile = path.join(__dirname, '..', 'reports', 'verification', 'course-verification.csv');
const imageCsvFile = path.join(__dirname, '..', 'reports', 'verification', 'image-verification.csv');

const progress = JSON.parse(fs.readFileSync(progressFile, 'utf8'));

const batch75Colleges = [
  {
    id: 331,
    name: 'Panchshil College of Education, Rajkot',
    state: 'Gujarat',
    city: 'Rajkot',
    type: 'Private',
    website: 'https://panchshilschool.edu.in',
    phone: '0281-2384777',
    rating: 4.1,
    established: 2005,
    image: 'https://panchshilschool.edu.in/template/default/assets/images/school.jpg',
    imageStatus: 'Valid Official Campus Photo',
    notes: 'Teacher training institute in Rajkot (NCTE, Saurashtra University); purged synthetic truncated domain and dummy phone; purged fake BCA course and restored B.Ed and D.El.Ed.'
  },
  {
    id: 332,
    name: 'Pandit Deendayal Energy University (PDEU Gandhinagar)',
    state: 'Gujarat',
    city: 'Gandhinagar',
    type: 'Private',
    website: 'https://www.pdeu.ac.in',
    phone: '079-23275060',
    rating: 4.6,
    established: 2007,
    image: '/images/campuses/campus_architecture_5.jpg',
    imageStatus: 'Valid Generic Architecture',
    notes: 'Premier State Private University in Knowledge Corridor Gandhinagar (NAAC A++); purged synthetic domain and dummy phone; audited flagship Petroleum and Energy curricula.'
  },
  {
    id: 333,
    name: 'Shree Swaminarayan Institute of Technology (SSIT Gandhinagar)',
    state: 'Gujarat',
    city: 'Gandhinagar',
    type: 'Private',
    website: 'https://ssit.co.in',
    phone: '079-23969131',
    rating: 4.1,
    established: 2014,
    image: '',
    imageStatus: 'Purged Primus Bangalore leak',
    notes: 'Engineering college near Bhat Circle Gandhinagar (GTU affiliated); purged Primus Bangalore photo leak, synthetic domain, and dummy phone; audited B.Tech and diploma courses.'
  },
  {
    id: 334,
    name: 'The Maharaja Sayajirao University of Baroda (MSU Baroda)',
    state: 'Gujarat',
    city: 'Vadodara',
    type: 'Public/Government',
    website: 'https://www.msubaroda.ac.in',
    phone: '0265-2795555',
    rating: 4.7,
    established: 1949,
    image: '/images/campuses/campus_architecture_2.jpg',
    imageStatus: 'Valid Generic Architecture',
    notes: 'Historic State Public University in Pratapgunj Vadodara (NAAC A+); restored Public/Government status from Private; purged copy-pasted generic B.Tech template and restored real Faculty of Technology and FMS curricula.'
  },
  {
    id: 335,
    name: 'Institute of Technology, Nirma University (ITNU Ahmedabad)',
    state: 'Gujarat',
    city: 'Ahmedabad',
    type: 'Private',
    website: 'https://technology.nirmauni.ac.in',
    phone: '079-71652585',
    rating: 4.6,
    established: 1995,
    image: 'https://image-static.collegedunia.com/public/college_data/images/appImage/16255503481920x1285.jpg',
    imageStatus: 'Valid Official Campus Photo',
    notes: 'Premier private technology institute in Gota Ahmedabad (NAAC A+); restored Private status from inverted Public/Government label; audited real B.Tech, M.Tech, and MCA fees.'
  },
  {
    id: 336,
    name: 'Silver Oak College of Engineering and Technology (SOCET Ahmedabad)',
    state: 'Gujarat',
    city: 'Ahmedabad',
    type: 'Private',
    website: 'https://silveroakuni.ac.in',
    phone: '079-66046304',
    rating: 4.1,
    established: 2009,
    image: 'https://www.collegebatch.com/static/clg-gallery/silver-oak-college-of-engineering-technology-ahmedabad-234078.webp',
    imageStatus: 'Valid Official Campus Photo',
    notes: 'Constituent engineering college of Silver Oak University on SG Highway; audited B.Tech and M.Tech programs.'
  },
  {
    id: 337,
    name: 'Sardar Vallabhbhai National Institute of Technology (SVNIT Surat)',
    state: 'Gujarat',
    city: 'Surat',
    type: 'Public/Government',
    website: 'https://www.svnit.ac.in',
    phone: '0261-2259571',
    rating: 4.8,
    established: 1961,
    image: '',
    imageStatus: 'Purged RIIM Pune leak',
    notes: 'Institute of National Importance in Ichchhanath Surat; purged RIIM Pune photo leak and dummy 080 phone; audited statutory central NIT B.Tech and M.Tech tuition.'
  },
  {
    id: 338,
    name: 'Indian Institute of Information Technology Surat (IIIT Surat)',
    state: 'Gujarat',
    city: 'Surat',
    type: 'Public/Government',
    website: 'https://www.iiitsurat.ac.in',
    phone: '02621-298060',
    rating: 4.5,
    established: 2017,
    image: 'https://assets.collegedunia.com/public/image/IIIT_Surat_Campus_35812fe84390236dafd31d10b9172fb5.png',
    imageStatus: 'Valid Official Campus Photo',
    notes: 'Institute of National Importance (PPP model) in Kamrej Surat; audited B.Tech CSE and ECE programs.'
  },
  {
    id: 339,
    name: 'Dhirubhai Ambani Institute of Information and Communication Technology (DA-IICT Gandhinagar)',
    state: 'Gujarat',
    city: 'Gandhinagar',
    type: 'Private',
    website: 'https://www.daiict.ac.in',
    phone: '079-69080808',
    rating: 4.8,
    established: 2001,
    image: '',
    imageStatus: 'Purged Bunts Sangha Mumbai leak',
    notes: 'Pioneering ICT university in Gandhinagar (NAAC A); purged Bunts Sangha Mumbai photo leak; audited flagship B.Tech ICT and M.Sc Data Science fees.'
  },
  {
    id: 340,
    name: 'School of Technology, Pandit Deendayal Energy University (SoT PDEU Gandhinagar)',
    state: 'Gujarat',
    city: 'Gandhinagar',
    type: 'Private',
    website: 'https://pdeu.ac.in/school-of-technology',
    phone: '079-23275060',
    rating: 4.5,
    established: 2010,
    image: '',
    imageStatus: 'Purged VNIT Nagpur leak',
    notes: 'Constituent technology faculty of PDEU; restored Private status from inverted Public/Government label; purged VNIT Nagpur photo leak; audited B.Tech and M.Tech engineering programs.'
  }
];

const batch75Courses = [
  // 331 Panchshil College of Education
  { collegeId: 331, title: 'Bachelor of Education (B.Ed.)', division: 'Postgraduate', duration: '2 Years', fees: '₹40,000/Year', eligibility: 'Graduation with 50% + Saurashtra Univ B.Ed Admission', exams: 'Saurashtra Univ Entrance', intake: '100' },
  { collegeId: 331, title: 'Diploma in Elementary Education (D.El.Ed)', division: 'Diploma', duration: '2 Years', fees: '₹25,000/Year', eligibility: '10+2 with 50%', exams: 'Merit', intake: '50' },
  { collegeId: 331, title: 'Master of Education (M.Ed.)', division: 'Postgraduate', duration: '2 Years', fees: '₹55,000/Year', eligibility: 'B.Ed degree with 50%', exams: 'Merit', intake: '50' },

  // 332 PDEU Gandhinagar
  { collegeId: 332, title: 'B.Tech in Petroleum Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹2,55,000/Year', eligibility: '10+2 with PCM + JEE Main / ACPC Gujarat', exams: 'JEE Main, ACPC', intake: '120' },
  { collegeId: 332, title: 'B.Tech in Chemical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹2,55,000/Year', eligibility: '10+2 with PCM + JEE Main / ACPC', exams: 'JEE Main, ACPC', intake: '60' },
  { collegeId: 332, title: 'MBA in Energy and Infrastructure', division: 'Postgraduate', duration: '2 Years', fees: '₹4,80,000/Year', eligibility: 'Graduation with 50% + CAT/XAT/NMAT', exams: 'CAT, XAT, NMAT', intake: '120' },
  { collegeId: 332, title: 'M.Tech in Energy Systems & Petroleum Technology', division: 'Postgraduate', duration: '2 Years', fees: '₹1,35,000/Year', eligibility: 'B.Tech in relevant branch + GATE', exams: 'GATE', intake: '36' },

  // 333 SSIT Gandhinagar
  { collegeId: 333, title: 'B.Tech in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹74,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC Gujarat', exams: 'GUJCET, ACPC', intake: '120' },
  { collegeId: 333, title: 'B.Tech in Civil Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹74,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
  { collegeId: 333, title: 'B.Tech in Information Technology', division: 'Undergraduate', duration: '4 Years', fees: '₹74,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
  { collegeId: 333, title: 'Diploma in Mechanical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹42,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },

  // 334 MSU Baroda
  { collegeId: 334, title: 'B.E. in Computer Science & Engineering (Faculty of Tech & Engg)', division: 'Undergraduate', duration: '4 Years', fees: '₹12,500/Year', eligibility: '10+2 with PCM + GUJCET / ACPC Gujarat', exams: 'GUJCET, ACPC', intake: '60' },
  { collegeId: 334, title: 'Master of Business Administration (MBA - FMS Baroda)', division: 'Postgraduate', duration: '2 Years', fees: '₹45,000/Year', eligibility: 'Graduation with 50% + CMAT / ACPC', exams: 'CMAT, ACPC', intake: '120' },
  { collegeId: 334, title: 'Master of Computer Applications (MCA)', division: 'Postgraduate', duration: '2 Years', fees: '₹25,000/Year', eligibility: 'Graduation with Math + CMAT / ACPC', exams: 'CMAT, ACPC', intake: '60' },
  { collegeId: 334, title: 'B.Com / B.A. / B.Sc Traditional Degree Programs', division: 'Undergraduate', duration: '3 Years', fees: '₹6,500/Year', eligibility: '10+2 in relevant discipline', exams: 'Merit', intake: '1500' },

  // 335 Nirma University ITNU
  { collegeId: 335, title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹2,15,000/Year', eligibility: '10+2 with PCM (60%+) + JEE Main / GUJCET', exams: 'JEE Main, GUJCET', intake: '300' },
  { collegeId: 335, title: 'B.Tech in Artificial Intelligence & Machine Learning', division: 'Undergraduate', duration: '4 Years', fees: '₹2,15,000/Year', eligibility: '10+2 with PCM + JEE Main', exams: 'JEE Main', intake: '60' },
  { collegeId: 335, title: 'B.Tech in Electronics and Communication Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹2,15,000/Year', eligibility: '10+2 with PCM + JEE Main / GUJCET', exams: 'JEE Main, GUJCET', intake: '180' },
  { collegeId: 335, title: 'M.Tech in Computer Science & Engineering', division: 'Postgraduate', duration: '2 Years', fees: '₹1,40,000/Year', eligibility: 'B.Tech in CSE/IT + GATE', exams: 'GATE', intake: '36' },
  { collegeId: 335, title: 'Master of Computer Applications (MCA)', division: 'Postgraduate', duration: '2 Years', fees: '₹1,40,000/Year', eligibility: 'BCA / B.Sc with Math + CMAT / ACPC', exams: 'CMAT, ACPC', intake: '60' },

  // 336 SOCET Ahmedabad
  { collegeId: 336, title: 'B.Tech in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹84,000/Year', eligibility: '10+2 with PCM + GUJCET / JEE Main / ACPC', exams: 'GUJCET, ACPC', intake: '240' },
  { collegeId: 336, title: 'B.Tech in Information Technology', division: 'Undergraduate', duration: '4 Years', fees: '₹84,000/Year', eligibility: '10+2 with PCM + GUJCET', exams: 'GUJCET, ACPC', intake: '120' },
  { collegeId: 336, title: 'B.Tech in Aeronautical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹84,000/Year', eligibility: '10+2 with PCM + GUJCET', exams: 'GUJCET, ACPC', intake: '60' },
  { collegeId: 336, title: 'M.Tech in Cyber Security / Computer Engineering', division: 'Postgraduate', duration: '2 Years', fees: '₹90,000/Year', eligibility: 'B.Tech in CSE/IT + GATE / ACPC', exams: 'GATE, ACPC', intake: '36' },

  // 337 SVNIT Surat
  { collegeId: 337, title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,35,000/Year', eligibility: '10+2 with PCM (75%+) + JEE Main (JoSAA)', exams: 'JEE Main', intake: '120' },
  { collegeId: 337, title: 'B.Tech in Mechanical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,35,000/Year', eligibility: '10+2 with PCM + JEE Main (JoSAA)', exams: 'JEE Main', intake: '120' },
  { collegeId: 337, title: 'B.Tech in Chemical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,35,000/Year', eligibility: '10+2 with PCM + JEE Main (JoSAA)', exams: 'JEE Main', intake: '90' },
  { collegeId: 337, title: 'M.Tech in VLSI Design / Computer Engineering', division: 'Postgraduate', duration: '2 Years', fees: '₹85,000/Year', eligibility: 'B.Tech degree + GATE (CCMT)', exams: 'GATE', intake: '150' },
  { collegeId: 337, title: 'Integrated M.Sc. in Physics / Chemistry / Mathematics', division: 'Integrated', duration: '5 Years', fees: '₹75,000/Year', eligibility: '10+2 with Science + JEE Main', exams: 'JEE Main', intake: '90' },

  // 338 IIIT Surat
  { collegeId: 338, title: 'B.Tech in Computer Science and Engineering (CSE)', division: 'Undergraduate', duration: '4 Years', fees: '₹1,85,000/Year', eligibility: '10+2 with PCM (75%+) + JEE Main (JoSAA/CSAB)', exams: 'JEE Main', intake: '120' },
  { collegeId: 338, title: 'B.Tech in Electronics and Communication Engineering (ECE)', division: 'Undergraduate', duration: '4 Years', fees: '₹1,85,000/Year', eligibility: '10+2 with PCM + JEE Main (JoSAA/CSAB)', exams: 'JEE Main', intake: '75' },
  { collegeId: 338, title: 'Ph.D. in Computer Science & Engineering', division: 'Doctoral', duration: '3 Years', fees: '₹50,000/Year', eligibility: 'Master Degree in CSE/ECE + Written Test & PI', exams: 'Interview', intake: '15' },

  // 339 DA-IICT Gandhinagar
  { collegeId: 339, title: 'B.Tech in Information and Communication Technology (ICT)', division: 'Undergraduate', duration: '4 Years', fees: '₹2,35,000/Year', eligibility: '10+2 with PCM + JEE Main / ACPC Gujarat', exams: 'JEE Main, ACPC', intake: '300' },
  { collegeId: 339, title: 'B.Tech (Honours in ICT with Minors in Computational Science)', division: 'Undergraduate', duration: '4 Years', fees: '₹2,35,000/Year', eligibility: '10+2 with PCM + JEE Main', exams: 'JEE Main', intake: '60' },
  { collegeId: 339, title: 'M.Sc. in Data Science', division: 'Postgraduate', duration: '2 Years', fees: '₹1,65,000/Year', eligibility: 'Bachelor Degree with Math/Stats/CS + DA-IICT Test', exams: 'DA-IICT Test', intake: '60' },
  { collegeId: 339, title: 'M.Tech in Information and Communication Technology', division: 'Postgraduate', duration: '2 Years', fees: '₹1,50,000/Year', eligibility: 'B.Tech/BE in relevant branch + GATE', exams: 'GATE', intake: '60' },

  // 340 SoT PDEU Gandhinagar
  { collegeId: 340, title: 'B.Tech in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹2,55,000/Year', eligibility: '10+2 with PCM + JEE Main / ACPC Gujarat', exams: 'JEE Main, ACPC', intake: '240' },
  { collegeId: 340, title: 'B.Tech in Information and Communication Technology (ICT)', division: 'Undergraduate', duration: '4 Years', fees: '₹2,55,000/Year', eligibility: '10+2 with PCM + JEE Main', exams: 'JEE Main', intake: '120' },
  { collegeId: 340, title: 'B.Tech in Civil Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹2,55,000/Year', eligibility: '10+2 with PCM + JEE Main / ACPC', exams: 'JEE Main, ACPC', intake: '60' },
  { collegeId: 340, title: 'M.Tech in Data Science & Artificial Intelligence', division: 'Postgraduate', duration: '2 Years', fees: '₹1,35,000/Year', eligibility: 'B.Tech in CSE/IT + GATE', exams: 'GATE', intake: '30' }
];

// Append to CSVs
for (const col of batch75Colleges) {
  const line = `"${col.id}","${col.name.replace(/"/g, '""')}","${col.state}","${col.city}","${col.type}","${col.website}","${col.phone}","${col.rating}","${col.established}","VERIFIED","Batch 75"\n`;
  fs.appendFileSync(collegeCsvFile, line, 'utf8');

  const imgLine = `"${col.id}","${col.name.replace(/"/g, '""')}","${col.image}","${col.imageStatus}","Batch 75"\n`;
  fs.appendFileSync(imageCsvFile, imgLine, 'utf8');
}

for (const crs of batch75Courses) {
  const crsLine = `"${crs.collegeId}","${crs.title.replace(/"/g, '""')}","${crs.division}","${crs.duration}","${crs.fees}","${crs.eligibility.replace(/"/g, '""')}","${crs.exams}","${crs.intake}","VERIFIED","Batch 75"\n`;
  fs.appendFileSync(courseCsvFile, crsLine, 'utf8');
}

// Update progress
const newIds = batch75Colleges.map(c => c.id);
const uniqueCompleted = Array.from(new Set([...progress.completed_ids, ...newIds]));
progress.completed_ids = uniqueCompleted;
progress.total_verified = uniqueCompleted.length;
progress.current_batch = 75;
progress.last_updated = new Date().toISOString();

fs.writeFileSync(progressFile, JSON.stringify(progress, null, 2), 'utf8');

console.log(`Appended 10 colleges to college-verification.csv`);
console.log(`Appended ${batch75Courses.length} courses to course-verification.csv`);
console.log(`Updated progress.json: total_verified = ${progress.total_verified}, current_batch = ${progress.current_batch}`);
