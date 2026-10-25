import { TAXONOMY, crawlSection } from './stream_state_crawler.js';

console.log('🎯=============================================================🎯');
console.log('   SECTION-WISE HIGH-QUALITY COLLEGE SCRAPER (100 BATCH MODE)   ');
console.log('🎯=============================================================🎯\n');

console.log('Available Sections to Scrape:');
TAXONOMY.forEach((sec, idx) => {
  console.log(`   ${idx + 1}. [${sec.id}] -> ${sec.stream} in ${sec.region}`);
});

console.log('\nUsage Examples:');
console.log('  node scripts/stream_state_crawler.js mba-maharashtra 100');
console.log('  node scripts/stream_state_crawler.js mba-delhi-ncr 100');
console.log('  node scripts/stream_state_crawler.js mba-karnataka 100');
console.log('  node scripts/stream_state_crawler.js mba-kerala 100');
console.log('  node scripts/stream_state_crawler.js eng-karnataka 100');
console.log('  node scripts/stream_state_crawler.js med-maharashtra 100\n');

const targetSection = process.argv[2] || 'mba-maharashtra';
const targetLimit = process.argv[3] ? parseInt(process.argv[3]) : 20;

console.log(`🚀 Auto-starting section: ${targetSection} (Limit: ${targetLimit})...\n`);
crawlSection(targetSection, targetLimit);
