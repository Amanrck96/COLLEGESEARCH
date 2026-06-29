import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import xlsx from 'xlsx';

// Initialize Stealth Plugin
puppeteer.use(StealthPlugin());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper for human-like delays
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const randomDelay = (min = 2000, max = 5000) => delay(Math.floor(Math.random() * (max - min) + min));

/**
 * Parses JSON-LD schema blocks from a page.
 * Highly robust method to get contact, logo, address, and website details.
 */
async function parseJsonLdSchema(page) {
  try {
    const schemas = await page.evaluate(() => {
      const scriptTags = Array.from(document.querySelectorAll('script[type="application/ld+json"]'));
      return scriptTags.map(tag => {
        try {
          return JSON.parse(tag.textContent);
        } catch (e) {
          return null;
        }
      }).filter(Boolean);
    });

    let result = {
      name: '',
      logo: '',
      address: '',
      streetAddress: '',
      city: '',
      state: '',
      country: '',
      pinCode: '',
      telephone: '',
      email: '',
      website: '',
      faqs: []
    };

    schemas.forEach(schema => {
      const items = Array.isArray(schema) ? schema : [schema];
      items.forEach(item => {
        // Look for CollegeOrUniversity or EducationalOrganization schema
        if (item['@type'] === 'CollegeOrUniversity' || item['@type'] === 'EducationalOrganization') {
          if (item.name) result.name = item.name;
          if (item.logo) {
            result.logo = typeof item.logo === 'string' ? item.logo : (item.logo.url || '');
          }
          if (item.url) result.website = item.url;
          if (item.telephone) result.telephone = item.telephone;
          if (item.email) result.email = item.email;
          
          if (item.address) {
            if (typeof item.address === 'string') {
              result.address = item.address;
            } else {
              result.streetAddress = item.address.streetAddress || '';
              result.city = item.address.addressLocality || '';
              result.state = item.address.addressRegion || '';
              result.country = item.address.addressCountry || 'India';
              result.pinCode = item.address.postalCode || '';
              result.address = [
                result.streetAddress, 
                result.city, 
                result.state, 
                result.pinCode, 
                result.country
              ].filter(Boolean).join(', ');
            }
          }
        }
        
        // Look for FAQPage schema
        if (item['@type'] === 'FAQPage' && item.mainEntity) {
          const faqEntities = Array.isArray(item.mainEntity) ? item.mainEntity : [item.mainEntity];
          faqEntities.forEach(faq => {
            if (faq.name && faq.acceptedAnswer && faq.acceptedAnswer.text) {
              result.faqs.push({
                question: faq.name.trim(),
                answer: faq.acceptedAnswer.text.replace(/<[^>]*>/g, '').trim() // strip HTML tags
              });
            }
          });
        }
      });
    });

    return result;
  } catch (error) {
    console.error('   [Error] Failed to parse JSON-LD Schema:', error.message);
    return {};
  }
}

/**
 * Scrapes a single college detail profile across its subpages.
 */
async function scrapeCollegeDetails(browser, baseUrl) {
  // Strip trailing slashes to build subpage URLs
  const cleanUrl = baseUrl.replace(/\/$/, '');
  const page = await browser.newPage();
  
  // Use realistic desktop resolution
  await page.setViewport({ width: 1440, height: 900 });
  await page.setUserAgent(
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  );

  const collegeData = {
    collegeUrl: cleanUrl,
    name: 'N/A',
    logoUrl: 'N/A',
    bannerUrl: 'N/A',
    galleryUrls: [],
    city: 'N/A',
    state: 'N/A',
    country: 'N/A',
    address: 'N/A',
    pinCode: 'N/A',
    description: 'N/A',
    establishmentYear: 'N/A',
    ownership: 'N/A',
    approvalStatus: 'N/A',
    accreditationDetails: 'N/A',
    universityType: 'N/A',
    coursesOffered: [],
    admissionProcess: 'N/A',
    entranceExams: 'N/A',
    cutoffScores: 'N/A',
    placementDetails: 'N/A',
    highestPackage: 'N/A',
    averagePackage: 'N/A',
    topRecruiters: [],
    facilities: [],
    hostelInfo: 'N/A',
    scholarships: 'N/A',
    rankings: 'N/A',
    phone: 'N/A',
    email: 'N/A',
    officialWebsite: 'N/A',
    brochureLinks: [],
    faqs: []
  };

  try {
    // ----------------------------------------------------
    // SUBPAGE 1: OVERVIEW / MAIN PAGE
    // ----------------------------------------------------
    console.log(` -> Loading Overview: ${cleanUrl}`);
    await page.goto(cleanUrl, { waitUntil: 'domcontentloaded', timeout: 35000 });
    await randomDelay(1500, 3000);

    // Parse JSON-LD Schema
    const schemaData = await parseJsonLdSchema(page);
    if (schemaData.name) collegeData.name = schemaData.name;
    if (schemaData.logo) collegeData.logoUrl = schemaData.logo;
    if (schemaData.address) collegeData.address = schemaData.address;
    if (schemaData.streetAddress) collegeData.address = `${schemaData.streetAddress}, ${schemaData.city || ''}`.trim();
    if (schemaData.city) collegeData.city = schemaData.city;
    if (schemaData.state) collegeData.state = schemaData.state;
    if (schemaData.country) collegeData.country = schemaData.country;
    if (schemaData.pinCode) collegeData.pinCode = schemaData.pinCode;
    if (schemaData.telephone) collegeData.phone = schemaData.telephone;
    if (schemaData.email) collegeData.email = schemaData.email;
    if (schemaData.website) collegeData.officialWebsite = schemaData.website;
    if (schemaData.faqs && schemaData.faqs.length > 0) collegeData.faqs = schemaData.faqs;

    // DOM Fallbacks for Name
    if (collegeData.name === 'N/A') {
      collegeData.name = await page.evaluate(() => {
        const h1 = document.querySelector('h1');
        return h1 ? h1.textContent.trim() : 'N/A';
      });
    }

    // Extract Description / Overview
    collegeData.description = await page.evaluate(() => {
      // Look for about college text block
      const blocks = [
        document.querySelector('.about-college-text'),
        document.querySelector('.read-more-text'),
        document.querySelector('.overview-text'),
        document.querySelector('div[class*="Overview_description"]'),
        document.querySelector('section#overview p')
      ];
      const match = blocks.find(Boolean);
      return match ? match.textContent.trim() : 'N/A';
    });

    // Extract Highlights / Header Info (Estd, Ownership, Type, Approval, Accreditation)
    const highlights = await page.evaluate(() => {
      const items = Array.from(document.querySelectorAll('ul[scrollable="true"] > li, ul.ff9e36 > li, .highlights-list > li, .fact-sheet li'));
      let estd = '';
      let owner = '';
      let approval = [];
      let accreditation = '';
      let type = '';

      items.forEach(li => {
        const text = li.textContent || '';
        
        // Estd
        if (text.includes('Estd.') || text.toLowerCase().includes('established')) {
          const span = li.querySelector('span');
          estd = span ? span.textContent.trim() : text.replace(/Estd\.\s*/i, '').trim();
        }
        // Ownership / University Type
        if (text.toLowerCase().includes('public') || text.toLowerCase().includes('government') || text.toLowerCase().includes('private') || text.toLowerCase().includes('autonomous') || text.toLowerCase().includes('deemed')) {
          owner = text.trim().replace(/\n/g, ' ');
          if (text.toLowerCase().includes('private')) type = 'Private';
          else if (text.toLowerCase().includes('government') || text.toLowerCase().includes('public')) type = 'Public/Government';
          else if (text.toLowerCase().includes('autonomous')) type = 'Autonomous';
          else if (text.toLowerCase().includes('deemed')) type = 'Deemed';
        }
        // Approval
        if (text.toLowerCase().includes('approved') || text.includes('UGC') || text.includes('AICTE') || text.includes('BCI') || text.includes('MCI') || text.includes('PCI')) {
          approval.push(text.trim());
        }
        // Accreditation
        if (text.toLowerCase().includes('naac') || text.toLowerCase().includes('accredited') || text.toLowerCase().includes('nba')) {
          accreditation = text.trim().replace(/\n/g, ' ');
        }
      });

      return { estd, owner, approval: approval.join(', '), accreditation, type };
    });

    if (highlights.estd) collegeData.establishmentYear = highlights.estd;
    if (highlights.owner) collegeData.ownership = highlights.owner;
    if (highlights.approval) collegeData.approvalStatus = highlights.approval;
    if (highlights.accreditation) collegeData.accreditationDetails = highlights.accreditation;
    if (highlights.type) collegeData.universityType = highlights.type;

    // Direct DOM Contact details Fallback
    if (collegeData.phone === 'N/A' || collegeData.email === 'N/A') {
      const contactObj = await page.evaluate(() => {
        let phone = '';
        let email = '';
        const addressEl = document.querySelector('.rhsContainer div.f64ad9:has(.aa1d16:contains("Address")) > div > p');
        const phoneEl = document.querySelector('.rhsContainer div.f64ad9:has(.aa1d16:contains("Phone")) a');
        const emailEl = document.querySelector('.rhsContainer div.f64ad9:has(.aa1d16:contains("Email")) a');
        return {
          phone: phoneEl ? phoneEl.textContent.trim() : '',
          email: emailEl ? emailEl.textContent.trim() : '',
          address: addressEl ? addressEl.textContent.trim() : ''
        };
      });
      if (contactObj.phone) collegeData.phone = contactObj.phone;
      if (contactObj.email) collegeData.email = contactObj.email;
      if (contactObj.address && collegeData.address === 'N/A') collegeData.address = contactObj.address;
    }

    // Brochure Button Check
    collegeData.brochureLinks = await page.evaluate(() => {
      const btns = Array.from(document.querySelectorAll('button[id^="brchr_"], .tupleBrochureButton, a[href*="brochure"]'));
      return btns.map(b => {
        if (b.tagName === 'A') return b.href;
        return `Clickable Trigger ID: ${b.id || 'N/A'}`;
      }).filter(Boolean);
    });

    // Overview Rankings extraction
    collegeData.rankings = await page.evaluate(() => {
      const rankCards = Array.from(document.querySelectorAll('.ranking-card, .rank-badge, .ranking-widget, div[class*="ranking"]'));
      return rankCards.map(c => c.textContent.trim().replace(/\s+/g, ' ')).filter(Boolean).join(' | ') || 'N/A';
    });

    // ----------------------------------------------------
    // SUBPAGE 2: GALLERY IMAGE URLS (/gallery)
    // ----------------------------------------------------
    console.log(` -> Loading Gallery: ${cleanUrl}/gallery`);
    await page.goto(`${cleanUrl}/gallery`, { waitUntil: 'domcontentloaded', timeout: 30000 }).catch(() => null);
    await randomDelay(1000, 2000);

    const images = await page.evaluate(() => {
      const bannerImg = document.querySelector('.hero-banner img, .gallery-img img, .campus-img img, img.heroImage');
      const banner = bannerImg ? bannerImg.src : '';

      // Gallery Images - extract sources from thumbnails/main slider
      const imgElements = Array.from(document.querySelectorAll('div.gallery-card img, .galleryContainer img, .gallery-list img, img[src*="shiksha.com/mediadata/images"]'));
      const gallery = imgElements
        .map(img => img.src || img.dataset.src || '')
        .filter(src => src.startsWith('http') && !src.includes('logo') && !src.includes('default'));
      
      // Make unique
      const uniqueGallery = Array.from(new Set(gallery));
      return { banner, gallery: uniqueGallery };
    });

    if (images.banner) collegeData.bannerUrl = images.banner;
    if (images.gallery && images.gallery.length > 0) {
      collegeData.galleryUrls = images.gallery.slice(0, 8); // Grab up to 8 images
    }

    // ----------------------------------------------------
    // SUBPAGE 3: COURSES & FEES (/courses)
    // ----------------------------------------------------
    console.log(` -> Loading Courses: ${cleanUrl}/courses`);
    await page.goto(`${cleanUrl}/courses`, { waitUntil: 'domcontentloaded', timeout: 35000 }).catch(() => null);
    await randomDelay(2000, 3000);

    // Infinite scroll on courses page to render all courses (up to 3 scrolls to get main items)
    for (let i = 0; i < 3; i++) {
      await page.evaluate(() => window.scrollBy(0, 1000));
      await delay(800);
    }

    collegeData.coursesOffered = await page.evaluate(() => {
      const courseTuples = Array.from(document.querySelectorAll('.acp_course_tuple > div[id^="tuple_"]'));
      return courseTuples.map(t => {
        const titleEl = t.querySelector('h3.f443c7, .course-title, a[href*="/course-"]');
        const title = titleEl ? titleEl.textContent.trim() : 'N/A';

        // Duration / Level
        const durationSpan = Array.from(t.querySelectorAll('.ae8f7e > span, .course-metadata span')).find(span => {
          const text = span.textContent.toLowerCase();
          return text.includes('year') || text.includes('month') || text.includes('degree') || text.includes('diploma');
        });
        const duration = durationSpan ? durationSpan.textContent.trim() : 'N/A';

        // Tuition Fee
        const feesLabel = Array.from(t.querySelectorAll('label.a9cf4b')).find(l => l.textContent.includes('Total Tuition Fees'));
        const feesEl = feesLabel ? feesLabel.nextElementSibling : null;
        let fees = 'N/A';
        if (feesEl) {
          const clone = feesEl.cloneNode(true);
          const btn = clone.querySelector('a, button');
          if (btn) btn.remove();
          fees = clone.textContent.trim();
        }

        // Eligibility / Exams Accepted
        const eligibilityLabel = Array.from(t.querySelectorAll('label.a9cf4b')).find(l => l.textContent.includes('Eligibility'));
        const eligibilityEl = eligibilityLabel ? eligibilityLabel.nextElementSibling : null;
        const eligibility = eligibilityEl ? eligibilityEl.textContent.trim() : 'N/A';

        const examsLabel = Array.from(t.querySelectorAll('label.a9cf4b')).find(l => l.textContent.includes('Exams Accepted'));
        const examLinks = examsLabel ? Array.from(examsLabel.nextElementSibling.querySelectorAll('a')) : [];
        const exams = examLinks.map(a => a.textContent.trim()).join(', ') || 'N/A';

        return { title, duration, fees, eligibility, exams };
      }).filter(c => c.title !== 'N/A');
    });

    // ----------------------------------------------------
    // SUBPAGE 4: PLACEMENTS (/placement)
    // ----------------------------------------------------
    console.log(` -> Loading Placements: ${cleanUrl}/placement`);
    await page.goto(`${cleanUrl}/placement`, { waitUntil: 'domcontentloaded', timeout: 30000 }).catch(() => null);
    await randomDelay(1500, 2500);

    const placementInfo = await page.evaluate(() => {
      // Seek Average and Highest Package
      let highest = '';
      let average = '';
      
      const salaryItems = Array.from(document.querySelectorAll('.salary-item, .placement-salary, div.f64ad9:has(span:contains("Salary"))'));
      salaryItems.forEach(item => {
        const text = item.textContent || '';
        if (text.toLowerCase().includes('highest')) {
          highest = text.trim().replace(/\s+/g, ' ');
        } else if (text.toLowerCase().includes('average')) {
          average = text.trim().replace(/\s+/g, ' ');
        }
      });

      // Try table extraction
      const tables = Array.from(document.querySelectorAll('table'));
      let statsText = [];
      tables.forEach(table => {
        const text = table.textContent || '';
        if (text.includes('Package') || text.includes('Salary') || text.includes('Average') || text.includes('Placement')) {
          statsText.push(table.innerText.trim().replace(/\n/g, ' | '));
        }
      });

      // Top Recruiters
      const recruiterImgs = Array.from(document.querySelectorAll('.recruiter-img img, .recruiter-logo img, img[alt*="Recruiter"], img[alt*="logo"]'));
      const recruiters = recruiterImgs.map(img => img.alt || '').filter(Boolean);

      return {
        highest: highest || 'N/A',
        average: average || 'N/A',
        details: statsText.join(' ; ') || 'N/A',
        recruiters: Array.from(new Set(recruiters)).slice(0, 10)
      };
    });

    if (placementInfo.highest !== 'N/A') collegeData.highestPackage = placementInfo.highest;
    if (placementInfo.average !== 'N/A') collegeData.averagePackage = placementInfo.average;
    collegeData.placementDetails = placementInfo.details;
    collegeData.topRecruiters = placementInfo.recruiters;

    // ----------------------------------------------------
    // SUBPAGE 5: ADMISSION & ENTRANCE EXAMS (/admission)
    // ----------------------------------------------------
    console.log(` -> Loading Admission: ${cleanUrl}/admission`);
    await page.goto(`${cleanUrl}/admission`, { waitUntil: 'domcontentloaded', timeout: 30000 }).catch(() => null);
    await randomDelay(1500, 2500);

    const admissionObj = await page.evaluate(() => {
      const sections = Array.from(document.querySelectorAll('section, div.admission-process, .admission-content'));
      const textBlock = sections.map(s => s.textContent.trim()).filter(t => t.includes('Admission') || t.includes('Eligibility')).join('\n');
      
      const examsLabel = Array.from(document.querySelectorAll('a[href*="/exam-"], .exam-badge'));
      const exams = examsLabel.map(el => el.textContent.trim()).filter(Boolean);

      return {
        process: textBlock.substring(0, 1000) || 'N/A',
        exams: Array.from(new Set(exams)).join(', ') || 'N/A'
      };
    });

    collegeData.admissionProcess = admissionObj.process;
    if (admissionObj.exams && admissionObj.exams !== 'N/A') collegeData.entranceExams = admissionObj.exams;

    // ----------------------------------------------------
    // SUBPAGE 6: CUTOFFS (/cutoff)
    // ----------------------------------------------------
    console.log(` -> Loading Cutoffs: ${cleanUrl}/cutoff`);
    await page.goto(`${cleanUrl}/cutoff`, { waitUntil: 'domcontentloaded', timeout: 30000 }).catch(() => null);
    await randomDelay(1000, 2000);

    collegeData.cutoffScores = await page.evaluate(() => {
      const cutoffs = Array.from(document.querySelectorAll('table, .cutoff-list, .cutoff-widget'));
      return cutoffs.slice(0, 2).map(c => c.textContent.trim().replace(/\s+/g, ' ')).join(' | ') || 'N/A';
    });

    // ----------------------------------------------------
    // SUBPAGE 7: FACILITIES & HOSTEL (/facilities)
    // ----------------------------------------------------
    console.log(` -> Loading Facilities: ${cleanUrl}/facilities`);
    await page.goto(`${cleanUrl}/facilities`, { waitUntil: 'domcontentloaded', timeout: 30000 }).catch(() => null);
    await randomDelay(1500, 2500);

    const facilitiesObj = await page.evaluate(() => {
      const items = Array.from(document.querySelectorAll('.facility-item, .facility-card, div.facility-text, .campus-facilities li'));
      const facilitiesList = items.map(i => i.textContent.trim().replace(/\s+/g, ' ')).filter(Boolean);

      // Extract hostel info
      const hostelHeader = Array.from(document.querySelectorAll('h3, h4')).find(h => h.textContent.includes('Hostel'));
      let hostelText = 'N/A';
      if (hostelHeader) {
        let p = hostelHeader.nextElementSibling;
        if (p) hostelText = p.textContent.trim();
      }

      return {
        facilities: Array.from(new Set(facilitiesList)),
        hostel: hostelText
      };
    });

    collegeData.facilities = facilitiesObj.facilities;
    collegeData.hostelInfo = facilitiesObj.hostel;

    // ----------------------------------------------------
    // SUBPAGE 8: SCHOLARSHIPS (/scholarships)
    // ----------------------------------------------------
    console.log(` -> Loading Scholarships: ${cleanUrl}/scholarships`);
    await page.goto(`${cleanUrl}/scholarships`, { waitUntil: 'domcontentloaded', timeout: 30000 }).catch(() => null);
    await randomDelay(1000, 2000);

    collegeData.scholarships = await page.evaluate(() => {
      const scholarshipBlock = document.querySelector('.scholarship-details, .scholarship-content, section#scholarships');
      return scholarshipBlock ? scholarshipBlock.textContent.trim().substring(0, 1000) : 'N/A';
    });

    // ----------------------------------------------------
    // DOM FAQ extraction (fallback to JSON-LD Schema FAQs)
    // ----------------------------------------------------
    if (collegeData.faqs.length === 0) {
      collegeData.faqs = await page.evaluate(() => {
        const faqs = [];
        const qElements = Array.from(document.querySelectorAll('.sectional-faqs > div[id*="::"]'));
        
        qElements.forEach(qEl => {
          const qText = qEl.textContent.replace(/^Q:\s*/i, '').trim();
          const aEl = qEl.nextElementSibling;
          if (aEl && aEl.classList.contains('f61835')) {
            const aText = aEl.textContent.replace(/^A:\s*/i, '').trim();
            faqs.push({ question: qText, answer: aText });
          }
        });
        return faqs;
      });
    }

  } catch (err) {
    console.error(`   [Error] Scraping failed for ${baseUrl}:`, err.message);
  } finally {
    await page.close();
  }

  return collegeData;
}

/**
 * Main Orchestration Function
 */
async function main() {
  // Config: Set of target URL(s) to scrape
  const collegesToScrape = [
    'https://www.shiksha.com/university/iit-delhi-indian-institute-of-technology-53938',
    'https://www.shiksha.com/college/indian-institute-of-management-ahmedabad-vastrapur-2917'
  ];

  console.log('==================================================');
  console.log('🤖 SHIKSHA.COM COMPREHENSIVE COLLEGE SCRAPER');
  console.log(`🚀 Queue size: ${collegesToScrape.length} colleges`);
  console.log('==================================================');

  // Launch stealth browser
  const browser = await puppeteer.launch({
    headless: false, // Set to false to visual inspect/debug, true for headless execution
    defaultViewport: { width: 1440, height: 900 },
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const scrapedDataList = [];

  for (let i = 0; i < collegesToScrape.length; i++) {
    const url = collegesToScrape[i];
    console.log(`\n[College ${i + 1}/${collegesToScrape.length}] Processing: ${url}`);
    
    const details = await scrapeCollegeDetails(browser, url);
    scrapedDataList.push(details);

    // Human-like pause between college scraping cycles
    const coolDown = Math.floor(Math.random() * 5000) + 5000;
    console.log(` -> Cooldown: waiting ${coolDown}ms before next target...`);
    await delay(coolDown);
  }

  await browser.close();

  // ----------------------------------------------------
  // STRUCTURE DATA FOR EXCEL EXPORT
  // ----------------------------------------------------
  console.log('\n📊 Restructuring data for Excel sheet columns...');
  
  const excelRows = scrapedDataList.map((col) => {
    const row = {
      'College Name': col.name,
      'Shiksha URL': col.collegeUrl,
      'Logo URL': col.logoUrl,
      'Banner Image URL': col.bannerUrl,
      
      // Gallery image URLs split into individual columns or comma-separated
      'Gallery Image 1': col.galleryUrls[0] || '',
      'Gallery Image 2': col.galleryUrls[1] || '',
      'Gallery Image 3': col.galleryUrls[2] || '',
      'Gallery Image 4': col.galleryUrls[3] || '',
      'Gallery Image 5': col.galleryUrls[4] || '',
      
      'City': col.city,
      'State': col.state,
      'Country': col.country,
      'Address': col.address,
      'Pin Code': col.pinCode,
      'Description': col.description,
      'Establishment Year': col.establishmentYear,
      'Ownership': col.ownership,
      'Approval Status': col.approvalStatus,
      'Accreditation Details': col.accreditationDetails,
      'University Type': col.universityType,
      'Admission Process': col.admissionProcess,
      'Entrance Exams Accepted': col.entranceExams,
      'Cutoff Scores': col.cutoffScores,
      'Placement Details': col.placementDetails,
      'Highest Package Offered': col.highestPackage,
      'Average Package': col.averagePackage,
      'Top Recruiters': col.topRecruiters.join(', '),
      'Facilities Available': col.facilities.join(', '),
      'Hostel Information': col.hostelInfo,
      'Scholarships Offered': col.scholarships,
      'Rankings': col.rankings,
      'Contact Number': col.phone,
      'Email': col.email,
      'Official Website': col.officialWebsite,
      'Brochure Links': col.brochureLinks.join(', '),
      
      // FAQ Columns (Flattening first 3 FAQs)
      'FAQ 1 Question': col.faqs[0]?.question || '',
      'FAQ 1 Answer': col.faqs[0]?.answer || '',
      'FAQ 2 Question': col.faqs[1]?.question || '',
      'FAQ 2 Answer': col.faqs[1]?.answer || '',
      'FAQ 3 Question': col.faqs[2]?.question || '',
      'FAQ 3 Answer': col.faqs[2]?.answer || ''
    };

    // Flatten Course columns dynamically (up to 10 courses)
    for (let cIdx = 0; cIdx < 10; cIdx++) {
      const course = col.coursesOffered[cIdx] || {};
      const k = cIdx + 1;
      row[`Course Name ${k}`] = course.title || '';
      row[`Course Duration ${k}`] = course.duration || '';
      row[`Course Fees ${k}`] = course.fees || '';
      row[`Course Eligibility ${k}`] = course.eligibility || '';
      row[`Course Exams ${k}`] = course.exams || '';
    }

    return row;
  });

  // Export to Excel Workbook
  const worksheet = xlsx.utils.json_to_sheet(excelRows);
  const workbook = xlsx.utils.book_new();
  xlsx.utils.book_append_sheet(workbook, worksheet, 'Colleges Full Data');

  // Auto-fit column widths
  const keys = Object.keys(excelRows[0] || {});
  worksheet['!cols'] = keys.map(key => {
    let maxLen = key.toString().length;
    excelRows.forEach(row => {
      const val = row[key];
      if (val) {
        maxLen = Math.max(maxLen, val.toString().length);
      }
    });
    return { wch: Math.min(maxLen + 2, 40) }; // cap column width to 40 for readability
  });

  const outputFilePath = path.join(__dirname, '../scraped_colleges_report.xlsx');
  xlsx.writeFile(workbook, outputFilePath);

  console.log(`\n🎉 Excel file written successfully to: ${outputFilePath}`);
  console.log('Done!');
}

main();
