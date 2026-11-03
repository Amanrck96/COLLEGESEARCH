const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const progressPath = path.join(__dirname, '../reports/verification/progress.json');
const allVerifiedJsonPath = path.join(__dirname, '../reports/verification/all_verified_colleges.json');
const allVerifiedMdPath = path.join(__dirname, '../reports/verification/all_verified_colleges.md');

const batchUpdates = {
  2107: {
    name: "Government Polytechnic Danya, Almora",
    shortName: "Govt Polytechnic Danya",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://ukdte.in",
    phone: "05966-271070",
    address: "Danya, Dhauladevi Block, Almora District, Uttarakhand - 263622",
    location: "Almora",
    state: "Uttarakhand",
    fees: "₹8,000/Yr",
    affiliation: "Directorate of Technical Education, Uttarakhand / UBTER Roorkee & AICTE",
    about: "Government Polytechnic Danya, established by the Directorate of Technical Education, Government of Uttarakhand, is an AICTE-approved public technical institute offering subsidized 3-year diploma education in Civil Engineering to rural youth in the Kumaon hills.",
    courses: [
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th with Science & Mathematics + JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  2108: {
    name: "Institute of Management Education & Consultancy (IMEC), Rudrapur",
    shortName: "IMEC Rudrapur",
    type: "Private",
    ownership: "Private",
    website: "https://imecrudrapur.in",
    phone: "05944-245781",
    address: "Kichha Road, Near Bigbara, Rudrapur, Udham Singh Nagar, Uttarakhand - 263153",
    location: "Udham Singh Nagar",
    state: "Uttarakhand",
    fees: "₹1,10,000/Yr",
    affiliation: "AICTE approved PGDM Institution / Kumaun University",
    about: "Institute of Management Education & Consultancy (IMEC) Rudrapur, established in 2008 in the industrial belt of Udham Singh Nagar, is an AICTE-approved management institute offering professional Post Graduate Diploma in Management (PGDM) programs.",
    courses: [
      {
        title: "Post Graduate Diploma in Management (PGDM)",
        duration: "2 Years",
        fees: "₹1,10,000/Yr",
        eligibility: "Graduation with minimum 50% + MAT/CAT",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹45,000/Yr",
        eligibility: "10+2 in any stream",
        type: "MANAGEMENT",
        intake: 60
      }
    ]
  },
  2109: {
    name: "Dr. A.P.J. Abdul Kalam Government Institute of Technology, Tanakpur",
    shortName: "IT Tanakpur",
    type: "Public/Government (Constituent State Government Institute)",
    ownership: "Public/Government",
    website: "https://ittanakpur.ac.in",
    phone: "05943-265111",
    address: "NH-125, Tanakpur, Champawat District, Uttarakhand - 262309",
    location: "Champawat",
    state: "Uttarakhand",
    fees: "₹55,000/Yr",
    affiliation: "Constituent Institute of Veer Madho Singh Bhandari Uttarakhand Technical University (UTU) & AICTE",
    about: "Dr. A.P.J. Abdul Kalam Government Institute of Technology (IT Tanakpur), established in 2017 by the Government of Uttarakhand, is an AICTE-approved constituent engineering college of Uttarakhand Technical University providing subsidized B.Tech education in civil, computer science, and mechanical engineering.",
    courses: [
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹55,000/Yr",
        eligibility: "10+2 with PCM + JEE Main / UTU Counselling",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹55,000/Yr",
        eligibility: "10+2 with PCM + JEE Main / UTU Counselling",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹55,000/Yr",
        eligibility: "10+2 with PCM + JEE Main / UTU Counselling",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  2110: {
    name: "Faculty of Management, VMSB Uttarakhand Technical University, Dehradun",
    shortName: "Faculty of Management UTU",
    type: "Public/Government (State University Department)",
    ownership: "Public/Government",
    website: "https://uktech.ac.in",
    phone: "0135-2774067",
    address: "Post Office Chandanwadi, Prem Nagar, Sudhowala, Dehradun, Uttarakhand - 248007",
    location: "Dehradun",
    state: "Uttarakhand",
    fees: "₹65,000/Yr",
    affiliation: "Veer Madho Singh Bhandari Uttarakhand Technical University (State University)",
    about: "Faculty of Management, VMSB Uttarakhand Technical University Dehradun, is the apex postgraduate management department of the state technical university campus, offering AICTE-approved MBA education with specializations in Finance, Marketing, and Human Resource Management.",
    courses: [
      {
        title: "MBA in Finance, Marketing & Human Resource Management",
        duration: "2 Years",
        fees: "₹65,000/Yr",
        eligibility: "Graduation with minimum 50% + MAT/CAT/UTU Entrance",
        type: "MANAGEMENT",
        intake: 60
      }
    ]
  },
  2111: {
    name: "Sri Sai Institute of Technology (SSIT), Jaspur",
    shortName: "SSIT Jaspur",
    type: "Private",
    ownership: "Private",
    website: "https://www.srisaiiot.com",
    phone: "05947-222888",
    address: "VPO Bhagwantpur, Subhash Nagar, Jaspur, Udham Singh Nagar, Uttarakhand - 244712",
    location: "Udham Singh Nagar",
    state: "Uttarakhand",
    fees: "₹38,000/Yr",
    affiliation: "Uttarakhand Board of Technical Education, Roorkee (UBTER) & AICTE",
    about: "Sri Sai Institute of Technology (SSIT) Jaspur, established under the Sri Sai Group, is an AICTE-approved private polytechnic affiliated to UBTER Roorkee, providing 3-year technical diploma education in mechanical, civil, and electrical engineering.",
    courses: [
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹38,000/Yr",
        eligibility: "Class 10th with Science & Mathematics + JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹38,000/Yr",
        eligibility: "Class 10th with Science & Mathematics + JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹38,000/Yr",
        eligibility: "Class 10th with Science & Mathematics + JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  2112: {
    name: "Government Polytechnic Narendra Nagar, Tehri Garhwal",
    shortName: "Govt Polytechnic Narendra Nagar",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://www.gpnngr.org.in",
    phone: "01378-227233",
    address: "Narendra Nagar, Tehri Garhwal District, Uttarakhand - 249175",
    location: "Tehri Garhwal",
    state: "Uttarakhand",
    fees: "₹8,000/Yr",
    affiliation: "Directorate of Technical Education, Uttarakhand / UBTER Roorkee & AICTE",
    about: "Government Polytechnic Narendra Nagar, established in 1975, is one of Garhwal's oldest and most prestigious state government polytechnic institutes. Situated in the historic royal capital of Tehri, it provides AICTE-approved subsidized 3-year diploma education in computer science, electrical, and electronics engineering.",
    courses: [
      {
        title: "Diploma in Computer Science & Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th with Science & Mathematics + JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th with Science & Mathematics + JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Electronics Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th with Science & Mathematics + JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 40
      },
      {
        title: "Diploma in Information Technology",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th with Science & Mathematics + JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 40
      }
    ]
  },
  2113: {
    name: "Shaheed Vikram Singh Negi Government Polytechnic Gaja, Tehri Garhwal",
    shortName: "Govt Polytechnic Gaja",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://gpgaja.org.in",
    phone: "01376-281015",
    address: "Gaja, Tehri Garhwal District, Uttarakhand - 249146",
    location: "Tehri Garhwal",
    state: "Uttarakhand",
    fees: "₹8,000/Yr",
    affiliation: "Directorate of Technical Education, Uttarakhand / UBTER Roorkee & AICTE",
    about: "Shaheed Vikram Singh Negi Government Polytechnic Gaja, established by the Directorate of Technical Education, Government of Uttarakhand, is an AICTE-approved public polytechnic named in honor of Kargil martyr Vikram Singh Negi, delivering subsidized 3-year engineering diploma education in civil engineering.",
    courses: [
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th with Science & Mathematics + JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  2114: {
    name: "Gaura Devi Government Polytechnic Joshimath, Chamoli",
    shortName: "Gaura Devi Govt Polytechnic",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://gpjoshimath.in",
    phone: "01389-222140",
    address: "Joshimath (Jyotirmath), Chamoli District, Uttarakhand - 246443",
    location: "Chamoli",
    state: "Uttarakhand",
    fees: "₹8,000/Yr",
    affiliation: "Directorate of Technical Education, Uttarakhand / UBTER Roorkee & AICTE",
    about: "Gaura Devi Government Polytechnic Joshimath, established by the Government of Uttarakhand in memory of the legendary Chipko movement leader Gaura Devi, is an AICTE-approved border-area high-altitude technical institute offering subsidized engineering diploma education in electrical engineering and civil engineering.",
    courses: [
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th with Science & Mathematics + JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 40
      },
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th with Science & Mathematics + JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 40
      }
    ]
  },
  2115: {
    name: "Government Polytechnic Bazpur, Udham Singh Nagar",
    shortName: "Govt Polytechnic Bazpur",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://www.gpbazpur.in",
    phone: "05949-281140",
    address: "Beria Daulat Road, Bazpur, Udham Singh Nagar, Uttarakhand - 262401",
    location: "Udham Singh Nagar",
    state: "Uttarakhand",
    fees: "₹8,000/Yr",
    affiliation: "Directorate of Technical Education, Uttarakhand / UBTER Roorkee & AICTE",
    about: "Government Polytechnic Bazpur, established under the Directorate of Technical Education, Government of Uttarakhand, is an AICTE-approved public technical polytechnic in Udham Singh Nagar, providing subsidized 3-year diploma education in mechanical engineering and electrical engineering.",
    courses: [
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th with Science & Mathematics + JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th with Science & Mathematics + JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 40
      }
    ]
  },
  2116: {
    name: "State Institute of Hotel Management Catering Technology & Applied Nutrition (SIHM), New Tehri",
    shortName: "SIHM New Tehri",
    type: "Public/Government (Autonomous Central/State Govt. Society)",
    ownership: "Public/Government",
    website: "https://ihmtehri.org",
    phone: "01376-233405",
    address: "Near B.Ed College, Dobata, New Tehri, Tehri Garhwal, Uttarakhand - 249001",
    location: "Tehri Garhwal",
    state: "Uttarakhand",
    fees: "₹68,000/Yr",
    affiliation: "NCHMCT, Ministry of Tourism, Govt of India & UTU",
    about: "State Institute of Hotel Management (SIHMCT & AN) New Tehri, established in 2013 as a joint venture between the Ministry of Tourism, Government of India and the Department of Tourism, Government of Uttarakhand, is an autonomous premier government hospitality institute affiliated to NCHMCT and UTU, offering Bachelor of Hotel Management programs.",
    courses: [
      {
        title: "Bachelor of Hotel Management and Catering Technology (BHMCT)",
        duration: "4 Years",
        fees: "₹68,000/Yr",
        eligibility: "10+2 with English minimum 45% + NCHMCT JEE",
        type: "HOTEL MANAGEMENT",
        intake: 60
      },
      {
        title: "Diploma in Food Production",
        duration: "1.5 Years",
        fees: "₹35,000",
        eligibility: "10+2 in any stream",
        type: "HOTEL MANAGEMENT",
        intake: 40
      },
      {
        title: "Diploma in Food & Beverage Service",
        duration: "1.5 Years",
        fees: "₹30,000",
        eligibility: "10+2 in any stream",
        type: "HOTEL MANAGEMENT",
        intake: 40
      }
    ]
  }
};

// Update siteData.json
console.log('Updating siteData.json...');
const siteDataRaw = fs.readFileSync(siteDataPath, 'utf8');
const siteData = JSON.parse(siteDataRaw);
const colleges = siteData.colleges || siteData;

const batchIds = Object.keys(batchUpdates).map(Number);

batchIds.forEach(id => {
  const clg = colleges.find(c => c.id === id);
  if (clg) {
    const update = batchUpdates[id];
    Object.assign(clg, update);
    clg.verified = true;
    clg.verifiedAt = new Date().toISOString();
  } else {
    console.error(`College with ID ${id} not found in siteData.json!`);
  }
});

fs.writeFileSync(siteDataPath, JSON.stringify(siteData, null, 2), 'utf8');
console.log(`Updated ${batchIds.length} colleges in siteData.json`);

// Update progress.json
console.log('Updating progress.json...');
let progress = JSON.parse(fs.readFileSync(progressPath, 'utf8'));

progress.verifiedColleges = 2120;
progress.last_batch_completed = 212;
progress.currentBatch = 212;
progress.lastUpdated = new Date().toISOString();

if (!progress.batches) {
  progress.batches = {};
}

progress.batches["212"] = {
  status: "verified",
  verifiedCount: 10,
  range: "2111-2120",
  ids: batchIds,
  verifiedAt: new Date().toISOString()
};

if (!progress.batchHistory) {
  progress.batchHistory = [];
}
progress.batchHistory.push({
  batch: 212,
  verifiedCount: 10,
  totalVerified: 2120,
  timestamp: new Date().toISOString(),
  collegeIds: batchIds
});

if (Array.isArray(progress.completed_ids)) {
  batchIds.forEach(id => {
    if (!progress.completed_ids.includes(id)) {
      progress.completed_ids.push(id);
    }
  });
}

fs.writeFileSync(progressPath, JSON.stringify(progress, null, 2), 'utf8');

// Update all_verified_colleges.json
console.log('Updating all_verified_colleges.json...');
let allVerified = [];
if (fs.existsSync(allVerifiedJsonPath)) {
  allVerified = JSON.parse(fs.readFileSync(allVerifiedJsonPath, 'utf8'));
}

batchIds.forEach(id => {
  const updatedClg = colleges.find(c => c.id === id);
  if (updatedClg) {
    const idx = allVerified.findIndex(c => c.id === id);
    if (idx >= 0) {
      allVerified[idx] = updatedClg;
    } else {
      allVerified.push(updatedClg);
    }
  }
});
fs.writeFileSync(allVerifiedJsonPath, JSON.stringify(allVerified, null, 2), 'utf8');

// Update all_verified_colleges.md
console.log('Updating all_verified_colleges.md...');
let mdContent = fs.readFileSync(allVerifiedMdPath, 'utf8');
const batch212Entries = batchIds.map((id, i) => {
  const c = batchUpdates[id];
  return `| ${2110 + i + 1} | ${c.name} | ${c.location} | ${c.state} | ${c.type} | [Portal](${c.website}) |`;
}).join('\n');

if (!mdContent.includes(batchUpdates[2107].name)) {
  mdContent += `\n\n### Batch 212 (Colleges 2,111–2,120)\n\n| # | College Name | City | State | Type | Website |\n|---|---|---|---|---|---|\n${batch212Entries}\n`;
  fs.writeFileSync(allVerifiedMdPath, mdContent, 'utf8');
}

console.log('Batch 212 verification successfully completed!');

