const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');
const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));

const batch79Map = {
  373: {
    name: 'State Institute of Hotel Management Siddhpur (SIHM Siddhpur, Patan)',
    state: 'Gujarat',
    city: 'Patan',
    type: 'Public/Government',
    website: 'https://sihmsiddhpur.org',
    phone: '02767-224422',
    rating: 4.3,
    established: 2014,
    image: '',
    courses: [
      { title: 'B.Sc. in Hospitality and Hotel Administration', division: 'Undergraduate', duration: '3 Years', fees: '₹75,000/Year', eligibility: '10+2 with English + NCHM JEE', exams: 'NCHM JEE', intake: '120' },
      { title: 'Diploma in Food Production', division: 'Diploma', duration: '1.5 Years', fees: '₹35,000 Total', eligibility: '10th or 10+2 Pass', exams: 'Merit', intake: '60' },
      { title: 'Diploma in Food & Beverage Service', division: 'Diploma', duration: '1.5 Years', fees: '₹30,000 Total', eligibility: '10th or 10+2 Pass', exams: 'Merit', intake: '40' }
    ]
  },
  374: {
    name: 'New L J Institute of Engineering and Technology (New LJIET, Ahmedabad)',
    state: 'Gujarat',
    city: 'Ahmedabad',
    type: 'Private',
    website: 'https://www.ljku.edu.in',
    phone: '079-29708000',
    rating: 4.4,
    established: 2019,
    image: 'https://www.studyplaces.co.in/wp-content/uploads/2025/07/new-l-j-institute-of-engineering-and-technology.jpg',
    courses: [
      { title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹85,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC Gujarat', exams: 'GUJCET, ACPC', intake: '180' },
      { title: 'B.Tech in Information Technology', division: 'Undergraduate', duration: '4 Years', fees: '₹85,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '120' },
      { title: 'B.Tech in Artificial Intelligence and Data Science', division: 'Undergraduate', duration: '4 Years', fees: '₹85,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
      { title: 'B.Tech in Civil / Mechanical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹80,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' }
    ]
  },
  375: {
    name: 'Shankersinh Vaghela Bapu Technical Campus (Bapu GKV, Gandhinagar)',
    state: 'Gujarat',
    city: 'Gandhinagar',
    type: 'Private',
    website: 'https://bapugkv.ac.in',
    phone: '079-23976170',
    rating: 4.2,
    established: 2009,
    image: 'https://www.collegebatch.com/static/clg-gallery/shankersinh-vaghela-bapu-institute-of-technology-gandhinagar-322095.webp',
    courses: [
      { title: 'B.Tech in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹68,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '120' },
      { title: 'B.Tech in Information Technology', division: 'Undergraduate', duration: '4 Years', fees: '₹68,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
      { title: 'B.Tech in Mechanical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹68,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
      { title: 'Diploma in Engineering (Polytechnic)', division: 'Diploma', duration: '3 Years', fees: '₹38,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '120' }
    ]
  },
  376: {
    name: 'Smt. Vanitaben Bachubhai Nandola MCA College (Una, Gir Somnath)',
    state: 'Gujarat',
    city: 'Gir Somnath',
    type: 'Private',
    website: 'https://www.nandolacolleges.org',
    phone: '02875-223400',
    rating: 4.1,
    established: 2008,
    image: 'https://media.collegedekho.com/media/img/institute/crawled_images/395684/building.jpg?width=640',
    courses: [
      { title: 'Master of Computer Applications (MCA)', division: 'Postgraduate', duration: '2 Years', fees: '₹55,000/Year', eligibility: 'BCA / B.Sc IT or Graduation with Math + CMAT / ACPC', exams: 'CMAT, ACPC', intake: '60' },
      { title: 'Bachelor of Computer Applications (BCA)', division: 'Undergraduate', duration: '3 Years', fees: '₹28,000/Year', eligibility: '10+2 in any stream + Merit', exams: 'Merit', intake: '120' },
      { title: 'Post Graduate Diploma in Computer Applications (PGDCA)', division: 'Diploma', duration: '1 Year', fees: '₹20,000 Total', eligibility: 'Graduation in any stream', exams: 'Merit', intake: '60' }
    ]
  },
  377: {
    name: 'Tatva Institute of Technological Studies (TITS Modasa, Aravalli)',
    state: 'Gujarat',
    city: 'Aravalli',
    type: 'Private',
    website: 'http://www.tits.ac.in',
    phone: '02774-249500',
    rating: 4.0,
    established: 2010,
    image: 'https://www.collegebatch.com/static/clg-gallery/tatva-institute-of-technological-studies-modasa-325627.webp',
    courses: [
      { title: 'B.Tech in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹65,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
      { title: 'B.Tech in Civil Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹65,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
      { title: 'B.Tech in Mechanical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹65,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
      { title: 'Diploma in Civil / Mechanical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹36,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' }
    ]
  },
  378: {
    name: 'Vidush Somany Institute of Technology and Research (VSITR, KSV Gandhinagar)',
    state: 'Gujarat',
    city: 'Gandhinagar',
    type: 'Private',
    website: 'https://vsitr.ac.in',
    phone: '079-23245129',
    rating: 4.3,
    established: 2019,
    image: 'https://vsitr.ac.in/wp-content/uploads/2024/04/SAG_1229-1.jpg',
    courses: [
      { title: 'B.Tech in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹72,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '120' },
      { title: 'B.Tech in Information Technology', division: 'Undergraduate', duration: '4 Years', fees: '₹72,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
      { title: 'B.Tech in Civil Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹70,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
      { title: 'M.Tech in Computer Engineering', division: 'Postgraduate', duration: '2 Years', fees: '₹80,000/Year', eligibility: 'B.Tech in relevant discipline + GATE / PGCET', exams: 'GATE, PGCET', intake: '18' }
    ]
  },
  379: {
    name: 'Dr. Subhash University (Junagadh)',
    state: 'Gujarat',
    city: 'Junagadh',
    type: 'Private',
    website: 'https://drsubhashuniversity.edu.in',
    phone: '0285-2610055',
    rating: 4.3,
    established: 2010,
    image: 'https://media.getmyuni.com/azure/college-images-test/dr-subhash-university-junagadh/exterior-images-49efda4441d15ccd7ed2fd9141557ae6.webp',
    courses: [
      { title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹75,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '120' },
      { title: 'Bachelor of Pharmacy (B.Pharm)', division: 'Undergraduate', duration: '4 Years', fees: '₹85,000/Year', eligibility: '10+2 with PCB/PCM + GUJCET', exams: 'GUJCET, ACPC', intake: '100' },
      { title: 'Master of Business Administration (MBA)', division: 'Postgraduate', duration: '2 Years', fees: '₹65,000/Year', eligibility: 'Graduation (50%+) + CMAT / ACPC', exams: 'CMAT, ACPC', intake: '60' },
      { title: 'Diploma in Engineering (Polytechnic)', division: 'Diploma', duration: '3 Years', fees: '₹42,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '120' }
    ]
  },
  380: {
    name: 'Patel Group of Institutions (PGI Rampura, Kadi, Mehsana)',
    state: 'Gujarat',
    city: 'Mehsana',
    type: 'Private',
    website: 'https://patelgroupe.edu.in',
    phone: '02764-262244',
    rating: 4.1,
    established: 2010,
    image: '/images/campuses/campus_architecture_3.jpg',
    courses: [
      { title: 'B.Tech in Mechanical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹65,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
      { title: 'B.Tech in Civil Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹65,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
      { title: 'Master of Business Administration (MBA)', division: 'Postgraduate', duration: '2 Years', fees: '₹60,000/Year', eligibility: 'Graduation (50%+) + CMAT / ACPC', exams: 'CMAT, ACPC', intake: '60' },
      { title: 'Diploma in Mechanical / Civil Engineering', division: 'Diploma', duration: '3 Years', fees: '₹36,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' }
    ]
  },
  381: {
    name: 'Dharmsinh Desai University (DDU Nadiad)',
    state: 'Gujarat',
    city: 'Nadiad',
    type: 'Public/Government',
    website: 'https://www.ddu.ac.in',
    phone: '0268-2520502',
    rating: 4.6,
    established: 1968,
    image: 'https://media.getmyuni.com/azure/college-images-test/dharmsinh-desai-university-ddu-nadiad/5bad70eeaca244428a8dcdf553c00a8a.jpeg',
    courses: [
      { title: 'B.Tech in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,68,000/Year', eligibility: '10+2 with PCM + GUJCET / JEE Main + ACPC Gujarat', exams: 'GUJCET, JEE Main, ACPC', intake: '150' },
      { title: 'B.Tech in Chemical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,68,000/Year', eligibility: '10+2 with PCM + GUJCET / JEE Main + ACPC', exams: 'GUJCET, JEE Main, ACPC', intake: '120' },
      { title: 'Bachelor of Pharmacy (B.Pharm)', division: 'Undergraduate', duration: '4 Years', fees: '₹1,55,000/Year', eligibility: '10+2 with PCB/PCM + GUJCET', exams: 'GUJCET, ACPC', intake: '60' },
      { title: 'Master of Computer Applications (MCA)', division: 'Postgraduate', duration: '2 Years', fees: '₹1,05,000/Year', eligibility: 'BCA / B.Sc with Math + CMAT / ACPC', exams: 'CMAT, ACPC', intake: '60' },
      { title: 'Master of Business Administration (MBA)', division: 'Postgraduate', duration: '2 Years', fees: '₹1,00,000/Year', eligibility: 'Graduation (50%+) + CMAT / ACPC', exams: 'CMAT, ACPC', intake: '60' }
    ]
  },
  384: {
    name: 'Devang Patel Institute of Advance Technology and Research (DEPSTAR CHARUSAT, Anand)',
    state: 'Gujarat',
    city: 'Anand',
    type: 'Private',
    website: 'https://www.charusat.ac.in/depstar',
    phone: '02697-265271',
    rating: 4.5,
    established: 2017,
    image: '',
    courses: [
      { title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,35,000/Year', eligibility: '10+2 with PCM + GUJCET / JEE Main + ACPC', exams: 'GUJCET, JEE Main, ACPC', intake: '180' },
      { title: 'B.Tech in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,35,000/Year', eligibility: '10+2 with PCM + GUJCET / JEE Main', exams: 'GUJCET, ACPC', intake: '180' },
      { title: 'B.Tech in Information Technology', division: 'Undergraduate', duration: '4 Years', fees: '₹1,35,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '120' },
      { title: 'M.Tech in Computer Science & Engineering', division: 'Postgraduate', duration: '2 Years', fees: '₹1,25,000/Year', eligibility: 'B.Tech in CSE/IT + GATE / PGCET', exams: 'GATE, PGCET', intake: '18' }
    ]
  }
};

let updatedCount = 0;
for (let i = 0; i < siteData.colleges.length; i++) {
  const col = siteData.colleges[i];
  const cid = Number(col.id);
  if (batch79Map[cid]) {
    const update = batch79Map[cid];
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
