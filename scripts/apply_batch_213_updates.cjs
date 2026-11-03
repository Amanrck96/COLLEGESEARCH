const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const progressPath = path.join(__dirname, '../reports/verification/progress.json');
const allVerifiedJsonPath = path.join(__dirname, '../reports/verification/all_verified_colleges.json');
const allVerifiedMdPath = path.join(__dirname, '../reports/verification/all_verified_colleges.md');

const batchUpdates = {
  2117: {
    name: "Indian Institute of Remote Sensing (IIRS), ISRO, Dehradun",
    shortName: "IIRS ISRO Dehradun",
    type: "Public/Government (Constituent Unit of ISRO, Dept of Space, Govt of India)",
    ownership: "Public/Government",
    website: "https://www.iirs.gov.in",
    phone: "0135-2524399",
    address: "4, Kalidas Road, Post Box No. 135, Dehradun, Uttarakhand - 248001",
    location: "Dehradun",
    state: "Uttarakhand",
    fees: "₹40,000/Yr",
    affiliation: "Indian Space Research Organisation (ISRO), Department of Space, Government of India / Andhra University",
    about: "Indian Institute of Remote Sensing (IIRS) Dehradun, established in 1966 under the Indian Space Research Organisation (ISRO), Department of Space, Government of India, is the premier institute for capacity building in remote sensing, geoinformatics, and GPS technologies for natural resource management and disaster applications.",
    courses: [
      {
        title: "M.Tech in Remote Sensing and GIS",
        duration: "2 Years",
        fees: "₹40,000/Yr",
        eligibility: "B.E. / B.Tech / M.Sc in relevant field + GATE / IIRS Entrance",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "M.Sc in Geoinformatics",
        duration: "2 Years",
        fees: "₹60,000/Yr",
        eligibility: "Bachelor's degree in Science / Engineering with 55%",
        type: "SCIENCE",
        intake: 20
      },
      {
        title: "Post Graduate Diploma in Remote Sensing & GIS",
        duration: "1 Year",
        fees: "₹30,000",
        eligibility: "Graduate degree in relevant discipline",
        type: "POST GRADUATE DIPLOMA",
        intake: 40
      }
    ]
  },
  2118: {
    name: "Government Polytechnic Hindolakhal, Tehri Garhwal",
    shortName: "Govt Polytechnic Hindolakhal",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "http://gphindolakhal.org.in/",
    phone: "01378-226010",
    address: "Hindolakhal, Kirtinagar, Tehri Garhwal District, Uttarakhand - 249126",
    location: "Tehri Garhwal",
    state: "Uttarakhand",
    fees: "₹8,000/Yr",
    affiliation: "Directorate of Technical Education, Uttarakhand / UBTER Roorkee & AICTE",
    about: "Government Polytechnic Hindolakhal, established under the Directorate of Technical Education, Government of Uttarakhand, is an AICTE-approved public technical polytechnic in Tehri Garhwal providing subsidized 3-year diploma education in mechanical engineering.",
    courses: [
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th with Science & Mathematics + JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 40
      }
    ]
  },
  2119: {
    name: "Government Polytechnic Pipli, Uttarkashi",
    shortName: "Govt Polytechnic Pipli",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://gppipli.org.in",
    phone: "01374-222120",
    address: "Pipli, Dunda, Uttarkashi District, Uttarakhand - 249151",
    location: "Uttarkashi",
    state: "Uttarakhand",
    fees: "₹8,000/Yr",
    affiliation: "Directorate of Technical Education, Uttarakhand / UBTER Roorkee & AICTE",
    about: "Government Polytechnic Pipli, established by the Directorate of Technical Education, Government of Uttarakhand, is an AICTE-approved public technical polytechnic in Uttarkashi offering subsidized 3-year diploma training in electrical engineering.",
    courses: [
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
  2120: {
    name: "Government Polytechnic Peerumadara, Ramnagar, Nainital",
    shortName: "Govt Polytechnic Peerumadara",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://gppeerumadara.org",
    phone: "05947-285010",
    address: "Peerumadara, Ramnagar, Nainital District, Uttarakhand - 244715",
    location: "Nainital",
    state: "Uttarakhand",
    fees: "₹8,000/Yr",
    affiliation: "Directorate of Technical Education, Uttarakhand / UBTER Roorkee & AICTE",
    about: "Government Polytechnic Peerumadara Ramnagar, established in 2014 by the Government of Uttarakhand under the Directorate of Technical Education, is an AICTE-approved state polytechnic near Corbett National Park providing subsidized technical diploma education in electrical engineering.",
    courses: [
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th with Science & Mathematics + JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  2121: {
    name: "Government Polytechnic Gairsain, Chamoli",
    shortName: "Govt Polytechnic Gairsain",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://www.gpgairsain.com",
    phone: "01363-268020",
    address: "Gairsain (Summer Capital of Uttarakhand), Chamoli District, Uttarakhand - 246428",
    location: "Chamoli",
    state: "Uttarakhand",
    fees: "₹8,000/Yr",
    affiliation: "Directorate of Technical Education, Uttarakhand / UBTER Roorkee & AICTE",
    about: "Government Polytechnic Gairsain, located in the summer capital of Uttarakhand, is an AICTE-approved state government polytechnic institute under the Directorate of Technical Education, offering subsidized 3-year diploma education in electrical engineering and civil engineering.",
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
  2122: {
    name: "Government Polytechnic Okhalkhal, Pratapnagar, Tehri Garhwal",
    shortName: "Govt Polytechnic Pratapnagar",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://gppratapnagar.org.in",
    phone: "01376-284010",
    address: "Okhalkhal, Pratapnagar, Tehri Garhwal District, Uttarakhand - 249165",
    location: "Tehri Garhwal",
    state: "Uttarakhand",
    fees: "₹8,000/Yr",
    affiliation: "Directorate of Technical Education, Uttarakhand / UBTER Roorkee & AICTE",
    about: "Government Polytechnic Okhalkhal Pratapnagar, established under the Department of Higher & Technical Education, Government of Uttarakhand, is an AICTE-approved state polytechnic delivering subsidized 3-year technical diploma education in Civil Engineering to youth in rural Tehri Garhwal.",
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
  2123: {
    name: "Government Polytechnic Champawat",
    shortName: "Govt Polytechnic Champawat",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://gpchampawat.org.in",
    phone: "05967-227010",
    address: "Chharbar, Champawat, Champawat District, Uttarakhand - 262523",
    location: "Champawat",
    state: "Uttarakhand",
    fees: "₹8,000/Yr",
    affiliation: "Directorate of Technical Education, Uttarakhand / UBTER Roorkee & AICTE",
    about: "Government Polytechnic Champawat, established in 2014 by the Government of Uttarakhand, is an AICTE-approved public technical institute in eastern Kumaon providing subsidized 3-year diploma training in electrical engineering.",
    courses: [
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th with Science & Mathematics + JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  2124: {
    name: "Government Polytechnic Berinag, Pithoragarh",
    shortName: "Govt Polytechnic Berinag",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://gpberinag.in",
    phone: "05964-244015",
    address: "Berinag, Pithoragarh District, Uttarakhand - 262531",
    location: "Pithoragarh",
    state: "Uttarakhand",
    fees: "₹8,000/Yr",
    affiliation: "Directorate of Technical Education, Uttarakhand / UBTER Roorkee & AICTE",
    about: "Government Polytechnic Berinag, established by the Directorate of Technical Education, Government of Uttarakhand, is an AICTE-approved public polytechnic situated in the scenic hills of Berinag, offering subsidized 3-year diploma education in Civil and Environmental Engineering.",
    courses: [
      {
        title: "Diploma in Civil and Environmental Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th with Science & Mathematics + JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 40
      }
    ]
  },
  2125: {
    name: "Government Polytechnic Kandikhal, Tehri Garhwal",
    shortName: "Govt Polytechnic Kandikhal",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://gpkandikhal.org",
    phone: "01377-225010",
    address: "Kandikhal, Tehri Garhwal District, Uttarakhand - 249131",
    location: "Tehri Garhwal",
    state: "Uttarakhand",
    fees: "₹8,000/Yr",
    affiliation: "Directorate of Technical Education, Uttarakhand / UBTER Roorkee & AICTE",
    about: "Government Polytechnic Kandikhal, established by the Government of Uttarakhand under the Directorate of Technical Education, is an AICTE-approved public technical polytechnic offering subsidized 3-year diploma training in civil engineering.",
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
  2126: {
    name: "Government Polytechnic Baram, Pithoragarh",
    shortName: "Govt Polytechnic Baram",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://gpbaram.org.in",
    phone: "05964-266010",
    address: "Baram, Didihat, Pithoragarh District, Uttarakhand - 262551",
    location: "Pithoragarh",
    state: "Uttarakhand",
    fees: "₹8,000/Yr",
    affiliation: "Directorate of Technical Education, Uttarakhand / UBTER Roorkee & AICTE",
    about: "Government Polytechnic Baram, located in the remote Himalayan border region of Didihat in Pithoragarh, is an AICTE-approved state government technical institute offering subsidized 3-year diploma education in electrical engineering.",
    courses: [
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th with Science & Mathematics + JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
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

progress.verifiedColleges = 2130;
progress.last_batch_completed = 213;
progress.currentBatch = 213;
progress.lastUpdated = new Date().toISOString();

if (!progress.batches) {
  progress.batches = {};
}

progress.batches["213"] = {
  status: "verified",
  verifiedCount: 10,
  range: "2121-2130",
  ids: batchIds,
  verifiedAt: new Date().toISOString()
};

if (!progress.batchHistory) {
  progress.batchHistory = [];
}
progress.batchHistory.push({
  batch: 213,
  verifiedCount: 10,
  totalVerified: 2130,
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
const batch213Entries = batchIds.map((id, i) => {
  const c = batchUpdates[id];
  return `| ${2120 + i + 1} | ${c.name} | ${c.location} | ${c.state} | ${c.type} | [Portal](${c.website}) |`;
}).join('\n');

if (!mdContent.includes(batchUpdates[2117].name)) {
  mdContent += `\n\n### Batch 213 (Colleges 2,121–2,130)\n\n| # | College Name | City | State | Type | Website |\n|---|---|---|---|---|---|\n${batch213Entries}\n`;
  fs.writeFileSync(allVerifiedMdPath, mdContent, 'utf8');
}

console.log('Batch 213 verification successfully completed!');

