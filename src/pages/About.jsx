import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CountUp = ({ end, duration=2, suffix="" }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });
  useEffect(() => {
    let startTime;
    let animationFrame;
    if (inView) {
      const update = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);
        if (progress < 1) {
          setCount(Math.floor(end * progress));
          animationFrame = requestAnimationFrame(update);
        } else {
          setCount(end);
        }
      };
      animationFrame = requestAnimationFrame(update);
    }
    return () => cancelAnimationFrame(animationFrame);
  }, [inView, end, duration]);
  
  return <span ref={ref}>{count}{suffix}</span>;
}

const About = () => {
  return (
    <div className="pt-2 bg-light min-vh-100 pb-5">
      <section className="bg-white py-5 text-center">
        <Container>
          <motion.h1 initial={{y:-20, opacity:0}} animate={{y:0, opacity:1}} className="fw-bold text-primary mb-4">About CollegeSearch</motion.h1>
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2}} className="fs-5 text-muted mx-auto" style={{maxWidth: '800px', lineHeight: '1.8'}}>
            Our mission is to empower students to make informed decisions about their education and career. We provide accurate, updated, and comprehensive information about colleges, courses, and exams across India.
          </motion.p>
        </Container>
      </section>

      <Container className="mt-5">
        <Row className="g-4 text-center">
          <Col md={4}>
            <motion.div whileHover={{y:-10}}>
              <Card className="border-0 shadow-sm h-100 p-4">
                <h2 className="display-4 fw-bold text-warning mb-3"><CountUp end={5000} suffix="+" /></h2>
                <h5 className="fw-bold text-dark">Colleges Listed</h5>
                <p className="text-muted small">Comprehensive database of institutes across streams.</p>
              </Card>
            </motion.div>
          </Col>
          <Col md={4}>
            <motion.div whileHover={{y:-10}}>
              <Card className="border-0 shadow-sm h-100 p-4">
                <h2 className="display-4 fw-bold text-success mb-3"><CountUp end={1} suffix="M+" /></h2>
                <h5 className="fw-bold text-dark">Students Helped</h5>
                <p className="text-muted small">Assisting millions in achieving their academic goals.</p>
              </Card>
            </motion.div>
          </Col>
          <Col md={4}>
            <motion.div whileHover={{y:-10}}>
              <Card className="border-0 shadow-sm h-100 p-4">
                <h2 className="display-4 fw-bold text-info mb-3"><CountUp end={100} suffix="%" /></h2>
                <h5 className="fw-bold text-dark">Verified Reviews</h5>
                <p className="text-muted small">Real feedback from actual students and alumni.</p>
              </Card>
            </motion.div>
          </Col>
        </Row>

        <motion.div 
          initial={{scale: 0.9, opacity:0}} 
          whileInView={{scale: 1, opacity:1}} 
          viewport={{once:true}}
          className="mt-5 bg-primary text-white p-5 rounded-4 text-center shadow"
        >
          <h3 className="fw-bold mb-3">Ready to Start Your Journey?</h3>
          <p className="mb-4 opacity-75">Join thousands of students who have found their dream college through our platform.</p>
          <button className="btn btn-warning btn-lg rounded-pill fw-bold shadow-sm" style={{backgroundColor: 'var(--accent-gold)'}}>Explore Colleges</button>
        </motion.div>
      </Container>
    </div>
  );
};
export default About;
