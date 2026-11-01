const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');
const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));

const batch77Map = {
  351: {
    name: 'MIT School of Distance Education (MITSDE Ahmedabad Centre)',
    state: 'Gujarat',
    city: 'Ahmedabad',
    type: 'Private',
    website: 'https://www.mitsde.com',
    phone: '090280-79707',
    rating: 4.1,
    established: 2008,
    image: '/images/campuses/campus_architecture_5.jpg',
    courses: [
      { title: 'Post Graduate Diploma in Business Administration (PGDBA - ODL)', division: 'Postgraduate', duration: '2 Years', fees: '₹45,000/Year', eligibility: 'Graduation with 50% in any discipline', exams: 'Direct Admission', intake: '500' },
      { title: 'Executive PGDM in Digital Marketing & Supply Chain', division: 'Postgraduate', duration: '15 Months', fees: '₹65,000 Total', eligibility: 'Graduation + 2 Years Corporate Experience', exams: 'Work Exp + PI', intake: '200' },
      { title: 'Post Graduate Diploma in IT & Software Project Management', division: 'Postgraduate', duration: '2 Years', fees: '₹45,000/Year', eligibility: 'Graduation with Science/IT', exams: 'Direct Admission', intake: '150' }
    ]
  },
  352: {
    name: 'Symbiosis Centre for Distance Learning (SCDL Ahmedabad Centre)',
    state: 'Gujarat',
    city: 'Ahmedabad',
    type: 'Private',
    website: 'https://www.scdl.net',
    phone: '020-66211000',
    rating: 4.2,
    established: 2001,
    image: '',
    courses: [
      { title: 'Post Graduate Diploma in Business Administration (PGDBA - ODL)', division: 'Postgraduate', duration: '2 Years', fees: '₹40,000/Year', eligibility: 'Graduation with 50% in any stream', exams: 'Direct Admission', intake: 'Open' },
      { title: 'Post Graduate Diploma in Human Resource Management (PGDHRM)', division: 'Postgraduate', duration: '2 Years', fees: '₹35,000/Year', eligibility: 'Graduation in any discipline', exams: 'Direct Admission', intake: 'Open' },
      { title: 'Post Graduate Diploma in Data Science & Business Analytics', division: 'Postgraduate', duration: '2 Years', fees: '₹45,000/Year', eligibility: 'Graduation with Math/Stats/IT', exams: 'Direct Admission', intake: 'Open' }
    ]
  },
  353: {
    name: 'Dr. Babasaheb Ambedkar Open University (BAOU Ahmedabad)',
    state: 'Gujarat',
    city: 'Ahmedabad',
    type: 'Public/Government',
    website: 'https://baou.edu.in',
    phone: '079-29796225',
    rating: 4.5,
    established: 1994,
    image: '/images/campuses/campus_architecture_3.jpg',
    courses: [
      { title: 'Master of Business Administration (MBA - ODL Distance)', division: 'Postgraduate', duration: '2 Years', fees: '₹15,000/Year', eligibility: 'Graduation with 50% from recognized university', exams: 'Direct Admission', intake: 'Open' },
      { title: 'Master of Computer Applications (MCA - ODL)', division: 'Postgraduate', duration: '2 Years', fees: '₹17,000/Year', eligibility: 'BCA / B.Sc with CS / Math', exams: 'Direct Admission', intake: 'Open' },
      { title: 'Bachelor of Computer Applications (BCA - ODL)', division: 'Undergraduate', duration: '3 Years', fees: '₹12,000/Year', eligibility: '10+2 in any stream', exams: 'Direct Admission', intake: 'Open' },
      { title: 'Bachelor of Arts (BA) / Bachelor of Commerce (B.Com - ODL)', division: 'Undergraduate', duration: '3 Years', fees: '₹3,600/Year', eligibility: '10+2 or equivalent', exams: 'Direct Admission', intake: 'Open' }
    ]
  },
  354: {
    name: 'Indira Gandhi National Open University - Regional Centre Ahmedabad (IGNOU Ahmedabad)',
    state: 'Gujarat',
    city: 'Ahmedabad',
    type: 'Public/Government',
    website: 'http://rcahmedabad.ignou.ac.in',
    phone: '079-27553724',
    rating: 4.4,
    established: 1988,
    image: '',
    courses: [
      { title: 'Master of Business Administration (MBA - Distance Open Care)', division: 'Postgraduate', duration: '2 Years', fees: '₹15,500/Year', eligibility: 'Graduation with 50%', exams: 'Direct Admission', intake: 'Open' },
      { title: 'Master of Computer Applications (MCA - ODL)', division: 'Postgraduate', duration: '2 Years', fees: '₹16,000/Year', eligibility: 'BCA/Graduation with Mathematics', exams: 'Direct Admission', intake: 'Open' },
      { title: 'Bachelor of Computer Applications (BCA)', division: 'Undergraduate', duration: '3 Years', fees: '₹15,000/Year', eligibility: '10+2 in any stream', exams: 'Direct Admission', intake: 'Open' },
      { title: 'Post Graduate Diploma in Rural Development (PGDRD)', division: 'Diploma', duration: '1 Year', fees: '₹6,000 Total', eligibility: 'Bachelor Degree in any discipline', exams: 'Direct Admission', intake: 'Open' }
    ]
  },
  355: {
    name: 'School of Petroleum Management, Pandit Deendayal Energy University (SPM PDEU Gandhinagar)',
    state: 'Gujarat',
    city: 'Gandhinagar',
    type: 'Private',
    website: 'https://spm.pdeu.ac.in',
    phone: '079-23275100',
    rating: 4.6,
    established: 2006,
    image: 'https://www.collegebatch.com/static/clg-gallery/pandit-deendayal-petroleum-university-gandhinagar-229281.webp',
    courses: [
      { title: 'MBA in Energy & Infrastructure (Flagship)', division: 'Postgraduate', duration: '2 Years', fees: '₹4,80,000/Year', eligibility: 'Graduation with 50% + CAT/XAT/NMAT', exams: 'CAT, XAT, NMAT', intake: '120' },
      { title: 'MBA in General Management (Finance / Marketing / HR)', division: 'Postgraduate', duration: '2 Years', fees: '₹4,40,000/Year', eligibility: 'Graduation with 50% + CAT/XAT', exams: 'CAT, XAT', intake: '60' },
      { title: 'Executive MBA in Petroleum & Energy Management', division: 'Postgraduate', duration: '2 Years', fees: '₹2,50,000/Year', eligibility: 'Graduation + 3 Years Corporate Experience', exams: 'Work Exp + PI', intake: '30' },
      { title: 'Ph.D. in Management Studies', division: 'Doctoral', duration: '3 Years', fees: '₹85,000/Year', eligibility: 'Master Degree in Management/Allied + Test & PI', exams: 'Interview', intake: '10' }
    ]
  },
  356: {
    name: 'Institute of Rural Management Anand (IRMA Anand)',
    state: 'Gujarat',
    city: 'Anand',
    type: 'Private',
    website: 'https://www.irma.ac.in',
    phone: '02692-260391',
    rating: 4.8,
    established: 1979,
    image: '/images/campuses/campus_architecture_2.jpg',
    courses: [
      { title: 'Post Graduate Diploma in Management - Rural Management (PGDM-RM)', division: 'Postgraduate', duration: '2 Years', fees: '₹8,50,000/Year', eligibility: 'Graduation with 50% + CAT / XAT / CMAT', exams: 'CAT, XAT, CMAT', intake: '240' },
      { title: 'PGDM (Executive - Rural Management)', division: 'Postgraduate', duration: '15 Months', fees: '₹10,80,000 Total', eligibility: 'Graduation + 5 Years Corporate / Development Experience', exams: 'Work Exp + PI', intake: '60' },
      { title: 'Fellow Programme in Management - Rural Management (FPM-RM)', division: 'Doctoral', duration: '4 Years', fees: 'Subsidized Fellowship', eligibility: 'Master Degree with 55% + CAT / UGC NET', exams: 'CAT, UGC NET', intake: '10' }
    ]
  },
  357: {
    name: 'MICA Online & Executive Education (MICA Ahmedabad)',
    state: 'Gujarat',
    city: 'Ahmedabad',
    type: 'Private',
    website: 'https://www.mica.ac.in/executive-education',
    phone: '02717-308250',
    rating: 4.6,
    established: 1991,
    image: '',
    courses: [
      { title: 'Post Graduate Certificate in Digital Marketing and Communication', division: 'Certificate', duration: '1 Year', fees: '₹1,75,000 Total', eligibility: 'Graduation in any discipline', exams: 'Direct Admission', intake: '200' },
      { title: 'Executive Development Programme in Strategic Marketing', division: 'Certificate', duration: '6 Months', fees: '₹1,20,000 Total', eligibility: 'Graduation + 3 Years Experience', exams: 'Direct Admission', intake: '100' },
      { title: 'Post Graduate Certificate in Advertising and Public Relations', division: 'Certificate', duration: '11 Months', fees: '₹1,50,000 Total', eligibility: 'Graduation in any discipline', exams: 'Direct Admission', intake: '100' }
    ]
  },
  358: {
    name: 'Lukhdhirji Engineering College (LEC Morbi)',
    state: 'Gujarat',
    city: 'Morbi',
    type: 'Public/Government',
    website: 'http://www.lecmorbi.in',
    phone: '02822-240743',
    rating: 4.4,
    established: 1951,
    image: '',
    courses: [
      { title: 'B.E. in Information Technology', division: 'Undergraduate', duration: '4 Years', fees: '₹1,500/Year', eligibility: '10+2 with PCM + GUJCET / ACPC Gujarat', exams: 'GUJCET, ACPC', intake: '60' },
      { title: 'B.E. in Mechanical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,500/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '120' },
      { title: 'B.E. in Civil Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,500/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '120' },
      { title: 'Diploma in Ceramic Technology / Chemical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,000/Year', eligibility: '10th Standard Pass + ACPDC Gujarat', exams: 'ACPDC', intake: '120' }
    ]
  },
  359: {
    name: 'Navyug Group of Colleges, Morbi',
    state: 'Gujarat',
    city: 'Morbi',
    type: 'Private',
    website: 'http://navyugcollege.org',
    phone: '02822-287777',
    rating: 4.2,
    established: 2000,
    image: '',
    courses: [
      { title: 'Bachelor of Computer Applications (BCA)', division: 'Undergraduate', duration: '3 Years', fees: '₹32,000/Year', eligibility: '10+2 in any stream', exams: 'Merit', intake: '120' },
      { title: 'Bachelor of Business Administration (BBA)', division: 'Undergraduate', duration: '3 Years', fees: '₹28,000/Year', eligibility: '10+2 in any stream', exams: 'Merit', intake: '120' },
      { title: 'Bachelor of Science (B.Sc. in Chemistry / Physics / IT)', division: 'Undergraduate', duration: '3 Years', fees: '₹25,000/Year', eligibility: '10+2 with Science', exams: 'Merit', intake: '180' },
      { title: 'Bachelor of Commerce (B.Com)', division: 'Undergraduate', duration: '3 Years', fees: '₹18,000/Year', eligibility: '10+2 in Commerce/General', exams: 'Merit', intake: '240' }
    ]
  },
  360: {
    name: 'Shree Patel Vidhyamandir College of Computer Science, Keshod',
    state: 'Gujarat',
    city: 'Junagadh',
    type: 'Private',
    website: 'https://www.pkmcollege.edu.in',
    phone: '02871-236488',
    rating: 4.1,
    established: 2008,
    image: 'https://www.pkmcollege.edu.in/images/24.jpg',
    courses: [
      { title: 'Bachelor of Computer Applications (BCA)', division: 'Undergraduate', duration: '3 Years', fees: '₹30,000/Year', eligibility: '10+2 in any stream', exams: 'Merit', intake: '120' },
      { title: 'Bachelor of Science in Information Technology (B.Sc. IT)', division: 'Undergraduate', duration: '3 Years', fees: '₹28,000/Year', eligibility: '10+2 with Science/Math', exams: 'Merit', intake: '60' },
      { title: 'Post Graduate Diploma in Computer Applications (PGDCA)', division: 'Diploma', duration: '1 Year', fees: '₹22,000 Total', eligibility: 'Graduation in any stream', exams: 'Merit', intake: '60' }
    ]
  }
};

let updatedCount = 0;
for (let i = 0; i < siteData.colleges.length; i++) {
  const col = siteData.colleges[i];
  const cid = Number(col.id);
  if (batch77Map[cid]) {
    const update = batch77Map[cid];
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

