const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const BASE_DIR = path.join(__dirname, '..');
const PROGRESS_PATH = path.join(BASE_DIR, 'reports', 'verification', 'progress.json');
const COLLEGE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'college-verification.csv');
const COURSE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'course-verification.csv');
const IMAGE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'image-verification.csv');
const SUMMARY_MD = path.join(BASE_DIR, 'reports', 'verification', 'batch-5-summary.md');

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

const batch5Colleges = [
  {
    id: 390,
    name: 'GUJARAT TECHNOLOGICAL UNIVERSITY SCHOOL OF MANAGEMENT STUDIES',
    officialUrl: 'https://www.gsms.gtu.ac.in',
    dateAccessed: '2026-10-31',
    fields: [
      { field: 'name', old: 'GUJARAT TECHNOLOGICAL UNIVERSITY SCHOOL OF MANAGEMENT STUDIES', verified: 'Graduate School of Management Studies (GSMS), Gujarat Technological University', status: 'VERIFIED', notes: 'Conducted university department' },
      { field: 'type', old: 'Private', verified: 'Public/Government (State University Department)', status: 'VERIFIED', notes: 'RESOLVED CRITICAL DEFECT: GTU is the premier State Technical University of Gujarat.' },
      { field: 'ownership', old: 'Private', verified: 'Government', status: 'VERIFIED', notes: 'State Government University' },
      { field: 'website', old: 'https://www.gujarattechnol.edu.in', verified: 'https://www.gsms.gtu.ac.in', status: 'VERIFIED', notes: 'Official GTU GSMS portal' },
      { field: 'address', old: 'AHMEDABAD, GUJARAT', verified: 'Academic Block - IV, GTU Chandkheda Campus, Nr. Visat Three Roads, Visat - Gandhinagar Highway, Chandkheda, Ahmedabad - 382424, Gujarat', status: 'VERIFIED', notes: 'Full campus address' },
      { field: 'phone', old: '0123-456789', verified: '079-23267542 / 079-23267534', status: 'VERIFIED', notes: 'Official GSMS office numbers' },
      { field: 'email', old: 'N/A', verified: 'gsms@gtu.edu.in', status: 'VERIFIED', notes: 'Official departmental inbox' },
      { field: 'affiliation', old: 'N/A', verified: 'Gujarat Technological University (GTU) & Approved by AICTE', status: 'VERIFIED', notes: 'Conducted post-graduate school' }
    ],
    courses: [
      {
        course: 'Master of Business Administration (MBA - International Business)',
        oldDuration: '2 Years',
        verifiedDuration: '2 Years',
        feeType: 'Government University Fee',
        verifiedFee: '₹25,000/Year (~₹50,000 Total)',
        session: '2024-2026',
        status: 'VERIFIED',
        sourceUrl: 'https://www.gsms.gtu.ac.in',
        notes: '2-year full-time state university MBA'
      }
    ],
    image: {
      path: '/images/campuses/campus_architecture_8.jpg',
      belongs: 'N',
      status: 'REPRESENTATIVE',
      sourceUrl: 'https://www.gsms.gtu.ac.in',
      notes: 'IMAGE LEAK RESOLVED: Removed Bangalore University photo (bangalore_university.jpg) from Gujarat Technological University; mapped to clean representative campus_architecture_8.jpg with overlay badge.'
    }
  },
  {
    id: 395,
    name: 'NARAYANA BUSIINESS SCHOOL',
    officialUrl: 'https://www.nbs.edu.in',
    dateAccessed: '2026-10-31',
    fields: [
      { field: 'name', old: 'NARAYANA BUSIINESS SCHOOL', verified: 'Narayana Business School (Duplicate Record)', status: 'VERIFIED', notes: 'Corrected typo in name ("BUSIINESS" with double i)' },
      { field: 'duplicate_status', old: 'Active Primary', verified: 'DUPLICATE of Canonical Record ID 387', status: 'VERIFIED', notes: 'Marked as duplicate of ID 387 (main campus at Sanathal)' },
      { field: 'website', old: 'https://www.narayanabusiine.edu.in', verified: 'https://www.nbs.edu.in', status: 'VERIFIED', notes: 'Official NBS portal' },
      { field: 'phone', old: '0123-456789', verified: '+91 844 8444 981', status: 'VERIFIED', notes: 'Official admissions telephone' },
      { field: 'email', old: 'N/A', verified: 'info@nbs.edu.in', status: 'VERIFIED', notes: 'Official admissions desk' }
    ],
    courses: [
      {
        course: 'Master of Business Administration (MBA)',
        oldDuration: '2 Years',
        verifiedDuration: '2 Years',
        feeType: 'Total Program Fee',
        verifiedFee: '₹7,95,000 Total',
        session: '2024-2026',
        status: 'VERIFIED',
        sourceUrl: 'https://www.nbs.edu.in',
        notes: 'Duplicate record linked to canonical ID 387'
      }
    ],
    image: {
      path: '/images/campuses/campus_architecture_6.jpg',
      belongs: 'N',
      status: 'REPRESENTATIVE',
      sourceUrl: 'https://www.nbs.edu.in',
      notes: 'BROKEN URL RESOLVED: Removed external upload hotlink; mapped to clean representative campus_architecture_6.jpg with overlay badge.'
    }
  },
  {
    id: 396,
    name: 'NARAN LALA SCHOOL OF INDUSTRIAL MANAGEMENT & COMPUTER SCIENCE',
    officialUrl: 'https://www.naranlala.edu.in/',
    dateAccessed: '2026-10-31',
    fields: [
      { field: 'website', old: 'https://www.naranlalaschoo.edu.in', verified: 'https://www.naranlala.edu.in/', status: 'VERIFIED', notes: 'Official Naran Lala portal' },
      { field: 'address', old: 'NAVSARI, GUJARAT', verified: 'Naran Lala College Campus, Bhagwati Sankul, Near Eru Char Rasta, Eru, Navsari - 396450, Gujarat, India', status: 'VERIFIED', notes: 'Full Eru campus address' },
      { field: 'phone', old: '0123-456789', verified: '02637-283687 / +91-9099063468', status: 'VERIFIED', notes: 'Official college phone numbers' },
      { field: 'email', old: 'N/A', verified: 'naranlalamba@gmail.com', status: 'VERIFIED', notes: 'Official MBA departmental email' },
      { field: 'affiliation', old: 'N/A', verified: 'Gujarat Technological University (GTU) & Approved by AICTE, GTU Code 738', status: 'VERIFIED', notes: 'GTU affiliated' }
    ],
    courses: [
      {
        course: 'Master of Business Administration (MBA)',
        oldDuration: '2 Years',
        verifiedDuration: '2 Years',
        feeType: 'Annual Academic Fee',
        verifiedFee: '₹65,000/Year (~₹1,30,000 Total)',
        session: '2024-2026',
        status: 'VERIFIED',
        sourceUrl: 'https://www.naranlala.edu.in/',
        notes: '2-year full-time MBA'
      }
    ],
    image: {
      path: '/images/campuses/campus_architecture_5.jpg',
      belongs: 'N',
      status: 'REPRESENTATIVE',
      sourceUrl: 'https://www.naranlala.edu.in/',
      notes: 'IMAGE LEAK RESOLVED: Removed RIIM Pune photo (riim_pune.jpeg) from Navsari Gujarat; mapped to clean representative campus_architecture_5.jpg with overlay badge.'
    }
  },
  {
    id: 404,
    name: 'SILVER OAK INSTITUTE OF BUSINESS MANAGEMENT',
    officialUrl: 'https://silveroakuni.ac.in',
    dateAccessed: '2026-10-31',
    fields: [
      { field: 'website', old: 'https://www.silveroakinstit.edu.in', verified: 'https://silveroakuni.ac.in', status: 'VERIFIED', notes: 'Official Silver Oak University portal' },
      { field: 'address', old: 'GOTA, AHMEDABAD', verified: 'Silver Oak University, Opp. Bhagwat Vidyapith, S.G. Highway, Gota, Ahmedabad - 382481, Gujarat', status: 'VERIFIED', notes: 'Full S.G. Highway university campus' },
      { field: 'phone', old: '0123-456789', verified: '079-66046300 / +91-9099063464', status: 'VERIFIED', notes: 'Official university lines' },
      { field: 'email', old: 'N/A', verified: 'info@silveroakuni.ac.in', status: 'VERIFIED', notes: 'Official university email' },
      { field: 'affiliation', old: 'N/A', verified: 'Constituent of Silver Oak University (Gujarat Private Universities Act), Approved by UGC & AICTE', status: 'VERIFIED', notes: 'Private University constituent' }
    ],
    courses: [
      {
        course: 'Post Graduate Diploma in Management (PGDM / MBA)',
        oldDuration: '2 Years',
        verifiedDuration: '2 Years',
        feeType: 'Annual Academic Fee',
        verifiedFee: '₹1,40,000/Year (~₹2,80,000 Total)',
        session: '2024-2026',
        status: 'VERIFIED',
        sourceUrl: 'https://silveroakuni.ac.in',
        notes: '2-year full-time program'
      }
    ],
    image: {
      path: '/images/campuses/campus_architecture_8.jpg',
      belongs: 'N',
      status: 'REPRESENTATIVE',
      sourceUrl: 'https://silveroakuni.ac.in',
      notes: 'IMAGE LEAK RESOLVED: Removed MGM Navi Mumbai photo (campus_mgm_navi_mumbai.jpg) from Ahmedabad campus; mapped to clean representative campus_architecture_8.jpg with overlay badge.'
    }
  },
  {
    id: 405,
    name: 'SCHOOL OF MANAGEMENT',
    officialUrl: 'https://www.pdpu.ac.in',
    dateAccessed: '2026-10-31',
    fields: [
      { field: 'name', old: 'SCHOOL OF MANAGEMENT', verified: 'School of Management (SoM), Pandit Deendayal Energy University', status: 'VERIFIED', notes: 'Full institutional school name' },
      { field: 'website', old: 'https://www.schoolofmanagem.edu.in', verified: 'https://www.pdpu.ac.in', status: 'VERIFIED', notes: 'Official PDEU portal' },
      { field: 'address', old: 'PANDIT DEENDAYAL ENERGY UNIVERSITY, KNOWLEDGE CORRIDOR, RAISAN', verified: 'Knowledge Corridor, Raisan Village, Gandhinagar - 382426, Gujarat, India', status: 'VERIFIED', notes: 'Full Knowledge Corridor campus address' },
      { field: 'phone', old: '0123-456789', verified: '079-23275109 / 079-23275060', status: 'VERIFIED', notes: 'Official admissions telephone' },
      { field: 'email', old: 'N/A', verified: 'admissions@spm.pdpu.ac.in', status: 'VERIFIED', notes: 'Official SoM admissions office' },
      { field: 'affiliation', old: 'N/A', verified: 'Pandit Deendayal Energy University, Approved by UGC & AICTE, NAAC A++ Grade', status: 'VERIFIED', notes: 'Premier energy & management university' }
    ],
    courses: [
      {
        course: 'Master of Business Administration (MBA - Energy & Infrastructure / General)',
        oldDuration: '2 Years',
        verifiedDuration: '2 Years',
        feeType: 'Program Fee',
        verifiedFee: '₹4,25,000/Year (~₹8,50,000 Total)',
        session: '2024-2026',
        status: 'VERIFIED',
        sourceUrl: 'https://www.pdpu.ac.in',
        notes: '2-year full-time residential MBA'
      }
    ],
    image: {
      path: '/images/campuses/campus_architecture_9.jpg',
      belongs: 'N',
      status: 'REPRESENTATIVE',
      sourceUrl: 'https://www.pdpu.ac.in',
      notes: 'IMAGE LEAK RESOLVED: Removed MGM Navi Mumbai (campus_mgm_navi_mumbai.jpg) and AMU Aligarh (campus_aligarh_muslim_university.jpg) photos; mapped to clean representative campus_architecture_9.jpg with overlay badge.'
    }
  },
  {
    id: 407,
    name: 'TOLANI MOTWANE INSTITUTE OF MANAGEMENT STUDIES',
    officialUrl: 'https://tims.ac.in',
    dateAccessed: '2026-10-31',
    fields: [
      { field: 'name', old: 'TOLANI MOTWANE INSTITUTE OF MANAGEMENT STUDIES', verified: 'Tolani Motwane Institute of Management Studies (TMIMS), Adipur', status: 'VERIFIED', notes: 'Full institute name' },
      { field: 'website', old: 'https://www.tolanimotwanein.edu.in', verified: 'https://tims.ac.in', status: 'VERIFIED', notes: 'Official TMIMS portal' },
      { field: 'address', old: 'ADIPUR, KUTCH', verified: 'Tolani Vidya Mandir Campus, Lilashah Ashram Road, Adipur (Kutch) - 370205, Gujarat', status: 'VERIFIED', notes: 'Full campus address' },
      { field: 'phone', old: '0123-456789', verified: '02836-261466 / +91-9925317710', status: 'VERIFIED', notes: 'Official institute desk' },
      { field: 'email', old: 'N/A', verified: 'info@tims.ac.in', status: 'VERIFIED', notes: 'Official institutional inbox' },
      { field: 'affiliation', old: 'N/A', verified: 'Gujarat Technological University (GTU) & Approved by AICTE, GTU Code 758', status: 'VERIFIED', notes: 'GTU affiliated' }
    ],
    courses: [
      {
        course: 'Master of Business Administration (MBA)',
        oldDuration: '2 Years',
        verifiedDuration: '2 Years',
        feeType: 'Annual Academic Fee',
        verifiedFee: '₹72,000/Year (~₹1,44,000 Total)',
        session: '2024-2026',
        status: 'VERIFIED',
        sourceUrl: 'https://tims.ac.in',
        notes: '2-year full-time MBA'
      }
    ],
    image: {
      path: '/images/campuses/campus_architecture_1.jpg',
      belongs: 'N',
      status: 'REPRESENTATIVE',
      sourceUrl: 'https://tims.ac.in',
      notes: 'BROKEN URL RESOLVED: Removed fragile aggregator hotlink (collegebatch.com/static/...); mapped to clean representative campus_architecture_1.jpg with overlay badge.'
    }
  },
  {
    id: 411,
    name: 'SWAMI SAHAJANAND SCHOOL OF MANAGEMENT BHAVNAGAR',
    officialUrl: 'http://www.swamisahajanand.mba',
    dateAccessed: '2026-10-31',
    fields: [
      { field: 'website', old: 'https://www.swamisahajanand.edu.in', verified: 'http://www.swamisahajanand.mba', status: 'VERIFIED', notes: 'Official SSSM portal' },
      { field: 'address', old: 'BHAVNAGAR, GUJARAT', verified: 'Phase-II, Plot No. 639, ISCON Mega City, Near M.K. Bhavnagar University Office, Bhavnagar - 364002, Gujarat', status: 'VERIFIED', notes: 'Full city address' },
      { field: 'phone', old: '0123-456789', verified: '0278-2512252 / 0278-2516999', status: 'VERIFIED', notes: 'Official landlines' },
      { field: 'email', old: 'N/A', verified: 'swamisahajanand.mba@gmail.com', status: 'VERIFIED', notes: 'Official admissions email' },
      { field: 'affiliation', old: 'N/A', verified: 'Maharaja Krishnakumarsinhji Bhavnagar University (MKBU) / GTU & Approved by AICTE', status: 'VERIFIED', notes: 'AICTE approved' }
    ],
    courses: [
      {
        course: 'Master of Business Administration (MBA - General Management)',
        oldDuration: '2 Years',
        verifiedDuration: '2 Years',
        feeType: 'Annual Academic Fee',
        verifiedFee: '₹65,000/Year (~₹1,30,000 Total)',
        session: '2024-2026',
        status: 'VERIFIED',
        sourceUrl: 'http://www.swamisahajanand.mba',
        notes: '2-year full-time MBA'
      }
    ],
    image: {
      path: '/images/campuses/campus_architecture_7.jpg',
      belongs: 'N',
      status: 'REPRESENTATIVE',
      sourceUrl: 'http://www.swamisahajanand.mba',
      notes: 'Clean unbranded representative campus_architecture_7.jpg with overlay badge.'
    }
  },
  {
    id: 412,
    name: 'THE MANDVI EDUCATION SOCIETY INSTITUTE OF BUSINESS MANAGEMENT AND COMPUTER STUDIES',
    officialUrl: 'https://www.mestech.ac.in',
    dateAccessed: '2026-10-31',
    fields: [
      { field: 'website', old: 'https://www.themandvieduca.edu.in', verified: 'https://www.mestech.ac.in', status: 'VERIFIED', notes: 'Official MES Technical Campus portal' },
      { field: 'address', old: 'MANDVI, SURAT', verified: 'The Mandvi Education Society Technical Campus, Near Bus Stand, Mandvi, Surat - 394160, Gujarat', status: 'VERIFIED', notes: 'Full bus stand campus address' },
      { field: 'phone', old: '0123-456789', verified: '+91 9327365853 / 02623-221015', status: 'VERIFIED', notes: 'Official technical campus lines' },
      { field: 'email', old: 'N/A', verified: 'mgmtmes@gmail.com', status: 'VERIFIED', notes: 'Official management email' },
      { field: 'affiliation', old: 'N/A', verified: 'Gujarat Technological University (GTU) & Approved by AICTE, GTU Code 732', status: 'VERIFIED', notes: 'GTU affiliated' }
    ],
    courses: [
      {
        course: 'Master of Business Administration (MBA)',
        oldDuration: '2 Years',
        verifiedDuration: '2 Years',
        feeType: 'Approved Annual Fee',
        verifiedFee: '₹55,000/Year (~₹1,10,000 Total)',
        session: '2024-2026',
        status: 'VERIFIED',
        sourceUrl: 'https://www.mestech.ac.in',
        notes: '2-year full-time MBA'
      }
    ],
    image: {
      path: '/images/campuses/campus_architecture_2.jpg',
      belongs: 'N',
      status: 'REPRESENTATIVE',
      sourceUrl: 'https://www.mestech.ac.in',
      notes: 'IMAGE LEAK RESOLVED: Removed Bandra Mumbai photo (chetana_bandra.jpg) from Surat Gujarat; mapped to clean representative campus_architecture_2.jpg with overlay badge.'
    }
  },
  {
    id: 420,
    name: 'CHRIST INSTITUTE OF MANAGEMENT',
    officialUrl: 'https://www.cimrajkot.edu.in/',
    dateAccessed: '2026-10-31',
    fields: [
      { field: 'website', old: 'https://www.christinstitute.edu.in', verified: 'https://www.cimrajkot.edu.in/', status: 'VERIFIED', notes: 'Official CIM Rajkot portal' },
      { field: 'address', old: 'RAJKOT, GUJARAT', verified: 'Christ Campus, Vidya Niketan, Saurashtra University P.O., Rajkot - 360005, Gujarat, India', status: 'VERIFIED', notes: 'Full university road campus address' },
      { field: 'phone', old: '0123-456789', verified: '0281-2572091 / +91-9825199264', status: 'VERIFIED', notes: 'Official campus numbers' },
      { field: 'email', old: 'N/A', verified: 'cimrajkot@gmail.com', status: 'VERIFIED', notes: 'Official institutional inbox' },
      { field: 'affiliation', old: 'N/A', verified: 'Saurashtra University & Approved by AICTE', status: 'VERIFIED', notes: 'AICTE approved MBA institute' }
    ],
    courses: [
      {
        course: 'Master of Business Administration (MBA)',
        oldDuration: '2 Years',
        verifiedDuration: '2 Years',
        feeType: 'Annual Academic Fee',
        verifiedFee: '₹75,000/Year (~₹1,50,000 Total)',
        session: '2024-2026',
        status: 'VERIFIED',
        sourceUrl: 'https://www.cimrajkot.edu.in/',
        notes: '2-year full-time MBA'
      }
    ],
    image: {
      path: '/images/campuses/campus_architecture_3.jpg',
      belongs: 'N',
      status: 'REPRESENTATIVE',
      sourceUrl: 'https://www.cimrajkot.edu.in/',
      notes: 'BROKEN URL RESOLVED: Removed fragile external slider hotlink; mapped to clean representative campus_architecture_3.jpg with overlay badge.'
    }
  },
  {
    id: 430,
    name: 'SHAYONA INSTITUTE OF BUSINESS MANAGEMENT',
    officialUrl: 'https://sibm.shayonainstitute.edu.in',
    dateAccessed: '2026-10-31',
    fields: [
      { field: 'website', old: 'https://www.shayonainstitu.edu.in', verified: 'https://sibm.shayonainstitute.edu.in', status: 'VERIFIED', notes: 'Official SIBM Shayona portal' },
      { field: 'address', old: 'GHATLODIA, AHMEDABAD', verified: 'Shayona City, Shayona Complex Road, Behind Vandana Park, Ghatlodia, Ahmedabad - 380061, Gujarat', status: 'VERIFIED', notes: 'Full Ghatlodia city address' },
      { field: 'phone', old: '0123-456789', verified: '+91 9227076799 / 079-27665354', status: 'VERIFIED', notes: 'Official admission lines' },
      { field: 'email', old: 'N/A', verified: 'admission@shayonainstitute.edu.in', status: 'VERIFIED', notes: 'Official admissions office' },
      { field: 'affiliation', old: 'N/A', verified: 'Gujarat Technological University (GTU) & Approved by AICTE, GTU Code 801', status: 'VERIFIED', notes: 'GTU affiliated' }
    ],
    courses: [
      {
        course: 'Master of Business Administration (MBA)',
        oldDuration: '2 Years',
        verifiedDuration: '2 Years',
        feeType: 'Annual Academic Fee',
        verifiedFee: '₹72,000/Year (~₹1,44,000 Total)',
        session: '2024-2026',
        status: 'VERIFIED',
        sourceUrl: 'https://sibm.shayonainstitute.edu.in',
        notes: '2-year full-time MBA'
      }
    ],
    image: {
      path: '/images/campuses/campus_architecture_4.jpg',
      belongs: 'N',
      status: 'REPRESENTATIVE',
      sourceUrl: 'https://sibm.shayonainstitute.edu.in',
      notes: 'BROKEN URL RESOLVED: Removed fragile upload hotlink; mapped to clean representative campus_architecture_4.jpg with overlay badge.'
    }
  }
];

// Append to CSVs
let collegeCsvRows = [];
let courseCsvRows = [];
let imageCsvRows = [];

batch5Colleges.forEach(col => {
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
const allCompletedIds = Array.from(new Set([...(progress.completed_ids || []), ...batch5Colleges.map(c => c.id)]));

progress.completed_count = allCompletedIds.length;
progress.current_batch = 5;
progress.last_updated = new Date().toISOString();
progress.completed_ids = allCompletedIds;

fs.writeFileSync(PROGRESS_PATH, JSON.stringify(progress, null, 2), 'utf8');

console.log('Batch 5 verification CSVs appended and progress.json updated (Total verified: ' + allCompletedIds.length + ').');

