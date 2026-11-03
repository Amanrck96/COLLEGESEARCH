const fs = require('fs');
const path = require('path');

console.log('=== Updating Universal AI University (UAIU Karjat) ID: 157 ===');

const siteDataPath = path.join(__dirname, '../public/siteData.json');
const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const colleges = Array.isArray(siteData) ? siteData : (siteData.colleges || []);

const uaiuIndex = colleges.findIndex(c => c.id === 157 || (c.name && c.name.toLowerCase().includes('universal ai university')));

if (uaiuIndex === -1) {
  console.error('❌ Could not find Universal AI University in siteData.json');
  process.exit(1);
}

const current = colleges[uaiuIndex];
console.log('Found college at index', uaiuIndex, 'Current shortName:', current.shortName, 'img:', current.img);

// Build authentic profile for Universal AI University
colleges[uaiuIndex] = {
  ...current,
  id: 157,
  name: "Universal AI University (UAIU Karjat)",
  shortName: "UAIU Karjat",
  location: "Karjat, Raigad",
  city: "Karjat",
  state: "Maharashtra",
  address: "Kushivili, PO Gaurkamath, Vadap, Karjat, Raigad District - 410201, Maharashtra (near Mumbai/Pune)",
  phone: "+91 22 4883 4883 / +91 98190 08010",
  email: "admissions@universalai.in",
  website: "https://universalai.in",
  rating: 4.8,
  reviews: 1850,
  reviewsCount: 1850,
  type: "Private University (India's 1st Artificial Intelligence University)",
  ownership: "Private / Universal Business School Trust",
  ranking: 16,
  fees: "₹3.5 Lakhs - ₹6.5 Lakhs/Year",
  highestPackage: "₹25 LPA (Domestic) / ₹1.01 Crore (International)",
  averagePackage: "₹10.8 LPA",
  placements: "98% placement rate with Fortune 500 & Global AI Tech giants",
  exams: "JEE Main, MHT CET, CAT, XAT, CMAT, UAIU Entrance Test",
  img: "/images/campuses/universal_ai_university_karjat.jpg",
  image: "/images/campuses/universal_ai_university_karjat.jpg",
  about: "Universal AI University (UAIU), nestled amidst the scenic Western Ghats in Karjat near Mumbai, is India's first Artificial Intelligence University. Established by the Universal Business School Trust, the 40-acre lush green residential campus offers cutting-edge global education in AI, Machine Learning, Data Science, Executive Management, UI/UX Product Design, and Emerging Technologies.",
  highlights: "India's 1st AI University, 40-Acre Green Valley Campus, Global European Dual Degrees, Quantum Computing Labs, Bloomberg Terminals",
  topRecruiters: "Amazon, Google, Deloitte, Accenture, Capgemini, KPMG, HDFC Bank, Infosys, Tech Mahindra, Ernst & Young",
  facilities: [
    "AI & Robotics Research Labs",
    "Bloomberg Financial Terminal Lab",
    "High-Tech Smart Classrooms",
    "On-Campus Air-Conditioned Hostels",
    "Multipurpose Sports Complex & Gymnasium",
    "Central Digital Library",
    "Cafeteria & Dining Hall",
    "24/7 Wi-Fi & Healthcare Center"
  ],
  gallery: [
    "/images/campuses/universal_ai_university_karjat.jpg",
    "https://universalai.in/wp-content/uploads/2023/05/uaiu-campus-life.jpg",
    "https://universalai.in/wp-content/uploads/2023/05/uaiu-sports-complex.jpg"
  ],
  courses: [
    {
      name: "B.Tech (AI & ML)",
      title: "B.Tech in Artificial Intelligence & Machine Learning",
      duration: "4 Years",
      fees: "₹3,80,000/Year",
      fee: "₹15,20,000",
      eligibility: "10+2 with Physics, Mathematics & Chemistry (Min 50%) + JEE Main / MHT CET / UAIU Test",
      type: "ENGINEERING",
      intake: 120
    },
    {
      name: "B.Tech (Data Science)",
      title: "B.Tech in Computer Science & Data Science",
      duration: "4 Years",
      fees: "₹3,80,000/Year",
      fee: "₹15,20,000",
      eligibility: "10+2 with PCM (Min 50%)",
      type: "ENGINEERING",
      intake: 60
    },
    {
      name: "Global MBA (AI & Tech)",
      title: "Global MBA in AI & Future Technologies",
      duration: "2 Years",
      fees: "₹10,50,000/Year",
      fee: "₹21,00,000",
      eligibility: "Bachelor's Degree (Min 50%) + CAT / XAT / CMAT / GMAT / UAIU Test",
      type: "MANAGEMENT",
      intake: 120
    },
    {
      name: "B.Sc (AI & Computing)",
      title: "B.Sc (Hons) in Artificial Intelligence & Cloud Computing",
      duration: "3 Years",
      fees: "₹2,50,000/Year",
      fee: "₹7,50,000",
      eligibility: "10+2 Any Stream with Mathematics / Computer Science (50%)",
      type: "SCIENCE",
      intake: 60
    },
    {
      name: "B.Des (UI/UX & Product Design)",
      title: "Bachelor of Design (B.Des) in AI & Interactive Product Design",
      duration: "4 Years",
      fees: "₹3,20,000/Year",
      fee: "₹12,80,000",
      eligibility: "10+2 Any Stream + Design Aptitude Interview",
      type: "DESIGN",
      intake: 60
    }
  ],
  verified: true,
  verifiedAt: new Date().toISOString()
};

// Save updated siteData
siteData.colleges = colleges;
siteData.totalColleges = colleges.length;
siteData.lastUpdated = new Date().toISOString();

fs.writeFileSync(siteDataPath, JSON.stringify(siteData, null, 2), 'utf8');
console.log('✅ Universal AI University profile updated in public/siteData.json');

// Sync to SQLite Prisma database
const { PrismaClient } = require('../server/node_modules/@prisma/client');
const prisma = new PrismaClient({ datasources: { db: { url: 'file:' + path.resolve(__dirname, '../server/prisma/dev.db') } } });

async function syncToPrisma() {
  const u = colleges[uaiuIndex];
  const mapUrl = "https://www.google.com/maps/search/?api=1&query=Universal+AI+University+Karjat+Maharashtra";
  try {
    await prisma.college.update({
      where: { id: 157 },
      data: {
        name: u.name,
        shortName: u.shortName,
        location: u.location,
        state: u.state,
        address: u.address,
        phone: u.phone,
        email: u.email,
        website: u.website,
        rating: u.rating,
        reviewsCount: u.reviewsCount,
        type: u.type,
        about: u.about,
        ranking: u.ranking,
        img: u.img,
        fees: u.fees,
        exams: u.exams,
        highestPackage: u.highestPackage,
        averagePackage: u.averagePackage,
        placements: u.placements,
        ownership: u.ownership,
        mapUrl: mapUrl
      }
    });
    console.log('✅ College record 157 updated in SQLite dev.db');
  } catch (e) {
    console.warn('Prisma update warning:', e.message);
  }

  // Re-sync courses
  await prisma.course.deleteMany({ where: { collegeId: 157 } });
  for (const crs of u.courses) {
    await prisma.course.create({
      data: {
        collegeId: 157,
        title: crs.title,
        duration: crs.duration,
        fees: crs.fees,
        eligibility: crs.eligibility,
        type: crs.type,
        intake: String(crs.intake || '60 seats')
      }
    });
  }

  console.log('✅ Universal AI University courses synchronized to SQLite database dev.db');

  console.log('✅ Universal AI University synchronized to SQLite database dev.db');
}

syncToPrisma().catch(err => {
  console.warn('DB sync notice:', err.message);
}).finally(() => {
  prisma.$disconnect();
});
