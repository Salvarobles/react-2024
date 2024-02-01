import { useEffect, useRef, useState } from "react";

const EjemploUseRef2 = () => {
  const [nombre, setNombre] = useState("");
  const inputRef = useRef(null);

  function handleFocus() {
    if (inputRef.current){
        inputRef.current.focus();
    }
  }
  return (
    <div>
      <label htmlFor="">Nombre: </label>
      <input
        type="text"
        id="nombre"
        value={nombre}
        ref={inputRef}
        onChange={(e) => setNombre(e.target.value)}
      />
      <button onClick={handleFocus}>Cambiar foco</button>
    </div>
  );
};

export default EjemploUseRef2;
