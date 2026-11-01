const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');
const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));

const batch73Map = {
  300: {
    name: 'Xavier Institute of Management and Entrepreneurship (XIME Bengaluru)',
    state: 'Karnataka',
    city: 'Bengaluru',
    type: 'Private',
    website: 'https://xime.org',
    phone: '080-28528597',
    rating: 4.3,
    established: 1991,
    image: '',
    courses: [
      { title: 'Post Graduate Diploma in Management (PGDM - Flagship)', division: 'Postgraduate', duration: '2 Years', fees: '₹6,00,000/Year', eligibility: 'Graduation with 50% + CAT / XAT / GMAT / MAT / CMAT', exams: 'CAT, XAT, GMAT, MAT, CMAT', intake: '180' },
      { title: 'PGDM in Business Analytics', division: 'Postgraduate', duration: '2 Years', fees: '₹6,00,000/Year', eligibility: 'Graduation with 50% + CAT / XAT / GMAT / MAT', exams: 'CAT, XAT, GMAT, MAT', intake: '60' },
      { title: 'Executive PGDM', division: 'Postgraduate', duration: '1 Year', fees: '₹4,50,000 Total', eligibility: 'Graduation + 3 Years Work Experience', exams: 'Interview', intake: '30' }
    ]
  },
  301: {
    name: 'All India Management Association - Centre for Management Education (AIMA New Delhi)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Private',
    website: 'https://www.aima.in',
    phone: '011-24645100',
    rating: 4.2,
    established: 1957,
    image: 'https://media.collegedekho.com/media/img/institute/crawled_images/None/AIMA_Building-Lodhi_Road.jpg?width=640',
    courses: [
      { title: 'Post Graduate Diploma in Management (PGDM - Blended / Distance)', division: 'Postgraduate', duration: '2 Years', fees: '₹63,000/Year', eligibility: 'Graduation with 50% + MAT / Direct', exams: 'MAT, Direct Admission', intake: '500' },
      { title: 'Post Graduate Diploma in IT Management (PGDITM)', division: 'Postgraduate', duration: '2 Years', fees: '₹63,000/Year', eligibility: 'Graduation with 50% + MAT', exams: 'MAT', intake: '120' },
      { title: 'Professional Diploma in Digital Marketing & Business Analytics', division: 'Diploma', duration: '1 Year', fees: '₹45,000 Total', eligibility: 'Graduation in any discipline', exams: 'Direct Admission', intake: '100' }
    ]
  },
  302: {
    name: 'Indian Aviation Academy (IAA New Delhi)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Public/Government',
    website: 'https://iaa.edu.in',
    phone: '011-26134314',
    rating: 4.4,
    established: 2010,
    image: '',
    courses: [
      { title: 'Advanced Diploma in Airport Operations and Management', division: 'Diploma', duration: '1 Year', fees: '₹1,20,000 Total', eligibility: 'Graduation in any discipline', exams: 'Merit & Interview', intake: '60' },
      { title: 'Executive Certificate in Aviation Safety and Security', division: 'Certificate', duration: '6 Months', fees: '₹65,000 Total', eligibility: 'Graduation + Aviation / Industry Experience', exams: 'Industry Sponsorship', intake: '40' },
      { title: 'Certificate Course in Air Cargo and Logistics Management', division: 'Certificate', duration: '6 Months', fees: '₹55,000 Total', eligibility: '10+2 / Graduation', exams: 'Direct Admission', intake: '40' }
    ]
  },
  303: {
    name: 'Indian School of Business and Finance (ISBF New Delhi)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Private',
    website: 'https://www.isbf.edu.in',
    phone: '011-40430000',
    rating: 4.3,
    established: 2006,
    image: 'https://media.getmyuni.com/azure/college-image/big/indian-school-of-business-and-finance-isbf-new-delhi.jpg',
    courses: [
      { title: 'B.Sc. (Hons) in Economics & Finance (University of London / LSE)', division: 'Undergraduate', duration: '3 Years', fees: '₹7,50,000/Year', eligibility: '10+2 with Mathematics + iMET Entrance Test', exams: 'iMET', intake: '120' },
      { title: 'B.Sc. (Hons) in Business & Management', division: 'Undergraduate', duration: '3 Years', fees: '₹7,25,000/Year', eligibility: '10+2 with Mathematics + iMET Entrance Test', exams: 'iMET', intake: '80' },
      { title: 'Graduate Diploma in Finance (University of London)', division: 'Postgraduate', duration: '1 Year', fees: '₹3,50,000 Total', eligibility: 'Graduation in Math / Economics / Commerce', exams: 'Merit & PI', intake: '40' }
    ]
  },
  304: {
    name: 'Amity University, Noida',
    state: 'Uttar Pradesh',
    city: 'Noida',
    type: 'Private',
    website: 'https://www.amity.edu',
    phone: '0120-2445252',
    rating: 4.4,
    established: 2005,
    image: '/images/campuses/campus_architecture_8.jpg',
    courses: [
      { title: 'B.Tech in Computer Science & Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹3,95,000/Year', eligibility: '10+2 with PCM (60%+) + Amity JEE / JEE Main', exams: 'Amity JEE, JEE Main', intake: '720' },
      { title: 'Master of Business Administration (MBA - Core)', division: 'Postgraduate', duration: '2 Years', fees: '₹5,40,000/Year', eligibility: 'Graduation with 50% + CAT / MAT / XAT / Amity Test', exams: 'CAT, MAT, XAT', intake: '360' },
      { title: 'Bachelor of Business Administration (BBA)', division: 'Undergraduate', duration: '3 Years', fees: '₹3,20,000/Year', eligibility: '10+2 with 60%+', exams: 'Merit', intake: '480' },
      { title: 'B.A. LL.B. (Hons) Integrated Law', division: 'Undergraduate', duration: '5 Years', fees: '₹2,75,000/Year', eligibility: '10+2 with 60%+ + CLAT / Amity Law Test', exams: 'CLAT, Amity Law Test', intake: '240' }
    ]
  },
  305: {
    name: 'School of Engineering, Jawaharlal Nehru University (JNU SE New Delhi)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Public/Government',
    website: 'https://www.jnu.ac.in/se',
    phone: '011-26704054',
    rating: 4.6,
    established: 2018,
    image: '',
    courses: [
      { title: 'B.Tech in Computer Science & Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,25,000/Year', eligibility: '10+2 with PCM (75%+) + JEE Main (JoSAA/CSAB)', exams: 'JEE Main', intake: '60' },
      { title: 'B.Tech in Electronics and Communication Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,25,000/Year', eligibility: '10+2 with PCM (75%+) + JEE Main', exams: 'JEE Main', intake: '60' },
      { title: 'M.Tech in Computer Science & Technology', division: 'Postgraduate', duration: '2 Years', fees: '₹40,000/Year', eligibility: 'B.Tech in CSE/IT + GATE', exams: 'GATE', intake: '30' }
    ]
  },
  309: {
    name: 'Jagan Institute of Management Studies (JIMS Rohini Sector-5, New Delhi)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Private',
    website: 'https://www.jimsindia.org',
    phone: '011-45184000',
    rating: 4.3,
    established: 1993,
    image: '/images/campuses/campus_architecture_3.jpg',
    courses: [
      { title: 'Post Graduate Diploma in Management (PGDM - AICTE)', division: 'Postgraduate', duration: '2 Years', fees: '₹4,85,000/Year', eligibility: 'Graduation with 50% + CAT/XAT/MAT/CMAT', exams: 'CAT, XAT, MAT, CMAT', intake: '180' },
      { title: 'Master of Computer Applications (MCA - GGSIPU)', division: 'Postgraduate', duration: '2 Years', fees: '₹1,45,000/Year', eligibility: 'Graduation with BCA/B.Sc Math + NIMCET / IPU CET', exams: 'NIMCET, IPU CET', intake: '120' },
      { title: 'Bachelor of Business Administration (BBA - GGSIPU)', division: 'Undergraduate', duration: '3 Years', fees: '₹1,15,000/Year', eligibility: '10+2 with 50% + IPU CET / CUET UG', exams: 'IPU CET, CUET UG', intake: '240' },
      { title: 'Bachelor of Computer Applications (BCA - GGSIPU)', division: 'Undergraduate', duration: '3 Years', fees: '₹1,10,000/Year', eligibility: '10+2 with Math/IT + IPU CET / CUET UG', exams: 'IPU CET, CUET UG', intake: '120' }
    ]
  },
  310: {
    name: 'Delhi School of Business (DSB VIPS-TC Pitampura, New Delhi)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Private',
    website: 'https://dsb.edu.in',
    phone: '011-27343401',
    rating: 4.2,
    established: 2012,
    image: '',
    courses: [
      { title: 'Post Graduate Diploma in Management (PGDM - General)', division: 'Postgraduate', duration: '2 Years', fees: '₹4,75,000/Year', eligibility: 'Graduation with 50% + CAT/XAT/CMAT/MAT', exams: 'CAT, XAT, CMAT, MAT', intake: '180' },
      { title: 'PGDM in Financial Management', division: 'Postgraduate', duration: '2 Years', fees: '₹4,75,000/Year', eligibility: 'Graduation with 50% + CAT/XAT/CMAT', exams: 'CAT, XAT, CMAT', intake: '60' },
      { title: 'Executive PGDM', division: 'Postgraduate', duration: '15 Months', fees: '₹3,50,000 Total', eligibility: 'Graduation + 3 Years Corporate Experience', exams: 'Work Exp + PI', intake: '30' }
    ]
  },
  312: {
    name: 'Maharaja Surajmal Institute (MSI Janakpuri, New Delhi)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Private',
    website: 'https://www.msi-ggsip.org',
    phone: '011-25552649',
    rating: 4.4,
    established: 1999,
    image: 'https://image-static.collegedunia.com/public/college_data/images/appImage/1492770486cvr.png',
    courses: [
      { title: 'Bachelor of Business Administration (BBA - Morning & Evening)', division: 'Undergraduate', duration: '3 Years', fees: '₹1,10,000/Year', eligibility: '10+2 with 50% + IPU CET / CUET UG', exams: 'IPU CET, CUET UG', intake: '360' },
      { title: 'Bachelor of Computer Applications (BCA)', division: 'Undergraduate', duration: '3 Years', fees: '₹1,05,000/Year', eligibility: '10+2 with Math/CS + IPU CET / CUET UG', exams: 'IPU CET, CUET UG', intake: '180' },
      { title: 'B.Com (Hons)', division: 'Undergraduate', duration: '3 Years', fees: '₹98,000/Year', eligibility: '10+2 with 50% in Commerce + IPU CET / CUET UG', exams: 'IPU CET, CUET UG', intake: '120' },
      { title: 'Bachelor of Education (B.Ed.)', division: 'Postgraduate', duration: '2 Years', fees: '₹85,000/Year', eligibility: 'Graduation with 50% + IPU CET / CUET PG', exams: 'IPU CET, CUET PG', intake: '100' }
    ]
  },
  313: {
    name: 'TERI School of Advanced Studies (TERI SAS New Delhi)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Deemed',
    website: 'https://www.terisas.ac.in',
    phone: '011-71800222',
    rating: 4.5,
    established: 1998,
    image: '',
    courses: [
      { title: 'M.Sc. in Renewable Energy Engineering and Management', division: 'Postgraduate', duration: '2 Years', fees: '₹1,45,000/Year', eligibility: 'B.Tech / B.Sc with 55% + TERI SAS Entrance', exams: 'TERI Entrance', intake: '40' },
      { title: 'M.Sc. in Environmental Studies and Resource Management', division: 'Postgraduate', duration: '2 Years', fees: '₹1,40,000/Year', eligibility: 'Bachelor degree in Science/Economics + Entrance', exams: 'TERI Entrance', intake: '40' },
      { title: 'MBA in Sustainability Management', division: 'Postgraduate', duration: '2 Years', fees: '₹2,90,000/Year', eligibility: 'Graduation with 50% + CAT/MAT/GMAT/TERI Test', exams: 'CAT, MAT, GMAT, TERI Test', intake: '60' },
      { title: 'B.Sc. (Hons) in Data Science & Sustainable Systems', division: 'Undergraduate', duration: '3 Years', fees: '₹1,20,000/Year', eligibility: '10+2 with Mathematics (60%+)', exams: 'Merit & Interview', intake: '40' }
    ]
  }
};

let updatedCount = 0;
for (let i = 0; i < siteData.colleges.length; i++) {
  const col = siteData.colleges[i];
  const cid = Number(col.id);
  if (batch73Map[cid]) {
    const update = batch73Map[cid];
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
