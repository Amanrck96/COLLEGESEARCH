const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const progressPath = path.join(__dirname, '../reports/verification/progress.json');
const allVerifiedJsonPath = path.join(__dirname, '../reports/verification/all_verified_colleges.json');
const allVerifiedMdPath = path.join(__dirname, '../reports/verification/all_verified_colleges.md');

const batchUpdates = {
  1957: {
    name: "Government Polytechnic, Sundernagar",
    shortName: "GP Sundernagar",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://gpsundernagar.org",
    phone: "01907-266031",
    address: "Polytechnic Road, Sundernagar, District Mandi, Himachal Pradesh - 175018",
    location: "Mandi",
    state: "Himachal Pradesh",
    fees: "₹8,000/Yr",
    affiliation: "Himachal Pradesh Takniki Shiksha Board (HPTSB), Dharamshala",
    about: "Government Polytechnic Sundernagar, established in 1959, is one of the premier and pioneering polytechnic institutions in Himachal Pradesh, approved by AICTE, providing high-quality, subsidized technical diploma programs.",
    courses: [
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th pass + HP PAT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 40
      },
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th pass + HP PAT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 40
      },
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th pass + HP PAT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 40
      },
      {
        title: "Diploma in Computer Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th pass + HP PAT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 40
      }
    ]
  },
  1958: {
    name: "Government Polytechnic, Lahaul & Spiti at Udaipur",
    shortName: "GP Lahaul & Spiti",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://gplahaulspiti.org",
    phone: "01907-266031",
    address: "Udaipur, District Lahaul & Spiti (Camp at JNGEC Sundernagar), Himachal Pradesh - 175142",
    location: "Lahaul and Spiti",
    state: "Himachal Pradesh",
    fees: "₹8,000/Yr",
    affiliation: "Himachal Pradesh Takniki Shiksha Board (HPTSB), Dharamshala",
    about: "Government Polytechnic Lahaul and Spiti at Udaipur, established in 2013 under the Department of Technical Education, Government of Himachal Pradesh, is dedicated to technical skill development in tribal regions.",
    courses: [
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th pass + HP PAT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th pass + HP PAT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ]
  },
  1959: {
    name: "Green Hills Polytechnic, Kumarhatti (Solan)",
    shortName: "Green Hills Polytechnic",
    type: "Private",
    ownership: "Private",
    website: "https://greenhills.ac.in",
    phone: "01792-268388",
    address: "Gandhigram, Kumarhatti, District Solan, Himachal Pradesh - 173229",
    location: "Solan",
    state: "Himachal Pradesh",
    fees: "₹35,000/Yr",
    affiliation: "Himachal Pradesh Takniki Shiksha Board (HPTSB), Dharamshala",
    about: "Green Hills Polytechnic Kumarhatti, established in 2008 by Green Hills Engineering College Society, is an AICTE-approved private technical polytechnic in Solan district offering engineering diplomas.",
    courses: [
      {
        title: "Diploma in Computer Engineering",
        duration: "3 Years",
        fees: "₹35,000/Yr",
        eligibility: "Class 10th pass + HP PAT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 45
      },
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹35,000/Yr",
        eligibility: "Class 10th pass + HP PAT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 45
      },
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹35,000/Yr",
        eligibility: "Class 10th pass + HP PAT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 45
      }
    ]
  },
  1960: {
    name: "Government Millennium Polytechnic, Chamba",
    shortName: "Govt Millennium Polytechnic Chamba",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://gpchamba.org",
    phone: "01899-222224",
    address: "Sarol, District Chamba, Himachal Pradesh - 176310",
    location: "Chamba",
    state: "Himachal Pradesh",
    fees: "₹8,000/Yr",
    affiliation: "Himachal Pradesh Takniki Shiksha Board (HPTSB), Dharamshala",
    about: "Government Millennium Polytechnic Chamba, established in 2000 by the Government of Himachal Pradesh to mark the turn of the millennium, is an AICTE-approved premier public polytechnic delivering diploma programs in electronics, computers, and civil engineering.",
    courses: [
      {
        title: "Diploma in Computer Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th pass + HP PAT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Electronics & Communication Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th pass + HP PAT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 40
      },
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th pass + HP PAT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 40
      }
    ]
  },
  1961: {
    name: "Gautam Institute of Management & Technology, Hamirpur",
    shortName: "GIMT Hamirpur",
    type: "Private",
    ownership: "Private",
    website: "https://ggchmr.com",
    phone: "01972-258210",
    address: "Ward No. 10, Gautam Nagar, Near Railway Station, Hamirpur, Himachal Pradesh - 177001",
    location: "Hamirpur",
    state: "Himachal Pradesh",
    fees: "₹70,000/Yr",
    affiliation: "Himachal Pradesh Technical University (HPTU), Hamirpur",
    about: "Gautam Institute of Management & Technology Hamirpur, established in 2009 under Gautam Group of Colleges, is an AICTE-approved management institution affiliated to HPTU Hamirpur offering postgraduate business management degrees.",
    courses: [
      {
        title: "Master of Business Administration (MBA)",
        duration: "2 Years",
        fees: "₹70,000/Yr",
        eligibility: "Graduation with 50% + HPCET / MAT / CMAT",
        type: "MANAGEMENT",
        intake: 120
      }
    ]
  },
  1962: {
    name: "Government Polytechnic, Hamirpur",
    shortName: "GP Hamirpur",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://gphamirpur.org",
    phone: "01972-222643",
    address: "Baru, District Hamirpur, Himachal Pradesh - 177001",
    location: "Hamirpur",
    state: "Himachal Pradesh",
    fees: "₹8,000/Yr",
    affiliation: "Himachal Pradesh Takniki Shiksha Board (HPTSB), Dharamshala",
    about: "Government Polytechnic Hamirpur, established in 1963 at Baru, is one of the premier and most reputed government polytechnic colleges in Himachal Pradesh, providing AICTE-approved diploma education across engineering streams.",
    courses: [
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th pass + HP PAT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 40
      },
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th pass + HP PAT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 40
      },
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th pass + HP PAT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 40
      },
      {
        title: "Diploma in Computer Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th pass + HP PAT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 40
      }
    ]
  },
  1963: {
    name: "K.L.B. D.A.V. College for Girls, Palampur",
    shortName: "KLB DAV Girls College Palampur",
    type: "Private",
    ownership: "Private",
    website: "https://klbdavcollege.org",
    phone: "01894-230233",
    address: "Lohna, Palampur, District Kangra, Himachal Pradesh - 176061",
    location: "Kangra",
    state: "Himachal Pradesh",
    fees: "₹40,000/Yr",
    affiliation: "Himachal Pradesh University (HPU), Shimla & HPTU Hamirpur",
    about: "K.L.B. D.A.V. College for Girls Palampur, established in 1969 by the DAV College Managing Committee, is an established women's institution offering degree and professional courses in computer applications, management, and pedagogy.",
    courses: [
      {
        title: "Master of Computer Applications (MCA)",
        duration: "2 Years",
        fees: "₹40,000/Yr",
        eligibility: "BCA / B.Sc / B.Com with Mathematics + HPCET / NIMCET",
        type: "COMPUTER APPLICATIONS",
        intake: 30
      },
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹30,000/Yr",
        eligibility: "10+2 with Mathematics / Computer",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹30,000/Yr",
        eligibility: "10+2 in any stream",
        type: "MANAGEMENT",
        intake: 60
      }
    ]
  },
  1964: {
    name: "Government Polytechnic, Kullu",
    shortName: "GP Kullu",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://gpkullu.org",
    phone: "01902-260333",
    address: "Seobagh, P.O. Neoli, District Kullu, Himachal Pradesh - 175138",
    location: "Kullu",
    state: "Himachal Pradesh",
    fees: "₹8,000/Yr",
    affiliation: "Himachal Pradesh Takniki Shiksha Board (HPTSB), Dharamshala",
    about: "Government Polytechnic Kullu at Seobagh, established in 2013 by the Government of Himachal Pradesh, is an AICTE-approved public polytechnic delivering diploma training in civil and electrical engineering.",
    courses: [
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th pass + HP PAT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th pass + HP PAT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  1965: {
    name: "School of Engineering & Technology, Sri Sai University",
    shortName: "SSU SET Palampur",
    type: "Private",
    ownership: "Private",
    website: "https://srisaiuniversity.org",
    phone: "01894-230030",
    address: "Sungal, Palampur, District Kangra, Himachal Pradesh - 176061",
    location: "Kangra",
    state: "Himachal Pradesh",
    fees: "₹75,000/Yr",
    affiliation: "Sri Sai University, Palampur (Private University)",
    about: "School of Engineering and Technology, Sri Sai University Palampur, established in 2010 by Sri Sai Group under HP State Legislature Act, provides career-oriented technical degrees in engineering and computing.",
    courses: [
      {
        title: "B.Tech in Computer Science & Engineering",
        duration: "4 Years",
        fees: "₹75,000/Yr",
        eligibility: "10+2 with PCM + JEE Main / State Entrance",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹75,000/Yr",
        eligibility: "10+2 with PCM + JEE Main / State Entrance",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹75,000/Yr",
        eligibility: "10+2 with PCM + JEE Main / State Entrance",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ]
  },
  1966: {
    name: "Government Polytechnic, Paonta Sahib",
    shortName: "GP Paonta Sahib",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://gppaontasahib.org",
    phone: "01704-222070",
    address: "Shubhkhera, Paonta Sahib, District Sirmaur, Himachal Pradesh - 173025",
    location: "Sirmaur",
    state: "Himachal Pradesh",
    fees: "₹8,000/Yr",
    affiliation: "Himachal Pradesh Takniki Shiksha Board (HPTSB), Dharamshala",
    about: "Government Polytechnic Paonta Sahib, established in 2013 under the Department of Technical Education, Government of Himachal Pradesh, is an AICTE-approved public technical diploma institution situated in the industrial hub of Paonta Sahib.",
    courses: [
      {
        title: "Diploma in Computer Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th pass + HP PAT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th pass + HP PAT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Automobile Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th pass + HP PAT",
        type: "ENGINEERING AND TECHNOLOGY",
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

progress.verifiedColleges = 1970;
progress.last_batch_completed = 197;
progress.currentBatch = 197;
progress.lastUpdated = new Date().toISOString();

if (!progress.batches) {
  progress.batches = {};
}

progress.batches["197"] = {
  status: "verified",
  verifiedCount: 10,
  range: "1961-1970",
  ids: batchIds,
  verifiedAt: new Date().toISOString()
};

if (!progress.batchHistory) {
  progress.batchHistory = [];
}
progress.batchHistory.push({
  batch: 197,
  verifiedCount: 10,
  totalVerified: 1970,
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
const batch197Entries = batchIds.map((id, i) => {
  const c = batchUpdates[id];
  return `| ${1960 + i + 1} | ${c.name} | ${c.location} | ${c.state} | ${c.type} | [Portal](${c.website}) |`;
}).join('\n');

if (!mdContent.includes(batchUpdates[1957].name)) {
  mdContent += `\n\n### Batch 197 (Colleges 1,961–1,970)\n\n| # | College Name | City | State | Type | Website |\n|---|---|---|---|---|---|\n${batch197Entries}\n`;
  fs.writeFileSync(allVerifiedMdPath, mdContent, 'utf8');
}

console.log('Batch 197 verification successfully completed!');
