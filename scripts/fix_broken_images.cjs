const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../src/data/siteData.json');
console.log(`Loading site data from: ${dataPath}`);
const siteData = require(dataPath);

// Curated list of high quality Unsplash college/campus images
const campusPlaceholders = [
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1498243691581-b148c5530d6b?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1527891751199-7225231a68dd?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1607013407377-167ab82377c0?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1590408546194-e3fb4b917531?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1525920980995-f8a382bf42c5?auto=format&fit=crop&q=80&w=800"
];

function getRandomPlaceholder(index) {
    const idx = (index || 0) % campusPlaceholders.length;
    return campusPlaceholders[idx];
}

// Check if an image URL is a broken raw image or a person photo
function isBadImage(url) {
    if (!url) return true;
    const lower = url.toLowerCase();
    
    // Check for broken pdf raw image extracts
    if (lower.startsWith('x-raw-image:///')) return true;
    
    // Check for known people names/files that were scraped by mistake
    const badPatterns = [
        'pratyasha-chaturvedi',
        'himani_chopra',
        'snehal-purani',
        'rgstatic.net/ii/profile.image',
        'profile.image',
        'canteen.svg',
        'result/image/fress'
    ];
    
    return badPatterns.some(pattern => lower.includes(pattern));
}

let modifiedCount = 0;
let sibsagarFixed = false;

siteData.colleges.forEach((college, collegeIdx) => {
    // 1. Specific fix for Sibsagar Polytechnic
    if (college.id === 1028 || (college.name && college.name.toLowerCase().includes('sibsagar polytechnic'))) {
        college.img = "https://image-static.collegedunia.com/public/college_data/images/campusimage/14154265871.jpg";
        
        if (!college.gallery) college.gallery = [];
        college.gallery[0] = "https://image-static.collegedunia.com/public/college_data/images/campusimage/14154265871.jpg";
        college.gallery[1] = "https://files.yappe.in/place/full/sibsagar-polytechnic-demow-9665345.webp";
        
        console.log(`Fixed Sibsagar Polytechnic (ID: ${college.id}) specifically.`);
        sibsagarFixed = true;
        modifiedCount++;
    }

    // 2. Scan and fix other broken/personal images
    if (isBadImage(college.img)) {
        const replacement = getRandomPlaceholder(collegeIdx);
        console.log(`Replacing main image of ${college.name} (ID: ${college.id}) with: ${replacement}`);
        college.img = replacement;
        modifiedCount++;
    }

    // Clean up gallery
    if (college.gallery && Array.isArray(college.gallery)) {
        college.gallery = college.gallery.map((imgUrl, galleryIdx) => {
            if (isBadImage(imgUrl)) {
                const replacement = getRandomPlaceholder(collegeIdx + galleryIdx + 1);
                console.log(`Replacing gallery image [${galleryIdx}] of ${college.name} (ID: ${college.id}) with: ${replacement}`);
                modifiedCount++;
                return replacement;
            }
            return imgUrl;
        });
    }
});

if (modifiedCount > 0) {
    fs.writeFileSync(dataPath, JSON.stringify(siteData, null, 2));
    console.log(`Successfully completed! Modified/cleaned ${modifiedCount} image references in siteData.json.`);
} else {
    console.log("No incorrect/broken images found to clean.");
}
