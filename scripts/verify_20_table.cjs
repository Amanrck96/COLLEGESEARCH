const fs = require('fs');
const path = require('path');

const colleges = JSON.parse(fs.readFileSync(path.resolve('public/siteData.json'), 'utf8')).colleges;

const testNames = [
  '168-GOVT POLYTECHNIC HOSADURGA',
  'A J COLLEGE OF SCIENCE AND TECHNOLOGY',
  'A R BHATT COMPUTER SCIENCE COLLEGE UNA',
  'A. J. INSTITUTE OF ENGINEERING AND TECHNOLOGY MANGALURU',
  'A. J. INSTITUTE OF MANAGEMENT',
  'A.D.PATEL INSTITUTE OF TECHNOLOGY',
  'A.C.KUNHIMON HAJI MEMORIAL I.C.A COLLEGE THOZHIYUR',
  'A.G.B FIRST GRADE COLLEGE',
  'A.G.M.RURAL POLYTECHNIC',
  'A.K.M.POLYTECHNIC COLLEGE',
  'ACADEMY OF COMPUTER SCIENCE AND TECHNOLOGY',
  'ACADEMY OF BUSINESS ADMINISTRATION',
  'A.V. ABDURAHIMAN HAJI ARTS AND SCIENCE COLLEGE',
  'ABS ACADEMY OF MANAGEMENT AND HEALTH SCIENCE',
  'ABR COLLEGE OF ARTS SCIENCE AND COMMERCE',
  'ABHISHEK POLYTECHNIC COLLEGE',
  'ABHYUDAY UNIVERSITY',
  'AACHARYA FIRST GRADE COLLEGE HASSAN',
  'ABBAS KHAN COLLEGE FOR WOMEN',
  'AADYA AVIATION COLLEGE'
];

console.log('=== VERIFICATION REPORT: 20 USER TEST CASES ===\n');

testNames.forEach((tn, idx) => {
  const norm = tn.toLowerCase().replace(/[^a-z0-9]/g, '');
  const match = colleges.find(c => {
    const cn = (c.name || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    return cn.includes(norm) || norm.includes(cn);
  });
  if (match) {
    console.log(`${idx + 1}. [ID: ${match.id}] ${match.name}`);
    console.log(`   📍 Location: ${match.location}, ${match.state}`);
    console.log(`   🖼️ Main Image: ${match.img}`);
    console.log(`   📚 Courses: ${(match.courses || []).length} total (${match.courses.slice(0, 3).map(cr => cr.name).join(', ')}...)`);
    console.log(`   🔗 Local Link: http://localhost:5173/college/${match.id}`);
    console.log('');
  } else {
    console.log(`${idx + 1}. [NOT FOUND] ${tn}`);
  }
});
