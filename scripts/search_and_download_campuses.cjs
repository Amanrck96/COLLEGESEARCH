const https = require('https');
const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', 'public', 'images', 'campuses');

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

const institutionsToFetch = [
  { file: 'campus_iit_kanpur.jpg', query: 'IIT Kanpur main building' },
  { file: 'campus_iit_kharagpur.jpg', query: 'IIT Kharagpur main building' },
  { file: 'campus_iit_madras.jpg', query: 'IIT Madras campus building' },
  { file: 'campus_iit_guwahati.jpg', query: 'IIT Guwahati administrative building' },
  { file: 'campus_iit_roorkee.jpg', query: 'IIT Roorkee main building' },
  { file: 'campus_iit_bhu.jpg', query: 'IIT BHU Varanasi building' },
  { file: 'campus_iit_hyderabad.jpg', query: 'IIT Hyderabad academic block' },
  { file: 'campus_iit_indore.jpg', query: 'IIT Indore campus building' },
  { file: 'campus_iit_gandhinagar.jpg', query: 'IIT Gandhinagar academic' },
  { file: 'campus_iit_jodhpur.jpg', query: 'IIT Jodhpur campus building' },
  { file: 'campus_nit_trichy.jpg', query: 'NIT Trichy administrative building' },
  { file: 'campus_nit_surathkal.jpg', query: 'NIT Surathkal building' },
  { file: 'campus_nit_warangal.jpg', query: 'NIT Warangal main building' },
  { file: 'campus_nit_calicut.jpg', query: 'NIT Calicut administrative building' },
  { file: 'campus_nit_rourkela.jpg', query: 'NIT Rourkela main building' },
  { file: 'campus_nit_kurukshetra.jpg', query: 'NIT Kurukshetra building' },
  { file: 'campus_nit_silchar.jpg', query: 'NIT Silchar administrative building' },
  { file: 'campus_iim_ahmedabad.jpg', query: 'IIM Ahmedabad campus building' },
  { file: 'campus_iim_calcutta.jpg', query: 'IIM Calcutta campus building' },
  { file: 'campus_iim_lucknow.jpg', query: 'IIM Lucknow campus building' },
  { file: 'campus_iim_kozhikode.jpg', query: 'IIM Kozhikode campus building' },
  { file: 'campus_iim_indore.jpg', query: 'IIM Indore campus building' },
  { file: 'campus_bits_pilani.jpg', query: 'BITS Pilani clock tower building' },
  { file: 'campus_anna_university.jpg', query: 'Anna University main building' },
  { file: 'campus_jadavpur_university.jpg', query: 'Jadavpur University building' },
  { file: 'campus_delhi_university.jpg', query: 'Delhi University arts faculty building' },
  { file: 'campus_banaras_hindu_university.jpg', query: 'Banaras Hindu University main building' },
  { file: 'campus_aligarh_muslim_university.jpg', query: 'Aligarh Muslim University Strachey Hall' },
  { file: 'campus_osmania_university.jpg', query: 'Osmania University Arts College' },
  { file: 'campus_andhra_university.jpg', query: 'Andhra University building' },
  { file: 'campus_calcutta_university.jpg', query: 'Calcutta University campus building' },
  { file: 'campus_madras_university.jpg', query: 'Madras University Senate House' },
  { file: 'campus_panjab_university.jpg', query: 'Panjab University Gandhi Bhawan' },
  { file: 'campus_rajasthan_university.jpg', query: 'University of Rajasthan administrative block' },
  { file: 'campus_kerala_university.jpg', query: 'University of Kerala senate house' },
  { file: 'campus_gujarat_university.jpg', query: 'Gujarat University tower' },
  { file: 'campus_st_xaviers_mumbai.jpg', query: 'St Xavier College Mumbai building' },
  { file: 'campus_presidency_kolkata.jpg', query: 'Presidency University Kolkata building' },
  { file: 'campus_fergusson_pune.jpg', query: 'Fergusson College Pune main building' },
  { file: 'campus_st_stephens_delhi.jpg', query: 'St Stephens College Delhi building' },
  { file: 'campus_loyola_chennai.jpg', query: 'Loyola College Chennai building' },
  { file: 'campus_christ_bangalore.jpg', query: 'Christ University Bangalore campus' },
  { file: 'campus_symbiosis_pune.jpg', query: 'Symbiosis International University Lavale' },
  { file: 'campus_manipal_academy.jpg', query: 'Manipal Academy of Higher Education campus' },
  { file: 'campus_amity_noida.jpg', query: 'Amity University Noida campus' },
  { file: 'campus_srm_chennai.jpg', query: 'SRM University Kattankulathur campus' },
  { file: 'campus_vit_vellore.jpg', query: 'VIT Vellore technology tower' },
  { file: 'campus_thapar_patiala.jpg', query: 'Thapar Institute Patiala campus' },
  { file: 'campus_dtu_delhi.jpg', query: 'Delhi Technological University campus' },
  { file: 'campus_nsut_delhi.jpg', query: 'Netaji Subhas University of Technology campus' }
];

async function main() {
  console.log("Searching and downloading authentic building photos from Commons...");
  let success = 0;
  for (const item of institutionsToFetch) {
    const dest = path.join(targetDir, item.file);
    if (fs.existsSync(dest) && fs.statSync(dest).size > 10000) {
      console.log(`[EXISTS] ${item.file}`);
      success++;
      continue;
    }

    const searchUrl = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(item.query)}&gsrnamespace=6&gsrlimit=5&prop=imageinfo&iiprop=url&iiurlwidth=1200&format=json`;
    
    try {
      const data = await fetchJson(searchUrl);
      const pages = data.query && data.query.pages ? Object.values(data.query.pages) : [];
      let foundUrl = null;
      for (const page of pages) {
        const title = page.title || '';
        const lower = title.toLowerCase();
        // Skip logos, maps, coats of arms, flags, portraits
        if (lower.includes('logo') || lower.includes('map') || lower.includes('flag') || lower.includes('coat') || lower.includes('seal') || lower.includes('diagram') || lower.includes('svg')) {
          continue;
        }
        if (page.imageinfo && page.imageinfo.length > 0) {
          const info = page.imageinfo[0];
          foundUrl = info.thumburl || info.url;
          break;
        }
      }

      if (foundUrl) {
        console.log(`Downloading ${item.file} from ${foundUrl}...`);
        await downloadFile(foundUrl, dest);
        if (fs.existsSync(dest) && fs.statSync(dest).size > 5000) {
          console.log(`[SUCCESS] ${item.file}`);
          success++;
        }
      } else {
        console.log(`[NO SUITABLE PHOTO] ${item.query}`);
      }
    } catch (e) {
      console.log(`[FAIL] ${item.file}: ${e.message}`);
    }
  }
  console.log(`\nCompleted! Total downloaded/existing campus images: ${success}/${institutionsToFetch.length}`);
}

main();
