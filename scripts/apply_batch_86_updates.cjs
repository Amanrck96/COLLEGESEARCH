const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');
const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));

const batch86Map = {
  460: {
    name: 'Arambagh Government Polytechnic (AGP Arambagh, Hooghly)',
    state: 'West Bengal',
    city: 'Hooghly',
    type: 'Public/Government',
    website: 'https://arambaghpolytechnic.in',
    phone: '03211-255100',
    rating: 4.2,
    established: 2016,
    image: '',
    courses: [
      { title: 'Diploma in Computer Science and Technology', division: 'Diploma', duration: '3 Years', fees: '₹1,200/Year', eligibility: '10th Standard Pass with Science & Math + JEXPO West Bengal', exams: 'JEXPO', intake: '60' },
      { title: 'Diploma in Mechanical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,200/Year', eligibility: '10th Standard Pass + JEXPO', exams: 'JEXPO', intake: '60' },
      { title: 'Diploma in Civil Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,200/Year', eligibility: '10th Standard Pass + JEXPO', exams: 'JEXPO', intake: '60' }
    ]
  },
  461: {
    name: 'Hilli Government Polytechnic (Hilli, Dakshin Dinajpur)',
    state: 'West Bengal',
    city: 'Dakshin Dinajpur',
    type: 'Public/Government',
    website: 'https://hillipolytechnic.in',
    phone: '03522-255200',
    rating: 4.1,
    established: 2017,
    image: '',
    courses: [
      { title: 'Diploma in Electrical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,200/Year', eligibility: '10th Standard Pass with Science & Math + JEXPO', exams: 'JEXPO', intake: '60' },
      { title: 'Diploma in Mechanical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,200/Year', eligibility: '10th Standard Pass + JEXPO', exams: 'JEXPO', intake: '60' },
      { title: 'Diploma in Civil Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,200/Year', eligibility: '10th Standard Pass + JEXPO', exams: 'JEXPO', intake: '60' }
    ]
  },
  462: {
    name: 'Raipur Government Polytechnic (RGP Bankura)',
    state: 'West Bengal',
    city: 'Bankura',
    type: 'Public/Government',
    website: 'https://raipurpolytechnic.in',
    phone: '03243-261100',
    rating: 4.2,
    established: 2016,
    image: '/images/campuses/campus_architecture_4.jpg',
    courses: [
      { title: 'Diploma in Mechanical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,200/Year', eligibility: '10th Standard Pass with Science & Math + JEXPO', exams: 'JEXPO', intake: '60' },
      { title: 'Diploma in Electrical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,200/Year', eligibility: '10th Standard Pass + JEXPO', exams: 'JEXPO', intake: '60' },
      { title: 'Diploma in Civil Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,200/Year', eligibility: '10th Standard Pass + JEXPO', exams: 'JEXPO', intake: '60' }
    ]
  },
  463: {
    name: 'Adyapeath Annada Polytechnic College (AAPC Dakshineswar, Kolkata)',
    state: 'West Bengal',
    city: 'Kolkata',
    type: 'Private',
    website: 'https://aapc.org.in',
    phone: '033-25645222',
    rating: 4.3,
    established: 2016,
    image: 'https://www.vidyavision.com/CollegeUploads/Photos/2017-03-1-05-19-09_adyapeath2.jpg',
    courses: [
      { title: 'Diploma in Computer Science and Technology', division: 'Diploma', duration: '3 Years', fees: '₹18,000/Year', eligibility: '10th Standard Pass with Science & Math + JEXPO', exams: 'JEXPO', intake: '60' },
      { title: 'Diploma in Mechanical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹18,000/Year', eligibility: '10th Standard Pass + JEXPO', exams: 'JEXPO', intake: '60' },
      { title: 'Diploma in Civil Engineering', division: 'Diploma', duration: '3 Years', fees: '₹18,000/Year', eligibility: '10th Standard Pass + JEXPO', exams: 'JEXPO', intake: '60' },
      { title: 'Diploma in Electrical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹18,000/Year', eligibility: '10th Standard Pass + JEXPO', exams: 'JEXPO', intake: '60' }
    ]
  },
  464: {
    name: 'Seacom Skills University School of Engineering (SSU Bolpur, Birbhum)',
    state: 'West Bengal',
    city: 'Birbhum',
    type: 'Private',
    website: 'https://www.seacomskillsuniversity.org',
    phone: '03463-261541',
    rating: 4.1,
    established: 2014,
    image: 'https://www.collegebatch.com/static/clg-gallery/seacom-skills-university-birbhum-357170.webp',
    courses: [
      { title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹70,000/Year', eligibility: '10+2 with PCM + WBJEE / JEE Main', exams: 'WBJEE, JEE Main', intake: '60' },
      { title: 'B.Tech in Mechanical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹65,000/Year', eligibility: '10+2 with PCM + WBJEE', exams: 'WBJEE', intake: '60' },
      { title: 'B.Tech in Civil Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹65,000/Year', eligibility: '10+2 with PCM + WBJEE', exams: 'WBJEE', intake: '60' },
      { title: 'Diploma in Engineering (Polytechnic)', division: 'Diploma', duration: '3 Years', fees: '₹35,000/Year', eligibility: '10th Standard Pass + JEXPO', exams: 'JEXPO', intake: '120' }
    ]
  },
  466: {
    name: 'Ghatal Government Polytechnic (GGP Ghatal, Paschim Medinipur)',
    state: 'West Bengal',
    city: 'Paschim Medinipur',
    type: 'Public/Government',
    website: 'https://ghatalpolytechnic.in',
    phone: '03225-255100',
    rating: 4.2,
    established: 2016,
    image: '',
    courses: [
      { title: 'Diploma in Mechanical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,200/Year', eligibility: '10th Standard Pass with Science & Math + JEXPO', exams: 'JEXPO', intake: '60' },
      { title: 'Diploma in Civil Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,200/Year', eligibility: '10th Standard Pass + JEXPO', exams: 'JEXPO', intake: '60' },
      { title: 'Diploma in Electrical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,200/Year', eligibility: '10th Standard Pass + JEXPO', exams: 'JEXPO', intake: '60' }
    ]
  },
  467: {
    name: 'Mathabhanga Government Polytechnic (MGP Cooch Behar)',
    state: 'West Bengal',
    city: 'Cooch Behar',
    type: 'Public/Government',
    website: 'https://mathabhangapolytechnic.in',
    phone: '03583-255100',
    rating: 4.2,
    established: 2017,
    image: '/images/campuses/campus_architecture_9.jpg',
    courses: [
      { title: 'Diploma in Electrical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,200/Year', eligibility: '10th Standard Pass with Science & Math + JEXPO', exams: 'JEXPO', intake: '60' },
      { title: 'Diploma in Mechanical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,200/Year', eligibility: '10th Standard Pass + JEXPO', exams: 'JEXPO', intake: '60' },
      { title: 'Diploma in Civil Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,200/Year', eligibility: '10th Standard Pass + JEXPO', exams: 'JEXPO', intake: '60' }
    ]
  },
  468: {
    name: 'Kalimpong Government Polytechnic (KGP Kalimpong)',
    state: 'West Bengal',
    city: 'Kalimpong',
    type: 'Public/Government',
    website: 'https://kalimpongpolytechnic.in',
    phone: '03552-255100',
    rating: 4.3,
    established: 2017,
    image: 'https://www.dinhatacollege.ac.in/userfiles/image/darjeeling/kalimpong.webp',
    courses: [
      { title: 'Diploma in Civil Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,200/Year', eligibility: '10th Standard Pass with Science & Math + JEXPO', exams: 'JEXPO', intake: '60' },
      { title: 'Diploma in Mechanical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,200/Year', eligibility: '10th Standard Pass + JEXPO', exams: 'JEXPO', intake: '60' },
      { title: 'Diploma in Automobile Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,200/Year', eligibility: '10th Standard Pass + JEXPO', exams: 'JEXPO', intake: '60' }
    ]
  },
  469: {
    name: 'JIS University (Agarpara, Kolkata)',
    state: 'West Bengal',
    city: 'Kolkata',
    type: 'Private',
    website: 'https://www.jisuniversity.ac.in',
    phone: '033-25636677',
    rating: 4.4,
    established: 2014,
    image: 'https://www.jisuniversity.ac.in/images/campus-3.jpg',
    courses: [
      { title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹1,35,000/Year', eligibility: '10+2 with PCM + WBJEE / JEE Main / JISUEE', exams: 'WBJEE, JEE Main, JISUEE', intake: '180' },
      { title: 'Bachelor of Pharmacy (B.Pharm)', division: 'Undergraduate', duration: '4 Years', fees: '₹1,40,000/Year', eligibility: '10+2 with PCB/PCM + WBJEE', exams: 'WBJEE', intake: '100' },
      { title: 'Master of Business Administration (MBA)', division: 'Postgraduate', duration: '2 Years', fees: '₹2,50,000/Year', eligibility: 'Graduation (50%+) + CAT / MAT / JEMAT', exams: 'CAT, MAT, JEMAT', intake: '60' },
      { title: 'B.Sc. (Hons.) in Biotechnology', division: 'Undergraduate', duration: '3 Years', fees: '₹85,000/Year', eligibility: '10+2 with Science', exams: 'Merit', intake: '60' }
    ]
  },
  470: {
    name: 'Sir Rajendra Nath Mookerjee Government Polytechnic (SRNMGP Magrahat)',
    state: 'West Bengal',
    city: 'South 24 Parganas',
    type: 'Public/Government',
    website: 'https://srnmpolytechnic.in',
    phone: '03174-255100',
    rating: 4.2,
    established: 2016,
    image: 'https://www.collegebatch.com/static/clg-gallery/barasat-government-college-north-24-parganas-328490.webp',
    courses: [
      { title: 'Diploma in Computer Science and Technology', division: 'Diploma', duration: '3 Years', fees: '₹1,200/Year', eligibility: '10th Standard Pass with Science & Math + JEXPO', exams: 'JEXPO', intake: '60' },
      { title: 'Diploma in Mechanical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,200/Year', eligibility: '10th Standard Pass + JEXPO', exams: 'JEXPO', intake: '60' },
      { title: 'Diploma in Civil Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,200/Year', eligibility: '10th Standard Pass + JEXPO', exams: 'JEXPO', intake: '60' }
    ]
  }
};

let updatedCount = 0;
for (let i = 0; i < siteData.colleges.length; i++) {
  const col = siteData.colleges[i];
  const cid = Number(col.id);
  if (batch86Map[cid]) {
    const update = batch86Map[cid];
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

