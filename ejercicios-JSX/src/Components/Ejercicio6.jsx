/**
 * @author Salvador Robles Gómez
 * @description Crea un componente CustomButton que acepte props para personalizar su apariencia. Debe admitir
 * props para el color de fondo, el texto y un evento onClick.
 */

const Ejercicio6 = ({ background, text, eventClick}) => {
    const estiloButton = {
        background: background,
    }
  return (
    <div>
      <button style={estiloButton} onClick={eventClick}>{text}</button>
    </div>
  )
}

export default Ejercicio6
