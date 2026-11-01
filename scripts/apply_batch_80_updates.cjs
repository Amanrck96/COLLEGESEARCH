const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');
const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));

const batch80Map = {
  386: {
    name: 'Graduate School of Engineering and Technology, GTU (GTU-GSET Ahmedabad)',
    state: 'Gujarat',
    city: 'Ahmedabad',
    type: 'Public/Government',
    website: 'https://set.gtu.ac.in',
    phone: '079-23267500',
    rating: 4.4,
    established: 2017,
    image: '/images/campuses/campus_architecture_9.jpg',
    courses: [
      { title: 'M.Tech in Cyber Security', division: 'Postgraduate', duration: '2 Years', fees: '₹50,000/Year', eligibility: 'B.Tech in CSE/IT/ECE + GATE / PGCET Gujarat', exams: 'GATE, PGCET', intake: '30' },
      { title: 'M.Tech in Internet of Things (IoT)', division: 'Postgraduate', duration: '2 Years', fees: '₹50,000/Year', eligibility: 'B.Tech in CSE/IT/ECE/EE + GATE / PGCET', exams: 'GATE, PGCET', intake: '30' },
      { title: 'M.Tech in Artificial Intelligence & Data Science', division: 'Postgraduate', duration: '2 Years', fees: '₹50,000/Year', eligibility: 'B.Tech in relevant branch + GATE / PGCET', exams: 'GATE, PGCET', intake: '30' },
      { title: 'Post Graduate Diploma in Data Science', division: 'Diploma', duration: '1 Year', fees: '₹25,000 Total', eligibility: 'Graduation in Engineering / Science / Math', exams: 'Merit', intake: '30' }
    ]
  },
  389: {
    name: 'SAL College of Engineering (SAL Education Campus, Ahmedabad)',
    state: 'Gujarat',
    city: 'Ahmedabad',
    type: 'Private',
    website: 'https://sal.edu.in',
    phone: '079-67129000',
    rating: 4.1,
    established: 2012,
    image: '',
    courses: [
      { title: 'B.Tech in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹78,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC Gujarat', exams: 'GUJCET, ACPC', intake: '120' },
      { title: 'B.Tech in Information Technology', division: 'Undergraduate', duration: '4 Years', fees: '₹78,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
      { title: 'B.Tech in Chemical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹78,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
      { title: 'B.Tech in Mechanical / Civil Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹78,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' }
    ]
  },
  391: {
    name: "Grow More Foundation's Group of Institutions (Himatnagar, Sabarkantha)",
    state: 'Gujarat',
    city: 'Sabarkantha',
    type: 'Private',
    website: 'https://growmore.ac.in',
    phone: '02772-225501',
    rating: 4.0,
    established: 2008,
    image: 'https://www.yuvamind.com/colleges/images/college/grow-more-foundations-group-of-institution-himmatnagar-campus.webp',
    courses: [
      { title: 'B.Tech in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹63,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC Gujarat', exams: 'GUJCET, ACPC', intake: '60' },
      { title: 'B.Tech in Civil Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹63,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
      { title: 'B.Tech in Electrical / Mechanical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹63,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
      { title: 'Diploma in Engineering (Polytechnic)', division: 'Diploma', duration: '3 Years', fees: '₹36,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '120' }
    ]
  },
  392: {
    name: 'Veerayatan Institute of Pharmacy and Polytechnic (Mandvi, Kutch)',
    state: 'Gujarat',
    city: 'Kutch',
    type: 'Private',
    website: 'https://veerayataninstitutes.org',
    phone: '02834-275241',
    rating: 4.1,
    established: 2006,
    image: '',
    courses: [
      { title: 'Diploma in Computer Engineering', division: 'Diploma', duration: '3 Years', fees: '₹38,000/Year', eligibility: '10th Standard Pass with Science & Math + ACPDC', exams: 'ACPDC', intake: '60' },
      { title: 'Diploma in Mechanical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹38,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },
      { title: 'Diploma in Civil Engineering', division: 'Diploma', duration: '3 Years', fees: '₹38,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },
      { title: 'Diploma in Electrical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹38,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' }
    ]
  },
  393: {
    name: 'Prime College of Diploma (Mangrol, Navsari)',
    state: 'Gujarat',
    city: 'Navsari',
    type: 'Private',
    website: 'http://primeiet.in',
    phone: '02637-234200',
    rating: 3.9,
    established: 2015,
    image: 'https://www.collegebatch.com/static/clg-gallery/prime-group-of-institutions-surat-235107.webp',
    courses: [
      { title: 'Diploma in Computer Engineering', division: 'Diploma', duration: '3 Years', fees: '₹38,000/Year', eligibility: '10th Standard Pass with Science & Math + ACPDC', exams: 'ACPDC', intake: '60' },
      { title: 'Diploma in Mechanical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹38,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },
      { title: 'Diploma in Chemical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹38,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },
      { title: 'Diploma in Civil Engineering', division: 'Diploma', duration: '3 Years', fees: '₹38,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' }
    ]
  },
  394: {
    name: 'P. P. Savani School of Engineering (P. P. Savani University, Surat)',
    state: 'Gujarat',
    city: 'Surat',
    type: 'Private',
    website: 'https://www.ppsu.ac.in',
    phone: '0261-7100100',
    rating: 4.3,
    established: 2016,
    image: 'https://image-static.collegedunia.com/public/college_data/images/campusimage/1505125948cvr.png',
    courses: [
      { title: 'B.Tech in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,10,000/Year', eligibility: '10+2 with PCM + GUJCET / JEE Main', exams: 'GUJCET, JEE Main', intake: '120' },
      { title: 'B.Tech in Information Technology', division: 'Undergraduate', duration: '4 Years', fees: '₹1,10,000/Year', eligibility: '10+2 with PCM + GUJCET / JEE Main', exams: 'GUJCET, JEE Main', intake: '60' },
      { title: 'B.Tech in Chemical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹95,000/Year', eligibility: '10+2 with PCM + GUJCET / JEE Main', exams: 'GUJCET, JEE Main', intake: '60' },
      { title: 'B.Tech in Civil / Mechanical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹90,000/Year', eligibility: '10+2 with PCM + GUJCET / JEE Main', exams: 'GUJCET, JEE Main', intake: '60' }
    ]
  },
  397: {
    name: 'Center for Advanced Studies in Design and Reconfigurable Computing (CASDRC CHARUSAT, Anand)',
    state: 'Gujarat',
    city: 'Anand',
    type: 'Private',
    website: 'https://www.charusat.ac.in',
    phone: '02697-265011',
    rating: 4.4,
    established: 2015,
    image: '',
    courses: [
      { title: 'M.Tech in VLSI & Embedded Systems', division: 'Postgraduate', duration: '2 Years', fees: '₹1,25,000/Year', eligibility: 'B.Tech in ECE/EEE/CSE + GATE / PGCET Gujarat', exams: 'GATE, PGCET', intake: '18' },
      { title: 'Post Graduate Diploma in VLSI Design', division: 'Diploma', duration: '1 Year', fees: '₹60,000 Total', eligibility: 'B.Tech / B.E. in relevant engineering', exams: 'Merit', intake: '30' },
      { title: 'Certificate in Embedded Systems & FPGA', division: 'Certificate', duration: '6 Months', fees: '₹30,000 Total', eligibility: 'Diploma / Degree in Engineering', exams: 'Direct Admission', intake: '30' }
    ]
  },
  398: {
    name: 'AAERT & SSB Faculty of Architecture, SCET (Sarvajanik University, Surat)',
    state: 'Gujarat',
    city: 'Surat',
    type: 'Private',
    website: 'https://scetarch.ac.in',
    phone: '0261-2240146',
    rating: 4.4,
    established: 1995,
    image: '',
    courses: [
      { title: 'Bachelor of Architecture (B.Arch)', division: 'Undergraduate', duration: '5 Years', fees: '₹1,25,000/Year', eligibility: '10+2 with PCM (50%+) + NATA / ACPC Gujarat', exams: 'NATA, ACPC', intake: '80' },
      { title: 'Master of Urban Planning (M.Plan)', division: 'Postgraduate', duration: '2 Years', fees: '₹1,10,000/Year', eligibility: 'B.Arch / B.Plan / B.Tech Civil + GATE / PGCET', exams: 'GATE, PGCET', intake: '20' }
    ]
  },
  399: {
    name: 'Dr. V. R. Godhania College of Engineering and Technology (DRVRGCET Porbandar)',
    state: 'Gujarat',
    city: 'Porbandar',
    type: 'Private',
    website: 'https://www.drvrgcet.ac.in',
    phone: '0286-2247656',
    rating: 4.1,
    established: 2017,
    image: '',
    courses: [
      { title: 'B.Tech in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹64,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC Gujarat', exams: 'GUJCET, ACPC', intake: '60' },
      { title: 'B.Tech in Civil Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹64,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
      { title: 'B.Tech in Mechanical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹64,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
      { title: 'Diploma in Engineering (Polytechnic)', division: 'Diploma', duration: '3 Years', fees: '₹36,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' }
    ]
  },
  400: {
    name: 'Gujarat Maritime Board Polytechnic (GMB Polytechnic Rajula, Amreli)',
    state: 'Gujarat',
    city: 'Amreli',
    type: 'Public/Government',
    website: 'https://gmbpolytechnic.ac.in',
    phone: '02794-222060',
    rating: 4.3,
    established: 2015,
    image: '/images/campuses/campus_architecture_5.jpg',
    courses: [
      { title: 'Diploma in Marine Engineering', division: 'Diploma', duration: '3 Years', fees: '₹25,000/Year', eligibility: '10th Standard Pass with Science & Math + ACPDC Gujarat', exams: 'ACPDC', intake: '60' },
      { title: 'Diploma in Mechanical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹25,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },
      { title: 'Diploma in Electrical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹25,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },
      { title: 'Diploma in Civil Engineering', division: 'Diploma', duration: '3 Years', fees: '₹25,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' }
    ]
  }
};

let updatedCount = 0;
for (let i = 0; i < siteData.colleges.length; i++) {
  const col = siteData.colleges[i];
  const cid = Number(col.id);
  if (batch80Map[cid]) {
    const update = batch80Map[cid];
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

