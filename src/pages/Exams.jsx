import React, { useContext } from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { FaCalendarAlt } from 'react-icons/fa';
import { CollegeContext } from '../contexts/CollegeContext';

const Exams = () => {
  const { exams } = useContext(CollegeContext);

  return (
    <div className="pt-2">
      <div className="bg-primary text-white py-5">
        <Container>
          <h1 className="fw-bold text-center">Upcoming Entrance Exams</h1>
          <p className="text-center opacity-75">Syllabus, eligibility, pattern, and registration details.</p>
        </Container>
      </div>
      <Container className="my-5">
        <Row className="g-4">
          {(exams || []).map((exam, i) => (
            <Col md={4} key={i}>
              <Card className="border-0 shadow-sm h-100 p-2">
                <Card.Img 
                  variant="top" 
                  src={exam.img || 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=400'} 
                  style={{height: '200px', objectFit: 'cover', borderRadius: '10px'}} 
                />
                <Card.Body>
                  <Badge bg="warning" text="dark" className="mb-2">{exam.tag || exam.type || 'General'}</Badge>
                  <Card.Title className="fw-bold">{exam.name}</Card.Title>
                  <Card.Text className="text-muted"><FaCalendarAlt className="me-2"/>{exam.date}</Card.Text>
                  <Button variant="outline-primary" className="w-100 rounded-pill">View Details</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Exams;
