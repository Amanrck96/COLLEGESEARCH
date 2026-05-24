import React, { useState, useContext } from 'react';
import { Container, Row, Col, Nav, Table, Button, Form, Card, Spinner } from 'react-bootstrap';
import { FaEdit, FaTrash, FaPlus, FaUpload } from 'react-icons/fa';
import { CollegeContext } from '../contexts/CollegeContext';
import { SiteContext } from '../contexts/SiteContext';
import { State, City } from 'country-state-city';
import * as XLSX from 'xlsx';
import { useTranslation } from '../utils/i18n';

const Admin = () => {
  const { t } = useTranslation();
  const { colleges, addCollege, updateCollege, deleteCollege, loading } = useContext(CollegeContext);
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
    if (window.confirm(t('confirmDeleteCollege'))) {
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

  const handleBulkSave = (collegesData) => {
    if (collegesData.length > 50) {
      alert(t('bulkUploadWarning', { count: collegesData.length }));
    }

    collegesData.forEach(college => {
      addCollege(college);
    });
    alert(t('collegesAddedSuccessfully', { count: collegesData.length }));
    setActiveTab('dashboard');
  };

  if (!isAuthenticated) {
    return (
      <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', backgroundColor: '#f3f4f6' }}>
        <Card style={{ width: '400px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
          <Card.Body className="p-5">
            <div className="text-center mb-4">
              <h4 className="fw-bold" style={{color: '#1a43bf'}}>{t('adminLogin')}</h4>
              <p className="text-muted small">{t('enterCredentials')}</p>
            </div>
            {loginError && <div className="alert alert-danger py-2 small">{t('invalidCredentials')}</div>}
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3">
                <Form.Label className="small fw-semibold">{t('username')}</Form.Label>
                <Form.Control type="text" placeholder="admin" value={username} onChange={(e) => setUsername(e.target.value)} required />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label className="small fw-semibold">{t('password')}</Form.Label>
                <Form.Control type="password" placeholder="admin123" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </Form.Group>
              <Button type="submit" variant="primary" className="w-100 fw-bold py-2" style={{backgroundColor: '#1c4ed8', border: 'none'}}>
                {t('login')}
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
            <img src="https://via.placeholder.com/30" alt={t('logoAlt')} className="me-2" style={{borderRadius:'5px'}}/>
            {t('brandName', 'CollegeSearchs')}
          </div>
        </div>
        <div className="d-flex align-items-center">
          <span className="me-4 text-muted fw-semibold">{t('blog')}</span>
          <span className="me-4 text-muted fw-semibold">{t('compare')}</span>
        </div>
      </div>

      <Row className="g-0">
        {/* Sidebar */}
        <Col md={2} className="bg-white border-end" style={{ minHeight: 'calc(100vh - 70px)' }}>
          <div className="p-3">
            <h6 className="text-muted fw-bold mb-3 d-flex align-items-center">
              <span className="me-2">🎓</span> {t('adminPanel')}
            </h6>
            <Nav className="flex-column">
              <Nav.Link 
                className={`py-2 px-3 rounded mb-1 ${activeTab === 'dashboard' ? 'bg-light text-dark fw-bold' : 'text-secondary'}`}
                onClick={() => setActiveTab('dashboard')}
              >
                <span className="me-2">㗊</span> {t('dashboard')}
              </Nav.Link>
              <Nav.Link 
                className={`py-2 px-3 rounded mb-1 ${activeTab === 'bulkUpload' ? 'bg-light text-dark fw-bold' : 'text-secondary'}`}
                onClick={() => setActiveTab('bulkUpload')}
              >
                <span className="me-2">📤</span> {t('bulkUpload')}
              </Nav.Link>
              <Nav.Link className="py-2 px-3 rounded mb-1 text-secondary">
                <span className="me-2">📝</span> {t('blogManager')}
              </Nav.Link>
              <Nav.Link 
                className={`py-2 px-3 rounded mb-1 ${activeTab === 'siteSettings' ? 'bg-light text-dark fw-bold' : 'text-secondary'}`}
                onClick={() => setActiveTab('siteSettings')}
              >
                <span className="me-2">⚙️</span> {t('siteSettings')}
              </Nav.Link>
              <Nav.Link className="py-2 px-3 rounded mb-1 text-secondary">
                <span className="me-2">📞</span> {t('contact')}
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
                  <h4 className="fw-bold mb-1">{t('manageColleges')}</h4>
                  <p className="text-secondary mb-0">{t('addOrEditCollegesInfo')}</p>
                </div>
                <Button variant="primary" onClick={() => { setEditingCollege(null); setShowAddCollege(true); }} className="px-4 py-2 fw-semibold rounded-3 d-flex align-items-center" style={{backgroundColor: '#1c4ed8', border: 'none'}}>
                  <FaPlus className="me-2" /> {t('addCollegeBtn')}
                </Button>
              </div>

              <Form.Control 
                type="text" 
                placeholder={t('searchPlaceholder')} 
                className="mb-4 bg-light border-0 py-2"
                style={{ maxWidth: '400px' }}
              />

              <div className="table-responsive">
                {loading ? (
                  <div className="text-center py-5">
                    <Spinner animation="border" variant="primary" />
                    <p className="mt-2 text-muted">Loading colleges database...</p>
                  </div>
                ) : (
                  <Table hover className="align-middle" style={{ borderCollapse: 'separate', borderSpacing: '0 8px' }}>
                  <thead>
                    <tr className="text-muted" style={{borderBottom: 'none'}}>
                      <th className="fw-normal" style={{border: 'none'}}>{t('name')}</th>
                      <th className="fw-normal" style={{border: 'none'}}>{t('shortName')}</th>
                      <th className="fw-normal" style={{border: 'none'}}>{t('type')}</th>
                      <th className="fw-normal" style={{border: 'none'}}>{t('rating')}</th>
                      <th className="fw-normal" style={{border: 'none'}}>{t('ranking')}</th>
                      <th className="fw-normal" style={{border: 'none'}}>{t('actions')}</th>
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
                      <tr><td colSpan="6" className="text-center py-4 text-muted">{t('noCollegesFound')}</td></tr>
                    )}
                  </tbody>
                  </Table>
                )}
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

          {activeTab === 'bulkUpload' && (
            <BulkUploadForm onSave={handleBulkSave} />
          )}
        </Col>
      </Row>
    </div>
  );
};

const AddCollegeForm = ({ college, onCancel, onSave }) => {
  const { t } = useTranslation();
  const indianStates = State.getStatesOfCountry("IN");
  const [selectedState, setSelectedState] = useState(college?.state || '');
  const [cities, setCities] = useState(() => {
    if (college?.state) {
      const stateObj = State.getStatesOfCountry("IN").find(s => s.name === college.state);
      return stateObj ? City.getCitiesOfState("IN", stateObj.isoCode) : [];
    }
    return [];
  });

  const handleStateChange = (stateName) => {
    setSelectedState(stateName);
    const stateObj = indianStates.find(s => s.name === stateName);
    if (stateObj) {
      setCities(City.getCitiesOfState("IN", stateObj.isoCode));
    } else {
      setCities([]);
    }
  };

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
      img: fd.get('img') || college?.img || "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=400"
    };
    onSave(data);
  };

  return (
    <div className="p-3">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="fw-bold" style={{color: '#15803d'}}>{college ? t('editBasicInfo') : t('basicInfo')}</h5>
        <Button variant="link" className="text-muted text-decoration-none fs-5 p-0" onClick={onCancel}>✖</Button>
      </div>

      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label className="fw-semibold small">{t('nameRequired')}</Form.Label>
              <Form.Control name="name" type="text" placeholder={t('collegeNamePlaceholder')} defaultValue={college?.name || ''} className="py-2" required />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label className="fw-semibold small">{t('shortNameRequired')}</Form.Label>
              <Form.Control name="shortName" type="text" placeholder={t('shortName')} defaultValue={college?.shortName || ''} className="py-2" required />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label className="fw-semibold small">{t('about')}</Form.Label>
              <Form.Control name="about" as="textarea" rows={3} defaultValue={college?.about || ''} className="py-2" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold small">{t('districtCityRequired')}</Form.Label>
              <Form.Select name="district" defaultValue={college?.location || ''} className="py-2" required>
                <option value="">{t('selectCity')}</option>
                {cities.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
              </Form.Select>
            </Form.Group>
            <Form.Group>
              <Form.Label className="fw-semibold small">{t('mapUrl')}</Form.Label>
              <Form.Control name="mapUrl" type="url" placeholder={t('mapUrlPlaceholder')} defaultValue={college?.mapUrl || ''} className="py-2" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label className="fw-semibold small">{t('addressRequired')}</Form.Label>
              <Form.Control name="address" as="textarea" rows={2} defaultValue={college?.address || ''} className="py-2" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Row>
              <Col xs={6}>
                <Form.Group>
                  <Form.Label className="fw-semibold small">{t('brochureLink')}</Form.Label>
                  <Form.Control name="brochureLink" type="url" defaultValue={college?.brochureLink || ''} className="py-2" />
                </Form.Group>
              </Col>
              <Col xs={6}>
                <Form.Group>
                  <Form.Label className="fw-semibold small">{t('established')}</Form.Label>
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
                  <Form.Label className="fw-semibold small">{t('typeRequired')}</Form.Label>
                  <Form.Select name="type" className="py-2" defaultValue={college?.type || 'Government'}>
                    <option value="Government">{t('government')}</option>
                    <option value="Private">{t('private')}</option>
                    <option value="Autonomous">{t('autonomous')}</option>
                    <option value="Public-Private">{t('publicPrivate')}</option>
                    <option value="Online">{t('online')}</option>
                    <option value="Full Time">{t('fullTime')}</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col xs={6}>
                <Form.Group>
                  <Form.Label className="fw-semibold small">{t('stateRequired')}</Form.Label>
                  <Form.Select 
                    name="state" 
                    className="py-2" 
                    value={selectedState} 
                    onChange={(e) => handleStateChange(e.target.value)}
                    required
                  >
                    <option value="">{t('selectState')}</option>
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
                  <Form.Label className="fw-semibold small">{t('affiliation')}</Form.Label>
                  <Form.Control name="affiliation" type="text" defaultValue={college?.affiliation || ''} className="py-2" />
                </Form.Group>
              </Col>
              <Col xs={6}>
                <Form.Group>
                  <Form.Label className="fw-semibold small">{t('ranking')}</Form.Label>
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
              <Form.Label className="fw-semibold small">{t('specializationsRequired')}</Form.Label>
              <Form.Control name="specializations" type="text" placeholder={t('specializationsPlaceholder')} defaultValue={college?.specializations || 'HR, Marketing, Finance, Operations'} className="py-2" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label className="fw-semibold small">{t('applyNowLink')}</Form.Label>
              <Form.Control name="applyNowLink" type="url" placeholder={t('urlPlaceholder')} defaultValue={college?.applyNowLink || ''} className="py-2" />
            </Form.Group>
          </Col>
        </Row>

        {/* Highlights */}
        <div className="mb-4">
          <Form.Label className="fw-bold" style={{color: '#15803d'}}>{t('highlights')}</Form.Label>
          <div className="d-flex mb-2">
            <Form.Control name="highlights" type="text" defaultValue={college?.highlights || ''} className="py-2 me-2" />
            <Button variant="danger" className="px-3" type="button"><FaTrash /></Button>
          </div>
          <Button variant="primary" size="sm" className="px-3 py-2 fw-semibold" style={{backgroundColor: '#2563eb', border: 'none'}} type="button">
            {t('addHighlights')}
          </Button>
        </div>

        {/* Top Recruiters */}
        <div className="mb-4">
          <Form.Label className="fw-bold" style={{color: '#15803d'}}>{t('topRecruiters')}</Form.Label>
          <div className="d-flex mb-2">
            <Form.Control name="topRecruiters" type="text" defaultValue={college?.topRecruiters || ''} className="py-2 me-2" />
            <Button variant="danger" className="px-3" type="button"><FaTrash /></Button>
          </div>
          <Button variant="primary" size="sm" className="px-3 py-2 fw-semibold" style={{backgroundColor: '#2563eb', border: 'none'}} type="button">
            {t('addTopRecruiters')}
          </Button>
        </div>

        {/* Admission Process */}
        <div className="mb-4">
          <Button variant="primary" size="sm" className="px-3 py-2 fw-semibold" style={{backgroundColor: '#2563eb', border: 'none'}} type="button">
            {t('addAdmissionProcess')}
          </Button>
        </div>

        {/* Courses */}
        <div className="mb-4">
          <Form.Label className="fw-bold d-block" style={{color: '#15803d'}}>
            {t('courses')} <span className="text-danger fw-normal" style={{fontSize: '12px'}}>{t('coursesPrompt')}</span>
          </Form.Label>
          <Row className="mb-2">
            <Col xs={3}>
              <Form.Select name="courseName" className="py-2" defaultValue={college?.courseName || 'B.Tech'}>
                <option value="B.Tech">{t('btech')}</option>
                <option value="MBA">{t('mba')}</option>
                <option value="MBBS">{t('mbbs')}</option>
                <option value="BFA">{t('bfa')}</option>
                <option value="PGDM">{t('pgdm')}</option>
                <option value="B.Sc">{t('bsc')}</option>
                <option value="B.Com">{t('bcom')}</option>
                <option value="B.A">{t('ba')}</option>
              </Form.Select>
            </Col>
            <Col xs={2}>
              <Form.Control name="courseDuration" type="text" placeholder={t('durationPlaceholder')} defaultValue={college?.courseDuration || '2'} className="py-2" />
            </Col>
            <Col xs={2}>
              <Form.Control name="courseFee" type="text" placeholder={t('feePlaceholder')} defaultValue={college?.courseFee || '1.68'} className="py-2" />
            </Col>
            <Col xs={3}>
              <Form.Control name="courseEligibility" type="text" placeholder={t('eligibilityPlaceholder')} defaultValue={college?.courseEligibility || ''} className="py-2" />
            </Col>
            <Col xs={2}>
              <Form.Control type="number" placeholder={t('rankingPlaceholder')} defaultValue="0" className="py-2" />
            </Col>
          </Row>
          <Button variant="danger" className="w-100 mb-3 py-2 rounded-3 border-0" type="button"><FaTrash /></Button>
          <Button variant="primary" size="sm" className="px-3 py-2 fw-semibold" style={{backgroundColor: '#2563eb', border: 'none'}} type="button">
            {t('addCourse')}
          </Button>
        </div>

        {/* Social Links */}
        <Row className="mb-4">
          <Col md={3}>
            <Form.Group>
              <Form.Label className="fw-semibold small">{t('website')}</Form.Label>
              <Form.Control name="website" type="url" defaultValue={college?.website || ''} className="py-2" />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label className="fw-semibold small">{t('facebook')}</Form.Label>
              <Form.Control name="facebook" type="url" defaultValue={college?.facebook || ''} className="py-2" />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label className="fw-semibold small">{t('instagram')}</Form.Label>
              <Form.Control name="instagram" type="url" defaultValue={college?.instagram || ''} className="py-2" />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group>
              <Form.Label className="fw-semibold small">{t('linkedin')}</Form.Label>
              <Form.Control name="linkedin" type="url" defaultValue={college?.linkedin || ''} className="py-2" />
            </Form.Group>
          </Col>
        </Row>

        {/* Uploads */}
        <Row className="mb-5">
          <Col md={12}>
            <Form.Group>
              <Form.Label className="fw-semibold small">{t('mainImageUrlRequired')}</Form.Label>
              <Form.Control name="img" type="url" placeholder={t('urlPlaceholder')} defaultValue={college?.img || ''} className="py-2 mb-3" />
              {college?.img && <img src={college.img} alt={t('mainAlt')} className="rounded border shadow-sm" style={{maxWidth: '200px', height: '120px', objectFit: 'cover'}}/>}
            </Form.Group>
          </Col>
        </Row>

        <Button type="submit" variant="success" className="w-100 py-3 fw-bold fs-5 rounded-1" style={{backgroundColor: '#16a34a', border: 'none'}}>
          {college ? t('updateCollege') : t('saveCollege')}
        </Button>

      </Form>
    </div>
  );
};

export default Admin;

const SiteSettingsForm = ({ siteData, onSave }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState(JSON.parse(JSON.stringify(siteData)));

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    alert(t('siteSettingsUpdated', 'Site settings updated successfully!'));
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
      <h4 className="fw-bold mb-4">{t('siteSettings')}</h4>
      <Form onSubmit={handleSubmit}>
        <h5 className="mb-3" style={{color: '#1c4ed8'}}>{t('headerMegaMenuTabs')}</h5>
        <Card className="p-4 mb-4 border-0 shadow-sm">
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label className="small fw-semibold">{t('mbaTabs')}</Form.Label>
                <Form.Control as="textarea" rows={2} value={(formData.header.mbaTabs || []).join(', ')} onChange={(e) => handleHeaderTabChange('mbaTabs', e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="small fw-semibold">{t('engineeringTabs')}</Form.Label>
                <Form.Control as="textarea" rows={2} value={(formData.header.engTabs || []).join(', ')} onChange={(e) => handleHeaderTabChange('engTabs', e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="small fw-semibold">{t('medicalTabs')}</Form.Label>
                <Form.Control as="textarea" rows={2} value={(formData.header.medTabs || []).join(', ')} onChange={(e) => handleHeaderTabChange('medTabs', e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="small fw-semibold">{t('designTabs')}</Form.Label>
                <Form.Control as="textarea" rows={2} value={(formData.header.desTabs || []).join(', ')} onChange={(e) => handleHeaderTabChange('desTabs', e.target.value)} />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label className="small fw-semibold">{t('moreSarkariTabs')}</Form.Label>
                <Form.Control as="textarea" rows={2} value={(formData.header.moreTabs || []).join(', ')} onChange={(e) => handleHeaderTabChange('moreTabs', e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="small fw-semibold">{t('studyAbroadTabs')}</Form.Label>
                <Form.Control as="textarea" rows={2} value={(formData.header.studyTabs || []).join(', ')} onChange={(e) => handleHeaderTabChange('studyTabs', e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="small fw-semibold">{t('counselingTabs')}</Form.Label>
                <Form.Control as="textarea" rows={2} value={(formData.header.counselingTabs || []).join(', ')} onChange={(e) => handleHeaderTabChange('counselingTabs', e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="small fw-semibold">{t('onlineTabs')}</Form.Label>
                <Form.Control as="textarea" rows={2} value={(formData.header.onlineTabs || []).join(', ')} onChange={(e) => handleHeaderTabChange('onlineTabs', e.target.value)} />
              </Form.Group>
            </Col>
          </Row>
        </Card>

        <h5 className="mb-3 mt-4" style={{color: '#1c4ed8'}}>{t('footerSettings')}</h5>
        <Card className="p-4 mb-4 border-0 shadow-sm">
          <Form.Group className="mb-4">
            <Form.Label className="small fw-semibold">{t('description')}</Form.Label>
            <Form.Control as="textarea" rows={2} value={formData.footer.description || ''} onChange={(e) => handleFooterChange('description', e.target.value)} />
          </Form.Group>

          <Row className="mb-3">
            <Col md={6}>
               <h6 className="fw-semibold mb-3">{t('contactInfo')}</h6>
               <Form.Group className="mb-2">
                 <Form.Label className="small">{t('address')}</Form.Label>
                 <Form.Control type="text" value={formData.footer.contactInfo?.address || ''} onChange={(e) => handleContactChange('address', e.target.value)} />
               </Form.Group>
               <Form.Group className="mb-2">
                 <Form.Label className="small">{t('phone')}</Form.Label>
                 <Form.Control type="text" value={formData.footer.contactInfo?.phone || ''} onChange={(e) => handleContactChange('phone', e.target.value)} />
               </Form.Group>
               <Form.Group className="mb-2">
                 <Form.Label className="small">{t('email')}</Form.Label>
                 <Form.Control type="text" value={formData.footer.contactInfo?.email || ''} onChange={(e) => handleContactChange('email', e.target.value)} />
               </Form.Group>
            </Col>
            <Col md={6}>
               <h6 className="fw-semibold mb-3">{t('socialLinks')}</h6>
               <Form.Group className="mb-2">
                 <Form.Label className="small">{t('facebook')}</Form.Label>
                 <Form.Control type="url" value={formData.footer.social?.facebook || ''} onChange={(e) => handleSocialChange('facebook', e.target.value)} />
               </Form.Group>
               <Form.Group className="mb-2">
                 <Form.Label className="small">{t('twitter')}</Form.Label>
                 <Form.Control type="url" value={formData.footer.social?.twitter || ''} onChange={(e) => handleSocialChange('twitter', e.target.value)} />
               </Form.Group>
               <Form.Group className="mb-2">
                 <Form.Label className="small">{t('instagram')}</Form.Label>
                 <Form.Control type="url" value={formData.footer.social?.instagram || ''} onChange={(e) => handleSocialChange('instagram', e.target.value)} />
               </Form.Group>
               <Form.Group className="mb-2">
                 <Form.Label className="small">{t('linkedin')}</Form.Label>
                 <Form.Control type="url" value={formData.footer.social?.linkedin || ''} onChange={(e) => handleSocialChange('linkedin', e.target.value)} />
               </Form.Group>
            </Col>
          </Row>
        </Card>

        <Button type="submit" variant="success" className="w-100 py-3 fw-bold fs-5 rounded-1" style={{backgroundColor: '#16a34a', border: 'none'}}>
          {t('saveSettings')}
        </Button>
      </Form>
    </div>
  );
};

const BulkUploadForm = ({ onSave }) => {
  const { t } = useTranslation();
  const [file, setFile] = useState(null);
  
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) return alert(t('selectFileFirst'));
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const rawData = XLSX.utils.sheet_to_json(worksheet);

        const mappedData = rawData.map((item, index) => {
          const images = [
            "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=400",
            "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&q=80&w=400",
            "https://images.unsplash.com/photo-1590408546194-e3fb4b917531?auto=format&fit=crop&q=80&w=400"
          ];
          const randomImage = images.at(index % images.length);

          return {
            id: Date.now() + index,
            name: item['Name'] || 'Unknown College',
            shortName: item['Code'] || item['Short Name'] || (item['Name'] ? item['Name'].substring(0, 5).toUpperCase() : 'COLLEGE'),
            location: item['Location'] || item['District/City'] || 'India',
            state: item['State'] || 'Unknown',
            address: item['Address'] || 'Unknown',
            phone: item['Phone'] || "0123-456789",
            website: item['Website'] || "http://www.college.edu",
            rating: item['Rating'] || 4.5,
            reviews: item['Reviews'] || Math.floor(Math.random() * 500) + 50,
            type: item['Type'] || 'Private',
            about: item['About'] || `Welcome to ${item['Name'] || 'our college'}. We offer world-class education.`,
            ranking: item['Ranking'] || Math.floor(Math.random() * 100) + 1,
            fees: item['Fees'] || "₹2.5 Lakhs",
            exams: item['Exams'] || "Direct Admission",
            img: item['Image URL'] || `https://loremflickr.com/400/300/college,campus?random=${index}`,
            gallery: [randomImage],
            courses: [
              {
                title: item['Course Name'] || 'B.Tech',
                duration: item['Course Duration'] || "4 Years",
                fees: item['Course Fees'] || "₹2.5 Lakhs",
                eligibility: item['Course Eligibility'] || "10+2"
              }
            ]
          };
        });

        onSave(mappedData);
      } catch (error) {
        console.error(error);
        alert(t('errorParsingExcel'));
      }
    };
    reader.readAsBinaryString(file);
  };

  const handleDownloadSample = () => {
    const sampleData = [
      {
        'Name': 'Sample College of Engineering',
        'Code': 'SCE',
        'Location': 'Bengaluru',
        'State': 'Karnataka',
        'Address': '123 Main St, Bengaluru',
        'Type': 'Private',
        'Ranking': 15,
        'Rating': 4.5,
        'Course Name': 'B.Tech Computer Science',
        'Course Duration': '4 Years',
        'Course Fees': '8 Lakhs',
        'Course Eligibility': '10+2 with 60%',
        'Image URL': 'https://loremflickr.com/400/300/college'
      }
    ];

    const ws = XLSX.utils.json_to_sheet(sampleData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Colleges");
    XLSX.writeFile(wb, "Sample_Colleges_Upload.xlsx");
  };

  return (
    <Card className="p-4 border-0 shadow-sm">
      <h4 className="fw-bold mb-4" style={{color: '#1a43bf'}}>{t('bulkUploadColleges')}</h4>
      <p className="text-secondary mb-4">
        {t('bulkUploadPrompt')}
      </p>
      
      <div className="mb-4">
        <Button variant="outline-primary" onClick={handleDownloadSample} className="d-flex align-items-center">
          <FaUpload className="me-2" /> {t('downloadSampleExcel')}
        </Button>
      </div>

      <Form.Group controlId="formFile" className="mb-4">
        <Form.Label className="fw-semibold">{t('selectExcelFile')}</Form.Label>
        <Form.Control type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
      </Form.Group>

      <Button variant="success" onClick={handleUpload} disabled={!file} className="px-4 py-2 fw-bold d-flex align-items-center" style={{backgroundColor: '#16a34a'}}>
        <FaUpload className="me-2" /> {t('uploadAndImport')}
      </Button>
    </Card>
  );
};
