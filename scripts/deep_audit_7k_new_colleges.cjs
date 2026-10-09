const fs = require('fs');
const path = require('path');

console.log(`================================================================`);
console.log(`🔬 EXHAUSTIVE DEEP AUDIT OF ALL 6,963 NEWLY ADDED COLLEGES`);
console.log(`================================================================`);

const siteDataPath = path.resolve('public/siteData.json');
const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const colleges = siteData.colleges;

const START_INDEX = 3671; // IDs 3672 to 10634
const newColleges = colleges.slice(START_INDEX);

console.log(`Total colleges in DB: ${colleges.length}`);
console.log(`Total newly added colleges being audited: ${newColleges.length} (IDs 3672 to ${colleges.length})\n`);

// 1. Comprehensive Bad Pattern & Domain Blacklist
const BLACKLIST = [
  'logo', 'icon', 'favicon', 'badge', 'seal', 'emblem', 'unilogo', 'collegelogo', 'dept-logo', 'symbol',
  'staticmap', 'maps.googleapis', 'google.com/maps', 'static-map', 'streetview', 'geo/',
  'yumpu', 'docplayer', 'issuu', 'slideshare', 'pdf', 'document', 'magazine', 'flashmagazine',
  'brochure', 'pamphlet', 'forms.png', 'admitcard', 'marksheet', 'hallticket', 'certificate',
  'result', 'boardresults', 'sarkariresult', 'onlineresult', 'exam-', 'ktu+result',
  'flyer', 'poster', 'event_poster', 'adbanner', 'admissions-open', 'admission-flyer',
  'removebg', 'transparent', 'nobg', 'cutout', 'preview.png',
  'vector', 'freepik', 'clipart', 'alphabet', 'letter', 'tracing', 'worksheet', 'liveworksheets',
  'cartoon', 'illustration', 'sketch', 'drawing', 'jewelry', 'jewellery', 'diamond', 'necklace', 'earring',
  'drone', 'fitness', 'abs-', 'workout', 'bodybuilding', 'actor', 'actress', 'bachchan', 'portrait', 'avatar',
  'alamy.com', 'shutterstock', 'istockphoto', 'depositphotos', 'dreamstime', '123rf',
  'vecteezy', 'etsy.com', 'made-in-china', 'alibaba', 'aliexpress', 'amazon.', 'flipkart',
  '.svg', '.gif', 'lookaside.fbsbx.com', 'lookaside.instagram.com', 'bingo.icbse.com',
  'mah-b.ed', 'merkur.de', 'pressassociation', 'scribdassets.com', 'youtube.com', 'ytimg.com',
  'wallpaper', 'wallpapers', 'pngall', 'pngtree', 'freepng', 'independent.co.uk', 'britannica.com',
  'timesofisrael', 'mahmoud', 'probatsman.com', 'filmfare', 'analyticsjobs', 'personalpowertraining',
  'facts.net', 'wallpapercave', 'pensionerfitness', 'duchuymobile', 'motionbgs', 'windows10spotlight',
  'alonhadat', 'wallpaperaccess', 'wallpapercrafter', 'bhagwanpuja', 'publicdomainpictures',
  'uhdpaper', 'placeholder', 'avatar', 'profile', 'banner_blank', 'default_image',
  'no-image', 'null', 'undefined', 'data:image', 'x-raw-image'
];

let badMainImages = [];
let badGalleryImages = [];
let badNames = [];
let badCourses = [];
let badMaps = [];
let badWebsites = [];

newColleges.forEach(c => {
  const imgLower = String(c.img || '').toLowerCase();
  
  // A. Check Main Image
  if (!c.img || !c.img.startsWith('http')) {
    badMainImages.push({ id: c.id, name: c.name, reason: 'Invalid URL / Missing HTTP', img: c.img });
  } else {
    for (const pat of BLACKLIST) {
      if (imgLower.includes(pat)) {
        badMainImages.push({ id: c.id, name: c.name, reason: `Matched pattern: ${pat}`, img: c.img });
        break;
      }
    }
  }

  // B. Check Gallery Images
  if (!Array.isArray(c.gallery) || c.gallery.length < 3) {
    badGalleryImages.push({ id: c.id, name: c.name, reason: `Gallery has < 3 photos: ${c.gallery ? c.gallery.length : 0}` });
  } else {
    for (const g of c.gallery) {
      const gLower = String(g || '').toLowerCase();
      if (!g || !g.startsWith('http')) {
        badGalleryImages.push({ id: c.id, name: c.name, reason: 'Gallery contains non-http URL', img: g });
        break;
      }
      for (const pat of BLACKLIST) {
        if (gLower.includes(pat)) {
          badGalleryImages.push({ id: c.id, name: c.name, reason: `Gallery matched pattern: ${pat}`, img: g });
          break;
        }
      }
    }
  }

  // C. Check College Name
  const name = String(c.name || '').trim();
  if (name.length < 3 || /^\d+[-_ ]+/.test(name) || /\b(2024|2025|2026|2027|2028|Cutoff|Course Admissions|Admissions Open)\b/i.test(name)) {
    badNames.push({ id: c.id, name: c.name, reason: 'Name contains trailing years/junk or prefix numbers' });
  }

  // D. Check Courses
  if (!Array.isArray(c.courses) || c.courses.length < 5) {
    badCourses.push({ id: c.id, name: c.name, count: c.courses ? c.courses.length : 0 });
  } else {
    for (const cr of c.courses) {
      if (!cr.title && !cr.name) {
        badCourses.push({ id: c.id, name: c.name, reason: 'Course missing title' });
        break;
      }
      if (!cr.duration || !cr.fees) {
        badCourses.push({ id: c.id, name: c.name, reason: 'Course missing duration or fees' });
        break;
      }
    }
  }

  // E. Check Map URL
  if (!c.mapUrl || !c.mapUrl.startsWith('https://www.google.com/maps/search/')) {
    badMaps.push({ id: c.id, name: c.name, mapUrl: c.mapUrl });
  }

  // F. Check Website URL
  if (!c.website || !c.website.startsWith('http')) {
    badWebsites.push({ id: c.id, name: c.name, website: c.website });
  }
});

console.log(`--- AUDIT RESULTS ---`);
console.log(`1. Bad Main Images: ${badMainImages.length}`);
if (badMainImages.length > 0) {
  console.log('Sample bad main images:', badMainImages.slice(0, 10));
}

console.log(`2. Bad Gallery Images: ${badGalleryImages.length}`);
if (badGalleryImages.length > 0) {
  console.log('Sample bad gallery images:', badGalleryImages.slice(0, 10));
}

console.log(`3. Flagged Names: ${badNames.length}`);
if (badNames.length > 0) {
  console.log('Sample flagged names:', badNames.slice(0, 10));
}

console.log(`4. Incomplete Courses (<5 courses): ${badCourses.length}`);
if (badCourses.length > 0) {
  console.log('Sample incomplete courses:', badCourses.slice(0, 10));
}

console.log(`5. Invalid Map URLs: ${badMaps.length}`);
console.log(`6. Invalid Website URLs: ${badWebsites.length}`);

console.log(`\n================================================================`);
if (badMainImages.length === 0 && badGalleryImages.length === 0 && badNames.length === 0 && badCourses.length === 0 && badMaps.length === 0 && badWebsites.length === 0) {
  console.log(`🎉 100% PERFECT AUDIT: ALL 6,963 NEW COLLEGES ARE FULLY COMPLIANT!`);
} else {
  console.log(`⚠️ ACTION REQUIRED: Issues detected and need automated remediation.`);
}
console.log(`================================================================`);
