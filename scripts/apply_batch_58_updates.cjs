const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const SITE_DATA_PATH = path.join(BASE_DIR, 'public', 'siteData.json');

const batch58Updates = {
  139: {
    name: "Chettinad Academy of Research and Education, Kolar Campus (CARE)",
    address: "Chettinad Health City Campus, NH-75, Kolar - 563101, Karnataka",
    city: "Kolar",
    state: "Karnataka",
    type: "Deemed to be University (Off-Campus Healthcare Centre)",
    ownership: "Private / Chettinad Group",
    phone: "08152-290000",
    email: "admissions@care.edu.in",
    website: "https://kolar.care.edu.in",
    image: "/images/campuses/campus_architecture_1.jpg",
    img: "/images/campuses/campus_architecture_1.jpg",
    verified: true,
    courses: [
      { name: "B.Sc (Nursing)", title: "Bachelor of Science in Nursing", duration: "4 Years", fees: "₹4,20,000", fee: "₹4,20,000", eligibility: "10+2 with PCB (45%)", type: "NURSING", intake: 100 },
      { name: "B.Sc (MLT)", title: "Bachelor of Science in Medical Laboratory Technology", duration: "3 Years", fees: "₹2,70,000", fee: "₹2,70,000", eligibility: "10+2 with PCB (45%)", type: "PARAMEDICAL", intake: 60 },
      { name: "B.Sc (OT & AT)", title: "Bachelor of Science in Operation Theatre & Anaesthesia Technology", duration: "3 Years", fees: "₹3,00,000", fee: "₹3,00,000", eligibility: "10+2 with PCB (45%)", type: "PARAMEDICAL", intake: 40 }
    ]
  },
  140: {
    name: "Dayananda Sagar University (DSU Bengaluru)",
    address: "Innovation Campus, Kudlu Gate, Hosur Road, Bengaluru - 560068, Karnataka",
    city: "Bengaluru",
    state: "Karnataka",
    type: "Private University (State Private University)",
    ownership: "Private / Mahatma Gandhi Vidya Peetha Trust",
    phone: "080-46464200",
    email: "admissions@dsu.edu.in",
    website: "https://www.dsu.edu.in",
    image: "/images/campuses/campus_architecture_2.jpg",
    img: "/images/campuses/campus_architecture_2.jpg",
    verified: true,
    courses: [
      { name: "B.Tech (CSE)", title: "Bachelor of Technology in Computer Science & Engineering", duration: "4 Years", fees: "₹10,50,000", fee: "₹10,50,000", eligibility: "10+2 with PCM (45%) + DSAT / KCET / COMEDK", type: "ENGINEERING", intake: 360 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹6,00,000", fee: "₹6,00,000", eligibility: "Graduation (50%) + DSAT / MAT / PGCET", type: "MANAGEMENT", intake: 180 },
      { name: "B.Pharm", title: "Bachelor of Pharmacy", duration: "4 Years", fees: "₹5,20,000", fee: "₹5,20,000", eligibility: "10+2 with PCM / PCB (45%)", type: "PHARMACY", intake: 100 }
    ]
  },
  141: {
    name: "St. John's National Academy of Health Sciences (St. John's Medical College)",
    address: "Sarjapur Road, John Nagar, Koramangala, Bengaluru - 560034, Karnataka",
    city: "Bengaluru",
    state: "Karnataka",
    type: "Private (Premier Minority Medical College, NIRF Top 20)",
    ownership: "Private / Catholic Bishops' Conference of India (CBCI)",
    phone: "080-49466000",
    email: "sjmch.infodesk@stjohns.in",
    website: "https://www.stjohns.in",
    image: "/images/campuses/campus_architecture_3.jpg",
    img: "/images/campuses/campus_architecture_3.jpg",
    verified: true,
    courses: [
      { name: "MBBS", title: "Bachelor of Medicine and Bachelor of Surgery", duration: "5.5 Years", fees: "₹38,50,000", fee: "₹38,50,000", eligibility: "10+2 with PCB (50%) + NEET UG Rank", type: "MEDICAL", intake: 150 },
      { name: "MD (General Medicine)", title: "Doctor of Medicine in General Medicine", duration: "3 Years", fees: "₹36,00,000", fee: "₹36,00,000", eligibility: "MBBS Degree + NEET PG Rank", type: "MEDICAL", intake: 16 },
      { name: "MS (Orthopaedics)", title: "Master of Surgery in Orthopaedics", duration: "3 Years", fees: "₹36,00,000", fee: "₹36,00,000", eligibility: "MBBS Degree + NEET PG Rank", type: "MEDICAL", intake: 8 }
    ]
  },
  142: {
    name: "National Institute of Mental Health and Neuro Sciences (NIMHANS Bengaluru)",
    address: "Hosur Road, Near Dairy Circle, Bengaluru - 560029, Karnataka",
    city: "Bengaluru",
    state: "Karnataka",
    type: "Institute of National Importance (INI - MoHFW, NIRF #4 Medical)",
    ownership: "Government of India / Autonomous Statutory Body (NIMHANS Act 2012)",
    phone: "080-26995000",
    email: "info@nimhans.ac.in",
    website: "https://nimhans.ac.in",
    image: "/images/campuses/campus_architecture_4.jpg",
    img: "/images/campuses/campus_architecture_4.jpg",
    verified: true,
    courses: [
      { name: "MD (Psychiatry)", title: "Doctor of Medicine in Psychiatry", duration: "3 Years", fees: "₹72,00,000", fee: "₹72,000", eligibility: "MBBS Degree + INI-CET Rank", type: "MEDICAL", intake: 45 },
      { name: "DM (Neurology)", title: "Doctorate of Medicine in Neurology", duration: "3 Years", fees: "₹78,000", fee: "₹78,000", eligibility: "MD General Medicine + INI-SS Rank", type: "MEDICAL", intake: 18 },
      { name: "M.Phil (Clinical Psychology)", title: "Master of Philosophy in Clinical Psychology", duration: "2 Years", fees: "₹35,000", fee: "₹35,000", eligibility: "MA / M.Sc Psychology (55%) + NIMHANS Entrance", type: "ALLIED MEDICAL", intake: 30 }
    ]
  },
  143: {
    name: "Kasturba Medical College, Mangalore (KMC Mangalore - MAHE)",
    address: "Light House Hill Road, Hampankatta, Mangaluru - 575001, Karnataka",
    city: "Mangaluru",
    state: "Karnataka",
    type: "Deemed to be University (Constituent of MAHE - IoE, NIRF Top 30 Medical)",
    ownership: "Private / Manipal Academy of Higher Education",
    phone: "0824-2422271",
    email: "dean.kmcmlr@manipal.edu",
    website: "https://manipal.edu/kmc-mangalore.html",
    image: "/images/campuses/campus_architecture_5.jpg",
    img: "/images/campuses/campus_architecture_5.jpg",
    verified: true,
    courses: [
      { name: "MBBS", title: "Bachelor of Medicine and Bachelor of Surgery", duration: "5.5 Years", fees: "₹70,80,000", fee: "₹70,80,000", eligibility: "10+2 with PCB (50%) + NEET UG Rank", type: "MEDICAL", intake: 250 },
      { name: "MD (Paediatrics)", title: "Doctor of Medicine in Paediatrics", duration: "3 Years", fees: "₹75,00,000", fee: "₹75,00,000", eligibility: "MBBS Degree + NEET PG Rank", type: "MEDICAL", intake: 16 },
      { name: "MS (General Surgery)", title: "Master of Surgery in General Surgery", duration: "3 Years", fees: "₹75,00,000", fee: "₹75,00,000", eligibility: "MBBS Degree + NEET PG Rank", type: "MEDICAL", intake: 14 }
    ]
  },
  144: {
    name: "International Institute of Information Technology Bangalore (IIIT-B)",
    address: "26/C, Electronic City Phase 1, Hosur Road, Bengaluru - 560100, Karnataka",
    city: "Bengaluru",
    state: "Karnataka",
    type: "Deemed to be University (Section 3 UGC Act / Non-Profit PPP)",
    ownership: "Public-Private Partnership / Registered Non-Profit Society",
    phone: "080-41407777",
    email: "registrar@iiitb.ac.in",
    website: "https://www.iiitb.ac.in",
    image: "/images/campuses/iiit_bangalore_campus.jpg",
    img: "/images/campuses/iiit_bangalore_campus.jpg",
    verified: true,
    courses: [
      { name: "iMTech (CSE)", title: "Integrated Master of Technology in Computer Science & Engineering", duration: "5 Years", fees: "₹24,00,000", fee: "₹24,00,000", eligibility: "10+2 with PCM + JEE Main CRL Rank", type: "ENGINEERING", intake: 150 },
      { name: "iMTech (ECE)", title: "Integrated Master of Technology in Electronics & Communication", duration: "5 Years", fees: "₹24,00,000", fee: "₹24,00,000", eligibility: "10+2 with PCM + JEE Main CRL Rank", type: "ENGINEERING", intake: 60 },
      { name: "M.Tech (CSE)", title: "Master of Technology in Computer Science & Engineering", duration: "2 Years", fees: "₹10,50,000", fee: "₹10,50,000", eligibility: "B.E. / B.Tech in CSE / IT + GATE Score", type: "ENGINEERING", intake: 180 }
    ]
  },
  145: {
    name: "GM Institute of Technology (GMIT Davangere)",
    address: "P.B. Road, Post Box No. 4, Davangere - 577006, Karnataka",
    city: "Davangere",
    state: "Karnataka",
    type: "Private (Engineering College / VTU Affiliated)",
    ownership: "Private / Srishyla Educational Trust",
    phone: "08192-233345",
    email: "info@gmit.ac.in",
    website: "https://gmit.ac.in",
    image: "/images/campuses/campus_architecture_7.jpg",
    img: "/images/campuses/campus_architecture_7.jpg",
    verified: true,
    courses: [
      { name: "B.E. (CSE)", title: "Bachelor of Engineering in Computer Science & Engineering", duration: "4 Years", fees: "₹4,80,000", fee: "₹4,80,000", eligibility: "10+2 with PCM (45%) + KCET / COMEDK", type: "ENGINEERING", intake: 180 },
      { name: "B.E. (AIML)", title: "Bachelor of Engineering in Artificial Intelligence & Machine Learning", duration: "4 Years", fees: "₹4,80,000", fee: "₹4,80,000", eligibility: "10+2 with PCM (45%) + KCET / COMEDK", type: "ENGINEERING", intake: 60 },
      { name: "B.E. (Civil)", title: "Bachelor of Engineering in Civil Engineering", duration: "4 Years", fees: "₹3,80,000", fee: "₹3,80,000", eligibility: "10+2 with PCM (45%) + KCET", type: "ENGINEERING", intake: 60 }
    ]
  },
  146: {
    name: "PES University (PESU Bengaluru - RR Campus)",
    address: "100 Feet Ring Road, BSK III Stage, Banashankari, Bengaluru - 560085, Karnataka",
    city: "Bengaluru",
    state: "Karnataka",
    type: "Private University (State Private University)",
    ownership: "Private / People's Education Society (PES)",
    phone: "080-10297297",
    email: "admissions@pes.edu",
    website: "https://pes.edu",
    image: "/images/campuses/pes_bangalore.jpg",
    img: "/images/campuses/pes_bangalore.jpg",
    verified: true,
    courses: [
      { name: "B.Tech (CSE)", title: "Bachelor of Technology in Computer Science & Engineering", duration: "4 Years", fees: "₹18,00,000", fee: "₹18,00,000", eligibility: "10+2 with PCM (50%) + PESSAT / KCET", type: "ENGINEERING", intake: 720 },
      { name: "B.Tech (ECE)", title: "Bachelor of Technology in Electronics & Communication", duration: "4 Years", fees: "₹15,00,000", fee: "₹15,00,000", eligibility: "10+2 with PCM (50%) + PESSAT / KCET", type: "ENGINEERING", intake: 240 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹11,00,000", fee: "₹11,00,000", eligibility: "Graduation (50%) + PESSAT / MAT / PGCET", type: "MANAGEMENT", intake: 240 }
    ]
  },
  147: {
    name: "Nitte Meenakshi Institute of Technology (NMIT Bengaluru)",
    address: "Govindapura, Gollahalli, P.B. No. 6404, Yelahanka, Bengaluru - 560064, Karnataka",
    city: "Bengaluru",
    state: "Karnataka",
    type: "Private Autonomous (Engineering College / VTU Affiliated)",
    ownership: "Private / Nitte Education Trust",
    phone: "080-22167800",
    email: "principal@nmit.ac.in",
    website: "https://www.nmit.ac.in",
    image: "/images/campuses/campus_architecture_9.jpg",
    img: "/images/campuses/campus_architecture_9.jpg",
    verified: true,
    courses: [
      { name: "B.E. (CSE)", title: "Bachelor of Engineering in Computer Science & Engineering", duration: "4 Years", fees: "₹10,50,000", fee: "₹10,50,000", eligibility: "10+2 with PCM (45%) + KCET / COMEDK", type: "ENGINEERING", intake: 240 },
      { name: "B.E. (AI & DS)", title: "Bachelor of Engineering in Artificial Intelligence & Data Science", duration: "4 Years", fees: "₹10,00,000", fee: "₹10,00,000", eligibility: "10+2 with PCM (45%) + KCET / COMEDK", type: "ENGINEERING", intake: 120 },
      { name: "B.E. (Aeronautical)", title: "Bachelor of Engineering in Aeronautical Engineering", duration: "4 Years", fees: "₹8,50,000", fee: "₹8,50,000", eligibility: "10+2 with PCM (45%) + KCET / COMEDK", type: "ENGINEERING", intake: 60 }
    ]
  },
  148: {
    name: "BMS College of Engineering (BMSCE Basavanagudi, Bengaluru)",
    address: "P.O. Box No. 1908, Bull Temple Road, Basavanagudi, Bengaluru - 560019, Karnataka",
    city: "Bengaluru",
    state: "Karnataka",
    type: "Private / Grant-in-Aid (First Private Engineering College in India - 1946)",
    ownership: "Private / B.M.S. Educational Trust",
    phone: "080-26622130",
    email: "principal@bmsce.ac.in",
    website: "https://www.bmsce.ac.in",
    image: "/images/campuses/bms_bangalore.jpg",
    img: "/images/campuses/bms_bangalore.jpg",
    verified: true,
    courses: [
      { name: "B.E. (CSE)", title: "Bachelor of Engineering in Computer Science & Engineering", duration: "4 Years", fees: "₹10,00,000", fee: "₹10,00,000", eligibility: "10+2 with PCM (45%) + KCET / COMEDK", type: "ENGINEERING", intake: 360 },
      { name: "B.E. (ECE)", title: "Bachelor of Engineering in Electronics & Communication Engineering", duration: "4 Years", fees: "₹9,00,000", fee: "₹9,00,000", eligibility: "10+2 with PCM (45%) + KCET / COMEDK", type: "ENGINEERING", intake: 240 },
      { name: "B.E. (Mechanical)", title: "Bachelor of Engineering in Mechanical Engineering", duration: "4 Years", fees: "₹6,50,000", fee: "₹6,50,000", eligibility: "10+2 with PCM (45%) + KCET / COMEDK", type: "ENGINEERING", intake: 120 }
    ]
  }
};

const siteData = JSON.parse(fs.readFileSync(SITE_DATA_PATH, 'utf8'));
let updatedCount = 0;

for (let i = 0; i < siteData.colleges.length; i++) {
  const col = siteData.colleges[i];
  if (batch58Updates[col.id]) {
    const upd = batch58Updates[col.id];
    Object.assign(col, upd);
    updatedCount++;
    console.log(`Updated ID: ${col.id} - ${col.name}`);
  }
}

fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(siteData, null, 2), 'utf8');
console.log(`Successfully updated ${updatedCount} colleges in ${SITE_DATA_PATH}`);

