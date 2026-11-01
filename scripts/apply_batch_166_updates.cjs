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

// Batch 166 updates
const batch166Updates = {
  1351: {
    name: "Longowal Polytechnic & Pharmacy College, Dera Bassi",
    shortName: "LPPC Dera Bassi",
    location: "SAS Nagar (Mohali)",
    state: "Punjab",
    address: "Govt. College Road, Shakti Nagar, Dera Bassi, District SAS Nagar (Mohali), Punjab - 140507",
    phone: "01762-506000",
    website: "https://longowalgroups.com",
    rating: 4.2,
    reviews: 466,
    reviewsCount: 466,
    type: "Private",
    ownership: "Private",
    about: "Longowal Polytechnic & Pharmacy College, located on Govt. College Road at Dera Bassi in SAS Nagar (Mohali) district, was established in 1986 under the aegis of the Longowal Group of Colleges. Approved by AICTE, PCI (Pharmacy Council of India), and affiliated with the Punjab State Board of Technical Education and Industrial Training (PSBTE & IT), the institution delivers comprehensive diploma education in engineering disciplines (Civil, Mechanical, Electrical, Computer Science) and pharmaceutical sciences with hands-on laboratories and industry-focused training.",
    ranking: 35,
    fees: "₹85,000",
    exams: "PSBTE Counseling / 10th Merit Based",
    img: "https://media.collegedekho.com/media/img/institute/crawled_images/lon3.jpg",
    image: "https://media.collegedekho.com/media/img/institute/crawled_images/lon3.jpg",
    gallery: [
      "https://media.collegedekho.com/media/img/institute/crawled_images/lon3.jpg",
      "/images/campuses/campus_architecture_1.jpg",
      "/images/campuses/campus_architecture_2.jpg"
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
        title: "Diploma in Computer Science & Engineering",
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
    highestPackage: "₹6.5 LPA",
    averagePackage: "₹3.2 LPA",
    placements: "80%"
  },
  1352: {
    name: "Government Institute of Leather & Footwear Technology (GILFT), Jalandhar",
    shortName: "GILFT Jalandhar",
    location: "Jalandhar",
    state: "Punjab",
    address: "Nakodar Road, Near Football Chowk, Jalandhar, Punjab - 144003",
    phone: "0181-2253000",
    website: "https://gilftjalandhar.com",
    rating: 4.4,
    reviews: 435,
    reviewsCount: 435,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Government Institute of Leather & Footwear Technology (GILFT), Jalandhar, established in 1932 by the Government of Punjab, is one of India's oldest and most prestigious specialized technical institutes dedicated to leather processing, footwear manufacturing, and computer-aided leather design. Run directly by the Department of Technical Education & Industrial Training, Punjab, and affiliated with PSBTE & IT Chandigarh and approved by AICTE, the institute provides highly subsidized technical training with specialized pilot tanneries, footwear fabrication workshops, and testing labs.",
    ranking: 5,
    fees: "₹66,000",
    exams: "PSBTE Centralized Counseling / 10th Merit Based",
    img: "/images/campuses/campus_architecture_3.jpg",
    image: "/images/campuses/campus_architecture_3.jpg",
    gallery: [
      "https://www.universalsportsinds.com/uni/assets/img/banner/b116902014854.jpg",
      "/images/campuses/campus_architecture_3.jpg",
      "/images/campuses/campus_architecture_4.jpg"
    ],
    affiliation: "Department of Technical Education & Industrial Training, Punjab / PSBTE & IT / AICTE",
    courses: [
      {
        title: "Diploma in Leather Technology",
        duration: "3 Years",
        fees: "₹66,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "Diploma in Footwear Technology & Design",
        duration: "3 Years",
        fees: "₹66,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "Diploma in Computer Aided Leather Goods & Footwear Design",
        duration: "3 Years",
        fees: "₹66,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 18
      }
    ],
    highestPackage: "₹5.5 LPA",
    averagePackage: "₹3.0 LPA",
    placements: "85%"
  },
  1353: {
    name: "Khalsa College of Engineering & Technology (KCET), Amritsar",
    shortName: "KCET Amritsar",
    location: "Amritsar",
    state: "Punjab",
    address: "C-Block, Ranjit Avenue, Amritsar, Punjab - 143001",
    phone: "0183-5030765",
    email: "kcetamritsar@gmail.com",
    website: "https://khalsaengineering.co.in",
    rating: 4.3,
    reviews: 398,
    reviewsCount: 398,
    type: "Private",
    ownership: "Private",
    about: "Khalsa College of Engineering & Technology (KCET), Amritsar, established in 2009 in Ranjit Avenue, is run by the historic Khalsa College Charitable Society (founded in 1892). Affiliated with I.K. Gujral Punjab Technical University (IKGPTU) and approved by AICTE, KCET provides undergraduate B.Tech programs in Computer Science, Civil, Mechanical, and Electronics Engineering, along with professional postgraduate programs like MBA, supported by state-of-the-art computing clusters, robotic labs, and central research facilities.",
    ranking: 18,
    fees: "₹3.4 Lakhs",
    exams: "JEE Main / PTU Centralized Counseling / 10+2 Merit",
    img: "https://www.collegebatch.com/static/clg-gallery/khalsa-college-of-engineering-technology-amritsar-273619.webp",
    image: "https://www.collegebatch.com/static/clg-gallery/khalsa-college-of-engineering-technology-amritsar-273619.webp",
    gallery: [
      "https://www.collegebatch.com/static/clg-gallery/khalsa-college-of-engineering-technology-amritsar-273619.webp",
      "/images/campuses/campus_architecture_5.jpg",
      "/images/campuses/campus_architecture_6.jpg"
    ],
    affiliation: "I.K. Gujral Punjab Technical University (IKGPTU), Jalandhar / AICTE",
    courses: [
      {
        title: "B.Tech in Computer Science & Engineering",
        duration: "4 Years",
        fees: "₹3.4 Lakhs",
        eligibility: "10+2 with Physics, Mathematics & Chemistry",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 120
      },
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹3.2 Lakhs",
        eligibility: "10+2 with Physics, Mathematics & Chemistry",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹3.2 Lakhs",
        eligibility: "10+2 with Physics, Mathematics & Chemistry",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Master of Business Administration (MBA)",
        duration: "2 Years",
        fees: "₹1.7 Lakhs",
        eligibility: "Graduation in any discipline with minimum 50% marks",
        type: "MANAGEMENT",
        intake: 60
      }
    ],
    highestPackage: "₹10 LPA",
    averagePackage: "₹4.5 LPA",
    placements: "85%"
  },
  1354: {
    name: "CGC College of Engineering, Landran, Mohali",
    shortName: "CGC Landran",
    location: "Mohali",
    state: "Punjab",
    address: "Landran, Kharar-Banur Highway, Sector 112, Greater Mohali, Punjab - 140307",
    phone: "0172-3984200",
    website: "https://www.cgc.edu.in",
    rating: 4.4,
    reviews: 537,
    reviewsCount: 537,
    type: "Private",
    ownership: "Private",
    about: "CGC College of Engineering (COE), established in 2005 at the flagship Landran campus in Greater Mohali, is a constituent engineering college of Chandigarh Group of Colleges. Affiliated with I.K. Gujral Punjab Technical University (IKGPTU) and accredited by NAAC and NBA, CGC Landran offers premier undergraduate B.Tech engineering courses across CSE, AI, Data Science, and Robotics. Renowned for its high-volume campus placement drives, over 800 MNCs recruit annually from the Landran campus.",
    ranking: 12,
    fees: "₹3.6 Lakhs",
    exams: "JEE Main / PTU Centralized Counseling",
    img: "https://media.getmyuni.com/azure/college-images-test/cgc-college-of-engineering-cgc-mohali/7c8375733a14462fb73d4c7fca5f5848.jpeg",
    image: "https://media.getmyuni.com/azure/college-images-test/cgc-college-of-engineering-cgc-mohali/7c8375733a14462fb73d4c7fca5f5848.jpeg",
    gallery: [
      "https://media.getmyuni.com/azure/college-images-test/cgc-college-of-engineering-cgc-mohali/7c8375733a14462fb73d4c7fca5f5848.jpeg",
      "/images/campuses/campus_architecture_7.jpg",
      "/images/campuses/campus_architecture_8.jpg"
    ],
    affiliation: "I.K. Gujral Punjab Technical University (IKGPTU), Jalandhar / AICTE / NBA",
    courses: [
      {
        title: "B.Tech in Computer Science & Engineering",
        duration: "4 Years",
        fees: "₹3.6 Lakhs",
        eligibility: "10+2 with Physics, Mathematics & Chemistry",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 360
      },
      {
        title: "B.Tech in Artificial Intelligence & Data Science",
        duration: "4 Years",
        fees: "₹3.6 Lakhs",
        eligibility: "10+2 with Physics, Mathematics & Chemistry",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 120
      },
      {
        title: "B.Tech in Electronics & Communication Engineering",
        duration: "4 Years",
        fees: "₹3.4 Lakhs",
        eligibility: "10+2 with Physics, Mathematics & Chemistry",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹3.2 Lakhs",
        eligibility: "10+2 with Physics, Mathematics & Chemistry",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ],
    highestPackage: "₹45.5 LPA",
    averagePackage: "₹6.8 LPA",
    placements: "92%"
  },
  1355: {
    name: "S. Sukhjinder Singh Polytechnic & Pharmacy College, Gurdaspur",
    shortName: "SSSPPC Gurdaspur",
    location: "Gurdaspur",
    state: "Punjab",
    address: "VPO Hayat Nagar, Hardochhani Road, Gurdaspur, Punjab - 143521",
    phone: "01874-245353",
    website: "https://ssseg.org",
    rating: 4.1,
    reviews: 177,
    reviewsCount: 177,
    type: "Private",
    ownership: "Private",
    about: "S. Sukhjinder Singh Polytechnic & Pharmacy College, located at Hayat Nagar on Hardochhani Road in Gurdaspur, was established under the S. Sukhjinder Singh Memorial Educational Society. Approved by AICTE, PCI, and affiliated with PSBTE & IT Chandigarh, the institute offers vocational and professional diploma programs in civil, mechanical, electrical, computer science engineering, and diploma in pharmacy, providing essential technical education in the border belt of Punjab.",
    ranking: 38,
    fees: "₹85,000",
    exams: "PSBTE Counseling / 10th Merit Based",
    img: "https://img.jagranjosh.com/images/2024/February/222024/2021-07-06.jpg",
    image: "https://img.jagranjosh.com/images/2024/February/222024/2021-07-06.jpg",
    gallery: [
      "https://img.jagranjosh.com/images/2024/February/222024/2021-07-06.jpg",
      "/images/campuses/campus_architecture_1.jpg",
      "/images/campuses/campus_architecture_2.jpg"
    ],
    affiliation: "Punjab State Board of Technical Education & Industrial Training (PSBTE & IT) / AICTE / PCI",
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
    averagePackage: "₹2.8 LPA",
    placements: "75%"
  },
  1356: {
    name: "Malwa Polytechnic College, Faridkot",
    shortName: "MPC Faridkot",
    location: "Faridkot",
    state: "Punjab",
    address: "Machaki Kalan, Sadiq Road, Faridkot, Punjab - 151203",
    phone: "01639-250325",
    website: "https://malwapolytechnic.com",
    rating: 4.1,
    reviews: 488,
    reviewsCount: 488,
    type: "Private",
    ownership: "Private",
    about: "Malwa Polytechnic College, established in 2003 at Machaki Kalan on Sadiq Road in Faridkot, is a reputed private polytechnic institution in the Malwa region of Punjab. Approved by AICTE and affiliated with the Punjab State Board of Technical Education and Industrial Training (PSBTE & IT), the college offers 3-year diploma programs in Mechanical, Civil, Electrical, and Computer Engineering, equipped with extensive workshop bays, CAD labs, and placement training.",
    ranking: 40,
    fees: "₹85,000",
    exams: "PSBTE Counseling / 10th Merit Based",
    img: "https://cache.careers360.mobi/media/colleges/social-media/media-gallery/11718/2021/1/2/Campus view of Malwa Polytechnic College Faridkot_Campus-view.jpg",
    image: "https://cache.careers360.mobi/media/colleges/social-media/media-gallery/11718/2021/1/2/Campus view of Malwa Polytechnic College Faridkot_Campus-view.jpg",
    gallery: [
      "https://cache.careers360.mobi/media/colleges/social-media/media-gallery/11718/2021/1/2/Campus view of Malwa Polytechnic College Faridkot_Campus-view.jpg",
      "/images/campuses/campus_architecture_3.jpg",
      "/images/campuses/campus_architecture_4.jpg"
    ],
    affiliation: "Punjab State Board of Technical Education & Industrial Training (PSBTE & IT) / AICTE",
    courses: [
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
      },
      {
        title: "Diploma in Computer Engineering",
        duration: "3 Years",
        fees: "₹85,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ],
    highestPackage: "₹4.8 LPA",
    averagePackage: "₹2.6 LPA",
    placements: "75%"
  },
  1357: {
    name: "Bhai Gurdas Polytechnic College, Sangrur",
    shortName: "BGPC Sangrur",
    location: "Sangrur",
    state: "Punjab",
    address: "Main Patiala Road, Sangrur, Punjab - 148001",
    phone: "01672-278528",
    website: "https://bgiet.ac.in",
    rating: 4.2,
    reviews: 345,
    reviewsCount: 345,
    type: "Private",
    ownership: "Private",
    about: "Bhai Gurdas Polytechnic College, established in 1999 on Main Patiala Road in Sangrur, is part of the esteemed Bhai Gurdas Group of Institutions named after the great Sikh philosopher Bhai Gurdas Ji. Approved by AICTE and affiliated with the Punjab State Board of Technical Education and Industrial Training (PSBTE & IT), the polytechnic offers specialized 3-year diploma courses in computer science, mechanical, civil, and electrical engineering across a sprawling, self-contained green campus.",
    ranking: 25,
    fees: "₹85,000",
    exams: "PSBTE Counseling / 10th Merit Based",
    img: "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/17728/2019/2/22/Campus Building of Bhai Gurdas Polytechnic College Sangrur_Campus-view.jpg",
    image: "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/17728/2019/2/22/Campus Building of Bhai Gurdas Polytechnic College Sangrur_Campus-view.jpg",
    gallery: [
      "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/17728/2019/2/22/Campus Building of Bhai Gurdas Polytechnic College Sangrur_Campus-view.jpg",
      "/images/campuses/campus_architecture_5.jpg",
      "/images/campuses/campus_architecture_6.jpg"
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
    highestPackage: "₹5.2 LPA",
    averagePackage: "₹2.8 LPA",
    placements: "78%"
  },
  1358: {
    name: "CT Institute of Management & IT, Maqsudan, Jalandhar",
    shortName: "CTIMIT Maqsudan",
    location: "Jalandhar",
    state: "Punjab",
    address: "Greater Kailash, G.T. Road, Maqsudan, Jalandhar, Punjab - 144008",
    phone: "0181-5013055",
    website: "https://ctgroup.in",
    rating: 4.3,
    reviews: 88,
    reviewsCount: 88,
    type: "Private",
    ownership: "Private",
    about: "CT Institute of Management & IT (CTIMIT), Maqsudan, Jalandhar, established in 2003 under the CT Group of Institutions, is an acclaimed center for higher education in computing and management. Affiliated with I.K. Gujral Punjab Technical University (IKGPTU) and approved by AICTE, CTIMIT provides industry-aligned Master of Computer Applications (MCA), Bachelor of Computer Applications (BCA), and BBA courses, featuring advanced computer labs, incubation cells, and active corporate placement drives.",
    ranking: 22,
    fees: "₹1.6 Lakhs",
    exams: "IKGPTU Counseling / Direct Merit",
    img: "https://img.jagranjosh.com/images/2022/March/1132022/institute_technology_header_pic.jpg",
    image: "https://img.jagranjosh.com/images/2022/March/1132022/institute_technology_header_pic.jpg",
    gallery: [
      "https://img.jagranjosh.com/images/2022/March/1132022/institute_technology_header_pic.jpg",
      "/images/campuses/campus_architecture_7.jpg",
      "/images/campuses/campus_architecture_8.jpg"
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
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹1.8 Lakhs",
        eligibility: "10+2 in any stream with minimum 50% marks",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹1.8 Lakhs",
        eligibility: "10+2 in any stream with minimum 50% marks",
        type: "MANAGEMENT",
        intake: 60
      }
    ],
    highestPackage: "₹10 LPA",
    averagePackage: "₹4.5 LPA",
    placements: "84%"
  },
  1359: {
    name: "Apeejay Institute of Management & Engineering Technical Campus (AIMETC), Jalandhar",
    shortName: "AIMETC Jalandhar",
    location: "Jalandhar",
    state: "Punjab",
    address: "Rama Mandi - Hoshiarpur Road, Jalandhar, Punjab - 144007",
    phone: "0181-2410263",
    website: "https://aimetc.apeejay.edu",
    rating: 4.4,
    reviews: 228,
    reviewsCount: 228,
    type: "Private",
    ownership: "Private",
    about: "Apeejay Institute of Management & Engineering Technical Campus (AIMETC), Jalandhar, established in 1997 by the Apeejay Education Society, is one of North India's foremost technical institutions. Spread over a lush green campus on Rama Mandi-Hoshiarpur Road, AIMETC is approved by AICTE and affiliated with I.K. Gujral Punjab Technical University (IKGPTU). The campus delivers accredited MCA, MBA, B.Tech (CSE, AI & ML), and BCA programs with an exceptional placement record across Fortune 500 companies.",
    ranking: 14,
    fees: "₹1.7 Lakhs",
    exams: "CMAT / PTU CET / JEE Main / Graduation Merit",
    img: "https://www.collegebatch.com/static/clg-gallery/apeejay-institute-of-management-engineering-technical-campus-jalandhar-354670.webp",
    image: "https://www.collegebatch.com/static/clg-gallery/apeejay-institute-of-management-engineering-technical-campus-jalandhar-354670.webp",
    gallery: [
      "https://www.collegebatch.com/static/clg-gallery/apeejay-institute-of-management-engineering-technical-campus-jalandhar-354670.webp",
      "/images/campuses/campus_architecture_1.jpg",
      "/images/campuses/campus_architecture_2.jpg"
    ],
    affiliation: "I.K. Gujral Punjab Technical University (IKGPTU), Jalandhar / AICTE",
    courses: [
      {
        title: "Master of Computer Applications (MCA)",
        duration: "2 Years",
        fees: "₹1.7 Lakhs",
        eligibility: "BCA / B.Sc Computer Science or Graduation with Mathematics",
        type: "COMPUTER APPLICATIONS",
        intake: 60
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
        title: "B.Tech in Computer Science & Engineering",
        duration: "4 Years",
        fees: "₹3.4 Lakhs",
        eligibility: "10+2 with Physics, Mathematics & Chemistry",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹1.8 Lakhs",
        eligibility: "10+2 in any stream with minimum 50% marks",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      }
    ],
    highestPackage: "₹12 LPA",
    averagePackage: "₹5.2 LPA",
    placements: "88%"
  },
  1360: {
    name: "Pathankot Polytechnic College, Pathankot",
    shortName: "PPC Pathankot",
    location: "Pathankot",
    state: "Punjab",
    address: "Opposite Canada Palace, Dalhousie Road, Mamun, Pathankot, Punjab - 145001",
    phone: "0186-2247100",
    website: "https://pathankotpolytechnic.com",
    rating: 4.1,
    reviews: 126,
    reviewsCount: 126,
    type: "Private",
    ownership: "Private",
    about: "Pathankot Polytechnic College, located opposite Canada Palace on Dalhousie Road in Mamun, Pathankot, is an established technical education center catering to northern Punjab and Himachal border regions. Approved by AICTE and affiliated with the Punjab State Board of Technical Education and Industrial Training (PSBTE & IT), the college offers 3-year diploma qualifications in Mechanical, Civil, Electrical, and Automobile Engineering with comprehensive laboratory setups.",
    ranking: 39,
    fees: "₹85,000",
    exams: "PSBTE Counseling / 10th Merit Based",
    img: "/images/campuses/campus_architecture_8.jpg",
    image: "/images/campuses/campus_architecture_8.jpg",
    gallery: [
      "https://smdrsdcollegepathankot.in/wp-content/uploads/2026/01/coll1.jpg",
      "/images/campuses/campus_architecture_8.jpg",
      "/images/campuses/campus_architecture_1.jpg"
    ],
    affiliation: "Punjab State Board of Technical Education & Industrial Training (PSBTE & IT) / AICTE",
    courses: [
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹85,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹85,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹85,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "Diploma in Automobile Engineering",
        duration: "3 Years",
        fees: "₹85,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ],
    highestPackage: "₹4.5 LPA",
    averagePackage: "₹2.6 LPA",
    placements: "75%"
  }
};

let appliedCount = 0;
for (const col of colleges) {
  if (batch166Updates[col.id]) {
    Object.assign(col, batch166Updates[col.id]);
    appliedCount++;
  }
}

console.log(`Updated ${appliedCount} colleges in siteData.`);
fs.writeFileSync(siteDataPath, JSON.stringify(siteData, null, 2), 'utf8');

// Update progress.json
const now = new Date().toISOString();
progress.verifiedColleges = 1660;
progress.lastUpdated = now;
progress.batchesCompleted = 166;
progress.currentBatch = 167;
if (!progress.batchHistory) progress.batchHistory = [];
progress.batchHistory.push({
  batch: 166,
  verifiedCount: 10,
  totalVerified: 1660,
  timestamp: now,
  collegeIds: Object.keys(batch166Updates).map(Number)
});
fs.writeFileSync(progressPath, JSON.stringify(progress, null, 2), 'utf8');

// Update all_verified_colleges.json
const newlyVerifiedList = Object.entries(batch166Updates).map(([idStr, val]) => ({
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
const batchMdHeader = `\n### Batch 166 (Colleges 1,651–1,660) — Punjab Engineering & Technical Institutions\n| ID | College Name | Location | State | Type | Website |\n|---|---|---|---|---|---|\n`;
let batchMdRows = '';
for (const item of newlyVerifiedList) {
  batchMdRows += `| ${item.id} | ${item.name} | ${item.location} | ${item.state} | ${item.type} | [${item.website}](${item.website}) |\n`;
}
mdContent += batchMdHeader + batchMdRows;
fs.writeFileSync(allVerifiedMdPath, mdContent, 'utf8');

console.log(`Batch 166 applied successfully! Total verified: ${progress.verifiedColleges}`);
