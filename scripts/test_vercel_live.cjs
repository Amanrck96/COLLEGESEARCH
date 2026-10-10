async function testVercelDeploy() {
  const urls = [
    'https://collegesearch-live.vercel.app',
    'https://collegesearch-live.vercel.app/images/campuses/koshys_bangalore.jpg',
    'https://collegesearch-live.vercel.app/images/campuses/bangalore_university.jpg',
    'https://collegesearch-live.vercel.app/images/campuses/iiit_bangalore_campus.jpg',
    'https://collegesearch-live.vercel.app/images/campuses/srinivasan_perambalur.jpg',
    'https://collegesearch-live.vercel.app/images/campuses/atharva_complex_malad.jpg',
    'https://collegesearch-live.vercel.app/images/campuses/riim_pune.jpeg'
  ];

  console.log('Testing live Vercel deployment endpoints:');
  for (const u of urls) {
    try {
      const res = await fetch(u);
      console.log(`${u} -> HTTP ${res.status} [${res.headers.get('content-type')}]`);
    } catch(e) {
      console.log(`${u} -> Error: ${e.message}`);
    }
  }
}

testVercelDeploy();
