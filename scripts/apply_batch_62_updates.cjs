const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const SITE_DATA_PATH = path.join(BASE_DIR, 'public', 'siteData.json');

const batch62Updates = {
  184: {
    name: "Asian College of Journalism (ACJ Chennai)",
    address: "Kasturi Centre, 2nd Main Road, CSIR Road, Taramani, Chennai - 600113, Tamil Nadu",
    city: "Chennai",
    state: "Tamil Nadu",
    type: "Private (Premier Journalism Institute / MDF)",
    ownership: "Private / Media Development Foundation",
    phone: "044-22542840",
    email: "admissionacj@gmail.com",
    website: "https://www.asianmedia.org",
    image: "/images/campuses/campus_architecture_1.jpg",
    img: "/images/campuses/campus_architecture_1.jpg",
    verified: true,
    courses: [
      { name: "PGD (Print/New Media)", title: "Postgraduate Diploma in Journalism (Print / Digital)", duration: "1 Year", fees: "₹5,20,000", fee: "₹5,20,000", eligibility: "Undergraduate Degree + ACJ Entrance Exam & Interview", type: "JOURNALISM", intake: 120 },
      { name: "PGD (Broadcast)", title: "Postgraduate Diploma in Broadcast Journalism", duration: "1 Year", fees: "₹5,20,000", fee: "₹5,20,000", eligibility: "Undergraduate Degree + ACJ Entrance Exam & Interview", type: "JOURNALISM", intake: 60 },
      { name: "PGD (Business)", title: "Postgraduate Diploma in Business & Financial Journalism", duration: "1 Year", fees: "₹5,60,000", fee: "₹5,60,000", eligibility: "Undergraduate Degree + ACJ Entrance Exam", type: "JOURNALISM", intake: 40 }
    ]
  },
  185: {
    name: "Central University of Punjab (CUP Bathinda)",
    address: "VPO Ghudda, Bathinda - 151401, Punjab",
    city: "Bathinda",
    state: "Punjab",
    type: "Public/Government (Central University - Act of Parliament 2009)",
    ownership: "Government of India / Ministry of Education",
    phone: "0164-2864125",
    email: "registrar@cup.edu.in",
    website: "https://cup.edu.in",
    image: "/images/campuses/campus_architecture_2.jpg",
    img: "/images/campuses/campus_architecture_2.jpg",
    verified: true,
    courses: [
      { name: "M.Sc (Bioinformatics)", title: "Master of Science in Bioinformatics", duration: "2 Years", fees: "₹28,000", fee: "₹28,000", eligibility: "Bachelor's degree in Biological Sciences (55%) + CUET PG", type: "SCIENCE", intake: 40 },
      { name: "MBA (Agri-Business)", title: "Master of Business Administration in Agri-Business", duration: "2 Years", fees: "₹52,000", fee: "₹52,000", eligibility: "Graduation (55%) + CUET PG", type: "MANAGEMENT", intake: 40 },
      { name: "M.Tech (CST)", title: "Master of Technology in Computer Science & Technology", duration: "2 Years", fees: "₹48,000", fee: "₹48,000", eligibility: "B.Tech in CSE / IT + CUET PG / GATE", type: "ENGINEERING", intake: 30 }
    ]
  },
  186: {
    name: "School of Design, UPES Dehradun (UPES DAT)",
    address: "Knowledge Acres, P.O. Kandoli, via Prem Nagar, Dehradun - 248007, Uttarakhand",
    city: "Dehradun",
    state: "Uttarakhand",
    type: "Private University (Faculty of Design, UPES)",
    ownership: "Private / Hydrocarbons Education & Research Society",
    phone: "1800-102-8737",
    email: "enrollments@upes.ac.in",
    website: "https://www.upes.ac.in",
    image: "/images/campuses/campus_architecture_3.jpg",
    img: "/images/campuses/campus_architecture_3.jpg",
    verified: true,
    courses: [
      { name: "B.Des (Transportation)", title: "Bachelor of Design in Transportation & Mobility Design", duration: "4 Years", fees: "₹18,50,000", fee: "₹18,50,000", eligibility: "10+2 (50%) + UPES DAT / UCEED", type: "DESIGN", intake: 60 },
      { name: "B.Des (Interaction)", title: "Bachelor of Design in Interaction Design", duration: "4 Years", fees: "₹18,50,000", fee: "₹18,50,000", eligibility: "10+2 (50%) + UPES DAT / UCEED", type: "DESIGN", intake: 60 },
      { name: "M.Des (Industrial)", title: "Master of Design in Industrial Design", duration: "2 Years", fees: "₹9,20,000", fee: "₹9,20,000", eligibility: "B.Des / B.Arch / B.Tech (50%) + CEED / UPES DAT", type: "DESIGN", intake: 30 }
    ]
  },
  187: {
    name: "World University of Design (WUD Sonipat)",
    address: "Plot No. 1, Rajiv Gandhi Education City, Sonipat - 131029, Delhi NCR / Haryana",
    city: "Sonipat",
    state: "Haryana",
    type: "Private University (India's First Dedicated Design University)",
    ownership: "Private / Shri Om Parkash Bansal Educational Trust",
    phone: "0130-2300000",
    email: "admissions@wud.ac.in",
    website: "https://worlduniversityofdesign.ac.in",
    image: "/images/campuses/campus_architecture_4.jpg",
    img: "/images/campuses/campus_architecture_4.jpg",
    verified: true,
    courses: [
      { name: "B.Des (Product)", title: "Bachelor of Design in Product Design", duration: "4 Years", fees: "₹12,80,000", fee: "₹12,80,000", eligibility: "10+2 in any stream (50%) + WUD DAT / UCEED / NID", type: "DESIGN", intake: 60 },
      { name: "B.Des (Fashion)", title: "Bachelor of Design in Fashion Design", duration: "4 Years", fees: "₹12,80,000", fee: "₹12,80,000", eligibility: "10+2 in any stream (50%) + WUD DAT / NIFT", type: "DESIGN", intake: 60 },
      { name: "B.Arch", title: "Bachelor of Architecture", duration: "5 Years", fees: "₹14,50,000", fee: "₹14,50,000", eligibility: "10+2 with PCM (50%) + NATA / JEE Main Paper 2", type: "ARCHITECTURE", intake: 40 }
    ]
  },
  188: {
    name: "Chandigarh University - Centre for Distance & Online Education (CU-CDOE)",
    address: "NH-05, Ludhiana - Chandigarh State Highway, Mohali - 140413, Punjab",
    city: "Mohali",
    state: "Punjab",
    type: "Private University (UGC-DEB Approved Online & Distance Education)",
    ownership: "Private / Chandigarh Educational Trust",
    phone: "1800-1213-88800",
    email: "info@cuidol.in",
    website: "https://www.cuidol.in",
    image: "/images/campuses/campus_architecture_5.jpg",
    img: "/images/campuses/campus_architecture_5.jpg",
    verified: true,
    courses: [
      { name: "Online MBA", title: "Master of Business Administration (Online Mode)", duration: "2 Years", fees: "₹1,50,000", fee: "₹1,50,000", eligibility: "Graduation in any discipline (50%)", type: "ONLINE MANAGEMENT", intake: 500 },
      { name: "Online MCA", title: "Master of Computer Applications (Online Mode)", duration: "2 Years", fees: "₹1,40,000", fee: "₹1,40,000", eligibility: "BCA / B.Sc with Mathematics (50%)", type: "ONLINE IT", intake: 300 },
      { name: "Online BBA", title: "Bachelor of Business Administration (Online Mode)", duration: "3 Years", fees: "₹1,35,000", fee: "₹1,35,000", eligibility: "10+2 in any stream (50%)", type: "ONLINE MANAGEMENT", intake: 500 }
    ]
  },
  189: {
    name: "Topiwala National Medical College & BYL Nair Hospital (TNMC Mumbai)",
    address: "Dr. A.L. Nair Road, Mumbai Central, Mumbai - 400008, Maharashtra",
    city: "Mumbai",
    state: "Maharashtra",
    type: "Public/Government (Municipal Medical College - Est. 1921 / MCGM)",
    ownership: "Municipal Corporation of Greater Mumbai (MCGM / BMC)",
    phone: "022-23027000",
    email: "tnmc_dean@yahoo.com",
    website: "https://tnmcnair.edu.in",
    image: "/images/campuses/campus_architecture_6.jpg",
    img: "/images/campuses/campus_architecture_6.jpg",
    verified: true,
    courses: [
      { name: "MBBS", title: "Bachelor of Medicine and Bachelor of Surgery", duration: "5.5 Years", fees: "₹7,25,000", fee: "₹7,25,000", eligibility: "10+2 with PCB (50%) + NEET UG Rank", type: "MEDICAL", intake: 150 },
      { name: "MD (General Medicine)", title: "Doctor of Medicine in General Medicine", duration: "3 Years", fees: "₹3,45,000", fee: "₹3,45,000", eligibility: "MBBS Degree + NEET PG Rank", type: "MEDICAL", intake: 18 },
      { name: "MS (Orthopaedics)", title: "Master of Surgery in Orthopaedics", duration: "3 Years", fees: "₹3,45,000", fee: "₹3,45,000", eligibility: "MBBS Degree + NEET PG Rank", type: "MEDICAL", intake: 12 }
    ]
  },
  190: {
    name: "School of Pharmacy, MIT World Peace University (MIT-WPU Pune)",
    address: "S.No. 124, Paud Road, Kothrud, Pune - 411038, Maharashtra",
    city: "Pune",
    state: "Maharashtra",
    type: "Private University (Faculty of Pharmacy, MIT-WPU)",
    ownership: "Private / MAEER's MIT Group of Institutions",
    phone: "020-71177104",
    email: "admissions@mitwpu.edu.in",
    website: "https://mitwpu.edu.in",
    image: "/images/campuses/campus_architecture_7.jpg",
    img: "/images/campuses/campus_architecture_7.jpg",
    verified: true,
    courses: [
      { name: "B.Pharm", title: "Bachelor of Pharmacy", duration: "4 Years", fees: "₹9,20,000", fee: "₹9,20,000", eligibility: "10+2 with PCM / PCB (50%) + MHT CET / NEET", type: "PHARMACY", intake: 100 },
      { name: "Pharm.D", title: "Doctor of Pharmacy", duration: "6 Years", fees: "₹18,00,000", fee: "₹18,00,000", eligibility: "10+2 with PCM / PCB (50%) + MHT CET / NEET", type: "PHARMACY", intake: 30 },
      { name: "M.Pharm (Pharmaceutics)", title: "Master of Pharmacy in Pharmaceutics", duration: "2 Years", fees: "₹4,60,000", fee: "₹4,60,000", eligibility: "B.Pharm Degree (55%) + GPAT", type: "PHARMACY", intake: 15 }
    ]
  },
  191: {
    name: "Alard University Pune (AUP Hinjewadi)",
    address: "ALARD Knowledge Park, Survey No. 47 & 50, Near Rajiv Gandhi IT Park, Marunji, Hinjewadi, Pune - 411057, Maharashtra",
    city: "Pune",
    state: "Maharashtra",
    type: "Private University (State Private University)",
    ownership: "Private / Alard Charitable Trust",
    phone: "020-66953600",
    email: "info@alarduniversity.edu.in",
    website: "https://alarduniversity.edu.in",
    image: "/images/campuses/campus_architecture_8.jpg",
    img: "/images/campuses/campus_architecture_8.jpg",
    verified: true,
    courses: [
      { name: "B.Tech (CSE)", title: "Bachelor of Technology in Computer Science & Engineering", duration: "4 Years", fees: "₹8,80,000", fee: "₹8,80,000", eligibility: "10+2 with PCM (45%) + MHT CET / JEE Main / ALARD CET", type: "ENGINEERING", intake: 120 },
      { name: "B.Sc (MLT)", title: "Bachelor of Science in Medical Laboratory Technology (Emversity)", duration: "3.5 Years", fees: "₹3,20,000", fee: "₹3,20,000", eligibility: "10+2 with PCB (45%)", type: "PARAMEDICAL", intake: 60 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹4,20,000", fee: "₹4,20,000", eligibility: "Graduation (50%) + MAH MBA CET / CAT / MAT", type: "MANAGEMENT", intake: 120 }
    ]
  },
  192: {
    name: "MGM School of Physiotherapy, Navi Mumbai (MGMSOP)",
    address: "Plot No. 1 & 2, Sector 1, Kamothe, Navi Mumbai - 410209, Maharashtra",
    city: "Navi Mumbai",
    state: "Maharashtra",
    type: "Deemed to be University (Constituent of MGM Institute of Health Sciences)",
    ownership: "Private / Mahatma Gandhi Mission Trust",
    phone: "022-27437866",
    email: "mgmsop@mgmmumbai.ac.in",
    website: "https://mgmsopnm.edu.in",
    image: "/images/campuses/campus_architecture_9.jpg",
    img: "/images/campuses/campus_architecture_9.jpg",
    verified: true,
    courses: [
      { name: "BPT", title: "Bachelor of Physiotherapy", duration: "4.5 Years", fees: "₹6,80,000", fee: "₹6,80,000", eligibility: "10+2 with PCB (50%) + NEET UG / MGM CET", type: "PHYSIOTHERAPY", intake: 100 },
      { name: "MPT (Musculoskeletal)", title: "Master of Physiotherapy in Musculoskeletal Sciences", duration: "2 Years", fees: "₹4,50,000", fee: "₹4,50,000", eligibility: "BPT Degree (50%) + MGM PGET", type: "PHYSIOTHERAPY", intake: 10 },
      { name: "MPT (Neurosciences)", title: "Master of Physiotherapy in Neurosciences", duration: "2 Years", fees: "₹4,50,000", fee: "₹4,50,000", eligibility: "BPT Degree (50%) + MGM PGET", type: "PHYSIOTHERAPY", intake: 10 }
    ]
  },
  193: {
    name: "Maharashtra University of Health Sciences, Nashik (MUHS Nashik)",
    address: "Dindori Road, Mhasrul, Nashik - 422004, Maharashtra",
    city: "Nashik",
    state: "Maharashtra",
    type: "Public/Government (State Health Sciences University - 1998)",
    ownership: "Government of Maharashtra / Medical Education & Drugs Department",
    phone: "0253-2539294",
    email: "registrar@muhs.ac.in",
    website: "https://www.muhs.ac.in",
    image: "/images/campuses/campus_architecture_10.jpg",
    img: "/images/campuses/campus_architecture_10.jpg",
    verified: true,
    courses: [
      { name: "MBA (Health Care)", title: "Master of Business Administration in Health Care Administration", duration: "2 Years", fees: "₹1,20,000", fee: "₹1,20,000", eligibility: "Any Health Science Degree (MBBS / BDS / BAMS / BHMS / B.Sc Nursing)", type: "HEALTH ADMINISTRATION", intake: 60 },
      { name: "Fellowship (Critical Care)", title: "Fellowship in Critical Care Medicine", duration: "1 Year", fees: "₹75,000", fee: "₹75,000", eligibility: "MD / MS / DNB in relevant discipline", type: "MEDICAL FELLOWSHIP", intake: 20 },
      { name: "M.Sc (Pharm Medicine)", title: "Master of Science in Pharmaceutical Medicine", duration: "2 Years", fees: "₹95,000", fee: "₹95,000", eligibility: "Graduation in Health Science / Pharmacy / Life Sciences", type: "PARAMEDICAL", intake: 30 }
    ]
  }
};

const siteData = JSON.parse(fs.readFileSync(SITE_DATA_PATH, 'utf8'));
let updatedCount = 0;

for (let i = 0; i < siteData.colleges.length; i++) {
  const col = siteData.colleges[i];
  if (batch62Updates[col.id]) {
    const upd = batch62Updates[col.id];
    Object.assign(col, upd);
    updatedCount++;
    console.log(`Updated ID: ${col.id} - ${col.name}`);
  }
}

fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(siteData, null, 2), 'utf8');
console.log(`Successfully updated ${updatedCount} colleges in ${SITE_DATA_PATH}`);
