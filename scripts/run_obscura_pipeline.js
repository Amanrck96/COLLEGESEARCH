import { collectUrls } from './obscura_collector.js';
import { startScraping } from './obscura_scraper.js';
import { syncData } from './sync_to_site.js';

async function runPipeline() {
  const limit = process.argv[2] ? parseInt(process.argv[2]) : 20;

  console.log('🚀=============================================🚀');
  console.log(`   SHIKSHA SCRAPING & INGESTION PIPELINE (Batch size: ${limit})`);
  console.log('🚀=============================================🚀\n');

  console.log('STEP 1: Collecting College URLs...');
  await collectUrls();

  console.log('\nSTEP 2: Scraping Details via Obscura Stealth Engine...');
  await startScraping(limit);

  console.log('\nSTEP 3: Syncing directly to website (siteData.json)...');
  syncData();

  console.log('\n🎉 ALL STEPS COMPLETED! Run `npm run dev` to view the updated site!');
}

runPipeline().catch(console.error);
