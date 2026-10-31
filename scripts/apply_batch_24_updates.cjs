const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const SITE_DATA_PATH = path.join(BASE_DIR, 'public', 'siteData.json');

const batch24Updates = {
  2162: {
    name: "Gurukula Kangri (Deemed to be University)",
    address: "P.O. Gurukula Kangri, Kankhal, Haridwar, Uttarakhand - 249404",
    city: "Haridwar",
    state: "Uttarakhand",
    type: "Public/Government (Deemed to be University)",
    ownership: "Government",
    phone: "+91-7300761138",
    email: "registrar@gkv.ac.in",
    website: "https://www.gkv.ac.in",
    image: "/images/campuses/campus_architecture_1.jpg",
    img: "/images/campuses/campus_architecture_1.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹1.4 Lakhs", fee: "₹1.4 Lakhs", eligibility: "BCA/B.Sc Computer Science or Graduation with Mathematics + CUET-PG", type: "COMPUTER APPLICATIONS", intake: 60 }
    ]
  },
  2174: {
    name: "Bishamber Sahai Management Institute",
    address: "6th KM Stone, Roorkee-Saharanpur Road, Saliyar, Roorkee, District Haridwar, Uttarakhand - 247667",
    city: "Roorkee",
    state: "Uttarakhand",
    type: "Private",
    ownership: "Private",
    phone: "+91-9837127404",
    email: "sourabh_bsi07@yahoo.com",
    website: "https://bsigrouprke.in",
    image: "/images/campuses/campus_architecture_2.jpg",
    img: "/images/campuses/campus_architecture_2.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹1.5 Lakhs", fee: "₹1.5 Lakhs", eligibility: "Graduation with 50% + MAT/CAT/UKSEE", type: "MANAGEMENT", intake: 120 }
    ]
  },
  2187: {
    name: "Department of Management Studies, Kumaun University",
    address: "Sir J. C. Bose Technical Campus, Block Road, Mallital, Bhimtal, District Nainital, Uttarakhand - 263136",
    city: "Bhimtal",
    state: "Uttarakhand",
    type: "Public/Government (State University Department)",
    ownership: "Government",
    phone: "+91-5942-247136",
    email: "hod.dmsbhimtal@gmail.com",
    website: "https://dmsbhimtal.com",
    image: "/images/campuses/campus_architecture_3.jpg",
    img: "/images/campuses/campus_architecture_3.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹1.1 Lakhs", fee: "₹1.1 Lakhs", eligibility: "Graduation with 50% + MAT/CAT/CMAT", type: "MANAGEMENT", intake: 60 }
    ]
  },
  2191: {
    name: "College of Agribusiness Management, GBPUAT Pantnagar",
    address: "G.B. Pant University of Agriculture & Technology, Pantnagar, Udham Singh Nagar, Uttarakhand - 263145",
    city: "Pantnagar",
    state: "Uttarakhand",
    type: "Public/Government (Constituent College of State Agricultural University)",
    ownership: "Government",
    phone: "+91-5944-233884",
    email: "cabmoffice@gmail.com",
    website: "https://www.cabm.ac.in",
    image: "/images/campuses/campus_architecture_4.jpg",
    img: "/images/campuses/campus_architecture_4.jpg",
    verified: true,
    courses: [
      { name: "MBA (Agribusiness)", title: "MBA Agribusiness", duration: "2 Years", fees: "₹3.8 Lakhs", fee: "₹3.8 Lakhs", eligibility: "Graduation in Agriculture or allied sciences with 50% + CAT/CMAT", type: "MANAGEMENT", intake: 45 },
      { name: "MBA", title: "MBA General", duration: "2 Years", fees: "₹3.8 Lakhs", fee: "₹3.8 Lakhs", eligibility: "Graduation in any discipline with 50% + CAT/CMAT", type: "MANAGEMENT", intake: 30 }
    ]
  },
  2197: {
    name: "Institute of Cooperative Management, Dehradun",
    address: "6, Old Mussoorie Road, Rajpur, Dehradun, Uttarakhand - 248009",
    city: "Dehradun",
    state: "Uttarakhand",
    type: "Public/Government (Autonomous Central Government Institute)",
    ownership: "Government",
    phone: "+91-135-2734272",
    email: "icmddn017@gmail.com",
    website: "https://icmdehradun.com",
    image: "/images/campuses/campus_architecture_5.jpg",
    img: "/images/campuses/campus_architecture_5.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹1.5 Lakhs", fee: "₹1.5 Lakhs", eligibility: "Graduation with 50% + MAT/CAT/UKSEE", type: "MANAGEMENT", intake: 60 }
    ]
  },
  2209: {
    name: "Nalanda Institute of Technology",
    address: "Buddhist Villa, Khandagiri-Chandaka Road, Chandaka, Bhubaneswar, Odisha - 754005",
    city: "Bhubaneswar",
    state: "Odisha",
    type: "Private",
    ownership: "Private",
    phone: "+91-8249791801",
    email: "info@thenalanda.com",
    website: "https://www.thenalanda.com",
    image: "/images/campuses/campus_architecture_6.jpg",
    img: "/images/campuses/campus_architecture_6.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹1.3 Lakhs", fee: "₹1.3 Lakhs", eligibility: "BCA/B.Sc Computer Science or Graduation with Mathematics + OJEE", type: "COMPUTER APPLICATIONS", intake: 60 }
    ]
  },
  2215: {
    name: "Bharat Institute of Technical Studies",
    address: "Dahapada, Fuladi, Balasore, Odisha - 756003",
    city: "Balasore",
    state: "Odisha",
    type: "Private",
    ownership: "Private",
    phone: "+91-9437004344",
    email: "principal@bharatinstitute.org",
    website: "http://bharatinstitute.org",
    image: "/images/campuses/campus_architecture_7.jpg",
    img: "/images/campuses/campus_architecture_7.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹1.2 Lakhs", fee: "₹1.2 Lakhs", eligibility: "Graduation with Mathematics at 10+2 or Degree level + OJEE", type: "COMPUTER APPLICATIONS", intake: 60 }
    ]
  },
  2216: {
    name: "Zenith School of Management",
    address: "Pitapalli, NH-16, Near Jatani, Khordha / Bhubaneswar, Odisha - 752057",
    city: "Bhubaneswar",
    state: "Odisha",
    type: "Private",
    ownership: "Private",
    phone: "+91-8908018083",
    email: "zsomodisha@gmail.com",
    website: "http://zenithodisha.com",
    image: "/images/campuses/campus_architecture_8.jpg",
    img: "/images/campuses/campus_architecture_8.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹1.4 Lakhs", fee: "₹1.4 Lakhs", eligibility: "Graduation with 50% + OJEE/MAT/CAT", type: "MANAGEMENT", intake: 120 }
    ]
  },
  2219: {
    name: "Capital Institute of Management and Science",
    address: "1309, Padhansahi Square, Panchagaon, Jatni-Sundarpada Road, Bhubaneswar, Khordha, Odisha - 752050",
    city: "Bhubaneswar",
    state: "Odisha",
    type: "Private",
    ownership: "Private",
    phone: "+91-9437495728",
    email: "info@cimsbbsr.org",
    website: "https://cimsbbsr.org",
    image: "/images/campuses/campus_architecture_9.jpg",
    img: "/images/campuses/campus_architecture_9.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹1.6 Lakhs", fee: "₹1.6 Lakhs", eligibility: "Graduation with 50% + OJEE/MAT/CAT/CMAT", type: "MANAGEMENT", intake: 120 }
    ]
  },
  2220: {
    name: "Regional College of Management (RCM)",
    address: "Plot No. GD 2/12 & 13, Chakadola Vihar, Chandrasekharpur, Bhubaneswar, Odisha - 751023",
    city: "Bhubaneswar",
    state: "Odisha",
    type: "Private",
    ownership: "Private",
    phone: "+91-9090080801",
    email: "info@rcm.ac.in",
    website: "https://rcm.ac.in",
    image: "/images/campuses/campus_architecture_10.jpg",
    img: "/images/campuses/campus_architecture_10.jpg",
    verified: true,
    courses: [
      { name: "PGDM", title: "Post Graduate Diploma in Management", duration: "2 Years", fees: "₹4.5 Lakhs", fee: "₹4.5 Lakhs", eligibility: "Graduation with 50% + MAT/CAT/XAT/CMAT/OJEE", type: "MANAGEMENT", intake: 120 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹3.8 Lakhs", fee: "₹3.8 Lakhs", eligibility: "Graduation with 50% + OJEE/MAT/CAT", type: "MANAGEMENT", intake: 180 }
    ]
  }
};

const rawData = JSON.parse(fs.readFileSync(SITE_DATA_PATH, 'utf8'));
const isArray = Array.isArray(rawData);
const colleges = isArray ? rawData : rawData.colleges;

let updatedCount = 0;
for (const col of colleges) {
  if (batch24Updates[col.id]) {
    const upd = batch24Updates[col.id];
    Object.assign(col, upd);
    updatedCount++;
    console.log(`Updated [ID: ${col.id}] ${col.name}`);
  }
}

fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(rawData, null, 2), 'utf8');
console.log(`Applied Batch 24 updates to ${updatedCount} colleges in public/siteData.json`);

