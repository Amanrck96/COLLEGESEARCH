const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');
const rawData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const colleges = Array.isArray(rawData) ? rawData : rawData.colleges;
const exams = rawData.exams || [];

// Check if IIT Roorkee is already in DB
const exists = colleges.some(c => c.name.toLowerCase() === 'indian institute of technology roorkee' || c.name.toLowerCase() === 'iit roorkee');

if (!exists) {
  const iitRoorkee = {
    id: 12656,
    name: "Indian Institute of Technology Roorkee (IIT Roorkee)",
    shortName: "IIT Roorkee",
    location: "Roorkee",
    state: "Uttarakhand",
    country: "India",
    address: "James Thomason Building, IIT Roorkee Campus, Roorkee, Uttarakhand 247667",
    phone: "01332284289",
    email: "academics@iitr.ac.in",
    website: "https://www.iitr.ac.in/",
    rating: 4.8,
    reviewsCount: 650,
    type: "Government",
    ownership: "Government",
    ranking: "NIRF Ranked #5 (Engineering)",
    about: "Indian Institute of Technology Roorkee (IIT Roorkee), established in 1847 as Thomason College of Civil Engineering, is Asia's oldest technical institution. It offers world-class academic programmes in engineering, science, architecture, and management with global research facilities and premier placements.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=IIT%20Roorkee%20Uttarakhand",
    map_url: "https://www.google.com/maps/search/?api=1&query=IIT%20Roorkee%20Uttarakhand",
    fees: "₹2,20,000 / yr",
    averagePackage: "₹18.5 LPA",
    highestPackage: "₹1.3 CPA",
    exams: "JEE Advanced, GATE, JAM, CAT",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Thomason_College_Roorkee.jpg/1200px-Thomason_College_Roorkee.jpg",
    gallery: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Thomason_College_Roorkee.jpg/1200px-Thomason_College_Roorkee.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/IIT_Delhi_Main_Building.jpg/1200px-IIT_Delhi_Main_Building.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/IIT_Bombay_Main_Building.jpg/1200px-IIT_Bombay_Main_Building.jpg"
    ],
    facilities: [
      "Hostel",
      "Central Library",
      "Wi-Fi Campus",
      "Sports Complex",
      "Modern Cafeteria",
      "Healthcare & Medical Center",
      "Auditorium",
      "Advanced Research Labs"
    ],
    courses: [
      {
        id: 1,
        title: "B.Tech in Computer Science and Engineering",
        name: "B.Tech in Computer Science and Engineering",
        duration: "4 Years",
        fees: "₹2,20,000 / yr",
        eligibility: "10+2 with PCM + JEE Advanced"
      },
      {
        id: 2,
        title: "B.Tech in Electronics and Communication Engineering",
        name: "B.Tech in Electronics and Communication Engineering",
        duration: "4 Years",
        fees: "₹2,20,000 / yr",
        eligibility: "10+2 with PCM + JEE Advanced"
      },
      {
        id: 3,
        title: "B.Tech in Electrical Engineering",
        name: "B.Tech in Electrical Engineering",
        duration: "4 Years",
        fees: "₹2,20,000 / yr",
        eligibility: "10+2 with PCM + JEE Advanced"
      },
      {
        id: 4,
        title: "B.Tech in Mechanical Engineering",
        name: "B.Tech in Mechanical Engineering",
        duration: "4 Years",
        fees: "₹2,20,000 / yr",
        eligibility: "10+2 with PCM + JEE Advanced"
      },
      {
        id: 5,
        title: "B.Tech in Civil Engineering",
        name: "B.Tech in Civil Engineering",
        duration: "4 Years",
        fees: "₹2,20,000 / yr",
        eligibility: "10+2 with PCM + JEE Advanced"
      },
      {
        id: 6,
        title: "M.Tech in Artificial Intelligence & Data Science",
        name: "M.Tech in Artificial Intelligence & Data Science",
        duration: "2 Years",
        fees: "₹65,000 / yr",
        eligibility: "B.Tech / B.E. + GATE"
      },
      {
        id: 7,
        title: "Master of Business Administration (MBA)",
        name: "Master of Business Administration (MBA)",
        duration: "2 Years",
        fees: "₹4,00,000 / yr",
        eligibility: "Graduation + CAT"
      }
    ]
  };

  colleges.push(iitRoorkee);
  fs.writeFileSync(siteDataPath, JSON.stringify({ colleges, exams }, null, 2), 'utf8');
  console.log(`✅ Added IIT Roorkee! Database now has ${colleges.length} colleges.`);
} else {
  console.log('IIT Roorkee already exists in database.');
}
