/* eslint-disable react-refresh/only-export-components */
import React, { useState } from 'react';
import { Container, Row, Col, Card, Badge, Button, InputGroup, Form, Modal } from 'react-bootstrap';
import { FaCalendarAlt, FaSearch, FaClock, FaBookOpen, FaShareAlt, FaTag, FaNewspaper } from 'react-icons/fa';

export const EDUCATION_ARTICLES = [
  {
    id: 1,
    title: 'JEE Main 2026: NTA Releases Detailed Exam Schedule, Tie-Breaking Rules & City Intimation Slips',
    category: 'Entrance Exams',
    date: '24 Oct 2026',
    day: '24',
    month: 'Oct',
    year: '2026',
    readTime: '4 min read',
    summary: 'The National Testing Agency has published the comprehensive schedule for JEE Main 2026 Sessions. Registration portals are live for undergraduate engineering aspirants across 32 NITs, 26 IIITs, and premier state technical institutes.',
    content: `The National Testing Agency (NTA) has officially released the complete examination framework for JEE Main 2026. Aspiring candidates can now submit applications through the official NTA online portal. Key highlights of the 2026 circular include:

1. Two Examination Windows: Session 1 is scheduled between late January and early February, while Session 2 will take place in April.
2. Revised Tie-Breaking Policy: In case of equal NTA scores, age priority has been phased down in favor of higher percentile scores in Mathematics, followed by Physics, and Chemistry.
3. Exam Centers: Computer-based test centers have expanded to 300+ cities in India and 14 international cities to facilitate NRI students.

Candidates are strongly advised to verify that their Aadhaar-linked mobile numbers and academic credentials match exactly with their Class 10/12 certificates.`,
    img: 'https://images.unsplash.com/photo-1571260899304-425070110ea8?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 2,
    title: 'NEET UG 2026: NTA & NMC Release Streamlined Syllabus and 15% All-India Quota Counseling Norms',
    category: 'Medical Admissions',
    date: '21 Oct 2026',
    day: '21',
    month: 'Oct',
    year: '2026',
    readTime: '5 min read',
    summary: 'The National Medical Commission (NMC) in coordination with NTA has released the refined NEET UG 2026 syllabus focusing on core conceptual biology, chemistry, and physics without non-essential memorization.',
    content: `The National Eligibility cum Entrance Test (NEET-UG) 2026 information bulletin has been published with significant updates for MBBS and BDS aspirants across India:

1. Harmonized Syllabus: The curriculum has been tightly aligned with the latest rationalized NCERT textbooks across Botany, Zoology, Organic Chemistry, and Physics.
2. Unified Counseling Process: The Medical Counselling Committee (MCC) will oversee 4 rounds of centralized online counseling for 15% All India Quota, 100% Deemed/Central Universities, AIIMS, and JIPMER seats.
3. Tie-Breaking Revisions: Marks obtained in Biology remain the paramount tie-breaker, followed by Chemistry, and Physics.

Over 1,00,000 MBBS seats in government and private medical institutions will be allocated strictly based on NEET 2026 merit.`,
    img: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 3,
    title: 'CAT 2026: IIM Ahmedabad, Bangalore & Calcutta Announce Minimum Composite Cutoffs & PI Criteria',
    category: 'Management',
    date: '18 Oct 2026',
    day: '18',
    month: 'Oct',
    year: '2026',
    readTime: '3 min read',
    summary: 'The premier Indian Institutes of Management have announced their admission criteria for the 2026-28 PGP/MBA batches, placing equal emphasis on academic diversity and gender balance alongside CAT percentiles.',
    content: `The premier IIMs (IIM Ahmedabad, IIM Bangalore, IIM Calcutta, IIM Lucknow, and IIM Kozhikode) have published their admission criteria for the batch of 2026-28:

1. Balanced Selection Matrix: While a 99+ percentile in CAT remains critical for general engineering males, candidates with non-engineering backgrounds (Humanities, Commerce, Medicine) receive up to 5 additional diversity points in composite scoring.
2. Sectional Balance: Each institute requires minimum sectional cutoffs (typically 80-85 percentile in VARC, DILR, and QA).
3. Personal Interview & WAT: Shortlisted candidates will be invited for in-person Written Ability Tests (WAT) and Personal Interviews (PI) across major metro cities.`,
    img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 4,
    title: 'NIRF Rankings 2026: IIT Madras Retains #1 Overall, IIM Ahmedabad Tops Management Rankings',
    category: 'Rankings',
    date: '15 Oct 2026',
    day: '15',
    month: 'Oct',
    year: '2026',
    readTime: '4 min read',
    summary: 'Ministry of Education announces the 2026 National Institutional Ranking Framework (NIRF) rankings. IIT Madras ranks as India’s best higher educational institute for the 6th consecutive year.',
    content: `The Ministry of Education has released the National Institutional Ranking Framework (NIRF) 2026 report evaluating over 8,000 participating higher education institutions in India:

Top 5 Engineering Institutes:
1. IIT Madras (Chennai)
2. IIT Delhi (New Delhi)
3. IIT Bombay (Mumbai)
4. IIT Kanpur (Kanpur)
5. IIT Kharagpur (Kharagpur)

Top 3 Management Institutes:
1. IIM Ahmedabad
2. IIM Bangalore
3. IIM Calcutta

Top Medical Institute: All India Institute of Medical Sciences (AIIMS New Delhi) continues to dominate medical education with unmatched research citations and clinical infrastructure.`,
    img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 5,
    title: 'JoSAA Counseling 2026: Seat Allocation Schedule Released for 23 IITs, 32 NITs, and 26 IIITs',
    category: 'Counseling & Admissions',
    date: '10 Oct 2026',
    day: '10',
    month: 'Oct',
    year: '2026',
    readTime: '3 min read',
    summary: 'Joint Seat Allocation Authority (JoSAA) publishes the complete 6-round counseling roadmap for admission to 55,000+ technical seats across premier national institutes.',
    content: `The Joint Seat Allocation Authority (JoSAA) has unveiled the counseling dates for engineering admissions:

1. Unified Online Window: One single application covers all 23 IITs, 32 NITs, 26 IIITs, and 33 Government Funded Technical Institutes (GFTIs).
2. Mock Seat Allocation: Two rounds of mock seat allocations will be published prior to final choice locking to guide candidates on cutoff likelihoods.
3. Dual Acceptance Fee (SAF): Candidates who receive an allotment must pay the seat acceptance fee and complete document verification online within the stipulated 3-day round window.`,
    img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 6,
    title: 'AICTE Approves Modernized Curriculum for Artificial Intelligence & Data Science Engineering Degrees',
    category: 'Technology & Academics',
    date: '05 Oct 2026',
    day: '05',
    month: 'Oct',
    year: '2026',
    readTime: '4 min read',
    summary: 'AICTE updates mandatory curriculum standards for emerging engineering branches, emphasizing hands-on generative AI, edge computing, and cybersecurity internships.',
    content: `All India Council for Technical Education (AICTE) has introduced comprehensive curriculum updates for B.Tech CSE, AI, Data Science, and Robotics streams across all affiliated colleges in India:

1. Mandatory 6-Month Industry Internship: Technical colleges must structure academic credit systems to allow students to pursue full-semester industrial internships in their 7th or 8th semester.
2. High-Performance Compute Labs: Technical universities are mandated to provide GPU-accelerated computing clusters for training deep learning models.
3. Industry Co-Taught Electives: Up to 20% of elective courses can be directly mentored and examined by corporate technology partners.`,
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600'
  }
];

const News = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeArticle, setActiveArticle] = useState(null);

  const categories = ['All', 'Entrance Exams', 'Medical Admissions', 'Management', 'Rankings', 'Counseling & Admissions', 'Technology & Academics'];

  const filtered = EDUCATION_ARTICLES.filter(item => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="pt-2 bg-light min-vh-100 pb-5">
      {/* Banner */}
      <div className="bg-primary text-white py-5 text-center shadow-sm">
        <Container>
          <span className="badge bg-warning text-dark px-3 py-2 rounded-pill fw-bold text-uppercase mb-3">
            Higher Education Bulletin 2026
          </span>
          <h1 className="fw-bold mb-3 display-5">Education News, Admission Alerts & Articles</h1>
          <p className="fs-5 opacity-75 mx-auto" style={{ maxWidth: '750px' }}>
            Curated updates on national entrance exams, JoSAA counseling schedules, IIM cutoffs, NIRF rankings, and university guidelines.
          </p>

          <div className="mx-auto mt-4" style={{ maxWidth: '650px' }}>
            <InputGroup size="lg" className="shadow rounded-pill overflow-hidden bg-white p-1">
              <InputGroup.Text className="bg-white border-0 ps-3">
                <FaSearch className="text-primary" />
              </InputGroup.Text>
              <Form.Control 
                placeholder="Search articles, notifications, counseling (e.g. JEE, NEET, JoSAA, NIRF)..."
                className="border-0 shadow-none ps-2"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </InputGroup>
          </div>
        </Container>
      </div>

      <Container className="my-5">
        {/* Category Filter Pills */}
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

        {/* Articles List */}
        <Row className="g-4">
          {filtered.map(article => (
            <Col lg={6} key={article.id}>
              <Card className="border-0 shadow-sm h-100 custom-card overflow-hidden d-flex flex-column flex-sm-row">
                <div 
                  className="bg-primary text-white p-3 d-flex flex-column align-items-center justify-content-center text-center flex-shrink-0" 
                  style={{ minWidth: '110px', minHeight: '120px' }}
                >
                  <h2 className="mb-0 fw-bold">{article.day}</h2>
                  <span className="small text-uppercase fw-semibold">{article.month}</span>
                  <span className="small opacity-75">{article.year}</span>
                </div>

                <Card.Body className="d-flex flex-column p-4">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <Badge bg="light" text="primary" className="border px-2 py-1 fw-bold">
                      <FaTag className="me-1" /> {article.category}
                    </Badge>
                    <span className="small text-muted">
                      <FaClock className="me-1" /> {article.readTime}
                    </span>
                  </div>

                  <h5 className="fw-bold text-dark mb-2 leading-snug">{article.title}</h5>
                  <Card.Text className="text-muted small mb-4 flex-grow-1">
                    {article.summary}
                  </Card.Text>

                  <div>
                    <Button 
                      variant="outline-primary" 
                      size="sm" 
                      className="rounded-pill px-4 fw-bold"
                      onClick={() => setActiveArticle(article)}
                    >
                      <FaBookOpen className="me-1" /> Read Full Article &raquo;
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}

          {filtered.length === 0 && (
            <Col xs={12} className="text-center py-5 text-muted">
              <h4>No education articles found matching "{searchTerm}".</h4>
              <p>Try searching for JEE, NEET, IIM, or JoSAA counseling.</p>
            </Col>
          )}
        </Row>
      </Container>

      {/* Article Reader Modal */}
      {activeArticle && (
        <Modal show={true} onHide={() => setActiveArticle(null)} size="lg" centered>
          <Modal.Header closeButton className="border-0 pb-0">
            <div>
              <Badge bg="primary" className="mb-2">{activeArticle.category}</Badge>
              <Modal.Title className="fw-bold fs-4">{activeArticle.title}</Modal.Title>
              <div className="text-muted small mt-1">
                <FaCalendarAlt className="me-1" /> Published on {activeArticle.date} • <FaClock className="ms-2 me-1" /> {activeArticle.readTime}
              </div>
            </div>
          </Modal.Header>
          <Modal.Body className="p-4">
            <div className="mb-4 rounded overflow-hidden" style={{ maxHeight: '250px' }}>
              <img 
                src={activeArticle.img} 
                alt={activeArticle.title} 
                style={{ width: '100%', height: '220px', objectFit: 'cover' }}
              />
            </div>

            <div className="p-3 bg-light rounded mb-4 text-dark fw-semibold small border-start border-4 border-primary">
              {activeArticle.summary}
            </div>

            <div className="text-secondary" style={{ whiteSpace: 'pre-line', lineHeight: '1.8' }}>
              {activeArticle.content}
            </div>
          </Modal.Body>
          <Modal.Footer className="border-0 pt-0">
            <Button variant="secondary" className="rounded-pill px-4" onClick={() => setActiveArticle(null)}>
              Close Reader
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default News;
