import React, { useState } from 'react';
import { Container, Row, Col, Nav, Table, Button, Form, Card } from 'react-bootstrap';
import { FaEdit, FaTrash, FaPlus, FaUpload } from 'react-icons/fa';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showAddCollege, setShowAddCollege] = useState(false);

  const [colleges, setColleges] = useState([
    { id: 1, name: 'All India Management Association', shortName: 'AIMA', type: 'Online', rating: 5, ranking: 0 },
    { id: 2, name: 'One School of Business', shortName: 'ONESB', type: 'Full Time', rating: 5, ranking: 0 },
    { id: 3, name: 'Ashoka School of Business', shortName: 'ASB', type: 'Full Time', rating: 5, ranking: 10 },
    { id: 4, name: 'Flame University', shortName: 'FU', type: 'Full Time', rating: 4.9, ranking: 10 },
    { id: 5, name: 'Dr. P. A. Inamdar University', shortName: 'DRPAIU', type: 'Full Time', rating: 5, ranking: 10 },
    { id: 6, name: 'DES Pune University', shortName: 'DESPU', type: 'Full Time', rating: 4.8, ranking: 6 },
  ]);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      {/* Top Navbar */}
      <div className="bg-white border-bottom px-4 py-3 d-flex align-items-center justify-content-between sticky-top">
        <div className="d-flex align-items-center">
          <div className="fw-bold fs-5 me-2" style={{color: '#1a43bf'}}>
            <img src="https://via.placeholder.com/30" alt="logo" className="me-2" style={{borderRadius:'5px'}}/>
            ADMISSION IN MBA
          </div>
        </div>
        <div className="d-flex align-items-center">
          <span className="me-4 text-muted fw-semibold">Blog</span>
          <span className="me-4 text-muted fw-semibold">Compare</span>
        </div>
      </div>

      <Row className="g-0">
        {/* Sidebar */}
        <Col md={2} className="bg-white border-end" style={{ minHeight: 'calc(100vh - 70px)' }}>
          <div className="p-3">
            <h6 className="text-muted fw-bold mb-3 d-flex align-items-center">
              <span className="me-2">🎓</span> Admin Panel
            </h6>
            <Nav className="flex-column">
              <Nav.Link 
                className={`py-2 px-3 rounded mb-1 ${activeTab === 'dashboard' ? 'bg-light text-dark fw-bold' : 'text-secondary'}`}
                onClick={() => setActiveTab('dashboard')}
              >
                <span className="me-2">㗊</span> Dashboard
              </Nav.Link>
              <Nav.Link className="py-2 px-3 rounded mb-1 text-secondary">
                <span className="me-2">📝</span> Blog Manager
              </Nav.Link>
              <Nav.Link className="py-2 px-3 rounded mb-1 text-secondary">
                <span className="me-2">📞</span> Contact
              </Nav.Link>
            </Nav>
          </div>
        </Col>

        {/* Main Content */}
        <Col md={10} className="p-4 bg-white">
          {activeTab === 'dashboard' && !showAddCollege && (
            <div>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                  <h4 className="fw-bold mb-1">Manage Colleges</h4>
                  <p className="text-secondary mb-0">Add or edit colleges information</p>
                </div>
                <Button variant="primary" onClick={() => setShowAddCollege(true)} className="px-4 py-2 fw-semibold rounded-3 d-flex align-items-center" style={{backgroundColor: '#1c4ed8', border: 'none'}}>
                  <FaPlus className="me-2" /> Add College
                </Button>
              </div>

              <Form.Control 
                type="text" 
                placeholder="Search by name or shortname" 
                className="mb-4 bg-light border-0 py-2"
                style={{ maxWidth: '400px' }}
              />

              <div className="table-responsive">
                <Table hover className="align-middle" style={{ borderCollapse: 'separate', borderSpacing: '0 8px' }}>
                  <thead>
                    <tr className="text-muted" style={{borderBottom: 'none'}}>
                      <th className="fw-normal" style={{border: 'none'}}>Name</th>
                      <th className="fw-normal" style={{border: 'none'}}>Short Name</th>
                      <th className="fw-normal" style={{border: 'none'}}>Type</th>
                      <th className="fw-normal" style={{border: 'none'}}>Rating</th>
                      <th className="fw-normal" style={{border: 'none'}}>Ranking</th>
                      <th className="fw-normal" style={{border: 'none'}}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {colleges.map((college) => (
                      <tr key={college.id} className="bg-white">
                        <td className="py-3" style={{borderTop: '1px solid #eee', borderBottom: '1px solid #eee'}}>{college.name}</td>
                        <td className="py-3 text-secondary" style={{borderTop: '1px solid #eee', borderBottom: '1px solid #eee'}}>{college.shortName}</td>
                        <td className="py-3 text-secondary" style={{borderTop: '1px solid #eee', borderBottom: '1px solid #eee'}}>{college.type}</td>
                        <td className="py-3 text-secondary" style={{borderTop: '1px solid #eee', borderBottom: '1px solid #eee'}}>{college.rating}</td>
                        <td className="py-3 text-secondary" style={{borderTop: '1px solid #eee', borderBottom: '1px solid #eee'}}>{college.ranking}</td>
                        <td className="py-3" style={{borderTop: '1px solid #eee', borderBottom: '1px solid #eee'}}>
                          <Button variant="link" className="p-0 text-primary me-3 text-decoration-none">
                            <FaEdit />
                          </Button>
                          <Button variant="link" className="p-0 text-danger text-decoration-none">
                            <FaTrash />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          )}

          {activeTab === 'dashboard' && showAddCollege && (
            <AddCollegeForm onCancel={() => setShowAddCollege(false)} />
          )}
        </Col>
      </Row>
    </div>
  );
};

const AddCollegeForm = ({ onCancel }) => {
  return (
    <div className="p-3">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="fw-bold" style={{color: '#15803d'}}>Basic Information</h5>
        <Button variant="link" className="text-muted text-decoration-none fs-5 p-0" onClick={onCancel}>✖</Button>
      </div>

      <Form>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label className="fw-semibold small">Name*</Form.Label>
              <Form.Control type="text" placeholder="College Name" className="py-2" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label className="fw-semibold small">Short Name*</Form.Label>
              <Form.Control type="text" placeholder="Short Name" className="py-2" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label className="fw-semibold small">About</Form.Label>
              <Form.Control as="textarea" rows={3} className="py-2" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold small">District*</Form.Label>
              <Form.Control type="text" placeholder="District" className="py-2" />
            </Form.Group>
            <Form.Group>
              <Form.Label className="fw-semibold small">Map URL</Form.Label>
              <Form.Control type="url" placeholder="Map URL" className="py-2" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label className="fw-semibold small">Address*</Form.Label>
              <Form.Control as="textarea" rows={2} className="py-2" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Row>
              <Col xs={6}>
                <Form.Group>
                  <Form.Label className="fw-semibold small">Brochure Link</Form.Label>
                  <Form.Control type="url" className="py-2" />
                </Form.Group>
              </Col>
              <Col xs={6}>
                <Form.Group>
                  <Form.Label className="fw-semibold small">Established</Form.Label>
                  <Form.Control type="text" className="py-2" />
                </Form.Group>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={6}>
            <Row>
              <Col xs={6}>
                <Form.Group>
                  <Form.Label className="fw-semibold small">Type*</Form.Label>
                  <Form.Select className="py-2">
                    <option>Online</option>
                    <option>Full Time</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col xs={6}>
                <Form.Group>
                  <Form.Label className="fw-semibold small">State*</Form.Label>
                  <Form.Select className="py-2">
                    <option>Select State</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <Row>
              <Col xs={6}>
                <Form.Group>
                  <Form.Label className="fw-semibold small">Affiliation</Form.Label>
                  <Form.Control type="text" className="py-2" />
                </Form.Group>
              </Col>
              <Col xs={6}>
                <Form.Group>
                  <Form.Label className="fw-semibold small">Ranking</Form.Label>
                  <Form.Control type="number" defaultValue={0} className="py-2" />
                </Form.Group>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Specializations & Links */}
        <Row className="mb-4">
          <Col md={6}>
            <Form.Group>
              <Form.Label className="fw-semibold small">Specializations*</Form.Label>
              <Form.Control type="text" placeholder="HR, Marketing, Finance..." className="py-2" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label className="fw-semibold small">Apply Now Link</Form.Label>
              <Form.Control type="url" placeholder="https://" className="py-2" />
            </Form.Group>
          </Col>
        </Row>

        {/* Highlights */}
        <div className="mb-4">
          <Form.Label className="fw-bold" style={{color: '#15803d'}}>Highlights</Form.Label>
          <div className="d-flex mb-2">
            <Form.Control type="text" className="py-2 me-2" />
            <Button variant="danger" className="px-3"><FaTrash /></Button>
          </div>
          <Button variant="primary" size="sm" className="px-3 py-2 fw-semibold" style={{backgroundColor: '#2563eb', border: 'none'}}>
            Add Highlights
          </Button>
        </div>

        {/* Top Recruiters */}
        <div className="mb-4">
          <Form.Label className="fw-bold" style={{color: '#15803d'}}>Top Recruiters</Form.Label>
          <div className="d-flex mb-2">
            <Form.Control type="text" className="py-2 me-2" />
            <Button variant="danger" className="px-3"><FaTrash /></Button>
          </div>
          <Button variant="primary" size="sm" className="px-3 py-2 fw-semibold" style={{backgroundColor: '#2563eb', border: 'none'}}>
            Add Top Recruiters
          </Button>
        </div>

        {/* Admission Process */}
        <div className="mb-4">
          <Button variant="primary" size="sm" className="px-3 py-2 fw-semibold" style={{backgroundColor: '#2563eb', border: 'none'}}>
            Add Admission Process
          </Button>
        </div>

        {/* Courses */}
        <div className="mb-4">
          <Form.Label className="fw-bold d-block" style={{color: '#15803d'}}>
            Courses <span className="text-danger fw-normal" style={{fontSize: '12px'}}>(at least one course is required)</span>
          </Form.Label>
          <Row className="mb-2">
            <Col xs={3}>
              <Form.Select className="py-2"><option>PGDM</option></Form.Select>
            </Col>
            <Col xs={2}>
              <Form.Control type="text" placeholder="Duration" defaultValue="2" className="py-2" />
            </Col>
            <Col xs={2}>
              <Form.Control type="text" placeholder="Fee" defaultValue="1.68" className="py-2" />
            </Col>
            <Col xs={3}>
              <Form.Control type="text" placeholder="Eligibility" className="py-2" />
            </Col>
            <Col xs={2}>
              <Form.Control type="number" placeholder="Ranking" defaultValue="0" className="py-2" />
            </Col>
          </Row>
          <Button variant="danger" className="w-100 mb-3 py-2 rounded-3 border-0"><FaTrash /></Button>
          <Button variant="primary" size="sm" className="px-3 py-2 fw-semibold" style={{backgroundColor: '#2563eb', border: 'none'}}>
            Add Course
          </Button>
        </div>

        {/* Social Links */}
        <Row className="mb-4">
          <Col md={3}>
            <Form.Group>
              <Form.Label className="fw-semibold small">Website</Form.Label>
              <Form.Control type="url" className="py-2" />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label className="fw-semibold small">Facebook</Form.Label>
              <Form.Control type="url" className="py-2" />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label className="fw-semibold small">Instagram</Form.Label>
              <Form.Control type="url" className="py-2" />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label className="fw-semibold small">LinkedIn</Form.Label>
              <Form.Control type="url" className="py-2" />
            </Form.Group>
          </Col>
        </Row>

        {/* Uploads */}
        <Row className="mb-5">
          <Col md={6}>
            <Form.Group>
              <Form.Label className="fw-semibold small">Upload Main Image*</Form.Label>
              <div className="border border-primary border-dashed rounded bg-light text-center p-4" style={{borderStyle: 'dashed', cursor: 'pointer', color: '#2563eb'}}>
                <FaUpload className="fs-4 mb-2" />
                <div>Image selected</div>
              </div>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label className="fw-semibold small">Brochure PDF</Form.Label>
              <div className="border border-primary border-dashed rounded bg-light text-center p-4" style={{borderStyle: 'dashed', cursor: 'pointer', color: '#2563eb'}}>
                <FaUpload className="fs-4 mb-2" />
                <div>Click to upload PDF or drag and drop</div>
              </div>
            </Form.Group>
          </Col>
        </Row>

        <Button variant="success" className="w-100 py-3 fw-bold fs-5 rounded-1" style={{backgroundColor: '#16a34a', border: 'none'}}>
          Update College
        </Button>

      </Form>
    </div>
  );
};

export default Admin;
