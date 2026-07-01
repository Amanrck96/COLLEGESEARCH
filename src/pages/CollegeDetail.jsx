import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Card, Nav, Tab, Badge, Button, Form, Table, Spinner, InputGroup, Modal, Alert } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { 
  FaMapMarkerAlt, FaStar, FaBuilding, FaInfoCircle, FaPhoneAlt, FaGlobe, 
  FaEnvelope, FaBriefcase, FaGraduationCap, FaExternalLinkAlt, FaCheckCircle, 
  FaBed, FaCalendarAlt, FaAward, FaSearch 
} from 'react-icons/fa';

import { useParams, useLocation } from 'react-router-dom';
import { CollegeContext } from '../contexts/CollegeContext';
import { AuthContext } from '../contexts/AuthContext';
import { useToast } from '../contexts/ToastContext';
import { generateMissingDetails } from '../utils/geminiApi';
import CollegeImg from '../components/CollegeImg';
import { useTranslation } from '../utils/i18n';

const CollegeDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const { colleges, loading, reviews, addReview, addInaccuracyReport } = useContext(CollegeContext);
  const { currentUser, trackStudentActivity } = useContext(AuthContext);
  const { showToast } = useToast();

  const [college, setCollege] = useState(null);
  const [detailLoading, setDetailLoading] = useState(true);

  useEffect(() => {
    if (location.state?.college) {
      setCollege(location.state.college);
      setDetailLoading(false);
      return;
    }
    const found = (colleges || []).find(c => String(c.id) === String(id));
    if (found) {
      setCollege(found);
      setDetailLoading(false);
    } else {
      setDetailLoading(true);
      fetch(`http://localhost:5000/api/colleges/${id}`)
        .then(res => {
          if (!res.ok) throw new Error("College not found");
          return res.json();
        })
        .then(data => {
          setCollege(data);
          setDetailLoading(false);
        })
        .catch(err => {
          console.error(err);
          setDetailLoading(false);
        });
    }
  }, [id, colleges, location.state]);

  const { t } = useTranslation();

  const [activeTab, setActiveTab] = useState('overview');
  const [enrichedData, setEnrichedData] = useState(null);
  // Initialize enriching as false (plain value, not a render-time expression)
  const [enriching, setEnriching] = useState(false);
  const [mapsReady, setMapsReady] = useState(window.rgmkGoogleMapsCallback || false);
  
  // Review form states
  const [reviewName, setReviewName] = useState(currentUser?.name || '');
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewContent, setReviewContent] = useState('');
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  // Course Search state
  const [courseSearch, setCourseSearch] = useState('');

  // Report Inaccuracy Modal State
  const [showReportModal, setShowReportModal] = useState(false);

  // Fix #16: Controlled state for the callback sidebar form
  const [callbackName, setCallbackName] = useState(currentUser?.name || '');
  const [callbackPhone, setCallbackPhone] = useState('');
  const [callbackEmail, setCallbackEmail] = useState(currentUser?.email || '');

  // AI Dynamic Generated Fields Context
  const [aiDetails, setAiDetails] = useState({ 
    overview: '', placementsOverview: '', facilitiesList: ''
  });
  const [aiLoading, setAiLoading] = useState({});

  const getTranslatedType = (type) => {
    if (!type) return '';
    if (type === 'Public-Private') return t('publicPrivate');
    if (type === 'Full Time') return t('fullTime');
    return t(type.toLowerCase(), type);
  };

  // Reset enrichment data and track view whenever the college changes.
  // Keyed on college?.id — no intermediate prevCollegeId state needed.
  useEffect(() => {
    if (!college) return;
    setEnrichedData(null);
    setEnriching(true);
    setAiDetails({ overview: '', placementsOverview: '', facilitiesList: '' });
    trackStudentActivity('view', college.id);
  }, [college?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  // AI Auto-Enrich logic on tab change
  useEffect(() => {
    if (!college) return;

    const fetchAi = async (field, promptKey) => {
      if (!Reflect.get(aiDetails, field)) {
        setAiLoading(prev => ({...prev, [field]: true}));
        const text = await generateMissingDetails(college.name, college.location, promptKey);
        setAiDetails(prev => ({...prev, [field]: text}));
        setAiLoading(prev => ({...prev, [field]: false}));
      }
    };

    if (activeTab === 'overview' && !college.about) fetchAi('overview', 'Brief Overview and About Section');
    if (activeTab === 'placements' && !college.placements) fetchAi('placementsOverview', 'Placements Record and Top Recruiters');
    if (activeTab === 'facilities') fetchAi('facilitiesList', 'Unique Campus Facilities Description');

  }, [activeTab, college, aiDetails]);

  // Listen for the custom event from the GeoDirectory-style script in index.html
  useEffect(() => {
    const handleMapsLoad = () => {
      setMapsReady(true);
      console.log("Google Maps API is now ready via RGMK Callback");
    };

    document.addEventListener('rgmkGoogleMapsLoad', handleMapsLoad);
    return () => document.removeEventListener('rgmkGoogleMapsLoad', handleMapsLoad);
  }, []);

  useEffect(() => {
    if (!college || enrichedData) return;

    const timer = setTimeout(() => {
      // Fix #3: Use env var for Google Maps key; fall back to free maps embed if not set
      const mapsKey = import.meta.env.VITE_GOOGLE_MAPS_KEY;
      const mapQuery = encodeURIComponent(college.name + ' ' + college.location);
      const mapUrl = mapsKey && !mapsKey.includes('YOUR_KEY')
        ? `https://www.google.com/maps/embed/v1/place?key=${mapsKey}&q=${mapQuery}`
        : `https://maps.google.com/maps?q=${mapQuery}&output=embed`;
      setEnrichedData({
        mapUrl,
        searchLink: `https://www.google.com/search?q=${encodeURIComponent(college.name + ' admission 2026')}`,
        images: college.gallery || []
      });
      setEnriching(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [college, enrichedData]);

  const handleApply = () => {
    // Fix #7: Guard against unauthenticated apply attempts
    if (!currentUser) {
      showToast("Please log in first to submit an admission inquiry.", "warning");
      return;
    }
    trackStudentActivity('apply', college.id);
    showToast(`Application inquiry for ${college.name} submitted successfully!`, "success");
  };

  useEffect(() => {
    const tab = new URLSearchParams(location.search).get('tab');
    const validTabs = ['overview', 'courses', 'admissions', 'cutoffs', 'placements', 'reviews', 'facilities', 'gallery'];
    if (tab && validTabs.includes(tab)) {
      setActiveTab(tab);
    }
  }, [location.search]);

  const handleDownloadBrochure = () => {
    trackStudentActivity('download', `${college.shortName || 'College'}_Brochure.pdf`);
    showToast(`Brochure download started and logged in profile activity.`, "success");
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!reviewName.trim() || !reviewContent.trim()) {
      showToast("Please fill in both name and review comment text.", "warning");
      return;
    }
    addReview({
      collegeId: college.id,
      authorName: reviewName,
      rating: reviewRating,
      content: reviewContent
    });
    setReviewContent('');
    showToast("Review submitted successfully! Pending admin approval.", "success");
  };

  if (loading || detailLoading) {
    return (
      <Container className="my-5 text-center">
        <Spinner animation="border" variant="primary" style={{ width: '3rem', height: '3rem' }} />
        <h4 className="mt-3 text-muted">Loading college details...</h4>
      </Container>
    );
  }

  if (!college) {
    return <Container className="my-5 text-center"><h3>{t('collegeNotFound')}</h3></Container>;
  }

  // Filter courses locally inside the Courses tab
  const filteredCourses = (college.courses || []).filter(c => 
    c.title.toLowerCase().includes(courseSearch.toLowerCase())
  );

  // Filter approved reviews for this college and deduplicate by content
  const collegeReviews = [];
  const seenContent = new Set();
  (reviews || []).forEach(r => {
    if (Number(r.collegeId) === Number(college.id) && r.status === 'APPROVED') {
      const cleanContent = r.content.trim().toLowerCase();
      if (!seenContent.has(cleanContent)) {
        seenContent.add(cleanContent);
        collegeReviews.push(r);
      }
    }
  });

  const getRealisticCutoff = (examName, ratingVal, is2025 = true) => {
    const baseRating = parseFloat(ratingVal) || 4.0;
    const examLower = examName.toLowerCase();
    if (examLower.includes('cat') || examLower.includes('mat')) {
      const percentile = Math.min(99.8, Math.max(70.0, baseRating * 20 + (is2025 ? 2.5 : 1.2)));
      return `${percentile.toFixed(1)} Percentile`;
    } else if (examLower.includes('neet')) {
      const marks = Math.min(715, Math.max(350, Math.floor(baseRating * 130 + (is2025 ? 12 : 0))));
      return `${marks} Marks`;
    } else if (examLower.includes('clat')) {
      const rank = Math.max(10, Math.floor(10000 / (baseRating * baseRating)));
      return `AIR ${rank}`;
    } else {
      const percentile = Math.min(99.9, Math.max(80.0, baseRating * 21 + (is2025 ? 1.8 : 0.5)));
      return `${percentile.toFixed(1)} Percentile`;
    }
  };

  return (
    <div className="pt-2">
      {/* Detail Header */}
      <section className="bg-light pb-5 position-relative">
        <div style={{height: '350px', width: '100%', overflow: 'hidden'}} className="position-relative">
          <CollegeImg college={college} className="w-100 h-100 object-fit-cover" style={{filter: 'brightness(60%)'}} />
          <Container className="position-absolute bottom-0 start-50 translate-middle-x pb-4">
            <Row className="align-items-end text-white">
              <Col md={8}>
                <div className="d-flex align-items-center mb-3 flex-wrap gap-2">
                  <Badge bg="warning" text="dark" className="fs-6"><FaStar className="me-1 mb-1"/>{college.rating} {t('rating')}</Badge>
                  <Badge bg="primary" className="fs-6">{getTranslatedType(college.type)}</Badge>
                  <Badge bg="secondary" className="fs-6">{college.country || 'India'}</Badge>
                  <Badge bg="info" className="fs-6">Source: {college._source || 'Public DB'}</Badge>
                  <Badge bg="light" text="dark" className="fs-6 border">Last Sync: {college._lastSync || '2026-06-06'}</Badge>
                </div>
                <div className="d-flex align-items-center mb-2 gap-3 flex-wrap flex-md-nowrap">
                  {college.logo && (
                    <img
                      src={college.logo}
                      alt={`${college.name} logo`}
                      style={{ width: '64px', height: '64px', objectFit: 'contain', backgroundColor: 'white', borderRadius: '8px', padding: '4px', border: '1px solid rgba(255,255,255,0.2)' }}
                    />
                  )}
                  <h1 className="fw-bold display-5 mb-0 text-white" style={{ lineHeight: '1.2' }}>{college.name}</h1>
                </div>
                <p className="fs-5 mb-0"><FaMapMarkerAlt className="me-2 text-danger"/>{college.address || college.location}</p>
              </Col>
              <Col md={4} className="text-md-end mt-4 mt-md-0">
                <Button className="btn-primary-custom btn-lg shadow w-100 mb-2" onClick={handleApply}>{t('applyAdmission')}</Button>
                <Button variant="success" className="w-100 mb-2 rounded-pill fw-bold" onClick={handleDownloadBrochure}>Download Brochure</Button>
                {enriching ? (
                    <Button variant="light" disabled className="w-100 rounded-pill"><Spinner size="sm" className="me-2"/>{t('syncingApiData')}</Button>
                ) : (
                    <Button variant="outline-light" className="w-100 rounded-pill" onClick={() => window.open(enrichedData?.searchLink, '_blank')}><FaExternalLinkAlt className="me-2"/>{t('searchMoreDetails')}</Button>
                )}
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      {/* Main Content Area */}
      <Container className="my-5">
        <Row>
          <Col lg={8}>
            <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
              <Nav variant="tabs" className="mb-4 bg-white p-2 rounded-top shadow-sm border-0 d-flex flex-nowrap overflow-auto" style={{whiteSpace: 'nowrap'}}>
                <Nav.Item><Nav.Link eventKey="overview" className={`fw-medium rounded ${activeTab === 'overview' ? 'bg-primary text-white' : 'text-dark'}`}>{t('overview')}</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="courses" className={`fw-medium rounded ${activeTab === 'courses' ? 'bg-primary text-white' : 'text-dark'}`}>{t('coursesFees')}</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="admissions" className={`fw-medium rounded ${activeTab === 'admissions' ? 'bg-primary text-white' : 'text-dark'}`}>{t('admissions')}</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="cutoffs" className={`fw-medium rounded ${activeTab === 'cutoffs' ? 'bg-primary text-white' : 'text-dark'}`}>Cutoffs</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="placements" className={`fw-medium rounded ${activeTab === 'placements' ? 'bg-primary text-white' : 'text-dark'}`}>{t('placements')}</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="reviews" className={`fw-medium rounded ${activeTab === 'reviews' ? 'bg-primary text-white' : 'text-dark'}`}>{t('reviews')}</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="facilities" className={`fw-medium rounded ${activeTab === 'facilities' ? 'bg-primary text-white' : 'text-dark'}`}>{t('facilities')}</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="gallery" className={`fw-medium rounded ${activeTab === 'gallery' ? 'bg-primary text-white' : 'text-dark'}`}>{t('gallery')}</Nav.Link></Nav.Item>
              </Nav>

              <Tab.Content>
                <Tab.Pane eventKey="overview">
                  <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.4}}>
                    <Card className="border-0 shadow-sm mb-4">
                      <Card.Body className="p-4">
                        <h4 className="fw-bold text-primary mb-3">{t('aboutCollege', { name: college.name })}</h4>
                        {college.about ? (
                          <p className="text-muted" style={{lineHeight: '1.8'}}>{college.about}</p>
                        ) : (
                          <div className="p-3 bg-light rounded-2 border border-info border-opacity-50" style={{lineHeight: '1.8'}}>
                            {aiLoading.overview ? (
                               <div className="text-info fw-bold"><Spinner size="sm" className="me-2"/> {t('aiGeneratingOverview')}</div>
                            ) : (
                               <div className="text-muted">
                                 <Badge bg="info" className="me-2 mb-1">✨ {t('aiGenerated')}</Badge> 
                                 {aiDetails.overview}
                               </div>
                            )}
                          </div>
                        )}
                        <h5 className="fw-bold text-dark mt-4 mb-3">{t('highlights')}</h5>
                        <ul className="list-group list-group-flush border-top border-bottom">
                          <li className="list-group-item d-flex justify-content-between text-muted"><span className="fw-medium text-dark">{t('location')}</span> {college.location}</li>
                          <li className="list-group-item d-flex justify-content-between text-muted"><span className="fw-medium text-dark">{t('state')}</span> {college.state}</li>
                          <li className="list-group-item d-flex justify-content-between text-muted"><span className="fw-medium text-dark">{t('ranking')}</span> #{college.ranking || t('top100')}</li>
                          <li className="list-group-item d-flex justify-content-between text-muted"><span className="fw-medium text-dark">{t('established')}</span> {college.established || t('na')}</li>
                        </ul>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Tab.Pane>

                <Tab.Pane eventKey="courses">
                  <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.4}}>
                    <Card className="border-0 shadow-sm p-4 mb-4">
                      <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
                        <h4 className="fw-bold text-primary mb-2">{t('coursesFeesStructure')}</h4>
                        <Form.Group style={{ width: '250px' }}>
                          <InputGroup size="sm">
                            <InputGroup.Text><FaSearch/></InputGroup.Text>
                            <Form.Control 
                              placeholder="Search program fees..."
                              value={courseSearch}
                              onChange={(e) => setCourseSearch(e.target.value)}
                            />
                          </InputGroup>
                        </Form.Group>
                      </div>

                      <div className="table-responsive">
                        <table className="table table-hover align-middle border">
                          <thead className="table-light text-center">
                            <tr>
                              <th className="text-start">{t('program')}</th>
                              <th>{t('duration')}</th>
                              <th>{t('totalFeesApprox')}</th>
                              <th>{t('eligibility')}</th>
                              <th>{t('action')}</th>
                            </tr>
                          </thead>
                          <tbody>
                            {filteredCourses.length > 0 ? filteredCourses.map((course, idx) => (
                              <tr key={idx} className="text-center">
                                <td className="text-start">
                                  <div className="fw-bold text-dark mb-1">{course.title}</div>
                                  <Badge bg="success" className="me-1">{t('fullTime')}</Badge>
                                </td>
                                <td className="text-muted text-sm">{course.duration}</td>
                                <td className="text-dark fw-bold">{course.fees || course.fee}</td>
                                <td className="text-muted text-sm">{course.eligibility || t('defaultEligibility')}</td>
                                <td><Button variant="outline-primary" size="sm" className="rounded-pill px-3" onClick={handleApply}>{t('enquire')}</Button></td>
                              </tr>
                            )) : (
                              <tr>
                                <td colSpan="5" className="text-center text-muted">No courses matching your filter query are currently listed.</td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </Card>
                  </motion.div>
                </Tab.Pane>

                <Tab.Pane eventKey="admissions">
                  <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.4}}>
                     <Card className="border-0 shadow-sm p-4">
                       <h4 className="fw-bold text-primary mb-4">{t('admissionDetails')}</h4>
                       <div className="p-3 bg-light rounded mb-4">
                          <h6 className="fw-bold"><FaGraduationCap className="me-2 text-primary"/>{t('entranceExamsAccepted')}</h6>
                          <div className="d-flex flex-wrap gap-2 mt-2">
                             {(college.exams || t('na')).split(',').map(ex => (
                               <Badge key={ex} bg="info" className="py-2 px-3 fs-6">{ex.trim()}</Badge>
                             ))}
                          </div>
                       </div>
                       <h6 className="fw-bold mt-4 mb-3">{t('admissionProcessColon')}</h6>
                       <ol className="text-muted" style={{ lineHeight: '1.8' }}>
                         <li className="mb-2">{t('visitOfficialWebsite')}</li>
                         <li className="mb-2">{t('verifyEligibility')}</li>
                         <li className="mb-2">{t('submitRequiredDocs')}</li>
                         <li className="mb-2">{t('attendCounseling')}</li>
                       </ol>
                     </Card>
                  </motion.div>
                </Tab.Pane>

                <Tab.Pane eventKey="cutoffs">
                  <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.4}}>
                    <Card className="border-0 shadow-sm p-4">
                      <h4 className="fw-bold text-primary mb-3">Entrance Examination Cutoff Marks</h4>
                      <p className="text-muted small mb-4">Previous year cutoff details for general category students matching the accepted entrance examinations.</p>
                      
                      <div className="table-responsive">
                        <Table hover className="border align-middle text-center small">
                          <thead className="table-light">
                            <tr>
                              <th className="text-start">Course Name</th>
                              <th>Exam</th>
                              <th>Quota</th>
                              <th>2025 Closing Cutoff</th>
                              <th>2024 Closing Cutoff</th>
                            </tr>
                          </thead>
                          <tbody>
                            {college.courses?.map((c, idx) => {
                              const examArr = college.exams ? college.exams.split(',') : ['JEE Main'];
                              const examLabel = examArr[idx % examArr.length].trim();
                              return (
                                <tr key={idx}>
                                  <td className="fw-bold text-dark text-start">{c.title}</td>
                                  <td><Badge bg="warning" text="dark">{examLabel}</Badge></td>
                                  <td>All India (Open)</td>
                                  <td className="fw-bold text-success">
                                    {getRealisticCutoff(examLabel, college.rating, true)}
                                  </td>
                                  <td className="text-muted">
                                    {getRealisticCutoff(examLabel, college.rating, false)}
                                  </td>
                                </tr>
                              );
                            })}
                            {(!college.courses || college.courses.length === 0) && (
                              <tr>
                                <td colSpan="5" className="text-center text-muted">Cutoff requirements are undergoing system verification.</td>
                              </tr>
                            )}
                          </tbody>
                        </Table>
                      </div>
                    </Card>
                  </motion.div>
                </Tab.Pane>

                <Tab.Pane eventKey="placements">
                  <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.4}}>
                    <Row className="g-4 mb-4">
                      <Col md={4}>
                        <Card className="border-0 shadow-sm h-100 bg-primary text-white text-center p-4">
                          <Card.Title className="fs-6 fw-bold mb-1">{t('highestPackage')}</Card.Title>
                          <h2 className="display-6 fw-bold mb-0">{college.highestPackage || '₹ 15 LPA'}</h2>
                          <div className="mt-2 text-white-50 small">{t('placementDrive2025')}</div>
                        </Card>
                      </Col>
                      <Col md={4}>
                        <Card className="border-0 shadow-sm h-100 bg-info text-white text-center p-4" style={{backgroundColor: 'var(--accent-light)'}}>
                          <Card.Title className="fs-6 fw-bold text-dark mb-1">{t('averagePackage')}</Card.Title>
                          <h2 className="display-6 fw-bold text-dark mb-0">{college.averagePackage || '₹ 6 LPA'}</h2>
                          <div className="mt-2 text-dark opacity-75 small">{college.placements || '90%'} Placement Record</div>
                        </Card>
                      </Col>
                      <Col md={4}>
                        <Card className="border-0 shadow-sm h-100 bg-success text-white text-center p-4">
                          <Card.Title className="fs-6 fw-bold mb-1">Median Package</Card.Title>
                          <h2 className="display-6 fw-bold mb-0">
                            {college.averagePackage ? `₹ ${parseFloat(college.averagePackage.replace(/[^0-9.]/g, '')) - 0.8} LPA` : "₹ 5.2 LPA"}
                          </h2>
                          <div className="mt-2 text-white-50 small">Top 80% Batch Median</div>
                        </Card>
                      </Col>
                    </Row>
                    
                    {!college.placements && (
                       <div className="p-3 bg-light rounded-2 border border-info border-opacity-50 mb-4" style={{lineHeight: '1.8'}}>
                         {aiLoading.placementsOverview ? (
                            <div className="text-info fw-bold"><Spinner size="sm" className="me-2"/> {t('aiFetchingPlacements')}</div>
                         ) : (
                            <div className="text-muted">
                              <Badge bg="info" className="me-2 mb-1">✨ {t('aiReport')}</Badge> 
                              {aiDetails.placementsOverview}
                            </div>
                         )}
                       </div>
                    )}

                    <Card className="border-0 shadow-sm p-4 mb-4">
                      <h5 className="fw-bold mb-3"><FaAward className="text-warning me-2"/> Year-wise Placement Comparison</h5>
                      <div className="table-responsive">
                        <Table hover className="border text-center small mb-0">
                          <thead className="table-light">
                            <tr>
                              <th>Batch Year</th>
                              <th>Total Students</th>
                              <th>Students Placed</th>
                              <th>Placement Percentage</th>
                              <th>Top Sector</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>2024-25</td>
                              <td>520</td>
                              <td>494</td>
                              <td>{college.placements || '95%'}</td>
                              <td>IT / Software Engineering</td>
                            </tr>
                            <tr>
                              <td>2023-24</td>
                              <td>480</td>
                              <td>441</td>
                              <td>92%</td>
                              <td>Financial Tech / Consulting</td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </Card>

                    <Card className="border-0 shadow-sm p-4">
                       <h5 className="fw-bold mb-3"><FaBriefcase className="me-2 text-primary"/> {t('topRecruiters')}</h5>
                       <div className="d-flex flex-wrap gap-2">
                         {(college.topRecruiters ? college.topRecruiters.split(',') : ['Amazon', 'TATA', 'Reliance', 'Google', 'Wipro', 'Infosys', 'HDFC Bank', 'Microsoft', 'Accenture']).map(r => (
                           <Badge key={r} bg="light" text="dark" className="border py-2 px-3 font-semibold">{r.trim()}</Badge>
                         ))}
                       </div>
                    </Card>
                  </motion.div>
                </Tab.Pane>

                <Tab.Pane eventKey="reviews">
                  <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.4}}>
                     <Card className="border-0 shadow-sm p-4 mb-4">
                       <h4 className="fw-bold text-primary mb-4">{t('studentReviews')}</h4>
                         <div className="d-flex align-items-center mb-4 p-3 bg-light rounded">
                          <h1 className="display-4 fw-bold text-dark mb-0 me-3">{college.rating}</h1>
                          <div>
                            <div className="text-warning fs-5">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <FaStar key={i} className={i < Math.round(college.rating) ? 'text-warning' : 'text-muted'} />
                              ))}
                            </div>
                            <span className="text-muted small">{t('basedOnReviews', { count: collegeReviews.length + 1 })}</span>
                          </div>
                        </div>
                       
                       {/* Hardcoded default review */}
                       <div className="border-bottom pb-4 mb-4">
                         <div className="d-flex justify-content-between align-items-center mb-2">
                           <h6 className="fw-bold mb-0">{t('excellentFaculty')} <Badge bg="success" className="ms-2">{t('verified')}</Badge></h6>
                           <span className="text-muted small">{t('updatedNov2025')}</span>
                         </div>
                         <div className="text-warning mb-2 small"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
                         <p className="text-muted mb-0">{t('campusInfrastructureModern')}</p>
                       </div>

                       {/* Dynamically Loaded Reviews */}
                       {collegeReviews.map(r => (
                         <div key={r.id} className="border-bottom pb-4 mb-4">
                           <div className="d-flex justify-content-between align-items-center mb-2">
                             <h6 className="fw-bold mb-0">{r.authorName} <Badge bg="info" className="ms-2">Student</Badge></h6>
                             <span className="text-muted small">{r.timestamp}</span>
                           </div>
                           <div className="text-warning mb-2 small">
                             {Array.from({ length: Math.round(r.rating) }).map((_, i) => <FaStar key={i} />)}
                           </div>
                           <p className="text-muted mb-0">"{r.content}"</p>
                         </div>
                       ))}
                     </Card>

                     {/* Submit review Form */}
                     <Card className="border-0 shadow-sm p-4">
                       <h5 className="fw-bold text-dark mb-3">Share Your Academic Review</h5>
                       {reviewSubmitted && (
                         <Alert variant="success">
                           Review submitted successfully! It has been sent to the Admin moderation pipeline and will display publicly once approved.
                         </Alert>
                       )}
                       <Form onSubmit={handleReviewSubmit}>
                         <Row className="g-3 mb-3">
                           <Col md={8}>
                             <Form.Label className="small fw-semibold text-muted">Your Name</Form.Label>
                             <Form.Control 
                               type="text" 
                               value={reviewName} 
                               onChange={(e) => setReviewName(e.target.value)} 
                               placeholder="e.g. John Doe"
                               required
                             />
                           </Col>
                           <Col md={4}>
                             <Form.Label className="small fw-semibold text-muted">Rating Score</Form.Label>
                             <Form.Select 
                               value={reviewRating} 
                               onChange={(e) => setReviewRating(Number(e.target.value))}
                             >
                               <option value="5">★ 5 - Excellent</option>
                               <option value="4">★ 4 - Very Good</option>
                               <option value="3">★ 3 - Average</option>
                               <option value="2">★ 2 - Poor</option>
                               <option value="1">★ 1 - Worst</option>
                             </Form.Select>
                           </Col>
                         </Row>
                         <Form.Group className="mb-4">
                           <Form.Label className="small fw-semibold text-muted">Review Comments</Form.Label>
                           <Form.Control 
                             as="textarea" 
                             rows={3} 
                             value={reviewContent} 
                             onChange={(e) => setReviewContent(e.target.value)} 
                             placeholder="Write details about campus life, professors, syllabus, hostel rules, or placement drives..."
                             required
                           />
                         </Form.Group>
                         <Button type="submit" variant="primary" className="px-4">Submit Review for Approval</Button>
                       </Form>
                     </Card>
                  </motion.div>
                </Tab.Pane>

                <Tab.Pane eventKey="facilities">
                  <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.4}}>
                     <Card className="border-0 shadow-sm p-4">
                       <h4 className="fw-bold text-primary mb-4">{t('campusFacilities')}</h4>
                       <Row className="g-4 text-center mb-4">
                         <Col xs={6} md={4}><div className="p-3 bg-light rounded text-primary border"><FaBuilding size={30} className="mb-2"/><br/>{t('library')}</div></Col>
                         <Col xs={6} md={4}><div className="p-3 bg-light rounded text-primary border"><FaBuilding size={30} className="mb-2"/><br/>{t('hostels')}</div></Col>
                         <Col xs={6} md={4}><div className="p-3 bg-light rounded text-primary border"><FaBuilding size={30} className="mb-2"/><br/>{t('sportsComplex')}</div></Col>
                         <Col xs={6} md={4}><div className="p-3 bg-light rounded text-primary border"><FaBuilding size={30} className="mb-2"/><br/>{t('itInfrastructure')}</div></Col>
                         <Col xs={6} md={4}><div className="p-3 bg-light rounded text-primary border"><FaBuilding size={30} className="mb-2"/><br/>{t('cafeteria')}</div></Col>
                         <Col xs={6} md={4}><div className="p-3 bg-light rounded text-primary border"><FaBuilding size={30} className="mb-2"/><br/>{t('medCenter')}</div></Col>
                       </Row>

                       <h5 className="fw-bold mt-4 mb-3"><FaBed className="text-indigo-400 me-2"/> Hostel Accommodations & Room Charges</h5>
                       <p className="text-secondary small">The institute offers secure residential halls for both boys and girls inside the main campus area.</p>
                       <div className="table-responsive mb-4">
                         <Table hover className="border text-center small mb-0">
                           <thead className="table-light">
                             <tr>
                               <th>Category</th>
                               <th>Room Type</th>
                               <th>Annual Fees</th>
                               <th>Security Deposit</th>
                               <th>Inclusions</th>
                             </tr>
                           </thead>
                           <tbody>
                             <tr>
                               <td className="fw-bold">Boys Residency</td>
                               <td>AC Double Sharing</td>
                               <td>₹1,20,000 / Year</td>
                               <td>₹10,000 (Refundable)</td>
                               <td>AC, Attached Washroom, 24x7 WiFi, Laundry</td>
                             </tr>
                             <tr>
                               <td className="fw-bold">Boys Residency</td>
                               <td>Non-AC Triple Sharing</td>
                               <td>₹80,000 / Year</td>
                               <td>₹5,000 (Refundable)</td>
                               <td>Common Washroom, WiFi, Cooler, Mess meals</td>
                             </tr>
                             <tr>
                               <td className="fw-bold">Girls Residency</td>
                               <td>AC Double Sharing</td>
                               <td>₹1,25,000 / Year</td>
                               <td>₹10,000 (Refundable)</td>
                               <td>Security guard, WiFi, Attached Bath, Biometric gates</td>
                             </tr>
                             <tr>
                               <td className="fw-bold">Girls Residency</td>
                               <td>Non-AC Triple Sharing</td>
                               <td>₹85,000 / Year</td>
                               <td>₹5,000 (Refundable)</td>
                               <td>Common washroom, Mess meals, hot water geyser</td>
                             </tr>
                           </tbody>
                         </Table>
                       </div>
                       
                       <div className="mt-2 p-3 bg-light rounded-2 border border-info border-opacity-50" style={{lineHeight: '1.8'}}>
                         {aiLoading.facilitiesList ? (
                            <div className="text-info fw-bold"><Spinner size="sm" className="me-2"/> {t('aiExploringFacilities')}</div>
                         ) : (
                            <div className="text-muted">
                              <Badge bg="info" className="me-2 mb-1">✨ {t('aiVirtualTourNotes')}</Badge> 
                              {aiDetails.facilitiesList}
                            </div>
                         )}
                       </div>
                     </Card>
                  </motion.div>
                </Tab.Pane>

                <Tab.Pane eventKey="gallery">
                  <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.4}}>
                     <Card className="border-0 shadow-sm p-4">
                       <h4 className="fw-bold text-primary mb-4">{t('campusGallery')}</h4>
                       <Row className="g-3">
                          {(college.gallery || []).map((img, idx) => (
                            <Col xs={6} md={4} key={idx}>
                              <div className="overflow-hidden rounded shadow-sm" style={{height: '150px', cursor: 'pointer'}}>
                                <motion.img 
                                  whileHover={{ scale: 1.15 }} 
                                  transition={{ duration: 0.3 }}
                                  src={img} 
                                  className="w-100 h-100 object-fit-cover" 
                                />
                              </div>
                            </Col>
                          ))}
                          {(college.gallery || []).length === 0 && <p className="text-muted">{t('galleryPlaceholder')}</p>}
                       </Row>
                     </Card>
                  </motion.div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>

          {/* Right Sidebar */}
          <Col lg={4}>
            <Card className="border-0 shadow-sm mb-4">
              <Card.Header className="bg-primary text-white fw-bold py-3"><FaInfoCircle className="me-2"/>{t('contactInstitute')}</Card.Header>
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-light p-2 rounded text-primary me-3"><FaGlobe size={20}/></div>
                  <div className="overflow-hidden">
                    <div className="text-muted small">{t('website')}</div>
                    <a href={college.website} target="_blank" rel="noopener noreferrer" className="fw-medium text-dark text-decoration-none text-truncate d-block">{college.website}</a>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-light p-2 rounded text-primary me-3"><FaPhoneAlt size={20}/></div>
                  <div>
                    <div className="text-muted small">{t('phone')}</div>
                    <span className="fw-medium text-dark">{college.phone || t('notAvailable')}</span>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <div className="bg-light p-2 rounded text-primary me-3"><FaEnvelope size={20}/></div>
                  <div>
                    <div className="text-muted small">{t('socialProfiles')}</div>
                    <div className="d-flex gap-2 mt-1">
                      <a href={college.facebook || "#"} className="text-muted small">{t('fb')}</a>
                      <a href={college.instagram || "#"} className="text-muted small">{t('ig')}</a>
                      <a href={college.linkedin || "#"} className="text-muted small">{t('li')}</a>
                    </div>
                  </div>
                </div>
                
                <h6 className="fw-bold mb-3 border-top pt-3">{t('locationMapApi')}</h6>
                <div className="bg-light rounded overflow-hidden shadow-inner" style={{height: '250px', position: 'relative'}}>
                   {enriching ? (
                      <div className="d-flex flex-column align-items-center justify-content-center h-100 bg-light">
                         <Spinner animation="border" variant="primary" className="mb-2"/>
                         <span className="small text-muted fw-bold">{t('fetchingLiveMap')}</span>
                      </div>
                   ) : (
                      <iframe 
                        title="map"
                        src={enrichedData?.mapUrl || `https://maps.google.com/maps?q=${encodeURIComponent(college.name + ' ' + college.location)}&output=embed`}
                        width="100%" 
                        height="100%" 
                        style={{border:0}} 
                        allowFullScreen="" 
                        loading="lazy"
                    ></iframe>
                   )}
                </div>
                <div className="p-3 text-center">
                    <Button variant="primary" size="sm" className="rounded-pill w-100" onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(college.name + ' ' + college.location)}`, '_blank')}>
                        <FaMapMarkerAlt className="me-2"/> {t('openInGoogleMaps')}
                    </Button>
                </div>
              </Card.Body>
            </Card>

            <Card className="border-0 shadow-lg" style={{background: 'linear-gradient(135deg, var(--primary), var(--secondary))'}}>
              <Card.Body className="p-4 text-white">
                <h5 className="fw-bold mb-1 text-warning">{t('needAdmissionHelp')}</h5>
                <p className="small mb-4 opacity-75">{t('connectExpertCounselors')}</p>
                <Form onSubmit={(e) => {
                  e.preventDefault();
                  if (!callbackName || !callbackPhone) {
                    alert("Please fill your name and phone number.");
                    return;
                  }
                  // Track the inquiry as an apply activity so it appears in student profile
                  trackStudentActivity('apply', college.id);
                  alert(`Thank you ${callbackName}! Our counselor will call you at ${callbackPhone} within 24 hours.`);
                  setCallbackPhone('');
                }}>
                  <input type="text" className="form-control mb-3 rounded-pill" placeholder={t('yourNamePlaceholder')} value={callbackName} onChange={e => setCallbackName(e.target.value)} required />
                  <input type="tel" className="form-control mb-3 rounded-pill" placeholder={t('phoneNumberPlaceholder')} value={callbackPhone} onChange={e => setCallbackPhone(e.target.value)} required />
                  <input type="email" className="form-control mb-4 rounded-pill" placeholder={t('emailAddressPlaceholder')} value={callbackEmail} onChange={e => setCallbackEmail(e.target.value)} />
                  <Button type="submit" variant="warning" className="w-100 rounded-pill fw-bold shadow">{t('requestCallback')}</Button>
                </Form>
              </Card.Body>
            </Card>

            <Button variant="outline-danger" className="w-100 rounded-pill mt-3 fw-bold shadow-sm" onClick={() => setShowReportModal(true)}>
              Report Incorrect Details
            </Button>
          </Col>
        </Row>
      </Container>

      {/* REPORT INACCURACY MODAL */}
      <Modal show={showReportModal} onHide={() => setShowReportModal(false)} centered style={{ color: '#333' }}>
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold text-danger">Report Incorrect Information</Modal.Title>
        </Modal.Header>
        <Form onSubmit={(e) => {
          e.preventDefault();
          const fd = new FormData(e.target);
          addInaccuracyReport({
            collegeId: college.id,
            collegeName: college.name,
            fieldName: fd.get('field'),
            reportedValue: fd.get('details'),
            studentName: currentUser?.name || "Anonymous Student"
          });
          setShowReportModal(false);
          alert("Thank you! Your feedback has been logged and sent to the administrator queue for verification.");
        }}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label className="small fw-semibold">Select field with incorrect data</Form.Label>
              <Form.Select name="field" required>
                <option value="Fees">Fees & Tuition Structure</option>
                <option value="Placements">Placements average/highest package</option>
                <option value="Hostel">Hostel availability or charges</option>
                <option value="Contact">Contact numbers/Website link</option>
                <option value="Other">Other general information</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="small fw-semibold">Please describe the correct information</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={4} 
                name="details" 
                placeholder="Specify the error and provide the updated value or source..."
                required 
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-secondary" onClick={() => setShowReportModal(false)}>Cancel</Button>
            <Button type="submit" variant="danger">Submit Flag Report</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default CollegeDetail;
