const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const progressPath = path.join(__dirname, '../reports/verification/progress.json');
const allVerifiedJsonPath = path.join(__dirname, '../reports/verification/all_verified_colleges.json');
const allVerifiedMdPath = path.join(__dirname, '../reports/verification/all_verified_colleges.md');

const batchUpdates = {
  2077: {
    name: "SRM University Sikkim, Gangtok",
    shortName: "SRM University Sikkim",
    type: "Private",
    ownership: "Private (State Private University)",
    website: "https://srmus.ac.in",
    phone: "03592-231666",
    address: "5th Mile, Tadong, Gangtok, East Sikkim, Sikkim - 737102",
    location: "East Sikkim",
    state: "Sikkim",
    fees: "₹85,000/Yr",
    affiliation: "UGC Recognized Private University (Sikkim Act No. 8 of 2013)",
    about: "SRM University Sikkim, established in 2013 by the SRM Trust under the Sikkim SRM University Act, is a recognized private university offering quality multidisciplinary education in computer applications, management, hospitality, sciences, and humanities.",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹85,000/Yr",
        eligibility: "10+2 with Mathematics / Computer with minimum 50%",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹75,000/Yr",
        eligibility: "10+2 in any stream with minimum 50%",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "Master of Computer Applications (MCA)",
        duration: "2 Years",
        fees: "₹90,000/Yr",
        eligibility: "BCA / B.Sc (IT/CS) with minimum 50%",
        type: "COMPUTER APPLICATIONS",
        intake: 30
      },
      {
        title: "Bachelor of Commerce (B.Com)",
        duration: "3 Years",
        fees: "₹50,000/Yr",
        eligibility: "10+2 in Commerce stream",
        type: "COMMERCE",
        intake: 60
      }
    ]
  },
  2078: {
    name: "CIPET: Centre for Skilling and Technical Support (CSTS), Agartala",
    shortName: "CIPET CSTS Agartala",
    type: "Public/Government (Autonomous Central Government Institute)",
    ownership: "Public/Government",
    website: "https://www.cipet.gov.in/centres/cipet-agartala/",
    phone: "0381-2374094",
    address: "Rubber Park, Bodhjungnagar, Sub-Division Mohanpur, Agartala, West Tripura, Tripura - 799008",
    location: "West Tripura",
    state: "Tripura",
    fees: "₹28,000/Yr",
    affiliation: "Department of Chemicals & Petrochemicals, Ministry of Chemicals & Fertilizers, Government of India & AICTE",
    about: "CIPET: CSTS Agartala, established in 2017 by the Ministry of Chemicals and Fertilizers, Government of India with the Government of Tripura, is an autonomous central government premier technical institution dedicated to plastics engineering, mold design, and petrochemical testing.",
    courses: [
      {
        title: "Diploma in Plastics Technology (DPT)",
        duration: "3 Years",
        fees: "₹28,000/Yr",
        eligibility: "Class 10th / Madhyamik with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Plastics Mould Technology (DPMT)",
        duration: "3 Years",
        fees: "₹28,000/Yr",
        eligibility: "Class 10th / Madhyamik with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Post Graduate Diploma in Plastics Processing & Testing (PGD-PPT)",
        duration: "1.5 Years",
        fees: "₹30,000/Yr",
        eligibility: "3-year Degree in Science with Chemistry",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ]
  },
  2079: {
    name: "Tripura University, Suryamaninagar, Agartala",
    shortName: "Tripura University",
    type: "Public/Government (Central University)",
    ownership: "Public/Government",
    website: "https://www.tripurauniv.ac.in",
    phone: "0381-2374801",
    address: "Suryamaninagar, Agartala, West Tripura, Tripura - 799022",
    location: "West Tripura",
    state: "Tripura",
    fees: "₹40,000/Yr",
    affiliation: "Central University established by Tripura University Act 2006, NAAC 'B' Grade",
    about: "Tripura University, converted into a Central University in 2007 by an Act of Parliament, is the premier apex institution of higher learning in Tripura, offering comprehensive postgraduate, undergraduate engineering, and doctoral education across arts, sciences, IT, and management.",
    courses: [
      {
        title: "B.Tech in Electronics & Communication Engineering",
        duration: "4 Years",
        fees: "₹40,000/Yr",
        eligibility: "10+2 with PCM + JEE Main / TUET",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Electrical Engineering",
        duration: "4 Years",
        fees: "₹40,000/Yr",
        eligibility: "10+2 with PCM + JEE Main / TUET",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Master of Business Administration (MBA)",
        duration: "2 Years",
        fees: "₹45,000/Yr",
        eligibility: "Graduation with minimum 50% + CAT/MAT/CUET-PG",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "Master of Computer Applications (MCA)",
        duration: "2 Years",
        fees: "₹35,000/Yr",
        eligibility: "BCA / B.Sc (IT/CS) with Mathematics + CUET-PG",
        type: "COMPUTER APPLICATIONS",
        intake: 40
      }
    ]
  },
  2080: {
    name: "TTAADC Polytechnic Institute, Khumulwng",
    shortName: "TTAADC Polytechnic Khumulwng",
    type: "Public/Government (Statutory Autonomous District Council)",
    ownership: "Public/Government",
    website: "http://www.tpikhumulwng.edu.in",
    phone: "0381-2342501",
    address: "Khumulwng, Radhapur, West Tripura, Tripura - 799035",
    location: "West Tripura",
    state: "Tripura",
    fees: "₹5,000/Yr",
    affiliation: "Tripura Tribal Areas Autonomous District Council (Sixth Schedule of Constitution) & AICTE",
    about: "TTAADC Polytechnic Institute Khumulwng, established in 2012 by the Tripura Tribal Areas Autonomous District Council under the Sixth Schedule of the Constitution of India, is an AICTE-approved premier public technical institute providing subsidized polytechnic diploma education to indigenous tribal youth in engineering.",
    courses: [
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹5,000/Yr",
        eligibility: "Class 10th / Madhyamik with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  2081: {
    name: "National Institute of Electronics & Information Technology (NIELIT), Agartala",
    shortName: "NIELIT Agartala",
    type: "Public/Government (Autonomous Central Government Institute)",
    ownership: "Public/Government",
    website: "https://nielit.gov.in/agartala/",
    phone: "0381-2350009",
    address: "Directorate of IT Campus, ITI Road, Indranagar, Agartala, West Tripura, Tripura - 799006",
    location: "West Tripura",
    state: "Tripura",
    fees: "₹45,000/Yr",
    affiliation: "Ministry of Electronics and Information Technology (MeitY), Government of India / Tripura University",
    about: "National Institute of Electronics & Information Technology (NIELIT) Agartala, established in 2009 under the Ministry of Electronics & IT (MeitY), Government of India, is an autonomous premier central scientific institute offering formal polytechnic diploma and professional certification in computer science and electronics.",
    courses: [
      {
        title: "Diploma in Computer Science & Technology",
        duration: "3 Years",
        fees: "₹25,000/Yr",
        eligibility: "Class 10th / Madhyamik with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Electronics & Telecommunication Engineering",
        duration: "3 Years",
        fees: "₹25,000/Yr",
        eligibility: "Class 10th / Madhyamik with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹45,000/Yr",
        eligibility: "10+2 with Mathematics / Computer Studies",
        type: "COMPUTER APPLICATIONS",
        intake: 40
      }
    ]
  },
  2082: {
    name: "Gomati District Polytechnic, Fulkumari, Udaipur",
    shortName: "Gomati District Polytechnic",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://gomati.nic.in/",
    phone: "03821-222018",
    address: "Fulkumari, Udaipur, Gomati District, Tripura - 799114",
    location: "Gomati",
    state: "Tripura",
    fees: "₹5,000/Yr",
    affiliation: "Directorate of Higher Education, Government of Tripura & AICTE",
    about: "Gomati District Polytechnic Fulkumari Udaipur, established in 2013 by the Government of Tripura under the Directorate of Higher Education, is an AICTE-approved public technical institute offering subsidized 3-year diploma engineering programs across civil, electrical, and computer science disciplines.",
    courses: [
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹5,000/Yr",
        eligibility: "Class 10th / Madhyamik with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹5,000/Yr",
        eligibility: "Class 10th / Madhyamik with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Computer Science & Engineering",
        duration: "3 Years",
        fees: "₹5,000/Yr",
        eligibility: "Class 10th / Madhyamik with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  2083: {
    name: "Dhalai District Polytechnic, Ambassa",
    shortName: "Dhalai District Polytechnic",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "http://www.ddptripura.nic.in",
    phone: "03826-267015",
    address: "Kulai, Ambassa, Dhalai District, Tripura - 799204",
    location: "Dhalai",
    state: "Tripura",
    fees: "₹5,000/Yr",
    affiliation: "Directorate of Higher Education, Government of Tripura & AICTE",
    about: "Dhalai District Polytechnic Ambassa, established in 2014 by the Directorate of Higher Education, Government of Tripura, is an AICTE-approved state polytechnic institute located in central Tripura, providing subsidized technical diploma education in Civil and Electrical Engineering.",
    courses: [
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹5,000/Yr",
        eligibility: "Class 10th / Madhyamik with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹5,000/Yr",
        eligibility: "Class 10th / Madhyamik with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  2084: {
    name: "Techno College of Engineering Agartala (TCEA)",
    shortName: "Techno College Agartala",
    type: "Private",
    ownership: "Private",
    website: "https://tiaedu.org",
    phone: "0381-2370281",
    address: "Maheshkhala, Anandanagar, Agartala, West Tripura, Tripura - 799004",
    location: "West Tripura",
    state: "Tripura",
    fees: "₹80,000/Yr",
    affiliation: "Tripura University (Central University) & AICTE",
    about: "Techno College of Engineering Agartala (TCEA), established in 2014 by the Techno India Group in public-private partnership with the Government of Tripura, is an AICTE-approved engineering college affiliated to Tripura University, offering B.Tech degrees in computer science, civil, electrical, and mechanical engineering.",
    courses: [
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹80,000/Yr",
        eligibility: "10+2 with PCM minimum 45% + TBJEE / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹75,000/Yr",
        eligibility: "10+2 with PCM minimum 45% + TBJEE / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Electrical Engineering",
        duration: "4 Years",
        fees: "₹75,000/Yr",
        eligibility: "10+2 with PCM minimum 45% + TBJEE / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹75,000/Yr",
        eligibility: "10+2 with PCM minimum 45% + TBJEE / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  2085: {
    name: "North Tripura District Polytechnic, Dharmanagar",
    shortName: "North Tripura Polytechnic",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "http://www.ntdpdharmanagar.ac.in",
    phone: "03822-234055",
    address: "Bagbassa, Dharmanagar, North Tripura District, Tripura - 799253",
    location: "North Tripura",
    state: "Tripura",
    fees: "₹5,000/Yr",
    affiliation: "Directorate of Higher Education, Government of Tripura & AICTE",
    about: "North Tripura District Polytechnic Dharmanagar, established in 2013 by the Government of Tripura under the Directorate of Higher Education, is an AICTE-approved public technical institute delivering subsidized 3-year diploma education in mechanical, civil, and electrical engineering.",
    courses: [
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹5,000/Yr",
        eligibility: "Class 10th / Madhyamik with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹5,000/Yr",
        eligibility: "Class 10th / Madhyamik with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹5,000/Yr",
        eligibility: "Class 10th / Madhyamik with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  2086: {
    name: "Women's Polytechnic, Hapania, Agartala",
    shortName: "Women's Polytechnic Agartala",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://wptripura.nic.in",
    phone: "0381-2374176",
    address: "Hapania, P.O. Amtali, Agartala, West Tripura, Tripura - 799130",
    location: "West Tripura",
    state: "Tripura",
    fees: "₹5,000/Yr",
    affiliation: "Directorate of Higher Education, Government of Tripura & AICTE",
    about: "Women's Polytechnic Hapania Agartala, established in 2003 by the Government of Tripura, is the state's apex public polytechnic exclusively for women, offering AICTE-approved technical diplomas in Information Technology, Computer Science & Technology, Medical Lab Technology, and Fashion Technology.",
    courses: [
      {
        title: "Diploma in Information Technology",
        duration: "3 Years",
        fees: "₹5,000/Yr",
        eligibility: "Class 10th / Madhyamik with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 40
      },
      {
        title: "Diploma in Computer Science & Technology",
        duration: "3 Years",
        fees: "₹5,000/Yr",
        eligibility: "Class 10th / Madhyamik with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 40
      },
      {
        title: "Diploma in Medical Lab Technology",
        duration: "3 Years",
        fees: "₹5,000/Yr",
        eligibility: "Class 10th / Madhyamik with Science",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "Diploma in Fashion Technology",
        duration: "3 Years",
        fees: "₹5,000/Yr",
        eligibility: "Class 10th / Madhyamik passed",
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

progress.verifiedColleges = 2090;
progress.last_batch_completed = 209;
progress.currentBatch = 209;
progress.lastUpdated = new Date().toISOString();

if (!progress.batches) {
  progress.batches = {};
}

progress.batches["209"] = {
  status: "verified",
  verifiedCount: 10,
  range: "2081-2090",
  ids: batchIds,
  verifiedAt: new Date().toISOString()
};

if (!progress.batchHistory) {
  progress.batchHistory = [];
}
progress.batchHistory.push({
  batch: 209,
  verifiedCount: 10,
  totalVerified: 2090,
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
const batch209Entries = batchIds.map((id, i) => {
  const c = batchUpdates[id];
  return `| ${2080 + i + 1} | ${c.name} | ${c.location} | ${c.state} | ${c.type} | [Portal](${c.website}) |`;
}).join('\n');

if (!mdContent.includes(batchUpdates[2077].name)) {
  mdContent += `\n\n### Batch 209 (Colleges 2,081–2,090)\n\n| # | College Name | City | State | Type | Website |\n|---|---|---|---|---|---|\n${batch209Entries}\n`;
  fs.writeFileSync(allVerifiedMdPath, mdContent, 'utf8');
}

console.log('Batch 209 verification successfully completed!');

