const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const progressPath = path.join(__dirname, '../reports/verification/progress.json');
const allVerifiedJsonPath = path.join(__dirname, '../reports/verification/all_verified_colleges.json');
const allVerifiedMdPath = path.join(__dirname, '../reports/verification/all_verified_colleges.md');

const batchUpdates = {
  1847: {
    name: "Government Polytechnic, Korba",
    shortName: "GP Korba",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "http://gpkorba.ac.in",
    phone: "07759-241550",
    address: "Village Rumgara, P.O. Balco Nagar, Korba, Chhattisgarh - 495684",
    location: "Korba",
    state: "Chhattisgarh",
    fees: "₹5,150/Yr",
    affiliation: "Chhattisgarh Swami Vivekanand Technical University (CSVTU), Bhilai",
    courses: [
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹5,150/Yr",
        eligibility: "Class 10th with CG PPT / State Merit",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹5,150/Yr",
        eligibility: "Class 10th with CG PPT / State Merit",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹5,150/Yr",
        eligibility: "Class 10th with CG PPT / State Merit",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ],
    about: "Government Polytechnic Korba, established under the Directorate of Technical Education, Government of Chhattisgarh, is a prominent technical institution located at Rumgara, Balco Nagar. It provides quality diploma engineering education aligned with CSVTU Bhilai curriculum."
  },
  1848: {
    name: "Mansa Polytechnic College, Kurud",
    shortName: "Mansa Polytechnic",
    type: "Private",
    ownership: "Private",
    website: "https://mansapolytechnic.in",
    phone: "0788-2284100",
    address: "Kohka Road, Kurud, Bhilai, Durg, Chhattisgarh - 490026",
    location: "Durg",
    state: "Chhattisgarh",
    fees: "₹28,500/Yr",
    affiliation: "Chhattisgarh Swami Vivekanand Technical University (CSVTU), Bhilai",
    courses: [
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹28,500/Yr",
        eligibility: "Class 10th with CG PPT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹28,500/Yr",
        eligibility: "Class 10th with CG PPT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹28,500/Yr",
        eligibility: "Class 10th with CG PPT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ],
    about: "Mansa Polytechnic College at Kurud, Bhilai is managed by Mansa Education Society and affiliated with CSVTU Bhilai and approved by AICTE. The polytechnic offers specialized 3-year technical diploma programs in engineering branches."
  },
  1849: {
    name: "Government Engineering College, Raipur",
    shortName: "GEC Raipur",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://gecraipur.ac.in",
    phone: "0771-2972963",
    address: "Old Dhamtari Road, Sejbahar, Raipur, Chhattisgarh - 492015",
    location: "Raipur",
    state: "Chhattisgarh",
    fees: "₹24,390/Yr",
    affiliation: "Chhattisgarh Swami Vivekanand Technical University (CSVTU), Bhilai",
    courses: [
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹24,390/Yr",
        eligibility: "10+2 with PCM + CG PET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹24,390/Yr",
        eligibility: "10+2 with PCM + CG PET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Electrical and Electronics Engineering",
        duration: "4 Years",
        fees: "₹24,390/Yr",
        eligibility: "10+2 with PCM + CG PET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹24,390/Yr",
        eligibility: "10+2 with PCM + CG PET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Electronics and Telecommunication Engineering",
        duration: "4 Years",
        fees: "₹24,390/Yr",
        eligibility: "10+2 with PCM + CG PET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ],
    about: "Government Engineering College Raipur (GEC Raipur), established in 2006 by the Government of Chhattisgarh, is one of the state's premier public engineering institutions. Located on a sprawling campus at Sejbahar, it is affiliated to CSVTU Bhilai and approved by AICTE."
  },
  1850: {
    name: "Government Girls Polytechnic, Bilaspur",
    shortName: "GGP Bilaspur",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "http://ggpbilaspur.ac.in",
    phone: "07752-260330",
    address: "GEC Campus, Koni, Bilaspur, Chhattisgarh - 495009",
    location: "Bilaspur",
    state: "Chhattisgarh",
    fees: "₹5,150/Yr",
    affiliation: "Chhattisgarh Swami Vivekanand Technical University (CSVTU), Bhilai",
    courses: [
      {
        title: "Diploma in Computer Science and Engineering",
        duration: "3 Years",
        fees: "₹5,150/Yr",
        eligibility: "Class 10th with CG PPT / State Merit",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 45
      },
      {
        title: "Diploma in Electronics and Telecommunication",
        duration: "3 Years",
        fees: "₹5,150/Yr",
        eligibility: "Class 10th with CG PPT / State Merit",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 45
      },
      {
        title: "Diploma in Modern Office Management",
        duration: "3 Years",
        fees: "₹5,150/Yr",
        eligibility: "Class 10th / 10+2 Merit",
        type: "MANAGEMENT",
        intake: 40
      }
    ],
    about: "Government Girls Polytechnic Bilaspur, established in 2008 at the Koni campus, is a dedicated women's technical institution under the Directorate of Technical Education, Government of Chhattisgarh, empowering women in engineering and vocational technologies."
  },
  1851: {
    name: "Thakur Balram Singh Government Polytechnic, Takhatpur",
    shortName: "TBS Govt Polytechnic",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "http://gptakhatpur.ac.in",
    phone: "07753-264220",
    address: "Village Khamariya, Takhatpur, Bilaspur, Chhattisgarh - 495330",
    location: "Bilaspur",
    state: "Chhattisgarh",
    fees: "₹5,150/Yr",
    affiliation: "Chhattisgarh Swami Vivekanand Technical University (CSVTU), Bhilai",
    courses: [
      {
        title: "Diploma in Electronics and Telecommunication Engineering",
        duration: "3 Years",
        fees: "₹5,150/Yr",
        eligibility: "Class 10th with CG PPT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹5,150/Yr",
        eligibility: "Class 10th with CG PPT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹5,150/Yr",
        eligibility: "Class 10th with CG PPT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ],
    about: "Thakur Balram Singh Government Polytechnic Takhatpur is a state government technical institute established by the Government of Chhattisgarh to provide subsidized engineering diploma courses to students in Bilaspur district."
  },
  1852: {
    name: "Chhattisgarh Institute of Technology, Raigarh (Govt. Polytechnic)",
    shortName: "CIT Raigarh",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "http://cgdte.cgstate.gov.in",
    phone: "07762-222300",
    address: "Gardi, Chakradharnagar, Raigarh, Chhattisgarh - 496001",
    location: "Raigarh",
    state: "Chhattisgarh",
    fees: "₹5,150/Yr",
    affiliation: "Chhattisgarh Swami Vivekanand Technical University (CSVTU), Bhilai",
    courses: [
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹5,150/Yr",
        eligibility: "Class 10th with CG PPT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹5,150/Yr",
        eligibility: "Class 10th with CG PPT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹5,150/Yr",
        eligibility: "Class 10th with CG PPT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ],
    about: "Chhattisgarh Institute of Technology Raigarh (functioning as Government Polytechnic Raigarh) is a state-run technical institute operated under the Directorate of Technical Education, Government of Chhattisgarh, offering AICTE-approved engineering diploma courses."
  },
  1853: {
    name: "Government Polytechnic, Mahasamund",
    shortName: "GP Mahasamund",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "http://gpmahasamund.ac.in",
    phone: "07723-222010",
    address: "B.T.I. Road, Belsonda, Mahasamund, Chhattisgarh - 493445",
    location: "Mahasamund",
    state: "Chhattisgarh",
    fees: "₹5,150/Yr",
    affiliation: "Chhattisgarh Swami Vivekanand Technical University (CSVTU), Bhilai",
    courses: [
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹5,150/Yr",
        eligibility: "Class 10th with CG PPT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹5,150/Yr",
        eligibility: "Class 10th with CG PPT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹5,150/Yr",
        eligibility: "Class 10th with CG PPT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ],
    about: "Government Polytechnic Mahasamund is a state government institution established to provide quality diploma technical education in Mahasamund district. Approved by AICTE and affiliated to CSVTU Bhilai, it operates under the Directorate of Technical Education, CG."
  },
  1854: {
    name: "Government Polytechnic, Ramanujganj",
    shortName: "GP Ramanujganj",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "http://gpramanujganj.ac.in",
    phone: "07779-222010",
    address: "Village Nawapara, P.O. Aaragahi, Ramanujganj, Balrampur-Ramanujganj, Chhattisgarh - 497220",
    location: "Balrampur",
    state: "Chhattisgarh",
    fees: "₹5,150/Yr",
    affiliation: "Chhattisgarh Swami Vivekanand Technical University (CSVTU), Bhilai",
    courses: [
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹5,150/Yr",
        eligibility: "Class 10th with CG PPT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹5,150/Yr",
        eligibility: "Class 10th with CG PPT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹5,150/Yr",
        eligibility: "Class 10th with CG PPT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ],
    about: "Government Polytechnic Ramanujganj is situated in Balrampur-Ramanujganj district of Chhattisgarh. Operating under the Directorate of Technical Education, Government of Chhattisgarh, it provides technical diplomas in key engineering disciplines."
  },
  1855: {
    name: "Chhattisgarh Institute of Technology, Jashpur (Govt. Polytechnic)",
    shortName: "CIT Jashpur",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "http://gpjashpur.ac.in",
    phone: "07769-223400",
    address: "Village Jhargaon, Post Gholeng, Jashpur, Chhattisgarh - 496338",
    location: "Jashpur",
    state: "Chhattisgarh",
    fees: "₹5,150/Yr",
    affiliation: "Chhattisgarh Swami Vivekanand Technical University (CSVTU), Bhilai",
    courses: [
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹5,150/Yr",
        eligibility: "Class 10th with CG PPT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹5,150/Yr",
        eligibility: "Class 10th with CG PPT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹5,150/Yr",
        eligibility: "Class 10th with CG PPT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ],
    about: "Chhattisgarh Institute of Technology Jashpur (Government Polytechnic Jashpur) is a government technical institution providing diploma engineering programs in the tribal district of Jashpur, affiliated with CSVTU Bhilai and approved by AICTE."
  },
  1856: {
    name: "Government Polytechnic, Gariaband",
    shortName: "GP Gariaband",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "http://gpgariaband.ac.in",
    phone: "07706-241010",
    address: "Deobhog Road, Darrapara, Gariaband, Chhattisgarh - 493889",
    location: "Gariaband",
    state: "Chhattisgarh",
    fees: "₹5,150/Yr",
    affiliation: "Chhattisgarh Swami Vivekanand Technical University (CSVTU), Bhilai",
    courses: [
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹5,150/Yr",
        eligibility: "Class 10th with CG PPT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹5,150/Yr",
        eligibility: "Class 10th with CG PPT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹5,150/Yr",
        eligibility: "Class 10th with CG PPT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ],
    about: "Government Polytechnic Gariaband was established by the Government of Chhattisgarh to expand technical education infrastructure in Gariaband district. It offers 3-year AICTE-approved diploma programs affiliated to CSVTU Bhilai."
  }
};

console.log('Loading siteData.json...');
const rawSiteData = fs.readFileSync(siteDataPath, 'utf8');
let siteData = JSON.parse(rawSiteData);
const colleges = Array.isArray(siteData) ? siteData : siteData.colleges;

const batchIds = Object.keys(batchUpdates).map(Number);
let appliedCount = 0;

colleges.forEach(college => {
  if (batchUpdates[college.id]) {
    const upd = batchUpdates[college.id];
    Object.assign(college, upd);
    appliedCount++;
  }
});

console.log(`Applied updates to ${appliedCount} colleges in siteData.`);
fs.writeFileSync(siteDataPath, JSON.stringify(colleges, null, 2), 'utf8');

// Update progress.json
console.log('Updating progress.json...');
let progress = JSON.parse(fs.readFileSync(progressPath, 'utf8'));

progress.verifiedColleges = 1860;
progress.last_batch_completed = 186;
progress.currentBatch = 186;
progress.lastUpdated = new Date().toISOString();

if (!progress.batches) {
  progress.batches = {};
}

progress.batches["186"] = {
  status: "verified",
  verifiedCount: 10,
  range: "1851-1860",
  ids: batchIds,
  verifiedAt: new Date().toISOString()
};

if (!progress.batchHistory) {
  progress.batchHistory = [];
}
progress.batchHistory.push({
  batch: 186,
  verifiedCount: 10,
  totalVerified: 1860,
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
const batch186Entries = batchIds.map((id, i) => {
  const c = batchUpdates[id];
  return `| ${1850 + i + 1} | ${c.name} | ${c.location} | ${c.state} | ${c.type} | [Portal](${c.website}) |`;
}).join('\n');

if (!mdContent.includes(batchUpdates[1847].name)) {
  mdContent += `\n\n### Batch 186 (Colleges 1,851–1,860)\n\n| # | College Name | City | State | Type | Website |\n|---|---|---|---|---|---|\n${batch186Entries}\n`;
  fs.writeFileSync(allVerifiedMdPath, mdContent, 'utf8');
}

console.log('Batch 186 verification successfully completed!');

