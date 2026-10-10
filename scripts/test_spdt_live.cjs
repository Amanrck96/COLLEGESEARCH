async function test() {
  try {
    const res = await fetch('https://collegesearch-live.vercel.app/images/campuses/spdt_tibrewala_andheri.jpg');
    console.log(`SPDT Live Vercel Status: HTTP ${res.status} [${res.headers.get('content-type')}] - Size: ${res.headers.get('content-length')} bytes`);
  } catch(e) {
    console.log(`Error: ${e.message}`);
  }
}
test();
