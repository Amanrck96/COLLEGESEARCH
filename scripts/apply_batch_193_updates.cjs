const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const progressPath = path.join(__dirname, '../reports/verification/progress.json');
const allVerifiedJsonPath = path.join(__dirname, '../reports/verification/all_verified_colleges.json');
const allVerifiedMdPath = path.join(__dirname, '../reports/verification/all_verified_colleges.md');

const batchUpdates = {
  1917: {
    name: "Bhilai Nair Samajam College, Bhilai",
    shortName: "BNS College Bhilai",
    type: "Private",
    ownership: "Private",
    website: "https://bnscollege.com",
    phone: "0788-2262400",
    address: "Street 7, Sector 8, Bhilai Nagar, Durg, Chhattisgarh - 490006",
    location: "Durg",
    state: "Chhattisgarh",
    fees: "₹25,000/Yr",
    affiliation: "Hemchand Yadav Vishwavidyalaya, Durg (State University)",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹25,000/Yr",
        eligibility: "10+2 with Mathematics / Computer",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Post Graduate Diploma in Computer Applications (PGDCA)",
        duration: "1 Year",
        fees: "₹15,000/Yr",
        eligibility: "Graduation in any stream",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Bachelor of Commerce (B.Com)",
        duration: "3 Years",
        fees: "₹15,000/Yr",
        eligibility: "10+2 with Commerce / Science",
        type: "COMMERCE",
        intake: 120
      }
    ],
    about: "Bhilai Nair Samajam College (BNS College) Bhilai, managed by the Bhilai Nair Samajam, is an affiliated degree college under Hemchand Yadav Vishwavidyalaya, Durg, providing courses in computer applications, commerce, and science."
  },
  1918: {
    name: "St. Vincent Pallotti College, Raipur",
    shortName: "Pallotti College Raipur",
    type: "Private",
    ownership: "Private",
    website: "https://pallotticollege.com",
    phone: "0771-2283334",
    address: "Lodhi Para, Kapa, Raipur, Chhattisgarh - 492005",
    location: "Raipur",
    state: "Chhattisgarh",
    fees: "₹35,000/Yr",
    affiliation: "Pt. Ravishankar Shukla University, Raipur (NAAC Accredited)",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹35,000/Yr",
        eligibility: "10+2 with Mathematics / Computer",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹38,000/Yr",
        eligibility: "10+2 in any stream",
        type: "MANAGEMENT",
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
    about: "St. Vincent Pallotti College Raipur, established in 1995 by the Pallottine Fathers, is a NAAC-accredited minority educational institution affiliated to Pt. Ravishankar Shukla University, offering education in IT, business, and pedagogy."
  },
  1919: {
    name: "Govt. Dr. Waman Wasudev Patankar Girls' PG College, Durg",
    shortName: "Govt Girls PG College Durg",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://www.govtgirlspgcollegedurg.com",
    phone: "0788-2323773",
    address: "Beside Kendriya Vidyalaya, Jail Road, Durg, Chhattisgarh - 491001",
    location: "Durg",
    state: "Chhattisgarh",
    fees: "₹1,850/Yr",
    affiliation: "Hemchand Yadav Vishwavidyalaya, Durg (Autonomous NAAC 'A' Grade)",
    courses: [
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹5,500/Yr",
        eligibility: "10+2 in any stream + Merit",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹5,500/Yr",
        eligibility: "10+2 with Mathematics / Computer",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Bachelor of Science (B.Sc)",
        duration: "3 Years",
        fees: "₹1,850/Yr",
        eligibility: "10+2 with Science stream",
        type: "SCIENCE",
        intake: 300
      },
      {
        title: "Post Graduate Diploma in Computer Applications (PGDCA)",
        duration: "1 Year",
        fees: "₹3,500/Yr",
        eligibility: "Graduation in any stream",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      }
    ],
    about: "Government Dr. Waman Wasudev Patankar Girls' PG College Durg, established in 1982, is an autonomous premier women's postgraduate institution accredited with NAAC 'A' Grade, affiliated to Hemchand Yadav Vishwavidyalaya, Durg."
  },
  1920: {
    name: "RITEE College of Management, Raipur",
    shortName: "RITEE Management",
    type: "Private",
    ownership: "Private",
    website: "https://ritee.ac.in/management",
    phone: "0771-3208888",
    address: "Dumartalab, Near Kaanger Valley Academy, Behind PRSU Gymnasium, Raipur, Chhattisgarh - 492010",
    location: "Raipur",
    state: "Chhattisgarh",
    fees: "₹38,000/Yr",
    affiliation: "Pt. Ravishankar Shukla University, Raipur (State Public University)",
    courses: [
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹38,000/Yr",
        eligibility: "10+2 in any stream",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹35,000/Yr",
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
      }
    ],
    about: "RITEE College of Management Raipur, part of the RITEE Group under Mahanadi Education Society, offers undergraduate programs in business administration and computer science affiliated to PRSU Raipur."
  },
  1921: {
    name: "Sant Shiromani Guru Ghasidas College, Pamgarh",
    shortName: "SSGG College Pamgarh",
    type: "Private",
    ownership: "Private",
    website: "https://ssggcollege.in",
    phone: "07818-242200",
    address: "Main Road, Pamgarh, District Janjgir-Champa, Chhattisgarh - 495554",
    location: "Janjgir-Champa",
    state: "Chhattisgarh",
    fees: "₹25,000/Yr",
    affiliation: "Shaheed Nandkumar Patel Vishwavidyalaya, Raigarh (State University)",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹25,000/Yr",
        eligibility: "10+2 with Mathematics / Computer",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Post Graduate Diploma in Computer Applications (PGDCA)",
        duration: "1 Year",
        fees: "₹15,000/Yr",
        eligibility: "Graduation in any stream",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Bachelor of Commerce (B.Com)",
        duration: "3 Years",
        fees: "₹14,000/Yr",
        eligibility: "10+2 with Commerce / Science",
        type: "COMMERCE",
        intake: 120
      }
    ],
    about: "Sant Shiromani Guru Ghasidas College Pamgarh is an established private degree college in Janjgir-Champa district, offering undergraduate courses in IT, commerce, and humanities affiliated to Shaheed Nandkumar Patel Vishwavidyalaya."
  },
  1922: {
    name: "Kalyan Post Graduate College, Bhilai Nagar",
    shortName: "Kalyan PG College Bhilai",
    type: "Private",
    ownership: "Private",
    website: "https://kalyanpgcollege.org",
    phone: "0788-2224773",
    address: "Sector 7, Bhilai Nagar, Durg, Chhattisgarh - 490006",
    location: "Durg",
    state: "Chhattisgarh",
    fees: "₹25,000/Yr",
    affiliation: "Hemchand Yadav Vishwavidyalaya, Durg (Autonomous NAAC 'A')",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹25,000/Yr",
        eligibility: "10+2 with Mathematics / Computer",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹28,000/Yr",
        eligibility: "10+2 in any stream",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "Post Graduate Diploma in Computer Applications (PGDCA)",
        duration: "1 Year",
        fees: "₹15,000/Yr",
        eligibility: "Graduation in any stream",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      }
    ],
    about: "Kalyan Post Graduate College Bhilai Nagar, founded in 1963 by the Chhattisgarh Kalyan Samiti, is an autonomous NAAC 'A' accredited institution affiliated to Hemchand Yadav Vishwavidyalaya, known for academic excellence in higher education."
  },
  1923: {
    name: "Durga Mahavidyalaya, Raipur",
    shortName: "Durga College Raipur",
    type: "Private",
    ownership: "Private",
    website: "https://durgacollege.in",
    phone: "0771-4043100",
    address: "K.K. Road, Moudhapara, Raipur, Chhattisgarh - 492001",
    location: "Raipur",
    state: "Chhattisgarh",
    fees: "₹26,000/Yr",
    affiliation: "Pt. Ravishankar Shukla University, Raipur (NAAC Accredited)",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹26,000/Yr",
        eligibility: "10+2 with Mathematics / Computer",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹28,000/Yr",
        eligibility: "10+2 in any stream",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "Post Graduate Diploma in Computer Applications (PGDCA)",
        duration: "1 Year",
        fees: "₹16,000/Yr",
        eligibility: "Graduation in any stream",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      }
    ],
    about: "Durga Mahavidyalaya Raipur, established in 1951, is the oldest higher education college established in post-independence Raipur. Managed by the Durga Education Society and affiliated to PRSU Raipur, it has a rich historic legacy."
  },
  1924: {
    name: "Swami Shri Swaroopanand Saraswati Mahavidyalaya, Bhilai",
    shortName: "SSSSMV Bhilai",
    type: "Private",
    ownership: "Private",
    website: "https://ssssmv.ac.in",
    phone: "0788-2291888",
    address: "Amdi Nagar, HUDCO, Sector 10, Bhilai, Durg, Chhattisgarh - 490009",
    location: "Durg",
    state: "Chhattisgarh",
    fees: "₹30,000/Yr",
    affiliation: "Hemchand Yadav Vishwavidyalaya, Durg (NAAC Accredited)",
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
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹32,000/Yr",
        eligibility: "10+2 in any stream",
        type: "MANAGEMENT",
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
    about: "Swami Shri Swaroopanand Saraswati Mahavidyalaya (SSSSMV Bhilai), established in 1999 under Ganga Jyoti Education Society at HUDCO, Bhilai, is a NAAC-accredited institution affiliated to Hemchand Yadav Vishwavidyalaya."
  },
  1925: {
    name: "Babu Chhotelal Shrivastava Government P.G. College, Dhamtari",
    shortName: "BCS Govt PG College",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://www.pgcollegedhamtari.com",
    phone: "07722-237933",
    address: "Rudri Road, Jodjapur Ward, Dhamtari, Chhattisgarh - 493773",
    location: "Dhamtari",
    state: "Chhattisgarh",
    fees: "₹1,850/Yr",
    affiliation: "Pt. Ravishankar Shukla University, Raipur (Autonomous NAAC 'B++')",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹5,500/Yr",
        eligibility: "10+2 with Mathematics / Computer",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Bachelor of Science (B.Sc)",
        duration: "3 Years",
        fees: "₹1,850/Yr",
        eligibility: "10+2 with Science stream",
        type: "SCIENCE",
        intake: 300
      },
      {
        title: "Bachelor of Commerce (B.Com)",
        duration: "3 Years",
        fees: "₹1,850/Yr",
        eligibility: "10+2 with Commerce / Mathematics",
        type: "COMMERCE",
        intake: 240
      },
      {
        title: "Post Graduate Diploma in Computer Applications (PGDCA)",
        duration: "1 Year",
        fees: "₹3,500/Yr",
        eligibility: "Graduation in any stream",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      }
    ],
    about: "Babu Chhotelal Shrivastava Government Post Graduate College Dhamtari (BCS Govt PG College), established in 1963, is an autonomous lead government institution in Dhamtari district, accredited with NAAC 'B++' Grade and affiliated to PRSU Raipur."
  },
  1926: {
    name: "Dr. B.B.A. Government Polytechnic, Karvad (Silvassa)",
    shortName: "Dr BBA Govt Polytechnic",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://drbbagpks.org",
    phone: "0260-2640101",
    address: "Behind Sub Station, Madhuban Dam Road, Karvad, Silvassa, Dadra & Nagar Haveli - 396230",
    location: "Dadra and Nagar Haveli",
    state: "Dadra & Nagar Haveli and Daman & Diu",
    fees: "₹3,250/Yr",
    affiliation: "Gujarat Technological University (GTU), Ahmedabad",
    courses: [
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹3,250/Yr",
        eligibility: "Class 10th with ACPDC Merit",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹3,250/Yr",
        eligibility: "Class 10th with ACPDC Merit",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹3,250/Yr",
        eligibility: "Class 10th with ACPDC Merit",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Electronics and Communication Engineering",
        duration: "3 Years",
        fees: "₹3,250/Yr",
        eligibility: "Class 10th with ACPDC Merit",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ],
    about: "Dr. B.B.A. Government Polytechnic Karvad, established in 1994 by the Administration of Dadra and Nagar Haveli and Daman and Diu, is an AICTE-approved premier public polytechnic affiliated to Gujarat Technological University (GTU), offering subsidized technical diplomas."
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

progress.verifiedColleges = 1930;
progress.last_batch_completed = 193;
progress.currentBatch = 193;
progress.lastUpdated = new Date().toISOString();

if (!progress.batches) {
  progress.batches = {};
}

progress.batches["193"] = {
  status: "verified",
  verifiedCount: 10,
  range: "1921-1930",
  ids: batchIds,
  verifiedAt: new Date().toISOString()
};

if (!progress.batchHistory) {
  progress.batchHistory = [];
}
progress.batchHistory.push({
  batch: 193,
  verifiedCount: 10,
  totalVerified: 1930,
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
const batch193Entries = batchIds.map((id, i) => {
  const c = batchUpdates[id];
  return `| ${1920 + i + 1} | ${c.name} | ${c.location} | ${c.state} | ${c.type} | [Portal](${c.website}) |`;
}).join('\n');

if (!mdContent.includes(batchUpdates[1917].name)) {
  mdContent += `\n\n### Batch 193 (Colleges 1,921–1,930)\n\n| # | College Name | City | State | Type | Website |\n|---|---|---|---|---|---|\n${batch193Entries}\n`;
  fs.writeFileSync(allVerifiedMdPath, mdContent, 'utf8');
}

console.log('Batch 193 verification successfully completed!');

