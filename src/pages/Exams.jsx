/* eslint-disable react-refresh/only-export-components */
import React, { useState } from 'react';
import { Container, Row, Col, Card, Badge, Button, Form, InputGroup, Modal } from 'react-bootstrap';
import { FaCalendarAlt, FaSearch, FaExternalLinkAlt, FaGraduationCap, FaCheckCircle, FaLaptop, FaUserCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export const NATIONAL_ENTRANCE_EXAMS = [
  {
    id: 'jee-main',
    name: 'JEE Main 2026',
    fullName: 'Joint Entrance Examination (Main)',
    conductingBody: 'National Testing Agency (NTA)',
    stream: 'Engineering',
    level: 'National',
    mode: 'Computer Based Test (CBT)',
    date: 'Session 1: Jan 22 - 31, 2026 | Session 2: Apr 01 - 12, 2026',
    regDeadline: 'Nov 30, 2025 / Mar 02, 2026',
    eligibility: '10+2 with Physics, Chemistry & Mathematics (75% aggregate or top 20 percentile in Board).',
    duration: '3 Hours (180 Minutes)',
    acceptingCollegesCount: '32 NITs, 26 IIITs, 33 GFTIs & 1000+ State/Private Universities',
    syllabus: 'Physics, Chemistry, and Mathematics (CBSE Class 11 & 12 curriculum).',
    examPattern: 'Section A: 20 Multiple Choice Questions (MCQs), Section B: 10 Numerical Value Questions (attempt any 5). Total 300 Marks.',
    img: 'https://images.unsplash.com/photo-1571260899304-425070110ea8?auto=format&fit=crop&q=80&w=600',
    website: 'https://jeemain.nta.nic.in'
  },
  {
    id: 'jee-advanced',
    name: 'JEE Advanced 2026',
    fullName: 'Joint Entrance Examination (Advanced)',
    conductingBody: 'Organizing IIT (IIT Roorkee)',
    stream: 'Engineering',
    level: 'National',
    mode: 'Computer Based Test (CBT)',
    date: 'May 24, 2026',
    regDeadline: 'May 07, 2026',
    eligibility: 'Top 2,50,000 qualifiers of JEE Main. Maximum two attempts in consecutive years.',
    duration: 'Paper 1 (3 Hours) & Paper 2 (3 Hours) - Both Mandatory',
    acceptingCollegesCount: 'All 23 Indian Institutes of Technology (IITs), RGIPT, IIPE & IISERs',
    syllabus: 'Advanced analytical concepts across Physics, Chemistry, and Mathematics.',
    examPattern: 'Two compulsory papers with negative marking, multiple correct options, integer types, and matrix match.',
    img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=600',
    website: 'https://jeeadv.ac.in'
  },
  {
    id: 'neet-ug',
    name: 'NEET UG 2026',
    fullName: 'National Eligibility cum Entrance Test (UG)',
    conductingBody: 'National Testing Agency (NTA)',
    stream: 'Medical',
    level: 'National',
    mode: 'Pen and Paper (OMR Based)',
    date: 'May 03, 2026',
    regDeadline: 'March 09, 2026',
    eligibility: '10+2 with Physics, Chemistry, Biology/Biotechnology and English. Minimum 50% for General (40% for Reserved).',
    duration: '3 Hours 20 Minutes (200 Minutes)',
    acceptingCollegesCount: 'All AIIMS, JIPMER, Government & Private Medical Colleges in India (1,00,000+ MBBS seats)',
    syllabus: 'Physics (45 Qs), Chemistry (45 Qs), and Biology/Botany/Zoology (90 Qs). Total 720 Marks.',
    examPattern: '180 questions out of 200 questions to be answered. +4 marks for correct, -1 for incorrect.',
    img: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=600',
    website: 'https://neet.nta.nic.in'
  },
  {
    id: 'cat',
    name: 'CAT 2026',
    fullName: 'Common Admission Test',
    conductingBody: 'Indian Institutes of Management (IIMs)',
    stream: 'Management',
    level: 'National',
    mode: 'Computer Based Test (CBT)',
    date: 'November 29, 2026',
    regDeadline: 'September 20, 2026',
    eligibility: 'Bachelor’s degree with minimum 50% aggregate (45% for SC/ST/PwD) or final year graduation students.',
    duration: '2 Hours (120 Minutes) with 40-minute sectional limits',
    acceptingCollegesCount: 'All 21 IIMs, FMS Delhi, SPJIMR Mumbai, IIT DMS, MDI Gurgaon & 500+ top B-Schools',
    syllabus: 'VARC (Verbal Ability & Reading Comp), DILR (Data Interpretation & Logical Reasoning), QA (Quantitative Aptitude).',
    examPattern: '66 Questions: 24 VARC, 20 DILR, 22 QA. MCQs have +3 / -1 marking; TITA (Non-MCQs) have no negative marks.',
    img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600',
    website: 'https://iimcat.ac.in'
  },
  {
    id: 'gate',
    name: 'GATE 2026',
    fullName: 'Graduate Aptitude Test in Engineering',
    conductingBody: 'IITs / IISc Bangalore',
    stream: 'Engineering',
    level: 'National',
    mode: 'Computer Based Test (CBT)',
    date: 'Feb 07, 08, 14, 15, 2026',
    regDeadline: 'October 05, 2025',
    eligibility: 'Graduation in Engineering, Technology, Architecture, Science, or Commerce. Score valid for 3 years.',
    duration: '3 Hours (180 Minutes)',
    acceptingCollegesCount: 'IITs, NITs, IISc, Top PSU Recruiters (ONGC, IOCL, BHEL, NTPC, HPCL, BARC)',
    syllabus: 'General Aptitude (15 marks), Engineering Mathematics (13 marks), and Core Subject Discipline (72 marks).',
    examPattern: '65 Questions for 100 Marks. Includes MCQs, MSQs (Multiple Select), and NAT (Numerical Answer Type).',
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600',
    website: 'https://gate.iitk.ac.in'
  },
  {
    id: 'clat',
    name: 'CLAT 2026',
    fullName: 'Common Law Admission Test',
    conductingBody: 'Consortium of National Law Universities',
    stream: 'Law',
    level: 'National',
    mode: 'Offline (Pen & Paper OMR)',
    date: 'December 06, 2025',
    regDeadline: 'October 15, 2025',
    eligibility: '10+2 with minimum 45% (40% for SC/ST) for UG. LL.B with 50% for PG.',
    duration: '2 Hours (120 Minutes)',
    acceptingCollegesCount: '24 National Law Universities (NLUs) including NLSIU Bangalore, NALSAR, WBNUJS',
    syllabus: 'English Language, Current Affairs & General Knowledge, Legal Reasoning, Logical Reasoning, Quantitative Techniques.',
    examPattern: '120 Comprehension-based Multiple Choice Questions for 120 Marks. Negative marking of 0.25 marks.',
    img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600',
    website: 'https://consortiumofnlus.ac.in'
  },
  {
    id: 'bitsat',
    name: 'BITSAT 2026',
    fullName: 'Birla Institute of Technology and Science Admission Test',
    conductingBody: 'BITS Pilani',
    stream: 'Engineering',
    level: 'University',
    mode: 'Computer Based Test (CBT)',
    date: 'Session 1: May 20 - 24, 2026 | Session 2: Jun 22 - 26, 2026',
    regDeadline: 'April 10, 2026',
    eligibility: '10+2 with minimum 75% aggregate in PCM/PCB and at least 60% in each subject.',
    duration: '3 Hours (180 Minutes)',
    acceptingCollegesCount: 'BITS Pilani (Pilani, Goa, and Hyderabad Campuses)',
    syllabus: 'Physics (30 Qs), Chemistry (30 Qs), English & Logical Reasoning (20 Qs), Mathematics/Biology (40 Qs).',
    examPattern: '130 MCQs for 390 marks. Bonus 12 questions available if candidate completes all 130 within time.',
    img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600',
    website: 'https://www.bitsadmission.com'
  },
  {
    id: 'cuet-ug',
    name: 'CUET UG 2026',
    fullName: 'Common University Entrance Test (UG)',
    conductingBody: 'National Testing Agency (NTA)',
    stream: 'Central Universities',
    level: 'National',
    mode: 'Hybrid (CBT + Pen-Paper)',
    date: 'May 15 - 31, 2026',
    regDeadline: 'April 05, 2026',
    eligibility: '10+2 appeared or passed from recognized board. No age limit.',
    duration: '45 to 60 Minutes per Subject Test',
    acceptingCollegesCount: 'Delhi University (DU), BHU, JNU, Jamia Millia, AMU & 250+ Universities',
    syllabus: 'Section IA & IB (Languages), Section II (Domain-specific subjects based on NCERT 12th), Section III (General Test).',
    examPattern: 'Multiple choice objective test. 40 out of 50 questions to be attempted in domain subjects.',
    img: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&q=80&w=600',
    website: 'https://cuetug.ntaonline.in'
  },
  {
    id: 'nift',
    name: 'NIFT Entrance Exam 2026',
    fullName: 'National Institute of Fashion Technology Admission Test',
    conductingBody: 'NTA & NIFT',
    stream: 'Design',
    level: 'National',
    mode: 'Hybrid (GAT: CBT, CAT: Paper-based drawing)',
    date: 'February 08, 2026',
    regDeadline: 'January 03, 2026',
    eligibility: '10+2 from recognized board for B.Des. 10+2 with Physics, Chem, Math for B.F.Tech.',
    duration: 'GAT (2 Hours) + CAT (3 Hours)',
    acceptingCollegesCount: '18 NIFT Campuses across India (Delhi, Mumbai, Bangalore, Chennai, Kolkata, etc.)',
    syllabus: 'General Ability Test (Quantitative, English, Reasoning) and Creative Ability Test (Design aesthetics & intuition).',
    examPattern: 'Two stages: Written Exam (CAT + GAT), followed by Situation Test / Personal Interview for shortlisted candidates.',
    img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=600',
    website: 'https://nift.ac.in'
  }
];

const Exams = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStream, setSelectedStream] = useState('All');
  const [activeModalExam, setActiveModalExam] = useState(null);
  const navigate = useNavigate();

  const streams = ['All', 'Engineering', 'Medical', 'Management', 'Law', 'Design', 'Central Universities'];

  const filteredExams = NATIONAL_ENTRANCE_EXAMS.filter(exam => {
    const matchesStream = selectedStream === 'All' || exam.stream.toLowerCase() === selectedStream.toLowerCase();
    const matchesSearch = exam.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          exam.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          exam.stream.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStream && matchesSearch;
  });

  return (
    <div className="pt-2 bg-light min-vh-100 pb-5">
      {/* Banner */}
      <div className="bg-primary text-white py-5 text-center shadow-sm">
        <Container>
          <span className="badge bg-warning text-dark px-3 py-2 rounded-pill fw-bold text-uppercase mb-3">
            National Admission Schedules 2026
          </span>
          <h1 className="fw-bold mb-3 display-5">National Entrance Exams Directory</h1>
          <p className="fs-5 opacity-75 mx-auto" style={{ maxWidth: '750px' }}>
            Comprehensive dates, official syllabus, eligibility benchmarks, and participating university cutoffs captured from verified Shiksha & NTA publications.
          </p>

          <div className="mx-auto mt-4" style={{ maxWidth: '650px' }}>
            <InputGroup size="lg" className="shadow rounded-pill overflow-hidden bg-white p-1">
              <InputGroup.Text className="bg-white border-0 ps-3">
                <FaSearch className="text-primary" />
              </InputGroup.Text>
              <Form.Control 
                placeholder="Search by exam name (e.g. JEE Main, NEET, CAT, CLAT)..."
                className="border-0 shadow-none ps-2"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </InputGroup>
          </div>
        </Container>
      </div>

      <Container className="my-5">
        {/* Stream Filter Pills */}
        <div className="d-flex justify-content-center gap-2 mb-5 flex-wrap">
          {streams.map(st => (
            <Badge 
              key={st}
              bg={selectedStream === st ? 'primary' : 'white'}
              text={selectedStream === st ? 'white' : 'dark'}
              className="px-4 py-2 border shadow-sm cursor-pointer rounded-pill"
              style={{ cursor: 'pointer', fontSize: '14px', fontWeight: '600' }}
              onClick={() => setSelectedStream(st)}
            >
              {st}
            </Badge>
          ))}
        </div>

        {/* Exams Grid */}
        <Row className="g-4">
          {filteredExams.map((exam) => (
            <Col md={6} lg={4} key={exam.id}>
              <Card className="border-0 shadow-sm h-100 custom-card overflow-hidden d-flex flex-column">
                <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                  <Card.Img 
                    variant="top" 
                    src={exam.img} 
                    alt={exam.name}
                    style={{ height: '100%', objectFit: 'cover' }}
                  />
                  <div className="position-absolute top-0 end-0 m-3">
                    <Badge bg="primary" className="px-3 py-2 rounded-pill shadow-sm">
                      {exam.stream}
                    </Badge>
                  </div>
                  <div className="position-absolute bottom-0 start-0 m-3">
                    <span className="badge bg-dark bg-opacity-75 text-white px-2 py-1 small rounded">
                      <FaLaptop className="me-1" /> {exam.mode}
                    </span>
                  </div>
                </div>

                <Card.Body className="d-flex flex-column p-4 flex-grow-1">
                  <h5 className="fw-bold text-dark mb-1">{exam.name}</h5>
                  <div className="text-muted small mb-3">{exam.fullName}</div>

                  <div className="bg-light p-3 rounded mb-3 small">
                    <div className="text-secondary fw-semibold mb-1">
                      <FaCalendarAlt className="me-2 text-danger" />
                      <strong>Exam Date:</strong> {exam.date}
                    </div>
                    <div className="text-muted">
                      <strong>Conducted by:</strong> {exam.conductingBody}
                    </div>
                  </div>

                  <div className="mb-4 small text-secondary flex-grow-1">
                    <strong>Eligibility:</strong> {exam.eligibility.substring(0, 95)}...
                  </div>

                  <div className="d-flex gap-2 mt-auto">
                    <Button 
                      variant="primary" 
                      className="w-100 rounded-pill fw-bold"
                      onClick={() => setActiveModalExam(exam)}
                    >
                      View Full Details
                    </Button>
                    <Button 
                      variant="outline-secondary" 
                      className="rounded-pill px-3"
                      title="Find accepting colleges"
                      onClick={() => navigate(`/colleges?q=${encodeURIComponent(exam.name.split(' ')[0])}`)}
                    >
                      Colleges
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}

          {filteredExams.length === 0 && (
            <Col xs={12} className="text-center py-5 text-muted">
              <h4>No entrance exams found matching "{searchTerm}" in {selectedStream}.</h4>
              <p>Try searching for JEE, NEET, CAT, GATE, CLAT, or BITSAT.</p>
            </Col>
          )}
        </Row>
      </Container>

      {/* Exam Details Modal */}
      {activeModalExam && (
        <Modal show={true} onHide={() => setActiveModalExam(null)} size="lg" centered>
          <Modal.Header closeButton className="border-0 pb-0">
            <div>
              <Badge bg="primary" className="mb-2">{activeModalExam.stream}</Badge>
              <Modal.Title className="fw-bold fs-4">{activeModalExam.name}</Modal.Title>
              <div className="text-muted small">{activeModalExam.fullName}</div>
            </div>
          </Modal.Header>
          <Modal.Body className="p-4">
            <Row className="g-3 mb-4">
              <Col sm={6}>
                <div className="p-3 bg-light rounded h-100">
                  <div className="text-muted small fw-bold">CONDUCTING BODY</div>
                  <div className="fw-semibold text-dark">{activeModalExam.conductingBody}</div>
                </div>
              </Col>
              <Col sm={6}>
                <div className="p-3 bg-light rounded h-100">
                  <div className="text-muted small fw-bold">EXAM MODE & DURATION</div>
                  <div className="fw-semibold text-dark">{activeModalExam.mode} ({activeModalExam.duration})</div>
                </div>
              </Col>
              <Col sm={6}>
                <div className="p-3 bg-light rounded h-100">
                  <div className="text-muted small fw-bold">IMPORTANT DATES</div>
                  <div className="fw-semibold text-primary">{activeModalExam.date}</div>
                  <div className="small text-danger mt-1">Registration Deadline: {activeModalExam.regDeadline}</div>
                </div>
              </Col>
              <Col sm={6}>
                <div className="p-3 bg-light rounded h-100">
                  <div className="text-muted small fw-bold">ACCEPTING INSTITUTIONS</div>
                  <div className="fw-semibold text-dark">{activeModalExam.acceptingCollegesCount}</div>
                </div>
              </Col>
            </Row>

            <div className="mb-3">
              <h6 className="fw-bold text-dark d-flex align-items-center">
                <FaUserCheck className="me-2 text-success" /> Eligibility Criteria
              </h6>
              <p className="text-secondary small ps-4">{activeModalExam.eligibility}</p>
            </div>

            <div className="mb-3">
              <h6 className="fw-bold text-dark d-flex align-items-center">
                <FaGraduationCap className="me-2 text-primary" /> Exam Pattern & Structure
              </h6>
              <p className="text-secondary small ps-4">{activeModalExam.examPattern}</p>
            </div>

            <div className="mb-3">
              <h6 className="fw-bold text-dark d-flex align-items-center">
                <FaCheckCircle className="me-2 text-warning" /> Syllabus Coverage
              </h6>
              <p className="text-secondary small ps-4">{activeModalExam.syllabus}</p>
            </div>
          </Modal.Body>
          <Modal.Footer className="border-0 pt-0 d-flex justify-content-between">
            <a 
              href={activeModalExam.website} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline-secondary rounded-pill fw-semibold"
            >
              <FaExternalLinkAlt className="me-2" /> Official Exam Portal
            </a>
            <Button 
              variant="primary" 
              className="rounded-pill px-4 fw-bold"
              onClick={() => {
                const query = activeModalExam.name.split(' ')[0];
                setActiveModalExam(null);
                navigate(`/colleges?q=${encodeURIComponent(query)}`);
              }}
            >
              Explore Accepting Colleges
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default Exams;
