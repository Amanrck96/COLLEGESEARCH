import React, { useState, useContext, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Table, Button, Badge, InputGroup, Tab, Nav } from 'react-bootstrap';
import { FaUserGraduate, FaSearch, FaMapMarkerAlt, FaBook, FaHistory, FaFolderOpen, FaArrowLeft, FaRegStickyNote, FaTrash } from 'react-icons/fa';
import { AuthContext } from '../contexts/AuthContext';
import { CollegeContext } from '../contexts/CollegeContext';
import { Link } from 'react-router-dom';

const StudentProfilePanel = () => {
  const { students, activityLogs, deleteStudent, updateStudentNotes, currentUser, logActivity } = useContext(AuthContext);
  const { colleges } = useContext(CollegeContext);
  
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [search, setSearch] = useState('');
  const [filterState, setFilterState] = useState('');
  const [filterCourse, setFilterCourse] = useState('');
  const [notesInput, setNotesInput] = useState('');

  useEffect(() => {
    if (currentUser) {
      logActivity(currentUser.name, currentUser.role, "Page Visit", "Opened separate Student Profile Panel page");
    }
  }, []);

  const handleSelectStudent = (s) => {
    setSelectedStudent(s);
    setNotesInput(s.adminNotes || '');
  };

  const handleSaveNotes = () => {
    if (!currentUser || currentUser.role === 'viewer') {
      alert("Permission Denied: Viewers cannot save notes.");
      return;
    }
    updateStudentNotes(selectedStudent.id, notesInput);
    setSelectedStudent(prev => ({ ...prev, adminNotes: notesInput }));
    alert("Notes saved successfully!");
  };

  const handleDelete = (id, name) => {
    if (!currentUser || !['superadmin', 'admin'].includes(currentUser.role.toLowerCase())) {
      alert("Permission Denied: Only Admins can delete student profiles.");
      return;
    }
    if (window.confirm(`Are you sure you want to delete student profile for ${name}?`)) {
      deleteStudent(id);
      setSelectedStudent(null);
      alert("Student profile deleted.");
    }
  };

  const filteredStudents = students.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase()) || 
                          s.email.toLowerCase().includes(search.toLowerCase()) ||
                          s.mobile.includes(search);
    const matchesState = filterState ? s.state === filterState : true;
    const matchesCourse = filterCourse ? s.courseInterest === filterCourse : true;
    return matchesSearch && matchesState && matchesCourse;
  });

  // Unique options for dropdown filters
  const uniqueStates = [...new Set(students.map(s => s.state).filter(Boolean))];
  const uniqueCourses = [...new Set(students.map(s => s.courseInterest).filter(Boolean))];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6' }} className="py-4">
      <Container>
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div className="d-flex align-items-center">
            <Link to="/admin" className="btn btn-outline-secondary btn-sm rounded-circle me-3 p-2 d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }}>
              <FaArrowLeft />
            </Link>
            <div>
              <h3 className="fw-bold mb-0 text-dark d-flex align-items-center">
                <FaUserGraduate className="text-primary me-2" /> Student Profile Management Panel
              </h3>
              <p className="text-secondary small mb-0">Separate dashboard specifically for managing student credentials, search logs, and activity telemetry.</p>
            </div>
          </div>
          <Badge bg="info" className="py-2 px-3 fs-6 rounded-pill">
            Captured Profiles: {students.length}
          </Badge>
        </div>

        <Row>
          {/* List Section */}
          <Col lg={4}>
            <Card className="border-0 shadow-sm p-4 mb-4">
              <h5 className="fw-bold text-dark mb-3">Filter & Search Records</h5>
              <Form className="mb-4">
                <Form.Group className="mb-3">
                  <InputGroup size="sm">
                    <InputGroup.Text><FaSearch className="text-muted"/></InputGroup.Text>
                    <Form.Control 
                      placeholder="Search name, mobile..." 
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </InputGroup>
                </Form.Group>

                <Row className="g-2">
                  <Col xs={6}>
                    <Form.Select size="sm" value={filterState} onChange={(e) => setFilterState(e.target.value)}>
                      <option value="">All States</option>
                      {uniqueStates.map(st => <option key={st} value={st}>{st}</option>)}
                    </Form.Select>
                  </Col>
                  <Col xs={6}>
                    <Form.Select size="sm" value={filterCourse} onChange={(e) => setFilterCourse(e.target.value)}>
                      <option value="">All Courses</option>
                      {uniqueCourses.map(c => <option key={c} value={c}>{c}</option>)}
                    </Form.Select>
                  </Col>
                </Row>
              </Form>

              <div className="list-group list-group-flush" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                {filteredStudents.map(s => (
                  <button
                    key={s.id}
                    onClick={() => handleSelectStudent(s)}
                    className={`list-group-item list-group-item-action border-0 p-3 rounded mb-2 text-start ${selectedStudent?.id === s.id ? 'bg-primary text-white' : 'bg-light bg-opacity-50 border'}`}
                  >
                    <div className="fw-bold">{s.name}</div>
                    <div className={`small ${selectedStudent?.id === s.id ? 'text-white-50' : 'text-muted'}`}>{s.email}</div>
                    <div className="mt-2 d-flex justify-content-between align-items-center">
                      <Badge bg={selectedStudent?.id === s.id ? 'light' : 'primary'} text={selectedStudent?.id === s.id ? 'dark' : 'white'}>
                        {s.courseInterest}
                      </Badge>
                      <span className="small text-muted" style={{ fontSize: '11px', color: selectedStudent?.id === s.id ? '#fff !important' : '' }}>
                        {s.city}
                      </span>
                    </div>
                  </button>
                ))}
                {filteredStudents.length === 0 && (
                  <div className="text-center py-4 text-muted small">No student records found.</div>
                )}
              </div>
            </Card>
          </Col>

          {/* Details Section */}
          <Col lg={8}>
            {selectedStudent ? (
              <Card className="border-0 shadow-sm p-4">
                <div className="d-flex justify-content-between align-items-start border-bottom pb-3 mb-4">
                  <div>
                    <h4 className="fw-bold text-primary mb-1">{selectedStudent.name}</h4>
                    <span className="text-muted small"><FaMapMarkerAlt className="text-danger me-1"/>{selectedStudent.city}, {selectedStudent.state}</span>
                  </div>
                  <Button variant="outline-danger" size="sm" onClick={() => handleDelete(selectedStudent.id, selectedStudent.name)}>
                    <FaTrash className="me-1" /> Delete Profile
                  </Button>
                </div>

                <Row className="g-3 mb-4">
                  <Col md={6}>
                    <div className="bg-light p-3 rounded border">
                      <div className="text-muted small">EMAIL</div>
                      <div className="fw-bold">{selectedStudent.email}</div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="bg-light p-3 rounded border">
                      <div className="text-muted small">PHONE</div>
                      <div className="fw-bold">{selectedStudent.mobile}</div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="bg-light p-3 rounded border">
                      <div className="text-muted small">COURSE INTEREST</div>
                      <div className="fw-bold text-success">{selectedStudent.courseInterest}</div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="bg-light p-3 rounded border">
                      <div className="text-muted small">EXAM INTEREST</div>
                      <div className="fw-bold text-info">{selectedStudent.examInterest}</div>
                    </div>
                  </Col>
                </Row>

                <Tab.Container defaultActiveKey="search">
                  <Nav variant="tabs" className="mb-3">
                    <Nav.Item><Nav.Link eventKey="search" className="small fw-bold"><FaSearch className="me-1"/> Search History</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="viewed" className="small fw-bold"><FaBook className="me-1"/> Viewed Colleges</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="saved" className="small fw-bold"><FaFolderOpen className="me-1"/> Saved Colleges</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="downloads" className="small fw-bold"><FaHistory className="me-1"/> Downloads</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="notes" className="small fw-bold"><FaRegStickyNote className="me-1"/> Admin Notes</Nav.Link></Nav.Item>
                  </Nav>

                  <Tab.Content className="p-3 border rounded bg-light mb-3" style={{ minHeight: '180px' }}>
                    <Tab.Pane eventKey="search">
                      {selectedStudent.searchHistory?.length === 0 ? <div className="text-muted small py-3 text-center">No search query activity log found.</div> : (
                        <ul className="mb-0 ps-3">
                          {selectedStudent.searchHistory.map((q, i) => <li key={i} className="small py-1 text-dark">"{q}"</li>)}
                        </ul>
                      )}
                    </Tab.Pane>

                    <Tab.Pane eventKey="viewed">
                      {selectedStudent.viewedColleges?.length === 0 ? <div className="text-muted small py-3 text-center">No colleges viewed yet.</div> : (
                        <ul className="mb-0 ps-3">
                          {selectedStudent.viewedColleges.map((colId, i) => {
                            const name = colleges.find(c => String(c.id) === String(colId))?.name || `College ID ${colId}`;
                            return <li key={i} className="small py-1 text-primary fw-semibold">{name}</li>;
                          })}
                        </ul>
                      )}
                    </Tab.Pane>

                    <Tab.Pane eventKey="saved">
                      {selectedStudent.savedColleges?.length === 0 ? <div className="text-muted small py-3 text-center">No bookmarks saved yet.</div> : (
                        <div className="d-flex flex-wrap gap-2 py-2">
                          {selectedStudent.savedColleges.map((colId, i) => {
                            const name = colleges.find(c => String(c.id) === String(colId))?.name || `College ID ${colId}`;
                            return <Badge key={i} bg="primary" className="py-2 px-3">{name}</Badge>;
                          })}
                        </div>
                      )}
                    </Tab.Pane>

                    <Tab.Pane eventKey="downloads">
                      {selectedStudent.downloadHistory?.length === 0 ? <div className="text-muted small py-3 text-center">No downloaded items.</div> : (
                        <ul className="mb-0 ps-3">
                          {selectedStudent.downloadHistory.map((dl, i) => <li key={i} className="small py-1 text-dark">Downloaded {dl}</li>)}
                        </ul>
                      )}
                    </Tab.Pane>

                    <Tab.Pane eventKey="notes">
                      <Form.Group className="mb-3">
                        <Form.Label className="small fw-semibold text-muted">Admin counseling tracking notes:</Form.Label>
                        <Form.Control 
                          as="textarea" 
                          rows={3} 
                          value={notesInput} 
                          onChange={(e) => setNotesInput(e.target.value)}
                          placeholder="Write phone-call logs or feedback notes..."
                        />
                      </Form.Group>
                      <Button size="sm" variant="success" onClick={handleSaveNotes}>
                        Save Follow-up Notes
                      </Button>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </Card>
            ) : (
              <Card className="border-0 shadow-sm p-5 text-center text-secondary">
                Select a student record from the left listing panel to load details, search trails, and editable counselor notes.
              </Card>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StudentProfilePanel;
