const fs = require('fs');
const path = require('path');

const SITE_DATA_PATH = path.join(__dirname, '..', 'public', 'siteData.json');

console.log('Loading siteData.json...');
const data = JSON.parse(fs.readFileSync(SITE_DATA_PATH, 'utf8'));
const isWrapped = Array.isArray(data.colleges);
const colleges = isWrapped ? data.colleges : data;

console.log(`Loaded ${colleges.length} colleges.`);

let modifiedCount = 0;

colleges.forEach(col => {
  if (col.id === 1476) {
    col.name = 'Lakshmi Narain College of Technology (LNCT), Bhopal';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'https://lnct.ac.in';
    col.address = 'Kalchuri Nagar, Raisen Road, Bhopal - 462022, Madhya Pradesh, India';
    col.phone = '+91-7440777111 / 0755-6185300';
    col.email = 'info@lnct.ac.in';
    col.affiliation = 'Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV) & Barkatullah University, Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_1.jpg';
    col.image = '/images/campuses/campus_architecture_1.jpg';
    col.courses = [
      { name: 'MBA', duration: '2 Years', fee: '₹1,25,000/yr', seats: 180 }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1476: LNCT Bhopal (Removed collegebatch webp hotlink & synthetic domain)');
  }

  else if (col.id === 1479) {
    col.name = 'Anushashan Institute of Management (AIM), Katni';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'http://www.anushashangroup.in';
    col.address = 'Gram Kemori, Post Bilhari, Katni District - 483501, Madhya Pradesh, India';
    col.phone = '+91-9425154388 / 07622-262100';
    col.email = 'admissions@anushashan.edu.in';
    col.affiliation = 'Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV) & Rani Durgavati Vishwavidyalaya (RDVV), Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_2.jpg';
    col.image = '/images/campuses/campus_architecture_2.jpg';
    col.courses = [
      { name: 'MBA', duration: '2 Years', fee: '₹50,000/yr', seats: 60 }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1479: AIM Katni (CRITICAL FIX: Purged Sheila Raheja Bandra Mumbai photo leak)');
  }

  else if (col.id === 1483) {
    col.name = 'Sant Hirdaram Institute of Management for Women (SHIM), Bhopal';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'https://www.shim.co.in';
    col.address = 'Lake Road, Sant Hirdaram Nagar (Bairagarh), Bhopal - 462030, Madhya Pradesh, India';
    col.phone = '+91 9424439012 / 0755-4245340';
    col.email = 'shimoffice@gmail.com';
    col.affiliation = 'Barkatullah University, Bhopal & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_3.jpg';
    col.image = '/images/campuses/campus_architecture_3.jpg';
    col.courses = [
      { name: 'MBA (Women)', duration: '2 Years', fee: '₹65,000/yr', seats: 120 }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1483: SHIM Bhopal (CRITICAL FIX: Purged Bunts Sangha Mumbai photo leak)');
  }

  else if (col.id === 1484) {
    col.name = 'Pentium Point College of Management (PPGI), Rewa';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'https://ppgirewa.com';
    col.address = 'Village Hardi, Post Saanw / Semariya Road, Tehsil Huzur, Rewa District - 486001, Madhya Pradesh, India';
    col.phone = '+91-9425178788 / 07662-438035';
    col.email = 'ppcmrewa@gmail.com';
    col.affiliation = 'Awadhesh Pratap Singh University (APSU), Rewa & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_4.jpg';
    col.image = '/images/campuses/campus_architecture_4.jpg';
    col.courses = [
      { name: 'MBA', duration: '2 Years', fee: '₹50,000/yr', seats: 120 }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1484: PPGI Rewa (CRITICAL FIX: Purged Bangalore University photo leak)');
  }

  else if (col.id === 1485) {
    col.name = 'Gomti Nandan Institute of Management and Research (GNiMR), Bina, Sagar';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'https://gnimr.com';
    col.address = 'Gandhi Ward, Bina, Sagar District - 470113, Madhya Pradesh, India';
    col.phone = '+91 91656 09333';
    col.email = 'info@gnimr.com';
    col.affiliation = 'Rani Avanti Bai Lodhi State University / Dr. Harisingh Gour Univ, Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_5.jpg';
    col.image = '/images/campuses/campus_architecture_5.jpg';
    col.courses = [
      { name: 'MBA', duration: '2 Years', fee: '₹50,000/yr', seats: 60 }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1485: GNiMR Bina (CRITICAL FIX: Purged CU Shah Mumbai photo leak)');
  }

  else if (col.id === 1486) {
    col.name = 'Nachiketa College of Business Studies (NCBS), Jabalpur';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'https://ncbsjbp.com';
    col.address = 'JDA Scheme No. 5, Kachnar City Road, Vijay Nagar, Jabalpur - 482001, Madhya Pradesh, India';
    col.phone = '+91 94246 57895 / +91-761-2640222';
    col.email = 'info@ncbsjbp.com';
    col.affiliation = 'Rani Durgavati Vishwavidyalaya (RDVV), Jabalpur & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_6.jpg';
    col.image = '/images/campuses/campus_architecture_6.jpg';
    col.courses = [
      { name: 'MBA', duration: '2 Years', fee: '₹55,000/yr', seats: 120 }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1486: NCBS Jabalpur (CRITICAL FIX: Purged Maniben Nanavati Matunga photo leak)');
  }

  else if (col.id === 1487) {
    col.name = 'Atal Bihari Vajpayee Hindi Vishwavidyalaya (ABVHV), Bhopal';
    col.type = 'Public/Government (State University)';
    col.ownership = 'Government';
    col.website = 'https://www.abvhv.edu.in';
    col.address = 'Gram Mungalia Kot, Sukhi Sewaniya, Vidisha Road, Bhopal - 462038, Madhya Pradesh, India';
    col.phone = '0755-2491051 / 0755-2491052';
    col.email = 'abvhvbpl@gmail.com';
    col.affiliation = 'State University established by Govt of Madhya Pradesh & Recognized by UGC, AICTE';
    col.img = '/images/campuses/campus_architecture_7.jpg';
    col.image = '/images/campuses/campus_architecture_7.jpg';
    col.courses = [
      { name: 'MBA', duration: '2 Years', fee: '₹45,000/yr', seats: 60 }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1487: ABVHV Bhopal (HIGH-IMPACT FIX: Restored MP State Govt University status & purged Atharva Malad photo)');
  }

  else if (col.id === 1490) {
    col.name = 'Divine International Group of Institutions (DIGI), SADA, Gwalior';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'https://divineinternational.org.in';
    col.address = 'Plot No. 13, Block No. 18, Educational Area, SADA, Gwalior West - 474001, Madhya Pradesh, India';
    col.phone = '+91-9303357400 / 0751-4700998';
    col.email = 'divineigi@gmail.com';
    col.affiliation = 'Jiwaji University, Gwalior & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_8.jpg';
    col.image = '/images/campuses/campus_architecture_8.jpg';
    col.courses = [
      { name: 'MBA', duration: '2 Years', fee: '₹50,000/yr', seats: 120 }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1490: DIGI Gwalior (CRITICAL FIX: Purged Koshys Bangalore photo leak & raw search URL)');
  }

  else if (col.id === 1492) {
    col.name = 'Corporate Institute of Management (CIM, Corporate Group of Institutions), Bhopal';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'https://www.corporatebpl.com';
    col.address = 'Hataikheda, Near Patel Nagar, Raisen Road, Bhopal - 462022, Madhya Pradesh, India';
    col.phone = '+91-7773001561 / +91-7771009746';
    col.email = 'corporate@corporatebpl.com';
    col.affiliation = 'Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV) & Barkatullah University, Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_9.jpg';
    col.image = '/images/campuses/campus_architecture_9.jpg';
    col.courses = [
      { name: 'MBA', duration: '2 Years', fee: '₹65,000/yr', seats: 120 }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1492: CIM Bhopal (CRITICAL FIX: Purged GNIMS Matunga Mumbai photo leak)');
  }

  else if (col.id === 1494) {
    col.name = 'M.P. Institute of Fashion and Design, Bhesonda, Bhopal';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'https://bubhopal.ac.in';
    col.address = 'Bhesonda, Garetiya Jod, Bhopal-Berasia Road, Bhopal - 462038, Madhya Pradesh, India';
    col.phone = '+91-7565288499';
    col.email = 'mpinstitutefashionanddesign@gmail.com';
    col.affiliation = 'Barkatullah University, Bhopal & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_1.jpg';
    col.image = '/images/campuses/campus_architecture_1.jpg';
    col.courses = [
      { name: 'MBA', duration: '2 Years', fee: '₹50,000/yr', seats: 60 }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1494: MP Inst of Fashion Bhopal (CRITICAL FIX: Purged RGPV homepage carousel banner hotlink)');
  }
});

console.log(`\nModified ${modifiedCount} colleges in Batch 16.`);
const outputData = isWrapped ? { ...data, colleges } : colleges;
fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(outputData, null, 2), 'utf8');
console.log('Successfully wrote updates to public/siteData.json');

