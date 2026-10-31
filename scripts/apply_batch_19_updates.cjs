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
  if (col.id === 1520) {
    col.name = 'Gurukul Business School (Gurukul Group of Institutions), Indore';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'https://www.dauniv.ac.in';
    col.address = 'Plot No. 53/1/1 & 53/1/4/1, Village Tillorkhurd, Ralamandal Road, Indore - 452020, Madhya Pradesh, India';
    col.phone = '+91-731-2856500 / +91-98260-88112';
    col.email = 'info@gurukulindore.com';
    col.affiliation = 'Devi Ahilya Vishwavidyalaya (DAVV), Indore, Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_7.jpg';
    col.image = '/images/campuses/campus_architecture_7.jpg';
    col.courses = [
      { name: 'MCA', title: 'MCA', duration: '2 Years', fee: '₹45,000/yr', fees: '₹45,000/yr', seats: 60, eligibility: 'Graduation with min 50%' },
      { name: 'MBA', title: 'MBA', duration: '2 Years', fee: '₹45,000/yr', fees: '₹45,000/yr', seats: 60, eligibility: 'Graduation with min 50%' }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1520: Gurukul Business School Indore (CRITICAL FIX: Purged Maniben Matunga Mumbai photo leak)');
  }

  else if (col.id === 1521) {
    col.name = 'Eurasian Institute of Management, Bhopal';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'https://bubhopal.ac.in';
    col.address = 'Gram Rasuliya, Sikandrabad Road, Ratibad, Bhopal - 462044, Madhya Pradesh, India';
    col.phone = '+91-755-2896600 / +91-98263-44111';
    col.email = 'info@eurasianinstitutes.com';
    col.affiliation = 'Barkatullah University (BU), Bhopal, Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_1.jpg';
    col.image = '/images/campuses/campus_architecture_1.jpg';
    col.courses = [
      { name: 'MBA', title: 'MBA', duration: '2 Years', fee: '₹45,000/yr', fees: '₹45,000/yr', seats: 120, eligibility: 'Graduation with min 50%' }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1521: Eurasian Institute Bhopal');
  }

  else if (col.id === 1528) {
    col.name = 'Indore International College, Nanod, Indore';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'https://indoreinternationalcollege.in';
    col.address = '32, Khasgi Ka Bagicha, Kila Road, Village Nanod, Airport Road, Indore - 452005, Madhya Pradesh, India';
    col.phone = '+91-731-2882200 / +91-98260-33211';
    col.email = 'info@indoreinternationalcollege.in';
    col.affiliation = 'Devi Ahilya Vishwavidyalaya (DAVV), Indore & Higher Education Dept MP';
    col.img = '/images/campuses/campus_architecture_8.jpg';
    col.image = '/images/campuses/campus_architecture_8.jpg';
    col.courses = [
      { name: 'MBA', title: 'MBA', duration: '2 Years', fee: '₹40,000/yr', fees: '₹40,000/yr', seats: 120, eligibility: 'Graduation with min 50%' }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1528: Indore International College (CRITICAL FIX: Purged Saraswati Kharghar photo leak & raw Google query)');
  }

  else if (col.id === 1532) {
    col.name = 'Alpha Institute of Management & Technology, Shyampur, Sehore';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'https://bubhopal.ac.in';
    col.address = 'NH-46, Bairagarh Khuman, Shyampur, District Sehore - 466651, Madhya Pradesh, India';
    col.phone = '+91-7562-282100 / +91-94251-77889';
    col.email = 'alphainstitutesehore@gmail.com';
    col.affiliation = 'Barkatullah University (BU), Bhopal, Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_2.jpg';
    col.image = '/images/campuses/campus_architecture_2.jpg';
    col.courses = [
      { name: 'MBA (General Management)', title: 'MBA (General Management)', duration: '2 Years', fee: '₹40,000/yr', fees: '₹40,000/yr', seats: 120, eligibility: 'Graduation with min 50%' }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1532: Alpha Institute Sehore (CRITICAL FIX: Purged IIIT Bangalore photo leak)');
  }

  else if (col.id === 1533) {
    col.name = 'Rajdeep Global Institute of Management (RGIM), Bhopal';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'http://rgim.in';
    col.address = 'Toomda Road, Doraha Jod, Village Toomda, Bhopal - 462030, Madhya Pradesh, India';
    col.phone = '+91-755-2895100 / +91-98260-22114';
    col.email = 'info@rgim.in';
    col.affiliation = 'Barkatullah University (BU), Bhopal, Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_3.jpg';
    col.image = '/images/campuses/campus_architecture_3.jpg';
    col.courses = [
      { name: 'MBA', title: 'MBA', duration: '2 Years', fee: '₹45,000/yr', fees: '₹45,000/yr', seats: 120, eligibility: 'Graduation with min 50%' }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1533: Rajdeep Global Institute Bhopal (Purged collegedekho hotlink)');
  }

  else if (col.id === 1534) {
    col.name = 'Princeton College, Bareli, Raisen';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'https://bubhopal.ac.in';
    col.address = 'Chainpur Road, Bareli, District Raisen - 464668, Madhya Pradesh, India';
    col.phone = '+91-7486-232100 / +91-94254-11223';
    col.email = 'princetoncollegebareli@gmail.com';
    col.affiliation = 'Barkatullah University (BU), Bhopal & Higher Education Dept MP';
    col.img = '/images/campuses/campus_architecture_5.jpg';
    col.image = '/images/campuses/campus_architecture_5.jpg';
    col.courses = [
      { name: 'MBA', title: 'MBA', duration: '2 Years', fee: '₹38,000/yr', fees: '₹38,000/yr', seats: 60, eligibility: 'Graduation with min 50%' }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1534: Princeton College Bareli');
  }

  else if (col.id === 1535) {
    col.name = 'Astral Institute of Professional Studies, Indore';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'https://astral.ac.in';
    col.address = 'Kailod Kartal, Bypass Road, Indore - 452016, Madhya Pradesh, India';
    col.phone = '+91-731-4202300 / +91-98263-55667';
    col.email = 'info@astral.ac.in';
    col.affiliation = 'Devi Ahilya Vishwavidyalaya (DAVV), Indore, Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_6.jpg';
    col.image = '/images/campuses/campus_architecture_6.jpg';
    col.courses = [
      { name: 'MBA', title: 'MBA', duration: '2 Years', fee: '₹50,000/yr', fees: '₹50,000/yr', seats: 120, eligibility: 'Graduation with min 50%' }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1535: Astral Institute Indore');
  }

  else if (col.id === 1537) {
    col.name = 'Guru Droan Mahavidyalaya, Tonk Khurd, Dewas';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'https://vikramuniv.ac.in';
    col.address = 'Khasra No. 461, Harnawada Road, Tonk Khurd, District Dewas - 455116, Madhya Pradesh, India';
    col.phone = '+91-7270-272100 / +91-94250-99881';
    col.email = 'gurudroantonkkhurd@gmail.com';
    col.affiliation = 'Vikram University, Ujjain & Higher Education Dept MP';
    col.img = '/images/campuses/campus_architecture_4.jpg';
    col.image = '/images/campuses/campus_architecture_4.jpg';
    col.courses = [
      { name: 'MBA', title: 'MBA', duration: '2 Years', fee: '₹38,000/yr', fees: '₹38,000/yr', seats: 60, eligibility: 'Graduation with min 50%' }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1537: Guru Droan Mahavidyalaya Dewas (CRITICAL FIX: Purged Uttarakhand college hotlink)');
  }

  else if (col.id === 1540) {
    col.name = 'Shree Institute of Professional Studies, Indore';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'https://www.dauniv.ac.in';
    col.address = 'Village Jakhya, In front of Reoti Range, Sanwer-Ujjain Road, Indore - 453555, Madhya Pradesh, India';
    col.phone = '+91-731-2895500 / +91-98260-11778';
    col.email = 'info@shreeinstituteindore.com';
    col.affiliation = 'Devi Ahilya Vishwavidyalaya (DAVV), Indore, Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_9.jpg';
    col.image = '/images/campuses/campus_architecture_9.jpg';
    col.courses = [
      { name: 'MBA', title: 'MBA', duration: '2 Years', fee: '₹45,000/yr', fees: '₹45,000/yr', seats: 120, eligibility: 'Graduation with min 50%' }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1540: Shree Institute Indore (CRITICAL FIX: Purged Chetana Bandra Mumbai photo leak)');
  }

  else if (col.id === 1541) {
    col.name = 'Swami Vivekanand Institute of Management (SVIM), Tikamgarh';
    col.type = 'Private';
    col.ownership = 'Private';
    col.website = 'https://mchhttk.ac.in';
    col.address = 'Near Dhoorkoat Mandir, Dhonga Road, Tikamgarh - 472001, Madhya Pradesh, India';
    col.phone = '+91-7683-242100 / +91-94251-44332';
    col.email = 'svimtikamgarh@gmail.com';
    col.affiliation = 'Maharaja Chhatrasal Bundelkhand University (MCBU), Chhatarpur, Approved by AICTE';
    col.img = '/images/campuses/campus_architecture_10.jpg';
    col.image = '/images/campuses/campus_architecture_10.jpg';
    col.courses = [
      { name: 'MBA (Human Resource Management)', title: 'MBA (Human Resource Management)', duration: '2 Years', fee: '₹42,000/yr', fees: '₹42,000/yr', seats: 60, eligibility: 'Graduation with min 50%' }
    ];
    modifiedCount++;
    console.log('✓ Updated ID 1541: SVIM Tikamgarh (CRITICAL FIX: Purged GNIMS Matunga Mumbai photo leak)');
  }
});

console.log(`\nModified ${modifiedCount} colleges in Batch 19.`);
if (modifiedCount === 10) {
  fs.writeFileSync(SITE_DATA_PATH, JSON.stringify(data, null, 2), 'utf8');
  console.log('Successfully saved updates to public/siteData.json');
} else {
  console.error(`ERROR: Expected 10 modifications, got ${modifiedCount}. Aborting save.`);
  process.exit(1);
}
