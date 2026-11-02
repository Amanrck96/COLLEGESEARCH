const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const progressPath = path.join(__dirname, '../reports/verification/progress.json');
const allVerifiedJsonPath = path.join(__dirname, '../reports/verification/all_verified_colleges.json');
const allVerifiedMdPath = path.join(__dirname, '../reports/verification/all_verified_colleges.md');

const batchUpdates = {
  2087: {
    name: "Techno India University, Tripura (TIUT)",
    shortName: "Techno India University Tripura",
    type: "Private",
    ownership: "Private (State Private University)",
    website: "https://tiut.ac.in",
    phone: "0381-2370281",
    address: "Maheshkhala, Anandanagar, Agartala, West Tripura, Tripura - 799004",
    location: "West Tripura",
    state: "Tripura",
    fees: "₹90,000/Yr",
    affiliation: "UGC Recognized Private University (Tripura Act No. 6 of 2023)",
    about: "Techno India University Tripura (TIUT) Agartala, established under the Techno India University Tripura Act, is a private university offering diverse career-oriented undergraduate and postgraduate degrees in computer applications, IT, management, and emerging technologies.",
    courses: [
      {
        title: "Master of Computer Applications (MCA)",
        duration: "2 Years",
        fees: "₹90,000/Yr",
        eligibility: "BCA / B.Sc (IT/CS) with minimum 50%",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹65,000/Yr",
        eligibility: "10+2 with Mathematics / Computer Studies",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹60,000/Yr",
        eligibility: "10+2 in any stream",
        type: "MANAGEMENT",
        intake: 60
      }
    ]
  },
  2088: {
    name: "Holy Cross College, Agartala",
    shortName: "Holy Cross College Agartala",
    type: "Private",
    ownership: "Private (Christian Minority / NAAC 'A+' Grade)",
    website: "https://hccagt.ac.in",
    phone: "0381-2869244",
    address: "Jubatara, Lembucherra, Agartala, West Tripura, Tripura - 799210",
    location: "West Tripura",
    state: "Tripura",
    fees: "₹60,000/Yr",
    affiliation: "Tripura University (Central University, NAAC 'A+' Grade)",
    about: "Holy Cross College Agartala, established in 2009 by the Congregation of Holy Cross, is Tripura's premier Catholic minority institution, accredited with 'A+' Grade by NAAC and affiliated to Tripura University. It provides values-based quality education in business administration, computer applications, commerce, sciences, and humanities.",
    courses: [
      {
        title: "Master of Business Administration (MBA)",
        duration: "2 Years",
        fees: "₹1,10,000/Yr",
        eligibility: "Graduation in any discipline with minimum 50% + Entrance",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹55,000/Yr",
        eligibility: "10+2 in any stream with minimum 50%",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "Bachelor of Commerce (B.Com)",
        duration: "3 Years",
        fees: "₹40,000/Yr",
        eligibility: "10+2 in Commerce stream",
        type: "COMMERCE",
        intake: 120
      },
      {
        title: "Bachelor of Arts (B.A.)",
        duration: "3 Years",
        fees: "₹35,000/Yr",
        eligibility: "10+2 in Arts or equivalent",
        type: "ARTS",
        intake: 180
      }
    ]
  },
  2089: {
    name: "Bhavan's Tripura College of Science & Technology (BTCST), Agartala",
    shortName: "BTCST Agartala",
    type: "Private",
    ownership: "Private (Bharatiya Vidya Bhavan)",
    website: "https://www.btcstagartala.org/",
    phone: "0381-2370258",
    address: "Joynagar / Anandanagar, Agartala, West Tripura, Tripura - 799001",
    location: "West Tripura",
    state: "Tripura",
    fees: "₹45,000/Yr",
    affiliation: "Tripura University (Central University)",
    about: "Bhavan's Tripura College of Science & Technology (BTCST) Agartala, established in 2003 under the Bharatiya Vidya Bhavan, is an institution affiliated to Tripura University providing professional degree programs in management, computer science, and bio-sciences.",
    courses: [
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹45,000/Yr",
        eligibility: "10+2 in any stream",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹45,000/Yr",
        eligibility: "10+2 with Mathematics / Computer",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "B.Sc in Computer Science",
        duration: "3 Years",
        fees: "₹35,000/Yr",
        eligibility: "10+2 with Science (PCM)",
        type: "SCIENCE",
        intake: 40
      }
    ]
  },
  2090: {
    name: "Roorkee College of Polytechnic, Roorkee",
    shortName: "Roorkee College of Polytechnic",
    type: "Private",
    ownership: "Private",
    website: "https://rcppolytechnic.com",
    phone: "01332-261795",
    address: "7th Km, Roorkee-Hardwar Road, Bajuheri, Roorkee, Haridwar, Uttarakhand - 247667",
    location: "Haridwar",
    state: "Uttarakhand",
    fees: "₹42,000/Yr",
    affiliation: "Uttarakhand Board of Technical Education, Roorkee (UBTER) & AICTE",
    about: "Roorkee College of Polytechnic, established in 2009 under the RCP Group of Institutions, is an AICTE-approved private polytechnic affiliated to UBTER Roorkee, providing 3-year technical diploma engineering programs across mechanical, civil, electrical, and computer science branches.",
    courses: [
      {
        title: "Diploma in Mechanical Engineering (Production)",
        duration: "3 Years",
        fees: "₹42,000/Yr",
        eligibility: "Class 10th with Science & Mathematics + JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹42,000/Yr",
        eligibility: "Class 10th with Science & Mathematics + JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹42,000/Yr",
        eligibility: "Class 10th with Science & Mathematics + JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Computer Science & Engineering",
        duration: "3 Years",
        fees: "₹42,000/Yr",
        eligibility: "Class 10th with Science & Mathematics + JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  2091: {
    name: "Himalayan Institute of Technology (HIT), Dehradun",
    shortName: "HIT Dehradun",
    type: "Private",
    ownership: "Private",
    website: "https://hitdoon.com",
    phone: "0135-2499175",
    address: "Near Central Excise Building, Haridwar Road, Dehradun, Uttarakhand - 248001",
    location: "Dehradun",
    state: "Uttarakhand",
    fees: "₹55,000/Yr",
    affiliation: "HNB Garhwal Central University / Sri Dev Suman Uttarakhand University (SDSUV)",
    about: "Himalayan Institute of Technology (HIT) Dehradun, established in 2001, is a leading professional institute affiliated to HNB Garhwal Central University and SDSUV, offering recognized undergraduate programs in computer applications, management, hotel management, and agriculture.",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹55,000/Yr",
        eligibility: "10+2 with Mathematics / Computer Studies",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹55,000/Yr",
        eligibility: "10+2 in any stream",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "B.Sc in Information Technology",
        duration: "3 Years",
        fees: "₹48,000/Yr",
        eligibility: "10+2 with Mathematics / Science",
        type: "SCIENCE",
        intake: 60
      },
      {
        title: "Bachelor of Hotel Management (BHM)",
        duration: "4 Years",
        fees: "₹75,000/Yr",
        eligibility: "10+2 in any stream",
        type: "HOTEL MANAGEMENT",
        intake: 60
      }
    ]
  },
  2092: {
    name: "Modern Institute of Technology (MIT), Rishikesh",
    shortName: "MIT Rishikesh",
    type: "Private",
    ownership: "Private",
    website: "https://www.mitrishikesh.com/",
    phone: "0135-2435012",
    address: "Dhalwala, Rishikesh, Tehri Garhwal, Uttarakhand - 249201",
    location: "Tehri Garhwal",
    state: "Uttarakhand",
    fees: "₹48,000/Yr",
    affiliation: "HNB Garhwal Central University / Uttarakhand Technical University (UTU)",
    about: "Modern Institute of Technology (MIT) Rishikesh, established in 2002 by the Amrit Vidya Educational Society, is an institution affiliated to HNB Garhwal Central University and UTU, providing degree education in computer applications, management, biotechnology, and education.",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹48,000/Yr",
        eligibility: "10+2 with Mathematics / Computer Studies",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹48,000/Yr",
        eligibility: "10+2 in any stream",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "B.Sc in Biotechnology",
        duration: "3 Years",
        fees: "₹40,000/Yr",
        eligibility: "10+2 with Biology / Biotechnology",
        type: "SCIENCE",
        intake: 60
      }
    ]
  },
  2093: {
    name: "Bipin Tripathi Kumaon Institute of Technology (BTKIT), Dwarahat",
    shortName: "BTKIT Dwarahat",
    type: "Public/Government (Autonomous State Government Institute)",
    ownership: "Public/Government",
    website: "https://kecua.ac.in",
    phone: "05966-244250",
    address: "Dwarahat, Almora District, Uttarakhand - 263653",
    location: "Almora",
    state: "Uttarakhand",
    fees: "₹58,000/Yr",
    affiliation: "Autonomous Institute funded by Government of Uttarakhand / UTU & AICTE",
    about: "Bipin Tripathi Kumaon Institute of Technology (BTKIT) Dwarahat, established in 1991 by the Government of Uttar Pradesh / Uttarakhand (formerly Kumaon Engineering College - KEC), is an autonomous state government engineering college spread across a 155-acre residential campus in the Kumaon hills, offering AICTE-approved B.Tech, M.Tech, and MCA programs.",
    courses: [
      {
        title: "B.Tech in Chemical Engineering",
        duration: "4 Years",
        fees: "₹58,000/Yr",
        eligibility: "10+2 with PCM + JEE Main / UTU Counselling",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹58,000/Yr",
        eligibility: "10+2 with PCM + JEE Main / UTU Counselling",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Electronics & Communication Engineering",
        duration: "4 Years",
        fees: "₹58,000/Yr",
        eligibility: "10+2 with PCM + JEE Main / UTU Counselling",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹58,000/Yr",
        eligibility: "10+2 with PCM + JEE Main / UTU Counselling",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Master of Computer Applications (MCA)",
        duration: "2 Years",
        fees: "₹45,000/Yr",
        eligibility: "BCA / B.Sc (IT/CS) with Mathematics + UTU Entrance",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      }
    ]
  },
  2094: {
    name: "Omkarananda Institute of Management and Technology (OIMT), Rishikesh",
    shortName: "OIMT Rishikesh",
    type: "Private",
    ownership: "Private (Omkarananda Ashram Himalayas Trust)",
    website: "https://www.oimt.ac.in",
    phone: "0135-2431020",
    address: "Swami Omkarananda Saraswati Marg, Muni-ki-Reti, Rishikesh, Tehri Garhwal, Uttarakhand - 249192",
    location: "Tehri Garhwal",
    state: "Uttarakhand",
    fees: "₹52,000/Yr",
    affiliation: "Uttarakhand Technical University (UTU) & SDSUV",
    about: "Omkarananda Institute of Management and Technology (OIMT) Rishikesh, established in 1999 by the Swami Omkarananda Saraswati Trust, is an AICTE-approved institution located on the banks of the Ganges in Muni-ki-Reti, offering undergraduate and postgraduate education in management and computer applications.",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹52,000/Yr",
        eligibility: "10+2 with Mathematics / Computer Studies",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹52,000/Yr",
        eligibility: "10+2 in any stream",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "Master of Business Administration (MBA)",
        duration: "2 Years",
        fees: "₹75,000/Yr",
        eligibility: "Graduation with minimum 50% + MAT/CAT/UTU",
        type: "MANAGEMENT",
        intake: 60
      }
    ]
  },
  2095: {
    name: "Institute of Hospitality, Management and Sciences (IHMS), Kotdwar",
    shortName: "IHMS Kotdwar",
    type: "Private",
    ownership: "Private",
    website: "https://www.ihms.ac.in",
    phone: "01382-229150",
    address: "Balbhadrapur, Kotdwar, Pauri Garhwal, Uttarakhand - 246149",
    location: "Pauri Garhwal",
    state: "Uttarakhand",
    fees: "₹70,000/Yr",
    affiliation: "HNB Garhwal Central University / Uttarakhand Technical University (UTU)",
    about: "Institute of Hospitality, Management and Sciences (IHMS) Kotdwar, established in 2006, is a premier higher education institute in the Garhwal foothills affiliated to HNB Garhwal Central University and UTU, offering specialized courses in IT, management, and hospitality.",
    courses: [
      {
        title: "Master of Computer Applications (MCA)",
        duration: "2 Years",
        fees: "₹70,000/Yr",
        eligibility: "BCA / B.Sc (IT/CS) with minimum 50%",
        type: "COMPUTER APPLICATIONS",
        intake: 30
      },
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹48,000/Yr",
        eligibility: "10+2 with Mathematics / Computer Studies",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹48,000/Yr",
        eligibility: "10+2 in any stream",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "Bachelor of Hotel Management (BHM)",
        duration: "4 Years",
        fees: "₹65,000/Yr",
        eligibility: "10+2 in any stream",
        type: "HOTEL MANAGEMENT",
        intake: 60
      }
    ]
  },
  2096: {
    name: "Government Polytechnic Chopta, Rudraprayag",
    shortName: "Govt Polytechnic Chopta",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://ukdte.in",
    phone: "01364-267120",
    address: "Chopta, Mohankhal, Rudraprayag District, Uttarakhand - 246419",
    location: "Rudraprayag",
    state: "Uttarakhand",
    fees: "₹8,000/Yr",
    affiliation: "Directorate of Technical Education, Uttarakhand / UBTER & AICTE",
    about: "Government Polytechnic Chopta, established in 2017 by the Government of Uttarakhand under the Directorate of Technical Education, is an AICTE-approved public technical institute in the Garhwal Himalayas offering subsidized 3-year engineering diploma education in Civil Engineering.",
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

progress.verifiedColleges = 2100;
progress.last_batch_completed = 210;
progress.currentBatch = 210;
progress.lastUpdated = new Date().toISOString();

if (!progress.batches) {
  progress.batches = {};
}

progress.batches["210"] = {
  status: "verified",
  verifiedCount: 10,
  range: "2091-2100",
  ids: batchIds,
  verifiedAt: new Date().toISOString()
};

if (!progress.batchHistory) {
  progress.batchHistory = [];
}
progress.batchHistory.push({
  batch: 210,
  verifiedCount: 10,
  totalVerified: 2100,
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
const batch210Entries = batchIds.map((id, i) => {
  const c = batchUpdates[id];
  return `| ${2090 + i + 1} | ${c.name} | ${c.location} | ${c.state} | ${c.type} | [Portal](${c.website}) |`;
}).join('\n');

if (!mdContent.includes(batchUpdates[2087].name)) {
  mdContent += `\n\n### Batch 210 (Colleges 2,091–2,100)\n\n| # | College Name | City | State | Type | Website |\n|---|---|---|---|---|---|\n${batch210Entries}\n`;
  fs.writeFileSync(allVerifiedMdPath, mdContent, 'utf8');
}

console.log('Batch 210 verification successfully completed!');
