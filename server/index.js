import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import collegeRoutes from './routes/colleges.js';
import authRoutes from './routes/auth.js';
import reviewRoutes from './routes/reviews.js';
import analyticsRoutes from './routes/analytics.js';
import uploadRoutes from './routes/uploads.js';
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

// Anti-Scraping Rate Limiter & Handshake Middleware
app.use(antiScrapeLimiter);
app.use(verifyArmorHandshake);

// Honeypot Trap Routes (Catch crawlers & bots)
app.get('/api/honeypot', honeypotTrap);
app.get('/api/colleges/all-dump', honeypotTrap);
app.get('/api/export-all-database', honeypotTrap);
app.get('/api/v1/scraper-feed', honeypotTrap);

// Serve uploaded images as static files
const uploadsDir = path.join(__dirname, '../public/uploads');
app.use('/uploads', express.static(uploadsDir));

// Health check
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Mount Main API Routes
app.use('/api/colleges', collegeRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/uploads', uploadRoutes);

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
