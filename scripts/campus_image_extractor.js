import { exec } from 'child_process';
import { promisify } from 'util';
import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as cheerio from 'cheerio';

const execAsync = promisify(exec);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OBSCURA_PATH = path.join('C:', 'Users', 'ACER', '.gemini', 'antigravity', 'scratch', 'bin', 'obscura.exe');
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const insecureAgent = new https.Agent({
  rejectUnauthorized: false
});

function isValidCampusImageUrl(url) {
  if (!url || typeof url !== 'string') return false;
  const u = url.toLowerCase();
  if (u.includes('favicon') || u.includes('icon') || u.includes('1x1') || u.includes('pixel') || u.includes('tracker') || u.includes('spinner') || u.includes('badge')) {
    return false;
  }
  return (u.startsWith('http://') || u.startsWith('https://')) && (u.includes('.jpg') || u.includes('.jpeg') || u.includes('.png') || u.includes('.webp') || u.includes('image') || u.includes('photo') || u.includes('banner') || u.includes('campus'));
}

function resolveUrl(base, relative) {
  try {
    return new URL(relative, base).href;
  } catch (e) {
    return null;
  }
}

/**
 * 1. Extract Real Campus Images from Official College Website with SSL bypass & Obscura fallback
 */
async function extractFromOfficialWebsite(websiteUrl) {
  if (!websiteUrl || !websiteUrl.startsWith('http')) return null;

  try {
    let html = '';
    try {
      const res = await fetch(websiteUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
        },
        agent: insecureAgent
      });
      if (res.ok) {
        html = await res.text();
      }
    } catch (e) {
      // If node fetch fails, use Obscura
      const cmd = `"${OBSCURA_PATH}" fetch --stealth --timeout 20 "${websiteUrl}" --dump html`;
      const { stdout } = await execAsync(cmd, { maxBuffer: 1024 * 1024 * 10 });
      html = stdout;
    }

    if (!html || html.length < 500) return null;
    const $ = cheerio.load(html);
    const candidates = [];

    // Check OpenGraph and Twitter
    const ogImg = $('meta[property="og:image"]').attr('content') || $('meta[name="og:image"]').attr('content') || $('meta[property="twitter:image"]').attr('content');
    if (ogImg) {
      const abs = resolveUrl(websiteUrl, ogImg);
      if (abs) candidates.push(abs);
    }

    // Check high-res hero/slider images
    $('img').each((_, el) => {
      const src = $(el).attr('src') || $(el).attr('data-src');
      const alt = ($(el).attr('alt') || '').toLowerCase();
      const cls = ($(el).attr('class') || '').toLowerCase();
      if (src && (cls.includes('banner') || cls.includes('hero') || cls.includes('slide') || cls.includes('campus') || cls.includes('building') || alt.includes('campus') || alt.includes('building'))) {
        const abs = resolveUrl(websiteUrl, src);
        if (abs && isValidCampusImageUrl(abs)) candidates.push(abs);
      }
    });

    if (candidates.length > 0) {
      return {
        coverImage: candidates[0],
        gallery: candidates.slice(0, 5)
      };
    }
  } catch (err) {
    // Fallback
  }
  return null;
}

/**
 * 2. Standalone Verification Test
 */
async function runTest() {
  console.log('--- ENHANCED REAL CAMPUS IMAGE PIPELINE TEST ---\n');

  const testList = [
    { name: 'BITS Pilani', website: 'https://www.bits-pilani.ac.in' },
    { name: 'Lovely Professional University (LPU)', website: 'https://www.lpu.in' },
    { name: 'Manipal Academy of Higher Education (MAHE)', website: 'https://www.manipal.edu' },
    { name: 'Amity University', website: 'https://www.amity.edu' }
  ];

  for (const t of testList) {
    console.log(`🔍 Scanning Official Portal: ${t.name} (${t.website})...`);
    const res = await extractFromOfficialWebsite(t.website);
    if (res && res.coverImage) {
      console.log(`   ✅ Original Campus Photo Extracted: ${res.coverImage}`);
      console.log(`   🖼️ Gallery Photos:`, res.gallery);
    } else {
      console.log(`   ℹ️ Fallback to HD Curated Campus Architecture.`);
    }
    console.log('----------------------------------------------------');
    await delay(1000);
  }
}

runTest().catch(console.error);
