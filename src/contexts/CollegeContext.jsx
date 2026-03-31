import React, { createContext, useState, useEffect } from 'react';
import siteData from '../data/siteData.json';

export const CollegeContext = createContext();

export const CollegeProvider = ({ children }) => {
  const [colleges, setColleges] = useState(() => {
    return siteData.colleges;
  });

  const [courses, setCourses] = useState(() => {
    return siteData.courses || [];
  });

  const [exams, setExams] = useState(() => {
    return siteData.exams || [];
  });

  // Automatically refresh when siteData changes (e.g. after sync)
  useEffect(() => {
    setColleges(siteData.colleges);
    setCourses(siteData.courses || []);
    setExams(siteData.exams || []);
  }, []);

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
    <CollegeContext.Provider value={{ colleges, courses, exams, addCollege, updateCollege, deleteCollege }}>
      {children}
    </CollegeContext.Provider>
  );
};
