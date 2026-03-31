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
                            <Link to="/colleges?q=Top MBA Colleges in India" className="mega-link">Top MBA Colleges in India</Link>
                            <Link to="/colleges?q=Top Private MBA Colleges in India" className="mega-link">Top Private MBA Colleges in India</Link>
                            <Link to="/colleges?q=Top MBA Colleges in Bangalore" className="mega-link">Top MBA Colleges in Bangalore</Link>
                            <Link to="/colleges?q=Top MBA Colleges in Mumbai" className="mega-link">Top MBA Colleges in Mumbai</Link>
                            <Link to="/colleges?q=Top MBA Colleges in Pune" className="mega-link">Top MBA Colleges in Pune</Link>
                            <Link to="/colleges?q=Top MBA Colleges in Hyderabad" className="mega-link">Top MBA Colleges in Hyderabad</Link>
                            <Link to="/colleges?q=Top MBA Colleges in Delhi" className="mega-link">Top MBA Colleges in Delhi</Link>
                            <Link to="/colleges?q=Top MBA Colleges in Chennai" className="mega-link">Top MBA Colleges in Chennai</Link>
                            <Link to="/colleges?q=Top MBA Colleges in Maharashtra" className="mega-link">Top MBA Colleges in Maharashtra</Link>
                            <Link to="/colleges?q=Top MBA Colleges in Kolkata" className="mega-link">Top MBA Colleges in Kolkata</Link>
                            <Link to="/colleges?q=Top MBA Colleges in Kerala" className="mega-link">Top MBA Colleges in Kerala</Link>
                         </Col>
                         <Col md={7}>
                           <div className="mega-title">Featured Colleges</div>
                           <Link to="/colleges?q=GOVERNMENT POLYTECHNIC DIGLIPUR" className="mega-link">GOVERNMENT POLYTECHNIC DIGLIPUR</Link>
                           <Link to="/colleges?q=DR. B.R. AMBEDKAR INSTITUTE OF TECHNOLOGY" className="mega-link">DR. B.R. AMBEDKAR INSTITUTE OF TECHNOLOGY</Link>
                           <Link to="/colleges?q=JAWAHARLAL NEHRU RAJKEEYA MAHAVIDYALAYA" className="mega-link">JAWAHARLAL NEHRU RAJKEEYA MAHAVIDYALAYA</Link>
                           <Link to="/colleges?q=ANDAMAN NICOBAR COLLGE ANCOL" className="mega-link">ANDAMAN NICOBAR COLLGE ANCOL</Link>
                           <Link to="/colleges?q=NARAYANA INSTITUTE OF MANAGEMENT" className="mega-link">NARAYANA INSTITUTE OF MANAGEMENT</Link>
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
                            <Link to="/colleges?q=Top Engineering Colleges in India" className="mega-link">Top Engineering Colleges in India</Link>
                            <Link to="/colleges?q=Top Private Engineering Colleges in India" className="mega-link">Top Private Engineering Colleges in India</Link>
                            <Link to="/colleges?q=Top IITs in India" className="mega-link">Top IITs in India</Link>
                            <Link to="/colleges?q=Top NITs in India" className="mega-link">Top NITs in India</Link>
                            <Link to="/colleges?q=Top Engineering Colleges in Bangalore" className="mega-link">Top Engineering Colleges in Bangalore</Link>
                            <Link to="/colleges?q=Top Engineering Colleges in Karnataka" className="mega-link">Top Engineering Colleges in Karnataka</Link>
                            <Link to="/colleges?q=Top Engineering Colleges in Hyderabad" className="mega-link">Top Engineering Colleges in Hyderabad</Link>
                            <Link to="/colleges?q=Top Engineering Colleges in Pune" className="mega-link">Top Engineering Colleges in Pune</Link>
                            <Link to="/colleges?q=Top Engineering Colleges in Mumbai" className="mega-link">Top Engineering Colleges in Mumbai</Link>
                            <Link to="/colleges?q=Top Engineering Colleges in Maharashtra" className="mega-link">Top Engineering Colleges in Maharashtra</Link>
                            <Link to="/colleges?q=Top Engineering Colleges in Chennai" className="mega-link">Top Engineering Colleges in Chennai</Link>
                            <Link to="/colleges?q=Top Engineering Colleges in Kerala" className="mega-link">Top Engineering Colleges in Kerala</Link>
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
                            <Link to="/colleges?q=Top Medical Colleges in India" className="mega-link">Top Medical Colleges in India</Link>
                            <Link to="/colleges?q=Top Medical Colleges in Karnataka" className="mega-link">Top Medical Colleges in Karnataka</Link>
                            <Link to="/colleges?q=Top Pharmacy Colleges in India" className="mega-link">Top Pharmacy Colleges in India</Link>
                            <Link to="/colleges?q=Top Medical Colleges in Bangalore" className="mega-link">Top Medical Colleges in Bangalore</Link>
                            <Link to="/colleges?q=Top Dental Colleges in India" className="mega-link">Top Dental Colleges in India</Link>
                            <Link to="/colleges?q=Top Medical Colleges in Maharashtra" className="mega-link">Top Medical Colleges in Maharashtra</Link>
                            <Link to="/colleges?q=Top Medical Colleges in Mumbai" className="mega-link">Top Medical Colleges in Mumbai</Link>
                            <Link to="/colleges?q=Top Medical Colleges in Delhi" className="mega-link">Top Medical Colleges in Delhi</Link>
                            <Link to="/colleges?q=Top Pharmacy Colleges in Maharashtra" className="mega-link">Top Pharmacy Colleges in Maharashtra</Link>
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
                         <Col md={4}>
                           <div className="mega-title">Banking</div>
                           <Link to="/exams?q=IBPS Clerk" className="mega-link">IBPS Clerk</Link>
                           <Link to="/exams?q=IBPS PO" className="mega-link">IBPS PO</Link>
                           <Link to="/exams?q=SBI Clerk" className="mega-link">SBI Clerk</Link>
                           <Link to="/exams?q=SBI PO" className="mega-link">SBI PO</Link>
                           <Link to="/exams?q=IBPS RRB" className="mega-link">IBPS RRB</Link>
                           <Link to="/exams?q=Banking" className="mega-link text-primary mt-3">All Banking Exams <FaAngleRight/></Link>
                           
                           <div className="mega-title mt-4">Defence</div>
                           <Link to="/exams?q=NDA" className="mega-link">NDA</Link>
                           <Link to="/exams?q=AFCAT" className="mega-link">AFCAT</Link>
                           <Link to="/exams?q=CDS" className="mega-link">CDS</Link>
                           <Link to="/exams?q=DRDO CEPTAM" className="mega-link">DRDO CEPTAM</Link>
                           <Link to="/exams?q=RPF SI" className="mega-link">RPF SI</Link>
                           <Link to="/exams?q=Defence" className="mega-link text-primary mt-3">All Defence Exams <FaAngleRight/></Link>
                         </Col>
                         <Col md={4}>
                           <div className="mega-title">Teaching</div>
                           <Link to="/exams?q=CTET" className="mega-link">CTET</Link>
                           <Link to="/exams?q=UPTET" className="mega-link">UPTET</Link>
                           <Link to="/exams?q=UGC NET" className="mega-link">UGC NET</Link>
                           <Link to="/exams?q=CSIR NET" className="mega-link">CSIR NET</Link>
                           <Link to="/exams?q=APSET" className="mega-link">APSET</Link>
                           <Link to="/exams?q=Teaching" className="mega-link text-primary mt-3">All Teaching Exams <FaAngleRight/></Link>

                           <div className="mega-title mt-4">Railway</div>
                           <Link to="/exams?q=RRB Group D" className="mega-link">RRB Group D</Link>
                           <Link to="/exams?q=RRB NTPC" className="mega-link">RRB NTPC</Link>
                           <Link to="/exams?q=RRB JE" className="mega-link">RRB JE</Link>
                           <Link to="/exams?q=RPF Constable" className="mega-link">RPF Constable</Link>
                           <Link to="/exams?q=Railway" className="mega-link text-primary mt-3">All Railway Exams <FaAngleRight/></Link>
                         </Col>
                         <Col md={4}>
                           <div className="mega-title">SSC</div>
                           <Link to="/exams?q=SSC CGL" className="mega-link">SSC CGL</Link>
                           <Link to="/exams?q=SSC JE" className="mega-link">SSC JE</Link>
                           <Link to="/exams?q=SSC CHSL" className="mega-link">SSC CHSL</Link>
                           <Link to="/exams?q=SSC GD" className="mega-link">SSC GD</Link>
                           <Link to="/exams?q=SSC JHT" className="mega-link">SSC JHT</Link>
                           <Link to="/exams?q=SSC" className="mega-link text-primary mt-3">All SSC Exams <FaAngleRight/></Link>

                           <div className="mega-title mt-4">All Exams</div>
                           <Link to="/exams?q=UPSC" className="mega-link">All UPSC Exams</Link>
                           <Link to="/exams?q=State PSC" className="mega-link">All State PSC Exams</Link>
                           <Link to="/exams?q=Scholarships" className="mega-link">All Scholarship Exams</Link>
                           <Link to="/exams?q=PSU" className="mega-link">All PSU Exams</Link>
                           <Link to="/exams?q=State Exams" className="mega-link">All State Exams</Link>
                           <Link to="/exams?q=Insurance" className="mega-link">All Insurance Exams</Link>
                           <Link to="/exams?q=Police" className="mega-link">All Police Exams</Link>
                           <Link to="/exams?q=Sarkari" className="mega-link">All Sarkari Exams</Link>
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
                           <Link to="/study-abroad?q=USA" className="mega-link">USA</Link>
                           <Link to="/study-abroad?q=UK" className="mega-link">UK</Link>
                           <Link to="/study-abroad?q=Canada" className="mega-link">Canada</Link>
                           <Link to="/study-abroad?q=Australia" className="mega-link">Australia</Link>
                           <Link to="/study-abroad?q=Germany" className="mega-link">Germany</Link>
                           <Link to="/study-abroad?q=Ireland" className="mega-link">Ireland</Link>
                           <Link to="/study-abroad?q=France" className="mega-link">France</Link>
                           <Link to="/study-abroad?q=Singapore" className="mega-link">Singapore</Link>
                           <Link to="/study-abroad?q=New Zealand" className="mega-link">New Zealand</Link>
                           <Link to="/study-abroad?q=Japan" className="mega-link">Japan</Link>
                           <Link to="/study-abroad?q=Italy" className="mega-link">Italy</Link>
                           <Link to="/study-abroad?q=Finland" className="mega-link">Finland</Link>
                           <Link to="/study-abroad?q=Netherlands" className="mega-link">Netherlands</Link>
                         </Col>
                         <Col md={7}>
                           <div className="mega-title">Universities/Colleges</div>
                           <Link to="/study-abroad?q=Top Universities in USA" className="mega-link">Top Universities in USA</Link>
                           <Link to="/study-abroad?q=Top Universities in UK" className="mega-link">Top Universities in UK</Link>
                           <Link to="/study-abroad?q=Top Universities in Canada" className="mega-link">Top Universities in Canada</Link>
                           <Link to="/study-abroad?q=Top Universities in Australia" className="mega-link">Top Universities in Australia</Link>
                           <Link to="/study-abroad?q=Top Universities in Germany" className="mega-link">Top Universities in Germany</Link>
                           <Link to="/study-abroad?q=Top Universities in Ireland" className="mega-link">Top Universities in Ireland</Link>
                           <Link to="/study-abroad?q=Top Universities in France" className="mega-link">Top Universities in France</Link>
                           <Link to="/study-abroad?q=Top Universities in Singapore" className="mega-link">Top Universities in Singapore</Link>
                           <Link to="/study-abroad?q=Top Universities in New Zealand" className="mega-link">Top Universities in New Zealand</Link>
                           <Link to="/study-abroad?q=Top Universities in Japan" className="mega-link">Top Universities in Japan</Link>
                           <Link to="/study-abroad?q=Top Universities in Italy" className="mega-link">Top Universities in Italy</Link>
                           <Link to="/study-abroad?q=Top Universities in Finland" className="mega-link">Top Universities in Finland</Link>
                           <Link to="/study-abroad?q=Top Universities in Netherlands" className="mega-link">Top Universities in Netherlands</Link>
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
