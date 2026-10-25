const https = require('https');
const http = require('http');

async function checkUrl(url) {
  return new Promise((resolve) => {
    try {
      const client = url.startsWith('https') ? https : http;
      const req = client.request(url, {
        method: 'GET',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
          'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'Referer': 'https://www.google.com/'
        },
        timeout: 7000
      }, (res) => {
        if (res.statusCode >= 200 && res.statusCode < 400) {
          const contentType = res.headers['content-type'] || '';
          resolve({ ok: true, status: res.statusCode, contentType });
        } else {
          resolve({ ok: false, status: res.statusCode });
        }
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

// Let's test candidate URLs for each of the 19 colleges
const candidates = [
  // 1. PIBM Pune
  { name: 'PIBM Pune', url: 'https://static.boostmytalent.com/img/univ/pibm-pune-campus-admission.webp' },
  { name: 'PIBM Pune 2', url: 'https://images.shiksha.com/mediadata/images/1570775988phpN1l6qK.jpeg' },
  
  // 2. SVIMS Wadala Mumbai
  { name: 'SVIMS Wadala', url: 'https://assets.kollegeapply.com/images/1751570673506-1619502621phpC9XpVl.jpeg' },
  { name: 'SVIMS Wadala 2', url: 'https://www.vidyavision.com/CollegeUploads/Photos/2018-20-4-15-46-34_svims.jpg' },

  // 3. Bharati Vidyapeeth Navi Mumbai (CBD Belapur)
  { name: 'Bharati Vidyapeeth Belapur', url: 'https://bvcoenm.edu.in/wp-content/uploads/2021/04/bvcoe-slider-1.jpg' },
  { name: 'Bharati Vidyapeeth Belapur 2', url: 'https://images.shiksha.com/mediadata/images/1501740924phpn7KqW8.jpeg' },
  { name: 'Bharati Vidyapeeth Belapur 3', url: 'https://www.collegebatch.com/static/clg-gallery/bharati-vidyapeeth-college-of-engineering-navi-mumbai-214959.jpg' },

  // 4 & 5. Atharva Educational Complex Malad Mumbai
  { name: 'Atharva Malad', url: 'https://atharvauniversity.org/wp-content/uploads/2023/10/campus-infra-banner.jpg' },
  { name: 'Atharva Malad 2', url: 'https://www.collegebatch.com/static/clg-gallery/atharva-college-of-engineering-mumbai-214479.jpg' },
  { name: 'Atharva Malad 3', url: 'https://images.shiksha.com/mediadata/images/1539250212phpV1kZkM.jpeg' },

  // 6. Thakur Global Business School / Thakur Educational Campus Kandivali
  { name: 'Thakur Kandivali', url: 'https://www.collegebatch.com/static/clg-gallery/thakur-college-of-engineering-and-technology-mumbai-214902.jpg' },
  { name: 'Thakur Kandivali 2', url: 'https://images.shiksha.com/mediadata/images/1591873130phpQp8i4M.jpeg' },
  { name: 'Thakur Kandivali 3', url: 'https://tcetmumbai.in/images/about/tcet-building.jpg' },

  // 7. Welingkar Institute of Management Matunga
  { name: 'Welingkar Matunga', url: 'https://theacademicinsights.com/wp-content/uploads/2021/11/weschool-mumbai.jpeg' },

  // 8. Sir JJ Institute of Applied Art Fort Mumbai
  { name: 'Sir JJ Art Mumbai', url: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Sir_J_J_School_of_Art_Building_Mumbai.jpg' },

  // 9. Alkesh Dinesh Mody Institute Kalina Mumbai
  { name: 'Alkesh Dinesh Mody Kalina', url: 'https://www.collegebatch.com/static/clg-gallery/alkesh-dinesh-mody-institute-for-financial-and-management-studies-mumbai-214446.jpg' },
  { name: 'Alkesh Dinesh Mody Kalina 2', url: 'https://mu.ac.in/wp-content/uploads/2020/07/admi.jpg' },

  // 10. Chetana Institute Bandra Mumbai
  { name: 'Chetana Bandra', url: 'https://www.collegebatch.com/static/clg-gallery/chetana-s-ramprasad-khandelwal-institute-of-management-and-research-mumbai-214470.jpg' },
  { name: 'Chetana Bandra 2', url: 'https://crkimr.in/wp-content/uploads/2023/04/campus.jpg' },

  // 11. Valia School of Management / Valia College Andheri Mumbai
  { name: 'Valia College Andheri', url: 'https://www.collegebatch.com/static/clg-gallery/valia-c-l-college-of-commerce-mumbai-214917.jpg' },
  { name: 'Valia College Andheri 2', url: 'https://valiacollege.co.in/wp-content/uploads/2022/08/college-building.jpg' },

  // 12. Bunts Sangha Mumbai Anna Leela College Kurla Mumbai
  { name: 'Bunts Sangha Kurla', url: 'https://www.collegebatch.com/static/clg-gallery/bunts-sangha-s-s-m-shetty-college-of-science-commerce-and-management-studies-mumbai-214467.jpg' },
  { name: 'Bunts Sangha Kurla 2', url: 'https://alsj.bunts.edu.in/wp-content/uploads/2021/08/college-front.jpg' },

  // 13. Kandivli Education Society BK Shroff College Kandivali Mumbai
  { name: 'KES Shroff Kandivali', url: 'https://www.collegebatch.com/static/clg-gallery/kes-shroff-college-of-arts-and-commerce-mumbai-214532.jpg' },
  { name: 'KES Shroff Kandivali 2', url: 'https://kesshroffcollege.com/wp-content/uploads/2021/09/banner-1.jpg' },

  // 14. Saraswati College of Engineering Kharghar Navi Mumbai
  { name: 'Saraswati Kharghar', url: 'https://www.collegebatch.com/static/clg-gallery/saraswati-college-of-engineering-navi-mumbai-214878.jpg' },
  { name: 'Saraswati Kharghar 2', url: 'https://sce.edu.in/wp-content/uploads/2023/04/sce-building.jpg' },

  // 15. Smt. Maniben MP Shah Womens College Matunga Mumbai
  { name: 'Smt Maniben MP Shah Matunga', url: 'https://www.collegebatch.com/static/clg-gallery/smt-maniben-m-p-shah-womens-college-of-arts-and-commerce-mumbai-214890.jpg' },
  { name: 'Smt Maniben MP Shah Matunga 2', url: 'https://mmpshahcollege.in/wp-content/uploads/2021/06/banner1.jpg' },

  // 16. Sheila Raheja School of Business Management Bandra Mumbai
  { name: 'Sheila Raheja Bandra', url: 'https://www.collegebatch.com/static/clg-gallery/sheila-raheja-school-of-business-management-and-research-mumbai-214882.jpg' },
  { name: 'Sheila Raheja Bandra 2', url: 'https://srbs.edu.in/wp-content/uploads/2021/09/srbs-building.jpg' },

  // 17. GNIMS Business School Matunga Mumbai
  { name: 'GNIMS Matunga', url: 'https://www.collegebatch.com/static/clg-gallery/guru-nanak-institute-of-management-studies-mumbai-214506.jpg' },
  { name: 'GNIMS Matunga 2', url: 'https://gnims.edu.in/wp-content/uploads/2022/01/campus.jpg' },

  // 18. Kohinoor Management School Kurla Mumbai
  { name: 'Kohinoor Kurla', url: 'https://www.collegebatch.com/static/clg-gallery/kohinoor-management-school-mumbai-214539.jpg' },
  { name: 'Kohinoor Kurla 2', url: 'https://kms.edu.in/wp-content/uploads/2022/03/kms-building.jpg' },

  // 19. SVKM Usha Pravin Gandhi College Vile Parle Mumbai
  { name: 'UPG Vile Parle', url: 'https://www.collegebatch.com/static/clg-gallery/usha-pravin-gandhi-college-of-management-mumbai-214915.jpg' },
  { name: 'UPG Vile Parle 2', url: 'https://upgcm.ac.in/wp-content/uploads/2021/07/upg-campus.jpg' }
];

async function run() {
  console.log('Testing candidates...');
  for (const c of candidates) {
    const res = await checkUrl(c.url);
    console.log(`${res.ok ? '✅ [200 OK]' : '❌ [' + (res.status || res.error) + ']'} ${c.name} -> ${c.url} (${res.contentType || ''})`);
  }
}

run();
