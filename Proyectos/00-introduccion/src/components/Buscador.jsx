import { useState } from "react";

const inicialState = ["manzana", "pera", "naranja", "uva"];

const Buscador = () => {
    const [filterdItems, setFilterdItems] = useState(inicialState);
    const [searchItem, setSearchItem] = useState("");
  return (
    // Formulario
    // ul los elementos del initial state
    // cada vez que escribo en el formulario realizaremos la busqueda
    <div>Lista</div>
  )
}

export default Buscador