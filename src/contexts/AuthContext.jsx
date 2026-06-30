import React, { createContext, useState, useEffect } from 'react';
import { encryptState, decryptState } from '../utils/security';

export const AuthContext = createContext();

const DEFAULT_STAFF_USERS = [
  { id: 1, email: "admin@thecollegecompass.com", name: "Super Admin", role: "SUPERADMIN", password: "admin" },
  { id: 2, email: "manager@thecollegecompass.com", name: "Admin Manager", role: "ADMIN", password: "admin" },
  { id: 3, email: "operator@thecollegecompass.com", name: "Data Operator", role: "OPERATOR", password: "admin" },
  { id: 4, email: "viewer@thecollegecompass.com", name: "Report Observer", role: "VIEWER", password: "admin" },
];

const STAFF_ROLE_MAP = {
  superadmin: 'SUPERADMIN',
  admin: 'ADMIN',
  operator: 'OPERATOR',
  viewer: 'VIEWER',
};

const normalizeStaffRole = (role) => STAFF_ROLE_MAP[role?.toLowerCase()] || role?.toUpperCase();

const mergeStaffUsers = (saved) => {
  if (!Array.isArray(saved) || saved.length === 0) return DEFAULT_STAFF_USERS;
  return DEFAULT_STAFF_USERS.map((defaultUser) => {
    const match = saved.find((u) => u.email?.toLowerCase() === defaultUser.email.toLowerCase());
    if (!match) return defaultUser;
    return {
      ...defaultUser,
      ...match,
      role: defaultUser.role,
      password: match.password || defaultUser.password,
    };
  });
};

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
    const saved = localStorage.getItem('currentUser_secure');
    return saved ? decryptState(saved) : null;
  });

  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem('studentsData_secure');
    return saved ? decryptState(saved) : defaultStudents;
  });

  const [activityLogs, setActivityLogs] = useState(() => {
    const saved = localStorage.getItem('activityLogs_secure');
    return saved ? decryptState(saved) : defaultActivityLogs;
  });

  const [usersList, setUsersList] = useState(() => {
    const saved = localStorage.getItem('usersList_secure');
    return saved ? mergeStaffUsers(decryptState(saved)) : DEFAULT_STAFF_USERS;
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetch('http://localhost:5000/api/auth/profile', {
        headers: { 'Authorization': `Bearer ${token}` }
      })
      .then(res => {
        if (!res.ok) throw new Error("Invalid session");
        return res.json();
      })
      .then(data => {
        const activeUser = {
          id: data.user.id,
          name: data.user.name,
          email: data.user.email,
          role: data.user.role.toLowerCase(),
          studentId: data.user.role.toLowerCase() === 'student' ? data.user.id : undefined
        };
        setCurrentUser(activeUser);
      })
      .catch(() => {
        localStorage.removeItem('token');
        setCurrentUser(null);
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('currentUser_secure', encryptState(currentUser));
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem('studentsData_secure', encryptState(students));
  }, [students]);

  useEffect(() => {
    localStorage.setItem('activityLogs_secure', encryptState(activityLogs));
  }, [activityLogs]);

  useEffect(() => {
    localStorage.setItem('usersList_secure', encryptState(usersList));
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
  const handleLogin = async (email, password, selectedRole) => {
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedPassword = password.trim();

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmedEmail, password: trimmedPassword, role: selectedRole })
      });
      const data = await response.json();
      
      if (!response.ok) {
        // Self-registration for students
        if (selectedRole === 'student') {
          const signupRes = await fetch('http://localhost:5000/api/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: trimmedEmail, password: trimmedPassword, name: trimmedEmail.split('@')[0] })
          });
          const signupData = await signupRes.json();
          if (!signupRes.ok) return { success: false, message: signupData.error || "Signup failed." };
          
          const activeUser = {
            id: signupData.user.id,
            name: signupData.user.name,
            email: signupData.user.email,
            role: 'student',
            studentId: signupData.user.id
          };
          setCurrentUser(activeUser);
          localStorage.setItem('token', signupData.token);
          logActivity(activeUser.name, "Student", "Sign Up", `New student account created for ${trimmedEmail}`);
          return { success: true, user: activeUser };
        }
        return { success: false, message: data.error || "Invalid credentials." };
      }

      const activeUser = {
        id: data.user.id,
        name: data.user.name,
        email: data.user.email,
        role: data.user.role.toLowerCase(),
        studentId: data.user.role.toLowerCase() === 'student' ? data.user.id : undefined
      };
      
      setCurrentUser(activeUser);
      localStorage.setItem('token', data.token);
      logActivity(activeUser.name, data.user.role, "Login", `User authenticated. Session assigned.`);
      return { success: true, user: activeUser };
    } catch (err) {
      console.error("Login connection error:", err);
      return { success: false, message: "Could not connect to authentication server." };
    }
  };

  const handleSignup = async (name, email, password) => {
    const trimmedName = name.trim();
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedPassword = password.trim();

    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: trimmedName, email: trimmedEmail, password: trimmedPassword })
      });
      const data = await response.json();

      if (!response.ok) {
        return { success: false, message: data.error || "Signup failed." };
      }

      const activeUser = {
        id: data.user.id,
        name: data.user.name,
        email: data.user.email,
        role: 'student',
        studentId: data.user.id
      };
      
      setCurrentUser(activeUser);
      localStorage.setItem('token', data.token);
      logActivity(activeUser.name, "Student", "Sign Up", `New student account created for ${trimmedEmail}`);
      return { success: true, user: activeUser };
    } catch (err) {
      console.error("Signup connection error:", err);
      return { success: false, message: "Could not connect to authentication server." };
    }
  };

  const updateStaffPassword = (staffId, newPassword) => {
    const trimmed = newPassword.trim();
    if (!trimmed || trimmed.length < 4) {
      return { success: false, message: "Password must be at least 4 characters." };
    }
    setUsersList((prev) =>
      prev.map((u) => (u.id === staffId ? { ...u, password: trimmed } : u))
    );
    return { success: true, message: "Staff password updated successfully." };
  };

  const handleLogout = () => {
    if (currentUser) {
      logActivity(currentUser.name, currentUser.role, "Logout", `User logged out. Session destroyed.`);
    }
    localStorage.removeItem('token');
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
        } else if (actionType === 'apply') {
          updated.appliedColleges = [...new Set([detailsText, ...(s.appliedColleges || [])])];
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
      handleSignup,
      logActivity,
      trackStudentActivity,
      updateStudentNotes,
      deleteStudent,
      updateStaffPassword
    }}>
      {children}
    </AuthContext.Provider>
  );
};
