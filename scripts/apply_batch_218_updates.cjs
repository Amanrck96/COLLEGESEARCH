const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const progressPath = path.join(__dirname, '../reports/verification/progress.json');
const allVerifiedJsonPath = path.join(__dirname, '../reports/verification/all_verified_colleges.json');
const allVerifiedMdPath = path.join(__dirname, '../reports/verification/all_verified_colleges.md');

const batchUpdates = {
  2167: {
    name: "Government Polytechnic, Gopeshwar",
    shortName: "GP Gopeshwar",
    city: "Chamoli",
    location: "Chamoli",
    state: "Uttarakhand",
    address: "Pooled House Colony, Ghingran Road, Gopeshwar, District Chamoli, Uttarakhand - 246401",
    phone: "+91-1372-252210",
    website: "http://ukdte.org",
    rating: 4.2,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Government Polytechnic Gopeshwar is a state government polytechnic institute located in the headquarters town of Chamoli district, Uttarakhand. Operating under the Directorate of Technical Education, Government of Uttarakhand, and approved by AICTE, it offers diploma engineering in Information Technology and Civil Engineering.",
    fees: "₹8,000/Yr",
    exams: "UBTER JEEP",
    affiliation: "Uttarakhand Board of Technical Education, Roorkee (UBTER) / AICTE",
    courses: [
      {
        title: "Diploma in Information Technology",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "10th High School Pass / UBTER JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "10th High School Pass / UBTER JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ]
  },
  2168: {
    name: "Government Polytechnic, Satpuli",
    shortName: "GP Satpuli",
    city: "Pauri Garhwal",
    location: "Pauri Garhwal",
    state: "Uttarakhand",
    address: "Satpuli, District Pauri Garhwal, Uttarakhand - 246172",
    phone: "+91-1386-274010",
    website: "http://ukdte.org",
    rating: 4.1,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Government Polytechnic Satpuli is a state government polytechnic institute situated in Satpuli block of Pauri Garhwal district. Operating under the Directorate of Technical Education, Government of Uttarakhand, and approved by AICTE, it offers diploma engineering in Mechanical Engineering.",
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
  2169: {
    name: "Institute of Technology, Gopeshwar (IT Gopeshwar)",
    shortName: "IT Gopeshwar",
    city: "Chamoli",
    location: "Chamoli",
    state: "Uttarakhand",
    address: "Kothiyalsain, Chamoli, Uttarakhand - 246424",
    phone: "+91-1372-262244",
    website: "https://www.itgopeshwar.ac.in",
    rating: 4.4,
    type: "Public/Government (Constituent College of UTU)",
    ownership: "Public/Government",
    about: "Institute of Technology Gopeshwar (IT Gopeshwar) is a premier state government engineering college and constituent institute of Uttarakhand Technical University (UTU). Established in 2013 by the Government of Uttarakhand at Kothiyalsain in Chamoli, the institute provides top-tier undergraduate engineering education amidst the Himalayan mountains.",
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
      },
      {
        title: "B.Tech in Electrical Engineering",
        duration: "4 Years",
        fees: "₹65,000/Yr",
        eligibility: "10+2 with Physics, Mathematics & Chemistry + JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  2170: {
    name: "Government Polytechnic, Lohaghat",
    shortName: "GP Lohaghat",
    city: "Champawat",
    location: "Champawat",
    state: "Uttarakhand",
    address: "Lohaghat, District Champawat, Uttarakhand - 262524",
    phone: "+91-5965-234210",
    website: "https://gplohaghat.org.in",
    rating: 4.3,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Government Polytechnic Lohaghat, established in 1975, is the premier state government polytechnic institute in Champawat district. Operating under the Directorate of Technical Education, Government of Uttarakhand, and approved by AICTE, it offers diploma engineering in Computer Science, Electronics, and Information Technology.",
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
        title: "Diploma in Information Technology",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "10th High School Pass / UBTER JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 40
      }
    ]
  },
  2171: {
    name: "Government Polytechnic, Ganai Gangoli",
    shortName: "GP Ganai Gangoli",
    city: "Pithoragarh",
    location: "Pithoragarh",
    state: "Uttarakhand",
    address: "Ganai Gangoli, District Pithoragarh, Uttarakhand - 262532",
    phone: "+91-5964-268010",
    website: "http://ukdte.org",
    rating: 4.1,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Government Polytechnic Ganai Gangoli is a state government polytechnic institute located in Ganai Gangoli, Pithoragarh district. Operating under the Directorate of Technical Education, Government of Uttarakhand, and approved by AICTE, it offers diploma engineering in Civil Engineering.",
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
        intake: 30
      }
    ]
  },
  2172: {
    name: "Balwant Singh Mukhiya (BSM) College of Polytechnic",
    shortName: "BSM Polytechnic Roorkee",
    city: "Haridwar",
    location: "Haridwar",
    state: "Uttarakhand",
    address: "Nagla Imarti, Roorkee-Laksar Road, Roorkee, Haridwar, Uttarakhand - 247667",
    phone: "+91-1332-260100",
    website: "http://bsmpolytechnic.com",
    rating: 4.1,
    type: "Private",
    ownership: "Private",
    about: "Balwant Singh Mukhiya (BSM) College of Polytechnic is an established private polytechnic college located on Roorkee-Laksar Road in Roorkee. Approved by AICTE and affiliated to UBTER Roorkee, it provides diploma engineering programs in civil, mechanical, and electrical disciplines.",
    fees: "₹35,000/Yr",
    exams: "UBTER JEEP / Merit",
    affiliation: "Uttarakhand Board of Technical Education, Roorkee (UBTER) / AICTE",
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
      },
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹35,000/Yr",
        eligibility: "10th High School Pass / UBTER JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  2173: {
    name: "Government Polytechnic, Shaktifarm",
    shortName: "GP Shaktifarm",
    city: "Udham Singh Nagar",
    location: "Udham Singh Nagar",
    state: "Uttarakhand",
    address: "Shaktifarm, Sitarganj, District Udham Singh Nagar, Uttarakhand - 263160",
    phone: "+91-5948-251010",
    website: "http://ukdte.org",
    rating: 4.1,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Government Polytechnic Shaktifarm is a state government polytechnic institute located in Shaktifarm, Sitarganj, Udham Singh Nagar district. Operating under the Directorate of Technical Education, Uttarakhand, and approved by AICTE, it offers diploma engineering in Civil and Mechanical disciplines.",
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
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "10th High School Pass / UBTER JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 40
      }
    ]
  },
  2174: {
    name: "Bishamber Sahai Management Institute (BSMI), Roorkee",
    shortName: "BSMI Roorkee",
    city: "Roorkee",
    location: "Roorkee",
    state: "Uttarakhand",
    address: "6th Km Stone, Delhi-Dehradun Highway, NH-58, Saliyar, Roorkee, Haridwar, Uttarakhand - 247667",
    phone: "+91-9837127404",
    website: "https://www.bsgrouproorkee.com",
    rating: 4.1,
    type: "Private",
    ownership: "Private",
    about: "Bishamber Sahai Management Institute (BSMI) is a private management institution in Roorkee under the Bishamber Sahai Group of Institutions. Approved by AICTE and affiliated to Uttarakhand Technical University, BSMI provides professional business administration degree programs.",
    fees: "₹75,000/Yr",
    exams: "CAT / MAT / CMAT / UTU Counselling",
    affiliation: "Uttarakhand Technical University (UTU) / AICTE",
    courses: [
      {
        title: "Master of Business Administration (MBA)",
        duration: "2 Years",
        fees: "₹75,000/Yr",
        eligibility: "Graduation with min 50% + CAT/MAT/CMAT",
        type: "MANAGEMENT",
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
  2175: {
    name: "Dev Bhoomi Institute of Polytechnic, Dehradun",
    shortName: "DBIP Dehradun",
    city: "Dehradun",
    location: "Dehradun",
    state: "Uttarakhand",
    address: "Navgaon, Manduwala, Chakrata Road, Dehradun, Uttarakhand - 248007",
    phone: "+91-135-2694241",
    website: "https://www.dbuu.ac.in",
    rating: 4.2,
    type: "Private",
    ownership: "Private",
    about: "Dev Bhoomi Institute of Polytechnic (now part of Dev Bhoomi Uttarakhand University - DBUU) is a private technical polytechnic institution located on Chakrata Road in Dehradun. Approved by AICTE and affiliated to UBTER, it offers diploma engineering courses across computer science, civil, mechanical, and electrical streams.",
    fees: "₹45,000/Yr",
    exams: "UBTER JEEP / Merit",
    affiliation: "Dev Bhoomi Uttarakhand University (DBUU) / UBTER / AICTE",
    courses: [
      {
        title: "Diploma in Computer Science & Engineering",
        duration: "3 Years",
        fees: "₹45,000/Yr",
        eligibility: "10th High School Pass / UBTER JEEP",
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
      },
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹45,000/Yr",
        eligibility: "10th High School Pass / UBTER JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  2176: {
    name: "College of Advanced Technology, Roorkee",
    shortName: "CAT Roorkee",
    city: "Haridwar",
    location: "Haridwar",
    state: "Uttarakhand",
    address: "Puhana-Iqbalpur Road, Opp. RIT College, Village Nanhera Anantpur, Bhagwanpur, Roorkee, Haridwar - 247661",
    phone: "+91-1332-231122",
    website: "http://catroorkee.org",
    rating: 4.1,
    type: "Private",
    ownership: "Private",
    about: "College of Advanced Technology (CAT Roorkee) is a private polytechnic institution located near Bhagwanpur, Roorkee. Approved by AICTE and affiliated to UBTER Roorkee, CAT offers 3-year diploma engineering education in civil, mechanical, and electrical engineering branches.",
    fees: "₹35,000/Yr",
    exams: "UBTER JEEP / Merit",
    affiliation: "Uttarakhand Board of Technical Education, Roorkee (UBTER) / AICTE",
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
      },
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹35,000/Yr",
        eligibility: "10th High School Pass / UBTER JEEP",
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

progress.verifiedColleges = 2180;
progress.batchesCompleted = 218;
progress.last_batch_completed = 218;
progress.currentBatch = 218;
progress.completionPercentage = "21.80%";
progress.lastUpdated = new Date().toISOString();

if (!progress.batches) {
  progress.batches = {};
}

progress.batches["218"] = {
  status: "verified",
  verifiedCount: 10,
  range: "2171-2180",
  ids: batchIds,
  verifiedAt: new Date().toISOString()
};

if (!progress.batchHistory) {
  progress.batchHistory = [];
}
progress.batchHistory.push({
  batch: 218,
  verifiedCount: 10,
  totalVerified: 2180,
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
const batch218Entries = batchIds.map((id, i) => {
  const c = batchUpdates[id];
  return `| ${2170 + i + 1} | ${c.name} | ${c.location} | ${c.state} | ${c.type} | [Portal](${c.website}) |`;
}).join('\n');

if (!mdContent.includes(batchUpdates[2167].name)) {
  mdContent += `\n\n### Batch 218 (Colleges 2,171–2,180)\n\n| # | College Name | City | State | Type | Website |\n|---|---|---|---|---|---|\n${batch218Entries}\n`;
  fs.writeFileSync(allVerifiedMdPath, mdContent, 'utf8');
}

console.log('Batch 218 verification successfully applied!');

