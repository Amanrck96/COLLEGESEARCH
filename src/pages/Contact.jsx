import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

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
                <div><h6 className="fw-bold mb-1">Email Address</h6><span className="small opacity-75">support@thecollegecompass.com</span></div>
              </div>
            </Card>
          </Col>

          <Col lg={7}>
            <Card className="border-0 shadow p-5">
              <h4 className="fw-bold text-dark mb-4">Send us a Message</h4>
              {submitted ? (
                <Alert variant="success" className="p-4 rounded-3 text-center">
                  <FaCheckCircle className="text-success fs-1 mb-3" />
                  <h5 className="fw-bold text-success">Thank You, {formData.name}!</h5>
                  <p className="mb-3 text-muted">Your message has been received successfully. Our admissions counseling team will reach out to <strong>{formData.email}</strong> within 24 hours.</p>
                  <Button variant="outline-success" size="sm" className="rounded-pill px-4" onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }); }}>Send Another Message</Button>
                </Alert>
              ) : (
                <Form onSubmit={handleSubmit}>
                  <Row className="g-4 mb-4">
                    <Col md={6}>
                      <Form.Control 
                        type="text" 
                        required 
                        placeholder="Your Name" 
                        className="p-3 bg-light border-0 rounded"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      />
                    </Col>
                    <Col md={6}>
                      <Form.Control 
                        type="email" 
                        required 
                        placeholder="Your Email" 
                        className="p-3 bg-light border-0 rounded"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      />
                    </Col>
                    <Col md={12}>
                      <Form.Control 
                        type="text" 
                        placeholder="Subject" 
                        className="p-3 bg-light border-0 rounded"
                        value={formData.subject}
                        onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                      />
                    </Col>
                    <Col md={12}>
                      <Form.Control 
                        as="textarea" 
                        rows={5} 
                        required 
                        placeholder="Your Message" 
                        className="p-3 bg-light border-0 rounded"
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      />
                    </Col>
                  </Row>
                  <Button type="submit" variant="primary" className="btn-primary-custom w-100 py-3 shadow">Send Message</Button>
                </Form>
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Contact;
