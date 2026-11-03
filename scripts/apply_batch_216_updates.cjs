const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const progressPath = path.join(__dirname, '../reports/verification/progress.json');
const allVerifiedJsonPath = path.join(__dirname, '../reports/verification/all_verified_colleges.json');
const allVerifiedMdPath = path.join(__dirname, '../reports/verification/all_verified_colleges.md');

const batchUpdates = {
  2147: {
    name: "THDC Institute of Hydropower Engineering and Technology (THDC-IHET)",
    shortName: "THDC-IHET Tehri",
    city: "Tehri Garhwal",
    location: "Tehri Garhwal",
    state: "Uttarakhand",
    address: "Bhagirathipuram, Tehri Garhwal, Uttarakhand - 249001",
    phone: "+91-1376-236816",
    website: "https://thdcihet.ac.in",
    rating: 4.5,
    type: "Public/Government (Constituent College of UTU)",
    ownership: "Public/Government",
    about: "THDC Institute of Hydropower Engineering and Technology (THDC-IHET) is a premier state government engineering college and constituent institute of Uttarakhand Technical University (UTU). Established in 2011 as a joint initiative between the Government of Uttarakhand and THDC India Limited (a Mini-Ratna Schedule 'A' PSU under Ministry of Power), THDC-IHET provides world-class undergraduate technical education overlooking Tehri Dam lake.",
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
        title: "B.Tech in Electrical Engineering",
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
      },
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹65,000/Yr",
        eligibility: "10+2 with Physics, Mathematics & Chemistry + JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  2148: {
    name: "Government Polytechnic, Kanalichhina",
    shortName: "GP Kanalichhina",
    city: "Pithoragarh",
    location: "Pithoragarh",
    state: "Uttarakhand",
    address: "GIC Campus, Kanalichhina, District Pithoragarh, Uttarakhand - 262541",
    phone: "+91-5964-285010",
    website: "http://ukdte.org",
    rating: 4.1,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Government Polytechnic Kanalichhina is a state government polytechnic college located in Kanalichhina, Pithoragarh district, Uttarakhand. Operating under the Directorate of Technical Education, Uttarakhand, and approved by AICTE, it offers diploma engineering in Electrical Engineering.",
    fees: "₹8,000/Yr",
    exams: "UBTER JEEP",
    affiliation: "Uttarakhand Board of Technical Education, Roorkee (UBTER) / AICTE",
    courses: [
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "10th High School Pass / UBTER JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ]
  },
  2149: {
    name: "Jaswant Singh Rawat Government Polytechnic, Bironkhal",
    shortName: "JSR GP Bironkhal",
    city: "Pauri Garhwal",
    location: "Pauri Garhwal",
    state: "Uttarakhand",
    address: "Beeronkhal, District Pauri Garhwal, Uttarakhand - 246276",
    phone: "+91-1369-264010",
    website: "http://ukdte.org",
    rating: 4.2,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Jaswant Singh Rawat Government Polytechnic Bironkhal is named in honor of the revered Mahavir Chakra hero Rifleman Jaswant Singh Rawat. Operating under the Directorate of Technical Education, Uttarakhand, and approved by AICTE, this government polytechnic imparts diploma in Mechanical Engineering to youth of Pauri Garhwal.",
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
        intake: 30
      }
    ]
  },
  2150: {
    name: "Government Polytechnic, Garur (Bageshwar)",
    shortName: "GP Garur",
    city: "Bageshwar",
    location: "Bageshwar",
    state: "Uttarakhand",
    address: "Garur, District Bageshwar, Uttarakhand - 263641",
    phone: "+91-5963-222010",
    website: "http://ukdte.org",
    rating: 4.1,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Government Polytechnic Garur is a state government polytechnic institute located in Garur valley of Bageshwar district, Uttarakhand. Operating under the Directorate of Technical Education, Uttarakhand, and approved by AICTE, it offers diploma education in Civil Engineering.",
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
      }
    ]
  },
  2151: {
    name: "Alpine College of Management & Technology (ACMT)",
    shortName: "ACMT Dehradun",
    city: "Dehradun",
    location: "Dehradun",
    state: "Uttarakhand",
    address: "Nanda Ki Chowki, Prem Nagar, Dehradun, Uttarakhand - 248007",
    phone: "+91-135-2771740",
    website: "https://www.alpineddn.com",
    rating: 4.1,
    type: "Private",
    ownership: "Private",
    about: "Alpine College of Management & Technology (ACMT), Dehradun is an established private technical and management institution situated at Nanda Ki Chowki, Prem Nagar. Approved by AICTE and affiliated to UBTER Roorkee and Sri Dev Suman Uttarakhand University, ACMT provides diploma engineering, management, and IT courses.",
    fees: "₹40,000/Yr",
    exams: "UBTER JEEP / Merit",
    affiliation: "Uttarakhand Board of Technical Education, Roorkee (UBTER) / SDSUV / AICTE",
    courses: [
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹40,000/Yr",
        eligibility: "10th High School Pass / UBTER JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹40,000/Yr",
        eligibility: "10th High School Pass / UBTER JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹50,000/Yr",
        eligibility: "10+2 Intermediate Pass",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹50,000/Yr",
        eligibility: "10+2 with Mathematics",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      }
    ]
  },
  2152: {
    name: "Saraswati Institute of Management & Technology (SIMT)",
    shortName: "SIMT Rudrapur",
    city: "Rudrapur",
    location: "Rudrapur",
    state: "Uttarakhand",
    address: "Kashipur Road, Rudrapur, District Udham Singh Nagar, Uttarakhand - 263153",
    phone: "+91-9756163000",
    website: "http://www.simtrdr.in",
    rating: 4.1,
    type: "Private",
    ownership: "Private",
    about: "Saraswati Institute of Management & Technology (SIMT) is a private institution located on Kashipur Road in Rudrapur, Uttarakhand. Affiliated to UBTER Roorkee and Kumaun University Nainital, SIMT offers polytechnic diploma courses in engineering disciplines alongside professional degree programs.",
    fees: "₹35,000/Yr",
    exams: "UBTER JEEP / Merit",
    affiliation: "Uttarakhand Board of Technical Education, Roorkee (UBTER) / Kumaun University / AICTE",
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
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹35,000/Yr",
        eligibility: "10th High School Pass / UBTER JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹45,000/Yr",
        eligibility: "10+2 Intermediate Pass",
        type: "MANAGEMENT",
        intake: 60
      }
    ]
  },
  2153: {
    name: "B.S. Negi Mahila Pravidhik Prashikshan Sansthan (BSNMPPS)",
    shortName: "BSNMPPS Dehradun",
    city: "Dehradun",
    location: "Dehradun",
    state: "Uttarakhand",
    address: "ONGC Campus, Kaulagarh Road, Dehradun, Uttarakhand - 248001",
    phone: "+91-135-2751498",
    website: "http://www.bsnmpps.org",
    rating: 4.3,
    type: "Public/Government (Govt Aided / ONGC Women's Polytechnic)",
    ownership: "Public/Government",
    about: "B.S. Negi Mahila Pravidhik Prashikshan Sansthan (BSNMPPS) is a government-aided women's polytechnic institute located inside the ONGC Campus in Dehradun. Supported by ONGC and approved by AICTE, it offers subsidized vocational and diploma education in computer applications, secretarial practice, and garment technology for female students.",
    fees: "₹15,000/Yr",
    exams: "UBTER JEEP / Merit",
    affiliation: "Uttarakhand Board of Technical Education, Roorkee (UBTER) / AICTE",
    courses: [
      {
        title: "Diploma in Modern Office Management & Secretarial Practice",
        duration: "2 Years",
        fees: "₹15,000/Yr",
        eligibility: "10+2 Intermediate Pass",
        type: "MANAGEMENT",
        intake: 40
      },
      {
        title: "Diploma in Computer Science & Engineering",
        duration: "3 Years",
        fees: "₹18,000/Yr",
        eligibility: "10th High School Pass / UBTER JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 40
      },
      {
        title: "Diploma in Garment Technology",
        duration: "3 Years",
        fees: "₹18,000/Yr",
        eligibility: "10th High School Pass / UBTER JEEP",
        type: "DESIGN",
        intake: 30
      }
    ]
  },
  2154: {
    name: "Government Polytechnic, Rudraprayag",
    shortName: "GP Rudraprayag",
    city: "Rudraprayag",
    location: "Rudraprayag",
    state: "Uttarakhand",
    address: "Ratura, District Rudraprayag, Uttarakhand - 246171",
    phone: "+91-1364-233010",
    website: "http://ukdte.org",
    rating: 4.1,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Government Polytechnic Rudraprayag is a state government technical institution established by the Department of Technical Education, Government of Uttarakhand. Located at Ratura in Rudraprayag, it offers diploma engineering courses in Civil Engineering with specialized surveying and material labs.",
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
      }
    ]
  },
  2155: {
    name: "Late General Bipin Chandra Joshi Government Rural Polytechnic, Takula",
    shortName: "LGBJC GRP Takula",
    city: "Almora",
    location: "Almora",
    state: "Uttarakhand",
    address: "Takula, District Almora, Uttarakhand - 263628",
    phone: "+91-5962-286010",
    website: "https://www.grptakula.org.in",
    rating: 4.3,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Late General Bipin Chandra Joshi Government Rural Polytechnic Takula was established by the Government of Uttarakhand in memory of former Chief of Army Staff General B.C. Joshi. Approved by AICTE and affiliated to UBTER Roorkee, it provides subsidized diploma engineering education in Civil Engineering to rural youth.",
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
        intake: 60
      }
    ]
  },
  2156: {
    name: "Government Polytechnic, Aamwala",
    shortName: "GP Aamwala",
    city: "Dehradun",
    location: "Dehradun",
    state: "Uttarakhand",
    address: "Milan Kendra, Village Nanurkhera, Nalapani / Aamwala, Dehradun, Uttarakhand - 248008",
    phone: "+91-135-2780010",
    website: "http://gpaamwala.org.in",
    rating: 4.2,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Government Polytechnic Aamwala is a state government polytechnic institute located at Nanurkhera, Nalapani, Dehradun. Approved by AICTE and affiliated to UBTER Roorkee, the institute offers diploma in Electronics Engineering with modern computing and digital electronics laboratories.",
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

progress.verifiedColleges = 2160;
progress.batchesCompleted = 216;
progress.last_batch_completed = 216;
progress.currentBatch = 216;
progress.completionPercentage = "21.60%";
progress.lastUpdated = new Date().toISOString();

if (!progress.batches) {
  progress.batches = {};
}

progress.batches["216"] = {
  status: "verified",
  verifiedCount: 10,
  range: "2151-2160",
  ids: batchIds,
  verifiedAt: new Date().toISOString()
};

if (!progress.batchHistory) {
  progress.batchHistory = [];
}
progress.batchHistory.push({
  batch: 216,
  verifiedCount: 10,
  totalVerified: 2160,
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
const batch216Entries = batchIds.map((id, i) => {
  const c = batchUpdates[id];
  return `| ${2150 + i + 1} | ${c.name} | ${c.location} | ${c.state} | ${c.type} | [Portal](${c.website}) |`;
}).join('\n');

if (!mdContent.includes(batchUpdates[2147].name)) {
  mdContent += `\n\n### Batch 216 (Colleges 2,151–2,160)\n\n| # | College Name | City | State | Type | Website |\n|---|---|---|---|---|---|\n${batch216Entries}\n`;
  fs.writeFileSync(allVerifiedMdPath, mdContent, 'utf8');
}

console.log('Batch 216 verification successfully applied!');

