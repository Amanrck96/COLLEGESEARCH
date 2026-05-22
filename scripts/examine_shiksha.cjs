const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());
const fs = require('fs');

(async () => {
    console.log("Launching Puppeteer...");
    const browser = await puppeteer.launch({ 
        headless: 'new',
        defaultViewport: { width: 1280, height: 800 }
    }); 
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

    try {
        const url = 'https://www.shiksha.com/mba/ranking/top-mba-colleges-in-india/2-2-0-0-0';
        console.log(`Going to URL: ${url}`);
        await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
        
        // Wait a bit
        await new Promise(r => setTimeout(r, 2000));
        
        // Let's dump some links or text to see what elements are present
        const data = await page.evaluate(() => {
            const links = Array.from(document.querySelectorAll('a')).map(a => ({
                text: a.innerText.trim(),
                href: a.href
            })).filter(l => l.href.includes('/college/') || l.href.includes('/university/'));
            
            // Let's find table or list of colleges
            const divs = Array.from(document.querySelectorAll('div')).map(d => d.className).filter(c => c && c.length > 0);
            return {
                title: document.title,
                linksCount: links.length,
                linksSample: links.slice(0, 15),
                divsSample: Array.from(new Set(divs)).slice(0, 30)
            };
        });
        
        console.log(JSON.stringify(data, null, 2));
    } catch (e) {
        console.error("Error occurred:", e.message);
    } finally {
        await browser.close();
    }
})();
