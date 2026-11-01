const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const SITE_DATA_PATH = path.join(BASE_DIR, 'public', 'siteData.json');

const batch56Updates = {
  119: {
    name: "Chitkara Design School, Chitkara University",
    address: "Chandigarh-Patiala National Highway (NH-64), Rajpura, Patiala District - 140401, Punjab",
    city: "Rajpura",
    state: "Punjab",
    type: "Private University (Design School)",
    ownership: "Private / Chitkara Educational Trust",
    phone: "01762-507084",
    email: "admissions@chitkara.edu.in",
    website: "https://www.chitkara.edu.in",
    image: "/images/campuses/campus_architecture_1.jpg",
    img: "/images/campuses/campus_architecture_1.jpg",
    verified: true,
    courses: [
      { name: "B.Des (Fashion)", title: "Bachelor of Design in Fashion Design", duration: "4 Years", fees: "₹7,60,000", fee: "₹7,60,000", eligibility: "10+2 in any stream (50%) + UCEED / Chitkara Design Test", type: "DESIGN", intake: 60 },
      { name: "B.Des (Interior)", title: "Bachelor of Design in Interior Design", duration: "4 Years", fees: "₹7,60,000", fee: "₹7,60,000", eligibility: "10+2 in any stream (50%)", type: "DESIGN", intake: 60 },
      { name: "B.Des (Animation)", title: "Bachelor of Design in Animation", duration: "4 Years", fees: "₹7,60,000", fee: "₹7,60,000", eligibility: "10+2 in any stream (50%)", type: "DESIGN", intake: 60 }
    ]
  },
  120: {
    name: "Chandigarh University (CU Mohali) - Engineering Campus",
    address: "NH-05, Ludhiana - Chandigarh State Highway, Mohali - 140413, Punjab",
    city: "Mohali",
    state: "Punjab",
    type: "Private University (NAAC A+ Accredited)",
    ownership: "Private / Chandigarh Educational Trust",
    phone: "1800-1212-88800",
    email: "admissions@cumail.in",
    website: "https://www.cuchd.in",
    image: "/images/campuses/campus_architecture_2.jpg",
    img: "/images/campuses/campus_architecture_2.jpg",
    verified: true,
    courses: [
      { name: "B.E. (CSE)", title: "Bachelor of Engineering in Computer Science and Engineering", duration: "4 Years", fees: "₹8,40,000", fee: "₹8,40,000", eligibility: "10+2 with PCM (50%) + CUCET Exam", type: "ENGINEERING", intake: 720 },
      { name: "B.E. (AI & ML)", title: "Bachelor of Engineering in Artificial Intelligence & Machine Learning", duration: "4 Years", fees: "₹9,20,000", fee: "₹9,20,000", eligibility: "10+2 with PCM (50%) + CUCET Exam", type: "ENGINEERING", intake: 180 },
      { name: "B.E. (Mechanical)", title: "Bachelor of Engineering in Mechanical Engineering", duration: "4 Years", fees: "₹6,80,000", fee: "₹6,80,000", eligibility: "10+2 with PCM (50%)", type: "ENGINEERING", intake: 120 }
    ]
  },
  121: {
    name: "Faculty of Engineering and Technology, Jain University (JU FET)",
    address: "45th km, NH-209, Jakkasandra Post, Kanakapura Main Road, Ramanagara District, Bengaluru - 562112, Karnataka",
    city: "Bengaluru",
    state: "Karnataka",
    type: "Deemed to be University (Faculty of Engineering)",
    ownership: "Private / JGI Group (SBMJEC Trust)",
    phone: "080-46650100",
    email: "fet@jainuniversity.ac.in",
    website: "https://set.jainuniversity.ac.in",
    image: "/images/campuses/campus_architecture_3.jpg",
    img: "/images/campuses/campus_architecture_3.jpg",
    verified: true,
    courses: [
      { name: "B.Tech (CSE)", title: "Bachelor of Technology in Computer Science & Engineering", duration: "4 Years", fees: "₹11,80,000", fee: "₹11,80,000", eligibility: "10+2 with PCM (60%) + JET Exam", type: "ENGINEERING", intake: 360 },
      { name: "B.Tech (AI & DS)", title: "Bachelor of Technology in Artificial Intelligence & Data Science", duration: "4 Years", fees: "₹12,40,000", fee: "₹12,40,000", eligibility: "10+2 with PCM (60%) + JET Exam", type: "ENGINEERING", intake: 120 },
      { name: "B.Tech (Aerospace)", title: "Bachelor of Technology in Aerospace Engineering", duration: "4 Years", fees: "₹10,50,000", fee: "₹10,50,000", eligibility: "10+2 with PCM (60%) + JET Exam", type: "ENGINEERING", intake: 60 }
    ]
  },
  122: {
    name: "New Horizon College of Engineering (NHCE Bengaluru)",
    address: "Bellandur Main Road, Near Marathahalli, Outer Ring Road, Kadabeesanahalli, Bengaluru - 560103, Karnataka",
    city: "Bengaluru",
    state: "Karnataka",
    type: "Private Autonomous (Engineering College / VTU Affiliated)",
    ownership: "Private / New Horizon Educational Institution",
    phone: "080-66297777",
    email: "admissionsnhce@newhorizonindia.edu",
    website: "https://newhorizonindia.edu/nhengineering",
    image: "/images/campuses/campus_architecture_4.jpg",
    img: "/images/campuses/campus_architecture_4.jpg",
    verified: true,
    courses: [
      { name: "B.E. (CSE)", title: "Bachelor of Engineering in Computer Science & Engineering", duration: "4 Years", fees: "₹10,00,000", fee: "₹10,00,000", eligibility: "10+2 with PCM (45%) + KCET / COMEDK", type: "ENGINEERING", intake: 240 },
      { name: "B.E. (ISE)", title: "Bachelor of Engineering in Information Science & Engineering", duration: "4 Years", fees: "₹9,00,000", fee: "₹9,00,000", eligibility: "10+2 with PCM (45%) + KCET / COMEDK", type: "ENGINEERING", intake: 180 },
      { name: "B.E. (AIML)", title: "Bachelor of Engineering in AI & Machine Learning", duration: "4 Years", fees: "₹9,50,000", fee: "₹9,50,000", eligibility: "10+2 with PCM (45%) + KCET / COMEDK", type: "ENGINEERING", intake: 120 }
    ]
  },
  123: {
    name: "University School of Business, Chandigarh University (USB Mohali)",
    address: "NH-05, Ludhiana - Chandigarh State Highway, Mohali - 140413, Punjab",
    city: "Mohali",
    state: "Punjab",
    type: "Private University (Business School)",
    ownership: "Private / Chandigarh Educational Trust",
    phone: "1800-1212-88800",
    email: "admissions@cumail.in",
    website: "https://www.cuchd.in",
    image: "/images/campuses/campus_architecture_5.jpg",
    img: "/images/campuses/campus_architecture_5.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration (General)", duration: "2 Years", fees: "₹5,20,000", fee: "₹5,20,000", eligibility: "Graduation (50%) + CUCET / CAT / MAT", type: "MANAGEMENT", intake: 360 },
      { name: "MBA (Business Analytics)", title: "MBA in Business Analytics in association with IBM", duration: "2 Years", fees: "₹6,10,000", fee: "₹6,10,000", eligibility: "Graduation (50%) + CUCET", type: "MANAGEMENT", intake: 120 },
      { name: "MBA (Banking & Finance)", title: "MBA in Banking and Financial Services", duration: "2 Years", fees: "₹5,60,000", fee: "₹5,60,000", eligibility: "Graduation (50%) + CUCET", type: "MANAGEMENT", intake: 120 }
    ]
  },
  124: {
    name: "Jagan Institute of Management Studies (JIMS Rohini Sector-5)",
    address: "3, Institutional Area, Sector-5, Rohini, New Delhi - 110085, Delhi NCR",
    city: "New Delhi",
    state: "Delhi NCR",
    type: "Private Autonomous (Management Institute)",
    ownership: "Private / Jagan Nath Gupta Memorial Educational Society",
    phone: "011-45184000",
    email: "admissions@jimsindia.org",
    website: "https://www.jimsindia.org",
    image: "/images/campuses/campus_architecture_6.jpg",
    img: "/images/campuses/campus_architecture_6.jpg",
    verified: true,
    courses: [
      { name: "PGDM", title: "Post Graduate Diploma in Management", duration: "2 Years", fees: "₹8,70,000", fee: "₹8,70,000", eligibility: "Graduation (50%) + CAT / XAT / MAT / CMAT", type: "MANAGEMENT", intake: 180 },
      { name: "PGDM (IB)", title: "Post Graduate Diploma in Management (International Business)", duration: "2 Years", fees: "₹8,70,000", fee: "₹8,70,000", eligibility: "Graduation (50%) + CAT / XAT / MAT / CMAT", type: "MANAGEMENT", intake: 60 },
      { name: "PGDM (RM)", title: "Post Graduate Diploma in Management (Retail Management)", duration: "2 Years", fees: "₹8,70,000", fee: "₹8,70,000", eligibility: "Graduation (50%) + CAT / XAT / MAT / CMAT", type: "MANAGEMENT", intake: 60 }
    ]
  },
  125: {
    name: "International Institute of Management Studies (IIMS Pune)",
    address: "Sr. No. 54, Nere Dattawadi, Near Hinjewadi IT Park, Pune - 411033, Maharashtra",
    city: "Pune",
    state: "Maharashtra",
    type: "Private (Management Institute / SaiBalaji Society)",
    ownership: "Private / SaiBalaji Education Society",
    phone: "020-66547500",
    email: "admissions@iimspune.edu.in",
    website: "https://www.iimspune.edu.in",
    image: "/images/campuses/campus_architecture_7.jpg",
    img: "/images/campuses/campus_architecture_7.jpg",
    verified: true,
    courses: [
      { name: "PGDM", title: "Post Graduate Diploma in Management", duration: "2 Years", fees: "₹8,90,000", fee: "₹8,90,000", eligibility: "Graduation (50%) + CAT / MAT / CMAT / ATMA", type: "MANAGEMENT", intake: 180 },
      { name: "PGDM (Retail)", title: "PGDM in Retail & Marketing Management", duration: "2 Years", fees: "₹8,90,000", fee: "₹8,90,000", eligibility: "Graduation (50%) + Entrance Score", type: "MANAGEMENT", intake: 60 },
      { name: "Executive PGDM", title: "Executive Post Graduate Diploma in Management", duration: "15 Months", fees: "₹4,50,000", fee: "₹4,50,000", eligibility: "Graduation + 2 Years Work Experience", type: "MANAGEMENT", intake: 60 }
    ]
  },
  126: {
    name: "Krishnadevaraya College of Dental Sciences and Hospital (KCDSH Bengaluru)",
    address: "Krishnadevarayanagar, Hunasamaranahalli, International Airport Road, Bengaluru - 562157, Karnataka",
    city: "Bengaluru",
    state: "Karnataka",
    type: "Private (Dental College & Hospital / RGUHS Affiliated)",
    ownership: "Private / Sri Krishnadevaraya Educational Trust",
    phone: "080-28467083",
    email: "principal@kcdsh.org",
    website: "https://kcdsh.org",
    image: "/images/campuses/campus_architecture_8.jpg",
    img: "/images/campuses/campus_architecture_8.jpg",
    verified: true,
    courses: [
      { name: "BDS", title: "Bachelor of Dental Surgery", duration: "5 Years", fees: "₹14,50,000", fee: "₹14,50,000", eligibility: "10+2 with PCB (50%) + NEET UG Rank", type: "DENTAL", intake: 100 },
      { name: "MDS (Endodontics)", title: "MDS in Conservative Dentistry & Endodontics", duration: "3 Years", fees: "₹18,00,000", fee: "₹18,00,000", eligibility: "BDS Degree + NEET MDS Rank", type: "DENTAL", intake: 6 },
      { name: "MDS (Oral Surgery)", title: "MDS in Oral & Maxillofacial Surgery", duration: "3 Years", fees: "₹18,00,000", fee: "₹18,00,000", eligibility: "BDS Degree + NEET MDS Rank", type: "DENTAL", intake: 6 }
    ]
  },
  127: {
    name: "Sri Devaraj Urs Academy of Higher Education and Research (SDUAHER Kolar)",
    address: "Tamaka, Kolar - 563103, Karnataka",
    city: "Kolar",
    state: "Karnataka",
    type: "Deemed to be University (Medical Academy)",
    ownership: "Private / Sri Devaraj Urs Educational Trust",
    phone: "08152-243003",
    email: "registrar@sduaher.ac.in",
    website: "https://sduaher.ac.in",
    image: "/images/campuses/campus_architecture_9.jpg",
    img: "/images/campuses/campus_architecture_9.jpg",
    verified: true,
    courses: [
      { name: "MBBS", title: "Bachelor of Medicine and Bachelor of Surgery", duration: "5.5 Years", fees: "₹79,20,000", fee: "₹79,20,000", eligibility: "10+2 with PCB (50%) + NEET UG Rank", type: "MEDICAL", intake: 150 },
      { name: "MD (General Medicine)", title: "Doctor of Medicine in General Medicine", duration: "3 Years", fees: "₹75,00,000", fee: "₹75,00,000", eligibility: "MBBS Degree + NEET PG Rank", type: "MEDICAL", intake: 12 },
      { name: "MS (General Surgery)", title: "Master of Surgery in General Surgery", duration: "3 Years", fees: "₹72,00,000", fee: "₹72,00,000", eligibility: "MBBS Degree + NEET PG Rank", type: "MEDICAL", intake: 10 }
    ]
  },
  128: {
    name: "Adichunchanagiri Institute of Medical Sciences (AIMS Mandya)",
    address: "Balagangadharanatha Nagara, BG Nagara, Nagamangala Taluk, Mandya District - 571448, Karnataka",
    city: "Mandya",
    state: "Karnataka",
    type: "Private (Constituent Medical College of Adichunchanagiri University)",
    ownership: "Private / Sri Adichunchanagiri Shikshana Trust",
    phone: "08234-287433",
    email: "aims@bgsaims.edu.in",
    website: "https://www.bgsaims.edu.in",
    image: "/images/campuses/campus_architecture_10.jpg",
    img: "/images/campuses/campus_architecture_10.jpg",
    verified: true,
    courses: [
      { name: "MBBS", title: "Bachelor of Medicine and Bachelor of Surgery", duration: "5.5 Years", fees: "₹74,00,000", fee: "₹74,00,000", eligibility: "10+2 with PCB (50%) + NEET UG Rank", type: "MEDICAL", intake: 150 },
      { name: "MD (Paediatrics)", title: "Doctor of Medicine in Paediatrics", duration: "3 Years", fees: "₹72,00,000", fee: "₹72,00,000", eligibility: "MBBS Degree + NEET PG Rank", type: "MEDICAL", intake: 8 },
      { name: "MS (Orthopaedics)", title: "Master of Surgery in Orthopaedics", duration: "3 Years", fees: "₹72,00,000", fee: "₹72,00,000", eligibility: "MBBS Degree + NEET PG Rank", type: "MEDICAL", intake: 6 }
    ]
  }
};

const siteData = JSON.parse(fs.readFileSync(SITE_DATA_PATH, 'utf8'));
let updatedCount = 0;

for (let i = 0; i < siteData.colleges.length; i++) {
  const col = siteData.colleges[i];
  if (batch56Updates[col.id]) {
    const upd = batch56Updates[col.id];
    Object.assign(col, upd);
    updatedCount++;
    console.log(`Updated ID: ${col.id} - ${col.name}`);
  }
}

fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(siteData, null, 2), 'utf8');
console.log(`Successfully updated ${updatedCount} colleges in ${SITE_DATA_PATH}`);
