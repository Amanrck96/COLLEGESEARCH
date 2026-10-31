const fs = require('fs');
const path = require('path');

const siteData = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'public', 'siteData.json'), 'utf-8'));
const cols = siteData.colleges || [];

console.log('Auditing 12,660 records for data completeness and content validity...');

let stats = {
  total: cols.length,
  withOfficialWebsite: 0,
  withValidUrlScheme: 0,
  withHttps: 0,
  withAddress: 0,
  withLocation: 0,
  withValidState: 0,
  withCourses: 0,
  totalCoursesCount: 0,
  withExams: 0,
  withRating: 0,
  withRanking: 0,
  withFacilities: 0,
  withTopRecruiters: 0,
  withPlacements: 0,
  withAbout: 0,
  withLogo: 0,
  withGallery: 0,
  withPhone: 0,
  withEmail: 0,
  allCapsNames: 0,
  testOrPlaceholderNames: 0
};

const knownStates = new Set([
  'andaman & nicobar', 'andhra pradesh', 'arunachal pradesh', 'assam', 'bihar', 'chandigarh', 'chhattisgarh',
  'dadra & nagar haveli', 'delhi', 'delhi ncr', 'goa', 'gujarat', 'haryana', 'himachal pradesh', 'jammu & kashmir',
  'jharkhand', 'karnataka', 'kerala', 'ladakh', 'lakshadweep', 'madhya pradesh', 'maharashtra', 'manipur',
  'meghalaya', 'mizoram', 'nagaland', 'odisha', 'puducherry', 'punjab', 'rajasthan',
  'sikkim', 'tamil nadu', 'telangana', 'tripura', 'uttar pradesh', 'uttarakhand', 'west bengal'
]);

cols.forEach(c => {
  const website = String(c.website || '').trim();
  const address = String(c.address || '').trim();
  const location = String(c.location || '').trim();
  const state = String(c.state || '').trim();
  const exams = String(c.exams || '').trim();
  const about = String(c.about || '').trim();
  const name = String(c.name || '').trim();

  if (website) {
    stats.withOfficialWebsite++;
    if (website.startsWith('http://') || website.startsWith('https://')) stats.withValidUrlScheme++;
    if (website.startsWith('https://')) stats.withHttps++;
  }
  if (address) stats.withAddress++;
  if (location) stats.withLocation++;
  if (state && knownStates.has(state.toLowerCase())) stats.withValidState++;
  if (Array.isArray(c.courses) && c.courses.length > 0) {
    stats.withCourses++;
    stats.totalCoursesCount += c.courses.length;
  }
  if (exams) stats.withExams++;
  if (c.rating !== undefined && c.rating !== null) stats.withRating++;
  if (c.ranking !== undefined && c.ranking !== null) stats.withRanking++;
  if (c.facilities && (Array.isArray(c.facilities) ? c.facilities.length > 0 : String(c.facilities).trim())) stats.withFacilities++;
  if (c.topRecruiters && (Array.isArray(c.topRecruiters) ? c.topRecruiters.length > 0 : String(c.topRecruiters).trim())) stats.withTopRecruiters++;
  if (c.placements || c.averagePackage || c.highestPackage) stats.withPlacements++;
  if (about.length > 20) stats.withAbout++;
  if (c.logo) stats.withLogo++;
  if (Array.isArray(c.gallery) && c.gallery.length > 0) stats.withGallery++;
  if (c.phone) stats.withPhone++;
  if (c.email) stats.withEmail++;

  // Name checks
  if (name.length > 5 && name === name.toUpperCase()) stats.allCapsNames++;
  if (/test|dummy|sample|asdf|qwerty/i.test(name)) stats.testOrPlaceholderNames++;
});

console.log('Results:');
console.log(JSON.stringify(stats, null, 2));
