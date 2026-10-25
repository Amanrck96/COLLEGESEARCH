const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');
const raw = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const colleges = raw.colleges || [];

console.log("Analyzing HTTP and suspicious external images...");

const httpColleges = colleges.filter(c => (c.image || '').startsWith('http://'));
console.log(`Found ${httpColleges.length} colleges with http:// images.`);
httpColleges.forEach(c => {
  console.log(`[${c.id}] ${c.name} (${c.location || c.state}) -> ${c.image}`);
});
