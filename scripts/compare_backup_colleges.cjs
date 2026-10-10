const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');
const currentData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const currentColleges = Array.isArray(currentData) ? currentData : currentData.colleges;

const origData = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'scripts', 'siteData.7671_colleges.json'), 'utf8'));
const origColleges = Array.isArray(origData) ? origData : origData.colleges;

console.log(`Current Total Colleges: ${currentColleges.length}`);
console.log(`Original Base Colleges in backup: ${origColleges.length}`);

// Let's see the newly added colleges (IDs that didn't exist or > 7671)
const origIdMap = new Map(origColleges.map(c => [c.id, c]));
const newlyAddedColleges = currentColleges.filter(c => !origIdMap.has(c.id));

console.log(`Newly Added Colleges needing real building photos: ${newlyAddedColleges.length}`);
