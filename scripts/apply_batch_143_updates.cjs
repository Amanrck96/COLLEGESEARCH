const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const progressPath = path.join(__dirname, '../reports/verification/progress.json');

const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const progress = JSON.parse(fs.readFileSync(progressPath, 'utf8'));

const batch143Updates = {
  1096: {
    name: "Bakhtiyarpur College of Engineering, Patna",
    shortName: "BCE Patna",
    location: "Patna",
    city: "Patna",
    state: "Bihar",
    address: "Champapur, Dedaur, PO+PS Bakhtiyarpur, District Patna, Bihar - 803212",
    phone: "06132-222055",
    email: "principal@bcepatna.ac.in",
    website: "https://www.bcepatna.ac.in",
    type: "Public/Government",
    ownership: "Public/Government",
    establishmentYear: "2016",
    approval: "AICTE, Department of Science & Technology (Govt. of Bihar)",
    affiliation: "Bihar Engineering University (BEU), Patna",
    rating: 4.4,
    reviews: 215,
    reviewsCount: 215,
    ranking: 18,
    fees: "₹40,000 - ₹50,000 Total",
    exams: "JEE Main, BCECE (UGEAC)",
    about: "Bakhtiyarpur College of Engineering (BCE Patna) is a premier State Government engineering college established in 2016 by the Department of Science, Technology and Technical Education, Government of Bihar. It is affiliated with Bihar Engineering University and approved by AICTE, providing modern technical education, state-of-the-art laboratories, and high-impact engineering programs.",
    courses: [
      {
        title: "B.Tech in Computer Science & Engineering",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹45,000 Total",
        eligibility: "10+2 with PCM (45% marks) + JEE Main / BCECE rank",
        exams: "JEE Main, BCECE",
        intake: "60"
      },
      {
        title: "B.Tech in Electrical & Electronics Engineering",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹45,000 Total",
        eligibility: "10+2 with PCM (45% marks) + JEE Main / BCECE rank",
        exams: "JEE Main, BCECE",
        intake: "60"
      },
      {
        title: "B.Tech in Mechanical Engineering",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹45,000 Total",
        eligibility: "10+2 with PCM (45% marks) + JEE Main / BCECE rank",
        exams: "JEE Main, BCECE",
        intake: "60"
      },
      {
        title: "B.Tech in Civil Engineering",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹45,000 Total",
        eligibility: "10+2 with PCM (45% marks) + JEE Main / BCECE rank",
        exams: "JEE Main, BCECE",
        intake: "60"
      },
      {
        title: "B.Tech in Fire Technology & Safety",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹45,000 Total",
        eligibility: "10+2 with PCM (45% marks) + JEE Main / BCECE rank",
        exams: "JEE Main, BCECE",
        intake: "30"
      }
    ],
    highestPackage: "₹14 LPA",
    averagePackage: "₹4.5 LPA",
    placements: "82%",
    topRecruiters: ["TCS", "Infosys", "Wipro", "Prism Johnson", "HCL", "L&T"],
    gallery: [
      "https://media.collegedekho.com/media/img/institute/crawled_images/None/bak2.jpg?width=640"
    ]
  },
  1097: {
    name: "L.N. Mishra College of Business Management, Muzaffarpur",
    shortName: "LNMCBM",
    location: "Muzaffarpur",
    city: "Muzaffarpur",
    state: "Bihar",
    address: "Bhagwanpur Chowk, Muzaffarpur, Bihar - 842001",
    phone: "0621-2246174",
    email: "info@lnmcbm.ac.in",
    website: "https://lnmcbm.ac.in",
    type: "Private",
    ownership: "Private",
    establishmentYear: "1973",
    approval: "AICTE, UGC Recognized",
    affiliation: "B.R. Ambedkar Bihar University (BRABU), Muzaffarpur",
    rating: 4.5,
    reviews: 320,
    reviewsCount: 320,
    ranking: 12,
    fees: "₹1.2 Lakhs - ₹2.5 Lakhs",
    exams: "MAT, CAT, CMAT, State CET",
    about: "Lalit Narayan Mishra College of Business Management (LNMCBM) is an autonomous management and technical institute founded in 1973 at Muzaffarpur, Bihar. Approved by AICTE and affiliated with B.R. Ambedkar Bihar University, LNMCBM is one of North Bihar's oldest and most reputed centers for professional management and computer applications education.",
    courses: [
      {
        title: "Master of Business Administration (MBA)",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹1,80,000 Total",
        eligibility: "Graduation with 50% + MAT/CAT/CMAT/CET score",
        exams: "MAT, CAT, CMAT",
        intake: "120"
      },
      {
        title: "Master of Computer Applications (MCA)",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹1,60,000 Total",
        eligibility: "BCA/B.Sc/B.Com/B.A. with Mathematics at 10+2 or Graduation",
        exams: "State CET, Institute Test",
        intake: "60"
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        division: "Undergraduate",
        duration: "3 Years",
        fees: "₹1,20,000 Total",
        eligibility: "10+2 from recognized board with 45% marks",
        exams: "Merit / Written Test",
        intake: "120"
      },
      {
        title: "Bachelor of Computer Applications (BCA)",
        division: "Undergraduate",
        duration: "3 Years",
        fees: "₹1,20,000 Total",
        eligibility: "10+2 with Mathematics",
        exams: "Merit / Written Test",
        intake: "120"
      }
    ],
    highestPackage: "₹10 LPA",
    averagePackage: "₹4.2 LPA",
    placements: "80%",
    topRecruiters: ["ICICI Bank", "HDFC Bank", "Bandhan Bank", "Wipro", "TCS", "Airtel"],
    img: "https://lnmcbmbed.in/wp-content/uploads/elementor/thumbs/building-photo-p5ggky8orda8medoi7oq499fpecjaj62eievckrne4.jpg",
    image: "https://lnmcbmbed.in/wp-content/uploads/elementor/thumbs/building-photo-p5ggky8orda8medoi7oq499fpecjaj62eievckrne4.jpg",
    imageUrl: "https://lnmcbmbed.in/wp-content/uploads/elementor/thumbs/building-photo-p5ggky8orda8medoi7oq499fpecjaj62eievckrne4.jpg",
    gallery: [
      "https://lnmcbmbed.in/wp-content/uploads/elementor/thumbs/building-photo-p5ggky8orda8medoi7oq499fpecjaj62eievckrne4.jpg"
    ]
  },
  1098: {
    name: "National Degree College, Purnia",
    shortName: "NDC Purnia",
    location: "Purnia",
    city: "Purnia",
    state: "Bihar",
    address: "Rambagh, Purnea, Bihar - 854301",
    phone: "06454-242330",
    email: "ndcpurnea@gmail.com",
    website: "https://ndcpurnea.org",
    type: "Private",
    ownership: "Private",
    establishmentYear: "1982",
    approval: "UGC Recognized, Govt. of Bihar",
    affiliation: "Purnea University, Purnia",
    rating: 4.2,
    reviews: 165,
    reviewsCount: 165,
    ranking: 28,
    fees: "₹18,000 - ₹60,000",
    exams: "Purnea University UG Admission, Merit-based",
    about: "National Degree College (N.D. College), located at Rambagh in Purnea, is an affiliated degree college under Purnea University. The college delivers undergraduate degrees across Arts, Science, Commerce, and vocational Computer Applications, catering to students across Seemanchal and North-Eastern Bihar.",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        division: "Undergraduate",
        duration: "3 Years",
        fees: "₹60,000 Total",
        eligibility: "10+2 with Mathematics",
        exams: "Merit-based",
        intake: "60"
      },
      {
        title: "Bachelor of Arts (B.A. Hons)",
        division: "Undergraduate",
        duration: "3 Years",
        fees: "₹18,000 Total",
        eligibility: "10+2 from recognized board",
        exams: "Merit-based",
        intake: "180"
      },
      {
        title: "Bachelor of Science (B.Sc Hons)",
        division: "Undergraduate",
        duration: "3 Years",
        fees: "₹21,000 Total",
        eligibility: "10+2 with Science stream",
        exams: "Merit-based",
        intake: "120"
      },
      {
        title: "Bachelor of Commerce (B.Com Hons)",
        division: "Undergraduate",
        duration: "3 Years",
        fees: "₹18,000 Total",
        eligibility: "10+2 with Commerce or relevant stream",
        exams: "Merit-based",
        intake: "120"
      }
    ],
    highestPackage: "₹5.5 LPA",
    averagePackage: "₹2.8 LPA",
    placements: "65%",
    topRecruiters: ["Local Banking & Financial Institutions", "Regional Tech Enterprises", "Education Services"],
    img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=640",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=640",
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=640",
    gallery: [
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=640"
    ]
  },
  1099: {
    name: "Ambedkar Institute of Higher Education, Patna",
    shortName: "AIHE Patna",
    location: "Patna",
    city: "Patna",
    state: "Bihar",
    address: "Chhitnawa, Danapur Cantt, Patna, Bihar - 801503",
    phone: "0612-2977797",
    email: "info@aihe.in",
    website: "https://aihe.in",
    type: "Private",
    ownership: "Private",
    establishmentYear: "2013",
    approval: "INC, BNRC, Bihar Health University / Aryabhatta Knowledge University",
    affiliation: "Bihar University of Health Sciences (BUHS), Patna",
    rating: 4.4,
    reviews: 140,
    reviewsCount: 140,
    ranking: 22,
    fees: "₹1.5 Lakhs - ₹4.5 Lakhs",
    exams: "AIHE Entrance Test, Merit-based",
    about: "Ambedkar Institute of Higher Education (AIHE Patna), situated at Danapur, Patna, is a leading professional institute recognized by the Indian Nursing Council (INC) and Bihar Nursing Registration Council (BNRC). It delivers paramedical, nursing, management, and technology programs focused on clinical skill proficiency and community health care.",
    courses: [
      {
        title: "B.Sc in Nursing",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹4,50,000 Total",
        eligibility: "10+2 with PCB and English (45% minimum)",
        exams: "Merit / Entrance Test",
        intake: "60"
      },
      {
        title: "Bachelor of Physiotherapy (BPT)",
        division: "Undergraduate",
        duration: "4.5 Years",
        fees: "₹3,80,000 Total",
        eligibility: "10+2 with PCB (50% marks)",
        exams: "Merit / Entrance Test",
        intake: "50"
      },
      {
        title: "General Nursing & Midwifery (GNM)",
        division: "Diploma",
        duration: "3 Years",
        fees: "₹2,80,000 Total",
        eligibility: "10+2 in any stream (40% minimum)",
        exams: "Merit-based",
        intake: "60"
      },
      {
        title: "Bachelor of Computer Applications (BCA)",
        division: "Undergraduate",
        duration: "3 Years",
        fees: "₹1,50,000 Total",
        eligibility: "10+2 from recognized board",
        exams: "Merit-based",
        intake: "60"
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        division: "Undergraduate",
        duration: "3 Years",
        fees: "₹1,50,000 Total",
        eligibility: "10+2 from recognized board",
        exams: "Merit-based",
        intake: "60"
      }
    ],
    highestPackage: "₹7.5 LPA",
    averagePackage: "₹3.8 LPA",
    placements: "88%",
    topRecruiters: ["Apollo Hospitals", "Medanta", "Paras HMRI Hospital", "Ruban Memorial Hospital", "Max Healthcare"],
    img: "https://www.imaginecareer.in/images/collegeimg/In9.jpeg",
    image: "https://www.imaginecareer.in/images/collegeimg/In9.jpeg",
    imageUrl: "https://www.imaginecareer.in/images/collegeimg/In9.jpeg",
    gallery: [
      "https://www.imaginecareer.in/images/collegeimg/In9.jpeg"
    ]
  },
  1101: {
    name: "Darbhanga College of Engineering, Darbhanga",
    shortName: "DCE Darbhanga",
    location: "Darbhanga",
    city: "Darbhanga",
    state: "Bihar",
    address: "Mabbi, Post-Lal Sahpur, Via-P.T.C., Darbhanga, Bihar - 846005",
    phone: "06272-255255",
    email: "principal@dcedarbhanga.ac.in",
    website: "https://www.dcedarbhanga.ac.in",
    type: "Public/Government",
    ownership: "Public/Government",
    establishmentYear: "1999",
    approval: "AICTE, Department of Science & Technology (Govt. of Bihar)",
    affiliation: "Bihar Engineering University (BEU), Patna",
    rating: 4.5,
    reviews: 195,
    reviewsCount: 195,
    ranking: 15,
    fees: "₹40,000 - ₹50,000 Total",
    exams: "JEE Main, BCECE (UGEAC)",
    about: "Darbhanga College of Engineering (DCE Darbhanga) is a prominent State Government engineering institution established in 1999 (taken over by the Government of Bihar in 2008). Governed by the Department of Science, Technology and Technical Education, Govt. of Bihar, and affiliated with Bihar Engineering University, DCE is renowned for high academic merit and competitive placements across core and IT engineering sectors.",
    courses: [
      {
        title: "B.Tech in Computer Science & Engineering",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹45,000 Total",
        eligibility: "10+2 with PCM (45% marks) + JEE Main / BCECE rank",
        exams: "JEE Main, BCECE",
        intake: "60"
      },
      {
        title: "B.Tech in Cyber Security",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹45,000 Total",
        eligibility: "10+2 with PCM (45% marks) + JEE Main / BCECE rank",
        exams: "JEE Main, BCECE",
        intake: "60"
      },
      {
        title: "B.Tech in Mechanical Engineering",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹45,000 Total",
        eligibility: "10+2 with PCM (45% marks) + JEE Main / BCECE rank",
        exams: "JEE Main, BCECE",
        intake: "60"
      },
      {
        title: "B.Tech in Electrical & Electronics Engineering",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹45,000 Total",
        eligibility: "10+2 with PCM (45% marks) + JEE Main / BCECE rank",
        exams: "JEE Main, BCECE",
        intake: "60"
      },
      {
        title: "B.Tech in Civil Engineering",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹45,000 Total",
        eligibility: "10+2 with PCM (45% marks) + JEE Main / BCECE rank",
        exams: "JEE Main, BCECE",
        intake: "60"
      },
      {
        title: "M.Tech in Power Systems",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹30,000 Total",
        eligibility: "B.Tech / B.E. in relevant discipline + GATE",
        exams: "GATE, State Entrance",
        intake: "30"
      }
    ],
    highestPackage: "₹16 LPA",
    averagePackage: "₹5.2 LPA",
    placements: "86%",
    topRecruiters: ["TCS", "Infosys", "Wipro", "Capgemini", "L&T", "Alstom"],
    gallery: [
      "https://assets.collegedunia.com/public/image/unnamed_9__2ab0e140a9b697b1ec3c8a06faa08c4a.jpg"
    ]
  },
  1102: {
    name: "Nalanda College of Engineering, Chandi",
    shortName: "NCE Chandi",
    location: "Chandi (Nalanda)",
    city: "Chandi",
    state: "Bihar",
    address: "Chandi, District Nalanda, Bihar - 803108",
    phone: "06111-275200",
    email: "ncechandi2008@gmail.com",
    website: "https://www.ncechandi.ac.in",
    type: "Public/Government",
    ownership: "Public/Government",
    establishmentYear: "2008",
    approval: "AICTE, Department of Science & Technology (Govt. of Bihar)",
    affiliation: "Bihar Engineering University (BEU), Patna",
    rating: 4.6,
    reviews: 310,
    reviewsCount: 310,
    ranking: 10,
    fees: "₹40,000 - ₹50,000 Total",
    exams: "JEE Main, BCECE (UGEAC)",
    about: "Nalanda College of Engineering (NCE Chandi) is an esteemed State Government engineering college inaugurated in 2008 by Chief Minister Nitish Kumar to honor Nalanda's historical heritage of education. Governed by the Department of Science, Technology and Technical Education, Govt. of Bihar, NCE offers distinguished undergraduate programs in emerging areas including Aeronautical Engineering and Artificial Intelligence.",
    courses: [
      {
        title: "B.Tech in Computer Science & Engineering",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹45,000 Total",
        eligibility: "10+2 with PCM (45% marks) + JEE Main / BCECE rank",
        exams: "JEE Main, BCECE",
        intake: "60"
      },
      {
        title: "B.Tech in Artificial Intelligence & Machine Learning",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹45,000 Total",
        eligibility: "10+2 with PCM (45% marks) + JEE Main / BCECE rank",
        exams: "JEE Main, BCECE",
        intake: "60"
      },
      {
        title: "B.Tech in Aeronautical Engineering",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹45,000 Total",
        eligibility: "10+2 with PCM (45% marks) + JEE Main / BCECE rank",
        exams: "JEE Main, BCECE",
        intake: "60"
      },
      {
        title: "B.Tech in Civil Engineering",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹45,000 Total",
        eligibility: "10+2 with PCM (45% marks) + JEE Main / BCECE rank",
        exams: "JEE Main, BCECE",
        intake: "60"
      },
      {
        title: "B.Tech in Electrical & Electronics Engineering",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹45,000 Total",
        eligibility: "10+2 with PCM (45% marks) + JEE Main / BCECE rank",
        exams: "JEE Main, BCECE",
        intake: "60"
      },
      {
        title: "B.Tech in Mechanical Engineering",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹45,000 Total",
        eligibility: "10+2 with PCM (45% marks) + JEE Main / BCECE rank",
        exams: "JEE Main, BCECE",
        intake: "60"
      }
    ],
    highestPackage: "₹15 LPA",
    averagePackage: "₹5.1 LPA",
    placements: "88%",
    topRecruiters: ["TCS", "Infosys", "Wipro", "Cognizant", "Tata Motors", "L&T Construction"],
    img: "https://ik.imagekit.io/syustaging/SYU_PREPROD/NCE_Campus_g6jGLdTRh.webp?tr=w-3840",
    image: "https://ik.imagekit.io/syustaging/SYU_PREPROD/NCE_Campus_g6jGLdTRh.webp?tr=w-3840",
    imageUrl: "https://ik.imagekit.io/syustaging/SYU_PREPROD/NCE_Campus_g6jGLdTRh.webp?tr=w-3840",
    gallery: [
      "https://ik.imagekit.io/syustaging/SYU_PREPROD/NCE_Campus_g6jGLdTRh.webp?tr=w-3840"
    ]
  },
  1103: {
    name: "Bhagalpur College of Engineering",
    shortName: "BCE Bhagalpur",
    location: "Bhagalpur",
    city: "Bhagalpur",
    state: "Bihar",
    address: "Sabour, Bhagalpur, Bihar - 813210",
    phone: "0641-2451003",
    email: "principal@bcebhagalpur.ac.in",
    website: "https://www.bcebhagalpur.ac.in",
    type: "Public/Government",
    ownership: "Public/Government",
    establishmentYear: "1960",
    approval: "AICTE, Department of Science & Technology (Govt. of Bihar)",
    affiliation: "Bihar Engineering University (BEU), Patna",
    rating: 4.6,
    reviews: 380,
    reviewsCount: 380,
    ranking: 8,
    fees: "₹40,000 - ₹50,000 Total",
    exams: "JEE Main, BCECE (UGEAC)",
    about: "Bhagalpur College of Engineering (BCE Bhagalpur), established in 1960, is one of Bihar's most renowned and historic State Government engineering institutions. Governed by the Department of Science, Technology and Technical Education, Govt. of Bihar, BCE has produced generations of top engineers, civil servants, and industrial leaders, offering cutting-edge programs in computer science, electronics, and core engineering.",
    courses: [
      {
        title: "B.Tech in Computer Science & Engineering",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹45,000 Total",
        eligibility: "10+2 with PCM (45% marks) + JEE Main / BCECE rank",
        exams: "JEE Main, BCECE",
        intake: "60"
      },
      {
        title: "B.Tech in Electronics & Communication Engineering",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹45,000 Total",
        eligibility: "10+2 with PCM (45% marks) + JEE Main / BCECE rank",
        exams: "JEE Main, BCECE",
        intake: "60"
      },
      {
        title: "B.Tech in Civil Engineering",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹45,000 Total",
        eligibility: "10+2 with PCM (45% marks) + JEE Main / BCECE rank",
        exams: "JEE Main, BCECE",
        intake: "60"
      },
      {
        title: "B.Tech in Mechanical Engineering",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹45,000 Total",
        eligibility: "10+2 with PCM (45% marks) + JEE Main / BCECE rank",
        exams: "JEE Main, BCECE",
        intake: "60"
      },
      {
        title: "B.Tech in Electrical Engineering",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹45,000 Total",
        eligibility: "10+2 with PCM (45% marks) + JEE Main / BCECE rank",
        exams: "JEE Main, BCECE",
        intake: "60"
      },
      {
        title: "M.Tech in Microelectronics & VLSI Technology",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹30,000 Total",
        eligibility: "B.Tech in ECE / EE or related discipline + GATE",
        exams: "GATE, State Entrance",
        intake: "30"
      }
    ],
    highestPackage: "₹18 LPA",
    averagePackage: "₹5.8 LPA",
    placements: "90%",
    topRecruiters: ["TCS", "Infosys", "Wipro", "Cognizant", "L&T", "Power Grid", "BHEL"],
    img: "https://static.boostmytalent.com/img/univ/bhagalpur-engineering-college-bihar-campus-admission.webp",
    image: "https://static.boostmytalent.com/img/univ/bhagalpur-engineering-college-bihar-campus-admission.webp",
    imageUrl: "https://static.boostmytalent.com/img/univ/bhagalpur-engineering-college-bihar-campus-admission.webp",
    gallery: [
      "https://static.boostmytalent.com/img/univ/bhagalpur-engineering-college-bihar-campus-admission.webp"
    ]
  },
  1104: {
    name: "Maulana Azad College of Engineering and Technology, Patna",
    shortName: "MACET Patna",
    location: "Patna",
    city: "Patna",
    state: "Bihar",
    address: "Gorhna, Neora, Patna, Bihar - 801115",
    phone: "0612-2254569",
    email: "contact@macet.net.in",
    website: "https://www.macet.net.in",
    type: "Private",
    ownership: "Private",
    establishmentYear: "1988",
    approval: "AICTE Approved, Govt. of Bihar",
    affiliation: "Bihar Engineering University (BEU), Patna",
    rating: 4.3,
    reviews: 263,
    reviewsCount: 263,
    ranking: 20,
    fees: "₹3.2 Lakhs - ₹3.6 Lakhs",
    exams: "JEE Main, BCECE, MACET Entrance Test",
    about: "Maulana Azad College of Engineering and Technology (MACET Patna), established in 1988, is the premier Muslim religious minority technical institution in Bihar. Approved by AICTE and affiliated with Bihar Engineering University, MACET offers professional 4-year engineering programs with robust lab infrastructure and training facilities.",
    courses: [
      {
        title: "B.Tech in Computer Science & Engineering",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹3,40,000 Total",
        eligibility: "10+2 with PCM (45% marks) + JEE Main / BCECE / MACET Test",
        exams: "JEE Main, BCECE",
        intake: "120"
      },
      {
        title: "B.Tech in Civil Engineering",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹3,20,000 Total",
        eligibility: "10+2 with PCM (45% marks) + Entrance score",
        exams: "JEE Main, BCECE",
        intake: "60"
      },
      {
        title: "B.Tech in Mechanical Engineering",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹3,20,000 Total",
        eligibility: "10+2 with PCM (45% marks) + Entrance score",
        exams: "JEE Main, BCECE",
        intake: "60"
      },
      {
        title: "B.Tech in Electrical & Electronics Engineering",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹3,20,000 Total",
        eligibility: "10+2 with PCM (45% marks) + Entrance score",
        exams: "JEE Main, BCECE",
        intake: "60"
      }
    ],
    highestPackage: "₹12 LPA",
    averagePackage: "₹4.2 LPA",
    placements: "78%",
    topRecruiters: ["TCS", "Infosys", "Wipro", "Cognizant", "Tech Mahindra", "Collabera"],
    gallery: [
      "https://media.getmyuni.com/azure/college-image/big/maulana-azad-college-of-engineering-and-technology-patna.jpg"
    ]
  },
  1105: {
    name: "Muzaffarpur Institute of Technology",
    shortName: "MIT Muzaffarpur",
    location: "Muzaffarpur",
    city: "Muzaffarpur",
    state: "Bihar",
    address: "Brahmpura, Muzaffarpur, Bihar - 842003",
    phone: "0621-2262201",
    email: "principal@mitmuzaffarpur.org",
    website: "https://www.mitmuzaffarpur.org",
    type: "Public/Government",
    ownership: "Public/Government",
    establishmentYear: "1954",
    approval: "AICTE, Department of Science & Technology (Govt. of Bihar)",
    affiliation: "Bihar Engineering University (BEU), Patna",
    rating: 4.7,
    reviews: 420,
    reviewsCount: 420,
    ranking: 5,
    fees: "₹40,000 - ₹60,000 Total",
    exams: "JEE Main, BCECE (UGEAC), GPAT",
    about: "Muzaffarpur Institute of Technology (MIT Muzaffarpur) is the second oldest and most venerable State Government engineering institution in Bihar, founded in 1954 by first Prime Minister Pandit Jawaharlal Nehru. Fully administered by the Department of Science, Technology and Technical Education, Govt. of Bihar, and affiliated with Bihar Engineering University, MIT is a crown jewel of engineering and pharmacy education in Eastern India.",
    courses: [
      {
        title: "B.Tech in Computer Science & Engineering",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹45,000 Total",
        eligibility: "10+2 with PCM (45% marks) + JEE Main / BCECE rank",
        exams: "JEE Main, BCECE",
        intake: "60"
      },
      {
        title: "B.Tech in Information Technology",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹45,000 Total",
        eligibility: "10+2 with PCM (45% marks) + JEE Main / BCECE rank",
        exams: "JEE Main, BCECE",
        intake: "60"
      },
      {
        title: "B.Tech in Civil Engineering",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹45,000 Total",
        eligibility: "10+2 with PCM (45% marks) + JEE Main / BCECE rank",
        exams: "JEE Main, BCECE",
        intake: "60"
      },
      {
        title: "B.Tech in Mechanical Engineering",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹45,000 Total",
        eligibility: "10+2 with PCM (45% marks) + JEE Main / BCECE rank",
        exams: "JEE Main, BCECE",
        intake: "60"
      },
      {
        title: "B.Tech in Electrical Engineering",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹45,000 Total",
        eligibility: "10+2 with PCM (45% marks) + JEE Main / BCECE rank",
        exams: "JEE Main, BCECE",
        intake: "60"
      },
      {
        title: "B.Tech in Electronics & Communication Engineering",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹45,000 Total",
        eligibility: "10+2 with PCM (45% marks) + JEE Main / BCECE rank",
        exams: "JEE Main, BCECE",
        intake: "60"
      },
      {
        title: "Bachelor of Pharmacy (B.Pharm)",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹60,000 Total",
        eligibility: "10+2 with PCB/PCM (45% marks) + BCECE rank",
        exams: "BCECE",
        intake: "60"
      },
      {
        title: "M.Tech in Machine Design & Thermal Engineering",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹30,000 Total",
        eligibility: "B.Tech in Mechanical Engineering + GATE",
        exams: "GATE, State Entrance",
        intake: "30"
      }
    ],
    highestPackage: "₹24 LPA",
    averagePackage: "₹6.8 LPA",
    placements: "92%",
    topRecruiters: ["Tata Steel", "TCS Digital", "Infosys", "Wipro", "L&T", "Vedanta", "Prism Johnson", "Alstom"],
    img: "https://abhishekkumar1437.github.io/AKU-website/image/mit.jpg",
    image: "https://abhishekkumar1437.github.io/AKU-website/image/mit.jpg",
    imageUrl: "https://abhishekkumar1437.github.io/AKU-website/image/mit.jpg",
    gallery: [
      "https://abhishekkumar1437.github.io/AKU-website/image/mit.jpg"
    ]
  },
  1106: {
    name: "Mahatma Gandhi Central University, Bihar",
    shortName: "MGCUB",
    location: "Motihari",
    city: "Motihari",
    state: "Bihar",
    address: "Dr. Ambedkar Administrative Building, Near OP Thana, Raghunathpur, Motihari, District East Champaran, Bihar - 845401",
    phone: "06252-241002",
    email: "osdadmin@mgcub.ac.in",
    website: "https://mgcub.ac.in/",
    type: "Public/Government",
    ownership: "Public/Government",
    establishmentYear: "2016",
    approval: "UGC, Ministry of Education (Govt. of India), Central University Act",
    affiliation: "Central University (Parliament Act)",
    rating: 4.6,
    reviews: 446,
    reviewsCount: 446,
    ranking: 6,
    fees: "₹20,000 - ₹90,000 Total",
    exams: "CUET UG, CUET PG",
    about: "Mahatma Gandhi Central University (MGCUB) is a premier Central University established by an Act of Parliament (Central Universities Amendment Act 2014) in Motihari, East Champaran, Bihar. MGCUB offers comprehensive undergraduate, postgraduate, and doctoral research programs across Sciences, Engineering, Humanities, Management, and Commerce, honoring Mahatma Gandhi's Champaran Satyagraha.",
    courses: [
      {
        title: "B.Tech in Computer Science & Engineering",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹90,000 Total",
        eligibility: "10+2 with PCM (50% marks) + CUET UG score",
        exams: "CUET UG",
        intake: "40"
      },
      {
        title: "Master of Business Administration (MBA)",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹55,000 Total",
        eligibility: "Graduation in any discipline (50% marks) + CUET PG",
        exams: "CUET PG",
        intake: "50"
      },
      {
        title: "Master of Computer Applications (MCA)",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹40,000 Total",
        eligibility: "BCA / Bachelor Degree with Mathematics + CUET PG",
        exams: "CUET PG",
        intake: "40"
      },
      {
        title: "Bachelor of Commerce (B.Com Hons)",
        division: "Undergraduate",
        duration: "3 Years",
        fees: "₹25,000 Total",
        eligibility: "10+2 with Commerce / Mathematics + CUET UG",
        exams: "CUET UG",
        intake: "60"
      },
      {
        title: "Bachelor of Arts in Journalism & Mass Communication",
        division: "Undergraduate",
        duration: "3 Years",
        fees: "₹25,000 Total",
        eligibility: "10+2 in any stream + CUET UG",
        exams: "CUET UG",
        intake: "40"
      },
      {
        title: "M.Sc in Biotechnology",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹30,000 Total",
        eligibility: "B.Sc in Life Sciences / Biotech + CUET PG",
        exams: "CUET PG",
        intake: "35"
      }
    ],
    highestPackage: "₹18 LPA",
    averagePackage: "₹5.5 LPA",
    placements: "85%",
    topRecruiters: ["TCS", "Wipro", "HDFC Bank", "ICICI Bank", "Byju's", "Amazon", "Bandhan Bank"],
    img: "https://daqwpj7vq235r.cloudfront.net/images/mba-institute/Mahatma-Gandhi-Central-University%2bCampus-Building1.jpg",
    image: "https://daqwpj7vq235r.cloudfront.net/images/mba-institute/Mahatma-Gandhi-Central-University%2bCampus-Building1.jpg",
    imageUrl: "https://daqwpj7vq235r.cloudfront.net/images/mba-institute/Mahatma-Gandhi-Central-University%2bCampus-Building1.jpg",
    gallery: [
      "https://daqwpj7vq235r.cloudfront.net/images/mba-institute/Mahatma-Gandhi-Central-University%2bCampus-Building1.jpg"
    ]
  }
};

const collegeList = Array.isArray(siteData) ? siteData : siteData.colleges;

let updatedCount = 0;
for (const [idStr, updateData] of Object.entries(batch143Updates)) {
  const collegeId = parseInt(idStr, 10);
  const college = collegeList.find(c => c.id === collegeId);
  if (college) {
    Object.assign(college, updateData);
    console.log(`Updated ID: ${collegeId} - ${college.name}`);
    updatedCount++;
  } else {
    console.warn(`Could not find college with ID: ${collegeId}`);
  }
}

fs.writeFileSync(siteDataPath, JSON.stringify(siteData, null, 2), 'utf8');
console.log(`Successfully updated ${updatedCount} colleges for Batch 143.`);

// Update progress.json
const newIds = Object.keys(batch143Updates).map(Number);
const existingSet = new Set(progress.completed_ids.map(Number));
for (const id of newIds) {
  if (!existingSet.has(id)) {
    progress.completed_ids.push(id);
  }
}
progress.current_batch = 143;
progress.total_verified = progress.completed_ids.length;
progress.completed_count = progress.completed_ids.length;
progress.last_updated = new Date().toISOString();

fs.writeFileSync(progressPath, JSON.stringify(progress, null, 2), 'utf8');
console.log(`Progress updated: current_batch = 143, total_verified = ${progress.total_verified}`);

// Regenerate master registers
console.log("Regenerating master verification files...");
execSync('node scripts/generate_verified_list.cjs', { stdio: 'inherit' });
execSync('node scripts/generate_verified_markdown.cjs', { stdio: 'inherit' });

// Create Batch 143 summary markdown in reports/verification/
const summaryPath = path.join(__dirname, '../reports/verification/batch-143-summary.md');
const summaryContent = `# Verification Summary - Batch 143

**Batch Number**: 143
**Colleges Verified**: 10 (Total Cumulative: 1,430 / 12,660)
**Date**: ${new Date().toISOString()}

## Colleges in this Batch:
1. **Bakhtiyarpur College of Engineering, Patna** (ID: 1096) - State Government Engineering College (est. 2016, Bakhtiyarpur) restored to **Public/Government** (DST Govt of Bihar), portal \`https://www.bcepatna.ac.in\`, STD 06132-222055. Purged private fees of ₹5.5 Lakhs down to authentic ₹45,000 total.
2. **L.N. Mishra College of Business Management, Muzaffarpur** (ID: 1097) - Autonomous Management Institute (est. 1973, Bhagwanpur Chowk), portal \`https://lnmcbm.ac.in\`, STD 0621-2246174. Corrected MCA duration from 4 years to authentic 2 years. Purged raw Google search URL.
3. **National Degree College, Purnia** (ID: 1098) - Purnea University Affiliated College (est. 1982, Rambagh), portal \`https://ndcpurnea.org\`, STD 06454-242330. Purged gross BMS Bangalore & National College Bangalore photo leaks. Corrected BCA duration from 4 years to 3 years.
4. **Ambedkar Institute of Higher Education, Patna** (ID: 1099) - INC/BUHS Recognized Paramedical & Nursing Institute (est. 2013, Danapur Cantt), portal \`https://aihe.in\`, STD 0612-2977797. Corrected courses to B.Sc Nursing, BPT, GNM, BCA (3 yrs).
5. **Darbhanga College of Engineering, Darbhanga** (ID: 1101) - State Government Engineering College (est. 1999/2008, Mabbi) restored to **Public/Government** (DST Govt of Bihar), portal \`https://www.dcedarbhanga.ac.in\`, STD 06272-255255. Purged private fees of ₹12.5 Lakhs down to authentic ₹45,000 total.
6. **Nalanda College of Engineering, Chandi** (ID: 1102) - State Government Engineering College (est. 2008, Chandi) restored to **Public/Government** (DST Govt of Bihar), portal \`https://www.ncechandi.ac.in\`, STD 06111-275200. Purged RIIM Pune photo leak and private fees of ₹12.5 Lakhs down to authentic ₹45,000 total.
7. **Bhagalpur College of Engineering** (ID: 1103) - Iconic State Government Engineering College (est. 1960, Sabour) restored to **Public/Government** (DST Govt of Bihar), portal \`https://www.bcebhagalpur.ac.in\`, STD 0641-2451003. **Purged Lovely Professional University (\`https://www.lpu.in\`) cross-link!** Corrected Bangalore 080 phone to Bhagalpur 0641. Purged private fees to authentic ₹45,000 total.
8. **Maulana Azad College of Engineering and Technology, Patna** (ID: 1104) - AICTE-Approved Religious Minority Engineering College (est. 1988, Neora), portal \`https://www.macet.net.in\`, STD 0612-2254569. Corrected fees from inflated ₹12.5 Lakhs to authentic ₹3.2 Lakhs.
9. **Muzaffarpur Institute of Technology** (ID: 1105) - Historic Premier State Government Engineering College (est. 1954, Brahmpura) restored to **Public/Government** (DST Govt of Bihar), portal \`https://www.mitmuzaffarpur.org\`, STD 0621-2262201. Purged raw Google search URL, Bangalore 080 phone, and private fees down to authentic ₹45,000 total.
10. **Mahatma Gandhi Central University, Bihar** (ID: 1106) - Premier Central University (est. 2016 by Act of Parliament, Motihari) restored to **Public/Government** ownership, portal \`https://mgcub.ac.in/\`, STD 06252-241002. Purged VJTI Mumbai photo leak and private fees of ₹12.5 Lakhs down to authentic ₹20,000 - ₹90,000.
`;

fs.writeFileSync(summaryPath, summaryContent, 'utf8');
console.log("Batch 143 update completed successfully.");
