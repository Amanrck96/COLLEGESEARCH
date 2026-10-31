const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const SITE_DATA_PATH = path.join(BASE_DIR, 'public', 'siteData.json');

const batch23Updates = {
  2025: {
    name: "Goa Institute of Management",
    address: "Poriem, Sattari, Sanquelim, Goa - 403505",
    city: "Sanquelim",
    state: "Goa",
    type: "Private",
    ownership: "Private",
    phone: "+91-832-2366700",
    email: "admin@gim.ac.in",
    website: "https://gim.ac.in",
    image: "/images/campuses/campus_architecture_1.jpg",
    img: "/images/campuses/campus_architecture_1.jpg",
    verified: true,
    courses: [
      { name: "PGDM", title: "Post Graduate Diploma in Management", duration: "2 Years", fees: "₹19.5 Lakhs", fee: "₹19.5 Lakhs", eligibility: "Graduation with 50% + CAT/XAT/GMAT", type: "MANAGEMENT", intake: 300 },
      { name: "PGDM-BDA", title: "PGDM Big Data Analytics", duration: "2 Years", fees: "₹19.5 Lakhs", fee: "₹19.5 Lakhs", eligibility: "Graduation with 50% + CAT/XAT/GMAT", type: "MANAGEMENT", intake: 120 },
      { name: "PGDM-HCM", title: "PGDM Healthcare Management", duration: "2 Years", fees: "₹16.5 Lakhs", fee: "₹16.5 Lakhs", eligibility: "Graduation with 50% + CAT/XAT/GMAT", type: "MANAGEMENT", intake: 60 }
    ]
  },
  2041: {
    name: "National Institute of Electronics & Information Technology, Imphal",
    address: "Akampat, P.O. Box 104, Imphal East, Manipur - 795001",
    city: "Imphal",
    state: "Manipur",
    type: "Public/Government (Autonomous Central Government Institute)",
    ownership: "Government",
    phone: "+91-385-2454109",
    email: "dir-imphal@nielit.gov.in",
    website: "https://nielit.gov.in/imphal/",
    image: "/images/campuses/campus_architecture_2.jpg",
    img: "/images/campuses/campus_architecture_2.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹1.4 Lakhs", fee: "₹1.4 Lakhs", eligibility: "BCA/B.Sc Computer Science/IT or Graduation with Mathematics", type: "COMPUTER APPLICATIONS", intake: 60 }
    ]
  },
  2079: {
    name: "Tripura University",
    address: "Suryamaninagar, Agartala, West Tripura - 799022",
    city: "Agartala",
    state: "Tripura",
    type: "Public/Government (Central University)",
    ownership: "Government",
    phone: "+91-381-2379002",
    email: "admission_tu@tripurauniv.ac.in",
    website: "https://www.tripurauniv.ac.in",
    image: "/images/campuses/campus_architecture_3.jpg",
    img: "/images/campuses/campus_architecture_3.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹75,000", fee: "₹75,000", eligibility: "Graduation with 50% + CUET-PG/MAT/CAT", type: "MANAGEMENT", intake: 60 },
      { name: "B.Tech (ECE)", title: "B.Tech Electronics & Communication Engineering", duration: "4 Years", fees: "₹1.6 Lakhs", fee: "₹1.6 Lakhs", eligibility: "10+2 with Physics, Mathematics + JEE Main", type: "ENGINEERING", intake: 40 },
      { name: "B.Tech (EE)", title: "B.Tech Electrical Engineering", duration: "4 Years", fees: "₹1.6 Lakhs", fee: "₹1.6 Lakhs", eligibility: "10+2 with Physics, Mathematics + JEE Main", type: "ENGINEERING", intake: 40 }
    ]
  },
  2087: {
    name: "Techno India University, Tripura",
    address: "Maheshkhola, Anandanagar, Agartala, Tripura - 799004",
    city: "Agartala",
    state: "Tripura",
    type: "Private",
    ownership: "Private",
    phone: "+91-9230994080",
    email: "info@tiut.ac.in",
    website: "https://tiut.ac.in",
    image: "/images/campuses/campus_architecture_4.jpg",
    img: "/images/campuses/campus_architecture_4.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹1.8 Lakhs", fee: "₹1.8 Lakhs", eligibility: "BCA/B.Sc Computer Science or Graduation with Mathematics", type: "COMPUTER APPLICATIONS", intake: 60 }
    ]
  },
  2088: {
    name: "Holy Cross College, Agartala",
    address: "Jubatara, Lembucherra P.O., Mohanpur Road, Agartala, West Tripura - 799210",
    city: "Agartala",
    state: "Tripura",
    type: "Private",
    ownership: "Private",
    phone: "+91-9402315672",
    email: "principal@hccagt.ac.in",
    website: "https://hccagt.ac.in",
    image: "/images/campuses/campus_architecture_5.jpg",
    img: "/images/campuses/campus_architecture_5.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹2.2 Lakhs", fee: "₹2.2 Lakhs", eligibility: "Graduation with 50% + MAT/CAT/XAT", type: "MANAGEMENT", intake: 60 }
    ]
  },
  2095: {
    name: "Institute of Hospitality, Management and Sciences",
    address: "Balbhadrapur, B.E.L. Road, Kotdwar, Pauri Garhwal, Uttarakhand - 246149",
    city: "Kotdwar",
    state: "Uttarakhand",
    type: "Private",
    ownership: "Private",
    phone: "+91-7902000023",
    email: "info@ihms.ac.in",
    website: "https://www.ihms.ac.in",
    image: "/images/campuses/campus_architecture_6.jpg",
    img: "/images/campuses/campus_architecture_6.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹1.4 Lakhs", fee: "₹1.4 Lakhs", eligibility: "BCA / B.Sc with Mathematics with 50%", type: "COMPUTER APPLICATIONS", intake: 60 }
    ]
  },
  2108: {
    name: "Institute of Management Education & Consultancy",
    address: "New Ring Road, Bindukhera Road, Rudrapur, Udham Singh Nagar, Uttarakhand - 263153",
    city: "Rudrapur",
    state: "Uttarakhand",
    type: "Private",
    ownership: "Private",
    phone: "+91-9811749947",
    email: "info@imecrudrapur.in",
    website: "https://imecrudrapur.in",
    image: "/images/campuses/campus_architecture_7.jpg",
    img: "/images/campuses/campus_architecture_7.jpg",
    verified: true,
    courses: [
      { name: "PGDM", title: "Post Graduate Diploma in Management", duration: "2 Years", fees: "₹2.2 Lakhs", fee: "₹2.2 Lakhs", eligibility: "Graduation with 50% + MAT/CAT/CMAT", type: "MANAGEMENT", intake: 60 }
    ]
  },
  2110: {
    name: "Faculty of Management, VMSB Uttarakhand Technical University",
    address: "NH-72, Suddhowala, Post Office: Chandanwadi, Prem Nagar, Dehradun, Uttarakhand - 248007",
    city: "Dehradun",
    state: "Uttarakhand",
    type: "Public/Government (State University Department)",
    ownership: "Government",
    phone: "+91-135-2774067",
    email: "coordinatorfom@uktech.ac.in",
    website: "https://uktech.ac.in",
    image: "/images/campuses/campus_architecture_8.jpg",
    img: "/images/campuses/campus_architecture_8.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "MBA Finance, Marketing & Human Resource Management", duration: "2 Years", fees: "₹1.3 Lakhs", fee: "₹1.3 Lakhs", eligibility: "Graduation with 50% + UKSEE/CAT/MAT", type: "MANAGEMENT", intake: 60 }
    ]
  },
  2152: {
    name: "Saraswati Institute of Management & Technology",
    address: "NH-74, 12 KM Rudrapur-Gadarpur Road, Rudrapur, Udham Singh Nagar, Uttarakhand - 263152",
    city: "Rudrapur",
    state: "Uttarakhand",
    type: "Private",
    ownership: "Private",
    phone: "+91-9756163000",
    email: "info@simtrdr.in",
    website: "http://www.simtrdr.in",
    image: "/images/campuses/campus_architecture_9.jpg",
    img: "/images/campuses/campus_architecture_9.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹1.5 Lakhs", fee: "₹1.5 Lakhs", eligibility: "Graduation with 50% + MAT/CAT/UKSEE", type: "MANAGEMENT", intake: 60 }
    ]
  },
  2160: {
    name: "BRD College of Management and Sciences",
    address: "7 KM Milestone, Roorkee-Dehradun Highway, Saliyar, Roorkee, District Haridwar, Uttarakhand - 247667",
    city: "Roorkee",
    state: "Uttarakhand",
    type: "Private",
    ownership: "Private",
    phone: "+91-9897065920",
    email: "info@brdcroorkee.org",
    website: "https://brdcroorkee.in",
    image: "/images/campuses/campus_architecture_10.jpg",
    img: "/images/campuses/campus_architecture_10.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹1.4 Lakhs", fee: "₹1.4 Lakhs", eligibility: "Graduation with 50% + MAT/CAT/UKSEE", type: "MANAGEMENT", intake: 120 }
    ]
  }
};

const rawData = JSON.parse(fs.readFileSync(SITE_DATA_PATH, 'utf8'));
const isArray = Array.isArray(rawData);
const colleges = isArray ? rawData : rawData.colleges;

let updatedCount = 0;
for (const col of colleges) {
  if (batch23Updates[col.id]) {
    const upd = batch23Updates[col.id];
    Object.assign(col, upd);
    updatedCount++;
    console.log(`Updated [ID: ${col.id}] ${col.name}`);
  }
}

fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(rawData, null, 2), 'utf8');
console.log(`Applied Batch 23 updates to ${updatedCount} colleges in public/siteData.json`);
