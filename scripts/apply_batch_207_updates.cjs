const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const progressPath = path.join(__dirname, '../reports/verification/progress.json');
const allVerifiedJsonPath = path.join(__dirname, '../reports/verification/all_verified_colleges.json');
const allVerifiedMdPath = path.join(__dirname, '../reports/verification/all_verified_colleges.md');

const batchUpdates = {
  2057: {
    name: "Government Serchhip College, Serchhip",
    shortName: "Govt Serchhip College",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://gsc.edu.in",
    phone: "03838-222045",
    address: "New Serchhip, Serchhip, Mizoram - 796181",
    location: "Serchhip",
    state: "Mizoram",
    fees: "₹8,500/Yr",
    affiliation: "Mizoram University (Central University, NAAC 'B++' Grade)",
    about: "Government Serchhip College, established in 1973 and provincialized in 1989 by the Government of Mizoram, is a premier state government college accredited with 'B++' grade by NAAC. Affiliated to Mizoram University, it delivers accessible quality higher education in computer applications and arts to students of central Mizoram.",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹8,500/Yr",
        eligibility: "10+2 with Mathematics / Computer Studies",
        type: "COMPUTER APPLICATIONS",
        intake: 30
      },
      {
        title: "Bachelor of Arts (B.A.) in Humanities & Social Sciences",
        duration: "3 Years",
        fees: "₹6,000/Yr",
        eligibility: "10+2 in Arts / any stream",
        type: "ARTS",
        intake: 200
      }
    ]
  },
  2058: {
    name: "Government Polytechnic Seithekema-C, Chümoukedima",
    shortName: "GP Seithekema Chumoukedima",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://www.gpscnagaland.in",
    phone: "03862-240120",
    address: "Seithekema-C, Chümoukedima, Nagaland - 797103",
    location: "Dimapur",
    state: "Nagaland",
    fees: "₹5,000/Yr",
    affiliation: "State Council for Technical Education (SCTE), Nagaland & AICTE",
    about: "Government Polytechnic Seithekema-C Chümoukedima, established in 2018 under the Directorate of Technical Education, Government of Nagaland, is an AICTE-approved premier state polytechnic institute located in Chümoukedima, providing subsidized technical engineering diploma education.",
    courses: [
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹5,000/Yr",
        eligibility: "Class 10th / HSLC with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ]
  },
  2059: {
    name: "St. Joseph University, Chümoukedima",
    shortName: "St Joseph University Nagaland",
    type: "Private",
    ownership: "Private (State Private University)",
    website: "https://www.stjosephuniv.edu.in",
    phone: "03862-242069",
    address: "Virgin Town, Ikishe Model Village, Chümoukedima, Nagaland - 797115",
    location: "Dimapur",
    state: "Nagaland",
    fees: "₹85,000/Yr",
    affiliation: "UGC Recognized Private University (Nagaland Act No. 6 of 2016)",
    about: "St. Joseph University Chümoukedima, established in 2016 by the DMI Sisters under the Nagaland St. Joseph University Act, is a private university recognized by UGC. It offers comprehensive multi-disciplinary undergraduate and postgraduate programs in engineering, IT, management, and sciences.",
    courses: [
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹85,000/Yr",
        eligibility: "10+2 with PCM minimum 45% + Entrance / Merit",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹95,000/Yr",
        eligibility: "10+2 with PCM minimum 45% + Entrance / Merit",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹55,000/Yr",
        eligibility: "10+2 with Mathematics / Computer Studies",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Master of Computer Applications (MCA)",
        duration: "2 Years",
        fees: "₹70,000/Yr",
        eligibility: "BCA / B.Sc (IT/CS) with minimum 50%",
        type: "COMPUTER APPLICATIONS",
        intake: 30
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹50,000/Yr",
        eligibility: "10+2 in any stream",
        type: "MANAGEMENT",
        intake: 60
      }
    ]
  },
  2060: {
    name: "Government Polytechnic Tsunazho, Chetheba",
    shortName: "GP Tsunazho Chetheba",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://gptnagaland.org/",
    phone: "03865-245100",
    address: "Tsunazho, Chetheba, Phek District, Nagaland - 797104",
    location: "Phek",
    state: "Nagaland",
    fees: "₹5,000/Yr",
    affiliation: "State Council for Technical Education (SCTE), Nagaland & AICTE",
    about: "Government Polytechnic Tsunazho Chetheba, established under the Department of Higher & Technical Education, Government of Nagaland, is an AICTE-approved public polytechnic delivering specialized diploma training in Electrical & Electronics Engineering to students in Phek district.",
    courses: [
      {
        title: "Diploma in Electrical & Electronics Engineering",
        duration: "3 Years",
        fees: "₹5,000/Yr",
        eligibility: "Class 10th / HSLC with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ]
  },
  2061: {
    name: "Government Polytechnic Sedem, Tuensang",
    shortName: "GP Sedem Tuensang",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://gpstnagaland.org.in",
    phone: "03861-220021",
    address: "Sedem, Tuensang District, Nagaland - 798612",
    location: "Tuensang",
    state: "Nagaland",
    fees: "₹5,000/Yr",
    affiliation: "State Council for Technical Education (SCTE), Nagaland & AICTE",
    about: "Government Polytechnic Sedem Tuensang, established by the Directorate of Technical Education, Government of Nagaland, is an AICTE-approved state technical institute catering to eastern Nagaland, offering subsidized 3-year diploma education in Civil Engineering.",
    courses: [
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹5,000/Yr",
        eligibility: "Class 10th / HSLC with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ]
  },
  2062: {
    name: "Government Polytechnic Aboi, Mon",
    shortName: "GP Aboi Mon",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://gpamonnagaland.in",
    phone: "03869-221015",
    address: "Aboi, Mon District, Nagaland - 798603",
    location: "Mon",
    state: "Nagaland",
    fees: "₹5,000/Yr",
    affiliation: "State Council for Technical Education (SCTE), Nagaland & AICTE",
    about: "Government Polytechnic Aboi Mon, established under the Government of Nagaland and approved by AICTE, provides critical technical skill education and engineering diploma pathways in Civil Engineering to youths in the northern border district of Mon.",
    courses: [
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹5,000/Yr",
        eligibility: "Class 10th / HSLC with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ]
  },
  2063: {
    name: "National Institute of Electronics & Information Technology (NIELIT), Kohima",
    shortName: "NIELIT Kohima",
    type: "Public/Government (Autonomous Central Government Institute)",
    ownership: "Public/Government",
    website: "https://www.nielit.gov.in/kohima/",
    phone: "0370-2270921",
    address: "Meriema, New High Court Road, Kohima, Nagaland - 797001",
    location: "Kohima",
    state: "Nagaland",
    fees: "₹48,000/Yr",
    affiliation: "Ministry of Electronics and Information Technology (MeitY), Government of India / Nagaland University",
    about: "National Institute of Electronics & Information Technology (NIELIT) Kohima, established in 2004, is an autonomous scientific institute under the Ministry of Electronics & IT (MeitY), Government of India. Located at Meriema, Kohima, it provides formal degree and diploma training in computer applications and information technology.",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹48,000/Yr",
        eligibility: "10+2 with Mathematics / Computer Studies",
        type: "COMPUTER APPLICATIONS",
        intake: 40
      },
      {
        title: "Diploma in Computer Science & Engineering",
        duration: "3 Years",
        fees: "₹25,000/Yr",
        eligibility: "Class 10th / HSLC with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "Diploma in Electronics & Communication Engineering",
        duration: "3 Years",
        fees: "₹25,000/Yr",
        eligibility: "Class 10th / HSLC with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ]
  },
  2064: {
    name: "Nagaland Tool Room & Training Centre (NTTC), Dimapur",
    shortName: "NTTC Dimapur",
    type: "Public/Government (Govt. of Nagaland Society with Ministry of MSME)",
    ownership: "Public/Government",
    website: "http://www.nttcdimapur.org.in",
    phone: "03862-248008",
    address: "Sub-Jail Road, Netaji Colony, Dimapur, Nagaland - 797112",
    location: "Dimapur",
    state: "Nagaland",
    fees: "₹28,000/Yr",
    affiliation: "State Council for Technical Education (SCTE), Nagaland & AICTE",
    about: "Nagaland Tool Room & Training Centre (NTTC) Dimapur, established in 2006 by the Department of Industries & Commerce, Government of Nagaland with assistance from the Ministry of MSME, Govt of India, is an AICTE-approved premier autonomous society providing advanced technical diploma education in tool design, die making, and mechanical engineering.",
    courses: [
      {
        title: "Diploma in Tool & Die Making (DTDM)",
        duration: "3 Years",
        fees: "₹28,000/Yr",
        eligibility: "Class 10th / HSLC with minimum 50% in Maths & Science",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹28,000/Yr",
        eligibility: "Class 10th / HSLC with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ]
  },
  2065: {
    name: "Khelhoshe Polytechnic Atoizu (KPA), Zunheboto",
    shortName: "Khelhoshe Polytechnic Atoizu",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://kpanagaland.org.in",
    phone: "03867-285012",
    address: "Atoizu, Zunheboto District, Nagaland - 798620",
    location: "Zunheboto",
    state: "Nagaland",
    fees: "₹5,000/Yr",
    affiliation: "State Council for Technical Education (SCTE), Nagaland & AICTE",
    about: "Khelhoshe Polytechnic Atoizu (KPA) Zunheboto, established in 1972, is the pioneer and premier state government polytechnic of Nagaland, operating under the Directorate of Technical Education. Approved by AICTE, it delivers subsidized 3-year engineering diploma programs across civil, mechanical, electrical, and automobile branches.",
    courses: [
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹5,000/Yr",
        eligibility: "Class 10th / HSLC with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 40
      },
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹5,000/Yr",
        eligibility: "Class 10th / HSLC with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "Diploma in Electrical & Electronics Engineering",
        duration: "3 Years",
        fees: "₹5,000/Yr",
        eligibility: "Class 10th / HSLC with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "Diploma in Automobile Engineering",
        duration: "3 Years",
        fees: "₹5,000/Yr",
        eligibility: "Class 10th / HSLC with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ]
  },
  2066: {
    name: "Government Polytechnic Kohima (GPK)",
    shortName: "Govt Polytechnic Kohima",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://www.gpknagaland.org",
    phone: "0370-2244018",
    address: "Below ATI, Kimho, Kohima, Nagaland - 797001",
    location: "Kohima",
    state: "Nagaland",
    fees: "₹5,000/Yr",
    affiliation: "State Council for Technical Education (SCTE), Nagaland & AICTE",
    about: "Government Polytechnic Kohima (GPK), established in 1994 by the Government of Nagaland under the Directorate of Technical Education, is an AICTE-approved premier public polytechnic in the state capital, offering subsidized diploma programs in computer engineering, modern office practice, and fashion technology.",
    courses: [
      {
        title: "Diploma in Computer Engineering",
        duration: "3 Years",
        fees: "₹5,000/Yr",
        eligibility: "Class 10th / HSLC with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "Diploma in Modern Office Practice (MOP)",
        duration: "3 Years",
        fees: "₹5,000/Yr",
        eligibility: "Class 10th / HSLC passed",
        type: "MANAGEMENT",
        intake: 30
      },
      {
        title: "Diploma in Fashion Technology",
        duration: "3 Years",
        fees: "₹5,000/Yr",
        eligibility: "Class 10th / HSLC passed",
        type: "APPLIED ARTS AND CRAFTS",
        intake: 30
      }
    ]
  }
};

// Update siteData.json
console.log('Updating siteData.json...');
const siteDataRaw = fs.readFileSync(siteDataPath, 'utf8');
const siteData = JSON.parse(siteDataRaw);
const colleges = siteData.colleges || siteData;

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

progress.verifiedColleges = 2070;
progress.last_batch_completed = 207;
progress.currentBatch = 207;
progress.lastUpdated = new Date().toISOString();

if (!progress.batches) {
  progress.batches = {};
}

progress.batches["207"] = {
  status: "verified",
  verifiedCount: 10,
  range: "2061-2070",
  ids: batchIds,
  verifiedAt: new Date().toISOString()
};

if (!progress.batchHistory) {
  progress.batchHistory = [];
}
progress.batchHistory.push({
  batch: 207,
  verifiedCount: 10,
  totalVerified: 2070,
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
const batch207Entries = batchIds.map((id, i) => {
  const c = batchUpdates[id];
  return `| ${2060 + i + 1} | ${c.name} | ${c.location} | ${c.state} | ${c.type} | [Portal](${c.website}) |`;
}).join('\n');

if (!mdContent.includes(batchUpdates[2057].name)) {
  mdContent += `\n\n### Batch 207 (Colleges 2,061–2,070)\n\n| # | College Name | City | State | Type | Website |\n|---|---|---|---|---|---|\n${batch207Entries}\n`;
  fs.writeFileSync(allVerifiedMdPath, mdContent, 'utf8');
}

console.log('Batch 207 verification successfully completed!');

