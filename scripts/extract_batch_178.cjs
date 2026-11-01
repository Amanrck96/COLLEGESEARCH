const fs = require('fs');
const path = require('path');

const siteData = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'public', 'siteData.json'), 'utf8'));
const colleges = Array.isArray(siteData) ? siteData : siteData.colleges;

const batch178Ids = [1471, 1472, 1473, 1474, 1475, 1476, 1477, 1478, 1479, 1480];
const batch178 = colleges.filter(c => batch178Ids.includes(c.id));

fs.writeFileSync(path.join(__dirname, '..', 'reports', 'verification', 'batch-178-candidates.json'), JSON.stringify(batch178, null, 2), 'utf8');
console.log(`Extracted ${batch178.length} colleges for Batch 178.`);

