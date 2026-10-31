const fs = require('fs');
const data = JSON.parse(fs.readFileSync('public/siteData.json', 'utf8'));
const colleges = data.colleges;

const c1 = colleges.find(c => c.id === 10635);
const c2 = colleges.find(c => c.id === 10800);
const c3 = colleges.find(c => c.id === 10833);
const dtu = colleges.filter(c => c.name.toLowerCase().includes('delhi technological university'));
const iitd = colleges.filter(c => c.name.toLowerCase().includes('iit delhi'));

console.log('--- CRITICAL TARGET COLLEGES ---');
console.log('1. IIM Calcutta Course 2027 (ID 10635):', c1 ? { name: c1.name, img: c1.img } : 'NOT FOUND');
console.log('2. Khandelwal College (ID 10800):', c2 ? { name: c2.name, img: c2.img } : 'NOT FOUND');
console.log('3. RVS College (ID 10833):', c3 ? { name: c3.name, img: c3.img } : 'NOT FOUND');
console.log('4. DTU Sample:', dtu.slice(0, 2).map(c => ({ id: c.id, name: c.name, img: c.img })));
console.log('5. IIT Delhi Sample:', iitd.slice(0, 2).map(c => ({ id: c.id, name: c.name, img: c.img })));

console.log('\n--- VERIFYING FILE ASSETS EXIST ON DISK ---');
[c1.img, c2.img, c3.img, dtu[0].img, iitd[0].img].forEach(imgPath => {
  const diskPath = 'public' + imgPath;
  console.log(imgPath, 'exists:', fs.existsSync(diskPath), fs.existsSync(diskPath) ? '(' + fs.statSync(diskPath).size + ' bytes)' : '');
});

console.log('\n--- SIMULATING USER SEARCH QUERY: "Top MBA Colleges in India" ---');
const rawQ = 'top mba colleges in india'.toLowerCase().trim();
const stopWords = new Set(['top', 'best', 'in', 'of', 'for', 'the', 'and', 'colleges', 'college', 'institutes', 'institute', 'universities', 'university', 'list']);
const rawTokens = rawQ.replace(/[^\w\s\.]/g, ' ').split(/\s+/).filter(t => t.length > 1 && !stopWords.has(t));
const tokenGroups = rawTokens.map(tok => {
  const tClean = tok.replace(/\./g, '');
  if (tClean === 'mba' || tClean === 'pgdm' || tClean === 'management') return ['mba', 'pgdm', 'management'];
  if (tClean === 'india') return ['india'];
  return [tok, tClean];
});

const safeStr = (v) => Array.isArray(v) ? v.join(' ') : String(v || '');
let results = colleges.filter(c => {
  const searchTarget = [
    safeStr(c.name), safeStr(c.shortName), safeStr(c.location), safeStr(c.state),
    safeStr(c.country), safeStr(c.type), safeStr(c.ownership), safeStr(c.about),
    safeStr(c.exams), safeStr(c.facilities),
    ...(c.courses || []).map(co => safeStr(co.title) + ' ' + safeStr(co.type) + ' ' + safeStr(co.division))
  ].join(' ').toLowerCase();
  return tokenGroups.every(synonyms => synonyms.some(syn => searchTarget.includes(syn)));
});
results.sort((a, b) => (a.ranking || 999) - (b.ranking || 999) || (b.rating || 0) - (a.rating || 0));

const top12 = results.slice(0, 12);
console.log('Display Page 1 (12 Cards):');
const seen = new Set();
let duplicatesFound = 0;
top12.forEach((c, i) => {
  const isDup = seen.has(c.img);
  if (isDup) duplicatesFound++;
  seen.add(c.img);
  console.log(`Card ${i + 1}: ${c.name} (ID: ${c.id}) => ${c.img} ${isDup ? '⚠️ DUPLICATE' : '✅ UNIQUE'}`);
});
console.log('\nTotal Duplicates in top 12:', duplicatesFound);
