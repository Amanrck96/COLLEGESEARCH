const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');
const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));

const batch64Map = {
  204: {
    name: 'Datta Meghe Institute of Higher Education and Research, Wardha',
    state: 'Maharashtra',
    city: 'Wardha',
    type: 'Deemed',
    website: 'https://dmiher.edu.in/',
    phone: '07152-287701',
    rating: 4.6,
    established: 2005,
    image: '',
    courses: [
      { title: 'Bachelor of Medicine and Bachelor of Surgery (MBBS - JNMC)', division: 'Undergraduate', duration: '5.5 Years', fees: '₹21,50,000/Year', eligibility: '10+2 with 50% in PCB + NEET UG', exams: 'NEET UG', intake: '250' },
      { title: 'Bachelor of Dental Surgery (BDS - SPDC)', division: 'Undergraduate', duration: '5 Years', fees: '₹4,50,000/Year', eligibility: '10+2 with 50% in PCB + NEET UG', exams: 'NEET UG', intake: '100' },
      { title: 'B.Tech in Artificial Intelligence and Data Science', division: 'Undergraduate', duration: '4 Years', fees: '₹1,40,000/Year', eligibility: '10+2 with PCM + MHT CET / JEE Main', exams: 'MHT CET, JEE Main', intake: '120' }
    ]
  },
  205: {
    name: 'Dr. D.Y. Patil Vidyapeeth, Pune',
    state: 'Maharashtra',
    city: 'Pune',
    type: 'Deemed',
    website: 'https://dpu.edu.in/',
    phone: '020-67116412',
    rating: 4.7,
    established: 2003,
    image: 'https://dpu.edu.in/img/compression/buildings3.jpg',
    courses: [
      { title: 'Bachelor of Medicine and Bachelor of Surgery (MBBS)', division: 'Undergraduate', duration: '5.5 Years', fees: '₹25,00,000/Year', eligibility: '10+2 with 50% in PCB + NEET UG', exams: 'NEET UG', intake: '250' },
      { title: 'Bachelor of Dental Surgery (BDS)', division: 'Undergraduate', duration: '5 Years', fees: '₹7,00,000/Year', eligibility: '10+2 with 50% in PCB + NEET UG', exams: 'NEET UG', intake: '100' },
      { title: 'B.Tech in Biotechnology / Bioinformatics', division: 'Undergraduate', duration: '4 Years', fees: '₹1,95,000/Year', eligibility: '10+2 with PCM/PCB + DYPBET / NEET', exams: 'DYPBET, NEET', intake: '90' }
    ]
  },
  206: {
    name: 'Dr. D. Y. Patil Institute Of Technology, Pimpri, Pune',
    state: 'Maharashtra',
    city: 'Pune',
    type: 'Private',
    website: 'https://www.engg.dypvp.edu.in/',
    phone: '020-27805298',
    rating: 4.4,
    established: 1998,
    image: '',
    courses: [
      { title: 'B.E. in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,30,000/Year', eligibility: '10+2 with PCM + MHT CET / JEE Main', exams: 'MHT CET, JEE Main', intake: '240' },
      { title: 'B.E. in Artificial Intelligence & Data Science', division: 'Undergraduate', duration: '4 Years', fees: '₹1,30,000/Year', eligibility: '10+2 with PCM + MHT CET / JEE Main', exams: 'MHT CET, JEE Main', intake: '180' },
      { title: 'M.E. in Mechanical / Civil / Computer Engineering', division: 'Postgraduate', duration: '2 Years', fees: '₹95,000/Year', eligibility: 'B.E./B.Tech + GATE', exams: 'GATE', intake: '36' }
    ]
  },
  207: {
    name: 'Veermata Jijabai Technological Institute (VJTI Mumbai)',
    state: 'Maharashtra',
    city: 'Mumbai',
    type: 'Public',
    website: 'https://vjti.ac.in',
    phone: '022-24198101',
    rating: 4.8,
    established: 1887,
    image: '/images/campuses/vjti_mumbai.jpg',
    courses: [
      { title: 'B.Tech in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹84,000/Year', eligibility: '10+2 with PCM + MHT CET (99.8+ %ile) / JEE Main', exams: 'MHT CET, JEE Main', intake: '60' },
      { title: 'B.Tech in Information Technology', division: 'Undergraduate', duration: '4 Years', fees: '₹84,000/Year', eligibility: '10+2 with PCM + MHT CET / JEE Main', exams: 'MHT CET, JEE Main', intake: '60' },
      { title: 'B.Tech in Electrical / Electronics Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹84,000/Year', eligibility: '10+2 with PCM + MHT CET / JEE Main', exams: 'MHT CET, JEE Main', intake: '120' },
      { title: 'M.Tech in Computer / Structural / Power Systems', division: 'Postgraduate', duration: '2 Years', fees: '₹88,000/Year', eligibility: 'B.Tech in relevant branch + GATE', exams: 'GATE', intake: '150' }
    ]
  },
  208: {
    name: 'Vishwakarma Institute of Technology, Pune (VIT Pune)',
    state: 'Maharashtra',
    city: 'Pune',
    type: 'Private',
    website: 'https://www.vit.edu',
    phone: '020-24202180',
    rating: 4.6,
    established: 1983,
    image: 'https://img.jagranjosh.com/images/2024/January/312024/Vishwakarma.jpg',
    courses: [
      { title: 'B.Tech in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,92,000/Year', eligibility: '10+2 with PCM + MHT CET / JEE Main', exams: 'MHT CET, JEE Main', intake: '240' },
      { title: 'B.Tech in Artificial Intelligence & Data Science', division: 'Undergraduate', duration: '4 Years', fees: '₹1,92,000/Year', eligibility: '10+2 with PCM + MHT CET / JEE Main', exams: 'MHT CET, JEE Main', intake: '180' },
      { title: 'M.Tech in Computer / Design Engineering', division: 'Postgraduate', duration: '2 Years', fees: '₹95,000/Year', eligibility: 'B.Tech/B.E. + GATE', exams: 'GATE', intake: '36' }
    ]
  },
  209: {
    name: 'SNBP University, Pune',
    state: 'Maharashtra',
    city: 'Pune',
    type: 'Private',
    website: 'https://snbpu.edu.in/',
    phone: '020-27470404',
    rating: 4.1,
    established: 2023,
    image: '',
    courses: [
      { title: 'B.Tech in Computer Science & Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,50,000/Year', eligibility: '10+2 with PCM + MHT CET / JEE Main / SNBPU Entrance', exams: 'MHT CET, JEE Main', intake: '120' },
      { title: 'Bachelor of Computer Applications (BCA)', division: 'Undergraduate', duration: '3 Years', fees: '₹75,000/Year', eligibility: '10+2 in any stream with 45%', exams: 'Merit', intake: '60' },
      { title: 'Master of Business Administration (MBA)', division: 'Postgraduate', duration: '2 Years', fees: '₹1,20,000/Year', eligibility: 'Graduation with 50% + CAT/CET/MAT', exams: 'CAT, MAH MBA CET, MAT', intake: '60' }
    ]
  },
  210: {
    name: 'G.H. Raisoni SkillTech University, Nagpur',
    state: 'Maharashtra',
    city: 'Nagpur',
    type: 'Private',
    website: 'https://ghrstu.edu.in/',
    phone: '+91 7887886726',
    rating: 4.2,
    established: 2023,
    image: '',
    courses: [
      { title: 'B.Tech in Computer Science (Cloud & AI Integration)', division: 'Undergraduate', duration: '4 Years', fees: '₹1,35,000/Year', eligibility: '10+2 with PCM + MHT CET / JEE Main', exams: 'MHT CET, JEE Main', intake: '120' },
      { title: 'BBA in Digital Marketing & Supply Chain', division: 'Undergraduate', duration: '3 Years', fees: '₹65,000/Year', eligibility: '10+2 in any stream with 45%', exams: 'Merit', intake: '60' },
      { title: 'BCA in Cyber Security & Forensic Sciences', division: 'Undergraduate', duration: '3 Years', fees: '₹70,000/Year', eligibility: '10+2 in any stream', exams: 'Merit', intake: '60' }
    ]
  },
  211: {
    name: 'COEP Technological University (College of Engineering Pune)',
    state: 'Maharashtra',
    city: 'Pune',
    type: 'Public/Government',
    website: 'https://www.coep.org.in',
    phone: '020-25507000',
    rating: 4.9,
    established: 1854,
    image: '/images/campuses/campus_coep_pune.png',
    courses: [
      { title: 'B.Tech in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,30,000/Year', eligibility: '10+2 with PCM + MHT CET (99.8+ %ile) / JEE Main', exams: 'MHT CET, JEE Main', intake: '120' },
      { title: 'B.Tech in Mechanical / Electrical / Civil Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,30,000/Year', eligibility: '10+2 with PCM + MHT CET / JEE Main', exams: 'MHT CET, JEE Main', intake: '300' },
      { title: 'B.Tech in Artificial Intelligence & Robotics', division: 'Undergraduate', duration: '4 Years', fees: '₹1,30,000/Year', eligibility: '10+2 with PCM + MHT CET / JEE Main', exams: 'MHT CET, JEE Main', intake: '60' },
      { title: 'M.Tech in Advanced Manufacturing / VLSI / Power Electronics', division: 'Postgraduate', duration: '2 Years', fees: '₹1,15,000/Year', eligibility: 'B.Tech with 60% + GATE', exams: 'GATE', intake: '180' }
    ]
  },
  212: {
    name: 'Universal SkillTech University, Mumbai',
    state: 'Maharashtra',
    city: 'Mumbai',
    type: 'Private',
    website: 'https://ustu.edu.in/',
    phone: '+91 7738992638',
    rating: 4.1,
    established: 2023,
    image: '',
    courses: [
      { title: 'B.Tech in Emerging Technologies & AI', division: 'Undergraduate', duration: '4 Years', fees: '₹1,65,000/Year', eligibility: '10+2 with PCM + MHT CET / JEE Main / USTU Entrance', exams: 'MHT CET, JEE Main', intake: '120' },
      { title: 'BBA in FinTech & Business Analytics', division: 'Undergraduate', duration: '3 Years', fees: '₹1,10,000/Year', eligibility: '10+2 with 50%', exams: 'Merit', intake: '60' },
      { title: 'B.Des in User Experience & Interaction Design', division: 'Undergraduate', duration: '4 Years', fees: '₹1,80,000/Year', eligibility: '10+2 in any stream + Design Aptitude Test', exams: 'DAT', intake: '60' }
    ]
  },
  213: {
    name: 'Symbiosis Institute of Technology, Pune (SIT Pune)',
    state: 'Maharashtra',
    city: 'Pune',
    type: 'Deemed',
    website: 'https://www.sitpune.edu.in/',
    phone: '020-61936300',
    rating: 4.5,
    established: 2008,
    image: '',
    courses: [
      { title: 'B.Tech in Computer Science & Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹3,20,000/Year', eligibility: '10+2 with PCM + SITEEE / JEE Main / MHT CET', exams: 'SITEEE, JEE Main, MHT CET', intake: '180' },
      { title: 'B.Tech in Artificial Intelligence and Machine Learning', division: 'Undergraduate', duration: '4 Years', fees: '₹3,20,000/Year', eligibility: '10+2 with PCM + SITEEE / JEE Main', exams: 'SITEEE, JEE Main', intake: '120' },
      { title: 'B.Tech in Robotics & Automation', division: 'Undergraduate', duration: '4 Years', fees: '₹2,80,000/Year', eligibility: '10+2 with PCM + SITEEE / JEE Main', exams: 'SITEEE, JEE Main', intake: '60' },
      { title: 'M.Tech in Artificial Intelligence & Engineering', division: 'Postgraduate', duration: '2 Years', fees: '₹1,80,000/Year', eligibility: 'B.Tech + GATE / SIT Entrance', exams: 'GATE', intake: '30' }
    ]
  }
};

let updatedCount = 0;
for (let i = 0; i < siteData.colleges.length; i++) {
  const col = siteData.colleges[i];
  const cid = Number(col.id);
  if (batch64Map[cid]) {
    const update = batch64Map[cid];
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

