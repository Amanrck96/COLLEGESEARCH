const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'server', 'index.js');
let code = fs.readFileSync(file, 'utf-8');

const oldBlock = `// Anti-Scraping Rate Limiter & Handshake Middleware
app.use(antiScrapeLimiter);
app.use(verifyArmorHandshake);

// Honeypot Trap Routes (Catch crawlers & bots)
app.get('/api/honeypot', honeypotTrap);
app.get('/api/colleges/all-dump', honeypotTrap);
app.get('/api/export-all-database', honeypotTrap);
app.get('/api/v1/scraper-feed', honeypotTrap);

// Serve uploaded images and campus images as static files
const uploadsDir = path.join(__dirname, '../public/uploads');
app.use('/uploads', express.static(uploadsDir));
const imagesDir = path.join(__dirname, '../public/images');
app.use('/images', express.static(imagesDir));`;

const newBlock = `// Serve uploaded images and campus images as static files (BEFORE anti-bot filters)
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
app.get('/api/v1/scraper-feed', honeypotTrap);`;

const normalizedCode = code.replace(/\r\n/g, '\n');
const normalizedOld = oldBlock.replace(/\r\n/g, '\n');
const normalizedNew = newBlock.replace(/\r\n/g, '\n');

if (normalizedCode.includes(normalizedOld)) {
  const updated = normalizedCode.replace(normalizedOld, normalizedNew);
  fs.writeFileSync(file, updated, 'utf-8');
  console.log('✓ server/index.js updated: static assets now served BEFORE anti-bot middleware');
} else {
  console.error('Failed to find oldBlock in server/index.js');
}

