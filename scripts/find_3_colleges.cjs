const fs = require('fs');
const path = require('path');
const siteData = JSON.parse(fs.readFileSync(path.resolve('public/siteData.json'), 'utf8'));
const colleges = siteData.colleges;

const queries = ['aditya', 'alliance', 'alwar'];
colleges.forEach((c, idx) => {
  const n = (c.name || '').toLowerCase();
  const l = (c.location || '').toLowerCase();
  const s = (c.state || '').toLowerCase();
  
  if ((n.includes('aditya') && (l.includes('chittoor') || s.includes('andhra') || n.includes('chittoor'))) ||
      (n.includes('alliance') && (l.includes('visakhapatnam') || l.includes('maddilapalem') || s.includes('andhra') || n.includes('visakhapatnam') || n.includes('hotel'))) ||
      (n.includes('alwar') && (l.includes('mvp') || l.includes('visakhapatnam') || s.includes('andhra') || n.includes('engineering') || l.includes('rajasthan')))) {
    console.log(`[Index ${idx}] ID: ${c.id} | Name: ${c.name}`);
    console.log(`  Location: ${c.location}, State: ${c.state}`);
    console.log(`  Image: ${c.img}`);
    console.log(`  Gallery: ${JSON.stringify(c.gallery)}`);
    console.log(`  Courses count: ${(c.courses || []).length}`);
    console.log(`  Website: ${c.website}`);
    console.log(`  Map: ${c.mapUrl}`);
    console.log('---');
  }
});
