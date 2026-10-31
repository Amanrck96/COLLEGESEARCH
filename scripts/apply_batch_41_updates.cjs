const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const SITE_DATA_PATH = path.join(BASE_DIR, 'public', 'siteData.json');

const batch41Updates = {
  3344: {
    name: "Buddha Institute of Hotel Management & Multiplex (BIHM Gaya)",
    address: "Industrial Area, Plot No. B-1, NH-22, Gaya-Dobhi Road, Bodh Gaya, Gaya - 824231, Bihar",
    city: "Gaya",
    state: "Bihar",
    type: "Private",
    ownership: "Private (Buddha Group of Institutions)",
    phone: "+91-9431221144",
    email: "bihmgaya@gmail.com",
    website: "http://bmhmbodhgaya.in",
    image: "/images/campuses/campus_architecture_6.jpg",
    img: "/images/campuses/campus_architecture_6.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹1,60,000", fee: "₹1,60,000", eligibility: "Graduation (50%) + CAT/MAT/AKU Entrance", type: "MANAGEMENT", intake: 60 },
      { name: "BHM", title: "Bachelor of Hotel Management", duration: "4 Years", fees: "₹2,00,000", fee: "₹2,00,000", eligibility: "10+2 in any stream", type: "HOTEL MANAGEMENT", intake: 60 }
    ]
  },
  3347: {
    name: "Maulana Mazharul Haque Arabic and Persian University (MMHAPU)",
    address: "Mithapur Farm Area, Near Bus Stand, Mithapur, Patna - 800001, Bihar",
    city: "Patna",
    state: "Bihar",
    type: "Public/Government",
    ownership: "Government of Bihar / State Public University",
    phone: "0612-2215750",
    email: "mmhapupatna@yahoo.in",
    website: "https://mmhapu.ac.in",
    image: "/images/campuses/campus_architecture_7.jpg",
    img: "/images/campuses/campus_architecture_7.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹80,000", fee: "₹80,000", eligibility: "Graduation (50%) + Entrance Exam", type: "MANAGEMENT", intake: 60 },
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "BCA/B.Sc Computer Science + Entrance Exam", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "MA", title: "Master of Arts in Arabic / Persian / Urdu", duration: "2 Years", fees: "₹10,000", fee: "₹10,000", eligibility: "BA in relevant subject", type: "ARTS", intake: 120 }
    ]
  },
  3348: {
    name: "Oxford College of Research and Management (OCRM)",
    address: "Kolhar, Macchriyawan, Fatuha, Patna - 803201, Bihar",
    city: "Patna",
    state: "Bihar",
    type: "Private",
    ownership: "Private (Oxford Group of Institutions)",
    phone: "+91-9334114400",
    email: "info@oxfordedugroup.org",
    website: "https://oxfordedugroup.org",
    image: "/images/campuses/campus_architecture_8.jpg",
    img: "/images/campuses/campus_architecture_8.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹1,40,000", fee: "₹1,40,000", eligibility: "BCA/Graduation with Mathematics + Entrance", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "BCA", title: "Bachelor of Computer Applications", duration: "3 Years", fees: "₹1,20,000", fee: "₹1,20,000", eligibility: "10+2 with Mathematics", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹1,60,000", fee: "₹1,60,000", eligibility: "Graduation (50%) + Entrance", type: "MANAGEMENT", intake: 60 }
    ]
  },
  3367: {
    name: "Maa Kanti College of Higher Education",
    address: "Village-Mahammadpur, Near Govt. Middle School, Gangapur, PS-Fatuha, Patna - 803201, Bihar",
    city: "Patna",
    state: "Bihar",
    type: "Private",
    ownership: "Private (Maa Kanti Educational Trust)",
    phone: "+91-9431004647",
    email: "mkcohe1@gmail.com",
    website: "http://mkcohe.com",
    image: "/images/campuses/campus_architecture_2.jpg",
    img: "/images/campuses/campus_architecture_2.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹1,20,000", fee: "₹1,20,000", eligibility: "BCA/B.Sc Computer Science", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "B.Ed", title: "Bachelor of Education", duration: "2 Years", fees: "₹1,50,000", fee: "₹1,50,000", eligibility: "Graduation (50%) + Bihar B.Ed CET", type: "EDUCATION", intake: 100 }
    ]
  },
  3494: {
    name: "Delhi Institute of Advanced Studies (DIAS)",
    address: "Plot No. 6, Sector-25, Rohini, New Delhi - 110085",
    city: "New Delhi",
    state: "Delhi NCR",
    type: "Private",
    ownership: "Private (Shri Laxman Dass Sachdeva Memorial Educational Society)",
    phone: "+91-11-27932742",
    email: "dias@dias.ac.in",
    website: "https://dias.ac.in",
    image: "/images/campuses/campus_architecture_9.jpg",
    img: "/images/campuses/campus_architecture_9.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹2,80,000", fee: "₹2,80,000", eligibility: "Graduation (50%) + CAT/CMAT/IPU CET", type: "MANAGEMENT", intake: 120 },
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹2,40,000", fee: "₹2,40,000", eligibility: "BCA/B.Sc IT + NIMCET/IPU CET", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "BBA", title: "Bachelor of Business Administration", duration: "3 Years", fees: "₹2,10,000", fee: "₹2,10,000", eligibility: "10+2 with English (50%) + IPU CET/CUET", type: "MANAGEMENT", intake: 60 }
    ]
  },
  3495: {
    name: "Gitarattan International Business School (GIBS Rohini)",
    address: "PSP 2A & 2B, Complex-II, Madhuban Chowk, Sector-14, Rohini, Delhi - 110085",
    city: "New Delhi",
    state: "Delhi NCR",
    type: "Private",
    ownership: "Private (Rohini Educational Society)",
    phone: "+91-11-27555607",
    email: "gibs@gitarattan.edu.in",
    website: "https://gitarattan.edu.in",
    image: "/images/campuses/campus_architecture_1.jpg",
    img: "/images/campuses/campus_architecture_1.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹3,20,000", fee: "₹3,20,000", eligibility: "Graduation (50%) + CAT/CMAT/IPU CET", type: "MANAGEMENT", intake: 180 },
      { name: "MBA (IB)", title: "Master of Business Administration in International Business", duration: "2 Years", fees: "₹3,20,000", fee: "₹3,20,000", eligibility: "Graduation (50%) + CAT/CMAT/IPU CET", type: "MANAGEMENT", intake: 60 },
      { name: "BBA", title: "Bachelor of Business Administration", duration: "3 Years", fees: "₹2,40,000", fee: "₹2,40,000", eligibility: "10+2 with English (50%) + IPU CET/CUET", type: "MANAGEMENT", intake: 180 },
      { name: "BA LLB", title: "Integrated Bachelor of Arts and Bachelor of Laws", duration: "5 Years", fees: "₹4,50,000", fee: "₹4,50,000", eligibility: "10+2 (45%) + CLAT", type: "LAW", intake: 120 }
    ]
  },
  3502: {
    name: "Entrepreneurship & Management Processes International (EMPI Business School)",
    address: "CSKM Educational Complex, Satbari, Chattarpur, New Delhi - 110074",
    city: "New Delhi",
    state: "Delhi NCR",
    type: "Private",
    ownership: "Private (EMPI Educational Trust)",
    phone: "+91-8800010971",
    email: "admissions@empi.ac.in",
    website: "https://empi.ac.in",
    image: "/images/campuses/campus_architecture_3.jpg",
    img: "/images/campuses/campus_architecture_3.jpg",
    verified: true,
    courses: [
      { name: "PGDM", title: "Post Graduate Diploma in Management (General)", duration: "2 Years", fees: "₹7,20,000", fee: "₹7,20,000", eligibility: "Graduation (50%) + CAT/MAT/XAT/CMAT", type: "MANAGEMENT", intake: 120 },
      { name: "PGDM (AdCoM)", title: "Post Graduate Diploma in Advertising Communication & Management", duration: "2 Years", fees: "₹7,20,000", fee: "₹7,20,000", eligibility: "Graduation (50%) + CAT/MAT/XAT/CMAT", type: "MANAGEMENT", intake: 60 }
    ]
  },
  3505: {
    name: "Apeejay School of Management (ASM Dwarka)",
    address: "Sector VIII, Institutional Area, Dwarka, New Delhi - 110077",
    city: "New Delhi",
    state: "Delhi NCR",
    type: "Private",
    ownership: "Private (Apeejay Education Society)",
    phone: "+91-11-25363979",
    email: "asm.dwk.del@apeejay.edu",
    website: "https://www.apeejay.edu/asm/",
    image: "/images/campuses/campus_architecture_4.jpg",
    img: "/images/campuses/campus_architecture_4.jpg",
    verified: true,
    courses: [
      { name: "PGDM", title: "Post Graduate Diploma in Management", duration: "2 Years", fees: "₹8,50,000", fee: "₹8,50,000", eligibility: "Graduation (50%) + CAT/MAT/XAT/CMAT/ATMA", type: "MANAGEMENT", intake: 180 },
      { name: "PGDM (Marketing)", title: "Post Graduate Diploma in Management (Marketing)", duration: "2 Years", fees: "₹8,50,000", fee: "₹8,50,000", eligibility: "Graduation (50%) + CAT/MAT/XAT/CMAT/ATMA", type: "MANAGEMENT", intake: 60 }
    ]
  },
  3506: {
    name: "Rukmini Devi Institute of Advanced Studies (RDIAS Rohini)",
    address: "2A & 2B, Phase-1, Madhuban Chowk, Outer Ring Road, Rohini, Delhi - 110085",
    city: "New Delhi",
    state: "Delhi NCR",
    type: "Private",
    ownership: "Private (Seth Pokhar Mal Educational Society)",
    phone: "011-27864596",
    email: "admin@rdias.ac.in",
    website: "https://rdias.ac.in",
    image: "/images/campuses/campus_architecture_5.jpg",
    img: "/images/campuses/campus_architecture_5.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹3,00,000", fee: "₹3,00,000", eligibility: "Graduation (50%) + CAT/CMAT/IPU CET", type: "MANAGEMENT", intake: 240 },
      { name: "BBA", title: "Bachelor of Business Administration", duration: "3 Years", fees: "₹2,40,000", fee: "₹2,40,000", eligibility: "10+2 with English (50%) + IPU CET/CUET", type: "MANAGEMENT", intake: 240 }
    ]
  },
  3507: {
    name: "Asia-Pacific Institute of Management (AIM Jasola)",
    address: "3 & 4, GD Birla Marg, Institutional Area, Jasola Vihar, New Delhi - 110025",
    city: "New Delhi",
    state: "Delhi NCR",
    type: "Private",
    ownership: "Private (All India Asian Education Foundation)",
    phone: "+91-11-42094800",
    email: "admissions@asiapacific.edu",
    website: "https://www.asiapacific.edu",
    image: "/images/campuses/campus_architecture_10.jpg",
    img: "/images/campuses/campus_architecture_10.jpg",
    verified: true,
    courses: [
      { name: "PGDM (General)", title: "Post Graduate Diploma in Management", duration: "2 Years", fees: "₹8,90,000", fee: "₹8,90,000", eligibility: "Graduation (50%) + CAT/MAT/XAT/CMAT", type: "MANAGEMENT", intake: 180 },
      { name: "PGDM (Healthcare)", title: "Post Graduate Diploma in Healthcare Management", duration: "2 Years", fees: "₹8,90,000", fee: "₹8,90,000", eligibility: "Graduation (50%) + CAT/MAT/XAT/CMAT", type: "MANAGEMENT", intake: 60 },
      { name: "PGDM (BDA)", title: "Post Graduate Diploma in Big Data Analytics", duration: "2 Years", fees: "₹8,90,000", fee: "₹8,90,000", eligibility: "Graduation with Mathematics/Stats + Entrance", type: "MANAGEMENT", intake: 60 }
    ]
  }
};

const rawData = fs.readFileSync(SITE_DATA_PATH, 'utf8');
const data = JSON.parse(rawData);
const colleges = Array.isArray(data.colleges) ? data.colleges : data;

let updatedCount = 0;
for (const col of colleges) {
  if (batch41Updates[col.id]) {
    const upd = batch41Updates[col.id];
    Object.assign(col, upd);
    updatedCount++;
    console.log(`Updated ID: ${col.id} - ${col.name}`);
  }
}

fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(data, null, 2), 'utf8');
console.log(`Successfully updated ${updatedCount} colleges in ${SITE_DATA_PATH}`);
