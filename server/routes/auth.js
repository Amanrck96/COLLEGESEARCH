import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || "supersecretcollegesearchkey";

// Signup
router.post('/signup', async (req, res) => {
  const { email, password, name, phone, city, state, courseInterest, examInterest } = req.body;
  if (!email || !password || !name) {
    return res.status(400).json({ error: "Missing required fields: email, password, name" });
  }

  try {
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        role: "STUDENT",
        phone: phone || "",
        city: city || "",
        state: state || "",
        courseInterest: courseInterest || "Engineering / Management",
        examInterest: examInterest || "JEE Main / CAT",
        leadStatus: "New Lead"
      }
    });

    await prisma.auditLog.create({
      data: { action: "Signup", userId: user.id, details: `New student account created: ${email}` }
    });

    const token = jwt.sign({ id: user.id, role: user.role, name: user.name }, JWT_SECRET, { expiresIn: '7d' });
    res.status(201).json({ 
      success: true, 
      token, 
      user: { 
        id: user.id, 
        name: user.name, 
        email: user.email, 
        role: user.role,
        phone: user.phone,
        city: user.city,
        state: user.state,
        courseInterest: user.courseInterest,
        examInterest: user.examInterest,
        leadStatus: user.leadStatus
      } 
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password, role } = req.body;
  if (!email || !password || !role) {
    return res.status(400).json({ error: "Missing required fields: email, password, role" });
  }

  try {
    const user = await prisma.user.findFirst({
      where: {
        email,
        role: role.toUpperCase()
      }
    });

    if (!user) {
      return res.status(401).json({ error: "Invalid email, role selection or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    await prisma.auditLog.create({
      data: { action: "Login", userId: user.id, details: `User logged in successfully: ${email} (${role})` }
    });

    const token = jwt.sign({ id: user.id, role: user.role, name: user.name }, JWT_SECRET, { expiresIn: '7d' });
    res.status(200).json({
      success: true,
      token,
      user: { 
        id: user.id, 
        name: user.name, 
        email: user.email, 
        role: user.role,
        phone: user.phone,
        city: user.city,
        state: user.state,
        courseInterest: user.courseInterest,
        examInterest: user.examInterest,
        leadStatus: user.leadStatus
      }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get profile from token
router.get('/profile', async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: "Authorization header token missing" });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
      select: { 
        id: true, 
        name: true, 
        email: true, 
        role: true,
        phone: true,
        city: true,
        state: true,
        courseInterest: true,
        examInterest: true,
        leadStatus: true,
        adminNotes: true,
        bookmarks: {
          include: {
            college: true
          }
        }
      }
    });

    if (!user) return res.status(404).json({ error: "User profile not found" });
    res.status(200).json({ success: true, user });
  } catch (err) {
    res.status(401).json({ error: "Invalid session token" });
  }
});

// PUT /api/auth/profile - Update student profile
router.put('/profile', async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: "Authorization header token missing" });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const { name, phone, city, state, courseInterest, examInterest } = req.body;
    
    const updated = await prisma.user.update({
      where: { id: decoded.id },
      data: {
        ...(name && { name }),
        ...(phone !== undefined && { phone }),
        ...(city !== undefined && { city }),
        ...(state !== undefined && { state }),
        ...(courseInterest !== undefined && { courseInterest }),
        ...(examInterest !== undefined && { examInterest })
      },
      select: {
        id: true, 
        name: true, 
        email: true, 
        role: true, 
        phone: true, 
        city: true, 
        state: true, 
        courseInterest: true, 
        examInterest: true, 
        leadStatus: true
      }
    });

    res.status(200).json({ success: true, user: updated, message: "Profile updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/auth/students - Admin CRM Student Listing
router.get('/students', async (req, res) => {
  try {
    const students = await prisma.user.findMany({
      where: { role: "STUDENT" },
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        city: true,
        state: true,
        courseInterest: true,
        examInterest: true,
        leadStatus: true,
        adminNotes: true,
        createdAt: true,
        bookmarks: {
          include: {
            college: {
              select: { id: true, name: true, location: true, state: true }
            }
          }
        },
        auditLogs: {
          orderBy: { timestamp: 'desc' },
          take: 10,
          select: { id: true, action: true, details: true, timestamp: true }
        }
      }
    });

    const formatted = students.map(s => ({
      id: s.id,
      name: s.name,
      email: s.email,
      mobile: s.phone || "+91 98765 00000",
      city: s.city || "Mumbai",
      state: s.state || "Maharashtra",
      courseInterest: s.courseInterest || "B.Tech Computer Science",
      examInterest: s.examInterest || "JEE Main",
      leadStatus: s.leadStatus || "New Lead",
      loginTime: s.createdAt.toISOString().replace('T', ' ').substring(0, 19),
      lastActiveTime: s.auditLogs[0] ? s.auditLogs[0].timestamp.toISOString().replace('T', ' ').substring(0, 19) : s.createdAt.toISOString().replace('T', ' ').substring(0, 19),
      searchHistory: s.auditLogs.filter(l => l.action.toLowerCase().includes('search')).map(l => l.details),
      viewedColleges: s.bookmarks.map(b => b.college.id),
      savedColleges: s.bookmarks.map(b => b.college.id),
      savedCollegesList: s.bookmarks.map(b => b.college),
      adminNotes: s.adminNotes || "",
      compareHistory: [],
      downloadHistory: []
    }));

    res.status(200).json(formatted);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/auth/students - Create a new student lead manually
router.post('/students', async (req, res) => {
  const { name, email, phone, city, state, courseInterest, examInterest, adminNotes, leadStatus } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  try {
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return res.status(400).json({ error: "Student with this email already exists" });
    }

    const defaultPassword = await bcrypt.hash("student123", 10);
    const newStudent = await prisma.user.create({
      data: {
        name,
        email,
        password: defaultPassword,
        role: "STUDENT",
        phone: phone || "",
        city: city || "",
        state: state || "",
        courseInterest: courseInterest || "",
        examInterest: examInterest || "",
        adminNotes: adminNotes || "",
        leadStatus: leadStatus || "New Lead"
      }
    });

    await prisma.auditLog.create({
      data: {
        action: "Admin Created Student",
        userId: newStudent.id,
        details: `Manual student lead added by Admin CRM: ${name} (${email})`
      }
    });

    res.status(201).json({ success: true, student: newStudent });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /api/auth/students/:id - Update Student Lead (Admin CRM)
router.put('/students/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, city, state, courseInterest, examInterest, adminNotes, leadStatus } = req.body;
  try {
    const updated = await prisma.user.update({
      where: { id: parseInt(id) },
      data: {
        ...(name && { name }),
        ...(email && { email }),
        ...(phone !== undefined && { phone }),
        ...(city !== undefined && { city }),
        ...(state !== undefined && { state }),
        ...(courseInterest !== undefined && { courseInterest }),
        ...(examInterest !== undefined && { examInterest }),
        ...(adminNotes !== undefined && { adminNotes }),
        ...(leadStatus !== undefined && { leadStatus })
      }
    });
    res.status(200).json({ success: true, student: updated });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT /api/auth/students/:id/notes - Save Admin Notes and Lead Status
router.put('/students/:id/notes', async (req, res) => {
  const { id } = req.params;
  const { adminNotes, leadStatus, phone, city, state, courseInterest } = req.body;

  try {
    const updated = await prisma.user.update({
      where: { id: parseInt(id) },
      data: {
        ...(adminNotes !== undefined && { adminNotes }),
        ...(leadStatus !== undefined && { leadStatus }),
        ...(phone !== undefined && { phone }),
        ...(city !== undefined && { city }),
        ...(state !== undefined && { state }),
        ...(courseInterest !== undefined && { courseInterest })
      }
    });

    await prisma.auditLog.create({
      data: {
        action: "Admin Notes Updated",
        userId: parseInt(id),
        details: `Admin CRM notes updated: ${leadStatus || 'Status Updated'}`
      }
    });

    res.status(200).json({ success: true, student: updated });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /api/auth/students/:id - Delete Student record
router.delete('/students/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.user.delete({
      where: { id: parseInt(id) }
    });
    res.status(200).json({ success: true, message: `Student ID ${id} deleted` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;

