const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');
const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));

const batch82Map = {
  416: {
    name: 'Dr. Jivraj Mehta Institute of Polytechnic (DJMIP Mogar, Anand)',
    state: 'Gujarat',
    city: 'Anand',
    type: 'Private',
    website: 'https://www.djmit.ac.in',
    phone: '02692-280105',
    rating: 4.0,
    established: 2013,
    image: 'https://image-static.collegedunia.com/public/college_data/images/campusimage/1596192323107765455_676458639601751_339142948502097216_o.jpg',
    courses: [
      { title: 'Diploma in Computer Engineering', division: 'Diploma', duration: '3 Years', fees: '₹38,000/Year', eligibility: '10th Standard Pass with Science & Math + ACPDC Gujarat', exams: 'ACPDC', intake: '60' },
      { title: 'Diploma in Mechanical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹38,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },
      { title: 'Diploma in Electrical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹38,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },
      { title: 'Diploma in Civil Engineering', division: 'Diploma', duration: '3 Years', fees: '₹38,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' }
    ]
  },
  417: {
    name: 'Khyati School of Design (Khyati Foundation, Ahmedabad)',
    state: 'Gujarat',
    city: 'Ahmedabad',
    type: 'Private',
    website: 'https://khyatischoolofdesign.com',
    phone: '079-27770000',
    rating: 4.1,
    established: 2018,
    image: '',
    courses: [
      { title: 'Bachelor of Design (B.Des) in Communication Design', division: 'Undergraduate', duration: '4 Years', fees: '₹1,20,000/Year', eligibility: '10+2 in any stream + Design Aptitude Test', exams: 'DAT, Merit', intake: '60' },
      { title: 'Bachelor of Design (B.Des) in Interior Design', division: 'Undergraduate', duration: '4 Years', fees: '₹1,20,000/Year', eligibility: '10+2 in any stream + Aptitude Test', exams: 'DAT, Merit', intake: '60' },
      { title: 'Bachelor of Design (B.Des) in Fashion Design', division: 'Undergraduate', duration: '4 Years', fees: '₹1,20,000/Year', eligibility: '10+2 in any stream + Aptitude Test', exams: 'DAT, Merit', intake: '60' },
      { title: 'Diploma in Graphic Design & Animation', division: 'Diploma', duration: '1 Year', fees: '₹45,000 Total', eligibility: '10th or 10+2 Pass', exams: 'Direct Admission', intake: '30' }
    ]
  },
  418: {
    name: 'HJD Institute of Technical Education and Research (Kera-Kutch)',
    state: 'Gujarat',
    city: 'Kutch',
    type: 'Private',
    website: 'https://hjdinstitute.org',
    phone: '02832-281085',
    rating: 4.2,
    established: 2010,
    image: '',
    courses: [
      { title: 'B.Tech in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹63,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC Gujarat', exams: 'GUJCET, ACPC', intake: '60' },
      { title: 'B.Tech in Mechanical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹63,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
      { title: 'B.Tech in Civil Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹63,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
      { title: 'Diploma in Engineering (Polytechnic)', division: 'Diploma', duration: '3 Years', fees: '₹36,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' }
    ]
  },
  419: {
    name: 'Parul Institute of Technology (Parul University, Vadodara)',
    state: 'Gujarat',
    city: 'Vadodara',
    type: 'Private',
    website: 'https://paruluniversity.ac.in',
    phone: '02668-260300',
    rating: 4.5,
    established: 2003,
    image: '/images/campuses/campus_architecture_6.jpg',
    courses: [
      { title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,49,000/Year', eligibility: '10+2 with PCM + GUJCET / JEE Main', exams: 'GUJCET, JEE Main', intake: '180' },
      { title: 'B.Tech in Information Technology', division: 'Undergraduate', duration: '4 Years', fees: '₹1,49,000/Year', eligibility: '10+2 with PCM + GUJCET / JEE Main', exams: 'GUJCET, JEE Main', intake: '120' },
      { title: 'B.Tech in Artificial Intelligence & Data Science', division: 'Undergraduate', duration: '4 Years', fees: '₹1,49,000/Year', eligibility: '10+2 with PCM + GUJCET / JEE Main', exams: 'GUJCET, JEE Main', intake: '60' },
      { title: 'M.Tech in Computer Engineering', division: 'Postgraduate', duration: '2 Years', fees: '₹1,10,000/Year', eligibility: 'B.Tech in CSE/IT + GATE / PGCET', exams: 'GATE, PGCET', intake: '18' }
    ]
  },
  421: {
    name: 'Dadhichi Diploma Polytechnic College (Sukhsar, Dahod)',
    state: 'Gujarat',
    city: 'Dahod',
    type: 'Private',
    website: 'http://dadhichipolytechnic.com',
    phone: '02677-224100',
    rating: 3.8,
    established: 2014,
    image: '',
    courses: [
      { title: 'Diploma in Mechanical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹36,000/Year', eligibility: '10th Standard Pass + ACPDC Gujarat', exams: 'ACPDC', intake: '60' },
      { title: 'Diploma in Civil Engineering', division: 'Diploma', duration: '3 Years', fees: '₹36,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },
      { title: 'Diploma in Electrical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹36,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },
      { title: 'Diploma in Computer Engineering', division: 'Diploma', duration: '3 Years', fees: '₹36,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' }
    ]
  },
  422: {
    name: 'Dr. Natubhai P. Patel Polytechnic (DNPP Visnagar, Mehsana)',
    state: 'Gujarat',
    city: 'Mehsana',
    type: 'Private',
    website: 'https://spu.ac.in',
    phone: '02765-224400',
    rating: 4.1,
    established: 2000,
    image: '',
    courses: [
      { title: 'Diploma in Computer Engineering', division: 'Diploma', duration: '3 Years', fees: '₹42,000/Year', eligibility: '10th Standard Pass with Science & Math + ACPDC', exams: 'ACPDC', intake: '60' },
      { title: 'Diploma in Information Technology', division: 'Diploma', duration: '3 Years', fees: '₹42,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },
      { title: 'Diploma in Mechanical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹42,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },
      { title: 'Diploma in Civil Engineering', division: 'Diploma', duration: '3 Years', fees: '₹42,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' }
    ]
  },
  423: {
    name: 'Government Polytechnic for Girls (GPG Ahmedabad)',
    state: 'Gujarat',
    city: 'Ahmedabad',
    type: 'Public/Government',
    website: 'https://gpgahmedabad.ac.in',
    phone: '079-27912440',
    rating: 4.4,
    established: 1964,
    image: '/images/campuses/campus_architecture_1.jpg',
    courses: [
      { title: 'Diploma in Computer Engineering', division: 'Diploma', duration: '3 Years', fees: '₹500/Year', eligibility: '10th Standard Pass with Science & Math + ACPDC Gujarat (Tuition Free for Girls)', exams: 'ACPDC', intake: '120' },
      { title: 'Diploma in Information Technology', division: 'Diploma', duration: '3 Years', fees: '₹500/Year', eligibility: '10th Standard Pass + ACPDC (Tuition Free for Girls)', exams: 'ACPDC', intake: '60' },
      { title: 'Diploma in Biomedical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹500/Year', eligibility: '10th Standard Pass + ACPDC (Tuition Free for Girls)', exams: 'ACPDC', intake: '60' },
      { title: 'Diploma in Commercial Practice', division: 'Diploma', duration: '3 Years', fees: '₹500/Year', eligibility: '10th Standard Pass + ACPDC (Tuition Free for Girls)', exams: 'ACPDC', intake: '60' }
    ]
  },
  424: {
    name: 'A. Y. Dadabhai Technical Institute (AYDTI Kosamba, Surat)',
    state: 'Gujarat',
    city: 'Surat',
    type: 'Private',
    website: 'http://aydti.ac.in',
    phone: '0261-286280',
    rating: 4.1,
    established: 2008,
    image: 'https://www.collegebatch.com/static/clg-gallery/ay-dadabhai-technical-institute-surat-347935.webp',
    courses: [
      { title: 'Diploma in Mechanical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹38,000/Year', eligibility: '10th Standard Pass with Science & Math + ACPDC', exams: 'ACPDC', intake: '60' },
      { title: 'Diploma in Electrical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹38,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },
      { title: 'Diploma in Civil Engineering', division: 'Diploma', duration: '3 Years', fees: '₹38,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },
      { title: 'Diploma in Computer Engineering', division: 'Diploma', duration: '3 Years', fees: '₹38,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' }
    ]
  },
  425: {
    name: 'Indo-German Tool Room (IGTR Ahmedabad)',
    state: 'Gujarat',
    city: 'Ahmedabad',
    type: 'Public/Government',
    website: 'https://www.igtrahd.com',
    phone: '079-25843159',
    rating: 4.5,
    established: 1990,
    image: '/images/campuses/campus_architecture_3.jpg',
    courses: [
      { title: 'Diploma in Tool & Die Making', division: 'Diploma', duration: '4 Years', fees: '₹42,000/Year', eligibility: '10th Standard with Science & Math (50%+) + IGTR Entrance Exam', exams: 'IGTR Test', intake: '60' },
      { title: 'Diploma in Mechatronics', division: 'Diploma', duration: '3 Years', fees: '₹42,000/Year', eligibility: '10th Standard with Science & Math + IGTR Entrance', exams: 'IGTR Test', intake: '60' },
      { title: 'Post Diploma in Tool Design & CAD/CAM', division: 'Diploma', duration: '1 Year', fees: '₹50,000 Total', eligibility: 'Diploma in Mechanical / Production Engineering', exams: 'Merit', intake: '40' },
      { title: 'Certificate in CNC Machining & MasterCAM', division: 'Certificate', duration: '6 Months', fees: '₹25,000 Total', eligibility: 'ITI / 10th Standard Pass', exams: 'Direct Admission', intake: '30' }
    ]
  },
  426: {
    name: 'Government Polytechnic, Kheda (GP Kheda)',
    state: 'Gujarat',
    city: 'Kheda',
    type: 'Public/Government',
    website: 'https://gpkheda.ac.in',
    phone: '02694-224400',
    rating: 4.2,
    established: 2013,
    image: 'https://img.studyclap.com/img/institute/college/773x343/15660/gpk-kheda-ae4c936e58.jpg',
    courses: [
      { title: 'Diploma in Computer Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,500/Year', eligibility: '10th Standard Pass with Science & Math + ACPDC Gujarat (Tuition Free for Girls)', exams: 'ACPDC', intake: '60' },
      { title: 'Diploma in Mechanical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,500/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },
      { title: 'Diploma in Civil Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,500/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },
      { title: 'Diploma in Electrical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,500/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' }
    ]
  }
};

let updatedCount = 0;
for (let i = 0; i < siteData.colleges.length; i++) {
  const col = siteData.colleges[i];
  const cid = Number(col.id);
  if (batch82Map[cid]) {
    const update = batch82Map[cid];
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

