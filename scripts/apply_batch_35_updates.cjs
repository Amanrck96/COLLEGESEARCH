const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const SITE_DATA_PATH = path.join(BASE_DIR, 'public', 'siteData.json');

const batch35Updates = {
  2684: {
    name: "S.K.R. Degree & PG College for Women",
    address: "Opp. T.T.D. Kalyana Mandapam, Danavaipeta, Rajahmundry, East Godavari District, Andhra Pradesh - 533103",
    city: "Rajahmundry",
    state: "Andhra Pradesh",
    type: "Government-Aided",
    ownership: "Trust / Aided",
    phone: "+91-883-2470003",
    email: "skrpgcollege@yahoo.com",
    website: "http://www.skrmbacollege.info",
    image: "/images/campuses/campus_architecture_4.jpg",
    img: "/images/campuses/campus_architecture_4.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹54,000", fee: "₹54,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 120 },
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹54,000", fee: "₹54,000", eligibility: "BCA/B.Sc with Mathematics + APICET", type: "COMPUTER APPLICATIONS", intake: 60 }
    ]
  },
  2686: {
    name: "Sri Balaji PG College (MBA & MCA)",
    address: "Sanapa Road, Alamuru Post, Rudrampeta, Anantapuramu, Andhra Pradesh - 515001",
    city: "Anantapur",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-8886630011",
    email: "principal.jx@jntua.ac.in",
    website: "https://www.sribalajimbamca.in",
    image: "/images/campuses/campus_architecture_5.jpg",
    img: "/images/campuses/campus_architecture_5.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/B.Sc Computer Science + APICET", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 120 }
    ]
  },
  2695: {
    name: "Madhura Sai Institute of IT & Management (MSIM)",
    address: "Peddasettypalli, Proddatur-Jammalamadugu Bypass Road, Proddatur, YSR Kadapa District, Andhra Pradesh - 516361",
    city: "Proddatur",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-9885991101",
    email: "msimpdtr@gmail.com",
    website: "http://www.msimpdtr.org",
    image: "/images/campuses/campus_architecture_6.jpg",
    img: "/images/campuses/campus_architecture_6.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation with 50% + APICET", type: "MANAGEMENT", intake: 120 },
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/B.Sc Computer Science + APICET", type: "COMPUTER APPLICATIONS", intake: 60 }
    ]
  },
  2699: {
    name: "Adithe Satyanarayana PG College (ASN)",
    address: "Rajya Lakshmi Gardens, Bhupayya Agraharam, Amalapuram, East Godavari District, Andhra Pradesh - 533201",
    city: "Amalapuram",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-8856-232125",
    email: "asnmba@rediffmail.com",
    website: "http://www.asncolleges.org",
    image: "/images/campuses/campus_architecture_7.jpg",
    img: "/images/campuses/campus_architecture_7.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation with 50% + APICET", type: "MANAGEMENT", intake: 120 }
    ]
  },
  2702: {
    name: "Sri Vidya Institute of Management Studies",
    address: "Govindapalem, Puttur, Tirupati District, Andhra Pradesh - 517583",
    city: "Puttur",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-9441046428",
    email: "sreevidyamca@gmail.com",
    website: "https://sreevidyacolleges.in",
    image: "/images/campuses/campus_architecture_8.jpg",
    img: "/images/campuses/campus_architecture_8.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/B.Sc Computer Science + APICET", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 120 }
    ]
  },
  2703: {
    name: "Rao's Institute of Management Studies (RIMS)",
    address: "207/1, Chemudugunta Village, Venkatachalam Mandal, Nellore District, Andhra Pradesh - 524320",
    city: "Nellore",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-861-2331094",
    email: "info@raosinstitutions.com",
    website: "https://www.raosinstitutions.com",
    image: "/images/campuses/campus_architecture_9.jpg",
    img: "/images/campuses/campus_architecture_9.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation with 50% + APICET", type: "MANAGEMENT", intake: 120 },
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/B.Sc Computer Science + APICET", type: "COMPUTER APPLICATIONS", intake: 60 }
    ]
  },
  2713: {
    name: "Avanthi's St. Theressa Institute of Engineering & Technology",
    address: "Garbham Road, Garividi (Cheepurupalli), Vizianagaram District, Andhra Pradesh - 535101",
    city: "Garividi",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-9704755549",
    email: "sttheressa99@gmail.com",
    website: "https://www.sttheressaengg.ac.in",
    image: "/images/campuses/campus_architecture_10.jpg",
    img: "/images/campuses/campus_architecture_10.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/B.Sc Computer Science + APICET", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 120 },
      { name: "B.Tech", title: "Bachelor of Technology", duration: "4 Years", fees: "₹1,80,000", fee: "₹1,80,000", eligibility: "10+2 with PCM + AP EAPCET", type: "ENGINEERING", intake: 360 }
    ]
  },
  2714: {
    name: "Dr. K.V. Subba Reddy School of Business Management",
    address: "Opp. Dupadu Railway Station, NH-44, Lakshmipuram Post, Kurnool, Andhra Pradesh - 518218",
    city: "Kurnool",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-7680076603",
    email: "kvsmba.admissions@gmail.com",
    website: "https://www.drkvsbschool.in",
    image: "/images/campuses/campus_architecture_1.jpg",
    img: "/images/campuses/campus_architecture_1.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/Graduation with Mathematics + APICET", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 120 }
    ]
  },
  2725: {
    name: "Chaitanya Engineering College",
    address: "Chaitanya Valley, Kommadi, Madhurawada, Visakhapatnam, Andhra Pradesh - 530048",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-9989314488",
    email: "principal@cec.ac.in",
    website: "https://cec.ac.in",
    image: "/images/campuses/campus_architecture_2.jpg",
    img: "/images/campuses/campus_architecture_2.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/B.Sc Computer Science + APICET", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 120 },
      { name: "B.Tech", title: "Bachelor of Technology", duration: "4 Years", fees: "₹2,00,000", fee: "₹2,00,000", eligibility: "10+2 with PCM + AP EAPCET", type: "ENGINEERING", intake: 480 }
    ]
  },
  2727: {
    name: "GATES Institute of Technology",
    address: "NH-44, Gootyanantapuram Village, Peddavadugur Mandal, Gooty, Anantapuramu District, Andhra Pradesh - 515401",
    city: "Gooty",
    state: "Andhra Pradesh",
    type: "Autonomous Private",
    ownership: "Private",
    phone: "+91-8333987200",
    email: "info@gatesit.ac.in",
    website: "https://gatesit.ac.in",
    image: "/images/campuses/campus_architecture_3.jpg",
    img: "/images/campuses/campus_architecture_3.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/B.Sc Computer Science + APICET", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 120 },
      { name: "B.Tech", title: "Bachelor of Technology", duration: "4 Years", fees: "₹2,20,000", fee: "₹2,20,000", eligibility: "10+2 with PCM + AP EAPCET", type: "ENGINEERING", intake: 540 }
    ]
  }
};

const rawData = JSON.parse(fs.readFileSync(SITE_DATA_PATH, 'utf8'));
const colleges = Array.isArray(rawData) ? rawData : rawData.colleges;

let updatedCount = 0;
colleges.forEach(col => {
  const update = batch35Updates[col.id];
  if (update) {
    Object.assign(col, update);
    updatedCount++;
    console.log(`Updated ID ${col.id}: ${col.name}`);
  }
});

fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(rawData, null, 2), 'utf8');
console.log(`Successfully updated ${updatedCount} colleges in ${SITE_DATA_PATH}`);
