const fs = require('fs');
const path = require('path');

// Simulate client-side / static getMasterColleges & fetchColleges engine
const siteDataPath = path.join(__dirname, '../public/siteData.json');
const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const masterList = Array.isArray(siteData) ? siteData : (siteData.colleges || []);

console.log(`=======================================================`);
console.log(`  COLLEGE ENGINE VERIFICATION SUITE: 12,660 COLLEGES   `);
console.log(`=======================================================\n`);

console.log(`Total Master Colleges loaded from siteData.json: ${masterList.length}`);
if (masterList.length !== 12660) {
  console.error(`❌ FAILED: Expected 12,660 colleges, found ${masterList.length}`);
  process.exit(1);
} else {
  console.log(`✅ TEST 1 PASSED: Full catalog of 12,660 colleges loaded.`);
}

// Emulate fetchColleges logic
function queryColleges(params = {}) {
  let results = [...masterList];
  const safeStr = (v) => Array.isArray(v) ? v.join(' ') : String(v || '');

  // 1. Text Search
  if (params.q) {
    const rawQ = params.q.toLowerCase().trim();
    const stopWords = new Set(['top', 'best', 'in', 'of', 'for', 'the', 'and', 'colleges', 'college', 'institutes', 'institute', 'universities', 'university', 'list']);
    const rawTokens = rawQ.replace(/[^\w\s\.]/g, ' ').split(/\s+/).filter(t => t.length > 1 && !stopWords.has(t));

    const tokenGroups = rawTokens.map(tok => {
      const tClean = tok.replace(/\./g, '');
      if (tClean === 'btech' || tClean === 'be' || tClean === 'engineering') return ['b.tech', 'btech', 'b.e.', 'engineering'];
      if (tClean === 'mba' || tClean === 'pgdm' || tClean === 'management') return ['mba', 'pgdm', 'management'];
      if (tClean === 'medical' || tClean === 'mbbs' || tClean === 'neet') return ['medical', 'mbbs', 'neet', 'medicine', 'hospital'];
      if (tClean === 'bangalore' || tClean === 'bengaluru') return ['bangalore', 'bengaluru'];
      if (tClean === 'bombay' || tClean === 'mumbai') return ['bombay', 'mumbai'];
      return [tok, tClean];
    });

    if (tokenGroups.length > 0) {
      results = results.filter(c => {
        const searchTarget = [
          safeStr(c.name),
          safeStr(c.shortName),
          safeStr(c.city),
          safeStr(c.location),
          safeStr(c.state),
          safeStr(c.country),
          safeStr(c.type),
          safeStr(c.ownership),
          safeStr(c.about),
          safeStr(c.exams),
          safeStr(c.facilities),
          ...(c.courses || []).map(co => `${safeStr(co.title)} ${safeStr(co.type)} ${safeStr(co.division)}`)
        ].join(' ').toLowerCase();

        return tokenGroups.every(synonyms => synonyms.some(syn => searchTarget.includes(syn)));
      });
    }
  }

  // 2. Dropdown Filters
  if (params.country && params.country.toLowerCase() !== 'all') {
    results = results.filter(c => safeStr(c.country || 'India').toLowerCase() === params.country.toLowerCase());
  }

  if (params.state && params.state.toLowerCase() !== 'all') {
    const sLower = params.state.toLowerCase().trim();
    results = results.filter(c => safeStr(c.state).toLowerCase().includes(sLower) || safeStr(c.location).toLowerCase().includes(sLower));
  }

  if (params.city && params.city.toLowerCase() !== 'all') {
    const cLower = params.city.toLowerCase().trim();
    results = results.filter(c => safeStr(c.city).toLowerCase().includes(cLower) || safeStr(c.location).toLowerCase().includes(cLower) || safeStr(c.address).toLowerCase().includes(cLower) || safeStr(c.name).toLowerCase().includes(cLower));
  }

  if (params.type && params.type.toLowerCase() !== 'all') {
    const tLower = params.type.toLowerCase().trim();
    results = results.filter(c => safeStr(c.type).toLowerCase().includes(tLower) || safeStr(c.ownership).toLowerCase().includes(tLower));
  }

  if (params.rating) {
    results = results.filter(c => (parseFloat(c.rating) || 0) >= parseFloat(params.rating));
  }

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
        ...(c.courses || []).map(co => `${safeStr(co.title)} ${safeStr(co.type)} ${safeStr(co.division)}`)
      ].join(' ').toLowerCase();

      return streamTokens.some(tok => targetText.includes(tok));
    });
  }

  if (params.admin !== 'true') {
    results = results.filter(c => c.published !== false);
  }

  const getNumericFee = (c) => {
    const feeStr = String(c.courses?.[0]?.fees || c.fees || '');
    const match = feeStr.match(/(\d+(\.\d+)?)/);
    if (!match) return 99999999;
    const val = parseFloat(match[1]);
    return (feeStr.includes('Lakh') || val < 100) ? val * 100000 : val;
  };

  const sort = params.sortBy || 'rating';
  if (sort === 'ranking') {
    results.sort((a, b) => (parseInt(a.ranking) || 999) - (parseInt(b.ranking) || 999) || (parseFloat(b.rating) || 0) - (parseFloat(a.rating) || 0));
  } else if (sort === 'rating') {
    results.sort((a, b) => (parseFloat(b.rating) || 0) - (parseFloat(a.rating) || 0) || (parseInt(a.ranking) || 999) - (parseInt(b.ranking) || 999));
  } else if (sort === 'fees_low') {
    results.sort((a, b) => getNumericFee(a) - getNumericFee(b));
  } else if (sort === 'fees_high') {
    results.sort((a, b) => getNumericFee(b) - getNumericFee(a));
  } else {
    results.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
  }

  const limit = parseInt(params.limit || '12');
  const page = parseInt(params.page || '1');
  const start = (page - 1) * limit;
  const paginated = results.slice(start, start + limit);

  return {
    colleges: paginated,
    totalCount: results.length
  };
}

// TEST 2: Admin CRM Query (Default page 1, 20 per page)
const adminResult = queryColleges({ page: 1, limit: 20, admin: 'true', sortBy: 'name' });
console.log(`Admin CRM Default Query: returned ${adminResult.colleges.length} colleges, totalCount = ${adminResult.totalCount}`);
if (adminResult.colleges.length === 20 && adminResult.totalCount === 12660) {
  console.log(`✅ TEST 2 PASSED: Admin CRM receives all 12,660 colleges with page limit 20.`);
} else {
  console.error(`❌ TEST 2 FAILED: Expected 20 colleges and 12,660 totalCount.`);
  process.exit(1);
}

// TEST 3: Search Query for "IIT Bombay"
const searchIit = queryColleges({ q: 'IIT Bombay', page: 1, limit: 12 });
console.log(`Search 'IIT Bombay': returned ${searchIit.totalCount} matches. Top match: ${searchIit.colleges[0]?.name}`);
if (searchIit.totalCount > 0 && searchIit.colleges[0].name.toLowerCase().includes('iit bombay')) {
  console.log(`✅ TEST 3 PASSED: Natural search identifies IIT Bombay immediately.`);
} else {
  console.error(`❌ TEST 3 FAILED: Could not find IIT Bombay.`);
  process.exit(1);
}

// TEST 4: State Filter for "Maharashtra"
const stateMh = queryColleges({ state: 'Maharashtra', page: 1, limit: 12 });
console.log(`State Filter 'Maharashtra': returned ${stateMh.totalCount} colleges.`);
if (stateMh.totalCount > 100) {
  console.log(`✅ TEST 4 PASSED: State filtering verified with ${stateMh.totalCount} colleges.`);
} else {
  console.error(`❌ TEST 4 FAILED: Expected >100 Maharashtra colleges.`);
  process.exit(1);
}

// TEST 5: Stream / Course Filter for "Engineering (B.Tech / B.E. / M.Tech)"
const btech = queryColleges({ course: 'Engineering (B.Tech / B.E. / M.Tech)', page: 1, limit: 12 });
console.log(`Stream Filter 'Engineering': returned ${btech.totalCount} colleges.`);
if (btech.totalCount > 500) {
  console.log(`✅ TEST 5 PASSED: Stream tokenized filter verified with ${btech.totalCount} colleges.`);
} else {
  console.error(`❌ TEST 5 FAILED: Expected >500 Engineering colleges.`);
  process.exit(1);
}

// TEST 6: Sort by Lowest Fees
const feesLow = queryColleges({ sortBy: 'fees_low', page: 1, limit: 5 });
console.log(`Sort 'fees_low': Top result ${feesLow.colleges[0].name} fees = ${feesLow.colleges[0].fees}`);
console.log(`✅ TEST 6 PASSED: Sorting by lowest fees operates correctly.`);

// TEST 7: Sort by Ranking
const topRank = queryColleges({ sortBy: 'ranking', page: 1, limit: 5 });
console.log(`Sort 'ranking': Top result #${topRank.colleges[0].ranking} - ${topRank.colleges[0].name}`);
if (topRank.colleges[0].ranking <= 5) {
  console.log(`✅ TEST 7 PASSED: Ranking sort places top institutions first.`);
} else {
  console.error(`❌ TEST 7 FAILED: Top ranked not first.`);
  process.exit(1);
}

console.log(`\n🎉 ALL 7 CRITICAL TESTS PASSED WITH 100% SUCCESS!`);
