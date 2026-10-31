const fs = require('fs');
const path = require('path');

const SITE_DATA_PATH = path.join(__dirname, '..', 'public', 'siteData.json');
const data = JSON.parse(fs.readFileSync(SITE_DATA_PATH, 'utf8'));
const colleges = Array.isArray(data.colleges) ? data.colleges : data;

const ids = [1246, 1253, 1259, 1272, 1276, 1277, 1286, 1287, 1292, 1294];
const map = new Map();
colleges.forEach(c => {
  if (ids.includes(c.id)) map.set(c.id, c);
});

const updates = [
  {
    id: 1246,
    name: 'LEAD College (Autonomous), Dhoni, Palakkad',
    type: 'Private (Autonomous Institute)',
    website: 'https://www.lead.ac.in',
    phone: '+91 9497713693 / 0491-3036600',
    email: 'info@lead.ac.in',
    img: '/images/campuses/campus_architecture_1.jpg',
    course: 'MBA (2 Years)'
  },
  {
    id: 1253,
    name: 'G. Karunakaran Memorial Co-operative College of Management and Technology (GKMCCMT), Karakulam',
    type: 'Private (Co-operative Sector Managed)',
    website: 'https://gkmccmt.in',
    phone: '+91 7559887399 / 0472-2887399',
    email: 'directorgkmccmt@gmail.com',
    img: '/images/campuses/campus_architecture_2.jpg',
    course: 'MBA (2 Years)'
  },
  {
    id: 1259,
    name: 'Rural Academy for Management Studies (RAMS by CRAFT), Kuzhuppilly, Kochi',
    type: 'Private',
    website: 'https://ramsbschool.org',
    phone: '+91 9061519222 / 0484-2417444',
    email: 'admin@ramsbschool.org',
    img: '/images/campuses/campus_architecture_9.jpg',
    course: 'MBA (2 Years)'
  },
  {
    id: 1272,
    name: 'Gurudev Institute of Management Studies (GIMS), Kadakkal, Kollam',
    type: 'Private',
    website: 'http://gimskerala.in',
    phone: '+91 70127 01752 / 0474-2424594',
    email: 'gimdskdl@gmail.com',
    img: '/images/campuses/campus_architecture_3.jpg',
    course: 'MBA (2 Years)'
  },
  {
    id: 1276,
    name: 'Marian Academy of Management Studies (MAMS), Kothamangalam',
    type: 'Private',
    website: 'https://www.mams.ac.in',
    phone: '0485-2816247 / +91 9446209878',
    email: 'info@mams.ac.in',
    img: '/images/campuses/campus_architecture_4.jpg',
    course: 'MBA (2 Years)'
  },
  {
    id: 1277,
    name: 'KMCT Institute of Emerging Technology and Management (KMCT IETM), Mukkam, Kozhikode',
    type: 'Private',
    website: 'https://www.kmctemergingtechnology.org',
    phone: '+91 89430 72000 / 0495-2294700',
    email: 'ceet@kmct.org',
    img: '/images/campuses/campus_architecture_6.jpg',
    course: 'MBA (2 Years)'
  },
  {
    id: 1286,
    name: 'Sirajul Huda Institute of Management Studies (SHIMS), Kuttiadi, Kozhikode',
    type: 'Private',
    website: 'https://shims.ac.in',
    phone: '+91 83300 22588 / +91 83048 84588',
    email: 'info@shims.ac.in',
    img: '/images/campuses/campus_architecture_5.jpg',
    course: 'MBA (2 Years)'
  },
  {
    id: 1287,
    name: 'Leaders College (Leaders Academy of Business), Kadalayi, Kannur',
    type: 'Private',
    website: 'https://leaderscollege.in',
    phone: '+91 90614 31111 / +91 98468 10934',
    email: 'info@leaderscollege.in',
    img: '/images/campuses/campus_architecture_7.jpg',
    course: 'PGDM / MBA (2 Years)'
  },
  {
    id: 1292,
    name: 'Mar Thoma College of Management and Technology (MCMAT), Perumbavoor',
    type: 'Private',
    website: 'https://www.mcmat.edu.in',
    phone: '+91 9388616626 / +91 9961775991',
    email: 'admin@mcmat.edu.in',
    img: '/images/campuses/campus_architecture_8.jpg',
    course: 'MBA (2 Years)'
  },
  {
    id: 1294,
    name: 'SNES Institute of Management Studies and Research (SNES IMSAR), Kunnamangalam, Calicut',
    type: 'Private',
    website: 'https://imsar.ac.in',
    phone: '+91 9496939922 / 0495-2802022',
    email: 'snesimsar@gmail.com',
    img: '/images/campuses/campus_architecture_1.jpg',
    course: 'MBA (2 Years)'
  }
];

console.log('=== BATCH 14 DIFF PREVIEW ===');
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

