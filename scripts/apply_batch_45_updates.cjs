const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const SITE_DATA_PATH = path.join(BASE_DIR, 'public', 'siteData.json');

const batch45Updates = {
  12659: {
    name: "XLRI – Xavier School of Management (XLRI Jamshedpur)",
    address: "Riverside Road, Circuit House Area (East), Northern Town, Jamshedpur - 831001, Jharkhand",
    city: "Jamshedpur",
    state: "Jharkhand",
    type: "Private (Autonomous Jesuit Management School)",
    ownership: "Private / Society of Jesus (Jesuits)",
    phone: "+91-657-6653333",
    email: "admissions@xlri.ac.in",
    website: "https://www.xlri.ac.in",
    image: "/images/campuses/campus_architecture_1.jpg",
    img: "/images/campuses/campus_architecture_1.jpg",
    verified: true,
    courses: [
      { name: "PGDM (BM)", title: "Post Graduate Diploma in Management (Business Management)", duration: "2 Years", fees: "₹28,00,000", fee: "₹28,00,000", eligibility: "Graduation (50%) + XAT Exam", type: "MANAGEMENT", intake: 240 },
      { name: "PGDM (HRM)", title: "Post Graduate Diploma in Management (Human Resource Management)", duration: "2 Years", fees: "₹28,00,000", fee: "₹28,00,000", eligibility: "Graduation (50%) + XAT Exam", type: "MANAGEMENT", intake: 180 }
    ]
  },
  12658: {
    name: "Faculty of Management Studies, University of Delhi (FMS Delhi)",
    address: "Prof. N.D. Kapoor Marg, Opp. Kirori Mal College, University Enclave, North Campus, Delhi - 110007",
    city: "New Delhi",
    state: "Delhi NCR",
    type: "Public/Government (University Faculty)",
    ownership: "Government of India / University of Delhi",
    phone: "011-27666382",
    email: "adminoffice@fms.edu",
    website: "https://www.fms.edu",
    image: "/images/campuses/campus_architecture_2.jpg",
    img: "/images/campuses/campus_architecture_2.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹2,00,000", fee: "₹2,00,000", eligibility: "Graduation (50%) + CAT Exam (Percentile >99)", type: "MANAGEMENT", intake: 251 },
      { name: "Executive MBA", title: "Executive Master of Business Administration", duration: "2 Years", fees: "₹2,40,000", fee: "₹2,40,000", eligibility: "Graduation + Minimum 5 Years Work Experience", type: "MANAGEMENT", intake: 200 }
    ]
  },
  12657: {
    name: "National Law School of India University (NLSIU Bangalore)",
    address: "Gnana Bharathi Main Road, Opp. NAAC, Nagarbhavi, Bengaluru - 560072, Karnataka",
    city: "Bengaluru",
    state: "Karnataka",
    type: "Public/Government (Statutory National Law University)",
    ownership: "Government of Karnataka / Bar Council of India",
    phone: "080-23213160",
    email: "registrar@nls.ac.in",
    website: "https://www.nls.ac.in",
    image: "/images/campuses/campus_architecture_3.jpg",
    img: "/images/campuses/campus_architecture_3.jpg",
    verified: true,
    courses: [
      { name: "BA LLB (Hons)", title: "Integrated Bachelor of Arts & Bachelor of Laws (Honours)", duration: "5 Years", fees: "₹20,75,000", fee: "₹20,75,000", eligibility: "10+2 (45%) + CLAT Exam", type: "LAW", intake: 240 },
      { name: "LLM", title: "Master of Laws", duration: "1 Year", fees: "₹3,20,000", fee: "₹3,20,000", eligibility: "LLB Degree (50%) + CLAT PG Exam", type: "LAW", intake: 100 }
    ]
  },
  1: {
    name: "Andaman College (ANCOL)",
    address: "Chakkargaon, Port Blair, South Andaman, Andaman & Nicobar Islands - 744112",
    city: "Port Blair",
    state: "Andaman & Nicobar",
    type: "Public/Government",
    ownership: "Andaman & Nicobar Administration",
    phone: "03192-230158",
    email: "principalancol@gmail.com",
    website: "https://ancol.andaman.gov.in",
    image: "/images/campuses/campus_architecture_4.jpg",
    img: "/images/campuses/campus_architecture_4.jpg",
    verified: true,
    courses: [
      { name: "BA", title: "Bachelor of Arts in Economics / English / Historical Studies", duration: "3 Years", fees: "₹45,000", fee: "₹45,000", eligibility: "10+2 in any stream", type: "ARTS", intake: 120 },
      { name: "B.Com", title: "Bachelor of Commerce", duration: "3 Years", fees: "₹54,000", fee: "₹54,000", eligibility: "10+2 with Commerce / Math", type: "COMMERCE", intake: 60 },
      { name: "BBA", title: "Bachelor of Business Administration", duration: "3 Years", fees: "₹66,000", fee: "₹66,000", eligibility: "10+2 in any stream", type: "MANAGEMENT", intake: 60 }
    ]
  },
  2: {
    name: "Jawaharlal Nehru Rajkeeya Mahavidyalaya (JNRM Port Blair)",
    address: "South Point, Port Blair, South Andaman, Andaman & Nicobar Islands - 744106",
    city: "Port Blair",
    state: "Andaman & Nicobar",
    type: "Public/Government",
    ownership: "Andaman & Nicobar Administration",
    phone: "03192-232503",
    email: "jnrm@and.nic.in",
    website: "https://jnrm.and.nic.in",
    image: "/images/campuses/campus_architecture_5.jpg",
    img: "/images/campuses/campus_architecture_5.jpg",
    verified: true,
    courses: [
      { name: "B.Sc", title: "Bachelor of Science in Computer Science / Chemistry / Physics", duration: "3 Years", fees: "₹42,000", fee: "₹42,000", eligibility: "10+2 with Science", type: "SCIENCE", intake: 180 },
      { name: "MA", title: "Master of Arts in English / Political Science", duration: "2 Years", fees: "₹32,000", fee: "₹32,000", eligibility: "BA in relevant subject", type: "ARTS", intake: 60 }
    ]
  },
  3: {
    name: "Dr. B.R. Ambedkar Institute of Technology (DBRAIT Port Blair)",
    address: "Pahargaon, Port Blair, South Andaman, Andaman & Nicobar Islands - 744103",
    city: "Port Blair",
    state: "Andaman & Nicobar",
    type: "Public/Government",
    ownership: "Andaman & Nicobar Administration",
    phone: "03192-250587",
    email: "drait.andaman@gmail.com",
    website: "https://dbrait.andaman.gov.in",
    image: "/images/campuses/campus_architecture_6.jpg",
    img: "/images/campuses/campus_architecture_6.jpg",
    verified: true,
    courses: [
      { name: "B.Tech (CSE)", title: "Bachelor of Technology in Computer Science & Engineering", duration: "4 Years", fees: "₹1,80,000", fee: "₹1,80,000", eligibility: "10+2 with PCM + JEE Main", type: "ENGINEERING", intake: 60 },
      { name: "Diploma (Civil)", title: "Diploma in Civil Engineering", duration: "3 Years", fees: "₹60,000", fee: "₹60,000", eligibility: "10th Standard with Science & Math", type: "ENGINEERING", intake: 60 }
    ]
  },
  4: {
    name: "Government Polytechnic Diglipur",
    address: "Madhupur, Diglipur, North & Middle Andaman, Andaman & Nicobar Islands - 744202",
    city: "Diglipur",
    state: "Andaman & Nicobar",
    type: "Public/Government",
    ownership: "Andaman & Nicobar Administration",
    phone: "03192-272200",
    email: "gpdiglipur@gmail.com",
    website: "https://andaman.gov.in",
    image: "/images/campuses/campus_architecture_7.jpg",
    img: "/images/campuses/campus_architecture_7.jpg",
    verified: true,
    courses: [
      { name: "Diploma (Civil)", title: "Diploma in Civil Engineering", duration: "3 Years", fees: "₹36,000", fee: "₹36,000", eligibility: "10th Standard with Science & Math", type: "ENGINEERING", intake: 30 },
      { name: "Diploma (CSE)", title: "Diploma in Computer Engineering", duration: "3 Years", fees: "₹36,000", fee: "₹36,000", eligibility: "10th Standard with Science & Math", type: "ENGINEERING", intake: 30 }
    ]
  },
  5: {
    name: "Andaman & Nicobar Islands Institute of Medical Sciences (ANIIMS)",
    address: "DHS Annexe Building, Atlanta Point, Port Blair, South Andaman, Andaman & Nicobar Islands - 744104",
    city: "Port Blair",
    state: "Andaman & Nicobar",
    type: "Public/Government",
    ownership: "Andaman & Nicobar Medical Education & Research Society (ANIMERS), Govt. of India",
    phone: "03192-232605",
    email: "diraniims.and@nic.in",
    website: "https://aniims.andaman.gov.in",
    image: "/images/campuses/campus_architecture_8.jpg",
    img: "/images/campuses/campus_architecture_8.jpg",
    verified: true,
    courses: [
      { name: "MBBS", title: "Bachelor of Medicine & Bachelor of Surgery", duration: "5.5 Years", fees: "₹4,12,500", fee: "₹4,12,500", eligibility: "10+2 with PCB + NEET UG Exam", type: "MEDICAL", intake: 114 }
    ]
  },
  6: {
    name: "National Institute of Fashion Technology (NIFT Bengaluru)",
    address: "C.A. Site #21, 16th Cross, 27th Main Road, Sector 1, HSR Layout, Bengaluru - 560102, Karnataka",
    city: "Bengaluru",
    state: "Karnataka",
    type: "Institute of National Importance",
    ownership: "Ministry of Textiles, Government of India",
    phone: "080-22552550",
    email: "director.bengaluru@nift.ac.in",
    website: "https://www.nift.ac.in/bengaluru/",
    image: "/images/campuses/campus_architecture_9.jpg",
    img: "/images/campuses/campus_architecture_9.jpg",
    verified: true,
    courses: [
      { name: "B.Des (FD)", title: "Bachelor of Design in Fashion Design", duration: "4 Years", fees: "₹12,34,000", fee: "₹12,34,000", eligibility: "10+2 in any stream + NIFT Entrance Exam", type: "DESIGN", intake: 60 },
      { name: "B.FTech", title: "Bachelor of Fashion Technology in Apparel Production", duration: "4 Years", fees: "₹12,34,000", fee: "₹12,34,000", eligibility: "10+2 with PCM + NIFT Entrance Exam", type: "DESIGN", intake: 60 },
      { name: "M.Des", title: "Master of Design", duration: "2 Years", fees: "₹6,17,000", fee: "₹6,17,000", eligibility: "Undergraduate Degree + NIFT Entrance Exam", type: "DESIGN", intake: 30 }
    ]
  },
  7: {
    name: "National Institute of Fashion Technology (NIFT Mumbai)",
    address: "Plot No. 15, Sector 4, Kharghar, Navi Mumbai - 410210, Maharashtra",
    city: "Navi Mumbai",
    state: "Maharashtra",
    type: "Institute of National Importance",
    ownership: "Ministry of Textiles, Government of India",
    phone: "022-27747000",
    email: "director.mumbai@nift.ac.in",
    website: "https://www.nift.ac.in/mumbai/",
    image: "/images/campuses/campus_architecture_10.jpg",
    img: "/images/campuses/campus_architecture_10.jpg",
    verified: true,
    courses: [
      { name: "B.Des (FD)", title: "Bachelor of Design in Fashion Design", duration: "4 Years", fees: "₹12,34,000", fee: "₹12,34,000", eligibility: "10+2 in any stream + NIFT Entrance Exam", type: "DESIGN", intake: 60 },
      { name: "B.Des (FC)", title: "Bachelor of Design in Fashion Communication", duration: "4 Years", fees: "₹12,34,000", fee: "₹12,34,000", eligibility: "10+2 in any stream + NIFT Entrance Exam", type: "DESIGN", intake: 60 },
      { name: "MFM", title: "Master of Fashion Management", duration: "2 Years", fees: "₹6,17,000", fee: "₹6,17,000", eligibility: "Undergraduate Degree + NIFT Entrance Exam", type: "MANAGEMENT", intake: 40 }
    ]
  }
};

const rawData = fs.readFileSync(SITE_DATA_PATH, 'utf8');
const data = JSON.parse(rawData);
const colleges = Array.isArray(data.colleges) ? data.colleges : data;

let updatedCount = 0;
for (const col of colleges) {
  if (batch45Updates[col.id]) {
    const upd = batch45Updates[col.id];
    Object.assign(col, upd);
    updatedCount++;
    console.log(`Updated ID: ${col.id} - ${col.name}`);
  }
}

fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(data, null, 2), 'utf8');
console.log(`Successfully updated ${updatedCount} colleges in ${SITE_DATA_PATH}`);

