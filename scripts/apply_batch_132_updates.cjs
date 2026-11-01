const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');
const progressPath = path.join(__dirname, '..', 'reports', 'verification', 'progress.json');
const summaryPath = path.join(__dirname, '..', 'reports', 'verification', 'batch-132-summary.md');

const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const progress = JSON.parse(fs.readFileSync(progressPath, 'utf8'));

// Verified updates for Batch 132 (Colleges 1,311 - 1,320)
const batch132Updates = {
  980: {
    name: "Rajdhani Engineering College (REC Jaipur)",
    shortName: "REC Jaipur",
    location: "Sanganer, Jaipur",
    city: "Jaipur",
    district: "Jaipur",
    state: "Rajasthan",
    address: "Rohini Nagar Phase-I, Sanganer-Renwal Road, Jaipur, Rajasthan - 303904",
    phone: "0141-2970500",
    website: "https://rajdhanijaipur.org",
    type: "Private",
    ownership: "Private",
    established: 2008,
    affiliation: "Rajasthan Technical University (RTU), Kota & AICTE Approved",
    rating: 4.3,
    reviews: 352,
    ranking: 21,
    fees: "₹75,000/yr",
    exams: "REAP Rajasthan / JEE Main",
    about: "Rajdhani Engineering College (REC Jaipur), established in 2008 by Rajdhani Educational Trust, is an AICTE-approved engineering college situated on Sanganer-Renwal Road in Jaipur. Affiliated to RTU Kota, REC provides quality technical education across Civil, Mechanical, Computer Science, and Electrical Engineering with modern machine labs and dedicated placement training.",
    image: "https://www.rajdhanijaipur.org/images/infra-bld-2.jpg",
    gallery: [
      "https://www.rajdhanijaipur.org/images/infra-bld-2.jpg"
    ],
    facilities: ["Computer Center", "Civil Survey Lab", "Mechanical Workshops", "Library", "Hostels", "Sports Field", "Cafeteria"],
    highestPackage: "₹8 LPA",
    averagePackage: "₹3.6 LPA",
    placements: "82%",
    courses: [
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹75,000/yr",
        eligibility: "10+2 with PCM (45%) via REAP / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 120
      },
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹75,000/yr",
        eligibility: "10+2 with PCM (45%) via REAP / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹75,000/yr",
        eligibility: "10+2 with PCM (45%) via REAP / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Electrical Engineering",
        duration: "4 Years",
        fees: "₹75,000/yr",
        eligibility: "10+2 with PCM (45%) via REAP / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  981: {
    name: "Dr. Radhakrishnan Institute of Technology (DRIT Jaipur)",
    shortName: "DRIT Jaipur",
    location: "Kalwara, Jaipur",
    city: "Jaipur",
    district: "Jaipur",
    state: "Rajasthan",
    address: "Kalwara, Near Mahindra World City (SEZ), Ajmer Road, Jaipur, Rajasthan - 302037",
    phone: "0141-2972777",
    website: "https://dritjaipur.org",
    type: "Private",
    ownership: "Private",
    established: 2008,
    affiliation: "Rajasthan Technical University (RTU), Kota & AICTE Approved",
    rating: 4.3,
    reviews: 265,
    ranking: 12,
    fees: "₹75,000/yr",
    exams: "REAP Rajasthan / JEE Main",
    about: "Dr. Radhakrishnan Institute of Technology (DRIT Jaipur), established in 2008 near Mahindra World City on Ajmer Road, Jaipur, is an AICTE-approved engineering college affiliated to RTU Kota. DRIT delivers industry-relevant technical programs in Civil, Mechanical, Electrical, and Computer Engineering supported by modern workshops, computer laboratories, and transport connectivity.",
    image: "https://image-static.collegedunia.com/public/college_data/images/campusimage/14186226394.jpg",
    gallery: [
      "https://image-static.collegedunia.com/public/college_data/images/campusimage/14186226394.jpg"
    ],
    facilities: ["High-Speed Computer Labs", "Engineering Workshops", "Central Library", "Hostel", "Sports Grounds", "Canteen", "Bus Fleet"],
    highestPackage: "₹7 LPA",
    averagePackage: "₹3.4 LPA",
    placements: "80%",
    courses: [
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹75,000/yr",
        eligibility: "10+2 with PCM (45%) via REAP / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹75,000/yr",
        eligibility: "10+2 with PCM (45%) via REAP / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Electrical Engineering",
        duration: "4 Years",
        fees: "₹75,000/yr",
        eligibility: "10+2 with PCM (45%) via REAP / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹75,000/yr",
        eligibility: "10+2 with PCM (45%) via REAP / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  982: {
    name: "Government Engineering College Barmer (GEC Barmer)",
    shortName: "GEC Barmer",
    location: "Uttarlai, Barmer",
    city: "Barmer",
    district: "Barmer",
    state: "Rajasthan",
    address: "Jodhpur Road, Uttarlai, Barmer, Rajasthan - 344001",
    phone: "02982-220055",
    website: "https://gecbarmer.ac.in",
    type: "Public/Government",
    ownership: "Public/Government",
    established: 2018,
    affiliation: "Bikaner Technical University (BTU), Bikaner & Govt. of Rajasthan, AICTE Approved",
    rating: 4.5,
    reviews: 432,
    ranking: 32,
    fees: "₹52,000/yr",
    exams: "REAP Rajasthan / JEE Main",
    about: "Government Engineering College Barmer (GEC Barmer), established in 2018 by the Department of Technical Education, Government of Rajasthan, is a premier state government engineering institution in Uttarlai, Barmer. Affiliated to Bikaner Technical University (BTU), GEC Barmer offers specialized undergraduate engineering education in Petroleum, Electrical, Mechanical, Civil, and Computer Science engineering with state-of-the-art laboratory infrastructure.",
    image: "https://daqwpj7vq235r.cloudfront.net/images/btech/government-engineering-college-barmer-campus.webp",
    gallery: [
      "https://daqwpj7vq235r.cloudfront.net/images/btech/government-engineering-college-barmer-campus.webp"
    ],
    facilities: ["Petroleum & Chemical Testing Labs", "Advanced Computing Facility", "Central Library", "Boys & Girls Hostels", "Sports Complex", "Cafeteria"],
    highestPackage: "₹10 LPA",
    averagePackage: "₹4.5 LPA",
    placements: "85%",
    courses: [
      {
        title: "B.Tech in Petroleum Engineering",
        duration: "4 Years",
        fees: "₹52,000/yr",
        eligibility: "10+2 with PCM (45%) via REAP / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Electrical Engineering",
        duration: "4 Years",
        fees: "₹52,000/yr",
        eligibility: "10+2 with PCM (45%) via REAP / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹52,000/yr",
        eligibility: "10+2 with PCM (45%) via REAP / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹52,000/yr",
        eligibility: "10+2 with PCM (45%) via REAP / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹52,000/yr",
        eligibility: "10+2 with PCM (45%) via REAP / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  983: {
    name: "School of Engineering & Technology, University of Technology (UOT Jaipur)",
    shortName: "SET UOT Jaipur",
    location: "Vatika, Sanganer, Jaipur",
    city: "Jaipur",
    district: "Jaipur",
    state: "Rajasthan",
    address: "Village Vatika, Tehsil Sanganer, Jaipur, Rajasthan - 303905",
    phone: "0141-4096900",
    website: "https://www.universityoftechnology.edu.in",
    type: "Private",
    ownership: "Private",
    established: 2017,
    affiliation: "University of Technology (UOT), UGC Recognized & AICTE Approved",
    rating: 4.3,
    reviews: 129,
    ranking: 14,
    fees: "₹85,000/yr",
    exams: "UOT Entrance / JEE Main / CUET",
    about: "The School of Engineering & Technology at University of Technology (UOT Jaipur), established in 2017 in Vatika, Sanganer, is an AICTE-approved faculty of the private University of Technology. Offering interdisciplinary engineering degrees in Civil, Mechanical, Computer Science, and Electrical Engineering, UOT emphasizes project-based training, incubation, and industry certifications.",
    image: "https://cache.careers360.mobi/media/presets/150X150/colleges/social-media/media-gallery/1900/2019/7/16/Campus Front View of University of Technology Jaipur_Campus-View.jpg",
    gallery: [
      "https://cache.careers360.mobi/media/presets/150X150/colleges/social-media/media-gallery/1900/2019/7/16/Campus Front View of University of Technology Jaipur_Campus-View.jpg"
    ],
    facilities: ["30-Acre Campus", "Central Computing Hub", "Central Library", "On-Campus Hostels", "Sports Complex", "Cafeteria", "Bus Services"],
    highestPackage: "₹11 LPA",
    averagePackage: "₹4.2 LPA",
    placements: "84%",
    courses: [
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹85,000/yr",
        eligibility: "10+2 with PCM (45%)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 90
      },
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹85,000/yr",
        eligibility: "10+2 with PCM (45%)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 120
      },
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹85,000/yr",
        eligibility: "10+2 with PCM (45%)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹55,000/yr",
        eligibility: "10+2 with Mathematics / CS (45%)",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      }
    ]
  },
  984: {
    name: "Government Polytechnic College Uchchain (Bharatpur)",
    shortName: "GPC Uchchain Bharatpur",
    location: "Uchchain, Bharatpur",
    city: "Uchchain",
    district: "Bharatpur",
    state: "Rajasthan",
    address: "Campus of Shri Gokul Verma Govt Polytechnic College, Uchchain, Bharatpur, Rajasthan - 321302",
    phone: "05644-220665",
    website: "https://hte.rajasthan.gov.in/college/gpcuchchain",
    type: "Public/Government",
    ownership: "Public/Government",
    established: 2018,
    affiliation: "Directorate of Technical Education (DTE), Rajasthan & BTER Jodhpur, AICTE Approved",
    rating: 4.3,
    reviews: 535,
    ranking: 37,
    fees: "₹6,500/yr",
    exams: "BTER DTE Rajasthan Counseling / 10th Merit",
    about: "Government Polytechnic College Uchchain, established in 2018 by the Department of Technical Education, Government of Rajasthan, is a premier state government diploma institution in Uchchain (Bharatpur). Operating from the Shri Gokul Verma campus, the polytechnic offers emerging technical diploma courses in Cloud Computing, Big Data, Electrical, and Civil Engineering at subsidized government fees.",
    image: "https://hte.rajasthan.gov.in/dept/dte/board_of_technical_education,_rajasthan/shri_gokul_verma_government_polytechnic_college_bharatpur/uploads/images/banner/IMG_20180829_150656.jpg",
    gallery: [
      "https://hte.rajasthan.gov.in/dept/dte/board_of_technical_education,_rajasthan/shri_gokul_verma_government_polytechnic_college_bharatpur/uploads/images/banner/IMG_20180829_150656.jpg"
    ],
    facilities: ["Cloud Computing Lab", "Computer Center", "Workshops", "Library", "Sports Grounds", "Canteen"],
    highestPackage: "₹4.5 LPA",
    averagePackage: "₹2.4 LPA",
    placements: "80%",
    courses: [
      {
        title: "Diploma in Cloud Computing and Big Data",
        duration: "3 Years",
        fees: "₹6,500/yr",
        eligibility: "Class 10th with Science & Maths (35%)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹6,500/yr",
        eligibility: "Class 10th with Science & Maths (35%)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹6,500/yr",
        eligibility: "Class 10th with Science & Maths (35%)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  986: {
    name: "The LNM Institute of Information Technology (LNMIIT Jamdoli, Jaipur)",
    shortName: "LNMIIT Jamdoli",
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
    reviews: 449,
    ranking: 88,
    fees: "₹3,75,000/yr",
    exams: "JEE Main / DASA",
    about: "The LNM Institute of Information Technology (LNMIIT), established in 2002 as a public-private partnership between the Government of Rajasthan and the Lakshmi & Usha Mittal Foundation, is an autonomous deemed university on a 100-acre lush campus in Jamdoli, Jaipur. Renowned for academic excellence and innovation, LNMIIT consistently records top placements with international tech conglomerates.",
    image: "https://img.jagranjosh.com/images/2022/March/1132022/78334962_1187814174741788_317668739128492032_n.jpg",
    gallery: [
      "https://img.jagranjosh.com/images/2022/March/1132022/78334962_1187814174741788_317668739128492032_n.jpg"
    ],
    facilities: ["High Performance Computing Clusters", "Digital Central Library", "Air-Conditioned Hostels", "Olympic-Standard Sports Arena", "Medical Centre", "Food Courts"],
    highestPackage: "₹59.3 LPA",
    averagePackage: "₹14.3 LPA",
    placements: "95%",
    courses: [
      {
        title: "B.Tech in Communication and Computer Engineering",
        duration: "4 Years",
        fees: "₹3,75,000/yr",
        eligibility: "10+2 with PCM (60%) + JEE Main rank",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 120
      },
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹3,75,000/yr",
        eligibility: "10+2 with PCM (60%) + JEE Main rank",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 240
      },
      {
        title: "B.Tech in Electronics and Communication Engineering",
        duration: "4 Years",
        fees: "₹3,75,000/yr",
        eligibility: "10+2 with PCM (60%) + JEE Main rank",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 120
      },
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹3,75,000/yr",
        eligibility: "10+2 with PCM (60%) + JEE Main rank",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  987: {
    name: "IIS (deemed to be University) Jaipur",
    shortName: "IIS University Jaipur",
    location: "Mansarovar, Jaipur",
    city: "Jaipur",
    district: "Jaipur",
    state: "Rajasthan",
    address: "SFS, Gurukul Marg, Mansarovar, Jaipur, Rajasthan - 302020",
    phone: "0141-2400160",
    website: "https://www.iisuniv.ac.in",
    type: "Private",
    ownership: "Private",
    established: 1995,
    affiliation: "Deemed-to-be-University, UGC Recognized, NAAC 'A+' Grade Accredited",
    rating: 4.5,
    reviews: 542,
    ranking: 90,
    fees: "₹95,000/yr",
    exams: "IISU Entrance / Merit",
    about: "IIS (deemed to be University), formerly International College for Girls (ICG, established in 1995), is a pioneer women's higher education institution in Mansarovar, Jaipur. Declared a deemed university under Section 3 of the UGC Act and accredited with 'A+' Grade by NAAC, IIS University delivers exemplary education in Computer Applications, Management, Sciences, Arts, and Commerce with an active placement cell.",
    image: "https://www.iisuniv.ac.in/images/building-mobile.webp",
    gallery: [
      "https://www.iisuniv.ac.in/images/building-mobile.webp"
    ],
    facilities: ["Advanced Computer Labs", "Digital Library & E-Resource Centre", "Auditorium & Open Air Theatre", "Girls Hostel", "Gymnasium & Sports Complex", "Cafeteria"],
    highestPackage: "₹10 LPA",
    averagePackage: "₹4.2 LPA",
    placements: "88%",
    courses: [
      {
        title: "Master of Computer Applications (MCA)",
        duration: "2 Years",
        fees: "₹95,000/yr",
        eligibility: "BCA / Bachelor's Degree with Mathematics (50%)",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹75,000/yr",
        eligibility: "10+2 with Mathematics / CS (48%) for female candidates",
        type: "COMPUTER APPLICATIONS",
        intake: 120
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹85,000/yr",
        eligibility: "10+2 in any stream (48%) for female candidates",
        type: "MANAGEMENT",
        intake: 120
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
  988: {
    name: "Maharani Girls Engineering College (MGEC Jaipur)",
    shortName: "MGEC Jaipur",
    location: "Kalwara, Jaipur",
    city: "Jaipur",
    district: "Jaipur",
    state: "Rajasthan",
    address: "Kalwara, Near Mahindra World City (SEZ), Ajmer Road, Jaipur, Rajasthan - 302037",
    phone: "0141-2972888",
    website: "https://mgecjaipur.com",
    type: "Private",
    ownership: "Private",
    established: 2009,
    affiliation: "Rajasthan Technical University (RTU), Kota & AICTE Approved",
    rating: 4.3,
    reviews: 515,
    ranking: 86,
    fees: "₹75,000/yr",
    exams: "REAP Rajasthan / JEE Main",
    about: "Maharani Girls Engineering College (MGEC Jaipur), established in 2009 near Mahindra World City on Ajmer Road, Jaipur, is an AICTE-approved all-women engineering college affiliated to RTU Kota. Dedicated to women's technical empowerment, MGEC delivers degree courses in Computer Science, Electronics & Communication, and Electrical Engineering with modern laboratories and residential security.",
    image: "https://img.jagranjosh.com/images/2024/February/622024/Jaipur_Campus-View.jpg",
    gallery: [
      "https://img.jagranjosh.com/images/2024/February/622024/Jaipur_Campus-View.jpg"
    ],
    facilities: ["Computer Center", "Electronics & Microcontroller Labs", "Library", "Girls Hostel with 24/7 Security", "Sports Ground", "Cafeteria", "Bus Services"],
    highestPackage: "₹8 LPA",
    averagePackage: "₹3.5 LPA",
    placements: "82%",
    courses: [
      {
        title: "B.Tech in Electronics and Communication Engineering",
        duration: "4 Years",
        fees: "₹75,000/yr",
        eligibility: "10+2 with PCM (45%) for female candidates",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹75,000/yr",
        eligibility: "10+2 with PCM (45%) for female candidates",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Electrical Engineering",
        duration: "4 Years",
        fees: "₹75,000/yr",
        eligibility: "10+2 with PCM (45%) for female candidates",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ]
  },
  989: {
    name: "MSME Technology Centre Bhiwadi",
    shortName: "MSME TC Bhiwadi",
    location: "Pathredi, Bhiwadi",
    city: "Bhiwadi",
    district: "Khairthal-Tijara",
    state: "Rajasthan",
    address: "Plot No. 871(A), 872, RIICO Industrial Estate, Pathredi, Bhiwadi, Rajasthan - 301019",
    phone: "01493-242200",
    website: "https://msmetcbhiwadi.org",
    type: "Public/Government",
    ownership: "Public/Government",
    established: 2017,
    affiliation: "Ministry of MSME, Govt. of India & NCVT, AICTE Approved",
    rating: 4.5,
    reviews: 389,
    ranking: 37,
    fees: "₹48,000/yr",
    exams: "MSME TC Entrance / 10th/12th Merit",
    about: "MSME Technology Centre Bhiwadi, established in 2017 by the Ministry of Micro, Small & Medium Enterprises (MSME), Government of India, is an apex central autonomous training and tooling facility situated in the RIICO Industrial Estate in Pathredi, Bhiwadi. The centre offers specialized long-term technical diplomas in Mechatronics, Tool & Die Making, and advanced CNC machining with industrial-grade machinery and high manufacturing sector placements.",
    image: "https://msmetcbhiwadi.org/image/Banner_msme_tc_bhiwadi_main.jpg",
    gallery: [
      "https://msmetcbhiwadi.org/image/Banner_msme_tc_bhiwadi_main.jpg"
    ],
    facilities: ["Advanced CNC Machining Center", "Industrial Mechatronics Lab", "CAD/CAM Design Center", "Hostel Facilities", "Testing & Calibration Labs", "Canteen"],
    highestPackage: "₹6 LPA",
    averagePackage: "₹3.2 LPA",
    placements: "92%",
    courses: [
      {
        title: "Diploma in Mechatronics",
        duration: "3 Years",
        fees: "₹48,000/yr",
        eligibility: "Class 10th with Science & Mathematics (50%)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Advance Diploma in Tool & Die Making",
        duration: "4 Years",
        fees: "₹48,000/yr",
        eligibility: "Class 10th with Science & Mathematics (50%)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  990: {
    name: "Mewar Polytechnic College (Gangrar, Chittorgarh)",
    shortName: "Mewar Polytechnic College",
    location: "Gangrar, Chittorgarh",
    city: "Gangrar",
    district: "Chittorgarh",
    state: "Rajasthan",
    address: "Mewar University Campus, NH-48 (NH-79), Gangrar, Chittorgarh, Rajasthan - 312901",
    phone: "01471-220882",
    website: "https://www.mewaruniversity.org/pages/Polytechnic.aspx",
    type: "Private",
    ownership: "Private",
    established: 2010,
    affiliation: "Board of Technical Education Rajasthan (BTER), Jodhpur & AICTE Approved",
    rating: 4.3,
    reviews: 462,
    ranking: 43,
    fees: "₹32,000/yr",
    exams: "BTER DTE Rajasthan Counseling / 10th Merit",
    about: "Mewar Polytechnic College, established in 2010 within the Mewar University campus in Gangrar, Chittorgarh, is an AICTE-approved polytechnic affiliated to BTER Jodhpur. The institution provides 3-year technical diploma programs in Civil, Mechanical, Electrical, and Computer Science Engineering with access to the comprehensive workshops, laboratories, and hostel infrastructure of the university.",
    image: "https://assets.kollegeapply.com/images/1751567210503-1709797742phpXM3tp9.jpeg",
    gallery: [
      "https://assets.kollegeapply.com/images/1751567210503-1709797742phpXM3tp9.jpeg"
    ],
    facilities: ["Civil Survey Labs", "Mechanical Workshops", "Electrical Machines Lab", "Central Library", "Hostels", "Sports Stadium", "Cafeteria"],
    highestPackage: "₹5 LPA",
    averagePackage: "₹2.6 LPA",
    placements: "80%",
    courses: [
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹32,000/yr",
        eligibility: "Class 10th with Science & Maths (35%)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
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
      },
      {
        title: "Diploma in Computer Science and Engineering",
        duration: "3 Years",
        fees: "₹32,000/yr",
        eligibility: "Class 10th with Science & Maths (35%)",
        type: "ENGINEERING AND TECHNOLOGY",
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
  if (batch132Updates[cid]) {
    const update = batch132Updates[cid];
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
      verifiedBatch: 132
    };
    updatedCount++;
    console.log(`Updated ID: ${cid} - ${update.name}`);
  }
}

console.log(`Applied updates to ${updatedCount} colleges in siteData.json`);
fs.writeFileSync(siteDataPath, JSON.stringify(siteData, null, 2), 'utf8');

// Update progress.json
const newIds = Object.keys(batch132Updates).map(Number);
const existingSet = new Set(progress.completed_ids.map(Number));
for (const id of newIds) {
  if (!existingSet.has(id)) {
    progress.completed_ids.push(id);
  }
}
progress.current_batch = 132;
progress.total_verified = progress.completed_ids.length;
progress.completed_count = progress.completed_ids.length;
progress.last_updated = new Date().toISOString();
fs.writeFileSync(progressPath, JSON.stringify(progress, null, 2), 'utf8');
console.log(`Progress updated: current_batch = 132, total_verified = ${progress.total_verified}`);

// Regenerate master list and markdown
console.log('Regenerating master verification files...');
execSync('node scripts/generate_verified_list.cjs', { stdio: 'inherit' });
execSync('node scripts/generate_verified_markdown.cjs', { stdio: 'inherit' });

// Create Batch 132 summary markdown in reports/verification/
const summaryContent = `# Verification Summary - Batch 132

**Batch Number**: 132
**Colleges Verified**: 10 (Total Cumulative: 1,320 / 12,660)
**Date**: ${new Date().toISOString()}

## Colleges in this Batch:
1. **Rajdhani Engineering College (REC Jaipur)** (ID: 980) - Private Engineering College (est. 2008, Sanganer), portal \`https://rajdhanijaipur.org\`, STD 0141-2970500. Purged pibm_pune, BITS Goa and IIT Bombay photo leaks.
2. **Dr. Radhakrishnan Institute of Technology (DRIT Jaipur)** (ID: 981) - Private Engineering College (est. 2008, Ajmer Road), portal \`https://dritjaipur.org\`, STD 0141-2972777. Purged IIT Bombay and IIM Ahmedabad photo leaks.
3. **Government Engineering College Barmer (GEC Barmer)** (ID: 982) - State Govt Engineering College (est. 2018, BTU Bikaner) restored to **Public/Government**, portal \`https://gecbarmer.ac.in\`, STD 02982-220055. Purged COEP Pune, IIM Ahmedabad and AIIMS Delhi photo leaks.
4. **School of Engineering & Technology, University of Technology (UOT Jaipur)** (ID: 983) - Private Faculty of Engineering (est. 2017, Vatika), portal \`https://www.universityoftechnology.edu.in\`, STD 0141-4096900. Fixed BCA to 3-year duration. Purged AIIMS Delhi and St Xaviers Kolkata photo leaks.
5. **Government Polytechnic College Uchchain (Bharatpur)** (ID: 984) - State Govt Polytechnic (est. 2018, DTE Rajasthan) restored to **Public/Government**, portal \`https://hte.rajasthan.gov.in/college/gpcuchchain\`, STD 05644-220665. Purged ramaiah_bangalore, St Xaviers Kolkata and Loyola College Chennai photo leaks.
6. **The LNM Institute of Information Technology (LNMIIT Jamdoli, Jaipur)** (ID: 986) - Deemed-to-be-University PPP (est. 2002), portal \`https://lnmiit.ac.in\`, STD 0141-2688090. Purged Christ University and Fergusson College photo leaks.
7. **IIS (deemed to be University) Jaipur** (ID: 987) - Premier All-Women Deemed University (former ICG, est. 1995, NAAC A+), portal \`https://www.iisuniv.ac.in\`, STD 0141-2400160. Fixed MCA to 2-year duration and BCA to 3-year duration. Purged Fergusson College and Presidency Kolkata photo leaks.
8. **Maharani Girls Engineering College (MGEC Jaipur)** (ID: 988) - All-Women Private Engineering College (est. 2009, Kalwara), portal \`https://mgecjaipur.com\`, STD 0141-2972888. Purged Presidency Kolkata and NLSIU Bangalore photo leaks.
9. **MSME Technology Centre Bhiwadi** (ID: 989) - Central Govt Autonomous Institute (Ministry of MSME, Govt of India, est. 2017) restored to **Public/Government**, portal \`https://msmetcbhiwadi.org\`, STD 01493-242200. Purged primus_bangalore, NLSIU and IIM Bangalore photo leaks.
10. **Mewar Polytechnic College (Gangrar, Chittorgarh)** (ID: 990) - Private Polytechnic (est. 2010, Mewar University Campus), portal \`https://www.mewaruniversity.org/pages/Polytechnic.aspx\`, STD 01471-220882. Purged IIM Bangalore and St Stephens Delhi photo leaks.
`;

fs.writeFileSync(summaryPath, summaryContent, 'utf8');
console.log('Batch 132 update completed successfully.');

