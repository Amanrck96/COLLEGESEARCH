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

  // Limit to 100 for better performance and to ensure it fits in JS
  const mappedData = rawData.slice(0, 100).map((item, index) => {
    const rawName = item['Name'] || '';
    const name = String(rawName).trim() || 'College Name';
    const location = String(item['Location'] || 'India').trim();
    const shortName = name.split(' ').map(w => w[0]).join('').substring(0, 5).toUpperCase();
    
    return {
      id: index + 1,
      name: name,
      shortName: shortName,
      location: location,
      rating: parseFloat((Math.random() * (5.0 - 4.0) + 4.0).toFixed(1)),
      ranking: index + 1,
      type: "Private",
      fees: "₹1-4 Lacs/Year",
      exams: "Direct Admission",
      img: images[index % images.length]
    };
  });

  const contextTemplate = `import React, { createContext, useState, useEffect } from 'react';

export const CollegeContext = createContext();

export const CollegeProvider = ({ children }) => {
  const [colleges, setColleges] = useState(() => {
    const saved = localStorage.getItem('collegesData');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.length > 0) return parsed;
      } catch(e) {}
    }
    return ${JSON.stringify(mappedData, null, 2)};
  });

  useEffect(() => {
    localStorage.setItem('collegesData', JSON.stringify(colleges));
  }, [colleges]);

  const addCollege = (college) => {
    setColleges([...colleges, { ...college, id: Date.now() }]);
  };

  const updateCollege = (id, updatedCollege) => {
    setColleges(colleges.map(c => c.id === id ? { ...c, ...updatedCollege } : c));
  };

  const deleteCollege = (id) => {
    setColleges(colleges.filter(c => c.id !== id));
  };

  return (
    <CollegeContext.Provider value={{ colleges, addCollege, updateCollege, deleteCollege }}>
      {children}
    </CollegeContext.Provider>
  );
};
`;

  fs.writeFileSync('c:\\Users\\amanr\\collegesearch\\src\\contexts\\CollegeContext.jsx', contextTemplate);
  console.log("Updated CollegeContext.jsx successfully with 100 entries");
} catch (error) {
  console.error(error);
}
