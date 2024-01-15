import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthProvider';
const PrivateRoute = () => {
  const auth = useAuth();

  // Check if auth is defined and has the authenticated property
  const isAuthenticated = auth && auth.authenticated;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
