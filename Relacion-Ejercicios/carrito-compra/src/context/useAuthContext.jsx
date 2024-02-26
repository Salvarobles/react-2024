import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { getUserById, getUsers } from "../apis/usersApi";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [error, setError] = useState("");
  const [carrito, setCarrito] = useState([])

  const login = (userData) => {
    // Lógica de autenticación y configuración del usuario
    setUser(userData);
  };

  const logout = () => {
    // Lógica para cerrar sesión
    setUser(false);
  };

  const añadirCarrito = (e, producto) => {
    e.preventDefault;
    setCarrito((carrito) => [...carrito, producto]);
  }

  const eliminarCarrito = (e, productId) => {
    e.preventDefault(); // Don't forget the parentheses
    setCarrito((carrito) => carrito.filter((producto) => producto.id !== productId));
  };

  const validateUser = async (userForm, navigate) => {
    try {
      const users = await getUsers();
      users.forEach((userData) => {
        if (userData.email === userForm.email && userData.password === userForm.password) {
          login(userData);
          navigate('/')
          console.log('usuario logueado')
          return
        }
      })
    } catch (error) {
      setError('No se ha encontrado el usuarios', error)
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, error, validateUser, logout, carrito, añadirCarrito, eliminarCarrito }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
