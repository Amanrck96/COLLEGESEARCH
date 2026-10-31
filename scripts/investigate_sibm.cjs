const fs = require('fs');
const path = require('path');

const siteData = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'public', 'siteData.json'), 'utf-8'));
const cols = siteData.colleges || [];

const c165 = cols.find(c => c.id === 165);
const c233 = cols.find(c => c.id === 233);

console.log('=== ID 165 ===');
console.log(JSON.stringify(c165, null, 2));

console.log('\n=== ID 233 ===');
console.log(JSON.stringify(c233, null, 2));

