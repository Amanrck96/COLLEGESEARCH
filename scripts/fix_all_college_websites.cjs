const fs = require('fs');
const path = require('path');

const siteDataPath = path.resolve('public/siteData.json');
const siteData = JSON.parse(fs.readFileSync(siteDataPath, 'utf8'));
const colleges = siteData.colleges || [];

// Comprehensive verified official domain dictionary
const VERIFIED_MAP = {
  // IITs
  'iit bombay': 'https://www.iitb.ac.in',
  'indian institute of technology bombay': 'https://www.iitb.ac.in',
  'iit delhi': 'https://home.iitd.ac.in',
  'indian institute of technology delhi': 'https://home.iitd.ac.in',
  'iit madras': 'https://www.iitm.ac.in',
  'indian institute of technology madras': 'https://www.iitm.ac.in',
  'iit kharagpur': 'https://www.iitkgp.ac.in',
  'indian institute of technology kharagpur': 'https://www.iitkgp.ac.in',
  'iit kanpur': 'https://www.iitk.ac.in',
  'indian institute of technology kanpur': 'https://www.iitk.ac.in',
  'iit roorkee': 'https://www.iitr.ac.in',
  'indian institute of technology roorkee': 'https://www.iitr.ac.in',
  'iit guwahati': 'https://www.iitg.ac.in',
  'indian institute of technology guwahati': 'https://www.iitg.ac.in',
  'iit hyderabad': 'https://www.iith.ac.in',
  'indian institute of technology hyderabad': 'https://www.iith.ac.in',
  'iit bhu': 'https://www.iitbhu.ac.in',
  'iit varanasi': 'https://www.iitbhu.ac.in',
  'indian institute of technology varanasi': 'https://www.iitbhu.ac.in',
  'iit indore': 'https://www.iiti.ac.in',
  'indian institute of technology indore': 'https://www.iiti.ac.in',
  'iit gandhinagar': 'https://www.iitgn.ac.in',
  'indian institute of technology gandhinagar': 'https://www.iitgn.ac.in',
  'iit ropar': 'https://www.iitrpr.ac.in',
  'indian institute of technology ropar': 'https://www.iitrpr.ac.in',
  'iit patna': 'https://www.iitp.ac.in',
  'indian institute of technology patna': 'https://www.iitp.ac.in',
  'iit mandi': 'https://www.iitmandi.ac.in',
  'indian institute of technology mandi': 'https://www.iitmandi.ac.in',
  'iit jodhpur': 'https://www.iitj.ac.in',
  'indian institute of technology jodhpur': 'https://www.iitj.ac.in',
  'iit tirupati': 'https://www.iittp.ac.in',
  'indian institute of technology tirupati': 'https://www.iittp.ac.in',
  'iit palakkad': 'https://www.iitpkd.ac.in',
  'indian institute of technology palakkad': 'https://www.iitpkd.ac.in',
  'iit bhilai': 'https://www.iitbhilai.ac.in',
  'indian institute of technology bhilai': 'https://www.iitbhilai.ac.in',
  'iit goa': 'https://www.iitgoa.ac.in',
  'indian institute of technology goa': 'https://www.iitgoa.ac.in',
  'iit jammu': 'https://www.iitjammu.ac.in',
  'indian institute of technology jammu': 'https://www.iitjammu.ac.in',
  'iit dharwad': 'https://www.iitdh.ac.in',
  'indian institute of technology dharwad': 'https://www.iitdh.ac.in',
  'iit ism dhanbad': 'https://www.iitism.ac.in',
  'indian institute of technology ism dhanbad': 'https://www.iitism.ac.in',

  // NITs
  'nit trichy': 'https://www.nitt.edu',
  'national institute of technology tiruchirappalli': 'https://www.nitt.edu',
  'nit surathkal': 'https://www.nitk.ac.in',
  'national institute of technology karnataka': 'https://www.nitk.ac.in',
  'nit rourkela': 'https://www.nitrkl.ac.in',
  'national institute of technology rourkela': 'https://www.nitrkl.ac.in',
  'nit warangal': 'https://www.nitw.ac.in',
  'national institute of technology warangal': 'https://www.nitw.ac.in',
  'nit calicut': 'https://www.nitc.ac.in',
  'national institute of technology calicut': 'https://www.nitc.ac.in',
  'vnit nagpur': 'https://www.vnit.ac.in',
  'visvesvaraya national institute of technology': 'https://www.vnit.ac.in',
  'mnit jaipur': 'https://www.mnit.ac.in',
  'malaviya national institute of technology': 'https://www.mnit.ac.in',
  'mnnit allahabad': 'https://www.mnnit.ac.in',
  'motilal nehru national institute of technology': 'https://www.mnnit.ac.in',
  'nit kurukshetra': 'https://www.nitkkr.ac.in',
  'national institute of technology kurukshetra': 'https://www.nitkkr.ac.in',
  'nit durgapur': 'https://nitdgp.ac.in',
  'national institute of technology durgapur': 'https://nitdgp.ac.in',
  'svnit surat': 'https://www.svnit.ac.in',
  'sardar vallabhbhai national institute of technology': 'https://www.svnit.ac.in',
  'nit silchar': 'http://www.nits.ac.in',
  'national institute of technology silchar': 'http://www.nits.ac.in',
  'nit patna': 'https://www.nitp.ac.in',
  'national institute of technology patna': 'https://www.nitp.ac.in',
  'nit jalandhar': 'https://www.nitj.ac.in',
  'dr b r ambedkar national institute of technology': 'https://www.nitj.ac.in',
  'nit meghalaya': 'https://www.nitm.ac.in',
  'national institute of technology meghalaya': 'https://www.nitm.ac.in',
  'nit raipur': 'http://www.nitrr.ac.in',
  'national institute of technology raipur': 'http://www.nitrr.ac.in',
  'nit srinagar': 'https://nitsri.ac.in',
  'national institute of technology srinagar': 'https://nitsri.ac.in',
  'nit bhopal': 'https://www.manit.ac.in',
  'manit bhopal': 'https://www.manit.ac.in',
  'maulana azad national institute of technology': 'https://www.manit.ac.in',
  'nit agartala': 'https://www.nita.ac.in',
  'national institute of technology agartala': 'https://www.nita.ac.in',
  'nit goa': 'https://www.nitgoa.ac.in',
  'national institute of technology goa': 'https://www.nitgoa.ac.in',
  'nit jamshedpur': 'https://www.nitjsr.ac.in',
  'national institute of technology jamshedpur': 'https://www.nitjsr.ac.in',
  'nit manipur': 'https://www.nitmanipur.ac.in',
  'national institute of technology manipur': 'https://www.nitmanipur.ac.in',
  'nit hamirpur': 'https://nith.ac.in',
  'national institute of technology hamirpur': 'https://nith.ac.in',
  'nit uttarakhand': 'https://nituk.ac.in',
  'national institute of technology uttarakhand': 'https://nituk.ac.in',
  'nit puducherry': 'https://www.nitpy.ac.in',
  'national institute of technology puducherry': 'https://www.nitpy.ac.in',
  'nit arunachal pradesh': 'https://www.nitap.ac.in',
  'national institute of technology arunachal pradesh': 'https://www.nitap.ac.in',
  'nit sikkim': 'https://nitsikkim.ac.in',
  'national institute of technology sikkim': 'https://nitsikkim.ac.in',
  'nit delhi': 'https://nitdelhi.ac.in',
  'national institute of technology delhi': 'https://nitdelhi.ac.in',
  'nit mizoram': 'https://www.nitmz.ac.in',
  'national institute of technology mizoram': 'https://www.nitmz.ac.in',
  'nit nagaland': 'https://nitnagaland.ac.in',
  'national institute of technology nagaland': 'https://nitnagaland.ac.in',
  'nit andhra pradesh': 'https://www.nitandhra.ac.in',
  'national institute of technology andhra pradesh': 'https://www.nitandhra.ac.in',
  'iiest shibpur': 'https://www.iiests.ac.in',

  // IIITs
  'iiit hyderabad': 'https://www.iiit.ac.in',
  'international institute of information technology hyderabad': 'https://www.iiit.ac.in',
  'iiit bangalore': 'https://www.iiitb.ac.in',
  'international institute of information technology bangalore': 'https://www.iiitb.ac.in',
  'iiit allahabad': 'https://www.iiita.ac.in',
  'indian institute of information technology allahabad': 'https://www.iiita.ac.in',
  'iiit delhi': 'https://www.iiitd.ac.in',
  'indraprastha institute of information technology delhi': 'https://www.iiitd.ac.in',
  'iiitdm jabalpur': 'https://www.iiitdmj.ac.in',
  'iiitdm kancheepuram': 'https://www.iiitdm.ac.in',
  'iiit gwalior': 'https://www.iiitm.ac.in',
  'iiit lucknow': 'https://iiitl.ac.in',
  'iiit pune': 'https://www.iiitp.ac.in',

  // IIMs
  'iim ahmedabad': 'https://www.iima.ac.in',
  'indian institute of management ahmedabad': 'https://www.iima.ac.in',
  'iim bangalore': 'https://www.iimb.ac.in',
  'indian institute of management bangalore': 'https://www.iimb.ac.in',
  'iim calcutta': 'https://www.iimcal.ac.in',
  'indian institute of management calcutta': 'https://www.iimcal.ac.in',
  'iim lucknow': 'https://www.iiml.ac.in',
  'indian institute of management lucknow': 'https://www.iiml.ac.in',
  'iim kozhikode': 'https://www.iimk.ac.in',
  'indian institute of management kozhikode': 'https://www.iimk.ac.in',
  'iim indore': 'https://www.iimidr.ac.in',
  'indian institute of management indore': 'https://www.iimidr.ac.in',
  'iim shillong': 'https://www.iimshillong.ac.in',
  'iim rohtak': 'https://www.iimrohtak.ac.in',
  'iim ranchi': 'https://www.iimranchi.ac.in',
  'iim raipur': 'https://www.iimraipur.ac.in',
  'iim tiruchirappalli': 'https://www.iimtrichy.ac.in',
  'iim trichy': 'https://www.iimtrichy.ac.in',
  'iim kashipur': 'https://www.iimkashipur.ac.in',
  'iim udaipur': 'https://www.iimu.ac.in',
  'iim nagpur': 'https://www.iimnagpur.ac.in',
  'iim visakhapatnam': 'https://www.iimv.ac.in',
  'indian institute of management visakhapatnam': 'https://www.iimv.ac.in',
  'iim bodh gaya': 'https://www.iimbg.ac.in',
  'iim amritsar': 'https://www.iimamritsar.ac.in',
  'iim sambalpur': 'https://www.iimsambalpur.ac.in',
  'iim sirmaur': 'https://www.iimsirmaur.ac.in',
  'iim jammu': 'https://www.iimj.ac.in',
  'iim mumbai': 'https://iimmumbai.ac.in',
  'nitie mumbai': 'https://iimmumbai.ac.in',

  // Medical AIIMS & Others
  'aiims new delhi': 'https://www.aiims.edu',
  'all india institute of medical sciences, delhi': 'https://www.aiims.edu',
  'aiims delhi': 'https://www.aiims.edu',
  'aiims jodhpur': 'https://aiimsjodhpur.edu.in',
  'all india institute of medical sciences jodhpur': 'https://aiimsjodhpur.edu.in',
  'aiims bhopal': 'https://www.aiimsbhopal.edu.in',
  'aiims bhubaneswar': 'https://aiimsbhubaneswar.nic.in',
  'aiims rishikesh': 'https://aiimsrishikesh.edu.in',
  'aiims patna': 'https://aiimspatna.edu.in',
  'aiims raipur': 'https://aiimsraipur.edu.in',
  'aiims nagpur': 'https://aiimsnagpur.edu.in',
  'nimhans bangalore': 'https://nimhans.ac.in',
  'national institute of mental health and neurosciences': 'https://nimhans.ac.in',
  'st johns medical college': 'https://www.stjohns.in',
  'st. john&acirc;&euro;&trade;s national academy of health sciences': 'https://www.stjohns.in',
  'jss medical college': 'https://jssuni.edu.in',
  'adichunchanagiri university': 'https://acu.edu.in',
  'sri devraj urs academy of higher education and research': 'https://sduaher.ac.in',
  'krishnadevaraya college of dental sciences and hospital': 'https://kcdsh.org',
  'chitkara university': 'https://www.chitkara.edu.in',
  'chitkara design school': 'https://www.chitkara.edu.in',
  'jain university': 'https://www.jainuniversity.ac.in',
  'new horizon college of engineering': 'https://newhorizonindia.edu/nhengineering',
  'nhce bangalore': 'https://newhorizonindia.edu/nhengineering',
  'jagan institute of management studies': 'https://www.jimsindia.org',
  'iims pune': 'https://www.iimspune.edu.in',
  'nift delhi': 'https://www.nift.ac.in',
  'nift bangalore': 'https://www.nift.ac.in/bengaluru',
  'nift mumbai': 'https://www.nift.ac.in/mumbai',
  'nlu delhi': 'https://nludelhi.ac.in',
  'national law university delhi': 'https://nludelhi.ac.in',
  'niftem': 'https://niftem.ac.in'
};

const aggregators = ['shiksha.com', 'collegedunia.com', 'careers360.com', 'getmyuni.com', 'jagranjosh.com', 'sarvgyan.com'];

let updatedCount = 0;

colleges.forEach(c => {
  const nameLow = (c.name || '').toLowerCase().trim();
  const webLow = (c.website || '').toLowerCase().trim();

  // 1. Direct verified match
  let matchedDomain = null;
  for (const [key, domain] of Object.entries(VERIFIED_MAP)) {
    if (nameLow === key || nameLow.includes(key) || key.includes(nameLow)) {
      matchedDomain = domain;
      break;
    }
  }

  if (matchedDomain) {
    if (c.website !== matchedDomain) {
      c.website = matchedDomain;
      updatedCount++;
    }
    return;
  }

  // 2. Aggregator or Generic Check
  const isAgg = aggregators.some(a => webLow.includes(a));
  const isGeneric = webLow.includes('college.edu') || webLow.includes('example.com') || webLow.includes('university.edu') || !webLow.startsWith('http');

  if (isAgg || isGeneric) {
    const query = encodeURIComponent((c.name + ' official website ' + (c.location || '') + ' ' + (c.state || '')).trim());
    c.website = 'https://www.google.com/search?q=' + query;
    updatedCount++;
  }
});

fs.writeFileSync(siteDataPath, JSON.stringify(siteData, null, 2), 'utf8');
console.log('Successfully updated ' + updatedCount + ' college websites in public/siteData.json');
