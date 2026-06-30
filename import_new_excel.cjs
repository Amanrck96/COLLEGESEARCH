const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');

const excelPath = 'C:\\Users\\amanr\\Downloads\\College_Data_Updated_Images.xlsx';
const jsonPath = path.join(__dirname, 'public', 'siteData.json');

try {
  // Read Excel
  console.log('Reading Excel file...');
  const workbook = xlsx.readFile(excelPath);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const rawData = xlsx.utils.sheet_to_json(worksheet);

  console.log(`Found ${rawData.length} rows in Excel.`);

  // Read JSON
  console.log('Reading siteData.json...');
  const jsonData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  let maxId = 0;
  if (jsonData.colleges && jsonData.colleges.length > 0) {
    maxId = Math.max(...jsonData.colleges.map(c => parseInt(c.id) || 0));
  } else {
    jsonData.colleges = [];
  }

  console.log(`Current max college ID: ${maxId}`);

  let added = 0;
  rawData.forEach((item, index) => {
    // Skip empty rows
    if (!item['Name']) return;

    maxId++;
    added++;
    
    // Parse images from comma-separated string
    let images = [];
    if (item['images']) {
      images = item['images'].split(',').map(img => img.trim()).filter(img => img.length > 0);
    }
    
    // Fallback images if none provided
    if (images.length === 0) {
      images = [
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=400",
        "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&q=80&w=400",
        "https://images.unsplash.com/photo-1590408546194-e3fb4b917531?auto=format&fit=crop&q=80&w=400"
      ];
    }
    
    // Build courses array
    const courses = [];
    
    if (item['Course Name 1']) {
      courses.push({
        title: item['Course Name 1'],
        duration: item['Division 1'] === 'DIPLOMA' ? '3 Years' : '4 Years',
        fees: "₹2.5 Lakhs",
        eligibility: "10+2 / Graduation",
        type: item['Course Type 1'] || 'General',
        intake: item['Intake 1'] || 60
      });
    }
    
    if (item['Course Name 2']) {
      courses.push({
        title: item['Course Name 2'],
        duration: item['Division 2'] === 'DIPLOMA' ? '3 Years' : '4 Years',
        fees: "₹2.5 Lakhs",
        eligibility: "10+2 / Graduation",
        type: item['Course Type 2'] || 'General',
        intake: item['Intake 2'] || 60
      });
    }
    
    // If no courses, add a default one
    if (courses.length === 0) {
      courses.push({
        title: 'General Course',
        duration: '4 Years',
        fees: '₹2.5 Lakhs',
        eligibility: '10+2 / Graduation'
      });
    }

    const newCollege = {
      id: maxId,
      name: item['Name'],
      shortName: item['Short Name'] || item['Name'].substring(0, 5).toUpperCase(),
      location: item['Location (District)'] || 'India',
      state: item['State'] || 'Unknown',
      address: item['Address'] || item['Location (District)'] || 'Unknown',
      phone: "0123-456789",
      website: "http://www.college.edu",
      rating: 4.5,
      reviews: Math.floor(Math.random() * 500) + 50,
      type: 'Private',
      about: `Welcome to ${item['Name']}, a premier institute. We offer world-class education and facilities for our students. Our campus is equipped with modern infrastructure and highly experienced faculty.`,
      ranking: Math.floor(Math.random() * 100) + 1,
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      map_url: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item['Name'] + ' ' + item['State'])}`,
      fees: "₹2.5 Lakhs",
      exams: "Direct Admission",
      img: images[0],
      gallery: images,
      affiliation: '',
      courses: courses,
      highestPackage: "₹12 LPA",
      averagePackage: "₹6 LPA",
      placements: "95%"
    };

    jsonData.colleges.push(newCollege);
    
    // Progress indicator
    if (added % 100 === 0) {
      console.log(`Processed ${added} colleges...`);
    }
  });

  console.log(`Writing ${added} new colleges to siteData.json...`);
  fs.writeFileSync(jsonPath, JSON.stringify(jsonData, null, 2), 'utf8');
  console.log('Import completed successfully!');

} catch (error) {
  console.error("Error during import:", error);
}
