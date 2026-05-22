const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

(async () => {
    console.log("Launching Puppeteer...");
    const browser = await puppeteer.launch({ 
        headless: 'new',
        defaultViewport: { width: 1280, height: 800 }
    }); 
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

    try {
        const url = 'https://www.shiksha.com/college/iim-ahmedabad-indian-institute-of-management-vastrapur-307';
        console.log(`Going to URL: ${url}`);
        await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
        
        await new Promise(r => setTimeout(r, 3000));
        
        const data = await page.evaluate(() => {
            // Get college name
            const h1 = document.querySelector('h1')?.innerText.trim() || '';
            
            // Get location / address / state
            const locEl = document.querySelector('.header-location, .loc, .locationText, .location-text, .clg-loc');
            const locText = locEl ? locEl.innerText.trim() : '';
            
            // Try general query selector for header text containing location
            const headerText = document.querySelector('.ctum-header-info, .clg-header-info, .header-text-info')?.innerText || '';
            
            // Get image
            const img = document.querySelector('.hero-banner img, .gallery-img img, .campus-img img, img[alt*="campus"]') || 
                        document.querySelector('img[src*="shiksha.com/mediadata/images"]');
            const imgSrc = img ? img.src : '';
            
            // Get rating
            const ratingEl = document.querySelector('.rating-box, .ratingValue, .rtg-val, .rating-badge');
            const rating = ratingEl ? ratingEl.innerText.trim() : '';
            
            // Get about
            const aboutEl = document.querySelector('.about-college-text, .read-more-text, .overview-text, #overview p');
            const about = aboutEl ? aboutEl.innerText.trim() : '';

            // Get fees & courses summary if available
            const feesEl = document.querySelector('.fee-value, .fees-section, .feesText');
            const fees = feesEl ? feesEl.innerText.trim() : '';
            
            // Let's dump all body text and find some keywords
            const bodyHtmlSample = document.body.innerHTML.substring(0, 1000);
            
            // Dump selectors
            const titles = Array.from(document.querySelectorAll('h2, h3')).map(h => h.innerText.trim());

            return {
                h1,
                locText,
                headerText,
                imgSrc,
                rating,
                about: about.substring(0, 200),
                fees,
                titlesSample: titles.slice(0, 15),
                htmlLength: document.body.innerHTML.length
            };
        });
        
        console.log(JSON.stringify(data, null, 2));
    } catch (e) {
        console.error("Error occurred:", e.message);
    } finally {
        await browser.close();
    }
})();
