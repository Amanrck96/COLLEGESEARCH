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
  if (col.id === 656) {
    col.name = 'Vivekanandha Institute of Information and Management Studies (VIIMS), Tiruchengode';
    col.website = 'https://viims.ac.in';
    col.address = 'Elayampalayam, Tiruchengode - TK, Namakkal District, Tamil Nadu - 637205, India';
    col.phone = '+91 94433 16537 / +91 99655 34670';
    col.email = 'mbaprincipal@gmail.com';
    col.affiliation = 'Anna University & Approved by AICTE, Accredited by NAAC';
    col.img = '/images/campuses/campus_architecture_8.jpg';
    col.image = '/images/campuses/campus_architecture_8.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 656: VIIMS Tiruchengode (Removed fragile studyclap hotlink)');
  }

  else if (col.id === 658) {
    col.name = 'Government Arts and Science College, RK Nagar, Chennai';
    col.type = 'Public/Government (State Government College)';
    col.ownership = 'Government';
    col.website = 'https://gascrknagar.co.in';
    col.address = 'No. 183, AA Scheme Road, RK Nagar, Kamarajar Salai, Tondiarpet, Chennai - 600081, Tamil Nadu, India';
    col.phone = '044-25912558';
    col.email = 'principalgascrknagar@gmail.com';
    col.affiliation = 'University of Madras & Approved by UGC, Govt of Tamil Nadu';
    col.img = '/images/campuses/campus_architecture_7.jpg';
    col.image = '/images/campuses/campus_architecture_7.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 658: GASC RK Nagar Chennai (Restored Govt College status & removed Bunts Sangha Mumbai photo)');
  }

  else if (col.id === 660) {
    col.name = 'Sree Saraswathi Thyagaraja College (Autonomous), Pollachi';
    col.website = 'https://www.stc.ac.in';
    col.address = 'Palani Road, Thippampatti, Pollachi, Coimbatore District - 642107, Tamil Nadu, India';
    col.phone = '+91 73737 66550 / +91 99432 66008';
    col.email = 'stc@stc.ac.in';
    col.affiliation = 'Bharathiar University (Autonomous), Approved by AICTE & UGC, NAAC A+ Grade';
    col.img = '/images/campuses/campus_architecture_4.jpg';
    col.image = '/images/campuses/campus_architecture_4.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 660: STC Pollachi');
  }

  else if (col.id === 661) {
    col.name = 'Global Business School, Melvisharam (Vellore/Ranipet)';
    col.website = 'https://www.globalbschool.co.in';
    col.address = 'S.F. No. 241/5, 257/3A1, Bangalore-Chennai Highway, Melvisharam, Ranipet / Vellore District - 632509, Tamil Nadu, India';
    col.phone = '+91-9443132622 / 04172-269222';
    col.email = 'globalmba23@gmail.com';
    col.affiliation = 'Thiruvalluvar University & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_5.jpg';
    col.image = '/images/campuses/campus_architecture_5.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 661: Global Business School Melvisharam');
  }

  else if (col.id === 669) {
    col.name = 'Sri Krishna College of Engineering and Technology (SKCET), Coimbatore';
    col.website = 'https://www.skcet.ac.in';
    col.address = 'Kuniamuthur, Coimbatore - 641008, Tamil Nadu, India';
    col.phone = '0422-2678001 / 0422-2678002';
    col.email = 'info@skcet.ac.in';
    col.affiliation = 'Anna University (Autonomous), Approved by AICTE, NAAC A Grade';
    col.img = '/images/campuses/campus_architecture_3.jpg';
    col.image = '/images/campuses/campus_architecture_3.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 669: SKCET Coimbatore (Removed fragile campusoption hotlink)');
  }

  else if (col.id === 671) {
    col.name = 'Tamilnadu College of Engineering (TNCE), Coimbatore';
    col.website = 'https://tnce.ac.in';
    col.address = 'Palany Palayam, Karumathampatti, Coimbatore - 641659, Tamil Nadu, India';
    col.phone = '+91 93454 83338 / 0421-2332588';
    col.email = 'info@tnce.ac.in';
    col.affiliation = 'Anna University & Approved by AICTE, Accredited by NAAC';
    col.img = '/images/campuses/campus_architecture_1.jpg';
    col.image = '/images/campuses/campus_architecture_1.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 671: TNCE Coimbatore (Removed fragile yuvamind hotlink)');
  }

  else if (col.id === 675) {
    col.name = 'Dwaraka Doss Goverdhan Doss Vaishnav College (Autonomous), Chennai';
    col.website = 'https://www.dgvaishnavcollege.edu.in';
    col.address = '#833, E.V.R. Periyar High Road, Arumbakkam, Chennai - 600106, Tamil Nadu, India';
    col.phone = '044-23635101 / +91-9498344201';
    col.email = 'helpdesk@dgvaishnavcollege.edu.in';
    col.affiliation = 'University of Madras (Autonomous), Approved by AICTE & UGC, NAAC A++ Grade';
    col.img = '/images/campuses/campus_architecture_2.jpg';
    col.image = '/images/campuses/campus_architecture_2.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 675: DG Vaishnav College (Removed fragile joonsquare hotlink)');
  }

  else if (col.id === 721) {
    col.name = 'Jaipuria Institute of Management, Indirapuram, Ghaziabad';
    col.website = 'https://jaipuriamba.edu.in';
    col.address = 'Block A, Gate No. 2, Shakti Khand IV, Indirapuram, Ghaziabad - 201014, Uttar Pradesh, India';
    col.phone = '0120-4550100 / 1800-102-3488';
    col.email = 'mba@jaipuria.edu.in';
    col.affiliation = 'Dr. A.P.J. Abdul Kalam Technical University (AKTU) & Approved by AICTE, NAAC A Grade';
    col.img = '/images/campuses/campus_architecture_7.jpg';
    col.image = '/images/campuses/campus_architecture_7.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 721: Jaipuria Institute Indirapuram Ghaziabad');
  }

  else if (col.id === 722) {
    col.name = 'Saroj Institute of Technology & Management (SITM), Lucknow';
    col.website = 'https://sitmlko.org';
    col.address = 'Ahimamau, Arjunganj, Sultanpur Road, Lucknow - 226001, Uttar Pradesh, India';
    col.phone = '+91-9555699988 / 1800-180-7686';
    col.email = 'admission.cell@seglko.org';
    col.affiliation = 'Dr. A.P.J. Abdul Kalam Technical University (AKTU) & Approved by AICTE, AKTU Code 123';
    col.img = '/images/campuses/campus_architecture_8.jpg';
    col.image = '/images/campuses/campus_architecture_8.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 722: SITM Lucknow (Removed fragile collegebatch hotlink)');
  }

  else if (col.id === 731) {
    col.name = 'International Institute for Special Education (IISE), Lucknow';
    col.website = 'https://www.iiseindia.com';
    col.address = 'Kanchana Bihari Marg, Off Ring Road via Kalyanpur, Near Kukrail Picnic Spot, Lucknow - 226022, Uttar Pradesh, India';
    col.phone = '+91-7236002222 / +91-9453350199';
    col.email = 'info@iiseindia.com';
    col.affiliation = 'Dr. A.P.J. Abdul Kalam Technical University (AKTU) & Approved by AICTE, Accredited by NAAC';
    col.img = '/images/campuses/campus_architecture_9.jpg';
    col.image = '/images/campuses/campus_architecture_9.jpg';
    modifiedCount++;
    console.log('✓ Updated ID 731: IISE Lucknow (Removed SVKM Vile Parle Mumbai photo)');
  }
});

console.log(`\nModified ${modifiedCount} colleges in Batch 9.`);
const outputData = isWrapped ? { ...data, colleges } : colleges;
fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(outputData, null, 2), 'utf8');
console.log('Successfully wrote updates to public/siteData.json');

