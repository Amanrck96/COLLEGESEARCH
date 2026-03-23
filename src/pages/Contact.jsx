import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="pt-2 pb-5">
      <Container className="pt-5">
        <Row className="g-5">
          <Col lg={5}>
            <div className="mb-5">
              <h2 className="fw-bold text-primary mb-3">Get in Touch</h2>
              <p className="text-muted">Have a query regarding college admissions or using our platform? Send us a message and we'll reply within 24 hours.</p>
            </div>
            
            <Card className="border-0 shadow-sm bg-primary text-white p-4">
              <div className="d-flex align-items-center mb-4">
                <div className="bg-white text-primary p-3 rounded-circle me-3"><FaMapMarkerAlt size={24}/></div>
                <div><h6 className="fw-bold mb-1">Office Location</h6><span className="small opacity-75">123 Knowledge Tower, Edu City, Bengaluru 560001</span></div>
              </div>
              <div className="d-flex align-items-center mb-4">
                <div className="bg-white text-primary p-3 rounded-circle me-3"><FaPhoneAlt size={24}/></div>
                <div><h6 className="fw-bold mb-1">Phone Number</h6><span className="small opacity-75">+91 1800-456-7890</span></div>
              </div>
              <div className="d-flex align-items-center">
                <div className="bg-white text-primary p-3 rounded-circle me-3"><FaEnvelope size={24}/></div>
                <div><h6 className="fw-bold mb-1">Email Address</h6><span className="small opacity-75">support@collegesearch.edu</span></div>
              </div>
            </Card>
          </Col>

          <Col lg={7}>
            <Card className="border-0 shadow p-5">
              <h4 className="fw-bold text-dark mb-4">Send us a Message</h4>
              <Form>
                <Row className="g-4 mb-4">
                  <Col md={6}><Form.Control type="text" placeholder="Your Name" className="p-3 bg-light border-0 rounded" /></Col>
                  <Col md={6}><Form.Control type="email" placeholder="Your Email" className="p-3 bg-light border-0 rounded" /></Col>
                  <Col md={12}><Form.Control type="text" placeholder="Subject" className="p-3 bg-light border-0 rounded" /></Col>
                  <Col md={12}><Form.Control as="textarea" rows={5} placeholder="Your Message" className="p-3 bg-light border-0 rounded" /></Col>
                </Row>
                <Button variant="primary" className="btn-primary-custom w-100 py-3 shadow">Send Message</Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Contact;
