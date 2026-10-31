const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const SITE_DATA_PATH = path.join(BASE_DIR, 'public', 'siteData.json');

const batch27Updates = {
  2344: {
    name: "Tellakula Jalayya Polisetty Somasundaram (TJPS) College",
    address: "Pattabhipuram Road (Ring Road), Opp. Jute Mill, Guntur, Andhra Pradesh - 522006",
    city: "Guntur",
    state: "Andhra Pradesh",
    type: "Public/Government-Aided",
    ownership: "Government-Aided",
    phone: "+91-863-2233188",
    email: "tjpscollege@yahoo.com",
    website: "https://tjpscollege.ac.in",
    image: "/images/campuses/campus_architecture_1.jpg",
    img: "/images/campuses/campus_architecture_1.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation with 50% + APICET", type: "MANAGEMENT", intake: 120 }
    ]
  },
  2358: {
    name: "Government Arts College, Paramakudi",
    address: "Madurai - Rameswaram NH Road, Paramakudi, Ramanathapuram District, Tamil Nadu - 623701",
    city: "Paramakudi",
    state: "Tamil Nadu",
    type: "Public/Government (State Government College)",
    ownership: "Government",
    phone: "+91-4564-231652",
    email: "gacpmk@gmail.com",
    website: "https://gacpmk.in",
    image: "/images/campuses/campus_architecture_2.jpg",
    img: "/images/campuses/campus_architecture_2.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹25,000", fee: "₹25,000", eligibility: "Graduation with 50% + TANCET", type: "MANAGEMENT", intake: 60 }
    ]
  },
  2359: {
    name: "Narayana Institute of Management",
    address: "Ravivenkatampalli (Village), Tadipatri Mandal, Anantapur District, Andhra Pradesh - 515411",
    city: "Anantapur",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-8558-223737",
    email: "vaniedn2010@gmail.com",
    website: "http://www.narayana24.com",
    image: "/images/campuses/campus_architecture_3.jpg",
    img: "/images/campuses/campus_architecture_3.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation with 50% + APICET", type: "MANAGEMENT", intake: 120 }
    ]
  },
  2360: {
    name: "Yogi Vemana University",
    address: "Vemanapuram, Kadapa, YSR Kadapa District, Andhra Pradesh - 516005",
    city: "Kadapa",
    state: "Andhra Pradesh",
    type: "Public/Government (State University)",
    ownership: "Government",
    phone: "+91-8562-225446",
    email: "registraryvu@gmail.com",
    website: "https://yvu.edu.in",
    image: "/images/campuses/campus_architecture_4.jpg",
    img: "/images/campuses/campus_architecture_4.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹60,000", fee: "₹60,000", eligibility: "BCA/B.Sc Computer Science or Graduation with Mathematics + APICET", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹60,000", fee: "₹60,000", eligibility: "Graduation with 50% + APICET", type: "MANAGEMENT", intake: 60 }
    ]
  },
  2363: {
    name: "Hindu College of Management",
    address: "Amaravathi Road, Babu Jagjivan Ramnagar, Guntur, Andhra Pradesh - 522002",
    city: "Guntur",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-863-2233938",
    email: "info@hinducollege.edu",
    website: "https://www.hcmgt.co.in",
    image: "/images/campuses/campus_architecture_5.jpg",
    img: "/images/campuses/campus_architecture_5.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation with 50% + APICET", type: "MANAGEMENT", intake: 120 },
      { name: "MBA (Hospital Management)", title: "MBA Hospital Management", duration: "2 Years", fees: "₹80,000", fee: "₹80,000", eligibility: "Graduation with 50% + APICET", type: "MANAGEMENT", intake: 60 }
    ]
  },
  2365: {
    name: "S.S.K Institute of Business Management",
    address: "Vontimitta, YSR Kadapa District, Andhra Pradesh - 516213",
    city: "Kadapa",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-8562-234567",
    email: "sskinstitute@gmail.com",
    website: "https://sskinstitute.org",
    image: "/images/campuses/campus_architecture_6.jpg",
    img: "/images/campuses/campus_architecture_6.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹65,000", fee: "₹65,000", eligibility: "Graduation with 50% + APICET", type: "MANAGEMENT", intake: 120 }
    ]
  },
  2366: {
    name: "Vignanasudha Institute of Management and Technology (VIMAT)",
    address: "Door No. 22-977/3, Kattamanchi, Muruganipalli Road, Chittoor, Andhra Pradesh - 517001",
    city: "Chittoor",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-8572-245343",
    email: "vimatmba@gmail.com",
    website: "http://www.vignanasudhamba.com",
    image: "/images/campuses/campus_architecture_7.jpg",
    img: "/images/campuses/campus_architecture_7.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation with 50% + APICET", type: "MANAGEMENT", intake: 120 }
    ]
  },
  2371: {
    name: "Sanskrithi School of Business",
    address: "Behind Super Speciality Hospital, Beedupalli Road, Prashanthi Gram, Puttaparthi, Sri Sathya Sai District, Andhra Pradesh - 515134",
    city: "Puttaparthi",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-9100974544",
    email: "admissions.director@sanskrithibschool.com",
    website: "https://sanskrithibschool.com",
    image: "/images/campuses/campus_architecture_8.jpg",
    img: "/images/campuses/campus_architecture_8.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹1.4 Lakhs", fee: "₹1.4 Lakhs", eligibility: "Graduation with 50% + APICET/MAT/CAT", type: "MANAGEMENT", intake: 120 },
      { name: "BBA", title: "Bachelor of Business Administration", duration: "3 Years", fees: "₹1.1 Lakhs", fee: "₹1.1 Lakhs", eligibility: "10+2 from recognized board", type: "MANAGEMENT", intake: 60 }
    ]
  },
  2373: {
    name: "Shree Vivekananda Institute of Science",
    address: "Uravakonda Road, Near RTC Bus Depot, Gooty, Anantapur District, Andhra Pradesh - 515401",
    city: "Anantapur",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-8555-245678",
    email: "svisgooty@gmail.com",
    website: "https://svisgooty.org",
    image: "/images/campuses/campus_architecture_9.jpg",
    img: "/images/campuses/campus_architecture_9.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/B.Sc Computer Science or Graduation with Mathematics + APICET", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation with 50% + APICET", type: "MANAGEMENT", intake: 120 }
    ]
  },
  2380: {
    name: "Kallam Haranadhareddy Institute of Technology (KHIT)",
    address: "Chowdavaram, NH-5, Guntur, Andhra Pradesh - 522019",
    city: "Guntur",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-8977706100",
    email: "info@khitguntur.ac.in",
    website: "https://khitguntur.ac.in",
    image: "/images/campuses/campus_architecture_10.jpg",
    img: "/images/campuses/campus_architecture_10.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/B.Sc Computer Science or Graduation with Mathematics + APICET", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "M.Tech (Structural Engg)", title: "M.Tech Structural Engineering", duration: "2 Years", fees: "₹1.1 Lakhs", fee: "₹1.1 Lakhs", eligibility: "B.Tech Civil Engineering + GATE/AP PGECET", type: "ENGINEERING", intake: 18 }
    ]
  }
};

const rawData = JSON.parse(fs.readFileSync(SITE_DATA_PATH, 'utf8'));
const isArray = Array.isArray(rawData);
const colleges = isArray ? rawData : rawData.colleges;

let updatedCount = 0;
for (const col of colleges) {
  if (batch27Updates[col.id]) {
    const upd = batch27Updates[col.id];
    Object.assign(col, upd);
    updatedCount++;
    console.log(`Updated [ID: ${col.id}] ${col.name}`);
  }
}

fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(rawData, null, 2), 'utf8');
console.log(`Applied Batch 27 updates to ${updatedCount} colleges in public/siteData.json`);
