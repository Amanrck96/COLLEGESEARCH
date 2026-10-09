const fs = require('fs');

// 1. Ensure staged 7,640 dataset is safely backed up
const currentData = JSON.parse(fs.readFileSync('public/siteData.json', 'utf8'));
fs.writeFileSync('scripts/siteData.staged_7640.json', JSON.stringify(currentData, null, 2), 'utf8');
console.log(`💾 Saved 7,640 dataset to scripts/siteData.staged_7640.json (${currentData.colleges.length} colleges)`);

// 2. Restore 3,671 verified dataset to public/siteData.json for Vercel
const clean3671 = JSON.parse(fs.readFileSync('scripts/siteData.master_all_38k.json', 'utf8'));
fs.writeFileSync('public/siteData.json', JSON.stringify(clean3671, null, 2), 'utf8');
console.log(`✅ Restored 3,671 verified colleges to public/siteData.json (${clean3671.colleges.length} colleges)`);
