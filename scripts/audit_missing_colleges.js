import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_DATA_FILE = path.join(__dirname, '../public/siteData.json');
const REPORT_FILE = path.join(__dirname, 'data_audit_report.json');
const NEED_SCRAPING_FILE = path.join(__dirname, 'colleges_needing_scraping.json');

function auditDatabase() {
  console.log('===============================================================');
  console.log('🔍 LINE-BY-LINE DATABASE QUALITY & COMPLETENESS AUDIT');
  console.log('===============================================================\n');

  if (!fs.existsSync(SITE_DATA_FILE)) {
    console.error('siteData.json not found!');
    return;
  }

  const siteData = JSON.parse(fs.readFileSync(SITE_DATA_FILE, 'utf-8'));
  const colleges = siteData.colleges || [];

  let fullyEnriched = 0;
  let missingFees = 0;
  let missingPackages = 0;
  let missingAbout = 0;
  let missingContact = 0;
  let missingWebsite = 0;
  let missingLogo = 0;
  let missingFacilities = 0;

  const needingScraping = [];
  const stateBreakdown = {};

  colleges.forEach((c, idx) => {
    const isPlaceholderFees = !c.fees || c.fees === 'Contact for details' || c.fees === '₹2.5 Lakhs';
    const isPlaceholderPackage = !c.highestPackage || c.highestPackage === 'Contact for details' || c.highestPackage === 'N/A';
    const isPlaceholderAbout = !c.about || c.about.startsWith('Welcome to ') || c.about.length < 80;
    const isPlaceholderPhone = !c.phone || c.phone === '0123-456789';
    const isPlaceholderWebsite = !c.website || c.website === 'http://www.college.edu' || c.website === '#';
    const isPlaceholderLogo = !c.logo || c.logo === '';
    const isPlaceholderFacilities = !c.facilities || (Array.isArray(c.facilities) ? c.facilities.length === 0 : c.facilities === '');

    if (isPlaceholderFees) missingFees++;
    if (isPlaceholderPackage) missingPackages++;
    if (isPlaceholderAbout) missingAbout++;
    if (isPlaceholderPhone) missingContact++;
    if (isPlaceholderWebsite) missingWebsite++;
    if (isPlaceholderLogo) missingLogo++;
    if (isPlaceholderFacilities) missingFacilities++;

    const missingScore = [
      isPlaceholderFees,
      isPlaceholderPackage,
      isPlaceholderAbout,
      isPlaceholderPhone,
      isPlaceholderWebsite,
      isPlaceholderLogo,
      isPlaceholderFacilities
    ].filter(Boolean).length;

    if (missingScore <= 1) {
      fullyEnriched++;
    } else {
      needingScraping.push({
        id: c.id,
        name: c.name,
        shortName: c.shortName,
        location: c.location,
        state: c.state,
        missingFields: {
          fees: isPlaceholderFees,
          packages: isPlaceholderPackage,
          about: isPlaceholderAbout,
          phone: isPlaceholderPhone,
          website: isPlaceholderWebsite,
          logo: isPlaceholderLogo,
          facilities: isPlaceholderFacilities
        }
      });
    }

    const stateName = c.state || 'Unknown';
    stateBreakdown[stateName] = (stateBreakdown[stateName] || 0) + 1;
  });

  const report = {
    totalColleges: colleges.length,
    fullyEnrichedCount: fullyEnriched,
    needingScrapingCount: needingScraping.length,
    missingFieldsStats: {
      missingFees,
      missingPackages,
      missingAbout,
      missingContact,
      missingWebsite,
      missingLogo,
      missingFacilities
    },
    topStates: Object.entries(stateBreakdown)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 15)
  };

  fs.writeFileSync(REPORT_FILE, JSON.stringify(report, null, 2), 'utf-8');
  fs.writeFileSync(NEED_SCRAPING_FILE, JSON.stringify(needingScraping, null, 2), 'utf-8');

  console.log(`📊 TOTAL COLLEGES IN DATABASE: ${colleges.length}`);
  console.log(`✅ Fully Enriched Colleges:    ${fullyEnriched}`);
  console.log(`⚠️ Incomplete Colleges:        ${needingScraping.length}\n`);

  console.log('📌 Missing Field Breakdown:');
  console.log(`   - Missing/Placeholder Fees:       ${missingFees}`);
  console.log(`   - Missing/Placeholder Packages:   ${missingPackages}`);
  console.log(`   - Missing Real Contact Numbers:   ${missingContact}`);
  console.log(`   - Missing Official Websites:      ${missingWebsite}`);
  console.log(`   - Missing Official Logos:         ${missingLogo}`);
  console.log(`   - Missing Real Campus Facilities: ${missingFacilities}\n`);

  console.log(`💾 Full Audit Report saved to:           ${REPORT_FILE}`);
  console.log(`📋 Colleges Needing Scraping saved to:  ${NEED_SCRAPING_FILE}`);
  console.log('===============================================================\n');

  return report;
}

auditDatabase();
