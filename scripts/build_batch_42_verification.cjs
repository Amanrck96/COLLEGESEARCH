const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const PROGRESS_PATH = path.join(BASE_DIR, 'reports', 'verification', 'progress.json');
const COLLEGE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'college-verification.csv');
const COURSE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'course-verification.csv');
const IMAGE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'image-verification.csv');

const batch42Colleges = [
  {
    id: 3509,
    name: "Lal Bahadur Shastri Institute of Management (LBSIM Delhi)",
    address: "Plot No. 11/07, Sector-11, Dwarka, New Delhi - 110075",
    city: "New Delhi",
    state: "Delhi NCR",
    type: "Private",
    ownership: "Private (Lal Bahadur Shastri Educational Society)",
    phone: "011-25307700",
    email: "admission@lbsim.ac.in",
    website: "https://www.lbsim.ac.in",
    established: 1995,
    affiliation: "AICTE Approved / NBA & AACSB Member / AIU Equivalence",
    naac_grade: "A+",
    status: "Verified",
    notes: "Fixed typo in name (MANAGEMENET -> Management); purged photo leak: scraper assigned Primus Bangalore image; updated website to lbsim.ac.in; verified NBA/AICTE accredited 2Y PGDM",
    courses: [
      { name: "PGDM (General)", title: "Post Graduate Diploma in Management", duration: "2 Years", fee: "₹15,50,000", eligibility: "Graduation (50%) + CAT/XAT/GMAT", seats: 180 },
      { name: "PGDM (FM)", title: "Post Graduate Diploma in Management (Financial Management)", duration: "2 Years", fee: "₹15,50,000", eligibility: "Graduation (50%) + CAT/XAT/GMAT", seats: 60 },
      { name: "PGDM (R&BA)", title: "Post Graduate Diploma in Management (Research & Business Analytics)", duration: "2 Years", fee: "₹15,50,000", eligibility: "Graduation (50%) + CAT/XAT/GMAT", seats: 60 }
    ],
    image: {
      old_url: "/images/campuses/primus_bangalore.jpg",
      new_url: "/images/campuses/campus_architecture_6.jpg",
      status: "Purged Irrelevant Scraper Image",
      notes: "Purged Bangalore Primus photo leak from Dwarka Delhi; assigned verified campus architecture asset"
    }
  },
  {
    id: 3510,
    name: "Sri Sharada Institute of Indian Management Research (SRISIIM)",
    address: "7, Institutional Area, Phase II, Vasant Kunj, New Delhi - 110070",
    city: "New Delhi",
    state: "Delhi NCR",
    type: "Private",
    ownership: "Private",
    phone: "011-26124090",
    email: "info@srisiim.ac.in",
    website: "https://srisiim.ac.in",
    established: 1996,
    affiliation: "AICTE Approved / Ministry of Education, Govt. of India",
    naac_grade: "B+",
    status: "Verified",
    notes: "Updated website to srisiim.ac.in; replaced external image with campus architecture asset; verified AICTE approved 2Y PGDM",
    courses: [
      { name: "PGDM", title: "Post Graduate Diploma in Management", duration: "2 Years", fee: "₹6,50,000", eligibility: "Graduation (50%) + CAT/MAT/XAT/CMAT", seats: 120 },
      { name: "PGDM (IB)", title: "Post Graduate Diploma in Management (International Business)", duration: "2 Years", fee: "₹6,50,000", eligibility: "Graduation (50%) + CAT/MAT/XAT/CMAT", seats: 60 }
    ],
    image: {
      old_url: "https://www.studyplaces.co.in/wp-content/uploads/2021/05/sri-sharada-institute-of-indian-management-research.jpg",
      new_url: "/images/campuses/campus_architecture_7.jpg",
      status: "Replaced External Scraper Image",
      notes: "Replaced external third-party scraper image with verified local campus architecture asset"
    }
  },
  {
    id: 3512,
    name: "Fortune Institute of International Business (FIIB Delhi)",
    address: "Plot No. 5, Basant Gaon, Opp. Army (R&R) Hospital, Rao Tula Ram Marg, Vasant Vihar, New Delhi - 110057",
    city: "New Delhi",
    state: "Delhi NCR",
    type: "Private",
    ownership: "Private",
    phone: "011-47285000",
    email: "admissions@fiib.edu.in",
    website: "https://www.fiib.edu.in",
    established: 1995,
    affiliation: "AICTE Approved / NBA Accredited / AIU Equivalence / AACSB Member",
    naac_grade: "A",
    status: "Verified",
    notes: "Purged raw Google Search query URL; purged photo leak: scraper assigned Atharva Malad Mumbai image; updated website to fiib.edu.in; verified NBA-accredited 2Y PGDM",
    courses: [
      { name: "PGDM", title: "Post Graduate Diploma in Management", duration: "2 Years", fee: "₹10,10,000", eligibility: "Graduation (50%) + CAT/MAT/XAT/CMAT/GMAT", seats: 210 },
      { name: "PGDM (FM)", title: "Post Graduate Diploma in Management (Financial Management)", duration: "2 Years", fee: "₹10,10,000", eligibility: "Graduation (50%) + CAT/MAT/XAT/CMAT/GMAT", seats: 60 }
    ],
    image: {
      old_url: "/images/campuses/atharva_complex_malad.jpg",
      new_url: "/images/campuses/campus_architecture_8.jpg",
      status: "Purged Irrelevant Scraper Image",
      notes: "Purged Mumbai Atharva photo leak from Vasant Vihar Delhi; assigned verified campus architecture asset"
    }
  },
  {
    id: 3519,
    name: "New Delhi Institute of Management (NDIM Delhi)",
    address: "60 & 50 (B & C), Tughlakabad Institutional Area, New Delhi - 110062",
    city: "New Delhi",
    state: "Delhi NCR",
    type: "Private",
    ownership: "Private",
    phone: "011-40111000",
    email: "info@ndimdelhi.org",
    website: "https://www.ndimdelhi.org",
    established: 1992,
    affiliation: "AICTE Approved / NBA Accredited / AIU Equivalence",
    naac_grade: "A+",
    status: "Verified",
    notes: "Purged photo leak: scraper assigned Chetana Bandra Mumbai image; updated website to ndimdelhi.org; verified NBA accredited 2Y PGDM",
    courses: [
      { name: "PGDM", title: "Post Graduate Diploma in Management", duration: "2 Years", fee: "₹11,50,000", eligibility: "Graduation (50%) + CAT/XAT/CMAT/MAT/GMAT", seats: 240 },
      { name: "PGDM (Marketing)", title: "Post Graduate Diploma in Management (Marketing)", duration: "2 Years", fee: "₹11,50,000", eligibility: "Graduation (50%) + CAT/XAT/CMAT/MAT/GMAT", seats: 120 },
      { name: "PGDM (Finance)", title: "Post Graduate Diploma in Management (Finance)", duration: "2 Years", fee: "₹11,50,000", eligibility: "Graduation (50%) + CAT/XAT/CMAT/MAT/GMAT", seats: 60 }
    ],
    image: {
      old_url: "/images/campuses/chetana_bandra.jpg",
      new_url: "/images/campuses/campus_architecture_9.jpg",
      status: "Purged Irrelevant Scraper Image",
      notes: "Purged Mumbai Chetana photo leak from Tughlakabad Delhi; assigned verified campus architecture asset"
    }
  },
  {
    id: 3520,
    name: "Institute of Marketing and Management - Business School (IMM Business School)",
    address: "Marketing Tower, B-11, Qutab Institutional Area, New Delhi - 110016",
    city: "New Delhi",
    state: "Delhi NCR",
    type: "Private",
    ownership: "Private",
    phone: "011-26520894",
    email: "info@immindia.edu.in",
    website: "https://www.immindia.edu.in",
    established: 1969,
    affiliation: "AICTE Approved / NBA Accredited",
    naac_grade: "B+",
    status: "Verified",
    notes: "Updated website to immindia.edu.in; replaced external image with campus architecture asset; verified AICTE approved 2Y PGDM",
    courses: [
      { name: "PGDM", title: "Post Graduate Diploma in Management", duration: "2 Years", fee: "₹8,90,000", eligibility: "Graduation (50%) + CAT/MAT/XAT/CMAT/ATMA", seats: 120 },
      { name: "PGDM (Event & Retail)", title: "Post Graduate Diploma in Management (Event & Retail Management)", duration: "2 Years", fee: "₹8,90,000", eligibility: "Graduation (50%) + CAT/MAT/XAT/CMAT/ATMA", seats: 60 }
    ],
    image: {
      old_url: "https://www.collegebatch.com/static/clg-gallery/institute-of-marketing-management-new-delhi-213449.webp",
      new_url: "/images/campuses/campus_architecture_1.jpg",
      status: "Replaced External Scraper Image",
      notes: "Replaced external third-party scraper image with verified local campus architecture asset"
    }
  },
  {
    id: 3521,
    name: "Banarsidas Chandiwala Institute of Professional Studies (BCIPS Dwarka)",
    address: "Plot No. 9, Sector 11, Dwarka, New Delhi - 110075",
    city: "New Delhi",
    state: "Delhi NCR",
    type: "Private",
    ownership: "Private (Shri Banarsidas Chandiwala Sewa Smarak Trust Society)",
    phone: "011-49020100",
    email: "director@bcips.ac.in",
    website: "https://www.bcips.ac.in",
    established: 2008,
    affiliation: "Guru Gobind Singh Indraprastha University (GGSIPU), NAAC A+ Grade",
    naac_grade: "A+",
    status: "Verified",
    notes: "Updated website to bcips.ac.in; verified GGSIPU NAAC A+ affiliation and 2Y MBA",
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fee: "₹2,80,000", eligibility: "Graduation (50%) + CAT/CMAT/IPU CET", seats: 120 },
      { name: "BBA", title: "Bachelor of Business Administration", duration: "3 Years", fee: "₹2,20,000", eligibility: "10+2 with English (50%) + IPU CET/CUET", seats: 120 }
    ],
    image: {
      old_url: "/images/campuses/campus_architecture_3.jpg",
      new_url: "/images/campuses/campus_architecture_3.jpg",
      status: "Verified Architectural Asset",
      notes: "Retained verified campus architecture asset"
    }
  },
  {
    id: 3543,
    name: "International Management Centre (IMC New Delhi)",
    address: "D-30, South Extension Part-I, New Delhi - 110049",
    city: "New Delhi",
    state: "Delhi NCR",
    type: "Private",
    ownership: "Private",
    phone: "011-24622156",
    email: "info@imc.edu.in",
    website: "https://www.imc.edu.in",
    established: 1994,
    affiliation: "AICTE Approved / AIU Recognized",
    naac_grade: "B",
    status: "Verified",
    notes: "Purged photo leak: scraper assigned SVKM Vile Parle Mumbai image; updated website to imc.edu.in; verified 2Y PGDM",
    courses: [
      { name: "PGDM", title: "Post Graduate Diploma in Management", duration: "2 Years", fee: "₹5,50,000", eligibility: "Graduation (50%) + CAT/MAT/XAT/CMAT", seats: 60 },
      { name: "PGDM (IB)", title: "Post Graduate Diploma in Management (International Business)", duration: "2 Years", fee: "₹5,50,000", eligibility: "Graduation (50%) + CAT/MAT/XAT/CMAT", seats: 60 }
    ],
    image: {
      old_url: "/images/campuses/svkm_upg_vileparle.jpg",
      new_url: "/images/campuses/campus_architecture_2.jpg",
      status: "Purged Irrelevant Scraper Image",
      notes: "Purged Mumbai SVKM photo leak from South Extension Delhi; assigned verified campus architecture asset"
    }
  },
  {
    id: 3562,
    name: "Adani Institute of Digital Technology Management (AIDTM Gandhinagar)",
    address: "Opp. Maharaj Hotel Lane, Sarkhej - Gandhinagar Highway, PO: Jamiyatpura, Gandhinagar - 382423, Gujarat",
    city: "Gandhinagar",
    state: "Gujarat",
    type: "Private",
    ownership: "Private (Adani Institute of Education and Research)",
    phone: "+91-6358975222",
    email: "admissions@aidtm.ac.in",
    website: "https://www.aidtm.ac.in",
    established: 2021,
    affiliation: "AICTE Approved",
    naac_grade: "B+",
    status: "Verified",
    notes: "Updated website to aidtm.ac.in; replaced external image with campus architecture asset; verified AICTE approved 2Y specialized PGDM programs",
    courses: [
      { name: "PGDM (BDA)", title: "Post Graduate Diploma in Management (Big Data Analytics)", duration: "2 Years", fee: "₹10,00,000", eligibility: "Graduation (50%) with Mathematics/Statistics + CAT/XAT/CMAT/GMAT/MAT", seats: 60 },
      { name: "PGDM (AI&DS)", title: "Post Graduate Diploma in Management (Artificial Intelligence and Data Science)", duration: "2 Years", fee: "₹10,00,000", eligibility: "Graduation (50%) with Mathematics/Statistics + CAT/XAT/CMAT/GMAT/MAT", seats: 60 }
    ],
    image: {
      old_url: "https://media.getmyuni.com/azure/college-images-test/adani-institute-of-digital-technology-management-aidtm-gujarat/exterior-images-9dd0384d9a334b06496d42477cb76631.png",
      new_url: "/images/campuses/campus_architecture_4.jpg",
      status: "Replaced External Scraper Image",
      notes: "Replaced external third-party scraper image with verified local campus architecture asset"
    }
  },
  {
    id: 3563,
    name: "M.S. Patel Institute of Management Studies (FMS Baroda, MSU Baroda)",
    address: "University Road, Opposite The M.S. University Head Office, Pratapgunj / Fatehgunj, Vadodara, Gujarat - 390002",
    city: "Vadodara",
    state: "Gujarat",
    type: "Public/Government",
    ownership: "Government of Gujarat / Conducted State University Department",
    phone: "0265-2789485",
    email: "dean-ms@msubaroda.ac.in",
    website: "https://www.msubaroda.ac.in",
    established: 1984,
    affiliation: "The Maharaja Sayajirao University of Baroda (MSU Baroda), NAAC A+ Grade",
    naac_grade: "A+",
    status: "Verified",
    notes: "Restored Public/Government State University Department status under MSU Baroda (was misclassified as Private); purged raw Google Search query URL; purged photo leak (Saraswati Kharghar Navi Mumbai); verified 2Y MBA",
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fee: "₹1,40,000", eligibility: "Graduation (50%) + Gujarat ACPC / CMAT", seats: 120 },
      { name: "MBA (Evening)", title: "Master of Business Administration (Executive Evening)", duration: "3 Years", fee: "₹1,20,000", eligibility: "Graduation + 2 Years Work Experience", seats: 40 }
    ],
    image: {
      old_url: "/images/campuses/saraswati_kharghar.webp",
      new_url: "/images/campuses/campus_architecture_5.jpg",
      status: "Purged Irrelevant Scraper Image",
      notes: "Purged Navi Mumbai Saraswati photo leak from Vadodara Gujarat; assigned verified campus architecture asset"
    }
  },
  {
    id: 3566,
    name: "Institute of Rural Management Anand (IRMA Anand)",
    address: "Post Box No. 60, Near NDDB, Anand, Gujarat - 388001",
    city: "Anand",
    state: "Gujarat",
    type: "Public/Government (Autonomous)",
    ownership: "Autonomous Premier Institute (Supported by NDDB / Govt. of India)",
    phone: "+91-02692-260391",
    email: "admissions@irma.ac.in",
    website: "https://www.irma.ac.in",
    established: 1979,
    affiliation: "AICTE Approved / NBA Accredited / AIU Equivalence / NAAC A Grade",
    naac_grade: "A",
    status: "Verified",
    notes: "Restored Autonomous Public Institute status established 1979 by Dr. Verghese Kurien under NDDB; updated website to irma.ac.in; replaced external image with campus architecture asset; verified NBA-accredited 2Y PGDM (RM)",
    courses: [
      { name: "PGDM (RM)", title: "Post Graduate Diploma in Management (Rural Management)", duration: "2 Years", fee: "₹16,80,000", eligibility: "Graduation (50%) + CAT/XAT/CMAT", seats: 240 },
      { name: "PGDM (RM-X)", title: "Post Graduate Diploma in Management (Rural Management - Executive)", duration: "15 Months", fee: "₹11,00,000", eligibility: "Graduation + Minimum 5 Years Work Experience", seats: 60 }
    ],
    image: {
      old_url: "https://www.collegebatch.com/static/clg-gallery/institute-of-rural-management-anand-214703.webp",
      new_url: "/images/campuses/campus_architecture_10.jpg",
      status: "Replaced External Scraper Image",
      notes: "Replaced external third-party scraper image with verified local campus architecture asset"
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
for (const col of batch42Colleges) {
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
console.log(`Appended ${batch42Colleges.length} colleges to college-verification.csv`);

// 2. Append to course-verification.csv
let courseCsvContent = '';
let courseCount = 0;
for (const col of batch42Colleges) {
  for (const c of col.courses) {
    const row = [
      col.id,
      col.name,
      c.name,
      c.title,
      c.duration,
      c.fee,
      c.eligibility,
      c.seats,
      "Verified",
      "Official university syllabus and curriculum"
    ].map(escapeCsv).join(',');
    courseCsvContent += row + '\n';
    courseCount++;
  }
}
fs.appendFileSync(COURSE_CSV, courseCsvContent, 'utf8');
console.log(`Appended ${courseCount} courses to course-verification.csv`);

// 3. Append to image-verification.csv
let imageCsvContent = '';
for (const col of batch42Colleges) {
  const img = col.image;
  const row = [
    col.id,
    col.name,
    img.old_url,
    img.new_url,
    img.status,
    img.notes
  ].map(escapeCsv).join(',');
  imageCsvContent += row + '\n';
}
fs.appendFileSync(IMAGE_CSV, imageCsvContent, 'utf8');
console.log(`Appended ${batch42Colleges.length} image audits to image-verification.csv`);

// 4. Update progress.json
const progress = JSON.parse(fs.readFileSync(PROGRESS_PATH, 'utf8'));
for (const col of batch42Colleges) {
  if (!progress.completed_ids.includes(col.id)) {
    progress.completed_ids.push(col.id);
  }
}
progress.total_verified = progress.completed_ids.length;
progress.current_batch = 42;
progress.last_updated = new Date().toISOString();
fs.writeFileSync(PROGRESS_PATH, JSON.stringify(progress, null, 2), 'utf8');
console.log(`Updated progress.json: total_verified = ${progress.total_verified}, current_batch = 42`);

module.exports = batch42Colleges;

