const fs = require('fs');
const path = require('path');

const siteDataPath = path.resolve('public/siteData.json');
const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const colleges = siteData.colleges;

const START_INDEX = 3671;

function cleanNameTitle(str) {
  if (!str) return '';
  const words = str.split(' ');
  return words.map((w, idx) => {
    const upper = w.toUpperCase();
    if (/^(IIT|NIT|IIIT|IIM|AIIMS|BCA|MCA|MBA|BTECH|MTECH|BBA|LLB|LLM|MBBS|BDS|BPHARM|MPHARM|BCOM|MCOM|BSC|MSC|BA|MA|ICA|AGB|AGM|AKM|ABS|ABR|JNRM|ANCOL|DBRAIT|ANIIMS|NIFT|NLU|DTU|NSUT|KGMU|CMC|WBNUJS|PG|UG)$/i.test(w)) {
      return upper;
    }
    if (w.includes('.')) {
      return upper;
    }
    if (idx > 0 && /^(OF|AND|FOR|IN|AT|TO|THE|DE)$/i.test(w)) {
      return w.toLowerCase();
    }
    return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
  }).join(' ');
}

for (let i = START_INDEX; i < colleges.length; i++) {
  const c = colleges[i];
  if (c.name) {
    c.name = cleanNameTitle(c.name);
    c.shortName = c.name.split(' ').slice(0, 3).join(' ');
  }
}

fs.writeFileSync(siteDataPath, JSON.stringify(siteData, null, 2), 'utf8');
console.log('✅ Polished all college titles with proper casing.');
