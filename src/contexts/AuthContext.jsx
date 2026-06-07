import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const defaultStudents = [
  {
    id: 1,
    name: "Aarav Sharma",
    email: "aarav.sharma@gmail.com",
    mobile: "+91 98765 43210",
    city: "Mumbai",
    state: "Maharashtra",
    courseInterest: "MBA",
    examInterest: "CAT",
    loginTime: "2026-06-07 10:30 AM",
    lastActiveTime: "2026-06-07 09:12 PM",
    searchHistory: ["MBA colleges in Bangalore", "Top business schools India", "CAT cutoff for IIMs"],
    viewedColleges: [1, 2, 5],
    savedColleges: [1, 5],
    compareHistory: [["IIM Bangalore", "IIM Ahmedabad", "IIM Calcutta"]],
    downloadHistory: ["IIM_B_Brochure.pdf", "CAT_Prep_Guide.pdf"],
    adminNotes: "High-intent student. Wants to pursue finance."
  },
  {
    id: 2,
    name: "Riya Patel",
    email: "riya.patel@yahoo.com",
    mobile: "+91 87654 32109",
    city: "Ahmedabad",
    state: "Gujarat",
    courseInterest: "B.Tech Computer Science",
    examInterest: "JEE Main",
    loginTime: "2026-06-07 11:15 AM",
    lastActiveTime: "2026-06-07 08:45 PM",
    searchHistory: ["Best engineering colleges Gujarat", "JEE Main cutoff for Nirma University"],
    viewedColleges: [3, 4],
    savedColleges: [3],
    compareHistory: [],
    downloadHistory: [],
    adminNotes: "Interested in AI/ML specialization."
  },
  {
    id: 3,
    name: "Vikram Aditya",
    email: "vikram.aditya@outlook.com",
    mobile: "+91 76543 21098",
    city: "Chennai",
    state: "Tamil Nadu",
    courseInterest: "MBBS",
    examInterest: "NEET UG",
    loginTime: "2026-06-06 02:40 PM",
    lastActiveTime: "2026-06-07 04:20 PM",
    searchHistory: ["Top medical colleges Tamil Nadu", "NEET UG expected cutoffs"],
    viewedColleges: [6],
    savedColleges: [6],
    compareHistory: [],
    downloadHistory: ["NEET_Syllabus.pdf"],
    adminNotes: "Applying under government quota."
  }
];

const defaultActivityLogs = [
  { id: 101, timestamp: "2026-06-07 09:12:45 PM", user: "Aarav Sharma", role: "Student", action: "Search", details: "Searched for 'MBA colleges in Bangalore'" },
  { id: 102, timestamp: "2026-06-07 08:50:30 PM", user: "Riya Patel", role: "Student", action: "View Page", details: "Viewed College Detail page for Nirma University" },
  { id: 103, timestamp: "2026-06-07 06:15:10 PM", user: "admin", role: "Super Admin", action: "Admin Action", details: "Approved student review for ID 24" },
  { id: 104, timestamp: "2026-06-07 04:30:15 PM", user: "operator1", role: "Data Entry Operator", action: "Admin Action", details: "Updated fees structure for IIT Bombay" },
  { id: 105, timestamp: "2026-06-07 01:25:00 PM", user: "Aarav Sharma", role: "Student", action: "Login", details: "User logged in via mobile OTP authentication" }
];

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    return JSON.parse(localStorage.getItem('currentUser') || 'null');
  });

  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem('studentsData');
    return saved ? JSON.parse(saved) : defaultStudents;
  });

  const [activityLogs, setActivityLogs] = useState(() => {
    const saved = localStorage.getItem('activityLogs');
    return saved ? JSON.parse(saved) : defaultActivityLogs;
  });

  const [usersList, setUsersList] = useState(() => {
    const defaultUsers = [
      { id: 1, email: "admin@collegesearch.com", name: "Super Admin", role: "SUPERADMIN", password: "admin" },
      { id: 2, email: "manager@collegesearch.com", name: "Admin Manager", role: "ADMIN", password: "admin" },
      { id: 3, email: "operator@collegesearch.com", name: "Data Operator", role: "OPERATOR", password: "admin" },
      { id: 4, email: "viewer@collegesearch.com", name: "Report Observer", role: "VIEWER", password: "admin" }
    ];
    const saved = localStorage.getItem('usersList');
    return saved ? JSON.parse(saved) : defaultUsers;
  });

  useEffect(() => {
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem('studentsData', JSON.stringify(students));
  }, [students]);

  useEffect(() => {
    localStorage.setItem('activityLogs', JSON.stringify(activityLogs));
  }, [activityLogs]);

  useEffect(() => {
    localStorage.setItem('usersList', JSON.stringify(usersList));
  }, [usersList]);

  // Log user activity Helper
  const logActivity = (user, role, action, details) => {
    const newLog = {
      id: Date.now(),
      timestamp: new Date().toLocaleString(),
      user: user || "Anonymous",
      role: role || "Viewer",
      action: action,
      details: details
    };
    setActivityLogs(prev => [newLog, ...prev]);
  };

  // Sign up/Login Handlers
  const handleLogin = (email, password, selectedRole) => {
    // If it's a student login, search in students database or auto-create it
    if (selectedRole === 'student') {
      let student = students.find(s => s.email === email);
      if (!student) {
        student = {
          id: Date.now(),
          name: email.split('@')[0],
          email: email,
          mobile: "+91 99999 99999",
          city: "New Delhi",
          state: "Delhi",
          courseInterest: "MBA",
          examInterest: "CAT",
          loginTime: new Date().toLocaleString(),
          lastActiveTime: new Date().toLocaleString(),
          searchHistory: [],
          viewedColleges: [],
          savedColleges: [],
          compareHistory: [],
          downloadHistory: [],
          adminNotes: ""
        };
        setStudents(prev => [...prev, student]);
      }
      const activeUser = {
        name: student.name,
        email: student.email,
        role: "student",
        studentId: student.id
      };
      setCurrentUser(activeUser);
      logActivity(student.name, "Student", "Login", `Student logged in. Current session verified.`);
      return { success: true, user: activeUser };
    }

    // Standard Staff Roles Lookup
    const matchedUser = usersList.find(u => u.email === email && u.role === selectedRole.toUpperCase() && password === u.password);
    if (matchedUser) {
      const activeUser = {
        name: matchedUser.name,
        email: matchedUser.email,
        role: selectedRole
      };
      setCurrentUser(activeUser);
      logActivity(matchedUser.name, selectedRole, "Login", `Staff user authenticated. Session assigned.`);
      return { success: true, user: activeUser };
    }

    return { success: false, message: "Invalid email, password, or role choice." };
  };

  const handleLogout = () => {
    if (currentUser) {
      logActivity(currentUser.name, currentUser.role, "Logout", `User logged out. Session destroyed.`);
    }
    setCurrentUser(null);
  };

  // Capture student activity tracking
  const trackStudentActivity = (actionType, detailsText) => {
    if (!currentUser || currentUser.role !== 'student') return;
    
    // Update last active time & append telemetry items
    setStudents(prev => prev.map(s => {
      if (s.id === currentUser.studentId) {
        const updated = { ...s, lastActiveTime: new Date().toLocaleString() };
        if (actionType === 'search') {
          updated.searchHistory = [...new Set([detailsText, ...s.searchHistory])];
        } else if (actionType === 'view') {
          updated.viewedColleges = [...new Set([detailsText, ...s.viewedColleges])];
        } else if (actionType === 'save') {
          updated.savedColleges = [...new Set([detailsText, ...s.savedColleges])];
        } else if (actionType === 'compare') {
          updated.compareHistory = [...s.compareHistory, detailsText];
        } else if (actionType === 'download') {
          updated.downloadHistory = [...new Set([detailsText, ...s.downloadHistory])];
        }
        return updated;
      }
      return s;
    }));

    logActivity(currentUser.name, "Student", actionType, detailsText);
  };

  const updateStudentNotes = (id, notes) => {
    setStudents(prev => prev.map(s => s.id === id ? { ...s, adminNotes: notes } : s));
    logActivity(currentUser?.name || "System", currentUser?.role || "Admin", "Admin Action", `Updated notes for student ID: ${id}`);
  };

  const deleteStudent = (id) => {
    setStudents(prev => prev.filter(s => s.id !== id));
    logActivity(currentUser?.name || "System", currentUser?.role || "Admin", "Admin Action", `Deleted student profile ID: ${id}`);
  };

  return (
    <AuthContext.Provider value={{
      currentUser,
      students,
      activityLogs,
      usersList,
      setStudents,
      handleLogin,
      handleLogout,
      logActivity,
      trackStudentActivity,
      updateStudentNotes,
      deleteStudent
    }}>
      {children}
    </AuthContext.Provider>
  );
};
