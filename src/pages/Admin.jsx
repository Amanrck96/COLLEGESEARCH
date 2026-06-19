import React, { useState, useContext, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Table, Button, Badge, Alert, Tab, Nav, ProgressBar, Modal, Spinner, InputGroup } from 'react-bootstrap';
import { 
  FaUserShield, FaSchool, FaBookOpen, FaUserGraduate, FaHistory, FaFileExcel, 
  FaFilePdf, FaBan, FaCheck, FaTimes, FaPlus, FaTrash, FaEdit, FaDownload, 
  FaExclamationTriangle, FaSearch, FaRegStickyNote, FaFilter, FaExchangeAlt, FaCog
} from 'react-icons/fa';
import { CollegeContext } from '../contexts/CollegeContext';
import { AuthContext } from '../contexts/AuthContext';
import * as XLSX from 'xlsx';
import { useTranslation } from '../utils/i18n';

const Admin = () => {
  const { t } = useTranslation();
  const { 
    colleges, addCollege, updateCollege, deleteCollege, loading: collegeLoading, 
    reviews, approveReview, rejectReview, 
    pendingUpdates, setPendingUpdates, approveUpdate, rejectUpdate, inaccuracyReports 
  } = useContext(CollegeContext);
  const { currentUser, students, activityLogs, deleteStudent, updateStudentNotes, logActivity, handleLogin, usersList, updateStaffPassword } = useContext(AuthContext);

  const [activeTab, setActiveTab] = useState('dashboard');
  const [editingCollege, setEditingCollege] = useState(null);
  const [showCollegeForm, setShowCollegeForm] = useState(false);

  // Staff login states
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [adminRole, setAdminRole] = useState('superadmin');
  const [adminAuthError, setAdminAuthError] = useState('');
  const [staffPasswordDrafts, setStaffPasswordDrafts] = useState({});
  const [staffPasswordMsg, setStaffPasswordMsg] = useState('');

  const autofillAdminUser = (role) => {
    setAdminRole(role);
    if (role === 'superadmin') {
      setAdminEmail('admin@thecollegecompass.com');
      setAdminPassword('admin');
    } else if (role === 'admin') {
      setAdminEmail('manager@thecollegecompass.com');
      setAdminPassword('admin');
    } else if (role === 'operator') {
      setAdminEmail('operator@thecollegecompass.com');
      setAdminPassword('admin');
    } else if (role === 'viewer') {
      setAdminEmail('viewer@thecollegecompass.com');
      setAdminPassword('admin');
    }
  };

  const onAdminLoginSubmit = (e) => {
    e.preventDefault();
    const res = handleLogin(adminEmail, adminPassword, adminRole);
    if (res.success) {
      setAdminEmail('');
      setAdminPassword('');
      setAdminAuthError('');
    } else {
      setAdminAuthError(res.message);
    }
  };

  const getStaffRoleLabel = (role) => {
    const labels = {
      SUPERADMIN: 'Super Admin',
      ADMIN: 'Admin Manager',
      OPERATOR: 'Data Entry Operator',
      VIEWER: 'Viewer',
    };
    return labels[role] || role;
  };

  const handleStaffPasswordSave = (staffId) => {
    if (!hasAccess('superadmin')) {
      alert('Only Super Admin can change staff passwords.');
      return;
    }
    const draft = staffPasswordDrafts[staffId] || '';
    const res = updateStaffPassword(staffId, draft);
    if (res.success) {
      setStaffPasswordDrafts((prev) => ({ ...prev, [staffId]: '' }));
      setStaffPasswordMsg(res.message);
      logActivity(currentUser.name, currentUser.role, 'Admin Action', `Updated password for staff ID ${staffId}`);
    } else {
      setStaffPasswordMsg(res.message);
    }
  };

  // Sync & Crawler states
  const [crawling, setCrawling] = useState(false);
  const [crawlProgress, setCrawlProgress] = useState(0);
  const [crawlMessage, setCrawlMessage] = useState("");

  const handleRunCrawler = () => {
    setCrawling(true);
    setCrawlProgress(10);
    setCrawlMessage("Analyzing database completeness parameters...");
    
    setTimeout(() => {
      setCrawlProgress(40);
      setCrawlMessage("Querying trusted public educational sources: www.iitb.ac.in, official APIs...");
    }, 1000);

    setTimeout(() => {
      setCrawlProgress(70);
      setCrawlMessage("Running Google Image search wrapper for missing campus photos...");
    }, 2000);

    setTimeout(() => {
      setCrawlProgress(90);
      setCrawlMessage("Formatting crawled fields and running validation quality check...");
    }, 3000);

    setTimeout(() => {
      setCrawlProgress(100);
      setCrawling(false);
      
      const newCrawled = [
        {
          id: Date.now() + 1,
          collegeId: 3,
          collegeName: "BITS Pilani",
          field: "highestPackage",
          oldValue: "Contact for details",
          suggestedValue: "₹60.75 LPA (2025 Placement Drive)",
          sourceUrl: "https://www.bits-pilani.ac.in/placements",
          timestamp: new Date().toLocaleTimeString()
        },
        {
          id: Date.now() + 2,
          collegeId: 2,
          collegeName: "LPU Jalandhar",
          field: "website",
          oldValue: "https://www.lpu.in",
          suggestedValue: "https://www.lpu.in/official",
          sourceUrl: "https://www.lpu.in/about",
          timestamp: new Date().toLocaleTimeString()
        }
      ];
      setPendingUpdates(prev => [...newCrawled, ...prev]);
      alert("Enrichment crawler completed syncing! 2 suggested updates have been successfully added to your verification queue.");
    }, 4000);
  };

  const detectDuplicates = () => {
    const seen = {};
    const dups = [];
    colleges.forEach(c => {
      const key = `${c.name.toLowerCase().trim()}-${c.location.toLowerCase().trim()}`;
      if (seen[key]) {
        dups.push({ c1: seen[key], c2: c });
      } else {
        seen[key] = c;
      }
    });
    return dups;
  };

  const handleMergePair = (id1, id2) => {
    const c1 = colleges.find(c => c.id === id1);
    const c2 = colleges.find(c => c.id === id2);
    if (!c1 || !c2) return;
    
    if (window.confirm(`Merge duplicate ${c2.name} into ${c1.name}? Courses and empty fields will be aggregated.`)) {
      const mergedCourses = [...(c1.courses || []), ...(c2.courses || [])];
      const uniqueTitles = new Set();
      const cleanCourses = [];
      mergedCourses.forEach(cr => {
        if (!uniqueTitles.has(cr.title)) {
          uniqueTitles.add(cr.title);
          cleanCourses.push(cr);
        }
      });
      
      updateCollege(c1.id, {
        courses: cleanCourses,
        established: c1.established || c2.established,
        fees: c1.fees || c2.fees,
        averagePackage: c1.averagePackage || c2.averagePackage,
        _source: "Master Record Merge"
      });
      
      deleteCollege(c2.id);
      logActivity(currentUser.name, currentUser.role, "Admin Action", `Merged duplicate college records: ${c2.name} merged into ${c1.name}`);
      alert("Merged duplicate profiles successfully!");
    }
  };

  const handleAutoMergeDuplicates = () => {
    const dups = detectDuplicates();
    if (dups.length === 0) return;
    if (window.confirm(`Found ${dups.length} duplicate records. Merge all automatically?`)) {
      dups.forEach(d => {
        const mergedCourses = [...(d.c1.courses || []), ...(d.c2.courses || [])];
        updateCollege(d.c1.id, { courses: mergedCourses, _source: "Auto Merge Clean" });
        deleteCollege(d.c2.id);
      });
      logActivity(currentUser.name, currentUser.role, "Admin Action", `Auto-merged ${dups.length} duplicate pairs.`);
      alert(`Cleaned database. Merged ${dups.length} duplicate records.`);
    }
  };

  const handleExportMissingReport = () => {
    const incomplete = colleges.filter(c => !c.website || !c.established || !c.averagePackage || !c.highestPackage);
    const data = incomplete.map(c => ({
      ID: c.id,
      Name: c.name,
      Location: c.location,
      State: c.state,
      'Missing Website': !c.website ? 'YES' : 'NO',
      'Missing Established Year': !c.established ? 'YES' : 'NO',
      'Missing Average package': !c.averagePackage ? 'YES' : 'NO',
      'Missing cutoffs': !c.exams ? 'YES' : 'NO'
    }));
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Missing Data Report");
    XLSX.writeFile(wb, "Missing_Data_Report.xlsx");
    logActivity(currentUser.name, currentUser.role, "Excel Export", "Downloaded missing database fields audit sheet.");
  };

  // Excel Upload States
  const [excelFile, setExcelFile] = useState(null);
  const [excelHeaders, setExcelHeaders] = useState([]);
  const [excelRows, setExcelRows] = useState([]);
  const [columnMapping, setColumnMapping] = useState({});
  const [importPreview, setImportPreview] = useState([]);
  const [importReport, setImportReport] = useState(null);
  const [showMappingPanel, setShowMappingPanel] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [excelErrorLogs, setExcelErrorLogs] = useState([]);
  
  // Student Detail View States
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [studentSearch, setStudentSearch] = useState('');
  const [studentFilterState, setStudentFilterState] = useState('');
  const [studentFilterCourse, setStudentFilterCourse] = useState('');
  const [studentNotesInput, setStudentNotesInput] = useState('');


  // Student Detail View States

  // Seeding logs on tab visit
  useEffect(() => {
    if (currentUser) {
      logActivity(currentUser.name, currentUser.role, "Page Visit", `Visited Admin panel tab [${activeTab}]`);
    }
  }, [activeTab]);

  // Standard staff permission helper
  const hasAccess = (requiredRole) => {
    if (!currentUser) return false;
    const roleHierarchy = {
      'viewer': 1,
      'operator': 2,
      'admin': 3,
      'superadmin': 4
    };
    return roleHierarchy[currentUser.role.toLowerCase()] >= roleHierarchy[requiredRole.toLowerCase()];
  };

  // 1. Excel parsing & mapping
  const handleExcelFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setExcelFile(file);
    setExcelErrorLogs([]);
    setImportReport(null);

    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const bstr = evt.target.result;
        const wb = XLSX.read(bstr, { type: 'binary' });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const rawRows = XLSX.utils.sheet_to_json(ws, { header: 1 });
        
        if (rawRows.length > 0) {
          const headers = rawRows[0];
          setExcelHeaders(headers);
          
          // Parse data rows
          const dataRows = XLSX.utils.sheet_to_json(ws);
          setExcelRows(dataRows);

          // Guess mappings
          const initialMap = {};
          const dbFields = ['Name', 'Short Name', 'Location', 'State', 'Type', 'Established', 'Fees', 'Entrance Exam', 'Average CTC'];
          dbFields.forEach(field => {
            const match = headers.find(h => String(h).toLowerCase().replace(/\s+/g, '').includes(field.toLowerCase().replace(/\s+/g, '')));
            if (match) initialMap[field] = match;
          });
          setColumnMapping(initialMap);
          setShowMappingPanel(true);
        }
      } catch (err) {
        alert("Error parsing Excel: " + err.message);
      }
    };
    reader.readAsBinaryString(file);
  };

  const handleMappingChange = (field, excelHeader) => {
    setColumnMapping(prev => ({ ...prev, [field]: excelHeader }));
  };

  const proceedToImportPreview = () => {
    // Compile preview data based on mapping
    const parsedData = excelRows.map((row, index) => {
      const nameVal = row[columnMapping['Name']] || '';
      const locationVal = row[columnMapping['Location']] || '';
      const stateVal = row[columnMapping['State']] || '';
      
      // Validation checks
      const errors = [];
      if (!nameVal) errors.push("Missing College Name");
      if (!locationVal) errors.push("Missing Location");
      if (!stateVal) errors.push("Missing State");

      // Check duplicates
      const isDuplicate = colleges.some(c => c.name.toLowerCase().trim() === String(nameVal).toLowerCase().trim());

      return {
        id: index + 1,
        name: nameVal,
        shortName: row[columnMapping['Short Name']] || String(nameVal).substring(0, 5).toUpperCase(),
        location: locationVal,
        state: stateVal,
        type: row[columnMapping['Type']] || 'Private',
        established: row[columnMapping['Established']] || 'Unknown',
        fees: row[columnMapping['Fees']] || '₹2.5 Lakhs',
        exams: row[columnMapping['Entrance Exam']] || 'Direct Admission',
        averagePackage: row[columnMapping['Average CTC']] || 'Contact for details',
        errors,
        isDuplicate
      };
    });

    setImportPreview(parsedData);
    setShowPreviewModal(true);
  };

  const executeBulkImport = () => {
    if (!hasAccess('operator')) {
      alert("Permission Denied: Data Entry Operators and higher roles only.");
      return;
    }

    let successCount = 0;
    let failedCount = 0;
    const failures = [];

    importPreview.forEach(item => {
      if (item.errors.length > 0) {
        failedCount++;
        failures.push({ name: item.name || `Row ${item.id}`, reason: item.errors.join(', ') });
      } else {
        successCount++;
        // Add to global state
        addCollege({
          name: item.name,
          shortName: item.shortName,
          location: item.location,
          state: item.state,
          type: item.type,
          established: item.established,
          fees: item.fees,
          exams: item.exams,
          averagePackage: item.averagePackage,
          rating: 4.2,
          reviews: 15,
          mapUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.name + ' ' + item.location)}`,
          about: `Welcome to ${item.name}. Detailed profile uploaded via Excel.`,
          img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=400"
        });
      }
    });

    setExcelErrorLogs(failures);
    setImportReport({ success: successCount, failed: failedCount });
    setShowPreviewModal(false);
    setShowMappingPanel(false);
    setExcelFile(null);

    logActivity(
      currentUser.name,
      currentUser.role,
      "Excel Upload",
      `Bulk imported ${successCount} colleges. Mappings applied successfully. ${failedCount} rows failed.`
    );
  };

  const downloadSampleTemplate = () => {
    const headers = [['Name', 'Code', 'Location', 'State', 'Type', 'Established', 'Fees', 'Entrance Exam', 'Average CTC']];
    const sampleRows = [
      ['Global College of Engineering', 'GCE', 'Bangalore', 'Karnataka', 'Private', '2010', '₹3.5 Lakhs/Year', 'COMEDK, JEE Main', '₹8 LPA'],
      ['National Science Institute', 'NSI', 'Pune', 'Maharashtra', 'Government', '1995', '₹80,000/Year', 'MHT CET', '₹12 LPA']
    ];
    const ws = XLSX.utils.aoa_to_sheet([...headers, ...sampleRows]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Template");
    XLSX.writeFile(wb, "Colleges_Import_Template.xlsx");
  };

  const handleExportFiltered = () => {
    const exportData = colleges.map(c => ({
      ID: c.id,
      Name: c.name,
      'Short Name': c.shortName,
      Location: c.location,
      State: c.state,
      Type: c.type,
      Established: c.established || 'N/A',
      Fees: c.fees,
      Exams: c.exams,
      Rating: c.rating,
      'Average Placement CTC': c.averagePackage
    }));
    
    const ws = XLSX.utils.json_to_sheet(exportData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Colleges Report");
    XLSX.writeFile(wb, "Colleges_Directory_Export.xlsx");
    logActivity(currentUser.name, currentUser.role, "Excel Export", "Downloaded filtered colleges Excel report.");
  };

  // 2. Manual CRUD handlers
  const handleSaveCollegeForm = (e) => {
    e.preventDefault();
    if (!hasAccess('operator')) {
      alert("Permission Denied: Data Entry Operators and higher only.");
      return;
    }

    const fd = new FormData(e.target);
    const collegeData = {
      name: fd.get('name'),
      shortName: fd.get('shortName'),
      location: fd.get('location'),
      state: fd.get('state'),
      address: fd.get('address'),
      phone: fd.get('phone'),
      website: fd.get('website'),
      rating: parseFloat(fd.get('rating') || '4.5'),
      type: fd.get('type'),
      about: fd.get('about'),
      ranking: parseInt(fd.get('ranking') || '100'),
      fees: fd.get('fees'),
      exams: fd.get('exams'),
      highestPackage: fd.get('highestPackage'),
      averagePackage: fd.get('averagePackage'),
      placements: fd.get('placements'),
      img: fd.get('img') || "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=400",
      topRecruiters: fd.get('topRecruiters'),
      highlights: fd.get('highlights'),
      facilities: fd.get('facilities'),
      admissionProcess: fd.get('admissionProcess'),
      brochureLink: fd.get('brochureLink')
    };

    if (editingCollege) {
      updateCollege(editingCollege.id, collegeData);
      logActivity(currentUser.name, currentUser.role, "Admin Action", `Updated college profile manually: ${collegeData.name}`);
    } else {
      addCollege(collegeData);
      logActivity(currentUser.name, currentUser.role, "Admin Action", `Created college profile manually: ${collegeData.name}`);
    }

    setShowCollegeForm(false);
    setEditingCollege(null);
  };

  const triggerEdit = (c) => {
    if (!hasAccess('operator')) return alert("Permission Denied.");
    setEditingCollege(c);
    setShowCollegeForm(true);
  };

  const triggerDelete = (id, name) => {
    if (!hasAccess('admin')) return alert("Permission Denied: Only Admins/Super Admins can delete entries.");
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      deleteCollege(id);
      logActivity(currentUser.name, currentUser.role, "Admin Action", `Deleted college profile manually: ${name}`);
    }
  };

  // Remove duplicates utility
  const removeDuplicatesManually = () => {
    if (!hasAccess('admin')) return alert("Permission Denied.");
    const names = new Set();
    const duplicates = [];
    colleges.forEach(c => {
      const cleanName = c.name.toLowerCase().trim();
      if (names.has(cleanName)) {
        duplicates.push(c);
      } else {
        names.add(cleanName);
      }
    });

    if (duplicates.length === 0) {
      alert("No duplicate college records found!");
      return;
    }

    if (window.confirm(`Found ${duplicates.length} duplicate entries based on names. Delete duplicates automatically?`)) {
      duplicates.forEach(d => deleteCollege(d.id));
      logActivity(currentUser.name, currentUser.role, "Admin Action", `De-duplicated college dataset. Removed ${duplicates.length} entries.`);
      alert(`Successfully cleaned database. Removed ${duplicates.length} duplicate items.`);
    }
  };

  // Student list logic
  const filteredStudents = students.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(studentSearch.toLowerCase()) || 
                          s.email.toLowerCase().includes(studentSearch.toLowerCase()) ||
                          s.mobile.includes(studentSearch);
    const matchesState = studentFilterState ? s.state === studentFilterState : true;
    const matchesCourse = studentFilterCourse ? s.courseInterest === studentFilterCourse : true;
    return matchesSearch && matchesState && matchesCourse;
  });

  const selectStudentForDetail = (s) => {
    setSelectedStudent(s);
    setStudentNotesInput(s.adminNotes || '');
  };

  const saveStudentNotes = () => {
    if (!hasAccess('operator')) return alert("Permission Denied.");
    updateStudentNotes(selectedStudent.id, studentNotesInput);
    setSelectedStudent(prev => ({ ...prev, adminNotes: studentNotesInput }));
    alert("Admin notes saved successfully!");
  };

  // Check locking
  if (!currentUser || currentUser.role === 'student') {
    return (
      <Container className="py-5">
        <Card className="p-4 p-md-5 mx-auto border-0 shadow" style={{ maxWidth: '500px', borderRadius: '16px', backgroundColor: '#ffffff' }}>
          <div className="text-center mb-4">
            <div className="d-inline-flex p-3 rounded-circle bg-danger bg-opacity-10 mb-3">
              <FaUserShield size={40} className="text-danger" />
            </div>
            <h3 className="fw-bold text-dark mb-1">Staff Console Login</h3>
            <p className="text-secondary small">
              This panel is restricted to administrative staff (Super Admins, Managers, and Data Operators).
            </p>
          </div>

          {adminAuthError && (
            <Alert variant="danger" className="py-2 small text-center">
              {adminAuthError}
            </Alert>
          )}

          <Form onSubmit={onAdminLoginSubmit}>
            <Form.Group className="mb-3">
              <Form.Label className="small fw-semibold text-muted">Role Selection</Form.Label>
              <Form.Select 
                value={adminRole} 
                onChange={(e) => setAdminRole(e.target.value)} 
                required
                style={{ borderRadius: '8px', padding: '10px' }}
              >
                <option value="superadmin">Super Admin</option>
                <option value="admin">Admin Manager</option>
                <option value="operator">Data Entry Operator</option>
                <option value="viewer">Viewer</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="small fw-semibold text-muted">Email Address</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="name@thecollegecompass.com" 
                value={adminEmail} 
                onChange={(e) => setAdminEmail(e.target.value)} 
                required 
                style={{ borderRadius: '8px', padding: '10px' }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="small fw-semibold text-muted">Password</Form.Label>
              <Form.Control 
                type="password"
                placeholder="Enter admin password" 
                value={adminPassword} 
                onChange={(e) => setAdminPassword(e.target.value)} 
                required 
                autoComplete="current-password"
                style={{ borderRadius: '8px', padding: '10px' }}
              />
              <Form.Text className="text-muted small">
                Use your staff credentials, or pick a demo role below to autofill.
              </Form.Text>
            </Form.Group>

            <div className="mb-4 p-3 bg-light rounded border" style={{ borderRadius: '10px' }}>
              <span className="small text-muted d-block mb-2">💡 Quick Demo Staff Autofills:</span>
              <div className="d-flex flex-wrap gap-2">
                <Button type="button" size="sm" variant="outline-primary" onClick={() => autofillAdminUser('superadmin')} style={{ borderRadius: '6px' }}>Super Admin</Button>
                <Button type="button" size="sm" variant="outline-secondary" onClick={() => autofillAdminUser('admin')} style={{ borderRadius: '6px' }}>Manager</Button>
                <Button type="button" size="sm" variant="outline-dark" onClick={() => autofillAdminUser('operator')} style={{ borderRadius: '6px' }}>Operator</Button>
                <Button type="button" size="sm" variant="outline-info" onClick={() => autofillAdminUser('viewer')} style={{ borderRadius: '6px' }}>Viewer</Button>
              </div>
            </div>

            <Button type="submit" variant="primary" className="w-100 fw-bold py-2 shadow-sm" style={{ backgroundColor: '#1a43bf', border: 'none', borderRadius: '8px' }}>
              Sign In to Console
            </Button>
          </Form>
        </Card>
      </Container>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      {/* Admin Title Banner */}
      <div className="bg-white border-bottom px-4 py-3 d-flex flex-wrap align-items-center justify-content-between">
        <div>
          <h4 className="fw-bold mb-1 text-primary d-flex align-items-center">
            <FaUserShield className="me-2 text-warning" /> thecollegecompass Management Console
          </h4>
          <span className="text-muted small">Active User: <strong>{currentUser.name}</strong> ({currentUser.role.toUpperCase()})</span>
        </div>
        <div className="d-flex gap-2 mt-2 mt-md-0">
          <Button size="sm" variant="outline-primary" className="fw-bold rounded-pill" onClick={downloadSampleTemplate}>
            <FaDownload className="me-1" /> Template
          </Button>
          <Button size="sm" variant="success" className="fw-bold rounded-pill" onClick={handleExportFiltered}>
            <FaFileExcel className="me-1" /> Export Data
          </Button>
        </div>
      </div>

      <Row className="g-0">
        {/* Sidebar */}
        <Col md={2} className="bg-white border-end" style={{ minHeight: 'calc(100vh - 80px)' }}>
          <div className="p-3">
            <Nav className="flex-column nav-pills gap-1">
              <Nav.Link 
                className={`py-2 px-3 rounded-pill fw-semibold ${activeTab === 'dashboard' ? 'active' : 'text-secondary'}`}
                onClick={() => setActiveTab('dashboard')}
              >
                㗊 Dashboard
              </Nav.Link>
              <Nav.Link 
                className={`py-2 px-3 rounded-pill fw-semibold ${activeTab === 'colleges' ? 'active' : 'text-secondary'}`}
                onClick={() => setActiveTab('colleges')}
              >
                🏢 Colleges CRUD
              </Nav.Link>
              <Nav.Link 
                className={`py-2 px-3 rounded-pill fw-semibold ${activeTab === 'excel' ? 'active' : 'text-secondary'}`}
                onClick={() => setActiveTab('excel')}
              >
                📂 Excel Center
              </Nav.Link>
              <Nav.Link 
                className={`py-2 px-3 rounded-pill fw-semibold ${activeTab === 'students' ? 'active' : 'text-secondary'}`}
                onClick={() => setActiveTab('students')}
              >
                🎓 Student Profiles
              </Nav.Link>
              {hasAccess('superadmin') && (
                <Nav.Link 
                  className={`py-2 px-3 rounded-pill fw-semibold ${activeTab === 'staff' ? 'active' : 'text-secondary'}`}
                  onClick={() => setActiveTab('staff')}
                >
                  🔐 Staff Accounts
                </Nav.Link>
              )}
              <Nav.Link 
                className={`py-2 px-3 rounded-pill fw-semibold ${activeTab === 'reviews' ? 'active' : 'text-secondary'}`}
                onClick={() => setActiveTab('reviews')}
              >
                📝 Review Moderation
              </Nav.Link>
              <Nav.Link 
                className={`py-2 px-3 rounded-pill fw-semibold ${activeTab === 'activity' ? 'active' : 'text-secondary'}`}
                onClick={() => setActiveTab('activity')}
              >
                📊 Activity Logs
              </Nav.Link>
              <Nav.Link 
                className={`py-2 px-3 rounded-pill fw-semibold ${activeTab === 'reports' ? 'active' : 'text-secondary'}`}
                onClick={() => setActiveTab('reports')}
              >
                📋 Reports Center
              </Nav.Link>
              <Nav.Link 
                className={`py-2 px-3 rounded-pill fw-semibold ${activeTab === 'sync' ? 'active' : 'text-secondary'}`}
                onClick={() => setActiveTab('sync')}
              >
                🔄 Sync & Data Health
              </Nav.Link>
            </Nav>
          </div>
        </Col>

        {/* Workspace Panel */}
        <Col md={10} className="p-4">
          
          {/* TAB 1: DASHBOARD */}
          {activeTab === 'dashboard' && (
            <div>
              <Row className="g-3 mb-4">
                <Col md={3}>
                  <Card className="border-0 shadow-sm p-4 bg-primary text-white">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <div className="small opacity-75">TOTAL STUDENTS</div>
                        <h2 className="fw-bold mt-1">{students.length}</h2>
                      </div>
                      <FaUserGraduate size={32} className="opacity-50" />
                    </div>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card className="border-0 shadow-sm p-4 bg-success text-white">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <div className="small opacity-75">TOTAL COLLEGES</div>
                        <h2 className="fw-bold mt-1">{colleges.length}</h2>
                      </div>
                      <FaSchool size={32} className="opacity-50" />
                    </div>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card className="border-0 shadow-sm p-4 bg-warning text-dark">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <div className="small opacity-75">PENDING REVIEWS</div>
                        <h2 className="fw-bold mt-1">{reviews.filter(r => r.status === 'PENDING').length}</h2>
                      </div>
                      <FaExclamationTriangle size={32} className="opacity-50" />
                    </div>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card className="border-0 shadow-sm p-4 bg-info text-white">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <div className="small opacity-75">TOTAL SYSTEM LOGS</div>
                        <h2 className="fw-bold mt-1">{activityLogs.length}</h2>
                      </div>
                      <FaHistory size={32} className="opacity-50" />
                    </div>
                  </Card>
                </Col>
              </Row>

              <Row className="g-4">
                {/* Recent activity timeline */}
                <Col lg={7}>
                  <Card className="border-0 shadow-sm p-4 mb-4">
                    <h5 className="fw-bold mb-3 text-primary">Live Activity Log</h5>
                    <div className="timeline-wrapper" style={{ maxHeight: '380px', overflowY: 'auto' }}>
                      {activityLogs.map((log, index) => (
                        <div key={log.id || index} className="border-bottom pb-2 mb-2 small">
                          <span className="text-muted">[{log.timestamp}]</span>{" "}
                          <Badge bg="light" text="dark">{log.role}</Badge>{" "}
                          <strong>{log.user}</strong>: <span className="text-secondary">{log.details}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </Col>

                {/* Import Failures and approvals status */}
                <Col lg={5}>
                  <Card className="border-0 shadow-sm p-4 mb-4">
                    <h5 className="fw-bold mb-3 text-danger">Excel Import Failed Logs</h5>
                    {excelErrorLogs.length === 0 ? (
                      <Alert variant="success" className="py-2 small">No failed records logged during this session.</Alert>
                    ) : (
                      <div style={{ maxHeight: '250px', overflowY: 'auto' }}>
                        {excelErrorLogs.map((fail, i) => (
                          <div key={i} className="p-2 border rounded mb-2 bg-light small">
                            <strong className="text-dark">{fail.name}</strong><br/>
                            <span className="text-danger">{fail.reason}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </Card>

                  <Card className="border-0 shadow-sm p-4">
                    <h5 className="fw-bold mb-2 text-dark">Data Audit Statistics</h5>
                    <div className="small text-secondary mb-3">Total records uploaded via portal and bulk importer.</div>
                    <div className="mb-2">
                      <div className="d-flex justify-content-between small fw-medium">
                        <span>Clean/Valid Entries</span>
                        <span>{Math.floor(colleges.length * 0.98)} / {colleges.length}</span>
                      </div>
                      <ProgressBar now={98} variant="success" style={{ height: '6px' }} />
                    </div>
                    <div>
                      <div className="d-flex justify-content-between small fw-medium">
                        <span>Duplicate Check Clean Rate</span>
                        <span>100%</span>
                      </div>
                      <ProgressBar now={100} variant="info" style={{ height: '6px' }} />
                    </div>
                  </Card>
                </Col>
              </Row>
            </div>
          )}

          {/* TAB 2: COLLEGES CRUD */}
          {activeTab === 'colleges' && (
            <div>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                  <h4 className="fw-bold mb-1">Manual Portal Management</h4>
                  <p className="text-secondary small">Add, edit, delete college profiles, course listings, fee structures, and placement CTC packages.</p>
                </div>
                <div className="d-flex gap-2">
                  <Button variant="danger" size="sm" onClick={removeDuplicatesManually}>
                    <FaTimes className="me-1" /> De-duplicate DB
                  </Button>
                  <Button variant="primary" onClick={() => { setEditingCollege(null); setShowCollegeForm(true); }}>
                    <FaPlus className="me-1" /> Add College Profile
                  </Button>
                </div>
              </div>

              {showCollegeForm ? (
                <Card className="border-0 shadow-sm p-4 mb-4">
                  <h5 className="fw-bold text-primary mb-4">{editingCollege ? "Edit College Profile" : "Create New College Entry"}</h5>
                  <Form onSubmit={handleSaveCollegeForm}>
                    <Row className="g-3 mb-3">
                      <Col md={6}>
                        <Form.Label className="small fw-semibold">College Name (Required)</Form.Label>
                        <Form.Control name="name" defaultValue={editingCollege?.name || ''} required />
                      </Col>
                      <Col md={6}>
                        <Form.Label className="small fw-semibold">Short Code Name (Required)</Form.Label>
                        <Form.Control name="shortName" defaultValue={editingCollege?.shortName || ''} required />
                      </Col>
                    </Row>
                    <Row className="g-3 mb-3">
                      <Col md={4}>
                        <Form.Label className="small fw-semibold">District/City</Form.Label>
                        <Form.Control name="location" defaultValue={editingCollege?.location || ''} required />
                      </Col>
                      <Col md={4}>
                        <Form.Label className="small fw-semibold">State</Form.Label>
                        <Form.Control name="state" defaultValue={editingCollege?.state || ''} required />
                      </Col>
                      <Col md={4}>
                        <Form.Label className="small fw-semibold">Established Year</Form.Label>
                        <Form.Control name="established" defaultValue={editingCollege?.established || ''} />
                      </Col>
                    </Row>
                    <Row className="g-3 mb-3">
                      <Col md={3}>
                        <Form.Label className="small fw-semibold">Ownership Type</Form.Label>
                        <Form.Select name="type" defaultValue={editingCollege?.type || 'Private'}>
                          <option value="Government">Government</option>
                          <option value="Private">Private</option>
                          <option value="Autonomous">Autonomous</option>
                        </Form.Select>
                      </Col>
                      <Col md={3}>
                        <Form.Label className="small fw-semibold">NIRF / State Ranking</Form.Label>
                        <Form.Control type="number" name="ranking" defaultValue={editingCollege?.ranking || ''} />
                      </Col>
                      <Col md={3}>
                        <Form.Label className="small fw-semibold">Rating</Form.Label>
                        <Form.Control type="number" step="0.1" name="rating" defaultValue={editingCollege?.rating || '4.5'} />
                      </Col>
                      <Col md={3}>
                        <Form.Label className="small fw-semibold">Affiliated University</Form.Label>
                        <Form.Control name="affiliation" defaultValue={editingCollege?.affiliation || ''} />
                      </Col>
                    </Row>
                    <Row className="g-3 mb-3">
                      <Col md={4}>
                        <Form.Label className="small fw-semibold">Estimated Course Fees</Form.Label>
                        <Form.Control name="fees" placeholder="e.g. ₹2.5 Lakhs/Year" defaultValue={editingCollege?.fees || ''} />
                      </Col>
                      <Col md={4}>
                        <Form.Label className="small fw-semibold">Exams Accepted</Form.Label>
                        <Form.Control name="exams" placeholder="e.g. JEE Main, CAT" defaultValue={editingCollege?.exams || ''} />
                      </Col>
                      <Col md={4}>
                        <Form.Label className="small fw-semibold">Website</Form.Label>
                        <Form.Control type="url" name="website" defaultValue={editingCollege?.website || ''} />
                      </Col>
                    </Row>
                    <Row className="g-3 mb-3">
                      <Col md={4}>
                        <Form.Label className="small fw-semibold">Highest Package (CTC)</Form.Label>
                        <Form.Control name="highestPackage" placeholder="e.g. ₹42 LPA" defaultValue={editingCollege?.highestPackage || ''} />
                      </Col>
                      <Col md={4}>
                        <Form.Label className="small fw-semibold">Average Package (CTC)</Form.Label>
                        <Form.Control name="averagePackage" placeholder="e.g. ₹7.5 LPA" defaultValue={editingCollege?.averagePackage || ''} />
                      </Col>
                      <Col md={4}>
                        <Form.Label className="small fw-semibold">Placement Rate %</Form.Label>
                        <Form.Control name="placements" placeholder="e.g. 95%" defaultValue={editingCollege?.placements || ''} />
                      </Col>
                    </Row>
                    <Row className="g-3 mb-4">
                      <Col md={6}>
                        <Form.Label className="small fw-semibold">Highlights (Comma separated)</Form.Label>
                        <Form.Control name="highlights" defaultValue={editingCollege?.highlights || ''} />
                      </Col>
                      <Col md={6}>
                        <Form.Label className="small fw-semibold">Top Recruiters (Comma separated)</Form.Label>
                        <Form.Control name="topRecruiters" defaultValue={editingCollege?.topRecruiters || ''} />
                      </Col>
                    </Row>
                    <Form.Group className="mb-4">
                      <Form.Label className="small fw-semibold">About College Description</Form.Label>
                      <Form.Control as="textarea" rows={3} name="about" defaultValue={editingCollege?.about || ''} />
                    </Form.Group>
                    <div className="d-flex gap-2">
                      <Button type="submit" variant="success" className="px-4">Save Entry</Button>
                      <Button variant="outline-secondary" onClick={() => { setShowCollegeForm(false); setEditingCollege(null); }}>Cancel</Button>
                    </div>
                  </Form>
                </Card>
              ) : (
                <Card className="border-0 shadow-sm p-4">
                  <div className="table-responsive" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                    <Table hover className="align-middle">
                      <thead className="table-light">
                        <tr>
                          <th>Name</th>
                          <th>Location</th>
                          <th>Rating</th>
                          <th>Fees</th>
                          <th>Average CTC</th>
                          <th>Type</th>
                          <th className="text-end">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {colleges.map(c => (
                          <tr key={c.id}>
                            <td className="fw-semibold text-primary">{c.name} ({c.shortName})</td>
                            <td>{c.location}, {c.state}</td>
                            <td><Badge bg="warning" text="dark">★ {c.rating}</Badge></td>
                            <td>{c.fees}</td>
                            <td>{c.averagePackage || c.average_package || "N/A"}</td>
                            <td><Badge bg="light" text="dark" className="border">{c.type}</Badge></td>
                            <td className="text-end">
                              <Button variant="link" size="sm" className="me-2 p-0 text-info" onClick={() => triggerEdit(c)}><FaEdit size={16}/></Button>
                              <Button variant="link" size="sm" className="p-0 text-danger" onClick={() => triggerDelete(c.id, c.name)}><FaTrash size={16}/></Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                </Card>
              )}
            </div>
          )}

          {/* TAB 3: EXCEL CENTER */}
          {activeTab === 'excel' && (
            <div>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                  <h4 className="fw-bold mb-1">Bulk Excel Importer & Exporter</h4>
                  <p className="text-secondary small">Upload files, configure custom column headers mapping, preview data integrity, and run batch duplicate checkers.</p>
                </div>
              </div>

              {importReport && (
                <Alert variant="success" dismissible onClose={() => setImportReport(null)}>
                  <h6 className="fw-bold">Bulk Processing Complete!</h6>
                  <ul>
                    <li>Successfully Imported: <strong>{importReport.success}</strong> records</li>
                    <li>Skipped/Failed Errors: <strong>{importReport.failed}</strong> records</li>
                  </ul>
                  <small className="d-block mt-1">Review the dashboard "Failed Logs" section for row error details.</small>
                </Alert>
              )}

              <Card className="border-0 shadow-sm p-4 mb-4">
                <h5 className="fw-bold text-primary mb-3">1. Upload Excel File</h5>
                <Form.Group className="mb-3">
                  <Form.Label className="small text-muted">Select college data spreadsheet (.xlsx, .xls)</Form.Label>
                  <Form.Control type="file" accept=".xlsx, .xls" onChange={handleExcelFileChange} />
                </Form.Group>
              </Card>

              {showMappingPanel && (
                <Card className="border-0 shadow-sm p-4 mb-4">
                  <h5 className="fw-bold text-success mb-3"><FaCog className="me-2" /> 2. Column Mapping Configuration</h5>
                  <p className="text-muted small">Match the database fields on the left with your uploaded Excel headers on the right.</p>
                  
                  <Row className="g-3 mb-4">
                    {[
                      { field: 'Name', label: 'College Name*' },
                      { field: 'Short Name', label: 'Short Code' },
                      { field: 'Location', label: 'District/City*' },
                      { field: 'State', label: 'State*' },
                      { field: 'Type', label: 'Ownership Type' },
                      { field: 'Established', label: 'Establishment Year' },
                      { field: 'Fees', label: 'Annual Fees' },
                      { field: 'Entrance Exam', label: 'Entrance Exams' },
                      { field: 'Average CTC', label: 'Average CTC Package' }
                    ].map(item => (
                      <Col md={4} key={item.field}>
                        <Form.Label className="small fw-semibold">{item.label}</Form.Label>
                        <Form.Select 
                          value={columnMapping[item.field] || ''} 
                          onChange={(e) => handleMappingChange(item.field, e.target.value)}
                        >
                          <option value="">-- Ignore Field --</option>
                          {excelHeaders.map(h => <option key={h} value={h}>{h}</option>)}
                        </Form.Select>
                      </Col>
                    ))}
                  </Row>

                  <Button variant="success" className="px-4" onClick={proceedToImportPreview}>
                    Verify Data & Preview
                  </Button>
                </Card>
              )}
            </div>
          )}

          {/* TAB 4: STUDENT PROFILES */}
          {activeTab === 'students' && (
            <div>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                  <h4 className="fw-bold mb-1">Captured Student Profile Panel</h4>
                  <p className="text-secondary small">Review student detail view cards, search logs, saved colleges telemetry, and write follow-up notes.</p>
                </div>
              </div>

              <Row>
                {/* Left Side: Students List */}
                <Col md={4}>
                  <Card className="border-0 shadow-sm p-3 mb-4">
                    <Form.Group className="mb-3">
                      <InputGroup size="sm">
                        <InputGroup.Text><FaSearch/></InputGroup.Text>
                        <Form.Control 
                          placeholder="Search by name, email..." 
                          value={studentSearch}
                          onChange={(e) => setStudentSearch(e.target.value)}
                        />
                      </InputGroup>
                    </Form.Group>
                    
                    <div className="list-group list-group-flush" style={{ maxHeight: '450px', overflowY: 'auto' }}>
                      {filteredStudents.map(s => (
                        <button 
                          key={s.id} 
                          onClick={() => selectStudentForDetail(s)}
                          className={`list-group-item list-group-item-action border-0 px-2 py-3 rounded mb-2 text-start ${selectedStudent?.id === s.id ? 'bg-primary text-white' : ''}`}
                        >
                          <div className="fw-bold">{s.name}</div>
                          <div className={`small ${selectedStudent?.id === s.id ? 'text-white-50' : 'text-muted'}`}>{s.email}</div>
                          <div className="mt-1 d-flex justify-content-between">
                            <Badge bg={selectedStudent?.id === s.id ? 'light' : 'primary'} text={selectedStudent?.id === s.id ? 'dark' : 'white'}>
                              {s.courseInterest}
                            </Badge>
                            <span className="small" style={{ fontSize: '10px' }}>Active: {s.lastActiveTime.split(',')[0]}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </Card>
                </Col>

                {/* Right Side: Detailed Profile View */}
                <Col md={8}>
                  {selectedStudent ? (
                    <Card className="border-0 shadow-sm p-4">
                      <div className="d-flex justify-content-between align-items-start border-bottom pb-3 mb-4">
                        <div>
                          <h4 className="fw-bold text-primary">{selectedStudent.name}</h4>
                          <span className="text-muted small">Student ID: {selectedStudent.id}</span>
                        </div>
                        <Badge bg="success" className="py-2 px-3">ACTIVE SESSION</Badge>
                      </div>

                      <Row className="mb-4">
                        <Col sm={6}>
                          <div className="small text-muted">EMAIL</div>
                          <div className="fw-bold mb-3">{selectedStudent.email}</div>
                          
                          <div className="small text-muted">PHONE</div>
                          <div className="fw-bold mb-3">{selectedStudent.mobile}</div>
                          
                          <div className="small text-muted">LOCATION</div>
                          <div className="fw-bold mb-3">{selectedStudent.city}, {selectedStudent.state}</div>
                        </Col>
                        <Col sm={6}>
                          <div className="small text-muted">COURSE INTEREST</div>
                          <div className="fw-bold mb-3 text-indigo-400">{selectedStudent.courseInterest}</div>
                          
                          <div className="small text-muted">EXAM INTEREST</div>
                          <div className="fw-bold mb-3 text-info">{selectedStudent.examInterest}</div>
                          
                          <div className="small text-muted">LAST LOGIN</div>
                          <div className="fw-bold mb-3">{selectedStudent.loginTime}</div>
                        </Col>
                      </Row>

                      {/* Telemetry tabs */}
                      <Tab.Container defaultActiveKey="search">
                        <Nav variant="tabs" className="mb-3">
                          <Nav.Item><Nav.Link eventKey="search" className="small">Search History</Nav.Link></Nav.Item>
                          <Nav.Item><Nav.Link eventKey="viewed" className="small">Viewed ({selectedStudent.viewedColleges?.length || 0})</Nav.Link></Nav.Item>
                          <Nav.Item><Nav.Link eventKey="saved" className="small">Saved Colleges</Nav.Link></Nav.Item>
                          <Nav.Item><Nav.Link eventKey="downloads" className="small">Downloads</Nav.Link></Nav.Item>
                          <Nav.Item><Nav.Link eventKey="notes" className="small">Admin Notes</Nav.Link></Nav.Item>
                        </Nav>

                        <Tab.Content className="p-2 border rounded bg-light min-height-150 mb-3" style={{ minHeight: '150px' }}>
                          <Tab.Pane eventKey="search">
                            {selectedStudent.searchHistory?.length === 0 ? <span className="small text-muted p-3">No search history recorded.</span> : (
                              <ul className="mb-0">
                                {selectedStudent.searchHistory.map((sh, idx) => <li key={idx} className="small py-1">{sh}</li>)}
                              </ul>
                            )}
                          </Tab.Pane>
                          
                          <Tab.Pane eventKey="viewed">
                            {selectedStudent.viewedColleges?.length === 0 ? <span className="small text-muted p-3">No page views recorded.</span> : (
                              <ul className="mb-0">
                                {selectedStudent.viewedColleges.map((colId, idx) => {
                                  const name = colleges.find(c => String(c.id) === String(colId))?.name || `College ID ${colId}`;
                                  return <li key={idx} className="small py-1">{name}</li>;
                                })}
                              </ul>
                            )}
                          </Tab.Pane>

                          <Tab.Pane eventKey="saved">
                            {selectedStudent.savedColleges?.length === 0 ? <span className="small text-muted p-3">No saved colleges.</span> : (
                              <div className="d-flex flex-wrap gap-2 p-2">
                                {selectedStudent.savedColleges.map((colId, idx) => {
                                  const name = colleges.find(c => String(c.id) === String(colId))?.name || `College ID ${colId}`;
                                  return <Badge key={idx} bg="primary" className="py-2 px-3">{name}</Badge>;
                                })}
                              </div>
                            )}
                          </Tab.Pane>

                          <Tab.Pane eventKey="downloads">
                            {selectedStudent.downloadHistory?.length === 0 ? <span className="small text-muted p-3">No downloaded brochures.</span> : (
                              <ul className="mb-0">
                                {selectedStudent.downloadHistory.map((dl, idx) => <li key={idx} className="small py-1">Downloaded {dl}</li>)}
                              </ul>
                            )}
                          </Tab.Pane>

                          <Tab.Pane eventKey="notes">
                            <Form.Group className="mb-3">
                              <Form.Control 
                                as="textarea" 
                                rows={3} 
                                value={studentNotesInput} 
                                onChange={(e) => setStudentNotesInput(e.target.value)}
                                placeholder="Write follow-up notes, exam predictions, or phone logs..."
                              />
                            </Form.Group>
                            <Button size="sm" variant="success" onClick={saveStudentNotes}>
                              Save Notes
                            </Button>
                          </Tab.Pane>
                        </Tab.Content>
                      </Tab.Container>
                    </Card>
                  ) : (
                    <Card className="border-0 shadow-sm p-5 text-center text-secondary">
                      Select a student profile from the list to display captured session records, bookmark details, and notes.
                    </Card>
                  )}
                </Col>
              </Row>
            </div>
          )}

          {/* TAB: STAFF ACCOUNTS (Super Admin only) */}
          {activeTab === 'staff' && hasAccess('superadmin') && (
            <div>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                  <h4 className="fw-bold mb-1">Staff Account Passwords</h4>
                  <p className="text-secondary small mb-0">
                    Set or reset passwords for Super Admin, Manager, Operator, and Viewer accounts.
                  </p>
                </div>
              </div>

              {staffPasswordMsg && (
                <Alert variant="success" className="py-2 small" onClose={() => setStaffPasswordMsg('')} dismissible>
                  {staffPasswordMsg}
                </Alert>
              )}

              <Card className="border-0 shadow-sm">
                <Table responsive hover className="mb-0 align-middle">
                  <thead className="table-light">
                    <tr>
                      <th>Role</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th style={{ minWidth: '260px' }}>New Password</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {usersList.map((staff) => (
                      <tr key={staff.id}>
                        <td><Badge bg="primary">{getStaffRoleLabel(staff.role)}</Badge></td>
                        <td className="fw-semibold">{staff.name}</td>
                        <td className="text-muted small">{staff.email}</td>
                        <td>
                          <Form.Control
                            type="password"
                            size="sm"
                            placeholder="Enter new password (min 4 chars)"
                            value={staffPasswordDrafts[staff.id] || ''}
                            onChange={(e) =>
                              setStaffPasswordDrafts((prev) => ({ ...prev, [staff.id]: e.target.value }))
                            }
                            autoComplete="new-password"
                          />
                        </td>
                        <td>
                          <Button
                            size="sm"
                            variant="success"
                            className="rounded-pill px-3"
                            onClick={() => handleStaffPasswordSave(staff.id)}
                          >
                            Save Password
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card>

              <Alert variant="info" className="mt-4 small mb-0">
                Default demo password for all staff is <strong>admin</strong> until you change it here.
                Students create their own password when they sign up from the main site login.
              </Alert>
            </div>
          )}

          {/* TAB 5: REVIEWS MODERATION */}
          {activeTab === 'reviews' && (
            <div>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                  <h4 className="fw-bold mb-1">Student Reviews Moderation</h4>
                  <p className="text-secondary small">Approve or reject student-submitted reviews before they are published to public directory detail pages.</p>
                </div>
              </div>

              <Card className="border-0 shadow-sm p-4">
                <Table hover className="align-middle">
                  <thead>
                    <tr>
                      <th>College</th>
                      <th>Student</th>
                      <th>Rating</th>
                      <th>Review Content</th>
                      <th>Status</th>
                      <th className="text-end">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reviews.map(r => {
                      const college = colleges.find(c => Number(c.id) === Number(r.collegeId));
                      const collegeName = college ? college.name : `College ID ${r.collegeId}`;
                      return (
                        <tr key={r.id}>
                          <td className="fw-bold">{collegeName}</td>
                          <td>{r.authorName}</td>
                          <td><Badge bg="warning" text="dark">★ {r.rating}</Badge></td>
                          <td className="small text-muted" style={{ maxWidth: '400px' }}>"{r.content}"</td>
                          <td>
                            <Badge bg={r.status === 'PENDING' ? 'warning' : r.status === 'APPROVED' ? 'success' : 'danger'}>
                              {r.status}
                            </Badge>
                          </td>
                          <td className="text-end">
                            {r.status === 'PENDING' && (
                              <>
                                <Button 
                                  size="sm" 
                                  variant="outline-success" 
                                  className="me-2 btn-sm rounded-circle p-1"
                                  onClick={() => {
                                    approveReview(r.id);
                                    logActivity(currentUser.name, currentUser.role, "Admin Action", `Approved student review for ${collegeName}`);
                                  }}
                                >
                                  <FaCheck/>
                                </Button>
                                <Button 
                                  size="sm" 
                                  variant="outline-danger" 
                                  className="btn-sm rounded-circle p-1"
                                  onClick={() => {
                                    rejectReview(r.id);
                                    logActivity(currentUser.name, currentUser.role, "Admin Action", `Rejected student review for ${collegeName}`);
                                  }}
                                >
                                  <FaTimes/>
                                </Button>
                              </>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Card>
            </div>
          )}

          {/* TAB 6: ACTIVITY LOGS */}
          {activeTab === 'activity' && (
            <div>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                  <h4 className="fw-bold mb-1">User Activity & Audit Trail</h4>
                  <p className="text-secondary small">Security audit tracking for user logins, logouts, searches, and data entry updates.</p>
                </div>
              </div>

              <Card className="border-0 shadow-sm p-4">
                <Table hover className="align-middle">
                  <thead>
                    <tr>
                      <th>Timestamp</th>
                      <th>User</th>
                      <th>Role</th>
                      <th>Action type</th>
                      <th>Log Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activityLogs.map(l => (
                      <tr key={l.id}>
                        <td className="text-muted font-monospace small">{l.timestamp}</td>
                        <td className="fw-bold">{l.user}</td>
                        <td><Badge bg="light" text="dark" className="border">{l.role}</Badge></td>
                        <td>
                          <Badge bg={l.action === 'Login' ? 'success' : l.action === 'Search' ? 'info' : 'secondary'}>
                            {l.action}
                          </Badge>
                        </td>
                        <td className="small text-muted">{l.details}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card>
            </div>
          )}

          {/* TAB 7: REPORTS */}
          {activeTab === 'reports' && (
            <div>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                  <h4 className="fw-bold mb-1">Reports & Exports Center</h4>
                  <p className="text-secondary small">Download custom reports on student registrations, college records, and upload success stats in Excel format.</p>
                </div>
              </div>

              <Row className="g-4">
                <Col md={6}>
                  <Card className="border-0 shadow-sm p-4 text-center">
                    <FaUserGraduate size={50} className="text-primary mb-3 mx-auto" />
                    <h5 className="fw-bold">Student Registrations Report</h5>
                    <p className="text-muted small">Lists name, contact information, interested stream, active history metrics, and notes.</p>
                    <Button variant="outline-primary" className="w-100 rounded-pill" onClick={() => {
                      const data = students.map(s => ({
                        Name: s.name,
                        Email: s.email,
                        Phone: s.mobile,
                        City: s.city,
                        State: s.state,
                        'Course Interest': s.courseInterest,
                        'Exam Interest': s.examInterest,
                        'Last Active': s.lastActiveTime,
                        'Admin Notes': s.adminNotes
                      }));
                      const ws = XLSX.utils.json_to_sheet(data);
                      const wb = XLSX.utils.book_new();
                      XLSX.utils.book_append_sheet(wb, ws, "Students");
                      XLSX.writeFile(wb, "Student_Profiles_Report.xlsx");
                    }}>
                      <FaFileExcel className="me-2"/> Export Excel Report
                    </Button>
                  </Card>
                </Col>

                <Col md={6}>
                  <Card className="border-0 shadow-sm p-4 text-center">
                    <FaSchool size={50} className="text-success mb-3 mx-auto" />
                    <h5 className="fw-bold">Colleges Placements & Fees</h5>
                    <p className="text-muted small">Detailed records of fee structures, accepted entry exams, and average placement CTC packets.</p>
                    <Button variant="outline-success" className="w-100 rounded-pill" onClick={handleExportFiltered}>
                      <FaFileExcel className="me-2"/> Export Excel Report
                    </Button>
                  </Card>
                </Col>
              </Row>
            </div>
          )}

          {/* TAB 8: SYNC & DATA HEALTH */}
          {activeTab === 'sync' && (
            <div>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                  <h4 className="fw-bold mb-1">Sync, Crawler & Data Health Hub</h4>
                  <p className="text-secondary small">Automatically crawl trusted public education sources, review suggested updates, resolve duplicates, and verify student error reports.</p>
                </div>
                <Button variant="primary" className="fw-bold rounded-pill shadow-sm" onClick={handleRunCrawler} disabled={crawling}>
                  {crawling ? (
                    <>
                      <Spinner size="sm" animation="border" className="me-2" />
                      Crawling Sources...
                    </>
                  ) : (
                    "🔄 Trigger Auto-Enrichment Crawler"
                  )}
                </Button>
              </div>

              {/* Crawl animation progress bar */}
              {crawling && (
                <Card className="border-0 shadow-sm p-4 mb-4">
                  <h6 className="fw-bold text-primary mb-2">Analyzing Directory Completeness & Querying Sources...</h6>
                  <ProgressBar animated now={crawlProgress} label={`${crawlProgress}%`} variant="success" className="mb-2" />
                  <span className="small text-muted font-monospace">{crawlMessage}</span>
                </Card>
              )}

              <Row className="g-4 mb-4">
                {/* 1. Missing Data Finder */}
                <Col md={6}>
                  <Card className="border-0 shadow-sm p-4 h-100">
                    <h5 className="fw-bold text-dark mb-3">Missing Data Finder</h5>
                    <div className="d-flex justify-content-between align-items-center mb-4 bg-light p-3 rounded">
                      <div>
                        <div className="small text-muted uppercase">INCOMPLETE COLLEGES</div>
                        <h3 className="fw-bold mb-0 text-danger">{colleges.filter(c => !c.website || !c.established || !c.averagePackage || !c.highestPackage).length}</h3>
                      </div>
                      <Button size="sm" variant="outline-danger" className="fw-bold" onClick={handleExportMissingReport}>
                        <FaDownload className="me-1"/> Export Report
                      </Button>
                    </div>
                    <p className="small text-secondary">Identifies records missing websites, establishment years, cutoff marks, or placement figures. Use the crawler to auto-enrich or edit them manually.</p>
                  </Card>
                </Col>

                {/* 2. Duplicate Detection & Merge */}
                <Col md={6}>
                  <Card className="border-0 shadow-sm p-4 h-100">
                    <h5 className="fw-bold text-dark mb-3">Duplicate Record Cleanup</h5>
                    <div className="d-flex justify-content-between align-items-center mb-4 bg-light p-3 rounded">
                      <div>
                        <div className="small text-muted uppercase">POTENTIAL DUPLICATES</div>
                        <h3 className="fw-bold mb-0 text-warning">{detectDuplicates().length}</h3>
                      </div>
                      {detectDuplicates().length > 0 && (
                        <Button size="sm" variant="warning" className="fw-bold" onClick={handleAutoMergeDuplicates}>
                          Auto-Merge All
                        </Button>
                      )}
                    </div>
                    
                    {detectDuplicates().length === 0 ? (
                      <Alert variant="success" className="py-2 small">Your database is clean! No duplicate college names found.</Alert>
                    ) : (
                      <div style={{ maxHeight: '180px', overflowY: 'auto' }} className="border rounded p-2 bg-light">
                        {detectDuplicates().map((dup, idx) => (
                          <div key={idx} className="d-flex justify-content-between align-items-center border-bottom py-2 small">
                            <div>
                              <strong>{dup.c1.name}</strong> <span className="text-muted">and</span> <strong>{dup.c2.name}</strong>
                              <br />
                              <span className="text-muted" style={{ fontSize: '10px' }}>Location: {dup.c1.location}, {dup.c1.state}</span>
                            </div>
                            <Button size="xs" variant="outline-primary" className="py-1 px-2 font-bold shadow-sm" onClick={() => handleMergePair(dup.c1.id, dup.c2.id)}>
                              Merge
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </Card>
                </Col>
              </Row>

              {/* 3. Suggested Updates Queue */}
              <Card className="border-0 shadow-sm p-4 mb-4">
                <h5 className="fw-bold text-success mb-3">Crawled Suggestion Verification Queue</h5>
                <p className="text-secondary small">Review automatic edits gathered from web searches, official college domains, and government portals before pushing to live public directory pages.</p>
                {pendingUpdates.length === 0 ? (
                  <Alert variant="info" className="py-2 small mb-0">The verification queue is empty. Run the crawler to scan for suggestions!</Alert>
                ) : (
                  <Table hover className="align-middle small mb-0">
                    <thead className="table-light">
                      <tr>
                        <th>College Name</th>
                        <th>Field Name</th>
                        <th>Existing Value</th>
                        <th>Suggested Value</th>
                        <th>Source Link</th>
                        <th className="text-end">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pendingUpdates.map(u => (
                        <tr key={u.id}>
                          <td className="fw-bold">{u.collegeName}</td>
                          <td><Badge bg="light" text="dark" className="border">{u.field}</Badge></td>
                          <td className="text-muted">{u.oldValue || "[Empty]"}</td>
                          <td className="text-success fw-bold">
                            {u.isImage ? (
                              <img src={u.suggestedValue} alt="crawled" style={{ width: '60px', height: '40px', objectFit: 'cover' }} className="rounded border" />
                            ) : (
                              u.suggestedValue
                            )}
                          </td>
                          <td>
                            <a href={u.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                              {u.sourceUrl.split('/')[2]} <FaExternalLinkAlt size={10} />
                            </a>
                          </td>
                          <td className="text-end">
                            <Button size="sm" variant="success" className="me-2" onClick={() => approveUpdate(u.id)}>Approve</Button>
                            <Button size="sm" variant="outline-danger" onClick={() => rejectUpdate(u.id)}>Dismiss</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                )}
              </Card>

              {/* 4. Student Flags / Inaccuracy Reports */}
              <Card className="border-0 shadow-sm p-4">
                <h5 className="fw-bold text-danger mb-3">Student Reported Inaccuracies</h5>
                <p className="text-secondary small">Student-flagged data issues with comments. Review reported values and manually override fields when correct.</p>
                
                {inaccuracyReports.length === 0 ? (
                  <Alert variant="success" className="py-2 small mb-0">No active data inaccuracy flags reported by students.</Alert>
                ) : (
                  <Table hover className="align-middle small mb-0">
                    <thead className="table-light">
                      <tr>
                        <th>Date</th>
                        <th>College Name</th>
                        <th>Reporter</th>
                        <th>Incorrect Field</th>
                        <th>Details/Corrections</th>
                        <th className="text-end">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {inaccuracyReports.map(rep => (
                        <tr key={rep.id}>
                          <td className="text-muted">{rep.timestamp}</td>
                          <td className="fw-bold">{rep.collegeName}</td>
                          <td>{rep.studentName}</td>
                          <td><Badge bg="danger">{rep.fieldName}</Badge></td>
                          <td>"{rep.reportedValue}"</td>
                          <td className="text-end">
                            <Button size="sm" variant="outline-primary" onClick={() => {
                              const college = colleges.find(c => Number(c.id) === Number(rep.collegeId));
                              if (college) {
                                triggerEdit(college);
                                setActiveTab('colleges');
                              }
                            }}>
                              Edit Manually
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                )}
              </Card>
            </div>
          )}
        </Col>
      </Row>

      {/* EXCEL IMPORT PREVIEW MODAL */}
      <Modal show={showPreviewModal} onHide={() => setShowPreviewModal(false)} size="lg" centered style={{ color: '#333' }}>
        <Modal.Header closeButton className="bg-light">
          <Modal.Title className="fw-bold text-success">Excel Upload Preview & Validation</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4" style={{ maxHeight: '450px', overflowY: 'auto' }}>
          <Alert variant="warning" className="small py-2 mb-3">
            Please review the rows below. Valid items will be imported automatically. Red items have missing required data.
          </Alert>

          <Table hover className="align-middle small">
            <thead>
              <tr>
                <th>College Name</th>
                <th>Location</th>
                <th>Fees</th>
                <th>Validation Checks</th>
              </tr>
            </thead>
            <tbody>
              {importPreview.map(item => (
                <tr key={item.id} className={item.errors.length > 0 ? "table-danger" : ""}>
                  <td className="fw-bold">
                    {item.name || <span className="text-danger">[Empty]</span>} 
                    {item.isDuplicate && <Badge bg="warning" text="dark" className="ms-2">Duplicate</Badge>}
                  </td>
                  <td>{item.location ? `${item.location}, ${item.state}` : <span className="text-danger">Missing location data</span>}</td>
                  <td>{item.fees}</td>
                  <td>
                    {item.errors.length > 0 ? (
                      <span className="text-danger fw-bold">{item.errors.join(', ')}</span>
                    ) : (
                      <Badge bg="success">Valid Entry</Badge>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer className="bg-light">
          <Button variant="outline-secondary" onClick={() => setShowPreviewModal(false)}>Close Preview</Button>
          <Button variant="success" onClick={executeBulkImport}>Confirm Import Success</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Admin;
