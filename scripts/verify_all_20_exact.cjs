const fs = require('fs');
const path = require('path');

const colleges = JSON.parse(fs.readFileSync(path.resolve('public/siteData.json'), 'utf8')).colleges;

const userTestCases = [
  { name: '168-GOVT POLYTECHNIC HOSADURGA', matchStr: 'HOSADURGA' },
  { name: 'A J COLLEGE OF SCIENCE AND TECHNOLOGY', matchStr: 'A J COLLEGE OF SCIENCE' },
  { name: 'A R BHATT COMPUTER SCIENCE COLLEGE UNA', matchStr: 'A R BHATT' },
  { name: 'A. J. INSTITUTE OF ENGINEERING AND TECHNOLOGY MANGALURU', matchStr: 'A. J. INSTITUTE OF ENGINEERING AND TECHNOLOGY MANGALURU' },
  { name: 'A. J. INSTITUTE OF MANAGEMENT', matchStr: 'A. J. INSTITUTE OF MANAGEMENT' },
  { name: 'A.D.PATEL INSTITUTE OF TECHNOLOGY', matchStr: 'A.D.PATEL' },
  { name: 'A.C.KUNHIMON HAJI MEMORIAL I.C.A COLLEGE THOZHIYUR', matchStr: 'A.C.KUNHIMON' },
  { name: 'A.G.B FIRST GRADE COLLEGE', matchStr: 'A.G.B FIRST GRADE' },
  { name: 'A.G.M.RURAL POLYTECHNIC', matchStr: 'A.G.M.RURAL' },
  { name: 'A.K.M.POLYTECHNIC COLLEGE', matchStr: 'A.K.M.POLYTECHNIC' },
  { name: 'ACADEMY OF COMPUTER SCIENCE AND TECHNOLOGY', matchStr: 'ACADEMY OF COMPUTER SCIENCE' },
  { name: 'ACADEMY OF BUSINESS ADMINISTRATION', matchStr: 'ACADEMY OF BUSINESS ADMINISTRATION' },
  { name: 'A.V. ABDURAHIMAN HAJI ARTS AND SCIENCE COLLEGE', matchStr: 'A.V. ABDURAHIMAN' },
  { name: 'ABS ACADEMY OF MANAGEMENT AND HEALTH SCIENCE', matchStr: 'ABS ACADEMY OF MANAGEMENT' },
  { name: 'ABR COLLEGE OF ARTS SCIENCE AND COMMERCE', matchStr: 'ABR COLLEGE OF ARTS' },
  { name: 'ABHISHEK POLYTECHNIC COLLEGE', matchStr: 'ABHISHEK POLYTECHNIC' },
  { name: 'ABHYUDAY UNIVERSITY', matchStr: 'ABHYUDAY UNIVERSITY' },
  { name: 'AACHARYA FIRST GRADE COLLEGE HASSAN', matchStr: 'AACHARYA FIRST GRADE' },
  { name: 'ABBAS KHAN COLLEGE FOR WOMEN', matchStr: 'ABBAS KHAN COLLEGE' },
  { name: 'AADYA AVIATION COLLEGE', matchStr: 'AADYA AVIATION' }
];

console.log('================================================================');
console.log('✅ VERIFICATION AUDIT FOR ALL 20 USER TEST COLLEGES');
console.log('================================================================\n');

userTestCases.forEach((tc, idx) => {
  const match = colleges.find(c => (c.name || '').toUpperCase().includes(tc.matchStr.toUpperCase()));
  if (match) {
    console.log(`${idx + 1}. [ID ${match.id}] ${match.name}`);
    console.log(`   📍 Location: ${match.location}, ${match.state}`);
    console.log(`   🖼️ Main Image: ${match.img}`);
    console.log(`   📚 Courses: ${(match.courses || []).length} total`);
    console.log(`   🔗 Local Link: http://localhost:5173/college/${match.id}\n`);
  } else {
    console.log(`${idx + 1}. ❌ NOT FOUND: ${tc.name}\n`);
  }
});
