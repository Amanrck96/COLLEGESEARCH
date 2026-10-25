const https = require('https');
const fs = require('fs');
const path = require('path');

// List of famous authentic Indian college campus architecture photos on Wikimedia Commons
const campusSources = [
  {
    name: 'campus_iit_kanpur.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/IITK_Main_Building.jpg/800px-IITK_Main_Building.jpg'
  },
  {
    name: 'campus_iit_kharagpur.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/IIT_Kharagpur_Main_Building.jpg/800px-IIT_Kharagpur_Main_Building.jpg'
  },
  {
    name: 'campus_iit_madras.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IIT_Madras_Heritage_Centre.jpg/800px-IIT_Madras_Heritage_Centre.jpg'
  },
  {
    name: 'campus_iit_guwahati.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Administrative_Building_of_IIT_Guwahati.jpg/800px-Administrative_Building_of_IIT_Guwahati.jpg'
  },
  {
    name: 'campus_iit_roorkee.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Main_Building_IIT_Roorkee.jpg/800px-Main_Building_IIT_Roorkee.jpg'
  },
  {
    name: 'campus_iit_bhu.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/IIT_%28BHU%29_Varanasi_Main_Entrance.jpg/800px-IIT_%28BHU%29_Varanasi_Main_Entrance.jpg'
  },
  {
    name: 'campus_iit_hyderabad.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/IIT_Hyderabad_Academic_Block_A.jpg/800px-IIT_Hyderabad_Academic_Block_A.jpg'
  },
  {
    name: 'campus_iit_indore.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Abhinandan_Bhavan_-_IIT_Indore.jpg/800px-Abhinandan_Bhavan_-_IIT_Indore.jpg'
  },
  {
    name: 'campus_iit_gandhinagar.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/IITGN_Academic_Block.jpg/800px-IITGN_Academic_Block.jpg'
  },
  {
    name: 'campus_iit_jodhpur.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/IIT_Jodhpur_Main_Campus.jpg/800px-IIT_Jodhpur_Main_Campus.jpg'
  },
  {
    name: 'campus_nit_trichy.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Admin_block_NITT.JPG/800px-Admin_block_NITT.JPG'
  },
  {
    name: 'campus_nit_surathkal.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/NITK_Main_Building.jpg/800px-NITK_Main_Building.jpg'
  },
  {
    name: 'campus_nit_warangal.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/NIT_Warangal_main_building.jpg/800px-NIT_Warangal_main_building.jpg'
  },
  {
    name: 'campus_nit_calicut.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/NIT_Calicut_Administrative_Block.jpg/800px-NIT_Calicut_Administrative_Block.jpg'
  },
  {
    name: 'campus_nit_rourkela.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/NIT_Rourkela_Main_Building.jpg/800px-NIT_Rourkela_Main_Building.jpg'
  },
  {
    name: 'campus_nit_kurukshetra.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/NIT_Kurukshetra_Admin_Block.jpg/800px-NIT_Kurukshetra_Admin_Block.jpg'
  },
  {
    name: 'campus_nit_silchar.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/NIT_Silchar_Administrative_Building.jpg/800px-NIT_Silchar_Administrative_Building.jpg'
  },
  {
    name: 'campus_iim_ahmedabad.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/IIM_Ahmedabad_Louis_Kahn_Plaza.jpg/800px-IIM_Ahmedabad_Louis_Kahn_Plaza.jpg'
  },
  {
    name: 'campus_iim_calcutta.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/IIM_Calcutta_Campus.jpg/800px-IIM_Calcutta_Campus.jpg'
  },
  {
    name: 'campus_iim_lucknow.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/IIM_Lucknow_Campus.jpg/800px-IIM_Lucknow_Campus.jpg'
  },
  {
    name: 'campus_iim_kozhikode.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/IIM_Kozhikode_Campus.jpg/800px-IIM_Kozhikode_Campus.jpg'
  },
  {
    name: 'campus_iim_indore.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/IIM_Indore_Academic_Block.jpg/800px-IIM_Indore_Academic_Block.jpg'
  },
  {
    name: 'campus_bits_pilani.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Clock_Tower%2C_BITS_Pilani.jpg/800px-Clock_Tower%2C_BITS_Pilani.jpg'
  },
  {
    name: 'campus_anna_university.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/CEG_Main_Building%2C_Anna_University.jpg/800px-CEG_Main_Building%2C_Anna_University.jpg'
  },
  {
    name: 'campus_jadavpur_university.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Aurobindo_Bhavan%2C_Jadavpur_University.jpg/800px-Aurobindo_Bhavan%2C_Jadavpur_University.jpg'
  },
  {
    name: 'campus_delhi_university.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Faculty_of_Arts%2C_University_of_Delhi.jpg/800px-Faculty_of_Arts%2C_University_of_Delhi.jpg'
  },
  {
    name: 'campus_banaras_hindu_university.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/VT_BHU_Varanasi.jpg/800px-VT_BHU_Varanasi.jpg'
  },
  {
    name: 'campus_aligarh_muslim_university.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Strachey_Hall%2C_AMU.jpg/800px-Strachey_Hall%2C_AMU.jpg'
  },
  {
    name: 'campus_osmania_university.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Arts_College%2C_Osmania_University.jpg/800px-Arts_College%2C_Osmania_University.jpg'
  },
  {
    name: 'campus_andhra_university.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Andhra_University_College_of_Arts_and_Commerce.jpg/800px-Andhra_University_College_of_Arts_and_Commerce.jpg'
  },
  {
    name: 'campus_calcutta_university.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/University_of_Calcutta_College_Street_Campus.jpg/800px-University_of_Calcutta_College_Street_Campus.jpg'
  },
  {
    name: 'campus_madras_university.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/University_of_Madras_Senate_House.jpg/800px-University_of_Madras_Senate_House.jpg'
  },
  {
    name: 'campus_panjab_university.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gandhi_Bhawan_Panjab_University_Chandigarh.jpg/800px-Gandhi_Bhawan_Panjab_University_Chandigarh.jpg'
  },
  {
    name: 'campus_rajasthan_university.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/University_of_Rajasthan_Administrative_Block.jpg/800px-University_of_Rajasthan_Administrative_Block.jpg'
  },
  {
    name: 'campus_kerala_university.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/University_of_Kerala_Senate_House_Campus.jpg/800px-University_of_Kerala_Senate_House_Campus.jpg'
  },
  {
    name: 'campus_gujarat_university.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Gujarat_University_Tower.jpg/800px-Gujarat_University_Tower.jpg'
  },
  {
    name: 'campus_st_xaviers_mumbai.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/St._Xavier%27s_College%2C_Mumbai.jpg/800px-St._Xavier%27s_College%2C_Mumbai.jpg'
  },
  {
    name: 'campus_presidency_kolkata.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Presidency_University_Kolkata_Main_Building.jpg/800px-Presidency_University_Kolkata_Main_Building.jpg'
  },
  {
    name: 'campus_fergusson_pune.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Fergusson_College_Main_Building.jpg/800px-Fergusson_College_Main_Building.jpg'
  },
  {
    name: 'campus_st_stephens_delhi.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/St._Stephen%27s_College_Delhi.jpg/800px-St._Stephen%27s_College_Delhi.jpg'
  },
  {
    name: 'campus_loyola_chennai.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Loyola_College_Chennai_Main_Building.jpg/800px-Loyola_College_Chennai_Main_Building.jpg'
  },
  {
    name: 'campus_christ_bangalore.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Christ_University_Central_Campus_Bengaluru.jpg/800px-Christ_University_Central_Campus_Bengaluru.jpg'
  },
  {
    name: 'campus_symbiosis_pune.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Symbiosis_International_University_Lavale.jpg/800px-Symbiosis_International_University_Lavale.jpg'
  },
  {
    name: 'campus_manipal_academy.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/MAHE_Manipal_Campus.jpg/800px-MAHE_Manipal_Campus.jpg'
  },
  {
    name: 'campus_amity_noida.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Amity_University_Noida_Campus.jpg/800px-Amity_University_Noida_Campus.jpg'
  },
  {
    name: 'campus_srm_chennai.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/SRM_IST_Kattankulathur_Campus.jpg/800px-SRM_IST_Kattankulathur_Campus.jpg'
  },
  {
    name: 'campus_vit_vellore.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/VIT_University_Vellore_Technology_Tower.jpg/800px-VIT_University_Vellore_Technology_Tower.jpg'
  },
  {
    name: 'campus_thapar_patiala.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Thapar_Institute_Patiala_Main_Building.jpg/800px-Thapar_Institute_Patiala_Main_Building.jpg'
  },
  {
    name: 'campus_dtu_delhi.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Delhi_Technological_University_Admin_Block.jpg/800px-Delhi_Technological_University_Admin_Block.jpg'
  },
  {
    name: 'campus_nsut_delhi.jpg',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Netaji_Subhas_University_of_Technology_Admin_Block.jpg/800px-Netaji_Subhas_University_of_Technology_Admin_Block.jpg'
  }
];

const targetDir = path.join(__dirname, '..', 'public', 'images', 'campuses');

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const req = https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        fs.unlinkSync(dest);
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        file.close();
        if (fs.existsSync(dest)) fs.unlinkSync(dest);
        return reject(new Error(`Status ${res.statusCode} for ${url}`));
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    });
    req.on('error', (err) => {
      if (fs.existsSync(dest)) fs.unlinkSync(dest);
      reject(err);
    });
  });
}

async function run() {
  console.log(`Downloading ${campusSources.length} premier campus building photos...`);
  let success = 0;
  for (const src of campusSources) {
    const dest = path.join(targetDir, src.name);
    try {
      await download(src.url, dest);
      console.log(`[OK] ${src.name}`);
      success++;
    } catch (e) {
      console.log(`[FAIL] ${src.name}: ${e.message}`);
    }
  }
  console.log(`\nCompleted! Successfully downloaded ${success}/${campusSources.length} campus architecture photos.`);
}

run();
