import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaUniversity, FaBookOpen, FaStar, FaChevronRight } from 'react-icons/fa';
import { CollegeContext } from '../contexts/CollegeContext';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const SectionData = {
  courses: [
    { title: "B.Tech in Computer Science", duration: "4 Years", exams: "JEE Main, BITSAT", icon: <FaBookOpen size={30} color="var(--accent-light)"/> },
    { title: "Master of Business Administration (MBA)", duration: "2 Years", exams: "CAT, XAT, MAT", icon: <FaGraduationCap size={30} color="var(--accent-light)"/> },
    { title: "Bachelor of Medicine (MBBS)", duration: "5.5 Years", exams: "NEET UG", icon: <FaBookOpen size={30} color="var(--accent-light)"/> },
    { title: "Bachelor of Fine Arts (BFA)", duration: "4 Years", exams: "NID DAT, UCEED", icon: <FaBookOpen size={30} color="var(--accent-light)"/> }
  ]
};

const Home = () => {
  const { colleges, exams } = React.useContext(CollegeContext);
  
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section text-center d-flex align-items-center justify-content-center">
        <Container style={{ zIndex: 1, position: 'relative' }}>
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-2">
            Find Colleges, Courses & Exams that are Best for You
          </motion.h1>
          
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="fs-6 mb-4 fw-medium" style={{color: '#f8f9fa'}}>
            {colleges.length}+ Colleges <span className="mx-2 text-warning">•</span> 4,80,000+ Courses <span className="mx-2 text-warning">•</span> 6,85,000+ Reviews <span className="mx-2 text-warning">•</span> {exams.length}+ Exams
          </motion.div>
          
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.5 }}>
            <div className="hero-search-wrapper w-100">
              <input type="text" placeholder="Search Colleges, Courses, Exams, Questions and Articles" />
              <button className="btn-search-orange">Search</button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Popular Colleges */}
      <section className="py-5 bg-white">
        <Container>
          <div className="section-title">
            <h2>Popular Colleges in India</h2>
            <p>Explore the top-ranked institutions based on placement, faculty, and student reviews.</p>
          </div>
          <Row className="g-4">
            {(colleges || []).slice(0, 4).map((college, idx) => (
              <Col md={6} lg={3} key={idx}>
                <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                  <Card className="custom-card h-100 border-0">
                    <Card.Img variant="top" src={college.img} className="card-img-top-custom" style={{height: '200px', objectFit: 'cover'}} />
                    <Card.Body className="d-flex flex-column">
                      <div className="mb-2">
                        <span className="badge bg-light text-primary me-2">{college.type}</span>
                        <Badge bg="warning" text="dark"><FaStar className="mb-1 me-1"/>{college.rating}</Badge>
                      </div>
                      <Card.Title className="fw-bold text-primary flex-grow-1" style={{fontSize: '1.1rem'}}>{college.name}</Card.Title>
                      <Card.Text className="text-muted mb-3 small"><FaUniversity className="me-2"/>{college.location}</Card.Text>
                      <Link to={`/colleges/${college.id}`} className="btn btn-outline-primary rounded-pill w-100">View Details</Link>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-5">
            <Link to="/colleges" className="btn btn-primary-custom">View All Colleges <FaChevronRight /></Link>
          </div>
        </Container>
      </section>

      {/* Popular Courses */}
      <section className="py-5 bg-light">
        <Container>
          <div className="section-title">
            <h2>Trending Courses</h2>
            <p>Find courses leading to high-demand careers across top industries.</p>
          </div>
          <Row className="g-4">
            {SectionData.courses.map((course, idx) => (
              <Col md={6} lg={3} key={idx}>
                <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                  <Card className="custom-card h-100 p-3 text-center border-0 shadow-sm align-items-center">
                    <div className="p-3 bg-light rounded-circle mb-3" style={{width: '70px', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      {course.icon}
                    </div>
                    <Card.Body>
                      <Card.Title className="fw-bold mb-3" style={{color: 'var(--primary)'}}>{course.title}</Card.Title>
                      <Card.Text className="text-muted small mb-1">Duration: <strong>{course.duration}</strong></Card.Text>
                      <Card.Text className="text-muted small mb-3">Entrance: <strong>{course.exams}</strong></Card.Text>
                      <Link to="/courses" className="text-decoration-none fw-bold" style={{color: 'var(--accent-light)'}}>Explore <FaChevronRight/></Link>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Upcoming Exams & Admissions */}
      <section className="py-5 bg-white">
        <Container>
          <Row className="g-5">
            <Col lg={6}>
              <div className="mb-4">
                <h3 className="fw-bold text-primary border-bottom pb-3 border-2 border-primary" style={{display: 'inline-block'}}>Upcoming Exams</h3>
              </div>
              <Row className="gy-3">
                {exams.slice(0, 3).map((exam, i) => (
                  <Col sm={12} key={i}>
                    <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                      <div className="d-flex align-items-center bg-light p-3 rounded-3 shadow-sm border-start border-4 border-primary">
                        <div className="bg-white rounded p-3 text-center shadow-sm me-4" style={{minWidth: '90px'}}>
                          <div className="fs-6 fw-bold text-primary">{exam.date.split(' ')[0]}</div>
                          <div className="fs-4 fw-bold">{exam.date.split(' ')[1].replace(',','')}</div>
                        </div>
                        <div className="flex-grow-1">
                          <h5 className="mb-1 fw-bold text-primary">{exam.name}</h5>
                          <div className="text-muted small"><Badge bg="secondary" className="me-2">{exam.tag}</Badge>{exam.level} Level</div>
                        </div>
                        <Link to="/exams" className="btn btn-sm btn-outline-primary rounded-pill">Info</Link>
                      </div>
                    </motion.div>
                  </Col>
                ))}
                {exams.length === 0 && <p className="text-muted">No exams found in Excel data.</p>}
              </Row>
              <div className="mt-4"><Link to="/exams" className="text-decoration-none fw-bold" style={{color: 'var(--accent-gold)'}}>See all exams <FaChevronRight /></Link></div>
            </Col>

            <Col lg={6}>
              <div className="mb-4">
                <h3 className="fw-bold text-primary border-bottom pb-3 border-2 border-warning" style={{display: 'inline-block'}}>Admission Alerts</h3>
              </div>
              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Card className="border-0 shadow-sm bg-light">
                  <Card.Body className="p-4">
                    <ul className="list-unstyled mb-0">
                      <li className="mb-3 border-bottom pb-3 d-flex align-items-start">
                        <span className="badge bg-danger me-3 mt-1 rounded-pill">New</span>
                        <div>
                          <p className="mb-1 fw-bold text-primary">Delhi University UG Admissions 2026 via CUET</p>
                          <small className="text-muted">Applications open till April 15, 2026. Verify your eligibility now.</small>
                        </div>
                      </li>
                      <li className="mb-3 border-bottom pb-3 d-flex align-items-start">
                        <span className="badge bg-warning text-dark me-3 mt-1 rounded-pill">Ending Soon</span>
                        <div>
                          <p className="mb-1 fw-bold text-primary">VITEEE 2026 Application Deadline Extended</p>
                          <small className="text-muted">Last date to apply for BTech in VIT is March 31, 2026.</small>
                        </div>
                      </li>
                      <li className="d-flex align-items-start">
                        <span className="badge bg-info me-3 mt-1 rounded-pill">Update</span>
                        <div>
                          <p className="mb-1 fw-bold text-primary">IIM Ahmedabad Announces WAT/PI Shortlist</p>
                          <small className="text-muted">Candidates can check their status using CAT credentials.</small>
                        </div>
                      </li>
                    </ul>
                    <div className="mt-4"><Link to="/admissions" className="text-decoration-none fw-bold" style={{color: 'var(--accent-gold)'}}>More alerts <FaChevronRight /></Link></div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-5" style={{ background: 'var(--accent-light)', color: '#fff' }}>
        <Container className="text-center py-4">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="fw-bold text-white mb-3">Confused About Your Career Path?</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="fs-5 mb-4">Take our AI-powered career assessment and find the right path for you.</motion.p>
          <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}>
            <Link to="/career" className="btn btn-accent-custom btn-lg shadow">Start Career Guidance Test</Link>
          </motion.div>
        </Container>
      </section>

    </div>
  );
};

export default Home;
