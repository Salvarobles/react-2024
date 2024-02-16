import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [signInFirebase, setSignInFirebase] = useState(null);
    console.log(signInFirebase)

  const login = (userData) => {
    // Lógica de autenticación y configuración del usuario
    setSignInFirebase(userData);
  };

  const logout = () => {
    // Lógica para cerrar sesión
    setSignInFirebase(false);
  };

  return (
    <AuthContext.Provider value={{ signInFirebase, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext)
}