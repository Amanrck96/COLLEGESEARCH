const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'server', 'middleware', 'wireArmor.js');
let code = fs.readFileSync(file, 'utf-8');

// In dev mode, allow localhost automated testing (Puppeteer)
const oldCheck = `  // 1. Block common bot User-Agents immediately
  const botPattern = /python|curl|wget|scrapy|httpclient|postman|insomnia|headlesschrome|phantomjs|selenium|puppeteer|playwright/i;
  if (botPattern.test(userAgent) && !req.headers['x-dev-bypass']) {
    return res.status(403).json({
      error: 'Access Denied: Automated scraping tools are strictly prohibited.',
      code: 'BOT_DETECTED'
    });
  }`;

const newCheck = `  // 1. Block common external scraping tools (exempt dev/test on localhost)
  const isLocalhost = req.hostname === 'localhost' || req.hostname === '127.0.0.1' || req.ip === '127.0.0.1' || req.ip === '::1';
  const botPattern = /python|curl|wget|scrapy|httpclient|postman|insomnia/i;
  const browserTestPattern = /headlesschrome|phantomjs|selenium|puppeteer|playwright/i;
  
  if (botPattern.test(userAgent) && !req.headers['x-dev-bypass']) {
    return res.status(403).json({
      error: 'Access Denied: Automated scraping tools are strictly prohibited.',
      code: 'BOT_DETECTED'
    });
  }
  
  if (browserTestPattern.test(userAgent) && !isLocalhost && !req.headers['x-dev-bypass'] && process.env.NODE_ENV === 'production') {
    return res.status(403).json({
      error: 'Access Denied: Automated scraping tools are strictly prohibited.',
      code: 'BOT_DETECTED'
    });
  }`;

const normalizedCode = code.replace(/\r\n/g, '\n');
const normalizedOld = oldCheck.replace(/\r\n/g, '\n');
const normalizedNew = newCheck.replace(/\r\n/g, '\n');

if (normalizedCode.includes(normalizedOld)) {
  fs.writeFileSync(file, normalizedCode.replace(normalizedOld, normalizedNew), 'utf-8');
  console.log('✓ wireArmor.js updated: localhost browser automation enabled for QA');
} else {
  console.error('Failed to find oldCheck in wireArmor.js');
}

