import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, '../../public/uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Multer disk storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, 'college-' + uniqueSuffix + ext);
  }
});

const fileFilter = (req, file, cb) => {
  const allowed = /\.(jpeg|jpg|png|gif|webp|svg)$/i;
  if (allowed.test(file.originalname) && /^image\//.test(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed (jpeg, jpg, png, gif, webp, svg)'));
  }
};

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter
});

// POST /api/uploads/image — Upload single image
router.post('/image', upload.single('image'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
    const imageUrl = `/uploads/${req.file.filename}`;
    res.status(200).json({
      success: true,
      imageUrl,
      filename: req.file.filename,
      originalName: req.file.originalname,
      size: req.file.size
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/uploads/gallery — Upload multiple images (up to 10)
router.post('/gallery', upload.array('images', 10), (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: 'No files uploaded' });
    }
    const imageUrls = req.files.map(f => `/uploads/${f.filename}`);
    res.status(200).json({ success: true, imageUrls, count: req.files.length });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/uploads/list — List all uploaded images
router.get('/list', (req, res) => {
  try {
    const files = fs.readdirSync(uploadsDir);
    const images = files
      .filter(f => /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(f))
      .map(f => ({
        filename: f,
        url: `/uploads/${f}`,
        size: fs.statSync(path.join(uploadsDir, f)).size,
        created: fs.statSync(path.join(uploadsDir, f)).birthtime
      }))
      .sort((a, b) => new Date(b.created) - new Date(a.created));
    res.status(200).json({ images, total: images.length });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE /api/uploads/image/:filename — Delete an uploaded image
router.delete('/image/:filename', (req, res) => {
  try {
    const filename = path.basename(req.params.filename); // prevent path traversal
    const filePath = path.join(uploadsDir, filename);
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: 'Image not found' });
    }
    fs.unlinkSync(filePath);
    res.status(200).json({ success: true, message: 'Image deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Multer error handler
router.use((err, req, res, next) => {
  if (err instanceof multer.MulterError || err.message.includes('Only image')) {
    return res.status(400).json({ error: err.message });
  }
  next(err);
});

export default router;
