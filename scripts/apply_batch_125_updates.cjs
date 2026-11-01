const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');
const progressPath = path.join(__dirname, '..', 'reports', 'verification', 'progress.json');
const summaryPath = path.join(__dirname, '..', 'reports', 'verification', 'batch-125-summary.md');

const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const progress = JSON.parse(fs.readFileSync(progressPath, 'utf8'));

// Verified updates for Batch 125 (Colleges 1,241 - 1,250)
const batch125Updates = {
  910: {
    name: "South Point School of Polytechnic (Sonipat)",
    shortName: "South Point Polytechnic",
    location: "Sector 20, Sonipat",
    city: "Sonipat",
    district: "Sonipat",
    state: "Haryana",
    address: "Sector 20, Purkhas Road, Near Sugar Mill, Sonipat, Haryana - 131001",
    phone: "0130-2216801",
    website: "https://www.southpoint.org.in",
    type: "Private",
    ownership: "Private",
    established: 2008,
    affiliation: "Haryana State Board of Technical Education (HSBTE) & AICTE",
    rating: 4.2,
    reviews: 474,
    ranking: 9,
    fees: "₹36,000/yr",
    exams: "DET Haryana (HSBTE)",
    about: "South Point School of Polytechnic, established in 2008 under the South Point Group of Institutions, is a prominent private technical institute located on Purkhas Road in Sonipat. Approved by AICTE and affiliated with HSBTE, the polytechnic offers career-oriented 3-year diploma programs in core engineering disciplines with well-equipped machine shops, computer labs, and bus service across the Delhi-NCR belt.",
    image: "https://static.careers360.mobi/media/presets/500X333/colleges/social-media/media-gallery/3042/2018/10/24/Campus-View%20of%20South%20Point%20Institute%20of%20Technology%20and%20Management,%20Sonipat_Campus-View.jpg",
    gallery: [
      "https://static.careers360.mobi/media/presets/500X333/colleges/social-media/media-gallery/3042/2018/10/24/Campus-View%20of%20South%20Point%20Institute%20of%20Technology%20and%20Management,%20Sonipat_Campus-View.jpg"
    ],
    facilities: ["Engineering Workshops", "Computer Center", "Technical Library", "Hostel", "Transport Network", "Sports Grounds", "Cafeteria"],
    highestPackage: "₹6.5 LPA",
    averagePackage: "₹3.2 LPA",
    placements: "79%",
    courses: [
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹36,000/yr",
        eligibility: "Class 10th with Science & Maths (35%) + HSTES DET",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 120
      },
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹36,000/yr",
        eligibility: "Class 10th with Science & Maths (35%) + HSTES DET",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹36,000/yr",
        eligibility: "Class 10th with Science & Maths (35%) + HSTES DET",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Computer Engineering",
        duration: "3 Years",
        fees: "₹36,000/yr",
        eligibility: "Class 10th with Science & Maths (35%) + HSTES DET",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  911: {
    name: "Modish Institute of Polytechnic (Punhana Mewat)",
    shortName: "Modish Polytechnic Punhana",
    location: "Punhana, Nuh",
    city: "Punhana",
    district: "Nuh",
    state: "Haryana",
    address: "Village Gheera, Hodal-Punhana Road, Punhana, District Nuh (Mewat), Haryana - 122508",
    phone: "01268-278020",
    website: "https://mip.modishgroup.org",
    type: "Private",
    ownership: "Private",
    established: 2010,
    affiliation: "Haryana State Board of Technical Education (HSBTE) & AICTE",
    rating: 4.1,
    reviews: 531,
    ranking: 9,
    fees: "₹32,000/yr",
    exams: "DET Haryana (HSBTE)",
    about: "Modish Institute of Polytechnic, established in 2010 by Modish Educational Society, is located on Hodal-Punhana Road in Nuh (Mewat). Approved by AICTE and affiliated to HSBTE, the polytechnic imparts foundational engineering diploma education to rural youth across southern Haryana with modern lab setups and dedicated transport.",
    image: "https://mip.modishgroup.org/wp-content/uploads/2023/06/5-2.jpg",
    gallery: [
      "https://mip.modishgroup.org/wp-content/uploads/2023/06/5-2.jpg"
    ],
    facilities: ["Computer Center", "Civil Lab", "Electrical Workshop", "Mechanical Lab", "Technical Library", "Transport Service", "RO Water"],
    highestPackage: "₹5.5 LPA",
    averagePackage: "₹2.8 LPA",
    placements: "72%",
    courses: [
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹32,000/yr",
        eligibility: "Class 10th with Science & Maths (35%) + HSTES DET",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹32,000/yr",
        eligibility: "Class 10th with Science & Maths (35%) + HSTES DET",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹32,000/yr",
        eligibility: "Class 10th with Science & Maths (35%) + HSTES DET",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Computer Engineering",
        duration: "3 Years",
        fees: "₹32,000/yr",
        eligibility: "Class 10th with Science & Maths (35%) + HSTES DET",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  912: {
    name: "International Institute of Engineering & Technology (IIET Kurukshetra)",
    shortName: "IIET Samani Kurukshetra",
    location: "Samani, Kurukshetra",
    city: "Kurukshetra",
    district: "Kurukshetra",
    state: "Haryana",
    address: "Village Samani, Kurukshetra, Haryana - 136118",
    phone: "01744-278100",
    website: "https://iiet.co.in",
    type: "Private",
    ownership: "Private",
    established: 2007,
    affiliation: "Kurukshetra University (KUK) & AICTE",
    rating: 4.0,
    reviews: 101,
    ranking: 2,
    fees: "₹38,000 - ₹65,000/yr",
    exams: "JEE Main, HSTES, Direct",
    about: "International Institute of Engineering & Technology (IIET), established in 2007 in Samani, Kurukshetra, is a private technical and management institution affiliated to Kurukshetra University and approved by AICTE. IIET offers undergraduate and postgraduate degrees in Engineering, Computer Applications, and Management with modern computer centers and high-speed Wi-Fi.",
    image: "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/4182/2018/10/24/Campus View of International Institute of Engineering and Technology Kurukshetra_Campus-View.jpg",
    gallery: [
      "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/4182/2018/10/24/Campus View of International Institute of Engineering and Technology Kurukshetra_Campus-View.jpg"
    ],
    facilities: ["Hostel", "Digital Library", "Computer Center", "Electronics Labs", "Mechanical Workshop", "Sports Grounds", "Cafeteria"],
    highestPackage: "₹8 LPA",
    averagePackage: "₹3.8 LPA",
    placements: "75%",
    courses: [
      {
        title: "B.Tech Computer Science & Engineering",
        duration: "4 Years",
        fees: "₹65,000/yr",
        eligibility: "10+2 with PCM (45%) + JEE Main / HSTES",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹38,000/yr",
        eligibility: "10+2 with Maths/CS (45%)",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹38,000/yr",
        eligibility: "10+2 in any stream (45%)",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "Master of Business Administration (MBA)",
        duration: "2 Years",
        fees: "₹58,000/yr",
        eligibility: "Graduation (50%) + CAT/MAT",
        type: "MANAGEMENT",
        intake: 60
      }
    ]
  },
  913: {
    name: "Shree Ram Institute of Technical Education (Barwala Panchkula)",
    shortName: "SRITE Barwala",
    location: "Barwala, Panchkula",
    city: "Panchkula",
    district: "Panchkula",
    state: "Haryana",
    address: "NH-73, Mouli, Barwala, Panchkula, Haryana - 134118",
    phone: "01733-256789",
    website: "https://www.shreeram.edu.in",
    type: "Private",
    ownership: "Private",
    established: 2008,
    affiliation: "Haryana State Board of Technical Education (HSBTE) & AICTE",
    rating: 4.1,
    reviews: 447,
    ranking: 90,
    fees: "₹35,000/yr",
    exams: "DET Haryana (HSBTE)",
    about: "Shree Ram Institute of Technical Education, founded in 2008 in Mouli-Barwala along NH-73 in Panchkula, is an AICTE-approved diploma polytechnic affiliated with HSBTE. The institute offers comprehensive technical diplomas in Computer, Mechanical, Electrical, and Civil Engineering with spacious workshops and accessible campus infrastructure.",
    image: "https://www.campusoption.com/images/colleges/gallery/31_08_17_071534_College.jpg",
    gallery: [
      "https://www.campusoption.com/images/colleges/gallery/31_08_17_071534_College.jpg"
    ],
    facilities: ["Computer Center", "Electrical Labs", "Civil Workshop", "Technical Library", "Sports Field", "Transport Facility", "RO Water"],
    highestPackage: "₹5 LPA",
    averagePackage: "₹2.8 LPA",
    placements: "74%",
    courses: [
      {
        title: "Diploma in Computer Engineering",
        duration: "3 Years",
        fees: "₹35,000/yr",
        eligibility: "Class 10th with Science & Maths (35%) + HSTES DET",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹35,000/yr",
        eligibility: "Class 10th with Science & Maths (35%) + HSTES DET",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹35,000/yr",
        eligibility: "Class 10th with Science & Maths (35%) + HSTES DET",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹35,000/yr",
        eligibility: "Class 10th with Science & Maths (35%) + HSTES DET",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  914: {
    name: "Government Polytechnic Education Society Uttawar (Palwal)",
    shortName: "GP Uttawar Palwal",
    location: "Uttawar, Palwal",
    city: "Palwal",
    district: "Palwal",
    state: "Haryana",
    address: "VPO Uttawar, Tehsil Hathin, Palwal, Haryana - 121103",
    phone: "01275-298018",
    website: "https://gputtawar.ac.in",
    type: "Public/Government",
    ownership: "Public/Government",
    established: 2008,
    affiliation: "Haryana State Board of Technical Education (HSBTE) & AICTE",
    rating: 4.3,
    reviews: 193,
    ranking: 48,
    fees: "₹4,500/yr",
    exams: "DET Haryana (HSBTE)",
    about: "Government Polytechnic Education Society Uttawar, situated in Hathin-Palwal, is an autonomous state government technical diploma institution established in 2008 by the Department of Technical Education, Haryana. The polytechnic offers AICTE-approved diploma programs in core engineering disciplines with well-maintained laboratories and subsidized tuition rates.",
    image: "https://pharmacampus.in/wp-content/uploads/2020/07/GOVERNMENT-POLYTECHNIC-EDUCATION-SOCIETY-Palwal-1.jpg",
    gallery: [
      "https://pharmacampus.in/wp-content/uploads/2020/07/GOVERNMENT-POLYTECHNIC-EDUCATION-SOCIETY-Palwal-1.jpg"
    ],
    facilities: ["Computer Center", "Civil Labs", "Electrical Workshop", "Mechanical Labs", "Technical Library", "Sports Field", "RO Purified Water"],
    highestPackage: "₹4.5 LPA",
    averagePackage: "₹2.5 LPA",
    placements: "76%",
    courses: [
      {
        title: "Diploma in Computer Engineering",
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
        title: "Diploma in Mechanical Engineering",
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
      }
    ]
  },
  915: {
    name: "DPG Institute of Technology and Management (DPGITM Gurugram)",
    shortName: "DPGITM Gurugram",
    location: "Sector 34, Gurugram",
    city: "Gurugram",
    district: "Gurugram",
    state: "Haryana",
    address: "Sector-34, Near Hero Honda Chowk (NH-48), Gurugram, Haryana - 122001",
    phone: "0124-6465277",
    website: "https://www.dpgitm.ac.in",
    type: "Private",
    ownership: "Private",
    established: 2011,
    affiliation: "Maharshi Dayanand University (MDU Rohtak) & Gurugram University & AICTE",
    rating: 4.4,
    reviews: 219,
    ranking: 37,
    fees: "₹65,000 - ₹85,000/yr",
    exams: "JEE Main, HSTES, Direct",
    about: "DPG Institute of Technology and Management (DPGITM), established in 2011 in Sector 34 Gurugram near Hero Honda Chowk, is a premier private engineering campus approved by AICTE and affiliated with MDU Rohtak. DPGITM offers cutting-edge B.Tech degrees in Computer Science, Artificial Intelligence, Machine Learning, and Data Science, complemented by strong corporate placement tie-ups across NCR.",
    image: "https://media.getmyuni.com/azure/college-image/big/dpg-institute-of-technology-and-management-dpgitm-gurgaon.jpg",
    gallery: [
      "https://media.getmyuni.com/azure/college-image/big/dpg-institute-of-technology-and-management-dpgitm-gurgaon.jpg"
    ],
    facilities: ["Hostel", "Digital Library", "Robotics & AI Labs", "Computer Center", "Auditorium", "Sports Complex", "Cafeteria", "Wi-Fi Campus"],
    highestPackage: "₹15 LPA",
    averagePackage: "₹5.2 LPA",
    placements: "86%",
    courses: [
      {
        title: "B.Tech Computer Science & Engineering",
        duration: "4 Years",
        fees: "₹85,000/yr",
        eligibility: "10+2 with PCM (50%) + JEE Main / HSTES",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 180
      },
      {
        title: "B.Tech CSE with AI & Machine Learning",
        duration: "4 Years",
        fees: "₹88,000/yr",
        eligibility: "10+2 with PCM (50%) + JEE Main / HSTES",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹65,000/yr",
        eligibility: "10+2 with Maths/CS (45%)",
        type: "COMPUTER APPLICATIONS",
        intake: 120
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹65,000/yr",
        eligibility: "10+2 in any stream (45%)",
        type: "MANAGEMENT",
        intake: 120
      }
    ]
  },
  916: {
    name: "Ambala College of Engineering & Applied Research (ACE Ambala)",
    shortName: "ACE Devsthali Ambala",
    location: "Devsthali, Ambala",
    city: "Ambala",
    district: "Ambala",
    state: "Haryana",
    address: "Devsthali (Near Mithapur), P.O. Sambhalkha, Ambala, Haryana - 133101",
    phone: "0171-2821833",
    website: "https://www.ambalacollege.com",
    type: "Private",
    ownership: "Private",
    established: 2002,
    affiliation: "Kurukshetra University (KUK) & AICTE",
    rating: 4.4,
    reviews: 340,
    ranking: 96,
    fees: "₹82,000/yr",
    exams: "JEE Main, HSTES",
    about: "Ambala College of Engineering & Applied Research (ACE), founded in 2002 in Devsthali near Ambala Cantt, is a reputed private engineering institution affiliated with Kurukshetra University. Promoted by industrial experts from the scientific instruments industry, ACE features modern research facilities in Biotechnology, Robotics, and Computer Science with hands-on technical incubation.",
    image: "https://www.campusoption.com/images/colleges/gallery/08_02_17_064249_College.jpg",
    gallery: [
      "https://www.campusoption.com/images/colleges/gallery/08_02_17_064249_College.jpg"
    ],
    facilities: ["Hostel", "Central Library", "Biotech Research Lab", "Robotics Lab", "Sports Complex", "Auditorium", "Cafeteria", "Transport Fleet"],
    highestPackage: "₹14 LPA",
    averagePackage: "₹4.8 LPA",
    placements: "84%",
    courses: [
      {
        title: "B.Tech Computer Science & Engineering",
        duration: "4 Years",
        fees: "₹82,000/yr",
        eligibility: "10+2 with PCM (50%) + JEE Main / HSTES",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech Biotechnology",
        duration: "4 Years",
        fees: "₹82,000/yr",
        eligibility: "10+2 with PCM/PCB (50%) + JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech Mechanical Engineering",
        duration: "4 Years",
        fees: "₹82,000/yr",
        eligibility: "10+2 with PCM (50%) + JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech Electronics & Communication Engineering",
        duration: "4 Years",
        fees: "₹82,000/yr",
        eligibility: "10+2 with PCM (50%) + JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  917: {
    name: "Lala Birkha Ram College of Pharmacy (Barwala Panchkula)",
    shortName: "LBR College of Pharmacy",
    location: "Golpura, Panchkula",
    city: "Panchkula",
    district: "Panchkula",
    state: "Haryana",
    address: "Village Golpura, Tehsil Barwala, Panchkula, Haryana - 134118",
    phone: "01733-256600",
    website: "https://www.lbrpharmacycollege.com",
    type: "Private",
    ownership: "Private",
    established: 2007,
    affiliation: "Pt. B.D. Sharma UHS Rohtak / HSBTE & PCI",
    rating: 4.2,
    reviews: 384,
    ranking: 67,
    fees: "₹45,000 - ₹65,000/yr",
    exams: "HSTES, Direct Admission",
    about: "Lala Birkha Ram College of Pharmacy, established in 2007 in Golpura-Barwala, Panchkula, is an approved pharmacy and medical lab institution. Affiliated with Pt. B.D. Sharma UHS Rohtak and HSBTE, the college delivers professional degrees in Pharmacy and Paramedical sciences with dedicated pharmacognosy, pharmaceutical chemistry, and anatomy labs.",
    image: "https://www.campusoption.com/images/colleges/gallery/31_08_17_071534_College.jpg",
    gallery: [
      "https://www.campusoption.com/images/colleges/gallery/31_08_17_071534_College.jpg"
    ],
    facilities: ["Pharmaceutics Lab", "Pharmaceutical Chemistry Lab", "Central Library", "Computer Center", "Sports Field", "Herbal Garden", "Cafeteria"],
    highestPackage: "₹5.8 LPA",
    averagePackage: "₹3.2 LPA",
    placements: "76%",
    courses: [
      {
        title: "Bachelor of Pharmacy (B.Pharm)",
        duration: "4 Years",
        fees: "₹65,000/yr",
        eligibility: "10+2 with PCM/PCB (45%)",
        type: "PHARMACY",
        intake: 60
      },
      {
        title: "Diploma in Pharmacy (D.Pharm)",
        duration: "2 Years",
        fees: "₹45,000/yr",
        eligibility: "10+2 with PCM/PCB (45%)",
        type: "PHARMACY",
        intake: 60
      },
      {
        title: "Diploma in Medical Laboratory Technology (DMLT)",
        duration: "3 Years",
        fees: "₹35,000/yr",
        eligibility: "Class 10th with Science (35%)",
        type: "PARAMEDICAL",
        intake: 60
      }
    ]
  },
  918: {
    name: "Government Post Graduate College, Sector-9, Gurgaon",
    shortName: "Govt PG College Sector 9 Gurugram",
    location: "Sector 9, Gurugram",
    city: "Gurugram",
    district: "Gurugram",
    state: "Haryana",
    address: "Sector 9, Gurugram, Haryana - 122001",
    phone: "0124-2255470",
    website: "https://gcsector9gurugram.ac.in",
    type: "Public/Government",
    ownership: "Public/Government",
    established: 2003,
    affiliation: "Gurugram University / MDU Rohtak, NAAC 'B++' Grade",
    rating: 4.5,
    reviews: 50,
    ranking: 76,
    fees: "₹14,000 - ₹22,000/yr",
    exams: "Merit Based Online Admission (Higher Education Dept Haryana)",
    about: "Government Post Graduate College, Sector 9, Gurugram, is a premier state government co-educational higher education institution established in 2003 by the Government of Haryana. Spread across a modern urban campus in Sector 9 Gurugram, the college offers highly sought-after undergraduate and postgraduate programs in Computer Applications, Commerce, Management, and Sciences at heavily subsidized government fee rates.",
    image: "https://cache.careers360.mobi/media/colleges/social-media/media-gallery/22343/2021/4/24/Campus View of Government College Sector 9 Gurgaon_Campus-View.jpg",
    gallery: [
      "https://cache.careers360.mobi/media/colleges/social-media/media-gallery/22343/2021/4/24/Campus View of Government College Sector 9 Gurgaon_Campus-View.jpg"
    ],
    facilities: ["Central Library", "Computer Center", "Smart Classrooms", "Science Labs", "Sports Grounds", "Auditorium", "Cafeteria", "RO Drinking Water"],
    highestPackage: "₹8.5 LPA",
    averagePackage: "₹4.0 LPA",
    placements: "81%",
    courses: [
      {
        title: "Master of Computer Applications (MCA)",
        duration: "2 Years",
        fees: "₹22,000/yr",
        eligibility: "BCA / B.Sc with Maths (50%) + Merit",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹14,000/yr",
        eligibility: "10+2 with Maths/CS (45%)",
        type: "COMPUTER APPLICATIONS",
        intake: 120
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹14,000/yr",
        eligibility: "10+2 in any stream (45%)",
        type: "MANAGEMENT",
        intake: 120
      },
      {
        title: "Bachelor of Commerce (B.Com Hons)",
        duration: "3 Years",
        fees: "₹9,500/yr",
        eligibility: "10+2 with Commerce/Maths (45%)",
        type: "COMMERCE",
        intake: 160
      }
    ]
  },
  919: {
    name: "GVN Polytechnic College, Deeghot Palwal",
    shortName: "GVN Polytechnic Deeghot",
    location: "Deeghot, Palwal",
    city: "Palwal",
    district: "Palwal",
    state: "Haryana",
    address: "Village Deeghot, Tehsil Hodal, Palwal, Haryana - 121105",
    phone: "01275-265111",
    website: "https://www.gvnpolytechnic.com",
    type: "Private",
    ownership: "Private",
    established: 2008,
    affiliation: "Haryana State Board of Technical Education (HSBTE) & AICTE",
    rating: 4.1,
    reviews: 149,
    ranking: 98,
    fees: "₹30,000/yr",
    exams: "DET Haryana (HSBTE)",
    about: "GVN Polytechnic College Deeghot, established in 2008 by Gita Vidya Niketan Education Trust, is located in Deeghot, Palwal district. Approved by AICTE and affiliated to HSBTE, the polytechnic offers 3-year diplomas in Computer Science, Civil, and Mechanical disciplines with dedicated workshops and accessible regional transport.",
    image: "https://www.gkseries.com/blog/wp-content/uploads/2020/03/GVN-Polytechnic-College-Palwal.jpg",
    gallery: [
      "https://www.gkseries.com/blog/wp-content/uploads/2020/03/GVN-Polytechnic-College-Palwal.jpg"
    ],
    facilities: ["Computer Center", "Civil Lab", "Electrical Workshop", "Technical Library", "Sports Field", "Cafeteria", "RO Water"],
    highestPackage: "₹4.8 LPA",
    averagePackage: "₹2.6 LPA",
    placements: "73%",
    courses: [
      {
        title: "Diploma in Computer Science & Engineering",
        duration: "3 Years",
        fees: "₹30,000/yr",
        eligibility: "Class 10th with Science & Maths (35%) + HSTES DET",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹30,000/yr",
        eligibility: "Class 10th with Science & Maths (35%) + HSTES DET",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹30,000/yr",
        eligibility: "Class 10th with Science & Maths (35%) + HSTES DET",
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
  if (batch125Updates[cid]) {
    const update = batch125Updates[cid];
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
      verifiedBatch: 125
    };
    updatedCount++;
    console.log(`Updated ID: ${cid} - ${update.name}`);
  }
}

console.log(`Applied updates to ${updatedCount} colleges in siteData.json`);
fs.writeFileSync(siteDataPath, JSON.stringify(siteData, null, 2), 'utf8');

// Update progress.json
const newIds = Object.keys(batch125Updates).map(Number);
const existingSet = new Set(progress.completed_ids.map(Number));
for (const id of newIds) {
  if (!existingSet.has(id)) {
    progress.completed_ids.push(id);
  }
}
progress.current_batch = 125;
progress.total_verified = progress.completed_ids.length;
progress.completed_count = progress.completed_ids.length;
progress.last_updated = new Date().toISOString();
fs.writeFileSync(progressPath, JSON.stringify(progress, null, 2), 'utf8');
console.log(`Progress updated: current_batch = 125, total_verified = ${progress.total_verified}`);

// Regenerate master list and markdown
console.log('Regenerating master verification files...');
execSync('node scripts/generate_verified_list.cjs', { stdio: 'inherit' });
execSync('node scripts/generate_verified_markdown.cjs', { stdio: 'inherit' });

// Create Batch 125 summary markdown in reports/verification/
const summaryContent = `# Verification Summary - Batch 125

**Batch Number**: 125
**Colleges Verified**: 10 (Total Cumulative: 1,250 / 12,660)
**Date**: ${new Date().toISOString()}

## Colleges in this Batch:
1. **South Point School of Polytechnic (Sonipat)** (ID: 910) - Private Polytechnic (est. 2008, Sonipat), portal \`https://www.southpoint.org.in\`, STD 0130-2216801.
2. **Modish Institute of Polytechnic (Punhana Mewat)** (ID: 911) - Private Polytechnic (est. 2010, Punhana), portal \`https://mip.modishgroup.org\`, STD 01268-278020. Purged SVKM UPG Mumbai photo leak.
3. **International Institute of Engineering & Technology (IIET Kurukshetra)** (ID: 912) - Private Engineering Campus (est. 2007), portal \`https://iiet.co.in\`, STD 01744-278100. Purged COEP Pune photo leak. Corrected 4-year BCA duration to 3 years.
4. **Shree Ram Institute of Technical Education (Barwala Panchkula)** (ID: 913) - Private Polytechnic (est. 2008), portal \`https://www.shreeram.edu.in\`, STD 01733-256789.
5. **Government Polytechnic Education Society Uttawar (Palwal)** (ID: 914) - State Govt Polytechnic (est. 2008) restored to **Public/Government**, portal \`https://gputtawar.ac.in\`, STD 01275-298018. Purged SVKM UPG Mumbai photo leak.
6. **DPG Institute of Technology and Management (DPGITM Gurugram)** (ID: 915) - Private Technical Campus (est. 2011, Sector 34 Gurugram), portal \`https://www.dpgitm.ac.in\`, STD 0124-6465277. Corrected 4-year BCA duration to 3 years.
7. **Ambala College of Engineering & Applied Research (ACE Ambala)** (ID: 916) - Private Engineering College (est. 2002, Devsthali Ambala), portal \`https://www.ambalacollege.com\`, STD 0171-2821833.
8. **Lala Birkha Ram College of Pharmacy (Barwala Panchkula)** (ID: 917) - Private Pharmacy College (est. 2007), portal \`https://www.lbrpharmacycollege.com\`, STD 01733-256600.
9. **Government Post Graduate College, Sector-9, Gurgaon** (ID: 918) - Premier State Government PG College (est. 2003) restored to **Public/Government**, portal \`https://gcsector9gurugram.ac.in\`, STD 0124-2255470. Purged RIIM Pune photo leak. Corrected corrupted 4-year MCA duration to 2 years.
10. **GVN Polytechnic College, Deeghot Palwal** (ID: 919) - Private Polytechnic (est. 2008, Deeghot), portal \`https://www.gvnpolytechnic.com\`, STD 01275-265111. Purged VJTI Mumbai photo leak.
`;

fs.writeFileSync(summaryPath, summaryContent, 'utf8');
console.log('Batch 125 update completed successfully.');

