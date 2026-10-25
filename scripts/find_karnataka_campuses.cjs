const fs = require('fs');
const data = JSON.parse(fs.readFileSync('public/siteData.json', 'utf8'));
const colleges = Array.isArray(data) ? data : data.colleges || [];

const queries = ['IIM Bangalore', 'Indian Institute of Management Bangalore', 'RV College', 'BMS College', 'Ramaiah', 'PES University', 'Christ University', 'Alliance University', 'Jain University'];

queries.forEach(q => {
  const matches = colleges.filter(c => c.name && c.name.toLowerCase().includes(q.toLowerCase()) && c.image && !c.image.includes('unsplash') && !c.image.includes('wallpaper'));
  console.log(`\n=== Matches for: ${q} (${matches.length}) ===`);
  matches.slice(0, 3).forEach(m => {
    console.log(`ID: ${m.id} | ${m.name} | Image: ${m.image}`);
  });
});
