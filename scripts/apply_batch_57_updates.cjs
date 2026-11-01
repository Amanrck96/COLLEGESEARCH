const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const SITE_DATA_PATH = path.join(BASE_DIR, 'public', 'siteData.json');

const batch57Updates = {
  129: {
    name: "A.J. Institute of Medical Sciences and Research Centre (AJIMS Mangaluru)",
    address: "N.H. 66, Kuntikana, Mangaluru - 575004, Dakshina Kannada, Karnataka",
    city: "Mangaluru",
    state: "Karnataka",
    type: "Private (Medical College & Research Centre / RGUHS Affiliated)",
    ownership: "Private / Laxmi Memorial Education Trust",
    phone: "0824-2225533",
    email: "deanajims@ajims.edu.in",
    website: "https://www.ajims.edu.in",
    image: "/images/campuses/campus_architecture_1.jpg",
    img: "/images/campuses/campus_architecture_1.jpg",
    verified: true,
    courses: [
      { name: "MBBS", title: "Bachelor of Medicine and Bachelor of Surgery", duration: "5.5 Years", fees: "₹74,50,000", fee: "₹74,50,000", eligibility: "10+2 with PCB (50%) + NEET UG Rank", type: "MEDICAL", intake: 150 },
      { name: "MD (General Medicine)", title: "Doctor of Medicine in General Medicine", duration: "3 Years", fees: "₹72,00,000", fee: "₹72,00,000", eligibility: "MBBS Degree + NEET PG Rank", type: "MEDICAL", intake: 12 },
      { name: "MS (Orthopaedics)", title: "Master of Surgery in Orthopaedics", duration: "3 Years", fees: "₹72,00,000", fee: "₹72,00,000", eligibility: "MBBS Degree + NEET PG Rank", type: "MEDICAL", intake: 8 }
    ]
  },
  130: {
    name: "Bharath Institute of Medical Sciences (BIMS Mysuru - Emversity)",
    address: "#50/1, Hebbal Industrial Area, Mysuru - 570016, Karnataka",
    city: "Mysuru",
    state: "Karnataka",
    type: "Private (Allied Health Sciences Institute)",
    ownership: "Private / Bharath Education Society & Emversity",
    phone: "0821-2404040",
    email: "info@bims-india.com",
    website: "https://www.bims-india.com",
    image: "/images/campuses/campus_architecture_2.jpg",
    img: "/images/campuses/campus_architecture_2.jpg",
    verified: true,
    courses: [
      { name: "B.Sc (MLT)", title: "Bachelor of Science in Medical Laboratory Technology", duration: "3.5 Years", fees: "₹2,80,000", fee: "₹2,80,000", eligibility: "10+2 with PCB (45%)", type: "PARAMEDICAL", intake: 60 },
      { name: "B.Sc (OTAT)", title: "Bachelor of Science in Operation Theatre & Anaesthesia Technology", duration: "3.5 Years", fees: "₹3,20,000", fee: "₹3,20,000", eligibility: "10+2 with PCB (45%)", type: "PARAMEDICAL", intake: 60 },
      { name: "B.Sc (Emergency)", title: "Bachelor of Science in Emergency & Trauma Care Technology", duration: "3.5 Years", fees: "₹3,00,000", fee: "₹3,00,000", eligibility: "10+2 with PCB (45%)", type: "PARAMEDICAL", intake: 40 }
    ]
  },
  131: {
    name: "HCG College of Allied Health Sciences (HCG AHS Bengaluru)",
    address: "Healthcare Global Enterprises, #8, P. Kalinga Rao Road, Sampangi Rama Nagar, Bengaluru - 560027, Karnataka",
    city: "Bengaluru",
    state: "Karnataka",
    type: "Private (Specialized Oncology & Allied Health Institute)",
    ownership: "Private / HealthCare Global Enterprises (HCG)",
    phone: "080-40206000",
    email: "academics@hcgoncology.com",
    website: "https://www.hcgoncology.com",
    image: "/images/campuses/campus_architecture_3.jpg",
    img: "/images/campuses/campus_architecture_3.jpg",
    verified: true,
    courses: [
      { name: "B.Sc (Radiotherapy)", title: "Bachelor of Science in Radiotherapy Technology", duration: "3.5 Years", fees: "₹3,50,000", fee: "₹3,50,000", eligibility: "10+2 with PCB (45%)", type: "PARAMEDICAL", intake: 40 },
      { name: "B.Sc (MIT)", title: "Bachelor of Science in Medical Imaging Technology", duration: "3.5 Years", fees: "₹3,40,000", fee: "₹3,40,000", eligibility: "10+2 with PCB (45%)", type: "PARAMEDICAL", intake: 40 },
      { name: "B.Sc (Oncology Care)", title: "Bachelor of Science in Oncology Care Technology", duration: "3.5 Years", fees: "₹3,20,000", fee: "₹3,20,000", eligibility: "10+2 with PCB (45%)", type: "PARAMEDICAL", intake: 30 }
    ]
  },
  132: {
    name: "Adichunchanagiri University (ACU Mandya)",
    address: "B.G. Nagara, Nagamangala Taluk, Mandya District - 571448, Karnataka",
    city: "Mandya",
    state: "Karnataka",
    type: "Private University (State Private University)",
    ownership: "Private / Sri Adichunchanagiri Shikshana Trust",
    phone: "08234-287285",
    email: "registrar@acu.edu.in",
    website: "https://acu.edu.in",
    image: "/images/campuses/campus_architecture_4.jpg",
    img: "/images/campuses/campus_architecture_4.jpg",
    verified: true,
    courses: [
      { name: "MBBS", title: "Bachelor of Medicine and Bachelor of Surgery (AIMS)", duration: "5.5 Years", fees: "₹74,00,000", fee: "₹74,00,000", eligibility: "10+2 with PCB (50%) + NEET UG Rank", type: "MEDICAL", intake: 150 },
      { name: "B.Tech (CSE)", title: "Bachelor of Technology in Computer Science & Engineering (BGSIT)", duration: "4 Years", fees: "₹7,20,000", fee: "₹7,20,000", eligibility: "10+2 with PCM (45%) + KCET / COMEDK", type: "ENGINEERING", intake: 180 },
      { name: "B.Pharm", title: "Bachelor of Pharmacy (SACCP)", duration: "4 Years", fees: "₹4,20,000", fee: "₹4,20,000", eligibility: "10+2 with PCM / PCB (45%)", type: "PHARMACY", intake: 100 }
    ]
  },
  133: {
    name: "KLE Society's College of Pharmacy, Belagavi (KLE College of Pharmacy)",
    address: "JNMC Campus, Nehru Nagar, Belagavi - 590010, Karnataka",
    city: "Belagavi",
    state: "Karnataka",
    type: "Private (Constituent College of KAHER)",
    ownership: "Private / KLE Society",
    phone: "0831-2471399",
    email: "klepharmb@yahoo.com",
    website: "https://www.klepharm.edu",
    image: "/images/campuses/campus_architecture_5.jpg",
    img: "/images/campuses/campus_architecture_5.jpg",
    verified: true,
    courses: [
      { name: "B.Pharm", title: "Bachelor of Pharmacy", duration: "4 Years", fees: "₹5,20,000", fee: "₹5,20,000", eligibility: "10+2 with PCM / PCB (50%)", type: "PHARMACY", intake: 100 },
      { name: "Pharm.D", title: "Doctor of Pharmacy", duration: "6 Years", fees: "₹12,60,000", fee: "₹12,60,000", eligibility: "10+2 with PCM / PCB (50%)", type: "PHARMACY", intake: 30 },
      { name: "M.Pharm (Pharmaceutics)", title: "Master of Pharmacy in Pharmaceutics", duration: "2 Years", fees: "₹3,40,000", fee: "₹3,40,000", eligibility: "B.Pharm Degree (55%) + GPAT", type: "PHARMACY", intake: 15 }
    ]
  },
  134: {
    name: "Ramaiah Medical College, Bangalore (MSRMC Bengaluru)",
    address: "MSR Nagar, MSRIT Post, Mathikere, Bengaluru - 560054, Karnataka",
    city: "Bengaluru",
    state: "Karnataka",
    type: "Private (Autonomous Medical College / Gokula Foundation)",
    ownership: "Private / Gokula Education Foundation (Medical)",
    phone: "080-23605190",
    email: "ms_rmc@msrmc.ac.in",
    website: "https://www.msrmc.ac.in",
    image: "/images/campuses/ramaiah_bangalore.jpg",
    img: "/images/campuses/ramaiah_bangalore.jpg",
    verified: true,
    courses: [
      { name: "MBBS", title: "Bachelor of Medicine and Bachelor of Surgery", duration: "5.5 Years", fees: "₹76,50,000", fee: "₹76,50,000", eligibility: "10+2 with PCB (50%) + NEET UG Rank", type: "MEDICAL", intake: 150 },
      { name: "MD (Radio Diagnosis)", title: "Doctor of Medicine in Radio Diagnosis", duration: "3 Years", fees: "₹85,00,000", fee: "₹85,00,000", eligibility: "MBBS Degree + NEET PG Rank", type: "MEDICAL", intake: 10 },
      { name: "MS (Orthopaedics)", title: "Master of Surgery in Orthopaedics", duration: "3 Years", fees: "₹75,00,000", fee: "₹75,00,000", eligibility: "MBBS Degree + NEET PG Rank", type: "MEDICAL", intake: 8 }
    ]
  },
  135: {
    name: "Srinivas University, Mangalore (SU Mangaluru)",
    address: "Srinivas Nagar, Mukka, Surathkal, Mangaluru - 574146, Karnataka",
    city: "Mangaluru",
    state: "Karnataka",
    type: "Private University (State Private University)",
    ownership: "Private / A. Shama Rao Foundation",
    phone: "0824-2477456",
    email: "info@srinivasuniversity.edu.in",
    website: "https://srinivasuniversity.edu.in",
    image: "/images/campuses/campus_architecture_7.jpg",
    img: "/images/campuses/campus_architecture_7.jpg",
    verified: true,
    courses: [
      { name: "B.Tech (CSE)", title: "Bachelor of Technology in Computer Science & Engineering", duration: "4 Years", fees: "₹6,80,000", fee: "₹6,80,000", eligibility: "10+2 with PCM (45%) + SUET / KCET", type: "ENGINEERING", intake: 180 },
      { name: "MBBS", title: "Bachelor of Medicine and Surgery (SIMS&RC)", duration: "5.5 Years", fees: "₹74,00,000", fee: "₹74,00,000", eligibility: "10+2 with PCB (50%) + NEET UG Rank", type: "MEDICAL", intake: 150 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹2,80,000", fee: "₹2,80,000", eligibility: "Graduation (50%) + MAT / KMAT / PGCET", type: "MANAGEMENT", intake: 120 }
    ]
  },
  136: {
    name: "Jawaharlal Nehru Medical College, Belagavi (JNMC KAHER)",
    address: "KLE Academy of Higher Education, JNMC Campus, Nehru Nagar, Belagavi - 590010, Karnataka",
    city: "Belagavi",
    state: "Karnataka",
    type: "Deemed to be University (Constituent Medical College of KAHER)",
    ownership: "Private / KLE Society",
    phone: "0831-2471350",
    email: "principal@jnmc.edu",
    website: "https://www.jnmc.edu",
    image: "/images/campuses/campus_architecture_8.jpg",
    img: "/images/campuses/campus_architecture_8.jpg",
    verified: true,
    courses: [
      { name: "MBBS", title: "Bachelor of Medicine and Bachelor of Surgery", duration: "5.5 Years", fees: "₹82,50,000", fee: "₹82,50,000", eligibility: "10+2 with PCB (50%) + NEET UG Rank", type: "MEDICAL", intake: 200 },
      { name: "MD (General Medicine)", title: "Doctor of Medicine in General Medicine", duration: "3 Years", fees: "₹78,00,000", fee: "₹78,00,000", eligibility: "MBBS Degree + NEET PG Rank", type: "MEDICAL", intake: 18 },
      { name: "MS (OBG)", title: "Master of Surgery in Obstetrics & Gynaecology", duration: "3 Years", fees: "₹78,00,000", fee: "₹78,00,000", eligibility: "MBBS Degree + NEET PG Rank", type: "MEDICAL", intake: 15 }
    ]
  },
  137: {
    name: "JSS Medical College, Mysuru (JSSMC JSSAHER)",
    address: "Sri Shivarathreeshwara Nagar, Bannimantap, Mysuru - 570015, Karnataka",
    city: "Mysuru",
    state: "Karnataka",
    type: "Deemed to be University (Constituent College of JSS AHER, NIRF Top 35 Medical)",
    ownership: "Private / JSS Mahavidyapeetha",
    phone: "0821-2548337",
    email: "jssmc09@gmail.com",
    website: "https://jssuni.edu.in",
    image: "/images/campuses/campus_architecture_9.jpg",
    img: "/images/campuses/campus_architecture_9.jpg",
    verified: true,
    courses: [
      { name: "MBBS", title: "Bachelor of Medicine and Bachelor of Surgery", duration: "5.5 Years", fees: "₹84,00,000", fee: "₹84,00,000", eligibility: "10+2 with PCB (50%) + NEET UG Rank", type: "MEDICAL", intake: 250 },
      { name: "MD (General Medicine)", title: "Doctor of Medicine in General Medicine", duration: "3 Years", fees: "₹78,00,000", fee: "₹78,00,000", eligibility: "MBBS Degree + NEET PG Rank", type: "MEDICAL", intake: 20 },
      { name: "MS (General Surgery)", title: "Master of Surgery in General Surgery", duration: "3 Years", fees: "₹78,00,000", fee: "₹78,00,000", eligibility: "MBBS Degree + NEET PG Rank", type: "MEDICAL", intake: 16 }
    ]
  },
  138: {
    name: "Kasturba Medical College, Manipal (KMC Manipal - MAHE)",
    address: "Tiger Circle Road, Madhav Nagar, Manipal, Udupi District - 576104, Karnataka",
    city: "Manipal",
    state: "Karnataka",
    type: "Deemed to be University (Constituent of MAHE - IoE, NIRF Top 10 Medical)",
    ownership: "Private / Manipal Academy of Higher Education",
    phone: "0820-2922367",
    email: "kmc.mlr@manipal.edu",
    website: "https://manipal.edu/kmc-manipal.html",
    image: "/images/campuses/campus_architecture_10.jpg",
    img: "/images/campuses/campus_architecture_10.jpg",
    verified: true,
    courses: [
      { name: "MBBS", title: "Bachelor of Medicine and Bachelor of Surgery", duration: "5.5 Years", fees: "₹70,80,000", fee: "₹70,80,000", eligibility: "10+2 with PCB (50%) + NEET UG Rank", type: "MEDICAL", intake: 250 },
      { name: "MD (General Medicine)", title: "Doctor of Medicine in General Medicine", duration: "3 Years", fees: "₹75,00,000", fee: "₹75,00,000", eligibility: "MBBS Degree + NEET PG Rank", type: "MEDICAL", intake: 24 },
      { name: "MS (Orthopaedics)", title: "Master of Surgery in Orthopaedics", duration: "3 Years", fees: "₹75,00,000", fee: "₹75,00,000", eligibility: "MBBS Degree + NEET PG Rank", type: "MEDICAL", intake: 12 }
    ]
  }
};

const siteData = JSON.parse(fs.readFileSync(SITE_DATA_PATH, 'utf8'));
let updatedCount = 0;

for (let i = 0; i < siteData.colleges.length; i++) {
  const col = siteData.colleges[i];
  if (batch57Updates[col.id]) {
    const upd = batch57Updates[col.id];
    Object.assign(col, upd);
    updatedCount++;
    console.log(`Updated ID: ${col.id} - ${col.name}`);
  }
}

fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(siteData, null, 2), 'utf8');
console.log(`Successfully updated ${updatedCount} colleges in ${SITE_DATA_PATH}`);

