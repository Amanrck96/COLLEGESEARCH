const fs = require('fs');
const siteData = JSON.parse(fs.readFileSync('public/siteData.json', 'utf8'));
const colleges = Array.isArray(siteData) ? siteData : siteData.colleges;

const p = colleges.find(c => c.id === 4703);
console.log('ID 4703:', p.name, '-> Image:', p.image);
