import React, { createContext, useState, useEffect } from 'react';
import siteData from '../data/siteData.json';

export const CollegeContext = createContext();

export const CollegeProvider = ({ children }) => {
  // Load overrides from localStorage for better performance (prevent serializing 12k items)
  const [addedColleges, setAddedColleges] = useState(() => JSON.parse(localStorage.getItem('addedColleges') || '[]'));
  const [editedColleges, setEditedColleges] = useState(() => JSON.parse(localStorage.getItem('editedColleges') || '{}'));
  const [deletedColleges, setDeletedColleges] = useState(() => JSON.parse(localStorage.getItem('deletedColleges') || '[]'));

  // Derived visible colleges
  const colleges = React.useMemo(() => {
    const base = (siteData.colleges || []).filter(c => !deletedColleges.includes(String(c.id)));
    const mergedBase = base.map(c => editedColleges[String(c.id)] ? { ...c, ...editedColleges[String(c.id)] } : c);
    return [...mergedBase, ...addedColleges];
  }, [editedColleges, addedColleges, deletedColleges]);

  // Keep exams/courses simple since they are small arrays
  const [courses, setCourses] = useState(() => JSON.parse(localStorage.getItem('coursesData') || JSON.stringify(siteData.courses || [])));
  const [exams, setExams] = useState(() => JSON.parse(localStorage.getItem('examsData') || JSON.stringify(siteData.exams || [])));

  useEffect(() => { localStorage.setItem('addedColleges', JSON.stringify(addedColleges)); }, [addedColleges]);
  useEffect(() => { localStorage.setItem('editedColleges', JSON.stringify(editedColleges)); }, [editedColleges]);
  useEffect(() => { localStorage.setItem('deletedColleges', JSON.stringify(deletedColleges)); }, [deletedColleges]);
  useEffect(() => { localStorage.setItem('coursesData', JSON.stringify(courses)); }, [courses]);
  useEffect(() => { localStorage.setItem('examsData', JSON.stringify(exams)); }, [exams]);

  const addCollege = (college) => {
    setAddedColleges(prev => [...prev, { ...college, id: Date.now() }]);
  };

  const updateCollege = (id, updatedCollege) => {
    const isAdded = addedColleges.some(c => String(c.id) === String(id));
    if (isAdded) {
      setAddedColleges(prev => prev.map(c => String(c.id) === String(id) ? { ...c, ...updatedCollege } : c));
    } else {
      setEditedColleges(prev => ({ ...prev, [String(id)]: { ...(prev[String(id)] || {}), ...updatedCollege } }));
    }
  };

  const deleteCollege = (id) => {
    const isAdded = addedColleges.some(c => String(c.id) === String(id));
    if (isAdded) {
      setAddedColleges(prev => prev.filter(c => String(c.id) !== String(id)));
    } else {
      setDeletedColleges(prev => [...prev, String(id)]);
    }
  };


  return (
    <CollegeContext.Provider value={{ colleges, courses, exams, addCollege, updateCollege, deleteCollege }}>
      {children}
    </CollegeContext.Provider>
  );
};
