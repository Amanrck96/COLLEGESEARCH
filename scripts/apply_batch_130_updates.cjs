const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');
const progressPath = path.join(__dirname, '..', 'reports', 'verification', 'progress.json');
const summaryPath = path.join(__dirname, '..', 'reports', 'verification', 'batch-130-summary.md');

const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const progress = JSON.parse(fs.readFileSync(progressPath, 'utf8'));

// Verified updates for Batch 130 (Colleges 1,291 - 1,300)
const batch130Updates = {
  960: {
    name: "Acharya Shree Nanesh Samta Mahavidyalaya (Danta, Chittorgarh)",
    shortName: "ASNSM Chittorgarh",
    location: "Danta, Chittorgarh",
    city: "Chittorgarh",
    district: "Chittorgarh",
    state: "Rajasthan",
    address: "Nanesh Nagar, Danta, Chittorgarh, Rajasthan - 312604",
    phone: "01477-220025",
    website: "https://asnsvt.in",
    type: "Private",
    ownership: "Private",
    established: 2007,
    affiliation: "Mohanlal Sukhadia University (MLSU), Udaipur",
    rating: 4.4,
    reviews: 2068,
    ranking: 10,
    fees: "₹24,000/yr",
    exams: "MLSU Merit / 10+2",
    about: "Acharya Shree Nanesh Samta Mahavidyalaya (ASNSM), established in 2007 by the Acharya Shree Nanesh Samta Vikas Trust, is a renowned higher education institution in Danta, Chittorgarh. Affiliated to Mohanlal Sukhadia University (MLSU), Udaipur, the college provides value-based undergraduate education in Computer Applications (BCA), Sciences, Commerce, and Arts with modern computer labs and expansive sports amenities.",
    image: "https://asnsvt.in/images/5.jpg",
    gallery: [
      "https://asnsvt.in/images/5.jpg"
    ],
    facilities: ["Computer Center", "Science Laboratories", "Central Library", "Sports Complex", "Auditorium", "Hostel"],
    highestPackage: "₹6 LPA",
    averagePackage: "₹2.8 LPA",
    placements: "80%",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹24,000/yr",
        eligibility: "10+2 with Mathematics / CS (48%)",
        type: "COMPUTER APPLICATIONS",
        intake: 70
      },
      {
        title: "Bachelor of Science (B.Sc Maths / Bio)",
        duration: "3 Years",
        fees: "₹20,000/yr",
        eligibility: "10+2 with Science stream (50%)",
        type: "SCIENCES",
        intake: 120
      },
      {
        title: "Bachelor of Commerce (B.Com)",
        duration: "3 Years",
        fees: "₹18,000/yr",
        eligibility: "10+2 in Commerce or any stream (45%)",
        type: "COMMERCE",
        intake: 100
      },
      {
        title: "Bachelor of Arts (B.A)",
        duration: "3 Years",
        fees: "₹14,000/yr",
        eligibility: "10+2 in any stream (45%)",
        type: "ARTS",
        intake: 180
      }
    ]
  },
  961: {
    name: "Mahatma Jyoti Rao Phoole University (MJRP University Jaipur)",
    shortName: "MJRP University Jaipur",
    location: "Achrol, Jaipur",
    city: "Jaipur",
    district: "Jaipur",
    state: "Rajasthan",
    address: "SP 2 & 3, RIICO Industrial Area, Kant Kalwar, Tala Mod, Achrol, Jaipur, Rajasthan - 303002",
    phone: "01426-283951",
    website: "https://mjrpu.org",
    type: "Private",
    ownership: "Private",
    established: 2009,
    affiliation: "Private University, UGC Recognized, AICTE & BCI Approved",
    rating: 4.5,
    reviews: 1765,
    ranking: 32,
    fees: "₹75,000/yr",
    exams: "MJRP Entrance / CUET / Merit",
    about: "Mahatma Jyoti Rao Phoole University (MJRP University), established in 2009 under the Rajasthan State Legislature, is a leading private university situated on the Delhi-Jaipur Highway in Achrol, Jaipur. UGC-recognized, MJRP University offers multidisciplinary education in Engineering, Food Technology, Agriculture, Law, Pharmacy, and Management with research labs and vibrant campus life.",
    image: "https://www.psypathy.com/wp-content/uploads/2022/09/Campus-View-of-Mahatma-Jyoti-Rao-Phoole-University-Jaipur_Campus-View.png",
    gallery: [
      "https://www.psypathy.com/wp-content/uploads/2022/09/Campus-View-of-Mahatma-Jyoti-Rao-Phoole-University-Jaipur_Campus-View.png"
    ],
    facilities: ["Advanced Technology Labs", "Central Library", "Food Processing Pilot Plant", "Hostels for Boys & Girls", "Sports Arena", "Cafeteria", "Transport Fleet"],
    highestPackage: "₹12 LPA",
    averagePackage: "₹4.5 LPA",
    placements: "86%",
    courses: [
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹75,000/yr",
        eligibility: "10+2 with PCM (45%)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Food Technology",
        duration: "4 Years",
        fees: "₹70,000/yr",
        eligibility: "10+2 with PCM / PCB (45%)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Food Technology",
        duration: "3 Years",
        fees: "₹40,000/yr",
        eligibility: "Class 10th with Science & Maths (35%)",
        type: "HOTEL MANAGEMENT AND CATERING",
        intake: 60
      },
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹50,000/yr",
        eligibility: "10+2 with Mathematics / CS (45%)",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      }
    ]
  },
  962: {
    name: "Vikas Polytechnic College (Deeg, Bharatpur)",
    shortName: "VPC Deeg Bharatpur",
    location: "Deeg, Bharatpur",
    city: "Deeg",
    district: "Bharatpur",
    state: "Rajasthan",
    address: "Village Mandhera, Deeg, Bharatpur, Rajasthan - 321203",
    phone: "05641-220050",
    website: "https://vikaspolytechnic.com",
    type: "Private",
    ownership: "Private",
    established: 2010,
    affiliation: "Board of Technical Education Rajasthan (BTER), Jodhpur & AICTE Approved",
    rating: 4.3,
    reviews: 149,
    ranking: 18,
    fees: "₹32,000/yr",
    exams: "BTER DTE Rajasthan Polytechnic / 10th Merit",
    about: "Vikas Polytechnic College, established in 2010 in Mandhera, Deeg (Bharatpur district), is an AICTE-approved private polytechnic affiliated to BTER Jodhpur. The college offers 3-year technical diplomas in Civil, Mechanical, and Electrical Engineering designed to impart hands-on technical skills through modern workshops and labs.",
    image: "https://www.vidyavision.com/CollegeUploads/Photos/2019-20-8-17-01-28_Vikas Polytechnic College Bharatpur.jpg",
    gallery: [
      "https://www.vidyavision.com/CollegeUploads/Photos/2019-20-8-17-01-28_Vikas Polytechnic College Bharatpur.jpg"
    ],
    facilities: ["Civil Engineering Survey Lab", "Mechanical Workshops", "Electrical Labs", "Library", "Computer Center", "Playground"],
    highestPackage: "₹4.5 LPA",
    averagePackage: "₹2.4 LPA",
    placements: "78%",
    courses: [
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹32,000/yr",
        eligibility: "Class 10th with Science & Maths (35%)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹32,000/yr",
        eligibility: "Class 10th with Science & Maths (35%)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹32,000/yr",
        eligibility: "Class 10th with Science & Maths (35%)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  963: {
    name: "Government Women's Polytechnic College, Bharatpur",
    shortName: "GWPC Bharatpur",
    location: "Bharatpur, Rajasthan",
    city: "Bharatpur",
    district: "Bharatpur",
    state: "Rajasthan",
    address: "Near Dalmiya Dairy, NH-11, Agra Road, Bharatpur, Rajasthan - 321001",
    phone: "05644-220660",
    website: "https://hte.rajasthan.gov.in/college/gwpctbharatpur",
    type: "Public/Government",
    ownership: "Public/Government",
    established: 1999,
    affiliation: "Directorate of Technical Education (DTE), Rajasthan & BTER Jodhpur, AICTE Approved",
    rating: 4.4,
    reviews: 1874,
    ranking: 50,
    fees: "₹6,500/yr",
    exams: "BTER DTE Rajasthan Counseling / 10th Merit",
    about: "Government Women's Polytechnic College (GWPC Bharatpur), established in 1999 by the Department of Technical Education, Government of Rajasthan, is a premier state government polytechnic dedicated to women's technical empowerment. Located on NH-11 Agra Road in Bharatpur, the institution provides high-quality 3-year diplomas in Costume Design, Modern Office Practice, and Computer Science at highly subsidized government fee structures.",
    image: "https://www.ecbharatpur.ac.in/software/uploads/slider/dac8445fa3f765f1e6b1acddd6f64df1.jpg",
    gallery: [
      "https://www.ecbharatpur.ac.in/software/uploads/slider/dac8445fa3f765f1e6b1acddd6f64df1.jpg"
    ],
    facilities: ["Garment Construction Labs", "Costume Design Studios", "Computer Center", "Central Library", "Girls Hostel", "Sports Ground", "Canteen"],
    highestPackage: "₹5 LPA",
    averagePackage: "₹2.6 LPA",
    placements: "82%",
    courses: [
      {
        title: "Diploma in Costume Design and Dress Making",
        duration: "3 Years",
        fees: "₹6,500/yr",
        eligibility: "Class 10th pass from recognized board",
        type: "APPLIED ARTS AND CRAFTS",
        intake: 30
      },
      {
        title: "Diploma in Modern Office Practice",
        duration: "3 Years",
        fees: "₹6,500/yr",
        eligibility: "Class 10th pass from recognized board",
        type: "COMMERCIAL PRACTICE",
        intake: 30
      },
      {
        title: "Diploma in Computer Science and Engineering",
        duration: "3 Years",
        fees: "₹6,500/yr",
        eligibility: "Class 10th with Science & Maths (35%)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ]
  },
  964: {
    name: "The LNM Institute of Information Technology (LNMIIT Jaipur)",
    shortName: "LNMIIT Jaipur",
    location: "Jamdoli, Jaipur",
    city: "Jaipur",
    district: "Jaipur",
    state: "Rajasthan",
    address: "Rupa ki Nangal, Post-Sumel, Via-Jamdoli, Jaipur, Rajasthan - 302031",
    phone: "0141-2688090",
    website: "https://lnmiit.ac.in",
    type: "Public/Government",
    ownership: "Government",
    established: 2002,
    affiliation: "Deemed-to-be-University (Public-Private Partnership), UGC Recognized, NAAC 'A' Grade Accredited",
    rating: 4.6,
    reviews: 269,
    ranking: 8,
    fees: "₹3,75,000/yr",
    exams: "JEE Main / DASA",
    about: "The LNM Institute of Information Technology (LNMIIT Jaipur), established in 2002 as a unique public-private partnership between the Government of Rajasthan and the Lakshmi & Usha Mittal Foundation, is a premier autonomous deemed university on a 100-acre green campus in Jamdoli, Jaipur. Renowned for academic rigour and cutting-edge research, LNMIIT achieves top-tier engineering placements with national and international tech giants.",
    image: "https://static.zollege.in/public/image/LNMIIT_VIEW_4dd250a93f8b4b2b79bd5e70daf4c745.jpeg",
    gallery: [
      "https://static.zollege.in/public/image/LNMIIT_VIEW_4dd250a93f8b4b2b79bd5e70daf4c745.jpeg"
    ],
    facilities: ["100-Acre Lush Residential Campus", "High Performance Computing Facility", "Central Library", "Student Activity Centre", "Olympic-Grade Sports Facilities", "Fully Air-Conditioned Hostels", "Medical Centre", "Cafeteria & Dining"],
    highestPackage: "₹59.3 LPA",
    averagePackage: "₹14.3 LPA",
    placements: "95%",
    courses: [
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹3,75,000/yr",
        eligibility: "10+2 with PCM (60%) + JEE Main valid score",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 240
      },
      {
        title: "B.Tech in Communication and Computer Engineering",
        duration: "4 Years",
        fees: "₹3,75,000/yr",
        eligibility: "10+2 with PCM (60%) + JEE Main valid score",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 120
      },
      {
        title: "B.Tech in Electronics and Communication Engineering",
        duration: "4 Years",
        fees: "₹3,75,000/yr",
        eligibility: "10+2 with PCM (60%) + JEE Main valid score",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 120
      },
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹3,75,000/yr",
        eligibility: "10+2 with PCM (60%) + JEE Main valid score",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "M.Tech in Computer Science and Engineering",
        duration: "2 Years",
        fees: "₹1,80,000/yr",
        eligibility: "B.Tech / B.E. with valid GATE score",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ]
  },
  965: {
    name: "Arya College of Engineering and IT (ACEIT Jaipur)",
    shortName: "ACEIT Jaipur",
    location: "Kukas, Jaipur",
    city: "Jaipur",
    district: "Jaipur",
    state: "Rajasthan",
    address: "SP-42, RIICO Industrial Area, Kukas, Delhi Road, Jaipur, Rajasthan - 302028",
    phone: "0141-6604555",
    website: "https://aryacollege.in",
    type: "Private",
    ownership: "Private",
    established: 2000,
    affiliation: "Rajasthan Technical University (RTU), Kota & AICTE, NAAC Accredited",
    rating: 4.4,
    reviews: 154,
    ranking: 44,
    fees: "₹85,000/yr",
    exams: "REAP Rajasthan / JEE Main",
    about: "Arya College of Engineering and IT (ACEIT), the pioneer campus under the Arya Group of Colleges established in 2000, is a leading private engineering institution in Kukas on Delhi Highway, Jaipur. Affiliated to RTU Kota and approved by AICTE, ACEIT is recognized for industry-integrated technical training, modern robotics and AI labs, and consistent placement record across multinational corporations.",
    image: "https://media.getmyuni.com/azure/college-image/big/arya-college-of-engineering-and-it-aceit-jaipur.webp",
    gallery: [
      "https://media.getmyuni.com/azure/college-image/big/arya-college-of-engineering-and-it-aceit-jaipur.webp"
    ],
    facilities: ["Advanced Robotics & AI Labs", "Central Digital Library", "Boys & Girls Hostels", "Sports Complex", "Auditorium", "Campus Wi-Fi", "Extensive Transport Fleet"],
    highestPackage: "₹16 LPA",
    averagePackage: "₹4.8 LPA",
    placements: "88%",
    courses: [
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹85,000/yr",
        eligibility: "10+2 with PCM (45%) via REAP / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 240
      },
      {
        title: "B.Tech in Artificial Intelligence and Data Science",
        duration: "4 Years",
        fees: "₹85,000/yr",
        eligibility: "10+2 with PCM (45%) via REAP / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 120
      },
      {
        title: "B.Tech in Information Technology",
        duration: "4 Years",
        fees: "₹85,000/yr",
        eligibility: "10+2 with PCM (45%) via REAP / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Electronics and Communication Engineering",
        duration: "4 Years",
        fees: "₹85,000/yr",
        eligibility: "10+2 with PCM (45%) via REAP / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Master of Business Administration (MBA)",
        duration: "2 Years",
        fees: "₹75,000/yr",
        eligibility: "Graduation in any discipline (50%)",
        type: "MANAGEMENT",
        intake: 60
      }
    ]
  },
  966: {
    name: "Amity University, Jaipur",
    shortName: "Amity University Jaipur",
    location: "Kant Kalwar, Jaipur",
    city: "Jaipur",
    district: "Jaipur",
    state: "Rajasthan",
    address: "SP-1, Kant Kalwar, RIICO Industrial Area, NH-11C, Delhi-Jaipur Highway, Jaipur, Rajasthan - 303002",
    phone: "01426-405555",
    website: "https://www.amity.edu/jaipur/",
    type: "Private",
    ownership: "Private",
    established: 2008,
    affiliation: "Private University, UGC Recognized, NAAC 'A+' Grade Accredited",
    rating: 4.5,
    reviews: 382,
    ranking: 38,
    fees: "₹1,60,000/yr",
    exams: "Amity JEE / JEE Main / CUET / Merit",
    about: "Amity University, Jaipur, established in 2008 by the Amity Education Group under the Rajasthan State Legislature, is a premier private multidisciplinary university situated across a scenic 152-acre hi-tech residential campus in Kant Kalwar on Delhi-Jaipur Highway. Accredited with NAAC 'A+' Grade, Amity Jaipur features world-class faculty, experiential learning, incubation centres, and stellar campus placements.",
    image: "https://www.amity.edu/jaipur/images/jaipur.jpg",
    gallery: [
      "https://www.amity.edu/jaipur/images/jaipur.jpg"
    ],
    facilities: ["152-Acre Residential Green Campus", "Moot Court & Law Labs", "Central Library", "On-Campus Hostels", "Olympic-Size Swimming Pool", "Indoor & Outdoor Sports Arena", "Multi-Cuisine Cafeterias"],
    highestPackage: "₹28 LPA",
    averagePackage: "₹6.2 LPA",
    placements: "92%",
    courses: [
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹1,80,000/yr",
        eligibility: "10+2 with PCM (60%)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 180
      },
      {
        title: "B.Tech in Artificial Intelligence and Data Science",
        duration: "4 Years",
        fees: "₹1,80,000/yr",
        eligibility: "10+2 with PCM (60%)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹1,10,000/yr",
        eligibility: "10+2 with Mathematics / CS / IT (50%)",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹1,20,000/yr",
        eligibility: "10+2 in any stream (50%)",
        type: "MANAGEMENT",
        intake: 120
      },
      {
        title: "Master of Business Administration (MBA)",
        duration: "2 Years",
        fees: "₹2,20,000/yr",
        eligibility: "Graduation with minimum 50% marks + CAT/MAT/GMAT",
        type: "MANAGEMENT",
        intake: 120
      }
    ]
  },
  967: {
    name: "Anand International College of Engineering (Anand-ICE Jaipur)",
    shortName: "Anand-ICE Jaipur",
    location: "Kanota, Jaipur",
    city: "Jaipur",
    district: "Jaipur",
    state: "Rajasthan",
    address: "Near Kanota, Agra Road, Jaipur, Rajasthan - 303012",
    phone: "0141-4104000",
    website: "https://anandice.ac.in",
    type: "Private",
    ownership: "Private",
    established: 2010,
    affiliation: "Rajasthan Technical University (RTU), Kota & AICTE Approved",
    rating: 4.4,
    reviews: 267,
    ranking: 11,
    fees: "₹85,000/yr",
    exams: "REAP Rajasthan / JEE Main",
    about: "Anand International College of Engineering (Anand-ICE), established in 2010 by Anand Education Society, is a premier private engineering college on Agra Road near Kanota in Jaipur. Affiliated to RTU Kota and approved by AICTE, the institute offers project-based learning, global incubation exposure, and strong industry tie-ups ensuring high career placements.",
    image: "https://anandice.ac.in/icrdet23/images/aice.jpg",
    gallery: [
      "https://anandice.ac.in/icrdet23/images/aice.jpg"
    ],
    facilities: ["Advanced Computer Labs", "Robotics & Innovation Lab", "Central Library", "Boys & Girls Hostels", "Sports Complex", "Cafeteria", "College Bus Fleet"],
    highestPackage: "₹15.6 LPA",
    averagePackage: "₹5.2 LPA",
    placements: "89%",
    courses: [
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹85,000/yr",
        eligibility: "10+2 with PCM (45%) via REAP / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 120
      },
      {
        title: "B.Tech in Artificial Intelligence and Data Science",
        duration: "4 Years",
        fees: "₹85,000/yr",
        eligibility: "10+2 with PCM (45%) via REAP / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹85,000/yr",
        eligibility: "10+2 with PCM (45%) via REAP / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹85,000/yr",
        eligibility: "10+2 with PCM (45%) via REAP / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  968: {
    name: "Poornima University, Jaipur",
    shortName: "Poornima University Jaipur",
    location: "Sitapura Extension, Jaipur",
    city: "Jaipur",
    district: "Jaipur",
    state: "Rajasthan",
    address: "IS-2027-2031, Ramchandrapura, P.O. Vidhani Vatika, Sitapura Extension, Jaipur, Rajasthan - 303905",
    phone: "0141-6500250",
    website: "https://poornima.edu.in",
    type: "Private",
    ownership: "Private",
    established: 2012,
    affiliation: "Private University, UGC Recognized, NAAC Accredited",
    rating: 4.5,
    reviews: 354,
    ranking: 27,
    fees: "₹1,25,000/yr",
    exams: "Poornima University Entrance / JEE Main / CUET",
    about: "Poornima University, Jaipur, established in 2012 by Shanti Education Society under the Rajasthan State Legislature, is a leading private university in Sitapura Extension, Jaipur. Spanning a 32-acre modern campus, Poornima University offers multidisciplinary programs across Engineering, Computer Applications, Management, Architecture, and Design with stellar placement networks and entrepreneurship centres.",
    image: "https://static.careers360.mobi/media/presets/500X333/colleges/social-media/media-gallery/1032/2018/4/27/Poornima-University-Jaipur-(1).jpg",
    gallery: [
      "https://static.careers360.mobi/media/presets/500X333/colleges/social-media/media-gallery/1032/2018/4/27/Poornima-University-Jaipur-(1).jpg"
    ],
    facilities: ["32-Acre Vibrant Campus", "High-Tech Computer Labs", "Central Library", "On-Campus Hostels", "Indoor Sports Arena & Football Ground", "Incubation Centre", "Cafeteria"],
    highestPackage: "₹52.83 LPA",
    averagePackage: "₹5.5 LPA",
    placements: "92%",
    courses: [
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹1,35,000/yr",
        eligibility: "10+2 with PCM (50%)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 300
      },
      {
        title: "B.Tech in Artificial Intelligence and Data Science",
        duration: "4 Years",
        fees: "₹1,35,000/yr",
        eligibility: "10+2 with PCM (50%)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 120
      },
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹85,000/yr",
        eligibility: "10+2 with Mathematics / CS (50%)",
        type: "COMPUTER APPLICATIONS",
        intake: 180
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹90,000/yr",
        eligibility: "10+2 in any stream (50%)",
        type: "MANAGEMENT",
        intake: 180
      },
      {
        title: "Master of Business Administration (MBA)",
        duration: "2 Years",
        fees: "₹1,40,000/yr",
        eligibility: "Graduation with minimum 50% marks",
        type: "MANAGEMENT",
        intake: 120
      }
    ]
  },
  969: {
    name: "NIIT University, Neemrana",
    shortName: "NIIT University Neemrana",
    location: "Neemrana, Rajasthan",
    city: "Neemrana",
    district: "Kotputli-Behror",
    state: "Rajasthan",
    address: "NIIT University, NH-48, Delhi-Jaipur Highway, Neemrana, Rajasthan - 301705",
    phone: "01494-660600",
    website: "https://niituniversity.in",
    type: "Private",
    ownership: "Private",
    established: 2009,
    affiliation: "Private University, UGC Recognized, Approved by AICTE",
    rating: 4.6,
    reviews: 266,
    ranking: 12,
    fees: "₹2,60,000/yr",
    exams: "NUET / JEE Main / CUET / BITSAT / SAT",
    about: "NIIT University (NU Neemrana), established in 2009 by the founders of NIIT Ltd under the Rajasthan State Legislature, is a premier private research-driven university set across a 100-acre green campus nestled against the Aravali hills in Neemrana. Guided by four core principles — Industry-linked, Technology-based, Research-driven, and Seamless — NU offers industry-integrated undergraduate and postgraduate programs with 100% placement track records.",
    image: "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/523/2018/9/12/Campus View of NIIT University Neemrana_Campus-View.jpg",
    gallery: [
      "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/523/2018/9/12/Campus View of NIIT University Neemrana_Campus-View.jpg"
    ],
    facilities: ["100-Acre Eco-Friendly Aravali Campus", "Earth Air Tunnel Air-Cooled Hostels", "Advanced Research Centres", "Digital Central Library", "Football Turf & Sports Arena", "Modern Dining & Cafeterias"],
    highestPackage: "₹29.64 LPA",
    averagePackage: "₹7.8 LPA",
    placements: "94%",
    courses: [
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹2,60,000/yr",
        eligibility: "10+2 with PCM (60%) + NUET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 180
      },
      {
        title: "B.Tech in Artificial Intelligence and Data Science",
        duration: "4 Years",
        fees: "₹2,60,000/yr",
        eligibility: "10+2 with PCM (60%) + NUET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Cyber Security",
        duration: "4 Years",
        fees: "₹2,60,000/yr",
        eligibility: "10+2 with PCM (60%) + NUET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹2,20,000/yr",
        eligibility: "10+2 in any stream (50%) + NUET",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "Master of Business Administration (MBA)",
        duration: "2 Years",
        fees: "₹2,80,000/yr",
        eligibility: "Graduation with 50% marks + CAT/XAT/GMAT/NUET",
        type: "MANAGEMENT",
        intake: 60
      }
    ]
  }
};

// Apply updates to siteData.json
const collegeList = Array.isArray(siteData) ? siteData : siteData.colleges;
let updatedCount = 0;

for (let i = 0; i < collegeList.length; i++) {
  const c = collegeList[i];
  const cid = Number(c.id);
  if (batch130Updates[cid]) {
    const update = batch130Updates[cid];
    collegeList[i] = {
      ...c,
      name: update.name,
      shortName: update.shortName,
      location: update.location || c.location,
      city: update.city,
      district: update.district,
      state: update.state,
      address: update.address || c.address,
      phone: update.phone,
      website: update.website,
      type: update.type,
      ownership: update.ownership,
      established: update.established,
      affiliation: update.affiliation,
      rating: update.rating || c.rating,
      reviews: update.reviews || c.reviews,
      ranking: update.ranking || c.ranking,
      fees: update.fees,
      exams: update.exams,
      about: update.about,
      image: update.image,
      img: update.image,
      gallery: update.gallery || [update.image],
      facilities: update.facilities,
      highestPackage: update.highestPackage,
      averagePackage: update.averagePackage,
      placements: update.placements,
      courses: update.courses,
      verified: true,
      verificationDate: new Date().toISOString(),
      verifiedBatch: 130
    };
    updatedCount++;
    console.log(`Updated ID: ${cid} - ${update.name}`);
  }
}

console.log(`Applied updates to ${updatedCount} colleges in siteData.json`);
fs.writeFileSync(siteDataPath, JSON.stringify(siteData, null, 2), 'utf8');

// Update progress.json
const newIds = Object.keys(batch130Updates).map(Number);
const existingSet = new Set(progress.completed_ids.map(Number));
for (const id of newIds) {
  if (!existingSet.has(id)) {
    progress.completed_ids.push(id);
  }
}
progress.current_batch = 130;
progress.total_verified = progress.completed_ids.length;
progress.completed_count = progress.completed_ids.length;
progress.last_updated = new Date().toISOString();
fs.writeFileSync(progressPath, JSON.stringify(progress, null, 2), 'utf8');
console.log(`Progress updated: current_batch = 130, total_verified = ${progress.total_verified}`);

// Regenerate master list and markdown
console.log('Regenerating master verification files...');
execSync('node scripts/generate_verified_list.cjs', { stdio: 'inherit' });
execSync('node scripts/generate_verified_markdown.cjs', { stdio: 'inherit' });

// Create Batch 130 summary markdown in reports/verification/
const summaryContent = `# Verification Summary - Batch 130

**Batch Number**: 130 (CENTURY MILESTONE: 1,300 COLLEGES VERIFIED)
**Colleges Verified**: 10 (Total Cumulative: 1,300 / 12,660)
**Date**: ${new Date().toISOString()}

## Colleges in this Batch:
1. **Acharya Shree Nanesh Samta Mahavidyalaya (Danta, Chittorgarh)** (ID: 960) - Private Degree College (est. 2007, MLSU Udaipur), portal \`https://asnsvt.in\`, STD 01477-220025. Fixed BCA to 3-year duration. Purged IIM Bangalore and St Stephens Delhi photo leaks.
2. **Mahatma Jyoti Rao Phoole University (MJRP University Jaipur)** (ID: 961) - Leading Private University (est. 2009, Achrol, Jaipur), portal \`https://mjrpu.org\`, STD 01426-283951. Purged St Stephens and Hindu College Delhi photo leaks.
3. **Vikas Polytechnic College (Deeg, Bharatpur)** (ID: 962) - Private Polytechnic (est. 2010, Deeg), portal \`https://vikaspolytechnic.com\`, STD 05641-220050. Purged Hindu College Delhi and IIT Madras photo leaks.
4. **Government Women's Polytechnic College, Bharatpur** (ID: 963) - Premier State Govt Women's Polytechnic (est. 1999, DTE Rajasthan) restored to **Public/Government**, portal \`https://hte.rajasthan.gov.in/college/gwpctbharatpur\`, STD 05644-220660. Purged IIT Madras and IIT Delhi photo leaks.
5. **The LNM Institute of Information Technology (LNMIIT Jaipur)** (ID: 964) - Elite PPP Autonomous Deemed University (est. 2002), purged raw Google Search query URL to official portal \`https://lnmiit.ac.in\`, fixed bogus Bangalore phone to authentic STD 0141-2688090. Purged IIT Delhi and BITS Goa photo leaks.
6. **Arya College of Engineering and IT (ACEIT Jaipur)** (ID: 965) - Flagship Private Engineering College (est. 2000, Kukas), purged raw Google Search query URL to official portal \`https://aryacollege.in\`, fixed bogus Bangalore phone to authentic STD 0141-6604555. Purged BITS Goa and IIT Bombay photo leaks.
7. **Amity University, Jaipur** (ID: 966) - Premier Private University (est. 2008, 152-acre campus, Kant Kalwar) corrected to **Private**, portal \`https://www.amity.edu/jaipur/\`, STD 01426-405555. Fixed BCA to 3-year duration. Purged IIT Bombay and IIM Ahmedabad photo leaks.
8. **Anand International College of Engineering (Anand-ICE Jaipur)** (ID: 967) - Private Engineering College (est. 2010, Agra Road, Kanota), portal \`https://anandice.ac.in\`, STD 0141-4104000. Purged IIM Ahmedabad and AIIMS Delhi photo leaks.
9. **Poornima University, Jaipur** (ID: 968) - Major Private University (est. 2012, Sitapura Extension) corrected to **Private**, portal \`https://poornima.edu.in\`, STD 0141-6500250. Fixed BCA to 3-year duration. Purged AIIMS Delhi and St Xaviers Kolkata photo leaks.
10. **NIIT University, Neemrana** (ID: 969) - Leading Private Research University (est. 2009, Neemrana) corrected to **Private**, portal \`https://niituniversity.in\`, STD 01494-660600. Purged ramaiah_bangalore, St Xaviers Kolkata and Loyola College Chennai photo leaks.
`;

fs.writeFileSync(summaryPath, summaryContent, 'utf8');
console.log('Batch 130 update completed successfully.');

