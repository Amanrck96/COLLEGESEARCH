const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const SITE_DATA_PATH = path.join(BASE_DIR, 'public', 'siteData.json');

const batch47Updates = {
  21: {
    name: "Indian Institute of Technology Patna (IIT Patna)",
    address: "Amhara Road, Bihta, Patna - 801106, Bihar",
    city: "Patna",
    state: "Bihar",
    type: "Institute of National Importance",
    ownership: "Ministry of Education, Government of India (IIT Act)",
    phone: "06115-233000",
    email: "registrar@iitp.ac.in",
    website: "https://www.iitp.ac.in",
    image: "/images/campuses/campus_iit_patna.png",
    img: "/images/campuses/campus_iit_patna.png",
    verified: true,
    courses: [
      { name: "B.Tech (CSE)", title: "Bachelor of Technology in Computer Science & Engineering", duration: "4 Years", fees: "₹10,00,000", fee: "₹10,00,000", eligibility: "10+2 with PCM + JEE Advanced", type: "ENGINEERING", intake: 83 },
      { name: "B.Tech (AI & DS)", title: "Bachelor of Technology in Artificial Intelligence & Data Science", duration: "4 Years", fees: "₹10,00,000", fee: "₹10,00,000", eligibility: "10+2 with PCM + JEE Advanced", type: "ENGINEERING", intake: 50 },
      { name: "M.Tech", title: "Master of Technology in Computer Science & Engineering", duration: "2 Years", fees: "₹1,50,000", fee: "₹1,50,000", eligibility: "B.Tech + GATE", type: "ENGINEERING", intake: 35 }
    ]
  },
  22: {
    name: "National Institute of Technology Patna (NIT Patna)",
    address: "Ashok Rajpath, Patna University Campus, Mahendru, Patna - 800005, Bihar",
    city: "Patna",
    state: "Bihar",
    type: "Institute of National Importance",
    ownership: "Ministry of Education, Government of India (NITSER Act)",
    phone: "0612-2371715",
    email: "registrar@nitp.ac.in",
    website: "https://www.nitp.ac.in",
    image: "/images/campuses/campus_architecture_1.jpg",
    img: "/images/campuses/campus_architecture_1.jpg",
    verified: true,
    courses: [
      { name: "B.Tech (CSE)", title: "Bachelor of Technology in Computer Science & Engineering", duration: "4 Years", fees: "₹6,80,000", fee: "₹6,80,000", eligibility: "10+2 with PCM + JEE Main / CSAB", type: "ENGINEERING", intake: 180 },
      { name: "B.Tech (ECE)", title: "Bachelor of Technology in Electronics & Communication Engineering", duration: "4 Years", fees: "₹6,80,000", fee: "₹6,80,000", eligibility: "10+2 with PCM + JEE Main / CSAB", type: "ENGINEERING", intake: 150 },
      { name: "M.Tech", title: "Master of Technology in Computer Science", duration: "2 Years", fees: "₹1,80,000", fee: "₹1,80,000", eligibility: "B.Tech + GATE / CCMT", type: "ENGINEERING", intake: 40 }
    ]
  },
  23: {
    name: "Indian Institute of Technology Patna (IIT Patna - Research Campus)",
    address: "Amhara Road, Bihta, Patna - 801106, Bihar",
    city: "Patna",
    state: "Bihar",
    type: "Institute of National Importance",
    ownership: "Ministry of Education, Government of India",
    phone: "06115-233000",
    email: "admissions@iitp.ac.in",
    website: "https://www.iitp.ac.in",
    image: "/images/campuses/campus_iit_patna.png",
    img: "/images/campuses/campus_iit_patna.png",
    verified: true,
    courses: [
      { name: "M.Tech (VLSI)", title: "Master of Technology in VLSI & Embedded Systems", duration: "2 Years", fees: "₹1,50,000", fee: "₹1,50,000", eligibility: "B.Tech in ECE/EE + GATE", type: "ENGINEERING", intake: 25 },
      { name: "Ph.D Engineering", title: "Doctor of Philosophy in Engineering", duration: "3-5 Years", fees: "₹1,20,000", fee: "₹1,20,000", eligibility: "Master's Degree in Engineering / GATE / UGC NET", type: "ENGINEERING", intake: 50 }
    ]
  },
  24: {
    name: "Indian Institute of Technology Palakkad (IIT Palakkad)",
    address: "Ahalia Integrated Campus, Kozhippara, Palakkad - 678557, Kerala",
    city: "Palakkad",
    state: "Kerala",
    type: "Institute of National Importance",
    ownership: "Ministry of Education, Government of India (IIT Act)",
    phone: "04923-226300",
    email: "registrar@iitpkd.ac.in",
    website: "https://www.iitpkd.ac.in",
    image: "/images/campuses/campus_architecture_2.jpg",
    img: "/images/campuses/campus_architecture_2.jpg",
    verified: true,
    courses: [
      { name: "B.Tech (CSE)", title: "Bachelor of Technology in Computer Science & Engineering", duration: "4 Years", fees: "₹10,00,000", fee: "₹10,00,000", eligibility: "10+2 with PCM + JEE Advanced", type: "ENGINEERING", intake: 45 },
      { name: "B.Tech (Data Science)", title: "Bachelor of Technology in Data Science & Engineering", duration: "4 Years", fees: "₹10,00,000", fee: "₹10,00,000", eligibility: "10+2 with PCM + JEE Advanced", type: "ENGINEERING", intake: 40 },
      { name: "M.Tech (Computing)", title: "Master of Technology in Computing and Mathematics", duration: "2 Years", fees: "₹1,50,000", fee: "₹1,50,000", eligibility: "B.Tech / MCA / M.Sc + GATE", type: "ENGINEERING", intake: 25 }
    ]
  },
  25: {
    name: "Indian Institute of Technology Palakkad (IIT Palakkad - Nila Campus)",
    address: "Nila Campus, Near Kanjikode Railway Station, Kanjikode, Palakkad - 678623, Kerala",
    city: "Palakkad",
    state: "Kerala",
    type: "Institute of National Importance",
    ownership: "Ministry of Education, Government of India (IIT Act)",
    phone: "0491-2092000",
    email: "director@iitpkd.ac.in",
    website: "https://www.iitpkd.ac.in",
    image: "/images/campuses/campus_architecture_3.jpg",
    img: "/images/campuses/campus_architecture_3.jpg",
    verified: true,
    courses: [
      { name: "B.Tech (Electrical)", title: "Bachelor of Technology in Electrical Engineering", duration: "4 Years", fees: "₹10,00,000", fee: "₹10,00,000", eligibility: "10+2 with PCM + JEE Advanced", type: "ENGINEERING", intake: 45 },
      { name: "B.Tech (Mechanical)", title: "Bachelor of Technology in Mechanical Engineering", duration: "4 Years", fees: "₹10,00,000", fee: "₹10,00,000", eligibility: "10+2 with PCM + JEE Advanced", type: "ENGINEERING", intake: 45 }
    ]
  },
  26: {
    name: "National Institute of Technology Durgapur (NIT Durgapur)",
    address: "Mahatma Gandhi Avenue, A-Zone, Durgapur - 713209, West Bengal",
    city: "Durgapur",
    state: "West Bengal",
    type: "Institute of National Importance",
    ownership: "Ministry of Education, Government of India (NITSER Act)",
    phone: "0343-2754121",
    email: "registrar@admin.nitdgp.ac.in",
    website: "https://nitdgp.ac.in",
    image: "/images/campuses/campus_architecture_4.jpg",
    img: "/images/campuses/campus_architecture_4.jpg",
    verified: true,
    courses: [
      { name: "B.Tech (CSE)", title: "Bachelor of Technology in Computer Science & Engineering", duration: "4 Years", fees: "₹6,80,000", fee: "₹6,80,000", eligibility: "10+2 with PCM + JEE Main / CSAB", type: "ENGINEERING", intake: 120 },
      { name: "B.Tech (ECE)", title: "Bachelor of Technology in Electronics & Communication Engineering", duration: "4 Years", fees: "₹6,80,000", fee: "₹6,80,000", eligibility: "10+2 with PCM + JEE Main / CSAB", type: "ENGINEERING", intake: 120 },
      { name: "M.Tech", title: "Master of Technology in Computer Science", duration: "2 Years", fees: "₹1,80,000", fee: "₹1,80,000", eligibility: "B.Tech + GATE / CCMT", type: "ENGINEERING", intake: 40 }
    ]
  },
  27: {
    name: "National Institute of Technology Durgapur (NIT Durgapur - PG Programs)",
    address: "Mahatma Gandhi Avenue, A-Zone, Durgapur - 713209, West Bengal",
    city: "Durgapur",
    state: "West Bengal",
    type: "Institute of National Importance",
    ownership: "Ministry of Education, Government of India",
    phone: "0343-2754121",
    email: "deanac@admin.nitdgp.ac.in",
    website: "https://nitdgp.ac.in",
    image: "/images/campuses/campus_architecture_5.jpg",
    img: "/images/campuses/campus_architecture_5.jpg",
    verified: true,
    courses: [
      { name: "M.Tech (Operations Research)", title: "Master of Technology in Operations Research", duration: "2 Years", fees: "₹1,80,000", fee: "₹1,80,000", eligibility: "B.Tech / M.Sc + GATE", type: "ENGINEERING", intake: 30 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹2,50,000", fee: "₹2,50,000", eligibility: "Graduation (55%) + CAT / CMAT", type: "MANAGEMENT", intake: 60 }
    ]
  },
  28: {
    name: "National Institute of Food Technology Entrepreneurship and Management (NIFTEM Kundli)",
    address: "Plot No. 97, Sector 56, HSIIDC Industrial Estate, Kundli, Sonipat - 131028, Haryana",
    city: "Sonipat",
    state: "Haryana",
    type: "Institute of National Importance",
    ownership: "Ministry of Food Processing Industries, Government of India (NIFTEM Act 2021)",
    phone: "0130-2281000",
    email: "info@niftem.ac.in",
    website: "https://niftem.ac.in",
    image: "/images/campuses/campus_architecture_6.jpg",
    img: "/images/campuses/campus_architecture_6.jpg",
    verified: true,
    courses: [
      { name: "B.Tech (FTM)", title: "Bachelor of Technology in Food Technology & Management", duration: "4 Years", fees: "₹6,80,000", fee: "₹6,80,000", eligibility: "10+2 with PCM + JEE Main / CSAB", type: "ENGINEERING", intake: 180 },
      { name: "M.Tech (FPE)", title: "Master of Technology in Food Process Engineering", duration: "2 Years", fees: "₹2,40,000", fee: "₹2,40,000", eligibility: "B.Tech in Food Tech / Allied + GATE", type: "ENGINEERING", intake: 30 },
      { name: "MBA (Agri-Food)", title: "MBA in Food & Agri-Business Management", duration: "2 Years", fees: "₹4,50,000", fee: "₹4,50,000", eligibility: "Graduation (50%) + CAT / MAT / CMAT", type: "MANAGEMENT", intake: 60 }
    ]
  },
  29: {
    name: "National Institute of Technology Kurukshetra (NIT Kurukshetra)",
    address: "Mirzapur Part, Kurukshetra - 136119, Haryana",
    city: "Kurukshetra",
    state: "Haryana",
    type: "Institute of National Importance",
    ownership: "Ministry of Education, Government of India (NITSER Act)",
    phone: "01744-233208",
    email: "registrar@nitkkr.ac.in",
    website: "https://www.nitkkr.ac.in",
    image: "/images/campuses/campus_architecture_7.jpg",
    img: "/images/campuses/campus_architecture_7.jpg",
    verified: true,
    courses: [
      { name: "B.Tech (CSE)", title: "Bachelor of Technology in Computer Engineering", duration: "4 Years", fees: "₹6,80,000", fee: "₹6,80,000", eligibility: "10+2 with PCM + JEE Main / CSAB", type: "ENGINEERING", intake: 140 },
      { name: "B.Tech (IT)", title: "Bachelor of Technology in Information Technology", duration: "4 Years", fees: "₹6,80,000", fee: "₹6,80,000", eligibility: "10+2 with PCM + JEE Main / CSAB", type: "ENGINEERING", intake: 120 },
      { name: "M.Tech", title: "Master of Technology in Computer Engineering", duration: "2 Years", fees: "₹1,80,000", fee: "₹1,80,000", eligibility: "B.Tech + GATE / CCMT", type: "ENGINEERING", intake: 40 }
    ]
  },
  30: {
    name: "Indian Institute of Technology Ropar (IIT Ropar)",
    address: "Birla Farm, Bara Phool, Rupnagar (Ropar) - 140001, Punjab",
    city: "Rupnagar",
    state: "Punjab",
    type: "Institute of National Importance",
    ownership: "Ministry of Education, Government of India (IIT Act)",
    phone: "01881-227078",
    email: "registrar@iitrpr.ac.in",
    website: "https://www.iitrpr.ac.in",
    image: "/images/campuses/campus_architecture_8.jpg",
    img: "/images/campuses/campus_architecture_8.jpg",
    verified: true,
    courses: [
      { name: "B.Tech (CSE)", title: "Bachelor of Technology in Computer Science & Engineering", duration: "4 Years", fees: "₹10,00,000", fee: "₹10,00,000", eligibility: "10+2 with PCM + JEE Advanced", type: "ENGINEERING", intake: 85 },
      { name: "B.Tech (Data & AI)", title: "Bachelor of Technology in Artificial Intelligence & Data Engineering", duration: "4 Years", fees: "₹10,00,000", fee: "₹10,00,000", eligibility: "10+2 with PCM + JEE Advanced", type: "ENGINEERING", intake: 40 },
      { name: "M.Tech", title: "Master of Technology in Computer Science", duration: "2 Years", fees: "₹1,50,000", fee: "₹1,50,000", eligibility: "B.Tech + GATE", type: "ENGINEERING", intake: 30 }
    ]
  }
};

const rawData = fs.readFileSync(SITE_DATA_PATH, 'utf8');
const data = JSON.parse(rawData);
const colleges = Array.isArray(data.colleges) ? data.colleges : data;

let updatedCount = 0;
for (const col of colleges) {
  if (batch47Updates[col.id]) {
    const upd = batch47Updates[col.id];
    Object.assign(col, upd);
    updatedCount++;
    console.log(`Updated ID: ${col.id} - ${col.name}`);
  }
}

fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(data, null, 2), 'utf8');
console.log(`Successfully updated ${updatedCount} colleges in ${SITE_DATA_PATH}`);

