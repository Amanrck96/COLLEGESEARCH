const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const progressPath = path.join(__dirname, '../reports/verification/progress.json');
const allVerifiedJsonPath = path.join(__dirname, '../reports/verification/all_verified_colleges.json');
const allVerifiedMdPath = path.join(__dirname, '../reports/verification/all_verified_colleges.md');

const batchUpdates = {
  2067: {
    name: "Government Polytechnic, Mokokchung (formerly ICIT)",
    shortName: "Govt Polytechnic Mokokchung",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://www.icitmkg.in",
    phone: "0369-2226255",
    address: "Aolijen, Mokokchung, Nagaland - 798601",
    location: "Mokokchung",
    state: "Nagaland",
    fees: "₹5,000/Yr",
    affiliation: "State Council for Technical Education (SCTE), Nagaland & AICTE",
    about: "Government Polytechnic Mokokchung (formerly Institute of Communication and Information Technology - ICIT), established in 2000 by the Directorate of Technical Education, Government of Nagaland with World Bank assistance, is an AICTE-approved premier public polytechnic delivering subsidized diploma education in Computer Engineering, Electronics, and IT.",
    courses: [
      {
        title: "Diploma in Computer Engineering",
        duration: "3 Years",
        fees: "₹5,000/Yr",
        eligibility: "Class 10th / HSLC with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "Diploma in Electronics & Communication Engineering",
        duration: "3 Years",
        fees: "₹5,000/Yr",
        eligibility: "Class 10th / HSLC with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "Diploma in Information Technology",
        duration: "3 Years",
        fees: "₹5,000/Yr",
        eligibility: "Class 10th / HSLC with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ]
  },
  2068: {
    name: "C-Edge College, Chümoukedima",
    shortName: "C-Edge College",
    type: "Private",
    ownership: "Private",
    website: "https://cedgecollege.org",
    phone: "03862-242734",
    address: "Naga United Village, Chümoukedima, Nagaland - 797103",
    location: "Dimapur",
    state: "Nagaland",
    fees: "₹45,000/Yr",
    affiliation: "Nagaland University (Central University, NAAC 'B' Grade)",
    about: "C-Edge College Chümoukedima, established in 2012 and affiliated to Nagaland University, is a private higher educational institution offering specialized undergraduate degree courses in business administration, management, arts, and commerce.",
    courses: [
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹45,000/Yr",
        eligibility: "10+2 in any stream with minimum 50%",
        type: "MANAGEMENT",
        intake: 40
      },
      {
        title: "Bachelor of Commerce (B.Com)",
        duration: "3 Years",
        fees: "₹35,000/Yr",
        eligibility: "10+2 in Commerce / any stream",
        type: "COMMERCE",
        intake: 60
      },
      {
        title: "Bachelor of Arts (B.A.) in Humanities",
        duration: "3 Years",
        fees: "₹32,000/Yr",
        eligibility: "10+2 in Arts or equivalent",
        type: "ARTS",
        intake: 120
      }
    ]
  },
  2069: {
    name: "Tetso College, Chümoukedima",
    shortName: "Tetso College",
    type: "Private",
    ownership: "Private (Autonomous / NAAC 'A' Grade)",
    website: "https://tetsocollege.edu.in",
    phone: "03862-242555",
    address: "Sovima, 5th Mile, Chümoukedima, Nagaland - 797103",
    location: "Dimapur",
    state: "Nagaland",
    fees: "₹55,000/Yr",
    affiliation: "Nagaland University (Central University, NAAC 'A' Grade)",
    about: "Tetso College Chümoukedima, established in 1994, is a premier multidisciplinary degree college accredited with 'A' Grade by NAAC and affiliated to Nagaland University, offering modern undergraduate and postgraduate programs in computer applications, commerce, management, and humanities.",
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
        eligibility: "10+2 in any discipline with minimum 50%",
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
        fees: "₹38,000/Yr",
        eligibility: "10+2 in Arts or equivalent",
        type: "ARTS",
        intake: 200
      }
    ]
  },
  2070: {
    name: "Sazolie College, Jotsoma, Kohima",
    shortName: "Sazolie College Kohima",
    type: "Private",
    ownership: "Private (Govt-Aided / NAAC 'A' Grade)",
    website: "https://sazoliecollege.in",
    phone: "0370-2224016",
    address: "Phekerkrü, Jotsoma, Kohima, Nagaland - 797002",
    location: "Kohima",
    state: "Nagaland",
    fees: "₹40,000/Yr",
    affiliation: "Nagaland University (Central University, NAAC 'A' Grade)",
    about: "Sazolie College Jotsoma Kohima, established in 2007 by the CRBC under the aegis of the Sazolie Memorial Society, is an 'A' Grade NAAC accredited institution affiliated to Nagaland University, providing quality higher education in business management and liberal arts.",
    courses: [
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹40,000/Yr",
        eligibility: "10+2 in any stream with minimum 50%",
        type: "MANAGEMENT",
        intake: 40
      },
      {
        title: "Bachelor of Arts (B.A.) Honours in Humanities",
        duration: "3 Years",
        fees: "₹28,000/Yr",
        eligibility: "10+2 in Arts or equivalent",
        type: "ARTS",
        intake: 150
      }
    ]
  },
  2071: {
    name: "St. Joseph's College (Autonomous), Jakhama",
    shortName: "St Joseph's College Jakhama",
    type: "Private",
    ownership: "Private (Catholic Autonomous College, NAAC 'A+' Grade)",
    website: "https://stjosephjakhama.ac.in",
    phone: "0370-2231022",
    address: "Jakhama, P.O. Box 39, Kohima, Nagaland - 797005",
    location: "Kohima",
    state: "Nagaland",
    fees: "₹42,000/Yr",
    affiliation: "Nagaland University (Central University, Autonomous status, NAAC 'A+' Grade)",
    about: "St. Joseph's College (Autonomous) Jakhama, established in 1985 by the Catholic Diocese of Kohima, is Nagaland's premier autonomous college, accredited with 'A+' Grade by NAAC. It delivers distinguished academic education in business administration, commerce, computer science, and arts.",
    courses: [
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹42,000/Yr",
        eligibility: "10+2 in any stream with minimum 50%",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "B.Sc in Computer Science",
        duration: "3 Years",
        fees: "₹36,000/Yr",
        eligibility: "10+2 with Science (PCM)",
        type: "SCIENCE",
        intake: 50
      },
      {
        title: "Bachelor of Commerce (B.Com)",
        duration: "3 Years",
        fees: "₹30,000/Yr",
        eligibility: "10+2 in Commerce stream",
        type: "COMMERCE",
        intake: 120
      },
      {
        title: "Bachelor of Arts (B.A.)",
        duration: "3 Years",
        fees: "₹26,000/Yr",
        eligibility: "10+2 in Arts or any discipline",
        type: "ARTS",
        intake: 300
      }
    ]
  },
  2072: {
    name: "Unity College, Dimapur",
    shortName: "Unity College Dimapur",
    type: "Private",
    ownership: "Private (NAAC 'A' Grade)",
    website: "https://unitycollegedimapur.com",
    phone: "03862-248279",
    address: "Residency Colony, Near Stadium, Dimapur, Nagaland - 797112",
    location: "Dimapur",
    state: "Nagaland",
    fees: "₹45,000/Yr",
    affiliation: "Nagaland University (Central University, NAAC 'A' Grade)",
    about: "Unity College Dimapur, established in 2007, is a premier higher educational institution in Nagaland accredited with 'A' Grade by NAAC and affiliated to Nagaland University, offering undergraduate programs in computer applications, commerce, management, and arts.",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹45,000/Yr",
        eligibility: "10+2 with Mathematics / Computer Studies",
        type: "COMPUTER APPLICATIONS",
        intake: 40
      },
      {
        title: "Bachelor of Commerce (B.Com)",
        duration: "3 Years",
        fees: "₹32,000/Yr",
        eligibility: "10+2 in Commerce stream",
        type: "COMMERCE",
        intake: 120
      },
      {
        title: "Bachelor of Arts (B.A.)",
        duration: "3 Years",
        fees: "₹28,000/Yr",
        eligibility: "10+2 in Arts or any stream",
        type: "ARTS",
        intake: 200
      }
    ]
  },
  2073: {
    name: "Sikkim Institute of Science and Technology (SIST), Chisopani",
    shortName: "SIST Chisopani",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://sist.edu.in",
    phone: "03595-259124",
    address: "Chisopani, South Sikkim / Namchi, Sikkim - 737126",
    location: "South Sikkim",
    state: "Sikkim",
    fees: "₹35,000/Yr",
    affiliation: "Sikkim University (Central University) & AICTE",
    about: "Sikkim Institute of Science and Technology (SIST) Chisopani, established in 2018 by the Education Department, Government of Sikkim, is the state's very first government engineering degree college. Approved by AICTE and affiliated to Sikkim University, it offers subsidized B.Tech programs in Civil Engineering and Computer Science & Engineering.",
    courses: [
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹35,000/Yr",
        eligibility: "10+2 with PCM + JEE Main / State Entrance",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹35,000/Yr",
        eligibility: "10+2 with PCM + JEE Main / State Entrance",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  2074: {
    name: "Centre for Computers and Communication Technology (CCCT), Chisopani",
    shortName: "CCCT Chisopani",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://ccct.skmpoly.edu.in",
    phone: "03595-259123",
    address: "Chisopani, South Sikkim / Namchi, Sikkim - 737126",
    location: "South Sikkim",
    state: "Sikkim",
    fees: "₹6,000/Yr",
    affiliation: "Directorate of Technical Education, Government of Sikkim & AICTE",
    about: "Centre for Computers and Communication Technology (CCCT) Chisopani, established in 1999 under the Directorate of Technical Education, Government of Sikkim with World Bank funding, is a premier state government polytechnic providing AICTE-approved engineering diploma education in civil, computer, and electronics engineering.",
    courses: [
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹6,000/Yr",
        eligibility: "Class 10th / Secondary with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 40
      },
      {
        title: "Diploma in Computer Engineering",
        duration: "3 Years",
        fees: "₹6,000/Yr",
        eligibility: "Class 10th / Secondary with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 40
      },
      {
        title: "Diploma in Electronics & Communication Engineering",
        duration: "3 Years",
        fees: "₹6,000/Yr",
        eligibility: "Class 10th / Secondary with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "Diploma in Electrical & Electronics Engineering",
        duration: "3 Years",
        fees: "₹6,000/Yr",
        eligibility: "Class 10th / Secondary with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ]
  },
  2075: {
    name: "Advanced Technical Training Centre (ATTC), Bardang",
    shortName: "ATTC Bardang",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://www.attc.skmpoly.edu.in",
    phone: "03592-235381",
    address: "Bardang, Singtam, East Sikkim, Sikkim - 737134",
    location: "East Sikkim",
    state: "Sikkim",
    fees: "₹6,000/Yr",
    affiliation: "Directorate of Technical Education, Government of Sikkim & AICTE",
    about: "Advanced Technical Training Centre (ATTC) Bardang, established in 1999 by the Government of Sikkim with World Bank support, is an AICTE-approved public polytechnic delivering specialized diploma training in computer engineering, mechanical engineering, mechatronics, and tool & die making.",
    courses: [
      {
        title: "Diploma in Computer Engineering",
        duration: "3 Years",
        fees: "₹6,000/Yr",
        eligibility: "Class 10th / Secondary with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 40
      },
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹6,000/Yr",
        eligibility: "Class 10th / Secondary with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 40
      },
      {
        title: "Diploma in Mechatronics",
        duration: "3 Years",
        fees: "₹6,000/Yr",
        eligibility: "Class 10th / Secondary with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "Diploma in Tool & Die Making",
        duration: "3 Years",
        fees: "₹6,000/Yr",
        eligibility: "Class 10th / Secondary with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ]
  },
  2076: {
    name: "Sikkim Manipal Institute of Technology (SMIT), Majhitar",
    shortName: "SMIT Majhitar",
    type: "Private",
    ownership: "Private (Constituent of Sikkim Manipal University, NAAC 'A+' Grade)",
    website: "https://smu.edu.in/smit.html",
    phone: "03592-246020",
    address: "Majhitar, Rangpo, East Sikkim, Sikkim - 737136",
    location: "East Sikkim",
    state: "Sikkim",
    fees: "₹1,60,000/Yr",
    affiliation: "Constituent Campus of Sikkim Manipal University (SMU, NAAC 'A+' Grade) & AICTE",
    about: "Sikkim Manipal Institute of Technology (SMIT) Majhitar, established in 1997 as the flagship engineering campus of Sikkim Manipal University, is an AICTE-approved and NAAC 'A+' accredited premier institute offering undergraduate and postgraduate education in engineering, computer applications, and management.",
    courses: [
      {
        title: "Master of Computer Applications (MCA)",
        duration: "2 Years",
        fees: "₹1,60,000/Yr",
        eligibility: "BCA / B.Sc (IT/CS) with minimum 50% + SMIT Entrance / Merit",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹1,20,000/Yr",
        eligibility: "10+2 with Mathematics / Computer with minimum 50%",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹2,80,000/Yr",
        eligibility: "10+2 with PCM minimum 50% + JEE Main / SMIT Offline Test",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 180
      },
      {
        title: "B.Tech in Information Technology",
        duration: "4 Years",
        fees: "₹2,60,000/Yr",
        eligibility: "10+2 with PCM minimum 50% + JEE Main / SMIT Offline Test",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹2,40,000/Yr",
        eligibility: "10+2 with PCM minimum 50% + JEE Main / SMIT Offline Test",
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

progress.verifiedColleges = 2080;
progress.last_batch_completed = 208;
progress.currentBatch = 208;
progress.lastUpdated = new Date().toISOString();

if (!progress.batches) {
  progress.batches = {};
}

progress.batches["208"] = {
  status: "verified",
  verifiedCount: 10,
  range: "2071-2080",
  ids: batchIds,
  verifiedAt: new Date().toISOString()
};

if (!progress.batchHistory) {
  progress.batchHistory = [];
}
progress.batchHistory.push({
  batch: 208,
  verifiedCount: 10,
  totalVerified: 2080,
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
const batch208Entries = batchIds.map((id, i) => {
  const c = batchUpdates[id];
  return `| ${2070 + i + 1} | ${c.name} | ${c.location} | ${c.state} | ${c.type} | [Portal](${c.website}) |`;
}).join('\n');

if (!mdContent.includes(batchUpdates[2067].name)) {
  mdContent += `\n\n### Batch 208 (Colleges 2,071–2,080)\n\n| # | College Name | City | State | Type | Website |\n|---|---|---|---|---|---|\n${batch208Entries}\n`;
  fs.writeFileSync(allVerifiedMdPath, mdContent, 'utf8');
}

console.log('Batch 208 verification successfully completed!');

