const fs = require('fs');
const path = require('path');

const colleges = JSON.parse(fs.readFileSync(path.resolve('public/siteData.json'), 'utf8')).colleges;

const userList = [
  'A J College of Science and Technology',
  'A R Bhatt Computer Science College Una',
  'A. J. Institute of Engineering and Technology Mangaluru',
  'A. J. Institute of Management',
  'A.K.M.POLYTECHNIC College',
  'Aacharya First Grade College Hassan',
  'Aadya Aviation College',
  'Abacus Institute of Engineering and Management',
  'Abbas Khan College for Women',
  'Abhishek Polytechnic College',
  'Abhyuday University',
  'ACHARYA RAJENDRA SURI SHIKSHA MAHAVIDYALAYA',
  'Acharya Tulsi National College of Commerce',
  'Asian College of Journalism (ACJ)',
  'Acropolis Institute of Management Studies and Research',
  'ACTS DEGREE COLLEGE',
  'ACS College of Engineering',
  'Adarsh Mahila Mahavidyalaya',
  'Adarsha Institute of Technology and Management',
  'Adarsha Shikshana Samiti Shri Laxmanrao Anantrao Potnis Memorial College of Business Administration Gadag'
];

console.log('================================================================');
console.log('🎯 VERIFICATION RESULTS FOR USER REQUESTED 20 COLLEGES');
console.log('================================================================\n');

userList.forEach((name, idx) => {
  const norm = name.toLowerCase().replace(/[^a-z0-9]/g, '');
  const match = colleges.find(c => {
    const cn = (c.name || '').toLowerCase().replace(/[^a-z0-9]/g, '');
    return cn.includes(norm) || norm.includes(cn);
  });

  if (match) {
    console.log(`${idx + 1}. [ID: ${match.id}] ${match.name}`);
    console.log(`   📍 Location: ${match.location}, ${match.state}`);
    console.log(`   🖼️ Image: ${match.img}`);
    console.log(`   📚 Courses (${(match.courses || []).length}): ${(match.courses || []).slice(0, 3).map(cr => cr.name).join(', ')}...`);
    console.log(`   🔗 Local Link: http://localhost:5173/college/${match.id}\n`);
  } else {
    console.log(`${idx + 1}. ❌ NOT FOUND: ${name}\n`);
  }
});
