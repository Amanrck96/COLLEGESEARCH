import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Badge, Button, InputGroup } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaSearch, FaMapMarkerAlt, FaStar, FaFilter, FaRegBookmark, FaBookmark } from 'react-icons/fa';

const collegesData = [
  { id: 1, name: "Indian Institute of Technology (IIT)", location: "Delhi", rating: 4.8, type: "Government", fees: "₹10 Lacs/Year", exams: "JEE Advanced", img: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=400" },
  { id: 2, name: "National Institute of Design (NID)", location: "Ahmedabad", rating: 4.7, type: "Autonomous", fees: "₹8 Lacs/Year", exams: "NID DAT", img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=400" },
  { id: 3, name: "Indian Institute of Management (IIM)", location: "Bangalore", rating: 4.9, type: "Government", fees: "₹24 Lacs/Prog", exams: "CAT", img: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&q=80&w=400" },
  { id: 4, name: "Vellore Institute of Technology (VIT)", location: "Vellore", rating: 4.5, type: "Private", fees: "₹12 Lacs/Year", exams: "VITEEE", img: "https://images.unsplash.com/photo-1590408546194-e3fb4b917531?auto=format&fit=crop&q=80&w=400" },
  { id: 5, name: "Bits Pilani", location: "Pilani", rating: 4.8, type: "Private", fees: "₹15 Lacs/Year", exams: "BITSAT", img: "https://images.unsplash.com/photo-1592284988080-87b40b171bc8?auto=format&fit=crop&q=80&w=400" },
  { id: 6, name: "Symbiosis Institute of Business", location: "Pune", rating: 4.4, type: "Private", fees: "₹20 Lacs/Prog", exams: "SNAP", img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=400" },
];

const Colleges = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [saved, setSaved] = useState({});
  const [sortBy, setSortBy] = useState("rating");

  const toggleSave = (id) => {
    setSaved(prev => ({...prev, [id]: !prev[id]}));
  };

  let filteredColleges = collegesData.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    c.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (sortBy === "rating") {
    filteredColleges.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === "fees_low") {
    filteredColleges.sort((a, b) => parseInt(a.fees.replace(/\D/g,'')) - parseInt(b.fees.replace(/\D/g,'')));
  }

  return (
    <div className="pt-2 bg-light min-vh-100">
      <Container className="py-5">
        <Row className="mb-4 align-items-center">
          <Col md={6}>
            <h2 className="fw-bold text-primary mb-2">Explore Colleges in India</h2>
            <p className="text-muted">Find the best institution matching your career goals, budget, and location.</p>
          </Col>
          <Col md={6}>
            <Form className="d-flex w-100">
              <InputGroup className="shadow-sm">
                <InputGroup.Text className="bg-white border-end-0"><FaSearch color="var(--primary)"/></InputGroup.Text>
                <Form.Control 
                  type="text" 
                  placeholder="Search by name, city..." 
                  className="border-start-0 ps-0 border-end-0" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{boxShadow: 'none'}}
                />
                <Button variant="primary" className="btn-primary-custom rounded-start-0 px-4">Search</Button>
              </InputGroup>
            </Form>
          </Col>
        </Row>

        <Row className="g-4">
          {/* Sidebar Filter Placeholder */}
          <Col lg={3}>
            <Card className="border-0 shadow-sm p-3">
              <div className="d-flex align-items-center mb-3 text-primary fw-bold">
                <FaFilter className="me-2" /> Filters
              </div>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-medium text-dark">Location</Form.Label>
                  <Form.Select className="text-muted text-sm shadow-none">
                    <option>All Cities</option>
                    <option>Delhi</option>
                    <option>Bangalore</option>
                    <option>Mumbai</option>
                    <option>Pune</option>
                  </Form.Select>
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label className="fw-medium text-dark">Course Type</Form.Label>
                  <Form.Check type="checkbox" label="Engineering" className="text-muted small mb-1" />
                  <Form.Check type="checkbox" label="Management" className="text-muted small mb-1" />
                  <Form.Check type="checkbox" label="Medical" className="text-muted small mb-1" />
                  <Form.Check type="checkbox" label="Design" className="text-muted small" />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label className="fw-medium text-dark">Institute Type</Form.Label>
                  <Form.Check type="checkbox" label="Government" className="text-muted small mb-1" />
                  <Form.Check type="checkbox" label="Private" className="text-muted small" />
                </Form.Group>

                <Button variant="outline-primary" className="w-100 btn-sm rounded-pill">Apply Filters</Button>
              </Form>
            </Card>
          </Col>

          {/* College List */}
          <Col lg={9}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">{filteredColleges.length} Colleges Found</span>
              <div className="d-flex align-items-center">
                <span className="me-2 text-muted small">Sort By:</span>
                <Form.Select size="sm" value={sortBy} onChange={(e) => setSortBy(e.target.value)} style={{width: 'auto'}}>
                  <option value="rating">Highest Rating</option>
                  <option value="fees_low">Lowest Fees</option>
                </Form.Select>
              </div>
            </div>
            <Row className="g-4">
              {filteredColleges.map((college, idx) => (
                <Col md={6} key={college.id}>
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1, duration: 0.5 }}>
                    <Card className="custom-card h-100 border-0">
                      <div className="position-relative">
                        <Card.Img variant="top" src={college.img} className="card-img-top-custom" style={{height: '220px'}} />
                        <Badge bg="warning" text="dark" className="position-absolute shadow" style={{top: '15px', right: '15px', fontSize: '14px', zIndex: 2}}>
                          <FaStar className="me-1 mb-1"/>{college.rating}
                        </Badge>
                        <div 
                          className="position-absolute shadow-sm d-flex align-items-center justify-content-center" 
                          style={{top: '15px', left: '15px', width: '35px', height: '35px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.9)', cursor: 'pointer', zIndex: 2}}
                          onClick={() => toggleSave(college.id)}
                        >
                          {saved[college.id] ? <FaBookmark color="var(--primary)" size={16}/> : <FaRegBookmark color="var(--primary)" size={16}/>}
                        </div>
                      </div>
                      <Card.Body className="d-flex flex-column">
                        <div className="mb-2">
                          <span className="badge bg-light text-primary me-2">{college.type}</span>
                        </div>
                        <Card.Title className="fw-bold text-primary mb-1">{college.name}</Card.Title>
                        <Card.Text className="text-muted small mb-3"><FaMapMarkerAlt className="me-1 text-danger"/>{college.location}</Card.Text>
                        
                        <div className="bg-light p-3 rounded-3 mb-3 d-flex justify-content-between text-center flex-grow-1 align-items-center">
                          <div>
                            <div className="text-muted small mb-1">Total Fees</div>
                            <div className="fw-bold text-dark">{college.fees}</div>
                          </div>
                          <div>
                            <div className="text-muted small mb-1">Exams Accepted</div>
                            <div className="fw-bold text-dark">{college.exams}</div>
                          </div>
                        </div>

                        <div className="d-flex gap-2 mt-auto">
                          <Link to={`/colleges/${college.id}`} className="btn btn-outline-primary flex-grow-1 rounded-pill">View Info</Link>
                          <Button variant="primary" className="btn-primary-custom flex-grow-1 rounded-pill shadow-none" style={{padding: '8px 15px'}}>Apply Now</Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))}
              {filteredColleges.length === 0 && (
                <Col className="text-center py-5">
                  <h4 className="text-muted">No colleges found matching your criteria.</h4>
                </Col>
              )}
            </Row>

            {/* Pagination Placeholder */}
            {filteredColleges.length > 0 && (
              <div className="d-flex justify-content-center mt-5">
                <nav>
                  <ul className="pagination">
                    <li className="page-item disabled"><a className="page-link" href="#!">Previous</a></li>
                    <li className="page-item active"><a className="page-link" href="#!">1</a></li>
                    <li className="page-item"><a className="page-link" href="#!">2</a></li>
                    <li className="page-item"><a className="page-link" href="#!">3</a></li>
                    <li className="page-item"><a className="page-link" href="#!">Next</a></li>
                  </ul>
                </nav>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Colleges;
