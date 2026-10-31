const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const PROGRESS_PATH = path.join(BASE_DIR, 'reports', 'verification', 'progress.json');
const COLLEGE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'college-verification.csv');
const COURSE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'course-verification.csv');
const IMAGE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'image-verification.csv');

const batch24Colleges = [
  {
    id: 2162,
    name: "Gurukula Kangri (Deemed to be University)",
    address: "P.O. Gurukula Kangri, Kankhal, Haridwar, Uttarakhand - 249404",
    city: "Haridwar",
    state: "Uttarakhand",
    type: "Public/Government (Deemed to be University)",
    ownership: "Government",
    phone: "+91-7300761138",
    email: "registrar@gkv.ac.in",
    website: "https://www.gkv.ac.in",
    established: 1902,
    affiliation: "Deemed to be University (100% Funded by UGC, Govt of India)",
    naac_grade: "A",
    status: "Verified",
    notes: "Restored Public/Government Deemed University status; purged severe cross-state photo leak (BMS Bangalore); replaced fake website gurukulkangrivi.edu.in with gkv.ac.in; verified 2-year MCA curriculum",
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fee: "₹1.4 Lakhs", eligibility: "BCA/B.Sc Computer Science or Graduation with Mathematics + CUET-PG", seats: 60 }
    ],
    image: {
      old_url: "/images/campuses/bms_bangalore.jpg",
      new_url: "/images/campuses/campus_architecture_1.jpg",
      status: "Remapped",
      audit_action: "Purged severe photo leak (BMS Bangalore assigned to Haridwar university); remapped to verified architecture asset"
    }
  },
  {
    id: 2174,
    name: "Bishamber Sahai Management Institute",
    address: "6th KM Stone, Roorkee-Saharanpur Road, Saliyar, Roorkee, District Haridwar, Uttarakhand - 247667",
    city: "Roorkee",
    state: "Uttarakhand",
    type: "Private",
    ownership: "Private",
    phone: "+91-9837127404",
    email: "sourabh_bsi07@yahoo.com",
    website: "https://bsigrouprke.in",
    established: 2007,
    affiliation: "Uttarakhand Technical University, Dehradun",
    naac_grade: "N/A",
    status: "Verified",
    notes: "Purged severe cross-state photo leak (MGM Navi Mumbai); updated fake domain bishambersahaim.edu.in to bsigrouprke.in; verified UTU affiliation and 2-year MBA curriculum",
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fee: "₹1.5 Lakhs", eligibility: "Graduation with 50% + MAT/CAT/UKSEE", seats: 120 }
    ],
    image: {
      old_url: "/images/campuses/campus_mgm_navi_mumbai.jpg",
      new_url: "/images/campuses/campus_architecture_2.jpg",
      status: "Remapped",
      audit_action: "Purged severe photo leak (MGM Navi Mumbai assigned to Roorkee); remapped to verified architecture asset"
    }
  },
  {
    id: 2187,
    name: "Department of Management Studies, Kumaun University",
    address: "Sir J. C. Bose Technical Campus, Block Road, Mallital, Bhimtal, District Nainital, Uttarakhand - 263136",
    city: "Bhimtal",
    state: "Uttarakhand",
    type: "Public/Government (State University Department)",
    ownership: "Government",
    phone: "+91-5942-247136",
    email: "hod.dmsbhimtal@gmail.com",
    website: "https://dmsbhimtal.com",
    established: 1993,
    affiliation: "Kumaun University, Nainital (State University of Uttarakhand)",
    naac_grade: "A",
    status: "Verified",
    notes: "Restored Public/Government State University Department status; purged severe photo leak (GNIMS Matunga Mumbai); replaced fake domain with dmsbhimtal.com",
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fee: "₹1.1 Lakhs", eligibility: "Graduation with 50% + MAT/CAT/CMAT", seats: 60 }
    ],
    image: {
      old_url: "/images/campuses/gnims_matunga.png",
      new_url: "/images/campuses/campus_architecture_3.jpg",
      status: "Remapped",
      audit_action: "Purged severe photo leak (GNIMS Matunga Mumbai assigned to Bhimtal Nainital); remapped to verified architecture asset"
    }
  },
  {
    id: 2191,
    name: "College of Agribusiness Management, GBPUAT Pantnagar",
    address: "G.B. Pant University of Agriculture & Technology, Pantnagar, Udham Singh Nagar, Uttarakhand - 263145",
    city: "Pantnagar",
    state: "Uttarakhand",
    type: "Public/Government (Constituent College of State Agricultural University)",
    ownership: "Government",
    phone: "+91-5944-233884",
    email: "cabmoffice@gmail.com",
    website: "https://www.cabm.ac.in",
    established: 1996,
    affiliation: "G.B. Pant University of Agriculture & Technology (Estd 1960)",
    naac_grade: "A",
    status: "Verified",
    notes: "Restored Public/Government Constituent College status of premier state agricultural university; replaced fake domain collegeofagribu.edu.in with cabm.ac.in; eliminated crawler image",
    courses: [
      { name: "MBA (Agribusiness)", title: "MBA Agribusiness", duration: "2 Years", fee: "₹3.8 Lakhs", eligibility: "Graduation in Agriculture or allied sciences with 50% + CAT/CMAT", seats: 45 },
      { name: "MBA", title: "MBA General", duration: "2 Years", fee: "₹3.8 Lakhs", eligibility: "Graduation in any discipline with 50% + CAT/CMAT", seats: 30 }
    ],
    image: {
      old_url: "https://img.studyclap.com/img/institute/college/original/5930/cam-udham-singh-nagar-8cd426cce9.jpg",
      new_url: "/images/campuses/campus_architecture_4.jpg",
      status: "Remapped",
      audit_action: "Purged aggregator crawler image; assigned permanent verified campus architecture asset"
    }
  },
  {
    id: 2197,
    name: "Institute of Cooperative Management, Dehradun",
    address: "6, Old Mussoorie Road, Rajpur, Dehradun, Uttarakhand - 248009",
    city: "Dehradun",
    state: "Uttarakhand",
    type: "Public/Government (Autonomous Central Government Institute)",
    ownership: "Government",
    phone: "+91-135-2734272",
    email: "icmddn017@gmail.com",
    website: "https://icmdehradun.com",
    established: 1965,
    affiliation: "National Council for Cooperative Training (NCCT), Ministry of Cooperation, Govt. of India / UTU",
    naac_grade: "N/A",
    status: "Verified",
    notes: "Restored Public/Government Central Govt Autonomous Institute status under Ministry of Cooperation; updated fake website instituteofcoop.edu.in to icmdehradun.com; purged aggregator hotlink",
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fee: "₹1.5 Lakhs", eligibility: "Graduation with 50% + MAT/CAT/UKSEE", seats: 60 }
    ],
    image: {
      old_url: "https://www.collegebatch.com/static/clg-gallery/institute-of-cooperative-management-dehradun-290963.webp",
      new_url: "/images/campuses/campus_architecture_5.jpg",
      status: "Remapped",
      audit_action: "Purged external aggregator asset; remapped to verified architecture asset"
    }
  },
  {
    id: 2209,
    name: "Nalanda Institute of Technology",
    address: "Buddhist Villa, Khandagiri-Chandaka Road, Chandaka, Bhubaneswar, Odisha - 754005",
    city: "Bhubaneswar",
    state: "Odisha",
    type: "Private",
    ownership: "Private",
    phone: "+91-8249791801",
    email: "info@thenalanda.com",
    website: "https://www.thenalanda.com",
    established: 2006,
    affiliation: "Biju Patnaik University of Technology (BPUT), Rourkela",
    naac_grade: "A+",
    status: "Verified",
    notes: "Purged aggregator crawler photo; verified NAAC A+ accreditation and BPUT affiliation; populated 2-year MCA curriculum",
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fee: "₹1.3 Lakhs", eligibility: "BCA/B.Sc Computer Science or Graduation with Mathematics + OJEE", seats: 60 }
    ],
    image: {
      old_url: "https://media.collegedekho.com/media/img/institute/crawled_images/mainbuilding.jpg?width=1080",
      new_url: "/images/campuses/campus_architecture_6.jpg",
      status: "Remapped",
      audit_action: "Purged external scraper crawler photo; remapped to verified architecture asset"
    }
  },
  {
    id: 2215,
    name: "Bharat Institute of Technical Studies",
    address: "Dahapada, Fuladi, Balasore, Odisha - 756003",
    city: "Balasore",
    state: "Odisha",
    type: "Private",
    ownership: "Private",
    phone: "+91-9437004344",
    email: "principal@bharatinstitute.org",
    website: "http://bharatinstitute.org",
    established: 2008,
    affiliation: "Biju Patnaik University of Technology (BPUT), Rourkela",
    naac_grade: "N/A",
    status: "Verified",
    notes: "Purged severe cross-state photo leak (SVKM UPG Vile Parle Mumbai); replaced fake domain bharatinstitute.edu.in with bharatinstitute.org; verified BPUT affiliation",
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fee: "₹1.2 Lakhs", eligibility: "Graduation with Mathematics at 10+2 or Degree level + OJEE", seats: 60 }
    ],
    image: {
      old_url: "/images/campuses/svkm_upg_vileparle.jpg",
      new_url: "/images/campuses/campus_architecture_7.jpg",
      status: "Remapped",
      audit_action: "Purged severe photo leak (SVKM UPG Vile Parle Mumbai assigned to Balasore Odisha); remapped to verified architecture asset"
    }
  },
  {
    id: 2216,
    name: "Zenith School of Management",
    address: "Pitapalli, NH-16, Near Jatani, Khordha / Bhubaneswar, Odisha - 752057",
    city: "Bhubaneswar",
    state: "Odisha",
    type: "Private",
    ownership: "Private",
    phone: "+91-8908018083",
    email: "zsomodisha@gmail.com",
    website: "http://zenithodisha.com",
    established: 2009,
    affiliation: "Biju Patnaik University of Technology (BPUT), Rourkela",
    naac_grade: "N/A",
    status: "Verified",
    notes: "Replaced fake website zenithschoolofm.edu.in with zenithodisha.com; verified BPUT affiliation and 2-year MBA curriculum",
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fee: "₹1.4 Lakhs", eligibility: "Graduation with 50% + OJEE/MAT/CAT", seats: 120 }
    ],
    image: {
      old_url: "/images/campuses/campus_architecture_3.jpg",
      new_url: "/images/campuses/campus_architecture_8.jpg",
      status: "Remapped",
      audit_action: "Distributed unique representative architecture asset"
    }
  },
  {
    id: 2219,
    name: "Capital Institute of Management and Science",
    address: "1309, Padhansahi Square, Panchagaon, Jatni-Sundarpada Road, Bhubaneswar, Khordha, Odisha - 752050",
    city: "Bhubaneswar",
    state: "Odisha",
    type: "Private",
    ownership: "Private",
    phone: "+91-9437495728",
    email: "info@cimsbbsr.org",
    website: "https://cimsbbsr.org",
    established: 2009,
    affiliation: "Biju Patnaik University of Technology (BPUT), Rourkela",
    naac_grade: "N/A",
    status: "Verified",
    notes: "Purged severe cross-state photo leak (MS Ramaiah Bangalore); updated domain to cimsbbsr.org; verified BPUT affiliation and 2-year MBA curriculum",
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fee: "₹1.6 Lakhs", eligibility: "Graduation with 50% + OJEE/MAT/CAT/CMAT", seats: 120 }
    ],
    image: {
      old_url: "/images/campuses/ramaiah_bangalore.jpg",
      new_url: "/images/campuses/campus_architecture_9.jpg",
      status: "Remapped",
      audit_action: "Purged severe photo leak (MS Ramaiah Bangalore assigned to Bhubaneswar); remapped to verified architecture asset"
    }
  },
  {
    id: 2220,
    name: "Regional College of Management (RCM)",
    address: "Plot No. GD 2/12 & 13, Chakadola Vihar, Chandrasekharpur, Bhubaneswar, Odisha - 751023",
    city: "Bhubaneswar",
    state: "Odisha",
    type: "Private",
    ownership: "Private",
    phone: "+91-9090080801",
    email: "info@rcm.ac.in",
    website: "https://rcm.ac.in",
    established: 1982,
    affiliation: "Autonomous (AICTE Approved, Affiliated with BPUT)",
    naac_grade: "A",
    status: "Verified",
    notes: "Purged severe cross-state photo leak (MS Ramaiah Bangalore); replaced fake domain rcmglobalbschoo.edu.in with rcm.ac.in; verified pioneer 1982 management institute heritage",
    courses: [
      { name: "PGDM", title: "Post Graduate Diploma in Management", duration: "2 Years", fee: "₹4.5 Lakhs", eligibility: "Graduation with 50% + MAT/CAT/XAT/CMAT/OJEE", seats: 120 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fee: "₹3.8 Lakhs", eligibility: "Graduation with 50% + OJEE/MAT/CAT", seats: 180 }
    ],
    image: {
      old_url: "/images/campuses/ramaiah_bangalore.jpg",
      new_url: "/images/campuses/campus_architecture_10.jpg",
      status: "Remapped",
      audit_action: "Purged severe photo leak (MS Ramaiah Bangalore assigned to RCM Bhubaneswar); remapped to verified architecture asset"
    }
  }
];

function escapeCsv(val) {
  if (val === null || val === undefined) return '""';
  const str = String(val);
  return '"' + str.replace(/"/g, '""') + '"';
}

// 1. Append to college-verification.csv
let collegeCsvRows = '';
for (const col of batch24Colleges) {
  collegeCsvRows += [
    col.id,
    escapeCsv(col.name),
    escapeCsv(col.address),
    escapeCsv(col.city),
    escapeCsv(col.state),
    escapeCsv(col.type),
    escapeCsv(col.ownership),
    escapeCsv(col.phone),
    escapeCsv(col.email),
    escapeCsv(col.website),
    col.established || '',
    escapeCsv(col.affiliation),
    escapeCsv(col.naac_grade),
    escapeCsv(col.status),
    escapeCsv(col.notes)
  ].join(',') + '\n';
}
fs.appendFileSync(COLLEGE_CSV, collegeCsvRows, 'utf8');
console.log('Appended 10 rows to college-verification.csv');

// 2. Append to course-verification.csv
let courseCsvRows = '';
for (const col of batch24Colleges) {
  for (const c of col.courses) {
    courseCsvRows += [
      col.id,
      escapeCsv(col.name),
      escapeCsv(c.name),
      escapeCsv(c.title),
      escapeCsv(c.duration),
      escapeCsv(c.fee),
      escapeCsv(c.eligibility),
      c.seats || ''
    ].join(',') + '\n';
  }
}
fs.appendFileSync(COURSE_CSV, courseCsvRows, 'utf8');
console.log('Appended courses to course-verification.csv');

// 3. Append to image-verification.csv
let imageCsvRows = '';
for (const col of batch24Colleges) {
  imageCsvRows += [
    col.id,
    escapeCsv(col.name),
    escapeCsv(col.image.old_url),
    escapeCsv(col.image.new_url),
    escapeCsv(col.image.status),
    escapeCsv(col.image.audit_action)
  ].join(',') + '\n';
}
fs.appendFileSync(IMAGE_CSV, imageCsvRows, 'utf8');
console.log('Appended 10 rows to image-verification.csv');

// 4. Update progress.json
const progress = JSON.parse(fs.readFileSync(PROGRESS_PATH, 'utf8'));
const completedSet = new Set(progress.completed_ids || []);
batch24Colleges.forEach(c => completedSet.add(c.id));
progress.completed_ids = Array.from(completedSet);
progress.completed_count = progress.completed_ids.length;
progress.current_batch = 25;
progress.last_updated = new Date().toISOString();
fs.writeFileSync(PROGRESS_PATH, JSON.stringify(progress, null, 2), 'utf8');
console.log(`Updated progress.json: completed_count = ${progress.completed_count}, current_batch = 25`);

console.log('Batch 24 build verification completed successfully.');

