async function fetchHtml() {
  try {
    const res = await fetch('https://spdtcollege.ac.in/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    const html = await res.text();
    console.log('HTML length:', html.length);
    const imgMatches = html.match(/<img[^>]+src=["']([^"']+)["']/gi) || [];
    console.log(`Found ${imgMatches.length} images on page:`);
    imgMatches.slice(0, 15).forEach(m => console.log(m));
  } catch(e) {
    console.log('Error:', e.message);
  }
}

fetchHtml();
