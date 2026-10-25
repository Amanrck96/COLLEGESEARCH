const fs = require('fs');
const path = require('path');

const campusesDir = path.join(__dirname, '../public/images/campuses');
const dest = path.join(campusesDir, 'spdt_tibrewala_andheri.jpg');

async function downloadSpdt() {
  const url = 'https://spdtcollege.ac.in/download/gallery/199619658TIBREWALA.jpg';
  try {
    console.log(`Downloading SPDT official building from ${url}...`);
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Referer': 'https://spdtcollege.ac.in/'
      }
    });
    if (res.ok) {
      const buf = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(dest, buf);
      console.log(`✅ Success! Downloaded SPDT Tibrewala photo (${(buf.length / 1024).toFixed(1)} KB)`);
      return true;
    } else {
      console.log(`HTTP ${res.status}`);
    }
  } catch(e) {
    console.log(`Error: ${e.message}`);
  }
  return false;
}

downloadSpdt();
