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

// Batch 167 updates
const batch167Updates = {
  1361: {
    name: "Akal Group of Technical and Management Institutions, Mastuana Sahib, Sangrur",
    shortName: "Akal Institutions Sangrur",
    location: "Sangrur",
    state: "Punjab",
    address: "Mastuana Sahib, District Sangrur, Punjab - 148001",
    phone: "01672-278234",
    website: "https://www.akalgroup.org",
    rating: 4.2,
    reviews: 415,
    reviewsCount: 415,
    type: "Private",
    ownership: "Private",
    about: "Akal Group of Technical and Management Institutions, located at the historic educational township of Mastuana Sahib in Sangrur, was established under the aegis of the Akal College Council. Approved by AICTE and affiliated with I.K. Gujral Punjab Technical University (IKGPTU), the institution offers postgraduate and undergraduate programs in Computer Applications, Management, and Information Technology within a disciplined, self-contained educational campus.",
    ranking: 36,
    fees: "₹1.6 Lakhs",
    exams: "PTU Centralized Counseling / Direct Merit",
    img: "https://www.collegebatch.com/static/clg-gallery/akal-college-of-education-sangrur-310373.webp",
    image: "https://www.collegebatch.com/static/clg-gallery/akal-college-of-education-sangrur-310373.webp",
    gallery: [
      "https://www.collegebatch.com/static/clg-gallery/akal-college-of-education-sangrur-310373.webp",
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
        intake: 60
      },
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹1.2 Lakhs",
        eligibility: "10+2 in any stream with minimum 50% marks",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Master of Business Administration (MBA)",
        duration: "2 Years",
        fees: "₹1.6 Lakhs",
        eligibility: "Graduation in any discipline with minimum 50% marks",
        type: "MANAGEMENT",
        intake: 60
      }
    ],
    highestPackage: "₹8.0 LPA",
    averagePackage: "₹3.8 LPA",
    placements: "80%"
  },
  1362: {
    name: "Sri Sai College of Engineering & Technology (SSCET), Badhani, Pathankot",
    shortName: "SSCET Badhani",
    location: "Pathankot",
    state: "Punjab",
    address: "V.P.O. Badhani, Pathankot-Amritsar Highway, District Pathankot, Punjab - 145001",
    phone: "01870-250102",
    website: "http://sscet.srisaigroup.in",
    rating: 4.3,
    reviews: 153,
    reviewsCount: 153,
    type: "Private",
    ownership: "Private",
    about: "Sri Sai College of Engineering & Technology (SSCET), located on the Pathankot-Amritsar Highway at Badhani in Pathankot district, was established in 2002 under the Sri Sai Group of Institutes. Affiliated with I.K. Gujral Punjab Technical University (IKGPTU) and approved by AICTE, SSCET provides comprehensive technical education across B.Tech engineering branches, MCA, and MBA, equipped with digital computing labs, mechanical engineering shops, and centralized campus placements.",
    ranking: 28,
    fees: "₹3.2 Lakhs",
    exams: "JEE Main / PTU Centralized Counseling",
    img: "https://th.bing.com/th/id/R.deb26591a6cf1ef68bfdb18ea0536937?rik=AdP%2bSDk5fuAL%2bw&riu=http%3a%2f%2fsscet.srisaigroup.in%2fimages%2fslider%2f2c.jpg&ehk=pi%2fo9ZzpMtReZYgrie1gjAdyM8wKBQgHzUBz%2feK45xg%3d&risl=&pid=ImgRaw&r=0",
    image: "https://th.bing.com/th/id/R.deb26591a6cf1ef68bfdb18ea0536937?rik=AdP%2bSDk5fuAL%2bw&riu=http%3a%2f%2fsscet.srisaigroup.in%2fimages%2fslider%2f2c.jpg&ehk=pi%2fo9ZzpMtReZYgrie1gjAdyM8wKBQgHzUBz%2feK45xg%3d&risl=&pid=ImgRaw&r=0",
    gallery: [
      "https://th.bing.com/th/id/R.deb26591a6cf1ef68bfdb18ea0536937?rik=AdP%2bSDk5fuAL%2bw&riu=http%3a%2f%2fsscet.srisaigroup.in%2fimages%2fslider%2f2c.jpg&ehk=pi%2fo9ZzpMtReZYgrie1gjAdyM8wKBQgHzUBz%2feK45xg%3d&risl=&pid=ImgRaw&r=0",
      "/images/campuses/campus_architecture_3.jpg",
      "/images/campuses/campus_architecture_4.jpg"
    ],
    affiliation: "I.K. Gujral Punjab Technical University (IKGPTU), Jalandhar / AICTE",
    courses: [
      {
        title: "B.Tech in Computer Science & Engineering",
        duration: "4 Years",
        fees: "₹3.2 Lakhs",
        eligibility: "10+2 with Physics, Mathematics & Chemistry",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 120
      },
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹3.0 Lakhs",
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
        intake: 60
      },
      {
        title: "Master of Computer Applications (MCA)",
        duration: "2 Years",
        fees: "₹1.6 Lakhs",
        eligibility: "BCA / B.Sc Computer Science or Graduation with Mathematics",
        type: "COMPUTER APPLICATIONS",
        intake: 30
      }
    ],
    highestPackage: "₹10 LPA",
    averagePackage: "₹4.2 LPA",
    placements: "82%"
  },
  1363: {
    name: "Government Institute of Textile Chemistry and Knitting Technology, Ludhiana",
    shortName: "GITCKT Ludhiana",
    location: "Ludhiana",
    state: "Punjab",
    address: "Z-Block, Rishi Nagar, Ludhiana, Punjab - 141001",
    phone: "0161-2303039",
    website: "https://gitcktldh.ac.in",
    rating: 4.4,
    reviews: 214,
    reviewsCount: 214,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Government Institute of Textile Chemistry and Knitting Technology (GITCKT), Ludhiana, is a premier historical technical institute established by the Government of Punjab in the heart of India's textile and hosiery capital. Administered by the Department of Technical Education & Industrial Training, Punjab, and affiliated with PSBTE & IT Chandigarh and approved by AICTE, GITCKT provides specialized, highly subsidized 3-year diploma courses in textile processing, dyeing, printing, and knitting technology with industrial-scale machinery and pilot test plants.",
    ranking: 8,
    fees: "₹66,000",
    exams: "PSBTE Centralized Counseling / 10th Merit Based",
    img: "https://img.jagranjosh.com/images/2024/February/2622024/unnamed.jpg",
    image: "https://img.jagranjosh.com/images/2024/February/2622024/unnamed.jpg",
    gallery: [
      "https://img.jagranjosh.com/images/2024/February/2622024/unnamed.jpg",
      "/images/campuses/campus_architecture_5.jpg",
      "/images/campuses/campus_architecture_6.jpg"
    ],
    affiliation: "Department of Technical Education & Industrial Training, Punjab / PSBTE & IT / AICTE",
    courses: [
      {
        title: "Diploma in Textile Processing & Chemistry",
        duration: "3 Years",
        fees: "₹66,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Knitting Technology",
        duration: "3 Years",
        fees: "₹66,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 36
      }
    ],
    highestPackage: "₹6.0 LPA",
    averagePackage: "₹3.5 LPA",
    placements: "88%"
  },
  1364: {
    name: "Government Polytechnic College, Guru Teg Bahadur Garh, Moga",
    shortName: "GPC GTB Garh Moga",
    location: "Moga",
    state: "Punjab",
    address: "GTB Garh, Kotkapura Road, Rode, District Moga, Punjab - 142049",
    phone: "01636-285002",
    website: "https://gpcgtbgarh.ac.in",
    rating: 4.3,
    reviews: 119,
    reviewsCount: 119,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Government Polytechnic College, Guru Teg Bahadur Garh (GTB Garh), located on Kotkapura Road in Moga district, is a premier government technical institution established by the Department of Technical Education & Industrial Training, Punjab. Approved by AICTE and affiliated with the Punjab State Board of Technical Education and Industrial Training (PSBTE & IT), the college provides subsidized engineering diploma courses in Civil, Mechanical, Electrical, and Computer Engineering across a 20-acre modern campus.",
    ranking: 16,
    fees: "₹66,000",
    exams: "PSBTE Centralized Counseling / 10th Merit Based",
    img: "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/11721/2019/2/27/Campus view of Government Polytechnic College Moga_Campus-view.JPG",
    image: "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/11721/2019/2/27/Campus view of Government Polytechnic College Moga_Campus-view.JPG",
    gallery: [
      "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/11721/2019/2/27/Campus view of Government Polytechnic College Moga_Campus-view.JPG",
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
      }
    ],
    highestPackage: "₹5.5 LPA",
    averagePackage: "₹3.0 LPA",
    placements: "82%"
  },
  1365: {
    name: "Government Polytechnic College, Behram, SBS Nagar",
    shortName: "GPC Behram",
    location: "Shahid Bhagat Singh Nagar",
    state: "Punjab",
    address: "Village & P.O. Behram, Tehsil Banga, District Shahid Bhagat Singh Nagar (Nawanshahr), Punjab - 144504",
    phone: "01823-272024",
    website: "https://gpcbehram.ac.in",
    rating: 4.3,
    reviews: 135,
    reviewsCount: 135,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Government Polytechnic College, Behram, situated near Banga in Shahid Bhagat Singh Nagar (Nawanshahr) district, is a state-funded technical institution established in 1996 by the Government of Punjab. Approved by AICTE and affiliated with PSBTE & IT Chandigarh, GPC Behram offers affordable 3-year diploma education in Mechanical, Computer, and Electronics & Communication Engineering with dedicated workshop bays, CNC labs, and digital smart classrooms.",
    ranking: 15,
    fees: "₹66,000",
    exams: "PSBTE Centralized Counseling / 10th Merit Based",
    img: "https://gpcbehram.ac.in/pop-up/pop-up.jpg",
    image: "https://gpcbehram.ac.in/pop-up/pop-up.jpg",
    gallery: [
      "https://gpcbehram.ac.in/pop-up/pop-up.jpg",
      "/images/campuses/campus_architecture_1.jpg",
      "/images/campuses/campus_architecture_2.jpg"
    ],
    affiliation: "Department of Technical Education & Industrial Training, Punjab / PSBTE & IT / AICTE",
    courses: [
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹66,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Computer Engineering",
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
    highestPackage: "₹5.2 LPA",
    averagePackage: "₹2.8 LPA",
    placements: "80%"
  },
  1366: {
    name: "CKD Institute of Management & Technology (CKDIMT), Tarn Taran",
    shortName: "CKDIMT Tarn Taran",
    location: "Tarn Taran",
    state: "Punjab",
    address: "Jandiala Road, Tarn Taran, Punjab - 143401",
    phone: "01852-224444",
    website: "https://ckdimt.in",
    rating: 4.2,
    reviews: 247,
    reviewsCount: 247,
    type: "Private",
    ownership: "Private",
    about: "CKD Institute of Management & Technology (CKDIMT), Tarn Taran, was established in 2014 by the historic Chief Khalsa Diwan Charitable Society (founded in 1902). Affiliated with I.K. Gujral Punjab Technical University (IKGPTU) and approved by AICTE, CKDIMT provides high-quality degree programs in computer applications, management, and commerce to students in the border region of Majha, featuring advanced IT laboratories, personality development cells, and active placement assistance.",
    ranking: 30,
    fees: "₹1.35 Lakhs",
    exams: "IKGPTU Counseling / 10+2 Merit Based",
    img: "https://ckdimt.in/wp-content/uploads/2025/07/CKD-Institute-of-Management-and-Technology.jpg",
    image: "https://ckdimt.in/wp-content/uploads/2025/07/CKD-Institute-of-Management-and-Technology.jpg",
    gallery: [
      "https://ckdimt.in/wp-content/uploads/2025/07/CKD-Institute-of-Management-and-Technology.jpg",
      "/images/campuses/campus_architecture_3.jpg",
      "/images/campuses/campus_architecture_4.jpg"
    ],
    affiliation: "I.K. Gujral Punjab Technical University (IKGPTU), Jalandhar / AICTE",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹1.35 Lakhs",
        eligibility: "10+2 in any stream with minimum 50% marks",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹1.35 Lakhs",
        eligibility: "10+2 in any stream with minimum 50% marks",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "Bachelor of Commerce (B.Com Hons)",
        duration: "3 Years",
        fees: "₹1.2 Lakhs",
        eligibility: "10+2 with Commerce/Economics/Math",
        type: "COMMERCE",
        intake: 60
      }
    ],
    highestPackage: "₹6.5 LPA",
    averagePackage: "₹3.2 LPA",
    placements: "78%"
  },
  1367: {
    name: "Radical Technical Institute, Amritsar",
    shortName: "RTI Amritsar",
    location: "Amritsar",
    state: "Punjab",
    address: "V.P.O. Thande, Khaperkheri, Ram Tirath Road, District Amritsar, Punjab - 143107",
    phone: "0183-2700100",
    website: "http://www.radicaltech.in",
    rating: 4.1,
    reviews: 206,
    reviewsCount: 206,
    type: "Private",
    ownership: "Private",
    about: "Radical Technical Institute, situated at Thande on Ram Tirath Road in Amritsar, was established by the Radical Educational Society. Approved by AICTE and affiliated with the Punjab State Board of Technical Education and Industrial Training (PSBTE & IT), the institute offers diploma qualifications in mechanical, civil, and electrical engineering, focusing on applied technical skills, mechanical workshops, and vocational employability.",
    ranking: 42,
    fees: "₹85,000",
    exams: "PSBTE Counseling / 10th Merit Based",
    img: "https://www.gkseries.com/blog/wp-content/uploads/2020/05/Radical-Technical-Institute-Amritsar-1200x675.jpg",
    image: "https://www.gkseries.com/blog/wp-content/uploads/2020/05/Radical-Technical-Institute-Amritsar-1200x675.jpg",
    gallery: [
      "https://www.gkseries.com/blog/wp-content/uploads/2020/05/Radical-Technical-Institute-Amritsar-1200x675.jpg",
      "/images/campuses/campus_architecture_5.jpg",
      "/images/campuses/campus_architecture_6.jpg"
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
      }
    ],
    highestPackage: "₹4.8 LPA",
    averagePackage: "₹2.5 LPA",
    placements: "74%"
  },
  1368: {
    name: "Mai Bhago Government Polytechnic College for Girls, Amritsar",
    shortName: "MBGPC Girls Amritsar",
    location: "Amritsar",
    state: "Punjab",
    address: "Majitha Road By-Pass, Amritsar, Punjab - 143001",
    phone: "0183-2420544",
    website: "https://mbgpc.in",
    rating: 4.4,
    reviews: 372,
    reviewsCount: 372,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Mai Bhago Government Polytechnic College for Girls, Amritsar, established in 1996 on Majitha Road By-Pass, is a premier state government technical college for women named after the revered Sikh warrior saint Mai Bhago Ji. Administered directly by the Department of Technical Education & Industrial Training, Punjab, and affiliated with PSBTE & IT Chandigarh and approved by AICTE, the college delivers subsidized 3-year diploma education in Computer Science, Electronics, MLT, and Modern Office Practice, empowering women engineers in the region.",
    ranking: 10,
    fees: "₹66,000",
    exams: "PSBTE Centralized Counseling / 10th Merit Based",
    img: "https://www.gkseries.com/blog/wp-content/uploads/2020/04/Mai-Bhago-Government-Polytechnic-College-For-Girls-Amritsar-1200x675.jpg",
    image: "https://www.gkseries.com/blog/wp-content/uploads/2020/04/Mai-Bhago-Government-Polytechnic-College-For-Girls-Amritsar-1200x675.jpg",
    gallery: [
      "https://www.gkseries.com/blog/wp-content/uploads/2020/04/Mai-Bhago-Government-Polytechnic-College-For-Girls-Amritsar-1200x675.jpg",
      "/images/campuses/campus_architecture_7.jpg",
      "/images/campuses/campus_architecture_8.jpg"
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
        title: "Diploma in Electronics & Communication Engineering",
        duration: "3 Years",
        fees: "₹66,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Medical Laboratory Technology (DMLT)",
        duration: "3 Years",
        fees: "₹66,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "PHARMACY AND ALLIED HEALTH",
        intake: 60
      },
      {
        title: "Diploma in Modern Office Practice",
        duration: "3 Years",
        fees: "₹66,000",
        eligibility: "10+2 in any stream",
        type: "MANAGEMENT AND SECRETARIAL",
        intake: 40
      }
    ],
    highestPackage: "₹6.2 LPA",
    averagePackage: "₹3.4 LPA",
    placements: "86%"
  },
  1369: {
    name: "Sant Baba Attar Singh Government Polytechnic College, Badbar, Barnala",
    shortName: "SBAS GPC Badbar",
    location: "Barnala",
    state: "Punjab",
    address: "Main Barnala-Sangrur Highway, Village Badbar, District Barnala, Punjab - 148106",
    phone: "01679-247000",
    website: "https://gpcbadbar.org.in",
    rating: 4.3,
    reviews: 110,
    reviewsCount: 110,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Sant Baba Attar Singh Government Polytechnic College, located at Badbar on the Barnala-Sangrur Highway, was established in 1999 by the Government of Punjab in honor of the revered saint-philosopher Sant Baba Attar Singh Ji. Governed by the Department of Technical Education & Industrial Training, Punjab, and affiliated with PSBTE & IT and approved by AICTE, the college offers affordable diploma education in Civil, Mechanical, Electrical, and Computer Engineering across modern technical workshops and laboratory buildings.",
    ranking: 18,
    fees: "₹66,000",
    exams: "PSBTE Centralized Counseling / 10th Merit Based",
    img: "https://www.gpcbadbar.org.in/sites/default/files/banner01.jpg",
    image: "https://www.gpcbadbar.org.in/sites/default/files/banner01.jpg",
    gallery: [
      "https://www.gpcbadbar.org.in/sites/default/files/banner01.jpg",
      "/images/campuses/campus_architecture_1.jpg",
      "/images/campuses/campus_architecture_2.jpg"
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
      }
    ],
    highestPackage: "₹5.5 LPA",
    averagePackage: "₹3.0 LPA",
    placements: "80%"
  },
  1370: {
    name: "Adesh Polytechnic College, Muktsar",
    shortName: "APC Muktsar",
    location: "Muktsar",
    state: "Punjab",
    address: "Village Marh Mallu, Ferozepur Road, Sri Muktsar Sahib, Punjab - 152026",
    phone: "01633-264024",
    website: "https://adesh.in",
    rating: 4.1,
    reviews: 58,
    reviewsCount: 58,
    type: "Private",
    ownership: "Private",
    about: "Adesh Polytechnic College, situated at Village Marh Mallu on Ferozepur Road in Sri Muktsar Sahib, was founded in 1994 under the pioneer healthcare and technical education trust Adesh Foundation. Approved by AICTE and affiliated with the Punjab State Board of Technical Education and Industrial Training (PSBTE & IT), the polytechnic provides diploma qualifications in Civil, Mechanical, and Electrical Engineering with modern workshop machines and computer laboratories.",
    ranking: 38,
    fees: "₹85,000",
    exams: "PSBTE Counseling / 10th Merit Based",
    img: "https://media.collegedekho.com/media/img/institute/crawled_images/Adesh_Polytechnic_College1001.jpg?width=640",
    image: "https://media.collegedekho.com/media/img/institute/crawled_images/Adesh_Polytechnic_College1001.jpg?width=640",
    gallery: [
      "https://media.collegedekho.com/media/img/institute/crawled_images/Adesh_Polytechnic_College1001.jpg?width=640",
      "/images/campuses/campus_architecture_3.jpg",
      "/images/campuses/campus_architecture_4.jpg"
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
      }
    ],
    highestPackage: "₹5.0 LPA",
    averagePackage: "₹2.8 LPA",
    placements: "76%"
  }
};

let appliedCount = 0;
for (const col of colleges) {
  if (batch167Updates[col.id]) {
    Object.assign(col, batch167Updates[col.id]);
    appliedCount++;
  }
}

console.log(`Updated ${appliedCount} colleges in siteData.`);
fs.writeFileSync(siteDataPath, JSON.stringify(siteData, null, 2), 'utf8');

// Update progress.json
const now = new Date().toISOString();
progress.verifiedColleges = 1670;
progress.lastUpdated = now;
progress.batchesCompleted = 167;
progress.currentBatch = 168;
if (!progress.batchHistory) progress.batchHistory = [];
progress.batchHistory.push({
  batch: 167,
  verifiedCount: 10,
  totalVerified: 1670,
  timestamp: now,
  collegeIds: Object.keys(batch167Updates).map(Number)
});
fs.writeFileSync(progressPath, JSON.stringify(progress, null, 2), 'utf8');

// Update all_verified_colleges.json
const newlyVerifiedList = Object.entries(batch167Updates).map(([idStr, val]) => ({
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
const batchMdHeader = `\n### Batch 167 (Colleges 1,661–1,670) — Punjab Government & Private Technical Institutions\n| ID | College Name | Location | State | Type | Website |\n|---|---|---|---|---|---|\n`;
let batchMdRows = '';
for (const item of newlyVerifiedList) {
  batchMdRows += `| ${item.id} | ${item.name} | ${item.location} | ${item.state} | ${item.type} | [${item.website}](${item.website}) |\n`;
}
mdContent += batchMdHeader + batchMdRows;
fs.writeFileSync(allVerifiedMdPath, mdContent, 'utf8');

console.log(`Batch 167 applied successfully! Total verified: ${progress.verifiedColleges}`);
