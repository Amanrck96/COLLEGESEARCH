import React, { useState, useContext, useEffect } from 'react';
import { Navbar, Nav, Container, Form, Button, InputGroup, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';
import { SiteContext } from '../contexts/SiteContext';
import { CollegeContext } from '../contexts/CollegeContext';

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
                    {activeMbaTab === 'Top Ranked Colleges' && (
                       <Row>
                         <Col md={5}>
                            <Link to="/colleges?q=India" className="mega-link">Top MBA Colleges in India</Link>
                            {uniqueCities.map(city => (
                              <Link key={city} to={`/colleges?q=${city}`} className="mega-link">Top MBA Colleges in {city}</Link>
                            ))}
                         </Col>
                         <Col md={7}>
                           <div className="mega-title">Featured Colleges</div>
                           {topColleges.slice(0, 5).map(college => (
                             <Link key={college.id} to={`/colleges/${college.id}`} className="mega-link">{college.name}</Link>
                           ))}
                         </Col>
                       </Row>
                    )}
                    {activeMbaTab !== 'Top Ranked Colleges' && <div className="text-muted">Explore {activeMbaTab} Information</div>}
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
                    {activeEngTab === 'Top Ranked Colleges' && (
                       <Row>
                         <Col md={5}>
                            <Link to="/colleges?q=India" className="mega-link">Top Engineering Colleges in India</Link>
                            <Link to="/colleges?q=IIT" className="mega-link">Top IITs in India</Link>
                            <Link to="/colleges?q=NIT" className="mega-link">Top NITs in India</Link>
                            {uniqueCities.map(city => (
                              <Link key={city} to={`/colleges?q=${city}`} className="mega-link">Top Engineering Colleges in {city}</Link>
                            ))}
                         </Col>
                         <Col md={7}>
                           <div className="mega-title">Featured Colleges</div>
                           {topColleges.slice(5, 10).map(college => (
                             <Link key={college.id} to={`/colleges/${college.id}`} className="mega-link">{college.name}</Link>
                           ))}
                         </Col>
                       </Row>
                    )}
                    {activeEngTab !== 'Top Ranked Colleges' && <div className="text-muted">Explore {activeEngTab} Information</div>}
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
                    {activeMedTab === 'Top Ranked Colleges' && (
                       <Row>
                         <Col md={6}>
                            <Link to="/colleges?q=Medical" className="mega-link">Top Medical Colleges in India</Link>
                            <Link to="/colleges?q=Pharmacy" className="mega-link">Top Pharmacy Colleges in India</Link>
                            <Link to="/colleges?q=Dental" className="mega-link">Top Dental Colleges in India</Link>
                            {uniqueCities.map(city => (
                              <Link key={city} to={`/colleges?q=${city}`} className="mega-link">Top Medical Colleges in {city}</Link>
                            ))}
                         </Col>
                       </Row>
                    )}
                    {activeMedTab !== 'Top Ranked Colleges' && <div className="text-muted">Explore {activeMedTab} Information</div>}
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
                    {activeDesTab === 'Top Ranked Colleges' && (
                       <Row>
                         <Col md={6}>
                            <Link to="/colleges?q=Fashion" className="mega-link">Top Fashion Designing Colleges in India</Link>
                            <Link to="/colleges?q=Bangalore" className="mega-link">Top Fashion Designing Colleges in Bangalore</Link>
                            <Link to="/colleges?q=Delhi" className="mega-link">Top Fashion Designing Colleges in Delhi/NCR</Link>
                         </Col>
                       </Row>
                    )}
                    {activeDesTab !== 'Top Ranked Colleges' && <div className="text-muted">Explore {activeDesTab} Information</div>}
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
                    {activeMoreTab === 'Sarkari Exams' && (
                       <Row className="gx-5">
                         <Col md={12}>
                           <div className="mega-title">Database Exams</div>
                           <div className="d-flex flex-wrap gap-2">
                             {uniqueExams.map(ex => (
                               <Link key={ex} to="/exams" className="mega-link text-decoration-none me-4">{ex}</Link>
                             ))}
                             {uniqueExams.length === 0 && <span className="text-muted">No exams mapped in database.</span>}
                           </div>
                           <Link to="/exams" className="mega-link text-primary mt-3 d-inline-block">All Exams <FaAngleRight/></Link>
                         </Col>
                       </Row>
                    )}
                    {activeMoreTab !== 'Sarkari Exams' && <div className="text-muted">Explore {activeMoreTab} Information</div>}
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
                    {activeStudyTab === 'Countries' && (
                       <Row>
                         <Col md={5}>
                           <div className="mega-title">Top Countries</div>
                           {uniqueCountries.map(country => (
                              <Link key={country} to="/study-abroad" className="mega-link">{country}</Link>
                           ))}
                           {uniqueCountries.length === 0 && <span className="text-muted">No abroad colleges found.</span>}
                           <Link to="/study-abroad" className="mega-link text-primary mt-3">View All Countries <FaAngleRight/></Link>
                         </Col>
                         <Col md={7}>
                           <div className="mega-title">Universities/Colleges in Abroad</div>
                           {uniqueCountries.map(country => (
                             <Link key={country} to="/study-abroad" className="mega-link">Top Universities in {country}</Link>
                           ))}
                           <Link to="/study-abroad" className="mega-link text-primary mt-3">Top Universities Abroad <FaAngleRight/></Link>
                         </Col>
                       </Row>
                    )}
                    {activeStudyTab !== 'Countries' && <div className="text-muted">Explore {activeStudyTab} Information</div>}
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
                    {activeCounselingTab === 'Get Expert Guidance' && (
                       <Row>
                         <Col md={6}>
                           <Link to="/career" className="mega-link">Ask a Question</Link>
                           <Link to="/career" className="mega-link">Discussions</Link>
                         </Col>
                       </Row>
                    )}
                    {activeCounselingTab !== 'Get Expert Guidance' && <div className="text-muted">Explore {activeCounselingTab} Information</div>}
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
                    {activeOnlineTab === 'Technology' && (
                       <Row className="gx-5">
                         <Col md={4}>
                           <div className="mega-title">Courses In Technology</div>
                           <Link to="/courses" className="mega-link">Big Data</Link>
                           <Link to="/courses" className="mega-link">Cloud Technologies</Link>
                           <Link to="/courses" className="mega-link">Cybersecurity</Link>
                           <Link to="/courses" className="mega-link">Databases</Link>
                           <Link to="/courses" className="mega-link">IT Services</Link>
                           <Link to="/courses" className="mega-link">Masters and Certificate Programs</Link>
                           <Link to="/courses" className="mega-link">Networking and Hardware</Link>
                           <Link to="/courses" className="mega-link">Operating System</Link>
                           <Link to="/courses" className="mega-link">Programming</Link>
                           <Link to="/courses" className="mega-link">QA and Testing</Link>
                           <Link to="/courses" className="mega-link">Web Development</Link>
                           <Link to="/courses" className="mega-link">Software Tools</Link>
                         </Col>
                         <Col md={4}>
                           <div className="mega-title">Career Guides</div>
                           <Link to="/career" className="mega-link">Learn Why Cybersecurity is essential</Link>
                           <Link to="/career" className="mega-link">Learn about the 4Vs of Big Data</Link>
                           <Link to="/career" className="mega-link">An Ethical Hacker's Guide for getting from beginner to professional</Link>
                         </Col>
                         <Col md={4}>
                           <div className="mega-title">What's New</div>
                           <Link to="/news" className="mega-link">GPT 3.5 vs GPT 4: How Do They Differ?</Link>
                           <Link to="/news" className="mega-link">Exploring Python Pickle: The Ultimate Resource for Object Serialization and Storage</Link>
                           <Link to="/news" className="mega-link">What is Web Service?</Link>
                           <Link to="/news" className="mega-link">max() Function in Python</Link>
                         </Col>
                       </Row>
                    )}
                    {activeOnlineTab !== 'Technology' && <div className="text-muted">Explore {activeOnlineTab} Information</div>}
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
