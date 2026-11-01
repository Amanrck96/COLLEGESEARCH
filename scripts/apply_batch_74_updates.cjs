const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');
const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));

const batch74Map = {
  317: {
    name: 'University Polytechnic, Jamia Millia Islamia (New Delhi)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Public/Government',
    website: 'https://www.jmi.ac.in/polytechnic',
    phone: '011-26980281',
    rating: 4.4,
    established: 1937,
    image: '',
    courses: [
      { title: 'Diploma in Mechanical Engineering (Morning & Evening)', division: 'Diploma', duration: '3 Years', fees: '₹8,970/Year', eligibility: '10th Standard with Science & Math (45%+) + JMI Entrance', exams: 'JMI Entrance', intake: '120' },
      { title: 'Diploma in Civil Engineering', division: 'Diploma', duration: '3 Years', fees: '₹8,970/Year', eligibility: '10th Standard with Science & Math + JMI Entrance', exams: 'JMI Entrance', intake: '60' },
      { title: 'Diploma in Electrical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹8,970/Year', eligibility: '10th Standard with Science & Math + JMI Entrance', exams: 'JMI Entrance', intake: '60' },
      { title: 'Diploma in Computer Engineering', division: 'Diploma', duration: '3 Years', fees: '₹8,970/Year', eligibility: '10th Standard with Science & Math + JMI Entrance', exams: 'JMI Entrance', intake: '60' }
    ]
  },
  318: {
    name: 'Vivekananda Institute of Professional Studies - Technical Campus (VIPS-TC Pitampura)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Private',
    website: 'https://vips.edu',
    phone: '011-27343401',
    rating: 4.5,
    established: 2000,
    image: 'https://www.studyplaces.co.in/wp-content/uploads/2021/05/vivekananda-institute-of-professional-studies-technical-campus.jpg',
    courses: [
      { title: 'B.A. LL.B. (Hons) / B.B.A. LL.B. (Hons)', division: 'Undergraduate', duration: '5 Years', fees: '₹1,45,000/Year', eligibility: '10+2 with 50% + CLAT UG (GGSIPU Counselling)', exams: 'CLAT UG', intake: '300' },
      { title: 'Master of Computer Applications (MCA)', division: 'Postgraduate', duration: '2 Years', fees: '₹1,35,000/Year', eligibility: 'BCA / B.Sc with Math + NIMCET / IPU CET', exams: 'NIMCET, IPU CET', intake: '120' },
      { title: 'Bachelor of Computer Applications (BCA)', division: 'Undergraduate', duration: '3 Years', fees: '₹1,10,000/Year', eligibility: '10+2 with Math/CS + IPU CET / CUET UG', exams: 'IPU CET, CUET UG', intake: '240' },
      { title: 'B.Tech in Artificial Intelligence & Data Science', division: 'Undergraduate', duration: '4 Years', fees: '₹1,35,000/Year', eligibility: '10+2 with PCM (55%+) + JEE Main', exams: 'JEE Main', intake: '120' }
    ]
  },
  319: {
    name: 'Indraprastha Institute of Information Technology Delhi (IIIT-Delhi)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Public/Government',
    website: 'https://www.iiitd.ac.in',
    phone: '011-26907400',
    rating: 4.8,
    established: 2008,
    image: 'https://img.jagranjosh.com/images/2022/October/17102022/Campus5.jpg',
    courses: [
      { title: 'B.Tech in Computer Science and Engineering (CSE)', division: 'Undergraduate', duration: '4 Years', fees: '₹4,50,000/Year', eligibility: '10+2 with PCM (70%+) + JEE Main (JAC Delhi)', exams: 'JEE Main', intake: '120' },
      { title: 'B.Tech in Computer Science and Artificial Intelligence (CSAI)', division: 'Undergraduate', duration: '4 Years', fees: '₹4,50,000/Year', eligibility: '10+2 with PCM + JEE Main (JAC Delhi)', exams: 'JEE Main', intake: '120' },
      { title: 'M.Tech in Computer Science and Engineering', division: 'Postgraduate', duration: '2 Years', fees: '₹1,80,000/Year', eligibility: 'B.Tech in CSE/IT + GATE / IIITD Test', exams: 'GATE', intake: '150' },
      { title: 'B.Tech in Computer Science and Biosciences (CSB)', division: 'Undergraduate', duration: '4 Years', fees: '₹4,50,000/Year', eligibility: '10+2 with PCM/PCB + JEE Main', exams: 'JEE Main', intake: '60' }
    ]
  },
  322: {
    name: 'The National Institute of Health and Family Welfare (NIHFW New Delhi)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Public/Government',
    website: 'https://www.nihfw.org',
    phone: '011-26165959',
    rating: 4.5,
    established: 1977,
    image: '',
    courses: [
      { title: 'Post Graduate Diploma in Management (Executive - Health & Family Welfare)', division: 'Postgraduate', duration: '15 Months', fees: '₹1,50,000 Total', eligibility: 'MBBS / Post Graduation + Healthcare Experience', exams: 'Work Exp + PI', intake: '30' },
      { title: 'Post Graduate Diploma in Hospital Management (Distance Learning)', division: 'Diploma', duration: '1 Year', fees: '₹35,000 Total', eligibility: 'MBBS / BDS / Master Degree', exams: 'Direct Admission', intake: '150' },
      { title: 'Post Graduate Diploma in Public Health Management (PGDPHM)', division: 'Diploma', duration: '1 Year', fees: '₹1,25,000 Total', eligibility: 'Graduates in Medicine / Paramedical', exams: 'Merit', intake: '50' }
    ]
  },
  323: {
    name: 'AIMA Centre for Management Education (CME Lajpat Nagar, New Delhi)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Private',
    website: 'https://www.aima.in',
    phone: '011-47673000',
    rating: 4.2,
    established: 1993,
    image: 'https://media.collegedekho.com/media/img/institute/crawled_images/None/aima1.jpg?width=1080',
    courses: [
      { title: 'Post Graduate Diploma in Management (PGDM - Executive Weekend)', division: 'Postgraduate', duration: '2 Years', fees: '₹75,000/Year', eligibility: 'Graduation with 50% + 2 Years Corporate Experience', exams: 'Work Exp + PI', intake: '120' },
      { title: 'Post Graduate Certificate in Management (PGCM - Digital Marketing)', division: 'Certificate', duration: '1 Year', fees: '₹50,000 Total', eligibility: 'Graduation in any discipline', exams: 'Direct Admission', intake: '60' },
      { title: 'Advanced Diploma in Management (ADM)', division: 'Diploma', duration: '1 Year', fees: '₹45,000 Total', eligibility: 'Graduation Merit', exams: 'Direct Admission', intake: '60' }
    ]
  },
  324: {
    name: 'Guru Tegh Bahadur 4th Centenary Engineering College (GTB4CEC Rajouri Garden)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Private',
    website: 'https://www.gtbit.ac.in',
    phone: '011-25458183',
    rating: 4.1,
    established: 2007,
    image: '/images/campuses/campus_architecture_1.jpg',
    courses: [
      { title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,35,000/Year', eligibility: '10+2 with PCM (55%+) + JEE Main (GGSIPU Counselling)', exams: 'JEE Main', intake: '120' },
      { title: 'B.Tech in Information Technology', division: 'Undergraduate', duration: '4 Years', fees: '₹1,35,000/Year', eligibility: '10+2 with PCM + JEE Main', exams: 'JEE Main', intake: '60' },
      { title: 'B.Tech in Electronics and Communication Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,35,000/Year', eligibility: '10+2 with PCM + JEE Main', exams: 'JEE Main', intake: '60' }
    ]
  },
  325: {
    name: 'Faculty of Engineering and Technology, Jamia Millia Islamia (FET JMI New Delhi)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Public/Government',
    website: 'https://www.jmi.ac.in/fet',
    phone: '011-26981717',
    rating: 4.7,
    established: 1985,
    image: '/images/campuses/campus_architecture_2.jpg',
    courses: [
      { title: 'B.Tech in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹16,150/Year', eligibility: '10+2 with PCM (55%+) + JEE Main', exams: 'JEE Main', intake: '70' },
      { title: 'B.Tech in Electronics and Communication Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹16,150/Year', eligibility: '10+2 with PCM + JEE Main', exams: 'JEE Main', intake: '70' },
      { title: 'B.Tech in Mechanical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹16,150/Year', eligibility: '10+2 with PCM + JEE Main', exams: 'JEE Main', intake: '70' },
      { title: 'M.Tech in Computer Engineering / Environmental Engineering', division: 'Postgraduate', duration: '2 Years', fees: '₹18,000/Year', eligibility: 'B.Tech in relevant branch + GATE', exams: 'GATE', intake: '50' }
    ]
  },
  326: {
    name: 'Netaji Subhas University of Technology - West Campus (NSUT West Campus Jaffarpur)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Public/Government',
    website: 'https://www.nsut.ac.in',
    phone: '011-25000268',
    rating: 4.4,
    established: 2007,
    image: '',
    courses: [
      { title: 'B.Tech in Civil Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹2,19,000/Year', eligibility: '10+2 with PCM (60%+) + JEE Main (JAC Delhi)', exams: 'JEE Main', intake: '60' },
      { title: 'B.Tech in Mechanical Engineering (Electric Vehicles)', division: 'Undergraduate', duration: '4 Years', fees: '₹2,19,000/Year', eligibility: '10+2 with PCM + JEE Main (JAC Delhi)', exams: 'JEE Main', intake: '60' },
      { title: 'B.Tech in Geoinformatics', division: 'Undergraduate', duration: '4 Years', fees: '₹2,19,000/Year', eligibility: '10+2 with PCM + JEE Main (JAC Delhi)', exams: 'JEE Main', intake: '60' }
    ]
  },
  329: {
    name: 'National Institute of Design (NID Ahmedabad)',
    state: 'Gujarat',
    city: 'Ahmedabad',
    type: 'Public/Government',
    website: 'https://www.nid.edu',
    phone: '079-26623692',
    rating: 4.9,
    established: 1961,
    image: '',
    courses: [
      { title: 'Bachelor of Design (B.Des - Industrial / Communication / Textile)', division: 'Undergraduate', duration: '4 Years', fees: '₹3,85,000/Year', eligibility: '10+2 in any stream + NID DAT (Prelims & Mains)', exams: 'NID DAT', intake: '125' },
      { title: 'Master of Design (M.Des - Product / Graphic / Animation Film)', division: 'Postgraduate', duration: '2.5 Years', fees: '₹4,15,000/Year', eligibility: 'Bachelor Degree in relevant field + NID DAT', exams: 'NID DAT', intake: '100' },
      { title: 'Ph.D. in Design Research', division: 'Doctoral', duration: '3 Years', fees: '₹1,50,000/Year', eligibility: 'Master Degree in Design + Research Interview', exams: 'Interview', intake: '15' }
    ]
  },
  330: {
    name: 'Polytechnic, The Maharaja Sayajirao University of Baroda (MSU Baroda)',
    state: 'Gujarat',
    city: 'Vadodara',
    type: 'Public/Government',
    website: 'https://www.msubaroda.ac.in/Polytechnic',
    phone: '0265-2783915',
    rating: 4.5,
    established: 1957,
    image: '',
    courses: [
      { title: 'Diploma in Mechanical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹6,500/Year', eligibility: '10th Standard with Science & Math + ACPDC Gujarat', exams: 'ACPDC', intake: '120' },
      { title: 'Diploma in Civil Engineering', division: 'Diploma', duration: '3 Years', fees: '₹6,500/Year', eligibility: '10th Standard with Science & Math + ACPDC Gujarat', exams: 'ACPDC', intake: '60' },
      { title: 'Diploma in Electrical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹6,500/Year', eligibility: '10th Standard with Science & Math + ACPDC Gujarat', exams: 'ACPDC', intake: '60' },
      { title: 'Diploma in Petrochemical Technology', division: 'Diploma', duration: '3 Years', fees: '₹6,500/Year', eligibility: '10th Standard with Science & Math + ACPDC Gujarat', exams: 'ACPDC', intake: '60' }
    ]
  }
};

let updatedCount = 0;
for (let i = 0; i < siteData.colleges.length; i++) {
  const col = siteData.colleges[i];
  const cid = Number(col.id);
  if (batch74Map[cid]) {
    const update = batch74Map[cid];
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
