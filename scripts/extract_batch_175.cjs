const fs = require('fs');
const path = require('path');

const siteData = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'public', 'siteData.json'), 'utf8'));
const colleges = Array.isArray(siteData) ? siteData : siteData.colleges;

const batch175Ids = [1441, 1442, 1443, 1444, 1445, 1446, 1447, 1448, 1449, 1450];
const batch175 = colleges.filter(c => batch175Ids.includes(c.id));

fs.writeFileSync(path.join(__dirname, '..', 'reports', 'verification', 'batch-175-candidates.json'), JSON.stringify(batch175, null, 2), 'utf8');
console.log(`Extracted ${batch175.length} colleges for Batch 175.`);
