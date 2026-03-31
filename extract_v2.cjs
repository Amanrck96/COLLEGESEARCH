const xlsx = require('xlsx');

const filePath = 'C:\\Users\\amanr\\Downloads\\College Data_AMAN .xlsm';
try {
  const workbook = xlsx.readFile(filePath);
  const worksheet = workbook.Sheets['Sheet2'];
  const rawData = xlsx.utils.sheet_to_json(worksheet);

  const images = [
    "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=400"
  ];

  const mappedData = rawData.map((item, index) => {
    return {
      id: index + 1,
      name: item['Name'] || 'College Name',
      location: item['Location'] || 'India',
      rating: 4.5,
      ranking: index + 1,
      type: "Private",
      fees: "₹2-5 Lacs",
      exams: "Direct Admission",
      img: images[index % images.length]
    };
  });

  console.log(JSON.stringify(mappedData, null, 2));
} catch (error) {
  process.exit(1);
}
