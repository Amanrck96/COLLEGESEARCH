const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');
const progressPath = path.join(__dirname, '..', 'reports', 'verification', 'progress.json');
const summaryPath = path.join(__dirname, '..', 'reports', 'verification', 'batch-131-summary.md');

const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const progress = JSON.parse(fs.readFileSync(progressPath, 'utf8'));

// Verified updates for Batch 131 (Colleges 1,301 - 1,310)
const batch131Updates = {
  970: {
    name: "Mewar University (Gangrar, Chittorgarh)",
    shortName: "Mewar University Chittorgarh",
    location: "Gangrar, Chittorgarh",
    city: "Gangrar",
    district: "Chittorgarh",
    state: "Rajasthan",
    address: "NH-48, Gangrar, Chittorgarh, Rajasthan - 312901",
    phone: "01471-220881",
    website: "https://www.mewaruniversity.org",
    type: "Private",
    ownership: "Private",
    established: 2009,
    affiliation: "Private University, UGC Recognized, AICTE, BCI, PCI Approved",
    rating: 4.4,
    reviews: 272,
    ranking: 18,
    fees: "₹75,000/yr",
    exams: "MUEST / JEE Main / CUET / Merit",
    about: "Mewar University, established in 2009 by an Act of the Rajasthan State Legislature, is an autonomous private university located on a sprawling 30-acre campus along NH-48 in Gangrar, Chittorgarh. UGC-recognized and approved by statutory councils, Mewar University offers diverse degree programs in Engineering, Management, Computer Applications, Pharmacy, and Law with extensive residential hostel facilities.",
    image: "https://www.mewaruniversity.org/uploads/images/CampusView.jpg",
    gallery: [
      "https://www.mewaruniversity.org/uploads/images/CampusView.jpg"
    ],
    facilities: ["30-Acre Campus", "Central Computing Centre", "Central Library", "Boys & Girls Hostels", "Sports Stadium", "Incubation Centre", "Cafeteria"],
    highestPackage: "₹16 LPA",
    averagePackage: "₹4.2 LPA",
    placements: "86%",
    courses: [
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹75,000/yr",
        eligibility: "10+2 with PCM (45%)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 120
      },
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹65,000/yr",
        eligibility: "10+2 with PCM (45%)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹45,000/yr",
        eligibility: "10+2 with Mathematics / CS (45%)",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹45,000/yr",
        eligibility: "10+2 in any stream (45%)",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "Master of Business Administration (MBA)",
        duration: "2 Years",
        fees: "₹70,000/yr",
        eligibility: "Graduation with minimum 50% marks",
        type: "MANAGEMENT",
        intake: 60
      }
    ]
  },
  971: {
    name: "NIMS University, Jaipur",
    shortName: "NIMS University Jaipur",
    location: "Shobha Nagar, Jaipur",
    city: "Jaipur",
    district: "Jaipur",
    state: "Rajasthan",
    address: "Dr. B.S. Tomar City, Shobha Nagar, Delhi-Jaipur Highway, Jaipur, Rajasthan - 303121",
    phone: "01426-515151",
    website: "https://nimsuniversity.org",
    type: "Private",
    ownership: "Private",
    established: 2008,
    affiliation: "Private University, UGC Recognized, NAAC 'A+' Accredited, AICTE & NMC Approved",
    rating: 4.5,
    reviews: 382,
    ranking: 6,
    fees: "₹1,20,000/yr",
    exams: "NIMSEE / JEE Main / NEET / CUET",
    about: "NIMS University, established in 2008 under the NIMS University Rajasthan Act, is one of India's leading self-financed composite universities located on the Delhi-Jaipur Highway in Shobha Nagar, Jaipur. Accredited with NAAC 'A+' Grade, NIMS University encompasses multidisciplinary faculties in Medicine, Engineering, Computer Applications, Management, and Law with a 1400-bed super-speciality hospital and international academic tie-ups.",
    image: "https://www.collegebatch.com/static/clg-gallery/nims-university-jaipur-366294.webp",
    gallery: [
      "https://www.collegebatch.com/static/clg-gallery/nims-university-jaipur-366294.webp"
    ],
    facilities: ["Composite Healthcare Campus", "Advanced Simulation Labs", "Central Digital Library", "Air-Conditioned Hostels", "Indoor Sports Arena", "Food Courts & Cafeterias", "Transport Network"],
    highestPackage: "₹20 LPA",
    averagePackage: "₹5.5 LPA",
    placements: "90%",
    courses: [
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹1,20,000/yr",
        eligibility: "10+2 with PCM (50%)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 120
      },
      {
        title: "B.Tech in Artificial Intelligence and Data Science",
        duration: "4 Years",
        fees: "₹1,20,000/yr",
        eligibility: "10+2 with PCM (50%)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹70,000/yr",
        eligibility: "10+2 with Mathematics / CS / IT (45%)",
        type: "COMPUTER APPLICATIONS",
        intake: 120
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹80,000/yr",
        eligibility: "10+2 in any discipline (45%)",
        type: "MANAGEMENT",
        intake: 120
      },
      {
        title: "Master of Business Administration (MBA)",
        duration: "2 Years",
        fees: "₹1,50,000/yr",
        eligibility: "Bachelor's Degree with minimum 50% marks",
        type: "MANAGEMENT",
        intake: 120
      }
    ]
  },
  972: {
    name: "Apex University, Jaipur",
    shortName: "Apex University Jaipur",
    location: "Mansarovar, Jaipur",
    city: "Jaipur",
    district: "Jaipur",
    state: "Rajasthan",
    address: "V.T. Road, Sector-5, Mansarovar, Jaipur, Rajasthan - 302020",
    phone: "0141-6660999",
    website: "https://www.apexuniversity.co.in",
    type: "Private",
    ownership: "Private",
    established: 2018,
    affiliation: "Private University, UGC Recognized, Approved by AICTE, BCI, PCI",
    rating: 4.4,
    reviews: 82,
    ranking: 41,
    fees: "₹95,000/yr",
    exams: "ACET / CUET / Merit",
    about: "Apex University, established in 2018 by the Sanjay Shiksha Samiti (with a 58-year legacy in higher education), is a prominent private multidisciplinary university based in Mansarovar, Jaipur. Recognized by UGC and AICTE, Apex University offers contemporary industry-aligned degrees in Engineering, Information Technology, Management, Media, Law, and Allied Health Sciences.",
    image: "https://miro.medium.com/v2/resize:fit:700/1*TxtktSeopjtDydNqzwV_6Q.png",
    gallery: [
      "https://miro.medium.com/v2/resize:fit:700/1*TxtktSeopjtDydNqzwV_6Q.png"
    ],
    facilities: ["Smart Classrooms", "Modern Computer Labs", "Central Library", "Moot Court", "Hostels", "Sports Facilities", "Cafeteria"],
    highestPackage: "₹36 LPA",
    averagePackage: "₹5.2 LPA",
    placements: "88%",
    courses: [
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹95,000/yr",
        eligibility: "10+2 with PCM (45%)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 120
      },
      {
        title: "B.Tech in Artificial Intelligence and Data Science",
        duration: "4 Years",
        fees: "₹95,000/yr",
        eligibility: "10+2 with PCM (45%)",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹65,000/yr",
        eligibility: "10+2 with Mathematics / CS (45%)",
        type: "COMPUTER APPLICATIONS",
        intake: 120
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹70,000/yr",
        eligibility: "10+2 in any stream (45%)",
        type: "MANAGEMENT",
        intake: 120
      },
      {
        title: "Master of Business Administration (MBA)",
        duration: "2 Years",
        fees: "₹1,20,000/yr",
        eligibility: "Graduation in any discipline (50%)",
        type: "MANAGEMENT",
        intake: 60
      }
    ]
  },
  973: {
    name: "Banasthali Vidyapith (Niwai, Tonk)",
    shortName: "Banasthali Vidyapith",
    location: "Banasthali, Tonk",
    city: "Niwai",
    district: "Tonk",
    state: "Rajasthan",
    address: "P.O. Banasthali Vidyapith, Niwai, Tonk, Rajasthan - 304022",
    phone: "01438-228384",
    website: "https://www.banasthali.org",
    type: "Private",
    ownership: "Private",
    established: 1935,
    affiliation: "Deemed-to-be-University, UGC Recognized, NAAC 'A++' Grade Accredited",
    rating: 4.7,
    reviews: 471,
    ranking: 4,
    fees: "₹1,35,000/yr",
    exams: "Banasthali Vidyapith Entrance Exam / Merit",
    about: "Banasthali Vidyapith, founded in 1935 by Pandit Hiralal Shastri and Ratan Shastri, is India's premier all-women residential deemed university situated on an expansive 850-acre eco-friendly campus in Banasthali, Tonk. Accredited by NAAC with the apex 'A++' Grade, Banasthali delivers its unique Panchmukhi Shiksha (five-fold education) combining intellectual, physical, practical, aesthetic, and moral development.",
    image: "https://www.mycampusreview.com/images/postgallery/1761903997banasthali-vidyapith-5.jpeg",
    gallery: [
      "https://www.mycampusreview.com/images/postgallery/1761903997banasthali-vidyapith-5.jpeg"
    ],
    facilities: ["850-Acre Residential Campus", "Aviation Flying Club & Airstrip", "Horse Riding Arena", "Supercomputer Facility", "Central Library", "Women's Hostels", "Indoor Sports Stadium", "Dining Halls"],
    highestPackage: "₹24 LPA",
    averagePackage: "₹7.5 LPA",
    placements: "94%",
    courses: [
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹1,45,000/yr",
        eligibility: "10+2 with PCM (60%) for female candidates",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 240
      },
      {
        title: "B.Tech in Artificial Intelligence and Data Science",
        duration: "4 Years",
        fees: "₹1,45,000/yr",
        eligibility: "10+2 with PCM (60%) for female candidates",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹1,05,000/yr",
        eligibility: "10+2 with Mathematics (55%) for female candidates",
        type: "COMPUTER APPLICATIONS",
        intake: 120
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹1,05,000/yr",
        eligibility: "10+2 in any stream (55%) for female candidates",
        type: "MANAGEMENT",
        intake: 120
      },
      {
        title: "Master of Business Administration (MBA)",
        duration: "2 Years",
        fees: "₹1,60,000/yr",
        eligibility: "Graduation with minimum 50% marks",
        type: "MANAGEMENT",
        intake: 120
      }
    ]
  },
  974: {
    name: "Manipal University Jaipur (MUJ)",
    shortName: "Manipal University Jaipur",
    location: "Dehmi Kalan, Jaipur",
    city: "Jaipur",
    district: "Jaipur",
    state: "Rajasthan",
    address: "Dehmi Kalan, Off Jaipur-Ajmer Expressway, Jaipur, Rajasthan - 303007",
    phone: "0141-3999100",
    website: "https://jaipur.manipal.edu",
    type: "Private",
    ownership: "Private",
    established: 2011,
    affiliation: "Private University, UGC Recognized, NAAC 'A+' Grade Accredited",
    rating: 4.6,
    reviews: 476,
    ranking: 9,
    fees: "₹2,40,000/yr",
    exams: "MET / JEE Main / CUET / Merit",
    about: "Manipal University Jaipur (MUJ), established in 2011 as a flagship institution of the Manipal Education Group, is an elite private multidisciplinary university spread over 122 acres on the Jaipur-Ajmer Expressway. Accredited by NAAC with 'A+' Grade, MUJ offers premier education in Engineering, Architecture, Management, Law, and Sciences with international research hubs and extraordinary placements reaching ₹85 LPA.",
    image: "https://d13loartjoc1yn.cloudfront.net/upload/institute/images/large/190327054343_maxresdefault.webp",
    gallery: [
      "https://d13loartjoc1yn.cloudfront.net/upload/institute/images/large/190327054343_maxresdefault.webp"
    ],
    facilities: ["122-Acre Modern Smart Campus", "Advanced Computing & AI Clusters", "Central Digital Library", "Air-Conditioned Premium Hostels", "Olympic-Grade Sports Complex", "Student Incubation Hub", "Multi-Cuisine Food Court"],
    highestPackage: "₹85 LPA",
    averagePackage: "₹9.0 LPA",
    placements: "95%",
    courses: [
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹3,40,000/yr",
        eligibility: "10+2 with PCM (50%) + MET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 480
      },
      {
        title: "B.Tech in Artificial Intelligence and Machine Learning",
        duration: "4 Years",
        fees: "₹3,40,000/yr",
        eligibility: "10+2 with PCM (50%) + MET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 120
      },
      {
        title: "B.Tech in Data Science",
        duration: "4 Years",
        fees: "₹3,40,000/yr",
        eligibility: "10+2 with PCM (50%) + MET / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 120
      },
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹1,35,000/yr",
        eligibility: "10+2 with Mathematics / CS / IT (50%)",
        type: "COMPUTER APPLICATIONS",
        intake: 180
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹1,55,000/yr",
        eligibility: "10+2 in any discipline (50%)",
        type: "MANAGEMENT",
        intake: 240
      },
      {
        title: "Master of Business Administration (MBA)",
        duration: "2 Years",
        fees: "₹2,60,000/yr",
        eligibility: "Graduation with minimum 50% marks + CAT/MAT/CMAT",
        type: "MANAGEMENT",
        intake: 180
      }
    ]
  },
  975: {
    name: "Malaviya National Institute of Technology Jaipur (MNIT Jaipur)",
    shortName: "MNIT Jaipur",
    location: "Malaviya Nagar, Jaipur",
    city: "Jaipur",
    district: "Jaipur",
    state: "Rajasthan",
    address: "Jawahar Lal Nehru Marg, Malaviya Nagar, Jaipur, Rajasthan - 302017",
    phone: "0141-2529087",
    website: "https://www.mnit.ac.in",
    type: "Public/Government",
    ownership: "Public/Government",
    established: 1963,
    affiliation: "Institute of National Importance (INI), Ministry of Education, Govt. of India",
    rating: 4.7,
    reviews: 126,
    ranking: 43,
    fees: "₹1,50,000/yr",
    exams: "JEE Main (JoSAA / CSAB) / GATE",
    about: "Malaviya National Institute of Technology Jaipur (MNIT Jaipur), established in 1963 as a Regional Engineering College and declared an Institute of National Importance by Act of Parliament, is one of India's premier public technological institutions. Spanning a lush 317-acre campus on JLN Marg in Jaipur, MNIT achieves exceptional research output, innovation patents, and world-class placements with packages up to ₹64 LPA.",
    image: "http://careerinitiative.in/assets/images/blog/MNIT jaipur.jpg",
    gallery: [
      "http://careerinitiative.in/assets/images/blog/MNIT jaipur.jpg"
    ],
    facilities: ["317-Acre Lush Green Campus", "Supercomputing Lab (PARAM)", "Central Digital Library", "Mega Hostels for Boys & Girls", "Athletic Grounds & Sports Complex", "Dispensary & Health Centre", "Cafeteria & Bank"],
    highestPackage: "₹64 LPA",
    averagePackage: "₹15.6 LPA",
    placements: "94%",
    courses: [
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹1,50,000/yr",
        eligibility: "10+2 with PCM (75%) + JEE Main rank via JoSAA",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 120
      },
      {
        title: "B.Tech in Electronics and Communication Engineering",
        duration: "4 Years",
        fees: "₹1,50,000/yr",
        eligibility: "10+2 with PCM (75%) + JEE Main rank via JoSAA",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 120
      },
      {
        title: "B.Tech in Electrical Engineering",
        duration: "4 Years",
        fees: "₹1,50,000/yr",
        eligibility: "10+2 with PCM (75%) + JEE Main rank via JoSAA",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 120
      },
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹1,50,000/yr",
        eligibility: "10+2 with PCM (75%) + JEE Main rank via JoSAA",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 120
      },
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹1,50,000/yr",
        eligibility: "10+2 with PCM (75%) + JEE Main rank via JoSAA",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 120
      },
      {
        title: "M.Tech in Computer Science and Engineering",
        duration: "2 Years",
        fees: "₹85,000/yr",
        eligibility: "B.Tech in relevant branch + valid GATE score via CCMT",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      }
    ]
  },
  976: {
    name: "Lucky Institute of Professional Studies (Jodhpur)",
    shortName: "LIPS Jodhpur",
    location: "Kamla Nehru Nagar, Jodhpur",
    city: "Jodhpur",
    district: "Jodhpur",
    state: "Rajasthan",
    address: "Sector-A, ESI Hospital Road, Extension 1, Kamla Nehru Nagar, Jodhpur, Rajasthan - 342008",
    phone: "0291-2750240",
    website: "https://luckyinstitute.org",
    type: "Private",
    ownership: "Private",
    established: 2001,
    affiliation: "Jai Narain Vyas University (JNVU), Jodhpur & AICTE Approved",
    rating: 4.4,
    reviews: 1576,
    ranking: 33,
    fees: "₹35,000/yr",
    exams: "JNVU Merit / 10+2",
    about: "Lucky Institute of Professional Studies (LIPS Jodhpur), established in 2001 under the Lucky Shikshan Sansthan, is a prominent private higher education institute in Kamla Nehru Nagar, Jodhpur. Affiliated to JNVU Jodhpur and approved by AICTE, LIPS offers structured undergraduate and postgraduate degree courses in Computer Applications (BCA, MCA), Management (BBA, MBA), Commerce, and Education with dedicated placement cells.",
    image: "https://media.getmyuni.com/azure/college-images-test/lucky-institute-of-professional-studies-lips-jodhpur/168cf5129fb3451d9add5d6fb8e2e421.png",
    gallery: [
      "https://media.getmyuni.com/azure/college-images-test/lucky-institute-of-professional-studies-lips-jodhpur/168cf5129fb3451d9add5d6fb8e2e421.png"
    ],
    facilities: ["Computer Center", "Digital Library", "Seminar Hall", "Sports Grounds", "Canteen", "Bus Fleet"],
    highestPackage: "₹6 LPA",
    averagePackage: "₹3 LPA",
    placements: "82%",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹35,000/yr",
        eligibility: "10+2 with Mathematics / CS (45%)",
        type: "COMPUTER APPLICATIONS",
        intake: 120
      },
      {
        title: "Bachelor of Business Administration (BBA)",
        duration: "3 Years",
        fees: "₹35,000/yr",
        eligibility: "10+2 in any stream (45%)",
        type: "MANAGEMENT",
        intake: 60
      },
      {
        title: "Master of Computer Applications (MCA)",
        duration: "2 Years",
        fees: "₹45,000/yr",
        eligibility: "BCA / Graduation with Mathematics (50%)",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Master of Business Administration (MBA)",
        duration: "2 Years",
        fees: "₹50,000/yr",
        eligibility: "Bachelor's Degree in any discipline (50%)",
        type: "MANAGEMENT",
        intake: 60
      }
    ]
  },
  977: {
    name: "Star Infotech College (Deoli, Tonk)",
    shortName: "Star Infotech College",
    location: "Deoli, Tonk",
    city: "Deoli",
    district: "Tonk",
    state: "Rajasthan",
    address: "Ramthala Choraha, Near Overbridge, Deoli, Tonk, Rajasthan - 304804",
    phone: "01434-232111",
    website: "https://starinfotechcollege.com",
    type: "Private",
    ownership: "Private",
    established: 2008,
    affiliation: "Maharshi Dayanand Saraswati University (MDSU), Ajmer",
    rating: 4.3,
    reviews: 626,
    ranking: 80,
    fees: "₹26,000/yr",
    exams: "MDSU Merit / 10+2",
    about: "Star Infotech College, established in 2008 at Ramthala Choraha in Deoli (Tonk district), is a recognized degree college affiliated to Maharshi Dayanand Saraswati University (MDSU), Ajmer. The institution provides skill-oriented higher education in Computer Applications (BCA), Sciences (B.Sc), Commerce (B.Com), and Arts (B.A) with modern computer lab facilities and career mentoring.",
    image: "https://media.collegedekho.com/media/img/institute/crawled_images/tar_Infotech_CollegeAj.jpg?width=1080",
    gallery: [
      "https://media.collegedekho.com/media/img/institute/crawled_images/tar_Infotech_CollegeAj.jpg?width=1080"
    ],
    facilities: ["Computer Center", "Science Labs", "Central Library", "Sports Field", "Canteen", "Student Support"],
    highestPackage: "₹5 LPA",
    averagePackage: "₹2.6 LPA",
    placements: "78%",
    courses: [
      {
        title: "Bachelor of Computer Applications (BCA)",
        duration: "3 Years",
        fees: "₹26,000/yr",
        eligibility: "10+2 with Mathematics / CS (45%)",
        type: "COMPUTER APPLICATIONS",
        intake: 60
      },
      {
        title: "Bachelor of Science (B.Sc Maths / Bio)",
        duration: "3 Years",
        fees: "₹22,000/yr",
        eligibility: "10+2 with Science stream (48%)",
        type: "SCIENCES",
        intake: 60
      },
      {
        title: "Bachelor of Commerce (B.Com)",
        duration: "3 Years",
        fees: "₹18,000/yr",
        eligibility: "10+2 in Commerce or any stream (45%)",
        type: "COMMERCE",
        intake: 60
      },
      {
        title: "Bachelor of Arts (B.A)",
        duration: "3 Years",
        fees: "₹15,000/yr",
        eligibility: "10+2 in any stream (45%)",
        type: "ARTS",
        intake: 120
      }
    ]
  },
  978: {
    name: "Nathdwara Institute of Engineering & Technology (NIET Nathdwara)",
    shortName: "NIET Nathdwara",
    location: "Upali Oden, Nathdwara",
    city: "Nathdwara",
    district: "Rajsamand",
    state: "Rajasthan",
    address: "Upali Oden, Nathdwara, Rajsamand, Rajasthan - 313301",
    phone: "02953-231122",
    website: "https://niet.edu.in",
    type: "Private",
    ownership: "Private",
    established: 2010,
    affiliation: "Rajasthan Technical University (RTU), Kota & AICTE Approved",
    rating: 4.3,
    reviews: 61,
    ranking: 80,
    fees: "₹75,000/yr",
    exams: "REAP Rajasthan / JEE Main",
    about: "Nathdwara Institute of Engineering & Technology (NIET), established in 2010 by the Nathdwara Technical Society, is an AICTE-approved engineering college situated in the scenic town of Nathdwara, Rajsamand district. Affiliated to RTU Kota, NIET delivers undergraduate engineering programs across core branches with well-equipped technical workshops, electronics labs, and hostel accommodation.",
    image: "https://d13loartjoc1yn.cloudfront.net/upload/institute/images/large/131007124317_Nathdwara_Institute_of_Engineering__Techonology.webp",
    gallery: [
      "https://d13loartjoc1yn.cloudfront.net/upload/institute/images/large/131007124317_Nathdwara_Institute_of_Engineering__Techonology.webp"
    ],
    facilities: ["Computer Center", "Civil Survey Labs", "Mechanical Workshops", "Library", "Hostel", "Sports Grounds"],
    highestPackage: "₹6 LPA",
    averagePackage: "₹3 LPA",
    placements: "79%",
    courses: [
      {
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹75,000/yr",
        eligibility: "10+2 with PCM (45%) via REAP / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹75,000/yr",
        eligibility: "10+2 with PCM (45%) via REAP / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹75,000/yr",
        eligibility: "10+2 with PCM (45%) via REAP / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      },
      {
        title: "B.Tech in Electrical Engineering",
        duration: "4 Years",
        fees: "₹75,000/yr",
        eligibility: "10+2 with PCM (45%) via REAP / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ]
  },
  979: {
    name: "Sardar Patel University of Police, Security and Criminal Justice (SPUP Jodhpur)",
    shortName: "SPUP Jodhpur",
    location: "Lordi Pandit Ji, Jodhpur",
    city: "Jodhpur",
    district: "Jodhpur",
    state: "Rajasthan",
    address: "Opp. Vigyan Nagar Scheme, Near Lordi Pandit Ji Village, Jodhpur, Rajasthan - 342037",
    phone: "0291-2740500",
    website: "https://policeuniversity.ac.in",
    type: "Public/Government",
    ownership: "Public/Government",
    established: 2012,
    affiliation: "State Police University, Govt. of Rajasthan & UGC Recognized under 2(f) and 12(B)",
    rating: 4.6,
    reviews: 222,
    ranking: 7,
    fees: "₹45,000/yr",
    exams: "SPUP Entrance Exam / CUET / Merit",
    about: "Sardar Patel University of Police, Security and Criminal Justice (SPUP Jodhpur), established in 2012 by the Government of Rajasthan through State Act No. 34, is India's pioneer state university focused exclusively on public safety, policing, cybersecurity, and criminal justice. Situated on a sprawling residential campus in Jodhpur, SPUP offers specialized B.Tech, M.Tech, and M.A programs in Cyber Security, Criminology, and Homeland Security with premier forensic and security labs.",
    image: "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/1386/2019/7/9/Campus Over View of Sardar Patel University of Police Security and Criminal Justice Jodhpur_Campus-View.jpg",
    gallery: [
      "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/1386/2019/7/9/Campus Over View of Sardar Patel University of Police Security and Criminal Justice Jodhpur_Campus-View.jpg"
    ],
    facilities: ["Advanced Cyber Forensics Lab", "Digital Forensics & Malware Analysis Lab", "Central Police Library", "Hostels for Boys & Girls", "Parade Grounds & Physical Fitness Arena", "Cafeteria"],
    highestPackage: "₹14 LPA",
    averagePackage: "₹6.5 LPA",
    placements: "88%",
    courses: [
      {
        title: "B.Tech in Cyber Security",
        duration: "4 Years",
        fees: "₹45,000/yr",
        eligibility: "10+2 with PCM (50%) + SPUP Entrance / JEE Main",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "M.Tech in Cyber Security",
        duration: "2 Years",
        fees: "₹50,000/yr",
        eligibility: "B.Tech in CSE / IT / ECE with minimum 55% marks",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
      },
      {
        title: "M.Sc in Cyber Security",
        duration: "2 Years",
        fees: "₹40,000/yr",
        eligibility: "B.Sc in CS / IT / BCA with minimum 50% marks",
        type: "SCIENCES",
        intake: 30
      },
      {
        title: "M.A in Criminology and Police Administration",
        duration: "2 Years",
        fees: "₹30,000/yr",
        eligibility: "Graduation in any discipline with 50% marks",
        type: "HUMANITIES AND SOCIAL SCIENCES",
        intake: 30
      }
    ]
  }
};

// Apply updates to siteData.json
const collegeList = Array.isArray(siteData) ? siteData : siteData.colleges;
let updatedCount = 0;

for (let i = 0; i < collegeList.length; i++) {
  const c = collegeList[i];
  const cid = Number(c.id);
  if (batch131Updates[cid]) {
    const update = batch131Updates[cid];
    collegeList[i] = {
      ...c,
      name: update.name,
      shortName: update.shortName,
      location: update.location || c.location,
      city: update.city,
      district: update.district,
      state: update.state,
      address: update.address || c.address,
      phone: update.phone,
      website: update.website,
      type: update.type,
      ownership: update.ownership,
      established: update.established,
      affiliation: update.affiliation,
      rating: update.rating || c.rating,
      reviews: update.reviews || c.reviews,
      ranking: update.ranking || c.ranking,
      fees: update.fees,
      exams: update.exams,
      about: update.about,
      image: update.image,
      img: update.image,
      gallery: update.gallery || [update.image],
      facilities: update.facilities,
      highestPackage: update.highestPackage,
      averagePackage: update.averagePackage,
      placements: update.placements,
      courses: update.courses,
      verified: true,
      verificationDate: new Date().toISOString(),
      verifiedBatch: 131
    };
    updatedCount++;
    console.log(`Updated ID: ${cid} - ${update.name}`);
  }
}

console.log(`Applied updates to ${updatedCount} colleges in siteData.json`);
fs.writeFileSync(siteDataPath, JSON.stringify(siteData, null, 2), 'utf8');

// Update progress.json
const newIds = Object.keys(batch131Updates).map(Number);
const existingSet = new Set(progress.completed_ids.map(Number));
for (const id of newIds) {
  if (!existingSet.has(id)) {
    progress.completed_ids.push(id);
  }
}
progress.current_batch = 131;
progress.total_verified = progress.completed_ids.length;
progress.completed_count = progress.completed_ids.length;
progress.last_updated = new Date().toISOString();
fs.writeFileSync(progressPath, JSON.stringify(progress, null, 2), 'utf8');
console.log(`Progress updated: current_batch = 131, total_verified = ${progress.total_verified}`);

// Regenerate master list and markdown
console.log('Regenerating master verification files...');
execSync('node scripts/generate_verified_list.cjs', { stdio: 'inherit' });
execSync('node scripts/generate_verified_markdown.cjs', { stdio: 'inherit' });

// Create Batch 131 summary markdown in reports/verification/
const summaryContent = `# Verification Summary - Batch 131

**Batch Number**: 131
**Colleges Verified**: 10 (Total Cumulative: 1,310 / 12,660)
**Date**: ${new Date().toISOString()}

## Colleges in this Batch:
1. **Mewar University (Gangrar, Chittorgarh)** (ID: 970) - Private University (est. 2009, Gangrar) corrected from Public/Government to **Private**, portal \`https://www.mewaruniversity.org\`, STD 01471-220881. Fixed BCA to 3-year duration. Purged Loyola College Chennai and Christ University photo leaks.
2. **NIMS University, Jaipur** (ID: 971) - Major Private University & Medical Composite (est. 2008, Shobha Nagar) corrected from Public/Government to **Private**, portal \`https://nimsuniversity.org\`, STD 01426-515151. Fixed BCA to 3-year duration. Purged Christ University and Fergusson College photo leaks.
3. **Apex University, Jaipur** (ID: 972) - Private University (est. 2018, Mansarovar) corrected from Public/Government to **Private**, portal \`https://www.apexuniversity.co.in\`, STD 0141-6660999. Fixed BCA to 3-year duration. Purged COEP Pune, Fergusson College and Presidency Kolkata photo leaks.
4. **Banasthali Vidyapith (Niwai, Tonk)** (ID: 973) - Premier All-Women Deemed University (est. 1935, NAAC A++), portal \`https://www.banasthali.org\`, STD 01438-228384. Fixed BCA to 3-year duration. Purged Presidency Kolkata and NLSIU Bangalore photo leaks.
5. **Manipal University Jaipur (MUJ)** (ID: 974) - Flagship Private University (est. 2011, NAAC A+) corrected from Public/Government to **Private**, portal \`https://jaipur.manipal.edu\`, STD 0141-3999100. Fixed BCA to 3-year duration. Purged pes_bangalore, NLSIU and IIM Bangalore photo leaks.
6. **Malaviya National Institute of Technology Jaipur (MNIT Jaipur)** (ID: 975) - Institute of National Importance (est. 1963, 317-acre campus, JLN Marg), portal \`https://www.mnit.ac.in\`, STD 0141-2529087. Purged pes_bangalore, IIM Bangalore and St Stephens Delhi photo leaks.
7. **Lucky Institute of Professional Studies (Jodhpur)** (ID: 976) - Private College (est. 2001, Kamla Nehru Nagar), portal \`https://luckyinstitute.org\`, STD 0291-2750240. Fixed BCA to 3-year duration. Purged St Stephens and Hindu College Delhi photo leaks.
8. **Star Infotech College (Deoli, Tonk)** (ID: 977) - Private Degree College (est. 2008, Deoli), portal \`https://starinfotechcollege.com\`, STD 01434-232111. Fixed BCA to 3-year duration. Purged Hindu College Delhi and IIT Madras photo leaks.
9. **Nathdwara Institute of Engineering & Technology (NIET Nathdwara)** (ID: 978) - Private Engineering College (est. 2010, Nathdwara, Rajsamand), portal \`https://niet.edu.in\`, STD 02953-231122. Purged IIT Madras and IIT Delhi photo leaks.
10. **Sardar Patel University of Police, Security and Criminal Justice (SPUP Jodhpur)** (ID: 979) - Premier State Police University (est. 2012, Govt of Rajasthan) restored from Private to **Public/Government**, portal \`https://policeuniversity.ac.in\`, STD 0291-2740500. Purged IIT Delhi and BITS Goa photo leaks.
`;

fs.writeFileSync(summaryPath, summaryContent, 'utf8');
console.log('Batch 131 update completed successfully.');

