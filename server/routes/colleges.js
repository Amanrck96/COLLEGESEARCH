import express from 'express';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || "supersecretcollegesearchkey";

// Role authorization middleware
const authorize = (requiredRole) => {
  return async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: "Access denied. Token missing." });
    }
    const token = authHeader.split(' ')[1];
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      
      const roleHierarchy = {
        'student': 1,
        'viewer': 2,
        'operator': 3,
        'admin': 4,
        'superadmin': 5
      };

      const userRole = decoded.role.toLowerCase();
      if (roleHierarchy[userRole] < roleHierarchy[requiredRole.toLowerCase()]) {
        return res.status(403).json({ error: "Access forbidden. Insufficient permissions." });
      }
      req.userId = decoded.id;
      req.userRole = decoded.role;
      next();
    } catch (err) {
      return res.status(401).json({ error: "Invalid credentials token." });
    }
  };
};

// GET colleges with advanced query filters
router.get('/', async (req, res) => {
  const { q, state, city, type, course, maxFees, rating, placement, exam } = req.query;

  try {
    const filters = {};

    // 1. Text Search matching name, code, state, or location
    if (q) {
      filters.OR = [
        { name: { contains: q } },
        { shortName: { contains: q } },
        { location: { contains: q } },
        { state: { contains: q } }
      ];
    }

    // 2. Specific dropdown filters
    if (state) filters.state = state;
    if (city) filters.location = city;
    if (type) filters.type = type;
    if (rating) filters.rating = { gte: parseFloat(rating) };
    if (exam) filters.exams = { contains: exam };

    // 3. Placement packages threshold
    if (placement) {
      // E.g. placement = "10LPA"
      const numericVal = parseInt(placement.replace(/\D/g, ''));
      if (numericVal) {
        filters.averagePackage = { contains: String(numericVal) };
      }
    }

    // 4. Nested courses filter
    if (course || maxFees) {
      filters.courses = {
        some: {}
      };
      if (course) {
        filters.courses.some.title = { contains: course };
      }
    }

    const collegesList = await prisma.college.findMany({
      where: filters,
      include: {
        courses: true
      }
    });

    res.status(200).json(collegesList);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET Single College Details
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const college = await prisma.college.findUnique({
      where: { id: parseInt(id) },
      include: {
        courses: true,
        reviews: {
          where: { status: "APPROVED" }
        }
      }
    });

    if (!college) {
      return res.status(404).json({ error: "College not found" });
    }

    res.status(200).json(college);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST Create College Entry
router.post('/', authorize('operator'), async (req, res) => {
  const c = req.body;
  if (!c.name || !c.location || !c.state) {
    return res.status(400).json({ error: "Missing required fields: name, location, state" });
  }

  try {
    const newCollege = await prisma.college.create({
      data: {
        name: c.name,
        shortName: c.shortName || c.name.substring(0, 5).toUpperCase(),
        location: c.location,
        state: c.state,
        address: c.address || c.location,
        phone: c.phone || "0123-456789",
        email: c.email || null,
        website: c.website || "http://www.college.edu",
        rating: parseFloat(c.rating || "4.5"),
        type: c.type || "Private",
        about: c.about || `Welcome to ${c.name}, a premier institute.`,
        ranking: parseInt(c.ranking || "100"),
        facebook: c.facebook || "#",
        instagram: c.instagram || "#",
        linkedin: c.linkedin || "#",
        mapUrl: c.mapUrl || "",
        fees: c.fees || "Contact for details",
        exams: c.exams || "Direct Admission",
        img: c.img || "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=400",
        affiliation: c.affiliation || "",
        highestPackage: c.highestPackage || "Contact for details",
        averagePackage: c.averagePackage || "Contact for details",
        placements: c.placements || "N/A",
        highlights: c.highlights || "",
        topRecruiters: c.topRecruiters || "",
        brochureLink: c.brochureLink || ""
      }
    });

    await prisma.auditLog.create({
      data: { action: "Create College", userId: req.userId, details: `Created college entry manually: ${newCollege.name} (ID: ${newCollege.id})` }
    });

    res.status(201).json(newCollege);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT Update College
router.put('/:id', authorize('operator'), async (req, res) => {
  const { id } = req.params;
  const c = req.body;

  try {
    const updated = await prisma.college.update({
      where: { id: parseInt(id) },
      data: {
        name: c.name,
        shortName: c.shortName,
        location: c.location,
        state: c.state,
        address: c.address,
        phone: c.phone,
        email: c.email,
        website: c.website,
        rating: parseFloat(c.rating || "4.5"),
        type: c.type,
        about: c.about,
        ranking: parseInt(c.ranking || "100"),
        mapUrl: c.mapUrl,
        fees: c.fees,
        exams: c.exams,
        highestPackage: c.highestPackage,
        averagePackage: c.averagePackage,
        placements: c.placements,
        img: c.img,
        highlights: c.highlights,
        topRecruiters: c.topRecruiters,
        brochureLink: c.brochureLink,
        admissionProcess: c.admissionProcess
      }
    });

    await prisma.auditLog.create({
      data: { action: "Update College", userId: req.userId, details: `Updated college entry: ${updated.name} (ID: ${updated.id})` }
    });

    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE College Entry
router.delete('/:id', authorize('admin'), async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await prisma.college.delete({
      where: { id: parseInt(id) }
    });

    await prisma.auditLog.create({
      data: { action: "Delete College", userId: req.userId, details: `Deleted college entry: ${deleted.name} (ID: ${id})` }
    });

    res.status(200).json({ success: true, message: `College ID ${id} deleted.` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST Add course to college
router.post('/:id/courses', authorize('operator'), async (req, res) => {
  const { id } = req.params;
  const co = req.body;

  try {
    const course = await prisma.course.create({
      data: {
        collegeId: parseInt(id),
        title: co.title,
        type: co.type || "Full Time",
        division: co.division || "Degree",
        duration: co.duration || "4 Years",
        fees: co.fees || "Contact for details",
        eligibility: co.eligibility || "As per norms"
      }
    });

    res.status(201).json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET aggregated unique courses list
router.get('/data/courses', async (req, res) => {
  try {
    const courses = await prisma.course.findMany({
      select: { title: true }
    });
    const titles = [...new Set(courses.map(c => c.title))];
    res.status(200).json(titles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
