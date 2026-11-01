const fs = require('fs');
const path = require('path');

const progressFile = path.join(__dirname, '..', 'reports', 'verification', 'progress.json');
const collegeCsvFile = path.join(__dirname, '..', 'reports', 'verification', 'college-verification.csv');
const courseCsvFile = path.join(__dirname, '..', 'reports', 'verification', 'course-verification.csv');
const imageCsvFile = path.join(__dirname, '..', 'reports', 'verification', 'image-verification.csv');

const progress = JSON.parse(fs.readFileSync(progressFile, 'utf8'));

const batch69Colleges = [
  {
    id: 259,
    name: 'Delhi Pharmaceutical Sciences and Research University (DPSRU)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Public/Government',
    website: 'https://dpsru.edu.in/',
    phone: '011-29553771',
    rating: 4.6,
    established: 1964,
    image: 'https://img.jagranjosh.com/images/2022/December/13122022/Delhi-Pharmaceutical-Sciences-and-Research-University-New-Delhi-Campus-View.jpg',
    imageStatus: 'Retained verified authentic campus photo',
    notes: 'State Public Pharmacy University under Govt of NCT of Delhi (NAAC A). Corrected inverted Private label to Public/Government; purged dummy phone and raw search URL; purged fake MBBS courses and restored statutory B.Pharm, BPT, and M.Pharm degrees.'
  },
  {
    id: 260,
    name: 'Army College of Medical Sciences (ACMS New Delhi)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Private',
    website: 'https://theacms.in/',
    phone: '011-25687644',
    rating: 4.7,
    established: 2008,
    image: 'https://image-static.collegedunia.com/public/image/ACMS_DELHI_CAmpus_110b2c027ea8971db9fb66c6385c0893.jpg',
    imageStatus: 'Retained verified authentic ACMS campus photo',
    notes: 'Army Welfare Education Society (AWES), affiliated to GGSIPU, NMC approved. Normalized acronym to full title; retained authentic campus photo; audited subsidized AWES MBBS tuition.'
  },
  {
    id: 261,
    name: 'University College of Medical Sciences, University of Delhi (UCMS)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Public/Government',
    website: 'https://ucms.ac.in/',
    phone: '011-22582106',
    rating: 4.9,
    established: 1971,
    image: '',
    imageStatus: 'Purged UPG Vile Parle leak',
    notes: 'Constituent Central Government Medical College under University of Delhi (attached to GTB Hospital). Purged UPG Vile Parle photo leak; updated portal; replaced generic fee with statutory central govt fee (₹7k/Yr).'
  },
  {
    id: 262,
    name: 'Max Institute of Medical Excellence, Saket, New Delhi',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Private',
    website: 'https://www.maxhealthcare.in/academics',
    phone: '011-26515050',
    rating: 4.3,
    established: 2010,
    image: '/images/campuses/campus_architecture_2.jpg',
    imageStatus: 'Retained generic campus architecture',
    notes: 'Max Healthcare academic and medical training wing. Purged dummy phone and raw search URL; purged fake MBBS courses and restored DNB residency, DMLT, and PGDEMS training programs.'
  },
  {
    id: 263,
    name: 'Creative & Innovative Skill Foundation, New Delhi (CIS Foundation)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Private',
    website: 'https://cisfoundation.org/',
    phone: '011-41006655',
    rating: 4.0,
    established: 2016,
    image: '',
    imageStatus: 'Purged Chetana Bandra leak',
    notes: 'Vocational healthcare and paramedic foundation. Purged Chetana Bandra photo leak, dummy phone, and raw search URL; purged fake MBBS courses and restored authentic GDA and phlebotomy certifications.'
  },
  {
    id: 264,
    name: 'Jamia Hamdard (Deemed-to-be-University), New Delhi',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Deemed',
    website: 'https://www.jamiahamdard.ac.in/',
    phone: '011-26059688',
    rating: 4.7,
    established: 1989,
    image: '/images/campuses/campus_architecture_4.jpg',
    imageStatus: 'Retained generic campus architecture',
    notes: 'Category-I Deemed to be University (NIRF #1 Pharmacy, NAAC A+). Purged generic fake MBBS courses and restored SPER B.Pharm, SEST B.Tech, and SUMER BUMS curricula.'
  },
  {
    id: 265,
    name: 'Lady Hardinge Medical College, University of Delhi (LHMC)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Public/Government',
    website: 'http://lhmc-hosp.gov.in/',
    phone: '011-23363728',
    rating: 4.9,
    established: 1916,
    image: '',
    imageStatus: 'Purged BMS Bangalore leak',
    notes: 'Historic Central Government Medical College under MoHFW, Govt of India (attached to SSK Hospital, affiliated to DU). Purged BMS Bangalore photo leak; updated portal; replaced generic fee with statutory central govt fee (₹1,400/Yr).'
  },
  {
    id: 266,
    name: 'Institute of Liver and Biliary Sciences, New Delhi (ILBS)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Public/Government',
    website: 'https://www.ilbs.in/',
    phone: '011-46300000',
    rating: 4.8,
    established: 2009,
    image: 'https://img.jagranjosh.com/images/2023/January/1612023/Institute-of-Liver-and-Biliary-Sciences-New-Delhi-Campus-View-2.png',
    imageStatus: 'Retained verified authentic ILBS campus photo',
    notes: 'Autonomous mono-super-specialty hospital and Deemed University under Govt of NCT of Delhi. Restored Public/Government status from Private; purged dummy phone and raw search URL; retained genuine campus photo; restored DM, M.Ch, and PDCC programs.'
  },
  {
    id: 267,
    name: 'Max Institute of Medical Excellence, Rohini, New Delhi',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Private',
    website: 'https://www.maxhealthcare.in/academics',
    phone: '011-66422222',
    rating: 4.2,
    established: 2012,
    image: '/images/campuses/campus_architecture_7.jpg',
    imageStatus: 'Retained generic campus architecture',
    notes: 'Max Healthcare academic training at Max Hospital Rohini. Purged dummy phone and raw search URL; purged fake MBBS courses and restored DNB residency and imaging diplomas.'
  },
  {
    id: 268,
    name: 'Delhi Paramedical and Management Institute, New Delhi (DPMI)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Private',
    website: 'https://www.dpmiindia.com/',
    phone: '011-45007700',
    rating: 4.2,
    established: 1996,
    image: 'https://media.collegedekho.com/media/img/institute/crawled_images/Delhi_Paramedical__Management_Institute1.jpg?width=640',
    imageStatus: 'Retained verified authentic campus photo',
    notes: 'Technical and allied health training institute. Purged dummy phone; retained genuine campus photo; purged fake MBBS courses and restored DMLT, DOTT, and B.Voc programs.'
  }
];

const batch69Courses = [
  // 259 DPSRU Delhi
  { collegeId: 259, title: 'Bachelor of Pharmacy (B.Pharm - DIPSAR/DPSRU)', division: 'Undergraduate', duration: '4 Years', fees: '₹48,000/Year', eligibility: '10+2 with PCB/PCM (55%+) + Merit', exams: 'Merit', intake: '120' },
  { collegeId: 259, title: 'Bachelor of Physiotherapy (BPT)', division: 'Undergraduate', duration: '4.5 Years', fees: '₹55,000/Year', eligibility: '10+2 with PCB Merit', exams: 'Merit', intake: '60' },
  { collegeId: 259, title: 'Master of Pharmacy (M.Pharm in Pharmaceutics / Pharmacology)', division: 'Postgraduate', duration: '2 Years', fees: '₹65,000/Year', eligibility: 'B.Pharm degree + GPAT', exams: 'GPAT', intake: '90' },

  // 260 ACMS New Delhi
  { collegeId: 260, title: 'Bachelor of Medicine and Bachelor of Surgery (MBBS)', division: 'Undergraduate', duration: '5.5 Years', fees: '₹4,40,000/Year', eligibility: '10+2 with 50% in PCB + NEET UG (Wards of Army personnel)', exams: 'NEET UG', intake: '100' },
  { collegeId: 260, title: 'MD / MS Postgraduate Programs (Base Hospital)', division: 'Postgraduate', duration: '3 Years', fees: '₹3,50,000/Year', eligibility: 'MBBS Degree + NEET PG', exams: 'NEET PG', intake: '30' },

  // 261 UCMS Delhi
  { collegeId: 261, title: 'Bachelor of Medicine and Bachelor of Surgery (MBBS)', division: 'Undergraduate', duration: '5.5 Years', fees: '₹7,000/Year', eligibility: '10+2 with 50% in PCB + NEET UG (Top 0.1%ile)', exams: 'NEET UG', intake: '170' },
  { collegeId: 261, title: 'MD / MS Postgraduate Medical Programs', division: 'Postgraduate', duration: '3 Years', fees: '₹15,600/Year', eligibility: 'MBBS degree + NEET PG', exams: 'NEET PG', intake: '140' },
  { collegeId: 261, title: 'B.Sc in Medical Imaging Technology (BMIT)', division: 'Undergraduate', duration: '3 Years', fees: '₹12,000/Year', eligibility: '10+2 with PCB/PCM', exams: 'Merit / Entrance', intake: '20' },

  // 262 MIME Saket
  { collegeId: 262, title: 'DNB Postgraduate Medical Residency (NBE)', division: 'Postgraduate', duration: '3 Years', fees: '₹1,25,000/Year', eligibility: 'MBBS degree + NEET PG / NBE', exams: 'NEET PG, NBE', intake: '45' },
  { collegeId: 262, title: 'Diploma in Medical Laboratory Technology (DMLT)', division: 'Diploma', duration: '2 Years', fees: '₹75,000/Year', eligibility: '10+2 with Science stream', exams: 'Merit', intake: '30' },
  { collegeId: 262, title: 'Post Graduate Diploma in Emergency Medical Services', division: 'Postgraduate', duration: '1 Year', fees: '₹85,000 Total', eligibility: 'MBBS / BAMS / BHMS / B.Sc Nursing', exams: 'Interview', intake: '25' },

  // 263 CIS Foundation
  { collegeId: 263, title: 'Certificate in General Duty Assistant (GDA)', division: 'Certificate', duration: '6 Months', fees: '₹25,000 Total', eligibility: '10th Standard Pass', exams: 'Direct Admission', intake: '40' },
  { collegeId: 263, title: 'Certificate in Phlebotomy & Medical Sample Collection', division: 'Certificate', duration: '6 Months', fees: '₹30,000 Total', eligibility: '10+2 with Science stream', exams: 'Direct Admission', intake: '30' },
  { collegeId: 263, title: 'Certificate in Patient Care & Hospital Operations', division: 'Certificate', duration: '1 Year', fees: '₹45,000 Total', eligibility: '10+2 in any stream', exams: 'Direct Admission', intake: '30' },

  // 264 Jamia Hamdard
  { collegeId: 264, title: 'Bachelor of Pharmacy (B.Pharm - SPER)', division: 'Undergraduate', duration: '4 Years', fees: '₹1,65,000/Year', eligibility: '10+2 with PCB/PCM (50%+) + NEET / JEE Main', exams: 'NEET, JEE Main', intake: '120' },
  { collegeId: 264, title: 'B.Tech in Computer Science and Engineering (SEST)', division: 'Undergraduate', duration: '4 Years', fees: '₹2,10,000/Year', eligibility: '10+2 with PCM + JEE Main', exams: 'JEE Main', intake: '180' },
  { collegeId: 264, title: 'Bachelor of Unani Medicine and Surgery (BUMS - SUMER)', division: 'Undergraduate', duration: '5.5 Years', fees: '₹1,50,000/Year', eligibility: '10+2 with PCB + Urdu + NEET UG', exams: 'NEET UG', intake: '60' },
  { collegeId: 264, title: 'Master of Pharmacy (M.Pharm - SPER)', division: 'Postgraduate', duration: '2 Years', fees: '₹2,00,000/Year', eligibility: 'B.Pharm degree with 55% + GPAT', exams: 'GPAT', intake: '60' },

  // 265 LHMC Delhi
  { collegeId: 265, title: 'Bachelor of Medicine and Bachelor of Surgery (MBBS - Women Only)', division: 'Undergraduate', duration: '5.5 Years', fees: '₹1,400/Year', eligibility: '10+2 with 50% in PCB + NEET UG (Female Candidates, Top 0.2%ile)', exams: 'NEET UG', intake: '240' },
  { collegeId: 265, title: 'MD / MS Postgraduate Programs (Co-ed)', division: 'Postgraduate', duration: '3 Years', fees: '₹15,600/Year', eligibility: 'MBBS degree + NEET PG', exams: 'NEET PG', intake: '150' },
  { collegeId: 265, title: 'B.Sc (Hons) in Nursing', division: 'Undergraduate', duration: '4 Years', fees: '₹3,500/Year', eligibility: '10+2 with PCB (Female Candidates) + NEET UG', exams: 'NEET UG', intake: '60' },

  // 266 ILBS Delhi
  { collegeId: 266, title: 'DM in Hepatology / Organ Transplant Anesthesia', division: 'Super-specialty', duration: '3 Years', fees: '₹75,000/Year', eligibility: 'MD in General Medicine/Pediatrics/Anesthesia + NEET SS', exams: 'NEET SS', intake: '15' },
  { collegeId: 266, title: 'M.Ch in Hepato-Pancreato-Biliary (HPB) Surgery', division: 'Super-specialty', duration: '3 Years', fees: '₹75,000/Year', eligibility: 'MS in General Surgery + NEET SS', exams: 'NEET SS', intake: '10' },
  { collegeId: 266, title: 'PDCC (Post-Doctoral Certificate Course in Critical Care / Virology)', division: 'Fellowship', duration: '1 Year', fees: '₹50,000 Total', eligibility: 'MD/MS/DNB Degree + ILBS Entrance & Interview', exams: 'ILBS Entrance', intake: '20' },
  { collegeId: 266, title: 'M.Sc in Clinical Research / Molecular Virology', division: 'Postgraduate', duration: '2 Years', fees: '₹60,000/Year', eligibility: 'B.Sc in Life Sciences with 55% + Entrance', exams: 'ILBS Entrance', intake: '20' },

  // 267 MIME Rohini
  { collegeId: 267, title: 'DNB Postgraduate Medical Residency (Family Medicine / Pediatrics)', division: 'Postgraduate', duration: '3 Years', fees: '₹1,25,000/Year', eligibility: 'MBBS degree + NEET PG / NBE', exams: 'NEET PG, NBE', intake: '25' },
  { collegeId: 267, title: 'Diploma in Medical Imaging Technology (DMIT)', division: 'Diploma', duration: '2 Years', fees: '₹75,000/Year', eligibility: '10+2 with Science stream', exams: 'Merit', intake: '25' },
  { collegeId: 267, title: 'Certificate in Critical Care Nursing', division: 'Certificate', duration: '1 Year', fees: '₹45,000 Total', eligibility: 'GNM / B.Sc Nursing degree', exams: 'Interview', intake: '20' },

  // 268 DPMI Delhi
  { collegeId: 268, title: 'Diploma in Medical Lab Technology (DMLT)', division: 'Diploma', duration: '2 Years', fees: '₹60,000/Year', eligibility: '10+2 in Science or Arts with 45%', exams: 'Merit', intake: '60' },
  { collegeId: 268, title: 'Diploma in Operation Theatre Technology (DOTT)', division: 'Diploma', duration: '2 Years', fees: '₹60,000/Year', eligibility: '10+2 in Science stream', exams: 'Merit', intake: '60' },
  { collegeId: 268, title: 'Bachelor of Vocation in Medical Lab Technology (B.Voc MLT)', division: 'Undergraduate', duration: '3 Years', fees: '₹70,000/Year', eligibility: '10+2 in any stream', exams: 'Merit', intake: '50' }
];

// Append to CSVs
for (const col of batch69Colleges) {
  const line = `"${col.id}","${col.name.replace(/"/g, '""')}","${col.state}","${col.city}","${col.type}","${col.website}","${col.phone}","${col.rating}","${col.established}","VERIFIED","Batch 69"\n`;
  fs.appendFileSync(collegeCsvFile, line, 'utf8');

  const imgLine = `"${col.id}","${col.name.replace(/"/g, '""')}","${col.image}","${col.imageStatus}","Batch 69"\n`;
  fs.appendFileSync(imageCsvFile, imgLine, 'utf8');
}

for (const crs of batch69Courses) {
  const crsLine = `"${crs.collegeId}","${crs.title.replace(/"/g, '""')}","${crs.division}","${crs.duration}","${crs.fees}","${crs.eligibility.replace(/"/g, '""')}","${crs.exams}","${crs.intake}","VERIFIED","Batch 69"\n`;
  fs.appendFileSync(courseCsvFile, crsLine, 'utf8');
}

// Update progress
const newIds = batch69Colleges.map(c => c.id);
const uniqueCompleted = Array.from(new Set([...progress.completed_ids, ...newIds]));
progress.completed_ids = uniqueCompleted;
progress.total_verified = uniqueCompleted.length;
progress.current_batch = 69;
progress.last_updated = new Date().toISOString();

fs.writeFileSync(progressFile, JSON.stringify(progress, null, 2), 'utf8');

console.log(`Appended 10 colleges to college-verification.csv`);
console.log(`Appended ${batch69Courses.length} courses to course-verification.csv`);
console.log(`Updated progress.json: total_verified = ${progress.total_verified}, current_batch = ${progress.current_batch}`);

