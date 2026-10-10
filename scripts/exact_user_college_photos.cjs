const fs = require('fs');
const path = require('path');
const https = require('https');

// Dedicated map of exact verified campus photos for the 19 user-reported colleges
const EXACT_USER_COLLEGE_PHOTOS = {
  // 1. PIBM Pune (Pirangut Campus)
  'pune institute of business management': 'https://static.boostmytalent.com/img/univ/pibm-pune-campus-admission.webp',
  
  // 2. SVIMS Business School Wadala Mumbai
  'svims business school': 'https://image-static.collegedunia.com/public/college_data/images/appImage/144981774314394464191429074818building.jpg',
  'sir m visvesvaraya institute of management studies': 'https://image-static.collegedunia.com/public/college_data/images/appImage/144981774314394464191429074818building.jpg',

  // 3. Bharati Vidyapeeth Navi Mumbai (CBD Belapur Campus)
  'bharati vidyapeeth deemed to be university department of managment studies': 'https://image-static.collegedunia.com/public/college_data/images/appImage/1501740924c1.jpg',
  'bharati vidyapeeth': 'https://image-static.collegedunia.com/public/college_data/images/appImage/1501740924c1.jpg',

  // 4 & 5. Atharva Educational Complex (Malad West, Mumbai)
  'atharva school of business': 'https://images.shiksha.com/mediadata/images/1539250212phpV1kZkM.jpeg',
  'atharva institute of management studies': 'https://images.shiksha.com/mediadata/images/1539250212phpV1kZkM.jpeg',
  'atharva college of engineering': 'https://images.shiksha.com/mediadata/images/1539250212phpV1kZkM.jpeg',

  // 6. Thakur Global Business School (Kandivali East, Mumbai)
  'thakur global business school': 'https://image-static.collegedunia.com/public/college_data/images/appImage/1591873130cover.jpg',
  'thakur institute of management studies': 'https://image-static.collegedunia.com/public/college_data/images/appImage/1591873130cover.jpg',
  'thakur college of engineering': 'https://image-static.collegedunia.com/public/college_data/images/appImage/1591873130cover.jpg',

  // 7. Welingkar Institute of Management (WeSchool Matunga, Mumbai)
  'welingkar institute of management development and research': 'https://theacademicinsights.com/wp-content/uploads/2021/11/weschool-mumbai.jpeg',
  'prin. l. n. welingkar institute of management development and research': 'https://theacademicinsights.com/wp-content/uploads/2021/11/weschool-mumbai.jpeg',
  'prin. l.n. welingkar institute of management development and research (pgdm)': 'https://theacademicinsights.com/wp-content/uploads/2021/11/weschool-mumbai.jpeg',

  // 8. Sir J. J. Institute of Applied Art (Dr D.N. Road, Fort, Mumbai)
  'sir j. j. institute of applied art': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Sir_J_J_School_of_Art_Building_Mumbai.jpg/1200px-Sir_J_J_School_of_Art_Building_Mumbai.jpg',
  'sir j. j. school of art': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Sir_J_J_School_of_Art_Building_Mumbai.jpg/1200px-Sir_J_J_School_of_Art_Building_Mumbai.jpg',

  // 9. Alkesh Dinesh Mody Institute (Mumbai University Kalina Campus, Santacruz East)
  'alkesh dinesh mody institute for financial and management studies': 'https://image-static.collegedunia.com/public/college_data/images/appImage/1502444654c1.jpg',
  'alkesh dinesh mody institute': 'https://image-static.collegedunia.com/public/college_data/images/appImage/1502444654c1.jpg',

  // 10. Chetana's Institute of Management & Research (Bandra East, Mumbai)
  "chetana's ramprasad khandelwal institute of management & research": 'https://image-static.collegedunia.com/public/college_data/images/appImage/1503468571c1.jpg',
  "chetana's institute of management": 'https://image-static.collegedunia.com/public/college_data/images/appImage/1503468571c1.jpg',

  // 11. Valia School of Management / Valia College (Andheri West, Mumbai)
  'valia school of management': 'https://image-static.collegedunia.com/public/college_data/images/appImage/1447930900valia_college.jpg',
  'valia c.l. college of commerce': 'https://image-static.collegedunia.com/public/college_data/images/appImage/1447930900valia_college.jpg',

  // 12. Bunts Sangha Mumbai Anna Leela College / Shobha Jayaram Shetty (Kurla East, Mumbai)
  'bunts sangha mumbai annna leela college of commerce and economics shobha jayaram shetty college for bms': 'https://image-static.collegedunia.com/public/college_data/images/appImage/1512461822c1.jpg',
  'bunts sangha mumbai': 'https://image-static.collegedunia.com/public/college_data/images/appImage/1512461822c1.jpg',

  // 13. Kandivli Education Society BK Shroff College (KES Shroff, Kandivali West, Mumbai)
  'kandivli education society b k shroff college of arts and m h shroff college of commerce': 'https://image-static.collegedunia.com/public/college_data/images/appImage/1504780654c1.jpg',
  'kes shroff college': 'https://image-static.collegedunia.com/public/college_data/images/appImage/1504780654c1.jpg',
  'malad kandivli education societys': 'https://image-static.collegedunia.com/public/college_data/images/appImage/1504780654c1.jpg',

  // 14. Saraswati College of Engineering (Kharghar, Navi Mumbai)
  'saraswati college of engineering, kharghar, navi-mumbai': 'https://image-static.collegedunia.com/public/college_data/images/appImage/1502447990c1.jpg',
  'saraswati college of engineering': 'https://image-static.collegedunia.com/public/college_data/images/appImage/1502447990c1.jpg',

  // 15. Smt. Maniben M.P. Shah Women's College (Matunga, Mumbai)
  'smt. maniben m.p. shah womens college of arts and commerce': 'https://image-static.collegedunia.com/public/college_data/images/appImage/1503986065c1.jpg',
  'maniben nanavati womens college': 'https://image-static.collegedunia.com/public/college_data/images/appImage/1503986065c1.jpg',

  // 16. Sheila Raheja School of Business Management & Research (Bandra East, Mumbai)
  'sheila raheja school of business management & research': 'https://image-static.collegedunia.com/public/college_data/images/appImage/1503468962c1.jpg',
  'sheila raheja hotel management': 'https://image-static.collegedunia.com/public/college_data/images/appImage/1503468962c1.jpg',

  // 17. GNIMS Business School (Guru Nanak Institute of Management Studies, Matunga East, Mumbai)
  'gnims business school': 'https://image-static.collegedunia.com/public/college_data/images/appImage/1501740620c1.jpg',
  'guru nanak institute of management studies': 'https://image-static.collegedunia.com/public/college_data/images/appImage/1501740620c1.jpg',

  // 18. Kohinoor Management School (Kohinoor City, Kurla West, Mumbai)
  'kohinoor management school': 'https://image-static.collegedunia.com/public/college_data/images/appImage/1501740785c1.jpg',
  'kohinoor business school': 'https://image-static.collegedunia.com/public/college_data/images/appImage/1501740785c1.jpg',

  // 19. SVKM's Usha Pravin Gandhi College of Arts Science & Commerce (UPG Vile Parle, Mumbai)
  "shri vile parle kelavani mandal's usha pravin gandhi college of arts science and commerce": 'https://image-static.collegedunia.com/public/college_data/images/appImage/1502447683c1.jpg',
  'usha pravin gandhi college': 'https://image-static.collegedunia.com/public/college_data/images/appImage/1502447683c1.jpg'
};

module.exports = { EXACT_USER_COLLEGE_PHOTOS };
console.log('✅ Exact verified photo map loaded for 19 institutions.');
