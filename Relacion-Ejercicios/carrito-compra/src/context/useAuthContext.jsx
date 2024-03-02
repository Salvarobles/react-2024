import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { getUserById, getUsers } from "../apis/usersApi";
import Swal from "sweetalert2";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [error, setError] = useState("");
  const [carrito, setCarrito] = useState([]);

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

    // Verificar si el producto ya está en el carrito
    const productoEnCarrito = carrito.find(
      (productoCarrito) => productoCarrito.producto.id === producto.id
    );

    if (productoEnCarrito) {
      // El producto ya está en el carrito, incrementar la cantidad
      setCarrito((carrito) =>
        carrito.map((item) =>
          item.producto.id === producto.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // El producto no está en el carrito, agregarlo con cantidad 1
      setCarrito((carrito) => [...carrito, { producto, quantity: 1 }]);
    }

    Swal.fire({
      icon: "success",
      title: `Producto añadido: ${producto.title}`,
    });
  };

  const eliminarCarrito = (e, productId) => {
    e.preventDefault(); // Don't forget the parentheses

    // Paso 1: Actualizar la cantidad si es mayor que 1, o devolver el mismo item
    const nuevoCarrito = carrito.map((item) =>
      item.producto.id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );

    // Paso 2: Filtrar los elementos con cantidad diferente de cero
    const nuevoCarritoFiltrado = nuevoCarrito.filter(
      (item) => item.quantity !== 0
    );

    // Aplicar el nuevo carrito al estado
    setCarrito(nuevoCarritoFiltrado);

    // OPCION 2
    // setCarrito(
    //   (carrito) =>
    //     carrito
    //       .map((item) => {
    //         if (item.producto.id === productId) {
    //           if (item.quantity > 1) {
    //             return { ...item, quantity: item.quantity - 1 };
    //           } else {
    //             // Elminar el producto del carrito si la cantidad es 1 o menos
    //             return null; // Retorna null para indicar que se debe eliminar este elemento
    //           }
    //         }
    //         return item; // Si no es el producto que estamos buscando, retorna el mismo item sin cambios
    //       })
    //       .filter(Boolean) // Filtra los elementos nulos (productos a eliminar)
    // );
  };

  const validateUser = async (userForm, navigate) => {
    try {
      const users = await getUsers();
      users.forEach((userData) => {
        if (
          userData.email === userForm.email &&
          userData.password === userForm.password
        ) {
          login(userData);
          navigate("/");
          console.log("usuario logueado");
          return;
        }
      });
    } catch (error) {
      setError("No se ha encontrado el usuarios", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        error,
        validateUser,
        logout,
        carrito,
        añadirCarrito,
        eliminarCarrito,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
