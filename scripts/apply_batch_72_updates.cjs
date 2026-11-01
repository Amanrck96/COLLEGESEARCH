const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');
const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));

const batch72Map = {
  290: {
    name: 'Hindustan Aviation Academy, Bengaluru',
    state: 'Karnataka',
    city: 'Bengaluru',
    type: 'Private',
    website: 'https://www.hindustanacademy.edu.in',
    phone: '080-25238650',
    rating: 4.1,
    established: 1983,
    image: 'https://media.collegedekho.com/media/img/institute/crawled_images/Hindustan_Aviation_Academygalore.jpg',
    courses: [
      { title: 'Aircraft Maintenance Engineering (AME - Mechanical / Avionics)', division: 'Diploma', duration: '3 Years', fees: '₹1,80,000/Year', eligibility: '10+2 with PCM (50%) + DGCA norms', exams: 'DGCA Aptitude', intake: '120' },
      { title: 'B.Sc. in Aircraft Maintenance Science', division: 'Undergraduate', duration: '3 Years', fees: '₹1,10,000/Year', eligibility: '10+2 with PCM', exams: 'Merit', intake: '60' },
      { title: 'Commercial Pilot License Ground Training (CPL)', division: 'Certificate', duration: '1 Year', fees: '₹2,50,000 Total', eligibility: '10+2 with Physics & Mathematics', exams: 'DGCA Medical & Class II', intake: '40' }
    ]
  },
  291: {
    name: 'Gujarat University, Ahmedabad',
    state: 'Gujarat',
    city: 'Ahmedabad',
    type: 'Public/Government',
    website: 'https://www.gujaratuniversity.ac.in',
    phone: '079-26301341',
    rating: 4.4,
    established: 1949,
    image: '/images/campuses/campus_architecture_4.jpg',
    courses: [
      { title: 'Master of Business Administration (MBA - BK School of Management)', division: 'Postgraduate', duration: '2 Years', fees: '₹35,000/Year', eligibility: 'Graduation with 50% + CMAT / ACPC', exams: 'CMAT, ACPC', intake: '180' },
      { title: 'Master of Computer Applications (MCA)', division: 'Postgraduate', duration: '2 Years', fees: '₹40,000/Year', eligibility: 'Graduation with Math/BCA + CMAT / ACPC', exams: 'CMAT, ACPC', intake: '120' },
      { title: 'M.Sc. in Information Technology & Data Science', division: 'Postgraduate', duration: '2 Years', fees: '₹30,000/Year', eligibility: 'B.Sc / BCA with 50%', exams: 'Merit', intake: '60' },
      { title: 'B.A. / B.Com / B.Sc. Traditional Degree Programs', division: 'Undergraduate', duration: '3 Years', fees: '₹8,500/Year', eligibility: '10+2 from recognized board', exams: 'Merit', intake: '800' }
    ]
  },
  292: {
    name: 'Chaudhary Charan Singh University (CCSU Meerut)',
    state: 'Uttar Pradesh',
    city: 'Meerut',
    type: 'Public/Government',
    website: 'https://www.ccsuniversity.ac.in',
    phone: '0121-2763539',
    rating: 4.3,
    established: 1965,
    image: 'https://image-static.collegedunia.com/public/dashboard_upload/1770043394_IMG-20250925-WA0062-AasthaSharma.jpg',
    courses: [
      { title: 'B.Tech in Computer Science & Engineering (SCRIET CCSU)', division: 'Undergraduate', duration: '4 Years', fees: '₹85,000/Year', eligibility: '10+2 with PCM + JEE Main / CUET UG', exams: 'JEE Main, CUET UG', intake: '120' },
      { title: 'Master of Business Administration (MBA)', division: 'Postgraduate', duration: '2 Years', fees: '₹65,000/Year', eligibility: 'Graduation with 50% + CUET PG / CAT', exams: 'CUET PG, CAT', intake: '120' },
      { title: 'Bachelor of Legislative Law (LL.B.)', division: 'Undergraduate', duration: '3 Years', fees: '₹12,000/Year', eligibility: 'Graduation with 45%', exams: 'Merit', intake: '240' },
      { title: 'Master of Computer Applications (MCA)', division: 'Postgraduate', duration: '2 Years', fees: '₹55,000/Year', eligibility: 'BCA / B.Sc with Math + CUET PG', exams: 'CUET PG', intake: '60' }
    ]
  },
  293: {
    name: 'University of Mumbai (Mumbai University - MU)',
    state: 'Maharashtra',
    city: 'Mumbai',
    type: 'Public/Government',
    website: 'https://mu.ac.in',
    phone: '022-26543000',
    rating: 4.7,
    established: 1857,
    image: '',
    courses: [
      { title: 'Master of Management Studies (MMS - JBIMS / Dept of Management)', division: 'Postgraduate', duration: '2 Years', fees: '₹1,55,000/Year', eligibility: 'Graduation with 50% + MAH MBA CET / CAT', exams: 'MAH MBA CET, CAT', intake: '150' },
      { title: 'B.E. in Information Technology & Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹45,000/Year', eligibility: '10+2 with PCM + MHT CET / JEE Main', exams: 'MHT CET, JEE Main', intake: '180' },
      { title: 'Master of Computer Applications (MCA)', division: 'Postgraduate', duration: '2 Years', fees: '₹35,000/Year', eligibility: 'Graduation with Math + MAH MCA CET', exams: 'MAH MCA CET', intake: '120' },
      { title: 'B.Com / B.A. / B.Sc. Traditional Degree Courses', division: 'Undergraduate', duration: '3 Years', fees: '₹7,500/Year', eligibility: '10+2 in relevant stream', exams: 'Merit', intake: '1200' }
    ]
  },
  294: {
    name: 'Anna University, Chennai',
    state: 'Tamil Nadu',
    city: 'Chennai',
    type: 'Public/Government',
    website: 'https://www.annauniv.edu',
    phone: '044-22357004',
    rating: 4.8,
    established: 1978,
    image: '',
    courses: [
      { title: 'B.E. / B.Tech (CEG & ACT Guindy Campuses)', division: 'Undergraduate', duration: '4 Years', fees: '₹55,000/Year', eligibility: '10+2 with PCM + TNEA Counselling', exams: 'TNEA', intake: '1200' },
      { title: 'M.E. / M.Tech in Engineering Disciplines', division: 'Postgraduate', duration: '2 Years', fees: '₹60,000/Year', eligibility: 'B.E./B.Tech degree + TANCET / GATE', exams: 'TANCET, GATE', intake: '400' },
      { title: 'Master of Business Administration (MBA - DOMS Anna Univ)', division: 'Postgraduate', duration: '2 Years', fees: '₹41,000/Year', eligibility: 'Graduation with 50% + TANCET MBA', exams: 'TANCET MBA', intake: '120' },
      { title: 'Master of Computer Applications (MCA)', division: 'Postgraduate', duration: '2 Years', fees: '₹41,000/Year', eligibility: 'BCA/B.Sc with Math + TANCET MCA', exams: 'TANCET MCA', intake: '120' }
    ]
  },
  295: {
    name: 'Banaras Hindu University (BHU Varanasi)',
    state: 'Uttar Pradesh',
    city: 'Varanasi',
    type: 'Public/Government',
    website: 'https://www.bhu.ac.in',
    phone: '0542-2368558',
    rating: 4.8,
    established: 1916,
    image: '',
    courses: [
      { title: 'B.Sc. (Hons) Agriculture (Institute of Agricultural Sciences)', division: 'Undergraduate', duration: '4 Years', fees: '₹10,200/Year', eligibility: '10+2 with PCB/PCM/Agriculture + CUET UG', exams: 'CUET UG', intake: '154' },
      { title: 'Master of Business Administration (MBA - FMS BHU)', division: 'Postgraduate', duration: '2 Years', fees: '₹50,000/Year', eligibility: 'Graduation with 50% + CAT', exams: 'CAT', intake: '120' },
      { title: 'B.A. (Hons) / B.Com (Hons) / B.Sc. (Hons)', division: 'Undergraduate', duration: '3 Years', fees: '₹4,800/Year', eligibility: '10+2 with 50% + CUET UG', exams: 'CUET UG', intake: '1500' },
      { title: 'M.Sc. in Physics / Chemistry / Biotechnology', division: 'Postgraduate', duration: '2 Years', fees: '₹6,500/Year', eligibility: 'B.Sc in relevant subject + CUET PG', exams: 'CUET PG', intake: '300' }
    ]
  },
  296: {
    name: 'Indira Gandhi National Open University (IGNOU New Delhi)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Public/Government',
    website: 'http://www.ignou.ac.in',
    phone: '011-29571301',
    rating: 4.4,
    established: 1985,
    image: '',
    courses: [
      { title: 'Master of Business Administration (MBA - ODL Distance)', division: 'Postgraduate', duration: '2 Years', fees: '₹15,500/Year', eligibility: 'Graduation with 50% in any stream', exams: 'Direct Admission', intake: 'Open' },
      { title: 'Master of Computer Applications (MCA - ODL Distance)', division: 'Postgraduate', duration: '2 Years', fees: '₹16,000/Year', eligibility: 'BCA / B.Sc with Computer Science/Math', exams: 'Direct Admission', intake: 'Open' },
      { title: 'Bachelor of Computer Applications (BCA - ODL Distance)', division: 'Undergraduate', duration: '3 Years', fees: '₹15,000/Year', eligibility: '10+2 in any discipline', exams: 'Direct Admission', intake: 'Open' },
      { title: 'Bachelor of Arts (BA) / Bachelor of Commerce (B.Com - ODL)', division: 'Undergraduate', duration: '3 Years', fees: '₹4,200/Year', eligibility: '10+2 or equivalent', exams: 'Direct Admission', intake: 'Open' }
    ]
  },
  297: {
    name: 'Jawaharlal Nehru University (JNU New Delhi)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Public/Government',
    website: 'https://www.jnu.ac.in',
    phone: '011-26704054',
    rating: 4.8,
    established: 1969,
    image: '/images/campuses/campus_architecture_1.jpg',
    courses: [
      { title: 'M.A. in International Relations / Political Science / Economics', division: 'Postgraduate', duration: '2 Years', fees: '₹350/Year', eligibility: 'Graduation with 50% + CUET PG', exams: 'CUET PG', intake: '350' },
      { title: 'B.Tech in Computer Science & Engineering (School of Engineering)', division: 'Undergraduate', duration: '4 Years', fees: '₹1,25,000/Year', eligibility: '10+2 with PCM (75%+) + JEE Main', exams: 'JEE Main', intake: '60' },
      { title: 'B.A. (Hons) in Foreign Languages (SLL&CS)', division: 'Undergraduate', duration: '3 Years', fees: '₹350/Year', eligibility: '10+2 with 45% + CUET UG', exams: 'CUET UG', intake: '400' },
      { title: 'M.Sc. in Biotechnology / Life Sciences', division: 'Postgraduate', duration: '2 Years', fees: '₹500/Year', eligibility: 'B.Sc with 55% + GAT-B / CUET PG', exams: 'GAT-B, CUET PG', intake: '50' }
    ]
  },
  298: {
    name: 'University of Delhi (DU New Delhi)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Public/Government',
    website: 'https://www.du.ac.in',
    phone: '011-27006900',
    rating: 4.9,
    established: 1922,
    image: '',
    courses: [
      { title: 'B.Com (Hons) / B.A. (Hons) / B.Sc. (Hons) Across DU Colleges', division: 'Undergraduate', duration: '3 Years', fees: '₹14,000/Year', eligibility: '10+2 with relevant subjects + CUET UG', exams: 'CUET UG', intake: '70000' },
      { title: 'Master of Business Administration (MBA - FMS / DBE / DSE)', division: 'Postgraduate', duration: '2 Years', fees: '₹1,00,000/Year', eligibility: 'Graduation with 50% + CAT', exams: 'CAT', intake: '350' },
      { title: 'Bachelor of Laws (LL.B. - Faculty of Law DU)', division: 'Postgraduate', duration: '3 Years', fees: '₹6,000/Year', eligibility: 'Graduation with 50% + CUET PG', exams: 'CUET PG', intake: '2800' },
      { title: 'B.Tech in Computer Science & Engineering (FoT / CIC DU)', division: 'Undergraduate', duration: '4 Years', fees: '₹1,05,000/Year', eligibility: '10+2 with PCM + JEE Main', exams: 'JEE Main', intake: '120' }
    ]
  },
  299: {
    name: 'Loreto College, Kolkata',
    state: 'West Bengal',
    city: 'Kolkata',
    type: 'Private',
    website: 'https://www.loretocollege.in',
    phone: '033-22640952',
    rating: 4.6,
    established: 1912,
    image: 'https://image-static.collegedunia.com/public/college_data/images/campusimage/15045163632591_LCE.jpg',
    courses: [
      { title: 'B.A. (Hons) in English / History / Psychology / Political Science', division: 'Undergraduate', duration: '3 Years', fees: '₹22,500/Year', eligibility: '10+2 with 60%+ in English & aggregate', exams: 'Merit', intake: '200' },
      { title: 'B.Sc. (Hons) in Geography / Economics', division: 'Undergraduate', duration: '3 Years', fees: '₹24,500/Year', eligibility: '10+2 with Mathematics & aggregate', exams: 'Merit', intake: '60' },
      { title: 'Bachelor of Education (B.Ed. for Women)', division: 'Postgraduate', duration: '2 Years', fees: '₹35,000/Year', eligibility: 'Graduation / Post Graduation with 50% + Calcutta Univ Entrance', exams: 'Calcutta Univ Entrance', intake: '50' }
    ]
  }
};

let updatedCount = 0;
for (let i = 0; i < siteData.colleges.length; i++) {
  const col = siteData.colleges[i];
  const cid = Number(col.id);
  if (batch72Map[cid]) {
    const update = batch72Map[cid];
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

