import { createContext } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  function setCredentials(mail, user_id) {
    return { ...body, email: mail, id: user_id, isAuthenticated: true };
  }

  function dropCredentials() {
    return { ...body, isAuthenticated: false, email: null, id: null };
  }

  const body = {
    isAuthenticated: false,
    email: null,
    id: null,
    setCredentials,
    dropCredentials,
  };

  return <AuthContext.Provider value={body}>{children}</AuthContext.Provider>;
}

export { AuthProvider, AuthContext };
