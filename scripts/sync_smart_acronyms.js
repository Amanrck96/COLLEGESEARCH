import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_DATA_FILE = path.join(__dirname, '../public/siteData.json');
const CATEGORIZED_FILE = path.join(__dirname, 'categorized_scraped_colleges.json');

function computeSmartAcronym(nameStr) {
  const name = String(nameStr || '');
  const stopWords = new Set(['of', 'and', 'the', 'for', 'in', 'at', 'to', 'a', 'an']);
  const clean = name.split(',')[0].split(' - ')[0].split(':')[0];
  const words = clean.split(/\s+/).filter(w => !stopWords.has(w.toLowerCase()));
  const acr = words.map(w => w[0]).filter(c => /[A-Za-z0-9]/.test(c)).join('').toUpperCase();
  return acr;
}

function syncCategorizedToSite() {
  console.log('🔄 Syncing Categorized Scraped Colleges to siteData.json with Smart Acronyms...');

  if (!fs.existsSync(CATEGORIZED_FILE) || !fs.existsSync(SITE_DATA_FILE)) {
    console.error('Files missing');
    return;
  }

  const scraped = JSON.parse(fs.readFileSync(CATEGORIZED_FILE, 'utf-8'));
  const siteData = JSON.parse(fs.readFileSync(SITE_DATA_FILE, 'utf-8'));
  const colleges = siteData.colleges || [];

  const existingMap = new Map();
  colleges.forEach(c => {
    if (c && c.name) {
      existingMap.set(String(c.name).toLowerCase().trim(), c);
    }
  });

  let updatedCount = 0;
  let addedCount = 0;

  scraped.forEach(s => {
    const sName = String(s.name || '');
    const smartAcronym = computeSmartAcronym(sName);
    let shortName = s.shortName || smartAcronym;
    
    // Explicit mappings for top colleges
    if (sName.includes('Symbiosis Institute of Business Management') || sName.includes('Symbiosis International')) shortName = 'SIBM Pune';
    if (sName.includes('Jamnalal Bajaj')) shortName = 'JBIMS Mumbai';
    if (sName.includes('Faculty of Management Studies')) shortName = 'FMS Delhi';
    if (sName.includes('Narsee Monjee') || sName.includes('NMIMS')) shortName = 'NMIMS Mumbai';
    if (sName.includes('Indian Institute of Management Ahmedabad')) shortName = 'IIM Ahmedabad';
    if (sName.includes('Indian Institute of Management Bangalore')) shortName = 'IIM Bangalore';
    if (sName.includes('Indian Institute of Management Calcutta')) shortName = 'IIM Calcutta';
    if (sName.includes('Indian Institute of Management Mumbai')) shortName = 'IIM Mumbai';
    if (sName.includes('Xavier Institute of Management')) shortName = 'XIME Bangalore';
    if (sName.includes('SP Jain') || sName.includes('S.P. Jain')) shortName = 'SPJIMR Mumbai';
    if (sName.includes('Welingkar')) shortName = 'WeSchool Mumbai';

    s.shortName = shortName;

    const key = sName.toLowerCase().trim();
    if (existingMap.has(key)) {
      const existing = existingMap.get(key);
      Object.assign(existing, s);
      updatedCount++;
    } else {
      const maxId = Math.max(0, ...colleges.map(c => parseInt(c.id) || 0));
      s.id = maxId + 1;
      colleges.unshift(s);
      existingMap.set(key, s);
      addedCount++;
    }
  });

  siteData.colleges = colleges;
  fs.writeFileSync(SITE_DATA_FILE, JSON.stringify(siteData, null, 2), 'utf-8');
  console.log(`✅ Sync Completed! Updated: ${updatedCount} | Added: ${addedCount} | Total Colleges: ${colleges.length}`);
}

syncCategorizedToSite();
