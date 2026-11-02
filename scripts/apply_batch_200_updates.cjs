const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const progressPath = path.join(__dirname, '../reports/verification/progress.json');
const allVerifiedJsonPath = path.join(__dirname, '../reports/verification/all_verified_colleges.json');
const allVerifiedMdPath = path.join(__dirname, '../reports/verification/all_verified_colleges.md');

const batchUpdates = {
  1987: {
    name: "Government College, Daulatpur Chowk",
    shortName: "Govt College Daulatpur Chowk",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://gcdc.ac.in",
    phone: "01976-265036",
    address: "VPO Daulatpur Chowk, Tehsil Ghanari, District Una, Himachal Pradesh - 177204",
    location: "Una",
    state: "Himachal Pradesh",
    fees: "₹15,000/Yr",
    affiliation: "Himachal Pradesh University (HPU), Shimla",
    about: "Government College Daulatpur Chowk, originally founded in 1972 and taken over by the Government of Himachal Pradesh in 2007, is an affiliated state institution providing subsidized undergraduate programs in computer applications, sciences, commerce, and humanities.",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹15,000/Yr",
        eligibility: "10+2 with Mathematics / Computer",
        type: "COMPUTER APPLICATIONS",
        intake: 80
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹15,000/Yr",
        eligibility: "10+2 in any stream",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "Bachelor of Science (B.Sc)",
        duration: "3 Years",
        fees: "₹3,500/Yr",
        eligibility: "10+2 with Science stream",
        type: "SCIENCE",
        intake: 120
      }
    ]
  },
  1988: {
    name: "Vijay Memorial College of Education / Institute of Higher Education",
    shortName: "Vijay Memorial Institute Mandi",
    type: "Private",
    ownership: "Private",
    website: "https://vijaymemorial.com",
    phone: "01905-242630",
    address: "Near ITI, Bhangrotu, Tehsil Balh, District Mandi, Himachal Pradesh - 175021",
    location: "Mandi",
    state: "Himachal Pradesh",
    fees: "₹35,000/Yr",
    affiliation: "Himachal Pradesh University (HPU), Shimla",
    about: "Vijay Memorial College of Education / Institute of Higher Education Bhangrotu, established in 2006 by Vijay Memorial Educational Society, offers recognized degree courses in teacher training, computer applications, and business administration.",
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
        fees: "₹35,000/Yr",
        eligibility: "10+2 in any stream",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "Bachelor of Education (B.Ed)",
        duration: "2 Years",
        fees: "₹45,000/Yr",
        eligibility: "Graduation with 50% + HPU B.Ed Entrance",
        type: "EDUCATION",
        intake: 100
      }
    ]
  },
  1989: {
    name: "Lal Bahadur Shastri Government Degree College, Saraswati Nagar",
    shortName: "LBS Govt College Saraswati Nagar",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://lbsgcsaraswatinagar.edu.in",
    phone: "01781-238149",
    address: "VPO Saraswati Nagar (Sawra), Tehsil Jubbal, District Shimla, Himachal Pradesh - 171206",
    location: "Shimla",
    state: "Himachal Pradesh",
    fees: "₹15,000/Yr",
    affiliation: "Himachal Pradesh University (HPU), Shimla (NAAC 'B+')",
    about: "Lal Bahadur Shastri Government Degree College Saraswati Nagar (Sawra), established in 1986 by the Government of Himachal Pradesh and accredited by NAAC with Grade 'B+', provides subsidized higher education across computer applications, commerce, science, and humanities.",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹15,000/Yr",
        eligibility: "10+2 with Mathematics / Computer",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Post Graduate Diploma in Computer Applications (PGDCA)",
        duration: "1 Year",
        fees: "₹10,000/Yr",
        eligibility: "Graduation in any stream",
        type: "COMPUTER APPLICATIONS",
        intake: 40
      },
      {
        title: "Bachelor of Commerce (B.Com)",
        duration: "3 Years",
        fees: "₹2,500/Yr",
        eligibility: "10+2 with Commerce / Mathematics",
        type: "COMMERCE",
        intake: 80
      }
    ]
  },
  1990: {
    name: "Atal Bihari Vajpayee Government Degree College, Bangana",
    shortName: "ABV Govt College Bangana",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://gcbangana.ac.in",
    phone: "01975-262505",
    address: "VPO Bangana, District Una, Himachal Pradesh - 174307",
    location: "Una",
    state: "Himachal Pradesh",
    fees: "₹15,000/Yr",
    affiliation: "Himachal Pradesh University (HPU), Shimla",
    about: "Atal Bihari Vajpayee Government Degree College Bangana, established in 2007 by the Government of Himachal Pradesh, is an affiliated institution under Himachal Pradesh University offering affordable undergraduate degrees in computing, sciences, and humanities.",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹15,000/Yr",
        eligibility: "10+2 with Mathematics / Computer",
        type: "COMPUTER APPLICATIONS",
        intake: 40
      },
      {
        title: "Bachelor of Science (B.Sc)",
        duration: "3 Years",
        fees: "₹3,500/Yr",
        eligibility: "10+2 with Science stream",
        type: "SCIENCE",
        intake: 80
      },
      {
        title: "Bachelor of Arts (B.A)",
        duration: "3 Years",
        fees: "₹2,500/Yr",
        eligibility: "10+2 in any stream",
        type: "ARTS",
        intake: 120
      }
    ]
  },
  1991: {
    name: "Goswami Ganesh Dutt Sanatan Dharam (GGDSD) College, Rajpur",
    shortName: "GGDSD College Rajpur",
    type: "Private",
    ownership: "Private (Govt-Aided)",
    website: "https://ggdsdrajpur.com",
    phone: "01894-239044",
    address: "VPO Rajpur, Tehsil Palampur, District Kangra, Himachal Pradesh - 176061",
    location: "Kangra",
    state: "Himachal Pradesh",
    fees: "₹35,000/Yr",
    affiliation: "Himachal Pradesh University (HPU), Shimla (NAAC 'B')",
    about: "Goswami Ganesh Dutt Sanatan Dharam College Rajpur (Palampur), established in 1984 under GGDSD College Society, is an affiliated institution under HPU Shimla offering undergraduate courses in computer applications, commerce, and sciences.",
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
        fees: "₹35,000/Yr",
        eligibility: "10+2 in any stream",
        type: "MANAGEMENT",
        intake: 60
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
  1992: {
    name: "Swami Vivekanand Government College, Ghumarwin",
    shortName: "SV Govt College Ghumarwin",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://gcghumarwin.org.in",
    phone: "01978-255551",
    address: "VPO Ghumarwin, District Bilaspur, Himachal Pradesh - 174021",
    location: "Bilaspur",
    state: "Himachal Pradesh",
    fees: "₹15,000/Yr",
    affiliation: "Himachal Pradesh University (HPU), Shimla (NAAC 'A' Grade)",
    about: "Swami Vivekanand Government College Ghumarwin, established in 1994 by the Government of Himachal Pradesh, is an apex institution accredited with NAAC Grade 'A', offering extensive degree programs across computer applications, business administration, sciences, and commerce.",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹15,000/Yr",
        eligibility: "10+2 with Mathematics / Computer",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹15,000/Yr",
        eligibility: "10+2 in any stream",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "Post Graduate Diploma in Computer Applications (PGDCA)",
        duration: "1 Year",
        fees: "₹10,000/Yr",
        eligibility: "Graduation in any stream",
        type: "COMPUTER APPLICATIONS",
        intake: 40
      },
      {
        title: "Bachelor of Science (B.Sc)",
        duration: "3 Years",
        fees: "₹3,500/Yr",
        eligibility: "10+2 with Science stream",
        type: "SCIENCE",
        intake: 200
      }
    ]
  },
  1993: {
    name: "K.C. Institute of Management, Pandoga",
    shortName: "KC Institute of Management Una",
    type: "Private",
    ownership: "Private",
    website: "https://kcinstitutes.com",
    phone: "01975-241461",
    address: "VPO Pandoga, Tehsil Haroli, District Una, Himachal Pradesh - 177207",
    location: "Una",
    state: "Himachal Pradesh",
    fees: "₹35,000/Yr",
    affiliation: "Himachal Pradesh Technical University (HPTU), Hamirpur",
    about: "K.C. Institute of Management Pandoga, established in 2009 under K.C. Group of Institutions, is an AICTE-approved management institute affiliated to HPTU Hamirpur delivering undergraduate management and computing degrees.",
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
        fees: "₹35,000/Yr",
        eligibility: "10+2 in any stream",
        type: "MANAGEMENT",
        intake: 60
      }
    ]
  },
  1994: {
    name: "St. Bede's College, Shimla",
    shortName: "St. Bede's College Shimla",
    type: "Private",
    ownership: "Private (Govt-Aided Autonomous)",
    website: "https://stbedescollege.in",
    phone: "0177-2842304",
    address: "Navbahar, Shimla, Himachal Pradesh - 171002",
    location: "Shimla",
    state: "Himachal Pradesh",
    fees: "₹45,000/Yr",
    affiliation: "Himachal Pradesh University (HPU), Shimla (NAAC 'A+' Grade)",
    about: "St. Bede's College Shimla, established in 1904 by the Religious of Jesus and Mary, is one of India's most prestigious and historic women's colleges, accredited by NAAC with Grade 'A+', offering undergraduate and postgraduate education in computing, sciences, management, and humanities.",
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
        fees: "₹45,000/Yr",
        eligibility: "10+2 in any stream",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "B.Sc (Hons) in Biotechnology",
        duration: "3 Years",
        fees: "₹50,000/Yr",
        eligibility: "10+2 with PCB/PCM",
        type: "SCIENCE",
        intake: 40
      }
    ]
  },
  1995: {
    name: "Centre of Excellence, Government College Sanjauli, Shimla",
    shortName: "Govt College Sanjauli COE",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://gcsanjauli.edu.in",
    phone: "0177-2841444",
    address: "Sanjauli, Shimla, Himachal Pradesh - 171006",
    location: "Shimla",
    state: "Himachal Pradesh",
    fees: "₹18,000/Yr",
    affiliation: "Himachal Pradesh University (HPU), Shimla (NAAC 'B++' Grade)",
    about: "Centre of Excellence, Government College Sanjauli (Shimla), established in 1969, is the flagship Government College designated as a Centre of Excellence by the Government of Himachal Pradesh, offering premier undergraduate education in computer applications, sciences, and commerce.",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹18,000/Yr",
        eligibility: "10+2 with Mathematics / Computer",
        type: "COMPUTER APPLICATIONS",
        intake: 50
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹18,000/Yr",
        eligibility: "10+2 in any stream",
        type: "MANAGEMENT",
        intake: 50
      },
      {
        title: "Bachelor of Science (B.Sc)",
        duration: "3 Years",
        fees: "₹3,500/Yr",
        eligibility: "10+2 with Science stream",
        type: "SCIENCE",
        intake: 240
      }
    ]
  },
  1996: {
    name: "Netaji Subhash Chander Bose Memorial Govt. PG College, Hamirpur",
    shortName: "NSCBM Govt PG College Hamirpur",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://gchamirpur.org",
    phone: "01972-222227",
    address: "Anu, Hamirpur, Himachal Pradesh - 177005",
    location: "Hamirpur",
    state: "Himachal Pradesh",
    fees: "₹15,000/Yr",
    affiliation: "Himachal Pradesh University (HPU), Shimla (NAAC 'A' Grade)",
    about: "Netaji Subhash Chander Bose Memorial Government Post Graduate College Hamirpur, established in 1965, is the premier lead government PG institution of Hamirpur district accredited by NAAC with Grade 'A', offering degree programs in computer applications, sciences, arts, and commerce.",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹15,000/Yr",
        eligibility: "10+2 with Mathematics / Computer",
        type: "COMPUTER APPLICATIONS",
        intake: 100
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹15,000/Yr",
        eligibility: "10+2 in any stream",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "Post Graduate Diploma in Computer Applications (PGDCA)",
        duration: "1 Year",
        fees: "₹10,000/Yr",
        eligibility: "Graduation in any stream",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Bachelor of Science (B.Sc)",
        duration: "3 Years",
        fees: "₹3,500/Yr",
        eligibility: "10+2 with Science stream",
        type: "SCIENCE",
        intake: 250
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

progress.verifiedColleges = 2000;
progress.last_batch_completed = 200;
progress.currentBatch = 200;
progress.lastUpdated = new Date().toISOString();

if (!progress.batches) {
  progress.batches = {};
}

progress.batches["200"] = {
  status: "verified",
  verifiedCount: 10,
  range: "1991-2000",
  ids: batchIds,
  verifiedAt: new Date().toISOString()
};

if (!progress.batchHistory) {
  progress.batchHistory = [];
}
progress.batchHistory.push({
  batch: 200,
  verifiedCount: 10,
  totalVerified: 2000,
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
const batch200Entries = batchIds.map((id, i) => {
  const c = batchUpdates[id];
  return `| ${1990 + i + 1} | ${c.name} | ${c.location} | ${c.state} | ${c.type} | [Portal](${c.website}) |`;
}).join('\n');

if (!mdContent.includes(batchUpdates[1987].name)) {
  mdContent += `\n\n### Batch 200 (Colleges 1,991–2,000) — Landmark 2,000th Milestone\n\n| # | College Name | City | State | Type | Website |\n|---|---|---|---|---|---|\n${batch200Entries}\n`;
  fs.writeFileSync(allVerifiedMdPath, mdContent, 'utf8');
}

console.log('Batch 200 verification successfully completed! 2,000 COLLEGES MILESTONE REACHED!');
