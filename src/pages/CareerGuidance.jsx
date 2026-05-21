import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, ProgressBar } from 'react-bootstrap';
import { FaUserMd, FaLaptopCode, FaChartLine, FaPaintBrush } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const questions = [
  {
    id: 1,
    question: "What kind of problems do you enjoy solving the most?",
    options: [
      { text: "Building software, coding, or fixing hardware devices", category: "Engineering" },
      { text: "Pitching an idea, organizing events, or managing teams", category: "Management" },
      { text: "Understanding diseases, helping patients, or researching biology", category: "Medical" },
      { text: "Designing logos, sketching clothing, or creating animations", category: "Design" }
    ]
  },
  {
    id: 2,
    question: "Which subject did you find most interesting in school?",
    options: [
      { text: "Physics, Mathematics, or Computer Science", category: "Engineering" },
      { text: "Business Studies, Economics, or Civics", category: "Management" },
      { text: "Biology, Chemistry, or Life Sciences", category: "Medical" },
      { text: "Fine Arts, Graphic Design, or Literature", category: "Design" }
    ]
  },
  {
    id: 3,
    question: "In a team project, what role do you naturally assume?",
    options: [
      { text: "The Technical Builder who writes code or builds the prototype", category: "Engineering" },
      { text: "The Project Manager who coordinates tasks and leads presentations", category: "Management" },
      { text: "The Researcher who gathers clinical/scientific facts", category: "Medical" },
      { text: "The Creative Director who designs the slides and visuals", category: "Design" }
    ]
  },
  {
    id: 4,
    question: "What is your ideal work environment?",
    options: [
      { text: "A software company developing cutting-edge technology", category: "Engineering" },
      { text: "A corporate boardroom managing projects and business strategy", category: "Management" },
      { text: "A hospital, clinic, or medical research facility helping people", category: "Medical" },
      { text: "A creative studio, design agency, or fashion house", category: "Design" }
    ]
  },
  {
    id: 5,
    question: "Which of these personal traits describes you best?",
    options: [
      { text: "Analytical, logical, and tech-savvy", category: "Engineering" },
      { text: "Outgoing, organized, and a natural leader", category: "Management" },
      { text: "Compassionate, scientific, and patient", category: "Medical" },
      { text: "Imaginative, aesthetic, and artistic", category: "Design" }
    ]
  }
];

const categoryDetails = {
  Engineering: {
    title: "Engineering & Technology",
    desc: "You have a strong logical mind, love technical systems, and enjoy building solutions to solve technical and structural challenges.",
    icon: <FaLaptopCode className="mx-auto text-primary fs-1 mb-3" />,
    query: "engineering"
  },
  Management: {
    title: "Management & Business Administration",
    desc: "You possess great interpersonal skills, organized thinking, and a leadership mindset suited for building and managing businesses.",
    icon: <FaChartLine className="mx-auto text-success fs-1 mb-3" />,
    query: "mba"
  },
  Medical: {
    title: "Medical & Health Sciences",
    desc: "You have a strong passion for biological sciences and a compassionate heart focused on helping patients, research, or clinical care.",
    icon: <FaUserMd className="mx-auto text-danger fs-1 mb-3" />,
    query: "medical"
  },
  Design: {
    title: "Creative Arts & Design",
    desc: "You have a high aesthetic sense, imaginative creative ideas, and a strong calling for visual expression, clothing, or layout design.",
    icon: <FaPaintBrush className="mx-auto text-warning fs-1 mb-3" />,
    query: "design"
  }
};

const CareerGuidance = () => {
  const [step, setStep] = useState('intro'); // 'intro' | 'quiz' | 'result'
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();

  const handleStart = () => {
    setStep('quiz');
    setCurrentQuestion(0);
    setAnswers([]);
  };

  const handleAnswer = (category) => {
    const updatedAnswers = [...answers, category];
    setAnswers(updatedAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setStep('result');
    }
  };

  const getRecommendedCategory = () => {
    const counts = {};
    let maxCat = "Engineering";
    let maxVal = 0;

    answers.forEach(cat => {
      counts[cat] = (counts[cat] || 0) + 1;
      if (counts[cat] > maxVal) {
        maxVal = counts[cat];
        maxCat = cat;
      }
    });

    return maxCat;
  };

  const recommendation = step === 'result' ? categoryDetails[getRecommendedCategory()] : null;

  return (
    <div className="pt-2 bg-light min-vh-100 pb-5">
      <div className="bg-primary text-white py-5 text-center">
        <Container>
          <h1 className="fw-bold mb-3">Career Guidance & Quiz</h1>
          <p className="fs-5 opacity-75">Discover your path through our dynamic psychometric assessment.</p>
        </Container>
      </div>

      <Container className="my-5">
        {step === 'intro' && (
          <Card className="border-0 shadow p-5 text-center rounded-4 mx-auto mb-5" style={{maxWidth: '800px'}}>
            <h3 className="fw-bold mb-4">Not Sure What To Study?</h3>
            <p className="text-muted fs-5 mb-4">
              Our quick 5-question psychometric career assessment helps analyze your strengths and interests to recommend the perfect academic stream and colleges.
            </p>
            <Button 
              variant="warning" 
              size="lg" 
              className="rounded-pill fw-bold shadow-sm px-5 py-3"
              onClick={handleStart}
            >
              Take Free Career Test
            </Button>
          </Card>
        )}

        {step === 'quiz' && (
          <Card className="border-0 shadow p-4 p-md-5 rounded-4 mx-auto" style={{maxWidth: '700px'}}>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <span className="text-muted small fw-bold">Question {currentQuestion + 1} of {questions.length}</span>
              <span className="text-muted small fw-bold">{Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete</span>
            </div>
            <ProgressBar 
              now={((currentQuestion + 1) / questions.length) * 100} 
              variant="primary" 
              className="mb-4" 
              style={{ height: '8px' }} 
            />
            
            <h4 className="fw-bold text-dark mb-4">{questions[currentQuestion].question}</h4>
            <div className="d-grid gap-3">
              {questions[currentQuestion].options.map((opt, i) => (
                <Button 
                  key={i} 
                  variant="outline-primary" 
                  className="text-start py-3 px-4 rounded-3 border-2"
                  style={{ transition: 'all 0.2s ease' }}
                  onClick={() => handleAnswer(opt.category)}
                >
                  {opt.text}
                </Button>
              ))}
            </div>
          </Card>
        )}

        {step === 'result' && recommendation && (
          <Card className="border-0 shadow p-5 text-center rounded-4 mx-auto" style={{maxWidth: '850px'}}>
            {recommendation.icon}
            <Badge bg="success" className="mx-auto mb-3 px-4 py-2 fs-6">Recommended Stream</Badge>
            <h2 className="fw-bold text-dark mb-3">{recommendation.title}</h2>
            <p className="text-muted fs-5 mb-5 px-md-5">{recommendation.desc}</p>
            
            <Row className="g-3 justify-content-center">
              <Col sm={6}>
                <Button 
                  variant="primary" 
                  className="rounded-pill w-100 py-3 fw-bold"
                  onClick={() => navigate(`/colleges?q=${encodeURIComponent(recommendation.query)}`)}
                >
                  Find {recommendation.title} Colleges
                </Button>
              </Col>
              <Col sm={6}>
                <Button 
                  variant="outline-secondary" 
                  className="rounded-pill w-100 py-3"
                  onClick={handleStart}
                >
                  Retake Assessment
                </Button>
              </Col>
            </Row>
          </Card>
        )}

        <h4 className="fw-bold text-dark text-center mb-4 mt-5">Trending Career Paths</h4>
        <Row className="g-4 justify-content-center">
          <Col md={3}>
            <Card className="border-0 shadow-sm text-center p-4 h-100">
              <FaLaptopCode className="mx-auto text-primary fs-1 mb-3"/>
              <h5 className="fw-bold small mb-2">Software Systems</h5>
              <Button variant="link" className="small p-0 mt-auto text-decoration-none" onClick={() => navigate('/colleges?q=engineering')}>Explore</Button>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="border-0 shadow-sm text-center p-4 h-100">
              <FaChartLine className="mx-auto text-success fs-1 mb-3"/>
              <h5 className="fw-bold small mb-2">Business Leadership</h5>
              <Button variant="link" className="small p-0 mt-auto text-decoration-none" onClick={() => navigate('/colleges?q=mba')}>Explore</Button>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="border-0 shadow-sm text-center p-4 h-100">
              <FaUserMd className="mx-auto text-danger fs-1 mb-3"/>
              <h5 className="fw-bold small mb-2">Healthcare Services</h5>
              <Button variant="link" className="small p-0 mt-auto text-decoration-none" onClick={() => navigate('/colleges?q=medical')}>Explore</Button>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="border-0 shadow-sm text-center p-4 h-100">
              <FaPaintBrush className="mx-auto text-warning fs-1 mb-3"/>
              <h5 className="fw-bold small mb-2">Creative Design</h5>
              <Button variant="link" className="small p-0 mt-auto text-decoration-none" onClick={() => navigate('/colleges?q=design')}>Explore</Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CareerGuidance;
