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

// Batch 168 updates
const batch168Updates = {
  1371: {
    name: "Lala Lajpat Rai Memorial Polytechnic College, Ajitwal, Moga",
    shortName: "LLRM Polytechnic Moga",
    location: "Moga",
    state: "Punjab",
    address: "V.P.O. Ajitwal, G.T. Road, District Moga, Punjab - 142053",
    phone: "01636-282001",
    website: "https://llrmgoi.com",
    rating: 4.2,
    reviews: 107,
    reviewsCount: 107,
    type: "Private",
    ownership: "Private",
    about: "Lala Lajpat Rai Memorial Polytechnic College, located on G.T. Road at Ajitwal in Moga district, was established under the Lala Lajpat Rai Memorial Group of Colleges in memory of the great freedom fighter 'Punjab Kesari' Lala Lajpat Rai. Approved by AICTE and affiliated with the Punjab State Board of Technical Education and Industrial Training (PSBTE & IT), the college offers 3-year diploma courses in mechanical, civil, electrical, and computer engineering with modern laboratory workshops and transport connectivity.",
    ranking: 37,
    fees: "₹85,000",
    exams: "PSBTE Counseling / 10th Merit Based",
    img: "https://universitykart.com/Content/upload/admin/0k2igdg2.hrh.jpg",
    image: "https://universitykart.com/Content/upload/admin/0k2igdg2.hrh.jpg",
    gallery: [
      "https://universitykart.com/Content/upload/admin/0k2igdg2.hrh.jpg",
      "/images/campuses/campus_architecture_1.jpg",
      "/images/campuses/campus_architecture_2.jpg"
    ],
    affiliation: "Punjab State Board of Technical Education & Industrial Training (PSBTE & IT) / AICTE",
    courses: [
      {
        title: "Diploma in Mechanical Engineering",
        duration: "3 Years",
        fees: "₹85,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 120
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
  1372: {
    name: "New Punjab Polytechnic College, Talwandi Sabo, Bathinda",
    shortName: "NPPC Bathinda",
    location: "Bathinda",
    state: "Punjab",
    address: "Talwandi Sabo - Sardulgarh Road, Nangla, District Bathinda, Punjab - 151302",
    phone: "01655-256100",
    website: "https://newpunjabpolytechnic.com",
    rating: 4.1,
    reviews: 100,
    reviewsCount: 100,
    type: "Private",
    ownership: "Private",
    about: "New Punjab Polytechnic College, situated at Nangla on the Talwandi Sabo - Sardulgarh Road in Bathinda district, is a premier technical diploma institution established under the Malwa Educational Society. Approved by AICTE and affiliated with PSBTE & IT Chandigarh, the polytechnic offers technical diploma courses in Computer Science, Mechanical, Civil, and Electrical Engineering, catering to the educational upliftment of rural Malwa.",
    ranking: 44,
    fees: "₹85,000",
    exams: "PSBTE Counseling / 10th Merit Based",
    img: "/images/campuses/campus_architecture_3.jpg",
    image: "/images/campuses/campus_architecture_3.jpg",
    gallery: [
      "/images/campuses/campus_architecture_3.jpg",
      "/images/campuses/campus_architecture_4.jpg",
      "/images/campuses/campus_architecture_5.jpg"
    ],
    affiliation: "Punjab State Board of Technical Education & Industrial Training (PSBTE & IT) / AICTE",
    courses: [
      {
        title: "Diploma in Computer Science & Engineering",
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
    highestPackage: "₹4.8 LPA",
    averagePackage: "₹2.6 LPA",
    placements: "74%"
  },
  1373: {
    name: "Saint Kabir Polytechnic College, Fazilka",
    shortName: "SKPC Fazilka",
    location: "Fazilka",
    state: "Punjab",
    address: "Ferozepur Road, Near Toll Plaza, Fazilka, Punjab - 152123",
    phone: "01638-261200",
    website: "https://saintkabirpolytechnic.com",
    rating: 4.2,
    reviews: 138,
    reviewsCount: 138,
    type: "Private",
    ownership: "Private",
    about: "Saint Kabir Polytechnic College, located on Ferozepur Road near Fazilka, was established in 2008 by the Saint Kabir Educational Trust. Approved by AICTE and affiliated with the Punjab State Board of Technical Education and Industrial Training (PSBTE & IT), the college offers 3-year diploma programs in Electronics & Communication, Mechanical, Civil, Electrical, and Computer Engineering, providing essential technical skill sets in Punjab's border region.",
    ranking: 39,
    fees: "₹85,000",
    exams: "PSBTE Counseling / 10th Merit Based",
    img: "https://www.yuvamind.com/colleges/images/college/saint-kabir-polytechnic-college-fazilka-campus.png",
    image: "https://www.yuvamind.com/colleges/images/college/saint-kabir-polytechnic-college-fazilka-campus.png",
    gallery: [
      "https://www.yuvamind.com/colleges/images/college/saint-kabir-polytechnic-college-fazilka-campus.png",
      "/images/campuses/campus_architecture_6.jpg",
      "/images/campuses/campus_architecture_7.jpg"
    ],
    affiliation: "Punjab State Board of Technical Education & Industrial Training (PSBTE & IT) / AICTE",
    courses: [
      {
        title: "Diploma in Electronics & Communication Engineering",
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
  1374: {
    name: "Satguru Ram Singh Government Polytechnic College, Ludhiana",
    shortName: "SRS GPC Ludhiana",
    location: "Ludhiana",
    state: "Punjab",
    address: "Maharishi Valmiki Nagar, Haibowal Khurd, Ludhiana, Punjab - 141001",
    phone: "0161-2302061",
    website: "https://lpcldh.com",
    rating: 4.4,
    reviews: 549,
    reviewsCount: 549,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Satguru Ram Singh Government Polytechnic College, Ludhiana, established in 1961 by the Government of Punjab and named in honor of the revered freedom leader Satguru Ram Singh Ji, is one of Punjab's premier government technical institutes. Governed by the Department of Technical Education & Industrial Training, Punjab, and affiliated with PSBTE & IT and approved by AICTE, SRS GPC delivers affordable 3-year diploma education in Computer Science, Mechanical, Civil, Electrical, and Electronics Engineering across a 15-acre urban campus.",
    ranking: 6,
    fees: "₹66,000",
    exams: "PSBTE Centralized Counseling / 10th Merit Based",
    img: "https://lpcldh.com/wp-content/uploads/2020/09/04-images-LPC-below-banner-1-1024x680.jpg",
    image: "https://lpcldh.com/wp-content/uploads/2020/09/04-images-LPC-below-banner-1-1024x680.jpg",
    gallery: [
      "https://lpcldh.com/wp-content/uploads/2020/09/04-images-LPC-below-banner-1-1024x680.jpg",
      "/images/campuses/campus_architecture_8.jpg",
      "/images/campuses/campus_architecture_1.jpg"
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
    highestPackage: "₹6.5 LPA",
    averagePackage: "₹3.5 LPA",
    placements: "88%"
  },
  1375: {
    name: "Government Polytechnic College, Ferozepur",
    shortName: "GPC Ferozepur",
    location: "Ferozepur",
    state: "Punjab",
    address: "Dulchike Road, Jhoke Road, Ferozepur City, Punjab - 152002",
    phone: "01632-242045",
    website: "https://gpcferozepur.org.in",
    rating: 4.3,
    reviews: 52,
    reviewsCount: 52,
    type: "Public/Government",
    ownership: "Public/Government",
    about: "Government Polytechnic College, Ferozepur, established in 1968 by the Government of Punjab on Dulchike Road, is a cornerstone institution for technical education in southwestern Punjab. Administered by the Department of Technical Education & Industrial Training, Punjab, and affiliated with PSBTE & IT Chandigarh and approved by AICTE, GPC Ferozepur delivers subsidized 3-year diploma education in Mechanical, Civil, Electrical, and Computer Engineering with well-maintained workshop facilities.",
    ranking: 14,
    fees: "₹66,000",
    exams: "PSBTE Centralized Counseling / 10th Merit Based",
    img: "https://images.shiksha.com/mediadata/images/1435728545phpSnE7cq.jpeg",
    image: "https://images.shiksha.com/mediadata/images/1435728545phpSnE7cq.jpeg",
    gallery: [
      "https://images.shiksha.com/mediadata/images/1435728545phpSnE7cq.jpeg",
      "/images/campuses/campus_architecture_2.jpg",
      "/images/campuses/campus_architecture_3.jpg"
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
        title: "Diploma in Computer Science & Engineering",
        duration: "3 Years",
        fees: "₹66,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ],
    highestPackage: "₹5.8 LPA",
    averagePackage: "₹3.2 LPA",
    placements: "82%"
  },
  1376: {
    name: "Doaba Institute of Engineering & Technology (DIET), Kharar, Mohali",
    shortName: "DIET Mohali",
    location: "Mohali",
    state: "Punjab",
    address: "Village Ghataur, PO Allapur, Tehsil Kharar, District SAS Nagar (Mohali), Punjab - 140103",
    phone: "0160-5002400",
    website: "https://www.dgc.edu.in",
    rating: 4.2,
    reviews: 225,
    reviewsCount: 225,
    type: "Private",
    ownership: "Private",
    about: "Doaba Institute of Engineering & Technology (DIET), located at Ghataur near Kharar in SAS Nagar (Mohali), was established in 2005 under the Doaba Group of Colleges (DGC). Affiliated with I.K. Gujral Punjab Technical University (IKGPTU) and approved by AICTE, DIET delivers undergraduate engineering degrees in Electronics & Communication, Computer Science, Mechanical, and Civil Engineering with modern labs, computing facilities, and placement support.",
    ranking: 27,
    fees: "₹3.2 Lakhs",
    exams: "JEE Main / PTU Centralized Counseling",
    img: "https://www.collegebatch.com/static/clg-gallery/doaba-institute-of-engineering-technology-mohali-285349.webp",
    image: "https://www.collegebatch.com/static/clg-gallery/doaba-institute-of-engineering-technology-mohali-285349.webp",
    gallery: [
      "https://www.collegebatch.com/static/clg-gallery/doaba-institute-of-engineering-technology-mohali-285349.webp",
      "/images/campuses/campus_architecture_4.jpg",
      "/images/campuses/campus_architecture_5.jpg"
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
        title: "B.Tech in Electronics & Communication Engineering",
        duration: "4 Years",
        fees: "₹3.0 Lakhs",
        eligibility: "10+2 with Physics, Mathematics & Chemistry",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
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
        title: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹3.0 Lakhs",
        eligibility: "10+2 with Physics, Mathematics & Chemistry",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 60
      }
    ],
    highestPackage: "₹9.0 LPA",
    averagePackage: "₹3.8 LPA",
    placements: "80%"
  },
  1377: {
    name: "S.S.D. Women's Institute of Technology (SSDWIT), Bathinda",
    shortName: "SSDWIT Bathinda",
    location: "Bathinda",
    state: "Punjab",
    address: "Amrik Singh Road, Bathinda, Punjab - 151001",
    phone: "0164-2212345",
    website: "https://ssdwit.ac.in",
    rating: 4.3,
    reviews: 64,
    reviewsCount: 64,
    type: "Private",
    ownership: "Private",
    about: "S.S.D. Women's Institute of Technology (SSDWIT), Bathinda, established in 1998 by the historic Shri Sanatan Dharam (S.S.D.) Sabha (founded in 1913), is a premier all-women technical institute in southern Punjab. Affiliated with Punjabi University, Patiala, and approved by AICTE, SSDWIT provides women-centered education in Master of Computer Applications (MCA), Bachelor of Computer Applications (BCA), and M.Sc IT, fostering technical leadership and employability.",
    ranking: 20,
    fees: "₹1.6 Lakhs",
    exams: "Direct Merit / Punjabi University Counseling",
    img: "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/16597/2018/12/14/College Building View of SSD Girls College Bathinda_Campus-View.jpg",
    image: "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/16597/2018/12/14/College Building View of SSD Girls College Bathinda_Campus-View.jpg",
    gallery: [
      "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/16597/2018/12/14/College Building View of SSD Girls College Bathinda_Campus-View.jpg",
      "/images/campuses/campus_architecture_6.jpg",
      "/images/campuses/campus_architecture_7.jpg"
    ],
    affiliation: "Punjabi University, Patiala / AICTE",
    courses: [
      {
        title: "Master of Computer Applications (MCA)",
        duration: "2 Years",
        fees: "₹1.6 Lakhs",
        eligibility: "BCA / B.Sc Computer Science or Graduation with Mathematics",
        type: "COMPUTER APPLICATIONS",
        intake: 49
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
        title: "M.Sc in Information Technology",
        duration: "2 Years",
        fees: "₹1.4 Lakhs",
        eligibility: "Graduation with Computer Science/IT or equivalent",
        type: "COMPUTER APPLICATIONS",
        intake: 30
      }
    ],
    highestPackage: "₹7.5 LPA",
    averagePackage: "₹3.6 LPA",
    placements: "82%"
  },
  1378: {
    name: "Ludhiana Group of Colleges - Polytechnic, Chowkimann, Ludhiana",
    shortName: "LGC Polytechnic",
    location: "Ludhiana",
    state: "Punjab",
    address: "Chowkimann, Ferozepur Road, Jagraon, District Ludhiana, Punjab - 142023",
    phone: "01624-255200",
    website: "http://lgc.edu.in",
    rating: 4.2,
    reviews: 165,
    reviewsCount: 165,
    type: "Private",
    ownership: "Private",
    about: "Ludhiana Group of Colleges - Polytechnic, situated at Chowkimann near Jagraon on Ferozepur Road in Ludhiana district, was founded under the Ludhiana Group of Colleges (LGC). Approved by AICTE and affiliated with the Punjab State Board of Technical Education and Industrial Training (PSBTE & IT), the polytechnic offers 3-year diploma courses in Civil, Mechanical, Electrical, and Computer Engineering with dedicated workshops and transport facilities across Ludhiana district.",
    ranking: 33,
    fees: "₹85,000",
    exams: "PSBTE Counseling / 10th Merit Based",
    img: "http://lgc.edu.in/gallery/campus/c6.jpg",
    image: "http://lgc.edu.in/gallery/campus/c6.jpg",
    gallery: [
      "http://lgc.edu.in/gallery/campus/c6.jpg",
      "/images/campuses/campus_architecture_8.jpg",
      "/images/campuses/campus_architecture_1.jpg"
    ],
    affiliation: "Punjab State Board of Technical Education & Industrial Training (PSBTE & IT) / AICTE",
    courses: [
      {
        title: "Diploma in Civil Engineering",
        duration: "3 Years",
        fees: "₹85,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
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
    highestPackage: "₹5.2 LPA",
    averagePackage: "₹2.8 LPA",
    placements: "77%"
  },
  1379: {
    name: "Maharaja Aggarsain Institute of Technology, Abohar",
    shortName: "MAIT Abohar",
    location: "Fazilka",
    state: "Punjab",
    address: "VPO Alamgarh, Hanumangarh Road, Abohar, District Fazilka, Punjab - 152116",
    phone: "01634-224400",
    website: "https://maitabohar.com",
    rating: 4.1,
    reviews: 456,
    reviewsCount: 456,
    type: "Private",
    ownership: "Private",
    about: "Maharaja Aggarsain Institute of Technology (MAIT), located at Alamgarh on Hanumangarh Road in Abohar (Fazilka district), was established under the Maharaja Aggarsain Educational Society. Approved by AICTE and affiliated with PSBTE & IT Chandigarh, the polytechnic offers technical diploma education in Electrical, Mechanical, Civil, and Computer Engineering, serving students from Punjab, Rajasthan, and Haryana borders.",
    ranking: 40,
    fees: "₹85,000",
    exams: "PSBTE Counseling / 10th Merit Based",
    img: "https://img.studyclap.com/img/institute/college/773x343/25179/mait-abohar-firozpur-4c485de4bf.jpg",
    image: "https://img.studyclap.com/img/institute/college/773x343/25179/mait-abohar-firozpur-4c485de4bf.jpg",
    gallery: [
      "https://img.studyclap.com/img/institute/college/773x343/25179/mait-abohar-firozpur-4c485de4bf.jpg",
      "/images/campuses/campus_architecture_2.jpg",
      "/images/campuses/campus_architecture_3.jpg"
    ],
    affiliation: "Punjab State Board of Technical Education & Industrial Training (PSBTE & IT) / AICTE",
    courses: [
      {
        title: "Diploma in Electrical Engineering",
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
    placements: "75%"
  },
  1380: {
    name: "Vidya Rattan Polytechnic, Khokhar, Lehragaga, Sangrur",
    shortName: "VRP Lehragaga",
    location: "Sangrur",
    state: "Punjab",
    address: "Lehra-Sunam Road, Village Khokhar, Lehragaga, District Sangrur, Punjab - 148031",
    phone: "01676-271500",
    website: "https://www.vidyarattan.com",
    rating: 4.1,
    reviews: 240,
    reviewsCount: 240,
    type: "Private",
    ownership: "Private",
    about: "Vidya Rattan Polytechnic, situated at Village Khokhar on the Lehra-Sunam Road in Lehragaga (Sangrur district), was founded by the Vidya Rattan Educational Society. Approved by AICTE and affiliated with the Punjab State Board of Technical Education and Industrial Training (PSBTE & IT), the college offers 3-year diploma programs in Computer Science, Mechanical, Civil, and Electrical Engineering, equipped with modern workshop machinery and computer laboratories.",
    ranking: 35,
    fees: "₹85,000",
    exams: "PSBTE Counseling / 10th Merit Based",
    img: "https://www.vidyarattan.com/img/welcome.jpg",
    image: "https://www.vidyarattan.com/img/welcome.jpg",
    gallery: [
      "https://www.vidyarattan.com/img/welcome.jpg",
      "/images/campuses/campus_architecture_4.jpg",
      "/images/campuses/campus_architecture_5.jpg"
    ],
    affiliation: "Punjab State Board of Technical Education & Industrial Training (PSBTE & IT) / AICTE",
    courses: [
      {
        title: "Diploma in Computer Science & Engineering",
        duration: "3 Years",
        fees: "₹85,000",
        eligibility: "10th standard with Science & Mathematics",
        type: "ENGINEERING AND TECHNOLOGY",
        intake: 30
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
    averagePackage: "₹2.6 LPA",
    placements: "74%"
  }
};

let appliedCount = 0;
for (const col of colleges) {
  if (batch168Updates[col.id]) {
    Object.assign(col, batch168Updates[col.id]);
    appliedCount++;
  }
}

console.log(`Updated ${appliedCount} colleges in siteData.`);
fs.writeFileSync(siteDataPath, JSON.stringify(siteData, null, 2), 'utf8');

// Update progress.json
const now = new Date().toISOString();
progress.verifiedColleges = 1680;
progress.lastUpdated = now;
progress.batchesCompleted = 168;
progress.currentBatch = 169;
if (!progress.batchHistory) progress.batchHistory = [];
progress.batchHistory.push({
  batch: 168,
  verifiedCount: 10,
  totalVerified: 1680,
  timestamp: now,
  collegeIds: Object.keys(batch168Updates).map(Number)
});
fs.writeFileSync(progressPath, JSON.stringify(progress, null, 2), 'utf8');

// Update all_verified_colleges.json
const newlyVerifiedList = Object.entries(batch168Updates).map(([idStr, val]) => ({
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
const batchMdHeader = `\n### Batch 168 (Colleges 1,671–1,680) — Punjab Government & Private Technical Institutions\n| ID | College Name | Location | State | Type | Website |\n|---|---|---|---|---|---|\n`;
let batchMdRows = '';
for (const item of newlyVerifiedList) {
  batchMdRows += `| ${item.id} | ${item.name} | ${item.location} | ${item.state} | ${item.type} | [${item.website}](${item.website}) |\n`;
}
mdContent += batchMdHeader + batchMdRows;
fs.writeFileSync(allVerifiedMdPath, mdContent, 'utf8');

console.log(`Batch 168 applied successfully! Total verified: ${progress.verifiedColleges}`);
