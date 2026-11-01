const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const SITE_DATA_PATH = path.join(BASE_DIR, 'public', 'siteData.json');

const batch59Updates = {
  149: {
    name: "R.V. College of Engineering (RVCE Bengaluru)",
    address: "R.V. Vidyanikethan Post, Mysuru Road, Bengaluru - 560059, Karnataka",
    city: "Bengaluru",
    state: "Karnataka",
    type: "Private / Grant-in-Aid (Autonomous Engineering College)",
    ownership: "Private / Rashtreeya Sikshana Samithi Trust",
    phone: "080-68188100",
    email: "principal@rvce.edu.in",
    website: "https://www.rvce.edu.in",
    image: "/images/campuses/campus_architecture_1.jpg",
    img: "/images/campuses/campus_architecture_1.jpg",
    verified: true,
    courses: [
      { name: "B.E. (CSE)", title: "Bachelor of Engineering in Computer Science & Engineering", duration: "4 Years", fees: "₹10,50,000", fee: "₹10,50,000", eligibility: "10+2 with PCM (45%) + KCET / COMEDK", type: "ENGINEERING", intake: 240 },
      { name: "B.E. (ISE)", title: "Bachelor of Engineering in Information Science & Engineering", duration: "4 Years", fees: "₹9,50,000", fee: "₹9,50,000", eligibility: "10+2 with PCM (45%) + KCET / COMEDK", type: "ENGINEERING", intake: 120 },
      { name: "B.E. (ECE)", title: "Bachelor of Engineering in Electronics & Communication Engineering", duration: "4 Years", fees: "₹9,00,000", fee: "₹9,00,000", eligibility: "10+2 with PCM (45%) + KCET / COMEDK", type: "ENGINEERING", intake: 180 }
    ]
  },
  150: {
    name: "IIIT Bangalore - Centre for Information Technology & Public Policy (CITAPP)",
    address: "26/C, Electronic City Phase 1, Hosur Road, Bengaluru - 560100, Karnataka",
    city: "Bengaluru",
    state: "Karnataka",
    type: "Deemed to be University (Specialized Research & Interdisciplinary Centre)",
    ownership: "Public-Private Partnership",
    phone: "080-41407777",
    email: "citapp@iiitb.ac.in",
    website: "https://www.iiitb.ac.in/citapp",
    image: "/images/campuses/campus_architecture_2.jpg",
    img: "/images/campuses/campus_architecture_2.jpg",
    verified: true,
    courses: [
      { name: "M.Sc (Digital Society)", title: "Master of Science in Digital Society", duration: "2 Years", fees: "₹8,00,000", fee: "₹8,00,000", eligibility: "Undergraduate Degree + Written Test & Interview", type: "INTERDISCIPLINARY", intake: 40 },
      { name: "Ph.D (IT & Public Policy)", title: "Doctor of Philosophy in IT and Public Policy", duration: "4 Years", fees: "₹1,20,000", fee: "₹1,20,000", eligibility: "Master's Degree + Research Proposal", type: "RESEARCH", intake: 15 },
      { name: "PGC (Public Policy)", title: "Post Graduate Certificate in Public Policy & Governance", duration: "1 Year", fees: "₹2,50,000", fee: "₹2,50,000", eligibility: "Graduation in any discipline", type: "CERTIFICATE", intake: 30 }
    ]
  },
  151: {
    name: "Ramaiah Institute of Technology (MSRIT Bengaluru)",
    address: "MSR Nagar, MSRIT Post, Mathikere, Bengaluru - 560054, Karnataka",
    city: "Bengaluru",
    state: "Karnataka",
    type: "Private Autonomous (Gokula Education Foundation, NIRF Top 70)",
    ownership: "Private / Gokula Education Foundation",
    phone: "080-23600822",
    email: "principal@msrit.edu",
    website: "https://www.msrit.edu",
    image: "/images/campuses/campus_architecture_3.jpg",
    img: "/images/campuses/campus_architecture_3.jpg",
    verified: true,
    courses: [
      { name: "B.E. (CSE)", title: "Bachelor of Engineering in Computer Science & Engineering", duration: "4 Years", fees: "₹10,50,000", fee: "₹10,50,000", eligibility: "10+2 with PCM (45%) + KCET / COMEDK", type: "ENGINEERING", intake: 240 },
      { name: "B.E. (AIML)", title: "Bachelor of Engineering in AI & Machine Learning", duration: "4 Years", fees: "₹10,00,000", fee: "₹10,00,000", eligibility: "10+2 with PCM (45%) + KCET / COMEDK", type: "ENGINEERING", intake: 120 },
      { name: "B.E. (Mechanical)", title: "Bachelor of Engineering in Mechanical Engineering", duration: "4 Years", fees: "₹6,80,000", fee: "₹6,80,000", eligibility: "10+2 with PCM (45%) + KCET / COMEDK", type: "ENGINEERING", intake: 120 }
    ]
  },
  152: {
    name: "IIIT Bangalore - Innovation & Incubation Centre (IIIT-B Innovation Centre)",
    address: "26/C, 3rd Floor, Innovation Wing, Hosur Road, Electronic City, Bengaluru - 560100, Karnataka",
    city: "Bengaluru",
    state: "Karnataka",
    type: "Deemed to be University (Innovation & Deep Tech Incubator)",
    ownership: "Public-Private Partnership",
    phone: "080-41407777",
    email: "incubation@iiitb.ac.in",
    website: "https://www.iiitb.ac.in",
    image: "/images/campuses/campus_architecture_4.jpg",
    img: "/images/campuses/campus_architecture_4.jpg",
    verified: true,
    courses: [
      { name: "M.Tech (Data Science)", title: "Master of Technology in Data Science & Artificial Intelligence", duration: "2 Years", fees: "₹10,50,000", fee: "₹10,50,000", eligibility: "B.E. / B.Tech + GATE Score", type: "ENGINEERING", intake: 60 },
      { name: "PGD (Data Science)", title: "Post Graduate Diploma in Data Science", duration: "1 Year", fees: "₹3,50,000", fee: "₹3,50,000", eligibility: "Graduation with Mathematics / Statistics background", type: "DIPLOMA", intake: 100 },
      { name: "Ph.D (CS)", title: "Doctor of Philosophy in Computer Science", duration: "4 Years", fees: "₹1,20,000", fee: "₹1,20,000", eligibility: "Master's Degree in Engineering / Technology", type: "RESEARCH", intake: 20 }
    ]
  },
  153: {
    name: "Manipal Institute of Technology (MIT Manipal - MAHE)",
    address: "Udupi - Karkala Highway, Madhav Nagar, Manipal, Udupi District - 576104, Karnataka",
    city: "Manipal",
    state: "Karnataka",
    type: "Deemed to be University (Faculty of Technology, MAHE - IoE)",
    ownership: "Private / Manipal Academy of Higher Education",
    phone: "0820-2924011",
    email: "office.mit@manipal.edu",
    website: "https://manipal.edu/mit.html",
    image: "/images/campuses/campus_architecture_5.jpg",
    img: "/images/campuses/campus_architecture_5.jpg",
    verified: true,
    courses: [
      { name: "B.Tech (CSE)", title: "Bachelor of Technology in Computer Science & Engineering", duration: "4 Years", fees: "₹19,50,000", fee: "₹19,50,000", eligibility: "10+2 with PCM (50%) + MET Exam", type: "ENGINEERING", intake: 300 },
      { name: "B.Tech (Aeronautical)", title: "Bachelor of Technology in Aeronautical Engineering", duration: "4 Years", fees: "₹16,50,000", fee: "₹16,50,000", eligibility: "10+2 with PCM (50%) + MET Exam", type: "ENGINEERING", intake: 60 },
      { name: "B.Tech (ECE)", title: "Bachelor of Technology in Electronics & Communication", duration: "4 Years", fees: "₹17,50,000", fee: "₹17,50,000", eligibility: "10+2 with PCM (50%) + MET Exam", type: "ENGINEERING", intake: 180 }
    ]
  },
  154: {
    name: "University of Agricultural Sciences, Bangalore (UAS GKVK)",
    address: "Gandhi Krishi Vigyana Kendra Campus, Bellary Road, Bengaluru - 560065, Karnataka",
    city: "Bengaluru",
    state: "Karnataka",
    type: "Public/Government (State Agricultural University - 1964)",
    ownership: "Government of Karnataka / Indian Council of Agricultural Research",
    phone: "080-23330153",
    email: "registrar@uasbangalore.edu.in",
    website: "https://www.uasbangalore.edu.in",
    image: "/images/campuses/campus_architecture_6.jpg",
    img: "/images/campuses/campus_architecture_6.jpg",
    verified: true,
    courses: [
      { name: "B.Sc (Hons) Agri", title: "Bachelor of Science (Honours) in Agriculture", duration: "4 Years", fees: "₹1,20,000", fee: "₹1,20,000", eligibility: "10+2 with PCMB (50%) + KCET (Agri Practical / Rank)", type: "AGRICULTURE", intake: 240 },
      { name: "B.Tech (Agri Engg)", title: "Bachelor of Technology in Agricultural Engineering", duration: "4 Years", fees: "₹1,40,000", fee: "₹1,40,000", eligibility: "10+2 with PCM (50%) + KCET", type: "AGRICULTURE", intake: 60 },
      { name: "M.Sc (Agri)", title: "Master of Science in Agricultural Economics", duration: "2 Years", fees: "₹65,00,000", fee: "₹65,000", eligibility: "B.Sc Agriculture Degree + ICAR AIEEA", type: "AGRICULTURE", intake: 30 }
    ]
  },
  156: {
    name: "Institute of Information Technology & Management (IITM Janakpuri)",
    address: "D-29, Institutional Area, Janakpuri, New Delhi - 110058, Delhi NCR",
    city: "New Delhi",
    state: "Delhi NCR",
    type: "Private (Management & IT Institute / GGSIPU Affiliated)",
    ownership: "Private / Mata Leelawanti Educational Society",
    phone: "011-28525051",
    email: "director@iitmjanakpuri.com",
    website: "https://www.iitmjanakpuri.com",
    image: "/images/campuses/campus_architecture_7.jpg",
    img: "/images/campuses/campus_architecture_7.jpg",
    verified: true,
    courses: [
      { name: "BCA", title: "Bachelor of Computer Applications", duration: "3 Years", fees: "₹2,70,000", fee: "₹2,70,000", eligibility: "10+2 with Mathematics / CS (50%) + IPU CET", type: "COMPUTER APPLICATIONS", intake: 180 },
      { name: "BBA", title: "Bachelor of Business Administration", duration: "3 Years", fees: "₹2,65,000", fee: "₹2,65,000", eligibility: "10+2 in any stream (50%) + IPU CET", type: "MANAGEMENT", intake: 180 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹3,40,000", fee: "₹3,40,000", eligibility: "Graduation (50%) + CAT / CMAT / IPU CET", type: "MANAGEMENT", intake: 120 }
    ]
  },
  157: {
    name: "Universal AI University (UAIU Karjat)",
    address: "Kushivili, PO Gaurkamath, Vadap, Karjat, Raigad District - 410201, Maharashtra",
    city: "Karjat",
    state: "Maharashtra",
    type: "Private University (India's First Artificial Intelligence University)",
    ownership: "Private / Universal Business School Trust",
    phone: "022-48834883",
    email: "admissions@universalai.in",
    website: "https://universalai.in",
    image: "/images/campuses/campus_architecture_8.jpg",
    img: "/images/campuses/campus_architecture_8.jpg",
    verified: true,
    courses: [
      { name: "B.Tech (AI & ML)", title: "Bachelor of Technology in Artificial Intelligence & Machine Learning", duration: "4 Years", fees: "₹14,00,000", fee: "₹14,00,000", eligibility: "10+2 with PCM (50%) + JEE Main / MHT CET / UAIU Test", type: "ENGINEERING", intake: 120 },
      { name: "B.Tech (Data Science)", title: "Bachelor of Technology in Data Science", duration: "4 Years", fees: "₹14,00,000", fee: "₹14,00,000", eligibility: "10+2 with PCM (50%)", type: "ENGINEERING", intake: 60 },
      { name: "MBA (AI & Tech)", title: "Master of Business Administration in AI and Future Technologies", duration: "2 Years", fees: "₹12,50,000", fee: "₹12,50,000", eligibility: "Graduation (50%) + CAT / XAT / CMAT / GMAT", type: "MANAGEMENT", intake: 60 }
    ]
  },
  158: {
    name: "Symbiosis International (Deemed University) - SIU Pune",
    address: "Gram: Lavale, Taluka: Mulshi, Pune - 412115, Maharashtra",
    city: "Pune",
    state: "Maharashtra",
    type: "Deemed to be University (Section 3 UGC Act / NAAC A++, NIRF Top 35)",
    ownership: "Private / Symbiosis Society",
    phone: "020-28116200",
    email: "info@siu.edu.in",
    website: "https://siu.edu.in",
    image: "/images/campuses/campus_architecture_9.jpg",
    img: "/images/campuses/campus_architecture_9.jpg",
    verified: true,
    courses: [
      { name: "MBA (SIBM)", title: "Master of Business Administration (SIBM Pune)", duration: "2 Years", fees: "₹24,50,000", fee: "₹24,50,000", eligibility: "Graduation (50%) + SNAP Exam", type: "MANAGEMENT", intake: 180 },
      { name: "BBA", title: "Bachelor of Business Administration (SCMS)", duration: "3 Years", fees: "₹11,50,000", fee: "₹11,50,000", eligibility: "10+2 in any stream (50%) + SET Exam", type: "MANAGEMENT", intake: 300 },
      { name: "B.Tech (CSE)", title: "Bachelor of Technology in Computer Science & Engineering (SIT)", duration: "4 Years", fees: "₹13,20,000", fee: "₹13,20,000", eligibility: "10+2 with PCM (50%) + SITEEE / JEE Main", type: "ENGINEERING", intake: 180 }
    ]
  },
  159: {
    name: "Bhagwant Institute of Technology (BIT Muzaffarnagar)",
    address: "Bhagwantpuram, 17th Mile Stone, Bijnore-Delhi Highway, Dist. Muzaffarnagar - 251315, Uttar Pradesh",
    city: "Muzaffarnagar",
    state: "Uttar Pradesh",
    type: "Private (Engineering Institute / AKTU Affiliated)",
    ownership: "Private / Bhagwant Group of Institutions",
    phone: "0131-2661800",
    email: "info@bitmuzaffarnagar.org",
    website: "https://bit.bhagwantgroup.com",
    image: "/images/campuses/campus_architecture_10.jpg",
    img: "/images/campuses/campus_architecture_10.jpg",
    verified: true,
    courses: [
      { name: "B.Tech (CSE)", title: "Bachelor of Technology in Computer Science & Engineering", duration: "4 Years", fees: "₹3,40,000", fee: "₹3,40,000", eligibility: "10+2 with PCM (45%) + JEE Main / UPCET", type: "ENGINEERING", intake: 120 },
      { name: "B.Tech (Mechanical)", title: "Bachelor of Technology in Mechanical Engineering", duration: "4 Years", fees: "₹3,00,000", fee: "₹3,00,000", eligibility: "10+2 with PCM (45%)", type: "ENGINEERING", intake: 60 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹1,80,000", fee: "₹1,80,000", eligibility: "Graduation (50%) + CUET PG", type: "MANAGEMENT", intake: 60 }
    ]
  }
};

const siteData = JSON.parse(fs.readFileSync(SITE_DATA_PATH, 'utf8'));
let updatedCount = 0;

for (let i = 0; i < siteData.colleges.length; i++) {
  const col = siteData.colleges[i];
  if (batch59Updates[col.id]) {
    const upd = batch59Updates[col.id];
    Object.assign(col, upd);
    updatedCount++;
    console.log(`Updated ID: ${col.id} - ${col.name}`);
  }
}

fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(siteData, null, 2), 'utf8');
console.log(`Successfully updated ${updatedCount} colleges in ${SITE_DATA_PATH}`);

