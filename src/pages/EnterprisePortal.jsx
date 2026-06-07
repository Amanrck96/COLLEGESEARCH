import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Card, Form, Table, Modal, Button } from 'react-bootstrap';
import { 
  FaUser, FaLock, FaChartPie, FaAddressBook, FaBullseye, 
  FaBoxOpen, FaShoppingCart, FaUserTie, FaMoneyCheckAlt, 
  FaFolderOpen, FaProjectDiagram, FaTools, FaTerminal, 
  FaExchangeAlt, FaHistory, FaSignature, FaNetworkWired, 
  FaGlobe, FaCheckCircle, FaTrash, FaPlus, FaCloudUploadAlt,
  FaFileAlt, FaMapMarkerAlt, FaCalendarCheck, FaBarcode, FaBuilding
} from 'react-icons/fa';
import './EnterprisePortal.css';

const EnterprisePortal = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [logs, setLogs] = useState([
    { id: 1, timestamp: new Date().toLocaleTimeString(), engine: "Identity Provider (IdP)", text: "SSO Broker initialized. Token minting (JWT/JWE) ready.", type: "success" },
    { id: 2, timestamp: new Date().toLocaleTimeString(), engine: "Security Key Encrypter", text: "Argon2 key derivation schedules loaded. Rotation active.", type: "success" },
    { id: 3, timestamp: new Date().toLocaleTimeString(), engine: "Metric Cache Pre-warmer", text: "Cron pre-warmed financial caches and daily sales KPI matrices.", type: "success" },
    { id: 4, timestamp: new Date().toLocaleTimeString(), engine: "Database Schema Separator", text: "Tenant routing active. Mapping schema requests using default branch context.", type: "success" }
  ]);
  
  // Custom terminal auto-scroll
  const terminalEndRef = useRef(null);
  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs]);

  const logAction = (engine, text, type = "success") => {
    setLogs(prev => [
      ...prev,
      { id: Date.now(), timestamp: new Date().toLocaleTimeString(), engine, text, type }
    ].slice(-50)); // Keep last 50
  };

  // Branch Context state
  const [branchContext, setBranchContext] = useState('Mumbai HQ');
  const handleBranchChange = (newBranch) => {
    setBranchContext(newBranch);
    logAction("Cross-Branch Settlement Engine", `Branch context switched to [${newBranch}]. Applying localized warehouse inventory parameters.`, "info");
  };

  return (
    <div className="enterprise-portal-root">
      {/* Top Header */}
      <header className="erp-header">
        <div className="d-flex align-items-center">
          <FaBuilding className="text-indigo-400 me-2 fs-4" style={{color: '#6366f1'}} />
          <span className="erp-header-title">Enterprise ERP & Core Engine Console</span>
          <span className="badge bg-secondary ms-3" style={{fontSize: '11px'}}>{branchContext}</span>
        </div>
        <div className="d-flex align-items-center gap-3">
          <Form.Select 
            size="sm" 
            className="erp-form-select bg-dark text-white border-secondary"
            value={branchContext}
            onChange={(e) => handleBranchChange(e.target.value)}
            style={{ width: '150px' }}
          >
            <option value="Mumbai HQ">Mumbai HQ</option>
            <option value="Delhi Depot">Delhi Depot</option>
            <option value="Bengaluru R&D">Bengaluru R&D</option>
          </Form.Select>
          <div className="text-secondary small d-none d-md-block">
            <span className="presence-indicator-ring"></span>
            4 Active Collaborators
          </div>
        </div>
      </header>

      <div className="erp-layout">
        {/* Left Navigation Sidebar */}
        <aside className="erp-sidebar">
          <div className="erp-sidebar-header">Core Modules</div>
          <button className={`erp-nav-item ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => setActiveTab('dashboard')}>
            <FaChartPie className="erp-nav-icon" /> Dashboard & Widgets
          </button>
          <button className={`erp-nav-item ${activeTab === 'identity' ? 'active' : ''}`} onClick={() => setActiveTab('identity')}>
            <FaLock className="erp-nav-icon" /> Auth & Security Policy
          </button>
          <button className={`erp-nav-item ${activeTab === 'crm' ? 'active' : ''}`} onClick={() => setActiveTab('crm')}>
            <FaAddressBook className="erp-nav-icon" /> CRM & Leads
          </button>
          <button className={`erp-nav-item ${activeTab === 'operations' ? 'active' : ''}`} onClick={() => setActiveTab('operations')}>
            <FaBoxOpen className="erp-nav-icon" /> Inventory & Logistics
          </button>
          <button className={`erp-nav-item ${activeTab === 'sales' ? 'active' : ''}`} onClick={() => setActiveTab('sales')}>
            <FaShoppingCart className="erp-nav-icon" /> Sales & Sourcing
          </button>
          <button className={`erp-nav-item ${activeTab === 'hr' ? 'active' : ''}`} onClick={() => setActiveTab('hr')}>
            <FaUserTie className="erp-nav-icon" /> HR & Timesheets
          </button>
          <button className={`erp-nav-item ${activeTab === 'accounting' ? 'active' : ''}`} onClick={() => setActiveTab('accounting')}>
            <FaMoneyCheckAlt className="erp-nav-icon" /> Accounting & Expenses
          </button>
          <button className={`erp-nav-item ${activeTab === 'documents' ? 'active' : ''}`} onClick={() => setActiveTab('documents')}>
            <FaFolderOpen className="erp-nav-icon" /> Document Workspace
          </button>
          <button className={`erp-nav-item ${activeTab === 'automation' ? 'active' : ''}`} onClick={() => setActiveTab('automation')}>
            <FaProjectDiagram className="erp-nav-icon" /> Workflow Canvas
          </button>
          <button className={`erp-nav-item ${activeTab === 'admin' ? 'active' : ''}`} onClick={() => setActiveTab('admin')}>
            <FaTools className="erp-nav-icon" /> System & Backups
          </button>
          <button className={`erp-nav-item ${activeTab === 'telemetry' ? 'active' : ''}`} onClick={() => setActiveTab('telemetry')}>
            <FaTerminal className="erp-nav-icon" /> Developers & Webhooks
          </button>
        </aside>

        {/* Workspace Panels */}
        <main className="erp-main-content" style={{ paddingBottom: '210px' }}>
          {activeTab === 'dashboard' && <DashboardView logAction={logAction} />}
          {activeTab === 'identity' && <IdentityView logAction={logAction} />}
          {activeTab === 'crm' && <CRMView logAction={logAction} />}
          {activeTab === 'operations' && <OperationsView logAction={logAction} />}
          {activeTab === 'sales' && <SalesView logAction={logAction} />}
          {activeTab === 'hr' && <HRView logAction={logAction} />}
          {activeTab === 'accounting' && <AccountingView logAction={logAction} />}
          {activeTab === 'documents' && <DocumentView logAction={logAction} />}
          {activeTab === 'automation' && <AutomationView logAction={logAction} />}
          {activeTab === 'admin' && <AdminSettingsView logAction={logAction} />}
          {activeTab === 'telemetry' && <TelemetryView logAction={logAction} />}
        </main>
      </div>

      {/* Backend Engine Console Panel */}
      <div className="erp-terminal-wrapper">
        <div className="erp-terminal-header">
          <div className="d-flex align-items-center">
            <FaTerminal className="me-2 text-success" />
            <span>REAL-TIME BACKEND ENGINE LOGS</span>
          </div>
          <div className="d-flex gap-3">
            <span style={{color: '#9ca3af', fontSize: '11px'}}>Pipeline Status: Listening...</span>
            <button className="bg-transparent border-0 p-0 text-danger fs-6" title="Clear Console" onClick={() => setLogs([])}>✖</button>
          </div>
        </div>
        <div className="erp-terminal-body">
          {logs.map((log) => (
            <div key={log.id} className="erp-terminal-line">
              <span className="timestamp">[{log.timestamp}]</span>
              <span className="engine">[{log.engine}]</span>
              <span className={log.type}>{log.text}</span>
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>
      </div>
    </div>
  );
};

export default EnterprisePortal;

/* ==========================================================================
   SUB-VIEWS (MOCK COMPONENT IMPLEMENTATIONS)
   ========================================================================== */

/* 1. Dashboard & Widgets */
const DashboardView = ({ logAction }) => {
  const [dateRange, setDateRange] = useState('7D');
  const [widgets, setWidgets] = useState([
    { id: 'kpis', title: 'KPI Metrics', colSize: 12 },
    { id: 'chart', title: 'Dynamic Sales Chart', colSize: 8 },
    { id: 'feed', title: 'Live Activities', colSize: 4 }
  ]);

  const handleDateChange = (range) => {
    setDateRange(range);
    logAction("Metric Cache Pre-warmer", `Pre-aggregating real-time KPI data arrays for range [${range}]. Fetch took 12ms.`, "success");
  };

  const shiftWidget = (idx, direction) => {
    const updated = [...widgets];
    if (direction === 'up' && idx > 0) {
      const temp = updated[idx];
      updated[idx] = updated[idx-1];
      updated[idx-1] = temp;
    } else if (direction === 'down' && idx < updated.length - 1) {
      const temp = updated[idx];
      updated[idx] = updated[idx+1];
      updated[idx+1] = temp;
    }
    setWidgets(updated);
    logAction("Dashboard Data Aggregator", "Rearranged dashboard blocks layout preferences saved to user profile catalog.", "info");
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h3>Enterprise Summary Matrix</h3>
          <p className="text-secondary">Modular drag-and-drop workspace console grid</p>
        </div>
        <div className="btn-group bg-dark p-1 rounded border border-secondary">
          {['Today', '7D', '30D', '1Y'].map(r => (
            <button 
              key={r} 
              className={`btn btn-sm ${dateRange === r ? 'btn-primary' : 'text-secondary'}`}
              onClick={() => handleDateChange(r)}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <div className="erp-grid-1">
        {widgets.map((widget, index) => (
          <div key={widget.id} className="mb-4">
            <Card className="erp-glass-card p-4">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="mb-0 text-indigo-400">{widget.title}</h5>
                <div className="d-flex gap-2">
                  <button className="btn btn-sm btn-dark text-secondary" onClick={() => shiftWidget(index, 'up')}>▲</button>
                  <button className="btn btn-sm btn-dark text-secondary" onClick={() => shiftWidget(index, 'down')}>▼</button>
                </div>
              </div>

              {widget.id === 'kpis' && (
                <Row className="g-3">
                  <Col md={3}>
                    <div className="bg-dark bg-opacity-50 p-3 rounded border border-secondary">
                      <div className="text-secondary small">GROSS REVENUE</div>
                      <h3 className="fw-bold my-1 text-white">₹4,290,000</h3>
                      <div className="progress mt-2" style={{height: '6px', background: '#374151'}}>
                        <div className="progress-bar bg-success" style={{width: '78%'}}></div>
                      </div>
                      <div className="text-success small mt-1">▲ 12.3% vs last week</div>
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="bg-dark bg-opacity-50 p-3 rounded border border-secondary">
                      <div className="text-secondary small">LEADS CONVERTED</div>
                      <h3 className="fw-bold my-1 text-white">1,540</h3>
                      <div className="progress mt-2" style={{height: '6px', background: '#374151'}}>
                        <div className="progress-bar bg-info" style={{width: '62%'}}></div>
                      </div>
                      <div className="text-info small mt-1">▲ 8.1% target reached</div>
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="bg-dark bg-opacity-50 p-3 rounded border border-secondary">
                      <div className="text-secondary small">INVENTORY ITEMS</div>
                      <h3 className="fw-bold my-1 text-white">12,940</h3>
                      <div className="progress mt-2" style={{height: '6px', background: '#374151'}}>
                        <div className="progress-bar bg-warning" style={{width: '45%'}}></div>
                      </div>
                      <div className="text-warning small mt-1">9 Low-stock warnings</div>
                    </div>
                  </Col>
                  <Col md={3}>
                    <div className="bg-dark bg-opacity-50 p-3 rounded border border-secondary">
                      <div className="text-secondary small">SUPPORT TICKETS</div>
                      <h3 className="fw-bold my-1 text-white">24 Open</h3>
                      <div className="progress mt-2" style={{height: '6px', background: '#374151'}}>
                        <div className="progress-bar bg-danger" style={{width: '20%'}}></div>
                      </div>
                      <div className="text-success small mt-1">▼ 15% open rates</div>
                    </div>
                  </Col>
                </Row>
              )}

              {widget.id === 'chart' && (
                <div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="small text-secondary">Interactive Revenue & Sales Performance Pipeline</span>
                    <div className="d-flex gap-3 text-secondary small">
                      <span><span className="d-inline-block bg-primary rounded-circle me-1" style={{width: '8px', height: '8px'}}></span>Revenue</span>
                      <span><span className="d-inline-block bg-info rounded-circle me-1" style={{width: '8px', height: '8px'}}></span>Net Profit</span>
                    </div>
                  </div>
                  {/* Custom SVG Line Chart */}
                  <div className="position-relative" style={{height: '200px'}}>
                    <svg viewBox="0 0 600 200" className="w-100 h-100" style={{background: 'rgba(0,0,0,0.1)'}}>
                      <line x1="40" y1="20" x2="40" y2="180" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                      <line x1="40" y1="180" x2="580" y2="180" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                      <path d="M 40 150 Q 150 80 260 110 T 480 40 T 580 60" fill="none" stroke="#6366f1" strokeWidth="3" />
                      <path d="M 40 170 Q 150 120 260 140 T 480 90 T 580 110" fill="none" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4" />
                      <circle cx="260" cy="110" r="4" fill="#6366f1" />
                      <circle cx="480" cy="40" r="4" fill="#6366f1" />
                    </svg>
                    <div className="position-absolute bg-dark border border-secondary text-white p-2 rounded small" style={{top: '15px', right: '120px', pointerEvents: 'none', opacity: 0.9}}>
                      <strong>Qualified Peak</strong><br/>Revenue: ₹3,120,490
                    </div>
                  </div>
                </div>
              )}

              {widget.id === 'feed' && (
                <div style={{maxHeight: '200px', overflowY: 'auto'}}>
                  <div className="d-flex justify-content-between mb-2 pb-2 border-bottom border-secondary border-opacity-20 small">
                    <span className="text-white">Lead #4920 converted by Agent A. Sen</span>
                    <span className="text-secondary">2 mins ago</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2 pb-2 border-bottom border-secondary border-opacity-20 small">
                    <span className="text-white">Inter-branch inventory request locked</span>
                    <span className="text-secondary">15 mins ago</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2 pb-2 border-bottom border-secondary border-opacity-20 small">
                    <span className="text-white">General Ledger balanced check passed</span>
                    <span className="text-secondary">42 mins ago</span>
                  </div>
                  <div className="d-flex justify-content-between small">
                    <span className="text-white">User admin logged in from IP 192.168.1.1</span>
                    <span className="text-secondary">1 hour ago</span>
                  </div>
                </div>
              )}
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

/* 2. Authentication & Identity */
const IdentityView = ({ logAction }) => {
  const [showTimeoutModal, setShowTimeoutModal] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);
  const [mfaConfigured, setMfaConfigured] = useState(false);
  const [otpCode, setOtpCode] = useState('');

  const triggerSSORedirect = (provider) => {
    logAction("Identity Provider (IdP) Broker", `Redirecting authorization flow to SSO [${provider}]. Minting client certificate validation key.`, "info");
    alert(`Simulating SSO Login Redirect to ${provider}`);
  };

  const handleMfaVerify = () => {
    if (otpCode.length === 6) {
      setMfaConfigured(true);
      logAction("MFA Challenge Dispatcher", "MFA configuration successful. Enrolled device coordinates verified.", "success");
    } else {
      alert("Invalid code structure. Must be exactly 6 numerical digits.");
    }
  };

  const triggerTimeoutModal = () => {
    setTimeLeft(15);
    setShowTimeoutModal(true);
    logAction("Session Registry Service", "Session timeout alert triggered. Monitoring keep-alive signals.", "warning");
  };

  return (
    <div>
      <h3 className="mb-4">Unified Authentication & Access Matrix</h3>
      <Row className="g-4">
        {/* Sign In & MFA */}
        <Col md={6}>
          <Card className="erp-glass-card p-4 h-100">
            <h5 className="text-indigo-400 mb-3">Unified SSO Broker & Redirects</h5>
            <div className="d-flex gap-2 flex-wrap mb-4">
              <Button className="erp-btn" onClick={() => triggerSSORedirect('SAML 2.0')}>SAML Identity Provider</Button>
              <Button className="erp-btn" style={{background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)'}} onClick={() => triggerSSORedirect('OIDC')}>OAuth2 / OIDC Hub</Button>
            </div>

            <h5 className="text-indigo-400 mb-3">MFA QR Authenticator Setup</h5>
            <Row className="align-items-center">
              <Col xs={4} className="text-center">
                {/* Mock QR code drawing */}
                <div style={{background: '#fff', padding: '10px', borderRadius: '8px', display: 'inline-block'}}>
                  <svg viewBox="0 0 100 100" style={{width: '80px', height: '80px'}}>
                    <rect x="10" y="10" width="20" height="20" fill="#000" />
                    <rect x="70" y="10" width="20" height="20" fill="#000" />
                    <rect x="10" y="70" width="20" height="20" fill="#000" />
                    <rect x="40" y="40" width="20" height="20" fill="#000" />
                    <rect x="50" y="70" width="10" height="10" fill="#000" />
                    <rect x="70" y="50" width="10" height="20" fill="#000" />
                  </svg>
                </div>
              </Col>
              <Col xs={8}>
                <p className="small text-secondary mb-2">Scan with Google Authenticator. Input 6-digit OTP code below to enroll.</p>
                <div className="d-flex gap-2">
                  <Form.Control 
                    type="text" 
                    placeholder="123456" 
                    className="erp-form-control border-secondary text-center" 
                    style={{width: '120px'}}
                    value={otpCode}
                    onChange={(e) => setOtpCode(e.target.value.replace(/\D/g,'').slice(0, 6))}
                  />
                  <Button className="erp-btn" onClick={handleMfaVerify}>Enroll Device</Button>
                </div>
                {mfaConfigured && <div className="text-success small mt-2">✔ MFA Device successfully registered. Backup keys downloaded.</div>}
              </Col>
            </Row>
          </Card>
        </Col>

        {/* Access controls & Timeouts */}
        <Col md={6}>
          <Card className="erp-glass-card p-4 h-100">
            <h5 className="text-indigo-400 mb-3">Session Diagnostics</h5>
            <p className="text-secondary small">Test the active session timer countdown and keep-alive notification popups.</p>
            <Button className="erp-btn-secondary mb-4" onClick={triggerTimeoutModal}>Simulate System Timeout Warning</Button>

            <h5 className="text-indigo-400 mb-3">Enrolled Enterprise Devices</h5>
            <Table hover className="erp-table">
              <thead>
                <tr>
                  <th>Device / OS</th>
                  <th>IP Address</th>
                  <th>Context</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Chrome / Windows 11</td>
                  <td>192.168.1.149</td>
                  <td>Active</td>
                  <td><span className="text-success small">Current</span></td>
                </tr>
                <tr>
                  <td>Safari / iOS 17</td>
                  <td>182.49.20.91</td>
                  <td>3 hours ago</td>
                  <td><button className="btn btn-sm btn-link text-danger p-0" onClick={() => logAction("Session Registry Service", "Revoked Safari/iOS session ticket. Enforced Argon2 re-authentication.", "warning")}>Revoke</button></td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>

      {/* Timeout keep-alive warning modal overlay */}
      <Modal show={showTimeoutModal} onHide={() => setShowTimeoutModal(false)} centered contentClassName="bg-dark text-white border border-secondary">
        <Modal.Body className="p-4 text-center">
          <FaLock className="text-warning mb-3 fs-1" />
          <h4 className="fw-bold">Security Session Expiring</h4>
          <p className="text-secondary">You have been inactive. For compliance, your session automatically terminates in <strong className="text-warning">{timeLeft} seconds</strong>.</p>
          <div className="d-flex gap-3 justify-content-center mt-4">
            <Button className="erp-btn" onClick={() => { setShowTimeoutModal(false); logAction("Session Registry Service", "JWT Session extended. Keep-alive assertion registered.", "success"); }}>
              Keep Session Active
            </Button>
            <Button className="erp-btn-danger" onClick={() => { setShowTimeoutModal(false); logAction("Session Registry Service", "User session logged out via manual overlay trigger.", "warning"); }}>
              Log Out
            </Button>
          </div>
        </Modal.Body>
      </Modal>

      {/* RBAC Permissions Grid Matrix */}
      <Card className="erp-glass-card p-4 mt-4">
        <h5 className="text-indigo-400 mb-3">RBAC Granular Permissions Matrix</h5>
        <div className="table-responsive">
          <Table hover className="erp-table">
            <thead>
              <tr>
                <th>System Role</th>
                <th>CRM Pipeline</th>
                <th>Accounting Ledger</th>
                <th>Warehouse Stock</th>
                <th>Employee Payroll</th>
                <th>Settings / Backups</th>
              </tr>
            </thead>
            <tbody>
              {['Enterprise Admin', 'Finance Manager', 'Operations Clerk', 'Guest Observer'].map((role) => (
                <tr key={role}>
                  <td className="fw-bold">{role}</td>
                  <td><Form.Check type="switch" defaultChecked={role.includes('Admin') || role.includes('Manager')} onChange={() => logAction("Granular Auth Middleware", `Updated RBAC CRM rules for [${role}].`, "info")} /></td>
                  <td><Form.Check type="switch" defaultChecked={role.includes('Admin') || role.includes('Finance')} onChange={() => logAction("Granular Auth Middleware", `Updated RBAC Financial rules for [${role}].`, "info")} /></td>
                  <td><Form.Check type="switch" defaultChecked={role.includes('Admin') || role.includes('Clerk')} onChange={() => logAction("Granular Auth Middleware", `Updated RBAC Stock rules for [${role}].`, "info")} /></td>
                  <td><Form.Check type="switch" defaultChecked={role.includes('Admin')} onChange={() => logAction("Granular Auth Middleware", `Updated RBAC HR rules for [${role}].`, "info")} /></td>
                  <td><Form.Check type="switch" defaultChecked={role.includes('Admin')} onChange={() => logAction("Granular Auth Middleware", `Updated RBAC Backup settings for [${role}].`, "info")} /></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Card>
    </div>
  );
};

/* 3. CRM & Leads */
const CRMView = ({ logAction }) => {
  const [deals, setDeals] = useState([
    { id: 1, name: "Acme Corp Licences", value: 45000, stage: "Qualified", agent: "Amit R." },
    { id: 2, name: "Raja Indus Upgrade", value: 120000, stage: "Proposal", agent: "Sania M." },
    { id: 3, name: "Bharat Steels Cloud", value: 95000, stage: "Qualified", agent: "Amit R." }
  ]);

  const stages = ["Qualified", "Proposal", "Negotiation", "Won"];

  const moveDeal = (dealId, nextStage) => {
    setDeals(prev => prev.map(d => d.id === dealId ? { ...d, stage: nextStage } : d));
    const deal = deals.find(d => d.id === dealId);
    logAction("Deals State Machine", `Deal [${deal.name}] status updated to [${nextStage}]. Pipeline valuation weighted.`, "success");
  };

  // 360 profile search
  const [searchQuery, setSearchQuery] = useState('');
  const [contactResult, setContactResult] = useState(null);

  const handleContactSearch = (e) => {
    e.preventDefault();
    if (searchQuery.toLowerCase().includes('rohan')) {
      setContactResult({
        name: "Rohan Varma",
        company: "Varma Tech Pvt",
        email: "rohan@varmatech.in",
        value: "₹5,40,000",
        tickets: "0 Open (2 Closed)",
        segment: "High-Value Enterprise"
      });
      logAction("Customer Segmentation Engine", "Fetched Rohan Varma profile with demographic indicators from DB.", "success");
    } else {
      setContactResult(null);
      alert("Try searching for 'Rohan' (mock database contact).");
    }
  };

  return (
    <div>
      <h3 className="mb-4">CRM Pipelines & Customer Engagement</h3>
      <Row className="g-4">
        {/* Deal Kanban Board */}
        <Col md={12}>
          <Card className="erp-glass-card p-4">
            <h5 className="text-indigo-400 mb-3">Visual Deals Kanban Board</h5>
            <div className="erp-kanban-board">
              {stages.map((stage) => {
                const stageDeals = deals.filter(d => d.stage === stage);
                const totalValue = stageDeals.reduce((sum, d) => sum + d.value, 0);
                return (
                  <div key={stage} className="erp-kanban-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="fw-bold text-white">{stage}</span>
                      <span className="badge bg-secondary">₹{totalValue.toLocaleString()}</span>
                    </div>
                    {stageDeals.map((deal) => (
                      <div key={deal.id} className="erp-kanban-card">
                        <div className="fw-semibold text-white">{deal.name}</div>
                        <div className="text-secondary small mt-1">Agent: {deal.agent}</div>
                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <span className="text-indigo-400 fw-bold">₹{deal.value.toLocaleString()}</span>
                          <div className="d-flex gap-1">
                            {stages.indexOf(stage) > 0 && (
                              <button className="btn btn-sm btn-dark py-0 px-1 text-secondary" onClick={() => moveDeal(deal.id, stages[stages.indexOf(stage)-1])}>◀</button>
                            )}
                            {stages.indexOf(stage) < stages.length - 1 && (
                              <button className="btn btn-sm btn-dark py-0 px-1 text-secondary" onClick={() => moveDeal(deal.id, stages[stages.indexOf(stage)+1])}>▶</button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </Card>
        </Col>

        {/* 360 Profile & Lead Form Builder */}
        <Col md={6}>
          <Card className="erp-glass-card p-4">
            <h5 className="text-indigo-400 mb-3">360-Degree Contact Profiler</h5>
            <Form onSubmit={handleContactSearch} className="d-flex gap-2 mb-3">
              <Form.Control 
                type="text" 
                placeholder="Search contact, e.g. 'Rohan'..." 
                className="erp-form-control border-secondary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button type="submit" className="erp-btn">Lookup</Button>
            </Form>

            {contactResult ? (
              <div className="bg-dark bg-opacity-50 p-3 rounded border border-secondary">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <h6 className="text-white mb-0">{contactResult.name}</h6>
                  <span className="erp-badge erp-badge-success">{contactResult.segment}</span>
                </div>
                <div className="small text-secondary mb-1">Company: <span className="text-white">{contactResult.company}</span></div>
                <div className="small text-secondary mb-1">Email: <span className="text-white">{contactResult.email}</span></div>
                <div className="small text-secondary mb-1">Total Purchases: <span className="text-indigo-400 fw-bold">{contactResult.value}</span></div>
                <div className="small text-secondary">Open Tickets: <span className="text-white">{contactResult.tickets}</span></div>
              </div>
            ) : (
              <div className="text-center text-secondary py-4 small border border-secondary border-dashed rounded">
                Search a contact to load comprehensive 360-degree telemetry timeline
              </div>
            )}
          </Card>
        </Col>

        {/* Lead Form Builder */}
        <Col md={6}>
          <Card className="erp-glass-card p-4">
            <h5 className="text-indigo-400 mb-3">Lead Capture Form Builder</h5>
            <p className="text-secondary small">Define input restrictions, toggle form fields, and output embeddable dynamic HTML scripts.</p>
            <div className="d-flex gap-3 mb-3">
              <Form.Check type="checkbox" label="Phone Input" id="phone" defaultChecked onChange={() => logAction("Lead Assignment Engine", "Updated leads field constraints schema.", "info")} />
              <Form.Check type="checkbox" label="Signature Pad" id="sig" defaultChecked onChange={() => logAction("Lead Assignment Engine", "Enabled dynamic signature pad capture field.", "info")} />
              <Form.Check type="checkbox" label="Campaign Tracker" id="track" defaultChecked onChange={() => logAction("Campaign Attribution Dashboard", "Initialized attribution query hooks.", "success")} />
            </div>
            <Form.Control 
              as="textarea" 
              rows={3} 
              readOnly 
              className="erp-form-control font-monospace text-secondary small" 
              value='<iframe src="https://collegesearch.edu/embed/lead-form?fields=name,email,phone,signature" width="100%" height="400"></iframe>'
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

/* 4. Operations & Inventory */
const OperationsView = ({ logAction }) => {
  const [stock, setStock] = useState([
    { sku: "SKU-9029-A", name: "Premium College Planners", Mumbai: 450, Delhi: 80, Min: 100 },
    { sku: "SKU-3810-B", name: "Executive Leather Portfolios", Mumbai: 45, Delhi: 12, Min: 50 },
    { sku: "SKU-1102-C", name: "Branded Brass Calculators", Mumbai: 120, Delhi: 140, Min: 80 }
  ]);

  // AttributeConfigurator state
  const [colorInput, setColorInput] = useState('Red, Blue');
  const [sizeInput, setSizeInput] = useState('S, M, L');
  const [variants, setVariants] = useState([]);

  const generateVariants = () => {
    const colors = colorInput.split(',').map(c => c.trim()).filter(Boolean);
    const sizes = sizeInput.split(',').map(s => s.trim()).filter(Boolean);
    const result = [];
    colors.forEach(c => {
      sizes.forEach(s => {
        result.push({
          sku: `VAR-${c.substring(0,3).toUpperCase()}-${s}`,
          attributes: `${c} / ${s}`,
          basePrice: '₹1,200',
          barcode: `*EAN${Math.floor(100000 + Math.random() * 900000)}*`
        });
      });
    });
    setVariants(result);
    logAction("Barcode & QR Generator", `Generated SKU matrices and EAN barcode raster formats for ${result.length} child variants.`, "success");
  };

  const executeTransfer = (sku, from, to, qty) => {
    logAction("Inter-branch Stock Locker", `Multi-phase commit initialized. Locking ${qty} units of ${sku} at source [${from}].`, "info");
    setTimeout(() => {
      setStock(prev => prev.map(item => {
        if (item.sku === sku) {
          return {
            ...item,
            [from]: item[from] - qty,
            [to]: item[to] + qty
          };
        }
        return item;
      }));
      logAction("Inter-branch Stock Locker", `Commit successful. Stock transferred and unlocked at target [${to}].`, "success");
    }, 1000);
  };

  return (
    <div>
      <h3 className="mb-4">Inventory & Warehouse Logistics</h3>
      <Row className="g-4">
        {/* Stock Status Grid */}
        <Col md={12}>
          <Card className="erp-glass-card p-4">
            <h5 className="text-indigo-400 mb-3">Real-Time Stock Grid</h5>
            <Table hover className="erp-table">
              <thead>
                <tr>
                  <th>SKU / Product</th>
                  <th>Mumbai Warehouse</th>
                  <th>Delhi Warehouse</th>
                  <th>Min Level Limit</th>
                  <th>Valuation (FIFO)</th>
                  <th>Action Transfer</th>
                </tr>
              </thead>
              <tbody>
                {stock.map((item) => (
                  <tr key={item.sku}>
                    <td>
                      <span className="fw-semibold text-white">{item.name}</span><br/>
                      <span className="text-secondary small font-monospace">{item.sku}</span>
                    </td>
                    <td>{item.Mumbai} {item.Mumbai < item.Min/2 && <span className="badge bg-danger ms-2">Low</span>}</td>
                    <td>{item.Delhi} {item.Delhi < item.Min/2 && <span className="badge bg-danger ms-2">Low</span>}</td>
                    <td><span className="text-warning font-monospace">{item.Min}</span></td>
                    <td className="text-indigo-400">₹{( (item.Mumbai + item.Delhi) * 1250 ).toLocaleString()}</td>
                    <td>
                      <button 
                        className="btn btn-sm btn-dark text-info border border-secondary"
                        onClick={() => executeTransfer(item.sku, "Mumbai", "Delhi", 10)}
                        disabled={item.Mumbai < 10}
                      >
                        Send 10 to Delhi
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
        </Col>

        {/* Product Variant Configurator */}
        <Col md={6}>
          <Card className="erp-glass-card p-4">
            <h5 className="text-indigo-400 mb-3">Product Variant Matrix Engine</h5>
            <Form.Group className="mb-3">
              <Form.Label className="erp-form-label">Attributes (Color)</Form.Label>
              <Form.Control type="text" className="erp-form-control" value={colorInput} onChange={(e) => setColorInput(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="erp-form-label">Attributes (Size)</Form.Label>
              <Form.Control type="text" className="erp-form-control" value={sizeInput} onChange={(e) => setSizeInput(e.target.value)} />
            </Form.Group>
            <Button className="erp-btn w-100" onClick={generateVariants}>Generate Matrix SKU Rows</Button>

            {variants.length > 0 && (
              <div className="mt-3" style={{maxHeight: '180px', overflowY: 'auto'}}>
                <Table hover className="erp-table mb-0">
                  <tbody>
                    {variants.map(v => (
                      <tr key={v.sku}>
                        <td className="font-monospace small text-white">{v.sku}</td>
                        <td className="small text-secondary">{v.attributes}</td>
                        <td className="small text-success font-monospace">{v.barcode}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            )}
          </Card>
        </Col>

        {/* Reorder daemon diagnostics */}
        <Col md={6}>
          <Card className="erp-glass-card p-4">
            <h5 className="text-indigo-400 mb-3">Reorder Daemon Status</h5>
            <div className="bg-dark bg-opacity-50 p-3 rounded border border-secondary mb-3">
              <div className="d-flex justify-content-between mb-2">
                <span>Daemon Service State:</span>
                <span className="text-success fw-bold">Online</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Last Scan Cycle Time:</span>
                <span className="text-secondary small">Today, 21:00</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Triggered Requisitions:</span>
                <span className="text-warning">2 Pending Purchase approvals</span>
              </div>
            </div>
            <Button className="erp-btn-secondary w-100" onClick={() => logAction("Reorder Point daemon", "Forced database reorder scan. Low-stock limits verified.", "success")}>
              Force Daemon Scan Now
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

/* 5. Sales & Sourcing */
const SalesView = ({ logAction }) => {
  // Quote calculations
  const [basePrice, setBasePrice] = useState(15000);
  const [qty, setQty] = useState(10);
  const [discount, setDiscount] = useState(5);
  const [taxRate, setTaxRate] = useState(18); // GST %

  const grossTotal = basePrice * qty;
  const discountAmount = (grossTotal * discount) / 100;
  const netTotal = grossTotal - discountAmount;
  const taxAmount = (netTotal * taxRate) / 100;
  const finalQuoteVal = netTotal + taxAmount;

  // POS State
  const [posCart, setPosCart] = useState([]);
  const products = [
    { id: 101, name: "College Journal Set", price: 290, barcode: "890102" },
    { id: 102, name: "Leather Folio Brief", price: 1800, barcode: "890204" },
    { id: 103, name: "Branded Roller Pen", price: 95, barcode: "890305" }
  ];

  const addToCart = (product) => {
    setPosCart(prev => {
      const match = prev.find(p => p.id === product.id);
      if (match) {
        return prev.map(p => p.id === product.id ? { ...p, qty: p.qty + 1 } : p);
      }
      return [...prev, { ...product, qty: 1 }];
    });
    logAction("Pricing & Promotions Engine", `POS checkout added [${product.name}]. Recalculating totals.`, "success");
  };

  const clearCart = () => {
    setPosCart([]);
    logAction("Pricing & Promotions Engine", "Cleared virtual POS cart registry.", "info");
  };

  return (
    <div>
      <h3 className="mb-4">Sales Operations & Point-of-Sale Terminal</h3>
      <Row className="g-4">
        {/* Interactive Quotation Designer */}
        <Col md={6}>
          <Card className="erp-glass-card p-4">
            <h5 className="text-indigo-400 mb-3">Interactive Quotation Designer</h5>
            <Row className="g-2">
              <Col xs={6}>
                <Form.Group className="mb-2">
                  <Form.Label className="erp-form-label">Base Item Unit Cost (₹)</Form.Label>
                  <Form.Control type="number" className="erp-form-control" value={basePrice} onChange={(e) => setBasePrice(parseFloat(e.target.value) || 0)} />
                </Form.Group>
              </Col>
              <Col xs={6}>
                <Form.Group className="mb-2">
                  <Form.Label className="erp-form-label">Order Quantity Units</Form.Label>
                  <Form.Control type="number" className="erp-form-control" value={qty} onChange={(e) => setQty(parseInt(e.target.value) || 0)} />
                </Form.Group>
              </Col>
              <Col xs={6}>
                <Form.Group className="mb-2">
                  <Form.Label className="erp-form-label">Discount Rate Percentage (%)</Form.Label>
                  <Form.Control type="number" className="erp-form-control" value={discount} onChange={(e) => setDiscount(parseFloat(e.target.value) || 0)} />
                </Form.Group>
              </Col>
              <Col xs={6}>
                <Form.Group className="mb-2">
                  <Form.Label className="erp-form-label">Tax Class Template</Form.Label>
                  <Form.Select className="erp-form-select" value={taxRate} onChange={(e) => setTaxRate(parseInt(e.target.value))}>
                    <option value={18}>18% GST (Standard)</option>
                    <option value={5}>5% VAT (Reduced)</option>
                    <option value={0}>0% Tax Exempt</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <div className="bg-dark bg-opacity-50 p-3 rounded border border-secondary mt-3">
              <div className="d-flex justify-content-between mb-1 small">
                <span className="text-secondary">Gross Aggregate:</span>
                <span>₹{grossTotal.toLocaleString()}</span>
              </div>
              <div className="d-flex justify-content-between mb-1 small text-danger">
                <span>Promotional Discount:</span>
                <span>- ₹{discountAmount.toLocaleString()}</span>
              </div>
              <div className="d-flex justify-content-between mb-1 small">
                <span className="text-secondary">Taxes Asset:</span>
                <span>₹{taxAmount.toLocaleString()}</span>
              </div>
              <div className="d-flex justify-content-between border-top border-secondary pt-2 fw-bold text-white fs-6">
                <span>Final Quotation Value:</span>
                <span style={{color: '#34d399'}}>₹{finalQuoteVal.toLocaleString()}</span>
              </div>
            </div>

            <Button className="erp-btn w-100 mt-3" onClick={() => logAction("PO Document Compiler", `Generated quotation sales draft. Net value: ₹${finalQuoteVal}. Ready for client confirmation.`, "success")}>
              Export to Formal PO PDF
            </Button>
          </Card>
        </Col>

        {/* POS Grid Checkout */}
        <Col md={6}>
          <Card className="erp-glass-card p-4">
            <h5 className="text-indigo-400 mb-3">POS Grid Checkout Console</h5>
            <div className="d-flex gap-2 mb-3">
              {products.map(p => (
                <button key={p.id} className="btn btn-outline-secondary btn-sm text-start flex-grow-1" onClick={() => addToCart(p)}>
                  <span className="d-block fw-semibold text-white">{p.name}</span>
                  <span className="text-indigo-400 font-monospace">₹{p.price}</span>
                </button>
              ))}
            </div>

            <div className="bg-dark bg-opacity-40 p-3 rounded border border-secondary" style={{minHeight: '120px'}}>
              <h6 className="text-white border-bottom border-secondary border-opacity-30 pb-2 mb-2">POS Shopping Cart</h6>
              {posCart.length === 0 ? (
                <div className="text-center text-secondary small py-4">Cart empty. Scan or select items above.</div>
              ) : (
                <div>
                  {posCart.map(item => (
                    <div key={item.id} className="d-flex justify-content-between small text-white mb-2">
                      <span>{item.name} (x{item.qty})</span>
                      <span>₹{item.price * item.qty}</span>
                    </div>
                  ))}
                  <div className="d-flex justify-content-between border-top border-secondary pt-2 mt-2 fw-bold">
                    <span>Grand Total:</span>
                    <span className="text-success">₹{posCart.reduce((sum, item) => sum + (item.price*item.qty), 0)}</span>
                  </div>
                  <div className="d-flex gap-2 mt-3">
                    <Button className="erp-btn btn-sm flex-grow-1" onClick={() => { logAction("Fulfillment Pipeline Manager", `POS transaction completed. Deducting stock values. Generating thermal receipt document.`, "success"); setPosCart([]); }}>
                      Submit Transaction (Card/UPI)
                    </Button>
                    <Button className="erp-btn-danger btn-sm" onClick={clearCart}>Reset</Button>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

/* 6. HR & Timesheets */
const HRView = ({ logAction }) => {
  const [orgCollapsed, setOrgCollapsed] = useState(false);
  const [timesheetApproved, setTimesheetApproved] = useState(false);

  const handleAttendanceCheckin = () => {
    // Delhi HQ coordinates: 28.5355, 77.3910
    // Simulating user GPS coordinate matching
    logAction("Attendance Registry Processor", "Verifying clock-in geo-coordinates against authorized branch coordinates...", "info");
    setTimeout(() => {
      logAction("Attendance Registry Processor", "Geotag match validated (Delhi HQ). Checkin logged successfully.", "success");
      alert("Simulated GPS Checkin successful at Delhi HQ coordinates!");
    }, 800);
  };

  return (
    <div>
      <h3 className="mb-4">Employee Management & Appraisal Console</h3>
      <Row className="g-4">
        {/* Org Chart Collapsible Hierarchy */}
        <Col md={6}>
          <Card className="erp-glass-card p-4 h-100">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="text-indigo-400 mb-0">Collapsible Corporate Org Chart</h5>
              <button className="btn btn-sm btn-link text-secondary" onClick={() => setOrgCollapsed(!orgCollapsed)}>
                {orgCollapsed ? 'Expand All' : 'Collapse Hierarchy'}
              </button>
            </div>
            
            <div className="border border-secondary border-opacity-35 p-3 rounded bg-dark bg-opacity-30">
              {/* Org tree nodes visual layout */}
              <div className="text-center mb-2">
                <div className="d-inline-block bg-primary text-white py-1 px-3 rounded small fw-bold">CEO Office</div>
              </div>
              <div className="text-center mb-2">│</div>
              {!orgCollapsed && (
                <div className="d-flex justify-content-around">
                  <div className="text-center">
                    <div className="d-inline-block bg-info text-dark py-1 px-2 rounded small fw-semibold">VP Finance</div>
                    <div className="text-center small my-1">│</div>
                    <div className="d-inline-block bg-secondary text-white py-1 px-2 rounded small">Ledger Clerks</div>
                  </div>
                  <div className="text-center">
                    <div className="d-inline-block bg-info text-dark py-1 px-2 rounded small fw-semibold">VP Engineering</div>
                    <div className="text-center small my-1">│</div>
                    <div className="d-inline-block bg-secondary text-white py-1 px-2 rounded small">Node Devs</div>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </Col>

        {/* Timesheet Submit Grid */}
        <Col md={6}>
          <Card className="erp-glass-card p-4 h-100">
            <h5 className="text-indigo-400 mb-3">Timesheet Management & Geolocation</h5>
            <Table hover className="erp-table mb-3">
              <thead>
                <tr>
                  <th>Project</th>
                  <th>Hours (Mon-Fri)</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Proj-Alpha (CRM Core)</td>
                  <td>28 Hrs</td>
                  <td>Approved</td>
                </tr>
                <tr>
                  <td>Proj-Beta (Payments Integration)</td>
                  <td>12 Hrs</td>
                  <td>{timesheetApproved ? 'Approved' : 'Submitted'}</td>
                </tr>
              </tbody>
            </Table>
            <div className="d-flex gap-2">
              <Button className="erp-btn flex-grow-1" onClick={handleAttendanceCheckin}>
                Simulate Geotag attendance Checkin
              </Button>
              <Button className="erp-btn-secondary" onClick={() => { setTimesheetApproved(true); logAction("Timesheet Evaluator", "Timesheet hours verified against standard work week parameters. Approved.", "success"); }}>
                Supervisor Sign-off
              </Button>
            </div>
          </Card>
        </Col>

        {/* Leave Allocation dashboard */}
        <Col md={12}>
          <Card className="erp-glass-card p-4">
            <h5 className="text-indigo-400 mb-3">Leave Accrual & Leave Request Tracker</h5>
            <Row className="g-3 text-center">
              <Col xs={4}>
                <div className="bg-dark bg-opacity-50 p-3 rounded border border-secondary">
                  <div className="text-secondary small">CASUAL LEAVE</div>
                  <h4 className="fw-bold my-1 text-white">4 / 12 Days</h4>
                  <span className="text-secondary small">Remaining</span>
                </div>
              </Col>
              <Col xs={4}>
                <div className="bg-dark bg-opacity-50 p-3 rounded border border-secondary">
                  <div className="text-secondary small">SICK LEAVE</div>
                  <h4 className="fw-bold my-1 text-white">6 / 8 Days</h4>
                  <span className="text-secondary small">Remaining</span>
                </div>
              </Col>
              <Col xs={4}>
                <div className="bg-dark bg-opacity-50 p-3 rounded border border-secondary">
                  <div className="text-secondary small">PAID PRIVILEGE</div>
                  <h4 className="fw-bold my-1 text-white">18 / 24 Days</h4>
                  <span className="text-secondary small">Remaining</span>
                </div>
              </Col>
            </Row>
            <Button className="erp-btn w-100 mt-3" onClick={() => logAction("Leave Accrual Worker", "Processed batch leave day increments based on tenure parameters.", "success")}>
              Run Accrual Worker Run
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

/* 7. Accounting & Finance */
const AccountingView = ({ logAction }) => {
  // Ledger rows
  const [journalRows, setJournalRows] = useState([
    { account: "Cash in Hand", debit: 50000, credit: 0 },
    { account: "Software Subscriptions Expense", debit: 0, credit: 50000 }
  ]);

  const debitsSum = journalRows.reduce((sum, r) => sum + r.debit, 0);
  const creditsSum = journalRows.reduce((sum, r) => sum + r.credit, 0);
  const diff = Math.abs(debitsSum - creditsSum);

  const addJournalRow = () => {
    setJournalRows([...journalRows, { account: "Suspense Account", debit: 0, credit: 0 }]);
  };

  const handlePostJournal = () => {
    if (diff !== 0) {
      logAction("Double-Entry Ledger Validator", `Double-entry write rejected. Out of balance by ₹${diff}. Debits must equal Credits.`, "warning");
      alert(`Journal rejected: Debits (₹${debitsSum}) do not equal Credits (₹${creditsSum}). Difference: ₹${diff}`);
    } else {
      logAction("Double-Entry Ledger Validator", "Journal entry validated successfully. Writing double-entry audit records to General Ledger DB.", "success");
      alert("Journal entries posted successfully!");
    }
  };

  return (
    <div>
      <h3 className="mb-4">Accounting Core & Expenses State Machine</h3>
      <Row className="g-4">
        {/* Double-Entry Journal Designer */}
        <Col md={12}>
          <Card className="erp-glass-card p-4">
            <h5 className="text-indigo-400 mb-3">Double-Entry Journal Entry Designer</h5>
            <Table hover className="erp-table">
              <thead>
                <tr>
                  <th>Account Ledger Item</th>
                  <th>Debit Amount (₹)</th>
                  <th>Credit Amount (₹)</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {journalRows.map((row, idx) => (
                  <tr key={idx}>
                    <td>
                      <Form.Select 
                        className="erp-form-select border-secondary text-white" 
                        value={row.account}
                        onChange={(e) => {
                          const updated = [...journalRows];
                          updated[idx].account = e.target.value;
                          setJournalRows(updated);
                        }}
                      >
                        <option value="Cash in Hand">Cash & equivalents</option>
                        <option value="Software Subscriptions Expense">Software Subscriptions</option>
                        <option value="Accounts Receivable">Accounts Receivable</option>
                        <option value="Office Rentals">Office Rentals Asset</option>
                        <option value="Suspense Account">Suspense Account</option>
                      </Form.Select>
                    </td>
                    <td>
                      <Form.Control 
                        type="number" 
                        className="erp-form-control border-secondary text-white"
                        value={row.debit}
                        onChange={(e) => {
                          const updated = [...journalRows];
                          updated[idx].debit = parseFloat(e.target.value) || 0;
                          setJournalRows(updated);
                        }}
                      />
                    </td>
                    <td>
                      <Form.Control 
                        type="number" 
                        className="erp-form-control border-secondary text-white"
                        value={row.credit}
                        onChange={(e) => {
                          const updated = [...journalRows];
                          updated[idx].credit = parseFloat(e.target.value) || 0;
                          setJournalRows(updated);
                        }}
                      />
                    </td>
                    <td>
                      <button className="btn btn-sm btn-link text-danger" onClick={() => setJournalRows(journalRows.filter((_, i) => i !== idx))}><FaTrash/></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <Button className="erp-btn-secondary btn-sm" onClick={addJournalRow}><FaPlus className="me-1"/> Add Ledger Row</Button>
              <div className="d-flex gap-4 small text-white font-monospace">
                <span>Debits: ₹{debitsSum.toLocaleString()}</span>
                <span>Credits: ₹{creditsSum.toLocaleString()}</span>
                {diff === 0 ? (
                  <span className="text-success">✔ BALANCED</span>
                ) : (
                  <span className="text-warning">⚠ UNBALANCED DIFF: ₹{diff.toLocaleString()}</span>
                )}
              </div>
            </div>
            <Button className="erp-btn w-100 mt-4" onClick={handlePostJournal}>Post Journal Transaction</Button>
          </Card>
        </Col>

        {/* OCR Receipts claiming */}
        <Col md={6}>
          <Card className="erp-glass-card p-4">
            <h5 className="text-indigo-400 mb-3">Expense Claim OCR Pipeline</h5>
            <p className="text-secondary small">Upload mock receipts. Real-time OCR parses fields automatically and alerts system limits.</p>
            
            <div className="border border-secondary border-dashed rounded p-4 text-center bg-dark bg-opacity-30 mb-3">
              <FaCloudUploadAlt className="fs-1 text-secondary mb-2" />
              <div className="small text-secondary mb-2">Drag and drop receipts.png/pdf here</div>
              <Button 
                className="erp-btn btn-sm"
                onClick={() => {
                  logAction("Receipt OCR Pipeline", "Running OCR scanner on uploaded receipt.png. Extracting texts...", "info");
                  setTimeout(() => {
                    logAction("Receipt OCR Pipeline", "Merchant detected: 'Uber Cabs India'. Total: '₹1,450.00'. GST ID found.", "success");
                    logAction("Expense Claim State Machine", "Enforcing policy claim rules. Amount: ₹1450.00 < MaxLimit: ₹5000.00. Verification passed.", "success");
                    alert("OCR Parsed Success:\nMerchant: Uber Cabs\nTotal: ₹1,450\nPolicy status: Approved!");
                  }, 1200);
                }}
              >
                Simulate Receipt Upload
              </Button>
            </div>
          </Card>
        </Col>

        {/* Bank Feeds Matching */}
        <Col md={6}>
          <Card className="erp-glass-card p-4">
            <h5 className="text-indigo-400 mb-3">Bank Feeds Reconciliation</h5>
            <div className="table-responsive small">
              <Table hover className="erp-table mb-0">
                <thead>
                  <tr>
                    <th>Bank transaction details</th>
                    <th>Ledger matching recommendation</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span className="text-white">IMPS Inward - Rohan Sharma</span><br/>
                      <span className="text-secondary">₹12,500.00 | May 25</span>
                    </td>
                    <td>
                      <span className="text-info font-monospace">INV-2026-94</span><br/>
                      <span className="text-secondary">98.2% Date/Amt match</span>
                    </td>
                    <td>
                      <button className="btn btn-sm btn-dark text-success border-secondary" onClick={() => logAction("Matching Recommendation Engine", "Reconciliation successful. Ledger Invoice INV-2026-94 marked PAID.", "success")}>Match</button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

/* 8. Document Workspace */
const DocumentView = ({ logAction }) => {
  const [activeDiff, setActiveDiff] = useState(false);
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  // Sign canvas drawing
  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.stroke();
  };

  const clearSignature = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    logAction("Signature Cryptography Service", "Signature canvas cleared.", "info");
  };

  const saveSignature = () => {
    logAction("Signature Cryptography Service", "Digital signature captured. Cryptographic SHA-256 seal computed and embedded into PDF.", "success");
    alert("Cryptographic signature sealed successfully!");
  };

  return (
    <div>
      <h3 className="mb-4">Document workspace & electronic Signatures</h3>
      <Row className="g-4">
        {/* Document Version comparator */}
        <Col md={12}>
          <Card className="erp-glass-card p-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="text-indigo-400 mb-0">Version Control Comparison Dashboard</h5>
              <Button className="erp-btn-secondary btn-sm" onClick={() => setActiveDiff(!activeDiff)}>
                {activeDiff ? 'View Standard' : 'Simulate Git-like File Diff'}
              </Button>
            </div>

            {activeDiff ? (
              <div className="border border-secondary rounded p-3 font-monospace small" style={{background: '#070b14'}}>
                <div className="text-secondary pb-2">Comparing: enterprise-config.json [v1.2 vs v1.3]</div>
                <div style={{color: '#a8a29e'}}>  "tenantId": "Mumbai_429",</div>
                <div style={{background: 'rgba(239, 68, 68, 0.15)', color: '#f87171'}}>- "databaseUrl": "postgresql://root@10.0.0.1/erp",</div>
                <div style={{background: 'rgba(16, 185, 129, 0.15)', color: '#34d399'}}>+ "databaseUrl": "postgresql://app_instance@10.240.12.91/prod_erp",</div>
                <div style={{color: '#a8a29e'}}>  "maxConnections": 250</div>
                <div className="text-end mt-3">
                  <button className="btn btn-sm btn-dark text-warning border-secondary" onClick={() => logAction("Document Version Engine", "Rollback action initiated. Restoring DB configurations file to version v1.2.", "warning")}>Rollback to v1.2</button>
                </div>
              </div>
            ) : (
              <div className="text-secondary small border border-secondary border-dashed p-4 rounded text-center">
                Click button above to display inline code variations, author footprint history, and system rollback capabilities.
              </div>
            )}
          </Card>
        </Col>

        {/* E-signature Canvas pad */}
        <Col md={6}>
          <Card className="erp-glass-card p-4">
            <h5 className="text-indigo-400 mb-3">Compliance Electronic Signature Pad</h5>
            <p className="text-secondary small">Draw your authorization signature inside the boundary box using your cursor.</p>
            
            <div className="sig-canvas-wrapper mb-3">
              <canvas 
                ref={canvasRef}
                width={360}
                height={160}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={() => setIsDrawing(false)}
                onMouseLeave={() => setIsDrawing(false)}
                style={{cursor: 'crosshair', display: 'block', background: '#fff'}}
              />
            </div>
            
            <div className="d-flex gap-2">
              <Button className="erp-btn flex-grow-1" onClick={saveSignature}>Verify & Cryptographically Stamp PDF</Button>
              <Button className="erp-btn-secondary" onClick={clearSignature}>Clear</Button>
            </div>
          </Card>
        </Col>

        {/* File Tagging workspace */}
        <Col md={6}>
          <Card className="erp-glass-card p-4">
            <h5 className="text-indigo-400 mb-3">File Explorer & Tagging Workspace</h5>
            <div className="border border-secondary border-opacity-30 rounded bg-dark bg-opacity-30 p-3 mb-3">
              <div className="file-tree-item">📁 <span className="ms-2">financial_reports/</span></div>
              <div className="file-tree-item"><span className="file-tree-indent"></span>📄 <span className="ms-2">Balance_Sheet_Q2.xlsx</span></div>
              <div className="file-tree-item">📁 <span className="ms-2">employee_contracts/</span></div>
              <div className="file-tree-item"><span className="file-tree-indent"></span>📄 <span className="ms-2">NonDisclosureAgreement.pdf</span> <span className="badge bg-secondary ms-2">NDA</span></div>
            </div>
            <div className="d-flex gap-2">
              <Form.Control type="text" placeholder="Add custom tag (e.g. STRICTLY_CONFIDENTIAL)..." className="erp-form-control border-secondary" id="tagInput" />
              <Button className="erp-btn" onClick={() => { logAction("Blob Storage Controller", "Uploaded files tagged. S3 security policies mapped successfully.", "success"); alert("Tag applied!"); }}>Tag</Button>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

/* 9. Workflow Automation Canvas */
const AutomationView = ({ logAction }) => {
  const [nodes, setNodes] = useState([
    { id: 1, type: 'trigger', label: 'Trigger: Lead Captured', x: 20, y: 150 },
    { id: 2, type: 'action', label: 'Action: Lead Score Calc', x: 220, y: 100 },
    { id: 3, type: 'action', label: 'Action: Assign Round-Robin', x: 220, y: 200 }
  ]);

  const addNode = (type, label) => {
    const id = Date.now();
    setNodes([...nodes, { id, type, label, x: 420, y: 150 }]);
    logAction("Workflow State Machine Runner", `Node added to logic canvas: [${label}].`, "info");
  };

  const runAutomationDryRun = () => {
    logAction("Workflow State Machine Runner", "Dry-run execution triggered. Parsing canvas workflow node schema...", "info");
    setTimeout(() => {
      logAction("Workflow State Machine Runner", "Execution Step 1: Trigger active. Parsed payload variables.", "success");
      logAction("Lead Score Calculator", "Execution Step 2: Running scoring rules. Score calculated: 78 points.", "success");
      logAction("Lead Assignment Engine", "Execution Step 3: Round-Robin lookup active. Assigned to S. Murthy.", "success");
      alert("Automation Dry-Run complete! Check the real-time backend log output below.");
    }, 1000);
  };

  return (
    <div>
      <h3 className="mb-4">Workflow Automation Node Canvas</h3>
      <Row className="g-4">
        {/* Node Editor Canvas */}
        <Col md={12}>
          <Card className="erp-glass-card p-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <h5 className="text-indigo-400 mb-0">Workflow Automation Editor</h5>
                <span className="small text-secondary">Connect system triggers to sequential rules, database actions, and delays.</span>
              </div>
              <div className="d-flex gap-2">
                <Button className="erp-btn btn-sm" onClick={() => addNode('action', 'Wait 2 Days Delay')}>+ Delay Node</Button>
                <Button className="erp-btn btn-sm" style={{background: '#059669'}} onClick={runAutomationDryRun}>Run Canvas Dry-Run</Button>
              </div>
            </div>

            <div className="automation-canvas">
              {nodes.map(n => (
                <div 
                  key={n.id} 
                  className={`automation-node ${n.type}`} 
                  style={{ left: `${n.x}px`, top: `${n.y}px` }}
                >
                  <div className="fw-bold text-white small" style={{fontSize: '11px'}}>{n.label}</div>
                  <div className="text-secondary" style={{fontSize: '9px'}}>ID: {n.id}</div>
                </div>
              ))}
              
              {/* Custom connecting lines SVGs */}
              <svg className="position-absolute w-100 h-100" style={{top:0, left:0, pointerEvents: 'none', zIndex: 1}}>
                <path d="M 170 170 Q 195 125 220 120" stroke="#a855f7" strokeWidth="2" fill="none" />
                <path d="M 170 170 Q 195 215 220 220" stroke="#a855f7" strokeWidth="2" fill="none" />
              </svg>
            </div>
          </Card>
        </Col>

        {/* Automation execution log */}
        <Col md={12}>
          <Card className="erp-glass-card p-4">
            <h5 className="text-indigo-400 mb-3">Automation Execution Logs</h5>
            <Table hover className="erp-table mb-0">
              <thead>
                <tr>
                  <th>Job ID</th>
                  <th>Workflow Target</th>
                  <th>Trigger event type</th>
                  <th>Status</th>
                  <th>Execution Timing</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-monospace text-white">JOB-982</td>
                  <td>Lead Assignment Pipeline</td>
                  <td>CRM_LEAD_CREATE</td>
                  <td><span className="erp-badge erp-badge-success">Success</span></td>
                  <td>142ms</td>
                </tr>
                <tr>
                  <td className="font-monospace text-white">JOB-981</td>
                  <td>Subscription Renewal Charge</td>
                  <td>CRON_DAILY_RENEWAL</td>
                  <td><span className="erp-badge erp-badge-success">Success</span></td>
                  <td>3200ms</td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

/* 10. Admin Settings & Backups */
const AdminSettingsView = ({ logAction }) => {
  const runBackup = () => {
    logAction("Automated Backup Worker", "Compiling local file directories and SQL database schema dumps...", "info");
    setTimeout(() => {
      logAction("Automated Backup Worker", "Database archive zipped. Compiling encryption keys.", "info");
      logAction("Automated Backup Worker", "Backup successfully uploaded to offsite secure S3 bucket. Checksum validation matched.", "success");
      alert("Offsite database backup compiled successfully!");
    }, 1200);
  };

  const verifyRestore = () => {
    logAction("Restore Validator", "Analyzing selected backup archive metadata...", "info");
    setTimeout(() => {
      logAction("Restore Validator", "Integrity check passed. Schema alignment matched. Target: collegesearch_main.", "success");
      alert("Restore dry-run successful. Database drift analysis: 0% mismatch.");
    }, 800);
  };

  return (
    <div>
      <h3 className="mb-4">System Settings & Recovery</h3>
      <Row className="g-4">
        {/* Enterprise Profile settings */}
        <Col md={6}>
          <Card className="erp-glass-card p-4 h-100">
            <h5 className="text-indigo-400 mb-3">Enterprise Core settings</h5>
            <Form.Group className="mb-3">
              <Form.Label className="erp-form-label">Global Base Currency</Form.Label>
              <Form.Select className="erp-form-select" onChange={() => logAction("Settings", "Updated currency display rules to USD.", "info")}>
                <option value="INR">Indian Rupee (₹)</option>
                <option value="USD">US Dollar ($)</option>
                <option value="EUR">Euro (€)</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="erp-form-label">Primary Tax Identifier ID</Form.Label>
              <Form.Control type="text" className="erp-form-control" defaultValue="27AAAAA0000A1Z5" onChange={() => logAction("Settings", "Updated corporate tax ID details.", "info")} />
            </Form.Group>
            <Button className="erp-btn w-100" onClick={() => logAction("Settings", "Saved local and global enterprise profile parameters.", "success")}>Save Configurations</Button>
          </Card>
        </Col>

        {/* Backups scheduler */}
        <Col md={6}>
          <Card className="erp-glass-card p-4 h-100">
            <h5 className="text-indigo-400 mb-3">Backup & Recovery Controls</h5>
            <p className="text-secondary small">Set up daily database cron syncs, encrypt archives, and trigger off-site storage replication.</p>
            <div className="d-grid gap-2 mb-3">
              <Button className="erp-btn" onClick={runBackup}>Trigger Manual DB Backup Now</Button>
              <Button className="erp-btn-secondary" onClick={verifyRestore}>Run Restore Integrity check</Button>
            </div>
            <div className="bg-dark bg-opacity-40 p-3 rounded border border-secondary small">
              <strong>Last Backup Code:</strong> <span className="text-success font-monospace">BKP-2026-06-07.zip</span><br/>
              <strong>Size:</strong> 242.9 MB | <strong>Encryption:</strong> AES-256
            </div>
          </Card>
        </Col>

        {/* Integration Hub Marketplace */}
        <Col md={12}>
          <Card className="erp-glass-card p-4">
            <h5 className="text-indigo-400 mb-3">App Marketplace Integration Connectors</h5>
            <div className="marketplace-grid">
              {[
                { name: 'Stripe Payments', icon: '💳', desc: 'Process billing invoices.' },
                { name: 'HubSpot Sync', icon: '🔄', desc: 'Sync CRM contacts.' },
                { name: 'Plaid Feeds', icon: '🏦', desc: 'Match bank feed rows.' },
                { name: 'Twilio SMS', icon: '💬', desc: 'MFA OTP text dispatch.' }
              ].map(app => (
                <div key={app.name} className="marketplace-card">
                  <div className="marketplace-logo">{app.icon}</div>
                  <div className="fw-bold text-white small mb-1">{app.name}</div>
                  <p className="text-secondary small mb-3" style={{fontSize:'10px'}}>{app.desc}</p>
                  <Form.Check type="switch" defaultChecked onChange={(e) => logAction("Data Synchronization Syncs", `${app.name} connector state toggled: ${e.target.checked ? 'CONNECTED' : 'DISCONNECTED'}`, "info")} />
                </div>
              ))}
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

/* 11. Developer Sandbox & Webhooks */
const TelemetryView = ({ logAction }) => {
  const [apiKey, setApiKey] = useState('sk_live_51N2x...98a2');
  const [endpointResult, setEndpointResult] = useState('');

  const generateApiKey = () => {
    const key = 'sk_live_' + Math.random().toString(36).substring(2, 12) + Math.random().toString(36).substring(2, 12);
    setApiKey(key);
    logAction("API Authenticator & Rate Limiter", "Generated new production developer authorization token. Rate limit: 120/min.", "success");
  };

  const testEndpoint = (endpoint) => {
    logAction("API Authenticator & Rate Limiter", `Incoming API request: GET ${endpoint}. Token validated.`, "info");
    setTimeout(() => {
      let mockRes = {};
      if (endpoint === '/api/v1/users') {
        mockRes = { status: 'success', count: 2, users: [{ id: 1, name: 'Aman' }, { id: 2, name: 'Admin' }] };
      } else if (endpoint === '/api/v1/inventory') {
        mockRes = { status: 'success', warehouse: 'Mumbai HQ', items: ['Planners', 'Calculators'] };
      } else {
        mockRes = { status: 'success', ledger: 'Chart of Accounts', balanced: true };
      }
      setEndpointResult(JSON.stringify(mockRes, null, 2));
      logAction("API Authenticator & Rate Limiter", `API Response status 200 OK. Compressed response size: 84 bytes.`, "success");
    }, 400);
  };

  return (
    <div>
      <h3 className="mb-4">Developer Sandbox & API Integrations</h3>
      <Row className="g-4">
        {/* API key console */}
        <Col md={6}>
          <Card className="erp-glass-card p-4 h-100">
            <h5 className="text-indigo-400 mb-3">Developer API Key Console</h5>
            <p className="text-secondary small">Access active system integration scopes. Keep this secret private.</p>
            <Form.Group className="mb-3">
              <Form.Control type="text" className="erp-form-control font-monospace text-center text-warning" readOnly value={apiKey} />
            </Form.Group>
            <div className="d-flex gap-2">
              <Button className="erp-btn flex-grow-1" onClick={generateApiKey}>Rotate API Key</Button>
              <Button className="erp-btn-danger" onClick={() => { setApiKey('REVOKED'); logAction("API Authenticator & Rate Limiter", "API key revoked manually. Security blocks active.", "warning"); }}>Revoke</Button>
            </div>
          </Card>
        </Col>

        {/* Webhooks dispatcher */}
        <Col md={6}>
          <Card className="erp-glass-card p-4 h-100">
            <h5 className="text-indigo-400 mb-3">Webhook Subscriptions</h5>
            <Form.Group className="mb-2">
              <Form.Label className="erp-form-label">Endpoint URL Receiver</Form.Label>
              <Form.Control type="url" className="erp-form-control" defaultValue="https://mycompany.com/webhook-receiver" id="webhookUrl" />
            </Form.Group>
            <Button className="erp-btn w-100" onClick={() => {
              logAction("Webhook Dispatch Service", "Triggering test payload: EVENT_CRM_LEAD_CONVERTED to webhook endpoint receiver...", "info");
              setTimeout(() => {
                logAction("Webhook Dispatch Service", "Webhook payload delivered. Status code 200 OK received. Retry queue empty.", "success");
                alert("Webhook test payload dispatched successfully!");
              }, 1000);
            }}>
              Test Webhook Dispatcher
            </Button>
          </Card>
        </Col>

        {/* Interactive Endpoint Sandbox */}
        <Col md={12}>
          <Card className="erp-glass-card p-4">
            <h5 className="text-indigo-400 mb-3">Interactive Endpoint API Sandbox</h5>
            <p className="text-secondary small">Query active REST API endpoints directly inside the web interface framework.</p>
            <div className="d-flex gap-2 mb-3">
              <Button className="erp-btn btn-sm" onClick={() => testEndpoint('/api/v1/users')}>GET /api/v1/users</Button>
              <Button className="erp-btn btn-sm" onClick={() => testEndpoint('/api/v1/inventory')}>GET /api/v1/inventory</Button>
              <Button className="erp-btn btn-sm" onClick={() => testEndpoint('/api/v1/accounting')}>GET /api/v1/accounting</Button>
            </div>

            {endpointResult && (
              <div>
                <span className="small text-secondary font-monospace d-block mb-1">Sandbox Response Payload:</span>
                <pre className="p-3 border border-secondary rounded font-monospace small bg-dark text-success" style={{maxHeight:'200px', overflowY:'auto'}}>
                  {endpointResult}
                </pre>
              </div>
            )}
          </Card>
        </Col>
      </Row>
    </div>
  );
};
