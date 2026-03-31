const xlsx = require('xlsx');
const fs = require('fs');

const filePath = 'C:\\Users\\amanr\\Downloads\\College Data_AMAN .xlsm';
try {
  const workbook = xlsx.readFile(filePath);
  const sheetName = 'Sheet2';
  const worksheet = workbook.Sheets[sheetName];
  const rawData = xlsx.utils.sheet_to_json(worksheet);

  const mappedData = rawData.map((item, index) => {
    return {
      id: index + 100, // Unique ID
      name: item['Name'] || 'Unknown College',
      shortName: item['Short Name'] || item['Name']?.substring(0, 4).toUpperCase() || 'COLL',
      location: item['Location'] || 'India',
      rating: item['Rating'] || 4.2,
      ranking: item['Ranking'] || index + 20,
      type: item['Type'] || 'Private',
      fees: item['Fees'] || 'Variable',
      exams: item['Exams'] || 'Direct Admission',
      img: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=400"
    };
  });

  console.log(JSON.stringify(mappedData));
} catch (error) {
  console.error("Error:", error);
}
