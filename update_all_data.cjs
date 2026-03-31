const xlsx = require('xlsx');
const fs = require('fs');

const excelFilePath = 'C:\\Users\\amanr\\Downloads\\College Data_AMAN .xlsm';
const jsonOutputPath = 'c:\\Users\\amanr\\collegesearch\\src\\data\\siteData.json';

try {
  const workbook = xlsx.readFile(excelFilePath);
  const worksheet = workbook.Sheets['Sheet2'];
  const rawData = xlsx.utils.sheet_to_json(worksheet);

  const images = [
    "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1590408546194-e3fb4b917531?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=400"
  ];

  const mappedColleges = rawData.map((item, index) => {
    const name = String(item['Name'] || 'College Name').trim();
    const location = String(item['Location'] || 'India').trim();
    const state = String(item['State'] || 'India').trim();
    const address = String(item['Address'] || location).trim();
    const phone = String(item['Phone'] || '0123-456789').trim();
    const website = String(item['Website'] || 'http://www.college.edu').trim();
    const rating = parseFloat(item['Rating'] || (Math.random() * (5.0 - 4.2) + 4.2).toFixed(1));
    const reviews = parseInt(item['Reviews'] || Math.floor(Math.random() * 2000) + 100);
    const category = String(item['Category'] || 'Private').trim();
    const about = String(item['About'] || `Welcome to ${name}, a premier institute located in ${location}. We offer world-class education and facilities for our students. Our campus is equipped with modern infrastructure and highly experienced faculty.`).trim();
    
    // Fallback images if not in data
    let collegeImages = images.slice(0, 6);
    if (item['images']) {
      const customImgs = String(item['images']).split(',').map(s => s.trim()).filter(s => s.startsWith('http'));
      if (customImgs.length > 0) collegeImages = customImgs;
    }

    // Dynamic Courses
    const courses = [];
    if (item['Course Name 1']) {
        courses.push({
            title: String(item['Course Name 1']).trim(),
            duration: item['Duration 1'] || '2 Years',
            fees: item['Fee 1'] || '₹2.5 Lakhs',
            eligibility: item['Eligibility 1'] || 'Graduation with 50%'
        });
    }
    if (item['Course Name 2']) {
        courses.push({
            title: String(item['Course Name 2']).trim(),
            duration: item['Duration 2'] || '4 Years',
            fees: item['Fee 2'] || '₹8.5 Lakhs',
            eligibility: item['Eligibility 2'] || '10+2 with 60%'
        });
    }
    // Simple fallback if no courses found
    if (courses.length === 0) {
        courses.push({
            title: "Bachelor of Business Administration (BBA)",
            duration: "3 Years",
            fees: "₹4.5 Lakhs",
            eligibility: "10+2 with 50%"
        });
    }

    return {
      id: index + 1,
      name,
      shortName: item['Short Name'] || name.split(' ').map(w => w[0]).join('').toUpperCase(),
      location,
      state,
      address,
      phone,
      website: website.startsWith('http') ? website : `http://${website}`,
      rating,
      reviews,
      type: category,
      about,
      ranking: parseInt(item['Ranking'] || Math.floor(Math.random() * 100) + 1),
      facebook: item['facebook'] || '#',
      instagram: item['instagram'] || '#',
      linkedin: item['linkedin'] || '#',
      map_url: item['map_url'] || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name + ' ' + location)}`,
      fees: item['Fee 1'] || "₹2.5 Lakhs",
      exams: item['Entrance Exam'] || "Direct Admission",
      img: collegeImages[0],
      gallery: collegeImages,
      courses: courses,
      highestPackage: item['Highest Package'] || '₹12 LPA',
      averagePackage: item['Average Package'] || '₹6 LPA',
      placements: item['Placement Percentage'] || '95%'
    };
  });

  // Extract unique exams for the home page
  const examsSet = new Set();
  rawData.forEach(item => {
    if (item['Entrance Exam']) {
        String(item['Entrance Exam']).split(',').forEach(ex => examsSet.add(ex.trim()));
    }
  });
  
  const mappedExams = Array.from(examsSet).slice(0, 10).map((name, i) => ({
    name,
    date: "May 15, 2026",
    level: "National",
    tag: i % 2 === 0 ? "Management" : "Engineering"
  }));

  if (mappedExams.length === 0) {
      mappedExams.push({ name: "JEE Main", date: "Jan 24, 2026", level: "National", tag: "Engineering" });
      mappedExams.push({ name: "CAT 2026", date: "Nov 30, 2026", level: "National", tag: "Management" });
  }

  // Preserve site structure for configuration
  const currentData = JSON.parse(fs.readFileSync(jsonOutputPath, 'utf8'));
  
  const fullData = {
    ...currentData,
    colleges: mappedColleges,
    exams: mappedExams
  };

  fs.writeFileSync(jsonOutputPath, JSON.stringify(fullData, null, 2));
  console.log(`Successfully synced ${mappedColleges.length} colleges and ${mappedExams.length} exams.`);

} catch (error) {
  console.error("Sync Error:", error.message);
}
