const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const SITE_DATA_PATH = path.join(BASE_DIR, 'public', 'siteData.json');

const batch29Updates = {
  2414: {
    name: "Sir C.V. Raman Institute of Management Studies",
    address: "Anantapur Road, Tadipatri, Ananthapuramu District, Andhra Pradesh - 515411",
    city: "Tadipatri",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-9182159008",
    email: "scvrimstudies@gmail.com",
    website: "https://scvrim.com",
    image: "/images/campuses/campus_architecture_2.jpg",
    img: "/images/campuses/campus_architecture_2.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation with 50% + APICET", type: "MANAGEMENT", intake: 120 }
    ]
  },
  2419: {
    name: "JNTUA School of Management Studies",
    address: "Sir M. Visveswaraya Road, JNTUA Campus, Ananthapuramu, Andhra Pradesh - 515002",
    city: "Ananthapuramu",
    state: "Andhra Pradesh",
    type: "Public/Government (State University Department)",
    ownership: "Government",
    phone: "+91-8554-230158",
    email: "hod.mba@jntua.ac.in",
    website: "https://www.jntua.ac.in",
    image: "/images/campuses/campus_architecture_1.jpg",
    img: "/images/campuses/campus_architecture_1.jpg",
    verified: true,
    courses: [
      { name: "MBA (General Management)", title: "MBA (General Management)", duration: "2 Years", fees: "₹54,000", fee: "₹54,000", eligibility: "Graduation with 50% + APICET", type: "MANAGEMENT", intake: 60 },
      { name: "MBA (FinTech)", title: "MBA (Financial Technology)", duration: "2 Years", fees: "₹54,000", fee: "₹54,000", eligibility: "Graduation with 50% + APICET", type: "MANAGEMENT", intake: 60 }
    ]
  },
  2421: {
    name: "MJR Institute of Business Management",
    address: "Diguvapokulavaripalli, Pulicherla Mandal, Chittoor Road, near Agraharam, Piler, Annamayya District, Andhra Pradesh - 517214",
    city: "Piler",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-9491054763",
    email: "mjribm@gmail.com",
    website: "http://mjribm.org",
    image: "/images/campuses/campus_architecture_3.jpg",
    img: "/images/campuses/campus_architecture_3.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation with 50% + APICET", type: "MANAGEMENT", intake: 120 }
    ]
  },
  2432: {
    name: "S.V. Arts & Science College",
    address: "West Gudur, S.V. Nagar, Gudur, Tirupati District (formerly SPSR Nellore), Andhra Pradesh - 524101",
    city: "Gudur",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-9849159163",
    email: "sunkrreddy@gmail.com",
    website: "https://svartscollegegudur.co.in",
    image: "/images/campuses/campus_architecture_4.jpg",
    img: "/images/campuses/campus_architecture_4.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/B.Sc Computer Science or Graduation with Mathematics + APICET", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation with 50% + APICET", type: "MANAGEMENT", intake: 120 }
    ]
  },
  2434: {
    name: "Visakha Institute for Professional Studies (VIPS)",
    address: "Kapuluppada, Bheemunipatnam Mandal, Visakhapatnam, Andhra Pradesh - 531163",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-8933-200062",
    email: "info@vips.org.in",
    website: "https://www.vips.org.in",
    image: "/images/campuses/campus_architecture_5.jpg",
    img: "/images/campuses/campus_architecture_5.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation with 50% + APICET", type: "MANAGEMENT", intake: 120 }
    ]
  },
  2436: {
    name: "Royal School of Information & Management Sciences",
    address: "Agarala Village, Opp. Chandragiri Fort, Tirupati-Chittoor Highway, Chandragiri, Tirupati District, Andhra Pradesh - 517102",
    city: "Tirupati",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-9949027623",
    email: "royalbschooltirupati@gmail.com",
    website: "https://www.royalbschool.com",
    image: "/images/campuses/campus_architecture_6.jpg",
    img: "/images/campuses/campus_architecture_6.jpg",
    verified: true,
    courses: [
      { name: "BCA", title: "Bachelor of Computer Applications", duration: "3 Years", fees: "₹45,000", fee: "₹45,000", eligibility: "10+2 with Mathematics", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/B.Sc + APICET", type: "COMPUTER APPLICATIONS", intake: 120 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 120 }
    ]
  },
  2444: {
    name: "Chirala Engineering College (CECC)",
    address: "Ramapuram Beach Road, Vetapalem Mandal, Chirala, Bapatla District, Andhra Pradesh - 523157",
    city: "Chirala",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-8331040550",
    email: "principal@cecc.co.in",
    website: "https://www.cecc.co.in",
    image: "/images/campuses/campus_architecture_7.jpg",
    img: "/images/campuses/campus_architecture_7.jpg",
    verified: true,
    courses: [
      { name: "B.Tech", title: "Bachelor of Technology", duration: "4 Years", fees: "₹1,80,000", fee: "₹1,80,000", eligibility: "10+2 with PCM + AP EAPCET", type: "ENGINEERING", intake: 600 },
      { name: "BCA", title: "Bachelor of Computer Applications", duration: "3 Years", fees: "₹45,000", fee: "₹45,000", eligibility: "10+2 from recognized board", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/B.Sc + APICET", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 60 }
    ]
  },
  2446: {
    name: "Andhra Loyola College (Autonomous)",
    address: "Veterinary Colony, Government Polytechnic Post Office Road, Vijayawada, Andhra Pradesh - 520008",
    city: "Vijayawada",
    state: "Andhra Pradesh",
    type: "Public/Government-Aided (Autonomous)",
    ownership: "Government-Aided",
    phone: "+91-866-2476082",
    email: "contactalc@gmail.com",
    website: "https://www.andhraloyolacollege.ac.in",
    image: "/images/campuses/campus_architecture_9.jpg",
    img: "/images/campuses/campus_architecture_9.jpg",
    verified: true,
    courses: [
      { name: "BBA", title: "Bachelor of Business Administration", duration: "3 Years", fees: "₹60,000", fee: "₹60,000", eligibility: "10+2 with 50%", type: "MANAGEMENT", intake: 60 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 60 },
      { name: "B.Sc", title: "Bachelor of Science", duration: "3 Years", fees: "₹45,000", fee: "₹45,000", eligibility: "10+2 with Science stream", type: "SCIENCE", intake: 300 },
      { name: "B.Com", title: "Bachelor of Commerce", duration: "3 Years", fees: "₹40,000", fee: "₹40,000", eligibility: "10+2 with Commerce/Arts", type: "COMMERCE", intake: 240 }
    ]
  },
  2458: {
    name: "Daggubati Chenchu Ramaiah Memorial (DCRM) PG College",
    address: "Gangavaram Road, Inkollu, Bapatla District, Andhra Pradesh - 523167",
    city: "Inkollu",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-8594-244416",
    email: "dcrmpg@gmail.com",
    website: "http://www.daggubatigroup.org",
    image: "/images/campuses/campus_architecture_3.jpg",
    img: "/images/campuses/campus_architecture_3.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation with 50% + APICET", type: "MANAGEMENT", intake: 120 }
    ]
  },
  2461: {
    name: "DBB Institute of PG Studies",
    address: "67/3, 4 Narayanavanam Road, Puttur, Tirupati District, Andhra Pradesh - 517583",
    city: "Puttur",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-8577-264004",
    email: "dbbips@yahoo.co.in",
    website: "http://www.dbbips.org",
    image: "/images/campuses/campus_architecture_8.jpg",
    img: "/images/campuses/campus_architecture_8.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/B.Sc Computer Science + APICET", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 120 }
    ]
  }
};

console.log('Loading siteData.json...');
const rawData = JSON.parse(fs.readFileSync(SITE_DATA_PATH, 'utf8'));
const isArray = Array.isArray(rawData);
const colleges = isArray ? rawData : rawData.colleges;

let updatedCount = 0;
for (const col of colleges) {
  if (batch29Updates[col.id]) {
    const upd = batch29Updates[col.id];
    Object.assign(col, upd);
    updatedCount++;
    console.log(`Updated [ID: ${col.id}] ${col.name}`);
  }
}

fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(rawData, null, 2), 'utf8');
console.log(`Applied Batch 29 updates to ${updatedCount} colleges in public/siteData.json`);

