import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';
import * as cheerio from 'cheerio';

const execAsync = promisify(exec);
const OBSCURA_PATH = path.join('C:', 'Users', 'ACER', '.gemini', 'antigravity', 'scratch', 'bin', 'obscura.exe');

async function searchExactCampusBuilding(collegeName, location) {
  const query = `${collegeName} ${location || ''} campus building`;
  console.log(`\n🔍 Searching exact campus building for: "${query}"...`);

  try {
    // Search on DuckDuckGo HTML / Bing images for exact college campus building
    const searchUrl = `https://html.duckduckgo.com/html/?q=${encodeURIComponent(query + ' site:shiksha.com OR site:collegedunia.com OR site:careers360.com')}`;
    const cmd = `"${OBSCURA_PATH}" fetch --stealth --timeout 25 "${searchUrl}" --dump links`;
    const { stdout } = await execAsync(cmd);

    const lines = stdout.split('\n');
    let targetPage = null;
    for (const line of lines) {
      const url = line.split('\t')[0].trim();
      if ((url.includes('shiksha.com/college/') || url.includes('collegedunia.com/college/') || url.includes('careers360.com/colleges/')) && !url.includes('/reviews') && !url.includes('/courses')) {
        targetPage = url;
        break;
      }
    }

    if (targetPage) {
      console.log(`   👉 Found verified portal page: ${targetPage}`);
      const pageCmd = `"${OBSCURA_PATH}" fetch --stealth --timeout 25 "${targetPage}" --dump html`;
      const { stdout: html } = await execAsync(pageCmd);
      const $ = cheerio.load(html);

      // Check og:image or banner
      const og = $('meta[property="og:image"]').attr('content') || $('meta[name="og:image"]').attr('content');
      if (og && !og.includes('logo') && !og.includes('default') && !og.includes('placeholder')) {
        console.log(`   ✅ Exact Real Campus Building Found: ${og}`);
        return og;
      }
    }
  } catch (e) {
    console.error('Search error:', e.message);
  }

  return null;
}

async function run() {
  const testList = [
    { name: 'Dr. B.R. Ambedkar University', location: 'Srikakulam' },
    { name: 'Miracle Educational Society Group of Institutions', location: 'Vizianagaram' },
    { name: 'Aditya Degree College', location: 'Visakhapatnam' },
    { name: 'Alwardas Polytechnic', location: 'Visakhapatnam' },
    { name: 'Andaman College ANCOL', location: 'Port Blair' }
  ];

  for (const c of testList) {
    await searchExactCampusBuilding(c.name, c.location);
  }
}

run();
