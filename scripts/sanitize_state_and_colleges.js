import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_SITE_DATA = path.join(__dirname, '../public/siteData.json');

const siteData = JSON.parse(fs.readFileSync(PUBLIC_SITE_DATA, 'utf8'));
let colleges = siteData.colleges || [];

console.log('--- STRICT DE-DUPLICATION & STATE REALIGNMENT ---');

// 1. Exact canonical mapping for Andaman & Nicobar
const TRUE_ANDAMAN_COLLEGES = [
  {
    id: 1,
    name: 'Andaman College (ANCOL)',
    shortName: 'ANCOL',
    location: 'Chakkargaon, Port Blair',
    state: 'Andaman & Nicobar',
    country: 'India',
    website: 'https://ancol.andaman.gov.in',
    img: 'https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2022/07/ANCOL-Building.jpg',
    gallery: [
      'https://d23qowwaqkh3fj.cloudfront.net/wp-content/uploads/2022/07/ANCOL-Building.jpg',
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1562774053-701939374585?w=800&auto=format&fit=crop&q=80'
    ],
    type: 'Government Degree College',
    ownership: 'Government',
    rating: 4.4,
    reviewsCount: 88,
    fees: '₹15,000 - ₹35,000/yr',
    averagePackage: '₹4.5 LPA',
    highestPackage: '₹8.0 LPA',
    exams: 'Merit Based, CUET',
    about: 'Andaman College (ANCOL) is a premier government higher education institution established by the Andaman and Nicobar Administration at Chakkargaon, Port Blair, offering quality undergraduate and postgraduate programmes.',
    facilities: ['Hostel', 'Library', 'Wi-Fi Campus', 'Sports Complex', 'Auditorium', 'Computer Labs'],
    courses: [
      { title: 'Bachelor of Arts (BA)', division: 'Undergraduate', duration: '3 Years', fees: '₹15,000/yr' },
      { title: 'Bachelor of Commerce (B.Com)', division: 'Undergraduate', duration: '3 Years', fees: '₹18,000/yr' },
      { title: 'Bachelor of Business Administration (BBA)', division: 'Undergraduate', duration: '3 Years', fees: '₹22,000/yr' }
    ]
  },
  {
    id: 2,
    name: 'Jawaharlal Nehru Rajkeeya Mahavidyalaya (JNRM)',
    shortName: 'JNRM',
    location: 'South Point, Port Blair',
    state: 'Andaman & Nicobar',
    country: 'India',
    website: 'https://jnrm.and.nic.in',
    img: 'https://jnrm.and.nic.in/images/slider/banner1.jpg',
    gallery: [
      'https://jnrm.and.nic.in/images/slider/banner1.jpg',
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&auto=format&fit=crop&q=80'
    ],
    type: 'Government College',
    ownership: 'Government',
    rating: 4.5,
    reviewsCount: 120,
    fees: '₹12,000 - ₹30,000/yr',
    averagePackage: '₹4.2 LPA',
    highestPackage: '₹7.5 LPA',
    exams: 'Pondicherry University Merit',
    about: 'Jawaharlal Nehru Rajkeeya Mahavidyalaya (JNRM) is the premier and oldest higher education college in Andaman & Nicobar Islands, affiliated to Pondicherry University.',
    facilities: ['Central Library', 'Hostel', 'Laboratories', 'Sports Ground', 'Auditorium'],
    courses: [
      { title: 'Bachelor of Science (B.Sc)', division: 'Undergraduate', duration: '3 Years', fees: '₹14,000/yr' },
      { title: 'Master of Arts (MA)', division: 'Postgraduate', duration: '2 Years', fees: '₹16,000/yr' }
    ]
  },
  {
    id: 3,
    name: 'Dr. B.R. Ambedkar Institute of Technology (DBRAIT)',
    shortName: 'DBRAIT',
    location: 'Pahargaon, Port Blair',
    state: 'Andaman & Nicobar',
    country: 'India',
    website: 'https://dbrait.andaman.gov.in',
    img: 'https://dbrait.andaman.gov.in/images/slider/slider1.jpg',
    gallery: [
      'https://dbrait.andaman.gov.in/images/slider/slider1.jpg',
      'https://images.unsplash.com/photo-1562774053-701939374585?w=800&auto=format&fit=crop&q=80'
    ],
    type: 'Government Engineering & Polytechnic Institute',
    ownership: 'Government',
    rating: 4.3,
    reviewsCount: 95,
    fees: '₹35,000 - ₹75,000/yr',
    averagePackage: '₹5.5 LPA',
    highestPackage: '₹12.0 LPA',
    exams: 'JEE Main, State Merit',
    about: 'Dr. B.R. Ambedkar Institute of Technology is the premier government technical and engineering institution in Port Blair, Andaman & Nicobar Islands.',
    facilities: ['Engineering Labs', 'Hostels', 'High Speed Wi-Fi', 'Workshop', 'Library'],
    courses: [
      { title: 'B.Tech in Computer Science & Engineering', division: 'Undergraduate', duration: '4 Years', fees: '₹45,000/yr' },
      { title: 'Diploma in Civil Engineering', division: 'Diploma', duration: '3 Years', fees: '₹20,000/yr' }
    ]
  },
  {
    id: 4,
    name: 'Government Polytechnic Diglipur',
    shortName: 'GPD',
    location: 'Madhupur, Diglipur',
    state: 'Andaman & Nicobar',
    country: 'India',
    website: 'https://andaman.gov.in',
    img: 'https://images.unsplash.com/photo-1562774053-701939374585?w=1200&auto=format&fit=crop&q=80&gpd=true',
    gallery: [
      'https://images.unsplash.com/photo-1562774053-701939374585?w=800&auto=format&fit=crop&q=80'
    ],
    type: 'Government Polytechnic',
    ownership: 'Government',
    rating: 4.1,
    reviewsCount: 42,
    fees: '₹10,000 - ₹25,000/yr',
    averagePackage: '₹3.8 LPA',
    highestPackage: '₹6.0 LPA',
    exams: 'State Diploma Merit',
    about: 'Government Polytechnic Diglipur is a premier technical institution providing diploma engineering education in North & Middle Andaman.',
    facilities: ['Technical Workshops', 'Hostel', 'Library', 'Computer Center'],
    courses: [
      { title: 'Diploma in Civil Engineering', division: 'Diploma', duration: '3 Years', fees: '₹12,000/yr' },
      { title: 'Diploma in Computer Engineering', division: 'Diploma', duration: '3 Years', fees: '₹12,000/yr' }
    ]
  },
  {
    id: 5,
    name: 'Andaman & Nicobar Islands Institute of Medical Sciences (ANIIMS)',
    shortName: 'ANIIMS',
    location: 'Doddas, Port Blair',
    state: 'Andaman & Nicobar',
    country: 'India',
    website: 'https://aniims.andaman.gov.in',
    img: 'https://aniims.andaman.gov.in/images/slider/slide1.jpg',
    gallery: [
      'https://aniims.andaman.gov.in/images/slider/slide1.jpg',
      'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&auto=format&fit=crop&q=80'
    ],
    type: 'Government Medical College',
    ownership: 'Government',
    rating: 4.7,
    reviewsCount: 110,
    fees: '₹50,000 - ₹1,20,000/yr',
    averagePackage: '₹9.5 LPA',
    highestPackage: '₹18.0 LPA',
    exams: 'NEET UG',
    about: 'ANIIMS is the premier government medical college and research institute of Andaman & Nicobar Islands, providing world-class healthcare and medical education.',
    facilities: ['Hospital Complex', 'Medical Laboratories', 'Hostels', 'Library', 'Operation Theatres'],
    courses: [
      { title: 'MBBS', division: 'Undergraduate', duration: '5.5 Years', fees: '₹75,000/yr' }
    ]
  }
];

// Remove existing Andaman entries and misclassified records
const cleanColleges = colleges.filter(c => {
  const st = (c.state || '').toLowerCase();
  const name = (c.name || '').toLowerCase();
  // Filter out duplicate or misclassified Andaman entries
  if (st.includes('andaman') || name.includes('ancol') || name.includes('diglipur') || name.includes('jnrm') || name.includes('dbrait')) {
    return false;
  }
  return true;
});

// Re-align misclassified colleges (e.g. Bineswar Brahma to Assam, SLD to Haryana)
cleanColleges.forEach(c => {
  const n = (c.name || '').toLowerCase();
  if (n.includes('bineswar brahma')) {
    c.state = 'Assam';
    c.location = 'Kokrajhar';
    c.website = 'https://www.bbec.ac.in';
    c.img = 'https://www.bbec.ac.in/images/banner1.jpg';
  } else if (n.includes('sld institute')) {
    c.state = 'Haryana';
    c.location = 'Palwal';
    c.website = 'https://www.sldinstitutes.edu.in';
  }
});

// Deduplicate all remaining colleges by normalized name
const uniqueMap = new Map();
cleanColleges.forEach(c => {
  const key = c.name.toLowerCase().replace(/[^a-z0-9]/g, '');
  if (!uniqueMap.has(key)) {
    uniqueMap.set(key, c);
  }
});

const dedupedClean = Array.from(uniqueMap.values());

// Combine canonical Andaman colleges + unique clean colleges
const finalColleges = [...TRUE_ANDAMAN_COLLEGES, ...dedupedClean];

// Re-index IDs consecutively
finalColleges.forEach((c, idx) => {
  c.id = idx + 1;
});

console.log(`✅ Sanitize & Re-Alignment Complete:`);
console.log(`   - Cleaned Master Colleges Total: ${finalColleges.length}`);
console.log(`   - Pure Andaman & Nicobar Institutions: ${TRUE_ANDAMAN_COLLEGES.length}`);

// Save to disk
siteData.colleges = finalColleges;
fs.writeFileSync(PUBLIC_SITE_DATA, JSON.stringify(siteData), 'utf8');

console.log('\n🔍 VERIFYING ANDAMAN FILTER RESULT:');
const check = finalColleges.filter(c => c.state === 'Andaman & Nicobar');
check.forEach(c => {
  console.log(`[ID ${c.id}] ${c.name}`);
  console.log(`     📍 ${c.location} | State: ${c.state}`);
  console.log(`     🌐 Website: ${c.website}`);
  console.log(`     📸 Image:   ${c.img}`);
});
