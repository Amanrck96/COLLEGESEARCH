const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const SITE_DATA_PATH = path.join(BASE_DIR, 'public', 'siteData.json');

const batch53Updates = {
  89: {
    name: "Arihant Institute of Commerce and Management (AICM Bengaluru)",
    address: "No. 148, R.V. Road, V.V. Puram, Bengaluru - 560004, Karnataka",
    city: "Bengaluru",
    state: "Karnataka",
    type: "Private (Commerce & Management Institute)",
    ownership: "Private / Arihant Group of Institutions",
    phone: "080-26615566",
    email: "info@agiedu.in",
    website: "https://www.agiedu.in",
    image: "/images/campuses/campus_architecture_1.jpg",
    img: "/images/campuses/campus_architecture_1.jpg",
    verified: true,
    courses: [
      { name: "BBA", title: "Bachelor of Business Administration", duration: "3 Years", fees: "₹1,80,000", fee: "₹1,80,000", eligibility: "10+2 in any stream (45%)", type: "MANAGEMENT", intake: 120 },
      { name: "B.Com", title: "Bachelor of Commerce", duration: "3 Years", fees: "₹1,50,000", fee: "₹1,50,000", eligibility: "10+2 with Commerce / Arts / Science", type: "COMMERCE", intake: 180 },
      { name: "BCA", title: "Bachelor of Computer Applications", duration: "3 Years", fees: "₹2,10,000", fee: "₹2,10,000", eligibility: "10+2 with Mathematics / CS (45%)", type: "COMPUTER APPLICATIONS", intake: 60 }
    ]
  },
  90: {
    name: "University of Mysore (UOM Mysuru)",
    address: "Crawford Hall, Vishwavidyanilaya Karya Soudha, Mysuru - 570005, Karnataka",
    city: "Mysuru",
    state: "Karnataka",
    type: "Public/Government (State University)",
    ownership: "Government of Karnataka / UGC Recognized",
    phone: "0821-2419361",
    email: "registrar@uni-mysore.ac.in",
    website: "https://uni-mysore.ac.in",
    image: "/images/campuses/campus_architecture_2.jpg",
    img: "/images/campuses/campus_architecture_2.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹1,20,000", fee: "₹1,20,000", eligibility: "Graduation (50%) + PGCET / KMAT", type: "MANAGEMENT", intake: 120 },
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹1,00,000", fee: "₹1,00,000", eligibility: "BCA / B.Sc with Mathematics + PGCET", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "M.Sc (CS)", title: "Master of Science in Computer Science", duration: "2 Years", fees: "₹80,000", fee: "₹80,000", eligibility: "B.Sc with CS / BCA (50%)", type: "SCIENCE", intake: 45 }
    ]
  },
  91: {
    name: "Kodachadri Government First Grade College Hosanagara (KGFGC Hosanagara)",
    address: "Mavinakoppa, Shivamogga Road, Hosanagara, Shivamogga District - 577418, Karnataka",
    city: "Hosanagara",
    state: "Karnataka",
    type: "Public/Government (Degree College)",
    ownership: "Department of Collegiate Education, Government of Karnataka",
    phone: "08185-221235",
    email: "gfgchosanagar@gmail.com",
    website: "https://dce.karnataka.gov.in",
    image: "/images/campuses/campus_architecture_3.jpg",
    img: "/images/campuses/campus_architecture_3.jpg",
    verified: true,
    courses: [
      { name: "B.A.", title: "Bachelor of Arts", duration: "3 Years", fees: "₹9,000", fee: "₹9,000", eligibility: "10+2 in any stream", type: "ARTS", intake: 180 },
      { name: "B.Com", title: "Bachelor of Commerce", duration: "3 Years", fees: "₹10,500", fee: "₹10,500", eligibility: "10+2 with Commerce / Arts / Science", type: "COMMERCE", intake: 120 },
      { name: "B.Sc", title: "Bachelor of Science", duration: "3 Years", fees: "₹12,000", fee: "₹12,000", eligibility: "10+2 with Science (PCB/PCM)", type: "SCIENCE", intake: 60 }
    ]
  },
  92: {
    name: "Government First Grade College Kunigal (GFGC Kunigal)",
    address: "B.M. Road, Near Bus Stand, Kunigal, Tumakuru District - 572130, Karnataka",
    city: "Kunigal",
    state: "Karnataka",
    type: "Public/Government (Degree College)",
    ownership: "Department of Collegiate Education, Government of Karnataka",
    phone: "08132-220140",
    email: "gfgckunigal@gmail.com",
    website: "https://dce.karnataka.gov.in",
    image: "/images/campuses/campus_architecture_4.jpg",
    img: "/images/campuses/campus_architecture_4.jpg",
    verified: true,
    courses: [
      { name: "B.Com", title: "Bachelor of Commerce", duration: "3 Years", fees: "₹10,500", fee: "₹10,500", eligibility: "10+2 with Commerce / Arts / Science", type: "COMMERCE", intake: 240 },
      { name: "B.A.", title: "Bachelor of Arts", duration: "3 Years", fees: "₹9,000", fee: "₹9,000", eligibility: "10+2 in any stream", type: "ARTS", intake: 240 },
      { name: "B.Sc", title: "Bachelor of Science", duration: "3 Years", fees: "₹12,000", fee: "₹12,000", eligibility: "10+2 with Science (PCB/PCM)", type: "SCIENCE", intake: 120 }
    ]
  },
  93: {
    name: "Vijaya First Grade College Vijayapura (VFGC Devanahalli)",
    address: "Vijaya Nagar, Vijayapura Town, Devanahalli Taluk, Bengaluru Rural - 562135, Karnataka",
    city: "Devanahalli",
    state: "Karnataka",
    type: "Private (Degree College)",
    ownership: "Private / Vijaya Rural Education Trust",
    phone: "080-27663244",
    email: "vfgcvijayapura@gmail.com",
    website: "https://vfgc.in",
    image: "/images/campuses/campus_architecture_5.jpg",
    img: "/images/campuses/campus_architecture_5.jpg",
    verified: true,
    courses: [
      { name: "B.Com", title: "Bachelor of Commerce", duration: "3 Years", fees: "₹60,000", fee: "₹60,000", eligibility: "10+2 with Commerce / Arts / Science", type: "COMMERCE", intake: 120 },
      { name: "BBA", title: "Bachelor of Business Administration", duration: "3 Years", fees: "₹75,000", fee: "₹75,000", eligibility: "10+2 in any stream (45%)", type: "MANAGEMENT", intake: 60 },
      { name: "BCA", title: "Bachelor of Computer Applications", duration: "3 Years", fees: "₹90,000", fee: "₹90,000", eligibility: "10+2 with Mathematics / CS (45%)", type: "COMPUTER APPLICATIONS", intake: 60 }
    ]
  },
  94: {
    name: "National Law School of India University (NLSIU Bangalore - Flagship)",
    address: "Gnana Bharathi Main Road, Opp. NAAC, Nagarbhavi, Bengaluru - 560072, Karnataka",
    city: "Bengaluru",
    state: "Karnataka",
    type: "Public/Government (Statutory National Law University)",
    ownership: "Government of Karnataka / Bar Council of India",
    phone: "080-23213160",
    email: "registrar@nls.ac.in",
    website: "https://www.nls.ac.in",
    image: "/images/campuses/campus_architecture_6.jpg",
    img: "/images/campuses/campus_architecture_6.jpg",
    verified: true,
    courses: [
      { name: "BA LLB (Hons)", title: "Integrated Bachelor of Arts & Bachelor of Laws (Honours)", duration: "5 Years", fees: "₹20,75,000", fee: "₹20,75,000", eligibility: "10+2 (45%) + CLAT Exam", type: "LAW", intake: 240 },
      { name: "LLM", title: "Master of Laws", duration: "1 Year", fees: "₹3,20,000", fee: "₹3,20,000", eligibility: "LLB Degree (50%) + CLAT PG Exam", type: "LAW", intake: 100 },
      { name: "MPP", title: "Master of Public Policy", duration: "2 Years", fees: "₹5,80,000", fee: "₹5,80,000", eligibility: "Graduation (50%) + NLSAT Exam", type: "PUBLIC POLICY", intake: 75 }
    ]
  },
  95: {
    name: "Government Polytechnic for Women Holenarasipura (GPW Holenarasipura)",
    address: "Near Hemavathi River Bridge, Holenarasipura, Hassan District - 573211, Karnataka",
    city: "Holenarasipura",
    state: "Karnataka",
    type: "Public/Government (Women's Polytechnic)",
    ownership: "Department of Technical Education, Government of Karnataka",
    phone: "08175-273211",
    email: "gpwhnp@gmail.com",
    website: "https://dte.karnataka.gov.in",
    image: "/images/campuses/campus_architecture_7.jpg",
    img: "/images/campuses/campus_architecture_7.jpg",
    verified: true,
    courses: [
      { name: "Diploma (Civil)", title: "Diploma in Civil Engineering", duration: "3 Years", fees: "₹12,000", fee: "₹12,000", eligibility: "10th SSLC (35%)", type: "ENGINEERING", intake: 60 },
      { name: "Diploma (CSE)", title: "Diploma in Computer Science & Engineering", duration: "3 Years", fees: "₹12,000", fee: "₹12,000", eligibility: "10th SSLC (35%)", type: "ENGINEERING", intake: 60 },
      { name: "Diploma (ECE)", title: "Diploma in Electronics & Communication", duration: "3 Years", fees: "₹12,000", fee: "₹12,000", eligibility: "10th SSLC (35%)", type: "ENGINEERING", intake: 60 }
    ]
  },
  96: {
    name: "Government Engineering College Ramanagara (GEC Ramanagara)",
    address: "Doddamannugudde, Ramanagara, Ramanagara District - 562159, Karnataka",
    city: "Ramanagara",
    state: "Karnataka",
    type: "Public/Government (Engineering College)",
    ownership: "Department of Technical Education, Government of Karnataka",
    phone: "080-27271511",
    email: "gecramanagara@gmail.com",
    website: "https://gecramanagara.ac.in",
    image: "/images/campuses/campus_architecture_8.jpg",
    img: "/images/campuses/campus_architecture_8.jpg",
    verified: true,
    courses: [
      { name: "B.Tech (CSE)", title: "Bachelor of Technology in Computer Science & Engineering", duration: "4 Years", fees: "₹1,50,000", fee: "₹1,50,000", eligibility: "10+2 with PCM + KCET Exam", type: "ENGINEERING", intake: 60 },
      { name: "B.Tech (ECE)", title: "Bachelor of Technology in Electronics & Communication Engineering", duration: "4 Years", fees: "₹1,50,000", fee: "₹1,50,000", eligibility: "10+2 with PCM + KCET Exam", type: "ENGINEERING", intake: 60 },
      { name: "B.Tech (Mechanical)", title: "Bachelor of Technology in Mechanical & Smart Manufacturing", duration: "4 Years", fees: "₹1,50,000", fee: "₹1,50,000", eligibility: "10+2 with PCM + KCET Exam", type: "ENGINEERING", intake: 60 }
    ]
  },
  97: {
    name: "New Horizon College (Marathahalli & Kasturinagar Campus)",
    address: "Bellandur Main Road, Near Marathahalli, Kadubisanahalli, Bengaluru - 560103, Karnataka",
    city: "Bengaluru",
    state: "Karnataka",
    type: "Private (Degree College)",
    ownership: "Private / New Horizon Educational Institution (NHEI)",
    phone: "080-66297777",
    email: "principalnhc@newhorizonindia.edu",
    website: "https://newhorizonindia.edu",
    image: "/images/campuses/campus_architecture_9.jpg",
    img: "/images/campuses/campus_architecture_9.jpg",
    verified: true,
    courses: [
      { name: "BBA", title: "Bachelor of Business Administration (Global / Executive)", duration: "3 Years", fees: "₹3,00,000", fee: "₹3,00,000", eligibility: "10+2 in any stream (50%)", type: "MANAGEMENT", intake: 180 },
      { name: "BCA", title: "Bachelor of Computer Applications (Executive / Dual)", duration: "3 Years", fees: "₹3,00,000", fee: "₹3,00,000", eligibility: "10+2 with Mathematics / CS (50%)", type: "COMPUTER APPLICATIONS", intake: 180 },
      { name: "B.Com", title: "Bachelor of Commerce (Executive / Global)", duration: "3 Years", fees: "₹2,50,000", fee: "₹2,50,000", eligibility: "10+2 with Commerce (50%)", type: "COMMERCE", intake: 240 }
    ]
  },
  98: {
    name: "Government First Grade Evening College Shivamogga (GFGEC Shivamogga)",
    address: "Bapujinagara, Behind BEO Office, Shivamogga - 577201, Karnataka",
    city: "Shivamogga",
    state: "Karnataka",
    type: "Public/Government (Evening Degree College)",
    ownership: "Department of Collegiate Education, Government of Karnataka",
    phone: "08182-222380",
    email: "gfgecshivamogga@gmail.com",
    website: "https://dce.karnataka.gov.in",
    image: "/images/campuses/campus_architecture_10.jpg",
    img: "/images/campuses/campus_architecture_10.jpg",
    verified: true,
    courses: [
      { name: "B.Com (Evening)", title: "Bachelor of Commerce (Evening Shift)", duration: "3 Years", fees: "₹10,500", fee: "₹10,500", eligibility: "10+2 with Commerce / Arts / Science", type: "COMMERCE", intake: 120 },
      { name: "B.A. (Evening)", title: "Bachelor of Arts (Evening Shift)", duration: "3 Years", fees: "₹9,000", fee: "₹9,000", eligibility: "10+2 in any stream", type: "ARTS", intake: 120 }
    ]
  }
};

const rawData = fs.readFileSync(SITE_DATA_PATH, 'utf8');
const data = JSON.parse(rawData);
const colleges = Array.isArray(data.colleges) ? data.colleges : data;

let updatedCount = 0;
for (const col of colleges) {
  if (batch53Updates[col.id]) {
    const upd = batch53Updates[col.id];
    Object.assign(col, upd);
    updatedCount++;
    console.log(`Updated ID: ${col.id} - ${col.name}`);
  }
}

fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(data, null, 2), 'utf8');
console.log(`Successfully updated ${updatedCount} colleges in ${SITE_DATA_PATH}`);
