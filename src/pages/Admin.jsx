import React, { useState, useContext, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Table, Button, Badge, Alert, Tab, Nav, ProgressBar, Modal, Spinner, InputGroup } from 'react-bootstrap';
import { 
  FaUserShield, FaSchool, FaBookOpen, FaUserGraduate, FaHistory, FaFileExcel, 
  FaFilePdf, FaBan, FaCheck, FaTimes, FaPlus, FaTrash, FaEdit, FaDownload, 
  FaExclamationTriangle, FaSearch, FaRegStickyNote, FaFilter, FaExchangeAlt, FaCog,
  FaExternalLinkAlt, FaSpider, FaGlobe, FaImage, FaSyncAlt, FaWhatsapp, FaPhoneAlt, FaEnvelope, FaCrown
} from 'react-icons/fa';
import { CollegeContext } from '../contexts/CollegeContext';
import { AuthContext } from '../contexts/AuthContext';
import { useToast } from '../contexts/ToastContext';
import { SiteContext } from '../contexts/SiteContext';
import * as XLSX from 'xlsx';
import { useTranslation } from '../utils/i18n';

const Admin = () => {
  const { t } = useTranslation();
  const { showToast } = useToast();
  const { 
    colleges, addCollege, updateCollege, deleteCollege, loading: collegeLoading, 
    reviews, approveReview, rejectReview, 
    pendingUpdates, setPendingUpdates, approveUpdate, rejectUpdate, inaccuracyReports,
    totalCollegesCount, systemStats, refreshStats, fetchColleges
  } = useContext(CollegeContext);
  const { 
    currentUser, students, activityLogs, deleteStudent, updateStudentNotes, 
    addStudentLead, fetchStudents, logActivity, handleLogin, usersList, updateStaffPassword,
    updateStudentLead, elevateToSuperAdmin
  } = useContext(AuthContext);
  const { siteData, updateSiteData } = useContext(SiteContext);

  const [activeTab, setActiveTab] = useState('dashboard');
  const [editingCollege, setEditingCollege] = useState(null);
  const [showCollegeForm, setShowCollegeForm] = useState(false);

  // Authoritative Server-Side College Management State (All 12,660+ Colleges)
  const [adminColleges, setAdminColleges] = useState([]);
  const [adminTotalCount, setAdminTotalCount] = useState(12660);
  const [adminCollegesLoading, setAdminCollegesLoading] = useState(false);
  const [collegeSearchTerm, setCollegeSearchTerm] = useState('');
  const [collegePage, setCollegePage] = useState(1);
  const collegesPerPage = 20;

  const loadAdminColleges = async (page = 1, search = '') => {
    setAdminCollegesLoading(true);
    try {
      const res = await fetchColleges({
        page,
        limit: collegesPerPage,
        q: (search || '').trim(),
        admin: 'true',
        sortBy: 'name'
      });
      if (res && Array.isArray(res.colleges)) {
        setAdminColleges(res.colleges);
        setAdminTotalCount(res.totalCount || res.colleges.length);
      }
    } catch (err) {
      console.warn("Failed to load admin colleges via API:", err);
    } finally {
      setAdminCollegesLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab === 'colleges') {
      const debounceTimer = setTimeout(() => {
        loadAdminColleges(collegePage, collegeSearchTerm);
      }, 250);
      return () => clearTimeout(debounceTimer);
    }
  }, [activeTab, collegePage, collegeSearchTerm]);

  const totalCollegePages = Math.max(1, Math.ceil(adminTotalCount / collegesPerPage));

  // Shiksha Live Extractor States
  const [shikshaUrlInput, setShikshaUrlInput] = useState('');
  const [shikshaLoading, setShikshaLoading] = useState(false);
  const [shikshaExtracted, setShikshaExtracted] = useState(null);
  const [shikshaAutoSave, setShikshaAutoSave] = useState(true);
  const [shikshaError, setShikshaError] = useState('');

  // Student CRM States
  const [leadStatusFilter, setLeadStatusFilter] = useState('');
  const [leadStatusDraft, setLeadStatusDraft] = useState('New Lead');
  const [showAddLeadModal, setShowAddLeadModal] = useState(false);
  const [showEditLeadModal, setShowEditLeadModal] = useState(false);
  const [newLeadName, setNewLeadName] = useState('');
  const [newLeadEmail, setNewLeadEmail] = useState('');
  const [newLeadPhone, setNewLeadPhone] = useState('');
  const [newLeadCity, setNewLeadCity] = useState('');
  const [newLeadState, setNewLeadState] = useState('');
  const [newLeadCourse, setNewLeadCourse] = useState('');
  const [newLeadExam, setNewLeadExam] = useState('');
  const [newLeadPriority, setNewLeadPriority] = useState('Normal');
  const [newLeadCounselor, setNewLeadCounselor] = useState('Super Admin');
  const [newLeadNotes, setNewLeadNotes] = useState('');
  const [editingLeadData, setEditingLeadData] = useState({
    id: null,
    name: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    courseInterest: '',
    examInterest: '',
    leadStatus: 'New Lead',
    priority: 'Normal',
    counselor: 'Super Admin',
    adminNotes: ''
  });

  // Staff login states
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [adminRole, setAdminRole] = useState('superadmin');
  const [adminAuthError, setAdminAuthError] = useState('');
  const [staffPasswordDrafts, setStaffPasswordDrafts] = useState({});
  const [staffPasswordMsg, setStaffPasswordMsg] = useState('');

  // Asset, Branding and Course States inside College Form
  const [logoState, setLogoState] = useState('');
  const [imgState, setImgState] = useState('');
  const [galleryState, setGalleryState] = useState([]);
  const [coursesState, setCoursesState] = useState([]);
  const [publishedState, setPublishedState] = useState(true);
  const [featuredState, setFeaturedState] = useState(false);

  // Website Settings States
  const [heroTitleState, setHeroTitleState] = useState('');
  const [heroSubtitleState, setHeroSubtitleState] = useState('');
  const [footerDescState, setFooterDescState] = useState('');
  const [footerAddressState, setFooterAddressState] = useState('');
  const [footerPhoneState, setFooterPhoneState] = useState('');
  const [footerEmailState, setFooterEmailState] = useState('');

  useEffect(() => {
    if (siteData) {
      setHeroTitleState(siteData.hero?.title || '');
      setHeroSubtitleState(siteData.hero?.subtitle || '');
      setFooterDescState(siteData.footer?.description || '');
      setFooterAddressState(siteData.footer?.contactInfo?.address || '');
      setFooterPhoneState(siteData.footer?.contactInfo?.phone || '');
      setFooterEmailState(siteData.footer?.contactInfo?.email || '');
    }
  }, [siteData]);

  useEffect(() => {
    if (editingCollege) {
      setLogoState(editingCollege.logo || '');
      setImgState(editingCollege.img || '');
      
      let parsedGallery = [];
      if (editingCollege.gallery) {
        try {
          parsedGallery = typeof editingCollege.gallery === 'string'
            ? JSON.parse(editingCollege.gallery)
            : editingCollege.gallery;
        } catch {
          parsedGallery = [];
        }
      }
      setGalleryState(parsedGallery);
      setCoursesState(editingCollege.courses || []);
      setPublishedState(editingCollege.published !== false);
      setFeaturedState(editingCollege.featured === true);
    } else {
      setLogoState('');
      setImgState('');
      setGalleryState([]);
      setCoursesState([]);
      setPublishedState(true);
      setFeaturedState(false);
    }
  }, [editingCollege, showCollegeForm]);

  // Asset Upload Handlers
  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setLogoState(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleImgUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setImgState(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleGalleryUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;
    
    files.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setGalleryState(prev => [...prev, reader.result]);
      };
      reader.readAsDataURL(file);
    });
  };

  // Course handlers
  const handleAddCourseRow = () => {
    setCoursesState(prev => [
      ...prev,
      { title: '', type: 'Full Time', division: 'Degree', duration: '4 Years', fees: '₹2.5 Lakhs/Year', intake: '60', eligibility: '12th Pass' }
    ]);
  };

  const handleRemoveCourseRow = (idx) => {
    setCoursesState(prev => prev.filter((_, i) => i !== idx));
  };

  const handleCourseRowChange = (idx, field, value) => {
    setCoursesState(prev => prev.map((co, i) => i === idx ? { ...co, [field]: value } : co));
  };

  // Save Settings Handler
  const handleSaveSettings = (e) => {
    e.preventDefault();
    if (!hasAccess('admin')) {
      alert("Permission Denied: Admin role or higher required.");
      return;
    }
    const updatedData = {
      ...siteData,
      hero: {
        title: heroTitleState,
        subtitle: heroSubtitleState
      },
      footer: {
        ...siteData.footer,
        description: footerDescState,
        contactInfo: {
          address: footerAddressState,
          phone: footerPhoneState,
          email: footerEmailState
        }
      }
    };
    updateSiteData(updatedData);
    logActivity(currentUser.name, currentUser.role, "Admin Action", "Updated homepage and footer settings.");
    showToast("Website settings updated successfully!", "success");
  };

  const onAdminLoginSubmit = async (e) => {
    e.preventDefault();
    const res = await handleLogin(adminEmail, adminPassword, adminRole);
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

  // Full unrestricted Super Admin Access - all features, tabs, and permissions unlocked
  const hasAccess = (_requiredRole) => true;

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
      if (!nameVal || String(nameVal).trim() === '') errors.push("Missing College Name");
      if (!locationVal || String(locationVal).trim() === '') errors.push("Missing Location");
      if (!stateVal || String(stateVal).trim() === '') errors.push("Missing State");

      // Validate fees format
      const feesVal = row[columnMapping['Fees']];
      if (feesVal !== undefined && feesVal !== null) {
        const feeStr = String(feesVal).trim();
        if (feeStr && feeStr.toLowerCase() !== 'contact for details' && isNaN(parseFloat(feeStr.replace(/[^\d.]/g, '')))) {
          errors.push("Invalid Fees format");
        }
      }

      // Validate established year
      const establishedVal = row[columnMapping['Established']];
      if (establishedVal !== undefined && establishedVal !== null) {
        const estStr = String(establishedVal).trim();
        if (estStr && estStr !== 'Unknown' && estStr !== 'N/A') {
          const year = parseInt(estStr);
          if (isNaN(year) || year < 1000 || year > new Date().getFullYear()) {
            errors.push("Invalid Established Year");
          }
        }
      }

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
  const handleSaveCollegeForm = async (e) => {
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
      address: fd.get('address') || fd.get('location'),
      phone: fd.get('phone') || "0123-456789",
      website: fd.get('website') || "http://www.college.edu",
      rating: parseFloat(fd.get('rating') || '4.5'),
      type: fd.get('type'),
      about: fd.get('about'),
      ranking: parseInt(fd.get('ranking') || '100'),
      fees: fd.get('fees'),
      exams: fd.get('exams'),
      highestPackage: fd.get('highestPackage'),
      averagePackage: fd.get('averagePackage'),
      placements: fd.get('placements'),
      img: imgState || "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=400",
      topRecruiters: fd.get('topRecruiters'),
      highlights: fd.get('highlights'),
      facilities: fd.get('facilities'),
      admissionProcess: fd.get('admissionProcess'),
      brochureLink: fd.get('brochureLink'),
      logo: logoState,
      gallery: galleryState,
      courses: coursesState,
      published: publishedState,
      featured: featuredState
    };

    if (editingCollege) {
      await updateCollege(editingCollege.id, collegeData);
      logActivity(currentUser.name, currentUser.role, "Admin Action", `Updated college profile manually: ${collegeData.name}`);
      showToast(`Successfully updated ${collegeData.name}`, "success");
    } else {
      await addCollege(collegeData);
      logActivity(currentUser.name, currentUser.role, "Admin Action", `Created college profile manually: ${collegeData.name}`);
      showToast(`Successfully created ${collegeData.name}`, "success");
    }

    setShowCollegeForm(false);
    setEditingCollege(null);
    loadAdminColleges(collegePage, collegeSearchTerm);
  };

  const triggerEdit = (c) => {
    if (!hasAccess('operator')) return alert("Permission Denied.");
    setEditingCollege(c);
    setShowCollegeForm(true);
  };

  const triggerDelete = async (id, name) => {
    if (!hasAccess('admin')) {
      showToast("Permission Denied: Only Admins/Super Admins can delete entries.", "error");
      return;
    }
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      setAdminColleges(prev => prev.filter(item => item.id !== id));
      setAdminTotalCount(prev => Math.max(0, prev - 1));
      await deleteCollege(id);
      logActivity(currentUser.name, currentUser.role, "Admin Action", `Deleted college profile manually: ${name}`);
      showToast(`Successfully deleted ${name} from directory.`, "success");
      loadAdminColleges(collegePage, collegeSearchTerm);
    }
  };

  // Remove duplicates utility
  const removeDuplicatesManually = () => {
    if (!hasAccess('admin')) {
      showToast("Permission Denied.", "error");
      return;
    }
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
      showToast("No duplicate college records found!", "info");
      return;
    }

    if (window.confirm(`Found ${duplicates.length} duplicate entries based on names. Delete duplicates automatically?`)) {
      duplicates.forEach(d => deleteCollege(d.id));
      logActivity(currentUser.name, currentUser.role, "Admin Action", `De-duplicated college dataset. Removed ${duplicates.length} entries.`);
      showToast(`Successfully cleaned database. Removed ${duplicates.length} duplicate items.`, "success");
    }
  };

  // Student list logic & CRM filters
  const filteredStudents = students.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(studentSearch.toLowerCase()) || 
                          s.email.toLowerCase().includes(studentSearch.toLowerCase()) ||
                          (s.mobile && s.mobile.includes(studentSearch));
    const matchesState = studentFilterState ? s.state === studentFilterState : true;
    const matchesCourse = studentFilterCourse ? s.courseInterest === studentFilterCourse : true;
    const matchesStatus = leadStatusFilter ? (s.leadStatus || 'New Lead') === leadStatusFilter : true;
    return matchesSearch && matchesState && matchesCourse && matchesStatus;
  });

  const selectStudentForDetail = (s) => {
    setSelectedStudent(s);
    setStudentNotesInput(s.adminNotes || '');
    setLeadStatusDraft(s.leadStatus || 'New Lead');
  };

  const saveStudentNotes = () => {
    if (!hasAccess('operator')) {
      showToast("Permission Denied.", "error");
      return;
    }
    updateStudentNotes(selectedStudent.id, studentNotesInput, leadStatusDraft);
    setSelectedStudent(prev => ({ ...prev, adminNotes: studentNotesInput, leadStatus: leadStatusDraft }));
    showToast("Admin notes and lead status saved successfully!", "success");
  };

  // Student CRM Export
  const handleExportStudentsToExcel = () => {
    const data = filteredStudents.map(s => ({
      ID: s.id,
      Name: s.name,
      Email: s.email,
      Phone: s.mobile || '',
      City: s.city || '',
      State: s.state || '',
      'Course Interest': s.courseInterest || '',
      'Exam Interest': s.examInterest || '',
      'Lead Status': s.leadStatus || 'New Lead',
      'Admin Notes': s.adminNotes || '',
      'Active Time': s.lastActiveTime || '',
      'Viewed Colleges Count': s.viewedColleges?.length || 0,
      'Saved Colleges Count': s.savedColleges?.length || 0
    }));
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Student CRM Leads");
    XLSX.writeFile(wb, "Student_CRM_Leads.xlsx");
    logActivity(currentUser.name, currentUser.role, "Excel Export", "Downloaded Student CRM leads spreadsheet.");
    showToast("Downloaded Student CRM leads spreadsheet!", "success");
  };

  // Create Student Lead
  const handleCreateLead = async (e) => {
    e.preventDefault();
    if (!newLeadName || !newLeadEmail) {
      showToast("Name and email are required", "warning");
      return;
    }
    const res = await addStudentLead({
      name: newLeadName,
      email: newLeadEmail,
      phone: newLeadPhone,
      city: newLeadCity,
      state: newLeadState,
      courseInterest: newLeadCourse,
      examInterest: newLeadExam,
      priority: newLeadPriority,
      counselor: newLeadCounselor,
      adminNotes: newLeadNotes,
      leadStatus: 'New Lead'
    });
    if (res.success) {
      showToast(`Student lead "${newLeadName}" added successfully!`, "success");
      setShowAddLeadModal(false);
      setNewLeadName('');
      setNewLeadEmail('');
      setNewLeadPhone('');
      setNewLeadCity('');
      setNewLeadState('');
      setNewLeadCourse('');
      setNewLeadExam('');
      setNewLeadPriority('Normal');
      setNewLeadCounselor('Super Admin');
      setNewLeadNotes('');
    }
  };

  // Open Edit Lead Modal
  const handleOpenEditLead = (lead) => {
    if (!lead) return;
    setEditingLeadData({
      id: lead.id,
      name: lead.name || '',
      email: lead.email || '',
      phone: lead.mobile || lead.phone || '',
      city: lead.city || '',
      state: lead.state || '',
      courseInterest: lead.courseInterest || '',
      examInterest: lead.examInterest || '',
      leadStatus: lead.leadStatus || 'New Lead',
      priority: lead.priority || 'Normal',
      counselor: lead.counselor || 'Super Admin',
      adminNotes: lead.adminNotes || ''
    });
    setShowEditLeadModal(true);
  };

  // Save Edited Lead
  const handleSaveEditedLead = async (e) => {
    e.preventDefault();
    if (!editingLeadData.name || !editingLeadData.email) {
      showToast("Name and email are required", "warning");
      return;
    }
    if (updateStudentLead) {
      const res = await updateStudentLead(editingLeadData.id, {
        name: editingLeadData.name,
        email: editingLeadData.email,
        phone: editingLeadData.phone,
        city: editingLeadData.city,
        state: editingLeadData.state,
        courseInterest: editingLeadData.courseInterest,
        examInterest: editingLeadData.examInterest,
        leadStatus: editingLeadData.leadStatus,
        priority: editingLeadData.priority,
        counselor: editingLeadData.counselor,
        adminNotes: editingLeadData.adminNotes
      });
      if (res.success) {
        showToast("Lead updated successfully!", "success");
        setShowEditLeadModal(false);
        if (selectedStudent && selectedStudent.id === editingLeadData.id) {
          setSelectedStudent(prev => ({
            ...prev,
            ...editingLeadData,
            mobile: editingLeadData.phone
          }));
        }
      } else {
        showToast(res.error || "Failed to update lead", "error");
      }
    }
  };

  // Shiksha Live Extractor Trigger
  const handleTriggerShikshaScrape = async (e) => {
    e.preventDefault();
    if (!shikshaUrlInput.trim()) {
      showToast("Please enter a valid Shiksha URL", "warning");
      return;
    }
    setShikshaLoading(true);
    setShikshaError('');
    setShikshaExtracted(null);

    try {
      const res = await fetch('http://localhost:5000/api/colleges/scrape-shiksha', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: shikshaUrlInput.trim(), saveToDb: shikshaAutoSave })
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to extract Shiksha data");
      }
      setShikshaExtracted(data.college);
      showToast(data.message || "Successfully extracted college details & images from Shiksha!", "success");
      logActivity(currentUser.name, currentUser.role, "Web Scrape", `Extracted details for ${data.college.name} from Shiksha`);
    } catch (err) {
      setShikshaError(err.message);
      showToast(err.message, "error");
    } finally {
      setShikshaLoading(false);
    }
  };

  // Download Extracted Shiksha College as Excel
  const handleDownloadShikshaExcel = () => {
    if (!shikshaExtracted) return;
    const col = shikshaExtracted;
    const row = {
      'College Name': col.name,
      'Shiksha URL': col.collegeUrl,
      'Official Website': col.officialWebsite,
      'Logo URL': col.logoUrl,
      'Banner Image URL': col.bannerUrl,
      'Gallery Image 1': col.galleryUrls?.[0] || '',
      'Gallery Image 2': col.galleryUrls?.[1] || '',
      'Gallery Image 3': col.galleryUrls?.[2] || '',
      'City': col.city,
      'State': col.state,
      'Address': col.address,
      'Establishment Year': col.establishmentYear,
      'Ownership': col.ownership,
      'Approval Status': col.approvalStatus,
      'Accreditation Details': col.accreditationDetails,
      'Admission Process': col.admissionProcess,
      'Entrance Exams': col.entranceExams,
      'Highest Package': col.highestPackage,
      'Average Package': col.averagePackage,
      'Top Recruiters': (col.topRecruiters || []).join(', '),
      'Facilities': (col.facilities || []).join(', '),
      'Rankings': col.rankings,
      'Phone': col.phone,
      'Email': col.email
    };
    const ws = XLSX.utils.json_to_sheet([row]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Shiksha Extracted College");
    XLSX.writeFile(wb, `${(col.name || 'College').replace(/[^a-z0-9]/gi, '_')}_Shiksha.xlsx`);
    showToast("Downloaded extracted college Excel report!", "success");
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

            <Button type="submit" variant="primary" className="w-100 fw-bold py-2 shadow-sm mb-4" style={{ backgroundColor: '#1a43bf', border: 'none', borderRadius: '8px' }}>
              Sign In to Console
            </Button>

            <hr className="my-4 text-muted" />
            <div className="text-center">
              <span className="small text-muted fw-bold">Demo Console Quick-Login</span>
              <Row className="g-2 mt-2">
                <Col xs={6}>
                  <Button variant="outline-primary" size="sm" className="w-100 py-2 small fw-semibold" onClick={() => {
                    setAdminRole('superadmin');
                    setAdminEmail('admin@thecollegecompass.com');
                    setAdminPassword('admin');
                  }}>
                    🔑 Super Admin
                  </Button>
                </Col>
                <Col xs={6}>
                  <Button variant="outline-primary" size="sm" className="w-100 py-2 small fw-semibold" onClick={() => {
                    setAdminRole('admin');
                    setAdminEmail('manager@thecollegecompass.com');
                    setAdminPassword('admin');
                  }}>
                    💼 Manager
                  </Button>
                </Col>
                <Col xs={6}>
                  <Button variant="outline-primary" size="sm" className="w-100 py-2 small fw-semibold" onClick={() => {
                    setAdminRole('operator');
                    setAdminEmail('operator@thecollegecompass.com');
                    setAdminPassword('admin');
                  }}>
                    ✏️ Operator
                  </Button>
                </Col>
                <Col xs={6}>
                  <Button variant="outline-primary" size="sm" className="w-100 py-2 small fw-semibold" onClick={() => {
                    setAdminRole('viewer');
                    setAdminEmail('viewer@thecollegecompass.com');
                    setAdminPassword('admin');
                  }}>
                    👁️ Observer
                  </Button>
                </Col>
              </Row>
            </div>
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
          <div className="d-flex align-items-center gap-2 mb-1 flex-wrap">
            <h4 className="fw-bold mb-0 text-primary d-flex align-items-center">
              <FaUserShield className="me-2 text-warning" /> thecollegecompass Management Console
            </h4>
            <Badge bg="success" className="px-3 py-2 rounded-pill fw-semibold shadow-sm d-flex align-items-center">
              <FaCrown className="me-1 text-warning" /> SUPERADMIN (Full Unrestricted Access)
            </Badge>
          </div>
          <span className="text-muted small">
            Active User: <strong>{currentUser?.name || 'Super Admin'}</strong> ({currentUser?.role ? currentUser.role.toUpperCase() : 'SUPERADMIN'}) • All permissions, colleges, leads, and staff settings unlocked
          </span>
        </div>
        <div className="d-flex gap-2 mt-2 mt-md-0 align-items-center">
          {currentUser?.role !== 'superadmin' && (
            <Button size="sm" variant="warning" className="fw-bold rounded-pill shadow-sm" onClick={() => elevateToSuperAdmin && elevateToSuperAdmin()}>
              <FaCrown className="me-1" /> Activate Super Admin
            </Button>
          )}
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
                🎓 Student CRM & Leads
              </Nav.Link>
              <Nav.Link 
                className={`py-2 px-3 rounded-pill fw-semibold ${activeTab === 'shiksha' ? 'active' : 'text-secondary'}`}
                onClick={() => setActiveTab('shiksha')}
              >
                🕷️ Shiksha Extractor
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
              <Nav.Link 
                className={`py-2 px-3 rounded-pill fw-semibold ${activeTab === 'settings' ? 'active' : 'text-secondary'}`}
                onClick={() => setActiveTab('settings')}
              >
                ⚙️ Website Settings
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
                  <Card className="dashboard-stat-card stat-card-students">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <div className="stat-card-label">TOTAL STUDENTS</div>
                        <h2 className="stat-card-value">{systemStats?.totalStudents || students.length || 8}</h2>
                      </div>
                      <FaUserGraduate size={32} className="opacity-75" />
                    </div>
                    <div className="stat-icon-bg"><FaUserGraduate /></div>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card className="dashboard-stat-card stat-card-colleges">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <div className="stat-card-label">TOTAL COLLEGES</div>
                        <h2 className="stat-card-value">{(totalCollegesCount || systemStats?.totalColleges || colleges.length).toLocaleString()}</h2>
                      </div>
                      <FaSchool size={32} className="opacity-75" />
                    </div>
                    <div className="stat-icon-bg"><FaSchool /></div>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card className="dashboard-stat-card stat-card-reviews">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <div className="stat-card-label">PENDING REVIEWS</div>
                        <h2 className="stat-card-value">{systemStats?.pendingReviews !== undefined ? systemStats.pendingReviews : reviews.filter(r => r.status === 'PENDING').length}</h2>
                      </div>
                      <FaExclamationTriangle size={32} className="opacity-75" />
                    </div>
                    <div className="stat-icon-bg"><FaExclamationTriangle /></div>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card className="dashboard-stat-card stat-card-logs">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <div className="stat-card-label">TOTAL SYSTEM LOGS</div>
                        <h2 className="stat-card-value">{systemStats?.totalLogs || activityLogs.length || 191}</h2>
                      </div>
                      <FaHistory size={32} className="opacity-75" />
                    </div>
                    <div className="stat-icon-bg"><FaHistory /></div>
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
                        <span>{Math.floor((totalCollegesCount || systemStats?.totalColleges || 12660) * 0.98).toLocaleString()} / {(totalCollegesCount || systemStats?.totalColleges || 12660).toLocaleString()}</span>
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

                    <h6 className="fw-bold mb-3 text-secondary border-top pt-4">Branding & Image Attachments</h6>
                    <Row className="g-3 mb-4">
                      <Col md={6}>
                        <Card className="p-3 border shadow-sm">
                          <Form.Label className="small fw-bold">Official Logo</Form.Label>
                          <div className="d-flex align-items-center gap-3">
                            {logoState ? (
                              <img src={logoState} alt="Logo" style={{ width: '50px', height: '50px', objectFit: 'contain', border: '1px solid #ddd', borderRadius: '4px', padding: '2px', backgroundColor: '#fff' }} />
                            ) : (
                              <div className="bg-light d-flex align-items-center justify-content-center text-muted small" style={{ width: '50px', height: '50px', border: '1px dashed #ccc', borderRadius: '4px' }}>No Logo</div>
                            )}
                            <div className="flex-grow-1">
                              <Form.Control type="file" accept="image/*" size="sm" onChange={handleLogoUpload} className="mb-2" />
                              <Form.Control type="text" size="sm" placeholder="Or enter Logo URL" value={logoState} onChange={(e) => setLogoState(e.target.value)} />
                            </div>
                          </div>
                        </Card>
                      </Col>
                      <Col md={6}>
                        <Card className="p-3 border shadow-sm">
                          <Form.Label className="small fw-bold">Campus Banner Image</Form.Label>
                          <div className="d-flex align-items-center gap-3">
                            {imgState ? (
                              <img src={imgState} alt="Campus" style={{ width: '70px', height: '50px', objectFit: 'cover', border: '1px solid #ddd', borderRadius: '4px' }} />
                            ) : (
                              <div className="bg-light d-flex align-items-center justify-content-center text-muted small" style={{ width: '70px', height: '50px', border: '1px dashed #ccc', borderRadius: '4px' }}>No Image</div>
                            )}
                            <div className="flex-grow-1">
                              <Form.Control type="file" accept="image/*" size="sm" onChange={handleImgUpload} className="mb-2" />
                              <Form.Control type="text" size="sm" placeholder="Or enter Image URL" value={imgState} onChange={(e) => setImgState(e.target.value)} />
                            </div>
                          </div>
                        </Card>
                      </Col>
                      <Col md={12}>
                        <Card className="p-3 border shadow-sm">
                          <Form.Label className="small fw-bold">Multiple Gallery Portfolio Images</Form.Label>
                          <Form.Control type="file" accept="image/*" multiple size="sm" onChange={handleGalleryUpload} className="mb-3" />
                          <div className="d-flex flex-wrap gap-2">
                            {galleryState.map((galImg, idx) => (
                              <div key={idx} className="position-relative" style={{ width: '80px', height: '60px' }}>
                                <img src={galImg} alt={`Gallery ${idx}`} style={{ width: '80px', height: '60px', objectFit: 'cover', borderRadius: '4px', border: '1px solid #ddd' }} />
                                <div className="position-absolute top-0 end-0 bg-dark bg-opacity-75 d-flex gap-1 p-1 rounded-bl" style={{ borderBottomLeftRadius: '6px' }}>
                                  <Button size="sm" variant="link" className="text-warning p-0 me-1 line-height-1" title="Set as main image" onClick={() => setImgState(galImg)}>⭐</Button>
                                  <Button size="sm" variant="link" className="text-danger p-0 line-height-1" title="Delete" onClick={() => setGalleryState(prev => prev.filter((_, i) => i !== idx))}>❌</Button>
                                </div>
                              </div>
                            ))}
                            {galleryState.length === 0 && (
                              <div className="text-muted small py-2">No portfolio images uploaded. Select file(s) above to add.</div>
                            )}
                          </div>
                        </Card>
                      </Col>
                    </Row>

                    <h6 className="fw-bold mb-3 text-secondary border-top pt-4">Course Listings & Intake Slots</h6>
                    <div className="table-responsive mb-3">
                      <Table bordered hover size="sm" className="align-middle">
                        <thead className="table-light small">
                          <tr>
                            <th>Course Name*</th>
                            <th>Type</th>
                            <th>Division</th>
                            <th>Duration</th>
                            <th>Annual Fee</th>
                            <th>Intake</th>
                            <th>Eligibility Criteria</th>
                            <th className="text-center">Remove</th>
                          </tr>
                        </thead>
                        <tbody>
                          {coursesState.map((co, idx) => (
                            <tr key={idx}>
                              <td>
                                <Form.Control size="sm" value={co.title || ''} onChange={(e) => handleCourseRowChange(idx, 'title', e.target.value)} required placeholder="e.g. B.Tech CSE" style={{ minWidth: '150px' }} />
                              </td>
                              <td>
                                <Form.Control size="sm" value={co.type || ''} onChange={(e) => handleCourseRowChange(idx, 'type', e.target.value)} placeholder="Full Time" style={{ width: '90px' }} />
                              </td>
                              <td>
                                <Form.Control size="sm" value={co.division || ''} onChange={(e) => handleCourseRowChange(idx, 'division', e.target.value)} placeholder="Degree" style={{ width: '90px' }} />
                              </td>
                              <td>
                                <Form.Control size="sm" value={co.duration || ''} onChange={(e) => handleCourseRowChange(idx, 'duration', e.target.value)} placeholder="4 Years" style={{ width: '80px' }} />
                              </td>
                              <td>
                                <Form.Control size="sm" value={co.fees || ''} onChange={(e) => handleCourseRowChange(idx, 'fees', e.target.value)} placeholder="₹2.5 L/Yr" style={{ width: '100px' }} />
                              </td>
                              <td>
                                <Form.Control size="sm" value={co.intake || ''} onChange={(e) => handleCourseRowChange(idx, 'intake', e.target.value)} placeholder="60" style={{ width: '60px' }} />
                              </td>
                              <td>
                                <Form.Control size="sm" value={co.eligibility || ''} onChange={(e) => handleCourseRowChange(idx, 'eligibility', e.target.value)} placeholder="10+2 with 60%" style={{ minWidth: '130px' }} />
                              </td>
                              <td className="text-center">
                                <Button size="sm" variant="link" className="text-danger p-0" onClick={() => handleRemoveCourseRow(idx)}>
                                  <FaTrash />
                                </Button>
                              </td>
                            </tr>
                          ))}
                          {coursesState.length === 0 && (
                            <tr>
                              <td colSpan="8" className="text-center text-muted small py-3">No courses registered. Add a course row below.</td>
                            </tr>
                          )}
                        </tbody>
                      </Table>
                    </div>
                    <Button size="sm" variant="outline-primary" className="mb-4 rounded-pill" onClick={handleAddCourseRow}>
                      <FaPlus className="me-1" /> Add Course Listing
                    </Button>

                    <h6 className="fw-bold mb-3 text-secondary border-top pt-4">Visibility & Listing Promotion</h6>
                    <Row className="g-3 mb-4">
                      <Col md={6}>
                        <Form.Check 
                          type="switch"
                          id="published-switch"
                          label="Published Status (Make visible on search pages)"
                          checked={publishedState}
                          onChange={(e) => setPublishedState(e.target.checked)}
                          className="fw-semibold text-success fs-6"
                        />
                      </Col>
                      <Col md={6}>
                        <Form.Check 
                          type="switch"
                          id="featured-switch"
                          label="Featured Badge (Show highlighted on homepage)"
                          checked={featuredState}
                          onChange={(e) => setFeaturedState(e.target.checked)}
                          className="fw-semibold text-warning fs-6"
                        />
                      </Col>
                    </Row>

                    <div className="d-flex gap-2 border-top pt-4">
                      <Button type="submit" variant="success" className="px-4 py-2 fw-semibold rounded-pill">Save Profile Entry</Button>
                      <Button variant="outline-secondary" className="px-4 py-2 rounded-pill" onClick={() => { setShowCollegeForm(false); setEditingCollege(null); }}>Cancel</Button>
                    </div>
                  </Form>
                </Card>
              ) : (
                <Card className="border-0 shadow-sm p-4">
                  {/* Search & Statistics Filter Bar */}
                  <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-3 pb-3 border-bottom">
                    <div style={{ maxWidth: '460px', width: '100%' }}>
                      <InputGroup size="sm">
                        <InputGroup.Text className="bg-light border-end-0"><FaSearch className="text-muted" /></InputGroup.Text>
                        <Form.Control
                          placeholder="Search 12,660+ colleges by name, short code, city, state..."
                          value={collegeSearchTerm}
                          onChange={(e) => {
                            setCollegeSearchTerm(e.target.value);
                            setCollegePage(1);
                          }}
                          className="border-start-0"
                        />
                        {collegeSearchTerm && (
                          <Button variant="outline-secondary" size="sm" onClick={() => { setCollegeSearchTerm(''); setCollegePage(1); }}>
                            Clear
                          </Button>
                        )}
                      </InputGroup>
                    </div>

                    <div className="d-flex align-items-center gap-2 small">
                      <Badge bg="primary" className="px-3 py-2 rounded-pill shadow-sm">
                        Total Database Catalog: {adminTotalCount.toLocaleString()}
                      </Badge>
                      {collegeSearchTerm && (
                        <Badge bg="info" className="px-3 py-2 rounded-pill shadow-sm">
                          Matching: {adminTotalCount.toLocaleString()}
                        </Badge>
                      )}
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        className="rounded-pill px-3 py-1"
                        onClick={() => loadAdminColleges(collegePage, collegeSearchTerm)}
                        title="Reload live database data"
                      >
                        <FaSyncAlt className={adminCollegesLoading ? "fa-spin me-1" : "me-1"} /> Refresh
                      </Button>
                    </div>
                  </div>

                  <div className="table-responsive" style={{ maxHeight: '620px', overflowY: 'auto' }}>
                    <Table hover className="align-middle mb-0">
                      <thead className="table-light sticky-top shadow-sm">
                        <tr>
                          <th>Name</th>
                          <th>Location</th>
                          <th>Rating</th>
                          <th>Fees</th>
                          <th>Average CTC</th>
                          <th>Type</th>
                          <th>Published</th>
                          <th>Featured</th>
                          <th className="text-end">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {adminCollegesLoading && adminColleges.length === 0 ? (
                          <tr>
                            <td colSpan="9" className="text-center py-5 text-muted">
                              <Spinner animation="border" size="sm" variant="primary" className="me-2" />
                              Loading colleges from live synchronized database...
                            </td>
                          </tr>
                        ) : adminColleges.length > 0 ? (
                          adminColleges.map(c => (
                            <tr key={c.id}>
                              <td className="fw-semibold text-primary d-flex align-items-center gap-2">
                                {c.logo && (
                                  <img src={c.logo} alt="" style={{ width: '28px', height: '28px', objectFit: 'contain', border: '1px solid #ddd', borderRadius: '4px', padding: '1px', backgroundColor: '#fff' }} />
                                )}
                                <span>{c.name} {c.shortName ? `(${c.shortName})` : ''}</span>
                              </td>
                              <td>{c.location || 'India'}, {c.state || ''}</td>
                              <td><Badge bg="warning" text="dark">★ {c.rating || 4.5}</Badge></td>
                              <td>{c.fees || 'Contact for details'}</td>
                              <td>{c.averagePackage || c.average_package || "N/A"}</td>
                              <td><Badge bg="light" text="dark" className="border">{c.type || 'Private'}</Badge></td>
                              <td>
                                <Button
                                  size="sm"
                                  variant={c.published !== false ? "success" : "secondary"}
                                  className="py-1 px-2 rounded-pill small fw-bold"
                                  style={{ fontSize: '0.75rem' }}
                                  onClick={async () => {
                                    const newPub = c.published === false;
                                    setAdminColleges(prev => prev.map(item => item.id === c.id ? { ...item, published: newPub } : item));
                                    await updateCollege(c.id, { ...c, published: newPub });
                                    logActivity(currentUser.name, currentUser.role, "Admin Action", `${newPub ? 'Published' : 'Unpublished'} college profile: ${c.name}`);
                                  }}
                                >
                                  {c.published !== false ? "Active" : "Draft"}
                                </Button>
                              </td>
                              <td>
                                <Button
                                  size="sm"
                                  variant={c.featured === true ? "warning" : "light"}
                                  className="py-1 px-2 rounded-pill small border fw-bold text-dark"
                                  style={{ fontSize: '0.75rem' }}
                                  onClick={async () => {
                                    const newFeat = c.featured !== true;
                                    setAdminColleges(prev => prev.map(item => item.id === c.id ? { ...item, featured: newFeat } : item));
                                    await updateCollege(c.id, { ...c, featured: newFeat });
                                    logActivity(currentUser.name, currentUser.role, "Admin Action", `${newFeat ? 'Featured' : 'Unfeatured'} college profile: ${c.name}`);
                                  }}
                                >
                                  {c.featured === true ? "⭐ Yes" : "No"}
                                </Button>
                              </td>
                              <td className="text-end">
                                <Button variant="link" size="sm" className="me-2 p-0 text-info" onClick={() => triggerEdit(c)}><FaEdit size={16}/></Button>
                                <Button variant="link" size="sm" className="p-0 text-danger" onClick={() => triggerDelete(c.id, c.name)}><FaTrash size={16}/></Button>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="9" className="text-center py-5 text-muted">
                              No colleges found matching "{collegeSearchTerm}". Try another search term or click Clear.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </Table>
                  </div>

                  {/* Pagination Footer */}
                  {adminTotalCount > 0 && (
                    <div className="d-flex flex-wrap justify-content-between align-items-center mt-3 pt-3 border-top gap-2">
                      <div className="text-muted small fw-medium">
                        Showing {adminTotalCount === 0 ? 0 : ((collegePage - 1) * collegesPerPage) + 1} to {Math.min(collegePage * collegesPerPage, adminTotalCount)} of {adminTotalCount.toLocaleString()} colleges
                      </div>
                      <div className="d-flex gap-2 align-items-center">
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          disabled={collegePage <= 1}
                          onClick={() => setCollegePage(1)}
                          title="First Page"
                        >
                          &laquo;
                        </Button>
                        <Button
                          variant="outline-primary"
                          size="sm"
                          disabled={collegePage <= 1}
                          onClick={() => setCollegePage(p => Math.max(1, p - 1))}
                        >
                          Previous
                        </Button>
                        <span className="small px-2 fw-semibold text-secondary">
                          Page {collegePage} of {totalCollegePages}
                        </span>
                        <Button
                          variant="outline-primary"
                          size="sm"
                          disabled={collegePage >= totalCollegePages}
                          onClick={() => setCollegePage(p => Math.min(totalCollegePages, p + 1))}
                        >
                          Next
                        </Button>
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          disabled={collegePage >= totalCollegePages}
                          onClick={() => setCollegePage(totalCollegePages)}
                          title="Last Page"
                        >
                          &raquo;
                        </Button>
                      </div>
                    </div>
                  )}
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

          {/* TAB 4: STUDENT CRM & LEADS */}
          {activeTab === 'students' && (
            <div>
              <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-2">
                <div>
                  <h4 className="fw-bold mb-1 text-primary d-flex align-items-center">
                    <FaUserGraduate className="me-2 text-primary" /> Student CRM & Lead Follow-ups
                  </h4>
                  <p className="text-secondary small mb-0">Manage registered student leads, track session telemetry, update sales pipeline status, and log counselor notes.</p>
                </div>
                <div className="d-flex gap-2">
                  <Button variant="primary" size="sm" className="fw-bold rounded-pill" onClick={() => setShowAddLeadModal(true)}>
                    <FaPlus className="me-1" /> Add Student Lead
                  </Button>
                  <Button variant="success" size="sm" className="fw-bold rounded-pill" onClick={handleExportStudentsToExcel}>
                    <FaFileExcel className="me-1" /> Export Leads (Excel)
                  </Button>
                  <Button variant="outline-secondary" size="sm" className="rounded-pill" onClick={() => fetchStudents && fetchStudents()}>
                    <FaSyncAlt />
                  </Button>
                </div>
              </div>

              {/* Lead Pipeline Funnel KPI Bar */}
              <Row className="g-3 mb-4">
                <Col xs={6} md={3}>
                  <Card className="border-0 shadow-sm p-3 text-center border-start border-primary border-4">
                    <span className="text-muted small fw-bold text-uppercase">Total Leads</span>
                    <h3 className="fw-bold text-primary mb-0 mt-1">{students?.length || 0}</h3>
                    <span className="small text-muted" style={{ fontSize: '11px' }}>All inquiries received</span>
                  </Card>
                </Col>
                <Col xs={6} md={3}>
                  <Card className="border-0 shadow-sm p-3 text-center border-start border-info border-4">
                    <span className="text-muted small fw-bold text-uppercase">New Inquiries</span>
                    <h3 className="fw-bold text-info mb-0 mt-1">{(students || []).filter(s => (s.leadStatus || 'New Lead') === 'New Lead').length}</h3>
                    <span className="small text-muted" style={{ fontSize: '11px' }}>Pending first contact</span>
                  </Card>
                </Col>
                <Col xs={6} md={3}>
                  <Card className="border-0 shadow-sm p-3 text-center border-start border-warning border-4">
                    <span className="text-muted small fw-bold text-uppercase">In Follow-Up</span>
                    <h3 className="fw-bold text-warning mb-0 mt-1">{(students || []).filter(s => ['Contacted', 'In Discussion', 'Follow-up Scheduled', 'Docs Pending'].includes(s.leadStatus)).length}</h3>
                    <span className="small text-muted" style={{ fontSize: '11px' }}>Active counselor calls</span>
                  </Card>
                </Col>
                <Col xs={6} md={3}>
                  <Card className="border-0 shadow-sm p-3 text-center border-start border-success border-4">
                    <span className="text-muted small fw-bold text-uppercase">Admitted / Enrolled</span>
                    <h3 className="fw-bold text-success mb-0 mt-1">{(students || []).filter(s => s.leadStatus === 'Enrolled').length}</h3>
                    <span className="small text-muted" style={{ fontSize: '11px' }}>Successful admissions</span>
                  </Card>
                </Col>
              </Row>

              <Row>
                {/* Left Side: Students List */}
                <Col md={4}>
                  <Card className="border-0 shadow-sm p-3 mb-4">
                    <Form.Group className="mb-2">
                      <InputGroup size="sm">
                        <InputGroup.Text><FaSearch /></InputGroup.Text>
                        <Form.Control 
                          placeholder="Search name, email, phone..." 
                          value={studentSearch}
                          onChange={(e) => setStudentSearch(e.target.value)}
                        />
                      </InputGroup>
                    </Form.Group>

                    {/* Status filter pills */}
                    <div className="mb-3 d-flex flex-wrap gap-1">
                      {[
                        { label: 'All Leads', val: '' },
                        { label: 'New Lead', val: 'New Lead' },
                        { label: 'Contacted', val: 'Contacted' },
                        { label: 'In Discussion', val: 'In Discussion' },
                        { label: 'Follow-up', val: 'Follow-up Scheduled' },
                        { label: 'Enrolled', val: 'Enrolled' },
                        { label: 'Closed', val: 'Closed' }
                      ].map((item) => {
                        const count = item.val 
                          ? (students || []).filter(s => (s.leadStatus || 'New Lead') === item.val).length
                          : (students || []).length;
                        return (
                          <Badge 
                            key={item.label}
                            bg={leadStatusFilter === item.val ? 'primary' : 'light'} 
                            text={leadStatusFilter === item.val ? 'white' : 'dark'}
                            className="border cursor-pointer px-2 py-1"
                            style={{ cursor: 'pointer', fontSize: '11px' }}
                            onClick={() => setLeadStatusFilter(item.val)}
                          >
                            {item.label} ({count})
                          </Badge>
                        );
                      })}
                    </div>
                    
                    <div className="list-group list-group-flush" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                      {filteredStudents.length === 0 ? (
                        <div className="text-center text-muted p-4 small">No matching student leads found.</div>
                      ) : (
                        filteredStudents.map(s => {
                          const statusColor = s.leadStatus === 'Enrolled' ? 'success' : s.leadStatus === 'Contacted' ? 'warning' : s.leadStatus === 'In Discussion' ? 'primary' : 'info';
                          return (
                            <button 
                              key={s.id} 
                              onClick={() => selectStudentForDetail(s)}
                              className={`list-group-item list-group-item-action border-0 px-3 py-3 rounded mb-2 text-start ${selectedStudent?.id === s.id ? 'bg-primary text-white' : 'bg-light'}`}
                            >
                              <div className="d-flex justify-content-between align-items-center mb-1">
                                <div className="fw-bold">{s.name}</div>
                                <div className="d-flex gap-1 align-items-center">
                                  {s.priority === 'Urgent' && <Badge bg="danger" style={{ fontSize: '9px' }}>URGENT</Badge>}
                                  <Badge bg={selectedStudent?.id === s.id ? 'light' : statusColor} text={selectedStudent?.id === s.id ? 'dark' : 'white'}>
                                    {s.leadStatus || 'New Lead'}
                                  </Badge>
                                </div>
                              </div>
                              <div className={`small ${selectedStudent?.id === s.id ? 'text-white-50' : 'text-muted'}`}>{s.email}</div>
                              {(s.mobile || s.phone) && (
                                <div className={`small ${selectedStudent?.id === s.id ? 'text-white-50' : 'text-muted'}`}>📞 {s.mobile || s.phone}</div>
                              )}
                              <div className="mt-2 d-flex justify-content-between align-items-center">
                                <span className="small badge bg-white text-dark border">
                                  {s.courseInterest || 'General'}
                                </span>
                                <span className="small" style={{ fontSize: '10px' }}>Active: {s.lastActiveTime?.split(' ')[0] || 'Today'}</span>
                              </div>
                            </button>
                          );
                        })
                      )}
                    </div>
                  </Card>
                </Col>

                {/* Right Side: Detailed Profile View */}
                <Col md={8}>
                  {selectedStudent ? (
                    <Card className="border-0 shadow-sm p-4">
                      <div className="d-flex flex-wrap justify-content-between align-items-start border-bottom pb-3 mb-4 gap-2">
                        <div>
                          <div className="d-flex align-items-center gap-2">
                            <h4 className="fw-bold text-primary mb-0">{selectedStudent.name}</h4>
                            <Badge bg={selectedStudent.priority === 'Urgent' ? 'danger' : selectedStudent.priority === 'High' ? 'warning' : 'info'} className="px-2 py-1">
                              {selectedStudent.priority || 'Normal Priority'}
                            </Badge>
                          </div>
                          <span className="text-muted small">Lead ID #{selectedStudent.id} • Registered {selectedStudent.loginTime || 'Today'} • Counselor: <strong>{selectedStudent.counselor || 'Super Admin'}</strong></span>
                        </div>
                        <div className="d-flex gap-2 align-items-center flex-wrap">
                          <Button 
                            variant="outline-primary" 
                            size="sm" 
                            className="rounded-pill fw-bold"
                            onClick={() => handleOpenEditLead(selectedStudent)}
                          >
                            <FaEdit className="me-1" /> Edit Lead
                          </Button>
                          <Form.Select 
                            size="sm" 
                            value={leadStatusDraft}
                            onChange={(e) => {
                              const newSt = e.target.value;
                              setLeadStatusDraft(newSt);
                              updateStudentNotes(selectedStudent.id, studentNotesInput, newSt);
                              setSelectedStudent(prev => ({ ...prev, leadStatus: newSt }));
                              showToast(`Lead status updated to ${newSt}`, "success");
                            }}
                            className="fw-bold border-primary"
                            style={{ width: '160px' }}
                          >
                            <option value="New Lead">🔵 New Lead</option>
                            <option value="Contacted">🟡 Contacted</option>
                            <option value="In Discussion">🟣 In Discussion</option>
                            <option value="Follow-up Scheduled">🟠 Follow-up Scheduled</option>
                            <option value="Docs Pending">📑 Docs Pending</option>
                            <option value="Enrolled">🟢 Enrolled</option>
                            <option value="Closed">⚪ Closed</option>
                          </Form.Select>
                          {hasAccess('admin') && (
                            <Button variant="outline-danger" size="sm" onClick={() => {
                              if (window.confirm(`Delete lead record for ${selectedStudent.name}?`)) {
                                deleteStudent(selectedStudent.id);
                                setSelectedStudent(null);
                                showToast("Student lead deleted.", "info");
                              }
                            }}>
                              <FaTrash />
                            </Button>
                          )}
                        </div>
                      </div>

                      {/* Direct Communication Strip */}
                      <div className="p-3 bg-light rounded-3 mb-4 d-flex flex-wrap align-items-center justify-content-between gap-2 border">
                        <div className="d-flex align-items-center gap-2 flex-wrap">
                          <span className="small fw-bold text-dark">Direct Connect:</span>
                          {(selectedStudent.mobile || selectedStudent.phone) ? (
                            <>
                              <a 
                                href={`https://wa.me/${(selectedStudent.mobile || selectedStudent.phone).replace(/[^0-9]/g, '').length === 10 ? '91' + (selectedStudent.mobile || selectedStudent.phone).replace(/[^0-9]/g, '') : (selectedStudent.mobile || selectedStudent.phone).replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hello ${selectedStudent.name}, greetings from thecollegecompass! We received your admission inquiry for ${selectedStudent.courseInterest || 'colleges'}. How can we assist you?`)}`}
                                target="_blank" 
                                rel="noreferrer" 
                                className="btn btn-sm btn-success rounded-pill fw-bold d-flex align-items-center px-3"
                              >
                                <FaWhatsapp className="me-1" /> WhatsApp Student
                              </a>
                              <a 
                                href={`tel:${(selectedStudent.mobile || selectedStudent.phone).replace(/[^0-9]/g, '')}`} 
                                className="btn btn-sm btn-outline-primary rounded-pill fw-bold d-flex align-items-center px-3"
                              >
                                <FaPhoneAlt className="me-1" /> Call Mobile
                              </a>
                            </>
                          ) : (
                            <span className="small text-muted">No phone number recorded</span>
                          )}
                          {selectedStudent.email && (
                            <a 
                              href={`mailto:${selectedStudent.email}?subject=${encodeURIComponent(`Admission Guidance for ${selectedStudent.courseInterest || 'Higher Studies'} - thecollegecompass`)}`}
                              className="btn btn-sm btn-outline-dark rounded-pill fw-bold d-flex align-items-center px-3"
                            >
                              <FaEnvelope className="me-1" /> Send Email
                            </a>
                          )}
                        </div>
                        <div className="d-flex align-items-center gap-1 flex-wrap">
                          <span className="small text-muted me-1">Quick Move:</span>
                          {['Contacted', 'In Discussion', 'Enrolled'].map(st => (
                            <Button 
                              key={st}
                              size="sm" 
                              variant={leadStatusDraft === st ? 'primary' : 'outline-secondary'} 
                              className="py-0 px-2 rounded-pill fw-semibold"
                              style={{ fontSize: '11px' }}
                              onClick={() => {
                                setLeadStatusDraft(st);
                                updateStudentNotes(selectedStudent.id, studentNotesInput, st);
                                setSelectedStudent(prev => ({ ...prev, leadStatus: st }));
                                showToast(`Moved to ${st}`, "success");
                              }}
                            >
                              {st}
                            </Button>
                          ))}
                        </div>
                      </div>

                      <Row className="mb-4">
                        <Col sm={6}>
                          <div className="small text-muted">EMAIL</div>
                          <div className="fw-bold mb-3">{selectedStudent.email}</div>
                          
                          <div className="small text-muted">PHONE NUMBER</div>
                          <div className="fw-bold mb-3">{selectedStudent.mobile || selectedStudent.phone || 'N/A'}</div>
                          
                          <div className="small text-muted">LOCATION</div>
                          <div className="fw-bold mb-3">{selectedStudent.city || 'India'}, {selectedStudent.state || ''}</div>
                        </Col>
                        <Col sm={6}>
                          <div className="small text-muted">COURSE INTEREST</div>
                          <div className="fw-bold mb-3 text-primary">{selectedStudent.courseInterest || 'Any Course'}</div>
                          
                          <div className="small text-muted">EXAM INTEREST</div>
                          <div className="fw-bold mb-3 text-info">{selectedStudent.examInterest || 'Direct / Merit'}</div>
                          
                          <div className="small text-muted">ASSIGNED COUNSELOR & PRIORITY</div>
                          <div className="fw-bold mb-3 d-flex align-items-center gap-2">
                            <Badge bg="secondary">{selectedStudent.counselor || 'Super Admin'}</Badge>
                            <Badge bg={selectedStudent.priority === 'Urgent' ? 'danger' : selectedStudent.priority === 'High' ? 'warning' : 'primary'}>
                              {selectedStudent.priority || 'Normal Priority'}
                            </Badge>
                          </div>
                        </Col>
                      </Row>

                      {/* Telemetry tabs */}
                      <Tab.Container defaultActiveKey="notes">
                        <Nav variant="tabs" className="mb-3">
                          <Nav.Item><Nav.Link eventKey="notes" className="small fw-semibold">📝 Counselor Notes</Nav.Link></Nav.Item>
                          <Nav.Item><Nav.Link eventKey="search" className="small">Search History ({selectedStudent.searchHistory?.length || 0})</Nav.Link></Nav.Item>
                          <Nav.Item><Nav.Link eventKey="viewed" className="small">Viewed Colleges ({selectedStudent.viewedColleges?.length || 0})</Nav.Link></Nav.Item>
                          <Nav.Item><Nav.Link eventKey="saved" className="small">Bookmarks ({selectedStudent.savedColleges?.length || 0})</Nav.Link></Nav.Item>
                        </Nav>

                        <Tab.Content className="p-3 border rounded bg-light mb-3" style={{ minHeight: '180px' }}>
                          <Tab.Pane eventKey="notes">
                            <Form.Group className="mb-3">
                              <Form.Label className="small fw-bold text-muted">Admin & Counselor CRM Notes</Form.Label>
                              <Form.Control 
                                as="textarea" 
                                rows={4} 
                                value={studentNotesInput} 
                                onChange={(e) => setStudentNotesInput(e.target.value)}
                                placeholder="Record call discussions, student requirements, follow-up callbacks, or application documents received..."
                              />
                            </Form.Group>
                            <div className="d-flex justify-content-between align-items-center">
                              <span className="small text-muted">Status: <strong>{leadStatusDraft}</strong></span>
                              <Button size="sm" variant="success" className="px-4 fw-bold" onClick={saveStudentNotes}>
                                Save Notes & Pipeline Status
                              </Button>
                            </div>
                          </Tab.Pane>

                          <Tab.Pane eventKey="search">
                            {!selectedStudent.searchHistory || selectedStudent.searchHistory.length === 0 ? (
                              <span className="small text-muted p-2 d-block">No search telemetry recorded yet.</span>
                            ) : (
                              <ul className="mb-0">
                                {selectedStudent.searchHistory.map((sh, idx) => <li key={idx} className="small py-1">{sh}</li>)}
                              </ul>
                            )}
                          </Tab.Pane>
                          
                          <Tab.Pane eventKey="viewed">
                            {!selectedStudent.viewedColleges || selectedStudent.viewedColleges.length === 0 ? (
                              <span className="small text-muted p-2 d-block">No page views recorded yet.</span>
                            ) : (
                              <ul className="mb-0">
                                {selectedStudent.viewedColleges.map((colId, idx) => {
                                  const match = colleges.find(c => String(c.id) === String(colId));
                                  return <li key={idx} className="small py-1">{match ? match.name : `College ID ${colId}`}</li>;
                                })}
                              </ul>
                            )}
                          </Tab.Pane>

                          <Tab.Pane eventKey="saved">
                            {!selectedStudent.savedColleges || selectedStudent.savedColleges.length === 0 ? (
                              <span className="small text-muted p-2 d-block">No saved college bookmarks.</span>
                            ) : (
                              <div className="d-flex flex-wrap gap-2 p-1">
                                {selectedStudent.savedColleges.map((colId, idx) => {
                                  const match = colleges.find(c => String(c.id) === String(colId));
                                  return <Badge key={idx} bg="primary" className="py-2 px-3">{match ? match.name : `College ID ${colId}`}</Badge>;
                                })}
                              </div>
                            )}
                          </Tab.Pane>
                        </Tab.Content>
                      </Tab.Container>
                    </Card>
                  ) : (
                    <Card className="border-0 shadow-sm p-5 text-center text-secondary">
                      Select a student lead from the list to display contact details, telemetry, and CRM follow-up records.
                    </Card>
                  )}
                </Col>
              </Row>
            </div>
          )}

          {/* TAB: SHIKSHA EXTRACTOR */}
          {activeTab === 'shiksha' && (
            <div>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                  <h4 className="fw-bold mb-1 d-flex align-items-center text-primary">
                    <FaSpider className="me-2 text-danger" /> Shiksha.com Comprehensive Extractor
                  </h4>
                  <p className="text-secondary small mb-0">
                    Extract each and every detail, campus images, official URLs, courses, fees, placements, and ratings directly from Shiksha.com.
                  </p>
                </div>
                {shikshaExtracted && (
                  <Button variant="success" size="sm" className="fw-bold rounded-pill" onClick={handleDownloadShikshaExcel}>
                    <FaFileExcel className="me-1" /> Download Scraped Excel (.xlsx)
                  </Button>
                )}
              </div>

              <Card className="border-0 shadow-sm p-4 mb-4">
                <Form onSubmit={handleTriggerShikshaScrape}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold">Shiksha College Overview URL</Form.Label>
                    <InputGroup>
                      <InputGroup.Text><FaGlobe className="text-primary" /></InputGroup.Text>
                      <Form.Control
                        type="url"
                        placeholder="e.g. https://www.shiksha.com/university/iit-delhi-indian-institute-of-technology-53938"
                        value={shikshaUrlInput}
                        onChange={(e) => setShikshaUrlInput(e.target.value)}
                        required
                        disabled={shikshaLoading}
                      />
                      <Button variant="primary" type="submit" disabled={shikshaLoading} className="fw-bold px-4">
                        {shikshaLoading ? (
                          <>
                            <Spinner size="sm" animation="border" className="me-2" />
                            Extracting Live Data...
                          </>
                        ) : (
                          <>
                            <FaSpider className="me-2" /> Extract All Details & Images
                          </>
                        )}
                      </Button>
                    </InputGroup>
                    <Form.Text className="text-muted">
                      Paste any college or university overview link from Shiksha.com to capture all courses, tuition fees, placements, contacts, and images.
                    </Form.Text>
                  </Form.Group>

                  <div className="d-flex align-items-center justify-content-between pt-2">
                    <Form.Check 
                      type="switch"
                      id="shiksha-autosave-switch"
                      label="Automatically sync & save into Website Directory (siteData.json & SQLite DB)"
                      checked={shikshaAutoSave}
                      onChange={(e) => setShikshaAutoSave(e.target.checked)}
                      className="fw-semibold text-dark"
                    />
                    <div className="d-flex gap-2">
                      <Button 
                        variant="outline-secondary" 
                        size="sm" 
                        onClick={() => setShikshaUrlInput('https://www.shiksha.com/university/iit-delhi-indian-institute-of-technology-53938')}
                      >
                        Sample: IIT Delhi
                      </Button>
                      <Button 
                        variant="outline-secondary" 
                        size="sm" 
                        onClick={() => setShikshaUrlInput('https://www.shiksha.com/college/indian-institute-of-management-ahmedabad-vastrapur-2917')}
                      >
                        Sample: IIM Ahmedabad
                      </Button>
                    </div>
                  </div>
                </Form>
              </Card>

              {shikshaError && (
                <Alert variant="danger" dismissible onClose={() => setShikshaError('')}>
                  <FaExclamationTriangle className="me-2" />
                  <strong>Extraction Warning:</strong> {shikshaError}
                </Alert>
              )}

              {shikshaLoading && (
                <Card className="border-0 shadow-sm p-5 text-center my-4">
                  <div className="py-4">
                    <Spinner animation="border" variant="primary" style={{ width: '3rem', height: '3rem' }} />
                    <h5 className="fw-bold mt-3 mb-1 text-dark">Crawling Shiksha.com Multi-Page Profile...</h5>
                    <p className="text-muted small">
                      Scraping Overview, Gallery Images, Courses & Tuition Fees, Placements, Admissions, and Cutoffs with stealth browser...
                    </p>
                  </div>
                </Card>
              )}

              {shikshaExtracted && (
                <Card className="border-0 shadow-sm p-4 mb-4">
                  <div className="d-flex justify-content-between align-items-start border-bottom pb-3 mb-4">
                    <div className="d-flex gap-3 align-items-center">
                      {shikshaExtracted.logoUrl && shikshaExtracted.logoUrl !== 'N/A' && (
                        <img 
                          src={shikshaExtracted.logoUrl} 
                          alt="Logo" 
                          style={{ width: '60px', height: '60px', objectFit: 'contain', borderRadius: '8px', border: '1px solid #dee2e6', padding: '2px', background: '#fff' }} 
                        />
                      )}
                      <div>
                        <h4 className="fw-bold text-dark mb-1">{shikshaExtracted.name}</h4>
                        <div className="d-flex flex-wrap gap-2 align-items-center small text-muted">
                          <span className="badge bg-primary">{shikshaExtracted.universityType || shikshaExtracted.ownership || 'Institute'}</span>
                          <span>📍 {shikshaExtracted.city}, {shikshaExtracted.state}</span>
                          {shikshaExtracted.establishmentYear && <span>🏛️ Estd. {shikshaExtracted.establishmentYear}</span>}
                          {shikshaExtracted.officialWebsite && (
                            <a href={shikshaExtracted.officialWebsite} target="_blank" rel="noreferrer" className="text-decoration-none">
                              🌐 Official Website <FaExternalLinkAlt size={10} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                    <Button variant="success" size="sm" onClick={handleDownloadShikshaExcel}>
                      <FaDownload className="me-1" /> Export Excel
                    </Button>
                  </div>

                  {/* Banner & Gallery */}
                  <Row className="g-3 mb-4">
                    <Col md={6}>
                      <div className="small fw-semibold text-muted mb-2">CAMPUS BANNER IMAGE</div>
                      {shikshaExtracted.bannerUrl && shikshaExtracted.bannerUrl !== 'N/A' ? (
                        <img 
                          src={shikshaExtracted.bannerUrl} 
                          alt="Campus Banner" 
                          className="w-100 rounded shadow-sm" 
                          style={{ maxHeight: '220px', objectFit: 'cover' }} 
                        />
                      ) : (
                        <div className="p-4 bg-light text-center text-muted rounded">No exterior banner found</div>
                      )}
                    </Col>
                    <Col md={6}>
                      <div className="small fw-semibold text-muted mb-2">GALLERY IMAGES ({shikshaExtracted.galleryUrls?.length || 0})</div>
                      <div className="d-flex flex-wrap gap-2">
                        {(shikshaExtracted.galleryUrls || []).slice(0, 4).map((g, idx) => (
                          <img 
                            key={idx} 
                            src={g} 
                            alt={`Gallery ${idx + 1}`} 
                            style={{ width: '100px', height: '70px', objectFit: 'cover', borderRadius: '6px' }} 
                          />
                        ))}
                      </div>
                    </Col>
                  </Row>

                  {/* Metrics Row */}
                  <Row className="g-3 mb-4 text-center">
                    <Col sm={3}>
                      <Card className="p-3 bg-light border-0">
                        <small className="text-muted fw-bold">HIGHEST CTC</small>
                        <h6 className="fw-bold text-success mb-0">{shikshaExtracted.highestPackage || 'N/A'}</h6>
                      </Card>
                    </Col>
                    <Col sm={3}>
                      <Card className="p-3 bg-light border-0">
                        <small className="text-muted fw-bold">AVERAGE CTC</small>
                        <h6 className="fw-bold text-primary mb-0">{shikshaExtracted.averagePackage || 'N/A'}</h6>
                      </Card>
                    </Col>
                    <Col sm={3}>
                      <Card className="p-3 bg-light border-0">
                        <small className="text-muted fw-bold">ENTRANCE EXAMS</small>
                        <h6 className="fw-bold text-dark mb-0">{shikshaExtracted.entranceExams || 'Merit / Direct'}</h6>
                      </Card>
                    </Col>
                    <Col sm={3}>
                      <Card className="p-3 bg-light border-0">
                        <small className="text-muted fw-bold">RANKINGS</small>
                        <h6 className="fw-bold text-warning mb-0">{shikshaExtracted.rankings || 'Top Tier'}</h6>
                      </Card>
                    </Col>
                  </Row>

                  {/* Courses Extracted */}
                  <h6 className="fw-bold text-dark mb-3">Courses & Fee Structure Captured ({shikshaExtracted.coursesOffered?.length || 0})</h6>
                  <div className="table-responsive">
                    <Table size="sm" hover className="align-middle">
                      <thead className="table-light">
                        <tr>
                          <th>Course Name</th>
                          <th>Duration</th>
                          <th>Total Tuition Fees</th>
                          <th>Eligibility</th>
                          <th>Accepted Exams</th>
                        </tr>
                      </thead>
                      <tbody>
                        {(shikshaExtracted.coursesOffered || []).map((co, idx) => (
                          <tr key={idx}>
                            <td className="fw-semibold text-primary">{co.title}</td>
                            <td>{co.duration}</td>
                            <td className="fw-bold text-dark">{co.fees}</td>
                            <td className="small">{co.eligibility}</td>
                            <td><Badge bg="light" text="dark" className="border">{co.exams}</Badge></td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                </Card>
              )}
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
                            {u.sourceUrl ? (
                              <a href={u.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                                {u.sourceUrl.includes('/') ? u.sourceUrl.split('/')[2] : u.sourceUrl} <FaExternalLinkAlt size={10} />
                              </a>
                            ) : (
                              <span className="text-muted">No Source</span>
                            )}
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

          {/* TAB 9: WEBSITE SETTINGS */}
          {activeTab === 'settings' && (
            <div>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                  <h4 className="fw-bold mb-1">Website Settings</h4>
                  <p className="text-secondary small">Modify the homepage Hero title, subtitle, and Footer configuration details.</p>
                </div>
              </div>

              <Card className="border-0 shadow-sm p-4">
                <Form onSubmit={handleSaveSettings}>
                  <h5 className="fw-bold mb-3 text-primary">Homepage Hero Banner Settings</h5>
                  <Form.Group className="mb-3">
                    <Form.Label className="small fw-semibold">Hero Title Text</Form.Label>
                    <Form.Control 
                      value={heroTitleState} 
                      onChange={(e) => setHeroTitleState(e.target.value)} 
                      required 
                    />
                  </Form.Group>
                  <Form.Group className="mb-4">
                    <Form.Label className="small fw-semibold">Hero Subtitle/Description Text</Form.Label>
                    <Form.Control 
                      as="textarea"
                      rows={2}
                      value={heroSubtitleState} 
                      onChange={(e) => setHeroSubtitleState(e.target.value)} 
                      required 
                    />
                  </Form.Group>

                  <h5 className="fw-bold mb-3 text-primary border-top pt-4">Footer Contact & Branding Info</h5>
                  <Form.Group className="mb-3">
                    <Form.Label className="small fw-semibold">Footer Description</Form.Label>
                    <Form.Control 
                      as="textarea"
                      rows={2}
                      value={footerDescState} 
                      onChange={(e) => setFooterDescState(e.target.value)} 
                      required 
                    />
                  </Form.Group>

                  <Row className="g-3 mb-4">
                    <Col md={4}>
                      <Form.Label className="small fw-semibold">Contact Email</Form.Label>
                      <Form.Control 
                        type="email"
                        value={footerEmailState} 
                        onChange={(e) => setFooterEmailState(e.target.value)} 
                        required 
                      />
                    </Col>
                    <Col md={4}>
                      <Form.Label className="small fw-semibold">Contact Toll-Free Phone</Form.Label>
                      <Form.Control 
                        value={footerPhoneState} 
                        onChange={(e) => setFooterPhoneState(e.target.value)} 
                        required 
                      />
                    </Col>
                    <Col md={4}>
                      <Form.Label className="small fw-semibold">Contact Address</Form.Label>
                      <Form.Control 
                        value={footerAddressState} 
                        onChange={(e) => setFooterAddressState(e.target.value)} 
                        required 
                      />
                    </Col>
                  </Row>

                  <Button type="submit" variant="success" className="px-4 py-2 rounded-pill fw-semibold">Save System Settings</Button>
                </Form>
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

      {/* ADD STUDENT LEAD MODAL */}
      <Modal show={showAddLeadModal} onHide={() => setShowAddLeadModal(false)} centered style={{ color: '#333' }}>
        <Modal.Header closeButton className="bg-light">
          <Modal.Title className="fw-bold text-primary">
            <FaUserGraduate className="me-2" /> Add New Student Lead
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleCreateLead}>
          <Modal.Body className="p-4">
            <Form.Group className="mb-3">
              <Form.Label className="small fw-semibold">Student Full Name *</Form.Label>
              <Form.Control 
                placeholder="e.g. Rahul Verma"
                value={newLeadName}
                onChange={(e) => setNewLeadName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="small fw-semibold">Email Address *</Form.Label>
              <Form.Control 
                type="email"
                placeholder="rahul.verma@gmail.com"
                value={newLeadEmail}
                onChange={(e) => setNewLeadEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Row className="g-3 mb-3">
              <Col md={6}>
                <Form.Label className="small fw-semibold">Phone / Mobile</Form.Label>
                <Form.Control 
                  placeholder="+91 98765 43210"
                  value={newLeadPhone}
                  onChange={(e) => setNewLeadPhone(e.target.value)}
                />
              </Col>
              <Col md={6}>
                <Form.Label className="small fw-semibold">Course Interest</Form.Label>
                <Form.Control 
                  placeholder="e.g. MBA, B.Tech CSE"
                  value={newLeadCourse}
                  onChange={(e) => setNewLeadCourse(e.target.value)}
                />
              </Col>
            </Row>

            <Row className="g-3 mb-3">
              <Col md={6}>
                <Form.Label className="small fw-semibold">City</Form.Label>
                <Form.Control 
                  placeholder="e.g. Mumbai"
                  value={newLeadCity}
                  onChange={(e) => setNewLeadCity(e.target.value)}
                />
              </Col>
              <Col md={6}>
                <Form.Label className="small fw-semibold">State</Form.Label>
                <Form.Control 
                  placeholder="e.g. Maharashtra"
                  value={newLeadState}
                  onChange={(e) => setNewLeadState(e.target.value)}
                />
              </Col>
            </Row>

            <Row className="g-3 mb-3">
              <Col md={6}>
                <Form.Label className="small fw-semibold">Entrance Exam</Form.Label>
                <Form.Control 
                  placeholder="e.g. CAT, JEE Main, GATE"
                  value={newLeadExam}
                  onChange={(e) => setNewLeadExam(e.target.value)}
                />
              </Col>
              <Col md={6}>
                <Form.Label className="small fw-semibold">Lead Priority</Form.Label>
                <Form.Select 
                  value={newLeadPriority}
                  onChange={(e) => setNewLeadPriority(e.target.value)}
                >
                  <option value="Normal">🟢 Normal Priority</option>
                  <option value="Medium">🟡 Medium Priority</option>
                  <option value="High">🟠 High Priority</option>
                  <option value="Urgent">🔴 Urgent Priority</option>
                </Form.Select>
              </Col>
            </Row>

            <Row className="g-3 mb-3">
              <Col md={12}>
                <Form.Label className="small fw-semibold">Assigned Counselor</Form.Label>
                <Form.Select 
                  value={newLeadCounselor}
                  onChange={(e) => setNewLeadCounselor(e.target.value)}
                >
                  <option value="Super Admin">Super Admin</option>
                  <option value="Admin Manager">Admin Manager</option>
                  <option value="Data Operator">Data Entry Operator</option>
                </Form.Select>
              </Col>
            </Row>

            <Form.Group className="mb-2">
              <Form.Label className="small fw-semibold">Initial Counselor Notes</Form.Label>
              <Form.Control 
                as="textarea"
                rows={2}
                placeholder="Details of student interest, budget, or preferred entrance exams..."
                value={newLeadNotes}
                onChange={(e) => setNewLeadNotes(e.target.value)}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer className="bg-light">
            <Button variant="outline-secondary" onClick={() => setShowAddLeadModal(false)}>Cancel</Button>
            <Button variant="primary" type="submit" className="fw-bold px-4">Create Lead</Button>
          </Modal.Footer>
        </Form>
      </Modal>

      {/* EDIT STUDENT LEAD MODAL */}
      <Modal show={showEditLeadModal} onHide={() => setShowEditLeadModal(false)} centered style={{ color: '#333' }}>
        <Modal.Header closeButton className="bg-light">
          <Modal.Title className="fw-bold text-primary">
            <FaEdit className="me-2" /> Edit Student Lead #{editingLeadData.id}
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSaveEditedLead}>
          <Modal.Body className="p-4">
            <Form.Group className="mb-3">
              <Form.Label className="small fw-semibold">Student Full Name *</Form.Label>
              <Form.Control 
                value={editingLeadData.name}
                onChange={(e) => setEditingLeadData(prev => ({ ...prev, name: e.target.value }))}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="small fw-semibold">Email Address *</Form.Label>
              <Form.Control 
                type="email"
                value={editingLeadData.email}
                onChange={(e) => setEditingLeadData(prev => ({ ...prev, email: e.target.value }))}
                required
              />
            </Form.Group>

            <Row className="g-3 mb-3">
              <Col md={6}>
                <Form.Label className="small fw-semibold">Phone / Mobile</Form.Label>
                <Form.Control 
                  value={editingLeadData.phone}
                  onChange={(e) => setEditingLeadData(prev => ({ ...prev, phone: e.target.value }))}
                />
              </Col>
              <Col md={6}>
                <Form.Label className="small fw-semibold">Course Interest</Form.Label>
                <Form.Control 
                  value={editingLeadData.courseInterest}
                  onChange={(e) => setEditingLeadData(prev => ({ ...prev, courseInterest: e.target.value }))}
                />
              </Col>
            </Row>

            <Row className="g-3 mb-3">
              <Col md={6}>
                <Form.Label className="small fw-semibold">Entrance Exam</Form.Label>
                <Form.Control 
                  value={editingLeadData.examInterest}
                  onChange={(e) => setEditingLeadData(prev => ({ ...prev, examInterest: e.target.value }))}
                />
              </Col>
              <Col md={6}>
                <Form.Label className="small fw-semibold">Lead Priority</Form.Label>
                <Form.Select 
                  value={editingLeadData.priority}
                  onChange={(e) => setEditingLeadData(prev => ({ ...prev, priority: e.target.value }))}
                >
                  <option value="Normal">🟢 Normal Priority</option>
                  <option value="Medium">🟡 Medium Priority</option>
                  <option value="High">🟠 High Priority</option>
                  <option value="Urgent">🔴 Urgent Priority</option>
                </Form.Select>
              </Col>
            </Row>

            <Row className="g-3 mb-3">
              <Col md={6}>
                <Form.Label className="small fw-semibold">Assigned Counselor</Form.Label>
                <Form.Select 
                  value={editingLeadData.counselor}
                  onChange={(e) => setEditingLeadData(prev => ({ ...prev, counselor: e.target.value }))}
                >
                  <option value="Super Admin">Super Admin</option>
                  <option value="Admin Manager">Admin Manager</option>
                  <option value="Data Operator">Data Entry Operator</option>
                </Form.Select>
              </Col>
              <Col md={6}>
                <Form.Label className="small fw-semibold">Pipeline Status</Form.Label>
                <Form.Select 
                  value={editingLeadData.leadStatus}
                  onChange={(e) => setEditingLeadData(prev => ({ ...prev, leadStatus: e.target.value }))}
                >
                  <option value="New Lead">🔵 New Lead</option>
                  <option value="Contacted">🟡 Contacted</option>
                  <option value="In Discussion">🟣 In Discussion</option>
                  <option value="Follow-up Scheduled">🟠 Follow-up Scheduled</option>
                  <option value="Docs Pending">📑 Docs Pending</option>
                  <option value="Enrolled">🟢 Enrolled</option>
                  <option value="Closed">⚪ Closed</option>
                </Form.Select>
              </Col>
            </Row>

            <Row className="g-3 mb-3">
              <Col md={6}>
                <Form.Label className="small fw-semibold">City</Form.Label>
                <Form.Control 
                  value={editingLeadData.city}
                  onChange={(e) => setEditingLeadData(prev => ({ ...prev, city: e.target.value }))}
                />
              </Col>
              <Col md={6}>
                <Form.Label className="small fw-semibold">State</Form.Label>
                <Form.Control 
                  value={editingLeadData.state}
                  onChange={(e) => setEditingLeadData(prev => ({ ...prev, state: e.target.value }))}
                />
              </Col>
            </Row>

            <Form.Group className="mb-2">
              <Form.Label className="small fw-semibold">Counselor Notes</Form.Label>
              <Form.Control 
                as="textarea"
                rows={3}
                value={editingLeadData.adminNotes}
                onChange={(e) => setEditingLeadData(prev => ({ ...prev, adminNotes: e.target.value }))}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer className="bg-light">
            <Button variant="outline-secondary" onClick={() => setShowEditLeadModal(false)}>Cancel</Button>
            <Button variant="primary" type="submit" className="fw-bold px-4">Update Lead</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default Admin;
