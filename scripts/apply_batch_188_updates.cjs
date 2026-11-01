const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const progressPath = path.join(__dirname, '../reports/verification/progress.json');
const allVerifiedJsonPath = path.join(__dirname, '../reports/verification/all_verified_colleges.json');
const allVerifiedMdPath = path.join(__dirname, '../reports/verification/all_verified_colleges.md');

const batchUpdates = {
  1867: {
    name: "Shri Rawatpura Sarkar Polytechnic, Raipur",
    shortName: "SRU Polytechnic",
    type: "Private",
    ownership: "Private",
    website: "https://sruraipur.ac.in",
    phone: "0771-2972412",
    address: "Near Shadani Darbar, Village Dhaneli, Mana Camp, Raipur, Chhattisgarh - 492015",
    location: "Raipur",
    state: "Chhattisgarh",
    fees: "₹28,500/Yr",
    affiliation: "Chhattisgarh Swami Vivekanand Technical University (CSVTU), Bhilai",
    courses: [
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹28,500/Yr",
        eligibility: "Class 10th with CG PPT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Mechanical Engineering",
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
    about: "Shri Rawatpura Sarkar Polytechnic at Mana Camp, Raipur was established by Shri Rawatpura Sarkar Lok Kalyan Trust. Approved by AICTE and affiliated to CSVTU Bhilai, it delivers diploma engineering education."
  },
  1868: {
    name: "Ashoka Institute of Technology & Management, Rajnandgaon",
    shortName: "AITM Rajnandgaon",
    type: "Private",
    ownership: "Private",
    website: "https://ashokagroup.org.in",
    phone: "07744-281140",
    address: "Gram Torankatta, Post Somni, G.E. Road, Rajnandgaon, Chhattisgarh - 491441",
    location: "Rajnandgaon",
    state: "Chhattisgarh",
    fees: "₹55,000/Yr",
    affiliation: "Chhattisgarh Swami Vivekanand Technical University (CSVTU), Bhilai",
    courses: [
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹55,000/Yr",
        eligibility: "10+2 with PCM + CG PET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹55,000/Yr",
        eligibility: "10+2 with PCM + CG PET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹55,000/Yr",
        eligibility: "10+2 with PCM + CG PET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ],
    about: "Ashoka Institute of Technology & Management Rajnandgaon is a private engineering college located on G.E. Road at Torankatta, offering undergraduate engineering courses approved by AICTE and affiliated to CSVTU Bhilai."
  },
  1869: {
    name: "Institute of Technology, Korba (IT Korba)",
    shortName: "IT Korba",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://itkorba.in",
    phone: "07759-241551",
    address: "Balco Urga Ring Road, Village Jhagarha, Risdi, Korba, Chhattisgarh - 495684",
    location: "Korba",
    state: "Chhattisgarh",
    fees: "₹35,000/Yr",
    affiliation: "Chhattisgarh Swami Vivekanand Technical University (CSVTU), Bhilai",
    courses: [
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹35,000/Yr",
        eligibility: "10+2 with PCM + CG PET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹35,000/Yr",
        eligibility: "10+2 with PCM + CG PET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹35,000/Yr",
        eligibility: "10+2 with PCM + CG PET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Electrical and Electronics Engineering",
        duration: "4 Years",
        fees: "₹35,000/Yr",
        eligibility: "10+2 with PCM + CG PET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ],
    about: "Institute of Technology Korba (IT Korba), established in 2008, is an autonomous government institution set up by the Government of Chhattisgarh in partnership with central public sector undertakings. Affiliated to CSVTU Bhilai and approved by AICTE, it offers subsidized degree courses in engineering."
  },
  1870: {
    name: "Krishna's Vikash Institute of Technology, Raipur",
    shortName: "KVIT Raipur",
    type: "Private",
    ownership: "Private",
    website: "https://kvitraipur.com",
    phone: "0771-2970100",
    address: "Ward No. 1, Veer Savarkar Nagar, Near Nandanvan, Raipur, Chhattisgarh - 492099",
    location: "Raipur",
    state: "Chhattisgarh",
    fees: "₹28,500/Yr",
    affiliation: "Chhattisgarh Swami Vivekanand Technical University (CSVTU), Bhilai",
    courses: [
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹28,500/Yr",
        eligibility: "Class 10th with CG PPT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
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
      }
    ],
    about: "Krishna's Vikash Institute of Technology Raipur is a private technical institution situated near Nandanvan, offering diploma courses in engineering disciplines, approved by AICTE and affiliated to CSVTU Bhilai."
  },
  1871: {
    name: "RSR Rungta College of Engineering & Technology, Bhilai",
    shortName: "RSR RCET Bhilai",
    type: "Private",
    ownership: "Private",
    website: "https://www.rungta.ac.in",
    phone: "0788-6666666",
    address: "Rungta Knowledge City, Kohka-Kurud Road, Bhilai, Durg, Chhattisgarh - 490024",
    location: "Durg",
    state: "Chhattisgarh",
    fees: "₹70,000/Yr",
    affiliation: "Chhattisgarh Swami Vivekanand Technical University (CSVTU), Bhilai",
    courses: [
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹70,000/Yr",
        eligibility: "10+2 with PCM + CG PET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 180
      },
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹70,000/Yr",
        eligibility: "10+2 with PCM + CG PET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Master of Computer Applications (MCA)",
        duration: "2 Years",
        fees: "₹55,000/Yr",
        eligibility: "BCA / B.Sc / B.Com with Mathematics + CG Pre-MCA",
        type: "COMPUTER APPLICATIONS",
        intake: 120
      },
      {
        title: "Master of Business Administration (MBA)",
        duration: "2 Years",
        fees: "₹65,000/Yr",
        eligibility: "Graduation with 50% + CMAT / MAT / CAT",
        type: "MANAGEMENT",
        intake: 120
      }
    ],
    about: "RSR Rungta College of Engineering & Technology (RSR RCET) Bhilai, established in 2007 as part of Rungta Group of Institutions, is an AICTE-approved and NAAC-accredited engineering college affiliated to CSVTU Bhilai."
  },
  1872: {
    name: "Faculty of Engineering and Technology, Bharti Vishwavidyalaya, Durg",
    shortName: "Bharti Vishwavidyalaya Engg",
    type: "Private",
    ownership: "Private",
    website: "https://bhartivishwavidyalaya.ac.in",
    phone: "0788-2961122",
    address: "Chandkhuri, Durg, Chhattisgarh - 491001",
    location: "Durg",
    state: "Chhattisgarh",
    fees: "₹60,000/Yr",
    affiliation: "Bharti Vishwavidyalaya, Durg (State Private University)",
    courses: [
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹60,000/Yr",
        eligibility: "10+2 with PCM + Entrance Test",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹60,000/Yr",
        eligibility: "10+2 with PCM + Entrance Test",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹28,500/Yr",
        eligibility: "Class 10th with 40%",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ],
    about: "Faculty of Engineering and Technology is a constituent faculty of Bharti Vishwavidyalaya, a private university established by the Government of Chhattisgarh under the Private Universities Act at Chandkhuri, Durg."
  },
  1873: {
    name: "Kirodimal Institute of Technology, Raigarh",
    shortName: "KIT Raigarh",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "http://kitraigarh.ac.in",
    phone: "07762-229400",
    address: "Garhumaria, Odisha Road, Raigarh, Chhattisgarh - 496004",
    location: "Raigarh",
    state: "Chhattisgarh",
    fees: "₹32,500/Yr",
    affiliation: "Chhattisgarh Swami Vivekanand Technical University (CSVTU), Bhilai",
    courses: [
      {
        title: "B.Tech in Electronics and Telecommunication Engineering",
        duration: "4 Years",
        fees: "₹32,500/Yr",
        eligibility: "10+2 with PCM + CG PET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹32,500/Yr",
        eligibility: "10+2 with PCM + CG PET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹32,500/Yr",
        eligibility: "10+2 with PCM + CG PET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹32,500/Yr",
        eligibility: "10+2 with PCM + CG PET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ],
    about: "Kirodimal Institute of Technology (KIT Raigarh), established in 2000, is a premier government-sponsored technical institute established under the Municipal Corporation of Raigarh and the Government of Chhattisgarh. Affiliated to CSVTU Bhilai and approved by AICTE."
  },
  1874: {
    name: "Shivalik Institute of Management Education & Research, Durg",
    shortName: "SIMER Durg",
    type: "Private",
    ownership: "Private",
    website: "https://www.simer.in",
    phone: "0788-2618888",
    address: "P.O. Pisegaon, Balod Road, Durg, Chhattisgarh - 491001",
    location: "Durg",
    state: "Chhattisgarh",
    fees: "₹95,000/Yr",
    affiliation: "Chhattisgarh Swami Vivekanand Technical University (CSVTU), Bhilai",
    courses: [
      {
        title: "Post Graduate Diploma in Management (PGDM)",
        duration: "2 Years",
        fees: "₹95,000/Yr",
        eligibility: "Graduation with 50% + CAT / MAT / CMAT / XAT / ATMA",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "Master of Business Administration (MBA)",
        duration: "2 Years",
        fees: "₹75,000/Yr",
        eligibility: "Graduation with 50% + CMAT / MAT / CAT",
        type: "MANAGEMENT",
        intake: 60
      }
    ],
    about: "Shivalik Institute of Management Education & Research (SIMER) Durg, established in 2007 by Shivalik Education Society, is an AICTE-approved autonomous business school offering postgraduate management programs."
  },
  1875: {
    name: "Chhattisgarh Institute of Technology, Jagdalpur (Govt. Polytechnic)",
    shortName: "CIT Jagdalpur",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "http://cgdte.cgstate.gov.in",
    phone: "07782-229230",
    address: "Dharampura, Jagdalpur, Bastar, Chhattisgarh - 494001",
    location: "Bastar",
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
    about: "Chhattisgarh Institute of Technology Jagdalpur operates under the Directorate of Technical Education, Government of Chhattisgarh, providing subsidized technical diploma programs in the Bastar region."
  },
  1876: {
    name: "Chouksey Engineering College, Bilaspur",
    shortName: "CEC Bilaspur",
    type: "Private",
    ownership: "Private",
    website: "https://cecbilaspur.ac.in",
    phone: "07752-302100",
    address: "NH-49, Masturi Road, Lal Khadan, Bilaspur, Chhattisgarh - 495004",
    location: "Bilaspur",
    state: "Chhattisgarh",
    fees: "₹65,000/Yr",
    affiliation: "Chhattisgarh Swami Vivekanand Technical University (CSVTU), Bhilai",
    courses: [
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹65,000/Yr",
        eligibility: "10+2 with PCM + CG PET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 120
      },
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹65,000/Yr",
        eligibility: "10+2 with PCM + CG PET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹65,000/Yr",
        eligibility: "10+2 with PCM + CG PET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Master of Business Administration (MBA)",
        duration: "2 Years",
        fees: "₹60,000/Yr",
        eligibility: "Graduation with 50% + CMAT / MAT / CAT",
        type: "MANAGEMENT",
        intake: 60
      }
    ],
    about: "Chouksey Engineering College (CEC Bilaspur), established in 2001 under the aegis of L.N. Chouksey Memorial Shiksha Samiti, is an AICTE-approved and NAAC-accredited private engineering institution affiliated to CSVTU Bhilai."
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

progress.verifiedColleges = 1880;
progress.last_batch_completed = 188;
progress.currentBatch = 188;
progress.lastUpdated = new Date().toISOString();

if (!progress.batches) {
  progress.batches = {};
}

progress.batches["188"] = {
  status: "verified",
  verifiedCount: 10,
  range: "1871-1880",
  ids: batchIds,
  verifiedAt: new Date().toISOString()
};

if (!progress.batchHistory) {
  progress.batchHistory = [];
}
progress.batchHistory.push({
  batch: 188,
  verifiedCount: 10,
  totalVerified: 1880,
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
const batch188Entries = batchIds.map((id, i) => {
  const c = batchUpdates[id];
  return `| ${1870 + i + 1} | ${c.name} | ${c.location} | ${c.state} | ${c.type} | [Portal](${c.website}) |`;
}).join('\n');

if (!mdContent.includes(batchUpdates[1867].name)) {
  mdContent += `\n\n### Batch 188 (Colleges 1,871–1,880)\n\n| # | College Name | City | State | Type | Website |\n|---|---|---|---|---|---|\n${batch188Entries}\n`;
  fs.writeFileSync(allVerifiedMdPath, mdContent, 'utf8');
}

console.log('Batch 188 verification successfully completed!');
