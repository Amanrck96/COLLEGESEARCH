const fs = require('fs');
const path = require('path');

console.log(`================================================================`);
console.log(`🔍 DEEP DOMAIN, THUMBNAIL & URL INTEGRITY AUDIT (6,963 COLLEGES)`);
console.log(`================================================================`);

const siteDataPath = path.resolve('public/siteData.json');
const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const colleges = siteData.colleges;

const START_INDEX = 3671; // IDs 3672 to 10634
const newColleges = colleges.slice(START_INDEX);

const domainCounts = {};
let lowResThumbnails = [];
let suspiciousUrls = [];
let nonHttpUrls = [];

newColleges.forEach(c => {
  const allUrls = [c.img, ...(c.gallery || [])];

  allUrls.forEach(url => {
    if (!url || typeof url !== 'string' || !url.startsWith('http')) {
      nonHttpUrls.push({ id: c.id, name: c.name, url });
      return;
    }

    try {
      const parsed = new URL(url);
      const host = parsed.hostname;
      domainCounts[host] = (domainCounts[host] || 0) + 1;

      const fullLower = url.toLowerCase();

      // Check for low-res thumbnail size hints
      if (
        fullLower.includes('_thumb') ||
        fullLower.includes('150x150') ||
        fullLower.includes('100x100') ||
        fullLower.includes('75x75') ||
        fullLower.includes('50x50') ||
        fullLower.includes('thumb_') ||
        fullLower.includes('-thumb.') ||
        fullLower.includes('_s.') ||
        fullLower.includes('w=50') ||
        fullLower.includes('w=100')
      ) {
        lowResThumbnails.push({ id: c.id, name: c.name, url });
      }

      // Check for suspicious paths
      if (
        fullLower.includes('.pdf') ||
        fullLower.includes('.doc') ||
        fullLower.includes('.html') ||
        fullLower.includes('.php?') ||
        fullLower.includes('.aspx?') ||
        fullLower.includes('login') ||
        fullLower.includes('signup') ||
        fullLower.includes('cart') ||
        fullLower.includes('ad_') ||
        fullLower.includes('banner_ad')
      ) {
        suspiciousUrls.push({ id: c.id, name: c.name, url });
      }
    } catch(e) {
      nonHttpUrls.push({ id: c.id, name: c.name, url });
    }
  });
});

console.log(`Total Image Instances Audited: ${Object.values(domainCounts).reduce((a, b) => a + b, 0)}`);
console.log(`Total Unique Domains: ${Object.keys(domainCounts).length}`);
console.log(`\nTop Image Hosting Domains:`);
const sortedDomains = Object.entries(domainCounts).sort((a, b) => b[1] - a[1]);
sortedDomains.slice(0, 30).forEach(([dom, cnt], idx) => {
  console.log(`  ${idx + 1}. ${dom}: ${cnt} images`);
});

console.log(`\n--- QUALITY CHECK METRICS ---`);
console.log(`1. Non-HTTP / Invalid URLs: ${nonHttpUrls.length}`);
console.log(`2. Low-Res / Thumbnail URLs: ${lowResThumbnails.length}`);
if (lowResThumbnails.length > 0) {
  console.log('Sample Low-Res Thumbnails:', lowResThumbnails.slice(0, 10));
}

console.log(`3. Suspicious / Non-Image Paths: ${suspiciousUrls.length}`);
if (suspiciousUrls.length > 0) {
  console.log('Sample Suspicious Paths:', suspiciousUrls.slice(0, 10));
}

console.log(`================================================================`);
