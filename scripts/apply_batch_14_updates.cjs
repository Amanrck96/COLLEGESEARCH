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
  if (col.id === 1246) {
    col.name = 'LEAD College (Autonomous), Dhoni, Palakkad';
    col.type = 'Private (Autonomous Institute)';
    col.ownership = 'Private';
    col.website = 'https://www.lead.ac.in';
    col.address = 'Dhoni P.O., Palakkad - 678009, Kerala, India';
    col.phone = '+91 9497713693 / 0491-3036600';
    col.email = 'info@lead.ac.in';
    col.affiliation = 'University of Calicut & Approved by AICTE, NAAC A+ Accredited';
    col.img = '/images/campuses/campus_architecture_1.jpg';
    col.image = '/images/campuses/campus_architecture_1.jpg';
    col.courses = [
      { name: 'MBA', duration: '2 Years', fee: '₹3,50,000/yr', seats: 180 }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1246: LEAD College Dhoni (Fixed raw search URL, undefined course & collegebatch hotlink)');
  }

  else if (col.id === 1253) {
    col.name = 'G. Karunakaran Memorial Co-operative College of Management and Technology (GKMCCMT), Karakulam';
    col.type = 'Private (Co-operative Sector Managed)';
    col.ownership = 'Private';
    col.website = 'https://gkmccmt.in';
    col.address = 'P.B. No. 5, Kakkode, Karakulam P.O., Aruvikkara Road, Thiruvananthapuram - 695564, Kerala, India';
    col.phone = '+91 7559887399 / 0472-2887399';
    col.email = 'directorgkmccmt@gmail.com';
    col.affiliation = 'University of Kerala & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_2.jpg';
    col.image = '/images/campuses/campus_architecture_2.jpg';
    col.courses = [
      { name: 'MBA', duration: '2 Years', fee: '₹1,20,000/yr', seats: 120 }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1253: GKMCCMT Karakulam (CRITICAL FIX: Purged Chetana Bandra Mumbai photo)');
  }

  else if (col.id === 1259) {
    col.name = 'Rural Academy for Management Studies (RAMS by CRAFT), Kuzhuppilly, Kochi';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'https://ramsbschool.org';
    col.address = 'Kuzhuppilly, Ayyampilly P.O., Kochi, Ernakulam District - 682501, Kerala, India';
    col.phone = '+91 9061519222 / 0484-2417444';
    col.email = 'admin@ramsbschool.org';
    col.affiliation = 'Mahatma Gandhi University (MGU), Kottayam & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_9.jpg';
    col.image = '/images/campuses/campus_architecture_9.jpg';
    col.courses = [
      { name: 'MBA', duration: '2 Years', fee: '₹1,15,000/yr', seats: 60 }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1259: RAMS Kuzhuppilly (Fixed synthetic dummy domain & undefined course)');
  }

  else if (col.id === 1272) {
    col.name = 'Gurudev Institute of Management Studies (GIMS), Kadakkal, Kollam';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'http://gimskerala.in';
    col.address = 'Kottapuram, Kadakkal, Elampazhannoor P.O., Kollam District - 691536, Kerala, India';
    col.phone = '+91 70127 01752 / 0474-2424594';
    col.email = 'gimdskdl@gmail.com';
    col.affiliation = 'University of Kerala & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_3.jpg';
    col.image = '/images/campuses/campus_architecture_3.jpg';
    col.courses = [
      { name: 'MBA', duration: '2 Years', fee: '₹95,000/yr', seats: 60 }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1272: GIMS Kadakkal (Fixed raw search URL, undefined course & collegedunia hotlink)');
  }

  else if (col.id === 1276) {
    col.name = 'Marian Academy of Management Studies (MAMS), Kothamangalam';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'https://www.mams.ac.in';
    col.address = 'Marian Village, Puthuppady P.O., Kothamangalam, Ernakulam District - 686673, Kerala, India';
    col.phone = '0485-2816247 / +91 9446209878';
    col.email = 'info@mams.ac.in';
    col.affiliation = 'Mahatma Gandhi University (MGU), Kottayam & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_4.jpg';
    col.image = '/images/campuses/campus_architecture_4.jpg';
    col.courses = [
      { name: 'MBA', duration: '2 Years', fee: '₹1,10,000/yr', seats: 60 }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1276: MAMS Kothamangalam (CRITICAL FIX: Purged COEP Pune photo leak)');
  }

  else if (col.id === 1277) {
    col.name = 'KMCT Institute of Emerging Technology and Management (KMCT IETM), Mukkam, Kozhikode';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'https://www.kmctemergingtechnology.org';
    col.address = 'Near Thoongumpuram Vayanashala, Muthalam, Manassery P.O., Mukkam, Kozhikode - 673602, Kerala, India';
    col.phone = '+91 89430 72000 / 0495-2294700';
    col.email = 'ceet@kmct.org';
    col.affiliation = 'APJ Abdul Kalam Technological University (KTU) & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_6.jpg';
    col.image = '/images/campuses/campus_architecture_6.jpg';
    col.courses = [
      { name: 'MBA', duration: '2 Years', fee: '₹1,25,000/yr', seats: 120 }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1277: KMCT IETM Mukkam (Fixed synthetic dummy domain & collegebatch hotlink)');
  }

  else if (col.id === 1286) {
    col.name = 'Sirajul Huda Institute of Management Studies (SHIMS), Kuttiadi, Kozhikode';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'https://shims.ac.in';
    col.address = 'Sirajul Huda Educational Complex, Kuttiadi, Kozhikode District - 673508, Kerala, India';
    col.phone = '+91 83300 22588 / +91 83048 84588';
    col.email = 'info@shims.ac.in';
    col.affiliation = 'University of Calicut & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_5.jpg';
    col.image = '/images/campuses/campus_architecture_5.jpg';
    col.courses = [
      { name: 'MBA', duration: '2 Years', fee: '₹1,00,000/yr', seats: 60 }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1286: SHIMS Kuttiadi (Fixed synthetic dummy domain & undefined course)');
  }

  else if (col.id === 1287) {
    col.name = 'Leaders College (Leaders Academy of Business), Kadalayi, Kannur';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'https://leaderscollege.in';
    col.address = 'No. 38/1609-1, Leaders College Building, Adikadalayi Road, Kadalayi P.O., Kannur - 670003, Kerala, India';
    col.phone = '+91 90614 31111 / +91 98468 10934';
    col.email = 'info@leaderscollege.in';
    col.affiliation = 'Approved by AICTE & Kannur University';
    col.img = '/images/campuses/campus_architecture_7.jpg';
    col.image = '/images/campuses/campus_architecture_7.jpg';
    col.courses = [
      { name: 'PGDM / MBA', duration: '2 Years', fee: '₹1,30,000/yr', seats: 60 }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1287: Leaders College Kannur (CRITICAL FIX: Purged RIIM Pune photo leak & character encoding bug)');
  }

  else if (col.id === 1292) {
    col.name = 'Mar Thoma College of Management and Technology (MCMAT), Perumbavoor';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'https://www.mcmat.edu.in';
    col.address = 'Asramam Campus, Perumbavoor, Ernakulam District - 683542, Kerala, India';
    col.phone = '+91 9388616626 / +91 9961775991';
    col.email = 'admin@mcmat.edu.in';
    col.affiliation = 'Mahatma Gandhi University (MGU), Kottayam & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_8.jpg';
    col.image = '/images/campuses/campus_architecture_8.jpg';
    col.courses = [
      { name: 'MBA', duration: '2 Years', fee: '₹1,25,000/yr', seats: 120 }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1292: MCMAT Perumbavoor (Fixed raw search URL & wp-content hotlink)');
  }

  else if (col.id === 1294) {
    col.name = 'SNES Institute of Management Studies and Research (SNES IMSAR), Kunnamangalam, Calicut';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'https://imsar.ac.in';
    col.address = 'Chethukadave, Kunnamangalam, Calicut (Kozhikode) - 673571, Kerala, India';
    col.phone = '+91 9496939922 / 0495-2802022';
    col.email = 'snesimsar@gmail.com';
    col.affiliation = 'University of Calicut & Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_1.jpg';
    col.image = '/images/campuses/campus_architecture_1.jpg';
    col.courses = [
      { name: 'MBA', duration: '2 Years', fee: '₹1,20,000/yr', seats: 120 }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1294: SNES IMSAR Calicut (Fixed synthetic dummy domain & kollegeapply hotlink)');
  }
});

console.log(`\nModified ${modifiedCount} colleges in Batch 14.`);
const outputData = isWrapped ? { ...data, colleges } : colleges;
fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(outputData, null, 2), 'utf8');
console.log('Successfully wrote updates to public/siteData.json');

