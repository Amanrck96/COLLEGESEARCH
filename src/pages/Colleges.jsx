import React, { useState, useEffect, useContext, useRef } from 'react';
import { Container, Row, Col, Card, Form, Badge, Button, InputGroup, Spinner } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaSearch, FaMapMarkerAlt, FaStar, FaFilter, FaRegBookmark, FaBookmark } from 'react-icons/fa';

import { CollegeContext } from '../contexts/CollegeContext';
import { AuthContext } from '../contexts/AuthContext';
import CollegeImg from '../components/CollegeImg';
import { aiSearchColleges } from '../utils/geminiApi';

const Colleges = () => {
  const { colleges, loading } = useContext(CollegeContext);
  const { trackStudentActivity, currentUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [saved, setSaved] = useState({});
  const [sortBy, setSortBy] = useState("rating");
  const [currentPage, setCurrentPage] = useState(1);
  const [aiColleges, setAiColleges] = useState([]);
  const [aiLoading, setAiLoading] = useState(false);
  const itemsPerPage = 12;

  // Advanced Filters State
  const [filterCountry, setFilterCountry] = useState("");
  const [filterState, setFilterState] = useState("");
  const [filterCity, setFilterCity] = useState("");
  const [filterCourse, setFilterCourse] = useState("");
  const [filterFeeRange, setFilterFeeRange] = useState("");
  const [filterRating, setFilterRating] = useState("");
  const [filterPlacement, setFilterPlacement] = useState("");
  const [filterHostel, setFilterHostel] = useState("");
  const [filterType, setFilterType] = useState("");

  const lastSyncedSearchRef = useRef(null);

  // Auto-reset lower scopes when country changes
  useEffect(() => {
    setFilterState("");
    setFilterCity("");
  }, [filterCountry]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('q') || '';
    setSearchTerm(query);

    if (location.search !== lastSyncedSearchRef.current) {
      lastSyncedSearchRef.current = location.search;
      if (query && currentUser?.role === 'student') {
        trackStudentActivity('search', query);
      }
    }
  }, [location.search, currentUser]);

  const toggleSave = (id) => {
    setSaved(prev => ({...prev, [id]: !prev[id]}));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const trimmed = searchTerm.trim();
    const params = new URLSearchParams(location.search);

    if (trimmed) {
      params.set('q', trimmed);
    } else {
      params.delete('q');
    }

    const nextSearch = params.toString();
    navigate(
      { pathname: '/colleges', search: nextSearch ? `?${nextSearch}` : '' },
      { replace: location.pathname === '/colleges' && location.search === (nextSearch ? `?${nextSearch}` : '') }
    );
  };

  const handleApplyFromList = (college) => {
    if (currentUser?.role === 'student') {
      trackStudentActivity('apply', college.id);
    }
  };

  const uniqueCountries = React.useMemo(() => {
    return [...new Set((colleges || []).map(c => c.country || 'India').filter(Boolean))].sort();
  }, [colleges]);

  const uniqueStates = React.useMemo(() => {
    const base = filterCountry 
      ? (colleges || []).filter(c => String(c.country || 'India').toLowerCase() === filterCountry.toLowerCase())
      : (colleges || []);
    return [...new Set(base.map(c => c.state).filter(Boolean))].sort();
  }, [colleges, filterCountry]);

  const uniqueCities = React.useMemo(() => {
    const base = filterState 
      ? (colleges || []).filter(c => String(c.state).toLowerCase() === filterState.toLowerCase())
      : (colleges || []);
    return [...new Set(base.map(c => c.location).filter(Boolean))].sort();
  }, [colleges, filterState]);

  const uniqueCourses = React.useMemo(() => {
    const list = new Set();
    (colleges || []).forEach(c => {
      (c.courses || []).forEach(co => {
        if (co.title) list.add(co.title);
      });
    });
    return Array.from(list).sort();
  }, [colleges]);

  // Semantic query parser for advanced searches
  const filteredColleges = React.useMemo(() => {
    let results = [...(colleges || [])];

    // 1. Text Search Filter (name, code, location, state)
    if (searchTerm) {
      const queryLower = searchTerm.toLowerCase();
      results = results.filter(c => 
        c.name.toLowerCase().includes(queryLower) ||
        (c.shortName || '').toLowerCase().includes(queryLower) ||
        (c.location || '').toLowerCase().includes(queryLower) ||
        (c.state || '').toLowerCase().includes(queryLower)
      );
    }

    // 2. Dropdown Filters
    if (filterCountry) {
      results = results.filter(c => String(c.country || 'India').toLowerCase() === filterCountry.toLowerCase());
    }
    if (filterState) {
      results = results.filter(c => String(c.state || '').toLowerCase() === filterState.toLowerCase());
    }
    if (filterCity) {
      results = results.filter(c => String(c.location || '').toLowerCase() === filterCity.toLowerCase());
    }
    if (filterType) {
      results = results.filter(c => String(c.type || '').toLowerCase() === filterType.toLowerCase());
    }
    if (filterRating) {
      results = results.filter(c => (c.rating || 0) >= parseFloat(filterRating));
    }
    
    // 3. Course Filter
    if (filterCourse) {
      results = results.filter(c => 
        (c.courses || []).some(co => String(co.title || '').toLowerCase().includes(filterCourse.toLowerCase()))
      );
    }

    // 4. Fee Range Filter
    if (filterFeeRange) {
      results = results.filter(c => {
        const feeStr = String(c.fees || '0');
        const numericFee = parseFloat(feeStr.replace(/[^\d.]/g, '')) || 0;
        
        if (filterFeeRange === 'under_1') {
          return numericFee < 1;
        } else if (filterFeeRange === '1_3') {
          return numericFee >= 1 && numericFee <= 3;
        } else if (filterFeeRange === '3_5') {
          return numericFee > 3 && numericFee <= 5;
        } else if (filterFeeRange === 'above_5') {
          return numericFee > 5;
        }
        return true;
      });
    }

    // 5. Placement Filter (Average Package)
    if (filterPlacement) {
      results = results.filter(c => {
        const pkgStr = String(c.averagePackage || c.average_package || '0');
        const numericPkg = parseFloat(pkgStr.replace(/[^\d.]/g, '')) || 0;
        
        if (filterPlacement === 'above_15') return numericPkg >= 15;
        if (filterPlacement === 'above_10') return numericPkg >= 10;
        if (filterPlacement === 'above_5') return numericPkg >= 5;
        return true;
      });
    }

    // 6. Hostel Filter
    if (filterHostel) {
      results = results.filter(c => {
        const cleanHostel = String(c.facilities || '').toLowerCase() + String(c.about || '').toLowerCase();
        const hasHostel = cleanHostel.includes('hostel') || cleanHostel.includes('dorm');
        return filterHostel === 'yes' ? hasHostel : !hasHostel;
      });
    }

    // 7. Apply Sorting
    if (sortBy === "rating") {
      results.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    } else if (sortBy === "fees_low") {
      results.sort((a, b) => {
        const feeA = parseFloat(String(a.fees || '0').replace(/[^\d.]/g, '')) || 0;
        const feeB = parseFloat(String(b.fees || '0').replace(/[^\d.]/g, '')) || 0;
        return feeA - feeB;
      });
    }

    return results;
  }, [colleges, searchTerm, filterCountry, filterState, filterCity, filterCourse, filterFeeRange, filterRating, filterPlacement, filterHostel, filterType, sortBy]);


  // Derived visible colleges per page
  const totalPages = Math.ceil(filteredColleges.length / itemsPerPage);
  const currentItems = filteredColleges.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Auto-reset page when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [
    searchTerm,
    sortBy,
    filterCountry,
    filterState,
    filterCity,
    filterCourse,
    filterFeeRange,
    filterRating,
    filterPlacement,
    filterHostel,
    filterType,
  ]);

  // AI Fallback Search Effect
  useEffect(() => {
    if (searchTerm && filteredColleges.length === 0 && !aiColleges.length) {
      setAiLoading(true);
      aiSearchColleges(searchTerm).then(results => {
        setAiColleges(results || []);
        setAiLoading(false);
      });
    } else if (filteredColleges.length > 0 && aiColleges.length > 0) {
      setAiColleges([]); // Clear AI search if native data resolves
    }
  }, [searchTerm, filteredColleges.length, aiColleges.length]);

  return (
    <div className="pt-2 bg-light min-vh-100">
      <Container className="py-5">
        <Row className="mb-4 align-items-center">
          <Col md={6}>
            <h2 className="fw-bold text-primary mb-2">Explore Colleges in India</h2>
            <p className="text-muted">Find the best institution matching your career goals, budget, and location.</p>
          </Col>
          <Col md={6}>
            <Form className="d-flex w-100" onSubmit={handleSearchSubmit}>
              <InputGroup className="shadow-sm">
                <InputGroup.Text className="bg-white border-end-0"><FaSearch color="var(--primary)"/></InputGroup.Text>
                <Form.Control 
                  type="text" 
                  placeholder="Search by name, city, state..." 
                  className="border-start-0 ps-0 border-end-0" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{boxShadow: 'none'}}
                />
                <Button type="submit" variant="primary" className="btn-primary-custom rounded-start-0 px-4">Search</Button>
              </InputGroup>
            </Form>
          </Col>
        </Row>

        <Row className="g-4">
          {/* Advanced Sidebar Filters */}
          <Col lg={3}>
            <Card className="border-0 shadow-sm p-4 text-dark mb-4">
              <div className="d-flex align-items-center mb-3 text-primary fw-bold">
                <FaFilter className="me-2" /> Advanced Filters
              </div>
              <Form>
                {/* Keyword Search */}
                <Form.Group className="mb-3">
                  <Form.Label className="small fw-semibold text-muted">Keyword Search</Form.Label>
                  <Form.Control 
                    size="sm" 
                    type="text" 
                    placeholder="Search name, key..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </Form.Group>

                {/* Country Filter */}
                <Form.Group className="mb-3">
                  <Form.Label className="small fw-semibold text-muted">Filter Country</Form.Label>
                  <Form.Select 
                    size="sm" 
                    value={filterCountry} 
                    onChange={(e) => setFilterCountry(e.target.value)}
                  >
                    <option value="">All Countries</option>
                    {uniqueCountries.map(c => <option key={c} value={c}>{c}</option>)}
                  </Form.Select>
                </Form.Group>

                {/* State Filter */}
                <Form.Group className="mb-3">
                  <Form.Label className="small fw-semibold text-muted">Filter State/Province</Form.Label>
                  <Form.Select 
                    size="sm" 
                    value={filterState} 
                    disabled={!filterCountry}
                    onChange={(e) => { setFilterState(e.target.value); setFilterCity(""); }}
                  >
                    <option value="">{filterCountry ? "All States/Provinces" : "Select Country First"}</option>
                    {uniqueStates.map(st => <option key={st} value={st}>{st}</option>)}
                  </Form.Select>
                </Form.Group>

                {/* City Filter */}
                <Form.Group className="mb-3">
                  <Form.Label className="small fw-semibold text-muted">Filter City/District</Form.Label>
                  <Form.Select 
                    size="sm" 
                    value={filterCity} 
                    disabled={!filterState}
                    onChange={(e) => setFilterCity(e.target.value)}
                  >
                    <option value="">{filterState ? "All Cities" : "Select State First"}</option>
                    {uniqueCities.map(ct => <option key={ct} value={ct}>{ct}</option>)}
                  </Form.Select>
                </Form.Group>

                {/* Course Stream */}
                <Form.Group className="mb-3">
                  <Form.Label className="small fw-semibold text-muted">Course/Stream</Form.Label>
                  <Form.Select 
                    size="sm" 
                    value={filterCourse} 
                    onChange={(e) => setFilterCourse(e.target.value)}
                  >
                    <option value="">All Streams</option>
                    {uniqueCourses.map(co => <option key={co} value={co}>{co}</option>)}
                  </Form.Select>
                </Form.Group>

                {/* Fees range */}
                <Form.Group className="mb-3">
                  <Form.Label className="small fw-semibold text-muted">Annual Fees</Form.Label>
                  <Form.Select 
                    size="sm" 
                    value={filterFeeRange} 
                    onChange={(e) => setFilterFeeRange(e.target.value)}
                  >
                    <option value="">Any Fees</option>
                    <option value="under_1">Under ₹1 Lakh/Year</option>
                    <option value="1_3">₹1 Lakh - ₹3 Lakhs/Year</option>
                    <option value="3_5">₹3 Lakhs - ₹5 Lakhs/Year</option>
                    <option value="above_5">Above ₹5 Lakhs/Year</option>
                  </Form.Select>
                </Form.Group>

                {/* Placements package */}
                <Form.Group className="mb-3">
                  <Form.Label className="small fw-semibold text-muted">Average Placement Package</Form.Label>
                  <Form.Select 
                    size="sm" 
                    value={filterPlacement} 
                    onChange={(e) => setFilterPlacement(e.target.value)}
                  >
                    <option value="">Any CTC Package</option>
                    <option value="above_15">Above ₹15 LPA</option>
                    <option value="above_10">Above ₹10 LPA</option>
                    <option value="above_5">Above ₹5 LPA</option>
                  </Form.Select>
                </Form.Group>

                {/* Hostel facilities */}
                <Form.Group className="mb-3">
                  <Form.Label className="small fw-semibold text-muted">Hostel Accommodation</Form.Label>
                  <Form.Select 
                    size="sm" 
                    value={filterHostel} 
                    onChange={(e) => setFilterHostel(e.target.value)}
                  >
                    <option value="">Hostel (Any)</option>
                    <option value="yes">Available</option>
                    <option value="no">Not Available</option>
                  </Form.Select>
                </Form.Group>

                {/* Ownership Type */}
                <Form.Group className="mb-3">
                  <Form.Label className="small fw-semibold text-muted">Ownership Type</Form.Label>
                  <Form.Select 
                    size="sm" 
                    value={filterType} 
                    onChange={(e) => setFilterType(e.target.value)}
                  >
                    <option value="">Any Type</option>
                    <option value="government">Government</option>
                    <option value="private">Private</option>
                    <option value="autonomous">Autonomous</option>
                  </Form.Select>
                </Form.Group>

                {/* Rating score */}
                <Form.Group className="mb-3">
                  <Form.Label className="small fw-semibold text-muted">Minimum Rating Score</Form.Label>
                  <Form.Select 
                    size="sm" 
                    value={filterRating} 
                    onChange={(e) => setFilterRating(e.target.value)}
                  >
                    <option value="">Any Rating</option>
                    <option value="4.5">★ 4.5 & Above</option>
                    <option value="4.0">★ 4.0 & Above</option>
                    <option value="3.5">★ 3.5 & Above</option>
                  </Form.Select>
                </Form.Group>

                <Button 
                  variant="outline-primary" 
                  className="w-100 btn-sm rounded-pill mt-3" 
                  onClick={() => {
                    setSearchTerm("");
                    setFilterCountry("");
                    setFilterState("");
                    setFilterCity("");
                    setFilterCourse("");
                    setFilterFeeRange("");
                    setFilterRating("");
                    setFilterPlacement("");
                    setFilterHostel("");
                    setFilterType("");
                  }}
                >
                  Clear All Filters
                </Button>
              </Form>
            </Card>
          </Col>

          {/* College List */}
          <Col lg={9}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">{filteredColleges.length} Colleges Found {searchTerm && `for "${searchTerm}"`}</span>
              <div className="d-flex align-items-center">
                <span className="me-2 text-muted small">Sort By:</span>
                <Form.Select size="sm" value={sortBy} onChange={(e) => setSortBy(e.target.value)} style={{width: 'auto'}}>
                  <option value="rating">Highest Rating</option>
                  <option value="fees_low">Lowest Fees</option>
                </Form.Select>
              </div>
            </div>
            <Row className="g-4">
              {loading ? (
                <Col md={12} className="text-center py-5">
                  <Spinner animation="border" variant="primary" style={{ width: '3rem', height: '3rem' }} />
                  <h5 className="text-primary mt-3 fw-bold">Loading colleges database...</h5>
                </Col>
              ) : currentItems.map((college, idx) => (
                <Col md={6} key={college.id}>
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: (idx % 10) * 0.1, duration: 0.5 }}>
                    <Card className="custom-card h-100 border-0">
                      <div className="position-relative">
                        <CollegeImg college={college} className="card-img-top-custom" style={{height: '220px'}} />
                        <Badge bg="warning" text="dark" className="position-absolute shadow" style={{top: '15px', right: '15px', fontSize: '14px', zIndex: 2}}>
                          <FaStar className="me-1 mb-1"/>{college.rating}
                        </Badge>
                        <div 
                          className="position-absolute shadow-sm d-flex align-items-center justify-content-center" 
                          style={{top: '15px', left: '15px', width: '35px', height: '35px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.9)', cursor: 'pointer', zIndex: 2}}
                          onClick={() => toggleSave(college.id)}
                        >
                          {saved[college.id] ? <FaBookmark color="var(--primary)" size={16}/> : <FaRegBookmark color="var(--primary)" size={16}/>}
                        </div>
                      </div>
                      <Card.Body className="d-flex flex-column">
                        <div className="mb-2 d-flex flex-wrap gap-1">
                          <Badge bg="light" text="primary" className="border">{college.type}</Badge>
                          {college.name.match(/IIT|INDIAN INSTITUTE OF TECHNOLOGY/i) && <Badge bg="success" className="shadow-sm">Top 10 IIT</Badge>}
                          {college.name.match(/NIT|NATIONAL INSTITUTE OF TECHNOLOGY/i) && <Badge bg="info" className="shadow-sm">Top NIT</Badge>}
                          {college.name.match(/IIM|INDIAN INSTITUTE OF MANAGEMENT/i) && <Badge bg="danger" className="shadow-sm">Top IIM</Badge>}
                          {college.ranking <= 50 && <Badge bg="primary" className="shadow-sm">Top 50 Ranked</Badge>}
                          {college.rating >= 4.5 && <Badge bg="secondary" className="shadow-sm">Premium Institute</Badge>}
                        </div>
                        <Card.Title className="fw-bold text-primary mb-1">{college.name}</Card.Title>
                        <Card.Text className="text-muted small mb-3"><FaMapMarkerAlt className="me-1 text-danger"/>{college.address || college.location}</Card.Text>
                        
                        <div className="bg-light p-3 rounded-3 mb-3 d-flex justify-content-between text-center flex-grow-1 align-items-center">
                          <div>
                            <div className="text-muted small mb-1">Total Fees</div>
                            <div className="fw-bold text-dark">{college.fees}</div>
                          </div>
                          <div>
                            <div className="text-muted small mb-1">Location</div>
                            <div className="fw-bold text-dark">{college.location}</div>
                          </div>
                        </div>

                        <div className="d-flex gap-2 mt-auto">
                          <Link to={`/colleges/${college.id}`} className="btn btn-outline-primary flex-grow-1 rounded-pill">View Info</Link>
                          <Button
                            as={Link}
                            to={`/colleges/${college.id}?tab=admissions`}
                            variant="primary"
                            className="btn-primary-custom flex-grow-1 rounded-pill shadow-none"
                            style={{padding: '8px 15px'}}
                            onClick={() => handleApplyFromList(college)}
                          >
                            Apply Now
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))}

              {filteredColleges.length === 0 && !aiLoading && aiColleges.length > 0 && (
                <Col md={12}>
                  <div className="p-3 mb-2 bg-info bg-opacity-10 text-info fw-bold rounded border border-info border-opacity-50">
                    ✨ AI Recommendations based on "{searchTerm}"
                  </div>
                  <Row className="g-4 mt-1">
                    {aiColleges.map((college, idx) => (
                      <Col md={6} key={idx}>
                        <Card className="custom-card h-100 border-0 border-start border-info border-4">
                          <Card.Body className="p-4 d-flex flex-column text-start">
                            <h5 className="fw-bold mb-1 text-primary">{college.name}</h5>
                            <span className="text-muted small mb-3 d-block"><FaMapMarkerAlt className="me-1 text-danger"/>{college.location}, {college.state}</span>
                            <div className="text-muted small flex-grow-1 border-bottom pb-2 mb-2" style={{lineHeight: 1.6}}>{college.about}</div>
                            <div className="d-flex justify-content-between align-items-center mb-0 mt-auto">
                              <div><span className="text-muted small d-block">Est. Fees</span><span className="fw-bold fs-6">{college.fees || "N/A"}</span></div>
                              <span className="badge bg-light text-dark border"><FaStar className="me-1 text-warning"/> {college.rating || 4.5}</span>
                            </div>
                            <Button as={Link} to={`/colleges/${college.id || "ai-" + idx}`} variant="outline-info" size="sm" className="w-100 mt-3 rounded-pill fw-bold">View AI Context</Button>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Col>
              )}

              {filteredColleges.length === 0 && !aiLoading && aiColleges.length === 0 && (
                <Col className="text-center py-5">
                  <h4 className="text-muted">No exact match locally.</h4>
                </Col>
              )}

              {filteredColleges.length === 0 && aiLoading && (
                <Col className="text-center py-5">
                  <Spinner animation="border" variant="info" style={{width: '3rem', height: '3rem'}} />
                  <h5 className="text-info mt-3 fw-bold">✨ Gemini AI compiling list for "{searchTerm}" in 0.3s...</h5>
                </Col>
              )}
            </Row>

            {/* Working Pagination */}
            {totalPages > 1 && (
              <div className="d-flex justify-content-center mt-5">
                <nav>
                  <ul className="pagination">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                      <button className="page-link" onClick={() => setCurrentPage(p => Math.max(1, p - 1))}>Previous</button>
                    </li>
                    <li className="page-item active">
                      <span className="page-link">{currentPage} / {totalPages}</span>
                    </li>
                    <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                      <button className="page-link" onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}>Next</button>
                    </li>
                  </ul>
                </nav>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Colleges;
