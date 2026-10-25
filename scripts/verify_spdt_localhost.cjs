async function verifySpdtLocalhost() {
  try {
    const res = await fetch('http://localhost:5173/images/campuses/spdt_tibrewala_andheri.jpg');
    console.log(`Image Delivery: HTTP ${res.status} [${res.headers.get('content-type')}] - Size: ${res.headers.get('content-length')} bytes`);

    const apiRes = await fetch('http://localhost:5000/api/colleges?q=Tibrewala');
    const data = await apiRes.json();
    const colleges = data.colleges || [];
    if (colleges[0]) {
      console.log(`API Match: ${colleges[0].name} (ID: ${colleges[0].id})`);
      console.log(`Image: ${colleges[0].image}`);
    }
  } catch(e) {
    console.log('Error:', e.message);
  }
}

verifySpdtLocalhost();
