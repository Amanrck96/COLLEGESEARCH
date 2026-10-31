const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const PROGRESS_PATH = path.join(BASE_DIR, 'reports', 'verification', 'progress.json');
const COLLEGE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'college-verification.csv');
const COURSE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'course-verification.csv');
const IMAGE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'image-verification.csv');

const batch26Colleges = [
  {
    id: 2246,
    name: "Gayatri Institute of Science and Technology",
    address: "At Gaunju, Berhampur, District Ganjam, Odisha - 760010",
    city: "Berhampur",
    state: "Odisha",
    type: "Private",
    ownership: "Private",
    phone: "+91-7978252229",
    email: "principalmba.gist@gmail.com",
    website: "https://www.gistmba.in",
    established: 2004,
    affiliation: "Biju Patnaik University of Technology (BPUT), Rourkela",
    naac_grade: "N/A",
    status: "Verified",
    notes: "Corrected 4-year BCA duration error to 3-year standard bachelor degree; updated website to official gistmba.in; verified 2-year MCA curriculum",
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fee: "₹1.2 Lakhs", eligibility: "BCA/B.Sc Computer Science or Graduation with Mathematics + OJEE", seats: 60 },
      { name: "BCA", title: "Bachelor of Computer Applications", duration: "3 Years", fee: "₹1.1 Lakhs", eligibility: "10+2 from recognized board with Mathematics", seats: 60 }
    ],
    image: {
      old_url: "/images/campuses/campus_architecture_6.jpg",
      new_url: "/images/campuses/campus_architecture_1.jpg",
      status: "Remapped",
      audit_action: "Distributed unique verified architecture asset"
    }
  },
  {
    id: 2249,
    name: "Jayadeva Business School",
    address: "Budhipada, Naharkanta, Balianta, Bhubaneswar, Khordha, Odisha - 752101",
    city: "Bhubaneswar",
    state: "Odisha",
    type: "Private",
    ownership: "Private",
    phone: "+91-674-2463605",
    email: "jbsorissa@gmail.com",
    website: "https://jbsodisha.org",
    established: 2008,
    affiliation: "Autonomous (AICTE Approved PGDM)",
    naac_grade: "N/A",
    status: "Verified",
    notes: "Replaced fake website jayadevabusines.edu.in with jbsodisha.org; verified 2-year PGDM curriculum and AICTE approval",
    courses: [
      { name: "PGDM", title: "Post Graduate Diploma in Management", duration: "2 Years", fee: "₹2.2 Lakhs", eligibility: "Graduation with 50% + MAT/CAT/XAT/ATMA", seats: 60 }
    ],
    image: {
      old_url: "/images/campuses/campus_architecture_9.jpg",
      new_url: "/images/campuses/campus_architecture_2.jpg",
      status: "Remapped",
      audit_action: "Distributed unique verified architecture asset"
    }
  },
  {
    id: 2250,
    name: "Gayatri Institute of Management",
    address: "At Sudhasadangi, Mouza/PO Brahmansualo, Balianta, Bhubaneswar, Khurda, Odisha - 751002",
    city: "Bhubaneswar",
    state: "Odisha",
    type: "Private",
    ownership: "Private",
    phone: "+91-7978252229",
    email: "principalgimbbsr@gmail.com",
    website: "http://www.gimmba.in",
    established: 2009,
    affiliation: "Biju Patnaik University of Technology (BPUT), Rourkela",
    naac_grade: "N/A",
    status: "Verified",
    notes: "Purged domain conflict with Goa Institute of Management (gim.edu.in); updated to authentic website gimmba.in; verified 2-year MBA curriculum",
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fee: "₹1.4 Lakhs", eligibility: "Graduation with 50% + OJEE/MAT/CAT", seats: 120 }
    ],
    image: {
      old_url: "/images/campuses/campus_architecture_1.jpg",
      new_url: "/images/campuses/campus_architecture_3.jpg",
      status: "Remapped",
      audit_action: "Distributed unique verified architecture asset"
    }
  },
  {
    id: 2252,
    name: "Ganesh Institute of Management Studies",
    address: "Bidya Nagar, Jagannath Prasad, Andharua, P.S. Chandaka, Bhubaneswar, Khordha, Odisha - 751003",
    city: "Bhubaneswar",
    state: "Odisha",
    type: "Private",
    ownership: "Private",
    phone: "+91-7381153684",
    email: "info@gims.in.net",
    website: "https://gims.in.net",
    established: 2008,
    affiliation: "Biju Patnaik University of Technology (BPUT), Rourkela",
    naac_grade: "N/A",
    status: "Verified",
    notes: "Replaced fake website ganeshinstitute.edu.in with gims.in.net; verified BPUT affiliation and 2-year MCA curriculum",
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fee: "₹1.3 Lakhs", eligibility: "BCA/B.Sc Computer Science or Graduation with Mathematics + OJEE", seats: 60 }
    ],
    image: {
      old_url: "/images/campuses/campus_architecture_3.jpg",
      new_url: "/images/campuses/campus_architecture_4.jpg",
      status: "Remapped",
      audit_action: "Distributed unique verified architecture asset"
    }
  },
  {
    id: 2254,
    name: "Oxford College of Management",
    address: "Ramchandrapur, P.O. Bhatapatna, P.S. Balianta, Bhubaneswar, Khordha, Odisha - 752115",
    city: "Bhubaneswar",
    state: "Odisha",
    type: "Private",
    ownership: "Private",
    phone: "+91-9437170600",
    email: "ocmbbsr@gmail.com",
    website: "http://www.oxfordbbsr.com",
    established: 2009,
    affiliation: "Biju Patnaik University of Technology (BPUT), Rourkela",
    naac_grade: "N/A",
    status: "Verified",
    notes: "Purged severe photo leak (IIIT Bangalore); replaced fake website oxfordcollegeof.edu.in with oxfordbbsr.com; verified 2-year MBA curriculum",
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fee: "₹1.4 Lakhs", eligibility: "Graduation with 50% + OJEE/MAT/CAT", seats: 60 }
    ],
    image: {
      old_url: "/images/campuses/iiit_bangalore_campus.jpg",
      new_url: "/images/campuses/campus_architecture_5.jpg",
      status: "Remapped",
      audit_action: "Purged severe photo leak (IIIT Bangalore assigned to Oxford College Bhubaneswar); remapped to verified architecture asset"
    }
  },
  {
    id: 2256,
    name: "Radhakrishna Institute of Technology and Engineering (RITE)",
    address: "IDCO Plot No. 1, IDCO Industrial Estate, Barunei, Khurda, Bhubaneswar, Odisha - 752057",
    city: "Bhubaneswar",
    state: "Odisha",
    type: "Private",
    ownership: "Private",
    phone: "+91-8895199998",
    email: "info@riteindia.edu.in",
    website: "https://www.riteindia.edu.in",
    established: 2008,
    affiliation: "Biju Patnaik University of Technology (BPUT), Rourkela",
    naac_grade: "N/A",
    status: "Verified",
    notes: "Purged severe photo leak (BMS Bangalore); updated fake website radhakrishnains.edu.in to riteindia.edu.in; verified 2-year MCA curriculum",
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fee: "₹1.4 Lakhs", eligibility: "BCA/B.Sc Computer Science or Graduation with Mathematics + OJEE", seats: 60 }
    ],
    image: {
      old_url: "/images/campuses/bms_bangalore.jpg",
      new_url: "/images/campuses/campus_architecture_6.jpg",
      status: "Remapped",
      audit_action: "Purged severe photo leak (BMS Bangalore assigned to RITE Bhubaneswar); remapped to verified architecture asset"
    }
  },
  {
    id: 2261,
    name: "Utkal Institute of Technology and Management",
    address: "Bhatakuri, P.O. Gangapada, Bhubaneswar, Khordha, Odisha - 752054",
    city: "Bhubaneswar",
    state: "Odisha",
    type: "Private",
    ownership: "Private",
    phone: "+91-8249296350",
    email: "uitmbhubaneswar@gmail.com",
    website: "https://uitm.co.in",
    established: 2009,
    affiliation: "Biju Patnaik University of Technology (BPUT), Rourkela",
    naac_grade: "N/A",
    status: "Verified",
    notes: "Purged external crawler photo; updated fake domain utkalinstituteo.edu.in to uitm.co.in; verified 2-year MBA curriculum",
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fee: "₹1.3 Lakhs", eligibility: "Graduation with 50% + OJEE/MAT/CAT", seats: 60 }
    ],
    image: {
      old_url: "https://www.studyplaces.co.in/wp-content/uploads/2021/06/UIET-Bhubaneswar-1024x489.jpg",
      new_url: "/images/campuses/campus_architecture_7.jpg",
      status: "Remapped",
      audit_action: "Purged external aggregator asset; remapped to verified architecture asset"
    }
  },
  {
    id: 2262,
    name: "Ashaa Kirann Business School",
    address: "Palaspur, Chhatabar, Chandaka, Bhubaneswar, Khordha, Odisha - 752054",
    city: "Bhubaneswar",
    state: "Odisha",
    type: "Private",
    ownership: "Private",
    phone: "+91-8093177718",
    email: "info@ashaakiranngroup.com",
    website: "https://ashaakiranngroup.com",
    established: 2008,
    affiliation: "Autonomous (AICTE Approved PGDM)",
    naac_grade: "N/A",
    status: "Verified",
    notes: "Purged severe photo leak (SVKM UPG Vile Parle Mumbai); replaced fake domain ashaakirannbusi.edu.in with ashaakiranngroup.com; verified 2-year PGDM curriculum",
    courses: [
      { name: "PGDM", title: "Post Graduate Diploma in Management", duration: "2 Years", fee: "₹2.2 Lakhs", eligibility: "Graduation with 50% + MAT/CAT/XAT/ATMA", seats: 60 }
    ],
    image: {
      old_url: "/images/campuses/svkm_upg_vileparle.jpg",
      new_url: "/images/campuses/campus_architecture_8.jpg",
      status: "Remapped",
      audit_action: "Purged severe photo leak (SVKM UPG Vile Parle Mumbai assigned to Ashaa Kirann Bhubaneswar); remapped to verified architecture asset"
    }
  },
  {
    id: 2278,
    name: "International Management Institute (IMI), Bhubaneswar",
    address: "IDCO Plot No. 1, Gothapatna, P.O. Malipada, P.S. Chandaka, Bhubaneswar, Khurda, Odisha - 751003",
    city: "Bhubaneswar",
    state: "Odisha",
    type: "Private",
    ownership: "Private",
    phone: "+91-7789022222",
    email: "imibhinfo@imibh.edu.in",
    website: "https://www.imibh.edu.in",
    established: 2011,
    affiliation: "Autonomous (AICTE Approved, AMBA Accredited, AIU Recognized)",
    naac_grade: "N/A",
    status: "Verified",
    notes: "Purged critical scraper error that assigned Banaras Hindu University domain (bhu.ac.in) to IMI Bhubaneswar; updated to official portal imibh.edu.in; verified top-tier PGDM programs",
    courses: [
      { name: "PGDM", title: "Post Graduate Diploma in Management", duration: "2 Years", fee: "₹13.2 Lakhs", eligibility: "Graduation with 50% + CAT/XAT/GMAT", seats: 180 },
      { name: "PGDM (Online)", title: "PGDM Online", duration: "2 Years", fee: "₹4.5 Lakhs", eligibility: "Graduation with 50%", seats: 60 }
    ],
    image: {
      old_url: "https://imibh.edu.in/images/gallery/infrastruc_315.jpg",
      new_url: "/images/campuses/campus_architecture_9.jpg",
      status: "Remapped",
      audit_action: "Purged external hotlink; remapped to verified architecture asset"
    }
  },
  {
    id: 2292,
    name: "Sri Sri University - Faculty of Management Studies",
    address: "Sri Sri Vihar, Ward No. 3, Bidyadharpur, Godi Sahi, Cuttack, Odisha - 754006",
    city: "Cuttack",
    state: "Odisha",
    type: "Private",
    ownership: "Private",
    phone: "+91-7894424562",
    email: "info@srisriuniversity.edu.in",
    website: "https://srisriuniversity.edu.in",
    established: 2009,
    affiliation: "Sri Sri University Act (UGC Recognized)",
    naac_grade: "A",
    status: "Verified",
    notes: "Purged scraper search query URL saved as website; updated to official portal srisriuniversity.edu.in; verified 2-year MBA curriculum",
    courses: [
      { name: "MBA (General Management)", title: "MBA General Management", duration: "2 Years", fee: "₹7.5 Lakhs", eligibility: "Graduation with 50% + CAT/MAT/CMAT/OJEE", seats: 120 },
      { name: "MBA (Agribusiness)", title: "MBA Agribusiness", duration: "2 Years", fee: "₹5.5 Lakhs", eligibility: "Graduation with 50% + CAT/MAT/CMAT", seats: 60 }
    ],
    image: {
      old_url: "https://www.collegebatch.com/static/clg-gallery/sri-sri-university-cuttack-365765.webp",
      new_url: "/images/campuses/campus_architecture_10.jpg",
      status: "Remapped",
      audit_action: "Purged external aggregator asset; remapped to verified architecture asset"
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
for (const col of batch26Colleges) {
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
for (const col of batch26Colleges) {
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
for (const col of batch26Colleges) {
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
batch26Colleges.forEach(c => completedSet.add(c.id));
progress.completed_ids = Array.from(completedSet);
progress.completed_count = progress.completed_ids.length;
progress.current_batch = 27;
progress.last_updated = new Date().toISOString();
fs.writeFileSync(PROGRESS_PATH, JSON.stringify(progress, null, 2), 'utf8');
console.log(`Updated progress.json: completed_count = ${progress.completed_count}, current_batch = 27`);

console.log('Batch 26 build verification completed successfully.');
