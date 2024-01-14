/**
 * @author Salvador Robles Gómez 
 * @description Crea un componente ToggleVisibility que al hacer clic en un botón muestre u oculte un
 * elemento <p>.
 */

import { useState } from "react";

const Ejercicio9 = () => {
    const [toggleVisibility, setToggleVisibility] = useState(false);

    return (
      <div>
        <p>{toggleVisibility ? "Holaa 😎👋" : ""}</p>
        <button onClick={() => setToggleVisibility(!toggleVisibility)}>
          {toggleVisibility ? "No mostrar" : "Mostrar"}
        </button>
      </div>
    );
}

export default Ejercicio9
