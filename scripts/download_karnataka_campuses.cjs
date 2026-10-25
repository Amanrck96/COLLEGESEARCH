const fs = require('fs');
const path = require('path');

const campusesDir = path.join(__dirname, '../public/images/campuses');

const list = [
  {
    name: 'bangalore_university.jpg',
    url: 'https://images.indianexpress.com/2025/07/bangalore-university_20250715100346.jpg'
  },
  {
    name: 'bms_bangalore.jpg',
    url: 'https://img.jagranjosh.com/images/2022/December/1122022/BMS-College-of-Engineering-Bangalore-Campus-View-3.jpg'
  },
  {
    name: 'pes_bangalore.jpg',
    url: 'https://cache.careers360.mobi/media/presets/860X430/article_images/2018/01/31/PES-University-img.jpeg'
  },
  {
    name: 'ramaiah_bangalore.jpg',
    url: 'https://images.news18.com/ibnlive/uploads/2025/07/Ramaiah-Institute-of-Technology-2025-07-976a82f6d5d7251c53e1bfade23cd0a5.jpg'
  },
  {
    name: 'iim_bangalore.jpg',
    url: 'https://www.iimb.ac.in/archives/images/photo/new-campus–2000-9.jpg'
  }
];

async function run() {
  for (const item of list) {
    const dest = path.join(campusesDir, item.name);
    try {
      const res = await fetch(item.url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
          'Accept': 'image/*,*/*'
        }
      });
      if (res.ok) {
        const buf = Buffer.from(await res.arrayBuffer());
        if (buf.length > 2000) {
          fs.writeFileSync(dest, buf);
          console.log(`✅ ${item.name} (${(buf.length / 1024).toFixed(1)} KB)`);
        } else {
          console.log(`⚠️ ${item.name} too small: ${buf.length} bytes`);
        }
      } else {
        console.log(`❌ ${item.name}: ${res.status}`);
      }
    } catch (e) {
      console.log(`❌ ${item.name}: ${e.message}`);
    }
  }
}

run();
