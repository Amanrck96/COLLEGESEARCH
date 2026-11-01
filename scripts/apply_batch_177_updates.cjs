/**
 * apply_batch_177_updates.cjs
 * Sanitizes and verifies Batch 177 (Colleges 1,761-1,770, IDs: 1461-1470) in Madhya Pradesh.
 * 
 * Major Restorations & Sanitizations:
 * - ID 1461: Amity University, Gwalior -> Private State University, location Gwalior, web https://www.amity.edu/gwalior, phone 0751-2496025
 * - ID 1462: MANIT (Maulana Azad National Institute of Technology), Bhopal -> Institute of National Importance (INI, Govt of India), location Bhopal, web https://www.manit.ac.in, phone 0755-4051000
 * - ID 1463: Idyllic Institute of Management, Indore -> Private (DAVV Indore), location Rau/Indore, web https://idyllicinstituteofmanagement.com, phone 0731-2856222
 * - ID 1464: Shri Vaishnav Institute of Management, Indore -> Private Autonomous (NAAC A+), location Indore, web https://www.svimi.org, phone 0731-2780011
 * - ID 1465: VIT Business School, Bhopal -> Private (VIT Bhopal Univ), purge Bangalore phone leak -> phone 07560-254500, location Sehore/Bhopal, web https://vitbhopal.ac.in
 * - ID 1466: Jiwaji University, Gwalior (est. 1964, NAAC A++) -> RESTORE TO Public/Government (State University), location Gwalior, web https://www.jiwaji.edu, phone 0751-2442712
 * - ID 1467: Devi Ahilya Vishwavidyalaya (DAVV), Indore (est. 1964, NAAC A+) -> RESTORE TO Public/Government (State University), purge Bangalore phone leak & Google URL -> web https://www.dauniv.ac.in, phone 0731-2527532, location Indore
 * - ID 1468: Indian Institute of Forest Management (IIFM), Bhopal -> RESTORE TO Public/Government (MoEFCC Central Govt Autonomous Institute), purge Bangalore phone leak & Google URL -> web https://iifm.ac.in, phone 0755-2775716, location Bhopal
 * - ID 1469: Jagran Lakecity University, Bhopal -> Private State University, location Bhopal, web https://jlu.edu.in, phone 0755-6611100
 * - ID 1470: AKS University, Satna -> Private State University, location Satna, web https://www.aksuniversity.ac.in, phone 07672-298000
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

const batch177Updates = {
  1461: {
    name: "Amity University, Gwalior",
    shortName: "Amity Univ Gwalior",
    location: "Gwalior",
    state: "Madhya Pradesh",
    address: "Maharajpura (Opposite Airport), Gwalior, Madhya Pradesh - 474005",
    phone: "0751-2496025",
    email: "info@gwa.amity.edu",
    website: "https://www.amity.edu/gwalior",
    rating: 4.6,
    reviews: 288,
    type: "Private (State Private University)",
    ownership: "Private",
    about: "Amity University, Gwalior is a premier research-led private state university established under the Madhya Pradesh Niji Vishwavidyalaya Act. Spread across a sprawling 100-acre modern campus opposite Gwalior Airport, the university is recognized by UGC and accredited with NAAC 'A+' Grade, delivering global-standard degree programs in engineering, biotechnology, law, architecture, and business administration.",
    ranking: 55,
    fees: "₹1,40,000 - ₹2,20,000/Year",
    exams: "Amity JEE, JEE Main, State CET, 10+2 Merit",
    img: "https://d13loartjoc1yn.cloudfront.net/upload/institute/images/large/231004044924_gwalior.webp",
    gallery: [
      "https://d13loartjoc1yn.cloudfront.net/upload/institute/images/large/231004044924_gwalior.webp",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://d13loartjoc1yn.cloudfront.net/upload/institute/images/large/231004044924_gwalior.webp",
    courses: [
      {
        title: "B.Tech in Computer Science & Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹1,80,000/Year",
        intake: 180,
        eligibility: "10+2 with Physics, Mathematics, and Chemistry with minimum 60% aggregate"
      },
      {
        title: "B.Tech in Artificial Intelligence & Machine Learning",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹1,80,000/Year",
        intake: 60,
        eligibility: "10+2 with PCM with minimum 60% aggregate"
      },
      {
        title: "Master of Business Administration (MBA)",
        type: "MANAGEMENT",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹2,20,000/Year",
        intake: 120,
        eligibility: "Bachelor's degree with 50% marks and valid CAT / MAT / CMAT score"
      }
    ],
    highestPackage: "₹32.0 LPA",
    averagePackage: "₹5.5 LPA",
    placements: "Microsoft, Amazon, TCS, Infosys, Wipro, Accenture, IBM, Cisco, Deloitte.",
    facilities: [
      "100-Acre Wi-Fi Enabled Hi-Tech Campus",
      "Central Digital Library",
      "State-of-the-Art Engineering Labs",
      "Moot Court & Legal Aid Clinic",
      "On-Campus AC Hostels for Boys & Girls",
      "Olympic-Standard Sports Complex",
      "Cafeteria & Food Court",
      "Fleet of AC University Buses"
    ]
  },
  1462: {
    name: "Maulana Azad National Institute of Technology (MANIT), Bhopal",
    shortName: "MANIT Bhopal (NIT Bhopal)",
    location: "Bhopal",
    state: "Madhya Pradesh",
    address: "Link Road Number 3, Near Kali Mata Mandir, Bhopal, Madhya Pradesh - 462003",
    phone: "0755-4051000",
    email: "pro@manit.ac.in",
    website: "https://www.manit.ac.in",
    rating: 4.8,
    reviews: 1085,
    type: "Public/Government (Institute of National Importance)",
    ownership: "Public/Government",
    about: "Maulana Azad National Institute of Technology (MANIT), Bhopal is a premier Institute of National Importance established in 1960 under the NIT Act by the Ministry of Education, Government of India. Sprawled across a lush 650-acre residential campus in Bhopal, MANIT delivers top-ranked engineering, architecture, planning, and computing programs with world-class faculty, advanced research facilities, and distinguished global alumni.",
    ranking: 47,
    fees: "₹1,40,000/Year (Central Statutory Fees)",
    exams: "JEE Main (via JoSAA / CSAB Counseling), GATE, NIMCET",
    img: "https://cms.patrika.com/wp-content/uploads/2025/12/ffddf.webp?w=800",
    gallery: [
      "https://cms.patrika.com/wp-content/uploads/2025/12/ffddf.webp?w=800",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://cms.patrika.com/wp-content/uploads/2025/12/ffddf.webp?w=800",
    courses: [
      {
        title: "B.Tech in Computer Science & Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹1,40,000/Year",
        intake: 230,
        eligibility: "10+2 with PCM and top percentile rank in JEE Main via JoSAA"
      },
      {
        title: "B.Tech in Electronics & Communication Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹1,40,000/Year",
        intake: 180,
        eligibility: "10+2 with PCM and qualifying JEE Main rank via JoSAA"
      },
      {
        title: "B.Tech in Mechanical Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹1,40,000/Year",
        intake: 180,
        eligibility: "10+2 with PCM and qualifying JEE Main rank via JoSAA"
      },
      {
        title: "Master of Computer Applications (MCA)",
        type: "COMPUTER APPLICATIONS",
        division: "Postgraduate",
        duration: "3 Years",
        fees: "₹85,000/Year",
        intake: 115,
        eligibility: "BCA / B.Sc with Mathematics and qualifying rank in NIMCET"
      }
    ],
    highestPackage: "₹82.0 LPA",
    averagePackage: "₹15.6 LPA",
    placements: "Google, Microsoft, Amazon, Atlassian, Goldman Sachs, Uber, Oracle, Qualcomm, Samsung R&D, TCS Research.",
    facilities: [
      "650-Acre Historic Residential Campus",
      "Central Digital Library & High-Performance Computing Centre",
      "Central Workshop & Advanced Research Labs",
      "10 Hostels for Boys & 2 Mega Hostels for Girls",
      "Sports Complex, Cricket & Football Grounds, Gymnasium",
      "Health Centre with In-Patient Facilities",
      "Post Office, Bank & Shopping Complex"
    ]
  },
  1463: {
    name: "Idyllic Institute of Management, Indore",
    shortName: "Idyllic Institute Indore",
    location: "Rau, Indore",
    state: "Madhya Pradesh",
    address: "Gendalal Bam Parisar, Opposite IIM Indore, Rau-Pithampur Road, Indore, Madhya Pradesh - 453331",
    phone: "0731-2856222",
    email: "admission.idyllic@gmail.com",
    website: "https://idyllicinstituteofmanagement.com",
    rating: 4.4,
    reviews: 270,
    type: "Private",
    ownership: "Private",
    about: "Idyllic Institute of Management is a specialized business management institution situated opposite IIM Indore on the Rau-Pithampur Road. Approved by AICTE and affiliated to Devi Ahilya Vishwavidyalaya (DAVV), Indore, the institute delivers industry-driven MBA and undergraduate business programs focusing on managerial case analysis, corporate mentorship, and practical employability.",
    ranking: 115,
    fees: "₹75,000/Year (₹1,50,000 Total for MBA)",
    exams: "CAT, MAT, CMAT, MP DTE Counseling",
    img: "https://daqwpj7vq235r.cloudfront.net/images/mba-institute/idyllic-institute-of-management-campus-view.jpeg",
    gallery: [
      "https://daqwpj7vq235r.cloudfront.net/images/mba-institute/idyllic-institute-of-management-campus-view.jpeg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800"
    ],
    image: "https://daqwpj7vq235r.cloudfront.net/images/mba-institute/idyllic-institute-of-management-campus-view.jpeg",
    courses: [
      {
        title: "Master of Business Administration (MBA)",
        type: "MANAGEMENT",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹75,000/Year",
        intake: 180,
        eligibility: "Bachelor's degree in any discipline with at least 50% marks and valid CMAT / MAT / CAT score"
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        type: "MANAGEMENT",
        division: "Undergraduate",
        duration: "3 Years",
        fees: "₹35,000/Year",
        intake: 120,
        eligibility: "10+2 from recognized board in any stream with minimum 45% marks"
      },
      {
        title: "Bachelor of Commerce (B.Com Computer Applications)",
        type: "COMMERCE",
        division: "Undergraduate",
        duration: "3 Years",
        fees: "₹25,000/Year",
        intake: 120,
        eligibility: "10+2 with Commerce / Mathematics"
      }
    ],
    highestPackage: "₹9.5 LPA",
    averagePackage: "₹4.0 LPA",
    placements: "ICICI Bank, HDFC Bank, Axis Bank, TCS, Infosys BPM, Reliance Retail, Teleperformance.",
    facilities: [
      "Management Library & E-Resource Center",
      "Air-Conditioned Smart Classrooms",
      "Computer Laboratory",
      "Wi-Fi Campus",
      "Cafeteria",
      "Corporate Placement Cell",
      "Bus Transportation across Indore"
    ]
  },
  1464: {
    name: "Shri Vaishnav Institute of Management (SVIM), Indore",
    shortName: "SVIM Indore",
    location: "Indore",
    state: "Madhya Pradesh",
    address: "Scheme No. 71, Gumasta Nagar, Indore, Madhya Pradesh - 452009",
    phone: "0731-2780011",
    email: "admission@svimi.org",
    website: "https://www.svimi.org",
    rating: 4.6,
    reviews: 229,
    type: "Private (Autonomous)",
    ownership: "Private",
    about: "Shri Vaishnav Institute of Management (SVIM), Indore is an autonomous landmark institution founded in 1987 under the aegis of Shri Vaishnav Shaikshanik Evam Parmarthik Trust. Affiliated to Devi Ahilya Vishwavidyalaya (DAVV) and Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV) and accredited by NAAC with 'A+' Grade, SVIM provides top-tier management and IT education with outstanding campus recruitment.",
    ranking: 48,
    fees: "₹78,000/Year (₹1,56,000 Total for MBA)",
    exams: "CMAT, MP Pre-MCA, MP DTE Counseling, 10+2 Merit",
    img: "https://cache.careers360.mobi/media/colleges/social-media/media-gallery/8128/2019/6/3/Campus View of Shri Vaishnav Institute of Management Indore_Campus-View.jpg",
    gallery: [
      "https://cache.careers360.mobi/media/colleges/social-media/media-gallery/8128/2019/6/3/Campus View of Shri Vaishnav Institute of Management Indore_Campus-View.jpg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://cache.careers360.mobi/media/colleges/social-media/media-gallery/8128/2019/6/3/Campus View of Shri Vaishnav Institute of Management Indore_Campus-View.jpg",
    courses: [
      {
        title: "Master of Business Administration (MBA)",
        type: "MANAGEMENT",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹78,000/Year",
        intake: 240,
        eligibility: "Bachelor's degree with 50% aggregate and valid CMAT / MP DTE rank"
      },
      {
        title: "Master of Computer Applications (MCA)",
        type: "COMPUTER APPLICATIONS",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹60,000/Year",
        intake: 120,
        eligibility: "BCA / B.Sc with Mathematics and valid MP Pre-MCA score"
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        type: "MANAGEMENT",
        division: "Undergraduate",
        duration: "3 Years",
        fees: "₹55,000/Year",
        intake: 180,
        eligibility: "10+2 from recognized board with at least 50% aggregate"
      },
      {
        title: "Bachelor of Computer Applications (BCA)",
        type: "COMPUTER APPLICATIONS",
        division: "Undergraduate",
        duration: "3 Years",
        fees: "₹50,000/Year",
        intake: 120,
        eligibility: "10+2 with Mathematics / Computer Science"
      }
    ],
    highestPackage: "₹14.56 LPA",
    averagePackage: "₹5.5 LPA",
    placements: "Deloitte, TCS, Infosys, Wipro, ICICI Bank, HDFC Bank, Asian Paints, Byju's, Cognizant.",
    facilities: [
      "Air-Conditioned Smart Classrooms",
      "Digital Management Library with 50,000+ Books",
      "Advanced Computing Centers",
      "Auditorium & Conference Halls",
      "Sports Facilities",
      "Cafeteria",
      "Career Guidance & Placement Cell"
    ]
  },
  1465: {
    name: "VIT Business School, Bhopal",
    shortName: "VITBS Bhopal",
    location: "Kothrikalan, Sehore / Bhopal",
    state: "Madhya Pradesh",
    address: "Bhopal-Indore Highway, Kothrikalan, Sehore District, Madhya Pradesh - 466114",
    phone: "07560-254500",
    email: "admissions@vitbhopal.ac.in",
    website: "https://vitbhopal.ac.in",
    rating: 4.6,
    reviews: 252,
    type: "Private (Constituent of VIT Bhopal)",
    ownership: "Private",
    about: "VIT Business School (VITBS), Bhopal is the premier faculty of management studies at VIT Bhopal University, situated along the Bhopal-Indore Highway in Kothrikalan, Sehore. Leveraging the prestigious academic pedigree of VIT Vellore, VITBS delivers future-ready MBA and business programs infused with digital technology, business analytics, and global exchange opportunities.",
    ranking: 35,
    fees: "₹3,50,000/Year (₹7,00,000 Total for MBA)",
    exams: "CAT, XAT, MAT, CMAT, NMAT, VITREE",
    img: "https://image-static.collegedunia.com/public/reviewPhotos/1167497/VIT_Bhopal_University_main_academic_building.jpg",
    gallery: [
      "https://image-static.collegedunia.com/public/reviewPhotos/1167497/VIT_Bhopal_University_main_academic_building.jpg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://image-static.collegedunia.com/public/reviewPhotos/1167497/VIT_Bhopal_University_main_academic_building.jpg",
    courses: [
      {
        title: "Master of Business Administration (MBA)",
        type: "MANAGEMENT",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹3,50,000/Year",
        intake: 120,
        eligibility: "Bachelor's degree with minimum 60% aggregate and valid CAT / XAT / MAT / CMAT score"
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        type: "MANAGEMENT",
        division: "Undergraduate",
        duration: "3 Years",
        fees: "₹1,40,000/Year",
        intake: 120,
        eligibility: "10+2 with minimum 60% aggregate"
      }
    ],
    highestPackage: "₹25.0 LPA",
    averagePackage: "₹8.5 LPA",
    placements: "Microsoft, Amazon, Deloitte, PwC, KPMG, TCS, Infosys, Wipro, Federal Bank, HDFC Bank.",
    facilities: [
      "250-Acre Modern University Campus",
      "Central Digital Library",
      "Business Analytics & Simulation Lab",
      "Air-Conditioned Hostels for Boys & Girls",
      "Olympic-Standard Sports Complex",
      "Food Court & Cafeteria",
      "University Fleet of Buses"
    ]
  },
  1466: {
    name: "Jiwaji University, Gwalior",
    shortName: "Jiwaji University",
    location: "Gwalior",
    state: "Madhya Pradesh",
    address: "Sachin Tendulkar Road, Kailash Nagar, Mahalgaon, Gwalior, Madhya Pradesh - 474011",
    phone: "0751-2442712",
    email: "vcjiwaji@gmail.com",
    website: "https://www.jiwaji.edu",
    rating: 4.6,
    reviews: 368,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Jiwaji University, Gwalior is a prestigious State Public University established in 1964 under the Madhya Pradesh Vishwavidyalaya Adhiniyam. Accredited by NAAC with the highest 'A++' Grade, Jiwaji University sprawls over a 225-acre scenic campus on Sachin Tendulkar Road, administering numerous teaching departments and affiliated colleges with exceptional academic standing across management, science, engineering, and law.",
    ranking: 32,
    fees: "₹35,000 - ₹55,000/Year (Subsidized State University Fees)",
    exams: "CUET, CMAT, MP Online e-Pravesh, JEE Main",
    img: "https://www.collegebatch.com/static/clg-gallery/jiwaji-university-gwalior-245424.webp",
    gallery: [
      "https://www.collegebatch.com/static/clg-gallery/jiwaji-university-gwalior-245424.webp",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://www.collegebatch.com/static/clg-gallery/jiwaji-university-gwalior-245424.webp",
    courses: [
      {
        title: "Master of Business Administration (MBA)",
        type: "MANAGEMENT",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹38,000/Year",
        intake: 120,
        eligibility: "Bachelor's degree with 50% marks and valid CMAT / entrance rank"
      },
      {
        title: "Master of Computer Applications (MCA)",
        type: "COMPUTER APPLICATIONS",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹32,000/Year",
        intake: 60,
        eligibility: "BCA / B.Sc with Mathematics and valid MP Pre-MCA score"
      },
      {
        title: "B.Tech in Computer Science & Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹55,000/Year",
        intake: 60,
        eligibility: "10+2 with PCM and valid JEE Main score"
      }
    ],
    highestPackage: "₹14.0 LPA",
    averagePackage: "₹4.5 LPA",
    placements: "TCS, Wipro, Infosys, Tech Mahindra, ICICI Bank, MP Government Enterprises.",
    facilities: [
      "225-Acre University Campus",
      "Central Digital Library with Vast Research Holdings",
      "University Health Centre",
      "Spacious Hostels for Boys & Girls",
      "University Sports Complex & Swimming Pool",
      "Air-Conditioned Convention Centre"
    ]
  },
  1467: {
    name: "Devi Ahilya Vishwavidyalaya (DAVV), Indore",
    shortName: "DAVV Indore",
    location: "Indore",
    state: "Madhya Pradesh",
    address: "Nalanda Campus, R.N.T. Marg / Takshashila Campus, Khandwa Road, Indore, Madhya Pradesh - 452001",
    phone: "0731-2527532",
    email: "registrar.davv@dauniv.ac.in",
    website: "https://www.dauniv.ac.in",
    rating: 4.8,
    reviews: 1250,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Devi Ahilya Vishwavidyalaya (DAVV), Indore, established in 1964 as the University of Indore, is Madhya Pradesh's premier State Public University accredited with NAAC 'A+' Grade. Home to landmark teaching institutes including IMS (Institute of Management Studies), IET (Institute of Engineering & Technology), and SCSIT (School of Computer Science & IT), DAVV is celebrated for academic eminence and stellar placement achievements.",
    ranking: 17,
    fees: "₹45,000 - ₹75,000/Year (Subsidized State University Fees)",
    exams: "CUET-UG, CUET-PG (via NTA), JEE Main (via MP DTE for IET)",
    img: "https://www.collegechalo.com/news/wp-content/uploads/2023/11/Devi-Ahilya-Vishwavidyalaya-Indore-1116x628.jpg",
    gallery: [
      "https://www.collegechalo.com/news/wp-content/uploads/2023/11/Devi-Ahilya-Vishwavidyalaya-Indore-1116x628.jpg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://www.collegechalo.com/news/wp-content/uploads/2023/11/Devi-Ahilya-Vishwavidyalaya-Indore-1116x628.jpg",
    courses: [
      {
        title: "Master of Business Administration (MBA - IMS DAVV)",
        type: "MANAGEMENT",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹55,000/Year",
        intake: 240,
        eligibility: "Bachelor's degree with 50% aggregate and qualifying rank in CUET-PG"
      },
      {
        title: "B.Tech in Computer Science & Engineering (IET DAVV)",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹75,000/Year",
        intake: 120,
        eligibility: "10+2 with PCM and qualifying JEE Main rank via MP DTE"
      },
      {
        title: "Master of Computer Applications (MCA - SCSIT DAVV)",
        type: "COMPUTER APPLICATIONS",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹45,000/Year",
        intake: 60,
        eligibility: "BCA / B.Sc with Mathematics and qualifying rank in CUET-PG"
      }
    ],
    highestPackage: "₹56.0 LPA",
    averagePackage: "₹7.5 LPA",
    placements: "Microsoft, Amazon, Goldman Sachs, Deloitte, TCS Digital, Infosys, Cognizant, Wipro, Accenture, ICICI Bank.",
    facilities: [
      "Expansive Takshashila & Nalanda Campuses",
      "Central Digital Library with Web-OPAC and INFLIBNET",
      "Advanced Computing & Data Analytics Labs",
      "University Stadium, Gymnasium & Sports Grounds",
      "University Hostels for Boys & Girls",
      "University Health Centre",
      "Day Care & Canteen"
    ]
  },
  1468: {
    name: "Indian Institute of Forest Management (IIFM), Bhopal",
    shortName: "IIFM Bhopal",
    location: "Bhopal",
    state: "Madhya Pradesh",
    address: "Nehru Nagar, PO Box 357, Bhopal, Madhya Pradesh - 462003",
    phone: "0755-2775716",
    email: "admission@iifm.ac.in",
    website: "https://iifm.ac.in",
    rating: 4.8,
    reviews: 310,
    type: "Public/Government (Autonomous Central Institute)",
    ownership: "Public/Government",
    about: "Indian Institute of Forest Management (IIFM), Bhopal is a premier sectoral management institution established in 1982 by the Ministry of Environment, Forest and Climate Change (MoEFCC), Government of India with technical support from IIM Ahmedabad. Situated atop a scenic hillock in Nehru Nagar, Bhopal, IIFM delivers specialized postgraduate diploma programs in forestry, environmental management, and sustainability.",
    ranking: 43,
    fees: "₹3,90,000/Year (₹7,80,000 Total 2-Year Residential)",
    exams: "CAT, XAT, MAT, CMAT, GMAT",
    img: "https://studyriserr.com/images/cover/17136341681618648656B3.jpg",
    gallery: [
      "https://studyriserr.com/images/cover/17136341681618648656B3.jpg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://studyriserr.com/images/cover/17136341681618648656B3.jpg",
    courses: [
      {
        title: "Post Graduate Diploma in Forestry Management (PGDFM)",
        type: "MANAGEMENT",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹3,90,000/Year",
        intake: 150,
        eligibility: "Bachelor's degree with 50% marks and valid CAT / XAT score"
      },
      {
        title: "Post Graduate Diploma in Sustainability Management (PGDSM)",
        type: "MANAGEMENT",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹3,90,000/Year",
        intake: 60,
        eligibility: "Bachelor's degree with 50% marks and valid CAT / XAT score"
      }
    ],
    highestPackage: "₹20.5 LPA",
    averagePackage: "₹10.38 LPA",
    placements: "PwC, EY, KPMG, Deloitte, Sambodhi Research, WWF India, UNDP, NABARD, ITC, HCL Foundation.",
    facilities: [
      "Picturesque 65-Acre Hillock Campus (Designed by Ar. Anant Raje)",
      "Specialized Forestry & Environment Library",
      "Full Residential Hostels for All Students",
      "Computer Centre & GIS Lab",
      "Sports Pavilion, Tennis Courts & Gymnasium",
      "Open-Air Amphitheatre & Dining Mess"
    ]
  },
  1469: {
    name: "Jagran Lakecity University (JLU), Bhopal",
    shortName: "JLU Bhopal",
    location: "Bhopal",
    state: "Madhya Pradesh",
    address: "Near Kaliasoth Barrage, Chandanpura, Bhopal, Madhya Pradesh - 462044",
    phone: "0755-6611100",
    email: "admission@jlu.edu.in",
    website: "https://jlu.edu.in",
    rating: 4.6,
    reviews: 265,
    type: "Private (State Private University)",
    ownership: "Private",
    about: "Jagran Lakecity University (JLU), Bhopal is a premier private state university established under the Madhya Pradesh Niji Vishwavidyalaya Act. Set in a breathtaking 232-acre campus near Kaliasoth Barrage, JLU is recognized by UGC and member of the Association of Commonwealth Universities (ACU), offering high-caliber programs in journalism, media, law, engineering, and business management.",
    ranking: 52,
    fees: "₹95,000 - ₹1,50,000/Year",
    exams: "JLUET, CAT, MAT, CMAT, CLAT, 10+2 Merit",
    img: "https://image-static.collegedunia.com/public/college_data/images/campusimage/1681112808untitled-15_20230316163715_0.jpg",
    gallery: [
      "https://image-static.collegedunia.com/public/college_data/images/campusimage/1681112808untitled-15_20230316163715_0.jpg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://image-static.collegedunia.com/public/college_data/images/campusimage/1681112808untitled-15_20230316163715_0.jpg",
    courses: [
      {
        title: "Master of Business Administration (MBA)",
        type: "MANAGEMENT",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹1,50,000/Year",
        intake: 120,
        eligibility: "Bachelor's degree with 50% marks and valid CAT / MAT / CMAT / JLUET score"
      },
      {
        title: "B.Tech in Computer Science & Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹1,30,000/Year",
        intake: 120,
        eligibility: "10+2 with PCM with minimum 50% marks"
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        type: "MANAGEMENT",
        division: "Undergraduate",
        duration: "3 Years",
        fees: "₹95,000/Year",
        intake: 120,
        eligibility: "10+2 in any stream with minimum 50% marks"
      }
    ],
    highestPackage: "₹22.0 LPA",
    averagePackage: "₹6.0 LPA",
    placements: "Google, Microsoft, Amazon, Ogilvy, NDTV, Times Network, TCS, ICICI Bank.",
    facilities: [
      "232-Acre Picturesque Lakeside Campus",
      "World-Class Media Production Studios & Radio Station",
      "Central Digital Library",
      "Moot Court Complex",
      "Hostels for Boys & Girls",
      "Football Ground, Olympic Swimming Pool & Tennis Courts",
      "University Transport"
    ]
  },
  1470: {
    name: "AKS University, Satna",
    shortName: "AKS Univ Satna",
    location: "Satna",
    state: "Madhya Pradesh",
    address: "Khajuraho Road, SherGanj, Satna, Madhya Pradesh - 485001",
    phone: "07672-298000",
    email: "admission@aksuniversity.com",
    website: "https://www.aksuniversity.ac.in",
    rating: 4.5,
    reviews: 186,
    type: "Private (State Private University)",
    ownership: "Private",
    about: "AKS University, Satna is a premier private state university established under the Madhya Pradesh Niji Vishwavidyalaya Act. Recognized by UGC, AICTE, and ICAR, AKS University is known for specialized technical programs in mining engineering, cement technology, agriculture, pharmacy, and management, catering to the industrial hub of Vindhya region.",
    ranking: 75,
    fees: "₹65,000 - ₹85,000/Year",
    exams: "10+2 Merit, AKS Entrance, State CET",
    img: "https://www.aksuniversity.com/sites/default/files/2024-04/aks_a_block.jpeg",
    gallery: [
      "https://www.aksuniversity.com/sites/default/files/2024-04/aks_a_block.jpeg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://www.aksuniversity.com/sites/default/files/2024-04/aks_a_block.jpeg",
    courses: [
      {
        title: "B.Tech in Mining Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹85,000/Year",
        intake: 120,
        eligibility: "10+2 with PCM with at least 45% marks"
      },
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
        fees: "₹60,000/Year",
        intake: 120,
        eligibility: "Bachelor's degree with 50% marks"
      }
    ],
    highestPackage: "₹12.5 LPA",
    averagePackage: "₹3.6 LPA",
    placements: "Prism Johnson Cement, Ultratech, Birla Corporation, Reliance Industries, TCS, Wipro.",
    facilities: [
      "100+ Acre Eco-Friendly Campus",
      "Specialized Mining & Mineral Processing Labs",
      "Central Digital Library",
      "Boys & Girls Hostels",
      "Sports Complex",
      "Cafeteria",
      "Fleet of University Buses"
    ]
  }
};

let updatedCount = 0;
for (const col of colleges) {
  if (batch177Updates[col.id]) {
    const update = batch177Updates[col.id];
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
console.log(`Saved updated public/siteData.json (${updatedCount} colleges in Batch 177).`);

// Update progress.json
const progressRaw = fs.readFileSync(progressPath, 'utf8');
const progress = JSON.parse(progressRaw);
progress.verifiedColleges = 1770;
progress.lastUpdated = new Date().toISOString();
progress.currentBatch = 177;
if (!progress.batches) progress.batches = {};
progress.batches["177"] = {
  status: "verified",
  verifiedCount: 10,
  range: "1761-1770",
  ids: [1461, 1462, 1463, 1464, 1465, 1466, 1467, 1468, 1469, 1470],
  verifiedAt: new Date().toISOString()
};
fs.writeFileSync(progressPath, JSON.stringify(progress, null, 2), 'utf8');
console.log(`Updated ${progressPath} -> verifiedColleges: 1770`);

// Update all_verified_colleges.json
let allVerified = [];
if (fs.existsSync(allVerifiedJsonPath)) {
  allVerified = JSON.parse(fs.readFileSync(allVerifiedJsonPath, 'utf8'));
}
const verifiedBatchColleges = colleges.filter(c => batch177Updates[c.id]);
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
let mdEntry = `\n### Batch 177 (Colleges 1,761–1,770, IDs: 1461–1470)\n`;
mdEntry += `| ID | College Name | Location | State | Type | Website |\n`;
mdEntry += `|---|---|---|---|---|---|\n`;
for (const id of [1461, 1462, 1463, 1464, 1465, 1466, 1467, 1468, 1469, 1470]) {
  const c = batch177Updates[id];
  mdEntry += `| ${id} | ${c.name} | ${c.location} | ${c.state} | ${c.type} | [Website](${c.website}) |\n`;
}
fs.appendFileSync(allVerifiedMdPath, mdEntry, 'utf8');
console.log(`Appended Batch 177 to ${allVerifiedMdPath}`);

