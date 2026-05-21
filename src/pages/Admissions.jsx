import React, { useContext } from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { CollegeContext } from '../contexts/CollegeContext';

const admissionDeadlines = [
  { date: '15', month: "June '26", status: 'Closing Soon', badgeBg: 'danger', desc: 'Undergraduate and Postgraduate applications are closing soon. Ensure all documents and test scores are uploaded.' },
  { date: '30', month: "June '26", status: 'Open', badgeBg: 'success', desc: 'Direct admission registration portal is now active. Verify eligibility requirements prior to application.' },
  { date: '10', month: "July '26", status: 'Ongoing', badgeBg: 'info', desc: 'Counseling and seat allocation registration starts next week. Merit list cutoff details will be published on portal.' },
  { date: '25', month: "July '26", status: 'Open', badgeBg: 'success', desc: 'Applications are open for specialized diploma and certificate programs. Seats are limited.' }
];

const Admissions = () => {
  const { colleges } = useContext(CollegeContext);
  const navigate = useNavigate();

  // Select top colleges dynamically to show realistic admission alerts
  const admissionColleges = React.useMemo(() => {
    return (colleges || [])
      .filter(c => c.rating >= 4.5 && c.exams && c.exams !== 'Direct Admission')
      .slice(0, 10);
  }, [colleges]);

  return (
    <div className="pt-2 bg-light min-vh-100 pb-5">
      <div className="bg-primary text-white py-5 text-center">
        <Container>
          <h1 className="fw-bold mb-3">Admissions Alerts & Deadlines</h1>
          <p className="fs-5 opacity-75">Track the latest registration schedules, counselling updates, and deadlines.</p>
        </Container>
      </div>

      <Container className="my-5">
        <Row className="justify-content-center g-4">
          {admissionColleges.map((college, idx) => {
            const deadline = admissionDeadlines[idx % admissionDeadlines.length];
            const primaryCourse = college.courses && college.courses.length > 0 ? college.courses[0].title : 'All Courses';
            
            return (
              <Col lg={8} key={college.id}>
                <Card className="border-0 shadow-sm custom-card">
                  <Card.Body className="d-flex flex-column flex-md-row align-items-md-center p-4">
                    <div className="bg-primary text-white p-3 rounded text-center me-md-4 mb-3 mb-md-0 d-flex flex-row flex-md-column justify-content-center align-items-center align-items-md-stretch" style={{ minWidth: '90px', gap: '5px' }}>
                      <div className="fw-bold fs-3 leading-none">{deadline.date}</div>
                      <div className="small text-uppercase">{deadline.month}</div>
                    </div>
                    
                    <div className="flex-grow-1">
                      <Badge bg={deadline.badgeBg} className="mb-2 px-3 py-1">{deadline.status}</Badge>
                      <Card.Title className="fw-bold fs-5 text-dark mb-1">{college.name}</Card.Title>
                      <div className="text-muted small fw-semibold mb-2">Admission 2026: {primaryCourse} via {college.exams}</div>
                      <Card.Text className="text-muted small mb-0">{deadline.desc}</Card.Text>
                    </div>
                    
                    <div className="mt-3 mt-md-0 ms-md-4">
                      <Button 
                        variant="outline-primary" 
                        className="rounded-pill px-4 py-2 w-100"
                        onClick={() => navigate(`/college/${college.id}`)}
                      >
                        View Details
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
          {admissionColleges.length === 0 && (
            <Col className="text-center text-muted py-5">
              No active admissions alerts at this time.
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Admissions;
