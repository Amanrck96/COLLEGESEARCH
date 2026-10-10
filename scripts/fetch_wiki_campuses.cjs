const https = require('https');
const fs = require('fs');
const path = require('path');

const fileTitles = [
  { filename: 'campus_iit_kanpur.jpg', wikiTitle: 'File:IITK_Main_Building.jpg' },
  { filename: 'campus_iit_kharagpur.jpg', wikiTitle: 'File:IIT_Kharagpur_Main_Building.jpg' },
  { filename: 'campus_iit_madras.jpg', wikiTitle: 'File:IIT_Madras_Heritage_Centre.jpg' },
  { filename: 'campus_iit_guwahati.jpg', wikiTitle: 'File:Administrative_Building_of_IIT_Guwahati.jpg' },
  { filename: 'campus_iit_roorkee.jpg', wikiTitle: 'File:Main_Building_IIT_Roorkee.jpg' },
  { filename: 'campus_iit_bhu.jpg', wikiTitle: 'File:IIT_(BHU)_Varanasi_Main_Entrance.jpg' },
  { filename: 'campus_iit_hyderabad.jpg', wikiTitle: 'File:Academic_Block_A,_IIT_Hyderabad.jpg' },
  { filename: 'campus_iit_indore.jpg', wikiTitle: 'File:Abhinandan_Bhavan_-_IIT_Indore.jpg' },
  { filename: 'campus_iit_gandhinagar.jpg', wikiTitle: 'File:IITGN_Academic_Block.jpg' },
  { filename: 'campus_iit_jodhpur.jpg', wikiTitle: 'File:IIT_Jodhpur_Main_Building.jpg' },
  { filename: 'campus_nit_trichy.jpg', wikiTitle: 'File:Admin_block_NITT.JPG' },
  { filename: 'campus_nit_surathkal.jpg', wikiTitle: 'File:NITK_Main_Building.jpg' },
  { filename: 'campus_nit_warangal.jpg', wikiTitle: 'File:NIT_Warangal_main_building.jpg' },
  { filename: 'campus_nit_calicut.jpg', wikiTitle: 'File:NIT_Calicut_Administrative_Block.jpg' },
  { filename: 'campus_nit_rourkela.jpg', wikiTitle: 'File:NIT_Rourkela_Main_Building.jpg' },
  { filename: 'campus_nit_kurukshetra.jpg', wikiTitle: 'File:NIT_Kurukshetra_Admin_Block.jpg' },
  { filename: 'campus_nit_silchar.jpg', wikiTitle: 'File:NIT_Silchar_Administrative_Building.jpg' },
  { filename: 'campus_iim_ahmedabad.jpg', wikiTitle: 'File:IIM_Ahmedabad_Louis_Kahn_Plaza.jpg' },
  { filename: 'campus_iim_calcutta.jpg', wikiTitle: 'File:IIM_Calcutta_Campus.jpg' },
  { filename: 'campus_iim_lucknow.jpg', wikiTitle: 'File:IIM_Lucknow_Campus.jpg' },
  { filename: 'campus_iim_kozhikode.jpg', wikiTitle: 'File:IIM_Kozhikode_Campus.jpg' },
  { filename: 'campus_iim_indore.jpg', wikiTitle: 'File:IIM_Indore_Academic_Block.jpg' },
  { filename: 'campus_bits_pilani.jpg', wikiTitle: 'File:Clock_Tower,_BITS_Pilani.jpg' },
  { filename: 'campus_anna_university.jpg', wikiTitle: 'File:CEG_Main_Building,_Anna_University.jpg' },
  { filename: 'campus_jadavpur_university.jpg', wikiTitle: 'File:Aurobindo_Bhavan,_Jadavpur_University.jpg' },
  { filename: 'campus_delhi_university.jpg', wikiTitle: 'File:Faculty_of_Arts,_University_of_Delhi.jpg' },
  { filename: 'campus_banaras_hindu_university.jpg', wikiTitle: 'File:VT_BHU_Varanasi.jpg' },
  { filename: 'campus_aligarh_muslim_university.jpg', wikiTitle: 'File:Strachey_Hall,_AMU.jpg' },
  { filename: 'campus_osmania_university.jpg', wikiTitle: 'File:Arts_College,_Osmania_University.jpg' },
  { filename: 'campus_andhra_university.jpg', wikiTitle: 'File:Andhra_University_College_of_Arts_and_Commerce.jpg' },
  { filename: 'campus_calcutta_university.jpg', wikiTitle: 'File:University_of_Calcutta_College_Street_Campus.jpg' },
  { filename: 'campus_madras_university.jpg', wikiTitle: 'File:University_of_Madras_Senate_House.jpg' },
  { filename: 'campus_panjab_university.jpg', wikiTitle: 'File:Gandhi_Bhawan_Panjab_University_Chandigarh.jpg' },
  { filename: 'campus_rajasthan_university.jpg', wikiTitle: 'File:University_of_Rajasthan_Administrative_Block.jpg' },
  { filename: 'campus_kerala_university.jpg', wikiTitle: 'File:University_of_Kerala_Senate_House_Campus.jpg' },
  { filename: 'campus_gujarat_university.jpg', wikiTitle: 'File:Gujarat_University_Tower.jpg' },
  { filename: 'campus_st_xaviers_mumbai.jpg', wikiTitle: 'File:St._Xavier\'s_College,_Mumbai.jpg' },
  { filename: 'campus_presidency_kolkata.jpg', wikiTitle: 'File:Presidency_University_Kolkata_Main_Building.jpg' },
  { filename: 'campus_fergusson_pune.jpg', wikiTitle: 'File:Fergusson_College_Main_Building.jpg' },
  { filename: 'campus_st_stephens_delhi.jpg', wikiTitle: 'File:St._Stephen\'s_College_Delhi.jpg' },
  { filename: 'campus_loyola_chennai.jpg', wikiTitle: 'File:Loyola_College_Chennai_Main_Building.jpg' },
  { filename: 'campus_christ_bangalore.jpg', wikiTitle: 'File:Christ_University_Central_Campus_Bengaluru.jpg' },
  { filename: 'campus_symbiosis_pune.jpg', wikiTitle: 'File:Symbiosis_International_University_Lavale.jpg' },
  { filename: 'campus_manipal_academy.jpg', wikiTitle: 'File:MAHE_Manipal_Campus.jpg' },
  { filename: 'campus_amity_noida.jpg', wikiTitle: 'File:Amity_University_Noida_Campus.jpg' },
  { filename: 'campus_srm_chennai.jpg', wikiTitle: 'File:SRM_IST_Kattankulathur_Campus.jpg' },
  { filename: 'campus_vit_vellore.jpg', wikiTitle: 'File:VIT_University_Vellore_Technology_Tower.jpg' },
  { filename: 'campus_thapar_patiala.jpg', wikiTitle: 'File:Thapar_Institute_Patiala_Main_Building.jpg' },
  { filename: 'campus_dtu_delhi.jpg', wikiTitle: 'File:Delhi_Technological_University_Admin_Block.jpg' },
  { filename: 'campus_nsut_delhi.jpg', wikiTitle: 'File:Netaji_Subhas_University_of_Technology_Admin_Block.jpg' }
];

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: { 'User-Agent': 'CollegeSearchBot/2.0 (contact@collegesearch.org)' }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, {
      headers: { 'User-Agent': 'CollegeSearchBot/2.0 (contact@collegesearch.org)' }
    }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        if (fs.existsSync(dest)) fs.unlinkSync(dest);
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        file.close();
        if (fs.existsSync(dest)) fs.unlinkSync(dest);
        return reject(new Error(`Status ${res.statusCode}`));
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      if (fs.existsSync(dest)) fs.unlinkSync(dest);
      reject(err);
    });
  });
}

const targetDir = path.join(__dirname, '..', 'public', 'images', 'campuses');

async function main() {
  console.log("Resolving direct Wikimedia image URLs via API...");
  let count = 0;
  for (const item of fileTitles) {
    const dest = path.join(targetDir, item.filename);
    if (fs.existsSync(dest) && fs.statSync(dest).size > 5000) {
      console.log(`[EXISTS] ${item.filename}`);
      count++;
      continue;
    }

    const apiUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(item.wikiTitle)}&prop=imageinfo&iiprop=url&iiurlwidth=1000&format=json`;
    try {
      const data = await fetchJson(apiUrl);
      const pages = data.query && data.query.pages ? Object.values(data.query.pages) : [];
      if (pages.length > 0 && pages[0].imageinfo && pages[0].imageinfo.length > 0) {
        const imgInfo = pages[0].imageinfo[0];
        const downloadUrl = imgInfo.thumburl || imgInfo.url;
        console.log(`Downloading ${item.filename} from ${downloadUrl}...`);
        await downloadFile(downloadUrl, dest);
        console.log(`[SUCCESS] ${item.filename}`);
        count++;
      } else {
        console.log(`[NOT FOUND IN API] ${item.wikiTitle}`);
      }
    } catch (e) {
      console.log(`[ERROR] ${item.filename}: ${e.message}`);
    }
  }
  console.log(`Finished. Available campus images now: ${count}`);
}

main();
