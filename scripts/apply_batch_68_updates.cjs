const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');
const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));

const batch68Map = {
  248: {
    name: 'Jagannath International Management School, Kalkaji, New Delhi',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Private',
    website: 'https://www.jagannath.org/',
    phone: '011-40619300',
    rating: 4.5,
    established: 1997,
    image: '/images/campuses/campus_architecture_3.jpg',
    courses: [
      { title: 'Post Graduate Diploma in Management (PGDM)', division: 'Postgraduate', duration: '2 Years', fees: '₹4,35,000/Year', eligibility: 'Graduation with 50% + CAT/MAT/XAT/CMAT/ATMA', exams: 'CAT, MAT, XAT, CMAT', intake: '120' },
      { title: 'Bachelor of Business Administration (BBA)', division: 'Undergraduate', duration: '3 Years', fees: '₹1,15,000/Year', eligibility: '10+2 with 50% + GGSIPU CET / CUET UG', exams: 'IPU CET, CUET UG', intake: '120' },
      { title: 'Bachelor of Computer Applications (BCA)', division: 'Undergraduate', duration: '3 Years', fees: '₹1,10,000/Year', eligibility: '10+2 with Mathematics/CS + GGSIPU CET', exams: 'IPU CET, CUET UG', intake: '120' }
    ]
  },
  249: {
    name: 'Indira Gandhi Delhi Technical University for Women (IGDTUW)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Public/Government',
    website: 'https://www.igdtuw.ac.in/',
    phone: '011-23900220',
    rating: 4.8,
    established: 1998,
    image: '',
    courses: [
      { title: 'B.Tech in Computer Science and Engineering (CSE / AI)', division: 'Undergraduate', duration: '4 Years', fees: '₹1,35,000/Year', eligibility: '10+2 with PCM (60%+) + JEE Main / JAC Delhi', exams: 'JEE Main, JAC Delhi', intake: '240' },
      { title: 'B.Tech in Information Technology / ECE', division: 'Undergraduate', duration: '4 Years', fees: '₹1,35,000/Year', eligibility: '10+2 with PCM + JEE Main / JAC Delhi', exams: 'JEE Main, JAC Delhi', intake: '240' },
      { title: 'Bachelor of Architecture (B.Arch)', division: 'Undergraduate', duration: '5 Years', fees: '₹1,40,000/Year', eligibility: '10+2 with PCM + JEE Main Paper 2 / JAC Delhi', exams: 'JEE Main Paper 2', intake: '40' },
      { title: 'M.Tech in Artificial Intelligence / Information Security', division: 'Postgraduate', duration: '2 Years', fees: '₹1,10,000/Year', eligibility: 'B.Tech in relevant branch + GATE', exams: 'GATE', intake: '60' }
    ]
  },
  250: {
    name: 'International Management Institute, New Delhi (IMI New Delhi)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Private',
    website: 'https://www.imi.edu/',
    phone: '011-47194100',
    rating: 4.7,
    established: 1981,
    image: 'https://media.collegedekho.com/media/img/institute/crawled_images/international-management-institute-imi-new-delhi.jpg?width=1080',
    courses: [
      { title: 'Post Graduate Diploma in Management (PGDM)', division: 'Postgraduate', duration: '2 Years', fees: '₹10,25,000/Year', eligibility: 'Graduation with 50% + CAT (90+ %ile) / GMAT', exams: 'CAT, GMAT', intake: '360' },
      { title: 'PGDM in Human Resource Management (PGDM-HRM)', division: 'Postgraduate', duration: '2 Years', fees: '₹10,25,000/Year', eligibility: 'Graduation with 50% + CAT / GMAT', exams: 'CAT, GMAT', intake: '60' },
      { title: 'PGDM in Banking and Financial Services (PGDM-B&FS)', division: 'Postgraduate', duration: '2 Years', fees: '₹10,25,000/Year', eligibility: 'Graduation with 50% + CAT / GMAT', exams: 'CAT, GMAT', intake: '60' }
    ]
  },
  252: {
    name: 'Indian Institute of Mass Communication, New Delhi (IIMC New Delhi)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Public/Government',
    website: 'https://iimc.gov.in/',
    phone: '011-26742920',
    rating: 4.8,
    established: 1965,
    image: '/images/campuses/campus_architecture_9.jpg',
    courses: [
      { title: 'PG Diploma in English Journalism', division: 'Postgraduate', duration: '1 Year', fees: '₹95,000 Total', eligibility: 'Bachelor degree in any discipline + CUET PG', exams: 'CUET PG', intake: '68' },
      { title: 'PG Diploma in Advertising and Public Relations', division: 'Postgraduate', duration: '1 Year', fees: '₹1,35,000 Total', eligibility: 'Bachelor degree in any discipline + CUET PG', exams: 'CUET PG', intake: '77' },
      { title: 'PG Diploma in Radio & TV Journalism', division: 'Postgraduate', duration: '1 Year', fees: '₹1,60,000 Total', eligibility: 'Bachelor degree in any discipline + CUET PG', exams: 'CUET PG', intake: '68' },
      { title: 'PG Diploma in Hindi Journalism', division: 'Postgraduate', duration: '1 Year', fees: '₹55,000 Total', eligibility: 'Bachelor degree in any discipline + CUET PG', exams: 'CUET PG', intake: '68' }
    ]
  },
  253: {
    name: 'Ayurvedic and Unani Tibbia College, Karol Bagh, New Delhi',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Public/Government',
    website: 'http://autc.delhi.gov.in/',
    phone: '011-25722421',
    rating: 4.6,
    established: 1921,
    image: '',
    courses: [
      { title: 'Bachelor of Ayurvedic Medicine and Surgery (BAMS)', division: 'Undergraduate', duration: '5.5 Years', fees: '₹3,500/Year', eligibility: '10+2 with 50% in PCB + NEET UG', exams: 'NEET UG', intake: '75' },
      { title: 'Bachelor of Unani Medicine and Surgery (BUMS)', division: 'Undergraduate', duration: '5.5 Years', fees: '₹3,500/Year', eligibility: '10+2 with 50% in PCB + Urdu + NEET UG', exams: 'NEET UG', intake: '75' },
      { title: 'MD / MS (Ayurveda & Unani Postgraduate)', division: 'Postgraduate', duration: '3 Years', fees: '₹12,000/Year', eligibility: 'BAMS/BUMS degree + AIAPGET', exams: 'AIAPGET', intake: '30' }
    ]
  },
  254: {
    name: 'Atal Bihari Vajpayee Institute of Medical Sciences and Dr. RML Hospital',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Public/Government',
    website: 'https://abvims-rmlh.gov.in/',
    phone: '011-23404286',
    rating: 4.8,
    established: 2008,
    image: '',
    courses: [
      { title: 'Bachelor of Medicine and Bachelor of Surgery (MBBS)', division: 'Undergraduate', duration: '5.5 Years', fees: '₹38,000/Year', eligibility: '10+2 with 50% in PCB + NEET UG (99.8+ %ile)', exams: 'NEET UG', intake: '100' },
      { title: 'MD / MS Postgraduate Medical Programs', division: 'Postgraduate', duration: '3 Years', fees: '₹26,000/Year', eligibility: 'MBBS degree + NEET PG', exams: 'NEET PG', intake: '140' },
      { title: 'DM / M.Ch Super-specialty Programs', division: 'Super-specialty', duration: '3 Years', fees: '₹30,000/Year', eligibility: 'MD/MS in relevant branch + NEET SS', exams: 'NEET SS', intake: '45' }
    ]
  },
  255: {
    name: 'Hamdard Institute of Medical Sciences And Research (HIMSR New Delhi)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Deemed',
    website: 'https://www.himsr.co.in/',
    phone: '011-29901074',
    rating: 4.6,
    established: 2012,
    image: '',
    courses: [
      { title: 'Bachelor of Medicine and Bachelor of Surgery (MBBS)', division: 'Undergraduate', duration: '5.5 Years', fees: '₹16,00,000/Year', eligibility: '10+2 with 50% in PCB + NEET UG', exams: 'NEET UG', intake: '150' },
      { title: 'MD / MS Postgraduate Medical Programs', division: 'Postgraduate', duration: '3 Years', fees: '₹25,00,000/Year', eligibility: 'MBBS Degree + NEET PG', exams: 'NEET PG', intake: '45' },
      { title: 'B.Sc Medical Laboratory Techniques / Emergency Care', division: 'Undergraduate', duration: '3 Years', fees: '₹1,20,000/Year', eligibility: '10+2 with PCB', exams: 'Merit / NEET', intake: '60' }
    ]
  },
  256: {
    name: 'Impact Paramedical and Health Institute, Delhi (IPHI Delhi)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Private',
    website: 'https://iphi.edu.in/',
    phone: '+91 9910335982',
    rating: 4.2,
    established: 2007,
    image: '/images/campuses/campus_architecture_5.jpg',
    courses: [
      { title: 'B.Sc in Medical Laboratory Technology (BMLT)', division: 'Undergraduate', duration: '3 Years', fees: '₹85,000/Year', eligibility: '10+2 with PCB/PCM with 45%', exams: 'Merit', intake: '60' },
      { title: 'B.Sc in Radiology and Imaging Technology (BRIT)', division: 'Undergraduate', duration: '3 Years', fees: '₹95,000/Year', eligibility: '10+2 with PCB', exams: 'Merit', intake: '40' },
      { title: 'Diploma in Operation Theatre Technology (DOTT)', division: 'Diploma', duration: '2 Years', fees: '₹65,000/Year', eligibility: '10+2 in Science stream', exams: 'Merit', intake: '50' }
    ]
  },
  257: {
    name: 'Institute of Clinical Research India, New Delhi (ICRI New Delhi)',
    state: 'Delhi NCR',
    city: 'New Delhi',
    type: 'Private',
    website: 'https://www.icriindia.com/',
    phone: '011-46006000',
    rating: 4.1,
    established: 2004,
    image: 'https://media.collegedekho.com/media/img/institute/crawled_images/None/ICRI_New_Delhi_Akash_Hospital-_New_Delhi_.jpg?width=640',
    courses: [
      { title: 'M.Sc in Clinical Research & Pharmacovigilance', division: 'Postgraduate', duration: '2 Years', fees: '₹1,75,000/Year', eligibility: 'B.Sc in Life Sciences/MBBS/B.Pharm with 50%', exams: 'Entrance / PI', intake: '40' },
      { title: 'MBA in Healthcare and Hospital Management', division: 'Postgraduate', duration: '2 Years', fees: '₹2,25,000/Year', eligibility: 'Graduation in any discipline with 50%', exams: 'CAT, MAT, CMAT', intake: '60' },
      { title: 'B.Sc in Clinical Research & Healthcare', division: 'Undergraduate', duration: '3 Years', fees: '₹1,10,000/Year', eligibility: '10+2 with PCB', exams: 'Merit', intake: '40' }
    ]
  },
  258: {
    name: 'DIT University, Dehradun',
    state: 'Uttarakhand',
    city: 'Dehradun',
    type: 'Private',
    website: 'https://www.dituniversity.edu.in/',
    phone: '0135-7144000',
    rating: 4.4,
    established: 1998,
    image: 'https://img.studyclap.com/img/institute/university/original/7809/dit-new-delhi-01576f4c58.jpg',
    courses: [
      { title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹2,25,000/Year', eligibility: '10+2 with PCM + JEE Main / Merit', exams: 'JEE Main', intake: '360' },
      { title: 'Bachelor of Architecture (B.Arch)', division: 'Undergraduate', duration: '5 Years', fees: '₹1,85,000/Year', eligibility: '10+2 with PCM + NATA / JEE Main Paper 2', exams: 'NATA, JEE Main Paper 2', intake: '40' },
      { title: 'Bachelor of Pharmacy (B.Pharm)', division: 'Undergraduate', duration: '4 Years', fees: '₹1,55,000/Year', eligibility: '10+2 with PCB/PCM', exams: 'Merit', intake: '100' },
      { title: 'Master of Computer Applications (MCA)', division: 'Postgraduate', duration: '2 Years', fees: '₹1,35,000/Year', eligibility: 'Graduation with BCA/B.Sc with Math', exams: 'Merit', intake: '60' }
    ]
  }
};

let updatedCount = 0;
for (let i = 0; i < siteData.colleges.length; i++) {
  const col = siteData.colleges[i];
  const cid = Number(col.id);
  if (batch68Map[cid]) {
    const update = batch68Map[cid];
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

