const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const progressPath = path.join(__dirname, '../reports/verification/progress.json');
const allVerifiedJsonPath = path.join(__dirname, '../reports/verification/all_verified_colleges.json');
const allVerifiedMdPath = path.join(__dirname, '../reports/verification/all_verified_colleges.md');

const batchUpdates = {
  1977: {
    name: "K.C. Group of Research & Professional Institutes, Pandoga",
    shortName: "KC Institutes Pandoga Una",
    type: "Private",
    ownership: "Private",
    website: "https://kcinstitutes.com",
    phone: "01975-241461",
    address: "VPO Pandoga, Tehsil Haroli, District Una, Himachal Pradesh - 177207",
    location: "Una",
    state: "Himachal Pradesh",
    fees: "₹70,000/Yr",
    affiliation: "Himachal Pradesh Technical University (HPTU), Hamirpur",
    about: "K.C. Group of Research & Professional Institutes Pandoga, established in 2009 by K.C. Educational and Social Welfare Society, is an AICTE-approved campus affiliated to HPTU Hamirpur, offering undergraduate engineering and technical programs.",
    courses: [
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹70,000/Yr",
        eligibility: "10+2 with PCM + HPCET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Computer Science & Engineering",
        duration: "4 Years",
        fees: "₹70,000/Yr",
        eligibility: "10+2 with PCM + HPCET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹70,000/Yr",
        eligibility: "10+2 with PCM + HPCET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  1978: {
    name: "T.R. Abhilashi Memorial Institute of Engineering and Technology (TRAMIET)",
    shortName: "TRAMIET Mandi",
    type: "Private",
    ownership: "Private",
    website: "https://abhilashiuniversity.ac.in",
    phone: "01905-248194",
    address: "Tanda, P.O. Balt, Tehsil Sadar, District Mandi, Himachal Pradesh - 175008",
    location: "Mandi",
    state: "Himachal Pradesh",
    fees: "₹65,000/Yr",
    affiliation: "Himachal Pradesh Technical University (HPTU), Hamirpur",
    about: "T.R. Abhilashi Memorial Institute of Engineering and Technology Tanda, established in 2009 under Abhilashi Educational Society, is an AICTE-approved engineering college offering undergraduate technical degrees.",
    courses: [
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹65,000/Yr",
        eligibility: "10+2 with PCM + HPCET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹65,000/Yr",
        eligibility: "10+2 with PCM + HPCET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ]
  },
  1979: {
    name: "Shri Vishnu Sanatan Dharam (SVSD) PG College, Bhatoli",
    shortName: "SVSD PG College Bhatoli",
    type: "Private",
    ownership: "Private (Govt-Aided)",
    website: "https://svsdcollege.in",
    phone: "01975-256044",
    address: "VPO Bhatoli, Tehsil & District Una, Himachal Pradesh - 174303",
    location: "Una",
    state: "Himachal Pradesh",
    fees: "₹32,000/Yr",
    affiliation: "Himachal Pradesh University (HPU), Shimla (NAAC Accredited)",
    about: "Shri Vishnu Sanatan Dharam (SVSD) Post Graduate College Bhatoli, established in 1970, is a premier grant-in-aid college accredited by NAAC, affiliated to Himachal Pradesh University, providing quality education in computer applications, commerce, science, and management.",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹32,000/Yr",
        eligibility: "10+2 with Mathematics / Computer",
        type: "COMPUTER APPLICATIONS",
        intake: 120
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹32,000/Yr",
        eligibility: "10+2 in any stream",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "Post Graduate Diploma in Computer Applications (PGDCA)",
        duration: "1 Year",
        fees: "₹18,000/Yr",
        eligibility: "Graduation in any stream",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      }
    ]
  },
  1980: {
    name: "Maharana Pratap Government Degree College, Amb",
    shortName: "MP Govt Degree College Amb",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://gcamb.ac.in",
    phone: "01976-260032",
    address: "VPO Amb, District Una, Himachal Pradesh - 177203",
    location: "Una",
    state: "Himachal Pradesh",
    fees: "₹15,000/Yr",
    affiliation: "Himachal Pradesh University (HPU), Shimla",
    about: "Maharana Pratap Government Degree College Amb, established in 1997 by the Government of Himachal Pradesh, is an affiliated government college under Himachal Pradesh University offering subsidized degree programs in computer applications, sciences, commerce, and arts.",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹15,000/Yr",
        eligibility: "10+2 with Mathematics / Computer",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Bachelor of Science (B.Sc)",
        duration: "3 Years",
        fees: "₹3,500/Yr",
        eligibility: "10+2 with Science stream",
        type: "SCIENCE",
        intake: 120
      },
      {
        title: "Bachelor of Commerce (B.Com)",
        duration: "3 Years",
        fees: "₹3,000/Yr",
        eligibility: "10+2 with Commerce / Mathematics",
        type: "COMMERCE",
        intake: 120
      }
    ]
  },
  1981: {
    name: "Maharaja Sansar Chand Memorial (MSCM) Government College, Thural",
    shortName: "MSCM Govt College Thural",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://gcthural.ac.in",
    phone: "01894-278241",
    address: "VPO Thural, Tehsil Dheera, District Kangra, Himachal Pradesh - 176107",
    location: "Kangra",
    state: "Himachal Pradesh",
    fees: "₹15,000/Yr",
    affiliation: "Himachal Pradesh University (HPU), Shimla",
    about: "Maharaja Sansar Chand Memorial (MSCM) Government College Thural, established in 1999 by the Government of Himachal Pradesh, provides subsidized higher education in computer applications, science, arts, and commerce to the rural youth of Kangra valley.",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹15,000/Yr",
        eligibility: "10+2 with Mathematics / Computer",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Bachelor of Science (B.Sc)",
        duration: "3 Years",
        fees: "₹3,500/Yr",
        eligibility: "10+2 with Science stream",
        type: "SCIENCE",
        intake: 100
      },
      {
        title: "Bachelor of Arts (B.A)",
        duration: "3 Years",
        fees: "₹2,800/Yr",
        eligibility: "10+2 in any stream",
        type: "ARTS",
        intake: 120
      }
    ]
  },
  1982: {
    name: "Shoolini Institute of Life Sciences and Business Management (SILB)",
    shortName: "SILB Solan",
    type: "Private",
    ownership: "Private",
    website: "https://silb.org",
    phone: "01792-226674",
    address: "The Mall, Solan, Himachal Pradesh - 173212",
    location: "Solan",
    state: "Himachal Pradesh",
    fees: "₹45,000/Yr",
    affiliation: "Himachal Pradesh University (HPU), Shimla",
    about: "Shoolini Institute of Life Sciences and Business Management (SILB) Solan, established in 2004, is a premier institution affiliated to Himachal Pradesh University offering undergraduate and postgraduate education in computing, biotechnology, microbiology, and business management.",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹45,000/Yr",
        eligibility: "10+2 with Mathematics / Computer",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹45,000/Yr",
        eligibility: "10+2 in any stream",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "B.Sc (Hons) in Biotechnology",
        duration: "3 Years",
        fees: "₹50,000/Yr",
        eligibility: "10+2 with PCB/PCM",
        type: "SCIENCE",
        intake: 60
      }
    ]
  },
  1983: {
    name: "Mehr Chand Mahajan (MCM) DAV College, Kangra",
    shortName: "MCM DAV College Kangra",
    type: "Private",
    ownership: "Private (Govt-Aided)",
    website: "https://mcmdavckangra.org",
    phone: "01892-265002",
    address: "College Road, Kangra, Himachal Pradesh - 176001",
    location: "Kangra",
    state: "Himachal Pradesh",
    fees: "₹35,000/Yr",
    affiliation: "Himachal Pradesh University (HPU), Shimla (NAAC 'A')",
    about: "Mehr Chand Mahajan (MCM) DAV College Kangra, established in 1976 by the DAV College Managing Committee, is a premier NAAC Grade 'A' accredited institution affiliated to HPU Shimla, providing undergraduate education in computer applications, sciences, and commerce.",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹35,000/Yr",
        eligibility: "10+2 with Mathematics / Computer",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹35,000/Yr",
        eligibility: "10+2 in any stream",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "Post Graduate Diploma in Computer Applications (PGDCA)",
        duration: "1 Year",
        fees: "₹20,000/Yr",
        eligibility: "Graduation in any stream",
        type: "COMPUTER APPLICATIONS",
        intake: 40
      }
    ]
  },
  1984: {
    name: "Minerva College of Education, Indora",
    shortName: "Minerva College Indora",
    type: "Private",
    ownership: "Private",
    website: "https://minervacollege.org",
    phone: "01893-241313",
    address: "VPO Changrabhata, Tehsil Indora, District Kangra, Himachal Pradesh - 176401",
    location: "Kangra",
    state: "Himachal Pradesh",
    fees: "₹35,000/Yr",
    affiliation: "Himachal Pradesh University (HPU), Shimla",
    about: "Minerva College of Education Indora, established in 2007 under Minerva Educational Society, is an affiliated college under Himachal Pradesh University offering teacher education and computer applications degrees.",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹35,000/Yr",
        eligibility: "10+2 with Mathematics / Computer",
        type: "COMPUTER APPLICATIONS",
        intake: 80
      },
      {
        title: "Bachelor of Education (B.Ed)",
        duration: "2 Years",
        fees: "₹45,000/Yr",
        eligibility: "Graduation with 50% + HPU B.Ed Entrance",
        type: "EDUCATION",
        intake: 100
      }
    ]
  },
  1985: {
    name: "Laureate Institute of Management and Information Technology (LIMIT)",
    shortName: "LIMIT Kathog Kangra",
    type: "Private",
    ownership: "Private",
    website: "https://laureate.ac.in",
    phone: "01970-245100",
    address: "VPO Kathog, Tehsil Dehra, District Kangra, Himachal Pradesh - 177101",
    location: "Kangra",
    state: "Himachal Pradesh",
    fees: "₹35,000/Yr",
    affiliation: "Himachal Pradesh Technical University (HPTU), Hamirpur",
    about: "Laureate Institute of Management and Information Technology (LIMIT) Kathog, established in 2008 by Laureate Educational Society, offers career-focused undergraduate computing and management courses affiliated to HPTU Hamirpur.",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹35,000/Yr",
        eligibility: "10+2 with Mathematics / Computer",
        type: "COMPUTER APPLICATIONS",
        intake: 90
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹35,000/Yr",
        eligibility: "10+2 in any stream",
        type: "MANAGEMENT",
        intake: 60
      }
    ]
  },
  1986: {
    name: "Lala Lilu Ram (LLR) Institute of Management, Solan",
    shortName: "LLR Institute of Management Solan",
    type: "Private",
    ownership: "Private",
    website: "https://www.lrinstitutes.edu.in",
    phone: "01792-252851",
    address: "Jabli-Kyar, P.O. Sultanpur, Oachghat, Solan, Himachal Pradesh - 173223",
    location: "Solan",
    state: "Himachal Pradesh",
    fees: "₹40,000/Yr",
    affiliation: "Himachal Pradesh Technical University (HPTU), Hamirpur",
    about: "Lala Lilu Ram (LLR) Institute of Management Solan, established under L.R. Group of Institutes in 2008, is an AICTE-approved management institute affiliated to HPTU Hamirpur delivering undergraduate business and computing education.",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹40,000/Yr",
        eligibility: "10+2 with Mathematics / Computer",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹40,000/Yr",
        eligibility: "10+2 in any stream",
        type: "MANAGEMENT",
        intake: 60
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

progress.verifiedColleges = 1990;
progress.last_batch_completed = 199;
progress.currentBatch = 199;
progress.lastUpdated = new Date().toISOString();

if (!progress.batches) {
  progress.batches = {};
}

progress.batches["199"] = {
  status: "verified",
  verifiedCount: 10,
  range: "1981-1990",
  ids: batchIds,
  verifiedAt: new Date().toISOString()
};

if (!progress.batchHistory) {
  progress.batchHistory = [];
}
progress.batchHistory.push({
  batch: 199,
  verifiedCount: 10,
  totalVerified: 1990,
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
const batch199Entries = batchIds.map((id, i) => {
  const c = batchUpdates[id];
  return `| ${1980 + i + 1} | ${c.name} | ${c.location} | ${c.state} | ${c.type} | [Portal](${c.website}) |`;
}).join('\n');

if (!mdContent.includes(batchUpdates[1977].name)) {
  mdContent += `\n\n### Batch 199 (Colleges 1,981–1,990)\n\n| # | College Name | City | State | Type | Website |\n|---|---|---|---|---|---|\n${batch199Entries}\n`;
  fs.writeFileSync(allVerifiedMdPath, mdContent, 'utf8');
}

console.log('Batch 199 verification successfully completed!');

