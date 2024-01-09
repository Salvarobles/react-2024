// import

import { useState } from "react";

// variables grobales
const Contador = () => {
  // variables locales
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState(0);
  // declaracion de los HOOKS

  // funciones
  function handleIncrementCounter(value) {
    setCounter((prev) => prev + value);
  }

  function handleDecrementCounter(value) {
    if (counter < value) {
      setCounter(() => 0);
    } else {
      setCounter((prev) => prev - value);
    }
  }

  return (
    // aquello que quiero renderizar
    // siempre que queramos usar javascript hay que engrobarlo en {}
    <>
      <h1>Ejemplo básico de contador</h1>
      <h2>{counter}</h2>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button onClick={() => handleIncrementCounter(value)}>Incrementar</button>
      <button onClick={() => handleDecrementCounter(value)}>Decrementar</button>
    </>
  );
};

export default Contador;
