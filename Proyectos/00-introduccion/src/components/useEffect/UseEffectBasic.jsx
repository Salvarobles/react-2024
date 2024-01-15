import { useEffect, useState } from "react";

const UseEffectBasic = () => {
  console.log("hola desde el inicio");

  const [counter, setCounter] = useState(0);

  // PRIMER USEEFFECT (NO RECOMENDADO)
  //   useEffect(() => {
  //     console.log("hola desde el useEffect");
  //   });
  // Cuando creo un useEffect sin dependencias
  // entonces se ejecutara cada vez que cambio cualquier estado

  // SEGUNDO USEEFFECT
  //   useEffect(() => {
  //     console.log("hola desde el useEffect");
  //   }, []); // array de dependencias
  // ejecuta lo que hay dentro solo
  // cuando se monta por primera vez

  // TERCER USEEFFECT
  //   useEffect(() => {
  //     console.log("hola desde el useEffect");
  //   }, [counter]); // cunado cambie el estado, se ejecutara. (Puede llevar mas de un estado en la dependencia)

  //CUARTA USEEFFECT
  //   useEffect(() => {
  //     console.log("hola desde un return")
  //     return () => {
  //         // cuando se desmonte el componente se ejecutará
  //         // lo que hay en el return ...
  //     };
  //   }, []);

  function handleIncrementCounter(value) {
    setCounter((prev) => prev + value);
  }

  return (
    <>
      <h1>Ejemplo básico de contador</h1>
      <h2>{counter}</h2>
      <button onClick={() => handleIncrementCounter(1)}>Incrementar</button>
    </>
  );
};

export default UseEffectBasic;
