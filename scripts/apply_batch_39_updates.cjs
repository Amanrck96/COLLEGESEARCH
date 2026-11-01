const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const SITE_DATA_PATH = path.join(BASE_DIR, 'public', 'siteData.json');

const batch39Updates = {
  3074: {
    name: "Sri Harshini College of Engineering and Technology for Women (SHEC)",
    address: "NH-16, Guntur Road, Edugundlapadu Village, Maddipadu Mandal, Near Ongole, Prakasam District, Andhra Pradesh - 523262",
    city: "Maddipadu",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-7093746777",
    email: "principal@shec.ac.in",
    website: "https://shec.ac.in",
    image: "/images/campuses/campus_architecture_5.jpg",
    img: "/images/campuses/campus_architecture_5.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/B.Sc Computer Science + APICET", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 120 }
    ]
  },
  3075: {
    name: "Indira Institute of Management",
    address: "Survey No. 123/1,2, Y.V. Nagar, Madanapalle Road, Chinnamandem, Rayachoty, Annamayya District, Andhra Pradesh - 516214",
    city: "Chinnamandem",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-9063339999",
    email: "principal@iimap.in",
    website: "https://iimap.in",
    image: "/images/campuses/campus_architecture_6.jpg",
    img: "/images/campuses/campus_architecture_6.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/Graduation with Mathematics + APICET", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 120 }
    ]
  },
  3076: {
    name: "Akshay Institute of Management",
    address: "16/375-1-1, Kadapa, YSR Kadapa District, Andhra Pradesh - 516001",
    city: "Kadapa",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-9440123456",
    email: "aimkadapa@gmail.com",
    website: "http://www.aimkadapa.in",
    image: "/images/campuses/campus_architecture_7.jpg",
    img: "/images/campuses/campus_architecture_7.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 120 }
    ]
  },
  3087: {
    name: "Development Management Institute (DMI)",
    address: "Second Floor, Udyog Bhawan, East Gandhi Maidan, Patna, Bihar - 800004",
    city: "Patna",
    state: "Bihar",
    type: "Public/Government (Autonomous)",
    ownership: "Government of Bihar / Autonomous Society",
    phone: "+91-612-2324100",
    email: "admissions@dmi.ac.in",
    website: "https://www.dmi.ac.in",
    image: "/images/campuses/campus_architecture_8.jpg",
    img: "/images/campuses/campus_architecture_8.jpg",
    verified: true,
    courses: [
      { name: "PGDM", title: "Post Graduate Diploma in Development Management (PGDM)", duration: "2 Years", fees: "₹6,00,000", fee: "₹6,00,000", eligibility: "Graduation with 50% + CAT/XAT/GMAT/CMAT/MAT", type: "MANAGEMENT", intake: 60 }
    ]
  },
  3094: {
    name: "University Department of Computer Applications, Tilka Manjhi Bhagalpur University",
    address: "Computer Centre, Tilka Manjhi Bhagalpur University, Bhagalpur, Bihar - 812007",
    city: "Bhagalpur",
    state: "Bihar",
    type: "Public/Government (State University Department)",
    ownership: "Government of Bihar",
    phone: "+91-641-250040",
    email: "director_udca@tmbuniv.ac.in",
    website: "https://udcatmbu.org",
    image: "/images/campuses/campus_architecture_9.jpg",
    img: "/images/campuses/campus_architecture_9.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹95,000", fee: "₹95,000", eligibility: "BCA/B.Sc Computer Science + TMBU MCA Entrance", type: "COMPUTER APPLICATIONS", intake: 60 }
    ]
  },
  3099: {
    name: "International School of Management (ISM) Patna",
    address: "Sarari - Usri Road, Khagaul, Danapur, Patna, Bihar - 801105",
    city: "Patna",
    state: "Bihar",
    type: "Private",
    ownership: "Private",
    phone: "+91-9102678001",
    email: "info@ismpatna.ac.in",
    website: "https://www.ismpatna.ac.in",
    image: "/images/campuses/campus_architecture_10.jpg",
    img: "/images/campuses/campus_architecture_10.jpg",
    verified: true,
    courses: [
      { name: "PGDM", title: "Post Graduate Diploma in Management", duration: "2 Years", fees: "₹3,50,000", fee: "₹3,50,000", eligibility: "Graduation + CAT/MAT/CMAT", type: "MANAGEMENT", intake: 120 },
      { name: "BBA", title: "Bachelor of Business Administration", duration: "3 Years", fees: "₹2,10,000", fee: "₹2,10,000", eligibility: "10+2 with 50%", type: "MANAGEMENT", intake: 60 },
      { name: "BCA", title: "Bachelor of Computer Applications", duration: "3 Years", fees: "₹2,10,000", fee: "₹2,10,000", eligibility: "10+2 with Mathematics", type: "COMPUTER APPLICATIONS", intake: 60 }
    ]
  },
  3104: {
    name: "Institute of Business Management (IBM), Bela, Darbhanga",
    address: "Bela, Dilli More, Darbhanga, Bihar - 846004",
    city: "Darbhanga",
    state: "Bihar",
    type: "Private",
    ownership: "Trust / Affiliated",
    phone: "+91-9430897379",
    email: "admission@ibmdarbhanga.ac.in",
    website: "https://www.ibmdarbhanga.ac.in",
    image: "/images/campuses/campus_architecture_1.jpg",
    img: "/images/campuses/campus_architecture_1.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹1,20,000", fee: "₹1,20,000", eligibility: "Graduation with 50% + MAT/CMAT", type: "MANAGEMENT", intake: 120 }
    ]
  },
  3116: {
    name: "Bindeshwar Singh (B.S.) College, Danapur",
    address: "Patna Digha Road, Danapur Cantt, Patna, Bihar - 801503",
    city: "Danapur",
    state: "Bihar",
    type: "Public/Government (Constituent College)",
    ownership: "Government of Bihar / Patliputra University",
    phone: "+91-6115-227230",
    email: "bscollegednr@gmail.com",
    website: "https://bscollegedanapur.ac.in",
    image: "/images/campuses/campus_architecture_2.jpg",
    img: "/images/campuses/campus_architecture_2.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹90,000", fee: "₹90,000", eligibility: "Graduation with 50% + Entrance", type: "MANAGEMENT", intake: 60 },
      { name: "BCA", title: "Bachelor of Computer Applications", duration: "3 Years", fees: "₹65,000", fee: "₹65,000", eligibility: "10+2 with Mathematics", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "BBM", title: "Bachelor of Business Management", duration: "3 Years", fees: "₹65,000", fee: "₹65,000", eligibility: "10+2 with 45%", type: "MANAGEMENT", intake: 60 }
    ]
  },
  3117: {
    name: "Department of Business Administration, Sachchidanand Sinha College",
    address: "Sachchidanand Sinha College, Aurangabad, Bihar - 824102",
    city: "Aurangabad",
    state: "Bihar",
    type: "Public/Government (Constituent College)",
    ownership: "Government of Bihar / Magadh University",
    phone: "+91-6186-223133",
    email: "info@ssinhacollege.co.in",
    website: "https://ssinhacollege.co.in",
    image: "/images/campuses/campus_architecture_3.jpg",
    img: "/images/campuses/campus_architecture_3.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹80,000", fee: "₹80,000", eligibility: "Graduation with 50% + Entrance", type: "MANAGEMENT", intake: 60 },
      { name: "BCA", title: "Bachelor of Computer Applications", duration: "3 Years", fees: "₹60,000", fee: "₹60,000", eligibility: "10+2 with Mathematics", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "BBM", title: "Bachelor of Business Management", duration: "3 Years", fees: "₹60,000", fee: "₹60,000", eligibility: "10+2 with 45%", type: "MANAGEMENT", intake: 60 }
    ]
  },
  3129: {
    name: "College of Commerce, Arts & Science, Patna",
    address: "Opposite Rajendra Nagar Terminal, Kankarbagh Main Road, Patna, Bihar - 800020",
    city: "Patna",
    state: "Bihar",
    type: "Public/Government (Constituent College)",
    ownership: "Government of Bihar / Patliputra University",
    phone: "+91-612-2350136",
    email: "principalcocaspatna@gmail.com",
    website: "https://cocaspatna.ac.in",
    image: "/images/campuses/campus_architecture_4.jpg",
    img: "/images/campuses/campus_architecture_4.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹95,000", fee: "₹95,000", eligibility: "Graduation with 50% + Entrance", type: "MANAGEMENT", intake: 60 },
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹95,000", fee: "₹95,000", eligibility: "BCA/B.Sc Computer Science + Entrance", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "BCA", title: "Bachelor of Computer Applications", duration: "3 Years", fees: "₹65,000", fee: "₹65,000", eligibility: "10+2 with Mathematics", type: "COMPUTER APPLICATIONS", intake: 90 }
    ]
  }
};

const rawData = JSON.parse(fs.readFileSync(SITE_DATA_PATH, 'utf8'));
const colleges = Array.isArray(rawData) ? rawData : rawData.colleges;

let updatedCount = 0;
colleges.forEach(col => {
  const update = batch39Updates[col.id];
  if (update) {
    Object.assign(col, update);
    updatedCount++;
    console.log(`Updated ID ${col.id}: ${col.name}`);
  }
});

fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(rawData, null, 2), 'utf8');
console.log(`Successfully updated ${updatedCount} colleges in ${SITE_DATA_PATH}`);

