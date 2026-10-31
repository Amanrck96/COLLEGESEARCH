const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const SITE_DATA_PATH = path.join(BASE_DIR, 'public', 'siteData.json');

const batch33Updates = {
  2613: {
    name: "All Saints P.G. College",
    address: "Singannabanda Village, Maharajupeta Junction, Bheemunipatnam Mandal, Visakhapatnam, Andhra Pradesh - 531162",
    city: "Bheemunipatnam",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-891-2540946",
    email: "vvidyasundar@gmail.com",
    website: "http://www.aspgc.org",
    image: "/images/campuses/campus_architecture_1.jpg",
    img: "/images/campuses/campus_architecture_1.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation with 50% + APICET", type: "MANAGEMENT", intake: 120 }
    ]
  },
  2615: {
    name: "KKC Institute of PG Studies",
    address: "KKC Nagar, Tirupati-Chennai Highway, Parameswaramangalam, Puttur, Tirupati District, Andhra Pradesh - 517584",
    city: "Puttur",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-7799723307",
    email: "kipsprincipal@gmail.com",
    website: "http://kkcmba.org",
    image: "/images/campuses/campus_architecture_2.jpg",
    img: "/images/campuses/campus_architecture_2.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/B.Sc Computer Science + APICET", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 120 }
    ]
  },
  2616: {
    name: "Seshachala Institute of Management Studies (SIMS)",
    address: "Tirupati-Chennai Highway, Kanakampalem Village, Puttur Mandal, Tirupati District, Andhra Pradesh - 517583",
    city: "Puttur",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-9849189198",
    email: "sit.puttur@gmail.com",
    website: "http://www.seshachala.in",
    image: "/images/campuses/campus_architecture_3.jpg",
    img: "/images/campuses/campus_architecture_3.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation with 50% + APICET", type: "MANAGEMENT", intake: 120 }
    ]
  },
  2621: {
    name: "PRR Institute of Management Sciences",
    address: "Railway Station Road, New Market Yard, Gooty, Ananthapuramu District, Andhra Pradesh - 515401",
    city: "Gooty",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-9014219493",
    email: "prr.gty@gmail.com",
    website: "http://www.prrims.in",
    image: "/images/campuses/campus_architecture_4.jpg",
    img: "/images/campuses/campus_architecture_4.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation with 50% + APICET", type: "MANAGEMENT", intake: 120 }
    ]
  },
  2625: {
    name: "Pydah College (P.G. Courses)",
    address: "Gambheeram Village, Boyapalem, Anandapuram Mandal, Visakhapatnam, Andhra Pradesh - 531163",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-8933-222854",
    email: "pydahenggcollege@yahoo.com",
    website: "http://www.pydah.org",
    image: "/images/campuses/campus_architecture_5.jpg",
    img: "/images/campuses/campus_architecture_5.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation with 50% + APICET", type: "MANAGEMENT", intake: 120 }
    ]
  },
  2629: {
    name: "Nagarjuna Institute of Management Studies",
    address: "Chekurapadu, Chirala Road, Naguluppalapadu Mandal, Ongole, Prakasam District, Andhra Pradesh - 523002",
    city: "Ongole",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-8592-282733",
    email: "nims.ongole@gmail.com",
    website: "http://www.nimsnagarjuna.in",
    image: "/images/campuses/campus_architecture_6.jpg",
    img: "/images/campuses/campus_architecture_6.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation with 50% + APICET", type: "MANAGEMENT", intake: 120 }
    ]
  },
  2642: {
    name: "Medarametla Anjamma Mastan Rao (MAM) PG College",
    address: "Kesanupalli Village, Narasaraopet, Palnadu District, Andhra Pradesh - 522601",
    city: "Narasaraopet",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-6301425803",
    email: "mamcolleges@gmail.com",
    website: "https://mamcolleges.org",
    image: "/images/campuses/campus_architecture_5.jpg",
    img: "/images/campuses/campus_architecture_5.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/B.Sc Computer Science + APICET", type: "COMPUTER APPLICATIONS", intake: 60 }
    ]
  },
  2651: {
    name: "Palivela PG College",
    address: "8-39-4, Amalapuram Road, Palivela, Kothapeta Mandal, Dr. B.R. Ambedkar Konaseema District, Andhra Pradesh - 533229",
    city: "Palivela",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-8855-244775",
    email: "ssskcollege@gmail.com",
    website: "http://www.palivelapgcollege.com",
    image: "/images/campuses/campus_architecture_7.jpg",
    img: "/images/campuses/campus_architecture_7.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation with 50% + APICET", type: "MANAGEMENT", intake: 120 }
    ]
  },
  2652: {
    name: "Nova PG College (MBA)",
    address: "TV Relay Station Road, Jupudi Village, Ibrahimpatnam Mandal, NTR District, Andhra Pradesh - 521456",
    city: "Ibrahimpatnam",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-7675969633",
    email: "info@nova.ac.in",
    website: "https://www.nova.ac.in",
    image: "/images/campuses/campus_architecture_8.jpg",
    img: "/images/campuses/campus_architecture_8.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 120 },
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/B.Sc + APICET", type: "COMPUTER APPLICATIONS", intake: 60 }
    ]
  },
  2653: {
    name: "GIET Engineering College (Autonomous)",
    address: "NH-16, Chaitanya Knowledge City, Velugubanda Village, Rajanagaram Mandal, Rajahmundry, East Godavari District, Andhra Pradesh - 533296",
    city: "Rajahmundry",
    state: "Andhra Pradesh",
    type: "Private (Autonomous)",
    ownership: "Private",
    phone: "+91-9949993483",
    email: "principalgec@giet.ac.in",
    website: "https://gietec.ac.in",
    image: "/images/campuses/campus_architecture_9.jpg",
    img: "/images/campuses/campus_architecture_9.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/B.Sc Computer Science + APICET", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "B.Tech", title: "Bachelor of Technology", duration: "4 Years", fees: "₹2.20 Lakhs", fee: "₹2.20 Lakhs", eligibility: "10+2 with PCM + AP EAPCET", type: "ENGINEERING", intake: 600 }
    ]
  }
};

console.log('Loading siteData.json...');
const rawData = JSON.parse(fs.readFileSync(SITE_DATA_PATH, 'utf8'));
const isArray = Array.isArray(rawData);
const colleges = isArray ? rawData : rawData.colleges;

let updatedCount = 0;
for (const col of colleges) {
  if (batch33Updates[col.id]) {
    const upd = batch33Updates[col.id];
    Object.assign(col, upd);
    updatedCount++;
    console.log(`Updated [ID: ${col.id}] ${col.name}`);
  }
}

fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(rawData, null, 2), 'utf8');
console.log(`Applied Batch 33 updates to ${updatedCount} colleges in public/siteData.json`);
