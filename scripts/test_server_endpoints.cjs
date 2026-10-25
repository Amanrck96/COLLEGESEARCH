const fs = require('fs');

async function testEndpoints() {
  console.log('Testing http://localhost:5000/api/health ...');
  try {
    const healthRes = await fetch('http://localhost:5000/api/health');
    console.log(`Health status: ${healthRes.status} ${healthRes.statusText}`);
  } catch (e) {
    console.log(`Health check failed: ${e.message}`);
  }

  const sampleImages = [
    '/images/campuses/iiit_bangalore_campus.jpg',
    '/images/campuses/bangalore_university.jpg',
    '/images/campuses/bms_bangalore.jpg',
    '/images/campuses/rathinam_campus.jpg',
    '/images/campuses/svims_wadala_mumbai.jpeg',
    '/images/campuses/weschool_matunga_mumbai.jpeg',
    '/images/campuses/kes_shroff_kandivali.jpg',
    '/images/campuses/srinivasan_perambalur.jpg',
    '/images/campuses/riim_pune.jpeg',
    '/images/campuses/sas_institute_boisar.png',
    '/images/campuses/matoshri_ushatai_jadhav.jpg'
  ];

  console.log('\nTesting static image serving on Port 5000 & 5173:');
  for (const imgPath of sampleImages) {
    try {
      const res5000 = await fetch(`http://localhost:5000${imgPath}`);
      const type5000 = res5000.headers.get('content-type');
      console.log(`Port 5000: ${imgPath} -> HTTP ${res5000.status} [${type5000}]`);
    } catch (e) {
      console.log(`Port 5000: ${imgPath} -> FAILED: ${e.message}`);
    }

    try {
      const res5173 = await fetch(`http://localhost:5173${imgPath}`);
      const type5173 = res5173.headers.get('content-type');
      console.log(`Port 5173: ${imgPath} -> HTTP ${res5173.status} [${type5173}]`);
    } catch (e) {
      console.log(`Port 5173: ${imgPath} -> FAILED: ${e.message}`);
    }
  }
}

testEndpoints();
