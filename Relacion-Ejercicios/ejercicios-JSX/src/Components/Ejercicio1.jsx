/**
 * @author Salvador Robles Gómez
 * @description Renderiza un elemento <p> con el texto "Bienvenido" si una variable isLoggedIn es true, de lo
 * contrario muestra "Por favor, inicia sesión"
 */
import { useState } from "react";

const Ejercicio1 = () => {
  const [isLoggedIn, setIsLooggedIn] = useState(false);

  return (
    <div>
      <p>{isLoggedIn ? "Bienvenido" : "Porfavor inicia sesion"}</p>
      <button onClick={() => setIsLooggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Salir" : "Iniciar Sesion"}
      </button>
    </div>
  );
};

export default Ejercicio1;
