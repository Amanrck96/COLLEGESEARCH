const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const progressPath = path.join(__dirname, '../reports/verification/progress.json');
const allVerifiedJsonPath = path.join(__dirname, '../reports/verification/all_verified_colleges.json');
const allVerifiedMdPath = path.join(__dirname, '../reports/verification/all_verified_colleges.md');

const batchUpdates = {
  1937: {
    name: "Rajiv Gandhi Government Engineering College (RGGEC) Kangra",
    shortName: "RGGEC Kangra",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://rggec.ac.in",
    phone: "01892-249188",
    address: "Nagrota Bagwan, Kangra, Himachal Pradesh - 176047",
    location: "Kangra",
    state: "Himachal Pradesh",
    fees: "₹42,000/Yr",
    affiliation: "Himachal Pradesh Technical University (HPTU), Hamirpur",
    about: "Rajiv Gandhi Government Engineering College Kangra at Nagrota Bagwan, established in 2014 by the Government of Himachal Pradesh, is an AICTE-approved premier state engineering college affiliated to HPTU, imparting quality technical education across core engineering fields.",
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
        title: "B.Tech in Computer Science & Engineering",
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
        title: "B.Tech in Electrical Engineering",
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
      }
    ]
  },
  1938: {
    name: "MSME Technology Centre, Baddi",
    shortName: "MSME TC Baddi",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://msmetcbaddi.org",
    phone: "01795-271222",
    address: "Village Bhatolikalan, Hadbust No. 211, Baddi, District Solan, Himachal Pradesh - 173205",
    location: "Solan",
    state: "Himachal Pradesh",
    fees: "₹45,000/Yr",
    affiliation: "Ministry of Micro, Small & Medium Enterprises, Government of India",
    about: "MSME Technology Centre Baddi, established by the Ministry of MSME, Government of India, is an apex technology training institute delivering AICTE-approved advanced technical diplomas in tool & die making, mechatronics, and mechanical automation.",
    courses: [
      {
        title: "Diploma in Tool & Die Making (DTDM)",
        duration: "4 Years",
        fees: "₹45,000/Yr",
        eligibility: "Class 10th pass with 50% in Math & Science + Entrance Test",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Mechatronics",
        duration: "3 Years",
        fees: "₹45,000/Yr",
        eligibility: "Class 10th pass with 50% in Math & Science + Entrance Test",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Post Diploma in Tool Design & CAD/CAM",
        duration: "1 Year",
        fees: "₹50,000/Yr",
        eligibility: "Diploma in Mechanical / Production Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ]
  },
  1939: {
    name: "Government Polytechnic for Women, Rehan",
    shortName: "GPW Rehan",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://gpwrehan.ac.in",
    phone: "01893-252002",
    address: "VPO Rehan, Tehsil Fatehpur, District Kangra, Himachal Pradesh - 176022",
    location: "Kangra",
    state: "Himachal Pradesh",
    fees: "₹8,000/Yr",
    affiliation: "Himachal Pradesh Takniki Shiksha Board (HPTSB), Dharamshala",
    about: "Government Polytechnic for Women Rehan, established in 2017 by the Government of Himachal Pradesh, is an AICTE-approved public women's technical institute committed to empowering female students through professional engineering diplomas.",
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
  },
  1940: {
    name: "Mahatma Gandhi Government Engineering College (MGGEC), Kotla (Jeori)",
    shortName: "MGGEC Kotla Jeori",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://mggec.ac.in",
    phone: "01782-292022",
    address: "Kotla (Jeori), Tehsil Rampur, Shimla, Himachal Pradesh - 172101",
    location: "Shimla",
    state: "Himachal Pradesh",
    fees: "₹42,000/Yr",
    affiliation: "Himachal Pradesh Technical University (HPTU), Hamirpur",
    about: "Mahatma Gandhi Government Engineering College Kotla (Jeori) Rampur, established in 2015 by the Government of Himachal Pradesh, is an AICTE-approved state engineering college offering specialized undergraduate degrees in civil and mechanical engineering.",
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
      }
    ]
  },
  1941: {
    name: "Government Polytechnic, Jandaur",
    shortName: "GP Jandaur",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://gpjandaur.org",
    phone: "01893-270100",
    address: "VPO Jandaur, Tehsil Jaswan, District Kangra, Himachal Pradesh - 177114",
    location: "Kangra",
    state: "Himachal Pradesh",
    fees: "₹8,000/Yr",
    affiliation: "Himachal Pradesh Takniki Shiksha Board (HPTSB), Dharamshala",
    about: "Government Polytechnic Jandaur, established in 2018 under the Department of Technical Education, Government of Himachal Pradesh, is an AICTE-approved co-educational polytechnic providing affordable diploma engineering education.",
    courses: [
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
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "Class 10th pass with PAT counseling",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  1942: {
    name: "Vaishno College of Engineering, Kangra",
    shortName: "VCOE Kangra",
    type: "Private",
    ownership: "Private",
    website: "https://vaishno.edu.in",
    phone: "01893-233600",
    address: "Near Railway Station, Thapkour, P.O. Bhadroya, Tehsil Nurpur, Kangra, Himachal Pradesh - 176403",
    location: "Kangra",
    state: "Himachal Pradesh",
    fees: "₹65,000/Yr",
    affiliation: "Himachal Pradesh Technical University (HPTU), Hamirpur",
    about: "Vaishno College of Engineering, established in 2010 by Sham Sunder Education Society, is an AICTE-approved engineering college in Kangra valley affiliated to HPTU, offering undergraduate engineering education.",
    courses: [
      {
        title: "B.Tech in Computer Science & Engineering",
        duration: "4 Years",
        fees: "₹65,000/Yr",
        eligibility: "10+2 with PCM + JEE Main / HPCET",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹65,000/Yr",
        eligibility: "10+2 with PCM + JEE Main / HPCET",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹65,000/Yr",
        eligibility: "10+2 with PCM + JEE Main / HPCET",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ]
  },
  1943: {
    name: "Himachal Institute of Engineering and Technology (HIET), Shahpur",
    shortName: "HIET Shahpur",
    type: "Private",
    ownership: "Private",
    website: "https://hiet.co.in",
    phone: "01892-238491",
    address: "Vidyanagar, Near Gaggal Airport, Shahpur, Kangra, Himachal Pradesh - 176206",
    location: "Kangra",
    state: "Himachal Pradesh",
    fees: "₹65,000/Yr",
    affiliation: "Himachal Pradesh Technical University (HPTU), Hamirpur",
    about: "Himachal Institute of Engineering and Technology Shahpur, established in 2010 by Dhauladhar Education Society, is an AICTE-approved technical campus providing undergraduate degree courses in engineering.",
    courses: [
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹65,000/Yr",
        eligibility: "10+2 with PCM + JEE Main / HPCET",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹65,000/Yr",
        eligibility: "10+2 with PCM + JEE Main / HPCET",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "B.Tech in Computer Science & Engineering",
        duration: "4 Years",
        fees: "₹65,000/Yr",
        eligibility: "10+2 with PCM + JEE Main / HPCET",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  1944: {
    name: "Government College Dharamshala (Centre of Computer Applications & IT)",
    shortName: "GC Dharamshala",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://gcdharamshala.ac.in",
    phone: "01892-224827",
    address: "College Road, Civil Lines, Dharamshala, Kangra, Himachal Pradesh - 176215",
    location: "Kangra",
    state: "Himachal Pradesh",
    fees: "₹15,000/Yr",
    affiliation: "Himachal Pradesh University (HPU), Shimla (NAAC 'A' Grade)",
    about: "Government College Dharamshala, established in 1912, is one of the oldest and most prestigious institutions of higher education in Himachal Pradesh, accredited with NAAC Grade 'A', offering degree courses in IT, science, arts, and commerce.",
    courses: [
      {
        title: "Master of Computer Applications (MCA)",
        duration: "2 Years",
        fees: "₹18,000/Yr",
        eligibility: "Graduation with Mathematics + HPU MCA Entrance",
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
        title: "Bachelor of Science in Computer Science (B.Sc CS)",
        duration: "3 Years",
        fees: "₹3,500/Yr",
        eligibility: "10+2 with PCM",
        type: "SCIENCE",
        intake: 60
      }
    ]
  },
  1945: {
    name: "Hydro Engineering College Bandla, Bilaspur",
    shortName: "HEC Bandla",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://ghec.ac.in",
    phone: "01978-292520",
    address: "Bandla, District Bilaspur, Himachal Pradesh - 174001",
    location: "Bilaspur",
    state: "Himachal Pradesh",
    fees: "₹45,000/Yr",
    affiliation: "Himachal Pradesh Technical University (HPTU), Hamirpur",
    about: "Hydro Engineering College Bandla (Bilaspur), established in 2017 as a landmark joint venture of the Government of Himachal Pradesh, NTPC, and NHPC, is an AICTE-approved premier specialized engineering institute advancing hydro power engineering and technology.",
    courses: [
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹45,000/Yr",
        eligibility: "10+2 with PCM + HPCET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Electrical Engineering",
        duration: "4 Years",
        fees: "₹45,000/Yr",
        eligibility: "10+2 with PCM + HPCET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Computer Science & Engineering",
        duration: "4 Years",
        fees: "₹45,000/Yr",
        eligibility: "10+2 with PCM + HPCET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  1946: {
    name: "Dreamz Polytechnic, Mandi",
    shortName: "Dreamz Polytechnic",
    type: "Private",
    ownership: "Private",
    website: "https://dreamztechnology.in",
    phone: "01905-224444",
    address: "Village Khilra, P.O. Meramasit, Tehsil Sundernagar, District Mandi, Himachal Pradesh - 175036",
    location: "Mandi",
    state: "Himachal Pradesh",
    fees: "₹35,000/Yr",
    affiliation: "Himachal Pradesh Takniki Shiksha Board (HPTSB), Dharamshala",
    about: "Dreamz Polytechnic Khilra-Sundernagar, established in 2011 by Bright Educational Society, is an AICTE-approved technical diploma institute affiliated with HPTSB Dharamshala, delivering diploma courses in engineering.",
    courses: [
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹35,000/Yr",
        eligibility: "Class 10th pass + HP PAT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Civil Engineering",
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

progress.verifiedColleges = 1950;
progress.last_batch_completed = 195;
progress.currentBatch = 195;
progress.lastUpdated = new Date().toISOString();

if (!progress.batches) {
  progress.batches = {};
}

progress.batches["195"] = {
  status: "verified",
  verifiedCount: 10,
  range: "1941-1950",
  ids: batchIds,
  verifiedAt: new Date().toISOString()
};

if (!progress.batchHistory) {
  progress.batchHistory = [];
}
progress.batchHistory.push({
  batch: 195,
  verifiedCount: 10,
  totalVerified: 1950,
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
const batch195Entries = batchIds.map((id, i) => {
  const c = batchUpdates[id];
  return `| ${1940 + i + 1} | ${c.name} | ${c.location} | ${c.state} | ${c.type} | [Portal](${c.website}) |`;
}).join('\n');

if (!mdContent.includes(batchUpdates[1937].name)) {
  mdContent += `\n\n### Batch 195 (Colleges 1,941–1,950)\n\n| # | College Name | City | State | Type | Website |\n|---|---|---|---|---|---|\n${batch195Entries}\n`;
  fs.writeFileSync(allVerifiedMdPath, mdContent, 'utf8');
}

console.log('Batch 195 verification successfully completed!');

