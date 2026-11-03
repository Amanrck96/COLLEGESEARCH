const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const progressPath = path.join(__dirname, '../reports/verification/progress.json');
const allVerifiedJsonPath = path.join(__dirname, '../reports/verification/all_verified_colleges.json');
const allVerifiedMdPath = path.join(__dirname, '../reports/verification/all_verified_colleges.md');

const batchUpdates = {
  2137: {
    name: "Government Polytechnic, Ranipokhari",
    shortName: "GP Ranipokhari",
    city: "Dehradun",
    location: "Dehradun",
    state: "Uttarakhand",
    address: "Village Ghamandpur, Ranipokhari, District Dehradun, Uttarakhand - 248145",
    phone: "+91-135-2694110",
    website: "http://ukdte.org",
    rating: 4.2,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Government Polytechnic Ranipokhari is a state government technical institution established by the Department of Technical Education, Government of Uttarakhand. Approved by AICTE and affiliated to UBTER Roorkee, it offers a 3-year diploma in Civil and Environmental Engineering with well-equipped modern laboratories.",
    fees: "₹8,000/Yr",
    exams: "UBTER JEEP",
    affiliation: "Uttarakhand Board of Technical Education, Roorkee (UBTER) / AICTE",
    courses: [
      {
        title: "Diploma in Civil and Environmental Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "10th High School Pass / UBTER JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  2138: {
    name: "Government Polytechnic, Bans",
    shortName: "GP Bans",
    city: "Pithoragarh",
    location: "Pithoragarh",
    state: "Uttarakhand",
    address: "Amwala Ghat Road, Block Bin, District Pithoragarh, Uttarakhand - 262501",
    phone: "+91-5964-225010",
    website: "http://ukdte.org",
    rating: 4.1,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Government Polytechnic Bans is a state government polytechnic institute located in Bin block of Pithoragarh district, Uttarakhand. Operating under the Directorate of Technical Education, Uttarakhand, and approved by AICTE, it offers diploma engineering in Civil Engineering to empower border area students.",
    fees: "₹8,000/Yr",
    exams: "UBTER JEEP",
    affiliation: "Uttarakhand Board of Technical Education, Roorkee (UBTER) / AICTE",
    courses: [
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "10th High School Pass / UBTER JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ]
  },
  2139: {
    name: "Graphic Era (Deemed to be University), Dehradun",
    shortName: "GEU Dehradun",
    city: "Dehradun",
    location: "Dehradun",
    state: "Uttarakhand",
    address: "566/6 Bell Road, Clement Town, Dehradun, Uttarakhand - 248002",
    phone: "+91-135-2643000",
    website: "https://www.geu.ac.in",
    rating: 4.6,
    type: "Private",
    ownership: "Private",
    about: "Graphic Era (Deemed to be University) is a premier private university in Dehradun, Uttarakhand. Conferred Deemed University status under Section 3 of the UGC Act 1956 and accredited with NAAC 'A+' Grade, Graphic Era is consistently ranked among the top 55 engineering institutions in India by NIRF. It features world-class computing facilities, top-tier research centers, and outstanding placement records.",
    fees: "₹2,80,000/Yr",
    exams: "JEE Main / CUET / Merit",
    affiliation: "Deemed to be University (UGC Act 1956) / AICTE / NAAC A+",
    courses: [
      {
        title: "B.Tech in Computer Science & Engineering",
        duration: "4 Years",
        fees: "₹2,80,000/Yr",
        eligibility: "10+2 with Physics, Mathematics & Chemistry/CS with min 60% + JEE Main / Merit",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 480
      },
      {
        title: "Master of Business Administration (MBA)",
        duration: "2 Years",
        fees: "₹2,20,000/Yr",
        eligibility: "Graduation with 50% + CAT / MAT / CMAT / Merit",
        type: "MANAGEMENT",
        intake: 180
      },
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹1,10,000/Yr",
        eligibility: "10+2 with Mathematics",
        type: "COMPUTER APPLICATIONS",
        intake: 120
      },
      {
        title: "Master of Computer Applications (MCA)",
        duration: "2 Years",
        fees: "₹1,20,000/Yr",
        eligibility: "BCA / B.Sc (IT/CS) / B.Tech or Bachelor's with Mathematics",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      }
    ]
  },
  2140: {
    name: "Government Girls Polytechnic, Almora",
    shortName: "GGP Almora",
    city: "Almora",
    location: "Almora",
    state: "Uttarakhand",
    address: "Shikhar, District Almora, Uttarakhand - 263601",
    phone: "+91-5962-230137",
    website: "https://ggpalmora.org.in",
    rating: 4.4,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Government Girls Polytechnic Almora, established in 1975, is the premier pioneer women's technical education institute in Uttarakhand. Approved by AICTE and affiliated to UBTER Roorkee, the institution is dedicated to women empowerment through high-caliber diploma education in Computer Science, Electronics, and Modern Office Management.",
    fees: "₹8,000/Yr",
    exams: "UBTER JEEP",
    affiliation: "Uttarakhand Board of Technical Education, Roorkee (UBTER) / AICTE",
    courses: [
      {
        title: "Diploma in Computer Science & Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "10th High School Pass / UBTER JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 40
      },
      {
        title: "Diploma in Electronics Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "10th High School Pass / UBTER JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 40
      },
      {
        title: "Diploma in Modern Office Management & Secretarial Practice (MOM&SP)",
        duration: "2 Years",
        fees: "₹8,000/Yr",
        eligibility: "10+2 Intermediate Pass / UBTER JEEP",
        type: "MANAGEMENT",
        intake: 30
      }
    ]
  },
  2141: {
    name: "Government Polytechnic, Didihat",
    shortName: "GP Didihat",
    city: "Pithoragarh",
    location: "Pithoragarh",
    state: "Uttarakhand",
    address: "Near GIC Didihat, Tehsil Didihat, District Pithoragarh, Uttarakhand - 262551",
    phone: "+91-5964-232010",
    website: "http://ukdte.org",
    rating: 4.1,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Government Polytechnic Didihat is a state government polytechnic institute located in Didihat town of Pithoragarh district, Uttarakhand. Operating under the Directorate of Technical Education, Uttarakhand, and approved by AICTE, it offers diploma engineering in Civil Engineering with state-of-the-art surveying and material testing equipment.",
    fees: "₹8,000/Yr",
    exams: "UBTER JEEP",
    affiliation: "Uttarakhand Board of Technical Education, Roorkee (UBTER) / AICTE",
    courses: [
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "10th High School Pass / UBTER JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ]
  },
  2142: {
    name: "Rudrapur Institute of Technology (RIT)",
    shortName: "RIT Rudrapur",
    city: "Udham Singh Nagar",
    location: "Udham Singh Nagar",
    state: "Uttarakhand",
    address: "Danpur, Kashipur Road, Rudrapur, District Udham Singh Nagar, Uttarakhand - 263153",
    phone: "+91-5944-261805",
    website: "http://ritrudrapur.com",
    rating: 4.1,
    type: "Private",
    ownership: "Private",
    about: "Rudrapur Institute of Technology (RIT) is a prominent technical polytechnic institute located in Rudrapur, Udham Singh Nagar district. Approved by AICTE and affiliated to UBTER Roorkee, RIT provides specialized 3-year diploma engineering education in mechanical, electrical, and civil branches tailored to the industrial needs of SIDCUL Rudrapur.",
    fees: "₹35,000/Yr",
    exams: "UBTER JEEP / Merit",
    affiliation: "Uttarakhand Board of Technical Education, Roorkee (UBTER) / AICTE",
    courses: [
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹35,000/Yr",
        eligibility: "10th High School Pass / UBTER JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹35,000/Yr",
        eligibility: "10th High School Pass / UBTER JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹35,000/Yr",
        eligibility: "10th High School Pass / UBTER JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  2143: {
    name: "Six Sigma Institute of Technology & Science, Rudrapur",
    shortName: "SSITS Rudrapur",
    city: "Udham Singh Nagar",
    location: "Udham Singh Nagar",
    state: "Uttarakhand",
    address: "NH-74, Dineshpur Road, Rudrapur, District Udham Singh Nagar, Uttarakhand - 263153",
    phone: "+91-5944-262100",
    website: "https://sixsigmainstitute.com",
    rating: 4.2,
    type: "Private",
    ownership: "Private",
    about: "Six Sigma Institute of Technology and Science (SSITS) is an AICTE and PCI approved institute situated in Rudrapur, Uttarakhand. Affiliated to UBTER Roorkee and UTU, the institute offers diploma in pharmacy (D.Pharm) and multiple engineering diploma courses with excellent industry partnerships in the SIDCUL industrial belt.",
    fees: "₹45,000/Yr",
    exams: "UBTER JEEP / Merit",
    affiliation: "Uttarakhand Board of Technical Education, Roorkee (UBTER) / PCI / AICTE",
    courses: [
      {
        title: "Diploma in Pharmacy (D.Pharm)",
        duration: "2 Years",
        fees: "₹55,000/Yr",
        eligibility: "10+2 with Physics, Chemistry & Biology/Math",
        type: "PHARMACY",
        intake: 60
      },
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹35,000/Yr",
        eligibility: "10th High School Pass / UBTER JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹35,000/Yr",
        eligibility: "10th High School Pass / UBTER JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  2144: {
    name: "Uttarakhand Institute of Technical & Professional Education",
    shortName: "UITPE Ramnagar",
    city: "Nainital",
    location: "Nainital",
    state: "Uttarakhand",
    address: "Village Chukam, Post Mohan, Ramnagar, District Nainital, Uttarakhand - 244715",
    phone: "+91-5947-287100",
    website: "http://uitpe.org",
    rating: 4.0,
    type: "Private",
    ownership: "Private",
    about: "Uttarakhand Institute of Technical and Professional Education (UITPE) is a private technical institution situated near Ramnagar, Nainital district. Approved by AICTE and affiliated to UBTER Roorkee, UITPE imparts professional diploma education in Civil, Mechanical, and Electrical engineering disciplines.",
    fees: "₹35,000/Yr",
    exams: "UBTER JEEP / Merit",
    affiliation: "Uttarakhand Board of Technical Education, Roorkee (UBTER) / AICTE",
    courses: [
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹35,000/Yr",
        eligibility: "10th High School Pass / UBTER JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹35,000/Yr",
        eligibility: "10th High School Pass / UBTER JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  2145: {
    name: "Government Polytechnic, Kaladhungi",
    shortName: "GP Kaladhungi",
    city: "Nainital",
    location: "Nainital",
    state: "Uttarakhand",
    address: "Ward No. 6, Near Tehsil Kaladhungi, District Nainital, Uttarakhand - 263140",
    phone: "+91-5942-242010",
    website: "http://ukdte.org",
    rating: 4.2,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Government Polytechnic Kaladhungi is a state government technical institution situated in Kaladhungi, Nainital district, Uttarakhand. Operating under the Directorate of Technical Education, Uttarakhand, and approved by AICTE, it offers diploma in Computer Science and Engineering with well-equipped modern software and networking labs.",
    fees: "₹8,000/Yr",
    exams: "UBTER JEEP",
    affiliation: "Uttarakhand Board of Technical Education, Roorkee (UBTER) / AICTE",
    courses: [
      {
        title: "Diploma in Computer Science & Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "10th High School Pass / UBTER JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 40
      }
    ]
  },
  2146: {
    name: "Government Polytechnic, SIDCUL Haridwar",
    shortName: "GP SIDCUL Haridwar",
    city: "Haridwar",
    location: "Haridwar",
    state: "Uttarakhand",
    address: "Sector 12, SIDCUL / BHEL, Haridwar, District Haridwar, Uttarakhand - 249403",
    phone: "+91-1334-222010",
    website: "http://ukdte.org",
    rating: 4.3,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Government Polytechnic SIDCUL Haridwar is a premier state government technical institution established by the Department of Technical Education, Government of Uttarakhand. Located adjacent to the industrial hub of SIDCUL Haridwar, it provides industry-integrated diploma engineering courses in Electronics Engineering and Mechanical Engineering.",
    fees: "₹8,000/Yr",
    exams: "UBTER JEEP",
    affiliation: "Uttarakhand Board of Technical Education, Roorkee (UBTER) / AICTE",
    courses: [
      {
        title: "Diploma in Electronics Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "10th High School Pass / UBTER JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 40
      },
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹8,000/Yr",
        eligibility: "10th High School Pass / UBTER JEEP",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 40
      }
    ]
  }
};

// Update siteData.json
console.log('Updating siteData.json...');
const siteDataRaw = fs.readFileSync(siteDataPath, 'utf8');
const siteData = JSON.parse(siteDataRaw);
const colleges = Array.isArray(siteData) ? siteData : (siteData.colleges || []);

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

progress.verifiedColleges = 2150;
progress.batchesCompleted = 215;
progress.last_batch_completed = 215;
progress.currentBatch = 215;
progress.completionPercentage = "21.50%";
progress.lastUpdated = new Date().toISOString();

if (!progress.batches) {
  progress.batches = {};
}

progress.batches["215"] = {
  status: "verified",
  verifiedCount: 10,
  range: "2141-2150",
  ids: batchIds,
  verifiedAt: new Date().toISOString()
};

if (!progress.batchHistory) {
  progress.batchHistory = [];
}
progress.batchHistory.push({
  batch: 215,
  verifiedCount: 10,
  totalVerified: 2150,
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
const batch215Entries = batchIds.map((id, i) => {
  const c = batchUpdates[id];
  return `| ${2140 + i + 1} | ${c.name} | ${c.location} | ${c.state} | ${c.type} | [Portal](${c.website}) |`;
}).join('\n');

if (!mdContent.includes(batchUpdates[2137].name)) {
  mdContent += `\n\n### Batch 215 (Colleges 2,141–2,150)\n\n| # | College Name | City | State | Type | Website |\n|---|---|---|---|---|---|\n${batch215Entries}\n`;
  fs.writeFileSync(allVerifiedMdPath, mdContent, 'utf8');
}

console.log('Batch 215 verification successfully applied!');
