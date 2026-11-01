const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');
const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));

const batch85Map = {
  448: {
    name: 'Amity University Kolkata (Rajarhat, New Town)',
    state: 'West Bengal',
    city: 'Kolkata',
    type: 'Private',
    website: 'https://www.amity.edu/kolkata',
    phone: '033-71020304',
    rating: 4.4,
    established: 2015,
    image: '',
    courses: [
      { title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹2,10,000/Year', eligibility: '10+2 with PCM (60%+) + Amity JEE / Merit', exams: 'Amity JEE, Merit', intake: '180' },
      { title: 'Master of Business Administration (MBA)', division: 'Postgraduate', duration: '2 Years', fees: '₹4,15,000/Year', eligibility: 'Graduation (50%+) + CAT / MAT / XAT / Amity Test', exams: 'CAT, MAT, XAT', intake: '120' },
      { title: 'Bachelor of Business Administration (BBA)', division: 'Undergraduate', duration: '3 Years', fees: '₹1,40,000/Year', eligibility: '10+2 in any stream (55%+)', exams: 'Merit', intake: '120' },
      { title: 'B.A. LL.B. (Hons.)', division: 'Undergraduate', duration: '5 Years', fees: '₹1,85,000/Year', eligibility: '10+2 in any stream (50%+) + CLAT / Amity Test', exams: 'CLAT, Merit', intake: '120' }
    ]
  },
  449: {
    name: 'Indian Institute of Engineering Science and Technology, Shibpur (IIEST Shibpur)',
    state: 'West Bengal',
    city: 'Howrah',
    type: 'Public/Government',
    website: 'https://www.iiests.ac.in',
    phone: '033-26684561',
    rating: 4.6,
    established: 1856,
    image: '',
    courses: [
      { title: 'B.Tech in Computer Science and Technology', division: 'Undergraduate', duration: '4 Years', fees: '₹1,40,000/Year', eligibility: '10+2 with PCM + JEE Main + JoSAA / CSAB', exams: 'JEE Main, JoSAA', intake: '90' },
      { title: 'B.Tech in Mechanical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,40,000/Year', eligibility: '10+2 with PCM + JEE Main + JoSAA', exams: 'JEE Main, JoSAA', intake: '90' },
      { title: 'B.Tech in Aerospace Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,40,000/Year', eligibility: '10+2 with PCM + JEE Main + JoSAA', exams: 'JEE Main, JoSAA', intake: '40' },
      { title: 'M.Tech in Computer Science & Engineering', division: 'Postgraduate', duration: '2 Years', fees: '₹85,000/Year', eligibility: 'B.Tech in CSE/IT + GATE / CCMT', exams: 'GATE, CCMT', intake: '30' }
    ]
  },
  450: {
    name: 'Jadavpur University, Kolkata (JU Kolkata)',
    state: 'West Bengal',
    city: 'Kolkata',
    type: 'Public/Government',
    website: 'https://jadavpuruniversity.in',
    phone: '033-24146666',
    rating: 4.8,
    established: 1955,
    image: '/images/campuses/campus_architecture_1.jpg',
    courses: [
      { title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹2,400/Year', eligibility: '10+2 with PCM + WBJEE Rank Top 100', exams: 'WBJEE', intake: '65' },
      { title: 'B.Tech in Mechanical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹2,400/Year', eligibility: '10+2 with PCM + WBJEE', exams: 'WBJEE', intake: '110' },
      { title: 'Master of Computer Applications (MCA)', division: 'Postgraduate', duration: '2 Years', fees: '₹5,000/Year', eligibility: 'BCA / B.Sc with Math + WB JECA', exams: 'JECA', intake: '50' },
      { title: 'B.A. (Hons.) in English', division: 'Undergraduate', duration: '3 Years', fees: '₹1,200/Year', eligibility: '10+2 with English + JU Admission Test', exams: 'JU Test', intake: '50' }
    ]
  },
  451: {
    name: 'University of Kalyani (Kalyani, Nadia)',
    state: 'West Bengal',
    city: 'Nadia',
    type: 'Public/Government',
    website: 'https://klyuniv.ac.in',
    phone: '033-25828750',
    rating: 4.4,
    established: 1960,
    image: '/images/campuses/campus_architecture_2.jpg',
    courses: [
      { title: 'B.Tech in Information Technology', division: 'Undergraduate', duration: '4 Years', fees: '₹36,000/Year', eligibility: '10+2 with PCM + WBJEE', exams: 'WBJEE', intake: '60' },
      { title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹36,000/Year', eligibility: '10+2 with PCM + WBJEE', exams: 'WBJEE', intake: '60' },
      { title: 'Master of Computer Applications (MCA)', division: 'Postgraduate', duration: '2 Years', fees: '₹30,000/Year', eligibility: 'BCA / B.Sc with Math + WB JECA', exams: 'JECA', intake: '40' },
      { title: 'Master of Business Administration (MBA)', division: 'Postgraduate', duration: '2 Years', fees: '₹45,000/Year', eligibility: 'Graduation (50%+) + MAT / CAT / CMAT', exams: 'MAT, CAT, CMAT', intake: '60' }
    ]
  },
  452: {
    name: 'Heritage Business School (HBS Kolkata, Anandapur)',
    state: 'West Bengal',
    city: 'Kolkata',
    type: 'Private',
    website: 'https://hbs.edu.in',
    phone: '033-66270630',
    rating: 4.3,
    established: 2003,
    image: '/images/campuses/campus_architecture_3.jpg',
    courses: [
      { title: 'Master of Business Administration (MBA)', division: 'Postgraduate', duration: '2 Years', fees: '₹3,25,000/Year', eligibility: 'Graduation (50%+) + MAT / JEMAT / CAT / CMAT', exams: 'MAT, JEMAT, CAT, CMAT', intake: '180' },
      { title: 'MBA in Business Analytics', division: 'Postgraduate', duration: '2 Years', fees: '₹3,50,000/Year', eligibility: 'Graduation with Math/Stats + JEMAT / MAT', exams: 'JEMAT, MAT', intake: '60' }
    ]
  },
  453: {
    name: 'Praxis Business School (Praxis Kolkata)',
    state: 'West Bengal',
    city: 'South 24 Parganas',
    type: 'Private',
    website: 'https://praxis.ac.in',
    phone: '033-24980553',
    rating: 4.4,
    established: 2007,
    image: 'https://www.collegebatch.com/static/clg-gallery/praxis-business-school-kolkata-301595.webp',
    courses: [
      { title: 'Post Graduate Diploma in Management (PGDM)', division: 'Postgraduate', duration: '2 Years', fees: '₹4,75,000/Year', eligibility: 'Graduation (50%+) + CAT / XAT / CMAT / GMAT', exams: 'CAT, XAT, CMAT, GMAT', intake: '120' },
      { title: 'Post Graduate Program in Data Science (PGPDS)', division: 'Diploma', duration: '9 Months', fees: '₹6,05,000 Total', eligibility: 'Graduation with Math/Stats (60%+) + Praxis Test', exams: 'Praxis Test', intake: '120' }
    ]
  },
  454: {
    name: 'Birla Institute of Technology Extension Centre Kolkata (BIT Mesra Kolkata)',
    state: 'West Bengal',
    city: 'Kolkata',
    type: 'Private',
    website: 'https://www.bitmesra.ac.in',
    phone: '033-24414542',
    rating: 4.3,
    established: 1995,
    image: '/images/campuses/campus_architecture_5.jpg',
    courses: [
      { title: 'Bachelor of Computer Applications (BCA)', division: 'Undergraduate', duration: '3 Years', fees: '₹78,000/Year', eligibility: '10+2 with Math/CS (50%+) + Merit', exams: 'Merit', intake: '60' },
      { title: 'Bachelor of Business Administration (BBA)', division: 'Undergraduate', duration: '3 Years', fees: '₹78,000/Year', eligibility: '10+2 in any stream (50%+) + Merit', exams: 'Merit', intake: '60' },
      { title: 'Master of Computer Applications (MCA)', division: 'Postgraduate', duration: '2 Years', fees: '₹1,25,000/Year', eligibility: 'BCA / B.Sc with Math + BIT MCA Test', exams: 'BIT MCA Test', intake: '45' }
    ]
  },
  455: {
    name: 'Global Institute of Management and Technology (GIMT Krishnanagar, Nadia)',
    state: 'West Bengal',
    city: 'Nadia',
    type: 'Private',
    website: 'https://www.gimt-india.com',
    phone: '03472-271211',
    rating: 4.0,
    established: 2009,
    image: 'https://www.yuvamind.com/colleges/images/college/global-institute-of-management-and-technology-nadia-campus.png',
    courses: [
      { title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹78,000/Year', eligibility: '10+2 with PCM + WBJEE / JEE Main', exams: 'WBJEE, JEE Main', intake: '60' },
      { title: 'B.Tech in Civil Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹75,000/Year', eligibility: '10+2 with PCM + WBJEE', exams: 'WBJEE', intake: '60' },
      { title: 'B.Tech in Mechanical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹75,000/Year', eligibility: '10+2 with PCM + WBJEE', exams: 'WBJEE', intake: '60' },
      { title: 'Diploma in Civil / Mechanical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹36,000/Year', eligibility: '10th Standard Pass + JEXPO', exams: 'JEXPO', intake: '60' }
    ]
  },
  456: {
    name: 'Salbani Institute of Technology (SIT Salbani, Paschim Medinipur)',
    state: 'West Bengal',
    city: 'Paschim Medinipur',
    type: 'Private',
    website: 'https://salbaniinstitute.in',
    phone: '03227-284300',
    rating: 3.9,
    established: 2012,
    image: '/images/campuses/campus_architecture_7.jpg',
    courses: [
      { title: 'Diploma in Mechanical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹36,000/Year', eligibility: '10th Standard Pass with Science & Math + JEXPO', exams: 'JEXPO', intake: '60' },
      { title: 'Diploma in Civil Engineering', division: 'Diploma', duration: '3 Years', fees: '₹36,000/Year', eligibility: '10th Standard Pass + JEXPO', exams: 'JEXPO', intake: '60' },
      { title: 'Diploma in Electrical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹36,000/Year', eligibility: '10th Standard Pass + JEXPO', exams: 'JEXPO', intake: '60' }
    ]
  },
  459: {
    name: 'Canning Government Polytechnic (CGP Canning, South 24 Parganas)',
    state: 'West Bengal',
    city: 'South 24 Parganas',
    type: 'Public/Government',
    website: 'https://canningpolytechnic.in',
    phone: '03218-255100',
    rating: 4.2,
    established: 2017,
    image: 'https://www.collegebatch.com/static/clg-gallery/canning-government-polytechnic-south-24-parganas-311801.webp',
    courses: [
      { title: 'Diploma in Computer Science and Technology', division: 'Diploma', duration: '3 Years', fees: '₹1,200/Year', eligibility: '10th Standard Pass with Science & Math + JEXPO', exams: 'JEXPO', intake: '60' },
      { title: 'Diploma in Electrical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,200/Year', eligibility: '10th Standard Pass + JEXPO', exams: 'JEXPO', intake: '60' },
      { title: 'Diploma in Civil Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,200/Year', eligibility: '10th Standard Pass + JEXPO', exams: 'JEXPO', intake: '60' }
    ]
  }
};

let updatedCount = 0;
for (let i = 0; i < siteData.colleges.length; i++) {
  const col = siteData.colleges[i];
  const cid = Number(col.id);
  if (batch85Map[cid]) {
    const update = batch85Map[cid];
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
