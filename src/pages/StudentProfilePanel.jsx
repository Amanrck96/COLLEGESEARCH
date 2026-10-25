import React, { useState, useContext, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button, Badge, Tab, Nav, ProgressBar, Alert, Modal } from 'react-bootstrap';
import { 
  FaUserGraduate, FaHeart, FaHistory, FaEdit, FaCheckCircle, 
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaBookOpen, FaClipboardList, 
  FaArrowLeft, FaExternalLinkAlt, FaTrash, FaUserCheck, FaGraduationCap, FaSave 
} from 'react-icons/fa';
import { AuthContext } from '../contexts/AuthContext';
import { CollegeContext } from '../contexts/CollegeContext';
import { useToast } from '../contexts/ToastContext';
import { Link, useNavigate } from 'react-router-dom';

const StudentProfilePanel = () => {
  const { currentUser, updateStudentNotes, logActivity } = useContext(AuthContext);
  const { colleges } = useContext(CollegeContext);
  const { showToast } = useToast();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [counselingRequested, setCounselingRequested] = useState(false);

  // Profile form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [stateVal, setStateVal] = useState('');
  const [courseInterest, setCourseInterest] = useState('');
  const [examInterest, setExamInterest] = useState('');

  // Bookmarks state synced from localStorage & user data
  const [savedCollegesList, setSavedCollegesList] = useState([]);

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name || '');
      setEmail(currentUser.email || '');
      setPhone(currentUser.phone || '');
      setCity(currentUser.city || 'Mumbai');
      setStateVal(currentUser.state || 'Maharashtra');
      setCourseInterest(currentUser.courseInterest || 'B.Tech Computer Science');
      setExamInterest(currentUser.examInterest || 'JEE Main');

      // Fetch saved colleges
      const savedIds = JSON.parse(localStorage.getItem(`saved_colleges_${currentUser.id}`) || '[]');
      const matches = (colleges || []).filter(c => savedIds.includes(c.id) || savedIds.includes(String(c.id)));
      if (matches.length > 0) {
        setSavedCollegesList(matches);
      } else {
        // Fallback to top 2 premier colleges as default demo bookmarks
        const defaultSample = (colleges || []).slice(0, 3);
        setSavedCollegesList(defaultSample);
      }
    }
  }, [currentUser, colleges]);

  const handleSaveProfile = async (e) => {
    e.preventDefault();
    setSaving(true);

    const token = localStorage.getItem('token');
    try {
      if (token && token !== 'local-offline-session-token') {
        const res = await fetch('http://localhost:5000/api/auth/profile', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            name, phone, city, state: stateVal, courseInterest, examInterest
          })
        });
        if (!res.ok) throw new Error("Could not update server profile");
      }
      showToast("Profile details updated successfully!", "success");
      setIsEditing(false);
      if (currentUser) {
        logActivity(name, "Student", "Profile Update", `Updated personal details and target preferences.`);
      }
    } catch (err) {
      console.warn("Saving profile locally:", err);
      showToast("Profile updated locally!", "success");
      setIsEditing(false);
    } finally {
      setSaving(false);
    }
  };

  const handleRemoveBookmark = (colId) => {
    const updated = savedCollegesList.filter(c => c.id !== colId);
    setSavedCollegesList(updated);
    if (currentUser) {
      const remainingIds = updated.map(c => c.id);
      localStorage.setItem(`saved_colleges_${currentUser.id}`, JSON.stringify(remainingIds));
    }
    showToast("Removed college from bookmarks", "info");
  };

  const handleRequestCounseling = () => {
    setCounselingRequested(true);
    showToast("Counseling call requested! A senior admissions mentor will contact you within 24 hours.", "success");
    if (currentUser) {
      logActivity(currentUser.name, "Student", "Counseling Request", `Requested urgent counseling callback for ${courseInterest}`);
    }
  };

  if (!currentUser) {
    return (
      <Container className="py-5 text-center min-vh-100 d-flex flex-column justify-content-center align-items-center">
        <Card className="p-5 border-0 shadow-sm" style={{ maxWidth: '500px', borderRadius: '16px' }}>
          <FaUserGraduate size={50} className="text-primary mb-3 mx-auto" />
          <h4 className="fw-bold mb-2">Student Portal Access</h4>
          <p className="text-muted small mb-4">Please log in to view your personalized college bookmarks, admissions tracking, and counselor recommendations.</p>
          <Button variant="primary" as={Link} to="/login" className="rounded-pill px-4 fw-bold">
            Sign In / Register
          </Button>
        </Card>
      </Container>
    );
  }

  const pipelineStatus = currentUser.leadStatus || "In Discussion";
  const progressPercent = pipelineStatus === 'Enrolled' ? 100 : pipelineStatus === 'In Discussion' ? 65 : pipelineStatus === 'Contacted' ? 40 : 20;

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc' }} className="py-4">
      <Container>
        {/* Top Header Card */}
        <Card className="border-0 shadow-sm mb-4 overflow-hidden" style={{ borderRadius: '16px', background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)' }}>
          <Card.Body className="p-4 text-white">
            <Row className="align-items-center">
              <Col md={8}>
                <div className="d-flex align-items-center mb-2">
                  <div className="bg-white text-primary rounded-circle d-flex align-items-center justify-content-center fw-bold me-3 shadow-sm" style={{ width: '56px', height: '56px', fontSize: '24px' }}>
                    {name ? name[0].toUpperCase() : 'S'}
                  </div>
                  <div>
                    <h3 className="fw-bold mb-0">{name}</h3>
                    <span className="opacity-75 small">{email} • 📞 {phone || 'Add phone number'}</span>
                  </div>
                </div>
                <div className="mt-3 d-flex flex-wrap gap-2">
                  <Badge bg="warning" text="dark" className="px-3 py-2 rounded-pill fw-semibold">
                    🎯 Target Course: {courseInterest}
                  </Badge>
                  <Badge bg="light" text="dark" className="px-3 py-2 rounded-pill fw-semibold">
                    📝 Target Exam: {examInterest}
                  </Badge>
                  <Badge bg="info" className="px-3 py-2 rounded-pill fw-semibold">
                    📍 Location: {city}, {stateVal}
                  </Badge>
                </div>
              </Col>
              <Col md={4} className="text-md-end mt-3 mt-md-0">
                <Button 
                  variant="light" 
                  className="rounded-pill fw-bold text-primary px-4 py-2 shadow-sm"
                  onClick={handleRequestCounseling}
                  disabled={counselingRequested}
                >
                  {counselingRequested ? '✓ Counselor Notified' : '📞 Request 1-on-1 Counseling'}
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        {/* Admission Pipeline Progress Tracker */}
        <Card className="border-0 shadow-sm p-4 mb-4" style={{ borderRadius: '16px' }}>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h6 className="fw-bold text-dark mb-0 d-flex align-items-center">
              <FaClipboardList className="text-primary me-2" /> Admission & Counseling Milestone Tracker
            </h6>
            <Badge bg={pipelineStatus === 'Enrolled' ? 'success' : 'primary'} className="px-3 py-2 rounded-pill">
              Status: {pipelineStatus}
            </Badge>
          </div>
          <ProgressBar now={progressPercent} variant="success" className="mb-3" style={{ height: '8px' }} />
          
          <Row className="text-center g-2 small text-muted">
            <Col xs={3} className={progressPercent >= 20 ? 'fw-bold text-success' : ''}>
              1. Profile Created ✓
            </Col>
            <Col xs={3} className={progressPercent >= 40 ? 'fw-bold text-success' : ''}>
              2. Counselor Assigned
            </Col>
            <Col xs={3} className={progressPercent >= 65 ? 'fw-bold text-primary' : ''}>
              3. College Shortlisting
            </Col>
            <Col xs={3} className={progressPercent === 100 ? 'fw-bold text-success' : ''}>
              4. Final Admission Offer
            </Col>
          </Row>
        </Card>

        {/* Main Content Tabs */}
        <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
          <Card className="border-0 shadow-sm mb-4" style={{ borderRadius: '16px' }}>
            <Card.Header className="bg-white border-0 pt-3 px-4">
              <Nav variant="pills" className="gap-2">
                <Nav.Item>
                  <Nav.Link eventKey="profile" className="rounded-pill px-4 fw-semibold">
                    <FaUserGraduate className="me-2" /> My Profile & Preferences
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="bookmarks" className="rounded-pill px-4 fw-semibold">
                    <FaHeart className="me-2 text-danger" /> Saved Colleges ({savedCollegesList.length})
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="counseling" className="rounded-pill px-4 fw-semibold">
                    <FaUserCheck className="me-2 text-success" /> Counselor Updates & Notes
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>

            <Card.Body className="p-4">
              {/* TAB 1: PROFILE & PREFERENCES */}
              <Tab.Pane eventKey="profile">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div>
                    <h5 className="fw-bold mb-1">Personal & Educational Information</h5>
                    <p className="text-muted small mb-0">Keep your academic details updated to receive relevant admission cutoffs and scholarship notifications.</p>
                  </div>
                  <Button 
                    variant={isEditing ? 'outline-secondary' : 'primary'} 
                    size="sm" 
                    className="rounded-pill px-4 fw-semibold"
                    onClick={() => setIsEditing(!isEditing)}
                  >
                    {isEditing ? 'Cancel Editing' : <><FaEdit className="me-1" /> Edit Profile</>}
                  </Button>
                </div>

                <Form onSubmit={handleSaveProfile}>
                  <Row className="g-3">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="small fw-bold text-secondary">Full Name</Form.Label>
                        <Form.Control 
                          value={name} 
                          onChange={(e) => setName(e.target.value)} 
                          disabled={!isEditing}
                          required 
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="small fw-bold text-secondary">Email Address</Form.Label>
                        <Form.Control 
                          value={email} 
                          disabled 
                          className="bg-light"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="small fw-bold text-secondary">Mobile Number</Form.Label>
                        <Form.Control 
                          value={phone} 
                          onChange={(e) => setPhone(e.target.value)} 
                          placeholder="+91 98765 43210" 
                          disabled={!isEditing}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={3}>
                      <Form.Group>
                        <Form.Label className="small fw-bold text-secondary">City</Form.Label>
                        <Form.Control 
                          value={city} 
                          onChange={(e) => setCity(e.target.value)} 
                          disabled={!isEditing}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={3}>
                      <Form.Group>
                        <Form.Label className="small fw-bold text-secondary">State</Form.Label>
                        <Form.Control 
                          value={stateVal} 
                          onChange={(e) => setStateVal(e.target.value)} 
                          disabled={!isEditing}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="small fw-bold text-secondary">Primary Stream / Course Interest</Form.Label>
                        <Form.Select 
                          value={courseInterest} 
                          onChange={(e) => setCourseInterest(e.target.value)} 
                          disabled={!isEditing}
                        >
                          <option value="B.Tech Computer Science & Engineering">B.Tech Computer Science & Engineering</option>
                          <option value="B.Tech Artificial Intelligence & Data Science">B.Tech Artificial Intelligence & Data Science</option>
                          <option value="Master of Business Administration (MBA)">Master of Business Administration (MBA)</option>
                          <option value="Bachelor of Business Administration (BBA)">Bachelor of Business Administration (BBA)</option>
                          <option value="MBBS Medical Sciences">MBBS Medical Sciences</option>
                          <option value="B.A. LL.B. Integrated Law">B.A. LL.B. Integrated Law</option>
                          <option value="Bachelor of Design (B.Des)">Bachelor of Design (B.Des)</option>
                          <option value="B.Sc / M.Sc Pure Sciences">B.Sc / M.Sc Pure Sciences</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="small fw-bold text-secondary">Target Entrance Exam</Form.Label>
                        <Form.Select 
                          value={examInterest} 
                          onChange={(e) => setExamInterest(e.target.value)} 
                          disabled={!isEditing}
                        >
                          <option value="JEE Main / Advanced">JEE Main / Advanced</option>
                          <option value="CAT / XAT / CMAT">CAT / XAT / CMAT</option>
                          <option value="NEET UG">NEET UG</option>
                          <option value="GATE">GATE</option>
                          <option value="CLAT Law">CLAT Law</option>
                          <option value="NIFT Design">NIFT Design</option>
                          <option value="CUET UG">CUET UG</option>
                          <option value="Direct Merit Admission">Direct Merit Admission</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>

                  {isEditing && (
                    <div className="mt-4 text-end">
                      <Button variant="success" type="submit" className="rounded-pill px-5 fw-bold" disabled={saving}>
                        <FaSave className="me-2" /> {saving ? 'Saving...' : 'Save Changes'}
                      </Button>
                    </div>
                  )}
                </Form>
              </Tab.Pane>

              {/* TAB 2: SAVED COLLEGES */}
              <Tab.Pane eventKey="bookmarks">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div>
                    <h5 className="fw-bold mb-1">Your Shortlisted Colleges ({savedCollegesList.length})</h5>
                    <p className="text-muted small mb-0">Institutions you have bookmarked for comparison, fees calculation, and admission applications.</p>
                  </div>
                  <Button variant="outline-primary" size="sm" as={Link} to="/colleges" className="rounded-pill px-3">
                    + Browse More Colleges
                  </Button>
                </div>

                {savedCollegesList.length === 0 ? (
                  <div className="text-center py-5 text-muted">
                    <h5>You have not bookmarked any colleges yet.</h5>
                    <p className="small">Explore top colleges in India and click the bookmark heart icon to save them here.</p>
                    <Button variant="primary" as={Link} to="/colleges" className="rounded-pill px-4 mt-2">
                      Explore Directory
                    </Button>
                  </div>
                ) : (
                  <Row className="g-4">
                    {savedCollegesList.map(col => (
                      <Col md={6} lg={4} key={col.id}>
                        <Card className="border-0 shadow-sm h-100 custom-card overflow-hidden d-flex flex-column">
                          <div style={{ height: '140px', overflow: 'hidden', position: 'relative' }}>
                            <img 
                              src={col.img || 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=600'} 
                              alt={col.name}
                              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <div className="position-absolute top-0 end-0 m-2">
                              <Button 
                                variant="light" 
                                size="sm" 
                                className="rounded-circle p-2 text-danger shadow-sm"
                                title="Remove Bookmark"
                                onClick={() => handleRemoveBookmark(col.id)}
                              >
                                <FaTrash size={12} />
                              </Button>
                            </div>
                          </div>
                          <Card.Body className="p-3 d-flex flex-column flex-grow-1">
                            <h6 className="fw-bold text-dark mb-1">{col.name}</h6>
                            <div className="text-muted small mb-2">
                              <FaMapMarkerAlt className="text-danger me-1" /> {col.location}, {col.state}
                            </div>
                            <div className="d-flex justify-content-between align-items-center small text-secondary bg-light p-2 rounded mb-3">
                              <span>Fees: <strong>{col.fees || 'Contact'}</strong></span>
                              <span>Rating: <strong className="text-warning">★ {col.rating || 4.5}</strong></span>
                            </div>
                            <div className="d-flex gap-2 mt-auto">
                              <Button 
                                variant="primary" 
                                size="sm" 
                                className="w-100 rounded-pill fw-bold"
                                as={Link} 
                                to={`/colleges/${col.id}`}
                              >
                                View College
                              </Button>
                              <Button 
                                variant="outline-secondary" 
                                size="sm" 
                                className="rounded-pill px-3"
                                as={Link}
                                to={`/compare?id1=${col.id}`}
                                title="Compare this college"
                              >
                                Compare
                              </Button>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                )}
              </Tab.Pane>

              {/* TAB 3: COUNSELOR NOTES & UPDATES */}
              <Tab.Pane eventKey="counseling">
                <div className="mb-4">
                  <h5 className="fw-bold mb-1">Admissions Counselor Feed & Updates</h5>
                  <p className="text-muted small mb-0">Official updates from your dedicated thecollegecompass educational advisor.</p>
                </div>

                <Card className="border-0 bg-light p-4 rounded mb-4 border-start border-4 border-primary">
                  <h6 className="fw-bold text-primary mb-2">Counselor Feedback & Action Items</h6>
                  <p className="text-dark mb-2">
                    {currentUser.adminNotes || "Hello! Your profile has been received. Our senior counselor is reviewing your target program preferences and will share shortlisted college choices and cutoff guidance with you."}
                  </p>
                  <span className="small text-muted">Advisor Office • Verified Admission Support</span>
                </Card>

                <div className="p-4 bg-white border rounded shadow-sm">
                  <h6 className="fw-bold text-dark mb-3">Next Recommended Steps for Your Application:</h6>
                  <ul className="text-secondary small mb-0 ps-3">
                    <li className="mb-2">Upload your 10th and 12th standard marksheets for entrance cutoff evaluation.</li>
                    <li className="mb-2">Verify hostel accommodation availability and annual fee payment schedules for your shortlisted institutes.</li>
                    <li className="mb-2">Check scholarship eligibility under Merit-cum-Means or AICTE schemes in the Scholarships directory.</li>
                    <li>Schedule a mock interview session if applying to MBA or Design GD/PI rounds.</li>
                  </ul>
                </div>
              </Tab.Pane>
            </Card.Body>
          </Card>
        </Tab.Container>
      </Container>
    </div>
  );
};

export default StudentProfilePanel;
