import React, { useState, useContext, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button, Nav, InputGroup } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { FaUserGraduate, FaBuilding, FaLock, FaEnvelope, FaEye, FaEyeSlash, FaArrowLeft } from 'react-icons/fa';
import { AuthContext } from '../contexts/AuthContext';
import { useToast } from '../contexts/ToastContext';

const Login = () => {
  const { currentUser, handleLogin } = useContext(AuthContext);
  const { showToast } = useToast();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // If already logged in, redirect to appropriate console
  useEffect(() => {
    if (currentUser) {
      if (currentUser.role === 'student') {
        navigate('/admin/student-profile');
      } else {
        navigate('/admin');
      }
    }
  }, [currentUser, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      showToast('Please fill in all email and password fields.', 'warning');
      return;
    }

    const res = handleLogin(email, password, activeTab === 'student' ? 'student' : 'superadmin'); // superadmin or select role inside backend logic
    if (res.success) {
      showToast(`Welcome back, ${res.user.name}! Successful login.`, 'success');
      if (res.user.role === 'student') {
        navigate('/admin/student-profile');
      } else {
        navigate('/admin');
      }
    } else {
      showToast(res.message || 'Login failed. Please verify credentials.', 'error');
    }
  };

  const autofillUser = (role) => {
    if (role === 'student') {
      setEmail('aarav.sharma@gmail.com');
      setPassword('password123');
      setActiveTab('student');
    } else if (role === 'superadmin') {
      setEmail('admin@thecollegecompass.com');
      setPassword('admin');
      setActiveTab('staff');
    } else if (role === 'admin') {
      setEmail('manager@thecollegecompass.com');
      setPassword('admin');
      setActiveTab('staff');
    } else if (role === 'operator') {
      setEmail('operator@thecollegecompass.com');
      setPassword('admin');
      setActiveTab('staff');
    } else if (role === 'viewer') {
      setEmail('viewer@thecollegecompass.com');
      setPassword('admin');
      setActiveTab('staff');
    }
    showToast(`Autofilled ${role} demo credentials!`, 'info');
  };

  return (
    <div className="login-page-wrapper" style={{ minHeight: '100vh', backgroundColor: '#f8fafc', paddingTop: '80px' }}>
      <Container className="py-5">
        <div className="mb-4">
          <Link to="/" className="text-decoration-none text-muted small d-inline-flex align-items-center gap-2 hover-primary">
            <FaArrowLeft /> Back to Home
          </Link>
        </div>

        <Row className="g-0 shadow-lg rounded-4 overflow-hidden bg-white" style={{ minHeight: '600px' }}>
          {/* Left panel - Visual Hero (hidden on mobile) */}
          <Col lg={6} className="d-none d-lg-flex flex-column justify-content-between p-5 text-white position-relative" style={{
            background: 'linear-gradient(rgba(0, 107, 112, 0.9), rgba(0, 83, 88, 0.95)), url("https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
            <div>
              <h2 className="fw-bold mb-1" style={{ letterSpacing: '1px' }}>thecollege<span style={{ color: '#f26822' }}>compass</span></h2>
              <p className="opacity-75 small">Navigate your academic journey with absolute clarity.</p>
            </div>

            <div className="my-auto">
              <h1 className="display-5 fw-bold mb-4">Discover Your Future Campus</h1>
              <p className="fs-5 opacity-90 mb-4" style={{ maxWidth: '460px', lineHeight: '1.6' }}>
                Compare thousands of top-ranked colleges, track your applications, and make informed admission decisions.
              </p>
            </div>

            <div className="d-flex gap-5 border-top border-white-50 pt-4">
              <div>
                <h3 className="fw-bold text-warning mb-0">12K+</h3>
                <span className="small opacity-75">Colleges Listed</span>
              </div>
              <div>
                <h3 className="fw-bold text-warning mb-0">500K+</h3>
                <span className="small opacity-75">Active Students</span>
              </div>
            </div>
          </Col>

          {/* Right panel - Form Card */}
          <Col lg={6} className="p-4 p-md-5 d-flex flex-column justify-content-center">
            <div className="mx-auto w-100" style={{ maxWidth: '420px' }}>
              <div className="text-center mb-4">
                <h3 className="fw-bold text-primary mb-1">Welcome Back</h3>
                <p className="text-muted small">Sign in to access your dashboard</p>
              </div>

              {/* Custom Tabs */}
              <Nav variant="pills" className="mb-4 bg-light p-1 rounded-pill justify-content-center" activeKey={activeTab}>
                <Nav.Item className="w-50 text-center">
                  <Nav.Link 
                    eventKey="student" 
                    className="rounded-pill fw-bold py-2 border-0"
                    onClick={() => setActiveTab('student')}
                    style={{ cursor: 'pointer' }}
                  >
                    🎓 Student Portal
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="w-50 text-center">
                  <Nav.Link 
                    eventKey="staff" 
                    className="rounded-pill fw-bold py-2 border-0"
                    onClick={() => setActiveTab('staff')}
                    style={{ cursor: 'pointer' }}
                  >
                    👨💼 Staff Console
                  </Nav.Link>
                </Nav.Item>
              </Nav>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label className="small fw-semibold text-muted">Email Address</Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="bg-light border-end-0 text-muted">
                      <FaEnvelope size={14} />
                    </InputGroup.Text>
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      className="border-start-0"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="small fw-semibold text-muted">Password</Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="bg-light border-end-0 text-muted">
                      <FaLock size={14} />
                    </InputGroup.Text>
                    <Form.Control
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      className="border-start-0 border-end-0"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      autoComplete="current-password"
                    />
                    <InputGroup.Text 
                      className="bg-light border-start-0 text-muted" 
                      style={{ cursor: 'pointer' }}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash size={14} /> : <FaEye size={14} />}
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>

                <div className="d-flex justify-content-between align-items-center mb-4 small">
                  <Form.Check 
                    type="checkbox" 
                    label="Remember me" 
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="text-muted"
                  />
                  <Link to="/contact" className="text-primary text-decoration-none fw-semibold">Forgot Password?</Link>
                </div>

                <Button type="submit" className="w-100 py-2.5 fw-bold btn-primary border-0 rounded-3 shadow-sm mb-3">
                  Sign In
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
