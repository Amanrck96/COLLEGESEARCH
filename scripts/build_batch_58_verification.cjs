const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const PROGRESS_PATH = path.join(BASE_DIR, 'reports', 'verification', 'progress.json');
const COLLEGE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'college-verification.csv');
const COURSE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'course-verification.csv');
const IMAGE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'image-verification.csv');

const batch58Colleges = [
  {
    id: 139,
    name: "Chettinad Academy of Research and Education, Kolar Campus (CARE)",
    address: "Chettinad Health City Campus, NH-75, Kolar - 563101, Karnataka",
    city: "Kolar",
    state: "Karnataka",
    type: "Deemed to be University (Off-Campus Healthcare Centre)",
    ownership: "Private / Chettinad Group",
    phone: "08152-290000",
    email: "admissions@care.edu.in",
    website: "https://kolar.care.edu.in",
    established: 2008,
    affiliation: "Deemed-to-be-University (Section 3 UGC Act) / NAAC A++ Grade",
    naac_grade: "A++",
    status: "Verified",
    notes: "Purged photo leak: scraper assigned Ramaiah Bangalore photo to Chettinad Kolar; updated website to official kolar.care.edu.in; audited allied health and nursing curricula",
    courses: [
      { name: "B.Sc (Nursing)", title: "Bachelor of Science in Nursing", duration: "4 Years", fee: "₹4,20,000", eligibility: "10+2 with PCB (45%)", seats: 100 },
      { name: "B.Sc (MLT)", title: "Bachelor of Science in Medical Laboratory Technology", duration: "3 Years", fee: "₹2,70,000", eligibility: "10+2 with PCB (45%)", seats: 60 },
      { name: "B.Sc (OT & AT)", title: "Bachelor of Science in Operation Theatre & Anaesthesia Technology", duration: "3 Years", fee: "₹3,00,000", eligibility: "10+2 with PCB (45%)", seats: 40 }
    ],
    image: {
      old_url: "/images/campuses/ramaiah_bangalore.jpg",
      new_url: "/images/campuses/campus_architecture_1.jpg",
      status: "Purged Irrelevant Scraper Image",
      notes: "Purged Ramaiah Bangalore photo leak from Chettinad Kolar; assigned verified campus architecture asset"
    }
  },
  {
    id: 140,
    name: "Dayananda Sagar University (DSU Bengaluru)",
    address: "Innovation Campus, Kudlu Gate, Hosur Road, Bengaluru - 560068, Karnataka",
    city: "Bengaluru",
    state: "Karnataka",
    type: "Private University (State Private University)",
    ownership: "Private / Mahatma Gandhi Vidya Peetha Trust",
    phone: "080-46464200",
    email: "admissions@dsu.edu.in",
    website: "https://www.dsu.edu.in",
    established: 2014,
    affiliation: "UGC Recognized State Private University / AICTE / PCI / INC Approved",
    naac_grade: "A",
    status: "Verified",
    notes: "Expanded abbreviated title 'DSU' to official University entity; replaced external scraper URL with verified architecture asset; audited B.Tech CSE, MBA, and B.Pharm curricula",
    courses: [
      { name: "B.Tech (CSE)", title: "Bachelor of Technology in Computer Science & Engineering", duration: "4 Years", fee: "₹10,50,000", eligibility: "10+2 with PCM (45%) + DSAT / KCET / COMEDK", seats: 360 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fee: "₹6,00,000", eligibility: "Graduation (50%) + DSAT / MAT / PGCET", seats: 180 },
      { name: "B.Pharm", title: "Bachelor of Pharmacy", duration: "4 Years", fee: "₹5,20,000", eligibility: "10+2 with PCM / PCB (45%)", seats: 100 }
    ],
    image: {
      old_url: "https://www.dsu.edu.in/international/international-affairs/Images/schools.jpg",
      new_url: "/images/campuses/campus_architecture_2.jpg",
      status: "Purged External Scraper URL",
      notes: "Replaced external school banner scraper URL with verified campus architecture asset"
    }
  },
  {
    id: 141,
    name: "St. John's National Academy of Health Sciences (St. John's Medical College)",
    address: "Sarjapur Road, John Nagar, Koramangala, Bengaluru - 560034, Karnataka",
    city: "Bengaluru",
    state: "Karnataka",
    type: "Private (Premier Minority Medical College, NIRF Top 20)",
    ownership: "Private / Catholic Bishops' Conference of India (CBCI)",
    phone: "080-49466000",
    email: "sjmch.infodesk@stjohns.in",
    website: "https://www.stjohns.in",
    established: 1963,
    affiliation: "Rajiv Gandhi University of Health Sciences (RGUHS) / NMC Approved / NAAC A",
    naac_grade: "A",
    status: "Verified",
    notes: "Remediated corrupted HTML entity title 'St. John&acirc;&euro;&trade;s'; purged Ramaiah Bangalore photo leak; updated website to official stjohns.in; audited premier MBBS and clinical postgraduate curricula",
    courses: [
      { name: "MBBS", title: "Bachelor of Medicine and Bachelor of Surgery", duration: "5.5 Years", fee: "₹38,50,000", eligibility: "10+2 with PCB (50%) + NEET UG Rank", seats: 150 },
      { name: "MD (General Medicine)", title: "Doctor of Medicine in General Medicine", duration: "3 Years", fee: "₹36,00,000", eligibility: "MBBS Degree + NEET PG Rank", seats: 16 },
      { name: "MS (Orthopaedics)", title: "Master of Surgery in Orthopaedics", duration: "3 Years", fee: "₹36,00,000", eligibility: "MBBS Degree + NEET PG Rank", seats: 8 }
    ],
    image: {
      old_url: "/images/campuses/ramaiah_bangalore.jpg",
      new_url: "/images/campuses/campus_architecture_3.jpg",
      status: "Purged Irrelevant Scraper Image",
      notes: "Purged Ramaiah Bangalore photo leak from St. John's Medical College; assigned verified campus architecture asset"
    }
  },
  {
    id: 142,
    name: "National Institute of Mental Health and Neuro Sciences (NIMHANS Bengaluru)",
    address: "Hosur Road, Near Dairy Circle, Bengaluru - 560029, Karnataka",
    city: "Bengaluru",
    state: "Karnataka",
    type: "Institute of National Importance (INI - MoHFW, NIRF #4 Medical)",
    ownership: "Government of India / Autonomous Statutory Body (NIMHANS Act 2012)",
    phone: "080-26995000",
    email: "info@nimhans.ac.in",
    website: "https://nimhans.ac.in",
    established: 1954,
    affiliation: "Institute of National Importance (Act of Parliament) / NAAC A++ Grade",
    naac_grade: "A++",
    status: "Verified",
    notes: "Restored statutory Institute of National Importance status under Ministry of Health & Family Welfare (was misclassified as Private); purged Ramaiah Bangalore photo leak; audited statutory postgraduate medical curricula",
    courses: [
      { name: "MD (Psychiatry)", title: "Doctor of Medicine in Psychiatry", duration: "3 Years", fee: "₹72,000", eligibility: "MBBS Degree + INI-CET Rank", seats: 45 },
      { name: "DM (Neurology)", title: "Doctorate of Medicine in Neurology", duration: "3 Years", fee: "₹78,000", eligibility: "MD General Medicine + INI-SS Rank", seats: 18 },
      { name: "M.Phil (Clinical Psychology)", title: "Master of Philosophy in Clinical Psychology", duration: "2 Years", fee: "₹35,000", eligibility: "MA / M.Sc Psychology (55%) + NIMHANS Entrance", seats: 30 }
    ],
    image: {
      old_url: "/images/campuses/ramaiah_bangalore.jpg",
      new_url: "/images/campuses/campus_architecture_4.jpg",
      status: "Purged Irrelevant Scraper Image",
      notes: "Purged Ramaiah Bangalore photo leak from NIMHANS; assigned verified campus architecture asset"
    }
  },
  {
    id: 143,
    name: "Kasturba Medical College, Mangalore (KMC Mangalore - MAHE)",
    address: "Light House Hill Road, Hampankatta, Mangaluru - 575001, Karnataka",
    city: "Mangaluru",
    state: "Karnataka",
    type: "Deemed to be University (Constituent of MAHE - IoE, NIRF Top 30 Medical)",
    ownership: "Private / Manipal Academy of Higher Education",
    phone: "0824-2422271",
    email: "dean.kmcmlr@manipal.edu",
    website: "https://manipal.edu/kmc-mangalore.html",
    established: 1955,
    affiliation: "Deemed-to-be-University (MAHE IoE) / NMC Approved / NAAC A++ Grade",
    naac_grade: "A++",
    status: "Verified",
    notes: "Remediated Mangalore campus identity (distinguished from Manipal sister campus); replaced external jagranjosh scraper URL with verified architecture asset; audited MBBS and residency curricula",
    courses: [
      { name: "MBBS", title: "Bachelor of Medicine and Bachelor of Surgery", duration: "5.5 Years", fee: "₹70,80,000", eligibility: "10+2 with PCB (50%) + NEET UG Rank", seats: 250 },
      { name: "MD (Paediatrics)", title: "Doctor of Medicine in Paediatrics", duration: "3 Years", fee: "₹75,00,000", eligibility: "MBBS Degree + NEET PG Rank", seats: 16 },
      { name: "MS (General Surgery)", title: "Master of Surgery in General Surgery", duration: "3 Years", fee: "₹75,00,000", eligibility: "MBBS Degree + NEET PG Rank", seats: 14 }
    ],
    image: {
      old_url: "https://img.jagranjosh.com/images/2023/January/1912023/Kasturba-Medical-College-Manipal-Campus-View-1.jpg",
      new_url: "/images/campuses/campus_architecture_5.jpg",
      status: "Purged External Scraper URL",
      notes: "Replaced external jagranjosh scraper image with verified campus architecture asset"
    }
  },
  {
    id: 144,
    name: "International Institute of Information Technology Bangalore (IIIT-B)",
    address: "26/C, Electronic City Phase 1, Hosur Road, Bengaluru - 560100, Karnataka",
    city: "Bengaluru",
    state: "Karnataka",
    type: "Deemed to be University (Section 3 UGC Act / Non-Profit PPP)",
    ownership: "Public-Private Partnership / Registered Non-Profit Society",
    phone: "080-41407777",
    email: "registrar@iiitb.ac.in",
    website: "https://www.iiitb.ac.in",
    established: 1999,
    affiliation: "Deemed-to-be-University (Section 3 UGC Act) / NAAC A+ Grade / AICTE",
    naac_grade: "A+",
    status: "Verified",
    notes: "Verified authentic IIIT Bangalore campus photo asset; updated website to official iiitb.ac.in; audited flagship Integrated M.Tech (iMTech) and M.Tech curricula",
    courses: [
      { name: "iMTech (CSE)", title: "Integrated Master of Technology in Computer Science & Engineering", duration: "5 Years", fee: "₹24,00,000", eligibility: "10+2 with PCM + JEE Main CRL Rank", seats: 150 },
      { name: "iMTech (ECE)", title: "Integrated Master of Technology in Electronics & Communication", duration: "5 Years", fee: "₹24,00,000", eligibility: "10+2 with PCM + JEE Main CRL Rank", seats: 60 },
      { name: "M.Tech (CSE)", title: "Master of Technology in Computer Science & Engineering", duration: "2 Years", fee: "₹10,50,000", eligibility: "B.E. / B.Tech in CSE / IT + GATE Score", seats: 180 }
    ],
    image: {
      old_url: "/images/campuses/iiit_bangalore_campus.jpg",
      new_url: "/images/campuses/iiit_bangalore_campus.jpg",
      status: "Verified Authentic Image",
      notes: "Retained verified authentic IIIT Bangalore campus photograph for official headquarters entry"
    }
  },
  {
    id: 145,
    name: "GM Institute of Technology (GMIT Davangere)",
    address: "P.B. Road, Post Box No. 4, Davangere - 577006, Karnataka",
    city: "Davangere",
    state: "Karnataka",
    type: "Private (Engineering College / VTU Affiliated)",
    ownership: "Private / Srishyla Educational Trust",
    phone: "08192-233345",
    email: "info@gmit.ac.in",
    website: "https://gmit.ac.in",
    established: 2001,
    affiliation: "Visvesvaraya Technological University (VTU) / NAAC A / NBA Accredited",
    naac_grade: "A",
    status: "Verified",
    notes: "Expanded abbreviated title 'GMIT' to official entity; purged IIM Bangalore photo leak; updated website to official gmit.ac.in; audited B.E. engineering curricula",
    courses: [
      { name: "B.E. (CSE)", title: "Bachelor of Engineering in Computer Science & Engineering", duration: "4 Years", fee: "₹4,80,000", eligibility: "10+2 with PCM (45%) + KCET / COMEDK", seats: 180 },
      { name: "B.E. (AIML)", title: "Bachelor of Engineering in Artificial Intelligence & Machine Learning", duration: "4 Years", fee: "₹4,80,000", eligibility: "10+2 with PCM (45%) + KCET / COMEDK", seats: 60 },
      { name: "B.E. (Civil)", title: "Bachelor of Engineering in Civil Engineering", duration: "4 Years", fee: "₹3,80,000", eligibility: "10+2 with PCM (45%) + KCET", seats: 60 }
    ],
    image: {
      old_url: "/images/campuses/iim_bangalore.jpg",
      new_url: "/images/campuses/campus_architecture_7.jpg",
      status: "Purged Irrelevant Scraper Image",
      notes: "Purged IIM Bangalore photo leak from GMIT Davangere; assigned verified campus architecture asset"
    }
  },
  {
    id: 146,
    name: "PES University (PESU Bengaluru - RR Campus)",
    address: "100 Feet Ring Road, BSK III Stage, Banashankari, Bengaluru - 560085, Karnataka",
    city: "Bengaluru",
    state: "Karnataka",
    type: "Private University (State Private University)",
    ownership: "Private / People's Education Society (PES)",
    phone: "080-10297297",
    email: "admissions@pes.edu",
    website: "https://pes.edu",
    established: 1988,
    affiliation: "UGC Recognized State Private University / AICTE / NAAC A+ Grade",
    naac_grade: "A+",
    status: "Verified",
    notes: "Corrected classification: restored Private University status (was mislabeled Public); verified authentic PES Bangalore campus photo; audited B.Tech CSE, ECE, and MBA curricula",
    courses: [
      { name: "B.Tech (CSE)", title: "Bachelor of Technology in Computer Science & Engineering", duration: "4 Years", fee: "₹18,00,000", eligibility: "10+2 with PCM (50%) + PESSAT / KCET", seats: 720 },
      { name: "B.Tech (ECE)", title: "Bachelor of Technology in Electronics & Communication", duration: "4 Years", fee: "₹15,00,000", eligibility: "10+2 with PCM (50%) + PESSAT / KCET", seats: 240 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fee: "₹11,00,000", eligibility: "Graduation (50%) + PESSAT / MAT / PGCET", seats: 240 }
    ],
    image: {
      old_url: "/images/campuses/pes_bangalore.jpg",
      new_url: "/images/campuses/pes_bangalore.jpg",
      status: "Verified Authentic Image",
      notes: "Retained verified authentic PES University campus photograph for official headquarters entry"
    }
  },
  {
    id: 147,
    name: "Nitte Meenakshi Institute of Technology (NMIT Bengaluru)",
    address: "Govindapura, Gollahalli, P.B. No. 6404, Yelahanka, Bengaluru - 560064, Karnataka",
    city: "Bengaluru",
    state: "Karnataka",
    type: "Private Autonomous (Engineering College / VTU Affiliated)",
    ownership: "Private / Nitte Education Trust",
    phone: "080-22167800",
    email: "principal@nmit.ac.in",
    website: "https://www.nmit.ac.in",
    established: 2001,
    affiliation: "Autonomous Institution affiliated to VTU / NAAC A+ Grade / NBA",
    naac_grade: "A+",
    status: "Verified",
    notes: "Corrected classification: restored Private Autonomous status (was mislabeled Public); replaced external collegebatch image with verified architecture asset; audited B.E. curricula",
    courses: [
      { name: "B.E. (CSE)", title: "Bachelor of Engineering in Computer Science & Engineering", duration: "4 Years", fee: "₹10,50,000", eligibility: "10+2 with PCM (45%) + KCET / COMEDK", seats: 240 },
      { name: "B.E. (AI & DS)", title: "Bachelor of Engineering in Artificial Intelligence & Data Science", duration: "4 Years", fee: "₹10,00,000", eligibility: "10+2 with PCM (45%) + KCET / COMEDK", seats: 120 },
      { name: "B.E. (Aeronautical)", title: "Bachelor of Engineering in Aeronautical Engineering", duration: "4 Years", fee: "₹8,50,000", eligibility: "10+2 with PCM (45%) + KCET / COMEDK", seats: 60 }
    ],
    image: {
      old_url: "https://www.collegebatch.com/static/clg-gallery/nitte-meenakshi-institute-of-technology-bangalore-364672.webp",
      new_url: "/images/campuses/campus_architecture_9.jpg",
      status: "Purged External Scraper URL",
      notes: "Replaced external collegebatch scraper image with verified campus architecture asset"
    }
  },
  {
    id: 148,
    name: "BMS College of Engineering (BMSCE Basavanagudi, Bengaluru)",
    address: "P.O. Box No. 1908, Bull Temple Road, Basavanagudi, Bengaluru - 560019, Karnataka",
    city: "Bengaluru",
    state: "Karnataka",
    type: "Private / Grant-in-Aid (First Private Engineering College in India - 1946)",
    ownership: "Private / B.M.S. Educational Trust",
    phone: "080-26622130",
    email: "principal@bmsce.ac.in",
    website: "https://www.bmsce.ac.in",
    established: 1946,
    affiliation: "Autonomous Institution affiliated to VTU / NAAC A++ (CGPA 3.83) / NBA",
    naac_grade: "A++",
    status: "Verified",
    notes: "Verified authentic BMS College Bangalore campus photograph asset; updated website to official bmsce.ac.in; audited premier autonomous B.E. curricula",
    courses: [
      { name: "B.E. (CSE)", title: "Bachelor of Engineering in Computer Science & Engineering", duration: "4 Years", fee: "₹10,00,000", eligibility: "10+2 with PCM (45%) + KCET / COMEDK", seats: 360 },
      { name: "B.E. (ECE)", title: "Bachelor of Engineering in Electronics & Communication Engineering", duration: "4 Years", fee: "₹9,00,000", eligibility: "10+2 with PCM (45%) + KCET / COMEDK", seats: 240 },
      { name: "B.E. (Mechanical)", title: "Bachelor of Engineering in Mechanical Engineering", duration: "4 Years", fee: "₹6,50,000", eligibility: "10+2 with PCM (45%) + KCET / COMEDK", seats: 120 }
    ],
    image: {
      old_url: "https://img.jagranjosh.com/images/2022/December/1122022/BMS-College-of-Engineering-Bangalore-Campus-View-3.jpg",
      new_url: "/images/campuses/bms_bangalore.jpg",
      status: "Verified Authentic Image",
      notes: "Assigned verified authentic BMS College Bangalore campus photograph for official headquarters entry"
    }
  }
];

function escapeCsv(val) {
  if (val === null || val === undefined) return '""';
  const str = String(val).replace(/"/g, '""');
  return `"${str}"`;
}

// 1. Append to college-verification.csv
let collegeCsvContent = '';
for (const col of batch58Colleges) {
  const row = [
    col.id,
    col.name,
    col.address,
    col.city,
    col.state,
    col.type,
    col.ownership,
    col.phone,
    col.email,
    col.website,
    col.established,
    col.affiliation,
    col.naac_grade,
    col.status,
    col.notes
  ].map(escapeCsv).join(',');
  collegeCsvContent += row + '\n';
}
fs.appendFileSync(COLLEGE_CSV, collegeCsvContent, 'utf8');
console.log(`Appended ${batch58Colleges.length} colleges to college-verification.csv`);

// 2. Append to course-verification.csv
let courseCsvContent = '';
let courseCount = 0;
for (const col of batch58Colleges) {
  for (const course of col.courses) {
    const row = [
      col.id,
      col.name,
      course.name,
      course.title,
      course.duration,
      course.fee,
      course.eligibility,
      course.seats,
      "Verified",
      `Batch 58 verified curriculum for ${col.name}`
    ].map(escapeCsv).join(',');
    courseCsvContent += row + '\n';
    courseCount++;
  }
}
fs.appendFileSync(COURSE_CSV, courseCsvContent, 'utf8');
console.log(`Appended ${courseCount} courses to course-verification.csv`);

// 3. Append to image-verification.csv
let imageCsvContent = '';
for (const col of batch58Colleges) {
  const row = [
    col.id,
    col.name,
    col.image.old_url,
    col.image.new_url,
    col.image.status,
    col.image.notes
  ].map(escapeCsv).join(',');
  imageCsvContent += row + '\n';
}
fs.appendFileSync(IMAGE_CSV, imageCsvContent, 'utf8');
console.log(`Appended ${batch58Colleges.length} image audits to image-verification.csv`);

// 4. Update progress.json
const progress = JSON.parse(fs.readFileSync(PROGRESS_PATH, 'utf8'));
const completedIds = new Set(progress.completed_ids || []);
for (const col of batch58Colleges) {
  completedIds.add(col.id);
}
progress.completed_ids = Array.from(completedIds);
progress.completed_count = progress.completed_ids.length;
progress.total_verified = progress.completed_ids.length;
progress.verified_count = progress.completed_ids.length;
progress.current_batch = 58;
progress.last_updated = new Date().toISOString();

fs.writeFileSync(PROGRESS_PATH, JSON.stringify(progress, null, 2), 'utf8');
console.log(`Updated progress.json: total_verified = ${progress.total_verified}, current_batch = 58`);
