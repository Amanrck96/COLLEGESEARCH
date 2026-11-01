const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');
const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));

const batch75Map = {
  331: {
    name: 'Panchshil College of Education, Rajkot',
    state: 'Gujarat',
    city: 'Rajkot',
    type: 'Private',
    website: 'https://panchshilschool.edu.in',
    phone: '0281-2384777',
    rating: 4.1,
    established: 2005,
    image: 'https://panchshilschool.edu.in/template/default/assets/images/school.jpg',
    courses: [
      { title: 'Bachelor of Education (B.Ed.)', division: 'Postgraduate', duration: '2 Years', fees: '₹40,000/Year', eligibility: 'Graduation with 50% + Saurashtra Univ B.Ed Admission', exams: 'Saurashtra Univ Entrance', intake: '100' },
      { title: 'Diploma in Elementary Education (D.El.Ed)', division: 'Diploma', duration: '2 Years', fees: '₹25,000/Year', eligibility: '10+2 with 50%', exams: 'Merit', intake: '50' },
      { title: 'Master of Education (M.Ed.)', division: 'Postgraduate', duration: '2 Years', fees: '₹55,000/Year', eligibility: 'B.Ed degree with 50%', exams: 'Merit', intake: '50' }
    ]
  },
  332: {
    name: 'Pandit Deendayal Energy University (PDEU Gandhinagar)',
    state: 'Gujarat',
    city: 'Gandhinagar',
    type: 'Private',
    website: 'https://www.pdeu.ac.in',
    phone: '079-23275060',
    rating: 4.6,
    established: 2007,
    image: '/images/campuses/campus_architecture_5.jpg',
    courses: [
      { title: 'B.Tech in Petroleum Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹2,55,000/Year', eligibility: '10+2 with PCM + JEE Main / ACPC Gujarat', exams: 'JEE Main, ACPC', intake: '120' },
      { title: 'B.Tech in Chemical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹2,55,000/Year', eligibility: '10+2 with PCM + JEE Main / ACPC', exams: 'JEE Main, ACPC', intake: '60' },
      { title: 'MBA in Energy and Infrastructure', division: 'Postgraduate', duration: '2 Years', fees: '₹4,80,000/Year', eligibility: 'Graduation with 50% + CAT/XAT/NMAT', exams: 'CAT, XAT, NMAT', intake: '120' },
      { title: 'M.Tech in Energy Systems & Petroleum Technology', division: 'Postgraduate', duration: '2 Years', fees: '₹1,35,000/Year', eligibility: 'B.Tech in relevant branch + GATE', exams: 'GATE', intake: '36' }
    ]
  },
  333: {
    name: 'Shree Swaminarayan Institute of Technology (SSIT Gandhinagar)',
    state: 'Gujarat',
    city: 'Gandhinagar',
    type: 'Private',
    website: 'https://ssit.co.in',
    phone: '079-23969131',
    rating: 4.1,
    established: 2014,
    image: '',
    courses: [
      { title: 'B.Tech in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹74,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC Gujarat', exams: 'GUJCET, ACPC', intake: '120' },
      { title: 'B.Tech in Civil Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹74,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
      { title: 'B.Tech in Information Technology', division: 'Undergraduate', duration: '4 Years', fees: '₹74,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
      { title: 'Diploma in Mechanical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹42,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' }
    ]
  },
  334: {
    name: 'The Maharaja Sayajirao University of Baroda (MSU Baroda)',
    state: 'Gujarat',
    city: 'Vadodara',
    type: 'Public/Government',
    website: 'https://www.msubaroda.ac.in',
    phone: '0265-2795555',
    rating: 4.7,
    established: 1949,
    image: '/images/campuses/campus_architecture_2.jpg',
    courses: [
      { title: 'B.E. in Computer Science & Engineering (Faculty of Tech & Engg)', division: 'Undergraduate', duration: '4 Years', fees: '₹12,500/Year', eligibility: '10+2 with PCM + GUJCET / ACPC Gujarat', exams: 'GUJCET, ACPC', intake: '60' },
      { title: 'Master of Business Administration (MBA - FMS Baroda)', division: 'Postgraduate', duration: '2 Years', fees: '₹45,000/Year', eligibility: 'Graduation with 50% + CMAT / ACPC', exams: 'CMAT, ACPC', intake: '120' },
      { title: 'Master of Computer Applications (MCA)', division: 'Postgraduate', duration: '2 Years', fees: '₹25,000/Year', eligibility: 'Graduation with Math + CMAT / ACPC', exams: 'CMAT, ACPC', intake: '60' },
      { title: 'B.Com / B.A. / B.Sc Traditional Degree Programs', division: 'Undergraduate', duration: '3 Years', fees: '₹6,500/Year', eligibility: '10+2 in relevant discipline', exams: 'Merit', intake: '1500' }
    ]
  },
  335: {
    name: 'Institute of Technology, Nirma University (ITNU Ahmedabad)',
    state: 'Gujarat',
    city: 'Ahmedabad',
    type: 'Private',
    website: 'https://technology.nirmauni.ac.in',
    phone: '079-71652585',
    rating: 4.6,
    established: 1995,
    image: 'https://image-static.collegedunia.com/public/college_data/images/appImage/16255503481920x1285.jpg',
    courses: [
      { title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹2,15,000/Year', eligibility: '10+2 with PCM (60%+) + JEE Main / GUJCET', exams: 'JEE Main, GUJCET', intake: '300' },
      { title: 'B.Tech in Artificial Intelligence & Machine Learning', division: 'Undergraduate', duration: '4 Years', fees: '₹2,15,000/Year', eligibility: '10+2 with PCM + JEE Main', exams: 'JEE Main', intake: '60' },
      { title: 'B.Tech in Electronics and Communication Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹2,15,000/Year', eligibility: '10+2 with PCM + JEE Main / GUJCET', exams: 'JEE Main, GUJCET', intake: '180' },
      { title: 'M.Tech in Computer Science & Engineering', division: 'Postgraduate', duration: '2 Years', fees: '₹1,40,000/Year', eligibility: 'B.Tech in CSE/IT + GATE', exams: 'GATE', intake: '36' },
      { title: 'Master of Computer Applications (MCA)', division: 'Postgraduate', duration: '2 Years', fees: '₹1,40,000/Year', eligibility: 'BCA / B.Sc with Math + CMAT / ACPC', exams: 'CMAT, ACPC', intake: '60' }
    ]
  },
  336: {
    name: 'Silver Oak College of Engineering and Technology (SOCET Ahmedabad)',
    state: 'Gujarat',
    city: 'Ahmedabad',
    type: 'Private',
    website: 'https://silveroakuni.ac.in',
    phone: '079-66046304',
    rating: 4.1,
    established: 2009,
    image: 'https://www.collegebatch.com/static/clg-gallery/silver-oak-college-of-engineering-technology-ahmedabad-234078.webp',
    courses: [
      { title: 'B.Tech in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹84,000/Year', eligibility: '10+2 with PCM + GUJCET / JEE Main / ACPC', exams: 'GUJCET, ACPC', intake: '240' },
      { title: 'B.Tech in Information Technology', division: 'Undergraduate', duration: '4 Years', fees: '₹84,000/Year', eligibility: '10+2 with PCM + GUJCET', exams: 'GUJCET, ACPC', intake: '120' },
      { title: 'B.Tech in Aeronautical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹84,000/Year', eligibility: '10+2 with PCM + GUJCET', exams: 'GUJCET, ACPC', intake: '60' },
      { title: 'M.Tech in Cyber Security / Computer Engineering', division: 'Postgraduate', duration: '2 Years', fees: '₹90,000/Year', eligibility: 'B.Tech in CSE/IT + GATE / ACPC', exams: 'GATE, ACPC', intake: '36' }
    ]
  },
  337: {
    name: 'Sardar Vallabhbhai National Institute of Technology (SVNIT Surat)',
    state: 'Gujarat',
    city: 'Surat',
    type: 'Public/Government',
    website: 'https://www.svnit.ac.in',
    phone: '0261-2259571',
    rating: 4.8,
    established: 1961,
    image: '',
    courses: [
      { title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,35,000/Year', eligibility: '10+2 with PCM (75%+) + JEE Main (JoSAA)', exams: 'JEE Main', intake: '120' },
      { title: 'B.Tech in Mechanical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,35,000/Year', eligibility: '10+2 with PCM + JEE Main (JoSAA)', exams: 'JEE Main', intake: '120' },
      { title: 'B.Tech in Chemical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,35,000/Year', eligibility: '10+2 with PCM + JEE Main (JoSAA)', exams: 'JEE Main', intake: '90' },
      { title: 'M.Tech in VLSI Design / Computer Engineering', division: 'Postgraduate', duration: '2 Years', fees: '₹85,000/Year', eligibility: 'B.Tech degree + GATE (CCMT)', exams: 'GATE', intake: '150' },
      { title: 'Integrated M.Sc. in Physics / Chemistry / Mathematics', division: 'Integrated', duration: '5 Years', fees: '₹75,000/Year', eligibility: '10+2 with Science + JEE Main', exams: 'JEE Main', intake: '90' }
    ]
  },
  338: {
    name: 'Indian Institute of Information Technology Surat (IIIT Surat)',
    state: 'Gujarat',
    city: 'Surat',
    type: 'Public/Government',
    website: 'https://www.iiitsurat.ac.in',
    phone: '02621-298060',
    rating: 4.5,
    established: 2017,
    image: 'https://assets.collegedunia.com/public/image/IIIT_Surat_Campus_35812fe84390236dafd31d10b9172fb5.png',
    courses: [
      { title: 'B.Tech in Computer Science and Engineering (CSE)', division: 'Undergraduate', duration: '4 Years', fees: '₹1,85,000/Year', eligibility: '10+2 with PCM (75%+) + JEE Main (JoSAA/CSAB)', exams: 'JEE Main', intake: '120' },
      { title: 'B.Tech in Electronics and Communication Engineering (ECE)', division: 'Undergraduate', duration: '4 Years', fees: '₹1,85,000/Year', eligibility: '10+2 with PCM + JEE Main (JoSAA/CSAB)', exams: 'JEE Main', intake: '75' },
      { title: 'Ph.D. in Computer Science & Engineering', division: 'Doctoral', duration: '3 Years', fees: '₹50,000/Year', eligibility: 'Master Degree in CSE/ECE + Written Test & PI', exams: 'Interview', intake: '15' }
    ]
  },
  339: {
    name: 'Dhirubhai Ambani Institute of Information and Communication Technology (DA-IICT Gandhinagar)',
    state: 'Gujarat',
    city: 'Gandhinagar',
    type: 'Private',
    website: 'https://www.daiict.ac.in',
    phone: '079-69080808',
    rating: 4.8,
    established: 2001,
    image: '',
    courses: [
      { title: 'B.Tech in Information and Communication Technology (ICT)', division: 'Undergraduate', duration: '4 Years', fees: '₹2,35,000/Year', eligibility: '10+2 with PCM + JEE Main / ACPC Gujarat', exams: 'JEE Main, ACPC', intake: '300' },
      { title: 'B.Tech (Honours in ICT with Minors in Computational Science)', division: 'Undergraduate', duration: '4 Years', fees: '₹2,35,000/Year', eligibility: '10+2 with PCM + JEE Main', exams: 'JEE Main', intake: '60' },
      { title: 'M.Sc. in Data Science', division: 'Postgraduate', duration: '2 Years', fees: '₹1,65,000/Year', eligibility: 'Bachelor Degree with Math/Stats/CS + DA-IICT Test', exams: 'DA-IICT Test', intake: '60' },
      { title: 'M.Tech in Information and Communication Technology', division: 'Postgraduate', duration: '2 Years', fees: '₹1,50,000/Year', eligibility: 'B.Tech/BE in relevant branch + GATE', exams: 'GATE', intake: '60' }
    ]
  },
  340: {
    name: 'School of Technology, Pandit Deendayal Energy University (SoT PDEU Gandhinagar)',
    state: 'Gujarat',
    city: 'Gandhinagar',
    type: 'Private',
    website: 'https://pdeu.ac.in/school-of-technology',
    phone: '079-23275060',
    rating: 4.5,
    established: 2010,
    image: '',
    courses: [
      { title: 'B.Tech in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹2,55,000/Year', eligibility: '10+2 with PCM + JEE Main / ACPC Gujarat', exams: 'JEE Main, ACPC', intake: '240' },
      { title: 'B.Tech in Information and Communication Technology (ICT)', division: 'Undergraduate', duration: '4 Years', fees: '₹2,55,000/Year', eligibility: '10+2 with PCM + JEE Main', exams: 'JEE Main', intake: '120' },
      { title: 'B.Tech in Civil Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹2,55,000/Year', eligibility: '10+2 with PCM + JEE Main / ACPC', exams: 'JEE Main, ACPC', intake: '60' },
      { title: 'M.Tech in Data Science & Artificial Intelligence', division: 'Postgraduate', duration: '2 Years', fees: '₹1,35,000/Year', eligibility: 'B.Tech in CSE/IT + GATE', exams: 'GATE', intake: '30' }
    ]
  }
};

let updatedCount = 0;
for (let i = 0; i < siteData.colleges.length; i++) {
  const col = siteData.colleges[i];
  const cid = Number(col.id);
  if (batch75Map[cid]) {
    const update = batch75Map[cid];
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

