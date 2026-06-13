import express from 'express';
import { PrismaClient } from '@prisma/client';
import { authorize } from '../middleware/authorize.js'; // Fix #13: Shared middleware

const router = express.Router();
const prisma = new PrismaClient();

// GET Dashboard aggregate stats
router.get('/dashboard', authorize('viewer'), async (req, res) => {
  try {
    const studentsCount = await prisma.user.count({ where: { role: "STUDENT" } });
    const collegesCount = await prisma.college.count();
    const coursesCount = await prisma.course.count();
    const pendingReviews = await prisma.review.count({ where: { status: "PENDING" } });
    
    // Recent logs
    const recentLogs = await prisma.auditLog.findMany({
      orderBy: { timestamp: 'desc' },
      take: 10,
      include: {
        user: {
          select: { name: true, role: true }
        }
      }
    });

    res.status(200).json({
      students: studentsCount,
      colleges: collegesCount,
      courses: coursesCount,
      pendingReviews,
      recentLogs
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST track student actions
router.post('/track', async (req, res) => {
  const { action, details } = req.body;
  const authHeader = req.headers.authorization;
  
  let userId = null;
  let userName = "Anonymous";
  let userRole = "Viewer";

  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      userId = decoded.id;
      userName = decoded.name;
      userRole = decoded.role;
    } catch (err) {
      // Allow untracked anonymous logging
    }
  }

  try {
    const log = await prisma.auditLog.create({
      data: {
        action,
        userId,
        details: `${userName} (${userRole}): ${details}`
      }
    });
    res.status(201).json(log);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET all activity audit logs
router.get('/logs', authorize('admin'), async (req, res) => {
  try {
    const logs = await prisma.auditLog.findMany({
      orderBy: { timestamp: 'desc' },
      include: {
        user: {
          select: { name: true, role: true }
        }
      }
    });
    res.status(200).json(logs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET students profiles panel list
router.get('/students', authorize('viewer'), async (req, res) => {
  try {
    const studentUsers = await prisma.user.findMany({
      where: { role: "STUDENT" },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true
      }
    });
    res.status(200).json(studentUsers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
