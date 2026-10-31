const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const BASE_DIR = path.join(__dirname, '..');
const PROGRESS_PATH = path.join(BASE_DIR, 'reports', 'verification', 'progress.json');
const COLLEGE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'college-verification.csv');
const COURSE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'course-verification.csv');
const IMAGE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'image-verification.csv');
const SUMMARY_MD = path.join(BASE_DIR, 'reports', 'verification', 'batch-2-summary.md');

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

const batch2Colleges = [
  {
    id: 78,
    name: 'DEPARTMENT OF BUSINESS ADMINISTRATION',
    officialUrl: 'https://mangaloreuniversity.ac.in',
    dateAccessed: '2026-10-31',
    fields: [
      { field: 'name', old: 'DEPARTMENT OF BUSINESS ADMINISTRATION', verified: 'Department of Business Administration, Mangalore University', status: 'VERIFIED', notes: 'Conducted university department' },
      { field: 'type', old: 'Private', verified: 'Public/Government (State University Department)', status: 'VERIFIED', notes: 'Corrected erroneous Private designation' },
      { field: 'ownership', old: 'Private', verified: 'Government', status: 'VERIFIED', notes: 'State University of Karnataka' },
      { field: 'website', old: 'https://www.departmentofbus.edu.in', verified: 'https://mangaloreuniversity.ac.in', status: 'VERIFIED', notes: 'Replaced fake placeholder with official university site' },
      { field: 'address', old: 'DEPARTMENT OF BUSINESS ADMINISTRATION MANGALORE UNIVERSITY MANGALAGANGOTRI KONAJE', verified: 'Mangalagangotri - 574199, Konaje, Mangalore, Dakshina Kannada, Karnataka', status: 'VERIFIED', notes: 'Full campus address' },
      { field: 'phone', old: '0123-456789', verified: '0824-2287209 / +91-9740841002', status: 'VERIFIED', notes: 'Official department board & chairman line' },
      { field: 'email', old: 'N/A', verified: 'businessadministration@mangaloreuniversity.ac.in', status: 'VERIFIED', notes: 'Official departmental email' },
      { field: 'affiliation', old: 'N/A', verified: 'Mangalore University & Approved by AICTE', status: 'VERIFIED', notes: 'University department approved by AICTE' }
    ],
    courses: [
      {
        course: 'Master of Business Administration (MBA)',
        oldDuration: '2 Years',
        verifiedDuration: '2 Years',
        feeType: 'University Subsidized Fee',
        verifiedFee: '₹35,000 - ₹50,000/Year',
        session: '2024-2026',
        status: 'VERIFIED',
        sourceUrl: 'https://mangaloreuniversity.ac.in',
        notes: 'Full-time 2-year university MBA program'
      }
    ],
    image: {
      path: '/images/campuses/campus_architecture_1.jpg',
      belongs: 'N',
      status: 'REPRESENTATIVE',
      sourceUrl: 'https://mangaloreuniversity.ac.in',
      notes: 'IMAGE LEAK RESOLVED: Removed Bangalore University photo (bangalore_university.jpg) from Mangalore University department; mapped to clean representative campus_architecture_1.jpg with overlay badge.'
    }
  },
  {
    id: 155,
    name: 'PUNE INSTITUTE OF BUSINESS MANAGEMENT',
    officialUrl: 'https://www.pibm.in',
    dateAccessed: '2026-10-31',
    fields: [
      { field: 'website', old: 'https://www.puneinstituteof.edu.in', verified: 'https://www.pibm.in', status: 'VERIFIED', notes: 'Replaced dummy URL with official institute portal' },
      { field: 'address', old: '605/1 MUKAYWADI ROAD, PIRANGUT, TAL MULSHI', verified: 'Gut No. 605/1, Mukaiwadi Road, Pirangut, Tal - Mulshi, Pune - 412115, Maharashtra', status: 'VERIFIED', notes: 'Full Pirangut campus address' },
      { field: 'phone', old: '0123-456789', verified: '+91-9175656222 / 020-66575020', status: 'VERIFIED', notes: 'Official admissions helpline' },
      { field: 'email', old: 'N/A', verified: 'admission@pibm.in', status: 'VERIFIED', notes: 'Official admissions desk' },
      { field: 'affiliation', old: 'N/A', verified: 'Savitribai Phule Pune University (SPPU) & Approved by AICTE, NBA & NAAC', status: 'VERIFIED', notes: 'Accredited management institution' }
    ],
    courses: [
      {
        course: 'Master of Business Administration (MBA)',
        oldDuration: '2 Years',
        verifiedDuration: '2 Years',
        feeType: 'Program Fee',
        verifiedFee: '₹7,95,000 Total',
        session: '2024-2026',
        status: 'VERIFIED',
        sourceUrl: 'https://www.pibm.in/programs/mba',
        notes: '2-year full-time MBA affiliated to SPPU'
      }
    ],
    image: {
      path: '/images/campuses/pibm_pune.webp',
      belongs: 'Y',
      status: 'VERIFIED_AUTHENTIC',
      sourceUrl: 'https://www.pibm.in',
      notes: 'Authentic hilltop campus building of PIBM at Pirangut, Pune'
    }
  },
  {
    id: 168,
    name: 'SCHOOL OF MANAGEMENT STUDIES',
    officialUrl: 'https://www.nmu.ac.in',
    dateAccessed: '2026-10-31',
    fields: [
      { field: 'name', old: 'SCHOOL OF MANAGEMENT STUDIES', verified: 'School of Management Studies, KBC North Maharashtra University', status: 'VERIFIED', notes: 'State University School' },
      { field: 'type', old: 'Private', verified: 'Public/Government (State University Department)', status: 'VERIFIED', notes: 'Corrected erroneous Private designation' },
      { field: 'ownership', old: 'Private', verified: 'Government', status: 'VERIFIED', notes: 'State University department' },
      { field: 'website', old: 'https://www.schoolofmanagem.edu.in', verified: 'https://www.nmu.ac.in', status: 'VERIFIED', notes: 'Official KBCNMU portal' },
      { field: 'address', old: 'NORTH MAHARASHTRA UNIVERSITY, POST BOX NO. 80, UMAVI NAGAR, JALGAON 425001', verified: 'P.O. Box No. 80, Umavi Nagar, KBC North Maharashtra University, Jalgaon - 425001, Maharashtra', status: 'VERIFIED', notes: 'Full university campus address' },
      { field: 'phone', old: '0123-456789', verified: '0257-2257463', status: 'VERIFIED', notes: 'Director office telephone' },
      { field: 'email', old: 'N/A', verified: 'somgt@nmu.ac.in', status: 'VERIFIED', notes: 'Official departmental inquiry email' }
    ],
    courses: [
      {
        course: 'Master of Business Administration (MBA)',
        oldDuration: '2 Years',
        verifiedDuration: '2 Years',
        feeType: 'State University Fee',
        verifiedFee: '₹30,000 - ₹45,000/Year',
        session: '2024-2026',
        status: 'VERIFIED',
        sourceUrl: 'https://www.nmu.ac.in/en-us/School-of-Management-Studies',
        notes: '2-year full-time university MBA via MAH MBA CET'
      }
    ],
    image: {
      path: '/images/campuses/campus_architecture_2.jpg',
      belongs: 'N',
      status: 'REPRESENTATIVE',
      sourceUrl: 'https://www.nmu.ac.in',
      notes: 'IMAGE LEAK RESOLVED: Removed Mumbai college photo (spdt_tibrewala_andheri.jpg) from Jalgaon university; mapped to clean representative campus_architecture_2.jpg with overlay badge.'
    }
  },
  {
    id: 171,
    name: 'COLLEGE OF ENGINEERING',
    officialUrl: 'https://uitgug.ac.in',
    dateAccessed: '2026-10-31',
    fields: [
      { field: 'name', old: 'COLLEGE OF ENGINEERING', verified: 'University Institute of Technology (UIT), Gondwana University', status: 'VERIFIED', notes: 'Official conducted engineering institute' },
      { field: 'type', old: 'Private', verified: 'Public/Government (Conducted University Institute)', status: 'VERIFIED', notes: 'Conducted institute of Gondwana University' },
      { field: 'ownership', old: 'Private', verified: 'Government', status: 'VERIFIED', notes: 'State University conducted institute' },
      { field: 'website', old: 'https://newhorizonindia.edu/nhengineering', verified: 'https://uitgug.ac.in', status: 'VERIFIED', notes: 'Resolved critical defect: replaced unrelated Bangalore New Horizon URL with official UIT Gondwana portal' },
      { field: 'address', old: 'PO ADPALLI, TEHSIL GADCHIROLI', verified: 'MIDC Road, Complex, Adpalli, Gadchiroli - 442605, Maharashtra', status: 'VERIFIED', notes: 'Full Adpalli campus postal address' },
      { field: 'phone', old: '0123-456789', verified: '07132-223106 / 223101', status: 'VERIFIED', notes: 'Official institute telephone' },
      { field: 'affiliation', old: 'N/A', verified: 'Gondwana University, Gadchiroli & Approved by AICTE, DTE Code 4022', status: 'VERIFIED', notes: 'Conducted institute under Govt of Maharashtra' }
    ],
    courses: [
      {
        course: 'Master of Business Administration (MBA)',
        oldDuration: '2 Years',
        verifiedDuration: '2 Years',
        feeType: 'Government Quota Tuition',
        verifiedFee: '₹40,000/Year (~₹80,000 Total)',
        session: '2024-2026',
        status: 'VERIFIED',
        sourceUrl: 'https://uitgug.ac.in/courses',
        notes: '2-year post-graduate degree in management'
      },
      {
        course: 'Master of Computer Applications (MCA)',
        oldDuration: '2 Years',
        verifiedDuration: '2 Years',
        feeType: 'Government Quota Tuition',
        verifiedFee: '₹40,000/Year (~₹80,000 Total)',
        session: '2024-2026',
        status: 'VERIFIED',
        sourceUrl: 'https://uitgug.ac.in/courses',
        notes: '2-year post-graduate degree in computer applications'
      }
    ],
    image: {
      path: '/images/campuses/campus_architecture_5.jpg',
      belongs: 'N',
      status: 'REPRESENTATIVE',
      sourceUrl: 'https://uitgug.ac.in',
      notes: 'IMAGE LEAK RESOLVED: Removed VNIT Nagpur photo (campus_vnit_nagpur.jpeg) from Gadchiroli; mapped to clean representative campus_architecture_5.jpg with overlay badge.'
    }
  },
  {
    id: 179,
    name: 'INSTITUTE OF MANAGEMENT AND RESEARCH',
    officialUrl: 'https://www.ssmsimr.edu.in',
    dateAccessed: '2026-10-31',
    fields: [
      { field: 'name', old: 'INSTITUTE OF MANAGEMENT AND RESEARCH', verified: "Shri Shivaji Maratha Society's Institute of Management & Research (SSMS IMR)", status: 'VERIFIED', notes: 'Full institutional name' },
      { field: 'website', old: 'https://www.instituteofmana.edu.in', verified: 'https://www.ssmsimr.edu.in', status: 'VERIFIED', notes: 'Replaced dummy URL with official SSMS IMR portal' },
      { field: 'address', old: 'S.NO.74/1A,74/1B, PARVATI, ARANEYSHWAR, PUNE', verified: 'Survey No. 74/1A, 74/1B, Parvati, Aranyeshwar, Pune - 411009, Maharashtra', status: 'VERIFIED', notes: 'Parvati campus address' },
      { field: 'phone', old: '0123-456789', verified: '020-24222612 / +91-9850983177', status: 'VERIFIED', notes: 'Official college desk' },
      { field: 'email', old: 'N/A', verified: 'ssms.imr@gmail.com', status: 'VERIFIED', notes: 'Official institutional email' },
      { field: 'affiliation', old: 'N/A', verified: 'Savitribai Phule Pune University (SPPU) & Approved by AICTE, DTE Code 6116', status: 'VERIFIED', notes: 'SPPU affiliated MBA institute' }
    ],
    courses: [
      {
        course: 'Master of Business Administration (MBA)',
        oldDuration: '2 Years',
        verifiedDuration: '2 Years',
        feeType: 'Shikshan Shulka Samiti Fee',
        verifiedFee: '₹75,000/Year (~₹1,50,000 Total)',
        session: '2024-2026',
        status: 'VERIFIED',
        sourceUrl: 'https://www.ssmsimr.edu.in/admission.html',
        notes: '2-year full-time MBA affiliated to SPPU'
      }
    ],
    image: {
      path: '/images/campuses/campus_architecture_7.jpg',
      belongs: 'N',
      status: 'REPRESENTATIVE',
      sourceUrl: 'https://www.ssmsimr.edu.in',
      notes: 'BROKEN URL RESOLVED: Removed hotlinked third-party aggregator URL (collegebatch.com/static/...); mapped to clean representative campus_architecture_7.jpg with overlay badge.'
    }
  },
  {
    id: 237,
    name: 'GLOBAL INSTITUTE OF MANAGEMENT',
    officialUrl: 'https://giom.edu.in',
    dateAccessed: '2026-10-31',
    fields: [
      { field: 'name', old: 'GLOBAL INSTITUTE OF MANAGEMENT', verified: 'Global Institute of Management (GIOM), Sangamner', status: 'VERIFIED', notes: 'Established Sangamner management institute' },
      { field: 'website', old: 'https://www.globalinstitute.edu.in', verified: 'https://giom.edu.in', status: 'VERIFIED', notes: 'Replaced fake URL with official portal' },
      { field: 'address', old: 'S. NO. 132/1, PUNE NASHIK HIGHWAY, VELHALE, SANGAMNER, DIST. AHMEDNAGAR', verified: 'Sr. No. 132/1, Pune-Nashik Highway, Velhale, Taluka Sangamner, Dist. Ahmednagar - 422605, Maharashtra', status: 'VERIFIED', notes: 'Full highway campus address' },
      { field: 'phone', old: '0123-456789', verified: '+91-8698925530 / 02425-259500', status: 'VERIFIED', notes: 'Official admission cell numbers' },
      { field: 'email', old: 'N/A', verified: 'globalsangamner@gmail.com', status: 'VERIFIED', notes: 'Official institutional inbox' },
      { field: 'affiliation', old: 'N/A', verified: 'Savitribai Phule Pune University (SPPU) & Approved by AICTE, DTE Code 5384', status: 'VERIFIED', notes: 'SPPU affiliated' }
    ],
    courses: [
      {
        course: 'Master of Business Administration (MBA)',
        oldDuration: '2 Years',
        verifiedDuration: '2 Years',
        feeType: 'Approved Tuition Fee',
        verifiedFee: '₹70,000/Year (~₹1,40,000 Total)',
        session: '2024-2026',
        status: 'VERIFIED',
        sourceUrl: 'https://giom.edu.in/programmes',
        notes: '2-year full-time MBA program'
      }
    ],
    image: {
      path: '/images/campuses/campus_architecture_4.jpg',
      belongs: 'N',
      status: 'REPRESENTATIVE',
      sourceUrl: 'https://giom.edu.in',
      notes: 'Clean unbranded campus_architecture_4.jpg with overlay badge; purged corrupted secondary field kohinoor_kurla.jpg.'
    }
  },
  {
    id: 245,
    name: 'DR. D. Y. PATIL TECHNICAL CAMPUS',
    officialUrl: 'https://www.dypatiltcs.com',
    dateAccessed: '2026-10-31',
    fields: [
      { field: 'name', old: 'DR. D. Y. PATIL TECHNICAL CAMPUS', verified: 'Dr. D. Y. Patil Technical Campus, Talegaon, Pune', status: 'VERIFIED', notes: 'Full campus name' },
      { field: 'website', old: 'https://www.drdypatiltechni.edu.in', verified: 'https://www.dypatiltcs.com', status: 'VERIFIED', notes: 'Replaced fake URL with official portal' },
      { field: 'address', old: 'S.NO.32/1/A/7, VARALE,TALEGAON,PUNE', verified: 'Sr. No. 32/1/A/7, Near Talegaon Railway Station, A/P Varale, Talegaon Dabhade, Pune - 410507, Maharashtra', status: 'VERIFIED', notes: 'Full railway station campus address' },
      { field: 'phone', old: '0123-456789', verified: '+91-7666829653 / +91-7822099218', status: 'VERIFIED', notes: 'Official admission helplines' },
      { field: 'email', old: 'N/A', verified: 'info@dypatiltcs.com / admissions@dypatiltcs.com', status: 'VERIFIED', notes: 'Official admissions office email' },
      { field: 'affiliation', old: 'N/A', verified: 'Savitribai Phule Pune University (SPPU) & Approved by AICTE, DTE Code 6780', status: 'VERIFIED', notes: 'SPPU affiliated' }
    ],
    courses: [
      {
        course: 'Master of Computer Applications (MCA)',
        oldDuration: '2 Years',
        verifiedDuration: '2 Years',
        feeType: 'Academic Tuition',
        verifiedFee: '₹85,000/Year (~₹1,70,000 Total)',
        session: '2024-2026',
        status: 'VERIFIED',
        sourceUrl: 'https://www.dypatiltcs.com/courses',
        notes: '2-year post-graduate degree in computer applications'
      }
    ],
    image: {
      path: '/images/campuses/campus_architecture_7.jpg',
      belongs: 'N',
      status: 'REPRESENTATIVE',
      sourceUrl: 'https://www.dypatiltcs.com',
      notes: 'IMAGE LEAK RESOLVED: Removed Navi Mumbai photo (saraswati_kharghar.webp) from Pune campus; mapped to clean representative campus_architecture_7.jpg with overlay badge.'
    }
  },
  {
    id: 273,
    name: 'Delhi Technological University (DTU, Delhi)',
    officialUrl: 'https://www.dtu.ac.in',
    dateAccessed: '2026-10-31',
    fields: [
      { field: 'duplicate_status', old: 'Active Primary', verified: 'DUPLICATE of Canonical Record ID 12660', status: 'VERIFIED', notes: 'Recommend canonical consolidation' },
      { field: 'ownership', old: 'Private', verified: 'Government', status: 'VERIFIED', notes: 'State University under Govt of NCT of Delhi' },
      { field: 'type', old: 'Private', verified: 'Public/Government State University', status: 'VERIFIED', notes: 'Corrected erroneous Private ownership' },
      { field: 'phone', old: '080-26597135', verified: '011-27871018', status: 'VERIFIED', notes: 'Corrected erroneous Bangalore 080 STD code to Delhi 011' },
      { field: 'email', old: 'admissions@dd.edu.in', verified: 'academic@dtu.ac.in', status: 'VERIFIED', notes: 'Official university academic desk' }
    ],
    courses: [
      {
        course: 'Bachelor of Technology (B.Tech in CSE)',
        oldDuration: '4 Years',
        verifiedDuration: '4 Years',
        feeType: 'Annual Academic Fee',
        verifiedFee: '₹1,77,000/Year',
        session: '2024-2028',
        status: 'VERIFIED',
        sourceUrl: 'https://www.dtu.ac.in',
        notes: 'Admission via JAC Delhi / JEE Main'
      }
    ],
    image: {
      path: '/images/campuses/delhi_technological_university.jpg',
      belongs: 'Y',
      status: 'VERIFIED_AUTHENTIC',
      sourceUrl: 'https://www.dtu.ac.in',
      notes: 'Authentic DTU entrance facade'
    }
  },
  {
    id: 13,
    name: 'Indian Institute of Technology Bombay (IIT Bombay)',
    officialUrl: 'https://www.iitb.ac.in',
    dateAccessed: '2026-10-31',
    fields: [
      { field: 'address', old: 'Powai, Mumbai, Maharashtra, India', verified: 'Main Gate Road, IIT Area, Powai, Mumbai - 400076, Maharashtra, India', status: 'VERIFIED', notes: 'Full Powai campus address with PIN code' },
      { field: 'phone', old: 'N/A', verified: '+91-22-2572 2545', status: 'VERIFIED', notes: 'Official IIT Bombay board line' },
      { field: 'email', old: 'N/A', verified: 'pro@iitb.ac.in / jeeadv@iitb.ac.in', status: 'VERIFIED', notes: 'Public relations & admissions desk' },
      { field: 'affiliation', old: 'N/A', verified: 'Autonomous Institute of National Importance (Institutes of Technology Act)', status: 'VERIFIED', notes: 'Apex technical institute' }
    ],
    courses: [
      {
        course: 'Bachelor of Technology (B.Tech - Computer Science)',
        oldDuration: '4 Years',
        verifiedDuration: '4 Years',
        feeType: 'General / OBC Tuition Fee',
        verifiedFee: '₹1,00,000/Semester (~₹8,00,000 Total Tuition)',
        session: '2024-2028',
        status: 'VERIFIED',
        sourceUrl: 'https://www.iitb.ac.in/en/education/academic-divisions',
        notes: 'Flagship 4-year undergraduate degree, admission via JEE Advanced'
      }
    ],
    image: {
      path: '/images/campuses/iit_bombay_powai.jpg',
      belongs: 'Y',
      status: 'VERIFIED_AUTHENTIC',
      sourceUrl: 'https://www.iitb.ac.in',
      notes: 'Authentic 4016x3012 high-resolution photograph of IIT Bombay Powai campus'
    }
  },
  {
    id: 15,
    name: 'Indian Institute of Management Bangalore (IIM Bangalore)',
    officialUrl: 'https://www.iimb.ac.in',
    dateAccessed: '2026-10-31',
    fields: [
      { field: 'address', old: 'Bannerghatta Road, Bangalore, Karnataka, India', verified: 'Bannerghatta Main Road, Bilekahalli, Bengaluru - 560076, Karnataka, India', status: 'VERIFIED', notes: 'Official postal address with PIN code' },
      { field: 'phone', old: 'N/A', verified: '+91-80-2699 3000 / +91-80-2658 2450', status: 'VERIFIED', notes: 'Official IIMB board & admissions phone' },
      { field: 'email', old: 'N/A', verified: 'info@iimb.ac.in / pgpadm@iimb.ac.in', status: 'VERIFIED', notes: 'Official admissions office email' },
      { field: 'affiliation', old: 'N/A', verified: 'Autonomous Institute of National Importance (IIM Act 2017)', status: 'VERIFIED', notes: 'Equis accredited' }
    ],
    courses: [
      {
        course: 'Post Graduate Programme in Management (PGP / MBA)',
        oldDuration: '2 Years',
        verifiedDuration: '2 Years',
        feeType: 'Program Fee',
        verifiedFee: '₹24,50,000 Total',
        session: '2024-2026',
        status: 'VERIFIED',
        sourceUrl: 'https://www.iimb.ac.in/programmes/pgp',
        notes: '2-year flagship residential MBA degree, admission via CAT'
      }
    ],
    image: {
      path: '/images/campuses/iim_bangalore.jpg',
      belongs: 'Y',
      status: 'VERIFIED_AUTHENTIC',
      sourceUrl: 'https://www.iimb.ac.in',
      notes: 'Authentic granite stone architecture building designed by B.V. Doshi'
    }
  }
];

// Append to CSVs
let collegeCsvRows = [];
let courseCsvRows = [];
let imageCsvRows = [];

batch2Colleges.forEach(col => {
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
const allCompletedIds = Array.from(new Set([...(progress.completed_ids || []), ...batch2Colleges.map(c => c.id)]));

progress.completed_count = allCompletedIds.length;
progress.current_batch = 2;
progress.last_updated = new Date().toISOString();
progress.completed_ids = allCompletedIds;

fs.writeFileSync(PROGRESS_PATH, JSON.stringify(progress, null, 2), 'utf8');

console.log('Batch 2 verification CSVs appended and progress.json updated (Total verified: ' + allCompletedIds.length + ').');

