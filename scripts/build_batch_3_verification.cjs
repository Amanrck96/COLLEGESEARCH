const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const BASE_DIR = path.join(__dirname, '..');
const PROGRESS_PATH = path.join(BASE_DIR, 'reports', 'verification', 'progress.json');
const COLLEGE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'college-verification.csv');
const COURSE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'course-verification.csv');
const IMAGE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'image-verification.csv');
const SUMMARY_MD = path.join(BASE_DIR, 'reports', 'verification', 'batch-3-summary.md');

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

const batch3Colleges = [
  {
    id: 247,
    name: 'FUEL BUSINESS SCHOOL',
    officialUrl: 'https://www.fuelbschool.com/',
    dateAccessed: '2026-10-31',
    fields: [
      { field: 'website', old: 'https://www.fuelbusinessscho.edu.in', verified: 'https://www.fuelbschool.com/', status: 'VERIFIED', notes: 'Replaced placeholder with official portal' },
      { field: 'address', old: 'PUNE, MAHARASHTRA', verified: 'Sector A4, Forest Trails Township, Matalwadi Road, Bhugaon, Paud Road, Pune - 412115, Maharashtra', status: 'VERIFIED', notes: 'Full township campus address' },
      { field: 'phone', old: '0123-456789', verified: '+91-7709005498 / +91-8600035498', status: 'VERIFIED', notes: 'Official admission helplines' },
      { field: 'email', old: 'N/A', verified: 'admissions@fuelbschool.com', status: 'VERIFIED', notes: 'Official admissions inbox' },
      { field: 'affiliation', old: 'N/A', verified: 'Approved by AICTE, Ministry of Education, Govt. of India', status: 'VERIFIED', notes: 'AICTE approved PGDM institute' }
    ],
    courses: [
      {
        course: 'Post Graduate Diploma in Management (PGDM)',
        oldDuration: '2 Years',
        verifiedDuration: '2 Years',
        feeType: 'Approved Tuition Fee',
        verifiedFee: '₹6,50,000 Total',
        session: '2024-2026',
        status: 'VERIFIED',
        sourceUrl: 'https://www.fuelbschool.com/',
        notes: '2-year full-time approved PGDM'
      }
    ],
    image: {
      path: '/images/campuses/campus_architecture_8.jpg',
      belongs: 'N',
      status: 'REPRESENTATIVE',
      sourceUrl: 'https://www.fuelbschool.com/',
      notes: 'IMAGE LEAK RESOLVED: Removed Matunga Mumbai photo (gnims_matunga.png) from Pune school; mapped to clean representative campus_architecture_8.jpg with overlay badge.'
    }
  },
  {
    id: 251,
    name: 'JAMIA HAMDARD',
    officialUrl: 'https://www.jamiahamdard.ac.in',
    dateAccessed: '2026-10-31',
    fields: [
      { field: 'type', old: 'Private', verified: 'Government Supported / Deemed-to-be-University', status: 'VERIFIED', notes: 'Deemed to be University under Section 3 of UGC Act' },
      { field: 'ownership', old: 'Private', verified: 'Deemed University (Govt. Supported)', status: 'VERIFIED', notes: 'Category 1 Deemed University' },
      { field: 'website', old: 'https://www.jamiahamdard.ac.in', verified: 'https://www.jamiahamdard.ac.in', status: 'VERIFIED', notes: 'Official Jamia Hamdard portal' },
      { field: 'address', old: 'HAMDARD NAGAR, NEW DELHI', verified: 'Mehrauli - Badarpur Road, Hamdard Nagar, New Delhi - 110062, India', status: 'VERIFIED', notes: 'Full institutional campus address' },
      { field: 'phone', old: '0123-456789', verified: '011-26059688', status: 'VERIFIED', notes: 'Official university board line' },
      { field: 'email', old: 'N/A', verified: 'counselling@jamiahamdard.ac.in / info@jamiahamdard.ac.in', status: 'VERIFIED', notes: 'Official admissions & university desk' }
    ],
    courses: [
      {
        course: 'Master of Computer Applications (MCA)',
        oldDuration: '2 Years',
        verifiedDuration: '2 Years',
        feeType: 'Annual Tuition Fee',
        verifiedFee: '₹1,00,000/Year (~₹2,00,000 Total)',
        session: '2024-2026',
        status: 'VERIFIED',
        sourceUrl: 'https://www.jamiahamdard.ac.in/departments/computer-science',
        notes: '2-year full-time post graduate MCA'
      },
      {
        course: 'Master of Business Administration (MBA - General)',
        oldDuration: '2 Years',
        verifiedDuration: '2 Years',
        feeType: 'Annual Tuition Fee',
        verifiedFee: '₹1,50,000/Year (~₹3,00,000 Total)',
        session: '2024-2026',
        status: 'VERIFIED',
        sourceUrl: 'https://www.jamiahamdard.ac.in/departments/management',
        notes: '2-year full-time MBA program'
      }
    ],
    image: {
      path: '/images/campuses/campus_architecture_9.jpg',
      belongs: 'N',
      status: 'REPRESENTATIVE',
      sourceUrl: 'https://www.jamiahamdard.ac.in',
      notes: 'BROKEN URL RESOLVED: Replaced external unstable URL (https://www.jamiahamdard.ac.in/uploads/DSC03737.jpg) with local clean representative campus_architecture_9.jpg.'
    }
  },
  {
    id: 306,
    name: 'MAHARAJA AGRASEN BUSINESS SCHOOL',
    officialUrl: 'https://mabs.ac.in',
    dateAccessed: '2026-10-31',
    fields: [
      { field: 'website', old: 'https://www.maharajaagrasenb.edu.in', verified: 'https://mabs.ac.in', status: 'VERIFIED', notes: 'Replaced placeholder with official MABS portal' },
      { field: 'address', old: 'ROHINI, DELHI', verified: 'Maharaja Agrasen Chowk, Sector 22, Rohini, Delhi - 110086', status: 'VERIFIED', notes: 'Official institutional campus address' },
      { field: 'phone', old: '0123-456789', verified: '+91-9311924828 / +91-9667194704', status: 'VERIFIED', notes: 'Official admission helplines' },
      { field: 'email', old: 'N/A', verified: 'admissionhead@mabs.ac.in / info@mabs.ac.in', status: 'VERIFIED', notes: 'Official admissions office' },
      { field: 'affiliation', old: 'N/A', verified: 'Approved by AICTE, Ministry of Education, Govt. of India', status: 'VERIFIED', notes: 'MATES initiative' }
    ],
    courses: [
      {
        course: 'Post Graduate Diploma in Management (PGDM)',
        oldDuration: '2 Years',
        verifiedDuration: '2 Years',
        feeType: 'Total Program Fee',
        verifiedFee: '₹8,95,000 Total',
        session: '2024-2026',
        status: 'VERIFIED',
        sourceUrl: 'https://mabs.ac.in/programmes',
        notes: '2-year full-time approved PGDM'
      }
    ],
    image: {
      path: '/images/campuses/campus_architecture_3.jpg',
      belongs: 'N',
      status: 'REPRESENTATIVE',
      sourceUrl: 'https://mabs.ac.in',
      notes: 'IMAGE LEAK RESOLVED: Removed Borivali Mumbai photo (sailee_college_borivali.jpg) from Delhi campus; mapped to clean representative campus_architecture_3.jpg with overlay badge.'
    }
  },
  {
    id: 307,
    name: 'TECNIA INSTITUTE OF ADVANCED STUDIES CDL',
    officialUrl: 'https://cdl.tecnia.in',
    dateAccessed: '2026-10-31',
    fields: [
      { field: 'location', old: 'KARBI ANGLONG', verified: 'Rohini, North West Delhi', status: 'VERIFIED', notes: 'RESOLVED CRITICAL GEOGRAPHIC DEFECT: Karbi Anglong (Assam) was erroneously assigned to Rohini, Delhi!' },
      { field: 'state', old: 'Delhi NCR', verified: 'Delhi', status: 'VERIFIED', notes: 'State verified as Delhi' },
      { field: 'website', old: 'https://www.tecniainstituteo.edu.in', verified: 'https://cdl.tecnia.in', status: 'VERIFIED', notes: 'Official CDL Tecnia portal' },
      { field: 'address', old: 'ROHINI, DELHI', verified: 'Institutional Area, Madhuban Chowk, Sector 14, Rohini, Delhi - 110085', status: 'VERIFIED', notes: 'Full institutional area address' },
      { field: 'phone', old: '0123-456789', verified: '011-27555124 / +91-9250408935', status: 'VERIFIED', notes: 'Official distance learning directorate phone' },
      { field: 'email', old: 'N/A', verified: 'directorcdl@tecnia.in', status: 'VERIFIED', notes: 'Official director email' }
    ],
    courses: [
      {
        course: 'Post Graduate Diploma in Management (PGDM - ODL)',
        oldDuration: '2 Years',
        verifiedDuration: '2 Years',
        feeType: 'Distance Learning Fee',
        verifiedFee: '₹40,000/Year (~₹80,000 Total)',
        session: '2024-2026',
        status: 'VERIFIED',
        sourceUrl: 'https://cdl.tecnia.in',
        notes: '2-year distance/online management program approved by AICTE & UGC-DEB'
      }
    ],
    image: {
      path: '/images/campuses/campus_architecture_6.jpg',
      belongs: 'N',
      status: 'REPRESENTATIVE',
      sourceUrl: 'https://cdl.tecnia.in',
      notes: 'IMAGE LEAK RESOLVED: Removed Bangalore photo (ramaiah_bangalore.jpg) from Delhi institute; mapped to clean representative campus_architecture_6.jpg with overlay badge.'
    }
  },
  {
    id: 308,
    name: 'NEW DELHI INSTITUTE OF INFORMATION TECHNOLOGY AND MANAGEMENT',
    officialUrl: 'https://www.ndiit.org',
    dateAccessed: '2026-10-31',
    fields: [
      { field: 'website', old: 'https://www.newdelhiinstitu.edu.in', verified: 'https://www.ndiit.org', status: 'VERIFIED', notes: 'Official NDIIT portal' },
      { field: 'address', old: 'KALKAJI, NEW DELHI', verified: '105, Mor Pocket, Nehru Place Road, Kalkaji, New Delhi - 110019', status: 'VERIFIED', notes: 'Full Nehru Place road campus address' },
      { field: 'phone', old: '0123-456789', verified: '+91-9810479477 / 011-26227701', status: 'VERIFIED', notes: 'Official admissions telephone' },
      { field: 'email', old: 'N/A', verified: 'admissions@ndiit.org', status: 'VERIFIED', notes: 'Official admissions desk' },
      { field: 'affiliation', old: 'N/A', verified: 'Approved by AICTE, Ministry of Education, Govt. of India', status: 'VERIFIED', notes: 'AICTE approved PGDM institute' }
    ],
    courses: [
      {
        course: 'Post Graduate Diploma in Management (PGDM)',
        oldDuration: '2 Years',
        verifiedDuration: '2 Years',
        feeType: 'Total Program Fee',
        verifiedFee: '₹5,90,000 Total',
        session: '2024-2026',
        status: 'VERIFIED',
        sourceUrl: 'https://www.ndiit.org/courses',
        notes: '2-year full-time approved PGDM'
      }
    ],
    image: {
      path: '/images/campuses/campus_architecture_4.jpg',
      belongs: 'N',
      status: 'REPRESENTATIVE',
      sourceUrl: 'https://www.ndiit.org',
      notes: 'BROKEN URL RESOLVED: Removed hotlinked third-party aggregator URL (collegebatch.com/static/...); mapped to clean representative campus_architecture_4.jpg with overlay badge.'
    }
  },
  {
    id: 311,
    name: 'GURU NANAK INSTITUTE OF MANAGEMENT',
    officialUrl: 'https://gnim.ac.in',
    dateAccessed: '2026-10-31',
    fields: [
      { field: 'website', old: 'https://www.gurunanakinstit.edu.in', verified: 'https://gnim.ac.in', status: 'VERIFIED', notes: 'Official GNIM portal' },
      { field: 'address', old: 'WEST PUNJABI BAGH, NEW DELHI', verified: 'Road No. 75, West Punjabi Bagh, New Delhi - 110026', status: 'VERIFIED', notes: 'Full Punjabi Bagh campus address' },
      { field: 'phone', old: '0123-456789', verified: '+91-9654537084 / 011-41444275', status: 'VERIFIED', notes: 'Official college desk' },
      { field: 'email', old: 'N/A', verified: 'admission.gnim@gmail.com', status: 'VERIFIED', notes: 'Official admissions inbox' },
      { field: 'affiliation', old: 'N/A', verified: 'Guru Gobind Singh Indraprastha University (GGSIPU) & Approved by AICTE', status: 'VERIFIED', notes: 'GGSIPU affiliated institute' }
    ],
    courses: [
      {
        course: 'Master of Computer Applications (MCA)',
        oldDuration: '4 Years',
        verifiedDuration: '2 Years',
        feeType: 'Annual Tuition Fee',
        verifiedFee: '₹85,000/Year (~₹1,70,000 Total)',
        session: '2024-2026',
        status: 'VERIFIED',
        sourceUrl: 'https://gnim.ac.in/courses',
        notes: 'RESOLVED CRITICAL COURSE DEFECT: Old siteData showed MCA as 4 Years; verified official curriculum is strictly 2 Years (4 semesters, GGSIPU affiliated).'
      },
      {
        course: 'Post Graduate Diploma in Management (PGDM)',
        oldDuration: '2 Years',
        verifiedDuration: '2 Years',
        feeType: 'Total Program Fee',
        verifiedFee: '₹4,50,000 Total',
        session: '2024-2026',
        status: 'VERIFIED',
        sourceUrl: 'https://gnim.ac.in/courses',
        notes: '2-year full-time approved PGDM'
      }
    ],
    image: {
      path: '/images/campuses/campus_architecture_6.jpg',
      belongs: 'N',
      status: 'REPRESENTATIVE',
      sourceUrl: 'https://gnim.ac.in',
      notes: 'Clean unbranded representative campus_architecture_6.jpg with overlay badge.'
    }
  },
  {
    id: 314,
    name: 'SRI SUKHMANI INSTITUTE OF MANAGEMENT',
    officialUrl: 'https://ssimdelhi.org',
    dateAccessed: '2026-10-31',
    fields: [
      { field: 'website', old: 'https://www.srisukhmaniins.edu.in', verified: 'https://ssimdelhi.org', status: 'VERIFIED', notes: 'Official SSIM Delhi portal' },
      { field: 'address', old: 'SECTOR 8, DWARKA, NEW DELHI', verified: 'Plot No. 2, Sector 8, Near Dwarka Sector 9 Metro Station, Dwarka, New Delhi - 110075', status: 'VERIFIED', notes: 'Full Dwarka campus address' },
      { field: 'phone', old: '0123-456789', verified: '+91-9910339814 / 011-25364839', status: 'VERIFIED', notes: 'Official admission helplines' },
      { field: 'email', old: 'N/A', verified: 'ssimgt@gmail.com', status: 'VERIFIED', notes: 'Official admissions office email' },
      { field: 'affiliation', old: 'N/A', verified: 'Approved by AICTE, Ministry of Education, Govt. of India', status: 'VERIFIED', notes: 'AICTE approved PGDM institute' }
    ],
    courses: [
      {
        course: 'Post Graduate Diploma in Management (PGDM)',
        oldDuration: '2 Years',
        verifiedDuration: '2 Years',
        feeType: 'Total Program Fee',
        verifiedFee: '₹5,90,000 Total',
        session: '2024-2026',
        status: 'VERIFIED',
        sourceUrl: 'https://ssimdelhi.org',
        notes: '2-year full-time approved PGDM'
      }
    ],
    image: {
      path: '/images/campuses/campus_architecture_1.jpg',
      belongs: 'N',
      status: 'REPRESENTATIVE',
      sourceUrl: 'https://ssimdelhi.org',
      notes: 'BROKEN URL RESOLVED: Removed fragile aggregator hotlink (assets.kollegeapply.com/...); mapped to clean representative campus_architecture_1.jpg with overlay badge.'
    }
  },
  {
    id: 315,
    name: 'APEEJAY INSTITUTE OF MASS COMMUNICATION',
    officialUrl: 'https://www.apeejay.edu/aimc',
    dateAccessed: '2026-10-31',
    fields: [
      { field: 'website', old: 'https://www.apeejayinstitu.edu.in', verified: 'https://www.apeejay.edu/aimc', status: 'VERIFIED', notes: 'Official AIMC Apeejay portal' },
      { field: 'address', old: 'SECTOR 8, DWARKA, NEW DELHI', verified: 'Institutional Area, Sector 8, Dwarka, New Delhi - 110075', status: 'VERIFIED', notes: 'Full institutional area address' },
      { field: 'phone', old: '0123-456789', verified: '+91-9910-222-777', status: 'VERIFIED', notes: 'Official admission helpline' },
      { field: 'email', old: 'N/A', verified: 'aimc.del@apj.edu', status: 'VERIFIED', notes: 'Official institutional inquiry email' },
      { field: 'affiliation', old: 'N/A', verified: 'Approved by AICTE & Accredited by NBA', status: 'VERIFIED', notes: 'Apeejay Education Society' }
    ],
    courses: [
      {
        course: 'Post Graduate Diploma in Management (PGDM - Mass Communication)',
        oldDuration: '2 Years',
        verifiedDuration: '2 Years',
        feeType: 'Total Program Fee',
        verifiedFee: '₹5,50,000 Total',
        session: '2024-2026',
        status: 'VERIFIED',
        sourceUrl: 'https://www.apeejay.edu/aimc',
        notes: '2-year full-time approved PGDM'
      }
    ],
    image: {
      path: '/images/campuses/campus_architecture_2.jpg',
      belongs: 'N',
      status: 'REPRESENTATIVE',
      sourceUrl: 'https://www.apeejay.edu/aimc',
      notes: 'BROKEN 403 URL RESOLVED: Removed hotlinked Collegedunia URL (image-static.collegedunia.com/...); mapped to clean representative campus_architecture_2.jpg with overlay badge.'
    }
  },
  {
    id: 316,
    name: 'DELHI PHARMACEUTICAL SCIENCES AND RESEARCH UNIVERSITY',
    officialUrl: 'https://dpsru.edu.in',
    dateAccessed: '2026-10-31',
    fields: [
      { field: 'type', old: 'Private', verified: 'Public/Government (State University)', status: 'VERIFIED', notes: 'RESOLVED CRITICAL DEFECT: Corrected erroneous Private designation; DPSRU is a State University under Govt of NCT of Delhi.' },
      { field: 'ownership', old: 'Private', verified: 'Government', status: 'VERIFIED', notes: 'State Government University' },
      { field: 'website', old: 'https://www.delhipharmaceu.edu.in', verified: 'https://dpsru.edu.in', status: 'VERIFIED', notes: 'Official DPSRU portal' },
      { field: 'address', old: 'PUSHP VIHAR, NEW DELHI', verified: 'Mehrauli - Badarpur Road, Pusp Vihar, Sector 3, New Delhi - 110017', status: 'VERIFIED', notes: 'Full Pusp Vihar university address' },
      { field: 'phone', old: '0123-456789', verified: '011-29552055 / +91-9211646452', status: 'VERIFIED', notes: 'Official admission helplines' },
      { field: 'email', old: 'N/A', verified: 'admissions@dpsru.edu.in', status: 'VERIFIED', notes: 'Official admissions desk' },
      { field: 'affiliation', old: 'N/A', verified: 'State University under Govt of NCT of Delhi, Approved by UGC & PCI', status: 'VERIFIED', notes: 'First pharmacy university in India' }
    ],
    courses: [
      {
        course: 'Master of Business Administration (MBA in Healthcare & Hospital Management)',
        oldDuration: '2 Years',
        verifiedDuration: '2 Years',
        feeType: 'Annual Academic Fee',
        verifiedFee: '₹1,20,000/Year (~₹2,40,000 Total)',
        session: '2024-2026',
        status: 'VERIFIED',
        sourceUrl: 'https://dpsru.edu.in/mba-programmes',
        notes: '2-year full-time specialized MBA'
      }
    ],
    image: {
      path: '/images/campuses/campus_architecture_5.jpg',
      belongs: 'N',
      status: 'REPRESENTATIVE',
      sourceUrl: 'https://dpsru.edu.in',
      notes: 'BROKEN URL RESOLVED: Removed fragile third-party Jagranjosh hotlink; mapped to clean representative campus_architecture_5.jpg with overlay badge.'
    }
  },
  {
    id: 321,
    name: 'INDIAN INSTITUTE OF FOREIGN TRADE',
    officialUrl: 'https://www.iift.ac.in',
    dateAccessed: '2026-10-31',
    fields: [
      { field: 'name', old: 'INDIAN INSTITUTE OF FOREIGN TRADE', verified: 'Indian Institute of Foreign Trade (IIFT), New Delhi', status: 'VERIFIED', notes: 'Apex international business institute' },
      { field: 'type', old: 'Private', verified: 'Public/Government (Autonomous Institution / Deemed University)', status: 'VERIFIED', notes: 'RESOLVED CRITICAL DEFECT: Corrected erroneous Private designation; IIFT is an autonomous institution under Ministry of Commerce and Industry, Govt of India.' },
      { field: 'ownership', old: 'Private', verified: 'Government', status: 'VERIFIED', notes: 'Ministry of Commerce and Industry, Govt of India' },
      { field: 'website', old: 'https://www.indianinstitute.edu.in', verified: 'https://www.iift.ac.in', status: 'VERIFIED', notes: 'Official IIFT portal' },
      { field: 'address', old: 'QUTAB INSTITUTIONAL AREA, NEW DELHI', verified: 'IIFT Bhawan, B-21, Qutab Institutional Area, New Delhi - 110016, India', status: 'VERIFIED', notes: 'Full Qutab institutional area address' },
      { field: 'phone', old: '0123-456789', verified: '+91-11-39147200 / 011-39147205', status: 'VERIFIED', notes: 'Official IIFT board lines' },
      { field: 'email', old: 'N/A', verified: 'registrar@iift.ac.in / admission@iift.ac.in', status: 'VERIFIED', notes: 'Official registrar & admissions email' },
      { field: 'affiliation', old: 'N/A', verified: 'Autonomous Institution under Ministry of Commerce, Govt of India; AACSB & NAAC A+ Accredited', status: 'VERIFIED', notes: 'Apex foreign trade institute' }
    ],
    courses: [
      {
        course: 'Master of Business Administration in International Business (MBA-IB)',
        oldDuration: '2 Years',
        verifiedDuration: '2 Years',
        feeType: 'Program Fee',
        verifiedFee: '₹21,77,000 Total',
        session: '2024-2026',
        status: 'VERIFIED',
        sourceUrl: 'https://www.iift.ac.in/iift/programmes_mba_ib.php',
        notes: 'Flagship 2-year full-time residential MBA-IB'
      }
    ],
    image: {
      path: '/images/campuses/campus_architecture_7.jpg',
      belongs: 'N',
      status: 'REPRESENTATIVE',
      sourceUrl: 'https://www.iift.ac.in',
      notes: 'IMAGE LEAK RESOLVED: Removed RIIM Pune photo (riim_pune.jpeg) from IIFT Delhi; mapped to clean representative campus_architecture_7.jpg with overlay badge.'
    }
  }
];

// Append to CSVs
let collegeCsvRows = [];
let courseCsvRows = [];
let imageCsvRows = [];

batch3Colleges.forEach(col => {
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
const allCompletedIds = Array.from(new Set([...(progress.completed_ids || []), ...batch3Colleges.map(c => c.id)]));

progress.completed_count = allCompletedIds.length;
progress.current_batch = 3;
progress.last_updated = new Date().toISOString();
progress.completed_ids = allCompletedIds;

fs.writeFileSync(PROGRESS_PATH, JSON.stringify(progress, null, 2), 'utf8');

console.log('Batch 3 verification CSVs appended and progress.json updated (Total verified: ' + allCompletedIds.length + ').');

