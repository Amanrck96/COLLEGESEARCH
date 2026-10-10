const fs = require('fs');
const path = require('path');

const campusesDir = path.join(__dirname, '../public/images/campuses');
const dest = path.join(campusesDir, 'spdt_tibrewala_andheri.jpg');

const candidateUrls = [
  'https://www.spdtcollege.ac.in/images/slider/banner1.jpg',
  'https://www.spdtcollege.ac.in/images/about-us.jpg',
  'https://www.spdtcollege.ac.in/images/slider/banner2.jpg',
  'https://spdtimr.ac.in/wp-content/uploads/2021/07/slider-1.jpg',
  'https://spdtimr.ac.in/wp-content/uploads/2021/07/about.jpg',
  'https://images.shiksha.com/mediadata/images/1547468165phpR1bC5U.jpeg',
  'https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/7891/2019/3/1/Campus-View-of-Smt-Parmeshwaridevi-Durgadutt-Tibrewala-Lions-Juhu-College-of-Arts-Commerce-and-Science-Mumbai_Campus-View.jpg',
  'https://content.jdmagicbox.com/comp/mumbai/e3/022pxx22.xx22.091104153034.y4e3/catalogue/smt-parmeshwaridevi-durgadutt-tibrewala-lions-juhu-college-of-arts-commerce-and-science-andheri-east-mumbai-colleges-4a317s6.jpg'
];

async function tryDownload() {
  for (const url of candidateUrls) {
    try {
      console.log(`Trying URL: ${url}...`);
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
          'Accept': 'image/*,*/*'
        }
      });
      if (res.ok) {
        const buf = Buffer.from(await res.arrayBuffer());
        if (buf.length > 3000) {
          fs.writeFileSync(dest, buf);
          console.log(`✅ Successfully downloaded SPDT photo (${(buf.length / 1024).toFixed(1)} KB) from ${url}`);
          return true;
        }
      }
    } catch(e) {
      console.log(`Failed ${url}: ${e.message}`);
    }
  }
  return false;
}

tryDownload();
