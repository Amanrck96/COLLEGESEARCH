const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const SITE_DATA_PATH = path.join(BASE_DIR, 'public', 'siteData.json');

const batch61Updates = {
  173: {
    name: "Anjuman Polytechnic, Nagpur (APN Nagpur)",
    address: "Mangalwari Bazar Road, Sadar, Nagpur - 440001, Maharashtra",
    city: "Nagpur",
    state: "Maharashtra",
    type: "Private / Minority (Polytechnic / MSBTE Affiliated)",
    ownership: "Private / Anjuman Hami-E-Islam Trust",
    phone: "0712-2582749",
    email: "anjumanpoly@yahoo.co.in",
    website: "https://www.anjumanpoly.edu.in",
    image: "/images/campuses/campus_architecture_1.jpg",
    img: "/images/campuses/campus_architecture_1.jpg",
    verified: true,
    courses: [
      { name: "Diploma (Civil)", title: "Diploma in Civil Engineering", duration: "3 Years", fees: "₹65,000", fee: "₹65,000", eligibility: "SSC / 10th Pass (35%) + CAP", type: "ENGINEERING", intake: 60 },
      { name: "Diploma (Mechanical)", title: "Diploma in Mechanical Engineering", duration: "3 Years", fees: "₹65,000", fee: "₹65,000", eligibility: "SSC / 10th Pass (35%) + CAP", type: "ENGINEERING", intake: 60 },
      { name: "Diploma (Computer)", title: "Diploma in Computer Engineering", duration: "3 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "SSC / 10th Pass (35%) + CAP", type: "ENGINEERING", intake: 60 }
    ]
  },
  174: {
    name: "Samrat Ashok Polytechnic, Chalisgaon (SAP Jalgaon)",
    address: "Sr. No. 410/1, Derabardi, Dhule Road, Chalisgaon, Jalgaon District - 424101, Maharashtra",
    city: "Chalisgaon",
    state: "Maharashtra",
    type: "Private (Polytechnic / MSBTE Affiliated)",
    ownership: "Private / Gautam Shikshan Sanstha",
    phone: "02589-224488",
    email: "satipoly@gmail.com",
    website: "https://satipoly.ac.in",
    image: "/images/campuses/campus_architecture_2.jpg",
    img: "/images/campuses/campus_architecture_2.jpg",
    verified: true,
    courses: [
      { name: "Diploma (Mechanical)", title: "Diploma in Mechanical Engineering", duration: "3 Years", fees: "₹45,000", fee: "₹45,000", eligibility: "SSC / 10th Pass (35%) + CAP", type: "ENGINEERING", intake: 60 },
      { name: "Diploma (Civil)", title: "Diploma in Civil Engineering", duration: "3 Years", fees: "₹45,000", fee: "₹45,000", eligibility: "SSC / 10th Pass (35%) + CAP", type: "ENGINEERING", intake: 60 },
      { name: "Diploma (Electrical)", title: "Diploma in Electrical Engineering", duration: "3 Years", fees: "₹45,000", fee: "₹45,000", eligibility: "SSC / 10th Pass (35%) + CAP", type: "ENGINEERING", intake: 60 }
    ]
  },
  175: {
    name: "Bharati Vidyapeeth Deemed University College of Engineering, Pune (BVUCOE Pune)",
    address: "Pune-Satara Road, Dhankawadi, Pune - 411043, Maharashtra",
    city: "Pune",
    state: "Maharashtra",
    type: "Deemed to be University (Constituent Engineering College of BVDU)",
    ownership: "Private / Bharati Vidyapeeth",
    phone: "020-24107390",
    email: "coepune@bharatividyapeeth.edu",
    website: "http://bvucoepune.edu.in",
    image: "/images/campuses/campus_architecture_3.jpg",
    img: "/images/campuses/campus_architecture_3.jpg",
    verified: true,
    courses: [
      { name: "B.Tech (Computer)", title: "Bachelor of Technology in Computer Engineering", duration: "4 Years", fees: "₹6,00,000", fee: "₹6,00,000", eligibility: "10+2 with PCM (50%) + BVP CET / JEE Main / MHT CET", type: "ENGINEERING", intake: 120 },
      { name: "B.Tech (E&TC)", title: "Bachelor of Technology in Electronics & Telecommunication", duration: "4 Years", fees: "₹5,20,000", fee: "₹5,20,000", eligibility: "10+2 with PCM (50%) + BVP CET", type: "ENGINEERING", intake: 120 },
      { name: "B.Tech (Robotics)", title: "Bachelor of Technology in Robotics & Automation", duration: "4 Years", fees: "₹5,60,000", fee: "₹5,60,000", eligibility: "10+2 with PCM (50%) + BVP CET", type: "ENGINEERING", intake: 60 }
    ]
  },
  176: {
    name: "Vasantrao Naik Mahavidyalaya, Chhatrapati Sambhajinagar (VNMC Aurangabad)",
    address: "Vasantnagar, CIDCO, Chhatrapati Sambhajinagar (Aurangabad) - 431003, Maharashtra",
    city: "Chhatrapati Sambhajinagar",
    state: "Maharashtra",
    type: "Private / Grant-in-Aid (Arts, Science & Commerce College / BAMU)",
    ownership: "Private / Vasantrao Naik Shikshan Sanstha",
    phone: "0240-2331476",
    email: "principal@vnmc.org",
    website: "https://vnmc.org",
    image: "/images/campuses/campus_architecture_4.jpg",
    img: "/images/campuses/campus_architecture_4.jpg",
    verified: true,
    courses: [
      { name: "B.Sc", title: "Bachelor of Science (Physics, Chemistry, Mathematics/Life Sciences)", duration: "3 Years", fees: "₹18,000", fee: "₹18,000", eligibility: "10+2 with Science (45%)", type: "SCIENCE", intake: 120 },
      { name: "B.Com", title: "Bachelor of Commerce", duration: "3 Years", fees: "₹15,000", fee: "₹15,000", eligibility: "10+2 with Commerce / Arts / Science (45%)", type: "COMMERCE", intake: 120 },
      { name: "BCA", title: "Bachelor of Computer Applications", duration: "3 Years", fees: "₹45,000", fee: "₹45,000", eligibility: "10+2 in any stream (45%)", type: "COMPUTER APPLICATIONS", intake: 60 }
    ]
  },
  177: {
    name: "School of Commerce and Management Sciences, SRTMUN (SCMS Nanded)",
    address: "Swami Ramanand Teerth Marathwada University, Dnyanteerth, Vishnupuri, Nanded - 431606, Maharashtra",
    city: "Nanded",
    state: "Maharashtra",
    type: "Public/Government (Constituent School of State Public University)",
    ownership: "Government of Maharashtra / SRTMUN",
    phone: "02462-229242",
    email: "scms@srtmun.ac.in",
    website: "https://www.srtmun.ac.in",
    image: "/images/campuses/campus_architecture_5.jpg",
    img: "/images/campuses/campus_architecture_5.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹72,00,000", fee: "₹72,000", eligibility: "Graduation (50%) + MAH MBA CET / CMAT", type: "MANAGEMENT", intake: 60 },
      { name: "M.Com", title: "Master of Commerce", duration: "2 Years", fees: "₹24,000", fee: "₹24,000", eligibility: "B.Com / BBA (50%)", type: "COMMERCE", intake: 60 },
      { name: "BBA", title: "Bachelor of Business Administration", duration: "3 Years", fees: "₹42,000", fee: "₹42,000", eligibility: "10+2 in any stream (45%)", type: "MANAGEMENT", intake: 60 }
    ]
  },
  178: {
    name: "Shri Laxmanrao Mankar College of Polytechnic, Amgaon (SLMP Gondia)",
    address: "Risama Road, At Post Amgaon, Gondia District - 441902, Maharashtra",
    city: "Amgaon",
    state: "Maharashtra",
    type: "Private (Polytechnic / MSBTE Affiliated)",
    ownership: "Private / Shri Laxmanrao Mankar Shikshan Sanstha",
    phone: "07187-224255",
    email: "slmpamgaon@gmail.com",
    website: "https://www.slmpamgaon.edu.in",
    image: "/images/campuses/campus_architecture_6.jpg",
    img: "/images/campuses/campus_architecture_6.jpg",
    verified: true,
    courses: [
      { name: "Diploma (Mechanical)", title: "Diploma in Mechanical Engineering", duration: "3 Years", fees: "₹48,000", fee: "₹48,000", eligibility: "SSC / 10th Pass (35%) + CAP", type: "ENGINEERING", intake: 60 },
      { name: "Diploma (Electrical)", title: "Diploma in Electrical Engineering", duration: "3 Years", fees: "₹48,000", fee: "₹48,000", eligibility: "SSC / 10th Pass (35%) + CAP", type: "ENGINEERING", intake: 60 },
      { name: "Diploma (Civil)", title: "Diploma in Civil Engineering", duration: "3 Years", fees: "₹48,000", fee: "₹48,000", eligibility: "SSC / 10th Pass (35%) + CAP", type: "ENGINEERING", intake: 60 }
    ]
  },
  180: {
    name: "Arihant College of Arts, Commerce and Science (ACACS Pune)",
    address: "Island Building, Above Bank of Baroda, Pulgate Bus Stand, Solapur Bazar Road, Camp, Pune - 411001, Maharashtra",
    city: "Pune",
    state: "Maharashtra",
    type: "Private (Degree College / SPPU Affiliated)",
    ownership: "Private / Arihant Education Foundation",
    phone: "020-67240900",
    email: "info@arihantcollege.ac.in",
    website: "https://arihantcollege.ac.in",
    image: "/images/campuses/campus_architecture_7.jpg",
    img: "/images/campuses/campus_architecture_7.jpg",
    verified: true,
    courses: [
      { name: "B.Com", title: "Bachelor of Commerce", duration: "3 Years", fees: "₹90,000", fee: "₹90,000", eligibility: "10+2 with Commerce / Arts / Science (45%)", type: "COMMERCE", intake: 120 },
      { name: "BBA", title: "Bachelor of Business Administration", duration: "3 Years", fees: "₹1,20,000", fee: "₹1,20,000", eligibility: "10+2 in any stream (45%)", type: "MANAGEMENT", intake: 80 },
      { name: "B.Sc (CS)", title: "Bachelor of Science in Computer Science", duration: "3 Years", fees: "₹1,35,000", fee: "₹1,35,000", eligibility: "10+2 with Mathematics (45%)", type: "COMPUTER APPLICATIONS", intake: 80 }
    ]
  },
  181: {
    name: "Chetana's Hazarimal Somani College of Commerce & Economics (Chetana College Bandra East, Mumbai)",
    address: "Chetana Mahavidyalaya Marg, Survey No. 341, Bandra East, Mumbai - 400051, Maharashtra",
    city: "Mumbai",
    state: "Maharashtra",
    type: "Private / Grant-in-Aid (Premier Commerce & Economics College)",
    ownership: "Private / Chetana Trust",
    phone: "022-26422750",
    email: "info@chetanacollege.in",
    website: "https://chetanacollege.in",
    image: "/images/campuses/chetana_bandra.jpg",
    img: "/images/campuses/chetana_bandra.jpg",
    verified: true,
    courses: [
      { name: "B.Com (BAF)", title: "Bachelor of Commerce in Accounting & Finance", duration: "3 Years", fees: "₹95,000", fee: "₹95,000", eligibility: "10+2 with Commerce (45%)", type: "COMMERCE", intake: 120 },
      { name: "BMS", title: "Bachelor of Management Studies", duration: "3 Years", fees: "₹1,10,000", fee: "₹1,10,000", eligibility: "10+2 in any stream (45%)", type: "MANAGEMENT", intake: 120 },
      { name: "M.Com", title: "Master of Commerce (Advanced Accountancy)", duration: "2 Years", fees: "₹45,000", fee: "₹45,000", eligibility: "B.Com Degree (45%)", type: "COMMERCE", intake: 60 }
    ]
  },
  182: {
    name: "Sharda School of Business Studies, Sharda University (SUAT Greater Noida)",
    address: "Plot No. 32-34, Knowledge Park III, Greater Noida, Gautam Buddha Nagar - 201310, Uttar Pradesh",
    city: "Greater Noida",
    state: "Uttar Pradesh",
    type: "Private University (Sharda University)",
    ownership: "Private / Sharda Educational Trust",
    phone: "0120-4570000",
    email: "admission@sharda.ac.in",
    website: "https://www.sharda.ac.in",
    image: "/images/campuses/campus_architecture_9.jpg",
    img: "/images/campuses/campus_architecture_9.jpg",
    verified: true,
    courses: [
      { name: "BBA", title: "Bachelor of Business Administration (General / International Business)", duration: "3 Years", fees: "₹6,30,000", fee: "₹6,30,000", eligibility: "10+2 in any stream (50%) + SUAT / CUET", type: "MANAGEMENT", intake: 240 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹8,50,000", fee: "₹8,50,000", eligibility: "Graduation (50%) + SUAT / CAT / MAT / XAT", type: "MANAGEMENT", intake: 180 },
      { name: "B.Com (Hons)", title: "Bachelor of Commerce (Honours)", duration: "3 Years", fees: "₹4,80,000", fee: "₹4,80,000", eligibility: "10+2 with Commerce / Mathematics (50%)", type: "COMMERCE", intake: 120 }
    ]
  },
  183: {
    name: "University of Delhi (DU New Delhi)",
    address: "University Enclave, North Campus / South Campus, New Delhi - 110007, Delhi NCR",
    city: "New Delhi",
    state: "Delhi NCR",
    type: "Public/Government (Central University - 1922, NIRF #1)",
    ownership: "Government of India / Ministry of Education (Act of Parliament)",
    phone: "011-27006900",
    email: "registrar@du.ac.in",
    website: "https://www.du.ac.in",
    image: "/images/campuses/campus_architecture_10.jpg",
    img: "/images/campuses/campus_architecture_10.jpg",
    verified: true,
    courses: [
      { name: "BA (Hons) Econ", title: "Bachelor of Arts (Honours) in Economics", duration: "3/4 Years", fees: "₹24,000", fee: "₹24,000", eligibility: "10+2 with Mathematics (CUET UG)", type: "ARTS", intake: 120 },
      { name: "B.Sc (Hons) CS", title: "Bachelor of Science (Honours) in Computer Science", duration: "3/4 Years", fees: "₹36,000", fee: "₹36,000", eligibility: "10+2 with PCM (CUET UG)", type: "SCIENCE", intake: 90 },
      { name: "MBA (FMS)", title: "Master of Business Administration (Faculty of Management Studies)", duration: "2 Years", fees: "₹2,00,000", fee: "₹2,00,000", eligibility: "Graduation (50%) + CAT (Percentile >99)", type: "MANAGEMENT", intake: 251 }
    ]
  }
};

const siteData = JSON.parse(fs.readFileSync(SITE_DATA_PATH, 'utf8'));
let updatedCount = 0;

for (let i = 0; i < siteData.colleges.length; i++) {
  const col = siteData.colleges[i];
  if (batch61Updates[col.id]) {
    const upd = batch61Updates[col.id];
    Object.assign(col, upd);
    updatedCount++;
    console.log(`Updated ID: ${col.id} - ${col.name}`);
  }
}

fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(siteData, null, 2), 'utf8');
console.log(`Successfully updated ${updatedCount} colleges in ${SITE_DATA_PATH}`);
