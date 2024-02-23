import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [signInFirebase, setSignInFirebase] = useState(null);
    console.log(signInFirebase)
  const login = (userData) => {
    // Lógica de autenticación y configuración del usuario
    setSignInFirebase(userData);
  };

  const logout = () => {
    // Lógica para cerrar sesión
    setSignInFirebase(null);
  };

  return (
    <AuthContext.Provider value={{ signInFirebase, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth debe ser utilizado dentro de un AuthProvider');
    }
    return context;
  };

export { AuthProvider, useAuth };
