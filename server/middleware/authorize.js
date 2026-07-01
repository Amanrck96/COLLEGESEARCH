// Shared authorization middleware
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || "supersecretcollegesearchkey";

const roleHierarchy = {
  'student': 1,
  'viewer': 2,
  'operator': 3,
  'admin': 4,
  'superadmin': 5
};

/**
 * Role-based authorization middleware.
 * @param {string} requiredRole - Minimum role required to access the route.
 */
export const authorize = (requiredRole) => {
  return async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: "Access denied. Token missing." });
    }

    const token = authHeader.split(' ')[1];
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      const userRole = decoded.role.toLowerCase();

      if (!roleHierarchy[userRole] || roleHierarchy[userRole] < roleHierarchy[requiredRole.toLowerCase()]) {
        return res.status(403).json({ error: "Access forbidden. Insufficient permissions." });
      }

      req.userId = decoded.id;
      req.userRole = decoded.role;
      next();
    } catch (err) {
      console.error("Auth middleware error:", err.message);
      return res.status(401).json({ error: "Invalid or expired session token." });
    }
  };
};

export default authorize;
