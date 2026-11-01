const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const SITE_DATA_PATH = path.join(BASE_DIR, 'public', 'siteData.json');

const batch49Updates = {
  45: {
    name: "Indian Institute of Technology Dharwad (IIT Dharwad)",
    address: "Permanent Campus, Chikkamalligawad, Dharwad - 580007, Karnataka",
    city: "Dharwad",
    state: "Karnataka",
    type: "Institute of National Importance",
    ownership: "Ministry of Education, Government of India (IIT Act)",
    phone: "0836-2212838",
    email: "pro@iitdh.ac.in",
    website: "https://www.iitdh.ac.in",
    image: "/images/campuses/campus_architecture_1.jpg",
    img: "/images/campuses/campus_architecture_1.jpg",
    verified: true,
    courses: [
      { name: "B.Tech (CSE)", title: "Bachelor of Technology in Computer Science & Engineering", duration: "4 Years", fees: "₹10,00,000", fee: "₹10,00,000", eligibility: "10+2 with PCM + JEE Advanced", type: "ENGINEERING", intake: 65 },
      { name: "B.Tech (EE)", title: "Bachelor of Technology in Electrical Engineering", duration: "4 Years", fees: "₹10,00,000", fee: "₹10,00,000", eligibility: "10+2 with PCM + JEE Advanced", type: "ENGINEERING", intake: 60 },
      { name: "M.Tech (Data & AI)", title: "Master of Technology in Data Science & Artificial Intelligence", duration: "2 Years", fees: "₹1,50,000", fee: "₹1,50,000", eligibility: "B.Tech + GATE", type: "ENGINEERING", intake: 25 }
    ]
  },
  46: {
    name: "National Institute of Technology Karnataka (NIT Surathkal - Core Engineering)",
    address: "NH 66, Srinivasnagar, Surathkal, Mangalore - 575025, Karnataka",
    city: "Mangalore",
    state: "Karnataka",
    type: "Institute of National Importance",
    ownership: "Ministry of Education, Government of India (NITSER Act)",
    phone: "0824-2474000",
    email: "registrar@nitk.ac.in",
    website: "https://www.nitk.ac.in",
    image: "/images/campuses/campus_nit_surathkal.jpg",
    img: "/images/campuses/campus_nit_surathkal.jpg",
    verified: true,
    courses: [
      { name: "B.Tech (Mechanical)", title: "Bachelor of Technology in Mechanical Engineering", duration: "4 Years", fees: "₹6,80,000", fee: "₹6,80,000", eligibility: "10+2 with PCM + JEE Main / CSAB", type: "ENGINEERING", intake: 120 },
      { name: "B.Tech (Civil)", title: "Bachelor of Technology in Civil Engineering", duration: "4 Years", fees: "₹6,80,000", fee: "₹6,80,000", eligibility: "10+2 with PCM + JEE Main / CSAB", type: "ENGINEERING", intake: 120 },
      { name: "M.Tech (Thermal)", title: "Master of Technology in Thermal Engineering", duration: "2 Years", fees: "₹1,80,000", fee: "₹1,80,000", eligibility: "B.Tech in Mech + GATE / CCMT", type: "ENGINEERING", intake: 30 }
    ]
  },
  47: {
    name: "Indian Institute of Management Bodh Gaya (IIM Bodh Gaya)",
    address: "Prabandh Vihar, Bodh Gaya - 824234, Bihar",
    city: "Bodh Gaya",
    state: "Bihar",
    type: "Institute of National Importance",
    ownership: "Ministry of Education, Government of India (IIM Act 2017)",
    phone: "0631-2200238",
    email: "info@iimbg.ac.in",
    website: "https://www.iimbg.ac.in",
    image: "/images/campuses/campus_architecture_2.jpg",
    img: "/images/campuses/campus_architecture_2.jpg",
    verified: true,
    courses: [
      { name: "MBA (PGP)", title: "Post Graduate Programme in Management (MBA)", duration: "2 Years", fees: "₹17,00,000", fee: "₹17,00,000", eligibility: "Graduation (50%) + CAT Exam", type: "MANAGEMENT", intake: 300 },
      { name: "MBA (DBM)", title: "MBA in Digital Business Management", duration: "2 Years", fees: "₹17,00,000", fee: "₹17,00,000", eligibility: "Graduation (50%) + CAT Exam", type: "MANAGEMENT", intake: 60 },
      { name: "IPM", title: "Integrated Programme in Management (BBA + MBA)", duration: "5 Years", fees: "₹32,00,000", fee: "₹32,00,000", eligibility: "10+2 (60%) + JIPMAT Exam", type: "MANAGEMENT", intake: 120 }
    ]
  },
  49: {
    name: "Dr. B.R. Ambedkar National Institute of Technology Jalandhar (NIT Jalandhar)",
    address: "Grand Trunk Road, Amritsar Bypass, Jalandhar - 144008, Punjab",
    city: "Jalandhar",
    state: "Punjab",
    type: "Institute of National Importance",
    ownership: "Ministry of Education, Government of India (NITSER Act)",
    phone: "0181-2690301",
    email: "registrar@nitj.ac.in",
    website: "https://www.nitj.ac.in",
    image: "/images/campuses/campus_architecture_3.jpg",
    img: "/images/campuses/campus_architecture_3.jpg",
    verified: true,
    courses: [
      { name: "B.Tech (CSE)", title: "Bachelor of Technology in Computer Science & Engineering", duration: "4 Years", fees: "₹6,80,000", fee: "₹6,80,000", eligibility: "10+2 with PCM + JEE Main / CSAB", type: "ENGINEERING", intake: 120 },
      { name: "B.Tech (IT)", title: "Bachelor of Technology in Information Technology", duration: "4 Years", fees: "₹6,80,000", fee: "₹6,80,000", eligibility: "10+2 with PCM + JEE Main / CSAB", type: "ENGINEERING", intake: 110 },
      { name: "M.Tech (CSE)", title: "Master of Technology in Computer Science & Engineering", duration: "2 Years", fees: "₹1,80,000", fee: "₹1,80,000", eligibility: "B.Tech + GATE / CCMT", type: "ENGINEERING", intake: 35 }
    ]
  },
  50: {
    name: "Indian Institute of Management Amritsar (IIM Amritsar)",
    address: "Punjab Institute of Technology Building, Inside Govt. Polytechnic Campus, Poly Road, Amritsar - 143105, Punjab",
    city: "Amritsar",
    state: "Punjab",
    type: "Institute of National Importance",
    ownership: "Ministry of Education, Government of India (IIM Act 2017)",
    phone: "0183-2823101",
    email: "admissions@iimamritsar.ac.in",
    website: "https://www.iimamritsar.ac.in",
    image: "/images/campuses/campus_architecture_4.jpg",
    img: "/images/campuses/campus_architecture_4.jpg",
    verified: true,
    courses: [
      { name: "MBA (General)", title: "Master of Business Administration (General)", duration: "2 Years", fees: "₹17,50,000", fee: "₹17,50,000", eligibility: "Graduation (50%) + CAT Exam", type: "MANAGEMENT", intake: 240 },
      { name: "MBA (BA)", title: "MBA in Business Analytics", duration: "2 Years", fees: "₹17,50,000", fee: "₹17,50,000", eligibility: "Graduation (50%) + CAT Exam", type: "MANAGEMENT", intake: 60 },
      { name: "EMBA", title: "Executive Master of Business Administration", duration: "2 Years", fees: "₹13,00,000", fee: "₹13,00,000", eligibility: "Graduation + Minimum 3 Years Work Experience", type: "MANAGEMENT", intake: 60 }
    ]
  },
  51: {
    name: "Indian Institute of Management Visakhapatnam (IIM Visakhapatnam)",
    address: "Permanent Campus, Gambheeram, Anandapuram Mandal, Visakhapatnam - 531163, Andhra Pradesh",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    type: "Institute of National Importance",
    ownership: "Ministry of Education, Government of India (IIM Act 2017)",
    phone: "0891-2824444",
    email: "info@iimv.ac.in",
    website: "https://www.iimv.ac.in",
    image: "/images/campuses/campus_architecture_5.jpg",
    img: "/images/campuses/campus_architecture_5.jpg",
    verified: true,
    courses: [
      { name: "PGP (MBA)", title: "Post Graduate Programme in Management (MBA)", duration: "2 Years", fees: "₹17,50,000", fee: "₹17,50,000", eligibility: "Graduation (50%) + CAT Exam", type: "MANAGEMENT", intake: 180 },
      { name: "PGP-Ex", title: "Post Graduate Program for Executives", duration: "2 Years", fees: "₹12,00,000", fee: "₹12,00,000", eligibility: "Graduation + Minimum 3 Years Work Experience", type: "MANAGEMENT", intake: 45 },
      { name: "Ph.D Management", title: "Doctor of Philosophy in Management", duration: "4-5 Years", fees: "₹2,00,000", fee: "₹2,00,000", eligibility: "Master's Degree + CAT / GMAT / GRE / JRF", type: "MANAGEMENT", intake: 20 }
    ]
  },
  52: {
    name: "National Institute of Technology Warangal (NIT Warangal)",
    address: "National Institute of Technology Campus, Hanamkonda, Warangal - 506004, Telangana",
    city: "Warangal",
    state: "Telangana",
    type: "Institute of National Importance",
    ownership: "Ministry of Education, Government of India (NITSER Act)",
    phone: "0870-2459191",
    email: "registrar@nitw.ac.in",
    website: "https://www.nitw.ac.in",
    image: "/images/campuses/campus_architecture_4.jpg",
    img: "/images/campuses/campus_architecture_4.jpg",
    verified: true,
    courses: [
      { name: "B.Tech (CSE)", title: "Bachelor of Technology in Computer Science & Engineering", duration: "4 Years", fees: "₹6,80,000", fee: "₹6,80,000", eligibility: "10+2 with PCM + JEE Main / CSAB", type: "ENGINEERING", intake: 140 },
      { name: "B.Tech (ECE)", title: "Bachelor of Technology in Electronics & Communication Engineering", duration: "4 Years", fees: "₹6,80,000", fee: "₹6,80,000", eligibility: "10+2 with PCM + JEE Main / CSAB", type: "ENGINEERING", intake: 140 },
      { name: "M.Tech (CSE)", title: "Master of Technology in Computer Science & Engineering", duration: "2 Years", fees: "₹1,80,000", fee: "₹1,80,000", eligibility: "B.Tech + GATE / CCMT", type: "ENGINEERING", intake: 40 }
    ]
  },
  53: {
    name: "Indian Institute of Management Indore (IIM Indore)",
    address: "Prabandh Shikhar, Rau-Pithampur Road, Indore - 453556, Madhya Pradesh",
    city: "Indore",
    state: "Madhya Pradesh",
    type: "Institute of National Importance",
    ownership: "Ministry of Education, Government of India (IIM Act 2017)",
    phone: "0731-2439666",
    email: "pgpadmission@iimidr.ac.in",
    website: "https://www.iimidr.ac.in",
    image: "/images/campuses/campus_architecture_6.jpg",
    img: "/images/campuses/campus_architecture_6.jpg",
    verified: true,
    courses: [
      { name: "PGP (MBA)", title: "Post Graduate Programme in Management (MBA)", duration: "2 Years", fees: "₹21,14,000", fee: "₹21,14,000", eligibility: "Graduation (50%) + CAT Exam", type: "MANAGEMENT", intake: 450 },
      { name: "IPM", title: "Integrated Programme in Management (BBA + MBA)", duration: "5 Years", fees: "₹35,00,000", fee: "₹35,00,000", eligibility: "10+2 (60%) + IPMAT Exam", type: "MANAGEMENT", intake: 150 },
      { name: "EPGP", title: "Executive Post Graduate Programme in Management", duration: "1 Year", fees: "₹22,11,000", fee: "₹22,11,000", eligibility: "Graduation + GMAT/GRE + 5 Years Work Experience", type: "MANAGEMENT", intake: 65 }
    ]
  },
  54: {
    name: "National Institute of Technology Delhi (NIT Delhi)",
    address: "Plot No. FA7, Zone P1, GT Karnal Road, Delhi - 110036",
    city: "New Delhi",
    state: "Delhi NCR",
    type: "Institute of National Importance",
    ownership: "Ministry of Education, Government of India (NITSER Act)",
    phone: "011-33861005",
    email: "registrar@nitdelhi.ac.in",
    website: "https://nitdelhi.ac.in",
    image: "/images/campuses/campus_architecture_7.jpg",
    img: "/images/campuses/campus_architecture_7.jpg",
    verified: true,
    courses: [
      { name: "B.Tech (CSE)", title: "Bachelor of Technology in Computer Science & Engineering", duration: "4 Years", fees: "₹6,80,000", fee: "₹6,80,000", eligibility: "10+2 with PCM + JEE Main / CSAB", type: "ENGINEERING", intake: 80 },
      { name: "B.Tech (AI & DS)", title: "Bachelor of Technology in Artificial Intelligence & Data Science", duration: "4 Years", fees: "₹6,80,000", fee: "₹6,80,000", eligibility: "10+2 with PCM + JEE Main / CSAB", type: "ENGINEERING", intake: 60 },
      { name: "M.Tech (CSE)", title: "Master of Technology in Computer Science", duration: "2 Years", fees: "₹1,80,000", fee: "₹1,80,000", eligibility: "B.Tech + GATE / CCMT", type: "ENGINEERING", intake: 25 }
    ]
  },
  55: {
    name: "Indian Institute of Management Tiruchirappalli (IIM Trichy)",
    address: "Pudukkottai Main Road, Chinna Sooriyur Village, Tiruchirappalli - 620024, Tamil Nadu",
    city: "Tiruchirappalli",
    state: "Tamil Nadu",
    type: "Institute of National Importance",
    ownership: "Ministry of Education, Government of India (IIM Act 2017)",
    phone: "0431-2505000",
    email: "admissions@iimtrichy.ac.in",
    website: "https://www.iimtrichy.ac.in",
    image: "/images/campuses/campus_architecture_8.jpg",
    img: "/images/campuses/campus_architecture_8.jpg",
    verified: true,
    courses: [
      { name: "PGPM (MBA)", title: "Post Graduate Programme in Management (MBA)", duration: "2 Years", fees: "₹19,50,000", fee: "₹19,50,000", eligibility: "Graduation (50%) + CAT Exam", type: "MANAGEMENT", intake: 240 },
      { name: "PGPM-HR", title: "Post Graduate Programme in Management - Human Resources", duration: "2 Years", fees: "₹19,50,000", fee: "₹19,50,000", eligibility: "Graduation (50%) + CAT Exam", type: "MANAGEMENT", intake: 60 },
      { name: "PGPBM (Executive)", title: "Post Graduate Programme in Business Management for Executives", duration: "2 Years", fees: "₹11,80,000", fee: "₹11,80,000", eligibility: "Graduation + Minimum 3 Years Work Experience", type: "MANAGEMENT", intake: 60 }
    ]
  }
};

const rawData = fs.readFileSync(SITE_DATA_PATH, 'utf8');
const data = JSON.parse(rawData);
const colleges = Array.isArray(data.colleges) ? data.colleges : data;

let updatedCount = 0;
for (const col of colleges) {
  if (batch49Updates[col.id]) {
    const upd = batch49Updates[col.id];
    Object.assign(col, upd);
    updatedCount++;
    console.log(`Updated ID: ${col.id} - ${col.name}`);
  }
}

fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(data, null, 2), 'utf8');
console.log(`Successfully updated ${updatedCount} colleges in ${SITE_DATA_PATH}`);
