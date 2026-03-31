import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Nav, Tab, Badge, Button, Image, Spinner } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaStar, FaBuilding, FaInfoCircle, FaPhoneAlt, FaGlobe, FaEnvelope, FaBriefcase, FaGraduationCap, FaExternalLinkAlt } from 'react-icons/fa';

import { useParams } from 'react-router-dom';
import { CollegeContext } from '../contexts/CollegeContext';
import { generateMissingDetails } from '../utils/geminiApi';

const CollegeDetail = () => {
  const { id } = useParams();
  const { colleges } = React.useContext(CollegeContext);
  const [activeTab, setActiveTab] = useState('overview');
  const [enriching, setEnriching] = useState(false);
  const [enrichedData, setEnrichedData] = useState(null);
  const [mapsReady, setMapsReady] = useState(window.rgmkGoogleMapsCallback || false);
  
  // AI Dynamic Generated Fields Context
  const [aiDetails, setAiDetails] = useState({ 
    overview: '', placementsOverview: '', facilitiesList: ''
  });
  const [aiLoading, setAiLoading] = useState({});

  const college = (colleges || []).find(c => String(c.id) === String(id));

  // AI Auto-Enrich logic on tab change
  useEffect(() => {
    if (!college) return;

    const fetchAi = async (field, promptKey) => {
      if (!aiDetails[field]) {
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

  // Simulating API enrichment (Google Maps, SearchAPI, SerpApi logic)
  useEffect(() => {
    if (college && !enrichedData) {
      setEnriching(true);
      setTimeout(() => {
        setEnrichedData({
          mapUrl: `https://www.google.com/maps/embed/v1/place?key=REPLACE_WITH_YOUR_KEY&q=${encodeURIComponent(college.name + ' ' + college.location)}`,
          searchLink: `https://www.google.com/search?q=${encodeURIComponent(college.name + ' admission 2026')}`,
          images: college.gallery || []
        });
        setEnriching(false);
      }, 1000);
    }
  }, [college, enrichedData]);

  if (!college) {
    return <Container className="my-5 text-center"><h3>College Not Found</h3></Container>;
  }

  return (
    <div className="pt-2">
      {/* Detail Header */}
      <section className="bg-light pb-5 position-relative">
        <div style={{height: '350px', width: '100%', overflow: 'hidden'}} className="position-relative">
          <Image src={college.img || "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1200"} className="w-100 h-100 object-fit-cover" style={{filter: 'brightness(60%)'}} />
          <Container className="position-absolute bottom-0 start-50 translate-middle-x pb-4">
            <Row className="align-items-end text-white">
              <Col md={8}>
                <div className="d-flex align-items-center mb-3">
                  <Badge bg="warning" text="dark" className="fs-6 me-3"><FaStar className="me-1 mb-1"/>{college.rating} Rating</Badge>
                  <Badge bg="primary" className="fs-6">{college.type}</Badge>
                </div>
                <h1 className="fw-bold display-5 mb-2 text-white">{college.name}</h1>
                <p className="fs-5 mb-0"><FaMapMarkerAlt className="me-2 text-danger"/>{college.address || college.location}</p>
              </Col>
              <Col md={4} className="text-md-end mt-4 mt-md-0">
                <Button className="btn-primary-custom btn-lg shadow w-100 mb-2">Apply for Admission</Button>
                {enriching ? (
                    <Button variant="light" disabled className="w-100 rounded-pill"><Spinner size="sm" className="me-2"/>Syncing API Data...</Button>
                ) : (
                    <Button variant="outline-light" className="w-100 rounded-pill" onClick={() => window.open(enrichedData?.searchLink, '_blank')}><FaExternalLinkAlt className="me-2"/>Search More Details</Button>
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
                <Nav.Item><Nav.Link eventKey="overview" className={`fw-medium rounded ${activeTab === 'overview' ? 'bg-primary text-white' : 'text-dark'}`}>Overview</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="courses" className={`fw-medium rounded ${activeTab === 'courses' ? 'bg-primary text-white' : 'text-dark'}`}>Courses & Fees</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="admissions" className={`fw-medium rounded ${activeTab === 'admissions' ? 'bg-primary text-white' : 'text-dark'}`}>Admissions</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="placements" className={`fw-medium rounded ${activeTab === 'placements' ? 'bg-primary text-white' : 'text-dark'}`}>Placements</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="reviews" className={`fw-medium rounded ${activeTab === 'reviews' ? 'bg-primary text-white' : 'text-dark'}`}>Reviews</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="facilities" className={`fw-medium rounded ${activeTab === 'facilities' ? 'bg-primary text-white' : 'text-dark'}`}>Facilities</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="gallery" className={`fw-medium rounded ${activeTab === 'gallery' ? 'bg-primary text-white' : 'text-dark'}`}>Gallery</Nav.Link></Nav.Item>
              </Nav>

              <Tab.Content>
                <Tab.Pane eventKey="overview">
                  <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.4}}>
                    <Card className="border-0 shadow-sm mb-4">
                      <Card.Body className="p-4">
                        <h4 className="fw-bold text-primary mb-3">About {college.name}</h4>
                        {college.about ? (
                          <p className="text-muted" style={{lineHeight: '1.8'}}>{college.about}</p>
                        ) : (
                          <div className="p-3 bg-light rounded-2 border border-info border-opacity-50" style={{lineHeight: '1.8'}}>
                            {aiLoading.overview ? (
                               <div className="text-info fw-bold"><Spinner size="sm" className="me-2"/> AI Generating Overview in 0.3s...</div>
                            ) : (
                               <div className="text-muted">
                                 <Badge bg="info" className="me-2 mb-1">✨ AI Generated</Badge> 
                                 {aiDetails.overview}
                               </div>
                            )}
                          </div>
                        )}
                        <h5 className="fw-bold text-dark mt-4 mb-3">Highlights</h5>
                        <ul className="list-group list-group-flush border-top border-bottom">
                          <li className="list-group-item d-flex justify-content-between text-muted"><span className="fw-medium text-dark">Location</span> {college.location}</li>
                          <li className="list-group-item d-flex justify-content-between text-muted"><span className="fw-medium text-dark">State</span> {college.state}</li>
                          <li className="list-group-item d-flex justify-content-between text-muted"><span className="fw-medium text-dark">Ranking</span> #{college.ranking || "Top 100"}</li>
                          <li className="list-group-item d-flex justify-content-between text-muted"><span className="fw-medium text-dark">Established</span> {college.established || "N/A"}</li>
                        </ul>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Tab.Pane>

                <Tab.Pane eventKey="courses">
                  <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.4}}>
                    <Card className="border-0 shadow-sm p-4 mb-4">
                      <h4 className="fw-bold text-primary mb-4">Courses & Fees Structure</h4>
                      <div className="table-responsive">
                        <table className="table table-hover align-middle border">
                          <thead className="table-light">
                            <tr>
                              <th>Program</th>
                              <th>Duration</th>
                              <th>Total Fees (Approx)</th>
                              <th>Eligibility</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {(college.courses || []).length > 0 ? college.courses.map((course, idx) => (
                              <tr key={idx}>
                                <td>
                                  <div className="fw-bold text-dark mb-1">{course.title}</div>
                                  <Badge bg="success" className="me-1">Full Time</Badge>
                                </td>
                                <td className="text-muted text-sm">{course.duration}</td>
                                <td className="text-dark fw-bold">{course.fees || course.fee}</td>
                                <td className="text-muted text-sm">{course.eligibility || "10+2 with 50%"}</td>
                                <td><Button variant="outline-primary" size="sm" className="rounded-pill px-3">Enquire</Button></td>
                              </tr>
                            )) : (
                              <tr>
                                <td colSpan="5" className="text-center text-muted">Course details being updated. Please contact the college directly.</td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </Card>
                  </motion.div>
                </Tab.Pane>

                <Tab.Pane eventKey="placements">
                  <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.4}}>
                    <Row className="g-4 mb-4">
                      <Col md={6}>
                        <Card className="border-0 shadow-sm h-100 bg-primary text-white text-center p-4">
                          <Card.Title className="fs-5 fw-bold mb-1">Highest Package</Card.Title>
                          <h2 className="display-4 fw-bold mb-0">{college.highestPackage || "₹ 15 LPA"}</h2>
                          <div className="mt-2 text-white-50 small">Placement Drive 2025</div>
                        </Card>
                      </Col>
                      <Col md={6}>
                        <Card className="border-0 shadow-sm h-100 bg-info text-white text-center p-4" style={{backgroundColor: 'var(--accent-light)'}}>
                          <Card.Title className="fs-5 fw-bold text-dark mb-1">Average Package</Card.Title>
                          <h2 className="display-4 fw-bold text-dark mb-0">{college.averagePackage || "₹ 6 LPA"}</h2>
                          <div className="mt-2 text-dark opacity-75 small">{college.placements || "90%"} Placement Record</div>
                        </Card>
                      </Col>
                    </Row>
                    
                    {!college.placements && (
                       <div className="p-3 bg-light rounded-2 border border-info border-opacity-50 mb-4" style={{lineHeight: '1.8'}}>
                         {aiLoading.placementsOverview ? (
                            <div className="text-info fw-bold"><Spinner size="sm" className="me-2"/> AI Fetching Placements info in 0.3s...</div>
                         ) : (
                            <div className="text-muted">
                              <Badge bg="info" className="me-2 mb-1">✨ AI Report</Badge> 
                              {aiDetails.placementsOverview}
                            </div>
                         )}
                       </div>
                    )}
                    <Card className="border-0 shadow-sm p-4">
                       <h5 className="fw-bold mb-3"><FaBriefcase className="me-2 text-primary"/> Top Recruiters</h5>
                       <div className="d-flex flex-wrap gap-2">
                         {['Amazon', 'TATA', 'Reliance', 'Google', 'Wipro', 'Infosys', 'HDFC Bank'].map(r => (
                           <Badge key={r} bg="light" text="dark" className="border py-2 px-3">{r}</Badge>
                         ))}
                       </div>
                    </Card>
                  </motion.div>
                </Tab.Pane>

                <Tab.Pane eventKey="reviews">
                  <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.4}}>
                     <Card className="border-0 shadow-sm p-4">
                       <h4 className="fw-bold text-primary mb-4">Student Reviews</h4>
                         <div className="d-flex align-items-center mb-4 p-3 bg-light rounded">
                          <h1 className="display-4 fw-bold text-dark mb-0 me-3">{college.rating}</h1>
                          <div>
                            <div className="text-warning fs-5">
                              <FaStar/><FaStar/><FaStar/><FaStar/><FaStar className="text-muted"/>
                            </div>
                            <span className="text-muted small">Based on {college.reviews || "100+"} Verified Reviews</span>
                          </div>
                        </div>
                       
                       <div className="border-bottom pb-4 mb-4">
                         <div className="d-flex justify-content-between align-items-center mb-2">
                           <h6 className="fw-bold mb-0">Excellent Faculty and Campus Life <Badge bg="success" className="ms-2">Verified</Badge></h6>
                           <span className="text-muted small">Updated Nov 2025</span>
                         </div>
                         <div className="text-warning mb-2 small"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
                         <p className="text-muted mb-0">The campus infrastructure is modern and the faculty supports students in every aspect of their education.</p>
                       </div>
                       
                       <Button variant="outline-primary" className="rounded-pill w-100">Load More Reviews</Button>
                     </Card>
                  </motion.div>
                </Tab.Pane>

                <Tab.Pane eventKey="facilities">
                  <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.4}}>
                     <Card className="border-0 shadow-sm p-4">
                       <h4 className="fw-bold text-primary mb-4">Campus Facilities</h4>
                       <Row className="g-4 text-center">
                         <Col xs={6} md={4}><div className="p-3 bg-light rounded text-primary border"><FaBuilding size={30} className="mb-2"/><br/>Library</div></Col>
                         <Col xs={6} md={4}><div className="p-3 bg-light rounded text-primary border"><FaBuilding size={30} className="mb-2"/><br/>Hostels</div></Col>
                         <Col xs={6} md={4}><div className="p-3 bg-light rounded text-primary border"><FaBuilding size={30} className="mb-2"/><br/>Sports Complex</div></Col>
                         <Col xs={6} md={4}><div className="p-3 bg-light rounded text-primary border"><FaBuilding size={30} className="mb-2"/><br/>IT Infrastructure</div></Col>
                         <Col xs={6} md={4}><div className="p-3 bg-light rounded text-primary border"><FaBuilding size={30} className="mb-2"/><br/>Cafeteria</div></Col>
                         <Col xs={6} md={4}><div className="p-3 bg-light rounded text-primary border"><FaBuilding size={30} className="mb-2"/><br/>Med Center</div></Col>
                       </Row>
                       
                       <div className="mt-4 p-3 bg-light rounded-2 border border-info border-opacity-50" style={{lineHeight: '1.8'}}>
                         {aiLoading.facilitiesList ? (
                            <div className="text-info fw-bold"><Spinner size="sm" className="me-2"/> AI Exploring Campus Facilities...</div>
                         ) : (
                            <div className="text-muted">
                              <Badge bg="info" className="me-2 mb-1">✨ AI Virtual Tour Notes</Badge> 
                              {aiDetails.facilitiesList}
                            </div>
                         )}
                       </div>
                     </Card>
                  </motion.div>
                </Tab.Pane>

                <Tab.Pane eventKey="admissions">
                  <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.4}}>
                     <Card className="border-0 shadow-sm p-4">
                       <h4 className="fw-bold text-primary mb-4">Admission Details</h4>
                       <div className="p-3 bg-light rounded mb-4">
                          <h6 className="fw-bold"><FaGraduationCap className="me-2 text-primary"/>Entrance Exams Accepted:</h6>
                          <div className="d-flex flex-wrap gap-2 mt-2">
                             {(college.exams || "N/A").split(',').map(ex => (
                               <Badge key={ex} bg="info" className="py-2 px-3">{ex.trim()}</Badge>
                             ))}
                          </div>
                       </div>
                       <h6 className="fw-bold mt-4 mb-3">Admission Process:</h6>
                       <ol className="text-muted small">
                         <li className="mb-2">Visit the official college website or apply via the national counseling portal.</li>
                         <li className="mb-2">Verify eligibility based on the marks in the latest qualifying examination.</li>
                         <li className="mb-2">Submit required documents including ID proof, marks card, and entrance test score.</li>
                         <li className="mb-2">Attend the counseling rounds / interview if applicable.</li>
                       </ol>
                     </Card>
                  </motion.div>
                </Tab.Pane>

                <Tab.Pane eventKey="gallery">
                  <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.4}}>
                     <Card className="border-0 shadow-sm p-4">
                       <h4 className="fw-bold text-primary mb-4">Campus Gallery</h4>
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
                          {(college.gallery || []).length === 0 && <p className="text-muted">Gallery placeholder...</p>}
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
              <Card.Header className="bg-primary text-white fw-bold py-3"><FaInfoCircle className="me-2"/>Contact Institute</Card.Header>
              <Card.Body>
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-light p-2 rounded text-primary me-3"><FaGlobe size={20}/></div>
                  <div className="overflow-hidden">
                    <div className="text-muted small">Website</div>
                    <a href={college.website} target="_blank" rel="noopener noreferrer" className="fw-medium text-dark text-decoration-none text-truncate d-block">{college.website}</a>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-light p-2 rounded text-primary me-3"><FaPhoneAlt size={20}/></div>
                  <div>
                    <div className="text-muted small">Phone</div>
                    <span className="fw-medium text-dark">{college.phone || "Not Available"}</span>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <div className="bg-light p-2 rounded text-primary me-3"><FaEnvelope size={20}/></div>
                  <div>
                    <div className="text-muted small">Social Profiles</div>
                    <div className="d-flex gap-2 mt-1">
                      <a href={college.facebook || "#"} className="text-muted small">FB</a>
                      <a href={college.instagram || "#"} className="text-muted small">IG</a>
                      <a href={college.linkedin || "#"} className="text-muted small">LI</a>
                    </div>
                  </div>
                </div>
                
                <h6 className="fw-bold mb-3 border-top pt-3">Location Map (API Sync)</h6>
                <div className="bg-light rounded overflow-hidden shadow-inner" style={{height: '250px', position: 'relative'}}>
                   {!mapsReady || enriching ? (
                      <div className="d-flex flex-column align-items-center justify-content-center h-100 bg-light">
                         <Spinner animation="border" variant="primary" className="mb-2"/>
                         <span className="small text-muted fw-bold">{!mapsReady ? "Initializing Maps API..." : "Fetching Live Map..."}</span>
                      </div>
                   ) : (
                      <iframe 
                        title="map"
                        src={enrichedData?.mapUrl || `https://www.google.com/maps/embed/v1/place?key=REPLACE_WITH_YOUR_KEY&q=${encodeURIComponent(college.name + ' ' + college.location)}`}
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
                        <FaMapMarkerAlt className="me-2"/> Open in Google Maps
                    </Button>
                </div>
              </Card.Body>
            </Card>

            <Card className="border-0 shadow-lg" style={{background: 'linear-gradient(135deg, var(--primary), var(--secondary))'}}>
              <Card.Body className="p-4 text-white">
                <h5 className="fw-bold mb-1 text-warning">Need Admission Help?</h5>
                <p className="small mb-4 opacity-75">Connect with our expert counselors for free guidance.</p>
                <input type="text" className="form-control mb-3 rounded-pill" placeholder="Your Name" />
                <input type="tel" className="form-control mb-3 rounded-pill" placeholder="Phone Number" />
                <input type="email" className="form-control mb-4 rounded-pill" placeholder="Email Address" />
                <Button variant="warning" className="w-100 rounded-pill fw-bold shadow">Request Callback</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CollegeDetail;
