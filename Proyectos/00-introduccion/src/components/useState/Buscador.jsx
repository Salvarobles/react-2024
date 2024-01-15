import { useState } from "react";

const inicialState = ["manzana", "pera", "naranja", "uva"];

const Buscador = () => {
  const [filterdItems, setFilterdItems] = useState(inicialState);
  const [searchItem, setSearchItem] = useState("");

  function handleBuscar(searchItem) {

    setSearchItem(() => searchItem);
    
    setFilterdItems(inicialState.filter((fruta) => fruta.includes(searchItem)));
    console.log(searchItem);
  }

  return (
    <>
      <input
        type="text"
        value={searchItem}
        onChange={(e) => handleBuscar(e.target.value)}
      />
      <ul>
        Estas son las frutas:
        {filterdItems.map((filteredItem, i) => (
          <li key={i}>{filteredItem}</li>
        ))}
      </ul>
    </>
    // Formulario

    // ul los elementos del initial state
    // cada vez que escribo en el formulario realizaremos la busqueda
  );
};

export default Buscador;
