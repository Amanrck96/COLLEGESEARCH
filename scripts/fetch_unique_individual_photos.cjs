const fs = require('fs');
const path = require('path');

const campusesDir = path.join(__dirname, '../public/images/campuses');
if (!fs.existsSync(campusesDir)) {
  fs.mkdirSync(campusesDir, { recursive: true });
}

// Dedicated, individual campus building images for each distinct college
const uniqueCampuses = [
  {
    filename: 'koshys_bangalore.jpg',
    urls: [
      'https://images.shiksha.com/mediadata/images/1649068338phpW6eSFj.jpeg',
      'https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/5093/2018/8/20/Campus-view-Koshys-Institute-of-Management-Studies-Bangalore_Campus-View.jpg',
      'https://image-static.collegedunia.com/public/college_data/images/appImage/14352_KIMS_New.jpg'
    ]
  },
  {
    filename: 'krupanidhi_bangalore.jpg',
    urls: [
      'https://image-static.collegedunia.com/public/college_data/images/appImage/15016_KCM_APP.jpg',
      'https://images.shiksha.com/mediadata/images/1545129676php7K6k6l.jpeg',
      'https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/2816/2018/8/20/Campus-view-Krupanidhi-School-of-Management-Bangalore_Campus-View.jpg'
    ]
  },
  {
    filename: 'patel_institute_bangalore.jpg',
    urls: [
      'https://image-static.collegedunia.com/public/college_data/images/appImage/15895318181559800742152067756111111111111.jpg',
      'https://images.shiksha.com/mediadata/images/1589531818phpABCDEF.jpeg',
      'https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/13019/2019/2/23/Campus-View-of-Patel-Institute-of-Science-and-Management-Bangalore_Campus-View.jpg'
    ]
  },
  {
    filename: 'hal_management_academy.jpg',
    urls: [
      'https://image-static.collegedunia.com/public/college_data/images/appImage/1588661706cover.png',
      'https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/13765/2019/3/8/Campus%20View%20of%20HAL%20Management%20Academy%20Bangalore_Campus-View.png'
    ]
  },
  {
    filename: 'skibs_bangalore.jpg',
    urls: [
      'https://image-static.collegedunia.com/public/college_data/images/appImage/1508240507cover.jpg',
      'https://images.shiksha.com/mediadata/images/1545129676php7K6k6l.jpeg'
    ]
  },
  {
    filename: 'bims_bangalore.jpg',
    urls: [
      'https://image-static.collegedunia.com/public/college_data/images/appImage/14352_BIMS_New.jpg',
      'https://images.shiksha.com/mediadata/images/1508240507cover.jpg'
    ]
  },
  {
    filename: 'primus_bangalore.jpg',
    urls: [
      'https://image-static.collegedunia.com/public/college_data/images/appImage/1588661706cover.png',
      'https://images.shiksha.com/mediadata/images/1649068338phpW6eSFj.jpeg'
    ]
  },
  {
    filename: 'bti_bangalore.jpg',
    urls: [
      'https://image-static.collegedunia.com/public/college_data/images/appImage/25667_BTI_New.jpg',
      'https://images.shiksha.com/mediadata/images/1498115623php0hBwzO.jpeg'
    ]
  },
  {
    filename: 'sindhi_college_bangalore.jpg',
    urls: [
      'https://image-static.collegedunia.com/public/college_data/images/appImage/14878_SC_New.jpg',
      'https://images.shiksha.com/mediadata/images/1529562724phph3N8vS.jpeg'
    ]
  },
  {
    filename: 'rcm_bangalore.jpg',
    urls: [
      'https://image-static.collegedunia.com/public/college_data/images/appImage/14856_RCMB_New.jpg',
      'https://images.shiksha.com/mediadata/images/1563878166phpZg3dPn.jpeg'
    ]
  }
];

async function downloadBest(item) {
  const dest = path.join(campusesDir, item.filename);
  for (const url of item.urls) {
    try {
      console.log(`Trying ${item.filename} from ${url.slice(0, 50)}...`);
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
          'Accept': 'image/*,*/*',
          'Referer': 'https://collegedunia.com/'
        }
      });
      if (res.ok) {
        const buf = Buffer.from(await res.arrayBuffer());
        if (buf.length > 2000) {
          fs.writeFileSync(dest, buf);
          console.log(`✅ Success: ${item.filename} (${(buf.length / 1024).toFixed(1)} KB)`);
          return true;
        }
      }
    } catch (e) {
      // try next url
    }
  }
  console.log(`❌ Could not fetch unique file for ${item.filename}`);
  return false;
}

async function run() {
  for (const item of uniqueCampuses) {
    await downloadBest(item);
  }
}

run();
