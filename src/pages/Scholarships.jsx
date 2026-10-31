/* eslint-disable react-refresh/only-export-components */
import React, { useState } from 'react';
import { Container, Row, Col, Card, Badge, Button, InputGroup, Form, Modal } from 'react-bootstrap';
import { FaMoneyBillWave, FaGraduationCap, FaSearch, FaCheckCircle, FaExternalLinkAlt, FaCalendarAlt, FaShieldAlt } from 'react-icons/fa';

export const NATIONAL_SCHOLARSHIPS = [
  {
    id: 'central-sector',
    title: 'Central Sector Scheme of Scholarship (CSSS)',
    provider: 'Ministry of Education, Government of India',
    category: 'Merit-cum-Means',
    target: 'College and University Students',
    amount: '₹12,000/yr (UG) to ₹20,000/yr (PG)',
    eligibility: 'Above 80th percentile in relevant stream in Class 12th Board exams. Family income under ₹4.5 LPA.',
    deadline: 'October 31, 2026',
    applicationMode: 'National Scholarship Portal (NSP)',
    coursesCovered: 'All regular Degree courses in recognized Colleges/Universities',
    documentsRequired: 'Income Certificate, 12th Marksheet, Aadhaar Card, Bank Passbook, College Admission Proof.',
    link: 'https://scholarships.gov.in'
  },
  {
    id: 'aicte-pragati',
    title: 'AICTE Pragati Scholarship for Girl Students',
    provider: 'All India Council for Technical Education (AICTE)',
    category: 'Girl Students',
    target: 'Female Students in Technical Education',
    amount: '₹50,000 per annum (Tuition & Living Support)',
    eligibility: 'Female candidates admitted to 1st year B.Tech or Polytechnic Diploma in AICTE-approved institutions. Max 2 girls per family, family income < ₹8 LPA.',
    deadline: 'December 15, 2026',
    applicationMode: 'AICTE / National Scholarship Portal',
    coursesCovered: 'B.Tech / B.E. / B.Pharm / Architecture / Diploma',
    documentsRequired: '10th/12th Marksheet, AICTE Admission Allotment Letter, Annual Income Affidavit, Bank Details.',
    link: 'https://www.aicte-india.org/schemes/students-development-schemes/pragati'
  },
  {
    id: 'reliance-foundation',
    title: 'Reliance Foundation Undergraduate Scholarship',
    provider: 'Reliance Foundation',
    category: 'Merit-cum-Means',
    target: 'First Year Undergraduate Students',
    amount: 'Up to ₹2,00,000 over course duration',
    eligibility: 'First-year UG student with minimum 60% in 12th standard. Household income < ₹15 LPA (preference < ₹2.5 LPA). Online aptitude test required.',
    deadline: 'October 15, 2026',
    applicationMode: 'Online via Reliance Foundation Portal',
    coursesCovered: 'Any stream (Engineering, Sciences, Commerce, Arts, Law)',
    documentsRequired: '12th Marksheet, Bonafide College Certificate, Family Income Proof, Aptitude Test Score.',
    link: 'https://www.reliancefoundation.org'
  },
  {
    id: 'tata-trusts-medical',
    title: 'Tata Trusts Medical and Healthcare Scholarship',
    provider: 'Tata Trusts',
    category: 'Medical',
    target: 'MBBS, BDS, and PG Healthcare Students',
    amount: '30% to 80% Tuition Fee Waiver',
    eligibility: 'Students pursuing undergraduate or postgraduate studies in Medical Sciences in recognized Indian colleges. Minimum 60% in previous qualifying academic year.',
    deadline: 'November 20, 2026',
    applicationMode: 'Tata Trusts Online Application Portal',
    coursesCovered: 'MBBS, BDS, MD, MS, M.Ch, Nursing, Physiotherapy',
    documentsRequired: 'Semester Marksheets, College Fee Receipts, Family Income Tax Returns, ID Proof.',
    link: 'https://www.tatatrusts.org'
  },
  {
    id: 'hdfc-badhte-kadam',
    title: 'HDFC Bank Badhte Kadam Scholarship',
    provider: 'HDFC Bank Parivartan',
    category: 'Need-Based',
    target: 'Crisis-Affected & Economically Weaker Students',
    amount: '₹30,000 to ₹1,00,000 per annum',
    eligibility: 'Students in Class 11, 12, UG, or Professional courses whose families have suffered loss of primary breadwinner or earn < ₹6 LPA.',
    deadline: 'September 30, 2026',
    applicationMode: 'Buddy4Study / HDFC Portal',
    coursesCovered: 'General Degree, B.Tech, MBBS, Nursing, Law',
    documentsRequired: 'Current Year Fee Receipt, Crisis Document / Income Certificate, Previous Year Marksheet.',
    link: 'https://www.buddy4study.com/page/hdfc-bank-parivartan-badhte-kadam-scholarship'
  },
  {
    id: 'kotak-kanya',
    title: 'Kotak Kanya Scholarship for Meritorious Girls',
    provider: 'Kotak Education Foundation',
    category: 'Girl Students',
    target: 'Female Students in Professional Education',
    amount: '₹1,50,000 per year until course completion',
    eligibility: 'Meritorious girl students admitted to first-year professional graduation (Engineering, MBBS, Architecture, Design, Integrated Law). 85%+ in Class 12. Income < ₹6 LPA.',
    deadline: 'September 30, 2026',
    applicationMode: 'Kotak Education Portal',
    coursesCovered: 'B.Tech, MBBS, B.Arch, BA-LLB, B.Des',
    documentsRequired: 'Class 12 Marksheet, Entrance Exam Scorecard, Admission Proof, Income Certificate.',
    link: 'https://kotak.education'
  },
  {
    id: 'ongc-scholarship',
    title: 'ONGC Foundation Scholarship for SC/ST/OBC/EWS',
    provider: 'Oil and Natural Gas Corporation (ONGC)',
    category: 'Engineering',
    target: 'First Year Engineering & Medical Students',
    amount: '₹48,000 per year (₹4,000/month)',
    eligibility: 'First-year Engineering, MBBS, Geology, or MBA student. Minimum 60% marks in 12th standard. Gross family income < ₹4.5 LPA.',
    deadline: 'October 31, 2026',
    applicationMode: 'ONGC Scholar Portal',
    coursesCovered: 'B.Tech / B.E. (Mechanical, Petroleum, Electrical, CSE), MBBS, MBA',
    documentsRequired: 'Caste Certificate, Income Certificate, College Enrollment Certificate, 12th Marksheet.',
    link: 'https://ongcscholar.org'
  },
  {
    id: 'inspire-she',
    title: 'INSPIRE Scholarship for Higher Education (SHE)',
    provider: 'Department of Science and Technology (DST)',
    category: 'Science',
    target: 'Pure & Basic Science Students',
    amount: '₹80,000 per annum (₹60,000 cash + ₹20,000 mentorship)',
    eligibility: 'Top 1% in Class 12 Board Exams or rank in top 10,000 of JEE/NEET, pursuing B.Sc / B.S. / Integrated M.Sc in Natural & Basic Sciences.',
    deadline: 'November 15, 2026',
    applicationMode: 'DST Online Portal',
    coursesCovered: 'B.Sc (Hons), Integrated M.Sc (Physics, Chemistry, Maths, Biology, Geology)',
    documentsRequired: 'Eligibility Note / Board Rank Certificate, Endorsement from College Principal, Fee Receipt.',
    link: 'https://online-inspire.gov.in'
  },
  {
    id: 'vidyasaarathi-corporate',
    title: 'Vidyasaarathi Multi-Corporate Scholarship Scheme',
    provider: 'NSDL e-Governance Infrastructure',
    category: 'Corporate',
    target: 'Undergraduate, Technical & Diploma Pursuing Students',
    amount: '₹20,000 to ₹75,000 per annum',
    eligibility: 'Students pursuing ITI, Diploma, B.Tech, B.Com, B.Sc. Sponsored by ACC, JSW, Tata, TransUnion. Minimum 60% aggregate. Family income < ₹5 LPA.',
    deadline: 'Rolling Admissions throughout 2026',
    applicationMode: 'Vidyasaarathi Portal',
    coursesCovered: 'Engineering, Diploma, Commerce, Arts, Sciences',
    documentsRequired: 'Domicile Certificate, College Identity Card, Current Semester Fee Receipt, Bank Details.',
    link: 'https://www.vidyasaarathi.co.in'
  }
];

const Scholarships = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedScholarship, setSelectedScholarship] = useState(null);

  const categories = ['All', 'Merit-cum-Means', 'Girl Students', 'Need-Based', 'Engineering', 'Medical', 'Science', 'Corporate'];

  const filtered = NATIONAL_SCHOLARSHIPS.filter(s => {
    const matchesCat = selectedCategory === 'All' || s.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          s.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          s.target.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="pt-2 bg-light min-vh-100 pb-5">
      {/* Hero Banner */}
      <div className="bg-primary text-white py-5 text-center shadow-sm">
        <Container>
          <span className="badge bg-warning text-dark px-3 py-2 rounded-pill fw-bold text-uppercase mb-3">
            Financial Aid & Grants 2026
          </span>
          <h1 className="fw-bold mb-3 display-5">National Education Scholarships Directory</h1>
          <p className="fs-5 opacity-75 mx-auto" style={{ maxWidth: '750px' }}>
            Verified government, corporate, and trust scholarship schemes. Find financial aid for engineering, medical, degree, and diploma education.
          </p>

          <div className="mx-auto mt-4" style={{ maxWidth: '650px' }}>
            <InputGroup size="lg" className="shadow rounded-pill overflow-hidden bg-white p-1">
              <InputGroup.Text className="bg-white border-0 ps-3">
                <FaSearch className="text-primary" />
              </InputGroup.Text>
              <Form.Control 
                placeholder="Search scholarships by title, provider or field (e.g. AICTE, Reliance, Tata, Girls)..."
                className="border-0 shadow-none ps-2"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </InputGroup>
          </div>
        </Container>
      </div>

      <Container className="my-5">
        {/* Category Pills */}
        <div className="d-flex justify-content-center gap-2 mb-5 flex-wrap">
          {categories.map(cat => (
            <Badge 
              key={cat}
              bg={selectedCategory === cat ? 'primary' : 'white'}
              text={selectedCategory === cat ? 'white' : 'dark'}
              className="px-4 py-2 border shadow-sm cursor-pointer rounded-pill"
              style={{ cursor: 'pointer', fontSize: '14px', fontWeight: '600' }}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </Badge>
          ))}
        </div>

        {/* Scholarships Grid */}
        <Row className="g-4">
          {filtered.map(s => (
            <Col md={6} lg={4} key={s.id}>
              <Card className="border-0 shadow-sm h-100 custom-card p-3 d-flex flex-column">
                <Card.Body className="d-flex flex-column flex-grow-1">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-inline-flex p-2 rounded-circle bg-warning bg-opacity-10">
                      <FaMoneyBillWave className="text-warning fs-4" />
                    </div>
                    <Badge bg="light" text="dark" className="border px-3 py-1 fw-semibold">
                      {s.category}
                    </Badge>
                  </div>

                  <h5 className="fw-bold text-dark mb-1">{s.title}</h5>
                  <div className="text-muted small mb-3">{s.provider}</div>

                  <div className="bg-light p-3 rounded mb-3">
                    <div className="text-success fw-bold fs-6 mb-1">
                      💰 {s.amount}
                    </div>
                    <div className="text-danger small">
                      <FaCalendarAlt className="me-1" /> Deadline: {s.deadline}
                    </div>
                  </div>

                  <div className="small text-secondary mb-4 flex-grow-1">
                    <strong>Eligibility:</strong> {s.eligibility.substring(0, 95)}...
                  </div>

                  <div className="d-flex gap-2 mt-auto">
                    <Button 
                      variant="primary" 
                      className="w-100 rounded-pill fw-bold"
                      onClick={() => setSelectedScholarship(s)}
                    >
                      View Details & Criteria
                    </Button>
                    <a 
                      href={s.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-outline-secondary rounded-pill px-3"
                      title="Apply on Official Portal"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}

          {filtered.length === 0 && (
            <Col xs={12} className="text-center py-5 text-muted">
              <h4>No scholarship schemes found matching "{searchTerm}".</h4>
              <p>Try searching for AICTE, Central Sector, Reliance, or Tata Trusts.</p>
            </Col>
          )}
        </Row>
      </Container>

      {/* Scholarship Modal */}
      {selectedScholarship && (
        <Modal show={true} onHide={() => setSelectedScholarship(null)} size="lg" centered>
          <Modal.Header closeButton className="border-0 pb-0">
            <div>
              <Badge bg="success" className="mb-2">{selectedScholarship.category}</Badge>
              <Modal.Title className="fw-bold fs-4">{selectedScholarship.title}</Modal.Title>
              <div className="text-muted small">{selectedScholarship.provider}</div>
            </div>
          </Modal.Header>
          <Modal.Body className="p-4">
            <div className="bg-success bg-opacity-10 p-3 rounded mb-4 text-center border border-success border-opacity-25">
              <div className="text-muted small fw-bold">TOTAL SCHOLARSHIP GRANT</div>
              <h3 className="fw-bold text-success mb-0">{selectedScholarship.amount}</h3>
            </div>

            <Row className="g-3 mb-4">
              <Col sm={6}>
                <div className="p-3 bg-light rounded h-100">
                  <div className="text-muted small fw-bold">TARGET APPLICANTS</div>
                  <div className="fw-semibold text-dark">{selectedScholarship.target}</div>
                </div>
              </Col>
              <Col sm={6}>
                <div className="p-3 bg-light rounded h-100">
                  <div className="text-muted small fw-bold">APPLICATION WINDOW</div>
                  <div className="fw-semibold text-danger">Closes on {selectedScholarship.deadline}</div>
                </div>
              </Col>
              <Col sm={6}>
                <div className="p-3 bg-light rounded h-100">
                  <div className="text-muted small fw-bold">PORTAL / MODE</div>
                  <div className="fw-semibold text-dark">{selectedScholarship.applicationMode}</div>
                </div>
              </Col>
              <Col sm={6}>
                <div className="p-3 bg-light rounded h-100">
                  <div className="text-muted small fw-bold">COURSES COVERED</div>
                  <div className="fw-semibold text-dark">{selectedScholarship.coursesCovered}</div>
                </div>
              </Col>
            </Row>

            <div className="mb-3">
              <h6 className="fw-bold text-dark d-flex align-items-center">
                <FaCheckCircle className="me-2 text-primary" /> Eligibility Requirements
              </h6>
              <p className="text-secondary small ps-4">{selectedScholarship.eligibility}</p>
            </div>

            <div className="mb-3">
              <h6 className="fw-bold text-dark d-flex align-items-center">
                <FaShieldAlt className="me-2 text-warning" /> Mandatory Verification Documents
              </h6>
              <p className="text-secondary small ps-4">{selectedScholarship.documentsRequired}</p>
            </div>
          </Modal.Body>
          <Modal.Footer className="border-0 pt-0 d-flex justify-content-between">
            <Button variant="secondary" className="rounded-pill" onClick={() => setSelectedScholarship(null)}>
              Close
            </Button>
            <a 
              href={selectedScholarship.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary rounded-pill px-4 fw-bold"
            >
              <FaExternalLinkAlt className="me-2" /> Apply on Official Portal
            </a>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default Scholarships;
