const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const SITE_DATA_PATH = path.join(BASE_DIR, 'public', 'siteData.json');

const batch50Updates = {
  57: {
    name: "Indian Institute of Technology Madras (IIT Madras)",
    address: "Sardar Patel Road, Opposite C.L.R.I, Adyar, Chennai - 600036, Tamil Nadu",
    city: "Chennai",
    state: "Tamil Nadu",
    type: "Institute of National Importance",
    ownership: "Ministry of Education, Government of India (IIT Act)",
    phone: "044-22578100",
    email: "registrar@iitm.ac.in",
    website: "https://www.iitm.ac.in",
    image: "/images/campuses/campus_architecture_1.jpg",
    img: "/images/campuses/campus_architecture_1.jpg",
    verified: true,
    courses: [
      { name: "B.Tech (CSE)", title: "Bachelor of Technology in Computer Science & Engineering", duration: "4 Years", fees: "₹10,00,000", fee: "₹10,00,000", eligibility: "10+2 with PCM + JEE Advanced", type: "ENGINEERING", intake: 87 },
      { name: "B.Tech (EE)", title: "Bachelor of Technology in Electrical Engineering", duration: "4 Years", fees: "₹10,00,000", fee: "₹10,00,000", eligibility: "10+2 with PCM + JEE Advanced", type: "ENGINEERING", intake: 154 },
      { name: "MBA (DoMS)", title: "Master of Business Administration (DoMS)", duration: "2 Years", fees: "₹11,00,000", fee: "₹11,00,000", eligibility: "Graduation (60%) + CAT Exam", type: "MANAGEMENT", intake: 80 }
    ]
  },
  58: {
    name: "Indian Institute of Management Rohtak (IIM Rohtak)",
    address: "Management City, NH-10, Southern Bypass, Sunaria, Rohtak - 124010, Haryana",
    city: "Rohtak",
    state: "Haryana",
    type: "Institute of National Importance",
    ownership: "Ministry of Education, Government of India (IIM Act 2017)",
    phone: "01262-228555",
    email: "pgpadmission@iimrohtak.ac.in",
    website: "https://www.iimrohtak.ac.in",
    image: "/images/campuses/campus_architecture_2.jpg",
    img: "/images/campuses/campus_architecture_2.jpg",
    verified: true,
    courses: [
      { name: "PGP (MBA)", title: "Post Graduate Programme in Management (MBA)", duration: "2 Years", fees: "₹17,90,000", fee: "₹17,90,000", eligibility: "Graduation (50%) + CAT Exam", type: "MANAGEMENT", intake: 290 },
      { name: "IPM", title: "Integrated Programme in Management (BBA + MBA)", duration: "5 Years", fees: "₹34,00,000", fee: "₹34,00,000", eligibility: "10+2 (60%) + IPM AT Rohtak", type: "MANAGEMENT", intake: 180 },
      { name: "EPGPx", title: "Executive Post Graduate Programme for Executives", duration: "1 Year", fees: "₹7,50,000", fee: "₹7,50,000", eligibility: "Graduation + Minimum 5 Years Work Experience", type: "MANAGEMENT", intake: 60 }
    ]
  },
  59: {
    name: "Indian Institute of Management Nagpur (IIM Nagpur)",
    address: "Plot No. 1, Sector 20, MIHAN (Non-SEZ), Nagpur - 441108, Maharashtra",
    city: "Nagpur",
    state: "Maharashtra",
    type: "Institute of National Importance",
    ownership: "Ministry of Education, Government of India (IIM Act 2017)",
    phone: "0712-2870300",
    email: "admissions@iimnagpur.ac.in",
    website: "https://www.iimnagpur.ac.in",
    image: "/images/campuses/campus_architecture_3.jpg",
    img: "/images/campuses/campus_architecture_3.jpg",
    verified: true,
    courses: [
      { name: "MBA (PGP)", title: "Post Graduate Programme in Management (MBA)", duration: "2 Years", fees: "₹18,90,000", fee: "₹18,90,000", eligibility: "Graduation (50%) + CAT Exam", type: "MANAGEMENT", intake: 240 },
      { name: "Executive MBA", title: "Executive Master of Business Administration", duration: "2 Years", fees: "₹10,50,000", fee: "₹10,50,000", eligibility: "Graduation + Minimum 3 Years Work Experience", type: "MANAGEMENT", intake: 60 }
    ]
  },
  60: {
    name: "Indian Institute of Information Technology Design & Manufacturing Kurnool (IIITDM Kurnool)",
    address: "Jagannathagattu, Dinnedevarapadu, Kurnool - 518007, Andhra Pradesh",
    city: "Kurnool",
    state: "Andhra Pradesh",
    type: "Institute of National Importance",
    ownership: "Ministry of Education, Government of India (IIIT Act)",
    phone: "08518-289114",
    email: "academics@iiitk.ac.in",
    website: "https://www.iiitk.ac.in",
    image: "/images/campuses/campus_architecture_4.jpg",
    img: "/images/campuses/campus_architecture_4.jpg",
    verified: true,
    courses: [
      { name: "B.Tech (CSE-Design)", title: "Bachelor of Technology in Computer Science & Engineering with specialization in Design", duration: "4 Years", fees: "₹6,80,000", fee: "₹6,80,000", eligibility: "10+2 with PCM + JEE Main / CSAB", type: "ENGINEERING", intake: 120 },
      { name: "B.Tech (AI & DS)", title: "Bachelor of Technology in Artificial Intelligence & Data Science", duration: "4 Years", fees: "₹6,80,000", fee: "₹6,80,000", eligibility: "10+2 with PCM + JEE Main / CSAB", type: "ENGINEERING", intake: 60 },
      { name: "M.Tech (Smart Mfg)", title: "Master of Technology in Smart Manufacturing", duration: "2 Years", fees: "₹1,80,000", fee: "₹1,80,000", eligibility: "B.Tech + GATE / CCMT", type: "ENGINEERING", intake: 25 }
    ]
  },
  61: {
    name: "Satyam International Institute of Technology (SIIT Patna)",
    address: "Patna-Gaya Road, Gaurichak, Patna - 800007, Bihar",
    city: "Patna",
    state: "Bihar",
    type: "Private (Polytechnic & Technology Institute)",
    ownership: "Private / Satyam Educational Trust",
    phone: "0612-2972044",
    email: "info@satyaminternational.com",
    website: "https://satyaminternational.com",
    image: "/images/campuses/campus_architecture_5.jpg",
    img: "/images/campuses/campus_architecture_5.jpg",
    verified: true,
    courses: [
      { name: "Diploma (Civil)", title: "Diploma in Civil Engineering", duration: "3 Years", fees: "₹1,50,000", fee: "₹1,50,000", eligibility: "10th Class (35%) + DCECE Exam", type: "ENGINEERING", intake: 120 },
      { name: "Diploma (Mechanical)", title: "Diploma in Mechanical Engineering", duration: "3 Years", fees: "₹1,50,000", fee: "₹1,50,000", eligibility: "10th Class (35%) + DCECE Exam", type: "ENGINEERING", intake: 120 },
      { name: "Diploma (Electrical)", title: "Diploma in Electrical Engineering", duration: "3 Years", fees: "₹1,50,000", fee: "₹1,50,000", eligibility: "10th Class (35%) + DCECE Exam", type: "ENGINEERING", intake: 60 }
    ]
  },
  62: {
    name: "Satyam International Institute of Technology and Management (SIITM Patna)",
    address: "Patna-Gaya Road, Gaurichak, Patna - 800007, Bihar",
    city: "Patna",
    state: "Bihar",
    type: "Private (Technical & Management Institute)",
    ownership: "Private / Satyam Educational Trust",
    phone: "0612-2972045",
    email: "admission@siitm.org",
    website: "https://siitm.org",
    image: "/images/campuses/campus_architecture_6.jpg",
    img: "/images/campuses/campus_architecture_6.jpg",
    verified: true,
    courses: [
      { name: "BCA", title: "Bachelor of Computer Applications", duration: "3 Years", fees: "₹1,80,000", fee: "₹1,80,000", eligibility: "10+2 with Mathematics (45%)", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "BBA", title: "Bachelor of Business Administration", duration: "3 Years", fees: "₹1,80,000", fee: "₹1,80,000", eligibility: "10+2 in any stream (45%)", type: "MANAGEMENT", intake: 60 }
    ]
  },
  63: {
    name: "Satyam International Institute of Technology & Management (SIITM Patna - Management Campus)",
    address: "Patna-Gaya Road, Gaurichak, Patna - 800007, Bihar",
    city: "Patna",
    state: "Bihar",
    type: "Private (Management Institute)",
    ownership: "Private / Satyam Educational Trust",
    phone: "0612-2972044",
    email: "contact@satyaminternational.com",
    website: "https://satyaminternational.com",
    image: "/images/campuses/campus_architecture_7.jpg",
    img: "/images/campuses/campus_architecture_7.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹2,20,000", fee: "₹2,20,000", eligibility: "Graduation (50%) + MAT / CMAT", type: "MANAGEMENT", intake: 60 },
      { name: "B.Com (Professional)", title: "Bachelor of Commerce (Professional)", duration: "3 Years", fees: "₹1,20,000", fee: "₹1,20,000", eligibility: "10+2 with Commerce (45%)", type: "COMMERCE", intake: 60 }
    ]
  },
  64: {
    name: "International Institute of Technology & Management (IITM Murthal)",
    address: "49 KM Stone, NH-44 (GT Karnal Road), Murthal, Sonipat - 131039, Haryana",
    city: "Sonipat",
    state: "Haryana",
    type: "Private (Self-Financed Technical Institute)",
    ownership: "Private / D.M. Educational & Charitable Trust",
    phone: "0130-2483900",
    email: "info@iitm.ac.in",
    website: "https://www.iitm.ac.in",
    image: "/images/campuses/campus_architecture_8.jpg",
    img: "/images/campuses/campus_architecture_8.jpg",
    verified: true,
    courses: [
      { name: "B.Tech (CSE)", title: "Bachelor of Technology in Computer Science & Engineering", duration: "4 Years", fees: "₹3,20,000", fee: "₹3,20,000", eligibility: "10+2 with PCM (45%) + JEE Main / HSTES", type: "ENGINEERING", intake: 120 },
      { name: "B.Tech (Mechanical)", title: "Bachelor of Technology in Mechanical Engineering", duration: "4 Years", fees: "₹3,00,000", fee: "₹3,00,000", eligibility: "10+2 with PCM (45%) + JEE Main / HSTES", type: "ENGINEERING", intake: 60 },
      { name: "Diploma (Polytechnic)", title: "Diploma in Engineering (Mechanical / Civil)", duration: "3 Years", fees: "₹1,20,000", fee: "₹1,20,000", eligibility: "10th Class (35%) + DET Haryana", type: "ENGINEERING", intake: 120 }
    ]
  },
  65: {
    name: "Barrister Ranjit Mohanty International Institute of Technology (BRMIIT Bhubaneswar)",
    address: "At-Pandra, PO-Rasulgarh, Bhubaneswar - 751010, Odisha",
    city: "Bhubaneswar",
    state: "Odisha",
    type: "Private (Engineering College)",
    ownership: "Private / Ranjit Mohanty Education Trust",
    phone: "0674-2580123",
    email: "info@brmiit.ac.in",
    website: "https://brmiit.ac.in",
    image: "/images/campuses/campus_architecture_9.jpg",
    img: "/images/campuses/campus_architecture_9.jpg",
    verified: true,
    courses: [
      { name: "B.Tech (CSE)", title: "Bachelor of Technology in Computer Science & Engineering", duration: "4 Years", fees: "₹3,40,000", fee: "₹3,40,000", eligibility: "10+2 with PCM (45%) + OJEE / JEE Main", type: "ENGINEERING", intake: 60 },
      { name: "B.Tech (Civil)", title: "Bachelor of Technology in Civil Engineering", duration: "4 Years", fees: "₹3,20,000", fee: "₹3,20,000", eligibility: "10+2 with PCM (45%) + OJEE / JEE Main", type: "ENGINEERING", intake: 60 },
      { name: "Diploma (Civil)", title: "Diploma in Civil Engineering", duration: "3 Years", fees: "₹1,30,000", fee: "₹1,30,000", eligibility: "10th Class (35%)", type: "ENGINEERING", intake: 60 }
    ]
  },
  66: {
    name: "Indian Institute of Management and Science (IIMS Bhubaneswar / Khordha)",
    address: "Plot No. 622, Palaspur, Chhatabar, Jatni, Khordha - 752054, Odisha",
    city: "Bhubaneswar",
    state: "Odisha",
    type: "Private (Management & IT Institute)",
    ownership: "Private / IIMS Educational Society",
    phone: "0674-2490111",
    email: "info@iimsats.com",
    website: "https://iimats.com",
    image: "/images/campuses/campus_architecture_10.jpg",
    img: "/images/campuses/campus_architecture_10.jpg",
    verified: true,
    courses: [
      { name: "BBA", title: "Bachelor of Business Administration", duration: "3 Years", fees: "₹1,80,000", fee: "₹1,80,000", eligibility: "10+2 in any stream (45%)", type: "MANAGEMENT", intake: 60 },
      { name: "BCA", title: "Bachelor of Computer Applications", duration: "3 Years", fees: "₹1,80,000", fee: "₹1,80,000", eligibility: "10+2 with Mathematics (45%)", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹2,40,000", fee: "₹2,40,000", eligibility: "Graduation (50%) + OJEE / MAT", type: "MANAGEMENT", intake: 60 }
    ]
  }
};

const rawData = fs.readFileSync(SITE_DATA_PATH, 'utf8');
const data = JSON.parse(rawData);
const colleges = Array.isArray(data.colleges) ? data.colleges : data;

let updatedCount = 0;
for (const col of colleges) {
  if (batch50Updates[col.id]) {
    const upd = batch50Updates[col.id];
    Object.assign(col, upd);
    updatedCount++;
    console.log(`Updated ID: ${col.id} - ${col.name}`);
  }
}

fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(data, null, 2), 'utf8');
console.log(`Successfully updated ${updatedCount} colleges in ${SITE_DATA_PATH}`);
