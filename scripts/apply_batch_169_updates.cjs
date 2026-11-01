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

// Batch 169 updates
const batch169Updates = {
  1381: {
    name: "Government Polytechnic College, Patiala",
    shortName: "GPC Patiala",
    location: "Patiala",
    state: "Punjab",
    address: "S.S.T. Nagar, Rajpura Road, Patiala, Punjab - 147001",
    phone: "0175-2370046",
    website: "https://gpcpatiala.ac.in",
    rating: 4.4,
    reviews: 137,
    reviewsCount: 137,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Government Polytechnic College, Patiala, established in 1956 by the Government of Punjab on Rajpura Road, is one of the oldest and most prestigious state technical institutes in northern India. Governed by the Department of Technical Education & Industrial Training, Punjab, affiliated with PSBTE & IT Chandigarh and approved by AICTE, GPC Patiala delivers heavily subsidized 3-year diploma education in Computer Science, Mechanical, Civil, Electrical, and Electronics Engineering across a 25-acre green campus.",
    ranking: 5,
    fees: "₹66,000",
    exams: "PSBTE Centralized Counseling / 10th Merit Based",
    img: "https://image-static.collegedunia.com/public/college_data/images/campusimage/1599817594gpcg.jpg",
    image: "https://image-static.collegedunia.com/public/college_data/images/campusimage/1599817594gpcg.jpg",
    gallery: [
      "https://image-static.collegedunia.com/public/college_data/images/campusimage/1599817594gpcg.jpg",
      "/images/campuses/campus_architecture_1.jpg",
      "/images/campuses/campus_architecture_2.jpg"
    ],
    affiliation: "Department of Technical Education & Industrial Training, Punjab / PSBTE & IT / AICTE",
    courses: [
      {
        title: "Diploma in Computer Science & Engineering",
        duration: "3 Years",
        fees: "₹66,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹66,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹66,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹66,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Electronics & Communication Engineering",
        duration: "3 Years",
        fees: "₹66,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ],
    highestPackage: "₹6.8 LPA",
    averagePackage: "₹3.6 LPA",
    placements: "88%"
  },
  1382: {
    name: "Government Institute of Garment Technology (GIGT), Amritsar",
    shortName: "GIGT Amritsar",
    location: "Amritsar",
    state: "Punjab",
    address: "Majitha Road By-Pass, Amritsar, Punjab - 143001",
    phone: "0183-2420546",
    website: "https://gigtasr.org.in",
    rating: 4.3,
    reviews: 233,
    reviewsCount: 233,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Government Institute of Garment Technology (GIGT), Amritsar, established by the Department of Technical Education & Industrial Training, Punjab, is an esteemed specialized government institution dedicated to apparel design, garment manufacturing, and textile technology. Affiliated with PSBTE & IT and approved by AICTE, GIGT provides practical diploma qualifications equipped with modern computerized sewing machines, pattern-making studios, and industrial fabric testing labs.",
    ranking: 11,
    fees: "₹66,000",
    exams: "PSBTE Centralized Counseling / 10th Merit Based",
    img: "https://www.gkseries.com/blog/wp-content/uploads/2020/03/Government-Institute-of-Garment-Technology-Amritsar-767x432.jpg",
    image: "https://www.gkseries.com/blog/wp-content/uploads/2020/03/Government-Institute-of-Garment-Technology-Amritsar-767x432.jpg",
    gallery: [
      "https://www.gkseries.com/blog/wp-content/uploads/2020/03/Government-Institute-of-Garment-Technology-Amritsar-767x432.jpg",
      "/images/campuses/campus_architecture_3.jpg",
      "/images/campuses/campus_architecture_4.jpg"
    ],
    affiliation: "Department of Technical Education & Industrial Training, Punjab / PSBTE & IT / AICTE",
    courses: [
      {
        title: "Diploma in Garment Technology",
        duration: "3 Years",
        fees: "₹66,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 40
      },
      {
        title: "Diploma in Fashion Designing & Clothing Technology",
        duration: "3 Years",
        fees: "₹66,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ],
    highestPackage: "₹5.5 LPA",
    averagePackage: "₹3.0 LPA",
    placements: "84%"
  },
  1383: {
    name: "Regional Polytechnic College, Behman Diwana, Bathinda",
    shortName: "RPC Bathinda",
    location: "Bathinda",
    state: "Punjab",
    address: "Bathinda-Malout Road, Village Behman Diwana, Bathinda, Punjab - 151001",
    phone: "0164-2863400",
    website: "https://www.regionalinstitutes.com",
    rating: 4.1,
    reviews: 521,
    reviewsCount: 521,
    type: "Private",
    ownership: "Private",
    about: "Regional Polytechnic College, situated on the Bathinda-Malout Road at Behman Diwana in Bathinda district, is a leading technical diploma institution under the Regional Group of Institutions. Approved by AICTE and affiliated with PSBTE & IT Chandigarh, the polytechnic offers 3-year diploma courses in Civil, Mechanical, Electrical, and Computer Engineering, supported by expansive workshop bays and regular campus placement drives.",
    ranking: 42,
    fees: "₹85,000",
    exams: "PSBTE Counseling / 10th Merit Based",
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgK4qqoBeWrD4BcvGrrTNl_DXd34b1HC5pcOCb4MdIJrFZcikaHKPyT4qs1qRjum9e6my39BCQ7zgtuU-PlUk6cAnNVY0aHWTawWkficsAtSvZ5aRAw1UB0DS2L4E0bBn7G6MT282rTwpI/s1600/Picture1.png",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgK4qqoBeWrD4BcvGrrTNl_DXd34b1HC5pcOCb4MdIJrFZcikaHKPyT4qs1qRjum9e6my39BCQ7zgtuU-PlUk6cAnNVY0aHWTawWkficsAtSvZ5aRAw1UB0DS2L4E0bBn7G6MT282rTwpI/s1600/Picture1.png",
    gallery: [
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgK4qqoBeWrD4BcvGrrTNl_DXd34b1HC5pcOCb4MdIJrFZcikaHKPyT4qs1qRjum9e6my39BCQ7zgtuU-PlUk6cAnNVY0aHWTawWkficsAtSvZ5aRAw1UB0DS2L4E0bBn7G6MT282rTwpI/s1600/Picture1.png",
      "/images/campuses/campus_architecture_5.jpg",
      "/images/campuses/campus_architecture_6.jpg"
    ],
    affiliation: "Punjab State Board of Technical Education & Industrial Training (PSBTE & IT) / AICTE",
    courses: [
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹85,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹85,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹85,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Computer Science & Engineering",
        duration: "3 Years",
        fees: "₹85,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ],
    highestPackage: "₹5.0 LPA",
    averagePackage: "₹2.7 LPA",
    placements: "75%"
  },
  1384: {
    name: "Khalsa College (ASR) of Technology and Business Studies, Mohali",
    shortName: "Khalsa College Mohali",
    location: "Mohali",
    state: "Punjab",
    address: "Phase 3A, Sector 53, SAS Nagar (Mohali), Punjab - 160059",
    phone: "0172-2274427",
    website: "https://kcmohali.org",
    rating: 4.3,
    reviews: 356,
    reviewsCount: 356,
    type: "Private",
    ownership: "Private",
    about: "Khalsa College of Technology and Business Studies, Mohali, established in Phase 3A by the historic Khalsa College Charitable Society, Amritsar (founded in 1892), is a distinguished co-educational institution in the Chandigarh Tricity. Affiliated with Punjabi University, Patiala, the college offers undergraduate and postgraduate degrees in Computer Applications (BCA), Business Administration (BBA), and Commerce, featuring modern smart classrooms, high-speed computer labs, and a vibrant cultural heritage.",
    ranking: 18,
    fees: "₹1.2 Lakhs",
    exams: "Direct Merit / Punjabi University Centralized Counseling",
    img: "https://1.bp.blogspot.com/-jKFzG8o4bTQ/YRk8jUlJMrI/AAAAAAAAAB8/zJ23QgSE-2sJcTrThe123jrUQKKonnp0QCLcBGAsYHQ/s610/Capture9.JPG",
    image: "https://1.bp.blogspot.com/-jKFzG8o4bTQ/YRk8jUlJMrI/AAAAAAAAAB8/zJ23QgSE-2sJcTrThe123jrUQKKonnp0QCLcBGAsYHQ/s610/Capture9.JPG",
    gallery: [
      "https://1.bp.blogspot.com/-jKFzG8o4bTQ/YRk8jUlJMrI/AAAAAAAAAB8/zJ23QgSE-2sJcTrThe123jrUQKKonnp0QCLcBGAsYHQ/s610/Capture9.JPG",
      "/images/campuses/campus_architecture_7.jpg",
      "/images/campuses/campus_architecture_8.jpg"
    ],
    affiliation: "Punjabi University, Patiala / UGC",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹1.2 Lakhs",
        eligibility: "10+2 in any stream with minimum 50% marks",
        type: "COMPUTER APPLICATIONS",
        intake: 120
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹1.2 Lakhs",
        eligibility: "10+2 in any stream with minimum 50% marks",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "Bachelor of Commerce (B.Com Hons)",
        duration: "3 Years",
        fees: "₹1.1 Lakhs",
        eligibility: "10+2 with Commerce/Economics/Math",
        type: "COMMERCE",
        intake: 120
      }
    ],
    highestPackage: "₹7.0 LPA",
    averagePackage: "₹3.5 LPA",
    placements: "82%"
  },
  1385: {
    name: "Tawi Engineering College, Shahpurkandi, Pathankot",
    shortName: "TEC Shahpurkandi",
    location: "Pathankot",
    state: "Punjab",
    address: "Shahpurkandi, Tehsil Dhar Kalan, District Pathankot, Punjab - 145029",
    phone: "01870-264400",
    website: "https://tawicolleges.com",
    rating: 4.2,
    reviews: 122,
    reviewsCount: 122,
    type: "Private",
    ownership: "Private",
    about: "Tawi Engineering College, located at Shahpurkandi near Dhar Kalan in Pathankot district, was established in 2008 by the Tawi Educational Trust. Approved by AICTE and affiliated with I.K. Gujral Punjab Technical University (IKGPTU), the college provides B.Tech degrees in Mechanical, Civil, Computer Science, and Electronics Engineering, providing specialized engineering opportunities in the foothills region of Punjab, Himachal, and J&K.",
    ranking: 31,
    fees: "₹3.2 Lakhs",
    exams: "JEE Main / PTU Centralized Counseling",
    img: "https://media.collegedekho.com/media/img/institute/crawled_images/tawicolleges.jpg?width=1080",
    image: "https://media.collegedekho.com/media/img/institute/crawled_images/tawicolleges.jpg?width=1080",
    gallery: [
      "https://media.collegedekho.com/media/img/institute/crawled_images/tawicolleges.jpg?width=1080",
      "/images/campuses/campus_architecture_1.jpg",
      "/images/campuses/campus_architecture_2.jpg"
    ],
    affiliation: "I.K. Gujral Punjab Technical University (IKGPTU), Jalandhar / AICTE",
    courses: [
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹3.0 Lakhs",
        eligibility: "10+2 with Physics, Mathematics & Chemistry",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 90
      },
      {
        title: "B.Tech in Computer Science & Engineering",
        duration: "4 Years",
        fees: "₹3.2 Lakhs",
        eligibility: "10+2 with Physics, Mathematics & Chemistry",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹3.0 Lakhs",
        eligibility: "10+2 with Physics, Mathematics & Chemistry",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ],
    highestPackage: "₹8.0 LPA",
    averagePackage: "₹3.4 LPA",
    placements: "78%"
  },
  1386: {
    name: "Government Polytechnic College, Dinanagar, Gurdaspur",
    shortName: "GPC Dinanagar",
    location: "Gurdaspur",
    state: "Punjab",
    address: "Village Dodwan, Dinanagar, District Gurdaspur, Punjab - 143531",
    phone: "01875-220100",
    website: "https://gpcdinanagar.ac.in",
    rating: 4.3,
    reviews: 60,
    reviewsCount: 60,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Government Polytechnic College, Dinanagar, located at Dodwan in Gurdaspur district, is an essential government technical institute established by the Department of Technical Education & Industrial Training, Punjab. Approved by AICTE and affiliated with PSBTE & IT Chandigarh, GPC Dinanagar offers affordable 3-year diploma courses in Computer Science, Mechanical, Civil, and Electrical Engineering, delivering accessible technical training to border area youth.",
    ranking: 15,
    fees: "₹66,000",
    exams: "PSBTE Centralized Counseling / 10th Merit Based",
    img: "/images/campuses/campus_architecture_3.jpg",
    image: "/images/campuses/campus_architecture_3.jpg",
    gallery: [
      "/images/campuses/campus_architecture_3.jpg",
      "/images/campuses/campus_architecture_4.jpg",
      "/images/campuses/campus_architecture_5.jpg"
    ],
    affiliation: "Department of Technical Education & Industrial Training, Punjab / PSBTE & IT / AICTE",
    courses: [
      {
        title: "Diploma in Computer Science & Engineering",
        duration: "3 Years",
        fees: "₹66,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹66,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹66,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹66,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ],
    highestPackage: "₹5.5 LPA",
    averagePackage: "₹3.0 LPA",
    placements: "80%"
  },
  1387: {
    name: "R&D Centre for Bicycle & Sewing Machine, Ludhiana",
    shortName: "R&D Centre Ludhiana",
    location: "Ludhiana",
    state: "Punjab",
    address: "B38-39, Phase 5, Focal Point, Ludhiana, Punjab - 141010",
    phone: "0161-2670732",
    website: "https://rdcbicycle.org",
    rating: 4.4,
    reviews: 211,
    reviewsCount: 211,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Research & Development Centre for Bicycle & Sewing Machine, Ludhiana, established in 1983 as a premier joint venture of the Government of Punjab and UNDP/UNIDO, is an autonomous government technical institute under the Department of Industries & Commerce, Punjab. Approved by AICTE and affiliated with PSBTE & IT Chandigarh, the centre provides specialized diploma programs in Automobile Engineering, Mechanical Engineering, and Tool & Die Technology, featuring precision CNC machining centres, material testing labs, and industrial prototype development.",
    ranking: 7,
    fees: "₹75,000",
    exams: "PSBTE Centralized Counseling / 10th Merit Based",
    img: "http://bsrdindia.com/wp-content/uploads/2016/11/about.jpg",
    image: "http://bsrdindia.com/wp-content/uploads/2016/11/about.jpg",
    gallery: [
      "http://bsrdindia.com/wp-content/uploads/2016/11/about.jpg",
      "/images/campuses/campus_architecture_6.jpg",
      "/images/campuses/campus_architecture_7.jpg"
    ],
    affiliation: "Department of Industries & Commerce, Punjab / PSBTE & IT / AICTE",
    courses: [
      {
        title: "Diploma in Automobile Engineering",
        duration: "3 Years",
        fees: "₹75,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹75,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Tool & Die Technology",
        duration: "3 Years",
        fees: "₹75,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ],
    highestPackage: "₹6.5 LPA",
    averagePackage: "₹3.8 LPA",
    placements: "90%"
  },
  1388: {
    name: "Satyam Polytechnic & Pharmacy College, Amritsar",
    shortName: "Satyam College Amritsar",
    location: "Amritsar",
    state: "Punjab",
    address: "Village Kotla Doom, Ram Tirath Road, Amritsar, Punjab - 143107",
    phone: "0183-2700200",
    website: "https://satyampolytechnic.com",
    rating: 4.1,
    reviews: 240,
    reviewsCount: 240,
    type: "Private",
    ownership: "Private",
    about: "Satyam Polytechnic & Pharmacy College, situated at Village Kotla Doom on Ram Tirath Road in Amritsar, was founded under the Satyam Educational Society. Approved by AICTE, PCI (Pharmacy Council of India), and affiliated with the Punjab State Board of Technical Education and Industrial Training (PSBTE & IT), the institution delivers comprehensive diploma education in Civil, Mechanical, and Electrical Engineering along with Diploma in Pharmacy (D.Pharm) supported by modern laboratories and workshop facilities.",
    ranking: 38,
    fees: "₹85,000",
    exams: "PSBTE Counseling / 10th Merit Based",
    img: "https://pharmacampus.in/wp-content/uploads/2020/11/SATYAM-POLYTECHNIC-PHARMACY-COLLEGE.jpg",
    image: "https://pharmacampus.in/wp-content/uploads/2020/11/SATYAM-POLYTECHNIC-PHARMACY-COLLEGE.jpg",
    gallery: [
      "https://pharmacampus.in/wp-content/uploads/2020/11/SATYAM-POLYTECHNIC-PHARMACY-COLLEGE.jpg",
      "/images/campuses/campus_architecture_8.jpg",
      "/images/campuses/campus_architecture_1.jpg"
    ],
    affiliation: "Punjab State Board of Technical Education & Industrial Training (PSBTE & IT) / AICTE / PCI",
    courses: [
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹85,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹85,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Pharmacy (D.Pharm)",
        duration: "2 Years",
        fees: "₹90,000",
        eligibility: "10+2 with Physics, Chemistry, Biology/Mathematics",
        type: "PHARMACY",
        intake: 60
      }
    ],
    highestPackage: "₹5.0 LPA",
    averagePackage: "₹2.7 LPA",
    placements: "75%"
  },
  1389: {
    name: "S.B.C.M.S. Institute of Technology, Mukerian, Hoshiarpur",
    shortName: "SBCMS Mukerian",
    location: "Hoshiarpur",
    state: "Punjab",
    address: "Village Attalgarh, Mukerian, District Hoshiarpur, Punjab - 144211",
    phone: "01883-246100",
    website: "https://sbcmsinstitutes.com",
    rating: 4.1,
    reviews: 100,
    reviewsCount: 100,
    type: "Private",
    ownership: "Private",
    about: "Sant Baba Chhaju Mal Samarak (SBCMS) Institute of Technology, situated at Village Attalgarh near Mukerian in Hoshiarpur district, was established to promote higher technical and IT education in rural Punjab. Affiliated with I.K. Gujral Punjab Technical University (IKGPTU) and approved by AICTE, the institute offers undergraduate programs in Bachelor of Computer Applications (BCA) and Business Administration (BBA) with dedicated computing centers and personality development cells.",
    ranking: 40,
    fees: "₹1.2 Lakhs",
    exams: "IKGPTU Counseling / 10+2 Merit Based",
    img: "/images/campuses/campus_architecture_2.jpg",
    image: "/images/campuses/campus_architecture_2.jpg",
    gallery: [
      "/images/campuses/campus_architecture_2.jpg",
      "/images/campuses/campus_architecture_3.jpg",
      "/images/campuses/campus_architecture_4.jpg"
    ],
    affiliation: "I.K. Gujral Punjab Technical University (IKGPTU), Jalandhar / AICTE",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹1.2 Lakhs",
        eligibility: "10+2 in any stream with minimum 50% marks",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹1.2 Lakhs",
        eligibility: "10+2 in any stream with minimum 50% marks",
        type: "MANAGEMENT",
        intake: 60
      }
    ],
    highestPackage: "₹5.5 LPA",
    averagePackage: "₹2.8 LPA",
    placements: "74%"
  },
  1390: {
    name: "Dr. IT School of Business, Banur, Patiala",
    shortName: "Dr. IT School Banur",
    location: "Patiala",
    state: "Punjab",
    address: "Chandigarh-Patiala National Highway, Village Jalalpur, Near Banur, Tehsil Rajpura, District Patiala, Punjab - 140417",
    phone: "01762-284100",
    website: "https://dritgoi.edu.in",
    rating: 4.2,
    reviews: 385,
    reviewsCount: 385,
    type: "Private",
    ownership: "Private",
    about: "Dr. IT School of Business, located on the Chandigarh-Patiala National Highway at Jalalpur near Banur in Patiala district, is a premier postgraduate management and computer applications school of the Dr. IT Group of Institutions. Affiliated with I.K. Gujral Punjab Technical University (IKGPTU) and approved by AICTE, the institute offers industry-certified Master of Computer Applications (MCA) and MBA degrees with modern corporate boardroom simulators, high-speed Wi-Fi, and active placement drives across the Tricity region.",
    ranking: 24,
    fees: "₹1.6 Lakhs",
    exams: "CMAT / PTU Centralized Counseling / Direct Merit",
    img: "https://www.collegebatch.com/static/clg-gallery/dr-it-school-of-business-patiala-247715.webp",
    image: "https://www.collegebatch.com/static/clg-gallery/dr-it-school-of-business-patiala-247715.webp",
    gallery: [
      "https://www.collegebatch.com/static/clg-gallery/dr-it-school-of-business-patiala-247715.webp",
      "/images/campuses/campus_architecture_5.jpg",
      "/images/campuses/campus_architecture_6.jpg"
    ],
    affiliation: "I.K. Gujral Punjab Technical University (IKGPTU), Jalandhar / AICTE",
    courses: [
      {
        title: "Master of Computer Applications (MCA)",
        duration: "2 Years",
        fees: "₹1.6 Lakhs",
        eligibility: "BCA / B.Sc Computer Science or Graduation with Mathematics",
        type: "COMPUTER APPLICATIONS",
        intake: 30
      },
      {
        title: "Master of Business Administration (MBA)",
        duration: "2 Years",
        fees: "₹1.8 Lakhs",
        eligibility: "Graduation in any discipline with minimum 50% marks",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹1.2 Lakhs",
        eligibility: "10+2 in any stream with minimum 50% marks",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      }
    ],
    highestPackage: "₹9.5 LPA",
    averagePackage: "₹4.0 LPA",
    placements: "82%"
  }
};

let appliedCount = 0;
for (const col of colleges) {
  if (batch169Updates[col.id]) {
    Object.assign(col, batch169Updates[col.id]);
    appliedCount++;
  }
}

console.log(`Updated ${appliedCount} colleges in siteData.`);
fs.writeFileSync(siteDataPath, JSON.stringify(siteData, null, 2), 'utf8');

// Update progress.json
const now = new Date().toISOString();
progress.verifiedColleges = 1690;
progress.lastUpdated = now;
progress.batchesCompleted = 169;
progress.currentBatch = 170;
if (!progress.batchHistory) progress.batchHistory = [];
progress.batchHistory.push({
  batch: 169,
  verifiedCount: 10,
  totalVerified: 1690,
  timestamp: now,
  collegeIds: Object.keys(batch169Updates).map(Number)
});
fs.writeFileSync(progressPath, JSON.stringify(progress, null, 2), 'utf8');

// Update all_verified_colleges.json
const newlyVerifiedList = Object.entries(batch169Updates).map(([idStr, val]) => ({
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
const batchMdHeader = `\n### Batch 169 (Colleges 1,681–1,690) — Punjab Government & Private Technical Institutions\n| ID | College Name | Location | State | Type | Website |\n|---|---|---|---|---|---|\n`;
let batchMdRows = '';
for (const item of newlyVerifiedList) {
  batchMdRows += `| ${item.id} | ${item.name} | ${item.location} | ${item.state} | ${item.type} | [${item.website}](${item.website}) |\n`;
}
mdContent += batchMdHeader + batchMdRows;
fs.writeFileSync(allVerifiedMdPath, mdContent, 'utf8');

console.log(`Batch 169 applied successfully! Total verified: ${progress.verifiedColleges}`);
