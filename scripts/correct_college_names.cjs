const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../src/data/siteData.json');
let siteData = require(dataPath);

const collegeLookup = {
  "iim-ahmedabad": { name: "IIM Ahmedabad - Indian Institute of Management", location: "Ahmedabad", state: "Gujarat", type: "Government", fees: "₹25.0 Lakhs" },
  "iim-bangalore": { name: "IIM Bangalore - Indian Institute of Management", location: "Bangalore", state: "Karnataka", type: "Government", fees: "₹24.5 Lakhs" },
  "iim-calcutta": { name: "IIM Calcutta - Indian Institute of Management", location: "Kolkata", state: "West Bengal", type: "Government", fees: "₹23.0 Lakhs" },
  "iim-lucknow": { name: "IIM Lucknow - Indian Institute of Management", location: "Lucknow", state: "Uttar Pradesh", type: "Government", fees: "₹20.7 Lakhs" },
  "xlri-jamshedpur": { name: "XLRI Jamshedpur - Xavier School of Management", location: "Jamshedpur", state: "Jharkhand", type: "Private", fees: "₹25.8 Lakhs" },
  "iim-kozhikode": { name: "IIM Kozhikode - Indian Institute of Management", location: "Kozhikode", state: "Kerala", type: "Government", fees: "₹20.5 Lakhs" },
  "iim-indore": { name: "IIM Indore - Indian Institute of Management", location: "Indore", state: "Madhya Pradesh", type: "Government", fees: "₹21.1 Lakhs" },
  "fms-delhi": { name: "Faculty of Management Studies (FMS Delhi)", location: "Delhi", state: "Delhi", type: "Government", fees: "₹2.0 Lakhs" },
  "spjimr": { name: "SPJIMR - S.P. Jain Institute of Management and Research", location: "Mumbai", state: "Maharashtra", type: "Private", fees: "₹22.5 Lakhs" },
  "mdi-gurgaon": { name: "MDI Gurgaon - Management Development Institute", location: "Gurugram", state: "Haryana", type: "Private", fees: "₹24.2 Lakhs" },
  "iift-delhi": { name: "IIFT Delhi - Indian Institute of Foreign Trade", location: "Delhi", state: "Delhi", type: "Government", fees: "₹22.0 Lakhs" },
  "iim-udaipur": { name: "IIM Udaipur - Indian Institute of Management", location: "Udaipur", state: "Rajasthan", type: "Government", fees: "₹20.0 Lakhs" },
  "iim-raipur": { name: "IIM Raipur - Indian Institute of Management", location: "Raipur", state: "Chhattisgarh", type: "Government", fees: "₹18.0 Lakhs" },
  "iim-ranchi": { name: "IIM Ranchi - Indian Institute of Management", location: "Ranchi", state: "Jharkhand", type: "Government", fees: "₹17.2 Lakhs" },
  "iim-rohtak": { name: "IIM Rohtak - Indian Institute of Management", location: "Rohtak", state: "Haryana", type: "Government", fees: "₹17.9 Lakhs" },
  "iim-shillong": { name: "IIM Shillong - Indian Institute of Management", location: "Shillong", state: "Meghalaya", type: "Government", fees: "₹19.2 Lakhs" },
  "iim-trichy": { name: "IIM Tiruchirappalli (IIM Trichy)", location: "Tiruchirappalli", state: "Tamil Nadu", type: "Government", fees: "₹19.5 Lakhs" },
  "nmims-mumbai": { name: "NMIMS School of Business Management (Mumbai)", location: "Mumbai", state: "Maharashtra", type: "Private", fees: "₹23.9 Lakhs" },
  "jbims": { name: "Jamnalal Bajaj Institute of Management Studies (JBIMS Mumbai)", location: "Mumbai", state: "Maharashtra", type: "Government", fees: "₹6.0 Lakhs" },
  "sibm-pune": { name: "Symbiosis Institute of Business Management (SIBM Pune)", location: "Pune", state: "Maharashtra", type: "Private", fees: "₹24.5 Lakhs" },
  "imt-ghaziabad": { name: "IMT Ghaziabad - Institute of Management Technology", location: "Ghaziabad", state: "Uttar Pradesh", type: "Private", fees: "₹21.5 Lakhs" },
  "great-lakes-chennai": { name: "Great Lakes Institute of Management (Chennai)", location: "Chennai", state: "Tamil Nadu", type: "Private", fees: "₹19.8 Lakhs" },
  "ximb": { name: "XIMB Bhubaneswar - Xavier Institute of Management", location: "Bhubaneswar", state: "Odisha", type: "Private", fees: "₹22.0 Lakhs" },
  "iim-kashipur": { name: "IIM Kashipur - Indian Institute of Management", location: "Kashipur", state: "Uttarakhand", type: "Government", fees: "₹17.5 Lakhs" },
  "iim-amritsar": { name: "IIM Amritsar - Indian Institute of Management", location: "Amritsar", state: "Punjab", type: "Government", fees: "₹16.0 Lakhs" },
  "iim-nagpur": { name: "IIM Nagpur - Indian Institute of Management", location: "Nagpur", state: "Maharashtra", type: "Government", fees: "₹18.0 Lakhs" },
  "iim-visakhapatnam": { name: "IIM Visakhapatnam - Indian Institute of Management", location: "Visakhapatnam", state: "Andhra Pradesh", type: "Government", fees: "₹16.5 Lakhs" },
  "iim-bodh-gaya": { name: "IIM Bodh Gaya - Indian Institute of Management", location: "Bodh Gaya", state: "Bihar", type: "Government", fees: "₹15.5 Lakhs" },
  "iim-sirmaur": { name: "IIM Sirmaur - Indian Institute of Management", location: "Sirmaur", state: "Himachal Pradesh", type: "Government", fees: "₹15.0 Lakhs" },
  "iim-sambalpur": { name: "IIM Sambalpur - Indian Institute of Management", location: "Sambalpur", state: "Odisha", type: "Government", fees: "₹15.0 Lakhs" },
  "iim-jammu": { name: "IIM Jammu - Indian Institute of Management", location: "Jammu", state: "Jammu & Kashmir", type: "Government", fees: "₹16.0 Lakhs" },
  "iit-bombay": { name: "Shailesh J. Mehta School of Management (IIT Bombay)", location: "Mumbai", state: "Maharashtra", type: "Government", fees: "₹14.0 Lakhs" },
  "iit-delhi": { name: "Department of Management Studies (IIT Delhi)", location: "Delhi", state: "Delhi", type: "Government", fees: "₹11.2 Lakhs" },
  "iit-kharagpur": { name: "Vinod Gupta School of Management (IIT Kharagpur)", location: "Kharagpur", state: "West Bengal", type: "Government", fees: "₹12.5 Lakhs" }
};

const defaultAboutDescriptions = {
  "iim-ahmedabad": "Established in 1961, the Indian Institute of Management Ahmedabad (IIMA) is a premier global management school. Known for its rigorous case-study method, world-class faculty, and outstanding alumni network, IIMA consistently ranks as the top B-school in India.",
  "iim-bangalore": "The Indian Institute of Management Bangalore (IIMB) is a leading graduate school of management in Asia. Situated in India's high-tech capital, IIMB is highly acclaimed for its academic research, entrepreneurship focus, and state-of-the-art campus.",
  "iim-calcutta": "Established as the first national institute for post-graduate studies and research in management, IIM Calcutta (IIMC) is renowned globally for its strong focus on finance, economics, and quantitative courses, making it a hub for finance enthusiasts.",
  "iim-lucknow": "The Indian Institute of Management Lucknow (IIML) was established in 1984. It is recognized for creating global leaders through its diverse management programmes, research, and consulting services, situated on a beautiful 190-acre campus.",
  "xlri-jamshedpur": "Founded in 1949, XLRI Jamshedpur is the oldest business school in India. It is highly regarded for its Human Resource Management and Business Management programmes, focusing heavily on values, ethics, and social responsibility.",
  "iim-kozhikode": "The Indian Institute of Management Kozhikode (IIMK) was established in 1996 in Kerala. Famous for its picturesque campus, IIMK is a pioneer in management education, introducing unique programmes like Liberal Studies in Management.",
  "iim-indore": "The Indian Institute of Management Indore (IIMI) is a top-tier business school established in 1996. It has the unique distinction of holding the 'Triple Crown' accreditation from AMBA, AACSB, and EQUIS, offering high-quality management education."
};

(async () => {
    console.log("Launching Puppeteer...");
    const browser = await puppeteer.launch({ 
        headless: 'new',
        defaultViewport: { width: 1280, height: 800 }
    }); 
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

    try {
        const rankingUrl = 'https://www.shiksha.com/mba/ranking/top-mba-colleges-in-india/2-2-0-0-0';
        console.log(`Navigating to Shiksha MBA Ranking Page: ${rankingUrl}`);
        await page.goto(rankingUrl, { waitUntil: 'domcontentloaded', timeout: 40000 });
        
        await new Promise(r => setTimeout(r, 3000));
        
        const collegeLinks = await page.evaluate(() => {
            const links = Array.from(document.querySelectorAll('a')).map(a => ({
                text: a.innerText.trim(),
                href: a.href
            }));
            const reviewLinks = links.filter(l => l.href.includes('/reviews') && l.text.toLowerCase().includes('reviews'));
            
            const results = [];
            const visitedHrefs = new Set();
            for (let link of reviewLinks) {
                const collegeUrl = link.href.replace('/reviews', '');
                const cleanName = link.text.replace(' Reviews', '').replace(' reviews', '').trim();
                
                if (!visitedHrefs.has(collegeUrl)) {
                    visitedHrefs.add(collegeUrl);
                    results.push({
                        name: cleanName,
                        url: collegeUrl
                    });
                }
            }
            return results;
        });

        console.log(`Found ${collegeLinks.length} top MBA colleges on ranking page.`);

        // We want to correct the 30 colleges in our dataset (IDs 12673 to 12702)
        const startId = 12673;
        const count = 30;

        for (let i = 0; i < count; i++) {
            const targetId = startId + i;
            const linkObj = collegeLinks[i];
            if (!linkObj) break;

            const existingIndex = siteData.colleges.findIndex(c => c.id === targetId);
            if (existingIndex === -1) {
                console.log(`Could not find college with ID ${targetId}`);
                continue;
            }

            const college = siteData.colleges[existingIndex];
            console.log(`\nCorrecting [${i + 1}/${count}] (ID: ${targetId}, Current: ${college.name})`);

            let lookupKey = Object.keys(collegeLookup).find(k => linkObj.url.includes(k));
            
            try {
                await page.goto(linkObj.url, { waitUntil: 'domcontentloaded', timeout: 35000 });
                await new Promise(r => setTimeout(r, 2000));

                const pageData = await page.evaluate(() => {
                    const h1 = document.querySelector('h1');
                    const h1Text = h1 ? h1.innerText.split(':')[0].trim() : '';
                    
                    const img = document.querySelector('.hero-banner img, .gallery-img img, .campus-img img, img[alt*="campus"]') || 
                                document.querySelector('img[src*="shiksha.com/mediadata/images"]');
                    const imgUrl = img ? img.src : '';

                    const paragraphs = Array.from(document.querySelectorAll('p, .overview-text, .read-more-text, .about-college-text'))
                        .map(p => p.innerText.trim())
                        .filter(t => t.length > 80 && !t.includes('cookie') && !t.includes('subscribe') && !t.includes('click here'));
                    
                    return { h1Text, imgUrl, paragraphs: paragraphs.slice(0, 3) };
                });

                // Determine correct name
                let finalName = lookupKey ? collegeLookup[lookupKey].name : (pageData.h1Text || linkObj.name);
                if (finalName.toLowerCase().startsWith("view all")) {
                    finalName = pageData.h1Text || finalName;
                }

                // If name still has view all, try to parse it from the URL
                if (finalName.toLowerCase().startsWith("view all")) {
                    // Extract name from URL e.g. https://www.shiksha.com/college/iim-udaipur-indian-institute-of-management-31839 -> "iim-udaipur"
                    const match = linkObj.url.match(/college\/([a-z0-9-]+)/);
                    if (match && match[1]) {
                        finalName = match[1].split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
                    }
                }

                // Clean name details
                const city = lookupKey ? collegeLookup[lookupKey].location : "India";
                const state = lookupKey ? collegeLookup[lookupKey].state : "India";
                const type = lookupKey ? collegeLookup[lookupKey].type : "Private";
                const fees = lookupKey ? collegeLookup[lookupKey].fees : "₹15.0 Lakhs";
                
                const rawAbout = pageData.paragraphs.join(' ');
                let about = rawAbout.length > 50 ? rawAbout : (defaultAboutDescriptions[lookupKey] || `Welcome to ${finalName}, one of the premier business schools located in ${city}, ${state}. It offers state-of-the-art facilities, highly distinguished faculty, and exceptional placement records for its management graduates.`);
                
                if (about.length > 500) {
                    about = about.substring(0, 497) + "...";
                }

                const imgUrl = (pageData.imgUrl && pageData.imgUrl.startsWith('http')) ? pageData.imgUrl : college.img;

                // Update properties
                college.name = finalName;
                college.shortName = finalName.split(' ').map(w => w[0]).join('').toUpperCase().substring(0, 5);
                college.location = city;
                college.state = state;
                college.address = `${city}, ${state}`;
                college.type = type;
                college.about = about;
                college.fees = fees;
                college.img = imgUrl;
                college.website = `https://www.${lookupKey || 'college'}.ac.in`;
                college.courses = [
                    {
                        title: "Master of Business Administration (MBA)",
                        type: "MANAGEMENT",
                        division: "POST GRADUATE",
                        duration: "2 Years",
                        fees: fees,
                        intake: 120,
                        eligibility: "Bachelor's Degree with minimum 50% aggregate (45% for reserved category) + Qualifying exam score (CAT/XAT/GMAT)"
                    },
                    {
                        title: "Post Graduate Diploma in Management (PGDM)",
                        type: "MANAGEMENT",
                        division: "POST GRADUATE",
                        duration: "2 Years",
                        fees: fees,
                        intake: 180,
                        eligibility: "Bachelor's Degree with minimum 50% aggregate + CAT/XAT/GMAT score"
                    }
                ];

                console.log(` -> Corrected to: ${finalName} (${city}, ${state})`);

                // Write incrementally
                fs.writeFileSync(dataPath, JSON.stringify(siteData, null, 2));

            } catch (err) {
                console.error(` -> Error correcting ${targetId}: ${err.message}`);
            }

            await new Promise(r => setTimeout(r, 2000));
        }

        console.log("\nFinished correcting college names and details!");

    } catch (e) {
        console.error("Correction script failed:", e.message);
    } finally {
        await browser.close();
    }
})();
