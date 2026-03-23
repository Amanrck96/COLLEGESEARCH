import React, { useState } from 'react';
import { Container, Row, Col, Card, Nav, Tab, Badge, Button, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaStar, FaBuilding, FaInfoCircle, FaPhoneAlt, FaGlobe, FaEnvelope } from 'react-icons/fa';

const CollegeDetail = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="pt-2">
      {/* Detail Header */}
      <section className="bg-light pb-5 position-relative">
        <div style={{height: '350px', width: '100%', overflow: 'hidden'}} className="position-relative">
          <Image src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1200" className="w-100 h-100 object-fit-cover" style={{filter: 'brightness(60%)'}} />
          <Container className="position-absolute bottom-0 start-50 translate-middle-x pb-4">
            <Row className="align-items-end text-white">
              <Col md={8}>
                <div className="d-flex align-items-center mb-3">
                  <Badge bg="warning" text="dark" className="fs-6 me-3"><FaStar className="me-1 mb-1"/>4.8 Rating</Badge>
                  <Badge bg="primary" className="fs-6">Govt. Institute</Badge>
                </div>
                <h1 className="fw-bold display-5 mb-2 text-white">Indian Institute of Technology (IIT) Delhi</h1>
                <p className="fs-5 mb-0"><FaMapMarkerAlt className="me-2 text-danger"/>Hauz Khas, New Delhi, Delhi 110016</p>
              </Col>
              <Col md={4} className="text-md-end mt-4 mt-md-0">
                <Button className="btn-primary-custom btn-lg shadow w-100 mb-2">Apply for Admission</Button>
                <Button variant="outline-light" className="w-100 rounded-pill">Download Brochure</Button>
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
                        <h4 className="fw-bold text-primary mb-3">About IIT Delhi</h4>
                        <p className="text-muted" style={{lineHeight: '1.8'}}>
                          Indian Institute of Technology Delhi is one of the 23 IITs created to be Centres of Excellence for training, research and development in science, engineering and technology in India. Established as College of Engineering in 1961.
                        </p>
                        <h5 className="fw-bold text-dark mt-4 mb-3">Highlights</h5>
                        <ul className="list-group list-group-flush border-top border-bottom">
                          <li className="list-group-item d-flex justify-content-between text-muted"><span className="fw-medium text-dark">Establishment Year</span> 1961</li>
                          <li className="list-group-item d-flex justify-content-between text-muted"><span className="fw-medium text-dark">Campus Size</span> 320 Acres</li>
                          <li className="list-group-item d-flex justify-content-between text-muted"><span className="fw-medium text-dark">NIRF Ranking 2025</span> #2 in Engineering</li>
                          <li className="list-group-item d-flex justify-content-between text-muted"><span className="fw-medium text-dark">Total Faculty</span> 600+</li>
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
                            <tr>
                              <td>
                                <div className="fw-bold text-dark mb-1">B.Tech Computer Science</div>
                                <Badge bg="success" className="me-1">Full Time</Badge>
                              </td>
                              <td className="text-muted text-sm">4 Years</td>
                              <td className="text-dark fw-bold">₹ 8.5 Lakhs</td>
                              <td className="text-muted text-sm">10+2 with 75% + JEE Adv</td>
                              <td><Button variant="outline-primary" size="sm" className="rounded-pill px-3">Enquire</Button></td>
                            </tr>
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
                          <h2 className="display-4 fw-bold mb-0">₹ 2.4 Cr</h2>
                          <div className="mt-2 text-white-50 small">International (2025 Placement Drive)</div>
                        </Card>
                      </Col>
                      <Col md={6}>
                        <Card className="border-0 shadow-sm h-100 bg-info text-white text-center p-4" style={{backgroundColor: 'var(--accent-light)'}}>
                          <Card.Title className="fs-5 fw-bold text-dark mb-1">Average Package</Card.Title>
                          <h2 className="display-4 fw-bold text-dark mb-0">₹ 25 LPA</h2>
                          <div className="mt-2 text-dark opacity-75 small">Across B.Tech Programs</div>
                        </Card>
                      </Col>
                    </Row>
                  </motion.div>
                </Tab.Pane>

                <Tab.Pane eventKey="reviews">
                  <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.4}}>
                     <Card className="border-0 shadow-sm p-4">
                       <h4 className="fw-bold text-primary mb-4">Student Reviews</h4>
                       <div className="d-flex align-items-center mb-4 p-3 bg-light rounded">
                         <h1 className="display-4 fw-bold text-dark mb-0 me-3">4.8</h1>
                         <div>
                           <div className="text-warning fs-5">
                             <FaStar/><FaStar/><FaStar/><FaStar/><FaStar className="text-muted"/>
                           </div>
                           <span className="text-muted small">Based on 1250 Verified Reviews</span>
                         </div>
                       </div>
                       
                       <div className="border-bottom pb-4 mb-4">
                         <div className="d-flex justify-content-between align-items-center mb-2">
                           <h6 className="fw-bold mb-0">Exceptional Academic Environment <Badge bg="success" className="ms-2">Verified</Badge></h6>
                           <span className="text-muted small">Oct 2025</span>
                         </div>
                         <div className="text-warning mb-2 small"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
                         <p className="text-muted mb-0">The professors are world-class and the research facilities are unparalleled.</p>
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
                         <Col xs={6} md={4}><div className="p-3 bg-light rounded text-primary"><FaBuilding size={30} className="mb-2"/><br/>Library</div></Col>
                         <Col xs={6} md={4}><div className="p-3 bg-light rounded text-primary"><FaBuilding size={30} className="mb-2"/><br/>Hostels</div></Col>
                         <Col xs={6} md={4}><div className="p-3 bg-light rounded text-primary"><FaBuilding size={30} className="mb-2"/><br/>Sports Complex</div></Col>
                       </Row>
                     </Card>
                  </motion.div>
                </Tab.Pane>

                <Tab.Pane eventKey="admissions">
                  <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.4}}>
                     <Card className="border-0 shadow-sm p-4">
                       <h4 className="fw-bold text-primary mb-4">Admissions Process & Cutoffs</h4>
                       <p className="text-muted">Admissions to B.Tech programs are exclusively through JEE Advanced. Candidates must rank in the top bracket. JoSAA conducts the counseling process over 6 rounds.</p>
                       <h6 className="fw-bold mt-4 mb-3">Previous Year Round 1 Cutoffs</h6>
                       <table className="table table-bordered text-center align-middle">
                         <thead className="table-light">
                           <tr><th>Branch</th><th>Closing Rank</th></tr>
                         </thead>
                         <tbody>
                           <tr><td>Computer Science</td><td>115</td></tr>
                           <tr><td>Electrical Engg</td><td>582</td></tr>
                         </tbody>
                       </table>
                     </Card>
                  </motion.div>
                </Tab.Pane>

                <Tab.Pane eventKey="gallery">
                  <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.4}}>
                     <Card className="border-0 shadow-sm p-4">
                       <h4 className="fw-bold text-primary mb-4">Campus Gallery</h4>
                       <Row className="g-3">
                         {[
                           "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=400",
                           "https://images.unsplash.com/photo-1592284988080-87b40b171bc8?auto=format&fit=crop&q=80&w=400",
                           "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=400",
                           "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=400",
                           "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&q=80&w=400",
                           "https://images.unsplash.com/photo-1590408546194-e3fb4b917531?auto=format&fit=crop&q=80&w=400"
                         ].map((img, idx) => (
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
                  <div>
                    <div className="text-muted small">Website</div>
                    <a href="#!" className="fw-medium text-dark text-decoration-none">www.iitd.ac.in</a>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-light p-2 rounded text-primary me-3"><FaPhoneAlt size={20}/></div>
                  <div>
                    <div className="text-muted small">Phone</div>
                    <span className="fw-medium text-dark">011-26597135</span>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <div className="bg-light p-2 rounded text-primary me-3"><FaEnvelope size={20}/></div>
                  <div>
                    <div className="text-muted small">Email</div>
                    <span className="fw-medium text-dark">admissions@iitd.ac.in</span>
                  </div>
                </div>
                
                <h6 className="fw-bold mb-3 border-top pt-3">Location Map</h6>
                <div className="bg-light rounded d-flex align-items-center justify-content-center text-muted" style={{height: '200px'}}>
                  [ Google Maps Integration ]
                </div>
              </Card.Body>
            </Card>

            <Card className="border-0 shadow-lg" style={{background: 'linear-gradient(135deg, var(--primary), var(--secondary))'}}>
              <Card.Body className="p-4 text-white">
                <h5 className="fw-bold mb-1 text-warning">Need Admission Help?</h5>
                <p className="small mb-4 opacity-75">Connect with our expert counselors to understand cutoffs better.</p>
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
