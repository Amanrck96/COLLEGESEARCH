import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container className="py-5 my-5 text-center">
      <h1 className="display-1 fw-bold text-primary">404</h1>
      <h2 className="fw-bold mb-3">Page not found</h2>
      <p className="text-muted mb-4">
        The page you are looking for does not exist or may have been moved.
      </p>
      <div className="d-flex gap-3 justify-content-center flex-wrap">
        <Button as={Link} to="/" variant="primary" className="rounded-pill px-4">
          Go to Home
        </Button>
        <Button as={Link} to="/colleges" variant="outline-primary" className="rounded-pill px-4">
          Browse Colleges
        </Button>
      </div>
    </Container>
  );
};

export default NotFound;
