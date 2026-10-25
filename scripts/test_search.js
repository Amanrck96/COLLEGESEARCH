import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../public/siteData.json'), 'utf-8'));
const colleges = data.colleges;

function testSearch(query) {
  console.log(`\n🔎 Testing Search Query: "${query}"`);
  const rawQ = query.toLowerCase().trim();
  const stopWords = new Set(['top', 'best', 'in', 'of', 'for', 'the', 'and', 'colleges', 'college', 'institutes', 'institute', 'universities', 'university', 'list']);
  const tokens = rawQ.split(/[\s,]+/).filter(t => t.length > 1 && !stopWords.has(t));

  let results = colleges.filter(c => {
    const searchTarget = [
      c.name || '',
      c.shortName || '',
      c.location || '',
      c.state || '',
      c.country || '',
      c.type || '',
      c.ownership || '',
      c.about || '',
      c.exams || '',
      c.facilities || '',
      ...(c.courses || []).map(co => `${co.title || ''} ${co.type || ''} ${co.division || ''}`)
    ].join(' ').toLowerCase();

    return tokens.every(token => searchTarget.includes(token));
  });

  if (rawQ.includes('top') || rawQ.includes('best')) {
    results.sort((a, b) => (a.ranking || 999) - (b.ranking || 999) || (b.rating || 0) - (a.rating || 0));
  }

  console.log(`📊 Found ${results.length} matching colleges!`);
  results.slice(0, 5).forEach((c, i) => {
    console.log(`   ${i + 1}. ${c.name} | Location: ${c.location}, ${c.state} | Rank: #${c.ranking} | Fees: ${c.fees}`);
  });
}

testSearch('Top Medical Colleges in Karnataka');
testSearch('Engineering colleges in Delhi');
testSearch('MBA colleges in Mumbai');
testSearch('B.Tech in Bangalore');
