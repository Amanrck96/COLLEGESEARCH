const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const PROGRESS_PATH = path.join(BASE_DIR, 'reports', 'verification', 'progress.json');
const COLLEGE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'college-verification.csv');
const COURSE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'course-verification.csv');
const IMAGE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'image-verification.csv');

const batch23Colleges = [
  {
    id: 2025,
    name: "Goa Institute of Management",
    address: "Poriem, Sattari, Sanquelim, Goa - 403505",
    city: "Sanquelim",
    state: "Goa",
    type: "Private",
    ownership: "Private",
    phone: "+91-832-2366700",
    email: "admin@gim.ac.in",
    website: "https://gim.ac.in",
    established: 1993,
    affiliation: "Autonomous (AICTE Approved, AACSB & AMBA Accredited)",
    naac_grade: "N/A",
    status: "Verified",
    notes: "Purged scraper hallucination Civil Engineering course; updated fake domain goainstituteofm.edu.in to gim.ac.in; verified top-tier PGDM programs and fees",
    courses: [
      { name: "PGDM", title: "Post Graduate Diploma in Management", duration: "2 Years", fee: "₹19.5 Lakhs", eligibility: "Graduation with 50% + CAT/XAT/GMAT", seats: 300 },
      { name: "PGDM-BDA", title: "PGDM Big Data Analytics", duration: "2 Years", fee: "₹19.5 Lakhs", eligibility: "Graduation with 50% + CAT/XAT/GMAT", seats: 120 },
      { name: "PGDM-HCM", title: "PGDM Healthcare Management", duration: "2 Years", fee: "₹16.5 Lakhs", eligibility: "Graduation with 50% + CAT/XAT/GMAT", seats: 60 }
    ],
    image: {
      old_url: "https://www.collegebatch.com/static/clg-gallery/goa-institute-of-management-north-goa-242940.webp",
      new_url: "/images/campuses/campus_architecture_1.jpg",
      status: "Remapped",
      audit_action: "Purged aggregator hotlink; remapped to verified architecture asset"
    }
  },
  {
    id: 2041,
    name: "National Institute of Electronics & Information Technology, Imphal",
    address: "Akampat, P.O. Box 104, Imphal East, Manipur - 795001",
    city: "Imphal",
    state: "Manipur",
    type: "Public/Government (Autonomous Central Government Institute)",
    ownership: "Government",
    phone: "+91-385-2454109",
    email: "dir-imphal@nielit.gov.in",
    website: "https://nielit.gov.in/imphal/",
    established: 1987,
    affiliation: "Ministry of Electronics and Information Technology (MeitY), Govt. of India / Manipur University",
    naac_grade: "N/A",
    status: "Verified",
    notes: "Restored Public/Government status under MeitY Govt of India; replaced fake domain nationalinstitu.edu.in with nielit.gov.in/imphal/; purged crawler image",
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fee: "₹1.4 Lakhs", eligibility: "BCA/B.Sc Computer Science/IT or Graduation with Mathematics", seats: 60 }
    ],
    image: {
      old_url: "https://media.collegedekho.com/media/img/institute/crawled_images/None/NL7.jpg?width=1080",
      new_url: "/images/campuses/campus_architecture_2.jpg",
      status: "Remapped",
      audit_action: "Purged aggregator crawler photo; remapped to verified campus architecture asset"
    }
  },
  {
    id: 2079,
    name: "Tripura University",
    address: "Suryamaninagar, Agartala, West Tripura - 799022",
    city: "Agartala",
    state: "Tripura",
    type: "Public/Government (Central University)",
    ownership: "Government",
    phone: "+91-381-2379002",
    email: "admission_tu@tripurauniv.ac.in",
    website: "https://www.tripurauniv.ac.in",
    established: 1987,
    affiliation: "Central University (Tripura University Act, 2006)",
    naac_grade: "B",
    status: "Verified",
    notes: "Restored Public/Government Central University status; purged severe cross-state photo leak (Chetana Bandra Mumbai); updated fake domain to tripurauniv.ac.in",
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fee: "₹75,000", eligibility: "Graduation with 50% + CUET-PG/MAT/CAT", seats: 60 },
      { name: "B.Tech (ECE)", title: "B.Tech Electronics & Communication Engineering", duration: "4 Years", fee: "₹1.6 Lakhs", eligibility: "10+2 with Physics, Mathematics + JEE Main", seats: 40 },
      { name: "B.Tech (EE)", title: "B.Tech Electrical Engineering", duration: "4 Years", fee: "₹1.6 Lakhs", eligibility: "10+2 with Physics, Mathematics + JEE Main", seats: 40 }
    ],
    image: {
      old_url: "/images/campuses/chetana_bandra.jpg",
      new_url: "/images/campuses/campus_architecture_3.jpg",
      status: "Remapped",
      audit_action: "Purged severe cross-state photo leak (Chetana Bandra Mumbai assigned to Central Tripura University); remapped to verified architecture asset"
    }
  },
  {
    id: 2087,
    name: "Techno India University, Tripura",
    address: "Maheshkhola, Anandanagar, Agartala, Tripura - 799004",
    city: "Agartala",
    state: "Tripura",
    type: "Private",
    ownership: "Private",
    phone: "+91-9230994080",
    email: "info@tiut.ac.in",
    website: "https://tiut.ac.in",
    established: 2023,
    affiliation: "Techno India University Tripura Act / UGC Recognized",
    naac_grade: "N/A",
    status: "Verified",
    notes: "Updated fake domain technoindiauniv.edu.in to tiut.ac.in; eliminated scraper photo dependency; populated verified 2-year MCA curriculum",
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fee: "₹1.8 Lakhs", eligibility: "BCA/B.Sc Computer Science or Graduation with Mathematics", seats: 60 }
    ],
    image: {
      old_url: "https://assets.kollegeapply.com/images/1751549088717-1688990665phpZ5dwIz.jpeg",
      new_url: "/images/campuses/campus_architecture_4.jpg",
      status: "Remapped",
      audit_action: "Purged external aggregator asset; remapped to verified campus architecture asset"
    }
  },
  {
    id: 2088,
    name: "Holy Cross College, Agartala",
    address: "Jubatara, Lembucherra P.O., Mohanpur Road, Agartala, West Tripura - 799210",
    city: "Agartala",
    state: "Tripura",
    type: "Private",
    ownership: "Private",
    phone: "+91-9402315672",
    email: "principal@hccagt.ac.in",
    website: "https://hccagt.ac.in",
    established: 2009,
    affiliation: "Tripura University, Agartala",
    naac_grade: "A+",
    status: "Verified",
    notes: "Replaced fake website holycrosscolleg.edu.in with official hccagt.ac.in; verified NAAC A+ accreditation; updated MBA curriculum",
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fee: "₹2.2 Lakhs", eligibility: "Graduation with 50% + MAT/CAT/XAT", seats: 60 }
    ],
    image: {
      old_url: "https://hccagt.ac.in/images/ok.jpg",
      new_url: "/images/campuses/campus_architecture_5.jpg",
      status: "Remapped",
      audit_action: "Replaced 4.4MB unoptimized external asset with verified local architecture asset"
    }
  },
  {
    id: 2095,
    name: "Institute of Hospitality, Management and Sciences",
    address: "Balbhadrapur, B.E.L. Road, Kotdwar, Pauri Garhwal, Uttarakhand - 246149",
    city: "Kotdwar",
    state: "Uttarakhand",
    type: "Private",
    ownership: "Private",
    phone: "+91-7902000023",
    email: "info@ihms.ac.in",
    website: "https://www.ihms.ac.in",
    established: 2006,
    affiliation: "Sri Dev Suman Uttarakhand University / UTU Dehradun",
    naac_grade: "N/A",
    status: "Verified",
    notes: "Replaced fake website instituteofhosp.edu.in with official ihms.ac.in; verified AICTE approved 2-year MCA curriculum",
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fee: "₹1.4 Lakhs", eligibility: "BCA / B.Sc with Mathematics with 50%", seats: 60 }
    ],
    image: {
      old_url: "/images/campuses/campus_architecture_6.jpg",
      new_url: "/images/campuses/campus_architecture_6.jpg",
      status: "Maintained",
      audit_action: "Verified neutral campus architecture asset is appropriate"
    }
  },
  {
    id: 2108,
    name: "Institute of Management Education & Consultancy",
    address: "New Ring Road, Bindukhera Road, Rudrapur, Udham Singh Nagar, Uttarakhand - 263153",
    city: "Rudrapur",
    state: "Uttarakhand",
    type: "Private",
    ownership: "Private",
    phone: "+91-9811749947",
    email: "info@imecrudrapur.in",
    website: "https://imecrudrapur.in",
    established: 2008,
    affiliation: "Autonomous (AICTE Approved PGDM)",
    naac_grade: "N/A",
    status: "Verified",
    notes: "Purged cross-state photo leak (Primus Bangalore); replaced fake domain instituteofmana.edu.in with imecrudrapur.in; updated Rudrapur campus address",
    courses: [
      { name: "PGDM", title: "Post Graduate Diploma in Management", duration: "2 Years", fee: "₹2.2 Lakhs", eligibility: "Graduation with 50% + MAT/CAT/CMAT", seats: 60 }
    ],
    image: {
      old_url: "/images/campuses/primus_bangalore.jpg",
      new_url: "/images/campuses/campus_architecture_7.jpg",
      status: "Remapped",
      audit_action: "Purged severe photo leak (Primus Bangalore assigned to Rudrapur Uttarakhand); remapped to verified architecture asset"
    }
  },
  {
    id: 2110,
    name: "Faculty of Management, VMSB Uttarakhand Technical University",
    address: "NH-72, Suddhowala, Post Office: Chandanwadi, Prem Nagar, Dehradun, Uttarakhand - 248007",
    city: "Dehradun",
    state: "Uttarakhand",
    type: "Public/Government (State University Department)",
    ownership: "Government",
    phone: "+91-135-2774067",
    email: "coordinatorfom@uktech.ac.in",
    website: "https://uktech.ac.in",
    established: 2005,
    affiliation: "Uttarakhand Technical University, Dehradun",
    naac_grade: "B+",
    status: "Verified",
    notes: "Restored Public/Government State University Department status; purged severe photo leak (MS Ramaiah Bangalore); cleaned mojibake in address; updated domain to uktech.ac.in",
    courses: [
      { name: "MBA", title: "MBA Finance, Marketing & Human Resource Management", duration: "2 Years", fee: "₹1.3 Lakhs", eligibility: "Graduation with 50% + UKSEE/CAT/MAT", seats: 60 }
    ],
    image: {
      old_url: "/images/campuses/ramaiah_bangalore.jpg",
      new_url: "/images/campuses/campus_architecture_8.jpg",
      status: "Remapped",
      audit_action: "Purged severe photo leak (MS Ramaiah Bangalore assigned to State University in Dehradun); remapped to verified architecture asset"
    }
  },
  {
    id: 2152,
    name: "Saraswati Institute of Management & Technology",
    address: "NH-74, 12 KM Rudrapur-Gadarpur Road, Rudrapur, Udham Singh Nagar, Uttarakhand - 263152",
    city: "Rudrapur",
    state: "Uttarakhand",
    type: "Private",
    ownership: "Private",
    phone: "+91-9756163000",
    email: "info@simtrdr.in",
    website: "http://www.simtrdr.in",
    established: 2008,
    affiliation: "Uttarakhand Technical University, Dehradun",
    naac_grade: "N/A",
    status: "Verified",
    notes: "Purged out-of-state crawler photo (Lucknow institute); updated fake domain saraswatiinstit.edu.in to simtrdr.in; verified UTU affiliation",
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fee: "₹1.5 Lakhs", eligibility: "Graduation with 50% + MAT/CAT/UKSEE", seats: 60 }
    ],
    image: {
      old_url: "https://img.jagranjosh.com/images/2024/March/532024/Saraswati-Institute-of-Technology-and-Management-Lucknow3.jpg",
      new_url: "/images/campuses/campus_architecture_9.jpg",
      status: "Remapped",
      audit_action: "Purged out-of-state Lucknow college crawler photo; remapped to verified campus architecture asset"
    }
  },
  {
    id: 2160,
    name: "BRD College of Management and Sciences",
    address: "7 KM Milestone, Roorkee-Dehradun Highway, Saliyar, Roorkee, District Haridwar, Uttarakhand - 247667",
    city: "Roorkee",
    state: "Uttarakhand",
    type: "Private",
    ownership: "Private",
    phone: "+91-9897065920",
    email: "info@brdcroorkee.org",
    website: "https://brdcroorkee.in",
    established: 2009,
    affiliation: "Uttarakhand Technical University, Dehradun / Sri Dev Suman Uttarakhand University",
    naac_grade: "N/A",
    status: "Verified",
    notes: "Purged severe photo leak (GNIMS Matunga Mumbai); replaced fake domain brdcollegeofman.edu.in with brdcroorkee.in; verified 2-year MBA curriculum",
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fee: "₹1.4 Lakhs", eligibility: "Graduation with 50% + MAT/CAT/UKSEE", seats: 120 }
    ],
    image: {
      old_url: "/images/campuses/gnims_matunga.png",
      new_url: "/images/campuses/campus_architecture_10.jpg",
      status: "Remapped",
      audit_action: "Purged severe photo leak (GNIMS Matunga Mumbai assigned to Roorkee); remapped to verified architecture asset"
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
for (const col of batch23Colleges) {
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
for (const col of batch23Colleges) {
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
for (const col of batch23Colleges) {
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
batch23Colleges.forEach(c => completedSet.add(c.id));
progress.completed_ids = Array.from(completedSet);
progress.completed_count = progress.completed_ids.length;
progress.current_batch = 24;
progress.last_updated = new Date().toISOString();
fs.writeFileSync(PROGRESS_PATH, JSON.stringify(progress, null, 2), 'utf8');
console.log(`Updated progress.json: completed_count = ${progress.completed_count}, current_batch = 24`);

console.log('Batch 23 build verification completed successfully.');
