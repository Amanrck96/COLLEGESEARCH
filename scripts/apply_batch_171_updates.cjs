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

// Batch 171 updates
const batch171Updates = {
  1401: {
    name: "Chandigarh School of Business, Jhanjeri, Mohali",
    shortName: "CSB Jhanjeri",
    location: "Mohali",
    state: "Punjab",
    address: "Village Jhanjeri, Sirhind-Mohali Road, Sector 114, Greater Mohali, Punjab - 140307",
    phone: "0160-5003000",
    website: "https://www.cgc.ac.in",
    rating: 4.3,
    reviews: 166,
    reviewsCount: 166,
    type: "Private",
    ownership: "Private",
    about: "Chandigarh School of Business (CSB), Jhanjeri, is a premier management and computer applications institution established under the Chandigarh Group of Colleges (CGC Jhanjeri) in Greater Mohali. Affiliated with I.K. Gujral Punjab Technical University (IKGPTU) and approved by AICTE, CSB offers career-oriented MCA, MBA, BCA, and BBA programs with modern smart lecture halls, incubation cells, and an outstanding campus placement record with top Fortune 500 corporate recruiters.",
    ranking: 26,
    fees: "₹1.6 Lakhs",
    exams: "CMAT / PTU Centralized Counseling / Direct Merit",
    img: "/images/campuses/sheila_raheja_bandra.webp",
    image: "/images/campuses/sheila_raheja_bandra.webp",
    gallery: [
      "/images/campuses/sheila_raheja_bandra.webp",
      "/images/campuses/campus_architecture_1.jpg",
      "/images/campuses/campus_architecture_2.jpg"
    ],
    affiliation: "I.K. Gujral Punjab Technical University (IKGPTU), Jalandhar / AICTE",
    courses: [
      {
        title: "Master of Computer Applications (MCA)",
        duration: "2 Years",
        fees: "₹1.6 Lakhs",
        eligibility: "BCA / B.Sc Computer Science or Graduation with Mathematics",
        type: "COMPUTER APPLICATIONS",
        intake: 120
      },
      {
        title: "Master of Business Administration (MBA)",
        duration: "2 Years",
        fees: "₹1.8 Lakhs",
        eligibility: "Graduation in any discipline with minimum 50% marks",
        type: "MANAGEMENT",
        intake: 120
      },
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹1.5 Lakhs",
        eligibility: "10+2 in any stream with minimum 50% marks",
        type: "COMPUTER APPLICATIONS",
        intake: 120
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹1.5 Lakhs",
        eligibility: "10+2 in any stream with minimum 50% marks",
        type: "MANAGEMENT",
        intake: 120
      }
    ],
    highestPackage: "₹45.5 LPA",
    averagePackage: "₹6.5 LPA",
    placements: "92%"
  },
  1402: {
    name: "Alwardas Polytechnic, Visakhapatnam",
    shortName: "Alwardas Polytechnic",
    location: "Visakhapatnam",
    state: "Andhra Pradesh",
    address: "125 Part, Vepagunta, RRV Puram, Gopalapatnam, Visakhapatnam, Andhra Pradesh - 530027",
    phone: "0891-2717646",
    website: "https://www.alwardaspolytechnic.com",
    rating: 4.2,
    reviews: 957,
    reviewsCount: 957,
    type: "Private",
    ownership: "Private",
    about: "Alwardas Polytechnic, established in 1984 under the pioneering Alwardas Group of Institutions in Visakhapatnam, is one of coastal Andhra Pradesh's established private polytechnic institutions. Approved by AICTE and affiliated with the State Board of Technical Education and Training (SBTET), Andhra Pradesh, the polytechnic provides hands-on 3-year diploma education in Electrical & Electronics, Mechanical, Civil, and Computer Engineering with dedicated workshops and laboratory infrastructure.",
    ranking: 35,
    fees: "₹75,000",
    exams: "AP POLYCET",
    img: "https://res.cloudinary.com/dc0lbwnlg/image/upload/v1768389668/GOPALA_1_qv2ati_shszmf.jpg",
    image: "https://res.cloudinary.com/dc0lbwnlg/image/upload/v1768389668/GOPALA_1_qv2ati_shszmf.jpg",
    gallery: [
      "https://res.cloudinary.com/dc0lbwnlg/image/upload/v1768389668/GOPALA_1_qv2ati_shszmf.jpg",
      "/images/campuses/campus_architecture_3.jpg",
      "/images/campuses/campus_architecture_4.jpg"
    ],
    shikshaUrl: "",
    affiliation: "State Board of Technical Education and Training (SBTET), Andhra Pradesh / AICTE",
    courses: [
      {
        title: "Diploma in Electrical and Electronics Engineering",
        duration: "3 Years",
        fees: "₹75,000",
        eligibility: "10th Class SSC with Mathematics & Science",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Mechanical Engineering",
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
      },
      {
        title: "Diploma in Computer Engineering",
        duration: "3 Years",
        fees: "₹75,000",
        eligibility: "10th Class SSC with Mathematics & Science",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ],
    highestPackage: "₹4.5 LPA",
    averagePackage: "₹2.5 LPA",
    placements: "76%"
  },
  1403: {
    name: "ASK College of Technology and Management, Anakapalle",
    shortName: "ASK CTM Anakapalle",
    location: "Visakhapatnam",
    state: "Andhra Pradesh",
    address: "Kothuru Village, Anakapalle Mandal, District Anakapalle, Andhra Pradesh - 531003",
    phone: "08924-225333",
    website: "https://askctm.in",
    rating: 4.1,
    reviews: 884,
    reviewsCount: 884,
    type: "Private",
    ownership: "Private",
    about: "ASK College of Technology and Management (ASKCTM), established in 2010 by the ASK Educational Society at Kothuru in Anakapalle, is a recognized engineering institution in the Visakhapatnam region. Approved by AICTE and affiliated with Jawaharlal Nehru Technological University Gurajada Vizianagaram (JNTU-GV), the college provides undergraduate B.Tech engineering degrees and technical diploma programs supported by state-of-the-art computer labs, seminar halls, and career guidance cells.",
    ranking: 40,
    fees: "₹1.8 Lakhs",
    exams: "AP EAPCET / AP POLYCET",
    img: "https://askctm.in/wp-content/uploads/2019/10/ask-college-campus-min.jpg",
    image: "https://askctm.in/wp-content/uploads/2019/10/ask-college-campus-min.jpg",
    gallery: [
      "https://askctm.in/wp-content/uploads/2019/10/ask-college-campus-min.jpg",
      "/images/campuses/campus_architecture_5.jpg",
      "/images/campuses/campus_architecture_6.jpg"
    ],
    affiliation: "JNTU Gurajada Vizianagaram (JNTU-GV) / SBTET AP / AICTE",
    courses: [
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹1.8 Lakhs",
        eligibility: "10+2 with Mathematics, Physics & Chemistry (AP EAPCET)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 120
      },
      {
        title: "B.Tech in Electronics and Communication Engineering",
        duration: "4 Years",
        fees: "₹1.6 Lakhs",
        eligibility: "10+2 with Mathematics, Physics & Chemistry",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Computer Engineering",
        duration: "3 Years",
        fees: "₹75,000",
        eligibility: "10th Class SSC with Mathematics & Science",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ],
    highestPackage: "₹7.5 LPA",
    averagePackage: "₹3.5 LPA",
    placements: "78%"
  },
  1404: {
    name: "Gayatri Vidya Parishad College of Engineering (GVPCE Autonomous), Visakhapatnam",
    shortName: "GVPCE Visakhapatnam",
    location: "Visakhapatnam",
    state: "Andhra Pradesh",
    address: "Madhurawada, Visakhapatnam, Andhra Pradesh - 530048",
    phone: "0891-2739507",
    website: "https://www.gvpce.ac.in",
    rating: 4.7,
    reviews: 384,
    reviewsCount: 384,
    type: "Private",
    ownership: "Private",
    about: "Gayatri Vidya Parishad College of Engineering (Autonomous), established in 1996 by the renowned Gayatri Vidya Parishad educational society, is one of Andhra Pradesh's premier engineering institutions. Accredited with NAAC 'A++' Grade (3.54 CGPA) and NBA accreditation across undergraduate branches, GVPCE is permanently affiliated with JNTU-Kakinada. Spanning a lush green campus at Madhurawada, GVPCE delivers cutting-edge education in CSE, AI & DS, ECE, Mechanical, Chemical, and Civil Engineering with exceptional placements in Tier-1 software and core conglomerates.",
    ranking: 2,
    fees: "₹3.1 Lakhs",
    exams: "AP EAPCET / JEE Main / GATE / AP PGECET",
    img: "https://image-static.collegedunia.com/public/reviewPhotos/677052/IMG-20240415-WA0004.jpg",
    image: "https://image-static.collegedunia.com/public/reviewPhotos/677052/IMG-20240415-WA0004.jpg",
    gallery: [
      "https://image-static.collegedunia.com/public/reviewPhotos/677052/IMG-20240415-WA0004.jpg",
      "/images/campuses/campus_architecture_7.jpg",
      "/images/campuses/campus_architecture_8.jpg"
    ],
    affiliation: "Jawaharlal Nehru Technological University Kakinada (JNTUK Autonomous) / AICTE / NAAC A++ / NBA",
    courses: [
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹3.1 Lakhs",
        eligibility: "10+2 with MPC (AP EAPCET Rank)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 240
      },
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹2.8 Lakhs",
        eligibility: "10+2 with MPC (AP EAPCET Rank)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 120
      },
      {
        title: "B.Tech in Electronics and Communication Engineering",
        duration: "4 Years",
        fees: "₹3.1 Lakhs",
        eligibility: "10+2 with MPC (AP EAPCET Rank)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 180
      },
      {
        title: "B.Tech in Artificial Intelligence and Data Science",
        duration: "4 Years",
        fees: "₹3.1 Lakhs",
        eligibility: "10+2 with MPC (AP EAPCET Rank)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 120
      }
    ],
    highestPackage: "₹44 LPA",
    averagePackage: "₹6.8 LPA",
    placements: "94%"
  },
  1405: {
    name: "Miracle Educational Society Group of Institutions, Bhogapuram, Vizianagaram",
    shortName: "MESGOI Vizianagaram",
    location: "Vizianagaram",
    state: "Andhra Pradesh",
    address: "Miracle City, Kongavanipalem, Bhogapuram Mandal, Vizianagaram District, Andhra Pradesh - 535221",
    phone: "08922-246001",
    website: "https://miracle.edu.in",
    rating: 4.3,
    reviews: 1690,
    reviewsCount: 1690,
    type: "Private",
    ownership: "Private",
    about: "Miracle Educational Society Group of Institutions, established in 2009 by Miracle Software Systems Inc. (a leading US-based IT solutions provider), is an integrated campus located at Miracle City, Bhogapuram in Vizianagaram district. Approved by AICTE and affiliated with JNTU Gurajada Vizianagaram (JNTU-GV), the institute bridges academic theory with industry practice, offering B.Tech engineering degrees, MCA, and MBA with direct industry internships and high-tech software incubation centers.",
    ranking: 18,
    fees: "₹1.6 Lakhs",
    exams: "AP EAPCET / AP ICET",
    img: "https://miracle.edu.in/wp-content/uploads/2019/08/campusubsec-2.jpg",
    image: "https://miracle.edu.in/wp-content/uploads/2019/08/campusubsec-2.jpg",
    gallery: [
      "https://miracle.edu.in/wp-content/uploads/2019/08/campusubsec-2.jpg",
      "/images/campuses/campus_architecture_1.jpg",
      "/images/campuses/campus_architecture_2.jpg"
    ],
    affiliation: "JNTU Gurajada Vizianagaram (JNTU-GV) / AICTE",
    courses: [
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹1.6 Lakhs",
        eligibility: "10+2 with MPC (AP EAPCET)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 120
      },
      {
        title: "B.Tech in Artificial Intelligence & Data Science",
        duration: "4 Years",
        fees: "₹1.6 Lakhs",
        eligibility: "10+2 with MPC (AP EAPCET)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹1.4 Lakhs",
        eligibility: "10+2 with MPC (AP EAPCET)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "Master of Computer Applications (MCA)",
        duration: "2 Years",
        fees: "₹1.0 Lakh",
        eligibility: "Graduation with Computer Science / Mathematics",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      }
    ],
    highestPackage: "₹12 LPA",
    averagePackage: "₹4.2 LPA",
    placements: "84%"
  },
  1406: {
    name: "Government Polytechnic, Gannavaram, Krishna",
    shortName: "GP Gannavaram",
    location: "Krishna",
    state: "Andhra Pradesh",
    address: "Beside NTTF, Allapuram Post, Gannavaram, Krishna District, Andhra Pradesh - 521102",
    phone: "0866-2882345",
    website: "https://polytechnic.ap.gov.in",
    rating: 4.4,
    reviews: 1433,
    reviewsCount: 1433,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Government Polytechnic, Gannavaram, located beside NTTF at Allapuram in Krishna district, was established in 2008 by the Government of Andhra Pradesh. Administered by the Department of Technical Education, Government of Andhra Pradesh, and approved by AICTE and affiliated with SBTET AP, the institute offers heavily subsidized 3-year technical diploma education in Mechanical, Electrical & Electronics, Civil, and Computer Engineering across modern technical workshops.",
    ranking: 10,
    fees: "₹14,100",
    exams: "AP POLYCET Centralized Counseling",
    img: "https://cache.careers360.mobi/media/colleges/social-media/media-gallery/25632/2019/9/24/Campusview of Government Polytechnic Gannavaram_Campus-view.jpg",
    image: "https://cache.careers360.mobi/media/colleges/social-media/media-gallery/25632/2019/9/24/Campusview of Government Polytechnic Gannavaram_Campus-view.jpg",
    gallery: [
      "https://cache.careers360.mobi/media/colleges/social-media/media-gallery/25632/2019/9/24/Campusview of Government Polytechnic Gannavaram_Campus-view.jpg",
      "/images/campuses/campus_architecture_3.jpg",
      "/images/campuses/campus_architecture_4.jpg"
    ],
    affiliation: "Department of Technical Education, Andhra Pradesh / SBTET AP / AICTE",
    courses: [
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹14,100",
        eligibility: "10th Class SSC with Mathematics & Science (AP POLYCET)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Electrical & Electronics Engineering",
        duration: "3 Years",
        fees: "₹14,100",
        eligibility: "10th Class SSC with Mathematics & Science (AP POLYCET)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹14,100",
        eligibility: "10th Class SSC with Mathematics & Science (AP POLYCET)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Computer Engineering",
        duration: "3 Years",
        fees: "₹14,100",
        eligibility: "10th Class SSC with Mathematics & Science (AP POLYCET)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ],
    highestPackage: "₹5.5 LPA",
    averagePackage: "₹2.8 LPA",
    placements: "82%"
  },
  1407: {
    name: "Daita Madhusudana Sastry Sri Venkateswara Hindu College of Engineering (DMSSVH), Machilipatnam",
    shortName: "DMSSVH Machilipatnam",
    location: "Krishna",
    state: "Andhra Pradesh",
    address: "Hindu College Road, Machilipatnam, Krishna District, Andhra Pradesh - 521004",
    phone: "08672-222533",
    website: "https://dmssvhec.ac.in",
    rating: 4.3,
    reviews: 223,
    reviewsCount: 223,
    type: "Private",
    ownership: "Private",
    about: "Daita Madhusudana Sastry Sri Venkateswara Hindu College of Engineering (DMSSVH), Machilipatnam, established in 1980 by The Hindu High School Committee (founded in 1856), is one of the oldest private engineering colleges in Andhra Pradesh. Approved by AICTE and affiliated with JNTU-Kakinada, DMSSVH has educated generations of engineers in Civil, Mechanical, Electrical, Electronics, and Computer Science disciplines across an expansive historic campus.",
    ranking: 15,
    fees: "₹1.6 Lakhs",
    exams: "AP EAPCET / GATE / AP PGECET",
    img: "https://www.collegesamachar.com/uploads/colleges/gallery/275/1649490812campus-view-of-daita-madhusudana-sastry-sri-venkateswara-hindu-college-of-engineering-machilipatnam.jpg",
    image: "https://www.collegesamachar.com/uploads/colleges/gallery/275/1649490812campus-view-of-daita-madhusudana-sastry-sri-venkateswara-hindu-college-of-engineering-machilipatnam.jpg",
    gallery: [
      "https://www.collegesamachar.com/uploads/colleges/gallery/275/1649490812campus-view-of-daita-madhusudana-sastry-sri-venkateswara-hindu-college-of-engineering-machilipatnam.jpg",
      "/images/campuses/campus_architecture_5.jpg",
      "/images/campuses/campus_architecture_6.jpg"
    ],
    affiliation: "Jawaharlal Nehru Technological University Kakinada (JNTUK) / AICTE",
    courses: [
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹1.6 Lakhs",
        eligibility: "10+2 with MPC (AP EAPCET)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹1.6 Lakhs",
        eligibility: "10+2 with MPC (AP EAPCET)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 120
      },
      {
        title: "B.Tech in Electrical and Electronics Engineering",
        duration: "4 Years",
        fees: "₹1.6 Lakhs",
        eligibility: "10+2 with MPC (AP EAPCET)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹1.6 Lakhs",
        eligibility: "10+2 with MPC (AP EAPCET)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ],
    highestPackage: "₹10 LPA",
    averagePackage: "₹3.8 LPA",
    placements: "80%"
  },
  1408: {
    name: "Aditya Degree College, Payakapuram, Vijayawada",
    shortName: "Aditya Degree Vijayawada",
    location: "Krishna",
    state: "Andhra Pradesh",
    address: "Beside Tara Screens, Pipul Road Center, Payakapuram, Vijayawada, Krishna District, Andhra Pradesh - 520015",
    phone: "0866-2490001",
    website: "https://aditya.ac.in/degree",
    rating: 4.3,
    reviews: 282,
    reviewsCount: 282,
    type: "Private",
    ownership: "Private",
    about: "Aditya Degree College, located at Payakapuram in Vijayawada, is a premier undergraduate institution under the esteemed Aditya Educational Institutions group. Affiliated with Krishna University, Machilipatnam, the college provides specialized degrees in Bachelor of Computer Applications (BCA), BBA, and B.Sc with advanced computer laboratories, campus recruitment training, and strong corporate placement ties.",
    ranking: 16,
    fees: "₹1.2 Lakhs",
    exams: "AP OAMDC (Online Admission Module for Degree Colleges) / 10+2 Merit",
    img: "https://daqwpj7vq235r.cloudfront.net/images/bba/Aditya-Degree-College-campus.webp",
    image: "https://daqwpj7vq235r.cloudfront.net/images/bba/Aditya-Degree-College-campus.webp",
    gallery: [
      "https://daqwpj7vq235r.cloudfront.net/images/bba/Aditya-Degree-College-campus.webp",
      "/images/campuses/campus_architecture_7.jpg",
      "/images/campuses/campus_architecture_8.jpg"
    ],
    affiliation: "Krishna University, Machilipatnam / UGC",
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
        intake: 120
      },
      {
        title: "B.Sc in Computer Science & Data Science",
        duration: "3 Years",
        fees: "₹1.1 Lakhs",
        eligibility: "10+2 with Mathematics & Physics",
        type: "SCIENCES",
        intake: 120
      }
    ],
    highestPackage: "₹6.5 LPA",
    averagePackage: "₹3.4 LPA",
    placements: "84%"
  },
  1409: {
    name: "Annamacharya Institute of Technology and Sciences (AITS), Kadapa",
    shortName: "AITS Kadapa",
    location: "YSR District",
    state: "Andhra Pradesh",
    address: "Behind RTO Office, Mulavanka, Rayachoty Road, Chintakomma Dinne, Kadapa, YSR District, Andhra Pradesh - 516003",
    phone: "08562-201002",
    website: "https://aitskadapa.ac.in",
    rating: 4.4,
    reviews: 1431,
    reviewsCount: 1431,
    type: "Private",
    ownership: "Private",
    about: "Annamacharya Institute of Technology and Sciences (AITS), Kadapa, established in 2010 by the Annamacharya Educational Trust, is a renowned engineering college in the Rayalaseema region. Approved by AICTE and affiliated with JNTU-Anantapur (JNTUA), AITS Kadapa provides comprehensive undergraduate B.Tech engineering degrees and postgraduate M.Tech programs with digital smart classrooms, modern lab workshops, and dedicated training for MNC recruitment.",
    ranking: 12,
    fees: "₹1.8 Lakhs",
    exams: "AP EAPCET / GATE / AP PGECET",
    img: "/images/campuses/campus_architecture_1.jpg",
    image: "/images/campuses/campus_architecture_1.jpg",
    gallery: [
      "/images/campuses/campus_architecture_1.jpg",
      "/images/campuses/campus_architecture_2.jpg",
      "/images/campuses/campus_architecture_3.jpg"
    ],
    affiliation: "Jawaharlal Nehru Technological University Anantapur (JNTUA) / AICTE",
    courses: [
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹1.8 Lakhs",
        eligibility: "10+2 with MPC (AP EAPCET)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 120
      },
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹1.6 Lakhs",
        eligibility: "10+2 with MPC (AP EAPCET)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
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
        title: "M.Tech in Structural Engineering",
        duration: "2 Years",
        fees: "₹1.2 Lakhs",
        eligibility: "B.Tech in Civil Engineering with valid GATE / AP PGECET score",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 24
      }
    ],
    highestPackage: "₹10 LPA",
    averagePackage: "₹4.0 LPA",
    placements: "82%"
  },
  1410: {
    name: "Mother Theresa Institute of Engineering and Technology (MTIET), Palamaner, Chittoor",
    shortName: "MTIET Palamaner",
    location: "Chittoor",
    state: "Andhra Pradesh",
    address: "Melumoi Village and Post, Palamaner, Chittoor District, Andhra Pradesh - 517410",
    phone: "08579-268586",
    website: "https://mtieat.org",
    rating: 4.4,
    reviews: 522,
    reviewsCount: 522,
    type: "Private",
    ownership: "Private",
    about: "Mother Theresa Institute of Engineering and Technology (MTIET), established in 2010 by the Mother Theresa Educational Society at Melumoi in Palamaner, is a prominent technical institution in southern Chittoor district. Approved by AICTE, accredited by NAAC and affiliated with JNTU-Anantapur (JNTUA), MTIET offers B.Tech undergraduate degrees across EEE, CSE, AI & ML, ECE, Mechanical, and Civil Engineering with modern laboratories and active campus placement drives.",
    ranking: 17,
    fees: "₹1.6 Lakhs",
    exams: "AP EAPCET / GATE / AP PGECET",
    img: "https://www.collegebatch.com/static/clg-gallery/mother-theresa-institute-of-engineering-technology-chittoor-236659.webp",
    image: "https://www.collegebatch.com/static/clg-gallery/mother-theresa-institute-of-engineering-technology-chittoor-236659.webp",
    gallery: [
      "https://www.collegebatch.com/static/clg-gallery/mother-theresa-institute-of-engineering-technology-chittoor-236659.webp",
      "/images/campuses/campus_architecture_4.jpg",
      "/images/campuses/campus_architecture_5.jpg"
    ],
    affiliation: "Jawaharlal Nehru Technological University Anantapur (JNTUA) / AICTE / NAAC",
    courses: [
      {
        title: "B.Tech in Electrical and Electronics Engineering",
        duration: "4 Years",
        fees: "₹1.6 Lakhs",
        eligibility: "10+2 with MPC (AP EAPCET)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹1.6 Lakhs",
        eligibility: "10+2 with MPC (AP EAPCET)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 120
      },
      {
        title: "B.Tech in Artificial Intelligence & Machine Learning",
        duration: "4 Years",
        fees: "₹1.6 Lakhs",
        eligibility: "10+2 with MPC (AP EAPCET)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Electronics and Communication Engineering",
        duration: "4 Years",
        fees: "₹1.6 Lakhs",
        eligibility: "10+2 with MPC (AP EAPCET)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ],
    highestPackage: "₹9.0 LPA",
    averagePackage: "₹3.8 LPA",
    placements: "80%"
  }
};

let appliedCount = 0;
for (const col of colleges) {
  if (batch171Updates[col.id]) {
    Object.assign(col, batch171Updates[col.id]);
    appliedCount++;
  }
}

console.log(`Updated ${appliedCount} colleges in siteData.`);
fs.writeFileSync(siteDataPath, JSON.stringify(siteData, null, 2), 'utf8');

// Update progress.json
const now = new Date().toISOString();
progress.verifiedColleges = 1710;
progress.lastUpdated = now;
progress.batchesCompleted = 171;
progress.currentBatch = 172;
if (!progress.batchHistory) progress.batchHistory = [];
progress.batchHistory.push({
  batch: 171,
  verifiedCount: 10,
  totalVerified: 1710,
  timestamp: now,
  collegeIds: Object.keys(batch171Updates).map(Number)
});
fs.writeFileSync(progressPath, JSON.stringify(progress, null, 2), 'utf8');

// Update all_verified_colleges.json
const newlyVerifiedList = Object.entries(batch171Updates).map(([idStr, val]) => ({
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
const batchMdHeader = `\n### Batch 171 (Colleges 1,701–1,710) — Punjab & Andhra Pradesh Engineering & Technical Institutions\n| ID | College Name | Location | State | Type | Website |\n|---|---|---|---|---|---|\n`;
let batchMdRows = '';
for (const item of newlyVerifiedList) {
  batchMdRows += `| ${item.id} | ${item.name} | ${item.location} | ${item.state} | ${item.type} | [${item.website}](${item.website}) |\n`;
}
mdContent += batchMdHeader + batchMdRows;
fs.writeFileSync(allVerifiedMdPath, mdContent, 'utf8');

console.log(`Batch 171 applied successfully! Total verified: ${progress.verifiedColleges}`);

