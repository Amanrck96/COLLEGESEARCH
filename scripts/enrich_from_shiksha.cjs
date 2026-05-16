const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../src/data/siteData.json');
let siteData = require(dataPath);

// Selectors for Shiksha (these might change over time)
const SEARCH_RESULT_SELECTOR = 'a[href^="https://www.shiksha.com/college/"], a[href^="https://www.shiksha.com/university/"]';

async function scrapeCollegeData(page, collegeName) {
    try {
        // 1. Search Shiksha directly
        const searchUrl = `https://www.shiksha.com/search?q=${encodeURIComponent(collegeName)}`;
        await page.goto(searchUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
        
        // Wait for search results
        await page.waitForSelector(SEARCH_RESULT_SELECTOR, { timeout: 10000 }).catch(() => null);
        const href = await page.$eval(SEARCH_RESULT_SELECTOR, el => el.href).catch(() => null);
        
        if (!href) {
            console.log(` -> No search results found on Shiksha for ${collegeName}`);
            return null;
        }

        console.log(` -> Found page: ${href}`);
        await page.goto(href, { waitUntil: 'domcontentloaded', timeout: 30000 });

        // 2. Extract Data
        let imgUrl = '';
        try {
            // Try different possible image selectors for the main college banner
            imgUrl = await page.evaluate(() => {
                const img = document.querySelector('.hero-banner img, .gallery-img img, .campus-img img') || 
                            document.querySelector('img[alt*="campus"]') ||
                            document.querySelector('img[src*="shiksha.com/mediadata/images"]');
                return img ? img.src : '';
            });
        } catch (e) { }

        let about = '';
        try {
            about = await page.evaluate(() => {
                const textEl = document.querySelector('.about-college-text, .read-more-text, .overview-text');
                return textEl ? textEl.innerText.trim() : '';
            });
        } catch (e) {}

        return { imgUrl, about };

    } catch (error) {
        console.log(` -> Error extracting data: ${error.message}`);
        return null;
    }
}

(async () => {
    console.log("Launching Puppeteer...");
    // Use headless: false so you can solve captchas if Cloudflare blocks you
    const browser = await puppeteer.launch({ 
        headless: false,
        defaultViewport: { width: 1280, height: 800 }
    }); 
    const page = await browser.newPage();
    
    // Set a realistic User Agent
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

    let updatedCount = 0;
    const START_INDEX = 0; // You can change this if you want to skip first N colleges
    const MAX_TO_PROCESS = 5; // Limiting to 5 for testing. Change this to a larger number later.

    for (let i = START_INDEX; i < siteData.colleges.length; i++) {
        const college = siteData.colleges[i];
        
        if (college._shiksha_enriched) {
            continue; // Skip already enriched
        }

        console.log(`[${i + 1}/${siteData.colleges.length}] Scraping: ${college.name}`);
        
        const data = await scrapeCollegeData(page, college.name);
        
        if (data) {
            let updated = false;
            if (data.imgUrl && data.imgUrl.startsWith('http')) {
                college.img = data.imgUrl;
                if (!college.gallery) college.gallery = [];
                // Add to start of gallery if not already there
                if (!college.gallery.includes(data.imgUrl)) {
                    college.gallery.unshift(data.imgUrl);
                }
                updated = true;
            }
            if (data.about && data.about.length > 50) {
                college.about = data.about;
                updated = true;
            }
            
            if (updated) {
                college._shiksha_enriched = true;
                // Save incrementally so we don't lose data if it crashes
                fs.writeFileSync(dataPath, JSON.stringify(siteData, null, 2));
                console.log(` -> Updated and saved data for ${college.name}.`);
                updatedCount++;
            }
        } else {
             // Mark as enriched anyway so we don't keep retrying failed ones
             college._shiksha_enriched = 'failed';
             fs.writeFileSync(dataPath, JSON.stringify(siteData, null, 2));
        }

        if (updatedCount >= MAX_TO_PROCESS) {
            console.log(`Reached limit of ${MAX_TO_PROCESS} updates. Exiting.`);
            break;
        }

        // Random delay between 3 to 6 seconds to avoid bot detection
        const delay = Math.floor(Math.random() * 3000) + 3000;
        console.log(` -> Waiting ${delay}ms before next college...`);
        await new Promise(r => setTimeout(r, delay));
    }

    console.log("Done! Closing browser.");
    await browser.close();
})();
