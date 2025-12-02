import { Navigate, useLocation } from 'react-router-dom';

const fakeSession = {
  isAuthenticated: true,
  roles: ['user', 'admin'],
};

const hasRequiredRole = (requiredRoles) => {
  if (!requiredRoles || requiredRoles.length === 0) return true;
  return requiredRoles.some((role) => fakeSession.roles.includes(role));
};

const ProtectedRoute = ({ children, redirectPath = '/auth/login', roles }) => {
  const location = useLocation();

  if (!fakeSession.isAuthenticated || !hasRequiredRole(roles)) {
    return <Navigate to={redirectPath} replace state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
