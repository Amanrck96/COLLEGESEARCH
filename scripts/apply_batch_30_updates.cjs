const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const SITE_DATA_PATH = path.join(BASE_DIR, 'public', 'siteData.json');

const batch30Updates = {
  2466: {
    name: "Krishna Chaitanya Institute of Management",
    address: "Devarajugattu Village, Pedda Araveedu Mandal, Markapur, Prakasam District, Andhra Pradesh - 523316",
    city: "Markapur",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-9153019999",
    email: "principal@kits-anna.com",
    website: "http://www.kits-anna.com",
    image: "/images/campuses/campus_architecture_2.jpg",
    img: "/images/campuses/campus_architecture_2.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation with 50% + APICET", type: "MANAGEMENT", intake: 120 }
    ]
  },
  2473: {
    name: "G.B.R. Degree College (PG Courses)",
    address: "Duppalapudi Road, Anaparthi, East Godavari District, Andhra Pradesh - 533342",
    city: "Anaparthi",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-8857-227044",
    email: "gbrcolleges@gmail.com",
    website: "https://www.gbrcolleges.com",
    image: "/images/campuses/campus_architecture_1.jpg",
    img: "/images/campuses/campus_architecture_1.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/B.Sc Computer Science + APICET", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation with 50% + APICET", type: "MANAGEMENT", intake: 60 }
    ]
  },
  2474: {
    name: "Balaji Institute of IT and Management",
    address: "Ramachandrapuram Village, Ramarajupalli Post, Kadapa, YSR Kadapa District, Andhra Pradesh - 516003",
    city: "Kadapa",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-9059593566",
    email: "principal.9r@jntua.ac.in",
    website: "https://www.bimkadapa.in",
    image: "/images/campuses/campus_architecture_3.jpg",
    img: "/images/campuses/campus_architecture_3.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation with 50% + APICET", type: "MANAGEMENT", intake: 120 }
    ]
  },
  2482: {
    name: "Sri Datta Sai School of Business",
    address: "Prakasam Palli Village, Kopparthi Panchayat, C.K. Dinne Mandal, YSR Kadapa District, Andhra Pradesh - 516003",
    city: "Kadapa",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-9912208378",
    email: "mastan.axe@gmail.com",
    website: "http://www.sdsbschool.in",
    image: "/images/campuses/campus_architecture_4.jpg",
    img: "/images/campuses/campus_architecture_4.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation with 50% + APICET", type: "MANAGEMENT", intake: 120 }
    ]
  },
  2486: {
    name: "Ch.S.D. St. Theresa's College for Women (Autonomous)",
    address: "Gavaravaram, Sanivarapupet Post, Eluru, Eluru District (formerly West Godavari), Andhra Pradesh - 534003",
    city: "Eluru",
    state: "Andhra Pradesh",
    type: "Public/Government-Aided (Autonomous)",
    ownership: "Government-Aided",
    phone: "+91-8812-251210",
    email: "chsdtheresa@gmail.com",
    website: "https://stcelr.ac.in",
    image: "/images/campuses/campus_architecture_5.jpg",
    img: "/images/campuses/campus_architecture_5.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹60,000", fee: "₹60,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 60 },
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹60,000", fee: "₹60,000", eligibility: "BCA/B.Sc + APICET", type: "COMPUTER APPLICATIONS", intake: 60 }
    ]
  },
  2488: {
    name: "Sree Venkateswara College of Engineering (SVCN)",
    address: "Golden Nagar, North Rajupalem, NH-5 Bypass Road, Kodavalur, SPSR Nellore District, Andhra Pradesh - 524316",
    city: "Kodavalur",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-7032642099",
    email: "sving9@gmail.com",
    website: "http://svcn.ac.in",
    image: "/images/campuses/campus_architecture_6.jpg",
    img: "/images/campuses/campus_architecture_6.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/B.Sc Computer Science + APICET", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "B.Tech", title: "Bachelor of Technology", duration: "4 Years", fees: "₹1,80,000", fee: "₹1,80,000", eligibility: "10+2 with PCM + AP EAPCET", type: "ENGINEERING", intake: 480 }
    ]
  },
  2514: {
    name: "Wings Business School",
    address: "KKV Puram Village, RC Puram Mandal, Tirupati, Andhra Pradesh - 517561",
    city: "Tirupati",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-9642212727",
    email: "wingsbschool@gmail.com",
    website: "http://www.wingsbschool.org",
    image: "/images/campuses/campus_architecture_7.jpg",
    img: "/images/campuses/campus_architecture_7.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation with 50% + APICET", type: "MANAGEMENT", intake: 120 }
    ]
  },
  2516: {
    name: "Edge International B School",
    address: "Sy. No. 357 & 358, 5th KM, Gajulapalli Road, Sadakuppam Post, Bangarupalyam Taluk, Chittoor District, Andhra Pradesh - 517416",
    city: "Bangarupalyam",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-9440866604",
    email: "info@edgebschool.in",
    website: "http://www.edgebschool.in",
    image: "/images/campuses/campus_architecture_9.jpg",
    img: "/images/campuses/campus_architecture_9.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation with 50% + APICET", type: "MANAGEMENT", intake: 120 }
    ]
  },
  2547: {
    name: "Dantuluri Narayana Raju (D.N.R.) College (Autonomous)",
    address: "Balusumudi, Bhimavaram, West Godavari District, Andhra Pradesh - 534202",
    city: "Bhimavaram",
    state: "Andhra Pradesh",
    type: "Public/Government-Aided (Autonomous)",
    ownership: "Government-Aided",
    phone: "+91-8816-224119",
    email: "principal@dnrcollege.org",
    website: "https://dnrcollege.org",
    image: "/images/campuses/campus_architecture_10.jpg",
    img: "/images/campuses/campus_architecture_10.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹60,000", fee: "₹60,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 60 },
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹60,000", fee: "₹60,000", eligibility: "BCA/B.Sc + APICET", type: "COMPUTER APPLICATIONS", intake: 60 }
    ]
  },
  2551: {
    name: "Sri Vani Institute of Management and Sciences (SVIMS)",
    address: "Kakkalapalli Cross, NH-44 (Rudrampeta Bypass), Anantapur, Andhra Pradesh - 515004",
    city: "Anantapur",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-8554-274619",
    email: "srivanimcamba@gmail.com",
    website: "https://www.srivanimcamba.org",
    image: "/images/campuses/campus_architecture_8.jpg",
    img: "/images/campuses/campus_architecture_8.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/B.Sc Computer Science + APICET", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation with 50% + APICET", type: "MANAGEMENT", intake: 120 }
    ]
  }
};

console.log('Loading siteData.json...');
const rawData = JSON.parse(fs.readFileSync(SITE_DATA_PATH, 'utf8'));
const isArray = Array.isArray(rawData);
const colleges = isArray ? rawData : rawData.colleges;

let updatedCount = 0;
for (const col of colleges) {
  if (batch30Updates[col.id]) {
    const upd = batch30Updates[col.id];
    Object.assign(col, upd);
    updatedCount++;
    console.log(`Updated [ID: ${col.id}] ${col.name}`);
  }
}

fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(rawData, null, 2), 'utf8');
console.log(`Applied Batch 30 updates to ${updatedCount} colleges in public/siteData.json`);
