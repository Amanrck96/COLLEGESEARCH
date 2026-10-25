const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const campusesDir = path.join(__dirname, '../public/images/campuses');
if (!fs.existsSync(campusesDir)) {
  fs.mkdirSync(campusesDir, { recursive: true });
}

const downloads = [
  {
    filename: 'iiit_bangalore_campus.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/IIIT-B_Front_View.jpg/1200px-IIIT-B_Front_View.jpg'
  },
  {
    filename: 'cbsms_bangalore.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Central_College_Bangalore_2013.jpg/1280px-Central_College_Bangalore_2013.jpg'
  },
  {
    filename: 'bcu_central_college.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Central_College_Bangalore_1.JPG/1280px-Central_College_Bangalore_1.JPG'
  },
  {
    filename: 'sindhi_college_bangalore.jpg',
    url: 'https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/8563/2019/3/8/Campus%20View%20of%20Sindhi%20College%20Bangalore_Campus-View.png'
  },
  {
    filename: 'bti_bangalore.jpg',
    url: 'https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/4389/2018/8/20/Campus-view-Bangalore-Technological-Institute-Bangalore_Campus-View.jpg'
  },
  {
    filename: 'rcm_bangalore.jpg',
    url: 'https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/4398/2019/8/31/Campus-View-of-Regional-College-of-Management-Bangalore_Campus-View.JPG'
  },
  {
    filename: 'rathinam_campus.jpg',
    url: 'https://images.shiksha.com/mediadata/images/1649068338phpW6eSFj.jpeg'
  },
  {
    filename: 'iim_bangalore.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/IIM_Bangalore_campus_building.jpg/1280px-IIM_Bangalore_campus_building.jpg'
  },
  {
    filename: 'rvce_bangalore.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/RVCE_main_building.jpg/1280px-RVCE_main_building.jpg'
  },
  {
    filename: 'bmsce_bangalore.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/BMSCE_Campus.jpg/1280px-BMSCE_Campus.jpg'
  },
  {
    filename: 'msrit_bangalore.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/MSRIT_Campus.JPG/1280px-MSRIT_Campus.JPG'
  },
  {
    filename: 'pes_university_bangalore.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/PES_University_Campus.jpg/1280px-PES_University_Campus.jpg'
  },
  {
    filename: 'christ_university_bangalore.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Christ_University_Central_Campus.jpg/1280px-Christ_University_Central_Campus.jpg'
  },
  {
    filename: 'sjce_mysore.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/SJCE_Mysore.jpg/1280px-SJCE_Mysore.jpg'
  },
  {
    filename: 'nitk_surathkal.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/NITK_Surathkal_Main_Building.jpg/1280px-NITK_Surathkal_Main_Building.jpg'
  },
  {
    filename: 'iim_ahmedabad.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/IIMA_LVK.jpg/1280px-IIMA_LVK.jpg'
  },
  {
    filename: 'iim_calcutta.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/IIM_Calcutta_Admin_Building.jpg/1280px-IIM_Calcutta_Admin_Building.jpg'
  },
  {
    filename: 'iim_lucknow.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/IIM_Lucknow_Samadhan.jpg/1280px-IIM_Lucknow_Samadhan.jpg'
  },
  {
    filename: 'iim_kozhikode.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/IIM_Kozhikode_campus.jpg/1280px-IIM_Kozhikode_campus.jpg'
  },
  {
    filename: 'iim_indore.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/IIM_Indore_Campus.jpg/1280px-IIM_Indore_Campus.jpg'
  },
  {
    filename: 'iit_madras.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IIT_Madras_Heritage_Centre.jpg/1280px-IIT_Madras_Heritage_Centre.jpg'
  },
  {
    filename: 'anna_university_chennai.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Anna_University_College_of_Engineering%2C_Guindy_campus.jpg/1280px-Anna_University_College_of_Engineering%2C_Guindy_campus.jpg'
  },
  {
    filename: 'psg_tech_coimbatore.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/PSG_College_of_Technology_Main_Building.jpg/1280px-PSG_College_of_Technology_Main_Building.jpg'
  },
  {
    filename: 'coep_tech_pune.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/COEP_Main_Building.jpg/1280px-COEP_Main_Building.jpg'
  }
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const client = url.startsWith('https') ? https : http;
    
    const req = client.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8'
      },
      timeout: 10000
    }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (!redirectUrl.startsWith('http')) {
          const parsed = new URL(url);
          redirectUrl = parsed.protocol + '//' + parsed.host + redirectUrl;
        }
        file.close();
        if (fs.existsSync(dest)) fs.unlinkSync(dest);
        return resolve(downloadFile(redirectUrl, dest));
      }
      
      if (res.statusCode !== 200) {
        file.close();
        if (fs.existsSync(dest)) fs.unlinkSync(dest);
        return reject(new Error(`Status ${res.statusCode}`));
      }
      
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve(true);
      });
    });

    req.on('error', err => {
      file.close();
      if (fs.existsSync(dest)) fs.unlinkSync(dest);
      reject(err);
    });

    req.on('timeout', () => {
      req.destroy();
      file.close();
      if (fs.existsSync(dest)) fs.unlinkSync(dest);
      reject(new Error('Timeout'));
    });
  });
}

async function run() {
  console.log(`Starting download of ${downloads.length} verified campus images...`);
  for (const item of downloads) {
    const dest = path.join(campusesDir, item.filename);
    try {
      await downloadFile(item.url, dest);
      const stat = fs.statSync(dest);
      console.log(`✅ Downloaded ${item.filename} (${(stat.size / 1024).toFixed(1)} KB)`);
    } catch (err) {
      console.log(`❌ Failed ${item.filename}: ${err.message}`);
    }
  }
}

run();
