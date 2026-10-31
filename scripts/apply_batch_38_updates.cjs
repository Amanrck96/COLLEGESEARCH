const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const SITE_DATA_PATH = path.join(BASE_DIR, 'public', 'siteData.json');

const batch38Updates = {
  2794: {
    name: "Akshara Institute of Management and Technology",
    address: "199/3, Penubala Nagar, Opp. Rajiv Gruha Kalpa, Kotramangalam, Tiruchanoor Post, Tirupati, Andhra Pradesh - 517503",
    city: "Tirupati",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-9246524008",
    email: "principal@aksharaimt.com",
    website: "https://www.aksharaimt.com",
    image: "/images/campuses/campus_architecture_5.jpg",
    img: "/images/campuses/campus_architecture_5.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 120 },
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/B.Sc Computer Science + APICET", type: "COMPUTER APPLICATIONS", intake: 60 }
    ]
  },
  2799: {
    name: "B.R. Institute of Technology and Management Sciences (BRITMS)",
    address: "Survey No. 23, NH-16, Edulapalem Post, Yanamadala, Prathipadu Mandal, Guntur, Andhra Pradesh - 522019",
    city: "Guntur",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-9885428734",
    email: "info@britms.in",
    website: "http://britms.in",
    image: "/images/campuses/campus_architecture_6.jpg",
    img: "/images/campuses/campus_architecture_6.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/B.Sc Computer Science + APICET", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 120 }
    ]
  },
  2800: {
    name: "SALN College of Engineering and Management",
    address: "SF-316, Chittoor-Vellore Highway, Palluru, Chittoor District, Andhra Pradesh - 517132",
    city: "Palluru",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Trust",
    phone: "+91-8572-278234",
    email: "salncollege@gmail.com",
    website: "http://www.salncollege.org",
    image: "/images/campuses/campus_architecture_7.jpg",
    img: "/images/campuses/campus_architecture_7.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/Graduation with Mathematics + APICET", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 120 }
    ]
  },
  2802: {
    name: "Indian Institute of Foreign Trade (IIFT) Kakinada Campus",
    address: "JNTUK Premises, JNTU Campus, Kakinada, Andhra Pradesh - 533003",
    city: "Kakinada",
    state: "Andhra Pradesh",
    type: "Public/Government (Deemed University)",
    ownership: "Government of India (Ministry of Commerce and Industry)",
    phone: "+91-884-2944655",
    email: "centrehead.kkd@iift.edu",
    website: "https://www.iift.ac.in",
    image: "/images/campuses/campus_architecture_8.jpg",
    img: "/images/campuses/campus_architecture_8.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "MBA in International Business", duration: "2 Years", fees: "₹8,50,000", fee: "₹8,50,000", eligibility: "Graduation with 50% + CAT/IIFT Entrance", type: "MANAGEMENT", intake: 60 },
      { name: "IPM", title: "Integrated Programme in Management (BBA+MBA)", duration: "5 Years", fees: "₹15,00,000", fee: "₹15,00,000", eligibility: "10+2 with 60% + IPMAT", type: "MANAGEMENT", intake: 60 }
    ]
  },
  2804: {
    name: "Vyshnavi Institute of Management Sciences (VIMS)",
    address: "Soganur Road, Opp. Z.P. High School, Yemmiganur, Kurnool District, Andhra Pradesh - 518360",
    city: "Yemmiganur",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-9848104717",
    email: "info@vyshnavicolleges.com",
    website: "https://vyshnavicolleges.com",
    image: "/images/campuses/campus_architecture_9.jpg",
    img: "/images/campuses/campus_architecture_9.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 120 }
    ]
  },
  2806: {
    name: "Alwar College of Engineering (ACE)",
    address: "Sector-7, MVP Colony, Visakhapatnam, Andhra Pradesh - 530017",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-9121825433",
    email: "enquiry@ace.edu.in",
    website: "https://ace.edu.in",
    image: "/images/campuses/campus_architecture_10.jpg",
    img: "/images/campuses/campus_architecture_10.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/B.Sc Computer Science + APICET", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 120 }
    ]
  },
  2809: {
    name: "Krishnaveni Degree & PG College",
    address: "Bypass Junction, Chilakaluripet Road, Narasaraopet, Palnadu District, Andhra Pradesh - 522601",
    city: "Narasaraopet",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-8647-222966",
    email: "kvdc2005@gmail.com",
    website: "http://www.kvdcnrt.com",
    image: "/images/campuses/campus_architecture_1.jpg",
    img: "/images/campuses/campus_architecture_1.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/Graduation with Mathematics + APICET", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 120 }
    ]
  },
  2810: {
    name: "International School of Technology and Sciences (ISTS)",
    address: "NH-16, East Gonagudem, Rajanagaram / Jangareddygudem Off-Campus, Andhra Pradesh - 533294",
    city: "Rajanagaram",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-9505506111",
    email: "principal@ists.ac.in",
    website: "https://www.ists.ac.in",
    image: "/images/campuses/campus_architecture_2.jpg",
    img: "/images/campuses/campus_architecture_2.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/B.Sc Computer Science + APICET", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 120 }
    ]
  },
  2825: {
    name: "Aditya Degree College for Women, Kakinada",
    address: "Door No. 16-42-57, Road No. 5, Sambamurthy Nagar, Kakinada, Andhra Pradesh - 533003",
    city: "Kakinada",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-9704276665",
    email: "awdckkd@aditya.ac.in",
    website: "https://aditya.ac.in/degree",
    image: "/images/campuses/campus_architecture_3.jpg",
    img: "/images/campuses/campus_architecture_3.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/B.Sc Computer Science + APICET", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 120 }
    ]
  },
  3070: {
    name: "Chegireddy Linga Reddy Institute of Management (CLRIM)",
    address: "Opp. Polytechnic College, Kandulapuram, Cumbum, Prakasam District, Andhra Pradesh - 523333",
    city: "Cumbum",
    state: "Andhra Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-9959520547",
    email: "contact@clrim.in",
    website: "https://www.clritm.com",
    image: "/images/campuses/campus_architecture_4.jpg",
    img: "/images/campuses/campus_architecture_4.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation + APICET", type: "MANAGEMENT", intake: 120 },
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/Graduation with Mathematics + APICET", type: "COMPUTER APPLICATIONS", intake: 60 }
    ]
  }
};

const rawData = JSON.parse(fs.readFileSync(SITE_DATA_PATH, 'utf8'));
const colleges = Array.isArray(rawData) ? rawData : rawData.colleges;

let updatedCount = 0;
colleges.forEach(col => {
  const update = batch38Updates[col.id];
  if (update) {
    Object.assign(col, update);
    updatedCount++;
    console.log(`Updated ID ${col.id}: ${col.name}`);
  }
});

fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(rawData, null, 2), 'utf8');
console.log(`Successfully updated ${updatedCount} colleges in ${SITE_DATA_PATH}`);
