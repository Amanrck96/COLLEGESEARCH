const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const SITE_DATA_PATH = path.join(BASE_DIR, 'public', 'siteData.json');

const batch25Updates = {
  2221: {
    name: "Swami Vivekananda Institute of Management",
    address: "Baniatangi, Post Bajapur, Khordha, Bhubaneswar, Odisha - 752060",
    city: "Bhubaneswar",
    state: "Odisha",
    type: "Private",
    ownership: "Private",
    phone: "+91-9437064518",
    email: "svim.bbsr@gmail.com",
    website: "https://www.svim.org.in",
    image: "/images/campuses/campus_architecture_1.jpg",
    img: "/images/campuses/campus_architecture_1.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹1.4 Lakhs", fee: "₹1.4 Lakhs", eligibility: "Graduation with 50% + OJEE/MAT/CAT", type: "MANAGEMENT", intake: 120 }
    ]
  },
  2226: {
    name: "Vamsi Institute of Management Studies",
    address: "At Jagannathpur, P.O. Pitamahal, Rayagada, Odisha - 765002",
    city: "Rayagada",
    state: "Odisha",
    type: "Private",
    ownership: "Private",
    phone: "+91-6856-224422",
    email: "vamsiinstitute@gmail.com",
    website: "https://vamsi.edu.in",
    image: "/images/campuses/campus_architecture_2.jpg",
    img: "/images/campuses/campus_architecture_2.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹1.2 Lakhs", fee: "₹1.2 Lakhs", eligibility: "Graduation with 50% + OJEE/MAT/CAT", type: "MANAGEMENT", intake: 60 }
    ]
  },
  2227: {
    name: "Bharat Institute of Management and Technology",
    address: "Dahapada, Fuladi, Balasore, Odisha - 756003",
    city: "Balasore",
    state: "Odisha",
    type: "Private",
    ownership: "Private",
    phone: "+91-9437004344",
    email: "principal@bharatinstitute.org",
    website: "http://bharatinstitute.org",
    image: "/images/campuses/campus_architecture_3.jpg",
    img: "/images/campuses/campus_architecture_3.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹1.4 Lakhs", fee: "₹1.4 Lakhs", eligibility: "Graduation with 50% + OJEE/MAT/CAT", type: "MANAGEMENT", intake: 60 }
    ]
  },
  2232: {
    name: "Saraswat Institute of Management",
    address: "Saraswati Vihar, Nandapur, P.O. Bajpur, Bhubaneswar, Khordha, Odisha - 752060",
    city: "Bhubaneswar",
    state: "Odisha",
    type: "Private",
    ownership: "Private",
    phone: "+91-674-243777",
    email: "saraswat_mba@yahoo.in",
    website: "http://saraswatgroup.org",
    image: "/images/campuses/campus_architecture_4.jpg",
    img: "/images/campuses/campus_architecture_4.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹1.4 Lakhs", fee: "₹1.4 Lakhs", eligibility: "Graduation with 50% + OJEE/MAT/CAT", type: "MANAGEMENT", intake: 120 }
    ]
  },
  2233: {
    name: "Koustuv Business School (KBS)",
    address: "Plot No. 1 (A), Infocity Road, Patia, Chandrasekharpur, Bhubaneswar, Odisha - 751024",
    city: "Bhubaneswar",
    state: "Odisha",
    type: "Private",
    ownership: "Private",
    phone: "+91-674-2740133",
    email: "info@koustuvgroup.ac.in",
    website: "https://kbsbbsr.ac.in",
    image: "/images/campuses/campus_architecture_5.jpg",
    img: "/images/campuses/campus_architecture_5.jpg",
    verified: true,
    courses: [
      { name: "PGDM", title: "Post Graduate Diploma in Management", duration: "2 Years", fees: "₹3.5 Lakhs", fee: "₹3.5 Lakhs", eligibility: "Graduation with 50% + MAT/CAT/XAT/CMAT", type: "MANAGEMENT", intake: 120 }
    ]
  },
  2234: {
    name: "Asian School of Management",
    address: "At Bantala, P.O. Muktapur, Khordha / Bhubaneswar, Odisha - 752055",
    city: "Bhubaneswar",
    state: "Odisha",
    type: "Private",
    ownership: "Private",
    phone: "+91-674-2744881",
    email: "info@asbm.ac.in",
    website: "https://www.asbm.ac.in",
    image: "/images/campuses/campus_architecture_6.jpg",
    img: "/images/campuses/campus_architecture_6.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹3.2 Lakhs", fee: "₹3.2 Lakhs", eligibility: "Graduation with 50% + CAT/XAT/MAT/OJEE", type: "MANAGEMENT", intake: 120 }
    ]
  },
  2235: {
    name: "Disha College of Management and Technology",
    address: "Jagannathpur Village, Near Sidha Bhairavi Temple, Biswanathpur Road, P.O. Mantridi, Via Golanthara, District Ganjam, Berhampur, Odisha - 761008",
    city: "Berhampur",
    state: "Odisha",
    type: "Private",
    ownership: "Private",
    phone: "+91-9937654949",
    email: "disha.berhampur@gmail.com",
    website: "https://dishacollege.in",
    image: "/images/campuses/campus_architecture_7.jpg",
    img: "/images/campuses/campus_architecture_7.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹1.2 Lakhs", fee: "₹1.2 Lakhs", eligibility: "BCA/B.Sc Computer Science or Graduation with Mathematics + OJEE", type: "COMPUTER APPLICATIONS", intake: 60 }
    ]
  },
  2238: {
    name: "Gurukrupa College of Management",
    address: "At Kalarahanga, Near KIIT Square, Infocity Post Office, Patia, Bhubaneswar, Khordha, Odisha - 751024",
    city: "Bhubaneswar",
    state: "Odisha",
    type: "Private",
    ownership: "Private",
    phone: "+91-6370551755",
    email: "gcmodisha@gmail.com",
    website: "https://gurukrupacollege.org",
    image: "/images/campuses/campus_architecture_8.jpg",
    img: "/images/campuses/campus_architecture_8.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹1.4 Lakhs", fee: "₹1.4 Lakhs", eligibility: "Graduation with 50% + OJEE/MAT/CAT", type: "MANAGEMENT", intake: 120 }
    ]
  },
  2242: {
    name: "Sophitorium Management College",
    address: "Baniatangi, Post Bajapur, Khordha, Bhubaneswar, Odisha - 752060",
    city: "Bhubaneswar",
    state: "Odisha",
    type: "Private",
    ownership: "Private",
    phone: "+91-9777533653",
    email: "info@sophitorium.org",
    website: "https://sophitoriumsmc.net",
    image: "/images/campuses/campus_architecture_9.jpg",
    img: "/images/campuses/campus_architecture_9.jpg",
    verified: true,
    courses: [
      { name: "PGDM", title: "Post Graduate Diploma in Management", duration: "2 Years", fees: "₹2.2 Lakhs", fee: "₹2.2 Lakhs", eligibility: "Graduation with 50% + MAT/CAT/XAT/ATMA", type: "MANAGEMENT", intake: 60 }
    ]
  },
  2245: {
    name: "Bhubaneswar Institute of Management Studies",
    address: "Info Valley, Harapur, Jatni / Khordha, Bhubaneswar, Odisha - 752054",
    city: "Bhubaneswar",
    state: "Odisha",
    type: "Private",
    ownership: "Private",
    phone: "+91-7847040520",
    email: "info@bimsbbsr.in",
    website: "https://bimsbbsr.in",
    image: "/images/campuses/campus_architecture_10.jpg",
    img: "/images/campuses/campus_architecture_10.jpg",
    verified: true,
    courses: [
      { name: "PGDM", title: "Post Graduate Diploma in Management", duration: "2 Years", fees: "₹2.5 Lakhs", fee: "₹2.5 Lakhs", eligibility: "Graduation with 50% + MAT/CAT/XAT/CMAT", type: "MANAGEMENT", intake: 60 }
    ]
  }
};

const rawData = JSON.parse(fs.readFileSync(SITE_DATA_PATH, 'utf8'));
const isArray = Array.isArray(rawData);
const colleges = isArray ? rawData : rawData.colleges;

let updatedCount = 0;
for (const col of colleges) {
  if (batch25Updates[col.id]) {
    const upd = batch25Updates[col.id];
    Object.assign(col, upd);
    updatedCount++;
    console.log(`Updated [ID: ${col.id}] ${col.name}`);
  }
}

fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(rawData, null, 2), 'utf8');
console.log(`Applied Batch 25 updates to ${updatedCount} colleges in public/siteData.json`);

