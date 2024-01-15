import React, { useState } from 'react';

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // Hardcoded credentials for testing
    const hardcodedEmail = 'test@gmail.com';
    const hardcodedPassword = '123test';

    if (email === hardcodedEmail && password === hardcodedPassword) {
      setAuthenticated(true);
      setUser({ email: hardcodedEmail });
    } else {
      setAuthenticated(false);
      setUser(null);
    }
  };

  const logout = () => {
    setAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ authenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return React.useContext(AuthContext);
};

export { AuthProvider, useAuth };
