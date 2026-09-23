const { exec } = require('child_process');
const OBSCURA_PATH = 'C:/Users/ACER/.gemini/antigravity/scratch/bin/obscura.exe';

function fetchCampusPhotos(name, loc) {
  const query = `${name} ${loc || ''} campus building`;
  const url = `https://www.bing.com/images/search?q=${encodeURIComponent(query)}&qft=+filterui:imagesize-large`;
  const cmd = `"${OBSCURA_PATH}" fetch --stealth --timeout 25 "${url}" --dump links`;
  
  return new Promise((resolve) => {
    exec(cmd, { maxBuffer: 1024 * 1024 * 10 }, (err, stdout) => {
      if (err) return resolve({ error: err.message });
      const lines = stdout.split('\n');
      const found = [];
      for (const line of lines) {
        const link = line.split('\t')[0].trim();
        if (link.includes('mediaurl=')) {
          const match = link.match(/mediaurl=([^&]+)/);
          if (match && match[1]) {
            const rawUrl = decodeURIComponent(match[1]);
            const u = rawUrl.toLowerCase();
            if (!u.includes('logo') && !u.includes('icon') && !u.includes('youtube') && !u.includes('faculty') && !u.includes('avatar') && !u.includes('.svg') && !u.includes('.gif') && !u.includes('banner')) {
              found.push(rawUrl);
            }
          }
        }
      }
      resolve({ count: found.length, images: found.slice(0, 4) });
    });
  });
}

fetchCampusPhotos('PSG College of Technology', 'Coimbatore').then(r => {
  console.log('Result for PSG College of Technology:');
  console.log(JSON.stringify(r, null, 2));
});
