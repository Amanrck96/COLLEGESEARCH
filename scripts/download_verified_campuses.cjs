const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const campusesDir = path.join(__dirname, '../public/images/campuses');
if (!fs.existsSync(campusesDir)) {
  fs.mkdirSync(campusesDir, { recursive: true });
}

// Reliable direct URLs for authentic Indian university/college buildings
const targets = [
  {
    name: 'iiit_bangalore_campus.jpg',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/IIIT-B_Front_View.jpg?width=1000'
  },
  {
    name: 'cbsms_bangalore.jpg',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Central_College_Bangalore_2013.jpg?width=1000'
  },
  {
    name: 'bcu_central_college.jpg',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Central_College_Bangalore_1.JPG?width=1000'
  },
  {
    name: 'sindhi_college_bangalore.jpg',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sindhi_College_Bangalore.jpg?width=1000'
  },
  {
    name: 'iim_bangalore.jpg',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/IIM_Bangalore_campus_building.jpg?width=1000'
  },
  {
    name: 'rvce_bangalore.jpg',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/RVCE_main_building.jpg?width=1000'
  },
  {
    name: 'bmsce_bangalore.jpg',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/BMSCE_Campus.jpg?width=1000'
  },
  {
    name: 'msrit_bangalore.jpg',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/MSRIT_Campus.JPG?width=1000'
  },
  {
    name: 'pes_university_bangalore.jpg',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/PES_University_Campus.jpg?width=1000'
  },
  {
    name: 'christ_university_bangalore.jpg',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Christ_University_Central_Campus.jpg?width=1000'
  },
  {
    name: 'nitk_surathkal.jpg',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/NITK_Surathkal_Main_Building.jpg?width=1000'
  },
  {
    name: 'iim_ahmedabad.jpg',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/IIMA_LVK.jpg?width=1000'
  },
  {
    name: 'iim_calcutta.jpg',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/IIM_Calcutta_Admin_Building.jpg?width=1000'
  },
  {
    name: 'iim_lucknow.jpg',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/IIM_Lucknow_Samadhan.jpg?width=1000'
  },
  {
    name: 'iim_kozhikode.jpg',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/IIM_Kozhikode_campus.jpg?width=1000'
  },
  {
    name: 'iim_indore.jpg',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/IIM_Indore_Campus.jpg?width=1000'
  },
  {
    name: 'iit_madras.jpg',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/IIT_Madras_Heritage_Centre.jpg?width=1000'
  },
  {
    name: 'anna_university_chennai.jpg',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Anna_University_College_of_Engineering%2C_Guindy_campus.jpg?width=1000'
  },
  {
    name: 'psg_tech_coimbatore.jpg',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/PSG_College_of_Technology_Main_Building.jpg?width=1000'
  },
  {
    name: 'coep_tech_pune.jpg',
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/COEP_Main_Building.jpg?width=1000'
  }
];

function downloadOne(target) {
  return new Promise((resolve) => {
    const dest = path.join(campusesDir, target.name);
    
    function fetchUrl(url, redirectCount = 0) {
      if (redirectCount > 5) {
        console.log(`❌ ${target.name}: Too many redirects`);
        return resolve(false);
      }
      
      const client = url.startsWith('https') ? https : http;
      const parsedUrl = new URL(url);
      
      const req = client.get({
        hostname: parsedUrl.hostname,
        path: parsedUrl.pathname + parsedUrl.search,
        headers: {
          'User-Agent': 'CollegeSearchBot/2.0 (https://collegesearch.local; dev@collegesearch.local) Node.js/20',
          'Accept': 'image/jpeg,image/png,image/webp,image/*,*/*'
        }
      }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          let nextUrl = res.headers.location;
          if (!nextUrl.startsWith('http')) {
            nextUrl = parsedUrl.protocol + '//' + parsedUrl.host + nextUrl;
          }
          return fetchUrl(nextUrl, redirectCount + 1);
        }
        
        if (res.statusCode !== 200) {
          console.log(`❌ ${target.name}: HTTP ${res.statusCode}`);
          return resolve(false);
        }
        
        const fileStream = fs.createWriteStream(dest);
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          const stat = fs.statSync(dest);
          if (stat.size > 1000) {
            console.log(`✅ ${target.name} (${(stat.size / 1024).toFixed(1)} KB)`);
            resolve(true);
          } else {
            console.log(`⚠️ ${target.name}: File too small (${stat.size} bytes)`);
            fs.unlinkSync(dest);
            resolve(false);
          }
        });
      });
      
      req.on('error', (err) => {
        console.log(`❌ ${target.name}: ${err.message}`);
        resolve(false);
      });
    }
    
    fetchUrl(target.url);
  });
}

async function start() {
  console.log(`Downloading ${targets.length} campus buildings...`);
  for (const t of targets) {
    await downloadOne(t);
    // Be polite with rate limiting
    await new Promise(r => setTimeout(r, 600));
  }
  console.log('Finished downloading batch.');
}

start();
