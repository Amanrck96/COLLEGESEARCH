import React from 'react';
import { Container, Row, Col, Card, Alert, Badge } from 'react-bootstrap';

const Admissions = () => {
  return (
    <div className="pt-2 bg-light min-vh-100 pb-5">
      <Container className="pt-5">
        <h2 className="fw-bold text-primary text-center mb-5">Admissions Alerts & Deadlines</h2>
        <Row className="justify-content-center g-4">
          {[1,2,3,4].map(i => (
            <Col lg={8} key={i}>
              <Card className="border-0 shadow-sm">
                <Card.Body className="d-flex align-items-center">
                  <div className="bg-primary text-white p-3 rounded text-center me-4" style={{width: '90px'}}>
                    <div className="fw-bold fs-4">15</div>
                    <div className="small">May '26</div>
                  </div>
                  <div className="flex-grow-1">
                    <Badge bg="danger" className="mb-2">Closing Soon</Badge>
                    <Card.Title className="fw-bold fs-5 text-dark">DU UG Admission via CUET</Card.Title>
                    <Card.Text className="text-muted small">Application forms for Delhi University undergraduate admissions close on May 15. Apply now before the deadline.</Card.Text>
                  </div>
                  <div>
                    <button className="btn btn-outline-primary rounded-pill px-4">Apply</button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default Admissions;
