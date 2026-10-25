const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const CAMPUSES_DIR = path.join(__dirname, '..', 'public', 'images', 'campuses');
if (!fs.existsSync(CAMPUSES_DIR)) {
  fs.mkdirSync(CAMPUSES_DIR, { recursive: true });
}

const SPECIFIC_COLLEGE_PHOTOS = [
  // 1. PIBM Pune
  { filename: 'pibm_pune.webp', url: 'https://static.boostmytalent.com/img/univ/pibm-pune-campus-admission.webp' },
  // 2. SVIMS Wadala
  { filename: 'svims_wadala_mumbai.jpeg', url: 'https://assets.kollegeapply.com/images/1751570673506-1619502621phpC9XpVl.jpeg' },
  // 3. WeSchool Matunga
  { filename: 'weschool_matunga_mumbai.jpeg', url: 'https://theacademicinsights.com/wp-content/uploads/2021/11/weschool-mumbai.jpeg' },
  // 4. Sir JJ School of Art & Applied Art Mumbai
  { filename: 'sir_jj_art_mumbai.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Building_of_Sir_J._J._School_of_Art%2C_Mumbai.jpg' },
  // 5. Alkesh Dinesh Mody Kalina Mumbai
  { filename: 'alkesh_dinesh_mody_mumbai.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Alkesh_Dinesh_Mody_Institute_entrance.jpg' },
  // 6. KES Shroff Kandivali
  { filename: 'kes_shroff_kandivali.jpg', url: 'https://kessc.edu.in/wp-content/uploads/2024/05/IMG_0643.jpg' },
  // 7. Saraswati College of Engineering Kharghar
  { filename: 'saraswati_kharghar.webp', url: 'https://engineering.saraswatikharghar.edu.in/wp-content/uploads/2024/05/thumbnail_DCM_8148.webp' },
  // 8. Sheila Raheja Bandra
  { filename: 'sheila_raheja_bandra.webp', url: 'https://srbs.edu.in/wp-content/uploads/2026/08/What-Makes-a-Mumbai-Business-School-Worth-Choosing-in-2026-1024x572.webp' },
  // 9. GNIMS Matunga
  { filename: 'gnims_matunga.png', url: 'https://gnims.edu.in/wp-content/uploads/2025/12/fb3efb9545bf08ba0052973d1e52f85b2e0ba148.png' },
  // 10. Kohinoor Kurla
  { filename: 'kohinoor_kurla.jpg', url: 'https://kohinoor.edu.in/wp-content/uploads/2022/07/kms-headquarters2a.jpg' },
  // 11. SVKM UPG Vile Parle
  { filename: 'svkm_upg_vileparle.jpg', url: 'https://upgcm.ac.in/Common/Uploads/ContentTemplate/22_header_about-us.jpg' },
  // 12. Valia Andheri
  { filename: 'valia_andheri.jpeg', url: 'https://assets.kollegeapply.com/images/1751549429201-1632812746phpypW5Wu.jpeg' },
  // 13. Chetana Bandra
  { filename: 'chetana_bandra.jpg', url: 'https://www.crkimr.in/wp-content/uploads/2023/08/IMG-20230811-WA0072.jpg' },
  // 14. Maniben MP Shah Matunga
  { filename: 'maniben_mp_shah_matunga.jpg', url: 'https://mmpshahcollege.in/assets/images/slider/SLIDER_766635.jpg' },
  // 15. Bharati Vidyapeeth Navi Mumbai
  { filename: 'bharati_vidyapeeth_navimumbai.jpg', url: 'https://bvcoenm.edu.in/wp-content/uploads/2016/11/DSC00847.jpg' },
  // 16. Atharva Educational Complex Malad
  { filename: 'atharva_complex_malad.jpg', url: 'https://atharvacoe.ac.in/wp-content/uploads/self-compliance-scaled.jpg' },
  // 17. Thakur Educational Complex Kandivali
  { filename: 'thakur_complex_kandivali.webp', url: 'https://tgbsmumbai.in/images/infrastructure/infra17.webp' },
  // 18. VJTI Matunga Mumbai
  { filename: 'vjti_mumbai.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/VJTI_Quadrangle.jpg' },
  // 19. Bunts Sangha Mumbai
  { filename: 'bunts_sangha_mumbai.jpeg', url: 'https://assets.kollegeapply.com/images/1751549429201-1632812746phpypW5Wu.jpeg' },
  
  // General Verified Indian Campus Architecture Vault
  { filename: 'campus_mumbai_fort.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/University_of_Mumbai.JPG' },
  { filename: 'campus_coep_pune.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/COEP_Main_Building.jpg' },
  { filename: 'campus_st_xaviers_mumbai.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/5/51/St._Xavier%E2%80%99s_College%2C_Mumbai_02.jpg' },
  { filename: 'campus_iit_bombay.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Main_Building_IIT_Bombay.jpg' },
  { filename: 'campus_iit_delhi.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/0/05/IIT_Delhi_Main_Building_Front_View.jpg' },
  { filename: 'campus_iit_madras.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/0/03/IIT_Madras_Building.jpg' },
  { filename: 'campus_iit_kharagpur.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/IIT_Kharagpur_Main_Building_View.jpg' },
  { filename: 'campus_iim_ahmedabad.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/8/87/IIM_Ahmedabad_Campus.jpg' },
  { filename: 'campus_iim_bangalore.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/IIM_Bangalore_Campus.jpg' },
  { filename: 'campus_iisc_bangalore.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/IISc_Main_Building.jpg' },
  { filename: 'campus_anna_university.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Anna_university_01.jpg' },
  { filename: 'campus_loyola_chennai.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Loyola_College_Chennai.jpg' },
  { filename: 'campus_bhu_varanasi.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/BHU_Main_Gate.jpg' },
  { filename: 'campus_bits_pilani.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/d/da/BITS_Pilani_New_Academic_Block.jpg' },
  { filename: 'campus_presidency_kolkata.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Presidency_University_Kolkata.jpg' },
  { filename: 'campus_fergusson_pune.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Fergusson_College_Pune_Main_Building.jpg' },
  { filename: 'campus_st_stephens_delhi.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/St_Stephens_College_Delhi_Building.jpg' },
  { filename: 'campus_osmania_hyderabad.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Osmania_University_Arts_College_Hyderabad.jpg' },
  { filename: 'campus_andhra_university.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Andhra_University_Visakhapatnam.jpg' },
  { filename: 'campus_kerala_university.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/9/90/University_of_Kerala_Senate_House_Campus.jpg' },
  { filename: 'campus_nit_trichy.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/NIT_Trichy_Admin_Block_Campus.jpg' },
  { filename: 'campus_nit_surathkal.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/NITK_Surathkal_Campus_Building.jpg' },
  { filename: 'campus_nit_calicut.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/7/75/NIT_Calicut_Campus.jpg' },
  { filename: 'campus_vnit_nagpur.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/VNIT_Nagpur_Campus.jpg' },
  { filename: 'campus_mnit_jaipur.jpg', url: 'https://upload.wikimedia.org/wikipedia/commons/0/05/MNIT_Jaipur_Campus.jpg' }
];

function downloadFile(url, dest) {
  return new Promise((resolve) => {
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Referer': 'https://www.google.com/'
      },
      timeout: 10000
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, dest).then(resolve);
      }
      if (res.statusCode !== 200) {
        return resolve({ ok: false, status: res.statusCode, url });
      }
      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        const stat = fs.statSync(dest);
        if (stat.size < 500) {
          // Empty or error response
          fs.unlinkSync(dest);
          return resolve({ ok: false, status: 'TOO_SMALL', url });
        }
        resolve({ ok: true, size: stat.size, url });
      });
    });
    req.on('error', (e) => resolve({ ok: false, error: e.message, url }));
    req.on('timeout', () => { req.destroy(); resolve({ ok: false, error: 'TIMEOUT', url }); });
  });
}

async function run() {
  console.log(`Starting download of ${SPECIFIC_COLLEGE_PHOTOS.length} campus building photos...`);
  let successCount = 0;
  for (const item of SPECIFIC_COLLEGE_PHOTOS) {
    const dest = path.join(CAMPUSES_DIR, item.filename);
    if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
      console.log(`⚡ [EXISTS] ${item.filename} (${Math.round(fs.statSync(dest).size / 1024)} KB)`);
      successCount++;
      continue;
    }
    const res = await downloadFile(item.url, dest);
    if (res.ok) {
      console.log(`✅ [200 OK] ${item.filename} (${Math.round(res.size / 1024)} KB)`);
      successCount++;
    } else {
      console.log(`❌ [FAIL ${res.status || res.error}] ${item.filename} <- ${item.url}`);
    }
  }
  console.log(`\nFinished: ${successCount}/${SPECIFIC_COLLEGE_PHOTOS.length} photos ready on disk!`);
}

run();
