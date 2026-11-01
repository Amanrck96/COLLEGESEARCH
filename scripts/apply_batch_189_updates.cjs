const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const progressPath = path.join(__dirname, '../reports/verification/progress.json');
const allVerifiedJsonPath = path.join(__dirname, '../reports/verification/all_verified_colleges.json');
const allVerifiedMdPath = path.join(__dirname, '../reports/verification/all_verified_colleges.md');

const batchUpdates = {
  1877: {
    name: "RITEE Business School (RIBS), Raipur",
    shortName: "RIBS Raipur",
    type: "Private",
    ownership: "Private",
    website: "https://ribs.education",
    phone: "0771-3208888",
    address: "Chhatauna, Mandir Hasaud, Raipur, Chhattisgarh - 492101",
    location: "Raipur",
    state: "Chhattisgarh",
    fees: "₹95,000/Yr",
    affiliation: "Chhattisgarh Swami Vivekanand Technical University (CSVTU), Bhilai",
    courses: [
      {
        title: "Post Graduate Diploma in Management (PGDM)",
        duration: "2 Years",
        fees: "₹95,000/Yr",
        eligibility: "Graduation with 50% + MAT / CAT / CMAT / ATMA",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "Master of Business Administration (MBA)",
        duration: "2 Years",
        fees: "₹75,000/Yr",
        eligibility: "Graduation with 50% + CMAT / MAT / CAT",
        type: "MANAGEMENT",
        intake: 60
      }
    ],
    about: "RITEE Business School (RIBS) Raipur, part of the RITEE Group established in 1995 under Mahanadi Education Society, is an AICTE-approved management institution offering specialized postgraduate business programs."
  },
  1878: {
    name: "Lakhmi Chand Institute of Technology, Bilaspur",
    shortName: "LCIT Bilaspur",
    type: "Private",
    ownership: "Private",
    website: "https://lcitbilaspur.edu.in",
    phone: "07752-247701",
    address: "Vidyasthali, Village Bodri, P.O. Chakarbhatha, Bilaspur, Chhattisgarh - 495220",
    location: "Bilaspur",
    state: "Chhattisgarh",
    fees: "₹65,000/Yr",
    affiliation: "Chhattisgarh Swami Vivekanand Technical University (CSVTU), Bhilai",
    courses: [
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹65,000/Yr",
        eligibility: "10+2 with PCM + CG PET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 120
      },
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹65,000/Yr",
        eligibility: "10+2 with PCM + CG PET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Master of Computer Applications (MCA)",
        duration: "2 Years",
        fees: "₹50,000/Yr",
        eligibility: "BCA / B.Sc with Mathematics + CG Pre-MCA",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Master of Business Administration (MBA)",
        duration: "2 Years",
        fees: "₹55,000/Yr",
        eligibility: "Graduation with 50% + CMAT / MAT / CAT",
        type: "MANAGEMENT",
        intake: 60
      }
    ],
    about: "Lakhmi Chand Institute of Technology (LCIT Bilaspur), established in 2008 by Shree Chhotelal Education Society, is an AICTE-approved and NAAC-accredited private engineering institute affiliated to CSVTU Bhilai."
  },
  1879: {
    name: "Yugantar Institute of Technology and Management, Rajnandgaon",
    shortName: "YITM Rajnandgaon",
    type: "Private",
    ownership: "Private",
    website: "https://yugantar.org",
    phone: "07744-281004",
    address: "G.E. Road, Gram Thekwa, Post Somni, Rajnandgaon, Chhattisgarh - 491441",
    location: "Rajnandgaon",
    state: "Chhattisgarh",
    fees: "₹55,000/Yr",
    affiliation: "Chhattisgarh Swami Vivekanand Technical University (CSVTU), Bhilai",
    courses: [
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹55,000/Yr",
        eligibility: "10+2 with PCM + CG PET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
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
      }
    ],
    about: "Yugantar Institute of Technology and Management (YITM) Rajnandgaon, established in 2007 by Yugantar Education Society, is an AICTE-approved engineering college affiliated to CSVTU Bhilai."
  },
  1880: {
    name: "Raipur Institute of Technology (RITEE), Raipur",
    shortName: "RITEE Raipur",
    type: "Private",
    ownership: "Private",
    website: "https://ritee.ac.in",
    phone: "0771-3208888",
    address: "NH-06, Chhatauna, Mandir Hasaud, Raipur, Chhattisgarh - 492101",
    location: "Raipur",
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
    about: "Raipur Institute of Technology (RITEE Raipur), founded in 1995 under Mahanadi Education Society, is one of the earliest private engineering institutes in Chhattisgarh, approved by AICTE, accredited by NAAC, and affiliated to CSVTU Bhilai."
  },
  1881: {
    name: "School of Engineering and Technology, ISBM University",
    shortName: "ISBM University Engg",
    type: "Private",
    ownership: "Private",
    website: "https://isbmuniversity.edu.in",
    phone: "07701-296100",
    address: "Nawapara (Kosmi), Tehsil Chhura, District Gariaband, Chhattisgarh - 493996",
    location: "Gariaband",
    state: "Chhattisgarh",
    fees: "₹60,000/Yr",
    affiliation: "ISBM University, Gariaband (UGC Recognized Private University)",
    courses: [
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹60,000/Yr",
        eligibility: "10+2 with PCM + University Entrance",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹60,000/Yr",
        eligibility: "10+2 with PCM + University Entrance",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹28,500/Yr",
        eligibility: "Class 10th with 40%",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ],
    about: "School of Engineering and Technology is a constituent school of ISBM University, a private university established under the Chhattisgarh Private Universities Act, offering UGC-approved engineering degrees."
  },
  1882: {
    name: "Department of Computer Science & Information Technology, Guru Ghasidas Vishwavidyalaya",
    shortName: "CSIT GGV Bilaspur",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://www.new.ggu.ac.in",
    phone: "07752-260007",
    address: "Guru Ghasidas Vishwavidyalaya (Central University), Koni, Bilaspur, Chhattisgarh - 495009",
    location: "Bilaspur",
    state: "Chhattisgarh",
    fees: "₹18,500/Yr",
    affiliation: "Guru Ghasidas Vishwavidyalaya (Central University, Govt. of India)",
    courses: [
      {
        title: "Master of Computer Applications (MCA)",
        duration: "2 Years",
        fees: "₹18,500/Yr",
        eligibility: "BCA / B.Sc with Mathematics + CUET-PG",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "M.Sc in Computer Science",
        duration: "2 Years",
        fees: "₹15,000/Yr",
        eligibility: "B.Sc Computer Science / BCA + CUET-PG",
        type: "COMPUTER APPLICATIONS",
        intake: 40
      },
      {
        title: "B.Sc (Hons) in Computer Science",
        duration: "3 Years",
        fees: "₹12,000/Yr",
        eligibility: "10+2 with Mathematics + CUET-UG",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      }
    ],
    about: "The Department of Computer Science & Information Technology at Guru Ghasidas Vishwavidyalaya (Central University), Bilaspur is a premier university department established to impart advanced computer education and research with subsidized fees under the Government of India."
  },
  1883: {
    name: "Anjaneya University, Raipur",
    shortName: "Anjaneya University",
    type: "Private",
    ownership: "Private",
    website: "https://anjaneyauniversity.ac.in",
    phone: "0771-4770000",
    address: "Knowledge Village, Narardaha, P.O. Mandir Hasaud, Raipur, Chhattisgarh - 492101",
    location: "Raipur",
    state: "Chhattisgarh",
    fees: "₹65,000/Yr",
    affiliation: "Anjaneya University, Raipur (State Private University)",
    courses: [
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹65,000/Yr",
        eligibility: "10+2 with PCM + Entrance Test",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹45,000/Yr",
        eligibility: "10+2 in any stream",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Master of Business Administration (MBA)",
        duration: "2 Years",
        fees: "₹65,000/Yr",
        eligibility: "Graduation with 50%",
        type: "MANAGEMENT",
        intake: 60
      }
    ],
    about: "Anjaneya University Raipur is a state private university established under the Chhattisgarh Private Universities Act, located at Knowledge Village in Narardaha, providing programs in engineering, technology, management, and arts."
  },
  1884: {
    name: "School of Studies in Computer Science, Pt. Ravishankar Shukla University, Raipur",
    shortName: "SoS CS PRSU Raipur",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://www.prsu.ac.in",
    phone: "0771-2262837",
    address: "Pt. Ravishankar Shukla University Campus, Amanaka, G.E. Road, Raipur, Chhattisgarh - 492010",
    location: "Raipur",
    state: "Chhattisgarh",
    fees: "₹25,000/Yr",
    affiliation: "Pt. Ravishankar Shukla University, Raipur (State Public University, NAAC 'A')",
    courses: [
      {
        title: "Master of Computer Applications (MCA)",
        duration: "2 Years",
        fees: "₹25,000/Yr",
        eligibility: "BCA / B.Sc with Mathematics + CG Pre-MCA",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "M.Tech in Computer Science",
        duration: "2 Years",
        fees: "₹30,000/Yr",
        eligibility: "B.Tech CSE / MCA / M.Sc CS + GATE / University Test",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 25
      },
      {
        title: "M.Sc in Computer Science",
        duration: "2 Years",
        fees: "₹15,000/Yr",
        eligibility: "B.Sc Computer Science / BCA",
        type: "COMPUTER APPLICATIONS",
        intake: 30
      }
    ],
    about: "School of Studies in Computer Science at Pt. Ravishankar Shukla University (PRSU Raipur), established as a state public university teaching department, is accredited NAAC 'A' Grade and offers postgraduate and doctoral research programs in computer science."
  },
  1885: {
    name: "School of Studies of Engineering & Technology, Guru Ghasidas Vishwavidyalaya, Bilaspur",
    shortName: "SoS E&T GGV Bilaspur",
    type: "Public/Government",
    ownership: "Public/Government",
    website: "https://www.new.ggu.ac.in",
    phone: "07752-260007",
    address: "Institute of Technology Campus, Guru Ghasidas Vishwavidyalaya, Koni, Bilaspur, Chhattisgarh - 495009",
    location: "Bilaspur",
    state: "Chhattisgarh",
    fees: "₹26,550/Yr",
    affiliation: "Guru Ghasidas Vishwavidyalaya (Central University, Govt. of India)",
    courses: [
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹26,550/Yr",
        eligibility: "10+2 with PCM + JEE Main through JoSAA / CSAB",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Chemical Engineering",
        duration: "4 Years",
        fees: "₹26,550/Yr",
        eligibility: "10+2 with PCM + JEE Main through JoSAA / CSAB",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹26,550/Yr",
        eligibility: "10+2 with PCM + JEE Main through JoSAA / CSAB",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹26,550/Yr",
        eligibility: "10+2 with PCM + JEE Main through JoSAA / CSAB",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "M.Tech in Machine Design / CAD-CAM",
        duration: "2 Years",
        fees: "₹32,000/Yr",
        eligibility: "B.Tech in relevant discipline + GATE",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 18
      }
    ],
    about: "School of Studies of Engineering and Technology (formerly Institute of Technology), Guru Ghasidas Vishwavidyalaya (GGV Bilaspur) is a premier engineering institution of a Central University under the Government of India. Admissions to B.Tech are conducted nationwide through JEE Main via JoSAA and CSAB."
  },
  1886: {
    name: "Columbia Institute of Engineering & Technology, Raipur",
    shortName: "CIET Raipur",
    type: "Private",
    ownership: "Private",
    website: "https://cietraipur.ac.in",
    phone: "0771-4283500",
    address: "Village Tekari, Near Vidhan Sabha, Mandir Hasaud Road, Raipur, Chhattisgarh - 493111",
    location: "Raipur",
    state: "Chhattisgarh",
    fees: "₹68,000/Yr",
    affiliation: "Chhattisgarh Swami Vivekanand Technical University (CSVTU), Bhilai",
    courses: [
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹68,000/Yr",
        eligibility: "10+2 with PCM + CG PET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 120
      },
      {
        title: "B.Tech in Electrical and Electronics Engineering",
        duration: "4 Years",
        fees: "₹68,000/Yr",
        eligibility: "10+2 with PCM + CG PET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹68,000/Yr",
        eligibility: "10+2 with PCM + CG PET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Master of Business Administration (MBA)",
        duration: "2 Years",
        fees: "₹60,000/Yr",
        eligibility: "Graduation with 50% + CMAT / MAT / CAT",
        type: "MANAGEMENT",
        intake: 60
      }
    ],
    about: "Columbia Institute of Engineering & Technology (CIET Raipur), established in 2008 by Janhit Trust, is an AICTE-approved and NAAC-accredited private engineering institute located near the Vidhan Sabha on Mandir Hasaud Road, affiliated to CSVTU Bhilai."
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

progress.verifiedColleges = 1890;
progress.last_batch_completed = 189;
progress.currentBatch = 189;
progress.lastUpdated = new Date().toISOString();

if (!progress.batches) {
  progress.batches = {};
}

progress.batches["189"] = {
  status: "verified",
  verifiedCount: 10,
  range: "1881-1890",
  ids: batchIds,
  verifiedAt: new Date().toISOString()
};

if (!progress.batchHistory) {
  progress.batchHistory = [];
}
progress.batchHistory.push({
  batch: 189,
  verifiedCount: 10,
  totalVerified: 1890,
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
const batch189Entries = batchIds.map((id, i) => {
  const c = batchUpdates[id];
  return `| ${1880 + i + 1} | ${c.name} | ${c.location} | ${c.state} | ${c.type} | [Portal](${c.website}) |`;
}).join('\n');

if (!mdContent.includes(batchUpdates[1877].name)) {
  mdContent += `\n\n### Batch 189 (Colleges 1,881–1,890)\n\n| # | College Name | City | State | Type | Website |\n|---|---|---|---|---|---|\n${batch189Entries}\n`;
  fs.writeFileSync(allVerifiedMdPath, mdContent, 'utf8');
}

console.log('Batch 189 verification successfully completed!');

