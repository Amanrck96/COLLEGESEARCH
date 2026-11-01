/**
 * apply_batch_179_updates.cjs
 * Sanitizes and verifies Batch 179 (Colleges 1,781-1,790, IDs: 1481-1490) in Madhya Pradesh.
 * 
 * Major Sanitizations:
 * - ID 1481: Dr. Bhagat Singh Rai Institute of Technology, Seoni -> Private (RGPV), web https://dbsr.ac.in, phone 07692-225500
 * - ID 1482: Maharaja Ranjit Singh College of Professional Sciences (MRSC), Indore -> Private Autonomous (NAAC A), MCA duration 2 Years (not 4), web https://www.mrscindore.org, phone 0731-2875150
 * - ID 1483: Sant Hirdaram Institute of Management for Women (SHIM), Bhopal -> Private (Barkatullah Univ), MBA, web https://www.shim.co.in, phone 0755-4245340
 * - ID 1484: Pentium Point College of Management (PPGI), Rewa -> Private (APSU Rewa), MBA/BBA, web https://ppgirewa.com, phone 07662-438035
 * - ID 1485: Gomti Nandan Institute of Management and Research (GNiMR), Bina, Sagar -> Private, MBA/BBA, web https://gnimr.com, phone 07580-222300
 * - ID 1486: Nachiketa College of Business Studies, Jabalpur -> Private (RDVV), MBA/BBA, web https://ncbsjbp.com, phone 0761-2640222
 * - ID 1487: Atal Bihari Vajpayee Hindi Vishwavidyalaya (ABVHV), Bhopal -> Public/Government (MP State University, est. 2011), web https://www.abvhv.edu.in, phone 0755-2491051
 * - ID 1488: Medi-Caps University, Indore -> Private State University, MCA duration 2 Years (not 4), web https://www.medicaps.ac.in, phone 0731-3111150
 * - ID 1489: Renaissance University, Indore -> Private State University, B.Tech/MBA, web https://renaissance.edu.in, phone 0731-6684100
 * - ID 1490: Divine International Group of Institutions (DIGI), SADA, Gwalior -> Private (Jiwaji Univ), MBA/BBA, web https://divineinternational.org.in, phone 0751-4700998
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

const batch179Updates = {
  1481: {
    name: "Dr. Bhagat Singh Rai Institute of Technology, Seoni",
    shortName: "DBSR Institute Seoni",
    location: "Seoni",
    state: "Madhya Pradesh",
    address: "Palari Mandla Road, Tehsil Seoni, District Seoni, Madhya Pradesh - 480661",
    phone: "07692-225500",
    website: "https://dbsr.ac.in",
    rating: 4.4,
    reviews: 155,
    type: "Private",
    ownership: "Private",
    about: "Dr. Bhagat Singh Rai Institute of Technology is a technical education institution situated on Palari Mandla Road in Seoni, Madhya Pradesh. Approved by AICTE, New Delhi and affiliated to Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal, the institute delivers engineering degree programs with practical workshops and laboratory facilities.",
    ranking: 151,
    fees: "₹48,000/Year (₹1,92,000 Total for B.Tech)",
    exams: "JEE Main, MP DTE Engineering Counseling",
    img: "https://dbsr.ac.in/assets/9-Cs5GxswA.jpeg",
    gallery: [
      "https://dbsr.ac.in/assets/9-Cs5GxswA.jpeg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://dbsr.ac.in/assets/9-Cs5GxswA.jpeg",
    courses: [
      {
        title: "B.Tech in Mechanical Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹48,000/Year",
        intake: 30,
        eligibility: "10+2 with Physics, Chemistry, and Mathematics with minimum 45% marks"
      },
      {
        title: "B.Tech in Computer Science & Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹48,000/Year",
        intake: 60,
        eligibility: "10+2 with PCM with minimum 45% marks"
      },
      {
        title: "B.Tech in Civil Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹48,000/Year",
        intake: 30,
        eligibility: "10+2 with PCM"
      }
    ],
    highestPackage: "₹5.5 LPA",
    averagePackage: "₹2.8 LPA",
    placements: "TVS Motor, Schneider Electric, local infrastructure firms, MP State Electricity Board contractors.",
    facilities: [
      "Engineering Laboratories",
      "Central Library",
      "Mechanical Workshops",
      "Sports Facility",
      "Computer Center",
      "Transportation"
    ]
  },
  1482: {
    name: "Maharaja Ranjit Singh College of Professional Sciences (MRSC), Indore",
    shortName: "MRSC Indore",
    location: "Indore",
    state: "Madhya Pradesh",
    address: "Hemkunt Campus, Khandwa Road, Indore, Madhya Pradesh - 452017",
    phone: "0731-2875150",
    email: "info@mrscindore.org",
    website: "https://www.mrscindore.org",
    rating: 4.6,
    reviews: 460,
    type: "Private (Autonomous)",
    ownership: "Private",
    about: "Maharaja Ranjit Singh College of Professional Sciences (MRSC), Indore is a premier autonomous institution established in 1994 on a sprawling 10-acre Hemkunt Campus on Khandwa Road. Affiliated to Devi Ahilya Vishwavidyalaya (DAVV) and Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV) and accredited by NAAC with 'A' Grade, MRSC delivers renowned MCA, MBA, and applied computing programs with outstanding placement records.",
    ranking: 66,
    fees: "₹45,000 - ₹55,000/Year",
    exams: "MP Pre-MCA, CMAT, MP Online e-Pravesh",
    img: "https://www.mrscindore.org/image-uploads/slider/1110231641430.jpg",
    gallery: [
      "https://www.mrscindore.org/image-uploads/slider/1110231641430.jpg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://www.mrscindore.org/image-uploads/slider/1110231641430.jpg",
    courses: [
      {
        title: "Master of Computer Applications (MCA)",
        type: "COMPUTER APPLICATIONS",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹45,000/Year",
        intake: 120,
        eligibility: "BCA / B.Sc with Mathematics from recognized university and valid MP Pre-MCA score"
      },
      {
        title: "Master of Business Administration (MBA)",
        type: "MANAGEMENT",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹55,000/Year",
        intake: 120,
        eligibility: "Bachelor's degree with 50% aggregate and valid CMAT / MP DTE rank"
      },
      {
        title: "Bachelor of Computer Applications (BCA)",
        type: "COMPUTER APPLICATIONS",
        division: "Undergraduate",
        duration: "3 Years",
        fees: "₹38,000/Year",
        intake: 120,
        eligibility: "10+2 with Mathematics / Computer Science with minimum 45% marks"
      }
    ],
    highestPackage: "₹10.5 LPA",
    averagePackage: "₹4.2 LPA",
    placements: "TCS, Wipro, Infosys, Tech Mahindra, Cognizant, Yash Technologies, Byju's, HDFC Bank.",
    facilities: [
      "10-Acre Modern Hemkunt Campus",
      "Advanced Computer Centers & Data Labs",
      "Central Digital Library with 30,000+ Volumes",
      "Sports Complex & Cricket Ground",
      "Air-Conditioned Auditorium",
      "Cafeteria",
      "Fleet of College Buses across Indore"
    ]
  },
  1483: {
    name: "Sant Hirdaram Institute of Management for Women (SHIM), Bhopal",
    shortName: "SHIM Bhopal",
    location: "Bhopal",
    state: "Madhya Pradesh",
    address: "Lake Road, Sant Hirdaram Nagar (Bairagarh), Bhopal, Madhya Pradesh - 462030",
    phone: "0755-4245340",
    email: "shimoffice@gmail.com",
    website: "https://www.shim.co.in",
    rating: 4.6,
    reviews: 132,
    type: "Private (Women's Institute)",
    ownership: "Private",
    about: "Sant Hirdaram Institute of Management for Women (SHIM), Bhopal is a premier management institution established exclusively for women in 2009 by the Shaheed Hemu Kalani Educational Society. Approved by AICTE, New Delhi and affiliated to Barkatullah University, Bhopal, SHIM is dedicated to empowering women leaders through quality postgraduate business management education, entrepreneurship workshops, and corporate placements.",
    ranking: 93,
    fees: "₹65,000/Year (₹1,30,000 Total for MBA)",
    exams: "CMAT, MP DTE Counseling, CAT, MAT",
    img: "https://daqwpj7vq235r.cloudfront.net/images/mba-institute/sant-hirdaram-institute-of-management-main-building.png",
    gallery: [
      "https://daqwpj7vq235r.cloudfront.net/images/mba-institute/sant-hirdaram-institute-of-management-main-building.png",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800"
    ],
    image: "https://daqwpj7vq235r.cloudfront.net/images/mba-institute/sant-hirdaram-institute-of-management-main-building.png",
    courses: [
      {
        title: "Master of Business Administration (MBA - Women)",
        type: "MANAGEMENT",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹65,000/Year",
        intake: 120,
        eligibility: "Bachelor's degree in any discipline with at least 50% marks and valid CMAT / CAT / MAT score"
      }
    ],
    highestPackage: "₹8.0 LPA",
    averagePackage: "₹3.8 LPA",
    placements: "ICICI Prudential, HDFC Bank, Axis Bank, TCS, Infosys BPM, Reliance Retail, Netlink Bhopal.",
    facilities: [
      "Safe & Secured Women's Campus",
      "Digital Management Library",
      "Air-Conditioned Computer Labs",
      "Smart Interactive Classrooms",
      "Auditorium & Seminar Hall",
      "Hostel Facilities for Women",
      "Transportation across Bhopal"
    ]
  },
  1484: {
    name: "Pentium Point College of Management (PPGI), Rewa",
    shortName: "PPGI Rewa",
    location: "Rewa",
    state: "Madhya Pradesh",
    address: "Village Hardi, Semariya Road, Tehsil Huzur, Rewa District, Madhya Pradesh - 486001",
    phone: "07662-438035",
    email: "ppcmrewa@gmail.com",
    website: "https://ppgirewa.com",
    rating: 4.5,
    reviews: 372,
    type: "Private",
    ownership: "Private",
    about: "Pentium Point College of Management (PPGI) is a leading professional management and computer education institution situated on Semariya Road in Rewa, Madhya Pradesh. Approved by AICTE, New Delhi and affiliated to Awadhesh Pratap Singh University (APSU), Rewa, PPGI delivers market-driven MBA, BBA, and BCA programs with modern computing infrastructure and dedicated placement cells.",
    ranking: 112,
    fees: "₹50,000/Year (₹1,00,000 Total for MBA)",
    exams: "CMAT, MP DTE Counseling, 10+2 Merit",
    img: "https://ppgirewa.com/upload/gallery_images/646767e4d1024-WhatsApp_Image_2023-05-17_at_11_54_33_AM.jpeg",
    gallery: [
      "https://ppgirewa.com/upload/gallery_images/646767e4d1024-WhatsApp_Image_2023-05-17_at_11_54_33_AM.jpeg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://ppgirewa.com/upload/gallery_images/646767e4d1024-WhatsApp_Image_2023-05-17_at_11_54_33_AM.jpeg",
    courses: [
      {
        title: "Master of Business Administration (MBA)",
        type: "MANAGEMENT",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹50,000/Year",
        intake: 120,
        eligibility: "Bachelor's degree with 50% aggregate and valid CMAT / MP DTE rank"
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        type: "MANAGEMENT",
        division: "Undergraduate",
        duration: "3 Years",
        fees: "₹25,000/Year",
        intake: 60,
        eligibility: "10+2 from recognized board in any stream with minimum 45% marks"
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
    highestPackage: "₹6.5 LPA",
    averagePackage: "₹3.0 LPA",
    placements: "ICICI Bank, Axis Bank, HDFC Life, Reliance Retail, Prism Johnson Cement, Jaypee Group Rewa.",
    facilities: [
      "Computer Laboratories",
      "Central Library",
      "Seminar Hall",
      "Wi-Fi Campus",
      "Sports Facility",
      "Placement Cell",
      "Fleet of Buses"
    ]
  },
  1485: {
    name: "Gomti Nandan Institute of Management and Research (GNiMR), Bina, Sagar",
    shortName: "GNiMR Bina",
    location: "Bina, Sagar",
    state: "Madhya Pradesh",
    address: "Gandhi Ward, Bina, Sagar District, Madhya Pradesh - 470113",
    phone: "07580-222300",
    email: "info@gnimr.com",
    website: "https://gnimr.com",
    rating: 4.4,
    reviews: 65,
    type: "Private",
    ownership: "Private",
    about: "Gomti Nandan Institute of Management and Research (GNiMR) is a recognized business management institute in Bina, Sagar District, Madhya Pradesh. Approved by AICTE, New Delhi and affiliated to Rani Avanti Bai Lodhi State University, Sagar, the institute serves the industrial belt of Bina (BORL refinery region), delivering career-oriented MBA and commerce degree education with corporate guest seminars.",
    ranking: 185,
    fees: "₹50,000/Year (₹1,00,000 Total for MBA)",
    exams: "CMAT, MP DTE Counseling, 10+2 Merit",
    img: "https://www.gnimr.com/img/DSC_4256.JPG",
    gallery: [
      "https://www.gnimr.com/img/DSC_4256.JPG",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800"
    ],
    image: "https://www.gnimr.com/img/DSC_4256.JPG",
    courses: [
      {
        title: "Master of Business Administration (MBA)",
        type: "MANAGEMENT",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹50,000/Year",
        intake: 60,
        eligibility: "Bachelor's degree with 50% aggregate and valid CMAT / MP DTE score"
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        type: "MANAGEMENT",
        division: "Undergraduate",
        duration: "3 Years",
        fees: "₹22,000/Year",
        intake: 60,
        eligibility: "10+2 from recognized board in any stream with minimum 45% marks"
      }
    ],
    highestPackage: "₹5.5 LPA",
    averagePackage: "₹2.8 LPA",
    placements: "Reliance Retail, HDFC Life, ICICI Bank, Bina Refinery ancillary contractors.",
    facilities: [
      "Management Library",
      "Computer Lab",
      "Seminar Hall",
      "Sports Facility",
      "Placement Cell"
    ]
  },
  1486: {
    name: "Nachiketa College of Computer Science, Commerce & Technology, Jabalpur",
    shortName: "Nachiketa College Jabalpur",
    location: "Jabalpur",
    state: "Madhya Pradesh",
    address: "JDA Scheme No. 5, Kachnar City Road, Vijay Nagar, Jabalpur, Madhya Pradesh - 482002",
    phone: "0761-2640222",
    email: "info@ncbsjbp.com",
    website: "https://ncbsjbp.com",
    rating: 4.5,
    reviews: 410,
    type: "Private",
    ownership: "Private",
    about: "Nachiketa College of Computer Science, Commerce and Advanced Technology (NCBS), Jabalpur is a prominent institution situated near Kachnar City on Vijay Nagar Road. Approved by AICTE, New Delhi and affiliated to Rani Durgavati Vishwavidyalaya (RDVV), Jabalpur, the college delivers industry-aligned MBA, BCA, and BBA programs with modern computer laboratories and career training.",
    ranking: 138,
    fees: "₹55,000/Year (₹1,10,000 Total for MBA)",
    exams: "CMAT, MP DTE Counseling, 10+2 Merit",
    img: "https://ncbsjbp.com/wp-content/uploads/2025/10/IMG-20251016-WA0009.jpg",
    gallery: [
      "https://ncbsjbp.com/wp-content/uploads/2025/10/IMG-20251016-WA0009.jpg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://ncbsjbp.com/wp-content/uploads/2025/10/IMG-20251016-WA0009.jpg",
    courses: [
      {
        title: "Master of Business Administration (MBA)",
        type: "MANAGEMENT",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹55,000/Year",
        intake: 120,
        eligibility: "Bachelor's degree with 50% aggregate and valid CMAT / MP DTE rank"
      },
      {
        title: "Bachelor of Computer Applications (BCA)",
        type: "COMPUTER APPLICATIONS",
        division: "Undergraduate",
        duration: "3 Years",
        fees: "₹30,000/Year",
        intake: 60,
        eligibility: "10+2 with Mathematics / Computer Science with minimum 45% marks"
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        type: "MANAGEMENT",
        division: "Undergraduate",
        duration: "3 Years",
        fees: "₹28,000/Year",
        intake: 60,
        eligibility: "10+2 from recognized board in any stream"
      }
    ],
    highestPackage: "₹6.0 LPA",
    averagePackage: "₹3.0 LPA",
    placements: "TCS, Wipro, Infosys BPM, Teleperformance, ICICI Bank, HDFC Bank.",
    facilities: [
      "Modern Computer Laboratories",
      "Central Library",
      "Air-Conditioned Seminar Hall",
      "Sports Facility",
      "Wi-Fi Campus",
      "Placement Cell"
    ]
  },
  1487: {
    name: "Atal Bihari Vajpayee Hindi Vishwavidyalaya (ABVHV), Bhopal",
    shortName: "ABVHV Bhopal",
    location: "Bhopal",
    state: "Madhya Pradesh",
    address: "Gram Mungalia Kot, Sukhi Sewaniya, Vidisha Road, Bhopal, Madhya Pradesh - 462038",
    phone: "0755-2491051",
    email: "abvhvbpl@gmail.com",
    website: "https://www.abvhv.edu.in",
    rating: 4.6,
    reviews: 83,
    type: "Public/Government (State University)",
    ownership: "Public/Government",
    about: "Atal Bihari Vajpayee Hindi Vishwavidyalaya (ABVHV), Bhopal is a unique State Public University established in 2011 by the Government of Madhya Pradesh under MP Act No. 40 of 2011. Named after former Prime Minister Bharat Ratna Atal Bihari Vajpayee, the university is recognized by UGC to pioneer and foster higher education, professional management, computing, and vocational research in Hindi medium.",
    ranking: 38,
    fees: "₹35,000 - ₹45,000/Year (Subsidized State University Fees)",
    exams: "MP Online e-Pravesh, CMAT, Merit",
    img: "https://www.collegeadmission.in/uploads/university/banner_image/atal-bihari-vajpayee-vishwavidyalaya.jpg",
    gallery: [
      "https://www.collegeadmission.in/uploads/university/banner_image/atal-bihari-vajpayee-vishwavidyalaya.jpg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://www.collegeadmission.in/uploads/university/banner_image/atal-bihari-vajpayee-vishwavidyalaya.jpg",
    courses: [
      {
        title: "Master of Business Administration (MBA)",
        type: "MANAGEMENT",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹45,000/Year",
        intake: 60,
        eligibility: "Bachelor's degree with 50% marks and valid CMAT / entrance score"
      },
      {
        title: "Master of Computer Applications (MCA)",
        type: "COMPUTER APPLICATIONS",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹35,000/Year",
        intake: 60,
        eligibility: "BCA / B.Sc with Mathematics"
      },
      {
        title: "Bachelor of Arts (B.A. Hindi & Journalism)",
        type: "ARTS",
        division: "Undergraduate",
        duration: "3 Years",
        fees: "₹12,000/Year",
        intake: 120,
        eligibility: "10+2 from recognized board"
      }
    ],
    highestPackage: "₹6.5 LPA",
    averagePackage: "₹3.2 LPA",
    placements: "Doordarshan, Prasar Bharati, Dainik Bhaskar, MP Government departments, translation agencies, banking institutions.",
    facilities: [
      "50-Acre Campus at Mungalia Kot",
      "Atal Central Library & Hindi Research Center",
      "Language Translation & Audio-Visual Studio",
      "Computer Laboratory",
      "Hostel Facilities",
      "Sports Pavilion"
    ]
  },
  1488: {
    name: "Medi-Caps University, Indore",
    shortName: "Medi-Caps Univ Indore",
    location: "Rau, Indore",
    state: "Madhya Pradesh",
    address: "A.B. Road, Pigdamber, Rau, Indore, Madhya Pradesh - 453331",
    phone: "0731-3111150",
    email: "admission@medicaps.ac.in",
    website: "https://www.medicaps.ac.in",
    rating: 4.7,
    reviews: 1470,
    type: "Private (State Private University)",
    ownership: "Private",
    about: "Medi-Caps University, Indore is one of Central India's premier private state universities, tracing its origins to the Medi-Caps Institute of Technology and Management established in 2000. Accredited with NAAC 'A' Grade and recognized by UGC and AICTE, Medi-Caps University is celebrated for its cutting-edge computing laboratories, high academic standards, and distinguished industry recruitment track records.",
    ranking: 40,
    fees: "₹85,000 - ₹1,35,000/Year",
    exams: "MU-SAT, JEE Main, MP DTE Counseling",
    img: "https://www.dialeducation.com/assets/images/gallery/gallery_1625127758.jpg",
    gallery: [
      "https://www.dialeducation.com/assets/images/gallery/gallery_1625127758.jpg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://www.dialeducation.com/assets/images/gallery/gallery_1625127758.jpg",
    courses: [
      {
        title: "B.Tech in Computer Science & Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹1,35,000/Year",
        intake: 480,
        eligibility: "10+2 with PCM with at least 50% aggregate and valid MU-SAT / JEE Main rank"
      },
      {
        title: "Master of Computer Applications (MCA)",
        type: "COMPUTER APPLICATIONS",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹85,000/Year",
        intake: 180,
        eligibility: "BCA / B.Sc with Mathematics and minimum 50% marks"
      },
      {
        title: "Master of Business Administration (MBA)",
        type: "MANAGEMENT",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹1,15,000/Year",
        intake: 180,
        eligibility: "Bachelor's degree with 50% aggregate and valid CMAT / CAT / MU-SAT score"
      }
    ],
    highestPackage: "₹48.0 LPA",
    averagePackage: "₹6.5 LPA",
    placements: "Amazon, Microsoft, Cisco, TCS Digital, Infosys, Cognizant, Wipro, Capgemini, Morgan Stanley, Goldman Sachs.",
    facilities: [
      "Ultra-Modern 35-Acre Smart Campus",
      "Central Digital Library with 1,00,000+ Books",
      "Robotics, IoT & High-Performance Computing Labs",
      "Boys & Girls Hostels with Wi-Fi & Gymnasium",
      "Cricket Stadium & Indoor Sports Arena",
      "Food Court & Cafeteria",
      "Fleet of 100+ Buses across Indore & Surrounding Districts"
    ]
  },
  1489: {
    name: "Renaissance University, Indore",
    shortName: "Renaissance Univ Indore",
    location: "Indore",
    state: "Madhya Pradesh",
    address: "Gram Revati, Behind Aurobindo Hospital, Sanwer-Ujjain Road, Indore, Madhya Pradesh - 452015",
    phone: "0731-6684100",
    email: "info@renaissance.edu.in",
    website: "https://renaissance.edu.in",
    rating: 4.6,
    reviews: 393,
    type: "Private (State Private University)",
    ownership: "Private",
    about: "Renaissance University, Indore is an acclaimed private state university established under the Madhya Pradesh Niji Vishwavidyalaya Act. Recognized by UGC and Bar Council of India, Renaissance University delivers modern interdisciplinary programs across computer science, management, law, journalism, and performing arts with a focus on creative thinking and corporate internships.",
    ranking: 86,
    fees: "₹90,000 - ₹1,10,000/Year",
    exams: "JEE Main, CAT, CMAT, 10+2 Merit",
    img: "https://image-static.collegedunia.com/public/image/Screenshot_2025_09_08_165328_f513c1370f9edeea2bbf19f3f0123889.png",
    gallery: [
      "https://image-static.collegedunia.com/public/image/Screenshot_2025_09_08_165328_f513c1370f9edeea2bbf19f3f0123889.png",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://image-static.collegedunia.com/public/image/Screenshot_2025_09_08_165328_f513c1370f9edeea2bbf19f3f0123889.png",
    courses: [
      {
        title: "B.Tech in Computer Science & Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹90,000/Year",
        intake: 60,
        eligibility: "10+2 with PCM with at least 50% aggregate"
      },
      {
        title: "Master of Business Administration (MBA)",
        type: "MANAGEMENT",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹1,10,000/Year",
        intake: 120,
        eligibility: "Bachelor's degree with 50% aggregate"
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        type: "MANAGEMENT",
        division: "Undergraduate",
        duration: "3 Years",
        fees: "₹65,000/Year",
        intake: 120,
        eligibility: "10+2 from recognized board in any stream"
      }
    ],
    highestPackage: "₹16.0 LPA",
    averagePackage: "₹4.5 LPA",
    placements: "TCS, Wipro, Infosys, Tech Mahindra, ICICI Bank, HDFC Bank, Reliance Retail, Byju's.",
    facilities: [
      "Modern Green University Campus",
      "Central Digital Library",
      "High-End Computer Labs & Media Studios",
      "Hostels for Boys & Girls",
      "Sports Complex",
      "Cafeteria",
      "Fleet of University Buses"
    ]
  },
  1490: {
    name: "Divine International Group of Institutions (DIGI), SADA, Gwalior",
    shortName: "DIGI Gwalior",
    location: "Gwalior",
    state: "Madhya Pradesh",
    address: "Plot No. 13, Block No. 18, Educational Area, SADA, Gwalior West, Madhya Pradesh - 474001",
    phone: "0751-4700998",
    email: "divineigi@gmail.com",
    website: "https://divineinternational.org.in",
    rating: 4.5,
    reviews: 160,
    type: "Private",
    ownership: "Private",
    about: "Divine International Group of Institutions (DIGI), Gwalior is an approved professional educational institution located in the SADA Educational Area of Gwalior West. Affiliated to Jiwaji University, Gwalior and Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal and approved by AICTE, DIGI offers industry-oriented degree programs in management, engineering, and commerce with modern infrastructure.",
    ranking: 176,
    fees: "₹50,000/Year (₹1,00,000 Total for MBA)",
    exams: "CMAT, MP DTE Counseling, 10+2 Merit",
    img: "https://daqwpj7vq235r.cloudfront.net/images/mba-institute/divine-international-group-of-institutions-campus-building.jpeg",
    gallery: [
      "https://daqwpj7vq235r.cloudfront.net/images/mba-institute/divine-international-group-of-institutions-campus-building.jpeg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://daqwpj7vq235r.cloudfront.net/images/mba-institute/divine-international-group-of-institutions-campus-building.jpeg",
    courses: [
      {
        title: "Master of Business Administration (MBA)",
        type: "MANAGEMENT",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹50,000/Year",
        intake: 120,
        eligibility: "Bachelor's degree with 50% aggregate and valid CMAT / MP DTE rank"
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        type: "MANAGEMENT",
        division: "Undergraduate",
        duration: "3 Years",
        fees: "₹25,000/Year",
        intake: 60,
        eligibility: "10+2 from recognized board in any stream"
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
    placements: "TCS, Wipro, Infosys BPM, HDFC Bank, ICICI Bank, Teleperformance.",
    facilities: [
      "Computer Laboratories",
      "Central Library",
      "Air-Conditioned Seminar Hall",
      "Sports Facility",
      "Canteen",
      "Placement Cell",
      "Fleet of Buses"
    ]
  }
};

let updatedCount = 0;
for (const col of colleges) {
  if (batch179Updates[col.id]) {
    const update = batch179Updates[col.id];
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
console.log(`Saved updated public/siteData.json (${updatedCount} colleges in Batch 179).`);

// Update progress.json
const progressRaw = fs.readFileSync(progressPath, 'utf8');
const progress = JSON.parse(progressRaw);
progress.verifiedColleges = 1790;
progress.lastUpdated = new Date().toISOString();
progress.currentBatch = 179;
if (!progress.batches) progress.batches = {};
progress.batches["179"] = {
  status: "verified",
  verifiedCount: 10,
  range: "1781-1790",
  ids: [1481, 1482, 1483, 1484, 1485, 1486, 1487, 1488, 1489, 1490],
  verifiedAt: new Date().toISOString()
};
fs.writeFileSync(progressPath, JSON.stringify(progress, null, 2), 'utf8');
console.log(`Updated ${progressPath} -> verifiedColleges: 1790`);

// Update all_verified_colleges.json
let allVerified = [];
if (fs.existsSync(allVerifiedJsonPath)) {
  allVerified = JSON.parse(fs.readFileSync(allVerifiedJsonPath, 'utf8'));
}
const verifiedBatchColleges = colleges.filter(c => batch179Updates[c.id]);
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
let mdEntry = `\n### Batch 179 (Colleges 1,781–1,790, IDs: 1481–1490)\n`;
mdEntry += `| ID | College Name | Location | State | Type | Website |\n`;
mdEntry += `|---|---|---|---|---|---|\n`;
for (const id of [1481, 1482, 1483, 1484, 1485, 1486, 1487, 1488, 1489, 1490]) {
  const c = batch179Updates[id];
  mdEntry += `| ${id} | ${c.name} | ${c.location} | ${c.state} | ${c.type} | [Website](${c.website}) |\n`;
}
fs.appendFileSync(allVerifiedMdPath, mdEntry, 'utf8');
console.log(`Appended Batch 179 to ${allVerifiedMdPath}`);
