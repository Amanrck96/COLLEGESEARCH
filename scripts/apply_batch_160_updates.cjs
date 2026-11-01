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

// Batch 160 updates
const batch160Updates = {
  1285: {
    name: "M.Dasan Institute of Technology",
    shortName: "M-DIT Kozhikode",
    location: "Kozhikode",
    state: "Kerala",
    address: "Ulliyeri P.O., Kozhikode District, Kerala - 673323",
    phone: "0496-2836700",
    website: "https://mdit.ac.in",
    rating: 4.2,
    reviews: 436,
    reviewsCount: 436,
    type: "Private",
    ownership: "Private",
    about: "M.Dasan Institute of Technology (M-DIT), established in 2012 at Ulliyeri, Kozhikode, is a premier self-financing engineering institution managed by the M.Dasan Memorial Co-operative Institute of Engineering and Information Technology Ltd. Named in memory of the visionary leader Late Shri M. Dasan, the institute is affiliated with APJ Abdul Kalam Technological University (KTU) and approved by AICTE. M-DIT is committed to delivering quality technical education and fostering innovation through well-equipped labs, dedicated faculty, and vibrant campus life.",
    ranking: 45,
    fees: "₹2.60 Lakhs",
    exams: "KEAM",
    img: "https://mdit.ac.in/imgserver/uploads/compressed/pcm__d4c10717-e4ec-44db-ac38-5c8be7748a71_0.png",
    image: "https://mdit.ac.in/imgserver/uploads/compressed/pcm__d4c10717-e4ec-44db-ac38-5c8be7748a71_0.png",
    gallery: [
      "https://mdit.ac.in/imgserver/uploads/compressed/pcm__d4c10717-e4ec-44db-ac38-5c8be7748a71_0.png",
      "/images/campuses/campus_architecture_1.jpg",
      "/images/campuses/campus_architecture_2.jpg"
    ],
    affiliation: "APJ Abdul Kalam Technological University (KTU)",
    courses: [
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹2.60 Lakhs",
        eligibility: "10+2 with Physics, Chemistry & Mathematics (KEAM)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹2.60 Lakhs",
        eligibility: "10+2 with PCM (KEAM)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹2.60 Lakhs",
        eligibility: "10+2 with PCM (KEAM)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Electronics and Communication Engineering",
        duration: "4 Years",
        fees: "₹2.60 Lakhs",
        eligibility: "10+2 with PCM (KEAM)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ],
    highestPackage: "₹10 LPA",
    averagePackage: "₹4.2 LPA",
    placements: "82%",
    facilities: ["Hostel", "Central Library", "Wi-Fi Campus", "Sports Ground", "Engineering Labs", "Auditorium", "Cafeteria", "College Bus Transport"],
    map_url: "https://www.google.com/maps/search/?api=1&query=M.Dasan+Institute+of+Technology+Ulliyeri+Kozhikode+Kerala",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=M.Dasan+Institute+of+Technology+Ulliyeri+Kozhikode+Kerala"
  },
  1288: {
    name: "SCMS Institute of Multidisciplinary Studies",
    shortName: "SIMS Kochi",
    location: "Ernakulam",
    state: "Kerala",
    address: "SCMS Campus, Muttom, Aluva, Ernakulam, Kerala - 683106",
    phone: "0484-2623803",
    website: "https://www.scmsgroup.org",
    rating: 4.3,
    reviews: 512,
    reviewsCount: 512,
    type: "Private",
    ownership: "Private",
    about: "SCMS Institute of Multidisciplinary Studies (SIMS), Kochi, is a specialized institution established under the renowned SCMS Group of Educational Institutions, a pioneering pioneer in management and professional education in South India. Affiliated with Mahatma Gandhi University (MGU), Kottayam, SIMS offers comprehensive undergraduate and postgraduate programs in computer applications, commerce, and management with industry-aligned curricula, smart learning environments, and outstanding career development support.",
    ranking: 74,
    fees: "₹1.15 Lakhs",
    exams: "Merit Based / MGU Centralized Allotment Process (CAP)",
    img: "https://images.careerindia.com/webp/college-photos/7709/scms-campus_1462950622.jpg",
    image: "https://images.careerindia.com/webp/college-photos/7709/scms-campus_1462950622.jpg",
    gallery: [
      "https://images.careerindia.com/webp/college-photos/7709/scms-campus_1462950622.jpg",
      "/images/campuses/campus_architecture_3.jpg",
      "/images/campuses/campus_architecture_4.jpg"
    ],
    affiliation: "Mahatma Gandhi University (MGU), Kottayam",
    courses: [
      {
        title: "BCA (Bachelor of Computer Applications)",
        duration: "3 Years",
        fees: "₹1.15 Lakhs",
        eligibility: "10+2 with Mathematics/Computer Science/Informatics Practices",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "BBA (Bachelor of Business Administration)",
        duration: "3 Years",
        fees: "₹1.15 Lakhs",
        eligibility: "10+2 in any stream with minimum 50% marks",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "B.Com (Computer Applications / Finance & Taxation)",
        duration: "3 Years",
        fees: "₹95,000",
        eligibility: "10+2 with Commerce/Mathematics",
        type: "COMMERCE",
        intake: 60
      }
    ],
    highestPackage: "₹8.5 LPA",
    averagePackage: "₹4.5 LPA",
    placements: "88%",
    facilities: ["Computer Center", "Digital Library", "Seminar Hall", "Wi-Fi Campus", "Cafeteria", "Language Lab", "Placement Cell"],
    map_url: "https://www.google.com/maps/search/?api=1&query=SCMS+Campus+Muttom+Aluva+Ernakulam+Kerala",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=SCMS+Campus+Muttom+Aluva+Ernakulam+Kerala"
  },
  1289: {
    name: "Government Polytechnic College, Adoor",
    shortName: "GPTC Adoor",
    location: "Pathanamthitta",
    state: "Kerala",
    address: "Manakala P.O., Adoor, Pathanamthitta District, Kerala - 691551",
    phone: "04734-230640",
    website: "https://gptcadoor.org",
    rating: 4.4,
    reviews: 423,
    reviewsCount: 423,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Government Polytechnic College, Adoor, established in 1994, is a premier technical institution functioning under the Department of Technical Education (DTE), Government of Kerala. Approved by AICTE and affiliated with the State Board of Technical Education, Kerala, the college is notably home to Kerala's signature Diploma program in Polymer Technology, alongside Mechanical and Architecture departments, providing high-standard practical training to aspiring technologists.",
    ranking: 79,
    fees: "₹12,800",
    exams: "Kerala Polytechnic Single Window Allotment",
    img: "https://gptcadoor.org/assets/gallery_images/u2gsowkvogsxjjv.jpg",
    image: "https://gptcadoor.org/assets/gallery_images/u2gsowkvogsxjjv.jpg",
    gallery: [
      "https://gptcadoor.org/assets/gallery_images/u2gsowkvogsxjjv.jpg",
      "/images/campuses/campus_architecture_1.jpg",
      "/images/campuses/campus_architecture_2.jpg"
    ],
    affiliation: "Department of Technical Education, Government of Kerala / AICTE",
    courses: [
      {
        title: "Diploma in Polymer Technology",
        duration: "3 Years",
        fees: "₹12,800",
        eligibility: "SSLC / 10th with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹12,800",
        eligibility: "SSLC / 10th with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Architecture",
        duration: "3 Years",
        fees: "₹12,800",
        eligibility: "SSLC / 10th with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 50
      }
    ],
    highestPackage: "₹6 LPA",
    averagePackage: "₹3.2 LPA",
    placements: "85%",
    facilities: ["Polymer Testing Lab", "Mechanical Workshops", "CAD Lab", "Central Library", "Hostel", "Sports Facilities", "Placement Cell"],
    map_url: "https://www.google.com/maps/search/?api=1&query=Government+Polytechnic+College+Manakala+Adoor+Kerala",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Government+Polytechnic+College+Manakala+Adoor+Kerala"
  },
  1290: {
    name: "Model Residential Polytechnic College, Kuzhalmannam",
    shortName: "MRPC Kuzhalmannam",
    location: "Palakkad",
    state: "Kerala",
    address: "Kuzhalmannam P.O., Palakkad District, Kerala - 678702",
    phone: "04922-273616",
    website: "https://mptkuzhalmannam.ihrd.ac.in",
    rating: 4.2,
    reviews: 176,
    reviewsCount: 176,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Model Residential Polytechnic College, Kuzhalmannam, Palakkad, is a specialized technical education institution established by the Government of Kerala and managed by the Institute of Human Resources Development (IHRD) in collaboration with the Scheduled Castes Development Department. The institution offers quality residential technical education with specialized focus on empowering talented students from all communities, affiliated with the State Board of Technical Education, Kerala and approved by AICTE.",
    ranking: 93,
    fees: "₹12,800",
    exams: "Kerala Polytechnic Admission (Single Window Allotment)",
    img: "https://media.collegedekho.com/media/img/institute/crawled_images/398926/mpt.jpg?width=640",
    image: "https://media.collegedekho.com/media/img/institute/crawled_images/398926/mpt.jpg?width=640",
    gallery: [
      "https://media.collegedekho.com/media/img/institute/crawled_images/398926/mpt.jpg?width=640",
      "/images/campuses/campus_architecture_3.jpg",
      "/images/campuses/campus_architecture_4.jpg"
    ],
    affiliation: "Institute of Human Resources Development (IHRD) / DTE Kerala / AICTE",
    courses: [
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹12,800",
        eligibility: "SSLC / 10th with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Computer Hardware Engineering",
        duration: "3 Years",
        fees: "₹12,800",
        eligibility: "SSLC / 10th with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹12,800",
        eligibility: "SSLC / 10th with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ],
    highestPackage: "₹5.5 LPA",
    averagePackage: "₹3 LPA",
    placements: "80%",
    facilities: ["Residential Hostels", "Computer Labs", "Survey Lab", "Mechanical Workshop", "Library", "Playground", "Mess Hall"],
    map_url: "https://www.google.com/maps/search/?api=1&query=Model+Residential+Polytechnic+College+Kuzhalmannam+Palakkad+Kerala",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Model+Residential+Polytechnic+College+Kuzhalmannam+Palakkad+Kerala"
  },
  1291: {
    name: "NSS Polytechnic College, Pandalam",
    shortName: "NSSPTC Pandalam",
    location: "Pathanamthitta",
    state: "Kerala",
    address: "Mannam Nagar P.O., Pandalam, Pathanamthitta District, Kerala - 689501",
    phone: "04734-259634",
    website: "https://nsspolytechnic.ac.in",
    rating: 4.4,
    reviews: 258,
    reviewsCount: 258,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "NSS Polytechnic College, Pandalam, established in 1958 by the Nair Service Society under the visionary leadership of Bharata Kesari Mannathu Padmanabhan, is one of Kerala's oldest and most respected government-aided polytechnic colleges. Operating under the grant-in-aid scheme of the Government of Kerala, the college is approved by AICTE and affiliated with the State Board of Technical Education, producing generations of proficient diploma engineers with stellar values.",
    ranking: 57,
    fees: "₹12,800",
    exams: "Kerala Polytechnic Single Window Allotment",
    img: "https://nsspolytechnic.ac.in/images/slider-photos/slider-3.jpg",
    image: "https://nsspolytechnic.ac.in/images/slider-photos/slider-3.jpg",
    gallery: [
      "https://nsspolytechnic.ac.in/images/slider-photos/slider-3.jpg",
      "/images/campuses/campus_architecture_1.jpg",
      "/images/campuses/campus_architecture_2.jpg"
    ],
    affiliation: "Department of Technical Education, Government of Kerala / AICTE",
    courses: [
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹12,800",
        eligibility: "SSLC / 10th with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹12,800",
        eligibility: "SSLC / 10th with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Electrical & Electronics Engineering",
        duration: "3 Years",
        fees: "₹12,800",
        eligibility: "SSLC / 10th with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Electronics & Communication Engineering",
        duration: "3 Years",
        fees: "₹12,800",
        eligibility: "SSLC / 10th with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Computer Engineering",
        duration: "3 Years",
        fees: "₹12,800",
        eligibility: "SSLC / 10th with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ],
    highestPackage: "₹6.5 LPA",
    averagePackage: "₹3.5 LPA",
    placements: "88%",
    facilities: ["Extensive Workshops", "Advanced Computer Labs", "Central Library", "Auditorium", "Sports Complex", "Student Hostels", "Career Guidance & Placement Cell"],
    map_url: "https://www.google.com/maps/search/?api=1&query=NSS+Polytechnic+College+Mannam+Nagar+Pandalam+Kerala",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=NSS+Polytechnic+College+Mannam+Nagar+Pandalam+Kerala"
  },
  1293: {
    name: "Mar Thoma Institute of Information Technology",
    shortName: "MIIT Chadayamangalam",
    location: "Kollam",
    state: "Kerala",
    address: "Chadayamangalam P.O., Ayur, Kollam District, Kerala - 691534",
    phone: "0474-2475456",
    website: "https://miit.edu.in",
    rating: 4.2,
    reviews: 361,
    reviewsCount: 361,
    type: "Private",
    ownership: "Private",
    about: "Mar Thoma Institute of Information Technology (MIIT), Chadayamangalam, Kollam, is a premier postgraduate institution established in 2002 and managed by the Mar Thoma Educational Agency under the Mar Thoma Church. Affiliated with the University of Kerala and approved by AICTE, MIIT is dedicated exclusively to advanced Master of Computer Applications (MCA) education, offering robust software development training, cloud and web technologies labs, and dedicated placement training.",
    ranking: 10,
    fees: "₹1.00 Lakh",
    exams: "Kerala MCA Entrance Examination / Kerala University Allotment",
    img: "https://www.collegebatch.com/static/clg-gallery/marthoma-institute-of-information-technology-miit-chadayamangalam-kollam-109891.webp",
    image: "https://www.collegebatch.com/static/clg-gallery/marthoma-institute-of-information-technology-miit-chadayamangalam-kollam-109891.webp",
    gallery: [
      "https://www.collegebatch.com/static/clg-gallery/marthoma-institute-of-information-technology-miit-chadayamangalam-kollam-109891.webp",
      "/images/campuses/campus_architecture_3.jpg",
      "/images/campuses/campus_architecture_4.jpg"
    ],
    affiliation: "University of Kerala, Thiruvananthapuram",
    courses: [
      {
        title: "Master of Computer Applications (MCA)",
        duration: "2 Years",
        fees: "₹1.00 Lakh",
        eligibility: "BCA / B.Sc Computer Science / B.Sc / B.Com / BA with Mathematics at 10+2 or Graduation level (Kerala MCA Entrance)",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      }
    ],
    highestPackage: "₹7.5 LPA",
    averagePackage: "₹4 LPA",
    placements: "84%",
    facilities: ["Computing Labs", "Digital Library", "Seminar Hall", "Wi-Fi Campus", "Hostel Facilities", "Cafeteria", "Placement & Career Guidance Cell"],
    map_url: "https://www.google.com/maps/search/?api=1&query=Mar+Thoma+Institute+of+Information+Technology+Chadayamangalam+Kollam+Kerala",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Mar+Thoma+Institute+of+Information+Technology+Chadayamangalam+Kollam+Kerala"
  },
  1295: {
    name: "Government Polytechnic College, Nedumkandam",
    shortName: "GPTC Nedumkandam",
    location: "Idukki",
    state: "Kerala",
    address: "Manjapetty, Nedumkandam P.O., Idukki District, Kerala - 685553",
    phone: "04868-234080",
    website: "https://gptcnedumkandam.ac.in",
    rating: 4.3,
    reviews: 213,
    reviewsCount: 213,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Government Polytechnic College, Nedumkandam, established in 2000, is a major government technical education institution functioning under the Department of Technical Education (DTE), Government of Kerala in the high-range district of Idukki. Approved by AICTE and affiliated with the State Board of Technical Education, the polytechnic provides essential engineering diploma courses in Computer Engineering, Electronics, and Hardware Engineering to students across the highland region.",
    ranking: 40,
    fees: "₹12,800",
    exams: "Kerala Polytechnic Single Window Allotment",
    img: "https://image-static.collegedunia.com/public/reviewPhotos/720142/Snapchat-766354430.jpg",
    image: "https://image-static.collegedunia.com/public/reviewPhotos/720142/Snapchat-766354430.jpg",
    gallery: [
      "https://image-static.collegedunia.com/public/reviewPhotos/720142/Snapchat-766354430.jpg",
      "/images/campuses/campus_architecture_1.jpg",
      "/images/campuses/campus_architecture_2.jpg"
    ],
    affiliation: "Department of Technical Education, Government of Kerala / AICTE",
    courses: [
      {
        title: "Diploma in Computer Engineering",
        duration: "3 Years",
        fees: "₹12,800",
        eligibility: "SSLC / 10th with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Electronics Engineering",
        duration: "3 Years",
        fees: "₹12,800",
        eligibility: "SSLC / 10th with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Computer Hardware Engineering",
        duration: "3 Years",
        fees: "₹12,800",
        eligibility: "SSLC / 10th with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ],
    highestPackage: "₹5.5 LPA",
    averagePackage: "₹3 LPA",
    placements: "82%",
    facilities: ["Computer Laboratories", "Electronics Hardware Labs", "Central Library", "Technical Workshops", "Sports Ground", "Placement Assistance Cell"],
    map_url: "https://www.google.com/maps/search/?api=1&query=Government+Polytechnic+College+Nedumkandam+Idukki+Kerala",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Government+Polytechnic+College+Nedumkandam+Idukki+Kerala"
  },
  1296: {
    name: "Government Polytechnic College, Kasaragod",
    shortName: "GPTC Kasaragod",
    location: "Kasaragod",
    state: "Kerala",
    address: "Periye P.O., Bekal Fort Via, Kasaragod District, Kerala - 671316",
    phone: "0467-2234020",
    website: "https://gpckasaragod.ac.in",
    rating: 4.4,
    reviews: 257,
    reviewsCount: 257,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Government Polytechnic College, Kasaragod, established in 1988, is the premier government engineering polytechnic institution in the northernmost district of Kerala, operating under the Department of Technical Education (DTE), Government of Kerala. Situated on an expansive campus near Periye, the college is approved by AICTE and affiliated with the State Board of Technical Education, offering reputable three-year diploma courses across electrical, mechanical, electronics, and computing disciplines.",
    ranking: 78,
    fees: "₹12,800",
    exams: "Kerala Polytechnic Single Window Allotment",
    img: "http://gpckasaragod.ac.in/wp-content/uploads/2019/08/Thumbnail-1.jpg",
    image: "http://gpckasaragod.ac.in/wp-content/uploads/2019/08/Thumbnail-1.jpg",
    gallery: [
      "http://gpckasaragod.ac.in/wp-content/uploads/2019/08/Thumbnail-1.jpg",
      "/images/campuses/campus_architecture_3.jpg",
      "/images/campuses/campus_architecture_4.jpg"
    ],
    affiliation: "Department of Technical Education, Government of Kerala / AICTE",
    courses: [
      {
        title: "Diploma in Electrical and Electronics Engineering",
        duration: "3 Years",
        fees: "₹12,800",
        eligibility: "SSLC / 10th with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹12,800",
        eligibility: "SSLC / 10th with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Electronics Engineering",
        duration: "3 Years",
        fees: "₹12,800",
        eligibility: "SSLC / 10th with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Computer Engineering",
        duration: "3 Years",
        fees: "₹12,800",
        eligibility: "SSLC / 10th with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ],
    highestPackage: "₹6 LPA",
    averagePackage: "₹3.2 LPA",
    placements: "86%",
    facilities: ["Advanced Electrical Labs", "Machining Workshops", "Computer Labs", "Hostel Facilities", "Technical Library", "Playground", "Career & Placement Cell"],
    map_url: "https://www.google.com/maps/search/?api=1&query=Government+Polytechnic+College+Periye+Kasaragod+Kerala",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Government+Polytechnic+College+Periye+Kasaragod+Kerala"
  },
  1297: {
    name: "College of Architecture Trivandrum",
    shortName: "CAT Trivandrum",
    location: "Thiruvananthapuram",
    state: "Kerala",
    address: "Thinavila, Mulayara P.O., Vellanad, Thiruvananthapuram, Kerala - 695543",
    phone: "0472-2884000",
    website: "https://cat.edu.in",
    rating: 4.5,
    reviews: 379,
    reviewsCount: 379,
    type: "Private",
    ownership: "Private",
    about: "College of Architecture Trivandrum (CAT), established in 2011 at Thinavila near Vellanad, Thiruvananthapuram, is one of South India's premier standalone architecture and design schools. Managed by the Saroja Educational & Charitable Trust, CAT is affiliated with APJ Abdul Kalam Technological University (KTU) and approved by the Council of Architecture (COA) and AICTE. The campus is internationally lauded for its award-winning climate-responsive eco-architecture designed by Ar. B. Sudhir, offering immersive Bachelor of Architecture (B.Arch) and Bachelor of Design (B.Des) programs.",
    ranking: 56,
    fees: "₹5.50 Lakhs",
    exams: "NATA, KEAM",
    img: "https://img.jagranjosh.com/images/2023/December/1122023/archfront.jpg",
    image: "https://img.jagranjosh.com/images/2023/December/1122023/archfront.jpg",
    gallery: [
      "https://img.jagranjosh.com/images/2023/December/1122023/archfront.jpg",
      "/images/campuses/campus_architecture_1.jpg",
      "/images/campuses/campus_architecture_2.jpg"
    ],
    affiliation: "APJ Abdul Kalam Technological University (KTU) / Council of Architecture (COA)",
    courses: [
      {
        title: "Bachelor of Architecture (B.Arch)",
        duration: "5 Years",
        fees: "₹5.50 Lakhs",
        eligibility: "10+2 with Physics, Chemistry & Mathematics with valid NATA score",
        type: "ARCHITECTURE",
        intake: 120
      },
      {
        title: "Bachelor of Design (B.Des - Interior Design / Product Design)",
        duration: "4 Years",
        fees: "₹4.40 Lakhs",
        eligibility: "10+2 in any stream / Design Aptitude Test",
        type: "APPLIED ARTS AND CRAFTS",
        intake: 60
      }
    ],
    highestPackage: "₹9 LPA",
    averagePackage: "₹4.8 LPA",
    placements: "90%",
    facilities: ["Architecture Studios", "Climatology Lab", "Carpentry & Model Making Workshop", "Material Museum", "Digital Fabrication Lab", "Architectural Library", "Hostels", "Amphitheatre"],
    map_url: "https://www.google.com/maps/search/?api=1&query=College+of+Architecture+Trivandrum+Mulayara+Vellanad+Kerala",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=College+of+Architecture+Trivandrum+Mulayara+Vellanad+Kerala"
  },
  1298: {
    name: "Government Polytechnic College, Palakkad",
    shortName: "GPTC Palakkad",
    location: "Palakkad",
    state: "Kerala",
    address: "Government Polytechnic College, Kodumbu P.O., Palakkad District, Kerala - 678551",
    phone: "0491-2572640",
    website: "https://gptcpalakkad.ac.in",
    rating: 4.5,
    reviews: 467,
    reviewsCount: 467,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Government Polytechnic College, Palakkad, established in 1980 at Kodumbu, is one of Kerala's foremost government technical institutions operating under the Department of Technical Education (DTE), Government of Kerala. Approved by AICTE and affiliated with the State Board of Technical Education, Kerala, the college provides comprehensive 3-year diploma engineering programs across civil, mechanical, electrical, electronics, computer, and instrumentation disciplines with cutting-edge labs and robust industry tie-ups.",
    ranking: 22,
    fees: "₹12,800",
    exams: "Kerala Polytechnic Single Window Allotment",
    img: "https://gptcpala.org/wp-content/uploads/2022/10/Home-GPC-Poly-Banner2-scaled.jpg",
    image: "https://gptcpala.org/wp-content/uploads/2022/10/Home-GPC-Poly-Banner2-scaled.jpg",
    gallery: [
      "https://gptcpala.org/wp-content/uploads/2022/10/Home-GPC-Poly-Banner2-scaled.jpg",
      "/images/campuses/campus_architecture_1.jpg",
      "/images/campuses/campus_architecture_2.jpg"
    ],
    affiliation: "Department of Technical Education, Government of Kerala / AICTE",
    courses: [
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹12,800",
        eligibility: "SSLC / 10th with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 110
      },
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹12,800",
        eligibility: "SSLC / 10th with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Electrical & Electronics Engineering",
        duration: "3 Years",
        fees: "₹12,800",
        eligibility: "SSLC / 10th with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Electronics Engineering",
        duration: "3 Years",
        fees: "₹12,800",
        eligibility: "SSLC / 10th with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Computer Engineering",
        duration: "3 Years",
        fees: "₹12,800",
        eligibility: "SSLC / 10th with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Diploma in Instrumentation Engineering",
        duration: "3 Years",
        fees: "₹12,800",
        eligibility: "SSLC / 10th with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ],
    highestPackage: "₹6 LPA",
    averagePackage: "₹3.4 LPA",
    placements: "88%",
    facilities: ["Advanced Instrumentation Lab", "Mechanical Workshops", "Civil Engineering Labs", "Computer Centre", "Central Library", "Sports Complex", "Placement & Training Cell"],
    map_url: "https://www.google.com/maps/search/?api=1&query=Government+Polytechnic+College+Kodumbu+Palakkad+Kerala",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Government+Polytechnic+College+Kodumbu+Palakkad+Kerala"
  }
};

let appliedCount = 0;
for (const col of colleges) {
  if (batch160Updates[col.id]) {
    Object.assign(col, batch160Updates[col.id]);
    appliedCount++;
  }
}

console.log(`Updated ${appliedCount} colleges in siteData.`);
fs.writeFileSync(siteDataPath, JSON.stringify(siteData, null, 2), 'utf8');

// Update progress.json
const now = new Date().toISOString();
progress.verifiedColleges = 1600;
progress.lastUpdated = now;
progress.batchesCompleted = 160;
progress.currentBatch = 161;
if (!progress.batchHistory) progress.batchHistory = [];
progress.batchHistory.push({
  batch: 160,
  verifiedCount: 10,
  totalVerified: 1600,
  timestamp: now,
  collegeIds: Object.keys(batch160Updates).map(Number)
});
fs.writeFileSync(progressPath, JSON.stringify(progress, null, 2), 'utf8');

// Update all_verified_colleges.json
const newlyVerifiedList = Object.entries(batch160Updates).map(([idStr, val]) => ({
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
const batchMdHeader = `\n### Batch 160 (Colleges 1,591–1,600) — Century Milestone (1,600 Verified Colleges)\n| ID | College Name | Location | State | Type | Website |\n|---|---|---|---|---|---|\n`;
let batchMdRows = '';
for (const item of newlyVerifiedList) {
  batchMdRows += `| ${item.id} | ${item.name} | ${item.location} | ${item.state} | ${item.type} | [${item.website}](${item.website}) |\n`;
}
mdContent += batchMdHeader + batchMdRows;
fs.writeFileSync(allVerifiedMdPath, mdContent, 'utf8');

console.log(`Batch 160 applied successfully! Total verified: ${progress.verifiedColleges}`);
