import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Layout
import Layout from './components/Layout';

// Pages
import Home from './pages/Home';
import Colleges from './pages/Colleges';
import CollegeDetail from './pages/CollegeDetail';
import Courses from './pages/Courses';
import Exams from './pages/Exams';
import Reviews from './pages/Reviews';
import Rankings from './pages/Rankings';
import Admissions from './pages/Admissions';
import Scholarships from './pages/Scholarships';
import CareerGuidance from './pages/CareerGuidance';
import News from './pages/News';
import CompareColleges from './pages/CompareColleges';
import Contact from './pages/Contact';
import About from './pages/About';
import Admin from './pages/Admin';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/colleges" element={<Colleges />} />
          <Route path="/colleges/:id" element={<CollegeDetail />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/rankings" element={<Rankings />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/scholarships" element={<Scholarships />} />
          <Route path="/career" element={<CareerGuidance />} />
          <Route path="/news" element={<News />} />
          <Route path="/compare" element={<CompareColleges />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin/*" element={<Admin />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
