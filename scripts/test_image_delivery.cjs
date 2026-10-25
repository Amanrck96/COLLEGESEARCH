const fs = require('fs');

async function testLocalhost() {
  const images = [
    '/images/campuses/koshys_bangalore.jpg',
    '/images/campuses/bangalore_university.jpg',
    '/images/campuses/iiit_bangalore_campus2.jpg',
    '/images/campuses/campus_trinity_pune.png',
    '/images/campuses/primus_bangalore.jpg',
    '/images/campuses/ramaiah_bangalore.jpg',
    '/images/campuses/pes_bangalore.jpg',
    '/images/campuses/bms_bangalore.jpg',
    '/images/campuses/iim_bangalore.jpg',
    '/images/campuses/iiit_bangalore_campus.jpg',
    '/images/campuses/campus_vnit_nagpur.jpeg',
    '/images/campuses/campus_mgm_navi_mumbai.jpg',
    '/images/campuses/campus_coep_pune.png',
    '/images/campuses/campus_cu_shah_mumbai.png',
    '/images/campuses/campus_iit_patna.png',
    '/images/campuses/campus_iit_delhi.jpg',
    '/images/campuses/rathinam_campus.jpg'
  ];

  console.log('Testing image delivery from http://localhost:5173 :');
  for (const img of images) {
    try {
      const res = await fetch(`http://localhost:5173${img}`);
      console.log(`${img} -> HTTP ${res.status} [${res.headers.get('content-type')}]`);
    } catch(e) {
      console.log(`${img} -> FAILED: ${e.message}`);
    }
  }
}

testLocalhost();
