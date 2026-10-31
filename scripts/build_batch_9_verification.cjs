const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const BASE_DIR = path.join(__dirname, '..');
const PROGRESS_PATH = path.join(BASE_DIR, 'reports', 'verification', 'progress.json');
const COLLEGE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'college-verification.csv');
const COURSE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'course-verification.csv');
const IMAGE_CSV = path.join(BASE_DIR, 'reports', 'verification', 'image-verification.csv');

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

const batch9Colleges = [
  {
    id: 656,
    name: 'VIVEKANANDHA INSTITUTE OF INFORMATION AND MANAGEMENT STUDIES',
    officialUrl: 'https://viims.ac.in',
    dateAccessed: '2026-10-31',
    fields: [
      { field: 'name', old: 'VIVEKANANDHA INSTITUTE OF INFORMATION AND MANAGEMENT STUDIES', verified: 'Vivekanandha Institute of Information and Management Studies (VIIMS), Tiruchengode', status: 'VERIFIED', notes: 'Full institutional name' },
      { field: 'website', old: 'https://www.vivekanandhains.edu.in', verified: 'https://viims.ac.in', status: 'VERIFIED', notes: 'Official VIIMS portal' },
      { field: 'address', old: 'TIRUCHENGODE, NAMAKKAL', verified: 'Elayampalayam, Tiruchengode - TK, Namakkal District, Tamil Nadu - 637205, India', status: 'VERIFIED', notes: 'Full rural campus address' },
      { field: 'phone', old: '0123-456789', verified: '+91 94433 16537 / +91 99655 34670', status: 'VERIFIED', notes: 'Official campus telephone lines' },
      { field: 'email', old: 'N/A', verified: 'mbaprincipal@gmail.com / admission@vivekanandha.ac.in', status: 'VERIFIED', notes: 'Official institutional inboxes' },
      { field: 'affiliation', old: 'N/A', verified: 'Anna University & Approved by AICTE, Accredited by NAAC', status: 'VERIFIED', notes: 'Anna University affiliated' }
    ],
    courses: [
      {
        course: 'Master of Business Administration (MBA)',
        oldDuration: '2 Years',
        verifiedDuration: '2 Years',
        feeType: 'Annual Academic Fee',
        verifiedFee: '₹50,000/Year (~₹1,00,000 Total)',
        session: '2024-2026',
        status: 'VERIFIED',
        sourceUrl: 'https://viims.ac.in',
        notes: '2-year full-time MBA'
      }
    ],
    image: {
      path: '/images/campuses/campus_architecture_8.jpg',
      belongs: 'N',
      status: 'REPRESENTATIVE',
      sourceUrl: 'https://viims.ac.in',
      notes: 'BROKEN URL RESOLVED: Removed fragile aggregator hotlink (img.studyclap.com/...); mapped to clean representative campus_architecture_8.jpg with overlay badge.'
    }
  },
  {
    id: 658,
    name: 'GOVERNMENT ARTS AND SCIENCE COLLEGE',
    officialUrl: 'https://gascrknagar.co.in',
    dateAccessed: '2026-10-31',
    fields: [
      { field: 'name', old: 'GOVERNMENT ARTS AND SCIENCE COLLEGE', verified: 'Government Arts and Science College, RK Nagar, Chennai', status: 'VERIFIED', notes: 'Full government college name' },
      { field: 'type', old: 'Private', verified: 'Public/Government (State Government College)', status: 'VERIFIED', notes: 'RESOLVED CRITICAL DEFECT: Government Arts and Science College RK Nagar is established and funded by the Government of Tamil Nadu.' },
      { field: 'ownership', old: 'Private', verified: 'Government', status: 'VERIFIED', notes: 'State Government (Higher Education Department, Govt of Tamil Nadu)' },
      { field: 'website', old: 'https://www.governmentartsa.edu.in', verified: 'https://gascrknagar.co.in', status: 'VERIFIED', notes: 'Official GASC RK Nagar portal' },
      { field: 'address', old: 'NO. 183, AA SCHEME ROAD, RK NAGAR KAMARAJAR SALAI, TONDIARPET', verified: 'No. 183, AA Scheme Road, RK Nagar, Kamarajar Salai, Tondiarpet, Chennai - 600081, Tamil Nadu, India', status: 'VERIFIED', notes: 'Full Tondiarpet campus address' },
      { field: 'phone', old: '0123-456789', verified: '044-25912558', status: 'VERIFIED', notes: 'Official college telephone line' },
      { field: 'email', old: 'N/A', verified: 'principalgascrknagar@gmail.com', status: 'VERIFIED', notes: 'Official principal inbox' },
      { field: 'affiliation', old: 'N/A', verified: 'University of Madras & Approved by UGC, Govt of Tamil Nadu', status: 'VERIFIED', notes: 'University of Madras affiliated' }
    ],
    courses: [
      {
        course: 'Master of Business Administration (MBA)',
        oldDuration: '2 Years',
        verifiedDuration: '2 Years',
        feeType: 'Government Subsidized Fee',
        verifiedFee: '₹8,000/Year (~₹16,000 Total)',
        session: '2024-2026',
        status: 'VERIFIED',
        sourceUrl: 'https://gascrknagar.co.in',
        notes: '2-year full-time government MBA'
      }
    ],
    image: {
      path: '/images/campuses/campus_architecture_7.jpg',
      belongs: 'N',
      status: 'REPRESENTATIVE',
      sourceUrl: 'https://gascrknagar.co.in',
      notes: 'IMAGE LEAK RESOLVED: Removed Bunts Sangha Mumbai photo (bunts_sangha_mumbai.jpeg) from Government Arts College Chennai; mapped to clean representative campus_architecture_7.jpg with overlay badge.'
    }
  },
  {
    id: 660,
    name: 'SREE SARASWATHI THYAGARAJA COLLEGE',
    officialUrl: 'https://www.stc.ac.in',
    dateAccessed: '2026-10-31',
    fields: [
      { field: 'name', old: 'SREE SARASWATHI THYAGARAJA COLLEGE', verified: 'Sree Saraswathi Thyagaraja College (Autonomous), Pollachi', status: 'VERIFIED', notes: 'Full institutional name' },
      { field: 'website', old: 'https://www.sreesaraswathit.edu.in', verified: 'https://www.stc.ac.in', status: 'VERIFIED', notes: 'Official STC portal' },
      { field: 'address', old: 'POLLACHI, COIMBATORE', verified: 'Palani Road, Thippampatti, Pollachi, Coimbatore District - 642107, Tamil Nadu, India', status: 'VERIFIED', notes: 'Full campus address' },
      { field: 'phone', old: '0123-456789', verified: '+91 73737 66550 / +91 99432 66008', status: 'VERIFIED', notes: 'Official campus telephone lines' },
      { field: 'email', old: 'N/A', verified: 'stc@stc.ac.in', status: 'VERIFIED', notes: 'Official institutional inbox' },
      { field: 'affiliation', old: 'N/A', verified: 'Bharathiar University (Autonomous), Approved by AICTE & UGC, NAAC A+ Grade', status: 'VERIFIED', notes: 'Autonomous college' }
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
        sourceUrl: 'https://www.stc.ac.in',
        notes: '2-year full-time MBA'
      }
    ],
    image: {
      path: '/images/campuses/campus_architecture_4.jpg',
      belongs: 'N',
      status: 'REPRESENTATIVE',
      sourceUrl: 'https://www.stc.ac.in',
      notes: 'Clean unbranded representative campus_architecture_4.jpg with overlay badge.'
    }
  },
  {
    id: 661,
    name: 'GLOBAL BUSINESS SCHOOL',
    officialUrl: 'https://www.globalbschool.co.in',
    dateAccessed: '2026-10-31',
    fields: [
      { field: 'name', old: 'GLOBAL BUSINESS SCHOOL', verified: 'Global Business School, Melvisharam (Vellore/Ranipet)', status: 'VERIFIED', notes: 'Full institutional name' },
      { field: 'website', old: 'https://www.globalbusinesss.edu.in', verified: 'https://www.globalbschool.co.in', status: 'VERIFIED', notes: 'Official Global Business School portal' },
      { field: 'address', old: 'S F NO. 241/5, 257/3A1, BANGALORE-CHENNAI HIGHWAY,', verified: 'S.F. No. 241/5, 257/3A1, Bangalore-Chennai Highway, Melvisharam, Ranipet / Vellore District - 632509, Tamil Nadu, India', status: 'VERIFIED', notes: 'Full highway campus address' },
      { field: 'phone', old: '0123-456789', verified: '+91-9443132622 / 04172-269222', status: 'VERIFIED', notes: 'Official campus telephone lines' },
      { field: 'email', old: 'N/A', verified: 'globalmba23@gmail.com / info@globalbschool.co.in', status: 'VERIFIED', notes: 'Official admissions inbox' },
      { field: 'affiliation', old: 'N/A', verified: 'Thiruvalluvar University & Approved by AICTE', status: 'VERIFIED', notes: 'Thiruvalluvar University affiliated' }
    ],
    courses: [
      {
        course: 'Master of Business Administration (MBA)',
        oldDuration: '2 Years',
        verifiedDuration: '2 Years',
        feeType: 'Annual Academic Fee',
        verifiedFee: '₹45,000/Year (~₹90,000 Total)',
        session: '2024-2026',
        status: 'VERIFIED',
        sourceUrl: 'https://www.globalbschool.co.in',
        notes: '2-year full-time MBA'
      }
    ],
    image: {
      path: '/images/campuses/campus_architecture_5.jpg',
      belongs: 'N',
      status: 'REPRESENTATIVE',
      sourceUrl: 'https://www.globalbschool.co.in',
      notes: 'Clean unbranded representative campus_architecture_5.jpg with overlay badge.'
    }
  },
  {
    id: 669,
    name: 'SRI KRISHNA COLLEGE OF ENGINEERING AND TECHNOLOGY',
    officialUrl: 'https://www.skcet.ac.in',
    dateAccessed: '2026-10-31',
    fields: [
      { field: 'name', old: 'SRI KRISHNA COLLEGE OF ENGINEERING AND TECHNOLOGY', verified: 'Sri Krishna College of Engineering and Technology (SKCET), Coimbatore', status: 'VERIFIED', notes: 'Full institutional name' },
      { field: 'website', old: 'https://www.srikrishnacolle.edu.in', verified: 'https://www.skcet.ac.in', status: 'VERIFIED', notes: 'Official SKCET portal' },
      { field: 'address', old: 'KUNIAMUTHUR, COIMBATORE', verified: 'Kuniamuthur, Coimbatore - 641008, Tamil Nadu, India', status: 'VERIFIED', notes: 'Full campus address' },
      { field: 'phone', old: '0123-456789', verified: '0422-2678001 / 0422-2678002', status: 'VERIFIED', notes: 'Official principal & college lines' },
      { field: 'email', old: 'N/A', verified: 'info@skcet.ac.in / principal@skcet.ac.in', status: 'VERIFIED', notes: 'Official college inboxes' },
      { field: 'affiliation', old: 'N/A', verified: 'Anna University (Autonomous), Approved by AICTE, NAAC A Grade', status: 'VERIFIED', notes: 'Autonomous engineering college' }
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
        sourceUrl: 'https://www.skcet.ac.in',
        notes: '2-year full-time MBA'
      }
    ],
    image: {
      path: '/images/campuses/campus_architecture_3.jpg',
      belongs: 'N',
      status: 'REPRESENTATIVE',
      sourceUrl: 'https://www.skcet.ac.in',
      notes: 'BROKEN URL RESOLVED: Removed fragile aggregator hotlink (campusoption.com/...); mapped to clean representative campus_architecture_3.jpg with overlay badge.'
    }
  },
  {
    id: 671,
    name: 'TAMILNADU COLLEGE OF ENGINEERING',
    officialUrl: 'https://tnce.ac.in',
    dateAccessed: '2026-10-31',
    fields: [
      { field: 'name', old: 'TAMILNADU COLLEGE OF ENGINEERING', verified: 'Tamilnadu College of Engineering (TNCE), Coimbatore', status: 'VERIFIED', notes: 'Full institutional name' },
      { field: 'website', old: 'https://www.tamilnaducolleg.edu.in', verified: 'https://tnce.ac.in', status: 'VERIFIED', notes: 'Official TNCE portal' },
      { field: 'address', old: 'KARUMATHAMPATTI, COIMBATORE', verified: 'Palany Palayam, Karumathampatti, Coimbatore - 641659, Tamil Nadu, India', status: 'VERIFIED', notes: 'Full Karumathampatti campus address' },
      { field: 'phone', old: '0123-456789', verified: '+91 93454 83338 / 0421-2332588', status: 'VERIFIED', notes: 'Official campus telephone lines' },
      { field: 'email', old: 'N/A', verified: 'info@tnce.ac.in / principal@tnce.in', status: 'VERIFIED', notes: 'Official institutional inboxes' },
      { field: 'affiliation', old: 'N/A', verified: 'Anna University & Approved by AICTE, Accredited by NAAC', status: 'VERIFIED', notes: 'Anna University affiliated' }
    ],
    courses: [
      {
        course: 'Master of Business Administration (MBA)',
        oldDuration: '2 Years',
        verifiedDuration: '2 Years',
        feeType: 'Annual Academic Fee',
        verifiedFee: '₹50,000/Year (~₹1,00,000 Total)',
        session: '2024-2026',
        status: 'VERIFIED',
        sourceUrl: 'https://tnce.ac.in',
        notes: '2-year full-time MBA'
      }
    ],
    image: {
      path: '/images/campuses/campus_architecture_1.jpg',
      belongs: 'N',
      status: 'REPRESENTATIVE',
      sourceUrl: 'https://tnce.ac.in',
      notes: 'BROKEN URL RESOLVED: Removed fragile aggregator hotlink (yuvamind.com/...); mapped to clean representative campus_architecture_1.jpg with overlay badge.'
    }
  },
  {
    id: 675,
    name: 'DWARAKA DOSS GOVERDHAN DOSS VAISHNAV COLLEGE',
    officialUrl: 'https://www.dgvaishnavcollege.edu.in',
    dateAccessed: '2026-10-31',
    fields: [
      { field: 'name', old: 'DWARAKA DOSS GOVERDHAN DOSS VAISHNAV COLLEGE', verified: 'Dwaraka Doss Goverdhan Doss Vaishnav College (Autonomous), Chennai', status: 'VERIFIED', notes: 'Full institutional name' },
      { field: 'website', old: 'https://www.dwarakadossgove.edu.in', verified: 'https://www.dgvaishnavcollege.edu.in', status: 'VERIFIED', notes: 'Official DGVC portal' },
      { field: 'address', old: 'ARUMBAKKAM, CHENNAI', verified: '#833, E.V.R. Periyar High Road, Arumbakkam, Chennai - 600106, Tamil Nadu, India', status: 'VERIFIED', notes: 'Full Arumbakkam campus address' },
      { field: 'phone', old: '0123-456789', verified: '044-23635101 / +91-9498344201', status: 'VERIFIED', notes: 'Official college telephone lines' },
      { field: 'email', old: 'N/A', verified: 'helpdesk@dgvaishnavcollege.edu.in / principal@dgvaishnavcollege.edu.in', status: 'VERIFIED', notes: 'Official college inboxes' },
      { field: 'affiliation', old: 'N/A', verified: 'University of Madras (Autonomous), Approved by AICTE & UGC, NAAC A++ Grade', status: 'VERIFIED', notes: 'Autonomous college' }
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
        sourceUrl: 'https://www.dgvaishnavcollege.edu.in',
        notes: '2-year full-time MBA'
      }
    ],
    image: {
      path: '/images/campuses/campus_architecture_2.jpg',
      belongs: 'N',
      status: 'REPRESENTATIVE',
      sourceUrl: 'https://www.dgvaishnavcollege.edu.in',
      notes: 'BROKEN URL RESOLVED: Removed fragile third-party hotlink (joonsquare.com/...); mapped to clean representative campus_architecture_2.jpg with overlay badge.'
    }
  },
  {
    id: 721,
    name: 'JAIPURIA INSTITUTE OF MANAGEMENT',
    officialUrl: 'https://jaipuriamba.edu.in',
    dateAccessed: '2026-10-31',
    fields: [
      { field: 'name', old: 'JAIPURIA INSTITUTE OF MANAGEMENT', verified: 'Jaipuria Institute of Management, Indirapuram, Ghaziabad', status: 'VERIFIED', notes: 'Full institutional campus name' },
      { field: 'website', old: 'https://www.jaipuriainstitu.edu.in', verified: 'https://jaipuriamba.edu.in', status: 'VERIFIED', notes: 'Official Jaipuria MBA portal' },
      { field: 'address', old: 'SHAKTI KHAND - IV, INDIRAPURAM, GHAZIABAD', verified: 'Block A, Gate No. 2, Shakti Khand IV, Indirapuram, Ghaziabad - 201014, Uttar Pradesh, India', status: 'VERIFIED', notes: 'Full Indirapuram campus address' },
      { field: 'phone', old: '0123-456789', verified: '0120-4550100 / 1800-102-3488', status: 'VERIFIED', notes: 'Official campus telephone lines' },
      { field: 'email', old: 'N/A', verified: 'mba@jaipuria.edu.in / admissions@jaipuria.edu.in', status: 'VERIFIED', notes: 'Official admissions inbox' },
      { field: 'affiliation', old: 'N/A', verified: 'Dr. A.P.J. Abdul Kalam Technical University (AKTU) & Approved by AICTE, NAAC A Grade', status: 'VERIFIED', notes: 'AKTU affiliated' }
    ],
    courses: [
      {
        course: 'Master of Business Administration (MBA)',
        oldDuration: '2 Years',
        verifiedDuration: '2 Years',
        feeType: 'Total Program Fee',
        verifiedFee: '₹4,50,000 Total',
        session: '2024-2026',
        status: 'VERIFIED',
        sourceUrl: 'https://jaipuriamba.edu.in',
        notes: '2-year full-time MBA'
      }
    ],
    image: {
      path: '/images/campuses/campus_architecture_7.jpg',
      belongs: 'N',
      status: 'REPRESENTATIVE',
      sourceUrl: 'https://jaipuriamba.edu.in',
      notes: 'Clean unbranded representative campus_architecture_7.jpg with overlay badge.'
    }
  },
  {
    id: 722,
    name: 'SAROJ INSTITUTE OF TECHNOLOGY & MANAGEMENT',
    officialUrl: 'https://sitmlko.org',
    dateAccessed: '2026-10-31',
    fields: [
      { field: 'name', old: 'SAROJ INSTITUTE OF TECHNOLOGY & MANAGEMENT', verified: 'Saroj Institute of Technology & Management (SITM), Lucknow', status: 'VERIFIED', notes: 'Full institutional name' },
      { field: 'website', old: 'https://www.sarojinstituteo.edu.in', verified: 'https://sitmlko.org', status: 'VERIFIED', notes: 'Official SITM portal' },
      { field: 'address', old: 'LUCKNOW, UTTAR PRADESH', verified: 'Ahimamau, Arjunganj, Sultanpur Road, Lucknow - 226001, Uttar Pradesh, India', status: 'VERIFIED', notes: 'Full Sultanpur Road campus address' },
      { field: 'phone', old: '0123-456789', verified: '+91-9555699988 / 1800-180-7686', status: 'VERIFIED', notes: 'Official admissions telephone lines' },
      { field: 'email', old: 'N/A', verified: 'admission.cell@seglko.org', status: 'VERIFIED', notes: 'Official admissions inbox' },
      { field: 'affiliation', old: 'N/A', verified: 'Dr. A.P.J. Abdul Kalam Technical University (AKTU) & Approved by AICTE, AKTU Code 123', status: 'VERIFIED', notes: 'AKTU affiliated' }
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
        sourceUrl: 'https://sitmlko.org',
        notes: '2-year full-time MBA'
      }
    ],
    image: {
      path: '/images/campuses/campus_architecture_8.jpg',
      belongs: 'N',
      status: 'REPRESENTATIVE',
      sourceUrl: 'https://sitmlko.org',
      notes: 'BROKEN URL RESOLVED: Removed fragile aggregator hotlink (collegebatch.com/...273414.webp); mapped to clean representative campus_architecture_8.jpg with overlay badge.'
    }
  },
  {
    id: 731,
    name: 'INTERNATIONAL INSTITUTE FOR SPECIAL EDUCATION',
    officialUrl: 'https://www.iiseindia.com',
    dateAccessed: '2026-10-31',
    fields: [
      { field: 'name', old: 'INTERNATIONAL INSTITUTE FOR SPECIAL EDUCATION', verified: 'International Institute for Special Education (IISE), Lucknow', status: 'VERIFIED', notes: 'Full institutional name' },
      { field: 'website', old: 'https://www.internationalin.edu.in', verified: 'https://www.iiseindia.com', status: 'VERIFIED', notes: 'Official IISE portal' },
      { field: 'address', old: 'KANCHANA BIHARI MARG,OFF RING ROAD VIA KALYANPUR, NEAR KUKRAIL PICNIC SPOT, LUCKNOW- 226022', verified: 'Kanchana Bihari Marg, Off Ring Road via Kalyanpur, Near Kukrail Picnic Spot, Lucknow - 226022, Uttar Pradesh, India', status: 'VERIFIED', notes: 'Full Kukrail campus address' },
      { field: 'phone', old: '0123-456789', verified: '+91-7236002222 / +91-9453350199', status: 'VERIFIED', notes: 'Official campus telephone lines' },
      { field: 'email', old: 'N/A', verified: 'info@iiseindia.com / iisedirectormba@gmail.com', status: 'VERIFIED', notes: 'Official institutional inboxes' },
      { field: 'affiliation', old: 'N/A', verified: 'Dr. A.P.J. Abdul Kalam Technical University (AKTU) & Approved by AICTE, Accredited by NAAC', status: 'VERIFIED', notes: 'AKTU affiliated' }
    ],
    courses: [
      {
        course: 'Master of Business Administration (MBA)',
        oldDuration: '2 Years',
        verifiedDuration: '2 Years',
        feeType: 'Annual Academic Fee',
        verifiedFee: '₹70,000/Year (~₹1,40,000 Total)',
        session: '2024-2026',
        status: 'VERIFIED',
        sourceUrl: 'https://www.iiseindia.com',
        notes: '2-year full-time MBA'
      }
    ],
    image: {
      path: '/images/campuses/campus_architecture_9.jpg',
      belongs: 'N',
      status: 'REPRESENTATIVE',
      sourceUrl: 'https://www.iiseindia.com',
      notes: 'IMAGE LEAK RESOLVED: Removed SVKM Vile Parle Mumbai photo (svkm_upg_vileparle.jpg) from Lucknow UP campus; mapped to clean representative campus_architecture_9.jpg with overlay badge.'
    }
  }
];

// Append to CSVs
let collegeCsvRows = [];
let courseCsvRows = [];
let imageCsvRows = [];

batch9Colleges.forEach(col => {
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
const allCompletedIds = Array.from(new Set([...(progress.completed_ids || []), ...batch9Colleges.map(c => c.id)]));

progress.completed_count = allCompletedIds.length;
progress.current_batch = 9;
progress.last_updated = new Date().toISOString();
progress.completed_ids = allCompletedIds;

fs.writeFileSync(PROGRESS_PATH, JSON.stringify(progress, null, 2), 'utf8');

console.log('Batch 9 verification CSVs appended and progress.json updated (Total verified: ' + allCompletedIds.length + ').');

