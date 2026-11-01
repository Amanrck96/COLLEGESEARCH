const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');
const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));

const batch83Map = {
  427: {
    name: 'The Mandvi Education Society Institute of Computer Studies (TMESICS Mandvi, Surat)',
    state: 'Gujarat',
    city: 'Surat',
    type: 'Private',
    website: 'https://mandviedusociety.org',
    phone: '02623-221085',
    rating: 4.0,
    established: 2008,
    image: '',
    courses: [
      { title: 'Bachelor of Computer Applications (BCA)', division: 'Undergraduate', duration: '3 Years', fees: '₹28,000/Year', eligibility: '10+2 in any stream + VNSGU Centralized Admission', exams: 'Merit', intake: '120' },
      { title: 'B.Sc. in Information Technology (B.Sc. IT)', division: 'Undergraduate', duration: '3 Years', fees: '₹30,000/Year', eligibility: '10+2 with Science/Math', exams: 'Merit', intake: '60' },
      { title: 'Post Graduate Diploma in Computer Applications (PGDCA)', division: 'Diploma', duration: '1 Year', fees: '₹20,000 Total', eligibility: 'Graduation in any stream', exams: 'Merit', intake: '60' }
    ]
  },
  428: {
    name: 'Smt. R. S. Patel Institute of Diploma Engineering (Shelavi, Patan)',
    state: 'Gujarat',
    city: 'Patan',
    type: 'Private',
    website: 'http://srspide.org',
    phone: '02766-261200',
    rating: 3.9,
    established: 2013,
    image: '/images/campuses/campus_architecture_2.jpg',
    courses: [
      { title: 'Diploma in Computer Engineering', division: 'Diploma', duration: '3 Years', fees: '₹36,000/Year', eligibility: '10th Standard Pass with Science & Math + ACPDC', exams: 'ACPDC', intake: '60' },
      { title: 'Diploma in Mechanical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹36,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },
      { title: 'Diploma in Civil Engineering', division: 'Diploma', duration: '3 Years', fees: '₹36,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },
      { title: 'Diploma in Electrical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹36,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' }
    ]
  },
  429: {
    name: 'D. A. Degree Engineering and Technology (DADET Mahemdavad, Kheda)',
    state: 'Gujarat',
    city: 'Kheda',
    type: 'Private',
    website: 'https://dadet.org',
    phone: '02694-222300',
    rating: 4.1,
    established: 2014,
    image: 'https://www.joonsquare.com/usermanage/image/business/d-a-degree-engineering-and-technology-kheda-14215/d-a-degree-engineering-and-technology-kheda-d-a-degree-engineering-and-technology-1.jpg',
    courses: [
      { title: 'B.Tech in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹63,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC Gujarat', exams: 'GUJCET, ACPC', intake: '60' },
      { title: 'B.Tech in Civil Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹63,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
      { title: 'B.Tech in Mechanical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹63,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
      { title: 'Diploma in Engineering (Polytechnic)', division: 'Diploma', duration: '3 Years', fees: '₹36,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' }
    ]
  },
  431: {
    name: 'GIDC Degree Engineering College (GDEC Abrama, Navsari)',
    state: 'Gujarat',
    city: 'Navsari',
    type: 'Public/Government',
    website: 'https://gdec.in',
    phone: '02637-229040',
    rating: 4.3,
    established: 2012,
    image: '',
    courses: [
      { title: 'B.Tech in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹61,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC Gujarat', exams: 'GUJCET, ACPC', intake: '60' },
      { title: 'B.Tech in Mechanical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹61,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
      { title: 'B.Tech in Civil Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹61,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
      { title: 'B.Tech in Electrical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹61,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' }
    ]
  },
  432: {
    name: 'Government Polytechnic, Palanpur (GP Palanpur, Banaskantha)',
    state: 'Gujarat',
    city: 'Banaskantha',
    type: 'Public/Government',
    website: 'https://gppalanpur.ac.in',
    phone: '02742-262100',
    rating: 4.2,
    established: 1984,
    image: '',
    courses: [
      { title: 'Diploma in Computer Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,500/Year', eligibility: '10th Standard Pass with Science & Math + ACPDC Gujarat (Tuition Free for Girls)', exams: 'ACPDC', intake: '60' },
      { title: 'Diploma in Civil Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,500/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '120' },
      { title: 'Diploma in Mechanical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,500/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '120' },
      { title: 'Diploma in Electrical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,500/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '120' }
    ]
  },
  433: {
    name: 'A. V. Parekh Technical Institute (AVPTI Rajkot)',
    state: 'Gujarat',
    city: 'Rajkot',
    type: 'Public/Government',
    website: 'https://avpti.ac.in',
    phone: '0281-2480175',
    rating: 4.4,
    established: 1948,
    image: 'https://images.careerindia.com/college-photos/6845/01-main-building_1654511892.JPG',
    courses: [
      { title: 'Diploma in Computer Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,500/Year', eligibility: '10th Standard Pass with Science & Math + ACPDC Gujarat (Tuition Free for Girls)', exams: 'ACPDC', intake: '120' },
      { title: 'Diploma in Biomedical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,500/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },
      { title: 'Diploma in Electronics & Communication', division: 'Diploma', duration: '3 Years', fees: '₹1,500/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '120' },
      { title: 'Diploma in Instrumentation & Control', division: 'Diploma', duration: '3 Years', fees: '₹1,500/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' }
    ]
  },
  434: {
    name: 'Government Polytechnic, Dahod (GP Dahod)',
    state: 'Gujarat',
    city: 'Dahod',
    type: 'Public/Government',
    website: 'https://gpdahod.ac.in',
    phone: '02673-241500',
    rating: 4.2,
    established: 1958,
    image: 'https://img.jagranjosh.com/images/2024/March/1832024/Campus View of Government Polytechnic Dahod_Campus-View.png',
    courses: [
      { title: 'Diploma in Civil Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,500/Year', eligibility: '10th Standard Pass with Science & Math + ACPDC Gujarat (Tuition Free for Girls)', exams: 'ACPDC', intake: '120' },
      { title: 'Diploma in Mechanical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,500/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '120' },
      { title: 'Diploma in Electrical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,500/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '120' },
      { title: 'Diploma in Computer Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,500/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' }
    ]
  },
  435: {
    name: 'Saroj Mohan Institute of Technology (SMIT Hooghly, West Bengal)',
    state: 'West Bengal',
    city: 'Hooghly',
    type: 'Private',
    website: 'https://smitgp.edu.in',
    phone: '03213-261541',
    rating: 4.0,
    established: 2003,
    image: 'https://www.collegebatch.com/static/clg-gallery/saroj-mohan-institute-of-technology-hooghly-294740.webp',
    courses: [
      { title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹85,000/Year', eligibility: '10+2 with PCM + WBJEE / JEE Main', exams: 'WBJEE, JEE Main', intake: '120' },
      { title: 'B.Tech in Electronics & Communication', division: 'Undergraduate', duration: '4 Years', fees: '₹80,000/Year', eligibility: '10+2 with PCM + WBJEE', exams: 'WBJEE', intake: '60' },
      { title: 'B.Tech in Mechanical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹80,000/Year', eligibility: '10+2 with PCM + WBJEE', exams: 'WBJEE', intake: '60' },
      { title: 'Diploma in Civil / Mechanical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹40,000/Year', eligibility: '10th Standard Pass + JEXPO', exams: 'JEXPO', intake: '60' }
    ]
  },
  436: {
    name: 'Maulana Abul Kalam Azad University of Technology (MAKAUT, West Bengal)',
    state: 'West Bengal',
    city: 'Nadia',
    type: 'Public/Government',
    website: 'https://makautwb.ac.in',
    phone: '033-23210731',
    rating: 4.5,
    established: 2001,
    image: '/images/campuses/campus_architecture_5.jpg',
    courses: [
      { title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹35,000/Year', eligibility: '10+2 with PCM + WBJEE', exams: 'WBJEE', intake: '60' },
      { title: 'B.Tech in Information Technology', division: 'Undergraduate', duration: '4 Years', fees: '₹35,000/Year', eligibility: '10+2 with PCM + WBJEE', exams: 'WBJEE', intake: '60' },
      { title: 'Master of Computer Applications (MCA)', division: 'Postgraduate', duration: '2 Years', fees: '₹40,000/Year', eligibility: 'BCA / B.Sc with Math + WB JECA', exams: 'JECA', intake: '60' },
      { title: 'MBA in Business Analytics', division: 'Postgraduate', duration: '2 Years', fees: '₹75,000/Year', eligibility: 'Graduation (50%+) + JEMAT / CAT / MAT', exams: 'JEMAT, CAT, MAT', intake: '60' }
    ]
  },
  437: {
    name: 'The West Bengal National University of Juridical Sciences (WBNUJS Kolkata)',
    state: 'West Bengal',
    city: 'Kolkata',
    type: 'Public/Government',
    website: 'https://www.nujs.edu',
    phone: '033-23357379',
    rating: 4.8,
    established: 1999,
    image: '',
    courses: [
      { title: 'B.A. LL.B. (Hons.)', division: 'Undergraduate', duration: '5 Years', fees: '₹2,75,000/Year', eligibility: '10+2 in any stream (45%+) + CLAT UG', exams: 'CLAT', intake: '132' },
      { title: 'B.Sc. LL.B. (Hons.)', division: 'Undergraduate', duration: '5 Years', fees: '₹2,75,000/Year', eligibility: '10+2 with Science (45%+) + CLAT UG', exams: 'CLAT', intake: '50' },
      { title: 'Master of Laws (LL.M.)', division: 'Postgraduate', duration: '1 Year', fees: '₹1,65,000 Total', eligibility: 'LL.B. degree (50%+) + CLAT PG', exams: 'CLAT PG', intake: '100' },
      { title: 'Ph.D. in Law', division: 'Doctoral', duration: '3 Years', fees: '₹50,000/Year', eligibility: 'Master degree in Law (55%+) + NUJS Entrance / UGC NET', exams: 'NUJS RET, UGC NET', intake: '20' }
    ]
  }
};

let updatedCount = 0;
for (let i = 0; i < siteData.colleges.length; i++) {
  const col = siteData.colleges[i];
  const cid = Number(col.id);
  if (batch83Map[cid]) {
    const update = batch83Map[cid];
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
