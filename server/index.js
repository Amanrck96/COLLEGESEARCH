import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import uploadRoutes from './routes/uploads.js';

dotenv.config({ path: '../.env' });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';

// Security + CORS
app.use(cors({
  origin: [FRONTEND_URL, 'http://localhost:5173', 'http://localhost:4173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Serve uploaded images as static files
const uploadsDir = path.join(__dirname, '../public/uploads');
app.use('/uploads', express.static(uploadsDir));

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

// Image upload routes
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
  console.log(`\n✅ Image Upload Server running on http://localhost:${PORT}`);
  console.log(`   Upload endpoint: POST http://localhost:${PORT}/api/uploads/image`);
  console.log(`   Health check:    GET  http://localhost:${PORT}/api/health\n`);
});
