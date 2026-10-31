import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import google from 'googlethis';
import uploadRoutes from './routes/uploads.js';
import authRoutes from './routes/auth.js';
import collegeRoutes from './routes/colleges.js';
import reviewRoutes from './routes/reviews.js';
import analyticsRoutes from './routes/analytics.js';
import webhookRoutes from './routes/webhooks.js';
import systemRoutes from './routes/system.js';
import { antiScrapeLimiter, honeypotTrap } from './middleware/honeypot.js';
import { verifyArmorHandshake } from './middleware/wireArmor.js';

dotenv.config({ path: '../.env' });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';

// Security + CORS
app.use(cors({
  origin: [FRONTEND_URL, 'http://localhost:5173', 'http://localhost:4173', 'http://127.0.0.1:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-CSRF-Token', 'X-Armor-Token', 'x-armor-token', 'X-Dev-Bypass'],
  credentials: true
}));

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Serve uploaded images and campus images as static files (BEFORE anti-bot filters)
const uploadsDir = path.join(__dirname, '../public/uploads');
app.use('/uploads', express.static(uploadsDir));
const imagesDir = path.join(__dirname, '../public/images');
app.use('/images', express.static(imagesDir));

// Anti-Scraping Rate Limiter & Handshake Middleware (Applied to /api only)
app.use('/api', antiScrapeLimiter);
app.use('/api', verifyArmorHandshake);

// Honeypot Trap Routes (Catch crawlers & bots)
app.get('/api/honeypot', honeypotTrap);
app.get('/api/colleges/all-dump', honeypotTrap);
app.get('/api/export-all-database', honeypotTrap);
app.get('/api/v1/scraper-feed', honeypotTrap);

// Health check
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Image Search Proxy Route
app.get('/api/search-image', async (req, res) => {
  const { q } = req.query;
  if (!q) {
    return res.status(400).json({ error: "Query parameter q is required" });
  }
  try {
    const searchStr = `${q} campus building exterior facade`;
    const images = await google.image(searchStr, { safe: false });
    return res.status(200).json(images);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// Image Save Route (Updates main image for a college in SQLite)
app.post('/api/save-image', async (req, res) => {
  const { id, img } = req.body;
  if (!id || !img) {
    return res.status(400).json({ error: "Missing required fields: id, img" });
  }
  try {
    const { PrismaClient } = await import('@prisma/client');
    const prisma = new PrismaClient();
    await prisma.college.update({
      where: { id: parseInt(id) },
      data: { img }
    });
    return res.status(200).json({ success: true, message: `Image updated for College ID ${id}` });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// Mount All API Routes
app.use('/api/uploads', uploadRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/colleges', collegeRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/webhooks', webhookRoutes);
app.use('/api/system', systemRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Server Error:', err.message);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`\n🚀 Backend API Server actively running on http://localhost:${PORT}`);
  console.log(`   Colleges API:   GET  http://localhost:${PORT}/api/colleges`);
  console.log(`   Health check:   GET  http://localhost:${PORT}/api/health\n`);
});
