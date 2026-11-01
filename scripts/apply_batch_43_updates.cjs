const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const SITE_DATA_PATH = path.join(BASE_DIR, 'public', 'siteData.json');

const batch43Updates = {
  3586: {
    name: "Arrdekta Institute of Technology",
    address: "Ahmedabad-Ambaji State Highway No. 09, Opp. Ekta Institute, At: Radhiwad, PO: Navi Metral, Taluka: Khedbrahma, Dist. Sabarkantha, Gujarat - 383270",
    city: "Khedbrahma",
    state: "Gujarat",
    type: "Private",
    ownership: "Private (Radhe Trust)",
    phone: "+91-2775-285222",
    email: "info@arrdekta.org",
    website: "https://www.arrdekta.org",
    image: "/images/campuses/campus_architecture_5.jpg",
    img: "/images/campuses/campus_architecture_5.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹1,40,000", fee: "₹1,40,000", eligibility: "BCA/B.Sc IT + Gujarat ACPC Entrance", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "B.Tech", title: "Bachelor of Technology in Computer Engineering", duration: "4 Years", fees: "₹2,60,000", fee: "₹2,60,000", eligibility: "10+2 with PCM + GUJCET/JEE Main", type: "ENGINEERING", intake: 60 }
    ]
  },
  3592: {
    name: "Shivam Institute of Management, Valasan (Anand)",
    address: "Opp. Swaminarayan Vidyapith, Anand-Sojitra Road, Valasan, Anand - 388325, Gujarat",
    city: "Anand",
    state: "Gujarat",
    type: "Private",
    ownership: "Private (Shivam Education Trust)",
    phone: "+91-2692-280400",
    email: "sim.valasan@gmail.com",
    website: "http://www.shivaminstitute.org",
    image: "/images/campuses/campus_architecture_2.jpg",
    img: "/images/campuses/campus_architecture_2.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration (General Management)", duration: "2 Years", fees: "₹1,50,000", fee: "₹1,50,000", eligibility: "Graduation (50%) + CMAT / Gujarat ACPC", type: "MANAGEMENT", intake: 60 },
      { name: "MBA (Finance)", title: "Master of Business Administration in Finance", duration: "2 Years", fees: "₹1,50,000", fee: "₹1,50,000", eligibility: "Graduation (50%) + CMAT / Gujarat ACPC", type: "MANAGEMENT", intake: 60 }
    ]
  },
  3593: {
    name: "Shree H.N. Shukla College of Management Studies",
    address: "Shree H.N. Shukla College Campus, Nr. Lalpari Lake, B/H Marketing Yard, Amargadh (Bhichari), Rajkot - 360003, Gujarat",
    city: "Rajkot",
    state: "Gujarat",
    type: "Private",
    ownership: "Private (Shree B.M. Patel Education Trust)",
    phone: "+91-281-2701405",
    email: "hnshukla@yahoo.com",
    website: "https://www.shreehnshukla.org.in",
    image: "/images/campuses/campus_architecture_6.jpg",
    img: "/images/campuses/campus_architecture_6.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹1,44,000", fee: "₹1,44,000", eligibility: "Graduation (50%) + CMAT / Gujarat ACPC", type: "MANAGEMENT", intake: 120 },
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹1,30,000", fee: "₹1,30,000", eligibility: "BCA/B.Sc Computer Science + ACPC", type: "COMPUTER APPLICATIONS", intake: 60 }
    ]
  },
  3599: {
    name: "S. R. Luthra Institute of Management (SRLIM Surat)",
    address: "MTB College Campus, Near Adarsh Society, Athwalines, Surat - 395001, Gujarat",
    city: "Surat",
    state: "Gujarat",
    type: "Private",
    ownership: "Private (Sarvajanik Education Society)",
    phone: "+91-261-2240103",
    email: "contact@srlimba.ac.in",
    website: "https://www.srlimba.ac.in",
    image: "/images/campuses/campus_architecture_1.jpg",
    img: "/images/campuses/campus_architecture_1.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹1,80,000", fee: "₹1,80,000", eligibility: "Graduation (50%) + CMAT / Gujarat ACPC", type: "MANAGEMENT", intake: 240 },
      { name: "MBA (Evening)", title: "Master of Business Administration (Evening Executive)", duration: "3 Years", fees: "₹1,50,000", fee: "₹1,50,000", eligibility: "Graduation + 2 Years Work Experience", type: "MANAGEMENT", intake: 60 }
    ]
  },
  3602: {
    name: "Smt. Shantaben Haribhai Gajera MBA Mahila College",
    address: "Smt. Shantaben Haribhai Gajera Shaikshanik Sankul, Chakkargadh Road, Near Bypass, Amreli - 365601, Gujarat",
    city: "Amreli",
    state: "Gujarat",
    type: "Private",
    ownership: "Private (Shree Amreli Jilla Leuva Patel Charitable Trust)",
    phone: "02792-232321",
    email: "info@lptshgsankulamreli.net",
    website: "https://www.lptshgsankulamreli.net",
    image: "/images/campuses/campus_architecture_7.jpg",
    img: "/images/campuses/campus_architecture_7.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration (Women)", duration: "2 Years", fees: "₹1,30,000", fee: "₹1,30,000", eligibility: "Graduation (50%) + CMAT / ACPC (Female candidates)", type: "MANAGEMENT", intake: 60 }
    ]
  },
  3603: {
    name: "Som-Lalit Institute of Management Studies (SLIMS Ahmedabad)",
    address: "SLIMS Campus, Near St. Xavier's Corner, University Road, Navrangpura, Ahmedabad - 380009, Gujarat",
    city: "Ahmedabad",
    state: "Gujarat",
    type: "Private",
    ownership: "Private (Som-Lalit Education and Research Foundation)",
    phone: "079-26303301",
    email: "info@somlalit.org",
    website: "https://www.somlalitcollege.org",
    image: "/images/campuses/campus_architecture_8.jpg",
    img: "/images/campuses/campus_architecture_8.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹2,60,000", fee: "₹2,60,000", eligibility: "Graduation (50%) + CMAT / Gujarat ACPC", type: "MANAGEMENT", intake: 180 },
      { name: "MBA (IT)", title: "Master of Business Administration in Information Technology", duration: "2 Years", fees: "₹2,60,000", fee: "₹2,60,000", eligibility: "Graduation (50%) + CMAT / Gujarat ACPC", type: "MANAGEMENT", intake: 60 }
    ]
  },
  3607: {
    name: "C K Shah Vijapurwala Institute of Management (CKSVIM Vadodara)",
    address: "Shri Mahavira Jaina Vidyalaya Premises, R.V. Desai Road, Pratapnagar, Vadodara - 390004, Gujarat",
    city: "Vadodara",
    state: "Gujarat",
    type: "Private",
    ownership: "Private (SMJV & Federation of Gujarat Industries)",
    phone: "+91-9924556363",
    email: "admission@cksvim.edu.in",
    website: "https://cksvim.edu.in",
    image: "/images/campuses/campus_architecture_4.jpg",
    img: "/images/campuses/campus_architecture_4.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹1,60,000", fee: "₹1,60,000", eligibility: "Graduation (50%) + CMAT / Gujarat ACPC", type: "MANAGEMENT", intake: 120 }
    ]
  },
  3634: {
    name: "St. Kabir Institute of Professional Studies (SKIPS Ahmedabad)",
    address: "Near SAL Hospital, Off Drive-In Road, Thaltej, Ahmedabad - 380054, Gujarat",
    city: "Ahmedabad",
    state: "Gujarat",
    type: "Private",
    ownership: "Private (St. Kabir Educational Society)",
    phone: "079-49067000",
    email: "info@skips.in",
    website: "https://www.skips.in",
    image: "/images/campuses/campus_architecture_3.jpg",
    img: "/images/campuses/campus_architecture_3.jpg",
    verified: true,
    courses: [
      { name: "PGDM", title: "Post Graduate Diploma in Management", duration: "2 Years", fees: "₹5,85,000", fee: "₹5,85,000", eligibility: "Graduation (50%) + CAT/MAT/XAT/CMAT/ATMA", type: "MANAGEMENT", intake: 180 },
      { name: "PGDM (BDA)", title: "Post Graduate Diploma in Management (Business Data Analytics)", duration: "2 Years", fees: "₹5,85,000", fee: "₹5,85,000", eligibility: "Graduation (50%) + CAT/MAT/XAT/CMAT/ATMA", type: "MANAGEMENT", intake: 60 }
    ]
  },
  3654: {
    name: "Chimanbhai Patel Institute of Management & Research (CPIMR Ahmedabad)",
    address: "Opp. Karnavati Club, Next to Shapath IV, S.G. Highway, Prahlad Nagar, Ahmedabad - 380015, Gujarat",
    city: "Ahmedabad",
    state: "Gujarat",
    type: "Private",
    ownership: "Private (Sardar Vallabhbhai Education Trust)",
    phone: "079-26926568",
    email: "info@cpi.edu.in",
    website: "https://cpi.edu.in",
    image: "/images/campuses/campus_architecture_2.jpg",
    img: "/images/campuses/campus_architecture_2.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹1,76,000", fee: "₹1,76,000", eligibility: "Graduation (50%) + CMAT / Gujarat ACPC", type: "MANAGEMENT", intake: 120 },
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹1,50,000", fee: "₹1,50,000", eligibility: "BCA/B.Sc Computer Science + ACPC", type: "COMPUTER APPLICATIONS", intake: 60 }
    ]
  },
  3656: {
    name: "Entrepreneurship Development Institute of India (EDII Gandhinagar)",
    address: "Via Ahmedabad Airport & Indira Bridge, P.O. Bhat - 382428, Dist. Gandhinagar, Gujarat",
    city: "Gandhinagar",
    state: "Gujarat",
    type: "Public/Government (Autonomous)",
    ownership: "Autonomous National Apex Institution (Set up by IFCI, IDBI, ICICI, SBI & Govt. of Gujarat)",
    phone: "+91-79-69104900",
    email: "info@ediindia.org",
    website: "https://www.ediindia.org",
    image: "/images/campuses/campus_architecture_9.jpg",
    img: "/images/campuses/campus_architecture_9.jpg",
    verified: true,
    courses: [
      { name: "PGDM (Entrepreneurship)", title: "Post Graduate Diploma in Management (Entrepreneurship)", duration: "2 Years", fees: "₹12,40,000", fee: "₹12,40,000", eligibility: "Graduation (50%) + CAT/MAT/XAT/CMAT", type: "MANAGEMENT", intake: 120 },
      { name: "PGDM (Innovation)", title: "Post Graduate Diploma in Management (Innovation, Entrepreneurship & Venture Development)", duration: "2 Years", fees: "₹12,40,000", fee: "₹12,40,000", eligibility: "Graduation (50%) + CAT/MAT/XAT/CMAT", type: "MANAGEMENT", intake: 60 }
    ]
  }
};

const rawData = fs.readFileSync(SITE_DATA_PATH, 'utf8');
const data = JSON.parse(rawData);
const colleges = Array.isArray(data.colleges) ? data.colleges : data;

let updatedCount = 0;
for (const col of colleges) {
  if (batch43Updates[col.id]) {
    const upd = batch43Updates[col.id];
    Object.assign(col, upd);
    updatedCount++;
    console.log(`Updated ID: ${col.id} - ${col.name}`);
  }
}

fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(data, null, 2), 'utf8');
console.log(`Successfully updated ${updatedCount} colleges in ${SITE_DATA_PATH}`);

