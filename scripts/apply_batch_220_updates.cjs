const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const progressPath = path.join(__dirname, '../reports/verification/progress.json');
const allVerifiedJsonPath = path.join(__dirname, '../reports/verification/all_verified_colleges.json');
const allVerifiedMdPath = path.join(__dirname, '../reports/verification/all_verified_colleges.md');

const batchUpdates = {
  2187: {
    name: "Department of Management Studies, Kumaun University",
    shortName: "DMS Kumaun Univ Bhimtal",
    city: "Bhimtal",
    location: "Bhimtal",
    state: "Uttarakhand",
    address: "Sir J.C. Bose Technical Campus, Block Road, Mallital, Bhimtal, District Nainital, Uttarakhand - 263136",
    phone: "+91-5942-247136",
    website: "https://dmsbhimtal.com",
    rating: 4.5,
    type: "Public/Government (State University Department)",
    ownership: "Public/Government",
    about: "Department of Management Studies (DMS), Kumaun University, located at the Sir J.C. Bose Technical Campus in Bhimtal, is a premier state government management department. Conferred NAAC 'A+' Grade as part of Kumaun University, DMS Bhimtal provides rigorous, highly subsidized MBA education with picturesque Himalayan surroundings.",
    fees: "₹65,000/Yr",
    exams: "CAT / MAT / CMAT / Kumaun Univ Entrance",
    affiliation: "Constituent Department of Kumaun University (NAAC A+) / AICTE",
    courses: [
      {
        title: "Master of Business Administration (MBA)",
        duration: "2 Years",
        fees: "₹65,000/Yr",
        eligibility: "Graduation with min 50% + CAT/MAT/CMAT",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "Executive MBA",
        duration: "2 Years",
        fees: "₹70,000/Yr",
        eligibility: "Graduation with 2 Years Work Experience",
        type: "MANAGEMENT",
        intake: 30
      }
    ]
  },
  2188: {
    name: "Government Polytechnic, Uttarkashi",
    shortName: "GP Uttarkashi",
    city: "Uttarkashi",
    location: "Uttarkashi",
    state: "Uttarakhand",
    address: "Joshiyara, District Uttarkashi, Uttarakhand - 249193",
    phone: "+91-1374-222210",
    website: "https://gputtarkashi.org.in",
    rating: 4.3,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Government Polytechnic Uttarkashi, established in 1975 at Joshiyara on the banks of Bhagirathi River, is the premier state government technical institute in Uttarkashi district. Operating under the Directorate of Technical Education, Government of Uttarakhand, and approved by AICTE, it offers diploma engineering in Electronics, Computer Science, and Civil disciplines.",
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
      },
      {
        title: "Diploma in Computer Science & Engineering",
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
  2189: {
    name: "SSSRSB Government Polytechnic, Dwarahat (Almora)",
    shortName: "GP Dwarahat",
    city: "Almora",
    location: "Almora",
    state: "Uttarakhand",
    address: "Dwarahat, District Almora, Uttarakhand - 263653",
    phone: "+91-5966-244210",
    website: "http://ukdte.org",
    rating: 4.1,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Swatantrata Sangram Senani Swargiya Ram Singh Bisht Government Polytechnic Dwarahat is named in honor of revered freedom fighter Ram Singh Bisht. Operating under the Directorate of Technical Education, Government of Uttarakhand, and approved by AICTE, it offers diploma engineering in Computer Science and Electronics disciplines.",
    fees: "₹8,000/Yr",
    exams: "UBTER JEEP",
    affiliation: "Uttarakhand Board of Technical Education, Roorkee (UBTER) / AICTE",
    courses: [
      {
        title: "Diploma in Computer Science & Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "10th High School Pass / UBTER JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "Diploma in Electronics Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "10th High School Pass / UBTER JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ]
  },
  2190: {
    name: "Ramanand Institute of Pharmacy and Management, Haridwar",
    shortName: "RIPM Haridwar",
    city: "Haridwar",
    location: "Haridwar",
    state: "Uttarakhand",
    address: "NH-58, Haridwar-Roorkee Highway, Jwalapur, Haridwar, Uttarakhand - 249407",
    phone: "+91-1334-232100",
    website: "http://www.ripmharidwar.com",
    rating: 4.1,
    type: "Private",
    ownership: "Private",
    about: "Ramanand Institute of Pharmacy and Management (RIPM) is a private technical and pharmacy institute located on the Haridwar-Roorkee highway at Jwalapur, Haridwar. Approved by AICTE and Pharmacy Council of India (PCI) and affiliated to VMSB UTU and UBTER, RIPM provides degree and diploma courses in pharmacy and management.",
    fees: "₹75,000/Yr",
    exams: "UBTER JEEP / JEE Main / Merit",
    affiliation: "VMSB Uttarakhand Technical University (UTU) / UBTER / PCI / AICTE",
    courses: [
      {
        title: "Bachelor of Pharmacy (B.Pharm)",
        duration: "4 Years",
        fees: "₹75,000/Yr",
        eligibility: "10+2 with Physics, Chemistry & Biology/Math",
        type: "PHARMACY",
        intake: 60
      },
      {
        title: "Diploma in Pharmacy (D.Pharm)",
        duration: "2 Years",
        fees: "₹45,000/Yr",
        eligibility: "10+2 with Physics, Chemistry & Biology/Math",
        type: "PHARMACY",
        intake: 60
      },
      {
        title: "Master of Business Administration (MBA)",
        duration: "2 Years",
        fees: "₹65,000/Yr",
        eligibility: "Graduation with min 50% + CAT/MAT/CMAT",
        type: "MANAGEMENT",
        intake: 60
      }
    ]
  },
  2191: {
    name: "College of Agribusiness Management (CABM), GBPUAT Pantnagar",
    shortName: "CABM Pantnagar",
    city: "Pantnagar",
    location: "Pantnagar",
    state: "Uttarakhand",
    address: "GBPUAT Campus, Pantnagar, District Udham Singh Nagar, Uttarakhand - 263145",
    phone: "+91-5944-233884",
    website: "https://www.cabm.ac.in",
    rating: 4.6,
    type: "Public/Government (Constituent College of State Agricultural University)",
    ownership: "Public/Government",
    about: "College of Agribusiness Management (CABM) is a premier constituent college of Govind Ballabh Pant University of Agriculture and Technology (GBPUAT), the first agricultural university in India (inaugurated by Jawaharlal Nehru in 1960). Established in 1996 with AICTE approval, CABM is nationally renowned for its pioneer MBA in Agribusiness and Food Business Management programs.",
    fees: "₹1,50,000/Yr",
    exams: "CAT / CMAT / GBPUAT Entrance",
    affiliation: "Constituent College of GBPUAT Pantnagar / AICTE",
    courses: [
      {
        title: "MBA in Agribusiness",
        duration: "2 Years",
        fees: "₹1,50,000/Yr",
        eligibility: "Bachelor's in Agriculture / Allied Science / Engineering with 55% + CAT/CMAT",
        type: "MANAGEMENT",
        intake: 40
      },
      {
        title: "MBA in Food Business Management",
        duration: "2 Years",
        fees: "₹1,50,000/Yr",
        eligibility: "Graduation in any discipline with min 50% + CAT/CMAT",
        type: "MANAGEMENT",
        intake: 30
      }
    ]
  },
  2192: {
    name: "Shivalik College of Engineering, Dehradun",
    shortName: "SCE Dehradun",
    city: "Dehradun",
    location: "Dehradun",
    state: "Uttarakhand",
    address: "Shimla Bypass Road, Shiniwala, PO Sherpur, Dehradun, Uttarakhand - 248197",
    phone: "+91-9997155111",
    website: "https://shivalikcollege.edu.in",
    rating: 4.4,
    type: "Private",
    ownership: "Private",
    about: "Shivalik College of Engineering (SCE Dehradun), operated by the Shivalik Group of Institutions, is a premier private engineering college on Shimla Bypass Road in Dehradun. Accredited with NAAC 'A+' Grade and affiliated to VMSB Uttarakhand Technical University, SCE offers world-class computing, robotics, and engineering degree programs with stellar industry placements.",
    fees: "₹1,15,000/Yr",
    exams: "JEE Main / CUET / Merit",
    affiliation: "Veer Madho Singh Bhandari Uttarakhand Technical University (UTU) / NAAC A+",
    courses: [
      {
        title: "B.Tech in Computer Science & Engineering",
        duration: "4 Years",
        fees: "₹1,15,000/Yr",
        eligibility: "10+2 with Physics, Mathematics & Chemistry + JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 180
      },
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹95,000/Yr",
        eligibility: "10+2 with Physics, Mathematics & Chemistry + JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹95,000/Yr",
        eligibility: "10+2 with Physics, Mathematics & Chemistry + JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹65,000/Yr",
        eligibility: "10+2 Intermediate Pass",
        type: "MANAGEMENT",
        intake: 60
      }
    ]
  },
  2193: {
    name: "GET Group of Institutions - Faculty of Technology",
    shortName: "GET Group Roorkee",
    city: "Haridwar",
    location: "Haridwar",
    state: "Uttarakhand",
    address: "7th Km Stone, Roorkee-Dehradun Highway, NH-58, Saliyar, Roorkee, Haridwar - 247667",
    phone: "+91-1332-234000",
    website: "http://getgroup.edu.in",
    rating: 4.1,
    type: "Private",
    ownership: "Private",
    about: "GET Group of Institutions - Faculty of Technology is a private technical polytechnic institution located on the Roorkee-Dehradun Highway. Approved by AICTE and affiliated to UBTER Roorkee, it imparts 3-year diploma engineering programs in civil, mechanical, and electrical branches.",
    fees: "₹35,000/Yr",
    exams: "UBTER JEEP / Merit",
    affiliation: "Uttarakhand Board of Technical Education, Roorkee (UBTER) / AICTE",
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
      }
    ]
  },
  2194: {
    name: "Shakambhari Institute of Higher Education & Technology",
    shortName: "SIHET Roorkee",
    city: "Haridwar",
    location: "Haridwar",
    state: "Uttarakhand",
    address: "Roorkee-Laksar Road, Puhana, Roorkee, Haridwar, Uttarakhand - 247667",
    phone: "+91-1332-261200",
    website: "http://shakambhariinstitute.com",
    rating: 4.1,
    type: "Private",
    ownership: "Private",
    about: "Shakambhari Institute of Higher Education & Technology (SIHET) is an established private technical and professional college in Roorkee. Approved by AICTE and affiliated to UBTER Roorkee and Sri Dev Suman Uttarakhand University, SIHET provides polytechnic diploma courses and bachelor degree programs.",
    fees: "₹35,000/Yr",
    exams: "UBTER JEEP / Merit",
    affiliation: "Sri Dev Suman Uttarakhand University / UBTER / AICTE",
    courses: [
      {
        title: "Diploma in Civil Engineering",
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
      }
    ]
  },
  2195: {
    name: "Government Polytechnic, Chaunaliya",
    shortName: "GP Chaunaliya",
    city: "Almora",
    location: "Almora",
    state: "Uttarakhand",
    address: "Chaunaliya, Bhikiyasain, District Almora, Uttarakhand - 263680",
    phone: "+91-5966-267010",
    website: "http://ukdte.org",
    rating: 4.1,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Government Polytechnic Chaunaliya is a state government polytechnic institute located in Bhikiyasain tehsil of Almora district, Uttarakhand. Operating under the Directorate of Technical Education, Government of Uttarakhand, and approved by AICTE, it offers diploma in Modern Office Management and Secretarial Practices.",
    fees: "₹8,000/Yr",
    exams: "UBTER JEEP",
    affiliation: "Uttarakhand Board of Technical Education, Roorkee (UBTER) / AICTE",
    courses: [
      {
        title: "Diploma in Modern Office Management and Secretarial Practice",
        duration: "2 Years",
        fees: "₹8,000/Yr",
        eligibility: "10+2 Intermediate Pass / UBTER JEEP",
        type: "MANAGEMENT",
        intake: 40
      }
    ]
  },
  2196: {
    name: "Government Polytechnic, Pantnagar",
    shortName: "GP Pantnagar",
    city: "Udham Singh Nagar",
    location: "Udham Singh Nagar",
    state: "Uttarakhand",
    address: "UIRD Old Campus, Near Pantnagar / Rudrapur, District Udham Singh Nagar, Uttarakhand - 263153",
    phone: "+91-5944-245010",
    website: "http://ukdte.org",
    rating: 4.2,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Government Polytechnic Pantnagar is a state government polytechnic institute located in the industrial and agricultural heartland of Udham Singh Nagar district. Operating under the Directorate of Technical Education, Government of Uttarakhand, and approved by AICTE, it offers diploma engineering in Electronics and Computer Science.",
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
      },
      {
        title: "Diploma in Computer Science & Engineering",
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

progress.verifiedColleges = 2200;
progress.batchesCompleted = 220;
progress.last_batch_completed = 220;
progress.currentBatch = 220;
progress.completionPercentage = "22.00%";
progress.lastUpdated = new Date().toISOString();

if (!progress.batches) {
  progress.batches = {};
}

progress.batches["220"] = {
  status: "verified",
  verifiedCount: 10,
  range: "2191-2200",
  ids: batchIds,
  verifiedAt: new Date().toISOString()
};

if (!progress.batchHistory) {
  progress.batchHistory = [];
}
progress.batchHistory.push({
  batch: 220,
  verifiedCount: 10,
  totalVerified: 2200,
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
const batch220Entries = batchIds.map((id, i) => {
  const c = batchUpdates[id];
  return `| ${2190 + i + 1} | ${c.name} | ${c.location} | ${c.state} | ${c.type} | [Portal](${c.website}) |`;
}).join('\n');

if (!mdContent.includes(batchUpdates[2187].name)) {
  mdContent += `\n\n### Batch 220 (Colleges 2,191–2,200)\n\n| # | College Name | City | State | Type | Website |\n|---|---|---|---|---|---|\n${batch220Entries}\n`;
  fs.writeFileSync(allVerifiedMdPath, mdContent, 'utf8');
}

console.log('Batch 220 verification successfully applied!');

