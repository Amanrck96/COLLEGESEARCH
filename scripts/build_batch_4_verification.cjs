const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const BASE_DIR = path.join(__dirname, '..');
const PROGRESS_PATH = path.join(BASE_DIR, 'reports', 'verification', 'progress.json');
const COLLEGE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'college-verification.csv');
const COURSE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'course-verification.csv');
const IMAGE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'image-verification.csv');
const SUMMARY_MD = path.join(BASE_DIR, 'reports', 'verification', 'batch-4-summary.md');

function getSha256(filePath) {
  try {
    const fullPath = path.join(BASE_DIR, 'public', filePath.replace(/^\//, ''));
    if (fs.existsSync(fullPath)) {
      const buf = fs.readFileSync(fullPath);
      return crypto.createHash('sha256').update(buf).digest('hex');
    }
  } catch (e) {}
  return 'N/A';
}

function escapeCsv(val) {
  if (val === null || val === undefined) return '';
  const str = String(val);
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    return '"' + str.replace(/"/g, '""') + '"';
  }
  return str;
}

const batch4Colleges = [
  {
    id: 320,
    name: 'FOSTIIMA BUSINESS SCHOOL',
    officialUrl: 'https://www.fostiima.org',
    dateAccessed: '2026-10-31',
    fields: [
      { field: 'website', old: 'https://www.fostiimabusiness.edu.in', verified: 'https://www.fostiima.org', status: 'VERIFIED', notes: 'Replaced placeholder with official portal' },
      { field: 'address', old: 'DWARKA, NEW DELHI', verified: 'Plot No. HAF-1, Sector 9, Institutional Area, Dwarka, New Delhi - 110077', status: 'VERIFIED', notes: 'Full institutional area campus address' },
      { field: 'phone', old: '0123-456789', verified: '+91-76783 91245 / 011-46126000', status: 'VERIFIED', notes: 'Official admission helplines' },
      { field: 'email', old: 'N/A', verified: 'admissions@fostiima.org', status: 'VERIFIED', notes: 'Official admissions inbox' },
      { field: 'affiliation', old: 'N/A', verified: 'Approved by AICTE, Ministry of Education, Govt. of India', status: 'VERIFIED', notes: 'Founded by IIM Ahmedabad alumni' }
    ],
    courses: [
      {
        course: 'Post Graduate Diploma in Management (PGDM)',
        oldDuration: '2 Years',
        verifiedDuration: '2 Years',
        feeType: 'Total Program Fee',
        verifiedFee: '₹9,90,000 Total',
        session: '2024-2026',
        status: 'VERIFIED',
        sourceUrl: 'https://www.fostiima.org',
        notes: '2-year full-time approved PGDM'
      }
    ],
    image: {
      path: '/images/campuses/campus_architecture_9.jpg',
      belongs: 'N',
      status: 'REPRESENTATIVE',
      sourceUrl: 'https://www.fostiima.org',
      notes: 'Clean unbranded representative campus_architecture_9.jpg with overlay badge.'
    }
  },
  {
    id: 327,
    name: 'IILM INSTITUTE FOR HIGHER EDUCATION',
    officialUrl: 'https://iilm.edu/lodhi-road',
    dateAccessed: '2026-10-31',
    fields: [
      { field: 'website', old: 'https://www.iilminstitutefo.edu.in', verified: 'https://iilm.edu/lodhi-road', status: 'VERIFIED', notes: 'Replaced dummy URL with official Lodhi Road portal' },
      { field: 'address', old: 'NEW DELHI', verified: 'Rai School Complex, Institutional Area, Lodhi Road, New Delhi - 110003, India', status: 'VERIFIED', notes: 'Full Lodhi Road institutional campus address' },
      { field: 'phone', old: '0123-456789', verified: '+91-8065905223 / +91-9999252406', status: 'VERIFIED', notes: 'Official admissions telephone' },
      { field: 'email', old: 'N/A', verified: 'pgdm@iilm.edu', status: 'VERIFIED', notes: 'Official PGDM admissions office' },
      { field: 'affiliation', old: 'N/A', verified: 'Approved by AICTE, Accredited by NBA & SAQS', status: 'VERIFIED', notes: 'Accredited management institution' }
    ],
    courses: [
      {
        course: 'Post Graduate Diploma in Management (PGDM)',
        oldDuration: '2 Years',
        verifiedDuration: '2 Years',
        feeType: 'Program Fee',
        verifiedFee: '₹12,50,000 Total',
        session: '2024-2026',
        status: 'VERIFIED',
        sourceUrl: 'https://iilm.edu/lodhi-road',
        notes: '2-year full-time approved PGDM'
      }
    ],
    image: {
      path: '/images/campuses/campus_architecture_8.jpg',
      belongs: 'N',
      status: 'REPRESENTATIVE',
      sourceUrl: 'https://iilm.edu/lodhi-road',
      notes: 'IMAGE LEAK RESOLVED: Removed Borivali Mumbai photo (sailee_college_borivali.jpg) from New Delhi institute; mapped to clean representative campus_architecture_8.jpg with overlay badge.'
    }
  },
  {
    id: 328,
    name: 'SARDAR PATEL COLLEGE OF ADMINISTRATION & MANAGEMENT',
    officialUrl: 'https://www.spec.edu.in',
    dateAccessed: '2026-10-31',
    fields: [
      { field: 'website', old: 'https://www.sardarpatelcol.edu.in', verified: 'https://www.spec.edu.in', status: 'VERIFIED', notes: 'Official SPEC campus portal' },
      { field: 'address', old: 'BAKROL, ANAND', verified: 'Sardar Patel Education Campus, Vidyanagar - Vadtal Road, Bakrol, Anand - 388315, Gujarat', status: 'VERIFIED', notes: 'Full campus address' },
      { field: 'phone', old: '0123-456789', verified: '+91-79848 88427 / +91-96648 53461', status: 'VERIFIED', notes: 'Official college numbers' },
      { field: 'email', old: 'N/A', verified: 'spcam2008@gmail.com / spec_campus@spec.edu.in', status: 'VERIFIED', notes: 'Official departmental inquiry email' },
      { field: 'affiliation', old: 'N/A', verified: 'Gujarat Technological University (GTU) & Approved by AICTE', status: 'VERIFIED', notes: 'GTU affiliated MBA college' }
    ],
    courses: [
      {
        course: 'Master of Business Administration (MBA)',
        oldDuration: '2 Years',
        verifiedDuration: '2 Years',
        feeType: 'FRC Approved Annual Fee',
        verifiedFee: '₹72,000/Year (~₹1,44,000 Total)',
        session: '2024-2026',
        status: 'VERIFIED',
        sourceUrl: 'https://www.spec.edu.in',
        notes: '2-year full-time MBA affiliated to GTU'
      }
    ],
    image: {
      path: '/images/campuses/campus_architecture_5.jpg',
      belongs: 'N',
      status: 'REPRESENTATIVE',
      sourceUrl: 'https://www.spec.edu.in',
      notes: 'Clean unbranded representative campus_architecture_5.jpg with overlay badge.'
    }
  },
  {
    id: 363,
    name: 'R. N. G. PATEL INSTITUTE OF TECHNOLOGY RNGPIT',
    officialUrl: 'https://rngpit.ac.in',
    dateAccessed: '2026-10-31',
    fields: [
      { field: 'website', old: 'https://www.rngpatelinstit.edu.in', verified: 'https://rngpit.ac.in', status: 'VERIFIED', notes: 'Official RNGPIT portal' },
      { field: 'address', old: 'BARDOLI, SURAT', verified: 'Bardoli - Navsari Road, At: Isroli (Tajpore), PO: Afwa, Bardoli, Surat - 394620, Gujarat', status: 'VERIFIED', notes: 'Full Bardoli campus address' },
      { field: 'phone', old: '0123-456789', verified: '+91-8160671202', status: 'VERIFIED', notes: 'Official college phone' },
      { field: 'email', old: 'N/A', verified: 'info@rngpit.ac.in / admissions@rngpit.ac.in', status: 'VERIFIED', notes: 'Official institutional inquiry email' },
      { field: 'affiliation', old: 'N/A', verified: 'Gujarat Technological University (GTU) & Approved by AICTE, NAAC A Grade', status: 'VERIFIED', notes: 'GTU affiliated technical institute' }
    ],
    courses: [
      {
        course: 'Master of Computer Applications (MCA)',
        oldDuration: '2 Years',
        verifiedDuration: '2 Years',
        feeType: 'FRC Approved Annual Fee',
        verifiedFee: '₹68,000/Year (~₹1,36,000 Total)',
        session: '2024-2026',
        status: 'VERIFIED',
        sourceUrl: 'https://rngpit.ac.in/courses',
        notes: '2-year full-time post graduate MCA'
      }
    ],
    image: {
      path: '/images/campuses/campus_architecture_1.jpg',
      belongs: 'N',
      status: 'REPRESENTATIVE',
      sourceUrl: 'https://rngpit.ac.in',
      notes: 'IMAGE LEAK RESOLVED: Removed VNIT Nagpur photo (campus_vnit_nagpur.jpeg) from Gujarat campus; mapped to clean representative campus_architecture_1.jpg with overlay badge.'
    }
  },
  {
    id: 364,
    name: 'SMT. KUSUMBEN KADAKIA INSTITUTE OF COMPUTER APPLICATION',
    officialUrl: 'https://kadakiaeducation.edu.in',
    dateAccessed: '2026-10-31',
    fields: [
      { field: 'website', old: 'https://www.smtkusumbenka.edu.in', verified: 'https://kadakiaeducation.edu.in', status: 'VERIFIED', notes: 'Official Kadakia Education portal' },
      { field: 'address', old: 'ANKLESHWAR, BHARUCH', verified: 'Kadakia Educational Campus, Kadakia Vidya Gram, Hansot Road, Ankleshwar, Dist. Bharuch - 393001, Gujarat', status: 'VERIFIED', notes: 'Full campus address' },
      { field: 'phone', old: '0123-456789', verified: '+91-96625 34664 / +91-96625 34655', status: 'VERIFIED', notes: 'Official admission helplines' },
      { field: 'email', old: 'N/A', verified: 'kadakiacampus@gmail.com', status: 'VERIFIED', notes: 'Official institutional inbox' },
      { field: 'affiliation', old: 'N/A', verified: 'Gujarat Technological University (GTU) & Approved by AICTE', status: 'VERIFIED', notes: 'GTU affiliated' }
    ],
    courses: [
      {
        course: 'Master of Computer Applications (MCA)',
        oldDuration: '2 Years',
        verifiedDuration: '2 Years',
        feeType: 'Annual Academic Fee',
        verifiedFee: '₹65,000/Year (~₹1,30,000 Total)',
        session: '2024-2026',
        status: 'VERIFIED',
        sourceUrl: 'https://kadakiaeducation.edu.in',
        notes: '2-year full-time MCA program'
      }
    ],
    image: {
      path: '/images/campuses/campus_architecture_2.jpg',
      belongs: 'N',
      status: 'REPRESENTATIVE',
      sourceUrl: 'https://kadakiaeducation.edu.in',
      notes: 'BROKEN 403 URL RESOLVED: Removed hotlinked Collegedunia URL (image-static.collegedunia.com/...); mapped to clean representative campus_architecture_2.jpg with overlay badge.'
    }
  },
  {
    id: 382,
    name: 'PARAM INSTITUTE OF MANAGEMENT & RESEARCH',
    officialUrl: 'https://paramimr.com',
    dateAccessed: '2026-10-31',
    fields: [
      { field: 'website', old: 'https://www.paraminstitute.edu.in', verified: 'https://paramimr.com', status: 'VERIFIED', notes: 'Official PARAM IMR portal' },
      { field: 'address', old: 'LAKHABAVAL, JAMNAGAR', verified: 'Adi Shankaracharya Shikshan Vikas Sankul, Okha State Highway, Lakhabaval Road, Jamnagar - 361006, Gujarat', status: 'VERIFIED', notes: 'Full highway campus address' },
      { field: 'phone', old: '0123-456789', verified: '+91-9106771315 / +91-9909033417', status: 'VERIFIED', notes: 'Official institute desk' },
      { field: 'email', old: 'N/A', verified: 'paramimr@gmail.com', status: 'VERIFIED', notes: 'Official institutional email' },
      { field: 'affiliation', old: 'N/A', verified: 'Gujarat Technological University (GTU) & Approved by AICTE, GTU Code 795', status: 'VERIFIED', notes: 'GTU affiliated MBA institute' }
    ],
    courses: [
      {
        course: 'Master of Business Administration (MBA)',
        oldDuration: '2 Years',
        verifiedDuration: '2 Years',
        feeType: 'Annual Academic Fee',
        verifiedFee: '₹60,000/Year (~₹1,20,000 Total)',
        session: '2024-2026',
        status: 'VERIFIED',
        sourceUrl: 'https://paramimr.com',
        notes: '2-year full-time MBA in Marketing, Finance, HR'
      }
    ],
    image: {
      path: '/images/campuses/campus_architecture_3.jpg',
      belongs: 'N',
      status: 'REPRESENTATIVE',
      sourceUrl: 'https://paramimr.com',
      notes: 'BROKEN URL RESOLVED: Removed hotlinked third-party aggregator URL (collegebatch.com/static/...); mapped to clean representative campus_architecture_3.jpg with overlay badge.'
    }
  },
  {
    id: 383,
    name: 'METAS ADVENTIST COLLEGE',
    officialUrl: 'https://www.metasofsda.in',
    dateAccessed: '2026-10-31',
    fields: [
      { field: 'website', old: 'https://www.metasadventist.edu.in', verified: 'https://www.metasofsda.in', status: 'VERIFIED', notes: 'Official Metas of SDA portal' },
      { field: 'address', old: 'ATHWALINES, SURAT', verified: 'Metas of Seventh-Day Adventists, P.O. Box No. 24, Athwalines, Surat - 395001, Gujarat, India', status: 'VERIFIED', notes: 'Full postal address' },
      { field: 'phone', old: '0123-456789', verified: '0261-7160215 / +91-9512644385', status: 'VERIFIED', notes: 'Official registrar & admission lines' },
      { field: 'email', old: 'N/A', verified: 'registrarsurat@metasofsda.in / principalcollege@metasofsda.in', status: 'VERIFIED', notes: 'Official college leadership emails' },
      { field: 'affiliation', old: 'N/A', verified: 'Veer Narmad South Gujarat University (VNSGU) & Approved by AICTE', status: 'VERIFIED', notes: 'SDA educational organization' }
    ],
    courses: [
      {
        course: 'Master of Business Administration (MBA)',
        oldDuration: '2 Years',
        verifiedDuration: '2 Years',
        feeType: 'Approved Tuition Fee',
        verifiedFee: '₹85,000/Year (~₹1,70,000 Total)',
        session: '2024-2026',
        status: 'VERIFIED',
        sourceUrl: 'https://www.metasofsda.in',
        notes: '2-year full-time MBA affiliated to VNSGU'
      }
    ],
    image: {
      path: '/images/campuses/campus_architecture_4.jpg',
      belongs: 'N',
      status: 'REPRESENTATIVE',
      sourceUrl: 'https://www.metasofsda.in',
      notes: 'BROKEN URL RESOLVED: Removed hotlinked third-party aggregator URL (collegebatch.com/static/...); mapped to clean representative campus_architecture_4.jpg with overlay badge.'
    }
  },
  {
    id: 385,
    name: 'R. H. PATEL INSTITUTE OF MANAGEMENT',
    officialUrl: 'https://rhpim.org',
    dateAccessed: '2026-10-31',
    fields: [
      { field: 'website', old: 'https://www.rhpatelinstitu.edu.in', verified: 'https://rhpim.org', status: 'VERIFIED', notes: 'Official RHPIM portal' },
      { field: 'address', old: 'GOBLAJ, KHEDA', verified: 'Near Toll Plaza, Goblaj, Taluka Kheda, District Kheda - 387540, Gujarat, India', status: 'VERIFIED', notes: 'Full Goblaj campus address' },
      { field: 'phone', old: '0123-456789', verified: '+91-9099063467 / 02694-277700', status: 'VERIFIED', notes: 'Official college phone' },
      { field: 'email', old: 'N/A', verified: 'rhpim_managment@yahoo.com', status: 'VERIFIED', notes: 'Official management email' },
      { field: 'affiliation', old: 'N/A', verified: 'Gujarat Technological University (GTU) & Approved by AICTE, GTU Code 750', status: 'VERIFIED', notes: 'GTU affiliated MBA institute' }
    ],
    courses: [
      {
        course: 'Master of Business Administration (MBA)',
        oldDuration: '2 Years',
        verifiedDuration: '2 Years',
        feeType: 'Annual Academic Fee',
        verifiedFee: '₹55,000/Year (~₹1,10,000 Total)',
        session: '2024-2026',
        status: 'VERIFIED',
        sourceUrl: 'https://rhpim.org',
        notes: '2-year full-time MBA'
      }
    ],
    image: {
      path: '/images/campuses/campus_architecture_3.jpg',
      belongs: 'N',
      status: 'REPRESENTATIVE',
      sourceUrl: 'https://rhpim.org',
      notes: 'Clean unbranded representative campus_architecture_3.jpg with overlay badge.'
    }
  },
  {
    id: 387,
    name: 'NARAYANA BUSINESS SCHOOL',
    officialUrl: 'https://www.nbs.edu.in',
    dateAccessed: '2026-10-31',
    fields: [
      { field: 'website', old: 'https://www.narayanabusine.edu.in', verified: 'https://www.nbs.edu.in', status: 'VERIFIED', notes: 'Official NBS Ahmedabad portal' },
      { field: 'address', old: 'SANAND, AHMEDABAD', verified: 'Sarkhej - Bavla Road, Near Sanathal Circle, Sanathal, Ahmedabad - 382210, Gujarat, India', status: 'VERIFIED', notes: 'Full Sanathal campus address' },
      { field: 'phone', old: '0123-456789', verified: '+91 844 8444 981', status: 'VERIFIED', notes: 'Official admissions telephone' },
      { field: 'email', old: 'N/A', verified: 'info@nbs.edu.in', status: 'VERIFIED', notes: 'Official admissions office' },
      { field: 'affiliation', old: 'N/A', verified: 'Approved by AICTE & Accredited by NBA', status: 'VERIFIED', notes: 'NBA accredited business school' }
    ],
    courses: [
      {
        course: 'Post Graduate Diploma in Management (PGDM)',
        oldDuration: '2 Years',
        verifiedDuration: '2 Years',
        feeType: 'Total Program Fee',
        verifiedFee: '₹7,95,000 Total',
        session: '2024-2026',
        status: 'VERIFIED',
        sourceUrl: 'https://www.nbs.edu.in',
        notes: '2-year full-time approved PGDM'
      }
    ],
    image: {
      path: '/images/campuses/campus_architecture_6.jpg',
      belongs: 'N',
      status: 'REPRESENTATIVE',
      sourceUrl: 'https://www.nbs.edu.in',
      notes: 'BROKEN URL RESOLVED: Removed fragile aggregator hotlink (assets.kollegeapply.com/...); mapped to clean representative campus_architecture_6.jpg with overlay badge.'
    }
  },
  {
    id: 388,
    name: 'GYANMANJARI INSTITUTE OF TECHNOLOGY',
    officialUrl: 'https://gmit.edu.in',
    dateAccessed: '2026-10-31',
    fields: [
      { field: 'website', old: 'https://www.gyanmanjariin.edu.in', verified: 'https://gmit.edu.in', status: 'VERIFIED', notes: 'Official GMIT / GMIU portal' },
      { field: 'address', old: 'SIDSAR ROAD, BHAVNAGAR', verified: 'Survey No. 30, Sidsar Road, Near Iscon Eleven, Bhavnagar - 364060, Gujarat, India', status: 'VERIFIED', notes: 'Full Sidsar road campus address' },
      { field: 'phone', old: '0123-456789', verified: '+91 90999 51160 / 0278-2567811', status: 'VERIFIED', notes: 'Official institute desk' },
      { field: 'email', old: 'N/A', verified: 'info@gmit.edu.in', status: 'VERIFIED', notes: 'Official institutional inbox' },
      { field: 'affiliation', old: 'N/A', verified: 'Gyanmanjari Innovative University / GTU & Approved by AICTE', status: 'VERIFIED', notes: 'Private University constituent' }
    ],
    courses: [
      {
        course: 'Master of Computer Applications (MCA)',
        oldDuration: '2 Years',
        verifiedDuration: '2 Years',
        feeType: 'Annual Academic Fee',
        verifiedFee: '₹71,000/Year (~₹1,42,000 Total)',
        session: '2024-2026',
        status: 'VERIFIED',
        sourceUrl: 'https://gmit.edu.in',
        notes: '2-year full-time MCA program'
      }
    ],
    image: {
      path: '/images/campuses/campus_architecture_7.jpg',
      belongs: 'N',
      status: 'REPRESENTATIVE',
      sourceUrl: 'https://gmit.edu.in',
      notes: 'BROKEN URL RESOLVED: Removed fragile aggregator hotlink (media.collegedekho.com/...); mapped to clean representative campus_architecture_7.jpg with overlay badge.'
    }
  }
];

// Append to CSVs
let collegeCsvRows = [];
let courseCsvRows = [];
let imageCsvRows = [];

batch4Colleges.forEach(col => {
  col.fields.forEach(f => {
    collegeCsvRows.push([
      escapeCsv(col.id),
      escapeCsv(col.name),
      escapeCsv(f.field),
      escapeCsv(f.old),
      escapeCsv(f.verified),
      escapeCsv(f.status),
      escapeCsv(col.officialUrl),
      escapeCsv(col.dateAccessed),
      escapeCsv(f.notes)
    ].join(','));
  });

  col.courses.forEach(c => {
    courseCsvRows.push([
      escapeCsv(col.id),
      escapeCsv(col.name),
      escapeCsv(c.course),
      escapeCsv(c.oldDuration),
      escapeCsv(c.verifiedDuration),
      escapeCsv(c.feeType),
      escapeCsv(c.verifiedFee),
      escapeCsv(c.session),
      escapeCsv(c.status),
      escapeCsv(c.sourceUrl),
      escapeCsv(c.notes)
    ].join(','));
  });

  const sha = getSha256(col.image.path);
  imageCsvRows.push([
    escapeCsv(col.id),
    escapeCsv(col.name),
    escapeCsv(col.image.path),
    escapeCsv(sha),
    'Y',
    escapeCsv(col.image.belongs),
    escapeCsv(col.image.status),
    escapeCsv(col.image.sourceUrl),
    escapeCsv(col.image.notes)
  ].join(','));
});

fs.appendFileSync(COLLEGE_CSV, '\n' + collegeCsvRows.join('\n'), 'utf8');
fs.appendFileSync(COURSE_CSV, '\n' + courseCsvRows.join('\n'), 'utf8');
fs.appendFileSync(IMAGE_CSV, '\n' + imageCsvRows.join('\n'), 'utf8');

// Update progress.json
const progress = JSON.parse(fs.readFileSync(PROGRESS_PATH, 'utf8'));
const allCompletedIds = Array.from(new Set([...(progress.completed_ids || []), ...batch4Colleges.map(c => c.id)]));

progress.completed_count = allCompletedIds.length;
progress.current_batch = 4;
progress.last_updated = new Date().toISOString();
progress.completed_ids = allCompletedIds;

fs.writeFileSync(PROGRESS_PATH, JSON.stringify(progress, null, 2), 'utf8');

console.log('Batch 4 verification CSVs appended and progress.json updated (Total verified: ' + allCompletedIds.length + ').');

