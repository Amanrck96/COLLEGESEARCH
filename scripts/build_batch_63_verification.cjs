const fs = require('fs');
const path = require('path');

const progressFile = path.join(__dirname, '..', 'reports', 'verification', 'progress.json');
const collegeCsvFile = path.join(__dirname, '..', 'reports', 'verification', 'college-verification.csv');
const courseCsvFile = path.join(__dirname, '..', 'reports', 'verification', 'course-verification.csv');
const imageCsvFile = path.join(__dirname, '..', 'reports', 'verification', 'image-verification.csv');

const progress = JSON.parse(fs.readFileSync(progressFile, 'utf8'));

const batch63Colleges = [
  {
    id: 194,
    name: 'Datta Meghe Medical College, Nagpur',
    state: 'Maharashtra',
    city: 'Nagpur',
    type: 'Deemed',
    website: 'https://dmmcnagpur.com/',
    phone: '+91 7104 223101',
    rating: 4.5,
    established: 2020,
    image: '',
    imageStatus: 'Purged Sailee College leak',
    notes: 'Off-campus constituent of DMIHER Deemed to be University. NMC approved. Verified medical fee structures.'
  },
  {
    id: 195,
    name: 'Seth G S Medical College',
    state: 'Maharashtra',
    city: 'Mumbai',
    type: 'Public',
    website: 'https://www.kem.edu',
    phone: '022-24107000',
    rating: 4.8,
    established: 1926,
    image: '',
    imageStatus: 'Purged KES Shroff leak',
    notes: 'Premier municipal medical college attached to KEM Hospital under MCGM/BMC. Affiliated with MUHS. Mislabeled Private in scraper; restored Public status and statutory fees.'
  },
  {
    id: 196,
    name: 'Lokmanya Tilak Municipal Medical College',
    state: 'Maharashtra',
    city: 'Mumbai',
    type: 'Public',
    website: 'https://ltmmc.edu.in',
    phone: '022-24076381',
    rating: 4.8,
    established: 1947,
    image: '',
    imageStatus: 'Purged KES Shroff leak',
    notes: 'Iconic municipal medical college and general hospital (Sion Hospital) under MCGM/BMC. Affiliated with MUHS. Mislabeled Private in scraper; restored Public status and statutory fees.'
  },
  {
    id: 197,
    name: "MET's Institute of D. Pharmacy, Adgaon, Nashik",
    state: 'Maharashtra',
    city: 'Nashik',
    type: 'Private',
    website: 'https://metbhujbalknowledgecity.ac.in/iop/',
    phone: '0253-2555810',
    rating: 4.3,
    established: 2006,
    image: '',
    imageStatus: 'Purged Sir JJ Art leak',
    notes: 'Mumbai Educational Trust (MET) Bhujbal Knowledge City Nashik. Approved by PCI & MSBTE. Corrected fake MBBS course to D.Pharm and B.Pharm.'
  },
  {
    id: 198,
    name: 'Symbiosis Institute of Health Sciences, Symbiosis International, Pune',
    state: 'Maharashtra',
    city: 'Pune',
    type: 'Deemed',
    website: 'https://www.sihs.edu.in/',
    phone: '020-66975040',
    rating: 4.6,
    established: 2006,
    image: 'https://image-static.collegedunia.com/public/college_data/images/campusimage/170374193811SCHS.jpg',
    imageStatus: 'Retained verified authentic SIHS campus photo',
    notes: 'Constituent of Symbiosis International Deemed University. Corrected copy-pasted MBBS courses to authentic healthcare MBA and B.Sc/M.Sc Medical Technology.'
  },
  {
    id: 199,
    name: 'MGM School of Biomedical Sciences, Aurangabad',
    state: 'Maharashtra',
    city: 'Chhatrapati Sambhajinagar',
    type: 'Private',
    website: 'https://mgmsbsa.ac.in/',
    phone: '0240-6601100',
    rating: 4.4,
    established: 2007,
    image: 'https://www.collegebatch.com/static/clg-gallery/mgm-university-aurangabad-306676.webp',
    imageStatus: 'Retained verified MGM University campus photo',
    notes: 'Constituent school of MGM University. Replaced fake MBBS courses with authentic Allied Health and Biomedical Sciences degrees.'
  },
  {
    id: 200,
    name: 'SNJB Shriman Sureshdada Jain College of Pharmacy, Nashik',
    state: 'Maharashtra',
    city: 'Nashik',
    type: 'Private',
    website: 'https://snjb.org/pharmacy/',
    phone: '02556-252529',
    rating: 4.4,
    established: 1999,
    image: 'https://media.collegedekho.com/media/img/institute/crawled_images/SNJBs_Shriman_Suresh_Dada_Jain_College_of_Pharmacy.jpg?width=640',
    imageStatus: 'Retained verified SNJB campus photo',
    notes: 'Approved by PCI & AICTE, affiliated with SPPU. Corrected fake MBBS courses to B.Pharm, M.Pharm, and Ph.D.'
  },
  {
    id: 201,
    name: 'C.U. Shah College of Pharmacy, SNDT Women University, Mumbai',
    state: 'Maharashtra',
    city: 'Mumbai',
    type: 'Public',
    website: 'https://cushahpharmacy.ac.in/',
    phone: '022-26609577',
    rating: 4.6,
    established: 1980,
    image: '/images/campuses/campus_cu_shah_mumbai.png',
    imageStatus: 'Retained verified genuine campus photo',
    notes: 'Premier women pharmacy institution conducted by SNDT Women University (State Public). Retained authentic campus photo; corrected fake MBBS course to B.Pharm and M.Pharm.'
  },
  {
    id: 202,
    name: 'Veritas Skill Institute, Mumbai',
    state: 'Maharashtra',
    city: 'Mumbai',
    type: 'Private',
    website: 'https://veritas-skills.com',
    phone: '+91 8591223636',
    rating: 4.1,
    established: 2018,
    image: '/images/campuses/campus_architecture_5.jpg',
    imageStatus: 'Retained generic campus architecture',
    notes: 'Vocational skill development and professional diploma provider. Purged fake MBBS degree and restored vocational IT/data certifications.'
  },
  {
    id: 203,
    name: 'Rashtrasant Tukadoji Maharaj Nagpur University',
    state: 'Maharashtra',
    city: 'Nagpur',
    type: 'Public/Government',
    website: 'https://www.nagpuruniversity.ac.in/',
    phone: '0712-2500736',
    rating: 4.6,
    established: 1923,
    image: '',
    imageStatus: 'Purged Sailee College leak',
    notes: 'Centenary State Public University (est 1923, NAAC A). Purged Sailee College photo leak and replaced fake MBBS course with university B.Tech, M.Sc, MBA, and Law offerings.'
  }
];

const batch63Courses = [
  // 194 Datta Meghe Medical College
  { collegeId: 194, title: 'Bachelor of Medicine and Bachelor of Surgery (MBBS)', division: 'Undergraduate', duration: '5.5 Years', fees: '₹21,50,000/Year', eligibility: '10+2 with 50% in PCB + NEET UG', exams: 'NEET UG', intake: '150' },
  { collegeId: 194, title: 'MD / MS Postgraduate Medical Degree', division: 'Postgraduate', duration: '3 Years', fees: '₹28,00,000/Year', eligibility: 'MBBS Degree + NEET PG', exams: 'NEET PG', intake: '30' },
  { collegeId: 194, title: 'B.Sc Medical Radiology & Imaging Technology', division: 'Undergraduate', duration: '3 Years', fees: '₹1,20,000/Year', eligibility: '10+2 with PCB', exams: 'Merit', intake: '40' },

  // 195 Seth G S Medical College
  { collegeId: 195, title: 'Bachelor of Medicine and Bachelor of Surgery (MBBS)', division: 'Undergraduate', duration: '5.5 Years', fees: '₹1,35,000/Year', eligibility: '10+2 with 50% in PCB + NEET UG', exams: 'NEET UG', intake: '250' },
  { collegeId: 195, title: 'MD / MS Postgraduate Degree Programs', division: 'Postgraduate', duration: '3 Years', fees: '₹1,10,000/Year', eligibility: 'MBBS Degree + NEET PG', exams: 'NEET PG', intake: '180' },
  { collegeId: 195, title: 'DM / M.Ch Super-specialty Programs', division: 'Super-specialty', duration: '3 Years', fees: '₹1,25,000/Year', eligibility: 'MD/MS in relevant branch + NEET SS', exams: 'NEET SS', intake: '60' },

  // 196 Lokmanya Tilak Municipal Medical College
  { collegeId: 196, title: 'Bachelor of Medicine and Bachelor of Surgery (MBBS)', division: 'Undergraduate', duration: '5.5 Years', fees: '₹1,35,000/Year', eligibility: '10+2 with 50% in PCB + NEET UG', exams: 'NEET UG', intake: '200' },
  { collegeId: 196, title: 'MD / MS Postgraduate Degree Programs', division: 'Postgraduate', duration: '3 Years', fees: '₹1,10,000/Year', eligibility: 'MBBS Degree + NEET PG', exams: 'NEET PG', intake: '150' },
  { collegeId: 196, title: 'Bachelor of Physiotherapy (BPT) / Occupational Therapy (BOT)', division: 'Undergraduate', duration: '4.5 Years', fees: '₹55,000/Year', eligibility: '10+2 with PCB + NEET UG', exams: 'NEET UG', intake: '60' },

  // 197 MET's Institute of D. Pharmacy
  { collegeId: 197, title: 'Diploma in Pharmacy (D.Pharm)', division: 'Diploma', duration: '2 Years', fees: '₹85,000/Year', eligibility: '10+2 Science (PCB/PCM)', exams: 'Merit / CAP', intake: '60' },
  { collegeId: 197, title: 'Bachelor of Pharmacy (B.Pharm)', division: 'Undergraduate', duration: '4 Years', fees: '₹1,15,000/Year', eligibility: '10+2 with 45% in PCB/PCM + MHT CET / NEET', exams: 'MHT CET, NEET', intake: '100' },

  // 198 Symbiosis Institute of Health Sciences
  { collegeId: 198, title: 'MBA in Hospital and Healthcare Management (HHM)', division: 'Postgraduate', duration: '2 Years', fees: '₹5,80,000/Year', eligibility: 'Bachelor degree with minimum 50% + SNAP', exams: 'SNAP', intake: '120' },
  { collegeId: 198, title: 'B.Sc Medical Technology', division: 'Undergraduate', duration: '3 Years', fees: '₹1,75,000/Year', eligibility: '10+2 with Physics, Chemistry, Biology + SET', exams: 'SET', intake: '90' },
  { collegeId: 198, title: 'M.Sc Medical Technology', division: 'Postgraduate', duration: '2 Years', fees: '₹2,20,000/Year', eligibility: 'B.Sc in relevant Life Science discipline', exams: 'Entrance Test + PI', intake: '40' },

  // 199 MGM School of Biomedical Sciences
  { collegeId: 199, title: 'B.Sc Allied Health Sciences (MLT, OTT, Dialysis)', division: 'Undergraduate', duration: '3 Years', fees: '₹95,000/Year', eligibility: '10+2 with PCB', exams: 'MGM CET / Merit', intake: '60' },
  { collegeId: 199, title: 'M.Sc Medical Biotechnology / Clinical Research', division: 'Postgraduate', duration: '2 Years', fees: '₹1,20,000/Year', eligibility: 'B.Sc in Biological Sciences', exams: 'Entrance Exam', intake: '30' },
  { collegeId: 199, title: 'B.Sc Cardiac Care Technology', division: 'Undergraduate', duration: '3 Years', fees: '₹1,10,000/Year', eligibility: '10+2 with PCB', exams: 'Merit', intake: '30' },

  // 200 SNJB Shriman Sureshdada Jain College of Pharmacy
  { collegeId: 200, title: 'Bachelor of Pharmacy (B.Pharm)', division: 'Undergraduate', duration: '4 Years', fees: '₹1,05,000/Year', eligibility: '10+2 with PCB/PCM + MHT CET / NEET', exams: 'MHT CET, NEET', intake: '100' },
  { collegeId: 200, title: 'M.Pharm (Pharmaceutics / Quality Assurance)', division: 'Postgraduate', duration: '2 Years', fees: '₹1,15,000/Year', eligibility: 'B.Pharm with 55% + GPAT', exams: 'GPAT', intake: '36' },
  { collegeId: 200, title: 'Ph.D in Pharmaceutical Sciences', division: 'Doctoral', duration: '3-5 Years', fees: '₹80,000/Year', eligibility: 'M.Pharm degree + SPPU PET', exams: 'SPPU PET', intake: '10' },

  // 201 C.U. Shah College of Pharmacy
  { collegeId: 201, title: 'Bachelor of Pharmacy (B.Pharm - Women Only)', division: 'Undergraduate', duration: '4 Years', fees: '₹65,000/Year', eligibility: '10+2 with PCB/PCM + MHT CET / NEET (Female candidates)', exams: 'MHT CET, NEET', intake: '60' },
  { collegeId: 201, title: 'M.Pharm in Pharmaceutics / Quality Assurance', division: 'Postgraduate', duration: '2 Years', fees: '₹90,000/Year', eligibility: 'B.Pharm with 55% + GPAT (Female candidates)', exams: 'GPAT', intake: '30' },
  { collegeId: 201, title: 'Ph.D in Pharmacy', division: 'Doctoral', duration: '3-5 Years', fees: '₹45,000/Year', eligibility: 'M.Pharm degree + PET / NET', exams: 'PET, NET', intake: '10' },

  // 202 Veritas Skill Institute
  { collegeId: 202, title: 'Certificate in Digital Marketing & Growth Strategy', division: 'Certificate', duration: '6 Months', fees: '₹45,000 Total', eligibility: '10+2 or Graduation in any discipline', exams: 'Direct Admission', intake: '40' },
  { collegeId: 202, title: 'Diploma in Data Analytics & Business Intelligence', division: 'Diploma', duration: '1 Year', fees: '₹85,000 Total', eligibility: 'Graduation in Science/Commerce/Engineering', exams: 'Aptitude Assessment', intake: '30' },
  { collegeId: 202, title: 'Professional Certificate in Full-Stack Web Development', division: 'Certificate', duration: '6 Months', fees: '₹60,000 Total', eligibility: 'Basic computer aptitude + 10+2', exams: 'Direct Admission', intake: '35' },

  // 203 Rashtrasant Tukadoji Maharaj Nagpur University
  { collegeId: 203, title: 'B.Tech / B.E. (LIT & University Departments)', division: 'Undergraduate', duration: '4 Years', fees: '₹45,000/Year', eligibility: '10+2 with PCM + MHT CET / JEE Main', exams: 'MHT CET, JEE Main', intake: '300' },
  { collegeId: 203, title: 'Master of Science (M.Sc - Physics, Chemistry, Biotech)', division: 'Postgraduate', duration: '2 Years', fees: '₹18,000/Year', eligibility: 'B.Sc in relevant subject with 50%', exams: 'Merit / Entrance', intake: '240' },
  { collegeId: 203, title: 'Master of Business Administration (MBA)', division: 'Postgraduate', duration: '2 Years', fees: '₹35,000/Year', eligibility: 'Graduation with 50% + MAH MBA CET', exams: 'MAH MBA CET', intake: '60' },
  { collegeId: 203, title: 'Master of Laws (LL.M)', division: 'Postgraduate', duration: '2 Years', fees: '₹15,000/Year', eligibility: 'LL.B degree with minimum 50%', exams: 'University Entrance', intake: '50' }
];

// Append to CSVs
for (const col of batch63Colleges) {
  const line = `"${col.id}","${col.name.replace(/"/g, '""')}","${col.state}","${col.city}","${col.type}","${col.website}","${col.phone}","${col.rating}","${col.established}","VERIFIED","Batch 63"\n`;
  fs.appendFileSync(collegeCsvFile, line, 'utf8');

  const imgLine = `"${col.id}","${col.name.replace(/"/g, '""')}","${col.image}","${col.imageStatus}","Batch 63"\n`;
  fs.appendFileSync(imageCsvFile, imgLine, 'utf8');
}

for (const crs of batch63Courses) {
  const crsLine = `"${crs.collegeId}","${crs.title.replace(/"/g, '""')}","${crs.division}","${crs.duration}","${crs.fees}","${crs.eligibility.replace(/"/g, '""')}","${crs.exams}","${crs.intake}","VERIFIED","Batch 63"\n`;
  fs.appendFileSync(courseCsvFile, crsLine, 'utf8');
}

// Update progress
const newIds = batch63Colleges.map(c => c.id);
const uniqueCompleted = Array.from(new Set([...progress.completed_ids, ...newIds]));
progress.completed_ids = uniqueCompleted;
progress.total_verified = uniqueCompleted.length;
progress.current_batch = 63;
progress.last_updated = new Date().toISOString();

fs.writeFileSync(progressFile, JSON.stringify(progress, null, 2), 'utf8');

console.log(`Appended 10 colleges to college-verification.csv`);
console.log(`Appended ${batch63Courses.length} courses to course-verification.csv`);
console.log(`Updated progress.json: total_verified = ${progress.total_verified}, current_batch = ${progress.current_batch}`);
