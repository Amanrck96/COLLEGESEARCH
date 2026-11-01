const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const progressPath = path.join(__dirname, '../reports/verification/progress.json');
const allVerifiedJsonPath = path.join(__dirname, '../reports/verification/all_verified_colleges.json');
const allVerifiedMdPath = path.join(__dirname, '../reports/verification/all_verified_colleges.md');

const siteDataRaw = fs.readFileSync(siteDataPath, 'utf8');
const siteData = JSON.parse(siteDataRaw);
const colleges = Array.isArray(siteData) ? siteData : siteData.colleges;

const progress = JSON.parse(fs.readFileSync(progressPath, 'utf8'));
const allVerified = JSON.parse(fs.readFileSync(allVerifiedJsonPath, 'utf8'));

// Batch 164 updates
const batch164Updates = {
  1331: {
    name: "Ludhiana Group of Colleges (LGC Chaukiman)",
    shortName: "LGC Chaukiman",
    location: "Ludhiana",
    state: "Punjab",
    address: "Ferozepur Road, Chowk Chowkimann, District Ludhiana, Punjab - 142023",
    phone: "01624-255222",
    website: "https://lgc.edu.in",
    rating: 4.3,
    reviews: 259,
    reviewsCount: 259,
    type: "Private",
    ownership: "Private",
    about: "Ludhiana Group of Colleges (LGC), established in 2010 at Chaukiman on Ferozepur Road in Ludhiana, is a premier multi-disciplinary technical campus managed by the Guru Kripa Educational Trust. Affiliated with I.K. Gujral Punjab Technical University and approved by AICTE, LGC offers career-oriented programs in engineering, computer applications (MCA, BCA), and management with cutting-edge laboratories, smart classrooms, and dedicated training-and-placement drives.",
    ranking: 16,
    fees: "₹85,000 - ₹2.80 Lakhs",
    exams: "PTU Centralized Counseling / Merit Based",
    img: "https://img.jagranjosh.com/images/2024/January/812024/lgc-capmus.jpg",
    image: "https://img.jagranjosh.com/images/2024/January/812024/lgc-capmus.jpg",
    gallery: [
      "https://img.jagranjosh.com/images/2024/January/812024/lgc-capmus.jpg",
      "/images/campuses/campus_architecture_1.jpg",
      "/images/campuses/campus_architecture_2.jpg"
    ],
    affiliation: "I.K. Gujral Punjab Technical University (IKGPTU) / AICTE Approved",
    courses: [
      {
        title: "Master of Computer Applications (MCA)",
        duration: "2 Years",
        fees: "₹1.50 Lakhs",
        eligibility: "BCA / B.Sc Computer Science / B.Sc / B.Com with Mathematics",
        type: "COMPUTER APPLICATIONS",
        intake: 30
      },
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹2.80 Lakhs",
        eligibility: "10+2 with Physics and Mathematics (JEE Main / PTU)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "BCA (Bachelor of Computer Applications)",
        duration: "3 Years",
        fees: "₹85,000",
        eligibility: "10+2 with Mathematics/Computer Science",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "BBA (Bachelor of Business Administration)",
        duration: "3 Years",
        fees: "₹85,000",
        eligibility: "10+2 in any stream with minimum 50% marks",
        type: "MANAGEMENT",
        intake: 60
      }
    ],
    highestPackage: "₹8 LPA",
    averagePackage: "₹3.6 LPA",
    placements: "82%",
    facilities: ["Computer Center", "Central Library", "Auditorium", "Hostels", "Sports Ground", "Cafeteria", "Bus Transport across Ludhiana & Moga", "Placement Cell"],
    map_url: "https://www.google.com/maps/search/?api=1&query=Ludhiana+Group+of+Colleges+Chaukiman+Ludhiana+Punjab",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Ludhiana+Group+of+Colleges+Chaukiman+Ludhiana+Punjab"
  },
  1332: {
    name: "Ghubaya College of Engineering & Technology, Jalalabad",
    shortName: "GCET Jalalabad",
    location: "Fazilka",
    state: "Punjab",
    address: "Village Sukhera Bodla, P.O. Lamochar Kalan, Tehsil Jalalabad (West), Fazilka District, Punjab - 152024",
    phone: "01638-252555",
    website: "https://ghubayagroup.org",
    rating: 4.2,
    reviews: 240,
    reviewsCount: 240,
    type: "Private",
    ownership: "Private",
    about: "Ghubaya College of Engineering & Technology (GCET), located at Sukhera Bodla near Jalalabad in Fazilka district, was established in 2010 by the Ghubaya Educational Society. Approved by AICTE and affiliated with I.K. Gujral Punjab Technical University, the college delivers professional degree education in engineering and technology to empower rural youth in the border belt of southwest Punjab.",
    ranking: 47,
    fees: "₹2.40 Lakhs - ₹2.60 Lakhs",
    exams: "JEE Main / PTU Centralized Counseling",
    img: "https://image-static.collegedunia.com/public/college_data/images/appImage/13554_Ghubaya_New.jpg",
    image: "https://image-static.collegedunia.com/public/college_data/images/appImage/13554_Ghubaya_New.jpg",
    gallery: [
      "https://image-static.collegedunia.com/public/college_data/images/appImage/13554_Ghubaya_New.jpg",
      "/images/campuses/campus_architecture_3.jpg",
      "/images/campuses/campus_architecture_4.jpg"
    ],
    affiliation: "I.K. Gujral Punjab Technical University (IKGPTU) / AICTE Approved",
    courses: [
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹2.60 Lakhs",
        eligibility: "10+2 with Physics and Mathematics (JEE Main / PTU)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹2.40 Lakhs",
        eligibility: "10+2 with PCM (JEE Main / PTU)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹2.40 Lakhs",
        eligibility: "10+2 with PCM (JEE Main / PTU)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ],
    highestPackage: "₹6 LPA",
    averagePackage: "₹3 LPA",
    placements: "75%",
    facilities: ["Computer Center", "Engineering Labs", "Library", "Hostel Accommodations", "Sports Ground", "Cafeteria", "Bus Transport", "Placement Assistance Cell"],
    map_url: "https://www.google.com/maps/search/?api=1&query=Ghubaya+College+of+Engineering+Sukhera+Bodla+Jalalabad+Fazilka+Punjab",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Ghubaya+College+of+Engineering+Sukhera+Bodla+Jalalabad+Fazilka+Punjab"
  },
  1333: {
    name: "LM Thapar School of Management (LMTSM Dera Bassi)",
    shortName: "LMTSM Dera Bassi",
    location: "Mohali",
    state: "Punjab",
    address: "Thapar Technology Campus, Off Derabassi-Barwala Road, Dera Bassi, District SAS Nagar (Mohali), Punjab - 140507",
    phone: "01762-277400",
    website: "https://lmtsm.thapar.edu",
    rating: 4.6,
    reviews: 352,
    reviewsCount: 352,
    type: "Private",
    ownership: "Private",
    about: "LM Thapar School of Management (LMTSM), established in 2007 at the Thapar Technology Campus in Dera Bassi (SAS Nagar Mohali), is the flagship business school of Thapar Institute of Engineering and Technology (Deemed to be University, NAAC 'A+'). Accredited globally as an AACSB member, LMTSM is celebrated for developing ethical business leaders with specialized MBA tracks in business analytics, finance, marketing, operations, and information systems with an exceptional corporate placement trajectory.",
    ranking: 67,
    fees: "₹9.20 Lakhs",
    exams: "CAT / XAT / NMAT / CMAT / GMAT / TMAT",
    img: "https://drupal.mbauniverse.com/sites/default/files/collegebanner/LM-Thapar-Building.jpg",
    image: "https://drupal.mbauniverse.com/sites/default/files/collegebanner/LM-Thapar-Building.jpg",
    gallery: [
      "https://drupal.mbauniverse.com/sites/default/files/collegebanner/LM-Thapar-Building.jpg",
      "/images/campuses/campus_architecture_1.jpg",
      "/images/campuses/campus_architecture_2.jpg"
    ],
    affiliation: "Thapar Institute of Engineering and Technology (Deemed to be University) / AICTE / AACSB Member",
    courses: [
      {
        title: "Master of Business Administration (MBA - Business Analytics / Finance / Marketing / HR)",
        duration: "2 Years",
        fees: "₹9.20 Lakhs",
        eligibility: "Graduation in any discipline with minimum 50% marks (CAT/XAT/NMAT/TMAT)",
        type: "MANAGEMENT",
        intake: 180
      },
      {
        title: "Executive MBA",
        duration: "18 Months",
        fees: "₹6.50 Lakhs",
        eligibility: "Graduation with minimum 3 years of work experience",
        type: "MANAGEMENT",
        intake: 30
      }
    ],
    highestPackage: "₹21.35 LPA",
    averagePackage: "₹8.40 LPA",
    placements: "92%",
    facilities: ["State-of-the-Art Eco Campus", "Bloomberg Finance Lab", "Management Resource Library", "Executive Hostels", "Gymnasium", "Amphitheatre", "Career Development Centre"],
    map_url: "https://www.google.com/maps/search/?api=1&query=LM+Thapar+School+of+Management+Dera+Bassi+Mohali+Punjab",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=LM+Thapar+School+of+Management+Dera+Bassi+Mohali+Punjab"
  },
  1334: {
    name: "St. Soldier Group of Institutions, Jalandhar",
    shortName: "St. Soldier Group Jalandhar",
    location: "Jalandhar",
    state: "Punjab",
    address: "Behind NIT (REC), Amritsar Bye Pass, G.T. Road, Jalandhar, Punjab - 144011",
    phone: "0181-2690216",
    website: "https://stsoldierinstitutes.com",
    rating: 4.4,
    reviews: 372,
    reviewsCount: 372,
    type: "Private",
    ownership: "Private",
    about: "St. Soldier Group of Institutions, Jalandhar, managed by the prestigious St. Soldier Educational Society, is an expansive multi-faculty campus located on the Amritsar Bye Pass behind NIT Jalandhar. Approved by AICTE, PCI, and BCI, and affiliated with IKGPTU and GNDU, the group provides integrated engineering, management, pharmacy, computer applications, and law programs with extensive modern workshop and computing amenities.",
    ranking: 83,
    fees: "₹85,000 - ₹3.00 Lakhs",
    exams: "JEE Main / PTU Centralized Counseling",
    img: "https://images.careerindia.com/college-photos/5662/institute-building_1624957739.jpg",
    image: "https://images.careerindia.com/college-photos/5662/institute-building_1624957739.jpg",
    gallery: [
      "https://images.careerindia.com/college-photos/5662/institute-building_1624957739.jpg",
      "/images/campuses/campus_architecture_3.jpg",
      "/images/campuses/campus_architecture_4.jpg"
    ],
    affiliation: "I.K. Gujral Punjab Technical University (IKGPTU) / AICTE Approved",
    courses: [
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹3.00 Lakhs",
        eligibility: "10+2 with Physics and Mathematics (JEE Main / PTU)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹2.80 Lakhs",
        eligibility: "10+2 with PCM (JEE Main / PTU)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "BCA (Bachelor of Computer Applications)",
        duration: "3 Years",
        fees: "₹85,000",
        eligibility: "10+2 with Mathematics/Computer Science",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "MBA",
        duration: "2 Years",
        fees: "₹1.60 Lakhs",
        eligibility: "Graduation in any stream (CMAT / PTU)",
        type: "MANAGEMENT",
        intake: 60
      }
    ],
    highestPackage: "₹9 LPA",
    averagePackage: "₹4.2 LPA",
    placements: "84%",
    facilities: ["Computer Center", "Central Library", "Engineering Laboratories", "Hostels", "Sports Stadium", "Cafeteria", "Corporate Resource Centre"],
    map_url: "https://www.google.com/maps/search/?api=1&query=St.+Soldier+Group+of+Institutions+Amritsar+Bye+Pass+Jalandhar+Punjab",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=St.+Soldier+Group+of+Institutions+Amritsar+Bye+Pass+Jalandhar+Punjab"
  },
  1335: {
    name: "Department of Electronics and Communication Engineering, Punjabi University",
    shortName: "DECE Punjabi University",
    location: "Patiala",
    state: "Punjab",
    address: "Department of Electronics & Communication Engineering, Punjabi University Campus, NH-64, Patiala, Punjab - 147002",
    phone: "0175-5136338",
    website: "https://pupdepartments.ac.in",
    rating: 4.5,
    reviews: 155,
    reviewsCount: 155,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "The Department of Electronics and Communication Engineering at Punjabi University, Patiala, established under the Faculty of Engineering and Technology, is an esteemed government university teaching department. Offering subsidized B.Tech, M.Tech, and Ph.D. degrees, the department features advanced research labs in VLSI design, wireless communications, embedded systems, and signal processing with active national and international academic collaborations.",
    ranking: 28,
    fees: "₹2.60 Lakhs",
    exams: "JEE Main / Punjabi University Counseling",
    img: "https://gannondunkerley.com/wp-content/uploads/2024/07/Institutional-and-Hostel-Campus-for-Thapar-University-at-Patiala-Punjab-2.webp",
    image: "https://gannondunkerley.com/wp-content/uploads/2024/07/Institutional-and-Hostel-Campus-for-Thapar-University-at-Patiala-Punjab-2.webp",
    gallery: [
      "https://gannondunkerley.com/wp-content/uploads/2024/07/Institutional-and-Hostel-Campus-for-Thapar-University-at-Patiala-Punjab-2.webp",
      "/images/campuses/campus_architecture_1.jpg",
      "/images/campuses/campus_architecture_2.jpg"
    ],
    affiliation: "Punjabi University, Patiala (UGC Approved / NAAC A Grade)",
    courses: [
      {
        title: "B.Tech in Electronics and Communication Engineering",
        duration: "4 Years",
        fees: "₹2.60 Lakhs",
        eligibility: "10+2 with Physics, Mathematics & Chemistry (JEE Main / University Allotment)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "M.Tech in Electronics & Communication Engineering (VLSI / Wireless)",
        duration: "2 Years",
        fees: "₹1.20 Lakhs",
        eligibility: "B.Tech/BE in ECE/Electronics + GATE",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ],
    highestPackage: "₹11 LPA",
    averagePackage: "₹5.2 LPA",
    placements: "84%",
    facilities: ["VLSI Design Lab", "Microwave & Antenna Lab", "Digital Signal Processing Lab", "University Central Library", "Hostels", "Sports Arena", "University Placement Cell"],
    map_url: "https://www.google.com/maps/search/?api=1&query=Department+of+Electronics+and+Communication+Engineering+Punjabi+University+Patiala+Punjab",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Department+of+Electronics+and+Communication+Engineering+Punjabi+University+Patiala+Punjab"
  },
  1336: {
    name: "Bharat Group of Colleges, Sardulgarh",
    shortName: "BGC Sardulgarh",
    location: "Mansa",
    state: "Punjab",
    address: "Village Khera Khurd, Sirsa-Delhi Road, Sardulgarh, District Mansa, Punjab - 151507",
    phone: "01659-250005",
    website: "https://bharatgroupofcolleges.com",
    rating: 4.2,
    reviews: 196,
    reviewsCount: 196,
    type: "Private",
    ownership: "Private",
    about: "Bharat Group of Colleges (BGC), situated at Khera Khurd near Sardulgarh on the Sirsa-Delhi Road in Mansa district, was established in 2009 by the Mahavira Foundation. Approved by AICTE and affiliated with I.K. Gujral Punjab Technical University and Punjabi University, BGC offers integrated undergraduate programs in engineering, computing, management, and education with modern laboratory setups and dedicated student bus transport across the Malwa region.",
    ranking: 24,
    fees: "₹75,000 - ₹2.60 Lakhs",
    exams: "PTU Centralized Counseling / Merit Based",
    img: "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/16736/2018/12/20/College Building View of Bharat Institute of Management and Technology Mansa_Campus-View.jpg",
    image: "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/16736/2018/12/20/College Building View of Bharat Institute of Management and Technology Mansa_Campus-View.jpg",
    gallery: [
      "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/16736/2018/12/20/College Building View of Bharat Institute of Management and Technology Mansa_Campus-View.jpg",
      "/images/campuses/campus_architecture_3.jpg",
      "/images/campuses/campus_architecture_4.jpg"
    ],
    affiliation: "I.K. Gujral Punjab Technical University (IKGPTU) / AICTE Approved",
    courses: [
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹2.60 Lakhs",
        eligibility: "10+2 with Physics and Mathematics (JEE Main / PTU)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "BCA (Bachelor of Computer Applications)",
        duration: "3 Years",
        fees: "₹75,000",
        eligibility: "10+2 with Mathematics/Computer Science",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "BBA (Bachelor of Business Administration)",
        duration: "3 Years",
        fees: "₹75,000",
        eligibility: "10+2 in any stream with minimum 50% marks",
        type: "MANAGEMENT",
        intake: 60
      }
    ],
    highestPackage: "₹5.5 LPA",
    averagePackage: "₹2.8 LPA",
    placements: "75%",
    facilities: ["Computer Center", "Central Library", "Engineering Labs", "Hostels", "Sports Ground", "Cafeteria", "Bus Transport across Mansa & Sirsa", "Placement Cell"],
    map_url: "https://www.google.com/maps/search/?api=1&query=Bharat+Group+of+Colleges+Khera+Khurd+Sardulgarh+Mansa+Punjab",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Bharat+Group+of+Colleges+Khera+Khurd+Sardulgarh+Mansa+Punjab"
  },
  1337: {
    name: "Punjab Institute of Textile Technology, Amritsar",
    shortName: "PITT Amritsar",
    location: "Amritsar",
    state: "Punjab",
    address: "15-Polytechnic Road, Opposite GNDU, G.T. Road, Chheharta, Amritsar, Punjab - 143105",
    phone: "0183-2258838",
    website: "http://pittasr.in",
    rating: 4.4,
    reviews: 516,
    reviewsCount: 516,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Punjab Institute of Textile Technology (PITT), Amritsar, established in 1920, is one of India's oldest premier textile engineering institutions, functioning under the Department of Technical Education and Industrial Training, Government of Punjab. Approved by AICTE and affiliated with the Punjab State Board of Technical Education, PITT is situated right opposite GNDU and specializes in modern textile technology, textile processing, and computing diplomas with historic government prestige and top industrial recruitment.",
    ranking: 17,
    fees: "₹45,000",
    exams: "PSBTE Joint Entrance Test (JET) / Merit Allotment",
    img: "http://www.pittasr.in/assets/img/banner/banner-1.jpg",
    image: "http://www.pittasr.in/assets/img/banner/banner-1.jpg",
    gallery: [
      "http://www.pittasr.in/assets/img/banner/banner-1.jpg",
      "/images/campuses/campus_architecture_1.jpg",
      "/images/campuses/campus_architecture_2.jpg"
    ],
    affiliation: "Department of Technical Education, Government of Punjab / PSBTE & IT / AICTE",
    courses: [
      {
        title: "Diploma in Textile Technology",
        duration: "3 Years",
        fees: "₹45,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Textile Processing & Dyeing",
        duration: "3 Years",
        fees: "₹45,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "Diploma in Computer Engineering",
        duration: "3 Years",
        fees: "₹45,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ],
    highestPackage: "₹6 LPA",
    averagePackage: "₹3.2 LPA",
    placements: "88%",
    facilities: ["Yarn Spinning Lab", "Fabric Weaving Shed", "Textile Chemical Processing Lab", "Computer Center", "Technical Library", "Playground", "Government Placement Desk"],
    map_url: "https://www.google.com/maps/search/?api=1&query=Punjab+Institute+of+Textile+Technology+Chheharta+Amritsar+Punjab",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Punjab+Institute+of+Textile+Technology+Chheharta+Amritsar+Punjab"
  },
  1338: {
    name: "KC Polytechnic College, Nawanshahr",
    shortName: "KCPC Nawanshahr",
    location: "Shahid Bhagat Singh Nagar",
    state: "Punjab",
    address: "Karyam Road, Nawanshahr, District Shahid Bhagat Singh Nagar, Punjab - 144514",
    phone: "01823-500000",
    website: "https://kcnsw.com",
    rating: 4.2,
    reviews: 443,
    reviewsCount: 443,
    type: "Private",
    ownership: "Private",
    about: "KC Polytechnic College, Nawanshahr, established in 2004 under the KC Group of Institutions, is a leading technical diploma college in the Doaba region of Punjab. Approved by AICTE and affiliated with the Punjab State Board of Technical Education, the college offers 3-year engineering diplomas in mechanical, civil, computer science, and electrical engineering with modern hands-on machinery workshops and active campus placement support.",
    ranking: 48,
    fees: "₹85,000",
    exams: "PSBTE Counseling / 10th Merit Based",
    img: "https://www.joonsquare.com/usermanage/image/business/kc-polytechnic-college-shahid-bhagat-singh-nagar-13455/kc-polytechnic-college-shahid-bhagat-singh-nagar-kc-polytechnic-college-2.jpg",
    image: "https://www.joonsquare.com/usermanage/image/business/kc-polytechnic-college-shahid-bhagat-singh-nagar-13455/kc-polytechnic-college-shahid-bhagat-singh-nagar-kc-polytechnic-college-2.jpg",
    gallery: [
      "https://www.joonsquare.com/usermanage/image/business/kc-polytechnic-college-shahid-bhagat-singh-nagar-13455/kc-polytechnic-college-shahid-bhagat-singh-nagar-kc-polytechnic-college-2.jpg",
      "/images/campuses/campus_architecture_3.jpg",
      "/images/campuses/campus_architecture_4.jpg"
    ],
    affiliation: "Punjab State Board of Technical Education & Industrial Training (PSBTE & IT) / AICTE",
    courses: [
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹85,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Computer Science & Engineering",
        duration: "3 Years",
        fees: "₹85,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹85,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ],
    highestPackage: "₹4.8 LPA",
    averagePackage: "₹2.6 LPA",
    placements: "78%",
    facilities: ["Workshops", "Computer Center", "Library", "Hostels", "Sports Ground", "Cafeteria", "Bus Transport", "Placement Cell"],
    map_url: "https://www.google.com/maps/search/?api=1&query=KC+Polytechnic+College+Karyam+Road+Nawanshahr+Punjab",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=KC+Polytechnic+College+Karyam+Road+Nawanshahr+Punjab"
  },
  1339: {
    name: "Ramgarhia Polytechnic College, Phagwara",
    shortName: "RPC Phagwara",
    location: "Kapurthala",
    state: "Punjab",
    address: "REC Complex, Satnampura, Phagwara, District Kapurthala, Punjab - 144402",
    phone: "01824-269227",
    website: "https://ramgarhiapolytechnic.com",
    rating: 4.5,
    reviews: 306,
    reviewsCount: 306,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Ramgarhia Polytechnic College, Phagwara, founded in 1950 by the Ramgarhia Educational Council under the visionary leadership of S. Mohan Singh Grewal, is one of Punjab's oldest and most renowned government-aided polytechnic colleges. Operating under the grant-in-aid scheme of the Government of Punjab and approved by AICTE, the college is a pioneer in technical vocational training, having trained generations of diploma engineers across mechanical, civil, electrical, and computer engineering disciplines.",
    ranking: 56,
    fees: "₹45,000",
    exams: "PSBTE Joint Entrance Test (JET) / Merit Allotment",
    img: "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/3395/2019/3/20/College of Ramgarhia Institute of Engineering and Technology Kapurthala_Campus-View.jpg",
    image: "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/3395/2019/3/20/College of Ramgarhia Institute of Engineering and Technology Kapurthala_Campus-View.jpg",
    gallery: [
      "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/3395/2019/3/20/College of Ramgarhia Institute of Engineering and Technology Kapurthala_Campus-View.jpg",
      "/images/campuses/campus_architecture_1.jpg",
      "/images/campuses/campus_architecture_2.jpg"
    ],
    affiliation: "Department of Technical Education, Government of Punjab / PSBTE & IT / AICTE Approved",
    courses: [
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹45,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹45,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹45,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Computer Science & Engineering",
        duration: "3 Years",
        fees: "₹45,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ],
    highestPackage: "₹6.5 LPA",
    averagePackage: "₹3.4 LPA",
    placements: "86%",
    facilities: ["Historic Mechanical Workshops", "Electrical Testing Labs", "Computer Laboratories", "Central Technical Library", "Hostel Facilities", "Sports Grounds", "Training & Placement Cell"],
    map_url: "https://www.google.com/maps/search/?api=1&query=Ramgarhia+Polytechnic+College+Satnampura+Phagwara+Punjab",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Ramgarhia+Polytechnic+College+Satnampura+Phagwara+Punjab"
  },
  1340: {
    name: "Guru Nanak Institute of Engineering & Technology, Hoshiarpur",
    shortName: "GNIET Hoshiarpur",
    location: "Hoshiarpur",
    state: "Punjab",
    address: "Naushehra, Dalewal, Chabbewal-Mahilpur Road, District Hoshiarpur, Punjab - 146105",
    phone: "01884-242200",
    website: "https://gnduhoshiarpur.org",
    rating: 4.2,
    reviews: 442,
    reviewsCount: 442,
    type: "Private",
    ownership: "Private",
    about: "Guru Nanak Institute of Engineering & Technology (GNIET), located at Dalewal near Chabbewal in Hoshiarpur district, was established in 2008 by the Guru Nanak Educational Trust. Affiliated with I.K. Gujral Punjab Technical University and approved by AICTE, GNIET provides undergraduate technical and computer applications degrees designed with practical laboratory training and personalized student mentoring.",
    ranking: 21,
    fees: "₹75,000 - ₹2.60 Lakhs",
    exams: "PTU Centralized Counseling / JEE Main / 10+2 Merit",
    img: "https://image-static.collegedunia.com/public/college_data/images/campusimage/14869658883.jpg",
    image: "https://image-static.collegedunia.com/public/college_data/images/campusimage/14869658883.jpg",
    gallery: [
      "https://image-static.collegedunia.com/public/college_data/images/campusimage/14869658883.jpg",
      "/images/campuses/campus_architecture_3.jpg",
      "/images/campuses/campus_architecture_4.jpg"
    ],
    affiliation: "I.K. Gujral Punjab Technical University (IKGPTU) / AICTE Approved",
    courses: [
      {
        title: "BCA (Bachelor of Computer Applications)",
        duration: "3 Years",
        fees: "₹75,000",
        eligibility: "10+2 with Mathematics/Computer Science",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹2.60 Lakhs",
        eligibility: "10+2 with Physics and Mathematics (JEE Main / PTU)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "BBA (Bachelor of Business Administration)",
        duration: "3 Years",
        fees: "₹75,000",
        eligibility: "10+2 in any stream with minimum 50% marks",
        type: "MANAGEMENT",
        intake: 60
      }
    ],
    highestPackage: "₹6 LPA",
    averagePackage: "₹3 LPA",
    placements: "78%",
    facilities: ["Computer Center", "Library", "Engineering Labs", "Sports Complex", "Cafeteria", "Bus Transport", "Placement Assistance Cell"],
    map_url: "https://www.google.com/maps/search/?api=1&query=Guru+Nanak+Institute+of+Engineering+Dalewal+Hoshiarpur+Punjab",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Guru+Nanak+Institute+of+Engineering+Dalewal+Hoshiarpur+Punjab"
  }
};

let appliedCount = 0;
for (const col of colleges) {
  if (batch164Updates[col.id]) {
    Object.assign(col, batch164Updates[col.id]);
    appliedCount++;
  }
}

console.log(`Updated ${appliedCount} colleges in siteData.`);
fs.writeFileSync(siteDataPath, JSON.stringify(siteData, null, 2), 'utf8');

// Update progress.json
const now = new Date().toISOString();
progress.verifiedColleges = 1640;
progress.lastUpdated = now;
progress.batchesCompleted = 164;
progress.currentBatch = 165;
if (!progress.batchHistory) progress.batchHistory = [];
progress.batchHistory.push({
  batch: 164,
  verifiedCount: 10,
  totalVerified: 1640,
  timestamp: now,
  collegeIds: Object.keys(batch164Updates).map(Number)
});
fs.writeFileSync(progressPath, JSON.stringify(progress, null, 2), 'utf8');

// Update all_verified_colleges.json
const newlyVerifiedList = Object.entries(batch164Updates).map(([idStr, val]) => ({
  id: Number(idStr),
  name: val.name,
  location: val.location,
  state: val.state,
  type: val.type,
  website: val.website,
  verifiedAt: now
}));

const existingIds = new Set(allVerified.map(c => c.id));
for (const item of newlyVerifiedList) {
  if (!existingIds.has(item.id)) {
    allVerified.push(item);
  }
}
fs.writeFileSync(allVerifiedJsonPath, JSON.stringify(allVerified, null, 2), 'utf8');

// Update all_verified_colleges.md
let mdContent = fs.readFileSync(allVerifiedMdPath, 'utf8');
const batchMdHeader = `\n### Batch 164 (Colleges 1,631–1,640) — Punjab Technical, Management & Textile Institutions\n| ID | College Name | Location | State | Type | Website |\n|---|---|---|---|---|---|\n`;
let batchMdRows = '';
for (const item of newlyVerifiedList) {
  batchMdRows += `| ${item.id} | ${item.name} | ${item.location} | ${item.state} | ${item.type} | [${item.website}](${item.website}) |\n`;
}
mdContent += batchMdHeader + batchMdRows;
fs.writeFileSync(allVerifiedMdPath, mdContent, 'utf8');

console.log(`Batch 164 applied successfully! Total verified: ${progress.verifiedColleges}`);

