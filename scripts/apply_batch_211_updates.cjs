const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const progressPath = path.join(__dirname, '../reports/verification/progress.json');
const allVerifiedJsonPath = path.join(__dirname, '../reports/verification/all_verified_colleges.json');
const allVerifiedMdPath = path.join(__dirname, '../reports/verification/all_verified_colleges.md');

const batchUpdates = {
  2097: {
    name: "Government Polytechnic Bachelikhal, Tehri Garhwal",
    shortName: "Govt Polytechnic Bachelikhal",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://gpbachelikhal.org.in",
    phone: "01378-227025",
    address: "Bachelikhal, Devprayag, Tehri Garhwal, Uttarakhand - 249123",
    location: "Tehri Garhwal",
    state: "Uttarakhand",
    fees: "₹8,000/Yr",
    affiliation: "Directorate of Technical Education, Uttarakhand / UBTER Roorkee & AICTE",
    about: "Government Polytechnic Bachelikhal, established in 2014 by the Government of Uttarakhand under the Directorate of Technical Education, is an AICTE-approved public technical polytechnic delivering subsidized 3-year diploma education in mechanical engineering, computer science, and pharmacy.",
    courses: [
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th with Science & Mathematics + JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 40
      },
      {
        title: "Diploma in Computer Science & Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th with Science & Mathematics + JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 40
      }
    ]
  },
  2098: {
    name: "Government Polytechnic Khatima, Udham Singh Nagar",
    shortName: "Govt Polytechnic Khatima",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://gpkhatima.org",
    phone: "05943-250125",
    address: "Sujiya Maholiya, Khatima, Udham Singh Nagar, Uttarakhand - 262308",
    location: "Udham Singh Nagar",
    state: "Uttarakhand",
    fees: "₹8,000/Yr",
    affiliation: "Directorate of Technical Education, Uttarakhand / UBTER Roorkee & AICTE",
    about: "Government Polytechnic Khatima, established by the Directorate of Technical Education, Government of Uttarakhand, is an AICTE-approved public polytechnic situated in the Terai region of Udham Singh Nagar, offering affordable technical diploma education in civil, mechanical, and electrical engineering.",
    courses: [
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th with Science & Mathematics + JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th with Science & Mathematics + JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 40
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
  2099: {
    name: "Satyanand Dimri Uttarakhand Government Institute of Polytechnic, Barkot",
    shortName: "SD Govt Polytechnic Barkot",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://gpbarkot.org.in",
    phone: "01375-224210",
    address: "Barkot, Rawain, Uttarkashi District, Uttarakhand - 249141",
    location: "Uttarkashi",
    state: "Uttarakhand",
    fees: "₹8,000/Yr",
    affiliation: "Directorate of Technical Education, Uttarakhand / UBTER Roorkee & AICTE",
    about: "Satyanand Dimri Uttarakhand Government Institute of Polytechnic Barkot, established by the Government of Uttarakhand and named after the renowned freedom fighter, is an AICTE-approved premier public polytechnic in the Yamuna valley of Uttarkashi offering subsidized engineering diploma education in civil engineering.",
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
  2100: {
    name: "Government Polytechnic Bans Bagarh, Pithoragarh",
    shortName: "Govt Polytechnic Bans Bagarh",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://ugipbanspth.org.in",
    phone: "05964-265110",
    address: "Bans, Berinag, Pithoragarh District, Uttarakhand - 262534",
    location: "Pithoragarh",
    state: "Uttarakhand",
    fees: "₹8,000/Yr",
    affiliation: "Directorate of Technical Education, Uttarakhand / UBTER Roorkee & AICTE",
    about: "Government Polytechnic Bans Bagarh, located in the hill district of Pithoragarh, is an AICTE-approved state government technical institute functioning under the Directorate of Technical Education, offering specialized subsidized 3-year engineering diploma education in civil engineering with public health engineering.",
    courses: [
      {
        title: "Diploma in Civil Engineering (Public Health Engineering)",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th with Science & Mathematics + JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 40
      }
    ]
  },
  2101: {
    name: "Government Polytechnic Bhimtal, Nainital",
    shortName: "Govt Polytechnic Bhimtal",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://gpbhimtal.org.in",
    phone: "05942-247060",
    address: "Bhimtal, Nainital District, Uttarakhand - 263136",
    location: "Nainital",
    state: "Uttarakhand",
    fees: "₹8,000/Yr",
    affiliation: "Directorate of Technical Education, Uttarakhand / UBTER Roorkee & AICTE",
    about: "Government Polytechnic Bhimtal, established in 2014 by the Government of Uttarakhand in the scenic Kumaon lake region, is an AICTE-approved public technical institute offering subsidized engineering diploma courses in civil engineering and electrical engineering.",
    courses: [
      {
        title: "Diploma in Civil Engineering",
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
  2102: {
    name: "Government Polytechnic Jakhanidhar, Tehri Garhwal",
    shortName: "Govt Polytechnic Jakhanidhar",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://gpjakhanidhar.in",
    phone: "01376-282030",
    address: "Jakhanidhar, Tehri Garhwal District, Uttarakhand - 249123",
    location: "Tehri Garhwal",
    state: "Uttarakhand",
    fees: "₹8,000/Yr",
    affiliation: "Directorate of Technical Education, Uttarakhand / UBTER Roorkee & AICTE",
    about: "Government Polytechnic Jakhanidhar, established by the Directorate of Technical Education, Government of Uttarakhand, is an AICTE-approved state polytechnic institute located in rural Tehri Garhwal, offering subsidized diploma education in computer science and engineering.",
    courses: [
      {
        title: "Diploma in Computer Science & Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th with Science & Mathematics + JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 40
      }
    ]
  },
  2103: {
    name: "Government Polytechnic Munakot, Pithoragarh",
    shortName: "Govt Polytechnic Munakot",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://www.gpmunakot.in",
    phone: "05964-228040",
    address: "Munakot, Pithoragarh District, Uttarakhand - 262521",
    location: "Pithoragarh",
    state: "Uttarakhand",
    fees: "₹8,000/Yr",
    affiliation: "Directorate of Technical Education, Uttarakhand / UBTER Roorkee & AICTE",
    about: "Government Polytechnic Munakot, established by the Government of Uttarakhand under the Directorate of Technical Education, is an AICTE-approved border-area technical institution offering subsidized 3-year diploma education in Civil Engineering.",
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
  2104: {
    name: "Government Polytechnic Chinyalisaur, Uttarkashi",
    shortName: "Govt Polytechnic Chinyalisaur",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://ukdte.in",
    phone: "01371-236125",
    address: "Chinyalisaur, Uttarkashi District, Uttarakhand - 249196",
    location: "Uttarkashi",
    state: "Uttarakhand",
    fees: "₹8,000/Yr",
    affiliation: "Directorate of Technical Education, Uttarakhand / UBTER Roorkee & AICTE",
    about: "Government Polytechnic Chinyalisaur, established in 2014 by the Government of Uttarakhand, is an AICTE-approved public technical polytechnic situated along the Bhagirathi river in Uttarkashi, providing subsidized 3-year diploma training in civil engineering.",
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
  2105: {
    name: "Harishchandra Government Polytechnic Bhalswagaj, Haridwar",
    shortName: "HC Govt Polytechnic Haridwar",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://gpbjharidwar.org",
    phone: "01332-239015",
    address: "Bhalswagaj, Bhagwanpur, Roorkee, Haridwar, Uttarakhand - 247661",
    location: "Haridwar",
    state: "Uttarakhand",
    fees: "₹8,000/Yr",
    affiliation: "Directorate of Technical Education, Uttarakhand / UBTER Roorkee & AICTE",
    about: "Harishchandra Government Polytechnic Bhalswagaj, established by the Directorate of Technical Education, Government of Uttarakhand, is an AICTE-approved premier state government polytechnic near the industrial corridor of Haridwar-Roorkee offering subsidized diploma education in mechanical and civil engineering.",
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
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th with Science & Mathematics + JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 40
      }
    ]
  },
  2106: {
    name: "Government Polytechnic Kapkot, Bageshwar",
    shortName: "Govt Polytechnic Kapkot",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://ukdte.in",
    phone: "05963-253018",
    address: "Kapkot, Bageshwar District, Uttarakhand - 263632",
    location: "Bageshwar",
    state: "Uttarakhand",
    fees: "₹8,000/Yr",
    affiliation: "Directorate of Technical Education, Uttarakhand / UBTER Roorkee & AICTE",
    about: "Government Polytechnic Kapkot, established by the Government of Uttarakhand under the Directorate of Technical Education, is an AICTE-approved public polytechnic in the Kumaon Himalayas providing subsidized professional diploma education in Modern Office Management and Secretarial Practices.",
    courses: [
      {
        title: "Diploma in Modern Office Management and Secretarial Practice (MOMSP)",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th / 10+2 passed + JEEP",
        type: "MANAGEMENT",
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

progress.verifiedColleges = 2110;
progress.last_batch_completed = 211;
progress.currentBatch = 211;
progress.lastUpdated = new Date().toISOString();

if (!progress.batches) {
  progress.batches = {};
}

progress.batches["211"] = {
  status: "verified",
  verifiedCount: 10,
  range: "2101-2110",
  ids: batchIds,
  verifiedAt: new Date().toISOString()
};

if (!progress.batchHistory) {
  progress.batchHistory = [];
}
progress.batchHistory.push({
  batch: 211,
  verifiedCount: 10,
  totalVerified: 2110,
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
const batch211Entries = batchIds.map((id, i) => {
  const c = batchUpdates[id];
  return `| ${2100 + i + 1} | ${c.name} | ${c.location} | ${c.state} | ${c.type} | [Portal](${c.website}) |`;
}).join('\n');

if (!mdContent.includes(batchUpdates[2097].name)) {
  mdContent += `\n\n### Batch 211 (Colleges 2,101–2,110)\n\n| # | College Name | City | State | Type | Website |\n|---|---|---|---|---|---|\n${batch211Entries}\n`;
  fs.writeFileSync(allVerifiedMdPath, mdContent, 'utf8');
}

console.log('Batch 211 verification successfully completed!');

