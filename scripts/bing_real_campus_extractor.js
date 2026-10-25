import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';
import { fileURLToPath } from 'url';

const execAsync = promisify(exec);
const __filename = fileURLToPath(import.meta.url);
const OBSCURA_PATH = path.join('C:', 'Users', 'ACER', '.gemini', 'antigravity', 'scratch', 'bin', 'obscura.exe');

export async function getExactRealCampusPhoto(collegeName, location) {
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

if (process.argv[1] && process.argv[1] === __filename) {
  getExactRealCampusPhoto('Indian School of Business Management and Administration', 'Bangalore').then(console.log);
}
