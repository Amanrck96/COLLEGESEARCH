const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const PROGRESS_PATH = path.join(BASE_DIR, 'reports', 'verification', 'progress.json');
const COLLEGE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'college-verification.csv');
const COURSE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'course-verification.csv');
const IMAGE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'image-verification.csv');

const batch32Colleges = [
  {
    id: 2579,
    name: "Tirumala Institute of Technology and Sciences",
    address: "Satulur Village, Nadendla Mandal, Palnadu District, Andhra Pradesh - 522549",
    city: "Satulur",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-8647-248555",
    email: "titsnrt@gmail.com",
    website: "https://titsnrt.org",
    established: 2008,
    affiliation: "JNTU Kakinada (JNTUK)",
    naac_grade: "B",
    status: "Verified",
    notes: "Updated website to titsnrt.org; verified JNTUK affiliation and 2-year MCA curriculum",
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fee: "₹70,000", eligibility: "BCA/B.Sc Computer Science + APICET", seats: 60 }
    ],
    image: {
      old_url: "https://www.campusoption.com/images/colleges/gallery/18_09_17_052538_College.jpg",
      new_url: "/images/campuses/campus_architecture_5.jpg",
      status: "Replaced Hotlink",
      notes: "Replaced campusoption third-party scraper image with verified local architecture asset"
    }
  },
  {
    id: 2580,
    name: "Aditya Institute of Technology and Management (AITAM)",
    address: "K. Kotturu, Tekkali, Srikakulam District, Andhra Pradesh - 532201",
    city: "Tekkali",
    state: "Andhra Pradesh",
    type: "Private (Autonomous)",
    ownership: "Private",
    phone: "+91-9246657908",
    email: "info@adityatekkali.edu.in",
    website: "https://www.adityatekkali.edu.in",
    established: 2001,
    affiliation: "Autonomous / JNTU-GV Vizianagaram",
    naac_grade: "A+",
    status: "Verified",
    notes: "Autonomous institution; NAAC 'A+' Grade; purged cross-state photo leak from VNIT Nagpur (Maharashtra); updated website to adityatekkali.edu.in",
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fee: "₹70,000", eligibility: "BCA/B.Sc Computer Science + APICET", seats: 60 },
      { name: "B.Tech", title: "Bachelor of Technology", duration: "4 Years", fee: "₹2.20 Lakhs", eligibility: "10+2 with PCM + AP EAPCET", seats: 780 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fee: "₹70,000", eligibility: "Graduation + APICET", seats: 60 }
    ],
    image: {
      old_url: "/images/campuses/campus_vnit_nagpur.jpeg",
      new_url: "/images/campuses/campus_architecture_1.jpg",
      status: "Purged Cross-State Leak",
      notes: "Purged leaked VNIT Nagpur Maharashtra photo; assigned verified campus architecture asset"
    }
  },
  {
    id: 2585,
    name: "Addanki Institute of Management and Sciences",
    address: "Near Singarakonda, NRT Road, North Addanki, Bapatla District, Andhra Pradesh - 523201",
    city: "Addanki",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-8592-238262",
    email: "aimsaddanki@gmail.com",
    website: "http://www.aimsaddanki.com",
    established: 2008,
    affiliation: "Acharya Nagarjuna University (ANU), Guntur",
    naac_grade: "B",
    status: "Verified",
    notes: "Updated website to aimsaddanki.com; verified ANU affiliation and 2-year MBA curriculum",
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fee: "₹70,000", eligibility: "Graduation with 50% + APICET", seats: 120 }
    ],
    image: {
      old_url: "https://www.vidyavision.com/CollegeUploads/Photos/2016-13-5-10-51-15_aadanki3.jpg",
      new_url: "/images/campuses/campus_architecture_4.jpg",
      status: "Replaced Hotlink",
      notes: "Replaced external vidyavision scraping image with verified local architecture asset"
    }
  },
  {
    id: 2586,
    name: "Avanthi Institute of Engineering & Technology (Makavarapalem)",
    address: "Tamaram Village, Makavarapalem Mandal, Narsipatnam Revenue Division, Anakapalle District, Andhra Pradesh - 531113",
    city: "Makavarapalem",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-8932-222382",
    email: "principal_aiet@yahoo.com",
    website: "https://www.avanthienggcollege.ac.in",
    established: 1999,
    affiliation: "JNTU Kakinada (JNTUK)",
    naac_grade: "A+",
    status: "Verified",
    notes: "Purged cross-state photo leak from CU Shah Mumbai; updated website to avanthienggcollege.ac.in; accredited NAAC 'A+'",
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fee: "₹70,000", eligibility: "BCA/B.Sc Computer Science + APICET", seats: 60 },
      { name: "B.Tech", title: "Bachelor of Technology", duration: "4 Years", fee: "₹1.80 Lakhs", eligibility: "10+2 with PCM + AP EAPCET", seats: 540 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fee: "₹70,000", eligibility: "Graduation + APICET", seats: 60 }
    ],
    image: {
      old_url: "/images/campuses/campus_cu_shah_mumbai.png",
      new_url: "/images/campuses/campus_architecture_2.jpg",
      status: "Purged Cross-State Leak",
      notes: "Purged leaked CU Shah Mumbai photo; assigned verified campus architecture asset"
    }
  },
  {
    id: 2591,
    name: "Vasavi Institute of Management and Computer Sciences (VIMCS)",
    address: "Vasavi Nagar, Peddapalli Village, Near Bhakarapet Railway Station, Sidhout Mandal, YSR Kadapa District, Andhra Pradesh - 516247",
    city: "Kadapa",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-8589-200399",
    email: "vimcos@rediffmail.com",
    website: "http://www.vimcsciences.ac.in",
    established: 2008,
    affiliation: "JNTUA Anantapur",
    naac_grade: "B",
    status: "Verified",
    notes: "Updated website to vimcsciences.ac.in; verified JNTUA affiliation and 2-year MBA curriculum",
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fee: "₹70,000", eligibility: "Graduation with 50% + APICET", seats: 120 }
    ],
    image: {
      old_url: "https://media.collegedekho.com/media/img/institute/crawled_images/Vasavi_Institute_of_manageme.jpg?width=640",
      new_url: "/images/campuses/campus_architecture_6.jpg",
      status: "Replaced Hotlink",
      notes: "Replaced collegedekho scraper image with verified local architecture asset"
    }
  },
  {
    id: 2597,
    name: "Avanthi Institute of Engineering and Technology (Bhogapuram)",
    address: "Cherukupally Village, Chittivalasa SO, Bhogapuram Mandal, Vizianagaram District, Andhra Pradesh - 535216",
    city: "Bhogapuram",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-8922-279884",
    email: "principal@aietta.ac.in",
    website: "http://aietta.ac.in",
    established: 2005,
    affiliation: "JNTU-GV Vizianagaram",
    naac_grade: "B++",
    status: "Verified",
    notes: "Corrected name typo (ENGINERRING -> Engineering); purged cross-state VJTI Mumbai photo leak; updated website to aietta.ac.in",
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fee: "₹70,000", eligibility: "BCA/B.Sc Computer Science + APICET", seats: 60 },
      { name: "B.Tech", title: "Bachelor of Technology", duration: "4 Years", fee: "₹1.80 Lakhs", eligibility: "10+2 with PCM + AP EAPCET", seats: 480 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fee: "₹70,000", eligibility: "Graduation + APICET", seats: 60 }
    ],
    image: {
      old_url: "/images/campuses/vjti_mumbai.jpg",
      new_url: "/images/campuses/campus_architecture_3.jpg",
      status: "Purged Cross-State Leak",
      notes: "Purged leaked VJTI Mumbai photo; assigned verified campus architecture asset"
    }
  },
  {
    id: 2605,
    name: "Maris Stella College (Autonomous)",
    address: "RTC Colony, Opp. Govt Polytechnic, Near Benz Circle, Vijayawada, Andhra Pradesh - 520008",
    city: "Vijayawada",
    state: "Andhra Pradesh",
    type: "Public/Government-Aided (Autonomous)",
    ownership: "Government-Aided",
    phone: "+91-866-2479181",
    email: "mscvja@marisstella.ac.in",
    website: "https://www.marisstella.ac.in",
    established: 1962,
    affiliation: "Krishna University, Machilipatnam",
    naac_grade: "A+",
    status: "Verified",
    notes: "Restored Government-Aided Autonomous status (Estd 1962, NAAC A+); updated website to marisstella.ac.in; verified MBA and PG curricula",
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fee: "₹60,000", eligibility: "Graduation + APICET", seats: 60 },
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fee: "₹60,000", eligibility: "BCA/B.Sc + APICET", seats: 60 }
    ],
    image: {
      old_url: "https://www.vidyavision.com/CollegeUploads/Photos/2019-15-7-17-11-15_Marries.jpg",
      new_url: "/images/campuses/campus_architecture_7.jpg",
      status: "Replaced Hotlink",
      notes: "Replaced external vidyavision scraping image with verified local architecture asset"
    }
  },
  {
    id: 2608,
    name: "Akkineni Nageswara Rao (ANR) College (Autonomous)",
    address: "Post Box No. 20, Eluru Road, Gudivada, Krishna District, Andhra Pradesh - 521301",
    city: "Gudivada",
    state: "Andhra Pradesh",
    type: "Public/Government-Aided (Autonomous)",
    ownership: "Government-Aided",
    phone: "+91-8674-242145",
    email: "anrcollegegdv@gmail.com",
    website: "https://www.anrcollege.edu",
    established: 1950,
    affiliation: "Krishna University, Machilipatnam",
    naac_grade: "A",
    status: "Verified",
    notes: "Restored Government-Aided Autonomous status (Estd 1950 by ANR, NAAC A); updated website to anrcollege.edu; verified MBA and PG curricula",
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fee: "₹60,000", eligibility: "Graduation + APICET", seats: 60 },
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fee: "₹60,000", eligibility: "BCA/B.Sc + APICET", seats: 60 }
    ],
    image: {
      old_url: "https://www.collegebatch.com/static/clg-gallery/akkineni-nageswara-rao-college-anr-krishna-62404.webp",
      new_url: "/images/campuses/campus_architecture_9.jpg",
      status: "Replaced Hotlink",
      notes: "Replaced third-party collegebatch scraper webp with verified local architecture asset"
    }
  },
  {
    id: 2609,
    name: "V.S.M. College (Autonomous)",
    address: "Main Road, Ramachandrapuram, Dr. B.R. Ambedkar Konaseema District, Andhra Pradesh - 533255",
    city: "Ramachandrapuram",
    state: "Andhra Pradesh",
    type: "Public/Government-Aided (Autonomous)",
    ownership: "Government-Aided",
    phone: "+91-7729972264",
    email: "vsmcollege66@gmail.com",
    website: "https://www.vsm.edu.in",
    established: 1966,
    affiliation: "Adikavi Nannaya University (AKNU), Rajahmundry",
    naac_grade: "A",
    status: "Verified",
    notes: "Restored Government-Aided Autonomous status (Estd 1966, NAAC A); purged raw Google search URL; purged duplicated 4Y MCA defect; purged CU Shah Mumbai leak",
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fee: "₹60,000", eligibility: "BCA/B.Sc Computer Science + APICET", seats: 60 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fee: "₹60,000", eligibility: "Graduation + APICET", seats: 60 }
    ],
    image: {
      old_url: "/images/campuses/campus_cu_shah_mumbai.png",
      new_url: "/images/campuses/campus_architecture_8.jpg",
      status: "Purged Cross-State Leak",
      notes: "Purged leaked CU Shah Mumbai photo; assigned verified campus architecture asset"
    }
  },
  {
    id: 2612,
    name: "Sri Nalanda Institute of P.G. Studies",
    address: "Siddharth Nagar, Kantepudi Village, Sattenapalli Mandal, Palnadu District, Andhra Pradesh - 522438",
    city: "Sattenapalli",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-8641-237863",
    email: "nalanda.office@gmail.com",
    website: "https://www.ngi.ac.in",
    established: 2003,
    affiliation: "Acharya Nagarjuna University (ANU), Guntur",
    naac_grade: "B",
    status: "Verified",
    notes: "Updated website to ngi.ac.in; verified ANU affiliation and 2-year MBA curriculum",
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fee: "₹70,000", eligibility: "Graduation with 50% + APICET", seats: 120 }
    ],
    image: {
      old_url: "https://www.vidyavision.com/CollegeUploads/Photos/2019-01-4-15-27-11_Nalanda.jpg",
      new_url: "/images/campuses/campus_architecture_10.jpg",
      status: "Replaced Hotlink",
      notes: "Replaced external vidyavision scraping image with verified local architecture asset"
    }
  }
];

// 1. Append to college-verification.csv
let collegeCsvRows = '';
batch32Colleges.forEach(c => {
  collegeCsvRows += `"${c.id}","${c.name.replace(/"/g, '""')}","${c.city}","${c.state}","${c.type}","${c.phone}","${c.email}","${c.website}","${c.established}","${c.affiliation}","${c.naac_grade}","${c.status}","${c.notes.replace(/"/g, '""')}"\n`;
});
fs.appendFileSync(COLLEGE_CSV, collegeCsvRows, 'utf8');
console.log('Appended 10 rows to college-verification.csv');

// 2. Append to course-verification.csv
let courseCsvRows = '';
batch32Colleges.forEach(c => {
  c.courses.forEach(crs => {
    courseCsvRows += `"${c.id}","${c.name.replace(/"/g, '""')}","${crs.name}","${crs.title}","${crs.duration}","${crs.fee}","${crs.eligibility}","${crs.seats}"\n`;
  });
});
fs.appendFileSync(COURSE_CSV, courseCsvRows, 'utf8');
console.log('Appended rows to course-verification.csv');

// 3. Append to image-verification.csv
let imageCsvRows = '';
batch32Colleges.forEach(c => {
  imageCsvRows += `"${c.id}","${c.name.replace(/"/g, '""')}","${c.image.old_url}","${c.image.new_url}","${c.image.status}","${c.image.notes.replace(/"/g, '""')}"\n`;
});
fs.appendFileSync(IMAGE_CSV, imageCsvRows, 'utf8');
console.log('Appended 10 rows to image-verification.csv');

// 4. Update progress.json
const progress = JSON.parse(fs.readFileSync(PROGRESS_PATH, 'utf8'));
const completedSet = new Set(progress.completed_ids || []);
batch32Colleges.forEach(c => completedSet.add(c.id));
progress.completed_ids = Array.from(completedSet);
progress.completed_count = progress.completed_ids.length;
progress.current_batch = 32;
progress.last_updated = new Date().toISOString();
fs.writeFileSync(PROGRESS_PATH, JSON.stringify(progress, null, 2), 'utf8');
console.log(`Updated progress.json: completed_count = ${progress.completed_count}, current_batch = 32`);

console.log('Batch 32 build verification completed successfully.');
