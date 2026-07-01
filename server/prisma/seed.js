import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const prisma = new PrismaClient();

async function main() {
  console.log("Starting database seeding...");

  // 1. Clean existing tables
  await prisma.auditLog.deleteMany({});
  await prisma.bookmark.deleteMany({});
  await prisma.review.deleteMany({});
  await prisma.course.deleteMany({});
  await prisma.college.deleteMany({});
  await prisma.exam.deleteMany({});
  await prisma.user.deleteMany({});

  // 2. Hash default staff passwords
  const hashedPassword = await bcrypt.hash("admin", 10);

  // 3. Create default staff accounts
  console.log("Seeding staff users...");
  const superadmin = await prisma.user.create({
    data: { email: "admin@thecollegecompass.com", name: "Super Admin", role: "SUPERADMIN", password: hashedPassword }
  });
  const admin = await prisma.user.create({
    data: { email: "manager@thecollegecompass.com", name: "Admin Manager", role: "ADMIN", password: hashedPassword }
  });
  const operator = await prisma.user.create({
    data: { email: "operator@thecollegecompass.com", name: "Data Operator", role: "OPERATOR", password: hashedPassword }
  });
  const viewer = await prisma.user.create({
    data: { email: "viewer@thecollegecompass.com", name: "Report Observer", role: "VIEWER", password: hashedPassword }
  });

  // Create mock student login user
  const studentPassword = await bcrypt.hash("password123", 10);
  const studentUser = await prisma.user.create({
    data: { email: "aarav.sharma@gmail.com", name: "Aarav Sharma", role: "STUDENT", password: studentPassword }
  });

    {
      name: "Indian Institute of Technology Bombay",
      shortName: "IITB",
      location: "Mumbai",
      state: "Maharashtra",
      address: "IIT Bombay, Powai, Mumbai - 400076",
      phone: "+91-22-2576 9072",
      email: "info@iitb.ac.in",
      website: "https://www.iitb.ac.in",
      rating: 4.8,
      reviewsCount: 1250,
      type: "Government",
      about: "IIT Bombay is a premier engineering and technology institute in India, known for its academic excellence, research facilities, and outstanding placement record.",
      ranking: 1,
      facebook: "https://www.facebook.com/iitbombay",
      instagram: "https://www.instagram.com/iitbombay",
      linkedin: "https://www.linkedin.com/school/iit-bombay",
      mapUrl: "https://www.google.com/maps/place/IIT+Bombay",
      fees: "₹2.5 Lakhs/Year (approx)",
      exams: "JEE Advanced",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/IIT_Bombay_Logo.svg/1200px-IIT_Bombay_Logo.svg.png",
      img: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800",
      gallery: JSON.stringify([
        "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800"
      ]),
      affiliation: "Autonomous",
      highestPackage: "₹1.5 Crore",
      averagePackage: "₹18 LPA",
      placements: "95%",
      highlights: "Top engineering institute, excellent research facilities, strong alumni network",
      topRecruiters: "Google, Microsoft, Amazon, Goldman Sachs, McKinsey",
      brochureLink: "",
      admissionProcess: "JEE Advanced rank based admission",
      featured: true,
      published: true
    },
    {
      name: "Indian Institute of Technology Delhi",
      shortName: "IITD",
      location: "New Delhi",
      state: "Delhi",
      address: "IIT Delhi, Hauz Khas, New Delhi - 110016",
      phone: "+91-11-2659 7135",
      email: "info@iitd.ac.in",
      website: "https://www.iitd.ac.in",
      rating: 4.7,
      reviewsCount: 1180,
      type: "Government",
      about: "IIT Delhi is one of the most prestigious engineering institutes in India, offering undergraduate, postgraduate, and doctoral programs in various engineering disciplines.",
      ranking: 2,
      facebook: "https://www.facebook.com/IITDelhi",
      instagram: "https://www.instagram.com/iitdelhi",
      linkedin: "https://www.linkedin.com/school/iit-delhi",
      mapUrl: "https://www.google.com/maps/place/IIT+Delhi",
      fees: "₹2.5 Lakhs/Year (approx)",
      exams: "JEE Advanced",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/50/IIT_Delhi_Logo.svg/1200px-IIT_Delhi_Logo.svg.png",
      img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800",
      gallery: JSON.stringify([
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&q=80&w=800"
      ]),
      affiliation: "Autonomous",
      highestPackage: "₹1.2 Crore",
      averagePackage: "₹16 LPA",
      placements: "94%",
      highlights: "Excellent faculty, state-of-the-art infrastructure, strong industry connections",
      topRecruiters: "Microsoft, Google, Adobe, Flipkart, Bain",
      brochureLink: "",
      admissionProcess: "JEE Advanced rank based admission",
      featured: true,
      published: true
    },
    {
      name: "Indian Institute of Technology Madras",
      shortName: "IITM",
      location: "Chennai",
      state: "Tamil Nadu",
      address: "IIT Madras, Chennai - 600036",
      phone: "+91-44-2257 8000",
      email: "info@iitm.ac.in",
      website: "https://www.iitm.ac.in",
      rating: 4.7,
      reviewsCount: 1100,
      type: "Government",
      about: "IIT Madras is a premier technical institute in India, known for its academic excellence, research output, and beautiful campus.",
      ranking: 3,
      facebook: "https://www.facebook.com/iitmadras",
      instagram: "https://www.instagram.com/iitmadras",
      linkedin: "https://www.linkedin.com/school/iit-madras",
      mapUrl: "https://www.google.com/maps/place/IIT+Madras",
      fees: "₹2.5 Lakhs/Year (approx)",
      exams: "JEE Advanced",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/61/IIT_Madras_Logo.svg/1200px-IIT_Madras_Logo.svg.png",
      img: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&q=80&w=800",
      gallery: JSON.stringify([
        "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1590408546194-e3fb4b917531?auto=format&fit=crop&q=80&w=800"
      ]),
      affiliation: "Autonomous",
      highestPackage: "₹1.3 Crore",
      averagePackage: "₹17 LPA",
      placements: "93%",
      highlights: "Beautiful campus, strong research culture, excellent placements",
      topRecruiters: "Amazon, Intel, Qualcomm, Texas Instruments, Zoho",
      brochureLink: "",
      admissionProcess: "JEE Advanced rank based admission",
      featured: false,
      published: true
    },
    {
      name: "Indian Institute of Management Ahmedabad",
      shortName: "IIMA",
      location: "Ahmedabad",
      state: "Gujarat",
      address: "IIM Ahmedabad, Vastrapur, Ahmedabad - 380015",
      phone: "+91-79-6632 4567",
      email: "info@iima.ac.in",
      website: "https://www.iima.ac.in",
      rating: 4.9,
      reviewsCount: 980,
      type: "Government",
      about: "IIM Ahmedabad is India's premier business school, known for its case-based pedagogy, distinguished faculty, and exceptional placement record.",
      ranking: 1,
      facebook: "https://www.facebook.com/IIMAofficial",
      instagram: "https://www.instagram.com/iima_official",
      linkedin: "https://www.linkedin.com/school/iim-ahmedabad",
      mapUrl: "https://www.google.com/maps/place/IIM+Ahmedabad",
      fees: "₹23 Lakhs (2-year PGP)",
      exams: "CAT",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/IIM_Ahmedabad_Logo.svg/1200px-IIM_Ahmedabad_Logo.svg.png",
      img: "https://images.unsplash.com/photo-1590408546194-e3fb4b917531?auto=format&fit=crop&q=80&w=800",
      gallery: JSON.stringify([
        "https://images.unsplash.com/photo-1590408546194-e3fb4b917531?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800"
      ]),
      affiliation: "Autonomous",
      highestPackage: "₹75 LPA",
      averagePackage: "₹25 LPA",
      placements: "100%",
      highlights: "Top business school, case-based learning, strong alumni network",
      topRecruiters: "McKinsey, BCG, Bain, Goldman Sachs, HUL",
      brochureLink: "",
      admissionProcess: "CAT score + GD/PI",
      featured: true,
      published: true
    },
    {
      name: "Indian Institute of Management Bangalore",
      shortName: "IIMB",
      location: "Bangalore",
      state: "Karnataka",
      address: "IIM Bangalore, Bannerghatta Road, Bangalore - 560076",
      phone: "+91-80-2699 3999",
      email: "info@iimb.ac.in",
      website: "https://www.iimb.ac.in",
      rating: 4.8,
      reviewsCount: 920,
      type: "Government",
      about: "IIM Bangalore is one of India's leading business schools, known for its academic excellence, research output, and strong industry connections.",
      ranking: 2,
      facebook: "https://www.facebook.com/IIMBangalore",
      instagram: "https://www.instagram.com/iimb_official",
      linkedin: "https://www.linkedin.com/school/iim-bangalore",
      mapUrl: "https://www.google.com/maps/place/IIM+Bangalore",
      fees: "₹23 Lakhs (2-year PGP)",
      exams: "CAT",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/IIM_Bangalore_Logo.svg/1200px-IIM_Bangalore_Logo.svg.png",
      img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
      gallery: JSON.stringify([
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800"
      ]),
      affiliation: "Autonomous",
      highestPackage: "₹70 LPA",
      averagePackage: "₹24 LPA",
      placements: "100%",
      highlights: "Excellent faculty, beautiful campus, strong placements",
      topRecruiters: "McKinsey, BCG, Amazon, Microsoft, Flipkart",
      brochureLink: "",
      admissionProcess: "CAT score + GD/PI",
      featured: true,
      published: true
    }
  ];

  for (const college of sampleColleges) {
    const createdCollege = await prisma.college.create({
      data: college
    });

    // Add sample courses for each college
    const sampleCourses = college.name.includes("IIM") 
      ? [
          { title: "Post Graduate Programme in Management (PGP)", type: "Full Time", division: "Post Graduate", duration: "2 Years", fees: "₹23 Lakhs", intake: "400", eligibility: "Bachelor's degree with 50% + CAT score" },
          { title: "Executive Post Graduate Programme (EPGP)", type: "Full Time", division: "Post Graduate", duration: "1 Year", fees: "₹28 Lakhs", intake: "75", eligibility: "Bachelor's degree + 5+ years work experience" },
          { title: "Fellow Programme in Management (FPM)", type: "Full Time", division: "Doctoral", duration: "4-5 Years", fees: "Fully Funded", intake: "15", eligibility: "Master's degree + research aptitude" }
        ]
      : [
          { title: "B.Tech Computer Science and Engineering", type: "Full Time", division: "Under Graduate", duration: "4 Years", fees: "₹2.5 Lakhs/Year", intake: "100", eligibility: "JEE Advanced rank" },
          { title: "B.Tech Electrical Engineering", type: "Full Time", division: "Under Graduate", duration: "4 Years", fees: "₹2.5 Lakhs/Year", intake: "80", eligibility: "JEE Advanced rank" },
          { title: "B.Tech Mechanical Engineering", type: "Full Time", division: "Under Graduate", duration: "4 Years", fees: "₹2.5 Lakhs/Year", intake: "70", eligibility: "JEE Advanced rank" },
          { title: "M.Tech Computer Science", type: "Full Time", division: "Post Graduate", duration: "2 Years", fees: "₹50,000/Year", intake: "40", eligibility: "GATE score + B.Tech" }
        ];

    for (const course of sampleCourses) {
      await prisma.course.create({
        data: {
          collegeId: createdCollege.id,
          title: course.title,
          type: course.type,
          division: course.division,
          duration: course.duration,
          fees: course.fees,
          intake: course.intake,
          eligibility: course.eligibility
        }
      });
    }
  }

  console.log(`Seeded ${sampleColleges.length} real colleges with courses.`);

  // 5. Seed default activity logs
  console.log("Seeding security audit trails...");
  await prisma.auditLog.create({
    data: { action: "System Initialize", details: "Database schemas created. Staff accounts and sample colleges seeded." }
  });

  console.log("Database seeding finished successfully!");
  console.log("Login credentials:");
  console.log("Super Admin: admin@thecollegecompass.com / admin");
  console.log("Admin Manager: manager@thecollegecompass.com / admin");
  console.log("Data Operator: operator@thecollegecompass.com / admin");
  console.log("Viewer: viewer@thecollegecompass.com / admin");
}

main()
  .catch((e) => {
    console.error("Error during database seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
