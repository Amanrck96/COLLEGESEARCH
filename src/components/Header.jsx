import React, { useState, useContext, useEffect } from 'react';
import { Navbar, Nav, Container, Form, Button, InputGroup, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';
import { SiteContext } from '../contexts/SiteContext';
import { CollegeContext } from '../contexts/CollegeContext';
import { navData } from '../data/navData';

const Header = () => {
  const { siteData } = useContext(SiteContext);
  const { colleges } = useContext(CollegeContext);
  const { mbaTabs, engTabs, medTabs, desTabs, moreTabs, studyTabs, counselingTabs, onlineTabs } = siteData.header;

  const [activeMbaTab, setActiveMbaTab] = useState(mbaTabs[0] || '');
  const [activeEngTab, setActiveEngTab] = useState(engTabs[0] || '');
  const [activeMedTab, setActiveMedTab] = useState(medTabs[0] || '');
  const [activeDesTab, setActiveDesTab] = useState(desTabs[0] || '');
  const [activeMoreTab, setActiveMoreTab] = useState(moreTabs[0] || '');
  const [activeStudyTab, setActiveStudyTab] = useState(studyTabs[0] || '');
  const [activeCounselingTab, setActiveCounselingTab] = useState(counselingTabs[0] || '');
  const [activeOnlineTab, setActiveOnlineTab] = useState(onlineTabs[0] || '');

  useEffect(() => {
    setActiveMbaTab(mbaTabs[0] || '');
    setActiveEngTab(engTabs[0] || '');
    setActiveMedTab(medTabs[0] || '');
    setActiveDesTab(desTabs[0] || '');
    setActiveMoreTab(moreTabs[0] || '');
    setActiveStudyTab(studyTabs[0] || '');
    setActiveCounselingTab(counselingTabs[0] || '');
    setActiveOnlineTab(onlineTabs[0] || '');
  }, [mbaTabs, engTabs, medTabs, desTabs, moreTabs, studyTabs, counselingTabs, onlineTabs]);

  // Dynamic calculations based on DB - Memoized for Performance
  const uniqueCities = React.useMemo(() => Array.from(new Set((colleges || []).map(c => c.location))).slice(0, 10), [colleges]);
  const topColleges = React.useMemo(() => [...(colleges || [])].sort((a,b) => b.ranking - a.ranking || b.rating - a.rating), [colleges]);
  const uniqueExams = React.useMemo(() => Array.from(new Set((colleges || []).flatMap(c => (c.exams || '').split(',').map(s=>s.trim())))).filter(Boolean).slice(0, 15), [colleges]);
  const uniqueCountries = React.useMemo(() => Array.from(new Set((colleges || []).map(c => c.country || 'India'))).filter(c => c !== 'India').slice(0, 15), [colleges]);

  return (
    <div className="custom-header-wrapper">
      {/* Top Search Tier */}
      <div className="search-tier d-none d-lg-block">
        <Container fluid className="px-5 d-flex align-items-center">
          <Link to="/" className="text-white text-decoration-none fw-bold fs-4 me-5" style={{letterSpacing: '1px'}}>
            <span style={{color: 'var(--white)'}}>COLLEGE</span>
            <span style={{color: '#f26822'}}>SEARCH</span>
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
          <Navbar.Brand as={Link} to="/" className="d-lg-none fw-bold text-white">COLLEGE<span style={{color: '#f26822'}}>SEARCH</span></Navbar.Brand>
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

              {/* COLLEGESEARCH ONLINE MEGA MENU */}
              <div className="nav-item">
                <Nav.Link as={Link} to="/news" className="fw-semibold">COLLEGESEARCH ONLINE <span style={{fontSize: '10px'}}>▼</span></Nav.Link>
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
              <Nav.Link as={Link} to="#login" className="text-white fw-bold me-3 text-capitalize" style={{fontSize:'14px'}}>Login</Nav.Link>
              <Nav.Link as={Link} to="#signup" className="text-white fw-bold text-capitalize" style={{fontSize:'14px'}}>Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
