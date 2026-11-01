const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');
const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));

const batch67Map = {
  235: {
    name: 'Hansraj College, University of Delhi',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Public/Government',
    website: 'https://www.hansrajcollege.ac.in/',
    phone: '011-27667747',
    rating: 4.8,
    established: 1948,
    image: '/images/campuses/campus_architecture_2.jpg',
    courses: [
      { title: 'B.Sc (Hons) in Computer Science / Mathematics / Physics', division: 'Undergraduate', duration: '3-4 Years', fees: '₹24,000/Year', eligibility: '10+2 with PCM + CUET UG', exams: 'CUET UG', intake: '300' },
      { title: 'Bachelor of Commerce (B.Com Honours)', division: 'Undergraduate', duration: '3-4 Years', fees: '₹22,000/Year', eligibility: '10+2 with Mathematics/Accountancy + CUET UG (99+ %ile)', exams: 'CUET UG', intake: '260' },
      { title: 'B.A. (Hons) in Economics / English / History', division: 'Undergraduate', duration: '3-4 Years', fees: '₹20,000/Year', eligibility: '10+2 in any stream + CUET UG', exams: 'CUET UG', intake: '240' },
      { title: 'Master of Science (M.Sc) / Master of Arts (M.A.)', division: 'Postgraduate', duration: '2 Years', fees: '₹18,000/Year', eligibility: 'Graduation in relevant discipline + CUET PG', exams: 'CUET PG', intake: '150' }
    ]
  },
  236: {
    name: 'Loyola College (Autonomous), Chennai',
    state: 'Tamil Nadu',
    city: 'Chennai',
    type: 'Private',
    website: 'https://www.loyolacollege.edu/',
    phone: '044-28178303',
    rating: 4.9,
    established: 1925,
    image: 'https://img.jagranjosh.com/images/2023/January/3112023/Loyola-College-Chennai-Campus-View-1.jpg',
    courses: [
      { title: 'Bachelor of Commerce (B.Com - General / Corporate)', division: 'Undergraduate', duration: '3 Years', fees: '₹48,000/Year', eligibility: '10+2 with Commerce & Accountancy Merit', exams: 'Merit', intake: '400' },
      { title: 'B.Sc in Visual Communication / Computer Science', division: 'Undergraduate', duration: '3 Years', fees: '₹55,000/Year', eligibility: '10+2 with Mathematics/Science + Aptitude Test', exams: 'Merit + Aptitude', intake: '280' },
      { title: 'B.A. in Economics / English Literature / Sociology', division: 'Undergraduate', duration: '3 Years', fees: '₹35,000/Year', eligibility: '10+2 in any stream Merit', exams: 'Merit', intake: '260' },
      { title: 'M.Sc in Data Science / Biotechnology', division: 'Postgraduate', duration: '2 Years', fees: '₹65,000/Year', eligibility: 'B.Sc in relevant subject + Entrance', exams: 'Loyola Entrance', intake: '60' }
    ]
  },
  238: {
    name: 'Symbiosis Institute of Technology, Nagpur (SIT Nagpur)',
    state: 'Maharashtra',
    city: 'Nagpur',
    type: 'Deemed',
    website: 'https://sitnagpur.edu.in/',
    phone: '0712-6192400',
    rating: 4.4,
    established: 2021,
    image: 'https://www.collegebatch.com/static/clg-gallery/symbiosis-institute-of-technology-pune-365684.webp',
    courses: [
      { title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹2,80,000/Year', eligibility: '10+2 with PCM + SITEEE / JEE Main / MHT CET', exams: 'SITEEE, JEE Main, MHT CET', intake: '180' },
      { title: 'B.Tech in Computer Science (Artificial Intelligence & ML)', division: 'Undergraduate', duration: '4 Years', fees: '₹2,80,000/Year', eligibility: '10+2 with PCM + SITEEE / JEE Main', exams: 'SITEEE, JEE Main', intake: '120' },
      { title: 'B.Tech in Civil / Mechanical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹2,20,000/Year', eligibility: '10+2 with PCM + SITEEE / JEE Main', exams: 'SITEEE, JEE Main', intake: '60' }
    ]
  },
  239: {
    name: 'St. Francis De Sales College, Nagpur (SFS College)',
    state: 'Maharashtra',
    city: 'Nagpur',
    type: 'Private',
    website: 'https://sfscollege.edu.in/',
    phone: '0712-2511354',
    rating: 4.3,
    established: 1956,
    image: '',
    courses: [
      { title: 'Bachelor of Computer Applications (BCA)', division: 'Undergraduate', duration: '3-4 Years', fees: '₹32,000/Year', eligibility: '10+2 with English and Mathematics', exams: 'Merit', intake: '240' },
      { title: 'B.Sc in Computer Science / Biotechnology / Mathematics', division: 'Undergraduate', duration: '3 Years', fees: '₹18,000/Year', eligibility: '10+2 Science Merit', exams: 'Merit', intake: '220' },
      { title: 'B.A. / B.Com Degree Programs', division: 'Undergraduate', duration: '3 Years', fees: '₹12,000/Year', eligibility: '10+2 in relevant stream', exams: 'Merit', intake: '320' }
    ]
  },
  240: {
    name: 'SIES College of Arts, Science and Commerce, Sion, Mumbai',
    state: 'Maharashtra',
    city: 'Mumbai',
    type: 'Private',
    website: 'https://siesascs.edu.in/',
    phone: '022-24010051',
    rating: 4.6,
    established: 1960,
    image: '',
    courses: [
      { title: 'Bachelor of Management Studies (BMS)', division: 'Undergraduate', duration: '3 Years', fees: '₹42,000/Year', eligibility: '10+2 Merit / MAH BBA/BMS CET', exams: 'MAH BBA CET, Merit', intake: '180' },
      { title: 'B.Sc in Information Technology / Computer Science', division: 'Undergraduate', duration: '3 Years', fees: '₹45,000/Year', eligibility: '10+2 with Mathematics', exams: 'Merit', intake: '120' },
      { title: 'B.Com in Accounting & Finance (BAF)', division: 'Undergraduate', duration: '3 Years', fees: '₹38,000/Year', eligibility: '10+2 Commerce Merit', exams: 'Merit', intake: '180' },
      { title: 'M.Sc in Information Technology / Organic Chemistry', division: 'Postgraduate', duration: '2 Years', fees: '₹48,000/Year', eligibility: 'B.Sc degree in relevant subject', exams: 'Merit', intake: '60' }
    ]
  },
  241: {
    name: 'PES Modern College of Computer Science and IT, Nigdi, Pune',
    state: 'Maharashtra',
    city: 'Pune',
    type: 'Private',
    website: 'https://pesmoderncollege.edu.in/',
    phone: '020-27650313',
    rating: 4.2,
    established: 2006,
    image: '',
    courses: [
      { title: 'Bachelor of Computer Applications (BCA)', division: 'Undergraduate', duration: '3-4 Years', fees: '₹45,000/Year', eligibility: '10+2 in any stream with English', exams: 'Merit', intake: '120' },
      { title: 'B.Sc in Computer Science', division: 'Undergraduate', duration: '3 Years', fees: '₹48,000/Year', eligibility: '10+2 Science with Mathematics', exams: 'Merit', intake: '80' },
      { title: 'M.Sc in Computer Science', division: 'Postgraduate', duration: '2 Years', fees: '₹55,000/Year', eligibility: 'B.Sc (CS) / BCA degree', exams: 'Merit', intake: '40' }
    ]
  },
  242: {
    name: 'St. Wilfreds College of Arts, Commerce and Science, Panvel',
    state: 'Maharashtra',
    city: 'Navi Mumbai',
    type: 'Private',
    website: 'https://stwilfreds.com/mumbai/',
    phone: '02143-239010',
    rating: 4.1,
    established: 2011,
    image: 'https://www.collegebatch.com/static/clg-gallery/st-wilfreds-college-of-arts-commerce-science-thane-308305.webp',
    courses: [
      { title: 'Bachelor of Computer Applications (BCA)', division: 'Undergraduate', duration: '3-4 Years', fees: '₹38,000/Year', eligibility: '10+2 in any stream with 45%', exams: 'Merit', intake: '180' },
      { title: 'Bachelor of Management Studies (BMS)', division: 'Undergraduate', duration: '3 Years', fees: '₹35,000/Year', eligibility: '10+2 Merit', exams: 'Merit', intake: '120' },
      { title: 'B.Com in Financial Markets / Banking & Insurance', division: 'Undergraduate', duration: '3 Years', fees: '₹28,000/Year', eligibility: '10+2 Commerce', exams: 'Merit', intake: '120' }
    ]
  },
  243: {
    name: 'MGMs College of Computer Science and IT, Nanded',
    state: 'Maharashtra',
    city: 'Nanded',
    type: 'Private',
    website: 'https://mgmcsit.org/',
    phone: '02462-222999',
    rating: 4.3,
    established: 2000,
    image: '',
    courses: [
      { title: 'Bachelor of Computer Applications (BCA)', division: 'Undergraduate', duration: '3-4 Years', fees: '₹32,000/Year', eligibility: '10+2 in any stream with English', exams: 'Merit', intake: '320' },
      { title: 'B.Sc in Computer Science / Information Technology', division: 'Undergraduate', duration: '3 Years', fees: '₹28,000/Year', eligibility: '10+2 Science', exams: 'Merit', intake: '180' },
      { title: 'M.Sc in Computer Science', division: 'Postgraduate', duration: '2 Years', fees: '₹35,000/Year', eligibility: 'B.Sc (CS) / BCA degree', exams: 'Merit', intake: '60' }
    ]
  },
  244: {
    name: 'MSS Arts, Science and Commerce College, Ambad, Jalna',
    state: 'Maharashtra',
    city: 'Jalna',
    type: 'Private',
    website: 'https://mssambad.org/',
    phone: '02483-220038',
    rating: 4.1,
    established: 1972,
    image: '',
    courses: [
      { title: 'Bachelor of Computer Applications (BCA)', division: 'Undergraduate', duration: '3-4 Years', fees: '₹22,000/Year', eligibility: '10+2 in any stream with 45%', exams: 'Merit', intake: '60' },
      { title: 'B.Sc in Chemistry / Botany / Physics / Zoology', division: 'Undergraduate', duration: '3 Years', fees: '₹8,000/Year', eligibility: '10+2 Science Merit (Subsidized)', exams: 'Merit', intake: '180' },
      { title: 'Bachelor of Arts (B.A.) / Bachelor of Commerce (B.Com)', division: 'Undergraduate', duration: '3 Years', fees: '₹5,500/Year', eligibility: '10+2 Merit', exams: 'Merit', intake: '240' }
    ]
  },
  246: {
    name: 'MKD Institute of Technology, Nadgaon, Jalgaon',
    state: 'Maharashtra',
    city: 'Jalgaon',
    type: 'Private',
    website: 'https://mkdit.edu.in/',
    phone: '0257-2261155',
    rating: 4.0,
    established: 2010,
    image: 'https://mkdit.edu.in/assets/img/campus.jpg',
    courses: [
      { title: 'Diploma in Computer Engineering', division: 'Diploma', duration: '3 Years', fees: '₹42,000/Year', eligibility: '10th Standard with 35% Science & Mathematics', exams: 'CAP / Merit', intake: '60' },
      { title: 'Diploma in Mechanical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹42,000/Year', eligibility: '10th Standard with Science & Math', exams: 'CAP / Merit', intake: '60' },
      { title: 'Diploma in Civil Engineering', division: 'Diploma', duration: '3 Years', fees: '₹42,000/Year', eligibility: '10th Standard with Science & Math', exams: 'CAP / Merit', intake: '60' }
    ]
  }
};

let updatedCount = 0;
for (let i = 0; i < siteData.colleges.length; i++) {
  const col = siteData.colleges[i];
  const cid = Number(col.id);
  if (batch67Map[cid]) {
    const update = batch67Map[cid];
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
