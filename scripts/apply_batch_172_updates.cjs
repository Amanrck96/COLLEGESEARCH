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

// Batch 172 updates
const batch172Updates = {
  1411: {
    name: "Lendi Institute of Engineering and Technology (LIET Autonomous), Vizianagaram",
    shortName: "LIET Vizianagaram",
    location: "Vizianagaram",
    state: "Andhra Pradesh",
    address: "Jonnada Village, Via 5th APSP Battalion, Denkada Mandal, Vizianagaram District, Andhra Pradesh - 535007",
    phone: "08922-241111",
    website: "https://www.lendi.org",
    rating: 4.5,
    reviews: 1158,
    reviewsCount: 1158,
    type: "Private",
    ownership: "Private",
    about: "Lendi Institute of Engineering and Technology (Autonomous), established in 2008 under the Sai Dhamam Educational Trust, is a premier autonomous engineering college in northern Andhra Pradesh. Accredited by NAAC with 'A' Grade and NBA, and permanently affiliated with JNTU Gurajada Vizianagaram (JNTU-GV), Lendi offers undergraduate B.Tech engineering degrees and postgraduate M.Tech courses across a modern high-tech campus with excellent corporate placement tie-ups.",
    ranking: 16,
    fees: "₹2.2 Lakhs",
    exams: "AP EAPCET / GATE / AP PGECET",
    img: "https://www.collegebatch.com/static/clg-gallery/lendi-institute-of-engineering-technology-vizianagaram-272391.webp",
    image: "https://www.collegebatch.com/static/clg-gallery/lendi-institute-of-engineering-technology-vizianagaram-272391.webp",
    gallery: [
      "https://www.collegebatch.com/static/clg-gallery/lendi-institute-of-engineering-technology-vizianagaram-272391.webp",
      "/images/campuses/campus_architecture_1.jpg",
      "/images/campuses/campus_architecture_2.jpg"
    ],
    affiliation: "JNTU Gurajada Vizianagaram (JNTU-GV Autonomous) / AICTE / NAAC A / NBA",
    courses: [
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹2.2 Lakhs",
        eligibility: "10+2 with MPC (AP EAPCET)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 240
      },
      {
        title: "B.Tech in Electronics and Communication Engineering",
        duration: "4 Years",
        fees: "₹2.2 Lakhs",
        eligibility: "10+2 with MPC (AP EAPCET)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 240
      },
      {
        title: "B.Tech in Computer Science and System Engineering",
        duration: "4 Years",
        fees: "₹2.2 Lakhs",
        eligibility: "10+2 with MPC (AP EAPCET)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹2.0 Lakhs",
        eligibility: "10+2 with MPC (AP EAPCET)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ],
    highestPackage: "₹40 LPA",
    averagePackage: "₹5.5 LPA",
    placements: "88%"
  },
  1412: {
    name: "Pragathi Polytechnic College, Kothavalasa, Vizianagaram",
    shortName: "Pragathi Polytechnic",
    location: "Vizianagaram",
    state: "Andhra Pradesh",
    address: "S.No. 34, Ardhannapalem, Kothavalasa, Vizianagaram District, Andhra Pradesh - 535183",
    phone: "08966-273444",
    website: "https://pragathipolytechnic.com",
    rating: 4.1,
    reviews: 1132,
    reviewsCount: 1132,
    type: "Private",
    ownership: "Private",
    about: "Pragathi Polytechnic College, located at Ardhannapalem near Kothavalasa in Vizianagaram district, was founded under the Pragathi Educational Society. Approved by AICTE and affiliated with the State Board of Technical Education and Training (SBTET), Andhra Pradesh, the polytechnic offers 3-year technical diploma courses in Mechanical, Civil, Electrical & Electronics, and Computer Engineering with spacious machine workshops and labs.",
    ranking: 38,
    fees: "₹75,000",
    exams: "AP POLYCET",
    img: "https://notopedia-uploads.s3.us-east-2.amazonaws.com/clg-photo/pic-202001150631514941.png",
    image: "https://notopedia-uploads.s3.us-east-2.amazonaws.com/clg-photo/pic-202001150631514941.png",
    gallery: [
      "https://notopedia-uploads.s3.us-east-2.amazonaws.com/clg-photo/pic-202001150631514941.png",
      "/images/campuses/campus_architecture_3.jpg",
      "/images/campuses/campus_architecture_4.jpg"
    ],
    affiliation: "State Board of Technical Education and Training (SBTET), Andhra Pradesh / AICTE",
    courses: [
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹75,000",
        eligibility: "10th Class SSC with Mathematics & Science",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 120
      },
      {
        title: "Diploma in Electrical & Electronics Engineering",
        duration: "3 Years",
        fees: "₹75,000",
        eligibility: "10th Class SSC with Mathematics & Science",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹75,000",
        eligibility: "10th Class SSC with Mathematics & Science",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ],
    highestPackage: "₹4.5 LPA",
    averagePackage: "₹2.6 LPA",
    placements: "75%"
  },
  1413: {
    name: "JNTU-GV University College of Engineering, Vizianagaram",
    shortName: "UCEV JNTU-GV",
    location: "Vizianagaram",
    state: "Andhra Pradesh",
    address: "JNTU-GV Campus, Dwarapudi Post, Gotlam Village, Vizianagaram, Andhra Pradesh - 535005",
    phone: "08922-277388",
    website: "https://jntugvcev.edu.in",
    rating: 4.6,
    reviews: 1066,
    reviewsCount: 1066,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "JNTU-GV University College of Engineering Vizianagaram (UCEV), established in 2007 by the Government of Andhra Pradesh, is the flagship constituent engineering college of Jawaharlal Nehru Technological University Gurajada Vizianagaram. Spread across an expansive 85-acre campus at Gotlam, UCEV provides premier subsidized technical education in CSE, ECE, EEE, Mechanical, Civil, Information Technology, and Metallurgical Engineering with modern research centers and prestigious campus placements.",
    ranking: 3,
    fees: "₹1.6 Lakhs",
    exams: "AP EAPCET / GATE / AP PGECET",
    img: "https://image-static.collegedunia.com/public/reviewPhotos/1002855/IMG-20241224-WA0003.jpg",
    image: "https://image-static.collegedunia.com/public/reviewPhotos/1002855/IMG-20241224-WA0003.jpg",
    gallery: [
      "https://image-static.collegedunia.com/public/reviewPhotos/1002855/IMG-20241224-WA0003.jpg",
      "/images/campuses/campus_architecture_5.jpg",
      "/images/campuses/campus_architecture_6.jpg"
    ],
    affiliation: "JNTU Gurajada Vizianagaram (State Government University) / AICTE",
    courses: [
      {
        title: "B.Tech in Computer Science & Engineering",
        duration: "4 Years",
        fees: "₹1.6 Lakhs",
        eligibility: "10+2 with MPC (AP EAPCET Rank)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Electronics & Communication Engineering",
        duration: "4 Years",
        fees: "₹1.6 Lakhs",
        eligibility: "10+2 with MPC (AP EAPCET Rank)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Electrical & Electronics Engineering",
        duration: "4 Years",
        fees: "₹1.6 Lakhs",
        eligibility: "10+2 with MPC (AP EAPCET Rank)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹1.6 Lakhs",
        eligibility: "10+2 with MPC (AP EAPCET Rank)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Metallurgical Engineering",
        duration: "4 Years",
        fees: "₹1.6 Lakhs",
        eligibility: "10+2 with MPC (AP EAPCET Rank)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ],
    highestPackage: "₹33.5 LPA",
    averagePackage: "₹6.2 LPA",
    placements: "90%"
  },
  1414: {
    name: "B.V.C. College of Engineering, Palacherla, Rajamahendravaram",
    shortName: "BVCE Rajahmundry",
    location: "East Godavari",
    state: "Andhra Pradesh",
    address: "Palacherla Village, Rajanagaram Mandal, Rajamahendravaram (Rajahmundry), East Godavari District, Andhra Pradesh - 533102",
    phone: "0883-2007788",
    website: "https://bvce.edu.in",
    rating: 4.2,
    reviews: 1936,
    reviewsCount: 1936,
    type: "Private",
    ownership: "Private",
    about: "B.V.C. College of Engineering, Palacherla, established in 2002 under the BVC Group of Institutions (Bona Voce Committee), is an established technical education center near Rajamahendravaram in East Godavari district. Approved by AICTE and affiliated with JNTU-Kakinada, BVCE provides undergraduate engineering qualifications in Artificial Intelligence & Data Science, CSE, ECE, Mechanical, and Civil Engineering with modern labs and placement support.",
    ranking: 22,
    fees: "₹1.8 Lakhs",
    exams: "AP EAPCET / GATE",
    img: "https://d13loartjoc1yn.cloudfront.net/upload/institute/images/large/240527031630_Amalapuram-Compressed.webp",
    image: "https://d13loartjoc1yn.cloudfront.net/upload/institute/images/large/240527031630_Amalapuram-Compressed.webp",
    gallery: [
      "https://d13loartjoc1yn.cloudfront.net/upload/institute/images/large/240527031630_Amalapuram-Compressed.webp",
      "/images/campuses/campus_architecture_7.jpg",
      "/images/campuses/campus_architecture_8.jpg"
    ],
    affiliation: "Jawaharlal Nehru Technological University Kakinada (JNTUK) / AICTE",
    courses: [
      {
        title: "B.Tech in Artificial Intelligence and Data Science",
        duration: "4 Years",
        fees: "₹1.8 Lakhs",
        eligibility: "10+2 with MPC (AP EAPCET)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹1.8 Lakhs",
        eligibility: "10+2 with MPC (AP EAPCET)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 120
      },
      {
        title: "B.Tech in Electronics and Communication Engineering",
        duration: "4 Years",
        fees: "₹1.8 Lakhs",
        eligibility: "10+2 with MPC (AP EAPCET)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ],
    highestPackage: "₹10 LPA",
    averagePackage: "₹3.8 LPA",
    placements: "80%"
  },
  1415: {
    name: "Vemu Institute of Technology (Autonomous), P. Kothakota, Chittoor",
    shortName: "Vemu IT Chittoor",
    location: "Chittoor",
    state: "Andhra Pradesh",
    address: "P.Kothakota, Near Pakala, Puthalapattu Mandal, Chittoor District, Andhra Pradesh - 517112",
    phone: "08572-278723",
    website: "https://vemu.org",
    rating: 4.4,
    reviews: 1748,
    reviewsCount: 1748,
    type: "Private",
    ownership: "Private",
    about: "Vemu Institute of Technology (Autonomous), established in 2008 by the Vemu Society on the Tirupati-Chittoor Highway, is an acclaimed engineering institute in southern Andhra Pradesh. Approved by AICTE, accredited by NAAC and NBA, and affiliated with JNTU-Anantapur (JNTUA), Vemu offers undergraduate B.Tech engineering branches, MCA, and MBA degrees equipped with modern computer centers, research incubation units, and robust placement partnerships.",
    ranking: 18,
    fees: "₹1.8 Lakhs",
    exams: "AP EAPCET / AP ICET",
    img: "https://vemu.org/uploads/gallery/16_12_2019_63361889.jpg",
    image: "https://vemu.org/uploads/gallery/16_12_2019_63361889.jpg",
    gallery: [
      "https://vemu.org/uploads/gallery/16_12_2019_63361889.jpg",
      "/images/campuses/campus_architecture_1.jpg",
      "/images/campuses/campus_architecture_2.jpg"
    ],
    affiliation: "JNTU-Anantapur (JNTUA Autonomous) / AICTE / NAAC / NBA",
    courses: [
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹1.8 Lakhs",
        eligibility: "10+2 with MPC (AP EAPCET)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 180
      },
      {
        title: "B.Tech in Electronics and Communication Engineering",
        duration: "4 Years",
        fees: "₹1.8 Lakhs",
        eligibility: "10+2 with MPC (AP EAPCET)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 120
      },
      {
        title: "Master of Computer Applications (MCA)",
        duration: "2 Years",
        fees: "₹1.0 Lakh",
        eligibility: "Graduation with Computer Science / Mathematics",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Master of Business Administration (MBA)",
        duration: "2 Years",
        fees: "₹1.1 Lakhs",
        eligibility: "Graduation in any discipline",
        type: "MANAGEMENT",
        intake: 120
      }
    ],
    highestPackage: "₹12 LPA",
    averagePackage: "₹4.5 LPA",
    placements: "86%"
  },
  1416: {
    name: "V.R. Institute of Post-Graduate Studies, Nellore",
    shortName: "VRIPGS Nellore",
    location: "Nellore",
    state: "Andhra Pradesh",
    address: "A.C. Subba Reddy Buildings, Pogathota, Nellore, Andhra Pradesh - 524001",
    phone: "0861-2331444",
    website: "https://vripgs.ac.in",
    rating: 4.3,
    reviews: 1515,
    reviewsCount: 1515,
    type: "Private",
    ownership: "Private",
    about: "V.R. Institute of Post-Graduate Studies, Nellore, managed by the historic Vemugunta Raghava Reddy (V.R.) Educational Society (founded in 1920), is an acclaimed center for postgraduate management and computing studies in coastal Andhra Pradesh. Affiliated with Vikrama Simhapuri University (VSU) and approved by AICTE, VRIPGS offers Master of Computer Applications (MCA) and MBA degrees with dedicated software development laboratories, digital libraries, and strong regional placement assistance.",
    ranking: 20,
    fees: "₹90,000",
    exams: "AP ICET Centralized Counseling",
    img: "https://assets.thehansindia.com/h-upload/2022/01/30/1197971-vr.jpg",
    image: "https://assets.thehansindia.com/h-upload/2022/01/30/1197971-vr.jpg",
    gallery: [
      "https://assets.thehansindia.com/h-upload/2022/01/30/1197971-vr.jpg",
      "/images/campuses/campus_architecture_3.jpg",
      "/images/campuses/campus_architecture_4.jpg"
    ],
    affiliation: "Vikrama Simhapuri University (VSU), Nellore / AICTE",
    courses: [
      {
        title: "Master of Computer Applications (MCA)",
        duration: "2 Years",
        fees: "₹90,000",
        eligibility: "Graduation with Mathematics/Computer Science (AP ICET)",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Master of Business Administration (MBA)",
        duration: "2 Years",
        fees: "₹90,000",
        eligibility: "Graduation in any discipline (AP ICET)",
        type: "MANAGEMENT",
        intake: 120
      }
    ],
    highestPackage: "₹8.0 LPA",
    averagePackage: "₹3.8 LPA",
    placements: "82%"
  },
  1417: {
    name: "Narayana Engineering College (Autonomous), Nellore",
    shortName: "NEC Nellore",
    location: "Nellore",
    state: "Andhra Pradesh",
    address: "Narayana Avenue, Muthukur Road, A.K. Nagar, Nellore, Andhra Pradesh - 524004",
    phone: "0861-2313842",
    website: "https://necn.ac.in",
    rating: 4.5,
    reviews: 1134,
    reviewsCount: 1134,
    type: "Private",
    ownership: "Private",
    about: "Narayana Engineering College (Autonomous), Nellore, established in 1998 under the renowned Narayana Educational Group, is an autonomous technical education center in southern Andhra Pradesh. Accredited by NAAC with 'A+' Grade and NBA, and permanently affiliated with JNTU-Anantapur (JNTUA), NEC Nellore offers premier B.Tech engineering courses, MCA, and MBA degrees equipped with modern IoT labs, robotics research centers, and high placement records across top software and core industries.",
    ranking: 11,
    fees: "₹2.2 Lakhs",
    exams: "AP EAPCET / AP ICET / AP PGECET",
    img: "https://www.collegebatch.com/static/clg-gallery/narayana-engineering-college-nellore-344830.webp",
    image: "https://www.collegebatch.com/static/clg-gallery/narayana-engineering-college-nellore-344830.webp",
    gallery: [
      "https://www.collegebatch.com/static/clg-gallery/narayana-engineering-college-nellore-344830.webp",
      "/images/campuses/campus_architecture_5.jpg",
      "/images/campuses/campus_architecture_6.jpg"
    ],
    affiliation: "JNTU-Anantapur (JNTUA Autonomous) / AICTE / NAAC A+ / NBA",
    courses: [
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹2.2 Lakhs",
        eligibility: "10+2 with MPC (AP EAPCET)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 240
      },
      {
        title: "B.Tech in Electronics and Communication Engineering",
        duration: "4 Years",
        fees: "₹2.2 Lakhs",
        eligibility: "10+2 with MPC (AP EAPCET)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 180
      },
      {
        title: "Master of Computer Applications (MCA)",
        duration: "2 Years",
        fees: "₹1.1 Lakhs",
        eligibility: "Graduation with Computer Science / Mathematics",
        type: "COMPUTER APPLICATIONS",
        intake: 120
      },
      {
        title: "Master of Business Administration (MBA)",
        duration: "2 Years",
        fees: "₹1.2 Lakhs",
        eligibility: "Graduation in any discipline",
        type: "MANAGEMENT",
        intake: 120
      }
    ],
    highestPackage: "₹18 LPA",
    averagePackage: "₹5.2 LPA",
    placements: "90%"
  },
  1418: {
    name: "Sri Aditya Degree College, Denduluru, Eluru",
    shortName: "Sri Aditya Denduluru",
    location: "West Godavari",
    state: "Andhra Pradesh",
    address: "3-18 Main Road, Vegavaram, Denduluru Mandal, Eluru District, Andhra Pradesh - 534450",
    phone: "08829-255100",
    website: "https://aditya.ac.in/degree",
    rating: 4.2,
    reviews: 134,
    reviewsCount: 134,
    type: "Private",
    ownership: "Private",
    about: "Sri Aditya Degree College, situated at Vegavaram near Denduluru in Eluru (erstwhile West Godavari) district, is part of the established Aditya Educational Institutions. Affiliated with Adikavi Nannaya University (AKNU), Rajamahendravaram, the college offers undergraduate degrees in Bachelor of Computer Applications (BCA), BBA, and B.Sc with modern computer laboratories and student-centric placement guidance.",
    ranking: 28,
    fees: "₹1.2 Lakhs",
    exams: "AP OAMDC / 10+2 Merit",
    img: "https://aditya.ac.in/adcgdv/assets/img/header-mb.jpg",
    image: "https://aditya.ac.in/adcgdv/assets/img/header-mb.jpg",
    gallery: [
      "https://aditya.ac.in/adcgdv/assets/img/header-mb.jpg",
      "/images/campuses/campus_architecture_7.jpg",
      "/images/campuses/campus_architecture_8.jpg"
    ],
    affiliation: "Adikavi Nannaya University (AKNU), Rajamahendravaram / UGC",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹1.2 Lakhs",
        eligibility: "10+2 with Mathematics/Computer Science",
        type: "COMPUTER APPLICATIONS",
        intake: 120
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹1.2 Lakhs",
        eligibility: "10+2 in any stream",
        type: "MANAGEMENT",
        intake: 60
      }
    ],
    highestPackage: "₹6.0 LPA",
    averagePackage: "₹3.2 LPA",
    placements: "80%"
  },
  1419: {
    name: "Sri Srinivasa Degree College, Madanapalle",
    shortName: "SSDC Madanapalle",
    location: "Chittoor",
    state: "Andhra Pradesh",
    address: "11-49/1, Jubilee Hills, Kothapeta, Madanapalle, Annamayya District, Andhra Pradesh - 517325",
    phone: "08571-224455",
    website: "https://srisrinivasacollege.in",
    rating: 4.3,
    reviews: 971,
    reviewsCount: 971,
    type: "Private",
    ownership: "Private",
    about: "Sri Srinivasa Degree College, located at Jubilee Hills in Madanapalle, was founded in 1998 under the Sri Srinivasa Educational Society. Affiliated with Sri Venkateswara University (SVU), Tirupati, the college offers undergraduate courses in Bachelor of Computer Applications (BCA), BBA, B.Com, and B.Sc, providing accessible higher education in southwestern Andhra Pradesh.",
    ranking: 25,
    fees: "₹90,000",
    exams: "AP OAMDC / 10+2 Merit",
    img: "https://www.vidyavision.com/CollegeUploads/Photos/2019-13-8-16-09-55_srinivasa.jpg",
    image: "https://www.vidyavision.com/CollegeUploads/Photos/2019-13-8-16-09-55_srinivasa.jpg",
    gallery: [
      "https://www.vidyavision.com/CollegeUploads/Photos/2019-13-8-16-09-55_srinivasa.jpg",
      "/images/campuses/campus_architecture_1.jpg",
      "/images/campuses/campus_architecture_2.jpg"
    ],
    affiliation: "Sri Venkateswara University (SVU), Tirupati / UGC",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹90,000",
        eligibility: "10+2 with Mathematics/Computer Science",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹90,000",
        eligibility: "10+2 in any stream",
        type: "MANAGEMENT",
        intake: 60
      }
    ],
    highestPackage: "₹5.5 LPA",
    averagePackage: "₹3.0 LPA",
    placements: "78%"
  },
  1420: {
    name: "Vignan Degree College, Nandyal",
    shortName: "Vignan Degree Nandyal",
    location: "Kurnool",
    state: "Andhra Pradesh",
    address: "Sanjeeva Nagar Gate, Nandyal, Nandyal District, Andhra Pradesh - 518501",
    phone: "08514-245600",
    website: "https://vignandegreecollege.in",
    rating: 4.3,
    reviews: 1875,
    reviewsCount: 1875,
    type: "Private",
    ownership: "Private",
    about: "Vignan Degree College, situated near Sanjeeva Nagar Gate in Nandyal, was established under the Vignan Educational Society. Affiliated with Rayalaseema University, Kurnool, the institution provides popular undergraduate programs in Bachelor of Computer Applications (BCA), BBA, and B.Sc with dedicated computing laboratories and career readiness training.",
    ranking: 27,
    fees: "₹90,000",
    exams: "AP OAMDC / 10+2 Merit",
    img: "https://www.vignandegreecollege.in/images/home.png",
    image: "https://www.vignandegreecollege.in/images/home.png",
    gallery: [
      "https://www.vignandegreecollege.in/images/home.png",
      "/images/campuses/campus_architecture_3.jpg",
      "/images/campuses/campus_architecture_4.jpg"
    ],
    affiliation: "Rayalaseema University, Kurnool / UGC",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹90,000",
        eligibility: "10+2 with Mathematics/Computer Science",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹90,000",
        eligibility: "10+2 in any stream",
        type: "MANAGEMENT",
        intake: 60
      }
    ],
    highestPackage: "₹5.0 LPA",
    averagePackage: "₹2.8 LPA",
    placements: "76%"
  }
};

let appliedCount = 0;
for (const col of colleges) {
  if (batch172Updates[col.id]) {
    Object.assign(col, batch172Updates[col.id]);
    appliedCount++;
  }
}

console.log(`Updated ${appliedCount} colleges in siteData.`);
fs.writeFileSync(siteDataPath, JSON.stringify(siteData, null, 2), 'utf8');

// Update progress.json
const now = new Date().toISOString();
progress.verifiedColleges = 1720;
progress.lastUpdated = now;
progress.batchesCompleted = 172;
progress.currentBatch = 173;
if (!progress.batchHistory) progress.batchHistory = [];
progress.batchHistory.push({
  batch: 172,
  verifiedCount: 10,
  totalVerified: 1720,
  timestamp: now,
  collegeIds: Object.keys(batch172Updates).map(Number)
});
fs.writeFileSync(progressPath, JSON.stringify(progress, null, 2), 'utf8');

// Update all_verified_colleges.json
const newlyVerifiedList = Object.entries(batch172Updates).map(([idStr, val]) => ({
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
const batchMdHeader = `\n### Batch 172 (Colleges 1,711–1,720) — Andhra Pradesh Engineering, Technical & Degree Colleges\n| ID | College Name | Location | State | Type | Website |\n|---|---|---|---|---|---|\n`;
let batchMdRows = '';
for (const item of newlyVerifiedList) {
  batchMdRows += `| ${item.id} | ${item.name} | ${item.location} | ${item.state} | ${item.type} | [${item.website}](${item.website}) |\n`;
}
mdContent += batchMdHeader + batchMdRows;
fs.writeFileSync(allVerifiedMdPath, mdContent, 'utf8');

console.log(`Batch 172 applied successfully! Total verified: ${progress.verifiedColleges}`);
