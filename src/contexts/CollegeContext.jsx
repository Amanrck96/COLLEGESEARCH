import React, { createContext, useState, useEffect } from 'react';

export const CollegeContext = createContext();

export const CollegeProvider = ({ children }) => {
  const [rawColleges, setRawColleges] = useState([]);
  const [rawExams, setRawExams] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load overrides from localStorage for better performance (prevent serializing 12k items)
  const [addedColleges, setAddedColleges] = useState(() => JSON.parse(localStorage.getItem('addedColleges') || '[]'));
  const [editedColleges, setEditedColleges] = useState(() => JSON.parse(localStorage.getItem('editedColleges') || '{}'));
  const [deletedColleges, setDeletedColleges] = useState(() => JSON.parse(localStorage.getItem('deletedColleges') || '[]'));

  // Global Reviews State with LocalStorage syncing
  const [reviews, setReviews] = useState(() => {
    const saved = localStorage.getItem('collegeReviews');
    if (saved) return JSON.parse(saved);
    return [
      { id: 1, collegeId: 1, authorName: "Rahul M.", rating: 4.8, content: "Excellent infrastructure and unmatched placements. Best coding culture.", status: "APPROVED", timestamp: "2026-06-05" },
      { id: 2, collegeId: 2, authorName: "Sneha S.", rating: 3.5, content: "Massive campus, but crowd is too large. Placements are average.", status: "PENDING", timestamp: "2026-06-06" },
      { id: 3, collegeId: 3, authorName: "Abhay K.", rating: 4.9, content: "No attendance policy is true freedom. Great startup environment.", status: "PENDING", timestamp: "2026-06-07" },
      { id: 4, collegeId: 1, authorName: "Priya Singh", rating: 4.5, content: "Great professors and research opportunities, though fees are higher.", status: "APPROVED", timestamp: "2026-06-07" }
    ];
  });

  useEffect(() => {
    localStorage.setItem('collegeReviews', JSON.stringify(reviews));
  }, [reviews]);

  const addReview = (review) => {
    const newReview = {
      id: Date.now(),
      collegeId: Number(review.collegeId),
      authorName: review.authorName,
      rating: parseFloat(review.rating || '5.0'),
      content: review.content,
      status: "PENDING",
      timestamp: new Date().toLocaleDateString()
    };
    setReviews(prev => [newReview, ...prev]);
  };

  const approveReview = (id) => {
    setReviews(prev => prev.map(r => r.id === id ? { ...r, status: "APPROVED" } : r));
  };

  const rejectReview = (id) => {
    setReviews(prev => prev.map(r => r.id === id ? { ...r, status: "REJECTED" } : r));
  };

  useEffect(() => {
    fetch('/siteData.json')
      .then(res => res.json())
      .then(data => {
        setRawColleges(data.colleges || []);
        setRawExams(data.exams || []);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to load colleges data:", err);
        setLoading(false);
      });
  }, []);

  // Derived visible colleges
  const colleges = React.useMemo(() => {
    const base = (rawColleges || []).filter(c => !deletedColleges.includes(String(c.id)));
    const mergedBase = base.map(c => editedColleges[String(c.id)] ? { ...c, ...editedColleges[String(c.id)] } : c);
    return [...mergedBase, ...addedColleges];
  }, [rawColleges, editedColleges, addedColleges, deletedColleges]);

  // Dynamically aggregate and group unique courses from colleges
  const courses = React.useMemo(() => {
    const uniqueCourses = new Map();
    for (const college of colleges) {
      if (!college.courses) continue;
      for (const c of college.courses) {
        const title = c.title || '';
        const normalized = title.trim().toUpperCase();
        if (!normalized) continue;
        if (!uniqueCourses.has(normalized)) {
          let category = 'Other';
          const type = (c.type || '').toUpperCase();
          const titleLower = normalized.toLowerCase();
          
          if (type.includes('ENGINEERING') || type.includes('TECHNOLOGY') || titleLower.includes('b.tech') || titleLower.includes('btech') || titleLower.includes('engineering') || titleLower.includes('computer science') || titleLower.includes('mca') || titleLower.includes('bca') || titleLower.includes('m.tech') || titleLower.includes('diploma')) {
            category = 'Engineering';
          } else if (type.includes('MANAGEMENT') || type.includes('BUSINESS') || titleLower.includes('mba') || titleLower.includes('bba') || titleLower.includes('pgdm')) {
            category = 'Management';
          } else if (type.includes('MEDICAL') || type.includes('PHARMACY') || titleLower.includes('mbbs') || titleLower.includes('b.pharm') || titleLower.includes('m.pharm') || titleLower.includes('dental') || titleLower.includes('nursing')) {
            category = 'Medical';
          } else if (type.includes('DESIGN') || type.includes('ARTS') || type.includes('FASHION') || titleLower.includes('design') || titleLower.includes('nift')) {
            category = 'Design';
          } else if (type.includes('LAW') || titleLower.includes('law') || titleLower.includes('llb')) {
            category = 'Law';
          } else if (type.includes('SCIENCE') || titleLower.includes('b.sc') || titleLower.includes('m.sc')) {
            category = 'Science';
          } else if (type.includes('ARTS') || titleLower.includes('b.a') || titleLower.includes('m.a')) {
            category = 'Arts';
          }

          uniqueCourses.set(normalized, {
            title: title,
            category: category,
            duration: c.duration || '3 Years',
            avgFee: c.fees || 'Contact for details',
            collegesCount: 1
          });
        } else {
          const existing = uniqueCourses.get(normalized);
          existing.collegesCount += 1;
          if (c.fees && c.fees !== 'Contact for details' && existing.avgFee === 'Contact for details') {
            existing.avgFee = c.fees;
          }
        }
      }
    }
    return Array.from(uniqueCourses.values()).sort((a, b) => b.collegesCount - a.collegesCount);
  }, [colleges]);

  // Default rich exams list
  const defaultExams = React.useMemo(() => [
    { name: 'JEE Main', date: 'Jan 24, 2026', level: 'National', tag: 'Engineering', img: 'https://images.unsplash.com/photo-1571260899304-425070110ea8?auto=format&fit=crop&q=80&w=400' },
    { name: 'JEE Advanced', date: 'May 25, 2026', level: 'National', tag: 'Engineering', img: 'https://images.unsplash.com/photo-1571260899304-425070110ea8?auto=format&fit=crop&q=80&w=400' },
    { name: 'NEET UG', date: 'May 03, 2026', level: 'National', tag: 'Medical', img: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=400' },
    { name: 'CAT', date: 'Nov 30, 2026', level: 'National', tag: 'Management', img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=400' },
    { name: 'GATE', date: 'Feb 07, 2026', level: 'National', tag: 'Engineering', img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400' },
    { name: 'CLAT', date: 'Dec 07, 2025', level: 'National', tag: 'Law', img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=400' },
    { name: 'NIFT', date: 'Feb 05, 2026', level: 'National', tag: 'Design', img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=400' }
  ], []);

  const [exams, setExams] = useState(() => JSON.parse(localStorage.getItem('examsData') || JSON.stringify(defaultExams)));

  useEffect(() => {
    if (!loading && rawExams.length > 0) {
      const stored = localStorage.getItem('examsData');
      if (!stored) {
        const merged = rawExams.map(re => {
          const matched = defaultExams.find(de => de.name.toLowerCase() === re.name.toLowerCase());
          return {
            name: re.name,
            date: re.date || 'May 15, 2026',
            level: re.level || 'National',
            tag: re.tag || (matched?.tag || 'General'),
            img: matched?.img || 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=400'
          };
        });
        setExams(merged);
      }
    }
  }, [rawExams, loading, defaultExams]);

  useEffect(() => { localStorage.setItem('addedColleges', JSON.stringify(addedColleges)); }, [addedColleges]);
  useEffect(() => { localStorage.setItem('editedColleges', JSON.stringify(editedColleges)); }, [editedColleges]);
  useEffect(() => { localStorage.setItem('deletedColleges', JSON.stringify(deletedColleges)); }, [deletedColleges]);
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
    <CollegeContext.Provider value={{ colleges, courses, exams, addCollege, updateCollege, deleteCollege, loading, reviews, addReview, approveReview, rejectReview }}>
      {children}
    </CollegeContext.Provider>
  );
};
