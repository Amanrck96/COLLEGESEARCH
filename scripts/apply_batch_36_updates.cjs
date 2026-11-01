const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const SITE_DATA_PATH = path.join(BASE_DIR, 'public', 'siteData.json');

const batch36Updates = {
  2744: {
    name: "RV Institute of Technology (RVIT)",
    address: "Chebrolu, Guntur District, Andhra Pradesh - 522212",
    city: "Guntur",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-9951222238",
    email: "principal@rvit.edu.in",
    website: "https://www.rvit.edu.in",
    image: "/images/campuses/campus_architecture_5.jpg",
    img: "/images/campuses/campus_architecture_5.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/B.Sc Computer Science + APICET", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 120 },
      { name: "B.Tech", title: "Bachelor of Technology", duration: "4 Years", fees: "₹2,00,000", fee: "₹2,00,000", eligibility: "10+2 with PCM + AP EAPCET", type: "ENGINEERING", intake: 420 }
    ]
  },
  2746: {
    name: "V.S. Lakshmi Institute of Management Studies",
    address: "Vidyavan Campus, Near New RTO Office, NFCL Road, Kakinada, Andhra Pradesh - 533005",
    city: "Kakinada",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-6300310200",
    email: "vslprincipal@gmail.com",
    website: "https://vslakshmiwomenscollege.in",
    image: "/images/campuses/campus_architecture_6.jpg",
    img: "/images/campuses/campus_architecture_6.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 120 },
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/Graduation with Mathematics + APICET", type: "COMPUTER APPLICATIONS", intake: 60 }
    ]
  },
  2750: {
    name: "Ambedkar Institute of Management Studies (AIMS)",
    address: "#1-61/10, Sandipani Nagar, Yendada, Visakhapatnam, Andhra Pradesh - 530045",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-891-2783946",
    email: "aimsvizag@gmail.com",
    website: "http://aimsbschool.org",
    image: "/images/campuses/campus_architecture_7.jpg",
    img: "/images/campuses/campus_architecture_7.jpg",
    verified: true,
    courses: [
      { name: "PGDM", title: "Post Graduate Diploma in Management", duration: "2 Years", fees: "₹1,50,000", fee: "₹1,50,000", eligibility: "Graduation + APICET/MAT", type: "MANAGEMENT", intake: 120 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 60 }
    ]
  },
  2754: {
    name: "Visakha Institute of Engineering & Technology (VIET)",
    address: "88th Division, Narava, GVMC, Visakhapatnam, Andhra Pradesh - 530027",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-9959617476",
    email: "vietvsp@gmail.com",
    website: "https://www.viet.edu.in",
    image: "/images/campuses/campus_architecture_8.jpg",
    img: "/images/campuses/campus_architecture_8.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/B.Sc Computer Science + APICET", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 120 },
      { name: "B.Tech", title: "Bachelor of Technology", duration: "4 Years", fees: "₹1,80,000", fee: "₹1,80,000", eligibility: "10+2 with PCM + AP EAPCET", type: "ENGINEERING", intake: 420 }
    ]
  },
  2759: {
    name: "Haindavi PG College (MBA)",
    address: "Puttaparthi Road, Dharmavaram, Anantapur District, Andhra Pradesh - 515671",
    city: "Dharmavaram",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-9866013921",
    email: "haindavipgcollege@gmail.com",
    website: "http://www.haindavipgcollege.org",
    image: "/images/campuses/campus_architecture_9.jpg",
    img: "/images/campuses/campus_architecture_9.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 120 }
    ]
  },
  2761: {
    name: "CSI Rayalaseema Diocese Institute of Management & Technology",
    address: "C.S.I. Mission Compound, NH-63, Guntakal Road, Gooty, Anantapuramu District, Andhra Pradesh - 515401",
    city: "Gooty",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Diocese / Trust",
    phone: "+91-8552-252642",
    email: "cbjrusselkiran@csirdimt.org",
    website: "http://www.csirdimt.org",
    image: "/images/campuses/campus_architecture_10.jpg",
    img: "/images/campuses/campus_architecture_10.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 120 },
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/Graduation with Mathematics + APICET", type: "COMPUTER APPLICATIONS", intake: 60 }
    ]
  },
  2764: {
    name: "Gate Institute of Technology and Management Sciences",
    address: "Chiguruvada North Kandriga, Rayalacheruvu Road, Tirupati, Andhra Pradesh - 517502",
    city: "Tirupati",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-9989294144",
    email: "gate.college@yahoo.com",
    website: "http://www.gatetirupati.com",
    image: "/images/campuses/campus_architecture_1.jpg",
    img: "/images/campuses/campus_architecture_1.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/B.Sc Computer Science + APICET", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 120 }
    ]
  },
  2765: {
    name: "Viswam Engineering College",
    address: "NH-205, Angallu Post, Madanapalle, Annamayya District, Andhra Pradesh - 517325",
    city: "Madanapalle",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-9505021075",
    email: "office@viswam.ac.in",
    website: "https://viswam.ac.in",
    image: "/images/campuses/campus_architecture_2.jpg",
    img: "/images/campuses/campus_architecture_2.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/B.Sc Computer Science + APICET", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 120 },
      { name: "B.Tech", title: "Bachelor of Technology", duration: "4 Years", fees: "₹2,00,000", fee: "₹2,00,000", eligibility: "10+2 with PCM + AP EAPCET", type: "ENGINEERING", intake: 480 }
    ]
  },
  2767: {
    name: "Sanjeev Institute of Planning and Management",
    address: "Gollapalem Road, Turangi, Kakinada, Kakinada District, Andhra Pradesh - 533003",
    city: "Kakinada",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-8977665333",
    email: "office@sim.edu.in",
    website: "https://sim.edu.in",
    image: "/images/campuses/campus_architecture_3.jpg",
    img: "/images/campuses/campus_architecture_3.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/Graduation with Mathematics + APICET", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 120 }
    ]
  },
  2768: {
    name: "Abhinav Institute of Management & Technology",
    address: "Somarajupalli, Singarayakonda, Prakasam District, Andhra Pradesh - 523101",
    city: "Singarayakonda",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-8598-236286",
    email: "aimt08@gmail.com",
    website: "http://www.abhinavinstitutions.com",
    image: "/images/campuses/campus_architecture_4.jpg",
    img: "/images/campuses/campus_architecture_4.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 120 },
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/Graduation with Mathematics + APICET", type: "COMPUTER APPLICATIONS", intake: 60 }
    ]
  }
};

const rawData = JSON.parse(fs.readFileSync(SITE_DATA_PATH, 'utf8'));
const colleges = Array.isArray(rawData) ? rawData : rawData.colleges;

let updatedCount = 0;
colleges.forEach(col => {
  const update = batch36Updates[col.id];
  if (update) {
    Object.assign(col, update);
    updatedCount++;
    console.log(`Updated ID ${col.id}: ${col.name}`);
  }
});

fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(rawData, null, 2), 'utf8');
console.log(`Successfully updated ${updatedCount} colleges in ${SITE_DATA_PATH}`);

