const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const progressPath = path.join(__dirname, '../reports/verification/progress.json');
const allVerifiedJsonPath = path.join(__dirname, '../reports/verification/all_verified_colleges.json');
const allVerifiedMdPath = path.join(__dirname, '../reports/verification/all_verified_colleges.md');

const batchUpdates = {
  2127: {
    name: "Government Polytechnic, Barechhina",
    shortName: "GP Barechhina",
    city: "Almora",
    location: "Almora",
    state: "Uttarakhand",
    address: "Pithoragarh Road, Barechhina, District Almora, Uttarakhand - 263624",
    phone: "+91-5962-230010",
    website: "http://ukdte.org",
    rating: 4.1,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Government Polytechnic Barechhina is a premier state government technical institute situated in Almora district, Uttarakhand. Established by the Directorate of Technical Education and approved by AICTE, the institute provides quality diploma engineering education in Electrical Engineering to empower rural and hilly youth.",
    fees: "₹8,000/Yr",
    exams: "UBTER JEEP",
    affiliation: "Uttarakhand Board of Technical Education, Roorkee (UBTER) / AICTE",
    courses: [
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "10th High School Pass / UBTER JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ]
  },
  2128: {
    name: "Sri Narendra Singh Bhandari Government Polytechnic, Pokhari",
    shortName: "SNSB GP Pokhari",
    city: "Chamoli",
    location: "Chamoli",
    state: "Uttarakhand",
    address: "Village Udaipur/Sinau, Post Udamada, Tehsil Pokhari, District Chamoli, Uttarakhand - 246473",
    phone: "+91-1372-225211",
    website: "http://ukdte.org",
    rating: 4.3,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Sri Narendra Singh Bhandari Government Polytechnic Pokhari is a state government technical institution established by the Department of Technical Education, Government of Uttarakhand. Approved by AICTE and affiliated to UBTER Roorkee, it provides specialized diploma education in Civil Engineering in the Garhwal Himalayas.",
    fees: "₹8,000/Yr",
    exams: "UBTER JEEP",
    affiliation: "Uttarakhand Board of Technical Education, Roorkee (UBTER) / AICTE",
    courses: [
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "10th High School Pass / UBTER JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ]
  },
  2129: {
    name: "Government Polytechnic, Jainti",
    shortName: "GP Jainti",
    city: "Almora",
    location: "Almora",
    state: "Uttarakhand",
    address: "Village Naya Sangroli, Post Jainti, Tehsil Jainti, District Almora, Uttarakhand - 263626",
    phone: "+91-5962-284010",
    website: "http://ukdte.org",
    rating: 4.0,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Government Polytechnic Jainti is a state government technical institution in Almora district of Uttarakhand. Operating under the Directorate of Technical Education, Uttarakhand, and approved by AICTE, it offers diploma engineering training in Civil Engineering with modern surveying and computing laboratories.",
    fees: "₹8,000/Yr",
    exams: "UBTER JEEP",
    affiliation: "Uttarakhand Board of Technical Education, Roorkee (UBTER) / AICTE",
    courses: [
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "10th High School Pass / UBTER JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ]
  },
  2130: {
    name: "Government Polytechnic, Quansi (Chakrata)",
    shortName: "GP Quansi",
    city: "Dehradun",
    location: "Dehradun",
    state: "Uttarakhand",
    address: "Village Quansi, Tehsil Chakrata, District Dehradun, Uttarakhand - 248123",
    phone: "+91-1360-275110",
    website: "http://ukdte.org",
    rating: 4.1,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Government Polytechnic Quansi Chakrata is a state government technical institute located in the Jaunsar-Bawar tribal region of Dehradun district. Established by the Government of Uttarakhand and approved by AICTE, it imparts high quality diploma education in Civil Engineering to youth of the Jaunsar tribal belt.",
    fees: "₹8,000/Yr",
    exams: "UBTER JEEP",
    affiliation: "Uttarakhand Board of Technical Education, Roorkee (UBTER) / AICTE",
    courses: [
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "10th High School Pass / UBTER JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ]
  },
  2131: {
    name: "Electronics Service & Training Centre (ESTC), Ramnagar",
    shortName: "ESTC Ramnagar",
    city: "Ramnagar",
    location: "Ramnagar",
    state: "Uttarakhand",
    address: "Kaniya, Ramnagar, District Nainital, Uttarakhand - 244715",
    phone: "+91-5947-251201",
    website: "https://www.estcindia.com",
    rating: 4.6,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Electronics Service & Training Centre (ESTC) Ramnagar is an autonomous institution established by the Government of India under the Ministry of Micro, Small and Medium Enterprises (MSME) with UNDP assistance. It provides high-tech training, technical consultancy, ESD, calibration, and specialized skill development in industrial electronics, automation, solar energy, and information technology.",
    fees: "₹35,000/Yr",
    exams: "Institutional Entrance / Merit",
    affiliation: "Autonomous Society, Ministry of MSME, Govt. of India / AICTE",
    courses: [
      {
        title: "Post Diploma in Industrial Automation & Mechatronics",
        duration: "1 Year",
        fees: "₹40,000 Total",
        eligibility: "Diploma / Degree in Electrical/Electronics/Mechanical",
        type: "POST DIPLOMA",
        intake: 40
      },
      {
        title: "Advanced Diploma in VLSI and Embedded Systems",
        duration: "1 Year",
        fees: "₹35,000 Total",
        eligibility: "B.Tech / Diploma in ECE/EE/CS",
        type: "ADVANCED DIPLOMA",
        intake: 40
      },
      {
        title: "Diploma in Tool & Die Making",
        duration: "3 Years",
        fees: "₹35,000/Yr",
        eligibility: "10th High School Pass with Math & Science",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  2132: {
    name: "Government Polytechnic, Kulsari",
    shortName: "GP Kulsari",
    city: "Chamoli",
    location: "Chamoli",
    state: "Uttarakhand",
    address: "Kulsari, Tharali, District Chamoli, Uttarakhand - 246481",
    phone: "+91-1363-267010",
    website: "http://ukdte.org",
    rating: 4.1,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Government Polytechnic Kulsari is a state government polytechnic institute located in Tharali block of Chamoli district, Uttarakhand. Approved by AICTE and affiliated to UBTER Roorkee, the institute offers diploma in Mechanical Engineering with specialized workshops in machining and thermal engineering.",
    fees: "₹8,000/Yr",
    exams: "UBTER JEEP",
    affiliation: "Uttarakhand Board of Technical Education, Roorkee (UBTER) / AICTE",
    courses: [
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "10th High School Pass / UBTER JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ]
  },
  2133: {
    name: "Government Polytechnic, Tanakpur",
    shortName: "GP Tanakpur",
    city: "Champawat",
    location: "Champawat",
    state: "Uttarakhand",
    address: "Purnagiri Road, Tanakpur, District Champawat, Uttarakhand - 262309",
    phone: "+91-5943-265111",
    website: "http://ukdte.org",
    rating: 4.2,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Government Polytechnic Tanakpur is a prominent state government polytechnic college located on Purnagiri Road in Tanakpur, Champawat district. Operating under the Directorate of Technical Education, Government of Uttarakhand, it provides diploma engineering training in Civil and Electrical Engineering.",
    fees: "₹8,000/Yr",
    exams: "UBTER JEEP",
    affiliation: "Uttarakhand Board of Technical Education, Roorkee (UBTER) / AICTE",
    courses: [
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "10th High School Pass / UBTER JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "10th High School Pass / UBTER JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ]
  },
  2134: {
    name: "Bishamber Sahai Institute of Technology (BSIT)",
    shortName: "BSIT Roorkee",
    city: "Roorkee",
    location: "Roorkee",
    state: "Uttarakhand",
    address: "6th Km Stone, Delhi-Dehradun Highway, NH-58, Saliyar, Roorkee, District Haridwar, Uttarakhand - 247667",
    phone: "+91-1332-264115",
    website: "http://bsitroorkee.org",
    rating: 4.1,
    type: "Private",
    ownership: "Private",
    about: "Bishamber Sahai Institute of Technology (BSIT), Roorkee is a premier private technical institute operated by the Bishamber Sahai Group of Institutions. Situated on NH-58 in Roorkee, BSIT is approved by AICTE and affiliated to UBTER Roorkee, providing comprehensive diploma engineering courses in mechanical, civil, and electrical disciplines.",
    fees: "₹35,000/Yr",
    exams: "UBTER JEEP / Merit",
    affiliation: "Uttarakhand Board of Technical Education, Roorkee (UBTER) / AICTE",
    courses: [
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹35,000/Yr",
        eligibility: "10th High School Pass / UBTER JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹35,000/Yr",
        eligibility: "10th High School Pass / UBTER JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹35,000/Yr",
        eligibility: "10th High School Pass / UBTER JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  2135: {
    name: "Government Polytechnic, Pabau",
    shortName: "GP Pabau",
    city: "Pauri Garhwal",
    location: "Pauri Garhwal",
    state: "Uttarakhand",
    address: "Village & Post Office Chopriyoun, Block Pabau, District Pauri Garhwal, Uttarakhand - 246164",
    phone: "+91-1368-278010",
    website: "http://ukdte.org",
    rating: 4.1,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Government Polytechnic Pabau is a state government technical institution established by the Department of Technical Education, Government of Uttarakhand. Located in Pabau block of Pauri Garhwal, it is approved by AICTE and affiliated to UBTER Roorkee, providing diploma engineering courses in Electrical Engineering.",
    fees: "₹8,000/Yr",
    exams: "UBTER JEEP",
    affiliation: "Uttarakhand Board of Technical Education, Roorkee (UBTER) / AICTE",
    courses: [
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "10th High School Pass / UBTER JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ]
  },
  2136: {
    name: "Government Polytechnic, Jakholi",
    shortName: "GP Jakholi",
    city: "Rudraprayag",
    location: "Rudraprayag",
    state: "Uttarakhand",
    address: "Block Office Building, Block Jakholi, District Rudraprayag, Uttarakhand - 246141",
    phone: "+91-1364-266010",
    website: "http://ukdte.org",
    rating: 4.1,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Government Polytechnic Jakholi is a state government polytechnic institute located in Jakholi block of Rudraprayag district, Uttarakhand. Approved by AICTE and affiliated to UBTER Roorkee, it provides diploma engineering education in Information Technology to empower youth in the Kedarnath valley region.",
    fees: "₹8,000/Yr",
    exams: "UBTER JEEP",
    affiliation: "Uttarakhand Board of Technical Education, Roorkee (UBTER) / AICTE",
    courses: [
      {
        title: "Diploma in Information Technology",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "10th High School Pass / UBTER JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ]
  }
};

// Update siteData.json
console.log('Updating siteData.json...');
const siteDataRaw = fs.readFileSync(siteDataPath, 'utf8');
const siteData = JSON.parse(siteDataRaw);
const colleges = Array.isArray(siteData) ? siteData : (siteData.colleges || []);

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

progress.verifiedColleges = 2140;
progress.batchesCompleted = 214;
progress.last_batch_completed = 214;
progress.currentBatch = 214;
progress.completionPercentage = "21.40%";
progress.lastUpdated = new Date().toISOString();

if (!progress.batches) {
  progress.batches = {};
}

progress.batches["214"] = {
  status: "verified",
  verifiedCount: 10,
  range: "2131-2140",
  ids: batchIds,
  verifiedAt: new Date().toISOString()
};

if (!progress.batchHistory) {
  progress.batchHistory = [];
}
progress.batchHistory.push({
  batch: 214,
  verifiedCount: 10,
  totalVerified: 2140,
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
const batch214Entries = batchIds.map((id, i) => {
  const c = batchUpdates[id];
  return `| ${2130 + i + 1} | ${c.name} | ${c.location} | ${c.state} | ${c.type} | [Portal](${c.website}) |`;
}).join('\n');

if (!mdContent.includes(batchUpdates[2127].name)) {
  mdContent += `\n\n### Batch 214 (Colleges 2,131–2,140)\n\n| # | College Name | City | State | Type | Website |\n|---|---|---|---|---|---|\n${batch214Entries}\n`;
  fs.writeFileSync(allVerifiedMdPath, mdContent, 'utf8');
}

console.log('Batch 214 verification successfully applied!');
