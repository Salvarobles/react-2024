// import

import { useState } from "react"

// variables grobales
const Contador = () => {
  // variables locales
    const [counter, setCounter] = useState(0);
    const [value, setValue] = useState(0)
  // declaracion de los HOOKS
  
  // funciones 
    function handleIncrementCounter(value){
        setCounter((prev) => prev + parseInt(value, 10) ?? 0);
    }

    function handleDecrementCounter(){
        if (counter < 5) {
            setCounter(()=> 0);
        } else if (counter >=5 ){
            setCounter((prev)=> prev-5);
        }
    }

  return (
  // aquello que quiero renderizar
  // siempre que queramos usar javascript hay que engrobarlo en {}
    <>
        <h1>Ejemplo básico de contador</h1>
        <h2>{counter}</h2>
        <input type="number" value={value} onChange={(e) => setValue(e.target.value)}/>
        <button onClick={()=>handleIncrementCounter(value)}>Incrementar</button>
        <button onClick={handleDecrementCounter}>Decrementar</button>
    </>
  )
}

export default Contador