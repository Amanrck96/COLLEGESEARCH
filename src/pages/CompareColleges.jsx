import React, { useState, useContext } from 'react';
import { Container, Row, Col, Card, Form, Badge, Button, ListGroup } from 'react-bootstrap';
import { FaExchangeAlt, FaTimes } from 'react-icons/fa';
import { CollegeContext } from '../contexts/CollegeContext';
import CollegeImg from '../components/CollegeImg';

const CompareColleges = () => {
  const { colleges } = useContext(CollegeContext);
  const [selectedIds, setSelectedIds] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);

  const selectedColleges = selectedIds
    .map(id => colleges.find(c => String(c.id) === String(id)))
    .filter(Boolean);

  const filteredSuggestions = React.useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return (colleges || [])
      .filter(c => !selectedIds.includes(c.id) && (
        c.name.toLowerCase().includes(q) || 
        (c.location && c.location.toLowerCase().includes(q))
      ))
      .slice(0, 8);
  }, [colleges, searchQuery, selectedIds]);

  const handleSelect = (id) => {
    if (selectedIds.length < 3) {
      setSelectedIds(prev => [...prev, id]);
    }
    setSearchQuery('');
    setShowSearch(false);
  };

  const handleRemove = (id) => {
    setSelectedIds(prev => prev.filter(x => x !== id));
  };

  return (
    <div className="pt-2 min-vh-100 bg-light pb-5">
      <div className="bg-primary text-white py-5 text-center">
        <Container>
          <h1 className="fw-bold mb-3"><FaExchangeAlt className="me-3"/>Compare Colleges</h1>
          <p className="fs-5 opacity-75">Compare up to 3 colleges side-by-side on fees, placement, and ranking.</p>
        </Container>
      </div>

      <Container className="my-5">
        {/* Selection Area */}
        <Row className="g-4 justify-content-center">
          {selectedColleges.map((college) => (
            <Col md={4} key={college.id}>
              <Card className="border-0 shadow-sm text-center h-100 position-relative p-3">
                <Button 
                  variant="link" 
                  className="position-absolute top-0 end-0 text-muted p-2"
                  onClick={() => handleRemove(college.id)}
                  style={{ zIndex: 10 }}
                >
                  <FaTimes size={18} />
                </Button>
                <div style={{ height: '140px', borderRadius: '8px', overflow: 'hidden' }} className="mb-3">
                  <CollegeImg college={college} />
                </div>
                <h6 className="fw-bold text-primary mb-1 text-truncate">{college.name}</h6>
                <span className="text-muted small mb-2 d-block">{college.location}, {college.state}</span>
                <div className="mt-auto">
                  <Badge bg="info" className="py-2 px-3 w-100">{college.type}</Badge>
                </div>
              </Card>
            </Col>
          ))}

          {selectedColleges.length < 3 && (
            <Col md={4}>
              <Card className="border-dashed border-2 text-center h-100 d-flex flex-column align-items-center justify-content-center p-5 bg-white shadow-sm" style={{ minHeight: '240px' }}>
                {!showSearch ? (
                  <Button 
                    variant="outline-primary" 
                    className="rounded-pill px-4 py-2"
                    onClick={() => setShowSearch(true)}
                  >
                    + Add College
                  </Button>
                ) : (
                  <div className="w-100 position-relative">
                    <Form.Control 
                      type="text" 
                      placeholder="Search college name..." 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      autoFocus
                      className="rounded-pill"
                    />
                    {filteredSuggestions.length > 0 && (
                      <ListGroup className="position-absolute w-100 mt-2 shadow-lg text-start" style={{ zIndex: 100, maxHeight: '200px', overflowY: 'auto' }}>
                        {filteredSuggestions.map(c => (
                          <ListGroup.Item 
                            key={c.id} 
                            action 
                            onClick={() => handleSelect(c.id)}
                            className="small py-2 text-truncate"
                          >
                            <strong>{c.name}</strong> <span className="text-muted">({c.location})</span>
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                    )}
                    <Button 
                      variant="link" 
                      className="text-muted mt-2 btn-sm text-decoration-none"
                      onClick={() => { setShowSearch(false); setSearchQuery(''); }}
                    >
                      Cancel
                    </Button>
                  </div>
                )}
              </Card>
            </Col>
          )}
        </Row>

        {/* Comparison Table */}
        {selectedColleges.length > 0 && (
          <Card className="border-0 shadow-sm mt-5 overflow-auto">
            <table className="table table-bordered text-center align-middle mb-0">
              <thead className="table-light text-primary">
                <tr>
                  <th className="w-25 text-start ps-4">Parameter</th>
                  {selectedColleges.map(c => (
                    <th key={c.id} className="fw-bold fs-6 text-truncate" style={{ maxWidth: '200px' }}>{c.name}</th>
                  ))}
                  {Array.from({ length: 3 - selectedColleges.length }).map((_, i) => (
                    <th key={i} className="text-muted fst-italic small">Empty Slot</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="text-start ps-4 text-muted">Fees</th>
                  {selectedColleges.map(c => <td key={c.id} className="fw-bold text-dark">{c.fees || 'Contact for details'}</td>)}
                  {Array.from({ length: 3 - selectedColleges.length }).map((_, i) => <td key={i}>-</td>)}
                </tr>
                <tr>
                  <th className="text-start ps-4 text-muted">Avg. Placement Package</th>
                  {selectedColleges.map(c => <td key={c.id} className="fw-bold text-success">{c.averagePackage || 'Contact for details'}</td>)}
                  {Array.from({ length: 3 - selectedColleges.length }).map((_, i) => <td key={i}>-</td>)}
                </tr>
                <tr>
                  <th className="text-start ps-4 text-muted">NIRF Rank / Ranking</th>
                  {selectedColleges.map(c => <td key={c.id} className="fw-medium">#{c.ranking || 'N/A'}</td>)}
                  {Array.from({ length: 3 - selectedColleges.length }).map((_, i) => <td key={i}>-</td>)}
                </tr>
                <tr>
                  <th className="text-start ps-4 text-muted">Rating</th>
                  {selectedColleges.map(c => <td key={c.id} className="fw-bold text-warning">★ {c.rating || 'N/A'}</td>)}
                  {Array.from({ length: 3 - selectedColleges.length }).map((_, i) => <td key={i}>-</td>)}
                </tr>
                <tr>
                  <th className="text-start ps-4 text-muted">Location</th>
                  {selectedColleges.map(c => <td key={c.id}>{c.location}, {c.state}</td>)}
                  {Array.from({ length: 3 - selectedColleges.length }).map((_, i) => <td key={i}>-</td>)}
                </tr>
                <tr>
                  <th className="text-start ps-4 text-muted">Exams Accepted</th>
                  {selectedColleges.map(c => <td key={c.id} className="small">{c.exams || 'Direct Admission'}</td>)}
                  {Array.from({ length: 3 - selectedColleges.length }).map((_, i) => <td key={i}>-</td>)}
                </tr>
              </tbody>
            </table>
          </Card>
        )}
      </Container>
    </div>
  );
};

export default CompareColleges;
