const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const SITE_DATA_PATH = path.join(BASE_DIR, 'public', 'siteData.json');

const batch48Updates = {
  31: {
    name: "Indian Institute of Technology Ropar (IIT Ropar - Research Campus)",
    address: "Birla Farm, Bara Phool, Rupnagar (Ropar) - 140001, Punjab",
    city: "Rupnagar",
    state: "Punjab",
    type: "Institute of National Importance",
    ownership: "Ministry of Education, Government of India (IIT Act)",
    phone: "01881-227078",
    email: "deanacademic@iitrpr.ac.in",
    website: "https://www.iitrpr.ac.in",
    image: "/images/campuses/campus_architecture_1.jpg",
    img: "/images/campuses/campus_architecture_1.jpg",
    verified: true,
    courses: [
      { name: "M.Tech (AI)", title: "Master of Technology in Artificial Intelligence", duration: "2 Years", fees: "₹1,50,000", fee: "₹1,50,000", eligibility: "B.Tech in CSE/IT/ECE + GATE", type: "ENGINEERING", intake: 25 },
      { name: "Ph.D Engineering", title: "Doctor of Philosophy in Computer Science & Engineering", duration: "3-5 Years", fees: "₹1,20,000", fee: "₹1,20,000", eligibility: "M.Tech / ME with GATE or UGC-NET", type: "ENGINEERING", intake: 30 }
    ]
  },
  36: {
    name: "National Institute of Technology Andhra Pradesh (NIT Andhra Pradesh)",
    address: "Old Aerodrome, Near Kondruprolu, Tadepalligudem - 534101, Andhra Pradesh",
    city: "Tadepalligudem",
    state: "Andhra Pradesh",
    type: "Institute of National Importance",
    ownership: "Ministry of Education, Government of India (NITSER Act)",
    phone: "08818-284710",
    email: "registrar@nitandhra.ac.in",
    website: "https://www.nitandhra.ac.in",
    image: "/images/campuses/campus_architecture_2.jpg",
    img: "/images/campuses/campus_architecture_2.jpg",
    verified: true,
    courses: [
      { name: "B.Tech (CSE)", title: "Bachelor of Technology in Computer Science & Engineering", duration: "4 Years", fees: "₹6,80,000", fee: "₹6,80,000", eligibility: "10+2 with PCM + JEE Main / CSAB", type: "ENGINEERING", intake: 120 },
      { name: "B.Tech (ECE)", title: "Bachelor of Technology in Electronics & Communication Engineering", duration: "4 Years", fees: "₹6,80,000", fee: "₹6,80,000", eligibility: "10+2 with PCM + JEE Main / CSAB", type: "ENGINEERING", intake: 120 },
      { name: "M.Tech (Advanced Comm)", title: "Master of Technology in Advanced Communication Systems", duration: "2 Years", fees: "₹1,80,000", fee: "₹1,80,000", eligibility: "B.Tech in ECE + GATE / CCMT", type: "ENGINEERING", intake: 25 }
    ]
  },
  37: {
    name: "Indian Institute of Technology Tirupati (IIT Tirupati)",
    address: "Venkatagiri Road, Yerpedu Post, Tirupati District - 517619, Andhra Pradesh",
    city: "Tirupati",
    state: "Andhra Pradesh",
    type: "Institute of National Importance",
    ownership: "Ministry of Education, Government of India (IIT Act)",
    phone: "0877-2503000",
    email: "registrar@iittp.ac.in",
    website: "https://www.iittp.ac.in",
    image: "/images/campuses/campus_architecture_3.jpg",
    img: "/images/campuses/campus_architecture_3.jpg",
    verified: true,
    courses: [
      { name: "B.Tech (CSE)", title: "Bachelor of Technology in Computer Science & Engineering", duration: "4 Years", fees: "₹10,00,000", fee: "₹10,00,000", eligibility: "10+2 with PCM + JEE Advanced", type: "ENGINEERING", intake: 53 },
      { name: "B.Tech (EE)", title: "Bachelor of Technology in Electrical Engineering", duration: "4 Years", fees: "₹10,00,000", fee: "₹10,00,000", eligibility: "10+2 with PCM + JEE Advanced", type: "ENGINEERING", intake: 53 },
      { name: "M.Tech (Data Science)", title: "Master of Technology in Data Science", duration: "2 Years", fees: "₹1,50,000", fee: "₹1,50,000", eligibility: "B.Tech + GATE", type: "ENGINEERING", intake: 25 }
    ]
  },
  38: {
    name: "Indian Institute of Technology Hyderabad (IIT Hyderabad)",
    address: "Near NH-65, Kandi, Sangareddy - 502284, Telangana",
    city: "Sangareddy",
    state: "Telangana",
    type: "Institute of National Importance",
    ownership: "Ministry of Education, Government of India (IIT Act)",
    phone: "040-23016000",
    email: "registrar@iith.ac.in",
    website: "https://www.iith.ac.in",
    image: "/images/campuses/campus_architecture_4.jpg",
    img: "/images/campuses/campus_architecture_4.jpg",
    verified: true,
    courses: [
      { name: "B.Tech (CSE)", title: "Bachelor of Technology in Computer Science & Engineering", duration: "4 Years", fees: "₹10,00,000", fee: "₹10,00,000", eligibility: "10+2 with PCM + JEE Advanced", type: "ENGINEERING", intake: 65 },
      { name: "B.Tech (AI)", title: "Bachelor of Technology in Artificial Intelligence", duration: "4 Years", fees: "₹10,00,000", fee: "₹10,00,000", eligibility: "10+2 with PCM + JEE Advanced", type: "ENGINEERING", intake: 35 },
      { name: "M.Tech", title: "Master of Technology in Artificial Intelligence & Machine Learning", duration: "2 Years", fees: "₹1,50,000", fee: "₹1,50,000", eligibility: "B.Tech + GATE", type: "ENGINEERING", intake: 40 }
    ]
  },
  39: {
    name: "Indian Institute of Technology Indore (IIT Indore)",
    address: "Khandwa Road, Simrol, Indore - 453552, Madhya Pradesh",
    city: "Indore",
    state: "Madhya Pradesh",
    type: "Institute of National Importance",
    ownership: "Ministry of Education, Government of India (IIT Act)",
    phone: "0731-6603000",
    email: "registrar@iiti.ac.in",
    website: "https://www.iiti.ac.in",
    image: "/images/campuses/campus_architecture_5.jpg",
    img: "/images/campuses/campus_architecture_5.jpg",
    verified: true,
    courses: [
      { name: "B.Tech (CSE)", title: "Bachelor of Technology in Computer Science & Engineering", duration: "4 Years", fees: "₹10,00,000", fee: "₹10,00,000", eligibility: "10+2 with PCM + JEE Advanced", type: "ENGINEERING", intake: 80 },
      { name: "B.Tech (Space Science)", title: "Bachelor of Technology in Space Sciences and Engineering", duration: "4 Years", fees: "₹10,00,000", fee: "₹10,00,000", eligibility: "10+2 with PCM + JEE Advanced", type: "ENGINEERING", intake: 30 },
      { name: "M.Tech", title: "Master of Technology in Computer Science & Engineering", duration: "2 Years", fees: "₹1,50,000", fee: "₹1,50,000", eligibility: "B.Tech + GATE", type: "ENGINEERING", intake: 30 }
    ]
  },
  40: {
    name: "Indian Institute of Technology Jodhpur (IIT Jodhpur)",
    address: "NH 62, Nagaur Road, Karwar, Jodhpur - 342037, Rajasthan",
    city: "Jodhpur",
    state: "Rajasthan",
    type: "Institute of National Importance",
    ownership: "Ministry of Education, Government of India (IIT Act)",
    phone: "0291-2801000",
    email: "registrar@iitj.ac.in",
    website: "https://www.iitj.ac.in",
    image: "/images/campuses/campus_architecture_6.jpg",
    img: "/images/campuses/campus_architecture_6.jpg",
    verified: true,
    courses: [
      { name: "B.Tech (CSE)", title: "Bachelor of Technology in Computer Science & Engineering", duration: "4 Years", fees: "₹10,00,000", fee: "₹10,00,000", eligibility: "10+2 with PCM + JEE Advanced", type: "ENGINEERING", intake: 90 },
      { name: "B.Tech (AI & DS)", title: "Bachelor of Technology in Artificial Intelligence & Data Science", duration: "4 Years", fees: "₹10,00,000", fee: "₹10,00,000", eligibility: "10+2 with PCM + JEE Advanced", type: "ENGINEERING", intake: 60 },
      { name: "M.Tech", title: "Master of Technology in Data and Computational Sciences", duration: "2 Years", fees: "₹1,50,000", fee: "₹1,50,000", eligibility: "B.Tech + GATE", type: "ENGINEERING", intake: 35 }
    ]
  },
  41: {
    name: "Birla Institute of Technology and Science (BITS Pilani)",
    address: "Vidya Vihar, Pilani - 333031, Rajasthan",
    city: "Pilani",
    state: "Rajasthan",
    type: "Deemed University / Institute of Eminence",
    ownership: "Private (Birla Education Trust / MoE IoE)",
    phone: "01596-242210",
    email: "admissions@pilani.bits-pilani.ac.in",
    website: "https://www.bits-pilani.ac.in",
    image: "/images/campuses/campus_bits_pilani.jpg",
    img: "/images/campuses/campus_bits_pilani.jpg",
    verified: true,
    courses: [
      { name: "B.E. (Hons) CSE", title: "Bachelor of Engineering (Honours) in Computer Science", duration: "4 Years", fees: "₹23,00,000", fee: "₹23,00,000", eligibility: "10+2 with PCM (75%) + BITSAT Exam", type: "ENGINEERING", intake: 150 },
      { name: "B.E. (Hons) ECE", title: "Bachelor of Engineering (Honours) in Electronics & Communication", duration: "4 Years", fees: "₹23,00,000", fee: "₹23,00,000", eligibility: "10+2 with PCM (75%) + BITSAT Exam", type: "ENGINEERING", intake: 120 },
      { name: "M.E. (Software)", title: "Master of Engineering in Software Systems", duration: "2 Years", fees: "₹10,50,000", fee: "₹10,50,000", eligibility: "B.E. / B.Tech / MCA + BITS HD or GATE", type: "ENGINEERING", intake: 40 }
    ]
  },
  42: {
    name: "Indian Institute of Technology (BHU) Varanasi (IIT BHU)",
    address: "Banaras Hindu University Campus, Varanasi - 221005, Uttar Pradesh",
    city: "Varanasi",
    state: "Uttar Pradesh",
    type: "Institute of National Importance",
    ownership: "Ministry of Education, Government of India (IIT Act)",
    phone: "0542-2368106",
    email: "registrar@iitbhu.ac.in",
    website: "https://www.iitbhu.ac.in",
    image: "/images/campuses/campus_architecture_7.jpg",
    img: "/images/campuses/campus_architecture_7.jpg",
    verified: true,
    courses: [
      { name: "B.Tech (CSE)", title: "Bachelor of Technology in Computer Science & Engineering", duration: "4 Years", fees: "₹10,00,000", fee: "₹10,00,000", eligibility: "10+2 with PCM + JEE Advanced", type: "ENGINEERING", intake: 99 },
      { name: "B.Tech (EE)", title: "Bachelor of Technology in Electrical Engineering", duration: "4 Years", fees: "₹10,00,000", fee: "₹10,00,000", eligibility: "10+2 with PCM + JEE Advanced", type: "ENGINEERING", intake: 120 },
      { name: "M.Tech", title: "Master of Technology in Computer Science & Engineering", duration: "2 Years", fees: "₹1,50,000", fee: "₹1,50,000", eligibility: "B.Tech + GATE", type: "ENGINEERING", intake: 45 }
    ]
  },
  43: {
    name: "Indian Institute of Technology Kanpur (IIT Kanpur)",
    address: "Kalyanpur, Kanpur - 208016, Uttar Pradesh",
    city: "Kanpur",
    state: "Uttar Pradesh",
    type: "Institute of National Importance",
    ownership: "Ministry of Education, Government of India (IIT Act)",
    phone: "0512-2590151",
    email: "registrar@iitk.ac.in",
    website: "https://www.iitk.ac.in",
    image: "/images/campuses/campus_architecture_8.jpg",
    img: "/images/campuses/campus_architecture_8.jpg",
    verified: true,
    courses: [
      { name: "B.Tech (CSE)", title: "Bachelor of Technology in Computer Science & Engineering", duration: "4 Years", fees: "₹10,00,000", fee: "₹10,00,000", eligibility: "10+2 with PCM + JEE Advanced", type: "ENGINEERING", intake: 129 },
      { name: "B.Tech (Aerospace)", title: "Bachelor of Technology in Aerospace Engineering", duration: "4 Years", fees: "₹10,00,000", fee: "₹10,00,000", eligibility: "10+2 with PCM + JEE Advanced", type: "ENGINEERING", intake: 64 },
      { name: "M.Tech (Data & AI)", title: "Master of Technology in Data Science & Artificial Intelligence", duration: "2 Years", fees: "₹1,50,000", fee: "₹1,50,000", eligibility: "B.Tech + GATE", type: "ENGINEERING", intake: 40 }
    ]
  },
  44: {
    name: "National Institute of Technology Tiruchirappalli (NIT Trichy - PG & Management)",
    address: "Tanjore Main Road, National Highway 67, Near BHEL, Thuvakudi, Tiruchirappalli - 620015, Tamil Nadu",
    city: "Tiruchirappalli",
    state: "Tamil Nadu",
    type: "Institute of National Importance",
    ownership: "Ministry of Education, Government of India (NITSER Act)",
    phone: "0431-2503000",
    email: "deanac@nitt.edu",
    website: "https://www.nitt.edu",
    image: "/images/campuses/campus_architecture_9.jpg",
    img: "/images/campuses/campus_architecture_9.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹2,50,000", fee: "₹2,50,000", eligibility: "Graduation (55%) + CAT Exam", type: "MANAGEMENT", intake: 90 },
      { name: "MCA", title: "Master of Computer Applications", duration: "3 Years", fees: "₹2,10,000", fee: "₹2,10,000", eligibility: "Graduation with Mathematics + NIMCET Exam", type: "COMPUTER APPLICATIONS", intake: 115 },
      { name: "M.Tech (Data Analytics)", title: "Master of Technology in Data Analytics", duration: "2 Years", fees: "₹1,80,000", fee: "₹1,80,000", eligibility: "B.Tech + GATE / CCMT", type: "ENGINEERING", intake: 30 }
    ]
  }
};

const rawData = fs.readFileSync(SITE_DATA_PATH, 'utf8');
const data = JSON.parse(rawData);
const colleges = Array.isArray(data.colleges) ? data.colleges : data;

let updatedCount = 0;
for (const col of colleges) {
  if (batch48Updates[col.id]) {
    const upd = batch48Updates[col.id];
    Object.assign(col, upd);
    updatedCount++;
    console.log(`Updated ID: ${col.id} - ${col.name}`);
  }
}

fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(data, null, 2), 'utf8');
console.log(`Successfully updated ${updatedCount} colleges in ${SITE_DATA_PATH}`);

