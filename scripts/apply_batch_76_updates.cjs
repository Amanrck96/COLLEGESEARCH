const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');
const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));

const batch76Map = {
  341: {
    name: 'SRM Institute of Science and Technology (SRMIST Kattankulathur)',
    state: 'Tamil Nadu',
    city: 'Chennai',
    type: 'Deemed',
    website: 'https://www.srmist.edu.in',
    phone: '044-27455510',
    rating: 4.6,
    established: 1985,
    image: '',
    courses: [
      { title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹3,75,000/Year', eligibility: '10+2 with PCM (60%+) + SRMJEEE / JEE Main', exams: 'SRMJEEE, JEE Main', intake: '1200' },
      { title: 'B.Tech in Artificial Intelligence & Data Science', division: 'Undergraduate', duration: '4 Years', fees: '₹3,75,000/Year', eligibility: '10+2 with PCM + SRMJEEE', exams: 'SRMJEEE', intake: '180' },
      { title: 'Master of Business Administration (MBA)', division: 'Postgraduate', duration: '2 Years', fees: '₹4,00,000/Year', eligibility: 'Graduation with 50% + SRMJEEM / CAT / MAT', exams: 'SRMJEEM, CAT, MAT', intake: '240' },
      { title: 'Master of Computer Applications (MCA)', division: 'Postgraduate', duration: '2 Years', fees: '₹1,25,000/Year', eligibility: 'BCA / B.Sc with Math + SRM Entrance', exams: 'SRM Entrance', intake: '120' }
    ]
  },
  342: {
    name: 'SASTRA Deemed to be University, Thanjavur',
    state: 'Tamil Nadu',
    city: 'Thanjavur',
    type: 'Deemed',
    website: 'https://www.sastra.edu',
    phone: '04362-264101',
    rating: 4.7,
    established: 1984,
    image: '',
    courses: [
      { title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,70,000/Year', eligibility: '10+2 with PCM + JEE Main + +2 Marks (70:30 Stream)', exams: 'JEE Main', intake: '300' },
      { title: 'B.Tech in Mechanical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,70,000/Year', eligibility: '10+2 with PCM + Merit', exams: 'Merit', intake: '180' },
      { title: 'Master of Business Administration (MBA)', division: 'Postgraduate', duration: '2 Years', fees: '₹1,20,000/Year', eligibility: 'Graduation with 50% + CAT / XAT / TANCET', exams: 'CAT, XAT, TANCET', intake: '120' },
      { title: 'Master of Computer Applications (MCA)', division: 'Postgraduate', duration: '2 Years', fees: '₹80,000/Year', eligibility: 'BCA/B.Sc Math + Merit', exams: 'Merit', intake: '60' }
    ]
  },
  343: {
    name: 'Kalasalingam Academy of Research and Education (KARE Virudhunagar)',
    state: 'Tamil Nadu',
    city: 'Virudhunagar',
    type: 'Deemed',
    website: 'https://www.kalasalingam.ac.in',
    phone: '04563-289042',
    rating: 4.3,
    established: 1984,
    image: '/images/campuses/campus_architecture_8.jpg',
    courses: [
      { title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,40,000/Year', eligibility: '10+2 with PCM (50%+) + KEEE / JEE Main', exams: 'KEEE, JEE Main', intake: '600' },
      { title: 'B.Tech in Agricultural Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,20,000/Year', eligibility: '10+2 with PCM/PCB + KEEE', exams: 'KEEE', intake: '60' },
      { title: 'B.Sc. in Agriculture (Hons)', division: 'Undergraduate', duration: '4 Years', fees: '₹1,10,000/Year', eligibility: '10+2 with Science + Merit', exams: 'Merit', intake: '120' },
      { title: 'Master of Business Administration (MBA)', division: 'Postgraduate', duration: '2 Years', fees: '₹85,000/Year', eligibility: 'Graduation with 50% + TANCET / MAT', exams: 'TANCET, MAT', intake: '120' }
    ]
  },
  344: {
    name: 'Mudra Institute of Communications, Ahmedabad (MICA Ahmedabad)',
    state: 'Gujarat',
    city: 'Ahmedabad',
    type: 'Private',
    website: 'https://www.mica.ac.in',
    phone: '02717-308250',
    rating: 4.8,
    established: 1991,
    image: '/images/campuses/campus_architecture_4.jpg',
    courses: [
      { title: 'Post Graduate Diploma in Management - Communications (PGDM-C)', division: 'Postgraduate', duration: '2 Years', fees: '₹11,50,000/Year', eligibility: 'Graduation + CAT / XAT / GMAT + MICAT', exams: 'CAT, XAT, GMAT, MICAT', intake: '180' },
      { title: 'PGDM (General Management & Marketing)', division: 'Postgraduate', duration: '2 Years', fees: '₹11,50,000/Year', eligibility: 'Graduation + CAT / XAT / GMAT + MICAT', exams: 'CAT, XAT, GMAT, MICAT', intake: '60' },
      { title: 'Crafting Creative Communication (CCC)', division: 'Certificate', duration: '1 Year', fees: '₹9,50,000 Total', eligibility: 'Graduation in any discipline + Creative Test', exams: 'Creative Test', intake: '40' },
      { title: 'Fellow Programme in Management (FPM - Communications)', division: 'Doctoral', duration: '4 Years', fees: 'Subsidized Fellowship', eligibility: 'Master Degree with 55% + MICAT / UGC NET', exams: 'MICAT, UGC NET', intake: '10' }
    ]
  },
  345: {
    name: 'Chandigarh University Online (CU Online, Mohali)',
    state: 'Punjab',
    city: 'Mohali',
    type: 'Private',
    website: 'https://onlinecu.in',
    phone: '1800-1213-88800',
    rating: 4.2,
    established: 2012,
    image: '',
    courses: [
      { title: 'Master of Business Administration (Online MBA)', division: 'Postgraduate', duration: '2 Years', fees: '₹35,000/Year', eligibility: 'Graduation with 50% in any discipline', exams: 'Direct Admission', intake: 'Open' },
      { title: 'Master of Computer Applications (Online MCA)', division: 'Postgraduate', duration: '2 Years', fees: '₹32,000/Year', eligibility: 'BCA / B.Sc with CS / Math', exams: 'Direct Admission', intake: 'Open' },
      { title: 'Bachelor of Business Administration (Online BBA)', division: 'Undergraduate', duration: '3 Years', fees: '₹28,000/Year', eligibility: '10+2 in any stream', exams: 'Direct Admission', intake: 'Open' },
      { title: 'Bachelor of Computer Applications (Online BCA)', division: 'Undergraduate', duration: '3 Years', fees: '₹28,000/Year', eligibility: '10+2 with Mathematics/CS', exams: 'Direct Admission', intake: 'Open' }
    ]
  },
  346: {
    name: 'P. P. Savani University, Surat',
    state: 'Gujarat',
    city: 'Surat',
    type: 'Private',
    website: 'https://www.ppsu.ac.in',
    phone: '095120-35619',
    rating: 4.2,
    established: 2017,
    image: 'https://www.ppsu.ac.in/img/banner1.jpg',
    courses: [
      { title: 'B.Tech in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹95,000/Year', eligibility: '10+2 with PCM + GUJCET / JEE Main', exams: 'GUJCET, JEE Main', intake: '120' },
      { title: 'Bachelor of Physiotherapy (BPT)', division: 'Undergraduate', duration: '4.5 Years', fees: '₹90,000/Year', eligibility: '10+2 with PCB + ACPC', exams: 'ACPC', intake: '60' },
      { title: 'Bachelor of Architecture (B.Arch)', division: 'Undergraduate', duration: '5 Years', fees: '₹1,10,000/Year', eligibility: '10+2 with PCM + NATA', exams: 'NATA', intake: '40' },
      { title: 'Master of Business Administration (MBA)', division: 'Postgraduate', duration: '2 Years', fees: '₹85,000/Year', eligibility: 'Graduation with 50% + CMAT / ACPC', exams: 'CMAT, ACPC', intake: '60' }
    ]
  },
  347: {
    name: 'UPES Online - Centre for Continuing Education (Dehradun)',
    state: 'Uttarakhand',
    city: 'Dehradun',
    type: 'Private',
    website: 'https://www.upesonline.ac.in',
    phone: '1800-103-1495',
    rating: 4.3,
    established: 2007,
    image: '/images/campuses/campus_architecture_6.jpg',
    courses: [
      { title: 'Online MBA (Oil & Gas / Logistics & Supply Chain / Power)', division: 'Postgraduate', duration: '2 Years', fees: '₹45,000/Year', eligibility: 'Graduation with 50% in any discipline', exams: 'Direct Admission', intake: 'Open' },
      { title: 'Online Bachelor of Business Administration (BBA)', division: 'Undergraduate', duration: '3 Years', fees: '₹35,000/Year', eligibility: '10+2 in any stream', exams: 'Direct Admission', intake: 'Open' },
      { title: 'Online Bachelor of Computer Applications (BCA)', division: 'Undergraduate', duration: '3 Years', fees: '₹35,000/Year', eligibility: '10+2 with Mathematics/CS', exams: 'Direct Admission', intake: 'Open' },
      { title: 'Post Graduate Program in Data Science & Analytics', division: 'Certificate', duration: '1 Year', fees: '₹65,000 Total', eligibility: 'Graduation with Mathematics/Stats', exams: 'Direct Admission', intake: '60' }
    ]
  },
  348: {
    name: 'Birla Institute of Management Technology - Online (BIMTECH Online, Greater Noida)',
    state: 'Uttar Pradesh',
    city: 'Greater Noida',
    type: 'Private',
    website: 'https://bimtechonline.ac.in',
    phone: '0120-6843000',
    rating: 4.5,
    established: 1988,
    image: '',
    courses: [
      { title: 'Post Graduate Diploma in Management (Online PGDM)', division: 'Postgraduate', duration: '2 Years', fees: '₹1,37,500/Year', eligibility: 'Graduation with 50% in any discipline', exams: 'Direct Admission', intake: '500' },
      { title: 'Online PGDM in Supply Chain & Logistics Management', division: 'Postgraduate', duration: '2 Years', fees: '₹1,37,500/Year', eligibility: 'Graduation with 50%', exams: 'Direct Admission', intake: '200' },
      { title: 'Executive Certificate in Business Analytics', division: 'Certificate', duration: '6 Months', fees: '₹45,000 Total', eligibility: 'Graduation with Work Experience', exams: 'Direct Admission', intake: '100' }
    ]
  },
  349: {
    name: 'Parul University Online, Vadodara',
    state: 'Gujarat',
    city: 'Vadodara',
    type: 'Private',
    website: 'https://paruluniversity.online',
    phone: '1800-889-9773',
    rating: 4.3,
    established: 2015,
    image: 'https://image-static.collegedunia.com/public/college_data/images/appImage/1599193361PuCampus.jpg',
    courses: [
      { title: 'Online Master of Business Administration (MBA)', division: 'Postgraduate', duration: '2 Years', fees: '₹36,000/Year', eligibility: 'Graduation with 50% in any stream', exams: 'Direct Admission', intake: 'Open' },
      { title: 'Online Master of Computer Applications (MCA)', division: 'Postgraduate', duration: '2 Years', fees: '₹35,000/Year', eligibility: 'BCA / B.Sc with CS / Math', exams: 'Direct Admission', intake: 'Open' },
      { title: 'Online Bachelor of Business Administration (BBA)', division: 'Undergraduate', duration: '3 Years', fees: '₹30,000/Year', eligibility: '10+2 Pass in any stream', exams: 'Direct Admission', intake: 'Open' },
      { title: 'Online Bachelor of Computer Applications (BCA)', division: 'Undergraduate', duration: '3 Years', fees: '₹30,000/Year', eligibility: '10+2 Pass', exams: 'Direct Admission', intake: 'Open' }
    ]
  },
  350: {
    name: 'Indian Institute of Materials Management (IIMM Ahmedabad)',
    state: 'Gujarat',
    city: 'Ahmedabad',
    type: 'Private',
    website: 'https://www.iimm.org',
    phone: '079-26442080',
    rating: 4.2,
    established: 1975,
    image: '',
    courses: [
      { title: 'Post Graduate Diploma in Materials Management (PGDMM - AICTE)', division: 'Postgraduate', duration: '2 Years', fees: '₹55,000/Year', eligibility: 'Graduation with 50% + Entrance / Interview', exams: 'IIMM Entrance', intake: '60' },
      { title: 'Post Graduate Diploma in SCM & Logistics (PGDSCM&L)', division: 'Postgraduate', duration: '2 Years', fees: '₹60,000/Year', eligibility: 'Graduation in any stream', exams: 'Merit & PI', intake: '60' },
      { title: 'Graduate Diploma in Materials Management (GDMM)', division: 'Diploma', duration: '3 Years', fees: '₹28,000/Year', eligibility: '10+2 / Diploma in Engineering', exams: 'Direct Admission', intake: '60' },
      { title: 'Certified Professional in Supply Management (CPSM)', division: 'Certificate', duration: '1 Year', fees: '₹45,000 Total', eligibility: 'Graduation + 3 Years SCM Experience', exams: 'Work Exp + Test', intake: '30' }
    ]
  }
};

let updatedCount = 0;
for (let i = 0; i < siteData.colleges.length; i++) {
  const col = siteData.colleges[i];
  const cid = Number(col.id);
  if (batch76Map[cid]) {
    const update = batch76Map[cid];
    siteData.colleges[i] = {
      ...col,
      name: update.name,
      state: update.state,
      city: update.city,
      type: update.type,
      website: update.website,
      phone: update.phone,
      rating: update.rating,
      established: update.established,
      image: update.image,
      courses: update.courses
    };
    updatedCount++;
    console.log(`Updated ID: ${cid} - ${update.name}`);
  }
}

fs.writeFileSync(siteDataPath, JSON.stringify(siteData, null, 2), 'utf8');
console.log(`Successfully updated ${updatedCount} colleges in ${siteDataPath}`);
