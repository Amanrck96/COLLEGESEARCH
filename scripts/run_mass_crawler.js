import { deepDiscoverAllStreams } from './deep_stream_collector.js';
import { runMassScraper } from './mass_scraper_worker.js';

async function main() {
  const batchSize = process.argv[2] ? parseInt(process.argv[2]) : 50;

  console.log('🚀=============================================================🚀');
  console.log('       SHIKSHA MASTER PRODUCTION CRAWLING & INGESTION PIPELINE   ');
  console.log(`       Batch Target: ${batchSize} colleges | Engine: Obscura Rust Stealth`);
  console.log('🚀=============================================================🚀\n');

  console.log('STEP 1: Discovering Colleges Across All Streams...');
  await deepDiscoverAllStreams();

  console.log('\nSTEP 2: Scraping & Ingesting College Profiles in High-Speed Batches...');
  await runMassScraper(batchSize);

  console.log('\n✨ COMPLETE! Check your live website at http://localhost:5173/');
}

main().catch(console.error);
