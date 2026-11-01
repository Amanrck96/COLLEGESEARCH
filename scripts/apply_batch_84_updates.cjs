const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');
const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));

const batch84Map = {
  438: {
    name: 'Techno India University (Salt Lake, Sector V, Kolkata)',
    state: 'West Bengal',
    city: 'Kolkata',
    type: 'Private',
    website: 'https://www.technoindiauniversity.ac.in',
    phone: '033-23576163',
    rating: 4.4,
    established: 2012,
    image: '',
    courses: [
      { title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,25,000/Year', eligibility: '10+2 with PCM + WBJEE / JEE Main', exams: 'WBJEE, JEE Main', intake: '180' },
      { title: 'B.Tech in Artificial Intelligence & Data Science', division: 'Undergraduate', duration: '4 Years', fees: '₹1,25,000/Year', eligibility: '10+2 with PCM + WBJEE / JEE Main', exams: 'WBJEE, JEE Main', intake: '60' },
      { title: 'Bachelor of Computer Applications (BCA)', division: 'Undergraduate', duration: '3 Years', fees: '₹80,000/Year', eligibility: '10+2 with Math/CS', exams: 'Merit', intake: '120' },
      { title: 'Master of Business Administration (MBA)', division: 'Postgraduate', duration: '2 Years', fees: '₹2,25,000/Year', eligibility: 'Graduation (50%+) + CAT / MAT / JEMAT', exams: 'CAT, MAT, JEMAT', intake: '60' }
    ]
  },
  439: {
    name: 'Central Institute of Petrochemicals Engineering and Technology (CIPET: IPT Haldia)',
    state: 'West Bengal',
    city: 'Purba Medinipur',
    type: 'Public/Government',
    website: 'https://www.cipet.gov.in',
    phone: '03224-255424',
    rating: 4.4,
    established: 2002,
    image: '',
    courses: [
      { title: 'B.Tech in Plastics Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹55,000/Year', eligibility: '10+2 with PCM + WBJEE / JEE Main', exams: 'WBJEE, JEE Main', intake: '60' },
      { title: 'B.Tech in Manufacturing Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹55,000/Year', eligibility: '10+2 with PCM + WBJEE', exams: 'WBJEE', intake: '60' },
      { title: 'M.Tech in Plastics Engineering', division: 'Postgraduate', duration: '2 Years', fees: '₹60,000/Year', eligibility: 'B.Tech in relevant branch + GATE / PGET', exams: 'GATE, PGET', intake: '18' },
      { title: 'Diploma in Plastics Technology (DPT)', division: 'Diploma', duration: '3 Years', fees: '₹25,000/Year', eligibility: '10th Standard with Science & Math + CIPET JEE', exams: 'CIPET JEE', intake: '60' }
    ]
  },
  440: {
    name: 'International Management Institute Kolkata (IMI Kolkata, Alipore)',
    state: 'West Bengal',
    city: 'Kolkata',
    type: 'Private',
    website: 'https://www.imi-k.edu.in',
    phone: '033-66529618',
    rating: 4.6,
    established: 2010,
    image: '',
    courses: [
      { title: 'Post Graduate Diploma in Management (PGDM)', division: 'Postgraduate', duration: '2 Years', fees: '₹5,80,000/Year', eligibility: 'Graduation (50%+) + CAT / XAT / GMAT', exams: 'CAT, XAT, GMAT', intake: '180' },
      { title: 'Fellow Programme in Management (FPM / Ph.D.)', division: 'Doctoral', duration: '4 Years', fees: 'Fully Funded (Stipend ₹35,000/Month)', eligibility: 'Master degree (60%+) + CAT / GMAT / NET', exams: 'CAT, GMAT, NET', intake: '10' }
    ]
  },
  441: {
    name: 'Calcutta Business School (CBS Kolkata, South 24 Parganas)',
    state: 'West Bengal',
    city: 'South 24 Parganas',
    type: 'Private',
    website: 'https://calcuttabusinessschool.org',
    phone: '033-24205200',
    rating: 4.2,
    established: 2008,
    image: '/images/campuses/campus_architecture_1.jpg',
    courses: [
      { title: 'Post Graduate Diploma in Management (PGDM)', division: 'Postgraduate', duration: '2 Years', fees: '₹3,40,000/Year', eligibility: 'Graduation (50%+) + CAT / MAT / XAT / CMAT', exams: 'CAT, MAT, XAT, CMAT', intake: '120' },
      { title: 'PGDM in Business Analytics', division: 'Postgraduate', duration: '2 Years', fees: '₹3,40,000/Year', eligibility: 'Graduation with Math/Stats + Entrance Exam', exams: 'CAT, MAT, CMAT', intake: '60' }
    ]
  },
  442: {
    name: 'Guru Nanak Institute of Technology (GNIT Kolkata, Sodepur)',
    state: 'West Bengal',
    city: 'Kolkata',
    type: 'Private',
    website: 'https://gnit.ac.in',
    phone: '033-25233900',
    rating: 4.3,
    established: 2003,
    image: 'https://assets.kollegeapply.com/images/1751563790634-1652252517phpfEBcxg.jpeg',
    courses: [
      { title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,12,000/Year', eligibility: '10+2 with PCM + WBJEE / JEE Main', exams: 'WBJEE, JEE Main', intake: '180' },
      { title: 'B.Tech in Information Technology', division: 'Undergraduate', duration: '4 Years', fees: '₹1,12,000/Year', eligibility: '10+2 with PCM + WBJEE', exams: 'WBJEE', intake: '60' },
      { title: 'B.Tech in Electronics & Communication', division: 'Undergraduate', duration: '4 Years', fees: '₹1,12,000/Year', eligibility: '10+2 with PCM + WBJEE', exams: 'WBJEE', intake: '120' },
      { title: 'Master of Computer Applications (MCA)', division: 'Postgraduate', duration: '2 Years', fees: '₹1,00,000/Year', eligibility: 'BCA / B.Sc with Math + WB JECA', exams: 'JECA', intake: '60' }
    ]
  },
  443: {
    name: 'Indian Institute of Information Technology, Kalyani (IIIT Kalyani)',
    state: 'West Bengal',
    city: 'Nadia',
    type: 'Public/Government',
    website: 'https://iiitkalyani.ac.in',
    phone: '033-25822240',
    rating: 4.5,
    established: 2014,
    image: '',
    courses: [
      { title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,80,000/Year', eligibility: '10+2 with PCM + JEE Main + JoSAA / CSAB', exams: 'JEE Main, JoSAA', intake: '120' },
      { title: 'B.Tech in Electronics and Communication Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,80,000/Year', eligibility: '10+2 with PCM + JEE Main + JoSAA', exams: 'JEE Main, JoSAA', intake: '60' },
      { title: 'Ph.D. in Computer Science / Engineering', division: 'Doctoral', duration: '3 Years', fees: '₹40,000/Year', eligibility: 'M.Tech / ME in relevant discipline + GATE / NET', exams: 'GATE, UGC NET', intake: '15' }
    ]
  },
  444: {
    name: 'Maulana Abul Kalam Azad University of Technology Main Campus (MAKAUT Haringhata)',
    state: 'West Bengal',
    city: 'Nadia',
    type: 'Public/Government',
    website: 'https://makautwb.ac.in',
    phone: '033-23210731',
    rating: 4.5,
    established: 2001,
    image: '',
    courses: [
      { title: 'B.Tech in Computer Science (Artificial Intelligence)', division: 'Undergraduate', duration: '4 Years', fees: '₹35,000/Year', eligibility: '10+2 with PCM + WBJEE', exams: 'WBJEE', intake: '60' },
      { title: 'B.Tech in Information Technology', division: 'Undergraduate', duration: '4 Years', fees: '₹35,000/Year', eligibility: '10+2 with PCM + WBJEE', exams: 'WBJEE', intake: '60' },
      { title: 'B.Sc. in Data Science', division: 'Undergraduate', duration: '3 Years', fees: '₹30,000/Year', eligibility: '10+2 with Math/Stats + MAKAUT CET', exams: 'CET', intake: '60' },
      { title: 'M.Tech in Microelectronics & VLSI Design', division: 'Postgraduate', duration: '2 Years', fees: '₹40,000/Year', eligibility: 'B.Tech in ECE/EE + GATE / PGET', exams: 'GATE, PGET', intake: '18' }
    ]
  },
  445: {
    name: 'Narula Institute of Technology (NiT Agarpara, Kolkata)',
    state: 'West Bengal',
    city: 'Kolkata',
    type: 'Private',
    website: 'https://www.nit.ac.in',
    phone: '033-25638888',
    rating: 4.4,
    established: 2001,
    image: '/images/campuses/campus_architecture_5.jpg',
    courses: [
      { title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,15,000/Year', eligibility: '10+2 with PCM + WBJEE / JEE Main', exams: 'WBJEE, JEE Main', intake: '180' },
      { title: 'B.Tech in Electronics and Communication Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,15,000/Year', eligibility: '10+2 with PCM + WBJEE', exams: 'WBJEE', intake: '120' },
      { title: 'B.Tech in Information Technology', division: 'Undergraduate', duration: '4 Years', fees: '₹1,15,000/Year', eligibility: '10+2 with PCM + WBJEE', exams: 'WBJEE', intake: '60' },
      { title: 'Master of Computer Applications (MCA)', division: 'Postgraduate', duration: '2 Years', fees: '₹1,05,000/Year', eligibility: 'BCA / B.Sc with Math + WB JECA', exams: 'JECA', intake: '60' }
    ]
  },
  446: {
    name: 'JIS College of Engineering (JISCE Kalyani, Nadia)',
    state: 'West Bengal',
    city: 'Nadia',
    type: 'Private',
    website: 'https://www.jiscollege.ac.in',
    phone: '033-25822865',
    rating: 4.4,
    established: 2000,
    image: 'https://www.jiscollege.ac.in/assets/images/slider/2.jpg',
    courses: [
      { title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,15,000/Year', eligibility: '10+2 with PCM + WBJEE / JEE Main', exams: 'WBJEE, JEE Main', intake: '180' },
      { title: 'B.Tech in Information Technology', division: 'Undergraduate', duration: '4 Years', fees: '₹1,15,000/Year', eligibility: '10+2 with PCM + WBJEE', exams: 'WBJEE', intake: '120' },
      { title: 'B.Tech in Biomedical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,05,000/Year', eligibility: '10+2 with PCM/PCB + WBJEE', exams: 'WBJEE', intake: '60' },
      { title: 'Master of Business Administration (MBA)', division: 'Postgraduate', duration: '2 Years', fees: '₹1,25,000/Year', eligibility: 'Graduation (50%+) + MAT / JEMAT', exams: 'MAT, JEMAT', intake: '60' }
    ]
  },
  447: {
    name: 'Haldia Institute of Technology (HIT Haldia, Purba Medinipur)',
    state: 'West Bengal',
    city: 'Purba Medinipur',
    type: 'Private',
    website: 'https://hithaldia.ac.in',
    phone: '03224-252900',
    rating: 4.5,
    established: 1996,
    image: '/images/campuses/campus_architecture_7.jpg',
    courses: [
      { title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹95,000/Year', eligibility: '10+2 with PCM + WBJEE / JEE Main', exams: 'WBJEE, JEE Main', intake: '180' },
      { title: 'B.Tech in Chemical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹90,000/Year', eligibility: '10+2 with PCM + WBJEE', exams: 'WBJEE', intake: '60' },
      { title: 'B.Tech in Electronics & Communication', division: 'Undergraduate', duration: '4 Years', fees: '₹90,000/Year', eligibility: '10+2 with PCM + WBJEE', exams: 'WBJEE', intake: '120' },
      { title: 'Master of Computer Applications (MCA)', division: 'Postgraduate', duration: '2 Years', fees: '₹85,000/Year', eligibility: 'BCA / B.Sc with Math + WB JECA', exams: 'JECA', intake: '60' }
    ]
  }
};

let updatedCount = 0;
for (let i = 0; i < siteData.colleges.length; i++) {
  const col = siteData.colleges[i];
  const cid = Number(col.id);
  if (batch84Map[cid]) {
    const update = batch84Map[cid];
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
