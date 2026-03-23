import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Badge, Button } from 'react-bootstrap';
import { FaExchangeAlt, FaTimes } from 'react-icons/fa';

const CompareColleges = () => {
  return (
    <div className="pt-2 min-vh-100 bg-white pb-5">
      <div className="bg-primary text-white py-5 text-center">
        <Container>
          <h1 className="fw-bold mb-3"><FaExchangeAlt className="me-3"/>Compare Colleges</h1>
          <p className="fs-5 opacity-75">Compare up to 3 colleges side-by-side on fees, placement, and ranking.</p>
        </Container>
      </div>
      <Container className="my-5">
        <Row className="g-3">
          <Col md={4}>
            <Card className="border shadow-sm text-center p-4">
              <h5 className="fw-bold text-primary mb-3">IIT Delhi</h5>
              <Form.Select className="mb-3"><option>B.Tech Computer Science</option></Form.Select>
              <div className="d-flex justify-content-center"><Badge bg="danger" className="p-2"><FaTimes className="me-1"/> Remove</Badge></div>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="border shadow-sm text-center p-4">
              <h5 className="fw-bold text-primary mb-3">BITS Pilani</h5>
              <Form.Select className="mb-3"><option>B.E. Computer Science</option></Form.Select>
              <div className="d-flex justify-content-center"><Badge bg="danger" className="p-2"><FaTimes className="me-1"/> Remove</Badge></div>
            </Card>
          </Col>
          <Col md={4} className="d-flex align-items-center justify-content-center">
            <Button variant="outline-primary" className="border-dashed p-4 w-100 h-100 text-muted fs-5 fw-bold bg-light">
              + Add College to Compare
            </Button>
          </Col>
        </Row>
        
        <Card className="border-0 shadow-sm mt-5 overflow-auto">
          <table className="table table-bordered text-center align-middle mb-0">
            <thead className="table-light text-primary">
              <tr>
                <th className="w-25 text-start ps-4">Parameter</th>
                <th className="fw-bold fs-5">IIT Delhi</th>
                <th className="fw-bold fs-5">BITS Pilani</th>
                <th className="fw-bold fs-5 text-muted fst-italic">Select College</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="text-start ps-4 text-muted">Total Fees</th>
                <td className="fw-bold">₹8.5 Lakhs</td>
                <td className="fw-bold">₹22.5 Lakhs</td>
                <td>-</td>
              </tr>
              <tr>
                <th className="text-start ps-4 text-muted">Placement (Avg)</th>
                <td className="fw-bold text-success">₹25 LPA</td>
                <td className="fw-bold text-success">₹20 LPA</td>
                <td>-</td>
              </tr>
              <tr>
                <th className="text-start ps-4 text-muted">NIRF Ranking</th>
                <td>#2</td>
                <td>#15</td>
                <td>-</td>
              </tr>
              <tr>
                <th className="text-start ps-4 text-muted">Exams Accepted</th>
                <td>JEE Advanced</td>
                <td>BITSAT</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </Card>
      </Container>
    </div>
  );
};
export default CompareColleges;
