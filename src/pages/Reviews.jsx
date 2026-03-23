import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';

const Reviews = () => {
  return (
    <div className="pt-2">
      <div className="bg-white py-5">
        <Container>
          <h2 className="text-center fw-bold text-primary mb-5">Honest Student Reviews</h2>
          <Row className="g-4">
            {[1,2,3,4,5,6].map(i => (
              <Col md={6} lg={4} key={i}>
                <Card className="border-0 shadow-sm h-100">
                  <Card.Body className="p-4">
                    <div className="d-flex justify-content-between mb-3">
                      <div>
                        <Badge bg="success" className="me-2">Verified</Badge>
                        <span className="text-warning"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar color="#dee2e6"/></span>
                      </div>
                    </div>
                    <Card.Title className="fw-bold fs-5">Great campus life, tough academics.</Card.Title>
                    <Card.Text className="text-muted small">"The professors are experienced and the library is top-notch. Placements are great if you are in circuital branches."</Card.Text>
                    <div className="mt-3 text-muted small fw-bold">- B.Tech Student, IIT Delhi</div>
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
export default Reviews;
