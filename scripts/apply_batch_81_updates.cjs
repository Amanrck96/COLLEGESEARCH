const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');
const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));

const batch81Map = {
  401: {
    name: 'Shanti Business School (SBS Ahmedabad)',
    state: 'Gujarat',
    city: 'Ahmedabad',
    type: 'Private',
    website: 'https://shantibschool.edu.in',
    phone: '079-66779999',
    rating: 4.3,
    established: 2010,
    image: 'https://shantibschool.edu.in/bca/assets/img/bca1.png',
    courses: [
      { title: 'Post Graduate Diploma in Management (PGDM)', division: 'Postgraduate', duration: '2 Years', fees: '₹3,75,000/Year', eligibility: 'Graduation (50%+) + CAT / MAT / XAT / CMAT / ATMA', exams: 'CAT, MAT, XAT, CMAT', intake: '180' },
      { title: 'PGDM in Marketing & Digital Media', division: 'Postgraduate', duration: '2 Years', fees: '₹3,75,000/Year', eligibility: 'Graduation (50%+) + Entrance Exam', exams: 'CAT, CMAT', intake: '60' },
      { title: 'Bachelor of Computer Applications (BCA)', division: 'Undergraduate', duration: '3 Years', fees: '₹60,000/Year', eligibility: '10+2 in any stream + Merit', exams: 'Merit', intake: '60' }
    ]
  },
  402: {
    name: 'Vivekanand Institute of Management (VIM Ahmedabad)',
    state: 'Gujarat',
    city: 'Ahmedabad',
    type: 'Private',
    website: 'http://www.vimanand.org',
    phone: '079-26861214',
    rating: 4.0,
    established: 2008,
    image: '/images/campuses/campus_architecture_7.jpg',
    courses: [
      { title: 'Master of Business Administration (MBA)', division: 'Postgraduate', duration: '2 Years', fees: '₹65,000/Year', eligibility: 'Graduation (50%+) + CMAT / ACPC Gujarat', exams: 'CMAT, ACPC', intake: '60' },
      { title: 'Integrated MBA', division: 'Undergraduate', duration: '5 Years', fees: '₹45,000/Year', eligibility: '10+2 with English + ACPC Gujarat', exams: 'ACPC', intake: '60' },
      { title: 'Post Graduate Diploma in Management (PGDM)', division: 'Postgraduate', duration: '2 Years', fees: '₹70,000/Year', eligibility: 'Graduation in any stream', exams: 'Merit', intake: '60' }
    ]
  },
  403: {
    name: 'Shree Parekh Engineering College (SPEC Mahuva, Bhavnagar)',
    state: 'Gujarat',
    city: 'Bhavnagar',
    type: 'Private',
    website: 'http://spec.edu.in',
    phone: '02844-228300',
    rating: 3.9,
    established: 2012,
    image: '',
    courses: [
      { title: 'B.Tech in Mechanical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹62,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC Gujarat', exams: 'GUJCET, ACPC', intake: '60' },
      { title: 'B.Tech in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹62,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
      { title: 'B.Tech in Civil Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹62,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
      { title: 'Diploma in Engineering (Polytechnic)', division: 'Diploma', duration: '3 Years', fees: '₹36,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' }
    ]
  },
  406: {
    name: "Shri Satsangi Saketdham 'Ram Ashram' Group of Institutions (Vadasma, Mehsana)",
    state: 'Gujarat',
    city: 'Mehsana',
    type: 'Private',
    website: 'http://www.saketdham.org',
    phone: '02762-282400',
    rating: 4.0,
    established: 2009,
    image: '',
    courses: [
      { title: 'B.Tech in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹63,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC Gujarat', exams: 'GUJCET, ACPC', intake: '60' },
      { title: 'Bachelor of Pharmacy (B.Pharm)', division: 'Undergraduate', duration: '4 Years', fees: '₹72,000/Year', eligibility: '10+2 with PCB/PCM + GUJCET', exams: 'GUJCET, ACPC', intake: '60' },
      { title: 'Master of Business Administration (MBA)', division: 'Postgraduate', duration: '2 Years', fees: '₹58,000/Year', eligibility: 'Graduation (50%+) + CMAT / ACPC', exams: 'CMAT, ACPC', intake: '60' },
      { title: 'B.Tech in Mechanical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹63,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' }
    ]
  },
  408: {
    name: 'Dr. Jivraj Mehta Institute of Technology (DJMIT Mogar, Anand)',
    state: 'Gujarat',
    city: 'Anand',
    type: 'Private',
    website: 'https://www.djmit.ac.in',
    phone: '02692-280105',
    rating: 4.1,
    established: 2010,
    image: '/images/campuses/campus_architecture_4.jpg',
    courses: [
      { title: 'B.Tech in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹72,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC Gujarat', exams: 'GUJCET, ACPC', intake: '120' },
      { title: 'B.Tech in Information Technology', division: 'Undergraduate', duration: '4 Years', fees: '₹72,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
      { title: 'B.Tech in Mechanical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹72,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
      { title: 'B.Tech in Civil Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹72,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' }
    ]
  },
  409: {
    name: 'Bhagwan Arihant Institute of Technology (BAIT BMU Surat)',
    state: 'Gujarat',
    city: 'Surat',
    type: 'Private',
    website: 'https://bmusurat.ac.in',
    phone: '0261-6770100',
    rating: 4.2,
    established: 2019,
    image: '/images/campuses/campus_architecture_5.jpg',
    courses: [
      { title: 'B.Tech in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹76,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC Gujarat', exams: 'GUJCET, ACPC', intake: '120' },
      { title: 'B.Tech in Aeronautical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹85,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
      { title: 'B.Tech in Chemical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹76,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
      { title: 'B.Tech in Information Technology', division: 'Undergraduate', duration: '4 Years', fees: '₹76,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' }
    ]
  },
  410: {
    name: 'Shri Labhubhai Trivedi Institute of Engineering and Technology (SLTIET Rajkot)',
    state: 'Gujarat',
    city: 'Rajkot',
    type: 'Private',
    website: 'https://sltiet.edu.in',
    phone: '0281-2924151',
    rating: 4.3,
    established: 2010,
    image: 'https://img.jagranjosh.com/images/2024/March/1432024/Campus view of Shri Labhubhai Trivedi Institute of Engineering and Technology Rajkot_Campus-view.jpg',
    courses: [
      { title: 'B.Tech in Computer Science and Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹71,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC Gujarat', exams: 'GUJCET, ACPC', intake: '120' },
      { title: 'B.Tech in Civil Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹71,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
      { title: 'B.Tech in Mechanical Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹71,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC', exams: 'GUJCET, ACPC', intake: '60' },
      { title: 'Diploma in Engineering (Polytechnic)', division: 'Diploma', duration: '3 Years', fees: '₹36,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' }
    ]
  },
  413: {
    name: 'S. S. Agrawal Institute of Management and Technology (SSAITM Navsari)',
    state: 'Gujarat',
    city: 'Navsari',
    type: 'Private',
    website: 'https://ssagrawal.org',
    phone: '02637-232667',
    rating: 4.2,
    established: 2010,
    image: 'https://www.collegebatch.com/static/clg-gallery/ss-agrawal-institute-of-management-technology-navsari-203346.webp',
    courses: [
      { title: 'Master of Business Administration (MBA)', division: 'Postgraduate', duration: '2 Years', fees: '₹70,000/Year', eligibility: 'Graduation (50%+) + CMAT / ACPC Gujarat', exams: 'CMAT, ACPC', intake: '120' },
      { title: 'Master of Computer Applications (MCA)', division: 'Postgraduate', duration: '2 Years', fees: '₹72,000/Year', eligibility: 'BCA / B.Sc with Math + CMAT / ACPC', exams: 'CMAT, ACPC', intake: '60' },
      { title: 'Integrated MBA', division: 'Undergraduate', duration: '5 Years', fees: '₹50,000/Year', eligibility: '10+2 with English + ACPC', exams: 'ACPC', intake: '60' }
    ]
  },
  414: {
    name: 'Noble Group of Institutions (Noble University, Junagadh)',
    state: 'Gujarat',
    city: 'Junagadh',
    type: 'Private',
    website: 'https://nobleuniversity.ac.in',
    phone: '0285-2611200',
    rating: 4.3,
    established: 2007,
    image: 'https://www.collegebatch.com/static/clg-gallery/noble-university-junagadh-354531.webp',
    courses: [
      { title: 'B.Tech in Computer Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹69,000/Year', eligibility: '10+2 with PCM + GUJCET / ACPC Gujarat', exams: 'GUJCET, ACPC', intake: '60' },
      { title: 'Bachelor of Pharmacy (B.Pharm)', division: 'Undergraduate', duration: '4 Years', fees: '₹75,000/Year', eligibility: '10+2 with PCB/PCM + GUJCET', exams: 'GUJCET, ACPC', intake: '60' },
      { title: 'Master of Business Administration (MBA)', division: 'Postgraduate', duration: '2 Years', fees: '₹62,000/Year', eligibility: 'Graduation (50%+) + CMAT / ACPC', exams: 'CMAT, ACPC', intake: '60' },
      { title: 'Diploma in Engineering (Polytechnic)', division: 'Diploma', duration: '3 Years', fees: '₹38,000/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '120' }
    ]
  },
  415: {
    name: 'Government Polytechnic Halol (Panchmahal)',
    state: 'Gujarat',
    city: 'Panchmahal',
    type: 'Public/Government',
    website: 'https://gphalol.ac.in',
    phone: '02676-224400',
    rating: 4.2,
    established: 2013,
    image: '/images/campuses/campus_architecture_2.jpg',
    courses: [
      { title: 'Diploma in Computer Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,500/Year', eligibility: '10th Standard Pass with Science & Math + ACPDC Gujarat (Tuition Free for Girls)', exams: 'ACPDC', intake: '60' },
      { title: 'Diploma in Mechanical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,500/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },
      { title: 'Diploma in Electrical Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,500/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' },
      { title: 'Diploma in Civil Engineering', division: 'Diploma', duration: '3 Years', fees: '₹1,500/Year', eligibility: '10th Standard Pass + ACPDC', exams: 'ACPDC', intake: '60' }
    ]
  }
};

let updatedCount = 0;
for (let i = 0; i < siteData.colleges.length; i++) {
  const col = siteData.colleges[i];
  const cid = Number(col.id);
  if (batch81Map[cid]) {
    const update = batch81Map[cid];
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
