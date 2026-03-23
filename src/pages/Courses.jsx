import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, InputGroup, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaSearch, FaLaptopCode, FaStethoscope, FaChartPie, FaPaintBrush, FaBalanceScale } from 'react-icons/fa';

const coursesData = [
  { title: "B.Tech Computer Science", duration: "4 Years", avgFee: "₹8L - ₹15L", category: "Engineering", icon: <FaLaptopCode size={40} className="text-primary"/> },
  { title: "MBBS", duration: "5.5 Years", avgFee: "₹10L - ₹1Cr", category: "Medical", icon: <FaStethoscope size={40} className="text-danger"/> },
  { title: "MBA Finance", duration: "2 Years", avgFee: "₹10L - ₹25L", category: "Management", icon: <FaChartPie size={40} className="text-success"/> },
  { title: "B.Des Fashion", duration: "4 Years", avgFee: "₹5L - ₹12L", category: "Design", icon: <FaPaintBrush size={40} className="text-warning"/> },
  { title: "BA LLB", duration: "5 Years", avgFee: "₹4L - ₹10L", category: "Law", icon: <FaBalanceScale size={40} className="text-info"/> },
];

const Courses = () => {
  const [filter, setFilter] = useState('All');

  const filteredCourses = filter === 'All' ? coursesData : coursesData.filter(c => c.category === filter);

  return (
    <div className="pt-2 bg-light min-vh-100 pb-5">
      <section className="bg-primary text-white py-5 text-center">
        <Container>
          <motion.h1 initial={{opacity:0, y:-20}} animate={{opacity:1, y:0}}>Explore Popular Courses</motion.h1>
          <p className="fs-5 opacity-75 mb-4">Find the perfect course that matches your passion and career goals.</p>
          <div className="mx-auto" style={{maxWidth: '600px'}}>
            <InputGroup size="lg" className="shadow">
              <InputGroup.Text className="bg-white border-0"><FaSearch color="var(--primary)"/></InputGroup.Text>
              <Form.Control type="text" placeholder="Search by course name, e.g. B.Tech" className="border-0 shadow-none"/>
            </InputGroup>
          </div>
        </Container>
      </section>

      <Container className="mt-5">
        <div className="d-flex justify-content-center gap-2 mb-5 flex-wrap">
          {['All', 'Engineering', 'Medical', 'Management', 'Design', 'Law'].map(cat => (
            <Badge 
              key={cat} 
              pill 
              bg={filter === cat ? 'warning' : 'white'} 
              text={filter === cat ? 'dark' : 'dark'}
              className="px-4 py-2 border shadow-sm"
              style={{cursor:'pointer', fontSize: '15px'}}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </Badge>
          ))}
        </div>

        <Row className="g-4">
          {filteredCourses.map((course, idx) => (
            <Col md={6} lg={4} key={idx}>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.1 }}>
                <Card className="custom-card h-100 border-0 p-3 text-center">
                  <div className="mt-3 mb-4">{course.icon}</div>
                  <Card.Body>
                    <Badge bg="light" text="primary" className="mb-2">{course.category}</Badge>
                    <Card.Title className="fw-bold mb-3">{course.title}</Card.Title>
                    <div className="d-flex justify-content-around text-muted small border-top pt-3 mx-2">
                      <div>
                        <div className="fw-bold text-dark">{course.duration}</div>
                        <div>Duration</div>
                      </div>
                      <div className="border-start"></div>
                      <div>
                        <div className="fw-bold text-dark">{course.avgFee}</div>
                        <div>Avg. Fee</div>
                      </div>
                    </div>
                  </Card.Body>
                  <Card.Footer className="bg-white border-0 pt-0">
                    <button className="btn btn-outline-primary rounded-pill w-100">View Details</button>
                  </Card.Footer>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default Courses;
