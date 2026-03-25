import React, { useContext } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPaperPlane, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SiteContext } from '../contexts/SiteContext';

const Footer = () => {
  const { siteData } = useContext(SiteContext);
  const { description, social, quickLinks, popularCategories, contactInfo } = siteData.footer;
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
                {description}
              </p>
              <div className="d-flex gap-3 mt-4">
                <a href={social.facebook} className="text-white fs-5"><FaFacebook /></a>
                <a href={social.twitter} className="text-white fs-5"><FaTwitter /></a>
                <a href={social.instagram} className="text-white fs-5"><FaInstagram /></a>
                <a href={social.linkedin} className="text-white fs-5"><FaLinkedin /></a>
              </div>
            </div>
          </Col>
          
          <Col lg={2} md={6} sm={6}>
            <h5>Quick Links</h5>
            {quickLinks.map(link => (
              <Link key={link.id} to={link.url}>{link.title}</Link>
            ))}
          </Col>

          <Col lg={3} md={6} sm={6}>
            <h5>Popular Categories</h5>
            {popularCategories.map(cat => (
              <Link key={cat.id} to={cat.url}>{cat.title}</Link>
            ))}
          </Col>

          <Col lg={3} md={6}>
            <h5>Contact Info</h5>
            <div className="d-flex align-items-center mb-3" style={{ color: 'rgba(255,255,255,0.7)' }}>
              <FaMapMarkerAlt className="me-3 fs-5" color="var(--accent-gold)" />
              <span>{contactInfo.address}</span>
            </div>
            <div className="d-flex align-items-center mb-3" style={{ color: 'rgba(255,255,255,0.7)' }}>
              <FaPhoneAlt className="me-3 fs-5" color="var(--accent-gold)" />
              <span>{contactInfo.phone}</span>
            </div>
            <div className="d-flex align-items-center mb-4" style={{ color: 'rgba(255,255,255,0.7)' }}>
              <FaEnvelope className="me-3 fs-5" color="var(--accent-gold)" />
              <span>{contactInfo.email}</span>
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
