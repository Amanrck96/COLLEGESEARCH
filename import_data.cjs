const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');

const excelPath = 'C:\\Users\\amanr\\Downloads\\Data for Aman.xlsx';
const jsonPath = path.join(__dirname, 'src', 'data', 'siteData.json');

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
    
    // Generate random image from picsum to avoid loremflickr rate limits, or use unsplash
    // We will use standard images for all to be safe, maybe rotating through a list of images.
    const images = [
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1590408546194-e3fb4b917531?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=400"
    ];
    
    const randomImage = images[maxId % images.length];

    const courseName = item['Course anme'] || 'General';
    
    const newCollege = {
      id: maxId,
      name: item['Name'],
      shortName: item['Code'] || item['Name'].substring(0, 5).toUpperCase(),
      location: item['Location'] || 'India',
      state: item['State'] || 'Unknown',
      address: item['Address'] || item['Location'] || 'Unknown',
      phone: "0123-456789",
      website: "http://www.college.edu",
      rating: 4.5,
      reviews: Math.floor(Math.random() * 500) + 50,
      type: item['Type'] || 'Private',
      about: `Welcome to ${item['Name']}, a premier institute. We offer world-class education and facilities for our students. Our campus is equipped with modern infrastructure and highly experienced faculty.`,
      ranking: Math.floor(Math.random() * 100) + 1,
      facebook: "#",
      instagram: "#",
      linkedin: "#",
      map_url: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item['Name'])}`,
      fees: "₹2.5 Lakhs",
      exams: "Direct Admission",
      img: `https://loremflickr.com/400/300/college,campus?random=${maxId}`, // Use api to get distinct random images
      gallery: images,
      affiliation: item['Unicersity'] || '',
      courses: [
        {
          title: courseName,
          duration: "2/4 Years",
          fees: "₹2.5 Lakhs",
          eligibility: "10+2 / Graduation"
        }
      ],
      highestPackage: "₹12 LPA",
      averagePackage: "₹6 LPA",
      placements: "95%"
    };

    jsonData.colleges.push(newCollege);
  });

  console.log(`Writing ${added} new colleges to siteData.json...`);
  fs.writeFileSync(jsonPath, JSON.stringify(jsonData, null, 2), 'utf8');
  console.log('Import completed successfully!');

} catch (error) {
  console.error("Error during import:", error);
}
