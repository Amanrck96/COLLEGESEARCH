const fs = require('fs');
const path = require('path');

const SITE_DATA_PATH = path.join(__dirname, '..', 'public', 'siteData.json');
const data = JSON.parse(fs.readFileSync(SITE_DATA_PATH, 'utf8'));
const colleges = Array.isArray(data.colleges) ? data.colleges : data;

const ids = [1299, 1300, 1318, 1343, 1353, 1393, 1447, 1449, 1450, 1474];
const map = new Map();
colleges.forEach(c => {
  if (ids.includes(c.id)) map.set(c.id, c);
});

const updates = [
  {
    id: 1299,
    name: 'Monti International Institute of Management Studies (MIIMS), Puthanangadi',
    website: 'https://montiinstitute.ac.in',
    phone: '+91 8606258555 / +91 9061258555',
    email: 'montiinstitute@gmail.com',
    img: '/images/campuses/campus_architecture_1.jpg',
    course: 'MBA (2 Years)'
  },
  {
    id: 1300,
    name: 'Institute of Technology Mayyil (ITM), Kannur',
    website: 'https://itmmba.ac.in',
    phone: '0460-2276786 / +91 9447477387',
    email: 'mba@itmgroup.in',
    img: '/images/campuses/campus_architecture_2.jpg',
    course: 'MBA (2 Years)'
  },
  {
    id: 1318,
    name: 'A.S. Group of Institutions (ASGOI), Khanna',
    website: 'https://asinstitutes.com',
    phone: '+91-1628-237470 / +91-98550-45461',
    email: 'asgikhanna@gmail.com',
    img: '/images/campuses/campus_architecture_3.jpg',
    course: 'MBA (2 Years)'
  },
  {
    id: 1343,
    name: 'Golden College of Engineering & Technology (GCET), Gurdaspur',
    website: 'https://goldengroups.co.in',
    phone: '+91-7508709760 / 01874-504000',
    email: 'goldenedu@live.com',
    img: '/images/campuses/campus_architecture_4.jpg',
    course: 'MBA (2 Years)'
  },
  {
    id: 1353,
    name: 'Khalsa College of Engineering & Technology (KCET), Amritsar',
    website: 'https://khalsaengineering.co.in',
    phone: '+91-8198004400 / 0183-5030765',
    email: 'kcetamritsar@gmail.com',
    img: '/images/campuses/campus_architecture_5.jpg',
    course: 'MBA (2 Years)'
  },
  {
    id: 1393,
    name: 'Aryans Business School (ABS, Aryans Group of Colleges), Rajpura, Patiala',
    website: 'https://aryans.edu.in',
    phone: '+91-98762-99888 / +91-98765-99888',
    email: 'info@aryans.edu.in',
    img: '/images/campuses/campus_architecture_6.jpg',
    course: 'MBA (2 Years)'
  },
  {
    id: 1447,
    name: 'International School of Business Administration (ISBA Group of Institutions), Indore',
    website: 'https://isba.edu.in',
    phone: '+91-9977802220 / 0731-2026000',
    email: 'info@isba.edu.in',
    img: '/images/campuses/campus_architecture_7.jpg',
    course: 'MBA (2 Years)'
  },
  {
    id: 1449,
    name: 'Indore Institute of Management and Research (IIMR), Rau, Indore',
    website: 'https://indoreinstitute.com/iimr',
    phone: '+91-8224073000 / 1800 103 3069',
    email: 'admissions@indoreinstitute.com',
    img: '/images/campuses/campus_architecture_8.jpg',
    course: 'MBA (2 Years)'
  },
  {
    id: 1450,
    name: 'Maharishi Centre for Educational Excellence (MCEE - Maharishi Institute of Management), Bhopal',
    website: 'https://mceebhopal.org',
    phone: '+91-8349053515 / 0755-4525149',
    email: 'mceebhopal@mssmail.org',
    img: '/images/campuses/campus_architecture_2.jpg',
    course: 'MBA (2 Years)'
  },
  {
    id: 1474,
    name: 'Jain College (Jain Group of Colleges), Lashkar, Gwalior',
    website: 'http://www.jaincollege.net',
    phone: '+91-8818888771 / +91-9425778444',
    email: 'infojaincollege@gmail.com',
    img: '/images/campuses/campus_architecture_3.jpg',
    course: 'MBA (2 Years)'
  }
];

console.log('=== BATCH 15 DIFF PREVIEW ===');
updates.forEach(u => {
  const cur = map.get(u.id);
  console.log(`\n----------------------------------------`);
  console.log(`College ID: ${u.id}`);
  console.log(`NAME:     "${cur.name}"\n       ➔ "${u.name}"`);
  console.log(`WEBSITE:  "${cur.website}"\n       ➔ "${u.website}"`);
  console.log(`PHONE:    "${cur.phone}" ➔ "${u.phone}"`);
  console.log(`EMAIL:    "${cur.email}" ➔ "${u.email}"`);
  console.log(`IMAGE:    "${cur.img || cur.image}"\n       ➔ "${u.img}"`);
  console.log(`COURSE:   "${(cur.courses || []).map(c => c.name).join(', ')}" ➔ "${u.course}"`);
});

