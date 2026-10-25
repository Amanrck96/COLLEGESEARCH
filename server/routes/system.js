import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// In-memory broadcast state with sensible defaults
let siteBroadcast = {
  enabled: true,
  type: 'info',
  message: '🎓 Admissions Open for 2026-27 Academic Year! Explore Top 12,660+ Engineering, MBA & Medical Colleges with Direct Counseling.',
  link: '/colleges',
  linkText: 'Explore Now',
  updatedAt: new Date().toISOString(),
  updatedBy: 'Super Admin'
};

// 1. Download SQLite Database Backup
router.get('/backup', (req, res) => {
  try {
    const dbPath = path.resolve(__dirname, '../prisma/dev.db');
    if (!fs.existsSync(dbPath)) {
      return res.status(404).json({ error: 'Database file not found' });
    }
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `thecollegecompass_backup_${timestamp}.sqlite`;
    res.download(dbPath, filename, (err) => {
      if (err) {
        console.error("Backup download error:", err);
      }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 2. System Telemetry & Health
router.get('/telemetry', async (req, res) => {
  try {
    const [collegeCount, studentCount, reviewCount] = await Promise.all([
      prisma.college.count(),
      prisma.student.count(),
      prisma.review.count()
    ]);

    const memoryUsage = process.memoryUsage();
    const uptimeSeconds = Math.floor(process.uptime());

    res.status(200).json({
      success: true,
      status: 'HEALTHY',
      timestamp: new Date().toISOString(),
      uptimeSeconds,
      uptimeFormatted: `${Math.floor(uptimeSeconds / 3600)}h ${Math.floor((uptimeSeconds % 3600) / 60)}m ${uptimeSeconds % 60}s`,
      process: {
        nodeVersion: process.version,
        platform: process.platform,
        arch: process.arch,
        rssMb: Math.round(memoryUsage.rss / 1024 / 1024 * 100) / 100,
        heapUsedMb: Math.round(memoryUsage.heapUsed / 1024 / 1024 * 100) / 100,
        heapTotalMb: Math.round(memoryUsage.heapTotal / 1024 / 1024 * 100) / 100
      },
      counts: {
        colleges: collegeCount,
        students: studentCount,
        reviews: reviewCount
      }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 3. Get Site Broadcast Banner
router.get('/broadcast', (req, res) => {
  res.status(200).json({ success: true, broadcast: siteBroadcast });
});

// 4. Update Site Broadcast Banner
router.post('/broadcast', (req, res) => {
  try {
    const { enabled, type, message, link, linkText, updatedBy } = req.body;
    siteBroadcast = {
      enabled: enabled !== undefined ? !!enabled : siteBroadcast.enabled,
      type: type || siteBroadcast.type,
      message: message !== undefined ? String(message) : siteBroadcast.message,
      link: link !== undefined ? String(link) : siteBroadcast.link,
      linkText: linkText !== undefined ? String(linkText) : siteBroadcast.linkText,
      updatedAt: new Date().toISOString(),
      updatedBy: updatedBy || 'Super Admin'
    };
    res.status(200).json({ success: true, message: 'Broadcast banner updated successfully', broadcast: siteBroadcast });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 5. Generate / Preview Sitemap
router.get('/sitemap-preview', async (req, res) => {
  try {
    const topColleges = await prisma.college.findMany({
      take: 50,
      select: { id: true, name: true, city: true, state: true }
    });

    const staticRoutes = [
      '/', '/colleges', '/exams', '/scholarships', '/news', '/compare', '/career-guidance', '/about', '/contact'
    ];

    const xmlSample = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Static Core Routes (${staticRoutes.length}) -->
${staticRoutes.map(route => `  <url>
    <loc>https://thecollegecompass.com${route}</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>`).join('\n')}
  <!-- Top College Profiles Sample (${topColleges.length} of 12,660+) -->
${topColleges.map(c => `  <url>
    <loc>https://thecollegecompass.com/colleges/${c.id}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>`;

    res.status(200).json({
      success: true,
      totalIndexedPages: 12660 + staticRoutes.length,
      sampleXml: xmlSample,
      generatedAt: new Date().toISOString()
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
