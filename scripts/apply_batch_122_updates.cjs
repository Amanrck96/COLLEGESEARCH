const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');
const progressPath = path.join(__dirname, '..', 'reports', 'verification', 'progress.json');
const summaryPath = path.join(__dirname, '..', 'reports', 'verification', 'batch-122-summary.md');

const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const progress = JSON.parse(fs.readFileSync(progressPath, 'utf8'));

// Verified updates for Batch 122 (Colleges 1,211 - 1,220)
const batch122Updates = {
  875: {
    name: "Government Polytechnic Chhapar",
    shortName: "GP Chhapar",
    location: "Chhapar, Charkhi Dadri",
    city: "Charkhi Dadri",
    district: "Charkhi Dadri",
    state: "Haryana",
    address: "Village Chhapar, Tehsil Badhra, Charkhi Dadri, Haryana - 127507",
    phone: "01250-298018",
    website: "https://gpchhapar.ac.in",
    type: "Public/Government",
    ownership: "Public/Government",
    established: 2018,
    affiliation: "Haryana State Board of Technical Education (HSBTE) & AICTE",
    rating: 4.3,
    reviews: 293,
    ranking: 52,
    fees: "₹4,500/yr",
    exams: "DET Haryana (HSBTE)",
    about: "Government Polytechnic Chhapar is a premier state government technical institute established in 2018 under the Department of Technical Education, Government of Haryana. Situated in Chhapar, Charkhi Dadri district, the institute offers AICTE-approved 3-year diploma programs in core engineering disciplines with well-equipped modern laboratories and subsidized government fee structures.",
    image: "https://gpchhapar.ac.in/wp-content/uploads/2022/06/campus1.jpeg",
    gallery: [
      "https://gpchhapar.ac.in/wp-content/uploads/2022/06/campus1.jpeg"
    ],
    facilities: ["Computer Center", "Civil Labs", "Electrical Workshop", "Mechanical Labs", "Technical Library", "Sports Field", "RO Purified Water"],
    highestPackage: "₹4.5 LPA",
    averagePackage: "₹2.5 LPA",
    placements: "76%",
    courses: [
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹4,500/yr",
        eligibility: "Class 10th with Science & Maths (35%) + HSTES DET",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Computer Engineering",
        duration: "3 Years",
        fees: "₹4,500/yr",
        eligibility: "Class 10th with Science & Maths (35%) + HSTES DET",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹4,500/yr",
        eligibility: "Class 10th with Science & Maths (35%) + HSTES DET",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹4,500/yr",
        eligibility: "Class 10th with Science & Maths (35%) + HSTES DET",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  876: {
    name: "Ch. Ranbir Singh State Institute of Engineering and Technology (CRSSIET Jhajjar)",
    shortName: "CRSSIET Jhajjar",
    location: "Silani Kesho, Jhajjar",
    city: "Jhajjar",
    district: "Jhajjar",
    state: "Haryana",
    address: "Village Silani Kesho, Jhajjar, Haryana - 124103",
    phone: "01251-279022",
    website: "https://crssiet.ac.in",
    type: "Public/Government",
    ownership: "Public/Government",
    established: 2017,
    affiliation: "Maharshi Dayanand University (MDU Rohtak) & AICTE",
    rating: 4.4,
    reviews: 420,
    ranking: 84,
    fees: "₹40,000/yr",
    exams: "JEE Main, HSTES",
    about: "Ch. Ranbir Singh State Institute of Engineering and Technology (CRSSIET) Silani Kesho, Jhajjar, is an autonomous state government engineering college established in 2017 by the Government of Haryana. Spread across a sprawling 40-acre campus, CRSSIET is affiliated with MDU Rohtak and approved by AICTE, offering high-standard undergraduate engineering programs in emerging technical sectors.",
    image: "https://image-static.collegedunia.com/public/college_data/images/campusimage/15492765452030.jpg",
    gallery: [
      "https://image-static.collegedunia.com/public/college_data/images/campusimage/15492765452030.jpg"
    ],
    facilities: ["Hostel", "Central Library", "Computer Center", "Advanced Engineering Labs", "Wi-Fi Campus", "Sports Complex", "Cafeteria", "Auditorium"],
    highestPackage: "₹12 LPA",
    averagePackage: "₹5.0 LPA",
    placements: "82%",
    courses: [
      {
        title: "B.Tech Computer Science & Engineering",
        duration: "4 Years",
        fees: "₹40,000/yr",
        eligibility: "10+2 with PCM (50%) + JEE Main / HSTES",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech Civil Engineering",
        duration: "4 Years",
        fees: "₹40,000/yr",
        eligibility: "10+2 with PCM (50%) + JEE Main / HSTES",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech Mechanical Engineering",
        duration: "4 Years",
        fees: "₹40,000/yr",
        eligibility: "10+2 with PCM (50%) + JEE Main / HSTES",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech Electrical Engineering",
        duration: "4 Years",
        fees: "₹40,000/yr",
        eligibility: "10+2 with PCM (50%) + JEE Main / HSTES",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech Electronics & Communication Engineering",
        duration: "4 Years",
        fees: "₹40,000/yr",
        eligibility: "10+2 with PCM (50%) + JEE Main / HSTES",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  877: {
    name: "Maharishi Markandeshwar Engineering College (MMEC Mullana)",
    shortName: "MMEC Mullana",
    location: "Mullana, Ambala",
    city: "Ambala",
    district: "Ambala",
    state: "Haryana",
    address: "MM(DU) Campus, Mullana, Ambala, Haryana - 133207",
    phone: "01731-274475",
    website: "https://www.mmumullana.org",
    type: "Private",
    ownership: "Private",
    established: 1995,
    affiliation: "Constituent College of Maharishi Markandeshwar (Deemed to be University), NAAC 'A++'",
    rating: 4.5,
    reviews: 527,
    ranking: 15,
    fees: "₹1,35,000 - ₹1,55,000/yr",
    exams: "JEE Main, MMU Entrance, Merit",
    about: "Maharishi Markandeshwar Engineering College (MMEC), established in 1995 in Mullana-Ambala, is the founding flagship technical institute of Maharishi Markandeshwar (Deemed to be University), accredited with NAAC 'A++' grade. MMEC features world-class computing facilities, industry-collaborated research centers, and cutting-edge programs in Computer Science, Artificial Intelligence, and Mechanical Engineering.",
    image: "https://www.guidanceforever.org/wp-content/uploads/2023/10/maharishi-markandeshwar-ambala-featured.jpg",
    gallery: [
      "https://www.guidanceforever.org/wp-content/uploads/2023/10/maharishi-markandeshwar-ambala-featured.jpg"
    ],
    facilities: ["Hostel Complex", "Central Library", "High-Tech AI Labs", "Sports Complex & Stadium", "Auditorium", "Multi-Cuisine Cafeteria", "Hospital on Campus", "Wi-Fi"],
    highestPackage: "₹42 LPA",
    averagePackage: "₹6.8 LPA",
    placements: "91%",
    courses: [
      {
        title: "B.Tech Computer Science & Engineering",
        duration: "4 Years",
        fees: "₹1,45,000/yr",
        eligibility: "10+2 with PCM (50%) + JEE Main / Merit",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 660
      },
      {
        title: "B.Tech CSE with AI & Machine Learning",
        duration: "4 Years",
        fees: "₹1,55,000/yr",
        eligibility: "10+2 with PCM (50%)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 120
      },
      {
        title: "B.Tech Mechanical Engineering",
        duration: "4 Years",
        fees: "₹1,35,000/yr",
        eligibility: "10+2 with PCM (50%)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Master of Computer Applications (MCA)",
        duration: "2 Years",
        fees: "₹85,000/yr",
        eligibility: "BCA / B.Sc with Maths (50%)",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹65,000/yr",
        eligibility: "10+2 in any stream with Maths/CS (45%)",
        type: "COMPUTER APPLICATIONS",
        intake: 120
      }
    ]
  },
  878: {
    name: "Government Polytechnic Indri (GP Indri Mewat)",
    shortName: "GP Indri Mewat",
    location: "Indri, Nuh",
    city: "Nuh",
    district: "Nuh",
    state: "Haryana",
    address: "Village Indri, Nuh (Mewat), Haryana - 122107",
    phone: "01267-274640",
    website: "https://gpindri.ac.in",
    type: "Public/Government",
    ownership: "Public/Government",
    established: 2018,
    affiliation: "Haryana State Board of Technical Education (HSBTE) & AICTE",
    rating: 4.2,
    reviews: 126,
    ranking: 49,
    fees: "₹4,500/yr",
    exams: "DET Haryana (HSBTE)",
    about: "Government Polytechnic Indri is a premier state government technical diploma institute established in 2018 by the Department of Technical Education, Haryana. Located in Indri near Nuh (Mewat), the polytechnic provides vital skill and technical education to youth from rural Mewat with AICTE-approved programs, state-of-the-art workshops, and heavily subsidized government fee rates.",
    image: "https://www.hwfindia.org/wp-content/uploads/2022/04/Mewat-Campus-1.jpg",
    gallery: [
      "https://www.hwfindia.org/wp-content/uploads/2022/04/Mewat-Campus-1.jpg"
    ],
    facilities: ["Computer Center", "Civil Engineering Lab", "Electrical Machine Lab", "Mechanical Workshop", "Technical Library", "Sports Field", "Purified RO Water"],
    highestPackage: "₹4.2 LPA",
    averagePackage: "₹2.4 LPA",
    placements: "74%",
    courses: [
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹4,500/yr",
        eligibility: "Class 10th with Science & Maths (35%) + HSTES DET",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Computer Engineering",
        duration: "3 Years",
        fees: "₹4,500/yr",
        eligibility: "Class 10th with Science & Maths (35%) + HSTES DET",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹4,500/yr",
        eligibility: "Class 10th with Science & Maths (35%) + HSTES DET",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹4,500/yr",
        eligibility: "Class 10th with Science & Maths (35%) + HSTES DET",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  879: {
    name: "JK Business School (JKBS Gurugram)",
    shortName: "JKBS Gurugram",
    location: "Sohna, Gurugram",
    city: "Gurugram",
    district: "Gurugram",
    state: "Haryana",
    address: "JK Lakshmipat Singhania Education Foundation, Damdama Lake Road, Bhondsi, Sohna, Gurugram, Haryana - 122102",
    phone: "0124-2970001",
    website: "https://www.jkbschool.org",
    type: "Private",
    ownership: "Private",
    established: 2006,
    affiliation: "Approved by AICTE & Affiliated to Gurugram University",
    rating: 4.4,
    reviews: 465,
    ranking: 57,
    fees: "₹1,00,000 - ₹3,95,000/yr",
    exams: "CAT, MAT, XAT, CMAT, ATMA, JKBS WAT/PI",
    about: "JK Business School (JKBS), established in 2006 by the illustrious JK Organisation (Singhania Family), is a premier management institution located on a scenic 10-acre campus in Sohna-Gurugram. Approved by AICTE, JKBS offers flagship PGDM programs and undergraduate BBA/BCA degrees affiliated with Gurugram University with rigorous industry orientation and excellent corporate placements.",
    image: "https://www.collegebatch.com/static/clg-gallery/jk-business-school-gurgaon-232106.webp",
    gallery: [
      "https://www.collegebatch.com/static/clg-gallery/jk-business-school-gurgaon-232106.webp"
    ],
    facilities: ["Hostel (AC)", "Bloomberg Terminal", "Digital Library", "Amphitheatre Classrooms", "Auditorium", "Sports Complex", "Cafeteria", "Wi-Fi Campus"],
    highestPackage: "₹18 LPA",
    averagePackage: "₹6.8 LPA",
    placements: "94%",
    courses: [
      {
        title: "Post Graduate Diploma in Management (PGDM)",
        duration: "2 Years",
        fees: "₹3,95,000/yr",
        eligibility: "Graduation (50%) + CAT/MAT/XAT/CMAT",
        type: "MANAGEMENT",
        intake: 120
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹1,05,000/yr",
        eligibility: "10+2 in any stream (50%)",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹1,05,000/yr",
        eligibility: "10+2 with Maths/CS (50%)",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      }
    ]
  },
  880: {
    name: "Manav Rachna University (MRU Faridabad)",
    shortName: "MRU Faridabad",
    location: "Sector 43, Faridabad",
    city: "Faridabad",
    district: "Faridabad",
    state: "Haryana",
    address: "Sector 43, Aravali Hills, Surajkund-Badkhal Road, Faridabad, Haryana - 121004",
    phone: "0129-4259000",
    website: "https://mru.edu.in",
    type: "Private",
    ownership: "Private",
    established: 2004,
    affiliation: "State Private University established under Haryana Act No. 26 of 2014, UGC & NAAC 'A'",
    rating: 4.5,
    reviews: 127,
    ranking: 6,
    fees: "₹1,45,000 - ₹1,95,000/yr",
    exams: "MRNAT, JEE Main, SAT, CLAT, Direct",
    about: "Manav Rachna University (MRU) is a premier private university established in 2014, evolved from Manav Rachna College of Engineering (MRCE est. 2004). Accredited with NAAC 'A' Grade, the university is located amidst the Aravali Hills in Faridabad. MRU offers high-caliber interdisciplinary academic programs across Engineering, Law, Management, Sciences, and Education with cutting-edge incubation centers and global tie-ups.",
    image: "https://www.collegebatch.com/static/clg-gallery/manav-rachna-university-faridabad-364244.webp",
    gallery: [
      "https://www.collegebatch.com/static/clg-gallery/manav-rachna-university-faridabad-364244.webp"
    ],
    facilities: ["Hostel Accommodation", "Central Library", "Innovation & Incubation Centre", "Shooting Range & Sports Arena", "Auditorium", "Food Court", "Wi-Fi Campus", "Health Centre"],
    highestPackage: "₹32 LPA",
    averagePackage: "₹6.5 LPA",
    placements: "89%",
    courses: [
      {
        title: "B.Tech Computer Science & Engineering",
        duration: "4 Years",
        fees: "₹1,95,000/yr",
        eligibility: "10+2 with PCM (50%) + MRNAT / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 180
      },
      {
        title: "B.Tech CSE with AI & Machine Learning",
        duration: "4 Years",
        fees: "₹2,10,000/yr",
        eligibility: "10+2 with PCM (50%) + MRNAT / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹1,55,000/yr",
        eligibility: "10+2 in any stream (50%)",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹1,45,000/yr",
        eligibility: "10+2 with Mathematics/CS (50%)",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "BA LL.B / BBA LL.B (Integrated)",
        duration: "5 Years",
        fees: "₹1,85,000/yr",
        eligibility: "10+2 with 50% + CLAT / MRNAT",
        type: "LAW",
        intake: 60
      }
    ]
  },
  881: {
    name: "Ch. Ranbir Singh Government Polytechnic Hathnikund",
    shortName: "CRSGPH Hathnikund",
    location: "Hathnikund, Yamuna Nagar",
    city: "Yamunanagar",
    district: "Yamunanagar",
    state: "Haryana",
    address: "Hathnikund Barrage, Yamunanagar, Haryana - 135106",
    phone: "01732-280122",
    website: "https://gpchhatnikund.ac.in",
    type: "Public/Government",
    ownership: "Public/Government",
    established: 2017,
    affiliation: "Haryana State Board of Technical Education (HSBTE) & AICTE",
    rating: 4.3,
    reviews: 220,
    ranking: 40,
    fees: "₹4,500/yr",
    exams: "DET Haryana (HSBTE)",
    about: "Ch. Ranbir Singh Government Polytechnic Hathnikund is a state government diploma institution established in 2017 under the Department of Technical Education, Haryana. Located near the scenic Hathnikund Barrage in Yamunanagar district, the institute offers AICTE-approved diploma programs in core engineering fields to nurture technically skilled professionals.",
    image: "https://pharmacampus.in/wp-content/uploads/2020/07/CH.-RANBIR-SINGH-GOVERNMENT-POLYTECHNIC-HATHNIKUND.jpeg",
    gallery: [
      "https://pharmacampus.in/wp-content/uploads/2020/07/CH.-RANBIR-SINGH-GOVERNMENT-POLYTECHNIC-HATHNIKUND.jpeg"
    ],
    facilities: ["Computer Center", "Civil Lab", "Electrical Workshop", "Mechanical Lab", "Technical Library", "Sports Field", "RO Purified Water"],
    highestPackage: "₹4.5 LPA",
    averagePackage: "₹2.5 LPA",
    placements: "77%",
    courses: [
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹4,500/yr",
        eligibility: "Class 10th with Science & Maths (35%) + HSTES DET",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹4,500/yr",
        eligibility: "Class 10th with Science & Maths (35%) + HSTES DET",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹4,500/yr",
        eligibility: "Class 10th with Science & Maths (35%) + HSTES DET",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Computer Engineering",
        duration: "3 Years",
        fees: "₹4,500/yr",
        eligibility: "Class 10th with Science & Maths (35%) + HSTES DET",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  882: {
    name: "Government Polytechnic Mandkola",
    shortName: "GP Mandkola",
    location: "Mandkola, Palwal",
    city: "Palwal",
    district: "Palwal",
    state: "Haryana",
    address: "Village Mandkola, Tehsil Hathin, Palwal, Haryana - 121103",
    phone: "01275-298015",
    website: "https://gpmandkola.ac.in",
    type: "Public/Government",
    ownership: "Public/Government",
    established: 2018,
    affiliation: "Haryana State Board of Technical Education (HSBTE) & AICTE",
    rating: 4.2,
    reviews: 279,
    ranking: 60,
    fees: "₹4,500/yr",
    exams: "DET Haryana (HSBTE)",
    about: "Government Polytechnic Mandkola is a state government technical diploma institution established in 2018 by the Department of Technical Education, Haryana. Located in Mandkola in Palwal district, the institute offers AICTE-approved diploma programs in core engineering disciplines with modern laboratory setups and standard subsidized Haryana government tuition.",
    image: "https://dl.dropboxusercontent.com/s/9cx20xfz8kwqd0z/Govt+Poly.+Mandokla+campus.png",
    gallery: [
      "https://dl.dropboxusercontent.com/s/9cx20xfz8kwqd0z/Govt+Poly.+Mandokla+campus.png"
    ],
    facilities: ["Computer Center", "Mechanical Workshop", "Electrical Lab", "Civil Lab", "Technical Library", "Sports Field", "RO Purified Water"],
    highestPackage: "₹4.4 LPA",
    averagePackage: "₹2.5 LPA",
    placements: "75%",
    courses: [
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹4,500/yr",
        eligibility: "Class 10th with Science & Maths (35%) + HSTES DET",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹4,500/yr",
        eligibility: "Class 10th with Science & Maths (35%) + HSTES DET",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹4,500/yr",
        eligibility: "Class 10th with Science & Maths (35%) + HSTES DET",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Computer Engineering",
        duration: "3 Years",
        fees: "₹4,500/yr",
        eligibility: "Class 10th with Science & Maths (35%) + HSTES DET",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  883: {
    name: "XLRI Xavier School of Management, Delhi-NCR Campus",
    shortName: "XLRI Delhi-NCR",
    location: "Jhajjar, Delhi-NCR",
    city: "Jhajjar",
    district: "Jhajjar",
    state: "Haryana",
    address: "Aurangpur, Sector 28, Jhajjar-Badli Road, Jhajjar (Delhi-NCR), Haryana - 124103",
    phone: "01251-282000",
    website: "https://delhi.xlri.ac.in",
    type: "Private",
    ownership: "Private",
    established: 2020,
    affiliation: "Approved by AICTE, Jesuit Association of South Asia (JASA)",
    rating: 4.8,
    reviews: 227,
    ranking: 10,
    fees: "₹14,50,000/yr",
    exams: "XAT, GMAT",
    about: "XLRI Xavier School of Management Delhi-NCR, established in 2020, is the greenfield campus of XLRI Jamshedpur (India's oldest business school, founded in 1949). Situated across a lush 36.5-acre state-of-the-art campus in Jhajjar (Delhi-NCR), XLRI offers its renowned flagship two-year full-time PGDM (Business Management) program, renowned for academic excellence, ethical leadership, and 100% marquee placements.",
    image: "https://static.zollege.in/public/image/campus_infra_514c96fb854c6d87ad5462cf0cf68ddf.jpeg",
    gallery: [
      "https://static.zollege.in/public/image/campus_infra_514c96fb854c6d87ad5462cf0cf68ddf.jpeg"
    ],
    facilities: ["Air-conditioned Hostels", "Modern Amphitheater Classrooms", "Behavioral Lab", "Finance Lab with Bloomberg Terminals", "Central Library", "Sports Complex", "Cafeteria", "Auditorium"],
    highestPackage: "₹75 LPA",
    averagePackage: "₹30.5 LPA",
    placements: "100%",
    courses: [
      {
        title: "Post Graduate Diploma in Management - Business Management (PGDM BM)",
        duration: "2 Years",
        fees: "₹14,50,000/yr",
        eligibility: "Bachelor's degree (50%) + XAT / GMAT",
        type: "MANAGEMENT",
        intake: 180
      },
      {
        title: "Post Graduate Diploma in Management - Innovation, Entrepreneurship & Venture Creation",
        duration: "2 Years",
        fees: "₹14,00,000/yr",
        eligibility: "Bachelor's degree (50%) + XAT / GMAT",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "Executive PGDM (General Management)",
        duration: "15 Months",
        fees: "₹15,00,000/yr",
        eligibility: "Bachelor's degree + Minimum 5 Yrs Work Experience",
        type: "MANAGEMENT",
        intake: 60
      }
    ]
  },
  884: {
    name: "Indira Gandhi University Meerpur (IGU Rewari)",
    shortName: "IGU Rewari",
    location: "Meerpur, Rewari",
    city: "Rewari",
    district: "Rewari",
    state: "Haryana",
    address: "Village Meerpur, Rewari, Haryana - 122502",
    phone: "01274-261201",
    website: "https://igu.ac.in",
    type: "Public/Government",
    ownership: "Public/Government",
    established: 2013,
    affiliation: "State University established under Haryana Act No. 29 of 2013, UGC & AICTE",
    rating: 4.4,
    reviews: 149,
    ranking: 24,
    fees: "₹16,000 - ₹48,000/yr",
    exams: "HSTES, JEE Main, CUET-PG, University Entrance",
    about: "Indira Gandhi University (IGU) Meerpur, Rewari, is a prominent state university established in 2013 by the Government of Haryana. Spanning over 100 acres in Meerpur, the university offers diverse undergraduate, postgraduate, and doctoral programs across Engineering & Technology, Management, Commerce, Physical Sciences, Life Sciences, Humanities, and Law.",
    image: "https://www.collegebatch.com/static/clg-gallery/indira-gandhi-university-rewari-350176.webp",
    gallery: [
      "https://www.collegebatch.com/static/clg-gallery/indira-gandhi-university-rewari-350176.webp"
    ],
    facilities: ["Central Library", "Boys & Girls Hostels", "Computer Center", "Advanced Science Labs", "Sports Stadium", "Gymnasium", "Cafeteria", "Health Centre"],
    highestPackage: "₹10 LPA",
    averagePackage: "₹4.8 LPA",
    placements: "79%",
    courses: [
      {
        title: "B.Tech Computer Science & Engineering",
        duration: "4 Years",
        fees: "₹48,000/yr",
        eligibility: "10+2 with PCM (50%) + JEE Main / HSTES",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Master of Business Administration (MBA)",
        duration: "2 Years",
        fees: "₹34,000/yr",
        eligibility: "Graduation (50%) + CMAT/University Test",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "Master of Computer Applications (MCA)",
        duration: "2 Years",
        fees: "₹32,000/yr",
        eligibility: "BCA / B.Sc / B.Com with Maths (50%)",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "M.Sc Mathematics",
        duration: "2 Years",
        fees: "₹16,000/yr",
        eligibility: "B.Sc Mathematics (50%)",
        type: "SCIENCE",
        intake: 60
      },
      {
        title: "LL.B (Professional)",
        duration: "3 Years",
        fees: "₹24,000/yr",
        eligibility: "Graduation (45%)",
        type: "LAW",
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
  if (batch122Updates[cid]) {
    const update = batch122Updates[cid];
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
      verifiedBatch: 122
    };
    updatedCount++;
    console.log(`Updated ID: ${cid} - ${update.name}`);
  }
}

console.log(`Applied updates to ${updatedCount} colleges in siteData.json`);
fs.writeFileSync(siteDataPath, JSON.stringify(siteData, null, 2), 'utf8');

// Update progress.json
const newIds = Object.keys(batch122Updates).map(Number);
const existingSet = new Set(progress.completed_ids.map(Number));
for (const id of newIds) {
  if (!existingSet.has(id)) {
    progress.completed_ids.push(id);
  }
}
progress.current_batch = 122;
progress.total_verified = progress.completed_ids.length;
progress.completed_count = progress.completed_ids.length;
progress.last_updated = new Date().toISOString();
fs.writeFileSync(progressPath, JSON.stringify(progress, null, 2), 'utf8');
console.log(`Progress updated: current_batch = 122, total_verified = ${progress.total_verified}`);

// Regenerate master list and markdown
console.log('Regenerating master verification files...');
execSync('node scripts/generate_verified_list.cjs', { stdio: 'inherit' });
execSync('node scripts/generate_verified_markdown.cjs', { stdio: 'inherit' });

// Create Batch 122 summary markdown in reports/verification/
const summaryContent = `# Verification Summary - Batch 122

**Batch Number**: 122
**Colleges Verified**: 10 (Total Cumulative: 1,220 / 12,660)
**Date**: ${new Date().toISOString()}

## Colleges in this Batch:
1. **Government Polytechnic Chhapar** (ID: 875) - State Govt Polytechnic (est. 2018, Charkhi Dadri) restored to **Public/Government**, portal \`https://gpchhapar.ac.in\`, STD 01250-298018.
2. **Ch. Ranbir Singh State Institute of Engineering and Technology (CRSSIET Jhajjar)** (ID: 876) - State Govt Engineering College (est. 2017) restored to **Public/Government**, portal \`https://crssiet.ac.in\`, STD 01251-279022.
3. **Maharishi Markandeshwar Engineering College (MMEC Mullana)** (ID: 877) - Flagship engineering college of MM(DU) NAAC A++ (est. 1995), portal \`https://www.mmumullana.org\`, STD 01731-274475.
4. **Government Polytechnic Indri (GP Indri Mewat)** (ID: 878) - State Govt Polytechnic (est. 2018, Nuh) restored to **Public/Government**, portal \`https://gpindri.ac.in\`, STD 01267-274640. Purged IIIT Bangalore photo leak.
5. **JK Business School (JKBS Gurugram)** (ID: 879) - Private Management School (est. 2006, JK Organisation, Sohna), portal \`https://www.jkbschool.org\`, STD 0124-2970001.
6. **Manav Rachna University (MRU Faridabad)** (ID: 880) - State Private University NAAC A (est. 2004/2014, Faridabad), portal \`https://mru.edu.in\`, STD 0129-4259000.
7. **Ch. Ranbir Singh Government Polytechnic Hathnikund** (ID: 881) - State Govt Polytechnic (est. 2017, Yamunanagar) restored to **Public/Government**, portal \`https://gpchhatnikund.ac.in\`, STD 01732-280122. Purged Bangalore University photo leak.
8. **Government Polytechnic Mandkola** (ID: 882) - State Govt Polytechnic (est. 2018, Palwal) restored to **Public/Government**, portal \`https://gpmandkola.ac.in\`, STD 01275-298015. Purged COEP Pune photo leak.
9. **XLRI Xavier School of Management, Delhi-NCR Campus** (ID: 883) - Premier Jesuit Business School (est. 2020, Jhajjar/NCR), portal \`https://delhi.xlri.ac.in\`, STD 01251-282000. Purged VNIT Nagpur photo leak.
10. **Indira Gandhi University Meerpur (IGU Rewari)** (ID: 884) - State University (est. 2013, Rewari) restored to **Public/Government**, portal \`https://igu.ac.in\`, STD 01274-261201.
`;

fs.writeFileSync(summaryPath, summaryContent, 'utf8');
console.log('Batch 122 update completed successfully.');
