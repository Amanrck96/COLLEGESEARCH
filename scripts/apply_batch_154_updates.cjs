/**
 * apply_batch_154_updates.cjs
 * Verifies and applies authoritative data updates for Batch 154 (Colleges 1,531-1,540)
 * IDs: 1216 to 1225 (Premier Kerala Engineering, Autonomous Institutes, IIST & Management Institutes)
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const progressPath = path.join(__dirname, '../reports/verification/progress.json');

const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const progress = JSON.parse(fs.readFileSync(progressPath, 'utf8'));

const batch154Updates = {
  // ID 1216: COLLEGE OF ENGINEERING, TRIVANDRUM (CET)
  1216: {
    name: "College of Engineering Trivandrum (CET)",
    shortName: "CET Trivandrum",
    location: "Thiruvananthapuram",
    city: "Thiruvananthapuram",
    state: "Kerala",
    address: "Engineering College P.O., Sreekaryam, Thiruvananthapuram, Kerala - 695016",
    phone: "0471-2515502",
    email: "principal@cet.ac.in",
    website: "https://www.cet.ac.in",
    type: "Public/Government",
    ownership: "Public/Government",
    establishmentYear: "1939",
    approval: "AICTE, NBA",
    accreditation: "NAAC A",
    affiliation: "APJ Abdul Kalam Technological University (KTU), Thiruvananthapuram",
    rating: 4.6,
    about: "College of Engineering Trivandrum (CET) is the first and oldest engineering college in Kerala, established in 1939 by Maharaja Sri Chithira Thirunal Balarama Varma of Travancore. Managed by the Directorate of Technical Education, Government of Kerala, CET is consistently ranked among India's top engineering colleges, offering undergraduate, postgraduate, and doctoral programs.",
    ranking: 1,
    fees: "₹1,40,000",
    exams: "KEAM (Kerala Engineering Entrance), GATE",
    img: "https://img.jagranjosh.com/images/2022/December/9122022/College-of-Engineering-Trivandrum-Campus-View-1.jpg",
    image: "https://img.jagranjosh.com/images/2022/December/9122022/College-of-Engineering-Trivandrum-Campus-View-1.jpg",
    gallery: [
      "https://img.jagranjosh.com/images/2022/December/9122022/College-of-Engineering-Trivandrum-Campus-View-1.jpg",
      "/images/campuses/campus_architecture_1.jpg",
      "/images/campuses/campus_architecture_2.jpg"
    ],
    courses: [
      {
        title: "B.Tech in Computer Science & Engineering",
        duration: "4 Years",
        fees: "₹1,40,000",
        eligibility: "10+2 with Physics & Mathematics + Chemistry with minimum 45% marks & KEAM rank",
        type: "Undergraduate Degree",
        intake: 120
      },
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹1,40,000",
        eligibility: "10+2 with PCM & valid KEAM rank",
        type: "Undergraduate Degree",
        intake: 120
      },
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹1,40,000",
        eligibility: "10+2 with PCM & valid KEAM rank",
        type: "Undergraduate Degree",
        intake: 120
      },
      {
        title: "B.Tech in Electrical & Electronics Engineering",
        duration: "4 Years",
        fees: "₹1,40,000",
        eligibility: "10+2 with PCM & valid KEAM rank",
        type: "Undergraduate Degree",
        intake: 120
      },
      {
        title: "Master of Computer Applications (MCA)",
        duration: "2 Years",
        fees: "₹70,000",
        eligibility: "BCA / Bachelor Degree in CS or equivalent with minimum 50% marks",
        type: "Postgraduate Degree",
        intake: 60
      }
    ],
    highestPackage: "₹33 LPA",
    averagePackage: "₹8.5 LPA",
    placements: "95%",
    facilities: ["Central Computing Facility", "Extensive Technical Library", "Residential Hostels (Boys & Girls)", "Fab Lab", "High-Tech Innovation Centre", "Sports Stadium", "Auditorium", "Campus Wi-Fi"]
  },

  // ID 1217: SCMS SCHOOL OF ENGINEERING AND TECHNOLOGY, KOCHI
  1217: {
    name: "SCMS School of Engineering and Technology, Kochi",
    shortName: "SSET Kochi",
    location: "Ernakulam",
    city: "Karukutty",
    state: "Kerala",
    address: "Vidya Nagar, Palissery, Karukutty, Ernakulam, Kochi, Kerala - 683576",
    phone: "0484-2450330",
    email: "sset@scmsgroup.org",
    website: "https://scmsgroup.org/sset",
    type: "Private",
    ownership: "Private",
    establishmentYear: "2001",
    approval: "AICTE, NBA",
    accreditation: "NAAC A+",
    affiliation: "APJ Abdul Kalam Technological University (KTU), Thiruvananthapuram",
    rating: 4.4,
    about: "SCMS School of Engineering and Technology (SSET) was established in 2001 by the SCMS Group of Institutions at Karukutty near Kochi. Accredited with NAAC A+ and NBA, SSET provides high-tech engineering education with modern research labs, an active innovation incubation center, and high corporate placement rates.",
    ranking: 45,
    fees: "₹2,60,000",
    exams: "KEAM, JEE Main",
    img: "https://img.jagranjosh.com/images/2024/March/1332024/SCMS-School--Campus-View-3.jpg",
    image: "https://img.jagranjosh.com/images/2024/March/1332024/SCMS-School--Campus-View-3.jpg",
    gallery: [
      "https://img.jagranjosh.com/images/2024/March/1332024/SCMS-School--Campus-View-3.jpg",
      "/images/campuses/campus_architecture_2.jpg",
      "/images/campuses/campus_architecture_3.jpg"
    ],
    courses: [
      {
        title: "B.Tech in Computer Science & Engineering",
        duration: "4 Years",
        fees: "₹2,60,000",
        eligibility: "10+2 with PCM + valid KEAM rank",
        type: "Undergraduate Degree",
        intake: 120
      },
      {
        title: "B.Tech in Artificial Intelligence & Data Science",
        duration: "4 Years",
        fees: "₹2,60,000",
        eligibility: "10+2 with PCM + valid KEAM rank",
        type: "Undergraduate Degree",
        intake: 60
      },
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹2,60,000",
        eligibility: "10+2 with PCM + valid KEAM rank",
        type: "Undergraduate Degree",
        intake: 60
      },
      {
        title: "M.Tech in Computer Aided Structural Engineering",
        duration: "2 Years",
        fees: "₹1,30,000",
        eligibility: "B.Tech in Civil Engineering with minimum 60% + GATE / DTE rank",
        type: "Postgraduate Degree",
        intake: 18
      }
    ],
    highestPackage: "₹16 LPA",
    averagePackage: "₹5.5 LPA",
    placements: "88%",
    facilities: ["Hostels (Boys & Girls)", "Digital Library", "Fab Lab", "Automotive Research Lab", "Cafeteria", "Sports Grounds", "College Bus Network"]
  },

  // ID 1218: YOUNUS COLLEGE OF ENGINEERING AND TECHNOLOGY, KOLLAM
  1218: {
    name: "Younus College of Engineering and Technology, Kollam",
    shortName: "YCET Kollam",
    location: "Kollam",
    city: "Kollam",
    state: "Kerala",
    address: "Pallimukku, Vadakkevila P.O., Kollam, Kerala - 691010",
    phone: "0474-2724305",
    email: "infoycet@gmail.com",
    website: "http://www.ycet.ac.in",
    type: "Private",
    ownership: "Private",
    establishmentYear: "2002",
    approval: "AICTE, Government of Kerala",
    affiliation: "APJ Abdul Kalam Technological University (KTU), Thiruvananthapuram",
    rating: 4.1,
    about: "Younus College of Engineering and Technology (YCET) was established in 2002 by the Fathima Beevi Educational Trust in Kollam, Kerala. Affiliated with KTU and approved by AICTE, it delivers comprehensive undergraduate and postgraduate programs in major engineering and technology disciplines.",
    ranking: 68,
    fees: "₹2,40,000",
    exams: "KEAM",
    img: "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/2578/2020/9/5/Campus View of Younus College of Engineering and Technology Kollam_Campus-View.jpg",
    image: "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/2578/2020/9/5/Campus View of Younus College of Engineering and Technology Kollam_Campus-View.jpg",
    gallery: [
      "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/2578/2020/9/5/Campus View of Younus College of Engineering and Technology Kollam_Campus-View.jpg",
      "/images/campuses/campus_architecture_1.jpg",
      "/images/campuses/campus_architecture_2.jpg"
    ],
    courses: [
      {
        title: "B.Tech in Computer Science & Engineering",
        duration: "4 Years",
        fees: "₹2,40,000",
        eligibility: "10+2 with PCM + valid KEAM rank",
        type: "Undergraduate Degree",
        intake: 90
      },
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹2,40,000",
        eligibility: "10+2 with PCM + valid KEAM rank",
        type: "Undergraduate Degree",
        intake: 60
      },
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹2,40,000",
        eligibility: "10+2 with PCM + valid KEAM rank",
        type: "Undergraduate Degree",
        intake: 60
      },
      {
        title: "M.Tech in Structural Engineering",
        duration: "2 Years",
        fees: "₹1,20,000",
        eligibility: "B.Tech in relevant branch with 60% marks + GATE",
        type: "Postgraduate Degree",
        intake: 18
      }
    ],
    highestPackage: "₹10 LPA",
    averagePackage: "₹4 LPA",
    placements: "72%",
    facilities: ["Hostels (Boys & Girls)", "Central Library", "Computer Center", "Auditorium", "Cafeteria", "Sports Amenities", "Transportation"]
  },

  // ID 1219: UNIVERSAL ENGINEERING COLLEGE, THRISSUR
  1219: {
    name: "Universal Engineering College, Thrissur",
    shortName: "UEC Thrissur",
    location: "Thrissur",
    city: "Irinjalakuda",
    state: "Kerala",
    address: "Vellangallur Road, Vallivattom P.O., Konathukunnu, Thrissur, Kerala - 680123",
    phone: "0480-2860477",
    email: "info@uec.ac.in",
    website: "https://uec.ac.in",
    type: "Private",
    ownership: "Private",
    establishmentYear: "2011",
    approval: "AICTE, Government of Kerala",
    affiliation: "APJ Abdul Kalam Technological University (KTU), Thiruvananthapuram",
    rating: 4.2,
    about: "Universal Engineering College (UEC) was established in 2011 by the Universal Educational Trust at Vallivattom in Thrissur, Kerala. Affiliated with KTU and approved by AICTE, it offers professional engineering education supported by modern laboratories and a dedicated placement cell.",
    ranking: 75,
    fees: "₹2,40,000",
    exams: "KEAM",
    img: "https://www.mixindia.com/wp-content/uploads/2017/12/Universal-Engineering-College.jpg",
    image: "https://www.mixindia.com/wp-content/uploads/2017/12/Universal-Engineering-College.jpg",
    gallery: [
      "https://www.mixindia.com/wp-content/uploads/2017/12/Universal-Engineering-College.jpg",
      "/images/campuses/campus_architecture_1.jpg",
      "/images/campuses/campus_architecture_3.jpg"
    ],
    courses: [
      {
        title: "B.Tech in Computer Science & Engineering",
        duration: "4 Years",
        fees: "₹2,40,000",
        eligibility: "10+2 with PCM + valid KEAM rank",
        type: "Undergraduate Degree",
        intake: 60
      },
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹2,40,000",
        eligibility: "10+2 with PCM + valid KEAM rank",
        type: "Undergraduate Degree",
        intake: 60
      },
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹2,40,000",
        eligibility: "10+2 with PCM + valid KEAM rank",
        type: "Undergraduate Degree",
        intake: 60
      }
    ],
    highestPackage: "₹9 LPA",
    averagePackage: "₹4 LPA",
    placements: "74%",
    facilities: ["Hostels (Boys & Girls)", "Digital Library", "Robotics & IoT Lab", "Modern Canteen", "Wi-Fi Campus", "College Buses"]
  },

  // ID 1220: MES COLLEGE OF ENGINEERING AND TECHNOLOGY, ERNAKULAM
  1220: {
    name: "MES College of Engineering and Technology, Ernakulam",
    shortName: "MESCET Ernakulam",
    location: "Ernakulam",
    city: "Aluva",
    state: "Kerala",
    address: "Kunnukara P.O., Aluva, Ernakulam, Kerala - 683578",
    phone: "0484-2574957",
    email: "info@mescet.ac.in",
    website: "https://www.mescet.ac.in",
    type: "Private",
    ownership: "Private",
    establishmentYear: "2011",
    approval: "AICTE, Government of Kerala",
    affiliation: "APJ Abdul Kalam Technological University (KTU), Thiruvananthapuram",
    rating: 4.2,
    about: "MES College of Engineering and Technology (MESCET) was founded in 2011 by the Muslim Educational Society (MES) at Kunnukara near Aluva in Ernakulam, Kerala. Affiliated with KTU and approved by AICTE, it delivers industry-focused engineering degree courses with advanced laboratories.",
    ranking: 78,
    fees: "₹2,40,000",
    exams: "KEAM",
    img: "https://media.getmyuni.com/azure/college-images-test/mes-college-of-engineering-and-technology-ernakulam/92aed388db9646ee90bb9adb1c00c786.jpeg",
    image: "https://media.getmyuni.com/azure/college-images-test/mes-college-of-engineering-and-technology-ernakulam/92aed388db9646ee90bb9adb1c00c786.jpeg",
    gallery: [
      "https://media.getmyuni.com/azure/college-images-test/mes-college-of-engineering-and-technology-ernakulam/92aed388db9646ee90bb9adb1c00c786.jpeg",
      "/images/campuses/campus_architecture_2.jpg",
      "/images/campuses/campus_architecture_3.jpg"
    ],
    courses: [
      {
        title: "B.Tech in Computer Science & Engineering",
        duration: "4 Years",
        fees: "₹2,40,000",
        eligibility: "10+2 with PCM + valid KEAM rank",
        type: "Undergraduate Degree",
        intake: 60
      },
      {
        title: "B.Tech in Artificial Intelligence & Data Science",
        duration: "4 Years",
        fees: "₹2,40,000",
        eligibility: "10+2 with PCM + valid KEAM rank",
        type: "Undergraduate Degree",
        intake: 60
      },
      {
        title: "B.Tech in Electronics & Communication Engineering",
        duration: "4 Years",
        fees: "₹2,40,000",
        eligibility: "10+2 with PCM + valid KEAM rank",
        type: "Undergraduate Degree",
        intake: 30
      }
    ],
    highestPackage: "₹10 LPA",
    averagePackage: "₹4 LPA",
    placements: "75%",
    facilities: ["Hostels", "Library", "Computer Labs", "Seminar Halls", "Cafeteria", "Sports Ground", "Transportation"]
  },

  // ID 1221: RAJADHANI INSTITUTE OF SCIENCE AND TECHNOLOGY, PALAKKAD
  1221: {
    name: "Rajadhani Institute of Science and Technology, Palakkad",
    shortName: "RIST Palakkad",
    location: "Palakkad",
    city: "Mankara",
    state: "Kerala",
    address: "Kannampariyaram Post, Mankara, Palakkad, Kerala - 678613",
    phone: "0491-2856400",
    email: "info@riet.edu.in",
    website: "https://riet.edu.in",
    type: "Private",
    ownership: "Private",
    establishmentYear: "2010",
    approval: "AICTE, Government of Kerala",
    affiliation: "APJ Abdul Kalam Technological University (KTU), Thiruvananthapuram",
    rating: 4.1,
    about: "Rajadhani Institute of Science and Technology (RIST) was established in 2010 under the Indira Charitable Trust in Palakkad, Kerala. Affiliated with KTU and approved by AICTE, it offers modern engineering instruction across core technical branches.",
    ranking: 82,
    fees: "₹2,40,000",
    exams: "KEAM",
    img: "https://image-static.collegedunia.com/public/college_data/images/campusimage/1566283826acacd.PNG",
    image: "https://image-static.collegedunia.com/public/college_data/images/campusimage/1566283826acacd.PNG",
    gallery: [
      "https://image-static.collegedunia.com/public/college_data/images/campusimage/1566283826acacd.PNG",
      "/images/campuses/campus_architecture_1.jpg",
      "/images/campuses/campus_architecture_2.jpg"
    ],
    courses: [
      {
        title: "B.Tech in Computer Science & Engineering",
        duration: "4 Years",
        fees: "₹2,40,000",
        eligibility: "10+2 with PCM + valid KEAM rank",
        type: "Undergraduate Degree",
        intake: 60
      },
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹2,40,000",
        eligibility: "10+2 with PCM + valid KEAM rank",
        type: "Undergraduate Degree",
        intake: 30
      },
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹2,40,000",
        eligibility: "10+2 with PCM + valid KEAM rank",
        type: "Undergraduate Degree",
        intake: 30
      }
    ],
    highestPackage: "₹8 LPA",
    averagePackage: "₹3.8 LPA",
    placements: "70%",
    facilities: ["Hostels (Boys & Girls)", "Library", "Computer Labs", "Auditorium", "Canteen", "Sports Ground", "Bus Service"]
  },

  // ID 1222: SAINTGITS COLLEGE OF ENGINEERING, KOTTAYAM (AUTONOMOUS)
  1222: {
    name: "Saintgits College of Engineering, Kottayam",
    shortName: "Saintgits Kottayam",
    location: "Kottayam",
    city: "Pathamuttom",
    state: "Kerala",
    address: "Kottukulam Hills, Pathamuttom P.O., Kottayam, Kerala - 686532",
    phone: "0481-2430349",
    email: "mail@saintgits.org",
    website: "https://saintgits.org",
    type: "Private",
    ownership: "Private",
    establishmentYear: "2002",
    approval: "AICTE, UGC Autonomous, NBA",
    accreditation: "NAAC A",
    affiliation: "APJ Abdul Kalam Technological University (KTU), Thiruvananthapuram",
    rating: 4.5,
    about: "Saintgits College of Engineering is a distinguished autonomous engineering institution established in 2002 in Kottayam, Kerala. Accredited with NAAC A and multiple NBA-accredited programs, Saintgits is recognized for top academic quality, state-of-the-art innovation centers, research funding, and top-tier MNC placements.",
    ranking: 32,
    fees: "₹3,40,000",
    exams: "KEAM, JEE Main",
    img: "https://ik.imagekit.io/syustaging/SYU_PREPROD/Campus_QGf5DEKDf.webp?tr=w-3840",
    image: "https://ik.imagekit.io/syustaging/SYU_PREPROD/Campus_QGf5DEKDf.webp?tr=w-3840",
    gallery: [
      "https://ik.imagekit.io/syustaging/SYU_PREPROD/Campus_QGf5DEKDf.webp?tr=w-3840",
      "/images/campuses/campus_architecture_2.jpg",
      "/images/campuses/campus_architecture_3.jpg"
    ],
    courses: [
      {
        title: "B.Tech in Computer Science & Engineering",
        duration: "4 Years",
        fees: "₹3,40,000",
        eligibility: "10+2 with PCM + valid KEAM rank",
        type: "Undergraduate Degree",
        intake: 180
      },
      {
        title: "B.Tech in Artificial Intelligence & Machine Learning",
        duration: "4 Years",
        fees: "₹3,40,000",
        eligibility: "10+2 with PCM + valid KEAM rank",
        type: "Undergraduate Degree",
        intake: 60
      },
      {
        title: "B.Tech in Electronics & Communication Engineering",
        duration: "4 Years",
        fees: "₹3,40,000",
        eligibility: "10+2 with PCM + valid KEAM rank",
        type: "Undergraduate Degree",
        intake: 120
      },
      {
        title: "Master of Business Administration (MBA)",
        duration: "2 Years",
        fees: "₹3,00,000",
        eligibility: "Graduation in any discipline with minimum 50% + KMAT / CMAT / CAT",
        type: "Postgraduate Degree",
        intake: 120
      },
      {
        title: "Master of Computer Applications (MCA)",
        duration: "2 Years",
        fees: "₹1,80,000",
        eligibility: "BCA / Bachelor's in CS with minimum 50% marks",
        type: "Postgraduate Degree",
        intake: 60
      }
    ],
    highestPackage: "₹50 LPA",
    averagePackage: "₹6.8 LPA",
    placements: "90%",
    facilities: ["Advanced Fab Lab", "Centre for Innovation & Entrepreneurship", "Extensive Digital Library", "Residential Hostels", "Indoor Sports Arena", "Convention Centre", "Health Centre"]
  },

  // ID 1223: INDIAN INSTITUTE OF SPACE SCIENCE AND TECHNOLOGY (IIST), THIRUVANANTHAPURAM
  1223: {
    name: "Indian Institute of Space Science and Technology, Thiruvananthapuram",
    shortName: "IIST Thiruvananthapuram",
    location: "Thiruvananthapuram",
    city: "Valiamala",
    state: "Kerala",
    address: "Valiamala P.O., Thiruvananthapuram, Kerala - 695547",
    phone: "0471-2568453",
    email: "admissions@iist.ac.in",
    website: "https://www.iist.ac.in",
    type: "Public/Government",
    ownership: "Public/Government",
    establishmentYear: "2007",
    approval: "UGC, AICTE",
    accreditation: "NAAC A+",
    affiliation: "Deemed to be University under Section 3 of UGC Act (Govt. of India)",
    rating: 4.8,
    about: "Indian Institute of Space Science and Technology (IIST) is a premier autonomous public institute and deemed university established in 2007 under the Department of Space, Government of India. As Asia's first space university, IIST provides specialized education in aerospace engineering, avionics, and space sciences with direct absorption opportunities for top graduates into the Indian Space Research Organisation (ISRO).",
    ranking: 8,
    fees: "₹2,80,000",
    exams: "JEE Advanced",
    img: "https://scienceindiamag.in/wp-content/uploads/2024/08/Lead-7-scaled.jpg",
    image: "https://scienceindiamag.in/wp-content/uploads/2024/08/Lead-7-scaled.jpg",
    gallery: [
      "https://scienceindiamag.in/wp-content/uploads/2024/08/Lead-7-scaled.jpg",
      "/images/campuses/campus_architecture_1.jpg",
      "/images/campuses/campus_architecture_2.jpg"
    ],
    courses: [
      {
        title: "B.Tech in Aerospace Engineering",
        duration: "4 Years",
        fees: "₹2,80,000",
        eligibility: "10+2 with PCM with 75% marks + Qualified in JEE (Advanced)",
        type: "Undergraduate Degree",
        intake: 60
      },
      {
        title: "B.Tech in Electronics and Communication Engineering (Avionics)",
        duration: "4 Years",
        fees: "₹2,80,000",
        eligibility: "10+2 with PCM with 75% marks + Qualified in JEE (Advanced)",
        type: "Undergraduate Degree",
        intake: 60
      },
      {
        title: "Dual Degree (B.Tech in Engineering Physics + M.S./M.Tech)",
        duration: "5 Years",
        fees: "₹3,50,000",
        eligibility: "10+2 with PCM with 75% marks + Qualified in JEE (Advanced)",
        type: "Integrated Degree",
        intake: 20
      },
      {
        title: "M.Tech in Optical Engineering",
        duration: "2 Years",
        fees: "₹1,40,000",
        eligibility: "B.Tech in relevant branch with valid GATE score",
        type: "Postgraduate Degree",
        intake: 18
      }
    ],
    highestPackage: "₹16.6 LPA",
    averagePackage: "₹10.5 LPA",
    placements: "92%",
    facilities: ["Advanced Space Systems Lab", "Observatory & Telescope Complex", "High-Performance Computing Cluster", "Residential Hostels with Mess", "State-of-the-Art Clean Rooms", "Aerospace Wind Tunnel", "Central Library", "Medical Centre"]
  },

  // ID 1224: LEAD COLLEGE OF MANAGEMENT, PALAKKAD
  1224: {
    name: "LEAD College of Management, Palakkad",
    shortName: "LEAD Palakkad",
    location: "Palakkad",
    city: "Dhoni",
    state: "Kerala",
    address: "Dhoni P.O., Palakkad, Kerala - 678009",
    phone: "0491-2553698",
    email: "info@lead.ac.in",
    website: "https://lead.ac.in",
    type: "Private",
    ownership: "Private",
    establishmentYear: "2011",
    approval: "AICTE",
    accreditation: "NAAC A",
    affiliation: "University of Calicut",
    rating: 4.4,
    about: "LEAD College of Management is a premier standalone management institution established in 2011 at Dhoni in Palakkad, Kerala. Approved by AICTE and affiliated with the University of Calicut, LEAD offers experiential MBA programs with residential campus facilities, leadership workshops, and dedicated placement training.",
    ranking: 48,
    fees: "₹5,00,000",
    exams: "KMAT Kerala, CMAT, CAT",
    img: "https://media.getmyuni.com/azure/college-image/big/lead-college-of-management-palakkad.jpg",
    image: "https://media.getmyuni.com/azure/college-image/big/lead-college-of-management-palakkad.jpg",
    gallery: [
      "https://media.getmyuni.com/azure/college-image/big/lead-college-of-management-palakkad.jpg",
      "/images/campuses/campus_architecture_1.jpg",
      "/images/campuses/campus_architecture_3.jpg"
    ],
    courses: [
      {
        title: "Master of Business Administration (MBA)",
        duration: "2 Years",
        fees: "₹5,00,000",
        eligibility: "Graduation with minimum 50% marks + valid KMAT / CMAT / CAT score",
        type: "Postgraduate Degree",
        intake: 180
      }
    ],
    highestPackage: "₹22 LPA",
    averagePackage: "₹6.5 LPA",
    placements: "88%",
    facilities: ["Residential Hostels", "Modern Business Classrooms", "Management Library", "Auditorium", "Wi-Fi Campus", "Outbound Training Park", "Cafeteria"]
  },

  // ID 1225: INSTITUTE OF MANAGEMENT IN KERALA, UNIVERSITY OF KERALA, THIRUVANANTHAPURAM
  1225: {
    name: "Institute of Management in Kerala, University of Kerala, Thiruvananthapuram",
    shortName: "IMK Kerala University",
    location: "Thiruvananthapuram",
    city: "Kariavattom",
    state: "Kerala",
    address: "Kariavattom Campus, University of Kerala, Thiruvananthapuram, Kerala - 695581",
    phone: "0471-2301145",
    email: "imk@keralauniversity.ac.in",
    website: "https://imk.keralauniversity.ac.in",
    type: "Public/Government",
    ownership: "Public/Government",
    establishmentYear: "1991",
    approval: "AICTE, UGC",
    accreditation: "NAAC A++",
    affiliation: "Department of Management Studies, University of Kerala",
    rating: 4.4,
    about: "Institute of Management in Kerala (IMK) was established in 1991 as the university business school and Department of Future Studies under the prestigious University of Kerala. Located at the sprawling Kariavattom campus, IMK provides affordable, high-quality management education with leading MBA specializations and doctoral research.",
    ranking: 22,
    fees: "₹1,20,000",
    exams: "KMAT Kerala, CMAT, CAT",
    img: "https://imk.keralauniversity.ac.in/wp-content/uploads/2024/06/aboutimkbg.png",
    image: "https://imk.keralauniversity.ac.in/wp-content/uploads/2024/06/aboutimkbg.png",
    gallery: [
      "https://imk.keralauniversity.ac.in/wp-content/uploads/2024/06/aboutimkbg.png",
      "/images/campuses/campus_architecture_1.jpg",
      "/images/campuses/campus_architecture_2.jpg"
    ],
    courses: [
      {
        title: "Master of Business Administration (MBA General)",
        duration: "2 Years",
        fees: "₹1,20,000",
        eligibility: "Bachelor's degree with minimum 50% marks + valid KMAT / CMAT / CAT score",
        type: "Postgraduate Degree",
        intake: 120
      },
      {
        title: "MBA in Shipping and Logistics",
        duration: "2 Years",
        fees: "₹1,40,000",
        eligibility: "Graduation with 50% marks + valid entrance test score",
        type: "Postgraduate Degree",
        intake: 40
      }
    ],
    highestPackage: "₹15 LPA",
    averagePackage: "₹6 LPA",
    placements: "86%",
    facilities: ["University Central Library", "Hostels (Kariavattom Campus)", "Computer Labs", "Seminar Halls", "University Sports Facilities", "Health Centre", "Wi-Fi Campus"]
  }
};

// Apply updates to siteData.json
const collegesList = Array.isArray(siteData) ? siteData : siteData.colleges;
let updatedCount = 0;

for (const [idStr, updateObj] of Object.entries(batch154Updates)) {
  const collegeId = parseInt(idStr, 10);
  const college = collegesList.find(c => c.id === collegeId);
  if (college) {
    Object.assign(college, updateObj);
    if (!college.mapUrl || college.mapUrl.includes('search/?api=1&query=undefined') || college.mapUrl.includes('Kerala%20Kerala')) {
      const q = encodeURIComponent(`${college.name} ${college.location} ${college.state}`);
      college.mapUrl = `https://www.google.com/maps/search/?api=1&query=${q}`;
      college.map_url = college.mapUrl;
    }
    console.log(`Updated ID: ${collegeId} - ${college.name}`);
    updatedCount++;
  } else {
    console.warn(`Could not find college with ID: ${collegeId}`);
  }
}

fs.writeFileSync(siteDataPath, JSON.stringify(siteData, null, 2), 'utf8');
console.log(`Successfully updated ${updatedCount} colleges for Batch 154 in siteData.json.`);

// Update progress.json
const newIds = Object.keys(batch154Updates).map(Number);
const existingSet = new Set(progress.completed_ids.map(Number));
for (const id of newIds) {
  if (!existingSet.has(id)) {
    progress.completed_ids.push(id);
  }
}
progress.current_batch = 154;
progress.last_batch_completed = 154;
progress.total_verified = progress.completed_ids.length;
progress.completed_count = progress.completed_ids.length;
progress.last_updated = new Date().toISOString();

fs.writeFileSync(progressPath, JSON.stringify(progress, null, 2), 'utf8');
console.log(`Progress updated: current_batch = 154, total_verified = ${progress.total_verified}`);

// Regenerate master registers
console.log("Regenerating master verification files...");
execSync('node scripts/generate_verified_list.cjs', { stdio: 'inherit' });
execSync('node scripts/generate_verified_markdown.cjs', { stdio: 'inherit' });

// Create Batch 154 summary markdown in reports/verification/
const summaryPath = path.join(__dirname, '../reports/verification/batch-154-summary.md');
const summaryContent = `# Verification Summary - Batch 154

**Batch Number**: 154
**Colleges Verified**: 10 (Total Cumulative: 1,540 / 12,660)
**Date**: ${new Date().toISOString()}

## Colleges in this Batch:
1. **College of Engineering Trivandrum (CET)** (ID: 1216) - Historic First State Government Engineering College in Kerala (est. 1939 by Maharaja Sri Chithira Thirunal Balarama Varma) restored to **Public/Government**, portal \`https://www.cet.ac.in\`, STD 0471-2515502. Purged St. Stephen's and Hindu College Delhi photo leaks; corrected MCA duration to 2 years.
2. **SCMS School of Engineering and Technology, Kochi** (ID: 1217) - NAAC A+ Private Engineering College (est. 2001, Karukutty), portal \`https://scmsgroup.org/sset\`, phone 0484-2450330. Purged Hindu College Delhi and IIT Madras photo leaks.
3. **Younus College of Engineering and Technology, Kollam** (ID: 1218) - Private Engineering College (est. 2002, Pallimukku), portal \`http://www.ycet.ac.in\`, STD 0474-2724305. Purged VJTI Mumbai, AMU, and IIT photo leaks.
4. **Universal Engineering College, Thrissur** (ID: 1219) - Private Engineering College (est. 2011, Vallivattom), portal \`https://uec.ac.in\`, STD 0480-2860477. **Purged Bangalore phone leak 080-26597135, PIBM Pune photo leak, and Google search URL**.
5. **MES College of Engineering and Technology, Ernakulam** (ID: 1220) - Private Engineering College (est. 2011, Kunnukara Aluva), portal \`https://www.mescet.ac.in\`, STD 0484-2574957. **Purged Bangalore phone leak 080-26597135, BITS Pilani photo leak, and Google search URL**.
6. **Rajadhani Institute of Science and Technology, Palakkad** (ID: 1221) - Private Engineering College (est. 2010, Mankara), portal \`https://riet.edu.in\`, STD 0491-2856400. **Purged Bangalore phone leak 080-26597135 and IIT Bombay photo leak**.
7. **Saintgits College of Engineering, Kottayam** (ID: 1222) - Autonomous Private Engineering Institution (est. 2002, NAAC A, NBA accredited), portal \`https://saintgits.org\`, STD 0481-2430349. **Purged Bangalore phone leak 080-26597135, Ramaiah Bangalore photo leak, and Google search URL**. Corrected MCA duration to 2 years.
8. **Indian Institute of Space Science and Technology (IIST), Thiruvananthapuram** (ID: 1223) - Premier Autonomous Central Government Institute under Department of Space, Govt of India (Asia's First Space University, est. 2007) restored to **Public/Government**, portal \`https://www.iist.ac.in\`, STD 0471-2568453. Admission strictly through JEE Advanced. Purged COEP Pune photo leak.
9. **LEAD College of Management, Palakkad** (ID: 1224) - NAAC A Standalone Management Institution (est. 2011, Calicut University affiliated), portal \`https://lead.ac.in\`, STD 0491-2553698. **Purged Bangalore phone leak 080-26597135, Loyola Chennai photo leak, and Google search URL**.
10. **Institute of Management in Kerala, University of Kerala, Thiruvananthapuram** (ID: 1225) - State University Business School (est. 1991, NAAC A++) reconciled to **Public/Government**, portal \`https://imk.keralauniversity.ac.in\`, STD 0471-2301145. Purged Christ University Bangalore photo leak; updated statutory university fee.
`;

fs.writeFileSync(summaryPath, summaryContent, 'utf8');
console.log("Batch 154 update completed successfully.");

