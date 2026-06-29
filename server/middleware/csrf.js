/**
 * Simple CSRF Validation Middleware
 */
export const verifyCSRF = (req, res, next) => {
  // Safe methods do not require CSRF protection
  if (['GET', 'HEAD', 'OPTIONS'].includes(req.method)) {
    return next();
  }

  const csrfHeader = req.headers['x-csrf-token'];
  if (!csrfHeader) {
    return res.status(403).json({ error: "Forbidden: CSRF token missing." });
  }

  // Validate the CSRF token has a reasonable structure
  if (typeof csrfHeader !== 'string' || csrfHeader.length < 5) {
    return res.status(403).json({ error: "Forbidden: Invalid CSRF token." });
  }

  next();
};

export default verifyCSRF;
