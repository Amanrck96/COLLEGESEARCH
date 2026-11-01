const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const SITE_DATA_PATH = path.join(BASE_DIR, 'public', 'siteData.json');

const batch60Updates = {
  160: {
    name: "Ideal Institute of Technology (IIT Wada)",
    address: "Gut No. 40, Pimplaj Road, Village Posheri, Taluka Wada, Palghar District (Thane) - 421303, Maharashtra",
    city: "Wada",
    state: "Maharashtra",
    type: "Private (Engineering Institute / Mumbai University Affiliated)",
    ownership: "Private / Ideal Educational Society",
    phone: "02526-271700",
    email: "principal@idealinstitute.edu.in",
    website: "https://www.idealinstitute.edu.in",
    image: "/images/campuses/campus_architecture_1.jpg",
    img: "/images/campuses/campus_architecture_1.jpg",
    verified: true,
    courses: [
      { name: "B.E. (Civil)", title: "Bachelor of Engineering in Civil Engineering", duration: "4 Years", fees: "₹2,60,000", fee: "₹2,60,000", eligibility: "10+2 with PCM (45%) + MHT CET / JEE Main", type: "ENGINEERING", intake: 60 },
      { name: "B.E. (Computer)", title: "Bachelor of Engineering in Computer Engineering", duration: "4 Years", fees: "₹2,80,000", fee: "₹2,80,000", eligibility: "10+2 with PCM (45%) + MHT CET / JEE Main", type: "ENGINEERING", intake: 60 },
      { name: "B.E. (Mechanical)", title: "Bachelor of Engineering in Mechanical Engineering", duration: "4 Years", fees: "₹2,50,000", fee: "₹2,50,000", eligibility: "10+2 with PCM (45%) + MHT CET", type: "ENGINEERING", intake: 60 }
    ]
  },
  161: {
    name: "Government Polytechnic, Chhatrapati Sambhajinagar (GPA)",
    address: "Osmanpura, Chhatrapati Sambhajinagar (Aurangabad) - 431005, Maharashtra",
    city: "Chhatrapati Sambhajinagar",
    state: "Maharashtra",
    type: "Public/Government (Autonomous Polytechnic under DTE Maharashtra)",
    ownership: "Government of Maharashtra / Directorate of Technical Education",
    phone: "0240-2334724",
    email: "principal.gpaurangabad@dtemaharashtra.gov.in",
    website: "https://gpabad.ac.in",
    image: "/images/campuses/campus_architecture_2.jpg",
    img: "/images/campuses/campus_architecture_2.jpg",
    verified: true,
    courses: [
      { name: "Diploma (Computer)", title: "Diploma in Computer Engineering", duration: "3 Years", fees: "₹24,000", fee: "₹24,000", eligibility: "SSC / 10th Pass (35%) + CAP", type: "ENGINEERING", intake: 60 },
      { name: "Diploma (Mechanical)", title: "Diploma in Mechanical Engineering", duration: "3 Years", fees: "₹24,000", fee: "₹24,000", eligibility: "SSC / 10th Pass (35%) + CAP", type: "ENGINEERING", intake: 120 },
      { name: "Diploma (Civil)", title: "Diploma in Civil Engineering", duration: "3 Years", fees: "₹24,000", fee: "₹24,000", eligibility: "SSC / 10th Pass (35%) + CAP", type: "ENGINEERING", intake: 60 }
    ]
  },
  162: {
    name: "MGM's College of Engineering and Technology (MGMCET Navi Mumbai)",
    address: "At & Post Kamothe, Sector 8, Junction of NH-4 & Sion-Panvel Expressway, Navi Mumbai - 410209, Maharashtra",
    city: "Navi Mumbai",
    state: "Maharashtra",
    type: "Private (Engineering College / Mumbai University Affiliated)",
    ownership: "Private / Mahatma Gandhi Mission Trust",
    phone: "022-27433403",
    email: "mgmcet@mgmmumbai.ac.in",
    website: "https://www.mgmcenm.edu.in",
    image: "/images/campuses/campus_mgm_navi_mumbai.jpg",
    img: "/images/campuses/campus_mgm_navi_mumbai.jpg",
    verified: true,
    courses: [
      { name: "B.Tech (Computer)", title: "Bachelor of Technology in Computer Engineering", duration: "4 Years", fees: "₹4,80,000", fee: "₹4,80,000", eligibility: "10+2 with PCM (45%) + MHT CET / JEE Main", type: "ENGINEERING", intake: 180 },
      { name: "B.Tech (IT)", title: "Bachelor of Technology in Information Technology", duration: "4 Years", fees: "₹4,60,000", fee: "₹4,60,000", eligibility: "10+2 with PCM (45%) + MHT CET / JEE Main", type: "ENGINEERING", intake: 120 },
      { name: "B.Tech (Biomedical)", title: "Bachelor of Technology in Biomedical Engineering", duration: "4 Years", fees: "₹4,20,000", fee: "₹4,20,000", eligibility: "10+2 with PCM / PCB (45%) + MHT CET", type: "ENGINEERING", intake: 60 }
    ]
  },
  163: {
    name: "Karmaveer Bhaurao Patil Institute of Management Studies & Research (KBPIMSR Satara)",
    address: "Survey No. 467, 468/2, At Post Varye, Old Pune-Bangalore Highway, Satara - 415015, Maharashtra",
    city: "Satara",
    state: "Maharashtra",
    type: "Private / Grant-in-Aid (Rayat Shikshan Sanstha)",
    ownership: "Private / Rayat Shikshan Sanstha",
    phone: "02162-261088",
    email: "mba.kbp@gmail.com",
    website: "https://www.kbpimsr.ac.in",
    image: "/images/campuses/campus_architecture_4.jpg",
    img: "/images/campuses/campus_architecture_4.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹1,80,000", fee: "₹1,80,000", eligibility: "Graduation (50%) + MAH MBA CET / CMAT / CAT", type: "MANAGEMENT", intake: 120 },
      { name: "BCA", title: "Bachelor of Computer Applications", duration: "3 Years", fees: "₹90,000", fee: "₹90,000", eligibility: "10+2 in any stream (45%)", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "BBA", title: "Bachelor of Business Administration", duration: "3 Years", fees: "₹85,000", fee: "₹85,000", eligibility: "10+2 in any stream (45%)", type: "MANAGEMENT", intake: 60 }
    ]
  },
  164: {
    name: "Padmabhooshan Vasantraodada Patil Institute of Technology (PVPIT Sangli)",
    address: "At & Post Budhgaon, Taluka Miraj, Sangli District - 416304, Maharashtra",
    city: "Sangli",
    state: "Maharashtra",
    type: "Private / Grant-in-Aid (Engineering College / Shivaji University)",
    ownership: "Private / Vasantraodada Patil Shikshan Sanstha",
    phone: "0233-2580307",
    email: "pvpitbudhgaon@gmail.com",
    website: "https://www.pvpitsangli.edu.in",
    image: "/images/campuses/campus_architecture_5.jpg",
    img: "/images/campuses/campus_architecture_5.jpg",
    verified: true,
    courses: [
      { name: "B.Tech (CSE)", title: "Bachelor of Technology in Computer Science & Engineering", duration: "4 Years", fees: "₹3,80,000", fee: "₹3,80,000", eligibility: "10+2 with PCM (45%) + MHT CET / JEE Main", type: "ENGINEERING", intake: 120 },
      { name: "B.Tech (Civil)", title: "Bachelor of Technology in Civil Engineering", duration: "4 Years", fees: "₹3,40,000", fee: "₹3,40,000", eligibility: "10+2 with PCM (45%) + MHT CET", type: "ENGINEERING", intake: 60 },
      { name: "B.Tech (Mechanical)", title: "Bachelor of Technology in Mechanical Engineering", duration: "4 Years", fees: "₹3,40,000", fee: "₹3,40,000", eligibility: "10+2 with PCM (45%) + MHT CET", type: "ENGINEERING", intake: 60 }
    ]
  },
  166: {
    name: "S.P. Jain Institute of Management and Research (SPJIMR Mumbai)",
    address: "Munshi Nagar, Dadabhai Road, Andheri West, Mumbai - 400058, Maharashtra",
    city: "Mumbai",
    state: "Maharashtra",
    type: "Private (Autonomous Management Institute, NIRF #16 Management)",
    ownership: "Private / Bharatiya Vidya Bhavan",
    phone: "022-26237454",
    email: "admissions.pgdm@spjimr.org",
    website: "https://www.spjimr.org",
    image: "/images/campuses/campus_architecture_6.jpg",
    img: "/images/campuses/campus_architecture_6.jpg",
    verified: true,
    courses: [
      { name: "PGDM", title: "Post Graduate Diploma in Management", duration: "2 Years", fees: "₹22,50,000", fee: "₹22,50,000", eligibility: "Graduation (50%) + CAT / GMAT Score", type: "MANAGEMENT", intake: 240 },
      { name: "PGPM", title: "Post Graduate Programme in Management (Executive)", duration: "18 Months", fees: "₹21,00,000", fee: "₹21,00,000", eligibility: "Graduation + Minimum 5 Years Work Experience", type: "MANAGEMENT", intake: 120 },
      { name: "PGDM (Online)", title: "Post Graduate Diploma in Management (Online / Hybrid)", duration: "2 Years", fees: "₹10,00,000", fee: "₹10,00,000", eligibility: "Graduation + Minimum 3 Years Work Experience", type: "MANAGEMENT", intake: 60 }
    ]
  },
  167: {
    name: "Yashwantrao Chavan School of Rural Development (YCSRD Kolhapur)",
    address: "Shivaji University Campus, Vidyanagar, Kolhapur - 416004, Maharashtra",
    city: "Kolhapur",
    state: "Maharashtra",
    type: "Public/Government (Autonomous School of Shivaji University)",
    ownership: "Government of Maharashtra / Shivaji University",
    phone: "0231-2609437",
    email: "ycsrd@unishivaji.ac.in",
    website: "https://www.unishivaji.ac.in/ycsrd",
    image: "/images/campuses/campus_architecture_7.jpg",
    img: "/images/campuses/campus_architecture_7.jpg",
    verified: true,
    courses: [
      { name: "MBA (Rural Mgmt)", title: "Master of Business Administration in Rural Management", duration: "2 Years", fees: "₹85,000", fee: "₹85,000", eligibility: "Graduation in any discipline (50%) + Entrance", type: "MANAGEMENT", intake: 60 },
      { name: "MSW", title: "Master of Social Work (Rural Community Development)", duration: "2 Years", fees: "₹45,000", fee: "₹45,000", eligibility: "Graduation in any discipline (45%)", type: "SOCIAL WORK", intake: 60 },
      { name: "M.Sc (Rural Tech)", title: "Master of Science in Rural Technology", duration: "2 Years", fees: "₹55,000", fee: "₹55,000", eligibility: "B.Sc Degree with Science background (50%)", type: "SCIENCE", intake: 30 }
    ]
  },
  169: {
    name: "Shreeyash Institute of Management Studies and Research (SIMSR)",
    address: "Gut No. 258/2, Satara Parisar, Near SRPF Camp, Beed Bypass Road, Chhatrapati Sambhajinagar - 431010, Maharashtra",
    city: "Chhatrapati Sambhajinagar",
    state: "Maharashtra",
    type: "Private (Management Institute / BAMU Affiliated)",
    ownership: "Private / Shreeyash Pratishthan",
    phone: "0240-6608777",
    email: "mba@syp.ac.in",
    website: "https://syp.ac.in",
    image: "/images/campuses/campus_architecture_8.jpg",
    img: "/images/campuses/campus_architecture_8.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration (Marketing/Finance/HR)", duration: "2 Years", fees: "₹1,60,000", fee: "₹1,60,000", eligibility: "Graduation (50%) + MAH MBA CET / CMAT", type: "MANAGEMENT", intake: 120 },
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹1,40,000", fee: "₹1,40,000", eligibility: "BCA / B.Sc with Mathematics (50%) + MAH MCA CET", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "BBA", title: "Bachelor of Business Administration", duration: "3 Years", fees: "₹75,000", fee: "₹75,000", eligibility: "10+2 in any stream (45%)", type: "MANAGEMENT", intake: 60 }
    ]
  },
  170: {
    name: "MGM Institute of Management and Research (MGM IOM Aurangabad)",
    address: "MGM Campus, N-6, CIDCO, Chhatrapati Sambhajinagar (Aurangabad) - 431003, Maharashtra",
    city: "Chhatrapati Sambhajinagar",
    state: "Maharashtra",
    type: "Private (Constituent Institute of MGM University)",
    ownership: "Private / Mahatma Gandhi Mission Trust",
    phone: "0240-2483405",
    email: "info@mgmiom.org",
    website: "https://mgmiom.org",
    image: "/images/campuses/campus_architecture_9.jpg",
    img: "/images/campuses/campus_architecture_9.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹2,60,000", fee: "₹2,60,000", eligibility: "Graduation (50%) + MGM MAT / MAH MBA CET", type: "MANAGEMENT", intake: 180 },
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹2,20,000", fee: "₹2,20,000", eligibility: "Graduation with Mathematics / CS (50%)", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "BBA", title: "Bachelor of Business Administration", duration: "3 Years", fees: "₹1,80,000", fee: "₹1,80,000", eligibility: "10+2 in any stream (50%)", type: "MANAGEMENT", intake: 120 }
    ]
  },
  172: {
    name: "Rajiv Gandhi College of Engineering (RGCOE Ahmednagar)",
    address: "Vitthal Nagar, Kokate Vasti, At & Post Karjule Harya, Taluka Parner, Ahmednagar District - 414304, Maharashtra",
    city: "Ahmednagar",
    state: "Maharashtra",
    type: "Private (Engineering College / SPPU Pune Affiliated)",
    ownership: "Private / Shreemant Thorat Pratishthan",
    phone: "02488-213123",
    email: "rgcoe.parner@gmail.com",
    website: "https://rgei.ac.in",
    image: "/images/campuses/campus_architecture_10.jpg",
    img: "/images/campuses/campus_architecture_10.jpg",
    verified: true,
    courses: [
      { name: "B.E. (Computer)", title: "Bachelor of Engineering in Computer Engineering", duration: "4 Years", fees: "₹2,80,000", fee: "₹2,80,000", eligibility: "10+2 with PCM (45%) + MHT CET / JEE Main", type: "ENGINEERING", intake: 60 },
      { name: "B.E. (Mechanical)", title: "Bachelor of Engineering in Mechanical Engineering", duration: "4 Years", fees: "₹2,40,000", fee: "₹2,40,000", eligibility: "10+2 with PCM (45%) + MHT CET", type: "ENGINEERING", intake: 60 },
      { name: "B.E. (Civil)", title: "Bachelor of Engineering in Civil Engineering", duration: "4 Years", fees: "₹2,40,000", fee: "₹2,40,000", eligibility: "10+2 with PCM (45%) + MHT CET", type: "ENGINEERING", intake: 60 }
    ]
  }
};

const siteData = JSON.parse(fs.readFileSync(SITE_DATA_PATH, 'utf8'));
let updatedCount = 0;

for (let i = 0; i < siteData.colleges.length; i++) {
  const col = siteData.colleges[i];
  if (batch60Updates[col.id]) {
    const upd = batch60Updates[col.id];
    Object.assign(col, upd);
    updatedCount++;
    console.log(`Updated ID: ${col.id} - ${col.name}`);
  }
}

fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(siteData, null, 2), 'utf8');
console.log(`Successfully updated ${updatedCount} colleges in ${SITE_DATA_PATH}`);
