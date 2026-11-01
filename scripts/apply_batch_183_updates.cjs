/**
 * apply_batch_183_updates.cjs
 * Sanitizes and verifies Batch 183 (Colleges 1,821-1,830, IDs: 1817-1826) in Chhattisgarh.
 * 
 * Major Sanitizations:
 * - ID 1817: Atal Bihari Vajpayee Vishwavidyalaya (ABVV), Bilaspur -> Public/Government (State University, est. 2012), BCA duration corrected to 3 Years, web https://www.bilaspuruniversity.ac.in, phone 07752-220031
 * - ID 1818: University Teaching Department (UTD), CSVTU Bhilai -> Public/Government (State University Dept), M.Tech duration corrected to 2 Years, web https://csvtu.ac.in, phone 0788-2200062
 * - ID 1819: Dr. Shyama Prasad Mukherjee International Institute of Information Technology (IIIT-NR), Raipur -> Public/Government (State Autonomous Institute / PPP with Govt of CG and NTPC), web https://www.iiitnr.ac.in, phone 0771-2474040
 * - ID 1820: School of Engineering, OP Jindal University, Raigarh -> Private State University, web https://www.opju.ac.in, phone 07767-249000
 * - ID 1821: Government Polytechnic Balod -> Public/Government (Govt of CG, CSVTU), web http://polybalod.ac.in, phone 07749-222010, subsidized fees ₹5,150/Yr
 * - ID 1822: Government Polytechnic Berla -> Public/Government (Govt of CG, CSVTU), web http://gpberla.ac.in, phone 07825-263300, subsidized fees ₹5,150/Yr
 * - ID 1823: Kalinga Institute of Technology (Kalinga University), Raipur -> Private State University, PURGED leaked KIIT Odisha URL, web https://kalingauniversity.ac.in, phone 0771-3051010
 * - ID 1824: MSME Technology Centre Durg -> Public/Government (Ministry of MSME, Govt of India), web https://msmedurg.org, phone 0788-2617111
 * - ID 1825: Tagore College of Management, Bilaspur -> Private (ABVV Bilaspur), web https://tcmbsp.in, phone +91-6232060055
 * - ID 1826: Prism School of Business & Entrepreneurship, Bhilai -> Private (AICTE PGDM), web http://www.prismschool.ac.in, phone +91-9425235203
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

const batch183Updates = {
  1817: {
    name: "Atal Bihari Vajpayee Vishwavidyalaya (ABVV), Bilaspur",
    shortName: "ABVV Bilaspur",
    location: "Bilaspur",
    state: "Chhattisgarh",
    address: "Old High Court Building / Sendri Campus, Bilaspur, Chhattisgarh - 495009",
    phone: "07752-220031",
    website: "https://www.bilaspuruniversity.ac.in",
    rating: 4.6,
    reviews: 1157,
    type: "Public/Government (State University)",
    ownership: "Government",
    affiliation: "State Public University established by Chhattisgarh Act No. 07 of 2012, UGC recognized, NAAC Accredited",
    about: "Atal Bihari Vajpayee Vishwavidyalaya (formerly Bilaspur University) is a state public university established by the Government of Chhattisgarh in 2012. Headquartered in Bilaspur, the university exercises jurisdiction over affiliated colleges across Bilaspur division and runs university teaching departments in computer science, commerce, hotel management, and microbiology.",
    ranking: 46,
    fees: "₹18,000/Year (BCA) / ₹30,000/Year (MCA)",
    exams: "University Entrance Examination / Merit",
    img: "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/950/2019/7/16/Campus of Atal Bihari Vajpayee Vishwavidyalaya Bilaspur_Campus-View.jpg",
    gallery: [
      "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/950/2019/7/16/Campus of Atal Bihari Vajpayee Vishwavidyalaya Bilaspur_Campus-View.jpg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/950/2019/7/16/Campus of Atal Bihari Vajpayee Vishwavidyalaya Bilaspur_Campus-View.jpg",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        type: "COMPUTER APPLICATIONS",
        division: "Undergraduate",
        duration: "3 Years",
        fees: "₹18,000/Year",
        intake: 40,
        eligibility: "10+2 with Mathematics from recognized board with min 45% marks"
      },
      {
        title: "Master of Computer Applications (MCA)",
        type: "COMPUTER APPLICATIONS",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹30,000/Year",
        intake: 40,
        eligibility: "BCA / B.Sc with Mathematics at 10+2 or Graduation level with min 50% marks"
      },
      {
        title: "M.Sc in Computer Science",
        type: "COMPUTER APPLICATIONS",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹24,000/Year",
        intake: 40,
        eligibility: "B.Sc with Computer Science or BCA with min 50% marks"
      }
    ],
    highestPackage: "₹8.0 LPA",
    averagePackage: "₹3.6 LPA",
    placements: "TCS, Wipro, Infosys, Tech Mahindra, state power utilities, regional IT firms.",
    facilities: [
      "University Central Library",
      "Advanced Computer Laboratories",
      "Sendri Campus Academic Blocks",
      "Auditorium & Seminar Hall",
      "University Sports Ground"
    ]
  },
  1818: {
    name: "University Teaching Department (UTD), CSVTU Bhilai",
    shortName: "UTD CSVTU Bhilai",
    location: "Durg",
    state: "Chhattisgarh",
    address: "CSVTU Campus, Newai, Bhilai, District Durg, Chhattisgarh - 491107",
    phone: "0788-2200062",
    website: "https://csvtu.ac.in",
    rating: 4.6,
    reviews: 277,
    type: "Public/Government (State University Department)",
    ownership: "Government",
    affiliation: "Chhattisgarh Swami Vivekanand Technical University (CSVTU), State Technical University, AICTE approved",
    about: "University Teaching Department (UTD), CSVTU Bhilai represents the on-campus constituent academic faculties of Chhattisgarh Swami Vivekanand Technical University, the apex state technical university of Chhattisgarh. Located on the university campus in Newai, Bhilai, UTD offers undergraduate, postgraduate, and doctoral degrees in cutting-edge engineering disciplines.",
    ranking: 9,
    fees: "₹40,000/Year (B.Tech) / ₹35,000/Year (M.Tech)",
    exams: "CG PET, JEE Main, GATE",
    img: "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/65/2018/4/5/Chhattisgarh-Swami-Vivekanand-Technical-University-Bhilai-(2).jpg",
    gallery: [
      "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/65/2018/4/5/Chhattisgarh-Swami-Vivekanand-Technical-University-Bhilai-(2).jpg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/65/2018/4/5/Chhattisgarh-Swami-Vivekanand-Technical-University-Bhilai-(2).jpg",
    courses: [
      {
        title: "M.Tech in Civil (Structural Engineering)",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹35,000/Year",
        intake: 18,
        eligibility: "B.Tech/BE in Civil Engineering with minimum 55% marks + GATE / CSVTU Entrance"
      },
      {
        title: "B.Tech in Artificial Intelligence & Data Science",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹40,000/Year",
        intake: 60,
        eligibility: "10+2 with PCM + CG PET / JEE Main"
      },
      {
        title: "M.Tech in Computer Science & Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹35,000/Year",
        intake: 18,
        eligibility: "B.Tech/BE in CS/IT with minimum 55% marks + GATE"
      }
    ],
    highestPackage: "₹12.0 LPA",
    averagePackage: "₹5.0 LPA",
    placements: "Bhilai Steel Plant (SAIL), NTPC, CSPDCL, TCS, Tech Mahindra, L&T Construction.",
    facilities: [
      "CSVTU Central Campus",
      "Advanced Engineering Laboratories",
      "High-Performance Computing Center",
      "University Library with IEEE Access",
      "Sports Complex & Gymnasium",
      "Hostels for Boys & Girls"
    ]
  },
  1819: {
    name: "Dr. Shyama Prasad Mukherjee International Institute of Information Technology (IIIT-NR), Raipur",
    shortName: "IIIT Naya Raipur",
    location: "Raipur",
    state: "Chhattisgarh",
    address: "Plot No. 7, Sector 24, Near Purkhoti Muktangan, Nava Raipur Atal Nagar, Chhattisgarh - 492002",
    phone: "0771-2474040",
    website: "https://www.iiitnr.ac.in",
    rating: 4.7,
    reviews: 521,
    type: "Public/Government (State Autonomous Institute)",
    ownership: "Government",
    affiliation: "State University under State Legislature Act, Joint Venture of Govt of Chhattisgarh & NTPC, AICTE Approved",
    about: "Dr. Shyama Prasad Mukherjee International Institute of Information Technology (IIIT-NR), Naya Raipur was established jointly by the Government of Chhattisgarh and NTPC Ltd. as a state university and institute of excellence in IT and allied fields. Set on a sprawling 50-acre smart campus in Nava Raipur Atal Nagar, IIIT-NR is renowned for cutting-edge computing research, data science centers, and premier national tech placements.",
    ranking: 29,
    fees: "₹1,40,000/Year (₹5,60,000 Total for B.Tech)",
    exams: "JEE Main (JoSAA / CSAB & CG State Quota Counseling)",
    img: "https://static.careers360.mobi/media/presets/500X333/colleges/social-media/media-gallery/1231/2018/5/11/International-Institute-of-Information-Technology-Naya-Raipur1.jpg",
    gallery: [
      "https://static.careers360.mobi/media/presets/500X333/colleges/social-media/media-gallery/1231/2018/5/11/International-Institute-of-Information-Technology-Naya-Raipur1.jpg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://static.careers360.mobi/media/presets/500X333/colleges/social-media/media-gallery/1231/2018/5/11/International-Institute-of-Information-Technology-Naya-Raipur1.jpg",
    courses: [
      {
        title: "B.Tech in Computer Science & Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹1,40,000/Year",
        intake: 90,
        eligibility: "10+2 with Physics and Mathematics + JEE Main score (JoSAA / CSAB / CG State Counseling)"
      },
      {
        title: "B.Tech in Data Science & Artificial Intelligence",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹1,40,000/Year",
        intake: 60,
        eligibility: "10+2 with PCM + JEE Main"
      },
      {
        title: "B.Tech in Electronics & Communication Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹1,40,000/Year",
        intake: 60,
        eligibility: "10+2 with PCM + JEE Main"
      }
    ],
    highestPackage: "₹43.0 LPA",
    averagePackage: "₹14.5 LPA",
    placements: "Microsoft, Amazon, American Express, Adobe, Goldman Sachs, Deloitte, Qualcomm, TCS, Infosys.",
    facilities: [
      "50-Acre Modern Smart Campus",
      "Supercomputing & AI Research Facility",
      "IoT and Robotics Innovation Labs",
      "Fully Air-Conditioned Residential Hostels",
      "Central Library with Digital Consortium Access",
      "Sports Arena & Olympic Swimming Pool"
    ]
  },
  1820: {
    name: "School of Engineering, OP Jindal University (OPJU), Raigarh",
    shortName: "School of Engg OPJU Raigarh",
    location: "Raigarh",
    state: "Chhattisgarh",
    address: "OP Jindal Knowledge Park, Punjipathra, Raigarh, Chhattisgarh - 496109",
    phone: "07767-249000",
    website: "https://www.opju.ac.in",
    rating: 4.6,
    reviews: 153,
    type: "Private",
    ownership: "Private",
    affiliation: "OP Jindal University (Established by Chhattisgarh Private Universities Act), Approved by UGC & AICTE",
    about: "School of Engineering at OP Jindal University (OPJU), Raigarh was founded by the Jindal Education and Welfare Society. Dedicated to manufacturing, core metallurgy, materials, and digital technology, OPJU features extensive industrial laboratories and plant immersion facilities located adjacent to the O.P. Jindal Industrial Park.",
    ranking: 66,
    fees: "₹85,000 - ₹1,05,000/Year (₹3,40,000 - ₹4,20,000 Total for B.Tech)",
    exams: "JEE Main, CG PET, OPJU Entrance Test (OPJUET)",
    img: "https://image-static.collegedunia.com/public/college_data/images/appImage/14522_OP_New.jpg",
    gallery: [
      "https://image-static.collegedunia.com/public/college_data/images/appImage/14522_OP_New.jpg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://image-static.collegedunia.com/public/college_data/images/appImage/14522_OP_New.jpg",
    courses: [
      {
        title: "B.Tech in Metallurgical Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹85,000/Year",
        intake: 60,
        eligibility: "10+2 with PCM with min 50% marks + JEE Main / CG PET / OPJUET"
      },
      {
        title: "B.Tech in Computer Science & Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹1,05,000/Year",
        intake: 120,
        eligibility: "10+2 with PCM with min 50% marks"
      },
      {
        title: "B.Tech in Civil Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹85,000/Year",
        intake: 30,
        eligibility: "10+2 with PCM"
      },
      {
        title: "B.Tech in Mechanical Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹85,000/Year",
        intake: 60,
        eligibility: "10+2 with PCM"
      }
    ],
    highestPackage: "₹33.0 LPA",
    averagePackage: "₹5.5 LPA",
    placements: "Jindal Steel & Power Ltd (JSPL), Tata Steel, JSW, Adani, Vedanta, L&T, Infosys.",
    facilities: [
      "Metallurgical & Materials Testing Labs",
      "Core Mechanical Machine Shops",
      "Modern Computer Centers",
      "Campus Hostels with Dining",
      "Sports Grounds & Gymnasium",
      "Industrial Plant Immersion Center"
    ]
  },
  1821: {
    name: "Government Polytechnic, Balod",
    shortName: "GP Balod",
    location: "Balod",
    state: "Chhattisgarh",
    address: "Near Govt. ITI, Balod, Chhattisgarh - 491226",
    phone: "07749-222010",
    website: "http://polybalod.ac.in",
    rating: 4.5,
    reviews: 520,
    type: "Public/Government (Govt of Chhattisgarh)",
    ownership: "Government",
    affiliation: "Chhattisgarh Swami Vivekanand Technical University (CSVTU), Approved by AICTE, Directorate of Technical Education (CG DTE)",
    about: "Government Polytechnic Balod is a public technical institute established by the Department of Technical Education, Government of Chhattisgarh. Affiliated to CSVTU Bhilai and approved by AICTE, the institute provides subsidized diploma education to students of Balod district.",
    ranking: 19,
    fees: "₹5,150/Year (₹15,450 Total for 3-Year Diploma)",
    exams: "CG PPT (Pre-Polytechnic Test)",
    img: "/images/campuses/campus_architecture_4.jpg",
    gallery: [
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=492,fit=crop,trim=0;77.59197324414716;0;117.72575250836121/mk355K8Wj1FVj1JO/20240111_130102-dOqNjzWxrxTx7qgP.jpg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "/images/campuses/campus_architecture_4.jpg",
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
    placements: "CSPDCL, local construction contractors, SAIL Bhilai vendors.",
    facilities: [
      "Civil Materials Lab",
      "Electrical Machines Workshop",
      "Computer Laboratory",
      "Library & Reading Room",
      "Sports Area"
    ]
  },
  1822: {
    name: "Government Polytechnic, Berla",
    shortName: "GP Berla",
    location: "Bemetara",
    state: "Chhattisgarh",
    address: "Village Bahera, Tehsil Berla, District Bemetara, Chhattisgarh - 491332",
    phone: "07825-263300",
    website: "http://gpberla.ac.in",
    rating: 4.5,
    reviews: 526,
    type: "Public/Government (Govt of Chhattisgarh)",
    ownership: "Government",
    affiliation: "Chhattisgarh Swami Vivekanand Technical University (CSVTU), Approved by AICTE, CG DTE",
    about: "Government Polytechnic Berla is a government technical institute situated in Bemetara district, established by the Directorate of Technical Education, Government of Chhattisgarh. It offers AICTE-approved diploma programs in civil and electrical engineering.",
    ranking: 17,
    fees: "₹5,150/Year (₹15,450 Total for 3-Year Diploma)",
    exams: "CG PPT (Pre-Polytechnic Test)",
    img: "/images/campuses/campus_architecture_5.jpg",
    gallery: [
      "https://www.gkseries.com/blog/wp-content/uploads/2020/03/Government-Polytechnic-Berla-767x576.jpg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "/images/campuses/campus_architecture_5.jpg",
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
    placements: "Regional civil development contractors, state power discom vendors.",
    facilities: [
      "Civil Surveying Lab",
      "Electrical Wiring Workshop",
      "Computer Laboratory",
      "Technical Library",
      "Playground"
    ]
  },
  1823: {
    name: "Kalinga Institute of Technology (Faculty of Technology, Kalinga University), Raipur",
    shortName: "KIT Kalinga Univ Raipur",
    location: "Raipur",
    state: "Chhattisgarh",
    address: "Village Kotni, Near Mantralaya, Naya Raipur, Chhattisgarh - 492101",
    phone: "0771-3051010",
    website: "https://kalingauniversity.ac.in",
    rating: 4.4,
    reviews: 548,
    type: "Private",
    ownership: "Private",
    affiliation: "Kalinga University (State Private University), Approved by UGC & AICTE",
    about: "Faculty of Technology and Engineering at Kalinga University, Naya Raipur delivers undergraduate engineering degrees and polytechnic diplomas. Spread across a 30-acre campus in Kotni, the faculty provides modernized laboratories, engineering workshops, and industrial internships.",
    ranking: 67,
    fees: "₹80,000 - ₹95,000/Year (₹3,20,000 - ₹3,80,000 Total for B.Tech)",
    exams: "KALSEE, CG PET, JEE Main",
    img: "/images/campuses/campus_architecture_6.jpg",
    gallery: [
      "https://d13loartjoc1yn.cloudfront.net/upload/institute/images/large/190502024003_Building.webp",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "/images/campuses/campus_architecture_6.jpg",
    courses: [
      {
        title: "B.Tech in Civil Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹80,000/Year",
        intake: 54,
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
      "30-Acre Naya Raipur Campus",
      "Engineering Workshops",
      "Computer Laboratories",
      "Central Library with E-Journals",
      "Hostels with Mess",
      "Sports Ground"
    ]
  },
  1824: {
    name: "MSME Technology Centre, Durg",
    shortName: "MSME TC Durg",
    location: "Durg",
    state: "Chhattisgarh",
    address: "Plot No. 2D, Sector B, Industrial Growth Centre, Borai, Rasmada, Durg, Chhattisgarh - 491001",
    phone: "0788-2617111",
    website: "https://msmedurg.org",
    rating: 4.6,
    reviews: 120,
    type: "Public/Government (Ministry of MSME, Govt of India)",
    ownership: "Government",
    affiliation: "Ministry of Micro, Small and Medium Enterprises (MSME), Government of India, Approved by AICTE",
    about: "MSME Technology Centre Durg is an autonomous central government technological institution established under the Ministry of Micro, Small and Medium Enterprises (MSME), Government of India. Located in the Borai Industrial Growth Centre in Durg, it serves the twin purposes of providing precision manufacturing tooling to defense and industrial sectors, while imparting specialized diploma courses in tool and die making and automated manufacturing.",
    ranking: 37,
    fees: "₹32,000/Year (₹96,000 Total for 3-Year Diploma)",
    exams: "Institutional Entrance Test / Merit",
    img: "https://static.wixstatic.com/media/2fd6df_f230125669144f25856d529442171526~mv2.jpg/v1/fill/w_980,h_368,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2fd6df_f230125669144f25856d529442171526~mv2.jpg",
    gallery: [
      "https://static.wixstatic.com/media/2fd6df_f230125669144f25856d529442171526~mv2.jpg/v1/fill/w_980,h_368,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2fd6df_f230125669144f25856d529442171526~mv2.jpg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://static.wixstatic.com/media/2fd6df_f230125669144f25856d529442171526~mv2.jpg/v1/fill/w_980,h_368,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2fd6df_f230125669144f25856d529442171526~mv2.jpg",
    courses: [
      {
        title: "Diploma in Tool & Die Making",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Diploma",
        duration: "3 Years",
        fees: "₹32,000/Year",
        intake: 60,
        eligibility: "10th standard pass with Science and Mathematics with min 50% marks"
      },
      {
        title: "Advanced Diploma in CNC Machining",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Diploma",
        duration: "1 Year",
        fees: "₹28,000/Year",
        intake: 30,
        eligibility: "Diploma/Degree in Mechanical/Production Engineering"
      }
    ],
    highestPackage: "₹6.0 LPA",
    averagePackage: "₹3.2 LPA",
    placements: "Bhilai Steel Plant vendors, Tata Motors suppliers, precision tool rooms, Mahindra, Bharat Forge.",
    facilities: [
      "High-Precision CNC Machining Centers",
      "Industrial CAD/CAM/CAE Lab",
      "Heat Treatment & Metrology Lab",
      "Technical Library",
      "Tooling Production Facility"
    ]
  },
  1825: {
    name: "Tagore College of Management, Bilaspur",
    shortName: "Tagore College Bilaspur",
    location: "Bilaspur",
    state: "Chhattisgarh",
    address: "Turkadih Bypass Road, Sakri, Bilaspur, Chhattisgarh - 495003",
    phone: "+91-6232060055",
    website: "https://tcmbsp.in",
    rating: 4.5,
    reviews: 176,
    type: "Private",
    ownership: "Private",
    affiliation: "Atal Bihari Vajpayee Vishwavidyalaya (ABVV Bilaspur), Approved by AICTE",
    about: "Tagore College of Management (TCM), Bilaspur is a private business school established under the Tagore Group of Institutions in Sakri, Bilaspur. Approved by AICTE and affiliated to Atal Bihari Vajpayee Vishwavidyalaya, the college offers full-time MBA programs with specialization in finance, marketing, and human resources.",
    ranking: 35,
    fees: "₹65,000/Year (₹1,30,000 Total for MBA)",
    exams: "CG Pre-MBA, CMAT, MAT, CAT",
    img: "https://tcmbsp.in/wp-content/uploads/2021/06/tcmhome-2.jpg",
    gallery: [
      "https://tcmbsp.in/wp-content/uploads/2021/06/tcmhome-2.jpg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://tcmbsp.in/wp-content/uploads/2021/06/tcmhome-2.jpg",
    courses: [
      {
        title: "Master of Business Administration (MBA)",
        type: "MANAGEMENT",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹65,000/Year",
        intake: 120,
        eligibility: "Graduation with 50% marks (45% for reserved) + CG Pre-MBA / CMAT / MAT"
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        type: "MANAGEMENT",
        division: "Undergraduate",
        duration: "3 Years",
        fees: "₹25,000/Year",
        intake: 60,
        eligibility: "10+2 from recognized board"
      }
    ],
    highestPackage: "₹6.5 LPA",
    averagePackage: "₹3.2 LPA",
    placements: "ICICI Bank, Axis Bank, Reliance Retail, Bandhan Bank, local distribution corporations.",
    facilities: [
      "Smart Classrooms",
      "Management Library",
      "Computer Center",
      "Auditorium",
      "Sports Area"
    ]
  },
  1826: {
    name: "Prism School of Business & Entrepreneurship (PSBE), Bhilai",
    shortName: "PSBE Bhilai",
    location: "Durg",
    state: "Chhattisgarh",
    address: "Mahkakhurd, Ganiyari Road, Utai, Bhilai, District Durg, Chhattisgarh - 491107",
    phone: "+91-9425235203",
    website: "http://www.prismschool.ac.in",
    rating: 4.5,
    reviews: 507,
    type: "Private",
    ownership: "Private",
    affiliation: "Approved by AICTE, Directorate of Technical Education CG",
    about: "Prism School of Business & Entrepreneurship (PSBE) is an AICTE-approved autonomous management institute situated in Bhilai, Chhattisgarh. Offering a two-year flagship PGDM program with dual specializations, PSBE emphasizes case-study learning, entrepreneurship incubation, and corporate mentorship.",
    ranking: 62,
    fees: "₹1,25,000/Year (₹2,50,000 Total for PGDM)",
    exams: "CAT, MAT, CMAT, ATMA, CG Pre-MBA",
    img: "https://www.gkseries.com/blog/wp-content/uploads/2020/04/PRISM-School-of-Business-and-Entrepreneurship-Durg-1024x614.jpg",
    gallery: [
      "https://www.gkseries.com/blog/wp-content/uploads/2020/04/PRISM-School-of-Business-and-Entrepreneurship-Durg-1024x614.jpg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://www.gkseries.com/blog/wp-content/uploads/2020/04/PRISM-School-of-Business-and-Entrepreneurship-Durg-1024x614.jpg",
    courses: [
      {
        title: "Post Graduate Diploma in Management (PGDM)",
        type: "MANAGEMENT",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹1,25,000/Year",
        intake: 180,
        eligibility: "Graduation with minimum 50% + CAT / MAT / CMAT / ATMA / CG Pre-MBA"
      }
    ],
    highestPackage: "₹8.5 LPA",
    averagePackage: "₹4.2 LPA",
    placements: "HDFC Bank, ICICI Securities, Ambuja Cement, Jindal Steel, BYJU'S, Muthoot Finance.",
    facilities: [
      "Air-Conditioned Case Study Classrooms",
      "Management Library & Database Access",
      "Computing Center",
      "Incubation & Startup Cell",
      "Executive Seminar Hall"
    ]
  }
};

let updatedCount = 0;
for (const col of colleges) {
  if (batch183Updates[col.id]) {
    const update = batch183Updates[col.id];
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
console.log(`Saved updated public/siteData.json (${updatedCount} colleges in Batch 183).`);

// Update progress.json
const progressRaw = fs.readFileSync(progressPath, 'utf8');
const progress = JSON.parse(progressRaw);
progress.verifiedColleges = 1830;
progress.lastUpdated = new Date().toISOString();
progress.currentBatch = 183;
if (!progress.batches) progress.batches = {};
progress.batches["183"] = {
  status: "verified",
  verifiedCount: 10,
  range: "1821-1830",
  ids: [1817, 1818, 1819, 1820, 1821, 1822, 1823, 1824, 1825, 1826],
  verifiedAt: new Date().toISOString()
};
fs.writeFileSync(progressPath, JSON.stringify(progress, null, 2), 'utf8');
console.log(`Updated ${progressPath} -> verifiedColleges: 1830`);

// Update all_verified_colleges.json
let allVerified = [];
if (fs.existsSync(allVerifiedJsonPath)) {
  allVerified = JSON.parse(fs.readFileSync(allVerifiedJsonPath, 'utf8'));
}
const verifiedBatchColleges = colleges.filter(c => batch183Updates[c.id]);
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
let mdEntry = `\n### Batch 183 (Colleges 1,821–1,830, IDs: 1817–1826)\n`;
mdEntry += `| ID | College Name | Location | State | Type | Website |\n`;
mdEntry += `|---|---|---|---|---|---|\n`;
for (const id of [1817, 1818, 1819, 1820, 1821, 1822, 1823, 1824, 1825, 1826]) {
  const c = batch183Updates[id];
  mdEntry += `| ${id} | ${c.name} | ${c.location} | ${c.state} | ${c.type} | [Website](${c.website}) |\n`;
}
fs.appendFileSync(allVerifiedMdPath, mdEntry, 'utf8');
console.log(`Appended Batch 183 to ${allVerifiedMdPath}`);
