const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const SITE_DATA_PATH = path.join(BASE_DIR, 'public', 'siteData.json');

const batch46Updates = {
  8: {
    name: "National Institute of Fashion Technology (NIFT Delhi)",
    address: "NIFT Campus, Hauz Khas, Near Gulmohar Park, New Delhi - 110016",
    city: "New Delhi",
    state: "Delhi NCR",
    type: "Institute of National Importance",
    ownership: "Ministry of Textiles, Government of India",
    phone: "011-26542000",
    email: "director.delhi@nift.ac.in",
    website: "https://www.nift.ac.in/delhi/",
    image: "/images/campuses/campus_architecture_1.jpg",
    img: "/images/campuses/campus_architecture_1.jpg",
    verified: true,
    courses: [
      { name: "B.Des (FD)", title: "Bachelor of Design in Fashion Design", duration: "4 Years", fees: "₹12,34,000", fee: "₹12,34,000", eligibility: "10+2 in any stream + NIFT Entrance Exam", type: "DESIGN", intake: 60 },
      { name: "B.FTech", title: "Bachelor of Fashion Technology", duration: "4 Years", fees: "₹12,34,000", fee: "₹12,34,000", eligibility: "10+2 with PCM + NIFT Entrance Exam", type: "DESIGN", intake: 60 },
      { name: "M.Des", title: "Master of Design", duration: "2 Years", fees: "₹6,17,000", fee: "₹6,17,000", eligibility: "Undergraduate Degree + NIFT Entrance Exam", type: "DESIGN", intake: 30 }
    ]
  },
  9: {
    name: "National Law University Delhi (NLU Delhi)",
    address: "Sector 14, Dwarka, New Delhi - 110078",
    city: "New Delhi",
    state: "Delhi NCR",
    type: "Public/Government (Statutory State University)",
    ownership: "Government of NCT of Delhi / Statutory University",
    phone: "011-28034257",
    email: "info@nludelhi.ac.in",
    website: "https://nludelhi.ac.in",
    image: "/images/campuses/campus_architecture_2.jpg",
    img: "/images/campuses/campus_architecture_2.jpg",
    verified: true,
    courses: [
      { name: "BA LLB (Hons)", title: "Integrated Bachelor of Arts and Bachelor of Laws (Honours)", duration: "5 Years", fees: "₹18,00,000", fee: "₹18,00,000", eligibility: "10+2 (45%) + AILET Exam", type: "LAW", intake: 120 },
      { name: "LLM", title: "Master of Laws", duration: "1 Year", fees: "₹2,50,000", fee: "₹2,50,000", eligibility: "LLB Degree (50%) + AILET PG Exam", type: "LAW", intake: 70 }
    ]
  },
  10: {
    name: "National Institute of Technology Karnataka (NIT Surathkal)",
    address: "NH 66, Srinivasnagar, Surathkal, Mangalore - 575025, Karnataka",
    city: "Mangalore",
    state: "Karnataka",
    type: "Institute of National Importance",
    ownership: "Ministry of Education, Government of India",
    phone: "0824-2474000",
    email: "registrar@nitk.ac.in",
    website: "https://www.nitk.ac.in",
    image: "/images/campuses/campus_nit_surathkal.jpg",
    img: "/images/campuses/campus_nit_surathkal.jpg",
    verified: true,
    courses: [
      { name: "B.Tech (CSE)", title: "Bachelor of Technology in Computer Science & Engineering", duration: "4 Years", fees: "₹6,80,000", fee: "₹6,80,000", eligibility: "10+2 with PCM + JEE Main / CSAB", type: "ENGINEERING", intake: 120 },
      { name: "B.Tech (AI)", title: "Bachelor of Technology in Artificial Intelligence", duration: "4 Years", fees: "₹6,80,000", fee: "₹6,80,000", eligibility: "10+2 with PCM + JEE Main / CSAB", type: "ENGINEERING", intake: 60 },
      { name: "M.Tech", title: "Master of Technology in Computer Science & Engineering", duration: "2 Years", fees: "₹1,80,000", fee: "₹1,80,000", eligibility: "B.Tech/BE + GATE / CCMT", type: "ENGINEERING", intake: 40 }
    ]
  },
  11: {
    name: "National Institute of Technology Tiruchirappalli (NIT Trichy)",
    address: "Tanjore Main Road, National Highway 67, Near BHEL, Thuvakudi, Tiruchirappalli - 620015, Tamil Nadu",
    city: "Tiruchirappalli",
    state: "Tamil Nadu",
    type: "Institute of National Importance",
    ownership: "Ministry of Education, Government of India",
    phone: "0431-2503000",
    email: "registrar@nitt.edu",
    website: "https://www.nitt.edu",
    image: "/images/campuses/campus_architecture_3.jpg",
    img: "/images/campuses/campus_architecture_3.jpg",
    verified: true,
    courses: [
      { name: "B.Tech (CSE)", title: "Bachelor of Technology in Computer Science & Engineering", duration: "4 Years", fees: "₹6,80,000", fee: "₹6,80,000", eligibility: "10+2 with PCM + JEE Main / CSAB", type: "ENGINEERING", intake: 120 },
      { name: "B.Tech (ECE)", title: "Bachelor of Technology in Electronics & Communication Engineering", duration: "4 Years", fees: "₹6,80,000", fee: "₹6,80,000", eligibility: "10+2 with PCM + JEE Main / CSAB", type: "ENGINEERING", intake: 120 },
      { name: "M.Tech", title: "Master of Technology in Computer Science", duration: "2 Years", fees: "₹1,80,000", fee: "₹1,80,000", eligibility: "B.Tech + GATE / CCMT", type: "ENGINEERING", intake: 40 }
    ]
  },
  14: {
    name: "Indian Institute of Management Lucknow (IIM Lucknow)",
    address: "Prabandh Nagar, IIM Road, Lucknow - 226013, Uttar Pradesh",
    city: "Lucknow",
    state: "Uttar Pradesh",
    type: "Institute of National Importance",
    ownership: "Ministry of Education, Government of India (IIM Act 2017)",
    phone: "0522-2734101",
    email: "admission@iiml.ac.in",
    website: "https://www.iiml.ac.in",
    image: "/images/campuses/campus_architecture_4.jpg",
    img: "/images/campuses/campus_architecture_4.jpg",
    verified: true,
    courses: [
      { name: "MBA (PGP)", title: "Post Graduate Programme in Management (MBA)", duration: "2 Years", fees: "₹20,75,000", fee: "₹20,75,000", eligibility: "Graduation (50%) + CAT Exam (Percentile >98)", type: "MANAGEMENT", intake: 450 },
      { name: "PGP-ABM", title: "Post Graduate Programme in Agribusiness Management", duration: "2 Years", fees: "₹20,75,000", fee: "₹20,75,000", eligibility: "Graduation in Agriculture/Allied or CAT Exam", type: "MANAGEMENT", intake: 60 },
      { name: "IPMX", title: "International Programme in Management for Executives (Executive MBA)", duration: "1 Year", fees: "₹26,00,000", fee: "₹26,00,000", eligibility: "Graduation + GMAT/GRE + Minimum 5 Years Work Experience", type: "MANAGEMENT", intake: 100 }
    ]
  },
  16: {
    name: "All India Institute of Medical Sciences Jodhpur (AIIMS Jodhpur)",
    address: "Basni Industrial Area, Phase-2, Jodhpur - 342005, Rajasthan",
    city: "Jodhpur",
    state: "Rajasthan",
    type: "Institute of National Importance",
    ownership: "Ministry of Health and Family Welfare, Government of India",
    phone: "0291-2740742",
    email: "admin@aiimsjodhpur.edu.in",
    website: "https://www.aiimsjodhpur.edu.in",
    image: "/images/campuses/campus_architecture_5.jpg",
    img: "/images/campuses/campus_architecture_5.jpg",
    verified: true,
    courses: [
      { name: "MBBS", title: "Bachelor of Medicine & Bachelor of Surgery", duration: "5.5 Years", fees: "₹5,856", fee: "₹5,856", eligibility: "10+2 with PCB (50%) + NEET UG Exam", type: "MEDICAL", intake: 125 },
      { name: "MD / MS", title: "Doctor of Medicine / Master of Surgery", duration: "3 Years", fees: "₹2,500", fee: "₹2,500", eligibility: "MBBS Degree + INI-CET Exam", type: "MEDICAL", intake: 80 }
    ]
  },
  17: {
    name: "All India Institute of Medical Sciences (AIIMS New Delhi)",
    address: "Sri Aurobindo Marg, Ansari Nagar, New Delhi - 110029",
    city: "New Delhi",
    state: "Delhi NCR",
    type: "Institute of National Importance",
    ownership: "Ministry of Health and Family Welfare, Government of India",
    phone: "011-26588500",
    email: "director@aiims.edu",
    website: "https://www.aiims.edu",
    image: "/images/campuses/campus_architecture_6.jpg",
    img: "/images/campuses/campus_architecture_6.jpg",
    verified: true,
    courses: [
      { name: "MBBS", title: "Bachelor of Medicine and Bachelor of Surgery", duration: "5.5 Years", fees: "₹5,856", fee: "₹5,856", eligibility: "10+2 with PCB (50%) + NEET UG Exam", type: "MEDICAL", intake: 125 },
      { name: "MD / MS", title: "Doctor of Medicine / Master of Surgery (Postgraduate)", duration: "3 Years", fees: "₹2,500", fee: "₹2,500", eligibility: "MBBS Degree + INI-CET Exam", type: "MEDICAL", intake: 200 }
    ]
  },
  18: {
    name: "National Law University Delhi (NLU Delhi - Law Programs)",
    address: "Sector 14, Dwarka, New Delhi - 110078",
    city: "New Delhi",
    state: "Delhi NCR",
    type: "Public/Government (Statutory State University)",
    ownership: "Government of NCT of Delhi / Statutory University",
    phone: "011-28034255",
    email: "registrar@nludelhi.ac.in",
    website: "https://nludelhi.ac.in",
    image: "/images/campuses/campus_architecture_7.jpg",
    img: "/images/campuses/campus_architecture_7.jpg",
    verified: true,
    courses: [
      { name: "BA LLB (Hons)", title: "Integrated Bachelor of Arts and Bachelor of Laws (Honours)", duration: "5 Years", fees: "₹18,00,000", fee: "₹18,00,000", eligibility: "10+2 (45%) + AILET Exam", type: "LAW", intake: 120 },
      { name: "LLM", title: "Master of Laws", duration: "1 Year", fees: "₹2,50,000", fee: "₹2,50,000", eligibility: "LLB Degree (50%) + AILET PG Exam", type: "LAW", intake: 70 },
      { name: "Ph.D in Law", title: "Doctor of Philosophy in Law", duration: "3 Years", fees: "₹1,50,000", fee: "₹1,50,000", eligibility: "LLM Degree + AILET Ph.D Entrance", type: "LAW", intake: 25 }
    ]
  },
  19: {
    name: "Indian Institute of Technology Guwahati (IIT Guwahati)",
    address: "Surjyamukhi, Amingaon, North Guwahati, Guwahati - 781039, Assam",
    city: "Guwahati",
    state: "Assam",
    type: "Institute of National Importance",
    ownership: "Ministry of Education, Government of India (IIT Act)",
    phone: "0361-2583000",
    email: "pro@iitg.ac.in",
    website: "https://www.iitg.ac.in",
    image: "/images/campuses/campus_architecture_8.jpg",
    img: "/images/campuses/campus_architecture_8.jpg",
    verified: true,
    courses: [
      { name: "B.Tech (CSE)", title: "Bachelor of Technology in Computer Science & Engineering", duration: "4 Years", fees: "₹10,00,000", fee: "₹10,00,000", eligibility: "10+2 with PCM + JEE Advanced", type: "ENGINEERING", intake: 115 },
      { name: "B.Tech (Data Science)", title: "Bachelor of Technology in Data Science & Artificial Intelligence", duration: "4 Years", fees: "₹10,00,000", fee: "₹10,00,000", eligibility: "10+2 with PCM + JEE Advanced", type: "ENGINEERING", intake: 40 },
      { name: "M.Tech", title: "Master of Technology in Computer Science", duration: "2 Years", fees: "₹1,80,000", fee: "₹1,80,000", eligibility: "B.Tech + GATE", type: "ENGINEERING", intake: 60 }
    ]
  },
  20: {
    name: "All India Institute of Medical Sciences (AIIMS New Delhi - Postgraduate)",
    address: "Sri Aurobindo Marg, Ansari Nagar East, New Delhi - 110029",
    city: "New Delhi",
    state: "Delhi NCR",
    type: "Institute of National Importance",
    ownership: "Ministry of Health and Family Welfare, Government of India",
    phone: "011-26588500",
    email: "director@aiims.edu",
    website: "https://www.aiims.edu",
    image: "/images/campuses/campus_architecture_9.jpg",
    img: "/images/campuses/campus_architecture_9.jpg",
    verified: true,
    courses: [
      { name: "MBBS", title: "Bachelor of Medicine & Bachelor of Surgery", duration: "5.5 Years", fees: "₹5,856", fee: "₹5,856", eligibility: "10+2 with PCB (50%) + NEET UG Exam", type: "MEDICAL", intake: 125 },
      { name: "MD / MS", title: "Doctor of Medicine / Master of Surgery", duration: "3 Years", fees: "₹2,500", fee: "₹2,500", eligibility: "MBBS Degree + INI-CET Exam", type: "MEDICAL", intake: 200 }
    ]
  }
};

const rawData = fs.readFileSync(SITE_DATA_PATH, 'utf8');
const data = JSON.parse(rawData);
const colleges = Array.isArray(data.colleges) ? data.colleges : data;

let updatedCount = 0;
for (const col of colleges) {
  if (batch46Updates[col.id]) {
    const upd = batch46Updates[col.id];
    Object.assign(col, upd);
    updatedCount++;
    console.log(`Updated ID: ${col.id} - ${col.name}`);
  }
}

fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(data, null, 2), 'utf8');
console.log(`Successfully updated ${updatedCount} colleges in ${SITE_DATA_PATH}`);

