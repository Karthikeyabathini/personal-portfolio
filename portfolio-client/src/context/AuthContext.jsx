import { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem("portfolioToken"));

  const login = (jwt) => {
    localStorage.setItem("portfolioToken", jwt);
    setToken(jwt);
  };

  const logout = () => {
    localStorage.removeItem("portfolioToken");
    setToken(null);
  };

  const value = useMemo(() => ({ token, login, logout, isAuthenticated: Boolean(token) }), [token]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
