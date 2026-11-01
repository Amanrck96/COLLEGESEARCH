const fs = require('fs');
const path = require('path');

const progressFile = path.join(__dirname, '..', 'reports', 'verification', 'progress.json');
const collegeCsvFile = path.join(__dirname, '..', 'reports', 'verification', 'college-verification.csv');
const courseCsvFile = path.join(__dirname, '..', 'reports', 'verification', 'course-verification.csv');
const imageCsvFile = path.join(__dirname, '..', 'reports', 'verification', 'image-verification.csv');

const progress = JSON.parse(fs.readFileSync(progressFile, 'utf8'));

const batch68Colleges = [
  {
    id: 248,
    name: 'Jagannath International Management School, Kalkaji, New Delhi',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Private',
    website: 'https://www.jagannath.org/',
    phone: '011-40619300',
    rating: 4.5,
    established: 1997,
    image: '/images/campuses/campus_architecture_3.jpg',
    imageStatus: 'Retained generic campus architecture',
    notes: 'Approved by AICTE, affiliated to GGSIPU (NBA & NAAC accredited). Normalized all-caps name; purged dummy phone and synthetic domain; audited PGDM and BBA programs.'
  },
  {
    id: 249,
    name: 'Indira Gandhi Delhi Technical University for Women (IGDTUW)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Public/Government',
    website: 'https://www.igdtuw.ac.in/',
    phone: '011-23900220',
    rating: 4.8,
    established: 1998,
    image: '',
    imageStatus: 'Purged MGM Navi Mumbai leak',
    notes: 'Premier State Public Technical University under Govt of NCT of Delhi (NAAC A+). Restored Public status from Private; purged MGM Navi Mumbai photo leak, dummy phone, and synthetic domain; audited B.Tech (JAC Delhi) and B.Arch programs.'
  },
  {
    id: 250,
    name: 'International Management Institute, New Delhi (IMI New Delhi)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Private',
    website: 'https://www.imi.edu/',
    phone: '011-47194100',
    rating: 4.7,
    established: 1981,
    image: 'https://media.collegedekho.com/media/img/institute/crawled_images/international-management-institute-imi-new-delhi.jpg?width=1080',
    imageStatus: 'Retained verified authentic Qutab Institutional Area campus photo',
    notes: 'Premier business school (AMBA & NBA accredited). Normalized name from abbreviated tag; purged dummy phone and synthetic domain; retained authentic campus photo; audited flagship PGDM programs.'
  },
  {
    id: 252,
    name: 'Indian Institute of Mass Communication, New Delhi (IIMC New Delhi)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Public/Government',
    website: 'https://iimc.gov.in/',
    phone: '011-26742920',
    rating: 4.8,
    established: 1965,
    image: '/images/campuses/campus_architecture_9.jpg',
    imageStatus: 'Retained generic campus architecture',
    notes: 'Apex mass communication institute under Ministry of Information & Broadcasting (Deemed University). Remediated from entrance exam title "IIMC Entrance Exam 2026"; purged dummy phone and raw search URL; audited statutory journalism diplomas.'
  },
  {
    id: 253,
    name: 'Ayurvedic and Unani Tibbia College, Karol Bagh, New Delhi',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Public/Government',
    website: 'http://autc.delhi.gov.in/',
    phone: '011-25722421',
    rating: 4.6,
    established: 1921,
    image: '',
    imageStatus: 'Purged Koshys Bangalore leak',
    notes: 'Historic State Government AYUSH College (est. 1921, affiliated to University of Delhi). Restored Public status from Private; purged Koshys Bangalore photo leak, dummy phone, and raw search URL; purged fake MBBS and restored statutory BAMS and BUMS curricula (₹3,500/Yr).'
  },
  {
    id: 254,
    name: 'Atal Bihari Vajpayee Institute of Medical Sciences and Dr. RML Hospital',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Public/Government',
    website: 'https://abvims-rmlh.gov.in/',
    phone: '011-23404286',
    rating: 4.8,
    established: 2008,
    image: '',
    imageStatus: 'Purged generic photo',
    notes: 'Premier Central Government Medical College under MoHFW, Govt of India (affiliated to GGSIPU). Restored Public status from Private; purged dummy phone and raw search URL; audited statutory central govt MBBS fee (₹38k/Yr).'
  },
  {
    id: 255,
    name: 'Hamdard Institute of Medical Sciences And Research (HIMSR New Delhi)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Deemed',
    website: 'https://www.himsr.co.in/',
    phone: '011-29901074',
    rating: 4.6,
    established: 2012,
    image: '',
    imageStatus: 'Purged Sheila Raheja Bandra leak',
    notes: 'Constituent medical college of Jamia Hamdard Deemed University. Purged Sheila Raheja Bandra photo leak; audited NMC-approved MBBS and MD/MS fee structures.'
  },
  {
    id: 256,
    name: 'Impact Paramedical and Health Institute, Delhi (IPHI Delhi)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Private',
    website: 'https://iphi.edu.in/',
    phone: '+91 9910335982',
    rating: 4.2,
    established: 2007,
    image: '/images/campuses/campus_architecture_5.jpg',
    imageStatus: 'Retained generic campus architecture',
    notes: 'Allied health and paramedical institute. Purged fake MBBS courses and restored authentic BMLT, BRIT, and DOTT diploma/degree programs.'
  },
  {
    id: 257,
    name: 'Institute of Clinical Research India, New Delhi (ICRI New Delhi)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Private',
    website: 'https://www.icriindia.com/',
    phone: '011-46006000',
    rating: 4.1,
    established: 2004,
    image: 'https://media.collegedekho.com/media/img/institute/crawled_images/None/ICRI_New_Delhi_Akash_Hospital-_New_Delhi_.jpg?width=640',
    imageStatus: 'Retained verified authentic campus photo',
    notes: 'Clinical research and healthcare management institute. Purged raw search URL; retained authentic campus image; purged fake MBBS courses and restored M.Sc Clinical Research and MBA Healthcare.'
  },
  {
    id: 258,
    name: 'DIT University, Dehradun',
    state: 'Uttarakhand',
    city: 'Dehradun',
    type: 'Private',
    website: 'https://www.dituniversity.edu.in/',
    phone: '0135-7144000',
    rating: 4.4,
    established: 1998,
    image: 'https://img.studyclap.com/img/institute/university/original/7809/dit-new-delhi-01576f4c58.jpg',
    imageStatus: 'Retained authentic campus photo',
    notes: 'Premier State Private University in Uttarakhand (NAAC A). Corrected state from Delhi NCR to Uttarakhand; corrected type from Public to Private; purged fake MBBS courses and restored B.Tech, B.Arch, and Pharmacy curricula.'
  }
];

const batch68Courses = [
  // 248 JIMS Kalkaji
  { collegeId: 248, title: 'Post Graduate Diploma in Management (PGDM)', division: 'Postgraduate', duration: '2 Years', fees: '₹4,35,000/Year', eligibility: 'Graduation with 50% + CAT/MAT/XAT/CMAT/ATMA', exams: 'CAT, MAT, XAT, CMAT', intake: '120' },
  { collegeId: 248, title: 'Bachelor of Business Administration (BBA)', division: 'Undergraduate', duration: '3 Years', fees: '₹1,15,000/Year', eligibility: '10+2 with 50% + GGSIPU CET / CUET UG', exams: 'IPU CET, CUET UG', intake: '120' },
  { collegeId: 248, title: 'Bachelor of Computer Applications (BCA)', division: 'Undergraduate', duration: '3 Years', fees: '₹1,10,000/Year', eligibility: '10+2 with Mathematics/CS + GGSIPU CET', exams: 'IPU CET, CUET UG', intake: '120' },

  // 249 IGDTUW Delhi
  { collegeId: 249, title: 'B.Tech in Computer Science and Engineering (CSE / AI)', division: 'Undergraduate', duration: '4 Years', fees: '₹1,35,000/Year', eligibility: '10+2 with PCM (60%+) + JEE Main / JAC Delhi', exams: 'JEE Main, JAC Delhi', intake: '240' },
  { collegeId: 249, title: 'B.Tech in Information Technology / ECE', division: 'Undergraduate', duration: '4 Years', fees: '₹1,35,000/Year', eligibility: '10+2 with PCM + JEE Main / JAC Delhi', exams: 'JEE Main, JAC Delhi', intake: '240' },
  { collegeId: 249, title: 'Bachelor of Architecture (B.Arch)', division: 'Undergraduate', duration: '5 Years', fees: '₹1,40,000/Year', eligibility: '10+2 with PCM + JEE Main Paper 2 / JAC Delhi', exams: 'JEE Main Paper 2', intake: '40' },
  { collegeId: 249, title: 'M.Tech in Artificial Intelligence / Information Security', division: 'Postgraduate', duration: '2 Years', fees: '₹1,10,000/Year', eligibility: 'B.Tech in relevant branch + GATE', exams: 'GATE', intake: '60' },

  // 250 IMI New Delhi
  { collegeId: 250, title: 'Post Graduate Diploma in Management (PGDM)', division: 'Postgraduate', duration: '2 Years', fees: '₹10,25,000/Year', eligibility: 'Graduation with 50% + CAT (90+ %ile) / GMAT', exams: 'CAT, GMAT', intake: '360' },
  { collegeId: 250, title: 'PGDM in Human Resource Management (PGDM-HRM)', division: 'Postgraduate', duration: '2 Years', fees: '₹10,25,000/Year', eligibility: 'Graduation with 50% + CAT / GMAT', exams: 'CAT, GMAT', intake: '60' },
  { collegeId: 250, title: 'PGDM in Banking and Financial Services (PGDM-B&FS)', division: 'Postgraduate', duration: '2 Years', fees: '₹10,25,000/Year', eligibility: 'Graduation with 50% + CAT / GMAT', exams: 'CAT, GMAT', intake: '60' },

  // 252 IIMC New Delhi
  { collegeId: 252, title: 'PG Diploma in English Journalism', division: 'Postgraduate', duration: '1 Year', fees: '₹95,000 Total', eligibility: 'Bachelor degree in any discipline + CUET PG', exams: 'CUET PG', intake: '68' },
  { collegeId: 252, title: 'PG Diploma in Advertising and Public Relations', division: 'Postgraduate', duration: '1 Year', fees: '₹1,35,000 Total', eligibility: 'Bachelor degree in any discipline + CUET PG', exams: 'CUET PG', intake: '77' },
  { collegeId: 252, title: 'PG Diploma in Radio & TV Journalism', division: 'Postgraduate', duration: '1 Year', fees: '₹1,60,000 Total', eligibility: 'Bachelor degree in any discipline + CUET PG', exams: 'CUET PG', intake: '68' },
  { collegeId: 252, title: 'PG Diploma in Hindi Journalism', division: 'Postgraduate', duration: '1 Year', fees: '₹55,000 Total', eligibility: 'Bachelor degree in any discipline + CUET PG', exams: 'CUET PG', intake: '68' },

  // 253 Ayurvedic and Unani Tibbia College
  { collegeId: 253, title: 'Bachelor of Ayurvedic Medicine and Surgery (BAMS)', division: 'Undergraduate', duration: '5.5 Years', fees: '₹3,500/Year', eligibility: '10+2 with 50% in PCB + NEET UG', exams: 'NEET UG', intake: '75' },
  { collegeId: 253, title: 'Bachelor of Unani Medicine and Surgery (BUMS)', division: 'Undergraduate', duration: '5.5 Years', fees: '₹3,500/Year', eligibility: '10+2 with 50% in PCB + Urdu + NEET UG', exams: 'NEET UG', intake: '75' },
  { collegeId: 253, title: 'MD / MS (Ayurveda & Unani Postgraduate)', division: 'Postgraduate', duration: '3 Years', fees: '₹12,000/Year', eligibility: 'BAMS/BUMS degree + AIAPGET', exams: 'AIAPGET', intake: '30' },

  // 254 ABVIMS & Dr. RML Hospital
  { collegeId: 254, title: 'Bachelor of Medicine and Bachelor of Surgery (MBBS)', division: 'Undergraduate', duration: '5.5 Years', fees: '₹38,000/Year', eligibility: '10+2 with 50% in PCB + NEET UG (99.8+ %ile)', exams: 'NEET UG', intake: '100' },
  { collegeId: 254, title: 'MD / MS Postgraduate Medical Programs', division: 'Postgraduate', duration: '3 Years', fees: '₹26,000/Year', eligibility: 'MBBS degree + NEET PG', exams: 'NEET PG', intake: '140' },
  { collegeId: 254, title: 'DM / M.Ch Super-specialty Programs', division: 'Super-specialty', duration: '3 Years', fees: '₹30,000/Year', eligibility: 'MD/MS in relevant branch + NEET SS', exams: 'NEET SS', intake: '45' },

  // 255 HIMSR New Delhi
  { collegeId: 255, title: 'Bachelor of Medicine and Bachelor of Surgery (MBBS)', division: 'Undergraduate', duration: '5.5 Years', fees: '₹16,00,000/Year', eligibility: '10+2 with 50% in PCB + NEET UG', exams: 'NEET UG', intake: '150' },
  { collegeId: 255, title: 'MD / MS Postgraduate Medical Programs', division: 'Postgraduate', duration: '3 Years', fees: '₹25,00,000/Year', eligibility: 'MBBS Degree + NEET PG', exams: 'NEET PG', intake: '45' },
  { collegeId: 255, title: 'B.Sc Medical Laboratory Techniques / Emergency Care', division: 'Undergraduate', duration: '3 Years', fees: '₹1,20,000/Year', eligibility: '10+2 with PCB', exams: 'Merit / NEET', intake: '60' },

  // 256 IPHI Delhi
  { collegeId: 256, title: 'B.Sc in Medical Laboratory Technology (BMLT)', division: 'Undergraduate', duration: '3 Years', fees: '₹85,000/Year', eligibility: '10+2 with PCB/PCM with 45%', exams: 'Merit', intake: '60' },
  { collegeId: 256, title: 'B.Sc in Radiology and Imaging Technology (BRIT)', division: 'Undergraduate', duration: '3 Years', fees: '₹95,000/Year', eligibility: '10+2 with PCB', exams: 'Merit', intake: '40' },
  { collegeId: 256, title: 'Diploma in Operation Theatre Technology (DOTT)', division: 'Diploma', duration: '2 Years', fees: '₹65,000/Year', eligibility: '10+2 in Science stream', exams: 'Merit', intake: '50' },

  // 257 ICRI New Delhi
  { collegeId: 257, title: 'M.Sc in Clinical Research & Pharmacovigilance', division: 'Postgraduate', duration: '2 Years', fees: '₹1,75,000/Year', eligibility: 'B.Sc in Life Sciences/MBBS/B.Pharm with 50%', exams: 'Entrance / PI', intake: '40' },
  { collegeId: 257, title: 'MBA in Healthcare and Hospital Management', division: 'Postgraduate', duration: '2 Years', fees: '₹2,25,000/Year', eligibility: 'Graduation in any discipline with 50%', exams: 'CAT, MAT, CMAT', intake: '60' },
  { collegeId: 257, title: 'B.Sc in Clinical Research & Healthcare', division: 'Undergraduate', duration: '3 Years', fees: '₹1,10,000/Year', eligibility: '10+2 with PCB', exams: 'Merit', intake: '40' },

  // 258 DIT University Dehradun
  { collegeId: 258, title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹2,25,000/Year', eligibility: '10+2 with PCM + JEE Main / Merit', exams: 'JEE Main', intake: '360' },
  { collegeId: 258, title: 'Bachelor of Architecture (B.Arch)', division: 'Undergraduate', duration: '5 Years', fees: '₹1,85,000/Year', eligibility: '10+2 with PCM + NATA / JEE Main Paper 2', exams: 'NATA, JEE Main Paper 2', intake: '40' },
  { collegeId: 258, title: 'Bachelor of Pharmacy (B.Pharm)', division: 'Undergraduate', duration: '4 Years', fees: '₹1,55,000/Year', eligibility: '10+2 with PCB/PCM', exams: 'Merit', intake: '100' },
  { collegeId: 258, title: 'Master of Computer Applications (MCA)', division: 'Postgraduate', duration: '2 Years', fees: '₹1,35,000/Year', eligibility: 'Graduation with BCA/B.Sc with Math', exams: 'Merit', intake: '60' }
];

// Append to CSVs
for (const col of batch68Colleges) {
  const line = `"${col.id}","${col.name.replace(/"/g, '""')}","${col.state}","${col.city}","${col.type}","${col.website}","${col.phone}","${col.rating}","${col.established}","VERIFIED","Batch 68"\n`;
  fs.appendFileSync(collegeCsvFile, line, 'utf8');

  const imgLine = `"${col.id}","${col.name.replace(/"/g, '""')}","${col.image}","${col.imageStatus}","Batch 68"\n`;
  fs.appendFileSync(imageCsvFile, imgLine, 'utf8');
}

for (const crs of batch68Courses) {
  const crsLine = `"${crs.collegeId}","${crs.title.replace(/"/g, '""')}","${crs.division}","${crs.duration}","${crs.fees}","${crs.eligibility.replace(/"/g, '""')}","${crs.exams}","${crs.intake}","VERIFIED","Batch 68"\n`;
  fs.appendFileSync(courseCsvFile, crsLine, 'utf8');
}

// Update progress
const newIds = batch68Colleges.map(c => c.id);
const uniqueCompleted = Array.from(new Set([...progress.completed_ids, ...newIds]));
progress.completed_ids = uniqueCompleted;
progress.total_verified = uniqueCompleted.length;
progress.current_batch = 68;
progress.last_updated = new Date().toISOString();

fs.writeFileSync(progressFile, JSON.stringify(progress, null, 2), 'utf8');

console.log(`Appended 10 colleges to college-verification.csv`);
console.log(`Appended ${batch68Courses.length} courses to course-verification.csv`);
console.log(`Updated progress.json: total_verified = ${progress.total_verified}, current_batch = ${progress.current_batch}`);
