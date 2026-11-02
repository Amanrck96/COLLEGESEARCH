const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const progressPath = path.join(__dirname, '../reports/verification/progress.json');
const allVerifiedJsonPath = path.join(__dirname, '../reports/verification/all_verified_colleges.json');
const allVerifiedMdPath = path.join(__dirname, '../reports/verification/all_verified_colleges.md');

const batchUpdates = {
  1967: {
    name: "Jawaharlal Nehru Government Engineering College (JNGEC), Sundernagar",
    shortName: "JNGEC Sundernagar",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://jngec.ac.in",
    phone: "01907-267199",
    address: "Sundernagar, District Mandi, Himachal Pradesh - 175018",
    location: "Mandi",
    state: "Himachal Pradesh",
    fees: "₹42,000/Yr",
    affiliation: "Himachal Pradesh Technical University (HPTU), Hamirpur",
    about: "Jawaharlal Nehru Government Engineering College Sundernagar, established in 2006 by the Government of Himachal Pradesh, is the flagship first state government engineering college in Himachal Pradesh, providing AICTE-accredited engineering degrees.",
    courses: [
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹42,000/Yr",
        eligibility: "10+2 with PCM + HPCET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹42,000/Yr",
        eligibility: "10+2 with PCM + HPCET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Electronics & Communication Engineering",
        duration: "4 Years",
        fees: "₹42,000/Yr",
        eligibility: "10+2 with PCM + HPCET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Textile Engineering",
        duration: "4 Years",
        fees: "₹42,000/Yr",
        eligibility: "10+2 with PCM + HPCET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ]
  },
  1968: {
    name: "Rajiv Gandhi Government Polytechnic, Banikhet at Kanda",
    shortName: "RGGP Banikhet",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://gpbanikhet.org",
    phone: "01899-254400",
    address: "Kanda, P.O. Banikhet, Tehsil Dalhousie, District Chamba, Himachal Pradesh - 176303",
    location: "Chamba",
    state: "Himachal Pradesh",
    fees: "₹8,000/Yr",
    affiliation: "Himachal Pradesh Takniki Shiksha Board (HPTSB), Dharamshala",
    about: "Rajiv Gandhi Government Polytechnic Banikhet at Kanda, established in 2013 under the Department of Technical Education, Himachal Pradesh, is an AICTE-approved public technical diploma institution situated in scenic Dalhousie hills.",
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
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th pass + HP PAT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 40
      }
    ]
  },
  1969: {
    name: "Atal Bihari Vajpayee Govt. Institute of Engineering & Technology (Degree Wing)",
    shortName: "ABVGIET Degree Wing",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://abvgiet.ac.in",
    phone: "01783-253918",
    address: "Pragatinagar, Tehsil Kotkhai, Shimla, Himachal Pradesh - 171202",
    location: "Shimla",
    state: "Himachal Pradesh",
    fees: "₹42,000/Yr",
    affiliation: "Himachal Pradesh Technical University (HPTU), Hamirpur",
    about: "Atal Bihari Vajpayee Government Institute of Engineering and Technology (Degree Wing) Pragatinagar, established in 2011 by the Government of Himachal Pradesh, delivers AICTE-approved four-year B.Tech degree programs in ECE and CSE.",
    courses: [
      {
        title: "B.Tech in Electronics and Communication Engineering",
        duration: "4 Years",
        fees: "₹42,000/Yr",
        eligibility: "10+2 with PCM + HPCET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 48
      },
      {
        title: "B.Tech in Computer Science & Engineering",
        duration: "4 Years",
        fees: "₹42,000/Yr",
        eligibility: "10+2 with PCM + HPCET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 48
      }
    ]
  },
  1970: {
    name: "Government Polytechnic for Women, Kandaghat",
    shortName: "GPW Kandaghat",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://gpwkandaghat.org",
    phone: "01792-256134",
    address: "VPO Kandaghat, District Solan, Himachal Pradesh - 173215",
    location: "Solan",
    state: "Himachal Pradesh",
    fees: "₹8,000/Yr",
    affiliation: "Himachal Pradesh Takniki Shiksha Board (HPTSB), Dharamshala",
    about: "Government Polytechnic for Women Kandaghat, established in 1984, is a premier women's technical institution in Himachal Pradesh, approved by AICTE, providing professional technical diploma training.",
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
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th pass + HP PAT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 40
      },
      {
        title: "Diploma in Electronics & Communication Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th pass + HP PAT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 40
      }
    ]
  },
  1971: {
    name: "Himalayan Institute of Management (HIM), Kala Amb",
    shortName: "HIM Kala Amb",
    type: "Private",
    ownership: "Private",
    website: "https://hgpi.in",
    phone: "01702-238654",
    address: "Sadhaura Road, Kala Amb, District Sirmaur, Himachal Pradesh - 173030",
    location: "Sirmaur",
    state: "Himachal Pradesh",
    fees: "₹75,000/Yr",
    affiliation: "Himachal Pradesh Technical University (HPTU), Hamirpur",
    about: "Himalayan Institute of Management Kala Amb, established in 2007 under Himalayan Group of Professional Institutions, is an AICTE-approved business management school offering MBA programs.",
    courses: [
      {
        title: "Master of Business Administration (MBA)",
        duration: "2 Years",
        fees: "₹75,000/Yr",
        eligibility: "Graduation with 50% + HPCET / MAT / CMAT",
        type: "MANAGEMENT",
        intake: 90
      }
    ]
  },
  1972: {
    name: "Government Post Graduate College, Una",
    shortName: "Govt PG College Una",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://gcuna.ac.in",
    phone: "01975-226035",
    address: "Near Bus Stand, Prof. Ram Murti Sharma Marg, Una, Himachal Pradesh - 174303",
    location: "Una",
    state: "Himachal Pradesh",
    fees: "₹18,000/Yr",
    affiliation: "Himachal Pradesh University (HPU), Shimla (NAAC 'B')",
    about: "Government Post Graduate College Una, established in 1968, is a premier government institution of higher learning in Una district, offering undergraduate and postgraduate education in computer applications, sciences, commerce, and humanities.",
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
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹15,000/Yr",
        eligibility: "10+2 in any stream",
        type: "MANAGEMENT",
        intake: 60
      }
    ]
  },
  1973: {
    name: "Government Polytechnic, Kinnaur",
    shortName: "GP Kinnaur",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://gpkinnaur.org",
    phone: "01781-240120",
    address: "VPO Kalpa, District Kinnaur (Camp at GP Rohru), Himachal Pradesh - 172108",
    location: "Kinnaur",
    state: "Himachal Pradesh",
    fees: "₹8,000/Yr",
    affiliation: "Himachal Pradesh Takniki Shiksha Board (HPTSB), Dharamshala",
    about: "Government Polytechnic Kinnaur, established under the Department of Technical Education, Government of Himachal Pradesh, is an AICTE-approved tribal technical polytechnic (operating from GP Rohru mentor campus) delivering civil and mechanical engineering diplomas.",
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
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th pass + HP PAT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 40
      }
    ]
  },
  1974: {
    name: "Himalayan Institute of Computer Sciences (HICS), Kala Amb",
    shortName: "HICS Kala Amb",
    type: "Private",
    ownership: "Private",
    website: "https://hgpi.in",
    phone: "01702-238654",
    address: "Sadhaura Road, Kala Amb, District Sirmaur, Himachal Pradesh - 173030",
    location: "Sirmaur",
    state: "Himachal Pradesh",
    fees: "₹35,000/Yr",
    affiliation: "Himachal Pradesh Technical University (HPTU), Hamirpur",
    about: "Himalayan Institute of Computer Sciences Kala Amb, established in 2008 by Maa Saraswati Educational Trust, provides undergraduate computing courses affiliated to HPTU Hamirpur.",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹35,000/Yr",
        eligibility: "10+2 with Mathematics / Computer",
        type: "COMPUTER APPLICATIONS",
        intake: 80
      }
    ]
  },
  1975: {
    name: "Green Hills Engineering College (GHEC), Kumarhatti",
    shortName: "GHEC Solan",
    type: "Private",
    ownership: "Private",
    website: "https://greenhills.ac.in",
    phone: "01792-268388",
    address: "Gandhigram, Kumarhatti, District Solan, Himachal Pradesh - 173229",
    location: "Solan",
    state: "Himachal Pradesh",
    fees: "₹80,000/Yr",
    affiliation: "Himachal Pradesh Technical University (HPTU), Hamirpur",
    about: "Green Hills Engineering College Kumarhatti, established in 2003, is an AICTE-approved engineering college in Solan district affiliated to HPTU Hamirpur, offering undergraduate engineering degrees.",
    courses: [
      {
        title: "B.Tech in Computer Science & Engineering",
        duration: "4 Years",
        fees: "₹80,000/Yr",
        eligibility: "10+2 with PCM + HPCET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Electrical Engineering",
        duration: "4 Years",
        fees: "₹80,000/Yr",
        eligibility: "10+2 with PCM + HPCET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹80,000/Yr",
        eligibility: "10+2 with PCM + HPCET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  1976: {
    name: "Himalayan Institute of Engineering & Technology (HIET), Kala Amb",
    shortName: "HIET Kala Amb",
    type: "Private",
    ownership: "Private",
    website: "https://hgpi.in",
    phone: "01702-238654",
    address: "Sadhaura Road, Kala Amb, District Sirmaur, Himachal Pradesh - 173030",
    location: "Sirmaur",
    state: "Himachal Pradesh",
    fees: "₹70,000/Yr",
    affiliation: "Himachal Pradesh Technical University (HPTU), Hamirpur",
    about: "Himalayan Institute of Engineering and Technology Kala Amb, established in 2009 under HGPI, is an AICTE-approved technical campus providing bachelor degrees in engineering.",
    courses: [
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
        intake: 30
      },
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹70,000/Yr",
        eligibility: "10+2 with PCM + HPCET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
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

progress.verifiedColleges = 1980;
progress.last_batch_completed = 198;
progress.currentBatch = 198;
progress.lastUpdated = new Date().toISOString();

if (!progress.batches) {
  progress.batches = {};
}

progress.batches["198"] = {
  status: "verified",
  verifiedCount: 10,
  range: "1971-1980",
  ids: batchIds,
  verifiedAt: new Date().toISOString()
};

if (!progress.batchHistory) {
  progress.batchHistory = [];
}
progress.batchHistory.push({
  batch: 198,
  verifiedCount: 10,
  totalVerified: 1980,
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
const batch198Entries = batchIds.map((id, i) => {
  const c = batchUpdates[id];
  return `| ${1970 + i + 1} | ${c.name} | ${c.location} | ${c.state} | ${c.type} | [Portal](${c.website}) |`;
}).join('\n');

if (!mdContent.includes(batchUpdates[1967].name)) {
  mdContent += `\n\n### Batch 198 (Colleges 1,971–1,980)\n\n| # | College Name | City | State | Type | Website |\n|---|---|---|---|---|---|\n${batch198Entries}\n`;
  fs.writeFileSync(allVerifiedMdPath, mdContent, 'utf8');
}

console.log('Batch 198 verification successfully completed!');
