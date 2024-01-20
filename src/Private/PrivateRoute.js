// import React from 'react';
// import { Navigate, Outlet, useLocation } from 'react-router-dom';
// import { useAuth } from '../context/AuthProvider';

// const PrivateRoute = () => {
//   const auth = useAuth();
//   const location = useLocation(); // Call useLocation to get the location object

//   if (!auth) {
//     console.error('Authentication context is not available.'); // Log an error if auth is not available
//     return <Navigate to="/login" replace />;
//   }

//   if (!auth.user) {
//     console.log('User is not authenticated. Redirecting to login.'); // Log a message indicating the redirection
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

//   // If the user is authenticated, render the child components
//   return <Outlet />;
// };

// export default PrivateRoute;
