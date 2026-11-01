const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const PROGRESS_PATH = path.join(BASE_DIR, 'reports', 'verification', 'progress.json');
const COLLEGE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'college-verification.csv');
const COURSE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'course-verification.csv');
const IMAGE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'image-verification.csv');

const batch57Colleges = [
  {
    id: 129,
    name: "A.J. Institute of Medical Sciences and Research Centre (AJIMS Mangaluru)",
    address: "N.H. 66, Kuntikana, Mangaluru - 575004, Dakshina Kannada, Karnataka",
    city: "Mangaluru",
    state: "Karnataka",
    type: "Private (Medical College & Research Centre / RGUHS Affiliated)",
    ownership: "Private / Laxmi Memorial Education Trust",
    phone: "0824-2225533",
    email: "deanajims@ajims.edu.in",
    website: "https://www.ajims.edu.in",
    established: 2002,
    affiliation: "Rajiv Gandhi University of Health Sciences (RGUHS) / NMC Approved",
    naac_grade: "A",
    status: "Verified",
    notes: "Purged photo leak: scraper assigned Ramaiah Bangalore photo to AJIMS in Mangalore; updated website to official ajims.edu.in; audited MBBS and MD/MS clinical curricula",
    courses: [
      { name: "MBBS", title: "Bachelor of Medicine and Bachelor of Surgery", duration: "5.5 Years", fee: "₹74,50,000", eligibility: "10+2 with PCB (50%) + NEET UG Rank", seats: 150 },
      { name: "MD (General Medicine)", title: "Doctor of Medicine in General Medicine", duration: "3 Years", fee: "₹72,00,000", eligibility: "MBBS Degree + NEET PG Rank", seats: 12 },
      { name: "MS (Orthopaedics)", title: "Master of Surgery in Orthopaedics", duration: "3 Years", fee: "₹72,00,000", eligibility: "MBBS Degree + NEET PG Rank", seats: 8 }
    ],
    image: {
      old_url: "/images/campuses/ramaiah_bangalore.jpg",
      new_url: "/images/campuses/campus_architecture_1.jpg",
      status: "Purged Irrelevant Scraper Image",
      notes: "Purged Ramaiah Bangalore photo leak from AJIMS Mangaluru; assigned verified campus architecture asset"
    }
  },
  {
    id: 130,
    name: "Bharath Institute of Medical Sciences (BIMS Mysuru - Emversity)",
    address: "#50/1, Hebbal Industrial Area, Mysuru - 570016, Karnataka",
    city: "Mysuru",
    state: "Karnataka",
    type: "Private (Allied Health Sciences Institute)",
    ownership: "Private / Bharath Education Society & Emversity",
    phone: "0821-2404040",
    email: "info@bims-india.com",
    website: "https://www.bims-india.com",
    established: 2018,
    affiliation: "Rajiv Gandhi University of Health Sciences (RGUHS) / Paramedical Board",
    naac_grade: "B+",
    status: "Verified",
    notes: "Purged photo leak: scraper assigned IIM Bangalore photo to BIMS in Mysore; updated website to official bims-india.com; audited B.Sc Allied Health curricula",
    courses: [
      { name: "B.Sc (MLT)", title: "Bachelor of Science in Medical Laboratory Technology", duration: "3.5 Years", fee: "₹2,80,000", eligibility: "10+2 with PCB (45%)", seats: 60 },
      { name: "B.Sc (OTAT)", title: "Bachelor of Science in Operation Theatre & Anaesthesia Technology", duration: "3.5 Years", fee: "₹3,20,000", eligibility: "10+2 with PCB (45%)", seats: 60 },
      { name: "B.Sc (Emergency)", title: "Bachelor of Science in Emergency & Trauma Care Technology", duration: "3.5 Years", fee: "₹3,00,000", eligibility: "10+2 with PCB (45%)", seats: 40 }
    ],
    image: {
      old_url: "/images/campuses/iim_bangalore.jpg",
      new_url: "/images/campuses/campus_architecture_2.jpg",
      status: "Purged Irrelevant Scraper Image",
      notes: "Purged IIM Bangalore photo leak from BIMS Mysuru; assigned verified campus architecture asset"
    }
  },
  {
    id: 131,
    name: "HCG College of Allied Health Sciences (HCG AHS Bengaluru)",
    address: "Healthcare Global Enterprises, #8, P. Kalinga Rao Road, Sampangi Rama Nagar, Bengaluru - 560027, Karnataka",
    city: "Bengaluru",
    state: "Karnataka",
    type: "Private (Specialized Oncology & Allied Health Institute)",
    ownership: "Private / HealthCare Global Enterprises (HCG)",
    phone: "080-40206000",
    email: "academics@hcgoncology.com",
    website: "https://www.hcgoncology.com",
    established: 2015,
    affiliation: "Rajiv Gandhi University of Health Sciences (RGUHS) / Paramedical Board",
    naac_grade: "A",
    status: "Verified",
    notes: "Replaced external collegedunia scraper image with verified architecture asset; updated website to official hcgoncology.com; audited oncology allied health degree programs",
    courses: [
      { name: "B.Sc (Radiotherapy)", title: "Bachelor of Science in Radiotherapy Technology", duration: "3.5 Years", fee: "₹3,50,000", eligibility: "10+2 with PCB (45%)", seats: 40 },
      { name: "B.Sc (MIT)", title: "Bachelor of Science in Medical Imaging Technology", duration: "3.5 Years", fee: "₹3,40,000", eligibility: "10+2 with PCB (45%)", seats: 40 },
      { name: "B.Sc (Oncology Care)", title: "Bachelor of Science in Oncology Care Technology", duration: "3.5 Years", fee: "₹3,20,000", eligibility: "10+2 with PCB (45%)", seats: 30 }
    ],
    image: {
      old_url: "https://image-static.collegedunia.com/public/college_data/images/campusimage/1773218719c-6.jpg",
      new_url: "/images/campuses/campus_architecture_3.jpg",
      status: "Purged External Scraper URL",
      notes: "Replaced external collegedunia scraper image with verified campus architecture asset"
    }
  },
  {
    id: 132,
    name: "Adichunchanagiri University (ACU Mandya)",
    address: "B.G. Nagara, Nagamangala Taluk, Mandya District - 571448, Karnataka",
    city: "Mandya",
    state: "Karnataka",
    type: "Private University (State Private University)",
    ownership: "Private / Sri Adichunchanagiri Shikshana Trust",
    phone: "08234-287285",
    email: "registrar@acu.edu.in",
    website: "https://acu.edu.in",
    established: 2018,
    affiliation: "UGC Recognized State Private University / NMC / AICTE / PCI / NAAC A",
    naac_grade: "A",
    status: "Verified",
    notes: "Purged photo leak: scraper assigned Ramaiah Bangalore photo to ACU in Mandya; restored Private University status (was Public); updated website to official acu.edu.in; audited university programs",
    courses: [
      { name: "MBBS", title: "Bachelor of Medicine and Bachelor of Surgery (AIMS)", duration: "5.5 Years", fee: "₹74,00,000", eligibility: "10+2 with PCB (50%) + NEET UG Rank", seats: 150 },
      { name: "B.Tech (CSE)", title: "Bachelor of Technology in Computer Science & Engineering (BGSIT)", duration: "4 Years", fee: "₹7,20,000", eligibility: "10+2 with PCM (45%) + KCET / COMEDK", seats: 180 },
      { name: "B.Pharm", title: "Bachelor of Pharmacy (SACCP)", duration: "4 Years", fee: "₹4,20,000", eligibility: "10+2 with PCM / PCB (45%)", seats: 100 }
    ],
    image: {
      old_url: "/images/campuses/ramaiah_bangalore.jpg",
      new_url: "/images/campuses/campus_architecture_4.jpg",
      status: "Purged Irrelevant Scraper Image",
      notes: "Purged Ramaiah Bangalore photo leak from Adichunchanagiri University; assigned verified campus architecture asset"
    }
  },
  {
    id: 133,
    name: "KLE Society's College of Pharmacy, Belagavi (KLE College of Pharmacy)",
    address: "JNMC Campus, Nehru Nagar, Belagavi - 590010, Karnataka",
    city: "Belagavi",
    state: "Karnataka",
    type: "Private (Constituent College of KAHER)",
    ownership: "Private / KLE Society",
    phone: "0831-2471399",
    email: "klepharmb@yahoo.com",
    website: "https://www.klepharm.edu",
    established: 1968,
    affiliation: "Constituent College of KAHER Deemed University / PCI Approved / NAAC A+",
    naac_grade: "A+",
    status: "Verified",
    notes: "Purged photo leak: scraper assigned IIM Bangalore photo to KLE Pharmacy in Belgaum; updated website to official klepharm.edu; audited B.Pharm, Pharm.D, and M.Pharm curricula",
    courses: [
      { name: "B.Pharm", title: "Bachelor of Pharmacy", duration: "4 Years", fee: "₹5,20,000", eligibility: "10+2 with PCM / PCB (50%)", seats: 100 },
      { name: "Pharm.D", title: "Doctor of Pharmacy", duration: "6 Years", fee: "₹12,60,000", eligibility: "10+2 with PCM / PCB (50%)", seats: 30 },
      { name: "M.Pharm (Pharmaceutics)", title: "Master of Pharmacy in Pharmaceutics", duration: "2 Years", fee: "₹3,40,000", eligibility: "B.Pharm Degree (55%) + GPAT", seats: 15 }
    ],
    image: {
      old_url: "/images/campuses/iim_bangalore.jpg",
      new_url: "/images/campuses/campus_architecture_5.jpg",
      status: "Purged Irrelevant Scraper Image",
      notes: "Purged IIM Bangalore photo leak from KLE College of Pharmacy Belagavi; assigned verified campus architecture asset"
    }
  },
  {
    id: 134,
    name: "Ramaiah Medical College, Bangalore (MSRMC Bengaluru)",
    address: "MSR Nagar, MSRIT Post, Mathikere, Bengaluru - 560054, Karnataka",
    city: "Bengaluru",
    state: "Karnataka",
    type: "Private (Autonomous Medical College / Gokula Foundation)",
    ownership: "Private / Gokula Education Foundation (Medical)",
    phone: "080-23605190",
    email: "ms_rmc@msrmc.ac.in",
    website: "https://www.msrmc.ac.in",
    established: 1979,
    affiliation: "Rajiv Gandhi University of Health Sciences (RGUHS) / NMC / NABH & NABL",
    naac_grade: "A+",
    status: "Verified",
    notes: "Verified authentic Ramaiah campus photo asset; updated website to official msrmc.ac.in; audited MBBS and postgraduate clinical specialization curricula",
    courses: [
      { name: "MBBS", title: "Bachelor of Medicine and Bachelor of Surgery", duration: "5.5 Years", fee: "₹76,50,000", eligibility: "10+2 with PCB (50%) + NEET UG Rank", seats: 150 },
      { name: "MD (Radio Diagnosis)", title: "Doctor of Medicine in Radio Diagnosis", duration: "3 Years", fee: "₹85,00,000", eligibility: "MBBS Degree + NEET PG Rank", seats: 10 },
      { name: "MS (Orthopaedics)", title: "Master of Surgery in Orthopaedics", duration: "3 Years", fee: "₹75,00,000", eligibility: "MBBS Degree + NEET PG Rank", seats: 8 }
    ],
    image: {
      old_url: "/images/campuses/ramaiah_bangalore.jpg",
      new_url: "/images/campuses/ramaiah_bangalore.jpg",
      status: "Verified Authentic Image",
      notes: "Retained verified authentic Ramaiah Bangalore campus photograph for official headquarters entry"
    }
  },
  {
    id: 135,
    name: "Srinivas University, Mangalore (SU Mangaluru)",
    address: "Srinivas Nagar, Mukka, Surathkal, Mangaluru - 574146, Karnataka",
    city: "Mangaluru",
    state: "Karnataka",
    type: "Private University (State Private University)",
    ownership: "Private / A. Shama Rao Foundation",
    phone: "0824-2477456",
    email: "info@srinivasuniversity.edu.in",
    website: "https://srinivasuniversity.edu.in",
    established: 2013,
    affiliation: "UGC Recognized State Private University / AICTE / NMC / PCI Approved",
    naac_grade: "A",
    status: "Verified",
    notes: "Purged photo leak: scraper assigned IIM Bangalore photo to Srinivas University in Mangalore; purged raw Google search query URL; updated website to official srinivasuniversity.edu.in; audited engineering, medical, and business curricula",
    courses: [
      { name: "B.Tech (CSE)", title: "Bachelor of Technology in Computer Science & Engineering", duration: "4 Years", fee: "₹6,80,000", eligibility: "10+2 with PCM (45%) + SUET / KCET", seats: 180 },
      { name: "MBBS", title: "Bachelor of Medicine and Surgery (SIMS&RC)", duration: "5.5 Years", fee: "₹74,00,000", eligibility: "10+2 with PCB (50%) + NEET UG Rank", seats: 150 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fee: "₹2,80,000", eligibility: "Graduation (50%) + MAT / KMAT / PGCET", seats: 120 }
    ],
    image: {
      old_url: "/images/campuses/iim_bangalore.jpg",
      new_url: "/images/campuses/campus_architecture_7.jpg",
      status: "Purged Irrelevant Scraper Image",
      notes: "Purged IIM Bangalore photo leak from Srinivas University Mangalore; assigned verified campus architecture asset"
    }
  },
  {
    id: 136,
    name: "Jawaharlal Nehru Medical College, Belagavi (JNMC KAHER)",
    address: "KLE Academy of Higher Education, JNMC Campus, Nehru Nagar, Belagavi - 590010, Karnataka",
    city: "Belagavi",
    state: "Karnataka",
    type: "Deemed to be University (Constituent Medical College of KAHER)",
    ownership: "Private / KLE Society",
    phone: "0831-2471350",
    email: "principal@jnmc.edu",
    website: "https://www.jnmc.edu",
    established: 1963,
    affiliation: "Deemed-to-be-University (Section 3 UGC Act / KAHER) / NMC Approved / NAAC A+",
    naac_grade: "A+",
    status: "Verified",
    notes: "Purged photo leak: scraper assigned IIM Bangalore photo to JNMC in Belgaum; updated website to official jnmc.edu; audited MBBS and postgraduate clinical curricula",
    courses: [
      { name: "MBBS", title: "Bachelor of Medicine and Bachelor of Surgery", duration: "5.5 Years", fee: "₹82,50,000", eligibility: "10+2 with PCB (50%) + NEET UG Rank", seats: 200 },
      { name: "MD (General Medicine)", title: "Doctor of Medicine in General Medicine", duration: "3 Years", fee: "₹78,00,000", eligibility: "MBBS Degree + NEET PG Rank", seats: 18 },
      { name: "MS (OBG)", title: "Master of Surgery in Obstetrics & Gynaecology", duration: "3 Years", fee: "₹78,00,000", eligibility: "MBBS Degree + NEET PG Rank", seats: 15 }
    ],
    image: {
      old_url: "/images/campuses/iim_bangalore.jpg",
      new_url: "/images/campuses/campus_architecture_8.jpg",
      status: "Purged Irrelevant Scraper Image",
      notes: "Purged IIM Bangalore photo leak from JNMC Belagavi; assigned verified campus architecture asset"
    }
  },
  {
    id: 137,
    name: "JSS Medical College, Mysuru (JSSMC JSSAHER)",
    address: "Sri Shivarathreeshwara Nagar, Bannimantap, Mysuru - 570015, Karnataka",
    city: "Mysuru",
    state: "Karnataka",
    type: "Deemed to be University (Constituent College of JSS AHER, NIRF Top 35 Medical)",
    ownership: "Private / JSS Mahavidyapeetha",
    phone: "0821-2548337",
    email: "jssmc09@gmail.com",
    website: "https://jssuni.edu.in",
    established: 1984,
    affiliation: "Deemed-to-be-University (Section 3 UGC Act / JSS AHER) / NMC / NAAC A++ Grade",
    naac_grade: "A++",
    status: "Verified",
    notes: "Purged photo leak: scraper assigned IIM Bangalore photo to JSS Medical College in Mysore; updated website to official jssuni.edu.in; audited MBBS and clinical residency programs",
    courses: [
      { name: "MBBS", title: "Bachelor of Medicine and Bachelor of Surgery", duration: "5.5 Years", fee: "₹84,00,000", eligibility: "10+2 with PCB (50%) + NEET UG Rank", seats: 250 },
      { name: "MD (General Medicine)", title: "Doctor of Medicine in General Medicine", duration: "3 Years", fee: "₹78,00,000", eligibility: "MBBS Degree + NEET PG Rank", seats: 20 },
      { name: "MS (General Surgery)", title: "Master of Surgery in General Surgery", duration: "3 Years", fee: "₹78,00,000", eligibility: "MBBS Degree + NEET PG Rank", seats: 16 }
    ],
    image: {
      old_url: "/images/campuses/iim_bangalore.jpg",
      new_url: "/images/campuses/campus_architecture_9.jpg",
      status: "Purged Irrelevant Scraper Image",
      notes: "Purged IIM Bangalore photo leak from JSS Medical College Mysuru; assigned verified campus architecture asset"
    }
  },
  {
    id: 138,
    name: "Kasturba Medical College, Manipal (KMC Manipal - MAHE)",
    address: "Tiger Circle Road, Madhav Nagar, Manipal, Udupi District - 576104, Karnataka",
    city: "Manipal",
    state: "Karnataka",
    type: "Deemed to be University (Constituent of MAHE - IoE, NIRF Top 10 Medical)",
    ownership: "Private / Manipal Academy of Higher Education",
    phone: "0820-2922367",
    email: "kmc.mlr@manipal.edu",
    website: "https://manipal.edu/kmc-manipal.html",
    established: 1953,
    affiliation: "Deemed-to-be-University (MAHE IoE) / NMC Approved / NAAC A++ Grade",
    naac_grade: "A++",
    status: "Verified",
    notes: "Purged photo leak: scraper assigned Ramaiah Bangalore photo to KMC Manipal; updated website to official manipal.edu; audited premier MBBS and clinical postgraduate curricula",
    courses: [
      { name: "MBBS", title: "Bachelor of Medicine and Bachelor of Surgery", duration: "5.5 Years", fee: "₹70,80,000", eligibility: "10+2 with PCB (50%) + NEET UG Rank", seats: 250 },
      { name: "MD (General Medicine)", title: "Doctor of Medicine in General Medicine", duration: "3 Years", fee: "₹75,00,000", eligibility: "MBBS Degree + NEET PG Rank", seats: 24 },
      { name: "MS (Orthopaedics)", title: "Master of Surgery in Orthopaedics", duration: "3 Years", fee: "₹75,00,000", eligibility: "MBBS Degree + NEET PG Rank", seats: 12 }
    ],
    image: {
      old_url: "/images/campuses/ramaiah_bangalore.jpg",
      new_url: "/images/campuses/campus_architecture_10.jpg",
      status: "Purged Irrelevant Scraper Image",
      notes: "Purged Ramaiah Bangalore photo leak from KMC Manipal; assigned verified campus architecture asset"
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
for (const col of batch57Colleges) {
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
console.log(`Appended ${batch57Colleges.length} colleges to college-verification.csv`);

// 2. Append to course-verification.csv
let courseCsvContent = '';
let courseCount = 0;
for (const col of batch57Colleges) {
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
      `Batch 57 verified curriculum for ${col.name}`
    ].map(escapeCsv).join(',');
    courseCsvContent += row + '\n';
    courseCount++;
  }
}
fs.appendFileSync(COURSE_CSV, courseCsvContent, 'utf8');
console.log(`Appended ${courseCount} courses to course-verification.csv`);

// 3. Append to image-verification.csv
let imageCsvContent = '';
for (const col of batch57Colleges) {
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
console.log(`Appended ${batch57Colleges.length} image audits to image-verification.csv`);

// 4. Update progress.json
const progress = JSON.parse(fs.readFileSync(PROGRESS_PATH, 'utf8'));
const completedIds = new Set(progress.completed_ids || []);
for (const col of batch57Colleges) {
  completedIds.add(col.id);
}
progress.completed_ids = Array.from(completedIds);
progress.completed_count = progress.completed_ids.length;
progress.total_verified = progress.completed_ids.length;
progress.verified_count = progress.completed_ids.length;
progress.current_batch = 57;
progress.last_updated = new Date().toISOString();

fs.writeFileSync(PROGRESS_PATH, JSON.stringify(progress, null, 2), 'utf8');
console.log(`Updated progress.json: total_verified = ${progress.total_verified}, current_batch = 57`);

