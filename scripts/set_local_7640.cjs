const fs = require('fs');

const staged7640 = JSON.parse(fs.readFileSync('scripts/siteData.staged_7640.json', 'utf8'));
fs.writeFileSync('public/siteData.json', JSON.stringify(staged7640, null, 2), 'utf8');
console.log(`🚀 Set public/siteData.json to 7,640 colleges for local testing (${staged7640.colleges.length} colleges)`);
