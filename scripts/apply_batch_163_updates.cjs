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

// Batch 163 updates
const batch163Updates = {
  1321: {
    name: "Aman Bhalla Institute of Management and Technology",
    shortName: "ABIMT Pathankot",
    location: "Pathankot",
    state: "Punjab",
    address: "Kotli, Jammu-Amritsar Highway, Pathankot, Punjab - 145001",
    phone: "01870-250001",
    website: "https://amanbhallagroup.in",
    rating: 4.2,
    reviews: 185,
    reviewsCount: 185,
    type: "Private",
    ownership: "Private",
    about: "Aman Bhalla Institute of Management and Technology (ABIMT), Pathankot, established in 2008 at Kotli on the Jammu-Amritsar Highway under the Aman Bhalla Foundation, is a premier self-financing institution in northern Punjab. Affiliated with I.K. Gujral Punjab Technical University and approved by AICTE, ABIMT offers industry-relevant programs in computing, management, and technical disciplines with modern computing infrastructure and dedicated career counseling.",
    ranking: 77,
    fees: "₹85,000 - ₹2.60 Lakhs",
    exams: "PTU Centralized Counseling / Merit Based",
    img: "https://img.jagranjosh.com/images/2024/February/1322024/campus898.jpg",
    image: "https://img.jagranjosh.com/images/2024/February/1322024/campus898.jpg",
    gallery: [
      "https://img.jagranjosh.com/images/2024/February/1322024/campus898.jpg",
      "/images/campuses/campus_architecture_1.jpg",
      "/images/campuses/campus_architecture_2.jpg"
    ],
    affiliation: "I.K. Gujral Punjab Technical University (IKGPTU) / AICTE Approved",
    courses: [
      {
        title: "BCA (Bachelor of Computer Applications)",
        duration: "3 Years",
        fees: "₹85,000",
        eligibility: "10+2 with Mathematics/Computer Science",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "BBA (Bachelor of Business Administration)",
        duration: "3 Years",
        fees: "₹85,000",
        eligibility: "10+2 in any stream with minimum 50% marks",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹2.60 Lakhs",
        eligibility: "10+2 with Physics and Mathematics (JEE Main / PTU)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ],
    highestPackage: "₹6.5 LPA",
    averagePackage: "₹3.2 LPA",
    placements: "78%",
    facilities: ["Computer Center", "Digital Library", "Seminar Hall", "Transport Facility", "Sports Ground", "Cafeteria", "Training & Placement Cell"],
    map_url: "https://www.google.com/maps/search/?api=1&query=Aman+Bhalla+Institute+Kotli+Pathankot+Punjab",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Aman+Bhalla+Institute+Kotli+Pathankot+Punjab"
  },
  1322: {
    name: "Guru Nanak College, Budhlada",
    shortName: "GNC Budhlada",
    location: "Mansa",
    state: "Punjab",
    address: "Bareta-Jakhal Road, Budhlada, Mansa District, Punjab - 151502",
    phone: "01652-256606",
    website: "https://gncbudhlada.org",
    rating: 4.6,
    reviews: 457,
    reviewsCount: 457,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Guru Nanak College, Budhlada, established in 1971 to commemorate the 500th Birth Anniversary of Sri Guru Nanak Dev Ji, is a premier autonomous government-aided institution managed by the Shiromani Gurdwara Parbandhak Committee (SGPC) under the grant-in-aid scheme of the Government of Punjab. Affiliated with Punjabi University, Patiala, and accredited by NAAC with 'A' Grade (CGPA 3.23), the college provides highly subsidized education in advanced computing (MCA, M.Sc IT), management, sciences, and humanities with exceptional modern infrastructure in the Malwa heartland.",
    ranking: 30,
    fees: "₹75,000 - ₹1.10 Lakhs",
    exams: "Merit Based / Punjabi University Allotment",
    img: "https://www.collegebatch.com/static/clg-gallery/guru-nanak-college-budhlada-mansa-259449.webp",
    image: "https://www.collegebatch.com/static/clg-gallery/guru-nanak-college-budhlada-mansa-259449.webp",
    gallery: [
      "https://www.collegebatch.com/static/clg-gallery/guru-nanak-college-budhlada-mansa-259449.webp",
      "/images/campuses/campus_architecture_3.jpg",
      "/images/campuses/campus_architecture_4.jpg"
    ],
    affiliation: "Autonomous College / Punjabi University, Patiala / UGC 12(B) & 2(f) / NAAC A Grade",
    courses: [
      {
        title: "Master of Computer Applications (MCA)",
        duration: "2 Years",
        fees: "₹1.10 Lakhs",
        eligibility: "BCA / B.Sc Computer Science / B.Sc / B.Com with Mathematics",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "BCA (Bachelor of Computer Applications)",
        duration: "3 Years",
        fees: "₹75,000",
        eligibility: "10+2 with Mathematics/Computer Science",
        type: "COMPUTER APPLICATIONS",
        intake: 120
      },
      {
        title: "BBA (Bachelor of Business Administration)",
        duration: "3 Years",
        fees: "₹75,000",
        eligibility: "10+2 in any stream with minimum 50% marks",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "M.Sc (Information Technology)",
        duration: "2 Years",
        fees: "₹80,000",
        eligibility: "BCA / B.Sc IT / B.Sc Computer Science",
        type: "COMPUTER APPLICATIONS",
        intake: 40
      }
    ],
    highestPackage: "₹7 LPA",
    averagePackage: "₹3.5 LPA",
    placements: "84%",
    facilities: ["Advanced IT Laboratories", "Air-Conditioned Central Library", "Indoor Sports Stadium", "Girls Hostel", "Botanical Garden", "Auditorium", "Placement Cell"],
    map_url: "https://www.google.com/maps/search/?api=1&query=Guru+Nanak+College+Budhlada+Mansa+Punjab",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Guru+Nanak+College+Budhlada+Mansa+Punjab"
  },
  1323: {
    name: "Guru Teg Bahadur Institute of Management and Technology",
    shortName: "GTBIMT Dakha",
    location: "Ludhiana",
    state: "Punjab",
    address: "College Road, VPO Dakha, District Ludhiana, Punjab - 141102",
    phone: "0161-2877395",
    website: "https://gtbimt.com",
    rating: 4.3,
    reviews: 466,
    reviewsCount: 466,
    type: "Private",
    ownership: "Private",
    about: "Guru Teg Bahadur Institute of Management and Technology (GTBIMT), Dakha (Ludhiana), established in 1997, is a leading professional education campus managed by the GTB Educational Trust. Affiliated with I.K. Gujral Punjab Technical University and approved by AICTE, GTBIMT provides quality degrees in computer applications, management, and commerce with well-equipped modern computer labs, expansive library facilities, and an active campus recruitment cell.",
    ranking: 28,
    fees: "₹85,000 - ₹1.50 Lakhs",
    exams: "PTU Centralized Counseling / Merit Based",
    img: "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/20175/2021/6/30/Campus View of Guru Teg Bahadur Institute of Management and Technology Ludhiana_Campus-View.png",
    image: "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/20175/2021/6/30/Campus View of Guru Teg Bahadur Institute of Management and Technology Ludhiana_Campus-View.png",
    gallery: [
      "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/20175/2021/6/30/Campus View of Guru Teg Bahadur Institute of Management and Technology Ludhiana_Campus-View.png",
      "/images/campuses/campus_architecture_1.jpg",
      "/images/campuses/campus_architecture_2.jpg"
    ],
    affiliation: "I.K. Gujral Punjab Technical University (IKGPTU) / AICTE Approved",
    courses: [
      {
        title: "BCA (Bachelor of Computer Applications)",
        duration: "3 Years",
        fees: "₹85,000",
        eligibility: "10+2 with Mathematics/Computer Science",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "BBA (Bachelor of Business Administration)",
        duration: "3 Years",
        fees: "₹85,000",
        eligibility: "10+2 in any stream with minimum 50% marks",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "Master of Business Administration (MBA)",
        duration: "2 Years",
        fees: "₹1.50 Lakhs",
        eligibility: "Graduation with minimum 50% marks (CMAT / PTU)",
        type: "MANAGEMENT",
        intake: 60
      }
    ],
    highestPackage: "₹6 LPA",
    averagePackage: "₹3.2 LPA",
    placements: "80%",
    facilities: ["Computer Center", "Central Library", "Auditorium", "Sports Complex", "Cafeteria", "Bus Transport across Ludhiana", "Placement Cell"],
    map_url: "https://www.google.com/maps/search/?api=1&query=Guru+Teg+Bahadur+Institute+Dakha+Ludhiana+Punjab",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Guru+Teg+Bahadur+Institute+Dakha+Ludhiana+Punjab"
  },
  1324: {
    name: "S. Amarjit Singh Sahi Government Polytechnic College, Talwara",
    shortName: "SAS Govt Polytechnic Talwara",
    location: "Hoshiarpur",
    state: "Punjab",
    address: "Sector-3, Near Govt. ITI, Talwara Township, Tehsil Mukerian, District Hoshiarpur, Punjab - 144216",
    phone: "01883-238466",
    website: "https://gpctalwara.ac.in",
    rating: 4.4,
    reviews: 221,
    reviewsCount: 221,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "S. Amarjit Singh Sahi Government Polytechnic College, Talwara, is a premier state government technical diploma institution functioning under the Department of Technical Education and Industrial Training, Government of Punjab. Named in honor of the revered public figure S. Amarjit Singh Sahi, the college is approved by AICTE and affiliated with the Punjab State Board of Technical Education, offering affordable 3-year engineering diplomas with hands-on workshop training for rural youth of the Kandi region.",
    ranking: 79,
    fees: "₹45,000",
    exams: "PSBTE Joint Entrance Test (JET) / Merit Allotment",
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEidxu_-ontUqGlKkkrJ0bIxSONwNC00qXj9yODLY5Zbl6vVH9MUMThPUnJI561MArkHe1NoXKKHeFZ09Kx5FyPZ9TikzCH773KUaIgBey9osSOVdYOLWi9Me3-99vTYNCDNXi00WuJPhYat/s1600/DSC_1586.jpg",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEidxu_-ontUqGlKkkrJ0bIxSONwNC00qXj9yODLY5Zbl6vVH9MUMThPUnJI561MArkHe1NoXKKHeFZ09Kx5FyPZ9TikzCH773KUaIgBey9osSOVdYOLWi9Me3-99vTYNCDNXi00WuJPhYat/s1600/DSC_1586.jpg",
    gallery: [
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEidxu_-ontUqGlKkkrJ0bIxSONwNC00qXj9yODLY5Zbl6vVH9MUMThPUnJI561MArkHe1NoXKKHeFZ09Kx5FyPZ9TikzCH773KUaIgBey9osSOVdYOLWi9Me3-99vTYNCDNXi00WuJPhYat/s1600/DSC_1586.jpg",
      "/images/campuses/campus_architecture_3.jpg",
      "/images/campuses/campus_architecture_4.jpg"
    ],
    affiliation: "Department of Technical Education, Government of Punjab / PSBTE & IT / AICTE",
    courses: [
      {
        title: "Diploma in Computer Science & Engineering",
        duration: "3 Years",
        fees: "₹45,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 54
      },
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹45,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹45,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹45,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ],
    highestPackage: "₹4.8 LPA",
    averagePackage: "₹2.6 LPA",
    placements: "76%",
    facilities: ["Computer Center", "Mechanical Workshop", "Civil Survey Lab", "Central Library", "Sports Grounds", "Government Scholarship Facilitation Cell"],
    map_url: "https://www.google.com/maps/search/?api=1&query=S.+Amarjit+Singh+Sahi+Government+Polytechnic+College+Talwara+Hoshiarpur+Punjab",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=S.+Amarjit+Singh+Sahi+Government+Polytechnic+College+Talwara+Hoshiarpur+Punjab"
  },
  1325: {
    name: "PCTE Institute of Engineering and Technology, Ludhiana",
    shortName: "PIET Ludhiana",
    location: "Ludhiana",
    state: "Punjab",
    address: "PCTE Campus-II, Near Baddowal Cantt, Ferozepur Road, Ludhiana, Punjab - 142021",
    phone: "0161-2888500",
    website: "https://pcte.edu.in",
    rating: 4.4,
    reviews: 104,
    reviewsCount: 104,
    type: "Private",
    ownership: "Private",
    about: "PCTE Institute of Engineering and Technology (PIET), situated on Campus-II along Ferozepur Road in Ludhiana, is the dedicated technical education arm of the PCTE Group of Institutes. Approved by AICTE and affiliated with I.K. Gujral Punjab Technical University, PIET provides state-of-the-art engineering and computing education with a heavy focus on artificial intelligence, coding bootcamps, and global corporate placements.",
    ranking: 96,
    fees: "₹1.45 Lakhs - ₹3.20 Lakhs",
    exams: "JEE Main / PTU Centralized Counseling",
    img: "https://globalassistant.info/wp-content/uploads/2022/06/Punjab-College-of-Technical-Education-PCTE-1024x574.jpeg",
    image: "https://globalassistant.info/wp-content/uploads/2022/06/Punjab-College-of-Technical-Education-PCTE-1024x574.jpeg",
    gallery: [
      "https://globalassistant.info/wp-content/uploads/2022/06/Punjab-College-of-Technical-Education-PCTE-1024x574.jpeg",
      "/images/campuses/campus_architecture_1.jpg",
      "/images/campuses/campus_architecture_2.jpg"
    ],
    affiliation: "I.K. Gujral Punjab Technical University (IKGPTU) / AICTE Approved",
    courses: [
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹3.20 Lakhs",
        eligibility: "10+2 with Physics and Mathematics (JEE Main / PTU)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 120
      },
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹2.80 Lakhs",
        eligibility: "10+2 with PCM (JEE Main / PTU)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "BCA (Bachelor of Computer Applications)",
        duration: "3 Years",
        fees: "₹1.45 Lakhs",
        eligibility: "10+2 with Mathematics/Computer Science",
        type: "COMPUTER APPLICATIONS",
        intake: 180
      }
    ],
    highestPackage: "₹12 LPA",
    averagePackage: "₹4.8 LPA",
    placements: "88%",
    facilities: ["Advanced Programming Labs", "Robotics Lab", "Engineering Workshops", "Digital Library", "Hostels", "Sports Arena", "Corporate Interface Centre"],
    map_url: "https://www.google.com/maps/search/?api=1&query=PCTE+Institute+of+Engineering+and+Technology+Baddowal+Ludhiana+Punjab",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=PCTE+Institute+of+Engineering+and+Technology+Baddowal+Ludhiana+Punjab"
  },
  1326: {
    name: "M.K. Group of Institutes, Amritsar",
    shortName: "MKGI Amritsar",
    location: "Amritsar",
    state: "Punjab",
    address: "Sohian Kalan, Majitha Road, Amritsar, Punjab - 143601",
    phone: "0183-2783850",
    website: "https://mkeducation.in",
    rating: 4.3,
    reviews: 441,
    reviewsCount: 441,
    type: "Private",
    ownership: "Private",
    about: "M.K. Group of Institutes (MKGI), established in 2010 on Majitha Road in Sohian Kalan, Amritsar, by the M.K. Education Society, is a leading integrated campus in the holy city. Approved by AICTE and affiliated with I.K. Gujral Punjab Technical University, MKGI provides high-quality education in civil, computer, and mechanical engineering, alongside business administration and computer applications with industry-geared labs and comprehensive career grooming.",
    ranking: 35,
    fees: "₹85,000 - ₹2.80 Lakhs",
    exams: "PTU Counseling / JEE Main / 10+2 Merit",
    img: "https://www.gkseries.com/blog/wp-content/uploads/2020/04/MK-Group-of-Institutions-Amritsar-1200x675.jpg",
    image: "https://www.gkseries.com/blog/wp-content/uploads/2020/04/MK-Group-of-Institutions-Amritsar-1200x675.jpg",
    gallery: [
      "https://www.gkseries.com/blog/wp-content/uploads/2020/04/MK-Group-of-Institutions-Amritsar-1200x675.jpg",
      "/images/campuses/campus_architecture_3.jpg",
      "/images/campuses/campus_architecture_4.jpg"
    ],
    affiliation: "I.K. Gujral Punjab Technical University (IKGPTU) / AICTE Approved",
    courses: [
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹2.60 Lakhs",
        eligibility: "10+2 with Physics and Mathematics (JEE Main / PTU)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹2.80 Lakhs",
        eligibility: "10+2 with PCM (JEE Main / PTU)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "BCA (Bachelor of Computer Applications)",
        duration: "3 Years",
        fees: "₹85,000",
        eligibility: "10+2 with Mathematics/Computer Science",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "BBA (Bachelor of Business Administration)",
        duration: "3 Years",
        fees: "₹85,000",
        eligibility: "10+2 in any stream with minimum 50% marks",
        type: "MANAGEMENT",
        intake: 60
      }
    ],
    highestPackage: "₹8 LPA",
    averagePackage: "₹3.6 LPA",
    placements: "80%",
    facilities: ["Computer Center", "Civil Survey & Testing Lab", "Central Library", "Sports Complex", "Cafeteria", "Bus Transport", "Placement Cell"],
    map_url: "https://www.google.com/maps/search/?api=1&query=MK+Group+of+Institutes+Sohian+Kalan+Majitha+Road+Amritsar+Punjab",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=MK+Group+of+Institutes+Sohian+Kalan+Majitha+Road+Amritsar+Punjab"
  },
  1327: {
    name: "DIPS Institute of Management & Technology, Jalandhar",
    shortName: "DIPS IMT Jalandhar",
    location: "Jalandhar",
    state: "Punjab",
    address: "Ramneek Avenue, Pathankot Bye Pass, Jalandhar, Punjab - 144012",
    phone: "0181-5002472",
    website: "https://dipsimt.com",
    rating: 4.3,
    reviews: 513,
    reviewsCount: 513,
    type: "Private",
    ownership: "Private",
    about: "DIPS Institute of Management & Technology (DIPS IMT), Jalandhar, established under the prestigious DIPS Chain of Institutions, is a premier management and computing college situated on the Pathankot Bye Pass. Affiliated with I.K. Gujral Punjab Technical University and approved by AICTE, DIPS IMT offers practical, industry-oriented undergraduate education in computer applications, commerce, business administration, and information technology with well-equipped modern IT infrastructure.",
    ranking: 70,
    fees: "₹85,000",
    exams: "PTU Counseling / Merit Based",
    img: "https://daqwpj7vq235r.cloudfront.net/images/mba-institute/dips-institute-of-management-and-technology-campus-building.png",
    image: "https://daqwpj7vq235r.cloudfront.net/images/mba-institute/dips-institute-of-management-and-technology-campus-building.png",
    gallery: [
      "https://daqwpj7vq235r.cloudfront.net/images/mba-institute/dips-institute-of-management-and-technology-campus-building.png",
      "/images/campuses/campus_architecture_1.jpg",
      "/images/campuses/campus_architecture_2.jpg"
    ],
    affiliation: "I.K. Gujral Punjab Technical University (IKGPTU) / AICTE Approved",
    courses: [
      {
        title: "BCA (Bachelor of Computer Applications)",
        duration: "3 Years",
        fees: "₹85,000",
        eligibility: "10+2 with Mathematics/Computer Science",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "BBA (Bachelor of Business Administration)",
        duration: "3 Years",
        fees: "₹85,000",
        eligibility: "10+2 in any stream with minimum 50% marks",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "B.Com (Honours)",
        duration: "3 Years",
        fees: "₹75,000",
        eligibility: "10+2 with Commerce / Mathematics",
        type: "COMMERCE",
        intake: 60
      }
    ],
    highestPackage: "₹6 LPA",
    averagePackage: "₹3.4 LPA",
    placements: "82%",
    facilities: ["Computer Center", "Digital Library", "Conference Hall", "Sports Facilities", "Cafeteria", "Bus Transport", "Career Placement Cell"],
    map_url: "https://www.google.com/maps/search/?api=1&query=DIPS+Institute+of+Management+and+Technology+Pathankot+Bye+Pass+Jalandhar+Punjab",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=DIPS+Institute+of+Management+and+Technology+Pathankot+Bye+Pass+Jalandhar+Punjab"
  },
  1328: {
    name: "SFC Institute of Pharmacy, Moga",
    shortName: "SFC Institute Moga",
    location: "Moga",
    state: "Punjab",
    address: "VPO Jalalabad East, Dharamkot-Kotkapura Road, Moga District, Punjab - 142042",
    phone: "01636-281888",
    website: "https://sfcinstitute.in",
    rating: 4.2,
    reviews: 461,
    reviewsCount: 461,
    type: "Private",
    ownership: "Private",
    about: "SFC Institute of Pharmacy, Moga, situated in Jalalabad East in Moga district, is a specialized pharmaceutical and paramedical education institution approved by the Pharmacy Council of India (PCI), AICTE, and affiliated with the Punjab State Board of Technical Education and Industrial Training. The institute provides diploma education in pharmacy and medical laboratory technology equipped with modern pharmaceutical chemistry, pharmaceutics, and pharmacology laboratories.",
    ranking: 1,
    fees: "₹85,000 - ₹90,000",
    exams: "PSBTE Counseling / 10+2 Science Merit",
    img: "https://img.jagranjosh.com/images/2022/December/23122022/ISF-College-of-Pharmacy-Moga-Campus-View-1.jpg",
    image: "https://img.jagranjosh.com/images/2022/December/23122022/ISF-College-of-Pharmacy-Moga-Campus-View-1.jpg",
    gallery: [
      "https://img.jagranjosh.com/images/2022/December/23122022/ISF-College-of-Pharmacy-Moga-Campus-View-1.jpg",
      "/images/campuses/campus_architecture_3.jpg",
      "/images/campuses/campus_architecture_4.jpg"
    ],
    affiliation: "Punjab State Board of Technical Education (PSBTE & IT) / PCI / AICTE",
    courses: [
      {
        title: "Diploma in Pharmacy (D.Pharm)",
        duration: "2 Years",
        fees: "₹90,000",
        eligibility: "10+2 with Physics, Chemistry & Biology/Mathematics",
        type: "PHARMACY",
        intake: 60
      },
      {
        title: "Diploma in Medical Lab Technology (DMLT)",
        duration: "3 Years",
        fees: "₹85,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ],
    highestPackage: "₹4.5 LPA",
    averagePackage: "₹2.6 LPA",
    placements: "75%",
    facilities: ["Pharmaceutical Chemistry Lab", "Pharmaceutics Lab", "Pharmacology Lab", "Central Library", "Sports Field", "Hostel Accommodations", "Placement Support"],
    map_url: "https://www.google.com/maps/search/?api=1&query=SFC+Institute+of+Pharmacy+Jalalabad+East+Moga+Punjab",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=SFC+Institute+of+Pharmacy+Jalalabad+East+Moga+Punjab"
  },
  1329: {
    name: "Innocent Hearts Group of Institutions, Loharan, Jalandhar",
    shortName: "IHGI Jalandhar",
    location: "Jalandhar",
    state: "Punjab",
    address: "Innocent Hearts Fields, Nakodar Road, Loharan, Jalandhar, Punjab - 144026",
    phone: "0181-2790014",
    website: "https://ihgi.in",
    rating: 4.4,
    reviews: 397,
    reviewsCount: 397,
    type: "Private",
    ownership: "Private",
    about: "Innocent Hearts Group of Institutions (IHGI), situated at Loharan on Nakodar Road in Jalandhar, is a premier multi-disciplinary campus established by the Bowry Memorial Educational and Medical Trust. Affiliated with I.K. Gujral Punjab Technical University and approved by AICTE, IHGI offers advanced degrees in computer applications (MCA, BCA), management (MBA, BBA), hospitality management, and medical sciences with an emphasis on experiential learning, live industry internships, and international placements.",
    ranking: 3,
    fees: "₹90,000 - ₹1.60 Lakhs",
    exams: "PTU Centralized Counseling / Merit Based",
    img: "https://innocenthearts.in/wp-content/uploads/2024/09/img-1939-1-scaled-66dedb8d14a74.webp",
    image: "https://innocenthearts.in/wp-content/uploads/2024/09/img-1939-1-scaled-66dedb8d14a74.webp",
    gallery: [
      "https://innocenthearts.in/wp-content/uploads/2024/09/img-1939-1-scaled-66dedb8d14a74.webp",
      "/images/campuses/campus_architecture_1.jpg",
      "/images/campuses/campus_architecture_2.jpg"
    ],
    affiliation: "I.K. Gujral Punjab Technical University (IKGPTU) / AICTE Approved",
    courses: [
      {
        title: "Master of Computer Applications (MCA)",
        duration: "2 Years",
        fees: "₹1.50 Lakhs",
        eligibility: "BCA / B.Sc Computer Science / B.Sc / B.Com with Mathematics",
        type: "COMPUTER APPLICATIONS",
        intake: 30
      },
      {
        title: "Master of Business Administration (MBA)",
        duration: "2 Years",
        fees: "₹1.60 Lakhs",
        eligibility: "Graduation with minimum 50% marks (CMAT / PTU)",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "BCA (Bachelor of Computer Applications)",
        duration: "3 Years",
        fees: "₹90,000",
        eligibility: "10+2 with Mathematics/Computer Science",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "BBA (Bachelor of Business Administration)",
        duration: "3 Years",
        fees: "₹90,000",
        eligibility: "10+2 in any stream with minimum 50% marks",
        type: "MANAGEMENT",
        intake: 60
      }
    ],
    highestPackage: "₹10 LPA",
    averagePackage: "₹4.2 LPA",
    placements: "86%",
    facilities: ["Computer Center", "Training Kitchen & Restaurant", "Central Library", "Auditorium", "Sports Complex", "Cafeteria", "Corporate Resource & Placement Cell"],
    map_url: "https://www.google.com/maps/search/?api=1&query=Innocent+Hearts+Group+of+Institutions+Loharan+Jalandhar+Punjab",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Innocent+Hearts+Group+of+Institutions+Loharan+Jalandhar+Punjab"
  },
  1330: {
    name: "Government Polytechnic College, Rupnagar (Ropar)",
    shortName: "GPTC Rupnagar",
    location: "Rupnagar",
    state: "Punjab",
    address: "Bela Road / Nangal Road, Rupnagar (Ropar), Punjab - 140001",
    phone: "01881-222212",
    website: "https://gpcrupnagar.org",
    rating: 4.4,
    reviews: 435,
    reviewsCount: 435,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Government Polytechnic College, Rupnagar (Ropar), established in 1988, is one of Punjab's foremost state technical education institutions functioning under the Department of Technical Education and Industrial Training, Government of Punjab. Approved by AICTE and affiliated with the Punjab State Board of Technical Education, the college delivers 3-year engineering diploma programs across computer science, electronics, and mechanical engineering with modernized practical workshops and comprehensive government post-matric scholarship benefits.",
    ranking: 46,
    fees: "₹45,000",
    exams: "PSBTE Joint Entrance Test (JET) / Merit Allotment",
    img: "https://gpcrupnagar.ac.in/wp-content/uploads/2026/college2.jpeg",
    image: "https://gpcrupnagar.ac.in/wp-content/uploads/2026/college2.jpeg",
    gallery: [
      "https://gpcrupnagar.ac.in/wp-content/uploads/2026/college2.jpeg",
      "/images/campuses/campus_architecture_3.jpg",
      "/images/campuses/campus_architecture_4.jpg"
    ],
    affiliation: "Department of Technical Education, Government of Punjab / PSBTE & IT / AICTE",
    courses: [
      {
        title: "Diploma in Computer Science and Engineering",
        duration: "3 Years",
        fees: "₹45,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Electronics & Communication Engineering",
        duration: "3 Years",
        fees: "₹45,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹45,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Electrical Engineering",
        duration: "3 Years",
        fees: "₹45,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ],
    highestPackage: "₹5 LPA",
    averagePackage: "₹2.8 LPA",
    placements: "80%",
    facilities: ["Advanced Computer Laboratories", "Electronics Hardware Lab", "Mechanical Workshops", "Central Library", "Girls Hostel", "Sports Field", "Training & Placement Cell"],
    map_url: "https://www.google.com/maps/search/?api=1&query=Government+Polytechnic+College+Rupnagar+Ropar+Punjab",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Government+Polytechnic+College+Rupnagar+Ropar+Punjab"
  }
};

let appliedCount = 0;
for (const col of colleges) {
  if (batch163Updates[col.id]) {
    Object.assign(col, batch163Updates[col.id]);
    appliedCount++;
  }
}

console.log(`Updated ${appliedCount} colleges in siteData.`);
fs.writeFileSync(siteDataPath, JSON.stringify(siteData, null, 2), 'utf8');

// Update progress.json
const now = new Date().toISOString();
progress.verifiedColleges = 1630;
progress.lastUpdated = now;
progress.batchesCompleted = 163;
progress.currentBatch = 164;
if (!progress.batchHistory) progress.batchHistory = [];
progress.batchHistory.push({
  batch: 163,
  verifiedCount: 10,
  totalVerified: 1630,
  timestamp: now,
  collegeIds: Object.keys(batch163Updates).map(Number)
});
fs.writeFileSync(progressPath, JSON.stringify(progress, null, 2), 'utf8');

// Update all_verified_colleges.json
const newlyVerifiedList = Object.entries(batch163Updates).map(([idStr, val]) => ({
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
const batchMdHeader = `\n### Batch 163 (Colleges 1,621–1,630) — Punjab Engineering, Management & Polytechnic Institutions\n| ID | College Name | Location | State | Type | Website |\n|---|---|---|---|---|---|\n`;
let batchMdRows = '';
for (const item of newlyVerifiedList) {
  batchMdRows += `| ${item.id} | ${item.name} | ${item.location} | ${item.state} | ${item.type} | [${item.website}](${item.website}) |\n`;
}
mdContent += batchMdHeader + batchMdRows;
fs.writeFileSync(allVerifiedMdPath, mdContent, 'utf8');

console.log(`Batch 163 applied successfully! Total verified: ${progress.verifiedColleges}`);
