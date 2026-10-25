import { TAXONOMY, crawlSection } from './stream_state_crawler.js';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function runAllLocationsSequentially() {
  console.log('🚀=============================================================🚀');
  console.log('   AUTOMATED LOCATION-BY-LOCATION SEQUENTIAL SHIKSHA SCRAPER    ');
  console.log('🚀=============================================================🚀\n');

  console.log(`📋 Total Locations/Sections Queued: ${TAXONOMY.length}\n`);

  for (let i = 0; i < TAXONOMY.length; i++) {
    const section = TAXONOMY[i];
    console.log(`\n===============================================================`);
    console.log(`📍 SECTION [${i + 1}/${TAXONOMY.length}]: ${section.stream} in ${section.region} (${section.id})`);
    console.log(`===============================================================`);

    try {
      // Scrape up to 50 top premier colleges per location batch
      await crawlSection(section.id, 50);
      console.log(`✅ Completed Location: ${section.region} (${section.stream})`);
    } catch (err) {
      console.error(`⚠️ Error in section ${section.id}:`, err.message);
    }

    console.log(`⏳ Cooldown 3s before next location...\n`);
    await delay(3000);
  }

  console.log('\n🎉 ALL LOCATIONS AND SECTIONS COMPLETED SUCCESSFULLY!');
  console.log('🌐 Your website database is now enriched with premier colleges across all major Indian cities!');
}

runAllLocationsSequentially().catch(console.error);
