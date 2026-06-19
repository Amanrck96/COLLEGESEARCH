import React, { useState, useContext, useEffect } from 'react';
import { Navbar, Nav, Container, Form, Button, InputGroup, Row, Col, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';
import { SiteContext } from '../contexts/SiteContext';
import { AuthContext } from '../contexts/AuthContext';
import { navData } from '../data/navData';

const Header = () => {
  const { siteData } = useContext(SiteContext);
  const { mbaTabs, engTabs, medTabs, desTabs, moreTabs, studyTabs, counselingTabs, onlineTabs } = siteData.header;

  const { currentUser, handleLogin, handleLogout } = useContext(AuthContext);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('student');
  const [authError, setAuthError] = useState('');

  const onLoginSubmit = (e) => {
    e.preventDefault();
    const res = handleLogin(email, password, selectedRole);
    if (res.success) {
      setShowAuthModal(false);
      setEmail('');
      setPassword('');
      setAuthError('');
    } else {
      setAuthError(res.message);
    }
  };

  const autofillDemoUser = (role) => {
    setSelectedRole(role);
    if (role === 'student') {
      setEmail('aarav.sharma@gmail.com');
      setPassword('password123');
    } else if (role === 'superadmin') {
      setEmail('admin@thecollegecompass.com');
      setPassword('admin');
    } else if (role === 'admin') {
      setEmail('manager@thecollegecompass.com');
      setPassword('admin');
    } else if (role === 'operator') {
      setEmail('operator@thecollegecompass.com');
      setPassword('admin');
    } else if (role === 'viewer') {
      setEmail('viewer@thecollegecompass.com');
      setPassword('admin');
    }
  };

  const [activeMbaTab, setActiveMbaTab] = useState(mbaTabs[0] || '');
  const [activeEngTab, setActiveEngTab] = useState(engTabs[0] || '');
  const [activeMedTab, setActiveMedTab] = useState(medTabs[0] || '');
  const [activeDesTab, setActiveDesTab] = useState(desTabs[0] || '');
  const [activeMoreTab, setActiveMoreTab] = useState(moreTabs[0] || '');
  const [activeStudyTab, setActiveStudyTab] = useState(studyTabs[0] || '');
  const [activeCounselingTab, setActiveCounselingTab] = useState(counselingTabs[0] || '');
  const [activeOnlineTab, setActiveOnlineTab] = useState(onlineTabs[0] || '');

  // Fix #18: Use useEffect instead of calling setState directly in the render body
  useEffect(() => { if (mbaTabs.length) setActiveMbaTab(mbaTabs[0]); }, [mbaTabs]);
  useEffect(() => { if (engTabs.length) setActiveEngTab(engTabs[0]); }, [engTabs]);
  useEffect(() => { if (medTabs.length) setActiveMedTab(medTabs[0]); }, [medTabs]);
  useEffect(() => { if (desTabs.length) setActiveDesTab(desTabs[0]); }, [desTabs]);
  useEffect(() => { if (moreTabs.length) setActiveMoreTab(moreTabs[0]); }, [moreTabs]);
  useEffect(() => { if (studyTabs.length) setActiveStudyTab(studyTabs[0]); }, [studyTabs]);
  useEffect(() => { if (counselingTabs.length) setActiveCounselingTab(counselingTabs[0]); }, [counselingTabs]);
  useEffect(() => { if (onlineTabs.length) setActiveOnlineTab(onlineTabs[0]); }, [onlineTabs]);

  return (
    <div className="custom-header-wrapper">
      {/* Top Search Tier */}
      <div className="search-tier d-none d-lg-block">
        <Container fluid className="px-5 d-flex align-items-center">
          <Link to="/" className="text-white text-decoration-none fw-bold fs-4 me-5" style={{letterSpacing: '1px'}}>
            <span style={{color: 'var(--white)'}}>thecollege</span>
            <span style={{color: '#f26822'}}>compass</span>
          </Link>

          <div className="flex-grow-1 ms-5 me-5">
            <Form className="d-flex mx-auto" style={{ maxWidth: '800px' }} action="/colleges" method="get">
              <InputGroup>
                <Form.Control
                  name="q"
                  type="search"
                  placeholder="Search Colleges, Courses, Exams, QnA, & Articles"
                  className="border-0 rounded-0"
                  style={{ boxShadow: 'none', padding: '12px 20px' }}
                />
                <Button type="submit" className="btn-search-orange rounded-0" style={{padding: '0 40px'}}>
                  Search
                </Button>
              </InputGroup>
            </Form>
          </div>
        </Container>
      </div>

      {/* Bottom Nav Tier with Mega Menus */}
      <Navbar expand="lg" variant="dark" className="custom-navbar position-relative">
        <Container fluid className="px-5 position-relative">
          <Navbar.Brand as={Link} to="/" className="d-lg-none fw-bold text-white">thecollege<span style={{color: '#f26822'}}>compass</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" className="border-0 shadow-none"/>
          <Navbar.Collapse id="main-navbar">
            <Nav className="me-auto align-items-lg-center">
              
              {/* MBA MEGA MENU */}
              <div className="nav-item">
                <Nav.Link as={Link} to="/colleges" className="fw-semibold">MBA <span style={{fontSize: '10px'}}>▼</span></Nav.Link>
                <div className="mega-menu-wrapper text-start">
                  <div className="mega-sidebar">
                    {mbaTabs.map(tab => (
                      <div 
                        key={tab}
                        className={`mega-sidebar-item ${activeMbaTab === tab ? 'active' : ''}`}
                        onMouseEnter={() => setActiveMbaTab(tab)}
                      >
                        {tab} <FaAngleRight className={activeMbaTab === tab ? 'text-primary' : 'text-muted opacity-50'}/>
                      </div>
                    ))}
                  </div>
                  <div className="mega-content">
                    {navData.mba[activeMbaTab] ? (
                       <Row className="gx-5">
                         {navData.mba[activeMbaTab].map((col, idx) => (
                           <Col key={idx} md={col.colClass ? parseInt(col.colClass.split('-')[2]) : 6}>
                             {col.title && <div className="mega-title mt-2">{col.title}</div>}
                             {col.links.map((link, lidx) => (
                               <Link key={lidx} to={link.url} className={`mega-link ${link.isMore ? 'text-primary mt-3' : ''}`}>
                                 {link.title} {link.isMore && <FaAngleRight/>}
                               </Link>
                             ))}
                           </Col>
                         ))}
                       </Row>
                    ) : (
                      <div className="text-muted">Explore {activeMbaTab} Information</div>
                    )}
                  </div>
                </div>
              </div>

              {/* ENGINEERING MEGA MENU */}
              <div className="nav-item">
                <Nav.Link as={Link} to="/colleges" className="fw-semibold">ENGINEERING <span style={{fontSize: '10px'}}>▼</span></Nav.Link>
                <div className="mega-menu-wrapper text-start">
                  <div className="mega-sidebar">
                    {engTabs.map(tab => (
                      <div 
                        key={tab}
                        className={`mega-sidebar-item ${activeEngTab === tab ? 'active' : ''}`}
                        onMouseEnter={() => setActiveEngTab(tab)}
                      >
                        {tab} <FaAngleRight className={activeEngTab === tab ? 'text-primary' : 'text-muted opacity-50'}/>
                      </div>
                    ))}
                  </div>
                  <div className="mega-content">
                    {navData.engineering && navData.engineering[activeEngTab] ? (
                       <Row className="gx-5">
                         {navData.engineering[activeEngTab].map((col, idx) => (
                           <Col key={idx} md={col.colClass ? parseInt(col.colClass.split('-')[2]) : 6}>
                             {col.title && <div className="mega-title mt-2">{col.title}</div>}
                             {col.links.map((link, lidx) => (
                               <Link key={lidx} to={link.url} className={`mega-link ${link.isMore ? 'text-primary mt-3' : ''}`}>
                                 {link.title} {link.isMore && <FaAngleRight/>}
                               </Link>
                             ))}
                           </Col>
                         ))}
                       </Row>
                    ) : (
                      <div className="text-muted">Explore {activeEngTab} Information</div>
                    )}
                  </div>
                </div>
              </div>

              {/* MEDICAL MEGA MENU */}
              <div className="nav-item">
                <Nav.Link as={Link} to="/colleges" className="fw-semibold">MEDICAL <span style={{fontSize: '10px'}}>▼</span></Nav.Link>
                <div className="mega-menu-wrapper text-start">
                  <div className="mega-sidebar">
                    {medTabs.map(tab => (
                      <div 
                        key={tab}
                        className={`mega-sidebar-item ${activeMedTab === tab ? 'active' : ''}`}
                        onMouseEnter={() => setActiveMedTab(tab)}
                      >
                        {tab} <FaAngleRight className={activeMedTab === tab ? 'text-primary' : 'text-muted opacity-50'}/>
                      </div>
                    ))}
                  </div>
                  <div className="mega-content">
                    {navData.medical && navData.medical[activeMedTab] ? (
                       <Row className="gx-5">
                         {navData.medical[activeMedTab].map((col, idx) => (
                           <Col key={idx} md={col.colClass ? parseInt(col.colClass.split('-')[2]) : 6}>
                             {col.title && <div className="mega-title mt-2">{col.title}</div>}
                             {col.links.map((link, lidx) => (
                               <Link key={lidx} to={link.url} className={`mega-link ${link.isMore ? 'text-primary mt-3' : ''}`}>
                                 {link.title} {link.isMore && <FaAngleRight/>}
                               </Link>
                             ))}
                           </Col>
                         ))}
                       </Row>
                    ) : (
                      <div className="text-muted">Explore {activeMedTab} Information</div>
                    )}
                  </div>
                </div>
              </div>

              {/* DESIGN MEGA MENU */}
              <div className="nav-item">
                <Nav.Link as={Link} to="/colleges" className="fw-semibold">DESIGN <span style={{fontSize: '10px'}}>▼</span></Nav.Link>
                <div className="mega-menu-wrapper text-start">
                  <div className="mega-sidebar">
                    {desTabs.map(tab => (
                      <div 
                        key={tab}
                        className={`mega-sidebar-item ${activeDesTab === tab ? 'active' : ''}`}
                        onMouseEnter={() => setActiveDesTab(tab)}
                      >
                        {tab} <FaAngleRight className={activeDesTab === tab ? 'text-primary' : 'text-muted opacity-50'}/>
                      </div>
                    ))}
                  </div>
                  <div className="mega-content">
                    {navData.design && navData.design[activeDesTab] ? (
                       <Row className="gx-5">
                         {navData.design[activeDesTab].map((col, idx) => (
                           <Col key={idx} md={col.colClass ? parseInt(col.colClass.split('-')[2]) : 6}>
                             {col.title && <div className="mega-title mt-2">{col.title}</div>}
                             {col.links.map((link, lidx) => (
                               <Link key={lidx} to={link.url} className={`mega-link ${link.isMore ? 'text-primary mt-3' : ''}`}>
                                 {link.title} {link.isMore && <FaAngleRight/>}
                               </Link>
                             ))}
                           </Col>
                         ))}
                       </Row>
                    ) : (
                      <div className="text-muted">Explore {activeDesTab} Information</div>
                    )}
                  </div>
                </div>
              </div>

              {/* MORE MEGA MENU (Sarkari) */}
              <div className="nav-item">
                <Nav.Link as={Link} to="/rankings" className="fw-semibold">MORE <span style={{fontSize: '10px'}}>▼</span></Nav.Link>
                <div className="mega-menu-wrapper text-start">
                  <div className="mega-sidebar">
                    {moreTabs.map(tab => (
                      <div 
                        key={tab}
                        className={`mega-sidebar-item ${activeMoreTab === tab ? 'active' : ''}`}
                        onMouseEnter={() => setActiveMoreTab(tab)}
                      >
                        {tab} <FaAngleRight className={activeMoreTab === tab ? 'text-primary' : 'text-muted opacity-50'}/>
                      </div>
                    ))}
                  </div>
                  <div className="mega-content">
                    {navData.more && navData.more[activeMoreTab] ? (
                       <Row className="gx-5">
                         {navData.more[activeMoreTab].map((col, idx) => (
                           <Col key={idx} md={col.colClass ? parseInt(col.colClass.split('-')[2]) : 6}>
                             {col.title && <div className="mega-title mt-2">{col.title}</div>}
                             {col.links.map((link, lidx) => (
                               <Link key={lidx} to={link.url} className={`mega-link ${link.isMore ? 'text-primary mt-3' : ''}`}>
                                 {link.title} {link.isMore && <FaAngleRight/>}
                               </Link>
                             ))}
                           </Col>
                         ))}
                       </Row>
                    ) : (
                      <div className="text-muted">Explore {activeMoreTab} Information</div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* STUDY ABROAD MEGA MENU */}
              <div className="nav-item">
                <Nav.Link as={Link} to="/study-abroad" className="fw-semibold">STUDY ABROAD <span style={{fontSize: '10px'}}>▼</span></Nav.Link>
                <div className="mega-menu-wrapper text-start">
                  <div className="mega-sidebar">
                    {studyTabs.map(tab => (
                      <div 
                        key={tab}
                        className={`mega-sidebar-item ${activeStudyTab === tab ? 'active' : ''}`}
                        onMouseEnter={() => setActiveStudyTab(tab)}
                      >
                        {tab} <FaAngleRight className={activeStudyTab === tab ? 'text-primary' : 'text-muted opacity-50'}/>
                      </div>
                    ))}
                  </div>
                  <div className="mega-content">
                    {navData.studyAbroad && navData.studyAbroad[activeStudyTab] ? (
                       <Row className="gx-5">
                         {navData.studyAbroad[activeStudyTab].map((col, idx) => (
                           <Col key={idx} md={col.colClass ? parseInt(col.colClass.split('-')[2]) : 6}>
                             {col.title && <div className="mega-title mt-2">{col.title}</div>}
                             {col.links.map((link, lidx) => (
                               <Link key={lidx} to={link.url} className={`mega-link ${link.isMore ? 'text-primary mt-3' : ''}`}>
                                 {link.title} {link.isMore && <FaAngleRight/>}
                               </Link>
                             ))}
                           </Col>
                         ))}
                       </Row>
                    ) : (
                      <div className="text-muted">Explore {activeStudyTab} Information</div>
                    )}
                  </div>
                </div>
              </div>

              {/* COUNSELING MEGA MENU */}
              <div className="nav-item">
                <Nav.Link as={Link} to="/career" className="fw-semibold">COUNSELING <span style={{fontSize: '10px'}}>▼</span></Nav.Link>
                <div className="mega-menu-wrapper text-start">
                  <div className="mega-sidebar">
                    {counselingTabs.map(tab => (
                      <div 
                        key={tab}
                        className={`mega-sidebar-item ${activeCounselingTab === tab ? 'active' : ''}`}
                        onMouseEnter={() => setActiveCounselingTab(tab)}
                      >
                        <div>
                          {tab} 
                          {tab === 'My Recommendations' && <span className="badge bg-primary ms-2 rounded-0" style={{fontSize: '9px', padding: '3px 5px'}}>NEW</span>}
                        </div>
                        <FaAngleRight className={activeCounselingTab === tab ? 'text-primary' : 'text-muted opacity-50'}/>
                      </div>
                    ))}
                  </div>
                  <div className="mega-content">
                    {navData.counseling && navData.counseling[activeCounselingTab] ? (
                       <Row className="gx-5">
                         {navData.counseling[activeCounselingTab].map((col, idx) => (
                           <Col key={idx} md={col.colClass ? parseInt(col.colClass.split('-')[2]) : 6}>
                             {col.title && <div className="mega-title mt-2">{col.title}</div>}
                             {col.links.map((link, lidx) => (
                               <Link key={lidx} to={link.url} className={`mega-link ${link.isMore ? 'text-primary mt-3' : ''}`}>
                                 {link.title} {link.isMore && <FaAngleRight/>}
                               </Link>
                             ))}
                           </Col>
                         ))}
                       </Row>
                    ) : (
                      <div className="text-muted">Explore {activeCounselingTab} Information</div>
                    )}
                  </div>
                </div>
              </div>

              {/* thecollegecompass MEGA MENU */}
              <div className="nav-item">
                <Nav.Link as={Link} to="/news" className="fw-semibold">thecollegecompass <span style={{fontSize: '10px'}}>▼</span></Nav.Link>
                <div className="mega-menu-wrapper text-start">
                  <div className="mega-sidebar">
                    {onlineTabs.map(tab => (
                      <div 
                        key={tab}
                        className={`mega-sidebar-item ${activeOnlineTab === tab ? 'active' : ''}`}
                        onMouseEnter={() => setActiveOnlineTab(tab)}
                      >
                        {tab} <FaAngleRight className={activeOnlineTab === tab ? 'text-primary' : 'text-muted opacity-50'}/>
                      </div>
                    ))}
                  </div>
                  <div className="mega-content">
                    {navData.online && navData.online[activeOnlineTab] ? (
                       <Row className="gx-5">
                         {navData.online[activeOnlineTab].map((col, idx) => (
                           <Col key={idx} md={col.colClass ? parseInt(col.colClass.split('-')[2]) : 6}>
                             {col.title && <div className="mega-title mt-2">{col.title}</div>}
                             {col.links.map((link, lidx) => (
                               <Link key={lidx} to={link.url} className={`mega-link ${link.isMore ? 'text-primary mt-3' : ''}`}>
                                 {link.title} {link.isMore && <FaAngleRight/>}
                               </Link>
                             ))}
                           </Col>
                         ))}
                       </Row>
                    ) : (
                      <div className="text-muted">Explore {activeOnlineTab} Information</div>
                    )}
                  </div>
                </div>
              </div>
            </Nav>
            
            <Nav className="ms-auto align-items-lg-center">
              {currentUser ? (
                <>
                  <span className="text-white-50 me-3 small">
                    Logged in: <strong className="text-white">{currentUser.name}</strong> (<span className="text-warning fw-bold">{currentUser.role.toUpperCase()}</span>)
                  </span>
                  
                  {currentUser.role === 'student' ? (
                    <Nav.Link as={Link} to="/admin/student-profile" className="btn btn-sm btn-info text-dark fw-bold me-3 px-3 py-1 rounded-pill" style={{fontSize:'13px'}}>My Profile Panel</Nav.Link>
                  ) : (
                    <Nav.Link as={Link} to="/admin" className="btn btn-sm btn-warning text-dark fw-bold me-3 px-3 py-1 rounded-pill" style={{fontSize:'13px'}}>Admin Console</Nav.Link>
                  )}
                  
                  <Button variant="danger" size="sm" className="rounded-pill px-3 py-1 fw-bold" style={{fontSize:'13px', border: 'none'}} onClick={handleLogout}>Logout</Button>
                </>
              ) : (
                <>
                  <Button variant="link" className="text-white fw-bold me-3 text-capitalize text-decoration-none" style={{fontSize:'14px'}} onClick={() => { setAuthError(''); setShowAuthModal(true); }}>Login / Portal Access</Button>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Auth & Portal Access Modal */}
      <Modal show={showAuthModal} onHide={() => setShowAuthModal(false)} centered contentClassName="border-0 shadow text-dark" style={{ color: '#333' }}>
        <Modal.Header closeButton className="bg-light">
          <Modal.Title className="fw-bold text-primary">thecollegecompass Portal Login</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4">
          {authError && <div className="alert alert-danger py-2 small">{authError}</div>}
          <Form onSubmit={onLoginSubmit}>
            <Form.Group className="mb-3">
              <Form.Label className="small fw-semibold">Email address</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="name@example.com" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </Form.Group>
            
            <Form.Group className="mb-4">
              <Form.Label className="small fw-semibold">Password</Form.Label>
              <Form.Control 
                type="password"
                placeholder="Enter password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required
                minLength={4}
                autoComplete="current-password"
              />
              <Form.Text className="text-muted small">
                New student? Enter email + password to create your account. Returning students use the same password.
              </Form.Text>
            </Form.Group>

            <div className="mb-3 p-3 bg-light rounded border">
              <span className="small text-muted d-block mb-1">💡 Quick Demo Autofill:</span>
              <div className="d-flex flex-wrap gap-2">
                <Button type="button" size="sm" variant="outline-info" onClick={() => autofillDemoUser('student')}>Student (Aarav)</Button>
              </div>
            </div>

            <Button type="submit" variant="primary" className="w-100 fw-bold py-2 mt-2" style={{ backgroundColor: '#1a43bf', border: 'none' }}>
              Sign In
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Header;
