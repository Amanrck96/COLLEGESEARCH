import crypto from 'crypto';

const ARMOR_SECRET = process.env.ARMOR_SECRET || 'armor_k9x_college_compass_2026_secure_key';

/**
 * Generate a deterministic time-windowed salt for payload encryption
 */
function getRollingKey(offset = 0) {
  const window = Math.floor((Date.now() + offset) / (1000 * 60 * 5)); // 5-minute rolling window
  return crypto.createHmac('sha256', ARMOR_SECRET).update(`window_${window}`).digest('hex');
}

/**
 * Encrypt arbitrary JSON data into an armored hex/base64 payload
 */
export function encryptPayload(data) {
  try {
    const key = getRollingKey();
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key, 'hex'), iv);
    
    const plaintext = JSON.stringify(data);
    let encrypted = cipher.update(plaintext, 'utf8', 'base64');
    encrypted += cipher.final('base64');
    
    return {
      _armored: true,
      iv: iv.toString('hex'),
      payload: encrypted,
      ts: Date.now()
    };
  } catch (err) {
    console.error('❌ Encryption failure:', err.message);
    return data; // Safe fallback
  }
}

/**
 * Verify client handshake token (blocks direct non-browser scripts / cURL / Python scrapers)
 */
export function verifyArmorHandshake(req, res, next) {
  // Allow health check and honeypots
  if (req.path === '/api/health' || req.path.startsWith('/api/honeypot')) {
    return next();
  }

  const armorToken = req.headers['x-armor-token'] || req.headers['X-Armor-Token'];
  const userAgent = req.headers['user-agent'] || '';

  // 1. Block common bot User-Agents immediately
  const botPattern = /python|curl|wget|scrapy|httpclient|postman|insomnia|headlesschrome|phantomjs|selenium|puppeteer|playwright/i;
  if (botPattern.test(userAgent) && !req.headers['x-dev-bypass']) {
    return res.status(403).json({
      error: 'Access Denied: Automated scraping tools are strictly prohibited.',
      code: 'BOT_DETECTED'
    });
  }

  // 2. Validate token structure
  if (armorToken) {
    try {
      const decoded = Buffer.from(armorToken, 'base64').toString('utf8');
      const [tokenTs, tokenHash] = decoded.split(':');
      const timeDiff = Math.abs(Date.now() - parseInt(tokenTs, 10));

      // Token must be within 10 minutes
      if (timeDiff <= 1000 * 60 * 10) {
        const expectedHash = crypto.createHmac('sha256', ARMOR_SECRET).update(`token_${tokenTs}`).digest('hex').substring(0, 16);
        if (tokenHash === expectedHash) {
          req.isArmorVerified = true;
          return next();
        }
      }
    } catch (e) {}
  }

  // If internal dev server, allow with flag
  if (process.env.NODE_ENV !== 'production') {
    req.isArmorVerified = true;
    return next();
  }

  // Reject unverified requests in production
  return res.status(403).json({
    error: 'Access Denied: Missing cryptographic browser session verification.',
    code: 'ARMOR_HANDSHAKE_REQUIRED'
  });
}
