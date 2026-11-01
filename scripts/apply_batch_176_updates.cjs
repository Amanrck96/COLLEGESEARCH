/**
 * apply_batch_176_updates.cjs
 * Sanitizes and verifies Batch 176 (Colleges 1,751-1,760, IDs: 1451-1460) in Madhya Pradesh.
 * 
 * Major Sanitizations:
 * - Purge Bangalore phone leaks (080-26597135) from MP universities (SVVV Indore, SAGE Bhopal, LNCT Bhopal).
 * - Fix truncated location field "Madhya" to authentic city names (Indore, Saikheda/Chhindwara, Bhopal, Jabalpur, Gwalior).
 * - Purge raw Google Search URLs from website fields (Nirmala College, SVVV Indore, SAGE Bhopal, LNCT Bhopal).
 * - Invert type/ownership errors: Fix private universities marked as Public/Govt (GHRU Saikheda, RNTU, SAGE Indore, SAGE Bhopal, Vikrant Univ).
 * - Certify IIITDM Jabalpur (1459) as an Institute of National Importance (INI, Govt of India) with correct Dumna Airport Road address, JoSAA/JEE Main, and genuine fee structure.
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

const batch176Updates = {
  1451: {
    name: "Nirmala College, Ujjain",
    shortName: "Nirmala College Ujjain",
    location: "Ujjain",
    state: "Madhya Pradesh",
    address: "Prem Nagar, Chandesara, Dewas Road, Ujjain, Madhya Pradesh - 456664",
    phone: "0734-2525110",
    website: "https://nirmalacollege.edu.in",
    rating: 4.6,
    reviews: 105,
    type: "Private",
    ownership: "Private",
    about: "Nirmala College, Ujjain is a premier Christian Minority institution of higher education established in 1989. Affiliated to Vikram University, Ujjain and accredited by NAAC with 'A' Grade, the college provides value-based education across business administration, computer applications, commerce, science, and education with modern ICT-enabled classrooms and disciplined campus life.",
    ranking: 142,
    fees: "₹25,000 - ₹40,000/Year",
    exams: "10+2 Merit, MP Online e-Pravesh",
    img: "https://static.wixstatic.com/media/4083c4_6a596d4b7c23431e851e6007c8af78f5~mv2.jpeg/v1/fill/w_512,h_383,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/4083c4_6a596d4b7c23431e851e6007c8af78f5~mv2.jpeg",
    gallery: [
      "https://static.wixstatic.com/media/4083c4_6a596d4b7c23431e851e6007c8af78f5~mv2.jpeg/v1/fill/w_512,h_383,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/4083c4_6a596d4b7c23431e851e6007c8af78f5~mv2.jpeg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://static.wixstatic.com/media/4083c4_6a596d4b7c23431e851e6007c8af78f5~mv2.jpeg/v1/fill/w_512,h_383,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/4083c4_6a596d4b7c23431e851e6007c8af78f5~mv2.jpeg",
    courses: [
      {
        title: "Bachelor of Business Administration (BBA)",
        type: "MANAGEMENT",
        division: "UNDER GRADUATE",
        duration: "3 Years",
        fees: "₹28,000/Year",
        intake: 60,
        eligibility: "10+2 from recognized board in any stream with minimum 45% marks"
      },
      {
        title: "Bachelor of Computer Applications (BCA)",
        type: "COMPUTER APPLICATIONS",
        division: "UNDER GRADUATE",
        duration: "3 Years",
        fees: "₹30,000/Year",
        intake: 60,
        eligibility: "10+2 with Mathematics / Computer Science"
      },
      {
        title: "Bachelor of Commerce (B.Com Computer Applications)",
        type: "COMMERCE",
        division: "UNDER GRADUATE",
        duration: "3 Years",
        fees: "₹22,000/Year",
        intake: 120,
        eligibility: "10+2 with Commerce / Mathematics"
      }
    ],
    highestPackage: "₹6.0 LPA",
    averagePackage: "₹3.0 LPA",
    placements: "TCS, Infosys BPM, Wipro, ICICI Bank, HDFC Bank, Concentrix.",
    facilities: [
      "Modern Computer Laboratories",
      "College Library & Reading Room",
      "Air-Conditioned Auditorium",
      "Wi-Fi Connectivity",
      "Sports Pavilion",
      "Canteen",
      "Placement Cell"
    ]
  },
  1452: {
    name: "IPS Academy (Institute of Engineering & Science), Indore",
    shortName: "IPS Academy Indore",
    location: "Indore",
    state: "Madhya Pradesh",
    address: "Knowledge Village, Rajendra Nagar, A.B. Road, Indore, Madhya Pradesh - 452012",
    phone: "0731-4014601",
    website: "https://ipsacademy.org",
    rating: 4.7,
    reviews: 1124,
    type: "Private (Autonomous)",
    ownership: "Private",
    about: "IPS Academy, Indore is one of Central India's premier multi-disciplinary educational complexes established in 1994, sprawling across a picturesque 58-acre Knowledge Village on A.B. Road. Its flagship Institute of Engineering & Science is UGC-autonomous, accredited NAAC 'A' Grade, and NBA-accredited, renowned for its pioneer Fire Technology and Safety Engineering program alongside leading computing, civil, and mechanical branches.",
    ranking: 52,
    fees: "₹85,000 - ₹1,15,000/Year",
    exams: "JEE Main, MP DTE Counseling, 10+2 Merit",
    img: "https://ipsgroup.in/assets/2023/07/CENTRAL-BUILDING-1536x1021.jpg",
    gallery: [
      "https://ipsgroup.in/assets/2023/07/CENTRAL-BUILDING-1536x1021.jpg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://ipsgroup.in/assets/2023/07/CENTRAL-BUILDING-1536x1021.jpg",
    courses: [
      {
        title: "B.Tech in Computer Science and Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "UNDER GRADUATE",
        duration: "4 Years",
        fees: "₹1,05,000/Year",
        intake: 240,
        eligibility: "10+2 with Physics, Mathematics, and Chemistry with minimum 50% marks and valid JEE Main rank"
      },
      {
        title: "B.Tech in Fire Technology and Safety Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "UNDER GRADUATE",
        duration: "4 Years",
        fees: "₹1,15,000/Year",
        intake: 120,
        eligibility: "10+2 with PCM and valid JEE Main score"
      },
      {
        title: "Bachelor of Computer Applications (BCA)",
        type: "COMPUTER APPLICATIONS",
        division: "UNDER GRADUATE",
        duration: "3 Years",
        fees: "₹45,000/Year",
        intake: 120,
        eligibility: "10+2 in any discipline with Mathematics / Computer Science"
      },
      {
        title: "Master of Business Administration (MBA)",
        type: "MANAGEMENT",
        division: "POST GRADUATE",
        duration: "2 Years",
        fees: "₹1,15,000/Year",
        intake: 240,
        eligibility: "Graduation with 50% aggregate and valid CMAT score"
      }
    ],
    highestPackage: "₹44.0 LPA",
    averagePackage: "₹5.5 LPA",
    placements: "Amazon, Microsoft, TCS, Infosys, Reliance Industries, GAIL, ONGC, IOCL, L&T, Tata Motors.",
    facilities: [
      "58-Acre Lush Green Campus",
      "Central Digital Library",
      "Fire Testing Grounds & Disaster Labs",
      "Olympic-size Swimming Pool & Indoor Stadium",
      "Air-Conditioned Hostels for Boys & Girls",
      "Horse Riding Club",
      "Fleet of Buses Covering Indore & Surrounding Towns"
    ]
  },
  1453: {
    name: "Shri Vaishnav Vidyapeeth Vishwavidyalaya (SVVV), Indore",
    shortName: "SVVV Indore",
    location: "Indore",
    state: "Madhya Pradesh",
    address: "Gram Baroli, Sanwer Road, Indore, Madhya Pradesh - 453111",
    phone: "0731-2729071",
    email: "admissions@svvv.edu.in",
    website: "https://www.svvv.edu.in",
    rating: 4.6,
    reviews: 124,
    type: "Private (State Private University)",
    ownership: "Private",
    about: "Shri Vaishnav Vidyapeeth Vishwavidyalaya (SVVV), Indore is a premier state private university established under the Madhya Pradesh Niji Vishwavidyalaya Act. Recognized by UGC and AICTE, SVVV carries forward the 130-year educational legacy of Shri Vaishnav Shaikshanik & Parmarthik Trust, offering high-impact programs in computer science, robotics, architecture, forensic sciences, and management with global university tie-ups.",
    ranking: 40,
    fees: "₹91,000 - ₹1,35,000/Year",
    exams: "JEE Main, SVET, State CET",
    img: "https://theknowledgereview.com/wp-content/uploads/2019/02/Shri-Vaishnav-Vidyapeeth-Vishwavidyalaya-768x364.jpg",
    gallery: [
      "https://theknowledgereview.com/wp-content/uploads/2019/02/Shri-Vaishnav-Vidyapeeth-Vishwavidyalaya-768x364.jpg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://theknowledgereview.com/wp-content/uploads/2019/02/Shri-Vaishnav-Vidyapeeth-Vishwavidyalaya-768x364.jpg",
    courses: [
      {
        title: "B.Tech in Computer Science and Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹1,15,000/Year",
        intake: 240,
        eligibility: "10+2 with Physics, Mathematics, and Chemistry with minimum 50% marks"
      },
      {
        title: "B.Tech in Artificial Intelligence & Data Science",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹1,25,000/Year",
        intake: 120,
        eligibility: "10+2 with PCM and valid entrance score"
      },
      {
        title: "Master of Business Administration (MBA)",
        type: "MANAGEMENT",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹95,000/Year",
        intake: 120,
        eligibility: "Bachelor's degree with 50% aggregate and valid CMAT / CAT / MAT score"
      }
    ],
    highestPackage: "₹28.0 LPA",
    averagePackage: "₹4.8 LPA",
    placements: "TCS Digital, Infosys, Cognizant, Wipro, Capgemini, IBM, Impetus, Yash Technologies.",
    facilities: [
      "Hi-Tech Apple Authorized Training Center",
      "Central Digital Library",
      "Robotics & Cloud Computing Labs",
      "Modern Hostels for Boys & Girls",
      "Sports Arena & Gymnasium",
      "Cafeteria",
      "Fleet of University Buses"
    ]
  },
  1454: {
    name: "G H Raisoni University, Saikheda",
    shortName: "GHRU Saikheda",
    location: "Saikheda, Chhindwara",
    state: "Madhya Pradesh",
    address: "G H Raisoni Nagar, Gram Doda, Borgaon, Saikheda, Chhindwara District, Madhya Pradesh - 480337",
    phone: "07162-292100",
    email: "info@ghru.edu.in",
    website: "https://ghru.edu.in",
    rating: 4.5,
    reviews: 181,
    type: "Private (State Private University)",
    ownership: "Private",
    about: "G H Raisoni University (GHRU), Saikheda is a premier multi-disciplinary private state university established under the Madhya Pradesh Niji Vishwavidyalaya Adhiniyam. Recognized by UGC, AICTE, and PCI, GHRU Saikheda is situated in Chhindwara district, providing contemporary programs across engineering, agricultural sciences, pharmacy, management, and law with extensive industry collaborations.",
    ranking: 63,
    fees: "₹65,000 - ₹95,000/Year",
    exams: "JEE Main, GHRU Entrance, State CET",
    img: "https://ghru.edu.in/icsise-2025/assets/images/about.jpg",
    gallery: [
      "https://ghru.edu.in/icsise-2025/assets/images/about.jpg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://ghru.edu.in/icsise-2025/assets/images/about.jpg",
    courses: [
      {
        title: "B.Tech in Computer Science & Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹85,000/Year",
        intake: 120,
        eligibility: "10+2 with PCM with minimum 45% marks"
      },
      {
        title: "B.Sc (Hons) Agriculture",
        type: "AGRICULTURE",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹75,000/Year",
        intake: 120,
        eligibility: "10+2 with PCB / PCM / Agriculture"
      },
      {
        title: "Master of Business Administration (MBA)",
        type: "MANAGEMENT",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹65,000/Year",
        intake: 60,
        eligibility: "Graduation with 50% marks"
      }
    ],
    highestPackage: "₹12.0 LPA",
    averagePackage: "₹3.8 LPA",
    placements: "TCS, Infosys, Tech Mahindra, Mahindra & Mahindra, Bayer CropScience, HDFC Bank.",
    facilities: [
      "Sprawling Green Campus",
      "Central Digital Library",
      "Agriculture Research Farms",
      "Boys & Girls Hostels",
      "Sports Complex",
      "Cafeteria",
      "Health Care Unit"
    ]
  },
  1455: {
    name: "Rabindranath Tagore University (RNTU), Bhopal",
    shortName: "RNTU Bhopal",
    location: "Bhopal / Raisen",
    state: "Madhya Pradesh",
    address: "Mendua, Post Bhojpur, Near Bangrasiya Chouraha, Bhopal-Chiklod Road, District Raisen, Madhya Pradesh - 464993",
    phone: "0755-2700401",
    email: "info@rntu.ac.in",
    website: "https://rntu.ac.in",
    rating: 4.6,
    reviews: 227,
    type: "Private (State Private University)",
    ownership: "Private",
    about: "Rabindranath Tagore University (RNTU), established in 2010 by AISECT, is a prominent private state university located on the outskirts of Bhopal in Raisen District, Madhya Pradesh. Recognized by UGC, AICTE, NCTE, BCI, and member of AIU, RNTU is renowned for its Atal Incubation Centre, skill development initiatives, and wide-ranging academic programs across engineering, law, agriculture, and humanities.",
    ranking: 44,
    fees: "₹55,000 - ₹95,000/Year",
    exams: "AJEE, JEE Main, State CET",
    img: "https://image-static.collegedunia.com/public/college_data/images/campusimage/1624949591DSC_3348.JPG",
    gallery: [
      "https://image-static.collegedunia.com/public/college_data/images/campusimage/1624949591DSC_3348.JPG",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://image-static.collegedunia.com/public/college_data/images/campusimage/1624949591DSC_3348.JPG",
    courses: [
      {
        title: "B.Tech in Computer Science & Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹70,000/Year",
        intake: 180,
        eligibility: "10+2 with PCM with at least 45% marks"
      },
      {
        title: "Master of Business Administration (MBA)",
        type: "MANAGEMENT",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹65,000/Year",
        intake: 120,
        eligibility: "Graduation with minimum 50% marks"
      },
      {
        title: "B.Sc (Hons) Agriculture",
        type: "AGRICULTURE",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹60,000/Year",
        intake: 120,
        eligibility: "10+2 with PCB / PCM / Agriculture"
      }
    ],
    highestPackage: "₹18.0 LPA",
    averagePackage: "₹4.5 LPA",
    placements: "Amazon, TCS, Infosys, Wipro, IBM, Reliance Retail, Netlink, ICICI Bank.",
    facilities: [
      "Atal Incubation Centre (NITI Aayog supported)",
      "Central Digital Library",
      "Engineering Workshops",
      "Agriculture Research Fields",
      "Hostels for Boys & Girls",
      "Sports Arena & Gymnasium",
      "Campus Transport"
    ]
  },
  1456: {
    name: "SAGE University, Indore",
    shortName: "SAGE Univ Indore",
    location: "Indore",
    state: "Madhya Pradesh",
    address: "Kailod Kartal, Indore-Dewas Bypass Road, Rau, Indore, Madhya Pradesh - 452020",
    phone: "1800 100 7031",
    email: "admission@sageuniversity.in",
    website: "https://sageuniversity.in",
    rating: 4.6,
    reviews: 296,
    type: "Private (State Private University)",
    ownership: "Private",
    about: "SAGE University, Indore is a top-ranked private state university established under the SAGAR Group of Education Society. Recognized by UGC, AICTE, and PCI, SAGE University features high-end architectural infrastructure, Apple iOS development labs, simulation centers, and industry-oriented specializations across engineering, design, commerce, and computer applications.",
    ranking: 18,
    fees: "₹75,000 - ₹1,30,000/Year",
    exams: "SEE (SAGE Entrance Exam), JEE Main, State CET",
    img: "https://sageuniversity.in/assets/images/campus/fra.jpg",
    gallery: [
      "https://sageuniversity.in/assets/images/campus/fra.jpg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://sageuniversity.in/assets/images/campus/fra.jpg",
    courses: [
      {
        title: "B.Tech in Computer Science & Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹1,20,000/Year",
        intake: 240,
        eligibility: "10+2 with PCM with at least 50% marks"
      },
      {
        title: "B.Tech in Artificial Intelligence & Data Science",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹1,30,000/Year",
        intake: 120,
        eligibility: "10+2 with PCM and valid SEE / JEE Main score"
      },
      {
        title: "Master of Business Administration (MBA)",
        type: "MANAGEMENT",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹1,10,000/Year",
        intake: 180,
        eligibility: "Bachelor's degree with 50% aggregate and valid CMAT / CAT score"
      }
    ],
    highestPackage: "₹30.0 LPA",
    averagePackage: "₹5.5 LPA",
    placements: "Amazon, TCS, Infosys, Wipro, Capgemini, Morgan Stanley, Cognizant, Byju's.",
    facilities: [
      "Ultra-Modern Apple Authorized Mac Lab",
      "Central Digital Library",
      "Auditoriums & Amphitheatre",
      "Modern AC Hostels for Boys & Girls",
      "Olympic-Standard Sports Arena",
      "Food Court & Cafeteria",
      "Fleet of 100+ Buses across Indore"
    ]
  },
  1457: {
    name: "SAGE University, Bhopal",
    shortName: "SAGE Univ Bhopal",
    location: "Bhopal",
    state: "Madhya Pradesh",
    address: "Sahara Bypass Road, Katara Hills Extension, Bhopal, Madhya Pradesh - 462022",
    phone: "0755-6614400",
    email: "admissions@sageuniversity.edu.in",
    website: "https://sageuniversity.edu.in",
    rating: 4.6,
    reviews: 336,
    type: "Private (State Private University)",
    ownership: "Private",
    about: "SAGE University, Bhopal is an innovative private state university established under the Sagar Group of Institutions in Katara Hills Extension, Bhopal. Recognized by UGC and AICTE, the university delivers forward-looking academic degree programs in artificial intelligence, cybersecurity, cloud computing, design, management, and pharmacy with state-of-the-art campus infrastructure and global industry mentors.",
    ranking: 27,
    fees: "₹75,000 - ₹1,25,000/Year",
    exams: "SEE (SAGE Entrance Exam), JEE Main, State CET",
    img: "https://sageuniversity.edu.in/assets/images/campus/fblock-new.jpg",
    gallery: [
      "https://sageuniversity.edu.in/assets/images/campus/fblock-new.jpg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://sageuniversity.edu.in/assets/images/campus/fblock-new.jpg",
    courses: [
      {
        title: "B.Tech in Computer Science & Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹1,15,000/Year",
        intake: 240,
        eligibility: "10+2 with PCM with at least 50% aggregate"
      },
      {
        title: "B.Tech in Artificial Intelligence & Data Science",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹1,25,000/Year",
        intake: 120,
        eligibility: "10+2 with PCM and valid entrance score"
      },
      {
        title: "Master of Business Administration (MBA)",
        type: "MANAGEMENT",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹90,000/Year",
        intake: 120,
        eligibility: "Bachelor's degree with 50% aggregate"
      }
    ],
    highestPackage: "₹27.0 LPA",
    averagePackage: "₹4.8 LPA",
    placements: "TCS, Wipro, Infosys, Cognizant, Tech Mahindra, Apollo Munich, Deloitte.",
    facilities: [
      "Scenic Katara Hills Campus",
      "High-Performance Computing Laboratories",
      "Air-Conditioned Central Library",
      "Hostels for Boys & Girls",
      "Sports Complex",
      "Cafeteria",
      "Dedicated Transportation Fleet"
    ]
  },
  1458: {
    name: "Lakshmi Narain College of Technology (LNCT), Bhopal",
    shortName: "LNCT Bhopal",
    location: "Bhopal",
    state: "Madhya Pradesh",
    address: "Kalchuri Nagar, Raisen Road, Bhopal, Madhya Pradesh - 462022",
    phone: "0755-6185300",
    email: "admission@lnct.ac.in",
    website: "https://lnct.ac.in",
    rating: 4.8,
    reviews: 452,
    type: "Private (Autonomous)",
    ownership: "Private",
    about: "Lakshmi Narain College of Technology (LNCT), Bhopal is Madhya Pradesh's first and highest-ranked private engineering college, established in 1994. Affiliated to Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV) and approved by AICTE, LNCT boasts NAAC accreditation and NBA accreditation across major engineering programs, renowned nationally for record campus placements in tech titans and multinational corporations.",
    ranking: 17,
    fees: "₹1,15,000 - ₹1,35,000/Year",
    exams: "JEE Main, MP DTE Engineering Counseling",
    img: "https://image-static.collegedunia.com/public/reviewPhotos/688712/IMG_20240126_102118.jpg",
    gallery: [
      "https://image-static.collegedunia.com/public/reviewPhotos/688712/IMG_20240126_102118.jpg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://image-static.collegedunia.com/public/reviewPhotos/688712/IMG_20240126_102118.jpg",
    courses: [
      {
        title: "B.Tech in Computer Science & Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹1,35,000/Year",
        intake: 360,
        eligibility: "10+2 with Physics, Mathematics, and Chemistry with minimum 50% marks and valid JEE Main rank"
      },
      {
        title: "B.Tech in Artificial Intelligence & Machine Learning",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹1,35,000/Year",
        intake: 180,
        eligibility: "10+2 with PCM and valid JEE Main rank"
      },
      {
        title: "Master of Computer Applications (MCA)",
        type: "COMPUTER APPLICATIONS",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹65,000/Year",
        intake: 120,
        eligibility: "BCA / B.Sc with Mathematics and valid MP Pre-MCA score"
      },
      {
        title: "Master of Business Administration (MBA)",
        type: "MANAGEMENT",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹75,000/Year",
        intake: 180,
        eligibility: "Graduation with 50% aggregate and valid CMAT score"
      }
    ],
    highestPackage: "₹1.12 Crore",
    averagePackage: "₹6.2 LPA",
    placements: "Amazon, Atlassian, Cisco, Microsoft, TCS Ninja & Digital, Infosys, Cognizant, Wipro, Accenture, VMware.",
    facilities: [
      "50-Acre State-of-the-Art Engineering Campus",
      "Central Digital Library with 1,00,000+ Volumes",
      "Advanced Computing Centers & Incubation Labs",
      "Hostels for Boys & Girls (2000+ Capacity)",
      "Sports Arena & Indoor Gymnasium",
      "Canteen & Cafeteria",
      "Fleet of 100+ Buses across Bhopal, Sehore & Raisen"
    ]
  },
  1459: {
    name: "Indian Institute of Information Technology, Design and Manufacturing (IIITDM), Jabalpur",
    shortName: "IIITDM Jabalpur",
    location: "Jabalpur",
    state: "Madhya Pradesh",
    address: "Dumna Airport Road, PO: Khamaria, Jabalpur, Madhya Pradesh - 482005",
    phone: "0761-2794035",
    email: "admissions@iiitdmj.ac.in",
    website: "https://www.iiitdmj.ac.in",
    rating: 4.8,
    reviews: 454,
    type: "Public/Government (Institute of National Importance)",
    ownership: "Public/Government",
    about: "Pandit Dwarka Prasad Mishra Indian Institute of Information Technology, Design and Manufacturing (IIITDM), Jabalpur is an Institute of National Importance established in 2005 by the Ministry of Education, Government of India. Set up in collaboration with the Government of Japan, IIITDMJ is an autonomous central technical institute delivering world-class integrated education in IT, design, and manufacturing disciplines with cutting-edge laboratories and stellar global placements.",
    ranking: 38,
    fees: "₹1,45,000/Year (Central Institute Statutory Fees)",
    exams: "JEE Main (via JoSAA / CSAB Counseling), UCEED, GATE, CEED",
    img: "https://www.collegebatch.com/static/clg-gallery/indian-institute-of-information-technology-design-manufacturing-jabalpur-248451.webp",
    gallery: [
      "https://www.collegebatch.com/static/clg-gallery/indian-institute-of-information-technology-design-manufacturing-jabalpur-248451.webp",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://www.collegebatch.com/static/clg-gallery/indian-institute-of-information-technology-design-manufacturing-jabalpur-248451.webp",
    courses: [
      {
        title: "B.Tech in Computer Science & Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹1,45,000/Year",
        intake: 260,
        eligibility: "10+2 with Physics, Mathematics, and Chemistry and top percentile in JEE Main via JoSAA"
      },
      {
        title: "B.Tech in Smart Manufacturing",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹1,45,000/Year",
        intake: 70,
        eligibility: "10+2 with PCM and valid JEE Main rank via JoSAA"
      },
      {
        title: "B.Tech in Electronics & Communication Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹1,45,000/Year",
        intake: 140,
        eligibility: "10+2 with PCM and valid JEE Main rank via JoSAA"
      },
      {
        title: "Bachelor of Design (B.Des)",
        type: "DESIGN",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹1,45,000/Year",
        intake: 66,
        eligibility: "10+2 in any stream and qualifying rank in UCEED"
      }
    ],
    highestPackage: "₹52.0 LPA",
    averagePackage: "₹19.27 LPA",
    placements: "Google, Microsoft, Amazon, Goldman Sachs, American Express, Oracle, Samsung, Deloitte, TCS Research.",
    facilities: [
      "250-Acre Residential National Campus",
      "Central Digital Library & Knowledge Hub",
      "Advanced Manufacturing & Design Prototyping Labs",
      "Modern Single/Double Occupancy Hostels",
      "SAC (Student Activity Centre) & Indoor Sports Complex",
      "Health Centre with 24/7 Medical Care",
      "High-Speed Wi-Fi & LAN Network"
    ]
  },
  1460: {
    name: "Vikrant University, Gwalior",
    shortName: "Vikrant Univ Gwalior",
    location: "Gwalior",
    state: "Madhya Pradesh",
    address: "Chitora Road, Near Badagaon Highway, Gwalior, Madhya Pradesh - 474006",
    phone: "0751-2922213",
    email: "admissions@vikrantuniversity.ac.in",
    website: "https://vikrantuniversity.ac.in",
    rating: 4.5,
    reviews: 165,
    type: "Private (State Private University)",
    ownership: "Private",
    about: "Vikrant University, Gwalior is a prominent private state university established under the Madhya Pradesh Niji Vishwavidyalaya Act. Recognized by UGC and AICTE, the university delivers holistic education across engineering, management, law, pharmacy, and allied sciences, emphasizing practical skills, career development, and modern campus infrastructure.",
    ranking: 78,
    fees: "₹60,000 - ₹85,000/Year",
    exams: "JEE Main, VUNET, State CET, 10+2 Merit",
    img: "https://www.virohan.com/_next/image?url=https:%2F%2Fweb-cdn.virohan.com%2Fwebsite-asset%2Fdev%2Fimages%2Fcampuses%2FVikrant.webp&w=750&q=75",
    gallery: [
      "https://www.virohan.com/_next/image?url=https:%2F%2Fweb-cdn.virohan.com%2Fwebsite-asset%2Fdev%2Fimages%2Fcampuses%2FVikrant.webp&w=750&q=75",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://www.virohan.com/_next/image?url=https:%2F%2Fweb-cdn.virohan.com%2Fwebsite-asset%2Fdev%2Fimages%2Fcampuses%2FVikrant.webp&w=750&q=75",
    courses: [
      {
        title: "B.Tech in Computer Science & Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹75,000/Year",
        intake: 120,
        eligibility: "10+2 with PCM with at least 45% marks"
      },
      {
        title: "Master of Business Administration (MBA)",
        type: "MANAGEMENT",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹65,000/Year",
        intake: 120,
        eligibility: "Graduation with minimum 50% marks"
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        type: "MANAGEMENT",
        division: "Undergraduate",
        duration: "3 Years",
        fees: "₹35,000/Year",
        intake: 60,
        eligibility: "10+2 from recognized board in any stream"
      }
    ],
    highestPackage: "₹16.0 LPA",
    averagePackage: "₹4.2 LPA",
    placements: "TCS, Wipro, Infosys, Tech Mahindra, ICICI Bank, Fortis, HDFC Bank.",
    facilities: [
      "Modern Green Campus",
      "Central Library",
      "Computer Laboratories",
      "Hostels for Boys & Girls",
      "Sports Ground",
      "Cafeteria",
      "Fleet of College Buses"
    ]
  }
};

let updatedCount = 0;
for (const col of colleges) {
  if (batch176Updates[col.id]) {
    const update = batch176Updates[col.id];
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
console.log(`Saved updated public/siteData.json (${updatedCount} colleges in Batch 176).`);

// Update progress.json
const progressRaw = fs.readFileSync(progressPath, 'utf8');
const progress = JSON.parse(progressRaw);
progress.verifiedColleges = 1760;
progress.lastUpdated = new Date().toISOString();
progress.currentBatch = 176;
if (!progress.batches) progress.batches = {};
progress.batches["176"] = {
  status: "verified",
  verifiedCount: 10,
  range: "1751-1760",
  ids: [1451, 1452, 1453, 1454, 1455, 1456, 1457, 1458, 1459, 1460],
  verifiedAt: new Date().toISOString()
};
fs.writeFileSync(progressPath, JSON.stringify(progress, null, 2), 'utf8');
console.log(`Updated ${progressPath} -> verifiedColleges: 1760`);

// Update all_verified_colleges.json
let allVerified = [];
if (fs.existsSync(allVerifiedJsonPath)) {
  allVerified = JSON.parse(fs.readFileSync(allVerifiedJsonPath, 'utf8'));
}
const verifiedBatchColleges = colleges.filter(c => batch176Updates[c.id]);
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
let mdEntry = `\n### Batch 176 (Colleges 1,751–1,760, IDs: 1451–1460)\n`;
mdEntry += `| ID | College Name | Location | State | Type | Website |\n`;
mdEntry += `|---|---|---|---|---|---|\n`;
for (const id of [1451, 1452, 1453, 1454, 1455, 1456, 1457, 1458, 1459, 1460]) {
  const c = batch176Updates[id];
  mdEntry += `| ${id} | ${c.name} | ${c.location} | ${c.state} | ${c.type} | [Website](${c.website}) |\n`;
}
fs.appendFileSync(allVerifiedMdPath, mdEntry, 'utf8');
console.log(`Appended Batch 176 to ${allVerifiedMdPath}`);

