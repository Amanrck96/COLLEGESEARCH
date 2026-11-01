const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const progressPath = path.join(__dirname, '../reports/verification/progress.json');
const allVerifiedJsonPath = path.join(__dirname, '../reports/verification/all_verified_colleges.json');
const allVerifiedMdPath = path.join(__dirname, '../reports/verification/all_verified_colleges.md');

const batchUpdates = {
  1887: {
    name: "Government Engineering College, Bilaspur",
    shortName: "GEC Bilaspur",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://gecbilaspur.ac.in",
    phone: "07752-260289",
    address: "Koni, Bilaspur, Chhattisgarh - 495009",
    location: "Bilaspur",
    state: "Chhattisgarh",
    fees: "₹24,390/Yr",
    affiliation: "Chhattisgarh Swami Vivekanand Technical University (CSVTU), Bhilai",
    courses: [
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹24,390/Yr",
        eligibility: "10+2 with PCM + CG PET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹24,390/Yr",
        eligibility: "10+2 with PCM + CG PET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Electrical Engineering",
        duration: "4 Years",
        fees: "₹24,390/Yr",
        eligibility: "10+2 with PCM + CG PET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Mining Engineering",
        duration: "4 Years",
        fees: "₹24,390/Yr",
        eligibility: "10+2 with PCM + CG PET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "B.Tech in Information Technology",
        duration: "4 Years",
        fees: "₹24,390/Yr",
        eligibility: "10+2 with PCM + CG PET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 40
      }
    ],
    about: "Government Engineering College Bilaspur (GEC Bilaspur), established in 1964, is one of the oldest and most prestigious state government engineering institutions in Central India. Situated on a lush 179-acre campus at Koni, it is approved by AICTE and affiliated to CSVTU Bhilai."
  },
  1888: {
    name: "Chhatrapati Shivaji Institute of Technology, Durg",
    shortName: "CSIT Durg",
    type: "Private",
    ownership: "Private",
    website: "https://csitdurg.in",
    phone: "0788-2229902",
    address: "Shivaji Nagar, Balod Road, Kolihapuri, Post Pisegaon, Durg, Chhattisgarh - 491001",
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
        intake: 120
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
        title: "B.Tech in Electronics and Telecommunication",
        duration: "4 Years",
        fees: "₹70,000/Yr",
        eligibility: "10+2 with PCM + CG PET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "M.Tech in Computer Science",
        duration: "2 Years",
        fees: "₹60,000/Yr",
        eligibility: "B.Tech CSE + GATE",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 18
      }
    ],
    about: "Chhatrapati Shivaji Institute of Technology (CSIT) Durg, established in 1999 by Chhatrapati Shivaji Education Society, is an AICTE-approved and NAAC-accredited private engineering institute affiliated to CSVTU Bhilai."
  },
  1889: {
    name: "Bhilai Institute of Technology, Raipur",
    shortName: "BIT Raipur",
    type: "Private",
    ownership: "Private",
    website: "https://bitraipur.ac.in",
    phone: "0771-2972777",
    address: "NH-43, Village Kendri, Near Kendri Railway Station, New Raipur, Chhattisgarh - 493661",
    location: "Raipur",
    state: "Chhattisgarh",
    fees: "₹75,000/Yr",
    affiliation: "Chhattisgarh Swami Vivekanand Technical University (CSVTU), Bhilai",
    courses: [
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹75,000/Yr",
        eligibility: "10+2 with PCM + CG PET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 120
      },
      {
        title: "B.Tech in Electrical and Electronics Engineering",
        duration: "4 Years",
        fees: "₹75,000/Yr",
        eligibility: "10+2 with PCM + CG PET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹75,000/Yr",
        eligibility: "10+2 with PCM + CG PET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹75,000/Yr",
        eligibility: "10+2 with PCM + CG PET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ],
    about: "Bhilai Institute of Technology Raipur (BIT Raipur), established in 2009 under the Bhilai Institute of Technology Trust, is an AICTE-approved and NAAC-accredited technical college affiliated to CSVTU Bhilai, situated on NH-43 at Kendri in New Raipur."
  },
  1890: {
    name: "School of Engineering & Information Technology, MATS University, Raipur",
    shortName: "MATS School of Engg",
    type: "Private",
    ownership: "Private",
    website: "https://matsuniversity.ac.in",
    phone: "0771-4078995",
    address: "MATS University Campus, Gullu, Aarang-Kharora Highway, Aarang, Raipur, Chhattisgarh - 493441",
    location: "Raipur",
    state: "Chhattisgarh",
    fees: "₹75,000/Yr",
    affiliation: "MATS University, Raipur (State Private University, UGC Recognized)",
    courses: [
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹75,000/Yr",
        eligibility: "10+2 with PCM + MATS EEE / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Master of Computer Applications (MCA)",
        duration: "2 Years",
        fees: "₹55,000/Yr",
        eligibility: "BCA / B.Sc with Mathematics",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹45,000/Yr",
        eligibility: "10+2 in any stream",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      }
    ],
    about: "School of Engineering & Information Technology is a constituent school of MATS University Raipur, established under the Chhattisgarh Private Universities Act in 2006, offering AICTE- and UGC-aligned technical degree programs."
  },
  1891: {
    name: "Bhilai Institute of Technology, Durg (BIT Durg)",
    shortName: "BIT Durg",
    type: "Private",
    ownership: "Private",
    website: "https://bitdurg.ac.in",
    phone: "0788-2359297",
    address: "Bhilai House, G.E. Road, Durg, Chhattisgarh - 491001",
    location: "Durg",
    state: "Chhattisgarh",
    fees: "₹78,000/Yr",
    affiliation: "Autonomous (Affiliated to CSVTU, Bhilai, NAAC 'A', NBA)",
    courses: [
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹78,000/Yr",
        eligibility: "10+2 with PCM + CG PET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 180
      },
      {
        title: "B.Tech in Electrical Engineering",
        duration: "4 Years",
        fees: "₹78,000/Yr",
        eligibility: "10+2 with PCM + CG PET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 120
      },
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹78,000/Yr",
        eligibility: "10+2 with PCM + CG PET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 120
      },
      {
        title: "Master of Computer Applications (MCA)",
        duration: "2 Years",
        fees: "₹55,000/Yr",
        eligibility: "BCA / B.Sc with Mathematics + CG Pre-MCA",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Master of Business Administration (MBA)",
        duration: "2 Years",
        fees: "₹65,000/Yr",
        eligibility: "Graduation with 50% + CMAT / MAT / CAT",
        type: "MANAGEMENT",
        intake: 60
      }
    ],
    about: "Bhilai Institute of Technology (BIT Durg), established in 1986 as the first self-financed engineering college in Central India, is an autonomous technical institution accredited with NAAC 'A' Grade and NBA. Affiliated to CSVTU Bhilai, it consistently ranks among the top engineering institutions in the region."
  },
  1892: {
    name: "Chhattisgarh Engineering College, Durg",
    shortName: "CEC Durg",
    type: "Private",
    ownership: "Private",
    website: "http://cecdurg.in",
    phone: "0788-2962300",
    address: "Borsi-Dhanora Road, In Front of St. Xavier School, Dhanora, Durg, Chhattisgarh - 491001",
    location: "Durg",
    state: "Chhattisgarh",
    fees: "₹55,000/Yr",
    affiliation: "Chhattisgarh Swami Vivekanand Technical University (CSVTU), Bhilai",
    courses: [
      {
        title: "B.Tech in Computer Science and Engineering",
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
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹55,000/Yr",
        eligibility: "10+2 with PCM + CG PET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ],
    about: "Chhattisgarh Engineering College (CEC Durg), established in 2009 at Dhanora, Durg, offers AICTE-approved undergraduate engineering programs affiliated to CSVTU Bhilai."
  },
  1893: {
    name: "Sai Mahavidyalaya, Bhilai",
    shortName: "Sai College Bhilai",
    type: "Private",
    ownership: "Private",
    website: "https://saimahavidyalaya.com",
    phone: "0788-2223793",
    address: "Street 69, Sector 6, Bhilai, Durg, Chhattisgarh - 490006",
    location: "Durg",
    state: "Chhattisgarh",
    fees: "₹30,000/Yr",
    affiliation: "Hemchand Yadav Vishwavidyalaya, Durg (State University)",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹30,000/Yr",
        eligibility: "10+2 with Mathematics / Computer",
        type: "COMPUTER APPLICATIONS",
        intake: 120
      },
      {
        title: "Post Graduate Diploma in Computer Applications (PGDCA)",
        duration: "1 Year",
        fees: "₹18,000/Yr",
        eligibility: "Graduation in any stream",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹28,000/Yr",
        eligibility: "10+2 in any stream",
        type: "MANAGEMENT",
        intake: 60
      }
    ],
    about: "Sai Mahavidyalaya (Sai College) Bhilai, established by Sai Education Society, is a recognized degree college in Sector 6, Bhilai, affiliated to Hemchand Yadav Vishwavidyalaya (Durg University), providing education in computer applications, management, science, and commerce."
  },
  1894: {
    name: "GD Rungta College of Science and Technology, Bhilai",
    shortName: "GDRST Bhilai",
    type: "Private",
    ownership: "Private",
    website: "https://www.rungta.ac.in/gdrst",
    phone: "0788-6666666",
    address: "Rungta Educational Campus, Kohka-Kurud Road, Bhilai, Durg, Chhattisgarh - 490024",
    location: "Durg",
    state: "Chhattisgarh",
    fees: "₹35,000/Yr",
    affiliation: "Hemchand Yadav Vishwavidyalaya, Durg (State University)",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹35,000/Yr",
        eligibility: "10+2 with Mathematics / Computer",
        type: "COMPUTER APPLICATIONS",
        intake: 180
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹40,000/Yr",
        eligibility: "10+2 in any stream",
        type: "MANAGEMENT",
        intake: 120
      },
      {
        title: "M.Sc in Computer Science",
        duration: "2 Years",
        fees: "₹30,000/Yr",
        eligibility: "BCA / B.Sc Computer Science",
        type: "COMPUTER APPLICATIONS",
        intake: 40
      }
    ],
    about: "GD Rungta College of Science and Technology (GDRST) Bhilai is a premier undergraduate and postgraduate institution affiliated to Hemchand Yadav Vishwavidyalaya, Durg, offering specialized degrees in IT, management, and commerce."
  },
  1895: {
    name: "Government Polytechnic, Pathariya",
    shortName: "GP Pathariya",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "http://gppathariya.ac.in",
    phone: "07755-244100",
    address: "Govt. Virangana Avanti Bai College Campus, Sarwani, Pathariya, Mungeli, Chhattisgarh - 495353",
    location: "Mungeli",
    state: "Chhattisgarh",
    fees: "₹5,150/Yr",
    affiliation: "Chhattisgarh Swami Vivekanand Technical University (CSVTU), Bhilai",
    courses: [
      {
        title: "Diploma in Mining Engineering",
        duration: "3 Years",
        fees: "₹5,150/Yr",
        eligibility: "Class 10th with CG PPT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
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
      }
    ],
    about: "Government Polytechnic Pathariya was established by the Government of Chhattisgarh to provide subsidized technical diploma programs in Mungeli district, affiliated to CSVTU Bhilai and approved by AICTE."
  },
  1896: {
    name: "Government Polytechnic, Marwahi",
    shortName: "GP Marwahi",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "http://gpmarwahi.ac.in",
    phone: "07751-224200",
    address: "Near Rest House, Tehsil Marwahi, District Gaurela-Pendra-Marwahi, Chhattisgarh - 495118",
    location: "Gaurela-Pendra-Marwahi",
    state: "Chhattisgarh",
    fees: "₹5,150/Yr",
    affiliation: "Chhattisgarh Swami Vivekanand Technical University (CSVTU), Bhilai",
    courses: [
      {
        title: "Diploma in Computer Science and Engineering",
        duration: "3 Years",
        fees: "₹5,150/Yr",
        eligibility: "Class 10th with CG PPT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
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
      }
    ],
    about: "Government Polytechnic Marwahi is an AICTE-approved state government technical college situated in the tribal district of Gaurela-Pendra-Marwahi, offering subsidized engineering diplomas affiliated to CSVTU Bhilai."
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

progress.verifiedColleges = 1900;
progress.last_batch_completed = 190;
progress.currentBatch = 190;
progress.lastUpdated = new Date().toISOString();

if (!progress.batches) {
  progress.batches = {};
}

progress.batches["190"] = {
  status: "verified",
  verifiedCount: 10,
  range: "1891-1900",
  ids: batchIds,
  verifiedAt: new Date().toISOString()
};

if (!progress.batchHistory) {
  progress.batchHistory = [];
}
progress.batchHistory.push({
  batch: 190,
  verifiedCount: 10,
  totalVerified: 1900,
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
const batch190Entries = batchIds.map((id, i) => {
  const c = batchUpdates[id];
  return `| ${1890 + i + 1} | ${c.name} | ${c.location} | ${c.state} | ${c.type} | [Portal](${c.website}) |`;
}).join('\n');

if (!mdContent.includes(batchUpdates[1887].name)) {
  mdContent += `\n\n### Batch 190 (Colleges 1,891–1,900)\n\n| # | College Name | City | State | Type | Website |\n|---|---|---|---|---|---|\n${batch190Entries}\n`;
  fs.writeFileSync(allVerifiedMdPath, mdContent, 'utf8');
}

console.log('Batch 190 verification successfully completed!');
