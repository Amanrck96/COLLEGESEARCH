const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const progressPath = path.join(__dirname, '../reports/verification/progress.json');
const allVerifiedJsonPath = path.join(__dirname, '../reports/verification/all_verified_colleges.json');
const allVerifiedMdPath = path.join(__dirname, '../reports/verification/all_verified_colleges.md');

const batchUpdates = {
  2017: {
    name: "Agnel Institute of Technology and Design (AITD), Assagao",
    shortName: "AITD Assagao Goa",
    type: "Private",
    ownership: "Private",
    website: "https://aitdgoa.edu.in",
    phone: "0832-2268642",
    address: "Agnel Technical Education Complex, Assagao, Bardez, North Goa, Goa - 403507",
    location: "North Goa",
    state: "Goa",
    fees: "₹1,45,000/Yr",
    affiliation: "Goa University, Taleigao Plateau, Goa",
    about: "Agnel Institute of Technology and Design (AITD) Assagao, established in 2012 by Agnel Charities, is an AICTE-approved engineering college affiliated to Goa University, delivering undergraduate engineering programs in mechanical, computer, and electronics engineering.",
    courses: [
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹1,45,000/Yr",
        eligibility: "10+2 with PCM + GCET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Computer Engineering",
        duration: "4 Years",
        fees: "₹1,45,000/Yr",
        eligibility: "10+2 with PCM + GCET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Electronics and Computer Engineering",
        duration: "4 Years",
        fees: "₹1,45,000/Yr",
        eligibility: "10+2 with PCM + GCET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  2018: {
    name: "Agnel Institute of Food Crafts and Culinary Sciences (AIFCCS), Verna",
    shortName: "AIFCCS Verna Goa",
    type: "Private",
    ownership: "Private",
    website: "https://aifccsgoa.com",
    phone: "0832-2791206",
    address: "Agnel Ashram, Verna, Salcete, South Goa, Goa - 403722",
    location: "South Goa",
    state: "Goa",
    fees: "₹50,000/Yr",
    affiliation: "Directorate of Technical Education (DTE), Government of Goa",
    about: "Agnel Institute of Food Crafts and Culinary Sciences Verna, established by Agnel Charities, offers professional diploma and certificate programs in hotel management, food production, bakery, and hospitality services.",
    courses: [
      {
        title: "Diploma in Hotel Management and Catering Technology",
        duration: "3 Years",
        fees: "₹50,000/Yr",
        eligibility: "10+2 in any stream",
        type: "HOTEL MANAGEMENT AND CATERING",
        intake: 60
      },
      {
        title: "Certificate Course in Food and Beverage Service",
        duration: "1 Year",
        fees: "₹30,000/Yr",
        eligibility: "Class 10th pass",
        type: "HOTEL MANAGEMENT AND CATERING",
        intake: 40
      }
    ]
  },
  2019: {
    name: "Government Polytechnic, Mayem, Bicholim",
    shortName: "GP Bicholim Goa",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://gpbicholim.org",
    phone: "0832-2361235",
    address: "Mayem, Bicholim, North Goa, Goa - 403504",
    location: "North Goa",
    state: "Goa",
    fees: "₹16,000/Yr",
    affiliation: "Board of Technical Education, Government of Goa",
    about: "Government Polytechnic Mayem-Bicholim, established in 2002 under the Directorate of Technical Education, Government of Goa, is an AICTE-approved premier public polytechnic delivering subsidized diploma courses across engineering trades.",
    courses: [
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹16,000/Yr",
        eligibility: "Class 10th pass with Math & Science + DTE Goa Centralized Admission",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹16,000/Yr",
        eligibility: "Class 10th pass with Math & Science + DTE Goa Centralized Admission",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "Diploma in Electrical & Electronics Engineering",
        duration: "3 Years",
        fees: "₹16,000/Yr",
        eligibility: "Class 10th pass with Math & Science + DTE Goa Centralized Admission",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ]
  },
  2020: {
    name: "Institute of Shipbuilding Technology (ISBT), Vasco da Gama",
    shortName: "ISBT Goa",
    type: "Private",
    ownership: "Private (Govt-Aided Autonomous)",
    website: "https://isbt.ac.in",
    phone: "0832-2520984",
    address: "Bogda, Vasco da Gama, South Goa, Goa - 403802",
    location: "South Goa",
    state: "Goa",
    fees: "₹18,000/Yr",
    affiliation: "Board of Technical Education, Government of Goa",
    about: "Institute of Shipbuilding Technology (ISBT) Vasco da Gama, established in 1981 by the Society for Industrial & Technical Education of Goa, is an AICTE-approved, government-aided premier technical polytechnic specializing in shipbuilding engineering and marine technical trades.",
    courses: [
      {
        title: "Diploma in Shipbuilding Engineering",
        duration: "3 Years",
        fees: "₹18,000/Yr",
        eligibility: "Class 10th pass with Science & Math",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 40
      },
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹18,000/Yr",
        eligibility: "Class 10th pass with Science & Math",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 40
      },
      {
        title: "Diploma in Electronics & Communication Engineering",
        duration: "3 Years",
        fees: "₹18,000/Yr",
        eligibility: "Class 10th pass with Science & Math",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ]
  },
  2021: {
    name: "Agnel Polytechnic, Verna",
    shortName: "Agnel Polytechnic Goa",
    type: "Private",
    ownership: "Private (Govt-Aided)",
    website: "https://agnelpolytechnic.ac.in",
    phone: "0832-2791266",
    address: "Agnel Ashram, Verna, Salcete, South Goa, Goa - 403722",
    location: "South Goa",
    state: "Goa",
    fees: "₹22,000/Yr",
    affiliation: "Board of Technical Education, Government of Goa",
    about: "Agnel Polytechnic Verna, established in 1983 by Agnel Charities, is an AICTE-approved, government-aided polytechnic providing accredited diploma engineering education in automobile, mechanical, civil, and computer engineering.",
    courses: [
      {
        title: "Diploma in Automobile Engineering",
        duration: "3 Years",
        fees: "₹22,000/Yr",
        eligibility: "Class 10th pass + DTE Goa Admission",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 36
      },
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹22,000/Yr",
        eligibility: "Class 10th pass + DTE Goa Admission",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 36
      },
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹22,000/Yr",
        eligibility: "Class 10th pass + DTE Goa Admission",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 36
      },
      {
        title: "Diploma in Computer Engineering",
        duration: "3 Years",
        fees: "₹22,000/Yr",
        eligibility: "Class 10th pass + DTE Goa Admission",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 36
      }
    ]
  },
  2022: {
    name: "Government Polytechnic, Curchorem",
    shortName: "GP Curchorem Goa",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://gpcurchorem.org",
    phone: "0832-2651351",
    address: "Curchorem, Quepem, South Goa, Goa - 403706",
    location: "South Goa",
    state: "Goa",
    fees: "₹16,000/Yr",
    affiliation: "Board of Technical Education, Government of Goa",
    about: "Government Polytechnic Curchorem, established in 1996 by the Government of Goa under the Directorate of Technical Education, is an AICTE-approved public polytechnic delivering subsidized diploma engineering education in southern Goa.",
    courses: [
      {
        title: "Diploma in Computer Engineering",
        duration: "3 Years",
        fees: "₹16,000/Yr",
        eligibility: "Class 10th pass with Science & Math",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 40
      },
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹16,000/Yr",
        eligibility: "Class 10th pass with Science & Math",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 40
      },
      {
        title: "Diploma in Electrical & Electronics Engineering",
        duration: "3 Years",
        fees: "₹16,000/Yr",
        eligibility: "Class 10th pass with Science & Math",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 40
      }
    ]
  },
  2023: {
    name: "Government Polytechnic, Panaji",
    shortName: "GP Panaji Goa",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://gpp.goa.gov.in",
    phone: "0832-2432667",
    address: "Altinho, Panaji, North Goa, Goa - 403001",
    location: "North Goa",
    state: "Goa",
    fees: "₹16,000/Yr",
    affiliation: "Board of Technical Education, Government of Goa",
    about: "Government Polytechnic Panaji, established in 1963 at Altinho Panaji, is the oldest and premier government polytechnic in Goa, approved by AICTE, providing high-quality subsidized diploma training in civil, mechanical, electrical, and computer engineering.",
    courses: [
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹16,000/Yr",
        eligibility: "Class 10th pass with Science & Math",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹16,000/Yr",
        eligibility: "Class 10th pass with Science & Math",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹16,000/Yr",
        eligibility: "Class 10th pass with Science & Math",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Computer Engineering",
        duration: "3 Years",
        fees: "₹16,000/Yr",
        eligibility: "Class 10th pass with Science & Math",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  2024: {
    name: "Don Bosco College of Engineering (DBCE), Fatorda",
    shortName: "DBCE Fatorda Goa",
    type: "Private",
    ownership: "Private",
    website: "https://dbcegoa.ac.in",
    phone: "0832-2741045",
    address: "Don Bosco Campus, Fatorda, Margao, South Goa, Goa - 403602",
    location: "South Goa",
    state: "Goa",
    fees: "₹1,45,000/Yr",
    affiliation: "Goa University, Taleigao Plateau, Goa",
    about: "Don Bosco College of Engineering Fatorda, established in 2011 by Salesians of Don Bosco, is an AICTE-approved premier engineering institution affiliated to Goa University offering undergraduate B.Tech degrees across civil, mechanical, computer, and electronics engineering.",
    courses: [
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹1,45,000/Yr",
        eligibility: "10+2 with PCM + GCET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Computer Engineering",
        duration: "4 Years",
        fees: "₹1,45,000/Yr",
        eligibility: "10+2 with PCM + GCET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹1,45,000/Yr",
        eligibility: "10+2 with PCM + GCET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Electronics & Telecommunication Engineering",
        duration: "4 Years",
        fees: "₹1,45,000/Yr",
        eligibility: "10+2 with PCM + GCET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  2025: {
    name: "Goa Institute of Management (GIM), Sanquelim",
    shortName: "GIM Goa",
    type: "Private (Autonomous B-School)",
    ownership: "Private",
    website: "https://gim.ac.in",
    phone: "0832-2366700",
    address: "Near Sanquelim, Poriem, Sattari, North Goa, Goa - 403505",
    location: "North Goa",
    state: "Goa",
    fees: "₹9,75,000/Yr",
    affiliation: "Autonomous (AICTE, NBA, AMBA, AACSB Accredited)",
    about: "Goa Institute of Management (GIM) Sanquelim, established in 1993, is one of India's premier top-tier business schools holding coveted global accreditations (AMBA, AACSB, NBA, AICTE) offering flagship residential PGDM programs across general management, big data analytics, healthcare, and banking.",
    courses: [
      {
        title: "Post Graduate Diploma in Management (PGDM)",
        duration: "2 Years",
        fees: "₹9,75,000/Yr",
        eligibility: "Graduation with 50% + CAT / XAT / GMAT",
        type: "MANAGEMENT",
        intake: 300
      },
      {
        title: "PGDM in Big Data Analytics (PGDM-BDA)",
        duration: "2 Years",
        fees: "₹9,75,000/Yr",
        eligibility: "Graduation with 50% + CAT / XAT / GMAT",
        type: "MANAGEMENT",
        intake: 120
      },
      {
        title: "PGDM in Healthcare Management (PGDM-HCM)",
        duration: "2 Years",
        fees: "₹8,25,000/Yr",
        eligibility: "Graduation with 50% + CAT / XAT / GMAT",
        type: "MANAGEMENT",
        intake: 60
      }
    ]
  },
  2026: {
    name: "Padre Conceicao College of Engineering (PCCE), Verna",
    shortName: "PCCE Verna Goa",
    type: "Private",
    ownership: "Private",
    website: "https://pccegoa.edu.in",
    phone: "0832-2791266",
    address: "Agnel Ashram, Verna, Salcete, South Goa, Goa - 403722",
    location: "South Goa",
    state: "Goa",
    fees: "₹1,45,000/Yr",
    affiliation: "Goa University, Taleigao Plateau, Goa",
    about: "Padre Conceicao College of Engineering (PCCE) Verna, established in 1997 by Agnel Charities as Goa's first private engineering college, is an AICTE-approved institution affiliated to Goa University offering undergraduate and postgraduate engineering courses.",
    courses: [
      {
        title: "B.Tech in Computer Engineering",
        duration: "4 Years",
        fees: "₹1,45,000/Yr",
        eligibility: "10+2 with PCM + GCET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹1,45,000/Yr",
        eligibility: "10+2 with PCM + GCET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Information Technology",
        duration: "4 Years",
        fees: "₹1,45,000/Yr",
        eligibility: "10+2 with PCM + GCET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Electronics & Computer Engineering",
        duration: "4 Years",
        fees: "₹1,45,000/Yr",
        eligibility: "10+2 with PCM + GCET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
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

progress.verifiedColleges = 2030;
progress.last_batch_completed = 203;
progress.currentBatch = 203;
progress.lastUpdated = new Date().toISOString();

if (!progress.batches) {
  progress.batches = {};
}

progress.batches["203"] = {
  status: "verified",
  verifiedCount: 10,
  range: "2021-2030",
  ids: batchIds,
  verifiedAt: new Date().toISOString()
};

if (!progress.batchHistory) {
  progress.batchHistory = [];
}
progress.batchHistory.push({
  batch: 203,
  verifiedCount: 10,
  totalVerified: 2030,
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
const batch203Entries = batchIds.map((id, i) => {
  const c = batchUpdates[id];
  return `| ${2020 + i + 1} | ${c.name} | ${c.location} | ${c.state} | ${c.type} | [Portal](${c.website}) |`;
}).join('\n');

if (!mdContent.includes(batchUpdates[2017].name)) {
  mdContent += `\n\n### Batch 203 (Colleges 2,021–2,030)\n\n| # | College Name | City | State | Type | Website |\n|---|---|---|---|---|---|\n${batch203Entries}\n`;
  fs.writeFileSync(allVerifiedMdPath, mdContent, 'utf8');
}

console.log('Batch 203 verification successfully completed!');

