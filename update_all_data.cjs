const xlsx = require('xlsx');
const fs = require('fs');

const filePath = 'C:\\Users\\amanr\\Downloads\\College Data_AMAN .xlsm';
try {
  const workbook = xlsx.readFile(filePath);
  const worksheet = workbook.Sheets['Sheet2'];
  const rawData = xlsx.utils.sheet_to_json(worksheet);

  const images = [
    "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1590408546194-e3fb4b917531?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1592284988080-87b40b171bc8?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=400"
  ];

  const mappedColleges = rawData.map((item, index) => {
    const name = String(item['Name'] || 'College Name').trim();
    const location = String(item['Location'] || 'India').trim();
    const state = String(item['State'] || 'India').trim();
    const address = String(item['Address'] || location).trim();
    const phone = String(item['Phone'] || '0123-456789').trim();
    const website = String(item['Website'] || 'www.college.edu').trim();
    const rating = parseFloat(item['Rating'] || (Math.random() * (5.0 - 4.0) + 4.0).toFixed(1));
    const reviews = parseInt(item['Reviews'] || Math.floor(Math.random() * 2000) + 100);
    const category = String(item['Category'] || 'Private').trim();
    const about = String(item['About'] || `Welcome to ${name}, a premier institute located in ${location}. We offer world-class education and facilities for our students.`).trim();
    
    // Extract images if available
    let collegeImages = images.slice(0, 6);
    if (item['images']) {
      const customImgs = item['images'].split(',').map(s => s.trim()).filter(s => s.startsWith('http'));
      if (customImgs.length > 0) collegeImages = customImgs;
    }

    // Courses for this college
    const collegeCourses = [];
    if (item['Course Name 1']) collegeCourses.push({ title: String(item['Course Name 1']).trim(), fee: item['Fee 1'] || '₹1L - ₹3L' });
    if (item['Course Name 2']) collegeCourses.push({ title: String(item['Course Name 2']).trim(), fee: item['Fee 2'] || '₹2L - ₹5L' });

    return {
      id: index + 1,
      name,
      location,
      state,
      address,
      phone,
      website,
      rating,
      reviews,
      type: category,
      about,
      facebook: item['facebook'] || '#',
      instagram: item['instagram'] || '#',
      linkedin: item['linkedin'] || '#',
      map_url: item['map_url'] || '#',
      fees: item['Fee 1'] || "₹1L - ₹3L",
      exams: item['Entrance Exam'] || "Direct Admission",
      img: collegeImages[0],
      gallery: collegeImages,
      courses: collegeCourses
    };
  });

  // Unique exams
  const examsSet = new Set();
  rawData.forEach(item => {
    if (item['Entrance Exam']) examsSet.add(String(item['Entrance Exam']).trim());
  });

  const mappedExams = Array.from(examsSet).slice(0, 10).map((name, i) => ({
    name,
    date: "Aug 20, 2026",
    level: "National",
    tag: i % 2 === 0 ? "Engineering" : "Medical"
  }));

  const fullData = {
    colleges: mappedColleges,
    exams: mappedExams
  };

  fs.writeFileSync('c:\\Users\\amanr\\collegesearch\\src\\data\\siteData.json', JSON.stringify(fullData, null, 2));
  console.log("Updated siteData.json with ALL Excel data including Exams and Courses");

} catch (error) {
  console.error(error);
}
