const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const SITE_DATA_PATH = path.join(BASE_DIR, 'public', 'siteData.json');

const batch32Updates = {
  2579: {
    name: "Tirumala Institute of Technology and Sciences",
    address: "Satulur Village, Nadendla Mandal, Palnadu District, Andhra Pradesh - 522549",
    city: "Satulur",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-8647-248555",
    email: "titsnrt@gmail.com",
    website: "https://titsnrt.org",
    image: "/images/campuses/campus_architecture_5.jpg",
    img: "/images/campuses/campus_architecture_5.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/B.Sc Computer Science + APICET", type: "COMPUTER APPLICATIONS", intake: 60 }
    ]
  },
  2580: {
    name: "Aditya Institute of Technology and Management (AITAM)",
    address: "K. Kotturu, Tekkali, Srikakulam District, Andhra Pradesh - 532201",
    city: "Tekkali",
    state: "Andhra Pradesh",
    type: "Private (Autonomous)",
    ownership: "Private",
    phone: "+91-9246657908",
    email: "info@adityatekkali.edu.in",
    website: "https://www.adityatekkali.edu.in",
    image: "/images/campuses/campus_architecture_1.jpg",
    img: "/images/campuses/campus_architecture_1.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/B.Sc Computer Science + APICET", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "B.Tech", title: "Bachelor of Technology", duration: "4 Years", fees: "₹2.20 Lakhs", fee: "₹2.20 Lakhs", eligibility: "10+2 with PCM + AP EAPCET", type: "ENGINEERING", intake: 780 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 60 }
    ]
  },
  2585: {
    name: "Addanki Institute of Management and Sciences",
    address: "Near Singarakonda, NRT Road, North Addanki, Bapatla District, Andhra Pradesh - 523201",
    city: "Addanki",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-8592-238262",
    email: "aimsaddanki@gmail.com",
    website: "http://www.aimsaddanki.com",
    image: "/images/campuses/campus_architecture_4.jpg",
    img: "/images/campuses/campus_architecture_4.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation with 50% + APICET", type: "MANAGEMENT", intake: 120 }
    ]
  },
  2586: {
    name: "Avanthi Institute of Engineering & Technology (Makavarapalem)",
    address: "Tamaram Village, Makavarapalem Mandal, Narsipatnam Revenue Division, Anakapalle District, Andhra Pradesh - 531113",
    city: "Makavarapalem",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-8932-222382",
    email: "principal_aiet@yahoo.com",
    website: "https://www.avanthienggcollege.ac.in",
    image: "/images/campuses/campus_architecture_2.jpg",
    img: "/images/campuses/campus_architecture_2.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/B.Sc Computer Science + APICET", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "B.Tech", title: "Bachelor of Technology", duration: "4 Years", fees: "₹1.80 Lakhs", fee: "₹1.80 Lakhs", eligibility: "10+2 with PCM + AP EAPCET", type: "ENGINEERING", intake: 540 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 60 }
    ]
  },
  2591: {
    name: "Vasavi Institute of Management and Computer Sciences (VIMCS)",
    address: "Vasavi Nagar, Peddapalli Village, Near Bhakarapet Railway Station, Sidhout Mandal, YSR Kadapa District, Andhra Pradesh - 516247",
    city: "Kadapa",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-8589-200399",
    email: "vimcos@rediffmail.com",
    website: "http://www.vimcsciences.ac.in",
    image: "/images/campuses/campus_architecture_6.jpg",
    img: "/images/campuses/campus_architecture_6.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation with 50% + APICET", type: "MANAGEMENT", intake: 120 }
    ]
  },
  2597: {
    name: "Avanthi Institute of Engineering and Technology (Bhogapuram)",
    address: "Cherukupally Village, Chittivalasa SO, Bhogapuram Mandal, Vizianagaram District, Andhra Pradesh - 535216",
    city: "Bhogapuram",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-8922-279884",
    email: "principal@aietta.ac.in",
    website: "http://aietta.ac.in",
    image: "/images/campuses/campus_architecture_3.jpg",
    img: "/images/campuses/campus_architecture_3.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/B.Sc Computer Science + APICET", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "B.Tech", title: "Bachelor of Technology", duration: "4 Years", fees: "₹1.80 Lakhs", fee: "₹1.80 Lakhs", eligibility: "10+2 with PCM + AP EAPCET", type: "ENGINEERING", intake: 480 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 60 }
    ]
  },
  2605: {
    name: "Maris Stella College (Autonomous)",
    address: "RTC Colony, Opp. Govt Polytechnic, Near Benz Circle, Vijayawada, Andhra Pradesh - 520008",
    city: "Vijayawada",
    state: "Andhra Pradesh",
    type: "Public/Government-Aided (Autonomous)",
    ownership: "Government-Aided",
    phone: "+91-866-2479181",
    email: "mscvja@marisstella.ac.in",
    website: "https://www.marisstella.ac.in",
    image: "/images/campuses/campus_architecture_7.jpg",
    img: "/images/campuses/campus_architecture_7.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹60,000", fee: "₹60,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 60 },
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹60,000", fee: "₹60,000", eligibility: "BCA/B.Sc + APICET", type: "COMPUTER APPLICATIONS", intake: 60 }
    ]
  },
  2608: {
    name: "Akkineni Nageswara Rao (ANR) College (Autonomous)",
    address: "Post Box No. 20, Eluru Road, Gudivada, Krishna District, Andhra Pradesh - 521301",
    city: "Gudivada",
    state: "Andhra Pradesh",
    type: "Public/Government-Aided (Autonomous)",
    ownership: "Government-Aided",
    phone: "+91-8674-242145",
    email: "anrcollegegdv@gmail.com",
    website: "https://www.anrcollege.edu",
    image: "/images/campuses/campus_architecture_9.jpg",
    img: "/images/campuses/campus_architecture_9.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹60,000", fee: "₹60,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 60 },
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹60,000", fee: "₹60,000", eligibility: "BCA/B.Sc + APICET", type: "COMPUTER APPLICATIONS", intake: 60 }
    ]
  },
  2609: {
    name: "V.S.M. College (Autonomous)",
    address: "Main Road, Ramachandrapuram, Dr. B.R. Ambedkar Konaseema District, Andhra Pradesh - 533255",
    city: "Ramachandrapuram",
    state: "Andhra Pradesh",
    type: "Public/Government-Aided (Autonomous)",
    ownership: "Government-Aided",
    phone: "+91-7729972264",
    email: "vsmcollege66@gmail.com",
    website: "https://www.vsm.edu.in",
    image: "/images/campuses/campus_architecture_8.jpg",
    img: "/images/campuses/campus_architecture_8.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹60,000", fee: "₹60,000", eligibility: "BCA/B.Sc Computer Science + APICET", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹60,000", fee: "₹60,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 60 }
    ]
  },
  2612: {
    name: "Sri Nalanda Institute of P.G. Studies",
    address: "Siddharth Nagar, Kantepudi Village, Sattenapalli Mandal, Palnadu District, Andhra Pradesh - 522438",
    city: "Sattenapalli",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-8641-237863",
    email: "nalanda.office@gmail.com",
    website: "https://www.ngi.ac.in",
    image: "/images/campuses/campus_architecture_10.jpg",
    img: "/images/campuses/campus_architecture_10.jpg",
    verified: true,
    courses: [
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
  if (batch32Updates[col.id]) {
    const upd = batch32Updates[col.id];
    Object.assign(col, upd);
    updatedCount++;
    console.log(`Updated [ID: ${col.id}] ${col.name}`);
  }
}

fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(rawData, null, 2), 'utf8');
console.log(`Applied Batch 32 updates to ${updatedCount} colleges in public/siteData.json`);
