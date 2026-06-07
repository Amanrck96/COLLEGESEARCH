import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import google from 'googlethis';
import dotenv from 'dotenv';

// Routes
import authRoutes from './routes/auth.js';
import collegeRoutes from './routes/colleges.js';
import reviewRoutes from './routes/reviews.js';
import analyticsRoutes from './routes/analytics.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security Middlewares
app.use(helmet());
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Rate Limiting to prevent brute-force API requests
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 200, // Limit each IP to 200 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many requests. Please try again after 15 minutes." }
});
app.use('/api/', apiLimiter);

// Endpoint Health Check
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: "OK", timestamp: new Date().toISOString() });
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

// Mount Routes
app.use('/api/auth', authRoutes);
app.use('/api/colleges', collegeRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/analytics', analyticsRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error("Express Server Error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`Express API Server listening on port ${PORT}`);
});
