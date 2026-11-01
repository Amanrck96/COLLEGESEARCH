const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const SITE_DATA_PATH = path.join(BASE_DIR, 'public', 'siteData.json');

const batch51Updates = {
  67: {
    name: "Sine International Institute of Technology (SIIT Jaipur)",
    address: "Balawala-Lakhna Road, Via Sanganer Bazar, Jaipur - 302029, Rajasthan",
    city: "Jaipur",
    state: "Rajasthan",
    type: "Private (Engineering College)",
    ownership: "Private / Sine Educational Trust",
    phone: "0141-2771777",
    email: "info@siitjaipur.org",
    website: "https://siitjaipur.org",
    image: "/images/campuses/campus_architecture_1.jpg",
    img: "/images/campuses/campus_architecture_1.jpg",
    verified: true,
    courses: [
      { name: "B.Tech (CSE)", title: "Bachelor of Technology in Computer Science & Engineering", duration: "4 Years", fees: "₹3,40,000", fee: "₹3,40,000", eligibility: "10+2 with PCM (45%) + REAP / JEE Main", type: "ENGINEERING", intake: 60 },
      { name: "B.Tech (Civil)", title: "Bachelor of Technology in Civil Engineering", duration: "4 Years", fees: "₹3,20,000", fee: "₹3,20,000", eligibility: "10+2 with PCM (45%) + REAP / JEE Main", type: "ENGINEERING", intake: 60 },
      { name: "Diploma (Polytechnic)", title: "Diploma in Mechanical Engineering", duration: "3 Years", fees: "₹1,20,000", fee: "₹1,20,000", eligibility: "10th Class (35%)", type: "ENGINEERING", intake: 60 }
    ]
  },
  68: {
    name: "SR International Institute of Technology (SRIIT Hyderabad)",
    address: "Rampally Dayara, Keesara Mandal, Medchal-Malkajgiri, Hyderabad - 501301, Telangana",
    city: "Hyderabad",
    state: "Telangana",
    type: "Private (Engineering College)",
    ownership: "Private / Sri Rajeshwara Educational Society",
    phone: "08418-200024",
    email: "principal@sriit.ac.in",
    website: "https://sriit.ac.in",
    image: "/images/campuses/campus_architecture_2.jpg",
    img: "/images/campuses/campus_architecture_2.jpg",
    verified: true,
    courses: [
      { name: "B.Tech (CSE)", title: "Bachelor of Technology in Computer Science & Engineering", duration: "4 Years", fees: "₹3,80,000", fee: "₹3,80,000", eligibility: "10+2 with PCM (45%) + TS EAMCET", type: "ENGINEERING", intake: 120 },
      { name: "B.Tech (IT)", title: "Bachelor of Technology in Information Technology", duration: "4 Years", fees: "₹3,80,000", fee: "₹3,80,000", eligibility: "10+2 with PCM (45%) + TS EAMCET", type: "ENGINEERING", intake: 60 },
      { name: "B.Tech (ECE)", title: "Bachelor of Technology in Electronics & Communication", duration: "4 Years", fees: "₹3,40,000", fee: "₹3,40,000", eligibility: "10+2 with PCM (45%) + TS EAMCET", type: "ENGINEERING", intake: 60 }
    ]
  },
  69: {
    name: "Indian Institute of Management and Commerce (IIMC Hyderabad)",
    address: "6-1-91, Adj. to Telephone Bhavan, Khairatabad, Hyderabad - 500004, Telangana",
    city: "Hyderabad",
    state: "Telangana",
    type: "Private (Autonomous Degree College)",
    ownership: "Private / Vasavi Foundation",
    phone: "040-23237902",
    email: "iimc1973@gmail.com",
    website: "https://www.iimchyderabad.com",
    image: "/images/campuses/campus_architecture_3.jpg",
    img: "/images/campuses/campus_architecture_3.jpg",
    verified: true,
    courses: [
      { name: "B.Com (Hons)", title: "Bachelor of Commerce (Honours)", duration: "3 Years", fees: "₹1,35,000", fee: "₹1,35,000", eligibility: "10+2 with Commerce / Mathematics (50%)", type: "COMMERCE", intake: 120 },
      { name: "B.Com (Computers)", title: "Bachelor of Commerce in Computer Applications", duration: "3 Years", fees: "₹1,20,000", fee: "₹1,20,000", eligibility: "10+2 with Commerce (45%)", type: "COMMERCE", intake: 120 },
      { name: "BBA", title: "Bachelor of Business Administration", duration: "3 Years", fees: "₹1,50,000", fee: "₹1,50,000", eligibility: "10+2 in any stream (45%)", type: "MANAGEMENT", intake: 60 }
    ]
  },
  70: {
    name: "Meerut International Institute of Technology (MIIT Meerut)",
    address: "Subharti Puram, NH-58, Delhi-Haridwar Bypass Road, Meerut - 250005, Uttar Pradesh",
    city: "Meerut",
    state: "Uttar Pradesh",
    type: "Private (Technical Institute)",
    ownership: "Private / Subharti Trust",
    phone: "0121-2439043",
    email: "info@miitmeerut.com",
    website: "https://miitmeerut.com",
    image: "/images/campuses/campus_architecture_4.jpg",
    img: "/images/campuses/campus_architecture_4.jpg",
    verified: true,
    courses: [
      { name: "B.Tech (CSE)", title: "Bachelor of Technology in Computer Science & Engineering", duration: "4 Years", fees: "₹3,20,000", fee: "₹3,20,000", eligibility: "10+2 with PCM (45%) + UPCET / JEE Main", type: "ENGINEERING", intake: 60 },
      { name: "Diploma (Civil)", title: "Diploma in Civil Engineering", duration: "3 Years", fees: "₹1,35,000", fee: "₹1,35,000", eligibility: "10th Class (35%) + JEECUP", type: "ENGINEERING", intake: 60 },
      { name: "BCA", title: "Bachelor of Computer Applications", duration: "3 Years", fees: "₹1,50,000", fee: "₹1,50,000", eligibility: "10+2 with Mathematics (45%)", type: "COMPUTER APPLICATIONS", intake: 60 }
    ]
  },
  71: {
    name: "Nagpur Institute of Technology Polytechnic (NIT Polytechnic Nagpur)",
    address: "Survey No. 13/2, Mahurzari, Near Fetri, Katol Road, Nagpur - 441501, Maharashtra",
    city: "Nagpur",
    state: "Maharashtra",
    type: "Private (Polytechnic College)",
    ownership: "Private / Shri Sai Shikshan Sanstha",
    phone: "0712-2980050",
    email: "nitpolytechnicnagpur@gmail.com",
    website: "https://www.nitpolytechnic.edu.in",
    image: "/images/campuses/campus_architecture_5.jpg",
    img: "/images/campuses/campus_architecture_5.jpg",
    verified: true,
    courses: [
      { name: "Diploma (Mechanical)", title: "Diploma in Mechanical Engineering", duration: "3 Years", fees: "₹1,65,000", fee: "₹1,65,000", eligibility: "10th Class (35%) + CAP Round", type: "ENGINEERING", intake: 60 },
      { name: "Diploma (Computer)", title: "Diploma in Computer Engineering", duration: "3 Years", fees: "₹1,65,000", fee: "₹1,65,000", eligibility: "10th Class (35%) + CAP Round", type: "ENGINEERING", intake: 60 },
      { name: "Diploma (Electrical)", title: "Diploma in Electrical Engineering", duration: "3 Years", fees: "₹1,65,000", fee: "₹1,65,000", eligibility: "10th Class (35%) + CAP Round", type: "ENGINEERING", intake: 60 }
    ]
  },
  72: {
    name: "Nagpur Institute of Technology Graduate School of Management (NIT GSM Nagpur)",
    address: "Survey No. 13/2, Mahurzari, Katol Road, Nagpur - 441501, Maharashtra",
    city: "Nagpur",
    state: "Maharashtra",
    type: "Private (Management Institute)",
    ownership: "Private / Shri Sai Shikshan Sanstha",
    phone: "0712-2980051",
    email: "info@nitgsm.edu.in",
    website: "https://www.nit.edu.in",
    image: "/images/campuses/campus_architecture_6.jpg",
    img: "/images/campuses/campus_architecture_6.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹2,10,000", fee: "₹2,10,000", eligibility: "Graduation (50%) + MAH MBA CET / CMAT", type: "MANAGEMENT", intake: 120 }
    ]
  },
  73: {
    name: "Indian Institute of Management Mumbai (IIM Mumbai)",
    address: "Vihar Lake Road, Near The Residence Hotel, Powai, Mumbai - 400087, Maharashtra",
    city: "Mumbai",
    state: "Maharashtra",
    type: "Institute of National Importance",
    ownership: "Ministry of Education, Government of India (IIM Act 2017)",
    phone: "022-28573371",
    email: "admissions@iimmumbai.ac.in",
    website: "https://iimmumbai.ac.in",
    image: "/images/campuses/campus_architecture_7.jpg",
    img: "/images/campuses/campus_architecture_7.jpg",
    verified: true,
    courses: [
      { name: "MBA (General)", title: "Master of Business Administration (General)", duration: "2 Years", fees: "₹21,00,000", fee: "₹21,00,000", eligibility: "Graduation (50%) + CAT Exam", type: "MANAGEMENT", intake: 240 },
      { name: "MBA (OSCM)", title: "MBA in Operations and Supply Chain Management", duration: "2 Years", fees: "₹21,00,000", fee: "₹21,00,000", eligibility: "Graduation in Engineering / Allied + CAT Exam", type: "MANAGEMENT", intake: 180 },
      { name: "MBA (SM)", title: "MBA in Sustainability Management", duration: "2 Years", fees: "₹21,00,000", fee: "₹21,00,000", eligibility: "Graduation (50%) + CAT Exam", type: "MANAGEMENT", intake: 60 }
    ]
  },
  74: {
    name: "National Institute of Technology Calicut (NIT Calicut)",
    address: "Calicut Mukkam Road, Kattangal, Kettangal, Kozhikode - 673601, Kerala",
    city: "Kozhikode",
    state: "Kerala",
    type: "Institute of National Importance",
    ownership: "Ministry of Education, Government of India (NITSER Act)",
    phone: "0495-2286100",
    email: "registrar@nitc.ac.in",
    website: "https://www.nitc.ac.in",
    image: "/images/campuses/campus_architecture_8.jpg",
    img: "/images/campuses/campus_architecture_8.jpg",
    verified: true,
    courses: [
      { name: "B.Tech (CSE)", title: "Bachelor of Technology in Computer Science & Engineering", duration: "4 Years", fees: "₹6,80,000", fee: "₹6,80,000", eligibility: "10+2 with PCM + JEE Main / CSAB", type: "ENGINEERING", intake: 180 },
      { name: "B.Tech (ECE)", title: "Bachelor of Technology in Electronics & Communication Engineering", duration: "4 Years", fees: "₹6,80,000", fee: "₹6,80,000", eligibility: "10+2 with PCM + JEE Main / CSAB", type: "ENGINEERING", intake: 150 },
      { name: "M.Tech (CSE)", title: "Master of Technology in Computer Science & Engineering", duration: "2 Years", fees: "₹1,80,000", fee: "₹1,80,000", eligibility: "B.Tech + GATE / CCMT", type: "ENGINEERING", intake: 45 }
    ]
  },
  75: {
    name: "Indian Institute of Technology Kharagpur (IIT Kharagpur)",
    address: "Kharagpur - 721302, Paschim Medinipur District, West Bengal",
    city: "Kharagpur",
    state: "West Bengal",
    type: "Institute of National Importance",
    ownership: "Ministry of Education, Government of India (IIT Act)",
    phone: "03222-255221",
    email: "registrar@hijli.iitkgp.ac.in",
    website: "https://www.iitkgp.ac.in",
    image: "/images/campuses/campus_architecture_9.jpg",
    img: "/images/campuses/campus_architecture_9.jpg",
    verified: true,
    courses: [
      { name: "B.Tech (CSE)", title: "Bachelor of Technology in Computer Science & Engineering", duration: "4 Years", fees: "₹10,00,000", fee: "₹10,00,000", eligibility: "10+2 with PCM + JEE Advanced", type: "ENGINEERING", intake: 85 },
      { name: "B.Tech (ECE)", title: "Bachelor of Technology in Electronics & Electrical Communication", duration: "4 Years", fees: "₹10,00,000", fee: "₹10,00,000", eligibility: "10+2 with PCM + JEE Advanced", type: "ENGINEERING", intake: 90 },
      { name: "MBA (VGSoM)", title: "Master of Business Administration (VGSoM)", duration: "2 Years", fees: "₹11,50,000", fee: "₹11,50,000", eligibility: "B.Tech / Master's (60%) + CAT Exam", type: "MANAGEMENT", intake: 140 }
    ]
  },
  76: {
    name: "Indian Institute of Management Kozhikode (IIM Kozhikode)",
    address: "IIMK Campus P.O., Kunnamangalam, Kozhikode - 673570, Kerala",
    city: "Kozhikode",
    state: "Kerala",
    type: "Institute of National Importance",
    ownership: "Ministry of Education, Government of India (IIM Act 2017)",
    phone: "0495-2809100",
    email: "admissions@iimk.ac.in",
    website: "https://www.iimk.ac.in",
    image: "/images/campuses/campus_architecture_10.jpg",
    img: "/images/campuses/campus_architecture_10.jpg",
    verified: true,
    courses: [
      { name: "PGP (MBA)", title: "Post Graduate Programme in Management (MBA)", duration: "2 Years", fees: "₹20,50,000", fee: "₹20,50,000", eligibility: "Graduation (50%) + CAT Exam", type: "MANAGEMENT", intake: 480 },
      { name: "PGP-Finance", title: "Post Graduate Programme in Finance", duration: "2 Years", fees: "₹20,50,000", fee: "₹20,50,000", eligibility: "Graduation with Mathematics + CAT Exam", type: "MANAGEMENT", intake: 60 },
      { name: "PGP-LSM", title: "Post Graduate Programme in Liberal Studies & Management", duration: "2 Years", fees: "₹20,50,000", fee: "₹20,50,000", eligibility: "Graduation (50%) + CAT / GRE / GMAT", type: "MANAGEMENT", intake: 60 }
    ]
  }
};

const rawData = fs.readFileSync(SITE_DATA_PATH, 'utf8');
const data = JSON.parse(rawData);
const colleges = Array.isArray(data.colleges) ? data.colleges : data;

let updatedCount = 0;
for (const col of colleges) {
  if (batch51Updates[col.id]) {
    const upd = batch51Updates[col.id];
    Object.assign(col, upd);
    updatedCount++;
    console.log(`Updated ID: ${col.id} - ${col.name}`);
  }
}

fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(data, null, 2), 'utf8');
console.log(`Successfully updated ${updatedCount} colleges in ${SITE_DATA_PATH}`);
