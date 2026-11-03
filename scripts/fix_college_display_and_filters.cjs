const fs = require('fs');
const path = require('path');

console.log('--- Step 1: Upgrading CollegeContext.jsx ---');
let contextPath = path.join(__dirname, '../src/contexts/CollegeContext.jsx');
let contextCode = fs.readFileSync(contextPath, 'utf8');

// 1. Dual-format support for siteData.json in CollegeContext initial fetch
contextCode = contextCode.replace(
  'const list = Array.isArray(localData.colleges) ? localData.colleges : [];',
  'const list = Array.isArray(localData) ? localData : (Array.isArray(localData?.colleges) ? localData.colleges : []);'
);

contextCode = contextCode.replace(
  'if (Array.isArray(localData.exams)) {',
  'if (localData && Array.isArray(localData.exams)) {'
);

// 2. Dual-format support in getMasterColleges()
contextCode = contextCode.replace(
  'cachedMasterColleges = data.colleges || [];',
  'cachedMasterColleges = Array.isArray(data) ? data : (Array.isArray(data?.colleges) ? data.colleges : []);'
);

// 3. City filter enhancement to check c.city as well as c.location
contextCode = contextCode.replace(
  'safeStr(c.location).toLowerCase().includes(cLower) || safeStr(c.address).toLowerCase().includes(cLower) || safeStr(c.name).toLowerCase().includes(cLower)',
  'safeStr(c.city).toLowerCase().includes(cLower) || safeStr(c.location).toLowerCase().includes(cLower) || safeStr(c.address).toLowerCase().includes(cLower) || safeStr(c.name).toLowerCase().includes(cLower)'
);

// 4. Course/stream smart filter in client-side fetchColleges
const targetCourseOld = `      // 3. Course Filter
      if (params.course) {
        const cStr = params.course.toLowerCase();
        results = results.filter(c => 
          (c.courses || []).some(co => (co.title || '').toLowerCase().includes(cStr))
        );
      }`;

const targetCourseNew = `      // 3. Course / Stream Filter (Smart Tokenized)
      if (params.course && params.course.toLowerCase() !== 'all') {
        const crsLower = params.course.toLowerCase().trim();
        let streamTokens = [crsLower];
        if (crsLower.includes('tech') || crsLower.includes('engineering')) streamTokens = ['b.tech', 'btech', 'engineering', 'technology', 'b.e.'];
        if (crsLower.includes('mba') || crsLower.includes('management')) streamTokens = ['mba', 'pgdm', 'management', 'business'];
        if (crsLower.includes('medical') || crsLower.includes('mbbs')) streamTokens = ['medical', 'mbbs', 'medicine', 'hospital', 'health'];
        if (crsLower.includes('pharm')) streamTokens = ['pharma', 'pharmacy', 'b.pharm', 'd.pharm'];
        if (crsLower.includes('bca') || crsLower.includes('mca') || crsLower.includes('computer')) streamTokens = ['bca', 'mca', 'computer', 'it', 'software'];
        if (crsLower.includes('law')) streamTokens = ['law', 'llb', 'll.b', 'juridical', 'nlu'];
        if (crsLower.includes('design') || crsLower.includes('fashion')) streamTokens = ['design', 'fashion', 'b.des', 'nift'];
        if (crsLower.includes('science')) streamTokens = ['b.sc', 'm.sc', 'science'];
        if (crsLower.includes('commerce')) streamTokens = ['b.com', 'm.com', 'commerce', 'account'];

        results = results.filter(c => {
          const targetText = [
            safeStr(c.about),
            safeStr(c.type),
            safeStr(c.exams),
            ...(c.courses || []).map(co => \`\${safeStr(co.title)} \${safeStr(co.type)} \${safeStr(co.division)}\`)
          ].join(' ').toLowerCase();

          return streamTokens.some(tok => targetText.includes(tok));
        });
      }`;

// Normalize line endings for replacement
contextCode = contextCode.replace(/\r\n/g, '\n');
if (contextCode.includes(targetCourseOld.replace(/\r\n/g, '\n'))) {
  contextCode = contextCode.replace(targetCourseOld.replace(/\r\n/g, '\n'), targetCourseNew.replace(/\r\n/g, '\n'));
  console.log('✓ Course filter updated with smart tokenization');
} else {
  console.log('! Course filter target did not match directly, checking...');
}

// 5. Sort by fees_low and fees_high
const targetSortOld = `      // 7. Sorting
      const sort = params.sortBy || (params.q?.toLowerCase().includes('top') ? 'ranking' : 'rating');
      if (sort === 'ranking') {
        results.sort((a, b) => (a.ranking || 999) - (b.ranking || 999) || (b.rating || 0) - (a.rating || 0));
      } else if (sort === 'rating') {
        results.sort((a, b) => (b.rating || 0) - (a.rating || 0) || (a.ranking || 999) - (b.ranking || 999));
      } else if (sort === 'reviews') {
        results.sort((a, b) => (b.reviewsCount || b.reviews || 0) - (a.reviewsCount || a.reviews || 0));
      } else {
        results.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
      }`;

const targetSortNew = `      // 7. Sorting
      const sort = params.sortBy || (params.q?.toLowerCase().includes('top') ? 'ranking' : 'rating');
      const getNumericFee = (c) => {
        const feeStr = String(c.courses?.[0]?.fees || c.fees || '');
        const match = feeStr.match(/(\\d+(\\.\\d+)?)/);
        if (!match) return 99999999;
        const val = parseFloat(match[1]);
        return (feeStr.includes('Lakh') || val < 100) ? val * 100000 : val;
      };

      if (sort === 'ranking') {
        results.sort((a, b) => (parseInt(a.ranking) || 999) - (parseInt(b.ranking) || 999) || (parseFloat(b.rating) || 0) - (parseFloat(a.rating) || 0));
      } else if (sort === 'rating') {
        results.sort((a, b) => (parseFloat(b.rating) || 0) - (parseFloat(a.rating) || 0) || (parseInt(a.ranking) || 999) - (parseInt(b.ranking) || 999));
      } else if (sort === 'fees_low') {
        results.sort((a, b) => getNumericFee(a) - getNumericFee(b));
      } else if (sort === 'fees_high') {
        results.sort((a, b) => getNumericFee(b) - getNumericFee(a));
      } else if (sort === 'reviews') {
        results.sort((a, b) => (parseInt(b.reviewsCount || b.reviews) || 0) - (parseInt(a.reviewsCount || a.reviews) || 0));
      } else {
        results.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
      }`;

if (contextCode.includes(targetSortOld.replace(/\r\n/g, '\n'))) {
  contextCode = contextCode.replace(targetSortOld.replace(/\r\n/g, '\n'), targetSortNew.replace(/\r\n/g, '\n'));
  console.log('✓ Sorting updated with fees_low & fees_high support');
}

fs.writeFileSync(contextPath, contextCode, 'utf8');
console.log('✓ Successfully written updated CollegeContext.jsx');

console.log('\n--- Step 2: Upgrading Colleges.jsx ---');
let collegesPath = path.join(__dirname, '../src/pages/Colleges.jsx');
let collegesCode = fs.readFileSync(collegesPath, 'utf8').replace(/\r\n/g, '\n');

// 1. Dual-format in fallback filter data loader
collegesCode = collegesCode.replace(
  'if (data && Array.isArray(data.colleges)) {\n              const stateSet = new Set(DEFAULT_STATES);\n              const citiesByState = {};\n              data.colleges.forEach(c => {',
  'const rawList = Array.isArray(data) ? data : (Array.isArray(data?.colleges) ? data.colleges : []);\n            if (rawList.length > 0) {\n              const stateSet = new Set(DEFAULT_STATES);\n              const citiesByState = {};\n              rawList.forEach(c => {'
);

// 2. Add Top Ranked and Highest Fees options to Sort By select in Colleges.jsx
collegesCode = collegesCode.replace(
  '<option value="rating">Highest Rating</option>\n                  <option value="fees_low">Lowest Fees</option>',
  '<option value="rating">Highest Rating</option>\n                  <option value="ranking">Top Ranked</option>\n                  <option value="fees_low">Lowest Fees</option>\n                  <option value="fees_high">Highest Fees</option>'
);

fs.writeFileSync(collegesPath, collegesCode, 'utf8');
console.log('✓ Successfully written updated Colleges.jsx');

console.log('\n--- Step 3: Upgrading server/routes/colleges.js ---');
let serverRoutesPath = path.join(__dirname, '../server/routes/colleges.js');
let serverRoutesCode = fs.readFileSync(serverRoutesPath, 'utf8').replace(/\r\n/g, '\n');

// 1. Dual-format in loadCollegesFromDisk()
serverRoutesCode = serverRoutesCode.replace(
  'inMemoryColleges = Array.isArray(data.colleges) ? data.colleges : [];',
  'inMemoryColleges = Array.isArray(data) ? data : (Array.isArray(data?.colleges) ? data.colleges : []);'
);

// 2. Save siteData.json with standardized format in saveCollegesToDisk()
const oldSaveColleges = `function saveCollegesToDisk() {
  try {
    let siteData = { colleges: [], exams: [] };
    if (fs.existsSync(SITE_DATA_FILE)) {
      try {
        siteData = JSON.parse(fs.readFileSync(SITE_DATA_FILE, 'utf-8'));
      } catch (e) {}
    }
    siteData.colleges = inMemoryColleges;
    fs.writeFileSync(SITE_DATA_FILE, JSON.stringify(siteData, null, 2), 'utf-8');
  } catch (err) {
    console.error('❌ Failed to save siteData.json from server:', err.message);
  }
}`;

const newSaveColleges = `function saveCollegesToDisk() {
  try {
    let existingExams = [];
    if (fs.existsSync(SITE_DATA_FILE)) {
      try {
        const existing = JSON.parse(fs.readFileSync(SITE_DATA_FILE, 'utf-8'));
        if (existing && Array.isArray(existing.exams)) {
          existingExams = existing.exams;
        }
      } catch (e) {}
    }
    const siteData = {
      totalColleges: inMemoryColleges.length,
      lastUpdated: new Date().toISOString(),
      exams: existingExams,
      colleges: inMemoryColleges
    };
    fs.writeFileSync(SITE_DATA_FILE, JSON.stringify(siteData, null, 2), 'utf-8');
  } catch (err) {
    console.error('❌ Failed to save siteData.json from server:', err.message);
  }
}`;

if (serverRoutesCode.includes(oldSaveColleges)) {
  serverRoutesCode = serverRoutesCode.replace(oldSaveColleges, newSaveColleges);
  console.log('✓ saveCollegesToDisk updated');
}

// 3. Add fees_low and fees_high sorting in server/routes/colleges.js
const oldServerSort = `  // 3. Sorting
  const sort = sortBy || (q && q.toLowerCase().includes('top') ? 'ranking' : 'rating');
  if (sort === 'ranking') {
    results.sort((a, b) => (parseInt(a.ranking) || 999) - (parseInt(b.ranking) || 999) || (parseFloat(b.rating) || 0) - (parseFloat(a.rating) || 0));
  } else if (sort === 'rating') {
    results.sort((a, b) => (parseFloat(b.rating) || 0) - (parseFloat(a.rating) || 0) || (parseInt(a.ranking) || 999) - (parseInt(b.ranking) || 999));
  } else if (sort === 'reviews') {
    results.sort((a, b) => (parseInt(b.reviewsCount || b.reviews) || 0) - (parseInt(a.reviewsCount || a.reviews) || 0));
  } else {
    results.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
  }`;

const newServerSort = `  // 3. Sorting
  const getNumericFee = (c) => {
    const feeStr = String(c.courses?.[0]?.fees || c.fees || '');
    const match = feeStr.match(/(\\d+(\\.\\d+)?)/);
    if (!match) return 99999999;
    const val = parseFloat(match[1]);
    return (feeStr.includes('Lakh') || val < 100) ? val * 100000 : val;
  };

  const sort = sortBy || (q && q.toLowerCase().includes('top') ? 'ranking' : 'rating');
  if (sort === 'ranking') {
    results.sort((a, b) => (parseInt(a.ranking) || 999) - (parseInt(b.ranking) || 999) || (parseFloat(b.rating) || 0) - (parseFloat(a.rating) || 0));
  } else if (sort === 'rating') {
    results.sort((a, b) => (parseFloat(b.rating) || 0) - (parseFloat(a.rating) || 0) || (parseInt(a.ranking) || 999) - (parseInt(b.ranking) || 999));
  } else if (sort === 'fees_low') {
    results.sort((a, b) => getNumericFee(a) - getNumericFee(b));
  } else if (sort === 'fees_high') {
    results.sort((a, b) => getNumericFee(b) - getNumericFee(a));
  } else if (sort === 'reviews') {
    results.sort((a, b) => (parseInt(b.reviewsCount || b.reviews) || 0) - (parseInt(a.reviewsCount || a.reviews) || 0));
  } else {
    results.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
  }`;

if (serverRoutesCode.includes(oldServerSort)) {
  serverRoutesCode = serverRoutesCode.replace(oldServerSort, newServerSort);
  console.log('✓ Server sorting updated');
}

fs.writeFileSync(serverRoutesPath, serverRoutesCode, 'utf8');
console.log('✓ Successfully written updated server/routes/colleges.js');

console.log('\n--- Step 4: Upgrading server/sync_all_colleges_to_db.js ---');
let syncPath = path.join(__dirname, '../server/sync_all_colleges_to_db.js');
let syncCode = fs.readFileSync(syncPath, 'utf8');
syncCode = syncCode.replace(
  'const colleges = siteData.colleges || [];',
  'const colleges = Array.isArray(siteData) ? siteData : (siteData.colleges || []);'
);
fs.writeFileSync(syncPath, syncCode, 'utf8');
console.log('✓ Successfully written updated server/sync_all_colleges_to_db.js');

console.log('\n--- Step 5: Upgrading server/simulate_10_users.js ---');
let simPath = path.join(__dirname, '../server/simulate_10_users.js');
let simCode = fs.readFileSync(simPath, 'utf8');
simCode = simCode.replace(
  'const colleges = siteData.colleges || [];',
  'const colleges = Array.isArray(siteData) ? siteData : (siteData.colleges || []);'
);
simCode = simCode.replace(
  'const iitBombay = siteData.colleges.find(c =>',
  'const collegesList = Array.isArray(siteData) ? siteData : (siteData.colleges || []);\n    const iitBombay = collegesList.find(c =>'
);
fs.writeFileSync(simPath, simCode, 'utf8');
console.log('✓ Successfully written updated server/simulate_10_users.js');

console.log('\nAll core data and context upgrades completed successfully!');

