import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataPath = path.join(__dirname, '../public/siteData.json');

try {
  const fileContent = fs.readFileSync(dataPath, 'utf8');
  const siteData = JSON.parse(fileContent);
  const colleges = siteData.colleges || [];
  console.log(`Total colleges in siteData.json: ${colleges.length}`);
  if (colleges.length > 0) {
    console.log("Keys in the first college object:", Object.keys(colleges[0]));
    console.log("First college keys and values sample:");
    for (const key of Object.keys(colleges[0])) {
      if (typeof colleges[0][key] === 'object') {
        console.log(`  ${key}: [Object/Array with length ${Array.isArray(colleges[0][key]) ? colleges[0][key].length : 'N/A'}]`);
      } else {
        console.log(`  ${key}: ${colleges[0][key]}`);
      }
    }
  }
} catch (err) {
  console.error(err);
}
