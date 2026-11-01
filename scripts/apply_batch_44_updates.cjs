const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const SITE_DATA_PATH = path.join(BASE_DIR, 'public', 'siteData.json');

const batch44Updates = {
  3659: {
    name: "Sigma Institute of Engineering (Sigma University)",
    address: "Sigma Institute of Technology & Engineering Campus, Ajwa-Nimeta Road, Bakrol, Taluka: Waghodia, Vadodara - 390019, Gujarat",
    city: "Vadodara",
    state: "Gujarat",
    type: "Private",
    ownership: "Private (Sigma Group of Institutes)",
    phone: "+91-2668-245100",
    email: "info@sigma.ac.in",
    website: "https://sigma.ac.in",
    image: "/images/campuses/campus_architecture_2.jpg",
    img: "/images/campuses/campus_architecture_2.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹1,40,000", fee: "₹1,40,000", eligibility: "BCA/B.Sc Computer Science + ACPC", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "B.Tech", title: "Bachelor of Technology in Computer Engineering", duration: "4 Years", fees: "₹2,60,000", fee: "₹2,60,000", eligibility: "10+2 with PCM + GUJCET/JEE Main", type: "ENGINEERING", intake: 120 }
    ]
  },
  3660: {
    name: "Atmiya University",
    address: "\"Yogidham Gurukul\", Kalawad Road, Rajkot - 360005, Gujarat",
    city: "Rajkot",
    state: "Gujarat",
    type: "Private (State Private University)",
    ownership: "Private (Sarvoday Kelavani Samaj)",
    phone: "+91-281-2563445",
    email: "admissions@atmiyauni.ac.in",
    website: "https://atmiyauni.ac.in",
    image: "/images/campuses/campus_architecture_3.jpg",
    img: "/images/campuses/campus_architecture_3.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹1,60,000", fee: "₹1,60,000", eligibility: "BCA/B.Sc IT with 50% + ACPC Entrance", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹1,80,000", fee: "₹1,80,000", eligibility: "Graduation (50%) + CMAT/ACPC", type: "MANAGEMENT", intake: 120 }
    ]
  },
  3663: {
    name: "Department of Commerce & Management, K.S.K.V. Kachchh University, Bhuj",
    address: "Krantiguru Shyamji Krishna Verma Kachchh University Campus, Mundra Road, Bhuj, Kachchh - 370001, Gujarat",
    city: "Bhuj",
    state: "Gujarat",
    type: "Public/Government",
    ownership: "Government of Gujarat / State University Department",
    phone: "02832-237300",
    email: "registrar@kskvku.ac.in",
    website: "https://kskvku.ac.in",
    image: "/images/campuses/campus_architecture_4.jpg",
    img: "/images/campuses/campus_architecture_4.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹1,20,000", fee: "₹1,20,000", eligibility: "Graduation (50%) + CMAT / ACPC", type: "MANAGEMENT", intake: 60 },
      { name: "M.Com", title: "Master of Commerce", duration: "2 Years", fees: "₹20,000", fee: "₹20,000", eligibility: "B.Com + KSKVKU Merit", type: "COMMERCE", intake: 60 }
    ]
  },
  3668: {
    name: "Sevantilal Kantilal School of Business Management (B.K. School, Gujarat University)",
    address: "Gujarat University Campus, Navrangpura, Ahmedabad - 380009, Gujarat",
    city: "Ahmedabad",
    state: "Gujarat",
    type: "Public/Government",
    ownership: "Government of Gujarat / Conducted State University Department",
    phone: "079-26304811",
    email: "info@bkschool.org.in",
    website: "https://bkschool.org.in",
    image: "/images/campuses/campus_architecture_5.jpg",
    img: "/images/campuses/campus_architecture_5.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹60,000", fee: "₹60,000", eligibility: "Graduation (50%) + CMAT / Gujarat ACPC", type: "MANAGEMENT", intake: 120 },
      { name: "MBA (Maritime)", title: "Master of Business Administration (Maritime & Supply Chain)", duration: "2 Years", fees: "₹1,20,000", fee: "₹1,20,000", eligibility: "Graduation (50%) + CMAT / Gujarat ACPC", type: "MANAGEMENT", intake: 60 },
      { name: "MBA (Executive)", title: "Master of Business Administration (Evening Executive)", duration: "3 Years", fees: "₹90,000", fee: "₹90,000", eligibility: "Graduation + 2 Years Work Experience", type: "MANAGEMENT", intake: 60 }
    ]
  },
  3669: {
    name: "D. L. Patel Institute of Management & Technology (DLPIMT Himatnagar)",
    address: "Vidhyanagari Campus, Motipura Bypass Road, Opp. New Circuit House, Himatnagar - 383001, Sabarkantha, Gujarat",
    city: "Himatnagar",
    state: "Gujarat",
    type: "Private",
    ownership: "Private (Vidhyanagari Trust)",
    phone: "02772-244621",
    email: "info@vidhyanagari.org",
    website: "http://www.vidhyanagari.org",
    image: "/images/campuses/campus_architecture_6.jpg",
    img: "/images/campuses/campus_architecture_6.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹1,40,000", fee: "₹1,40,000", eligibility: "Graduation (50%) + CMAT / Gujarat ACPC", type: "MANAGEMENT", intake: 60 }
    ]
  },
  32: {
    name: "Indian Institute of Technology Gandhinagar (IIT Gandhinagar)",
    address: "Palaj, Gandhinagar - 382355, Gujarat",
    city: "Gandhinagar",
    state: "Gujarat",
    type: "Institute of National Importance",
    ownership: "Ministry of Education, Government of India",
    phone: "+91-79-23952000",
    email: "academics@iitgn.ac.in",
    website: "https://www.iitgn.ac.in",
    image: "/images/campuses/campus_architecture_7.jpg",
    img: "/images/campuses/campus_architecture_7.jpg",
    verified: true,
    courses: [
      { name: "B.Tech (CSE)", title: "Bachelor of Technology in Computer Science & Engineering", duration: "4 Years", fees: "₹10,50,000", fee: "₹10,50,000", eligibility: "10+2 with PCM + JEE Advanced", type: "ENGINEERING", intake: 60 },
      { name: "B.Tech (AI&DS)", title: "Bachelor of Technology in Artificial Intelligence & Data Science", duration: "4 Years", fees: "₹10,50,000", fee: "₹10,50,000", eligibility: "10+2 with PCM + JEE Advanced", type: "ENGINEERING", intake: 40 },
      { name: "M.Tech", title: "Master of Technology in Computer Science & Engineering", duration: "2 Years", fees: "₹1,80,000", fee: "₹1,80,000", eligibility: "B.Tech/BE + GATE", type: "ENGINEERING", intake: 40 }
    ]
  },
  33: {
    name: "Sardar Vallabhbhai National Institute of Technology (SVNIT Surat)",
    address: "Ichchhanath, Surat - 395007, Gujarat",
    city: "Surat",
    state: "Gujarat",
    type: "Institute of National Importance",
    ownership: "Ministry of Education, Government of India",
    phone: "+91-261-2227334",
    email: "registrar@svnit.ac.in",
    website: "https://www.svnit.ac.in",
    image: "/images/campuses/campus_architecture_1.jpg",
    img: "/images/campuses/campus_architecture_1.jpg",
    verified: true,
    courses: [
      { name: "B.Tech (CSE)", title: "Bachelor of Technology in Computer Science & Engineering", duration: "4 Years", fees: "₹6,80,000", fee: "₹6,80,000", eligibility: "10+2 with PCM + JEE Main / CSAB", type: "ENGINEERING", intake: 120 },
      { name: "B.Tech (AI)", title: "Bachelor of Technology in Artificial Intelligence", duration: "4 Years", fees: "₹6,80,000", fee: "₹6,80,000", eligibility: "10+2 with PCM + JEE Main / CSAB", type: "ENGINEERING", intake: 60 },
      { name: "M.Tech", title: "Master of Technology in Computer Engineering", duration: "2 Years", fees: "₹1,80,000", fee: "₹1,80,000", eligibility: "B.Tech/BE + GATE / CCMT", type: "ENGINEERING", intake: 40 }
    ]
  },
  34: {
    name: "Sardar Vallabhbhai National Institute of Technology (SVNIT Surat - PG Department)",
    address: "Ichchhanath, Surat - 395007, Gujarat",
    city: "Surat",
    state: "Gujarat",
    type: "Institute of National Importance",
    ownership: "Ministry of Education, Government of India",
    phone: "+91-261-2259571",
    email: "dean_acad@svnit.ac.in",
    website: "https://www.svnit.ac.in",
    image: "/images/campuses/campus_architecture_8.jpg",
    img: "/images/campuses/campus_architecture_8.jpg",
    verified: true,
    courses: [
      { name: "B.Tech (ECE)", title: "Bachelor of Technology in Electronics & Communication Engineering", duration: "4 Years", fees: "₹6,80,000", fee: "₹6,80,000", eligibility: "10+2 with PCM + JEE Main", type: "ENGINEERING", intake: 120 },
      { name: "M.Tech (VLSI)", title: "Master of Technology in VLSI Design", duration: "2 Years", fees: "₹1,80,000", fee: "₹1,80,000", eligibility: "B.Tech + GATE", type: "ENGINEERING", intake: 30 }
    ]
  },
  35: {
    name: "Indian Institute of Technology Gandhinagar (IIT Gandhinagar - Engineering)",
    address: "Palaj, Gandhinagar - 382355, Gujarat",
    city: "Gandhinagar",
    state: "Gujarat",
    type: "Institute of National Importance",
    ownership: "Ministry of Education, Government of India",
    phone: "+91-79-23952000",
    email: "academics@iitgn.ac.in",
    website: "https://www.iitgn.ac.in",
    image: "/images/campuses/campus_architecture_9.jpg",
    img: "/images/campuses/campus_architecture_9.jpg",
    verified: true,
    courses: [
      { name: "B.Tech (Mechanical)", title: "Bachelor of Technology in Mechanical Engineering", duration: "4 Years", fees: "₹10,50,000", fee: "₹10,50,000", eligibility: "10+2 with PCM + JEE Advanced", type: "ENGINEERING", intake: 60 },
      { name: "B.Tech (Electrical)", title: "Bachelor of Technology in Electrical Engineering", duration: "4 Years", fees: "₹10,50,000", fee: "₹10,50,000", eligibility: "10+2 with PCM + JEE Advanced", type: "ENGINEERING", intake: 60 }
    ]
  },
  48: {
    name: "Indian Institute of Management Ahmedabad (IIM Ahmedabad)",
    address: "Vastrapur, Ahmedabad - 380015, Gujarat",
    city: "Ahmedabad",
    state: "Gujarat",
    type: "Institute of National Importance",
    ownership: "Ministry of Education, Government of India (IIM Act 2017)",
    phone: "+91-79-71524444",
    email: "admission@iima.ac.in",
    website: "https://www.iima.ac.in",
    image: "/images/campuses/campus_architecture_10.jpg",
    img: "/images/campuses/campus_architecture_10.jpg",
    verified: true,
    courses: [
      { name: "MBA (PGP)", title: "Post Graduate Programme in Management (MBA)", duration: "2 Years", fees: "₹25,00,000", fee: "₹25,00,000", eligibility: "Graduation (50%) + CAT Exam (Percentile >99)", type: "MANAGEMENT", intake: 400 },
      { name: "PGPX", title: "Post Graduate Programme in Management for Executives (Executive MBA)", duration: "1 Year", fees: "₹33,00,000", fee: "₹33,00,000", eligibility: "Graduation + GMAT/GRE + Minimum 4 Years Work Experience", type: "MANAGEMENT", intake: 140 },
      { name: "PGP-FABM", title: "Post Graduate Programme in Food & Agri-Business Management", duration: "2 Years", fees: "₹25,00,000", fee: "₹25,00,000", eligibility: "Graduation in Agriculture/Allied or CAT Exam", type: "MANAGEMENT", intake: 50 }
    ]
  }
};

const rawData = fs.readFileSync(SITE_DATA_PATH, 'utf8');
const data = JSON.parse(rawData);
const colleges = Array.isArray(data.colleges) ? data.colleges : data;

let updatedCount = 0;
for (const col of colleges) {
  if (batch44Updates[col.id]) {
    const upd = batch44Updates[col.id];
    Object.assign(col, upd);
    updatedCount++;
    console.log(`Updated ID: ${col.id} - ${col.name}`);
  }
}

fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(data, null, 2), 'utf8');
console.log(`Successfully updated ${updatedCount} colleges in ${SITE_DATA_PATH}`);
