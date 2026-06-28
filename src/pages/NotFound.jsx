import React, { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaHome, FaSearch, FaArrowLeft, FaGraduationCap } from 'react-icons/fa';

/**
 * 404 Not Found page — rendered for any URL that doesn't match a defined route.
 * Shows the attempted path and provides helpful navigation options.
 */
const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(15);

  // Auto-redirect countdown
  useEffect(() => {
    if (countdown <= 0) {
      navigate('/');
      return;
    }
    const timer = setTimeout(() => setCountdown(c => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown, navigate]);

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #1a43bf 100%)',
      }}
    >
      <Container className="text-center py-5">
        {/* Animated 404 number */}
        <div
          style={{
            fontSize: 'clamp(80px, 20vw, 180px)',
            fontWeight: 900,
            lineHeight: 1,
            background: 'linear-gradient(135deg, #ffffff 30%, #93c5fd 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-4px',
            marginBottom: '0.5rem',
            userSelect: 'none',
          }}
        >
          404
        </div>

        {/* Icon */}
        <div className="mb-4">
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 72,
              height: 72,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)',
            }}
          >
            <FaGraduationCap size={32} color="#93c5fd" />
          </span>
        </div>

        <h1
          className="fw-bold mb-3"
          style={{ color: '#f8fafc', fontSize: 'clamp(1.4rem, 4vw, 2.2rem)' }}
        >
          Page Not Found
        </h1>

        <p className="mb-2" style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem' }}>
          The URL you visited doesn&apos;t match any page in thecollegecompass.
        </p>

        {/* Show the attempted path */}
        {location.pathname !== '/' && (
          <div
            className="d-inline-block mb-4 px-3 py-2 rounded"
            style={{
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.15)',
              color: '#f87171',
              fontFamily: 'monospace',
              fontSize: '0.9rem',
              wordBreak: 'break-all',
            }}
          >
            {location.pathname}
          </div>
        )}

        {/* Auto-redirect notice */}
        <p className="mb-4 small" style={{ color: 'rgba(255,255,255,0.4)' }}>
          Returning to homepage in{' '}
          <span style={{ color: '#93c5fd', fontWeight: 700 }}>{countdown}s</span>
        </p>

        {/* Action buttons */}
        <div className="d-flex flex-wrap gap-3 justify-content-center">
          <Button
            as={Link}
            to="/"
            variant="light"
            className="fw-bold rounded-pill px-4 py-2 shadow"
            style={{ color: '#1a43bf' }}
          >
            <FaHome className="me-2" />
            Go to Homepage
          </Button>

          <Button
            as={Link}
            to="/colleges"
            className="fw-bold rounded-pill px-4 py-2"
            style={{
              background: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.3)',
              color: '#fff',
              backdropFilter: 'blur(8px)',
            }}
          >
            <FaSearch className="me-2" />
            Browse Colleges
          </Button>

          <Button
            variant="link"
            className="fw-bold rounded-pill px-4 py-2"
            style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft className="me-2" />
            Go Back
          </Button>
        </div>

        {/* Quick links */}
        <div className="mt-5 d-flex flex-wrap gap-3 justify-content-center">
          {[
            { label: 'Exams', to: '/exams' },
            { label: 'Rankings', to: '/rankings' },
            { label: 'Compare', to: '/compare' },
            { label: 'Admissions', to: '/admissions' },
            { label: 'Contact', to: '/contact' },
          ].map(link => (
            <Link
              key={link.to}
              to={link.to}
              style={{
                color: 'rgba(255,255,255,0.45)',
                textDecoration: 'none',
                fontSize: '0.85rem',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.target.style.color = '#93c5fd')}
              onMouseLeave={e => (e.target.style.color = 'rgba(255,255,255,0.45)')}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default NotFound;
