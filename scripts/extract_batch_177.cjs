const fs = require('fs');
const path = require('path');

const siteData = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'public', 'siteData.json'), 'utf8'));
const colleges = Array.isArray(siteData) ? siteData : siteData.colleges;

const batch177Ids = [1461, 1462, 1463, 1464, 1465, 1466, 1467, 1468, 1469, 1470];
const batch177 = colleges.filter(c => batch177Ids.includes(c.id));

fs.writeFileSync(path.join(__dirname, '..', 'reports', 'verification', 'batch-177-candidates.json'), JSON.stringify(batch177, null, 2), 'utf8');
console.log(`Extracted ${batch177.length} colleges for Batch 177.`);

