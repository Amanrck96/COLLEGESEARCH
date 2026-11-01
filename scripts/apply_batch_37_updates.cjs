const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const SITE_DATA_PATH = path.join(BASE_DIR, 'public', 'siteData.json');

const batch37Updates = {
  2771: {
    name: "Rajiv Gandhi Institute of Management & Science (RIMS)",
    address: "124, Thimmapuram Village, Atchempeta Junction, ADB Road, Kakinada, Andhra Pradesh - 533005",
    city: "Kakinada",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-884-2306577",
    email: "office@rimsmba.org",
    website: "https://rimsmba.org",
    image: "/images/campuses/campus_architecture_5.jpg",
    img: "/images/campuses/campus_architecture_5.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/B.Sc Computer Science + APICET", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 120 }
    ]
  },
  2774: {
    name: "Srinivasa Institute of Technology & Science (SITS)",
    address: "Chennai-Hyderabad Bypass Road, Ukkayapalli Village, Kadapa, Andhra Pradesh - 516002",
    city: "Kadapa",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-9299992810",
    email: "sits.principal@gmail.com",
    website: "https://www.sitskadapa.ac.in",
    image: "/images/campuses/campus_architecture_6.jpg",
    img: "/images/campuses/campus_architecture_6.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/B.Sc Computer Science + APICET", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 120 },
      { name: "B.Tech", title: "Bachelor of Technology", duration: "4 Years", fees: "₹1,80,000", fee: "₹1,80,000", eligibility: "10+2 with PCM + AP EAPCET", type: "ENGINEERING", intake: 360 }
    ]
  },
  2777: {
    name: "Sri Sai Ram Institute of PG Studies",
    address: "7-28, Tapathopu, North Rajupalem, Kodavalur Mandal, Nellore District, Andhra Pradesh - 524316",
    city: "Kodavalur",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-8622-255085",
    email: "principalssrips@gmail.com",
    website: "https://ssrips.com",
    image: "/images/campuses/campus_architecture_7.jpg",
    img: "/images/campuses/campus_architecture_7.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/Graduation with Mathematics + APICET", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 120 }
    ]
  },
  2780: {
    name: "Anantha Lakshmi Institute of Technology & Sciences (ALITS)",
    address: "Near S.K. University, Itikalapalli Village, Anantapuramu, Andhra Pradesh - 515721",
    city: "Anantapur",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-9347918939",
    email: "principal@alits.ac.in",
    website: "http://alits.ac.in",
    image: "/images/campuses/campus_architecture_8.jpg",
    img: "/images/campuses/campus_architecture_8.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/B.Sc Computer Science + APICET", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 120 },
      { name: "B.Tech", title: "Bachelor of Technology", duration: "4 Years", fees: "₹2,00,000", fee: "₹2,00,000", eligibility: "10+2 with PCM + AP EAPCET", type: "ENGINEERING", intake: 480 }
    ]
  },
  2782: {
    name: "KITS Akshar Institute of Technology",
    address: "NH-16, Opp. Katuri Medical College, Yanamadala, Prathipadu Mandal, Guntur, Andhra Pradesh - 522019",
    city: "Guntur",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-863-2288886",
    email: "principal@kitsakshar.ac.in",
    website: "https://kitsakshar.ac.in",
    image: "/images/campuses/campus_architecture_9.jpg",
    img: "/images/campuses/campus_architecture_9.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/B.Sc Computer Science + APICET", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 120 },
      { name: "B.Tech", title: "Bachelor of Technology", duration: "4 Years", fees: "₹1,80,000", fee: "₹1,80,000", eligibility: "10+2 with PCM + AP EAPCET", type: "ENGINEERING", intake: 360 }
    ]
  },
  2784: {
    name: "International School of Technology and Sciences for Women (ISTS)",
    address: "NH-16, East Gonagudem, Rajanagaram, Rajamahendravaram, East Godavari District, Andhra Pradesh - 533294",
    city: "Rajanagaram",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-9505506101",
    email: "principal@ists.ac.in",
    website: "https://www.ists.ac.in",
    image: "/images/campuses/campus_architecture_10.jpg",
    img: "/images/campuses/campus_architecture_10.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/B.Sc Computer Science + APICET", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 120 },
      { name: "B.Tech", title: "Bachelor of Technology", duration: "4 Years", fees: "₹2,20,000", fee: "₹2,20,000", eligibility: "10+2 with PCM + AP EAPCET", type: "ENGINEERING", intake: 420 }
    ]
  },
  2785: {
    name: "Santhiram Engineering College (SREC)",
    address: "NH-40, Nerawada X Roads, Nandyal, Nandyal District, Andhra Pradesh - 518501",
    city: "Nandyal",
    state: "Andhra Pradesh",
    type: "Autonomous Private",
    ownership: "Private",
    phone: "+91-8514-276201",
    email: "principal@srecnandyal.edu.in",
    website: "https://www.srecnandyal.edu.in",
    image: "/images/campuses/campus_architecture_1.jpg",
    img: "/images/campuses/campus_architecture_1.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/B.Sc Computer Science + APICET", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 120 },
      { name: "B.Tech", title: "Bachelor of Technology", duration: "4 Years", fees: "₹2,40,000", fee: "₹2,40,000", eligibility: "10+2 with PCM + AP EAPCET", type: "ENGINEERING", intake: 540 }
    ]
  },
  2789: {
    name: "Potti Sriramulu Chalavadi Mallikarjuna Rao College of Engineering and Technology (PSCMRCET)",
    address: "7-3-6/1, Raghava Reddy Street, Kothapeta, Vijayawada, Andhra Pradesh - 520001",
    city: "Vijayawada",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-8885219222",
    email: "info@pscmr.ac.in",
    website: "https://pscmr.ac.in",
    image: "/images/campuses/campus_architecture_2.jpg",
    img: "/images/campuses/campus_architecture_2.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/B.Sc Computer Science + APICET", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 120 },
      { name: "B.Tech", title: "Bachelor of Technology", duration: "4 Years", fees: "₹2,20,000", fee: "₹2,20,000", eligibility: "10+2 with PCM + AP EAPCET", type: "ENGINEERING", intake: 480 }
    ]
  },
  2790: {
    name: "MVR College of Engineering and Technology",
    address: "Beside Hanuman Statue, NH-65, Paritala, Kanchikacherla Mandal, NTR District, Andhra Pradesh - 521180",
    city: "Paritala",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-9848056570",
    email: "principal@mvrcoe.ac.in",
    website: "http://www.mvrcoe.ac.in",
    image: "/images/campuses/campus_architecture_3.jpg",
    img: "/images/campuses/campus_architecture_3.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/Graduation with Mathematics + APICET", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 120 },
      { name: "B.Tech", title: "Bachelor of Technology", duration: "4 Years", fees: "₹1,80,000", fee: "₹1,80,000", eligibility: "10+2 with PCM + AP EAPCET", type: "ENGINEERING", intake: 420 }
    ]
  },
  2791: {
    name: "Tripura Vidya Mandiram",
    address: "Tadepalli Village, Tadepalligudem, West Godavari District, Andhra Pradesh - 534101",
    city: "Tadepalligudem",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-8818-223456",
    email: "tripuravidyamandiram@gmail.com",
    website: "http://www.tvmtpg.org",
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
  const update = batch37Updates[col.id];
  if (update) {
    Object.assign(col, update);
    updatedCount++;
    console.log(`Updated ID ${col.id}: ${col.name}`);
  }
});

fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(rawData, null, 2), 'utf8');
console.log(`Successfully updated ${updatedCount} colleges in ${SITE_DATA_PATH}`);

