const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const SITE_DATA_PATH = path.join(BASE_DIR, 'public', 'siteData.json');

const batch55Updates = {
  109: {
    name: "Sambhram College of Hotel Management (SCHM Bengaluru)",
    address: "M.S. Palya, Via Jalahalli East, Bengaluru - 560097, Karnataka",
    city: "Bengaluru",
    state: "Karnataka",
    type: "Private (Hotel Management College)",
    ownership: "Private / Sambhram Group of Institutions",
    phone: "080-23648444",
    email: "admissions@sambhram.org",
    website: "https://www.sambhram.org",
    image: "/images/campuses/campus_architecture_1.jpg",
    img: "/images/campuses/campus_architecture_1.jpg",
    verified: true,
    courses: [
      { name: "BHM", title: "Bachelor of Hotel Management", duration: "4 Years", fees: "₹3,80,000", fee: "₹3,80,000", eligibility: "10+2 in any stream (45%)", type: "HOTEL MANAGEMENT", intake: 120 },
      { name: "B.Sc (H&HA)", title: "Bachelor of Science in Hospitality and Hotel Administration", duration: "3 Years", fees: "₹2,70,000", fee: "₹2,70,000", eligibility: "10+2 in any stream (45%)", type: "HOTEL MANAGEMENT", intake: 60 },
      { name: "Diploma (Food & Beverage)", title: "Diploma in Food and Beverage Service", duration: "1 Year", fees: "₹65,000", fee: "₹65,000", eligibility: "10th / 10+2 Pass", type: "HOTEL MANAGEMENT", intake: 40 }
    ]
  },
  110: {
    name: "JSS Polytechnic Mysuru (JSS Technical Institutions)",
    address: "JSS Technical Institutions Campus, Manasagangothri, Mysuru - 570006, Karnataka",
    city: "Mysuru",
    state: "Karnataka",
    type: "Private / Grant-in-Aid (Polytechnic)",
    ownership: "Private / JSS Mahavidyapeetha",
    phone: "0821-2548281",
    email: "jsspolytechnicmysuru@gmail.com",
    website: "https://jsspolytechnicmysuru.ac.in",
    image: "/images/campuses/campus_architecture_2.jpg",
    img: "/images/campuses/campus_architecture_2.jpg",
    verified: true,
    courses: [
      { name: "Diploma (CSE)", title: "Diploma in Computer Science & Engineering", duration: "3 Years", fees: "₹45,000", fee: "₹45,000", eligibility: "SSLC / 10th Pass (35%)", type: "ENGINEERING", intake: 60 },
      { name: "Diploma (ECE)", title: "Diploma in Electronics & Communication Engineering", duration: "3 Years", fees: "₹45,000", fee: "₹45,000", eligibility: "SSLC / 10th Pass (35%)", type: "ENGINEERING", intake: 60 },
      { name: "Diploma (Mechanical)", title: "Diploma in Mechanical Engineering", duration: "3 Years", fees: "₹45,000", fee: "₹45,000", eligibility: "SSLC / 10th Pass (35%)", type: "ENGINEERING", intake: 60 }
    ]
  },
  111: {
    name: "Kristu Jayanti College Autonomous (KJC Bengaluru)",
    address: "K. Narayanapura, Kothanur Post, Bengaluru - 560077, Karnataka",
    city: "Bengaluru",
    state: "Karnataka",
    type: "Private Autonomous (Degree College / NAAC A++)",
    ownership: "Private / Bodhi Niketan Trust (CMI)",
    phone: "080-68737777",
    email: "info@kristujayanti.com",
    website: "https://kristujayanti.edu.in",
    image: "/images/campuses/campus_architecture_3.jpg",
    img: "/images/campuses/campus_architecture_3.jpg",
    verified: true,
    courses: [
      { name: "BCA", title: "Bachelor of Computer Applications", duration: "3 Years", fees: "₹2,85,000", fee: "₹2,85,000", eligibility: "10+2 with Mathematics / CS / IT (50%)", type: "COMPUTER APPLICATIONS", intake: 180 },
      { name: "BBA", title: "Bachelor of Business Administration", duration: "3 Years", fees: "₹3,15,000", fee: "₹3,15,000", eligibility: "10+2 in any stream (50%)", type: "MANAGEMENT", intake: 240 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹8,50,000", fee: "₹8,50,000", eligibility: "Graduation (50%) + MAT / CMAT / PGCET", type: "MANAGEMENT", intake: 180 }
    ]
  },
  112: {
    name: "Maharani Cluster University (MCU Bengaluru)",
    address: "Palace Road, Near Maharani Arts & Science Colleges, Bengaluru - 560001, Karnataka",
    city: "Bengaluru",
    state: "Karnataka",
    type: "Public/Government (State Public University)",
    ownership: "Government of Karnataka / Department of Higher Education",
    phone: "080-22211444",
    email: "registrar@mcu.karnataka.gov.in",
    website: "https://mcu.karnataka.gov.in",
    image: "/images/campuses/campus_architecture_4.jpg",
    img: "/images/campuses/campus_architecture_4.jpg",
    verified: true,
    courses: [
      { name: "B.Sc (Hons)", title: "Bachelor of Science (Honours) in Physical / Biological Sciences", duration: "3/4 Years", fees: "₹24,000", fee: "₹24,000", eligibility: "10+2 with Science (50%)", type: "SCIENCE", intake: 120 },
      { name: "B.Com", title: "Bachelor of Commerce", duration: "3 Years", fees: "₹21,000", fee: "₹21,000", eligibility: "10+2 with Commerce / Arts / Science (50%)", type: "COMMERCE", intake: 150 },
      { name: "BBA", title: "Bachelor of Business Administration", duration: "3 Years", fees: "₹36,000", fee: "₹36,000", eligibility: "10+2 in any stream (50%)", type: "MANAGEMENT", intake: 60 }
    ]
  },
  113: {
    name: "Pragathi Degree College (PDC Bengaluru)",
    address: "Near Chikkabanavara Railway Station, Hesaraghatta Main Road, Bengaluru - 560090, Karnataka",
    city: "Bengaluru",
    state: "Karnataka",
    type: "Private (Degree College)",
    ownership: "Private / Pragathi Education Trust",
    phone: "080-28394466",
    email: "info@pragathicollege.org",
    website: "https://pragathicollege.org",
    image: "/images/campuses/campus_architecture_5.jpg",
    img: "/images/campuses/campus_architecture_5.jpg",
    verified: true,
    courses: [
      { name: "B.Com", title: "Bachelor of Commerce", duration: "3 Years", fees: "₹1,20,000", fee: "₹1,20,000", eligibility: "10+2 with Commerce / Science (45%)", type: "COMMERCE", intake: 100 },
      { name: "BBA", title: "Bachelor of Business Administration", duration: "3 Years", fees: "₹1,50,000", fee: "₹1,50,000", eligibility: "10+2 in any stream (45%)", type: "MANAGEMENT", intake: 60 },
      { name: "BCA", title: "Bachelor of Computer Applications", duration: "3 Years", fees: "₹1,65,000", fee: "₹1,65,000", eligibility: "10+2 with Mathematics / CS (45%)", type: "COMPUTER APPLICATIONS", intake: 60 }
    ]
  },
  114: {
    name: "Veda Degree College (VDC Bengaluru)",
    address: "#14, Ramachandrappa Layout, Karihobanahalli, Thigalarapalya Main Road, Peenya 2nd Stage, Bengaluru - 560058, Karnataka",
    city: "Bengaluru",
    state: "Karnataka",
    type: "Private (Degree College)",
    ownership: "Private / Sri Veda Educational Trust",
    phone: "080-28362444",
    email: "info@vedacollege.edu.in",
    website: "https://vedacollege.edu.in",
    image: "/images/campuses/campus_architecture_6.jpg",
    img: "/images/campuses/campus_architecture_6.jpg",
    verified: true,
    courses: [
      { name: "B.Com", title: "Bachelor of Commerce", duration: "3 Years", fees: "₹1,05,000", fee: "₹1,05,000", eligibility: "10+2 with Commerce / Science (45%)", type: "COMMERCE", intake: 60 },
      { name: "BBA", title: "Bachelor of Business Administration", duration: "3 Years", fees: "₹1,35,000", fee: "₹1,35,000", eligibility: "10+2 in any stream (45%)", type: "MANAGEMENT", intake: 60 },
      { name: "BCA", title: "Bachelor of Computer Applications", duration: "3 Years", fees: "₹1,50,000", fee: "₹1,50,000", eligibility: "10+2 with Mathematics / CS (45%)", type: "COMPUTER APPLICATIONS", intake: 60 }
    ]
  },
  115: {
    name: "Jamia Millia Islamia (JMI New Delhi)",
    address: "Jamia Nagar, Okhla, New Delhi - 110025, Delhi NCR",
    city: "New Delhi",
    state: "Delhi NCR",
    type: "Public/Government (Central University, NIRF #3)",
    ownership: "Government of India / Ministry of Education (Act of Parliament)",
    phone: "011-26981717",
    email: "admin@jmi.ac.in",
    website: "https://www.jmi.ac.in",
    image: "/images/campuses/campus_architecture_7.jpg",
    img: "/images/campuses/campus_architecture_7.jpg",
    verified: true,
    courses: [
      { name: "B.Tech (CSE)", title: "Bachelor of Technology in Computer Engineering", duration: "4 Years", fees: "₹64,600", fee: "₹64,600", eligibility: "10+2 with PCM (55%) + JEE Main Rank", type: "ENGINEERING", intake: 70 },
      { name: "MBA", title: "Master of Business Administration (Full Time)", duration: "2 Years", fees: "₹47,000", fee: "₹47,000", eligibility: "Graduation (50%) + JMI Entrance Test", type: "MANAGEMENT", intake: 60 },
      { name: "BA (Hons)", title: "Bachelor of Arts (Honours) in Political Science / Economics", duration: "3 Years", fees: "₹21,600", fee: "₹21,600", eligibility: "10+2 in any stream (50%) + CUET / JMI Test", type: "ARTS", intake: 60 }
    ]
  },
  116: {
    name: "UPES School of Law, Dehradun (UPES)",
    address: "Energy Acres, Bidholi, via Prem Nagar, Dehradun - 248007, Uttarakhand",
    city: "Dehradun",
    state: "Uttarakhand",
    type: "Private University (UPES Dehradun)",
    ownership: "Private / Hydrocarbons Education & Research Society",
    phone: "1800-102-8737",
    email: "enrollments@upes.ac.in",
    website: "https://www.upes.ac.in",
    image: "/images/campuses/campus_architecture_8.jpg",
    img: "/images/campuses/campus_architecture_8.jpg",
    verified: true,
    courses: [
      { name: "BA LLB (Hons)", title: "Bachelor of Arts and Bachelor of Laws (Honours)", duration: "5 Years", fees: "₹18,50,000", fee: "₹18,50,000", eligibility: "10+2 (50%) + ULSAT / CLAT / LSAT", type: "LAW", intake: 180 },
      { name: "BBA LLB (Hons)", title: "Bachelor of Business Administration and Bachelor of Laws (Honours)", duration: "5 Years", fees: "₹18,50,000", fee: "₹18,50,000", eligibility: "10+2 (50%) + ULSAT / CLAT / LSAT", type: "LAW", intake: 120 },
      { name: "LLM", title: "Master of Laws in Corporate & Commercial Law", duration: "1 Year", fees: "₹2,40,000", fee: "₹2,40,000", eligibility: "LLB Degree (50%)", type: "LAW", intake: 60 }
    ]
  },
  117: {
    name: "Alliance School of Law, Alliance University (Bengaluru)",
    address: "Chikkahagade Cross, Chandapura-Anekal Main Road, Anekal, Bengaluru - 562106, Karnataka",
    city: "Bengaluru",
    state: "Karnataka",
    type: "Private University (Alliance University)",
    ownership: "Private / Alliance Business School",
    phone: "080-46199000",
    email: "law@alliance.edu.in",
    website: "https://www.alliance.edu.in",
    image: "/images/campuses/campus_architecture_9.jpg",
    img: "/images/campuses/campus_architecture_9.jpg",
    verified: true,
    courses: [
      { name: "BA LLB (Hons)", title: "Bachelor of Arts and Bachelor of Laws (Honours)", duration: "5 Years", fees: "₹15,00,000", fee: "₹15,00,000", eligibility: "10+2 (45%) + ACLAT / CLAT / LSAT", type: "LAW", intake: 180 },
      { name: "BBA LLB (Hons)", title: "Bachelor of Business Administration and Bachelor of Laws (Honours)", duration: "5 Years", fees: "₹15,00,000", fee: "₹15,00,000", eligibility: "10+2 (45%) + ACLAT / CLAT / LSAT", type: "LAW", intake: 180 },
      { name: "LLM", title: "Master of Laws", duration: "1 Year", fees: "₹2,50,000", fee: "₹2,50,000", eligibility: "LLB Degree (45%) + ACLAT PG", type: "LAW", intake: 60 }
    ]
  },
  118: {
    name: "Aligarh Muslim University (AMU Aligarh)",
    address: "University Road, Aligarh - 202002, Uttar Pradesh",
    city: "Aligarh",
    state: "Uttar Pradesh",
    type: "Public/Government (Central University, NIRF Top 10)",
    ownership: "Government of India / Ministry of Education (Act of Parliament)",
    phone: "0571-2700920",
    email: "registrar.amu@amu.ac.in",
    website: "https://www.amu.ac.in",
    image: "/images/campuses/campus_architecture_10.jpg",
    img: "/images/campuses/campus_architecture_10.jpg",
    verified: true,
    courses: [
      { name: "B.Tech (CSE)", title: "Bachelor of Technology in Computer Engineering (ZHCET)", duration: "4 Years", fees: "₹82,000", fee: "₹82,000", eligibility: "10+2 with PCM (50%) + AMU EEE Exam", type: "ENGINEERING", intake: 60 },
      { name: "MBBS", title: "Bachelor of Medicine and Bachelor of Surgery (JNMC)", duration: "5.5 Years", fees: "₹1,85,000", fee: "₹1,85,000", eligibility: "10+2 with PCB (50%) + NEET UG Rank", type: "MEDICAL", intake: 150 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹65,000", fee: "₹65,000", eligibility: "Graduation (50%) + AMU Entrance Test", type: "MANAGEMENT", intake: 60 }
    ]
  }
};

const siteData = JSON.parse(fs.readFileSync(SITE_DATA_PATH, 'utf8'));
let updatedCount = 0;

for (let i = 0; i < siteData.colleges.length; i++) {
  const col = siteData.colleges[i];
  if (batch55Updates[col.id]) {
    const upd = batch55Updates[col.id];
    Object.assign(col, upd);
    updatedCount++;
    console.log(`Updated ID: ${col.id} - ${col.name}`);
  }
}

fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(siteData, null, 2), 'utf8');
console.log(`Successfully updated ${updatedCount} colleges in ${SITE_DATA_PATH}`);

