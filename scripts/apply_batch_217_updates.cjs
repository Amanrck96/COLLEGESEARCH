const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const progressPath = path.join(__dirname, '../reports/verification/progress.json');
const allVerifiedJsonPath = path.join(__dirname, '../reports/verification/all_verified_colleges.json');
const allVerifiedMdPath = path.join(__dirname, '../reports/verification/all_verified_colleges.md');

const batchUpdates = {
  2157: {
    name: "Government Polytechnic, Dehradun",
    shortName: "GP Dehradun",
    city: "Dehradun",
    location: "Dehradun",
    state: "Uttarakhand",
    address: "Shimla Bypass Road, Pithuwala, Dehradun, Uttarakhand - 248001",
    phone: "+91-135-2641566",
    website: "https://www.gpdehradun.org.in",
    rating: 4.5,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Government Polytechnic Dehradun, established in 1952 at Pithuwala, is one of the premier and oldest state government polytechnic institutes in northern India. Operating under the Directorate of Technical Education, Government of Uttarakhand, and approved by AICTE, it offers diverse diploma courses in Mechanical, Civil, Electrical, Electronics, and Computer disciplines.",
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
        intake: 60
      },
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "10th High School Pass / UBTER JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "10th High School Pass / UBTER JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Computer Science & Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "10th High School Pass / UBTER JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  2158: {
    name: "BFIT Technical Campus, Dehradun",
    shortName: "BFIT Dehradun",
    city: "Dehradun",
    location: "Dehradun",
    state: "Uttarakhand",
    address: "Sudhowala, Chakrata Road, Dehradun, Uttarakhand - 248007",
    phone: "+91-135-2771111",
    website: "https://www.bfitdoon.com",
    rating: 4.2,
    type: "Private",
    ownership: "Private",
    about: "BFIT Technical Campus (Baba Farid Institute of Technology) is a prominent private multi-disciplinary educational campus located at Sudhowala on Chakrata Road in Dehradun. Approved by AICTE and affiliated to Uttarakhand Technical University and UBTER, BFIT offers undergraduate and diploma courses in engineering, IT, and management.",
    fees: "₹95,000/Yr",
    exams: "JEE Main / UBTER JEEP / Merit",
    affiliation: "Uttarakhand Technical University (UTU) / UBTER / AICTE",
    courses: [
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹95,000/Yr",
        eligibility: "10+2 with Physics, Mathematics & Chemistry + JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Computer Science & Engineering",
        duration: "4 Years",
        fees: "₹95,000/Yr",
        eligibility: "10+2 with Physics, Mathematics & Chemistry + JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹45,000/Yr",
        eligibility: "10th High School Pass / UBTER JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  2159: {
    name: "Government Polytechnic, Gauchar",
    shortName: "GP Gauchar",
    city: "Chamoli",
    location: "Chamoli",
    state: "Uttarakhand",
    address: "Gauchar, District Chamoli, Uttarakhand - 246429",
    phone: "+91-1363-240210",
    website: "https://gpgauchar.org",
    rating: 4.2,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Government Polytechnic Gauchar, established in 1975, is a renowned state government technical institution in Chamoli district. Approved by AICTE and affiliated to UBTER Roorkee, it provides subsidized diploma engineering courses in Civil Engineering, Electronics Engineering, and Information Technology.",
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
        intake: 40
      },
      {
        title: "Diploma in Electronics Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "10th High School Pass / UBTER JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 40
      }
    ]
  },
  2160: {
    name: "BRD College of Management and Sciences, Roorkee",
    shortName: "BRD College Roorkee",
    city: "Roorkee",
    location: "Roorkee",
    state: "Uttarakhand",
    address: "7th Km Stone, Roorkee-Dehradun Highway, NH-58, Roorkee, District Haridwar, Uttarakhand - 247667",
    phone: "+91-9897065920",
    website: "https://brdcroorkee.in",
    rating: 4.1,
    type: "Private",
    ownership: "Private",
    about: "BRD College of Management and Sciences (BRDC) is a private institution located on the Roorkee-Dehradun Highway in Roorkee. Affiliated to Sri Dev Suman Uttarakhand University (SDSUV) and UBTER Roorkee, BRDC offers diploma in engineering along with undergraduate degree courses in business administration and computer applications.",
    fees: "₹40,000/Yr",
    exams: "UBTER JEEP / Merit",
    affiliation: "Sri Dev Suman Uttarakhand University (SDSUV) / UBTER / AICTE",
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
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹40,000/Yr",
        eligibility: "10+2 Intermediate Pass",
        type: "MANAGEMENT",
        intake: 60
      }
    ]
  },
  2161: {
    name: "Women Institute of Technology (WIT), Dehradun",
    shortName: "WIT Dehradun",
    city: "Dehradun",
    location: "Dehradun",
    state: "Uttarakhand",
    address: "UTU Campus, Chandanwadi, Prem Nagar, Sudhowala, Dehradun, Uttarakhand - 248007",
    phone: "+91-135-2770059",
    website: "http://wit.ac.in",
    rating: 4.5,
    type: "Public/Government (Constituent College of UTU)",
    ownership: "Public/Government",
    about: "Women Institute of Technology (WIT), Dehradun is the first and premier state government engineering college for women in Uttarakhand. Established in 2012 as a constituent institute of Uttarakhand Technical University (UTU) inside the university's main campus at Sudhowala, WIT provides subsidized, top-quality undergraduate engineering education exclusively for female engineers.",
    fees: "₹65,000/Yr",
    exams: "JEE Main / UTU Counselling",
    affiliation: "Constituent College of Uttarakhand Technical University (UTU) / AICTE",
    courses: [
      {
        title: "B.Tech in Computer Science & Engineering",
        duration: "4 Years",
        fees: "₹65,000/Yr",
        eligibility: "10+2 with Physics, Mathematics & Chemistry + JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Electronics & Communication Engineering",
        duration: "4 Years",
        fees: "₹65,000/Yr",
        eligibility: "10+2 with Physics, Mathematics & Chemistry + JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Electrical & Electronics Engineering",
        duration: "4 Years",
        fees: "₹65,000/Yr",
        eligibility: "10+2 with Physics, Mathematics & Chemistry + JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹65,000/Yr",
        eligibility: "10+2 with Physics, Mathematics & Chemistry + JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  2162: {
    name: "Gurukula Kangri (Deemed to be University), Haridwar",
    shortName: "GKV Haridwar",
    city: "Haridwar",
    location: "Haridwar",
    state: "Uttarakhand",
    address: "P.O. Gurukula Kangri, Haridwar, Uttarakhand - 249404",
    phone: "+91-7300761138",
    website: "https://www.gkv.ac.in",
    rating: 4.5,
    type: "Public/Government (Deemed to be University)",
    ownership: "Public/Government",
    about: "Gurukula Kangri (Deemed to be University) is a historic central institution founded in 1902 by Swami Shraddhanand with the vision to revive ancient Vedic heritage in modern education. Conferred Deemed University status in 1962 under Section 3 of the UGC Act, GKV is centrally funded and offers accredited programs in engineering, management, sciences, and Vedic studies with a distinguished history.",
    fees: "₹98,000/Yr",
    exams: "JEE Main / CSAB / CUET / CAT",
    affiliation: "Centrally Funded Deemed University (UGC Act 1956) / AICTE / NAAC",
    courses: [
      {
        title: "B.Tech in Computer Science & Engineering",
        duration: "4 Years",
        fees: "₹98,000/Yr",
        eligibility: "10+2 with Physics, Mathematics & Chemistry + JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 120
      },
      {
        title: "B.Tech in Electronics & Communication Engineering",
        duration: "4 Years",
        fees: "₹98,000/Yr",
        eligibility: "10+2 with Physics, Mathematics & Chemistry + JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Master of Business Administration (MBA)",
        duration: "2 Years",
        fees: "₹85,000/Yr",
        eligibility: "Graduation with 50% + CAT / MAT / CMAT",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "Master of Computer Applications (MCA)",
        duration: "2 Years",
        fees: "₹70,000/Yr",
        eligibility: "BCA / B.Sc with Mathematics + CUET-PG",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      }
    ]
  },
  2163: {
    name: "Shri S.S.P.U. Government Polytechnic, Sahaspur",
    shortName: "SSSPU GP Sahaspur",
    city: "Dehradun",
    location: "Dehradun",
    state: "Uttarakhand",
    address: "Sahaspur, District Dehradun, Uttarakhand - 248197",
    phone: "+91-135-2699010",
    website: "http://ukdte.org",
    rating: 4.1,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Shri Sahdev Singh Pundir Umrao Singh Government Polytechnic Sahaspur is a state government polytechnic institute located in Sahaspur, Dehradun district. Operating under the Directorate of Technical Education, Government of Uttarakhand, and approved by AICTE, it offers diploma engineering courses in Mechanical Automobile and Civil Engineering.",
    fees: "₹8,000/Yr",
    exams: "UBTER JEEP",
    affiliation: "Uttarakhand Board of Technical Education, Roorkee (UBTER) / AICTE",
    courses: [
      {
        title: "Diploma in Mechanical Engineering (Automobile)",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "10th High School Pass / UBTER JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 40
      },
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "10th High School Pass / UBTER JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 40
      }
    ]
  },
  2164: {
    name: "Bishamber Sahai Diploma Engineering College, Roorkee",
    shortName: "BSDEC Roorkee",
    city: "Haridwar",
    location: "Haridwar",
    state: "Uttarakhand",
    address: "6th Km Stone, Delhi-Dehradun Highway, NH-58, Saliyar, Roorkee, Haridwar - 247667",
    phone: "+91-1332-264115",
    website: "https://www.bsgrouproorkee.com",
    rating: 4.1,
    type: "Private",
    ownership: "Private",
    about: "Bishamber Sahai Diploma Engineering College is a private polytechnic institution under the Bishamber Sahai Group of Institutions, situated on NH-58 in Roorkee. Approved by AICTE and affiliated to UBTER Roorkee, it offers 3-year diploma engineering programs in electrical, mechanical, and civil branches.",
    fees: "₹35,000/Yr",
    exams: "UBTER JEEP / Merit",
    affiliation: "Uttarakhand Board of Technical Education, Roorkee (UBTER) / AICTE",
    courses: [
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹35,000/Yr",
        eligibility: "10th High School Pass / UBTER JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
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
      }
    ]
  },
  2165: {
    name: "Government Rural Polytechnic, Thalnadi",
    shortName: "GRP Thalnadi",
    city: "Pauri Garhwal",
    location: "Pauri Garhwal",
    state: "Uttarakhand",
    address: "P.O. Bhrigukhal, Thalnadi, District Pauri Garhwal, Uttarakhand - 246130",
    phone: "+91-1386-271010",
    website: "http://ukdte.org",
    rating: 4.1,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Government Rural Polytechnic Thalnadi is a state government rural polytechnic institute located in Bhrigukhal, Pauri Garhwal district. Operating under the Directorate of Technical Education, Uttarakhand, and approved by AICTE, it offers diploma engineering in Electronics Engineering to serve hilly rural communities.",
    fees: "₹8,000/Yr",
    exams: "UBTER JEEP",
    affiliation: "Uttarakhand Board of Technical Education, Roorkee (UBTER) / AICTE",
    courses: [
      {
        title: "Diploma in Electronics Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "10th High School Pass / UBTER JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 40
      }
    ]
  },
  2166: {
    name: "Balwant Singh Mukhiya (BSM) College of Engineering",
    shortName: "BSM College Roorkee",
    city: "Haridwar",
    location: "Haridwar",
    state: "Uttarakhand",
    address: "2 Km Milestone, Roorkee-Laksar Road, Nagla Imarti, Roorkee, Haridwar, Uttarakhand - 247667",
    phone: "+91-1332-260100",
    website: "http://bsmcoe.com",
    rating: 4.1,
    type: "Private",
    ownership: "Private",
    about: "Balwant Singh Mukhiya (BSM) College of Engineering is an established private engineering college in Roorkee, Uttarakhand. Affiliated to Uttarakhand Technical University (UTU) and approved by AICTE, BSM offers 4-year undergraduate B.Tech degree programs in Civil, Computer Science, and Mechanical engineering.",
    fees: "₹85,000/Yr",
    exams: "JEE Main / UTU Counselling",
    affiliation: "Uttarakhand Technical University (UTU) / AICTE",
    courses: [
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹85,000/Yr",
        eligibility: "10+2 with Physics, Mathematics & Chemistry + JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Computer Science & Engineering",
        duration: "4 Years",
        fees: "₹85,000/Yr",
        eligibility: "10+2 with Physics, Mathematics & Chemistry + JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹85,000/Yr",
        eligibility: "10+2 with Physics, Mathematics & Chemistry + JEE Main",
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

progress.verifiedColleges = 2170;
progress.batchesCompleted = 217;
progress.last_batch_completed = 217;
progress.currentBatch = 217;
progress.completionPercentage = "21.70%";
progress.lastUpdated = new Date().toISOString();

if (!progress.batches) {
  progress.batches = {};
}

progress.batches["217"] = {
  status: "verified",
  verifiedCount: 10,
  range: "2161-2170",
  ids: batchIds,
  verifiedAt: new Date().toISOString()
};

if (!progress.batchHistory) {
  progress.batchHistory = [];
}
progress.batchHistory.push({
  batch: 217,
  verifiedCount: 10,
  totalVerified: 2170,
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
const batch217Entries = batchIds.map((id, i) => {
  const c = batchUpdates[id];
  return `| ${2160 + i + 1} | ${c.name} | ${c.location} | ${c.state} | ${c.type} | [Portal](${c.website}) |`;
}).join('\n');

if (!mdContent.includes(batchUpdates[2157].name)) {
  mdContent += `\n\n### Batch 217 (Colleges 2,161–2,170)\n\n| # | College Name | City | State | Type | Website |\n|---|---|---|---|---|---|\n${batch217Entries}\n`;
  fs.writeFileSync(allVerifiedMdPath, mdContent, 'utf8');
}

console.log('Batch 217 verification successfully applied!');
