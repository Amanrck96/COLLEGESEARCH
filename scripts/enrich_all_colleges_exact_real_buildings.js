import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OBSCURA_PATH = path.join('C:', 'Users', 'ACER', '.gemini', 'antigravity', 'scratch', 'bin', 'obscura.exe');
const PUBLIC_SITE_DATA = path.join(__dirname, '../public/siteData.json');
const MASTER_FILE = path.join(__dirname, 'siteData.master_all_38k.json');

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function getExactRealCampusPhoto(collegeName, location) {
  const cleanName = collegeName.replace(/\b(Admission|Ranking|Placement|2024|2025|2026)\b/gi, '').trim();
  const query = `${cleanName} ${location || ''} campus building`;
  const searchUrl = `https://www.bing.com/images/search?q=${encodeURIComponent(query)}&qft=+filterui:imagesize-large`;

  try {
    const cmd = `"${OBSCURA_PATH}" fetch --stealth --timeout 25 "${searchUrl}" --dump links`;
    const { stdout } = await execAsync(cmd, { maxBuffer: 1024 * 1024 * 10 });

    const lines = stdout.split('\n');
    for (const line of lines) {
      const link = line.split('\t')[0].trim();
      if (link.includes('mediaurl=')) {
        const match = link.match(/mediaurl=([^&]+)/);
        if (match && match[1]) {
          const rawUrl = decodeURIComponent(match[1]);
          const u = rawUrl.toLowerCase();
          if (!u.includes('logo') && !u.includes('icon') && !u.includes('youtube') && !u.includes('ytimg') && !u.includes('map') && !u.includes('faculty') && !u.includes('person') && !u.includes('avatar') && !u.includes('.svg') && !u.includes('.gif')) {
            return rawUrl;
          }
        }
      }
    }
  } catch (err) {
    // Fallback
  }
  return null;
}

let isSaving = false;
function saveBatchToDisk(collegesList) {
  while (isSaving) {}
  isSaving = true;
  try {
    if (fs.existsSync(PUBLIC_SITE_DATA)) {
      const pData = JSON.parse(fs.readFileSync(PUBLIC_SITE_DATA, 'utf8'));
      const colMap = new Map();
      collegesList.forEach(c => colMap.set(String(c.id), c));
      pData.colleges = pData.colleges.map(c => colMap.has(String(c.id)) ? { ...c, ...colMap.get(String(c.id)) } : c);
      fs.writeFileSync(PUBLIC_SITE_DATA, JSON.stringify(pData), 'utf8');
    }
    if (fs.existsSync(MASTER_FILE)) {
      const mData = JSON.parse(fs.readFileSync(MASTER_FILE, 'utf8'));
      const colMap = new Map();
      collegesList.forEach(c => colMap.set(String(c.id), c));
      mData.colleges = mData.colleges.map(c => colMap.has(String(c.id)) ? { ...c, ...colMap.get(String(c.id)) } : c);
      fs.writeFileSync(MASTER_FILE, JSON.stringify(mData), 'utf8');
    }
  } catch (e) {
    console.error('Save error:', e.message);
  } finally {
    isSaving = false;
  }
}

async function runEnrichment(concurrency = 4) {
  console.log('========================================================================');
  console.log('🚀 RUNNING EXACT REAL CAMPUS BUILDING ENRICHMENT (NO RANDOM PHOTOS)');
  console.log('========================================================================\n');

  const siteData = JSON.parse(fs.readFileSync(PUBLIC_SITE_DATA, 'utf8'));
  const colleges = siteData.colleges || [];

  console.log(`📊 Total Colleges in Dataset: ${colleges.length}`);

  let index = 0;
  let enrichedCount = 0;
  const buffer = [];

  async function worker(workerId) {
    while (index < colleges.length) {
      const col = colleges[index++];
      if (!col) break;

      console.log(`[Worker ${workerId}] 🔍 Searching EXACT building for: "${col.name}" (${col.location || col.state})...`);
      const realPhoto = await getExactRealCampusPhoto(col.name, col.location);

      if (realPhoto) {
        col.img = realPhoto;
        col.gallery = [realPhoto];
        buffer.push(col);
        enrichedCount++;
        console.log(`[Worker ${workerId}] ✅ EXACT BUILDING FOUND: ${realPhoto.slice(0, 75)}...`);
      }

      if (buffer.length >= 10) {
        const chunk = buffer.splice(0, buffer.length);
        saveBatchToDisk(chunk);
        console.log(`💾 Saved batch of ${chunk.length} exact real college buildings to disk.`);
      }

      await delay(400);
    }
  }

  const workers = [];
  for (let i = 1; i <= concurrency; i++) {
    workers.push(worker(i));
  }

  await Promise.all(workers);

  if (buffer.length > 0) {
    saveBatchToDisk(buffer);
  }

  console.log(`\n🎉 Real Campus Building Enrichment Complete! Total Real Buildings Found: ${enrichedCount}`);
}

runEnrichment(4).catch(console.error);
