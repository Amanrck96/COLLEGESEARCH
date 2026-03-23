import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { FaMoneyBillWave, FaGraduationCap } from 'react-icons/fa';

const Scholarships = () => {
  return (
    <div className="pt-2">
      <div className="bg-primary text-white py-5 text-center">
        <Container>
          <h1 className="fw-bold mb-3">Find Your Scholarship</h1>
          <p className="fs-5 opacity-75">Explore merit and need-based financial aid for your education.</p>
        </Container>
      </div>
      <Container className="py-5">
        <Row className="g-4">
          {[1,2,3,4,5,6].map(i => (
            <Col md={6} lg={4} key={i}>
              <Card className="border-0 shadow-sm h-100 p-3">
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <FaMoneyBillWave className="text-warning fs-3 me-3" />
                    <Badge bg="light" text="dark" className="border">Merit Based</Badge>
                  </div>
                  <Card.Title className="fw-bold text-primary mb-3">Central Sector Scholarship Scheme</Card.Title>
                  <Card.Text className="text-muted small">For university and college students who are above 80th percentile in relevant stream.</Card.Text>
                  <h6 className="fw-bold text-success mb-3">Amount: ₹10,000/year</h6>
                  <button className="btn btn-primary-custom w-100 rounded-pill">View Eligibility</button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default Scholarships;
