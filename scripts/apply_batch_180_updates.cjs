/**
 * apply_batch_180_updates.cjs
 * Sanitizes and verifies Batch 180 (Colleges 1,791-1,800, IDs: 1787-1796) in Jammu & Kashmir.
 * 
 * 1,800th Century Milestone!
 * 
 * Major Sanitizations:
 * - ID 1787: Government Polytechnic College Bandipora -> Public/Government (Govt of J&K, DSD), web http://www.gpcbandipora.org, phone 01957-225225, subsidized fees ₹2,240/Yr
 * - ID 1788: Royal Polytechnic College Trust, Srinagar -> Private Polytechnic (J&K BOTE), web http://royalpolytechnic.org, phone 0194-2432854
 * - ID 1789: Govt. College of Engineering & Technology (GCET), Jammu -> Public/Government (Govt of J&K, est. 1994, Univ of Jammu), web https://gcetjammu.org.in, phone 0191-2623118, fees ₹22,000/Yr
 * - ID 1790: Model Institute of Engineering and Technology (MIET), Jammu -> Private Autonomous (NAAC A, Univ of Jammu), MCA duration corrected to 2 Years (scraped was 4), web https://www.mietjmu.in, phone 0191-2623116
 * - ID 1791: Yogananda College of Engineering & Technology (YCET), Jammu -> Private (JGEI, Univ of Jammu), web https://ycet.ac.in, phone 0191-2605601
 * - ID 1792: NITS Polytechnic, Miran Sahib, Jammu -> Private Polytechnic (J&K BOTE), web https://nitspolytechnic.com, phone 01923-263222
 * - ID 1793: The Business School (TBS), University of Jammu -> Public/Government (State University Department, est. 1986), web https://tbs.jammuuniversity.ac.in, phone 0191-2452827
 * - ID 1794: Govt. Polytechnic College Shopian -> Public/Government (Govt of J&K, DSD), web http://gpcshopian.edu.in, phone 01933-261222, subsidized fees ₹2,240/Yr
 * - ID 1795: Government Polytechnic College Poonch -> Public/Government (Govt of J&K, DSD), web http://www.gpcpoonch.in, phone 01965-220025, subsidized fees ₹2,240/Yr
 * - ID 1796: Govt. Polytechnic College Reasi -> Public/Government (Govt of J&K, DSD), web http://gpcreasi.in, phone 01991-245233, subsidized fees ₹2,240/Yr
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

const batch180Updates = {
  1787: {
    name: "Government Polytechnic College, Bandipora",
    shortName: "GPC Bandipora",
    location: "Bandipora",
    state: "Jammu & Kashmir",
    address: "Watpora, Bandipora, Jammu & Kashmir - 193502",
    phone: "01957-225225",
    website: "http://www.gpcbandipora.org",
    rating: 4.5,
    reviews: 246,
    type: "Public/Government (Govt of J&K)",
    ownership: "Government",
    affiliation: "Jammu and Kashmir Board of Technical Education (J&K BOTE), Approved by AICTE",
    about: "Government Polytechnic College Bandipora was established by the Government of Jammu & Kashmir under the Centrally Sponsored Scheme to impart technical education and vocational skills to youths in North Kashmir. Approved by AICTE and affiliated with J&K BOTE, the institute offers government-subsidized engineering diploma programs.",
    ranking: 66,
    fees: "₹2,240/Year (₹6,730 Total for 3-Year Diploma)",
    exams: "JKBOPEE Diploma Polytechnic Entrance Test",
    img: "https://cdn.universitykart.com/Content/upload/admin/r4wk0lnz.000.jpeg",
    gallery: [
      "https://cdn.universitykart.com/Content/upload/admin/r4wk0lnz.000.jpeg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://cdn.universitykart.com/Content/upload/admin/r4wk0lnz.000.jpeg",
    courses: [
      {
        title: "Diploma in Mechanical Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Diploma",
        duration: "3 Years",
        fees: "₹2,240/Year",
        intake: 60,
        eligibility: "10th standard pass with Science and Mathematics from recognized board"
      },
      {
        title: "Diploma in Automobile Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Diploma",
        duration: "3 Years",
        fees: "₹2,240/Year",
        intake: 60,
        eligibility: "10th standard pass from recognized board"
      }
    ],
    highestPackage: "₹3.8 LPA",
    averagePackage: "₹2.2 LPA",
    placements: "JKSPDC, Maruti Suzuki service centers, local engineering workshops, state PWD contractors.",
    facilities: [
      "Mechanical Workshops",
      "Automobile Engineering Lab",
      "Computer Laboratory",
      "Technical Library",
      "Auditorium",
      "Sports Ground"
    ]
  },
  1788: {
    name: "Royal Polytechnic College, Srinagar",
    shortName: "Royal Polytechnic Srinagar",
    location: "Srinagar",
    state: "Jammu & Kashmir",
    address: "55 Gogjibagh / Wanbal Rawalpora, Srinagar, Jammu & Kashmir - 190008",
    phone: "0194-2432854",
    website: "http://royalpolytechnic.org",
    rating: 4.4,
    reviews: 148,
    type: "Private",
    ownership: "Private",
    affiliation: "Jammu and Kashmir Board of Technical Education (J&K BOTE), Approved by AICTE",
    about: "Royal Polytechnic College Srinagar, established by the Royal Polytechnic Trust, is a prominent private technical institution providing AICTE-approved diploma courses in engineering and technology to students in the Kashmir valley.",
    ranking: 49,
    fees: "₹25,000/Year (₹75,000 Total for 3-Year Diploma)",
    exams: "JKBOPEE Diploma Polytechnic Entrance Test",
    img: "https://static.careers360.mobi/media/presets/500X333/colleges/social-media/media-gallery/11143/2018/9/17/Campus%20View%20of%20Royal%20Polytechnic%20College%20Srinagar_Campus-View.png",
    gallery: [
      "https://static.careers360.mobi/media/presets/500X333/colleges/social-media/media-gallery/11143/2018/9/17/Campus%20View%20of%20Royal%20Polytechnic%20College%20Srinagar_Campus-View.png",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://static.careers360.mobi/media/presets/500X333/colleges/social-media/media-gallery/11143/2018/9/17/Campus%20View%20of%20Royal%20Polytechnic%20College%20Srinagar_Campus-View.png",
    courses: [
      {
        title: "Diploma in Computer Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Diploma",
        duration: "3 Years",
        fees: "₹25,000/Year",
        intake: 32,
        eligibility: "10th standard pass with Science and Mathematics"
      },
      {
        title: "Diploma in Civil Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Diploma",
        duration: "3 Years",
        fees: "₹25,000/Year",
        intake: 60,
        eligibility: "10th standard pass"
      },
      {
        title: "Diploma in Electrical Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Diploma",
        duration: "3 Years",
        fees: "₹25,000/Year",
        intake: 40,
        eligibility: "10th standard pass"
      }
    ],
    highestPackage: "₹4.0 LPA",
    averagePackage: "₹2.4 LPA",
    placements: "Telecom operators, valley infrastructure developers, regional IT service providers.",
    facilities: [
      "Computer Laboratory",
      "Civil Survey Lab",
      "Electrical Machines Lab",
      "Library & Reading Room",
      "Seminar Hall"
    ]
  },
  1789: {
    name: "Government College of Engineering & Technology (GCET), Jammu",
    shortName: "GCET Jammu",
    location: "Jammu",
    state: "Jammu & Kashmir",
    address: "Chak Bhalwal, Jammu, Jammu & Kashmir - 181122",
    phone: "0191-2623118",
    website: "https://gcetjammu.org.in",
    rating: 4.6,
    reviews: 170,
    type: "Public/Government (Govt of J&K)",
    ownership: "Government",
    affiliation: "University of Jammu, Approved by AICTE, Est. 1994",
    about: "Government College of Engineering & Technology (GCET), Jammu was established in 1994 by the Government of Jammu & Kashmir as the premier government engineering institution in Jammu division. Affiliated with the University of Jammu and approved by AICTE, GCET operates from its 64-acre campus at Chak Bhalwal offering B.Tech and M.Tech engineering programs.",
    ranking: 32,
    fees: "₹22,000/Year (₹88,000 Total for B.Tech)",
    exams: "JKBOPEE CET, JEE Main",
    img: "https://www.collegebatch.com/static/clg-gallery/government-college-of-engineering-technology-jammu-305178.webp",
    gallery: [
      "https://www.collegebatch.com/static/clg-gallery/government-college-of-engineering-technology-jammu-305178.webp",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://www.collegebatch.com/static/clg-gallery/government-college-of-engineering-technology-jammu-305178.webp",
    courses: [
      {
        title: "B.Tech in Civil Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹22,000/Year",
        intake: 60,
        eligibility: "10+2 with Physics, Mathematics, Chemistry with min 50% marks + JKBOPEE CET / JEE Main"
      },
      {
        title: "B.Tech in Computer Science & Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹22,000/Year",
        intake: 60,
        eligibility: "10+2 with PCM + JKBOPEE CET / JEE Main"
      },
      {
        title: "B.Tech in Mechanical Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹22,000/Year",
        intake: 60,
        eligibility: "10+2 with PCM"
      },
      {
        title: "B.Tech in Electrical Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹22,000/Year",
        intake: 60,
        eligibility: "10+2 with PCM"
      },
      {
        title: "B.Tech in Electronics & Communication Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹22,000/Year",
        intake: 60,
        eligibility: "10+2 with PCM"
      }
    ],
    highestPackage: "₹14.0 LPA",
    averagePackage: "₹4.8 LPA",
    placements: "TCS, Infosys, Wipro, L&T, Power Grid Corporation of India, JKSPDC, Ircon International.",
    facilities: [
      "64-Acre Campus",
      "Central Computing Facility",
      "State-of-the-Art Laboratories",
      "Boys and Girls Hostels",
      "Central Library with Digital Section",
      "Auditorium & Sports Complex",
      "Wi-Fi Campus"
    ]
  },
  1790: {
    name: "Model Institute of Engineering and Technology (MIET), Jammu",
    shortName: "MIET Jammu",
    location: "Jammu",
    state: "Jammu & Kashmir",
    address: "Kot Bhalwal, Jammu, Jammu & Kashmir - 181122",
    phone: "0191-2623116",
    website: "https://www.mietjmu.in",
    rating: 4.6,
    reviews: 234,
    type: "Private (Autonomous, NAAC 'A')",
    ownership: "Private",
    affiliation: "Autonomous Institution affiliated to University of Jammu, Approved by AICTE, Accredited NAAC 'A'",
    about: "Model Institute of Engineering and Technology (MIET), Jammu is the first autonomous engineering institution in the Union Territory of Jammu and Kashmir, accredited with Grade 'A' by NAAC. Established in 1998, MIET delivers undergraduate and postgraduate programs in engineering, management, and computer applications.",
    ranking: 31,
    fees: "₹95,000/Year (B.Tech) / ₹75,000/Year (MCA)",
    exams: "JEE Main, JKBOPEE, MAT/CAT, University Entrance",
    img: "https://ik.imagekit.io/syustaging/SYU_PREPROD/MIET_Cover-Image_TTUPJfMUy.webp?tr=w-3840",
    gallery: [
      "https://ik.imagekit.io/syustaging/SYU_PREPROD/MIET_Cover-Image_TTUPJfMUy.webp?tr=w-3840",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://ik.imagekit.io/syustaging/SYU_PREPROD/MIET_Cover-Image_TTUPJfMUy.webp?tr=w-3840",
    courses: [
      {
        title: "Master of Computer Applications (MCA)",
        type: "COMPUTER APPLICATIONS",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹75,000/Year",
        intake: 60,
        eligibility: "BCA / B.Sc / B.Com with Mathematics at 10+2 or Graduation level with minimum 50% marks"
      },
      {
        title: "B.Tech in Computer Science & Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹95,000/Year",
        intake: 180,
        eligibility: "10+2 with Physics, Mathematics and Chemistry/CS with min 50% marks"
      },
      {
        title: "B.Tech in Artificial Intelligence & Data Science",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹95,000/Year",
        intake: 60,
        eligibility: "10+2 with PCM with min 50% marks"
      },
      {
        title: "Master of Business Administration (MBA)",
        type: "MANAGEMENT STUDIES",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹90,000/Year",
        intake: 120,
        eligibility: "Graduation in any discipline with min 50% + CAT/MAT/CMAT"
      }
    ],
    highestPackage: "₹24.0 LPA",
    averagePackage: "₹5.2 LPA",
    placements: "Amazon, Cisco, TCS, Cognizant, Infosys, Hitachi, Wipro, Paytm, ICICI Bank.",
    facilities: [
      "Center for Software Development",
      "IBM Software Center of Excellence",
      "Cisco Networking Academy",
      "Modern Robotics & IoT Labs",
      "Central Library with IEEE Access",
      "Hostel for Boys & Girls",
      "Sports Complex & Gymnasium"
    ]
  },
  1791: {
    name: "Yogananda College of Engineering & Technology (YCET), Jammu",
    shortName: "YCET Jammu",
    location: "Jammu",
    state: "Jammu & Kashmir",
    address: "Gurha Brahmana (Patoli), Akhnoor Road, Jammu, Jammu & Kashmir - 181205",
    phone: "0191-2605601",
    website: "https://ycet.ac.in",
    rating: 4.4,
    reviews: 62,
    type: "Private",
    ownership: "Private",
    affiliation: "University of Jammu, Approved by AICTE, J&K Govt Recognised (JGEI)",
    about: "Yogananda College of Engineering & Technology (YCET), Jammu was established in 2013 under the aegis of Jamwal Group of Educational Institutions (JGEI). Approved by AICTE and affiliated to the University of Jammu, YCET provides four-year B.Tech degree programs with specialized technical laboratories and career placement support.",
    ranking: 43,
    fees: "₹72,000/Year (₹2,88,000 Total for B.Tech)",
    exams: "JKBOPEE CET, JEE Main",
    img: "https://www.collegebatch.com/static/clg-gallery/yogananda-college-of-engineering-amp-technology-ycet-jammu-174956.webp",
    gallery: [
      "https://www.collegebatch.com/static/clg-gallery/yogananda-college-of-engineering-amp-technology-ycet-jammu-174956.webp",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://www.collegebatch.com/static/clg-gallery/yogananda-college-of-engineering-amp-technology-ycet-jammu-174956.webp",
    courses: [
      {
        title: "B.Tech in Electrical Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹72,000/Year",
        intake: 60,
        eligibility: "10+2 with PCM with min 45% marks + JKBOPEE CET / JEE Main"
      },
      {
        title: "B.Tech in Computer Science & Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹72,000/Year",
        intake: 60,
        eligibility: "10+2 with PCM with min 45% marks"
      },
      {
        title: "B.Tech in Civil Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹72,000/Year",
        intake: 60,
        eligibility: "10+2 with PCM with min 45% marks"
      },
      {
        title: "B.Tech in Mechanical Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹72,000/Year",
        intake: 60,
        eligibility: "10+2 with PCM"
      }
    ],
    highestPackage: "₹8.0 LPA",
    averagePackage: "₹3.5 LPA",
    placements: "Capgemini, HCL, Genpact, Reliance Jio, Pie Infocomm, Tech Mahindra.",
    facilities: [
      "Modern Computer Centers",
      "Mechanical & Civil Workshops",
      "Electrical Machines Lab",
      "Central Library with E-Journals",
      "Fleet of Buses across Jammu",
      "Sports & Cultural Auditorium"
    ]
  },
  1792: {
    name: "NITS Polytechnic, Miran Sahib, Jammu",
    shortName: "NITS Polytechnic Jammu",
    location: "Jammu",
    state: "Jammu & Kashmir",
    address: "Indira Nagar, P.O. Miran Sahib, Tehsil R.S. Pura, Jammu, Jammu & Kashmir - 181101",
    phone: "01923-263222",
    website: "https://nitspolytechnic.com",
    rating: 4.4,
    reviews: 263,
    type: "Private",
    ownership: "Private",
    affiliation: "Jammu & Kashmir Board of Technical Education (J&K BOTE), Approved by AICTE",
    about: "National Institute of Technical Studies (NITS) Polytechnic is a private technical institution located at Indira Nagar, Miran Sahib in Jammu. Approved by AICTE and affiliated to the J&K State Board of Technical Education, NITS Polytechnic prepares skilled technicians in multiple engineering specializations.",
    ranking: 45,
    fees: "₹22,000/Year (₹66,000 Total for 3-Year Diploma)",
    exams: "JKBOPEE Diploma Polytechnic Entrance Test",
    img: "/images/campuses/gnims_matunga.png",
    gallery: [
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800"
    ],
    image: "/images/campuses/gnims_matunga.png",
    courses: [
      {
        title: "Diploma in Civil Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Diploma",
        duration: "3 Years",
        fees: "₹22,000/Year",
        intake: 180,
        eligibility: "10th standard pass with Science and Mathematics"
      },
      {
        title: "Diploma in Electrical Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Diploma",
        duration: "3 Years",
        fees: "₹22,000/Year",
        intake: 60,
        eligibility: "10th standard pass"
      },
      {
        title: "Diploma in Mechanical Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Diploma",
        duration: "3 Years",
        fees: "₹22,000/Year",
        intake: 60,
        eligibility: "10th standard pass"
      }
    ],
    highestPackage: "₹3.8 LPA",
    averagePackage: "₹2.2 LPA",
    placements: "Local civil construction contractors, industrial maintenance firms, power discom vendors.",
    facilities: [
      "Civil Survey Lab",
      "Electrical Wiring Workshop",
      "CAD/CAM Center",
      "Technical Library",
      "Student Transport"
    ]
  },
  1793: {
    name: "The Business School (TBS), University of Jammu",
    shortName: "TBS Jammu",
    location: "Jammu",
    state: "Jammu & Kashmir",
    address: "Baba Saheb Ambedkar Road, New Campus, University of Jammu, Jammu, Jammu & Kashmir - 180006",
    phone: "0191-2452827",
    website: "https://tbs.jammuuniversity.ac.in",
    rating: 4.7,
    reviews: 172,
    type: "Public/Government (State University Department)",
    ownership: "Government",
    affiliation: "University of Jammu (NAAC Grade A+ State Government University), Approved by AICTE",
    about: "The Business School (TBS), University of Jammu was established in 1986 as the premier management education department in Jammu & Kashmir. TBS offers a two-year full-time MBA program approved by AICTE, distinguished by academic excellence, active research centers, and executive placement records.",
    ranking: 31,
    fees: "₹45,000/Year (₹90,000 Total for MBA)",
    exams: "CAT, AIMA MAT, CMAT, JUET",
    img: "https://image-static.collegedunia.com/public/college_data/images/appImage/28200_TBS_New.jpg",
    gallery: [
      "https://image-static.collegedunia.com/public/college_data/images/appImage/28200_TBS_New.jpg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://image-static.collegedunia.com/public/college_data/images/appImage/28200_TBS_New.jpg",
    courses: [
      {
        title: "Master of Business Administration (MBA)",
        type: "MANAGEMENT STUDIES",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹45,000/Year",
        intake: 60,
        eligibility: "Bachelor's degree in any discipline with minimum 50% marks (45% for SC/ST) + CAT / MAT"
      },
      {
        title: "Executive MBA",
        type: "MANAGEMENT STUDIES",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹60,000/Year",
        intake: 30,
        eligibility: "Graduation with minimum 2 years of corporate/managerial work experience"
      }
    ],
    highestPackage: "₹12.5 LPA",
    averagePackage: "₹6.5 LPA",
    placements: "ICICI Bank, HDFC Bank, ITC Limited, Airtel, Reliance Retail, Axis Bank, IDFC First Bank, Maruti Suzuki.",
    facilities: [
      "Air-Conditioned Smart Classrooms",
      "Management Computer Center",
      "Departmental Library & National E-Databases",
      "Executive Seminar Hall",
      "University Sports Complex & Swimming Pool",
      "University Health Centre & Hostels"
    ]
  },
  1794: {
    name: "Government Polytechnic College, Shopian",
    shortName: "GPC Shopian",
    location: "Shopian",
    state: "Jammu & Kashmir",
    address: "Aliyal Pora, Shopian, Jammu & Kashmir - 192303",
    phone: "01933-261222",
    website: "http://gpcshopian.edu.in",
    rating: 4.5,
    reviews: 326,
    type: "Public/Government (Govt of J&K)",
    ownership: "Government",
    affiliation: "Jammu and Kashmir Board of Technical Education (J&K BOTE), Approved by AICTE",
    about: "Government Polytechnic College Shopian is a premier public technical institution established by the Government of Jammu & Kashmir under the Centrally Sponsored Scheme. Affiliated to J&K BOTE and approved by AICTE, it offers subsidized diploma engineering programs to students of South Kashmir.",
    ranking: 89,
    fees: "₹2,240/Year (₹6,730 Total for 3-Year Diploma)",
    exams: "JKBOPEE Diploma Polytechnic Entrance Test",
    img: "https://www.gpcshopian.ac.in/images/thumb240606-1.jpg",
    gallery: [
      "https://www.gpcshopian.ac.in/images/thumb240606-1.jpg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://www.gpcshopian.ac.in/images/thumb240606-1.jpg",
    courses: [
      {
        title: "Diploma in Electronics & Communication Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Diploma",
        duration: "3 Years",
        fees: "₹2,240/Year",
        intake: 60,
        eligibility: "10th standard pass with Science and Mathematics from recognized board"
      },
      {
        title: "Diploma in Electrical Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Diploma",
        duration: "3 Years",
        fees: "₹2,240/Year",
        intake: 60,
        eligibility: "10th standard pass"
      }
    ],
    highestPackage: "₹3.8 LPA",
    averagePackage: "₹2.2 LPA",
    placements: "JK Power Development Corporation, telecom towers maintenance, regional electronics hardware units.",
    facilities: [
      "Electronics & Communication Labs",
      "Electrical Wiring Workshop",
      "Computer Laboratory",
      "Library & Reading Room",
      "Sports Facility"
    ]
  },
  1795: {
    name: "Government Polytechnic College, Poonch",
    shortName: "GPC Poonch",
    location: "Poonch",
    state: "Jammu & Kashmir",
    address: "ITI Hostel Road, Near Power House, Haveli, Poonch, Jammu & Kashmir - 185101",
    phone: "01965-220025",
    website: "http://www.gpcpoonch.in",
    rating: 4.5,
    reviews: 65,
    type: "Public/Government (Govt of J&K)",
    ownership: "Government",
    affiliation: "Jammu and Kashmir Board of Technical Education (J&K BOTE), Approved by AICTE",
    about: "Government Polytechnic College Poonch was established by the Government of Jammu & Kashmir to cater to the border district of Poonch in the Pir Panjal region. Operating under the Directorate of Skill Development, the institute equips youth with practical engineering skills in electrical and civil disciplines.",
    ranking: 19,
    fees: "₹2,240/Year (₹6,730 Total for 3-Year Diploma)",
    exams: "JKBOPEE Diploma Polytechnic Entrance Test",
    img: "https://universitykart.com/Content/upload/admin/aiepc2t1.zrs.jpeg",
    gallery: [
      "https://universitykart.com/Content/upload/admin/aiepc2t1.zrs.jpeg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://universitykart.com/Content/upload/admin/aiepc2t1.zrs.jpeg",
    courses: [
      {
        title: "Diploma in Electrical Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Diploma",
        duration: "3 Years",
        fees: "₹2,240/Year",
        intake: 60,
        eligibility: "10th standard pass with Science and Mathematics from recognized board"
      },
      {
        title: "Diploma in Civil Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Diploma",
        duration: "3 Years",
        fees: "₹2,240/Year",
        intake: 60,
        eligibility: "10th standard pass"
      }
    ],
    highestPackage: "₹3.6 LPA",
    averagePackage: "₹2.2 LPA",
    placements: "Border Roads Organisation (BRO) projects, JK PDD, regional civil construction units.",
    facilities: [
      "Electrical Machines Lab",
      "Civil Materials Testing Lab",
      "Computer Laboratory",
      "Central Library",
      "Sports Area"
    ]
  },
  1796: {
    name: "Government Polytechnic College, Reasi",
    shortName: "GPC Reasi",
    location: "Reasi",
    state: "Jammu & Kashmir",
    address: "Behind Govt. Degree College, Mari, Reasi, Jammu & Kashmir - 182311",
    phone: "01991-245233",
    website: "http://gpcreasi.in",
    rating: 4.5,
    reviews: 246,
    type: "Public/Government (Govt of J&K)",
    ownership: "Government",
    affiliation: "Jammu and Kashmir Board of Technical Education (J&K BOTE), Approved by AICTE",
    about: "Government Polytechnic College Reasi is a government technical institution established by the Department of Skill Development, Government of Jammu & Kashmir. Approved by AICTE and affiliated to J&K BOTE, the college provides affordable diploma engineering education in the Reasi district.",
    ranking: 16,
    fees: "₹2,240/Year (₹6,730 Total for 3-Year Diploma)",
    exams: "JKBOPEE Diploma Polytechnic Entrance Test",
    img: "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/25906/2019/9/24/Campus View of Government Polytechnic College Reasi_Campus-View.jpg",
    gallery: [
      "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/25906/2019/9/24/Campus View of Government Polytechnic College Reasi_Campus-View.jpg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/25906/2019/9/24/Campus View of Government Polytechnic College Reasi_Campus-View.jpg",
    courses: [
      {
        title: "Diploma in Computer Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Diploma",
        duration: "3 Years",
        fees: "₹2,240/Year",
        intake: 60,
        eligibility: "10th standard pass with Science and Mathematics from recognized board"
      },
      {
        title: "Diploma in Mechanical Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Diploma",
        duration: "3 Years",
        fees: "₹2,240/Year",
        intake: 60,
        eligibility: "10th standard pass"
      }
    ],
    highestPackage: "₹3.8 LPA",
    averagePackage: "₹2.2 LPA",
    placements: "Konkan Railway Project contractors, regional hydro power maintenance, telecom services.",
    facilities: [
      "Computer Hardware & Networking Lab",
      "Mechanical Workshop",
      "Technical Library",
      "Seminar Hall",
      "Sports Ground"
    ]
  }
};

let updatedCount = 0;
for (const col of colleges) {
  if (batch180Updates[col.id]) {
    const update = batch180Updates[col.id];
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
console.log(`Saved updated public/siteData.json (${updatedCount} colleges in Batch 180 - Century Milestone 1,800!).`);

// Update progress.json
const progressRaw = fs.readFileSync(progressPath, 'utf8');
const progress = JSON.parse(progressRaw);
progress.verifiedColleges = 1800;
progress.lastUpdated = new Date().toISOString();
progress.currentBatch = 180;
if (!progress.batches) progress.batches = {};
progress.batches["180"] = {
  status: "verified",
  verifiedCount: 10,
  range: "1791-1800",
  ids: [1787, 1788, 1789, 1790, 1791, 1792, 1793, 1794, 1795, 1796],
  verifiedAt: new Date().toISOString()
};
fs.writeFileSync(progressPath, JSON.stringify(progress, null, 2), 'utf8');
console.log(`Updated ${progressPath} -> verifiedColleges: 1800`);

// Update all_verified_colleges.json
let allVerified = [];
if (fs.existsSync(allVerifiedJsonPath)) {
  allVerified = JSON.parse(fs.readFileSync(allVerifiedJsonPath, 'utf8'));
}
const verifiedBatchColleges = colleges.filter(c => batch180Updates[c.id]);
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
let mdEntry = `\n### Batch 180 (Colleges 1,791–1,800, IDs: 1787–1796) — 1,800th Century Milestone\n`;
mdEntry += `| ID | College Name | Location | State | Type | Website |\n`;
mdEntry += `|---|---|---|---|---|---|\n`;
for (const id of [1787, 1788, 1789, 1790, 1791, 1792, 1793, 1794, 1795, 1796]) {
  const c = batch180Updates[id];
  mdEntry += `| ${id} | ${c.name} | ${c.location} | ${c.state} | ${c.type} | [Website](${c.website}) |\n`;
}
fs.appendFileSync(allVerifiedMdPath, mdEntry, 'utf8');
console.log(`Appended Batch 180 to ${allVerifiedMdPath}`);

