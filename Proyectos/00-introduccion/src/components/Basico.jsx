

function Basico() {
    const nombre = "Salva";
  const edad = 21;
  const array = ["manzana", "platano", "banana"];
  const obj = {nombre: "Salva", edad: "21", apellidos: "Robles Gómez"};
  const elementJSX = (
    <div>
        <p>El mundo es maravilloso</p>
    </div>
  )
  // declaracion de los HOOKS
  
  // funciones 
  const sumar = (n1, n2) => {
    return n1 + n2;
  }
  return (
  // aquello que quiero renderizar
  // siempre que queramos usar javascript hay que engrobarlo en {}
    <>
        <div>Tu nombre es {nombre} </div>
        <p>Mi edad es {edad}</p>
        <p>Sumo los numero 5 + 7 = {sumar(5,7)}</p>
        <p>True {true.toString()}</p>
        <p>Frutas</p>
        <ul>
            {
                array.map((fruta, key)=><li key={key}>{fruta}</li>)
            }
        </ul>
        <p>Nombre obj: {obj.nombre}</p>
        <p>Edad obj: {obj.edad}</p>
        <p>Apellidos obj: {obj.apellidos}</p>
        {elementJSX}
    </>

  )
}

export default Basico