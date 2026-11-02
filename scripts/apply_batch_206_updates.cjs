const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const progressPath = path.join(__dirname, '../reports/verification/progress.json');
const allVerifiedJsonPath = path.join(__dirname, '../reports/verification/all_verified_colleges.json');
const allVerifiedMdPath = path.join(__dirname, '../reports/verification/all_verified_colleges.md');

const batchUpdates = {
  2047: {
    name: "Shillong Polytechnic, Shillong",
    shortName: "Shillong Polytechnic",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://www.shillongpolytechnic.com",
    phone: "0364-2550186",
    address: "Mawlai Kynton Massar, Shillong, East Khasi Hills, Meghalaya - 793008",
    location: "East Khasi Hills",
    state: "Meghalaya",
    fees: "₹4,500/Yr",
    affiliation: "Meghalaya State Council for Technical Education (MSCTE), Shillong",
    about: "Shillong Polytechnic, established in 1965 by the Government of Meghalaya, is the state's pioneer technical polytechnic institute located at Mawlai Kynton Massar. Approved by AICTE, it delivers subsidized professional engineering diploma education across civil, electrical, mechanical, electronics, and computer disciplines.",
    courses: [
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹4,500/Yr",
        eligibility: "Class 10th / SSLC with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹4,500/Yr",
        eligibility: "Class 10th / SSLC with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹4,500/Yr",
        eligibility: "Class 10th / SSLC with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "Diploma in Electronics & Communication Engineering",
        duration: "3 Years",
        fees: "₹4,500/Yr",
        eligibility: "Class 10th / SSLC with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "Diploma in Computer Applications",
        duration: "3 Years",
        fees: "₹4,500/Yr",
        eligibility: "Class 10th / SSLC with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ]
  },
  2048: {
    name: "St. Anthony's College, Shillong (Post Graduate Section)",
    shortName: "St Anthony's College Shillong (PG)",
    type: "Private",
    ownership: "Private (Govt-Aided)",
    website: "https://anthonys.ac.in",
    phone: "0364-2222558",
    address: "Bomfyle Road, Shillong, East Khasi Hills, Meghalaya - 793001",
    location: "East Khasi Hills",
    state: "Meghalaya",
    fees: "₹65,000/Yr",
    affiliation: "North-Eastern Hill University (NEHU, NAAC 'A' Grade)",
    about: "St. Anthony's College Shillong, established in 1934 by the Salesians of Don Bosco, is an acclaimed government-aided Christian minority institution affiliated to NEHU. Its post-graduate department offers AICTE-approved Master of Computer Applications (MCA) training students in advanced software development and computer science.",
    courses: [
      {
        title: "Master of Computer Applications (MCA)",
        duration: "2 Years",
        fees: "₹65,000/Yr",
        eligibility: "BCA / B.Sc (CS/IT) / B.E. with Mathematics at 10+2 or graduation + Entrance Test",
        type: "COMPUTER APPLICATIONS",
        intake: 30
      },
      {
        title: "M.Sc in Biotechnology",
        duration: "2 Years",
        fees: "₹60,000/Yr",
        eligibility: "B.Sc in Biotechnology / Biological Sciences with 55%",
        type: "SCIENCE",
        intake: 20
      }
    ]
  },
  2049: {
    name: "St. Anthony's College, Shillong",
    shortName: "St Anthony's College Shillong",
    type: "Private",
    ownership: "Private (Govt-Aided)",
    website: "https://anthonys.ac.in",
    phone: "0364-2222558",
    address: "Bomfyle Road, Shillong, East Khasi Hills, Meghalaya - 793001",
    location: "East Khasi Hills",
    state: "Meghalaya",
    fees: "₹48,000/Yr",
    affiliation: "North-Eastern Hill University (NEHU, NAAC 'A' Grade)",
    about: "St. Anthony's College Shillong is a premier educational institution of the North-East, accredited with 'A' Grade by NAAC and recognized by UGC as a College with Potential for Excellence (CPE). It offers distinguished undergraduate programs in business administration, computer applications, commerce, science, and humanities.",
    courses: [
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹48,000/Yr",
        eligibility: "10+2 in any stream with minimum 50%",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹48,000/Yr",
        eligibility: "10+2 with Mathematics / Computer",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Bachelor of Commerce (B.Com)",
        duration: "3 Years",
        fees: "₹22,000/Yr",
        eligibility: "10+2 in Commerce stream",
        type: "COMMERCE",
        intake: 180
      },
      {
        title: "Bachelor of Science (B.Sc)",
        duration: "3 Years",
        fees: "₹24,000/Yr",
        eligibility: "10+2 with Science stream",
        type: "SCIENCE",
        intake: 200
      }
    ]
  },
  2050: {
    name: "Umshyrpi College, Shillong",
    shortName: "Umshyrpi College Shillong",
    type: "Private",
    ownership: "Private (Govt-Aided)",
    website: "https://www.umshyrpicollege.com",
    phone: "0364-2224795",
    address: "Laban, Shillong, East Khasi Hills, Meghalaya - 793004",
    location: "East Khasi Hills",
    state: "Meghalaya",
    fees: "₹25,000/Yr",
    affiliation: "North-Eastern Hill University (NEHU, NAAC 'B')",
    about: "Umshyrpi College Shillong, established in 1994, is a recognized government-aided minority institution affiliated to North-Eastern Hill University (NEHU). Situated at Laban, Shillong, it provides higher education in computer applications, arts, and commerce to diverse student communities across Meghalaya.",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹25,000/Yr",
        eligibility: "10+2 with Mathematics / Computer Studies",
        type: "COMPUTER APPLICATIONS",
        intake: 40
      },
      {
        title: "Bachelor of Arts (B.A.)",
        duration: "3 Years",
        fees: "₹14,000/Yr",
        eligibility: "10+2 in Arts or any stream",
        type: "ARTS",
        intake: 150
      },
      {
        title: "Bachelor of Commerce (B.Com)",
        duration: "3 Years",
        fees: "₹16,000/Yr",
        eligibility: "10+2 in Commerce stream",
        type: "COMMERCE",
        intake: 120
      }
    ]
  },
  2051: {
    name: "Shillong Government College of Engineering (SGCE)",
    shortName: "SGCE Shillong",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://sgce.eu5.org",
    phone: "0364-2550186",
    address: "Mawlai Kynton Massar, Shillong, East Khasi Hills, Meghalaya - 793008",
    location: "East Khasi Hills",
    state: "Meghalaya",
    fees: "₹30,000/Yr",
    affiliation: "North-Eastern Hill University (NEHU) & AICTE",
    about: "Shillong Government College of Engineering (SGCE), established by the Government of Meghalaya and inaugurated at Mawlai Kynton Massar, is the state's very first government engineering degree college. Affiliated with NEHU and approved by AICTE, it offers undergraduate engineering education in civil, electrical, mechanical, and mining engineering.",
    courses: [
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹30,000/Yr",
        eligibility: "10+2 with PCM + JEE Main / State Merit",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Electrical Engineering",
        duration: "4 Years",
        fees: "₹30,000/Yr",
        eligibility: "10+2 with PCM + JEE Main / State Merit",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹30,000/Yr",
        eligibility: "10+2 with PCM + JEE Main / State Merit",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Mining Engineering",
        duration: "4 Years",
        fees: "₹30,000/Yr",
        eligibility: "10+2 with PCM + JEE Main / State Merit",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ]
  },
  2052: {
    name: "Bellefonte Community College, Shillong",
    shortName: "Bellefonte College Shillong",
    type: "Private",
    ownership: "Private",
    website: "https://www.bellefontecommunitycollege.com",
    phone: "0364-2226291",
    address: "Lummawrie, Laitumkhrah, Shillong, East Khasi Hills, Meghalaya - 793003",
    location: "East Khasi Hills",
    state: "Meghalaya",
    fees: "₹28,000/Yr",
    affiliation: "North-Eastern Hill University (NEHU)",
    about: "Bellefonte Community College (also known as Bellefonte Evening College) Shillong, established in 1994, is a higher educational and community-based institution affiliated to North-Eastern Hill University, providing flexible degree courses in computer applications and arts for students and working professionals.",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹28,000/Yr",
        eligibility: "10+2 in any stream with Mathematics / Computer",
        type: "COMPUTER APPLICATIONS",
        intake: 30
      },
      {
        title: "Bachelor of Arts (B.A.)",
        duration: "3 Years",
        fees: "₹15,000/Yr",
        eligibility: "10+2 in Arts or equivalent",
        type: "ARTS",
        intake: 100
      }
    ]
  },
  2053: {
    name: "Mizoram Polytechnic, Lunglei",
    shortName: "Mizoram Polytechnic Lunglei",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://polytechlunglei.mizoram.gov.in/",
    phone: "0372-2324027",
    address: "Ramthar Veng, Lunglei, Mizoram - 796701",
    location: "Lunglei",
    state: "Mizoram",
    fees: "₹4,200/Yr",
    affiliation: "Mizoram State Council for Technical Education (MSCTE) & AICTE",
    about: "Mizoram Polytechnic Lunglei, established in 1981, is the premier and oldest government polytechnic institute in the state of Mizoram, functioning under the Department of Higher and Technical Education. It delivers AICTE-approved subsidized technical diploma education in civil, electrical, mechanical, and computer engineering.",
    courses: [
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹4,200/Yr",
        eligibility: "Class 10th / HSLC with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹4,200/Yr",
        eligibility: "Class 10th / HSLC with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹4,200/Yr",
        eligibility: "Class 10th / HSLC with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "Diploma in Computer Science & Engineering",
        duration: "3 Years",
        fees: "₹4,200/Yr",
        eligibility: "Class 10th / HSLC with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ]
  },
  2054: {
    name: "National Institute of Electronics & Information Technology (NIELIT), Aizawl",
    shortName: "NIELIT Aizawl",
    type: "Public/Government (Autonomous Central Government Institute)",
    ownership: "Public/Government",
    website: "https://nielit.gov.in/aizawl/",
    phone: "0389-2350581",
    address: "Industrial Estate, Zuangtui, Aizawl, Mizoram - 796017",
    location: "Aizawl",
    state: "Mizoram",
    fees: "₹65,000/Yr",
    affiliation: "Ministry of Electronics and Information Technology (MeitY), Government of India / Mizoram University",
    about: "National Institute of Electronics & Information Technology (NIELIT) Aizawl, established in 2001 (formerly CEDTI/DOEACC), is an autonomous scientific institute under the Ministry of Electronics & IT (MeitY), Government of India, pioneering formal higher education and technical research in MCA, BCA, and electronics across Mizoram.",
    courses: [
      {
        title: "Master of Computer Applications (MCA)",
        duration: "2 Years",
        fees: "₹65,000/Yr",
        eligibility: "BCA / B.Sc (CS/IT) / B.E. with Mathematics at 10+2 level",
        type: "COMPUTER APPLICATIONS",
        intake: 30
      },
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹45,000/Yr",
        eligibility: "10+2 with Mathematics / Computer Studies",
        type: "COMPUTER APPLICATIONS",
        intake: 40
      },
      {
        title: "Diploma in Electronics & Communication Engineering",
        duration: "3 Years",
        fees: "₹25,000/Yr",
        eligibility: "Class 10th / HSLC with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "Diploma in Computer Science & Technology",
        duration: "3 Years",
        fees: "₹25,000/Yr",
        eligibility: "Class 10th / HSLC with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ]
  },
  2055: {
    name: "Women's Polytechnic, Aizawl",
    shortName: "Women's Polytechnic Aizawl",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://womenspolytechnicaizawl.edu.in",
    phone: "0389-2361662",
    address: "Durtlang Leitan, Aizawl, Mizoram - 796025",
    location: "Aizawl",
    state: "Mizoram",
    fees: "₹4,200/Yr",
    affiliation: "Mizoram State Council for Technical Education (MSCTE) & AICTE",
    about: "Women's Polytechnic Aizawl, established in 1998 under the Department of Higher & Technical Education, Government of Mizoram, is a dedicated women's state technical institution offering AICTE-approved diploma courses in garment technology, office practice, electronics, and cosmetology.",
    courses: [
      {
        title: "Diploma in Garment Technology",
        duration: "3 Years",
        fees: "₹4,200/Yr",
        eligibility: "Class 10th / HSLC with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "Diploma in Modern Office Practice (MOP)",
        duration: "3 Years",
        fees: "₹4,200/Yr",
        eligibility: "Class 10th / HSLC passed",
        type: "MANAGEMENT",
        intake: 30
      },
      {
        title: "Diploma in Electronics & Telecommunication Engineering",
        duration: "3 Years",
        fees: "₹4,200/Yr",
        eligibility: "Class 10th / HSLC with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "Diploma in Beauty Culture & Cosmetology",
        duration: "3 Years",
        fees: "₹4,200/Yr",
        eligibility: "Class 10th / HSLC passed",
        type: "VOCATIONAL",
        intake: 30
      }
    ]
  },
  2056: {
    name: "Government Zirtiri Residential Science College (GZRSC), Aizawl",
    shortName: "GZRSC Aizawl",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://www.gzrsc.edu.in",
    phone: "0389-2340984",
    address: "Ramhlun Vengthlang, Aizawl, Mizoram - 796012",
    location: "Aizawl",
    state: "Mizoram",
    fees: "₹12,000/Yr",
    affiliation: "Mizoram University (Central University, NAAC 'A' Grade)",
    about: "Government Zirtiri Residential Science College (GZRSC) Aizawl, established in 1980 by the Government of Mizoram, is the state's apex premier government science college, accredited with 'A' Grade by NAAC. Affiliated to Mizoram University, it delivers degree education in computer applications and pure sciences.",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹12,000/Yr",
        eligibility: "10+2 with Mathematics / Computer Studies",
        type: "COMPUTER APPLICATIONS",
        intake: 30
      },
      {
        title: "Bachelor of Science (B.Sc) in Physical Sciences",
        duration: "3 Years",
        fees: "₹8,500/Yr",
        eligibility: "10+2 with Physics, Chemistry, Mathematics",
        type: "SCIENCE",
        intake: 150
      },
      {
        title: "Bachelor of Science (B.Sc) in Life Sciences & Home Science",
        duration: "3 Years",
        fees: "₹8,500/Yr",
        eligibility: "10+2 with Chemistry, Biology / Home Science",
        type: "SCIENCE",
        intake: 150
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

progress.verifiedColleges = 2060;
progress.last_batch_completed = 206;
progress.currentBatch = 206;
progress.lastUpdated = new Date().toISOString();

if (!progress.batches) {
  progress.batches = {};
}

progress.batches["206"] = {
  status: "verified",
  verifiedCount: 10,
  range: "2051-2060",
  ids: batchIds,
  verifiedAt: new Date().toISOString()
};

if (!progress.batchHistory) {
  progress.batchHistory = [];
}
progress.batchHistory.push({
  batch: 206,
  verifiedCount: 10,
  totalVerified: 2060,
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
const batch206Entries = batchIds.map((id, i) => {
  const c = batchUpdates[id];
  return `| ${2050 + i + 1} | ${c.name} | ${c.location} | ${c.state} | ${c.type} | [Portal](${c.website}) |`;
}).join('\n');

if (!mdContent.includes(batchUpdates[2047].name)) {
  mdContent += `\n\n### Batch 206 (Colleges 2,051–2,060)\n\n| # | College Name | City | State | Type | Website |\n|---|---|---|---|---|---|\n${batch206Entries}\n`;
  fs.writeFileSync(allVerifiedMdPath, mdContent, 'utf8');
}

console.log('Batch 206 verification successfully completed!');
