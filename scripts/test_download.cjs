const fs = require('fs');
const path = require('path');

const campusesDir = path.join(__dirname, '../public/images/campuses');

async function downloadWithFetch(url, filename) {
  const dest = path.join(campusesDir, filename);
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Referer': 'https://www.google.com/'
      }
    });
    if (!res.ok) {
      console.log(`❌ ${filename}: HTTP ${res.status} ${res.statusText}`);
      return false;
    }
    const buffer = Buffer.from(await res.arrayBuffer());
    if (buffer.length < 1000) {
      console.log(`⚠️ ${filename}: Too small (${buffer.length} bytes)`);
      return false;
    }
    fs.writeFileSync(dest, buffer);
    console.log(`✅ Downloaded ${filename} (${(buffer.length / 1024).toFixed(1)} KB)`);
    return true;
  } catch (err) {
    console.log(`❌ ${filename}: ${err.message}`);
    return false;
  }
}

async function main() {
  const list = [
    {
      filename: 'iiit_bangalore_campus.jpg',
      url: 'https://api.educationpost.in/s3-images/1720437464352-iiitb.jpg'
    },
    {
      filename: 'iiit_bangalore_campus2.jpg',
      url: 'https://image-upload.getmycollege.com/new-uploads/college/featured/comprehensive-guide-to-iiit-bangalore-featured-image-534.jpg'
    },
    {
      filename: 'rathinam_campus.jpg',
      url: 'https://images.shiksha.com/mediadata/images/1649068338phpW6eSFj.jpeg'
    },
    {
      filename: 'rcm_bangalore.jpg',
      url: 'https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/4398/2019/8/31/Campus-View-of-Regional-College-of-Management-Bangalore_Campus-View.JPG'
    },
    {
      filename: 'bti_bangalore.jpg',
      url: 'https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/4389/2018/8/20/Campus-view-Bangalore-Technological-Institute-Bangalore_Campus-View.jpg'
    },
    {
      filename: 'sindhi_college_bangalore.jpg',
      url: 'https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/8563/2019/3/8/Campus%20View%20of%20Sindhi%20College%20Bangalore_Campus-View.png'
    },
    {
      filename: 'cbsms_bangalore.jpg',
      url: 'https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/509/2018/8/20/Campus-view-Canara-Bank-School-of-Management-Studies-Bangalore_Campus-View.jpg'
    },
    {
      filename: 'bangalore_university_campus.jpg',
      url: 'https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/502/2018/8/20/Campus-view-Bangalore-University-Bangalore_Campus-View.jpg'
    },
    {
      filename: 'iim_bangalore_campus.jpg',
      url: 'https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/142/2018/8/20/Campus-view-Indian-Institute-of-Management-Bangalore_Campus-View.jpg'
    }
  ];

  for (const item of list) {
    await downloadWithFetch(item.url, item.filename);
  }
}

main();
