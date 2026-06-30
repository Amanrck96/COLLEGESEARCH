const xlsx = require('xlsx');
const path = require('path');

const filePath = 'C:\\Users\\amanr\\Downloads\\College_Data_Updated_Images.xlsx';

try {
  console.log('Reading Excel file...');
  const workbook = xlsx.readFile(filePath);
  console.log('Available sheets:', workbook.SheetNames);
  
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const data = xlsx.utils.sheet_to_json(worksheet);
  
  console.log(`\nTotal rows: ${data.length}`);
  
  if (data.length > 0) {
    console.log('\nColumn names:', Object.keys(data[0]));
    console.log('\nFirst row sample:');
    console.log(JSON.stringify(data[0], null, 2));
  }
} catch (error) {
  console.error("Error reading excel file:", error);
}
