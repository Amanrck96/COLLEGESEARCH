const xlsx = require('xlsx');
const filePath = 'C:\\Users\\amanr\\Downloads\\Colleges_Directory_Export.xlsx';
try {
  const workbook = xlsx.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const data = xlsx.utils.sheet_to_json(worksheet);
  console.log("Total rows:", data.length);
  console.log("First row:", JSON.stringify(data[0], null, 2));
} catch (error) {
  console.error("Error reading excel file:", error);
}
