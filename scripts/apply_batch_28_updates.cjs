const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const SITE_DATA_PATH = path.join(BASE_DIR, 'public', 'siteData.json');

const batch28Updates = {
  2381: {
    name: "Sapthagiri Institute of Management",
    address: "Backside of Kanchi Kamakshi Kalyana Mantapam, Nimkampalli Road, Hindupur, Sri Sathya Sai (Anantapur) District, Andhra Pradesh - 515201",
    city: "Hindupur",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-7780555381",
    email: "sapthagiricollege.mba@gmail.com",
    website: "https://simmba.in",
    image: "/images/campuses/campus_architecture_5.jpg",
    img: "/images/campuses/campus_architecture_5.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation with 50% + APICET", type: "MANAGEMENT", intake: 180 },
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/B.Sc with Mathematics + APICET", type: "COMPUTER APPLICATIONS", intake: 120 }
    ]
  },
  2382: {
    name: "Bheemi Reddy Institute of Management Science (BIMS)",
    address: "Alur Road, Mandigiri Village, Sadapuram GP, Adoni, Kurnool District, Andhra Pradesh - 518301",
    city: "Adoni",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-7660011177",
    email: "bimsadoni@gmail.com",
    website: "http://www.bimsadoni.com",
    image: "/images/campuses/campus_architecture_1.jpg",
    img: "/images/campuses/campus_architecture_1.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation with 50% + APICET", type: "MANAGEMENT", intake: 120 }
    ]
  },
  2383: {
    name: "Visakha Institute of Management Science (VIMS)",
    address: "Bodamettapalem, Dakamarri, Bheemunipatnam Mandal, Visakhapatnam, Andhra Pradesh - 531162",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-8922-248059",
    email: "urlvisakha@gmail.com",
    website: "http://www.vimsvizag.com",
    image: "/images/campuses/campus_architecture_2.jpg",
    img: "/images/campuses/campus_architecture_2.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation with 50% + APICET", type: "MANAGEMENT", intake: 120 }
    ]
  },
  2386: {
    name: "Global Institute of Business Management",
    address: "Court Center, Idupur Road, Markapur, Prakasam District, Andhra Pradesh - 523316",
    city: "Markapur",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-8596-222694",
    email: "gibm.markapur@gmail.com",
    website: "https://gibmmarkapur.org",
    image: "/images/campuses/campus_architecture_3.jpg",
    img: "/images/campuses/campus_architecture_3.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation with 50% + APICET", type: "MANAGEMENT", intake: 120 },
      { name: "BBA", title: "Bachelor of Business Administration", duration: "3 Years", fees: "₹45,000", fee: "₹45,000", eligibility: "10+2 with 50%", type: "MANAGEMENT", intake: 60 }
    ]
  },
  2388: {
    name: "Nadimpalli Satyanarayana Raju Institute of Technology (NSRIT)",
    address: "Sontyam, Pendurthi-Anandapuram Highway, Visakhapatnam, Andhra Pradesh - 531173",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    type: "Private (Autonomous)",
    ownership: "Private",
    phone: "+91-9885824167",
    email: "office@nsrit.edu.in",
    website: "https://www.nsrit.edu.in",
    image: "/images/campuses/campus_architecture_4.jpg",
    img: "/images/campuses/campus_architecture_4.jpg",
    verified: true,
    courses: [
      { name: "B.Tech", title: "Bachelor of Technology", duration: "4 Years", fees: "₹1,80,000", fee: "₹1,80,000", eligibility: "10+2 with PCM + AP EAPCET", type: "ENGINEERING", intake: 600 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 120 },
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/B.Sc + APICET", type: "COMPUTER APPLICATIONS", intake: 60 }
    ]
  },
  2390: {
    name: "Krishna University (KRU)",
    address: "Rudravaram, Machilipatnam, Krishna District, Andhra Pradesh - 521004",
    city: "Machilipatnam",
    state: "Andhra Pradesh",
    type: "Public/Government (State University)",
    ownership: "Government",
    phone: "+91-8672-259203",
    email: "registrar@kru.ac.in",
    website: "https://kru.ac.in",
    image: "/images/campuses/campus_architecture_7.jpg",
    img: "/images/campuses/campus_architecture_7.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹30,000", fee: "₹30,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 60 },
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹30,000", fee: "₹30,000", eligibility: "BCA/B.Sc + APICET", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "M.Sc", title: "Master of Science", duration: "2 Years", fees: "₹25,000", fee: "₹25,000", eligibility: "B.Sc in relevant subject", type: "SCIENCE", intake: 120 },
      { name: "MA", title: "Master of Arts", duration: "2 Years", fees: "₹20,000", fee: "₹20,000", eligibility: "Graduation in relevant discipline", type: "ARTS", intake: 90 }
    ]
  },
  2395: {
    name: "Sumourya Institute of Management",
    address: "Near Keshava Reddy Residential School, B. Thandrapadu, Nandyal Road, Kurnool, Andhra Pradesh - 518007",
    city: "Kurnool",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-8518-226737",
    email: "sumouryamba@gmail.com",
    website: "http://sumourya.org.in",
    image: "/images/campuses/campus_architecture_6.jpg",
    img: "/images/campuses/campus_architecture_6.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation with 50% + APICET", type: "MANAGEMENT", intake: 120 }
    ]
  },
  2397: {
    name: "Satya Institute of Technology and Management (SITAM)",
    address: "Near RTO Office, Gajularega, Vizianagaram, Andhra Pradesh - 535002",
    city: "Vizianagaram",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-9676788811",
    email: "principal@sitam.co.in",
    website: "https://sitam.co.in",
    image: "/images/campuses/campus_architecture_8.jpg",
    img: "/images/campuses/campus_architecture_8.jpg",
    verified: true,
    courses: [
      { name: "B.Tech", title: "Bachelor of Technology", duration: "4 Years", fees: "₹1,80,000", fee: "₹1,80,000", eligibility: "10+2 with PCM + AP EAPCET", type: "ENGINEERING", intake: 420 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 120 }
    ]
  },
  2407: {
    name: "D.L.R. College PG Courses",
    address: "Main Road, Gollalamamidada, Pedapudi Mandal, Kakinada District, Andhra Pradesh - 533344",
    city: "Gollalamamidada",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-884-2319568",
    email: "dlrcollege@gmail.com",
    website: "http://www.dlrcollege.org",
    image: "/images/campuses/campus_architecture_9.jpg",
    img: "/images/campuses/campus_architecture_9.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 120 },
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/B.Sc + APICET", type: "COMPUTER APPLICATIONS", intake: 60 }
    ]
  },
  2411: {
    name: "P.N.C. & K.R. College of PG Courses",
    address: "Palnadu Road, Narasaraopet, Palnadu District, Andhra Pradesh - 522601",
    city: "Narasaraopet",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-8647-222628",
    email: "pnckr@pnckr.com",
    website: "http://www.pnckr.com",
    image: "/images/campuses/campus_architecture_10.jpg",
    img: "/images/campuses/campus_architecture_10.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 180 },
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/B.Sc + APICET", type: "COMPUTER APPLICATIONS", intake: 120 }
    ]
  }
};

console.log('Loading siteData.json...');
const rawData = JSON.parse(fs.readFileSync(SITE_DATA_PATH, 'utf8'));
const isArray = Array.isArray(rawData);
const colleges = isArray ? rawData : rawData.colleges;

let updatedCount = 0;
for (const col of colleges) {
  if (batch28Updates[col.id]) {
    const upd = batch28Updates[col.id];
    Object.assign(col, upd);
    updatedCount++;
    console.log(`Updated [ID: ${col.id}] ${col.name}`);
  }
}

fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(rawData, null, 2), 'utf8');
console.log(`Applied Batch 28 updates to ${updatedCount} colleges in public/siteData.json`);
