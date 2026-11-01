const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const SITE_DATA_PATH = path.join(BASE_DIR, 'public', 'siteData.json');

const batch54Updates = {
  99: {
    name: "Sri Sathya Sai Institute of Higher Learning (SSSIHL Brindavan)",
    address: "Whitefield-Hoskote Road, Brindavan Campus, Kadugodi, Bengaluru - 560067, Karnataka",
    city: "Bengaluru",
    state: "Karnataka",
    type: "Deemed to be University",
    ownership: "Private / Sri Sathya Sai Central Trust",
    phone: "080-28452233",
    email: "admissions@sssihl.edu.in",
    website: "https://sssihl.edu.in",
    image: "/images/campuses/campus_architecture_1.jpg",
    img: "/images/campuses/campus_architecture_1.jpg",
    verified: true,
    courses: [
      { name: "B.Com (Hons)", title: "Bachelor of Commerce (Honours)", duration: "3 Years", fees: "₹0", fee: "₹0", eligibility: "10+2 with Commerce / Science (60%)", type: "COMMERCE", intake: 60 },
      { name: "B.Sc (Hons)", title: "Bachelor of Science (Honours) in Mathematics / Physics", duration: "3 Years", fees: "₹0", fee: "₹0", eligibility: "10+2 with PCM (60%)", type: "SCIENCE", intake: 60 },
      { name: "BBA", title: "Bachelor of Business Administration", duration: "3 Years", fees: "₹0", fee: "₹0", eligibility: "10+2 in any stream (60%)", type: "MANAGEMENT", intake: 60 }
    ]
  },
  100: {
    name: "SJES College of Management Studies (SJES CMS Bengaluru)",
    address: "Medahalli, Old Madras Road, Virgo Nagar Post, K.R. Puram, Bengaluru - 560049, Karnataka",
    city: "Bengaluru",
    state: "Karnataka",
    type: "Private (Management Studies College)",
    ownership: "Private / S.J.E.S. Education Society",
    phone: "080-25611111",
    email: "info@sjesinstitutions.ac.in",
    website: "https://sjesinstitutions.ac.in",
    image: "/images/campuses/campus_architecture_2.jpg",
    img: "/images/campuses/campus_architecture_2.jpg",
    verified: true,
    courses: [
      { name: "BBA (Aviation)", title: "Bachelor of Business Administration in Aviation Management", duration: "3 Years", fees: "₹2,40,000", fee: "₹2,40,000", eligibility: "10+2 in any stream (45%)", type: "MANAGEMENT", intake: 60 },
      { name: "BCA", title: "Bachelor of Computer Applications", duration: "3 Years", fees: "₹2,20,000", fee: "₹2,20,000", eligibility: "10+2 with Mathematics / CS (45%)", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹3,50,000", fee: "₹3,50,000", eligibility: "Graduation (50%) + PGCET / KMAT", type: "MANAGEMENT", intake: 120 }
    ]
  },
  101: {
    name: "Vanguard Business School (VBS Bengaluru)",
    address: "128, 36th Cross, East End, Jayanagar 9th Block, Bengaluru - 560069, Karnataka",
    city: "Bengaluru",
    state: "Karnataka",
    type: "Private (Business School)",
    ownership: "Private / Vanguard Education Trust",
    phone: "080-41517777",
    email: "admissions@vanguardbschool.com",
    website: "https://vanguardbschool.com",
    image: "/images/campuses/campus_architecture_3.jpg",
    img: "/images/campuses/campus_architecture_3.jpg",
    verified: true,
    courses: [
      { name: "PGDM", title: "Post Graduate Diploma in Management", duration: "2 Years", fees: "₹6,50,000", fee: "₹6,50,000", eligibility: "Graduation (50%) + CAT / XAT / MAT / CMAT", type: "MANAGEMENT", intake: 120 },
      { name: "Executive PGDM", title: "Executive Post Graduate Diploma in Management", duration: "1 Year", fees: "₹3,50,000", fee: "₹3,50,000", eligibility: "Graduation + Minimum 2 Years Work Experience", type: "MANAGEMENT", intake: 60 }
    ]
  },
  102: {
    name: "Cambridge Institute of Technology (CITech Bengaluru)",
    address: "Jai Bhuvaneshwari Layout, Chikkabasavanapura, K.R. Puram, Bengaluru - 560036, Karnataka",
    city: "Bengaluru",
    state: "Karnataka",
    type: "Private (Autonomous Engineering College)",
    ownership: "Private / Umesh Education Trust",
    phone: "080-30535555",
    email: "principal@cambridge.edu.in",
    website: "https://engg.cambridge.edu.in",
    image: "/images/campuses/campus_architecture_4.jpg",
    img: "/images/campuses/campus_architecture_4.jpg",
    verified: true,
    courses: [
      { name: "B.E. (CSE)", title: "Bachelor of Engineering in Computer Science & Engineering", duration: "4 Years", fees: "₹9,50,000", fee: "₹9,50,000", eligibility: "10+2 with PCM + KCET / COMEDK", type: "ENGINEERING", intake: 180 },
      { name: "B.E. (AI & ML)", title: "Bachelor of Engineering in Artificial Intelligence & Machine Learning", duration: "4 Years", fees: "₹9,50,000", fee: "₹9,50,000", eligibility: "10+2 with PCM + KCET / COMEDK", type: "ENGINEERING", intake: 120 },
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹2,50,000", fee: "₹2,50,000", eligibility: "BCA / B.Sc with Math + PGCET / KMAT", type: "COMPUTER APPLICATIONS", intake: 60 }
    ]
  },
  103: {
    name: "TMAES Polytechnic Hosapete",
    address: "Bellary Road, Sankalapura, Hosapete, Vijayanagara District - 583201, Karnataka",
    city: "Hosapete",
    state: "Karnataka",
    type: "Private (Polytechnic College)",
    ownership: "Private / T.M.A.E. Society, Harapanahalli",
    phone: "08394-228456",
    email: "tmaepoly@gmail.com",
    website: "https://tmaepolytechnic.org",
    image: "/images/campuses/campus_architecture_5.jpg",
    img: "/images/campuses/campus_architecture_5.jpg",
    verified: true,
    courses: [
      { name: "Diploma (Automobile)", title: "Diploma in Automobile Engineering", duration: "3 Years", fees: "₹65,000", fee: "₹65,000", eligibility: "10th SSLC (35%)", type: "ENGINEERING", intake: 60 },
      { name: "Diploma (Mechanical)", title: "Diploma in Mechanical Engineering", duration: "3 Years", fees: "₹65,000", fee: "₹65,000", eligibility: "10th SSLC (35%)", type: "ENGINEERING", intake: 60 },
      { name: "Diploma (Civil)", title: "Diploma in Civil Engineering", duration: "3 Years", fees: "₹65,000", fee: "₹65,000", eligibility: "10th SSLC (35%)", type: "ENGINEERING", intake: 60 }
    ]
  },
  104: {
    name: "Christ College Mysuru (Christ College Srirampura)",
    address: "Srirampura Post, H.D. Kote Road, Mysuru - 570008, Karnataka",
    city: "Mysuru",
    state: "Karnataka",
    type: "Private (Degree College)",
    ownership: "Private / CMI Fathers (St. Paul Province)",
    phone: "0821-2362444",
    email: "office@christcollegemysuru.ac.in",
    website: "https://christcollegemysuru.ac.in",
    image: "/images/campuses/campus_architecture_6.jpg",
    img: "/images/campuses/campus_architecture_6.jpg",
    verified: true,
    courses: [
      { name: "BCA", title: "Bachelor of Computer Applications", duration: "3 Years", fees: "₹1,80,000", fee: "₹1,80,000", eligibility: "10+2 with Mathematics / CS (45%)", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "BBA", title: "Bachelor of Business Administration", duration: "3 Years", fees: "₹1,80,000", fee: "₹1,80,000", eligibility: "10+2 in any stream (45%)", type: "MANAGEMENT", intake: 60 },
      { name: "B.Com", title: "Bachelor of Commerce", duration: "3 Years", fees: "₹1,50,000", fee: "₹1,50,000", eligibility: "10+2 with Commerce (45%)", type: "COMMERCE", intake: 120 }
    ]
  },
  105: {
    name: "Vidya Soudha Academy of Management Sciences (VSAMS Bengaluru)",
    address: "Plot No. 563 A/B, Near KIADB Growth Centre, Peenya Industrial Area, Bengaluru - 560058, Karnataka",
    city: "Bengaluru",
    state: "Karnataka",
    type: "Private (Management & Science College)",
    ownership: "Private / Sri Manjunatha Seva Trust",
    phone: "080-28362222",
    email: "info@vidyasoudha.edu.in",
    website: "https://vidyasoudha.edu.in",
    image: "/images/campuses/campus_architecture_7.jpg",
    img: "/images/campuses/campus_architecture_7.jpg",
    verified: true,
    courses: [
      { name: "BBA", title: "Bachelor of Business Administration (Aviation / General)", duration: "3 Years", fees: "₹1,80,000", fee: "₹1,80,000", eligibility: "10+2 in any stream (45%)", type: "MANAGEMENT", intake: 60 },
      { name: "BCA", title: "Bachelor of Computer Applications (Data Science / AI)", duration: "3 Years", fees: "₹1,80,000", fee: "₹1,80,000", eligibility: "10+2 with Mathematics / CS (45%)", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "B.Com", title: "Bachelor of Commerce", duration: "3 Years", fees: "₹1,50,000", fee: "₹1,50,000", eligibility: "10+2 with Commerce (45%)", type: "COMMERCE", intake: 100 }
    ]
  },
  106: {
    name: "RNS First Grade College (RNS FGC Bengaluru)",
    address: "Dr. Vishnuvardhan Road, Channasandra, RR Nagar Post, Bengaluru - 560098, Karnataka",
    city: "Bengaluru",
    state: "Karnataka",
    type: "Private (Degree College)",
    ownership: "Private / R.N. Shetty Education Society",
    phone: "080-28611111",
    email: "rnsfgc@gmail.com",
    website: "https://rnsfgc.edu.in",
    image: "/images/campuses/campus_architecture_8.jpg",
    img: "/images/campuses/campus_architecture_8.jpg",
    verified: true,
    courses: [
      { name: "BBA", title: "Bachelor of Business Administration", duration: "3 Years", fees: "₹2,10,000", fee: "₹2,10,000", eligibility: "10+2 in any stream (50%)", type: "MANAGEMENT", intake: 120 },
      { name: "BCA", title: "Bachelor of Computer Applications", duration: "3 Years", fees: "₹2,40,000", fee: "₹2,40,000", eligibility: "10+2 with Mathematics / CS (50%)", type: "COMPUTER APPLICATIONS", intake: 120 },
      { name: "B.Com", title: "Bachelor of Commerce", duration: "3 Years", fees: "₹1,80,000", fee: "₹1,80,000", eligibility: "10+2 with Commerce (50%)", type: "COMMERCE", intake: 240 }
    ]
  },
  107: {
    name: "Pragathi First Grade College (PFGC Chikkabanavara)",
    address: "No. 57, Dr. Radhakrishnan Road, Opp. Janapriya Apartment, Chikkabanavara, Bengaluru - 560090, Karnataka",
    city: "Bengaluru",
    state: "Karnataka",
    type: "Private (Degree College)",
    ownership: "Private / Pragathi Educational Society",
    phone: "080-28391234",
    email: "info@pragathicollege.ac.in",
    website: "https://pragathicollege.ac.in",
    image: "/images/campuses/campus_architecture_9.jpg",
    img: "/images/campuses/campus_architecture_9.jpg",
    verified: true,
    courses: [
      { name: "B.Com", title: "Bachelor of Commerce", duration: "3 Years", fees: "₹90,000", fee: "₹90,000", eligibility: "10+2 with Commerce / Arts / Science", type: "COMMERCE", intake: 120 },
      { name: "BCA", title: "Bachelor of Computer Applications", duration: "3 Years", fees: "₹1,20,000", fee: "₹1,20,000", eligibility: "10+2 with Mathematics / CS (45%)", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "BBA", title: "Bachelor of Business Administration", duration: "3 Years", fees: "₹1,20,000", fee: "₹1,20,000", eligibility: "10+2 in any stream (45%)", type: "MANAGEMENT", intake: 60 }
    ]
  },
  108: {
    name: "Government First Grade College for Women Hassan (GFGCW Hassan)",
    address: "M.G. Road, Near Hemavathi Statue, Hassan - 573201, Karnataka",
    city: "Hassan",
    state: "Karnataka",
    type: "Public/Government (Women's Degree College)",
    ownership: "Department of Collegiate Education, Government of Karnataka",
    phone: "08172-268249",
    email: "gfgcwhassan@gmail.com",
    website: "https://dce.karnataka.gov.in",
    image: "/images/campuses/campus_architecture_10.jpg",
    img: "/images/campuses/campus_architecture_10.jpg",
    verified: true,
    courses: [
      { name: "B.Com", title: "Bachelor of Commerce", duration: "3 Years", fees: "₹10,500", fee: "₹10,500", eligibility: "10+2 with Commerce / Arts / Science", type: "COMMERCE", intake: 240 },
      { name: "B.A.", title: "Bachelor of Arts", duration: "3 Years", fees: "₹9,000", fee: "₹9,000", eligibility: "10+2 in any stream", type: "ARTS", intake: 240 },
      { name: "B.Sc", title: "Bachelor of Science", duration: "3 Years", fees: "₹12,000", fee: "₹12,000", eligibility: "10+2 with Science (PCB/PCM)", type: "SCIENCE", intake: 120 },
      { name: "BCA", title: "Bachelor of Computer Applications", duration: "3 Years", fees: "₹24,000", fee: "₹24,000", eligibility: "10+2 with Mathematics / CS (45%)", type: "COMPUTER APPLICATIONS", intake: 60 }
    ]
  }
};

const rawData = fs.readFileSync(SITE_DATA_PATH, 'utf8');
const data = JSON.parse(rawData);
const colleges = Array.isArray(data.colleges) ? data.colleges : data;

let updatedCount = 0;
for (const col of colleges) {
  if (batch54Updates[col.id]) {
    const upd = batch54Updates[col.id];
    Object.assign(col, upd);
    updatedCount++;
    console.log(`Updated ID: ${col.id} - ${col.name}`);
  }
}

fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(data, null, 2), 'utf8');
console.log(`Successfully updated ${updatedCount} colleges in ${SITE_DATA_PATH}`);

