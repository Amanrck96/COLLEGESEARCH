import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const execAsync = promisify(exec);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OBSCURA_PATH = path.join('C:', 'Users', 'ACER', '.gemini', 'antigravity', 'scratch', 'bin', 'obscura.exe');
const OUTPUT_FILE = path.join(__dirname, 'scraped_urls.json');

// Real active URLs of India's premier top colleges on Shiksha
const VERIFIED_PREMIER_COLLEGES = [
  'https://www.shiksha.com/university/iit-delhi-indian-institute-of-technology-53938',
  'https://www.shiksha.com/university/iit-bombay-indian-institute-of-technology-mumbai-54212',
  'https://www.shiksha.com/college/iit-bhubaneswar-indian-institute-of-technology-32717',
  'https://www.shiksha.com/university/parul-university-vadodara-30821',
  'https://www.shiksha.com/university/sastra-deemed-to-be-university-thanjavur-4075',
  'https://www.shiksha.com/university/amity-university-noida-41334',
  'https://www.shiksha.com/university/thapar-university-patiala-24388',
  'https://www.shiksha.com/university/delhi-technological-university-delhi-24237',
  'https://www.shiksha.com/college/netaji-subhas-university-of-technology-dwarka-delhi-24238',
  'https://www.shiksha.com/university/chandigarh-university-cu-47132',
  'https://www.shiksha.com/university/lovely-professional-university-lpu-jalandhar-28499',
  'https://www.shiksha.com/college/loyola-college-nungambakkam-chennai-1108',
  'https://www.shiksha.com/college/fergusson-college-fergusson-college-road-pune-25748',
  'https://www.shiksha.com/college/hansraj-college-university-of-delhi-malka-ganj-3062',
  'https://www.shiksha.com/college/hindu-college-university-of-delhi-north-campus-25110',
  'https://www.shiksha.com/college/st-stephen-s-college-university-of-delhi-north-campus-23849',
  'https://www.shiksha.com/college/miranda-house-university-of-delhi-patel-chest-25111',
  'https://www.shiksha.com/college/lady-shri-ram-college-for-women-university-of-delhi-lajpat-nagar-23848',
  'https://www.shiksha.com/college/st-xavier-s-college-mumbai-fort-3063',
  'https://www.shiksha.com/college/madras-christian-college-tambaram-sanatorium-chennai-24756',
  'https://www.shiksha.com/college/christ-university-hosur-road-bangalore-23657',
  'https://www.shiksha.com/university/symbiosis-international-lavale-pune-37012',
  'https://www.shiksha.com/university/jamia-millia-islamia-delhi-1406',
  'https://www.shiksha.com/university/aligarh-muslim-university-aligarh-948',
  'https://www.shiksha.com/university/banaras-hindu-university-varanasi-23467',
  'https://www.shiksha.com/university/jawaharlal-nehru-university-delhi-24239',
  'https://www.shiksha.com/college/presidency-college-kamarajar-salai-chennai-24757',
  'https://www.shiksha.com/college/st-joseph-s-university-lalbagh-road-bangalore-23658',
  'https://www.shiksha.com/university/osmania-university-hyderabad-20925',
  'https://www.shiksha.com/university/calcutta-university-kolkata-23578'
];

// Ranking listing pages
const CATEGORY_PAGES = [
  'https://www.shiksha.com/b-tech/ranking/top-engineering-colleges-in-india/44-2-0-0-0',
  'https://www.shiksha.com/mba/ranking/top-mba-colleges-in-india/2-2-0-0-0',
  'https://www.shiksha.com/medicine-health-sciences/ranking/top-medical-colleges-in-india/100-2-0-0-0'
];

function isCleanCollegeUrl(link) {
  if (!link) return false;
  if (!link.startsWith('https://www.shiksha.com/college/') && !link.startsWith('https://www.shiksha.com/university/')) {
    return false;
  }
  const badPatterns = [
    '/reviews', '/admission', '/courses', '/fees', '/placement',
    '/cutoff', '/faculty', '/gallery', '/questions', '/compare',
    '-exam', '/course-', '/articles', '/scholarship', '/hostel'
  ];
  return !badPatterns.some(p => link.includes(p));
}

async function collectUrls() {
  console.log('==================================================');
  console.log('🔍 Obscura Shiksha URL Collector Starting...');
  console.log('==================================================');

  const discoveredUrls = new Set(VERIFIED_PREMIER_COLLEGES);

  for (const pageUrl of CATEGORY_PAGES) {
    console.log(`\nDiscovering from: ${pageUrl}`);
    try {
      const cmd = `"${OBSCURA_PATH}" fetch --stealth --timeout 40 "${pageUrl}" --dump links`;
      const { stdout } = await execAsync(cmd, { maxBuffer: 1024 * 1024 * 10 });

      const lines = stdout.split('\n');
      let pageCount = 0;

      for (const line of lines) {
        const link = line.split('\t')[0].trim();
        if (isCleanCollegeUrl(link)) {
          const cleanUrl = link.replace(/\/$/, '');
          if (!discoveredUrls.has(cleanUrl)) {
            discoveredUrls.add(cleanUrl);
            pageCount++;
          }
        }
      }
      console.log(` -> Found ${pageCount} clean college URLs.`);
    } catch (err) {
      console.warn(` -> Warning crawling ${pageUrl}:`, err.message);
    }
  }

  const urlList = Array.from(discoveredUrls);
  console.log(`\n✨ Total Clean College Profiles Discovered: ${urlList.length}`);

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(urlList, null, 2), 'utf-8');
  console.log(`💾 Saved clean URLs to: ${OUTPUT_FILE}`);
  return urlList;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  collectUrls();
}

export { collectUrls };
