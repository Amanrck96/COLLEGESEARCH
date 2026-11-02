const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const progressPath = path.join(__dirname, '../reports/verification/progress.json');
const allVerifiedJsonPath = path.join(__dirname, '../reports/verification/all_verified_colleges.json');
const allVerifiedMdPath = path.join(__dirname, '../reports/verification/all_verified_colleges.md');

const batchUpdates = {
  1947: {
    name: "Government Post Graduate College, Dharamshala",
    shortName: "Govt PG College Dharamshala",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://gcdharamshala.ac.in",
    phone: "01892-224827",
    address: "College Road, Civil Lines, Dharamshala, Kangra, Himachal Pradesh - 176215",
    location: "Kangra",
    state: "Himachal Pradesh",
    fees: "₹18,000/Yr",
    affiliation: "Himachal Pradesh University (HPU), Shimla (NAAC 'A' Grade)",
    about: "Government Post Graduate College Dharamshala, established in 1912, is a premier government heritage college of Himachal Pradesh accredited with NAAC Grade 'A', offering prestigious postgraduate and undergraduate programs in computer applications, science, arts, and management.",
    courses: [
      {
        title: "Master of Computer Applications (MCA)",
        duration: "2 Years",
        fees: "₹18,000/Yr",
        eligibility: "BCA / B.Sc / B.Com with Mathematics + HPU MCA Entrance",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹15,000/Yr",
        eligibility: "10+2 with Mathematics / Computer",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Master of Business Administration (MBA)",
        duration: "2 Years",
        fees: "₹25,000/Yr",
        eligibility: "Graduation with 50% + HPU MAT",
        type: "MANAGEMENT",
        intake: 60
      }
    ]
  },
  1948: {
    name: "PVC Naib Subedar Sanjay Kumar Government Polytechnic, Bilaspur at Kalol",
    shortName: "PVC Sanjay Kumar Govt Polytechnic",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://gpkalol.org",
    phone: "01978-286050",
    address: "VPO Kalol, Tehsil Jhandutta, District Bilaspur, Himachal Pradesh - 174035",
    location: "Bilaspur",
    state: "Himachal Pradesh",
    fees: "₹8,000/Yr",
    affiliation: "Himachal Pradesh Takniki Shiksha Board (HPTSB), Dharamshala",
    about: "Param Veer Chakra Naib Subedar Sanjay Kumar Government Polytechnic Kalol (Bilaspur), established in 2013 by the Government of Himachal Pradesh, is an AICTE-approved premier public polytechnic delivering subsidized diploma courses in mechanical, civil, and electrical engineering.",
    courses: [
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th pass + HP PAT counseling",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th pass + HP PAT counseling",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th pass + HP PAT counseling",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  1949: {
    name: "Atal Bihari Vajpayee Government Institute of Engineering & Technology (ABVGIET)",
    shortName: "ABVGIET Pragatinagar",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://abvgiet.ac.in",
    phone: "01783-253918",
    address: "Pragatinagar, Tehsil Kotkhai, Shimla, Himachal Pradesh - 171202",
    location: "Shimla",
    state: "Himachal Pradesh",
    fees: "₹8,000/Yr",
    affiliation: "HPTSB Dharamshala & HPTU Hamirpur",
    about: "Atal Bihari Vajpayee Government Institute of Engineering and Technology Pragatinagar (Shimla), established in 2011, is an AICTE-approved flagship government technical institution named after former Prime Minister Atal Bihari Vajpayee, offering both degree and diploma programs.",
    courses: [
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th pass with PAT counseling",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th pass with PAT counseling",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "Diploma in Computer Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th pass with PAT counseling",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ]
  },
  1950: {
    name: "Government Polytechnic, Kangra",
    shortName: "GP Kangra",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://gpkangra.org.in",
    phone: "01892-265026",
    address: "Polytechnic Road, Kangra, Himachal Pradesh - 176001",
    location: "Kangra",
    state: "Himachal Pradesh",
    fees: "₹8,000/Yr",
    affiliation: "Himachal Pradesh Takniki Shiksha Board (HPTSB), Dharamshala",
    about: "Government Polytechnic Kangra, established in 1959, is the oldest and most prestigious polytechnic in Himachal Pradesh, approved by AICTE, providing high-standard engineering diplomas in computer, civil, electrical, and electronics engineering.",
    courses: [
      {
        title: "Diploma in Computer Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th pass with PAT counseling",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th pass with PAT counseling",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th pass with PAT counseling",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Electronics & Communication Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th pass with PAT counseling",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  1951: {
    name: "Government Polytechnic, Rohru",
    shortName: "GP Rohru",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://gprohru.org",
    phone: "01781-240120",
    address: "VPO Rohru, District Shimla, Himachal Pradesh - 171207",
    location: "Shimla",
    state: "Himachal Pradesh",
    fees: "₹8,000/Yr",
    affiliation: "Himachal Pradesh Takniki Shiksha Board (HPTSB), Dharamshala",
    about: "Government Polytechnic Rohru, established in 1999 under the Department of Technical Education, Himachal Pradesh, is an AICTE-approved co-educational polytechnic institute imparting technical education to the youth of upper Shimla district.",
    courses: [
      {
        title: "Diploma in Electronics & Communication Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th pass with PAT counseling",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Computer Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th pass with PAT counseling",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  1952: {
    name: "K.C. Polytechnic, Pandoga (Una)",
    shortName: "KC Polytechnic Una",
    type: "Private",
    ownership: "Private",
    website: "https://kcinstitutes.com",
    phone: "01975-241461",
    address: "VPO Pandoga, Tehsil Haroli, District Una, Himachal Pradesh - 177207",
    location: "Una",
    state: "Himachal Pradesh",
    fees: "₹35,000/Yr",
    affiliation: "Himachal Pradesh Takniki Shiksha Board (HPTSB), Dharamshala",
    about: "K.C. Polytechnic Pandoga, established in 2009 under the K.C. Educational and Social Welfare Society, is an AICTE-approved private polytechnic offering technical diplomas across core engineering branches in Una district.",
    courses: [
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹35,000/Yr",
        eligibility: "Class 10th pass + HP PAT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹35,000/Yr",
        eligibility: "Class 10th pass + HP PAT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹35,000/Yr",
        eligibility: "Class 10th pass + HP PAT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  1953: {
    name: "Sundernagar Integrated Rural Development Association (SIRDA) Polytechnic",
    shortName: "SIRDA Polytechnic Mandi",
    type: "Private",
    ownership: "Private",
    website: "https://sirda.in",
    phone: "01907-266170",
    address: "Village Naulakha, P.O. Kanaid, Tehsil Sundernagar, District Mandi, Himachal Pradesh - 175019",
    location: "Mandi",
    state: "Himachal Pradesh",
    fees: "₹35,000/Yr",
    affiliation: "Himachal Pradesh Takniki Shiksha Board (HPTSB), Dharamshala",
    about: "SIRDA Polytechnic Naulakha, established in 2009 by Sundernagar Integrated Rural Development Association, is an AICTE-approved polytechnic college delivering diploma training in technical fields.",
    courses: [
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹35,000/Yr",
        eligibility: "Class 10th pass + HP PAT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹35,000/Yr",
        eligibility: "Class 10th pass + HP PAT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹35,000/Yr",
        eligibility: "Class 10th pass + HP PAT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ]
  },
  1954: {
    name: "Government Polytechnic, Talwar",
    shortName: "GP Talwar",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://gptalwar.org",
    phone: "01894-275100",
    address: "VPO Talwar, Tehsil Jaisinghpur, District Kangra, Himachal Pradesh - 176096",
    location: "Kangra",
    state: "Himachal Pradesh",
    fees: "₹8,000/Yr",
    affiliation: "Himachal Pradesh Takniki Shiksha Board (HPTSB), Dharamshala",
    about: "Government Polytechnic Talwar, established in 2013 under the Directorate of Technical Education, Himachal Pradesh, is an AICTE-approved public institution offering affordable diploma courses in civil and automobile engineering.",
    courses: [
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th pass with PAT counseling",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 40
      },
      {
        title: "Diploma in Automobile Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th pass with PAT counseling",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 40
      }
    ]
  },
  1955: {
    name: "University Institute of Technology (UIT), Himachal Pradesh University",
    shortName: "UIT HPU Shimla",
    type: "Public/Government (State University)",
    ownership: "Public/Government",
    website: "https://uit.hpuniv.ac.in",
    phone: "0177-2832571",
    address: "Silverwood Estate, HPU Campus, Summerhill, Shimla, Himachal Pradesh - 171005",
    location: "Shimla",
    state: "Himachal Pradesh",
    fees: "₹80,000/Yr",
    affiliation: "Himachal Pradesh University (HPU), Shimla (State University)",
    about: "University Institute of Technology (UIT) Shimla, established in 2000 as the engineering constituent of Himachal Pradesh University (a NAAC Grade 'A' State Public University), offers premier AICTE-approved undergraduate engineering degrees.",
    courses: [
      {
        title: "B.Tech in Information Technology",
        duration: "4 Years",
        fees: "₹80,000/Yr",
        eligibility: "10+2 with PCM + HPU UIT Entrance / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Computer Science & Engineering",
        duration: "4 Years",
        fees: "₹80,000/Yr",
        eligibility: "10+2 with PCM + HPU UIT Entrance / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹80,000/Yr",
        eligibility: "10+2 with PCM + HPU UIT Entrance / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Electrical Engineering",
        duration: "4 Years",
        fees: "₹80,000/Yr",
        eligibility: "10+2 with PCM + HPU UIT Entrance / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  1956: {
    name: "Dr. B.R. Ambedkar Government Polytechnic, Ambota",
    shortName: "GP Ambota",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://gpambota.org.in",
    phone: "01976-260249",
    address: "VPO Ambota, Tehsil Ghanari, District Una, Himachal Pradesh - 177205",
    location: "Una",
    state: "Himachal Pradesh",
    fees: "₹8,000/Yr",
    affiliation: "Himachal Pradesh Takniki Shiksha Board (HPTSB), Dharamshala",
    about: "Dr. B.R. Ambedkar Government Polytechnic Ambota (Una), established in 1999 by the Government of Himachal Pradesh, is an AICTE-approved premier public polytechnic delivering diploma training in computer, civil, architecture, and electronics engineering.",
    courses: [
      {
        title: "Diploma in Computer Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th pass with PAT counseling",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th pass with PAT counseling",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Architecture Assistantship",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th pass with PAT counseling",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 40
      }
    ]
  }
};

console.log('Loading siteData.json...');
const colleges = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const batchIds = Object.keys(batchUpdates).map(Number);

let updatedCount = 0;
colleges.forEach(c => {
  if (batchUpdates[c.id]) {
    const update = batchUpdates[c.id];
    Object.assign(c, update);
    c.verified = true;
    c.verificationDate = new Date().toISOString();
    updatedCount++;
  }
});

console.log(`Applied updates to ${updatedCount} colleges in siteData.`);
fs.writeFileSync(siteDataPath, JSON.stringify(colleges, null, 2), 'utf8');

// Update progress.json
console.log('Updating progress.json...');
let progress = JSON.parse(fs.readFileSync(progressPath, 'utf8'));

progress.verifiedColleges = 1960;
progress.last_batch_completed = 196;
progress.currentBatch = 196;
progress.lastUpdated = new Date().toISOString();

if (!progress.batches) {
  progress.batches = {};
}

progress.batches["196"] = {
  status: "verified",
  verifiedCount: 10,
  range: "1951-1960",
  ids: batchIds,
  verifiedAt: new Date().toISOString()
};

if (!progress.batchHistory) {
  progress.batchHistory = [];
}
progress.batchHistory.push({
  batch: 196,
  verifiedCount: 10,
  totalVerified: 1960,
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
const batch196Entries = batchIds.map((id, i) => {
  const c = batchUpdates[id];
  return `| ${1950 + i + 1} | ${c.name} | ${c.location} | ${c.state} | ${c.type} | [Portal](${c.website}) |`;
}).join('\n');

if (!mdContent.includes(batchUpdates[1947].name)) {
  mdContent += `\n\n### Batch 196 (Colleges 1,951–1,960)\n\n| # | College Name | City | State | Type | Website |\n|---|---|---|---|---|---|\n${batch196Entries}\n`;
  fs.writeFileSync(allVerifiedMdPath, mdContent, 'utf8');
}

console.log('Batch 196 verification successfully completed!');

