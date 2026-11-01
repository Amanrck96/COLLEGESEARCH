const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');
const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));

const batch65Map = {
  214: {
    name: 'Pillai College of Engineering, Panvel',
    state: 'Maharashtra',
    city: 'Navi Mumbai',
    type: 'Private',
    website: 'https://pce.ac.in',
    phone: '022-27456030',
    rating: 4.4,
    established: 1999,
    image: '/images/campuses/campus_architecture_8.jpg',
    courses: [
      { title: 'B.Tech in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,45,000/Year', eligibility: '10+2 with PCM + MHT CET / JEE Main', exams: 'MHT CET, JEE Main', intake: '180' },
      { title: 'B.Tech in Information Technology', division: 'Undergraduate', duration: '4 Years', fees: '₹1,45,000/Year', eligibility: '10+2 with PCM + MHT CET / JEE Main', exams: 'MHT CET, JEE Main', intake: '120' },
      { title: 'B.Tech in Electronics & Computer Science', division: 'Undergraduate', duration: '4 Years', fees: '₹1,45,000/Year', eligibility: '10+2 with PCM + MHT CET / JEE Main', exams: 'MHT CET, JEE Main', intake: '60' }
    ]
  },
  215: {
    name: 'RC Patel Institute of Technology, Shirpur, Dhule',
    state: 'Maharashtra',
    city: 'Dhule',
    type: 'Private',
    website: 'https://www.rcpit.ac.in',
    phone: '02563-259600',
    rating: 4.3,
    established: 2001,
    image: 'https://www.rcpcoep.ac.in/images/about.jpg',
    courses: [
      { title: 'B.Tech in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,15,000/Year', eligibility: '10+2 with PCM + MHT CET / JEE Main', exams: 'MHT CET, JEE Main', intake: '180' },
      { title: 'B.Tech in Data Science & Artificial Intelligence', division: 'Undergraduate', duration: '4 Years', fees: '₹1,15,000/Year', eligibility: '10+2 with PCM + MHT CET / JEE Main', exams: 'MHT CET, JEE Main', intake: '120' },
      { title: 'B.Tech in Electrical / Mechanical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,15,000/Year', eligibility: '10+2 with PCM + MHT CET / JEE Main', exams: 'MHT CET, JEE Main', intake: '120' }
    ]
  },
  216: {
    name: 'Trinity College of Engineering and Research, Pune',
    state: 'Maharashtra',
    city: 'Pune',
    type: 'Private',
    website: 'https://www.kjei.edu.in/tcoer/',
    phone: '020-26934422',
    rating: 4.2,
    established: 2008,
    image: '/images/campuses/campus_trinity_pune.png',
    courses: [
      { title: 'B.E. in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹98,000/Year', eligibility: '10+2 with PCM + MHT CET / JEE Main', exams: 'MHT CET, JEE Main', intake: '120' },
      { title: 'B.E. in Information Technology', division: 'Undergraduate', duration: '4 Years', fees: '₹98,000/Year', eligibility: '10+2 with PCM + MHT CET / JEE Main', exams: 'MHT CET, JEE Main', intake: '60' },
      { title: 'Master of Business Administration (MBA)', division: 'Postgraduate', duration: '2 Years', fees: '₹85,000/Year', eligibility: 'Graduation with 50% + MAH MBA CET / CMAT', exams: 'MAH MBA CET, CMAT', intake: '60' }
    ]
  },
  217: {
    name: 'Sardar Patel Institute of Technology, Andheri West, Mumbai',
    state: 'Maharashtra',
    city: 'Mumbai',
    type: 'Private',
    website: 'https://www.spit.ac.in',
    phone: '022-26707440',
    rating: 4.7,
    established: 2005,
    image: '',
    courses: [
      { title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,72,000/Year', eligibility: '10+2 with PCM + MHT CET (99.6+ %ile) / JEE Main', exams: 'MHT CET, JEE Main', intake: '120' },
      { title: 'B.Tech in Computer Science and Engineering (Data Science)', division: 'Undergraduate', duration: '4 Years', fees: '₹1,72,000/Year', eligibility: '10+2 with PCM + MHT CET / JEE Main', exams: 'MHT CET, JEE Main', intake: '60' },
      { title: 'B.Tech in Electronics & Telecommunication Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,72,000/Year', eligibility: '10+2 with PCM + MHT CET / JEE Main', exams: 'MHT CET, JEE Main', intake: '60' },
      { title: 'Master of Computer Applications (MCA)', division: 'Postgraduate', duration: '2 Years', fees: '₹1,40,000/Year', eligibility: 'Graduation with BCA/B.Sc/B.Com + MAH MCA CET', exams: 'MAH MCA CET', intake: '60' }
    ]
  },
  218: {
    name: 'Institute of Chemical Technology, Mumbai',
    state: 'Maharashtra',
    city: 'Mumbai',
    type: 'Public/Government',
    website: 'https://www.ictmumbai.edu.in/',
    phone: '022-33611111',
    rating: 4.9,
    established: 1933,
    image: '',
    courses: [
      { title: 'Bachelor of Chemical Engineering (B.Chem.Engg.)', division: 'Undergraduate', duration: '4 Years', fees: '₹89,000/Year', eligibility: '10+2 with PCM + MHT CET / JEE Main', exams: 'MHT CET, JEE Main', intake: '75' },
      { title: 'B.Tech in Food Engineering and Technology', division: 'Undergraduate', duration: '4 Years', fees: '₹89,000/Year', eligibility: '10+2 with PCM + MHT CET / JEE Main', exams: 'MHT CET, JEE Main', intake: '30' },
      { title: 'B.Tech in Pharmaceutical Chemistry & Technology', division: 'Undergraduate', duration: '4 Years', fees: '₹89,000/Year', eligibility: '10+2 with PCM + MHT CET / JEE Main', exams: 'MHT CET, JEE Main', intake: '30' },
      { title: 'M.Chem.Engg. / M.Tech in Chemical Engineering', division: 'Postgraduate', duration: '2 Years', fees: '₹70,000/Year', eligibility: 'B.Chem.Engg / B.Tech in Chemical branch + GATE', exams: 'GATE', intake: '60' }
    ]
  },
  219: {
    name: 'Visvesvaraya National Institute of Technology, Nagpur (VNIT Nagpur)',
    state: 'Maharashtra',
    city: 'Nagpur',
    type: 'Public/Government',
    website: 'https://www.vnit.ac.in',
    phone: '0712-2801423',
    rating: 4.8,
    established: 1960,
    image: '/images/campuses/campus_vnit_nagpur.jpeg',
    courses: [
      { title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,45,000/Year', eligibility: '10+2 with PCM + JEE Main / JoSAA Counseling', exams: 'JEE Main', intake: '115' },
      { title: 'B.Tech in Mechanical / Electrical / Civil Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,45,000/Year', eligibility: '10+2 with PCM + JEE Main / JoSAA', exams: 'JEE Main', intake: '340' },
      { title: 'Bachelor of Architecture (B.Arch)', division: 'Undergraduate', duration: '5 Years', fees: '₹1,45,000/Year', eligibility: '10+2 with PCM + JEE Main Paper 2', exams: 'JEE Main Paper 2', intake: '60' },
      { title: 'M.Tech in Structural Dynamics / CAD-CAM / VLSI', division: 'Postgraduate', duration: '2 Years', fees: '₹90,000/Year', eligibility: 'B.Tech in relevant branch + GATE / CCMT', exams: 'GATE', intake: '250' }
    ]
  },
  220: {
    name: 'Prin. L. N. Welingkar Institute of Management Development and Research, Mumbai',
    state: 'Maharashtra',
    city: 'Mumbai',
    type: 'Private',
    website: 'https://www.welingkar.org/',
    phone: '022-24198300',
    rating: 4.6,
    established: 1977,
    image: '/images/campuses/weschool_matunga_mumbai.jpeg',
    courses: [
      { title: 'Post Graduate Diploma in Management (PGDM)', division: 'Postgraduate', duration: '2 Years', fees: '₹7,00,000/Year', eligibility: 'Bachelor degree with minimum 50% + CAT/XAT/CMAT', exams: 'CAT, XAT, CMAT, ATMA, GMAT', intake: '180' },
      { title: 'PGDM in E-Business / Business Design', division: 'Postgraduate', duration: '2 Years', fees: '₹7,00,000/Year', eligibility: 'Bachelor degree with minimum 50% + Entrance', exams: 'CAT, XAT, CMAT', intake: '120' },
      { title: 'Masters in Management Studies (MMS)', division: 'Postgraduate', duration: '2 Years', fees: '₹3,45,000/Year', eligibility: 'Graduation with 50% + MAH MBA CET', exams: 'MAH MBA CET', intake: '120' }
    ]
  },
  221: {
    name: 'Faculty of Management Studies, University of Delhi (FMS Delhi)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Public/Government',
    website: 'https://fms.edu',
    phone: '011-27666382',
    rating: 4.9,
    established: 1954,
    image: '',
    courses: [
      { title: 'Master of Business Administration (MBA - Full Time)', division: 'Postgraduate', duration: '2 Years', fees: '₹1,00,000/Year', eligibility: 'Graduation in any discipline with 50% + CAT (99.2+ %ile) + PI', exams: 'CAT', intake: '251' },
      { title: 'MBA in Healthcare Administration (Executive)', division: 'Postgraduate', duration: '2 Years', fees: '₹1,25,000/Year', eligibility: 'Graduation with 5 yrs experience + Assessment', exams: 'Work Experience + PI', intake: '53' },
      { title: 'Ph.D in Management Studies', division: 'Doctoral', duration: '3-5 Years', fees: '₹15,000/Year', eligibility: 'Master degree with 55% + UGC-NET (JRF)', exams: 'UGC NET', intake: '20' }
    ]
  },
  222: {
    name: 'National Institute of Bank Management, Pune (NIBM Pune)',
    state: 'Maharashtra',
    city: 'Pune',
    type: 'Private',
    website: 'https://www.nibmindia.org/',
    phone: '020-69046000',
    rating: 4.6,
    established: 1969,
    image: '',
    courses: [
      { title: 'PGDM in Banking and Financial Services (PGDM-B&FS)', division: 'Postgraduate', duration: '2 Years', fees: '₹8,00,000/Year', eligibility: 'Graduation with 50% + CAT/XAT/CMAT/GMAT + WAT/PI', exams: 'CAT, XAT, CMAT, GMAT', intake: '120' },
      { title: 'Executive Program in Banking Technology', division: 'Postgraduate', duration: '1 Year', fees: '₹3,50,000 Total', eligibility: 'Graduation + Banking sector experience', exams: 'Direct Assessment', intake: '45' }
    ]
  },
  223: {
    name: 'Amity University Mumbai',
    state: 'Maharashtra',
    city: 'Mumbai',
    type: 'Private',
    website: 'https://www.amity.edu/mumbai/',
    phone: '02143-205037',
    rating: 4.3,
    established: 2014,
    image: '',
    courses: [
      { title: 'B.Tech in Computer Science & Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹2,40,000/Year', eligibility: '10+2 with PCM + Amity JEE / JEE Main / MHT CET', exams: 'Amity JEE, JEE Main, MHT CET', intake: '180' },
      { title: 'Master of Business Administration (MBA)', division: 'Postgraduate', duration: '2 Years', fees: '₹3,60,000/Year', eligibility: 'Graduation with 50% + CAT/MAT/XAT/Amity Test', exams: 'CAT, MAT, XAT', intake: '120' },
      { title: 'B.Des in Fashion Design / Interior Design', division: 'Undergraduate', duration: '4 Years', fees: '₹1,60,000/Year', eligibility: '10+2 with 50% + Design Aptitude Test', exams: 'Design Test', intake: '60' }
    ]
  }
};

let updatedCount = 0;
for (let i = 0; i < siteData.colleges.length; i++) {
  const col = siteData.colleges[i];
  const cid = Number(col.id);
  if (batch65Map[cid]) {
    const update = batch65Map[cid];
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

