const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const SITE_DATA_PATH = path.join(BASE_DIR, 'public', 'siteData.json');

const batch34Updates = {
  2654: {
    name: "PVKK Institute of Technology (PVKKIT)",
    address: "Sanapa Road, Rudrampeta, Anantapuramu, Andhra Pradesh - 515001",
    city: "Anantapur",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-9550616861",
    email: "principal.3n@jntua.ac.in",
    website: "https://www.pvkkit.ac.in",
    image: "/images/campuses/campus_architecture_4.jpg",
    img: "/images/campuses/campus_architecture_4.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/B.Sc Computer Science + APICET", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "BCA", title: "Bachelor of Computer Applications", duration: "3 Years", fees: "₹90,000", fee: "₹90,000", eligibility: "10+2 with Mathematics", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "B.Tech", title: "Bachelor of Technology", duration: "4 Years", fees: "₹2,20,000", fee: "₹2,20,000", eligibility: "10+2 with PCM + AP EAPCET", type: "ENGINEERING", intake: 420 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 120 }
    ]
  },
  2658: {
    name: "Gonna Institute of Information Technology & Sciences (GIITS)",
    address: "Ward No. 56, Gonnavanipalem, Aganampudi, Visakhapatnam, Andhra Pradesh - 530053",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-9912283335",
    email: "principal@giits.in",
    website: "http://www.giits.in",
    image: "/images/campuses/campus_architecture_5.jpg",
    img: "/images/campuses/campus_architecture_5.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/Graduation with Mathematics + APICET", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 120 },
      { name: "B.Tech", title: "Bachelor of Technology", duration: "4 Years", fees: "₹2,00,000", fee: "₹2,00,000", eligibility: "10+2 with PCM + AP EAPCET", type: "ENGINEERING", intake: 300 }
    ]
  },
  2659: {
    name: "Veeravalli Vidya Sundar P.G. College",
    address: "Burugupudi, Korukonda Mandal, Rajahmundry, East Godavari District, Andhra Pradesh - 533292",
    city: "Rajahmundry",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-883-2409200",
    email: "vvspgcollege@rediffmail.com",
    website: "http://www.vvspgl.org",
    image: "/images/campuses/campus_architecture_6.jpg",
    img: "/images/campuses/campus_architecture_6.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 120 },
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/B.Sc Computer Science + APICET", type: "COMPUTER APPLICATIONS", intake: 60 }
    ]
  },
  2661: {
    name: "School of Management Studies - M.R.P.G. College",
    address: "Polytechnic College Road, Phool Bagh Colony, Vizianagaram, Andhra Pradesh - 535002",
    city: "Vizianagaram",
    state: "Andhra Pradesh",
    type: "Autonomous Government-Aided",
    ownership: "Trust / Aided",
    phone: "+91-8922-226601",
    email: "principalsmsmrc@gmail.com",
    website: "https://smsmrpg.com",
    image: "/images/campuses/campus_architecture_7.jpg",
    img: "/images/campuses/campus_architecture_7.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹65,000", fee: "₹65,000", eligibility: "Graduation with 50% + APICET", type: "MANAGEMENT", intake: 120 },
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹65,000", fee: "₹65,000", eligibility: "BCA/B.Sc Computer Science + APICET", type: "COMPUTER APPLICATIONS", intake: 60 }
    ]
  },
  2662: {
    name: "Priyadarshini P.G. College",
    address: "5th Mile, Pulladigunta Village, Kornepadu Post, Vatticherukuru Mandal, Guntur, Andhra Pradesh - 522017",
    city: "Guntur",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-9652010001",
    email: "priyadarshini.pgc@gmail.com",
    website: "https://www.priyadarshinigroup.in",
    image: "/images/campuses/campus_architecture_8.jpg",
    img: "/images/campuses/campus_architecture_8.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 120 },
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/Graduation with Mathematics + APICET", type: "COMPUTER APPLICATIONS", intake: 60 }
    ]
  },
  2663: {
    name: "The Hindu College (PG Courses) Department of Management Studies",
    address: "Opp. LIC Divisional Office, Batchupet, Kennedy Road, Machilipatnam, Krishna District, Andhra Pradesh - 521001",
    city: "Machilipatnam",
    state: "Andhra Pradesh",
    type: "Government-Aided",
    ownership: "Trust / Aided",
    phone: "+91-8672-222108",
    email: "hcmbamtm@yahoo.com",
    website: "http://www.hcmtm.ac.in",
    image: "/images/campuses/campus_architecture_9.jpg",
    img: "/images/campuses/campus_architecture_9.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹54,000", fee: "₹54,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 120 },
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹54,000", fee: "₹54,000", eligibility: "BCA/Graduation with Mathematics + APICET", type: "COMPUTER APPLICATIONS", intake: 60 }
    ]
  },
  2667: {
    name: "K. Chandrakala P.G. College",
    address: "Burripalem Road, Nelapadu Post, Tenali, Guntur District, Andhra Pradesh - 522201",
    city: "Tenali",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-9440837944",
    email: "kcpgcollegetenali@gmail.com",
    website: "https://www.psres.org.in/kcpgcollege.org/",
    image: "/images/campuses/campus_architecture_10.jpg",
    img: "/images/campuses/campus_architecture_10.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 120 },
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/Graduation with Mathematics + APICET", type: "COMPUTER APPLICATIONS", intake: 60 }
    ]
  },
  2671: {
    name: "Dadi Institute of Engineering & Technology (DIET)",
    address: "National Highway-16, Anakapalle, Visakhapatnam District, Andhra Pradesh - 531002",
    city: "Anakapalle",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-9963981111",
    email: "info@diet.edu.in",
    website: "https://www.diet.edu.in",
    image: "/images/campuses/campus_architecture_1.jpg",
    img: "/images/campuses/campus_architecture_1.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/B.Sc Computer Science + APICET", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 120 },
      { name: "B.Tech", title: "Bachelor of Technology", duration: "4 Years", fees: "₹2,00,000", fee: "₹2,00,000", eligibility: "10+2 with PCM + AP EAPCET", type: "ENGINEERING", intake: 480 }
    ]
  },
  2681: {
    name: "Sreerama Institute of Management (SRIM)",
    address: "Pydiparru, Near RTC Complex, Tanuku, West Godavari District, Andhra Pradesh - 534218",
    city: "Tanuku",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-8819-223740",
    email: "principal.srim@gmail.com",
    website: "https://srim.asrgroup.co.in",
    image: "/images/campuses/campus_architecture_2.jpg",
    img: "/images/campuses/campus_architecture_2.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 120 }
    ]
  },
  2682: {
    name: "Pydah College of Engineering",
    address: "Kakinada-Yanam Road, Patavala, Tallarevu Mandal, Kakinada District, Andhra Pradesh - 533461",
    city: "Kakinada",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-7382456539",
    email: "admissions@pydah.edu.in",
    website: "https://www.pydahpce.edu.in",
    image: "/images/campuses/campus_architecture_3.jpg",
    img: "/images/campuses/campus_architecture_3.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/B.Sc Computer Science + APICET", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 120 },
      { name: "B.Tech", title: "Bachelor of Technology", duration: "4 Years", fees: "₹2,00,000", fee: "₹2,00,000", eligibility: "10+2 with PCM + AP EAPCET", type: "ENGINEERING", intake: 420 }
    ]
  }
};

const rawData = JSON.parse(fs.readFileSync(SITE_DATA_PATH, 'utf8'));
const colleges = Array.isArray(rawData) ? rawData : rawData.colleges;

let updatedCount = 0;
colleges.forEach(col => {
  const update = batch34Updates[col.id];
  if (update) {
    Object.assign(col, update);
    updatedCount++;
    console.log(`Updated ID ${col.id}: ${col.name}`);
  }
});

fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(rawData, null, 2), 'utf8');
console.log(`Successfully updated ${updatedCount} colleges in ${SITE_DATA_PATH}`);
