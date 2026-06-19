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

  // 4. Load siteData.json and seed colleges/exams
  const dataPath = path.resolve(__dirname, '../../public/siteData.json');
  console.log(`Reading siteData.json from: ${dataPath}`);
  const siteData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

  // Seed Exams
  console.log("Seeding entrance exams...");
  if (siteData.exams && siteData.exams.length > 0) {
    for (const ex of siteData.exams) {
      await prisma.exam.upsert({
        where: { name: ex.name },
        update: {},
        create: {
          name: ex.name,
          date: ex.date || "May 15, 2026",
          level: ex.level || "National",
          tag: ex.tag || "Engineering"
        }
      });
    }
  }

  // Seed Colleges & Nested Courses
  console.log("Seeding colleges and course structures...");
  if (siteData.colleges && siteData.colleges.length > 0) {
    for (const c of siteData.colleges) {
      const createdCollege = await prisma.college.create({
        data: {
          name: c.name,
          shortName: c.shortName || c.name.substring(0, 5).toUpperCase(),
          location: c.location || "India",
          state: c.state || "Unknown",
          address: c.address || c.location || "Unknown",
          phone: c.phone || "0123-456789",
          email: c.email || null,
          website: c.website || "http://www.college.edu",
          rating: parseFloat(c.rating || "4.5"),
          reviewsCount: parseInt(c.reviews || "25"),
          type: c.type || "Private",
          about: c.about || `Welcome to ${c.name}, a premier institute.`,
          ranking: parseInt(c.ranking || "100"),
          facebook: c.facebook || "#",
          instagram: c.instagram || "#",
          linkedin: c.linkedin || "#",
          mapUrl: c.map_url || c.mapUrl || "",
          fees: c.fees || "Contact for details",
          exams: c.exams || "Direct Admission",
          img: c.img || "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=400",
          gallery: JSON.stringify(c.gallery || []),
          affiliation: c.affiliation || "",
          highestPackage: c.highestPackage || "Contact for details",
          averagePackage: c.averagePackage || "Contact for details",
          placements: c.placements || "N/A",
          highlights: c.highlights || "",
          topRecruiters: c.topRecruiters || "",
          brochureLink: c.brochureLink || "",
          admissionProcess: c.admissionProcess || ""
        }
      });

      // Seed Courses for this college
      if (c.courses && c.courses.length > 0) {
        for (const co of c.courses) {
          await prisma.course.create({
            data: {
              collegeId: createdCollege.id,
              title: co.title,
              type: co.type || "Full Time",
              division: co.division || "Degree",
              duration: co.duration || "4 Years",
              fees: co.fees || "Contact for details",
              intake: co.intake || "N/A",
              eligibility: co.eligibility || "As per norms"
            }
          });
        }
      }
    }
  }

  // 5. Seed default reviews
  console.log("Seeding sample college reviews...");
  const firstCollege = await prisma.college.findFirst();
  if (firstCollege) {
    await prisma.review.create({
      data: {
        collegeId: firstCollege.id,
        authorName: "Rohan Sen",
        rating: 4.8,
        content: "Outstanding campus layout, world-class labs, and supportive faculty mentors.",
        verified: true,
        status: "APPROVED"
      }
    });
  }

  // Seed default activity logs
  console.log("Seeding security audit trails...");
  await prisma.auditLog.create({
    data: { action: "System Initialize", details: "Database schemas created. Seeder executed successfully." }
  });

  console.log("Database seeding finished successfully!");
}

main()
  .catch((e) => {
    console.error("Error during database seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
