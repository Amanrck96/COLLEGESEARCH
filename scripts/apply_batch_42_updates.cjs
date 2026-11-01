const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const SITE_DATA_PATH = path.join(BASE_DIR, 'public', 'siteData.json');

const batch42Updates = {
  3509: {
    name: "Lal Bahadur Shastri Institute of Management (LBSIM Delhi)",
    address: "Plot No. 11/07, Sector-11, Dwarka, New Delhi - 110075",
    city: "New Delhi",
    state: "Delhi NCR",
    type: "Private",
    ownership: "Private (Lal Bahadur Shastri Educational Society)",
    phone: "011-25307700",
    email: "admission@lbsim.ac.in",
    website: "https://www.lbsim.ac.in",
    image: "/images/campuses/campus_architecture_6.jpg",
    img: "/images/campuses/campus_architecture_6.jpg",
    verified: true,
    courses: [
      { name: "PGDM (General)", title: "Post Graduate Diploma in Management", duration: "2 Years", fees: "₹15,50,000", fee: "₹15,50,000", eligibility: "Graduation (50%) + CAT/XAT/GMAT", type: "MANAGEMENT", intake: 180 },
      { name: "PGDM (FM)", title: "Post Graduate Diploma in Management (Financial Management)", duration: "2 Years", fees: "₹15,50,000", fee: "₹15,50,000", eligibility: "Graduation (50%) + CAT/XAT/GMAT", type: "MANAGEMENT", intake: 60 },
      { name: "PGDM (R&BA)", title: "Post Graduate Diploma in Management (Research & Business Analytics)", duration: "2 Years", fees: "₹15,50,000", fee: "₹15,50,000", eligibility: "Graduation (50%) + CAT/XAT/GMAT", type: "MANAGEMENT", intake: 60 }
    ]
  },
  3510: {
    name: "Sri Sharada Institute of Indian Management Research (SRISIIM)",
    address: "7, Institutional Area, Phase II, Vasant Kunj, New Delhi - 110070",
    city: "New Delhi",
    state: "Delhi NCR",
    type: "Private",
    ownership: "Private",
    phone: "011-26124090",
    email: "info@srisiim.ac.in",
    website: "https://srisiim.ac.in",
    image: "/images/campuses/campus_architecture_7.jpg",
    img: "/images/campuses/campus_architecture_7.jpg",
    verified: true,
    courses: [
      { name: "PGDM", title: "Post Graduate Diploma in Management", duration: "2 Years", fees: "₹6,50,000", fee: "₹6,50,000", eligibility: "Graduation (50%) + CAT/MAT/XAT/CMAT", type: "MANAGEMENT", intake: 120 },
      { name: "PGDM (IB)", title: "Post Graduate Diploma in Management (International Business)", duration: "2 Years", fees: "₹6,50,000", fee: "₹6,50,000", eligibility: "Graduation (50%) + CAT/MAT/XAT/CMAT", type: "MANAGEMENT", intake: 60 }
    ]
  },
  3512: {
    name: "Fortune Institute of International Business (FIIB Delhi)",
    address: "Plot No. 5, Basant Gaon, Opp. Army (R&R) Hospital, Rao Tula Ram Marg, Vasant Vihar, New Delhi - 110057",
    city: "New Delhi",
    state: "Delhi NCR",
    type: "Private",
    ownership: "Private",
    phone: "011-47285000",
    email: "admissions@fiib.edu.in",
    website: "https://www.fiib.edu.in",
    image: "/images/campuses/campus_architecture_8.jpg",
    img: "/images/campuses/campus_architecture_8.jpg",
    verified: true,
    courses: [
      { name: "PGDM", title: "Post Graduate Diploma in Management", duration: "2 Years", fees: "₹10,10,000", fee: "₹10,10,000", eligibility: "Graduation (50%) + CAT/MAT/XAT/CMAT/GMAT", type: "MANAGEMENT", intake: 210 },
      { name: "PGDM (FM)", title: "Post Graduate Diploma in Management (Financial Management)", duration: "2 Years", fees: "₹10,10,000", fee: "₹10,10,000", eligibility: "Graduation (50%) + CAT/MAT/XAT/CMAT/GMAT", type: "MANAGEMENT", intake: 60 }
    ]
  },
  3519: {
    name: "New Delhi Institute of Management (NDIM Delhi)",
    address: "60 & 50 (B & C), Tughlakabad Institutional Area, New Delhi - 110062",
    city: "New Delhi",
    state: "Delhi NCR",
    type: "Private",
    ownership: "Private",
    phone: "011-40111000",
    email: "info@ndimdelhi.org",
    website: "https://www.ndimdelhi.org",
    image: "/images/campuses/campus_architecture_9.jpg",
    img: "/images/campuses/campus_architecture_9.jpg",
    verified: true,
    courses: [
      { name: "PGDM", title: "Post Graduate Diploma in Management", duration: "2 Years", fees: "₹11,50,000", fee: "₹11,50,000", eligibility: "Graduation (50%) + CAT/XAT/CMAT/MAT/GMAT", type: "MANAGEMENT", intake: 240 },
      { name: "PGDM (Marketing)", title: "Post Graduate Diploma in Management (Marketing)", duration: "2 Years", fees: "₹11,50,000", fee: "₹11,50,000", eligibility: "Graduation (50%) + CAT/XAT/CMAT/MAT/GMAT", type: "MANAGEMENT", intake: 120 },
      { name: "PGDM (Finance)", title: "Post Graduate Diploma in Management (Finance)", duration: "2 Years", fees: "₹11,50,000", fee: "₹11,50,000", eligibility: "Graduation (50%) + CAT/XAT/CMAT/MAT/GMAT", type: "MANAGEMENT", intake: 60 }
    ]
  },
  3520: {
    name: "Institute of Marketing and Management - Business School (IMM Business School)",
    address: "Marketing Tower, B-11, Qutab Institutional Area, New Delhi - 110016",
    city: "New Delhi",
    state: "Delhi NCR",
    type: "Private",
    ownership: "Private",
    phone: "011-26520894",
    email: "info@immindia.edu.in",
    website: "https://www.immindia.edu.in",
    image: "/images/campuses/campus_architecture_1.jpg",
    img: "/images/campuses/campus_architecture_1.jpg",
    verified: true,
    courses: [
      { name: "PGDM", title: "Post Graduate Diploma in Management", duration: "2 Years", fees: "₹8,90,000", fee: "₹8,90,000", eligibility: "Graduation (50%) + CAT/MAT/XAT/CMAT/ATMA", type: "MANAGEMENT", intake: 120 },
      { name: "PGDM (Event & Retail)", title: "Post Graduate Diploma in Management (Event & Retail Management)", duration: "2 Years", fees: "₹8,90,000", fee: "₹8,90,000", eligibility: "Graduation (50%) + CAT/MAT/XAT/CMAT/ATMA", type: "MANAGEMENT", intake: 60 }
    ]
  },
  3521: {
    name: "Banarsidas Chandiwala Institute of Professional Studies (BCIPS Dwarka)",
    address: "Plot No. 9, Sector 11, Dwarka, New Delhi - 110075",
    city: "New Delhi",
    state: "Delhi NCR",
    type: "Private",
    ownership: "Private (Shri Banarsidas Chandiwala Sewa Smarak Trust Society)",
    phone: "011-49020100",
    email: "director@bcips.ac.in",
    website: "https://www.bcips.ac.in",
    image: "/images/campuses/campus_architecture_3.jpg",
    img: "/images/campuses/campus_architecture_3.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹2,80,000", fee: "₹2,80,000", eligibility: "Graduation (50%) + CAT/CMAT/IPU CET", type: "MANAGEMENT", intake: 120 },
      { name: "BBA", title: "Bachelor of Business Administration", duration: "3 Years", fees: "₹2,20,000", fee: "₹2,20,000", eligibility: "10+2 with English (50%) + IPU CET/CUET", type: "MANAGEMENT", intake: 120 }
    ]
  },
  3543: {
    name: "International Management Centre (IMC New Delhi)",
    address: "D-30, South Extension Part-I, New Delhi - 110049",
    city: "New Delhi",
    state: "Delhi NCR",
    type: "Private",
    ownership: "Private",
    phone: "011-24622156",
    email: "info@imc.edu.in",
    website: "https://www.imc.edu.in",
    image: "/images/campuses/campus_architecture_2.jpg",
    img: "/images/campuses/campus_architecture_2.jpg",
    verified: true,
    courses: [
      { name: "PGDM", title: "Post Graduate Diploma in Management", duration: "2 Years", fees: "₹5,50,000", fee: "₹5,50,000", eligibility: "Graduation (50%) + CAT/MAT/XAT/CMAT", type: "MANAGEMENT", intake: 60 },
      { name: "PGDM (IB)", title: "Post Graduate Diploma in Management (International Business)", duration: "2 Years", fees: "₹5,50,000", fee: "₹5,50,000", eligibility: "Graduation (50%) + CAT/MAT/XAT/CMAT", type: "MANAGEMENT", intake: 60 }
    ]
  },
  3562: {
    name: "Adani Institute of Digital Technology Management (AIDTM Gandhinagar)",
    address: "Opp. Maharaj Hotel Lane, Sarkhej - Gandhinagar Highway, PO: Jamiyatpura, Gandhinagar - 382423, Gujarat",
    city: "Gandhinagar",
    state: "Gujarat",
    type: "Private",
    ownership: "Private (Adani Institute of Education and Research)",
    phone: "+91-6358975222",
    email: "admissions@aidtm.ac.in",
    website: "https://www.aidtm.ac.in",
    image: "/images/campuses/campus_architecture_4.jpg",
    img: "/images/campuses/campus_architecture_4.jpg",
    verified: true,
    courses: [
      { name: "PGDM (BDA)", title: "Post Graduate Diploma in Management (Big Data Analytics)", duration: "2 Years", fees: "₹10,00,000", fee: "₹10,00,000", eligibility: "Graduation (50%) with Mathematics/Statistics + CAT/XAT/CMAT/GMAT/MAT", type: "MANAGEMENT", intake: 60 },
      { name: "PGDM (AI&DS)", title: "Post Graduate Diploma in Management (Artificial Intelligence and Data Science)", duration: "2 Years", fees: "₹10,00,000", fee: "₹10,00,000", eligibility: "Graduation (50%) with Mathematics/Statistics + CAT/XAT/CMAT/GMAT/MAT", type: "MANAGEMENT", intake: 60 }
    ]
  },
  3563: {
    name: "M.S. Patel Institute of Management Studies (FMS Baroda, MSU Baroda)",
    address: "University Road, Opposite The M.S. University Head Office, Pratapgunj / Fatehgunj, Vadodara, Gujarat - 390002",
    city: "Vadodara",
    state: "Gujarat",
    type: "Public/Government",
    ownership: "Government of Gujarat / Conducted State University Department",
    phone: "0265-2789485",
    email: "dean-ms@msubaroda.ac.in",
    website: "https://www.msubaroda.ac.in",
    image: "/images/campuses/campus_architecture_5.jpg",
    img: "/images/campuses/campus_architecture_5.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹1,40,000", fee: "₹1,40,000", eligibility: "Graduation (50%) + Gujarat ACPC / CMAT", type: "MANAGEMENT", intake: 120 },
      { name: "MBA (Evening)", title: "Master of Business Administration (Executive Evening)", duration: "3 Years", fees: "₹1,20,000", fee: "₹1,20,000", eligibility: "Graduation + 2 Years Work Experience", type: "MANAGEMENT", intake: 40 }
    ]
  },
  3566: {
    name: "Institute of Rural Management Anand (IRMA Anand)",
    address: "Post Box No. 60, Near NDDB, Anand, Gujarat - 388001",
    city: "Anand",
    state: "Gujarat",
    type: "Public/Government (Autonomous)",
    ownership: "Autonomous Premier Institute (Supported by NDDB / Govt. of India)",
    phone: "+91-02692-260391",
    email: "admissions@irma.ac.in",
    website: "https://www.irma.ac.in",
    image: "/images/campuses/campus_architecture_10.jpg",
    img: "/images/campuses/campus_architecture_10.jpg",
    verified: true,
    courses: [
      { name: "PGDM (RM)", title: "Post Graduate Diploma in Management (Rural Management)", duration: "2 Years", fees: "₹16,80,000", fee: "₹16,80,000", eligibility: "Graduation (50%) + CAT/XAT/CMAT", type: "MANAGEMENT", intake: 240 },
      { name: "PGDM (RM-X)", title: "Post Graduate Diploma in Management (Rural Management - Executive)", duration: "15 Months", fees: "₹11,00,000", fee: "₹11,00,000", eligibility: "Graduation + Minimum 5 Years Work Experience", type: "MANAGEMENT", intake: 60 }
    ]
  }
};

const rawData = fs.readFileSync(SITE_DATA_PATH, 'utf8');
const data = JSON.parse(rawData);
const colleges = Array.isArray(data.colleges) ? data.colleges : data;

let updatedCount = 0;
for (const col of colleges) {
  if (batch42Updates[col.id]) {
    const upd = batch42Updates[col.id];
    Object.assign(col, upd);
    updatedCount++;
    console.log(`Updated ID: ${col.id} - ${col.name}`);
  }
}

fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(data, null, 2), 'utf8');
console.log(`Successfully updated ${updatedCount} colleges in ${SITE_DATA_PATH}`);

