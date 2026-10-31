const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..');
const SITE_DATA_PATH = path.join(BASE_DIR, 'public', 'siteData.json');

const batch40Updates = {
  3131: {
    name: "Lalit Narayan Mishra Institute of Economic Development and Social Change (LNMI)",
    address: "1, Jawaharlal Nehru Marg (Bailey Road), Patna - 800001, Bihar",
    city: "Patna",
    state: "Bihar",
    type: "Public/Government (Autonomous)",
    ownership: "Government of Bihar / Autonomous Institute",
    phone: "+91-612-2505200",
    email: "lnmipat@gmail.com",
    website: "https://lnmipat.ac.in",
    image: "/images/campuses/campus_architecture_8.jpg",
    img: "/images/campuses/campus_architecture_8.jpg",
    verified: true,
    courses: [
      { name: "MBA(HRD)", title: "Master of Business Administration (Human Resource Development)", duration: "2 Years", fees: "₹2,50,000", fee: "₹2,50,000", eligibility: "Graduation (50%) + MAT/CAT/CMAT/LNMI-MAT", type: "MANAGEMENT", intake: 60 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹2,50,000", fee: "₹2,50,000", eligibility: "Graduation (50%) + MAT/CAT/CMAT/LNMI-MAT", type: "MANAGEMENT", intake: 180 },
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹2,50,000", fee: "₹2,50,000", eligibility: "BCA/B.Sc/Graduation with Mathematics + Entrance", type: "COMPUTER APPLICATIONS", intake: 60 }
    ]
  },
  3132: {
    name: "University Department of Commerce and Business Administration, LNMU",
    address: "Prabandhan Bhawan, Kameshwaranagar, Darbhanga - 846004, Bihar",
    city: "Darbhanga",
    state: "Bihar",
    type: "Public/Government",
    ownership: "Government of Bihar / State University Department",
    phone: "+91-6272-222428",
    email: "dmba@lnmu.ac.in",
    website: "https://lnmu.ac.in",
    image: "/images/campuses/campus_architecture_7.jpg",
    img: "/images/campuses/campus_architecture_7.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration (Business Management)", duration: "2 Years", fees: "₹1,20,000", fee: "₹1,20,000", eligibility: "Graduation (50%) + CAT/MAT/LNMU-CMAT", type: "MANAGEMENT", intake: 60 },
      { name: "M.Com", title: "Master of Commerce", duration: "2 Years", fees: "₹20,000", fee: "₹20,000", eligibility: "B.Com (Hons/Gen) + LNMU Entrance", type: "COMMERCE", intake: 120 }
    ]
  },
  3137: {
    name: "Rajan Mamta Degree College (RMDC)",
    address: "At Jasoiya More, Opposite LIC Building, Bharthauli Road, Aurangabad - 824101, Bihar",
    city: "Aurangabad",
    state: "Bihar",
    type: "Private",
    ownership: "Private (Rajan Mamta Group of Institutions)",
    phone: "+91-9431224765",
    email: "rmdc.aurangabad@gmail.com",
    website: "http://rmdc.co.in",
    image: "/images/campuses/campus_architecture_6.jpg",
    img: "/images/campuses/campus_architecture_6.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹1,40,000", fee: "₹1,40,000", eligibility: "BCA/B.Sc Computer Science + Entrance", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "BCA", title: "Bachelor of Computer Applications", duration: "3 Years", fees: "₹1,20,000", fee: "₹1,20,000", eligibility: "10+2 with Mathematics", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "BBA", title: "Bachelor of Business Administration", duration: "3 Years", fees: "₹1,20,000", fee: "₹1,20,000", eligibility: "10+2 in any stream", type: "MANAGEMENT", intake: 60 }
    ]
  },
  3140: {
    name: "Lalit Narayan Mishra Institute of Economic Development and Social Change (LNMI - MBA Department)",
    address: "1, Jawaharlal Nehru Marg (Bailey Road), Patna - 800001, Bihar",
    city: "Patna",
    state: "Bihar",
    type: "Public/Government (Autonomous)",
    ownership: "Government of Bihar / Autonomous Institute",
    phone: "+91-612-2504500",
    email: "onlineadmissionquery@lnmipat.ac.in",
    website: "https://lnmipat.ac.in",
    image: "/images/campuses/campus_architecture_9.jpg",
    img: "/images/campuses/campus_architecture_9.jpg",
    verified: true,
    courses: [
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹2,50,000", fee: "₹2,50,000", eligibility: "Graduation (50%) + MAT/CAT/CMAT", type: "MANAGEMENT", intake: 180 },
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹2,50,000", fee: "₹2,50,000", eligibility: "BCA/Graduation with Mathematics", type: "COMPUTER APPLICATIONS", intake: 60 }
    ]
  },
  3143: {
    name: "ABC College of Education",
    address: "Opposite Maulana Azad College of Engineering & Technology, Neora, Patna - 801113, Bihar",
    city: "Patna",
    state: "Bihar",
    type: "Private",
    ownership: "Private (ABC Educational Trust)",
    phone: "+91-9065410720",
    email: "abccollegeofeducation@gmail.com",
    website: "https://abcce.co.in",
    image: "/images/campuses/campus_architecture_1.jpg",
    img: "/images/campuses/campus_architecture_1.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹1,30,000", fee: "₹1,30,000", eligibility: "BCA/Graduation with Mathematics + Entrance", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "B.Ed", title: "Bachelor of Education", duration: "2 Years", fees: "₹1,50,000", fee: "₹1,50,000", eligibility: "Graduation with 50% + Bihar B.Ed CET", type: "EDUCATION", intake: 100 }
    ]
  },
  3153: {
    name: "Himalaya College of Professional Education (HCPE)",
    address: "Chiksi, Paliganj, Kinjar Road, Patna - 801110, Bihar",
    city: "Patna",
    state: "Bihar",
    type: "Private",
    ownership: "Private (Himalaya Educational and Welfare Trust)",
    phone: "+91-9031015483",
    email: "hcpechiksi@gmail.com",
    website: "https://hcpedu.in",
    image: "/images/campuses/campus_architecture_2.jpg",
    img: "/images/campuses/campus_architecture_2.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹1,30,000", fee: "₹1,30,000", eligibility: "BCA/Graduation with Mathematics + Entrance", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "BCA", title: "Bachelor of Computer Applications", duration: "3 Years", fees: "₹1,20,000", fee: "₹1,20,000", eligibility: "10+2 with Mathematics", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "BBA", title: "Bachelor of Business Administration", duration: "3 Years", fees: "₹1,20,000", fee: "₹1,20,000", eligibility: "10+2 in any stream", type: "MANAGEMENT", intake: 60 }
    ]
  },
  3158: {
    name: "Magadh Institute of Technology (MIT)",
    address: "Nasriganj (Biscuit Factory More), Digha, Danapur, Patna - 801503, Bihar",
    city: "Danapur",
    state: "Bihar",
    type: "Private",
    ownership: "Private (Magadh Educational Society)",
    phone: "+91-9234004413",
    email: "magadhpolytechnic5@gmail.com",
    website: "https://www.magadhinstituteoftechnology.com",
    image: "/images/campuses/campus_architecture_3.jpg",
    img: "/images/campuses/campus_architecture_3.jpg",
    verified: true,
    courses: [
      { name: "Civil Engineering", title: "Diploma in Civil Engineering", duration: "3 Years", fees: "₹1,20,000", fee: "₹1,20,000", eligibility: "10th Standard with Science & Math + DCECE", type: "ENGINEERING", intake: 60 },
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹1,40,000", fee: "₹1,40,000", eligibility: "BCA/B.Sc Computer Science", type: "COMPUTER APPLICATIONS", intake: 60 }
    ]
  },
  3177: {
    name: "CIMAGE Center of Digital Technology and Entrepreneurship (CCDTE)",
    address: "Plot No. C10-11, Off Atal Path, Near Prabhat Khabar Mod, Patliputra Industrial Area, Patna - 800013, Bihar",
    city: "Patna",
    state: "Bihar",
    type: "Private",
    ownership: "Private (CIMAGE Group of Institutions)",
    phone: "+91-9835024444",
    email: "info@cimage.in",
    website: "https://www.cimage.in",
    image: "/images/campuses/campus_architecture_4.jpg",
    img: "/images/campuses/campus_architecture_4.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹1,70,000", fee: "₹1,70,000", eligibility: "BCA/B.Sc Computer Science + AKU/PPU Entrance", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "BCA", title: "Bachelor of Computer Applications", duration: "3 Years", fees: "₹1,80,000", fee: "₹1,80,000", eligibility: "10+2 with Mathematics", type: "COMPUTER APPLICATIONS", intake: 120 },
      { name: "BBA", title: "Bachelor of Business Administration", duration: "3 Years", fees: "₹1,80,000", fee: "₹1,80,000", eligibility: "10+2 in any stream", type: "MANAGEMENT", intake: 120 }
    ]
  },
  3284: {
    name: "Veer Kunwar Singh University (VKSU)",
    address: "Katira, Arrah, Bhojpur District, Bihar - 802301",
    city: "Arrah",
    state: "Bihar",
    type: "Public/Government",
    ownership: "Government of Bihar / State Public University",
    phone: "+91-6182-239209",
    email: "registrar@vksu.ac.in",
    website: "https://vksu.ac.in",
    image: "/images/campuses/campus_architecture_10.jpg",
    img: "/images/campuses/campus_architecture_10.jpg",
    verified: true,
    courses: [
      { name: "MCA", title: "Master of Computer Applications", duration: "2 Years", fees: "₹60,000", fee: "₹60,000", eligibility: "BCA/B.Sc Computer Science/Graduation with Mathematics + Entrance", type: "COMPUTER APPLICATIONS", intake: 60 },
      { name: "MBA", title: "Master of Business Administration", duration: "2 Years", fees: "₹70,000", fee: "₹70,000", eligibility: "Graduation (50%) + Entrance", type: "MANAGEMENT", intake: 60 },
      { name: "M.Sc Computer Science", title: "Master of Science in Computer Science", duration: "2 Years", fees: "₹40,000", fee: "₹40,000", eligibility: "B.Sc Computer Science/IT/BCA", type: "SCIENCE", intake: 40 }
    ]
  },
  3343: {
    name: "Sityog Institute of Management",
    address: "Growth Center, Jasoiya More, Aurangabad, Bihar - 824102",
    city: "Aurangabad",
    state: "Bihar",
    type: "Private",
    ownership: "Private (Sityog Educational Trust)",
    phone: "+91-9322698410",
    email: "sityog@gmail.com",
    website: "https://management.sityog.edu.in",
    image: "/images/campuses/campus_architecture_5.jpg",
    img: "/images/campuses/campus_architecture_5.jpg",
    verified: true,
    courses: [
      { name: "MBA (Finance)", title: "Master of Business Administration in Finance", duration: "2 Years", fees: "₹1,60,000", fee: "₹1,60,000", eligibility: "Graduation (50%) + CMAT/MAT/AKU Entrance", type: "MANAGEMENT", intake: 60 },
      { name: "MBA (Marketing)", title: "Master of Business Administration in Marketing", duration: "2 Years", fees: "₹1,60,000", fee: "₹1,60,000", eligibility: "Graduation (50%) + CMAT/MAT/AKU Entrance", type: "MANAGEMENT", intake: 60 },
      { name: "BBA", title: "Bachelor of Business Administration", duration: "3 Years", fees: "₹1,20,000", fee: "₹1,20,000", eligibility: "10+2 in any stream", type: "MANAGEMENT", intake: 60 }
    ]
  }
};

const rawData = fs.readFileSync(SITE_DATA_PATH, 'utf8');
const data = JSON.parse(rawData);
const colleges = Array.isArray(data.colleges) ? data.colleges : data;

let updatedCount = 0;
for (const col of colleges) {
  if (batch40Updates[col.id]) {
    const upd = batch40Updates[col.id];
    Object.assign(col, upd);
    updatedCount++;
    console.log(`Updated ID: ${col.id} - ${col.name}`);
  }
}

fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(data, null, 2), 'utf8');
console.log(`Successfully updated ${updatedCount} colleges in ${SITE_DATA_PATH}`);
