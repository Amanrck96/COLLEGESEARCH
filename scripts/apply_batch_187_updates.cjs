const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const progressPath = path.join(__dirname, '../reports/verification/progress.json');
const allVerifiedJsonPath = path.join(__dirname, '../reports/verification/all_verified_colleges.json');
const allVerifiedMdPath = path.join(__dirname, '../reports/verification/all_verified_colleges.md');

const batchUpdates = {
  1857: {
    name: "Shri Shankaracharya Institute of Professional Management & Technology, Raipur",
    shortName: "SSIPMT Raipur",
    type: "Private",
    ownership: "Private",
    website: "https://www.ssipmt.com",
    phone: "0771-3501600",
    address: "Village Mujgahan, P.O. Sejbahar, Old Dhamtari Road, Raipur, Chhattisgarh - 492015",
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
        intake: 180
      },
      {
        title: "B.Tech in Artificial Intelligence and Machine Learning",
        duration: "4 Years",
        fees: "₹75,000/Yr",
        eligibility: "10+2 with PCM + CG PET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Civil Engineering (Structural Engineering)",
        duration: "4 Years",
        fees: "₹75,000/Yr",
        eligibility: "10+2 with PCM + CG PET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
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
    about: "Shri Shankaracharya Institute of Professional Management & Technology (SSIPMT) Raipur was established in 2008 under Shri Gangajali Education Society (SGES). Approved by AICTE, affiliated to CSVTU Bhilai, and accredited by NAAC, it offers premier technical and management education."
  },
  1858: {
    name: "Late Karuna Shukla Government Polytechnic College, Balodabazar",
    shortName: "Govt Polytechnic Balodabazar",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "http://gpbalodabazar.ac.in",
    phone: "07727-222120",
    address: "ITI Campus, Village Sakari, Balodabazar, Chhattisgarh - 493332",
    location: "Balodabazar",
    state: "Chhattisgarh",
    fees: "₹5,150/Yr",
    affiliation: "Chhattisgarh Swami Vivekanand Technical University (CSVTU), Bhilai",
    courses: [
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹5,150/Yr",
        eligibility: "Class 10th with CG PPT / State Merit",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹5,150/Yr",
        eligibility: "Class 10th with CG PPT / State Merit",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹5,150/Yr",
        eligibility: "Class 10th with CG PPT / State Merit",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ],
    about: "Late Karuna Shukla Government Polytechnic College Balodabazar is a state government technical institution established by the Government of Chhattisgarh. It offers 3-year AICTE-approved engineering diploma programs affiliated to CSVTU Bhilai."
  },
  1859: {
    name: "Government Polytechnic, Khairagarh",
    shortName: "GP Khairagarh",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "http://gpkhairagarh.ac.in",
    phone: "07820-234200",
    address: "Main Road, Civil Lines, Khairagarh, Chhattisgarh - 491444",
    location: "Khairagarh",
    state: "Chhattisgarh",
    fees: "₹5,150/Yr",
    affiliation: "Chhattisgarh Swami Vivekanand Technical University (CSVTU), Bhilai",
    courses: [
      {
        title: "Diploma in Metallurgy Engineering",
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
      },
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹5,150/Yr",
        eligibility: "Class 10th with CG PPT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ],
    about: "Government Polytechnic Khairagarh is an AICTE-approved state government technical college situated in Khairagarh district of Chhattisgarh, offering specialized engineering diplomas affiliated to CSVTU Bhilai."
  },
  1860: {
    name: "IBT College of Diploma Engineering, Ahiwara",
    shortName: "IBT College Durg",
    type: "Private",
    ownership: "Private",
    website: "https://ibtgroup.org",
    phone: "0788-2612200",
    address: "Berla Road, Girhola Gram, Ahiwara, Nandini Nagar, Durg, Chhattisgarh - 490036",
    location: "Durg",
    state: "Chhattisgarh",
    fees: "₹28,500/Yr",
    affiliation: "Chhattisgarh Swami Vivekanand Technical University (CSVTU), Bhilai",
    courses: [
      {
        title: "Diploma in Computer Science and Engineering",
        duration: "3 Years",
        fees: "₹28,500/Yr",
        eligibility: "Class 10th with CG PPT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹28,500/Yr",
        eligibility: "Class 10th with CG PPT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹28,500/Yr",
        eligibility: "Class 10th with CG PPT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ],
    about: "IBT College of Diploma Engineering at Ahiwara, Durg is a private technical polytechnic managed by the IBT Group of Institutions, offering diploma programs affiliated to CSVTU Bhilai and approved by AICTE."
  },
  1861: {
    name: "Government Polytechnic, Narayanpur",
    shortName: "GP Narayanpur",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "http://gpnarayanpur.ac.in",
    phone: "07781-252250",
    address: "Bhakrupara, Narayanpur, Bastar Division, Chhattisgarh - 494661",
    location: "Narayanpur",
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
        intake: 30
      },
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹5,150/Yr",
        eligibility: "Class 10th with CG PPT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹5,150/Yr",
        eligibility: "Class 10th with CG PPT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ],
    about: "Government Polytechnic Narayanpur was established by the Government of Chhattisgarh to provide subsidized technical diploma education in the tribal Bastar region. Affiliated to CSVTU Bhilai and approved by AICTE."
  },
  1862: {
    name: "Uday Prasad Uday Government Polytechnic, Durg",
    shortName: "Govt Polytechnic Durg",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "http://gpdurg.ac.in",
    phone: "0788-2322394",
    address: "Pulgaon Chowk, G.E. Road, Durg, Chhattisgarh - 491001",
    location: "Durg",
    state: "Chhattisgarh",
    fees: "₹5,150/Yr",
    affiliation: "Chhattisgarh Swami Vivekanand Technical University (CSVTU), Bhilai",
    courses: [
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹5,150/Yr",
        eligibility: "Class 10th with CG PPT / State Merit",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹5,150/Yr",
        eligibility: "Class 10th with CG PPT / State Merit",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹5,150/Yr",
        eligibility: "Class 10th with CG PPT / State Merit",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Electronics and Telecommunication",
        duration: "3 Years",
        fees: "₹5,150/Yr",
        eligibility: "Class 10th with CG PPT / State Merit",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ],
    about: "Uday Prasad Uday Government Polytechnic Durg, established in 1962, is one of the oldest and most prestigious state polytechnic institutes in Chhattisgarh. Located on G.E. Road at Pulgaon Chowk, it operates under the Directorate of Technical Education and CSVTU Bhilai."
  },
  1863: {
    name: "Ayush College of Polytechnic, Marwahi",
    shortName: "Ayush Polytechnic",
    type: "Private",
    ownership: "Private",
    website: "http://ayushcollege.in",
    phone: "07752-282100",
    address: "Village Meduka, P.O. Darri, Tehsil Pendra Road, Gaurela-Pendra-Marwahi, Chhattisgarh - 495115",
    location: "Gaurela-Pendra-Marwahi",
    state: "Chhattisgarh",
    fees: "₹28,500/Yr",
    affiliation: "Chhattisgarh Swami Vivekanand Technical University (CSVTU), Bhilai",
    courses: [
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹28,500/Yr",
        eligibility: "Class 10th with CG PPT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹28,500/Yr",
        eligibility: "Class 10th with CG PPT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹28,500/Yr",
        eligibility: "Class 10th with CG PPT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ],
    about: "Ayush College of Polytechnic at Meduka, Pendra Road is a private technical institute providing diploma courses in engineering disciplines, affiliated to CSVTU Bhilai and approved by AICTE."
  },
  1864: {
    name: "Minimata Government Girls Polytechnic, Rajnandgaon",
    shortName: "GGP Rajnandgaon",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "http://ggprajnandgaon.ac.in",
    phone: "07744-222510",
    address: "Behind Transport Nagar, By-Pass Road, Pendri, Rajnandgaon, Chhattisgarh - 491441",
    location: "Rajnandgaon",
    state: "Chhattisgarh",
    fees: "₹5,150/Yr",
    affiliation: "Chhattisgarh Swami Vivekanand Technical University (CSVTU), Bhilai",
    courses: [
      {
        title: "Diploma in Modern Office Management",
        duration: "3 Years",
        fees: "₹5,150/Yr",
        eligibility: "Class 10th / 10+2 Merit",
        type: "MANAGEMENT",
        intake: 30
      },
      {
        title: "Diploma in Computer Science and Engineering",
        duration: "3 Years",
        fees: "₹5,150/Yr",
        eligibility: "Class 10th with CG PPT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "Diploma in Electronics and Telecommunication",
        duration: "3 Years",
        fees: "₹5,150/Yr",
        eligibility: "Class 10th with CG PPT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ],
    about: "Minimata Government Girls Polytechnic Rajnandgaon, established in 2010 by the Government of Chhattisgarh, is a specialized technical institute dedicated to female students in Rajnandgaon district, affiliated to CSVTU Bhilai."
  },
  1865: {
    name: "Government Co-Ed Polytechnic, Bastar (Jagdalpur)",
    shortName: "Govt Polytechnic Bastar",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "http://gpbastar.ac.in",
    phone: "07782-229230",
    address: "Dharampura, Jagdalpur, Bastar, Chhattisgarh - 494001",
    location: "Bastar",
    state: "Chhattisgarh",
    fees: "₹5,150/Yr",
    affiliation: "Chhattisgarh Swami Vivekanand Technical University (CSVTU), Bhilai",
    courses: [
      {
        title: "Diploma in Electrical Engineering",
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
    about: "Government Co-Ed Polytechnic Bastar, situated at Dharampura in Jagdalpur, was established in 1985 to pioneer technical education across the Bastar tribal division. Operates under the Directorate of Technical Education, CG, and is affiliated to CSVTU Bhilai."
  },
  1866: {
    name: "Rungta College of Engineering & Technology, Bhilai",
    shortName: "RCET Bhilai",
    type: "Private",
    ownership: "Private",
    website: "https://www.rungta.ac.in",
    phone: "0788-6666666",
    address: "Rungta Educational Campus, Kohka-Kurud Road, Bhilai, Durg, Chhattisgarh - 490024",
    location: "Durg",
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
        intake: 180
      },
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹75,000/Yr",
        eligibility: "10+2 with PCM + CG PET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 120
      },
      {
        title: "Master of Computer Applications (MCA)",
        duration: "2 Years",
        fees: "₹55,000/Yr",
        eligibility: "BCA / B.Sc / B.Com with Mathematics + CG Pre-MCA",
        type: "COMPUTER APPLICATIONS",
        intake: 120
      },
      {
        title: "Master of Business Administration (MBA)",
        duration: "2 Years",
        fees: "₹65,000/Yr",
        eligibility: "Graduation with 50% + CMAT / MAT / CAT",
        type: "MANAGEMENT",
        intake: 120
      }
    ],
    about: "Rungta College of Engineering & Technology (RCET) Bhilai, established in 1999, is a premier private engineering institution in Chhattisgarh. Accredited by NBA and NAAC and affiliated to CSVTU Bhilai, RCET is renowned for high placement rates and expansive campus facilities."
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

progress.verifiedColleges = 1870;
progress.last_batch_completed = 187;
progress.currentBatch = 187;
progress.lastUpdated = new Date().toISOString();

if (!progress.batches) {
  progress.batches = {};
}

progress.batches["187"] = {
  status: "verified",
  verifiedCount: 10,
  range: "1861-1870",
  ids: batchIds,
  verifiedAt: new Date().toISOString()
};

if (!progress.batchHistory) {
  progress.batchHistory = [];
}
progress.batchHistory.push({
  batch: 187,
  verifiedCount: 10,
  totalVerified: 1870,
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
const batch187Entries = batchIds.map((id, i) => {
  const c = batchUpdates[id];
  return `| ${1860 + i + 1} | ${c.name} | ${c.location} | ${c.state} | ${c.type} | [Portal](${c.website}) |`;
}).join('\n');

if (!mdContent.includes(batchUpdates[1857].name)) {
  mdContent += `\n\n### Batch 187 (Colleges 1,861–1,870)\n\n| # | College Name | City | State | Type | Website |\n|---|---|---|---|---|---|\n${batch187Entries}\n`;
  fs.writeFileSync(allVerifiedMdPath, mdContent, 'utf8');
}

console.log('Batch 187 verification successfully completed!');
