const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const SITE_DATA_PATH = path.join(BASE_DIR, 'public', 'siteData.json');

const batch52Updates = {
  77: {
    name: "Government Polytechnic Sira (GPT Sira)",
    address: "Near Silk Farm, NH-48, Sira, Tumakuru District - 572137, Karnataka",
    city: "Sira",
    state: "Karnataka",
    type: "Public/Government (State Polytechnic)",
    ownership: "Department of Technical Education, Government of Karnataka",
    phone: "08139-275137",
    email: "gptsira@gmail.com",
    website: "https://dte.karnataka.gov.in",
    image: "/images/campuses/campus_architecture_1.jpg",
    img: "/images/campuses/campus_architecture_1.jpg",
    verified: true,
    courses: [
      { name: "Diploma (Civil)", title: "Diploma in Civil Engineering", duration: "3 Years", fees: "₹12,000", fee: "₹12,000", eligibility: "10th SSLC (35%)", type: "ENGINEERING", intake: 60 },
      { name: "Diploma (Mechanical)", title: "Diploma in Mechanical Engineering", duration: "3 Years", fees: "₹12,000", fee: "₹12,000", eligibility: "10th SSLC (35%)", type: "ENGINEERING", intake: 60 },
      { name: "Diploma (ECE)", title: "Diploma in Electronics & Communication Engineering", duration: "3 Years", fees: "₹12,000", fee: "₹12,000", eligibility: "10th SSLC (35%)", type: "ENGINEERING", intake: 60 }
    ]
  },
  80: {
    name: "Administrative Management College (AMC Bengaluru)",
    address: "18th KM, Bannerghatta Main Road, Kalkere, Bengaluru - 560083, Karnataka",
    city: "Bengaluru",
    state: "Karnataka",
    type: "Private (Management & IT College)",
    ownership: "Private / Paramahamsa Foundation Trust",
    phone: "080-27828655",
    email: "admissions@amceducation.in",
    website: "https://amceducation.in",
    image: "/images/campuses/campus_architecture_2.jpg",
    img: "/images/campuses/campus_architecture_2.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹3,50,000", fee: "₹3,50,000", eligibility: "Graduation (50%) + KMAT / PGCET / MAT", type: "MANAGEMENT", intake: 180 },
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹2,50,000", fee: "₹2,50,000", eligibility: "BCA / B.Sc with Mathematics + PGCET / KMAT", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "BCA", title: "Bachelor of Computer Applications", duration: "3 Years", fees: "₹2,10,000", fee: "₹2,10,000", eligibility: "10+2 in any stream (45%)", type: "COMPUTER APPLICATIONS", intake: 120 }
    ]
  },
  81: {
    name: "Government First Grade College Shahapur (GFGC Shahapur)",
    address: "B.B. Road, Near New Tahasildar Office, Shahapur, Yadgir District - 585223, Karnataka",
    city: "Shahapur",
    state: "Karnataka",
    type: "Public/Government (Degree College)",
    ownership: "Department of Collegiate Education, Government of Karnataka",
    phone: "08473-242220",
    email: "gfgcshahapur@gmail.com",
    website: "https://dce.karnataka.gov.in",
    image: "/images/campuses/campus_architecture_3.jpg",
    img: "/images/campuses/campus_architecture_3.jpg",
    verified: true,
    courses: [
      { name: "B.Com", title: "Bachelor of Commerce", duration: "3 Years", fees: "₹10,500", fee: "₹10,500", eligibility: "10+2 with Commerce / Arts / Science", type: "COMMERCE", intake: 180 },
      { name: "B.A.", title: "Bachelor of Arts", duration: "3 Years", fees: "₹9,000", fee: "₹9,000", eligibility: "10+2 in any stream", type: "ARTS", intake: 240 },
      { name: "B.Sc", title: "Bachelor of Science", duration: "3 Years", fees: "₹12,000", fee: "₹12,000", eligibility: "10+2 with Science (PCB/PCM)", type: "SCIENCE", intake: 120 }
    ]
  },
  82: {
    name: "Srinivas University (Bengaluru Centre)",
    address: "#822, 80 Feet Road, 8th Block, Koramangala, Opposite National Games Village, Bengaluru - 560095, Karnataka",
    city: "Bengaluru",
    state: "Karnataka",
    type: "Private (State University Extension Centre)",
    ownership: "Private / A. Shama Rao Foundation",
    phone: "080-25700822",
    email: "info@srinivasuniversity.edu.in",
    website: "https://srinivasuniversity.edu.in",
    image: "/images/campuses/campus_architecture_4.jpg",
    img: "/images/campuses/campus_architecture_4.jpg",
    verified: true,
    courses: [
      { name: "BCA", title: "Bachelor of Computer Applications (Cloud / AI)", duration: "3 Years", fees: "₹2,40,000", fee: "₹2,40,000", eligibility: "10+2 in any stream (45%)", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "BBA", title: "Bachelor of Business Administration (Aviation / Logistics)", duration: "3 Years", fees: "₹2,40,000", fee: "₹2,40,000", eligibility: "10+2 in any stream (45%)", type: "MANAGEMENT", intake: 60 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹3,00,000", fee: "₹3,00,000", eligibility: "Graduation (50%) + SUET / KMAT", type: "MANAGEMENT", intake: 60 }
    ]
  },
  83: {
    name: "European Institute of Management & Research (EIMR Business School)",
    address: "No. 2, S. Kariyappa Road, Basavanagudi, Bengaluru - 560004, Karnataka",
    city: "Bengaluru",
    state: "Karnataka",
    type: "Private (Business School)",
    ownership: "Private / European Educational Trust",
    phone: "080-41203344",
    email: "admissions@eimrbusinessschool.com",
    website: "https://eimrbusinessschool.com",
    image: "/images/campuses/campus_architecture_5.jpg",
    img: "/images/campuses/campus_architecture_5.jpg",
    verified: true,
    courses: [
      { name: "PGDM", title: "Post Graduate Diploma in Management", duration: "2 Years", fees: "₹5,50,000", fee: "₹5,50,000", eligibility: "Graduation (50%) + MAT / CAT / CMAT", type: "MANAGEMENT", intake: 120 },
      { name: "Global MBA", title: "International Master of Business Administration", duration: "2 Years", fees: "₹7,50,000", fee: "₹7,50,000", eligibility: "Graduation (50%) + English Proficiency", type: "MANAGEMENT", intake: 60 }
    ]
  },
  84: {
    name: "Government Tool Room and Training Centre (GTTC Bengaluru)",
    address: "Survey No. 117, Bellary Road, Near Bangalore Palace, Rajajinagar Industrial Estate, Bengaluru - 560010, Karnataka",
    city: "Bengaluru",
    state: "Karnataka",
    type: "Public/Government (Autonomous Technical Society)",
    ownership: "Department of Commerce & Industries, Government of Karnataka",
    phone: "080-23156191",
    email: "gttcblr@gmail.com",
    website: "https://gttc.karnataka.gov.in",
    image: "/images/campuses/campus_architecture_6.jpg",
    img: "/images/campuses/campus_architecture_6.jpg",
    verified: true,
    courses: [
      { name: "Diploma (Tool & Die)", title: "Diploma in Tool & Die Making (DTDM)", duration: "4 Years", fees: "₹60,000", fee: "₹60,000", eligibility: "10th SSLC (50% in Math & Science)", type: "ENGINEERING", intake: 60 },
      { name: "Diploma (Mechatronics)", title: "Diploma in Mechatronics", duration: "3 Years", fees: "₹45,000", fee: "₹45,000", eligibility: "10th SSLC (45%)", type: "ENGINEERING", intake: 60 },
      { name: "Diploma (Precision Mfg)", title: "Diploma in Precision Manufacturing", duration: "3 Years", fees: "₹45,000", fee: "₹45,000", eligibility: "10th SSLC (45%)", type: "ENGINEERING", intake: 60 }
    ]
  },
  85: {
    name: "Vivekananda Institute of Management (VIM Bengaluru)",
    address: "Dr. Rajkumar Road, Rajajinagar II Stage, Bengaluru - 560010, Karnataka",
    city: "Bengaluru",
    state: "Karnataka",
    type: "Private (Management Institute)",
    ownership: "Private / Janatha Education Society (JES)",
    phone: "080-23371952",
    email: "vim@jes.edu.in",
    website: "https://vim.ac.in",
    image: "/images/campuses/campus_architecture_7.jpg",
    img: "/images/campuses/campus_architecture_7.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹3,20,000", fee: "₹3,20,000", eligibility: "Graduation (50%) + PGCET / KMAT", type: "MANAGEMENT", intake: 120 },
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹2,20,000", fee: "₹2,20,000", eligibility: "BCA / B.Sc with Mathematics + PGCET / KMAT", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "M.Com", title: "Master of Commerce", duration: "2 Years", fees: "₹1,20,000", fee: "₹1,20,000", eligibility: "B.Com / BBA (50%)", type: "COMMERCE", intake: 40 }
    ]
  },
  86: {
    name: "JSS College for Women Chamarajanagar",
    address: "Double Road, Chamarajanagar - 571313, Karnataka",
    city: "Chamarajanagar",
    state: "Karnataka",
    type: "Private Aided (Women's Degree College)",
    ownership: "Private / JSS Mahavidyapeetha, Mysuru",
    phone: "08226-222076",
    email: "jsswcc@gmail.com",
    website: "https://jsscwc.edu.in",
    image: "/images/campuses/campus_architecture_8.jpg",
    img: "/images/campuses/campus_architecture_8.jpg",
    verified: true,
    courses: [
      { name: "B.Com", title: "Bachelor of Commerce", duration: "3 Years", fees: "₹24,000", fee: "₹24,000", eligibility: "10+2 with Commerce / Arts / Science", type: "COMMERCE", intake: 180 },
      { name: "B.A.", title: "Bachelor of Arts", duration: "3 Years", fees: "₹18,000", fee: "₹18,000", eligibility: "10+2 in any stream", type: "ARTS", intake: 120 },
      { name: "B.Sc", title: "Bachelor of Science", duration: "3 Years", fees: "₹27,000", fee: "₹27,000", eligibility: "10+2 with Science (PCB/PCM)", type: "SCIENCE", intake: 90 }
    ]
  },
  87: {
    name: "Surana College (Peenya & South End Campus)",
    address: "No. 167, 5th Main Road, Industrial Suburb, 2nd Stage, Peenya, Bengaluru - 560022, Karnataka",
    city: "Bengaluru",
    state: "Karnataka",
    type: "Private (Autonomous Degree College)",
    ownership: "Private / GDA Foundation",
    phone: "080-28394466",
    email: "info@suranacollege.edu.in",
    website: "https://www.suranacollege.edu.in",
    image: "/images/campuses/campus_architecture_9.jpg",
    img: "/images/campuses/campus_architecture_9.jpg",
    verified: true,
    courses: [
      { name: "BCA", title: "Bachelor of Computer Applications", duration: "3 Years", fees: "₹2,40,000", fee: "₹2,40,000", eligibility: "10+2 in any stream with Mathematics (50%)", type: "COMPUTER APPLICATIONS", intake: 120 },
      { name: "BBA", title: "Bachelor of Business Administration", duration: "3 Years", fees: "₹2,40,000", fee: "₹2,40,000", eligibility: "10+2 in any stream (50%)", type: "MANAGEMENT", intake: 120 },
      { name: "B.Com", title: "Bachelor of Commerce", duration: "3 Years", fees: "₹1,80,000", fee: "₹1,80,000", eligibility: "10+2 with Commerce (50%)", type: "COMMERCE", intake: 180 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹4,50,000", fee: "₹4,50,000", eligibility: "Graduation (50%) + PGCET / KMAT / MAT", type: "MANAGEMENT", intake: 120 }
    ]
  },
  88: {
    name: "BGS First Grade College (BGS FGC Mandya)",
    address: "BG Nagara, Nagamangala Taluk, Mandya District - 571448, Karnataka",
    city: "Nagamangala",
    state: "Karnataka",
    type: "Private (Degree College)",
    ownership: "Private / Sri Adichunchanagiri Shikshana Trust (SAST)",
    phone: "08234-287285",
    email: "bgsfgcbgnagara@gmail.com",
    website: "https://acu.edu.in",
    image: "/images/campuses/campus_architecture_10.jpg",
    img: "/images/campuses/campus_architecture_10.jpg",
    verified: true,
    courses: [
      { name: "B.Com", title: "Bachelor of Commerce", duration: "3 Years", fees: "₹45,000", fee: "₹45,000", eligibility: "10+2 with Commerce / Arts / Science", type: "COMMERCE", intake: 100 },
      { name: "BCA", title: "Bachelor of Computer Applications", duration: "3 Years", fees: "₹60,000", fee: "₹60,000", eligibility: "10+2 with Mathematics / CS (45%)", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "B.Sc", title: "Bachelor of Science", duration: "3 Years", fees: "₹50,000", fee: "₹50,000", eligibility: "10+2 with Science (PCB/PCM)", type: "SCIENCE", intake: 60 }
    ]
  }
};

const rawData = fs.readFileSync(SITE_DATA_PATH, 'utf8');
const data = JSON.parse(rawData);
const colleges = Array.isArray(data.colleges) ? data.colleges : data;

let updatedCount = 0;
for (const col of colleges) {
  if (batch52Updates[col.id]) {
    const upd = batch52Updates[col.id];
    Object.assign(col, upd);
    updatedCount++;
    console.log(`Updated ID: ${col.id} - ${col.name}`);
  }
}

fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(data, null, 2), 'utf8');
console.log(`Successfully updated ${updatedCount} colleges in ${SITE_DATA_PATH}`);
