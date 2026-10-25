import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const siteDataPath = path.join(__dirname, '../public/siteData.json');

const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
siteData.colleges = siteData.colleges || [];

const PREMIER_COLLEGES = [
  {
    name: "Indian Institute of Technology Kanpur (IIT Kanpur)",
    shortName: "IITK",
    location: "Kanpur",
    state: "Uttar Pradesh",
    country: "India",
    address: "Kalyanpur, Kanpur, Uttar Pradesh 208016",
    phone: "+91-512-259 0151",
    email: "admissions@iitk.ac.in",
    website: "https://www.iitk.ac.in",
    shikshaUrl: "https://www.shiksha.com/university/iit-kanpur-indian-institute-of-technology-24444",
    type: "Government (Autonomous)",
    established: "1959",
    ranking: 4,
    rating: 4.8,
    reviewsCount: 420,
    fees: "₹2.2 Lakhs/Year",
    highestPackage: "₹1.90 Crore PA",
    averagePackage: "₹28.7 LPA",
    exams: "JEE Advanced, GATE, JAM",
    placements: "100% Placed, Top recruiters: Apple, Google, Microsoft, Qualcomm, Texas Instruments",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/IIT_Kanpur_Airstrip.jpg/1200px-IIT_Kanpur_Airstrip.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/IIT_Kanpur_Airstrip.jpg/1200px-IIT_Kanpur_Airstrip.jpg"
    ],
    about: "Indian Institute of Technology Kanpur is an Institute of National Importance established in 1959. Renowned globally for Computer Science, Aerospace Engineering, and cutting-edge quantum computing research.",
    facilities: "Supercomputing Facility, Flight Laboratory & Airstrip, Glider Club, Central Library, AC Hostels, Olympic Swimming Pool",
    courses: [
      { title: "B.Tech Computer Science and Engineering", duration: "4 Years", fees: "₹2.29 Lakhs/Year", eligibility: "10+2 with PCM + JEE Advanced Rank" },
      { title: "B.Tech Aerospace Engineering", duration: "4 Years", fees: "₹2.29 Lakhs/Year", eligibility: "10+2 with PCM + JEE Advanced Rank" },
      { title: "M.Tech Data Science & Artificial Intelligence", duration: "2 Years", fees: "₹65,000/Year", eligibility: "B.Tech + GATE Qualified" }
    ],
    published: true,
    featured: true
  },
  {
    name: "Indian Institute of Technology Roorkee (IIT Roorkee)",
    shortName: "IITR",
    location: "Roorkee",
    state: "Uttarakhand",
    country: "India",
    address: "Roorkee, Haridwar District, Uttarakhand 247667",
    phone: "+91-1332-285 311",
    email: "registrar@iitr.ac.in",
    website: "https://www.iitr.ac.in",
    shikshaUrl: "https://www.shiksha.com/university/iit-roorkee-indian-institute-of-technology-24467",
    type: "Government (Autonomous)",
    established: "1847",
    ranking: 5,
    rating: 4.8,
    reviewsCount: 395,
    fees: "₹2.1 Lakhs/Year",
    highestPackage: "₹1.30 Crore PA",
    averagePackage: "₹26.5 LPA",
    exams: "JEE Advanced, GATE, CEED",
    placements: "98% Placed, Top recruiters: Microsoft, Oracle, Uber, Goldman Sachs, BCG",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Main_Building_IIT_Roorkee.jpg/1200px-Main_Building_IIT_Roorkee.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Main_Building_IIT_Roorkee.jpg/1200px-Main_Building_IIT_Roorkee.jpg"
    ],
    about: "IIT Roorkee is the oldest technical institution in Asia, founded in 1847 as the Thomason College of Civil Engineering. Spread across an iconic 365-acre heritage campus nestled in the Himalayan foothills.",
    facilities: "Historic Main Building, High Performance Computing, Earth Sciences Museum, Olympic Sports Complex, 12 Hostels",
    courses: [
      { title: "B.Tech Civil Engineering", duration: "4 Years", fees: "₹2.18 Lakhs/Year", eligibility: "10+2 with PCM + JEE Advanced" },
      { title: "B.Tech Computer Science & Engineering", duration: "4 Years", fees: "₹2.18 Lakhs/Year", eligibility: "10+2 with PCM + JEE Advanced" },
      { title: "B.Arch Architecture", duration: "5 Years", fees: "₹2.18 Lakhs/Year", eligibility: "10+2 + JEE Advanced AAT" }
    ],
    published: true,
    featured: true
  },
  {
    name: "Indian Institute of Management Calcutta (IIM Calcutta)",
    shortName: "IIMC",
    location: "Kolkata",
    state: "West Bengal",
    country: "India",
    address: "Diamond Harbour Road, Joka, Kolkata, West Bengal 700104",
    phone: "+91-33-2467 8300",
    email: "admissions@iimcal.ac.in",
    website: "https://www.iimcal.ac.in",
    shikshaUrl: "https://www.shiksha.com/college/iim-calcutta-indian-institute-of-management-joka-kolkata-3408",
    type: "Government (Autonomous)",
    established: "1961",
    ranking: 3,
    rating: 4.9,
    reviewsCount: 380,
    fees: "₹15.5 Lakhs/Year",
    highestPackage: "₹1.15 Crore PA",
    averagePackage: "₹35.07 LPA",
    exams: "CAT, GMAT",
    placements: "100% Placed, Top recruiters: McKinsey, BCG, Bain, Goldman Sachs, Morgan Stanley, Avendus",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/IIM_Calcutta_Campus.jpg/1200px-IIM_Calcutta_Campus.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/IIM_Calcutta_Campus.jpg/1200px-IIM_Calcutta_Campus.jpg"
    ],
    about: "IIM Calcutta was the first Indian Institute of Management established in 1961 in collaboration with MIT Sloan School of Management. Triple crown accredited (AACSB, AMBA, EQUIS), widely hailed as the Finance Capital of India.",
    facilities: "Scenic 135-Acre 7-Lakes Campus, 24/7 Financial Research Trading Lab, Executive Classrooms, International Guest House",
    courses: [
      { title: "MBA Post Graduate Programme in Management (PGP)", duration: "2 Years", fees: "₹31 Lakhs Total", eligibility: "Graduation + CAT 99+ Percentile" },
      { title: "MBAEx Executive MBA", duration: "1 Year", fees: "₹31 Lakhs Total", eligibility: "Graduation + 5 Years Work Exp + GMAT" }
    ],
    published: true,
    featured: true
  },
  {
    name: "All India Institute of Medical Sciences (AIIMS New Delhi)",
    shortName: "AIIMS Delhi",
    location: "New Delhi",
    state: "Delhi",
    country: "India",
    address: "Sri Aurobindo Marg, Ansari Nagar, New Delhi 110029",
    phone: "+91-11-2658 8500",
    email: "director@aiims.edu",
    website: "https://www.aiims.edu",
    shikshaUrl: "https://www.shiksha.com/college/aiims-delhi-all-india-institute-of-medical-sciences-ansari-nagar-24410",
    type: "Government (Autonomous Institute of National Importance)",
    established: "1956",
    ranking: 1,
    rating: 4.9,
    reviewsCount: 510,
    fees: "₹1,628/Year",
    highestPackage: "₹45 LPA",
    averagePackage: "₹18 LPA",
    exams: "NEET UG, INI CET",
    placements: "100% Medical Residency & Fellowships in Top Global Hospitals (NHS UK, Mayo Clinic USA, Harvard)",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/AIIMS_New_Delhi.jpg/1200px-AIIMS_New_Delhi.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/AIIMS_New_Delhi.jpg/1200px-AIIMS_New_Delhi.jpg"
    ],
    about: "AIIMS New Delhi is India's apex medical college and hospital, consistently ranked #1 in NIRF Medical rankings since inception. Offers subsidized top-tier medical education with extensive patient exposure and premier biomedical research.",
    facilities: "2,500+ Bed Super-Specialty Hospital, Cadaveric Surgical Skills Lab, Advanced Robotic Surgery Suite, Central Medical Library",
    courses: [
      { title: "MBBS Bachelor of Medicine and Bachelor of Surgery", duration: "5.5 Years", fees: "₹5,856 Total", eligibility: "10+2 with PCB + Top NEET UG Rank (AIR 1 - 50)" },
      { title: "MD / MS Post Graduate Medical Degree", duration: "3 Years", fees: "₹2,500 Total", eligibility: "MBBS + INI CET Qualified" }
    ],
    published: true,
    featured: true
  },
  {
    name: "National Law School of India University (NLSIU Bangalore)",
    shortName: "NLSIU",
    location: "Bangalore",
    state: "Karnataka",
    country: "India",
    address: "Gnana Bharathi Main Rd, Chandra Layout, Bengaluru, Karnataka 560072",
    phone: "+91-80-2321 3160",
    email: "registrar@nls.ac.in",
    website: "https://www.nls.ac.in",
    shikshaUrl: "https://www.shiksha.com/university/nlsiu-national-law-school-of-india-university-bangalore-24658",
    type: "Government (National Law University)",
    established: "1987",
    ranking: 1,
    rating: 4.9,
    reviewsCount: 230,
    fees: "₹4.0 Lakhs/Year",
    highestPackage: "₹22 LPA",
    averagePackage: "₹16.5 LPA",
    exams: "CLAT UG, CLAT PG",
    placements: "100% Placed, Top recruiters: Cyril Amarchand Mangaldas, Shardul Amarchand, Trilegal, AZB & Partners, Linklaters",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/NLSIU_Academic_Block.jpg/1200px-NLSIU_Academic_Block.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/NLSIU_Academic_Block.jpg/1200px-NLSIU_Academic_Block.jpg"
    ],
    about: "NLSIU Bangalore is the premier institution for legal education in India, pioneered the integrated 5-year B.A. LL.B. (Hons.) curriculum. Ranked #1 in NIRF Law rankings for 6 consecutive years.",
    facilities: "Sri Narayana Rao Memorial Library, Moot Court Halls, Legal Services Clinic, Wi-Fi Green Campus, Hostels",
    courses: [
      { title: "B.A. LL.B. (Hons.) Integrated Law", duration: "5 Years", fees: "₹4,15,000/Year", eligibility: "10+2 with 45% + CLAT Rank in Top 100" },
      { title: "LL.M. Master of Laws", duration: "1 Year", fees: "₹3,20,000/Year", eligibility: "LL.B. + CLAT PG Qualified" }
    ],
    published: true,
    featured: true
  },
  {
    name: "Faculty of Management Studies, University of Delhi (FMS Delhi)",
    shortName: "FMS Delhi",
    location: "New Delhi",
    state: "Delhi",
    country: "India",
    address: "Prof ND Kapoor Marg, Opp. Kirori Mal College, University Enclave, Delhi 110007",
    phone: "+91-11-2766 6382",
    email: "admissions@fms.edu",
    website: "https://www.fms.edu",
    shikshaUrl: "https://www.shiksha.com/college/faculty-of-management-studies-university-of-delhi-malka-ganj-3101",
    type: "Government (University Faculty)",
    established: "1954",
    ranking: 8,
    rating: 4.8,
    reviewsCount: 310,
    fees: "₹1.0 Lakh/Year",
    highestPackage: "₹1.23 Crore PA",
    averagePackage: "₹34.1 LPA",
    exams: "CAT",
    placements: "100% Placed with highest ROI in Asia. Top recruiters: Amazon, Google, HUL, ITC, Morgan Stanley, Bain & Co.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Faculty_of_Management_Studies%2C_Delhi.jpg/1200px-Faculty_of_Management_Studies%2C_Delhi.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Faculty_of_Management_Studies%2C_Delhi.jpg/1200px-Faculty_of_Management_Studies%2C_Delhi.jpg"
    ],
    about: "FMS Delhi is celebrated as the Red Building of Dreams and the highest Return on Investment (ROI) business school in India. Offers top tier MBA program at a nominal fee structure of approximately ₹2 Lakhs total.",
    facilities: "Centrally Air-conditioned Audio-Visual Classrooms, Management Library, Computer Center, Delhi University North Campus Access",
    courses: [
      { title: "Master of Business Administration (MBA)", duration: "2 Years", fees: "₹1,00,000/Year", eligibility: "Graduation with 50% + CAT 99.5+ Percentile" },
      { title: "Executive MBA", duration: "2 Years", fees: "₹1,20,000/Year", eligibility: "Graduation + 5 Years Corporate Experience" }
    ],
    published: true,
    featured: true
  },
  {
    name: "XLRI – Xavier School of Management (XLRI Jamshedpur)",
    shortName: "XLRI",
    location: "Jamshedpur",
    state: "Jharkhand",
    country: "India",
    address: "Riverside Road, Circuit House Area, Northern Town, Jamshedpur, Jharkhand 831001",
    phone: "+91-657-665 3203",
    email: "admissions@xlri.ac.in",
    website: "https://www.xlri.ac.in",
    shikshaUrl: "https://www.shiksha.com/college/xlri-xavier-school-of-management-jamshedpur-3432",
    type: "Private (Autonomous Jesuit School)",
    established: "1949",
    ranking: 9,
    rating: 4.8,
    reviewsCount: 360,
    fees: "₹14.0 Lakhs/Year",
    highestPackage: "₹75 LPA",
    averagePackage: "₹32.7 LPA",
    exams: "XAT, GMAT",
    placements: "100% Placed, undisputed leader in Human Resource Management (HRM) and Business Management in South Asia.",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/XLRI_Jamshedpur_campus.jpg/1200px-XLRI_Jamshedpur_campus.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/XLRI_Jamshedpur_campus.jpg/1200px-XLRI_Jamshedpur_campus.jpg"
    ],
    about: "XLRI Jamshedpur is the oldest business school in India, founded in 1949 by Father Quinn Enright. Globally acclaimed for its flagship Postgraduate Diploma in Human Resource Management (BM & HRM).",
    facilities: "Sir Jehangir Ghandy Library, Behavioral Science Lab, International Sports Complex, Platinum Jubilee Auditorium",
    courses: [
      { title: "PGDM Business Management (BM)", duration: "2 Years", fees: "₹28 Lakhs Total", eligibility: "Graduation + XAT 95+ Percentile" },
      { title: "PGDM Human Resource Management (HRM)", duration: "2 Years", fees: "₹28 Lakhs Total", eligibility: "Graduation + XAT 93+ Percentile" }
    ],
    published: true,
    featured: true
  },
  {
    name: "Delhi Technological University (DTU Delhi)",
    shortName: "DTU",
    location: "New Delhi",
    state: "Delhi",
    country: "India",
    address: "Shahbad Daulatpur, Main Bawana Road, Delhi 110042",
    phone: "+91-11-2787 1018",
    email: "vcdtu@dtu.ac.in",
    website: "https://www.dtu.ac.in",
    shikshaUrl: "https://www.shiksha.com/university/dtu-delhi-technological-university-23920",
    type: "State Government University",
    established: "1941",
    ranking: 29,
    rating: 4.6,
    reviewsCount: 680,
    fees: "₹2.1 Lakhs/Year",
    highestPackage: "₹1.80 Crore PA",
    averagePackage: "₹16.8 LPA",
    exams: "JEE Main (JAC Delhi Counseling), GATE",
    placements: "95% Placed, Top recruiters: Apple, Microsoft, Amazon, Adobe, Atlassian, Texas Instruments, Goldman Sachs",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/DTU_Admin_Building.jpg/1200px-DTU_Admin_Building.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/DTU_Admin_Building.jpg/1200px-DTU_Admin_Building.jpg"
    ],
    about: "Delhi Technological University (formerly Delhi College of Engineering - DCE), established in 1941, is one of India's most prestigious engineering universities with a sprawling 164-acre lush green campus in North Delhi.",
    facilities: "164-Acre Modern Campus, Open Air Theatre, High Speed Optical Fiber Wi-Fi, 14 Hostels, Sports Complex with Floodlights",
    courses: [
      { title: "B.Tech Computer Science and Engineering", duration: "4 Years", fees: "₹2,20,000/Year", eligibility: "10+2 with PCM + JAC Delhi (JEE Main Rank)" },
      { title: "B.Tech Mathematics and Computing", duration: "4 Years", fees: "₹2,20,000/Year", eligibility: "10+2 with PCM + JAC Delhi" },
      { title: "B.Tech Mechanical Engineering", duration: "4 Years", fees: "₹2,20,000/Year", eligibility: "10+2 with PCM + JAC Delhi" }
    ],
    published: true,
    featured: true
  }
];

let inserted = 0;
let updated = 0;

PREMIER_COLLEGES.forEach(col => {
  const existingIdx = siteData.colleges.findIndex(c => 
    c.name.toLowerCase().trim() === col.name.toLowerCase().trim() ||
    (c.shortName && c.shortName.toLowerCase() === col.shortName.toLowerCase())
  );

  if (existingIdx >= 0) {
    siteData.colleges[existingIdx] = {
      ...siteData.colleges[existingIdx],
      ...col,
      id: siteData.colleges[existingIdx].id
    };
    updated++;
  } else {
    const maxId = siteData.colleges.reduce((max, c) => Math.max(max, Number(c.id) || 0), 0);
    siteData.colleges.unshift({
      id: maxId + 1,
      ...col
    });
    inserted++;
  }
});

console.log(`Enrichment complete: Inserted ${inserted} new colleges, updated ${updated} premier institutes.`);
fs.writeFileSync(siteDataPath, JSON.stringify(siteData, null, 2), 'utf8');
console.log('Saved enriched siteData.json successfully.');
