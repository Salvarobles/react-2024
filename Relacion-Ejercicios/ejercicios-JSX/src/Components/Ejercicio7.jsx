/**
 * @author Salvador Robles Gómez
 * @description Crea un componente ConditionalRender que acepte una prop condition. Si condition es
 * true, muestra un párrafo con el texto "Condición verdadera"; de lo contrario, muestra un párrafo
 * con el texto "Condición falsa".
 */

const Ejercicio7 = ({condition}) => {
  return (
    <div>
        <p>
            {condition ? "Condición verdadera" : "Condición falsa"}
        </p>
    </div>
  )
}

export default Ejercicio7
