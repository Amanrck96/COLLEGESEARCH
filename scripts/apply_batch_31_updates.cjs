const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const SITE_DATA_PATH = path.join(BASE_DIR, 'public', 'siteData.json');

const batch31Updates = {
  2552: {
    name: "S.V.K.P. & Dr. K.S. Raju Arts & Science College (Autonomous)",
    address: "22-36, Canal Road, Penugonda, West Godavari District, Andhra Pradesh - 534320",
    city: "Penugonda",
    state: "Andhra Pradesh",
    type: "Public/Government-Aided (Autonomous)",
    ownership: "Government-Aided",
    phone: "+91-8819-246126",
    email: "svkp.penugonda@gmail.com",
    website: "https://www.svkpandksrajucollege.edu.in",
    image: "/images/campuses/campus_architecture_1.jpg",
    img: "/images/campuses/campus_architecture_1.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹60,000", fee: "₹60,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 60 },
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹60,000", fee: "₹60,000", eligibility: "BCA/B.Sc + APICET", type: "COMPUTER APPLICATIONS", intake: 60 }
    ]
  },
  2553: {
    name: "Dr. K.V. Subba Reddy Institute of Management",
    address: "Opp. Dupadu Railway Station, NH-44, Lakshmipuram Post, Kurnool, Andhra Pradesh - 518218",
    city: "Kurnool",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-7680076602",
    email: "kvsmba.admissions@gmail.com",
    website: "https://www.drkvsmba.in",
    image: "/images/campuses/campus_architecture_2.jpg",
    img: "/images/campuses/campus_architecture_2.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation with 50% + APICET", type: "MANAGEMENT", intake: 120 },
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/B.Sc + APICET", type: "COMPUTER APPLICATIONS", intake: 60 }
    ]
  },
  2557: {
    name: "Vikas Institute of Business Management",
    address: "7/321-A, Mochampet, YSR Kadapa District, Andhra Pradesh - 516001",
    city: "Kadapa",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-7416623777",
    email: "principalvibm@gmail.com",
    website: "http://www.vibmkadapa.com",
    image: "/images/campuses/campus_architecture_3.jpg",
    img: "/images/campuses/campus_architecture_3.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation with 50% + APICET", type: "MANAGEMENT", intake: 120 }
    ]
  },
  2558: {
    name: "Vignan's Institute of Engineering for Women (VIEW)",
    address: "Kapujaggarajupeta, VSEZ Post, Gajuwaka, Visakhapatnam, Andhra Pradesh - 530049",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-9133300357",
    email: "viewprincipal@gmail.com",
    website: "https://view.edu.in",
    image: "/images/campuses/campus_architecture_4.jpg",
    img: "/images/campuses/campus_architecture_4.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/B.Sc Computer Science + APICET", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "B.Tech", title: "Bachelor of Technology", duration: "4 Years", fees: "₹1,80,000", fee: "₹1,80,000", eligibility: "10+2 with PCM + AP EAPCET", type: "ENGINEERING", intake: 480 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 60 }
    ]
  },
  2560: {
    name: "Mother Theresa Institute of Management (MTIM)",
    address: "Melumoi Post, Madanapalle Highway, Palamaner, Chittoor District, Andhra Pradesh - 517408",
    city: "Palamaner",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-8579-268575",
    email: "mtimanage@gmail.com",
    website: "http://mtimba.edu.in",
    image: "/images/campuses/campus_architecture_5.jpg",
    img: "/images/campuses/campus_architecture_5.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation with 50% + APICET", type: "MANAGEMENT", intake: 120 }
    ]
  },
  2562: {
    name: "Vasavi MCA & MBA College",
    address: "Kandulapuram, Ravipadu Road, Cumbum, Prakasam District, Andhra Pradesh - 523333",
    city: "Cumbum",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-8406-232988",
    email: "vasavicbm@gmail.com",
    website: "http://www.vasavicbm.com",
    image: "/images/campuses/campus_architecture_6.jpg",
    img: "/images/campuses/campus_architecture_6.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation with 50% + APICET", type: "MANAGEMENT", intake: 120 },
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/B.Sc + APICET", type: "COMPUTER APPLICATIONS", intake: 60 }
    ]
  },
  2571: {
    name: "Rajamahendri Institute of Engineering and Technology (RIET)",
    address: "Near Pidimgoyyi, Bhoopalapatnam, Rajamahendravaram (Rajahmundry), East Godavari District, Andhra Pradesh - 533107",
    city: "Rajahmundry",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-7386582999",
    email: "principal@rietrjy.co.in",
    website: "https://www.rietrjy.co.in",
    image: "/images/campuses/campus_architecture_8.jpg",
    img: "/images/campuses/campus_architecture_8.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/B.Sc Computer Science + APICET", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "B.Tech", title: "Bachelor of Technology", duration: "4 Years", fees: "₹1,80,000", fee: "₹1,80,000", eligibility: "10+2 with PCM + AP EAPCET", type: "ENGINEERING", intake: 420 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 60 }
    ]
  },
  2575: {
    name: "Malineni Lakshmaiah Women's Engineering College",
    address: "Pulladigunta Village, Vatticherukuru Mandal, Prathipadu Road, Guntur, Andhra Pradesh - 522017",
    city: "Guntur",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-9703144772",
    email: "principal@mlewguntur.com",
    website: "http://mlewguntur.com",
    image: "/images/campuses/campus_architecture_7.jpg",
    img: "/images/campuses/campus_architecture_7.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/B.Sc + APICET", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "B.Tech", title: "Bachelor of Technology", duration: "4 Years", fees: "₹1,80,000", fee: "₹1,80,000", eligibility: "10+2 with PCM + AP EAPCET", type: "ENGINEERING", intake: 480 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 60 }
    ]
  },
  2577: {
    name: "S.D.G.S. College (Autonomous)",
    address: "Naneppa Nagar / Lakshmipuram, Hindupur, Sri Sathya Sai District, Andhra Pradesh - 515201",
    city: "Hindupur",
    state: "Andhra Pradesh",
    type: "Public/Government-Aided (Autonomous)",
    ownership: "Government-Aided",
    phone: "+91-9866603484",
    email: "sdgshdp@gmail.com",
    website: "https://sdgschdp.org",
    image: "/images/campuses/campus_architecture_9.jpg",
    img: "/images/campuses/campus_architecture_9.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹60,000", fee: "₹60,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 60 },
      { name: "BBA", title: "Bachelor of Business Administration", duration: "3 Years", fees: "₹45,000", fee: "₹45,000", eligibility: "10+2 from recognized board", type: "MANAGEMENT", intake: 60 }
    ]
  },
  2578: {
    name: "Sir C.V. Raman College of Computer Sciences",
    address: "Green Fields, Ongole Road, Podili, Prakasam District, Andhra Pradesh - 523240",
    city: "Podili",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-9989286225",
    email: "cvrccs@gmail.com",
    website: "http://cvrccs.org",
    image: "/images/campuses/campus_architecture_10.jpg",
    img: "/images/campuses/campus_architecture_10.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/B.Sc Computer Science + APICET", type: "COMPUTER APPLICATIONS", intake: 60 }
    ]
  }
};

console.log('Loading siteData.json...');
const rawData = JSON.parse(fs.readFileSync(SITE_DATA_PATH, 'utf8'));
const isArray = Array.isArray(rawData);
const colleges = isArray ? rawData : rawData.colleges;

let updatedCount = 0;
for (const col of colleges) {
  if (batch31Updates[col.id]) {
    const upd = batch31Updates[col.id];
    Object.assign(col, upd);
    updatedCount++;
    console.log(`Updated [ID: ${col.id}] ${col.name}`);
  }
}

fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(rawData, null, 2), 'utf8');
console.log(`Applied Batch 31 updates to ${updatedCount} colleges in public/siteData.json`);
