import React, { createContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    //call login API
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
    //call logout API
  };

  const value = {
    isAuthenticated,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>;
};

export default AuthContext;
// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth phải được dùng bên trong AuthProvider");
//   }
//   return context;
// };
