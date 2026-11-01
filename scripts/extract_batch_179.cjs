const fs = require('fs');
const path = require('path');

const siteData = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'public', 'siteData.json'), 'utf8'));
const colleges = Array.isArray(siteData) ? siteData : siteData.colleges;

const batch179Ids = [1481, 1482, 1483, 1484, 1485, 1486, 1487, 1488, 1489, 1490];
const batch179 = colleges.filter(c => batch179Ids.includes(c.id));

fs.writeFileSync(path.join(__dirname, '..', 'reports', 'verification', 'batch-179-candidates.json'), JSON.stringify(batch179, null, 2), 'utf8');
console.log(`Extracted ${batch179.length} colleges for Batch 179.`);

