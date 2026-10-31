const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const SITE_DATA_PATH = path.join(BASE_DIR, 'public', 'siteData.json');

const batch22Updates = {
  1813: {
    name: "Govt. College for Women, Nawakadal, Srinagar",
    address: "Nawakadal, Srinagar, Jammu & Kashmir - 190002",
    city: "Srinagar",
    state: "Jammu & Kashmir",
    type: "Public/Government (Constituent College)",
    ownership: "Government",
    phone: "+91-194-2503456",
    email: "principal@gcwnk.ac.in",
    website: "https://www.gcwnk.ac.in",
    image: "/images/campuses/gcwnk_srinagar.jpg",
    img: "/images/campuses/gcwnk_srinagar.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹1.0 Lakh", fee: "₹1.0 Lakh", eligibility: "Graduation with minimum 50%", type: "MANAGEMENT", intake: 30 },
      { name: "BBA", title: "Bachelor of Business Administration", duration: "3 Years", fees: "₹75,000", fee: "₹75,000", eligibility: "10+2 from recognized board", type: "MANAGEMENT", intake: 60 },
      { name: "B.Com", title: "Bachelor of Commerce", duration: "3 Years", fees: "₹45,000", fee: "₹45,000", eligibility: "10+2 from recognized board", type: "COMMERCE", intake: 120 }
    ]
  },
  1814: {
    name: "Central University of Jammu",
    address: "Bagla (Rahya Suchani), District Samba, Jammu & Kashmir - 181143",
    city: "Samba",
    state: "Jammu & Kashmir",
    type: "Public/Government (Central University)",
    ownership: "Government",
    phone: "+91-1923-249658",
    email: "registrar@cujammu.ac.in",
    website: "https://www.cujammu.ac.in",
    image: "/images/campuses/campus_architecture_4.jpg",
    img: "/images/campuses/campus_architecture_4.jpg",
    verified: true,
    courses: [
      { name: "MBA (HRM)", title: "MBA Human Resource Management", duration: "2 Years", fees: "₹1.2 Lakhs", fee: "₹1.2 Lakhs", eligibility: "Graduation with 50% + CUET-PG/CAT", type: "MANAGEMENT", intake: 40 },
      { name: "MBA (Marketing)", title: "MBA Marketing Management", duration: "2 Years", fees: "₹1.2 Lakhs", fee: "₹1.2 Lakhs", eligibility: "Graduation with 50% + CUET-PG/CAT", type: "MANAGEMENT", intake: 40 },
      { name: "MBA (TTM)", title: "MBA Tourism and Travel Management", duration: "2 Years", fees: "₹1.2 Lakhs", fee: "₹1.2 Lakhs", eligibility: "Graduation with 50% + CUET-PG/CAT", type: "MANAGEMENT", intake: 40 }
    ]
  },
  1825: {
    name: "Tagore College of Management",
    address: "Turkadih Bypass Road, Sakri, Bilaspur, Chhattisgarh - 495003",
    city: "Bilaspur",
    state: "Chhattisgarh",
    type: "Private",
    ownership: "Private",
    phone: "+91-6232060055",
    email: "info@tcmbsp.in",
    website: "https://tcmbsp.in",
    image: "/images/campuses/campus_architecture_1.jpg",
    img: "/images/campuses/campus_architecture_1.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹1.3 Lakhs", fee: "₹1.3 Lakhs", eligibility: "Graduation with 50% + CMAT/MAT/CG Pre-MBA", type: "MANAGEMENT", intake: 120 }
    ]
  },
  1826: {
    name: "Prism School of Business & Entrepreneurship",
    address: "Mahkakhurd, Ganiyari Road, Utai, Bhilai, District Durg, Chhattisgarh - 491107",
    city: "Bhilai",
    state: "Chhattisgarh",
    type: "Private",
    ownership: "Private",
    phone: "+91-9425235203",
    email: "pgdmprism@gmail.com",
    website: "http://www.prismschool.ac.in",
    image: "/images/campuses/campus_architecture_2.jpg",
    img: "/images/campuses/campus_architecture_2.jpg",
    verified: true,
    courses: [
      { name: "PGDM", title: "Post Graduate Diploma in Management", duration: "2 Years", fees: "₹2.5 Lakhs", fee: "₹2.5 Lakhs", eligibility: "Graduation with 50% + MAT/CAT/CMAT/ATMA", type: "MANAGEMENT", intake: 180 }
    ]
  },
  1874: {
    name: "Shivalik Institute of Management Education & Research",
    address: "P.O. Pisegaon, Balod Road, Durg, Chhattisgarh - 491001",
    city: "Durg",
    state: "Chhattisgarh",
    type: "Private",
    ownership: "Private",
    phone: "+91-9826107555",
    email: "info@simer.in",
    website: "https://www.simer.in",
    image: "/images/campuses/campus_architecture_5.jpg",
    img: "/images/campuses/campus_architecture_5.jpg",
    verified: true,
    courses: [
      { name: "PGDM", title: "Post Graduate Diploma in Management", duration: "2 Years", fees: "₹3.5 Lakhs", fee: "₹3.5 Lakhs", eligibility: "Graduation with 50% + CAT/MAT/CMAT/XAT/ATMA", type: "MANAGEMENT", intake: 60 }
    ]
  },
  1877: {
    name: "RITEE Business School (RIBS)",
    address: "Chhatauna, Mandir Hasaud, Raipur, Chhattisgarh - 492101",
    city: "Raipur",
    state: "Chhattisgarh",
    type: "Private",
    ownership: "Private",
    phone: "+91-9329773028",
    email: "info@rit.edu.in",
    website: "https://ribs.education",
    image: "/images/campuses/campus_architecture_6.jpg",
    img: "/images/campuses/campus_architecture_6.jpg",
    verified: true,
    courses: [
      { name: "PGDM", title: "Post Graduate Diploma in Management", duration: "2 Years", fees: "₹3.0 Lakhs", fee: "₹3.0 Lakhs", eligibility: "Graduation with 50% + MAT/CAT/CMAT", type: "MANAGEMENT", intake: 60 }
    ]
  },
  1927: {
    name: "SSR Institute of Management & Research",
    address: "Sayli-Silvassa Road, Sayli, Silvassa - 396230, Dadra & Nagar Haveli and Daman & Diu",
    city: "Silvassa",
    state: "Dadra & Nagar Haveli and Daman & Diu",
    type: "Private",
    ownership: "Private",
    phone: "+91-9081160002",
    email: "director@ssrimr.edu.in",
    website: "https://www.ssrimr.edu.in",
    image: "/images/campuses/campus_architecture_7.jpg",
    img: "/images/campuses/campus_architecture_7.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹1.6 Lakhs", fee: "₹1.6 Lakhs", eligibility: "Graduation with 50% + MAH-CET/CMAT/CAT", type: "MANAGEMENT", intake: 60 }
    ]
  },
  1934: {
    name: "Himachal Pradesh Technical University",
    address: "Village & Post Office Daruhi, Hamirpur, Himachal Pradesh - 177001",
    city: "Hamirpur",
    state: "Himachal Pradesh",
    type: "Public/Government (State University)",
    ownership: "Government",
    phone: "+91-1972-226902",
    email: "registrarhimtu@gmail.com",
    website: "https://www.himtu.ac.in",
    image: "/images/campuses/campus_architecture_8.jpg",
    img: "/images/campuses/campus_architecture_8.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹1.2 Lakhs", fee: "₹1.2 Lakhs", eligibility: "BCA/B.Sc/B.Com with Mathematics + HPCET/NIMCET", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹1.2 Lakhs", fee: "₹1.2 Lakhs", eligibility: "Graduation with 50% + HPCET/CAT/CMAT", type: "MANAGEMENT", intake: 60 }
    ]
  },
  1961: {
    name: "Gautam Institute of Management & Technology",
    address: "Ward No. 10, Near Bus Stand, Hamirpur, Himachal Pradesh - 177001",
    city: "Hamirpur",
    state: "Himachal Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-9736391060",
    email: "ggchmr@gmail.com",
    website: "https://www.ggchmr.com",
    image: "/images/campuses/campus_architecture_9.jpg",
    img: "/images/campuses/campus_architecture_9.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹1.4 Lakhs", fee: "₹1.4 Lakhs", eligibility: "Graduation with 50% + HPCET/MAT/CMAT", type: "MANAGEMENT", intake: 120 }
    ]
  },
  1971: {
    name: "Himalayan Institute of Management",
    address: "Sadhora Road, Near Suketi Fossil Park Road, Kala-Amb, District Sirmour, Himachal Pradesh - 173030",
    city: "Kala Amb",
    state: "Himachal Pradesh",
    type: "Private",
    ownership: "Private",
    phone: "+91-9671300918",
    email: "info@hgpi.in",
    website: "https://hgpi.in",
    image: "/images/campuses/campus_architecture_10.jpg",
    img: "/images/campuses/campus_architecture_10.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹1.5 Lakhs", fee: "₹1.5 Lakhs", eligibility: "Graduation with 50% + HPCET/MAT/CAT", type: "MANAGEMENT", intake: 90 }
    ]
  }
};

const rawData = JSON.parse(fs.readFileSync(SITE_DATA_PATH, 'utf8'));
const isArray = Array.isArray(rawData);
const colleges = isArray ? rawData : rawData.colleges;

let updatedCount = 0;
for (const col of colleges) {
  if (batch22Updates[col.id]) {
    const upd = batch22Updates[col.id];
    Object.assign(col, upd);
    updatedCount++;
    console.log(`Updated [ID: ${col.id}] ${col.name}`);
  }
}

fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(rawData, null, 2), 'utf8');
console.log(`Applied Batch 22 updates to ${updatedCount} colleges in public/siteData.json`);

