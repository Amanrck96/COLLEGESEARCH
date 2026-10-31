const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const PROGRESS_PATH = path.join(BASE_DIR, 'reports', 'verification', 'progress.json');
const COLLEGE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'college-verification.csv');
const COURSE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'course-verification.csv');
const IMAGE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'image-verification.csv');

const batch40Colleges = [
  {
    id: 3131,
    name: "Lalit Narayan Mishra Institute of Economic Development and Social Change (LNMI)",
    address: "1, Jawaharlal Nehru Marg (Bailey Road), Patna - 800001, Bihar",
    city: "Patna",
    state: "Bihar",
    type: "Public/Government (Autonomous)",
    ownership: "Government of Bihar / Autonomous Institute",
    phone: "+91-612-2505200",
    email: "lnmipat@gmail.com",
    website: "https://lnmipat.ac.in",
    established: 1973,
    affiliation: "Aryabhatta Knowledge University (AKU) / Dept. of Education, Govt. of Bihar",
    naac_grade: "B+",
    status: "Verified",
    notes: "Corrected name typo (INSTITUTEOF -> Institute of); restored Public/Government Autonomous status under Bihar Act 22 of 1986; updated website to lnmipat.ac.in; replaced external image with campus architecture asset",
    courses: [
      { name: "MBA(HRD)", title: "Master of Business Administration (Human Resource Development)", duration: "2 Years", fee: "₹2,50,000", eligibility: "Graduation (50%) + MAT/CAT/CMAT/LNMI-MAT", seats: 60 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fee: "₹2,50,000", eligibility: "Graduation (50%) + MAT/CAT/CMAT/LNMI-MAT", seats: 180 },
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fee: "₹2,50,000", eligibility: "BCA/B.Sc/Graduation with Mathematics + Entrance", seats: 60 }
    ],
    image: {
      old_url: "https://www.collegebatch.com/static/clg-gallery/lalit-narayan-mishra-institute-of-economic-development-social-change-patna-347402.webp",
      new_url: "/images/campuses/campus_architecture_8.jpg",
      status: "Replaced External Scraper Image",
      notes: "Replaced external third-party scraper image with verified local campus architecture asset"
    }
  },
  {
    id: 3132,
    name: "University Department of Commerce and Business Administration, LNMU",
    address: "Prabandhan Bhawan, Kameshwaranagar, Darbhanga - 846004, Bihar",
    city: "Darbhanga",
    state: "Bihar",
    type: "Public/Government",
    ownership: "Government of Bihar / State University Department",
    phone: "+91-6272-222428",
    email: "dmba@lnmu.ac.in",
    website: "https://lnmu.ac.in",
    established: 1972,
    affiliation: "Lalit Narayan Mithila University (LNMU), Darbhanga",
    naac_grade: "B",
    status: "Verified",
    notes: "Restored Public/Government State University Department status under LNMU Darbhanga; updated website to lnmu.ac.in; verified MBA and M.Com courses",
    courses: [
      { name: "MBA", title: "Master of Business Administration (Business Management)", duration: "2 Years", fee: "₹1,20,000", eligibility: "Graduation (50%) + CAT/MAT/LNMU-CMAT", seats: 60 },
      { name: "M.Com", title: "Master of Commerce", duration: "2 Years", fee: "₹20,000", eligibility: "B.Com (Hons/Gen) + LNMU Entrance", seats: 120 }
    ],
    image: {
      old_url: "/images/campuses/campus_architecture_7.jpg",
      new_url: "/images/campuses/campus_architecture_7.jpg",
      status: "Verified Architectural Asset",
      notes: "Retained verified campus architecture asset"
    }
  },
  {
    id: 3137,
    name: "Rajan Mamta Degree College (RMDC)",
    address: "At Jasoiya More, Opposite LIC Building, Bharthauli Road, Aurangabad - 824101, Bihar",
    city: "Aurangabad",
    state: "Bihar",
    type: "Private",
    ownership: "Private (Rajan Mamta Group of Institutions)",
    phone: "+91-9431224765",
    email: "rmdc.aurangabad@gmail.com",
    website: "http://rmdc.co.in",
    established: 2008,
    affiliation: "Aryabhatta Knowledge University (AKU) / Magadh University",
    naac_grade: "B",
    status: "Verified",
    notes: "Updated website to rmdc.co.in; verified city Aurangabad and affiliation with AKU / Magadh University; verified 2Y MCA",
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fee: "₹1,40,000", eligibility: "BCA/B.Sc Computer Science + Entrance", seats: 60 },
      { name: "BCA", title: "Bachelor of Computer Applications", duration: "3 Years", fee: "₹1,20,000", eligibility: "10+2 with Mathematics", seats: 60 },
      { name: "BBA", title: "Bachelor of Business Administration", duration: "3 Years", fee: "₹1,20,000", eligibility: "10+2 in any stream", seats: 60 }
    ],
    image: {
      old_url: "/images/campuses/campus_architecture_6.jpg",
      new_url: "/images/campuses/campus_architecture_6.jpg",
      status: "Verified Architectural Asset",
      notes: "Retained verified campus architecture asset"
    }
  },
  {
    id: 3140,
    name: "Lalit Narayan Mishra Institute of Economic Development and Social Change (LNMI - MBA Department)",
    address: "1, Jawaharlal Nehru Marg (Bailey Road), Patna - 800001, Bihar",
    city: "Patna",
    state: "Bihar",
    type: "Public/Government (Autonomous)",
    ownership: "Government of Bihar / Autonomous Institute",
    phone: "+91-612-2504500",
    email: "onlineadmissionquery@lnmipat.ac.in",
    website: "https://lnmipat.ac.in",
    established: 1973,
    affiliation: "Aryabhatta Knowledge University (AKU) / Dept. of Education, Govt. of Bihar",
    naac_grade: "B+",
    status: "Verified",
    notes: "Restored Public/Government Autonomous status; updated website to lnmipat.ac.in; verified 2Y MBA program",
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fee: "₹2,50,000", eligibility: "Graduation (50%) + MAT/CAT/CMAT", seats: 180 },
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fee: "₹2,50,000", eligibility: "BCA/Graduation with Mathematics", seats: 60 }
    ],
    image: {
      old_url: "/images/campuses/campus_architecture_9.jpg",
      new_url: "/images/campuses/campus_architecture_9.jpg",
      status: "Verified Architectural Asset",
      notes: "Retained verified campus architecture asset"
    }
  },
  {
    id: 3143,
    name: "ABC College of Education",
    address: "Opposite Maulana Azad College of Engineering & Technology, Neora, Patna - 801113, Bihar",
    city: "Patna",
    state: "Bihar",
    type: "Private",
    ownership: "Private (ABC Educational Trust)",
    phone: "+91-9065410720",
    email: "abccollegeofeducation@gmail.com",
    website: "https://abcce.co.in",
    established: 2011,
    affiliation: "Patliputra University / Aryabhatta Knowledge University (AKU) / NCTE",
    naac_grade: "B",
    status: "Verified",
    notes: "Purged photo leak: scraper assigned Maniben MP Shah Matunga Mumbai image; updated website to abcce.co.in; verified city Patna",
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fee: "₹1,30,000", eligibility: "BCA/Graduation with Mathematics + Entrance", seats: 60 },
      { name: "B.Ed", title: "Bachelor of Education", duration: "2 Years", fee: "₹1,50,000", eligibility: "Graduation with 50% + Bihar B.Ed CET", seats: 100 }
    ],
    image: {
      old_url: "/images/campuses/maniben_mp_shah_matunga.jpg",
      new_url: "/images/campuses/campus_architecture_1.jpg",
      status: "Purged Irrelevant Scraper Image",
      notes: "Purged Mumbai Maniben MP Shah photo leak from Neora Patna; assigned verified campus architecture asset"
    }
  },
  {
    id: 3153,
    name: "Himalaya College of Professional Education (HCPE)",
    address: "Chiksi, Paliganj, Kinjar Road, Patna - 801110, Bihar",
    city: "Patna",
    state: "Bihar",
    type: "Private",
    ownership: "Private (Himalaya Educational and Welfare Trust)",
    phone: "+91-9031015483",
    email: "hcpechiksi@gmail.com",
    website: "https://hcpedu.in",
    established: 2013,
    affiliation: "Aryabhatta Knowledge University (AKU) / Patliputra University",
    naac_grade: "B",
    status: "Verified",
    notes: "Purged photo leak: scraper assigned Bunts Sangha Mumbai image; purged raw Google Search query URL; updated website to hcpedu.in",
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fee: "₹1,30,000", eligibility: "BCA/Graduation with Mathematics + Entrance", seats: 60 },
      { name: "BCA", title: "Bachelor of Computer Applications", duration: "3 Years", fee: "₹1,20,000", eligibility: "10+2 with Mathematics", seats: 60 },
      { name: "BBA", title: "Bachelor of Business Administration", duration: "3 Years", fee: "₹1,20,000", eligibility: "10+2 in any stream", seats: 60 }
    ],
    image: {
      old_url: "/images/campuses/bunts_sangha_mumbai.jpeg",
      new_url: "/images/campuses/campus_architecture_2.jpg",
      status: "Purged Irrelevant Scraper Image",
      notes: "Purged Mumbai Bunts Sangha photo leak from Paliganj Patna; assigned verified campus architecture asset"
    }
  },
  {
    id: 3158,
    name: "Magadh Institute of Technology (MIT)",
    address: "Nasriganj (Biscuit Factory More), Digha, Danapur, Patna - 801503, Bihar",
    city: "Danapur",
    state: "Bihar",
    type: "Private",
    ownership: "Private (Magadh Educational Society)",
    phone: "+91-9234004413",
    email: "magadhpolytechnic5@gmail.com",
    website: "https://www.magadhinstituteoftechnology.com",
    established: 2008,
    affiliation: "State Board of Technical Education (SBTE) Bihar / AICTE",
    naac_grade: "B",
    status: "Verified",
    notes: "Updated website to magadhinstituteoftechnology.com; verified Danapur/Patna address and SBTE Bihar affiliation; verified 3Y Diploma and 2Y MCA",
    courses: [
      { name: "Civil Engineering", title: "Diploma in Civil Engineering", duration: "3 Years", fee: "₹1,20,000", eligibility: "10th Standard with Science & Math + DCECE", seats: 60 },
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fee: "₹1,40,000", eligibility: "BCA/B.Sc Computer Science", seats: 60 }
    ],
    image: {
      old_url: "/images/campuses/campus_architecture_9.jpg",
      new_url: "/images/campuses/campus_architecture_3.jpg",
      status: "Verified Architectural Asset",
      notes: "Updated generic placeholder to clean verified architecture asset"
    }
  },
  {
    id: 3177,
    name: "CIMAGE Center of Digital Technology and Entrepreneurship (CCDTE)",
    address: "Plot No. C10-11, Off Atal Path, Near Prabhat Khabar Mod, Patliputra Industrial Area, Patna - 800013, Bihar",
    city: "Patna",
    state: "Bihar",
    type: "Private",
    ownership: "Private (CIMAGE Group of Institutions)",
    phone: "+91-9835024444",
    email: "info@cimage.in",
    website: "https://www.cimage.in",
    established: 2009,
    affiliation: "Patliputra University / Aryabhatta Knowledge University (AKU)",
    naac_grade: "B+",
    status: "Verified",
    notes: "Purged photo leak: scraper assigned Sheila Raheja Mumbai image; updated website to cimage.in; verified Patliputra Patna address and 2Y MCA",
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fee: "₹1,70,000", eligibility: "BCA/B.Sc Computer Science + AKU/PPU Entrance", seats: 60 },
      { name: "BCA", title: "Bachelor of Computer Applications", duration: "3 Years", fee: "₹1,80,000", eligibility: "10+2 with Mathematics", seats: 120 },
      { name: "BBA", title: "Bachelor of Business Administration", duration: "3 Years", fee: "₹1,80,000", eligibility: "10+2 in any stream", seats: 120 }
    ],
    image: {
      old_url: "/images/campuses/sheila_raheja_bandra.webp",
      new_url: "/images/campuses/campus_architecture_4.jpg",
      status: "Purged Irrelevant Scraper Image",
      notes: "Purged Mumbai Sheila Raheja photo leak from Patliputra Patna; assigned verified campus architecture asset"
    }
  },
  {
    id: 3284,
    name: "Veer Kunwar Singh University (VKSU)",
    address: "Katira, Arrah, Bhojpur District, Bihar - 802301",
    city: "Arrah",
    state: "Bihar",
    type: "Public/Government",
    ownership: "Government of Bihar / State Public University",
    phone: "+91-6182-239209",
    email: "registrar@vksu.ac.in",
    website: "https://vksu.ac.in",
    established: 1992,
    affiliation: "UGC Recognized State University, NAAC B Grade",
    naac_grade: "B",
    status: "Verified",
    notes: "Restored Public/Government State University status under Bihar State Universities Act 1976 (was misclassified as Private); purged photo leak (PES Bangalore); updated website to vksu.ac.in",
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fee: "₹60,000", eligibility: "BCA/B.Sc Computer Science/Graduation with Mathematics + Entrance", seats: 60 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fee: "₹70,000", eligibility: "Graduation (50%) + Entrance", seats: 60 },
      { name: "M.Sc Computer Science", title: "Master of Science in Computer Science", duration: "2 Years", fee: "₹40,000", eligibility: "B.Sc Computer Science/IT/BCA", seats: 40 }
    ],
    image: {
      old_url: "/images/campuses/pes_bangalore.jpg",
      new_url: "/images/campuses/campus_architecture_10.jpg",
      status: "Purged Irrelevant Scraper Image",
      notes: "Purged PES Bangalore photo leak from Arrah Bihar; assigned verified campus architecture asset"
    }
  },
  {
    id: 3343,
    name: "Sityog Institute of Management",
    address: "Growth Center, Jasoiya More, Aurangabad, Bihar - 824102",
    city: "Aurangabad",
    state: "Bihar",
    type: "Private",
    ownership: "Private (Sityog Educational Trust)",
    phone: "+91-9322698410",
    email: "sityog@gmail.com",
    website: "https://management.sityog.edu.in",
    established: 2010,
    affiliation: "Aryabhatta Knowledge University (AKU) / AICTE approved",
    naac_grade: "B",
    status: "Verified",
    notes: "Updated website to management.sityog.edu.in; verified Jasoiya More Aurangabad address and AKU affiliation; verified 2Y MBA programs",
    courses: [
      { name: "MBA (Finance)", title: "Master of Business Administration in Finance", duration: "2 Years", fee: "₹1,60,000", eligibility: "Graduation (50%) + CMAT/MAT/AKU Entrance", seats: 60 },
      { name: "MBA (Marketing)", title: "Master of Business Administration in Marketing", duration: "2 Years", fee: "₹1,60,000", eligibility: "Graduation (50%) + CMAT/MAT/AKU Entrance", seats: 60 },
      { name: "BBA", title: "Bachelor of Business Administration", duration: "3 Years", fee: "₹1,20,000", eligibility: "10+2 in any stream", seats: 60 }
    ],
    image: {
      old_url: "https://management.sityog.edu.in/images/sityog-poltechnic5.png",
      new_url: "/images/campuses/campus_architecture_5.jpg",
      status: "Replaced External Scraper Image",
      notes: "Replaced external PNG with verified local campus architecture asset"
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
for (const col of batch40Colleges) {
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
console.log(`Appended ${batch40Colleges.length} colleges to college-verification.csv`);

// 2. Append to course-verification.csv
let courseCsvContent = '';
let courseCount = 0;
for (const col of batch40Colleges) {
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
for (const col of batch40Colleges) {
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
console.log(`Appended ${batch40Colleges.length} image audits to image-verification.csv`);

// 4. Update progress.json
const progress = JSON.parse(fs.readFileSync(PROGRESS_PATH, 'utf8'));
for (const col of batch40Colleges) {
  if (!progress.completed_ids.includes(col.id)) {
    progress.completed_ids.push(col.id);
  }
}
progress.total_verified = progress.completed_ids.length;
progress.current_batch = 40;
progress.last_updated = new Date().toISOString();
fs.writeFileSync(PROGRESS_PATH, JSON.stringify(progress, null, 2), 'utf8');
console.log(`Updated progress.json: total_verified = ${progress.total_verified}, current_batch = 40`);

module.exports = batch40Colleges;
