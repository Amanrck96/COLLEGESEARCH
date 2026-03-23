import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPaperPlane, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer mt-auto">
      <Container>
        <Row className="gy-4">
          <Col lg={4} md={6}>
            <div className="mb-4">
              <h3 className="fw-bold mb-3 d-flex align-items-center">
                <span className="text-white">College</span>
                <span style={{ color: 'var(--accent-light)' }}>Search</span>
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8' }}>
                Your ultimate student-friendly platform for exploring top colleges, trending courses, exams info, real student reviews, and shaping an incredible career path.
              </p>
              <div className="d-flex gap-3 mt-4">
                <a href="#!" className="text-white fs-5"><FaFacebook /></a>
                <a href="#!" className="text-white fs-5"><FaTwitter /></a>
                <a href="#!" className="text-white fs-5"><FaInstagram /></a>
                <a href="#!" className="text-white fs-5"><FaLinkedin /></a>
              </div>
            </div>
          </Col>
          
          <Col lg={2} md={6} sm={6}>
            <h5>Quick Links</h5>
            <Link to="/about">About Us</Link>
            <Link to="/colleges">All Colleges</Link>
            <Link to="/exams">Latest Exams</Link>
            <Link to="/rankings">Rankings 2026</Link>
            <Link to="/scholarships">Scholarships</Link>
            <Link to="/contact">Contact Us</Link>
          </Col>

          <Col lg={3} md={6} sm={6}>
            <h5>Popular Categories</h5>
            <Link to="/courses?type=engineering">Engineering (B.Tech)</Link>
            <Link to="/courses?type=medical">Medical (MBBS)</Link>
            <Link to="/courses?type=management">Management (MBA)</Link>
            <Link to="/courses?type=arts">Arts & Humanities</Link>
            <Link to="/courses?type=law">Law & Order</Link>
            <Link to="/courses?type=design">Design & Architecture</Link>
          </Col>

          <Col lg={3} md={6}>
            <h5>Contact Info</h5>
            <div className="d-flex align-items-center mb-3" style={{ color: 'rgba(255,255,255,0.7)' }}>
              <FaMapMarkerAlt className="me-3 fs-5" color="var(--accent-gold)" />
              <span>123 Knowledge Tower, Edu City, Bengaluru 560001</span>
            </div>
            <div className="d-flex align-items-center mb-3" style={{ color: 'rgba(255,255,255,0.7)' }}>
              <FaPhoneAlt className="me-3 fs-5" color="var(--accent-gold)" />
              <span>+91 1800-456-7890</span>
            </div>
            <div className="d-flex align-items-center mb-4" style={{ color: 'rgba(255,255,255,0.7)' }}>
              <FaEnvelope className="me-3 fs-5" color="var(--accent-gold)" />
              <span>support@collegesearch.edu</span>
            </div>
            
            <h6 className="text-white mb-3">Newsletter Signup</h6>
            <Form className="d-flex">
              <Form.Control type="email" placeholder="Your email..." className="rounded-start border-0" />
              <Button variant="warning" className="rounded-end border-0" style={{ background: 'var(--accent-gold)' }}>
                <FaPaperPlane />
              </Button>
            </Form>
          </Col>
        </Row>
        
        <div className="footer-bottom">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} CollegeSearch Platform. All Rights Reserved.
            <br />
            Designed strictly for modern education branding.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
