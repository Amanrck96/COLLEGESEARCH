const fs = require('fs');
const path = require('path');

const campusesDir = path.join(__dirname, '../public/images/campuses');
const dest = path.join(campusesDir, 'spdt_tibrewala_andheri.jpg');

async function testUrl(u) {
  try {
    const res = await fetch(u, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Accept': 'image/*,*/*'
      }
    });
    console.log(`URL: ${u} -> HTTP ${res.status} [${res.headers.get('content-type')}]`);
    if (res.ok) {
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length > 2000) {
        fs.writeFileSync(dest, buf);
        console.log(`✅ Saved ${(buf.length / 1024).toFixed(1)} KB to ${dest}`);
        return true;
      }
    }
  } catch(e) {
    console.log(`Error on ${u}: ${e.message}`);
  }
  return false;
}

async function run() {
  const urls = [
    'https://spdtcollege.ac.in/assets/images/banner/1.jpg',
    'https://spdtcollege.ac.in/assets/images/about/about.jpg',
    'https://spdtcollege.ac.in/images/about.jpg',
    'https://spdtcollege.ac.in/images/college.jpg',
    'https://spdtcollege.ac.in/images/banner1.jpg',
    'https://www.spdtcollege.ac.in/assets/images/slider/slide1.jpg',
    'https://www.spdtcollege.ac.in/images/about-us.jpg',
    'https://images.jdmagicbox.com/comp/mumbai/e3/022pxx22.xx22.091104153034.y4e3/catalogue/smt-parmeshwaridevi-durgadutt-tibrewala-lions-juhu-college-of-arts-commerce-and-science-andheri-east-mumbai-colleges-4a317s6.jpg'
  ];

  for (const u of urls) {
    const ok = await testUrl(u);
    if (ok) break;
  }
}

run();
