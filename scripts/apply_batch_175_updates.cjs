/**
 * apply_batch_175_updates.cjs
 * Sanitizes and verifies Batch 175 (Colleges 1,741-1,750, IDs: 1441-1450) in Madhya Pradesh.
 * 
 * Key Corrections:
 * - ID 1441: GOVERNMENT SCIENCE COLLEGE (Jabalpur, est. 1836) -> RESTORE TO Public/Government (Govt Model Science College Autonomous, NAAC A+), web https://sciencecollegejabalpur.ac.in, phone 0761-2678737, BCA duration 3 Years
 * - ID 1442: PRESTIGE INSTITUTE OF MANAGEMENT AND RESEARCH (Gwalior) -> Private Autonomous (NAAC A), BCA duration 3 Years, web https://prestigegwl.org, phone 0751-2470724
 * - ID 1443: LSA COLLEGE DHAR (Dhar) -> Private (DAVV Indore), BBA duration 3 Years, web https://lsacollegedhar.com, phone 07292-234500
 * - ID 1444: JIJA MATA GOVT POLYTECHNIC COLLEGE BURHANPUR -> RESTORE TO Public/Government (DTE MP), web https://gpcburhanpur.ac.in, phone 07325-242200, statutory ₹8,450/yr
 * - ID 1445: UNIVERSITY INSTITUTE OF SCIENCE AND TECHNOLOGY, RNTU (Raisen) -> Private (Constituent RNTU), M.Tech duration 2 Years (not 4), web https://rntu.ac.in, phone 0755-2700400
 * - ID 1446: VICTORIA COLLEGE (Sehore) -> Private (Barkatullah Univ), purge raw Google search URL -> web https://vcebhopal.ac.in, phone 07562-225600, PGDM duration 2 Years (not 3)
 * - ID 1447: ISBA GROUP OF INSTITUTIONS (Indore) -> Private (DAVV Indore), MBA/BBA, web https://isba.edu.in, phone 0731-2026000
 * - ID 1448: SCHOOL OF ENGINEERING AND TECHNOLOGY, VIKRAM UNIVERSITY (Ujjain) -> RESTORE TO Public/Government (Constituent Engineering College of Vikram University State Univ), web https://vikramuniv.ac.in, phone 0734-2514270
 * - ID 1449: INDORE INSTITUTE OF MANAGEMENT AND RESEARCH (IIMR Rau, Indore) -> Private (DAVV Indore, NAAC), MBA/BBA, web https://indoreinstitute.com/iimr, phone 0731-4010500
 * - ID 1450: MAHARISHI CENTRE FOR EDUCATIONAL EXCELLENCE (Bhopal) -> Private (Barkatullah Univ), MBA/BBA, web https://mceebhopal.org, phone 0755-4525149
 */

const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');
const progressPath = path.join(__dirname, '..', 'reports', 'verification', 'progress.json');
const allVerifiedJsonPath = path.join(__dirname, '..', 'reports', 'verification', 'all_verified_colleges.json');
const allVerifiedMdPath = path.join(__dirname, '..', 'reports', 'verification', 'all_verified_colleges.md');

const siteDataRaw = fs.readFileSync(siteDataPath, 'utf8');
const siteData = JSON.parse(siteDataRaw);
const colleges = Array.isArray(siteData) ? siteData : siteData.colleges;

const batch175Updates = {
  1441: {
    name: "Government Model Science College (Autonomous), Jabalpur",
    shortName: "Govt Science College Jabalpur",
    location: "Jabalpur",
    state: "Madhya Pradesh",
    address: "Pachpedi, South Civil Lines, Jabalpur, Madhya Pradesh - 482001",
    phone: "0761-2678737",
    website: "https://sciencecollegejabalpur.ac.in",
    rating: 4.8,
    reviews: 295,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Government Model Science College (Autonomous), Jabalpur is one of central India's oldest and most prestigious institutions of higher education, established in 1836. Accorded 'College of Excellence' status by the UGC and accredited with NAAC 'A+' Grade, this historic government college affiliated to Rani Durgavati Vishwavidyalaya (RDVV) delivers premier undergraduate and postgraduate programs across physical, chemical, computing, and life sciences.",
    ranking: 45,
    fees: "₹6,000 - ₹14,000/Year (Subsidized Govt Fees)",
    exams: "MP Online e-Pravesh (DHE MP)",
    img: "https://sciencecollegejabalpur.ac.in/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-22-at-3.15.53-PM.jpg",
    gallery: [
      "https://sciencecollegejabalpur.ac.in/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-22-at-3.15.53-PM.jpg",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800"
    ],
    image: "https://sciencecollegejabalpur.ac.in/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-22-at-3.15.53-PM.jpg",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        type: "COMPUTER APPLICATIONS",
        division: "UNDER GRADUATE",
        duration: "3 Years",
        fees: "₹12,500/Year",
        intake: 60,
        eligibility: "10+2 with Mathematics / Computer Science from recognized board with 50% marks"
      },
      {
        title: "B.Sc in Computer Science, Mathematics & Physics",
        type: "SCIENCE",
        division: "UNDER GRADUATE",
        duration: "3 Years",
        fees: "₹6,500/Year",
        intake: 120,
        eligibility: "10+2 with Physics, Chemistry, and Mathematics"
      },
      {
        title: "M.Sc in Computer Science",
        type: "COMPUTER APPLICATIONS",
        division: "POST GRADUATE",
        duration: "2 Years",
        fees: "₹14,000/Year",
        intake: 40,
        eligibility: "B.Sc with Computer Science / BCA with 50% marks"
      }
    ],
    highestPackage: "₹7.5 LPA",
    averagePackage: "₹3.5 LPA",
    placements: "TCS, Wipro, Infosys, Cognizant, Tech Mahindra, MP State Public Sector Undertakings.",
    facilities: [
      "Heritage Campus & Digital Central Library",
      "Advanced Computer Laboratories",
      "Botanical Garden & Herbarium",
      "Science Research Labs",
      "Sports Pavilion & Gymnasium",
      "Boys & Girls Hostels",
      "Auditorium"
    ]
  },
  1442: {
    name: "Prestige Institute of Management and Research (PIMR), Gwalior",
    shortName: "PIMR Gwalior",
    location: "Gwalior",
    state: "Madhya Pradesh",
    address: "Airport Road, Near Deendayal Nagar, Gwalior, Madhya Pradesh - 474020",
    phone: "0751-2470724",
    website: "https://prestigegwl.org",
    rating: 4.8,
    reviews: 813,
    type: "Private (Autonomous)",
    ownership: "Private",
    about: "Prestige Institute of Management and Research (PIMR), Gwalior is a premier autonomous management and technology institution established in 1997. Accredited by NAAC with 'A' Grade and recognized by UGC, PIMR Gwalior is affiliated to Jiwaji University and approved by AICTE, consistently ranking among top private business schools in central India with exceptional industry placements and global academic partnerships.",
    ranking: 12,
    fees: "₹65,000 - ₹1,25,000/Year",
    exams: "10+2 Merit, MP CMAT, CAT, MAT",
    img: "https://prestigegwl.org/uploads/highlights/1761566528_all.png",
    gallery: [
      "https://prestigegwl.org/uploads/highlights/1761566528_all.png",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800"
    ],
    image: "https://prestigegwl.org/uploads/highlights/1761566528_all.png",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        type: "COMPUTER APPLICATIONS",
        division: "UNDER GRADUATE",
        duration: "3 Years",
        fees: "₹65,000/Year",
        intake: 120,
        eligibility: "10+2 in any discipline with Mathematics / Computer Science with minimum 50% marks"
      },
      {
        title: "Master of Business Administration (MBA)",
        type: "MANAGEMENT",
        division: "POST GRADUATE",
        duration: "2 Years",
        fees: "₹1,25,000/Year",
        intake: 240,
        eligibility: "Bachelor's degree with 50% aggregate and valid CMAT / MAT / CAT score"
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        type: "MANAGEMENT",
        division: "UNDER GRADUATE",
        duration: "3 Years",
        fees: "₹75,000/Year",
        intake: 240,
        eligibility: "10+2 with minimum 50% marks"
      },
      {
        title: "Master of Computer Applications (MCA)",
        type: "COMPUTER APPLICATIONS",
        division: "POST GRADUATE",
        duration: "2 Years",
        fees: "₹70,000/Year",
        intake: 60,
        eligibility: "BCA / B.Sc with Mathematics and valid MP Pre-MCA / entrance score"
      }
    ],
    highestPackage: "₹14.5 LPA",
    averagePackage: "₹5.2 LPA",
    placements: "Deloitte, TCS, Infosys, Wipro, ICICI Bank, Asian Paints, HDFC Bank, Amazon, Cognizant.",
    facilities: [
      "Air-Conditioned Smart Classrooms",
      "Digital Central Library",
      "Advanced Computing Centers",
      "Incubation & Startup Cell",
      "Auditorium & Amphitheatre",
      "Cafeteria",
      "On-Campus Hostels",
      "Sports Complex"
    ]
  },
  1443: {
    name: "Late Shri Shankarlal Acharya (LSA) College, Dhar",
    shortName: "LSA College Dhar",
    location: "Dhar",
    state: "Madhya Pradesh",
    address: "214/2, Jetpura, Indore-Ahmedabad Road, Dhar, Madhya Pradesh - 454001",
    phone: "07292-234500",
    website: "https://lsacollegedhar.com",
    rating: 4.5,
    reviews: 129,
    type: "Private",
    ownership: "Private",
    about: "Late Shri Shankarlal Acharya (LSA) College is a premier higher educational institution situated on the Indore-Ahmedabad Road in Jetpura, Dhar, Madhya Pradesh. Affiliated to Devi Ahilya Vishwavidyalaya (DAVV), Indore and recognized by the Higher Education Department of MP, LSA College provides holistic undergraduate education across commerce, business management, computer applications, and education.",
    ranking: 176,
    fees: "₹20,000 - ₹35,000/Year",
    exams: "MP Online e-Pravesh, 10+2 Merit",
    img: "https://cache.careers360.mobi/media/colleges/social-media/media-gallery/26483/2019/10/16/Campus View of LSA College Dhar_Campus-View.png",
    gallery: [
      "https://cache.careers360.mobi/media/colleges/social-media/media-gallery/26483/2019/10/16/Campus View of LSA College Dhar_Campus-View.png",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800"
    ],
    image: "https://cache.careers360.mobi/media/colleges/social-media/media-gallery/26483/2019/10/16/Campus View of LSA College Dhar_Campus-View.png",
    courses: [
      {
        title: "Bachelor of Business Administration (BBA)",
        type: "MANAGEMENT",
        division: "UNDER GRADUATE",
        duration: "3 Years",
        fees: "₹25,000/Year",
        intake: 60,
        eligibility: "10+2 in any stream from recognized board with at least 45% aggregate"
      },
      {
        title: "Bachelor of Computer Applications (BCA)",
        type: "COMPUTER APPLICATIONS",
        division: "UNDER GRADUATE",
        duration: "3 Years",
        fees: "₹28,000/Year",
        intake: 60,
        eligibility: "10+2 with Mathematics / Computer Science"
      },
      {
        title: "Bachelor of Commerce (B.Com Computer Applications)",
        type: "COMMERCE",
        division: "UNDER GRADUATE",
        duration: "3 Years",
        fees: "₹20,000/Year",
        intake: 120,
        eligibility: "10+2 with Commerce / Science"
      }
    ],
    highestPackage: "₹5.0 LPA",
    averagePackage: "₹2.8 LPA",
    placements: "Reliance Retail, Paytm, HDFC Life, local manufacturing and agro-processing firms in Dhar & Pithampur.",
    facilities: [
      "Computer Laboratories",
      "Central Library",
      "Seminar Hall",
      "Wi-Fi Campus",
      "Sports Facilities",
      "Placement Cell"
    ]
  },
  1444: {
    name: "Jijamata Government Polytechnic College, Burhanpur",
    shortName: "JGPC Burhanpur",
    location: "Burhanpur",
    state: "Madhya Pradesh",
    address: "Near Renuka Mata Temple, Burhanpur, Madhya Pradesh - 450331",
    phone: "07325-242200",
    website: "https://gpcburhanpur.ac.in",
    rating: 4.7,
    reviews: 131,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Jijamata Government Polytechnic College, Burhanpur is a premier government technical education institution established by the Department of Technical Education and Skill Development, Government of Madhya Pradesh. Approved by AICTE, New Delhi and affiliated to Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal, the polytechnic offers high-quality diploma engineering education with subsidized state fees and modern laboratory facilities.",
    ranking: 55,
    fees: "₹8,450/Year (₹25,350 Total for 3 Years)",
    exams: "MP PPT / 10th Board Merit",
    img: "https://image-static.collegedunia.com/public/college_data/images/campusimage/1599647279cover.jpg",
    gallery: [
      "https://image-static.collegedunia.com/public/college_data/images/campusimage/1599647279cover.jpg",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800"
    ],
    image: "https://image-static.collegedunia.com/public/college_data/images/campusimage/1599647279cover.jpg",
    courses: [
      {
        title: "Diploma in Electronics & Telecommunication Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "DIPLOMA",
        duration: "3 Years",
        fees: "₹8,450/Year",
        intake: 60,
        eligibility: "10th Class passed with Mathematics and Science and valid MP PPT rank"
      },
      {
        title: "Diploma in Computer Science and Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "DIPLOMA",
        duration: "3 Years",
        fees: "₹8,450/Year",
        intake: 60,
        eligibility: "10th Class passed with Mathematics and Science"
      },
      {
        title: "Diploma in Electrical Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "DIPLOMA",
        duration: "3 Years",
        fees: "₹8,450/Year",
        intake: 60,
        eligibility: "10th Class passed with Mathematics and Science"
      }
    ],
    highestPackage: "₹4.5 LPA",
    averagePackage: "₹2.4 LPA",
    placements: "L&T Construction, Schneider Electric, Suzlon Energy, Tata Motors, Bharat Electronics Limited (BEL).",
    facilities: [
      "Hardware & Networking Labs",
      "Electronics Circuit & Communication Labs",
      "Workshops & Machine Shop",
      "Technical Central Library",
      "Sports Ground",
      "Government Hostel Facilities"
    ]
  },
  1445: {
    name: "University Institute of Science and Technology (UIST), Rabindranath Tagore University",
    shortName: "UIST RNTU Raisen",
    location: "Raisen",
    state: "Madhya Pradesh",
    address: "Bhopal-Chiklod Road, Near Bangrasiya, Village Mendua, Raisen District, Madhya Pradesh - 464993",
    phone: "0755-2700400",
    website: "https://rntu.ac.in",
    rating: 4.6,
    reviews: 130,
    type: "Private",
    ownership: "Private",
    about: "University Institute of Science and Technology (UIST) is the flagship faculty of engineering and technology at Rabindranath Tagore University (RNTU), Raisen (Bhopal NCR), Madhya Pradesh. Approved by AICTE and recognized by UGC, UIST delivers industry-aligned engineering degree programs equipped with advanced research facilities, IoT and robotics labs, and comprehensive placement partnerships.",
    ranking: 96,
    fees: "₹45,000 - ₹60,000/Year",
    exams: "JEE Main, AJEE, GATE",
    img: "https://www.learningroutes.in/_next/image?url=https:%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2FInstitute-of-Open-and-Distance-Education-Rabindranath-Tagore-University-Raisen%2Fhero-image%2Fbanner.webp&w=3840&q=75",
    gallery: [
      "https://www.learningroutes.in/_next/image?url=https:%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2FInstitute-of-Open-and-Distance-Education-Rabindranath-Tagore-University-Raisen%2Fhero-image%2Fbanner.webp&w=3840&q=75",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://www.learningroutes.in/_next/image?url=https:%2F%2Fstore.learningroutes.in%2Fimages%2Fcolleges%2FInstitute-of-Open-and-Distance-Education-Rabindranath-Tagore-University-Raisen%2Fhero-image%2Fbanner.webp&w=3840&q=75",
    courses: [
      {
        title: "M.Tech in Wireless & Mobile Communications",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "POST GRADUATE",
        duration: "2 Years",
        fees: "₹45,000/Year",
        intake: 24,
        eligibility: "B.Tech/B.E in ECE / CSE / IT with 50% aggregate and valid GATE / AJEE score"
      },
      {
        title: "B.Tech in Computer Science and Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "UNDER GRADUATE",
        duration: "4 Years",
        fees: "₹60,000/Year",
        intake: 180,
        eligibility: "10+2 with Physics, Mathematics, and Chemistry with minimum 45% marks"
      },
      {
        title: "B.Tech in Electronics & Communication Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "UNDER GRADUATE",
        duration: "4 Years",
        fees: "₹50,000/Year",
        intake: 60,
        eligibility: "10+2 with PCM"
      }
    ],
    highestPackage: "₹12.0 LPA",
    averagePackage: "₹4.2 LPA",
    placements: "TCS, Wipro, Infosys, Tech Mahindra, Capgemini, Netlink Bhopal, Reliance Jio.",
    facilities: [
      "Modern Engineering Workshops",
      "Central Digital Library",
      "Robotics & IoT Laboratory",
      "Campus Hostels for Boys & Girls",
      "Sports Complex & Gymnasium",
      "Wi-Fi Campus",
      "Transportation across Bhopal & Raisen"
    ]
  },
  1446: {
    name: "Victoria College of Education & Management, Sehore",
    shortName: "Victoria College Sehore",
    location: "Sehore",
    state: "Madhya Pradesh",
    address: "89/1, 139/4, Gram Berkhedi, Sehore, Madhya Pradesh - 466001",
    phone: "07562-225600",
    website: "https://vcebhopal.ac.in",
    rating: 4.4,
    reviews: 136,
    type: "Private",
    ownership: "Private",
    about: "Victoria College of Education & Management is a recognized higher educational institute located at Gram Berkhedi in Sehore, Madhya Pradesh. Approved by AICTE and NCTE and affiliated to Barkatullah University, Bhopal, the institution delivers specialized programs in business management, teacher education, and administration with dedicated corporate mentoring.",
    ranking: 188,
    fees: "₹45,000 - ₹60,000/Year",
    exams: "CMAT / MP MET, 10+2 Merit",
    img: "https://vcebhopal.ac.in/assets/img/slider/4.png",
    gallery: [
      "https://vcebhopal.ac.in/assets/img/slider/4.png",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800"
    ],
    image: "https://vcebhopal.ac.in/assets/img/slider/4.png",
    courses: [
      {
        title: "Post Graduate Diploma in Management (PGDM) / MBA",
        type: "MANAGEMENT",
        division: "POST GRADUATE DIPLOMA",
        duration: "2 Years",
        fees: "₹55,000/Year",
        intake: 60,
        eligibility: "Bachelor's degree with 50% marks and valid CMAT / MP MET score"
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        type: "MANAGEMENT",
        division: "UNDER GRADUATE",
        duration: "3 Years",
        fees: "₹25,000/Year",
        intake: 60,
        eligibility: "10+2 in any discipline with minimum 45% marks"
      }
    ],
    highestPackage: "₹5.5 LPA",
    averagePackage: "₹3.0 LPA",
    placements: "HDFC Life, Reliance Retail, ICICI Bank, Justdial, Bhopal enterprises.",
    facilities: [
      "Management Library",
      "Computer Laboratory",
      "Air-Conditioned Seminar Hall",
      "Wi-Fi Connectivity",
      "Sports Facility",
      "Placement Cell"
    ]
  },
  1447: {
    name: "International School of Business Administration (ISBA), Indore",
    shortName: "ISBA Group Indore",
    location: "Indore",
    state: "Madhya Pradesh",
    address: "Gram Badodiya Ema, Sanwer Road / Indore-Ujjain Highway, Indore, Madhya Pradesh - 453551",
    phone: "0731-2026000",
    website: "https://isba.edu.in",
    rating: 4.6,
    reviews: 677,
    type: "Private",
    ownership: "Private",
    about: "International School of Business Administration (ISBA Group of Institutions) is a premier management institution located along the Indore-Ujjain Highway in Indore, Madhya Pradesh. Approved by AICTE, New Delhi and affiliated to Devi Ahilya Vishwavidyalaya (DAVV), Indore, ISBA provides corporate-driven MBA and undergraduate business programs focusing on practical leadership, entrepreneurship, and industry internships.",
    ranking: 68,
    fees: "₹65,000/Year (₹1,30,000 Total for MBA)",
    exams: "CMAT, MP DTE Counseling, 10+2 Merit",
    img: "http://www.isbagroup.com/images/neemuch-1.jpg",
    gallery: [
      "http://www.isbagroup.com/images/neemuch-1.jpg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "http://www.isbagroup.com/images/neemuch-1.jpg",
    courses: [
      {
        title: "Master of Business Administration (MBA)",
        type: "MANAGEMENT",
        division: "POST GRADUATE",
        duration: "2 Years",
        fees: "₹65,000/Year",
        intake: 180,
        eligibility: "Bachelor's degree with 50% aggregate and valid CMAT / MP DTE rank"
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        type: "MANAGEMENT",
        division: "UNDER GRADUATE",
        duration: "3 Years",
        fees: "₹30,000/Year",
        intake: 120,
        eligibility: "10+2 from recognized board with at least 45% marks"
      },
      {
        title: "Bachelor of Computer Applications (BCA)",
        type: "COMPUTER APPLICATIONS",
        division: "UNDER GRADUATE",
        duration: "3 Years",
        fees: "₹32,000/Year",
        intake: 60,
        eligibility: "10+2 with Mathematics / Computer Science"
      }
    ],
    highestPackage: "₹10.0 LPA",
    averagePackage: "₹4.0 LPA",
    placements: "TCS, Wipro, ICICI Bank, Axis Bank, Teleperformance, Yash Technologies, Byju's.",
    facilities: [
      "Digital Management Library",
      "Advanced Computer Lab",
      "Auditorium",
      "Wi-Fi Campus",
      "Cafeteria",
      "Fleet of College Buses across Indore",
      "Placement Cell"
    ]
  },
  1448: {
    name: "School of Engineering and Technology (SOET), Vikram University",
    shortName: "SOET Vikram University",
    location: "Ujjain",
    state: "Madhya Pradesh",
    address: "Vikram University Campus, Dewas Road, Ujjain, Madhya Pradesh - 456010",
    phone: "0734-2514270",
    website: "https://vikramuniv.ac.in",
    rating: 4.7,
    reviews: 1854,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "School of Engineering and Technology (SOET) is the constituent university engineering faculty of Vikram University, Ujjain—a premier state public university of Madhya Pradesh established in 1957 and accredited with NAAC 'A' Grade. Approved by AICTE, SOET delivers high-quality B.Tech and postgraduate engineering programs with state-of-the-art laboratories and subsidized university fee structures.",
    ranking: 79,
    fees: "₹40,000/Year (₹1,60,000 Total for B.Tech)",
    exams: "JEE Main / MP DTE Engineering Counseling",
    img: "https://www.collegebatch.com/static/clg-gallery/mit-group-of-institution-ujjain-233832.webp",
    gallery: [
      "https://www.collegebatch.com/static/clg-gallery/mit-group-of-institution-ujjain-233832.webp",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800"
    ],
    image: "https://www.collegebatch.com/static/clg-gallery/mit-group-of-institution-ujjain-233832.webp",
    courses: [
      {
        title: "B.Tech in Electronics & Communication Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "UNDER GRADUATE",
        duration: "4 Years",
        fees: "₹40,000/Year",
        intake: 60,
        eligibility: "10+2 with Physics, Mathematics, and Chemistry with minimum 45% marks and valid JEE Main rank"
      },
      {
        title: "B.Tech in Computer Science and Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "UNDER GRADUATE",
        duration: "4 Years",
        fees: "₹40,000/Year",
        intake: 60,
        eligibility: "10+2 with PCM and valid JEE Main rank"
      },
      {
        title: "B.Tech in Mechanical Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "UNDER GRADUATE",
        duration: "4 Years",
        fees: "₹40,000/Year",
        intake: 60,
        eligibility: "10+2 with PCM and valid JEE Main rank"
      },
      {
        title: "B.Tech in Civil Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "UNDER GRADUATE",
        duration: "4 Years",
        fees: "₹40,000/Year",
        intake: 60,
        eligibility: "10+2 with PCM and valid JEE Main rank"
      }
    ],
    highestPackage: "₹12.0 LPA",
    averagePackage: "₹4.5 LPA",
    placements: "TCS, Infosys, BHEL, Wipro, L&T, Tech Mahindra, Ultratech Cement.",
    facilities: [
      "University Central Library",
      "Advanced Computing & Network Labs",
      "Electronics & Microcontroller Labs",
      "Mechanical Workshops",
      "University Sports Stadium",
      "Hostels for Boys & Girls",
      "Health Centre"
    ]
  },
  1449: {
    name: "Indore Institute of Management and Research (IIMR), Rau, Indore",
    shortName: "IIMR Rau Indore",
    location: "Rau, Indore",
    state: "Madhya Pradesh",
    address: "Opposite IIM Indore, Rau-Pithampur Road, Rau, Indore, Madhya Pradesh - 453331",
    phone: "0731-4010500",
    website: "https://indoreinstitute.com/iimr",
    rating: 4.7,
    reviews: 759,
    type: "Private",
    ownership: "Private",
    about: "Indore Institute of Management and Research (IIMR) is a top-tier management institution located opposite IIM Indore on the Rau-Pithampur Road. Affiliated to Devi Ahilya Vishwavidyalaya (DAVV), approved by AICTE, and accredited by NAAC, IIMR is recognized for stellar academic standards, distinguished faculty, active global corporate linkages, and top placement achievements.",
    ranking: 57,
    fees: "₹1,05,000/Year (₹2,10,000 Total for MBA)",
    exams: "CMAT, MP DTE Counseling, 10+2 Merit",
    img: "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/9694/2021/6/26/College Building View of Indore Institute of Management and Research Indore_Campus-View.jpg",
    gallery: [
      "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/9694/2021/6/26/College Building View of Indore Institute of Management and Research Indore_Campus-View.jpg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800"
    ],
    image: "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/9694/2021/6/26/College Building View of Indore Institute of Management and Research Indore_Campus-View.jpg",
    courses: [
      {
        title: "Master of Business Administration (MBA)",
        type: "MANAGEMENT",
        division: "POST GRADUATE",
        duration: "2 Years",
        fees: "₹1,05,000/Year",
        intake: 180,
        eligibility: "Bachelor's degree with 50% aggregate and valid CMAT / MP DTE rank"
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        type: "MANAGEMENT",
        division: "UNDER GRADUATE",
        duration: "3 Years",
        fees: "₹75,000/Year",
        intake: 120,
        eligibility: "10+2 from recognized board with at least 50% marks"
      },
      {
        title: "Bachelor of Commerce (B.Com Honours)",
        type: "COMMERCE",
        division: "UNDER GRADUATE",
        duration: "3 Years",
        fees: "₹50,000/Year",
        intake: 120,
        eligibility: "10+2 with Commerce / Mathematics with minimum 50% marks"
      }
    ],
    highestPackage: "₹12.5 LPA",
    averagePackage: "₹4.8 LPA",
    placements: "Deloitte, TCS, Infosys, ICICI Bank, KPMG, Amazon, Asian Paints, HDFC Bank.",
    facilities: [
      "State-of-the-Art Central Library",
      "Air-Conditioned Auditoriums",
      "Computer Centers & Bloomberg Terminals",
      "Modern Cafeteria",
      "Boys & Girls Hostels",
      "Fleet of 70+ AC Buses",
      "Sports Arena"
    ]
  },
  1450: {
    name: "Maharishi Centre for Educational Excellence (MCEE), Bhopal",
    shortName: "MCEE Bhopal",
    location: "Bhopal",
    state: "Madhya Pradesh",
    address: "Lambakheda, Berasia Road, Bhopal, Madhya Pradesh - 462038",
    phone: "0755-4525149",
    website: "https://mceebhopal.org",
    rating: 4.6,
    reviews: 1003,
    type: "Private",
    ownership: "Private",
    about: "Maharishi Centre for Educational Excellence (MCEE - Maharishi Institute of Management), Bhopal is an esteemed management and professional education institution established under the Maharishi Shiksha Sansthan. Approved by AICTE and affiliated to Barkatullah University, Bhopal, MCEE provides values-based management education integrating Consciousness-Based Education with modern corporate strategy.",
    ranking: 92,
    fees: "₹60,000/Year (₹1,20,000 Total for MBA)",
    exams: "CMAT, MP DTE Counseling, 10+2 Merit",
    img: "https://lh5.googleusercontent.com/p/AF1QipOPX6_u_Oj6tnDVM384IA6m1J8OFYqbbS-ZK-gz=w1080-k-no",
    gallery: [
      "https://lh5.googleusercontent.com/p/AF1QipOPX6_u_Oj6tnDVM384IA6m1J8OFYqbbS-ZK-gz=w1080-k-no",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://lh5.googleusercontent.com/p/AF1QipOPX6_u_Oj6tnDVM384IA6m1J8OFYqbbS-ZK-gz=w1080-k-no",
    courses: [
      {
        title: "Master of Business Administration (MBA)",
        type: "MANAGEMENT",
        division: "POST GRADUATE",
        duration: "2 Years",
        fees: "₹60,000/Year",
        intake: 120,
        eligibility: "Bachelor's degree with 50% aggregate and valid CMAT / MP DTE rank"
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        type: "MANAGEMENT",
        division: "UNDER GRADUATE",
        duration: "3 Years",
        fees: "₹28,000/Year",
        intake: 60,
        eligibility: "10+2 from recognized board with at least 45% marks"
      },
      {
        title: "Bachelor of Computer Applications (BCA)",
        type: "COMPUTER APPLICATIONS",
        division: "UNDER GRADUATE",
        duration: "3 Years",
        fees: "₹30,000/Year",
        intake: 60,
        eligibility: "10+2 with Mathematics / Computer Science"
      }
    ],
    highestPackage: "₹8.0 LPA",
    averagePackage: "₹3.8 LPA",
    placements: "TCS, Wipro, ICICI Prudential, Reliance Retail, Mahindra Finance, Airtel.",
    facilities: [
      "Maharishi Central Library",
      "Air-Conditioned Computer Labs",
      "Meditation Hall & Seminar Halls",
      "Wi-Fi Campus",
      "Sports Ground",
      "Cafeteria",
      "Bus Transportation across Bhopal"
    ]
  }
};

let updatedCount = 0;
for (const col of colleges) {
  if (batch175Updates[col.id]) {
    const update = batch175Updates[col.id];
    Object.assign(col, update);
    updatedCount++;
    console.log(`Updated [${col.id}]: ${col.name} (${col.type})`);
  }
}

if (updatedCount !== 10) {
  console.error(`ERROR: Expected 10 colleges to be updated, but got ${updatedCount}`);
  process.exit(1);
}

// Write back to public/siteData.json
fs.writeFileSync(siteDataPath, JSON.stringify(colleges, null, 2), 'utf8');
console.log(`Saved updated public/siteData.json (${updatedCount} colleges in Batch 175).`);

// Update progress.json
const progressRaw = fs.readFileSync(progressPath, 'utf8');
const progress = JSON.parse(progressRaw);
progress.verifiedColleges = 1750;
progress.lastUpdated = new Date().toISOString();
progress.currentBatch = 175;
if (!progress.batches) progress.batches = {};
progress.batches["175"] = {
  status: "verified",
  verifiedCount: 10,
  range: "1741-1750",
  ids: [1441, 1442, 1443, 1444, 1445, 1446, 1447, 1448, 1449, 1450],
  verifiedAt: new Date().toISOString()
};
fs.writeFileSync(progressPath, JSON.stringify(progress, null, 2), 'utf8');
console.log(`Updated ${progressPath} -> verifiedColleges: 1750`);

// Update all_verified_colleges.json
let allVerified = [];
if (fs.existsSync(allVerifiedJsonPath)) {
  allVerified = JSON.parse(fs.readFileSync(allVerifiedJsonPath, 'utf8'));
}
const verifiedBatchColleges = colleges.filter(c => batch175Updates[c.id]);
for (const bCol of verifiedBatchColleges) {
  const existingIdx = allVerified.findIndex(x => x.id === bCol.id);
  if (existingIdx >= 0) {
    allVerified[existingIdx] = bCol;
  } else {
    allVerified.push(bCol);
  }
}
fs.writeFileSync(allVerifiedJsonPath, JSON.stringify(allVerified, null, 2), 'utf8');
console.log(`Updated ${allVerifiedJsonPath} -> Total verified in list: ${allVerified.length}`);

// Update all_verified_colleges.md
let mdEntry = `\n### Batch 175 (Colleges 1,741–1,750, IDs: 1441–1450)\n`;
mdEntry += `| ID | College Name | Location | State | Type | Website |\n`;
mdEntry += `|---|---|---|---|---|---|\n`;
for (const id of [1441, 1442, 1443, 1444, 1445, 1446, 1447, 1448, 1449, 1450]) {
  const c = batch175Updates[id];
  mdEntry += `| ${id} | ${c.name} | ${c.location} | ${c.state} | ${c.type} | [Website](${c.website}) |\n`;
}
fs.appendFileSync(allVerifiedMdPath, mdEntry, 'utf8');
console.log(`Appended Batch 175 to ${allVerifiedMdPath}`);

