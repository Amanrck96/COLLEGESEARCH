const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const SITE_DATA_PATH = path.join(BASE_DIR, 'public', 'siteData.json');

const batch26Updates = {
  2246: {
    name: "Gayatri Institute of Science and Technology",
    address: "At Gaunju, Berhampur, District Ganjam, Odisha - 760010",
    city: "Berhampur",
    state: "Odisha",
    type: "Private",
    ownership: "Private",
    phone: "+91-7978252229",
    email: "principalmba.gist@gmail.com",
    website: "https://www.gistmba.in",
    image: "/images/campuses/campus_architecture_1.jpg",
    img: "/images/campuses/campus_architecture_1.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹1.2 Lakhs", fee: "₹1.2 Lakhs", eligibility: "BCA/B.Sc Computer Science or Graduation with Mathematics + OJEE", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "BCA", title: "Bachelor of Computer Applications", duration: "3 Years", fees: "₹1.1 Lakhs", fee: "₹1.1 Lakhs", eligibility: "10+2 from recognized board with Mathematics", type: "COMPUTER APPLICATIONS", intake: 60 }
    ]
  },
  2249: {
    name: "Jayadeva Business School",
    address: "Budhipada, Naharkanta, Balianta, Bhubaneswar, Khordha, Odisha - 752101",
    city: "Bhubaneswar",
    state: "Odisha",
    type: "Private",
    ownership: "Private",
    phone: "+91-674-2463605",
    email: "jbsorissa@gmail.com",
    website: "https://jbsodisha.org",
    image: "/images/campuses/campus_architecture_2.jpg",
    img: "/images/campuses/campus_architecture_2.jpg",
    verified: true,
    courses: [
      { name: "PGDM", title: "Post Graduate Diploma in Management", duration: "2 Years", fees: "₹2.2 Lakhs", fee: "₹2.2 Lakhs", eligibility: "Graduation with 50% + MAT/CAT/XAT/ATMA", type: "MANAGEMENT", intake: 60 }
    ]
  },
  2250: {
    name: "Gayatri Institute of Management",
    address: "At Sudhasadangi, Mouza/PO Brahmansualo, Balianta, Bhubaneswar, Khurda, Odisha - 751002",
    city: "Bhubaneswar",
    state: "Odisha",
    type: "Private",
    ownership: "Private",
    phone: "+91-7978252229",
    email: "principalgimbbsr@gmail.com",
    website: "http://www.gimmba.in",
    image: "/images/campuses/campus_architecture_3.jpg",
    img: "/images/campuses/campus_architecture_3.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹1.4 Lakhs", fee: "₹1.4 Lakhs", eligibility: "Graduation with 50% + OJEE/MAT/CAT", type: "MANAGEMENT", intake: 120 }
    ]
  },
  2252: {
    name: "Ganesh Institute of Management Studies",
    address: "Bidya Nagar, Jagannath Prasad, Andharua, P.S. Chandaka, Bhubaneswar, Khordha, Odisha - 751003",
    city: "Bhubaneswar",
    state: "Odisha",
    type: "Private",
    ownership: "Private",
    phone: "+91-7381153684",
    email: "info@gims.in.net",
    website: "https://gims.in.net",
    image: "/images/campuses/campus_architecture_4.jpg",
    img: "/images/campuses/campus_architecture_4.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹1.3 Lakhs", fee: "₹1.3 Lakhs", eligibility: "BCA/B.Sc Computer Science or Graduation with Mathematics + OJEE", type: "COMPUTER APPLICATIONS", intake: 60 }
    ]
  },
  2254: {
    name: "Oxford College of Management",
    address: "Ramchandrapur, P.O. Bhatapatna, P.S. Balianta, Bhubaneswar, Khordha, Odisha - 752115",
    city: "Bhubaneswar",
    state: "Odisha",
    type: "Private",
    ownership: "Private",
    phone: "+91-9437170600",
    email: "ocmbbsr@gmail.com",
    website: "http://www.oxfordbbsr.com",
    image: "/images/campuses/campus_architecture_5.jpg",
    img: "/images/campuses/campus_architecture_5.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹1.4 Lakhs", fee: "₹1.4 Lakhs", eligibility: "Graduation with 50% + OJEE/MAT/CAT", type: "MANAGEMENT", intake: 60 }
    ]
  },
  2256: {
    name: "Radhakrishna Institute of Technology and Engineering (RITE)",
    address: "IDCO Plot No. 1, IDCO Industrial Estate, Barunei, Khurda, Bhubaneswar, Odisha - 752057",
    city: "Bhubaneswar",
    state: "Odisha",
    type: "Private",
    ownership: "Private",
    phone: "+91-8895199998",
    email: "info@riteindia.edu.in",
    website: "https://www.riteindia.edu.in",
    image: "/images/campuses/campus_architecture_6.jpg",
    img: "/images/campuses/campus_architecture_6.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹1.4 Lakhs", fee: "₹1.4 Lakhs", eligibility: "BCA/B.Sc Computer Science or Graduation with Mathematics + OJEE", type: "COMPUTER APPLICATIONS", intake: 60 }
    ]
  },
  2261: {
    name: "Utkal Institute of Technology and Management",
    address: "Bhatakuri, P.O. Gangapada, Bhubaneswar, Khordha, Odisha - 752054",
    city: "Bhubaneswar",
    state: "Odisha",
    type: "Private",
    ownership: "Private",
    phone: "+91-8249296350",
    email: "uitmbhubaneswar@gmail.com",
    website: "https://uitm.co.in",
    image: "/images/campuses/campus_architecture_7.jpg",
    img: "/images/campuses/campus_architecture_7.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹1.3 Lakhs", fee: "₹1.3 Lakhs", eligibility: "Graduation with 50% + OJEE/MAT/CAT", type: "MANAGEMENT", intake: 60 }
    ]
  },
  2262: {
    name: "Ashaa Kirann Business School",
    address: "Palaspur, Chhatabar, Chandaka, Bhubaneswar, Khordha, Odisha - 752054",
    city: "Bhubaneswar",
    state: "Odisha",
    type: "Private",
    ownership: "Private",
    phone: "+91-8093177718",
    email: "info@ashaakiranngroup.com",
    website: "https://ashaakiranngroup.com",
    image: "/images/campuses/campus_architecture_8.jpg",
    img: "/images/campuses/campus_architecture_8.jpg",
    verified: true,
    courses: [
      { name: "PGDM", title: "Post Graduate Diploma in Management", duration: "2 Years", fees: "₹2.2 Lakhs", fee: "₹2.2 Lakhs", eligibility: "Graduation with 50% + MAT/CAT/XAT/ATMA", type: "MANAGEMENT", intake: 60 }
    ]
  },
  2278: {
    name: "International Management Institute (IMI), Bhubaneswar",
    address: "IDCO Plot No. 1, Gothapatna, P.O. Malipada, P.S. Chandaka, Bhubaneswar, Khurda, Odisha - 751003",
    city: "Bhubaneswar",
    state: "Odisha",
    type: "Private",
    ownership: "Private",
    phone: "+91-7789022222",
    email: "imibhinfo@imibh.edu.in",
    website: "https://www.imibh.edu.in",
    image: "/images/campuses/campus_architecture_9.jpg",
    img: "/images/campuses/campus_architecture_9.jpg",
    verified: true,
    courses: [
      { name: "PGDM", title: "Post Graduate Diploma in Management", duration: "2 Years", fees: "₹13.2 Lakhs", fee: "₹13.2 Lakhs", eligibility: "Graduation with 50% + CAT/XAT/GMAT", type: "MANAGEMENT", intake: 180 },
      { name: "PGDM (Online)", title: "PGDM Online", duration: "2 Years", fees: "₹4.5 Lakhs", fee: "₹4.5 Lakhs", eligibility: "Graduation with 50%", type: "MANAGEMENT", intake: 60 }
    ]
  },
  2292: {
    name: "Sri Sri University - Faculty of Management Studies",
    address: "Sri Sri Vihar, Ward No. 3, Bidyadharpur, Godi Sahi, Cuttack, Odisha - 754006",
    city: "Cuttack",
    state: "Odisha",
    type: "Private",
    ownership: "Private",
    phone: "+91-7894424562",
    email: "info@srisriuniversity.edu.in",
    website: "https://srisriuniversity.edu.in",
    image: "/images/campuses/campus_architecture_10.jpg",
    img: "/images/campuses/campus_architecture_10.jpg",
    verified: true,
    courses: [
      { name: "MBA (General Management)", title: "MBA General Management", duration: "2 Years", fees: "₹7.5 Lakhs", fee: "₹7.5 Lakhs", eligibility: "Graduation with 50% + CAT/MAT/CMAT/OJEE", type: "MANAGEMENT", intake: 120 },
      { name: "MBA (Agribusiness)", title: "MBA Agribusiness", duration: "2 Years", fees: "₹5.5 Lakhs", fee: "₹5.5 Lakhs", eligibility: "Graduation with 50% + CAT/MAT/CMAT", type: "MANAGEMENT", intake: 60 }
    ]
  }
};

const rawData = JSON.parse(fs.readFileSync(SITE_DATA_PATH, 'utf8'));
const isArray = Array.isArray(rawData);
const colleges = isArray ? rawData : rawData.colleges;

let updatedCount = 0;
for (const col of colleges) {
  if (batch26Updates[col.id]) {
    const upd = batch26Updates[col.id];
    Object.assign(col, upd);
    updatedCount++;
    console.log(`Updated [ID: ${col.id}] ${col.name}`);
  }
}

fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(rawData, null, 2), 'utf8');
console.log(`Applied Batch 26 updates to ${updatedCount} colleges in public/siteData.json`);
