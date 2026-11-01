/**
 * apply_batch_185_updates.cjs
 * Sanitizes and verifies Batch 185 (Colleges 1,841-1,850, IDs: 1837-1846) in Chhattisgarh.
 * 
 * Major Sanitizations:
 * - ID 1837: B.R.P. Govt. Polytechnic Dhamtari -> Public/Government (est. 1962, Rudri campus), web http://polydmt.ac.in, phone 07722-225210, subsidized fees ₹5,150/Yr
 * - ID 1838: NMDC DAV Polytechnic, Dantewada -> Private (Joint Venture NMDC CSR & DAV), web http://nmdcdavpoly.org, phone 07856-252555
 * - ID 1839: J.K. Institute of Engineering, Bilaspur -> Private (CSVTU), web http://jkie.in, phone 07752-214444
 * - ID 1840: Govt. Polytechnic Kanker -> Public/Government (Govt of CG, CSVTU), web https://www.polykanker.ac.in, phone 07868-241550, subsidized fees ₹5,150/Yr
 * - ID 1841: Govt. Girls' Polytechnic, Raipur -> Public/Government (est. 1987, Byron Bazar), web http://ggpraipur.ac.in, phone 0771-2423045, subsidized fees ₹5,150/Yr
 * - ID 1842: School of Studies in Electronics and Photonics, PRSU Raipur -> Public/Government (State University Dept, PRSU), M.Tech duration corrected to 2 Years (scraped was 4), web http://www.prsu.ac.in, phone 0771-2262837
 * - ID 1843: Kalinga University - Faculty of Technology, Raipur -> Private State University, web https://kalingauniversity.ac.in, phone 0771-3051010
 * - ID 1844: Ram Krishna Rathore Government Polytechnic, Janjgir-Champa -> Public/Government (Govt of CG, CSVTU), web http://gprkrjanjgir.ac.in, phone 07817-222010, subsidized fees ₹5,150/Yr
 * - ID 1845: Government Polytechnic Mungeli -> Public/Government (Govt of CG, CSVTU), web http://govtpolymungeli.ac.in, phone 07755-271010, subsidized fees ₹5,150/Yr
 * - ID 1846: Government Polytechnic Sukma -> Public/Government (Govt of CG, Bastar), web http://gpsukma.ac.in, phone 07864-284010, subsidized fees ₹5,150/Yr
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

const batch185Updates = {
  1837: {
    name: "B.R.P. Government Polytechnic, Dhamtari",
    shortName: "BRP GP Dhamtari",
    location: "Dhamtari",
    state: "Chhattisgarh",
    address: "Rudri, Dhamtari, Chhattisgarh - 493776",
    phone: "07722-225210",
    website: "http://polydmt.ac.in",
    rating: 4.6,
    reviews: 299,
    type: "Public/Government (Govt of Chhattisgarh)",
    ownership: "Government",
    affiliation: "Chhattisgarh Swami Vivekanand Technical University (CSVTU), Directorate of Technical Education (CG DTE), Approved by AICTE, Est. 1962",
    about: "B.R.P. Government Polytechnic Dhamtari is one of the oldest public polytechnic institutions in Chhattisgarh, founded in 1962 at Rudri, Dhamtari near the Gangrel Dam. Affiliated to CSVTU Bhilai and approved by AICTE, it offers subsidized diploma engineering programs in civil, mechanical, and electrical engineering.",
    ranking: 25,
    fees: "₹5,150/Year (₹15,450 Total for 3-Year Diploma)",
    exams: "CG PPT (Pre-Polytechnic Test)",
    img: "https://polydmt.ac.in/Uploads/hostal2.JPG",
    gallery: [
      "https://polydmt.ac.in/Uploads/hostal2.JPG",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://polydmt.ac.in/Uploads/hostal2.JPG",
    courses: [
      {
        title: "Diploma in Civil Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Diploma",
        duration: "3 Years",
        fees: "₹5,150/Year",
        intake: 40,
        eligibility: "10th standard pass with Science and Mathematics from recognized board + CG PPT"
      },
      {
        title: "Diploma in Mechanical Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Diploma",
        duration: "3 Years",
        fees: "₹5,150/Year",
        intake: 40,
        eligibility: "10th standard pass + CG PPT"
      },
      {
        title: "Diploma in Electrical Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Diploma",
        duration: "3 Years",
        fees: "₹5,150/Year",
        intake: 40,
        eligibility: "10th standard pass + CG PPT"
      }
    ],
    highestPackage: "₹4.5 LPA",
    averagePackage: "₹2.5 LPA",
    placements: "CSPDCL, irrigation & dam project contractors, SAIL Bhilai vendors.",
    facilities: [
      "Rudri Campus Engineering Workshops",
      "Civil Materials Lab",
      "Electrical Machines Laboratory",
      "Technical Library",
      "Hostels for Boys",
      "Sports Ground"
    ]
  },
  1838: {
    name: "NMDC DAV Polytechnic, Dantewada",
    shortName: "NMDC DAV Polytechnic",
    location: "Dantewada",
    state: "Chhattisgarh",
    address: "Education City, Jawanga, Geedam, District South Bastar Dantewada, Chhattisgarh - 494441",
    phone: "07856-252555",
    website: "http://nmdcdavpoly.org",
    rating: 4.5,
    reviews: 486,
    type: "Private",
    ownership: "Private",
    affiliation: "CSVTU Bhilai, Approved by AICTE, Joint Initiative of NMDC Ltd & DAV CMC",
    about: "NMDC DAV Polytechnic was established in Education City Jawanga-Geedam, Dantewada under a joint corporate social responsibility initiative between National Mineral Development Corporation (NMDC Ltd) and the DAV College Trust. Approved by AICTE and affiliated to CSVTU Bhilai, it provides technical skills training to youths of South Bastar.",
    ranking: 5,
    fees: "₹18,000/Year (Subsidized via NMDC CSR)",
    exams: "CG PPT",
    img: "https://www.gkseries.com/blog/wp-content/uploads/2020/04/NMDC-DAV-Polytechnic-Dantewada-1200x675.jpg",
    gallery: [
      "https://www.gkseries.com/blog/wp-content/uploads/2020/04/NMDC-DAV-Polytechnic-Dantewada-1200x675.jpg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://www.gkseries.com/blog/wp-content/uploads/2020/04/NMDC-DAV-Polytechnic-Dantewada-1200x675.jpg",
    courses: [
      {
        title: "Diploma in Electrical Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Diploma",
        duration: "3 Years",
        fees: "₹18,000/Year",
        intake: 60,
        eligibility: "10th standard pass with Science and Mathematics from recognized board + CG PPT"
      },
      {
        title: "Diploma in Mechanical Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Diploma",
        duration: "3 Years",
        fees: "₹18,000/Year",
        intake: 60,
        eligibility: "10th standard pass + CG PPT"
      }
    ],
    highestPackage: "₹5.5 LPA",
    averagePackage: "₹3.0 LPA",
    placements: "NMDC Kirandul & Bacheli iron ore complexes, Essar Steel, Tata Steel vendors.",
    facilities: [
      "Education City Jawanga Campus",
      "Mechanical Workshops",
      "Electrical Circuit Lab",
      "Computer Laboratory",
      "Library & Reading Room",
      "Sports Area"
    ]
  },
  1839: {
    name: "J.K. Institute of Engineering, Bilaspur",
    shortName: "JKIE Bilaspur",
    location: "Bilaspur",
    state: "Chhattisgarh",
    address: "Near Gatora Railway Station, Bilaspur, Chhattisgarh - 495004",
    phone: "07752-214444",
    website: "http://jkie.in",
    rating: 4.4,
    reviews: 325,
    type: "Private",
    ownership: "Private",
    affiliation: "CSVTU Bhilai, Approved by AICTE, J.K. Educational Society, Est. 2008",
    about: "J.K. Institute of Engineering, Bilaspur is a private engineering college located near Gatora Railway Station in Bilaspur. Approved by AICTE and affiliated to CSVTU Bhilai, it provides degree programs in core and computer engineering.",
    ranking: 20,
    fees: "₹58,000 - ₹60,000/Year (₹2,32,000 - ₹2,40,000 Total for B.Tech)",
    exams: "CG PET, JEE Main",
    img: "https://career.webindia123.com/career/institutes/aspupload/Uploads/chhattisgarh/25991/1_main.jpg",
    gallery: [
      "https://career.webindia123.com/career/institutes/aspupload/Uploads/chhattisgarh/25991/1_main.jpg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://career.webindia123.com/career/institutes/aspupload/Uploads/chhattisgarh/25991/1_main.jpg",
    courses: [
      {
        title: "B.Tech in Mechanical Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹58,000/Year",
        intake: 30,
        eligibility: "10+2 with PCM with min 45% marks + CG PET / JEE Main"
      },
      {
        title: "B.Tech in Computer Science & Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹60,000/Year",
        intake: 60,
        eligibility: "10+2 with PCM"
      },
      {
        title: "B.Tech in Civil Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹58,000/Year",
        intake: 30,
        eligibility: "10+2 with PCM"
      }
    ],
    highestPackage: "₹6.5 LPA",
    averagePackage: "₹3.2 LPA",
    placements: "SECL contractors, local engineering workshops, IT vendors.",
    facilities: [
      "Engineering Labs & Workshops",
      "Computer Laboratories",
      "Central Library",
      "Hostel Facility",
      "Sports Ground"
    ]
  },
  1840: {
    name: "Government Polytechnic, Kanker",
    shortName: "GP Kanker",
    location: "Kanker",
    state: "Chhattisgarh",
    address: "NH-30 Road, Nathiya Nawagaon, District Kanker, Chhattisgarh - 494336",
    phone: "07868-241550",
    website: "https://www.polykanker.ac.in",
    rating: 4.5,
    reviews: 209,
    type: "Public/Government (Govt of Chhattisgarh)",
    ownership: "Government",
    affiliation: "CSVTU Bhilai, CG DTE, Approved by AICTE",
    about: "Government Polytechnic Kanker is a state public technical institution established by the Department of Technical Education, Government of Chhattisgarh. Situated on NH-30 at Nathiya Nawagaon, the college offers affordable diploma education to the students of North Bastar.",
    ranking: 55,
    fees: "₹5,150/Year (₹15,450 Total for 3-Year Diploma)",
    exams: "CG PPT",
    img: "https://www.polykanker.ac.in/giheader/upload/42724112025104351newbuildingphoto.png",
    gallery: [
      "https://www.polykanker.ac.in/giheader/upload/42724112025104351newbuildingphoto.png",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://www.polykanker.ac.in/giheader/upload/42724112025104351newbuildingphoto.png",
    courses: [
      {
        title: "Diploma in Electronics & Telecommunication Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Diploma",
        duration: "3 Years",
        fees: "₹5,150/Year",
        intake: 30,
        eligibility: "10th standard pass with Science and Mathematics from recognized board + CG PPT"
      },
      {
        title: "Diploma in Civil Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Diploma",
        duration: "3 Years",
        fees: "₹5,150/Year",
        intake: 30,
        eligibility: "10th standard pass + CG PPT"
      }
    ],
    highestPackage: "₹3.5 LPA",
    averagePackage: "₹2.2 LPA",
    placements: "Telecom infrastructure maintenance, state PWD contractors.",
    facilities: [
      "Electronics & Telecom Lab",
      "Civil Materials Lab",
      "Computer Laboratory",
      "Technical Library",
      "Sports Area"
    ]
  },
  1841: {
    name: "Government Girls' Polytechnic, Raipur",
    shortName: "GGP Raipur",
    location: "Raipur",
    state: "Chhattisgarh",
    address: "Byron Bazar, Raipur, Chhattisgarh - 492001",
    phone: "0771-2423045",
    website: "http://ggpraipur.ac.in",
    rating: 4.6,
    reviews: 52,
    type: "Public/Government (Govt of Chhattisgarh)",
    ownership: "Government",
    affiliation: "CSVTU Bhilai, CG DTE, Approved by AICTE, Est. 1987",
    about: "Government Girls' Polytechnic, Raipur was established in 1987 as the premier government polytechnic exclusively for women in Chhattisgarh. Located in Byron Bazar, Raipur, the college provides specialized technical education in computer science, electronics, apparel design, and commercial practice.",
    ranking: 24,
    fees: "₹5,150/Year (₹15,450 Total for 3-Year Diploma)",
    exams: "CG PPT",
    img: "https://www.gkseries.com/blog/wp-content/uploads/2020/03/Government-Girls-Polytechnic-Raipur-1200x675.jpg",
    gallery: [
      "https://www.gkseries.com/blog/wp-content/uploads/2020/03/Government-Girls-Polytechnic-Raipur-1200x675.jpg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://www.gkseries.com/blog/wp-content/uploads/2020/03/Government-Girls-Polytechnic-Raipur-1200x675.jpg",
    courses: [
      {
        title: "Diploma in Costume Design & Dress Making",
        type: "APPLIED ARTS AND CRAFTS",
        division: "Diploma",
        duration: "3 Years",
        fees: "₹5,150/Year",
        intake: 30,
        eligibility: "10th standard pass from recognized board + CG PPT"
      },
      {
        title: "Diploma in Modern Office Management",
        type: "MANAGEMENT",
        division: "Diploma",
        duration: "3 Years",
        fees: "₹5,150/Year",
        intake: 30,
        eligibility: "10th standard pass + CG PPT"
      },
      {
        title: "Diploma in Computer Science & Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Diploma",
        duration: "3 Years",
        fees: "₹5,150/Year",
        intake: 30,
        eligibility: "10th standard pass + CG PPT"
      }
    ],
    highestPackage: "₹4.0 LPA",
    averagePackage: "₹2.4 LPA",
    placements: "Textile boutiques, state secretariats, IT support, telecom operators.",
    facilities: [
      "Byron Bazar Prime Campus",
      "Apparel Drafting & Sewing Studios",
      "Modern Office Management Computer Labs",
      "Technical Library",
      "Girls Hostel & Recreation Hall"
    ]
  },
  1842: {
    name: "School of Studies in Electronics & Photonics, Pt. Ravishankar Shukla University, Raipur",
    shortName: "SoS Electronics & Photonics PRSU",
    location: "Raipur",
    state: "Chhattisgarh",
    address: "Pt. Ravishankar Shukla University Campus, Amanaka, G.E. Road, Raipur, Chhattisgarh - 492010",
    phone: "0771-2262837",
    website: "http://www.prsu.ac.in",
    rating: 4.7,
    reviews: 463,
    type: "Public/Government (State University Department)",
    ownership: "Government",
    affiliation: "Pt. Ravishankar Shukla University (PRSU Raipur, NAAC 'A' Accredited State Public University), Approved by AICTE & UGC",
    about: "School of Studies in Electronics and Photonics at Pt. Ravishankar Shukla University, Raipur is an AICTE-approved university teaching department renowned for specialized postgraduate teaching and doctoral research in optoelectronics, laser systems, optical communications, and photonic crystal fibers.",
    ranking: 44,
    fees: "₹30,000/Year (₹60,000 Total for M.Tech)",
    exams: "GATE / PRSU Entrance Examination",
    img: "https://lh5.googleusercontent.com/-JvsSpYfQPyE/V0fHsY3E4PI/AAAAAAAASP4/KNXNq5sVAQ0wkaFYCEVHBXukR8WWKHgLwCLIBGAYYCw/photo.jpg",
    gallery: [
      "https://lh5.googleusercontent.com/-JvsSpYfQPyE/V0fHsY3E4PI/AAAAAAAASP4/KNXNq5sVAQ0wkaFYCEVHBXukR8WWKHgLwCLIBGAYYCw/photo.jpg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://lh5.googleusercontent.com/-JvsSpYfQPyE/V0fHsY3E4PI/AAAAAAAASP4/KNXNq5sVAQ0wkaFYCEVHBXukR8WWKHgLwCLIBGAYYCw/photo.jpg",
    courses: [
      {
        title: "M.Tech in Optoelectronics and Laser Technology",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹30,000/Year",
        intake: 18,
        eligibility: "B.Tech/BE in Electronics / ECE / Electrical or M.Sc in Physics/Electronics with min 55% marks + GATE / PRSU Entrance"
      },
      {
        title: "M.Sc in Electronics",
        type: "SCIENCE",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹18,000/Year",
        intake: 30,
        eligibility: "B.Sc with Physics/Electronics/Mathematics with min 50% marks"
      }
    ],
    highestPackage: "₹11.0 LPA",
    averagePackage: "₹5.2 LPA",
    placements: "DRDO, ISRO research collaborations, optoelectronics firms, semiconductor laboratories.",
    facilities: [
      "Laser and Photonics Research Labs",
      "Fiber Optics Communication Lab",
      "Microprocessor & Embedded Systems Center",
      "Central PRSU Digital Library",
      "University Hostels & Sports Pavilion"
    ]
  },
  1843: {
    name: "Kalinga University - Faculty of Technology, Raipur",
    shortName: "Kalinga Univ Faculty of Tech",
    location: "Raipur",
    state: "Chhattisgarh",
    address: "Village Kotni, Near Mantralaya, Naya Raipur, Chhattisgarh - 492101",
    phone: "0771-3051010",
    website: "https://kalingauniversity.ac.in",
    rating: 4.4,
    reviews: 481,
    type: "Private",
    ownership: "Private",
    affiliation: "Kalinga University, Approved by UGC & AICTE",
    about: "Faculty of Technology at Kalinga University, Naya Raipur provides undergraduate engineering and technology education. Approved by AICTE, it features modern laboratory complexes, CAD/CAM centers, and industry-oriented training programs.",
    ranking: 81,
    fees: "₹80,000 - ₹95,000/Year (₹3,20,000 - ₹3,80,000 Total for B.Tech)",
    exams: "KALSEE, CG PET, JEE Main",
    img: "https://image-static.collegedunia.com/public/college_data/images/campusimage/168820086306.jpg",
    gallery: [
      "https://image-static.collegedunia.com/public/college_data/images/campusimage/168820086306.jpg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://image-static.collegedunia.com/public/college_data/images/campusimage/168820086306.jpg",
    courses: [
      {
        title: "B.Tech in Civil Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹80,000/Year",
        intake: 60,
        eligibility: "10+2 with Physics, Mathematics, and Chemistry with min 45% marks + KALSEE / CG PET"
      },
      {
        title: "B.Tech in Computer Science & Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹95,000/Year",
        intake: 120,
        eligibility: "10+2 with PCM with min 45% marks"
      },
      {
        title: "B.Tech in Mechanical Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹80,000/Year",
        intake: 60,
        eligibility: "10+2 with PCM"
      }
    ],
    highestPackage: "₹12.0 LPA",
    averagePackage: "₹4.2 LPA",
    placements: "Tech Mahindra, Capgemini, Cipla, Wipro, Bosch, Tata Motors.",
    facilities: [
      "Naya Raipur Campus",
      "Engineering Laboratories",
      "Computing Center",
      "Library",
      "Hostels"
    ]
  },
  1844: {
    name: "Ram Krishna Rathore Government Polytechnic, Janjgir-Champa",
    shortName: "RKR GP Janjgir",
    location: "Janjgir-Champa",
    state: "Chhattisgarh",
    address: "Village Pendri, Tehsil Janjgir, District Janjgir-Champa, Chhattisgarh - 495668",
    phone: "07817-222010",
    website: "http://gprkrjanjgir.ac.in",
    rating: 4.5,
    reviews: 369,
    type: "Public/Government (Govt of Chhattisgarh)",
    ownership: "Government",
    affiliation: "CSVTU Bhilai, CG DTE, Approved by AICTE",
    about: "Ram Krishna Rathore Government Polytechnic Janjgir-Champa is a public technical institute established by the Department of Technical Education, Government of Chhattisgarh in Pendri, Janjgir. Offering AICTE-approved diplomas in chemical, electrical, and civil engineering, it feeds technical talent into the power and chemical corridor of Central Chhattisgarh.",
    ranking: 75,
    fees: "₹5,150/Year (₹15,450 Total for 3-Year Diploma)",
    exams: "CG PPT",
    img: "https://img.naidunia.com/naidunia/ndnimg/14012023/14_01_2023-13_janp222.jpg",
    gallery: [
      "https://img.naidunia.com/naidunia/ndnimg/14012023/14_01_2023-13_janp222.jpg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://img.naidunia.com/naidunia/ndnimg/14012023/14_01_2023-13_janp222.jpg",
    courses: [
      {
        title: "Diploma in Chemical Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Diploma",
        duration: "3 Years",
        fees: "₹5,150/Year",
        intake: 30,
        eligibility: "10th standard pass with Science and Mathematics from recognized board + CG PPT"
      },
      {
        title: "Diploma in Electrical Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Diploma",
        duration: "3 Years",
        fees: "₹5,150/Year",
        intake: 60,
        eligibility: "10th standard pass + CG PPT"
      },
      {
        title: "Diploma in Civil Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Diploma",
        duration: "3 Years",
        fees: "₹5,150/Year",
        intake: 60,
        eligibility: "10th standard pass + CG PPT"
      }
    ],
    highestPackage: "₹4.0 LPA",
    averagePackage: "₹2.4 LPA",
    placements: "Thermal power plants in Janjgir corridor, chemical processing plants, CSPDCL.",
    facilities: [
      "Chemical Engineering Process Lab",
      "Electrical Machines Workshop",
      "Civil Materials Lab",
      "Computer Laboratory",
      "Technical Library",
      "Playground"
    ]
  },
  1845: {
    name: "Government Polytechnic, Mungeli",
    shortName: "GP Mungeli",
    location: "Mungeli",
    state: "Chhattisgarh",
    address: "Village & P.O. Dharampura, Tehsil Jarhagaon, District Mungeli, Chhattisgarh - 495334",
    phone: "07755-271010",
    website: "http://govtpolymungeli.ac.in",
    rating: 4.5,
    reviews: 392,
    type: "Public/Government (Govt of Chhattisgarh)",
    ownership: "Government",
    affiliation: "CSVTU Bhilai, CG DTE, Approved by AICTE",
    about: "Government Polytechnic Mungeli is a state public technical education institute established by the Directorate of Technical Education, Government of Chhattisgarh in Dharampura, Mungeli. It provides subsidized diploma education in civil and electrical engineering.",
    ranking: 69,
    fees: "₹5,150/Year (₹15,450 Total for 3-Year Diploma)",
    exams: "CG PPT",
    img: "https://govtpolymungeli.ac.in/images/demo/rotate/2.jpg",
    gallery: [
      "https://govtpolymungeli.ac.in/images/demo/rotate/2.jpg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://govtpolymungeli.ac.in/images/demo/rotate/2.jpg",
    courses: [
      {
        title: "Diploma in Civil Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Diploma",
        duration: "3 Years",
        fees: "₹5,150/Year",
        intake: 60,
        eligibility: "10th standard pass with Science and Mathematics from recognized board + CG PPT"
      },
      {
        title: "Diploma in Electrical Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Diploma",
        duration: "3 Years",
        fees: "₹5,150/Year",
        intake: 60,
        eligibility: "10th standard pass + CG PPT"
      }
    ],
    highestPackage: "₹3.5 LPA",
    averagePackage: "₹2.2 LPA",
    placements: "CSPDCL, local construction contractors, agro-processing units.",
    facilities: [
      "Civil Materials Lab",
      "Electrical Wiring Workshop",
      "Computer Laboratory",
      "Technical Library",
      "Playground"
    ]
  },
  1846: {
    name: "Government Polytechnic, Sukma",
    shortName: "GP Sukma",
    location: "Sukma",
    state: "Chhattisgarh",
    address: "Kumharras, District Sukma, Chhattisgarh - 494111",
    phone: "07864-284010",
    website: "http://gpsukma.ac.in",
    rating: 4.5,
    reviews: 240,
    type: "Public/Government (Govt of Chhattisgarh)",
    ownership: "Government",
    affiliation: "CSVTU Bhilai, CG DTE, Approved by AICTE",
    about: "Government Polytechnic Sukma was established by the Government of Chhattisgarh under the Centrally Sponsored Scheme to provide accessible technical education to youth in the tribal district of Sukma in South Bastar. Approved by AICTE and affiliated to CSVTU Bhilai.",
    ranking: 2,
    fees: "₹5,150/Year (₹15,450 Total for 3-Year Diploma)",
    exams: "CG PPT",
    img: "https://img.studyclap.com/img/institute/college/773x343/24244/gps-sukma-e0962bafc8.jpg",
    gallery: [
      "https://img.studyclap.com/img/institute/college/773x343/24244/gps-sukma-e0962bafc8.jpg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://img.studyclap.com/img/institute/college/773x343/24244/gps-sukma-e0962bafc8.jpg",
    courses: [
      {
        title: "Diploma in Electrical Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Diploma",
        duration: "3 Years",
        fees: "₹5,150/Year",
        intake: 60,
        eligibility: "10th standard pass with Science and Mathematics from recognized board + CG PPT"
      },
      {
        title: "Diploma in Civil Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Diploma",
        duration: "3 Years",
        fees: "₹5,150/Year",
        intake: 60,
        eligibility: "10th standard pass + CG PPT"
      }
    ],
    highestPackage: "₹3.5 LPA",
    averagePackage: "₹2.2 LPA",
    placements: "Tribal welfare infrastructure projects, state electricity utilities.",
    facilities: [
      "Electrical Machines Workshop",
      "Civil Materials Lab",
      "Computer Laboratory",
      "Library",
      "Sports Area"
    ]
  }
};

let updatedCount = 0;
for (const col of colleges) {
  if (batch185Updates[col.id]) {
    const update = batch185Updates[col.id];
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
console.log(`Saved updated public/siteData.json (${updatedCount} colleges in Batch 185).`);

// Update progress.json
const progressRaw = fs.readFileSync(progressPath, 'utf8');
const progress = JSON.parse(progressRaw);
progress.verifiedColleges = 1850;
progress.lastUpdated = new Date().toISOString();
progress.currentBatch = 185;
if (!progress.batches) progress.batches = {};
progress.batches["185"] = {
  status: "verified",
  verifiedCount: 10,
  range: "1841-1850",
  ids: [1837, 1838, 1839, 1840, 1841, 1842, 1843, 1844, 1845, 1846],
  verifiedAt: new Date().toISOString()
};
fs.writeFileSync(progressPath, JSON.stringify(progress, null, 2), 'utf8');
console.log(`Updated ${progressPath} -> verifiedColleges: 1850`);

// Update all_verified_colleges.json
let allVerified = [];
if (fs.existsSync(allVerifiedJsonPath)) {
  allVerified = JSON.parse(fs.readFileSync(allVerifiedJsonPath, 'utf8'));
}
const verifiedBatchColleges = colleges.filter(c => batch185Updates[c.id]);
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
let mdEntry = `\n### Batch 185 (Colleges 1,841–1,850, IDs: 1837–1846)\n`;
mdEntry += `| ID | College Name | Location | State | Type | Website |\n`;
mdEntry += `|---|---|---|---|---|---|\n`;
for (const id of [1837, 1838, 1839, 1840, 1841, 1842, 1843, 1844, 1845, 1846]) {
  const c = batch185Updates[id];
  mdEntry += `| ${id} | ${c.name} | ${c.location} | ${c.state} | ${c.type} | [Website](${c.website}) |\n`;
}
fs.appendFileSync(allVerifiedMdPath, mdEntry, 'utf8');
console.log(`Appended Batch 185 to ${allVerifiedMdPath}`);
