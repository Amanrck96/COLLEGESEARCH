import React, { useState, useContext, useEffect } from 'react';
import { Container, Row, Col, Nav, Table, Button, Form, Card } from 'react-bootstrap';
import { FaEdit, FaTrash, FaPlus, FaUpload } from 'react-icons/fa';
import { CollegeContext } from '../contexts/CollegeContext';
import { SiteContext } from '../contexts/SiteContext';
import { State, City } from 'country-state-city';

const Admin = () => {
  const { colleges, addCollege, updateCollege, deleteCollege } = useContext(CollegeContext);
  const { siteData, updateSiteData } = useContext(SiteContext);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  const [activeTab, setActiveTab] = useState('dashboard');
  const [showAddCollege, setShowAddCollege] = useState(false);
  const [editingCollege, setEditingCollege] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin123') {
      setIsAuthenticated(true);
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  };

  const handleEdit = (college) => {
    setEditingCollege(college);
    setShowAddCollege(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this college?")) {
      deleteCollege(id);
    }
  };

  const handleSaveCollege = (data) => {
    if (editingCollege) {
      updateCollege(editingCollege.id, data);
    } else {
      addCollege(data);
    }
    setShowAddCollege(false);
    setEditingCollege(null);
  };

  if (!isAuthenticated) {
    return (
      <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', backgroundColor: '#f3f4f6' }}>
        <Card style={{ width: '400px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
          <Card.Body className="p-5">
            <div className="text-center mb-4">
              <h4 className="fw-bold" style={{color: '#1a43bf'}}>Admin Login</h4>
              <p className="text-muted small">Please enter your credentials to access the admin center</p>
            </div>
            {loginError && <div className="alert alert-danger py-2 small">Invalid username or password.</div>}
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3">
                <Form.Label className="small fw-semibold">Username</Form.Label>
                <Form.Control type="text" placeholder="admin" value={username} onChange={(e) => setUsername(e.target.value)} required />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label className="small fw-semibold">Password</Form.Label>
                <Form.Control type="password" placeholder="admin123" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </Form.Group>
              <Button type="submit" variant="primary" className="w-100 fw-bold py-2" style={{backgroundColor: '#1c4ed8', border: 'none'}}>
                Login
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      {/* Top Navbar */}
      <div className="bg-white border-bottom px-4 py-3 d-flex align-items-center justify-content-between sticky-top">
        <div className="d-flex align-items-center">
          <div className="fw-bold fs-5 me-2" style={{color: '#1a43bf'}}>
            <img src="https://via.placeholder.com/30" alt="logo" className="me-2" style={{borderRadius:'5px'}}/>
            CollegeSearchs
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
              <Nav.Link 
                className={`py-2 px-3 rounded mb-1 ${activeTab === 'siteSettings' ? 'bg-light text-dark fw-bold' : 'text-secondary'}`}
                onClick={() => setActiveTab('siteSettings')}
              >
                <span className="me-2">⚙️</span> Site Settings
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
                <Button variant="primary" onClick={() => { setEditingCollege(null); setShowAddCollege(true); }} className="px-4 py-2 fw-semibold rounded-3 d-flex align-items-center" style={{backgroundColor: '#1c4ed8', border: 'none'}}>
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
                    {(colleges || []).map((college) => (
                      <tr key={college.id} className="bg-white">
                        <td className="py-3" style={{borderTop: '1px solid #eee', borderBottom: '1px solid #eee'}}>{college.name}</td>
                        <td className="py-3 text-secondary" style={{borderTop: '1px solid #eee', borderBottom: '1px solid #eee'}}>{college.shortName || '-'}</td>
                        <td className="py-3 text-secondary" style={{borderTop: '1px solid #eee', borderBottom: '1px solid #eee'}}>{college.type}</td>
                        <td className="py-3 text-secondary" style={{borderTop: '1px solid #eee', borderBottom: '1px solid #eee'}}>{college.rating}</td>
                        <td className="py-3 text-secondary" style={{borderTop: '1px solid #eee', borderBottom: '1px solid #eee'}}>{college.ranking || 0}</td>
                        <td className="py-3" style={{borderTop: '1px solid #eee', borderBottom: '1px solid #eee'}}>
                          <Button variant="link" className="p-0 text-primary me-3 text-decoration-none" onClick={() => handleEdit(college)}>
                            <FaEdit />
                          </Button>
                          <Button variant="link" className="p-0 text-danger text-decoration-none" onClick={() => handleDelete(college.id)}>
                            <FaTrash />
                          </Button>
                        </td>
                      </tr>
                    ))}
                    {!colleges?.length && (
                      <tr><td colSpan="6" className="text-center py-4 text-muted">No colleges found. Add one!</td></tr>
                    )}
                  </tbody>
                </Table>
              </div>
            </div>
          )}

          {activeTab === 'dashboard' && showAddCollege && (
            <AddCollegeForm 
              college={editingCollege} 
              onCancel={() => { setShowAddCollege(false); setEditingCollege(null); }} 
              onSave={handleSaveCollege} 
            />
          )}

          {activeTab === 'siteSettings' && (
            <SiteSettingsForm 
              siteData={siteData} 
              onSave={(newData) => updateSiteData(newData)} 
            />
          )}
        </Col>
      </Row>
    </div>
  );
};

const AddCollegeForm = ({ college, onCancel, onSave }) => {
  const indianStates = State.getStatesOfCountry("IN");
  const [selectedState, setSelectedState] = useState(college?.state || '');
  const [cities, setCities] = useState([]);

  useEffect(() => {
    if (selectedState) {
      const stateObj = indianStates.find(s => s.name === selectedState);
      if (stateObj) {
        setCities(City.getCitiesOfState("IN", stateObj.isoCode));
      } else {
        setCities([]);
      }
    } else {
      setCities([]);
    }
  }, [selectedState, indianStates]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const data = {
      name: fd.get('name'),
      shortName: fd.get('shortName'),
      about: fd.get('about'),
      location: fd.get('district'),
      mapUrl: fd.get('mapUrl'),
      address: fd.get('address'),
      brochureLink: fd.get('brochureLink'),
      established: fd.get('established'),
      type: fd.get('type'),
      state: fd.get('state'),
      affiliation: fd.get('affiliation'),
      ranking: fd.get('ranking') ? parseInt(fd.get('ranking')) : 0,
      specializations: fd.get('specializations'),
      applyNowLink: fd.get('applyNowLink'),
      highlights: fd.get('highlights'),
      topRecruiters: fd.get('topRecruiters'),
      courseName: fd.get('courseName'),
      courseDuration: fd.get('courseDuration'),
      fees: fd.get('courseFee') ? `₹${fd.get('courseFee')} Lacs/Year` : "₹10 Lacs/Year",
      courseEligibility: fd.get('courseEligibility'),
      website: fd.get('website'),
      facebook: fd.get('facebook'),
      instagram: fd.get('instagram'),
      linkedin: fd.get('linkedin'),
      rating: college?.rating || 4.5, // keep existing rating
      exams: college?.exams || "None", // exams might be derived or hardcoded
      img: college?.img || "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=400"
    };
    onSave(data);
  };

  return (
    <div className="p-3">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="fw-bold" style={{color: '#15803d'}}>{college ? "Edit Basic Information" : "Basic Information"}</h5>
        <Button variant="link" className="text-muted text-decoration-none fs-5 p-0" onClick={onCancel}>✖</Button>
      </div>

      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label className="fw-semibold small">Name*</Form.Label>
              <Form.Control name="name" type="text" placeholder="College Name" defaultValue={college?.name || ''} className="py-2" required />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label className="fw-semibold small">Short Name*</Form.Label>
              <Form.Control name="shortName" type="text" placeholder="Short Name" defaultValue={college?.shortName || ''} className="py-2" required />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label className="fw-semibold small">About</Form.Label>
              <Form.Control name="about" as="textarea" rows={3} defaultValue={college?.about || ''} className="py-2" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold small">District/City*</Form.Label>
              <Form.Select name="district" defaultValue={college?.location || ''} className="py-2" required>
                <option value="">Select City</option>
                {cities.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
              </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Label className="fw-semibold small">Map URL</Form.Label>
              <Form.Control name="mapUrl" type="url" placeholder="Map URL" defaultValue={college?.mapUrl || ''} className="py-2" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label className="fw-semibold small">Address*</Form.Label>
              <Form.Control name="address" as="textarea" rows={2} defaultValue={college?.address || ''} className="py-2" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Row>
              <Col xs={6}>
                <Form.Group>
                  <Form.Label className="fw-semibold small">Brochure Link</Form.Label>
                  <Form.Control name="brochureLink" type="url" defaultValue={college?.brochureLink || ''} className="py-2" />
                </Form.Group>
              </Col>
              <Col xs={6}>
                <Form.Group>
                  <Form.Label className="fw-semibold small">Established</Form.Label>
                  <Form.Control name="established" type="text" defaultValue={college?.established || ''} className="py-2" />
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
                  <Form.Select name="type" className="py-2" defaultValue={college?.type || 'Government'}>
                    <option>Government</option>
                    <option>Private</option>
                    <option>Autonomous</option>
                    <option>Public-Private</option>
                    <option>Online</option>
                    <option>Full Time</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col xs={6}>
                <Form.Group>
                  <Form.Label className="fw-semibold small">State*</Form.Label>
                  <Form.Select 
                    name="state" 
                    className="py-2" 
                    value={selectedState} 
                    onChange={(e) => setSelectedState(e.target.value)}
                    required
                  >
                    <option value="">Select State</option>
                    {indianStates.map(st => <option key={st.isoCode} value={st.name}>{st.name}</option>)}
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
                  <Form.Control name="affiliation" type="text" defaultValue={college?.affiliation || ''} className="py-2" />
                </Form.Group>
              </Col>
              <Col xs={6}>
                <Form.Group>
                  <Form.Label className="fw-semibold small">Ranking</Form.Label>
                  <Form.Control name="ranking" type="number" defaultValue={college?.ranking || 0} className="py-2" />
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
              <Form.Control name="specializations" type="text" placeholder="HR, Marketing, Finance..." defaultValue={college?.specializations || 'HR, Marketing, Finance, Operations'} className="py-2" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label className="fw-semibold small">Apply Now Link</Form.Label>
              <Form.Control name="applyNowLink" type="url" placeholder="https://" defaultValue={college?.applyNowLink || ''} className="py-2" />
            </Form.Group>
          </Col>
        </Row>

        {/* Highlights */}
        <div className="mb-4">
          <Form.Label className="fw-bold" style={{color: '#15803d'}}>Highlights</Form.Label>
          <div className="d-flex mb-2">
            <Form.Control name="highlights" type="text" defaultValue={college?.highlights || ''} className="py-2 me-2" />
            <Button variant="danger" className="px-3" type="button"><FaTrash /></Button>
          </div>
          <Button variant="primary" size="sm" className="px-3 py-2 fw-semibold" style={{backgroundColor: '#2563eb', border: 'none'}} type="button">
            Add Highlights
          </Button>
        </div>

        {/* Top Recruiters */}
        <div className="mb-4">
          <Form.Label className="fw-bold" style={{color: '#15803d'}}>Top Recruiters</Form.Label>
          <div className="d-flex mb-2">
            <Form.Control name="topRecruiters" type="text" defaultValue={college?.topRecruiters || ''} className="py-2 me-2" />
            <Button variant="danger" className="px-3" type="button"><FaTrash /></Button>
          </div>
          <Button variant="primary" size="sm" className="px-3 py-2 fw-semibold" style={{backgroundColor: '#2563eb', border: 'none'}} type="button">
            Add Top Recruiters
          </Button>
        </div>

        {/* Admission Process */}
        <div className="mb-4">
          <Button variant="primary" size="sm" className="px-3 py-2 fw-semibold" style={{backgroundColor: '#2563eb', border: 'none'}} type="button">
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
              <Form.Select name="courseName" className="py-2" defaultValue={college?.courseName || 'B.Tech'}>
                <option>B.Tech</option>
                <option>MBA</option>
                <option>MBBS</option>
                <option>BFA</option>
                <option>PGDM</option>
                <option>B.Sc</option>
                <option>B.Com</option>
                <option>B.A</option>
              </Form.Select>
            </Col>
            <Col xs={2}>
              <Form.Control name="courseDuration" type="text" placeholder="Duration" defaultValue={college?.courseDuration || '2'} className="py-2" />
            </Col>
            <Col xs={2}>
              <Form.Control name="courseFee" type="text" placeholder="Fee (Lakhs)" defaultValue={college?.courseFee || '1.68'} className="py-2" />
            </Col>
            <Col xs={3}>
              <Form.Control name="courseEligibility" type="text" placeholder="Eligibility" defaultValue={college?.courseEligibility || ''} className="py-2" />
            </Col>
            <Col xs={2}>
              <Form.Control type="number" placeholder="Ranking" defaultValue="0" className="py-2" />
            </Col>
          </Row>
          <Button variant="danger" className="w-100 mb-3 py-2 rounded-3 border-0" type="button"><FaTrash /></Button>
          <Button variant="primary" size="sm" className="px-3 py-2 fw-semibold" style={{backgroundColor: '#2563eb', border: 'none'}} type="button">
            Add Course
          </Button>
        </div>

        {/* Social Links */}
        <Row className="mb-4">
          <Col md={3}>
            <Form.Group>
              <Form.Label className="fw-semibold small">Website</Form.Label>
              <Form.Control name="website" type="url" defaultValue={college?.website || ''} className="py-2" />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label className="fw-semibold small">Facebook</Form.Label>
              <Form.Control name="facebook" type="url" defaultValue={college?.facebook || ''} className="py-2" />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label className="fw-semibold small">Instagram</Form.Label>
              <Form.Control name="instagram" type="url" defaultValue={college?.instagram || ''} className="py-2" />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label className="fw-semibold small">LinkedIn</Form.Label>
              <Form.Control name="linkedin" type="url" defaultValue={college?.linkedin || ''} className="py-2" />
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
              {college?.img && <img src={college.img} alt="Main" className="mt-2 rounded" style={{maxWidth: '150px'}}/>}
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

        <Button type="submit" variant="success" className="w-100 py-3 fw-bold fs-5 rounded-1" style={{backgroundColor: '#16a34a', border: 'none'}}>
          {college ? "Update College" : "Save College"}
        </Button>

      </Form>
    </div>
  );
};

export default Admin;

const SiteSettingsForm = ({ siteData, onSave }) => {
  const [formData, setFormData] = useState(JSON.parse(JSON.stringify(siteData)));

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    alert("Site settings updated successfully!");
  }

  const handleHeaderTabChange = (key, val) => {
    setFormData(prev => ({
      ...prev,
      header: { ...prev.header, [key]: val.split(',').map(s => s.trim()) }
    }));
  };

  const handleFooterChange = (key, val) => {
    setFormData(prev => ({
      ...prev,
      footer: { ...prev.footer, [key]: val }
    }));
  };

  const handleSocialChange = (key, val) => {
    setFormData(prev => ({
      ...prev,
      footer: { ...prev.footer, social: { ...prev.footer.social, [key]: val } }
    }));
  };

  const handleContactChange = (key, val) => {
    setFormData(prev => ({
      ...prev,
      footer: { ...prev.footer, contactInfo: { ...prev.footer.contactInfo, [key]: val } }
    }));
  };

  return (
    <div>
      <h4 className="fw-bold mb-4">Site Settings</h4>
      <Form onSubmit={handleSubmit}>
        <h5 className="mb-3" style={{color: '#1c4ed8'}}>Header Mega Menu Tabs (comma separated)</h5>
        <Card className="p-4 mb-4 border-0 shadow-sm">
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label className="small fw-semibold">MBA Tabs</Form.Label>
                <Form.Control as="textarea" rows={2} value={(formData.header.mbaTabs || []).join(', ')} onChange={(e) => handleHeaderTabChange('mbaTabs', e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="small fw-semibold">Engineering Tabs</Form.Label>
                <Form.Control as="textarea" rows={2} value={(formData.header.engTabs || []).join(', ')} onChange={(e) => handleHeaderTabChange('engTabs', e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="small fw-semibold">Medical Tabs</Form.Label>
                <Form.Control as="textarea" rows={2} value={(formData.header.medTabs || []).join(', ')} onChange={(e) => handleHeaderTabChange('medTabs', e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="small fw-semibold">Design Tabs</Form.Label>
                <Form.Control as="textarea" rows={2} value={(formData.header.desTabs || []).join(', ')} onChange={(e) => handleHeaderTabChange('desTabs', e.target.value)} />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label className="small fw-semibold">More (Sarkari) Tabs</Form.Label>
                <Form.Control as="textarea" rows={2} value={(formData.header.moreTabs || []).join(', ')} onChange={(e) => handleHeaderTabChange('moreTabs', e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="small fw-semibold">Study Abroad Tabs</Form.Label>
                <Form.Control as="textarea" rows={2} value={(formData.header.studyTabs || []).join(', ')} onChange={(e) => handleHeaderTabChange('studyTabs', e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="small fw-semibold">Counseling Tabs</Form.Label>
                <Form.Control as="textarea" rows={2} value={(formData.header.counselingTabs || []).join(', ')} onChange={(e) => handleHeaderTabChange('counselingTabs', e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="small fw-semibold">Online Tabs</Form.Label>
                <Form.Control as="textarea" rows={2} value={(formData.header.onlineTabs || []).join(', ')} onChange={(e) => handleHeaderTabChange('onlineTabs', e.target.value)} />
              </Form.Group>
            </Col>
          </Row>
        </Card>

        <h5 className="mb-3 mt-4" style={{color: '#1c4ed8'}}>Footer Settings</h5>
        <Card className="p-4 mb-4 border-0 shadow-sm">
          <Form.Group className="mb-4">
            <Form.Label className="small fw-semibold">Description</Form.Label>
            <Form.Control as="textarea" rows={2} value={formData.footer.description || ''} onChange={(e) => handleFooterChange('description', e.target.value)} />
          </Form.Group>

          <Row className="mb-3">
            <Col md={6}>
               <h6 className="fw-semibold mb-3">Contact Info</h6>
               <Form.Group className="mb-2">
                 <Form.Label className="small">Address</Form.Label>
                 <Form.Control type="text" value={formData.footer.contactInfo?.address || ''} onChange={(e) => handleContactChange('address', e.target.value)} />
               </Form.Group>
               <Form.Group className="mb-2">
                 <Form.Label className="small">Phone</Form.Label>
                 <Form.Control type="text" value={formData.footer.contactInfo?.phone || ''} onChange={(e) => handleContactChange('phone', e.target.value)} />
               </Form.Group>
               <Form.Group className="mb-2">
                 <Form.Label className="small">Email</Form.Label>
                 <Form.Control type="text" value={formData.footer.contactInfo?.email || ''} onChange={(e) => handleContactChange('email', e.target.value)} />
               </Form.Group>
            </Col>
            <Col md={6}>
               <h6 className="fw-semibold mb-3">Social Links</h6>
               <Form.Group className="mb-2">
                 <Form.Label className="small">Facebook</Form.Label>
                 <Form.Control type="url" value={formData.footer.social?.facebook || ''} onChange={(e) => handleSocialChange('facebook', e.target.value)} />
               </Form.Group>
               <Form.Group className="mb-2">
                 <Form.Label className="small">Twitter</Form.Label>
                 <Form.Control type="url" value={formData.footer.social?.twitter || ''} onChange={(e) => handleSocialChange('twitter', e.target.value)} />
               </Form.Group>
               <Form.Group className="mb-2">
                 <Form.Label className="small">Instagram</Form.Label>
                 <Form.Control type="url" value={formData.footer.social?.instagram || ''} onChange={(e) => handleSocialChange('instagram', e.target.value)} />
               </Form.Group>
               <Form.Group className="mb-2">
                 <Form.Label className="small">LinkedIn</Form.Label>
                 <Form.Control type="url" value={formData.footer.social?.linkedin || ''} onChange={(e) => handleSocialChange('linkedin', e.target.value)} />
               </Form.Group>
            </Col>
          </Row>
        </Card>

        <Button type="submit" variant="success" className="w-100 py-3 fw-bold fs-5 rounded-1" style={{backgroundColor: '#16a34a', border: 'none'}}>
          Save Settings
        </Button>
      </Form>
    </div>
  );
};
