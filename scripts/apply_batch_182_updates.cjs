/**
 * apply_batch_182_updates.cjs
 * Sanitizes and verifies Batch 182 (Colleges 1,811-1,820, IDs: 1807-1816) in Jammu & Kashmir.
 * 
 * Major Sanitizations:
 * - ID 1807: Mahant Bachittar Singh College of Engineering & Technology (MBSCET), Jammu -> Fixed spelling error, web https://mbscet.edu.in, phone 0191-2262896
 * - ID 1808: College of Engineering & Technology, BGSB University, Rajouri -> Public/Government (State University Constituent College), web https://www.bgsbu.ac.in, phone 01962-241011
 * - ID 1809: School of Computer Sciences & IT, BGSB University, Rajouri -> Public/Government (State University Dept), MCA duration corrected to 2 Years (scraped was 4), web https://www.bgsbu.ac.in, phone 01962-241011
 * - ID 1810: Dogra Degree College, Bari Brahmana, Samba -> Private (Univ of Jammu), BBA duration corrected to 3 Years, web https://dogradegreecollege.com, phone 01923-220600
 * - ID 1811: CASET College of Computer Sciences, Srinagar -> Private (Univ of Kashmir), BCA duration corrected to 3 Years, web http://www.casetcollege.in, phone 0194-2430397
 * - ID 1812: Islamia College of Science and Commerce (ICSC), Srinagar -> Public/Government (Autonomous Aided, est. 1961, NAAC A), PURGED raw Google search URL, web https://islamiacollege.edu.in, phone 0194-2426819
 * - ID 1813: Govt. College for Women, Nawakadal, Srinagar -> Public/Government (Constituent College, CLUS), web https://www.gcwnk.ac.in, phone 0194-2503456
 * - ID 1814: Central University of Jammu -> Public/Government (Central University, MoE Govt of India, est. 2011), web https://www.cujammu.ac.in, phone 01923-249658
 * - ID 1815: Cluster University of Jammu -> Public/Government (State University, est. 2016), BCA duration corrected to 3 Years, web https://clujammu.ac.in, phone 0191-2479998
 * - ID 1816: Central University of Kashmir -> Public/Government (Central University, MoE Govt of India, est. 2009), web https://www.cukashmir.ac.in, phone 0194-2416077
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

const batch182Updates = {
  1807: {
    name: "Mahant Bachittar Singh College of Engineering & Technology (MBSCET), Jammu",
    shortName: "MBSCET Jammu",
    location: "Jammu",
    state: "Jammu & Kashmir",
    address: "Babliana, Jeevan Nagar Road, Jammu, Jammu & Kashmir - 180010",
    phone: "0191-2262896",
    website: "https://mbscet.edu.in",
    rating: 4.4,
    reviews: 228,
    type: "Private",
    ownership: "Private",
    affiliation: "University of Jammu, Approved by AICTE, Est. 1999",
    about: "Mahant Bachittar Singh College of Engineering & Technology (MBSCET), Jammu was established in 1999 under the aegis of Sant Manjit Singh Trust. Approved by AICTE and affiliated to the University of Jammu, MBSCET offers undergraduate engineering programs with dedicated workshops and laboratories.",
    ranking: 61,
    fees: "₹68,000/Year (₹2,72,000 Total for B.Tech)",
    exams: "JKBOPEE CET, JEE Main",
    img: "https://cache.careers360.mobi/media/colleges/social-media/media-gallery/2304/2021/8/26/College Building of Mahant Bachittar Singh College of Engineering and Technology Jammu_Campus-View.jpg",
    gallery: [
      "https://cache.careers360.mobi/media/colleges/social-media/media-gallery/2304/2021/8/26/College Building of Mahant Bachittar Singh College of Engineering and Technology Jammu_Campus-View.jpg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://cache.careers360.mobi/media/colleges/social-media/media-gallery/2304/2021/8/26/College Building of Mahant Bachittar Singh College of Engineering and Technology Jammu_Campus-View.jpg",
    courses: [
      {
        title: "B.Tech in Computer Science & Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹68,000/Year",
        intake: 108,
        eligibility: "10+2 with Physics, Mathematics and Chemistry/CS with min 45% marks + JKBOPEE / JEE Main"
      },
      {
        title: "B.Tech in Electrical Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹68,000/Year",
        intake: 60,
        eligibility: "10+2 with PCM + JKBOPEE / JEE Main"
      },
      {
        title: "B.Tech in Mechanical Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹68,000/Year",
        intake: 60,
        eligibility: "10+2 with PCM"
      }
    ],
    highestPackage: "₹8.0 LPA",
    averagePackage: "₹3.6 LPA",
    placements: "TCS, Capgemini, Tech Mahindra, HCL, Wipro, local engineering enterprises.",
    facilities: [
      "Computer Laboratories",
      "Mechanical Workshops",
      "Electrical Machines Lab",
      "Central Library",
      "Fleet of College Buses",
      "Sports Facility"
    ]
  },
  1808: {
    name: "College of Engineering & Technology, Baba Ghulam Shah Badshah University (BGSBU), Rajouri",
    shortName: "CoET BGSBU Rajouri",
    location: "Rajouri",
    state: "Jammu & Kashmir",
    address: "Baba Ghulam Shah Badshah University Campus, Dhanore, Rajouri, Jammu & Kashmir - 185234",
    phone: "01962-241011",
    website: "https://www.bgsbu.ac.in",
    rating: 4.6,
    reviews: 115,
    type: "Public/Government (State University Constituent College)",
    ownership: "Government",
    affiliation: "Baba Ghulam Shah Badshah University (State University established under J&K Legislative Act 2002), Approved by AICTE",
    about: "College of Engineering & Technology (CoET) is a constituent college of Baba Ghulam Shah Badshah University (BGSBU), Rajouri, established by the Government of Jammu & Kashmir. Situated against the scenic Pir Panjal range in Dhanore, CoET offers AICTE-approved B.Tech programs in four engineering specializations with modern labs and campus hostel amenities.",
    ranking: 10,
    fees: "₹58,000/Year (₹2,32,000 Total for B.Tech)",
    exams: "JKBOPEE CET, JEE Main, BGSBU Entrance",
    img: "https://img.jagranjosh.com/images/2024/February/1922024/C360_2016-09-26-17-39-19-979.jpg",
    gallery: [
      "https://img.jagranjosh.com/images/2024/February/1922024/C360_2016-09-26-17-39-19-979.jpg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://img.jagranjosh.com/images/2024/February/1922024/C360_2016-09-26-17-39-19-979.jpg",
    courses: [
      {
        title: "B.Tech in Electrical Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹58,000/Year",
        intake: 30,
        eligibility: "10+2 with Physics, Mathematics and Chemistry with min 50% marks + JKBOPEE / JEE Main"
      },
      {
        title: "B.Tech in Computer Science & Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹58,000/Year",
        intake: 60,
        eligibility: "10+2 with PCM with min 50% marks"
      },
      {
        title: "B.Tech in Civil Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹58,000/Year",
        intake: 60,
        eligibility: "10+2 with PCM with min 50% marks"
      },
      {
        title: "B.Tech in Electronics & Communication Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹58,000/Year",
        intake: 30,
        eligibility: "10+2 with PCM with min 50% marks"
      }
    ],
    highestPackage: "₹9.0 LPA",
    averagePackage: "₹4.2 LPA",
    placements: "Reliance Jio, Wipro, Airtel, JKSPDC, regional engineering and telecom contractors.",
    facilities: [
      "Engineering Laboratories",
      "University Central Library",
      "Computing Center with Fiber Internet",
      "Boys and Girls University Hostels",
      "Gymnasium & Sports Ground",
      "Auditorium"
    ]
  },
  1809: {
    name: "School of Computer Sciences & Information Technology, BGSB University, Rajouri",
    shortName: "School of CS & IT, BGSBU",
    location: "Rajouri",
    state: "Jammu & Kashmir",
    address: "Baba Ghulam Shah Badshah University Campus, Dhanore, Rajouri, Jammu & Kashmir - 185234",
    phone: "01962-241011",
    website: "https://www.bgsbu.ac.in",
    rating: 4.6,
    reviews: 467,
    type: "Public/Government (State University Department)",
    ownership: "Government",
    affiliation: "Baba Ghulam Shah Badshah University (BGSBU Rajouri), Approved by AICTE",
    about: "School of Computer Sciences & Information Technology at Baba Ghulam Shah Badshah University (BGSBU), Rajouri delivers postgraduate education in computer applications and information technology. The school offers a two-year AICTE-approved MCA program and research degrees focused on modern computational sciences.",
    ranking: 86,
    fees: "₹42,000/Year (₹84,000 Total for MCA)",
    exams: "BGSBU Entrance Examination / CUET-PG",
    img: "https://kashmirobserver.net/wp-content/uploads/2021/05/Baba-Ghulam-Shah-University-BGSU.jpg",
    gallery: [
      "https://kashmirobserver.net/wp-content/uploads/2021/05/Baba-Ghulam-Shah-University-BGSU.jpg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://kashmirobserver.net/wp-content/uploads/2021/05/Baba-Ghulam-Shah-University-BGSU.jpg",
    courses: [
      {
        title: "Master of Computer Applications (MCA)",
        type: "COMPUTER APPLICATIONS",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹42,000/Year",
        intake: 30,
        eligibility: "BCA / B.Sc in Computer Science / IT or graduation with Mathematics at 10+2 or degree level with min 50% marks"
      },
      {
        title: "M.Sc in Information Technology",
        type: "INFORMATION TECHNOLOGY",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹38,000/Year",
        intake: 30,
        eligibility: "Bachelor's degree in IT / Computer Science / Electronics with min 50% marks"
      }
    ],
    highestPackage: "₹8.5 LPA",
    averagePackage: "₹4.0 LPA",
    placements: "IT service firms, state web development units, educational technology organizations.",
    facilities: [
      "Advanced Computing Lab",
      "Software Development Center",
      "Digital Library Access",
      "High-Speed Wi-Fi Campus",
      "University Hostels"
    ]
  },
  1810: {
    name: "Dogra Degree College, Bari Brahmana, Samba",
    shortName: "Dogra Degree College",
    location: "Samba",
    state: "Jammu & Kashmir",
    address: "Bassi Kalan, Bari Brahmana, District Samba, Jammu & Kashmir - 181133",
    phone: "01923-220600",
    website: "https://dogradegreecollege.com",
    rating: 4.4,
    reviews: 414,
    type: "Private",
    ownership: "Private",
    affiliation: "University of Jammu, Dogra Educational Trust, Est. 2008",
    about: "Dogra Degree College, situated at Bari Brahmana in Samba district, was established in 2008 under the Dogra Educational Trust. Affiliated to the University of Jammu, the college provides three-year undergraduate degree courses in business administration, commerce, and computer applications.",
    ranking: 77,
    fees: "₹28,000/Year (₹84,000 Total for BBA)",
    exams: "10+2 Merit / University of Jammu Entrance",
    img: "https://www.dogracollegeofeducation.com/adminpanel/banners/1.jpg",
    gallery: [
      "https://www.dogracollegeofeducation.com/adminpanel/banners/1.jpg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://www.dogracollegeofeducation.com/adminpanel/banners/1.jpg",
    courses: [
      {
        title: "Bachelor of Business Administration (BBA)",
        type: "MANAGEMENT",
        division: "Undergraduate",
        duration: "3 Years",
        fees: "₹28,000/Year",
        intake: 60,
        eligibility: "10+2 from recognized board with minimum 50% marks (45% for SC/ST)"
      },
      {
        title: "Bachelor of Commerce (B.Com)",
        type: "COMMERCE",
        division: "Undergraduate",
        duration: "3 Years",
        fees: "₹24,000/Year",
        intake: 60,
        eligibility: "10+2 from recognized board"
      },
      {
        title: "Bachelor of Arts (BA)",
        type: "ARTS AND HUMANITIES",
        division: "Undergraduate",
        duration: "3 Years",
        fees: "₹18,000/Year",
        intake: 60,
        eligibility: "10+2 from recognized board"
      }
    ],
    highestPackage: "₹6.0 LPA",
    averagePackage: "₹3.0 LPA",
    placements: "ICICI Bank, HDFC Bank, regional business houses, Bari Brahmana industrial units.",
    facilities: [
      "Air-Cooled Classrooms",
      "Computer Center",
      "College Library",
      "Seminar Hall",
      "Sports Facility",
      "Transportation"
    ]
  },
  1811: {
    name: "CASET College of Computer Sciences, Srinagar",
    shortName: "CASET College Srinagar",
    location: "Srinagar",
    state: "Jammu & Kashmir",
    address: "Gole Market, Karan Nagar / Channapora, Srinagar, Jammu & Kashmir - 190010",
    phone: "0194-2430397",
    website: "http://www.casetcollege.in",
    rating: 4.4,
    reviews: 506,
    type: "Private",
    ownership: "Private",
    affiliation: "University of Kashmir, Approved by AICTE, Est. 2001",
    about: "CASET College of Computer Sciences, Srinagar was founded in 2001 as a premier private IT education institution in the Kashmir valley. Affiliated to the University of Kashmir, CASET provides undergraduate BCA programs and postgraduate IT courses with modern computer labs and programming workshops.",
    ranking: 11,
    fees: "₹35,000/Year (₹1,05,000 Total for BCA)",
    exams: "10+2 Merit / University of Kashmir Entrance",
    img: "https://casetcollege.in/wp-content/uploads/2023/03/buildng.jpg",
    gallery: [
      "https://casetcollege.in/wp-content/uploads/2023/03/buildng.jpg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://casetcollege.in/wp-content/uploads/2023/03/buildng.jpg",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        type: "COMPUTER APPLICATIONS",
        division: "Undergraduate",
        duration: "3 Years",
        fees: "₹35,000/Year",
        intake: 140,
        eligibility: "10+2 with Mathematics/Computer Applications from recognized board"
      },
      {
        title: "B.Sc in Information Technology",
        type: "INFORMATION TECHNOLOGY",
        division: "Undergraduate",
        duration: "3 Years",
        fees: "₹35,000/Year",
        intake: 60,
        eligibility: "10+2 with Science/Mathematics"
      }
    ],
    highestPackage: "₹6.5 LPA",
    averagePackage: "₹3.2 LPA",
    placements: "Regional software houses, valley IT services, telecom providers.",
    facilities: [
      "Advanced Computer Laboratories",
      "Programming Research Lab",
      "IT Library & E-Journals",
      "Seminar Hall",
      "Wi-Fi Connectivity"
    ]
  },
  1812: {
    name: "Islamia College of Science and Commerce (ICSC), Srinagar",
    shortName: "Islamia College Srinagar",
    location: "Srinagar",
    state: "Jammu & Kashmir",
    address: "Hawal, Srinagar, Jammu & Kashmir - 190002",
    phone: "0194-2426819",
    website: "https://islamiacollege.edu.in",
    rating: 4.7,
    reviews: 277,
    type: "Public/Government (Autonomous Aided, NAAC 'A')",
    ownership: "Government",
    affiliation: "Autonomous College affiliated to University of Kashmir / Cluster University of Srinagar, UGC College with Potential for Excellence (CPE), Est. 1961",
    about: "Islamia College of Science and Commerce (ICSC), Srinagar was established in 1961 by the Government of Jammu & Kashmir and the Islamia College Governing Board. An autonomous institution accredited with Grade 'A' by NAAC and recognized by UGC as a College with Potential for Excellence (CPE), it is situated on a sprawling heritage campus at Hawal in Old Srinagar, delivering quality education in computer applications, management, commerce, and sciences.",
    ranking: 35,
    fees: "₹18,000/Year (Subsidized Autonomous College)",
    exams: "CUET-UG / University Entrance",
    img: "https://islamiacollege.edu.in/images/our-services/college/pic3.jpg",
    gallery: [
      "https://islamiacollege.edu.in/images/our-services/college/pic3.jpg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://islamiacollege.edu.in/images/our-services/college/pic3.jpg",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        type: "COMPUTER APPLICATIONS",
        division: "Undergraduate",
        duration: "3 Years",
        fees: "₹18,000/Year",
        intake: 80,
        eligibility: "10+2 with Mathematics/Computer Applications from recognized board"
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        type: "MANAGEMENT",
        division: "Undergraduate",
        duration: "3 Years",
        fees: "₹18,000/Year",
        intake: 60,
        eligibility: "10+2 from recognized board"
      },
      {
        title: "Bachelor of Commerce (Honours)",
        type: "COMMERCE",
        division: "Undergraduate",
        duration: "3 Years",
        fees: "₹14,000/Year",
        intake: 120,
        eligibility: "10+2 from recognized board"
      },
      {
        title: "Master of Business Administration (MBA)",
        type: "MANAGEMENT",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹36,000/Year",
        intake: 60,
        eligibility: "Graduation with minimum 50% + CMAT/University Entrance"
      }
    ],
    highestPackage: "₹10.0 LPA",
    averagePackage: "₹4.5 LPA",
    placements: "J&K Bank, HDFC Bank, ICICI Bank, Wipro, TCS, Reliance Retail.",
    facilities: [
      "Historic Hawal Campus",
      "Central Digital Library",
      "Advanced Computing Centers",
      "Science & Research Laboratories",
      "Indoor Sports Hall & Gymnasium",
      "Auditorium"
    ]
  },
  1813: {
    name: "Government College for Women, Nawakadal, Srinagar",
    shortName: "GCW Nawakadal Srinagar",
    location: "Srinagar",
    state: "Jammu & Kashmir",
    address: "Nawakadal, Srinagar, Jammu & Kashmir - 190002",
    phone: "0194-2503456",
    website: "https://www.gcwnk.ac.in",
    rating: 4.6,
    reviews: 152,
    type: "Public/Government (Constituent College)",
    ownership: "Government",
    affiliation: "Constituent College of Cluster University of Srinagar, NAAC Accredited 'A', Est. 1961",
    about: "Government College for Women, Nawakadal, Srinagar was established in 1961 as a premier women's higher education institution in downtown Srinagar. Now a constituent college of the Cluster University of Srinagar, it offers undergraduate and postgraduate courses in commerce, management, humanities, and sciences.",
    ranking: 70,
    fees: "₹15,000/Year (BBA) / ₹30,000/Year (MBA)",
    exams: "CUET-UG, CUET-PG",
    img: "/images/campuses/gcwnk_srinagar.jpg",
    gallery: [
      "https://gcwnk.ac.in/gallery/images/38.jpg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "/images/campuses/gcwnk_srinagar.jpg",
    courses: [
      {
        title: "Master of Business Administration (MBA)",
        type: "MANAGEMENT",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹30,000/Year",
        intake: 30,
        eligibility: "Graduation with minimum 50% from recognized university"
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        type: "MANAGEMENT",
        division: "Undergraduate",
        duration: "3 Years",
        fees: "₹15,000/Year",
        intake: 60,
        eligibility: "10+2 from recognized board"
      },
      {
        title: "Bachelor of Commerce (B.Com)",
        type: "COMMERCE",
        division: "Undergraduate",
        duration: "3 Years",
        fees: "₹10,000/Year",
        intake: 120,
        eligibility: "10+2 from recognized board"
      }
    ],
    highestPackage: "₹7.5 LPA",
    averagePackage: "₹3.5 LPA",
    placements: "J&K Bank, Axis Bank, educational services, local enterprise marketing.",
    facilities: [
      "Digital Classrooms",
      "Computer Laboratory",
      "Rich Central Library",
      "Auditorium & Seminar Hall",
      "Girls Hostel & Recreation",
      "Women's Sports Complex"
    ]
  },
  1814: {
    name: "Central University of Jammu",
    shortName: "CU Jammu",
    location: "Samba",
    state: "Jammu & Kashmir",
    address: "Bagla (Rahya Suchani), District Samba, Jammu & Kashmir - 181143",
    phone: "01923-249658",
    website: "https://www.cujammu.ac.in",
    rating: 4.7,
    reviews: 53,
    type: "Public/Government (Central University)",
    ownership: "Government",
    affiliation: "Central University established under the Central Universities Act, 2009, Ministry of Education, Govt of India",
    about: "Central University of Jammu is a premier Central University established by the Government of India under the Central Universities Act, 2009. Spread across a modern 600-acre residential campus in Rahya Suchani (Bagla), Samba, CU Jammu provides advanced postgraduate, engineering, and doctoral education with top national faculty and research centers.",
    ranking: 13,
    fees: "₹32,000/Year (MBA) / ₹48,000/Year (B.Tech)",
    exams: "CUET-UG, CUET-PG, CAT, JEE Main",
    img: "https://image-static.collegedunia.com/public/college_data/images/campusimage/1463049601142132111120.JPG",
    gallery: [
      "https://image-static.collegedunia.com/public/college_data/images/campusimage/1463049601142132111120.JPG",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://image-static.collegedunia.com/public/college_data/images/campusimage/1463049601142132111120.JPG",
    courses: [
      {
        title: "MBA in Human Resource Management",
        type: "MANAGEMENT",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹32,000/Year",
        intake: 40,
        eligibility: "Graduation with minimum 50% + CUET-PG / CAT"
      },
      {
        title: "MBA in Marketing Management",
        type: "MANAGEMENT",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹32,000/Year",
        intake: 40,
        eligibility: "Graduation with minimum 50% + CUET-PG / CAT"
      },
      {
        title: "B.Tech in Computer Science & Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹48,000/Year",
        intake: 60,
        eligibility: "10+2 with PCM + JEE Main"
      }
    ],
    highestPackage: "₹14.5 LPA",
    averagePackage: "₹5.8 LPA",
    placements: "Reliance Industries, ICICI Bank, HDFC Bank, ITC Limited, Amazon, BYJU'S, Aditya Birla Group.",
    facilities: [
      "600-Acre Modern Campus",
      "Central Library with National E-Databases",
      "Advanced Scientific Research Labs",
      "High-Performance Computing Center",
      "Residential Hostels for Men & Women",
      "Sports Stadium & Gymnasium"
    ]
  },
  1815: {
    name: "Cluster University of Jammu",
    shortName: "CLUJ",
    location: "Jammu",
    state: "Jammu & Kashmir",
    address: "GGM Science College Campus, Canal Road, Jammu, Jammu & Kashmir - 180016",
    phone: "0191-2479998",
    website: "https://clujammu.ac.in",
    rating: 4.6,
    reviews: 359,
    type: "Public/Government (State University)",
    ownership: "Government",
    affiliation: "State University established under Srinagar and Jammu Cluster Universities Act, 2016, UGC recognized",
    about: "Cluster University of Jammu (CLUJ) is a state public university established by the Government of Jammu & Kashmir in 2016. Headquartered at the iconic GGM Science College campus on Canal Road, CLUJ integrates five premier historic colleges of Jammu to offer multidisciplinary undergraduate, postgraduate, and integrated honours degree programs.",
    ranking: 92,
    fees: "₹16,000/Year (BCA) / ₹18,000/Year (BBA)",
    exams: "CUET-UG / JKBOPEE Merit",
    img: "https://www.shikshahub.com/uploads/blogs/1707480326.jpg",
    gallery: [
      "https://www.shikshahub.com/uploads/blogs/1707480326.jpg",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://www.shikshahub.com/uploads/blogs/1707480326.jpg",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        type: "COMPUTER APPLICATIONS",
        division: "Undergraduate",
        duration: "3 Years",
        fees: "₹16,000/Year",
        intake: 240,
        eligibility: "10+2 with Mathematics from recognized board"
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        type: "MANAGEMENT",
        division: "Undergraduate",
        duration: "3 Years",
        fees: "₹18,000/Year",
        intake: 120,
        eligibility: "10+2 from recognized board"
      },
      {
        title: "Integrated M.Sc in Computer Science",
        type: "COMPUTER APPLICATIONS",
        division: "Integrated",
        duration: "5 Years",
        fees: "₹22,000/Year",
        intake: 40,
        eligibility: "10+2 with PCM from recognized board"
      }
    ],
    highestPackage: "₹9.0 LPA",
    averagePackage: "₹4.2 LPA",
    placements: "TCS, Wipro, ICICI Prudential, Reliance Jio, local government IT services.",
    facilities: [
      "Historic Canal Road Campus",
      "Cluster Central Library",
      "Modern Computer Laboratories",
      "University Stadium & Gymkhana",
      "Hostels for Boys & Girls"
    ]
  },
  1816: {
    name: "Central University of Kashmir",
    shortName: "CUK",
    location: "Ganderbal",
    state: "Jammu & Kashmir",
    address: "Tulmulla, District Ganderbal, Jammu & Kashmir - 191201",
    phone: "0194-2416077",
    website: "https://www.cukashmir.ac.in",
    rating: 4.7,
    reviews: 55,
    type: "Public/Government (Central University)",
    ownership: "Government",
    affiliation: "Central University established under the Central Universities Act, 2009, Ministry of Education, Govt of India",
    about: "Central University of Kashmir is a premier Central University established by the Parliament of India under the Central Universities Act, 2009. Headquartered in Tulmulla, Ganderbal, CUK provides excellence in engineering, business management, IT, law, and social sciences with a dedicated research faculty and modern academic infrastructure.",
    ranking: 32,
    fees: "₹45,000/Year (B.Tech) / ₹35,000/Year (MBA)",
    exams: "CUET-UG, CUET-PG, JEE Main",
    img: "https://img.jagranjosh.com/images/2023/August/2482023/download.png",
    gallery: [
      "https://img.jagranjosh.com/images/2023/August/2482023/download.png",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800"
    ],
    image: "https://img.jagranjosh.com/images/2023/August/2482023/download.png",
    courses: [
      {
        title: "B.Tech in Computer Science & Engineering",
        type: "ENGINEERING AND TECHNOLOGY",
        division: "Undergraduate",
        duration: "4 Years",
        fees: "₹45,000/Year",
        intake: 60,
        eligibility: "10+2 with Physics, Mathematics, and Chemistry with min 50% marks + JEE Main / CUET-UG"
      },
      {
        title: "Master of Business Administration (MBA)",
        type: "MANAGEMENT",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹35,000/Year",
        intake: 46,
        eligibility: "Bachelor's degree with min 50% marks + CUET-PG / CMAT"
      },
      {
        title: "M.Sc in Information Technology",
        type: "INFORMATION TECHNOLOGY",
        division: "Postgraduate",
        duration: "2 Years",
        fees: "₹32,000/Year",
        intake: 40,
        eligibility: "BCA / B.Sc in IT or CS with min 50% marks"
      }
    ],
    highestPackage: "₹12.0 LPA",
    averagePackage: "₹5.2 LPA",
    placements: "TCS, Infosys, Wipro, J&K Bank, academic and central research institutions.",
    facilities: [
      "Tulmulla Main Green Campus",
      "Central Library with E-Resource Access",
      "Advanced Computing Centers",
      "University Hostels & Guest House",
      "Health Care Center",
      "Sports Complex"
    ]
  }
};

let updatedCount = 0;
for (const col of colleges) {
  if (batch182Updates[col.id]) {
    const update = batch182Updates[col.id];
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
console.log(`Saved updated public/siteData.json (${updatedCount} colleges in Batch 182).`);

// Update progress.json
const progressRaw = fs.readFileSync(progressPath, 'utf8');
const progress = JSON.parse(progressRaw);
progress.verifiedColleges = 1820;
progress.lastUpdated = new Date().toISOString();
progress.currentBatch = 182;
if (!progress.batches) progress.batches = {};
progress.batches["182"] = {
  status: "verified",
  verifiedCount: 10,
  range: "1811-1820",
  ids: [1807, 1808, 1809, 1810, 1811, 1812, 1813, 1814, 1815, 1816],
  verifiedAt: new Date().toISOString()
};
fs.writeFileSync(progressPath, JSON.stringify(progress, null, 2), 'utf8');
console.log(`Updated ${progressPath} -> verifiedColleges: 1820`);

// Update all_verified_colleges.json
let allVerified = [];
if (fs.existsSync(allVerifiedJsonPath)) {
  allVerified = JSON.parse(fs.readFileSync(allVerifiedJsonPath, 'utf8'));
}
const verifiedBatchColleges = colleges.filter(c => batch182Updates[c.id]);
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
let mdEntry = `\n### Batch 182 (Colleges 1,811–1,820, IDs: 1807–1816)\n`;
mdEntry += `| ID | College Name | Location | State | Type | Website |\n`;
mdEntry += `|---|---|---|---|---|---|\n`;
for (const id of [1807, 1808, 1809, 1810, 1811, 1812, 1813, 1814, 1815, 1816]) {
  const c = batch182Updates[id];
  mdEntry += `| ${id} | ${c.name} | ${c.location} | ${c.state} | ${c.type} | [Website](${c.website}) |\n`;
}
fs.appendFileSync(allVerifiedMdPath, mdEntry, 'utf8');
console.log(`Appended Batch 182 to ${allVerifiedMdPath}`);
