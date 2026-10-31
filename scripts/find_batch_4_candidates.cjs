const fs = require('fs');
const progress = JSON.parse(fs.readFileSync('reports/verification/progress.json', 'utf8'));
const completed = new Set(progress.completed_ids || []);

const content = fs.readFileSync('reports/college-audit/course-duration-errors.csv', 'utf8').trim().split('\n');
const seen = new Set();
const list = [];

for (let i = 1; i < content.length; i++) {
  const line = content[i];
  const m = line.match(/^"?(\d+)"?,"?([^",]+)/);
  if (m) {
    const id = parseInt(m[1], 10);
    const name = m[2];
    if (!completed.has(id) && !seen.has(id)) {
      seen.add(id);
      list.push({ id, name });
    }
  }
}

console.log('Unverified colleges with duration audit flags:', list.length);
list.slice(0, 15).forEach(c => console.log('  - ID:', c.id, '| Name:', c.name));

