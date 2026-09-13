import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_DATA_FILE = path.join(__dirname, '../public/siteData.json');

const KARNATAKA_MEDICAL_COLLEGES = [
  {
    name: "Kasturba Medical College, Manipal (KMC Manipal)",
    shortName: "KMC Manipal",
    location: "Manipal",
    state: "Karnataka",
    country: "India",
    address: "Tiger Circle, Madhav Nagar, Manipal, Karnataka 576104",
    phone: "0820-2922440",
    email: "admissions@manipal.edu",
    website: "https://manipal.edu/kmc-manipal.html",
    rating: 4.8,
    reviews: 420,
    type: "Deemed",
    ownership: "Deemed",
    establishmentYear: "1953",
    approval: "NMC, MCI, UGC",
    accreditation: "NAAC A++",
    ranking: 10,
    about: "Kasturba Medical College (KMC), Manipal was established in 1953 as the first self-financing medical college in the private sector in India. It is ranked among the top 10 medical colleges in India by NIRF and is recognized by the National Medical Commission (NMC).",
    map_url: "https://www.google.com/maps/search/?api=1&query=Kasturba+Medical+College+Manipal",
    fees: "₹17.8 Lakhs/Year",
    exams: "NEET UG, NEET PG",
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
    logo: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&q=80&w=200",
    gallery: [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=800"
    ],
    affiliation: "Manipal Academy of Higher Education (MAHE)",
    courses: [
      { title: "Bachelor of Medicine and Bachelor of Surgery (MBBS)", division: "Undergraduate", duration: "5.5 Years", fees: "₹17.8 Lakhs/Year", eligibility: "10+2 with 50% in PCB + NEET UG", exams: "NEET UG", intake: "250" },
      { title: "Doctor of Medicine (MD) in General Medicine", division: "Postgraduate", duration: "3 Years", fees: "₹24.0 Lakhs/Year", eligibility: "MBBS Degree + NEET PG", exams: "NEET PG", intake: "30" },
      { title: "Master of Surgery (MS) in Orthopaedics", division: "Postgraduate", duration: "3 Years", fees: "₹26.0 Lakhs/Year", eligibility: "MBBS Degree + NEET PG", exams: "NEET PG", intake: "20" }
    ],
    highestPackage: "₹35 LPA",
    averagePackage: "₹16.5 LPA",
    placements: "98%",
    topRecruiters: ["Manipal Hospitals", "Apollo Hospitals", "Fortis Healthcare", "Max Healthcare", "NHS UK"],
    facilities: ["Super Specialty Hospital", "Central Anatomical Museum", "Simulation Lab", "Central Library", "Separate AC Hostels", "Sports Complex"],
    hostelInfo: "World-class residential hostels with Wi-Fi, laundry, air conditioning, and multiple multi-cuisine dining options.",
    scholarships: "Kalam-Pai Merit Scholarships, Free-ship and Merit-cum-Means scholarships available for top NEET rank holders.",
    admissionProcess: "Centralized online counselling conducted by MCC (Medical Counselling Committee) based on NEET UG All India Rank."
  },
  {
    name: "St. John's Medical College, Bangalore",
    shortName: "St. John's Medical",
    location: "Bengaluru",
    state: "Karnataka",
    country: "India",
    address: "Sarjapur Road, John Nagar, Koramangala, Bengaluru, Karnataka 560034",
    phone: "080-49466000",
    email: "admissions@stjohns.in",
    website: "https://www.stjohns.in",
    rating: 4.8,
    reviews: 380,
    type: "Private",
    ownership: "Private (Trust)",
    establishmentYear: "1963",
    approval: "NMC, MCI, UGC",
    accreditation: "NAAC A++",
    ranking: 13,
    about: "St. John's Medical College is a premier medical institution established in 1963 by the Catholic Bishops' Conference of India. Located in the heart of Bengaluru, it is known for ethical clinical practice, top-tier medical research, and compassionate patient care.",
    map_url: "https://www.google.com/maps/search/?api=1&query=St.+John's+Medical+College+Bangalore",
    fees: "₹7.5 Lakhs/Year",
    exams: "NEET UG, NEET PG",
    img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=800",
    logo: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&q=80&w=200",
    gallery: [
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
    ],
    affiliation: "Rajiv Gandhi University of Health Sciences (RGUHS)",
    courses: [
      { title: "Bachelor of Medicine and Bachelor of Surgery (MBBS)", division: "Undergraduate", duration: "5.5 Years", fees: "₹7.5 Lakhs/Year", eligibility: "10+2 with 50% in PCB + NEET UG", exams: "NEET UG", intake: "150" },
      { title: "Doctor of Medicine (MD) in Pediatrics", division: "Postgraduate", duration: "3 Years", fees: "₹12.0 Lakhs/Year", eligibility: "MBBS + NEET PG", exams: "NEET PG", intake: "15" }
    ],
    highestPackage: "₹30 LPA",
    averagePackage: "₹15.0 LPA",
    placements: "97%",
    topRecruiters: ["St. John's Hospital", "Narayana Health", "Manipal Hospitals", "Aster CMI"],
    facilities: ["1350-bed Super Speciality Hospital", "Advanced Skills Lab", "Digital Medical Library", "Hostel", "Cafeteria"],
    hostelInfo: "Hostel accommodation provided for all medical students with 24/7 power backup and security.",
    scholarships: "CBCI Cardinal Gracias Scholarships for meritorious and underprivileged medical aspirants.",
    admissionProcess: "Admissions strictly through KEA (Karnataka Examinations Authority) counselling based on NEET UG score."
  },
  {
    name: "Bangalore Medical College and Research Institute (BMCRI)",
    shortName: "BMCRI Bangalore",
    location: "Bengaluru",
    state: "Karnataka",
    country: "India",
    address: "Fort, Krishna Rajendra Road, Bengaluru, Karnataka 560002",
    phone: "080-26701529",
    email: "director_bmcri@yahoo.com",
    website: "https://bmcri.karnataka.gov.in",
    rating: 4.9,
    reviews: 450,
    type: "Public/Government",
    ownership: "Government of Karnataka",
    establishmentYear: "1955",
    approval: "NMC, MCI",
    accreditation: "NAAC A++",
    ranking: 14,
    about: "Bangalore Medical College and Research Institute (BMCRI) is an autonomous premier government medical college in Bengaluru. Running multiple teaching hospitals including Victoria Hospital, Bowring & Lady Curzon Hospital, and Vani Vilas Women and Children Hospital with over 3,000 beds.",
    map_url: "https://www.google.com/maps/search/?api=1&query=Bangalore+Medical+College+and+Research+Institute",
    fees: "₹65,000/Year",
    exams: "NEET UG, NEET PG",
    img: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=800",
    logo: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&q=80&w=200",
    gallery: [
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=800"
    ],
    affiliation: "Rajiv Gandhi University of Health Sciences (RGUHS)",
    courses: [
      { title: "Bachelor of Medicine and Bachelor of Surgery (MBBS)", division: "Undergraduate", duration: "5.5 Years", fees: "₹65,000/Year", eligibility: "10+2 with 50% in PCB + NEET UG", exams: "NEET UG", intake: "250" },
      { title: "Doctor of Medicine (MD) in Radiology", division: "Postgraduate", duration: "3 Years", fees: "₹1.1 Lakhs/Year", eligibility: "MBBS + NEET PG", exams: "NEET PG", intake: "20" }
    ],
    highestPackage: "₹32 LPA",
    averagePackage: "₹14.5 LPA",
    placements: "100%",
    topRecruiters: ["AIIMS", "Victoria Hospital", "Govt of Karnataka Health Services", "Fortis", "Apollo"],
    facilities: ["3000+ Bed Teaching Hospital", "Level 1 Trauma Center", "Simulation Training Facility", "Hostels"],
    hostelInfo: "Affordable government hostels for undergraduate and postgraduate medical residents.",
    scholarships: "State and National Government post-matric scholarships with full fee waivers for SC/ST and Category-1 students.",
    admissionProcess: "15% All India Quota via MCC and 85% State Quota via KEA Counselling based on NEET UG score."
  },
  {
    name: "MS Ramaiah Medical College, Bangalore",
    shortName: "Ramaiah Medical",
    location: "Bengaluru",
    state: "Karnataka",
    country: "India",
    address: "MSR Nagar, MSRIT Post, Bengaluru, Karnataka 560054",
    phone: "080-23605190",
    email: "medadmin@msrmc.ac.in",
    website: "https://msrmc.ac.in",
    rating: 4.7,
    reviews: 310,
    type: "Private",
    ownership: "Private",
    establishmentYear: "1979",
    approval: "NMC, MCI, UGC",
    accreditation: "NAAC A+",
    ranking: 27,
    about: "MS Ramaiah Medical College was established in 1979 by Gokula Education Foundation. Part of the sprawling Ramaiah tech and health sciences campus, it includes an 1100-bed teaching hospital with advanced clinical specialties.",
    map_url: "https://www.google.com/maps/search/?api=1&query=MS+Ramaiah+Medical+College+Bangalore",
    fees: "₹15.5 Lakhs/Year",
    exams: "NEET UG, NEET PG",
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
    logo: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&q=80&w=200",
    gallery: [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
    ],
    affiliation: "Ramaiah University of Applied Sciences",
    courses: [
      { title: "Bachelor of Medicine and Bachelor of Surgery (MBBS)", division: "Undergraduate", duration: "5.5 Years", fees: "₹15.5 Lakhs/Year", eligibility: "10+2 PCB with 50% + NEET", exams: "NEET UG", intake: "150" }
    ],
    highestPackage: "₹28 LPA",
    averagePackage: "₹13.5 LPA",
    placements: "96%",
    topRecruiters: ["Ramaiah Memorial Hospital", "Apollo", "Fortis", "Columbia Asia"],
    facilities: ["Ramaiah Memorial Hospital", "Modern Labs", "AC Lecture Halls", "Hostels", "Gym"],
    hostelInfo: "Hostel facilities for boys and girls with recreational amenities and hygienic food.",
    scholarships: "Gokula Education Foundation merit assistance for deserving students.",
    admissionProcess: "KEA Counselling for Karnataka state quota and MCC for Management quota based on NEET UG."
  },
  {
    name: "JSS Medical College, Mysore",
    shortName: "JSS Medical",
    location: "Mysore",
    state: "Karnataka",
    country: "India",
    address: "Bannimantap, Mysuru, Karnataka 570015",
    phone: "0821-2493831",
    email: "jssmc09@gmail.com",
    website: "https://jssuni.edu.in/jssmc",
    rating: 4.7,
    reviews: 290,
    type: "Deemed",
    ownership: "Deemed",
    establishmentYear: "1984",
    approval: "NMC, MCI, UGC",
    accreditation: "NAAC A++",
    ranking: 34,
    about: "JSS Medical College, Mysuru is a constituent college of JSS Academy of Higher Education & Research. It boasts a 1,800-bed hospital which is one of the largest healthcare facilities in India.",
    map_url: "https://www.google.com/maps/search/?api=1&query=JSS+Medical+College+Mysore",
    fees: "₹16.5 Lakhs/Year",
    exams: "NEET UG, NEET PG",
    img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=800",
    logo: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&q=80&w=200",
    gallery: [
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=800"
    ],
    affiliation: "JSS Academy of Higher Education and Research",
    courses: [
      { title: "Bachelor of Medicine and Bachelor of Surgery (MBBS)", division: "Undergraduate", duration: "5.5 Years", fees: "₹16.5 Lakhs/Year", eligibility: "10+2 with 50% in PCB + NEET", exams: "NEET UG", intake: "250" }
    ],
    highestPackage: "₹26 LPA",
    averagePackage: "₹12.8 LPA",
    placements: "95%",
    topRecruiters: ["JSS Hospital", "Narayana Hrudayalaya", "Apollo", "Fortis"],
    facilities: ["1800-bed Hospital", "Clinical Skills Lab", "Museum", "Hostels", "Library"],
    hostelInfo: "Separate hostels for UG and PG students with round-the-clock security and Wi-Fi.",
    scholarships: "JSS Mahavidyapeetha scholarships for economically weaker students.",
    admissionProcess: "Centralized counselling through MCC based on NEET UG rank."
  }
];

function injectKarnatakaMedical() {
  const siteData = JSON.parse(fs.readFileSync(SITE_DATA_FILE, 'utf-8'));
  let maxId = Math.max(...siteData.colleges.map(c => parseInt(c.id) || 0));

  KARNATAKA_MEDICAL_COLLEGES.forEach(med => {
    maxId++;
    siteData.colleges.unshift({
      ...med,
      id: maxId
    });
  });

  fs.writeFileSync(SITE_DATA_FILE, JSON.stringify(siteData, null, 2), 'utf-8');
  console.log(`✅ Successfully injected ${KARNATAKA_MEDICAL_COLLEGES.length} Top Karnataka Medical Colleges!`);
}

injectKarnatakaMedical();
