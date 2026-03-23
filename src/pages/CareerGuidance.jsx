import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaUserMd, FaLaptopCode, FaChartLine } from 'react-icons/fa';

const CareerGuidance = () => {
  return (
    <div className="pt-2 bg-light min-vh-100 pb-5">
      <Container className="pt-5">
        <h2 className="fw-bold text-primary text-center mb-3">Career Guidance</h2>
        <p className="text-center text-muted mb-5">Take a career test or talk to our experts to discover your perfect path.</p>
        <Card className="border-0 shadow p-5 text-center rounded-4 mx-auto mb-5" style={{maxWidth: '800px'}}>
          <h3 className="fw-bold mb-4">Not Sure What To Study?</h3>
          <p className="text-muted fs-5 mb-4">Our AI-driven psychometric career assessment test helps you find the right degree and college based on your strengths and personality.</p>
          <button className="btn btn-warning btn-lg rounded-pill fw-bold shadow-sm" style={{backgroundColor: 'var(--accent-gold)'}}>Take Free Career Test</button>
        </Card>
        
        <h4 className="fw-bold text-dark text-center mb-4 mt-5">Trending Careers</h4>
        <Row className="g-4 justify-content-center">
          <Col md={4}><Card className="border-0 shadow-sm text-center p-4"><FaLaptopCode className="mx-auto text-primary fs-1 mb-3"/><h5 className="fw-bold">Data Scientist</h5></Card></Col>
          <Col md={4}><Card className="border-0 shadow-sm text-center p-4"><FaUserMd className="mx-auto text-danger fs-1 mb-3"/><h5 className="fw-bold">Medical Professional</h5></Card></Col>
          <Col md={4}><Card className="border-0 shadow-sm text-center p-4"><FaChartLine className="mx-auto text-success fs-1 mb-3"/><h5 className="fw-bold">Financial Analyst</h5></Card></Col>
        </Row>
      </Container>
    </div>
  );
};
export default CareerGuidance;
