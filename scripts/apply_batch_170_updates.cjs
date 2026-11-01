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

// Batch 170 updates
const batch170Updates = {
  1391: {
    name: "V.M.S. Polytechnic College, Batala, Gurdaspur",
    shortName: "VMS Polytechnic Batala",
    location: "Gurdaspur",
    state: "Punjab",
    address: "Amritsar Road, Batala, District Gurdaspur, Punjab - 143505",
    phone: "01871-240400",
    website: "https://vmsinstitutions.com",
    rating: 4.2,
    reviews: 476,
    reviewsCount: 476,
    type: "Private",
    ownership: "Private",
    about: "V.M.S. Polytechnic College, located on Amritsar Road in Batala, was established under the VMS Group of Institutions. Approved by AICTE and affiliated with the Punjab State Board of Technical Education and Industrial Training (PSBTE & IT), the college offers 3-year diploma education in Civil, Mechanical, Electrical, and Computer Engineering with well-equipped workshop bays and laboratories.",
    ranking: 36,
    fees: "₹85,000",
    exams: "PSBTE Counseling / 10th Merit Based",
    img: "https://pharmacampus.in/wp-content/uploads/2020/11/V.M.S.-POLYTECHNIC-COLLEGE-600x314.jpeg",
    image: "https://pharmacampus.in/wp-content/uploads/2020/11/V.M.S.-POLYTECHNIC-COLLEGE-600x314.jpeg",
    gallery: [
      "https://pharmacampus.in/wp-content/uploads/2020/11/V.M.S.-POLYTECHNIC-COLLEGE-600x314.jpeg",
      "/images/campuses/campus_architecture_1.jpg",
      "/images/campuses/campus_architecture_2.jpg"
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
    averagePackage: "₹2.8 LPA",
    placements: "76%"
  },
  1392: {
    name: "Government Polytechnic College, Mohali (Khuni Majra)",
    shortName: "GPC Mohali Khuni Majra",
    location: "Mohali",
    state: "Punjab",
    address: "Kharar-Landran Road, Khuni Majra, Kharar, District SAS Nagar (Mohali), Punjab - 140301",
    phone: "0160-2280055",
    website: "https://gpcmohalikm.ac.in",
    rating: 4.4,
    reviews: 309,
    reviewsCount: 309,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Government Polytechnic College, Mohali (Khuni Majra), located on the Kharar-Landran Road in Greater Mohali, was established in 1996 by the Government of Punjab. Administered by the Department of Technical Education & Industrial Training, Punjab, affiliated with PSBTE & IT Chandigarh and approved by AICTE, the college offers premier subsidized 3-year diploma education in Computer Science, Mechanical, Civil, and Electrical Engineering across a modern suburban campus.",
    ranking: 8,
    fees: "₹66,000",
    exams: "PSBTE Centralized Counseling / 10th Merit Based",
    img: "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/11651/2021/1/5/Play Ground of Government Polytechnic College Mohali_Sports.jpg",
    image: "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/11651/2021/1/5/Play Ground of Government Polytechnic College Mohali_Sports.jpg",
    gallery: [
      "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/11651/2021/1/5/Play Ground of Government Polytechnic College Mohali_Sports.jpg",
      "/images/campuses/campus_architecture_3.jpg",
      "/images/campuses/campus_architecture_4.jpg"
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
    highestPackage: "₹6.5 LPA",
    averagePackage: "₹3.5 LPA",
    placements: "88%"
  },
  1393: {
    name: "Aryans Business School (ABS, Aryans Group of Colleges), Rajpura, Patiala",
    shortName: "ABS Rajpura",
    location: "Patiala",
    state: "Punjab",
    address: "Village Nepra, Chandigarh-Patiala Highway, Tehsil Rajpura, District Patiala, Punjab - 140401",
    phone: "01762-506100",
    email: "info@aryans.edu.in",
    website: "https://aryans.edu.in",
    rating: 4.3,
    reviews: 380,
    reviewsCount: 380,
    type: "Private",
    ownership: "Private",
    about: "Aryans Business School (ABS), Rajpura, established in 2007 under the Aryans Group of Colleges on the Chandigarh-Patiala Highway, is an acclaimed business school in the Tricity-Patiala region. Affiliated with I.K. Gujral Punjab Technical University (IKGPTU) and approved by AICTE, ABS delivers professional MBA, BBA, and BCA programs with active incubation labs, corporate networking sessions, and extensive campus placement drives.",
    ranking: 22,
    fees: "₹1.8 Lakhs",
    exams: "CMAT / PTU Centralized Counseling / Direct Merit",
    img: "https://img.studyclap.com/img/institute/college/773x343/24042/abs-patiala-fdb3bbac0b.jpg",
    image: "https://img.studyclap.com/img/institute/college/773x343/24042/abs-patiala-fdb3bbac0b.jpg",
    gallery: [
      "https://img.studyclap.com/img/institute/college/773x343/24042/abs-patiala-fdb3bbac0b.jpg",
      "/images/campuses/campus_architecture_5.jpg",
      "/images/campuses/campus_architecture_6.jpg"
    ],
    affiliation: "I.K. Gujral Punjab Technical University (IKGPTU), Jalandhar / AICTE",
    courses: [
      {
        title: "Master of Business Administration (MBA)",
        duration: "2 Years",
        fees: "₹1.8 Lakhs",
        eligibility: "Graduation in any discipline with minimum 50% marks",
        type: "MANAGEMENT",
        intake: 120
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹1.5 Lakhs",
        eligibility: "10+2 in any stream with minimum 50% marks",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹1.5 Lakhs",
        eligibility: "10+2 in any stream with minimum 50% marks",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      }
    ],
    highestPackage: "₹10 LPA",
    averagePackage: "₹4.5 LPA",
    placements: "85%"
  },
  1394: {
    name: "Pt. J.R. Government Polytechnic College, Hoshiarpur",
    shortName: "Pt. JR GPC Hoshiarpur",
    location: "Hoshiarpur",
    state: "Punjab",
    address: "Jalandhar Road, Hoshiarpur, Punjab - 146001",
    phone: "01882-222384",
    website: "https://pjrpolytechnic.com",
    rating: 4.4,
    reviews: 462,
    reviewsCount: 462,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Pandit Jagat Ram Government Polytechnic College, Hoshiarpur, established in 1962 by the Government of Punjab on Jalandhar Road, is one of the historic government technical colleges in the Doaba region. Administered directly by the Department of Technical Education & Industrial Training, Punjab, affiliated with PSBTE & IT Chandigarh and approved by AICTE, the college offers affordable 3-year diploma education in Civil, Mechanical, Electrical, Computer Science, and Plastic Technology with extensive workshop machinery.",
    ranking: 7,
    fees: "₹66,000",
    exams: "PSBTE Centralized Counseling / 10th Merit Based",
    img: "https://edufever.in/colleges/wp-content/uploads/2020/05/Webp.net-resizeimage-15.jpg",
    image: "https://edufever.in/colleges/wp-content/uploads/2020/05/Webp.net-resizeimage-15.jpg",
    gallery: [
      "https://edufever.in/colleges/wp-content/uploads/2020/05/Webp.net-resizeimage-15.jpg",
      "/images/campuses/campus_architecture_7.jpg",
      "/images/campuses/campus_architecture_8.jpg"
    ],
    affiliation: "Department of Technical Education & Industrial Training, Punjab / PSBTE & IT / AICTE",
    courses: [
      {
        title: "Diploma in Civil Engineering",
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
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹66,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Computer Science & Engineering",
        duration: "3 Years",
        fees: "₹66,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Plastic Technology",
        duration: "3 Years",
        fees: "₹66,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 40
      }
    ],
    highestPackage: "₹6.2 LPA",
    averagePackage: "₹3.4 LPA",
    placements: "86%"
  },
  1395: {
    name: "Baba Hazara Singh Polytechnic College, Gurdaspur",
    shortName: "BHSP Gurdaspur",
    location: "Gurdaspur",
    state: "Punjab",
    address: "Near Aujla Bypass, Village Thanewal, PO Babehali, District Gurdaspur, Punjab - 143530",
    phone: "01874-250300",
    website: "https://bhspolytechnic.com",
    rating: 4.1,
    reviews: 266,
    reviewsCount: 266,
    type: "Private",
    ownership: "Private",
    about: "Baba Hazara Singh Polytechnic College, situated near Aujla Bypass at Thanewal in Gurdaspur, was founded under the Baba Hazara Singh Educational Trust. Approved by AICTE and affiliated with the Punjab State Board of Technical Education and Industrial Training (PSBTE & IT), the institute offers diploma qualifications in Civil, Mechanical, Electrical, and Computer Engineering, providing career-oriented technical skills in the border region.",
    ranking: 41,
    fees: "₹85,000",
    exams: "PSBTE Counseling / 10th Merit Based",
    img: "/images/campuses/campus_architecture_1.jpg",
    image: "/images/campuses/campus_architecture_1.jpg",
    gallery: [
      "/images/campuses/campus_architecture_1.jpg",
      "/images/campuses/campus_architecture_2.jpg",
      "/images/campuses/campus_architecture_3.jpg"
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
    highestPackage: "₹4.8 LPA",
    averagePackage: "₹2.6 LPA",
    placements: "74%"
  },
  1396: {
    name: "Central Tool Room (CTR), Ludhiana",
    shortName: "CTR Ludhiana",
    location: "Ludhiana",
    state: "Punjab",
    address: "A-5, Focal Point, Phase 5, Ludhiana, Punjab - 141010",
    phone: "0161-2670057",
    website: "https://www.ctrludhiana.org",
    rating: 4.6,
    reviews: 197,
    reviewsCount: 197,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Central Tool Room (CTR), Ludhiana, established in 1980 by the Government of India in collaboration with the Government of the Federal Republic of Germany, is a premier national center of excellence under the Ministry of Micro, Small and Medium Enterprises (MSME). Approved by AICTE and affiliated with PSBTE & IT Chandigarh, CTR Ludhiana delivers specialized diploma and advanced technical programs in Tool & Die Making, Mechanical Engineering, and Mechatronics, featuring state-of-the-art CNC machine centers, EDM machines, and 3D printing equipment.",
    ranking: 3,
    fees: "₹90,000",
    exams: "All India Entrance Test / PSBTE Merit Based",
    img: "https://www.ctrludhiana.org/wp-content/uploads/2019/12/image1.jpg",
    image: "https://www.ctrludhiana.org/wp-content/uploads/2019/12/image1.jpg",
    gallery: [
      "https://www.ctrludhiana.org/wp-content/uploads/2019/12/image1.jpg",
      "/images/campuses/campus_architecture_4.jpg",
      "/images/campuses/campus_architecture_5.jpg"
    ],
    affiliation: "Ministry of MSME, Government of India / PSBTE & IT / AICTE",
    courses: [
      {
        title: "Diploma in Mechanical Engineering (Tool & Die Making)",
        duration: "4 Years",
        fees: "₹1.2 Lakhs",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Mechatronics",
        duration: "3 Years",
        fees: "₹90,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ],
    highestPackage: "₹8.0 LPA",
    averagePackage: "₹4.5 LPA",
    placements: "94%"
  },
  1397: {
    name: "Aklia Polytechnic College, Goniana Mandi, Bathinda",
    shortName: "APC Goniana",
    location: "Bathinda",
    state: "Punjab",
    address: "Village Aklia Kalan, Goniana Mandi, District Bathinda, Punjab - 151201",
    phone: "0164-2760100",
    website: "https://akliagroup.org",
    rating: 4.1,
    reviews: 179,
    reviewsCount: 179,
    type: "Private",
    ownership: "Private",
    about: "Aklia Polytechnic College, situated at Village Aklia Kalan near Goniana Mandi in Bathinda district, is a constituent technical institution of the Aklia Educational Group. Approved by AICTE and affiliated with PSBTE & IT Chandigarh, the polytechnic offers 3-year diploma education in Civil, Mechanical, Electrical, and Computer Engineering, supporting technical education in southwestern Punjab.",
    ranking: 45,
    fees: "₹85,000",
    exams: "PSBTE Counseling / 10th Merit Based",
    img: "https://img.studyclap.com/img/institute/college/773x343/675/aersgi-bathinda-college-of-engineering-1de0eb.jpg",
    image: "https://img.studyclap.com/img/institute/college/773x343/675/aersgi-bathinda-college-of-engineering-1de0eb.jpg",
    gallery: [
      "https://img.studyclap.com/img/institute/college/773x343/675/aersgi-bathinda-college-of-engineering-1de0eb.jpg",
      "/images/campuses/campus_architecture_6.jpg",
      "/images/campuses/campus_architecture_7.jpg"
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
    highestPackage: "₹4.8 LPA",
    averagePackage: "₹2.6 LPA",
    placements: "74%"
  },
  1398: {
    name: "Dr. IT College of Polytechnic, Banur, Patiala",
    shortName: "Dr. IT Polytechnic Banur",
    location: "Patiala",
    state: "Punjab",
    address: "Village Jalalpur, PO Jansla, Near Banur, Tehsil Rajpura, District Patiala, Punjab - 140417",
    phone: "01762-284102",
    website: "https://dritgoi.edu.in",
    rating: 4.1,
    reviews: 152,
    reviewsCount: 152,
    type: "Private",
    ownership: "Private",
    about: "Dr. IT College of Polytechnic, located on the Chandigarh-Patiala National Highway at Jalalpur near Banur, is a constituent technical diploma unit of the Dr. IT Group of Institutions. Approved by AICTE and affiliated with PSBTE & IT Chandigarh, the polytechnic offers 3-year diploma courses in Computer Science, Mechanical, Civil, and Electrical Engineering with modern computing labs and machine workshops.",
    ranking: 38,
    fees: "₹85,000",
    exams: "PSBTE Counseling / 10th Merit Based",
    img: "https://media.getmyuni.com/azure/college-images-test/dr-it-group-ditg-patiala/7b1a2aee3bd546c7b6e6671cb58b68b5.jpeg",
    image: "https://media.getmyuni.com/azure/college-images-test/dr-it-group-ditg-patiala/7b1a2aee3bd546c7b6e6671cb58b68b5.jpeg",
    gallery: [
      "https://media.getmyuni.com/azure/college-images-test/dr-it-group-ditg-patiala/7b1a2aee3bd546c7b6e6671cb58b68b5.jpeg",
      "/images/campuses/campus_architecture_8.jpg",
      "/images/campuses/campus_architecture_1.jpg"
    ],
    affiliation: "Punjab State Board of Technical Education & Industrial Training (PSBTE & IT) / AICTE",
    courses: [
      {
        title: "Diploma in Computer Science & Engineering",
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
        title: "Diploma in Civil Engineering",
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
      }
    ],
    highestPackage: "₹5.0 LPA",
    averagePackage: "₹2.7 LPA",
    placements: "75%"
  },
  1399: {
    name: "Government Polytechnic College, Jalandhar",
    shortName: "GPC Jalandhar",
    location: "Jalandhar",
    state: "Punjab",
    address: "Ladowali Road, Near Nehru Garden, Jalandhar, Punjab - 144001",
    phone: "0181-2223846",
    website: "https://gpcjalandhar.ac.in",
    rating: 4.5,
    reviews: 134,
    reviewsCount: 134,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Government Polytechnic College, Jalandhar, established in 1954 on Ladowali Road, is one of Punjab's oldest, largest, and most prestigious technical education institutions. Governed by the Department of Technical Education & Industrial Training, Punjab, affiliated with PSBTE & IT Chandigarh and approved by AICTE, GPC Jalandhar provides heavily subsidized 3-year diploma education in Computer Science, Mechanical, Civil, Electrical, and Electronics Engineering across a 20-acre urban campus equipped with expansive workshops and athletic grounds.",
    ranking: 4,
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
    highestPackage: "₹7.0 LPA",
    averagePackage: "₹3.8 LPA",
    placements: "90%"
  },
  1400: {
    name: "Satyam Institute of Engineering & Technology, Amritsar",
    shortName: "SIET Amritsar",
    location: "Amritsar",
    state: "Punjab",
    address: "Village Kotla Doom, Ram Tirath Road, Amritsar, Punjab - 143107",
    phone: "0183-2700300",
    website: "https://satyaminstitute.in",
    rating: 4.2,
    reviews: 227,
    reviewsCount: 227,
    type: "Private",
    ownership: "Private",
    about: "Satyam Institute of Engineering & Technology (SIET), located at Kotla Doom on Ram Tirath Road in Amritsar, was established in 2011 by the Satyam Educational Society. Affiliated with I.K. Gujral Punjab Technical University (IKGPTU) and approved by AICTE, SIET delivers B.Tech engineering degrees in Computer Science, Mechanical, and Civil Engineering with modern computing networks, digital seminar halls, and placement training.",
    ranking: 30,
    fees: "₹3.2 Lakhs",
    exams: "JEE Main / PTU Centralized Counseling",
    img: "https://th.bing.com/th/id/R.92f33f637f6b1878e9a717c06dbcd387?rik=ML9ZOLRJZIbayw&riu=http%3a%2f%2funiversitykart.com%2fContent%2fupload%2fadmin%2ftphfx5v2.j0p.webp&ehk=2PLxxaxTyBi%2fXeS%2fGa1dHRLCSBD1GqtPpKC97qDXwHA%3d&risl=&pid=ImgRaw&r=0",
    image: "https://th.bing.com/th/id/R.92f33f637f6b1878e9a717c06dbcd387?rik=ML9ZOLRJZIbayw&riu=http%3a%2f%2funiversitykart.com%2fContent%2fupload%2fadmin%2ftphfx5v2.j0p.webp&ehk=2PLxxaxTyBi%2fXeS%2fGa1dHRLCSBD1GqtPpKC97qDXwHA%3d&risl=&pid=ImgRaw&r=0",
    gallery: [
      "https://th.bing.com/th/id/R.92f33f637f6b1878e9a717c06dbcd387?rik=ML9ZOLRJZIbayw&riu=http%3a%2f%2funiversitykart.com%2fContent%2fupload%2fadmin%2ftphfx5v2.j0p.webp&ehk=2PLxxaxTyBi%2fXeS%2fGa1dHRLCSBD1GqtPpKC97qDXwHA%3d&risl=&pid=ImgRaw&r=0",
      "/images/campuses/campus_architecture_6.jpg",
      "/images/campuses/campus_architecture_7.jpg"
    ],
    affiliation: "I.K. Gujral Punjab Technical University (IKGPTU), Jalandhar / AICTE",
    courses: [
      {
        title: "B.Tech in Computer Science & Engineering",
        duration: "4 Years",
        fees: "₹3.2 Lakhs",
        eligibility: "10+2 with Physics, Mathematics & Chemistry",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹3.0 Lakhs",
        eligibility: "10+2 with Physics, Mathematics & Chemistry",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹3.0 Lakhs",
        eligibility: "10+2 with Physics, Mathematics & Chemistry",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ],
    highestPackage: "₹8.5 LPA",
    averagePackage: "₹3.6 LPA",
    placements: "80%"
  }
};

let appliedCount = 0;
for (const col of colleges) {
  if (batch170Updates[col.id]) {
    Object.assign(col, batch170Updates[col.id]);
    appliedCount++;
  }
}

console.log(`Updated ${appliedCount} colleges in siteData.`);
fs.writeFileSync(siteDataPath, JSON.stringify(siteData, null, 2), 'utf8');

// Update progress.json
const now = new Date().toISOString();
progress.verifiedColleges = 1700;
progress.lastUpdated = now;
progress.batchesCompleted = 170;
progress.currentBatch = 171;
if (!progress.batchHistory) progress.batchHistory = [];
progress.batchHistory.push({
  batch: 170,
  verifiedCount: 10,
  totalVerified: 1700,
  timestamp: now,
  collegeIds: Object.keys(batch170Updates).map(Number)
});
fs.writeFileSync(progressPath, JSON.stringify(progress, null, 2), 'utf8');

// Update all_verified_colleges.json
const newlyVerifiedList = Object.entries(batch170Updates).map(([idStr, val]) => ({
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
const batchMdHeader = `\n### Batch 170 (Colleges 1,691–1,700) — Punjab Government & Private Technical Institutions (1,700th Milestone!)\n| ID | College Name | Location | State | Type | Website |\n|---|---|---|---|---|---|\n`;
let batchMdRows = '';
for (const item of newlyVerifiedList) {
  batchMdRows += `| ${item.id} | ${item.name} | ${item.location} | ${item.state} | ${item.type} | [${item.website}](${item.website}) |\n`;
}
mdContent += batchMdHeader + batchMdRows;
fs.writeFileSync(allVerifiedMdPath, mdContent, 'utf8');

console.log(`Batch 170 applied successfully! Total verified: ${progress.verifiedColleges}`);

