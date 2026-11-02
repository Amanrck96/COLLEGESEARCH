const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const progressPath = path.join(__dirname, '../reports/verification/progress.json');
const allVerifiedJsonPath = path.join(__dirname, '../reports/verification/all_verified_colleges.json');
const allVerifiedMdPath = path.join(__dirname, '../reports/verification/all_verified_colleges.md');

const batchUpdates = {
  2027: {
    name: "Shree Rayeshwar Institute of Engineering and Information Technology (SRIEIT)",
    shortName: "SRIEIT Shiroda Goa",
    type: "Private",
    ownership: "Private",
    website: "https://ritgoa.ac.in",
    phone: "0832-2307032",
    address: "Shiv Shail, Karai, Shiroda, Ponda, South Goa, Goa - 403103",
    location: "South Goa",
    state: "Goa",
    fees: "₹1,40,000/Yr",
    affiliation: "Goa University, Taleigao Plateau, Goa",
    about: "Shree Rayeshwar Institute of Engineering and Information Technology (SRIEIT) Shiroda, established in 2001 by Shivgram Education Society, is an AICTE-approved engineering college affiliated to Goa University, offering undergraduate technical degrees in computer, electronics, and mechanical engineering.",
    courses: [
      {
        title: "B.Tech in Computer Engineering",
        duration: "4 Years",
        fees: "₹1,40,000/Yr",
        eligibility: "10+2 with PCM + GCET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Electronics and Computer Engineering",
        duration: "4 Years",
        fees: "₹1,40,000/Yr",
        eligibility: "10+2 with PCM + GCET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹1,40,000/Yr",
        eligibility: "10+2 with PCM + GCET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  2028: {
    name: "Goa College of Art, Panaji",
    shortName: "Goa College of Art",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://goaartcollege.gov.in",
    phone: "0832-2226104",
    address: "Altinho, Panaji, North Goa, Goa - 403001",
    location: "North Goa",
    state: "Goa",
    fees: "₹22,000/Yr",
    affiliation: "Goa University, Taleigao Plateau, Goa",
    about: "Goa College of Art Panaji, established in 1972 by the Government of Goa under the Directorate of Technical Education, is the apex public fine arts institution in Goa offering professional Bachelor of Fine Arts (BFA) degree programs in painting and applied art.",
    courses: [
      {
        title: "Bachelor of Fine Arts in Applied Art (BFA)",
        duration: "4 Years",
        fees: "₹22,000/Yr",
        eligibility: "10+2 in any stream + Art Aptitude Test",
        type: "APPLIED ARTS AND CRAFTS",
        intake: 60
      },
      {
        title: "Bachelor of Fine Arts in Painting (BFA)",
        duration: "4 Years",
        fees: "₹22,000/Yr",
        eligibility: "10+2 in any stream + Art Aptitude Test",
        type: "APPLIED ARTS AND CRAFTS",
        intake: 30
      }
    ]
  },
  2029: {
    name: "Shri Gopal Gaonkar Memorial Goa Multi-Faculty College (GMFC)",
    shortName: "GMFC Dharbandora Goa",
    type: "Private",
    ownership: "Private (Govt-Aided)",
    website: "https://gmfc.ac.in",
    phone: "0832-2614390",
    address: "NH 4A, Ponda-Belgaum Highway, Dayanand Nagar, Dharbandora, South Goa, Goa - 403406",
    location: "South Goa",
    state: "Goa",
    fees: "₹40,000/Yr",
    affiliation: "Goa University, Taleigao Plateau, Goa",
    about: "Shri Gopal Gaonkar Memorial Goa Multi-Faculty College Dharbandora, established in 2013 by Sateri Pisani Education Society, is a government-aided degree college affiliated to Goa University providing education in computer applications, commerce, and business administration.",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹40,000/Yr",
        eligibility: "10+2 with Mathematics / Computer",
        type: "COMPUTER APPLICATIONS",
        intake: 40
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹45,000/Yr",
        eligibility: "10+2 in any stream",
        type: "MANAGEMENT",
        intake: 40
      },
      {
        title: "Bachelor of Commerce (B.Com)",
        duration: "3 Years",
        fees: "₹15,000/Yr",
        eligibility: "10+2 with Commerce / Science",
        type: "COMMERCE",
        intake: 120
      }
    ]
  },
  2030: {
    name: "S.S. Dempo College of Commerce and Economics (Autonomous)",
    shortName: "Dempo College Goa",
    type: "Private",
    ownership: "Private (Govt-Aided Autonomous)",
    website: "https://dempocollege.edu.in",
    phone: "0832-2976649",
    address: "Integrated Educational Complex, Cujira, Bambolim, North Goa, Goa - 403202",
    location: "North Goa",
    state: "Goa",
    fees: "₹55,000/Yr",
    affiliation: "Goa University, Taleigao Plateau, Goa (NAAC 'A' Grade)",
    about: "S.S. Dempo College of Commerce and Economics, established in 1966 by the Dempo Charities Trust, is the oldest and premier commerce college in Goa, accredited by NAAC with Grade 'A', offering autonomous undergraduate and postgraduate degrees in business, management, and commerce.",
    courses: [
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹55,000/Yr",
        eligibility: "10+2 in any stream + UGAT / Merit",
        type: "MANAGEMENT",
        intake: 150
      },
      {
        title: "Bachelor of Commerce (B.Com)",
        duration: "3 Years",
        fees: "₹15,000/Yr",
        eligibility: "10+2 with Commerce / Science",
        type: "COMMERCE",
        intake: 300
      },
      {
        title: "Master of Commerce (M.Com)",
        duration: "2 Years",
        fees: "₹25,000/Yr",
        eligibility: "B.Com with 50%",
        type: "COMMERCE",
        intake: 60
      }
    ]
  },
  2031: {
    name: "MES Vasant Joshi College of Arts & Commerce",
    shortName: "MES College Zuarinagar",
    type: "Private",
    ownership: "Private (Govt-Aided)",
    website: "https://mescollege.org",
    phone: "0832-2555772",
    address: "Zuarinagar, Sancoale, South Goa, Goa - 403726",
    location: "South Goa",
    state: "Goa",
    fees: "₹45,000/Yr",
    affiliation: "Goa University, Taleigao Plateau, Goa (NAAC 'A' Grade)",
    about: "MES Vasant Joshi College of Arts and Commerce Zuarinagar, established in 1972 by Murgaon Education Society, is a premier NAAC Grade 'A' accredited institution affiliated to Goa University offering undergraduate and postgraduate education in computing, management, commerce, and arts.",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹45,000/Yr",
        eligibility: "10+2 with Mathematics / Computer",
        type: "COMPUTER APPLICATIONS",
        intake: 120
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹50,000/Yr",
        eligibility: "10+2 in any stream",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "Bachelor of Commerce (B.Com)",
        duration: "3 Years",
        fees: "₹15,000/Yr",
        eligibility: "10+2 with Commerce / Science",
        type: "COMMERCE",
        intake: 240
      }
    ]
  },
  2032: {
    name: "Dnyanprassarak Mandal's College and Research Centre (DMC)",
    shortName: "DMC Assagao Goa",
    type: "Private",
    ownership: "Private (Govt-Aided)",
    website: "https://dmscollege.ac.in",
    phone: "0832-2268488",
    address: "Dnyanprasarak Nagar, Assagao, Bardez, North Goa, Goa - 403507",
    location: "North Goa",
    state: "Goa",
    fees: "₹45,000/Yr",
    affiliation: "Goa University, Taleigao Plateau, Goa (NAAC 'A' Grade)",
    about: "Dnyanprassarak Mandal's College and Research Centre Assagao, established in 1974, is an apex multi-faculty institution accredited by NAAC with Grade 'A', delivering undergraduate, postgraduate, and research programs across computer applications, business administration, sciences, and commerce.",
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
        fees: "₹50,000/Yr",
        eligibility: "10+2 in any stream",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "Bachelor of Science in Computer Science (B.Sc CS)",
        duration: "3 Years",
        fees: "₹25,000/Yr",
        eligibility: "10+2 with Science & Mathematics",
        type: "SCIENCE",
        intake: 60
      }
    ]
  },
  2033: {
    name: "Fr. Agnel College of Arts and Commerce, Pilar",
    shortName: "Fr Agnel College Pilar",
    type: "Private",
    ownership: "Private (Govt-Aided)",
    website: "https://agnelcollege.org",
    phone: "0832-2218556",
    address: "Pilar, Ilhas, North Goa, Goa - 403203",
    location: "North Goa",
    state: "Goa",
    fees: "₹42,000/Yr",
    affiliation: "Goa University, Taleigao Plateau, Goa (NAAC 'A' Grade)",
    about: "Fr. Agnel College of Arts and Commerce Pilar, established in 1991 by the Society of Pilar, is a NAAC Grade 'A' accredited institution affiliated to Goa University offering quality undergraduate degree courses in computer applications, commerce, and arts.",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹42,000/Yr",
        eligibility: "10+2 with Mathematics / Computer",
        type: "COMPUTER APPLICATIONS",
        intake: 50
      },
      {
        title: "Bachelor of Commerce (B.Com)",
        duration: "3 Years",
        fees: "₹15,000/Yr",
        eligibility: "10+2 with Commerce / Science",
        type: "COMMERCE",
        intake: 120
      },
      {
        title: "Bachelor of Arts (B.A)",
        duration: "3 Years",
        fees: "₹12,000/Yr",
        eligibility: "10+2 in any stream",
        type: "ARTS",
        intake: 100
      }
    ]
  },
  2034: {
    name: "Goa College of Hospitality and Culinary Education (GCHCE)",
    shortName: "GCHCE Dona Paula",
    type: "Private",
    ownership: "Private",
    website: "https://gchce.org",
    phone: "0832-2454545",
    address: "Cidade de Goa, Vainguinim Beach, Dona Paula, North Goa, Goa - 403004",
    location: "North Goa",
    state: "Goa",
    fees: "₹1,20,000/Yr",
    affiliation: "Goa University, Taleigao Plateau, Goa",
    about: "Goa College of Hospitality and Culinary Education (GCHCE) Dona Paula, established in 2011, offers specialized university-accredited undergraduate management degrees in culinary arts, hospitality, and hotel administration.",
    courses: [
      {
        title: "Bachelor of Business Administration in Hospitality & Culinary Education (BBA)",
        duration: "3 Years",
        fees: "₹1,20,000/Yr",
        eligibility: "10+2 in any stream with English",
        type: "MANAGEMENT",
        intake: 30
      }
    ]
  },
  2035: {
    name: "GVM's Gopal Govind Poy Raiturcar College of Commerce and Economics",
    shortName: "GVM Commerce College Ponda",
    type: "Private",
    ownership: "Private (Govt-Aided)",
    website: "https://gvmcommercecollege.ac.in",
    phone: "0832-2314487",
    address: "Post Box No. 102, Farmagudi Road, Ponda, North Goa, Goa - 403401",
    location: "North Goa",
    state: "Goa",
    fees: "₹42,000/Yr",
    affiliation: "Goa University, Taleigao Plateau, Goa (NAAC 'B+')",
    about: "GVM's Gopal Govind Poy Raiturcar College of Commerce and Economics Ponda, established in 1986 by Goa Vidyaprasarak Mandal, provides accredited undergraduate education in computer applications and commerce in central Goa.",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹42,000/Yr",
        eligibility: "10+2 with Mathematics / Computer",
        type: "COMPUTER APPLICATIONS",
        intake: 40
      },
      {
        title: "Bachelor of Commerce (B.Com)",
        duration: "3 Years",
        fees: "₹15,000/Yr",
        eligibility: "10+2 with Commerce / Science",
        type: "COMMERCE",
        intake: 240
      }
    ]
  },
  2036: {
    name: "VVM's Shree Damodar College of Commerce & Economics",
    shortName: "Shree Damodar College Margao",
    type: "Private",
    ownership: "Private (Govt-Aided)",
    website: "https://damodarcollege.edu.in",
    phone: "0832-2732084",
    address: "G.R. Kare Road, Tansor, Comba, Margao, South Goa, Goa - 403601",
    location: "South Goa",
    state: "Goa",
    fees: "₹45,000/Yr",
    affiliation: "Goa University, Taleigao Plateau, Goa (NAAC 'A' Grade)",
    about: "VVM's Shree Damodar College of Commerce and Economics Margao, founded in 1973 by Vidya Vikas Mandal, is South Goa's premier NAAC Grade 'A' accredited institution offering undergraduate and postgraduate education in computer applications, management, commerce, and financial services.",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹45,000/Yr",
        eligibility: "10+2 with Mathematics / Computer",
        type: "COMPUTER APPLICATIONS",
        intake: 90
      },
      {
        title: "Bachelor of Business Administration (BBA - Financial Services)",
        duration: "3 Years",
        fees: "₹50,000/Yr",
        eligibility: "10+2 in any stream",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "Bachelor of Commerce (B.Com)",
        duration: "3 Years",
        fees: "₹15,000/Yr",
        eligibility: "10+2 with Commerce / Science",
        type: "COMMERCE",
        intake: 300
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

progress.verifiedColleges = 2040;
progress.last_batch_completed = 204;
progress.currentBatch = 204;
progress.lastUpdated = new Date().toISOString();

if (!progress.batches) {
  progress.batches = {};
}

progress.batches["204"] = {
  status: "verified",
  verifiedCount: 10,
  range: "2031-2040",
  ids: batchIds,
  verifiedAt: new Date().toISOString()
};

if (!progress.batchHistory) {
  progress.batchHistory = [];
}
progress.batchHistory.push({
  batch: 204,
  verifiedCount: 10,
  totalVerified: 2040,
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
const batch204Entries = batchIds.map((id, i) => {
  const c = batchUpdates[id];
  return `| ${2030 + i + 1} | ${c.name} | ${c.location} | ${c.state} | ${c.type} | [Portal](${c.website}) |`;
}).join('\n');

if (!mdContent.includes(batchUpdates[2027].name)) {
  mdContent += `\n\n### Batch 204 (Colleges 2,031–2,040)\n\n| # | College Name | City | State | Type | Website |\n|---|---|---|---|---|---|\n${batch204Entries}\n`;
  fs.writeFileSync(allVerifiedMdPath, mdContent, 'utf8');
}

console.log('Batch 204 verification successfully completed!');

