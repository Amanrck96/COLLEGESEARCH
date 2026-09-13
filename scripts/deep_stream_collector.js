import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const execAsync = promisify(exec);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OBSCURA_PATH = path.join('C:', 'Users', 'ACER', '.gemini', 'antigravity', 'scratch', 'bin', 'obscura.exe');
const QUEUE_FILE = path.join(__dirname, 'master_college_queue.json');

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Multi-stream listing sources across India
const STREAM_DEFINITIONS = [
  { stream: 'Engineering', baseUrl: 'https://www.shiksha.com/b-tech/colleges/b-tech-colleges-india', maxPages: 8 },
  { stream: 'Engineering Ranking', baseUrl: 'https://www.shiksha.com/b-tech/ranking/top-engineering-colleges-in-india/44-2-0-0-0', maxPages: 3 },
  { stream: 'MBA/Management', baseUrl: 'https://www.shiksha.com/mba/colleges/mba-colleges-india', maxPages: 8 },
  { stream: 'MBA Ranking', baseUrl: 'https://www.shiksha.com/mba/ranking/top-mba-colleges-in-india/2-2-0-0-0', maxPages: 3 },
  { stream: 'Medicine & Health', baseUrl: 'https://www.shiksha.com/medicine-health-sciences/colleges/colleges-india', maxPages: 6 },
  { stream: 'Medical Ranking', baseUrl: 'https://www.shiksha.com/medicine-health-sciences/ranking/top-medical-colleges-in-india/100-2-0-0-0', maxPages: 3 },
  { stream: 'Law', baseUrl: 'https://www.shiksha.com/law/colleges/colleges-india', maxPages: 5 },
  { stream: 'Science & B.Sc', baseUrl: 'https://www.shiksha.com/science/colleges/colleges-india', maxPages: 5 },
  { stream: 'Commerce & B.Com', baseUrl: 'https://www.shiksha.com/accounting-commerce/colleges/b-com-colleges-india', maxPages: 5 },
  { stream: 'IT & BCA/MCA', baseUrl: 'https://www.shiksha.com/it-software/colleges/bca-colleges-india', maxPages: 5 },
  { stream: 'Pharmacy', baseUrl: 'https://www.shiksha.com/medicine-health-sciences/pharmacy/colleges/colleges-india', maxPages: 5 },
  { stream: 'Design & Fashion', baseUrl: 'https://www.shiksha.com/design/colleges/colleges-india', maxPages: 4 }
];

function isCleanCollegeUrl(link) {
  if (!link) return false;
  if (!link.startsWith('https://www.shiksha.com/college/') && !link.startsWith('https://www.shiksha.com/university/')) {
    return false;
  }
  const badPatterns = [
    '/reviews', '/admission', '/courses', '/fees', '/placement',
    '/cutoff', '/faculty', '/gallery', '/questions', '/compare',
    '-exam', '/course-', '/articles', '/scholarship', '/hostel', '/faq'
  ];
  return !badPatterns.some(p => link.includes(p));
}

export async function deepDiscoverAllStreams() {
  console.log('===============================================================');
  console.log('🌐 Obscura Deep Multi-Stream URL Discovery Engine');
  console.log('===============================================================\n');

  let queue = [];
  if (fs.existsSync(QUEUE_FILE)) {
    try {
      queue = JSON.parse(fs.readFileSync(QUEUE_FILE, 'utf-8'));
      console.log(`📁 Loaded ${queue.length} existing items in master queue.`);
    } catch (e) {
      queue = [];
    }
  }

  const existingMap = new Map(queue.map(item => [item.url, item]));
  let totalNewAdded = 0;

  for (const def of STREAM_DEFINITIONS) {
    console.log(`\n📚 Scanning Stream: [${def.stream}] (Pages: 1 to ${def.maxPages})`);

    for (let page = 1; page <= def.maxPages; page++) {
      const pageUrl = page === 1 ? def.baseUrl : `${def.baseUrl}-${page}`;
      process.stdout.write(`   ↳ Page ${page}/${def.maxPages}... `);

      try {
        const cmd = `"${OBSCURA_PATH}" fetch --stealth --timeout 35 "${pageUrl}" --dump links`;
        const { stdout } = await execAsync(cmd, { maxBuffer: 1024 * 1024 * 10 });

        const lines = stdout.split('\n');
        let pageCount = 0;

        for (const line of lines) {
          const link = line.split('\t')[0].trim();
          if (isCleanCollegeUrl(link)) {
            const cleanUrl = link.replace(/\/$/, '');
            if (!existingMap.has(cleanUrl)) {
              const entry = {
                url: cleanUrl,
                stream: def.stream.split(' ')[0],
                status: 'PENDING',
                discoveredAt: new Date().toISOString()
              };
              existingMap.set(cleanUrl, entry);
              pageCount++;
              totalNewAdded++;
            }
          }
        }

        console.log(`found ${pageCount} new colleges`);
        await delay(1200);
      } catch (err) {
        console.log(`failed (${err.message.slice(0, 40)}...)`);
      }
    }
  }

  const finalQueue = Array.from(existingMap.values());
  fs.writeFileSync(QUEUE_FILE, JSON.stringify(finalQueue, null, 2), 'utf-8');

  console.log('\n===============================================================');
  console.log(`✨ Discovery Complete!`);
  console.log(`📊 Total Colleges in Master Queue: ${finalQueue.length}`);
  console.log(`🆕 Newly Added: ${totalNewAdded}`);
  console.log(`💾 Saved to: ${QUEUE_FILE}`);
  console.log('===============================================================\n');

  return finalQueue;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  deepDiscoverAllStreams();
}
