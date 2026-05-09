const fs = require('fs');
const google = require('googlethis');

const dataPath = 'c:\\Users\\amanr\\collegesearch\\src\\data\\siteData.json';

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchRealImages() {
    console.log('Loading siteData.json...');
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    const colleges = data.colleges;

    let updatedCount = 0;

    for (let i = 0; i < colleges.length; i++) {
        const college = colleges[i];
        
        // If image is an unsplash (fake) image
        if (college.img && college.img.includes('unsplash.com')) {
            try {
                console.log(`[${i + 1}/${colleges.length}] Fetching real image for: ${college.name}`);
                const images = await google.image(`${college.name} ${college.location} college campus`, { safe: false });
                
                if (images && images.length > 0) {
                    const realImageUrl = images[0].url;
                    college.img = realImageUrl;
                    college.gallery[0] = realImageUrl;
                    
                    // Add second image if available
                    if (images.length > 1) {
                        college.gallery[1] = images[1].url;
                    }
                    
                    updatedCount++;
                    console.log(`   -> Success: ${realImageUrl}`);
                    
                    // Save progressively every 10 updates so data isn't lost
                    if (updatedCount % 10 === 0) {
                        fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
                        console.log('   -> Saved progress to JSON.');
                    }
                } else {
                    console.log('   -> No images found.');
                }
            } catch (err) {
                console.error(`   -> Error fetching image:`, err.message);
                if (err.message.includes('429') || err.message.includes('Too Many Requests')) {
                    console.log('Google Rate Limit hit! Waiting 60 seconds before resuming...');
                    await delay(60000);
                }
            }
            
            // Wait 5 seconds between requests to avoid Google ban
            await delay(5000);
        }
    }

    // Final save
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    console.log(`Finished! Successfully updated ${updatedCount} colleges with real images.`);
}

fetchRealImages();
