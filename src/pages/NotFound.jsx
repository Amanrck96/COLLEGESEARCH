import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container className="d-flex flex-column align-items-center justify-content-center min-vh-100 text-center py-5">
      <div className="mb-4">
        <h1 className="display-1 fw-extrabold text-primary" style={{ fontSize: '10rem', letterSpacing: '-2px' }}>404</h1>
        <h2 className="fw-bold text-dark mb-3">Oops! Page Not Found</h2>
        <p className="text-secondary mx-auto mb-4" style={{ maxWidth: '500px' }}>
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let's get you back on track!
        </p>
      </div>
      <div className="d-flex gap-3 justify-content-center">
        <Button as={Link} to="/" variant="primary" className="btn-primary-custom px-4 py-2 rounded-pill fw-bold">
          Go to Home
        </Button>
        <Button as={Link} to="/colleges" variant="outline-primary" className="px-4 py-2 rounded-pill fw-bold">
          Search Colleges
        </Button>
      </div>
    </Container>
  );
};

export default NotFound;
