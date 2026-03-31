const xlsx = require('xlsx');
const path = require('path');

const filePath = 'C:\\Users\\amanr\\Downloads\\College Data_AMAN .xlsm';
try {
  const workbook = xlsx.readFile(filePath);
  const sheetName = 'Sheet2';
  if (!workbook.SheetNames.includes(sheetName)) {
    console.log(`Sheet "${sheetName}" not found. Available sheets:`, workbook.SheetNames);
    process.exit(1);
  }
  
  const worksheet = workbook.Sheets[sheetName];
  const data = xlsx.utils.sheet_to_json(worksheet);
  console.log(JSON.stringify(data.slice(0, 5), null, 2));
} catch (error) {
  console.error("Error reading excel file:", error);
}
