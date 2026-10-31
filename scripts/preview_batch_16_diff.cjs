const fs = require('fs');
const path = require('path');

const SITE_DATA_PATH = path.join(__dirname, '..', 'public', 'siteData.json');
const data = JSON.parse(fs.readFileSync(SITE_DATA_PATH, 'utf8'));
const colleges = Array.isArray(data.colleges) ? data.colleges : data;

const ids = [1476, 1479, 1483, 1484, 1485, 1486, 1487, 1490, 1492, 1494];
const map = new Map();
colleges.forEach(c => {
  if (ids.includes(c.id)) map.set(c.id, c);
});

const updates = [
  {
    id: 1476,
    name: 'Lakshmi Narain College of Technology (LNCT), Bhopal',
    type: 'Private',
    website: 'https://lnct.ac.in',
    phone: '+91-7440777111 / 0755-6185300',
    email: 'info@lnct.ac.in',
    img: '/images/campuses/campus_architecture_1.jpg',
    course: 'MBA (2 Years)'
  },
  {
    id: 1479,
    name: 'Anushashan Institute of Management (AIM), Katni',
    type: 'Private',
    website: 'http://www.anushashangroup.in',
    phone: '+91-9425154388 / 07622-262100',
    email: 'admissions@anushashan.edu.in',
    img: '/images/campuses/campus_architecture_2.jpg',
    course: 'MBA (2 Years)'
  },
  {
    id: 1483,
    name: 'Sant Hirdaram Institute of Management for Women (SHIM), Bhopal',
    type: 'Private',
    website: 'https://www.shim.co.in',
    phone: '+91 9424439012 / 0755-4245340',
    email: 'shimoffice@gmail.com',
    img: '/images/campuses/campus_architecture_3.jpg',
    course: 'MBA (Women) (2 Years)'
  },
  {
    id: 1484,
    name: 'Pentium Point College of Management (PPGI), Rewa',
    type: 'Private',
    website: 'https://ppgirewa.com',
    phone: '+91-9425178788 / 07662-438035',
    email: 'ppcmrewa@gmail.com',
    img: '/images/campuses/campus_architecture_4.jpg',
    course: 'MBA (2 Years)'
  },
  {
    id: 1485,
    name: 'Gomti Nandan Institute of Management and Research (GNiMR), Bina, Sagar',
    type: 'Private',
    website: 'https://gnimr.com',
    phone: '+91 91656 09333',
    email: 'info@gnimr.com',
    img: '/images/campuses/campus_architecture_5.jpg',
    course: 'MBA (2 Years)'
  },
  {
    id: 1486,
    name: 'Nachiketa College of Business Studies (NCBS), Jabalpur',
    type: 'Private',
    website: 'https://ncbsjbp.com',
    phone: '+91 94246 57895 / +91-761-2640222',
    email: 'info@ncbsjbp.com',
    img: '/images/campuses/campus_architecture_6.jpg',
    course: 'MBA (2 Years)'
  },
  {
    id: 1487,
    name: 'Atal Bihari Vajpayee Hindi Vishwavidyalaya (ABVHV), Bhopal',
    type: 'Public/Government (State University)',
    website: 'https://www.abvhv.edu.in',
    phone: '0755-2491051 / 0755-2491052',
    email: 'abvhvbpl@gmail.com',
    img: '/images/campuses/campus_architecture_7.jpg',
    course: 'MBA (2 Years)'
  },
  {
    id: 1490,
    name: 'Divine International Group of Institutions (DIGI), SADA, Gwalior',
    type: 'Private',
    website: 'https://divineinternational.org.in',
    phone: '+91-9303357400 / 0751-4700998',
    email: 'divineigi@gmail.com',
    img: '/images/campuses/campus_architecture_8.jpg',
    course: 'MBA (2 Years)'
  },
  {
    id: 1492,
    name: 'Corporate Institute of Management (CIM, Corporate Group of Institutions), Bhopal',
    type: 'Private',
    website: 'https://www.corporatebpl.com',
    phone: '+91-7773001561 / +91-7771009746',
    email: 'corporate@corporatebpl.com',
    img: '/images/campuses/campus_architecture_9.jpg',
    course: 'MBA (2 Years)'
  },
  {
    id: 1494,
    name: 'M.P. Institute of Fashion and Design, Bhesonda, Bhopal',
    type: 'Private',
    website: 'https://bubhopal.ac.in',
    phone: '+91-7565288499',
    email: 'mpinstitutefashionanddesign@gmail.com',
    img: '/images/campuses/campus_architecture_1.jpg',
    course: 'MBA (2 Years)'
  }
];

console.log('=== BATCH 16 DIFF PREVIEW ===');
updates.forEach(u => {
  const cur = map.get(u.id);
  console.log(`\n----------------------------------------`);
  console.log(`College ID: ${u.id}`);
  console.log(`NAME:     "${cur.name}"\n       ➔ "${u.name}"`);
  console.log(`TYPE:     "${cur.type}" ➔ "${u.type}"`);
  console.log(`WEBSITE:  "${cur.website}"\n       ➔ "${u.website}"`);
  console.log(`PHONE:    "${cur.phone}" ➔ "${u.phone}"`);
  console.log(`EMAIL:    "${cur.email}" ➔ "${u.email}"`);
  console.log(`IMAGE:    "${cur.img || cur.image}"\n       ➔ "${u.img}"`);
  console.log(`COURSE:   "${(cur.courses || []).map(c => c.name).join(', ')}" ➔ "${u.course}"`);
});

