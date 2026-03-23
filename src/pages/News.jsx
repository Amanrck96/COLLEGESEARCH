import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCalendarAlt } from 'react-icons/fa';

const News = () => {
  return (
    <div className="pt-2">
      <div className="bg-light py-5">
        <Container>
          <h2 className="fw-bold text-primary mb-5 text-center">Education News & Articles</h2>
          <Row className="g-4">
            {[1,2,3,4].map(i => (
              <Col md={6} key={i}>
                <Card className="border-0 shadow-sm h-100 flex-row overflow-hidden">
                  <div className="bg-primary text-white p-3 d-flex align-items-center justify-content-center flex-column text-center" style={{width: '120px'}}>
                    <h2 className="mb-0 fw-bold">12</h2>
                    <span className="small">May 2026</span>
                  </div>
                  <Card.Body>
                    <Card.Title className="fw-bold fs-5 text-dark mb-2">NEET UG Answer Key Expected Soon</Card.Title>
                    <Card.Text className="text-muted small">NTA is likely to release the provisional answer key for NEET UG 2026 early next week. Students can challenge anomalies via the official portal.</Card.Text>
                    <a href="#!" className="fw-bold text-decoration-none">Read Full Article &raquo;</a>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default News;
