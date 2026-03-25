import React, { createContext, useState, useEffect } from 'react';

export const CollegeContext = createContext();

export const CollegeProvider = ({ children }) => {
  const [colleges, setColleges] = useState(() => {
    const saved = localStorage.getItem('collegesData');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch(e) {}
    }
    return [
      { id: 1, name: "Indian Institute of Technology (IIT)", shortName: "IITD", location: "Delhi", rating: 4.8, ranking: 1, type: "Government", fees: "₹10 Lacs/Year", exams: "JEE Advanced", img: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=400" },
      { id: 2, name: "National Institute of Design (NID)", shortName: "NID", location: "Ahmedabad", rating: 4.7, ranking: 2, type: "Autonomous", fees: "₹8 Lacs/Year", exams: "NID DAT", img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=400" },
      { id: 3, name: "Indian Institute of Management (IIM)", shortName: "IIMB", location: "Bangalore", rating: 4.9, ranking: 1, type: "Government", fees: "₹24 Lacs/Prog", exams: "CAT", img: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&q=80&w=400" },
      { id: 4, name: "Vellore Institute of Technology (VIT)", shortName: "VIT", location: "Vellore", rating: 4.5, ranking: 10, type: "Private", fees: "₹12 Lacs/Year", exams: "VITEEE", img: "https://images.unsplash.com/photo-1590408546194-e3fb4b917531?auto=format&fit=crop&q=80&w=400" },
      { id: 5, name: "Bits Pilani", shortName: "BITS", location: "Pilani", rating: 4.8, ranking: 4, type: "Private", fees: "₹15 Lacs/Year", exams: "BITSAT", img: "https://images.unsplash.com/photo-1592284988080-87b40b171bc8?auto=format&fit=crop&q=80&w=400" },
      { id: 6, name: "Symbiosis Institute of Business", shortName: "SIB", location: "Pune", rating: 4.4, ranking: 15, type: "Private", fees: "₹20 Lacs/Prog", exams: "SNAP", img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=400" }
    ];
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
