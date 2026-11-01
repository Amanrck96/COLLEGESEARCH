const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');
const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));

const batch78Map = {
  361: {
    name: 'Shree Valiba BCA College, Malpur',
    state: 'Gujarat',
    city: 'Aravalli',
    type: 'Private',
    website: 'https://www.valibacollege.org',
    phone: '02773-222400',
    rating: 4.0,
    established: 2008,
    image: '',
    courses: [
      { title: 'Bachelor of Computer Applications (BCA)', division: 'Undergraduate', duration: '3 Years', fees: '₹28,000/Year', eligibility: '10+2 in any stream + Merit', exams: 'Merit', intake: '120' },
      { title: 'Bachelor of Science in Information Technology (B.Sc. IT)', division: 'Undergraduate', duration: '3 Years', fees: '₹26,000/Year', eligibility: '10+2 with Science/Math', exams: 'Merit', intake: '60' },
      { title: 'Post Graduate Diploma in Computer Applications (PGDCA)', division: 'Diploma', duration: '1 Year', fees: '₹20,000 Total', eligibility: 'Graduation in any stream', exams: 'Merit', intake: '60' }
    ]
  },
  362: {
    name: 'Smt. V. S. Lakhani College of Computer Science, Bhavnagar',
    state: 'Gujarat',
    city: 'Bhavnagar',
    type: 'Private',
    website: 'https://www.spst.org.in',
    phone: '0278-2567222',
    rating: 4.1,
    established: 2001,
    image: '/images/campuses/campus_architecture_3.jpg',
    courses: [
      { title: 'Bachelor of Computer Applications (BCA)', division: 'Undergraduate', duration: '3 Years', fees: '₹30,000/Year', eligibility: '10+2 in any stream + MKBU Centralized Admission', exams: 'MKBU Merit', intake: '120' },
      { title: 'Bachelor of Science in Information Technology (B.Sc. IT)', division: 'Undergraduate', duration: '3 Years', fees: '₹28,000/Year', eligibility: '10+2 with Science', exams: 'MKBU Merit', intake: '60' },
      { title: 'Post Graduate Diploma in Computer Applications (PGDCA)', division: 'Diploma', duration: '1 Year', fees: '₹22,000 Total', eligibility: 'Graduation in any stream', exams: 'Direct Admission', intake: '60' }
    ]
  },
  365: {
    name: 'Bhagwan Mahavir College of Hotel Management (BMU Surat)',
    state: 'Gujarat',
    city: 'Surat',
    type: 'Private',
    website: 'https://bmusurat.ac.in',
    phone: '0261-6770100',
    rating: 4.2,
    established: 2009,
    image: '/images/campuses/campus_architecture_1.jpg',
    courses: [
      { title: 'Bachelor of Hotel Management & Catering Technology (BHMCT)', division: 'Undergraduate', duration: '4 Years', fees: '₹85,000/Year', eligibility: '10+2 in any stream (45%+) + ACPC / BMU Aptitude', exams: 'ACPC, BMU Test', intake: '60' },
      { title: 'B.Sc. in Hospitality & Hotel Administration', division: 'Undergraduate', duration: '3 Years', fees: '₹75,000/Year', eligibility: '10+2 in any stream', exams: 'Merit', intake: '60' },
      { title: 'Diploma in Hotel Operations and Food Production', division: 'Diploma', duration: '1 Year', fees: '₹45,000 Total', eligibility: '10th or 10+2 Pass', exams: 'Direct Admission', intake: '40' }
    ]
  },
  366: {
    name: 'Laxmi Institute of Technology (LIT Sarigam, Valsad)',
    state: 'Gujarat',
    city: 'Valsad',
    type: 'Private',
    website: 'https://lit.laxmi.edu.in',
    phone: '0260-2405300',
    rating: 4.2,
    established: 2010,
    image: 'https://www.collegebatch.com/static/clg-gallery/laxmi-institute-of-technology-valsad-279469.webp',
    courses: [
      { title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹73,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC Gujarat', exams: 'GUJCET, ACPC', intake: '120' },
      { title: 'B.Tech in Mechanical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹73,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
      { title: 'B.Tech in Civil Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹73,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
      { title: 'Diploma in Mechanical / Civil Engineering', division: 'Diploma', duration: '3 Years', fees: '₹40,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '120' }
    ]
  },
  367: {
    name: 'SAL Institute of Diploma Studies (SIDS Ahmedabad)',
    state: 'Gujarat',
    city: 'Ahmedabad',
    type: 'Private',
    website: 'https://sal.edu.in',
    phone: '079-67129000',
    rating: 4.1,
    established: 2013,
    image: '',
    courses: [
      { title: 'Diploma in Computer Engineering', division: 'Diploma', duration: '3 Years', fees: '₹45,000/Year', eligibility: '10th Standard Pass with Science & Math + ACPDC Gujarat', exams: 'ACPDC', intake: '120' },
      { title: 'Diploma in Information Technology', division: 'Diploma', duration: '3 Years', fees: '₹45,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },
      { title: 'Diploma in Mechanical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹45,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '120' },
      { title: 'Diploma in Civil Engineering', division: 'Diploma', duration: '3 Years', fees: '₹45,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' }
    ]
  },
  368: {
    name: 'Diwaliba Polytechnic, Uka Tarsadia University (Mahuva, Surat)',
    state: 'Gujarat',
    city: 'Surat',
    type: 'Private',
    website: 'http://dp.utu.ac.in',
    phone: '02625-255882',
    rating: 4.3,
    established: 2013,
    image: '',
    courses: [
      { title: 'Diploma in Chemical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹44,000/Year', eligibility: '10th Standard with Science & Math + ACPDC / UTU', exams: 'ACPDC', intake: '60' },
      { title: 'Diploma in Computer Engineering', division: 'Diploma', duration: '3 Years', fees: '₹44,000/Year', eligibility: '10th Standard with Science & Math', exams: 'ACPDC', intake: '60' },
      { title: 'Diploma in Mechanical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹44,000/Year', eligibility: '10th Standard Pass', exams: 'ACPDC', intake: '60' },
      { title: 'Diploma in Information Technology', division: 'Diploma', duration: '3 Years', fees: '₹44,000/Year', eligibility: '10th Standard Pass', exams: 'ACPDC', intake: '60' }
    ]
  },
  369: {
    name: 'Prime Institute of Engineering and Technology (PIET Navsari)',
    state: 'Gujarat',
    city: 'Navsari',
    type: 'Private',
    website: 'http://primeiet.in',
    phone: '02637-234200',
    rating: 4.0,
    established: 2014,
    image: '',
    courses: [
      { title: 'B.Tech in Mechanical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹68,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC Gujarat', exams: 'GUJCET, ACPC', intake: '60' },
      { title: 'B.Tech in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹68,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
      { title: 'B.Tech in Civil Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹68,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
      { title: 'Diploma in Mechanical / Civil Engineering', division: 'Diploma', duration: '3 Years', fees: '₹38,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' }
    ]
  },
  370: {
    name: 'Vidyabharti Trust College of MCA (Umrakh, Bardoli)',
    state: 'Gujarat',
    city: 'Surat',
    type: 'Private',
    website: 'http://vbtcollegeofmca.ac.in',
    phone: '02622-224581',
    rating: 4.3,
    established: 2004,
    image: '/images/campuses/campus_architecture_2.jpg',
    courses: [
      { title: 'Master of Computer Applications (MCA)', division: 'Postgraduate', duration: '2 Years', fees: '₹74,000/Year', eligibility: 'BCA / B.Sc with Math/CS + CMAT / ACPC Gujarat', exams: 'CMAT, ACPC', intake: '120' },
      { title: 'Integrated MCA', division: 'Undergraduate', duration: '5 Years', fees: '₹55,000/Year', eligibility: '10+2 with Mathematics/Stats + ACPC Gujarat', exams: 'ACPC', intake: '60' },
      { title: 'Post Graduate Diploma in Computer Applications (PGDCA)', division: 'Diploma', duration: '1 Year', fees: '₹25,000 Total', eligibility: 'Graduation in any stream', exams: 'Direct Admission', intake: '60' }
    ]
  },
  371: {
    name: 'Veerayatan Institute of Engineering (VIE Mandvi, Kutch)',
    state: 'Gujarat',
    city: 'Kutch',
    type: 'Private',
    website: 'https://veerayataninstitutes.org',
    phone: '02834-275241',
    rating: 4.2,
    established: 2010,
    image: 'https://media.getmyuni.com/azure/college-images-test/veerayatan-institute-of-engineering-and-management-kachchh/4c7bd58362dd4c17a2a9a69dbc5c2ec8.jpeg',
    courses: [
      { title: 'B.Tech in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹71,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC Gujarat', exams: 'GUJCET, ACPC', intake: '60' },
      { title: 'B.Tech in Chemical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹71,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
      { title: 'B.Tech in Mechanical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹71,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
      { title: 'Diploma in Mechanical / Civil Engineering', division: 'Diploma', duration: '3 Years', fees: '₹38,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' }
    ]
  },
  372: {
    name: 'Asia Pacific Institute of Hotel Management (APIHM Bhoyani)',
    state: 'Gujarat',
    city: 'Ahmedabad',
    type: 'Private',
    website: 'https://www.apihm.com',
    phone: '02764-286200',
    rating: 4.1,
    established: 2012,
    image: 'https://www.campusoption.com/images/colleges/gallery/04_04_17_065552_College2.jpg',
    courses: [
      { title: 'Bachelor of Hotel Management (BHM)', division: 'Undergraduate', duration: '3 Years', fees: '₹85,000/Year', eligibility: '10+2 in any stream + Merit / Personal Interview', exams: 'Merit, PI', intake: '60' },
      { title: 'B.Sc. in Hospitality & Tourism Management', division: 'Undergraduate', duration: '3 Years', fees: '₹80,000/Year', eligibility: '10+2 in any stream', exams: 'Merit', intake: '60' },
      { title: 'Diploma in Food & Beverage Service / Culinary Arts', division: 'Diploma', duration: '1 Year', fees: '₹50,000 Total', eligibility: '10th or 10+2 Pass', exams: 'Direct Admission', intake: '40' }
    ]
  }
};

let updatedCount = 0;
for (let i = 0; i < siteData.colleges.length; i++) {
  const col = siteData.colleges[i];
  const cid = Number(col.id);
  if (batch78Map[cid]) {
    const update = batch78Map[cid];
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
