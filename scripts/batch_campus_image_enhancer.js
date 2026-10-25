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
const PUBLIC_SITE_DATA = path.join(__dirname, '../public/siteData.json');
const MASTER_FILE = path.join(__dirname, 'siteData.master_all_38k.json');

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
  return (u.startsWith('http://') || u.startsWith('https://')) && 
         (u.includes('.jpg') || u.includes('.jpeg') || u.includes('.png') || u.includes('.webp') || u.includes('image') || u.includes('photo') || u.includes('banner') || u.includes('campus') || u.includes('view') || u.includes('slide') || u.includes('shiksha.ws') || u.includes('shiksha.com'));
}

function resolveUrl(base, relative) {
  try {
    return new URL(relative, base).href;
  } catch (e) {
    return null;
  }
}

/**
 * 1. Extract Real Campus Images from Official College Website
 */
async function extractFromOfficialWebsite(websiteUrl) {
  if (!websiteUrl || !websiteUrl.startsWith('http')) return null;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);

    let html = '';
    try {
      const res = await fetch(websiteUrl, {
        signal: controller.signal,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
        },
        agent: insecureAgent
      });
      clearTimeout(timeoutId);
      if (res.ok) {
        html = await res.text();
      }
    } catch (e) {
      clearTimeout(timeoutId);
    }

    if (!html || html.length < 500) return null;
    const $ = cheerio.load(html);
    const candidates = [];

    // Check OpenGraph & Twitter image
    const ogImg = $('meta[property="og:image"]').attr('content') || $('meta[name="og:image"]').attr('content') || $('meta[property="twitter:image"]').attr('content');
    if (ogImg) {
      const abs = resolveUrl(websiteUrl, ogImg);
      if (abs && isValidCampusImageUrl(abs)) candidates.push(abs);
    }

    // Check High-res Banner / Campus Images
    $('img').each((_, el) => {
      const src = $(el).attr('src') || $(el).attr('data-src');
      const alt = ($(el).attr('alt') || '').toLowerCase();
      const cls = ($(el).attr('class') || '').toLowerCase();
      const id = ($(el).attr('id') || '').toLowerCase();

      if (src && (cls.includes('banner') || cls.includes('hero') || cls.includes('slide') || cls.includes('campus') || cls.includes('building') ||
          id.includes('banner') || id.includes('hero') || id.includes('campus') ||
          alt.includes('campus') || alt.includes('building') || alt.includes('college'))) {
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
 * 2. Extract Real Campus Images from Shiksha Media Gallery CDN via Obscura
 */
async function extractFromShikshaMedia(collegeName) {
  try {
    const searchUrl = `https://www.shiksha.com/search?q=${encodeURIComponent(collegeName)}`;
    const cmdLinks = `"${OBSCURA_PATH}" fetch --stealth --timeout 20 "${searchUrl}" --dump links`;
    const { stdout: linksOut } = await execAsync(cmdLinks, { maxBuffer: 1024 * 1024 * 5 });

    let collegeSlug = null;
    const lines = linksOut.split('\n');
    for (const line of lines) {
      const link = line.split('\t')[0].trim();
      if ((link.includes('/college/') || link.includes('/university/')) && !link.includes('/reviews') && !link.includes('/courses')) {
        collegeSlug = link.replace(/\/$/, '');
        break;
      }
    }

    if (collegeSlug) {
      const galleryUrl = `${collegeSlug}/gallery`;
      const cmdHtml = `"${OBSCURA_PATH}" fetch --stealth --timeout 25 "${galleryUrl}" --dump html`;
      const { stdout: html } = await execAsync(cmdHtml, { maxBuffer: 1024 * 1024 * 15 });
      const $ = cheerio.load(html);

      const galleryImages = [];
      $('img').each((_, el) => {
        const src = $(el).attr('src') || $(el).attr('data-src');
        if (src && (src.includes('img.shiksha.ws') || src.includes('images.shiksha.com')) && isValidCampusImageUrl(src)) {
          const highRes = src.replace('/t/', '/c/').replace('/thumb/', '/original/');
          galleryImages.push(highRes);
        }
      });

      if (galleryImages.length > 0) {
        return {
          coverImage: galleryImages[0],
          gallery: galleryImages.slice(0, 6)
        };
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
    // Update public/siteData.json
    if (fs.existsSync(PUBLIC_SITE_DATA)) {
      const pData = JSON.parse(fs.readFileSync(PUBLIC_SITE_DATA, 'utf8'));
      const pColleges = pData.colleges || [];
      const colMap = new Map();
      collegesList.forEach(c => colMap.set(String(c.id), c));
      
      const updated = pColleges.map(c => colMap.has(String(c.id)) ? { ...c, ...colMap.get(String(c.id)) } : c);
      pData.colleges = updated;
      fs.writeFileSync(PUBLIC_SITE_DATA, JSON.stringify(pData), 'utf8');
    }

    // Update master database
    if (fs.existsSync(MASTER_FILE)) {
      const mData = JSON.parse(fs.readFileSync(MASTER_FILE, 'utf8'));
      const mColleges = mData.colleges || [];
      const colMap = new Map();
      collegesList.forEach(c => colMap.set(String(c.id), c));

      const updated = mColleges.map(c => colMap.has(String(c.id)) ? { ...c, ...colMap.get(String(c.id)) } : c);
      mData.colleges = updated;
      fs.writeFileSync(MASTER_FILE, JSON.stringify(mData), 'utf8');
    }
  } catch (e) {
    console.error('Batch Save Error:', e.message);
  } finally {
    isSaving = false;
  }
}

async function runBatchCampusImageEnhancer(concurrency = 5) {
  console.log(`🚀 Starting Full Multi-Source Campus Image Enhancer with ${concurrency} parallel workers...\n`);

  if (!fs.existsSync(PUBLIC_SITE_DATA)) {
    console.error('public/siteData.json not found!');
    return;
  }

  const siteData = JSON.parse(fs.readFileSync(PUBLIC_SITE_DATA, 'utf8'));
  const colleges = siteData.colleges || [];

  // Filter colleges that still need real campus photos
  const needsImageColleges = colleges.filter(c => !c.img || c.img.includes('unsplash'));
  console.log(`📊 Total Colleges in Dataset: ${colleges.length}`);
  console.log(`🎯 Colleges Pending Real Photo Enhancement: ${needsImageColleges.length}`);

  let index = 0;
  let enhancedCount = 0;
  const bufferToSave = [];

  async function worker(workerId) {
    while (index < needsImageColleges.length) {
      const col = needsImageColleges[index++];
      if (!col) break;

      try {
        let result = null;

        // 1. Try Official Website first
        if (col.website && col.website.startsWith('http')) {
          result = await extractFromOfficialWebsite(col.website);
        }

        // 2. If no official image, try Shiksha Media Gallery CDN
        if (!result || !result.coverImage) {
          result = await extractFromShikshaMedia(col.name);
        }

        if (result && result.coverImage) {
          col.img = result.coverImage;
          if (result.gallery && result.gallery.length > 0) {
            col.gallery = result.gallery;
          }
          bufferToSave.push(col);
          enhancedCount++;
          console.log(`[Worker ${workerId}] ✅ Enhanced Photo: "${col.name}" -> ${result.coverImage.slice(0, 65)}...`);
        }

        if (bufferToSave.length >= 15) {
          const chunk = bufferToSave.splice(0, bufferToSave.length);
          saveBatchToDisk(chunk);
          console.log(`💾 Saved batch of ${chunk.length} enhanced colleges to disk.`);
        }

        await delay(400);
      } catch (err) {
        // Continue
      }
    }
  }

  const workers = [];
  for (let i = 1; i <= concurrency; i++) {
    workers.push(worker(i));
  }

  await Promise.all(workers);

  if (bufferToSave.length > 0) {
    saveBatchToDisk(bufferToSave);
  }

  console.log(`\n🎉 Full Batch Campus Image Enhancer finished! Total Enhanced: ${enhancedCount}`);
}

runBatchCampusImageEnhancer(5).catch(console.error);
