/**
 * @author Salvador Robles Gómez
 * @description Añade un evento onClick a un botón que muestre un mensaje en la consola al ser presionado.
 */

const Ejercicio3 = () => {
  return (
    <div>
      <button
        onClick={() => {
          console.log("hola");
        }}
      >
        Pincha Aqui
      </button>
    </div>
  );
};

export default Ejercicio3;
