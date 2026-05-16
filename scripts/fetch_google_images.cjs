const fs = require('fs');
const path = require('path');
const google = require('googlethis');

const dataPath = path.join(__dirname, '../src/data/siteData.json');
let siteData = require(dataPath);

async function fetchCampusImage() {
    let updatedCount = 0;
    const MAX_TO_PROCESS = 10; // Change this to process more

    for (let i = 0; i < siteData.colleges.length; i++) {
        const college = siteData.colleges[i];
        
        // Let's only update if the image is still the unsplash placeholder or shiksha ad
        if (college.img && (college.img.includes('unsplash.com') || college.img.includes('1767872065phpZK4ZWj'))) {
            console.log(`[${i+1}/${siteData.colleges.length}] Fetching image for: ${college.name}`);
            
            try {
                // Search Google Images for the campus
                const query = `${college.name} campus building`;
                const images = await google.image(query, { safe: false });
                
                if (images && images.length > 0) {
                    // Find a valid image URL
                    const validImage = images.find(img => img.url.startsWith('http') && !img.url.includes('fbsbx.com'));
                    
                    if (validImage) {
                        college.img = validImage.url;
                        if (!college.gallery) college.gallery = [];
                        college.gallery.unshift(validImage.url);
                        
                        console.log(` -> Found image: ${validImage.url}`);
                        updatedCount++;
                    }
                }
                
                // Save incrementally
                fs.writeFileSync(dataPath, JSON.stringify(siteData, null, 2));

            } catch (err) {
                console.log(` -> Failed to fetch image: ${err.message}`);
            }

            if (updatedCount >= MAX_TO_PROCESS) {
                console.log(`\nReached batch limit of ${MAX_TO_PROCESS}.`);
                break;
            }

            // Small delay to prevent rate limits
            await new Promise(r => setTimeout(r, 1000));
        }
    }
    console.log("Image fetching complete.");
}

fetchCampusImage();
