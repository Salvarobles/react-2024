/**
 * @author Salvador Robles Gómez
 * @description Renderiza una lista (<ul>) de elementos (<li>) usando map() en un array de nombres.
 *
 */
const Ejercicio2 = () => {
  const frutas = ["Manzana", "Banana", "Naranja", "Uva", "Piña"];
  return <div>{frutas.map((fruta) => <li key={fruta}>{fruta}</li>)}</div>;
};

export default Ejercicio2;