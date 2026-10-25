import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const backupFile = path.join(__dirname, '../public/siteData.backup.json');
const currentFile = path.join(__dirname, '../public/siteData.json');

const origData = JSON.parse(fs.readFileSync(backupFile, 'utf-8'));
const currentData = JSON.parse(fs.readFileSync(currentFile, 'utf-8'));

console.log('--------------------------------------------------');
console.log('🔍 BEFORE (Original Seed Sample Data):');
console.log('--------------------------------------------------');
console.log(JSON.stringify(origData.colleges[0], null, 2));

console.log('\n--------------------------------------------------');
console.log('✨ AFTER (Newly Scraped Rich Shiksha Data):');
console.log('--------------------------------------------------');
console.log(JSON.stringify(currentData.colleges[0], null, 2));
