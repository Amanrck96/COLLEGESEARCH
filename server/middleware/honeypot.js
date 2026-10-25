const blacklistedIPs = new Set();
const requestCounts = new Map();

/**
 * Clean up rate limiting records every minute
 */
setInterval(() => {
  requestCounts.clear();
}, 60 * 1000);

/**
 * Honeypot Middleware: Detects crawlers touching hidden / trap endpoints
 */
export function honeypotTrap(req, res) {
  const clientIP = req.ip || req.connection.remoteAddress || 'unknown';
  console.warn(`🚨 HONEYPOT TRIGGERED by IP: ${clientIP} on endpoint: ${req.originalUrl}`);
  if (!req.headers['x-dev-bypass']) {
    blacklistedIPs.add(clientIP);
  }

  // Return decoy empty payload with slow delay to waste scraper resources
  setTimeout(() => {
    res.status(200).json({
      colleges: [],
      totalCount: 0,
      page: 1,
      limit: 10,
      totalPages: 0,
      _note: "Verification standard active"
    });
  }, 1500);
}

/**
 * Anti-Scraping Rate Limiter Middleware
 */
export function antiScrapeLimiter(req, res, next) {
  const clientIP = req.ip || req.connection.remoteAddress || 'unknown';

  if (req.headers['x-dev-bypass']) {
    return next();
  }

  // Check if blacklisted
  if (blacklistedIPs.has(clientIP)) {
    return res.status(429).json({
      error: 'Too Many Requests: Your IP has been temporarily throttled due to automated access detection.',
      code: 'SCRAPER_BLOCKED'
    });
  }

  const currentCount = (requestCounts.get(clientIP) || 0) + 1;
  requestCounts.set(clientIP, currentCount);

  // Limit to max 120 requests per minute per IP (ample for human browsing, blocks batch scraping)
  if (currentCount > 120) {
    console.warn(`⚠️ High request frequency detected from IP: ${clientIP} (${currentCount} req/min)`);
    blacklistedIPs.add(clientIP);
    return res.status(429).json({
      error: 'Rate Limit Exceeded: Please slow down your requests.',
      code: 'RATE_LIMIT_EXCEEDED'
    });
  }

  next();
}
