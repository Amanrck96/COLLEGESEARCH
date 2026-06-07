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

// POST Submit Review for a college
router.post('/', async (req, res) => {
  const { collegeId, authorName, rating, content } = req.body;
  if (!collegeId || !authorName || !content) {
    return res.status(400).json({ error: "Missing required fields: collegeId, authorName, content" });
  }

  try {
    const review = await prisma.review.create({
      data: {
        collegeId: parseInt(collegeId),
        authorName,
        rating: parseFloat(rating || "5.0"),
        content,
        status: "PENDING" // defaults to pending moderation
      }
    });

    res.status(201).json({ success: true, message: "Review submitted. Waiting for admin approval.", review });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET Pending Reviews list (moderation console)
router.get('/moderation', authorize('admin'), async (req, res) => {
  try {
    const pendingReviews = await prisma.review.findMany({
      where: { status: "PENDING" },
      include: {
        college: {
          select: { name: true }
        }
      }
    });
    res.status(200).json(pendingReviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT Update Review Status (APPROVE/REJECT)
router.put('/:id/status', authorize('admin'), async (req, res) => {
  const { id } = req.params;
  const { status } = req.body; // APPROVED or REJECTED

  if (!['APPROVED', 'REJECTED'].includes(status)) {
    return res.status(400).json({ error: "Invalid status value. Must be APPROVED or REJECTED" });
  }

  try {
    const updated = await prisma.review.update({
      where: { id: parseInt(id) },
      data: { status }
    });

    // If approved, update ratings on college
    if (status === 'APPROVED') {
      const collegeReviews = await prisma.review.findMany({
        where: { collegeId: updated.collegeId, status: "APPROVED" }
      });
      const avgRating = collegeReviews.reduce((sum, r) => sum + r.rating, 0) / collegeReviews.length;
      
      await prisma.college.update({
        where: { id: updated.collegeId },
        data: {
          rating: parseFloat(avgRating.toFixed(1)),
          reviewsCount: collegeReviews.length
        }
      });
    }

    await prisma.auditLog.create({
      data: { 
        action: "Moderate Review", 
        userId: req.userId, 
        details: `Set review ID ${id} status to ${status} for College ID ${updated.collegeId}` 
      }
    });

    res.status(200).json({ success: true, review: updated });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
