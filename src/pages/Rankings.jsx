import React from 'react';
import { Container, Row, Col, Card, ProgressBar, Badge } from 'react-bootstrap';

const Rankings = () => {
  const ranks = [
    { rank: 1, name: 'IIT Madras', score: 98.2 },
    { rank: 2, name: 'IIT Delhi', score: 96.5 },
    { rank: 3, name: 'IIT Bombay', score: 95.8 },
    { rank: 4, name: 'IIT Kanpur', score: 92.1 },
    { rank: 5, name: 'IIT Kharagpur', score: 91.0 },
  ];

  return (
    <div className="pt-2 bg-light min-vh-100 pb-5">
      <Container className="pt-5">
        <h2 className="fw-bold text-primary text-center mb-4">College Rankings 2026</h2>
        <Card className="border-0 shadow-sm">
          <Card.Body className="p-0">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-primary">
                <tr>
                  <th className="px-4 py-3">Rank</th>
                  <th>Institute Name</th>
                  <th>Category</th>
                  <th>NIRF Score</th>
                </tr>
              </thead>
              <tbody>
                {ranks.map(r => (
                  <tr key={r.rank}>
                    <td className="px-4 fw-bold fs-5 text-primary">#{r.rank}</td>
                    <td className="fw-bold">{r.name}</td>
                    <td><Badge bg="info">Engineering</Badge></td>
                    <td className="pe-4">
                      <div className="d-flex align-items-center">
                        <ProgressBar now={r.score} className="w-50 me-2" variant="warning" />
                        <span className="fw-bold">{r.score}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};
export default Rankings;
