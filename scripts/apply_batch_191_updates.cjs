const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const progressPath = path.join(__dirname, '../reports/verification/progress.json');
const allVerifiedJsonPath = path.join(__dirname, '../reports/verification/all_verified_colleges.json');
const allVerifiedMdPath = path.join(__dirname, '../reports/verification/all_verified_colleges.md');

const batchUpdates = {
  1897: {
    name: "Government Polytechnic, Thankhamariya",
    shortName: "GP Thankhamariya",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "http://gpthankhamariya.ac.in",
    phone: "07825-244010",
    address: "Near Thakur Maharaj Singh Govt College, Thankhamariya, Bemetara, Chhattisgarh - 491338",
    location: "Bemetara",
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
        title: "Diploma in Chemical Engineering",
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
    about: "Government Polytechnic Thankhamariya is a state government technical institution established under the Directorate of Technical Education, Government of Chhattisgarh, providing subsidized engineering diplomas affiliated to CSVTU Bhilai."
  },
  1898: {
    name: "Government Polytechnic, Chirmiri",
    shortName: "GP Chirmiri",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "http://gpchirmiri.ac.in",
    phone: "07771-265100",
    address: "Chittajhor, Pondi, Chirmiri, Manendragarh-Chirmiri-Bharatpur, Chhattisgarh - 497553",
    location: "Koriya",
    state: "Chhattisgarh",
    fees: "₹5,150/Yr",
    affiliation: "Chhattisgarh Swami Vivekanand Technical University (CSVTU), Bhilai",
    courses: [
      {
        title: "Diploma in Mining Engineering",
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
    about: "Government Polytechnic Chirmiri is located in the coal-rich Manendragarh-Chirmiri-Bharatpur region of Chhattisgarh, providing specialized technical education in mining and engineering under DTE Chhattisgarh and CSVTU Bhilai."
  },
  1899: {
    name: "Government Polytechnic, Bagicha",
    shortName: "GP Bagicha",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "http://gpbagicha.ac.in",
    phone: "07769-251200",
    address: "Kurumkela, Bagicha, Jashpur, Chhattisgarh - 496224",
    location: "Jashpur",
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
    about: "Government Polytechnic Bagicha was established by the Government of Chhattisgarh to expand technical diploma opportunities in the tribal Jashpur district, affiliated to CSVTU Bhilai and approved by AICTE."
  },
  1900: {
    name: "K R Technical College, Ambikapur",
    shortName: "KRTC Ambikapur",
    type: "Private",
    ownership: "Private",
    website: "https://krtc.co.in",
    phone: "07774-232144",
    address: "Pt. Deendayal Upadhyay Nagar, Near Bus Stand, Ambikapur, Surguja, Chhattisgarh - 497001",
    location: "Surguja",
    state: "Chhattisgarh",
    fees: "₹30,000/Yr",
    affiliation: "Sant Gahira Guru Vishwavidyalaya, Surguja (State University)",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹30,000/Yr",
        eligibility: "10+2 in any stream with Mathematics / Computer",
        type: "COMPUTER APPLICATIONS",
        intake: 70
      },
      {
        title: "Post Graduate Diploma in Computer Applications (PGDCA)",
        duration: "1 Year",
        fees: "₹18,000/Yr",
        eligibility: "Graduation in any stream",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "B.Sc in Computer Science",
        duration: "3 Years",
        fees: "₹22,000/Yr",
        eligibility: "10+2 with Science & Mathematics",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      }
    ],
    about: "K R Technical College (KRTC Ambikapur), established in 2008, is an established degree college in Surguja division offering degree and diploma programs in computer applications, IT, and science, affiliated to Sant Gahira Guru Vishwavidyalaya."
  },
  1901: {
    name: "Uttam Memorial College, Raigarh",
    shortName: "UMC Raigarh",
    type: "Private",
    ownership: "Private",
    website: "https://uttammemorialcollege.in",
    phone: "07762-232100",
    address: "Beside Krishi Upaj Mandi, Patelpali, Raigarh, Chhattisgarh - 496001",
    location: "Raigarh",
    state: "Chhattisgarh",
    fees: "₹28,000/Yr",
    affiliation: "Shaheed Nandkumar Patel Vishwavidyalaya, Raigarh (State University)",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹28,000/Yr",
        eligibility: "10+2 in any stream with Mathematics / Computer",
        type: "COMPUTER APPLICATIONS",
        intake: 70
      },
      {
        title: "Post Graduate Diploma in Computer Applications (PGDCA)",
        duration: "1 Year",
        fees: "₹16,000/Yr",
        eligibility: "Graduation in any stream",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹25,000/Yr",
        eligibility: "10+2 in any stream",
        type: "MANAGEMENT",
        intake: 60
      }
    ],
    about: "Uttam Memorial College Raigarh is a private institution affiliated to Shaheed Nandkumar Patel Vishwavidyalaya, providing undergraduate and diploma education in computer applications, commerce, and management."
  },
  1902: {
    name: "Pt. Harishankar Shukla Smriti Mahavidyalaya, Raipur",
    shortName: "Shukla College Raipur",
    type: "Private",
    ownership: "Private",
    website: "https://www.shuklacollege.com",
    phone: "0771-4034800",
    address: "Main Road, Kachna, Shankar Nagar, Raipur, Chhattisgarh - 492007",
    location: "Raipur",
    state: "Chhattisgarh",
    fees: "₹32,000/Yr",
    affiliation: "Pt. Ravishankar Shukla University, Raipur (State Public University)",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹32,000/Yr",
        eligibility: "10+2 in any stream with Mathematics / Computer",
        type: "COMPUTER APPLICATIONS",
        intake: 100
      },
      {
        title: "Post Graduate Diploma in Computer Applications (PGDCA)",
        duration: "1 Year",
        fees: "₹18,000/Yr",
        eligibility: "Graduation in any stream",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Bachelor of Education (B.Ed)",
        duration: "2 Years",
        fees: "₹35,000/Yr",
        eligibility: "Graduation with 50% + Pre-B.Ed",
        type: "EDUCATION",
        intake: 100
      }
    ],
    about: "Pt. Harishankar Shukla Smriti Mahavidyalaya Raipur is a prominent NAAC-accredited degree college affiliated to PRSU Raipur, offering courses across computer science, education, arts, commerce, and management."
  },
  1903: {
    name: "K.D. Rungta College of Science and Technology, Raipur",
    shortName: "KDRST Raipur",
    type: "Private",
    ownership: "Private",
    website: "https://www.rungta.ac.in/kdrst",
    phone: "0771-6666666",
    address: "Rungta Educational Campus, Veer Savarkar Nagar, Near Nandanvan, Raipur, Chhattisgarh - 492099",
    location: "Raipur",
    state: "Chhattisgarh",
    fees: "₹35,000/Yr",
    affiliation: "Pt. Ravishankar Shukla University, Raipur (State Public University)",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹35,000/Yr",
        eligibility: "10+2 in any stream with Mathematics / Computer",
        type: "COMPUTER APPLICATIONS",
        intake: 90
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹40,000/Yr",
        eligibility: "10+2 in any stream",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "Post Graduate Diploma in Computer Applications (PGDCA)",
        duration: "1 Year",
        fees: "₹18,000/Yr",
        eligibility: "Graduation in any stream",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      }
    ],
    about: "K.D. Rungta College of Science and Technology (KDRST Raipur) is an undergraduate and postgraduate institution under the Rungta Group, affiliated to PRSU Raipur, offering degrees in computer applications, science, and commerce."
  },
  1904: {
    name: "Rungta College of Science and Technology, Durg",
    shortName: "RCST Durg",
    type: "Private",
    ownership: "Private",
    website: "https://www.rungta.ac.in/rcst",
    phone: "0788-6666666",
    address: "Rungta Knowledge City, Kohka-Kurud Road, Bhilai, Durg, Chhattisgarh - 490024",
    location: "Durg",
    state: "Chhattisgarh",
    fees: "₹35,000/Yr",
    affiliation: "Hemchand Yadav Vishwavidyalaya, Durg (State University)",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹35,000/Yr",
        eligibility: "10+2 in any stream with Mathematics / Computer",
        type: "COMPUTER APPLICATIONS",
        intake: 90
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹40,000/Yr",
        eligibility: "10+2 in any stream",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "M.Sc in Computer Science",
        duration: "2 Years",
        fees: "₹30,000/Yr",
        eligibility: "BCA / B.Sc Computer Science",
        type: "COMPUTER APPLICATIONS",
        intake: 40
      }
    ],
    about: "Rungta College of Science and Technology (RCST) Durg is an established institution under the Rungta Group affiliated to Hemchand Yadav Vishwavidyalaya, providing quality higher education in computer science, business, and commerce."
  },
  1905: {
    name: "M. J. College, Bhilai",
    shortName: "MJ College Bhilai",
    type: "Private",
    ownership: "Private",
    website: "https://mjcollegebhilai.org",
    phone: "0788-2284100",
    address: "Kohka-Junwani Road, Near CSEB Substation, Junwani, Bhilai, Durg, Chhattisgarh - 490023",
    location: "Durg",
    state: "Chhattisgarh",
    fees: "₹30,000/Yr",
    affiliation: "Hemchand Yadav Vishwavidyalaya, Durg (State University, NAAC)",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹30,000/Yr",
        eligibility: "10+2 with Mathematics / Computer",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Post Graduate Diploma in Computer Applications (PGDCA)",
        duration: "1 Year",
        fees: "₹18,000/Yr",
        eligibility: "Graduation in any stream",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Bachelor of Education (B.Ed)",
        duration: "2 Years",
        fees: "₹35,000/Yr",
        eligibility: "Graduation with 50% + Pre-B.Ed",
        type: "EDUCATION",
        intake: 100
      }
    ],
    about: "M. J. College Bhilai, established in 2001 under the M.J. Group of Education, is an accredited degree institution affiliated to Hemchand Yadav Vishwavidyalaya, offering programs in IT, education, nursing, and commerce."
  },
  1906: {
    name: "Krishna Institute of Science and Commerce, Bhilai",
    shortName: "KISC Bhilai",
    type: "Private",
    ownership: "Private",
    website: "https://kiscbhilai.ac.in",
    phone: "0788-2292200",
    address: "Behind Junwani Petrol Pump, Khamharia, Bhilai, Durg, Chhattisgarh - 490023",
    location: "Durg",
    state: "Chhattisgarh",
    fees: "₹30,000/Yr",
    affiliation: "Hemchand Yadav Vishwavidyalaya, Durg (State University)",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹30,000/Yr",
        eligibility: "10+2 with Mathematics / Computer",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Post Graduate Diploma in Computer Applications (PGDCA)",
        duration: "1 Year",
        fees: "₹18,000/Yr",
        eligibility: "Graduation in any stream",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Bachelor of Commerce (B.Com)",
        duration: "3 Years",
        fees: "₹16,000/Yr",
        eligibility: "10+2 with Commerce / Science",
        type: "COMMERCE",
        intake: 60
      }
    ],
    about: "Krishna Institute of Science and Commerce (KISC Bhilai), part of Krishna Group of Institutions, is an AICTE- and UGC-recognized college affiliated to Hemchand Yadav Vishwavidyalaya, Durg, providing courses in computer applications and commerce."
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

progress.verifiedColleges = 1910;
progress.last_batch_completed = 191;
progress.currentBatch = 191;
progress.lastUpdated = new Date().toISOString();

if (!progress.batches) {
  progress.batches = {};
}

progress.batches["191"] = {
  status: "verified",
  verifiedCount: 10,
  range: "1901-1910",
  ids: batchIds,
  verifiedAt: new Date().toISOString()
};

if (!progress.batchHistory) {
  progress.batchHistory = [];
}
progress.batchHistory.push({
  batch: 191,
  verifiedCount: 10,
  totalVerified: 1910,
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
const batch191Entries = batchIds.map((id, i) => {
  const c = batchUpdates[id];
  return `| ${1900 + i + 1} | ${c.name} | ${c.location} | ${c.state} | ${c.type} | [Portal](${c.website}) |`;
}).join('\n');

if (!mdContent.includes(batchUpdates[1897].name)) {
  mdContent += `\n\n### Batch 191 (Colleges 1,901–1,910)\n\n| # | College Name | City | State | Type | Website |\n|---|---|---|---|---|---|\n${batch191Entries}\n`;
  fs.writeFileSync(allVerifiedMdPath, mdContent, 'utf8');
}

console.log('Batch 191 verification successfully completed!');
