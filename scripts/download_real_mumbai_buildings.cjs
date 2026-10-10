const fs = require('fs');
const path = require('path');

const campusesDir = path.join(__dirname, '../public/images/campuses');

const targets = [
  {
    name: 'valia_andheri.jpg',
    urls: [
      'https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/7882/2019/5/28/Campus View of Cosmopolitans Valia Chhaganlal Laljibhai College of Commerce and Valia Lilavantiben Chhaganlal College of Arts Mumbai_Campus-View.jpg',
      'https://image-static.collegedunia.com/public/college_data/images/appImage/14371_Valia_College_of_Commerce_and_Arts_New.jpg',
      'https://images.shiksha.com/mediadata/images/1547468165phpR1bC5U.jpeg'
    ]
  },
  {
    name: 'bunts_sangha_kurla.jpg',
    urls: [
      'https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/8537/2019/3/8/Campus%20View%20of%20Bunts%20Sanghas%20Higher%20Education%20Institute%20Mumbai_Campus-View.png',
      'https://image-static.collegedunia.com/public/college_data/images/appImage/1508240507cover.jpg',
      'https://images.shiksha.com/mediadata/images/1568285559php4wXq6j.jpeg'
    ]
  },
  {
    name: 'sailee_borivali.jpg',
    urls: [
      'https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/17215/2021/10/26/Campus-View-of-Sailee-Degree-College-Mumbai_Campus-View.jpg',
      'https://image-static.collegedunia.com/public/college_data/images/appImage/25667_Sailee_New.jpg'
    ]
  },
  {
    name: 'svkm_upg_vileparle.jpg',
    urls: [
      'https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/6911/2019/3/1/Campus-View-of-Usha-Pravin-Gandhi-College-of-Management-Mumbai_Campus-View.jpg',
      'https://image-static.collegedunia.com/public/college_data/images/appImage/14605_UPG_New.jpg'
    ]
  },
  {
    name: 'gnims_matunga.jpg',
    urls: [
      'https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/492/2018/8/20/Campus-view-Guru-Nanak-Institute-of-Management-Studies-Mumbai_Campus-View.jpg',
      'https://image-static.collegedunia.com/public/college_data/images/appImage/14299_GNIMS_New.jpg'
    ]
  },
  {
    name: 'nagindas_khandwala_malad.jpg',
    urls: [
      'https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/7889/2019/2/23/Campus View of Nagindas Khandwala College Mumbai_Campus-View.jpg',
      'https://image-static.collegedunia.com/public/college_data/images/appImage/14878_NKC_New.jpg'
    ]
  },
  {
    name: 'svims_wadala.jpg',
    urls: [
      'https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/14282/2019/3/8/Campus%20View%20of%20Sir%20M%20Visvesvaraya%20Institute%20of%20Management%20Studies%20and%20Research%20Mumbai_Campus-View.jpg',
      'https://image-static.collegedunia.com/public/college_data/images/appImage/14856_SVIMS_New.jpg'
    ]
  },
  {
    name: 'spdt_tibrewala_andheri.jpg',
    urls: [
      'https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/7891/2019/3/1/Campus-View-of-Smt-Parmeshwaridevi-Durgadutt-Tibrewala-Lions-Juhu-College-of-Arts-Commerce-and-Science-Mumbai_Campus-View.jpg',
      'https://image-static.collegedunia.com/public/college_data/images/appImage/14352_SPDT_New.jpg'
    ]
  }
];

async function downloadBest(item) {
  const dest = path.join(campusesDir, item.name);
  for (const u of item.urls) {
    try {
      console.log(`Fetching ${item.name} from ${u.slice(0, 60)}...`);
      const res = await fetch(u, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
          'Accept': 'image/*,*/*',
          'Referer': 'https://www.google.com/'
        }
      });
      if (res.ok) {
        const buf = Buffer.from(await res.arrayBuffer());
        if (buf.length > 2000) {
          fs.writeFileSync(dest, buf);
          console.log(`✅ Success: ${item.name} (${(buf.length / 1024).toFixed(1)} KB)`);
          return true;
        }
      }
    } catch(e) {}
  }
  console.log(`❌ Failed: ${item.name}`);
  return false;
}

async function main() {
  for (const item of targets) {
    await downloadBest(item);
  }
}

main();
