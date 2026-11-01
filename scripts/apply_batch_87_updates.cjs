const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');
const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));

const batch87Map = {
  471: {
    name: 'Camellia Institute of Engineering and Technology (CIET Budbud, Bardhaman)',
    state: 'West Bengal',
    city: 'Purba Bardhaman',
    type: 'Private',
    website: 'https://ciet.ac.in',
    phone: '0343-2513400',
    rating: 3.9,
    established: 2010,
    image: '',
    courses: [
      { title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹78,000/Year', eligibility: '10+2 with PCM + WBJEE / JEE Main', exams: 'WBJEE, JEE Main', intake: '60' },
      { title: 'B.Tech in Civil Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹75,000/Year', eligibility: '10+2 with PCM + WBJEE', exams: 'WBJEE', intake: '60' },
      { title: 'B.Tech in Mechanical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹75,000/Year', eligibility: '10+2 with PCM + WBJEE', exams: 'WBJEE', intake: '60' },
      { title: 'Diploma in Civil / Mechanical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹36,000/Year', eligibility: '10th Standard Pass + JEXPO', exams: 'JEXPO', intake: '60' }
    ]
  },
  472: {
    name: 'OmDayal Group of Institutions (ODGI Uluberia, Howrah)',
    state: 'West Bengal',
    city: 'Howrah',
    type: 'Private',
    website: 'https://omdayal.com',
    phone: '033-26613179',
    rating: 4.2,
    established: 2010,
    image: 'https://www.collegebatch.com/static/clg-gallery/om-dayal-group-of-institutions-howrah-313987.webp',
    courses: [
      { title: 'Bachelor of Architecture (B.Arch)', division: 'Undergraduate', duration: '5 Years', fees: '₹1,10,000/Year', eligibility: '10+2 with PCM (50%+) + NATA / WBJEE', exams: 'NATA, WBJEE', intake: '80' },
      { title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹85,000/Year', eligibility: '10+2 with PCM + WBJEE / JEE Main', exams: 'WBJEE, JEE Main', intake: '60' },
      { title: 'B.Tech in Civil Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹80,000/Year', eligibility: '10+2 with PCM + WBJEE', exams: 'WBJEE', intake: '60' },
      { title: 'B.Tech in Mechanical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹80,000/Year', eligibility: '10+2 with PCM + WBJEE', exams: 'WBJEE', intake: '60' }
    ]
  },
  474: {
    name: "Sanaka Educational Trust's Group of Institutions (SETGOI Durgapur)",
    state: 'West Bengal',
    city: 'Paschim Bardhaman',
    type: 'Private',
    website: 'https://setgoi.ac.in',
    phone: '0343-2608500',
    rating: 4.1,
    established: 2008,
    image: 'https://icampus.setgoi.ac.in/images/abt-thumb.jpg',
    courses: [
      { title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹78,000/Year', eligibility: '10+2 with PCM + WBJEE / JEE Main', exams: 'WBJEE, JEE Main', intake: '90' },
      { title: 'Bachelor of Pharmacy (B.Pharm)', division: 'Undergraduate', duration: '4 Years', fees: '₹85,000/Year', eligibility: '10+2 with PCB/PCM + WBJEE', exams: 'WBJEE', intake: '60' },
      { title: 'B.Tech in Mechanical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹75,000/Year', eligibility: '10+2 with PCM + WBJEE', exams: 'WBJEE', intake: '60' },
      { title: 'Diploma in Engineering (Polytechnic)', division: 'Diploma', duration: '3 Years', fees: '₹35,000/Year', eligibility: '10th Standard Pass + JEXPO', exams: 'JEXPO', intake: '120' }
    ]
  },
  475: {
    name: 'Alipurduar Government Polytechnic (Damanpur, Alipurduar)',
    state: 'West Bengal',
    city: 'Alipurduar',
    type: 'Public/Government',
    website: 'https://alipurduarpolytechnic.in',
    phone: '03564-255100',
    rating: 4.2,
    established: 2019,
    image: '/images/campuses/campus_architecture_2.jpg',
    courses: [
      { title: 'Diploma in Computer Science and Technology', division: 'Diploma', duration: '3 Years', fees: '₹1,200/Year', eligibility: '10th Standard Pass with Science & Math + JEXPO', exams: 'JEXPO', intake: '60' },
      { title: 'Diploma in Electrical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,200/Year', eligibility: '10th Standard Pass + JEXPO', exams: 'JEXPO', intake: '60' },
      { title: 'Diploma in Civil Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,200/Year', eligibility: '10th Standard Pass + JEXPO', exams: 'JEXPO', intake: '60' }
    ]
  },
  476: {
    name: 'Siliguri Institute of Technology Diploma College (SIT Siliguri)',
    state: 'West Bengal',
    city: 'Darjeeling',
    type: 'Private',
    website: 'https://sittechno.org',
    phone: '0353-2778002',
    rating: 4.2,
    established: 2013,
    image: 'https://image-static.collegedunia.com/public/college_data/images/campusimage/161146619120190422_142352.jpg',
    courses: [
      { title: 'Diploma in Computer Science and Technology', division: 'Diploma', duration: '3 Years', fees: '₹36,000/Year', eligibility: '10th Standard Pass with Science & Math + JEXPO', exams: 'JEXPO', intake: '60' },
      { title: 'Diploma in Civil Engineering', division: 'Diploma', duration: '3 Years', fees: '₹36,000/Year', eligibility: '10th Standard Pass + JEXPO', exams: 'JEXPO', intake: '60' },
      { title: 'Diploma in Electrical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹36,000/Year', eligibility: '10th Standard Pass + JEXPO', exams: 'JEXPO', intake: '60' }
    ]
  },
  477: {
    name: 'Techno Polytechnic Durgapur (TPD Durgapur)',
    state: 'West Bengal',
    city: 'Paschim Bardhaman',
    type: 'Private',
    website: 'https://tpd.technoindiagroup.com',
    phone: '0343-2532456',
    rating: 4.1,
    established: 2014,
    image: '/images/campuses/campus_architecture_1.jpg',
    courses: [
      { title: 'Diploma in Computer Science and Technology', division: 'Diploma', duration: '3 Years', fees: '₹36,000/Year', eligibility: '10th Standard Pass with Science & Math + JEXPO', exams: 'JEXPO', intake: '60' },
      { title: 'Diploma in Mechanical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹36,000/Year', eligibility: '10th Standard Pass + JEXPO', exams: 'JEXPO', intake: '60' },
      { title: 'Diploma in Civil Engineering', division: 'Diploma', duration: '3 Years', fees: '₹36,000/Year', eligibility: '10th Standard Pass + JEXPO', exams: 'JEXPO', intake: '60' },
      { title: 'Diploma in Electrical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹36,000/Year', eligibility: '10th Standard Pass + JEXPO', exams: 'JEXPO', intake: '60' }
    ]
  },
  478: {
    name: 'Ideal Institute of Engineering (IIE Kalyani, Nadia)',
    state: 'West Bengal',
    city: 'Nadia',
    type: 'Private',
    website: 'https://iie.ac.in',
    phone: '033-25025627',
    rating: 4.0,
    established: 2010,
    image: 'https://image-static.collegedunia.com/public/college_data/images/campusimage/1488545543bhfsjfjk.PNG',
    courses: [
      { title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹78,000/Year', eligibility: '10+2 with PCM + WBJEE / JEE Main', exams: 'WBJEE, JEE Main', intake: '60' },
      { title: 'B.Tech in Electrical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹75,000/Year', eligibility: '10+2 with PCM + WBJEE', exams: 'WBJEE', intake: '60' },
      { title: 'B.Tech in Mechanical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹75,000/Year', eligibility: '10+2 with PCM + WBJEE', exams: 'WBJEE', intake: '60' },
      { title: 'Diploma in Civil / Mechanical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹36,000/Year', eligibility: '10th Standard Pass + JEXPO', exams: 'JEXPO', intake: '60' }
    ]
  },
  479: {
    name: 'Gayeshpur Government Polytechnic (GGP Nadia)',
    state: 'West Bengal',
    city: 'Nadia',
    type: 'Public/Government',
    website: 'https://gayeshpurpolytechnic.in',
    phone: '033-25891100',
    rating: 4.2,
    established: 2017,
    image: '/images/campuses/campus_architecture_3.jpg',
    courses: [
      { title: 'Diploma in Mechanical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,200/Year', eligibility: '10th Standard Pass with Science & Math + JEXPO', exams: 'JEXPO', intake: '60' },
      { title: 'Diploma in Civil Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,200/Year', eligibility: '10th Standard Pass + JEXPO', exams: 'JEXPO', intake: '60' },
      { title: 'Diploma in Survey Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,200/Year', eligibility: '10th Standard Pass + JEXPO', exams: 'JEXPO', intake: '60' }
    ]
  },
  480: {
    name: 'Ranaghat Government Polytechnic (RGP Nadia)',
    state: 'West Bengal',
    city: 'Nadia',
    type: 'Public/Government',
    website: 'https://ranaghatpolytechnic.in',
    phone: '03473-255100',
    rating: 4.2,
    established: 2017,
    image: '/images/campuses/campus_architecture_4.jpg',
    courses: [
      { title: 'Diploma in Electrical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,200/Year', eligibility: '10th Standard Pass with Science & Math + JEXPO', exams: 'JEXPO', intake: '60' },
      { title: 'Diploma in Mechanical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,200/Year', eligibility: '10th Standard Pass + JEXPO', exams: 'JEXPO', intake: '60' },
      { title: 'Diploma in Civil Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,200/Year', eligibility: '10th Standard Pass + JEXPO', exams: 'JEXPO', intake: '60' }
    ]
  },
  481: {
    name: 'Cooch Behar Government Engineering College (CGEC Cooch Behar)',
    state: 'West Bengal',
    city: 'Cooch Behar',
    type: 'Public/Government',
    website: 'https://cgec.org.in',
    phone: '03582-233040',
    rating: 4.5,
    established: 2016,
    image: '/images/campuses/campus_architecture_5.jpg',
    courses: [
      { title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹12,000/Year', eligibility: '10+2 with PCM + WBJEE Rank', exams: 'WBJEE', intake: '60' },
      { title: 'B.Tech in Electronics and Communication Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹12,000/Year', eligibility: '10+2 with PCM + WBJEE', exams: 'WBJEE', intake: '60' },
      { title: 'B.Tech in Electrical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹12,000/Year', eligibility: '10+2 with PCM + WBJEE', exams: 'WBJEE', intake: '60' },
      { title: 'B.Tech in Mechanical / Civil Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹12,000/Year', eligibility: '10+2 with PCM + WBJEE', exams: 'WBJEE', intake: '60' }
    ]
  }
};

let updatedCount = 0;
for (let i = 0; i < siteData.colleges.length; i++) {
  const col = siteData.colleges[i];
  const cid = Number(col.id);
  if (batch87Map[cid]) {
    const update = batch87Map[cid];
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
