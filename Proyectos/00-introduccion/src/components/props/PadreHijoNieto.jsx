import { useState } from "react";

const Nieto = (props) => {
  const { counter, handleIncrementCounter, handleDecrementCounter } = props;
  return (
    // aquello que quiero renderizar
    // siempre que queramos usar javascript hay que engrobarlo en {}
    <div className=" flex bg-gray-400 p-8 rounded-md text-center gap-3">
      <p className="text-2l font-bold mb-6">
        Contador Nieto <h2>{counter}</h2>
      </p>

      <button
        onClick={() => handleIncrementCounter(5)}
        className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600"
      >
        Incrementar
      </button>
      <button
        onClick={() => handleDecrementCounter(1)}
        className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600"
      >
        Decrementar
      </button>
    </div>
  );
};
const Hijo = (props) => {
  const { counter, handleIncrementCounter, handleDecrementCounter } = props;
  return (
    // aquello que quiero renderizar
    // siempre que queramos usar javascript hay que engrobarlo en {}
    <div className=" flex bg-gray-400 p-8 rounded-md text-center gap-3">
      <p className="text-2l font-bold mb-6">
        Contador Hijo <h2>{counter}</h2>
      </p>

      <button
        onClick={() => handleIncrementCounter(5)}
        className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600"
      >
        Incrementar
      </button>
      <button
        onClick={() => handleDecrementCounter(1)}
        className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600"
      >
        Decrementar
      </button>
      <Nieto
        counter={counter}
        handleIncrementCounter={() => handleIncrementCounter(2)}
        handleDecrementCounter={() => handleDecrementCounter()}
      />
    </div>
  );
};
const PadreHijoNieto = () => {
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState(0);
  // declaracion de los HOOKS

  // funciones
  function handleIncrementCounter(value = 1) {
    setCounter((prev) => prev + value);
  }

  function handleDecrementCounter(value = 1) {
    if (counter < value) {
      setCounter(() => 0);
    } else {
      setCounter((prev) => prev - value);
    }
  }

  return (
    <div className=" flex bg-gray-400 p-8 rounded-md text-center gap-3">
      <p className="text-2l font-bold mb-6">
        Contador Padre <h2>{counter}</h2>
      </p>

      <button
        onClick={() => handleIncrementCounter(5)}
        className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600"
      >
        Incrementar
      </button>
      <button
        onClick={() => handleDecrementCounter(1)}
        className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600"
      >
        Decrementar
      </button>
      <Hijo
        counter={counter}
        handleIncrementCounter={() => handleIncrementCounter(10)}
        handleDecrementCounter={() => handleDecrementCounter()}
      />
    </div>
  );
};

export default PadreHijoNieto;
