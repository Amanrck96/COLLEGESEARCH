const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const progressPath = path.join(__dirname, '../reports/verification/progress.json');
const allVerifiedJsonPath = path.join(__dirname, '../reports/verification/all_verified_colleges.json');
const allVerifiedMdPath = path.join(__dirname, '../reports/verification/all_verified_colleges.md');

const batchUpdates = {
  1927: {
    name: "SSR Institute of Management & Research (SSR IMR), Silvassa",
    shortName: "SSR IMR Silvassa",
    type: "Private",
    ownership: "Private",
    website: "https://www.ssrimr.edu.in",
    phone: "0260-2681115",
    address: "SSR Campus, Sayli Road, Silvassa, Dadra and Nagar Haveli - 396230",
    location: "Silvassa",
    state: "Dadra & Nagar Haveli and Daman & Diu",
    fees: "₹80,000/Yr",
    affiliation: "Savitribai Phule Pune University (SPPU), Pune",
    about: "SSR Institute of Management & Research (SSR IMR), Silvassa, established in 2008 by Swargeeya Sanjibhai Rupjibhai Memorial Trust, is an AICTE-approved management institute permanently affiliated to SPPU Pune, offering premier postgraduate business administration programs.",
    courses: [
      {
        title: "Master of Business Administration (MBA)",
        duration: "2 Years",
        fees: "₹80,000/Yr",
        eligibility: "Graduation with 50% + CMAT/MAH-CET/CAT",
        type: "MANAGEMENT",
        intake: 60
      }
    ]
  },
  1928: {
    name: "SSR College of Arts, Commerce and Science (SSR ACSC), Silvassa",
    shortName: "SSR ACSC Silvassa",
    type: "Private",
    ownership: "Private",
    website: "https://ssracs.edu.in",
    phone: "0260-2681114",
    address: "Sayli Road, Silvassa, Dadra and Nagar Haveli - 396230",
    location: "Silvassa",
    state: "Dadra & Nagar Haveli and Daman & Diu",
    fees: "₹35,000/Yr",
    affiliation: "Savitribai Phule Pune University (SPPU), Pune",
    about: "SSR College of Arts, Commerce and Science Silvassa, established in 2006 by SSR Memorial Trust, is NAAC-accredited and affiliated with Savitribai Phule Pune University, offering undergraduate courses in business administration, computer science, and commerce.",
    courses: [
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹35,000/Yr",
        eligibility: "10+2 in any stream with English",
        type: "MANAGEMENT",
        intake: 120
      },
      {
        title: "Bachelor of Science in Computer Science (B.Sc CS)",
        duration: "3 Years",
        fees: "₹35,000/Yr",
        eligibility: "10+2 with Mathematics",
        type: "SCIENCE",
        intake: 80
      },
      {
        title: "Bachelor of Commerce (B.Com)",
        duration: "3 Years",
        fees: "₹20,000/Yr",
        eligibility: "10+2 with Commerce / Science",
        type: "COMMERCE",
        intake: 120
      }
    ]
  },
  1929: {
    name: "Government Engineering College, Daman (GEC Daman)",
    shortName: "GEC Daman",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://gecdaman.org.in",
    phone: "0260-2244111",
    address: "Varkund, Nani Daman, Daman - 396210",
    location: "Daman",
    state: "Dadra & Nagar Haveli and Daman & Diu",
    fees: "₹6,000/Yr",
    affiliation: "Gujarat Technological University (GTU), Ahmedabad",
    about: "Government Engineering College Daman, established in 2018 by the Administration of UT of Dadra & Nagar Haveli and Daman & Diu, is an AICTE-approved premier public engineering institute providing high-quality, subsidized technical education across key disciplines.",
    courses: [
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹6,000/Yr",
        eligibility: "10+2 with Physics, Mathematics & Chemistry + GUJCET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Computer Engineering",
        duration: "4 Years",
        fees: "₹6,000/Yr",
        eligibility: "10+2 with PCM + GUJCET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹6,000/Yr",
        eligibility: "10+2 with PCM + GUJCET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Electrical Engineering",
        duration: "4 Years",
        fees: "₹6,000/Yr",
        eligibility: "10+2 with PCM + GUJCET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Biomedical Engineering",
        duration: "4 Years",
        fees: "₹6,000/Yr",
        eligibility: "10+2 with PCM/PCB + GUJCET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  1930: {
    name: "Government Polytechnic, Diu",
    shortName: "GP Diu",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://www.gpdiu.ac.in",
    phone: "02875-252255",
    address: "Education Hub, Kevdi - Diu, UT of DNH & DD - 362520",
    location: "Diu",
    state: "Dadra & Nagar Haveli and Daman & Diu",
    fees: "₹3,400/Yr",
    affiliation: "Gujarat Technological University (GTU), Ahmedabad",
    about: "Government Polytechnic Diu, established in 2014 under the Administration of UT of Dadra and Nagar Haveli and Daman and Diu, is an AICTE-approved technical diploma institute delivering subsidized professional diploma courses in civil, mechanical, and electrical engineering.",
    courses: [
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹3,400/Yr",
        eligibility: "Class 10th pass with ACPDC Gujarat counseling",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 54
      },
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹3,400/Yr",
        eligibility: "Class 10th pass with ACPDC Gujarat counseling",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 54
      },
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹3,400/Yr",
        eligibility: "Class 10th pass with ACPDC Gujarat counseling",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 54
      }
    ]
  },
  1931: {
    name: "Government Polytechnic, Daman",
    shortName: "GP Daman",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://gpdaman.org.in",
    phone: "0260-2244111",
    address: "Varkund, Nani Daman, Daman - 396210",
    location: "Daman",
    state: "Dadra & Nagar Haveli and Daman & Diu",
    fees: "₹3,400/Yr",
    affiliation: "Gujarat Technological University (GTU), Ahmedabad",
    about: "Government Polytechnic Daman, established in 1989, is an AICTE-approved premier polytechnic college run by the UT Administration of Dadra and Nagar Haveli & Daman and Diu, offering accredited technical diploma courses.",
    courses: [
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹3,400/Yr",
        eligibility: "Class 10th pass with Science and Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹3,400/Yr",
        eligibility: "Class 10th pass with Science and Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Chemical Engineering",
        duration: "3 Years",
        fees: "₹3,400/Yr",
        eligibility: "Class 10th pass with Science and Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Computer Engineering",
        duration: "3 Years",
        fees: "₹3,400/Yr",
        eligibility: "Class 10th pass with Science and Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Information Technology",
        duration: "3 Years",
        fees: "₹3,400/Yr",
        eligibility: "Class 10th pass with Science and Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  1932: {
    name: "Shrinathji College of Business Administration (SCBA), Daman",
    shortName: "SCBA Daman",
    type: "Private",
    ownership: "Private",
    website: "https://shrinathjicollege.org",
    phone: "0260-2260111",
    address: "Kunta Road, Nani Daman, Daman - 396210",
    location: "Daman",
    state: "Dadra & Nagar Haveli and Daman & Diu",
    fees: "₹35,000/Yr",
    affiliation: "Veer Narmad South Gujarat University (VNSGU), Surat",
    about: "Shrinathji College of Business Administration Daman is an affiliated college under Veer Narmad South Gujarat University, providing professional undergraduate education in computer applications and business administration.",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹35,000/Yr",
        eligibility: "10+2 with English and Mathematics / Statistics / Computer",
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
      }
    ]
  },
  1933: {
    name: "Maharaja Agrasen Institute of Technology, Solan (MAU)",
    shortName: "MAIT / MAU Solan",
    type: "Private",
    ownership: "Private",
    website: "https://www.mau.ac.in",
    phone: "01795-246200",
    address: "Atal Shiksha Kunj, Village Kalujhanda, Baddi, Solan, Himachal Pradesh - 174103",
    location: "Solan",
    state: "Himachal Pradesh",
    fees: "₹1,15,000/Yr",
    affiliation: "Maharaja Agrasen University, Solan (Private University)",
    about: "Maharaja Agrasen Institute of Technology, situated within Maharaja Agrasen University Baddi-Solan, is an AICTE-approved engineering school established in 2013, offering engineering degrees with cutting-edge laboratories and industry linkages.",
    courses: [
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹1,15,000/Yr",
        eligibility: "10+2 with PCM + JEE Main / HPCET",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 120
      },
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹95,000/Yr",
        eligibility: "10+2 with PCM + JEE Main / HPCET",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹95,000/Yr",
        eligibility: "10+2 with PCM + JEE Main / HPCET",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  1934: {
    name: "Himachal Pradesh Technical University (HPTU), Hamirpur",
    shortName: "HPTU Hamirpur",
    type: "Public/Government (State University)",
    ownership: "Public/Government",
    website: "https://www.himtu.ac.in",
    phone: "01972-226902",
    address: "Gandhi Chowk, Hamirpur, Himachal Pradesh - 177001",
    location: "Hamirpur",
    state: "Himachal Pradesh",
    fees: "₹65,000/Yr",
    affiliation: "State Public Technical University established by Govt. of HP",
    about: "Himachal Pradesh Technical University Hamirpur, established in 2010 by the Government of Himachal Pradesh, is the apex affiliating state technical university administering professional technical and management colleges across Himachal Pradesh.",
    courses: [
      {
        title: "Master of Computer Applications (MCA)",
        duration: "2 Years",
        fees: "₹60,000/Yr",
        eligibility: "BCA / B.Sc / B.Com with Mathematics + HPCET / NIMCET",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Master of Business Administration (MBA)",
        duration: "2 Years",
        fees: "₹65,000/Yr",
        eligibility: "Graduation with 50% + HPCET / CAT / CMAT / MAT",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "B.Tech in Computer Science & Engineering",
        duration: "4 Years",
        fees: "₹70,000/Yr",
        eligibility: "10+2 with PCM + HPCET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  1935: {
    name: "L.R. Institute of Engineering & Technology, Solan",
    shortName: "LRIET Solan",
    type: "Private",
    ownership: "Private",
    website: "https://www.lrinstitutes.edu.in",
    phone: "01792-252851",
    address: "Jabli-Kyar, P.O. Sultanpur, Oachghat, Solan, Himachal Pradesh - 173223",
    location: "Solan",
    state: "Himachal Pradesh",
    fees: "₹75,000/Yr",
    affiliation: "Himachal Pradesh Technical University (HPTU), Hamirpur",
    about: "L.R. Institute of Engineering & Technology Solan, established in 2008 by Lala Lilu Ram Educational Trust, is an AICTE-approved engineering institute affiliated to HPTU Hamirpur, providing undergraduate engineering education in scenic Solan valley.",
    courses: [
      {
        title: "B.Tech in Computer Science & Engineering",
        duration: "4 Years",
        fees: "₹75,000/Yr",
        eligibility: "10+2 with PCM + JEE Main / HPCET",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹75,000/Yr",
        eligibility: "10+2 with PCM + JEE Main / HPCET",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹75,000/Yr",
        eligibility: "10+2 with PCM + JEE Main / HPCET",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ]
  },
  1936: {
    name: "CIPET: Centre for Skilling and Technical Support (CSTS) - Baddi",
    shortName: "CIPET CSTS Baddi",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://www.cipet.gov.in",
    phone: "01795-271040",
    address: "Plot No. 198/201, Jharmajri, Baddi, District Solan, Himachal Pradesh - 173205",
    location: "Solan",
    state: "Himachal Pradesh",
    fees: "₹38,000/Yr",
    affiliation: "Autonomous Institute under Ministry of Chemicals & Fertilizers, Govt. of India",
    about: "Central Institute of Petrochemicals Engineering & Technology (CIPET: CSTS) Baddi, established under the Department of Chemicals & Petrochemicals, Ministry of Chemicals & Fertilizers, Government of India, is an apex public technology centre providing specialized diploma and postgraduate programs in plastics mould engineering and petrochemical technology.",
    courses: [
      {
        title: "Diploma in Plastics Mould Technology (DPMT)",
        duration: "3 Years",
        fees: "₹38,000/Yr",
        eligibility: "Class 10th pass + CIPET JEE",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Plastics Technology (DPT)",
        duration: "3 Years",
        fees: "₹38,000/Yr",
        eligibility: "Class 10th pass + CIPET JEE",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Post Graduate Diploma in Plastics Processing & Testing (PGD-PPT)",
        duration: "2 Years",
        fees: "₹45,000/Yr",
        eligibility: "3-year Degree in Science with Chemistry",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ]
  }
};

console.log('Loading siteData.json...');
const colleges = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const batchIds = Object.keys(batchUpdates).map(Number);

let updatedCount = 0;
colleges.forEach(c => {
  if (batchUpdates[c.id]) {
    const update = batchUpdates[c.id];
    Object.assign(c, update);
    c.verified = true;
    c.verificationDate = new Date().toISOString();
    updatedCount++;
  }
});

console.log(`Applied updates to ${updatedCount} colleges in siteData.`);
fs.writeFileSync(siteDataPath, JSON.stringify(colleges, null, 2), 'utf8');

// Update progress.json
console.log('Updating progress.json...');
let progress = JSON.parse(fs.readFileSync(progressPath, 'utf8'));

progress.verifiedColleges = 1940;
progress.last_batch_completed = 194;
progress.currentBatch = 194;
progress.lastUpdated = new Date().toISOString();

if (!progress.batches) {
  progress.batches = {};
}

progress.batches["194"] = {
  status: "verified",
  verifiedCount: 10,
  range: "1931-1940",
  ids: batchIds,
  verifiedAt: new Date().toISOString()
};

if (!progress.batchHistory) {
  progress.batchHistory = [];
}
progress.batchHistory.push({
  batch: 194,
  verifiedCount: 10,
  totalVerified: 1940,
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
const batch194Entries = batchIds.map((id, i) => {
  const c = batchUpdates[id];
  return `| ${1930 + i + 1} | ${c.name} | ${c.location} | ${c.state} | ${c.type} | [Portal](${c.website}) |`;
}).join('\n');

if (!mdContent.includes(batchUpdates[1927].name)) {
  mdContent += `\n\n### Batch 194 (Colleges 1,931–1,940)\n\n| # | College Name | City | State | Type | Website |\n|---|---|---|---|---|---|\n${batch194Entries}\n`;
  fs.writeFileSync(allVerifiedMdPath, mdContent, 'utf8');
}

console.log('Batch 194 verification successfully completed!');
