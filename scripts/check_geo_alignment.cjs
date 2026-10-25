const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '..', 'public', 'siteData.json');
const raw = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const colleges = raw.colleges || [];

console.log("Checking geographic alignment of local campus images...");

let misaligned = [];

colleges.forEach(col => {
  const img = (col.image || '').toLowerCase();
  const state = (col.state || col.location || '').toLowerCase();

  if (img.includes('_andheri') || img.includes('_borivali') || img.includes('_vileparle') || 
      img.includes('_bandra') || img.includes('_kandivali') || img.includes('_malad') || 
      img.includes('_kurla') || img.includes('_matunga') || img.includes('_wadala') || 
      img.includes('_powai') || img.includes('_mumbai') || img.includes('_pune') || 
      img.includes('_nagpur') || img.includes('_kharghar') || img.includes('_boisar')) {
    if (!state.includes('maharashtra') && !state.includes('mumbai') && !state.includes('pune') && !state.includes('nagpur') && !state.includes('thane') && !state.includes('palghar') && !state.includes('raigad') && !state.includes('nashik') && !state.includes('aurangabad')) {
      misaligned.push({ id: col.id, name: col.name, state: col.state || col.location, img });
    }
  }

  if (img.includes('_bangalore') || img.includes('_bengaluru')) {
    if (!state.includes('karnataka') && !state.includes('bangalore') && !state.includes('bengaluru') && !state.includes('mysore') && !state.includes('belgaum') && !state.includes('mangalore')) {
      misaligned.push({ id: col.id, name: col.name, state: col.state || col.location, img });
    }
  }
});

console.log(`Found ${misaligned.length} geographically misaligned colleges.`);
misaligned.forEach(m => {
  console.log(`[${m.id}] ${m.name} (${m.state}) -> ${m.img}`);
});
