import React, { createContext, useState, useEffect } from 'react';
import { sanitizeText, getCSRFToken } from '../utils/security';

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

  const addReview = async (review) => {
    const cleanContent = sanitizeText(review.content);
    const cleanAuthor = sanitizeText(review.authorName);
    const sanitizedReview = {
      ...review,
      content: cleanContent,
      authorName: cleanAuthor
    };
    try {
      const response = await fetch('http://localhost:5000/api/reviews', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'X-CSRF-Token': getCSRFToken()
        },
        body: JSON.stringify(sanitizedReview)
      });
      if (!response.ok) throw new Error("Review submission failed");
      const data = await response.json();
      setReviews(prev => [data.review, ...prev]);
    } catch (err) {
      console.warn("Could not submit review to server, adding locally:", err);
      const newReview = {
        id: Date.now(),
        collegeId: Number(review.collegeId),
        authorName: cleanAuthor,
        rating: parseFloat(review.rating || '5.0'),
        content: cleanContent,
        status: "PENDING",
        timestamp: new Date().toLocaleDateString()
      };
      setReviews(prev => [newReview, ...prev]);
    }
  };

  const approveReview = async (id) => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`http://localhost:5000/api/reviews/${id}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          'X-CSRF-Token': getCSRFToken()
        },
        body: JSON.stringify({ status: 'APPROVED' })
      });
      if (!response.ok) throw new Error("Moderation failed");
      setReviews(prev => prev.map(r => r.id === id ? { ...r, status: "APPROVED" } : r));
    } catch (err) {
      console.warn("Could not sync review approval, moderate locally:", err);
      setReviews(prev => prev.map(r => r.id === id ? { ...r, status: "APPROVED" } : r));
    }
  };

  const rejectReview = async (id) => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`http://localhost:5000/api/reviews/${id}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          'X-CSRF-Token': getCSRFToken()
        },
        body: JSON.stringify({ status: 'REJECTED' })
      });
      if (!response.ok) throw new Error("Moderation failed");
      setReviews(prev => prev.map(r => r.id === id ? { ...r, status: "REJECTED" } : r));
    } catch (err) {
      console.warn("Could not sync review rejection, moderate locally:", err);
      setReviews(prev => prev.map(r => r.id === id ? { ...r, status: "REJECTED" } : r));
    }
  };

  // Fix #1: pendingUpdates must be declared BEFORE the data-loading useEffect
  // that calls setPendingUpdates, to avoid using it before initialization.
  const [pendingUpdates, setPendingUpdates] = useState(() => {
    const saved = localStorage.getItem('pendingUpdates');
    if (saved) return JSON.parse(saved);
    return [
      {
        id: 201,
        collegeId: 1,
        collegeName: "IIT Bombay",
        field: "established",
        oldValue: "1958",
        suggestedValue: "1958 (Accredited by NAAC A++)",
        sourceUrl: "https://www.iitb.ac.in/about",
        timestamp: "2026-06-07 11:45 AM"
      },
      {
        id: 202,
        collegeId: 2,
        collegeName: "LPU Jalandhar",
        field: "averagePackage",
        oldValue: "₹6 LPA",
        suggestedValue: "₹7.5 LPA",
        sourceUrl: "https://www.lpu.in/placements",
        timestamp: "2026-06-07 01:12 PM"
      },
      {
        id: 203,
        collegeId: 1,
        collegeName: "IIT Bombay",
        field: "img",
        oldValue: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=400",
        suggestedValue: "https://images.unsplash.com/photo-1571260899304-425070110ea8?auto=format&fit=crop&q=80&w=400",
        sourceUrl: "https://www.iitb.ac.in/gallery",
        timestamp: "2026-06-07 02:30 PM",
        isImage: true
      }
    ];
  });

  useEffect(() => {
    fetch('http://localhost:5000/api/colleges?limit=30')
      .then(res => {
        if (!res.ok) throw new Error("Backend not initialized or offline");
        return res.json();
      })
      .then(data => {
        setRawColleges(data.colleges || []);
        setLoading(false);
      })
      .catch(err => {
        console.warn("Failed to load colleges from backend, falling back to local slice:", err);
        fetch('/siteData.json')
          .then(res => res.json())
          .then(localData => {
            setRawColleges((localData.colleges || []).slice(0, 50));
            setRawExams(localData.exams || []);
            if (localData.pendingUpdates && localData.pendingUpdates.length > 0) {
              setPendingUpdates(prev => {
                const existingKeys = new Set(prev.map(u => `${u.collegeId}-${u.field}-${u.suggestedValue}`));
                const newUpdates = localData.pendingUpdates.filter(u => !existingKeys.has(`${u.collegeId}-${u.field}-${u.suggestedValue}`));
                if (newUpdates.length > 0) {
                  const merged = [...prev, ...newUpdates];
                  localStorage.setItem('pendingUpdates', JSON.stringify(merged));
                  return merged;
                }
                return prev;
              });
            }
            setLoading(false);
          })
          .catch(e => {
            console.error("Failed to load local fallback data:", e);
            setLoading(false);
          });
      });
  }, []);

  // NOTE: pendingUpdates state has been moved above the data-loading useEffect (Fix #1).

  // Global Inaccuracy reports queue
  const [inaccuracyReports, setInaccuracyReports] = useState(() => {
    const saved = localStorage.getItem('inaccuracyReports');
    if (saved) return JSON.parse(saved);
    return [
      { id: 1, collegeId: 2, collegeName: "LPU Jalandhar", fieldName: "Fees", reportedValue: "Hostel fees changed to ₹1,10,000 for AC rooms", studentName: "Aarav Sharma", timestamp: "2026-06-07" }
    ];
  });

  useEffect(() => {
    localStorage.setItem('pendingUpdates', JSON.stringify(pendingUpdates));
  }, [pendingUpdates]);

  useEffect(() => {
    localStorage.setItem('inaccuracyReports', JSON.stringify(inaccuracyReports));
  }, [inaccuracyReports]);

  const approveUpdate = (updateId) => {
    const update = pendingUpdates.find(u => u.id === updateId);
    if (!update) return;
    updateCollege(update.collegeId, {
      [update.field]: update.suggestedValue,
      _source: "Web Verified Crawler",
      _lastSync: new Date().toLocaleDateString()
    });
    setPendingUpdates(prev => prev.filter(u => u.id !== updateId));
  };

  const rejectUpdate = (updateId) => {
    setPendingUpdates(prev => prev.filter(u => u.id !== updateId));
  };

  const addInaccuracyReport = (report) => {
    const newReport = {
      id: Date.now(),
      collegeId: Number(report.collegeId),
      collegeName: report.collegeName,
      fieldName: report.fieldName,
      reportedValue: report.reportedValue,
      studentName: report.studentName || "Anonymous Student",
      timestamp: new Date().toLocaleDateString()
    };
    setInaccuracyReports(prev => [newReport, ...prev]);
  };

  // Derived visible colleges with worldwide listings and default info
  const colleges = React.useMemo(() => {
    const base = (rawColleges || []).filter(c => !deletedColleges.includes(String(c.id)));
    const mergedBase = base.map(c => {
      const overrides = editedColleges[String(c.id)] || {};
      return {
        country: 'India',
        _source: 'Public Directory',
        _lastSync: '2026-06-06',
        ...c,
        ...overrides
      };
    });

    const defaultInternational = [
      {
        id: 90001,
        name: "Massachusetts Institute of Technology (MIT)",
        shortName: "MIT",
        location: "Cambridge",
        state: "Massachusetts",
        country: "USA",
        type: "Private",
        established: "1861",
        fees: "$58,000/Year",
        exams: "SAT, ACT, TOEFL",
        averagePackage: "$110,000",
        highestPackage: "$250,000",
        rating: 4.9,
        reviews: 200,
        about: "The Massachusetts Institute of Technology (MIT) is a private research university in Cambridge, Massachusetts, established in 1861. MIT has played a key role in the development of modern technology and science.",
        website: "https://www.mit.edu",
        phone: "+1 617-253-1000",
        img: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&q=80&w=400",
        gallery: ["https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&q=80&w=400"],
        courses: [
          { title: "B.S. Computer Science", duration: "4 Years", fees: "$58,000/Year", eligibility: "SAT/ACT + TOEFL" },
          { title: "M.S. Electrical Engineering", duration: "2 Years", fees: "$60,000/Year", eligibility: "GRE + TOEFL" }
        ],
        facilities: "Library, Hostels, Sports Complex, IT Infrastructure, Cafeteria, Med Center",
        topRecruiters: "Google, Microsoft, Apple, Meta, NVIDIA, Tesla",
        _source: "Official Site",
        _lastSync: "2026-06-07"
      },
      {
        id: 90002,
        name: "University of Oxford",
        shortName: "Oxford",
        location: "Oxford",
        state: "Oxfordshire",
        country: "UK",
        type: "Public",
        established: "1096",
        fees: "£38,500/Year",
        exams: "IELTS, GCE A-Levels",
        averagePackage: "£75,000",
        highestPackage: "£180,000",
        rating: 4.9,
        reviews: 185,
        about: "The University of Oxford is a collegiate research university in Oxford, England. There is evidence of teaching as early as 1096, making it the oldest university in the English-speaking world.",
        website: "https://www.ox.ac.uk",
        phone: "+44 1865 270000",
        img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=400",
        gallery: ["https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=400"],
        courses: [
          { title: "B.A. Philosophy, Politics and Economics (PPE)", duration: "3 Years", fees: "£35,000/Year", eligibility: "A-Levels or equivalent" },
          { title: "Master of Business Administration (MBA)", duration: "1 Year", fees: "£71,000/Year", eligibility: "GMAT/GRE + IELTS" }
        ],
        facilities: "Bodleian Library, Oxford Union, Collegiate Accommodation, Sports Complex",
        topRecruiters: "Goldman Sachs, McKinsey & Company, BCG, HSBC, Unilever",
        _source: "Official Site",
        _lastSync: "2026-06-07"
      },
      {
        id: 90003,
        name: "National University of Singapore (NUS)",
        shortName: "NUS",
        location: "Queenstown",
        state: "Central Region",
        country: "Singapore",
        type: "Public",
        established: "1905",
        fees: "S$32,000/Year",
        exams: "SAT, ACT, IELTS",
        averagePackage: "S$72,000",
        highestPackage: "S$150,000",
        rating: 4.8,
        reviews: 142,
        about: "The National University of Singapore (NUS) is a national collegiate research university in Queenstown, Singapore. Founded in 1905, it is the oldest higher education institution in Singapore.",
        website: "https://nus.edu.sg",
        phone: "+65 6516 6666",
        img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=400",
        gallery: ["https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=400"],
        courses: [
          { title: "Bachelor of Computing (Computer Science)", duration: "4 Years", fees: "S$32,000/Year", eligibility: "High School Grad + SAT" },
          { title: "Master of Science in Finance", duration: "1 Year", fees: "S$48,000/Year", eligibility: "GMAT + IELTS" }
        ],
        facilities: "NUS Libraries, University Cultural Centre, UTown Dormitories, IT Centre",
        topRecruiters: "DBS Bank, Singtel, Shopee, Grab, Google, ByteDance",
        _source: "Official Site",
        _lastSync: "2026-06-07"
      }
    ];

    // Fix #2: addedColleges must be spread in here, not just listed as a dependency
    return [...mergedBase, ...addedColleges, ...defaultInternational];
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

  const addCollege = async (college) => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch('http://localhost:5000/api/colleges', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          'X-CSRF-Token': getCSRFToken()
        },
        body: JSON.stringify(college)
      });
      if (!response.ok) throw new Error("Failed to add college on backend");
      const newCollege = await response.json();
      setRawColleges(prev => [newCollege, ...prev]);
    } catch (err) {
      console.warn("Could not sync added college to server, adding locally:", err);
      setAddedColleges(prev => [...prev, { ...college, id: Date.now() }]);
    }
  };

  const updateCollege = async (id, updatedCollege) => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`http://localhost:5000/api/colleges/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          'X-CSRF-Token': getCSRFToken()
        },
        body: JSON.stringify(updatedCollege)
      });
      if (!response.ok) throw new Error("Failed to update college on backend");
      const updated = await response.json();
      setRawColleges(prev => prev.map(c => c.id === Number(id) ? updated : c));
    } catch (err) {
      console.warn("Could not sync update to server, updating locally:", err);
      const isAdded = addedColleges.some(c => String(c.id) === String(id));
      if (isAdded) {
        setAddedColleges(prev => prev.map(c => String(c.id) === String(id) ? { ...c, ...updatedCollege } : c));
      } else {
        setEditedColleges(prev => ({ ...prev, [String(id)]: { ...(prev[String(id)] || {}), ...updatedCollege } }));
      }
    }
  };

  const deleteCollege = async (id) => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`http://localhost:5000/api/colleges/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (!response.ok) throw new Error("Failed to delete college on backend");
      setRawColleges(prev => prev.filter(c => c.id !== Number(id)));
    } catch (err) {
      console.warn("Could not sync delete to server, deleting locally:", err);
      const isAdded = addedColleges.some(c => String(c.id) === String(id));
      if (isAdded) {
        setAddedColleges(prev => prev.filter(c => String(c.id) !== String(id)));
      } else {
        setDeletedColleges(prev => [...prev, String(id)]);
      }
    }
  };


  const fetchColleges = async (params = {}) => {
    try {
      const query = new URLSearchParams(params).toString();
      const res = await fetch(`http://localhost:5000/api/colleges?${query}`);
      if (!res.ok) throw new Error("Backend query failed");
      const data = await res.json();
      return data;
    } catch (err) {
      console.warn("fetchColleges error, performing local filtering fallback:", err);
      let results = [...colleges];
      if (params.q) {
        const qStr = params.q.toLowerCase();
        results = results.filter(c => c.name.toLowerCase().includes(qStr) || c.location.toLowerCase().includes(qStr));
      }
      if (params.state) results = results.filter(c => c.state === params.state);
      if (params.city) results = results.filter(c => c.location === params.city);
      if (params.type) results = results.filter(c => c.type === params.type);
      
      const limit = parseInt(params.limit || '12');
      const page = parseInt(params.page || '1');
      const start = (page - 1) * limit;
      const paginated = results.slice(start, start + limit);
      return {
        colleges: paginated,
        totalCount: results.length
      };
    }
  };

  return (
    <CollegeContext.Provider value={{ 
      colleges, courses, exams, addCollege, updateCollege, deleteCollege, loading, 
      reviews, addReview, approveReview, rejectReview,
      pendingUpdates, setPendingUpdates, approveUpdate, rejectUpdate,
      inaccuracyReports, addInaccuracyReport, fetchColleges
    }}>
      {children}
    </CollegeContext.Provider>
  );
};
