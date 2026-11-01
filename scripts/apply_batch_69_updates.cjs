const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');
const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));

const batch69Map = {
  259: {
    name: 'Delhi Pharmaceutical Sciences and Research University (DPSRU)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Public/Government',
    website: 'https://dpsru.edu.in/',
    phone: '011-29553771',
    rating: 4.6,
    established: 1964,
    image: 'https://img.jagranjosh.com/images/2022/December/13122022/Delhi-Pharmaceutical-Sciences-and-Research-University-New-Delhi-Campus-View.jpg',
    courses: [
      { title: 'Bachelor of Pharmacy (B.Pharm - DIPSAR/DPSRU)', division: 'Undergraduate', duration: '4 Years', fees: '₹48,000/Year', eligibility: '10+2 with PCB/PCM (55%+) + Merit', exams: 'Merit', intake: '120' },
      { title: 'Bachelor of Physiotherapy (BPT)', division: 'Undergraduate', duration: '4.5 Years', fees: '₹55,000/Year', eligibility: '10+2 with PCB Merit', exams: 'Merit', intake: '60' },
      { title: 'Master of Pharmacy (M.Pharm in Pharmaceutics / Pharmacology)', division: 'Postgraduate', duration: '2 Years', fees: '₹65,000/Year', eligibility: 'B.Pharm degree + GPAT', exams: 'GPAT', intake: '90' }
    ]
  },
  260: {
    name: 'Army College of Medical Sciences (ACMS New Delhi)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Private',
    website: 'https://theacms.in/',
    phone: '011-25687644',
    rating: 4.7,
    established: 2008,
    image: 'https://image-static.collegedunia.com/public/image/ACMS_DELHI_CAmpus_110b2c027ea8971db9fb66c6385c0893.jpg',
    courses: [
      { title: 'Bachelor of Medicine and Bachelor of Surgery (MBBS)', division: 'Undergraduate', duration: '5.5 Years', fees: '₹4,40,000/Year', eligibility: '10+2 with 50% in PCB + NEET UG (Wards of Army personnel)', exams: 'NEET UG', intake: '100' },
      { title: 'MD / MS Postgraduate Programs (Base Hospital)', division: 'Postgraduate', duration: '3 Years', fees: '₹3,50,000/Year', eligibility: 'MBBS Degree + NEET PG', exams: 'NEET PG', intake: '30' }
    ]
  },
  261: {
    name: 'University College of Medical Sciences, University of Delhi (UCMS)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Public/Government',
    website: 'https://ucms.ac.in/',
    phone: '011-22582106',
    rating: 4.9,
    established: 1971,
    image: '',
    courses: [
      { title: 'Bachelor of Medicine and Bachelor of Surgery (MBBS)', division: 'Undergraduate', duration: '5.5 Years', fees: '₹7,000/Year', eligibility: '10+2 with 50% in PCB + NEET UG (Top 0.1%ile)', exams: 'NEET UG', intake: '170' },
      { title: 'MD / MS Postgraduate Medical Programs', division: 'Postgraduate', duration: '3 Years', fees: '₹15,600/Year', eligibility: 'MBBS degree + NEET PG', exams: 'NEET PG', intake: '140' },
      { title: 'B.Sc in Medical Imaging Technology (BMIT)', division: 'Undergraduate', duration: '3 Years', fees: '₹12,000/Year', eligibility: '10+2 with PCB/PCM', exams: 'Merit / Entrance', intake: '20' }
    ]
  },
  262: {
    name: 'Max Institute of Medical Excellence, Saket, New Delhi',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Private',
    website: 'https://www.maxhealthcare.in/academics',
    phone: '011-26515050',
    rating: 4.3,
    established: 2010,
    image: '/images/campuses/campus_architecture_2.jpg',
    courses: [
      { title: 'DNB Postgraduate Medical Residency (NBE)', division: 'Postgraduate', duration: '3 Years', fees: '₹1,25,000/Year', eligibility: 'MBBS degree + NEET PG / NBE', exams: 'NEET PG, NBE', intake: '45' },
      { title: 'Diploma in Medical Laboratory Technology (DMLT)', division: 'Diploma', duration: '2 Years', fees: '₹75,000/Year', eligibility: '10+2 with Science stream', exams: 'Merit', intake: '30' },
      { title: 'Post Graduate Diploma in Emergency Medical Services', division: 'Postgraduate', duration: '1 Year', fees: '₹85,000 Total', eligibility: 'MBBS / BAMS / BHMS / B.Sc Nursing', exams: 'Interview', intake: '25' }
    ]
  },
  263: {
    name: 'Creative & Innovative Skill Foundation, New Delhi (CIS Foundation)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Private',
    website: 'https://cisfoundation.org/',
    phone: '011-41006655',
    rating: 4.0,
    established: 2016,
    image: '',
    courses: [
      { title: 'Certificate in General Duty Assistant (GDA)', division: 'Certificate', duration: '6 Months', fees: '₹25,000 Total', eligibility: '10th Standard Pass', exams: 'Direct Admission', intake: '40' },
      { title: 'Certificate in Phlebotomy & Medical Sample Collection', division: 'Certificate', duration: '6 Months', fees: '₹30,000 Total', eligibility: '10+2 with Science stream', exams: 'Direct Admission', intake: '30' },
      { title: 'Certificate in Patient Care & Hospital Operations', division: 'Certificate', duration: '1 Year', fees: '₹45,000 Total', eligibility: '10+2 in any stream', exams: 'Direct Admission', intake: '30' }
    ]
  },
  264: {
    name: 'Jamia Hamdard (Deemed-to-be-University), New Delhi',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Deemed',
    website: 'https://www.jamiahamdard.ac.in/',
    phone: '011-26059688',
    rating: 4.7,
    established: 1989,
    image: '/images/campuses/campus_architecture_4.jpg',
    courses: [
      { title: 'Bachelor of Pharmacy (B.Pharm - SPER)', division: 'Undergraduate', duration: '4 Years', fees: '₹1,65,000/Year', eligibility: '10+2 with PCB/PCM (50%+) + NEET / JEE Main', exams: 'NEET, JEE Main', intake: '120' },
      { title: 'B.Tech in Computer Science and Engineering (SEST)', division: 'Undergraduate', duration: '4 Years', fees: '₹2,10,000/Year', eligibility: '10+2 with PCM + JEE Main', exams: 'JEE Main', intake: '180' },
      { title: 'Bachelor of Unani Medicine and Surgery (BUMS - SUMER)', division: 'Undergraduate', duration: '5.5 Years', fees: '₹1,50,000/Year', eligibility: '10+2 with PCB + Urdu + NEET UG', exams: 'NEET UG', intake: '60' },
      { title: 'Master of Pharmacy (M.Pharm - SPER)', division: 'Postgraduate', duration: '2 Years', fees: '₹2,00,000/Year', eligibility: 'B.Pharm degree with 55% + GPAT', exams: 'GPAT', intake: '60' }
    ]
  },
  265: {
    name: 'Lady Hardinge Medical College, University of Delhi (LHMC)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Public/Government',
    website: 'http://lhmc-hosp.gov.in/',
    phone: '011-23363728',
    rating: 4.9,
    established: 1916,
    image: '',
    courses: [
      { title: 'Bachelor of Medicine and Bachelor of Surgery (MBBS - Women Only)', division: 'Undergraduate', duration: '5.5 Years', fees: '₹1,400/Year', eligibility: '10+2 with 50% in PCB + NEET UG (Female Candidates, Top 0.2%ile)', exams: 'NEET UG', intake: '240' },
      { title: 'MD / MS Postgraduate Programs (Co-ed)', division: 'Postgraduate', duration: '3 Years', fees: '₹15,600/Year', eligibility: 'MBBS degree + NEET PG', exams: 'NEET PG', intake: '150' },
      { title: 'B.Sc (Hons) in Nursing', division: 'Undergraduate', duration: '4 Years', fees: '₹3,500/Year', eligibility: '10+2 with PCB (Female Candidates) + NEET UG', exams: 'NEET UG', intake: '60' }
    ]
  },
  266: {
    name: 'Institute of Liver and Biliary Sciences, New Delhi (ILBS)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Public/Government',
    website: 'https://www.ilbs.in/',
    phone: '011-46300000',
    rating: 4.8,
    established: 2009,
    image: 'https://img.jagranjosh.com/images/2023/January/1612023/Institute-of-Liver-and-Biliary-Sciences-New-Delhi-Campus-View-2.png',
    courses: [
      { title: 'DM in Hepatology / Organ Transplant Anesthesia', division: 'Super-specialty', duration: '3 Years', fees: '₹75,000/Year', eligibility: 'MD in General Medicine/Pediatrics/Anesthesia + NEET SS', exams: 'NEET SS', intake: '15' },
      { title: 'M.Ch in Hepato-Pancreato-Biliary (HPB) Surgery', division: 'Super-specialty', duration: '3 Years', fees: '₹75,000/Year', eligibility: 'MS in General Surgery + NEET SS', exams: 'NEET SS', intake: '10' },
      { title: 'PDCC (Post-Doctoral Certificate Course in Critical Care / Virology)', division: 'Fellowship', duration: '1 Year', fees: '₹50,000 Total', eligibility: 'MD/MS/DNB Degree + ILBS Entrance & Interview', exams: 'ILBS Entrance', intake: '20' },
      { title: 'M.Sc in Clinical Research / Molecular Virology', division: 'Postgraduate', duration: '2 Years', fees: '₹60,000/Year', eligibility: 'B.Sc in Life Sciences with 55% + Entrance', exams: 'ILBS Entrance', intake: '20' }
    ]
  },
  267: {
    name: 'Max Institute of Medical Excellence, Rohini, New Delhi',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Private',
    website: 'https://www.maxhealthcare.in/academics',
    phone: '011-66422222',
    rating: 4.2,
    established: 2012,
    image: '/images/campuses/campus_architecture_7.jpg',
    courses: [
      { title: 'DNB Postgraduate Medical Residency (Family Medicine / Pediatrics)', division: 'Postgraduate', duration: '3 Years', fees: '₹1,25,000/Year', eligibility: 'MBBS degree + NEET PG / NBE', exams: 'NEET PG, NBE', intake: '25' },
      { title: 'Diploma in Medical Imaging Technology (DMIT)', division: 'Diploma', duration: '2 Years', fees: '₹75,000/Year', eligibility: '10+2 with Science stream', exams: 'Merit', intake: '25' },
      { title: 'Certificate in Critical Care Nursing', division: 'Certificate', duration: '1 Year', fees: '₹45,000 Total', eligibility: 'GNM / B.Sc Nursing degree', exams: 'Interview', intake: '20' }
    ]
  },
  268: {
    name: 'Delhi Paramedical and Management Institute, New Delhi (DPMI)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Private',
    website: 'https://www.dpmiindia.com/',
    phone: '011-45007700',
    rating: 4.2,
    established: 1996,
    image: 'https://media.collegedekho.com/media/img/institute/crawled_images/Delhi_Paramedical__Management_Institute1.jpg?width=640',
    courses: [
      { title: 'Diploma in Medical Lab Technology (DMLT)', division: 'Diploma', duration: '2 Years', fees: '₹60,000/Year', eligibility: '10+2 in Science or Arts with 45%', exams: 'Merit', intake: '60' },
      { title: 'Diploma in Operation Theatre Technology (DOTT)', division: 'Diploma', duration: '2 Years', fees: '₹60,000/Year', eligibility: '10+2 in Science stream', exams: 'Merit', intake: '60' },
      { title: 'Bachelor of Vocation in Medical Lab Technology (B.Voc MLT)', division: 'Undergraduate', duration: '3 Years', fees: '₹70,000/Year', eligibility: '10+2 in any stream', exams: 'Merit', intake: '50' }
    ]
  }
};

let updatedCount = 0;
for (let i = 0; i < siteData.colleges.length; i++) {
  const col = siteData.colleges[i];
  const cid = Number(col.id);
  if (batch69Map[cid]) {
    const update = batch69Map[cid];
    siteData.colleges[i] = {
      ...col,
      name: update.name,
      state: update.state,
      city: update.city,
      type: update.type,
      website: update.website,
      phone: update.phone,
      rating: update.rating,
      established: update.established,
      image: update.image,
      courses: update.courses
    };
    updatedCount++;
    console.log(`Updated ID: ${cid} - ${update.name}`);
  }
}

fs.writeFileSync(siteDataPath, JSON.stringify(siteData, null, 2), 'utf8');
console.log(`Successfully updated ${updatedCount} colleges in ${siteDataPath}`);
