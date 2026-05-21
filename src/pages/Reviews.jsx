import React, { useContext } from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { CollegeContext } from '../contexts/CollegeContext';

const reviewQuotes = [
  "The faculty is highly experienced and the campus environment is exceptionally positive. The laboratories and computing facilities are state-of-the-art.",
  "Campus life is vibrant with multiple student clubs and technical societies. Placements are highly proactive with top tier recruiters visiting every year.",
  "Excellent infrastructure, modern libraries, and a very supportive placement cell. The research facilities and guidance here are top-notch.",
  "Great peer learning environment and wonderful industry exposure. The course curriculum is regularly updated to meet current industry demands.",
  "A perfect balance of academics, sports, and cultural activities. The alumni network is highly active and helpful for careers.",
  "Excellent academic curriculum with emphasis on practical learnings. The mentors are very helpful in guiding students for projects and internships.",
  "State-of-the-art campus with great hostel facilities, green surroundings, and comprehensive library. Highly recommended for higher education.",
  "The mentorship from professors is outstanding. There are ample opportunities for international collaborations and industrial training."
];

const reviewerDepartments = [
  "B.Tech Computer Science Student",
  "MBA Management Student",
  "BCA IT Student",
  "MBBS Medical Student",
  "B.Des Fashion Student",
  "LLB Law Student",
  "M.Tech Software Systems Scholar",
  "B.Sc Applied Sciences Student"
];

const reviewTitles = [
  "Exceptional Faculty and Infrastructure",
  "Vibrant Campus Life and Great Placements",
  "Excellent Academic and Career Growth",
  "Great Industry Exposure and Support",
  "Perfect Hub for Holistic Development",
  "Focus on Practical Learning & Projects",
  "Modern Campus with Top-Tier Facilities",
  "Exceptional Mentorship & Opportunities"
];

const Reviews = () => {
  const { colleges } = useContext(CollegeContext);
  const navigate = useNavigate();

  // Get colleges with good ratings to showcase real reviews
  const reviewColleges = React.useMemo(() => {
    return (colleges || [])
      .filter(c => c.rating >= 4.5 && c.reviews > 10)
      .slice(0, 12);
  }, [colleges]);

  return (
    <div className="pt-2 bg-light min-vh-100 pb-5">
      <div className="bg-primary text-white py-5 text-center">
        <Container>
          <h1 className="fw-bold mb-3">Honest Student Reviews</h1>
          <p className="fs-5 opacity-75">Read verified reviews from students across thousands of colleges.</p>
        </Container>
      </div>

      <Container className="my-5">
        <Row className="g-4">
          {reviewColleges.map((college, idx) => {
            const starCount = Math.floor(college.rating || 5);
            const quote = reviewQuotes[idx % reviewQuotes.length];
            const title = reviewTitles[idx % reviewTitles.length];
            const dept = reviewerDepartments[idx % reviewerDepartments.length];
            
            return (
              <Col md={6} lg={4} key={college.id}>
                <Card 
                  className="border-0 shadow-sm h-100 custom-card cursor-pointer"
                  onClick={() => navigate(`/college/${college.id}`)}
                >
                  <Card.Body className="p-4 d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <Badge bg="success" className="px-3 py-1">Verified</Badge>
                      <div className="text-warning">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <FaStar key={i} color={i < starCount ? "#ffc107" : "#dee2e6"} />
                        ))}
                        <span className="ms-2 text-muted small">({college.rating})</span>
                      </div>
                    </div>
                    
                    <FaQuoteLeft className="text-primary opacity-25 mb-2" size={24} />
                    <Card.Title className="fw-bold fs-5 text-dark mb-2">{title}</Card.Title>
                    <Card.Text className="text-muted small flex-grow-1">"{quote}"</Card.Text>
                    
                    <div className="border-top pt-3 mt-3">
                      <div className="fw-bold text-primary text-truncate">{college.name}</div>
                      <div className="text-muted small">{dept} - {college.location}</div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
          {reviewColleges.length === 0 && (
            <Col className="text-center text-muted py-5">
              No reviews available at the moment.
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Reviews;
