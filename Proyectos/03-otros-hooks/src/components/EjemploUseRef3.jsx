import { useEffect, useRef, useState } from "react";

const EjemploUseRef3 = () => {
  const [contador, setContador] = useState(0);
  const botonRef = useRef();

  useEffect(() => {
    alert(contador);
  }, [contador])
  

  function handleClick(){
    setContador((prev)=> prev + 1);
    if (botonRef.current.style.backgroundColor == "red") {
        botonRef.current.style.backgroundColor = "blue"; 
    } else {
        botonRef.current.style.backgroundColor = "red"; 
    }
  }
  return (
    <div>
      <p>Contador: {contador}</p>
      <button ref={botonRef} onClick={handleClick}>Pulsar</button>
    </div>
  );
};

export default EjemploUseRef3;
