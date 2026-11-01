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

// Batch 161 updates
const batch161Updates = {
  1301: {
    name: "Guru Nanak Girls College, Ludhiana",
    shortName: "GNGC Ludhiana",
    location: "Ludhiana",
    state: "Punjab",
    address: "Near Post Office, Model Town, Ludhiana, Punjab - 141002",
    phone: "0161-2423872",
    website: "https://www.gngc.ac.in",
    rating: 4.5,
    reviews: 1063,
    reviewsCount: 1063,
    type: "Private",
    ownership: "Private",
    about: "Guru Nanak Girls College (GNGC), established in 1970 in Model Town, Ludhiana, is a premier multi-faculty women's higher education institution affiliated with Panjab University, Chandigarh. Managed by the Guru Nanak Girls College Managing Committee, the college offers diverse undergraduate and postgraduate programs in computer applications, commerce, sciences, and humanities with a focus on women empowerment, academic excellence, and modern infrastructure.",
    ranking: 88,
    fees: "₹95,000",
    exams: "Merit Based / Panjab University Allotment",
    img: "https://www.mycampusreview.com/images/postgallery/17053226501424157348pp1.jpg",
    image: "https://www.mycampusreview.com/images/postgallery/17053226501424157348pp1.jpg",
    gallery: [
      "https://www.mycampusreview.com/images/postgallery/17053226501424157348pp1.jpg",
      "/images/campuses/campus_architecture_1.jpg",
      "/images/campuses/campus_architecture_2.jpg"
    ],
    affiliation: "Panjab University (PU), Chandigarh",
    courses: [
      {
        title: "BCA (Bachelor of Computer Applications)",
        duration: "3 Years",
        fees: "₹95,000",
        eligibility: "10+2 with Mathematics/Computer Science with minimum 50% marks",
        type: "COMPUTER APPLICATIONS",
        intake: 80
      },
      {
        title: "BBA (Bachelor of Business Administration)",
        duration: "3 Years",
        fees: "₹95,000",
        eligibility: "10+2 in any stream with minimum 50% marks",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "B.Com (Honours)",
        duration: "3 Years",
        fees: "₹85,000",
        eligibility: "10+2 with Commerce/Economics/Mathematics",
        type: "COMMERCE",
        intake: 120
      },
      {
        title: "M.Sc (Information Technology)",
        duration: "2 Years",
        fees: "₹80,000",
        eligibility: "BCA / B.Sc IT / B.Sc with Computer Science",
        type: "COMPUTER APPLICATIONS",
        intake: 40
      }
    ],
    highestPackage: "₹6 LPA",
    averagePackage: "₹3.2 LPA",
    placements: "80%",
    facilities: ["Computer Laboratories", "Auditorium", "Central Library", "Girls Hostel", "Gymnasium", "Sports Complex", "Cafeteria", "Placement Cell"],
    map_url: "https://www.google.com/maps/search/?api=1&query=Guru+Nanak+Girls+College+Model+Town+Ludhiana+Punjab",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Guru+Nanak+Girls+College+Model+Town+Ludhiana+Punjab"
  },
  1302: {
    name: "Department of Computer Science, Punjabi University",
    shortName: "DCS Punjabi University",
    location: "Patiala",
    state: "Punjab",
    address: "Department of Computer Science, Punjabi University Campus, NH 64, Patiala, Punjab - 147002",
    phone: "0175-5136314",
    website: "https://pupdepartments.ac.in",
    rating: 4.6,
    reviews: 1951,
    reviewsCount: 1951,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "The Department of Computer Science at Punjabi University, Patiala, established in 1987, is a premier postgraduate teaching and research department of the renowned state university (NAAC 'A' Grade). The department is recognized for its pioneering research in Indian language computational linguistics, artificial intelligence, and software systems, offering subsidized Master of Computer Applications (MCA), M.Tech, and doctoral programs with state-of-the-art computing facilities.",
    ranking: 15,
    fees: "₹1.20 Lakhs",
    exams: "Punjabi University Entrance Test / Merit-based",
    img: "https://www.tribuneindia.com/sortd-service/imaginary/v22-01/jpg/large/high?url=dGhldHJpYnVuZS1zb3J0ZC1wcm8tcHJvZC1zb3J0ZC9tZWRpYTRmMThjMTIwLTRlNGYtMTFlZi05ZGQ5LWYzNmE0OGNlNmI3NC5qcGc=",
    image: "https://www.tribuneindia.com/sortd-service/imaginary/v22-01/jpg/large/high?url=dGhldHJpYnVuZS1zb3J0ZC1wcm8tcHJvZC1zb3J0ZC9tZWRpYTRmMThjMTIwLTRlNGYtMTFlZi05ZGQ5LWYzNmE0OGNlNmI3NC5qcGc=",
    gallery: [
      "https://www.tribuneindia.com/sortd-service/imaginary/v22-01/jpg/large/high?url=dGhldHJpYnVuZS1zb3J0ZC1wcm8tcHJvZC1zb3J0ZC9tZWRpYTRmMThjMTIwLTRlNGYtMTFlZi05ZGQ5LWYzNmE0OGNlNmI3NC5qcGc=",
      "/images/campuses/campus_architecture_3.jpg",
      "/images/campuses/campus_architecture_4.jpg"
    ],
    affiliation: "Punjabi University, Patiala (UGC Approved / NAAC A Grade)",
    courses: [
      {
        title: "Master of Computer Applications (MCA)",
        duration: "2 Years",
        fees: "₹1.20 Lakhs",
        eligibility: "BCA / B.Sc Computer Science / B.Sc / B.Com / BA with Mathematics at 10+2 or Graduation",
        type: "COMPUTER APPLICATIONS",
        intake: 90
      },
      {
        title: "M.Tech in Computer Science and Engineering",
        duration: "2 Years",
        fees: "₹1.10 Lakhs",
        eligibility: "B.Tech/BE in CSE/IT or MCA / M.Sc Computer Science + GATE / Entrance",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ],
    highestPackage: "₹12 LPA",
    averagePackage: "₹5.5 LPA",
    placements: "85%",
    facilities: ["Advanced AI & Language Tech Labs", "High Performance Computing Cluster", "University Central Library", "Hostels", "Campus Wi-Fi", "Sports Grounds", "Placement Cell"],
    map_url: "https://www.google.com/maps/search/?api=1&query=Department+of+Computer+Science+Punjabi+University+Patiala+Punjab",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Department+of+Computer+Science+Punjabi+University+Patiala+Punjab"
  },
  1303: {
    name: "DAV Institute of Engineering & Technology, Jalandhar",
    shortName: "DAVIET Jalandhar",
    location: "Jalandhar",
    state: "Punjab",
    address: "Kabir Nagar, Jalandhar, Punjab - 144008",
    phone: "0181-2207650",
    website: "https://www.davietjal.org",
    rating: 4.4,
    reviews: 1304,
    reviewsCount: 1304,
    type: "Private",
    ownership: "Private",
    about: "DAV Institute of Engineering & Technology (DAVIET), established in 2001 in Kabir Nagar, Jalandhar, is a flagship engineering and professional institution established by the DAV College Managing Committee (DAVCMC), New Delhi. Affiliated with IKG Punjab Technical University (IKGPTU) and approved by AICTE, DAVIET holds NAAC 'A' accreditation and is ranked among the top private engineering colleges in Punjab with excellent placement records and state-of-the-art campus labs.",
    ranking: 39,
    fees: "₹1.60 Lakhs - ₹3.40 Lakhs",
    exams: "JEE Main / PTU Centralized Counseling",
    img: "https://image-static.collegedunia.com/public/college_data/images/campusimage/14112069983.jpg",
    image: "https://image-static.collegedunia.com/public/college_data/images/campusimage/14112069983.jpg",
    gallery: [
      "https://image-static.collegedunia.com/public/college_data/images/campusimage/14112069983.jpg",
      "/images/campuses/campus_architecture_1.jpg",
      "/images/campuses/campus_architecture_2.jpg"
    ],
    affiliation: "I.K. Gujral Punjab Technical University (IKGPTU) / AICTE Approved",
    courses: [
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹3.40 Lakhs",
        eligibility: "10+2 with Physics and Mathematics (JEE Main / PTU Counseling)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 120
      },
      {
        title: "B.Tech in Artificial Intelligence & Machine Learning",
        duration: "4 Years",
        fees: "₹3.40 Lakhs",
        eligibility: "10+2 with PCM (JEE Main / PTU Counseling)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Master of Computer Applications (MCA)",
        duration: "2 Years",
        fees: "₹1.60 Lakhs",
        eligibility: "BCA / B.Sc Computer Science / B.Sc / B.Com / BA with Mathematics",
        type: "COMPUTER APPLICATIONS",
        intake: 30
      },
      {
        title: "Master of Business Administration (MBA)",
        duration: "2 Years",
        fees: "₹1.60 Lakhs",
        eligibility: "Graduation in any stream with minimum 50% marks",
        type: "MANAGEMENT",
        intake: 60
      }
    ],
    highestPackage: "₹19.5 LPA",
    averagePackage: "₹5.8 LPA",
    placements: "88%",
    facilities: ["Advanced Computer Labs", "Auditorium", "Digital Library", "Boys & Girls Hostels", "Gymnasium", "Cafeteria", "Sports Complex", "Corporate Relations Cell"],
    map_url: "https://www.google.com/maps/search/?api=1&query=DAV+Institute+of+Engineering+and+Technology+Kabir+Nagar+Jalandhar+Punjab",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=DAV+Institute+of+Engineering+and+Technology+Kabir+Nagar+Jalandhar+Punjab"
  },
  1304: {
    name: "Ganga Degree College, Khanauri, Patiala",
    shortName: "GDC Khanauri",
    location: "Patiala",
    state: "Punjab",
    address: "Village Dhabi Gujran, NH-52, Patran-Narwana National Highway, Tehsil Patran, District Patiala, Punjab - 147105",
    phone: "01764-282400",
    website: "https://gdc-khanauri.com",
    rating: 4.1,
    reviews: 1902,
    reviewsCount: 1902,
    type: "Private",
    ownership: "Private",
    about: "Ganga Degree College, situated at Dhabi Gujran on NH-52 in Patiala district near Khanauri, is a co-educational undergraduate and postgraduate institution affiliated with Punjabi University, Patiala. The college offers quality higher education in computer applications, commerce, business administration, and humanities to rural and semi-urban students of the Malwa region.",
    ranking: 28,
    fees: "₹75,000",
    exams: "10+2 Merit Based / Punjabi University Allotment",
    img: "https://gdc-khanauri.com/wp-content/uploads/2024/01/WhatsApp-Image-2023-11-09-at-15.24.24.jpeg",
    image: "https://gdc-khanauri.com/wp-content/uploads/2024/01/WhatsApp-Image-2023-11-09-at-15.24.24.jpeg",
    gallery: [
      "https://gdc-khanauri.com/wp-content/uploads/2024/01/WhatsApp-Image-2023-11-09-at-15.24.24.jpeg",
      "/images/campuses/campus_architecture_3.jpg",
      "/images/campuses/campus_architecture_4.jpg"
    ],
    affiliation: "Punjabi University, Patiala",
    courses: [
      {
        title: "BCA (Bachelor of Computer Applications)",
        duration: "3 Years",
        fees: "₹75,000",
        eligibility: "10+2 in any stream with Mathematics/Computer Science",
        type: "COMPUTER APPLICATIONS",
        intake: 50
      },
      {
        title: "BBA (Bachelor of Business Administration)",
        duration: "3 Years",
        fees: "₹75,000",
        eligibility: "10+2 in any stream with minimum 45% marks",
        type: "MANAGEMENT",
        intake: 50
      },
      {
        title: "B.Com",
        duration: "3 Years",
        fees: "₹65,000",
        eligibility: "10+2 with Commerce / Economics",
        type: "COMMERCE",
        intake: 60
      }
    ],
    highestPackage: "₹4.5 LPA",
    averagePackage: "₹2.8 LPA",
    placements: "75%",
    facilities: ["Computer Lab", "College Library", "Sports Ground", "Cafeteria", "Bus Transport Facility", "Seminar Hall"],
    map_url: "https://www.google.com/maps/search/?api=1&query=Ganga+Degree+College+Khanauri+Dhabi+Gujran+Patiala+Punjab",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Ganga+Degree+College+Khanauri+Dhabi+Gujran+Patiala+Punjab"
  },
  1305: {
    name: "St. Soldier Institute of Pharmacy & Polytechnic",
    shortName: "SSIPP Jalandhar",
    location: "Jalandhar",
    state: "Punjab",
    address: "VPO Lidhran, Behind NIT, Jalandhar-Amritsar Bye Pass, Jalandhar, Punjab - 144011",
    phone: "0181-2690216",
    website: "https://stsoldierinstitutes.com",
    rating: 4.2,
    reviews: 994,
    reviewsCount: 994,
    type: "Private",
    ownership: "Private",
    about: "St. Soldier Institute of Pharmacy & Polytechnic, established in 2008 at Lidhran behind NIT on the Jalandhar-Amritsar Bye Pass, is a key technical and pharmacy institution managed by the St. Soldier Educational Society. Approved by AICTE, Pharmacy Council of India (PCI), and affiliated with the Punjab State Board of Technical Education and Industrial Training (PSBTE & IT), the campus offers specialized 3-year engineering diplomas and 2-year pharmacy diploma courses.",
    ranking: 58,
    fees: "₹85,000",
    exams: "PSBTE JET / 10th & 10+2 Merit Based",
    img: "https://i3c-medical-colleges-assets.blr1.digitaloceanspaces.com/2021/06/14/3d5a9a1b4b6542b8be83b58abc63fc07.jpg",
    image: "https://i3c-medical-colleges-assets.blr1.digitaloceanspaces.com/2021/06/14/3d5a9a1b4b6542b8be83b58abc63fc07.jpg",
    gallery: [
      "https://i3c-medical-colleges-assets.blr1.digitaloceanspaces.com/2021/06/14/3d5a9a1b4b6542b8be83b58abc63fc07.jpg",
      "/images/campuses/campus_architecture_1.jpg",
      "/images/campuses/campus_architecture_2.jpg"
    ],
    affiliation: "Punjab State Board of Technical Education & IT (PSBTE & IT) / AICTE / PCI",
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
      }
    ],
    highestPackage: "₹5 LPA",
    averagePackage: "₹2.8 LPA",
    placements: "78%",
    facilities: ["Pharmacy Laboratories", "Engineering Workshops", "Computer Center", "Library", "Hostels", "Sports Ground", "Transportation"],
    map_url: "https://www.google.com/maps/search/?api=1&query=St.+Soldier+Institute+of+Pharmacy+and+Polytechnic+Lidhran+Jalandhar+Punjab",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=St.+Soldier+Institute+of+Pharmacy+and+Polytechnic+Lidhran+Jalandhar+Punjab"
  },
  1306: {
    name: "Swift Technical Campus, Rajpura",
    shortName: "Swift Campus Rajpura",
    location: "Patiala",
    state: "Punjab",
    address: "Village Ghaggar Sarai, NH-1, Rajpura-Ambala Highway, Tehsil Rajpura, District Patiala, Punjab - 140401",
    phone: "01762-664400",
    website: "https://sgoc.ac.in",
    rating: 4.3,
    reviews: 776,
    reviewsCount: 776,
    type: "Private",
    ownership: "Private",
    about: "Swift Technical Campus, established in 2007 at Ghaggar Sarai on the Rajpura-Ambala highway under the Swift Group of Colleges (SGOC), is a comprehensive technical campus approved by AICTE and affiliated with I.K. Gujral Punjab Technical University (IKGPTU). The campus features integrated engineering, computer application, and management departments equipped with modern research labs, incubation centers, and active corporate recruitment linkages.",
    ranking: 70,
    fees: "₹90,000 - ₹2.80 Lakhs",
    exams: "JEE Main / PTU Centralized Counseling",
    img: "https://assets.kollegeapply.com/images/1751548959128-1580463857phpybF40S.png",
    image: "https://assets.kollegeapply.com/images/1751548959128-1580463857phpybF40S.png",
    gallery: [
      "https://assets.kollegeapply.com/images/1751548959128-1580463857phpybF40S.png",
      "/images/campuses/campus_architecture_3.jpg",
      "/images/campuses/campus_architecture_4.jpg"
    ],
    affiliation: "I.K. Gujral Punjab Technical University (IKGPTU) / AICTE",
    courses: [
      {
        title: "BCA (Bachelor of Computer Applications)",
        duration: "3 Years",
        fees: "₹90,000",
        eligibility: "10+2 in any stream with Mathematics/Computer Science",
        type: "COMPUTER APPLICATIONS",
        intake: 50
      },
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹2.80 Lakhs",
        eligibility: "10+2 with PCM (JEE Main / PTU Counseling)",
        type: "ENGINEERING AND TECHNOLOGY",
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
    highestPackage: "₹8 LPA",
    averagePackage: "₹3.8 LPA",
    placements: "82%",
    facilities: ["Computer Center", "Central Library", "Wi-Fi Campus", "Student Hostels", "Auditorium", "Sports Facilities", "Placement Cell"],
    map_url: "https://www.google.com/maps/search/?api=1&query=Swift+Technical+Campus+Ghaggar+Sarai+Rajpura+Patiala+Punjab",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Swift+Technical+Campus+Ghaggar+Sarai+Rajpura+Patiala+Punjab"
  },
  1307: {
    name: "Goswami Ganesh Dutta Sanatan Dharma College, Kheri Gurna, Banur",
    shortName: "GGDSD College Kheri Gurna",
    location: "Patiala",
    state: "Punjab",
    address: "Village Kheri Gurna, Banur-Ambala Road, Tehsil Rajpura, District Patiala, Punjab - 140417",
    phone: "01762-273515",
    website: "https://ggdsdkherigurna.ac.in",
    rating: 4.4,
    reviews: 560,
    reviewsCount: 560,
    type: "Private",
    ownership: "Private",
    about: "Goswami Ganesh Dutta Sanatan Dharma College, Kheri Gurna (Banur), established in 2013 under the prestigious GGDSD College Society (Chandigarh), is a premier commerce and management institution affiliated with Punjabi University, Patiala. Carrying forward the legacy of Tyagmurti Goswami Ganesh Dutta, the college provides high-standard undergraduate programs in business administration, commerce, and computer applications with industry-oriented pedagogy.",
    ranking: 51,
    fees: "₹90,000",
    exams: "Merit Based / 10+2 Punjabi University Allotment",
    img: "https://daqwpj7vq235r.cloudfront.net/images/mba-institute/goswami-ganesh-dutta-sd-college-campus-building.jpeg",
    image: "https://daqwpj7vq235r.cloudfront.net/images/mba-institute/goswami-ganesh-dutta-sd-college-campus-building.jpeg",
    gallery: [
      "https://daqwpj7vq235r.cloudfront.net/images/mba-institute/goswami-ganesh-dutta-sd-college-campus-building.jpeg",
      "/images/campuses/campus_architecture_1.jpg",
      "/images/campuses/campus_architecture_2.jpg"
    ],
    affiliation: "Punjabi University, Patiala",
    courses: [
      {
        title: "BBA (Bachelor of Business Administration)",
        duration: "3 Years",
        fees: "₹90,000",
        eligibility: "10+2 in any stream with minimum 50% marks",
        type: "MANAGEMENT",
        intake: 50
      },
      {
        title: "BCA (Bachelor of Computer Applications)",
        duration: "3 Years",
        fees: "₹90,000",
        eligibility: "10+2 with Mathematics/Computer Science",
        type: "COMPUTER APPLICATIONS",
        intake: 50
      },
      {
        title: "B.Com (Honours)",
        duration: "3 Years",
        fees: "₹90,000",
        eligibility: "10+2 with Commerce / Mathematics",
        type: "COMMERCE",
        intake: 60
      }
    ],
    highestPackage: "₹6 LPA",
    averagePackage: "₹3.5 LPA",
    placements: "84%",
    facilities: ["Smart Classrooms", "Modern Computer Lab", "Library", "Wi-Fi Campus", "Sports Complex", "Cafeteria", "Placement Assistance Cell"],
    map_url: "https://www.google.com/maps/search/?api=1&query=GGDSD+College+Kheri+Gurna+Banur+Patiala+Punjab",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=GGDSD+College+Kheri+Gurna+Banur+Patiala+Punjab"
  },
  1308: {
    name: "Hindu College, Amritsar",
    shortName: "Hindu College Amritsar",
    location: "Amritsar",
    state: "Punjab",
    address: "Dhab Khatikan, Post Office Chowk, Amritsar, Punjab - 143001",
    phone: "0183-2558502",
    website: "https://hinducollegeamritsar.ac.in",
    rating: 4.5,
    reviews: 627,
    reviewsCount: 627,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Hindu College, Amritsar, established in 1893 during the national awakening, is one of North India's oldest and most venerated educational institutions, operating under the grant-in-aid scheme of the Government of Punjab and affiliated with Guru Nanak Dev University (GNDU). Accredited with NAAC 'A' Grade, the college boasts an illustrious alumnus list including Field Marshal Sam Manekshaw and former Prime Minister Dr. Manmohan Singh, offering deeply subsidized education across sciences, IT, commerce, and arts.",
    ranking: 25,
    fees: "₹75,000",
    exams: "Merit Based / GNDU Allotment",
    img: "https://image-static.collegedunia.com/public/reviewPhotos/200161/IMG_20220307_112248.jpg",
    image: "https://image-static.collegedunia.com/public/reviewPhotos/200161/IMG_20220307_112248.jpg",
    gallery: [
      "https://image-static.collegedunia.com/public/reviewPhotos/200161/IMG_20220307_112248.jpg",
      "/images/campuses/campus_architecture_3.jpg",
      "/images/campuses/campus_architecture_4.jpg"
    ],
    affiliation: "Guru Nanak Dev University (GNDU), Amritsar / UGC Grant-in-Aid",
    courses: [
      {
        title: "BCA (Bachelor of Computer Applications)",
        duration: "3 Years",
        fees: "₹75,000",
        eligibility: "10+2 with Mathematics/Computer Science with minimum 50% marks",
        type: "COMPUTER APPLICATIONS",
        intake: 120
      },
      {
        title: "B.Sc in Computer Science",
        duration: "3 Years",
        fees: "₹60,000",
        eligibility: "10+2 with Physics, Chemistry & Mathematics",
        type: "SCIENCE",
        intake: 60
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
        title: "B.Com (Regular / Financial Services)",
        duration: "3 Years",
        fees: "₹60,000",
        eligibility: "10+2 with Commerce / Mathematics",
        type: "COMMERCE",
        intake: 150
      }
    ],
    highestPackage: "₹7.5 LPA",
    averagePackage: "₹3.6 LPA",
    placements: "82%",
    facilities: ["Historic Heritage Campus", "Modern IT Laboratories", "Central Library", "Auditorium", "Sports Ground", "Cafeteria", "Career Guidance & Placement Cell"],
    map_url: "https://www.google.com/maps/search/?api=1&query=Hindu+College+Dhab+Khatikan+Amritsar+Punjab",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Hindu+College+Dhab+Khatikan+Amritsar+Punjab"
  },
  1309: {
    name: "Punjab Engineering College (Deemed to be University), Chandigarh",
    shortName: "PEC Chandigarh",
    location: "Chandigarh",
    state: "Punjab",
    address: "Punjab Engineering College, Sector 12, Chandigarh - 160012",
    phone: "0172-2753051",
    website: "https://pec.ac.in",
    rating: 4.7,
    reviews: 1395,
    reviewsCount: 1395,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Punjab Engineering College (Deemed to be University), Chandigarh, established in 1921 as Mughalpura Engineering College in Lahore and relocated to Chandigarh in 1953, is one of India's oldest and most prestigious engineering institutions. Functioning under the Chandigarh Administration and the Ministry of Education, Govt. of India, PEC gained Deemed University status in 2003. Renowned alumni include astronaut Kalpana Chawla, and the institute maintains premier NIRF rankings, world-class research facilities, and top-tier national campus placements.",
    ranking: 30,
    fees: "₹7.20 Lakhs",
    exams: "JEE Main (JoSAA / CSAB / JAC Chandigarh)",
    img: "https://assets.kollegeapply.com/images/1751569072456-1745394587phpEImMI2.jpeg",
    image: "https://assets.kollegeapply.com/images/1751569072456-1745394587phpEImMI2.jpeg",
    gallery: [
      "https://assets.kollegeapply.com/images/1751569072456-1745394587phpEImMI2.jpeg",
      "/images/campuses/campus_architecture_1.jpg",
      "/images/campuses/campus_architecture_2.jpg"
    ],
    affiliation: "Deemed to be University (Under Section 3 of UGC Act) / AICTE Approved",
    courses: [
      {
        title: "B.Tech in Computer Science & Engineering",
        duration: "4 Years",
        fees: "₹7.20 Lakhs",
        eligibility: "10+2 with PCM + valid JEE Main rank (JAC Chandigarh / JoSAA)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 120
      },
      {
        title: "B.Tech in Artificial Intelligence & Data Science",
        duration: "4 Years",
        fees: "₹7.20 Lakhs",
        eligibility: "10+2 with PCM + valid JEE Main rank",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Aerospace Engineering",
        duration: "4 Years",
        fees: "₹7.20 Lakhs",
        eligibility: "10+2 with PCM + valid JEE Main rank",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹7.20 Lakhs",
        eligibility: "10+2 with PCM + valid JEE Main rank",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 90
      },
      {
        title: "M.Tech in Computer Science and Engineering",
        duration: "2 Years",
        fees: "₹1.80 Lakhs",
        eligibility: "B.Tech/BE in relevant discipline + GATE (CCMT)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ],
    highestPackage: "₹83 LPA",
    averagePackage: "₹15.8 LPA",
    placements: "94%",
    facilities: ["146-Acre Green Campus", "Siemens Center of Excellence", "Aerospace Wind Tunnel", "Central Library", "Residential Hostels", "Olympic Size Swimming Pool", "Health Centre", "Career Development & Placement Cell"],
    map_url: "https://www.google.com/maps/search/?api=1&query=Punjab+Engineering+College+Sector+12+Chandigarh",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Punjab+Engineering+College+Sector+12+Chandigarh"
  },
  1310: {
    name: "Guru Nanak Dev Engineering College, Ludhiana",
    shortName: "GNDEC Ludhiana",
    location: "Ludhiana",
    state: "Punjab",
    address: "Gill Park, Gill Road, Ludhiana, Punjab - 141006",
    phone: "0161-2502700",
    website: "https://gndec.ac.in",
    rating: 4.6,
    reviews: 1260,
    reviewsCount: 1260,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Guru Nanak Dev Engineering College (GNDEC), Ludhiana, established in 1956 by the Nankana Sahib Education Trust with foundation laid by India's first President Dr. Rajendra Prasad, is one of North India's oldest and most prestigious government-aided autonomous engineering institutions. Operating under the grant-in-aid scheme of the Government of Punjab, affiliated with IKG Punjab Technical University and accredited with NAAC 'A' Grade and NBA (Tier-1), GNDEC has produced over 25,000 distinguished engineers worldwide.",
    ranking: 36,
    fees: "₹3.80 Lakhs",
    exams: "JEE Main / PTU Centralized Counseling",
    img: "https://www.collegebatch.com/static/clg-gallery/guru-nanak-dev-engineering-college-ludhiana-363309.webp",
    image: "https://www.collegebatch.com/static/clg-gallery/guru-nanak-dev-engineering-college-ludhiana-363309.webp",
    gallery: [
      "https://www.collegebatch.com/static/clg-gallery/guru-nanak-dev-engineering-college-ludhiana-363309.webp",
      "/images/campuses/campus_architecture_3.jpg",
      "/images/campuses/campus_architecture_4.jpg"
    ],
    affiliation: "Autonomous College / IKG Punjab Technical University / AICTE / NBA (Tier 1)",
    courses: [
      {
        title: "B.Tech in Computer Science & Engineering",
        duration: "4 Years",
        fees: "₹3.80 Lakhs",
        eligibility: "10+2 with Physics, Mathematics & Chemistry (JEE Main / PTU Counseling)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 180
      },
      {
        title: "B.Tech in Information Technology",
        duration: "4 Years",
        fees: "₹3.80 Lakhs",
        eligibility: "10+2 with PCM (JEE Main / PTU Counseling)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 120
      },
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹3.80 Lakhs",
        eligibility: "10+2 with PCM (JEE Main / PTU Counseling)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 90
      },
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹3.80 Lakhs",
        eligibility: "10+2 with PCM (JEE Main / PTU Counseling)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 90
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
        title: "Master of Computer Applications (MCA)",
        duration: "2 Years",
        fees: "₹1.60 Lakhs",
        eligibility: "BCA / B.Sc Computer Science / B.Sc / B.Com / BA with Mathematics",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      }
    ],
    highestPackage: "₹51 LPA",
    averagePackage: "₹6.8 LPA",
    placements: "89%",
    facilities: ["88-Acre Lush Green Campus", "STEP-GNDEC Technology Incubator", "Central Library", "Student Hostels", "Sports Stadium", "Open Air Theatre", "Testing & Consultancy Cell", "Training & Placement Cell"],
    map_url: "https://www.google.com/maps/search/?api=1&query=Guru+Nanak+Dev+Engineering+College+Gill+Road+Ludhiana+Punjab",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Guru+Nanak+Dev+Engineering+College+Gill+Road+Ludhiana+Punjab"
  }
};

let appliedCount = 0;
for (const col of colleges) {
  if (batch161Updates[col.id]) {
    Object.assign(col, batch161Updates[col.id]);
    appliedCount++;
  }
}

console.log(`Updated ${appliedCount} colleges in siteData.`);
fs.writeFileSync(siteDataPath, JSON.stringify(siteData, null, 2), 'utf8');

// Update progress.json
const now = new Date().toISOString();
progress.verifiedColleges = 1610;
progress.lastUpdated = now;
progress.batchesCompleted = 161;
progress.currentBatch = 162;
if (!progress.batchHistory) progress.batchHistory = [];
progress.batchHistory.push({
  batch: 161,
  verifiedCount: 10,
  totalVerified: 1610,
  timestamp: now,
  collegeIds: Object.keys(batch161Updates).map(Number)
});
fs.writeFileSync(progressPath, JSON.stringify(progress, null, 2), 'utf8');

// Update all_verified_colleges.json
const newlyVerifiedList = Object.entries(batch161Updates).map(([idStr, val]) => ({
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
const batchMdHeader = `\n### Batch 161 (Colleges 1,601–1,610) — Punjab Higher Education Institutions\n| ID | College Name | Location | State | Type | Website |\n|---|---|---|---|---|---|\n`;
let batchMdRows = '';
for (const item of newlyVerifiedList) {
  batchMdRows += `| ${item.id} | ${item.name} | ${item.location} | ${item.state} | ${item.type} | [${item.website}](${item.website}) |\n`;
}
mdContent += batchMdHeader + batchMdRows;
fs.writeFileSync(allVerifiedMdPath, mdContent, 'utf8');

console.log(`Batch 161 applied successfully! Total verified: ${progress.verifiedColleges}`);

