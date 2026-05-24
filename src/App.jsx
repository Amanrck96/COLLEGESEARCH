import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Layout
import Layout from './components/Layout';

// Core Pages (Eagerly loaded)
import Home from './pages/Home';
import Colleges from './pages/Colleges';
import CollegeDetail from './pages/CollegeDetail';

// Secondary/Heavy Pages (Lazy loaded)
const Courses = lazy(() => import('./pages/Courses'));
const Exams = lazy(() => import('./pages/Exams'));
const Reviews = lazy(() => import('./pages/Reviews'));
const Rankings = lazy(() => import('./pages/Rankings'));
const Admissions = lazy(() => import('./pages/Admissions'));
const Scholarships = lazy(() => import('./pages/Scholarships'));
const CareerGuidance = lazy(() => import('./pages/CareerGuidance'));
const News = lazy(() => import('./pages/News'));
const CompareColleges = lazy(() => import('./pages/CompareColleges'));
const Contact = lazy(() => import('./pages/Contact'));
const About = lazy(() => import('./pages/About'));
const Admin = lazy(() => import('./pages/Admin'));

import { CollegeProvider } from './contexts/CollegeContext';
import { SiteProvider } from './contexts/SiteContext';

function App() {
  return (
    <SiteProvider>
      <CollegeProvider>
        <Router>
        <Layout>
          <Suspense fallback={
            <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading page...</span>
              </div>
            </div>
          }>
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
          </Suspense>
        </Layout>
      </Router>
      </CollegeProvider>
    </SiteProvider>
  );
}

export default App;
