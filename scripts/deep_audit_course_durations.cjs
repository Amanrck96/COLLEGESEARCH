const fs = require('fs');
const path = require('path');

const csvPath = path.join(__dirname, '..', 'reports', 'college-audit', 'course-duration-errors.csv');
const content = fs.readFileSync(csvPath, 'utf-8');

const lines = content.trim().split('\n');
console.log('Total entries in CSV:', lines.length - 1);

const records = [];
for (let i = 1; i < lines.length; i++) {
  const line = lines[i];
  // split CSV line handling quotes
  const parts = [];
  let cur = '';
  let inQuote = false;
  for (let j = 0; j < line.length; j++) {
    const ch = line[j];
    if (ch === '"') {
      inQuote = !inQuote;
    } else if (ch === ',' && !inQuote) {
      parts.push(cur.trim());
      cur = '';
    } else {
      cur += ch;
    }
  }
  parts.push(cur.trim());

  if (parts.length >= 7) {
    records.push({
      college_id: parts[0],
      college_name: parts[1],
      course_title: parts[2],
      original_duration: parts[3],
      corrected_duration: parts[4],
      regulation_source: parts[5],
      status: parts[6]
    });
  }
}

console.log('Parsed records:', records.length);

// Analyze:
// 1. Course title breakdown
const titleMap = {};
records.forEach(r => {
  titleMap[r.course_title] = (titleMap[r.course_title] || 0) + 1;
});
console.log('\n--- Course Title Frequency ---');
Object.entries(titleMap).sort((a,b) => b[1]-a[1]).forEach(([t, count]) => {
  console.log(`  ${t.padEnd(50)}: ${count}`);
});

// 2. Check for any keywords suggesting part-time, executive, integrated, or evening
const specialKeywords = ['part time', 'part-time', 'executive', 'evening', 'weekend', 'integrated', 'dual', 'work'];
const flagged = [];

records.forEach(r => {
  const titleLow = r.course_title.toLowerCase();
  for (const kw of specialKeywords) {
    if (titleLow.includes(kw)) {
      flagged.push({ ...r, keyword: kw });
      break;
    }
  }
});

console.log('\n--- Courses with Special Program Keywords ---');
console.log('Count of flagged courses:', flagged.length);
flagged.forEach(f => {
  console.log(`  College ID ${f.college_id} (${f.college_name}): "${f.course_title}" (matched: ${f.keyword})`);
});

// 3. Inspect the colleges offering these courses
const collegesMap = {};
records.forEach(r => {
  collegesMap[r.college_name] = (collegesMap[r.college_name] || 0) + 1;
});
console.log('\nTotal unique colleges affected:', Object.keys(collegesMap).length);

