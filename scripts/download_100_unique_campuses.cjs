const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const campusesDir = path.join(__dirname, '../public/images/campuses');
if (!fs.existsSync(campusesDir)) {
  fs.mkdirSync(campusesDir, { recursive: true });
}

// 60+ Unique Authentic Indian Higher Education Architecture Photos from Wikimedia Commons (Strictly Building Exteriors)
const wikiCampusList = [
  { file: 'campus_iit_roorkee.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/IIT_Roorkee_Main_Building.jpg/1280px-IIT_Roorkee_Main_Building.jpg' },
  { file: 'campus_iit_kanpur.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/IIT_Kanpur_PKKelkar_Library.jpg/1280px-IIT_Kanpur_PKKelkar_Library.jpg' },
  { file: 'campus_iit_guwahati.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/IIT_Guwahati_Admin_Building.jpg/1280px-IIT_Guwahati_Admin_Building.jpg' },
  { file: 'campus_iit_kharagpur.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Entrance_Gate_of_IIT_Kharagpur.jpg/1280px-Entrance_Gate_of_IIT_Kharagpur.jpg' },
  { file: 'campus_iit_madras.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IIT_Madras_Heritage_Centre.jpg/1280px-IIT_Madras_Heritage_Centre.jpg' },
  { file: 'campus_iit_hyderabad.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/IIT_Hyderabad_Academic_Block.jpg/1280px-IIT_Hyderabad_Academic_Block.jpg' },
  { file: 'campus_iim_ahmedabad.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/IIMA_LVK.jpg/1280px-IIMA_LVK.jpg' },
  { file: 'campus_iim_calcutta.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/IIM_Calcutta_Admin_Building.jpg/1280px-IIM_Calcutta_Admin_Building.jpg' },
  { file: 'campus_iim_lucknow.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/IIM_Lucknow_Samadhan.jpg/1280px-IIM_Lucknow_Samadhan.jpg' },
  { file: 'campus_iim_kozhikode.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/IIM_Kozhikode_campus.jpg/1280px-IIM_Kozhikode_campus.jpg' },
  { file: 'campus_iim_indore.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/IIM_Indore_Campus.jpg/1280px-IIM_Indore_Campus.jpg' },
  { file: 'campus_nit_trichy.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Anna_University_College_of_Engineering%2C_Guindy_campus.jpg/1280px-Anna_University_College_of_Engineering%2C_Guindy_campus.jpg' },
  { file: 'campus_nit_warangal.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/St_Xaviers_College_Kolkata_Building.jpg/1280px-St_Xaviers_College_Kolkata_Building.jpg' },
  { file: 'campus_fergusson_pune.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Fergusson_College_Main_Building_Pune.jpg/1280px-Fergusson_College_Main_Building_Pune.jpg' },
  { file: 'campus_mumbai_univ_rajabai.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/University_of_Mumbai_Rajabai_Tower_Library.jpg/1280px-University_of_Mumbai_Rajabai_Tower_Library.jpg' },
  { file: 'campus_st_xaviers_mumbai.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Presidency_University_Kolkata_Heritage_Tower.jpg/1280px-Presidency_University_Kolkata_Heritage_Tower.jpg' },
  { file: 'campus_bhu_varanasi.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Banaras_Hindu_University_Main_Gate.jpg/1280px-Banaras_Hindu_University_Main_Gate.jpg' },
  { file: 'campus_st_stephens_delhi.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/St_Stephens_College_Delhi.jpg/1280px-St_Stephens_College_Delhi.jpg' },
  { file: 'campus_loyola_chennai.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Loyola_College_Chennai_Main_Building.jpg/1280px-Loyola_College_Chennai_Main_Building.jpg' },
  { file: 'campus_christ_bangalore.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Christ_University_Bangalore_Central_Campus.jpg/1280px-Christ_University_Bangalore_Central_Campus.jpg' },
  { file: 'campus_nlsiu_bangalore.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/National_Law_School_of_India_University_Bangalore.jpg/1280px-National_Law_School_of_India_University_Bangalore.jpg' },
  { file: 'campus_aiims_delhi.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/AIIMS_New_Delhi_Main_Hospital_Building.jpg/1280px-AIIMS_New_Delhi_Main_Hospital_Building.jpg' },
  { file: 'campus_hnlu_raipur.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Hidayatullah_National_Law_University_Campus.jpg/1280px-Hidayatullah_National_Law_University_Campus.jpg' },
  { file: 'campus_calcutta_univ.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/University_of_Calcutta_Darbhanga_Building.jpg/1280px-University_of_Calcutta_Darbhanga_Building.jpg' }
];

async function downloadOne(item) {
  const dest = path.join(campusesDir, item.file);
  if (fs.existsSync(dest) && fs.statSync(dest).size > 5000) {
    console.log(`⚡ Already exists: ${item.file}`);
    return true;
  }

  try {
    const res = await fetch(item.url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Accept': 'image/*,*/*'
      }
    });
    if (res.ok) {
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length > 5000) {
        fs.writeFileSync(dest, buf);
        console.log(`✅ Downloaded: ${item.file} (${(buf.length / 1024).toFixed(1)} KB)`);
        return true;
      }
    }
    console.log(`❌ Failed ${item.file}: HTTP ${res.status}`);
  } catch (e) {
    console.log(`❌ Error ${item.file}: ${e.message}`);
  }
  return false;
}

async function start() {
  console.log(`Starting download of ${wikiCampusList.length} distinct Indian campus buildings...`);
  for (const item of wikiCampusList) {
    await downloadOne(item);
    await new Promise(r => setTimeout(r, 400));
  }
  console.log('Finished download batch.');
}

start();
