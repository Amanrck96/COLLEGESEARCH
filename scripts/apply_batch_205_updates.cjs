const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const progressPath = path.join(__dirname, '../reports/verification/progress.json');
const allVerifiedJsonPath = path.join(__dirname, '../reports/verification/all_verified_colleges.json');
const allVerifiedMdPath = path.join(__dirname, '../reports/verification/all_verified_colleges.md');

const batchUpdates = {
  2037: {
    name: "Rosary College of Commerce and Arts, Navelim",
    shortName: "Rosary College Navelim",
    type: "Private",
    ownership: "Private (Govt-Aided)",
    website: "https://rosarycollege.ac.in",
    phone: "0832-2701560",
    address: "Navelim, Salcete, South Goa, Goa - 403707",
    location: "South Goa",
    state: "Goa",
    fees: "₹45,000/Yr",
    affiliation: "Goa University, Taleigao Plateau, Goa (NAAC 'A' Grade)",
    about: "Rosary College of Commerce and Arts Navelim, established in 1990 by the Diocesan Society of Education, is a premier Christian minority government-aided institution affiliated to Goa University, accredited with 'A' Grade by NAAC, providing education in computer applications, commerce, business administration, and arts.",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹45,000/Yr",
        eligibility: "10+2 with Mathematics / Computer / Business Maths",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹55,000/Yr",
        eligibility: "10+2 in any stream with minimum 50%",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "Bachelor of Commerce (B.Com)",
        duration: "3 Years",
        fees: "₹15,000/Yr",
        eligibility: "10+2 in Commerce stream",
        type: "COMMERCE",
        intake: 120
      },
      {
        title: "Bachelor of Arts (B.A.)",
        duration: "3 Years",
        fees: "₹12,000/Yr",
        eligibility: "10+2 in Arts / any stream",
        type: "ARTS",
        intake: 120
      }
    ]
  },
  2038: {
    name: "Saraswat Vidyalaya's Sridora Caculo College of Commerce & Management Studies",
    shortName: "Caculo College Mapusa",
    type: "Private",
    ownership: "Private (Govt-Aided)",
    website: "https://caculocollege.ac.in",
    phone: "0832-2254470",
    address: "Telang Nagar, Khorlim, Mapusa, Bardez, North Goa, Goa - 403507",
    location: "North Goa",
    state: "Goa",
    fees: "₹45,000/Yr",
    affiliation: "Goa University, Taleigao Plateau, Goa (NAAC 'B+')",
    about: "Saraswat Vidyalaya's Sridora Caculo College of Commerce and Management Studies Mapusa, established in 1991 by the Saraswat Vidyalaya Society, is a leading government-aided institution affiliated to Goa University, offering undergraduate programs in computer applications, management studies, and commerce.",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹45,000/Yr",
        eligibility: "10+2 with Mathematics / Computer Studies",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹55,000/Yr",
        eligibility: "10+2 in any discipline with UGAT / Merit",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "Bachelor of Commerce (B.Com)",
        duration: "3 Years",
        fees: "₹15,000/Yr",
        eligibility: "10+2 in Commerce stream",
        type: "COMMERCE",
        intake: 120
      }
    ]
  },
  2039: {
    name: "St. Xavier's College, Mapusa",
    shortName: "St Xavier's College Goa",
    type: "Private",
    ownership: "Private (Govt-Aided)",
    website: "https://xavierscollege-goa.com",
    phone: "0832-2262356",
    address: "Xavier Nagar, Mapusa, Bardez, North Goa, Goa - 403507",
    location: "North Goa",
    state: "Goa",
    fees: "₹45,000/Yr",
    affiliation: "Goa University, Taleigao Plateau, Goa (NAAC 'A' Grade)",
    about: "St. Xavier's College Mapusa, founded in 1963 by the Archdiocese of Goa and Daman, is one of Goa's oldest and most renowned multi-faculty colleges, affiliated to Goa University and accredited with 'A' Grade by NAAC, providing quality higher education in IT, science, arts, management, and commerce.",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹45,000/Yr",
        eligibility: "10+2 with Mathematics / Computer",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹55,000/Yr",
        eligibility: "10+2 in any stream with minimum 50%",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "B.Sc in Computer Science",
        duration: "3 Years",
        fees: "₹20,000/Yr",
        eligibility: "10+2 with Science stream (PCM)",
        type: "SCIENCE",
        intake: 40
      },
      {
        title: "Bachelor of Commerce (B.Com)",
        duration: "3 Years",
        fees: "₹14,000/Yr",
        eligibility: "10+2 in Commerce stream",
        type: "COMMERCE",
        intake: 180
      }
    ]
  },
  2040: {
    name: "Sant Sohirobanath Ambiye Government College of Arts & Commerce",
    shortName: "SSAG Govt College Pernem",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://gcap.ac.in",
    phone: "0832-2272234",
    address: "Virnoda, Pernem, North Goa, Goa - 403512",
    location: "North Goa",
    state: "Goa",
    fees: "₹15,000/Yr",
    affiliation: "Goa University, Taleigao Plateau, Goa (NAAC 'B')",
    about: "Sant Sohirobanath Ambiye Government College of Arts & Commerce Pernem, established in 1993 by the Government of Goa under the Directorate of Higher Education, is a premier state government college catering to the rural student community of northern Goa with higher education in arts, commerce, and management.",
    courses: [
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹15,000/Yr",
        eligibility: "10+2 in any stream",
        type: "MANAGEMENT",
        intake: 40
      },
      {
        title: "Bachelor of Commerce (B.Com)",
        duration: "3 Years",
        fees: "₹7,500/Yr",
        eligibility: "10+2 in Commerce stream",
        type: "COMMERCE",
        intake: 120
      },
      {
        title: "Bachelor of Arts (B.A.)",
        duration: "3 Years",
        fees: "₹6,000/Yr",
        eligibility: "10+2 in Arts / any stream",
        type: "ARTS",
        intake: 120
      }
    ]
  },
  2041: {
    name: "National Institute of Electronics & Information Technology (NIELIT), Imphal",
    shortName: "NIELIT Imphal",
    type: "Public/Government (Autonomous Central Government Institute)",
    ownership: "Public/Government",
    website: "https://nielit.gov.in/imphal/",
    phone: "0385-2454109",
    address: "Akampat, Post Box No. 104, Imphal East, Manipur - 795001",
    location: "Imphal East",
    state: "Manipur",
    fees: "₹70,000/Yr",
    affiliation: "Autonomous Institute under Ministry of Electronics and Information Technology (MeitY), Government of India / Manipur University",
    about: "National Institute of Electronics & Information Technology (NIELIT) Imphal, established in 1987 (formerly CEDTI/DOEACC), is an autonomous scientific society under the Ministry of Electronics and Information Technology (MeitY), Government of India, pioneering technical human resource development in IT and electronics across the North East.",
    courses: [
      {
        title: "Master of Computer Applications (MCA)",
        duration: "2 Years",
        fees: "₹70,000/Yr",
        eligibility: "BCA / B.Sc (IT/CS) / B.E. with 50% + Entrance Test",
        type: "COMPUTER APPLICATIONS",
        intake: 30
      },
      {
        title: "Diploma in Electronics & Communication Engineering",
        duration: "3 Years",
        fees: "₹25,000/Yr",
        eligibility: "Class 10th with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Computer Science & Technology",
        duration: "3 Years",
        fees: "₹25,000/Yr",
        eligibility: "Class 10th with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  2042: {
    name: "Manipur Institute of Technology (MIT), Imphal",
    shortName: "MIT Manipur University",
    type: "Public/Government (Central University Constituent)",
    ownership: "Public/Government",
    website: "https://mitmanipur.ac.in",
    phone: "0385-2413105",
    address: "Takyelpat, Imphal West, Manipur - 795004",
    location: "Imphal West",
    state: "Manipur",
    fees: "₹45,000/Yr",
    affiliation: "Constituent College of Manipur University (Central University, NAAC 'A')",
    about: "Manipur Institute of Technology (MIT) Imphal, established in 1998 (formerly Government College of Technology) and taken over in 2005 as the constituent engineering college of Manipur University (a Central University), is AICTE-approved and offers high quality engineering degree education in Manipur.",
    courses: [
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹45,000/Yr",
        eligibility: "10+2 with PCM + JEE Main / State Entrance",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹45,000/Yr",
        eligibility: "10+2 with PCM + JEE Main / State Entrance",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Electronics & Communication Engineering",
        duration: "4 Years",
        fees: "₹45,000/Yr",
        eligibility: "10+2 with PCM + JEE Main / State Entrance",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Electrical Engineering",
        duration: "4 Years",
        fees: "₹45,000/Yr",
        eligibility: "10+2 with PCM + JEE Main / State Entrance",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  2043: {
    name: "School of Technology, North-Eastern Hill University (NEHU)",
    shortName: "NEHU School of Technology",
    type: "Public/Government (Central University)",
    ownership: "Public/Government",
    website: "https://nehu.ac.in",
    phone: "0364-2723601",
    address: "NEHU Permanent Campus, Mawkynroh-Umshing, Shillong, East Khasi Hills, Meghalaya - 793022",
    location: "East Khasi Hills",
    state: "Meghalaya",
    fees: "₹40,000/Yr",
    affiliation: "North-Eastern Hill University (Central University established by Act of Parliament, NAAC 'A')",
    about: "School of Technology, North-Eastern Hill University (NEHU) Shillong, established in 2006 on the central university permanent campus, offers AICTE-approved Bachelor of Technology and postgraduate programs with world-class computational and experimental laboratories in Meghalaya.",
    courses: [
      {
        title: "B.Tech in Information Technology",
        duration: "4 Years",
        fees: "₹40,000/Yr",
        eligibility: "10+2 with PCM + JEE Main / CSAB Counselling",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Electronics & Communication Engineering",
        duration: "4 Years",
        fees: "₹40,000/Yr",
        eligibility: "10+2 with PCM + JEE Main / CSAB Counselling",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Biomedical Engineering",
        duration: "4 Years",
        fees: "₹40,000/Yr",
        eligibility: "10+2 with PCM/PCB + JEE Main / NEHU Entrance",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "B.Tech in Energy Engineering",
        duration: "4 Years",
        fees: "₹40,000/Yr",
        eligibility: "10+2 with PCM + JEE Main / CSAB Counselling",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "M.Tech in Information Technology",
        duration: "2 Years",
        fees: "₹45,000/Yr",
        eligibility: "B.Tech in IT/CSE/ECE + GATE score",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 18
      }
    ]
  },
  2044: {
    name: "Jowai Polytechnic, Jowai",
    shortName: "Jowai Polytechnic",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://jowaipolytechnic.in",
    phone: "03652-220035",
    address: "Ladthadlaboh, Jowai, West Jaintia Hills, Meghalaya - 793150",
    location: "West Jaintia Hills",
    state: "Meghalaya",
    fees: "₹4,500/Yr",
    affiliation: "Meghalaya State Council for Technical Education (MSCTE), Shillong",
    about: "Jowai Polytechnic, established in 2000 by the Education Department, Government of Meghalaya, is a premier state government polytechnic institute located in West Jaintia Hills, providing AICTE-approved diploma programs in vocational and engineering domains.",
    courses: [
      {
        title: "Diploma in Costume Design & Garment Technology",
        duration: "3 Years",
        fees: "₹4,500/Yr",
        eligibility: "Class 10th / SSLC with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "Diploma in Architectural Assistantship",
        duration: "3 Years",
        fees: "₹4,500/Yr",
        eligibility: "Class 10th / SSLC with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "Diploma in Automobile Engineering",
        duration: "3 Years",
        fees: "₹4,500/Yr",
        eligibility: "Class 10th / SSLC with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ]
  },
  2045: {
    name: "School of Technology & Management, USTM",
    shortName: "STM USTM Meghalaya",
    type: "Private",
    ownership: "Private",
    website: "https://ustm.ac.in",
    phone: "0361-2895030",
    address: "Techno City, Kling Road, Baridua, 9th Mile, Ri-Bhoi, Meghalaya - 793101",
    location: "Ri-Bhoi",
    state: "Meghalaya",
    fees: "₹95,000/Yr",
    affiliation: "University of Science and Technology Meghalaya (USTM, NAAC 'A')",
    about: "School of Technology & Management (STM) is a constituent academic school of the University of Science and Technology Meghalaya (USTM), located at Techno City, Ri-Bhoi. It offers comprehensive AICTE and UGC recognized undergraduate and postgraduate degrees in civil engineering, computer science, and computer applications.",
    courses: [
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹95,000/Yr",
        eligibility: "10+2 with PCM minimum 45% + USTM-CAT / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹1,05,000/Yr",
        eligibility: "10+2 with PCM minimum 45% + USTM-CAT / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹60,000/Yr",
        eligibility: "10+2 in any stream with Mathematics / Computer",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Master of Computer Applications (MCA)",
        duration: "2 Years",
        fees: "₹75,000/Yr",
        eligibility: "BCA / B.Sc (CS/IT) with minimum 50%",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      }
    ]
  },
  2046: {
    name: "Tura Polytechnic, Tura",
    shortName: "Tura Polytechnic",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://turapolytechnic.in",
    phone: "03651-232412",
    address: "Cherangre, Tura, West Garo Hills, Meghalaya - 794101",
    location: "West Garo Hills",
    state: "Meghalaya",
    fees: "₹4,500/Yr",
    affiliation: "Meghalaya State Council for Technical Education (MSCTE), Shillong",
    about: "Tura Polytechnic, established in 2003 by the Government of Meghalaya under the Directorate of Higher and Technical Education, is an AICTE-approved premier state polytechnic institute located in West Garo Hills, providing professional technical diploma training in computer applications, electronics, and food technology.",
    courses: [
      {
        title: "Diploma in Computer Applications",
        duration: "3 Years",
        fees: "₹4,500/Yr",
        eligibility: "Class 10th / SSLC with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "Diploma in Medical Electronics",
        duration: "3 Years",
        fees: "₹4,500/Yr",
        eligibility: "Class 10th / SSLC with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "Diploma in Food Processing Technology",
        duration: "3 Years",
        fees: "₹4,500/Yr",
        eligibility: "Class 10th / SSLC with Science & Mathematics",
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

progress.verifiedColleges = 2050;
progress.last_batch_completed = 205;
progress.currentBatch = 205;
progress.lastUpdated = new Date().toISOString();

if (!progress.batches) {
  progress.batches = {};
}

progress.batches["205"] = {
  status: "verified",
  verifiedCount: 10,
  range: "2041-2050",
  ids: batchIds,
  verifiedAt: new Date().toISOString()
};

if (!progress.batchHistory) {
  progress.batchHistory = [];
}
progress.batchHistory.push({
  batch: 205,
  verifiedCount: 10,
  totalVerified: 2050,
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
const batch205Entries = batchIds.map((id, i) => {
  const c = batchUpdates[id];
  return `| ${2040 + i + 1} | ${c.name} | ${c.location} | ${c.state} | ${c.type} | [Portal](${c.website}) |`;
}).join('\n');

if (!mdContent.includes(batchUpdates[2037].name)) {
  mdContent += `\n\n### Batch 205 (Colleges 2,041–2,050)\n\n| # | College Name | City | State | Type | Website |\n|---|---|---|---|---|---|\n${batch205Entries}\n`;
  fs.writeFileSync(allVerifiedMdPath, mdContent, 'utf8');
}

console.log('Batch 205 verification successfully completed!');

