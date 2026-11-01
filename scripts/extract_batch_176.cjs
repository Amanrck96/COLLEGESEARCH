const fs = require('fs');
const path = require('path');

const siteData = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'public', 'siteData.json'), 'utf8'));
const colleges = Array.isArray(siteData) ? siteData : siteData.colleges;

const batch176Ids = [1451, 1452, 1453, 1454, 1455, 1456, 1457, 1458, 1459, 1460];
const batch176 = colleges.filter(c => batch176Ids.includes(c.id));

fs.writeFileSync(path.join(__dirname, '..', 'reports', 'verification', 'batch-176-candidates.json'), JSON.stringify(batch176, null, 2), 'utf8');
console.log(`Extracted ${batch176.length} colleges for Batch 176.`);

