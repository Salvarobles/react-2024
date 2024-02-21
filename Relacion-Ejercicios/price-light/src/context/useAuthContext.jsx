import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { getValidateUsers } from "../api/usersApi";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [error, setError] = useState("");

  const login = (userForm) => {
    // Lógica de autenticación y configuración del usuario
    setUser(userForm);
  };

  const logout = () => {
    // Lógica para cerrar sesión
    setUser(false);
  };

  const validateUser = async (userForm, navigate) => {
    const users = await getValidateUsers();
    for (const userValidate of users) {
      if (
        userValidate.email === userForm.email &&
        userValidate.password === userForm.password
      ) {
        login(userForm);
        navigate('/');
        console.log("Usuario logeado");

        return;
      } else {
        setError("Usuario no Encontrado.");
        console.log("Usuario error");
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, error, validateUser, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
