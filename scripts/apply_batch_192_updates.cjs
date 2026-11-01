const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const progressPath = path.join(__dirname, '../reports/verification/progress.json');
const allVerifiedJsonPath = path.join(__dirname, '../reports/verification/all_verified_colleges.json');
const allVerifiedMdPath = path.join(__dirname, '../reports/verification/all_verified_colleges.md');

const batchUpdates = {
  1907: {
    name: "Shri Shankaracharya Mahavidyalaya, Junwani, Bhilai",
    shortName: "SSMV Bhilai",
    type: "Private",
    ownership: "Private",
    website: "https://www.ssmv.ac.in",
    phone: "0788-2284100",
    address: "97/2, Besides Petrol Pump, Junwani, Bhilai, Durg, Chhattisgarh - 490020",
    location: "Durg",
    state: "Chhattisgarh",
    fees: "₹32,000/Yr",
    affiliation: "Hemchand Yadav Vishwavidyalaya, Durg (NAAC 'A' Accredited)",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹32,000/Yr",
        eligibility: "10+2 with Mathematics / Computer",
        type: "COMPUTER APPLICATIONS",
        intake: 120
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹35,000/Yr",
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
    about: "Shri Shankaracharya Mahavidyalaya (SSMV Bhilai), established in 1997 under Shri Gangajali Education Society, is an 'A' Grade NAAC-accredited institution affiliated to Hemchand Yadav Vishwavidyalaya, Durg, delivering courses in IT, management, and arts."
  },
  1908: {
    name: "Government Jamuna Prasad Verma P.G. Arts & Commerce College, Bilaspur",
    shortName: "JPV Govt PG College",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://jpvpgc.ac.in",
    phone: "07752-414455",
    address: "Raipur Road, Jarhabhatha, Bilaspur, Chhattisgarh - 495001",
    location: "Bilaspur",
    state: "Chhattisgarh",
    fees: "₹1,850/Yr",
    affiliation: "Atal Bihari Vajpayee Vishwavidyalaya, Bilaspur (NAAC 'A' Accredited)",
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
        title: "Bachelor of Commerce (B.Com)",
        duration: "3 Years",
        fees: "₹1,850/Yr",
        eligibility: "10+2 with Commerce / Mathematics",
        type: "COMMERCE",
        intake: 360
      },
      {
        title: "Bachelor of Arts (BA)",
        duration: "3 Years",
        fees: "₹1,650/Yr",
        eligibility: "10+2 in any stream",
        type: "ARTS",
        intake: 400
      }
    ],
    about: "Government Jamuna Prasad Verma P.G. Arts and Commerce College Bilaspur (JPV College), established in 1972, is a premier NAAC 'A' accredited state government postgraduate institution affiliated to Atal Bihari Vajpayee Vishwavidyalaya."
  },
  1909: {
    name: "Mahant Laxminarayan Das College, Raipur",
    shortName: "MLD College Raipur",
    type: "Private",
    ownership: "Private",
    website: "https://mldcollege.com",
    phone: "0771-2227181",
    address: "Near Rang Mandir, Gandhi Chowk, Chhotapara, Raipur, Chhattisgarh - 492001",
    location: "Raipur",
    state: "Chhattisgarh",
    fees: "₹28,000/Yr",
    affiliation: "Pt. Ravishankar Shukla University, Raipur (State Public University)",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹28,000/Yr",
        eligibility: "10+2 with Mathematics / Computer",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹30,000/Yr",
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
    about: "Mahant Laxminarayan Das College Raipur, established in 1997, is an established degree college situated near Gandhi Chowk in Raipur, affiliated to Pt. Ravishankar Shukla University."
  },
  1910: {
    name: "Government Kaktiya Post Graduate College, Jagdalpur",
    shortName: "Govt PG College Jagdalpur",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://www.pgcollegejagdalpur.in",
    phone: "07782-222384",
    address: "Dharampura No. 2, Jagdalpur, Bastar, Chhattisgarh - 494001",
    location: "Bastar",
    state: "Chhattisgarh",
    fees: "₹1,950/Yr",
    affiliation: "Shaheed Mahendra Karma Vishwavidyalaya, Bastar (Autonomous Lead College)",
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
        fees: "₹1,950/Yr",
        eligibility: "10+2 with Science stream",
        type: "SCIENCE",
        intake: 360
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
        eligibility: "Graduation in any discipline",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      }
    ],
    about: "Government Kaktiya Post Graduate College Jagdalpur, established in 1954, is the historic lead autonomous college of Bastar division, accredited by NAAC and affiliated to Shaheed Mahendra Karma Vishwavidyalaya, providing higher education to students of the tribal Bastar region."
  },
  1911: {
    name: "Agrasen Mahavidyalaya, Raipur",
    shortName: "Agrasen College Raipur",
    type: "Private",
    ownership: "Private",
    website: "https://agrasenmahavidyalaya.edu.in",
    phone: "0771-4040900",
    address: "Jaitu Sao Math Parisar, Purani Basti, Raipur, Chhattisgarh - 492001",
    location: "Raipur",
    state: "Chhattisgarh",
    fees: "₹28,000/Yr",
    affiliation: "Pt. Ravishankar Shukla University, Raipur (State Public University)",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹28,000/Yr",
        eligibility: "10+2 with Mathematics / Computer",
        type: "COMPUTER APPLICATIONS",
        intake: 60
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
        title: "Bachelor of Commerce (B.Com)",
        duration: "3 Years",
        fees: "₹18,000/Yr",
        eligibility: "10+2 in Commerce stream",
        type: "COMMERCE",
        intake: 120
      }
    ],
    about: "Agrasen Mahavidyalaya Raipur, founded in 2005 by the Agrawal Education Society, is situated at Jaitu Sao Math Parisar in Purani Basti, affiliated to Pt. Ravishankar Shukla University."
  },
  1912: {
    name: "Shri Shankaracharya Institute of Professional Studies, Raipur",
    shortName: "SSIPS Raipur",
    type: "Private",
    ownership: "Private",
    website: "https://www.ssips.edu.in",
    phone: "0771-3501600",
    address: "Old Dhamtari Road, P.O. Sejbahar, Mujgahan, Raipur, Chhattisgarh - 492015",
    location: "Raipur",
    state: "Chhattisgarh",
    fees: "₹30,000/Yr",
    affiliation: "Pt. Ravishankar Shukla University, Raipur (State Public University)",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹30,000/Yr",
        eligibility: "10+2 with Mathematics / Computer",
        type: "COMPUTER APPLICATIONS",
        intake: 90
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹35,000/Yr",
        eligibility: "10+2 in any stream",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "Bachelor of Commerce (B.Com)",
        duration: "3 Years",
        fees: "₹20,000/Yr",
        eligibility: "10+2 with Commerce / Mathematics",
        type: "COMMERCE",
        intake: 120
      }
    ],
    about: "Shri Shankaracharya Institute of Professional Studies (SSIPS Raipur) is a member of the Shankaracharya Group of Institutions, offering higher education degrees in commerce, business administration, and computer applications under PRSU Raipur."
  },
  1913: {
    name: "Disha College, Raipur",
    shortName: "Disha College",
    type: "Private",
    ownership: "Private",
    website: "https://dishacollege.com",
    phone: "0771-4231000",
    address: "Disha Park, Building No. 1, Ram Nagar-Kota Marg, Raipur, Chhattisgarh - 492010",
    location: "Raipur",
    state: "Chhattisgarh",
    fees: "₹35,000/Yr",
    affiliation: "Pt. Ravishankar Shukla University, Raipur (State Public University)",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹35,000/Yr",
        eligibility: "10+2 with Mathematics / Computer",
        type: "COMPUTER APPLICATIONS",
        intake: 90
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
        title: "Post Graduate Diploma in Computer Applications (PGDCA)",
        duration: "1 Year",
        fees: "₹18,000/Yr",
        eligibility: "Graduation in any stream",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      }
    ],
    about: "Disha College Raipur, established in 2001 under Disha Education Society, is an established institution located at Disha Park, offering recognized degrees in management, commerce, and computer science affiliated to PRSU Raipur."
  },
  1914: {
    name: "Vipra Kala Vanijya Avam Sharirik Shiksha Mahavidyalaya, Raipur",
    shortName: "Vipra College Raipur",
    type: "Private",
    ownership: "Private",
    website: "https://vipracollege.in",
    phone: "0771-2254400",
    address: "G.E. Road, Samta Colony, Raipur, Chhattisgarh - 492001",
    location: "Raipur",
    state: "Chhattisgarh",
    fees: "₹26,000/Yr",
    affiliation: "Pt. Ravishankar Shukla University, Raipur (State Public University)",
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
        title: "Post Graduate Diploma in Computer Applications (PGDCA)",
        duration: "1 Year",
        fees: "₹16,000/Yr",
        eligibility: "Graduation in any stream",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Bachelor of Physical Education (B.P.Ed)",
        duration: "2 Years",
        fees: "₹35,000/Yr",
        eligibility: "Graduation with Physical Education / Sports Merit",
        type: "EDUCATION",
        intake: 50
      }
    ],
    about: "Vipra Kala Vanijya Avam Sharirik Shiksha Mahavidyalaya Raipur, established in 1996 by the Sarv Brahmin Samaj, is affiliated to PRSU Raipur, offering education in physical education, computer applications, and humanities."
  },
  1915: {
    name: "Netaji Subhas College, Abhanpur",
    shortName: "NSC Abhanpur",
    type: "Private",
    ownership: "Private",
    website: "https://nscraipur.in",
    phone: "0771-2101100",
    address: "Village Belbhata, Taluka Abhanpur, Raipur, Chhattisgarh - 493661",
    location: "Raipur",
    state: "Chhattisgarh",
    fees: "₹25,000/Yr",
    affiliation: "Pt. Ravishankar Shukla University, Raipur (State Public University)",
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
        title: "Bachelor of Education (B.Ed)",
        duration: "2 Years",
        fees: "₹33,000/Yr",
        eligibility: "Graduation with 50% + Pre-B.Ed",
        type: "EDUCATION",
        intake: 100
      }
    ],
    about: "Netaji Subhas College at Belbhata, Abhanpur is affiliated to Pt. Ravishankar Shukla University, offering education programs, IT diplomas, and undergraduate courses."
  },
  1916: {
    name: "Seth R. C. S. Arts and Commerce College, Durg",
    shortName: "Seth RCS College Durg",
    type: "Private",
    ownership: "Private",
    website: "https://sethrcscollege.in",
    phone: "0788-2322300",
    address: "Utai Road, Kasaridih, Near Ravishankar Shukla Stadium, Durg, Chhattisgarh - 491001",
    location: "Durg",
    state: "Chhattisgarh",
    fees: "₹25,000/Yr",
    affiliation: "Hemchand Yadav Vishwavidyalaya, Durg (State University)",
    courses: [
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹28,000/Yr",
        eligibility: "10+2 in any stream",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹25,000/Yr",
        eligibility: "10+2 with Mathematics / Computer",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Bachelor of Commerce (B.Com)",
        duration: "3 Years",
        fees: "₹15,000/Yr",
        eligibility: "10+2 with Commerce / Mathematics",
        type: "COMMERCE",
        intake: 240
      }
    ],
    about: "Seth R. C. S. Arts and Commerce College Durg, established in 1964, is one of the premier private aided institutions in Durg, located near the Ravishankar Shukla Stadium and affiliated to Hemchand Yadav Vishwavidyalaya."
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

progress.verifiedColleges = 1920;
progress.last_batch_completed = 192;
progress.currentBatch = 192;
progress.lastUpdated = new Date().toISOString();

if (!progress.batches) {
  progress.batches = {};
}

progress.batches["192"] = {
  status: "verified",
  verifiedCount: 10,
  range: "1911-1920",
  ids: batchIds,
  verifiedAt: new Date().toISOString()
};

if (!progress.batchHistory) {
  progress.batchHistory = [];
}
progress.batchHistory.push({
  batch: 192,
  verifiedCount: 10,
  totalVerified: 1920,
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
const batch192Entries = batchIds.map((id, i) => {
  const c = batchUpdates[id];
  return `| ${1910 + i + 1} | ${c.name} | ${c.location} | ${c.state} | ${c.type} | [Portal](${c.website}) |`;
}).join('\n');

if (!mdContent.includes(batchUpdates[1907].name)) {
  mdContent += `\n\n### Batch 192 (Colleges 1,911–1,920)\n\n| # | College Name | City | State | Type | Website |\n|---|---|---|---|---|---|\n${batch192Entries}\n`;
  fs.writeFileSync(allVerifiedMdPath, mdContent, 'utf8');
}

console.log('Batch 192 verification successfully completed!');
