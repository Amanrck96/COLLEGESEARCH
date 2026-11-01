const fs = require('fs');
const path = require('path');

const siteData = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'public', 'siteData.json'), 'utf8'));
const colleges = Array.isArray(siteData) ? siteData : siteData.colleges;

const batch174Ids = [1431, 1432, 1433, 1434, 1435, 1436, 1437, 1438, 1439, 1440];
const batch174 = colleges.filter(c => batch174Ids.includes(c.id));

fs.writeFileSync(path.join(__dirname, '..', 'reports', 'verification', 'batch-174-candidates.json'), JSON.stringify(batch174, null, 2), 'utf8');
console.log(`Extracted ${batch174.length} colleges for Batch 174.`);
