const https = require('https');
const http = require('http');

const testCampusUrls = [
  // Maharashtra / Mumbai / Pune Campuses
  { name: 'PIBM Pune', url: 'https://static.boostmytalent.com/img/univ/pibm-pune-campus-admission.webp' },
  { name: 'Welingkar Mumbai (WeSchool)', url: 'https://theacademicinsights.com/wp-content/uploads/2021/11/weschool-mumbai.jpeg' },
  { name: 'SVIMS Mumbai', url: 'https://assets.kollegeapply.com/images/1751570673506-1619502621phpC9XpVl.jpeg' },
  { name: 'Mumbai University Fort Heritage', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/University_of_Mumbai_Convocation_Hall.jpg/1200px-University_of_Mumbai_Convocation_Hall.jpg' },
  { name: 'IIT Bombay Campus', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/IIT_Bombay_Main_Building.jpg/1200px-IIT_Bombay_Main_Building.jpg' },
  { name: 'COEP Pune Main Building', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/College_of_Engineering_Pune.jpg/1200px-College_of_Engineering_Pune.jpg' },
  { name: 'Fergusson College Pune', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Fergusson_College_Main_Building_Pune.jpg/1200px-Fergusson_College_Main_Building_Pune.jpg' },
  { name: 'SPPU Pune University Main Building', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Main_Building%2C_Pune_University.jpg/1200px-Main_Building%2C_Pune_University.jpg' },
  { name: 'St. Xavier\'s College Mumbai', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/St._Xavier%27s_College%2C_Mumbai.jpg/1200px-St._Xavier%27s_College%2C_Mumbai.jpg' },
  { name: 'Elphinstone College Mumbai', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Elphinstone_College_Mumbai.jpg/1200px-Elphinstone_College_Mumbai.jpg' },
  { name: 'VJTI Mumbai Matunga', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Veermata_Jijabai_Technological_Institute_Building.jpg/1200px-Veermata_Jijabai_Technological_Institute_Building.jpg' },
  { name: 'SNDT Womens University Mumbai', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/SNDT_Women%27s_University_Churchgate_Campus.jpg/1200px-SNDT_Women%27s_University_Churchgate_Campus.jpg' },
  
  // National Premier Campuses
  { name: 'IIT Delhi Main Building', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/IIT_Delhi_Main_Building.jpg/1200px-IIT_Delhi_Main_Building.jpg' },
  { name: 'IIT Madras Heritage', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/IIT_Madras_Heritage_Centre.jpg/1200px-IIT_Madras_Heritage_Centre.jpg' },
  { name: 'IIT Kharagpur Main Building', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/IIT_Kharagpur_Main_Building.jpg/1200px-IIT_Kharagpur_Main_Building.jpg' },
  { name: 'IIT Roorkee Main Building', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Thomason_College_Roorkee.jpg/1200px-Thomason_College_Roorkee.jpg' },
  { name: 'IIT Kanpur Flight Lab / Campus', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/IIT_Kanpur_Faculty_Building.jpg/1200px-IIT_Kanpur_Faculty_Building.jpg' },
  { name: 'IIM Ahmedabad Louis Kahn Plaza', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/IIM_Ahmedabad_Main_Complex.jpg/1200px-IIM_Ahmedabad_Main_Complex.jpg' },
  { name: 'IIM Bangalore Stone Campus', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/IIM_Bangalore_Campus.jpg/1200px-IIM_Bangalore_Campus.jpg' },
  { name: 'IIM Calcutta Campus', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/IIM_Calcutta_Campus.jpg/1200px-IIM_Calcutta_Campus.jpg' },
  { name: 'IIM Lucknow Main Building', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/IIM_Lucknow_Campus.jpg/1200px-IIM_Lucknow_Campus.jpg' },
  { name: 'IIM Kozhikode Hilltop Campus', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/IIM_Kozhikode_Campus.jpg/1200px-IIM_Kozhikode_Campus.jpg' },
  { name: 'IIM Indore Campus', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/IIM_Indore_Campus.jpg/1200px-IIM_Indore_Campus.jpg' },
  
  // Premier Universities & Engineering / Medical / Law Campuses
  { name: 'IISc Bangalore Main Faculty', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/IISc_Main_Building.jpg/1200px-IISc_Main_Building.jpg' },
  { name: 'AIIMS New Delhi Main Building', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/AIIMS_New_Delhi_Main_Hospital_Building.jpg/1200px-AIIMS_New_Delhi_Main_Hospital_Building.jpg' },
  { name: 'Jawaharlal Nehru University JNU Delhi', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Jawaharlal_Nehru_University_Administrative_Block.jpg/1200px-Jawaharlal_Nehru_University_Administrative_Block.jpg' },
  { name: 'Delhi University North Campus Vice Regal Lodge', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Viceregal_Lodge_Delhi_University.jpg/1200px-Viceregal_Lodge_Delhi_University.jpg' },
  { name: 'St Stephens College Delhi', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/St_Stephens_College_Delhi.jpg/1200px-St_Stephens_College_Delhi.jpg' },
  { name: 'Hindu College Delhi', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Hindu_College_Delhi.jpg/1200px-Hindu_College_Delhi.jpg' },
  { name: 'Miranda House Delhi', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Miranda_House_Delhi.jpg/1200px-Miranda_House_Delhi.jpg' },
  { name: 'SRCC Delhi', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Shri_Ram_College_of_Commerce.jpg/1200px-Shri_Ram_College_of_Commerce.jpg' },
  { name: 'Anna University CEG Chennai', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Anna_University_Chennai_Main_Building.jpg/1200px-Anna_University_Chennai_Main_Building.jpg' },
  { name: 'Loyola College Chennai', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Loyola_College_Chennai_Main_Building.jpg/1200px-Loyola_College_Chennai_Main_Building.jpg' },
  { name: 'Madras Christian College MCC', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Madras_Christian_College_Main_Building.jpg/1200px-Madras_Christian_College_Main_Building.jpg' },
  { name: 'Presidency College Chennai', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Presidency_College_Chennai.jpg/1200px-Presidency_College_Chennai.jpg' },
  { name: 'Banaras Hindu University BHU Main Gate', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Banaras_Hindu_University_Main_Gate.jpg/1200px-Banaras_Hindu_University_Main_Gate.jpg' },
  { name: 'Aligarh Muslim University AMU Strachey Hall', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Strachey_Hall_AMU.jpg/1200px-Strachey_Hall_AMU.jpg' },
  { name: 'Jadavpur University Kolkata', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Aurobindo_Bhavan_Jadavpur_University.jpg/1200px-Aurobindo_Bhavan_Jadavpur_University.jpg' },
  { name: 'Presidency University Kolkata Baker Building', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Presidency_University_Kolkata_Baker_Building.jpg/1200px-Presidency_University_Kolkata_Baker_Building.jpg' },
  { name: 'St Xaviers College Kolkata', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/St_Xaviers_College_Kolkata_Campus.jpg/1200px-St_Xaviers_College_Kolkata_Campus.jpg' },
  { name: 'BITS Pilani Vidya Vihar Clock Tower', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/BITS_Pilani_Clock_Tower.jpg/1200px-BITS_Pilani_Clock_Tower.jpg' },
  { name: 'BITS Goa Campus', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/BITS_Pilani_Goa_Campus.jpg/1200px-BITS_Pilani_Goa_Campus.jpg' },
  { name: 'BITS Hyderabad Campus', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/BITS_Pilani_Hyderabad_Campus_Auditorium.jpg/1200px-BITS_Pilani_Hyderabad_Campus_Auditorium.jpg' },
  { name: 'Osmania University Hyderabad Arts College', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/University_College_of_Arts_Osmania_University.jpg/1200px-University_College_of_Arts_Osmania_University.jpg' },
  { name: 'University of Hyderabad Campus', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/University_of_Hyderabad_Campus.jpg/1200px-University_of_Hyderabad_Campus.jpg' },
  { name: 'Andhra University Visakhapatnam', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Andhra_University_Main_Building.jpg/1200px-Andhra_University_Main_Building.jpg' },
  { name: 'Kerala University Trivandrum', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/University_of_Kerala_Senate_House.jpg/1200px-University_of_Kerala_Senate_House.jpg' },
  { name: 'NIT Calicut Campus', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/NIT_Calicut_Main_Building.jpg/1200px-NIT_Calicut_Main_Building.jpg' },
  { name: 'NIT Trichy Main Building', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/NIT_Trichy_Admin_Block.jpg/1200px-NIT_Trichy_Admin_Block.jpg' },
  { name: 'NIT Surathkal Beach Campus', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/NITK_Surathkal_Main_Building.jpg/1200px-NITK_Surathkal_Main_Building.jpg' },
  { name: 'NIT Warangal Heritage Gateway', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/NIT_Warangal_Main_Building.jpg/1200px-NIT_Warangal_Main_Building.jpg' },
  { name: 'NIT Rourkela Main Building', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NIT_Rourkela_Main_Building.jpg/1200px-NIT_Rourkela_Main_Building.jpg' },
  { name: 'MNIT Jaipur Central Lawn Campus', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/MNIT_Jaipur_Prabha_Bhawan.jpg/1200px-MNIT_Jaipur_Prabha_Bhawan.jpg' },
  { name: 'MNNIT Allahabad Admin Building', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/MNNIT_Allahabad_Administrative_Building.jpg/1200px-MNNIT_Allahabad_Administrative_Building.jpg' },
  { name: 'VNIT Nagpur Campus Complex', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/VNIT_Nagpur_Academic_Block.jpg/1200px-VNIT_Nagpur_Academic_Block.jpg' },
  { name: 'SVNIT Surat Campus', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/SVNIT_Surat_Main_Building.jpg/1200px-SVNIT_Surat_Main_Building.jpg' }
];

async function checkUrl(url) {
  return new Promise((resolve) => {
    try {
      const client = url.startsWith('https') ? https : http;
      const req = client.request(url, {
        method: 'GET',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
          'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8'
        },
        timeout: 7000
      }, (res) => {
        const ok = res.statusCode >= 200 && res.statusCode < 400;
        const contentType = res.headers['content-type'] || '';
        resolve({ ok, status: res.statusCode, contentType });
        res.destroy();
      });
      req.on('error', (e) => resolve({ ok: false, error: e.message }));
      req.on('timeout', () => { req.destroy(); resolve({ ok: false, error: 'TIMEOUT' }); });
      req.end();
    } catch (e) {
      resolve({ ok: false, error: e.message });
    }
  });
}

async function testAll() {
  console.log('Testing', testCampusUrls.length, 'campus architectural photos...');
  let passed = 0;
  for (const c of testCampusUrls) {
    const res = await checkUrl(c.url);
    if (res.ok) {
      passed++;
      console.log(`✅ [${res.status}] ${c.name} (${res.contentType})`);
    } else {
      console.log(`❌ [${res.status || res.error}] ${c.name} -> ${c.url}`);
    }
  }
  console.log(`\nResult: ${passed}/${testCampusUrls.length} verified working!`);
}

testAll();
