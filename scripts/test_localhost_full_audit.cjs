async function testLocalhostAudit() {
  console.log('=== TESTING LOCALHOST (PORT 5173 & PORT 5000) ===\n');

  // 1. Health check
  try {
    const health = await fetch('http://localhost:5000/api/health');
    console.log(`Backend Health: HTTP ${health.status} ${health.statusText}`);
  } catch(e) {
    console.log(`Backend Health Error: ${e.message}`);
  }

  // 2. Query targets
  const queries = [
    { name: 'VALIA SCHOOL OF MANAGEMENT', q: 'Valia' },
    { name: 'BUNTS SANGHA MUMBAI ANNA LEELA', q: 'Bunts Sangha' },
    { name: 'PSSVMS SAILEE DEGREE COLLEGE', q: 'Sailee' },
    { name: 'USHA PRAVIN GANDHI COLLEGE', q: 'Usha Pravin Gandhi' },
    { name: 'GNIMS BUSINESS SCHOOL', q: 'GNIMS' },
    { name: 'NAGINDAS KHANDWALA COLLEGE', q: 'Nagindas Khandwala' },
    { name: 'SIR M VISVESVARAYA (SVIMS)', q: 'Visvesvaraya' },
    { name: 'SPDT TIBREWALA', q: 'Tibrewala' },
    { name: 'KOSHYS INSTITUTE', q: 'Koshys' },
    { name: 'CANARA BANK SCHOOL OF MGMT', q: 'Canara Bank' },
    { name: 'IIIT BANGALORE', q: 'IIIT Bangalore' },
    { name: 'PATEL INSTITUTE', q: 'Patel Institute' },
    { name: 'ATHARVA SCHOOL OF BUSINESS', q: 'Atharva' }
  ];

  for (const item of queries) {
    try {
      const res = await fetch(`http://localhost:5000/api/colleges?q=${encodeURIComponent(item.q)}`);
      const data = await res.json();
      const colleges = data.colleges || (Array.isArray(data) ? data : []);
      const first = colleges[0];
      if (first) {
        console.log(`Target: ${item.name}`);
        console.log(`  -> Match: ${first.name} (ID: ${first.id})`);
        console.log(`  -> Image Path: ${first.image}`);
        
        // Test fetching the image through Vite frontend proxy (5173)
        const imgUrl = first.image.startsWith('http') ? first.image : `http://localhost:5173${first.image}`;
        const imgRes = await fetch(imgUrl);
        console.log(`  -> Image HTTP Status (via Port 5173): HTTP ${imgRes.status} [${imgRes.headers.get('content-type')}]`);
        console.log('------------------------------------------------------------');
      } else {
        console.log(`❌ No match found for: ${item.name}`);
      }
    } catch(e) {
      console.log(`Error querying ${item.name}: ${e.message}`);
    }
  }
}

testLocalhostAudit();
