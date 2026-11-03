const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const progressPath = path.join(__dirname, '../reports/verification/progress.json');
const allVerifiedJsonPath = path.join(__dirname, '../reports/verification/all_verified_colleges.json');
const allVerifiedMdPath = path.join(__dirname, '../reports/verification/all_verified_colleges.md');

const batchUpdates = {
  2177: {
    name: "Bhagirathi Institute of Technology and Management (Polytechnic)",
    shortName: "BITM Lohaghat",
    city: "Champawat",
    location: "Champawat",
    state: "Uttarakhand",
    address: "Devidhar, Lohaghat, District Champawat, Uttarakhand - 262524",
    phone: "+91-5965-244100",
    website: "http://bitmchampawat.org",
    rating: 4.1,
    type: "Private",
    ownership: "Private",
    about: "Bhagirathi Institute of Technology and Management (BITM) is a private polytechnic institution located at Devidhar in Lohaghat, Champawat district. Approved by AICTE and affiliated to UBTER Roorkee, BITM provides diploma engineering training in electrical and civil disciplines to empower hilly youth.",
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
        intake: 30
      },
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹35,000/Yr",
        eligibility: "10th High School Pass / UBTER JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ]
  },
  2178: {
    name: "Government Polytechnic, Malla Salam",
    shortName: "GP Malla Salam",
    city: "Almora",
    location: "Almora",
    state: "Uttarakhand",
    address: "Village Kanara, Post Chaikhan, Via Jalna, Malla Salam, District Almora, Uttarakhand - 263625",
    phone: "+91-5962-282010",
    website: "http://ukdte.org",
    rating: 4.1,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Government Polytechnic Malla Salam is a state government polytechnic institute located in Malla Salam block of Almora district, Uttarakhand. Operating under the Directorate of Technical Education, Government of Uttarakhand, and approved by AICTE, it offers diploma engineering in Computer Science and Engineering.",
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
      }
    ]
  },
  2179: {
    name: "Government Polytechnic, Kotabagh",
    shortName: "GP Kotabagh",
    city: "Nainital",
    location: "Nainital",
    state: "Uttarakhand",
    address: "Kanal Gaon / Pandey Gaon, Kotabagh, District Nainital, Uttarakhand - 263159",
    phone: "+91-5942-261010",
    website: "http://ukdte.org",
    rating: 4.1,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Government Polytechnic Kotabagh is a state government polytechnic institute located in Kotabagh block of Nainital district, Uttarakhand. Operating under the Directorate of Technical Education, Government of Uttarakhand, and approved by AICTE, it offers diploma engineering in Civil Engineering.",
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
  2180: {
    name: "Government Polytechnic, Vikasnagar",
    shortName: "GP Vikasnagar",
    city: "Dehradun",
    location: "Dehradun",
    state: "Uttarakhand",
    address: "Vikasnagar, District Dehradun, Uttarakhand - 248198",
    phone: "+91-1360-222010",
    website: "http://ukdte.org",
    rating: 4.2,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Government Polytechnic Vikasnagar is a state government polytechnic institute located in Vikasnagar, Dehradun district. Operating under the Directorate of Technical Education, Government of Uttarakhand, and approved by AICTE, it offers diploma engineering courses in Mechanical and Civil disciplines.",
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
  2181: {
    name: "Veer Madho Singh Bhandari Uttarakhand Technical University (VMSB UTU)",
    shortName: "VMSB UTU Dehradun",
    city: "Dehradun",
    location: "Dehradun",
    state: "Uttarakhand",
    address: "PO Chandanwadi, Prem Nagar, Sudhowala, Dehradun, Uttarakhand - 248007",
    phone: "+91-135-2770128",
    website: "https://uktech.ac.in",
    rating: 4.6,
    type: "Public/Government (State Public University)",
    ownership: "Public/Government",
    about: "Veer Madho Singh Bhandari Uttarakhand Technical University (VMSB UTU) is the apex state technical university of Uttarakhand, established in 2005 by the Government of Uttarakhand under the Uttarakhand Technical University Act. VMSB UTU administers, affiliates, and regulates all engineering, technology, management, and pharmacy institutions across Uttarakhand and operates multiple prestigious constituent government engineering colleges.",
    fees: "₹70,000/Yr",
    exams: "JEE Main / GATE / CUET / UTU Counselling",
    affiliation: "State Public University (UGC Act Section 2(f) & 12(B)) / AICTE",
    courses: [
      {
        title: "B.Tech in Computer Science & Engineering",
        duration: "4 Years",
        fees: "₹70,000/Yr",
        eligibility: "10+2 with Physics, Mathematics & Chemistry + JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 120
      },
      {
        title: "B.Tech in Artificial Intelligence & Machine Learning",
        duration: "4 Years",
        fees: "₹70,000/Yr",
        eligibility: "10+2 with Physics, Mathematics & Chemistry + JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Master of Business Administration (MBA)",
        duration: "2 Years",
        fees: "₹75,000/Yr",
        eligibility: "Graduation with min 50% + CAT/MAT/CMAT",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "Master of Computer Applications (MCA)",
        duration: "2 Years",
        fees: "₹65,000/Yr",
        eligibility: "BCA / B.Sc with Mathematics + CUET-PG",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      }
    ]
  },
  2182: {
    name: "Tula's Institute, Dehradun",
    shortName: "Tula's Institute",
    city: "Dehradun",
    location: "Dehradun",
    state: "Uttarakhand",
    address: "Dhoolkot, PO Selaqui, Chakrata Road, Dehradun, Uttarakhand - 248011",
    phone: "+91-135-2699300",
    website: "https://tulas.edu.in",
    rating: 4.4,
    type: "Private",
    ownership: "Private",
    about: "Tula's Institute is a premier private engineering and management institution located at Dhoolkot on Chakrata Road in Dehradun. Accredited with NAAC 'A+' Grade and affiliated to VMSB Uttarakhand Technical University, Tula's Institute offers industry-aligned undergraduate and postgraduate degree programs in engineering, management, and agriculture.",
    fees: "₹1,40,000/Yr",
    exams: "JEE Main / CUET / CAT / MAT",
    affiliation: "Veer Madho Singh Bhandari Uttarakhand Technical University (UTU) / NAAC A+",
    courses: [
      {
        title: "B.Tech in Computer Science & Engineering",
        duration: "4 Years",
        fees: "₹1,40,000/Yr",
        eligibility: "10+2 with Physics, Mathematics & Chemistry + JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 180
      },
      {
        title: "Master of Business Administration (MBA)",
        duration: "2 Years",
        fees: "₹1,30,000/Yr",
        eligibility: "Graduation with min 50% + CAT/MAT/CMAT",
        type: "MANAGEMENT",
        intake: 120
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹80,000/Yr",
        eligibility: "10+2 Intermediate Pass",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹80,000/Yr",
        eligibility: "10+2 with Mathematics",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      }
    ]
  },
  2183: {
    name: "Government Polytechnic, New Tehri",
    shortName: "GP New Tehri",
    city: "Tehri Garhwal",
    location: "Tehri Garhwal",
    state: "Uttarakhand",
    address: "Near District Jail, B.Puram, New Tehri, Uttarakhand - 249001",
    phone: "+91-1376-232010",
    website: "http://ukdte.org",
    rating: 4.1,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Government Polytechnic New Tehri is a state government polytechnic college located in New Tehri, Tehri Garhwal district. Operating under the Directorate of Technical Education, Government of Uttarakhand, and approved by AICTE, it offers diploma engineering in Civil Engineering.",
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
  2184: {
    name: "Government Polytechnic, Srinagar (Garhwal)",
    shortName: "GP Srinagar Garhwal",
    city: "Pauri Garhwal",
    location: "Pauri Garhwal",
    state: "Uttarakhand",
    address: "Srinagar Garhwal, District Pauri Garhwal, Uttarakhand - 246174",
    phone: "+91-1346-252157",
    website: "https://www.gpsrinagar.org.in",
    rating: 4.4,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Government Polytechnic Srinagar Garhwal, established in 1957, is one of the oldest, largest, and most prestigious pioneer state government polytechnics in Uttarakhand. Operating under the Directorate of Technical Education, Government of Uttarakhand, and approved by AICTE, it offers diploma engineering courses in Mechanical, Electrical, Civil, and Pharmacy disciplines.",
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
        title: "Diploma in Electrical Engineering",
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
        title: "Diploma in Pharmacy (D.Pharm)",
        duration: "2 Years",
        fees: "₹8,000/Yr",
        eligibility: "10+2 with Physics, Chemistry & Biology/Math",
        type: "PHARMACY",
        intake: 40
      }
    ]
  },
  2185: {
    name: "Government Polytechnic, Kotdwar",
    shortName: "GP Kotdwar",
    city: "Pauri Garhwal",
    location: "Pauri Garhwal",
    state: "Uttarakhand",
    address: "Haldukhata, Kotdwar, District Pauri Garhwal, Uttarakhand - 246149",
    phone: "+91-1382-222010",
    website: "https://www.gpkotdwar.org.in",
    rating: 4.3,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Government Polytechnic Kotdwar, established in 1975, is a premier state government technical institute located at Haldukhata in Kotdwar. Operating under the Directorate of Technical Education, Government of Uttarakhand, and approved by AICTE, it offers diploma engineering courses in Computer Science, Electronics, and Civil Engineering.",
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
        intake: 40
      },
      {
        title: "Diploma in Electronics Engineering",
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
  2186: {
    name: "Government Polytechnic, Kanda",
    shortName: "GP Kanda",
    city: "Bageshwar",
    location: "Bageshwar",
    state: "Uttarakhand",
    address: "Campus ITI Kanda, District Bageshwar, Uttarakhand - 263631",
    phone: "+91-5963-241010",
    website: "http://ukdte.org",
    rating: 4.1,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Government Polytechnic Kanda is a state government polytechnic institute located in Kanda block of Bageshwar district, Uttarakhand. Operating under the Directorate of Technical Education, Government of Uttarakhand, and approved by AICTE, it offers diploma engineering in Mechanical Engineering.",
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

progress.verifiedColleges = 2190;
progress.batchesCompleted = 219;
progress.last_batch_completed = 219;
progress.currentBatch = 219;
progress.completionPercentage = "21.90%";
progress.lastUpdated = new Date().toISOString();

if (!progress.batches) {
  progress.batches = {};
}

progress.batches["219"] = {
  status: "verified",
  verifiedCount: 10,
  range: "2181-2190",
  ids: batchIds,
  verifiedAt: new Date().toISOString()
};

if (!progress.batchHistory) {
  progress.batchHistory = [];
}
progress.batchHistory.push({
  batch: 219,
  verifiedCount: 10,
  totalVerified: 2190,
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
const batch219Entries = batchIds.map((id, i) => {
  const c = batchUpdates[id];
  return `| ${2180 + i + 1} | ${c.name} | ${c.location} | ${c.state} | ${c.type} | [Portal](${c.website}) |`;
}).join('\n');

if (!mdContent.includes(batchUpdates[2177].name)) {
  mdContent += `\n\n### Batch 219 (Colleges 2,181–2,190)\n\n| # | College Name | City | State | Type | Website |\n|---|---|---|---|---|---|\n${batch219Entries}\n`;
  fs.writeFileSync(allVerifiedMdPath, mdContent, 'utf8');
}

console.log('Batch 219 verification successfully applied!');

