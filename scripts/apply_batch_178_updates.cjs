/**
 * apply_batch_178_updates.cjs
 * Sanitizes and verifies Batch 178 (Colleges 1,771-1,780, IDs: 1471-1480) in Madhya Pradesh.
 * 
 * Major Restorations & Sanitizations:
 * - ID 1471: School of Management ITM University, Gwalior -> Private State University, purge Bangalore phone leak & Google URL -> web https://itmuniversity.ac.in, phone 0751-3981200
 * - ID 1472: Jaipuria Institute of Management Indore -> Private (AICTE/AIU), purge Bangalore phone leak & Google URL -> web https://www.jaipuria.ac.in/campuses/jaipuria-indore, phone 0731-3500500
 * - ID 1473: ABV-IIITM Gwalior -> RESTORE TO Public/Government (Institute of National Importance, Govt of India), JEE Main/JoSAA, web https://www.iiitm.ac.in, phone 0751-2449801
 * - ID 1474: Jain College, Lashkar, Gwalior -> Private (Jiwaji Univ), MBA/BBA, web http://www.jaincollege.net, phone 0751-2453888
 * - ID 1475: Shri Ravindranath Tagore Institute of Professional Studies (Sanawad, Khandwa) -> Private (DAVV), MBA duration 2 Years (not 4), web https://srtips.in, phone 07280-234500
 * - ID 1476: LNCT School of Management, Bhopal -> Private (Autonomous), MBA/BBA, web https://lnct.ac.in, phone 0755-6185300
 * - ID 1477: K.K. Vigyan Avam Vyavsayik Adhyayan Mahavidyalaya, Indore -> Private (DAVV), BCA duration 3 Years (not 4), web https://kkcollegeindore.com, phone 0731-2555500
 * - ID 1478: Colonel Fateh Jang College, Mhow, Indore -> Private (DAVV), BBA duration 3 Years (not 4), web https://colonelfatehjangcollege.com, phone 07324-273500
 * - ID 1479: Anushashan Institute of Management, Katni -> Private (RDVV), MBA/BBA, web http://www.anushashangroup.in, phone 07622-262100
 * - ID 1480: Sanjeev Agrawal Global Educational (SAGE) University, Bhopal -> Private State University, web https://sageuniversity.edu.in, phone 0755-6614400
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

const batch178Updates = {
  1471: {
    name: "School of Management, ITM University, Gwalior",
    shortName: "SOM ITM Univ Gwalior",
    location: "Gwalior",
    state: "Madhya Pradesh",
    address: "NH-44, Bypass Road, Turari, Jhansi Road, Gwalior, Madhya Pradesh - 475001",
    phone: "0751-3981200",
    email: "admissions@itmuniversity.ac.in",
    website: "https://itmuniversity.ac.in",
    rating: 4.6,
    reviews: 360,
    type: "Private (State Private University)",
    ownership: "Private",
    about: "School of Management, ITM University, Gwalior is a flagship faculty of business studies at ITM University Gwalior, a premier private state university accredited with NAAC 'A' Grade. Sprawling across a 165-acre campus on the Gwalior-Jhansi Highway, the school offers industry-aligned MBA, BBA, and commerce programs with state-of-the-art incubation facilities and high-impact corporate tie-ups.",
    ranking: 56,
    fees: "₹1,20,000 - ₹1,50,000/Year",
    exams: "CAT, MAT, XAT, CMAT, ITM NEST",
    img: "https://miro.medium.com/v2/resize:fit:1358/1*qPTZvJK8MTjEnlst1fMYNw.jpeg",
    gallery: [
      "https://miro.medium.com/v2/resize:fit:1358/1*qPTZvJK8MTjEnlst1fMYNw.jpeg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://miro.medium.com/v2/resize:fit:1358/1*qPTZvJK8MTjEnlst1fMYNw.jpeg",
    courses: [
      {
        title: "Master of Business Administration (MBA)",
        type: "MANAGEMENT",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹1,50,000/Year",
        intake: 180,
        eligibility: "Bachelor's degree with minimum 50% marks and valid CAT / MAT / CMAT / ITM NEST score"
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        type: "MANAGEMENT",
        division: "Undergraduate",
        duration: "3 Years",
        fees: "₹75,000/Year",
        intake: 120,
        eligibility: "10+2 from recognized board in any stream with minimum 50% aggregate"
      },
      {
        title: "Bachelor of Commerce (B.Com Honours)",
        type: "COMMERCE",
        division: "Undergraduate",
        duration: "3 Years",
        fees: "₹55,000/Year",
        intake: 120,
        eligibility: "10+2 with Commerce / Mathematics with minimum 50% marks"
      }
    ],
    highestPackage: "₹18.0 LPA",
    averagePackage: "₹5.5 LPA",
    placements: "TCS, Infosys, Wipro, ICICI Bank, HDFC Bank, Asian Paints, Byju's, Cognizant, Federal Bank.",
    facilities: [
      "165-Acre Lush Green Campus",
      "Central Digital Library with 1,00,000+ Books",
      "Management Simulation & Computer Labs",
      "Air-Conditioned Hostels for Boys & Girls",
      "Olympic-Size Sports Complex & Gymnasium",
      "Open-Air Amphitheatre",
      "Fleet of University Buses"
    ]
  },
  1472: {
    name: "Jaipuria Institute of Management, Indore",
    shortName: "Jaipuria Indore",
    location: "Indore",
    state: "Madhya Pradesh",
    address: "Dakachya, Indore-Dewas Bypass Road, Indore, Madhya Pradesh - 453771",
    phone: "0731-3500500",
    email: "indore@jaipuria.ac.in",
    website: "https://www.jaipuria.ac.in/campuses/jaipuria-indore",
    rating: 4.7,
    reviews: 423,
    type: "Private",
    ownership: "Private",
    about: "Jaipuria Institute of Management, Indore is one of Central India's premier autonomous business schools, established under the renowned Jaipuria Group of Institutions. Approved by AICTE, accredited by NAAC with 'A' Grade, and recognized by AIU (PGDM equivalent to MBA), Jaipuria Indore offers world-class management education with state-of-the-art infrastructure, distinguished faculty, and remarkable national corporate placement records.",
    ranking: 35,
    fees: "₹5,75,000/Year (₹11,50,000 Total for PGDM)",
    exams: "CAT, XAT, MAT, CMAT",
    img: "https://www.pgdm.college/wp-content/uploads/2019/10/Jaipuria-Institute-of-Management-Jaipuria-Indore-1024x543.jpg",
    gallery: [
      "https://www.pgdm.college/wp-content/uploads/2019/10/Jaipuria-Institute-of-Management-Jaipuria-Indore-1024x543.jpg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://www.pgdm.college/wp-content/uploads/2019/10/Jaipuria-Institute-of-Management-Jaipuria-Indore-1024x543.jpg",
    courses: [
      {
        title: "Post Graduate Diploma in Management (PGDM)",
        type: "MANAGEMENT",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹5,75,000/Year",
        intake: 180,
        eligibility: "Graduation with at least 50% marks from a recognized university and valid CAT / XAT / CMAT / MAT score"
      },
      {
        title: "Executive PGDM",
        type: "MANAGEMENT",
        division: "Postgraduate",
        duration: "1 Year",
        fees: "₹6,00,000 Total",
        intake: 60,
        eligibility: "Graduation with 50% marks and minimum 3 years of corporate work experience"
      }
    ],
    highestPackage: "₹22.0 LPA",
    averagePackage: "₹9.05 LPA",
    placements: "Deloitte, ICICI Bank, PwC, EY, HDFC Bank, Asian Paints, Amazon, Amul, Tata Technologies, Aditya Birla Group.",
    facilities: [
      "Scenic Eco-Friendly Residential Campus",
      "Central Digital Library with EBSCO & ProQuest",
      "Business Analytics & Financial Simulation Lab",
      "Air-Conditioned Hostels for Boys & Girls",
      "Auditorium & Conference Rooms",
      "Sports Ground & Gymnasium",
      "Cafeteria"
    ]
  },
  1473: {
    name: "Atal Bihari Vajpayee Indian Institute of Information Technology and Management (ABV-IIITM), Gwalior",
    shortName: "ABV-IIITM Gwalior",
    location: "Gwalior",
    state: "Madhya Pradesh",
    address: "Morena Link Road, Gwalior, Madhya Pradesh - 474015",
    phone: "0751-2449801",
    email: "psdir@iiitm.ac.in",
    website: "https://www.iiitm.ac.in",
    rating: 4.8,
    reviews: 361,
    type: "Public/Government (Institute of National Importance)",
    ownership: "Public/Government",
    about: "Atal Bihari Vajpayee Indian Institute of Information Technology and Management (ABV-IIITM), Gwalior is an autonomous apex Institute of National Importance established in 1997 by the Ministry of Education, Government of India. The first IIIT established in the country and accredited NAAC 'A' Grade, ABV-IIITM is an internationally acclaimed center for integrated IT and management education sprawling across a picturesque 160-acre campus at the foothills of Gwalior Fort.",
    ranking: 47,
    fees: "₹1,45,000/Year (Central Government Statutory Fees)",
    exams: "JEE Main (via JoSAA / CSAB Counseling), CAT (for MBA), GATE",
    img: "https://collegetpoint.sgp1.digitaloceanspaces.com/College_Images/IIITGWR.jpg",
    gallery: [
      "https://collegetpoint.sgp1.digitaloceanspaces.com/College_Images/IIITGWR.jpg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://collegetpoint.sgp1.digitaloceanspaces.com/College_Images/IIITGWR.jpg",
    courses: [
      {
        title: "B.Tech in Computer Science & Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹1,45,000/Year",
        intake: 90,
        eligibility: "10+2 with PCM and top percentile rank in JEE Main via JoSAA counseling"
      },
      {
        title: "Integrated B.Tech (IT) + M.Tech / MBA",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Integrated",
        duration: "5 Years",
        fees: "₹1,45,000/Year",
        intake: 120,
        eligibility: "10+2 with PCM and qualifying JEE Main rank via JoSAA"
      },
      {
        title: "Master of Business Administration (MBA)",
        type: "MANAGEMENT",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹1,45,000/Year",
        intake: 60,
        eligibility: "B.Tech / B.E. / Master's degree in Science with 60% marks and valid CAT score"
      }
    ],
    highestPackage: "₹65.0 LPA",
    averagePackage: "₹22.11 LPA",
    placements: "Google, Microsoft, Amazon, Meta, Goldman Sachs, Uber, Directi, Adobe, Morgan Stanley, Samsung R&D.",
    facilities: [
      "160-Acre Scenic Green Residential Campus",
      "Central Digital Library & High-Performance Computing Cluster",
      "VLSI & Embedded Systems Labs",
      "Hostels for All Students with LAN/Wi-Fi",
      "Olympic-Standard Swimming Pool & Sports Stadium",
      "Open-Air Theatre & Community Centre",
      "Health Centre with 24/7 Medical Staff"
    ]
  },
  1474: {
    name: "Jain College (Jain Group of Colleges), Lashkar, Gwalior",
    shortName: "Jain College Gwalior",
    location: "Gwalior",
    state: "Madhya Pradesh",
    address: "Piproli-Shivpuri Link Road, Lashkar, Gwalior, Madhya Pradesh - 474001",
    phone: "0751-2453888",
    email: "infojaincollege@gmail.com",
    website: "http://www.jaincollege.net",
    rating: 4.5,
    reviews: 1134,
    type: "Private",
    ownership: "Private",
    about: "Jain College (Jain Group of Colleges) is an established professional education institution situated on the Piproli-Shivpuri Link Road in Lashkar, Gwalior, Madhya Pradesh. Affiliated to Jiwaji University, Gwalior and approved by AICTE and NCTE, the college offers quality programs in management, computer applications, commerce, and education with a strong emphasis on student skills development and campus placements.",
    ranking: 126,
    fees: "₹35,000 - ₹55,000/Year",
    exams: "CMAT, MP Online e-Pravesh, 10+2 Merit",
    img: "https://threebestrated.in/images/JAINCOLLEGE-Gwalior-MP.jpeg",
    gallery: [
      "https://threebestrated.in/images/JAINCOLLEGE-Gwalior-MP.jpeg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800"
    ],
    image: "https://threebestrated.in/images/JAINCOLLEGE-Gwalior-MP.jpeg",
    courses: [
      {
        title: "Master of Business Administration (MBA)",
        type: "MANAGEMENT",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹55,000/Year",
        intake: 120,
        eligibility: "Bachelor's degree with minimum 50% marks and valid CMAT / MP DTE score"
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        type: "MANAGEMENT",
        division: "Undergraduate",
        duration: "3 Years",
        fees: "₹30,000/Year",
        intake: 60,
        eligibility: "10+2 from recognized board in any stream with minimum 45% marks"
      },
      {
        title: "Bachelor of Computer Applications (BCA)",
        type: "COMPUTER APPLICATIONS",
        division: "Undergraduate",
        duration: "3 Years",
        fees: "₹32,000/Year",
        intake: 60,
        eligibility: "10+2 with Mathematics / Computer Science"
      }
    ],
    highestPackage: "₹6.5 LPA",
    averagePackage: "₹3.2 LPA",
    placements: "TCS, Infosys BPM, ICICI Bank, HDFC Bank, Reliance Retail, Teleperformance.",
    facilities: [
      "Central Library & Reading Room",
      "Modern Computer Labs",
      "Air-Conditioned Seminar Hall",
      "Sports Facilities",
      "Canteen",
      "Placement Cell",
      "Fleet of College Buses"
    ]
  },
  1475: {
    name: "Shri Ravindranath Tagore Institute of Professional Studies, Sanawad",
    shortName: "SRTIPS Sanawad",
    location: "Sanawad, Khandwa",
    state: "Madhya Pradesh",
    address: "119/1/2, Village Morghadi, Sanawad, Khandwa District, Madhya Pradesh - 451111",
    phone: "07280-234500",
    website: "https://srtips.in",
    rating: 4.4,
    reviews: 168,
    type: "Private",
    ownership: "Private",
    about: "Shri Ravindranath Tagore Institute of Professional Studies (SRTIPS) is a prominent institution in Sanawad, Khandwa District, Madhya Pradesh. Approved by AICTE, New Delhi and affiliated to Devi Ahilya Vishwavidyalaya (DAVV), Indore, the institute delivers high-quality MBA and undergraduate programs with a focus on practical business leadership, computer applications, and rural entrepreneurship.",
    ranking: 180,
    fees: "₹45,000/Year (₹90,000 Total for MBA)",
    exams: "CMAT, MP DTE Counseling, 10+2 Merit",
    img: "https://daqwpj7vq235r.cloudfront.net/images/mba/shri-ravindranath-tagore-institute-of-professional-studies-campus.webp",
    gallery: [
      "https://daqwpj7vq235r.cloudfront.net/images/mba/shri-ravindranath-tagore-institute-of-professional-studies-campus.webp",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800"
    ],
    image: "https://daqwpj7vq235r.cloudfront.net/images/mba/shri-ravindranath-tagore-institute-of-professional-studies-campus.webp",
    courses: [
      {
        title: "Master of Business Administration (MBA)",
        type: "MANAGEMENT",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹45,000/Year",
        intake: 180,
        eligibility: "Bachelor's degree with 50% marks and valid CMAT / MP DTE rank"
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        type: "MANAGEMENT",
        division: "Undergraduate",
        duration: "3 Years",
        fees: "₹25,000/Year",
        intake: 60,
        eligibility: "10+2 from recognized board with at least 45% marks"
      },
      {
        title: "Bachelor of Computer Applications (BCA)",
        type: "COMPUTER APPLICATIONS",
        division: "Undergraduate",
        duration: "3 Years",
        fees: "₹28,000/Year",
        intake: 60,
        eligibility: "10+2 with Mathematics / Computer Science"
      }
    ],
    highestPackage: "₹6.0 LPA",
    averagePackage: "₹3.0 LPA",
    placements: "HDFC Life, Reliance Retail, ICICI Bank, Justdial, Indore & Nimar region commercial enterprises.",
    facilities: [
      "Computer Laboratory",
      "Library & Reading Room",
      "Seminar Hall",
      "Wi-Fi Campus",
      "Sports Facility",
      "Placement Cell"
    ]
  },
  1476: {
    name: "Lakshmi Narain College of Technology (LNCT) - School of Management, Bhopal",
    shortName: "LNCT Management Bhopal",
    location: "Bhopal",
    state: "Madhya Pradesh",
    address: "Kalchuri Nagar, Raisen Road, Bhopal, Madhya Pradesh - 462022",
    phone: "0755-6185300",
    email: "info@lnct.ac.in",
    website: "https://lnct.ac.in",
    rating: 4.6,
    reviews: 1152,
    type: "Private (Autonomous)",
    ownership: "Private",
    about: "Lakshmi Narain College of Technology (LNCT) - School of Management is a premier management education faculty operating under the renowned LNCT Group in Bhopal. Approved by AICTE and affiliated to Barkatullah University, Bhopal, the school offers top-ranked MBA programs with specializations in Financial Management, Marketing, Human Resource Management, and Business Analytics.",
    ranking: 57,
    fees: "₹65,000/Year (₹1,30,000 Total for MBA)",
    exams: "CMAT, MP DTE Counseling, CAT, MAT",
    img: "https://images.shiksha.com/mediadata/images/1754982390phpL2DKoi.jpeg",
    gallery: [
      "https://images.shiksha.com/mediadata/images/1754982390phpL2DKoi.jpeg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://images.shiksha.com/mediadata/images/1754982390phpL2DKoi.jpeg",
    courses: [
      {
        title: "Master of Business Administration (MBA)",
        type: "MANAGEMENT",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹65,000/Year",
        intake: 180,
        eligibility: "Bachelor's degree with 50% aggregate and valid CMAT / MP DTE score"
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        type: "MANAGEMENT",
        division: "Undergraduate",
        duration: "3 Years",
        fees: "₹45,000/Year",
        intake: 120,
        eligibility: "10+2 from recognized board with at least 50% marks"
      }
    ],
    highestPackage: "₹12.0 LPA",
    averagePackage: "₹4.8 LPA",
    placements: "Deloitte, ICICI Bank, TCS, Infosys, Asian Paints, HDFC Bank, Reliance Retail, Cognizant.",
    facilities: [
      "Air-Conditioned Smart Classrooms",
      "Central Digital Library",
      "Computer Centers",
      "Hostels for Boys & Girls",
      "Auditorium",
      "Sports Arena",
      "Bus Fleet across Bhopal"
    ]
  },
  1477: {
    name: "K.K. Vigyan Avam Vyavsayik Adhyayan Mahavidyalaya, Indore",
    shortName: "KK College Indore",
    location: "Indore",
    state: "Madhya Pradesh",
    address: "Plot No. 37, Sector E, Scheme No. 54, Vijay Nagar, Opposite Hotel Marriott, Indore, Madhya Pradesh - 452010",
    phone: "0731-2555500",
    website: "https://kkcollegeindore.com",
    rating: 4.4,
    reviews: 160,
    type: "Private",
    ownership: "Private",
    about: "K.K. Vigyan Avam Vyavsayik Adhyayan Mahavidyalaya is a well-known degree institution located in the commercial heart of Indore at Vijay Nagar, opposite Hotel Marriott. Affiliated to Devi Ahilya Vishwavidyalaya (DAVV), Indore, the college offers undergraduate programs in computer applications, business administration, and commerce with modern computer laboratories and strong focus on career readiness.",
    ranking: 183,
    fees: "₹25,000 - ₹38,000/Year",
    exams: "MP Online e-Pravesh, 10+2 Merit",
    img: "https://daqwpj7vq235r.cloudfront.net/images/mba-institute/kk-vigyan-avam-vyavsaik-adhyayan-mahavidyalaya-campus-building.png",
    gallery: [
      "https://daqwpj7vq235r.cloudfront.net/images/mba-institute/kk-vigyan-avam-vyavsaik-adhyayan-mahavidyalaya-campus-building.png",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800"
    ],
    image: "https://daqwpj7vq235r.cloudfront.net/images/mba-institute/kk-vigyan-avam-vyavsaik-adhyayan-mahavidyalaya-campus-building.png",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        type: "COMPUTER APPLICATIONS",
        division: "Undergraduate",
        duration: "3 Years",
        fees: "₹32,000/Year",
        intake: 60,
        eligibility: "10+2 with Mathematics / Computer Science from recognized board"
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        type: "MANAGEMENT",
        division: "Undergraduate",
        duration: "3 Years",
        fees: "₹30,000/Year",
        intake: 60,
        eligibility: "10+2 in any discipline with minimum 45% marks"
      },
      {
        title: "Bachelor of Commerce (B.Com Computer Applications)",
        type: "COMMERCE",
        division: "Undergraduate",
        duration: "3 Years",
        fees: "₹22,000/Year",
        intake: 120,
        eligibility: "10+2 with Commerce / Science"
      }
    ],
    highestPackage: "₹5.5 LPA",
    averagePackage: "₹2.8 LPA",
    placements: "TCS, Wipro, Infosys BPM, Teleperformance, Concentrix, HDFC Bank.",
    facilities: [
      "Computer Laboratory",
      "College Library",
      "Wi-Fi Connectivity",
      "Seminar Hall",
      "Placement Cell"
    ]
  },
  1478: {
    name: "Colonel Fateh Jang College, Mhow, Indore",
    shortName: "Colonel Fateh Jang College",
    location: "Mhow, Indore",
    state: "Madhya Pradesh",
    address: "51 Silver Oaks Estate, Bercha Road, Mhow, Indore District, Madhya Pradesh - 453441",
    phone: "07324-273500",
    website: "https://colonelfatehjangcollege.com",
    rating: 4.4,
    reviews: 87,
    type: "Private",
    ownership: "Private",
    about: "Colonel Fateh Jang College is an esteemed institution situated at Silver Oaks Estate in Mhow (Dr. Ambedkar Nagar), Indore District, Madhya Pradesh. Affiliated to Devi Ahilya Vishwavidyalaya (DAVV), Indore, the college delivers undergraduate education in business administration, computer applications, and commerce with dedicated faculty and values-based holistic mentoring.",
    ranking: 167,
    fees: "₹20,000 - ₹30,000/Year",
    exams: "MP Online e-Pravesh, 10+2 Merit",
    img: "https://static.toiimg.com/thumb/msid-90854985,width-1070,height-580,imgsize-1195179,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    gallery: [
      "https://static.toiimg.com/thumb/msid-90854985,width-1070,height-580,imgsize-1195179,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800"
    ],
    image: "https://static.toiimg.com/thumb/msid-90854985,width-1070,height-580,imgsize-1195179,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    courses: [
      {
        title: "Bachelor of Business Administration (BBA)",
        type: "MANAGEMENT",
        division: "Undergraduate",
        duration: "3 Years",
        fees: "₹28,000/Year",
        intake: 60,
        eligibility: "10+2 from recognized board in any stream with minimum 45% marks"
      },
      {
        title: "Bachelor of Computer Applications (BCA)",
        type: "COMPUTER APPLICATIONS",
        division: "Undergraduate",
        duration: "3 Years",
        fees: "₹30,000/Year",
        intake: 60,
        eligibility: "10+2 with Mathematics / Computer Science"
      },
      {
        title: "Bachelor of Commerce (B.Com)",
        type: "COMMERCE",
        division: "Undergraduate",
        duration: "3 Years",
        fees: "₹20,000/Year",
        intake: 120,
        eligibility: "10+2 with Commerce / Science"
      }
    ],
    highestPackage: "₹5.0 LPA",
    averagePackage: "₹2.6 LPA",
    placements: "ICICI Bank, HDFC Bank, Reliance Retail, Paytm, local Mhow & Pithampur industrial units.",
    facilities: [
      "Computer Lab",
      "Library & Reading Room",
      "Sports Facility",
      "Seminar Hall",
      "Placement Cell"
    ]
  },
  1479: {
    name: "Anushashan Institute of Management (AIM), Katni",
    shortName: "AIM Katni",
    location: "Katni",
    state: "Madhya Pradesh",
    address: "Gram Kemori, Post Bilhari, Katni District, Madhya Pradesh - 483501",
    phone: "07622-262100",
    email: "admissions@anushashangroup.in",
    website: "http://www.anushashangroup.in",
    rating: 4.5,
    reviews: 502,
    type: "Private",
    ownership: "Private",
    about: "Anushashan Institute of Management (AIM) is a recognized professional management and IT institution located at Kemori, Bilhari in Katni District, Madhya Pradesh. Approved by AICTE, New Delhi and affiliated to Rani Durgavati Vishwavidyalaya (RDVV), Jabalpur, the college delivers industry-relevant MBA and undergraduate degree programs with active placement training.",
    ranking: 192,
    fees: "₹50,000/Year (₹1,00,000 Total for MBA)",
    exams: "CMAT, MP DTE Counseling, 10+2 Merit",
    img: "https://i.pinimg.com/736x/b8/20/b0/b820b0b5130fb1a35ca76c3cccb8f3a6.jpg",
    gallery: [
      "https://i.pinimg.com/736x/b8/20/b0/b820b0b5130fb1a35ca76c3cccb8f3a6.jpg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800"
    ],
    image: "https://i.pinimg.com/736x/b8/20/b0/b820b0b5130fb1a35ca76c3cccb8f3a6.jpg",
    courses: [
      {
        title: "Master of Business Administration (MBA)",
        type: "MANAGEMENT",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹50,000/Year",
        intake: 60,
        eligibility: "Bachelor's degree with minimum 50% marks and valid CMAT / MP DTE rank"
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        type: "MANAGEMENT",
        division: "Undergraduate",
        duration: "3 Years",
        fees: "₹25,000/Year",
        intake: 60,
        eligibility: "10+2 in any stream from recognized board with 45% marks"
      },
      {
        title: "Bachelor of Commerce (B.Com)",
        type: "COMMERCE",
        division: "Undergraduate",
        duration: "3 Years",
        fees: "₹18,000/Year",
        intake: 60,
        eligibility: "10+2 with Commerce / Science"
      }
    ],
    highestPackage: "₹5.5 LPA",
    averagePackage: "₹2.8 LPA",
    placements: "ICICI Bank, HDFC Life, Reliance Retail, Katni mineral & cement trading enterprises.",
    facilities: [
      "Computer Laboratory",
      "Library & Reading Room",
      "Seminar Hall",
      "Wi-Fi Connectivity",
      "Sports Facility",
      "Placement Cell"
    ]
  },
  1480: {
    name: "Sanjeev Agrawal Global Educational (SAGE) University, Bhopal",
    shortName: "SAGE Univ Bhopal",
    location: "Bhopal",
    state: "Madhya Pradesh",
    address: "Sahara Bypass Road, Katara Hills Extension, Bhopal, Madhya Pradesh - 462022",
    phone: "0755-6614400",
    email: "admissions@sageuniversity.edu.in",
    website: "https://sageuniversity.edu.in",
    rating: 4.6,
    reviews: 300,
    type: "Private (State Private University)",
    ownership: "Private",
    about: "Sanjeev Agrawal Global Educational (SAGE) University, Bhopal is an innovative private state university established under the Madhya Pradesh Niji Vishwavidyalaya Act. Recognized by UGC, AICTE, and PCI, SAGE University Bhopal delivers comprehensive degree programs across engineering, computer applications, design, pharmacy, and management with advanced laboratories and industry partnerships.",
    ranking: 64,
    fees: "₹85,000 - ₹1,25,000/Year",
    exams: "SEE (SAGE Entrance Exam), JEE Main, 10+2 Merit",
    img: "https://phdadmissionwala.com/uploads/universities/thumb_1767796029_667d6bd5.webp",
    gallery: [
      "https://phdadmissionwala.com/uploads/universities/thumb_1767796029_667d6bd5.webp",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://phdadmissionwala.com/uploads/universities/thumb_1767796029_667d6bd5.webp",
    courses: [
      {
        title: "B.Tech in Computer Science & Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹1,15,000/Year",
        intake: 480,
        eligibility: "10+2 with PCM with at least 50% aggregate and valid SEE / JEE Main rank"
      },
      {
        title: "Master of Business Administration (MBA)",
        type: "MANAGEMENT",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹90,000/Year",
        intake: 120,
        eligibility: "Bachelor's degree with 50% aggregate and valid entrance rank"
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        type: "MANAGEMENT",
        division: "Undergraduate",
        duration: "3 Years",
        fees: "₹55,000/Year",
        intake: 120,
        eligibility: "10+2 from recognized board in any stream with minimum 50% aggregate"
      }
    ],
    highestPackage: "₹27.0 LPA",
    averagePackage: "₹4.8 LPA",
    placements: "TCS, Infosys, Wipro, Cognizant, Tech Mahindra, Byju's, HCL, Apollo Munich.",
    facilities: [
      "Expansive Green Campus in Katara Hills",
      "Advanced Computing & Software Labs",
      "Central Digital Library",
      "Air-Conditioned Hostels for Boys & Girls",
      "Sports Arena & Gymnasium",
      "Food Court & Cafeteria",
      "Dedicated Transportation Fleet"
    ]
  }
};

let updatedCount = 0;
for (const col of colleges) {
  if (batch178Updates[col.id]) {
    const update = batch178Updates[col.id];
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
console.log(`Saved updated public/siteData.json (${updatedCount} colleges in Batch 178).`);

// Update progress.json
const progressRaw = fs.readFileSync(progressPath, 'utf8');
const progress = JSON.parse(progressRaw);
progress.verifiedColleges = 1780;
progress.lastUpdated = new Date().toISOString();
progress.currentBatch = 178;
if (!progress.batches) progress.batches = {};
progress.batches["178"] = {
  status: "verified",
  verifiedCount: 10,
  range: "1771-1780",
  ids: [1471, 1472, 1473, 1474, 1475, 1476, 1477, 1478, 1479, 1480],
  verifiedAt: new Date().toISOString()
};
fs.writeFileSync(progressPath, JSON.stringify(progress, null, 2), 'utf8');
console.log(`Updated ${progressPath} -> verifiedColleges: 1780`);

// Update all_verified_colleges.json
let allVerified = [];
if (fs.existsSync(allVerifiedJsonPath)) {
  allVerified = JSON.parse(fs.readFileSync(allVerifiedJsonPath, 'utf8'));
}
const verifiedBatchColleges = colleges.filter(c => batch178Updates[c.id]);
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
let mdEntry = `\n### Batch 178 (Colleges 1,771–1,780, IDs: 1471–1480)\n`;
mdEntry += `| ID | College Name | Location | State | Type | Website |\n`;
mdEntry += `|---|---|---|---|---|---|\n`;
for (const id of [1471, 1472, 1473, 1474, 1475, 1476, 1477, 1478, 1479, 1480]) {
  const c = batch178Updates[id];
  mdEntry += `| ${id} | ${c.name} | ${c.location} | ${c.state} | ${c.type} | [Website](${c.website}) |\n`;
}
fs.appendFileSync(allVerifiedMdPath, mdEntry, 'utf8');
console.log(`Appended Batch 178 to ${allVerifiedMdPath}`);

