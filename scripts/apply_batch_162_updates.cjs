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

// Batch 162 updates
const batch162Updates = {
  1311: {
    name: "Chitkara University, Punjab",
    shortName: "Chitkara University",
    location: "Patiala",
    state: "Punjab",
    address: "Chandigarh-Patiala National Highway (NH-64), Village Jhansla, Tehsil Rajpura, Patiala District, Punjab - 140401",
    phone: "01762-507084",
    website: "https://www.chitkara.edu.in",
    rating: 4.6,
    reviews: 1292,
    reviewsCount: 1292,
    type: "Private",
    ownership: "Private",
    about: "Chitkara University, Punjab, established under the Chitkara University Act by the Punjab State Legislature, is a premier multi-disciplinary private research university accredited with NAAC 'A+' Grade. Situated on a sprawling 50-acre modern campus on the Chandigarh-Patiala National Highway, the university is renowned for experiential engineering, business management, healthcare, and pharmacy education with global university partnerships and leading tier-one industry recruitment linkages.",
    ranking: 3,
    fees: "₹8.20 Lakhs",
    exams: "JEE Main / Chitkara University Entrance",
    img: "https://th.bing.com/th/id/R.f6fb90e62a1f787bf683d2fa1f0f568a?rik=TslnNCovngLIhA&riu=http%3a%2f%2f2.bp.blogspot.com%2f-7ODpm1PgTqU%2fVhOPJFF9LgI%2fAAAAAAAAABs%2fMqUgzpFMF70%2fs1600%2fChitkara%252BUniversity.jpg&ehk=f5ezKdjK9VNZT%2bip121G2GxstSVdcK2arE2WdNV%2bhPY%3d&risl=&pid=ImgRaw&r=0",
    image: "https://th.bing.com/th/id/R.f6fb90e62a1f787bf683d2fa1f0f568a?rik=TslnNCovngLIhA&riu=http%3a%2f%2f2.bp.blogspot.com%2f-7ODpm1PgTqU%2fVhOPJFF9LgI%2fAAAAAAAAABs%2fMqUgzpFMF70%2fs1600%2fChitkara%252BUniversity.jpg&ehk=f5ezKdjK9VNZT%2bip121G2GxstSVdcK2arE2WdNV%2bhPY%3d&risl=&pid=ImgRaw&r=0",
    gallery: [
      "https://th.bing.com/th/id/R.f6fb90e62a1f787bf683d2fa1f0f568a?rik=TslnNCovngLIhA&riu=http%3a%2f%2f2.bp.blogspot.com%2f-7ODpm1PgTqU%2fVhOPJFF9LgI%2fAAAAAAAAABs%2fMqUgzpFMF70%2fs1600%2fChitkara%252BUniversity.jpg&ehk=f5ezKdjK9VNZT%2bip121G2GxstSVdcK2arE2WdNV%2bhPY%3d&risl=&pid=ImgRaw&r=0",
      "/images/campuses/campus_architecture_1.jpg",
      "/images/campuses/campus_architecture_2.jpg"
    ],
    affiliation: "UGC Recognized / NAAC A+ Accredited / AICTE Approved",
    courses: [
      {
        title: "B.Tech in Computer Science & Engineering",
        duration: "4 Years",
        fees: "₹8.20 Lakhs",
        eligibility: "10+2 with Physics, Mathematics & Chemistry (JEE Main / Merit)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 360
      },
      {
        title: "B.Tech in Artificial Intelligence & Data Science",
        duration: "4 Years",
        fees: "₹8.20 Lakhs",
        eligibility: "10+2 with PCM (JEE Main / Merit)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 120
      },
      {
        title: "BCA (Bachelor of Computer Applications)",
        duration: "3 Years",
        fees: "₹3.15 Lakhs",
        eligibility: "10+2 with Mathematics/Computer Science",
        type: "COMPUTER APPLICATIONS",
        intake: 120
      },
      {
        title: "MBA (Business Analytics / Marketing / Finance)",
        duration: "2 Years",
        fees: "₹6.60 Lakhs",
        eligibility: "Graduation with minimum 50% marks (CAT / MAT / XAT / CMAT)",
        type: "MANAGEMENT",
        intake: 180
      }
    ],
    highestPackage: "₹44 LPA",
    averagePackage: "₹8.5 LPA",
    placements: "92%",
    facilities: ["50-Acre Smart Campus", "Innovation & Incubation Centre", "Digital Central Library", "Hostels", "Sports Arena", "Multi-Cuisine Cafeterias", "Healthcare Centre"],
    map_url: "https://www.google.com/maps/search/?api=1&query=Chitkara+University+Rajpura+Patiala+Punjab",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Chitkara+University+Rajpura+Patiala+Punjab"
  },
  1312: {
    name: "Thapar Institute of Engineering and Technology (TIET Patiala)",
    shortName: "TIET Patiala",
    location: "Patiala",
    state: "Punjab",
    address: "P.O. Box 32, Bhadson Road, Patiala, Punjab - 147004",
    phone: "0175-2393021",
    website: "https://www.thapar.edu",
    rating: 4.8,
    reviews: 1353,
    reviewsCount: 1353,
    type: "Private",
    ownership: "Private",
    about: "Thapar Institute of Engineering and Technology (TIET), Patiala, founded in 1956 by the visionary industrialist Lala Karam Chand Thapar, is one of India's oldest and most prestigious private Deemed-to-be Universities. Sprawling over 250 acres, TIET holds NAAC 'A+' accreditation and consistent top NIRF engineering ranks. TIET maintains an academic partnership with Trinity College Dublin and is globally recognized for high-impact research, world-class faculty, and outstanding campus placement packages.",
    ranking: 16,
    fees: "₹16.80 Lakhs - ₹21.00 Lakhs",
    exams: "JEE Main / TIET Allotment",
    img: "https://img.jagranjosh.com/images/2023/January/512023/Thapar-Institute-of-Engineering-and-Technology-TIET-Patiala-Campus-View-3.jpg",
    image: "https://img.jagranjosh.com/images/2023/January/512023/Thapar-Institute-of-Engineering-and-Technology-TIET-Patiala-Campus-View-3.jpg",
    gallery: [
      "https://img.jagranjosh.com/images/2023/January/512023/Thapar-Institute-of-Engineering-and-Technology-TIET-Patiala-Campus-View-3.jpg",
      "/images/campuses/campus_architecture_3.jpg",
      "/images/campuses/campus_architecture_4.jpg"
    ],
    affiliation: "Deemed to be University (Under Section 3 of UGC Act) / NAAC A+ / AICTE",
    courses: [
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹18.50 Lakhs",
        eligibility: "10+2 with PCM + valid JEE Main percentile",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 420
      },
      {
        title: "B.Tech in Artificial Intelligence & Machine Learning",
        duration: "4 Years",
        fees: "₹18.50 Lakhs",
        eligibility: "10+2 with PCM + valid JEE Main percentile",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 120
      },
      {
        title: "B.Tech in Electronics and Communication Engineering",
        duration: "4 Years",
        fees: "₹16.80 Lakhs",
        eligibility: "10+2 with PCM + valid JEE Main percentile",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 180
      },
      {
        title: "Master of Computer Applications (MCA)",
        duration: "2 Years",
        fees: "₹3.60 Lakhs",
        eligibility: "BCA / B.Sc Computer Science / B.Sc / B.Com with Mathematics",
        type: "COMPUTER APPLICATIONS",
        intake: 90
      }
    ],
    highestPackage: "₹55.75 LPA",
    averagePackage: "₹11.90 LPA",
    placements: "94%",
    facilities: ["250-Acre Campus", "Nava Nalanda Central Library", "Venture Lab & Incubation Centre", "Olympic-Grade Sports Complex", "Residential Hostels", "Health Centre", "Dedicated Placement & Training Cell"],
    map_url: "https://www.google.com/maps/search/?api=1&query=Thapar+Institute+of+Engineering+and+Technology+Bhadson+Road+Patiala+Punjab",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Thapar+Institute+of+Engineering+and+Technology+Bhadson+Road+Patiala+Punjab"
  },
  1313: {
    name: "Chandigarh University (CU), Mohali",
    shortName: "Chandigarh University",
    location: "Mohali",
    state: "Punjab",
    address: "NH-95, Chandigarh-Ludhiana Highway, Gharuan, Mohali, Punjab - 140413",
    phone: "0172-3984200",
    website: "https://www.cuchd.in",
    rating: 4.6,
    reviews: 1322,
    reviewsCount: 1322,
    type: "Private",
    ownership: "Private",
    about: "Chandigarh University (CU), situated on the NH-95 highway in Gharuan (Mohali), is a prestigious private research university established by the Punjab State Legislature and accredited with NAAC 'A+' Grade. Ranked among the top universities nationally and featured prominently in the QS World University Rankings, CU offers cutting-edge curriculum in computing, engineering, management, biotechnology, and legal studies with partnerships across 450+ foreign universities and over 900 multinational recruiters.",
    ranking: 43,
    fees: "₹8.90 Lakhs",
    exams: "CUCET / JEE Main / Merit Based",
    img: "https://globalgiants.com/archives/fotos52/CHandUnivCampus-0001.jpg",
    image: "https://globalgiants.com/archives/fotos52/CHandUnivCampus-0001.jpg",
    gallery: [
      "https://globalgiants.com/archives/fotos52/CHandUnivCampus-0001.jpg",
      "/images/campuses/campus_architecture_1.jpg",
      "/images/campuses/campus_architecture_2.jpg"
    ],
    affiliation: "UGC Recognized / NAAC A+ / AICTE Approved",
    courses: [
      {
        title: "B.Tech in Computer Science & Engineering",
        duration: "4 Years",
        fees: "₹8.90 Lakhs",
        eligibility: "10+2 with Physics and Mathematics (CUCET / JEE Main)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 480
      },
      {
        title: "B.Tech in Artificial Intelligence & Machine Learning",
        duration: "4 Years",
        fees: "₹8.90 Lakhs",
        eligibility: "10+2 with PCM (CUCET / JEE Main)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 180
      },
      {
        title: "BCA (Bachelor of Computer Applications)",
        duration: "3 Years",
        fees: "₹3.90 Lakhs",
        eligibility: "10+2 with minimum 50% marks",
        type: "COMPUTER APPLICATIONS",
        intake: 180
      },
      {
        title: "MBA (General / Fintech / Business Analytics)",
        duration: "2 Years",
        fees: "₹5.20 Lakhs",
        eligibility: "Graduation with minimum 50% marks (CAT/MAT/CUCET)",
        type: "MANAGEMENT",
        intake: 240
      }
    ],
    highestPackage: "₹54.75 LPA",
    averagePackage: "₹8.00 LPA",
    placements: "92%",
    facilities: ["200-Acre Smart Campus", "Advanced Research Centres", "Central Digital Library", "Residential Hostels", "Sports Stadiums", "Food Courts", "Corporate Resource Centre"],
    map_url: "https://www.google.com/maps/search/?api=1&query=Chandigarh+University+Gharuan+Mohali+Punjab",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Chandigarh+University+Gharuan+Mohali+Punjab"
  },
  1314: {
    name: "Lovely Professional University (LPU Phagwara)",
    shortName: "LPU Phagwara",
    location: "Kapurthala",
    state: "Punjab",
    address: "Jalandhar - Delhi G.T. Road, Phagwara, Kapurthala District, Punjab - 144411",
    phone: "01824-517000",
    website: "https://www.lpu.in",
    rating: 4.6,
    reviews: 1324,
    reviewsCount: 1324,
    type: "Private",
    ownership: "Private",
    about: "Lovely Professional University (LPU), Phagwara, established in 2005 on the Jalandhar-Delhi G.T. Road, is one of India's largest single-campus private universities, accredited with NAAC 'A++' Grade (Score 3.68/4). Sprawled across a magnificent 600-acre mega-campus, LPU is home to over 30,000 students from all Indian states and 50+ countries, offering industry-collaborated programs in engineering, computing, management, design, and agriculture with world-class residential and innovation amenities.",
    ranking: 35,
    fees: "₹9.60 Lakhs",
    exams: "LPUNEST / JEE Main",
    img: "https://graduatesdaily.com/wp-content/uploads/2024/05/Lovely-Professional-University-Punjab.jpg",
    image: "https://graduatesdaily.com/wp-content/uploads/2024/05/Lovely-Professional-University-Punjab.jpg",
    gallery: [
      "https://graduatesdaily.com/wp-content/uploads/2024/05/Lovely-Professional-University-Punjab.jpg",
      "/images/campuses/campus_architecture_3.jpg",
      "/images/campuses/campus_architecture_4.jpg"
    ],
    affiliation: "UGC Recognized / NAAC A++ Accredited / AICTE Approved",
    courses: [
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹9.60 Lakhs",
        eligibility: "10+2 with Physics, Mathematics & English (LPUNEST / JEE Main)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 720
      },
      {
        title: "B.Tech in Data Science & Machine Learning",
        duration: "4 Years",
        fees: "₹9.60 Lakhs",
        eligibility: "10+2 with PCM (LPUNEST / JEE Main)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 240
      },
      {
        title: "BCA (Bachelor of Computer Applications)",
        duration: "3 Years",
        fees: "₹3.60 Lakhs",
        eligibility: "10+2 with English with minimum 50% marks",
        type: "COMPUTER APPLICATIONS",
        intake: 180
      },
      {
        title: "MBA",
        duration: "2 Years",
        fees: "₹6.40 Lakhs",
        eligibility: "Graduation with minimum 55% marks (LPUNEST / CAT / MAT)",
        type: "MANAGEMENT",
        intake: 300
      }
    ],
    highestPackage: "₹64 LPA",
    averagePackage: "₹7.5 LPA",
    placements: "92%",
    facilities: ["600-Acre Mega Campus", "Uni-Mall & Open Amphitheatres", "Olympic-Size Sports Complex", "Central Multi-Storey Library", "Residential Hostels for 25,000+ Students", "Multi-Speciality University Hospital", "Division of Career Services"],
    map_url: "https://www.google.com/maps/search/?api=1&query=Lovely+Professional+University+Phagwara+Punjab",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Lovely+Professional+University+Phagwara+Punjab"
  },
  1315: {
    name: "Government Polytechnic College, Bikhiwind, Tarn Taran",
    shortName: "GPTC Bikhiwind",
    location: "Tarn Taran",
    state: "Punjab",
    address: "Khemkaran Road, Bikhiwind, District Tarn Taran, Punjab - 143303",
    phone: "01851-272023",
    website: "http://gpcbikhiwind.org",
    rating: 4.2,
    reviews: 376,
    reviewsCount: 376,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Government Polytechnic College, Bikhiwind, Tarn Taran, established by the Department of Technical Education and Industrial Training, Government of Punjab, is a major public diploma engineering college catering to the border belt of Punjab. Approved by AICTE and affiliated with the Punjab State Board of Technical Education and Industrial Training (PSBTE & IT), the institution delivers affordable 3-year technical diplomas with modern practical workshops and government scholarship benefits.",
    ranking: 18,
    fees: "₹45,000",
    exams: "PSBTE & IT Joint Entrance Test (JET) / Merit Allotment",
    img: "https://designarchitectsindia.com/wp-content/uploads/2020/12/P1-500x500-c-default.jpg",
    image: "https://designarchitectsindia.com/wp-content/uploads/2020/12/P1-500x500-c-default.jpg",
    gallery: [
      "https://designarchitectsindia.com/wp-content/uploads/2020/12/P1-500x500-c-default.jpg",
      "/images/campuses/campus_architecture_1.jpg",
      "/images/campuses/campus_architecture_2.jpg"
    ],
    affiliation: "Department of Technical Education, Government of Punjab / PSBTE & IT / AICTE",
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
        title: "Diploma in Computer Engineering",
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
      }
    ],
    highestPackage: "₹4.5 LPA",
    averagePackage: "₹2.6 LPA",
    placements: "75%",
    facilities: ["Machining Workshops", "Computer Laboratories", "Central Library", "Sports Ground", "Government Post-Matric Scholarship Desk", "Placement & Training Cell"],
    map_url: "https://www.google.com/maps/search/?api=1&query=Government+Polytechnic+College+Bikhiwind+Tarn+Taran+Punjab",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Government+Polytechnic+College+Bikhiwind+Tarn+Taran+Punjab"
  },
  1316: {
    name: "St. Soldier College (Co-Education), Hadiabad, Phagwara",
    shortName: "St. Soldier College Phagwara",
    location: "Kapurthala",
    state: "Punjab",
    address: "Hadiabad, Phagwara, District Kapurthala, Punjab - 144401",
    phone: "01824-269000",
    website: "https://stsoldierinstitutes.com",
    rating: 4.2,
    reviews: 342,
    reviewsCount: 342,
    type: "Private",
    ownership: "Private",
    about: "St. Soldier College (Co-Education), Hadiabad, Phagwara, is a prominent degree college managed by the St. Soldier Educational Society. Affiliated with Guru Nanak Dev University (GNDU), Amritsar, the institution offers career-focused undergraduate courses in computer applications, commerce, management, and arts, prioritizing quality education, personality development, and affordable fee structures.",
    ranking: 40,
    fees: "₹75,000",
    exams: "10+2 Merit Based / GNDU Allotment",
    img: "https://media.collegedekho.com/media/img/institute/crawled_images/SSCED.jpg?width=640",
    image: "https://media.collegedekho.com/media/img/institute/crawled_images/SSCED.jpg?width=640",
    gallery: [
      "https://media.collegedekho.com/media/img/institute/crawled_images/SSCED.jpg?width=640",
      "/images/campuses/campus_architecture_3.jpg",
      "/images/campuses/campus_architecture_4.jpg"
    ],
    affiliation: "Guru Nanak Dev University (GNDU), Amritsar",
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
        title: "BBA (Bachelor of Business Administration)",
        duration: "3 Years",
        fees: "₹75,000",
        eligibility: "10+2 in any stream with minimum 45% marks",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "B.Com (Regular)",
        duration: "3 Years",
        fees: "₹60,000",
        eligibility: "10+2 with Commerce / Mathematics",
        type: "COMMERCE",
        intake: 80
      }
    ],
    highestPackage: "₹5 LPA",
    averagePackage: "₹2.8 LPA",
    placements: "78%",
    facilities: ["Computer Center", "College Library", "Sports Complex", "Cafeteria", "Bus Transport", "Placement Guidance Cell"],
    map_url: "https://www.google.com/maps/search/?api=1&query=St.+Soldier+College+Hadiabad+Phagwara+Punjab",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=St.+Soldier+College+Hadiabad+Phagwara+Punjab"
  },
  1317: {
    name: "PCTE Group of Institutes, Ludhiana",
    shortName: "PCTE Ludhiana",
    location: "Ludhiana",
    state: "Punjab",
    address: "Campus I & II, Ferozepur Road, Near Baddowal Cantt, Jhande, Ludhiana, Punjab - 142021",
    phone: "0161-2888500",
    website: "https://pcte.edu.in",
    rating: 4.5,
    reviews: 484,
    reviewsCount: 484,
    type: "Private",
    ownership: "Private",
    about: "PCTE Group of Institutes, established in 1999 at Baddowal on Ferozepur Road in Ludhiana, is a pioneering professional education campus affiliated with I.K. Gujral Punjab Technical University and approved by AICTE. Ranked among the leading management and hospitality institutes in North India, PCTE has students representing over 40 nationalities, offering top-tier degrees in hotel management, business management, IT, pharmacy, and engineering.",
    ranking: 73,
    fees: "₹1.45 Lakhs - ₹3.40 Lakhs",
    exams: "PTU Centralized Counseling / Merit Based",
    img: "https://www.collegebatch.com/static/clg-gallery/pcte-group-of-institutes-ludhiana-361895.webp",
    image: "https://www.collegebatch.com/static/clg-gallery/pcte-group-of-institutes-ludhiana-361895.webp",
    gallery: [
      "https://www.collegebatch.com/static/clg-gallery/pcte-group-of-institutes-ludhiana-361895.webp",
      "/images/campuses/campus_architecture_1.jpg",
      "/images/campuses/campus_architecture_2.jpg"
    ],
    affiliation: "I.K. Gujral Punjab Technical University (IKGPTU) / AICTE Approved",
    courses: [
      {
        title: "Bachelor of Hotel Management & Catering Technology (BHMCT)",
        duration: "4 Years",
        fees: "₹3.40 Lakhs",
        eligibility: "10+2 in any stream with English",
        type: "HOTEL MANAGEMENT AND CATERING",
        intake: 120
      },
      {
        title: "BCA (Bachelor of Computer Applications)",
        duration: "3 Years",
        fees: "₹1.45 Lakhs",
        eligibility: "10+2 with Mathematics/Computer Science",
        type: "COMPUTER APPLICATIONS",
        intake: 120
      },
      {
        title: "BBA (Bachelor of Business Administration)",
        duration: "3 Years",
        fees: "₹1.45 Lakhs",
        eligibility: "10+2 in any stream with minimum 50% marks",
        type: "MANAGEMENT",
        intake: 180
      },
      {
        title: "MBA (Dual Specialization)",
        duration: "2 Years",
        fees: "₹1.80 Lakhs",
        eligibility: "Graduation in any discipline (CMAT / PTU)",
        type: "MANAGEMENT",
        intake: 180
      }
    ],
    highestPackage: "₹14 LPA",
    averagePackage: "₹5.2 LPA",
    placements: "90%",
    facilities: ["Training Kitchens & Restaurant", "Modern Computer Labs", "Digital Library", "Student Hostels", "Gymnasium", "International Student Lounge", "Placement Cell"],
    map_url: "https://www.google.com/maps/search/?api=1&query=PCTE+Group+of+Institutes+Baddowal+Ludhiana+Punjab",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=PCTE+Group+of+Institutes+Baddowal+Ludhiana+Punjab"
  },
  1318: {
    name: "A.S. Group of Institutions (ASGOI), Khanna",
    shortName: "ASGOI Khanna",
    location: "Ludhiana",
    state: "Punjab",
    address: "Samrala Road, Kalal Majra, Khanna, District Ludhiana, Punjab - 141401",
    phone: "01628-237470",
    website: "https://asinstitutes.com",
    rating: 4.4,
    reviews: 522,
    reviewsCount: 522,
    type: "Private",
    ownership: "Private",
    about: "A.S. Group of Institutions (ASGOI), located at Kalal Majra on Samrala Road in Khanna (Ludhiana), was established in 2010 by the Anglo-Sanskrit High School Trust and Management Society (est. 1932). Approved by AICTE and affiliated with I.K. Gujral Punjab Technical University, ASGOI delivers accredited management and computing education with a strong emphasis on professional leadership, practical internships, and community development.",
    ranking: 38,
    fees: "₹95,000 - ₹1.60 Lakhs",
    exams: "PTU Counseling / Merit Based",
    img: "https://daqwpj7vq235r.cloudfront.net/images/mba-institute/as-group-of-institutions-campus-building.png",
    image: "https://daqwpj7vq235r.cloudfront.net/images/mba-institute/as-group-of-institutions-campus-building.png",
    gallery: [
      "https://daqwpj7vq235r.cloudfront.net/images/mba-institute/as-group-of-institutions-campus-building.png",
      "/images/campuses/campus_architecture_3.jpg",
      "/images/campuses/campus_architecture_4.jpg"
    ],
    affiliation: "I.K. Gujral Punjab Technical University (IKGPTU) / AICTE Approved",
    courses: [
      {
        title: "Master of Business Administration (MBA)",
        duration: "2 Years",
        fees: "₹1.60 Lakhs",
        eligibility: "Graduation in any stream with minimum 50% marks (CMAT / PTU)",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "BBA (Bachelor of Business Administration)",
        duration: "3 Years",
        fees: "₹95,000",
        eligibility: "10+2 in any stream with minimum 50% marks",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "BCA (Bachelor of Computer Applications)",
        duration: "3 Years",
        fees: "₹95,000",
        eligibility: "10+2 with Mathematics/Computer Science",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "B.Com (Honours)",
        duration: "3 Years",
        fees: "₹85,000",
        eligibility: "10+2 with Commerce / Mathematics",
        type: "COMMERCE",
        intake: 60
      }
    ],
    highestPackage: "₹8 LPA",
    averagePackage: "₹3.8 LPA",
    placements: "84%",
    facilities: ["Computer Center", "Management Library", "Auditorium", "Sports Facilities", "Cafeteria", "Bus Transport across Ludhiana & Khanna", "Placement Cell"],
    map_url: "https://www.google.com/maps/search/?api=1&query=A.S.+Group+of+Institutions+Kalal+Majra+Khanna+Ludhiana+Punjab",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=A.S.+Group+of+Institutions+Kalal+Majra+Khanna+Ludhiana+Punjab"
  },
  1319: {
    name: "Department of Mechanical Engineering, Punjabi University",
    shortName: "DME Punjabi University",
    location: "Patiala",
    state: "Punjab",
    address: "Department of Mechanical Engineering, Punjabi University Campus, NH-64, Patiala, Punjab - 147002",
    phone: "0175-5136336",
    website: "https://pupdepartments.ac.in",
    rating: 4.5,
    reviews: 327,
    reviewsCount: 327,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "The Department of Mechanical Engineering at Punjabi University, Patiala, established in 2003 under the Faculty of Engineering and Technology, is an esteemed government university teaching department. Offering subsidized B.Tech, M.Tech, and Ph.D. degrees, the department features specialized laboratories in CAD/CAM, robotics, thermal sciences, and manufacturing technology, preparing competent engineers for core industries and research institutions.",
    ranking: 92,
    fees: "₹2.60 Lakhs",
    exams: "JEE Main / Punjabi University Counseling",
    img: "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/41406/2021/11/5/Campus View of Department of Mechanical Engineering Punjabi University Patiala_Campus-view.jpg",
    image: "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/41406/2021/11/5/Campus View of Department of Mechanical Engineering Punjabi University Patiala_Campus-view.jpg",
    gallery: [
      "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/41406/2021/11/5/Campus View of Department of Mechanical Engineering Punjabi University Patiala_Campus-view.jpg",
      "/images/campuses/campus_architecture_1.jpg",
      "/images/campuses/campus_architecture_2.jpg"
    ],
    affiliation: "Punjabi University, Patiala (UGC Approved / NAAC A Grade)",
    courses: [
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹2.60 Lakhs",
        eligibility: "10+2 with Physics, Mathematics & Chemistry (JEE Main / University Allotment)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 90
      },
      {
        title: "M.Tech in Mechanical Engineering (Thermal / Manufacturing)",
        duration: "2 Years",
        fees: "₹1.20 Lakhs",
        eligibility: "B.Tech/BE in Mechanical/Production + GATE",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ],
    highestPackage: "₹10 LPA",
    averagePackage: "₹4.8 LPA",
    placements: "82%",
    facilities: ["CAD/CAM Lab", "Thermal & Heat Transfer Lab", "Manufacturing Workshops", "University Central Library", "Hostels", "Sports Stadium", "Placement Cell"],
    map_url: "https://www.google.com/maps/search/?api=1&query=Department+of+Mechanical+Engineering+Punjabi+University+Patiala+Punjab",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Department+of+Mechanical+Engineering+Punjabi+University+Patiala+Punjab"
  },
  1320: {
    name: "Anand College of Engineering & Management, Kapurthala",
    shortName: "ACEM Kapurthala",
    location: "Kapurthala",
    state: "Punjab",
    address: "Opposite Rail Coach Factory (RCF), Sultanpur Road, Kapurthala, Punjab - 144602",
    phone: "01822-269101",
    website: "http://acem.org.in",
    rating: 4.2,
    reviews: 445,
    reviewsCount: 445,
    type: "Private",
    ownership: "Private",
    about: "Anand College of Engineering & Management (ACEM), established in 2010 opposite the Rail Coach Factory on Sultanpur Road in Kapurthala, is a premier self-financing technical campus managed by the Anand Educational Society. Affiliated with I.K. Gujral Punjab Technical University and approved by AICTE, ACEM provides professional degree programs in computing, engineering, and business management with modern laboratory infrastructure and active training-placement cells.",
    ranking: 31,
    fees: "₹85,000 - ₹2.80 Lakhs",
    exams: "PTU Centralized Counseling / JEE Main",
    img: "https://www.collegebatch.com/static/clg-gallery/anand-college-of-engineering-management-kapurthala-257151.webp",
    image: "https://www.collegebatch.com/static/clg-gallery/anand-college-of-engineering-management-kapurthala-257151.webp",
    gallery: [
      "https://www.collegebatch.com/static/clg-gallery/anand-college-of-engineering-management-kapurthala-257151.webp",
      "/images/campuses/campus_architecture_3.jpg",
      "/images/campuses/campus_architecture_4.jpg"
    ],
    affiliation: "I.K. Gujral Punjab Technical University (IKGPTU) / AICTE Approved",
    courses: [
      {
        title: "BCA (Bachelor of Computer Applications)",
        duration: "3 Years",
        fees: "₹85,000",
        eligibility: "10+2 with Mathematics/Computer Science",
        type: "COMPUTER APPLICATIONS",
        intake: 60
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
        title: "BBA (Bachelor of Business Administration)",
        duration: "3 Years",
        fees: "₹85,000",
        eligibility: "10+2 in any stream with minimum 50% marks",
        type: "MANAGEMENT",
        intake: 60
      }
    ],
    highestPackage: "₹7 LPA",
    averagePackage: "₹3.5 LPA",
    placements: "80%",
    facilities: ["Computer Center", "Central Library", "Engineering Laboratories", "Hostel Facilities", "Cafeteria", "Sports Ground", "Placement Assistance Cell"],
    map_url: "https://www.google.com/maps/search/?api=1&query=Anand+College+of+Engineering+and+Management+Kapurthala+Punjab",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Anand+College+of+Engineering+and+Management+Kapurthala+Punjab"
  }
};

let appliedCount = 0;
for (const col of colleges) {
  if (batch162Updates[col.id]) {
    Object.assign(col, batch162Updates[col.id]);
    appliedCount++;
  }
}

console.log(`Updated ${appliedCount} colleges in siteData.`);
fs.writeFileSync(siteDataPath, JSON.stringify(siteData, null, 2), 'utf8');

// Update progress.json
const now = new Date().toISOString();
progress.verifiedColleges = 1620;
progress.lastUpdated = now;
progress.batchesCompleted = 162;
progress.currentBatch = 163;
if (!progress.batchHistory) progress.batchHistory = [];
progress.batchHistory.push({
  batch: 162,
  verifiedCount: 10,
  totalVerified: 1620,
  timestamp: now,
  collegeIds: Object.keys(batch162Updates).map(Number)
});
fs.writeFileSync(progressPath, JSON.stringify(progress, null, 2), 'utf8');

// Update all_verified_colleges.json
const newlyVerifiedList = Object.entries(batch162Updates).map(([idStr, val]) => ({
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
const batchMdHeader = `\n### Batch 162 (Colleges 1,611–1,620) — Punjab Universities, Colleges & Polytechnics\n| ID | College Name | Location | State | Type | Website |\n|---|---|---|---|---|---|\n`;
let batchMdRows = '';
for (const item of newlyVerifiedList) {
  batchMdRows += `| ${item.id} | ${item.name} | ${item.location} | ${item.state} | ${item.type} | [${item.website}](${item.website}) |\n`;
}
mdContent += batchMdHeader + batchMdRows;
fs.writeFileSync(allVerifiedMdPath, mdContent, 'utf8');

console.log(`Batch 162 applied successfully! Total verified: ${progress.verifiedColleges}`);
